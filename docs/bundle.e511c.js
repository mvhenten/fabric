!function(e){function t(i){if(n[i])return n[i].exports;var l=n[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}({"/71g":function(e,t,n){"use strict";var i=n("uF5K");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register("/sw.js");var l=function(e){return e&&e.default||e};if("function"==typeof l(n("JkW7"))){var o=document.body.firstElementChild,a=function(){var e=l(n("JkW7"));o=(0,i.render)((0,i.h)(e),document.body,o)};a()}},0:function(e,t,n){e.exports=n("/71g")},EbM4:function(){},JkW7:function(e,t,n){"use strict";function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return q});var o=n("uF5K"),a=(n.n(o),n("EbM4")),r=(n.n(a),n.i(o.h)("article",{id:"form"},n.i(o.h)("h2",null,"Form"),n.i(o.h)("h3",null,"Simple horizontal form"),n.i(o.h)("section",{class:"solid white padding-1"},n.i(o.h)("div",{class:"spaced-2 flex row"},n.i(o.h)("label",null,"enter some input here"),n.i(o.h)("input",{name:"tex",type:"text",class:"grow",placeholder:"input here"}),n.i(o.h)("select",null,n.i(o.h)("option",null,"Take one..."),n.i(o.h)("option",null,"Take two..."),n.i(o.h)("option",null,"Take three...")),n.i(o.h)("button",{class:"important solid"},"submit"))),n.i(o.h)("h3",null,"Vertical form"),n.i(o.h)("section",{class:"solid white padding-1"},n.i(o.h)("div",{class:"spaced-vertical-1 flex col"},n.i(o.h)("p",null,"Forms should follow the text flow."),n.i(o.h)("label",{for:"tex"},"Enter some input here"),n.i(o.h)("input",{id:"tex",type:"text",class:"grow",placeholder:"input here"}),n.i(o.h)("select",null,n.i(o.h)("option",null,"Take one..."),n.i(o.h)("option",null,"Take two..."),n.i(o.h)("option",null,"Take three..."),n.i(o.h)("hr",null)),n.i(o.h)("label",null,n.i(o.h)("input",{name:"pick",type:"radio"})," option one"),n.i(o.h)("label",null,n.i(o.h)("input",{name:"pick",type:"radio"})," option two"),n.i(o.h)("label",null,n.i(o.h)("input",{name:"pick",type:"radio"})," option three"),n.i(o.h)("hr",null),n.i(o.h)("label",null,"Describe your life here"),n.i(o.h)("textarea",{class:"height-5x noresize",placeholder:"the story of my life"}),n.i(o.h)("label",null,n.i(o.h)("input",{type:"checkbox"})," I'm okay with you sharing this..."),n.i(o.h)("button",{class:"solid important"},"submit"))))),s=function(){return r},h=n.i(o.h)("h2",null,"Buttons"),d=n.i(o.h)("section",{class:"spaced-2 padding-1 solid white"},n.i(o.h)("button",null,"button default"),n.i(o.h)("a",{class:"button"},"link styled button")),u=function(){return n.i(o.h)("article",{id:"buttons"},h,d,n.i(o.h)("section",{class:"spaced-2 solid white padding-1"},["important","info","success","warning","danger","dark","light","default"].map(function(e){return n.i(o.h)("button",{class:["solid",e,"margin-vertical-1"].join(" ")},e.charAt(0).toUpperCase()+e.substr(1))})),n.i(o.h)("section",{class:"spaced-2 solid white padding-1"},["important","info","success","warning","danger","dark","light","default"].map(function(e){return n.i(o.h)("a",{class:["solid",e,"button","margin-vertical-1"].join(" ")},e.charAt(0).toUpperCase()+e.substr(1))})),n.i(o.h)("section",{class:"spaced-2 solid white padding-1"},["small","","large","xlarge"].map(function(e){return n.i(o.h)("a",{class:"solid important button "+e},e||"default")})))},c=n.i(o.h)("h2",null,"Basic type (reset)"),p=n.i(o.h)("h4",null,"Headers"),f=n.i(o.h)("div",{class:"padding-2 border-light"},n.i(o.h)("div",{class:"type-grid"},n.i(o.h)("h1",null,"h1 Fake News Proven Correct!"),n.i(o.h)("p",null,"Text should have an appropriate distance from it's header, without much fussing about."),n.i(o.h)("h2",null,"h2 Fake News Proven Correct!"),n.i(o.h)("p",null,"Text should have an appropriate distance from it's header, without much fussing about."),n.i(o.h)("h3",null,"h3 Fake News Proven Correct!"),n.i(o.h)("p",null,"Text should have an appropriate distance from it's header, without much fussing about."),n.i(o.h)("h4",null,"h4 Fake News Proven Correct!"),n.i(o.h)("p",null,"Text should have an appropriate distance from it's header, without much fussing about."),n.i(o.h)("h5",null,"h5 Fake News Proven Correct!"),n.i(o.h)("p",null,"Text should have an appropriate distance from it's header, without much fussing about."),n.i(o.h)("h6",null,"h6 Fake News Proven Correct!"),n.i(o.h)("p",null,"Text should have an appropriate distance from it's header, without much fussing about."))),g=n.i(o.h)("h4",null,"Sizes"),m=n.i(o.h)("div",{class:"border-light padding-2"},n.i(o.h)("p",{class:"small"},"Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters."),n.i(o.h)("p",{class:""},"Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters."),n.i(o.h)("p",{class:"large"},"Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters."),n.i(o.h)("p",{class:"xlarge"},"Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.")),v=n.i(o.h)("h4",null,"Common markup"),_=n.i(o.h)("h3",null,"Typography: the art and technique of arranging type"),b=n.i(o.h)("ol",null,n.i(o.h)("li",null,"Legible"),n.i(o.h)("li",null,"readable"),n.i(o.h)("li",null,"appealing")),w=n.i(o.h)("em",null,"when displayed."),y=n.i(o.h)("quote",null,"The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters."),x=n.i(o.h)("code",null,"arranging type"),k=function(){return n.i(o.h)("article",{id:"type"},c,n.i(o.h)("section",{class:"solid white padding-2 spaced-vertical-2 max-width-20 type"},p,f,g,m,v,n.i(o.h)("div",{class:"border-light padding-2"},_,n.i(o.h)("p",{class:"max-width-20"},"Typography is the art and technique of arranging type to make written language:",b,w,y,"Typography is the art and technique of ",x," to make written language legible, readable, and appealing when displayed.",n.i(o.h)("pre",null,'function count(times) {\n\tfor (let i = 0; i < times; i++) {\n\t\tconsole.log("the count is: ", i);\n\t}\n}'),"The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters."))))},C=n.i(o.h)("article",{id:"flex"},n.i(o.h)("h2",null,"Flex layouts"),n.i(o.h)("p",null,"Solving common use-cases with flex"),n.i(o.h)("section",{class:"solid white padding-1"},n.i(o.h)("h4",null,"Putting things side-by-side with ",n.i(o.h)("code",null,"flex")),n.i(o.h)("div",{class:"flex padding-1 solid light"},n.i(o.h)("div",{class:"padding-1 solid dark"},"The first."),n.i(o.h)("div",{class:"padding-1 solid white"},"Column two."),n.i(o.h)("div",{class:"padding-1 solid important"},"You know? I'm the last.")),n.i(o.h)("h4",null,"Use ",n.i(o.h)("code",null,"grow")," to add space"),n.i(o.h)("div",{class:"flex padding-1 solid light"},n.i(o.h)("div",{class:"padding-1 solid dark"},"The first."),n.i(o.h)("div",{class:"padding-1 solid white grow"},"Column two has ",n.i(o.h)("code",null,".grow")),n.i(o.h)("div",{class:"padding-1 solid important"},"You know? I'm the last.")),n.i(o.h)("h4",null,"Use ",n.i(o.h)("code",null,"flex between")," to justify"),n.i(o.h)("div",{class:"flex between padding-1 solid light"},n.i(o.h)("div",{class:"padding-1 solid dark"},"The first."),n.i(o.h)("div",{class:"padding-1 solid white"},"Column two."),n.i(o.h)("div",{class:"padding-1 solid important"},"You know? I'm the last.")),n.i(o.h)("h4",null,"Use flex, around to space around"),n.i(o.h)("div",{class:"flex around padding-1 solid light"},n.i(o.h)("div",{class:"padding-1 solid dark"},"The first."),n.i(o.h)("div",{class:"padding-1 solid white"},"Column two."),n.i(o.h)("div",{class:"padding-1 solid important"},"You know? I'm the last.")),n.i(o.h)("h4",null,"Use flex, end to stack on the right"),n.i(o.h)("div",{class:"flex end padding-1 solid light"},n.i(o.h)("div",{class:"padding-1 solid dark"},"The first."),n.i(o.h)("div",{class:"padding-1 solid white"},"Column two."),n.i(o.h)("div",{class:"padding-1 solid important"},"You know? I'm the last.")),n.i(o.h)("h4",null,"Use column and between to space vertically"),n.i(o.h)("div",{class:"vh-30 flex col between padding-1 solid light"},n.i(o.h)("div",{class:"padding-1 solid dark"},"I am at the top"),n.i(o.h)("div",null,"someting in the center"),n.i(o.h)("div",{class:"padding-1 solid important"},"I am at the bottom")))),T=function(){return C},N=n.i(o.h)("h2",null,"Advanced layouts"),P=n.i(o.h)("p",null,"Setting height and scrolling"),U=n.i(o.h)("div",{class:"box-5 min-width-5 padding-1 solid dark"},".box-5 and .min-width-5 to avoid flex-scaling"),j=n.i(o.h)("span",null,"Just some content to force scrolling and wrapping... "),S=n.i(o.h)("div",{class:"flex center middle absolute cover fade solid black"},n.i(o.h)("section",{class:"solid white padding-2 box-7 flex col between shadow-3"},n.i(o.h)("p",null,"Use absolute and relative to create a dialog style popup"),n.i(o.h)("div",{class:"flex evenly"},n.i(o.h)("button",{class:"solid success"},"Confirm"),n.i(o.h)("button",{class:"solid info"},"Dismiss")))),F=n.i(o.h)("span",null,"Just some content to force scrolling and wrapping... "),M=function(){return n.i(o.h)("article",{id:"sizing"},N,P,n.i(o.h)("section",{class:"solid white padding-1"},n.i(o.h)("div",{class:"flex padding-vertical-2 spaced-2"},U,n.i(o.h)("div",{class:"padding-1 solid light height-5 scroll"},n.i(o.h)("p",null,new Array(20).fill(1).map(function(){return j}))))),n.i(o.h)("section",{class:"solid white padding-1 noscroll"},n.i(o.h)("div",{class:"relative"},S,n.i(o.h)("section",{class:"vh-40 scroll"},new Array(100).fill(1).map(function(){return F})))))},z=n.i(o.h)("h2",null,"Shadows"),E=function(){return n.i(o.h)("article",{id:"shadows"},z,n.i(o.h)("section",{class:"padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap"},[1,2,3,4,5].map(function(e){return n.i(o.h)("div",{class:"shadow-"+e+" box-4 min-width-5 solid important"},".shadow-",e)})),["right","left","bottom"].map(function(e){return n.i(o.h)("section",{class:"padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap"},[1,2,3,4,5].map(function(t){return n.i(o.h)("div",{class:"shadow-"+e+"-"+t+" box-4 min-width-5 solid important"},".shadow-",e,"-",t)}))}))},W=n.i(o.h)("h2",null,"Colors"),L=function(){return n.i(o.h)("article",{id:"colors"},W,n.i(o.h)("section",{class:"padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap"},["dark","light","success","danger","warning","important","info","default"].map(function(e){return n.i(o.h)("div",{class:"solid box-4 min-width-4 solid padding-1 "+e},e)})),n.i(o.h)("section",{class:"padding-2 type solid white flex spaced-3 spaced-vertical-1 wrap"},["darken","","lighten"].map(function(e){return n.i(o.h)("div",{class:"solid box-4 min-width-4 solid padding-1 info "+e},e||"default")})))},A=n.i(o.h)("article",{id:"tables"},n.i(o.h)("h2",null,"Tables"),n.i(o.h)("section",{class:"padding-2 type solid white"},n.i(o.h)("table",null,n.i(o.h)("tr",null,n.i(o.h)("th",null,"Player"),n.i(o.h)("th",null,"Hightscore")),n.i(o.h)("tr",null,n.i(o.h)("td",null,"player 1"),n.i(o.h)("td",null,"1000020")),n.i(o.h)("tr",null,n.i(o.h)("td",null,"mvhenten"),n.i(o.h)("td",null,"39283")))),n.i(o.h)("section",{class:"padding-2 type solid white"},n.i(o.h)("table",{class:"stripes border default"},n.i(o.h)("tr",null,n.i(o.h)("th",null,"Player"),n.i(o.h)("th",null,"Hightscore")),n.i(o.h)("tr",null,n.i(o.h)("td",null,"player 1"),n.i(o.h)("td",null,"1000020")),n.i(o.h)("tr",null,n.i(o.h)("td",null,"mvhenten"),n.i(o.h)("td",null,"39283")))),n.i(o.h)("section",{class:"padding-2 type solid white"},n.i(o.h)("table",{class:"spread lighten info stripes"},n.i(o.h)("tr",null,n.i(o.h)("th",null,"Player"),n.i(o.h)("th",null,"Hightscore")),n.i(o.h)("tr",null,n.i(o.h)("td",null,"player 1"),n.i(o.h)("td",null,"1000020")),n.i(o.h)("tr",null,n.i(o.h)("td",null,"mvhenten"),n.i(o.h)("td",null,"39283")))),n.i(o.h)("section",{class:"padding-2 type solid white"},n.i(o.h)("table",{class:"spread lighten info stripes border"},n.i(o.h)("tr",null,n.i(o.h)("th",null,"Player"),n.i(o.h)("th",null,"Hightscore")),n.i(o.h)("tr",null,n.i(o.h)("td",null,"player 1"),n.i(o.h)("td",null,"1000020")),n.i(o.h)("tr",null,n.i(o.h)("td",null,"mvhenten"),n.i(o.h)("td",null,"39283")),n.i(o.h)("tr",null,n.i(o.h)("td",null,"T-Rex"),n.i(o.h)("td",null,"5645"))))),I=function(){return A},O=n.i(o.h)("div",{class:"scroll width-10 vh-100 grow scroll padding-horizontal-2 padding-bottom-6 solid light"},n.i(o.h)(k,null),n.i(o.h)("br",null),n.i(o.h)(u,null),n.i(o.h)("br",null),n.i(o.h)(s,null),n.i(o.h)("br",null),n.i(o.h)(T,null),n.i(o.h)("br",null),n.i(o.h)(M,null),n.i(o.h)("br",null),n.i(o.h)(E,null),n.i(o.h)("br",null),n.i(o.h)(L,null),n.i(o.h)("br",null),n.i(o.h)(I,null)),q=function(e){function t(){return i(this,e.apply(this,arguments))}return l(t,e),t.prototype.componentDidMount=function(){var e=document.location.hash;if(e){var t=document.querySelector(e);t&&t.scrollIntoView()}},t.prototype.render=function(){var e=[{title:"Typography",href:"#type"},{title:"Buttons",href:"#buttons"},{title:"Forms",href:"#form"},{title:"Flex controls",href:"#flex"},{title:"Sizing",href:"#sizing"},{title:"Shadows",href:"#shadows"},{title:"Font Awesome",href:"#icons"},{title:"Colors",href:"#colors"},{title:"Borders, padding, margins",href:"#borders"},{title:"Tables",href:"#tables"}];return n.i(o.h)("div",{class:"flex row min-width-20"},n.i(o.h)("div",{class:"solid dark vh-100 scroll",style:{"flex-basis":"200px"}},n.i(o.h)("ul",{class:"list-none list-flat padding-vertical-3"},e.map(function(e){var t=e.title,i=e.href;return n.i(o.h)("li",null,n.i(o.h)("a",{href:i,class:"button solid dark hover-important block"},t))}))),O)},t}(o.Component)},uF5K:function(e){!function(){"use strict";function t(){}function n(e,n){var i,l,o,a,r=z;for(a=arguments.length;a-- >2;)M.push(arguments[a]);for(n&&null!=n.children&&(M.length||M.push(n.children),delete n.children);M.length;)if((l=M.pop())&&void 0!==l.pop)for(a=l.length;a--;)M.push(l[a]);else"boolean"==typeof l&&(l=null),(o="function"!=typeof e)&&(null==l?l="":"number"==typeof l?l+="":"string"!=typeof l&&(o=!1)),o&&i?r[r.length-1]+=l:r===z?r=[l]:r.push(l),i=o;var s=new t;return s.nodeName=e,s.children=r,s.attributes=null==n?void 0:n,s.key=null==n?void 0:n.key,void 0!==F.vnode&&F.vnode(s),s}function i(e,t){for(var n in t)e[n]=t[n];return e}function l(e,t){return n(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function o(e){!e.__d&&(e.__d=!0)&&1==L.push(e)&&(F.debounceRendering||E)(a)}function a(){var e,t=L;for(L=[];e=t.pop();)e.__d&&N(e)}function r(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&s(e,t.nodeName):n||e._componentConstructor===t.nodeName}function s(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function h(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var l in n)void 0===t[l]&&(t[l]=n[l]);return t}function d(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function u(e){var t=e.parentNode;t&&t.removeChild(e)}function c(e,t,n,i,l){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),i&&i(e);else if("class"!==t||l)if("style"===t){if(i&&"string"!=typeof i&&"string"!=typeof n||(e.style.cssText=i||""),i&&"object"==typeof i){if("string"!=typeof n)for(var o in n)o in i||(e.style[o]="");for(var o in i)e.style[o]="number"==typeof i[o]&&!1===W.test(o)?i[o]+"px":i[o]}}else if("dangerouslySetInnerHTML"===t)i&&(e.innerHTML=i.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),i?n||e.addEventListener(t,f,a):e.removeEventListener(t,f,a),(e.__l||(e.__l={}))[t]=i}else if("list"!==t&&"type"!==t&&!l&&t in e)p(e,t,null==i?"":i),null!=i&&!1!==i||e.removeAttribute(t);else{var r=l&&t!==(t=t.replace(/^xlink\:?/,""));null==i||!1===i?r?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof i&&(r?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),i):e.setAttribute(t,i))}else e.className=i||""}function p(e,t,n){try{e[t]=n}catch(e){}}function f(e){return this.__l[e.type](F.event&&F.event(e)||e)}function g(){for(var e;e=A.pop();)F.afterMount&&F.afterMount(e),e.componentDidMount&&e.componentDidMount()}function m(e,t,n,i,l,o){I++||(O=null!=l&&void 0!==l.ownerSVGElement,q=null!=e&&!("__preactattr_"in e));var a=v(e,t,n,i,o);return l&&a.parentNode!==l&&l.appendChild(a),--I||(q=!1,o||g()),a}function v(e,t,n,i,l){var o=e,a=O;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||l)?e.nodeValue!=t&&(e.nodeValue=t):(o=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(o,e),b(e,!0))),o.__preactattr_=!0,o;var r=t.nodeName;if("function"==typeof r)return P(e,t,n,i);if(O="svg"===r||"foreignObject"!==r&&O,r+="",(!e||!s(e,r))&&(o=d(r,O),e)){for(;e.firstChild;)o.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(o,e),b(e,!0)}var h=o.firstChild,u=o.__preactattr_,c=t.children;if(null==u){u=o.__preactattr_={};for(var p=o.attributes,f=p.length;f--;)u[p[f].name]=p[f].value}return!q&&c&&1===c.length&&"string"==typeof c[0]&&null!=h&&void 0!==h.splitText&&null==h.nextSibling?h.nodeValue!=c[0]&&(h.nodeValue=c[0]):(c&&c.length||null!=h)&&_(o,c,n,i,q||null!=u.dangerouslySetInnerHTML),y(o,t.attributes,u),O=a,o}function _(e,t,n,i,l){var o,a,s,h,d,c=e.childNodes,p=[],f={},g=0,m=0,_=c.length,w=0,y=t?t.length:0;if(0!==_)for(var x=0;x<_;x++){var k=c[x],C=k.__preactattr_,T=y&&C?k._component?k._component.__k:C.key:null;null!=T?(g++,f[T]=k):(C||(void 0!==k.splitText?!l||k.nodeValue.trim():l))&&(p[w++]=k)}if(0!==y)for(var x=0;x<y;x++){h=t[x],d=null;var T=h.key;if(null!=T)g&&void 0!==f[T]&&(d=f[T],f[T]=void 0,g--);else if(!d&&m<w)for(o=m;o<w;o++)if(void 0!==p[o]&&r(a=p[o],h,l)){d=a,p[o]=void 0,o===w-1&&w--,o===m&&m++;break}d=v(d,h,n,i),s=c[x],d&&d!==e&&d!==s&&(null==s?e.appendChild(d):d===s.nextSibling?u(s):e.insertBefore(d,s))}if(g)for(var x in f)void 0!==f[x]&&b(f[x],!1);for(;m<=w;)void 0!==(d=p[w--])&&b(d,!1)}function b(e,t){var n=e._component;n?U(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||u(e),w(e))}function w(e){for(e=e.lastChild;e;){var t=e.previousSibling;b(e,!0),e=t}}function y(e,t,n){var i;for(i in n)t&&null!=t[i]||null==n[i]||c(e,i,n[i],n[i]=void 0,O);for(i in t)"children"===i||"innerHTML"===i||i in n&&t[i]===("value"===i||"checked"===i?e[i]:n[i])||c(e,i,n[i],n[i]=t[i],O)}function x(e){var t=e.constructor.name;(H[t]||(H[t]=[])).push(e)}function k(e,t,n){var i,l=H[e.name];if(e.prototype&&e.prototype.render?(i=new e(t,n),j.call(i,t,n)):(i=new j(t,n),i.constructor=e,i.render=C),l)for(var o=l.length;o--;)if(l[o].constructor===e){i.__b=l[o].__b,l.splice(o,1);break}return i}function C(e,t,n){return this.constructor(e,n)}function T(e,t,n,i,l){e.__x||(e.__x=!0,(e.__r=t.ref)&&delete t.ref,(e.__k=t.key)&&delete t.key,!e.base||l?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,i),i&&i!==e.context&&(e.__c||(e.__c=e.context),e.context=i),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===F.syncComponentUpdates&&e.base?o(e):N(e,1,l)),e.__r&&e.__r(e))}function N(e,t,n,l){if(!e.__x){var o,a,r,s=e.props,d=e.state,u=e.context,c=e.__p||s,p=e.__s||d,f=e.__c||u,v=e.base,_=e.__b,w=v||_,y=e._component,x=!1;if(v&&(e.props=c,e.state=p,e.context=f,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,d,u)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(s,d,u),e.props=s,e.state=d,e.context=u),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!x){o=e.render(s,d,u),e.getChildContext&&(u=i(i({},u),e.getChildContext()));var C,P,j=o&&o.nodeName;if("function"==typeof j){var S=h(o);a=y,a&&a.constructor===j&&S.key==a.__k?T(a,S,1,u,!1):(C=a,e._component=a=k(j,S,u),a.__b=a.__b||_,a.__u=e,T(a,S,0,u,!1),N(a,1,n,!0)),P=a.base}else r=w,C=y,C&&(r=e._component=null),(w||1===t)&&(r&&(r._component=null),P=m(r,o,u,n||!v,w&&w.parentNode,!0));if(w&&P!==w&&a!==y){var M=w.parentNode;M&&P!==M&&(M.replaceChild(P,w),C||(w._component=null,b(w,!1)))}if(C&&U(C),e.base=P,P&&!l){for(var z=e,E=e;E=E.__u;)(z=E).base=P;P._component=z,P._componentConstructor=z.constructor}}if(!v||n?A.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(c,p,f),F.afterUpdate&&F.afterUpdate(e)),null!=e.__h)for(;e.__h.length;)e.__h.pop().call(e);I||l||g()}}function P(e,t,n,i){for(var l=e&&e._component,o=l,a=e,r=l&&e._componentConstructor===t.nodeName,s=r,d=h(t);l&&!s&&(l=l.__u);)s=l.constructor===t.nodeName;return l&&s&&(!i||l._component)?(T(l,d,3,n,i),e=l.base):(o&&!r&&(U(o),e=a=null),l=k(t.nodeName,d,n),e&&!l.__b&&(l.__b=e,a=null),T(l,d,1,n,i),e=l.base,a&&e!==a&&(a._component=null,b(a,!1))),e}function U(e){F.beforeUnmount&&F.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?U(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,u(t),x(e),w(t)),e.__r&&e.__r(null)}function j(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{}}function S(e,t,n){return m(n,e,{},!1,t,!1)}var F={},M=[],z=[],E="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,W=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,L=[],A=[],I=0,O=!1,q=!1,H={};i(j.prototype,{setState:function(e,t){var n=this.state;this.__s||(this.__s=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this.__h=this.__h||[]).push(t),o(this)},forceUpdate:function(e){e&&(this.__h=this.__h||[]).push(e),N(this,2)},render:function(){}});var V={h:n,createElement:n,cloneElement:l,Component:j,render:S,rerender:a,options:F};e.exports=V}()}});
//# sourceMappingURL=bundle.e511c.js.map