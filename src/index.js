import _ from 'lodash';
import './style.css';
import Icon from './test.png';
import Data from './data.xml';
import Notes from './data.csv';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // lodash 现在使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);


  // console.log(Data);
  // console.log(Notes);


  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);


window.test = function (arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i+1; j < len; j++) {
      let r = arr[i].some(item => arr[j].includes(item));
      if (r === true) {
        return [i,j]
      }
    }
  }
}


  return element;
}

document.body.appendChild(component());