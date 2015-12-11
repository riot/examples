riot.mixin('domEvent', {
  /**
   * Trigger Event on DOM (root element of the tag)
   * @param { string } eventName - the name of the event. ex: 'change'
   */
  triggerDomEvent: function(eventName) {
    var self = this
    setTimeout(function() {
      var e
      if (typeof Event == 'function') { // Standard browsers
        e = new Event(eventName)
      } else { // IE 9 ~ 11
        e = document.createEvent('Event')
        e.initEvent(eventName, true, true)
      }
      /** dispatch an event */
      self.root.dispatchEvent(e)
    }, 0)
  }
})
