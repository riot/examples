<search>
  <form onsubmit={ search }>
    <label>
      <span>
        Search a movie
      </span>
      <input
        oninput={ search }
        onchange={ search }
        name='s'
        placeholder='28 Days Later..'
        type='search' />
    </label>
  <form>

  <div if={ isLoading } class='loader'>
    <img src='puff.svg' />
  </div>

  <p class='error' if={ error }>{ error }</p>

  <div if={ results.length }>
    <ul>
      <li each={ results }>
        <a href="http://www.imdb.com/title/{ imdbID }" target="_blank">{ Title }</a>
        <span>{ Year }</span>
      </li>
    </ul>
  </div>

  <script>

  var lastSearch = null,
    /**
     * Reset tag attributes to hide the errors and cleaning the results list
     */
    reset = function() {
      this.results = []
      this.error = false
    }.bind(this)

    /**
     * Debounce the api requests
     */
    doApiRequest = debounce(function(search) {
      fetch('http://www.omdbapi.com/?s=' + search)
        .then(function(res) {
          return res.json()
        })
        .then(function(data) {
          reset()

          if (this.s.value) {
            if (data.Search) this.results = data.Search
            else this.error = data.Error
          }

          this.isLoading = false
          this.update()
        }.bind(this))
    }.bind(this), 300, false)

  /**
   * Public api/methods
   */

  this.results = []

  /**
   * Search callback
   */
  search(e) {

    var search = this.s.value

    if (!search) {
      reset()
    } else if (lastSearch != search)  {
      reset()
      this.isLoading = true
      doApiRequest(search)
    }

    lastSearch = search
  }

  </script>

  <style scoped>
    :scope {
      position: absolute;
      top: 2rem;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .loader {
      margin: 6rem 0 0;
    }
    .error {
      color: #FFFAAA;
      margin: 1rem 0;
    }
    label {
      align-items: center;
      display: flex;
      flex-direction: column;
      font-size: 1.6rem;
    }
    label span {
      text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
    }
    input {
      margin: 1rem 0 0;
      font-size: 1.6rem;
      font-weight: 300;
      padding: 0.8rem 1rem;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.05);
      background: rgba(255, 255, 255, 0.05);
      transition: all 0.3s;
      box-shadow: 1px 1px 2px rgba(0,0,0, 0.3);
      -moz-appearance:none;
      -webkit-appearance:none;
      outline: none;
    }
    input:focus {
      border: 1px solid transparent;
      background: rgba(255, 255, 255, 0.08);
    }
    ul {
      padding: 0;
      margin: 1rem 0 2rem;
    }
    ul li {
      padding: 0.6rem 1rem;
      margin: 1px 0;
      line-height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: space-between;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 0 2px rgba(0,0,0, 0.3);
      box-sizing: border-box;
    }
    ul li:hover,
    ul li:active,
    ul li:focus {
      background: rgba(255, 255, 255, 0.1);
    }
    ul li a {
      margin: 0 0.6rem 0 0;
      text-decoration: none;
      color: white;
    }
    ul li span {
      opacity: 0.5;
    }
  </style>
</search>