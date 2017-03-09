const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;
chai.use(require('sinon-chai'));

const HelloWorld = require('../src/helloworld');

describe('HelloWorld', () => {
  it('greeting', () => {
    const response = {
      writeHead: sinon.spy(),
      end: sinon.spy(),
    };

    HelloWorld.greeting(response);
    expect(response.writeHead).to.have.been.calledWith(200, { 'Content-Type': 'text/plain' });
    expect(response.end).to.have.been.calledWith('Hello world!!\n');
  });
});
