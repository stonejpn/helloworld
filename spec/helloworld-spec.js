import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { jsdom } from 'jsdom';

import HelloWorld from '../src/helloworld';

chai.use(sinonChai);

describe('HelloWorld', () => {
  let [document] = [];

  beforeEach(() => {
    document = jsdom('<!DOCTYPE html><html lang="en"><body><div id="app-root"></div></body></html>');
  });

  it('コンストラクターでDOMContentLoadedのリスナーが設定される', () => {
    const addEventListener = sinon.stub(document, 'addEventListener');

    // eslint-disable-next-line no-new
    new HelloWorld(document);

    expect(addEventListener).to.have.been.calledWith('DOMContentLoaded');
  });

  it('sayHelloでinnerTextが設定される', () => {
    const element = document.getElementById('app-root');
    // eslint-disable-next-line no-unused-expressions
    expect(element.innerText).to.be.undefined;

    const app = new HelloWorld(document);
    app.sayHello();

    expect(element.innerText).to.be.equal('Hello world!!');
  });

  it('DOMContentLoadedイベントでsayHello()がコールされる', () => {
    const app = new HelloWorld(document);
    const sayHello = sinon.stub(app, 'sayHello');

    // イベントを発行
    // @see node_modules/jsdom/lib/jsdom/living/nodes/Document-impl.js Line:528
    const event = document.createEvent('HTMLEvents');
    event.initEvent('DOMContentLoaded', false, false);
    document.dispatchEvent(event);

    // eslint-disable-next-line no-unused-expressions
    expect(sayHello).to.have.been.called;
  });
});
