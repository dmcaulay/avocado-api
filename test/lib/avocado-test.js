var config = {
  "id" : "DEV_ID",
  "key" : "DEV_KEY"
}
var credentials = {
  email: "USER_EMAIL",
  password: "USER_PASSWORD"
}
var avocado = require('../../lib/avocado')
avocado.setup(config)
var session = avocado.login(credentials)

describe('avocado', function() {
  it('makes avocado requests', function(done) {
    session.request({path: '/calendar'}, function(err, body) {
      console.log('err',err)
      console.log('body',body)
      done()
    })
  })
})
