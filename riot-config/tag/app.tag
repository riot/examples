<app>
  <h1>{ title }</h1>
  <p>This example shows how to use the next web standards with riot.config.js:</p>
  <ul>
    <li>bublé: it transpiles ES6 into ES5 (an faster alternative to <a href="https://babeljs.io/">babel</a>)</li>
    <li>cssnext: it transforms new CSS specs into more compatible CSS.</li>
  </ul>

  <script>
    const name = 'bublé and cssnext'
    this.title = `Hello ${ name }!`
  </script>

  <style>
    :scope {
      --riot-color: #f04;
    }
    h1 {
      color: var(--riot-color);
      border-bottom: 1px solid var(--riot-color);
    }
  </style>
</app>
