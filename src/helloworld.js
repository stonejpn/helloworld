const HelloWorld = (document, parent) => {
  if (parent !== null) {
    const text = document.createTextNode('Hello world!!');
    parent.appendChild(text);
  }
};
export default HelloWorld;
