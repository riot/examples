/**
 * syncEvent
 * https://github.com/cognitom/riot-mixin-pack/tree/master/sync-event
 */
riot.mixin({
  /** Init mixin on each tag */
  init: function() {
    var self = this
    self._shouldSyncFromOpts = true
    self.on('update', function() {
      if (self._shouldSyncFromOpts) self.trigger('sync')
      self._shouldSyncFromOpts = true
    })
  },
  /** Skip sync event once */
  skipSync: function() {
    this._shouldSyncFromOpts = false
    return this // return this for method chain
  }
})

/**
 * domEvent
 * https://github.com/cognitom/riot-mixin-pack/tree/master/dom-event
 */
riot.mixin({
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
