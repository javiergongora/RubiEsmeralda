(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,u=void 0,u=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,n||"default");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(i,"string"),"symbol"===t(u)?u:String(u)),r)}var i,u}console.log("countdown.ts");var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.daysElement=document.getElementById("countdown-days"),this.hoursElement=document.getElementById("countdown-hours"),this.minutesElement=document.getElementById("countdown-minutes"),this.secondsElement=document.getElementById("countdown-seconds"),this.daysTextElement=document.getElementById("countdown-days"),this.hoursTextElement=document.getElementById("countdown-hours"),this.minutesTextElement=document.getElementById("countdown-minutes"),this.secondsTextElement=document.getElementById("countdown-seconds"),this.countdownDate=new Date(e).getTime()}var n,o,r;return n=t,(o=[{key:"start",value:function(){var t=this;this.countdown=setInterval((function(){var e=(new Date).getTime(),n=t.countdownDate-e,o=Math.floor(n/864e5),r=Math.floor(n%864e5/36e5),i=Math.floor(n%36e5/6e4),u=Math.floor(n%6e4/1e3);t.daysElement.innerHTML=String(o).padStart(1,"0"),t.hoursElement.innerHTML=String(r).padStart(2,"0"),t.minutesElement.innerHTML=String(i).padStart(2,"0"),t.secondsElement.innerHTML=String(u).padStart(2,"0"),n<0&&(clearInterval(t.countdown),t.daysElement.innerHTML=String(0).padStart(1,"0"),t.hoursElement.innerHTML=String(0).padStart(2,"0"),t.minutesElement.innerHTML=String(0).padStart(2,"0"),t.secondsElement.innerHTML=String(0).padStart(2,"0"))}),1e3)}}])&&e(n.prototype,o),r&&e(n,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();window.startCountdown=function(t){new n(t).start()}})();