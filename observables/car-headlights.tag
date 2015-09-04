<car-headlights>
  <div class="light" if={ engineOn }></div>
  <div class="light" if={ engineOn }></div>

  <script>
    var self = this
    car.on('start', function () {
      self.engineOn = true
      self.update()
    })
  </script>

  <style>
    .light {
      display: inline-block;
      margin: 20px;
      height: 50px;
      width: 50px;
      background: #FFD75A;
      border: 2px solid #444;
      border-radius: 50%;
   }
  </style>
</car-headlights>
