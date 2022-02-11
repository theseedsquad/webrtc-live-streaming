module.exports = function (object, field, fallback = null) {
  return object[field] || fallback
}
