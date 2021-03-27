const Module = require('../build/cpp/rwfiles');
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('RWFiles Wasm Library', () => {
  it('Should load module', async () => {
    Module.onRunTimeInitialized = new Promise((resolve) => {
      resolve(api);
      var text_write = 'This is a test text';
      api.writeFile('test_output.txt', text_write);
      var text_read = api.readFile('test_output.txt');
      expect(text_read).to.be.equal(text_write);
      console.log(`Text read: ${text_read}`);
    });
    await Module.onRunTimeInitialized;
    var api = {
      writeFile: Module.cwrap('_ZN14ReadWriteFiles9writeFileENSt3__212basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEES6_', 'void', ['string','string']),
      readFile: Module.cwrap('_ZN14ReadWriteFiles8readFileENSt3__212basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE', 'string', ['string']),
    };
    console.log(api.readFile);
  });
});
