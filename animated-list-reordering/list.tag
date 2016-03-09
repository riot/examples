<list>

  <h1>Sorting options</h1>
  <button onclick={ shuffle }>
    Shuffle
  </button>
  <button onclick={ sortBy.bind(this, 'age') }>
    Sort by age
  </button>
  <button onclick={ sortBy.bind(this, 'name') }>
    Sort by Name
  </button>

  <h2>People Collection</h2>
  <ol>
    <li name="person" each={ person in people }>
      { person.name } - { person.age }
    </li>
  </li>

  <script>
    // some private random variables
    var amount = 50,
      names = [
        'Jack', 'Susy', 'Mel', 'Fred', 'George',
        'Bob', 'Roger', 'Lucy', 'Tino', 'Lucy',
        'Nina', 'Rudy', 'Greg', 'Albert', 'Rick'
      ],
      // cache the flip instance
      flip

    // people collection
    this.people = []

    // prepare the items only once
    while (amount--) {
      this.people.push({
        name: names[~~(Math.random() * names.length)],
        age: ~~(Math.random() * 100) + 1 // avoid 0
      })
    }

    // helper function to shuffle the items in the array
    function shuffle(o) {
      var j, x, i
      for (i = o.length; i; i -= 1) {
        j = Math.floor(Math.random() * i)
        x = o[i-1]
        o[i-1] = o[j]
        o[j] = x
      }
      return o
    }

    // create the flip instance
    // pay attention that if your collection
    // will add new items you must update
    // the flip instance
    this.on('mount', function() {
      // create the flip group
      flip = new FLIP.group(
        this.person.map(function(person) {
          return {
            element: person,
            duration: 750,
            // easeInOutCubic
            easing: function (t) {
              return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
            }
          }
        })
      );
    })
    
    makeFlip() {
      // cache the elements position
      // before the DOM gets updated
      flip.first()

      // run the animation when the DOM
      // is updated
      this.one('updated', function() {
        flip.last()
        flip.invert()
        flip.play()
      })
    }

    /**
     * Shuffle the people order without any logic
     */
    shuffle() {
      shuffle(this.people)
      this.makeFlip()
    }

    /**
     * Sort the people array by a single property
     */
    sortBy(prop) {
      this.people.sort(function(a, b) {
        if (a[prop] < b[prop])
            return -1
          else if (a[prop] > b[prop])
            return 1
          else
            return 0
      })
      this.makeFlip()
    }
  </script>

  <style scoped>

    :scope {
      font: 1.2rem 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      display: inline-block;
    }

    ol {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    ol li {
      padding: 1rem;
      width: 50%;
      float: left;
      box-sizing: border-box;
      background: white;
      border: 1px solid #9fdeff;
    }

    @media screen and (max-width: 768px) {
      ol li {
        width: 100%;
      }
    }

  </style>


</list>
