const getDefault = require('./get-default.js')

module.exports = function (items, field, values) {
  return items.map((item) =>
    Object.assign({}, item, {
      [field]: getDefault(values, item[field], item[field]),
    })
  )
}
