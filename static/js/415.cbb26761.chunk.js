"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{5545:function(n,r,t){t.d(r,{O:function(){return l}});var e,a,c,u=t(1087),o=t(7689),i=t(168),s=t(6444),p=s.ZP.ul(e||(e=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-top: 20px;\n"]))),f=s.ZP.li(a||(a=(0,i.Z)(["\n  transition: transform 500ms;\n  will-change: transform;\n  cursor: pointer;\n  border-radius: 5px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n  }\n"]))),x=s.ZP.div(c||(c=(0,i.Z)(["\n  border-radius: 5px;\n  overflow: hidden;\n  width: 300px;\n  height: 450px;\n"]))),v=t(184),l=function(n){var r=n.movies,t=(0,o.TH)();return(0,v.jsx)(p,{children:r.map((function(n){var r=n.id,e=n.poster_path,a=n.title;return(0,v.jsx)(f,{children:(0,v.jsx)(u.rU,{to:"/movies/".concat(r),state:{from:t},children:(0,v.jsx)(x,{children:(0,v.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://via.placeholder.com/300x450.png?text=".concat(a),alt:a})})})},r)}))})}},5415:function(n,r,t){t.r(r);var e=t(5861),a=t(9439),c=t(7757),u=t.n(c),o=t(2791),i=t(5545),s=t(4390),p=t(9014),f=t(184);r.default=function(){var n=(0,o.useState)([]),r=(0,a.Z)(n,2),t=r[0],c=r[1];return(0,o.useEffect)((function(){var n=new AbortController,r=n.signal,t=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Df)(r);case 3:t=n.sent,c(t.results),n.next=12;break;case 7:if(n.prev=7,n.t0=n.catch(0),"CanceledError"!==n.t0.name){n.next=11;break}return n.abrupt("return");case 11:p.ZP.error("Oops, something went wrong");case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return t(),function(){n.abort()}}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)(p.x7,{position:"top-right",reverseOrder:!1}),(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)(i.O,{movies:t})]})}},4390:function(n,r,t){t.d(r,{Df:function(){return i},TP:function(){return s},qF:function(){return p},tx:function(){return x},zv:function(){return f}});var e=t(5861),a=t(7757),c=t.n(a),u=t(1912);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="b60c32a6f6f2663f6a35c755ff35b4cc",i=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(o),{signal:r});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(r,t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"?api_key=").concat(o),{signal:t});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(r,t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(r),{signal:t});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(r,t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"/credits?api_key=").concat(o),{signal:t});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(c().mark((function n(r,t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(o),{signal:t});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.cbb26761.chunk.js.map