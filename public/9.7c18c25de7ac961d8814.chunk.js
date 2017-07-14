webpackJsonp([9],{"./app/containers/Study/actions.js":function(e,n,t){"use strict";var r=t("./app/utils/client.js"),u=t("./app/containers/Study/constants.js");t.d(n,"f",function(){return a}),t.d(n,"b",function(){return i}),t.d(n,"a",function(){return o}),t.d(n,"t",function(){return c}),t.d(n,"c",function(){return s}),t.d(n,"m",function(){return f}),t.d(n,"l",function(){return d}),t.d(n,"k",function(){return l}),t.d(n,"n",function(){return p}),t.d(n,"o",function(){return v}),t.d(n,"p",function(){return h}),t.d(n,"q",function(){return y}),t.d(n,"r",function(){return g}),t.d(n,"e",function(){return m}),t.d(n,"d",function(){return b}),t.d(n,"g",function(){return k}),t.d(n,"h",function(){return x}),t.d(n,"s",function(){return E}),t.d(n,"j",function(){return w}),t.d(n,"i",function(){return _});var a=function(e,n){return{type:u.a,nctId:e,shouldOverride:n}},i=function(e){return{type:u.b,nctId:e}},o=function(e){return{type:u.c,nctId:e}},c=function(e){return{type:u.d,data:e}},s=function(e,n){return{type:u.e,nctId:e,wikiText:n}},f=function(e,n,t){return{type:u.f,nctId:e,key:n,value:t}},d=function(e,n,t){return{type:u.g,nctId:e,key:n,value:t}},l=function(e,n){return{type:u.h,nctId:e,key:n}},p=function(e){return{type:u.i,data:e}},v=function(e){return{type:u.k,data:e}},h=function(e){return{type:u.l,data:e}},y=function(e){return{type:u.m,data:e}},g=function(e){return{type:u.n,data:e}},m=function(e,n){return{type:u.o,nctId:e,tag:n}},b=function(e,n){return{type:u.p,nctId:e,tag:n}},k=function(e){return function(n,t,a){return r.a.post("/reviews.json",{nct_id:n,comment:t,rating:a}).then(function(){return e({type:u.q})})}},x=function(e){return function(n,t,a){return r.a.patch("/reviews/"+n+".json",{comment:t,rating:a}).then(function(){return e({type:u.r})})}},E=function(e){return{type:u.s,data:e}},w=function(e){return function(n){return r.a.get("reviews/"+n).then(function(n){return e({type:u.t,data:n.data})})}},_=function(e){return function(n){return r.a.delete("reviews/"+n+".json").then(function(){return e({type:u.u})})}}},"./app/containers/Study/constants.js":function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"c",function(){return u}),t.d(n,"i",function(){return a}),t.d(n,"j",function(){return i}),t.d(n,"l",function(){return o}),t.d(n,"m",function(){return c}),t.d(n,"n",function(){return s}),t.d(n,"k",function(){return f}),t.d(n,"d",function(){return d}),t.d(n,"e",function(){return l}),t.d(n,"p",function(){return p}),t.d(n,"o",function(){return v}),t.d(n,"q",function(){return h}),t.d(n,"s",function(){return y}),t.d(n,"t",function(){return g}),t.d(n,"r",function(){return m}),t.d(n,"u",function(){return b}),t.d(n,"f",function(){return k}),t.d(n,"h",function(){return x}),t.d(n,"g",function(){return E}),t.d(n,"a",function(){return w});var r="app/Study/REQUEST_STUDY_ACTION",u="app/Study/RELOAD_STUDY_ACTION",a="app/Study/DEFAULT_ACTION",i="app/Study/CROWD_ACTION",o="app/Study/DESCRIPTIVE_ACTION",c="app/Study/ADMIN_ACTION",s="app/Study/RECRUITMENT_ACTION",f="app/Study/TRACKING_ACTION",d="app/Study/WIKI_ACTION",l="app/Study/WIKI_SUBMIT_ACTION",p="app/Study/TAG_SUBMIT_ACTION",v="app/Study/TAG_REMOVE_ACTION",h="app/Study/REVIEW_SUBMIT_ACTION",y="app/Study/REVIEWS_RECEIVE_ACTION",g="app/Study/REVIEW_RECEIVE_ACTION",m="app/Study/REVIEW_UPDATE_ACTION",b="app/Study/REVIEW_DELETE_ACTION",k="app/Study/ANNOTATION_CREATE_ACTION",x="app/Study/ANNOTATION_DELETE_ACTION",E="app/Study/ANNOTATION_UPDATE_ACTION",w="app/Study/WIKI_OVERRIDE_ACTION"},"./app/containers/Study/sagas.js":function(e,n,t){"use strict";function r(e){var n,r;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,t.i(E.select)(t.i(I.d)());case 2:return n=u.sent,u.next=5,A.a.get("/studies/"+e.nctId+"/json?wiki_override="+n);case 5:return r=u.sent,u.next=8,t.i(E.put)(t.i(O.n)(r.data));case 8:case"end":return u.stop()}},j[0],this)}function u(e){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,A.a.get("/studies/"+e.nctId+"/tracking");case 2:return n=r.sent,r.next=5,t.i(E.put)(t.i(O.o)(n.data));case 5:case"end":return r.stop()}},j[1],this)}function a(e){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,A.a.get("/studies/"+e.nctId+"/descriptive");case 2:return n=r.sent,r.next=5,t.i(E.put)(t.i(O.p)(n.data));case 5:case"end":return r.stop()}},j[2],this)}function i(e){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,A.a.get("/studies/"+e.nctId+"/administrative");case 2:return n=r.sent,r.next=5,t.i(E.put)(t.i(O.q)(n.data));case 5:case"end":return r.stop()}},j[3],this)}function o(e){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,A.a.get("/studies/"+e.nctId+"/recruitment");case 2:return n=r.sent,r.next=5,t.i(E.put)(t.i(O.r)(n.data));case 5:case"end":return r.stop()}},j[4],this)}function c(e){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,A.a.get("reviews.json?nct_id="+e.nctId);case 2:return n=r.sent,r.next=5,t.i(E.put)(t.i(O.s)(n.data));case 5:case"end":return r.stop()}},j[5],this)}function s(e){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,A.a.get("/studies/"+e.nctId+"/wiki");case 2:return n=r.sent,r.next=5,t.i(E.put)(t.i(O.t)(n.data));case 5:case"end":return r.stop()}},j[6],this)}function f(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(E.call)(r,e);case 2:return n.next=4,t.i(E.call)(s,e);case 4:return n.next=6,t.i(E.call)(u,e);case 6:return n.next=8,t.i(E.call)(a,e);case 8:return n.next=10,t.i(E.call)(i,e);case 10:return n.next=12,t.i(E.call)(o,e);case 12:return n.next=14,t.i(E.call)(c,e);case 14:case"end":return n.stop()}},j[7],this)}function d(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(E.call)(r,e);case 2:return n.next=4,t.i(E.call)(s,e);case 4:return n.next=6,t.i(E.call)(c,e);case 6:case"end":return n.stop()}},j[8],this)}function l(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.a.post(T(e),{wiki_text:e.wikiText});case 2:return n.next=4,t.i(E.put)({type:_.c,nctId:e.nctId});case 4:case"end":return n.stop()}},j[9],this)}function p(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.a.post(T(e),{add_meta:e});case 2:return n.next=4,t.i(E.put)({type:_.c,nctId:e.nctId});case 4:case"end":return n.stop()}},j[10],this)}function v(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.a.post(T(e),{delete_meta:{key:e.key}});case 2:return n.next=4,t.i(E.put)({type:_.c,nctId:e.nctId});case 4:case"end":return n.stop()}},j[11],this)}function h(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.a.post(T(e),{add_tag:e.tag});case 2:return n.next=4,t.i(E.put)({type:_.c,nctId:e.nctId});case 4:case"end":return n.stop()}},j[12],this)}function y(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.a.post(T(e),{remove_tag:e.tag});case 2:return n.next=4,t.i(E.put)({type:_.c,nctId:e.nctId});case 4:case"end":return n.stop()}},j[13],this)}function g(){var e,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.i(E.takeEvery)(_.b,f);case 2:return e=r.sent,r.next=5,t.i(E.takeEvery)(_.c,d);case 5:return n=r.sent,r.next=8,t.i(E.take)(w.LOCATION_CHANGE);case 8:return r.next=10,t.i(E.cancel)(e);case 10:return r.next=12,t.i(E.cancel)(n);case 12:case"end":return r.stop()}},j[14],this)}function m(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(E.takeEvery)(_.e,l);case 2:return e=n.sent,n.next=5,t.i(E.take)(w.LOCATION_CHANGE);case 5:return n.next=7,t.i(E.cancel)(e);case 7:case"end":return n.stop()}},j[15],this)}function b(){var e,n,r;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,t.i(E.takeEvery)(_.f,p);case 2:return e=u.sent,u.next=5,t.i(E.takeEvery)(_.h,v);case 5:return n=u.sent,u.next=8,t.i(E.takeEvery)(_.g,p);case 8:return r=u.sent,u.next=11,t.i(E.take)(w.LOCATION_CHANGE);case 11:return u.next=13,t.i(E.cancel)(e);case 13:return u.next=15,t.i(E.cancel)(n);case 15:return u.next=17,t.i(E.cancel)(r);case 17:case"end":return u.stop()}},j[16],this)}function k(){var e,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.i(E.takeEvery)(_.o,y);case 2:return e=r.sent,r.next=5,t.i(E.takeEvery)(_.p,h);case 5:return n=r.sent,r.next=8,t.i(E.take)(w.LOCATION_CHANGE);case 8:return r.next=10,t.i(E.cancel)(e);case 10:return r.next=12,t.i(E.cancel)(n);case 12:case"end":return r.stop()}},j[17],this)}function x(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(E.takeEvery)(_.a,d);case 2:return e=n.sent,n.next=5,t.i(E.take)(w.LOCATION_CHANGE);case 5:return n.next=7,t.i(E.cancel)(e);case 7:case"end":return n.stop()}},j[18],this)}Object.defineProperty(n,"__esModule",{value:!0});var E=t("./node_modules/redux-saga/effects.js"),w=(t.n(E),t("./node_modules/react-router-redux/lib/index.js")),_=(t.n(w),t("./app/containers/Study/constants.js")),I=t("./app/containers/Study/selectors.js"),O=t("./app/containers/Study/actions.js"),A=t("./app/utils/client.js");n.loadDefault=r,n.loadTracking=u,n.loadDescriptive=a,n.loadAdmin=i,n.loadRecruitment=o,n.loadReviews=c,n.loadWiki=s,n.loadStudy=f,n.reloadStudy=d,t.d(n,"wikiUrl",function(){return T}),n.submitWiki=l,n.postAnnotation=p,n.deleteAnnotation=v,n.submitTag=h,n.removeTag=y,n.reloadStudySaga=g,n.wikiSaga=m,n.annotationsSaga=b,n.tagsSaga=k,n.wikiOverrideSaga=x;var j=[r,u,a,i,o,c,s,f,d,l,p,v,h,y,g,m,b,k,x].map(regeneratorRuntime.mark),T=function(e){return"/studies/"+e.nctId+"/wiki"};n.default=[g,m,b,k,x]},"./app/containers/Study/selectors.js":function(e,n,t){"use strict";var r=t("./node_modules/reselect/es/index.js"),u=t("./node_modules/immutable/dist/immutable.js");t.n(u);t.d(n,"c",function(){return o}),t.d(n,"b",function(){return c}),t.d(n,"d",function(){return s});var a=function(){return function(e){return e.get("study")}},i=function(){return t.i(r.a)(a(),function(e){return e.toJS()})},o=function(){return t.i(r.a)(a(),function(e){return e.getIn(["wiki","meta"],t.i(u.fromJS)({})).toJS()})},c=function(){return t.i(r.a)(a(),function(e){return e.get("wiki",t.i(u.fromJS)({})).toJS()})},s=function(){return t.i(r.a)(a(),function(e){return e.get("wikiOverride",!0)})};n.a=i},"./node_modules/redux-saga/effects.js":function(e,n,t){e.exports=t("./node_modules/redux-saga/lib/effects.js")},"./node_modules/redux-saga/lib/effects.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("./node_modules/redux-saga/lib/internal/io.js");Object.defineProperty(n,"take",{enumerable:!0,get:function(){return r.take}}),Object.defineProperty(n,"takem",{enumerable:!0,get:function(){return r.takem}}),Object.defineProperty(n,"put",{enumerable:!0,get:function(){return r.put}}),Object.defineProperty(n,"race",{enumerable:!0,get:function(){return r.race}}),Object.defineProperty(n,"call",{enumerable:!0,get:function(){return r.call}}),Object.defineProperty(n,"apply",{enumerable:!0,get:function(){return r.apply}}),Object.defineProperty(n,"cps",{enumerable:!0,get:function(){return r.cps}}),Object.defineProperty(n,"fork",{enumerable:!0,get:function(){return r.fork}}),Object.defineProperty(n,"spawn",{enumerable:!0,get:function(){return r.spawn}}),Object.defineProperty(n,"join",{enumerable:!0,get:function(){return r.join}}),Object.defineProperty(n,"cancel",{enumerable:!0,get:function(){return r.cancel}}),Object.defineProperty(n,"select",{enumerable:!0,get:function(){return r.select}}),Object.defineProperty(n,"actionChannel",{enumerable:!0,get:function(){return r.actionChannel}}),Object.defineProperty(n,"cancelled",{enumerable:!0,get:function(){return r.cancelled}}),Object.defineProperty(n,"flush",{enumerable:!0,get:function(){return r.flush}}),Object.defineProperty(n,"takeEvery",{enumerable:!0,get:function(){return r.takeEvery}}),Object.defineProperty(n,"takeLatest",{enumerable:!0,get:function(){return r.takeLatest}}),Object.defineProperty(n,"throttle",{enumerable:!0,get:function(){return r.throttle}})},"./node_modules/redux-saga/lib/internal/buffers.js":function(e,n,t){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments[1],t=new Array(e),r=0,u=0,o=0,f=function(n){t[u]=n,u=(u+1)%e,r++},d=function(){if(0!=r){var n=t[o];return t[o]=null,r--,o=(o+1)%e,n}},l=function(){for(var e=[];r;)e.push(d());return e};return{isEmpty:function(){return 0==r},put:function(d){if(r<e)f(d);else{var p=void 0;switch(n){case i:throw new Error(a);case c:t[u]=d,u=(u+1)%e,o=u;break;case s:p=2*e,t=l(),r=t.length,u=t.length,o=0,t.length=p,e=p,f(d)}}},take:d,flush:l}}Object.defineProperty(n,"__esModule",{value:!0}),n.buffers=n.BUFFER_OVERFLOW=void 0;var u=t("./node_modules/redux-saga/lib/internal/utils.js"),a=n.BUFFER_OVERFLOW="Channel's Buffer overflow!",i=1,o=2,c=3,s=4,f={isEmpty:u.kTrue,put:u.noop,take:u.noop};n.buffers={none:function(){return f},fixed:function(e){return r(e,i)},dropping:function(e){return r(e,o)},sliding:function(e){return r(e,c)},expanding:function(e){return r(e,s)}}},"./node_modules/redux-saga/lib/internal/channel.js":function(e,n,t){"use strict";function r(){function e(e){return t.push(e),function(){return(0,c.remove)(t,e)}}function n(e){for(var n=t.slice(),r=0,u=n.length;r<u;r++)n[r](e)}var t=[];return{subscribe:e,emit:n}}function u(){function e(){if(i&&o.length)throw(0,c.internalErr)("Cannot have a closed channel with pending takers");if(o.length&&!a.isEmpty())throw(0,c.internalErr)("Cannot have pending takers with non empty buffer")}function n(n){if(e(),(0,c.check)(n,c.is.notUndef,h),!i){if(!o.length)return a.put(n);for(var t=0;t<o.length;t++){var r=o[t];if(!r[c.MATCH]||r[c.MATCH](n))return o.splice(t,1),r(n)}}}function t(n){e(),(0,c.check)(n,c.is.func,"channel.take's callback must be a function"),i&&a.isEmpty()?n(l):a.isEmpty()?(o.push(n),n.cancel=function(){return(0,c.remove)(o,n)}):n(a.take())}function r(n){return e(),(0,c.check)(n,c.is.func,"channel.flush' callback must be a function"),i&&a.isEmpty()?void n(l):void n(a.flush())}function u(){if(e(),!i&&(i=!0,o.length)){var n=o;o=[];for(var t=0,r=n.length;t<r;t++)n[t](l)}}var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.buffers.fixed(),i=!1,o=[];return(0,c.check)(a,c.is.buffer,v),{take:t,put:n,flush:r,close:u,get __takers__(){return o},get __closed__(){return i}}}function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.buffers.none(),t=arguments[2];arguments.length>2&&(0,c.check)(t,c.is.func,"Invalid match function passed to eventChannel");var r=u(n),a=e(function(e){return p(e)?void r.close():void(t&&!t(e)||r.put(e))});if(!c.is.func(a))throw new Error("in eventChannel: subscribe should return a function to unsubscribe");return{take:r.take,flush:r.flush,close:function(){r.__closed__||(r.close(),a())}}}function i(e){var n=a(function(n){return e(function(e){return e[c.SAGA_ACTION]?void n(e):void(0,f.asap)(function(){return n(e)})})});return o({},n,{take:function(e,t){arguments.length>1&&((0,c.check)(t,c.is.func,"channel.take's matcher argument must be a function"),e[c.MATCH]=t),n.take(e)}})}Object.defineProperty(n,"__esModule",{value:!0}),n.UNDEFINED_INPUT_ERROR=n.INVALID_BUFFER=n.isEnd=n.END=void 0;var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};n.emitter=r,n.channel=u,n.eventChannel=a,n.stdChannel=i;var c=t("./node_modules/redux-saga/lib/internal/utils.js"),s=t("./node_modules/redux-saga/lib/internal/buffers.js"),f=t("./node_modules/redux-saga/lib/internal/scheduler.js"),d="@@redux-saga/CHANNEL_END",l=n.END={type:d},p=n.isEnd=function(e){return e&&e.type===d},v=n.INVALID_BUFFER="invalid buffer passed to channel factory function",h=n.UNDEFINED_INPUT_ERROR="Saga was provided with an undefined action"},"./node_modules/redux-saga/lib/internal/io.js":function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*";if(arguments.length&&(0,w.check)(arguments[0],w.is.notUndef,"take(patternOrChannel): patternOrChannel is undefined"),w.is.pattern(e))return H(O,{pattern:e});if(w.is.channel(e))return H(O,{channel:e});throw new Error("take(patternOrChannel): argument "+String(e)+" is not valid channel or a valid pattern")}function a(e,n){return arguments.length>1?((0,w.check)(e,w.is.notUndef,"put(channel, action): argument channel is undefined"),(0,w.check)(e,w.is.channel,"put(channel, action): argument "+e+" is not a valid channel"),(0,w.check)(n,w.is.notUndef,"put(channel, action): argument action is undefined")):((0,w.check)(e,w.is.notUndef,"put(action): argument action is undefined"),n=e,e=null),H(A,{channel:e,action:n})}function i(e){return H(j,e)}function o(e,n,t){(0,w.check)(n,w.is.notUndef,e+": argument fn is undefined");var r=null;if(w.is.array(n)){var u=n,a=E(u,2);r=a[0],n=a[1]}else if(n.fn){var i=n;r=i.context,n=i.fn}return(0,w.check)(n,w.is.func,e+": argument "+n+" is not a function"),{context:r,fn:n,args:t}}function c(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return H(T,o("call",e,t))}function s(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return H(T,o("apply",{context:e,fn:n},t))}function f(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return H(C,o("cps",e,t))}function d(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return H(S,o("fork",e,t))}function l(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var u=d.apply(void 0,[e].concat(t));return u[S].detached=!0,u}function p(e){if((0,w.check)(e,w.is.notUndef,"join(task): argument task is undefined"),!M(e))throw new Error("join(task): argument "+e+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return H(N,e)}function v(e){if((0,w.check)(e,w.is.notUndef,"cancel(task): argument task is undefined"),!M(e))throw new Error("cancel(task): argument "+e+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return H(R,e)}function h(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return 0===arguments.length?e=w.ident:((0,w.check)(e,w.is.notUndef,"select(selector,[...]): argument selector is undefined"),(0,w.check)(e,w.is.func,"select(selector,[...]): argument "+e+" is not a function")),H(P,{selector:e,args:t})}function y(e,n){return(0,w.check)(e,w.is.notUndef,"actionChannel(pattern,...): argument pattern is undefined"),arguments.length>1&&((0,w.check)(n,w.is.notUndef,"actionChannel(pattern, buffer): argument buffer is undefined"),(0,w.check)(n,w.is.notUndef,"actionChannel(pattern, buffer): argument "+n+" is not a valid buffer")),H(L,{pattern:e,buffer:n})}function g(){return H(U,{})}function m(e){return(0,w.check)(e,w.is.channel,"flush(channel): argument "+e+" is not valid channel"),H(D,e)}function b(e,n){for(var t=arguments.length,r=Array(t>2?t-2:0),u=2;u<t;u++)r[u-2]=arguments[u];return d.apply(void 0,[_.takeEveryHelper,e,n].concat(r))}function k(e,n){for(var t=arguments.length,r=Array(t>2?t-2:0),u=2;u<t;u++)r[u-2]=arguments[u];return d.apply(void 0,[_.takeLatestHelper,e,n].concat(r))}function x(e,n,t){for(var r=arguments.length,u=Array(r>3?r-3:0),a=3;a<r;a++)u[a-3]=arguments[a];return d.apply(void 0,[_.throttleHelper,e,n,t].concat(u))}Object.defineProperty(n,"__esModule",{value:!0}),n.asEffect=n.takem=void 0;var E=function(){function e(e,n){var t=[],r=!0,u=!1,a=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){u=!0,a=e}finally{try{!r&&o.return&&o.return()}finally{if(u)throw a}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n.take=u,n.put=a,n.race=i,n.call=c,n.apply=s,n.cps=f,n.fork=d,n.spawn=l,n.join=p,n.cancel=v,n.select=h,n.actionChannel=y,n.cancelled=g,n.flush=m,n.takeEvery=b,n.takeLatest=k,n.throttle=x;var w=t("./node_modules/redux-saga/lib/internal/utils.js"),_=t("./node_modules/redux-saga/lib/internal/sagaHelpers.js"),I=(0,w.sym)("IO"),O="TAKE",A="PUT",j="RACE",T="CALL",C="CPS",S="FORK",N="JOIN",R="CANCEL",P="SELECT",L="ACTION_CHANNEL",U="CANCELLED",D="FLUSH",q=function(e,n){return e+" has been deprecated in favor of "+n+", please update your code"},H=function(e,n){var t;return t={},r(t,I,!0),r(t,e,n),t};u.maybe=function(){var e=u.apply(void 0,arguments);return e[O].maybe=!0,e};n.takem=(0,w.deprecate)(u.maybe,q("takem","take.maybe"));a.resolve=function(){var e=a.apply(void 0,arguments);return e[A].resolve=!0,e},a.sync=(0,w.deprecate)(a.resolve,q("put.sync","put.resolve"));var M=function(e){return e[w.TASK]},F=function(e){return function(n){return n&&n[I]&&n[e]}};n.asEffect={take:F(O),put:F(A),race:F(j),call:F(T),cps:F(C),fork:F(S),join:F(N),cancel:F(R),select:F(P),actionChannel:F(L),cancelled:F(U),flush:F(D)}},"./node_modules/redux-saga/lib/internal/sagaHelpers.js":function(e,n,t){"use strict";function r(e,n){function t(n,t){if(a===v)return p;if(t)throw a=v,t;u&&u(n);var r=e[a](),i=c(r,3),o=i[0],s=i[1],f=i[2];return a=o,u=f,a===v?p:s}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"iterator",u=void 0,a=n;return(0,f.makeIterator)(t,function(e){return t(null,e)},r,!0)}function u(e){return f.is.channel(e)?"channel":Array.isArray(e)?String(e.map(function(e){return String(e)})):String(e)}function a(e,n){for(var t=arguments.length,a=Array(t>2?t-2:0),i=2;i<t;i++)a[i-2]=arguments[i];var o={done:!1,value:(0,d.take)(e)},c=function(e){return{done:!1,value:d.fork.apply(void 0,[n].concat(a,[e]))}},f=void 0,l=function(e){return f=e};return r({q1:function(){return["q2",o,l]},q2:function(){return f===s.END?[v]:["q1",c(f)]}},"q1","takeEvery("+u(e)+", "+n.name+")")}function i(e,n){for(var t=arguments.length,a=Array(t>2?t-2:0),i=2;i<t;i++)a[i-2]=arguments[i];var o={done:!1,value:(0,d.take)(e)},c=function(e){return{done:!1,value:d.fork.apply(void 0,[n].concat(a,[e]))}},f=function(e){return{done:!1,value:(0,d.cancel)(e)}},l=void 0,p=void 0,h=function(e){return l=e},y=function(e){return p=e};return r({q1:function(){return["q2",o,y]},q2:function(){return p===s.END?[v]:l?["q3",f(l)]:["q1",c(p),h]},q3:function(){return["q1",c(p),h]}},"q1","takeLatest("+u(e)+", "+n.name+")")}function o(e,n,t){for(var a=arguments.length,i=Array(a>3?a-3:0),o=3;o<a;o++)i[o-3]=arguments[o];var c=void 0,p=void 0,h={done:!1,value:(0,d.actionChannel)(n,l.buffers.sliding(1))},y=function(){return{done:!1,value:(0,d.take)(p,n)}},g=function(e){return{done:!1,value:d.fork.apply(void 0,[t].concat(i,[e]))}},m={done:!1,value:(0,d.call)(f.delay,e)},b=function(e){return c=e},k=function(e){return p=e};return r({q1:function(){return["q2",h,k]},q2:function(){return["q3",y(),b]},q3:function(){return c===s.END?[v]:["q4",g(c)]},q4:function(){return["q2",m]}},"q1","throttle("+u(n)+", "+t.name+")")}Object.defineProperty(n,"__esModule",{value:!0}),n.throttle=n.takeLatest=n.takeEvery=void 0;var c=function(){function e(e,n){var t=[],r=!0,u=!1,a=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){u=!0,a=e}finally{try{!r&&o.return&&o.return()}finally{if(u)throw a}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n.takeEveryHelper=a,n.takeLatestHelper=i,n.throttleHelper=o;var s=t("./node_modules/redux-saga/lib/internal/channel.js"),f=t("./node_modules/redux-saga/lib/internal/utils.js"),d=t("./node_modules/redux-saga/lib/internal/io.js"),l=t("./node_modules/redux-saga/lib/internal/buffers.js"),p={done:!0,value:void 0},v={},h=function(e){return"import "+e+" from 'redux-saga' has been deprecated in favor of import "+e+" from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield "+e+" will return task descriptor to your saga and execute next lines of code."};n.takeEvery=(0,f.deprecate)(a,h("takeEvery")),n.takeLatest=(0,f.deprecate)(i,h("takeLatest")),n.throttle=(0,f.deprecate)(o,h("throttle"))},"./node_modules/redux-saga/lib/internal/scheduler.js":function(e,n,t){"use strict";function r(e){try{a(),e()}finally{i()}}function u(e){c?o.push(e):r(e)}function a(){c++}function i(){c--,!c&&o.length&&r(o.shift())}Object.defineProperty(n,"__esModule",{value:!0}),n.asap=u,n.suspend=a,n.flush=i;var o=[],c=0},"./node_modules/redux-saga/lib/internal/utils.js":function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n,t){if(!n(e))throw l("error","uncaught at check",t),new Error(t)}function a(e,n){var t=e.indexOf(n);t>=0&&e.splice(t,1)}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=h({},e),t=new Promise(function(e,t){n.resolve=e,n.reject=t});return n.promise=t,n}function o(e){for(var n=[],t=0;t<e;t++)n.push(i());return n}function c(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=void 0,r=new Promise(function(r){t=setTimeout(function(){return r(n)},e)});return r[k]=function(){return clearTimeout(t)},r}function s(){var e,n=!0,t=void 0,u=void 0;return e={},r(e,m,!0),r(e,"isRunning",function(){return n}),r(e,"result",function(){return t}),r(e,"error",function(){return u}),r(e,"setRunning",function(e){return n=e}),r(e,"setResult",function(e){return t=e}),r(e,"setError",function(e){return u=e}),e}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){return++e}}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments[3],u={name:t,next:e,throw:n,return:O};return r&&(u[b]=!0),"undefined"!=typeof Symbol&&(u[Symbol.iterator]=function(){return u}),u}function l(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";"undefined"==typeof window?console.log("redux-saga "+e+": "+n+"\n"+(t&&t.stack||t)):console[e](n,t)}function p(e,n){return function(){return w&&l("warn",n),e.apply(void 0,arguments)}}function v(e){return function(n){var t=Object.defineProperty(n,x,{value:!0});return e(t)}}Object.defineProperty(n,"__esModule",{value:!0});var h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.check=u,n.remove=a,n.deferred=i,n.arrayOfDeffered=o,n.delay=c,n.createMockTask=s,n.autoInc=f,n.makeIterator=d,n.log=l,n.deprecate=p,n.wrapSagaDispatch=v;var g=n.sym=function(e){return"@@redux-saga/"+e},m=n.TASK=g("TASK"),b=n.HELPER=g("HELPER"),k=(n.MATCH=g("MATCH"),n.CANCEL=g("cancelPromise")),x=n.SAGA_ACTION=g("SAGA_ACTION"),E=n.konst=function(e){return function(){return e}},w=(n.kTrue=E(!0),n.kFalse=E(!1),n.noop=function(){},n.ident=function(e){return e},n.isDev=!1),_=n.is={undef:function(e){return null===e||void 0===e},notUndef:function(e){return null!==e&&void 0!==e},func:function(e){return"function"==typeof e},number:function(e){return"number"==typeof e},array:Array.isArray,promise:function(e){return e&&_.func(e.then)},iterator:function(e){return e&&_.func(e.next)&&_.func(e.throw)},task:function(e){return e&&e[m]},observable:function(e){return e&&_.func(e.subscribe)},buffer:function(e){return e&&_.func(e.isEmpty)&&_.func(e.take)&&_.func(e.put)},pattern:function(e){return e&&("string"==typeof e||"symbol"===("undefined"==typeof e?"undefined":y(e))||_.func(e)||_.array(e))},channel:function(e){return e&&_.func(e.take)&&_.func(e.close)},helper:function(e){return e&&e[b]}},I=(n.uid=f(),function(e){throw e}),O=function(e){return{value:e,done:!0}};n.internalErr=function(e){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+e+"\n")}}});