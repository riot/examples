<car-key>
  <div>
    <button onclick={ start }>Start engine</button>
  </div>

  start() {
    car.trigger('start')
  }
</car-key>
