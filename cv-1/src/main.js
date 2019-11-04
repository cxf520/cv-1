let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `
/*你好，我是小芬芬
 *接下来我将演示一下我的前端功底
 *首先准备一个div容器
 **/
#div{
  border:1px solid #000;
  width: 200px;
  height: 200px;
}
/* 接下来我把div变成一个八卦图
 *注意看好了
 *首先，把div变成一个圆
 **/
#div{
  box-shadow: 0 0 3px rgba(0,0,0,.5);
  border-radius: 50%;
  border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div{
  background: linear-gradient(to right, #ffffff 0%,#ffffff 50%,#000000 50%,#000000 100%);
}
/* 在加一个小黑球 */
#div::before{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top:0;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(ellipse at center, #ffffff 0%,#ffffff 25%,#000000 25%,#000000 100%);
}
/* 最后再来个小白球 */
#div::after{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(ellipse at center, #000000 0%,#000000 25%,#ffffff 25%,#ffffff 100%);
}
`
let n = 0
let string2 = ''

let step = () => {
  setTimeout(() => {
    //判断是否回车
    if (string[n] === '\n') {
      string2 += '<br>'
    } else if (string[n] === " ") {
      string2 += '&nbsp;'
    } else {
      string2 += string[n]
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n)
    window.scrollTo(0, 9999999)
    html.scrollTo(0, 9999999)
    if (n < string.length - 1) {
      n += 1
      step()
    }
  }, 0)
}
step();