module.exports = function (map) {
  return Object.fromEntries(
    Object.entries(map).map(([name, width]) => [name, `${width}px`])
  )
}
