"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[937],{4886:function(e,n,t){t.d(n,{e:function(){return r}});var r={siteHeroBg:"#FFFBB8"}},2057:function(e,n,t){t.d(n,{k:function(){return N}});var r=t(4051),i=t.n(r),a=t(5893),o=t(9521);function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function l(){var e=s(["\n  display: flex;\n  align-items: center;\n  min-width: 322px;\n  max-width: 508px;\n  height: 48px;\n  border: dashed 2px ",";\n  padding: 8px 16px 8px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  flex-grow: 0;\n"]);return l=function(){return e},e}function c(){var e=s(["\n  // position: relative;\n  ",";\n  &.is-disabled {\n    border: dashed 2px ",";\n    cursor: no-drop;\n    svg {\n      fill: ",";\n      color: ",";\n      path {\n        fill: ",";\n        color: ",";\n      }\n    }\n  }\n  & > input {\n    display: none;\n  }\n"]);return c=function(){return e},e}function u(){var e=s(["\n  border: dashed 2px ",";\n  border-radius: 5px;\n  background-color: ",";\n  opacity: 0.5;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n\n  bottom: 0;\n  & > span {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n"]);return u=function(){return e},e}function d(){var e=s(["\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n  & > span {\n    font-size: 12px;\n    color: ",";\n  }\n  .file-types {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 100px;\n  }\n"]);return d=function(){return e},e}function f(){var e=s(["\n  font-size: 14px;\n  color: ",";\n  span {\n    text-decoration: underline;\n  }\n"]);return f=function(){return e},e}var p="#666",v=(0,o.iv)(l(),"#0658c2"),h=o.ZP.label(c(),(function(e){return e.overRide?"":v}),p,p,p,p,p),x=(o.ZP.div(u(),p,"#999"),o.ZP.div(d(),(function(e){return e.error?"red":p}))),m=o.ZP.span(f(),p),g=function(e){return e/1e3/1e3},w=function(e){return void 0===e?"":e.map((function(e){return".".concat(e.toLowerCase())})).join(",")},b=t(7294);function j(e){var n=e.types,t=e.minSize,r=e.maxSize;if(n){var i=n.toString(),o="";return r&&(o+="size >= ".concat(r,", ")),t&&(o+="size <= ".concat(t,", ")),(0,a.jsx)("span",{title:"".concat(o,"types: ").concat(i),className:"file-types",children:i})}return null}function y(){return(0,a.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M5.33317 6.66667H22.6665V16H25.3332V6.66667C25.3332 5.196 24.1372 4 22.6665 4H5.33317C3.8625 4 2.6665 5.196 2.6665 6.66667V22.6667C2.6665 24.1373 3.8625 25.3333 5.33317 25.3333H15.9998V22.6667H5.33317V6.66667Z",fill:"#0658C2"}),(0,a.jsx)("path",{d:"M10.6665 14.6667L6.6665 20H21.3332L15.9998 12L11.9998 17.3333L10.6665 14.6667Z",fill:"#0658C2"}),(0,a.jsx)("path",{d:"M25.3332 18.6667H22.6665V22.6667H18.6665V25.3333H22.6665V29.3333H25.3332V25.3333H29.3332V22.6667H25.3332V18.6667Z",fill:"#0658C2"})]})}var k=0;var C=function(e,n,t,r,i){return t?(0,a.jsx)("span",{children:"File type/size error, Hovered on types!"}):(0,a.jsx)(m,{children:r?(0,a.jsx)("span",{children:"Upload disabled"}):e||n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:"Uploaded Successfully!."})," Upload another?"]}):(0,a.jsx)("div",{children:i?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:i.split(" ")[0]})," ",i.substr(i.indexOf(" ")+1)]}):(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"Upload"})," or drop a file right here"]})})})},E=function(e){var n=e.name,t=e.hoverTitle,r=e.types,i=e.handleChange,o=e.classes,s=e.children,l=e.maxSize,c=e.minSize,u=e.fileOrFiles,d=e.onSizeError,f=e.onTypeError,p=e.onSelect,v=e.onDrop,m=e.disabled,E=e.label,z=e.multiple,L=e.onDraggingStateChange,S=(0,b.useRef)(null),P=(0,b.useRef)(null),H=(0,b.useState)(!1),F=H[0],N=H[1],V=(0,b.useState)(null),D=V[0],R=V[1],Z=(0,b.useState)(!1),_=Z[0],B=Z[1],T=function(e){return r&&!function(e,n){var t=e.name.split(".").pop();return n.map((function(e){return e.toLowerCase()})).includes(t.toLowerCase())}(e,r)?(B(!0),f&&f("File type is not supported"),!1):l&&g(e.size)>l?(B(!0),d&&d("File size is too big"),!1):!(c&&g(e.size)<c)||(B(!0),d&&d("File size is too small"),!1)},G=function(e){var n,t,r=!1;if(e){if(n=e,null!=(t=File)&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](n):n instanceof t)r=!T(e);else for(var a=0;a<e.length;a++){var o=e[a];r=!T(o)||r}return!r&&(i&&i(e),R(e),N(!0),B(!1),!0)}return!1},O=function(e){var n=e.labelRef,t=e.inputRef,r=e.multiple,i=e.handleChanges,a=e.onDrop,o=(0,b.useState)(!1),s=o[0],l=o[1],c=(0,b.useCallback)((function(){t.current.click()}),[t]),u=(0,b.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),k++,e.dataTransfer.items&&0!==e.dataTransfer.items.length&&l(!0)}),[]),d=(0,b.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),--k>0||l(!1)}),[]),f=(0,b.useCallback)((function(e){e.preventDefault(),e.stopPropagation()}),[]),p=(0,b.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),l(!1),k=0;var n=e.dataTransfer.files;if(n&&n.length>0){var t=r?n:n[0],o=i(t);a&&o&&a(t)}}),[i]);return(0,b.useEffect)((function(){var e=n.current;return e.addEventListener("click",c),e.addEventListener("dragenter",u),e.addEventListener("dragleave",d),e.addEventListener("dragover",f),e.addEventListener("drop",p),function(){e.removeEventListener("click",c),e.removeEventListener("dragenter",u),e.removeEventListener("dragleave",d),e.removeEventListener("dragover",f),e.removeEventListener("drop",p)}}),[c,u,d,f,p,n]),s}({labelRef:S,inputRef:P,multiple:z,handleChanges:G,onDrop:v});return(0,b.useEffect)((function(){null===L||void 0===L||L(O)}),[O]),(0,b.useEffect)((function(){u?(N(!0),R(u)):(P.current&&(P.current.value=""),N(!1),R(null))}),[u]),(0,a.jsxs)(h,{overRide:s,className:"".concat(o||""," ").concat(m?"is-disabled":""),ref:S,onClick:function(e){e.preventDefault(),e.stopPropagation()},children:[(0,a.jsx)("input",{onChange:function(e){var n=e.target.files,t=z?n:n[0],r=G(t);p&&r&&p(t)},accept:w(r),ref:P,type:"file",name:n,disabled:m,multiple:z}),O&&(0,a.jsx)("div",{className:"w-screen h-full top-0 left-0 right-0 bottom-0 fixed z-index-1000",style:{backgroundColor:"#2867E1ee",top:0,left:0},children:(0,a.jsx)("div",{className:" grid text-bold text-3xl text-white place-items-center h-screen w-screen",children:(0,a.jsx)("div",{children:(0,a.jsx)("span",{children:t})})})}),!s&&(0,a.jsxs)("div",{children:[(0,a.jsx)(y,{}),(0,a.jsxs)(x,{error:_,children:[C(D,F,_,m,E),(0,a.jsx)(j,{types:r,minSize:c,maxSize:l})]})]}),s]})},z=t(9899),L=t(6890),S=t(1163);function P(e,n,t,r,i,a,o){try{var s=e[a](o),l=s.value}catch(c){return void t(c)}s.done?n(l):Promise.resolve(l).then(r,i)}function H(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){P(a,r,i,o,s,"next",e)}function s(e){P(a,r,i,o,s,"throw",e)}o(void 0)}))}}var F=["JPG","PNG","JPEG","GIF","WEBP"],N=function(e){var n=e.routeName,t=e.location,r=e.children,o=(0,S.useRouter)();function s(){return(s=H(i().mark((function e(r){var a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(r);case 2:a=e.sent,window.state={selectedFiles:a},null!=(s=document.getElementById("cm_iframe"))&&s.contentWindow.postMessage({fileLoaded:!0},"*"),!0===(0!=a.length)?(o.push(n),(0,z.Zx)("cus_select_photos",{location:t})):console.log("Got empty list");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return c.apply(this,arguments)}function c(){return(c=H(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.abrupt("return",new Promise(function(){var e=H(i().mark((function e(r,a){var o,s,l,c,u,d,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,o=!0,s=!1,l=void 0,e.prev=2,c=n[Symbol.iterator]();case 4:if(o=(u=c.next()).done){e.next=13;break}return d=u.value,e.next=8,(0,L.pJ)(d);case 8:f=e.sent,t.push(f);case 10:o=!0,e.next=4;break;case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),s=!0,l=e.t0;case 19:e.prev=19,e.prev=20,o||null==c.return||c.return();case 22:if(e.prev=22,!s){e.next=25;break}throw l;case 25:return e.finish(22);case 26:return e.finish(19);case 27:r(t),e.next=33;break;case 30:e.prev=30,e.t1=e.catch(0),console.log(e.t1);case 33:case"end":return e.stop()}}),e,null,[[0,30],[2,15,19,27],[20,,22,26]])})));return function(n,t){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.jsx)(E,{multiple:!0,hoverTitle:"Drop image files here",handleChange:function(e){return function(e){return s.apply(this,arguments)}(e)},name:"file",types:F,children:r})}},8749:function(e,n,t){t.d(n,{V:function(){return o}});var r=t(5893),i=t(852),a=t(7294);var o=function(){var e=function(){var e=function(){return{width:t?window.innerWidth:0,height:t?window.innerHeight:0}},n=function(){o(e())},t=!0,r=(0,a.useState)(e()),i=r[0],o=r[1];return(0,a.useEffect)((function(){if(t)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[t]),i}();e.height;return e.width<1024?(0,r.jsx)("div",{}):(0,r.jsx)("div",{className:"hidden lg:block pb-4",children:(0,r.jsxs)("div",{className:"flex flex-col m-auto",style:{width:728},children:[(0,r.jsx)("div",{className:"flex w-full",children:(0,r.jsx)("span",{className:"block text-xs",style:{color:"#555"},children:"Advertisement"})}),(0,r.jsx)(i.a,{className:" ",style:{height:90,background:"#eeeeee33"},client:"ca-pub-7908993773401181",slot:"2845416307",format:"horizontal"})]})})}}}]);
//# sourceMappingURL=937-bbfb52ace21341b5.js.map