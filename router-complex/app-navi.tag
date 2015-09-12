<app-navi>

  <a href="#">H</a>
  <a href="#first">F</a>
  <a href="#second">S</a>

  <style scoped>
    :scope {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      box-sizing: border-box;
      font-family: sans-serif;
      text-align: center;
      color: #666;
      background: #333;
      width: 50px;
      transition: width .2s;
    }
    :scope:hover {
      width: 60px;
    }
    a {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding: 0 .8em;
      color: white;
      text-decoration: none;
      background: #444;
    }
    a:hover {
      background: #666;
    }
  </style>

</app-navi>
