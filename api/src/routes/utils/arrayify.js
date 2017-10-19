export default arrayify
// Here's where you'll write arrayify. Look at
// `api/src/routes/utils/arrayify.js` for instructions.

function arrayify(input) {
  if (Array.isArray(input)) {
    return input
  }
  return input ? [input] : []
}
