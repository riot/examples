/* eslint-disable no-console, @typescript-eslint/no-var-requires, fp/no-loops, fp/no-mutating-methods */

/**
 * Quick typescript types checker for riot tags
 */


const ts = require('typescript')
const path = require('path')

const RIOT_FILE_TYPINGS = path.resolve('app/typings.d.ts')

function reportDiagnostic(diagnostic, formatHost) {
  console.error(diagnostic.file.fileName)
  console.error(
    'Error',
    diagnostic.code,
    ':',
    ts.flattenDiagnosticMessageText(
      diagnostic.messageText,
      formatHost.getNewLine()
    )
  )
}

function resolveModuleNames(
  moduleNames,
  containingFile,
  fileRoot,
  compilerOptions
) {
  const moduleSearchLocations = [fileRoot]
  const moduleExtensions = ['.d.ts', '.ts', '.riot']
  const resolvedModules = []

  for (const moduleName of moduleNames) {
    // try to use standard resolution
    const result = ts.resolveModuleName(moduleName, containingFile, compilerOptions, {
      fileExists: ts.sys.fileExists,
      readFile: ts.sys.readFile
    })

    if (result.resolvedModule) {
      resolvedModules.push(result.resolvedModule)
      break
    } else {
      // check fallback locations
      for (const location of moduleSearchLocations) {
        for (const extension of moduleExtensions) {
          const fullPath = path.resolve(path.join(location, path.dirname(moduleName)))
          const basename = path.basename(moduleName, extension)
          const modulePath = path.join(fullPath, `${basename}${extension}`)

          if (ts.sys.fileExists(modulePath)) {
            resolvedModules.push({
              resolvedFileName: modulePath,
              extension,
              isExternalLibraryImport: false
            })
            break
          }
        }
      }
    }
  }

  return resolvedModules
}

const config = ts.parseConfigFileWithSystem('tsconfig.json', {}, ts.sys)
const compilerOptions = config.options

module.exports = function check(sourceFile, contents, fileRoot) {
  let output
  let map
  const sourceFileWithoutExtension = sourceFile.replace('ts', '')
  // Create a compilerHost object to allow the compiler to read and write files
  const compilerHost = {
    getSourceFile: function(filename, languageVersion) {
      if (filename === sourceFile)
        return ts.createSourceFile(filename, contents, config.target, '0')

      const sourceText = ts.sys.readFile(filename)
      return sourceText !== undefined
        ? ts.createSourceFile(filename, sourceText, languageVersion)
        : undefined
    },
    writeFile: (name, text) => {
      if (name.replace('js', '') === sourceFileWithoutExtension) {
        output = text
      }
      if (name.replace('js.map', '') === sourceFileWithoutExtension) {
        map = text
      }
    },
    getCurrentDirectory: ts.sys.getCurrentDirectory,
    getCompilationSettings: () => compilerOptions,
    getDefaultLibFileName: ts.getDefaultLibFilePath,
    fileExists: ts.sys.fileExists,
    readFile: ts.sys.readFile,
    getNewLine: () => ts.sys.newLine,
    getCanonicalFileName: fileName =>
      ts.sys.useCaseSensitiveFileNames ? fileName : fileName.toLowerCase(),
    useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,
    resolveModuleNames: (moduleNames, containingFile) => resolveModuleNames(
      moduleNames,
      containingFile,
      fileRoot,
      compilerOptions
    )
  }
  // Create a program from inputs
  const program = ts.createProgram([
    RIOT_FILE_TYPINGS,
    sourceFile
  ], compilerOptions, compilerHost)
  const emitResult = program.emit()
  const allDiagnostics = ts
    .getPreEmitDiagnostics(program)
    .concat(emitResult.diagnostics)

  allDiagnostics.forEach(e => reportDiagnostic(e, compilerHost))

  return { diagnostics: allDiagnostics, code: output, map }
}

