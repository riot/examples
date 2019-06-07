<app>

  <div class="app">
    <h3>Riot with GraphQL</h3>

    <p>
      { this.name }
    </p>

    <button onclick={ initialize } type="button" class="ak-button ak-button__appearance-primary">
      Initial GraphQL fetch
    </button>
  </div>

  <script>
    import gql from 'graphql-tag';
    
    this.name = 'Before GraphQL'

    this.initialize = (e) => {
      this.name = 'Loading...'
      this.update()

      const query = gql`query bestDroid {
        hero {
          name
        }
      }`
      this.apollo.query({query: query}).then(({ data }) => {
        console.log('Promise executed')
        this.name = `After GraphQL... the GraphQL response ${data.hero.name}`
        this.update()
      })
    }
  </script>
</app>
