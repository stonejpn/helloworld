import HelloWorld from '../src/helloworld';

describe('HelloWorld', () => {
  let [appRoot] = [];

  beforeEach(() => {
    appRoot = document.createElement('div');
    appRoot.setAttribute('id', 'app-root');
    document.body.appendChild(appRoot);
  });

  it('テキストノードが追加される', () => {
    HelloWorld(document, appRoot);
    expect(appRoot.innerText).to.be.equal('Hello world!!');
  });
});
