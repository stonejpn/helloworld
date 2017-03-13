export default class HelloWorld {
  constructor(document) {
    document.addEventListener('DOMContentLoaded', () => {
      this.sayHello();
    });
    this.document = document;
  }

  sayHello() {
    const elem = this.document.getElementById('app-root');
    elem.innerText = 'Hello world!!';
  }
}
