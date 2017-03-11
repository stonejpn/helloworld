import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import HelloWorld from '../src/helloworld';

chai.use(sinonChai);

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
