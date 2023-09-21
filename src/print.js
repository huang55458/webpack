export default function printMe() {
  console.log('I get called from print.js!');
}


export function test(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      let r = arr[j].some(item => arr[j+1].includes(item));
      if (r === true) {
        return [i,j+1]
      }
    }
  }
}



//动态导入
function  getComponent() {
  return import('lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
}
getComponent().then((component) => {
  document.body.appendChild(component);
});
//异步动态导入
async function getComponent2() {
  const element = document.createElement('div');
  const { default: _ } = await import('lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}