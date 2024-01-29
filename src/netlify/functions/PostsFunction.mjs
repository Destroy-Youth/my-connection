// domain/.netlify/functions/PostsFunction
exports.handler = async (request, context) => {
  return {
    statusCode: 200,
    body: {
      id: '0123',
    },
  }
}
