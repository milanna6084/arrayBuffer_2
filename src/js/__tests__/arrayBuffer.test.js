import ArrayBufferConverter from '../arrayBufferConverter';
import getBuffer from '../getBuffer';

test('get string from arrayBuffer', () => {
  ArrayBufferConverter.load(getBuffer());
  const result = ArrayBufferConverter.toString();

  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(result).toEqual(expected);
});
