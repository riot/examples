<car-key>
  <div>
    <button onclick={ start }>Start engine</button>
  </div>

  <script>
    start() {
      car.trigger('start')
    }
  </script>
</car-key>
