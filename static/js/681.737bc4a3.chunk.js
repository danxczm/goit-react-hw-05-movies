"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{410:function(e,t,r){r.d(t,{T4:function(){return p},d3:function(){return o},ho:function(){return h},kA:function(){return s},sw:function(){return c}});var n=r(861),a=r(757),i=r.n(a),u=r(243),c=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/trending/all/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmFmMDdhZGQ3MmE5NDgyOGE5MTBhNGE2MGU1NTkzOCIsInN1YiI6IjY0NmY3YmYxMDcyMTY2MDBhNzliZTUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpPxpgdkPRwFPgBZQbT8Vxk-iHt6wJxJ2MPjUOG8m3M"}},e.next=3,u.Z.request(t);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:t,include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmFmMDdhZGQ3MmE5NDgyOGE5MTBhNGE2MGU1NTkzOCIsInN1YiI6IjY0NmY3YmYxMDcyMTY2MDBhNzliZTUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpPxpgdkPRwFPgBZQbT8Vxk-iHt6wJxJ2MPjUOG8m3M"}},e.next=3,u.Z.request(r);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmFmMDdhZGQ3MmE5NDgyOGE5MTBhNGE2MGU1NTkzOCIsInN1YiI6IjY0NmY3YmYxMDcyMTY2MDBhNzliZTUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpPxpgdkPRwFPgBZQbT8Vxk-iHt6wJxJ2MPjUOG8m3M"}},e.next=3,u.Z.request(r);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t,"/credits"),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmFmMDdhZGQ3MmE5NDgyOGE5MTBhNGE2MGU1NTkzOCIsInN1YiI6IjY0NmY3YmYxMDcyMTY2MDBhNzliZTUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpPxpgdkPRwFPgBZQbT8Vxk-iHt6wJxJ2MPjUOG8m3M"}},e.next=3,u.Z.request(r);case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmFmMDdhZGQ3MmE5NDgyOGE5MTBhNGE2MGU1NTkzOCIsInN1YiI6IjY0NmY3YmYxMDcyMTY2MDBhNzliZTUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpPxpgdkPRwFPgBZQbT8Vxk-iHt6wJxJ2MPjUOG8m3M"}},e.next=3,u.Z.request(r);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},681:function(e,t,r){r.r(t);var n=r(439),a=r(410),i=r(689),u=r(791),c=r(184);t.default=function(){var e=(0,i.UO)().movieId,t=(0,u.useState)(null),r=(0,n.Z)(t,2),s=r[0],o=r[1];return(0,u.useEffect)((function(){(0,a.T4)(e).then(o)}),[e]),s?(0,c.jsx)(c.Fragment,{children:0!==s.length?(0,c.jsx)("ul",{children:s.map((function(e){var t=e.id,r=e.author,n=e.content;return(0,c.jsxs)("li",{children:[(0,c.jsx)("h2",{children:r}),(0,c.jsx)("p",{children:n})]},t)}))}):"Sorry, there are no reviews for this movie"}):null}}}]);
//# sourceMappingURL=681.737bc4a3.chunk.js.map