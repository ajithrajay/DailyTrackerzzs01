parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
var t=document.getElementById("balance"),n=document.getElementById("money-plus"),e=document.getElementById("money-minus"),a=document.getElementById("list"),o=document.getElementById("text"),u=document.getElementById("amount"),r=[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}],c=JSON.parse(localStorage.getItem("transactions")),i=null!==localStorage.getItem("transactions")?c:[];function l(t){if(t.preventDefault(),""===o.value.trim()||""===u.value.trim())alert("Please add a text and amount");else{var n={id:m(),text:o.value,amount:+u.value};i.push(n),d(n),s(),x(),o.value="",u.value=""}}function m(){return Math.floor(1e6*Math.random())}function d(t){var n=t.amount<0?"-":"+",e=document.createElement("li");e.classList.add(t.amount<0?"minus":"plus"),e.innerHTML="".concat(t.text," <span>").concat(n).concat(Math.abs(t.amount),'</span> <button class="delete-btn" onclick="removeTransaction(').concat(t.id,')">x</button>'),a.appendChild(e)}function s(){var a=i.map(function(t){return t.amount}),o=a.reduce(function(t,n){return t+n},0).toFixed(2),u=a.filter(function(t){return t>0}).reduce(function(t,n){return t+n},0).toFixed(2),r=(-1*a.filter(function(t){return t<0}).reduce(function(t,n){return t+n},0)).toFixed(2);t.innerText="RS.".concat(o),n.innerText="RS.".concat(u),e.innerText="RS.".concat(r)}function f(t){i=i.filter(function(n){return n.id!==t}),v(),x()}function x(){localStorage.setItem("transactions",JSON.stringify(i))}function v(){a.innerHTML="",i.forEach(d),s()}v(),addEventListener("submit",l);
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.bf2f1f44.js.map