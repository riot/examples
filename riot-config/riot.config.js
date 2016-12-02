import buble from 'buble'
import postcss from 'postcss'
import cssnext from 'postcss-cssnext'

export default {
  type: 'buble',
  style: 'cssnext',
  parsers: {
    js: { buble: js => buble.transform(js) },
    css: { cssnext: (tagName, css) => {
      // A small hack: it passes :scope as :root to PostCSS.
      // This make it easy to use css variables inside tags.
      css = css.replace(/:scope/g, ':root')
      css = postcss([cssnext]).process(css).css
      css = css.replace(/:root/g, ':scope')
      return css
    }}
  }
}
