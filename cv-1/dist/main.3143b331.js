parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),f="\n/*你好，我是小芬芬\n *接下来我将演示一下我的前端功底\n *首先准备一个div容器\n **/\n#div{\n  border:1px solid #000;\n  width: 200px;\n  height: 200px;\n}\n/* 接下来我把div变成一个八卦图\n *注意看好了\n *首先，把div变成一个圆\n **/\n#div{\n  box-shadow: 0 0 3px rgba(0,0,0,.5);\n  border-radius: 50%;\n  border:none;\n}\n/* 八卦是阴阳形成的\n * 一黑一白\n **/\n#div{\n  background: linear-gradient(to right, #ffffff 0%,#ffffff 50%,#000000 50%,#000000 100%);\n}\n/* 在加一个小黑球 */\n#div::before{\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  top:0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: radial-gradient(ellipse at center, #ffffff 0%,#ffffff 25%,#000000 25%,#000000 100%);\n}\n/* 最后再来个小白球 */\n#div::after{\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: radial-gradient(ellipse at center, #000000 0%,#000000 25%,#ffffff 25%,#ffffff 100%);\n}\n",e=0,t="",i=function i(){setTimeout(function(){"\n"===f[e]?t+="<br>":" "===f[e]?t+="&nbsp;":t+=f[e],n.innerHTML=t,r.innerHTML=f.substring(0,e),window.scrollTo(0,9999999),n.scrollTo(0,9999999),e<f.length-1&&(e+=1,i())},40)};i();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.3143b331.js.map