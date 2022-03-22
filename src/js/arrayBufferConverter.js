
export default class ArrayBufferConverter {
  static load(buffer) {
    ArrayBufferConverter.arrayBuffer = new Uint16Array(buffer);
  }

  static toString() {
    let dataString = '';
    for (let i = 0; i < ArrayBufferConverter.arrayBuffer.length; i += 1) {
      dataString += String.fromCharCode(ArrayBufferConverter.arrayBuffer[i]);
    }
    return dataString;
  }
}
ArrayBufferConverter.arrayBuffer = [];
