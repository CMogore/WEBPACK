import "./header.css"
import {other} from './script2.js';

console.log('Hello, YESSlllZZZZKKK');
console.warn("app file",other());
console.log('Hello, Yes');

if (module.hot) {
    module.hot.accept();
  }