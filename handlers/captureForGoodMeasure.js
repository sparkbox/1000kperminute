module.exports = function captureForGoodMeasure(request, response) {
  console.log('Handled!')

  response.status(200).end()
}
