"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[83],{5545:function(n,r,e){e.d(r,{O:function(){return x}});var t,a,o,i=e(1087),u=e(7689),c=e(168),s=e(6444),p=s.ZP.ul(t||(t=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-top: 20px;\n"]))),f=s.ZP.li(a||(a=(0,c.Z)(["\n  transition: transform 500ms;\n  will-change: transform;\n  cursor: pointer;\n  border-radius: 5px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n  }\n"]))),l=s.ZP.div(o||(o=(0,c.Z)(["\n  border-radius: 5px;\n  overflow: hidden;\n  width: 300px;\n  height: 450px;\n"]))),d=e(184),x=function(n){var r=n.movies,e=(0,u.TH)();return(0,d.jsx)(p,{children:r.map((function(n){var r=n.id,t=n.poster_path,a=n.title;return(0,d.jsx)(f,{children:(0,d.jsx)(i.rU,{to:"/movies/".concat(r),state:{from:e},children:(0,d.jsx)(l,{children:(0,d.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://via.placeholder.com/300x450.png?text=".concat(a),alt:a})})})},r)}))})}},2083:function(n,r,e){e.r(r),e.d(r,{default:function(){return k}});var t,a,o,i=e(5861),u=e(9439),c=e(7757),s=e.n(c),p=e(2791),f=e(1087),l=e(9126),d=e(168),x=e(6444),h=x.ZP.form(t||(t=(0,d.Z)(["\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 400px;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 1px solid;\n"]))),v=x.ZP.input(a||(a=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),m=x.ZP.button(o||(o=(0,d.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-color: transparent;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    color: orangered;\n  }\n"]))),g=e(184),b=function(n){var r=n.updateQueryString;return(0,g.jsxs)(h,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;r(e.elements.query.value),e.reset()},children:[(0,g.jsx)(v,{type:"text",name:"query",placeholder:"Search movie"}),(0,g.jsx)(m,{type:"submit",children:(0,g.jsx)(l.dVI,{size:"1.5em"})})]})},w=e(5545),Z=e(4390),y=e(9014),k=function(){var n,r=(0,p.useState)([]),e=(0,u.Z)(r,2),t=e[0],a=e[1],o=(0,f.lr)(),c=(0,u.Z)(o,2),l=c[0],d=c[1],x=null!==(n=l.get("query"))&&void 0!==n?n:"";(0,p.useEffect)((function(){if(""!==x){var n=new AbortController,r=n.signal,e=function(){var n=(0,i.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,Z.qF)(x,r);case 3:if((e=n.sent).total_results){n.next=6;break}return n.abrupt("return",y.ZP.error("Enter correct query"));case 6:a(e.results),n.next=14;break;case 9:if(n.prev=9,n.t0=n.catch(0),"CanceledError"!==n.t0.name){n.next=13;break}return n.abrupt("return");case 13:y.ZP.error("Oops, something went wrong");case 14:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();return e(),function(){n.abort()}}}),[x]);return(0,g.jsxs)("main",{children:[(0,g.jsx)(y.x7,{position:"top-right",reverseOrder:!1}),(0,g.jsx)(b,{updateQueryString:function(n){d(""!==n?{query:n}:{})}}),(0,g.jsx)(w.O,{movies:t})]})}},4390:function(n,r,e){e.d(r,{Df:function(){return c},TP:function(){return s},qF:function(){return p},tx:function(){return l},zv:function(){return f}});var t=e(5861),a=e(7757),o=e.n(a),i=e(1912);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="b60c32a6f6f2663f6a35c755ff35b4cc",c=function(){var n=(0,t.Z)(o().mark((function n(r){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(u),{signal:r});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(o().mark((function n(r,e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(r,"?api_key=").concat(u),{signal:e});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(r,e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(r),{signal:e});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(o().mark((function n(r,e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(r,"/credits?api_key=").concat(u),{signal:e});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(o().mark((function n(r,e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(u),{signal:e});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=83.d77da370.chunk.js.map