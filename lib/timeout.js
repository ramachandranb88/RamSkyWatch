const {defineSupportCode} = require('cucumber')

defineSupportCode(({setDefaultTimeout}) => {
  setDefaultTimeout(90 * 1000)
})
