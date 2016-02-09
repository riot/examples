<app-navi>

  <a href="/">H</a>
  <a href="/first">F</a>
  <a href="/second">S</a>

  <script>
    var self = this

    var r = riot.route.create()
    r(highlightCurrent)

    function highlightCurrent(id) {
      var myLinks = self.root.querySelectorAll('a[href]'), // Grab any anchor elements with href attrs
          i, l, thisLink, thisLinkHref, thisLinkIsSelected,      // Iterator variables
          nodesToDeselect = [], nodesToSelect = [];                  // Batch DOM ops

      for (i=0, l=myLinks.length;i<l;i++) {
        thisLink = myLinks[i];
        thisLinkHref = thisLink.getAttribute('href').slice(1);
        thisLinkIsSelected = thisLinkHref == id;
        if ( thisLinkIsSelected ) {
          nodesToSelect.push(thisLink);
        } else {
          nodesToDeselect.push(thisLink);
        }
      }
      for (i=0, l=nodesToDeselect.length;i<l;i++) {
        thisLink = nodesToDeselect[i];
        removeClass(thisLink, "selected");
      }
      for (i=0, l=nodesToSelect.length;i<l;i++) {
        thisLink = nodesToSelect[i];
        addClass(thisLink, "selected");
      }
    }

    function addClass(el, cls) {
    if (el.classList)
      el.classList.add(cls);
    else
      el.className += ' ' + cls;
    }
    
    function removeClass(el, cls) {
    if (el.classList)
      el.classList.remove(cls);
    else
      el.className = el.className.replace(new RegExp('(^|\\b)' + cls.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  </script>

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
    a.selected {
      background: teal;
    }
  </style>

</app-navi>
