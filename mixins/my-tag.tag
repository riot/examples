<my-tag>
  <h1>{ message }</h1>

  <script>
    this.mixin('MessageMixin')
    this.message = this.getMessage()
  </script>

  <style scoped>
    h1 {
      color: grey;
    }
  </style>
</my-tag>
