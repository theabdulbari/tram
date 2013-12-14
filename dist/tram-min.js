/*!
 * tram.js v0.6.1-global
 * Cross-browser CSS3 transitions in JavaScript.
 * https://github.com/bkwld/tram
 * MIT License
 */
window.tram=function(t){function i(t,i){var e=new I.Bare;return e.init(t,i)}function e(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}function n(t){var i=parseInt(t.slice(1),16),e=255&i>>16,n=255&i>>8,r=255&i;return[e,n,r]}function r(t,i,e){return"#"+(1<<24|t<<16|i<<8|e).toString(16).slice(1)}function s(){}function a(t,i){V("Type warning: Expected: ["+t+"] Got: ["+typeof i+"] "+i)}function o(t,i,e){V("Units do not match ["+t+"]: "+i+", "+e)}function u(t,i,e){if(void 0!==i&&(e=i),void 0===t)return e;var n=e;return J.test(t)||!K.test(t)?n=parseInt(t,10):K.test(t)&&(n=1e3*parseFloat(t)),0>n&&(n=0),n===n?n:e}function c(t){for(var i=-1,e=t?t.length:0,n=[];e>++i;){var r=t[i];r&&n.push(r)}return n}var h=function(t,i,e){function n(t){return"object"==typeof t}function r(t){return"function"==typeof t}function s(){}function a(o,u){function c(){var t=new h;return r(t.init)&&t.init.apply(t,arguments),t}function h(){}u===e&&(u=o,o=Object),c.Bare=h;var l,f=s[t]=o[t],d=h[t]=c[t]=new s;return d.constructor=c,c.mixin=function(i){return h[t]=c[t]=a(c,i)[t],c},c.open=function(t){if(l={},r(t)?l=t.call(c,d,f,c,o):n(t)&&(l=t),n(l))for(var e in l)i.call(l,e)&&(d[e]=l[e]);return r(d.init)||(d.init=o),c},c.open(u)}return a}("prototype",{}.hasOwnProperty),l={ease:["ease",function(t,i,e,n){var r=(t/=n)*t,s=r*t;return i+e*(-2.75*s*r+11*r*r+-15.5*s+8*r+.25*t)}],"ease-in":["ease-in",function(t,i,e,n){var r=(t/=n)*t,s=r*t;return i+e*(-1*s*r+3*r*r+-3*s+2*r)}],"ease-out":["ease-out",function(t,i,e,n){var r=(t/=n)*t,s=r*t;return i+e*(.3*s*r+-1.6*r*r+2.2*s+-1.8*r+1.9*t)}],"ease-in-out":["ease-in-out",function(t,i,e,n){var r=(t/=n)*t,s=r*t;return i+e*(2*s*r+-5*r*r+2*s+2*r)}],linear:["linear",function(t,i,e,n){return e*t/n+i}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(t,i,e,n){return e*(t/=n)*t+i}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(t,i,e,n){return-e*(t/=n)*(t-2)+i}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(t,i,e,n){return 1>(t/=n/2)?e/2*t*t+i:-e/2*(--t*(t-2)-1)+i}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(t,i,e,n){return e*(t/=n)*t*t+i}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(t,i,e,n){return e*((t=t/n-1)*t*t+1)+i}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(t,i,e,n){return 1>(t/=n/2)?e/2*t*t*t+i:e/2*((t-=2)*t*t+2)+i}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(t,i,e,n){return e*(t/=n)*t*t*t+i}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(t,i,e,n){return-e*((t=t/n-1)*t*t*t-1)+i}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(t,i,e,n){return 1>(t/=n/2)?e/2*t*t*t*t+i:-e/2*((t-=2)*t*t*t-2)+i}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(t,i,e,n){return e*(t/=n)*t*t*t*t+i}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(t,i,e,n){return e*((t=t/n-1)*t*t*t*t+1)+i}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(t,i,e,n){return 1>(t/=n/2)?e/2*t*t*t*t*t+i:e/2*((t-=2)*t*t*t*t+2)+i}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(t,i,e,n){return-e*Math.cos(t/n*(Math.PI/2))+e+i}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(t,i,e,n){return e*Math.sin(t/n*(Math.PI/2))+i}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(t,i,e,n){return-e/2*(Math.cos(Math.PI*t/n)-1)+i}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(t,i,e,n){return 0===t?i:e*Math.pow(2,10*(t/n-1))+i}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(t,i,e,n){return t===n?i+e:e*(-Math.pow(2,-10*t/n)+1)+i}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(t,i,e,n){return 0===t?i:t===n?i+e:1>(t/=n/2)?e/2*Math.pow(2,10*(t-1))+i:e/2*(-Math.pow(2,-10*--t)+2)+i}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(t,i,e,n){return-e*(Math.sqrt(1-(t/=n)*t)-1)+i}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(t,i,e,n){return e*Math.sqrt(1-(t=t/n-1)*t)+i}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(t,i,e,n){return 1>(t/=n/2)?-e/2*(Math.sqrt(1-t*t)-1)+i:e/2*(Math.sqrt(1-(t-=2)*t)+1)+i}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(t,i,e,n,r){return void 0===r&&(r=1.70158),e*(t/=n)*t*((r+1)*t-r)+i}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(t,i,e,n,r){return void 0===r&&(r=1.70158),e*((t=t/n-1)*t*((r+1)*t+r)+1)+i}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(t,i,e,n,r){return void 0===r&&(r=1.70158),1>(t/=n/2)?e/2*t*t*(((r*=1.525)+1)*t-r)+i:e/2*((t-=2)*t*(((r*=1.525)+1)*t+r)+2)+i}]},f={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},d=document,p=window,b="bkwld-tram",m=/[\-\.0-9]/g,v=/[A-Z]/,g="number",y=/^(rgb|#)/,w=/(em|cm|mm|in|pt|pc|px)$/,x=/(em|cm|mm|in|pt|pc|px|%)$/,k=/(deg|rad|turn)$/,z="unitless",q=" ",$=d.createElement("a"),M=["Webkit","Moz","O","ms"],A=["-webkit-","-moz-","-o-","-ms-"],B=function(t){if(t in $.style)return{dom:t,css:t};var i,e,n="",r=t.split("-");for(i=0;r.length>i;i++)n+=r[i].charAt(0).toUpperCase()+r[i].slice(1);for(i=0;M.length>i;i++)if(e=M[i]+n,e in $.style)return{dom:e,css:A[i]+t}},R=i.support={bind:Function.prototype.bind,transform:B("transform"),transition:B("transition"),backface:B("backface-visibility"),timing:B("transition-timing-function")};if(R.transition){var F=R.timing.dom;if($.style[F]=l["ease-in-back"][0],!$.style[F])for(var j in f)l[j][0]=f[j]}var G=i.frame=function(){var t=p.requestAnimationFrame||p.webkitRequestAnimationFrame||p.mozRequestAnimationFrame||p.oRequestAnimationFrame||p.msRequestAnimationFrame;return t&&R.bind?t.bind(p):function(t){p.setTimeout(t,16)}}(),T=i.now=function(){var t=p.performance,i=t&&(t.now||t.webkitNow||t.msNow||t.mozNow);return i&&R.bind?i.bind(t):Date.now||function(){return+new Date}}(),U=h(function(i){function n(t,i){var e=c((""+t).split(q)),n=e[0];i=i||{};var r=Q[n];if(!r)return V("Unsupported property: "+n);if(!i.weak||!this.props[n]){var s=r[0],a=this.props[n];return a||(a=this.props[n]=new s.Bare),a.init(this.$el,e,r,i),a}}function r(t,i,e){if(t){var r=typeof t;if(i||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==r&&i)return this.timer=new X({duration:t,context:this,complete:o}),this.active=!0,void 0;if("string"==r&&i)return n.call(this,t,e&&e[1]),o.call(this);if("function"==r)return t.call(this,this),void 0;if("object"==r){var s=0;b.call(this,t,function(t,i){t.span>s&&(s=t.span),t.stop(),t.animate(i)},function(t){"wait"in t&&(s=u(t.wait,0))}),p.call(this),s>0&&(this.timer=new X({duration:s,context:this}),this.active=!0,i&&(this.timer.complete=o));var a=this,c=!1,h={};G(function(){b.call(a,t,function(t){t.active&&(c=!0,h[t.name]=t.nextStyle)}),c&&a.$el.css(h)})}}}function s(t){t=u(t,0),this.active?this.queue.push({options:t}):(this.timer=new X({duration:t,context:this,complete:o}),this.active=!0)}function a(t){return this.active?(this.queue.push({options:t,args:arguments}),this.timer.complete=o,void 0):V("No active transition timer. Use start() or wait() before then().")}function o(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var t=this.queue.shift();r.call(this,t.options,!0,t.args)}}function h(t){this.timer&&this.timer.destroy(),this.queue=[],this.active=!1;var i;"string"==typeof t?(i={},i[t]=1):i="object"==typeof t?t:this.props,b.call(this,i,m),p.call(this)}function l(t){h.call(this,t),b.call(this,t,g,y)}function f(t){"string"!=typeof t&&(t="block"),this.el.style.display=t}function d(){h.call(this),this.el.style.display="none"}function p(){var t,i,e=[];for(t in this.props)i=this.props[t],i.active&&e.push(i.string);e=e.join(","),this.style!==e&&(this.style=e,this.el.style[R.transition.dom]=e)}function b(t,i,r){var s,a,o,u,c=i!==m,h={};for(s in t)o=t[s],s in W?(h.transform||(h.transform={}),h.transform[s]=o):(v.test(s)&&(s=e(s)),s in Q?h[s]=o:(u||(u={}),u[s]=o));for(s in h){if(o=h[s],a=this.props[s],!a){if(!c)continue;a=n.call(this,s)}i.call(this,a,o)}r&&u&&r.call(this,u)}function m(t){t.stop()}function g(t,i){t.set(i)}function y(t){this.$el.css(t)}function w(t,e){i[t]=function(){return this.children?x.call(this,e,arguments):(this.el&&e.apply(this,arguments),this)}}function x(t,i){var e,n=this.children.length;for(e=0;n>e;e++)t.apply(this.children[e],i);return this}i.init=function(i){this.$el=t(i),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,R.backface&&E.hideBackface&&C(this.el,R.backface.css,"hidden")},w("add",n),w("start",r),w("wait",s),w("then",a),w("next",o),w("stop",h),w("set",l),w("show",f),w("hide",d)}),I=h(U,function(i){function e(i,e){var n=t.data(i,b)||t.data(i,b,new U.Bare);return n.el||n.init(i),e?n.start(e):n}i.init=function(i,n){var r=t(i);if(!r.length)return this;if(1===r.length)return e(r[0],n);var s=[];return r.each(function(t,i){s.push(e(i,n))}),this.children=s,this}}),S=h(function(t){function i(t,i,e){return void 0!==i&&(e=i),t in l?t:e}function e(t){var i=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);return(i?r(i[1],i[2],i[3]):t).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var n={duration:500,ease:"ease",delay:0};t.init=function(t,e,r,s){this.$el=t,this.el=t[0];var a=e[0];r[2]&&(a=r[2]),L[a]&&(a=L[a]),this.name=a,this.type=r[1],this.duration=u(e[1],this.duration,n.duration),this.ease=i(e[2],this.ease,n.ease),this.delay=u(e[3],this.delay,n.delay),this.span=this.duration+this.delay,this.active=!1,this.unit=s.unit||this.unit||E.defaultUnit,this.angle=s.angle||this.angle||E.defaultAngle,E.fallback||s.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+q+this.duration+"ms"+("ease"!=this.ease?q+l[this.ease][0]:"")+(this.delay?q+this.delay+"ms":""))},t.set=function(t){t=this.convert(t,this.type),this.update(t),this.redraw()},t.transition=function(t){this.active=!0,this.nextStyle=this.convert(t,this.type)},t.fallback=function(t){this.tween=new P({from:this.convert(this.get(),this.type),to:this.convert(t,this.type),duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.get=function(){return D(this.el,this.name)},t.update=function(t){C(this.el,this.name,t)},t.stop=function(){this.tween&&this.tween.destroy(),this.active&&(this.active=!1,C(this.el,this.name,this.get()))},t.convert=function(t,i){var n,r="number"==typeof t,s="string"==typeof t;switch(i){case g:if(r)return t;if(s&&""===t.replace(m,""))return+t;n="number(unitless)";break;case y:if(s){if(""===t&&this.original)return this.original;if(i.test(t))return"#"==t.charAt(0)&&7==t.length?t:e(t)}n="hex or rgb string";break;case w:if(r)return t+this.unit;if(s&&i.test(t))return t;n="number(px) or string(unit)";break;case x:if(r)return t+this.unit;if(s&&i.test(t))return t;n="number(px) or string(unit or %)";break;case k:if(r)return t+this.angle;if(s&&i.test(t))return t;n="number(deg) or string(angle)";break;case z:if(r)return t;if(s&&x.test(t))return t;n="number(unitless) or string(unit or %)"}return a(n,t),t},t.redraw=function(){this.el.offsetHeight}}),Z=h(S,function(t,i){t.init=function(){i.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),y))}}),N=h(S,function(t,i){t.init=function(){i.init.apply(this,arguments),this.animate=this.fallback},t.get=function(){return this.$el[this.name]()},t.update=function(t){this.$el[this.name](t)}}),O=h(S,function(t,i){function e(t,i){var e,n,r,s,a;for(e in t)s=W[e],r=s[0],n=s[1]||e,a=this.convert(t[e],r),i.call(this,n,a,r)}t.init=function(){i.init.apply(this,arguments),this.current||(this.current={},W.perspective&&(this.current.perspective="1000px",C(this.el,this.name,this.style(this.current)),this.redraw()))},t.set=function(t){e.call(this,t,function(t,i){this.current[t]=i}),C(this.el,this.name,this.style(this.current)),this.redraw()},t.transition=function(t){var i=this.values(t);this.tween=new Y({current:this.current,values:i,duration:this.duration,delay:this.delay,ease:this.ease});var e,n={};for(e in this.current)n[e]=e in i?i[e]:this.current[e];this.active=!0,this.nextStyle=this.style(n)},t.fallback=function(t){var i=this.values(t);this.tween=new Y({current:this.current,values:i,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.update=function(){C(this.el,this.name,this.style(this.current))},t.style=function(t){var i,e="";for(i in t)e+=i+"("+t[i]+") ";return e},t.values=function(t){var i,n={};return e.call(this,t,function(t,e,r){n[t]=e,void 0===this.current[t]&&(i=0,~t.indexOf("scale")&&(i=1),this.current[t]=this.convert(i,r))}),n}}),P=h(function(i){function e(t){1===d.push(t)&&G(a)}function a(){var t,i,e,n=d.length;if(n)for(G(a),i=T(),t=n;t--;)e=d[t],e&&e.render(i)}function u(i){var e,n=t.inArray(i,d);n>=0&&(e=d.slice(n+1),d.length=n,e.length&&(d=d.concat(e)))}function c(t){return Math.round(t*p)/p}function h(t,i,e){return r(t[0]+e*(i[0]-t[0]),t[1]+e*(i[1]-t[1]),t[2]+e*(i[2]-t[2]))}var f={ease:l.ease[1],from:0,to:1};i.init=function(t){this.duration=t.duration||0,this.delay=t.delay||0;var i=t.ease||f.ease;l[i]&&(i=l[i][1]),"function"!=typeof i&&(i=f.ease),this.ease=i,this.update=t.update||s,this.complete=t.complete||s,this.context=t.context||this,this.name=t.name;var e=t.from,n=t.to;void 0===e&&(e=f.from),void 0===n&&(n=f.to),this.unit=t.unit||"","number"==typeof e&&"number"==typeof n?(this.begin=e,this.change=n-e):this.format(n,e),this.value=this.begin+this.unit,this.start=T(),t.autoplay!==!1&&this.play()},i.play=function(){this.active||(this.start||(this.start=T()),this.active=!0,e(this))},i.stop=function(){this.active&&(this.active=!1,u(this))},i.render=function(t){var i,e=t-this.start;if(this.delay){if(this.delay>=e)return;e-=this.delay}if(this.duration>e){var n=this.ease(e,0,1,this.duration);return i=this.startRGB?h(this.startRGB,this.endRGB,n):c(this.begin+n*this.change),this.value=i+this.unit,this.update.call(this.context,i),void 0}i=this.endHex||this.begin+this.change,this.value=i+this.unit,this.update.call(this.context,i),this.complete.call(this.context),this.destroy()},i.format=function(t,i){if(i+="",t+="","#"==t.charAt(0))return this.startRGB=n(i),this.endRGB=n(t),this.endHex=t,this.begin=0,this.change=1,void 0;if(!this.unit){var e=i.replace(m,""),r=t.replace(m,"");e!==r&&o("tween",i,t),this.unit=e}i=parseFloat(i),t=parseFloat(t),this.begin=this.value=i,this.change=t-i},i.destroy=function(){this.stop(),this.ease=this.update=this.complete=this.context=null};var d=[],p=1e3}),X=h(P,function(t){t.init=function(t){this.duration=t.duration||0,this.complete=t.complete||s,this.context=t.context,this.play()},t.render=function(t){var i=t-this.start;this.duration>i||(this.complete.call(this.context),this.destroy())}}),Y=h(P,function(t,i){t.init=function(t){this.context=t.context,this.update=t.update,this.tweens=[],this.current=t.current;var i,e;for(i in t.values)e=t.values[i],this.current[i]!==e&&this.tweens.push(new P({name:i,from:this.current[i],to:e,duration:t.duration,delay:t.delay,ease:t.ease,autoplay:!1}));this.play()},t.render=function(t){var i,e,n=this.tweens.length,r=!1;for(i=n;i--;)e=this.tweens[i],e.ease&&(e.render(t),this.current[e.name]=e.value,r=!0);return r?(this.update&&this.update.call(this.context),void 0):this.destroy()},t.destroy=function(){if(i.destroy.call(this),this.tweens){var t,e=this.tweens.length;for(t=e;t--;)this.tweens[t].destroy();this.tweens=null,this.current=null}}}),E=i.config={defaultUnit:"px",defaultAngle:"deg",hideBackface:!0,fallback:!R.transition,agentTests:[]};i.fallback=function(t){if(!R.transition)return E.fallback=!0;E.agentTests.push("("+t+")");var i=RegExp(E.agentTests.join("|"),"i");E.fallback=i.test(navigator.userAgent)},i.fallback("6.0.[2-5] Safari");var H={};i.macro=function(t,i){H[t]=i},i.tween=function(t){return new P(t)},i.delay=function(t,i,e){return new X({complete:i,duration:t,context:e})},t.fn.tram=function(t){return i.call(null,this,t)};var C=t.style,D=t.css,L={transform:R.transform&&R.transform.css},Q={color:[Z,y],background:[Z,y,"background-color"],"outline-color":[Z,y],"border-color":[Z,y],"border-top-color":[Z,y],"border-right-color":[Z,y],"border-bottom-color":[Z,y],"border-left-color":[Z,y],"border-width":[S,w],"border-top-width":[S,w],"border-right-width":[S,w],"border-bottom-width":[S,w],"border-left-width":[S,w],"border-spacing":[S,w],"letter-spacing":[S,w],margin:[S,w],"margin-top":[S,w],"margin-right":[S,w],"margin-bottom":[S,w],"margin-left":[S,w],padding:[S,w],"padding-top":[S,w],"padding-right":[S,w],"padding-bottom":[S,w],"padding-left":[S,w],"outline-width":[S,w],opacity:[S,g],top:[S,x],right:[S,x],bottom:[S,x],left:[S,x],"font-size":[S,x],"text-indent":[S,x],"word-spacing":[S,x],width:[S,x],"min-width":[S,x],"max-width":[S,x],height:[S,x],"min-height":[S,x],"max-height":[S,x],"line-height":[S,z],"scroll-top":[N,g,"scrollTop"],"scroll-left":[N,g,"scrollLeft"]},W={};R.transform&&(Q.transform=[O],W={x:[x,"translateX"],y:[x,"translateY"],rotate:[k],rotateX:[k],rotateY:[k],scale:[g],scaleX:[g],scaleY:[g],skew:[k],skewX:[k],skewY:[k]}),R.transform&&R.backface&&(W.z=[x,"translateZ"],W.rotateZ=[k],W.scaleZ=[g],W.perspective=[w]);var J=/ms/,K=/s|\./,V=function(){var t="warn",i=window.console;return i&&i[t]?function(e){i[t](e)}:s}();return t.tram=i}(window.jQuery);