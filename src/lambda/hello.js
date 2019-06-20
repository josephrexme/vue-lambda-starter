export function handler(event, context, callback) {
  // eslint-disable-next-line
  console.log(event);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello world' })
  });
}
