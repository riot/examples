/** Convert data format from Yahoo! into simple form */
function convert(data) {
  var RE = /^USD\//
  return data.list.resources
    .filter(function(c) { return RE.test(c.resource.fields.name) })
    .map(function(c) {
      return {
        title: c.resource.fields.name.replace(RE, ''),
        price: c.resource.fields.price
      }
    })
    .sort(function(a, b) { return a.price - b.price })
}
