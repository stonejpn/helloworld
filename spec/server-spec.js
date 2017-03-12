import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import server from '../src/server';

chai.use(chaiHTTP);

describe('server', () => {
  it('ポートは8000番', () => {
    expect(server.address().port).to.be.equal(8000);
  });

  describe('サーバーレスポンス', () => {
    let [request] = [];

    beforeEach(() => {
      request = chai.request(server).get('/');
    });

    it('ステータスとヘッダー', () => request
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.have.header('content-type', 'text/plain');
      })
      .catch((err) => { throw err; }));

    it('表示されているテキスト', () => request
      .then((res) => {
        expect(res.text).to.be.equal('Hello world!!\n');
      })
      .catch((err) => { throw err; }));
  });
});
