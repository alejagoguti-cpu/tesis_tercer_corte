(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Rp={exports:{}},Nc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux;function VT(){if(Ux)return Nc;Ux=1;var l=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:l,type:a,key:f,ref:o!==void 0?o:null,props:c}}return Nc.Fragment=e,Nc.jsx=i,Nc.jsxs=i,Nc}var Ox;function kT(){return Ox||(Ox=1,Rp.exports=VT()),Rp.exports}var V=kT(),Cp={exports:{}},xt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix;function XT(){if(Ix)return xt;Ix=1;var l=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),y=Symbol.iterator;function E(D){return D===null||typeof D!="object"?null:(D=y&&D[y]||D["@@iterator"],typeof D=="function"?D:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function I(D,J,ve){this.props=D,this.context=J,this.refs=S,this.updater=ve||T}I.prototype.isReactComponent={},I.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},I.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function L(){}L.prototype=I.prototype;function R(D,J,ve){this.props=D,this.context=J,this.refs=S,this.updater=ve||T}var H=R.prototype=new L;H.constructor=R,M(H,I.prototype),H.isPureReactComponent=!0;var z=Array.isArray;function O(){}var B={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function w(D,J,ve){var me=ve.ref;return{$$typeof:l,type:D,key:J,ref:me!==void 0?me:null,props:ve}}function G(D,J){return w(D.type,J,D.props)}function se(D){return typeof D=="object"&&D!==null&&D.$$typeof===l}function ae(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ve){return J[ve]})}var ue=/\/+/g;function fe(D,J){return typeof D=="object"&&D!==null&&D.key!=null?ae(""+D.key):J.toString(36)}function q(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(O,O):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ce(D,J,ve,me,Ce){var We=typeof D;(We==="undefined"||We==="boolean")&&(D=null);var Le=!1;if(D===null)Le=!0;else switch(We){case"bigint":case"string":case"number":Le=!0;break;case"object":switch(D.$$typeof){case l:case e:Le=!0;break;case _:return Le=D._init,ce(Le(D._payload),J,ve,me,Ce)}}if(Le)return Ce=Ce(D),Le=me===""?"."+fe(D,0):me,z(Ce)?(ve="",Le!=null&&(ve=Le.replace(ue,"$&/")+"/"),ce(Ce,J,ve,"",function(ft){return ft})):Ce!=null&&(se(Ce)&&(Ce=G(Ce,ve+(Ce.key==null||D&&D.key===Ce.key?"":(""+Ce.key).replace(ue,"$&/")+"/")+Le)),J.push(Ce)),1;Le=0;var Ue=me===""?".":me+":";if(z(D))for(var Pe=0;Pe<D.length;Pe++)me=D[Pe],We=Ue+fe(me,Pe),Le+=ce(me,J,ve,We,Ce);else if(Pe=E(D),typeof Pe=="function")for(D=Pe.call(D),Pe=0;!(me=D.next()).done;)me=me.value,We=Ue+fe(me,Pe++),Le+=ce(me,J,ve,We,Ce);else if(We==="object"){if(typeof D.then=="function")return ce(q(D),J,ve,me,Ce);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Le}function Y(D,J,ve){if(D==null)return D;var me=[],Ce=0;return ce(D,me,"","",function(We){return J.call(ve,We,Ce++)}),me}function ye(D){if(D._status===-1){var J=D._result,ve=J();ve.then(function(me){(D._status===0||D._status===-1)&&(D._status=1,D._result=me,ve.status===void 0&&(ve.status="fulfilled",ve.value=me))},function(me){(D._status===0||D._status===-1)&&(D._status=2,D._result=me,ve.status===void 0&&(ve.status="rejected",ve.reason=me))}),D._status===-1&&(D._status=0,D._result=ve)}if(D._status===1)return D._result.default;throw D._result}var Me=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function je(D){var J=B.T,ve={};ve.types=J!==null?J.types:null,B.T=ve;try{var me=D(),Ce=B.S;Ce!==null&&Ce(ve,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(O,Me)}catch(We){Me(We)}finally{J!==null&&ve.types!==null&&(J.types=ve.types),B.T=J}}function ut(D){var J=B.T;if(J!==null){var ve=J.types;ve===null?J.types=[D]:ve.indexOf(D)===-1&&ve.push(D)}else je(ut.bind(null,D))}var Nt={map:Y,forEach:function(D,J,ve){Y(D,function(){J.apply(this,arguments)},ve)},count:function(D){var J=0;return Y(D,function(){J++}),J},toArray:function(D){return Y(D,function(J){return J})||[]},only:function(D){if(!se(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return xt.Activity=g,xt.Children=Nt,xt.Component=I,xt.Fragment=i,xt.Profiler=o,xt.PureComponent=R,xt.StrictMode=a,xt.Suspense=p,xt.ViewTransition=v,xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,xt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return B.H.useMemoCache(D)}},xt.addTransitionType=ut,xt.cache=function(D){return function(){return D.apply(null,arguments)}},xt.cacheSignal=function(){return null},xt.cloneElement=function(D,J,ve){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var me=M({},D.props),Ce=D.key;if(J!=null)for(We in J.key!==void 0&&(Ce=""+J.key),J)!N.call(J,We)||We==="key"||We==="__self"||We==="__source"||We==="ref"&&J.ref===void 0||(me[We]=J[We]);var We=arguments.length-2;if(We===1)me.children=ve;else if(1<We){for(var Le=Array(We),Ue=0;Ue<We;Ue++)Le[Ue]=arguments[Ue+2];me.children=Le}return w(D.type,Ce,me)},xt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},xt.createElement=function(D,J,ve){var me,Ce={},We=null;if(J!=null)for(me in J.key!==void 0&&(We=""+J.key),J)N.call(J,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(Ce[me]=J[me]);var Le=arguments.length-2;if(Le===1)Ce.children=ve;else if(1<Le){for(var Ue=Array(Le),Pe=0;Pe<Le;Pe++)Ue[Pe]=arguments[Pe+2];Ce.children=Ue}if(D&&D.defaultProps)for(me in Le=D.defaultProps,Le)Ce[me]===void 0&&(Ce[me]=Le[me]);return w(D,We,Ce)},xt.createRef=function(){return{current:null}},xt.forwardRef=function(D){return{$$typeof:h,render:D}},xt.isValidElement=se,xt.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:ye}},xt.memo=function(D,J){return{$$typeof:m,type:D,compare:J===void 0?null:J}},xt.startTransition=je,xt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},xt.use=function(D){return B.H.use(D)},xt.useActionState=function(D,J,ve){return B.H.useActionState(D,J,ve)},xt.useCallback=function(D,J){return B.H.useCallback(D,J)},xt.useContext=function(D){return B.H.useContext(D)},xt.useDebugValue=function(){},xt.useDeferredValue=function(D,J){return B.H.useDeferredValue(D,J)},xt.useEffect=function(D,J){return B.H.useEffect(D,J)},xt.useEffectEvent=function(D){return B.H.useEffectEvent(D)},xt.useId=function(){return B.H.useId()},xt.useImperativeHandle=function(D,J,ve){return B.H.useImperativeHandle(D,J,ve)},xt.useInsertionEffect=function(D,J){return B.H.useInsertionEffect(D,J)},xt.useLayoutEffect=function(D,J){return B.H.useLayoutEffect(D,J)},xt.useMemo=function(D,J){return B.H.useMemo(D,J)},xt.useOptimistic=function(D,J){return B.H.useOptimistic(D,J)},xt.useReducer=function(D,J,ve){return B.H.useReducer(D,J,ve)},xt.useRef=function(D){return B.H.useRef(D)},xt.useState=function(D){return B.H.useState(D)},xt.useSyncExternalStore=function(D,J,ve){return B.H.useSyncExternalStore(D,J,ve)},xt.useTransition=function(){return B.H.useTransition()},xt.version="19.3.1",xt}var Px;function gg(){return Px||(Px=1,Cp.exports=XT()),Cp.exports}var Gn=gg(),Np={exports:{}},Dc={},Dp={exports:{}},Lp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zx;function jT(){return zx||(zx=1,(function(l){function e(q,ce){var Y=q.length;q.push(ce);e:for(;0<Y;){var ye=Y-1>>>1,Me=q[ye];if(0<o(Me,ce))q[ye]=ce,q[Y]=Me,Y=ye;else break e}}function i(q){return q.length===0?null:q[0]}function a(q){if(q.length===0)return null;var ce=q[0],Y=q.pop();if(Y!==ce){q[0]=Y;e:for(var ye=0,Me=q.length,je=Me>>>1;ye<je;){var ut=2*(ye+1)-1,Nt=q[ut],D=ut+1,J=q[D];if(0>o(Nt,Y))D<Me&&0>o(J,Nt)?(q[ye]=J,q[D]=Y,ye=D):(q[ye]=Nt,q[ut]=Y,ye=ut);else if(D<Me&&0>o(J,Y))q[ye]=J,q[D]=Y,ye=D;else break e}}return ce}function o(q,ce){var Y=q.sortIndex-ce.sortIndex;return Y!==0?Y:q.id-ce.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;l.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();l.unstable_now=function(){return f.now()-h}}var p=[],m=[],_=1,g=null,v=3,y=!1,E=!1,T=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function R(q){for(var ce=i(m);ce!==null;){if(ce.callback===null)a(m);else if(ce.startTime<=q)a(m),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=i(m)}}function H(q){if(T=!1,R(q),!E)if(i(p)!==null)E=!0,z||(z=!0,se());else{var ce=i(m);ce!==null&&fe(H,ce.startTime-q)}}var z=!1,O=-1,B=5,N=-1;function w(){return M?!0:!(l.unstable_now()-N<B)}function G(){if(M=!1,z){var q=l.unstable_now();N=q;var ce=!0;try{e:{E=!1,T&&(T=!1,I(O),O=-1),y=!0;var Y=v;try{t:{for(R(q),g=i(p);g!==null&&!(g.expirationTime>q&&w());){var ye=g.callback;if(typeof ye=="function"){g.callback=null,v=g.priorityLevel;var Me=ye(g.expirationTime<=q);if(q=l.unstable_now(),typeof Me=="function"){g.callback=Me,R(q),ce=!0;break t}g===i(p)&&a(p),R(q)}else a(p);g=i(p)}if(g!==null)ce=!0;else{var je=i(m);je!==null&&fe(H,je.startTime-q),ce=!1}}break e}finally{g=null,v=Y,y=!1}ce=void 0}}finally{ce?se():z=!1}}}var se;if(typeof L=="function")se=function(){L(G)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ue=ae.port2;ae.port1.onmessage=G,se=function(){ue.postMessage(null)}}else se=function(){S(G,0)};function fe(q,ce){O=S(function(){q(l.unstable_now())},ce)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(q){q.callback=null},l.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<q?Math.floor(1e3/q):5},l.unstable_getCurrentPriorityLevel=function(){return v},l.unstable_next=function(q){switch(v){case 1:case 2:case 3:var ce=3;break;default:ce=v}var Y=v;v=ce;try{return q()}finally{v=Y}},l.unstable_requestPaint=function(){M=!0},l.unstable_runWithPriority=function(q,ce){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Y=v;v=q;try{return ce()}finally{v=Y}},l.unstable_scheduleCallback=function(q,ce,Y){var ye=l.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ye+Y:ye):Y=ye,q){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=Y+Me,q={id:_++,callback:ce,priorityLevel:q,startTime:Y,expirationTime:Me,sortIndex:-1},Y>ye?(q.sortIndex=Y,e(m,q),i(p)===null&&q===i(m)&&(T?(I(O),O=-1):T=!0,fe(H,Y-ye))):(q.sortIndex=Me,e(p,q),E||y||(E=!0,z||(z=!0,se()))),q},l.unstable_shouldYield=w,l.unstable_wrapCallback=function(q){var ce=v;return function(){var Y=v;v=ce;try{return q.apply(this,arguments)}finally{v=Y}}}})(Lp)),Lp}var Bx;function qT(){return Bx||(Bx=1,Dp.exports=jT()),Dp.exports}var Up={exports:{}},ui={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fx;function WT(){if(Fx)return ui;Fx=1;var l=gg();function e(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function h(_,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:y===f?f:""+y,children:_,containerInfo:g,implementation:v}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ui.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,ui.browser=function(_){return{$$typeof:c,_reason:_}},ui.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return h(_,g,null,v)},ui.flushSync=function(_){var g=p.T,v=a.p;try{if(p.T=null,a.p=2,_)return _()}finally{p.T=g,a.p=v,a.d.f()}},ui.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(_,g))},ui.prefetchDNS=function(_){typeof _=="string"&&a.d.D(_)},ui.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,T=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:E,fetchPriority:T}):v==="script"&&a.d.X(_,{crossOrigin:y,integrity:E,fetchPriority:T,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ui.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);a.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&a.d.M(_)},ui.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin);a.d.L(_,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ui.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=m(g.as,g.crossOrigin);a.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else a.d.m(_)},ui.requestFormReset=function(_){a.d.r(_)},ui.unstable_batchedUpdates=function(_,g){return _(g)},ui.useFormState=function(_,g,v){return p.H.useFormState(_,g,v)},ui.useFormStatus=function(){return p.H.useHostTransitionStatus()},ui.version="19.3.1",ui}var Hx;function YT(){if(Hx)return Up.exports;Hx=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(e){console.error(e)}}return l(),Up.exports=WT(),Up.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gx;function ZT(){if(Gx)return Dc;Gx=1;var l=qT(),e=gg(),i=YT();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,s=n;s&&!s.alternate;)n=s,(n.flags&4098)!==0&&(t=n.return),s=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(a(188));return n!==t?null:t}for(var s=t,r=n;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(r=u.return,r!==null){s=r;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return p(u),t;if(d===r)return p(u),n;d=d.sibling}throw Error(a(188))}if(s.return!==r.return)s=u,r=d;else{for(var x=!1,b=u.child;b;){if(b===s){x=!0,s=u,r=d;break}if(b===r){x=!0,r=u,s=d;break}b=b.sibling}if(!x){for(b=d.child;b;){if(b===s){x=!0,s=d,r=u;break}if(b===r){x=!0,r=d,s=u;break}b=b.sibling}if(!x)throw Error(a(189))}}if(s.alternate!==r)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function g(t,n,s,r,u,d){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&s(t,r,u,d)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,s,r,u,d))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function y(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],s=v(t);return s===null||T(n,t,s.child,{foundSelf:!1}),n}function T(t,n,s,r){for(;s!==null;){if(s===n)r.foundSelf=!0;else if(s.tag===5||s.tag===27||s.tag===6){if(r.foundSelf)return t[1]=s,!0;t[0]=s}else if((s.tag!==22||s.memoizedState===null)&&T(t,n,s.child,r))return!0;s=s.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(a(559))}}var S=null,I=null;function L(t,n,s){return t===s?!0:t===n?(S=t,!0):!1}function R(t,n,s){return t===s?(I=t,!1):t===n?(I!==null&&(S=t),!0):!1}function H(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function z(t,n,s){for(var r=0,u=t;u;u=s(u))r++;u=0;for(var d=n;d;d=s(d))u++;for(;0<r-u;)t=s(t),r--;for(;0<u-r;)n=s(n),u--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=s(t),n=s(n)}return null}var O=Object.assign,B=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),ue=Symbol.for("react.consumer"),fe=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),ye=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),je=Symbol.for("react.activity"),ut=Symbol.for("react.legacy_hidden"),Nt=Symbol.for("react.memo_cache_sentinel"),D=Symbol.for("react.view_transition"),J=Symbol.for("react.recoverable"),ve=Symbol.iterator;function me(t){return t===null||typeof t!="object"?null:(t=ve&&t[ve]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Symbol.for("react.client.reference");function We(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case G:return"Fragment";case ae:return"Profiler";case se:return"StrictMode";case ce:return"Suspense";case Y:return"SuspenseList";case je:return"Activity";case D:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case fe:return t.displayName||"Context";case ue:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ye:return n=t.displayName||null,n!==null?n:We(t.type)||"Memo";case Me:n=t._payload,t=t._init;try{return We(t(n))}catch{}}return null}var Le=Array.isArray,Ue=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Pe=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},k=[],Dn=-1;function _t(t){return{current:t}}function Qe(t){0>Dn||(t.current=k[Dn],k[Dn]=null,Dn--)}function Oe(t,n){Dn++,k[Dn]=t.current,t.current=n}var Rt=_t(null),$e=_t(null),U=_t(null),A=_t(null);function ie(t,n){switch(Oe(U,n),Oe($e,t),Oe(Rt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Vv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Vv(n),t=kv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Qe(Rt),Oe(Rt,t)}function xe(){Qe(Rt),Qe($e),Qe(U)}function Te(t){var n=t.memoizedState;n!==null&&(il._currentValue=n.memoizedState,Oe(A,t)),n=Rt.current;var s=kv(n,t.type);n!==s&&(Oe($e,t),Oe(Rt,s))}function de(t){$e.current===t&&(Qe(Rt),Qe($e)),A.current===t&&(Qe(A),il._currentValue=ft)}var qe,Be;function Ge(t){if(qe===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);qe=n&&n[1]||"",Be=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qe+t+Be}var bt=!1;function Re(t,n){if(!t||bt)return"";bt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ze){var W=ze}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(ze){W=ze}_e=!1;try{var ne=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_e=!0,new t}finally{_e&&(ne!==void 0?Object.defineProperty(t.prototype,"props",ne):delete t.prototype.props)}}}else{try{throw Error()}catch(ze){W=ze}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ze){if(ze&&W&&typeof ze.stack=="string")return[ze.stack,W.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=r.DetermineComponentFrameRoot(),x=d[0],b=d[1];if(x&&b){var P=x.split(`
`),Q=b.split(`
`);for(u=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(r===P.length||u===Q.length)for(r=P.length-1,u=Q.length-1;1<=r&&0<=u&&P[r]!==Q[u];)u--;for(;1<=r&&0<=u;r--,u--)if(P[r]!==Q[u]){if(r!==1||u!==1)do if(r--,u--,0>u||P[r]!==Q[u]){var re=`
`+P[r].replace(" at new "," at ");return t.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",t.displayName)),re}while(1<=r&&0<=u);break}}}finally{bt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Ge(s):""}function Ye(t,n){switch(t.tag){case 26:case 27:case 5:return Ge(t.type);case 16:return Ge("Lazy");case 13:return t.child!==n&&n!==null?Ge("Suspense Fallback"):Ge("Suspense");case 19:return Ge("SuspenseList");case 0:case 15:return Re(t.type,!1);case 11:return Re(t.type.render,!1);case 1:return Re(t.type,!0);case 31:return Ge("Activity");case 30:return Ge("ViewTransition");default:return""}}function at(t){try{var n="",s=null;do n+=Ye(t,s),s=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var lt=Object.prototype.hasOwnProperty,Xe=l.unstable_scheduleCallback,At=l.unstable_cancelCallback,St=l.unstable_shouldYield,Qt=l.unstable_requestPaint,j=l.unstable_now,Ve=l.unstable_getCurrentPriorityLevel,he=l.unstable_ImmediatePriority,Se=l.unstable_UserBlockingPriority,ke=l.unstable_NormalPriority,Ne=l.unstable_LowPriority,mt=l.unstable_IdlePriority,cn=l.log,An=l.unstable_setDisableYieldValue,Ot=null,Zt=null;function Ln(t){if(typeof cn=="function"&&An(t),Zt&&typeof Zt.setStrictMode=="function")try{Zt.setStrictMode(Ot,t)}catch{}}var Qn=Math.clz32?Math.clz32:Us,Rr=Math.log,ea=Math.LN2;function Us(t){return t>>>=0,t===0?32:31-(Rr(t)/ea|0)|0}var Ja=256,$a=262144,Jn=4194304;function kn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Gi(t,n,s){var r=t.pendingLanes;if(r===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var b=r&134217727;return b!==0?(r=b&~d,r!==0?u=kn(r):(x&=b,x!==0?u=kn(x):s||(s=b&~t,s!==0&&(u=kn(s))))):(b=r&~d,b!==0?u=kn(b):x!==0?u=kn(x):s||(s=r&~t,s!==0&&(u=kn(s)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,s=n&-n,d>=s||d===32&&(s&4194048)!==0)?n:u}function ta(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ii(t,n){(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var r=31-Qn(s),u=1<<r;n|=t[r],s&=~u}return n}function Os(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Da(){var t=Jn;return Jn<<=1,(Jn&62914560)===0&&(Jn=4194304),t}function Is(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function La(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Vi(t,n,s,r,u,d){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var b=t.entanglements,P=t.expirationTimes,Q=t.hiddenUpdates;for(s=x&~s;0<s;){var re=31-Qn(s),_e=1<<re;b[re]=0,P[re]=-1;var W=Q[re];if(W!==null)for(Q[re]=null,re=0;re<W.length;re++){var ne=W[re];ne!==null&&(ne.lane&=-536870913)}s&=~_e}r!==0&&Cr(t,r,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function Cr(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Qn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|s&261930}function C(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var r=31-Qn(s),u=1<<r;u&n|t[r]&n&&(t[r]|=n),s&=~u}}function K(t,n){var s=n&-n;return s=(s&42)!==0?1:oe(s),(s&(t.suspendedLanes|n))!==0?0:s}function oe(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function le(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $(){var t=Pe.p;return t!==0?t:(t=window.event,t===void 0?32:Ax(t.type))}function Ae(t,n){var s=Pe.p;try{return Pe.p=t,n()}finally{Pe.p=s}}var De=Math.random().toString(36).slice(2),we="__reactFiber$"+De,Ie="__reactProps$"+De,it="__reactContainer$"+De,dt="__reactEvents$"+De,tt="__reactListeners$"+De,It="__reactHandles$"+De,Vt="__reactResources$"+De,Kt="__reactMarker$"+De,qt="__reactLoad$"+De;function Dt(t){delete t[we],delete t[Ie],delete t[tt],delete t[It]}function et(t){var n;if(n=t[we])return n;for(var s=t.parentNode;s;){if(n=s[it]||s[we]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=rx(t);t!==null;){if(s=t[we])return s;t=rx(t)}return n}t=s,s=t.parentNode}return null}function hn(t){if(t=t[we]||t[it]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Lt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function vn(t){var n=t[Vt];return n||(n=t[Vt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(t){t[Kt]=!0}function Xn(t){t[qt]=void 0}var ma=new Set,en={};function Tn(t,n){wn(t,n),wn(t+"Capture",n)}function wn(t,n){for(en[t]=n,t=0;t<n.length;t++)ma.add(n[t])}var Rn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xn={},Ps={};function ga(t){return lt.call(Ps,t)?!0:lt.call(xn,t)?!1:Rn.test(t)?Ps[t]=!0:(xn[t]=!0,!1)}var zt=!1;function tu(){var t=zt;return zt=!1,t}function es(t,n,s){if(ga(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,s)}}function ts(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,s)}}function na(t,n,s,r){if(r===null)t.removeAttribute(s);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,r)}}function ai(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ns(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Gl(t,n,s){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,d=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function pn(t){if(!t._valueTracker){var n=ns(t)?"checked":"value";t._valueTracker=Gl(t,n,""+t[n])}}function Jt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),r="";return t&&(r=ns(t)?t.checked?"true":"false":t.value),t=r,t!==s?(n.setValue(t),!0):!1}var Nr=/[\n"\\]/g;function pi(t){return t.replace(Nr,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Li(t,n,s,r,u,d,x,b){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ai(n)):t.value!==""+ai(n)&&(t.value=""+ai(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?x==="number"&&t.value==n?Mo(t,ai(t.value)):Mo(t,ai(n)):s!=null?Mo(t,ai(s)):r!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+ai(b):t.removeAttribute("name")}function Vl(t,n,s,r,u,d,x,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){pn(t);return}s=s!=null?""+ai(s):"",n=n!=null?""+ai(n):s,b||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=b?t.checked:!!r,t.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),pn(t)}function Mo(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function is(t,n,s,r){if(t=t.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=n.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&r&&(t[s].defaultSelected=!0)}else{for(s=""+ai(s),n=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Dr(t,n,s){if(n!=null&&(n=""+ai(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+ai(s):""}function Lr(t,n,s,r){if(n==null){if(r!=null){if(s!=null)throw Error(a(92));if(Le(r)){if(1<r.length)throw Error(a(93));r=r[0]}s=r}s==null&&(s=""),n=s}s=ai(n),t.defaultValue=s,r=t.textContent,r===s&&r!==""&&r!==null&&(t.value=r),pn(t)}function zs(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var kl=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xl(t,n,s){var r=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,s):typeof s!="number"||s===0||kl.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function jl(t,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,s!=null){for(var r in s)!s.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",zt=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&s[u]!==r&&(Xl(t,u,r),zt=!0)}else for(var d in n)n.hasOwnProperty(d)&&Xl(t,d,n[d])}function Eo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bs=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ur(t){return Bs.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ee(){}var pe=null;function Ee(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var be=null,Ke=null;function ct(t){var n=hn(t);if(n&&(t=n.stateNode)){var s=t[Ie]||null;e:switch(t=n.stateNode,n.type){case"input":if(Li(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+pi(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var r=s[n];if(r!==t&&r.form===t.form){var u=r[Ie]||null;if(!u)throw Error(a(90));Li(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)r=s[n],r.form===t.form&&Jt(r)}break e;case"textarea":Dr(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&is(t,!!s.multiple,n,!1)}}}var nt=!1;function ht(t,n,s){if(nt)return t(n,s);nt=!0;try{var r=t(n);return r}finally{if(nt=!1,(be!==null||Ke!==null)&&($u(),be&&(n=be,t=Ke,Ke=be=null,ct(n),t)))for(n=0;n<t.length;n++)ct(t[n])}}function Mt(t,n){var s=t.stateNode;if(s===null)return null;var r=s[Ie]||null;if(r===null)return null;s=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rt=!1;if(He)try{var vt={};Object.defineProperty(vt,"passive",{get:function(){rt=!0}}),window.addEventListener("test",vt,vt),window.removeEventListener("test",vt,vt)}catch{rt=!1}var gt=null,yn=null,In=null;function ki(){if(In)return In;var t,n=yn,s=n.length,r,u="value"in gt?gt.value:gt.textContent,d=u.length;for(t=0;t<s&&n[t]===u[t];t++);var x=s-t;for(r=1;r<=x&&n[s-r]===u[d-r];r++);return In=u.slice(t,1<r?1-r:void 0)}function jn(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function mi(){return!0}function _a(){return!1}function un(t){function n(s,r,u,d,x){this._reactName=s,this._targetInst=u,this.type=r,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(s=t[b],this[b]=s?s(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?mi:_a,this.isPropagationStopped=_a,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=mi)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=mi)},persist:function(){},isPersistent:mi}),n}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Or=un(xi),Fs=O({},xi,{view:0,detail:0}),iu=un(Fs),To,Ir,as,au=O({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==as&&(as&&t.type==="mousemove"?(To=t.screenX-as.screenX,Ir=t.screenY-as.screenY):Ir=To=0,as=t),To)},movementY:function(t){return"movementY"in t?t.movementY:Ir}}),Hg=un(au),pM=O({},au,{dataTransfer:0}),mM=un(pM),gM=O({},Fs,{relatedTarget:0}),md=un(gM),_M=O({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),vM=un(_M),xM=O({},xi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yM=un(xM),SM=O({},xi,{data:0}),Gg=un(SM),MM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bM(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=TM[t])?!!n[t]:!1}function gd(){return bM}var AM=O({},Fs,{key:function(t){if(t.key){var n=MM[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=jn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?EM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gd,charCode:function(t){return t.type==="keypress"?jn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wM=un(AM),RM=O({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vg=un(RM),CM=O({},xi,{submitter:0}),NM=un(CM),DM=O({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gd}),LM=un(DM),UM=O({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),OM=un(UM),IM=O({},au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PM=un(IM),zM=O({},xi,{newState:0,oldState:0,source:0}),BM=un(zM),FM=[9,13,27,32],_d=He&&"CompositionEvent"in window,ql=null;He&&"documentMode"in document&&(ql=document.documentMode);var HM=He&&"TextEvent"in window&&!ql,kg=He&&(!_d||ql&&8<ql&&11>=ql),Xg=" ",jg=!1;function qg(t,n){switch(t){case"keyup":return FM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bo=!1;function GM(t,n){switch(t){case"compositionend":return Wg(n);case"keypress":return n.which!==32?null:(jg=!0,Xg);case"textInput":return t=n.data,t===Xg&&jg?null:t;default:return null}}function VM(t,n){if(bo)return t==="compositionend"||!_d&&qg(t,n)?(t=ki(),In=yn=gt=null,bo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kg&&n.locale!=="ko"?null:n.data;default:return null}}var kM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yg(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!kM[t.type]:n==="textarea"}function Zg(t,n,s,r){be?Ke?Ke.push(r):Ke=[r]:be=r,n=rf(n,"onChange"),0<n.length&&(s=new Or("onChange","change",null,s,r),t.push({event:s,listeners:n}))}var Wl=null,Yl=null;function XM(t){Pv(t,0)}function su(t){var n=Lt(t);if(Jt(n))return t}function Kg(t,n){if(t==="change")return n}var Qg=!1;if(He){var vd;if(He){var xd="oninput"in document;if(!xd){var Jg=document.createElement("div");Jg.setAttribute("oninput","return;"),xd=typeof Jg.oninput=="function"}vd=xd}else vd=!1;Qg=vd&&(!document.documentMode||9<document.documentMode)}function $g(){Wl&&(Wl.detachEvent("onpropertychange",e0),Yl=Wl=null)}function e0(t){if(t.propertyName==="value"&&su(Yl)){var n=[];Zg(n,Yl,t,Ee(t)),ht(XM,n)}}function jM(t,n,s){t==="focusin"?($g(),Wl=n,Yl=s,Wl.attachEvent("onpropertychange",e0)):t==="focusout"&&$g()}function qM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return su(Yl)}function WM(t,n){if(t==="click")return su(n)}function YM(t,n){if(t==="input"||t==="change")return su(n)}function ZM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xi=typeof Object.is=="function"?Object.is:ZM;function Zl(t,n){if(Xi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),r=Object.keys(n);if(s.length!==r.length)return!1;for(r=0;r<s.length;r++){var u=s[r];if(!lt.call(n,u)||!Xi(t[u],n[u]))return!1}return!0}function yd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function t0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function n0(t,n){var s=t0(t);t=0;for(var r;s;){if(s.nodeType===3){if(r=t+s.textContent.length,t<=n&&r>=n)return{node:s,offset:n-t};t=r}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=t0(s)}}function i0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?i0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function a0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=yd(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=yd(t.document)}return n}function Sd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var KM=He&&"documentMode"in document&&11>=document.documentMode,Ao=null,Md=null,Kl=null,Ed=!1;function s0(t,n,s){var r=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ed||Ao==null||Ao!==yd(r)||(r=Ao,"selectionStart"in r&&Sd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kl&&Zl(Kl,r)||(Kl=r,r=rf(Md,"onSelect"),0<r.length&&(n=new Or("onSelect","select",null,n,s),t.push({event:n,listeners:r}),n.target=Ao)))}function Pr(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var wo={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionrun:Pr("Transition","TransitionRun"),transitionstart:Pr("Transition","TransitionStart"),transitioncancel:Pr("Transition","TransitionCancel"),transitionend:Pr("Transition","TransitionEnd")},Td={},r0={};He&&(r0=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);function zr(t){if(Td[t])return Td[t];if(!wo[t])return t;var n=wo[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in r0)return Td[t]=n[s];return t}var o0=zr("animationend"),l0=zr("animationiteration"),c0=zr("animationstart"),QM=zr("transitionrun"),JM=zr("transitionstart"),$M=zr("transitioncancel"),u0=zr("transitionend"),f0=new Map,bd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bd.push("scrollEnd");function va(t,n){f0.set(t,n),Tn(n,[t])}var eE=0;function ss(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ma.identifierPrefix;var s=eE++;return t="_"+t+"t_"+s.toString(32)+"_",n.autoName=t}function d0(t){if(t==null||typeof t=="string")return t;var n=null,s=Wo;if(s!==null)for(var r=0;r<s.length;r++){var u=t[s[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function rs(t,n){return t=d0(t),n=d0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var ru=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ia=[],Ro=0,Ad=0;function ou(){for(var t=Ro,n=Ad=Ro=0;n<t;){var s=ia[n];ia[n++]=null;var r=ia[n];ia[n++]=null;var u=ia[n];ia[n++]=null;var d=ia[n];if(ia[n++]=null,r!==null&&u!==null){var x=r.pending;x===null?u.next=u:(u.next=x.next,x.next=u),r.pending=u}d!==0&&h0(s,u,d)}}function lu(t,n,s,r){ia[Ro++]=t,ia[Ro++]=n,ia[Ro++]=s,ia[Ro++]=r,Ad|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function wd(t,n,s,r){return lu(t,n,s,r),cu(t)}function Br(t,n){return lu(t,null,null,n),cu(t)}function h0(t,n,s){t.lanes|=s;var r=t.alternate;r!==null&&(r.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,r=d.alternate,r!==null&&(r.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Qn(s),t=d.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=s|536870912),d):null}function cu(t){if(50<vc)throw vc=0,Ju=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Co={};function tE(t,n,s,r){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ui(t,n,s,r){return new tE(t,n,s,r)}function Rd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function os(t,n){var s=t.alternate;return s===null?(s=Ui(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&1206910976,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function p0(t,n){t.flags&=1206910978;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function uu(t,n,s,r,u,d){var x=0;if(r=t,typeof r=="function")Rd(r)&&(x=1);else if(typeof r=="string")x=CT(t,s,Rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(r){case je:return t=Ui(31,s,n,u),t.elementType=je,t.lanes=d,t;case G:return Fr(s.children,u,d,n);case se:x=8,u|=24;break;case ae:return t=Ui(12,s,n,u|2),t.elementType=ae,t.lanes=d,t;case ce:return t=Ui(13,s,n,u),t.elementType=ce,t.lanes=d,t;case Y:return t=Ui(19,s,n,u),t.elementType=Y,t.lanes=d,t;case ut:case D:return t=u|32,t=Ui(30,s,n,t),t.elementType=D,t.lanes=d,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case fe:x=10;break e;case ue:x=9;break e;case q:x=11;break e;case ye:x=14;break e;case Me:x=16,r=null;break e}x=29,s=Error(a(130,t===null?"null":typeof t,"")),r=null}return n=Ui(x,s,n,u),n.elementType=t,n.type=r,n.lanes=d,n}function Fr(t,n,s,r){return t=Ui(7,t,r,n),t.lanes=s,t}function Cd(t,n,s){return t=Ui(6,t,null,n),t.lanes=s,t}function m0(t){var n=Ui(18,null,null,0);return n.stateNode=t,n}function Nd(t,n,s){return n=Ui(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var g0=new WeakMap;function aa(t,n){if(typeof t=="object"&&t!==null){var s=g0.get(t);return s!==void 0?s:(n={value:t,source:n,stack:at(n)},g0.set(t,n),n)}return{value:t,source:n,stack:at(n)}}var No=[],Do=0,fu=null,Ql=0,sa=[],ra=0,Hs=null,Ua=1,Oa="";function ls(t,n){No[Do++]=Ql,No[Do++]=fu,fu=t,Ql=n}function _0(t,n,s){sa[ra++]=Ua,sa[ra++]=Oa,sa[ra++]=Hs,Hs=t;var r=Ua;t=Oa;var u=32-Qn(r)-1;r&=~(1<<u),s+=1;var d=32-Qn(n)+u;if(30<d){var x=u-u%5;d=(r&(1<<x)-1).toString(32),r>>=x,u-=x,Ua=1<<32-Qn(n)+u|s<<u|r,Oa=d+t}else Ua=1<<d|s<<u|r,Oa=t}function du(t){t.return!==null&&(ls(t,1),_0(t,1,0))}function Dd(t){for(;t===fu;)fu=No[--Do],No[Do]=null,Ql=No[--Do],No[Do]=null;for(;t===Hs;)Hs=sa[--ra],sa[ra]=null,Oa=sa[--ra],sa[ra]=null,Ua=sa[--ra],sa[ra]=null}function v0(t,n){sa[ra++]=Ua,sa[ra++]=Oa,sa[ra++]=Hs,Ua=n.id,Oa=n.overflow,Hs=t}var $n=null,gn=null,Ut=!1,Gs=null,oa=!1,Ld=Error(a(519));function Vs(t){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jl(aa(n,t)),Ld}function x0(t){var n=t.stateNode,s=t.type,r=t.memoizedProps;switch(n[we]=t,n[Ie]=r,s){case"dialog":Ft("cancel",n),Ft("close",n);break;case"iframe":case"object":case"embed":Ft("load",n);break;case"video":case"audio":for(s=0;s<yc.length;s++)Ft(yc[s],n);break;case"source":Ft("error",n);break;case"img":case"image":case"link":Ft("error",n),Ft("load",n);break;case"details":Ft("toggle",n);break;case"input":Ft("invalid",n),Vl(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ft("invalid",n);break;case"textarea":Ft("invalid",n),Lr(n,r.value,r.defaultValue,r.children)}s=r.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||r.suppressHydrationWarning===!0||Hv(n.textContent,s)?(r.popover!=null&&(Ft("beforetoggle",n),Ft("toggle",n)),r.onScroll!=null&&Ft("scroll",n),r.onScrollEnd!=null&&Ft("scrollend",n),r.onClick!=null&&(n.onclick=ee),n=!0):n=!1,n||Vs(t,!0)}function hu(t){for($n=t.return;$n;)switch($n.tag){case 5:case 31:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:$n=$n.return}}function Lo(t){if(t!==$n)return!1;if(!Ut)return hu(t),Ut=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||lp(t.type,t.memoizedProps)),s=!s),s&&gn&&Vs(t),hu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));gn=sx(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));gn=sx(t)}else n===27?(n=gn,ar(t.type)?(t=_p,_p=null,gn=t):gn=n):gn=$n?ca(t.stateNode.nextSibling):null;return!0}function Hr(){gn=$n=null,Ut=!1}function Ud(){var t=Gs;return t!==null&&(Pi===null?Pi=t:Pi.push.apply(Pi,t),Gs=null),t}function Jl(t){Gs===null?Gs=[t]:Gs.push(t)}var Od=_t(null),Gr=null,cs=null;function ks(t,n,s){Oe(Od,n._currentValue),n._currentValue=s}function us(t){t._currentValue=Od.current,Qe(Od)}function pu(t,n,s){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===s)break;t=t.return}}function Id(t,n,s,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var b=d;d=u;for(var P=0;P<n.length;P++)if(b.context===n[P]){d.lanes|=s,b=d.alternate,b!==null&&(b.lanes|=s),pu(d.return,s,t),r||(x=null);break e}d=b.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(a(341));x.lanes|=s,d=x.alternate,d!==null&&(d.lanes|=s),pu(x,s,t),x=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=s,x=u.alternate,x!==null&&(x.lanes|=s),pu(u.return,s,t),x=u.child,x=x!==null?x.sibling:null):x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Vr(t,n,s,r){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var b=u.type;Xi(u.pendingProps.value,x.value)||(t!==null?t.push(b):t=[b])}}else if(u===A.current){if(x=u.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(il):t=[il])}u=u.return}return t!==null&&Id(n,t,s,r),n.flags|=262144,t!==null}function mu(t){for(t=t.firstContext;t!==null;){if(!Xi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function kr(t){Gr=t,cs=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function si(t){return y0(Gr,t)}function gu(t,n){return Gr===null&&kr(t),y0(t,n)}function y0(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},cs===null){if(t===null)throw Error(a(308));cs=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else cs=cs.next=n;return s}var nE=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},iE=l.unstable_scheduleCallback,aE=l.unstable_NormalPriority,Pn={$$typeof:fe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pd(){return{controller:new nE,data:new Map,refCount:0}}function $l(t){t.refCount--,t.refCount===0&&iE(aE,function(){t.controller.abort()})}function S0(t,n){if((t.pendingLanes&4194048)!==0){var s=t.transitionTypes;for(s===null&&(s=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];s.indexOf(r)===-1&&s.push(r)}}}var ec=null;function sE(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var tc=null,zd=0,Xr=0,Uo=null;function rE(t,n){if(tc===null){var s=tc=[];zd=0,Xr=$h(),Uo={status:"pending",value:void 0,then:function(r){s.push(r)}}}return zd++,n.then(M0,M0),n}function M0(){if(--zd===0&&(ec=null,tc!==null)){Uo!==null&&(Uo.status="fulfilled");var t=tc;tc=null,Xr=0,Uo=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function oE(t,n){var s=[],r={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),r}var E0=Ue.S;Ue.S=function(t,n){if(mv=j(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&rE(t,n),ec!==null)for(var s=Qo;s!==null;)S0(s,ec),s=s.next;if(s=t.types,s!==null){for(var r=Qo;r!==null;)S0(r,s),r=r.next;if(Xr!==0){r=ec,r===null&&(r=ec=[]);for(var u=0;u<s.length;u++){var d=s[u];r.indexOf(d)===-1&&r.push(d)}}}E0!==null&&E0(t,n)};var jr=_t(null);function Bd(){var t=jr.current;return t!==null?t:mn.pooledCache}function _u(t,n){n===null?Oe(jr,jr.current):Oe(jr,n.pool)}function T0(){var t=Bd();return t===null?null:{parent:Pn._currentValue,pool:t}}var Oo=Error(a(460)),Fd=Error(a(474)),vu=Error(a(542)),xu={then:function(){}};function b0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function A0(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(ee,ee),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,R0(t),t===void 0&&!("reason"in n)?Error(a(600)):t;default:if(typeof n.status=="string")n.then(ee,ee);else{if(t=mn,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,R0(t),t}throw Wr=n,Oo}}function qr(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Wr=s,Oo):s}}var Wr=null;function w0(){if(Wr===null)throw Error(a(459));var t=Wr;return Wr=null,t}function R0(t){if(t===Oo||t===vu)throw Error(a(483))}var Io=null,nc=0;function yu(t){var n=nc;return nc+=1,Io===null&&(Io=[]),A0(Io,t,n)}function Xs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Su(t,n){throw n.$$typeof===B?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function C0(t){function n(Z,X){if(t){var te=Z.deletions;te===null?(Z.deletions=[X],Z.flags|=16):te.push(X)}}function s(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function r(Z){for(var X=new Map;Z!==null;)Z.key===null?X.set(Z.index,Z):X.set(Z.key,Z),Z=Z.sibling;return X}function u(Z,X){return Z=os(Z,X),Z.index=0,Z.sibling=null,Z}function d(Z,X,te){return Z.index=te,t?(te=Z.alternate,te!==null?(te=te.index,te<X?(Z.flags|=2,X):te):(Z.flags|=134217730,X)):(Z.flags|=1048576,X)}function x(Z){return t&&Z.alternate===null&&(Z.flags|=134217730),Z}function b(Z,X,te,ge){return X===null||X.tag!==6?(X=Cd(te,Z.mode,ge),X.return=Z,X):(X=u(X,te),X.return=Z,X)}function P(Z,X,te,ge){var Ze=te.type;return Ze===G?(Z=re(Z,X,te.props.children,ge,te.key),Xs(Z,te),Z):X!==null&&(X.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Me&&qr(Ze)===X.type)?(X=u(X,te.props),Xs(X,te),X.return=Z,X):(X=uu(te.type,te.key,te.props,null,Z.mode,ge),Xs(X,te),X.return=Z,X)}function Q(Z,X,te,ge){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=Nd(te,Z.mode,ge),X.return=Z,X):(X=u(X,te.children||[]),X.return=Z,X)}function re(Z,X,te,ge,Ze){return X===null||X.tag!==7?(X=Fr(te,Z.mode,ge,Ze),X.return=Z,X):(X=u(X,te),X.return=Z,X)}function _e(Z,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Cd(""+X,Z.mode,te),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case N:return te=uu(X.type,X.key,X.props,null,Z.mode,te),Xs(te,X),te.return=Z,te;case w:return X=Nd(X,Z.mode,te),X.return=Z,X;case Me:return X=qr(X),_e(Z,X,te)}if(Le(X)||me(X))return X=Fr(X,Z.mode,te,null),X.return=Z,X;if(typeof X.then=="function")return _e(Z,yu(X),te);if(X.$$typeof===fe)return _e(Z,gu(Z,X),te);Su(Z,X)}return null}function W(Z,X,te,ge){var Ze=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Ze!==null?null:b(Z,X,""+te,ge);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case N:return te.key===Ze?P(Z,X,te,ge):null;case w:return te.key===Ze?Q(Z,X,te,ge):null;case Me:return te=qr(te),W(Z,X,te,ge)}if(Le(te)||me(te))return Ze!==null?null:re(Z,X,te,ge,null);if(typeof te.then=="function")return W(Z,X,yu(te),ge);if(te.$$typeof===fe)return W(Z,X,gu(Z,te),ge);Su(Z,te)}return null}function ne(Z,X,te,ge,Ze){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Z=Z.get(te)||null,b(X,Z,""+ge,Ze);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case N:return Z=Z.get(ge.key===null?te:ge.key)||null,P(X,Z,ge,Ze);case w:return Z=Z.get(ge.key===null?te:ge.key)||null,Q(X,Z,ge,Ze);case Me:return ge=qr(ge),ne(Z,X,te,ge,Ze)}if(Le(ge)||me(ge))return Z=Z.get(te)||null,re(X,Z,ge,Ze,null);if(typeof ge.then=="function")return ne(Z,X,te,yu(ge),Ze);if(ge.$$typeof===fe)return ne(Z,X,te,gu(X,ge),Ze);Su(X,ge)}return null}function ze(Z,X,te,ge){for(var Ze=null,Xt=null,st=X,pt=X=0,Fn=null;st!==null&&pt<te.length;pt++){st.index>pt?(Fn=st,st=null):Fn=st.sibling;var Wt=W(Z,st,te[pt],ge);if(Wt===null){st===null&&(st=Fn);break}t&&st&&Wt.alternate===null&&n(Z,st),X=d(Wt,X,pt),Xt===null?Ze=Wt:Xt.sibling=Wt,Xt=Wt,st=Fn}if(pt===te.length)return s(Z,st),Ut&&ls(Z,pt),Ze;if(st===null){for(;pt<te.length;pt++)st=_e(Z,te[pt],ge),st!==null&&(X=d(st,X,pt),Xt===null?Ze=st:Xt.sibling=st,Xt=st);return Ut&&ls(Z,pt),Ze}for(st=r(st);pt<te.length;pt++)Fn=ne(st,Z,pt,te[pt],ge),Fn!==null&&(t&&(Wt=Fn.alternate,Wt!==null&&st.delete(Wt.key===null?pt:Wt.key)),X=d(Fn,X,pt),Xt===null?Ze=Fn:Xt.sibling=Fn,Xt=Fn);return t&&st.forEach(function(cr){return n(Z,cr)}),Ut&&ls(Z,pt),Ze}function Je(Z,X,te,ge){if(te==null)throw Error(a(151));for(var Ze=null,Xt=null,st=X,pt=X=0,Fn=null,Wt=te.next();st!==null&&!Wt.done;pt++,Wt=te.next()){st.index>pt?(Fn=st,st=null):Fn=st.sibling;var cr=W(Z,st,Wt.value,ge);if(cr===null){st===null&&(st=Fn);break}t&&st&&cr.alternate===null&&n(Z,st),X=d(cr,X,pt),Xt===null?Ze=cr:Xt.sibling=cr,Xt=cr,st=Fn}if(Wt.done)return s(Z,st),Ut&&ls(Z,pt),Ze;if(st===null){for(;!Wt.done;pt++,Wt=te.next())Wt=_e(Z,Wt.value,ge),Wt!==null&&(X=d(Wt,X,pt),Xt===null?Ze=Wt:Xt.sibling=Wt,Xt=Wt);return Ut&&ls(Z,pt),Ze}for(st=r(st);!Wt.done;pt++,Wt=te.next())Wt=ne(st,Z,pt,Wt.value,ge),Wt!==null&&(t&&(Fn=Wt.alternate,Fn!==null&&st.delete(Fn.key===null?pt:Fn.key)),X=d(Wt,X,pt),Xt===null?Ze=Wt:Xt.sibling=Wt,Xt=Wt);return t&&st.forEach(function(GT){return n(Z,GT)}),Ut&&ls(Z,pt),Ze}function Tt(Z,X,te,ge){if(typeof te=="object"&&te!==null&&te.type===G&&te.key===null&&te.props.ref===void 0&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case N:e:{for(var Ze=te.key;X!==null;){if(X.key===Ze){if(Ze=te.type,Ze===G){if(X.tag===7){s(Z,X.sibling),ge=u(X,te.props.children),Xs(ge,te),ge.return=Z,Z=ge;break e}}else if(X.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Me&&qr(Ze)===X.type){s(Z,X.sibling),ge=u(X,te.props),Xs(ge,te),ge.return=Z,Z=ge;break e}s(Z,X);break}else n(Z,X);X=X.sibling}te.type===G?(ge=Fr(te.props.children,Z.mode,ge,te.key),Xs(ge,te),ge.return=Z,Z=ge):(ge=uu(te.type,te.key,te.props,null,Z.mode,ge),Xs(ge,te),ge.return=Z,Z=ge)}return x(Z);case w:e:{for(Ze=te.key;X!==null;){if(X.key===Ze)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){s(Z,X.sibling),ge=u(X,te.children||[]),ge.return=Z,Z=ge;break e}else{s(Z,X);break}else n(Z,X);X=X.sibling}ge=Nd(te,Z.mode,ge),ge.return=Z,Z=ge}return x(Z);case Me:return te=qr(te),Tt(Z,X,te,ge)}if(Le(te))return ze(Z,X,te,ge);if(me(te)){if(Ze=me(te),typeof Ze!="function")throw Error(a(150));return te=Ze.call(te),Je(Z,X,te,ge)}if(typeof te.then=="function")return Tt(Z,X,yu(te),ge);if(te.$$typeof===fe)return Tt(Z,X,gu(Z,te),ge);Su(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(s(Z,X.sibling),ge=u(X,te),ge.return=Z,Z=ge):(s(Z,X),ge=Cd(te,Z.mode,ge),ge.return=Z,Z=ge),x(Z)):s(Z,X)}return function(Z,X,te,ge){try{nc=0;var Ze=Tt(Z,X,te,ge);return Io=null,Ze}catch(st){if(st===Oo||st===vu)throw st;var Xt=Ui(29,st,null,Z.mode);return Xt.lanes=ge,Xt.return=Z,Xt}finally{}}}var Yr=C0(!0),N0=C0(!1),js=!1;function Hd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gd(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function qs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ws(t,n,s){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,($t&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=cu(t),h0(t,null,s),n}return lu(t,r,n,s),cu(t)}function ic(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,s|=r,n.lanes=s,C(t,s)}}function Vd(t,n){var s=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,s===r)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,s=s.next}while(s!==null);d===null?u=d=n:d=d.next=n}else u=d=n;s={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:r.shared,callbacks:r.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var kd=!1;function ac(){if(kd){var t=Uo;if(t!==null)throw t}}function sc(t,n,s,r){kd=!1;var u=t.updateQueue;js=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var P=b,Q=P.next;P.next=null,x===null?d=Q:x.next=Q,x=P;var re=t.alternate;re!==null&&(re=re.updateQueue,b=re.lastBaseUpdate,b!==x&&(b===null?re.firstBaseUpdate=Q:b.next=Q,re.lastBaseUpdate=P))}if(d!==null){var _e=u.baseState;x=0,re=Q=P=null,b=d;do{var W=b.lane&-536870913,ne=W!==b.lane;if(ne?(kt&W)===W:(r&W)===W){W!==0&&W===Xr&&(kd=!0),re!==null&&(re=re.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ze=t,Je=b;W=n;var Tt=s;switch(Je.tag){case 1:if(ze=Je.payload,typeof ze=="function"){_e=ze.call(Tt,_e,W);break e}_e=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Je.payload,W=typeof ze=="function"?ze.call(Tt,_e,W):ze,W==null)break e;_e=O({},_e,W);break e;case 2:js=!0}}W=b.callback,W!==null&&(t.flags|=64,ne&&(t.flags|=8192),ne=u.callbacks,ne===null?u.callbacks=[W]:ne.push(W))}else ne={lane:W,tag:b.tag,payload:b.payload,callback:b.callback,next:null},re===null?(Q=re=ne,P=_e):re=re.next=ne,x|=W;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ne=b,b=ne.next,ne.next=null,u.lastBaseUpdate=ne,u.shared.pending=null}}while(!0);re===null&&(P=_e),u.baseState=P,u.firstBaseUpdate=Q,u.lastBaseUpdate=re,d===null&&(u.shared.lanes=0),er|=x,t.lanes=x,t.memoizedState=_e}}function D0(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function L0(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)D0(s[t],n)}var Ys=_t(null),Mu=_t(0);function U0(t,n){t=ms,Oe(Mu,t),Oe(Ys,n),ms=t|n.baseLanes}function Xd(){Oe(Mu,ms),Oe(Ys,Ys.current)}function jd(){ms=Mu.current,Qe(Ys),Qe(Mu)}var ri=_t(null),gi=null;function Zs(t){var n=t.alternate;Oe(oi,oi.current&1),Oe(ri,t),gi===null&&(n===null||Ys.current!==null||n.memoizedState!==null)&&(gi=t)}function qd(t){Oe(oi,oi.current),Oe(ri,t),gi===null&&(gi=t)}function O0(t){t.tag===22?(Oe(oi,oi.current),Oe(ri,t),gi===null&&(gi=t)):Ks()}function Ks(){Oe(oi,oi.current),Oe(ri,ri.current)}function ji(t){Qe(ri),gi===t&&(gi=null),Qe(oi)}var oi=_t(0);function rc(t,n){Oe(ri,ri.current),Oe(oi,n)}function Wd(t){Qe(oi),Qe(ri),gi===t&&(gi=null)}function Eu(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||mp(s)||gp(s)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fs=0,Et=null,fn=null,zn=null,Tu=!1,Po=!1,Zr=!1,bu=0,oc=0,zo=null,lE=0;function Cn(){throw Error(a(321))}function Yd(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!Xi(t[s],n[s]))return!1;return!0}function Zd(t,n,s,r,u,d){return fs=d,Et=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ue.H=t===null||t.memoizedState===null?__:v_,Zr=!1,d=s(r,u),Zr=!1,Po&&(d=P0(n,s,r,u)),I0(t),d}function I0(t){Ue.H=Lu;var n=fn!==null&&fn.next!==null;if(fs=0,zn=fn=Et=null,Tu=!1,oc=0,zo=null,n)throw Error(a(300));t===null||Bn||(t=t.dependencies,t!==null&&mu(t)&&(Bn=!0))}function P0(t,n,s,r){Et=t;var u=0;do{if(Po&&(zo=null),oc=0,Po=!1,25<=u)throw Error(a(301));if(u+=1,zn=fn=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Ue.H=gE,d=n(s,r)}while(Po);return d}function cE(){var t=Ue.H,n=t.useState()[0];return n=typeof n.then=="function"?lc(n):n,t=t.useState()[0],(fn!==null?fn.memoizedState:null)!==t&&(Et.flags|=1024),n}function Kd(){var t=bu!==0;return bu=0,t}function Qd(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Jd(t){if(Tu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tu=!1}fs=0,zn=fn=Et=null,Po=!1,oc=bu=0,zo=null}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zn===null?Et.memoizedState=zn=t:zn=zn.next=t,zn}function Un(){if(fn===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=fn.next;var n=zn===null?Et.memoizedState:zn.next;if(n!==null)zn=n,fn=t;else{if(t===null)throw Et.alternate===null?Error(a(467)):Error(a(310));fn=t,t={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},zn===null?Et.memoizedState=zn=t:zn=zn.next=t}return zn}function Au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lc(t){var n=oc;return oc+=1,zo===null&&(zo=[]),t=A0(zo,t,n),n=Et,(zn===null?n.memoizedState:zn.next)===null&&(n=n.alternate,Ue.H=n===null||n.memoizedState===null?__:v_),t}function wu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return lc(t);if(t.$$typeof===J)return;if(t.$$typeof===fe)return si(t)}throw Error(a(438,String(t)))}function $d(t){var n=null,s=Et.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var r=Et.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Au(),Et.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),r=0;r<t;r++)s[r]=Nt;return n.index++,s}function ds(t,n){return typeof n=="function"?n(t):n}function Ru(t){var n=Un();return eh(n,fn,t)}function eh(t,n,s){var r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=s;var u=t.baseQueue,d=r.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,r.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var b=x=null,P=null,Q=n,re=!1;do{var _e=Q.lane&-536870913;if(_e!==Q.lane?(kt&_e)===_e:(fs&_e)===_e){var W=Q.revertLane;if(W===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),_e===Xr&&(re=!0);else if((fs&W)===W){Q=Q.next,W===Xr&&(re=!0);continue}else _e={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(b=P=_e,x=d):P=P.next=_e,Et.lanes|=W,er|=W;_e=Q.action,Zr&&s(d,_e),d=Q.hasEagerState?Q.eagerState:s(d,_e)}else W={lane:_e,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(b=P=W,x=d):P=P.next=W,Et.lanes|=_e,er|=_e;Q=Q.next}while(Q!==null&&Q!==n);if(P===null?x=d:P.next=b,!Xi(d,t.memoizedState)&&(Bn=!0,re&&(s=Uo,s!==null)))throw s;t.memoizedState=d,t.baseState=x,t.baseQueue=P,r.lastRenderedState=d}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function th(t){var n=Un(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var r=s.dispatch,u=s.pending,d=n.memoizedState;if(u!==null){s.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);Xi(d,n.memoizedState)||(Bn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,r]}function z0(t,n,s){var r=Et,u=Un(),d=Ut;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=n();var x=!Xi((fn||u).memoizedState,s);if(x&&(u.memoizedState=s,Bn=!0),u=u.queue,ah(H0.bind(null,r,u,t),[t]),t=u.getSnapshot!==n||x||zn!==null&&(zn.memoizedState.tag&1)!==0,Bo(t?9:8,{destroy:void 0},F0.bind(null,r,u,s,n),null),t){if(r.flags|=2048,mn===null)throw Error(a(349));d||(fs&127)!==0||B0(r,n,s)}return s}function B0(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=Et.updateQueue,n===null?(n=Au(),Et.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function F0(t,n,s,r){n.value=s,n.getSnapshot=r,G0(n)&&V0(t)}function H0(t,n,s){return s(function(){G0(n)&&V0(t)})}function G0(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!Xi(t,s)}catch{return!0}}function V0(t){var n=Br(t,2);n!==null&&zi(n,t,2)}function nh(t){var n=yi();if(typeof t=="function"){var s=t;if(t=s(),Zr){Ln(!0);try{s()}finally{Ln(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:t},n}function k0(t,n,s,r){return t.baseState=s,eh(t,fn,typeof r=="function"?r:ds)}function uE(t,n,s,r,u){if(Du(t))throw Error(a(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};Ue.T!==null?s(!0):d.isTransition=!1,r(d),s=n.pending,s===null?(d.next=n.pending=d,X0(n,d)):(d.next=s.next,n.pending=s.next=d)}}function X0(t,n){var s=n.action,r=n.payload,u=t.state;if(n.isTransition){var d=Ue.T,x={};x.types=d!==null?d.types:null,Ue.T=x;try{var b=s(u,r),P=Ue.S;P!==null&&P(x,b),j0(t,n,b)}catch(Q){ih(t,n,Q)}finally{d!==null&&x.types!==null&&(d.types=x.types),Ue.T=d}}else try{d=s(u,r),j0(t,n,d)}catch(Q){ih(t,n,Q)}}function j0(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(r){q0(t,n,r)},function(r){return ih(t,n,r)}):q0(t,n,s)}function q0(t,n,s){n.status="fulfilled",n.value=s,W0(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,X0(t,s)))}function ih(t,n,s){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=s,W0(n),n=n.next;while(n!==r)}t.action=null}function W0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Y0(t,n){return n}function Z0(t,n){if(Ut){var s=mn.formState;if(s!==null){e:{var r=Et;if(Ut){if(gn){t:{for(var u=gn,d=oa;u.nodeType!==8;){if(!d){u=null;break t}if(u=ca(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){gn=ca(u.nextSibling),r=u.data==="F!";break e}}Vs(r)}r=!1}r&&(n=s[0])}}return s=yi(),s.memoizedState=s.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y0,lastRenderedState:n},s.queue=r,s=p_.bind(null,Et,r),r.dispatch=s,r=nh(!1),d=ch.bind(null,Et,!1,r.queue),r=yi(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,s=uE.bind(null,Et,u,d,s),u.dispatch=s,r.memoizedState=t,[n,s,!1]}function K0(t){var n=Un();return Q0(n,fn,t)}function Q0(t,n,s){if(n=eh(t,n,Y0)[0],t=Ru(ds)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=lc(n)}catch(x){throw x===Oo?vu:x}else r=n;n=Un();var u=n.queue,d=u.dispatch;return s!==n.memoizedState&&(Et.flags|=2048,Bo(9,{destroy:void 0},fE.bind(null,u,s),null)),[r,d,t]}function fE(t,n){t.action=n}function J0(t){var n=Un(),s=fn;if(s!==null)return Q0(n,s,t);Un(),n=n.memoizedState,s=Un();var r=s.queue.dispatch;return s.memoizedState=t,[n,r,!1]}function Bo(t,n,s,r){return t={tag:t,create:s,deps:r,inst:n,next:null},n=Et.updateQueue,n===null&&(n=Au(),Et.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(r=s.next,s.next=t,t.next=r,n.lastEffect=t),t}function $0(){return Un().memoizedState}function Cu(t,n,s,r){var u=yi();Et.flags|=t,u.memoizedState=Bo(1|n,{destroy:void 0},s,r===void 0?null:r)}function Nu(t,n,s,r){var u=Un();r=r===void 0?null:r;var d=u.memoizedState.inst;fn!==null&&r!==null&&Yd(r,fn.memoizedState.deps)?u.memoizedState=Bo(n,d,s,r):(Et.flags|=t,u.memoizedState=Bo(1|n,d,s,r))}function e_(t,n){Cu(8390656,8,t,n)}function ah(t,n){Nu(2048,8,t,n)}function dE(t){Et.flags|=4;var n=Et.updateQueue;if(n===null)n=Au(),Et.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function t_(t){var n=Un().memoizedState;return dE({ref:n,nextImpl:t}),function(){if(($t&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function n_(t,n){return Nu(4,2,t,n)}function i_(t,n){return Nu(4,4,t,n)}function a_(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function s_(t,n,s){s=s!=null?s.concat([t]):null,Nu(4,4,a_.bind(null,n,t),s)}function sh(){}function r_(t,n){var s=Un();n=n===void 0?null:n;var r=s.memoizedState;return n!==null&&Yd(n,r[1])?r[0]:(s.memoizedState=[t,n],t)}function o_(t,n){var s=Un();n=n===void 0?null:n;var r=s.memoizedState;if(n!==null&&Yd(n,r[1]))return r[0];if(r=t(),Zr){Ln(!0);try{t()}finally{Ln(!1)}}return s.memoizedState=[r,n],r}function rh(t,n,s){return s===void 0||(fs&1073741824)!==0&&(kt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=_v(),Et.lanes|=t,er|=t,s)}function l_(t,n,s,r){return Xi(s,n)?s:Ys.current!==null?(t=rh(t,s,r),Xi(t,n)||(Bn=!0),t):(fs&106)===0||(fs&1073741824)!==0&&(kt&261930)===0?(Bn=!0,t.memoizedState=s):(t=_v(),Et.lanes|=t,er|=t,n)}function c_(t,n,s,r,u){var d=Pe.p;Pe.p=d!==0&&8>d?d:8;var x=Ue.T,b={};b.types=x!==null?x.types:null,Ue.T=b,ch(t,!1,n,s);try{var P=u(),Q=Ue.S;if(Q!==null&&Q(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var re=oE(P,r);cc(t,n,re,Zi(t))}else cc(t,n,r,Zi(t))}catch(_e){cc(t,n,{then:function(){},status:"rejected",reason:_e},Zi())}finally{Pe.p=d,x!==null&&b.types!==null&&(x.types=b.types),Ue.T=x}}function hE(){}function oh(t,n,s,r){if(t.tag!==5)throw Error(a(476));var u=u_(t).queue;c_(t,u,n,ft,s===null?hE:function(){return f_(t),s(r)})}function u_(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:ft},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function f_(t){var n=u_(t);n.next===null&&(n=t.alternate.memoizedState),cc(t,n.next.queue,{},Zi())}function lh(){return si(il)}function d_(){return Un().memoizedState}function h_(){return Un().memoizedState}function pE(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=Zi();t=qs(s);var r=Ws(n,t,s);r!==null&&(zi(r,n,s),ic(r,n,s)),n={cache:Pd()},t.payload=n;return}n=n.return}}function mE(t,n,s){var r=Zi();s={lane:r,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Du(t)?m_(n,s):(s=wd(t,n,s,r),s!==null&&(zi(s,t,r),g_(s,n,r)))}function p_(t,n,s){var r=Zi();cc(t,n,s,r)}function cc(t,n,s,r){var u={lane:r,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Du(t))m_(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,b=d(x,s);if(u.hasEagerState=!0,u.eagerState=b,Xi(b,x))return lu(t,n,u,0),mn===null&&ou(),!1}catch{}finally{}if(s=wd(t,n,u,r),s!==null)return zi(s,t,r),g_(s,n,r),!0}return!1}function ch(t,n,s,r){if(r={lane:2,revertLane:$h(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Du(t)){if(n)throw Error(a(479))}else n=wd(t,s,r,2),n!==null&&zi(n,t,2)}function Du(t){var n=t.alternate;return t===Et||n!==null&&n===Et}function m_(t,n){Po=Tu=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function g_(t,n,s){if((s&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,s|=r,n.lanes=s,C(t,s)}}var Lu={readContext:si,use:wu,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useLayoutEffect:Cn,useInsertionEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useSyncExternalStore:Cn,useId:Cn,useHostTransitionStatus:Cn,useFormState:Cn,useActionState:Cn,useOptimistic:Cn,useMemoCache:Cn,useCacheRefresh:Cn,useEffectEvent:Cn},__={readContext:si,use:wu,useCallback:function(t,n){return yi().memoizedState=[t,n===void 0?null:n],t},useContext:si,useEffect:e_,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,Cu(4194308,4,a_.bind(null,n,t),s)},useLayoutEffect:function(t,n){return Cu(4194308,4,t,n)},useInsertionEffect:function(t,n){Cu(4,2,t,n)},useMemo:function(t,n){var s=yi();n=n===void 0?null:n;var r=t();if(Zr){Ln(!0);try{t()}finally{Ln(!1)}}return s.memoizedState=[r,n],r},useReducer:function(t,n,s){var r=yi();if(s!==void 0){var u=s(n);if(Zr){Ln(!0);try{s(n)}finally{Ln(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=mE.bind(null,Et,t),[r.memoizedState,t]},useRef:function(t){var n=yi();return t={current:t},n.memoizedState=t},useState:function(t){t=nh(t);var n=t.queue,s=p_.bind(null,Et,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:sh,useDeferredValue:function(t,n){var s=yi();return rh(s,t,n)},useTransition:function(){var t=nh(!1);return t=c_.bind(null,Et,t.queue,!0,!1),yi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var r=Et,u=yi();if(Ut){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),mn===null)throw Error(a(349));(kt&127)!==0||B0(r,n,s)}u.memoizedState=s;var d={value:s,getSnapshot:n};return u.queue=d,e_(H0.bind(null,r,d,t),[t]),r.flags|=2048,Bo(9,{destroy:void 0},F0.bind(null,r,d,s,n),null),s},useId:function(){var t=yi(),n=mn.identifierPrefix;if(Ut){var s=Oa,r=Ua;s=(r&~(1<<32-Qn(r)-1)).toString(32)+s,n="_"+n+"R_"+s,s=bu++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=lE++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:lh,useFormState:Z0,useActionState:Z0,useOptimistic:function(t){var n=yi();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=ch.bind(null,Et,!0,s),s.dispatch=n,[t,n]},useMemoCache:$d,useCacheRefresh:function(){return yi().memoizedState=pE.bind(null,Et)},useEffectEvent:function(t){var n=yi(),s={impl:t};return n.memoizedState=s,function(){if(($t&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},v_={readContext:si,use:wu,useCallback:r_,useContext:si,useEffect:ah,useImperativeHandle:s_,useInsertionEffect:n_,useLayoutEffect:i_,useMemo:o_,useReducer:Ru,useRef:$0,useState:function(){return Ru(ds)},useDebugValue:sh,useDeferredValue:function(t,n){var s=Un();return l_(s,fn.memoizedState,t,n)},useTransition:function(){var t=Ru(ds)[0],n=Un().memoizedState;return[typeof t=="boolean"?t:lc(t),n]},useSyncExternalStore:z0,useId:d_,useHostTransitionStatus:lh,useFormState:K0,useActionState:K0,useOptimistic:function(t,n){var s=Un();return k0(s,fn,t,n)},useMemoCache:$d,useCacheRefresh:h_,useEffectEvent:t_},gE={readContext:si,use:wu,useCallback:r_,useContext:si,useEffect:ah,useImperativeHandle:s_,useInsertionEffect:n_,useLayoutEffect:i_,useMemo:o_,useReducer:th,useRef:$0,useState:function(){return th(ds)},useDebugValue:sh,useDeferredValue:function(t,n){var s=Un();return fn===null?rh(s,t,n):l_(s,fn.memoizedState,t,n)},useTransition:function(){var t=th(ds)[0],n=Un().memoizedState;return[typeof t=="boolean"?t:lc(t),n]},useSyncExternalStore:z0,useId:d_,useHostTransitionStatus:lh,useFormState:J0,useActionState:J0,useOptimistic:function(t,n){var s=Un();return fn!==null?k0(s,fn,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:$d,useCacheRefresh:h_,useEffectEvent:t_};function uh(t,n,s,r){n=t.memoizedState,s=s(r,n),s=s==null?n:O({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var fh={enqueueSetState:function(t,n,s){t=t._reactInternals;var r=Zi(),u=qs(r);u.payload=n,s!=null&&(u.callback=s),n=Ws(t,u,r),n!==null&&(zi(n,t,r),ic(n,t,r))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var r=Zi(),u=qs(r);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=Ws(t,u,r),n!==null&&(zi(n,t,r),ic(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=Zi(),r=qs(s);r.tag=2,n!=null&&(r.callback=n),n=Ws(t,r,s),n!==null&&(zi(n,t,s),ic(n,t,s))}};function x_(t,n,s,r,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,d,x):n.prototype&&n.prototype.isPureReactComponent?!Zl(s,r)||!Zl(u,d):!0}function y_(t,n,s,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,r),n.state!==t&&fh.enqueueReplaceState(n,n.state,null)}function Kr(t,n){var s=n;if("ref"in n){s={};for(var r in n)r!=="ref"&&(s[r]=n[r])}if(t=t.defaultProps){s===n&&(s=O({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function S_(t){ru(t)}function M_(t){console.error(t)}function E_(t){ru(t)}function Uu(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function T_(t,n,s){try{var r=t.onCaughtError;r(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function dh(t,n,s){return s=qs(s),s.tag=3,s.payload={element:null},s.callback=function(){Uu(t,n)},s}function b_(t){return t=qs(t),t.tag=3,t}function A_(t,n,s,r){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=r.value;t.payload=function(){return u(d)},t.callback=function(){T_(n,s,r)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){T_(n,s,r),typeof u!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function _E(t,n,s,r,u){if(s.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=s.alternate,n!==null&&Vr(n,s,u,!0),s=ri.current,s!==null){switch(s.tag){case 31:case 13:case 19:return gi===null?ef():s.alternate===null&&Nn===0&&(Nn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,r===xu?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([r]):n.add(r),Kh(t,r,u)),!1;case 22:return s.flags|=65536,r===xu?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([r]):s.add(r)),Kh(t,r,u)),!1}throw Error(a(435,s.tag))}return Kh(t,r,u),ef(),!1}if(Ut)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Ld&&(t=Error(a(422),{cause:r}),Jl(aa(t,s)))):(r!==Ld&&(n=Error(a(423),{cause:r}),Jl(aa(n,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=aa(r,s),u=dh(t.stateNode,r,u),Vd(t,u),Nn!==4&&(Nn=2)),!1;var d=Error(a(520),{cause:r});if(d=aa(d,s),_c===null?_c=[d]:_c.push(d),Nn!==4&&(Nn=2),n===null)return!0;r=aa(r,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=dh(s.stateNode,r,t),Vd(s,t),!1;case 1:if(n=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(tr===null||!tr.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=b_(u),A_(u,t,s,r),Vd(s,u),!1;break;case 22:if(s.memoizedState!==null)return s.flags|=65536,!1}s=s.return}while(s!==null);return!1}var hh=Error(a(461)),Bn=!1;function qn(t,n,s,r){n.child=t===null?N0(n,null,s,r):Yr(n,t.child,s,r)}function w_(t,n,s,r,u){s=s.render;var d=n.ref;if("ref"in r){var x={};for(var b in r)b!=="ref"&&(x[b]=r[b])}else x=r;return kr(n),r=Zd(t,n,s,x,d,u),b=Kd(),t!==null&&!Bn?(Qd(t,n,u),hs(t,n,u)):(Ut&&b&&du(n),n.flags|=1,qn(t,n,r,u),n.child)}function R_(t,n,s,r,u){if(t===null){var d=s.type;return typeof d=="function"&&!Rd(d)&&d.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=d,C_(t,n,d,r,u)):(t=uu(s.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Sh(t,u)){var x=d.memoizedProps;if(s=s.compare,s=s!==null?s:Zl,s(x,r)&&t.ref===n.ref)return hs(t,n,u)}return n.flags|=1,t=os(d,r),t.ref=n.ref,t.return=n,n.child=t}function C_(t,n,s,r,u){if(t!==null){var d=t.memoizedProps;if(Zl(d,r)&&t.ref===n.ref)if(Bn=!1,n.pendingProps=r=d,Sh(t,u))(t.flags&131072)!==0&&(Bn=!0);else return n.lanes=t.lanes,hs(t,n,u)}return ph(t,n,s,r,u)}function N_(t,n,s,r){var u=r.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~d}else r=0,n.child=null;return D_(t,n,d,s,r)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&_u(n,d!==null?d.cachePool:null),d!==null?U0(n,d):Xd(),O0(n);else return r=n.lanes=536870912,D_(t,n,d!==null?d.baseLanes|s:s,s,r)}else d!==null?(_u(n,d.cachePool),U0(n,d),Ks(),n.memoizedState=null):(t!==null&&_u(n,null),Xd(),Ks());return qn(t,n,u,s),n.child}function uc(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function D_(t,n,s,r,u){var d=Bd();return d=d===null?null:{parent:Pn._currentValue,pool:d},n.memoizedState={baseLanes:s,cachePool:d},t!==null&&_u(n,null),Xd(),O0(n),t!==null&&Vr(t,n,r,!0),n.childLanes=u,null}function Ou(t,n){return n=Iu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function L_(t,n,s){return Yr(n,t.child,null,s),t=Ou(n,n.pendingProps),t.flags|=2,ji(n),n.memoizedState=null,t}function vE(t,n,s){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ut){if(r.mode==="hidden")return t=Ou(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},uc(null,t);if(qd(n),(t=gn)?(t=ax(t,oa),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Hs!==null?{id:Ua,overflow:Oa}:null,retryLane:536870912,hydrationErrors:null},s=m0(t),s.return=n,n.child=s,$n=n,gn=null)):t=null,t===null)throw Vs(n);return n.lanes=536870912,null}return Ou(n,r)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(qd(n),u)if(n.flags&256)n.flags&=-257,n=L_(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(a(558));else if(Bn||Vr(t,n,s,!1),u=(s&t.childLanes)!==0,Bn||u){if(Ys.current===null){if(r=mn,r!==null&&(x=K(r,s),x!==0&&x!==d.retryLane))throw d.retryLane=x,Br(t,x),zi(r,t,x),hh;ef()}n=L_(t,n,s)}else t=d.treeContext,gn=ca(x.nextSibling),$n=n,Ut=!0,Gs=null,oa=!1,t!==null&&v0(n,t),n=Ou(n,r),n.flags|=134221824;return n}return t=os(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Fo(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function ph(t,n,s,r,u){return kr(n),s=Zd(t,n,s,r,void 0,u),r=Kd(),t!==null&&!Bn?(Qd(t,n,u),hs(t,n,u)):(Ut&&r&&du(n),n.flags|=1,qn(t,n,s,u),n.child)}function U_(t,n,s,r,u,d){return kr(n),n.updateQueue=null,s=P0(n,r,s,u),I0(t),r=Kd(),t!==null&&!Bn?(Qd(t,n,d),hs(t,n,d)):(Ut&&r&&du(n),n.flags|=1,qn(t,n,s,d),n.child)}function O_(t,n,s,r,u){if(kr(n),n.stateNode===null){var d=Co,x=s.contextType;typeof x=="object"&&x!==null&&(d=si(x)),d=new s(r,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=fh,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=r,d.state=n.memoizedState,d.refs={},Hd(n),x=s.contextType,d.context=typeof x=="object"&&x!==null?si(x):Co,d.state=n.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(uh(n,s,x,r),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&fh.enqueueReplaceState(d,d.state,null),sc(n,r,d,u),ac(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){d=n.stateNode;var b=n.memoizedProps,P=Kr(s,b);d.props=P;var Q=d.context,re=s.contextType;x=Co,typeof re=="object"&&re!==null&&(x=si(re));var _e=s.getDerivedStateFromProps;re=typeof _e=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,re||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||Q!==x)&&y_(n,d,r,x),js=!1;var W=n.memoizedState;d.state=W,sc(n,r,d,u),ac(),Q=n.memoizedState,b||W!==Q||js?(typeof _e=="function"&&(uh(n,s,_e,r),Q=n.memoizedState),(P=js||x_(n,s,P,r,W,Q,x))?(re||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),d.props=r,d.state=Q,d.context=x,r=P):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{d=n.stateNode,Gd(t,n),x=n.memoizedProps,re=Kr(s,x),d.props=re,_e=n.pendingProps,W=d.context,Q=s.contextType,P=Co,typeof Q=="object"&&Q!==null&&(P=si(Q)),b=s.getDerivedStateFromProps,(Q=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==_e||W!==P)&&y_(n,d,r,P),js=!1,W=n.memoizedState,d.state=W,sc(n,r,d,u),ac();var ne=n.memoizedState;x!==_e||W!==ne||js||t!==null&&t.dependencies!==null&&mu(t.dependencies)?(typeof b=="function"&&(uh(n,s,b,r),ne=n.memoizedState),(re=js||x_(n,s,re,r,W,ne,P)||t!==null&&t.dependencies!==null&&mu(t.dependencies))?(Q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,ne,P),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,ne,P)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ne),d.props=r,d.state=ne,d.context=P,r=re):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),r=!1)}return d=r,Fo(t,n),r=(n.flags&128)!==0,d||r?(d=n.stateNode,s=r&&typeof s.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&r?(n.child=Yr(n,t.child,null,u),n.child=Yr(n,null,s,u)):qn(t,n,s,u),n.memoizedState=d.state,t=n.child):t=hs(t,n,u),t}function I_(t,n,s,r){return Hr(),n.flags|=256,qn(t,n,s,r),n.child}var mh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gh(t){return{baseLanes:t,cachePool:T0()}}function _h(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=Yi),t}function P_(t,n,s){var r=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(oi.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ut){if(u?Zs(n):Ks(),(t=gn)?(t=ax(t,oa),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Hs!==null?{id:Ua,overflow:Oa}:null,retryLane:536870912,hydrationErrors:null},s=m0(t),s.return=n,n.child=s,$n=n,gn=null)):t=null,t===null)throw Vs(n);return gp(t)?n.lanes=32:n.lanes=536870912,null}return d=r.children,r=r.fallback,u?(Ks(),u=n.mode,d=Iu({mode:"hidden",children:d},u),r=Fr(r,u,s,null),d.return=n,r.return=n,d.sibling=r,n.child=d,r=n.child,r.memoizedState=gh(s),r.childLanes=_h(t,x,s),n.memoizedState=mh,uc(null,r)):(Zs(n),vh(n,d))}var b=t.memoizedState;if(b!==null){var P=b.dehydrated;if(P!==null)return xE(t,n,d,x,r,P,b,s)}return u?(Ks(),u=r.fallback,d=n.mode,b=t.child,P=b.sibling,r=os(b,{mode:"hidden",children:r.children}),r.subtreeFlags=b.subtreeFlags&1206910976,P!==null?u=os(P,u):(u=Fr(u,d,s,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,uc(null,r),r=n.child,u=t.child.memoizedState,u===null?u=gh(s):(d=u.cachePool,d!==null?(b=Pn._currentValue,d=d.parent!==b?{parent:b,pool:b}:d):d=T0(),u={baseLanes:u.baseLanes|s,cachePool:d}),r.memoizedState=u,r.childLanes=_h(t,x,s),n.memoizedState=mh,uc(t.child,r)):(Zs(n),s=t.child,t=s.sibling,s=os(s,{mode:"visible",children:r.children}),s.return=n,s.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=s,n.memoizedState=null,s)}function vh(t,n){return n=Iu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Iu(t,n){return t=Ui(22,t,null,n),t.lanes=0,t}function Pu(t,n,s){return Yr(n,t.child,null,s),t=vh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function xE(t,n,s,r,u,d,x,b){if(s)return n.flags&256?(Zs(n),n.flags&=-257,Pu(t,n,b)):n.memoizedState!==null?(Ks(),n.child=t.child,n.flags|=128,null):(Ks(),d=u.fallback,x=n.mode,u=Iu({mode:"visible",children:u.children},x),d=Fr(d,x,b,null),d.flags|=2,u.return=n,d.return=n,u.sibling=d,n.child=u,Yr(n,t.child,null,b),u=n.child,u.memoizedState=gh(b),u.childLanes=_h(t,r,b),n.memoizedState=mh,uc(null,u));if(Zs(n),gp(d)){if(r=d.nextSibling&&d.nextSibling.dataset,r)var P=r.dgst;return r=P,r!==""&&(u=Error(a(419)),u.stack="",u.digest=r,Jl({value:u,source:null,stack:null})),Pu(t,n,b)}if(Bn||Vr(t,n,b,!1),r=(b&t.childLanes)!==0,Bn||r){if(Ys.current!==null)return Pu(t,n,b);if(r=mn,r!==null&&(u=K(r,b),u!==0&&u!==x.retryLane))throw x.retryLane=u,Br(t,u),zi(r,t,u),hh;return mp(d)||ef(),Pu(t,n,b)}return mp(d)?(n.flags|=192,n.child=t.child,null):(t=x.treeContext,gn=ca(d.nextSibling),$n=n,Ut=!0,Gs=null,oa=!1,t!==null&&v0(n,t),n=vh(n,u.children),n.flags|=134221824,n)}function z_(t,n,s){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),pu(t.return,n,s)}function B_(t){for(var n=null;t!==null;){var s=t.alternate;s!==null&&Eu(s)===null&&(n=t),t=t.sibling}return n}function zu(t,n,s,r,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:s,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=s,x.tailMode=u,x.treeForkCount=d)}function xh(t){var n=t.child;for(t.child=null;n!==null;){var s=n.sibling;n.sibling=t.child,t.child=n,n=s}}function yh(t,n,s){var r=n.pendingProps,u=r.revealOrder,d=r.tail;r=r.children;var x=oi.current;if(n.flags&128)return rc(n,x),null;var b=(x&2)!==0;if(b?(x=x&1|2,n.flags|=128):x&=1,rc(n,x),u==="backwards"&&t!==null?(xh(t),qn(t,n,r,s),xh(t)):qn(t,n,r,s),r=Ut?Ql:0,!b&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&z_(t,s,n);else if(t.tag===19)z_(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":s=B_(n.child),s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null,xh(n)),zu(n,!0,u,null,d,r);break;case"unstable_legacy-backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Eu(t)===null){n.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}zu(n,!0,s,null,d,r);break;case"together":zu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:s=B_(n.child),s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),zu(n,!1,u,s,d,r)}return n.child}function F_(t,n,s){var r=n.pendingProps;return ks(n,n.type,r.value),qn(t,n,r.children,s),n.child}function hs(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),er|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Vr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,s=os(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=os(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Sh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&mu(t)))}function yE(t,n,s){switch(n.tag){case 3:ie(n,n.stateNode.containerInfo),ks(n,Pn,t.memoizedState.cache),Hr();break;case 27:case 5:Te(n);break;case 4:ie(n,n.stateNode.containerInfo);break;case 10:ks(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qd(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Zs(n),n.flags|=128,null;r=Vr(t,n,s,!1);var u=n.child.childLanes;return r||(s&u)!==0?P_(t,n,s):(Zs(n),t=hs(t,n,s),t!==null?t.sibling:null)}Zs(n);break;case 19:if(n.flags&128)return yh(t,n,s);if(u=(t.flags&128)!==0,r=(s&n.childLanes)!==0,r||(Vr(t,n,s,!1),r=(s&n.childLanes)!==0),u){if(r)return yh(t,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),rc(n,oi.current),r)break;return null;case 22:return n.lanes=0,N_(t,n,s,n.pendingProps);case 24:ks(n,Pn,t.memoizedState.cache)}return hs(t,n,s)}function H_(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)Bn=!0;else{if(!Sh(t,s)&&(n.flags&128)===0)return Bn=!1,yE(t,n,s);Bn=(t.flags&131072)!==0}else Bn=!1,Ut&&(n.flags&1048576)!==0&&_0(n,Ql,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(t=qr(n.elementType),n.type=t,typeof t=="function")Rd(t)?(r=Kr(t,r),n.tag=1,n=O_(null,n,t,r,s)):(n.tag=0,n=ph(null,n,t,r,s));else{if(t!=null){var u=t.$$typeof;if(u===q){n.tag=11,n=w_(null,n,t,r,s);break e}else if(u===ye){n.tag=14,n=R_(null,n,t,r,s);break e}else if(u===fe){n.tag=10,n.type=t,n=F_(null,n,s);break e}}throw n=We(t)||t,Error(a(306,n,""))}}return n;case 0:return ph(t,n,n.type,n.pendingProps,s);case 1:return r=n.type,u=Kr(r,n.pendingProps),O_(t,n,r,u,s);case 3:e:{if(ie(n,n.stateNode.containerInfo),t===null)throw Error(a(387));r=n.pendingProps;var d=n.memoizedState;u=d.element,Gd(t,n),sc(n,r,null,s);var x=n.memoizedState;if(r=x.cache,ks(n,Pn,r),r!==d.cache&&Id(n,[Pn],s,!0),ac(),r=x.element,d.isDehydrated)if(d={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=I_(t,n,r,s);break e}else if(r!==u){u=aa(Error(a(424)),n),Jl(u),n=I_(t,n,r,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(gn=ca(t.firstChild),$n=n,Ut=!0,Gs=null,oa=!0,s=N0(n,null,r,s),n.child=s;s;)s.flags=s.flags&-3|134221824,s=s.sibling}else{if(Hr(),r===u){n=hs(t,n,s);break e}qn(t,n,r,s)}n=n.child}return n;case 26:return Fo(t,n),t===null?(s=fx(n.type,null,n.pendingProps,null))?n.memoizedState=s:Ut||(n.stateNode=Xv(n.type,n.pendingProps,U.current,n)):n.memoizedState=fx(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Te(n),t===null&&Ut&&(r=n.stateNode=ox(n.type,n.pendingProps,U.current),$n=n,oa=!0,u=gn,ar(n.type)?(_p=u,gn=ca(r.firstChild)):gn=u),qn(t,n,n.pendingProps.children,s),Fo(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ut&&((u=r=gn)&&(r=pT(r,n.type,n.pendingProps,oa),r!==null?(n.stateNode=r,$n=n,gn=ca(r.firstChild),oa=!1,u=!0):u=!1),u||Vs(n)),Te(n),u=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,r=d.children,lp(u,d)?r=null:x!==null&&lp(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Zd(t,n,cE,null,null,s),il._currentValue=u),Fo(t,n),qn(t,n,r,s),n.child;case 6:return t===null&&Ut&&((t=s=gn)&&(s=mT(s,n.pendingProps,oa),s!==null?(n.stateNode=s,$n=n,gn=null,t=!0):t=!1),t||Vs(n)),null;case 13:return P_(t,n,s);case 4:return ie(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Yr(n,null,r,s):qn(t,n,r,s),n.child;case 11:return w_(t,n,n.type,n.pendingProps,s);case 7:return r=n.pendingProps,Fo(t,n),qn(t,n,r,s),n.child;case 8:return qn(t,n,n.pendingProps.children,s),n.child;case 12:return qn(t,n,n.pendingProps.children,s),n.child;case 10:return F_(t,n,s);case 9:return u=n.type._context,r=n.pendingProps.children,kr(n),u=si(u),r=r(u),n.flags|=1,qn(t,n,r,s),n.child;case 14:return R_(t,n,n.type,n.pendingProps,s);case 15:return C_(t,n,n.type,n.pendingProps,s);case 19:return yh(t,n,s);case 31:return vE(t,n,s);case 22:return N_(t,n,s,n.pendingProps);case 24:return kr(n),r=si(Pn),t===null?(u=Bd(),u===null&&(u=mn,d=Pd(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),n.memoizedState={parent:r,cache:u},Hd(n),ks(n,Pn,u)):((t.lanes&s)!==0&&(Gd(t,n),sc(n,null,null,s),ac()),u=t.memoizedState,d=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ks(n,Pn,r)):(r=d.cache,ks(n,Pn,r),r!==u.cache&&Id(n,[Pn],s,!0))),qn(t,n,n.pendingProps.children,s),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Ut&&du(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Fo(t,n),qn(t,n,r.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function ps(t){t.flags|=4}function Mh(t,n,s,r,u){var d;if((d=(t.mode&32)!==0)&&(d=s===null?mx(n,r):mx(n,r)&&(r.src!==s.src||r.srcSet!==s.srcSet)),d){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Sv())t.flags|=8192;else throw Wr=xu,Fd}else t.flags&=-16777217}function G_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!gx(n))if(Sv())t.flags|=8192;else throw Wr=xu,Fd}function Bu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Da():536870912,t.lanes|=n,Xo|=n)}function fc(t,n){if(!Ut)switch(t.tailMode){case"visible":break;case"collapsed":for(var s=t.tail,r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null}}function _n(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,r=0;if(n)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=s,n}function SE(t,n,s){var r=n.pendingProps;switch(Dd(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(n),null;case 1:return _n(n),null;case 3:return s=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),us(Pn),xe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Lo(n)?ps(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ud())),_n(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ps(n),d!==null?(_n(n),G_(n,d)):(_n(n),Mh(n,u,null,r,s))):d?d!==t.memoizedState?(ps(n),_n(n),G_(n,d)):(_n(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ps(n),_n(n),Mh(n,u,t,r,s)),null;case 27:if(de(n),s=U.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ps(n);else{if(!r){if(n.stateNode===null)throw Error(a(166));return _n(n),n.subtreeFlags&=-33554433,null}t=Rt.current,Lo(n)?x0(n):(t=ox(u,r,s),n.stateNode=t,ps(n))}return _n(n),n.subtreeFlags&=-33554433,null;case 5:if(de(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ps(n);else{if(!r){if(n.stateNode===null)throw Error(a(166));return _n(n),n.subtreeFlags&=-33554433,null}if(d=Rt.current,Lo(n))x0(n);else{var x=Mc(U.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?d.multiple=!0:r.size&&(d.size=r.size);break;default:d=typeof r.is=="string"?x.createElement(u,{is:r.is}):x.createElement(u)}}d[we]=n,d[Ie]=r;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(ci(d,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ps(n)}}return _n(n),n.subtreeFlags&=-33554433,Mh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ps(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(a(166));if(t=U.current,Lo(n)){if(t=n.stateNode,s=n.memoizedProps,r=null,u=$n,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[we]=n,t=!!(t.nodeValue===s||r!==null&&r.suppressHydrationWarning===!0||Hv(t.nodeValue,s)),t||Vs(n,!0)}else t=Mc(t).createTextNode(r),t[we]=n,n.stateNode=t}return _n(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(r=Lo(n),s!==null){if(t===null){if(!r)throw Error(a(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[we]=n}else Hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),t=!1}else s=Ud(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(ji(n),n):(ji(n),null);if((n.flags&128)!==0)throw Error(a(558))}return _n(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Lo(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[we]=n}else Hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),u=!1}else u=Ud(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ji(n),n):(ji(n),null)}return ji(n),(n.flags&128)!==0?(n.lanes=s,n):(s=r!==null,t=t!==null&&t.memoizedState!==null,s&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),d=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(d=r.memoizedState.cachePool.pool),d!==u&&(r.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),Bu(n,n.updateQueue),_n(n),null);case 4:return xe(),t===null&&ip(n.stateNode.containerInfo),n.flags|=67108864,_n(n),null;case 10:return us(n.type),_n(n),null;case 19:if(Wd(n),r=n.memoizedState,r===null)return _n(n),null;if(u=(n.flags&128)!==0,d=r.rendering,d===null)if(u)fc(r,!1);else{if(Nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Eu(t),d!==null){for(n.flags|=128,fc(r,!1),t=d.updateQueue,n.updateQueue=t,Bu(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)p0(s,t),s=s.sibling;return rc(n,oi.current&1|2),Ut&&ls(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&j()>Ku&&(n.flags|=128,u=!0,fc(r,!1),n.lanes=4194304)}else{if(!u)if(t=Eu(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Bu(n,t),fc(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!d.alternate&&!Ut)return _n(n),null}else 2*j()-r.renderingStartTime>Ku&&s!==536870912&&(n.flags|=128,u=!0,fc(r,!1),n.lanes=4194304);r.isBackwards?(d.sibling=n.child,n.child=d):(t=r.last,t!==null?t.sibling=d:n.child=d,r.last=d)}if(r.tail!==null){t=r.tail;e:{for(s=t;s!==null;){if(s.alternate!==null){s=!1;break e}s=s.sibling}s=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=j(),t.sibling=null,d=oi.current,d=u?d&1|2:d&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!s||Ut?rc(n,d):(s=d,Oe(ri,n),Oe(oi,s),gi===null&&(gi=n)),Ut&&ls(n,r.treeForkCount),t}return _n(n),null;case 22:case 23:return ji(n),jd(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(s&536870912)!==0&&(n.flags&128)===0&&(_n(n),n.subtreeFlags&6&&(n.flags|=8192)):_n(n),s=n.updateQueue,s!==null&&Bu(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==s&&(n.flags|=2048),t!==null&&Qe(jr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),us(Pn),_n(n),null;case 25:return null;case 30:return n.flags|=33554432,_n(n),null}throw Error(a(156,n.tag))}function ME(t,n){switch(Dd(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return us(Pn),xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(ji(n),n.alternate===null)throw Error(a(340));Hr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ji(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Hr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Wd(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return xe(),null;case 10:return us(n.type),null;case 22:case 23:return ji(n),jd(),t!==null&&Qe(jr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return us(Pn),null;case 25:return null;default:return null}}function V_(t,n){switch(Dd(n),n.tag){case 3:us(Pn),xe();break;case 26:case 27:case 5:de(n);break;case 4:xe();break;case 31:n.memoizedState!==null&&ji(n);break;case 13:ji(n);break;case 19:Wd(n);break;case 10:us(n.type);break;case 22:case 23:ji(n),jd(),t!==null&&Qe(jr);break;case 24:us(Pn)}}function dc(t,n){try{var s=n.updateQueue,r=s!==null?s.lastEffect:null;if(r!==null){var u=r.next;s=u;do{if((s.tag&t)===t){r=void 0;var d=s.create,x=s.inst;r=d(),x.destroy=r}s=s.next}while(s!==u)}}catch(b){sn(n,n.return,b)}}function Qs(t,n,s){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var d=u.next;r=d;do{if((r.tag&t)===t){var x=r.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,u=n;var P=s,Q=b;try{Q()}catch(re){sn(u,P,re)}}}r=r.next}while(r!==d)}}catch(re){sn(n,n.return,re)}}function k_(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{L0(n,s)}catch(r){sn(t,t.return,r)}}}function X_(t,n,s){s.props=Kr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(r){sn(t,n,r)}}function Ia(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var u=t.stateNode,d=ss(t.memoizedProps,u);(u.ref===null||u.ref.name!==d)&&(u.ref=Qv(d)),r=u.ref;break;case 7:if(t.stateNode===null){var x=new Ki(t);g(t.child,!1,dT,x,void 0,void 0),t.stateNode=x}r=t.stateNode;break;default:r=t.stateNode}typeof s=="function"?t.refCleanup=s(r):s.current=r}}catch(b){sn(t,n,b)}}function li(t,n){var s=t.ref,r=t.refCleanup;if(s!==null)if(typeof r=="function")try{r()}catch(u){sn(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){sn(t,n,u)}else s.current=null}function Fu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var s=0;s<n.length;s++)ix(t.stateNode,n[s])}function j_(t){for(var n=t.return;n!==null&&(Th(n)&&ix(t.stateNode,n.stateNode),!Eh(n));)n=n.return}function hc(t){for(var n=t.return;n!==null&&(Th(n)&&hT(t.stateNode,n.stateNode),!Eh(n));)n=n.return}function Eh(t){return t.tag===5||t.tag===3||t.tag===27}function Th(t){return t&&t.tag===7&&t.stateNode!==null}function bh(t){var n=t.type,s=t.memoizedProps,r=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break e;case"img":s.src?r.src=s.src:s.srcSet&&(r.srcset=s.srcSet)}}catch(u){sn(t,t.return,u)}}function Ah(t,n,s){try{var r=t.stateNode;YE(r,t.type,s,n),r[Ie]=n}catch(u){sn(t,t.return,u)}}function q_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ar(t.type)||t.tag===4}function wh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ar(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rh(t,n,s,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(u,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(u),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=ee)),Fu(t,r),zt=!0;else if(u!==4&&(u===27&&(Fu(t,r),r=null,ar(t.type)&&(s=t.stateNode,n=null)),t=t.child,t!==null))for(Rh(t,n,s,r),t=t.sibling;t!==null;)Rh(t,n,s,r),t=t.sibling}function Hu(t,n,s,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?s.insertBefore(u,n):s.appendChild(u),Fu(t,r),zt=!0;else if(u!==4&&(u===27&&(Fu(t,r),r=null,ar(t.type)&&(s=t.stateNode)),t=t.child,t!==null))for(Hu(t,n,s,r),t=t.sibling;t!==null;)Hu(t,n,s,r),t=t.sibling}function W_(t){var n=t.stateNode,s=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ci(n,r,s),n[we]=t,n[Ie]=s}catch(d){sn(t,t.return,d)}}var Gu=!1,qi=null;function Y_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Gu=!0)}var Pa=null;function Z_(){var t=Pa;return Pa=null,t}var Oi=0;function Ho(t,n,s,r,u){return Oi=0,K_(t.child,n,s,r,u)}function K_(t,n,s,r,u){for(var d=!1;t!==null;){if(t.tag===5){var x=t.stateNode;if(r!==null){var b=fp(x);r.push(b),b.view&&(d=!0)}else d||fp(x).view&&(d=!0);Gu=!0,Zv(x,Oi===0?n:n+"_"+Oi,s),Oi++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||K_(t.child,n,s,r,u)&&(d=!0));t=t.sibling}return d}function za(t,n){for(;t!==null;)t.tag===5?Kv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||za(t.child,n)),t=t.sibling}function Vu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Vu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(a(544));var s=n.name;n=rs(n.default,n.share),n!=="none"&&(Ho(t,s,n,null,!1)||za(t.child,!1))}t=t.sibling}}function Ch(t,n){if(t.tag===30){var s=t.stateNode,r=t.memoizedProps,u=ss(r,s),d=rs(r.default,s.paired?r.share:r.enter);d!=="none"?Ho(t,u,d,null,!1)?(Vu(t),s.paired||n||Yo(t,r.onEnter)):za(t.child,!1):Vu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Ch(t,n),t=t.sibling;else Vu(t)}function Nh(t){if(qi!==null&&qi.size!==0){var n=qi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var s=t.memoizedProps,r=s.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var d=rs(s.default,s.share);if(d!=="none"&&(Ho(t,r,d,null,!1)?(d=t.stateNode,u.paired=d,d.paired=u,Yo(t,s.onShare)):za(t.child,!1)),n.delete(r),n.size===0)break}}}Nh(t)}t=t.sibling}}}function Dh(t){if(t.tag===30){var n=t.memoizedProps,s=ss(n,t.stateNode),r=qi!==null?qi.get(s):void 0,u=rs(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(Ho(t,s,u,null,!1)?r!==void 0?(u=t.stateNode,r.paired=u,u.paired=r,qi.delete(s),Yo(t,n.onShare)):Yo(t,n.onExit):za(t.child,!1)),qi!==null&&Nh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Dh(t),t=t.sibling;else qi!==null&&Nh(t)}function Q_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,s=ss(n,t.stateNode);n=rs(n.default,n.update),t.flags&=-5,n!=="none"&&Ho(t,s,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Q_(t);t=t.sibling}}function Lh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,za(t.child,!1))}Lh(t)}t=t.sibling}}function ku(t){if(t.tag===30)t.stateNode.paired=null,za(t.child,!1),Lh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ku(t),t=t.sibling;else Lh(t)}function J_(t){for(t=t.child;t!==null;)t.tag===30?za(t.child,!1):(t.subtreeFlags&33554432)!==0&&J_(t),t=t.sibling}function Uh(t,n,s,r,u,d,x){for(var b=!1;n!==null;){if(n.tag===5){var P=n.stateNode;if(d!==null&&Oi<d.length){var Q=d[Oi],re=fp(P);(Q.view||re.view)&&(b=!0);var _e;if(_e=(t.flags&4)===0)if(re.clip)_e=!0;else{_e=Q.rect;var W=re.rect;_e=_e.y!==W.y||_e.x!==W.x||_e.height!==W.height||_e.width!==W.width}_e&&(t.flags|=4),re.abs?re=!Q.abs:(Q=Q.rect,re=re.rect,re=Q.height!==re.height||Q.width!==re.width),re&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Zv(P,Oi===0?s:s+"_"+Oi,u),b&&(t.flags&4)!==0||(Pa===null&&(Pa=[]),Pa.push(P,Oi===0?r:r+"_"+Oi,n.memoizedProps)),Oi++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?t.flags|=n.flags&32:Uh(t,n.child,s,r,u,d,x)&&(b=!0));n=n.sibling}return b}function $_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var s=t.memoizedProps,r=t.stateNode,u=ss(s,r),d=rs(s.default,s.update),x;x=t.memoizedState,t.memoizedState=null,r=t;var b=t.child;Oi=0,u=Uh(r,b,u,u,d,x,!1),(t.flags&4)!==0&&u&&Yo(t,s.onUpdate)}else(t.subtreeFlags&33554432)!==0&&$_(t);t=t.sibling}}var ei=!1,tn=!1,Ba=!1,Oh=!1,ev=typeof WeakSet=="function"?WeakSet:Set,ti=null,Fa=!1,pc=!1,Xu=!1,Ih=!1;function EE(t,n,s){if(t=t.containerInfo,rp=al,t=a0(t),Sd(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var d=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{r.nodeType,x.nodeType}catch{r=null;break e}var b=0,P=-1,Q=-1,re=0,_e=0,W=t,ne=null;t:for(;;){for(var ze;W!==r||d!==0&&W.nodeType!==3||(P=b+d),W!==x||u!==0&&W.nodeType!==3||(Q=b+u),W.nodeType===3&&(b+=W.nodeValue.length),(ze=W.firstChild)!==null;)ne=W,W=ze;for(;;){if(W===t)break t;if(ne===r&&++re===d&&(P=b),ne===x&&++_e===u&&(Q=b),(ze=W.nextSibling)!==null)break;W=ne,ne=W.parentNode}W=ze}r=P===-1||Q===-1?null:{start:P,end:Q}}else r=null}r=r||{start:0,end:0}}else r=null;for(op={focusedElem:t,selectionRange:r},al=!1,s=(s&335544064)===s,ti=n,n=s?9270:1024;ti!==null;){if(t=ti,s&&(r=t.deletions,r!==null))for(d=0;d<r.length;d++)s&&Dh(r[d]);if(t.alternate===null&&(t.flags&2)!==0)s&&Y_(t),ju(s);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&s&&Dh(r),ju(s);continue}else if(r!==null&&r.memoizedState!==null){s&&Y_(t),ju(s);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,ti=r):(s&&Q_(t),ju(s))}}qi=null}function ju(t){for(;ti!==null;){var n=ti,s=t,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){s=void 0,u=r.memoizedProps,r=r.memoizedState;var d=n.stateNode;try{var x=Kr(n.type,u);s=d.getSnapshotBeforeUpdate(x,r),d.__reactInternalSnapshotBeforeUpdate=s}catch(b){sn(n,n.return,b)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,s=r.nodeType,s===9)pp(r);else if(s===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":pp(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:s&&r!==null&&(s=ss(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=rs(u.default,u.update),u!=="none"&&Ho(r,s,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(a(163))}if(r=n.sibling,r!==null){r.return=n.return,ti=r;break}ti=n.return}}function tv(t,n,s){var r=s.flags;switch(s.tag){case 0:case 11:case 15:Ha(t,s),r&4&&dc(5,s);break;case 1:if(Ha(t,s),r&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(x){sn(s,s.return,x)}else{var u=Kr(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){sn(s,s.return,x)}}r&64&&k_(s),r&512&&Ia(s,s.return);break;case 3:if(Ha(t,s),r&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{L0(t,n)}catch(x){sn(s,s.return,x)}}break;case 27:n===null&&r&4&&W_(s);case 26:case 5:Ha(t,s),n===null&&r&4&&bh(s),r&512&&Ia(s,s.return);break;case 12:Ha(t,s);break;case 31:Ha(t,s),r&4&&sv(t,s);break;case 13:Ha(t,s),r&4&&rv(t,s),r&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=IE.bind(null,s),gT(t,s))));break;case 22:if(r=s.memoizedState!==null||ei,!r){var d=n!==null&&n.memoizedState!==null||tn;n=ei,u=tn,ei=r,(tn=d)&&!u?(r=2,(s.subtreeFlags&8772)!==0&&(r|=1),Sa(t,s,r)):Ha(t,s),ei=n,tn=u}break;case 30:Ha(t,s),r&512&&Ia(s,s.return);break;case 7:r&512&&Ia(s,s.return);default:Ha(t,s)}}function Ph(t,n){for(t=t.child;t!==null;)nv(t,n),t=t.sibling}function nv(t,n){switch(t.tag){case 5:case 26:try{var s=t.stateNode;if(n){var r=s.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=t.stateNode,d=t.memoizedProps.style,x=d!=null&&d.hasOwnProperty("display")?d.display:null;u.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(P){sn(t,t.return,P)}zh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,zt=!0}catch(P){sn(t,t.return,P)}break;case 18:try{var b=t.stateNode;n?Yv(b,!0):Yv(t.stateNode,!1)}catch(P){sn(t,t.return,P)}break;case 22:case 23:t.memoizedState===null&&Ph(t,n);break;default:Ph(t,n)}}function zh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var s=t,r=n;switch(s.tag){case 4:nv(s,r);break e;case 22:s.memoizedState===null&&zh(s,r);break e;default:zh(s,r)}}t=t.sibling}}function iv(t){var n=t.alternate;n!==null&&(t.alternate=null,iv(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Dt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Sn=null,Ii=!1;function xa(t,n,s){for(s=s.child;s!==null;)av(t,n,s),s=s.sibling}function av(t,n,s){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ot,s)}catch{}switch(s.tag){case 26:tn||li(s,n),xa(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&!tn&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:tn||li(s,n),hc(s);var r=Sn,u=Ii;ar(s.type)&&(Sn=s.stateNode,Ii=!1),xa(t,n,s),lx(s.stateNode,s.type,s.memoizedProps),Sn=r,Ii=u;break;case 5:tn||li(s,n),hc(s);case 6:if(s.tag===6&&hc(s),r=Sn,u=Ii,Sn=null,xa(t,n,s),Sn=r,Ii=u,Sn!==null)if(Ii)try{(Sn.nodeType===9?Sn.body:Sn.nodeName==="HTML"?Sn.ownerDocument.body:Sn).removeChild(s.stateNode),zt=!0}catch(d){sn(s,n,d)}else try{Sn.removeChild(s.stateNode),zt=!0}catch(d){sn(s,n,d)}break;case 18:Sn!==null&&(Ii?(t=Sn,Wv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),sl(t)):Wv(Sn,s.stateNode));break;case 4:r=Sn,u=Ii,Sn=s.stateNode.containerInfo,Ii=!0,xa(t,n,s),Sn=r,Ii=u;break;case 0:case 11:case 14:case 15:Qs(2,s,n),tn||Qs(4,s,n),xa(t,n,s);break;case 1:tn||(li(s,n),r=s.stateNode,typeof r.componentWillUnmount=="function"&&X_(s,n,r)),xa(t,n,s);break;case 21:xa(t,n,s);break;case 22:tn=(r=tn)||s.memoizedState!==null,xa(t,n,s),tn=r;break;case 30:li(s,n),xa(t,n,s);break;case 7:tn||li(s,n),xa(t,n,s);break;default:xa(t,n,s)}}function sv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{sl(t)}catch(s){sn(n,n.return,s)}}}function rv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{sl(t)}catch(s){sn(n,n.return,s)}}function TE(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ev),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ev),n;default:throw Error(a(435,t.tag))}}function qu(t,n){var s=TE(t);n.forEach(function(r){if(!s.has(r)){s.add(r);var u=PE.bind(null,t,r);r.then(u,u)}})}function Si(t,n,s){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var d=r[u],x=t,b=n,P=b;e:for(;P!==null;){switch(P.tag){case 27:if(ar(P.type)){Sn=P.stateNode,Ii=!1;break e}break;case 5:Sn=P.stateNode,Ii=!1;break e;case 3:case 4:Sn=P.stateNode.containerInfo,Ii=!0;break e}P=P.return}if(Sn===null)throw Error(a(160));av(x,b,d),Sn=null,Ii=!1,x=d.alternate,x!==null&&(x.return=null),d.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ov(n,t,s),n=n.sibling}var ya=null;function ov(t,n,s){var r=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var d=0;d<r.length;d++){var x=r[d];x.ref.impl=x.nextImpl}Si(n,t,s),Mi(t),u&4&&(Qs(3,t,t.return),dc(3,t),Qs(5,t,t.return));break;case 1:Si(n,t,s),Mi(t),u&512&&(tn||r===null||li(r,r.return)),u&64&&ei&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?n:s.concat(n))));break;case 26:if(d=ya,Si(n,t,s),Mi(t),u&512&&(tn||r===null||li(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,s=t.memoizedState,r===null)if(s===null)if(t.stateNode===null)if(ei)t.stateNode=Xv(t.type,t.memoizedProps,n.containerInfo,t);else{e:{n=t.type,s=t.memoizedProps,u=d.ownerDocument||d;t:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Kt]||r[we]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),ci(r,n,s),r[we]=t,nn(r),n=r;break e;case"link":if(d=px("link","href",u).get(n+(s.href||""))){for(x=0;x<d.length;x++)if(r=d[x],r.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&r.getAttribute("rel")===(s.rel==null?null:s.rel)&&r.getAttribute("title")===(s.title==null?null:s.title)&&r.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){d.splice(x,1);break t}}r=u.createElement(n),ci(r,n,s),u.head.appendChild(r);break;case"meta":if(d=px("meta","content",u).get(n+(s.content||""))){for(x=0;x<d.length;x++)if(r=d[x],r.getAttribute("content")===(s.content==null?null:""+s.content)&&r.getAttribute("name")===(s.name==null?null:s.name)&&r.getAttribute("property")===(s.property==null?null:s.property)&&r.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&r.getAttribute("charset")===(s.charSet==null?null:s.charSet)){d.splice(x,1);break t}}r=u.createElement(n),ci(r,n,s),u.head.appendChild(r);break;default:throw Error(a(468,n))}r[we]=t,nn(r),n=r}t.stateNode=n}else ei||Sp(d,t.type,t.stateNode);else t.stateNode=hx(d,s,t.memoizedProps);else u!==s?(u===null?(n=r.stateNode,n===null||tn||n.parentNode.removeChild(n)):u.count--,s===null?ei||Sp(d,t.type,t.stateNode):hx(d,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Ah(t,t.memoizedProps,r.memoizedProps);break;case 27:Si(n,t,s),Mi(t),u&512&&(tn||r===null||li(r,r.return)),r!==null&&u&4&&Ah(t,t.memoizedProps,r.memoizedProps);break;case 5:if(d=Ba,Ba=!1,Si(n,t,s),Ba=d,Mi(t),u&512&&(tn||r===null||li(r,r.return)),t.flags&32){n=t.stateNode;try{zs(n,""),zt=!0}catch(re){sn(t,t.return,re)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,Ah(t,n,r!==null?r.memoizedProps:n)),u&1024&&(Oh=!0);break;case 6:if(Si(n,t,s),Mi(t),u&4){if(t.stateNode===null)throw Error(a(162));n=t.memoizedProps,s=t.stateNode;try{s.nodeValue=n,zt=!0}catch(re){sn(t,t.return,re)}}break;case 3:if(zt=!1,lf=null,d=ya,ya=Ec(n.containerInfo),Si(n,t,s),ya=d,Mi(t),u&4&&r!==null&&r.memoizedState.isDehydrated)try{sl(n.containerInfo)}catch(re){sn(t,t.return,re)}Oh&&(Oh=!1,lv(t)),zt=!1;break;case 4:u=Ba,Ba=ei,r=tu(),d=ya,ya=Ec(t.stateNode.containerInfo),Si(n,t,s),Mi(t),ya=d,zt&&pc&&(Xu=!0),zt=r,Ba=u;break;case 12:Si(n,t,s),Mi(t);break;case 31:Si(n,t,s),Mi(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,qu(t,n)));break;case 13:Si(n,t,s),Mi(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Zu=j()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,qu(t,n)));break;case 22:d=t.memoizedState!==null,x=r!==null&&r.memoizedState!==null;var b=ei,P=tn,Q=Ba;ei=b||d,Ba=Q||d,tn=P||x,Si(n,t,s),tn=P,Ba=Q,ei=b,Mi(t),u&8192&&(n=t.stateNode,n._visibility=d?n._visibility&-2:n._visibility|1,!d||r===null||x||ei||tn||(n=x||tn,s=ei,r=tn,ei=d||ei,tn=n,Js(t,2),ei=s,tn=r),!d&&Ba||Ph(t,d)),u&4&&(n=t.updateQueue,n!==null&&(s=n.retryQueue,s!==null&&(n.retryQueue=null,qu(t,s))));break;case 19:Si(n,t,s),Mi(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,qu(t,n)));break;case 30:u&512&&(tn||r===null||li(r,r.return)),u=tu(),d=pc,x=(s&335544064)===s,b=t.memoizedProps,pc=x&&rs(b.default,b.update)!=="none",Si(n,t,s),Mi(t),x&&r!==null&&zt&&(t.flags|=4),pc=d,zt=u;break;case 21:break;case 7:u&512&&(tn||r===null||li(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Si(n,t,s),Mi(t)}}function Mi(t){var n=t.flags;if(n&2){try{for(var s,r=t.return;r!==null;){if(q_(r)){s=r;break}r=r.return}r=null;for(var u=t.return;u!==null;){if(Th(u)){var d=u.stateNode;r===null?r=[d]:r.push(d)}if(Eh(u))break;u=u.return}var x=r;if(s==null)throw Error(a(160));switch(s.tag){case 27:var b=s.stateNode,P=wh(t);Hu(t,P,b,x);break;case 5:var Q=s.stateNode;s.flags&32&&(zs(Q,""),s.flags&=-33);var re=wh(t);Hu(t,re,Q,x);break;case 3:case 4:var _e=s.stateNode.containerInfo,W=wh(t);Rh(t,W,_e,x);break;default:throw Error(a(161))}}catch(ne){sn(t,t.return,ne)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function lv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;lv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,al=!0,n.reset(),al=!1),t=t.sibling}}function Go(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)cv(n,t),n=n.sibling;else $_(n)}function cv(t,n){var s=t.alternate;if(s===null)Ch(t,!1);else switch(t.tag){case 3:if(Ih=Fa=!1,Z_(),Go(n,t),!Fa&&!Xu){if(t=Pa,t!==null)for(var r=0;r<t.length;r+=3){s=t[r];var u=t[r+1];Kv(s,t[r+2]),s=s.ownerDocument.documentElement,s!==null&&s.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ih=!0}Pa=null;break;case 5:Go(n,t);break;case 4:r=Fa,Fa=!1,Go(n,t),Fa&&(Xu=!0),Fa=r;break;case 22:t.memoizedState===null&&(s.memoizedState!==null?Ch(t,!1):Go(n,t));break;case 30:r=Fa,u=Z_(),Fa=!1,Go(n,t),Fa&&(t.flags|=4);var d=t.memoizedProps,x=t.stateNode;n=ss(d,x),x=ss(s.memoizedProps,x);var b=rs(d.default,d.update);b==="none"?n=!1:(d=s.memoizedState,s.memoizedState=null,s=t.child,Oi=0,n=Uh(t,s,n,x,b,d,!0),Oi!==(d===null?0:d.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Yo(t,t.memoizedProps.onUpdate),Pa=u):u!==null&&(u.push.apply(u,Pa),Pa=u),Fa=(t.flags&32)!==0?!0:r;break;default:Go(n,t)}}function Ha(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)tv(t,n.alternate,n),n=n.sibling}function Js(t,n){for(t=t.child;t!==null;){var s=t,r=n;switch(s.tag){case 0:case 11:case 14:case 15:Qs(4,s,s.return),Js(s,r);break;case 1:li(s,s.return);var u=s.stateNode;typeof u.componentWillUnmount=="function"&&X_(s,s.return,u),Js(s,r);break;case 27:(r&2)!==0&&lx(s.stateNode,s.type,s.memoizedProps);case 5:li(s,s.return),s.tag!==5&&s.tag!==27||hc(s),Js(s,r);break;case 6:hc(s);break;case 26:li(s,s.return),u=s.stateNode,s.memoizedState!==null||u===null||tn||u.parentNode.removeChild(u),Js(s,r);break;case 22:s.memoizedState===null&&Js(s,r);break;case 30:li(s,s.return),Js(s,r);break;case 7:li(s,s.return);default:Js(s,r)}t=t.sibling}}function Sa(t,n,s){for(s=(n.subtreeFlags&8772)!==0?s:s&-2,n=n.child;n!==null;){var r=n.alternate,u=t,d=n,x=d.flags,b=(s&1)!==0;switch(d.tag){case 0:case 11:case 15:Sa(u,d,s),dc(4,d);break;case 1:if(Sa(u,d,s),r=d,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(re){sn(r,r.return,re)}if(r=d,u=r.updateQueue,u!==null){var P=r.stateNode;try{var Q=u.shared.hiddenCallbacks;if(Q!==null)for(u.shared.hiddenCallbacks=null,u=0;u<Q.length;u++)D0(Q[u],P)}catch(re){sn(r,r.return,re)}}b&&x&64&&k_(d),Ia(d,d.return);break;case 27:(s&2)!==0&&W_(d);case 5:d.tag!==5&&d.tag!==27||j_(d),Sa(u,d,s),b&&r===null&&x&4&&bh(d),Ia(d,d.return);break;case 6:j_(d);break;case 26:P=d.stateNode,d.memoizedState!==null||P===null||ei||Sp(Ec(P.ownerDocument),d.type,P),Sa(u,d,s),b&&r===null&&x&4&&bh(d),Ia(d,d.return);break;case 12:Sa(u,d,s);break;case 31:Sa(u,d,s),b&&x&4&&sv(u,d);break;case 13:Sa(u,d,s),b&&x&4&&rv(u,d);break;case 22:d.memoizedState===null&&Sa(u,d,s),Ia(d,d.return);break;case 30:Sa(u,d,s),Ia(d,d.return);break;case 7:Ia(d,d.return);default:Sa(u,d,s)}n=n.sibling}}function Bh(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&$l(s))}function Fh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$l(t))}function la(t,n,s,r){var u=(s&335544064)===s;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)uv(t,n,s,r),n=n.sibling;else u&&J_(n)}function uv(t,n,s,r){var u=(s&335544064)===s;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&ku(n);var d=n.flags;switch(n.tag){case 0:case 11:case 15:la(t,n,s,r),d&2048&&dc(9,n);break;case 1:la(t,n,s,r);break;case 3:la(t,n,s,r),u&&Ih&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),d&2048&&(d=null,n.alternate!==null&&(d=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==d&&(n.refCount++,d!=null&&$l(d)));break;case 12:if(d&2048){la(t,n,s,r),d=n.stateNode;try{var x=n.memoizedProps,b=x.id,P=x.onPostCommit;typeof P=="function"&&P(b,n.alternate===null?"mount":"update",d.passiveEffectDuration,-0)}catch(Q){sn(n,n.return,Q)}}else la(t,n,s,r);break;case 31:la(t,n,s,r);break;case 13:la(t,n,s,r);break;case 23:break;case 22:x=n.stateNode,b=n.alternate,n.memoizedState!==null?(u&&b!==null&&b.memoizedState===null&&ku(b),x._visibility&2?la(t,n,s,r):mc(t,n)):(u&&b!==null&&b.memoizedState!==null&&ku(n),x._visibility&2?la(t,n,s,r):(x._visibility|=2,Vo(t,n,s,r,(n.subtreeFlags&10256)!==0||!1))),d&2048&&Bh(b,n);break;case 24:la(t,n,s,r),d&2048&&Fh(n.alternate,n);break;case 30:u&&(d=n.alternate,d!==null&&(za(d.child,!0),za(n.child,!0))),la(t,n,s,r);break;default:la(t,n,s,r)}}function Vo(t,n,s,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,b=s,P=r,Q=x.flags;switch(x.tag){case 0:case 11:case 15:Vo(d,x,b,P,u),dc(8,x);break;case 23:break;case 22:var re=x.stateNode;x.memoizedState!==null?re._visibility&2?Vo(d,x,b,P,u):mc(d,x):(re._visibility|=2,Vo(d,x,b,P,u)),u&&Q&2048&&Bh(x.alternate,x);break;case 24:Vo(d,x,b,P,u),u&&Q&2048&&Fh(x.alternate,x);break;default:Vo(d,x,b,P,u)}n=n.sibling}}function mc(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,r=n,u=r.flags;switch(r.tag){case 22:mc(s,r),u&2048&&Bh(r.alternate,r);break;case 24:mc(s,r),u&2048&&Fh(r.alternate,r);break;default:mc(s,r)}n=n.sibling}}var Qr=8192;function Jr(t,n,s){if(t.subtreeFlags&Qr)for(t=t.child;t!==null;)fv(t,n,s),t=t.sibling}function fv(t,n,s){switch(t.tag){case 26:Jr(t,n,s),t.flags&Qr&&(t.memoizedState!==null?NT(s,ya,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&vx(s,t)));break;case 5:Jr(t,n,s),t.flags&Qr&&(t=t.stateNode,(n&335544128)===n&&vx(s,t));break;case 3:case 4:var r=ya;ya=Ec(t.stateNode.containerInfo),Jr(t,n,s),ya=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Qr,Qr=16777216,Jr(t,n,s),Qr=r):Jr(t,n,s));break;case 30:if((t.flags&Qr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var u=t.stateNode;u.paired=null,qi===null&&(qi=new Map),qi.set(r,u)}Jr(t,n,s);break;default:Jr(t,n,s)}}function dv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function gc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var r=n[s];ti=r,pv(r,t)}dv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hv(t),t=t.sibling}function hv(t){switch(t.tag){case 0:case 11:case 15:gc(t),t.flags&2048&&Qs(9,t,t.return);break;case 3:gc(t);break;case 12:gc(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Wu(t)):gc(t);break;default:gc(t)}}function Wu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var r=n[s];ti=r,pv(r,t)}dv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Qs(8,n,n.return),Wu(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Wu(n));break;default:Wu(n)}t=t.sibling}}function pv(t,n){for(;ti!==null;){var s=ti;switch(s.tag){case 0:case 11:case 15:Qs(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var r=s.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:$l(s.memoizedState.cache)}if(r=s.child,r!==null)r.return=s,ti=r;else e:for(s=t;ti!==null;){r=ti;var u=r.sibling,d=r.return;if(iv(r),r===s){ti=null;break e}if(u!==null){u.return=d,ti=u;break e}ti=d}}}var bE={getCacheForType:function(t){var n=si(Pn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return si(Pn).controller.signal}},AE=typeof WeakMap=="function"?WeakMap:Map,$t=0,mn=null,Bt=null,kt=0,an=0,Wi=null,$s=!1,ko=!1,Hh=!1,ms=0,Nn=0,er=0,$r=0,Yu=0,Yi=0,Xo=0,_c=null,Pi=null,Gh=!1,Zu=0,mv=0,Ku=1/0,Qu=null,tr=null,bn=0,Ma=null,eo=null,Ga=0,Vh=0,kh=null,gv=null,jo=null,qo=null,Wo=null,vc=0,Ju=null;function Zi(){return($t&2)!==0&&kt!==0?kt&-kt:Ue.T!==null?$h():$()}function _v(){if(Yi===0)if((kt&536870912)===0||Ut){var t=$a;$a<<=1,($a&3932160)===0&&($a=262144),Yi=t}else Yi=536870912;return t=ri.current,t!==null&&(t.flags|=32),Yi}function Yo(t,n){if(n!=null){var s=t.stateNode,r=s.ref;r===null&&(r=s.ref=Qv(ss(t.memoizedProps,s))),qo===null&&(qo=[]),qo.push(n.bind(null,r))}}function zi(t,n,s){(t===mn&&(an===2||an===9)||t.cancelPendingCommit!==null)&&(Zo(t,0),nr(t,kt,Yi,!1)),La(t,s),(($t&2)===0||t!==mn)&&(t===mn&&(($t&2)===0&&($r|=s),Nn===4&&nr(t,kt,Yi,!1)),Va(t))}function vv(t,n,s){if(($t&6)!==0)throw Error(a(327));var r=!s&&(n&127)===0&&(n&t.expiredLanes)===0||ta(t,n),u=r?CE(t,n):jh(t,n,!0),d=r;do{if(u===0){ko&&!r&&nr(t,n,0,!1);break}else{if(s=t.current.alternate,d&&!wE(s)){u=jh(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var b=t;u=_c;var P=b.current.memoizedState.isDehydrated;if(P&&(Zo(b,x).flags|=256),x=jh(b,x,!1),x!==2&&x!==6){if(Hh&&!P){b.errorRecoveryDisabledLanes|=d,$r|=d,u=4;break e}d=Pi,Pi=u,d!==null&&(Pi===null?Pi=d:Pi.push.apply(Pi,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){Zo(t,0),nr(t,n,0,!0);break}e:{switch(r=t,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:nr(r,n,Yi,!$s);break e;case 2:Pi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=Zu+300-j(),10<u)){if(nr(r,n,Yi,!$s),Gi(r,0,!0)!==0)break e;Ga=n,r.timeoutHandle=up(xv.bind(null,r,s,Pi,Qu,Gh,n,Yi,$r,Xo,$s,d,"Throttled",-0,0),u);break e}xv(r,s,Pi,Qu,Gh,n,Yi,$r,Xo,$s,d,null,-0,0)}}break}while(!0);Va(t)}function xv(t,n,s,r,u,d,x,b,P,Q,re,_e,W,ne){t.timeoutHandle=-1;var ze=n.subtreeFlags,Je=(d&335544064)===d;if(_e=null,(Je||ze&8192||(ze&16785408)===16785408)&&(_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ee},qi=null,fv(n,d,_e),Je&&(ze=_e,Je=t.containerInfo,Je=(Je.nodeType===9?Je:Je.ownerDocument).__reactViewTransition,Je!=null&&(ze.count++,ze.waitingForViewTransition=!0,ze=Ac.bind(ze),Je.finished.then(ze,ze))),ze=(d&62914560)===d?Zu-j():(d&4194048)===d?mv-j():0,ze=DT(_e,ze),ze!==null)){Ga=d,t.cancelPendingCommit=ze(wv.bind(null,t,n,d,s,r,u,x,b,P,Q,re,_e,null,W,ne)),nr(t,d,x,!Q);return}wv(t,n,d,s,r,u,x,b,P,Q,re,_e)}function wE(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var r=0;r<s.length;r++){var u=s[r],d=u.getSnapshot;u=u.value;try{if(!Xi(d(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nr(t,n,s,r){n=ii(t,n),n&=~Yu,n&=~$r,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var d=31-Qn(u),x=1<<d;r[d]=-1,u&=~x}s!==0&&Cr(t,s,n)}function $u(){return($t&6)===0?(xc(0),!1):!0}function Xh(){if(Bt!==null){if(an===0)var t=Bt.return;else t=Bt,cs=Gr=null,Jd(t),Io=null,nc=0,t=Bt;for(;t!==null;)V_(t.alternate,t),t=t.return;Bt=null}}function Zo(t,n){var s=t.timeoutHandle;return s!==-1&&(t.timeoutHandle=-1,QE(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ga=0,Xh(),mn=t,Bt=s=os(t.current,null),kt=n,an=0,Wi=null,$s=!1,ko=ta(t,n),Hh=!1,Xo=Yi=Yu=$r=er=Nn=0,Pi=_c=null,Gh=!1,ms=ii(t,n),ou(),s}function yv(t,n){Et=null,Ue.H=Lu,n===Oo||n===vu?(n=w0(),an=3):n===Fd?(n=w0(),an=4):an=n===hh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wi=n,Bt===null&&(Nn=1,Uu(t,aa(n,t.current)))}function Sv(){var t=ri.current;return t===null?!0:(kt&4194048)===kt?gi===null:(kt&62914560)===kt||(kt&536870912)!==0?t===gi:!1}function Mv(){var t=Ue.H;return Ue.H=Lu,t===null?Lu:t}function Ev(){var t=Ue.A;return Ue.A=bE,t}function ef(){Nn=4,$s||(kt&4194048)!==kt&&ri.current!==null||(ko=!0),(er&134217727)===0&&($r&134217727)===0||mn===null||nr(mn,kt,Yi,!1)}function jh(t,n,s){var r=$t;$t|=2;var u=Mv(),d=Ev();(mn!==t||kt!==n)&&(Qu=null,Zo(t,n)),n=!1;var x=Nn;e:do try{if(an!==0&&Bt!==null){var b=Bt,P=Wi;switch(an){case 8:Xh(),x=6;break e;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var Q=an;if(an=0,Wi=null,Ko(t,b,P,Q),s&&ko){x=0;break e}break;default:Q=an,an=0,Wi=null,Ko(t,b,P,Q)}}RE(),x=Nn;break}catch(re){yv(t,re)}while(!0);return n&&t.shellSuspendCounter++,cs=Gr=null,$t=r,Ue.H=u,Ue.A=d,Bt===null&&(mn=null,kt=0,ou()),x}function RE(){for(;Bt!==null;)Tv(Bt)}function CE(t,n){var s=$t;$t|=2;var r=Mv(),u=Ev();mn!==t||kt!==n?(Qu=null,Ku=j()+500,Zo(t,n)):ko=ta(t,n);e:do try{if(an!==0&&Bt!==null){n=Bt;var d=Wi;t:switch(an){case 1:an=0,Wi=null,Ko(t,n,d,1);break;case 2:case 9:if(b0(d)){an=0,Wi=null,bv(n);break}n=function(){an!==2&&an!==9||mn!==t||(an=7),Va(t)},d.then(n,n);break e;case 3:an=7;break e;case 4:an=5;break e;case 7:b0(d)?(an=0,Wi=null,bv(n)):(an=0,Wi=null,Ko(t,n,d,7));break;case 5:var x=null;switch(Bt.tag){case 26:x=Bt.memoizedState;case 5:case 27:var b=Bt;if(x?gx(x):b.stateNode.complete){an=0,Wi=null;var P=b.sibling;if(P!==null)Bt=P;else{var Q=b.return;Q!==null?(Bt=Q,tf(Q)):Bt=null}break t}}an=0,Wi=null,Ko(t,n,d,5);break;case 6:an=0,Wi=null,Ko(t,n,d,6);break;case 8:Xh(),Nn=6;break e;default:throw Error(a(462))}}NE();break}catch(re){yv(t,re)}while(!0);return cs=Gr=null,Ue.H=r,Ue.A=u,$t=s,Bt!==null?0:(mn=null,kt=0,ou(),Nn)}function NE(){for(;Bt!==null&&!St();)Tv(Bt)}function Tv(t){var n=H_(t.alternate,t,ms);t.memoizedProps=t.pendingProps,n===null?tf(t):Bt=n}function bv(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=U_(s,n,n.pendingProps,n.type,void 0,kt);break;case 11:n=U_(s,n,n.pendingProps,n.type.render,n.ref,kt);break;case 5:Jd(n);var r=n;r===$n&&(Ut?(hu(r),r.tag===5&&r.stateNode!=null&&(gn=r.stateNode)):(hu(r),Ut=!0));default:V_(s,n),n=Bt=p0(n,ms),n=H_(s,n,ms)}t.memoizedProps=t.pendingProps,n===null?tf(t):Bt=n}function Ko(t,n,s,r){cs=Gr=null,Jd(n),Io=null,nc=0;var u=n.return;try{if(_E(t,u,n,s,kt)){Nn=1,Uu(t,aa(s,t.current)),Bt=null;return}}catch(d){if(u!==null)throw Bt=u,d;Nn=1,Uu(t,aa(s,t.current)),Bt=null;return}n.flags&32768?(Ut||r===1?t=!0:ko||(kt&536870912)!==0?t=!1:($s=t=!0,(r===2||r===9||r===3||r===6)&&(r=ri.current,r!==null&&r.tag===13&&(r.flags|=16384))),Av(n,t)):tf(n)}function tf(t){var n=t;do{if((n.flags&32768)!==0){Av(n,$s);return}t=n.return;var s=SE(n.alternate,n,ms);if(s!==null){Bt=s;return}if(n=n.sibling,n!==null){Bt=n;return}Bt=n=t}while(n!==null);Nn===0&&(Nn=5)}function Av(t,n){do{var s=ME(t.alternate,t);if(s!==null){s.flags&=32767,Bt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){Bt=t;return}Bt=t=s}while(t!==null);Nn=6,Bt=null}function wv(t,n,s,r,u,d,x,b,P,Q,re,_e){t.cancelPendingCommit=null;do nf();while(bn!==0);if(($t&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));t===mn&&(Bt=mn=null,kt=0),eo=n,Ma=t,Ga=s,kh=u,gv=r,DE(t,n,s,x,b,P,_e)}}function DE(t,n,s,r,u,d,x){var b=n.lanes|n.childLanes;if(Vh=b,b|=Ad,Vi(t,s,b,r,u,d),qo=null,(s&335544064)===s?(Wo=sE(t),r=10262):(Wo=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,zE(ke,function(){return Zh(),null})):(t.callbackNode=null,t.callbackPriority=0),Gu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Ue.T,Ue.T=null,u=Pe.p,Pe.p=2,d=$t,$t|=4;try{EE(t,n,s)}finally{$t=d,Pe.p=u,Ue.T=r}}bn=1,Gu?jo=iT(x,t.containerInfo,Wo,qh,Wh,UE,Yh,Zh,LE):(qh(),Wh(),Yh())}function LE(t){if(bn!==0){var n=Ma.onRecoverableError;n(t,{componentStack:null})}}function UE(){bn===3&&(bn=0,cv(eo,Ma),bn=4)}function qh(){if(bn===1){bn=0;var t=Ma,n=eo,s=Ga,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Ue.T,Ue.T=null;var u=Pe.p;Pe.p=2;var d=$t;$t|=4;try{pc=Xu=!1,ov(n,t,s),s=op;var x=a0(t.containerInfo),b=s.focusedElem,P=s.selectionRange;if(x!==b&&b&&b.ownerDocument&&i0(b.ownerDocument.documentElement,b)){if(P!==null&&Sd(b)){var Q=P.start,re=P.end;if(re===void 0&&(re=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(re,b.value.length);else{var _e=b.ownerDocument||document,W=_e&&_e.defaultView||window;if(W.getSelection){var ne=W.getSelection(),ze=b.textContent.length,Je=Math.min(P.start,ze),Tt=P.end===void 0?Je:Math.min(P.end,ze);!ne.extend&&Je>Tt&&(x=Tt,Tt=Je,Je=x);var Z=n0(b,Je),X=n0(b,Tt);if(Z&&X&&(ne.rangeCount!==1||ne.anchorNode!==Z.node||ne.anchorOffset!==Z.offset||ne.focusNode!==X.node||ne.focusOffset!==X.offset)){var te=_e.createRange();te.setStart(Z.node,Z.offset),ne.removeAllRanges(),Je>Tt?(ne.addRange(te),ne.extend(X.node,X.offset)):(te.setEnd(X.node,X.offset),ne.addRange(te))}}}}for(_e=[],ne=b;ne=ne.parentNode;)ne.nodeType===1&&_e.push({element:ne,left:ne.scrollLeft,top:ne.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_e.length;b++){var ge=_e[b];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}al=!!rp,op=rp=null}finally{$t=d,Pe.p=u,Ue.T=r}}t.current=n,bn=2}}function Wh(){if(bn===2){bn=0;var t=Ma,n=eo,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=Ue.T,Ue.T=null;var r=Pe.p;Pe.p=2;var u=$t;$t|=4;try{tv(t,n.alternate,n)}finally{$t=u,Pe.p=r,Ue.T=s}}bn=3}}function Yh(){if(bn===4||bn===3){bn=0;var t=jo;jo=null,Qt();var n=Ma,s=eo,r=Ga,u=gv,d=(r&335544064)===r?10262:10256;if((s.subtreeFlags&d)!==0||(s.flags&d)!==0?bn=5:(bn=0,eo=Ma=null,Rv(n,n.pendingLanes)),d=n.pendingLanes,d===0&&(tr=null),le(r),s=s.stateNode,Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ot,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=Ue.T,d=Pe.p,Pe.p=2,Ue.T=null;try{for(var x=n.onRecoverableError,b=0;b<u.length;b++){var P=u[b];x(P.value,{componentStack:P.stack})}}finally{Ue.T=s,Pe.p=d}}if(u=qo,x=Wo,Wo=null,u!==null&&(qo=null,x===null&&(x=[]),t!==null))for(P=0;P<u.length;P++)s=(0,u[P])(x),s!==void 0&&t.finished.finally(s);(Ga&3)!==0&&nf(),Va(n),d=n.pendingLanes,(r&261930)!==0&&(d&42)!==0?n===Ju?vc++:(vc=0,Ju=n):(vc=0,Ju=null),xc(0)}}function Rv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,$l(n)))}function nf(){return jo!==null&&(jo.skipTransition(),jo=null),qh(),Wh(),Yh(),Zh()}function Zh(){if(bn!==5)return!1;var t=Ma,n=Vh;Vh=0;var s=le(Ga),r=Ue.T,u=Pe.p;try{Pe.p=32>s?32:s,Ue.T=null,s=kh,kh=null;var d=Ma,x=Ga;if(bn=0,eo=Ma=null,Ga=0,($t&6)!==0)throw Error(a(331));var b=$t;if($t|=4,hv(d.current),uv(d,d.current,x,s),$t=b,xc(0,!1),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ot,d)}catch{}return!0}finally{Pe.p=u,Ue.T=r,Rv(t,n)}}function Cv(t,n,s){n=aa(s,n),n=dh(t.stateNode,n,2),t=Ws(t,n,2),t!==null&&(La(t,2),Va(t))}function sn(t,n,s){if(t.tag===3)Cv(t,t,s);else for(;n!==null;){if(n.tag===3){Cv(n,t,s);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tr===null||!tr.has(r))){t=aa(s,t),s=b_(2),r=Ws(n,s,2),r!==null&&(A_(s,r,n,t),La(r,2),Va(r));break}}n=n.return}}function Kh(t,n,s){var r=t.pingCache;if(r===null){r=t.pingCache=new AE;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(s)||(Hh=!0,u.add(s),t=OE.bind(null,t,n,s),n.then(t,t))}function OE(t,n,s){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,mn===t&&(kt&s)===s&&((Nn===4||Nn===3&&(kt&62914560)===kt&&300>j()-Zu)&&($t&2)===0?Zo(t,0):Yu|=s,Xo===kt&&(Xo=0)),Va(t)}function Nv(t,n){n===0&&(n=Da()),t=Br(t,n),t!==null&&(La(t,n),Va(t))}function IE(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Nv(t,s)}function PE(t,n){var s=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(n),Nv(t,s)}function zE(t,n){return Xe(t,n)}var Qo=null,Jo=null,Qh=!1,af=!1,Jh=!1,ir=0;function Va(t){t!==Jo&&t.next===null&&(Jo===null?Qo=Jo=t:Jo=Jo.next=t),af=!0,Qh||(Qh=!0,FE())}function xc(t,n){if(!Jh&&af){Jh=!0;do for(var s=!1,r=Qo;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var d=0;else{var x=r.suspendedLanes,b=r.pingedLanes;d=(1<<31-Qn(42|t)+1)-1,d&=u&~(x&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Ov(r,d))}else d=kt,d=Gi(r,r===mn?d:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(d&3)===0||ta(r,d)||(s=!0,Ov(r,d));r=r.next}while(s);Jh=!1}}function BE(){Dv()}function Dv(){af=Qh=!1;var t=0;ir!==0&&KE()&&(t=ir);for(var n=j(),s=null,r=Qo;r!==null;){var u=r.next,d=Lv(r,n);d===0?(r.next=null,s===null?Qo=u:s.next=u,u===null&&(Jo=s)):(s=r,(t!==0||(d&3)!==0)&&(af=!0)),r=u}bn!==0&&bn!==5||xc(t),ir!==0&&(ir=0)}function Lv(t,n){for(var s=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Qn(d),b=1<<x,P=u[x];P===-1?((b&s)===0||(b&r)!==0)&&(u[x]=Os(b,n)):P<=n&&(t.expiredLanes|=b),d&=~b}if(n=mn,s=kt,s=Gi(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,s===0||t===n&&(an===2||an===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&At(r),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||ta(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(r!==null&&At(r),le(s)){case 2:case 8:s=Se;break;case 32:s=ke;break;case 268435456:s=mt;break;default:s=ke}return r=Uv.bind(null,t),s=Xe(s,r),t.callbackPriority=n,t.callbackNode=s,n}return r!==null&&r!==null&&At(r),t.callbackPriority=2,t.callbackNode=null,2}function Uv(t,n){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(nf()&&t.callbackNode!==s)return null;var r=kt;return r=Gi(t,t===mn?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(vv(t,r,n),Lv(t,j()),t.callbackNode!=null&&t.callbackNode===s?Uv.bind(null,t):null)}function Ov(t,n){if(nf())return null;vv(t,n,!0)}function FE(){JE(function(){($t&6)!==0?Xe(he,BE):Dv()})}function $h(){if(ir===0){var t=Xr;t===0&&(t=Ja,Ja<<=1,(Ja&261888)===0&&(Ja=256)),ir=t}return ir}function Iv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ur(t)}function HE(t,n,s,r,u){if(n==="submit"&&s&&s.stateNode===u){var d=Iv((u[Ie]||null).action),x=r.submitter;x&&(n=(n=x[Ie]||null)?Iv(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var b=new Or("action","action",null,r,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ir!==0){var P=new FormData(u,x);oh(s,{pending:!0,data:P,method:u.method,action:d},null,P)}}else typeof d=="function"&&(b.preventDefault(),P=new FormData(u,x),oh(s,{pending:!0,data:P,method:u.method,action:d},d,P))},currentTarget:u}]})}}for(var ep=0;ep<bd.length;ep++){var tp=bd[ep],GE=tp.toLowerCase(),VE=tp[0].toUpperCase()+tp.slice(1);va(GE,"on"+VE)}va(o0,"onAnimationEnd"),va(l0,"onAnimationIteration"),va(c0,"onAnimationStart"),va("dblclick","onDoubleClick"),va("focusin","onFocus"),va("focusout","onBlur"),va(QM,"onTransitionRun"),va(JM,"onTransitionStart"),va($M,"onTransitionCancel"),va(u0,"onTransitionEnd"),wn("onMouseEnter",["mouseout","mouseover"]),wn("onMouseLeave",["mouseout","mouseover"]),wn("onPointerEnter",["pointerout","pointerover"]),wn("onPointerLeave",["pointerout","pointerover"]),Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yc));function Pv(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var r=t[s],u=r.event;r=r.listeners;e:{var d=void 0;if(n)for(var x=r.length-1;0<=x;x--){var b=r[x],P=b.instance,Q=b.currentTarget;if(b=b.listener,P!==d&&u.isPropagationStopped())break e;d=b,u.currentTarget=Q;try{d(u)}catch(re){ru(re)}u.currentTarget=null,d=P}else for(x=0;x<r.length;x++){if(b=r[x],P=b.instance,Q=b.currentTarget,b=b.listener,P!==d&&u.isPropagationStopped())break e;d=b,u.currentTarget=Q;try{d(u)}catch(re){ru(re)}u.currentTarget=null,d=P}}}}function Ft(t,n){var s=n[dt];s===void 0&&(s=n[dt]=new Set);var r=t+"__bubble";s.has(r)||(zv(n,t,2,!1),s.add(r))}function np(t,n,s){var r=0;n&&(r|=4),zv(s,t,r,n)}var sf="_reactListening"+Math.random().toString(36).slice(2);function ip(t){if(!t[sf]){t[sf]=!0,ma.forEach(function(s){s!=="selectionchange"&&(kE.has(s)||np(s,!1,t),np(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[sf]||(n[sf]=!0,np("selectionchange",!1,n))}}function zv(t,n,s,r){switch(Ax(n)){case 2:var u=IT;break;case 8:u=PT;break;default:u=Ep}s=u.bind(null,n,s,t),u=void 0,!rt||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,s,{capture:!0,passive:u}):t.addEventListener(n,s,!0):u!==void 0?t.addEventListener(n,s,{passive:u}):t.addEventListener(n,s,!1)}function ap(t,n,s,r,u){var d=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var b=r.stateNode.containerInfo;if(b===u)break;if(x===4)for(x=r.return;x!==null;){var P=x.tag;if((P===3||P===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;b!==null;){if(x=et(b),x===null)return;if(P=x.tag,P===5||P===6||P===26||P===27){r=d=x;continue e}b=b.parentNode}}r=r.return}ht(function(){var Q=d,re=Ee(s),_e=[];e:{var W=f0.get(t);if(W!==void 0){var ne=Or,ze=t;switch(t){case"keypress":if(jn(s)===0)break e;case"keydown":case"keyup":ne=wM;break;case"focusin":ze="focus",ne=md;break;case"focusout":ze="blur",ne=md;break;case"beforeblur":case"afterblur":ne=md;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=mM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=LM;break;case o0:case l0:case c0:ne=vM;break;case u0:ne=OM;break;case"scroll":case"scrollend":ne=iu;break;case"wheel":ne=PM;break;case"copy":case"cut":case"paste":ne=yM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=Vg;break;case"submit":ne=NM;break;case"toggle":case"beforetoggle":ne=BM}var Je=(n&4)!==0,Tt=!Je&&(t==="scroll"||t==="scrollend"),Z=Je?W!==null?W+"Capture":null:W;Je=[];for(var X=Q,te;X!==null;){var ge=X;if(te=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||te===null||Z===null||(ge=Mt(X,Z),ge!=null&&Je.push(Sc(X,ge,te))),Tt)break;X=X.return}0<Je.length&&(W=new ne(W,ze,null,s,re),_e.push({event:W,listeners:Je}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",ne&&s!==pe&&(ze=s.relatedTarget||s.fromElement)&&(et(ze)||ze[it]))break e;(W||ne)&&(ze=re.window===re?re:(ne=re.ownerDocument)?ne.defaultView||ne.parentWindow:window,W?(ne=s.relatedTarget||s.toElement,W=Q,ne=ne?et(ne):null,ne!==null&&(Tt=c(ne),Je=ne.tag,ne!==Tt||Je!==5&&Je!==27&&Je!==6)&&(ne=null)):(W=null,ne=Q),W!==ne&&(Je=Hg,ge="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Je=Vg,ge="onPointerLeave",Z="onPointerEnter",X="pointer"),Tt=W==null?ze:Lt(W),te=ne==null?ze:Lt(ne),ze=new Je(ge,X+"leave",W,s,re),ze.target=Tt,ze.relatedTarget=te,ge=null,et(re)===Q&&(Je=new Je(Z,X+"enter",ne,s,re),Je.target=te,Je.relatedTarget=Tt,ge=Je),Tt=ge,Je=W&&ne?z(W,ne,XE):null,W!==null&&Bv(_e,ze,W,Je,!1),ne!==null&&Tt!==null&&Bv(_e,Tt,ne,Je,!0)))}e:{if(W=Q?Lt(Q):window,ne=W.nodeName&&W.nodeName.toLowerCase(),ne==="select"||ne==="input"&&W.type==="file")var Ze=Kg;else if(Yg(W))if(Qg)Ze=YM;else{Ze=qM;var Xt=jM}else ne=W.nodeName,!ne||ne.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?Q&&Eo(Q.elementType)&&(Ze=Kg):Ze=WM;if(Ze&&(Ze=Ze(t,Q))){Zg(_e,Ze,s,re);break e}Xt&&Xt(t,W,Q)}switch(Xt=Q?Lt(Q):window,t){case"focusin":(Yg(Xt)||Xt.contentEditable==="true")&&(Ao=Xt,Md=Q,Kl=null);break;case"focusout":Kl=Md=Ao=null;break;case"mousedown":Ed=!0;break;case"contextmenu":case"mouseup":case"dragend":Ed=!1,s0(_e,s,re);break;case"selectionchange":if(KM)break;case"keydown":case"keyup":s0(_e,s,re)}var st;if(_d)e:{switch(t){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else bo?qg(t,s)&&(pt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(pt="onCompositionStart");pt&&(kg&&s.locale!=="ko"&&(bo||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&bo&&(st=ki()):(gt=re,yn="value"in gt?gt.value:gt.textContent,bo=!0)),Xt=rf(Q,pt),0<Xt.length&&(pt=new Gg(pt,t,null,s,re),_e.push({event:pt,listeners:Xt}),st?pt.data=st:(st=Wg(s),st!==null&&(pt.data=st)))),(st=HM?GM(t,s):VM(t,s))&&(pt=rf(Q,"onBeforeInput"),0<pt.length&&(Xt=new Gg("onBeforeInput","beforeinput",null,s,re),_e.push({event:Xt,listeners:pt}),Xt.data=st)),HE(_e,t,Q,s,re)}Pv(_e,n)})}function Sc(t,n,s){return{instance:t,listener:n,currentTarget:s}}function rf(t,n){for(var s=n+"Capture",r=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Mt(t,s),u!=null&&r.unshift(Sc(t,u,d)),u=Mt(t,n),u!=null&&r.push(Sc(t,u,d))),t.tag===3)return r;t=t.return}return[]}function XE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Bv(t,n,s,r,u){for(var d=n._reactName,x=[];s!==null&&s!==r;){var b=s,P=b.alternate,Q=b.stateNode;if(b=b.tag,P!==null&&P===r)break;b!==5&&b!==26&&b!==27||Q===null||(P=Q,u?(Q=Mt(s,d),Q!=null&&x.unshift(Sc(s,Q,P))):u||(Q=Mt(s,d),Q!=null&&x.push(Sc(s,Q,P)))),s=s.return}x.length!==0&&t.push({event:n,listeners:x})}var jE=/\r\n?/g,qE=/\u0000|\uFFFD/g;function Fv(t){return(typeof t=="string"?t:""+t).replace(jE,`
`).replace(qE,"")}function Hv(t,n){return n=Fv(n),Fv(t)===n}function rn(t,n,s,r,u,d){switch(s){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||zs(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&zs(t,""+r);else return;break;case"className":ts(t,"class",r);break;case"tabIndex":ts(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ts(t,s,r);break;case"style":jl(t,r,d);return;case"data":if(n!=="object"){ts(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(s);break}r=Ur(r),t.setAttribute(s,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(n!=="input"&&rn(t,n,"name",u.name,u,null),rn(t,n,"formEncType",u.formEncType,u,null),rn(t,n,"formMethod",u.formMethod,u,null),rn(t,n,"formTarget",u.formTarget,u,null)):(rn(t,n,"encType",u.encType,u,null),rn(t,n,"method",u.method,u,null),rn(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(s);break}r=Ur(r),t.setAttribute(s,r);break;case"onClick":r!=null&&(t.onclick=ee);return;case"onScroll":r!=null&&Ft("scroll",t);return;case"onScrollEnd":r!=null&&Ft("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(s=r.__html,s!=null){if(u.children!=null)throw Error(a(60));(d!=null?d.__html:void 0)!==s&&(t.innerHTML=s)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}s=Ur(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(s,r):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":r===!0?t.setAttribute(s,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(s,r):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(s,r):t.removeAttribute(s);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(s):t.setAttribute(s,r);break;case"popover":Ft("beforetoggle",t),Ft("toggle",t),es(t,"popover",r);break;case"xlinkActuate":na(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":na(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":na(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":na(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":na(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":na(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":na(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":na(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":na(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":es(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")s=nu.get(s)||s,es(t,s,r);else return}zt=!0}function sp(t,n,s,r,u,d){switch(s){case"style":jl(t,r,d);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(s=r.__html,s!=null){if(u.children!=null)throw Error(a(60));(d!=null?d.__html:void 0)!==s&&(t.innerHTML=s)}}break;case"children":if(typeof r=="string")zs(t,r);else if(typeof r=="number"||typeof r=="bigint")zs(t,""+r);else return;break;case"onScroll":r!=null&&Ft("scroll",t);return;case"onScrollEnd":r!=null&&Ft("scrollend",t);return;case"onClick":r!=null&&(t.onclick=ee);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!en.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),d=s.slice(2,u?s.length-7:void 0),n=t[Ie]||null,n=n!=null?n[s]:null,typeof n=="function"&&t.removeEventListener(d,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(d,r,u);break e}zt=!0,s in t?t[s]=r:r===!0?t.setAttribute(s,""):es(t,s,r)}return}zt=!0}function ci(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ft("error",t),Ft("load",t);var r=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var x=s[d];if(x!=null)switch(d){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:rn(t,n,d,x,s,null)}}u&&rn(t,n,"srcSet",s.srcSet,s,null),r&&rn(t,n,"src",s.src,s,null);return;case"input":Ft("invalid",t);var b=d=x=u=null,P=null,Q=null;for(r in s)if(s.hasOwnProperty(r)){var re=s[r];if(re!=null)switch(r){case"name":u=re;break;case"type":x=re;break;case"checked":P=re;break;case"defaultChecked":Q=re;break;case"value":d=re;break;case"defaultValue":b=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(a(137,n));break;default:rn(t,n,r,re,s,null)}}Vl(t,d,b,P,Q,x,u,!1);return;case"select":Ft("invalid",t),r=x=d=null;for(u in s)if(s.hasOwnProperty(u)&&(b=s[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":x=b;break;case"multiple":r=b;default:rn(t,n,u,b,s,null)}n=d,s=x,t.multiple=!!r,n!=null?is(t,!!r,n,!1):s!=null&&is(t,!!r,s,!0);return;case"textarea":Ft("invalid",t),d=u=r=null;for(x in s)if(s.hasOwnProperty(x)&&(b=s[x],b!=null))switch(x){case"value":r=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:rn(t,n,x,b,s,null)}Lr(t,r,u,d);return;case"option":for(P in s)if(s.hasOwnProperty(P)&&(r=s[P],r!=null))switch(P){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:rn(t,n,P,r,s,null)}return;case"dialog":Ft("beforetoggle",t),Ft("toggle",t),Ft("cancel",t),Ft("close",t);break;case"iframe":case"object":Ft("load",t);break;case"video":case"audio":for(r=0;r<yc.length;r++)Ft(yc[r],t);break;case"image":Ft("error",t),Ft("load",t);break;case"details":Ft("toggle",t);break;case"embed":case"source":case"link":Ft("error",t),Ft("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in s)if(s.hasOwnProperty(Q)&&(r=s[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:rn(t,n,Q,r,s,null)}return;default:if(Eo(n)){for(re in s)s.hasOwnProperty(re)&&(r=s[re],r!==void 0&&sp(t,n,re,r,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(r=s[b],r!=null&&rn(t,n,b,r,s,null))}var WE={};function YE(t,n,s,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,b=null,P=null,Q=null,re=null;for(ne in s){var _e=s[ne];if(s.hasOwnProperty(ne)&&_e!=null)switch(ne){case"checked":break;case"value":break;case"defaultValue":P=_e;default:r.hasOwnProperty(ne)||rn(t,n,ne,null,r,_e)}}for(var W in r){var ne=r[W];if(_e=s[W],r.hasOwnProperty(W)&&(ne!=null||_e!=null))switch(W){case"type":ne!==_e&&(zt=!0),d=ne;break;case"name":ne!==_e&&(zt=!0),u=ne;break;case"checked":ne!==_e&&(zt=!0),Q=ne;break;case"defaultChecked":ne!==_e&&(zt=!0),re=ne;break;case"value":ne!==_e&&(zt=!0),x=ne;break;case"defaultValue":ne!==_e&&(zt=!0),b=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(a(137,n));break;default:ne!==_e&&rn(t,n,W,ne,r,_e)}}Li(t,x,b,P,Q,re,d,u);return;case"select":ne=x=b=W=null;for(d in s)if(P=s[d],s.hasOwnProperty(d)&&P!=null)switch(d){case"value":break;case"multiple":ne=P;default:r.hasOwnProperty(d)||rn(t,n,d,null,r,P)}for(u in r)if(d=r[u],P=s[u],r.hasOwnProperty(u)&&(d!=null||P!=null))switch(u){case"value":d!==P&&(zt=!0),W=d;break;case"defaultValue":d!==P&&(zt=!0),b=d;break;case"multiple":d!==P&&(zt=!0),x=d;default:d!==P&&rn(t,n,u,d,r,P)}n=b,s=x,r=ne,W!=null?is(t,!!s,W,!1):!!r!=!!s&&(n!=null?is(t,!!s,n,!0):is(t,!!s,s?[]:"",!1));return;case"textarea":ne=W=null;for(b in s)if(u=s[b],s.hasOwnProperty(b)&&u!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:rn(t,n,b,null,r,u)}for(x in r)if(u=r[x],d=s[x],r.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":u!==d&&(zt=!0),W=u;break;case"defaultValue":u!==d&&(zt=!0),ne=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&rn(t,n,x,u,r,d)}Dr(t,W,ne);return;case"option":for(var ze in s)if(W=s[ze],s.hasOwnProperty(ze)&&W!=null&&!r.hasOwnProperty(ze))switch(ze){case"selected":t.selected=!1;break;default:rn(t,n,ze,null,r,W)}for(P in r)if(W=r[P],ne=s[P],r.hasOwnProperty(P)&&W!==ne&&(W!=null||ne!=null))switch(P){case"selected":W!==ne&&(zt=!0),t.selected=W&&typeof W!="function"&&typeof W!="symbol";break;default:rn(t,n,P,W,r,ne)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in s)W=s[Je],s.hasOwnProperty(Je)&&W!=null&&!r.hasOwnProperty(Je)&&rn(t,n,Je,null,r,W);for(Q in r)if(W=r[Q],ne=s[Q],r.hasOwnProperty(Q)&&W!==ne&&(W!=null||ne!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(a(137,n));break;default:rn(t,n,Q,W,r,ne)}return;default:if(Eo(n)){for(var Tt in s)W=s[Tt],s.hasOwnProperty(Tt)&&W!==void 0&&!r.hasOwnProperty(Tt)&&sp(t,n,Tt,void 0,r,W);for(re in r)W=r[re],ne=s[re],!r.hasOwnProperty(re)||W===ne||W===void 0&&ne===void 0||sp(t,n,re,W,r,ne);return}}for(var Z in s)W=s[Z],s.hasOwnProperty(Z)&&W!=null&&!r.hasOwnProperty(Z)&&rn(t,n,Z,null,r,W);for(_e in r)W=r[_e],ne=s[_e],!r.hasOwnProperty(_e)||W===ne||W==null&&ne==null||rn(t,n,_e,W,r,ne)}function Gv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ZE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),r=0;r<s.length;r++){var u=s[r],d=u.transferSize,x=u.initiatorType,b=u.duration;if(d&&b&&Gv(x)){for(x=0,b=u.responseEnd,r+=1;r<s.length;r++){var P=s[r],Q=P.startTime;if(Q>b)break;var re=P.transferSize,_e=P.initiatorType;re&&Gv(_e)&&(P=P.responseEnd,x+=re*(P<b?1:(b-Q)/(P-Q)))}if(--r,n+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var rp=null,op=null;function Mc(t){return t.nodeType===9?t:t.ownerDocument}function Vv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Xv(t,n,s,r){return s=Mc(s).createElement(t),s[we]=r,s[Ie]=n,ci(s,t,n),nn(s),s}function lp(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cp=null;function KE(){var t=window.event;return t&&t.type==="popstate"?t===cp?!1:(cp=t,!0):(cp=null,!1)}var up=typeof setTimeout=="function"?setTimeout:void 0,QE=typeof clearTimeout=="function"?clearTimeout:void 0,jv=typeof Promise=="function"?Promise:void 0,qv=typeof requestAnimationFrame=="function"?requestAnimationFrame:up,JE=typeof queueMicrotask=="function"?queueMicrotask:typeof jv<"u"?function(t){return jv.resolve(null).then(t).catch($E)}:up;function $E(t){setTimeout(function(){throw t})}function ar(t){return t==="head"}function Wv(t,n){var s=n,r=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(r===0){t.removeChild(u),sl(n);return}r--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")r++;else if(s==="html")vp(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,vp(s);for(var d=s.firstChild;d;){var x=d.nextSibling,b=d.nodeName;d[Kt]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=x}}else s==="body"&&vp(t.ownerDocument.body);s=u}while(s);sl(n)}function Yv(t,n){var s=t;t=0;do{var r=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),r&&r.nodeType===8)if(s=r.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=r}while(s)}function Zv(t,n,s){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,s!=null&&(t.style.viewTransitionClass=s),s=getComputedStyle(t),s.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var d=n[u];0<d.width&&0<d.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+s.paddingTop,t.marginBottom="-"+s.paddingBottom)}}function Kv(t,n){t=t.style,n=n.style;var s=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=s==null||typeof s=="boolean"?"":(""+s).trim(),s=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=s==null||typeof s=="boolean"?"":(""+s).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(s=n.display,t.display=s==null||typeof s=="boolean"?"":s,s=n.margin,s!=null?t.margin=s:(s=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=s==null||typeof s=="boolean"?"":s,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function eT(t,n,s){return s=s.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=s.innerHeight&&t.left<=s.innerWidth}}function fp(t){var n=t.getBoundingClientRect(),s=getComputedStyle(t);return eT(n,s,t)}function tT(t){return t.documentElement.clientHeight}function nT(t){this.addEventListener("load",t),this.addEventListener("error",t)}function iT(t,n,s,r,u,d,x,b,P){var Q=n.nodeType===9?n:n.ownerDocument;try{var re=Q.startViewTransition({update:function(){var W=Q.defaultView,ne=W.navigation&&W.navigation.transition,ze=Q.fonts.status;r();var Je=[];if(ze==="loaded"&&(tT(Q),Q.fonts.status==="loading"&&Je.push(Q.fonts.ready)),ze=Je.length,t!==null)for(var Tt=t.suspenseyImages,Z=0,X=0;X<Tt.length;X++){var te=Tt[X];if(!te.complete){var ge=te.getBoundingClientRect();if(0<ge.bottom&&0<ge.right&&ge.top<W.innerHeight&&ge.left<W.innerWidth){if(Z+=_x(te),Z>cf){Je.length=ze;break}te=new Promise(nT.bind(te)),Je.push(te)}}}if(0<Je.length)return W=Promise.race([Promise.all(Je),new Promise(function(Ze){return setTimeout(Ze,500)})]).then(u,u),(ne?Promise.allSettled([ne.finished,W]):W).then(d,d);if(u(),ne)return ne.finished.then(d,d);d()},types:s});Q.__reactViewTransition=re;var _e=[];return re.ready.then(function(){for(var W=Q.documentElement.getAnimations({subtree:!0}),ne=0;ne<W.length;ne++){var ze=W[ne],Je=ze.effect,Tt=Je.pseudoElement;if(Tt!=null&&Tt.startsWith("::view-transition")){_e.push(ze),ze=Je.getKeyframes();for(var Z=Tt=void 0,X=!0,te=0;te<ze.length;te++){var ge=ze[te],Ze=ge.width;if(Tt===void 0)Tt=Ze;else if(Tt!==Ze){X=!1;break}if(Ze=ge.height,Z===void 0)Z=Ze;else if(Z!==Ze){X=!1;break}delete ge.width,delete ge.height,ge.transform==="none"&&delete ge.transform}X&&Tt!==void 0&&Z!==void 0&&(Je.setKeyframes(ze),X=getComputedStyle(Je.target,Je.pseudoElement),X.width!==Tt||X.height!==Z)&&(X=ze[0],X.width=Tt,X.height=Z,X=ze[ze.length-1],X.width=Tt,X.height=Z,Je.setKeyframes(ze))}}x()},function(W){Q.__reactViewTransition===re&&(Q.__reactViewTransition=null);try{if(typeof W=="object"&&W!==null)switch(W.name){case"InvalidStateError":(W.message==="View transition was skipped because document visibility state is hidden."||W.message==="Skipping view transition because document visibility state has become hidden."||W.message==="Skipping view transition because viewport size changed."||W.message==="Transition was aborted because of invalid state")&&(W=null)}W!==null&&P(W)}finally{r(),u(),x()}}),re.finished.finally(function(){for(var W=0;W<_e.length;W++)_e[W].cancel();Q.__reactViewTransition===re&&(Q.__reactViewTransition=null),b()}),re}catch{return r(),u(),x(),null}}function to(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}to.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},to.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,s=t.getAnimations({subtree:!0}),r=[],u=0;u<s.length;u++){var d=s[u].effect;d!==null&&d.target===t&&d.pseudoElement===n&&r.push(s[u])}return r},to.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Qv(t){return{name:t,group:new to("group",t),imagePair:new to("image-pair",t),old:new to("old",t),new:new to("new",t)}}function Ki(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Ki.prototype.addEventListener=function(t,n,s){var r=null,u=null;if(!(s!=null&&typeof s!="boolean"&&(r=s.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var d=this._eventListeners;if($v(d,t,n,s)===-1){var x=this,b=n;s!=null&&typeof s!="boolean"&&s.once===!0&&(b=function(P){x.removeEventListener(t,n,s),typeof n=="function"?n.call(this,P):n.handleEvent(P)}),r!==null&&(u=x.removeEventListener.bind(x,t,n,s),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=$o(s),d.push({type:t,listener:n,optionsOrUseCapture:s,attachedListener:b,cleanup:u}),g(this._fragmentFiber.child,!1,aT,t,b,r)}this._eventListeners=d}};function aT(t,n,s,r){return M(t).addEventListener(n,s,r),!1}Ki.prototype.removeEventListener=function(t,n,s){var r=this._eventListeners;if(r!==null&&(n=$v(r,t,n,s),n!==-1)){var u=r[n];s=u.attachedListener;var d=u.cleanup;u=$o(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,sT,t,s,u),r.splice(n,1),d!==null&&d()}};function sT(t,n,s,r){return M(t).removeEventListener(n,s,r),!1}function $o(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Jv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function $v(t,n,s,r){if(t.length===0)return-1;r=Jv(r);for(var u=0;u<t.length;u++){var d=t[u];if(d.type===n&&d.listener===s&&Jv(d.optionsOrUseCapture)===r)return u}return-1}Ki.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var s=this._eventListeners;if(s!==null&&0<s.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(s)for(var u=0;u<s.length;u++){var d=s[u];r.addEventListener(d.type,d.attachedListener,$o(d.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),s)for(u=0;u<s.length;u++)d=s[u],r.removeEventListener(d.type,d.attachedListener,$o(d.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},Ki.prototype.focus=function(t){g(this._fragmentFiber.child,!0,ex,t,void 0,void 0)};function ex(t,n){return t.tag===6?!1:(t=M(t),_T(t,n))}Ki.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,dp,n,void 0,void 0);for(var s=n.length-1;0<=s&&!ex(n[s],t);s--);};function dp(t,n){return n.push(t),!1}Ki.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=M(t),t=Mc(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,rT,t,void 0,void 0))};function rT(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}Ki.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,oT,t,void 0,void 0)};function oT(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}Ki.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,lT,t,void 0,void 0);for(var s=n=0;s<Ea.length;s++){var r=Ea[s];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ea[n++]=r}Ea.length=n}};function lT(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Ea=[],hp=!1;function cT(t,n,s){Ea.push({fragmentInstance:t,observer:n,instance:s}),hp||(hp=!0,vT(function(){hp=!1;var r=Ea;Ea=[];for(var u=0;u<r.length;u++){var d=r[u];d.observer.unobserve(d.instance)}}))}Ki.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,uT,t,void 0,void 0),t};function uT(t,n){if(t.tag===6){t=t.stateNode;var s=t.ownerDocument.createRange();s.selectNodeContents(t),n.push.apply(n,s.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}Ki.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},Ki.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var s=[];g(this._fragmentFiber.child,!1,dp,s,void 0,void 0);var r=M(n);if(s.length===0){if(s=r,y(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(s=n)}n=this._fragmentFiber;var u=r=s.compareDocumentPosition(t);return s===t?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(s=E(n)[1],s===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(s).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(s[0]),u=M(s[s.length-1]);var d=y(this._fragmentFiber)?n.parentElement:r;if(d==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=d.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,d=d.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(t),b=u.compareDocumentPosition(t),P=x&Node.DOCUMENT_POSITION_CONTAINED_BY||b&Node.DOCUMENT_POSITION_CONTAINED_BY;return b=r&&d&&x&Node.DOCUMENT_POSITION_FOLLOWING&&b&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||d&&u===t||P||b?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!d&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||fT(n,this._fragmentFiber,s[0],s[s.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function fT(t,n,s,r,u){var d=et(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(s=!!d)e:{for(;d!==null;){if(d.tag===7&&(d===n||d.alternate===n)){s=!0;break e}d=d.return}s=!1}return s}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(d===null)return d=u.ownerDocument,u===d||u===d.documentElement||u===d.body;e:{for(d=n,n=v(n);d!==null;){if(!(d.tag!==5&&d.tag!==3&&d.tag!==27||d!==n&&d.alternate!==n)){d=!0;break e}d=d.return}d=!1}return d}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!d)&&!(n=d===s)&&(n=z(s,d,H),n===null?n=!1:(g(n,!0,L,d,s),d=S,S=null,n=d!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!d)&&!(n=d===r)&&(n=z(r,d,H),n===null?n=!1:(g(n,!0,R,d,r),d=S,I=S=null,n=d!==null)),n):!1}function tx(t,n){var s=t.ownerDocument.createRange();s.selectNodeContents(t),t=s.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Ki.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(a(566));var n=[];g(this._fragmentFiber.child,!1,dp,n,void 0,void 0);var s=t!==!1;if(n.length===0){var r=E(this._fragmentFiber);if(r=s?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),tx(t,s);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){s="host"in r?r.host:null,s!==null&&s.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=s?n.length-1:0;r!==(s?-1:n.length);){var u=n[r];u.tag===6?(u=M(u),tx(u,s)):M(u).scrollIntoView(t),r+=s?-1:1}};function dT(t,n){return t=M(t),nx(t,n),!1}function nx(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function ix(t,n){var s=n._eventListeners;if(s!==null)for(var r=0;r<s.length;r++){var u=s[r];t.addEventListener(u.type,u.attachedListener,$o(u.optionsOrUseCapture))}t.nodeType!==3&&(s=n._observers,s!==null&&s.forEach(function(d){for(var x=0,b=0;b<Ea.length;b++){var P=Ea[b];(P.fragmentInstance!==n||P.observer!==d||P.instance!==t)&&(Ea[x++]=P)}Ea.length=x,d.observe(t)}),nx(t,n))}function hT(t,n){var s=n._eventListeners;if(s!==null)for(var r=0;r<s.length;r++){var u=s[r];t.removeEventListener(u.type,u.attachedListener,$o(u.optionsOrUseCapture))}t.nodeType!==3&&(s=n._observers,s!==null&&s.forEach(function(d){typeof d.rootMargin=="string"?cT(n,d,t):d.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function pp(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":pp(s),Dt(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function pT(t,n,s,r){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Kt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=ca(t.nextSibling),t===null)break}return null}function mT(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=ca(t.nextSibling),t===null))return null;return t}function ax(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ca(t.nextSibling),t===null))return null;return t}function mp(t){return t.data==="$?"||t.data==="$~"}function gp(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function gT(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var r=function(){n(),s.removeEventListener("DOMContentLoaded",r)};s.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function ca(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var _p=null;function sx(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return ca(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function rx(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function _T(t,n){function s(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",s,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",s,!0)}return r}function vT(t){qv(function(){qv(function(n){return t(n)})})}function ox(t,n,s){switch(n=Mc(s),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function lx(t,n,s){for(var r in s){var u=s[r];s.hasOwnProperty(r)&&u!=null&&rn(t,n,r,null,WE,u)}s.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ee&&(t.onclick=null),Dt(t)}function vp(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Dt(t)}var ua=new Map,cx=new Set;function Ec(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var gs=Pe.d;Pe.d={f:xT,r:yT,D:ST,C:MT,L:ET,m:TT,X:AT,S:bT,M:wT};function xT(){var t=gs.f(),n=$u();return t||n}function yT(t){var n=hn(t);n!==null&&n.tag===5&&n.type==="form"?f_(n):gs.r(t)}var el=typeof document>"u"?null:document;function ux(t,n,s){var r=el;if(r&&typeof n=="string"&&n){var u=pi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),cx.has(u)||(cx.add(u),t={rel:t,crossOrigin:s,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),ci(n,"link",t),nn(n),r.head.appendChild(n)))}}function ST(t){gs.D(t),ux("dns-prefetch",t,null)}function MT(t,n){gs.C(t,n),ux("preconnect",t,n)}function ET(t,n,s){gs.L(t,n,s);var r=el;if(r&&t&&n){var u='link[rel="preload"][as="'+pi(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+pi(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+pi(s.imageSizes)+'"]')):u+='[href="'+pi(t)+'"]';var d=u;switch(n){case"style":d=tl(t);break;case"script":d=nl(t)}if(!(ua.has(d)||(t=O({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),ua.set(d,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(Tc(d))||n==="script"&&r.querySelector(bc(d))))){var x=r.createElement("link");ci(x,"link",t),n==="style"&&(x[qt]=!0,x.onload=x.onerror=function(){Xn(x)}),nn(x),r.head.appendChild(x)}}}function TT(t,n){gs.m(t,n);var s=el;if(s&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pi(r)+'"][href="'+pi(t)+'"]',d=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=nl(t)}if(!ua.has(d)&&(t=O({rel:"modulepreload",href:t},n),ua.set(d,t),s.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(bc(d)))return}r=s.createElement("link"),ci(r,"link",t),nn(r),s.head.appendChild(r)}}}function bT(t,n,s){gs.S(t,n,s);var r=el;if(r&&t){var u=vn(r).hoistableStyles,d=tl(t);n=n||"default";var x=u.get(d);if(!x){var b={loading:0,preload:null};if(x=r.querySelector(Tc(d)))b.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":n},s),(s=ua.get(d))&&xp(t,s);var P=x=r.createElement("link");nn(P),ci(P,"link",t),P._p=new Promise(function(Q,re){P.onload=Q,P.onerror=re}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,of(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:b},u.set(d,x)}}}function AT(t,n){gs.X(t,n);var s=el;if(s&&t){var r=vn(s).hoistableScripts,u=nl(t),d=r.get(u);d||(d=s.querySelector(bc(u)),d||(t=O({src:t,async:!0},n),(n=ua.get(u))&&yp(t,n),d=s.createElement("script"),nn(d),ci(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(u,d))}}function wT(t,n){gs.M(t,n);var s=el;if(s&&t){var r=vn(s).hoistableScripts,u=nl(t),d=r.get(u);d||(d=s.querySelector(bc(u)),d||(t=O({src:t,async:!0,type:"module"},n),(n=ua.get(u))&&yp(t,n),d=s.createElement("script"),nn(d),ci(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(u,d))}}function fx(t,n,s,r){var u=(u=U.current)?Ec(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(s=tl(s.href),n=vn(u).hoistableStyles,r=n.get(s),r||(r={type:"style",instance:null,count:0,state:null},n.set(s,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=tl(s.href);var d=vn(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(Tc(t)))?d._p||(x.instance=d,x.state.loading=5):(d=ua.get(t),d||(d={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ua.set(t,d)),RT(u,t,d,x.state))),n&&r===null)throw Error(a(528,""));return x}if(n&&r!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(s=nl(s),n=vn(u).hoistableScripts,r=n.get(s),r||(r={type:"script",instance:null,count:0,state:null},n.set(s,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function tl(t){return'href="'+pi(t)+'"'}function Tc(t){return'link[rel="stylesheet"]['+t+"]"}function dx(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function RT(t,n,s,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[qt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[qt]=!0,n.onload=n.onerror=Xn.bind(null,n),ci(n,"link",s),nn(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function nl(t){return'[src="'+pi(t)+'"]'}function bc(t){return"script[async]"+t}function hx(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+pi(s.href)+'"]');if(r)return n.instance=r,nn(r),r;var u=O({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),nn(r),ci(r,"style",u),of(r,s.precedence,t),n.instance=r;case"stylesheet":u=tl(s.href);var d=t.querySelector(Tc(u));if(d)return n.state.loading|=4,n.instance=d,nn(d),d;r=dx(s),(u=ua.get(u))&&xp(r,u),d=(t.ownerDocument||t).createElement("link"),nn(d);var x=d;return x._p=new Promise(function(b,P){x.onload=b,x.onerror=P}),ci(d,"link",r),n.state.loading|=4,of(d,s.precedence,t),n.instance=d;case"script":return d=nl(s.src),(u=t.querySelector(bc(d)))?(n.instance=u,nn(u),u):(r=s,(u=ua.get(d))&&(r=O({},s),yp(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),nn(u),ci(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,of(r,s.precedence,t));return n.instance}function of(t,n,s){for(var r=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,d=u,x=0;x<r.length;x++){var b=r[x];if(b.dataset.precedence===n)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function xp(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function yp(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var lf=null;function px(t,n,s){if(lf===null){var r=new Map,u=lf=new Map;u.set(s,r)}else u=lf,r=u.get(s),r||(r=new Map,u.set(s,r));if(r.has(t))return r;for(r.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[Kt]||d[we]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var b=r.get(x);b?b.push(d):r.set(x,[d])}}return r}function Sp(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function CT(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mx(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function gx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _x(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function vx(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=_x(n),t.suspenseyImages.push(n)),t=LT.bind(t),n.decode().then(t,t))}function NT(t,n,s,r){if(s.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=tl(r.href),d=n.querySelector(Tc(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ac.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=d,nn(d);return}d=n.ownerDocument||n,r=dx(r),(u=ua.get(u))&&xp(r,u),d=d.createElement("link"),nn(d);var x=d;x._p=new Promise(function(b,P){x.onload=b,x.onerror=P}),ci(d,"link",r),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Ac.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var cf=0;function DT(t,n){return t.stylesheets&&t.count===0&&ff(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var r=setTimeout(function(){if(t.stylesheets&&ff(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&cf===0&&(cf=62500*ZE());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ff(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>cf?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function xx(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)ff(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function Ac(){this.count--,xx(this)}function LT(){this.imgCount--,xx(this)}var uf=null;function ff(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,uf=new Map,n.forEach(UT,t),uf=null,Ac.call(t))}function UT(t,n){if(!(n.state.loading&4)){var s=uf.get(t);if(s)var r=s.get(null);else{s=new Map,uf.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),r=x)}r&&s.set(null,r)}u=n.instance,x=u.getAttribute("data-precedence"),d=s.get(x)||r,d===r&&s.set(null,u),s.set(x,u),this.count++,r=Ac.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var il={$$typeof:fe,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function OT(t,n,s,r,u,d,x,b,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Is(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Is(0),this.hiddenUpdates=Is(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.transitionTypes=null,this.incompleteTransitions=new Map}function yx(t,n,s,r,u,d,x,b,P,Q,re,_e){return t=new OT(t,n,s,x,P,Q,re,_e,b),n=1,d===!0&&(n|=24),d=Ui(3,null,null,n),t.current=d,d.stateNode=t,n=Pd(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:r,isDehydrated:s,cache:n},Hd(d),t}function Sx(t){return t?(t=Co,t):Co}function Mx(t,n,s,r,u,d){u=Sx(u),r.context===null?r.context=u:r.pendingContext=u,r=qs(n),r.payload={element:s},d=d===void 0?null:d,d!==null&&(r.callback=d),s=Ws(t,r,n),s!==null&&(zi(s,t,n),ic(s,t,n))}function Ex(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function Mp(t,n){Ex(t,n),(t=t.alternate)&&Ex(t,n)}function Tx(t){if(t.tag===13||t.tag===31){var n=Br(t,67108864);n!==null&&zi(n,t,67108864),Mp(t,67108864)}}function bx(t){if(t.tag===13||t.tag===31){var n=Zi();n=oe(n);var s=Br(t,n);s!==null&&zi(s,t,n),Mp(t,n)}}var al=!0;function IT(t,n,s,r){var u=Ue.T;Ue.T=null;var d=Pe.p;try{Pe.p=2,Ep(t,n,s,r)}finally{Pe.p=d,Ue.T=u}}function PT(t,n,s,r){var u=Ue.T;Ue.T=null;var d=Pe.p;try{Pe.p=8,Ep(t,n,s,r)}finally{Pe.p=d,Ue.T=u}}function Ep(t,n,s,r){if(al){var u=Tp(r);if(u===null)ap(t,n,r,df,s),wx(t,r);else if(BT(u,t,n,s,r))r.stopPropagation();else if(wx(t,r),n&4&&-1<zT.indexOf(t)){for(;u!==null;){var d=hn(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=kn(d.pendingLanes);if(x!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var P=1<<31-Qn(x);b.entanglements[1]|=P,x&=~P}Va(d),($t&6)===0&&(Ku=j()+500,xc(0))}}break;case 31:case 13:b=Br(d,2),b!==null&&zi(b,d,2),$u(),Mp(d,2)}if(d=Tp(r),d===null&&ap(t,n,r,df,s),d===u)break;u=d}u!==null&&r.stopPropagation()}else ap(t,n,r,null,s)}}function Tp(t){return t=Ee(t),bp(t)}var df=null;function bp(t){if(df=null,t=et(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=f(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return df=t,null}function Ax(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ve()){case he:return 2;case Se:return 8;case ke:case Ne:return 32;case mt:return 268435456;default:return 32}default:return 32}}var Ap=!1,sr=null,rr=null,or=null,wc=new Map,Rc=new Map,lr=[],zT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wx(t,n){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":wc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rc.delete(n.pointerId)}}function Cc(t,n,s,r,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:s,eventSystemFlags:r,nativeEvent:d,targetContainers:[u]},n!==null&&(n=hn(n),n!==null&&Tx(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function BT(t,n,s,r,u){switch(n){case"focusin":return sr=Cc(sr,t,n,s,r,u),!0;case"dragenter":return rr=Cc(rr,t,n,s,r,u),!0;case"mouseover":return or=Cc(or,t,n,s,r,u),!0;case"pointerover":var d=u.pointerId;return wc.set(d,Cc(wc.get(d)||null,t,n,s,r,u)),!0;case"gotpointercapture":return d=u.pointerId,Rc.set(d,Cc(Rc.get(d)||null,t,n,s,r,u)),!0}return!1}function Rx(t){var n=et(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=f(s),n!==null){t.blockedOn=n,Ae(t.priority,function(){bx(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,Ae(t.priority,function(){bx(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hf(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Tp(t.nativeEvent);if(s===null){s=t.nativeEvent;var r=new s.constructor(s.type,s);pe=r,s.target.dispatchEvent(r),pe=null}else return n=hn(s),n!==null&&Tx(n),t.blockedOn=s,!1;n.shift()}return!0}function Cx(t,n,s){hf(t)&&s.delete(n)}function FT(){Ap=!1,sr!==null&&hf(sr)&&(sr=null),rr!==null&&hf(rr)&&(rr=null),or!==null&&hf(or)&&(or=null),wc.forEach(Cx),Rc.forEach(Cx)}function pf(t,n){t.blockedOn===n&&(t.blockedOn=null,Ap||(Ap=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,FT)))}var mf=null;function Nx(t){mf!==t&&(mf=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){mf===t&&(mf=null);for(var n=0;n<t.length;n+=3){var s=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(bp(r||s)===null)continue;break}var d=hn(s);d!==null&&(t.splice(n,3),n-=3,oh(d,{pending:!0,data:u,method:s.method,action:r},r,u))}}))}function sl(t){function n(P){return pf(P,t)}sr!==null&&pf(sr,t),rr!==null&&pf(rr,t),or!==null&&pf(or,t),wc.forEach(n),Rc.forEach(n);for(var s=0;s<lr.length;s++){var r=lr[s];r.blockedOn===t&&(r.blockedOn=null)}for(;0<lr.length&&(s=lr[0],s.blockedOn===null);)Rx(s),s.blockedOn===null&&lr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(r=0;r<s.length;r+=3){var u=s[r],d=s[r+1],x=u[Ie]||null;if(typeof d=="function")x||Nx(s);else if(x){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[Ie]||null)b=x.formAction;else if(bp(u)!==null)continue}else b=x.action;typeof b=="function"?s[r+1]=b:(s.splice(r,3),r-=3),Nx(s)}}}function Dx(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(s,20)}function s(){if(!r&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function wp(t){this._internalRoot=t}gf.prototype.render=wp.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,r=Zi();Mx(s,r,t,n,null,null)},gf.prototype.unmount=wp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Mx(t.current,2,null,t,null,null),$u(),n[it]=null}};function gf(t){this._internalRoot=t}gf.prototype.unstable_scheduleHydration=function(t){if(t){var n=$();t={blockedOn:null,target:t,priority:n};for(var s=0;s<lr.length&&n!==0&&n<lr[s].priority;s++);lr.splice(s,0,t),s===0&&Rx(t)}};var Lx=e.version;if(Lx!=="19.3.1")throw Error(a(527,Lx,"19.3.1"));Pe.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var HT={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Ue,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _f=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_f.isDisabled&&_f.supportsFiber)try{Ot=_f.inject(HT),Zt=_f}catch{}}return Dc.createRoot=function(t,n){if(!o(t))throw Error(a(299));var s=!1,r="",u=S_,d=M_,x=E_;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=yx(t,1,!1,null,null,s,r,null,u,d,x,Dx),t[it]=n.current,ip(t),new wp(n)},Dc.hydrateRoot=function(t,n,s){if(!o(t))throw Error(a(299));var r=!1,u="",d=S_,x=M_,b=E_,P=null;return s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.formState!==void 0&&(P=s.formState)),n=yx(t,1,!0,n,s??null,r,u,P,d,x,b,Dx),n.context=Sx(null),s=n.current,r=Zi(),r=oe(r),u=qs(r),u.callback=null,Ws(s,u,r),s=r,n.current.lanes=s,La(n,s),Va(n),t[it]=n.current,ip(t),new gf(n)},Dc.version="19.3.1",Dc}var Vx;function KT(){if(Vx)return Np.exports;Vx=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(e){console.error(e)}}return l(),Np.exports=ZT(),Np.exports}var QT=KT();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _g="174",JT=0,kx=1,$T=2,TS=1,eb=2,Es=3,Ds=0,wi=1,ha=2,Ar=0,Ml=1,Mm=2,Xx=3,jx=4,tb=5,po=100,nb=101,ib=102,ab=103,sb=104,rb=200,ob=201,lb=202,cb=203,Em=204,Tm=205,ub=206,fb=207,db=208,hb=209,pb=210,mb=211,gb=212,_b=213,vb=214,bm=0,Am=1,wm=2,Al=3,Rm=4,Cm=5,Nm=6,Dm=7,bS=0,xb=1,yb=2,wr=0,Sb=1,Mb=2,Eb=3,AS=4,Tb=5,bb=6,Ab=7,qx="attached",wb="detached",wS=300,wl=301,Rl=302,Lm=303,Um=304,cd=306,vo=1e3,Er=1001,ad=1002,Ri=1003,RS=1004,Vc=1005,Fi=1006,Kf=1007,As=1008,Ls=1009,CS=1010,NS=1011,Yc=1012,vg=1013,xo=1014,Ca=1015,Jc=1016,xg=1017,yg=1018,Cl=1020,DS=35902,LS=1021,US=1022,$i=1023,OS=1024,IS=1025,El=1026,Nl=1027,Sg=1028,Mg=1029,PS=1030,Eg=1031,Tg=1033,Qf=33776,Jf=33777,$f=33778,ed=33779,Om=35840,Im=35841,Pm=35842,zm=35843,Bm=36196,Fm=37492,Hm=37496,Gm=37808,Vm=37809,km=37810,Xm=37811,jm=37812,qm=37813,Wm=37814,Ym=37815,Zm=37816,Km=37817,Qm=37818,Jm=37819,$m=37820,eg=37821,td=36492,tg=36494,ng=36495,zS=36283,ig=36284,ag=36285,sg=36286,Zc=2300,Kc=2301,Op=2302,Wx=2400,Yx=2401,Zx=2402,Rb=2500,Cb=0,BS=1,rg=2,Nb=3200,Db=3201,FS=0,Lb=1,Sr="",Wn="srgb",Ni="srgb-linear",sd="linear",dn="srgb",rl=7680,Kx=519,Ub=512,Ob=513,Ib=514,HS=515,Pb=516,zb=517,Bb=518,Fb=519,og=35044,Qx="300 es",ws=2e3,rd=2001;class Pl{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(i)===-1&&a[e].push(i)}hasEventListener(e,i){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(i)!==-1}removeEventListener(e,i){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const a=i[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const _i=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jx=1234567;const jc=Math.PI/180,Dl=180/Math.PI;function Na(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(_i[l&255]+_i[l>>8&255]+_i[l>>16&255]+_i[l>>24&255]+"-"+_i[e&255]+_i[e>>8&255]+"-"+_i[e>>16&15|64]+_i[e>>24&255]+"-"+_i[i&63|128]+_i[i>>8&255]+"-"+_i[i>>16&255]+_i[i>>24&255]+_i[a&255]+_i[a>>8&255]+_i[a>>16&255]+_i[a>>24&255]).toLowerCase()}function Pt(l,e,i){return Math.max(e,Math.min(i,l))}function bg(l,e){return(l%e+e)%e}function Hb(l,e,i,a,o){return a+(l-e)*(o-a)/(i-e)}function Gb(l,e,i){return l!==e?(i-l)/(e-l):0}function qc(l,e,i){return(1-i)*l+i*e}function Vb(l,e,i,a){return qc(l,e,1-Math.exp(-i*a))}function kb(l,e=1){return e-Math.abs(bg(l,e*2)-e)}function Xb(l,e,i){return l<=e?0:l>=i?1:(l=(l-e)/(i-e),l*l*(3-2*l))}function jb(l,e,i){return l<=e?0:l>=i?1:(l=(l-e)/(i-e),l*l*l*(l*(l*6-15)+10))}function qb(l,e){return l+Math.floor(Math.random()*(e-l+1))}function Wb(l,e){return l+Math.random()*(e-l)}function Yb(l){return l*(.5-Math.random())}function Zb(l){l!==void 0&&(Jx=l);let e=Jx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kb(l){return l*jc}function Qb(l){return l*Dl}function Jb(l){return(l&l-1)===0&&l!==0}function $b(l){return Math.pow(2,Math.ceil(Math.log(l)/Math.LN2))}function e1(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function t1(l,e,i,a,o){const c=Math.cos,f=Math.sin,h=c(i/2),p=f(i/2),m=c((e+a)/2),_=f((e+a)/2),g=c((e-a)/2),v=f((e-a)/2),y=c((a-e)/2),E=f((a-e)/2);switch(o){case"XYX":l.set(h*_,p*g,p*v,h*m);break;case"YZY":l.set(p*v,h*_,p*g,h*m);break;case"ZXZ":l.set(p*g,p*v,h*_,h*m);break;case"XZX":l.set(h*_,p*E,p*y,h*m);break;case"YXY":l.set(p*y,h*_,p*E,h*m);break;case"ZYZ":l.set(p*E,p*y,h*_,h*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function wa(l,e){switch(e.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function on(l,e){switch(e.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}const Ts={DEG2RAD:jc,RAD2DEG:Dl,generateUUID:Na,clamp:Pt,euclideanModulo:bg,mapLinear:Hb,inverseLerp:Gb,lerp:qc,damp:Vb,pingpong:kb,smoothstep:Xb,smootherstep:jb,randInt:qb,randFloat:Wb,randFloatSpread:Yb,seededRandom:Zb,degToRad:Kb,radToDeg:Qb,isPowerOfTwo:Jb,ceilPowerOfTwo:$b,floorPowerOfTwo:e1,setQuaternionFromProperEuler:t1,normalize:on,denormalize:wa};class Gt{constructor(e=0,i=0){Gt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,a=this.y,o=e.elements;return this.x=o[0]*i+o[3]*a+o[6],this.y=o[1]*i+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Pt(this.x,e.x,i.x),this.y=Pt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Pt(this.x,e,i),this.y=Pt(this.y,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Pt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Pt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y;return i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const a=Math.cos(i),o=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*o+e.x,this.y=c*o+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(e,i,a,o,c,f,h,p,m){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,a,o,c,f,h,p,m)}set(e,i,a,o,c,f,h,p,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=h,_[3]=i,_[4]=c,_[5]=p,_[6]=a,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(e,i,a){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,o=i.elements,c=this.elements,f=a[0],h=a[3],p=a[6],m=a[1],_=a[4],g=a[7],v=a[2],y=a[5],E=a[8],T=o[0],M=o[3],S=o[6],I=o[1],L=o[4],R=o[7],H=o[2],z=o[5],O=o[8];return c[0]=f*T+h*I+p*H,c[3]=f*M+h*L+p*z,c[6]=f*S+h*R+p*O,c[1]=m*T+_*I+g*H,c[4]=m*M+_*L+g*z,c[7]=m*S+_*R+g*O,c[2]=v*T+y*I+E*H,c[5]=v*M+y*L+E*z,c[8]=v*S+y*R+E*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[1],o=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],_=e[8];return i*f*_-i*h*m-a*c*_+a*h*p+o*c*m-o*f*p}invert(){const e=this.elements,i=e[0],a=e[1],o=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],_=e[8],g=_*f-h*m,v=h*p-_*c,y=m*c-f*p,E=i*g+a*v+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(o*m-_*a)*T,e[2]=(h*a-o*f)*T,e[3]=v*T,e[4]=(_*i-o*p)*T,e[5]=(o*c-h*i)*T,e[6]=y*T,e[7]=(a*p-m*i)*T,e[8]=(f*i-a*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,a,o,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*f+m*h)+f+e,-o*m,o*p,-o*(-m*f+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Ip.makeScale(e,i)),this}rotate(e){return this.premultiply(Ip.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ip.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,a=e.elements;for(let o=0;o<9;o++)if(i[o]!==a[o])return!1;return!0}fromArray(e,i=0){for(let a=0;a<9;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ip=new wt;function GS(l){for(let e=l.length-1;e>=0;--e)if(l[e]>=65535)return!0;return!1}function Qc(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function n1(){const l=Qc("canvas");return l.style.display="block",l}const $x={};function co(l){l in $x||($x[l]=!0,console.warn(l))}function i1(l,e,i){return new Promise(function(a,o){function c(){switch(l.clientWaitSync(e,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:o();break;case l.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}function a1(l){const e=l.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function s1(l){const e=l.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ey=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ty=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r1(){const l={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===dn&&(o.r=Ns(o.r),o.g=Ns(o.g),o.b=Ns(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===dn&&(o.r=Tl(o.r),o.g=Tl(o.g),o.b=Tl(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Sr?sd:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return l.define({[Ni]:{primaries:e,whitePoint:a,transfer:sd,toXYZ:ey,fromXYZ:ty,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:a,transfer:dn,toXYZ:ey,fromXYZ:ty,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),l}const Yt=r1();function Ns(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Tl(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}let ol;class o1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ol===void 0&&(ol=Qc("canvas")),ol.width=e.width,ol.height=e.height;const a=ol.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=ol}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Qc("canvas");i.width=e.width,i.height=e.height;const a=i.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=Ns(c[f]/255)*255;return a.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(Ns(i[a]/255)*255):i[a]=Ns(i[a]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let l1=0;class Ag{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=Na(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push(Pp(o[f].image)):c.push(Pp(o[f]))}else c=Pp(o);a.url=c}return i||(e.images[this.uuid]=a),a}}function Pp(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?o1.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c1=0;class Vn extends Pl{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,a=Er,o=Er,c=Fi,f=As,h=$i,p=Ls,m=Vn.DEFAULT_ANISOTROPY,_=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Na(),this.name="",this.source=new Ag(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=wS;Vn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,i=0,a=0,o=1){jt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,a,o){return this.x=e,this.y=i,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,a=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*a+f[8]*o+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*o+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*o+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*o+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,a,o,c;const p=e.elements,m=p[0],_=p[4],g=p[8],v=p[1],y=p[5],E=p[9],T=p[2],M=p[6],S=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+T)<.1&&Math.abs(E+M)<.1&&Math.abs(m+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,R=(y+1)/2,H=(S+1)/2,z=(_+v)/4,O=(g+T)/4,B=(E+M)/4;return L>R&&L>H?L<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(L),o=z/a,c=O/a):R>H?R<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),a=z/o,c=B/o):H<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(H),a=O/c,o=B/c),this.set(a,o,c,i),this}let I=Math.sqrt((M-E)*(M-E)+(g-T)*(g-T)+(v-_)*(v-_));return Math.abs(I)<.001&&(I=1),this.x=(M-E)/I,this.y=(g-T)/I,this.z=(v-_)/I,this.w=Math.acos((m+y+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Pt(this.x,e.x,i.x),this.y=Pt(this.y,e.y,i.y),this.z=Pt(this.z,e.z,i.z),this.w=Pt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Pt(this.x,e,i),this.y=Pt(this.y,e,i),this.z=Pt(this.z,e,i),this.w=Pt(this.w,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Pt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this.w=e.w+(i.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class u1 extends Pl{constructor(e=1,i=1,a={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new jt(0,0,e,i),this.scissorTest=!1,this.viewport=new jt(0,0,e,i);const o={width:e,height:i,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Vn(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,a=1){if(this.width!==e||this.height!==i||this.depth!==a){this.width=e,this.height=i,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new Ag(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yo extends u1{constructor(e=1,i=1,a={}){super(e,i,a),this.isWebGLRenderTarget=!0}}class VS extends Vn{constructor(e=null,i=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:a,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f1 extends Vn{constructor(e=null,i=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:a,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za{constructor(e=0,i=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=a,this._w=o}static slerpFlat(e,i,a,o,c,f,h){let p=a[o+0],m=a[o+1],_=a[o+2],g=a[o+3];const v=c[f+0],y=c[f+1],E=c[f+2],T=c[f+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=_,e[i+3]=g;return}if(h===1){e[i+0]=v,e[i+1]=y,e[i+2]=E,e[i+3]=T;return}if(g!==T||p!==v||m!==y||_!==E){let M=1-h;const S=p*v+m*y+_*E+g*T,I=S>=0?1:-1,L=1-S*S;if(L>Number.EPSILON){const H=Math.sqrt(L),z=Math.atan2(H,S*I);M=Math.sin(M*z)/H,h=Math.sin(h*z)/H}const R=h*I;if(p=p*M+v*R,m=m*M+y*R,_=_*M+E*R,g=g*M+T*R,M===1-h){const H=1/Math.sqrt(p*p+m*m+_*_+g*g);p*=H,m*=H,_*=H,g*=H}}e[i]=p,e[i+1]=m,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,a,o,c,f){const h=a[o],p=a[o+1],m=a[o+2],_=a[o+3],g=c[f],v=c[f+1],y=c[f+2],E=c[f+3];return e[i]=h*E+_*g+p*y-m*v,e[i+1]=p*E+_*v+m*g-h*y,e[i+2]=m*E+_*y+h*v-p*g,e[i+3]=_*E-h*g-p*v-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,a,o){return this._x=e,this._y=i,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const a=e._x,o=e._y,c=e._z,f=e._order,h=Math.cos,p=Math.sin,m=h(a/2),_=h(o/2),g=h(c/2),v=p(a/2),y=p(o/2),E=p(c/2);switch(f){case"XYZ":this._x=v*_*g+m*y*E,this._y=m*y*g-v*_*E,this._z=m*_*E+v*y*g,this._w=m*_*g-v*y*E;break;case"YXZ":this._x=v*_*g+m*y*E,this._y=m*y*g-v*_*E,this._z=m*_*E-v*y*g,this._w=m*_*g+v*y*E;break;case"ZXY":this._x=v*_*g-m*y*E,this._y=m*y*g+v*_*E,this._z=m*_*E+v*y*g,this._w=m*_*g-v*y*E;break;case"ZYX":this._x=v*_*g-m*y*E,this._y=m*y*g+v*_*E,this._z=m*_*E-v*y*g,this._w=m*_*g+v*y*E;break;case"YZX":this._x=v*_*g+m*y*E,this._y=m*y*g+v*_*E,this._z=m*_*E-v*y*g,this._w=m*_*g-v*y*E;break;case"XZY":this._x=v*_*g-m*y*E,this._y=m*y*g-v*_*E,this._z=m*_*E+v*y*g,this._w=m*_*g+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const a=i/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,a=i[0],o=i[4],c=i[8],f=i[1],h=i[5],p=i[9],m=i[2],_=i[6],g=i[10],v=a+h+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-p)*y,this._y=(c-m)*y,this._z=(f-o)*y}else if(a>h&&a>g){const y=2*Math.sqrt(1+a-h-g);this._w=(_-p)/y,this._x=.25*y,this._y=(o+f)/y,this._z=(c+m)/y}else if(h>g){const y=2*Math.sqrt(1+h-a-g);this._w=(c-m)/y,this._x=(o+f)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+g-a-h);this._w=(f-o)/y,this._x=(c+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let a=e.dot(i)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,i){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,i/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const a=e._x,o=e._y,c=e._z,f=e._w,h=i._x,p=i._y,m=i._z,_=i._w;return this._x=a*_+f*h+o*m-c*p,this._y=o*_+f*p+c*h-a*m,this._z=c*_+f*m+a*p-o*h,this._w=f*_-a*h-o*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const a=this._x,o=this._y,c=this._z,f=this._w;let h=f*e._w+a*e._x+o*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=a,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*a+i*this._x,this._y=y*o+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,h),g=Math.sin((1-i)*_)/m,v=Math.sin(i*_)/m;return this._w=f*g+this._w*v,this._x=a*g+this._x*v,this._y=o*g+this._y*v,this._z=c*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,a){return this.copy(e).slerp(i,a)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,i=0,a=0){F.prototype.isVector3=!0,this.x=e,this.y=i,this.z=a}set(e,i,a){return a===void 0&&(a=this.z),this.x=e,this.y=i,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(ny.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(ny.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*a+c[6]*o,this.y=c[1]*i+c[4]*a+c[7]*o,this.z=c[2]*i+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,a=this.y,o=this.z,c=e.elements,f=1/(c[3]*i+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*o+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*o+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*o+c[14])*f,this}applyQuaternion(e){const i=this.x,a=this.y,o=this.z,c=e.x,f=e.y,h=e.z,p=e.w,m=2*(f*o-h*a),_=2*(h*i-c*o),g=2*(c*a-f*i);return this.x=i+p*m+f*g-h*_,this.y=a+p*_+h*m-c*g,this.z=o+p*g+c*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*a+c[8]*o,this.y=c[1]*i+c[5]*a+c[9]*o,this.z=c[2]*i+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Pt(this.x,e.x,i.x),this.y=Pt(this.y,e.y,i.y),this.z=Pt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Pt(this.x,e,i),this.y=Pt(this.y,e,i),this.z=Pt(this.z,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Pt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const a=e.x,o=e.y,c=e.z,f=i.x,h=i.y,p=i.z;return this.x=o*p-c*h,this.y=c*f-a*p,this.z=a*h-o*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const a=e.dot(this)/i;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return zp.copy(this).projectOnVector(e),this.sub(zp)}reflect(e){return this.sub(zp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Pt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return i*i+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,a){const o=Math.sin(i)*e;return this.x=o*Math.sin(a),this.y=Math.cos(i)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,a){return this.x=e*Math.sin(i),this.y=a,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=a,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(e),this.y=i,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zp=new F,ny=new Za;class Hi{constructor(e=new F(1/0,1/0,1/0),i=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i+=3)this.expandByPoint(Ta.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,a=e.count;i<a;i++)this.expandByPoint(Ta.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const a=Ta.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ta):Ta.fromBufferAttribute(c,f),Ta.applyMatrix4(e.matrixWorld),this.expandByPoint(Ta);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vf.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),vf.copy(a.boundingBox)),vf.applyMatrix4(e.matrixWorld),this.union(vf)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ta),Ta.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,a;return e.normal.x>0?(i=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),i<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lc),xf.subVectors(this.max,Lc),ll.subVectors(e.a,Lc),cl.subVectors(e.b,Lc),ul.subVectors(e.c,Lc),ur.subVectors(cl,ll),fr.subVectors(ul,cl),no.subVectors(ll,ul);let i=[0,-ur.z,ur.y,0,-fr.z,fr.y,0,-no.z,no.y,ur.z,0,-ur.x,fr.z,0,-fr.x,no.z,0,-no.x,-ur.y,ur.x,0,-fr.y,fr.x,0,-no.y,no.x,0];return!Bp(i,ll,cl,ul,xf)||(i=[1,0,0,0,1,0,0,0,1],!Bp(i,ll,cl,ul,xf))?!1:(yf.crossVectors(ur,fr),i=[yf.x,yf.y,yf.z],Bp(i,ll,cl,ul,xf))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ta).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ta).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_s),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _s=[new F,new F,new F,new F,new F,new F,new F,new F],Ta=new F,vf=new Hi,ll=new F,cl=new F,ul=new F,ur=new F,fr=new F,no=new F,Lc=new F,xf=new F,yf=new F,io=new F;function Bp(l,e,i,a,o){for(let c=0,f=l.length-3;c<=f;c+=3){io.fromArray(l,c);const h=o.x*Math.abs(io.x)+o.y*Math.abs(io.y)+o.z*Math.abs(io.z),p=e.dot(io),m=i.dot(io),_=a.dot(io);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const d1=new Hi,Uc=new F,Fp=new F;class pa{constructor(e=new F,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const a=this.center;i!==void 0?a.copy(i):d1.setFromPoints(e).getCenter(a);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const a=this.center.distanceToSquared(e);return i.copy(e),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uc.subVectors(e,this.center);const i=Uc.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),o=(a-this.radius)*.5;this.center.addScaledVector(Uc,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uc.copy(e.center).add(Fp)),this.expandByPoint(Uc.copy(e.center).sub(Fp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vs=new F,Hp=new F,Sf=new F,dr=new F,Gp=new F,Mf=new F,Vp=new F;class ud{constructor(e=new F,i=new F(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vs)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=vs.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(vs.copy(this.origin).addScaledVector(this.direction,i),vs.distanceToSquared(e))}distanceSqToSegment(e,i,a,o){Hp.copy(e).add(i).multiplyScalar(.5),Sf.copy(i).sub(e).normalize(),dr.copy(this.origin).sub(Hp);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Sf),h=dr.dot(this.direction),p=-dr.dot(Sf),m=dr.lengthSq(),_=Math.abs(1-f*f);let g,v,y,E;if(_>0)if(g=f*p-h,v=f*h-p,E=c*_,g>=0)if(v>=-E)if(v<=E){const T=1/_;g*=T,v*=T,y=g*(g+f*v+2*h)+v*(f*g+v+2*p)+m}else v=c,g=Math.max(0,-(f*v+h)),y=-g*g+v*(v+2*p)+m;else v=-c,g=Math.max(0,-(f*v+h)),y=-g*g+v*(v+2*p)+m;else v<=-E?(g=Math.max(0,-(-f*c+h)),v=g>0?-c:Math.min(Math.max(-c,-p),c),y=-g*g+v*(v+2*p)+m):v<=E?(g=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+m):(g=Math.max(0,-(f*c+h)),v=g>0?c:Math.min(Math.max(-c,-p),c),y=-g*g+v*(v+2*p)+m);else v=f>0?-c:c,g=Math.max(0,-(f*v+h)),y=-g*g+v*(v+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Hp).addScaledVector(Sf,v),y}intersectSphere(e,i){vs.subVectors(e.center,this.origin);const a=vs.dot(this.direction),o=vs.dot(vs)-a*a,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=a-f,p=a+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/i;return a>=0?a:null}intersectPlane(e,i){const a=this.distanceToPlane(e);return a===null?null:this.at(a,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let a,o,c,f,h,p;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(a=(e.min.x-v.x)*m,o=(e.max.x-v.x)*m):(a=(e.max.x-v.x)*m,o=(e.min.x-v.x)*m),_>=0?(c=(e.min.y-v.y)*_,f=(e.max.y-v.y)*_):(c=(e.max.y-v.y)*_,f=(e.min.y-v.y)*_),a>f||c>o||((c>a||isNaN(a))&&(a=c),(f<o||isNaN(o))&&(o=f),g>=0?(h=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,i)}intersectsBox(e){return this.intersectBox(e,vs)!==null}intersectTriangle(e,i,a,o,c){Gp.subVectors(i,e),Mf.subVectors(a,e),Vp.crossVectors(Gp,Mf);let f=this.direction.dot(Vp),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;dr.subVectors(this.origin,e);const p=h*this.direction.dot(Mf.crossVectors(dr,Mf));if(p<0)return null;const m=h*this.direction.dot(Gp.cross(dr));if(m<0||p+m>f)return null;const _=-h*dr.dot(Vp);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,i,a,o,c,f,h,p,m,_,g,v,y,E,T,M){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,a,o,c,f,h,p,m,_,g,v,y,E,T,M)}set(e,i,a,o,c,f,h,p,m,_,g,v,y,E,T,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=a,S[12]=o,S[1]=c,S[5]=f,S[9]=h,S[13]=p,S[2]=m,S[6]=_,S[10]=g,S[14]=v,S[3]=y,S[7]=E,S[11]=T,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(e){const i=this.elements,a=e.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,a){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,i,a){return this.set(e.x,i.x,a.x,0,e.y,i.y,a.y,0,e.z,i.z,a.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,a=e.elements,o=1/fl.setFromMatrixColumn(e,0).length(),c=1/fl.setFromMatrixColumn(e,1).length(),f=1/fl.setFromMatrixColumn(e,2).length();return i[0]=a[0]*o,i[1]=a[1]*o,i[2]=a[2]*o,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,a=e.x,o=e.y,c=e.z,f=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=f*_,y=f*g,E=h*_,T=h*g;i[0]=p*_,i[4]=-p*g,i[8]=m,i[1]=y+E*m,i[5]=v-T*m,i[9]=-h*p,i[2]=T-v*m,i[6]=E+y*m,i[10]=f*p}else if(e.order==="YXZ"){const v=p*_,y=p*g,E=m*_,T=m*g;i[0]=v+T*h,i[4]=E*h-y,i[8]=f*m,i[1]=f*g,i[5]=f*_,i[9]=-h,i[2]=y*h-E,i[6]=T+v*h,i[10]=f*p}else if(e.order==="ZXY"){const v=p*_,y=p*g,E=m*_,T=m*g;i[0]=v-T*h,i[4]=-f*g,i[8]=E+y*h,i[1]=y+E*h,i[5]=f*_,i[9]=T-v*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(e.order==="ZYX"){const v=f*_,y=f*g,E=h*_,T=h*g;i[0]=p*_,i[4]=E*m-y,i[8]=v*m+T,i[1]=p*g,i[5]=T*m+v,i[9]=y*m-E,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(e.order==="YZX"){const v=f*p,y=f*m,E=h*p,T=h*m;i[0]=p*_,i[4]=T-v*g,i[8]=E*g+y,i[1]=g,i[5]=f*_,i[9]=-h*_,i[2]=-m*_,i[6]=y*g+E,i[10]=v-T*g}else if(e.order==="XZY"){const v=f*p,y=f*m,E=h*p,T=h*m;i[0]=p*_,i[4]=-g,i[8]=m*_,i[1]=v*g+T,i[5]=f*_,i[9]=y*g-E,i[2]=E*g-y,i[6]=h*_,i[10]=T*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h1,e,p1)}lookAt(e,i,a){const o=this.elements;return Qi.subVectors(e,i),Qi.lengthSq()===0&&(Qi.z=1),Qi.normalize(),hr.crossVectors(a,Qi),hr.lengthSq()===0&&(Math.abs(a.z)===1?Qi.x+=1e-4:Qi.z+=1e-4,Qi.normalize(),hr.crossVectors(a,Qi)),hr.normalize(),Ef.crossVectors(Qi,hr),o[0]=hr.x,o[4]=Ef.x,o[8]=Qi.x,o[1]=hr.y,o[5]=Ef.y,o[9]=Qi.y,o[2]=hr.z,o[6]=Ef.z,o[10]=Qi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,o=i.elements,c=this.elements,f=a[0],h=a[4],p=a[8],m=a[12],_=a[1],g=a[5],v=a[9],y=a[13],E=a[2],T=a[6],M=a[10],S=a[14],I=a[3],L=a[7],R=a[11],H=a[15],z=o[0],O=o[4],B=o[8],N=o[12],w=o[1],G=o[5],se=o[9],ae=o[13],ue=o[2],fe=o[6],q=o[10],ce=o[14],Y=o[3],ye=o[7],Me=o[11],je=o[15];return c[0]=f*z+h*w+p*ue+m*Y,c[4]=f*O+h*G+p*fe+m*ye,c[8]=f*B+h*se+p*q+m*Me,c[12]=f*N+h*ae+p*ce+m*je,c[1]=_*z+g*w+v*ue+y*Y,c[5]=_*O+g*G+v*fe+y*ye,c[9]=_*B+g*se+v*q+y*Me,c[13]=_*N+g*ae+v*ce+y*je,c[2]=E*z+T*w+M*ue+S*Y,c[6]=E*O+T*G+M*fe+S*ye,c[10]=E*B+T*se+M*q+S*Me,c[14]=E*N+T*ae+M*ce+S*je,c[3]=I*z+L*w+R*ue+H*Y,c[7]=I*O+L*G+R*fe+H*ye,c[11]=I*B+L*se+R*q+H*Me,c[15]=I*N+L*ae+R*ce+H*je,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[4],o=e[8],c=e[12],f=e[1],h=e[5],p=e[9],m=e[13],_=e[2],g=e[6],v=e[10],y=e[14],E=e[3],T=e[7],M=e[11],S=e[15];return E*(+c*p*g-o*m*g-c*h*v+a*m*v+o*h*y-a*p*y)+T*(+i*p*y-i*m*v+c*f*v-o*f*y+o*m*_-c*p*_)+M*(+i*m*g-i*h*y-c*f*g+a*f*y+c*h*_-a*m*_)+S*(-o*h*_-i*p*g+i*h*v+o*f*g-a*f*v+a*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=a),this}invert(){const e=this.elements,i=e[0],a=e[1],o=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],_=e[8],g=e[9],v=e[10],y=e[11],E=e[12],T=e[13],M=e[14],S=e[15],I=g*M*m-T*v*m+T*p*y-h*M*y-g*p*S+h*v*S,L=E*v*m-_*M*m-E*p*y+f*M*y+_*p*S-f*v*S,R=_*T*m-E*g*m+E*h*y-f*T*y-_*h*S+f*g*S,H=E*g*p-_*T*p-E*h*v+f*T*v+_*h*M-f*g*M,z=i*I+a*L+o*R+c*H;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return e[0]=I*O,e[1]=(T*v*c-g*M*c-T*o*y+a*M*y+g*o*S-a*v*S)*O,e[2]=(h*M*c-T*p*c+T*o*m-a*M*m-h*o*S+a*p*S)*O,e[3]=(g*p*c-h*v*c-g*o*m+a*v*m+h*o*y-a*p*y)*O,e[4]=L*O,e[5]=(_*M*c-E*v*c+E*o*y-i*M*y-_*o*S+i*v*S)*O,e[6]=(E*p*c-f*M*c-E*o*m+i*M*m+f*o*S-i*p*S)*O,e[7]=(f*v*c-_*p*c+_*o*m-i*v*m-f*o*y+i*p*y)*O,e[8]=R*O,e[9]=(E*g*c-_*T*c-E*a*y+i*T*y+_*a*S-i*g*S)*O,e[10]=(f*T*c-E*h*c+E*a*m-i*T*m-f*a*S+i*h*S)*O,e[11]=(_*h*c-f*g*c-_*a*m+i*g*m+f*a*y-i*h*y)*O,e[12]=H*O,e[13]=(_*T*o-E*g*o+E*a*v-i*T*v-_*a*M+i*g*M)*O,e[14]=(E*h*o-f*T*o-E*a*p+i*T*p+f*a*M-i*h*M)*O,e[15]=(f*g*o-_*h*o+_*a*p-i*g*p-f*a*v+i*h*v)*O,this}scale(e){const i=this.elements,a=e.x,o=e.y,c=e.z;return i[0]*=a,i[4]*=o,i[8]*=c,i[1]*=a,i[5]*=o,i[9]*=c,i[2]*=a,i[6]*=o,i[10]*=c,i[3]*=a,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,a,o))}makeTranslation(e,i,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const a=Math.cos(i),o=Math.sin(i),c=1-a,f=e.x,h=e.y,p=e.z,m=c*f,_=c*h;return this.set(m*f+a,m*h-o*p,m*p+o*h,0,m*h+o*p,_*h+a,_*p-o*f,0,m*p-o*h,_*p+o*f,c*p*p+a,0,0,0,0,1),this}makeScale(e,i,a){return this.set(e,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,i,a,o,c,f){return this.set(1,a,c,0,e,1,f,0,i,o,1,0,0,0,0,1),this}compose(e,i,a){const o=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,m=c+c,_=f+f,g=h+h,v=c*m,y=c*_,E=c*g,T=f*_,M=f*g,S=h*g,I=p*m,L=p*_,R=p*g,H=a.x,z=a.y,O=a.z;return o[0]=(1-(T+S))*H,o[1]=(y+R)*H,o[2]=(E-L)*H,o[3]=0,o[4]=(y-R)*z,o[5]=(1-(v+S))*z,o[6]=(M+I)*z,o[7]=0,o[8]=(E+L)*O,o[9]=(M-I)*O,o[10]=(1-(v+T))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,a){const o=this.elements;let c=fl.set(o[0],o[1],o[2]).length();const f=fl.set(o[4],o[5],o[6]).length(),h=fl.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],ba.copy(this);const m=1/c,_=1/f,g=1/h;return ba.elements[0]*=m,ba.elements[1]*=m,ba.elements[2]*=m,ba.elements[4]*=_,ba.elements[5]*=_,ba.elements[6]*=_,ba.elements[8]*=g,ba.elements[9]*=g,ba.elements[10]*=g,i.setFromRotationMatrix(ba),a.x=c,a.y=f,a.z=h,this}makePerspective(e,i,a,o,c,f,h=ws){const p=this.elements,m=2*c/(i-e),_=2*c/(a-o),g=(i+e)/(i-e),v=(a+o)/(a-o);let y,E;if(h===ws)y=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===rd)y=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,a,o,c,f,h=ws){const p=this.elements,m=1/(i-e),_=1/(a-o),g=1/(f-c),v=(i+e)*m,y=(a+o)*_;let E,T;if(h===ws)E=(f+c)*g,T=-2*g;else if(h===rd)E=c*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,a=e.elements;for(let o=0;o<16;o++)if(i[o]!==a[o])return!1;return!0}fromArray(e,i=0){for(let a=0;a<16;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e[i+9]=a[9],e[i+10]=a[10],e[i+11]=a[11],e[i+12]=a[12],e[i+13]=a[13],e[i+14]=a[14],e[i+15]=a[15],e}}const fl=new F,ba=new yt,h1=new F(0,0,0),p1=new F(1,1,1),hr=new F,Ef=new F,Qi=new F,iy=new yt,ay=new Za;class Wa{constructor(e=0,i=0,a=0,o=Wa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,a,o=this._order){return this._x=e,this._y=i,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,a=!0){const o=e.elements,c=o[0],f=o[4],h=o[8],p=o[1],m=o[5],_=o[9],g=o[2],v=o[6],y=o[10];switch(i){case"XYZ":this._y=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Pt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,a){return iy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iy,i,a)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ay.setFromEuler(this),this.setFromQuaternion(ay,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wa.DEFAULT_ORDER="XYZ";class kS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m1=0;const sy=new F,dl=new Za,xs=new yt,Tf=new F,Oc=new F,g1=new F,_1=new Za,ry=new F(1,0,0),oy=new F(0,1,0),ly=new F(0,0,1),cy={type:"added"},v1={type:"removed"},hl={type:"childadded",child:null},kp={type:"childremoved",child:null};class En extends Pl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=Na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new F,i=new Wa,a=new Za,o=new F(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new yt},normalMatrix:{value:new wt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return dl.setFromAxisAngle(e,i),this.quaternion.multiply(dl),this}rotateOnWorldAxis(e,i){return dl.setFromAxisAngle(e,i),this.quaternion.premultiply(dl),this}rotateX(e){return this.rotateOnAxis(ry,e)}rotateY(e){return this.rotateOnAxis(oy,e)}rotateZ(e){return this.rotateOnAxis(ly,e)}translateOnAxis(e,i){return sy.copy(e).applyQuaternion(this.quaternion),this.position.add(sy.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(ry,e)}translateY(e){return this.translateOnAxis(oy,e)}translateZ(e){return this.translateOnAxis(ly,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xs.copy(this.matrixWorld).invert())}lookAt(e,i,a){e.isVector3?Tf.copy(e):Tf.set(e,i,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Oc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xs.lookAt(Oc,Tf,this.up):xs.lookAt(Tf,Oc,this.up),this.quaternion.setFromRotationMatrix(xs),o&&(xs.extractRotation(o.matrixWorld),dl.setFromRotationMatrix(xs),this.quaternion.premultiply(dl.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cy),hl.child=e,this.dispatchEvent(hl),hl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(v1),kp.child=e,this.dispatchEvent(kp),kp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xs.multiply(e.parent.matrixWorld)),e.applyMatrix4(xs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cy),hl.child=e,this.dispatchEvent(hl),hl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let a=0,o=this.children.length;a<o;a++){const f=this.children[a].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,a=[]){this[e]===i&&a.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,i,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oc,e,g1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oc,_1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].updateMatrixWorld(e)}updateWorldMatrix(e,i){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",a={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(e.animations,p))}}if(i){const h=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),g=f(e.shapes),v=f(e.skeletons),y=f(e.animations),E=f(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=o,a;function f(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}En.DEFAULT_UP=new F(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Aa=new F,ys=new F,Xp=new F,Ss=new F,pl=new F,ml=new F,uy=new F,jp=new F,qp=new F,Wp=new F,Yp=new jt,Zp=new jt,Kp=new jt;class Ra{constructor(e=new F,i=new F,a=new F){this.a=e,this.b=i,this.c=a}static getNormal(e,i,a,o){o.subVectors(a,i),Aa.subVectors(e,i),o.cross(Aa);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,a,o,c){Aa.subVectors(o,i),ys.subVectors(a,i),Xp.subVectors(e,i);const f=Aa.dot(Aa),h=Aa.dot(ys),p=Aa.dot(Xp),m=ys.dot(ys),_=ys.dot(Xp),g=f*m-h*h;if(g===0)return c.set(0,0,0),null;const v=1/g,y=(m*p-h*_)*v,E=(f*_-h*p)*v;return c.set(1-y-E,E,y)}static containsPoint(e,i,a,o){return this.getBarycoord(e,i,a,o,Ss)===null?!1:Ss.x>=0&&Ss.y>=0&&Ss.x+Ss.y<=1}static getInterpolation(e,i,a,o,c,f,h,p){return this.getBarycoord(e,i,a,o,Ss)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ss.x),p.addScaledVector(f,Ss.y),p.addScaledVector(h,Ss.z),p)}static getInterpolatedAttribute(e,i,a,o,c,f){return Yp.setScalar(0),Zp.setScalar(0),Kp.setScalar(0),Yp.fromBufferAttribute(e,i),Zp.fromBufferAttribute(e,a),Kp.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(Yp,c.x),f.addScaledVector(Zp,c.y),f.addScaledVector(Kp,c.z),f}static isFrontFacing(e,i,a,o){return Aa.subVectors(a,i),ys.subVectors(e,i),Aa.cross(ys).dot(o)<0}set(e,i,a){return this.a.copy(e),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(e,i,a,o){return this.a.copy(e[i]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,a,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Aa.subVectors(this.c,this.b),ys.subVectors(this.a,this.b),Aa.cross(ys).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ra.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ra.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,a,o,c){return Ra.getInterpolation(e,this.a,this.b,this.c,i,a,o,c)}containsPoint(e){return Ra.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ra.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const a=this.a,o=this.b,c=this.c;let f,h;pl.subVectors(o,a),ml.subVectors(c,a),jp.subVectors(e,a);const p=pl.dot(jp),m=ml.dot(jp);if(p<=0&&m<=0)return i.copy(a);qp.subVectors(e,o);const _=pl.dot(qp),g=ml.dot(qp);if(_>=0&&g<=_)return i.copy(o);const v=p*g-_*m;if(v<=0&&p>=0&&_<=0)return f=p/(p-_),i.copy(a).addScaledVector(pl,f);Wp.subVectors(e,c);const y=pl.dot(Wp),E=ml.dot(Wp);if(E>=0&&y<=E)return i.copy(c);const T=y*m-p*E;if(T<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(a).addScaledVector(ml,h);const M=_*E-y*g;if(M<=0&&g-_>=0&&y-E>=0)return uy.subVectors(c,o),h=(g-_)/(g-_+(y-E)),i.copy(o).addScaledVector(uy,h);const S=1/(M+T+v);return f=T*S,h=v*S,i.copy(a).addScaledVector(pl,f).addScaledVector(ml,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const XS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},bf={h:0,s:0,l:0};function Qp(l,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?l+(e-l)*6*i:i<1/2?e:i<2/3?l+(e-l)*6*(2/3-i):l}class ot{constructor(e,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,a)}set(e,i,a){if(i===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,i),this}setRGB(e,i,a,o=Yt.workingColorSpace){return this.r=e,this.g=i,this.b=a,Yt.toWorkingColorSpace(this,o),this}setHSL(e,i,a,o=Yt.workingColorSpace){if(e=bg(e,1),i=Pt(i,0,1),a=Pt(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=Qp(f,c,e+1/3),this.g=Qp(f,c,e),this.b=Qp(f,c,e-1/3)}return Yt.toWorkingColorSpace(this,o),this}setStyle(e,i=Wn){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Wn){const a=XS[e.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=Tl(e.r),this.g=Tl(e.g),this.b=Tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Yt.fromWorkingColorSpace(vi.copy(this),e),Math.round(Pt(vi.r*255,0,255))*65536+Math.round(Pt(vi.g*255,0,255))*256+Math.round(Pt(vi.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Yt.workingColorSpace){Yt.fromWorkingColorSpace(vi.copy(this),i);const a=vi.r,o=vi.g,c=vi.b,f=Math.max(a,o,c),h=Math.min(a,o,c);let p,m;const _=(h+f)/2;if(h===f)p=0,m=0;else{const g=f-h;switch(m=_<=.5?g/(f+h):g/(2-f-h),f){case a:p=(o-c)/g+(o<c?6:0);break;case o:p=(c-a)/g+2;break;case c:p=(a-o)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,i=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(vi.copy(this),i),e.r=vi.r,e.g=vi.g,e.b=vi.b,e}getStyle(e=Wn){Yt.fromWorkingColorSpace(vi.copy(this),e);const i=vi.r,a=vi.g,o=vi.b;return e!==Wn?`color(${e} ${i.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,i,a){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+i,pr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,a){return this.r=e.r+(i.r-e.r)*a,this.g=e.g+(i.g-e.g)*a,this.b=e.b+(i.b-e.b)*a,this}lerpHSL(e,i){this.getHSL(pr),e.getHSL(bf);const a=qc(pr.h,bf.h,i),o=qc(pr.s,bf.s,i),c=qc(pr.l,bf.l,i);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*a+c[6]*o,this.g=c[1]*i+c[4]*a+c[7]*o,this.b=c[2]*i+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vi=new ot;ot.NAMES=XS;let x1=0;class qa extends Pl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Na(),this.name="",this.type="Material",this.blending=Ml,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Em,this.blendDst=Tm,this.blendEquation=po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rl,this.stencilZFail=rl,this.stencilZPass=rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const a=e[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ml&&(a.blending=this.blending),this.side!==Ds&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Em&&(a.blendSrc=this.blendSrc),this.blendDst!==Tm&&(a.blendDst=this.blendDst),this.blendEquation!==po&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Al&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rl&&(a.stencilFail=this.stencilFail),this.stencilZFail!==rl&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==rl&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=o(e.textures),f=o(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let a=null;if(i!==null){const o=i.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tr extends qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wa,this.combine=bS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hn=new F,Af=new Gt;let y1=0;class On{constructor(e,i,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=a,this.usage=og,this.updateRanges=[],this.gpuType=Ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,a){e*=this.itemSize,a*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Af.fromBufferAttribute(this,i),Af.applyMatrix3(e),this.setXY(i,Af.x,Af.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)Hn.fromBufferAttribute(this,i),Hn.applyMatrix3(e),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}applyMatrix4(e){for(let i=0,a=this.count;i<a;i++)Hn.fromBufferAttribute(this,i),Hn.applyMatrix4(e),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let i=0,a=this.count;i<a;i++)Hn.fromBufferAttribute(this,i),Hn.applyNormalMatrix(e),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let i=0,a=this.count;i<a;i++)Hn.fromBufferAttribute(this,i),Hn.transformDirection(e),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let a=this.array[e*this.itemSize+i];return this.normalized&&(a=wa(a,this.array)),a}setComponent(e,i,a){return this.normalized&&(a=on(a,this.array)),this.array[e*this.itemSize+i]=a,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=wa(i,this.array)),i}setX(e,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=wa(i,this.array)),i}setY(e,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=wa(i,this.array)),i}setZ(e,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=wa(i,this.array)),i}setW(e,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,a){return e*=this.itemSize,this.normalized&&(i=on(i,this.array),a=on(a,this.array)),this.array[e+0]=i,this.array[e+1]=a,this}setXYZ(e,i,a,o){return e*=this.itemSize,this.normalized&&(i=on(i,this.array),a=on(a,this.array),o=on(o,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,i,a,o,c){return e*=this.itemSize,this.normalized&&(i=on(i,this.array),a=on(a,this.array),o=on(o,this.array),c=on(c,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==og&&(e.usage=this.usage),e}}class jS extends On{constructor(e,i,a){super(new Uint16Array(e),i,a)}}class qS extends On{constructor(e,i,a){super(new Uint32Array(e),i,a)}}class Ci extends On{constructor(e,i,a){super(new Float32Array(e),i,a)}}let S1=0;const fa=new yt,Jp=new En,gl=new F,Ji=new Hi,Ic=new Hi,ni=new F;class Di extends Pl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=Na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(GS(e)?qS:jS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,a=0){this.groups.push({start:e,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new wt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fa.makeRotationFromQuaternion(e),this.applyMatrix4(fa),this}rotateX(e){return fa.makeRotationX(e),this.applyMatrix4(fa),this}rotateY(e){return fa.makeRotationY(e),this.applyMatrix4(fa),this}rotateZ(e){return fa.makeRotationZ(e),this.applyMatrix4(fa),this}translate(e,i,a){return fa.makeTranslation(e,i,a),this.applyMatrix4(fa),this}scale(e,i,a){return fa.makeScale(e,i,a),this.applyMatrix4(fa),this}lookAt(e){return Jp.lookAt(e),Jp.updateMatrix(),this.applyMatrix4(Jp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gl).negate(),this.translate(gl.x,gl.y,gl.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const f=e[o];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ci(a,3))}else{const a=Math.min(e.length,i.count);for(let o=0;o<a;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let a=0,o=i.length;a<o;a++){const c=i[a];Ji.setFromBufferAttribute(c),this.morphTargetsRelative?(ni.addVectors(this.boundingBox.min,Ji.min),this.boundingBox.expandByPoint(ni),ni.addVectors(this.boundingBox.max,Ji.max),this.boundingBox.expandByPoint(ni)):(this.boundingBox.expandByPoint(Ji.min),this.boundingBox.expandByPoint(Ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pa);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const a=this.boundingSphere.center;if(Ji.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Ic.setFromBufferAttribute(h),this.morphTargetsRelative?(ni.addVectors(Ji.min,Ic.min),Ji.expandByPoint(ni),ni.addVectors(Ji.max,Ic.max),Ji.expandByPoint(ni)):(Ji.expandByPoint(Ic.min),Ji.expandByPoint(Ic.max))}Ji.getCenter(a);let o=0;for(let c=0,f=e.count;c<f;c++)ni.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(ni));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)ni.fromBufferAttribute(h,m),p&&(gl.fromBufferAttribute(e,m),ni.add(gl)),o=Math.max(o,a.distanceToSquared(ni))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,o=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let B=0;B<a.count;B++)h[B]=new F,p[B]=new F;const m=new F,_=new F,g=new F,v=new Gt,y=new Gt,E=new Gt,T=new F,M=new F;function S(B,N,w){m.fromBufferAttribute(a,B),_.fromBufferAttribute(a,N),g.fromBufferAttribute(a,w),v.fromBufferAttribute(c,B),y.fromBufferAttribute(c,N),E.fromBufferAttribute(c,w),_.sub(m),g.sub(m),y.sub(v),E.sub(v);const G=1/(y.x*E.y-E.x*y.y);isFinite(G)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(G),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(G),h[B].add(T),h[N].add(T),h[w].add(T),p[B].add(M),p[N].add(M),p[w].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let B=0,N=I.length;B<N;++B){const w=I[B],G=w.start,se=w.count;for(let ae=G,ue=G+se;ae<ue;ae+=3)S(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const L=new F,R=new F,H=new F,z=new F;function O(B){H.fromBufferAttribute(o,B),z.copy(H);const N=h[B];L.copy(N),L.sub(H.multiplyScalar(H.dot(N))).normalize(),R.crossVectors(z,N);const G=R.dot(p[B])<0?-1:1;f.setXYZW(B,L.x,L.y,L.z,G)}for(let B=0,N=I.length;B<N;++B){const w=I[B],G=w.start,se=w.count;for(let ae=G,ue=G+se;ae<ue;ae+=3)O(e.getX(ae+0)),O(e.getX(ae+1)),O(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new On(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const o=new F,c=new F,f=new F,h=new F,p=new F,m=new F,_=new F,g=new F;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),T=e.getX(v+1),M=e.getX(v+2);o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),_.subVectors(f,c),g.subVectors(o,c),_.cross(g),h.fromBufferAttribute(a,E),p.fromBufferAttribute(a,T),m.fromBufferAttribute(a,M),h.add(_),p.add(_),m.add(_),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,y=i.count;v<y;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),_.subVectors(f,c),g.subVectors(o,c),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,a=e.count;i<a;i++)ni.fromBufferAttribute(e,i),ni.normalize(),e.setXYZ(i,ni.x,ni.y,ni.z)}toNonIndexed(){function e(h,p){const m=h.array,_=h.itemSize,g=h.normalized,v=new m.constructor(p.length*_);let y=0,E=0;for(let T=0,M=p.length;T<M;T++){h.isInterleavedBufferAttribute?y=p[T]*h.data.stride+h.offset:y=p[T]*_;for(let S=0;S<_;S++)v[E++]=m[y++]}return new On(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Di,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=e(p,a);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let _=0,g=m.length;_<g;_++){const v=m[_],y=e(v,a);p.push(y)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const p in a){const m=a[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let g=0,v=m.length;g<v;g++){const y=m[g];_.push(y.toJSON(e.data))}_.length>0&&(o[p]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone(i));const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(i))}const c=e.morphAttributes;for(const m in c){const _=[],g=c[m];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fy=new yt,ao=new ud,wf=new pa,dy=new F,Rf=new F,Cf=new F,Nf=new F,$p=new F,Df=new F,hy=new F,Lf=new F;class Yn extends En{constructor(e=new Di,i=new Tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const o=i[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){Df.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=h[p],g=c[p];_!==0&&($p.fromBufferAttribute(g,e),f?Df.addScaledVector($p,_):Df.addScaledVector($p.sub(i),_))}i.add(Df)}return i}raycast(e,i){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),wf.copy(a.boundingSphere),wf.applyMatrix4(c),ao.copy(e.ray).recast(e.near),!(wf.containsPoint(ao.origin)===!1&&(ao.intersectSphere(wf,dy)===null||ao.origin.distanceToSquared(dy)>(e.far-e.near)**2))&&(fy.copy(c).invert(),ao.copy(e.ray).applyMatrix4(fy),!(a.boundingBox!==null&&ao.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,i,ao)))}_computeIntersections(e,i,a){let o;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const M=v[E],S=f[M.materialIndex],I=Math.max(M.start,y.start),L=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let R=I,H=L;R<H;R+=3){const z=h.getX(R),O=h.getX(R+1),B=h.getX(R+2);o=Uf(this,S,e,a,m,_,g,z,O,B),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=M.materialIndex,i.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let M=E,S=T;M<S;M+=3){const I=h.getX(M),L=h.getX(M+1),R=h.getX(M+2);o=Uf(this,f,e,a,m,_,g,I,L,R),o&&(o.faceIndex=Math.floor(M/3),i.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const M=v[E],S=f[M.materialIndex],I=Math.max(M.start,y.start),L=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let R=I,H=L;R<H;R+=3){const z=R,O=R+1,B=R+2;o=Uf(this,S,e,a,m,_,g,z,O,B),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=M.materialIndex,i.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let M=E,S=T;M<S;M+=3){const I=M,L=M+1,R=M+2;o=Uf(this,f,e,a,m,_,g,I,L,R),o&&(o.faceIndex=Math.floor(M/3),i.push(o))}}}}function M1(l,e,i,a,o,c,f,h){let p;if(e.side===wi?p=a.intersectTriangle(f,c,o,!0,h):p=a.intersectTriangle(o,c,f,e.side===Ds,h),p===null)return null;Lf.copy(h),Lf.applyMatrix4(l.matrixWorld);const m=i.ray.origin.distanceTo(Lf);return m<i.near||m>i.far?null:{distance:m,point:Lf.clone(),object:l}}function Uf(l,e,i,a,o,c,f,h,p,m){l.getVertexPosition(h,Rf),l.getVertexPosition(p,Cf),l.getVertexPosition(m,Nf);const _=M1(l,e,i,a,Rf,Cf,Nf,hy);if(_){const g=new F;Ra.getBarycoord(hy,Rf,Cf,Nf,g),o&&(_.uv=Ra.getInterpolatedAttribute(o,h,p,m,g,new Gt)),c&&(_.uv1=Ra.getInterpolatedAttribute(c,h,p,m,g,new Gt)),f&&(_.normal=Ra.getInterpolatedAttribute(f,h,p,m,g,new F),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new F,materialIndex:0};Ra.getNormal(Rf,Cf,Nf,v.normal),_.face=v,_.barycoord=g}return _}class So extends Di{constructor(e=1,i=1,a=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:a,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],_=[],g=[];let v=0,y=0;E("z","y","x",-1,-1,a,i,e,f,c,0),E("z","y","x",1,-1,a,i,-e,f,c,1),E("x","z","y",1,1,e,a,i,o,f,2),E("x","z","y",1,-1,e,a,-i,o,f,3),E("x","y","z",1,-1,e,i,a,o,c,4),E("x","y","z",-1,-1,e,i,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new Ci(m,3)),this.setAttribute("normal",new Ci(_,3)),this.setAttribute("uv",new Ci(g,2));function E(T,M,S,I,L,R,H,z,O,B,N){const w=R/O,G=H/B,se=R/2,ae=H/2,ue=z/2,fe=O+1,q=B+1;let ce=0,Y=0;const ye=new F;for(let Me=0;Me<q;Me++){const je=Me*G-ae;for(let ut=0;ut<fe;ut++){const Nt=ut*w-se;ye[T]=Nt*I,ye[M]=je*L,ye[S]=ue,m.push(ye.x,ye.y,ye.z),ye[T]=0,ye[M]=0,ye[S]=z>0?1:-1,_.push(ye.x,ye.y,ye.z),g.push(ut/O),g.push(1-Me/B),ce+=1}}for(let Me=0;Me<B;Me++)for(let je=0;je<O;je++){const ut=v+je+fe*Me,Nt=v+je+fe*(Me+1),D=v+(je+1)+fe*(Me+1),J=v+(je+1)+fe*Me;p.push(ut,Nt,J),p.push(Nt,D,J),Y+=6}h.addGroup(y,Y,N),y+=Y,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ll(l){const e={};for(const i in l){e[i]={};for(const a in l[i]){const o=l[i][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][a]=null):e[i][a]=o.clone():Array.isArray(o)?e[i][a]=o.slice():e[i][a]=o}}return e}function Ti(l){const e={};for(let i=0;i<l.length;i++){const a=Ll(l[i]);for(const o in a)e[o]=a[o]}return e}function E1(l){const e=[];for(let i=0;i<l.length;i++)e.push(l[i].clone());return e}function WS(l){const e=l.getRenderTarget();return e===null?l.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Yt.workingColorSpace}const fd={clone:Ll,merge:Ti};var T1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T1,this.fragmentShader=b1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ll(e.uniforms),this.uniformsGroups=E1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?i.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[o]={type:"m4",value:f.toArray()}:i.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class YS extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ws}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new F,py=new Gt,my=new Gt;class Ai extends YS{constructor(e=50,i=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Dl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dl*2*Math.atan(Math.tan(jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,a){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,i){return this.getViewBounds(e,py,my),i.subVectors(my,py)}setViewOffset(e,i,a,o,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(jc*.5*this.fov)/this.zoom,a=2*i,o=this.aspect*a,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*o/p,i-=f.offsetY*a/m,o*=f.width/p,a*=f.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _l=-90,vl=1;class A1 extends En{constructor(e,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ai(_l,vl,e,i);o.layers=this.layers,this.add(o);const c=new Ai(_l,vl,e,i);c.layers=this.layers,this.add(c);const f=new Ai(_l,vl,e,i);f.layers=this.layers,this.add(f);const h=new Ai(_l,vl,e,i);h.layers=this.layers,this.add(h);const p=new Ai(_l,vl,e,i);p.layers=this.layers,this.add(p);const m=new Ai(_l,vl,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[a,o,c,f,h,p]=i;for(const m of i)this.remove(m);if(e===ws)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===rd)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(i,c),e.setRenderTarget(a,1,o),e.render(i,f),e.setRenderTarget(a,2,o),e.render(i,h),e.setRenderTarget(a,3,o),e.render(i,p),e.setRenderTarget(a,4,o),e.render(i,m),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,o),e.render(i,_),e.setRenderTarget(g,v,y),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class ZS extends Vn{constructor(e,i,a,o,c,f,h,p,m,_){e=e!==void 0?e:[],i=i!==void 0?i:wl,super(e,i,a,o,c,f,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class w1 extends yo{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new ZS(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Fi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new So(5,5,5),c=new Ya({name:"CubemapFromEquirect",uniforms:Ll(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:wi,blending:Ar});c.uniforms.tEquirect.value=i;const f=new Yn(o,c),h=i.minFilter;return i.minFilter===As&&(i.minFilter=Fi),new A1(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i,a,o){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,a,o);e.setRenderTarget(c)}}class Rs extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R1={type:"move"};class em{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const a of e.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,a){let o=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const M=i.getJointPose(T,a),S=this._getHandJoint(m,T);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,E=.005;m.inputState.pinching&&v>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=i.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(R1)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const a=new Rs;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[i.jointName]=a,e.add(a)}return e.joints[i.jointName]}}class wg{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=i}clone(){return new wg(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class C1 extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wa,this.environmentIntensity=1,this.environmentRotation=new Wa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class KS{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=og,this.updateRanges=[],this.version=0,this.uuid=Na()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,a){e*=this.stride,a*=i.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=i.array[a+o];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Na()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(i,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Na()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ei=new F;class Cs{constructor(e,i,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,a=this.data.count;i<a;i++)Ei.fromBufferAttribute(this,i),Ei.applyMatrix4(e),this.setXYZ(i,Ei.x,Ei.y,Ei.z);return this}applyNormalMatrix(e){for(let i=0,a=this.count;i<a;i++)Ei.fromBufferAttribute(this,i),Ei.applyNormalMatrix(e),this.setXYZ(i,Ei.x,Ei.y,Ei.z);return this}transformDirection(e){for(let i=0,a=this.count;i<a;i++)Ei.fromBufferAttribute(this,i),Ei.transformDirection(e),this.setXYZ(i,Ei.x,Ei.y,Ei.z);return this}getComponent(e,i){let a=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(a=wa(a,this.array)),a}setComponent(e,i,a){return this.normalized&&(a=on(a,this.array)),this.data.array[e*this.data.stride+this.offset+i]=a,this}setX(e,i){return this.normalized&&(i=on(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=on(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=on(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=on(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=wa(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=wa(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=wa(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=wa(i,this.array)),i}setXY(e,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(i=on(i,this.array),a=on(a,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=a,this}setXYZ(e,i,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(i=on(i,this.array),a=on(a,this.array),o=on(o,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=a,this.data.array[e+2]=o,this}setXYZW(e,i,a,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=on(i,this.array),a=on(a,this.array),o=on(o,this.array),c=on(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=a,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[o+c])}return new On(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gy=new F,_y=new jt,vy=new jt,N1=new F,xy=new yt,Of=new F,tm=new pa,yy=new yt,nm=new ud;class D1 extends Yn{constructor(e,i){super(e,i),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qx,this.bindMatrix=new yt,this.bindMatrixInverse=new yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hi),this.boundingBox.makeEmpty();const i=e.getAttribute("position");for(let a=0;a<i.count;a++)this.getVertexPosition(a,Of),this.boundingBox.expandByPoint(Of)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pa),this.boundingSphere.makeEmpty();const i=e.getAttribute("position");for(let a=0;a<i.count;a++)this.getVertexPosition(a,Of),this.boundingSphere.expandByPoint(Of)}copy(e,i){return super.copy(e,i),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,i){const a=this.material,o=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tm.copy(this.boundingSphere),tm.applyMatrix4(o),e.ray.intersectsSphere(tm)!==!1&&(yy.copy(o).invert(),nm.copy(e.ray).applyMatrix4(yy),!(this.boundingBox!==null&&nm.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,i,nm)))}getVertexPosition(e,i){return super.getVertexPosition(e,i),this.applyBoneTransform(e,i),i}bind(e,i){this.skeleton=e,i===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),i=this.matrixWorld),this.bindMatrix.copy(i),this.bindMatrixInverse.copy(i).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new jt,i=this.geometry.attributes.skinWeight;for(let a=0,o=i.count;a<o;a++){e.fromBufferAttribute(i,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),i.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qx?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wb?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,i){const a=this.skeleton,o=this.geometry;_y.fromBufferAttribute(o.attributes.skinIndex,e),vy.fromBufferAttribute(o.attributes.skinWeight,e),gy.copy(i).applyMatrix4(this.bindMatrix),i.set(0,0,0);for(let c=0;c<4;c++){const f=vy.getComponent(c);if(f!==0){const h=_y.getComponent(c);xy.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),i.addScaledVector(N1.copy(gy).applyMatrix4(xy),f)}}return i.applyMatrix4(this.bindMatrixInverse)}}class QS extends En{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rg extends Vn{constructor(e=null,i=1,a=1,o,c,f,h,p,m=Ri,_=Ri,g,v){super(null,f,h,p,m,_,o,c,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sy=new yt,L1=new yt;class Cg{constructor(e=[],i=[]){this.uuid=Na(),this.bones=e.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),i.length===0)this.calculateInverses();else if(e.length!==i.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,o=this.bones.length;a<o;a++)this.boneInverses.push(new yt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,i=this.bones.length;e<i;e++){const a=new yt;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,i=this.bones.length;e<i;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,i=this.bones.length;e<i;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,i=this.boneInverses,a=this.boneMatrices,o=this.boneTexture;for(let c=0,f=e.length;c<f;c++){const h=e[c]?e[c].matrixWorld:L1;Sy.multiplyMatrices(h,i[c]),Sy.toArray(a,c*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new Cg(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const i=new Float32Array(e*e*4);i.set(this.boneMatrices);const a=new Rg(i,e,e,$i,Ca);return a.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=a,this}getBoneByName(e){for(let i=0,a=this.bones.length;i<a;i++){const o=this.bones[i];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,i){this.uuid=e.uuid;for(let a=0,o=e.bones.length;a<o;a++){const c=e.bones[a];let f=i[c];f===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",c),f=new QS),this.bones.push(f),this.boneInverses.push(new yt().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const i=this.bones,a=this.boneInverses;for(let o=0,c=i.length;o<c;o++){const f=i[o];e.bones.push(f.uuid);const h=a[o];e.boneInverses.push(h.toArray())}return e}}class lg extends On{constructor(e,i,a,o=1){super(e,i,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xl=new yt,My=new yt,If=[],Ey=new Hi,U1=new yt,Pc=new Yn,zc=new pa;class Ng extends Yn{constructor(e,i,a){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new lg(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,U1)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<i;a++)this.getMatrixAt(a,xl),Ey.copy(e.boundingBox).applyMatrix4(xl),this.boundingBox.union(Ey)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new pa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<i;a++)this.getMatrixAt(a,xl),zc.copy(e.boundingSphere).applyMatrix4(xl),this.boundingSphere.union(zc)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const a=i.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,f=e*c+1;for(let h=0;h<a.length;h++)a[h]=o[f+h]}raycast(e,i){const a=this.matrixWorld,o=this.count;if(Pc.geometry=this.geometry,Pc.material=this.material,Pc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zc.copy(this.boundingSphere),zc.applyMatrix4(a),e.ray.intersectsSphere(zc)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,xl),My.multiplyMatrices(a,xl),Pc.matrixWorld=My,Pc.raycast(e,If);for(let f=0,h=If.length;f<h;f++){const p=If[f];p.instanceId=c,p.object=this,i.push(p)}If.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new lg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const a=i.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new Rg(new Float32Array(o*this.count),o,this.count,Sg,Ca));const c=this.morphTexture.source.data.data;let f=0;for(let m=0;m<a.length;m++)f+=a[m];const h=this.geometry.morphTargetsRelative?1:1-f,p=o*e;c[p]=h,c.set(a,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const im=new F,O1=new F,I1=new wt;class uo{constructor(e=new F(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,a,o){return this.normal.set(e,i,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,a){const o=im.subVectors(a,i).cross(O1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const a=e.delta(im),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:i.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return i<0&&a>0||a<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const a=i||I1.getNormalMatrix(e),o=this.coplanarPoint(im).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const so=new pa,Pf=new F;class Dg{constructor(e=new uo,i=new uo,a=new uo,o=new uo,c=new uo,f=new uo){this.planes=[e,i,a,o,c,f]}set(e,i,a,o,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,i=ws){const a=this.planes,o=e.elements,c=o[0],f=o[1],h=o[2],p=o[3],m=o[4],_=o[5],g=o[6],v=o[7],y=o[8],E=o[9],T=o[10],M=o[11],S=o[12],I=o[13],L=o[14],R=o[15];if(a[0].setComponents(p-c,v-m,M-y,R-S).normalize(),a[1].setComponents(p+c,v+m,M+y,R+S).normalize(),a[2].setComponents(p+f,v+_,M+E,R+I).normalize(),a[3].setComponents(p-f,v-_,M-E,R-I).normalize(),a[4].setComponents(p-h,v-g,M-T,R-L).normalize(),i===ws)a[5].setComponents(p+h,v+g,M+T,R+L).normalize();else if(i===rd)a[5].setComponents(h,g,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),so.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(so)}intersectsSprite(e){return so.center.set(0,0,0),so.radius=.7071067811865476,so.applyMatrix4(e.matrixWorld),this.intersectsSphere(so)}intersectsSphere(e){const i=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let a=0;a<6;a++){const o=i[a];if(Pf.x=o.normal.x>0?e.max.x:e.min.x,Pf.y=o.normal.y>0?e.max.y:e.min.y,Pf.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Pf)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class JS extends qa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const od=new F,ld=new F,Ty=new yt,Bc=new ud,zf=new pa,am=new F,by=new F;class Lg extends En{constructor(e=new Di,i=new JS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,a=[0];for(let o=1,c=i.count;o<c;o++)od.fromBufferAttribute(i,o-1),ld.fromBufferAttribute(i,o),a[o]=a[o-1],a[o]+=od.distanceTo(ld);e.setAttribute("lineDistance",new Ci(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),zf.copy(a.boundingSphere),zf.applyMatrix4(o),zf.radius+=c,e.ray.intersectsSphere(zf)===!1)return;Ty.copy(o).invert(),Bc.copy(e.ray).applyMatrix4(Ty);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,_=a.index,v=a.attributes.position;if(_!==null){const y=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let T=y,M=E-1;T<M;T+=m){const S=_.getX(T),I=_.getX(T+1),L=Bf(this,e,Bc,p,S,I,T);L&&i.push(L)}if(this.isLineLoop){const T=_.getX(E-1),M=_.getX(y),S=Bf(this,e,Bc,p,T,M,E-1);S&&i.push(S)}}else{const y=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=y,M=E-1;T<M;T+=m){const S=Bf(this,e,Bc,p,T,T+1,T);S&&i.push(S)}if(this.isLineLoop){const T=Bf(this,e,Bc,p,E-1,y,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const o=i[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Bf(l,e,i,a,o,c,f){const h=l.geometry.attributes.position;if(od.fromBufferAttribute(h,o),ld.fromBufferAttribute(h,c),i.distanceSqToSegment(od,ld,am,by)>a)return;am.applyMatrix4(l.matrixWorld);const m=e.ray.origin.distanceTo(am);if(!(m<e.near||m>e.far))return{distance:m,point:by.clone().applyMatrix4(l.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:l}}const Ay=new F,wy=new F;class P1 extends Lg{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,a=[];for(let o=0,c=i.count;o<c;o+=2)Ay.fromBufferAttribute(i,o),wy.fromBufferAttribute(i,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Ay.distanceTo(wy);e.setAttribute("lineDistance",new Ci(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class z1 extends Lg{constructor(e,i){super(e,i),this.isLineLoop=!0,this.type="LineLoop"}}class $S extends qa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ry=new yt,cg=new ud,Ff=new pa,Hf=new F;class B1 extends En{constructor(e=new Di,i=new $S){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Ff.copy(a.boundingSphere),Ff.applyMatrix4(o),Ff.radius+=c,e.ray.intersectsSphere(Ff)===!1)return;Ry.copy(o).invert(),cg.copy(e.ray).applyMatrix4(Ry);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=a.index,g=a.attributes.position;if(m!==null){const v=Math.max(0,f.start),y=Math.min(m.count,f.start+f.count);for(let E=v,T=y;E<T;E++){const M=m.getX(E);Hf.fromBufferAttribute(g,M),Cy(Hf,M,p,o,e,i,this)}}else{const v=Math.max(0,f.start),y=Math.min(g.count,f.start+f.count);for(let E=v,T=y;E<T;E++)Hf.fromBufferAttribute(g,E),Cy(Hf,E,p,o,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const o=i[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Cy(l,e,i,a,o,c,f){const h=cg.distanceSqToPoint(l);if(h<i){const p=new F;cg.closestPointToPoint(l,p),p.applyMatrix4(a);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class F1 extends Vn{constructor(e,i,a,o,c,f,h,p,m){super(e,i,a,o,c,f,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class eM extends Vn{constructor(e,i,a,o,c,f,h,p,m,_=El){if(_!==El&&_!==Nl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&_===El&&(a=xo),a===void 0&&_===Nl&&(a=Cl),super(null,o,c,f,h,p,_,a,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:Ri,this.minFilter=p!==void 0?p:Ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ag(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ug extends Di{constructor(e=1,i=1,a=1,o=32,c=1,f=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:a,radialSegments:o,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:p};const m=this;o=Math.floor(o),c=Math.floor(c);const _=[],g=[],v=[],y=[];let E=0;const T=[],M=a/2;let S=0;I(),f===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new Ci(g,3)),this.setAttribute("normal",new Ci(v,3)),this.setAttribute("uv",new Ci(y,2));function I(){const R=new F,H=new F;let z=0;const O=(i-e)/a;for(let B=0;B<=c;B++){const N=[],w=B/c,G=w*(i-e)+e;for(let se=0;se<=o;se++){const ae=se/o,ue=ae*p+h,fe=Math.sin(ue),q=Math.cos(ue);H.x=G*fe,H.y=-w*a+M,H.z=G*q,g.push(H.x,H.y,H.z),R.set(fe,O,q).normalize(),v.push(R.x,R.y,R.z),y.push(ae,1-w),N.push(E++)}T.push(N)}for(let B=0;B<o;B++)for(let N=0;N<c;N++){const w=T[N][B],G=T[N+1][B],se=T[N+1][B+1],ae=T[N][B+1];(e>0||N!==0)&&(_.push(w,G,ae),z+=3),(i>0||N!==c-1)&&(_.push(G,se,ae),z+=3)}m.addGroup(S,z,0),S+=z}function L(R){const H=E,z=new Gt,O=new F;let B=0;const N=R===!0?e:i,w=R===!0?1:-1;for(let se=1;se<=o;se++)g.push(0,M*w,0),v.push(0,w,0),y.push(.5,.5),E++;const G=E;for(let se=0;se<=o;se++){const ue=se/o*p+h,fe=Math.cos(ue),q=Math.sin(ue);O.x=N*q,O.y=M*w,O.z=N*fe,g.push(O.x,O.y,O.z),v.push(0,w,0),z.x=fe*.5+.5,z.y=q*.5*w+.5,y.push(z.x,z.y),E++}for(let se=0;se<o;se++){const ae=H+se,ue=G+se;R===!0?_.push(ue,ue+1,ae):_.push(ue+1,ue,ae),B+=3}m.addGroup(S,B,R===!0?1:2),S+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ug(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $c extends Di{constructor(e=1,i=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:a,heightSegments:o};const c=e/2,f=i/2,h=Math.floor(a),p=Math.floor(o),m=h+1,_=p+1,g=e/h,v=i/p,y=[],E=[],T=[],M=[];for(let S=0;S<_;S++){const I=S*v-f;for(let L=0;L<m;L++){const R=L*g-c;E.push(R,-I,0),T.push(0,0,1),M.push(L/h),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let I=0;I<h;I++){const L=I+m*S,R=I+m*(S+1),H=I+1+m*(S+1),z=I+1+m*S;y.push(L,R,z),y.push(R,H,z)}this.setIndex(y),this.setAttribute("position",new Ci(E,3)),this.setAttribute("normal",new Ci(T,3)),this.setAttribute("uv",new Ci(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.width,e.height,e.widthSegments,e.heightSegments)}}class H1 extends Di{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const i=[],a=new Set,o=new F,c=new F;if(e.index!==null){const f=e.attributes.position,h=e.index;let p=e.groups;p.length===0&&(p=[{start:0,count:h.count,materialIndex:0}]);for(let m=0,_=p.length;m<_;++m){const g=p[m],v=g.start,y=g.count;for(let E=v,T=v+y;E<T;E+=3)for(let M=0;M<3;M++){const S=h.getX(E+M),I=h.getX(E+(M+1)%3);o.fromBufferAttribute(f,S),c.fromBufferAttribute(f,I),Ny(o,c,a)===!0&&(i.push(o.x,o.y,o.z),i.push(c.x,c.y,c.z))}}}else{const f=e.attributes.position;for(let h=0,p=f.count/3;h<p;h++)for(let m=0;m<3;m++){const _=3*h+m,g=3*h+(m+1)%3;o.fromBufferAttribute(f,_),c.fromBufferAttribute(f,g),Ny(o,c,a)===!0&&(i.push(o.x,o.y,o.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new Ci(i,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Ny(l,e,i){const a=`${l.x},${l.y},${l.z}-${e.x},${e.y},${e.z}`,o=`${e.x},${e.y},${e.z}-${l.x},${l.y},${l.z}`;return i.has(a)===!0||i.has(o)===!0?!1:(i.add(a),i.add(o),!0)}class go extends qa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=FS,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ka extends go{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class G1 extends qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V1 extends qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Gf(l,e,i){return!l||!i&&l.constructor===e?l:typeof e.BYTES_PER_ELEMENT=="number"?new e(l):Array.prototype.slice.call(l)}function k1(l){return ArrayBuffer.isView(l)&&!(l instanceof DataView)}function X1(l){function e(o,c){return l[o]-l[c]}const i=l.length,a=new Array(i);for(let o=0;o!==i;++o)a[o]=o;return a.sort(e),a}function Dy(l,e,i){const a=l.length,o=new l.constructor(a);for(let c=0,f=0;f!==a;++c){const h=i[c]*e;for(let p=0;p!==e;++p)o[f++]=l[h+p]}return o}function tM(l,e,i,a){let o=1,c=l[0];for(;c!==void 0&&c[a]===void 0;)c=l[o++];if(c===void 0)return;let f=c[a];if(f!==void 0)if(Array.isArray(f))do f=c[a],f!==void 0&&(e.push(c.time),i.push(...f)),c=l[o++];while(c!==void 0);else if(f.toArray!==void 0)do f=c[a],f!==void 0&&(e.push(c.time),f.toArray(i,i.length)),c=l[o++];while(c!==void 0);else do f=c[a],f!==void 0&&(e.push(c.time),i.push(f)),c=l[o++];while(c!==void 0)}class eu{constructor(e,i,a,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new i.constructor(a),this.sampleValues=i,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const i=this.parameterPositions;let a=this._cachedIndex,o=i[a],c=i[a-1];e:{t:{let f;n:{i:if(!(e<o)){for(let h=a+2;;){if(o===void 0){if(e<c)break i;return a=i.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(c=o,o=i[++a],e<o)break t}f=i.length;break n}if(!(e>=c)){const h=i[1];e<h&&(a=2,c=h);for(let p=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(o=c,c=i[--a-1],e>=c)break t}f=a,a=0;break n}break e}for(;a<f;){const h=a+f>>>1;e<i[h]?f=h:a=h+1}if(o=i[a],c=i[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return a=i.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,o)}return this.interpolate_(a,c,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o;for(let f=0;f!==o;++f)i[f]=a[c+f];return i}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class j1 extends eu{constructor(e,i,a,o){super(e,i,a,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wx,endingEnd:Wx}}intervalChanged_(e,i,a){const o=this.parameterPositions;let c=e-2,f=e+1,h=o[c],p=o[f];if(h===void 0)switch(this.getSettings_().endingStart){case Yx:c=e,h=2*i-a;break;case Zx:c=o.length-2,h=i+o[c]-o[c+1];break;default:c=e,h=a}if(p===void 0)switch(this.getSettings_().endingEnd){case Yx:f=e,p=2*a-i;break;case Zx:f=1,p=a+o[1]-o[0];break;default:f=e-1,p=i}const m=(a-i)*.5,_=this.valueSize;this._weightPrev=m/(i-h),this._weightNext=m/(p-a),this._offsetPrev=c*_,this._offsetNext=f*_}interpolate_(e,i,a,o){const c=this.resultBuffer,f=this.sampleValues,h=this.valueSize,p=e*h,m=p-h,_=this._offsetPrev,g=this._offsetNext,v=this._weightPrev,y=this._weightNext,E=(a-i)/(o-i),T=E*E,M=T*E,S=-v*M+2*v*T-v*E,I=(1+v)*M+(-1.5-2*v)*T+(-.5+v)*E+1,L=(-1-y)*M+(1.5+y)*T+.5*E,R=y*M-y*T;for(let H=0;H!==h;++H)c[H]=S*f[_+H]+I*f[m+H]+L*f[p+H]+R*f[g+H];return c}}class q1 extends eu{constructor(e,i,a,o){super(e,i,a,o)}interpolate_(e,i,a,o){const c=this.resultBuffer,f=this.sampleValues,h=this.valueSize,p=e*h,m=p-h,_=(a-i)/(o-i),g=1-_;for(let v=0;v!==h;++v)c[v]=f[m+v]*g+f[p+v]*_;return c}}class W1 extends eu{constructor(e,i,a,o){super(e,i,a,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class Qa{constructor(e,i,a,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(i===void 0||i.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gf(i,this.TimeBufferType),this.values=Gf(a,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const i=e.constructor;let a;if(i.toJSON!==this.toJSON)a=i.toJSON(e);else{a={name:e.name,times:Gf(e.times,Array),values:Gf(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(a.interpolation=o)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new W1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new q1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new j1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let i;switch(e){case Zc:i=this.InterpolantFactoryMethodDiscrete;break;case Kc:i=this.InterpolantFactoryMethodLinear;break;case Op:i=this.InterpolantFactoryMethodSmooth;break}if(i===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=i,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zc;case this.InterpolantFactoryMethodLinear:return Kc;case this.InterpolantFactoryMethodSmooth:return Op}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const i=this.times;for(let a=0,o=i.length;a!==o;++a)i[a]+=e}return this}scale(e){if(e!==1){const i=this.times;for(let a=0,o=i.length;a!==o;++a)i[a]*=e}return this}trim(e,i){const a=this.times,o=a.length;let c=0,f=o-1;for(;c!==o&&a[c]<e;)++c;for(;f!==-1&&a[f]>i;)--f;if(++f,c!==0||f!==o){c>=f&&(f=Math.max(f,1),c=f-1);const h=this.getValueSize();this.times=a.slice(c,f),this.values=this.values.slice(c*h,f*h)}return this}validate(){let e=!0;const i=this.getValueSize();i-Math.floor(i)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,o=this.values,c=a.length;c===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let f=null;for(let h=0;h!==c;h++){const p=a[h];if(typeof p=="number"&&isNaN(p)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,p),e=!1;break}if(f!==null&&f>p){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,p,f),e=!1;break}f=p}if(o!==void 0&&k1(o))for(let h=0,p=o.length;h!==p;++h){const m=o[h];if(isNaN(m)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,m),e=!1;break}}return e}optimize(){const e=this.times.slice(),i=this.values.slice(),a=this.getValueSize(),o=this.getInterpolation()===Op,c=e.length-1;let f=1;for(let h=1;h<c;++h){let p=!1;const m=e[h],_=e[h+1];if(m!==_&&(h!==1||m!==e[0]))if(o)p=!0;else{const g=h*a,v=g-a,y=g+a;for(let E=0;E!==a;++E){const T=i[g+E];if(T!==i[v+E]||T!==i[y+E]){p=!0;break}}}if(p){if(h!==f){e[f]=e[h];const g=h*a,v=f*a;for(let y=0;y!==a;++y)i[v+y]=i[g+y]}++f}}if(c>0){e[f]=e[c];for(let h=c*a,p=f*a,m=0;m!==a;++m)i[p+m]=i[h+m];++f}return f!==e.length?(this.times=e.slice(0,f),this.values=i.slice(0,f*a)):(this.times=e,this.values=i),this}clone(){const e=this.times.slice(),i=this.values.slice(),a=this.constructor,o=new a(this.name,e,i);return o.createInterpolant=this.createInterpolant,o}}Qa.prototype.TimeBufferType=Float32Array;Qa.prototype.ValueBufferType=Float32Array;Qa.prototype.DefaultInterpolation=Kc;class zl extends Qa{constructor(e,i,a){super(e,i,a)}}zl.prototype.ValueTypeName="bool";zl.prototype.ValueBufferType=Array;zl.prototype.DefaultInterpolation=Zc;zl.prototype.InterpolantFactoryMethodLinear=void 0;zl.prototype.InterpolantFactoryMethodSmooth=void 0;class nM extends Qa{}nM.prototype.ValueTypeName="color";class Ul extends Qa{}Ul.prototype.ValueTypeName="number";class Y1 extends eu{constructor(e,i,a,o){super(e,i,a,o)}interpolate_(e,i,a,o){const c=this.resultBuffer,f=this.sampleValues,h=this.valueSize,p=(a-i)/(o-i);let m=e*h;for(let _=m+h;m!==_;m+=4)Za.slerpFlat(c,0,f,m-h,f,m,p);return c}}class Ol extends Qa{InterpolantFactoryMethodLinear(e){return new Y1(this.times,this.values,this.getValueSize(),e)}}Ol.prototype.ValueTypeName="quaternion";Ol.prototype.InterpolantFactoryMethodSmooth=void 0;class Bl extends Qa{constructor(e,i,a){super(e,i,a)}}Bl.prototype.ValueTypeName="string";Bl.prototype.ValueBufferType=Array;Bl.prototype.DefaultInterpolation=Zc;Bl.prototype.InterpolantFactoryMethodLinear=void 0;Bl.prototype.InterpolantFactoryMethodSmooth=void 0;class Il extends Qa{}Il.prototype.ValueTypeName="vector";class Z1{constructor(e="",i=-1,a=[],o=Rb){this.name=e,this.tracks=a,this.duration=i,this.blendMode=o,this.uuid=Na(),this.duration<0&&this.resetDuration()}static parse(e){const i=[],a=e.tracks,o=1/(e.fps||1);for(let f=0,h=a.length;f!==h;++f)i.push(Q1(a[f]).scale(o));const c=new this(e.name,e.duration,i,e.blendMode);return c.uuid=e.uuid,c}static toJSON(e){const i=[],a=e.tracks,o={name:e.name,duration:e.duration,tracks:i,uuid:e.uuid,blendMode:e.blendMode};for(let c=0,f=a.length;c!==f;++c)i.push(Qa.toJSON(a[c]));return o}static CreateFromMorphTargetSequence(e,i,a,o){const c=i.length,f=[];for(let h=0;h<c;h++){let p=[],m=[];p.push((h+c-1)%c,h,(h+1)%c),m.push(0,1,0);const _=X1(p);p=Dy(p,1,_),m=Dy(m,1,_),!o&&p[0]===0&&(p.push(c),m.push(m[0])),f.push(new Ul(".morphTargetInfluences["+i[h].name+"]",p,m).scale(1/a))}return new this(e,-1,f)}static findByName(e,i){let a=e;if(!Array.isArray(e)){const o=e;a=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<a.length;o++)if(a[o].name===i)return a[o];return null}static CreateClipsFromMorphTargetSequences(e,i,a){const o={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,p=e.length;h<p;h++){const m=e[h],_=m.name.match(c);if(_&&_.length>1){const g=_[1];let v=o[g];v||(o[g]=v=[]),v.push(m)}}const f=[];for(const h in o)f.push(this.CreateFromMorphTargetSequence(h,o[h],i,a));return f}static parseAnimation(e,i){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(g,v,y,E,T){if(y.length!==0){const M=[],S=[];tM(y,M,S,E),M.length!==0&&T.push(new g(v,M,S))}},o=[],c=e.name||"default",f=e.fps||30,h=e.blendMode;let p=e.length||-1;const m=e.hierarchy||[];for(let g=0;g<m.length;g++){const v=m[g].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let E;for(E=0;E<v.length;E++)if(v[E].morphTargets)for(let T=0;T<v[E].morphTargets.length;T++)y[v[E].morphTargets[T]]=-1;for(const T in y){const M=[],S=[];for(let I=0;I!==v[E].morphTargets.length;++I){const L=v[E];M.push(L.time),S.push(L.morphTarget===T?1:0)}o.push(new Ul(".morphTargetInfluence["+T+"]",M,S))}p=y.length*f}else{const y=".bones["+i[g].name+"]";a(Il,y+".position",v,"pos",o),a(Ol,y+".quaternion",v,"rot",o),a(Il,y+".scale",v,"scl",o)}}return o.length===0?null:new this(c,p,o,h)}resetDuration(){const e=this.tracks;let i=0;for(let a=0,o=e.length;a!==o;++a){const c=this.tracks[a];i=Math.max(i,c.times[c.times.length-1])}return this.duration=i,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let i=0;i<this.tracks.length;i++)e=e&&this.tracks[i].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function K1(l){switch(l.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ul;case"vector":case"vector2":case"vector3":case"vector4":return Il;case"color":return nM;case"quaternion":return Ol;case"bool":case"boolean":return zl;case"string":return Bl}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+l)}function Q1(l){if(l.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=K1(l.type);if(l.times===void 0){const i=[],a=[];tM(l.keys,i,a,"value"),l.times=i,l.values=a}return e.parse!==void 0?e.parse(l):new e(l.name,l.times,l.values,l.interpolation)}const br={enabled:!1,files:{},add:function(l,e){this.enabled!==!1&&(this.files[l]=e)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class J1{constructor(e,i,a){const o=this;let c=!1,f=0,h=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=a,this.itemStart=function(_){h++,c===!1&&o.onStart!==void 0&&o.onStart(_,f,h),c=!0},this.itemEnd=function(_){f++,o.onProgress!==void 0&&o.onProgress(_,f,h),f===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(_){o.onError!==void 0&&o.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,g){return m.push(_,g),this},this.removeHandler=function(_){const g=m.indexOf(_);return g!==-1&&m.splice(g,2),this},this.getHandler=function(_){for(let g=0,v=m.length;g<v;g+=2){const y=m[g],E=m[g+1];if(y.global&&(y.lastIndex=0),y.test(_))return E}return null}}}const $1=new J1;class Fl{constructor(e){this.manager=e!==void 0?e:$1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const a=this;return new Promise(function(o,c){a.load(e,o,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ms={};class eA extends Error{constructor(e,i){super(e),this.response=i}}class iM extends Fl{constructor(e){super(e)}load(e,i,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=br.get(e);if(c!==void 0)return this.manager.itemStart(e),setTimeout(()=>{i&&i(c),this.manager.itemEnd(e)},0),c;if(Ms[e]!==void 0){Ms[e].push({onLoad:i,onProgress:a,onError:o});return}Ms[e]=[],Ms[e].push({onLoad:i,onProgress:a,onError:o});const f=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,p=this.responseType;fetch(f).then(m=>{if(m.status===200||m.status===0){if(m.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||m.body===void 0||m.body.getReader===void 0)return m;const _=Ms[e],g=m.body.getReader(),v=m.headers.get("X-File-Size")||m.headers.get("Content-Length"),y=v?parseInt(v):0,E=y!==0;let T=0;const M=new ReadableStream({start(S){I();function I(){g.read().then(({done:L,value:R})=>{if(L)S.close();else{T+=R.byteLength;const H=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:y});for(let z=0,O=_.length;z<O;z++){const B=_[z];B.onProgress&&B.onProgress(H)}S.enqueue(R),I()}},L=>{S.error(L)})}}});return new Response(M)}else throw new eA(`fetch for "${m.url}" responded with ${m.status}: ${m.statusText}`,m)}).then(m=>{switch(p){case"arraybuffer":return m.arrayBuffer();case"blob":return m.blob();case"document":return m.text().then(_=>new DOMParser().parseFromString(_,h));case"json":return m.json();default:if(h===void 0)return m.text();{const g=/charset="?([^;"\s]*)"?/i.exec(h),v=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(v);return m.arrayBuffer().then(E=>y.decode(E))}}}).then(m=>{br.add(e,m);const _=Ms[e];delete Ms[e];for(let g=0,v=_.length;g<v;g++){const y=_[g];y.onLoad&&y.onLoad(m)}}).catch(m=>{const _=Ms[e];if(_===void 0)throw this.manager.itemError(e),m;delete Ms[e];for(let g=0,v=_.length;g<v;g++){const y=_[g];y.onError&&y.onError(m)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class tA extends Fl{constructor(e){super(e)}load(e,i,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,f=br.get(e);if(f!==void 0)return c.manager.itemStart(e),setTimeout(function(){i&&i(f),c.manager.itemEnd(e)},0),f;const h=Qc("img");function p(){_(),br.add(e,this),i&&i(this),c.manager.itemEnd(e)}function m(g){_(),o&&o(g),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){h.removeEventListener("load",p,!1),h.removeEventListener("error",m,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),c.manager.itemStart(e),h.src=e,h}}class nA extends Fl{constructor(e){super(e)}load(e,i,a,o){const c=new Vn,f=new tA(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},a,o),c}}class dd extends En{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class iA extends dd{constructor(e,i,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const sm=new yt,Ly=new F,Uy=new F;class Og{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dg,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,a=this.matrix;Ly.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ly),Uy.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Uy),i.updateMatrixWorld(),sm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sm),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(sm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class aA extends Og{constructor(){super(new Ai(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const i=this.camera,a=Dl*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,c=e.distance||i.far;(a!==i.fov||o!==i.aspect||c!==i.far)&&(i.fov=a,i.aspect=o,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sA extends dd{constructor(e,i,a=0,o=Math.PI/3,c=0,f=2){super(e,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.distance=a,this.angle=o,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new aA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Oy=new yt,Fc=new F,rm=new F;class rA extends Og{constructor(){super(new Ai(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Gt(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,i=0){const a=this.camera,o=this.matrix,c=e.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),Fc.setFromMatrixPosition(e.matrixWorld),a.position.copy(Fc),rm.copy(a.position),rm.add(this._cubeDirections[i]),a.up.copy(this._cubeUps[i]),a.lookAt(rm),a.updateMatrixWorld(),o.makeTranslation(-Fc.x,-Fc.y,-Fc.z),Oy.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oy)}}class oA extends dd{constructor(e,i,a=0,o=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new rA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ig extends YS{constructor(e=-1,i=1,a=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=a,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,a,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,f=a+e,h=o+i,p=o-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class lA extends Og{constructor(){super(new Ig(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aM extends dd{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new lA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wc{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let i="";for(let a=0,o=e.length;a<o;a++)i+=String.fromCharCode(e[a]);try{return decodeURIComponent(escape(i))}catch{return i}}static extractUrlBase(e){const i=e.lastIndexOf("/");return i===-1?"./":e.slice(0,i+1)}static resolveURL(e,i){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(i)&&/^\//.test(e)&&(i=i.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:i+e)}}class cA extends Di{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class uA extends Fl{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,i,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,f=br.get(e);if(f!==void 0){if(c.manager.itemStart(e),f.then){f.then(m=>{i&&i(m),c.manager.itemEnd(e)}).catch(m=>{o&&o(m)});return}return setTimeout(function(){i&&i(f),c.manager.itemEnd(e)},0),f}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader;const p=fetch(e,h).then(function(m){return m.blob()}).then(function(m){return createImageBitmap(m,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(m){return br.add(e,m),i&&i(m),c.manager.itemEnd(e),m}).catch(function(m){o&&o(m),br.remove(e),c.manager.itemError(e),c.manager.itemEnd(e)});br.add(e,p),c.manager.itemStart(e)}}class fA extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Pg="\\[\\]\\.:\\/",dA=new RegExp("["+Pg+"]","g"),zg="[^"+Pg+"]",hA="[^"+Pg.replace("\\.","")+"]",pA=/((?:WC+[\/:])*)/.source.replace("WC",zg),mA=/(WCOD+)?/.source.replace("WCOD",hA),gA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zg),_A=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zg),vA=new RegExp("^"+pA+mA+gA+_A+"$"),xA=["material","materials","bones","map"];class yA{constructor(e,i,a){const o=a||ln.parseTrackName(i);this._targetGroup=e,this._bindings=e.subscribe_(i,o)}getValue(e,i){this.bind();const a=this._targetGroup.nCachedObjects_,o=this._bindings[a];o!==void 0&&o.getValue(e,i)}setValue(e,i){const a=this._bindings;for(let o=this._targetGroup.nCachedObjects_,c=a.length;o!==c;++o)a[o].setValue(e,i)}bind(){const e=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=e.length;i!==a;++i)e[i].bind()}unbind(){const e=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=e.length;i!==a;++i)e[i].unbind()}}class ln{constructor(e,i,a){this.path=i,this.parsedPath=a||ln.parseTrackName(i),this.node=ln.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,i,a){return e&&e.isAnimationObjectGroup?new ln.Composite(e,i,a):new ln(e,i,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dA,"")}static parseTrackName(e){const i=vA.exec(e);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},o=a.nodeName&&a.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const c=a.nodeName.substring(o+1);xA.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,o),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,i){if(i===void 0||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(i);if(a!==void 0)return a}if(e.children){const a=function(c){for(let f=0;f<c.length;f++){const h=c[f];if(h.name===i||h.uuid===i)return h;const p=a(h.children);if(p)return p}return null},o=a(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,i){e[i]=this.targetObject[this.propertyName]}_getValue_array(e,i){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)e[i++]=a[o]}_getValue_arrayElement(e,i){e[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,i){this.resolvedProperty.toArray(e,i)}_setValue_direct(e,i){this.targetObject[this.propertyName]=e[i]}_setValue_direct_setNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,i){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[i++]}_setValue_array_setNeedsUpdate(e,i){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,i){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,i){this.resolvedProperty[this.propertyIndex]=e[i]}_setValue_arrayElement_setNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,i){this.resolvedProperty.fromArray(e,i)}_setValue_fromArray_setNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,i){this.bind(),this.getValue(e,i)}_setValue_unbound(e,i){this.bind(),this.setValue(e,i)}bind(){let e=this.node;const i=this.parsedPath,a=i.objectName,o=i.propertyName;let c=i.propertyIndex;if(e||(e=ln.findNode(this.rootNode,i.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let m=i.objectIndex;switch(a){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let _=0;_<e.length;_++)if(e[_].name===m){m=_;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(m!==void 0){if(e[m]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[m]}}const f=e[o];if(f===void 0){const m=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+m+"."+o+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=f,this.propertyIndex=c}else f.fromArray!==void 0&&f.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(p=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=o;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ln.Composite=yA;ln.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ln.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ln.prototype.GetterByBindingType=[ln.prototype._getValue_direct,ln.prototype._getValue_array,ln.prototype._getValue_arrayElement,ln.prototype._getValue_toArray];ln.prototype.SetterByBindingTypeAndVersioning=[[ln.prototype._setValue_direct,ln.prototype._setValue_direct_setNeedsUpdate,ln.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_array,ln.prototype._setValue_array_setNeedsUpdate,ln.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_arrayElement,ln.prototype._setValue_arrayElement_setNeedsUpdate,ln.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_fromArray,ln.prototype._setValue_fromArray_setNeedsUpdate,ln.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ug extends KS{constructor(e,i,a=1){super(e,i),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const i=super.clone(e);return i.meshPerAttribute=this.meshPerAttribute,i}toJSON(e){const i=super.toJSON(e);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}}const Iy=new F,Vf=new F;class SA{constructor(e=new F,i=new F){this.start=e,this.end=i}set(e,i){return this.start.copy(e),this.end.copy(i),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,i){return this.delta(i).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,i){Iy.subVectors(e,this.start),Vf.subVectors(this.end,this.start);const a=Vf.dot(Vf);let c=Vf.dot(Iy)/a;return i&&(c=Pt(c,0,1)),c}closestPointToPoint(e,i,a){const o=this.closestPointToPointParameter(e,i);return this.delta(a).multiplyScalar(o).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Py(l,e,i,a){const o=MA(a);switch(i){case LS:return l*e;case OS:return l*e;case IS:return l*e*2;case Sg:return l*e/o.components*o.byteLength;case Mg:return l*e/o.components*o.byteLength;case PS:return l*e*2/o.components*o.byteLength;case Eg:return l*e*2/o.components*o.byteLength;case US:return l*e*3/o.components*o.byteLength;case $i:return l*e*4/o.components*o.byteLength;case Tg:return l*e*4/o.components*o.byteLength;case Qf:case Jf:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*8;case $f:case ed:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*16;case Im:case zm:return Math.max(l,16)*Math.max(e,8)/4;case Om:case Pm:return Math.max(l,8)*Math.max(e,8)/2;case Bm:case Fm:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*8;case Hm:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*16;case Gm:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*16;case Vm:return Math.floor((l+4)/5)*Math.floor((e+3)/4)*16;case km:return Math.floor((l+4)/5)*Math.floor((e+4)/5)*16;case Xm:return Math.floor((l+5)/6)*Math.floor((e+4)/5)*16;case jm:return Math.floor((l+5)/6)*Math.floor((e+5)/6)*16;case qm:return Math.floor((l+7)/8)*Math.floor((e+4)/5)*16;case Wm:return Math.floor((l+7)/8)*Math.floor((e+5)/6)*16;case Ym:return Math.floor((l+7)/8)*Math.floor((e+7)/8)*16;case Zm:return Math.floor((l+9)/10)*Math.floor((e+4)/5)*16;case Km:return Math.floor((l+9)/10)*Math.floor((e+5)/6)*16;case Qm:return Math.floor((l+9)/10)*Math.floor((e+7)/8)*16;case Jm:return Math.floor((l+9)/10)*Math.floor((e+9)/10)*16;case $m:return Math.floor((l+11)/12)*Math.floor((e+9)/10)*16;case eg:return Math.floor((l+11)/12)*Math.floor((e+11)/12)*16;case td:case tg:case ng:return Math.ceil(l/4)*Math.ceil(e/4)*16;case zS:case ig:return Math.ceil(l/4)*Math.ceil(e/4)*8;case ag:case sg:return Math.ceil(l/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function MA(l){switch(l){case Ls:case CS:return{byteLength:1,components:1};case Yc:case NS:case Jc:return{byteLength:2,components:1};case xg:case yg:return{byteLength:2,components:4};case xo:case vg:case Ca:return{byteLength:4,components:1};case DS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${l}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_g}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_g);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sM(){let l=null,e=!1,i=null,a=null;function o(c,f){i(c,f),a=l.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&(a=l.requestAnimationFrame(o),e=!0)},stop:function(){l.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){l=c}}}function EA(l){const e=new WeakMap;function i(h,p){const m=h.array,_=h.usage,g=m.byteLength,v=l.createBuffer();l.bindBuffer(p,v),l.bufferData(p,m,_),h.onUploadCallback();let y;if(m instanceof Float32Array)y=l.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=l.HALF_FLOAT:y=l.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=l.SHORT;else if(m instanceof Uint32Array)y=l.UNSIGNED_INT;else if(m instanceof Int32Array)y=l.INT;else if(m instanceof Int8Array)y=l.BYTE;else if(m instanceof Uint8Array)y=l.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=l.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function a(h,p,m){const _=p.array,g=p.updateRanges;if(l.bindBuffer(m,h),g.length===0)l.bufferSubData(m,0,_);else{g.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<g.length;y++){const E=g[v],T=g[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,g[v]=T)}g.length=v+1;for(let y=0,E=g.length;y<E;y++){const T=g[y];l.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(l.deleteBuffer(p.buffer),e.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:o,remove:c,update:f}}var TA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,UA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,WA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ZA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,KA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$A=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ew="gl_FragColor = linearToOutputTexel( gl_FragColor );",tw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ow=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_w=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ew=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Aw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ww=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ow=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$w=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_R=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ER=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$R=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ct={alphahash_fragment:TA,alphahash_pars_fragment:bA,alphamap_fragment:AA,alphamap_pars_fragment:wA,alphatest_fragment:RA,alphatest_pars_fragment:CA,aomap_fragment:NA,aomap_pars_fragment:DA,batching_pars_vertex:LA,batching_vertex:UA,begin_vertex:OA,beginnormal_vertex:IA,bsdfs:PA,iridescence_fragment:zA,bumpmap_pars_fragment:BA,clipping_planes_fragment:FA,clipping_planes_pars_fragment:HA,clipping_planes_pars_vertex:GA,clipping_planes_vertex:VA,color_fragment:kA,color_pars_fragment:XA,color_pars_vertex:jA,color_vertex:qA,common:WA,cube_uv_reflection_fragment:YA,defaultnormal_vertex:ZA,displacementmap_pars_vertex:KA,displacementmap_vertex:QA,emissivemap_fragment:JA,emissivemap_pars_fragment:$A,colorspace_fragment:ew,colorspace_pars_fragment:tw,envmap_fragment:nw,envmap_common_pars_fragment:iw,envmap_pars_fragment:aw,envmap_pars_vertex:sw,envmap_physical_pars_fragment:gw,envmap_vertex:rw,fog_vertex:ow,fog_pars_vertex:lw,fog_fragment:cw,fog_pars_fragment:uw,gradientmap_pars_fragment:fw,lightmap_pars_fragment:dw,lights_lambert_fragment:hw,lights_lambert_pars_fragment:pw,lights_pars_begin:mw,lights_toon_fragment:_w,lights_toon_pars_fragment:vw,lights_phong_fragment:xw,lights_phong_pars_fragment:yw,lights_physical_fragment:Sw,lights_physical_pars_fragment:Mw,lights_fragment_begin:Ew,lights_fragment_maps:Tw,lights_fragment_end:bw,logdepthbuf_fragment:Aw,logdepthbuf_pars_fragment:ww,logdepthbuf_pars_vertex:Rw,logdepthbuf_vertex:Cw,map_fragment:Nw,map_pars_fragment:Dw,map_particle_fragment:Lw,map_particle_pars_fragment:Uw,metalnessmap_fragment:Ow,metalnessmap_pars_fragment:Iw,morphinstance_vertex:Pw,morphcolor_vertex:zw,morphnormal_vertex:Bw,morphtarget_pars_vertex:Fw,morphtarget_vertex:Hw,normal_fragment_begin:Gw,normal_fragment_maps:Vw,normal_pars_fragment:kw,normal_pars_vertex:Xw,normal_vertex:jw,normalmap_pars_fragment:qw,clearcoat_normal_fragment_begin:Ww,clearcoat_normal_fragment_maps:Yw,clearcoat_pars_fragment:Zw,iridescence_pars_fragment:Kw,opaque_fragment:Qw,packing:Jw,premultiplied_alpha_fragment:$w,project_vertex:eR,dithering_fragment:tR,dithering_pars_fragment:nR,roughnessmap_fragment:iR,roughnessmap_pars_fragment:aR,shadowmap_pars_fragment:sR,shadowmap_pars_vertex:rR,shadowmap_vertex:oR,shadowmask_pars_fragment:lR,skinbase_vertex:cR,skinning_pars_vertex:uR,skinning_vertex:fR,skinnormal_vertex:dR,specularmap_fragment:hR,specularmap_pars_fragment:pR,tonemapping_fragment:mR,tonemapping_pars_fragment:gR,transmission_fragment:_R,transmission_pars_fragment:vR,uv_pars_fragment:xR,uv_pars_vertex:yR,uv_vertex:SR,worldpos_vertex:MR,background_vert:ER,background_frag:TR,backgroundCube_vert:bR,backgroundCube_frag:AR,cube_vert:wR,cube_frag:RR,depth_vert:CR,depth_frag:NR,distanceRGBA_vert:DR,distanceRGBA_frag:LR,equirect_vert:UR,equirect_frag:OR,linedashed_vert:IR,linedashed_frag:PR,meshbasic_vert:zR,meshbasic_frag:BR,meshlambert_vert:FR,meshlambert_frag:HR,meshmatcap_vert:GR,meshmatcap_frag:VR,meshnormal_vert:kR,meshnormal_frag:XR,meshphong_vert:jR,meshphong_frag:qR,meshphysical_vert:WR,meshphysical_frag:YR,meshtoon_vert:ZR,meshtoon_frag:KR,points_vert:QR,points_frag:JR,shadow_vert:$R,shadow_frag:eC,sprite_vert:tC,sprite_frag:nC},Fe={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Bi={basic:{uniforms:Ti([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Ti([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Ti([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Ti([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Ti([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Ti([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Ti([Fe.points,Fe.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Ti([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Ti([Fe.common,Fe.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Ti([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Ti([Fe.sprite,Fe.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:Ti([Fe.common,Fe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:Ti([Fe.lights,Fe.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Bi.physical={uniforms:Ti([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const kf={r:0,b:0,g:0},ro=new Wa,iC=new yt;function aC(l,e,i,a,o,c,f){const h=new ot(0);let p=c===!0?0:1,m,_,g=null,v=0,y=null;function E(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?i:e).get(R)),R}function T(L){let R=!1;const H=E(L);H===null?S(h,p):H&&H.isColor&&(S(H,1),R=!0);const z=l.xr.getEnvironmentBlendMode();z==="additive"?a.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(l.autoClear||R)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil))}function M(L,R){const H=E(R);H&&(H.isCubeTexture||H.mapping===cd)?(_===void 0&&(_=new Yn(new So(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:Ll(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),ro.copy(R.backgroundRotation),ro.x*=-1,ro.y*=-1,ro.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(iC.makeRotationFromEuler(ro)),_.material.toneMapped=Yt.getTransfer(H.colorSpace)!==dn,(g!==H||v!==H.version||y!==l.toneMapping)&&(_.material.needsUpdate=!0,g=H,v=H.version,y=l.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new Yn(new $c(2,2),new Ya({name:"BackgroundMaterial",uniforms:Ll(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Yt.getTransfer(H.colorSpace)!==dn,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||v!==H.version||y!==l.toneMapping)&&(m.material.needsUpdate=!0,g=H,v=H.version,y=l.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function S(L,R){L.getRGB(kf,WS(l)),a.buffers.color.setClear(kf.r,kf.g,kf.b,R,f)}function I(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,R=1){h.set(L),p=R,S(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,S(h,p)},render:T,addToRenderList:M,dispose:I}}function sC(l,e){const i=l.getParameter(l.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,f=!1;function h(w,G,se,ae,ue){let fe=!1;const q=g(ae,se,G);c!==q&&(c=q,m(c.object)),fe=y(w,ae,se,ue),fe&&E(w,ae,se,ue),ue!==null&&e.update(ue,l.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,R(w,G,se,ae),ue!==null&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return l.createVertexArray()}function m(w){return l.bindVertexArray(w)}function _(w){return l.deleteVertexArray(w)}function g(w,G,se){const ae=se.wireframe===!0;let ue=a[w.id];ue===void 0&&(ue={},a[w.id]=ue);let fe=ue[G.id];fe===void 0&&(fe={},ue[G.id]=fe);let q=fe[ae];return q===void 0&&(q=v(p()),fe[ae]=q),q}function v(w){const G=[],se=[],ae=[];for(let ue=0;ue<i;ue++)G[ue]=0,se[ue]=0,ae[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:se,attributeDivisors:ae,object:w,attributes:{},index:null}}function y(w,G,se,ae){const ue=c.attributes,fe=G.attributes;let q=0;const ce=se.getAttributes();for(const Y in ce)if(ce[Y].location>=0){const Me=ue[Y];let je=fe[Y];if(je===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(je=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(je=w.instanceColor)),Me===void 0||Me.attribute!==je||je&&Me.data!==je.data)return!0;q++}return c.attributesNum!==q||c.index!==ae}function E(w,G,se,ae){const ue={},fe=G.attributes;let q=0;const ce=se.getAttributes();for(const Y in ce)if(ce[Y].location>=0){let Me=fe[Y];Me===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor));const je={};je.attribute=Me,Me&&Me.data&&(je.data=Me.data),ue[Y]=je,q++}c.attributes=ue,c.attributesNum=q,c.index=ae}function T(){const w=c.newAttributes;for(let G=0,se=w.length;G<se;G++)w[G]=0}function M(w){S(w,0)}function S(w,G){const se=c.newAttributes,ae=c.enabledAttributes,ue=c.attributeDivisors;se[w]=1,ae[w]===0&&(l.enableVertexAttribArray(w),ae[w]=1),ue[w]!==G&&(l.vertexAttribDivisor(w,G),ue[w]=G)}function I(){const w=c.newAttributes,G=c.enabledAttributes;for(let se=0,ae=G.length;se<ae;se++)G[se]!==w[se]&&(l.disableVertexAttribArray(se),G[se]=0)}function L(w,G,se,ae,ue,fe,q){q===!0?l.vertexAttribIPointer(w,G,se,ue,fe):l.vertexAttribPointer(w,G,se,ae,ue,fe)}function R(w,G,se,ae){T();const ue=ae.attributes,fe=se.getAttributes(),q=G.defaultAttributeValues;for(const ce in fe){const Y=fe[ce];if(Y.location>=0){let ye=ue[ce];if(ye===void 0&&(ce==="instanceMatrix"&&w.instanceMatrix&&(ye=w.instanceMatrix),ce==="instanceColor"&&w.instanceColor&&(ye=w.instanceColor)),ye!==void 0){const Me=ye.normalized,je=ye.itemSize,ut=e.get(ye);if(ut===void 0)continue;const Nt=ut.buffer,D=ut.type,J=ut.bytesPerElement,ve=D===l.INT||D===l.UNSIGNED_INT||ye.gpuType===vg;if(ye.isInterleavedBufferAttribute){const me=ye.data,Ce=me.stride,We=ye.offset;if(me.isInstancedInterleavedBuffer){for(let Le=0;Le<Y.locationSize;Le++)S(Y.location+Le,me.meshPerAttribute);w.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Le=0;Le<Y.locationSize;Le++)M(Y.location+Le);l.bindBuffer(l.ARRAY_BUFFER,Nt);for(let Le=0;Le<Y.locationSize;Le++)L(Y.location+Le,je/Y.locationSize,D,Me,Ce*J,(We+je/Y.locationSize*Le)*J,ve)}else{if(ye.isInstancedBufferAttribute){for(let me=0;me<Y.locationSize;me++)S(Y.location+me,ye.meshPerAttribute);w.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let me=0;me<Y.locationSize;me++)M(Y.location+me);l.bindBuffer(l.ARRAY_BUFFER,Nt);for(let me=0;me<Y.locationSize;me++)L(Y.location+me,je/Y.locationSize,D,Me,je*J,je/Y.locationSize*me*J,ve)}}else if(q!==void 0){const Me=q[ce];if(Me!==void 0)switch(Me.length){case 2:l.vertexAttrib2fv(Y.location,Me);break;case 3:l.vertexAttrib3fv(Y.location,Me);break;case 4:l.vertexAttrib4fv(Y.location,Me);break;default:l.vertexAttrib1fv(Y.location,Me)}}}}I()}function H(){B();for(const w in a){const G=a[w];for(const se in G){const ae=G[se];for(const ue in ae)_(ae[ue].object),delete ae[ue];delete G[se]}delete a[w]}}function z(w){if(a[w.id]===void 0)return;const G=a[w.id];for(const se in G){const ae=G[se];for(const ue in ae)_(ae[ue].object),delete ae[ue];delete G[se]}delete a[w.id]}function O(w){for(const G in a){const se=a[G];if(se[w.id]===void 0)continue;const ae=se[w.id];for(const ue in ae)_(ae[ue].object),delete ae[ue];delete se[w.id]}}function B(){N(),f=!0,c!==o&&(c=o,m(c.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:B,resetDefaultState:N,dispose:H,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:M,disableUnusedAttributes:I}}function rC(l,e,i){let a;function o(m){a=m}function c(m,_){l.drawArrays(a,m,_),i.update(_,a,1)}function f(m,_,g){g!==0&&(l.drawArraysInstanced(a,m,_,g),i.update(_,a,g))}function h(m,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,_,0,g);let y=0;for(let E=0;E<g;E++)y+=_[E];i.update(y,a,1)}function p(m,_,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)f(m[E],_[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(a,m,0,_,0,v,0,g);let E=0;for(let T=0;T<g;T++)E+=_[T]*v[T];i.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function oC(l,e,i,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=l.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(O){return!(O!==$i&&a.convert(O)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const B=O===Jc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ls&&a.convert(O)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ca&&!B)}function p(O){if(O==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),E=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=l.getParameter(l.MAX_TEXTURE_SIZE),M=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),S=l.getParameter(l.MAX_VERTEX_ATTRIBS),I=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),L=l.getParameter(l.MAX_VARYING_VECTORS),R=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,z=l.getParameter(l.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:H,maxSamples:z}}function lC(l){const e=this;let i=null,a=0,o=!1,c=!1;const f=new uo,h=new wt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||o;return o=v,a=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,y){const E=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,S=l.get(g);if(!o||E===null||E.length===0||c&&!M)c?_(null):m();else{const I=c?0:a,L=I*4;let R=S.clippingState||null;p.value=R,R=_(E,v,L,y);for(let H=0;H!==L;++H)R[H]=i[H];S.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(g,v,y,E){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=p.value,E!==!0||M===null){const S=y+T*4,I=v.matrixWorldInverse;h.getNormalMatrix(I),(M===null||M.length<S)&&(M=new Float32Array(S));for(let L=0,R=y;L!==T;++L,R+=4)f.copy(g[L]).applyMatrix4(I,h),f.normal.toArray(M,R),M[R+3]=f.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function cC(l){let e=new WeakMap;function i(f,h){return h===Lm?f.mapping=wl:h===Um&&(f.mapping=Rl),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===Lm||h===Um)if(e.has(f)){const p=e.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new w1(p.height);return m.fromEquirectangularTexture(l,f),e.set(f,m),f.addEventListener("dispose",o),i(m.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Sl=4,zy=[.125,.215,.35,.446,.526,.582],mo=20,om=new Ig,By=new ot;let lm=null,cm=0,um=0,fm=!1;const fo=(1+Math.sqrt(5))/2,yl=1/fo,Fy=[new F(-fo,yl,0),new F(fo,yl,0),new F(-yl,0,fo),new F(yl,0,fo),new F(0,fo,-yl),new F(0,fo,yl),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],uC=new F;class Hy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,a=.1,o=100,c={}){const{size:f=256,position:h=uC}=c;lm=this._renderer.getRenderTarget(),cm=this._renderer.getActiveCubeFace(),um=this._renderer.getActiveMipmapLevel(),fm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ky(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lm,cm,um),this._renderer.xr.enabled=fm,e.scissorTest=!1,Xf(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===wl||e.mapping===Rl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lm=this._renderer.getRenderTarget(),cm=this._renderer.getActiveCubeFace(),um=this._renderer.getActiveMipmapLevel(),fm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:Jc,format:$i,colorSpace:Ni,depthBuffer:!1},o=Gy(e,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gy(e,i,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fC(c)),this._blurMaterial=dC(c,e,i)}return o}_compileMaterial(e){const i=new Yn(this._lodPlanes[0],e);this._renderer.compile(i,om)}_sceneToCubeUV(e,i,a,o,c){const p=new Ai(90,1,i,a),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(By),g.toneMapping=wr,g.autoClear=!1;const E=new Tr({name:"PMREM.Background",side:wi,depthWrite:!1,depthTest:!1}),T=new Yn(new So,E);let M=!1;const S=e.background;S?S.isColor&&(E.color.copy(S),e.background=null,M=!0):(E.color.copy(By),M=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[I],c.y,c.z)):L===1?(p.up.set(0,0,m[I]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[I],c.z)):(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[I]));const R=this._cubeSize;Xf(o,L*R,I>2?R:0,R,R),g.setRenderTarget(o),M&&g.render(T,p),g.render(e,p)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=S}_textureToCubeUV(e,i){const a=this._renderer,o=e.mapping===wl||e.mapping===Rl;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ky()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vy());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new Yn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Xf(i,0,0,3*p,2*p),a.setRenderTarget(i),a.render(f,om)}_applyPMREM(e){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Fy[(o-c-1)%Fy.length];this._blur(e,c-1,c,f,h)}i.autoClear=a}_blur(e,i,a,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,a,o,"latitudinal",c),this._halfBlur(f,e,a,a,o,"longitudinal",c)}_halfBlur(e,i,a,o,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Yn(this._lodPlanes[o],m),v=m.uniforms,y=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*mo-1),T=c/E,M=isFinite(c)?1+Math.floor(_*T):mo;M>mo&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${mo}`);const S=[];let I=0;for(let O=0;O<mo;++O){const B=O/T,N=Math.exp(-B*B/2);S.push(N),O===0?I+=N:O<M&&(I+=2*N)}for(let O=0;O<S.length;O++)S[O]=S[O]/I;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=S,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-a;const R=this._sizeLods[o],H=3*R*(o>L-Sl?o-L+Sl:0),z=4*(this._cubeSize-R);Xf(i,H,z,3*R,2*R),p.setRenderTarget(i),p.render(g,om)}}function fC(l){const e=[],i=[],a=[];let o=l;const c=l-Sl+1+zy.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);i.push(h);let p=1/h;f>l-Sl?p=zy[f-l+Sl-1]:f===0&&(p=0),a.push(p);const m=1/(h-2),_=-m,g=1+m,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,E=6,T=3,M=2,S=1,I=new Float32Array(T*E*y),L=new Float32Array(M*E*y),R=new Float32Array(S*E*y);for(let z=0;z<y;z++){const O=z%3*2/3-1,B=z>2?0:-1,N=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];I.set(N,T*E*z),L.set(v,M*E*z);const w=[z,z,z,z,z,z];R.set(w,S*E*z)}const H=new Di;H.setAttribute("position",new On(I,T)),H.setAttribute("uv",new On(L,M)),H.setAttribute("faceIndex",new On(R,S)),e.push(H),o>Sl&&o--}return{lodPlanes:e,sizeLods:i,sigmas:a}}function Gy(l,e,i){const a=new yo(l,e,i);return a.texture.mapping=cd,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Xf(l,e,i,a,o){l.viewport.set(e,i,a,o),l.scissor.set(e,i,a,o)}function dC(l,e,i){const a=new Float32Array(mo),o=new F(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:mo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Bg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Vy(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function ky(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Bg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hC(l){let e=new WeakMap,i=null;function a(h){if(h&&h.isTexture){const p=h.mapping,m=p===Lm||p===Um,_=p===wl||p===Rl;if(m||_){let g=e.get(h);const v=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new Hy(l)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return m&&y&&y.height>0||_&&y&&o(y)?(i===null&&(i=new Hy(l)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function o(h){let p=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function pC(l){const e={};function i(a){if(e[a]!==void 0)return e[a];let o;switch(a){case"WEBGL_depth_texture":o=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=l.getExtension(a)}return e[a]=o,o}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const o=i(a);return o===null&&co("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function mC(l,e,i,a){const o={},c=new WeakMap;function f(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete o[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return o[v.id]===!0||(v.addEventListener("dispose",f),o[v.id]=!0,i.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)e.update(v[y],l.ARRAY_BUFFER)}function m(g){const v=[],y=g.index,E=g.attributes.position;let T=0;if(y!==null){const I=y.array;T=y.version;for(let L=0,R=I.length;L<R;L+=3){const H=I[L+0],z=I[L+1],O=I[L+2];v.push(H,z,z,O,O,H)}}else if(E!==void 0){const I=E.array;T=E.version;for(let L=0,R=I.length/3-1;L<R;L+=3){const H=L+0,z=L+1,O=L+2;v.push(H,z,z,O,O,H)}}else return;const M=new(GS(v)?qS:jS)(v,1);M.version=T;const S=c.get(g);S&&e.remove(S),c.set(g,M)}function _(g){const v=c.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&m(g)}else m(g);return c.get(g)}return{get:h,update:p,getWireframeAttribute:_}}function gC(l,e,i){let a;function o(v){a=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function p(v,y){l.drawElements(a,y,c,v*f),i.update(y,a,1)}function m(v,y,E){E!==0&&(l.drawElementsInstanced(a,y,c,v*f,E),i.update(y,a,E))}function _(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,E);let M=0;for(let S=0;S<E;S++)M+=y[S];i.update(M,a,1)}function g(v,y,E,T){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<v.length;S++)m(v[S]/f,y[S],T[S]);else{M.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,T,0,E);let S=0;for(let I=0;I<E;I++)S+=y[I]*T[I];i.update(S,a,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function _C(l){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(i.calls++,f){case l.TRIANGLES:i.triangles+=h*(c/3);break;case l.LINES:i.lines+=h*(c/2);break;case l.LINE_STRIP:i.lines+=h*(c-1);break;case l.LINE_LOOP:i.lines+=h*c;break;case l.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:a}}function vC(l,e,i){const a=new WeakMap,o=new jt;function c(f,h,p){const m=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(h);if(v===void 0||v.count!==g){let w=function(){B.dispose(),a.delete(h),h.removeEventListener("dispose",w)};var y=w;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),M===!0&&(R=3);let H=h.attributes.position.count*R,z=1;H>e.maxTextureSize&&(z=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const O=new Float32Array(H*z*4*g),B=new VS(O,H,z,g);B.type=Ca,B.needsUpdate=!0;const N=R*4;for(let G=0;G<g;G++){const se=S[G],ae=I[G],ue=L[G],fe=H*z*4*G;for(let q=0;q<se.count;q++){const ce=q*N;E===!0&&(o.fromBufferAttribute(se,q),O[fe+ce+0]=o.x,O[fe+ce+1]=o.y,O[fe+ce+2]=o.z,O[fe+ce+3]=0),T===!0&&(o.fromBufferAttribute(ae,q),O[fe+ce+4]=o.x,O[fe+ce+5]=o.y,O[fe+ce+6]=o.z,O[fe+ce+7]=0),M===!0&&(o.fromBufferAttribute(ue,q),O[fe+ce+8]=o.x,O[fe+ce+9]=o.y,O[fe+ce+10]=o.z,O[fe+ce+11]=ue.itemSize===4?o.w:1)}}v={count:g,texture:B,size:new Gt(H,z)},a.set(h,v),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(l,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const T=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(l,"morphTargetBaseInfluence",T),p.getUniforms().setValue(l,"morphTargetInfluences",m)}p.getUniforms().setValue(l,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(l,"morphTargetsTextureSize",v.size)}return{update:c}}function xC(l,e,i,a){let o=new WeakMap;function c(p){const m=a.render.frame,_=p.geometry,g=e.get(p,_);if(o.get(g)!==m&&(e.update(g),o.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==m&&(i.update(p.instanceMatrix,l.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,l.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;o.get(v)!==m&&(v.update(),o.set(v,m))}return g}function f(){o=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const rM=new Vn,Xy=new eM(1,1),oM=new VS,lM=new f1,cM=new ZS,jy=[],qy=[],Wy=new Float32Array(16),Yy=new Float32Array(9),Zy=new Float32Array(4);function Hl(l,e,i){const a=l[0];if(a<=0||a>0)return l;const o=e*i;let c=jy[o];if(c===void 0&&(c=new Float32Array(o),jy[o]=c),e!==0){a.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,l[f].toArray(c,h)}return c}function Zn(l,e){if(l.length!==e.length)return!1;for(let i=0,a=l.length;i<a;i++)if(l[i]!==e[i])return!1;return!0}function Kn(l,e){for(let i=0,a=e.length;i<a;i++)l[i]=e[i]}function hd(l,e){let i=qy[e];i===void 0&&(i=new Int32Array(e),qy[e]=i);for(let a=0;a!==e;++a)i[a]=l.allocateTextureUnit();return i}function yC(l,e){const i=this.cache;i[0]!==e&&(l.uniform1f(this.addr,e),i[0]=e)}function SC(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(l.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Zn(i,e))return;l.uniform2fv(this.addr,e),Kn(i,e)}}function MC(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(l.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(l.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Zn(i,e))return;l.uniform3fv(this.addr,e),Kn(i,e)}}function EC(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(l.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Zn(i,e))return;l.uniform4fv(this.addr,e),Kn(i,e)}}function TC(l,e){const i=this.cache,a=e.elements;if(a===void 0){if(Zn(i,e))return;l.uniformMatrix2fv(this.addr,!1,e),Kn(i,e)}else{if(Zn(i,a))return;Zy.set(a),l.uniformMatrix2fv(this.addr,!1,Zy),Kn(i,a)}}function bC(l,e){const i=this.cache,a=e.elements;if(a===void 0){if(Zn(i,e))return;l.uniformMatrix3fv(this.addr,!1,e),Kn(i,e)}else{if(Zn(i,a))return;Yy.set(a),l.uniformMatrix3fv(this.addr,!1,Yy),Kn(i,a)}}function AC(l,e){const i=this.cache,a=e.elements;if(a===void 0){if(Zn(i,e))return;l.uniformMatrix4fv(this.addr,!1,e),Kn(i,e)}else{if(Zn(i,a))return;Wy.set(a),l.uniformMatrix4fv(this.addr,!1,Wy),Kn(i,a)}}function wC(l,e){const i=this.cache;i[0]!==e&&(l.uniform1i(this.addr,e),i[0]=e)}function RC(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(l.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Zn(i,e))return;l.uniform2iv(this.addr,e),Kn(i,e)}}function CC(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(l.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Zn(i,e))return;l.uniform3iv(this.addr,e),Kn(i,e)}}function NC(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(l.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Zn(i,e))return;l.uniform4iv(this.addr,e),Kn(i,e)}}function DC(l,e){const i=this.cache;i[0]!==e&&(l.uniform1ui(this.addr,e),i[0]=e)}function LC(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(l.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Zn(i,e))return;l.uniform2uiv(this.addr,e),Kn(i,e)}}function UC(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(l.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Zn(i,e))return;l.uniform3uiv(this.addr,e),Kn(i,e)}}function OC(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(l.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Zn(i,e))return;l.uniform4uiv(this.addr,e),Kn(i,e)}}function IC(l,e,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o);let c;this.type===l.SAMPLER_2D_SHADOW?(Xy.compareFunction=HS,c=Xy):c=rM,i.setTexture2D(e||c,o)}function PC(l,e,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o),i.setTexture3D(e||lM,o)}function zC(l,e,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o),i.setTextureCube(e||cM,o)}function BC(l,e,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o),i.setTexture2DArray(e||oM,o)}function FC(l){switch(l){case 5126:return yC;case 35664:return SC;case 35665:return MC;case 35666:return EC;case 35674:return TC;case 35675:return bC;case 35676:return AC;case 5124:case 35670:return wC;case 35667:case 35671:return RC;case 35668:case 35672:return CC;case 35669:case 35673:return NC;case 5125:return DC;case 36294:return LC;case 36295:return UC;case 36296:return OC;case 35678:case 36198:case 36298:case 36306:case 35682:return IC;case 35679:case 36299:case 36307:return PC;case 35680:case 36300:case 36308:case 36293:return zC;case 36289:case 36303:case 36311:case 36292:return BC}}function HC(l,e){l.uniform1fv(this.addr,e)}function GC(l,e){const i=Hl(e,this.size,2);l.uniform2fv(this.addr,i)}function VC(l,e){const i=Hl(e,this.size,3);l.uniform3fv(this.addr,i)}function kC(l,e){const i=Hl(e,this.size,4);l.uniform4fv(this.addr,i)}function XC(l,e){const i=Hl(e,this.size,4);l.uniformMatrix2fv(this.addr,!1,i)}function jC(l,e){const i=Hl(e,this.size,9);l.uniformMatrix3fv(this.addr,!1,i)}function qC(l,e){const i=Hl(e,this.size,16);l.uniformMatrix4fv(this.addr,!1,i)}function WC(l,e){l.uniform1iv(this.addr,e)}function YC(l,e){l.uniform2iv(this.addr,e)}function ZC(l,e){l.uniform3iv(this.addr,e)}function KC(l,e){l.uniform4iv(this.addr,e)}function QC(l,e){l.uniform1uiv(this.addr,e)}function JC(l,e){l.uniform2uiv(this.addr,e)}function $C(l,e){l.uniform3uiv(this.addr,e)}function e2(l,e){l.uniform4uiv(this.addr,e)}function t2(l,e,i){const a=this.cache,o=e.length,c=hd(i,o);Zn(a,c)||(l.uniform1iv(this.addr,c),Kn(a,c));for(let f=0;f!==o;++f)i.setTexture2D(e[f]||rM,c[f])}function n2(l,e,i){const a=this.cache,o=e.length,c=hd(i,o);Zn(a,c)||(l.uniform1iv(this.addr,c),Kn(a,c));for(let f=0;f!==o;++f)i.setTexture3D(e[f]||lM,c[f])}function i2(l,e,i){const a=this.cache,o=e.length,c=hd(i,o);Zn(a,c)||(l.uniform1iv(this.addr,c),Kn(a,c));for(let f=0;f!==o;++f)i.setTextureCube(e[f]||cM,c[f])}function a2(l,e,i){const a=this.cache,o=e.length,c=hd(i,o);Zn(a,c)||(l.uniform1iv(this.addr,c),Kn(a,c));for(let f=0;f!==o;++f)i.setTexture2DArray(e[f]||oM,c[f])}function s2(l){switch(l){case 5126:return HC;case 35664:return GC;case 35665:return VC;case 35666:return kC;case 35674:return XC;case 35675:return jC;case 35676:return qC;case 5124:case 35670:return WC;case 35667:case 35671:return YC;case 35668:case 35672:return ZC;case 35669:case 35673:return KC;case 5125:return QC;case 36294:return JC;case 36295:return $C;case 36296:return e2;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return n2;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return a2}}class r2{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.setValue=FC(i.type)}}class o2{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=s2(i.type)}}class l2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,a){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(e,i[h.id],a)}}}const dm=/(\w+)(\])?(\[|\.)?/g;function Ky(l,e){l.seq.push(e),l.map[e.id]=e}function c2(l,e,i){const a=l.name,o=a.length;for(dm.lastIndex=0;;){const c=dm.exec(a),f=dm.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===o){Ky(i,m===void 0?new r2(h,l,e):new o2(h,l,e));break}else{let g=i.map[h];g===void 0&&(g=new l2(h),Ky(i,g)),i=g}}}class nd{constructor(e,i){this.seq=[],this.map={};const a=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=e.getActiveUniform(i,o),f=e.getUniformLocation(i,c.name);c2(c,f,this)}}setValue(e,i,a,o){const c=this.map[i];c!==void 0&&c.setValue(e,a,o)}setOptional(e,i,a){const o=i[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,i,a,o){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,i){const a=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in i&&a.push(f)}return a}}function Qy(l,e,i){const a=l.createShader(e);return l.shaderSource(a,i),l.compileShader(a),a}const u2=37297;let f2=0;function d2(l,e){const i=l.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=o;f<c;f++){const h=f+1;a.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return a.join(`
`)}const Jy=new wt;function h2(l){Yt._getMatrix(Jy,Yt.workingColorSpace,l);const e=`mat3( ${Jy.elements.map(i=>i.toFixed(4))} )`;switch(Yt.getTransfer(l)){case sd:return[e,"LinearTransferOETF"];case dn:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",l),[e,"LinearTransferOETF"]}}function $y(l,e,i){const a=l.getShaderParameter(e,l.COMPILE_STATUS),o=l.getShaderInfoLog(e).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+o+`

`+d2(l.getShaderSource(e),f)}else return o}function p2(l,e){const i=h2(e);return[`vec4 ${l}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function m2(l,e){let i;switch(e){case Sb:i="Linear";break;case Mb:i="Reinhard";break;case Eb:i="Cineon";break;case AS:i="ACESFilmic";break;case bb:i="AgX";break;case Ab:i="Neutral";break;case Tb:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+l+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const jf=new F;function g2(){Yt.getLuminanceCoefficients(jf);const l=jf.x.toFixed(4),e=jf.y.toFixed(4),i=jf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${l}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _2(l){return[l.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",l.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kc).join(`
`)}function v2(l){const e=[];for(const i in l){const a=l[i];a!==!1&&e.push("#define "+i+" "+a)}return e.join(`
`)}function x2(l,e){const i={},a=l.getProgramParameter(e,l.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=l.getActiveAttrib(e,o),f=c.name;let h=1;c.type===l.FLOAT_MAT2&&(h=2),c.type===l.FLOAT_MAT3&&(h=3),c.type===l.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:l.getAttribLocation(e,f),locationSize:h}}return i}function kc(l){return l!==""}function eS(l,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tS(l,e){return l.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y2=/^[ \t]*#include +<([\w\d./]+)>/gm;function fg(l){return l.replace(y2,M2)}const S2=new Map;function M2(l,e){let i=Ct[e];if(i===void 0){const a=S2.get(e);if(a!==void 0)i=Ct[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return fg(i)}const E2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nS(l){return l.replace(E2,T2)}function T2(l,e,i,a){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function iS(l){let e=`precision ${l.precision} float;
	precision ${l.precision} int;
	precision ${l.precision} sampler2D;
	precision ${l.precision} samplerCube;
	precision ${l.precision} sampler3D;
	precision ${l.precision} sampler2DArray;
	precision ${l.precision} sampler2DShadow;
	precision ${l.precision} samplerCubeShadow;
	precision ${l.precision} sampler2DArrayShadow;
	precision ${l.precision} isampler2D;
	precision ${l.precision} isampler3D;
	precision ${l.precision} isamplerCube;
	precision ${l.precision} isampler2DArray;
	precision ${l.precision} usampler2D;
	precision ${l.precision} usampler3D;
	precision ${l.precision} usamplerCube;
	precision ${l.precision} usampler2DArray;
	`;return l.precision==="highp"?e+=`
#define HIGH_PRECISION`:l.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b2(l){let e="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===TS?e="SHADOWMAP_TYPE_PCF":l.shadowMapType===eb?e="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===Es&&(e="SHADOWMAP_TYPE_VSM"),e}function A2(l){let e="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case wl:case Rl:e="ENVMAP_TYPE_CUBE";break;case cd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w2(l){let e="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case Rl:e="ENVMAP_MODE_REFRACTION";break}return e}function R2(l){let e="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case bS:e="ENVMAP_BLENDING_MULTIPLY";break;case xb:e="ENVMAP_BLENDING_MIX";break;case yb:e="ENVMAP_BLENDING_ADD";break}return e}function C2(l){const e=l.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function N2(l,e,i,a){const o=l.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=b2(i),m=A2(i),_=w2(i),g=R2(i),v=C2(i),y=_2(i),E=v2(c),T=o.createProgram();let M,S,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(kc).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(kc).join(`
`),S.length>0&&(S+=`
`)):(M=[iS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kc).join(`
`),S=[iS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==wr?"#define TONE_MAPPING":"",i.toneMapping!==wr?Ct.tonemapping_pars_fragment:"",i.toneMapping!==wr?m2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,p2("linearToOutputTexel",i.outputColorSpace),g2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(kc).join(`
`)),f=fg(f),f=eS(f,i),f=tS(f,i),h=fg(h),h=eS(h,i),h=tS(h,i),f=nS(f),h=nS(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Qx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Qx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=I+M+f,R=I+S+h,H=Qy(o,o.VERTEX_SHADER,L),z=Qy(o,o.FRAGMENT_SHADER,R);o.attachShader(T,H),o.attachShader(T,z),i.index0AttributeName!==void 0?o.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(G){if(l.debug.checkShaderErrors){const se=o.getProgramInfoLog(T).trim(),ae=o.getShaderInfoLog(H).trim(),ue=o.getShaderInfoLog(z).trim();let fe=!0,q=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(fe=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(o,T,H,z);else{const ce=$y(o,H,"vertex"),Y=$y(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+se+`
`+ce+`
`+Y)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(ae===""||ue==="")&&(q=!1);q&&(G.diagnostics={runnable:fe,programLog:se,vertexShader:{log:ae,prefix:M},fragmentShader:{log:ue,prefix:S}})}o.deleteShader(H),o.deleteShader(z),B=new nd(o,T),N=x2(o,T)}let B;this.getUniforms=function(){return B===void 0&&O(this),B};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(T,u2)),w},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=f2++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=H,this.fragmentShader=z,this}let D2=0;class L2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(i),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let a=i.get(e);return a===void 0&&(a=new Set,i.set(e,a)),a}_getShaderStage(e){const i=this.shaderCache;let a=i.get(e);return a===void 0&&(a=new U2(e),i.set(e,a)),a}}class U2{constructor(e){this.id=D2++,this.code=e,this.usedTimes=0}}function O2(l,e,i,a,o,c,f){const h=new kS,p=new L2,m=new Set,_=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(N){return m.add(N),N===0?"uv":`uv${N}`}function M(N,w,G,se,ae){const ue=se.fog,fe=ae.geometry,q=N.isMeshStandardMaterial?se.environment:null,ce=(N.isMeshStandardMaterial?i:e).get(N.envMap||q),Y=ce&&ce.mapping===cd?ce.image.height:null,ye=E[N.type];N.precision!==null&&(y=o.getMaxPrecision(N.precision),y!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",y,"instead."));const Me=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,je=Me!==void 0?Me.length:0;let ut=0;fe.morphAttributes.position!==void 0&&(ut=1),fe.morphAttributes.normal!==void 0&&(ut=2),fe.morphAttributes.color!==void 0&&(ut=3);let Nt,D,J,ve;if(ye){const Ot=Bi[ye];Nt=Ot.vertexShader,D=Ot.fragmentShader}else Nt=N.vertexShader,D=N.fragmentShader,p.update(N),J=p.getVertexShaderID(N),ve=p.getFragmentShaderID(N);const me=l.getRenderTarget(),Ce=l.state.buffers.depth.getReversed(),We=ae.isInstancedMesh===!0,Le=ae.isBatchedMesh===!0,Ue=!!N.map,Pe=!!N.matcap,ft=!!ce,k=!!N.aoMap,Dn=!!N.lightMap,_t=!!N.bumpMap,Qe=!!N.normalMap,Oe=!!N.displacementMap,Rt=!!N.emissiveMap,$e=!!N.metalnessMap,U=!!N.roughnessMap,A=N.anisotropy>0,ie=N.clearcoat>0,xe=N.dispersion>0,Te=N.iridescence>0,de=N.sheen>0,qe=N.transmission>0,Be=A&&!!N.anisotropyMap,Ge=ie&&!!N.clearcoatMap,bt=ie&&!!N.clearcoatNormalMap,Re=ie&&!!N.clearcoatRoughnessMap,Ye=Te&&!!N.iridescenceMap,at=Te&&!!N.iridescenceThicknessMap,lt=de&&!!N.sheenColorMap,Xe=de&&!!N.sheenRoughnessMap,At=!!N.specularMap,St=!!N.specularColorMap,Qt=!!N.specularIntensityMap,j=qe&&!!N.transmissionMap,Ve=qe&&!!N.thicknessMap,he=!!N.gradientMap,Se=!!N.alphaMap,ke=N.alphaTest>0,Ne=!!N.alphaHash,mt=!!N.extensions;let cn=wr;N.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(cn=l.toneMapping);const An={shaderID:ye,shaderType:N.type,shaderName:N.name,vertexShader:Nt,fragmentShader:D,defines:N.defines,customVertexShaderID:J,customFragmentShaderID:ve,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:y,batching:Le,batchingColor:Le&&ae._colorsTexture!==null,instancing:We,instancingColor:We&&ae.instanceColor!==null,instancingMorph:We&&ae.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:me===null?l.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ni,alphaToCoverage:!!N.alphaToCoverage,map:Ue,matcap:Pe,envMap:ft,envMapMode:ft&&ce.mapping,envMapCubeUVHeight:Y,aoMap:k,lightMap:Dn,bumpMap:_t,normalMap:Qe,displacementMap:v&&Oe,emissiveMap:Rt,normalMapObjectSpace:Qe&&N.normalMapType===Lb,normalMapTangentSpace:Qe&&N.normalMapType===FS,metalnessMap:$e,roughnessMap:U,anisotropy:A,anisotropyMap:Be,clearcoat:ie,clearcoatMap:Ge,clearcoatNormalMap:bt,clearcoatRoughnessMap:Re,dispersion:xe,iridescence:Te,iridescenceMap:Ye,iridescenceThicknessMap:at,sheen:de,sheenColorMap:lt,sheenRoughnessMap:Xe,specularMap:At,specularColorMap:St,specularIntensityMap:Qt,transmission:qe,transmissionMap:j,thicknessMap:Ve,gradientMap:he,opaque:N.transparent===!1&&N.blending===Ml&&N.alphaToCoverage===!1,alphaMap:Se,alphaTest:ke,alphaHash:Ne,combine:N.combine,mapUv:Ue&&T(N.map.channel),aoMapUv:k&&T(N.aoMap.channel),lightMapUv:Dn&&T(N.lightMap.channel),bumpMapUv:_t&&T(N.bumpMap.channel),normalMapUv:Qe&&T(N.normalMap.channel),displacementMapUv:Oe&&T(N.displacementMap.channel),emissiveMapUv:Rt&&T(N.emissiveMap.channel),metalnessMapUv:$e&&T(N.metalnessMap.channel),roughnessMapUv:U&&T(N.roughnessMap.channel),anisotropyMapUv:Be&&T(N.anisotropyMap.channel),clearcoatMapUv:Ge&&T(N.clearcoatMap.channel),clearcoatNormalMapUv:bt&&T(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&T(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&T(N.iridescenceMap.channel),iridescenceThicknessMapUv:at&&T(N.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&T(N.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&T(N.sheenRoughnessMap.channel),specularMapUv:At&&T(N.specularMap.channel),specularColorMapUv:St&&T(N.specularColorMap.channel),specularIntensityMapUv:Qt&&T(N.specularIntensityMap.channel),transmissionMapUv:j&&T(N.transmissionMap.channel),thicknessMapUv:Ve&&T(N.thicknessMap.channel),alphaMapUv:Se&&T(N.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Qe||A),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!fe.attributes.uv&&(Ue||Se),fog:!!ue,useFog:N.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ce,skinning:ae.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:je,morphTextureStride:ut,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:l.shadowMap.enabled&&G.length>0,shadowMapType:l.shadowMap.type,toneMapping:cn,decodeVideoTexture:Ue&&N.map.isVideoTexture===!0&&Yt.getTransfer(N.map.colorSpace)===dn,decodeVideoTextureEmissive:Rt&&N.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(N.emissiveMap.colorSpace)===dn,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ha,flipSided:N.side===wi,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:mt&&N.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&N.extensions.multiDraw===!0||Le)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return An.vertexUv1s=m.has(1),An.vertexUv2s=m.has(2),An.vertexUv3s=m.has(3),m.clear(),An}function S(N){const w=[];if(N.shaderID?w.push(N.shaderID):(w.push(N.customVertexShaderID),w.push(N.customFragmentShaderID)),N.defines!==void 0)for(const G in N.defines)w.push(G),w.push(N.defines[G]);return N.isRawShaderMaterial===!1&&(I(w,N),L(w,N),w.push(l.outputColorSpace)),w.push(N.customProgramCacheKey),w.join()}function I(N,w){N.push(w.precision),N.push(w.outputColorSpace),N.push(w.envMapMode),N.push(w.envMapCubeUVHeight),N.push(w.mapUv),N.push(w.alphaMapUv),N.push(w.lightMapUv),N.push(w.aoMapUv),N.push(w.bumpMapUv),N.push(w.normalMapUv),N.push(w.displacementMapUv),N.push(w.emissiveMapUv),N.push(w.metalnessMapUv),N.push(w.roughnessMapUv),N.push(w.anisotropyMapUv),N.push(w.clearcoatMapUv),N.push(w.clearcoatNormalMapUv),N.push(w.clearcoatRoughnessMapUv),N.push(w.iridescenceMapUv),N.push(w.iridescenceThicknessMapUv),N.push(w.sheenColorMapUv),N.push(w.sheenRoughnessMapUv),N.push(w.specularMapUv),N.push(w.specularColorMapUv),N.push(w.specularIntensityMapUv),N.push(w.transmissionMapUv),N.push(w.thicknessMapUv),N.push(w.combine),N.push(w.fogExp2),N.push(w.sizeAttenuation),N.push(w.morphTargetsCount),N.push(w.morphAttributeCount),N.push(w.numDirLights),N.push(w.numPointLights),N.push(w.numSpotLights),N.push(w.numSpotLightMaps),N.push(w.numHemiLights),N.push(w.numRectAreaLights),N.push(w.numDirLightShadows),N.push(w.numPointLightShadows),N.push(w.numSpotLightShadows),N.push(w.numSpotLightShadowsWithMaps),N.push(w.numLightProbes),N.push(w.shadowMapType),N.push(w.toneMapping),N.push(w.numClippingPlanes),N.push(w.numClipIntersection),N.push(w.depthPacking)}function L(N,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),N.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),N.push(h.mask)}function R(N){const w=E[N.type];let G;if(w){const se=Bi[w];G=fd.clone(se.uniforms)}else G=N.uniforms;return G}function H(N,w){let G;for(let se=0,ae=_.length;se<ae;se++){const ue=_[se];if(ue.cacheKey===w){G=ue,++G.usedTimes;break}}return G===void 0&&(G=new N2(l,w,N,c),_.push(G)),G}function z(N){if(--N.usedTimes===0){const w=_.indexOf(N);_[w]=_[_.length-1],_.pop(),N.destroy()}}function O(N){p.remove(N)}function B(){p.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:R,acquireProgram:H,releaseProgram:z,releaseShaderCache:O,programs:_,dispose:B}}function I2(){let l=new WeakMap;function e(f){return l.has(f)}function i(f){let h=l.get(f);return h===void 0&&(h={},l.set(f,h)),h}function a(f){l.delete(f)}function o(f,h,p){l.get(f)[h]=p}function c(){l=new WeakMap}return{has:e,get:i,remove:a,update:o,dispose:c}}function P2(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.material.id!==e.material.id?l.material.id-e.material.id:l.z!==e.z?l.z-e.z:l.id-e.id}function aS(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.z!==e.z?e.z-l.z:l.id-e.id}function sS(){const l=[];let e=0;const i=[],a=[],o=[];function c(){e=0,i.length=0,a.length=0,o.length=0}function f(g,v,y,E,T,M){let S=l[e];return S===void 0?(S={id:g.id,object:g,geometry:v,material:y,groupOrder:E,renderOrder:g.renderOrder,z:T,group:M},l[e]=S):(S.id=g.id,S.object=g,S.geometry=v,S.material=y,S.groupOrder=E,S.renderOrder=g.renderOrder,S.z=T,S.group=M),e++,S}function h(g,v,y,E,T,M){const S=f(g,v,y,E,T,M);y.transmission>0?a.push(S):y.transparent===!0?o.push(S):i.push(S)}function p(g,v,y,E,T,M){const S=f(g,v,y,E,T,M);y.transmission>0?a.unshift(S):y.transparent===!0?o.unshift(S):i.unshift(S)}function m(g,v){i.length>1&&i.sort(g||P2),a.length>1&&a.sort(v||aS),o.length>1&&o.sort(v||aS)}function _(){for(let g=e,v=l.length;g<v;g++){const y=l[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:a,transparent:o,init:c,push:h,unshift:p,finish:_,sort:m}}function z2(){let l=new WeakMap;function e(a,o){const c=l.get(a);let f;return c===void 0?(f=new sS,l.set(a,[f])):o>=c.length?(f=new sS,c.push(f)):f=c[o],f}function i(){l=new WeakMap}return{get:e,dispose:i}}function B2(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new F,color:new ot};break;case"SpotLight":i={position:new F,direction:new F,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new F,color:new ot,distance:0,decay:0};break;case"HemisphereLight":i={direction:new F,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":i={color:new ot,position:new F,halfWidth:new F,halfHeight:new F};break}return l[e.id]=i,i}}}function F2(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[e.id]=i,i}}}let H2=0;function G2(l,e){return(e.castShadow?2:0)-(l.castShadow?2:0)+(e.map?1:0)-(l.map?1:0)}function V2(l){const e=new B2,i=F2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new F);const o=new F,c=new yt,f=new yt;function h(m){let _=0,g=0,v=0;for(let N=0;N<9;N++)a.probe[N].set(0,0,0);let y=0,E=0,T=0,M=0,S=0,I=0,L=0,R=0,H=0,z=0,O=0;m.sort(G2);for(let N=0,w=m.length;N<w;N++){const G=m[N],se=G.color,ae=G.intensity,ue=G.distance,fe=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=se.r*ae,g+=se.g*ae,v+=se.b*ae;else if(G.isLightProbe){for(let q=0;q<9;q++)a.probe[q].addScaledVector(G.sh.coefficients[q],ae);O++}else if(G.isDirectionalLight){const q=e.get(G);if(q.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ce=G.shadow,Y=i.get(G);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,a.directionalShadow[y]=Y,a.directionalShadowMap[y]=fe,a.directionalShadowMatrix[y]=G.shadow.matrix,I++}a.directional[y]=q,y++}else if(G.isSpotLight){const q=e.get(G);q.position.setFromMatrixPosition(G.matrixWorld),q.color.copy(se).multiplyScalar(ae),q.distance=ue,q.coneCos=Math.cos(G.angle),q.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),q.decay=G.decay,a.spot[T]=q;const ce=G.shadow;if(G.map&&(a.spotLightMap[H]=G.map,H++,ce.updateMatrices(G),G.castShadow&&z++),a.spotLightMatrix[T]=ce.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,a.spotShadow[T]=Y,a.spotShadowMap[T]=fe,R++}T++}else if(G.isRectAreaLight){const q=e.get(G);q.color.copy(se).multiplyScalar(ae),q.halfWidth.set(G.width*.5,0,0),q.halfHeight.set(0,G.height*.5,0),a.rectArea[M]=q,M++}else if(G.isPointLight){const q=e.get(G);if(q.color.copy(G.color).multiplyScalar(G.intensity),q.distance=G.distance,q.decay=G.decay,G.castShadow){const ce=G.shadow,Y=i.get(G);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,Y.shadowCameraNear=ce.camera.near,Y.shadowCameraFar=ce.camera.far,a.pointShadow[E]=Y,a.pointShadowMap[E]=fe,a.pointShadowMatrix[E]=G.shadow.matrix,L++}a.point[E]=q,E++}else if(G.isHemisphereLight){const q=e.get(G);q.skyColor.copy(G.color).multiplyScalar(ae),q.groundColor.copy(G.groundColor).multiplyScalar(ae),a.hemi[S]=q,S++}}M>0&&(l.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_FLOAT_1,a.rectAreaLTC2=Fe.LTC_FLOAT_2):(a.rectAreaLTC1=Fe.LTC_HALF_1,a.rectAreaLTC2=Fe.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const B=a.hash;(B.directionalLength!==y||B.pointLength!==E||B.spotLength!==T||B.rectAreaLength!==M||B.hemiLength!==S||B.numDirectionalShadows!==I||B.numPointShadows!==L||B.numSpotShadows!==R||B.numSpotMaps!==H||B.numLightProbes!==O)&&(a.directional.length=y,a.spot.length=T,a.rectArea.length=M,a.point.length=E,a.hemi.length=S,a.directionalShadow.length=I,a.directionalShadowMap.length=I,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=I,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=R+H-z,a.spotLightMap.length=H,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=O,B.directionalLength=y,B.pointLength=E,B.spotLength=T,B.rectAreaLength=M,B.hemiLength=S,B.numDirectionalShadows=I,B.numPointShadows=L,B.numSpotShadows=R,B.numSpotMaps=H,B.numLightProbes=O,a.version=H2++)}function p(m,_){let g=0,v=0,y=0,E=0,T=0;const M=_.matrixWorldInverse;for(let S=0,I=m.length;S<I;S++){const L=m[S];if(L.isDirectionalLight){const R=a.directional[g];R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(M),g++}else if(L.isSpotLight){const R=a.spot[y];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(M),R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const R=a.rectArea[E];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const R=a.point[v];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(M),v++}else if(L.isHemisphereLight){const R=a.hemi[T];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(M),T++}}}return{setup:h,setupView:p,state:a}}function rS(l){const e=new V2(l),i=[],a=[];function o(_){m.camera=_,i.length=0,a.length=0}function c(_){i.push(_)}function f(_){a.push(_)}function h(){e.setup(i)}function p(_){e.setupView(i,_)}const m={lightsArray:i,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function k2(l){let e=new WeakMap;function i(o,c=0){const f=e.get(o);let h;return f===void 0?(h=new rS(l),e.set(o,[h])):c>=f.length?(h=new rS(l),f.push(h)):h=f[c],h}function a(){e=new WeakMap}return{get:i,dispose:a}}const X2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function q2(l,e,i){let a=new Dg;const o=new Gt,c=new Gt,f=new jt,h=new G1({depthPacking:Db}),p=new V1,m={},_=i.maxTextureSize,g={[Ds]:wi,[wi]:Ds,[ha]:ha},v=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:X2,fragmentShader:j2}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Di;E.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Yn(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=TS;let S=this.type;this.render=function(z,O,B){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const N=l.getRenderTarget(),w=l.getActiveCubeFace(),G=l.getActiveMipmapLevel(),se=l.state;se.setBlending(Ar),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ae=S!==Es&&this.type===Es,ue=S===Es&&this.type!==Es;for(let fe=0,q=z.length;fe<q;fe++){const ce=z[fe],Y=ce.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const ye=Y.getFrameExtents();if(o.multiply(ye),c.copy(Y.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/ye.x),o.x=c.x*ye.x,Y.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/ye.y),o.y=c.y*ye.y,Y.mapSize.y=c.y)),Y.map===null||ae===!0||ue===!0){const je=this.type!==Es?{minFilter:Ri,magFilter:Ri}:{};Y.map!==null&&Y.map.dispose(),Y.map=new yo(o.x,o.y,je),Y.map.texture.name=ce.name+".shadowMap",Y.camera.updateProjectionMatrix()}l.setRenderTarget(Y.map),l.clear();const Me=Y.getViewportCount();for(let je=0;je<Me;je++){const ut=Y.getViewport(je);f.set(c.x*ut.x,c.y*ut.y,c.x*ut.z,c.y*ut.w),se.viewport(f),Y.updateMatrices(ce,je),a=Y.getFrustum(),R(O,B,Y.camera,ce,this.type)}Y.isPointLightShadow!==!0&&this.type===Es&&I(Y,B),Y.needsUpdate=!1}S=this.type,M.needsUpdate=!1,l.setRenderTarget(N,w,G)};function I(z,O){const B=e.update(T);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new yo(o.x,o.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,l.setRenderTarget(z.mapPass),l.clear(),l.renderBufferDirect(O,null,B,v,T,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,l.setRenderTarget(z.map),l.clear(),l.renderBufferDirect(O,null,B,y,T,null)}function L(z,O,B,N){let w=null;const G=B.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)w=G;else if(w=B.isPointLight===!0?p:h,l.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const se=w.uuid,ae=O.uuid;let ue=m[se];ue===void 0&&(ue={},m[se]=ue);let fe=ue[ae];fe===void 0&&(fe=w.clone(),ue[ae]=fe,O.addEventListener("dispose",H)),w=fe}if(w.visible=O.visible,w.wireframe=O.wireframe,N===Es?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:g[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,B.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const se=l.properties.get(w);se.light=B}return w}function R(z,O,B,N,w){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===Es)&&(!z.frustumCulled||a.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,z.matrixWorld);const ae=e.update(z),ue=z.material;if(Array.isArray(ue)){const fe=ae.groups;for(let q=0,ce=fe.length;q<ce;q++){const Y=fe[q],ye=ue[Y.materialIndex];if(ye&&ye.visible){const Me=L(z,ye,N,w);z.onBeforeShadow(l,z,O,B,ae,Me,Y),l.renderBufferDirect(B,null,ae,Me,z,Y),z.onAfterShadow(l,z,O,B,ae,Me,Y)}}}else if(ue.visible){const fe=L(z,ue,N,w);z.onBeforeShadow(l,z,O,B,ae,fe,null),l.renderBufferDirect(B,null,ae,fe,z,null),z.onAfterShadow(l,z,O,B,ae,fe,null)}}const se=z.children;for(let ae=0,ue=se.length;ae<ue;ae++)R(se[ae],O,B,N,w)}function H(z){z.target.removeEventListener("dispose",H);for(const B in m){const N=m[B],w=z.target.uuid;w in N&&(N[w].dispose(),delete N[w])}}}const W2={[bm]:Am,[wm]:Nm,[Rm]:Dm,[Al]:Cm,[Am]:bm,[Nm]:wm,[Dm]:Rm,[Cm]:Al};function Y2(l,e){function i(){let j=!1;const Ve=new jt;let he=null;const Se=new jt(0,0,0,0);return{setMask:function(ke){he!==ke&&!j&&(l.colorMask(ke,ke,ke,ke),he=ke)},setLocked:function(ke){j=ke},setClear:function(ke,Ne,mt,cn,An){An===!0&&(ke*=cn,Ne*=cn,mt*=cn),Ve.set(ke,Ne,mt,cn),Se.equals(Ve)===!1&&(l.clearColor(ke,Ne,mt,cn),Se.copy(Ve))},reset:function(){j=!1,he=null,Se.set(-1,0,0,0)}}}function a(){let j=!1,Ve=!1,he=null,Se=null,ke=null;return{setReversed:function(Ne){if(Ve!==Ne){const mt=e.get("EXT_clip_control");Ve?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT);const cn=ke;ke=null,this.setClear(cn)}Ve=Ne},getReversed:function(){return Ve},setTest:function(Ne){Ne?me(l.DEPTH_TEST):Ce(l.DEPTH_TEST)},setMask:function(Ne){he!==Ne&&!j&&(l.depthMask(Ne),he=Ne)},setFunc:function(Ne){if(Ve&&(Ne=W2[Ne]),Se!==Ne){switch(Ne){case bm:l.depthFunc(l.NEVER);break;case Am:l.depthFunc(l.ALWAYS);break;case wm:l.depthFunc(l.LESS);break;case Al:l.depthFunc(l.LEQUAL);break;case Rm:l.depthFunc(l.EQUAL);break;case Cm:l.depthFunc(l.GEQUAL);break;case Nm:l.depthFunc(l.GREATER);break;case Dm:l.depthFunc(l.NOTEQUAL);break;default:l.depthFunc(l.LEQUAL)}Se=Ne}},setLocked:function(Ne){j=Ne},setClear:function(Ne){ke!==Ne&&(Ve&&(Ne=1-Ne),l.clearDepth(Ne),ke=Ne)},reset:function(){j=!1,he=null,Se=null,ke=null,Ve=!1}}}function o(){let j=!1,Ve=null,he=null,Se=null,ke=null,Ne=null,mt=null,cn=null,An=null;return{setTest:function(Ot){j||(Ot?me(l.STENCIL_TEST):Ce(l.STENCIL_TEST))},setMask:function(Ot){Ve!==Ot&&!j&&(l.stencilMask(Ot),Ve=Ot)},setFunc:function(Ot,Zt,Ln){(he!==Ot||Se!==Zt||ke!==Ln)&&(l.stencilFunc(Ot,Zt,Ln),he=Ot,Se=Zt,ke=Ln)},setOp:function(Ot,Zt,Ln){(Ne!==Ot||mt!==Zt||cn!==Ln)&&(l.stencilOp(Ot,Zt,Ln),Ne=Ot,mt=Zt,cn=Ln)},setLocked:function(Ot){j=Ot},setClear:function(Ot){An!==Ot&&(l.clearStencil(Ot),An=Ot)},reset:function(){j=!1,Ve=null,he=null,Se=null,ke=null,Ne=null,mt=null,cn=null,An=null}}}const c=new i,f=new a,h=new o,p=new WeakMap,m=new WeakMap;let _={},g={},v=new WeakMap,y=[],E=null,T=!1,M=null,S=null,I=null,L=null,R=null,H=null,z=null,O=new ot(0,0,0),B=0,N=!1,w=null,G=null,se=null,ae=null,ue=null;const fe=l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ce=0;const Y=l.getParameter(l.VERSION);Y.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=ce>=1):Y.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=ce>=2);let ye=null,Me={};const je=l.getParameter(l.SCISSOR_BOX),ut=l.getParameter(l.VIEWPORT),Nt=new jt().fromArray(je),D=new jt().fromArray(ut);function J(j,Ve,he,Se){const ke=new Uint8Array(4),Ne=l.createTexture();l.bindTexture(j,Ne),l.texParameteri(j,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(j,l.TEXTURE_MAG_FILTER,l.NEAREST);for(let mt=0;mt<he;mt++)j===l.TEXTURE_3D||j===l.TEXTURE_2D_ARRAY?l.texImage3D(Ve,0,l.RGBA,1,1,Se,0,l.RGBA,l.UNSIGNED_BYTE,ke):l.texImage2D(Ve+mt,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,ke);return Ne}const ve={};ve[l.TEXTURE_2D]=J(l.TEXTURE_2D,l.TEXTURE_2D,1),ve[l.TEXTURE_CUBE_MAP]=J(l.TEXTURE_CUBE_MAP,l.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[l.TEXTURE_2D_ARRAY]=J(l.TEXTURE_2D_ARRAY,l.TEXTURE_2D_ARRAY,1,1),ve[l.TEXTURE_3D]=J(l.TEXTURE_3D,l.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),me(l.DEPTH_TEST),f.setFunc(Al),_t(!1),Qe(kx),me(l.CULL_FACE),k(Ar);function me(j){_[j]!==!0&&(l.enable(j),_[j]=!0)}function Ce(j){_[j]!==!1&&(l.disable(j),_[j]=!1)}function We(j,Ve){return g[j]!==Ve?(l.bindFramebuffer(j,Ve),g[j]=Ve,j===l.DRAW_FRAMEBUFFER&&(g[l.FRAMEBUFFER]=Ve),j===l.FRAMEBUFFER&&(g[l.DRAW_FRAMEBUFFER]=Ve),!0):!1}function Le(j,Ve){let he=y,Se=!1;if(j){he=v.get(Ve),he===void 0&&(he=[],v.set(Ve,he));const ke=j.textures;if(he.length!==ke.length||he[0]!==l.COLOR_ATTACHMENT0){for(let Ne=0,mt=ke.length;Ne<mt;Ne++)he[Ne]=l.COLOR_ATTACHMENT0+Ne;he.length=ke.length,Se=!0}}else he[0]!==l.BACK&&(he[0]=l.BACK,Se=!0);Se&&l.drawBuffers(he)}function Ue(j){return E!==j?(l.useProgram(j),E=j,!0):!1}const Pe={[po]:l.FUNC_ADD,[nb]:l.FUNC_SUBTRACT,[ib]:l.FUNC_REVERSE_SUBTRACT};Pe[ab]=l.MIN,Pe[sb]=l.MAX;const ft={[rb]:l.ZERO,[ob]:l.ONE,[lb]:l.SRC_COLOR,[Em]:l.SRC_ALPHA,[pb]:l.SRC_ALPHA_SATURATE,[db]:l.DST_COLOR,[ub]:l.DST_ALPHA,[cb]:l.ONE_MINUS_SRC_COLOR,[Tm]:l.ONE_MINUS_SRC_ALPHA,[hb]:l.ONE_MINUS_DST_COLOR,[fb]:l.ONE_MINUS_DST_ALPHA,[mb]:l.CONSTANT_COLOR,[gb]:l.ONE_MINUS_CONSTANT_COLOR,[_b]:l.CONSTANT_ALPHA,[vb]:l.ONE_MINUS_CONSTANT_ALPHA};function k(j,Ve,he,Se,ke,Ne,mt,cn,An,Ot){if(j===Ar){T===!0&&(Ce(l.BLEND),T=!1);return}if(T===!1&&(me(l.BLEND),T=!0),j!==tb){if(j!==M||Ot!==N){if((S!==po||R!==po)&&(l.blendEquation(l.FUNC_ADD),S=po,R=po),Ot)switch(j){case Ml:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case Mm:l.blendFunc(l.ONE,l.ONE);break;case Xx:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case jx:l.blendFuncSeparate(l.ZERO,l.SRC_COLOR,l.ZERO,l.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Ml:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case Mm:l.blendFunc(l.SRC_ALPHA,l.ONE);break;case Xx:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case jx:l.blendFunc(l.ZERO,l.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}I=null,L=null,H=null,z=null,O.set(0,0,0),B=0,M=j,N=Ot}return}ke=ke||Ve,Ne=Ne||he,mt=mt||Se,(Ve!==S||ke!==R)&&(l.blendEquationSeparate(Pe[Ve],Pe[ke]),S=Ve,R=ke),(he!==I||Se!==L||Ne!==H||mt!==z)&&(l.blendFuncSeparate(ft[he],ft[Se],ft[Ne],ft[mt]),I=he,L=Se,H=Ne,z=mt),(cn.equals(O)===!1||An!==B)&&(l.blendColor(cn.r,cn.g,cn.b,An),O.copy(cn),B=An),M=j,N=!1}function Dn(j,Ve){j.side===ha?Ce(l.CULL_FACE):me(l.CULL_FACE);let he=j.side===wi;Ve&&(he=!he),_t(he),j.blending===Ml&&j.transparent===!1?k(Ar):k(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const Se=j.stencilWrite;h.setTest(Se),Se&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Rt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?me(l.SAMPLE_ALPHA_TO_COVERAGE):Ce(l.SAMPLE_ALPHA_TO_COVERAGE)}function _t(j){w!==j&&(j?l.frontFace(l.CW):l.frontFace(l.CCW),w=j)}function Qe(j){j!==JT?(me(l.CULL_FACE),j!==G&&(j===kx?l.cullFace(l.BACK):j===$T?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK))):Ce(l.CULL_FACE),G=j}function Oe(j){j!==se&&(q&&l.lineWidth(j),se=j)}function Rt(j,Ve,he){j?(me(l.POLYGON_OFFSET_FILL),(ae!==Ve||ue!==he)&&(l.polygonOffset(Ve,he),ae=Ve,ue=he)):Ce(l.POLYGON_OFFSET_FILL)}function $e(j){j?me(l.SCISSOR_TEST):Ce(l.SCISSOR_TEST)}function U(j){j===void 0&&(j=l.TEXTURE0+fe-1),ye!==j&&(l.activeTexture(j),ye=j)}function A(j,Ve,he){he===void 0&&(ye===null?he=l.TEXTURE0+fe-1:he=ye);let Se=Me[he];Se===void 0&&(Se={type:void 0,texture:void 0},Me[he]=Se),(Se.type!==j||Se.texture!==Ve)&&(ye!==he&&(l.activeTexture(he),ye=he),l.bindTexture(j,Ve||ve[j]),Se.type=j,Se.texture=Ve)}function ie(){const j=Me[ye];j!==void 0&&j.type!==void 0&&(l.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function xe(){try{l.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Te(){try{l.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{l.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function qe(){try{l.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Be(){try{l.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ge(){try{l.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function bt(){try{l.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Re(){try{l.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{l.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function at(){try{l.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function lt(j){Nt.equals(j)===!1&&(l.scissor(j.x,j.y,j.z,j.w),Nt.copy(j))}function Xe(j){D.equals(j)===!1&&(l.viewport(j.x,j.y,j.z,j.w),D.copy(j))}function At(j,Ve){let he=m.get(Ve);he===void 0&&(he=new WeakMap,m.set(Ve,he));let Se=he.get(j);Se===void 0&&(Se=l.getUniformBlockIndex(Ve,j.name),he.set(j,Se))}function St(j,Ve){const Se=m.get(Ve).get(j);p.get(Ve)!==Se&&(l.uniformBlockBinding(Ve,Se,j.__bindingPointIndex),p.set(Ve,Se))}function Qt(){l.disable(l.BLEND),l.disable(l.CULL_FACE),l.disable(l.DEPTH_TEST),l.disable(l.POLYGON_OFFSET_FILL),l.disable(l.SCISSOR_TEST),l.disable(l.STENCIL_TEST),l.disable(l.SAMPLE_ALPHA_TO_COVERAGE),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ONE,l.ZERO),l.blendFuncSeparate(l.ONE,l.ZERO,l.ONE,l.ZERO),l.blendColor(0,0,0,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(l.LESS),f.setReversed(!1),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(l.ALWAYS,0,4294967295),l.stencilOp(l.KEEP,l.KEEP,l.KEEP),l.clearStencil(0),l.cullFace(l.BACK),l.frontFace(l.CCW),l.polygonOffset(0,0),l.activeTexture(l.TEXTURE0),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),_={},ye=null,Me={},g={},v=new WeakMap,y=[],E=null,T=!1,M=null,S=null,I=null,L=null,R=null,H=null,z=null,O=new ot(0,0,0),B=0,N=!1,w=null,G=null,se=null,ae=null,ue=null,Nt.set(0,0,l.canvas.width,l.canvas.height),D.set(0,0,l.canvas.width,l.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:me,disable:Ce,bindFramebuffer:We,drawBuffers:Le,useProgram:Ue,setBlending:k,setMaterial:Dn,setFlipSided:_t,setCullFace:Qe,setLineWidth:Oe,setPolygonOffset:Rt,setScissorTest:$e,activeTexture:U,bindTexture:A,unbindTexture:ie,compressedTexImage2D:xe,compressedTexImage3D:Te,texImage2D:Ye,texImage3D:at,updateUBOMapping:At,uniformBlockBinding:St,texStorage2D:bt,texStorage3D:Re,texSubImage2D:de,texSubImage3D:qe,compressedTexSubImage2D:Be,compressedTexSubImage3D:Ge,scissor:lt,viewport:Xe,reset:Qt}}function Z2(l,e,i,a,o,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Gt,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,A){return y?new OffscreenCanvas(U,A):Qc("canvas")}function T(U,A,ie){let xe=1;const Te=$e(U);if((Te.width>ie||Te.height>ie)&&(xe=ie/Math.max(Te.width,Te.height)),xe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const de=Math.floor(xe*Te.width),qe=Math.floor(xe*Te.height);g===void 0&&(g=E(de,qe));const Be=A?E(de,qe):g;return Be.width=de,Be.height=qe,Be.getContext("2d").drawImage(U,0,0,de,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+de+"x"+qe+")."),Be}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),U;return U}function M(U){return U.generateMipmaps}function S(U){l.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?l.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function L(U,A,ie,xe,Te=!1){if(U!==null){if(l[U]!==void 0)return l[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let de=A;if(A===l.RED&&(ie===l.FLOAT&&(de=l.R32F),ie===l.HALF_FLOAT&&(de=l.R16F),ie===l.UNSIGNED_BYTE&&(de=l.R8)),A===l.RED_INTEGER&&(ie===l.UNSIGNED_BYTE&&(de=l.R8UI),ie===l.UNSIGNED_SHORT&&(de=l.R16UI),ie===l.UNSIGNED_INT&&(de=l.R32UI),ie===l.BYTE&&(de=l.R8I),ie===l.SHORT&&(de=l.R16I),ie===l.INT&&(de=l.R32I)),A===l.RG&&(ie===l.FLOAT&&(de=l.RG32F),ie===l.HALF_FLOAT&&(de=l.RG16F),ie===l.UNSIGNED_BYTE&&(de=l.RG8)),A===l.RG_INTEGER&&(ie===l.UNSIGNED_BYTE&&(de=l.RG8UI),ie===l.UNSIGNED_SHORT&&(de=l.RG16UI),ie===l.UNSIGNED_INT&&(de=l.RG32UI),ie===l.BYTE&&(de=l.RG8I),ie===l.SHORT&&(de=l.RG16I),ie===l.INT&&(de=l.RG32I)),A===l.RGB_INTEGER&&(ie===l.UNSIGNED_BYTE&&(de=l.RGB8UI),ie===l.UNSIGNED_SHORT&&(de=l.RGB16UI),ie===l.UNSIGNED_INT&&(de=l.RGB32UI),ie===l.BYTE&&(de=l.RGB8I),ie===l.SHORT&&(de=l.RGB16I),ie===l.INT&&(de=l.RGB32I)),A===l.RGBA_INTEGER&&(ie===l.UNSIGNED_BYTE&&(de=l.RGBA8UI),ie===l.UNSIGNED_SHORT&&(de=l.RGBA16UI),ie===l.UNSIGNED_INT&&(de=l.RGBA32UI),ie===l.BYTE&&(de=l.RGBA8I),ie===l.SHORT&&(de=l.RGBA16I),ie===l.INT&&(de=l.RGBA32I)),A===l.RGB&&ie===l.UNSIGNED_INT_5_9_9_9_REV&&(de=l.RGB9_E5),A===l.RGBA){const qe=Te?sd:Yt.getTransfer(xe);ie===l.FLOAT&&(de=l.RGBA32F),ie===l.HALF_FLOAT&&(de=l.RGBA16F),ie===l.UNSIGNED_BYTE&&(de=qe===dn?l.SRGB8_ALPHA8:l.RGBA8),ie===l.UNSIGNED_SHORT_4_4_4_4&&(de=l.RGBA4),ie===l.UNSIGNED_SHORT_5_5_5_1&&(de=l.RGB5_A1)}return(de===l.R16F||de===l.R32F||de===l.RG16F||de===l.RG32F||de===l.RGBA16F||de===l.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(U,A){let ie;return U?A===null||A===xo||A===Cl?ie=l.DEPTH24_STENCIL8:A===Ca?ie=l.DEPTH32F_STENCIL8:A===Yc&&(ie=l.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===xo||A===Cl?ie=l.DEPTH_COMPONENT24:A===Ca?ie=l.DEPTH_COMPONENT32F:A===Yc&&(ie=l.DEPTH_COMPONENT16),ie}function H(U,A){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ri&&U.minFilter!==Fi?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function z(U){const A=U.target;A.removeEventListener("dispose",z),B(A),A.isVideoTexture&&_.delete(A)}function O(U){const A=U.target;A.removeEventListener("dispose",O),w(A)}function B(U){const A=a.get(U);if(A.__webglInit===void 0)return;const ie=U.source,xe=v.get(ie);if(xe){const Te=xe[A.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&N(U),Object.keys(xe).length===0&&v.delete(ie)}a.remove(U)}function N(U){const A=a.get(U);l.deleteTexture(A.__webglTexture);const ie=U.source,xe=v.get(ie);delete xe[A.__cacheKey],f.memory.textures--}function w(U){const A=a.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),a.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(A.__webglFramebuffer[xe]))for(let Te=0;Te<A.__webglFramebuffer[xe].length;Te++)l.deleteFramebuffer(A.__webglFramebuffer[xe][Te]);else l.deleteFramebuffer(A.__webglFramebuffer[xe]);A.__webglDepthbuffer&&l.deleteRenderbuffer(A.__webglDepthbuffer[xe])}else{if(Array.isArray(A.__webglFramebuffer))for(let xe=0;xe<A.__webglFramebuffer.length;xe++)l.deleteFramebuffer(A.__webglFramebuffer[xe]);else l.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&l.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&l.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xe=0;xe<A.__webglColorRenderbuffer.length;xe++)A.__webglColorRenderbuffer[xe]&&l.deleteRenderbuffer(A.__webglColorRenderbuffer[xe]);A.__webglDepthRenderbuffer&&l.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ie=U.textures;for(let xe=0,Te=ie.length;xe<Te;xe++){const de=a.get(ie[xe]);de.__webglTexture&&(l.deleteTexture(de.__webglTexture),f.memory.textures--),a.remove(ie[xe])}a.remove(U)}let G=0;function se(){G=0}function ae(){const U=G;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),G+=1,U}function ue(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function fe(U,A){const ie=a.get(U);if(U.isVideoTexture&&Oe(U),U.isRenderTargetTexture===!1&&U.version>0&&ie.__version!==U.version){const xe=U.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(ie,U,A);return}}i.bindTexture(l.TEXTURE_2D,ie.__webglTexture,l.TEXTURE0+A)}function q(U,A){const ie=a.get(U);if(U.version>0&&ie.__version!==U.version){D(ie,U,A);return}i.bindTexture(l.TEXTURE_2D_ARRAY,ie.__webglTexture,l.TEXTURE0+A)}function ce(U,A){const ie=a.get(U);if(U.version>0&&ie.__version!==U.version){D(ie,U,A);return}i.bindTexture(l.TEXTURE_3D,ie.__webglTexture,l.TEXTURE0+A)}function Y(U,A){const ie=a.get(U);if(U.version>0&&ie.__version!==U.version){J(ie,U,A);return}i.bindTexture(l.TEXTURE_CUBE_MAP,ie.__webglTexture,l.TEXTURE0+A)}const ye={[vo]:l.REPEAT,[Er]:l.CLAMP_TO_EDGE,[ad]:l.MIRRORED_REPEAT},Me={[Ri]:l.NEAREST,[RS]:l.NEAREST_MIPMAP_NEAREST,[Vc]:l.NEAREST_MIPMAP_LINEAR,[Fi]:l.LINEAR,[Kf]:l.LINEAR_MIPMAP_NEAREST,[As]:l.LINEAR_MIPMAP_LINEAR},je={[Ub]:l.NEVER,[Fb]:l.ALWAYS,[Ob]:l.LESS,[HS]:l.LEQUAL,[Ib]:l.EQUAL,[Bb]:l.GEQUAL,[Pb]:l.GREATER,[zb]:l.NOTEQUAL};function ut(U,A){if(A.type===Ca&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Fi||A.magFilter===Kf||A.magFilter===Vc||A.magFilter===As||A.minFilter===Fi||A.minFilter===Kf||A.minFilter===Vc||A.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),l.texParameteri(U,l.TEXTURE_WRAP_S,ye[A.wrapS]),l.texParameteri(U,l.TEXTURE_WRAP_T,ye[A.wrapT]),(U===l.TEXTURE_3D||U===l.TEXTURE_2D_ARRAY)&&l.texParameteri(U,l.TEXTURE_WRAP_R,ye[A.wrapR]),l.texParameteri(U,l.TEXTURE_MAG_FILTER,Me[A.magFilter]),l.texParameteri(U,l.TEXTURE_MIN_FILTER,Me[A.minFilter]),A.compareFunction&&(l.texParameteri(U,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(U,l.TEXTURE_COMPARE_FUNC,je[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ri||A.minFilter!==Vc&&A.minFilter!==As||A.type===Ca&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");l.texParameterf(U,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function Nt(U,A){let ie=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",z));const xe=A.source;let Te=v.get(xe);Te===void 0&&(Te={},v.set(xe,Te));const de=ue(A);if(de!==U.__cacheKey){Te[de]===void 0&&(Te[de]={texture:l.createTexture(),usedTimes:0},f.memory.textures++,ie=!0),Te[de].usedTimes++;const qe=Te[U.__cacheKey];qe!==void 0&&(Te[U.__cacheKey].usedTimes--,qe.usedTimes===0&&N(A)),U.__cacheKey=de,U.__webglTexture=Te[de].texture}return ie}function D(U,A,ie){let xe=l.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xe=l.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xe=l.TEXTURE_3D);const Te=Nt(U,A),de=A.source;i.bindTexture(xe,U.__webglTexture,l.TEXTURE0+ie);const qe=a.get(de);if(de.version!==qe.__version||Te===!0){i.activeTexture(l.TEXTURE0+ie);const Be=Yt.getPrimaries(Yt.workingColorSpace),Ge=A.colorSpace===Sr?null:Yt.getPrimaries(A.colorSpace),bt=A.colorSpace===Sr||Be===Ge?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,A.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,A.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Re=T(A.image,!1,o.maxTextureSize);Re=Rt(A,Re);const Ye=c.convert(A.format,A.colorSpace),at=c.convert(A.type);let lt=L(A.internalFormat,Ye,at,A.colorSpace,A.isVideoTexture);ut(xe,A);let Xe;const At=A.mipmaps,St=A.isVideoTexture!==!0,Qt=qe.__version===void 0||Te===!0,j=de.dataReady,Ve=H(A,Re);if(A.isDepthTexture)lt=R(A.format===Nl,A.type),Qt&&(St?i.texStorage2D(l.TEXTURE_2D,1,lt,Re.width,Re.height):i.texImage2D(l.TEXTURE_2D,0,lt,Re.width,Re.height,0,Ye,at,null));else if(A.isDataTexture)if(At.length>0){St&&Qt&&i.texStorage2D(l.TEXTURE_2D,Ve,lt,At[0].width,At[0].height);for(let he=0,Se=At.length;he<Se;he++)Xe=At[he],St?j&&i.texSubImage2D(l.TEXTURE_2D,he,0,0,Xe.width,Xe.height,Ye,at,Xe.data):i.texImage2D(l.TEXTURE_2D,he,lt,Xe.width,Xe.height,0,Ye,at,Xe.data);A.generateMipmaps=!1}else St?(Qt&&i.texStorage2D(l.TEXTURE_2D,Ve,lt,Re.width,Re.height),j&&i.texSubImage2D(l.TEXTURE_2D,0,0,0,Re.width,Re.height,Ye,at,Re.data)):i.texImage2D(l.TEXTURE_2D,0,lt,Re.width,Re.height,0,Ye,at,Re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){St&&Qt&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Ve,lt,At[0].width,At[0].height,Re.depth);for(let he=0,Se=At.length;he<Se;he++)if(Xe=At[he],A.format!==$i)if(Ye!==null)if(St){if(j)if(A.layerUpdates.size>0){const ke=Py(Xe.width,Xe.height,A.format,A.type);for(const Ne of A.layerUpdates){const mt=Xe.data.subarray(Ne*ke/Xe.data.BYTES_PER_ELEMENT,(Ne+1)*ke/Xe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,he,0,0,Ne,Xe.width,Xe.height,1,Ye,mt)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,he,0,0,0,Xe.width,Xe.height,Re.depth,Ye,Xe.data)}else i.compressedTexImage3D(l.TEXTURE_2D_ARRAY,he,lt,Xe.width,Xe.height,Re.depth,0,Xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else St?j&&i.texSubImage3D(l.TEXTURE_2D_ARRAY,he,0,0,0,Xe.width,Xe.height,Re.depth,Ye,at,Xe.data):i.texImage3D(l.TEXTURE_2D_ARRAY,he,lt,Xe.width,Xe.height,Re.depth,0,Ye,at,Xe.data)}else{St&&Qt&&i.texStorage2D(l.TEXTURE_2D,Ve,lt,At[0].width,At[0].height);for(let he=0,Se=At.length;he<Se;he++)Xe=At[he],A.format!==$i?Ye!==null?St?j&&i.compressedTexSubImage2D(l.TEXTURE_2D,he,0,0,Xe.width,Xe.height,Ye,Xe.data):i.compressedTexImage2D(l.TEXTURE_2D,he,lt,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?j&&i.texSubImage2D(l.TEXTURE_2D,he,0,0,Xe.width,Xe.height,Ye,at,Xe.data):i.texImage2D(l.TEXTURE_2D,he,lt,Xe.width,Xe.height,0,Ye,at,Xe.data)}else if(A.isDataArrayTexture)if(St){if(Qt&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Ve,lt,Re.width,Re.height,Re.depth),j)if(A.layerUpdates.size>0){const he=Py(Re.width,Re.height,A.format,A.type);for(const Se of A.layerUpdates){const ke=Re.data.subarray(Se*he/Re.data.BYTES_PER_ELEMENT,(Se+1)*he/Re.data.BYTES_PER_ELEMENT);i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,Se,Re.width,Re.height,1,Ye,at,ke)}A.clearLayerUpdates()}else i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Ye,at,Re.data)}else i.texImage3D(l.TEXTURE_2D_ARRAY,0,lt,Re.width,Re.height,Re.depth,0,Ye,at,Re.data);else if(A.isData3DTexture)St?(Qt&&i.texStorage3D(l.TEXTURE_3D,Ve,lt,Re.width,Re.height,Re.depth),j&&i.texSubImage3D(l.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Ye,at,Re.data)):i.texImage3D(l.TEXTURE_3D,0,lt,Re.width,Re.height,Re.depth,0,Ye,at,Re.data);else if(A.isFramebufferTexture){if(Qt)if(St)i.texStorage2D(l.TEXTURE_2D,Ve,lt,Re.width,Re.height);else{let he=Re.width,Se=Re.height;for(let ke=0;ke<Ve;ke++)i.texImage2D(l.TEXTURE_2D,ke,lt,he,Se,0,Ye,at,null),he>>=1,Se>>=1}}else if(At.length>0){if(St&&Qt){const he=$e(At[0]);i.texStorage2D(l.TEXTURE_2D,Ve,lt,he.width,he.height)}for(let he=0,Se=At.length;he<Se;he++)Xe=At[he],St?j&&i.texSubImage2D(l.TEXTURE_2D,he,0,0,Ye,at,Xe):i.texImage2D(l.TEXTURE_2D,he,lt,Ye,at,Xe);A.generateMipmaps=!1}else if(St){if(Qt){const he=$e(Re);i.texStorage2D(l.TEXTURE_2D,Ve,lt,he.width,he.height)}j&&i.texSubImage2D(l.TEXTURE_2D,0,0,0,Ye,at,Re)}else i.texImage2D(l.TEXTURE_2D,0,lt,Ye,at,Re);M(A)&&S(xe),qe.__version=de.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function J(U,A,ie){if(A.image.length!==6)return;const xe=Nt(U,A),Te=A.source;i.bindTexture(l.TEXTURE_CUBE_MAP,U.__webglTexture,l.TEXTURE0+ie);const de=a.get(Te);if(Te.version!==de.__version||xe===!0){i.activeTexture(l.TEXTURE0+ie);const qe=Yt.getPrimaries(Yt.workingColorSpace),Be=A.colorSpace===Sr?null:Yt.getPrimaries(A.colorSpace),Ge=A.colorSpace===Sr||qe===Be?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,A.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,A.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const bt=A.isCompressedTexture||A.image[0].isCompressedTexture,Re=A.image[0]&&A.image[0].isDataTexture,Ye=[];for(let Se=0;Se<6;Se++)!bt&&!Re?Ye[Se]=T(A.image[Se],!0,o.maxCubemapSize):Ye[Se]=Re?A.image[Se].image:A.image[Se],Ye[Se]=Rt(A,Ye[Se]);const at=Ye[0],lt=c.convert(A.format,A.colorSpace),Xe=c.convert(A.type),At=L(A.internalFormat,lt,Xe,A.colorSpace),St=A.isVideoTexture!==!0,Qt=de.__version===void 0||xe===!0,j=Te.dataReady;let Ve=H(A,at);ut(l.TEXTURE_CUBE_MAP,A);let he;if(bt){St&&Qt&&i.texStorage2D(l.TEXTURE_CUBE_MAP,Ve,At,at.width,at.height);for(let Se=0;Se<6;Se++){he=Ye[Se].mipmaps;for(let ke=0;ke<he.length;ke++){const Ne=he[ke];A.format!==$i?lt!==null?St?j&&i.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke,0,0,Ne.width,Ne.height,lt,Ne.data):i.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke,At,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):St?j&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke,0,0,Ne.width,Ne.height,lt,Xe,Ne.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke,At,Ne.width,Ne.height,0,lt,Xe,Ne.data)}}}else{if(he=A.mipmaps,St&&Qt){he.length>0&&Ve++;const Se=$e(Ye[0]);i.texStorage2D(l.TEXTURE_CUBE_MAP,Ve,At,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Re){St?j&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ye[Se].width,Ye[Se].height,lt,Xe,Ye[Se].data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,At,Ye[Se].width,Ye[Se].height,0,lt,Xe,Ye[Se].data);for(let ke=0;ke<he.length;ke++){const mt=he[ke].image[Se].image;St?j&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke+1,0,0,mt.width,mt.height,lt,Xe,mt.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke+1,At,mt.width,mt.height,0,lt,Xe,mt.data)}}else{St?j&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,lt,Xe,Ye[Se]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,At,lt,Xe,Ye[Se]);for(let ke=0;ke<he.length;ke++){const Ne=he[ke];St?j&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke+1,0,0,lt,Xe,Ne.image[Se]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke+1,At,lt,Xe,Ne.image[Se])}}}M(A)&&S(l.TEXTURE_CUBE_MAP),de.__version=Te.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ve(U,A,ie,xe,Te,de){const qe=c.convert(ie.format,ie.colorSpace),Be=c.convert(ie.type),Ge=L(ie.internalFormat,qe,Be,ie.colorSpace),bt=a.get(A),Re=a.get(ie);if(Re.__renderTarget=A,!bt.__hasExternalTextures){const Ye=Math.max(1,A.width>>de),at=Math.max(1,A.height>>de);Te===l.TEXTURE_3D||Te===l.TEXTURE_2D_ARRAY?i.texImage3D(Te,de,Ge,Ye,at,A.depth,0,qe,Be,null):i.texImage2D(Te,de,Ge,Ye,at,0,qe,Be,null)}i.bindFramebuffer(l.FRAMEBUFFER,U),Qe(A)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,xe,Te,Re.__webglTexture,0,_t(A)):(Te===l.TEXTURE_2D||Te>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,xe,Te,Re.__webglTexture,de),i.bindFramebuffer(l.FRAMEBUFFER,null)}function me(U,A,ie){if(l.bindRenderbuffer(l.RENDERBUFFER,U),A.depthBuffer){const xe=A.depthTexture,Te=xe&&xe.isDepthTexture?xe.type:null,de=R(A.stencilBuffer,Te),qe=A.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Be=_t(A);Qe(A)?h.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Be,de,A.width,A.height):ie?l.renderbufferStorageMultisample(l.RENDERBUFFER,Be,de,A.width,A.height):l.renderbufferStorage(l.RENDERBUFFER,de,A.width,A.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,qe,l.RENDERBUFFER,U)}else{const xe=A.textures;for(let Te=0;Te<xe.length;Te++){const de=xe[Te],qe=c.convert(de.format,de.colorSpace),Be=c.convert(de.type),Ge=L(de.internalFormat,qe,Be,de.colorSpace),bt=_t(A);ie&&Qe(A)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,bt,Ge,A.width,A.height):Qe(A)?h.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,bt,Ge,A.width,A.height):l.renderbufferStorage(l.RENDERBUFFER,Ge,A.width,A.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ce(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(l.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=a.get(A.depthTexture);xe.__renderTarget=A,(!xe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),fe(A.depthTexture,0);const Te=xe.__webglTexture,de=_t(A);if(A.depthTexture.format===El)Qe(A)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,Te,0,de):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,Te,0);else if(A.depthTexture.format===Nl)Qe(A)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,Te,0,de):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function We(U){const A=a.get(U),ie=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const xe=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xe){const Te=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xe.removeEventListener("dispose",Te)};xe.addEventListener("dispose",Te),A.__depthDisposeCallback=Te}A.__boundDepthTexture=xe}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Ce(A.__webglFramebuffer,U)}else if(ie){A.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(i.bindFramebuffer(l.FRAMEBUFFER,A.__webglFramebuffer[xe]),A.__webglDepthbuffer[xe]===void 0)A.__webglDepthbuffer[xe]=l.createRenderbuffer(),me(A.__webglDepthbuffer[xe],U,!1);else{const Te=U.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer[xe];l.bindRenderbuffer(l.RENDERBUFFER,de),l.framebufferRenderbuffer(l.FRAMEBUFFER,Te,l.RENDERBUFFER,de)}}else if(i.bindFramebuffer(l.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=l.createRenderbuffer(),me(A.__webglDepthbuffer,U,!1);else{const xe=U.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Te=A.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,Te),l.framebufferRenderbuffer(l.FRAMEBUFFER,xe,l.RENDERBUFFER,Te)}i.bindFramebuffer(l.FRAMEBUFFER,null)}function Le(U,A,ie){const xe=a.get(U);A!==void 0&&ve(xe.__webglFramebuffer,U,U.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),ie!==void 0&&We(U)}function Ue(U){const A=U.texture,ie=a.get(U),xe=a.get(A);U.addEventListener("dispose",O);const Te=U.textures,de=U.isWebGLCubeRenderTarget===!0,qe=Te.length>1;if(qe||(xe.__webglTexture===void 0&&(xe.__webglTexture=l.createTexture()),xe.__version=A.version,f.memory.textures++),de){ie.__webglFramebuffer=[];for(let Be=0;Be<6;Be++)if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer[Be]=[];for(let Ge=0;Ge<A.mipmaps.length;Ge++)ie.__webglFramebuffer[Be][Ge]=l.createFramebuffer()}else ie.__webglFramebuffer[Be]=l.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Be=0;Be<A.mipmaps.length;Be++)ie.__webglFramebuffer[Be]=l.createFramebuffer()}else ie.__webglFramebuffer=l.createFramebuffer();if(qe)for(let Be=0,Ge=Te.length;Be<Ge;Be++){const bt=a.get(Te[Be]);bt.__webglTexture===void 0&&(bt.__webglTexture=l.createTexture(),f.memory.textures++)}if(U.samples>0&&Qe(U)===!1){ie.__webglMultisampledFramebuffer=l.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(l.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Be=0;Be<Te.length;Be++){const Ge=Te[Be];ie.__webglColorRenderbuffer[Be]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,ie.__webglColorRenderbuffer[Be]);const bt=c.convert(Ge.format,Ge.colorSpace),Re=c.convert(Ge.type),Ye=L(Ge.internalFormat,bt,Re,Ge.colorSpace,U.isXRRenderTarget===!0),at=_t(U);l.renderbufferStorageMultisample(l.RENDERBUFFER,at,Ye,U.width,U.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Be,l.RENDERBUFFER,ie.__webglColorRenderbuffer[Be])}l.bindRenderbuffer(l.RENDERBUFFER,null),U.depthBuffer&&(ie.__webglDepthRenderbuffer=l.createRenderbuffer(),me(ie.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(l.FRAMEBUFFER,null)}}if(de){i.bindTexture(l.TEXTURE_CUBE_MAP,xe.__webglTexture),ut(l.TEXTURE_CUBE_MAP,A);for(let Be=0;Be<6;Be++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ge=0;Ge<A.mipmaps.length;Ge++)ve(ie.__webglFramebuffer[Be][Ge],U,A,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Ge);else ve(ie.__webglFramebuffer[Be],U,A,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0);M(A)&&S(l.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let Be=0,Ge=Te.length;Be<Ge;Be++){const bt=Te[Be],Re=a.get(bt);i.bindTexture(l.TEXTURE_2D,Re.__webglTexture),ut(l.TEXTURE_2D,bt),ve(ie.__webglFramebuffer,U,bt,l.COLOR_ATTACHMENT0+Be,l.TEXTURE_2D,0),M(bt)&&S(l.TEXTURE_2D)}i.unbindTexture()}else{let Be=l.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Be=U.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(Be,xe.__webglTexture),ut(Be,A),A.mipmaps&&A.mipmaps.length>0)for(let Ge=0;Ge<A.mipmaps.length;Ge++)ve(ie.__webglFramebuffer[Ge],U,A,l.COLOR_ATTACHMENT0,Be,Ge);else ve(ie.__webglFramebuffer,U,A,l.COLOR_ATTACHMENT0,Be,0);M(A)&&S(Be),i.unbindTexture()}U.depthBuffer&&We(U)}function Pe(U){const A=U.textures;for(let ie=0,xe=A.length;ie<xe;ie++){const Te=A[ie];if(M(Te)){const de=I(U),qe=a.get(Te).__webglTexture;i.bindTexture(de,qe),S(de),i.unbindTexture()}}}const ft=[],k=[];function Dn(U){if(U.samples>0){if(Qe(U)===!1){const A=U.textures,ie=U.width,xe=U.height;let Te=l.COLOR_BUFFER_BIT;const de=U.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,qe=a.get(U),Be=A.length>1;if(Be)for(let Ge=0;Ge<A.length;Ge++)i.bindFramebuffer(l.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Ge,l.RENDERBUFFER,null),i.bindFramebuffer(l.FRAMEBUFFER,qe.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+Ge,l.TEXTURE_2D,null,0);i.bindFramebuffer(l.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),i.bindFramebuffer(l.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Ge=0;Ge<A.length;Ge++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Te|=l.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Te|=l.STENCIL_BUFFER_BIT)),Be){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,qe.__webglColorRenderbuffer[Ge]);const bt=a.get(A[Ge]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,bt,0)}l.blitFramebuffer(0,0,ie,xe,0,0,ie,xe,Te,l.NEAREST),p===!0&&(ft.length=0,k.length=0,ft.push(l.COLOR_ATTACHMENT0+Ge),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ft.push(de),k.push(de),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,k)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,ft))}if(i.bindFramebuffer(l.READ_FRAMEBUFFER,null),i.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),Be)for(let Ge=0;Ge<A.length;Ge++){i.bindFramebuffer(l.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Ge,l.RENDERBUFFER,qe.__webglColorRenderbuffer[Ge]);const bt=a.get(A[Ge]).__webglTexture;i.bindFramebuffer(l.FRAMEBUFFER,qe.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+Ge,l.TEXTURE_2D,bt,0)}i.bindFramebuffer(l.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const A=U.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[A])}}}function _t(U){return Math.min(o.maxSamples,U.samples)}function Qe(U){const A=a.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Oe(U){const A=f.render.frame;_.get(U)!==A&&(_.set(U,A),U.update())}function Rt(U,A){const ie=U.colorSpace,xe=U.format,Te=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ie!==Ni&&ie!==Sr&&(Yt.getTransfer(ie)===dn?(xe!==$i||Te!==Ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),A}function $e(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=ae,this.resetTextureUnits=se,this.setTexture2D=fe,this.setTexture2DArray=q,this.setTexture3D=ce,this.setTextureCube=Y,this.rebindTextures=Le,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Dn,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Qe}function K2(l,e){function i(a,o=Sr){let c;const f=Yt.getTransfer(o);if(a===Ls)return l.UNSIGNED_BYTE;if(a===xg)return l.UNSIGNED_SHORT_4_4_4_4;if(a===yg)return l.UNSIGNED_SHORT_5_5_5_1;if(a===DS)return l.UNSIGNED_INT_5_9_9_9_REV;if(a===CS)return l.BYTE;if(a===NS)return l.SHORT;if(a===Yc)return l.UNSIGNED_SHORT;if(a===vg)return l.INT;if(a===xo)return l.UNSIGNED_INT;if(a===Ca)return l.FLOAT;if(a===Jc)return l.HALF_FLOAT;if(a===LS)return l.ALPHA;if(a===US)return l.RGB;if(a===$i)return l.RGBA;if(a===OS)return l.LUMINANCE;if(a===IS)return l.LUMINANCE_ALPHA;if(a===El)return l.DEPTH_COMPONENT;if(a===Nl)return l.DEPTH_STENCIL;if(a===Sg)return l.RED;if(a===Mg)return l.RED_INTEGER;if(a===PS)return l.RG;if(a===Eg)return l.RG_INTEGER;if(a===Tg)return l.RGBA_INTEGER;if(a===Qf||a===Jf||a===$f||a===ed)if(f===dn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Qf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Jf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===$f)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ed)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Qf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Jf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===$f)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ed)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Om||a===Im||a===Pm||a===zm)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Om)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Im)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Pm)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===zm)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Bm||a===Fm||a===Hm)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Bm||a===Fm)return f===dn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Hm)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Gm||a===Vm||a===km||a===Xm||a===jm||a===qm||a===Wm||a===Ym||a===Zm||a===Km||a===Qm||a===Jm||a===$m||a===eg)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Gm)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Vm)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===km)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Xm)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===jm)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===qm)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Wm)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ym)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Zm)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Km)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Qm)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Jm)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===$m)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===eg)return f===dn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===td||a===tg||a===ng)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===td)return f===dn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===tg)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ng)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===zS||a===ig||a===ag||a===sg)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===td)return c.COMPRESSED_RED_RGTC1_EXT;if(a===ig)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ag)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===sg)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Cl?l.UNSIGNED_INT_24_8:l[a]!==void 0?l[a]:null}return{convert:i}}const Q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,a){if(this.texture===null){const o=new Vn,c=e.properties.get(o);c.__webglTexture=i.texture,(i.depthNear!==a.depthNear||i.depthFar!==a.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,a=new Ya({vertexShader:Q2,fragmentShader:J2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Yn(new $c(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e3 extends Pl{constructor(e,i){super();const a=this;let o=null,c=1,f=null,h="local-floor",p=1,m=null,_=null,g=null,v=null,y=null,E=null;const T=new $2,M=i.getContextAttributes();let S=null,I=null;const L=[],R=[],H=new Gt;let z=null;const O=new Ai;O.viewport=new jt;const B=new Ai;B.viewport=new jt;const N=[O,B],w=new fA;let G=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let J=L[D];return J===void 0&&(J=new em,L[D]=J),J.getTargetRaySpace()},this.getControllerGrip=function(D){let J=L[D];return J===void 0&&(J=new em,L[D]=J),J.getGripSpace()},this.getHand=function(D){let J=L[D];return J===void 0&&(J=new em,L[D]=J),J.getHandSpace()};function ae(D){const J=R.indexOf(D.inputSource);if(J===-1)return;const ve=L[J];ve!==void 0&&(ve.update(D.inputSource,D.frame,m||f),ve.dispatchEvent({type:D.type,data:D.inputSource}))}function ue(){o.removeEventListener("select",ae),o.removeEventListener("selectstart",ae),o.removeEventListener("selectend",ae),o.removeEventListener("squeeze",ae),o.removeEventListener("squeezestart",ae),o.removeEventListener("squeezeend",ae),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",fe);for(let D=0;D<L.length;D++){const J=R[D];J!==null&&(R[D]=null,L[D].disconnect(J))}G=null,se=null,T.reset(),e.setRenderTarget(S),y=null,v=null,g=null,o=null,I=null,Nt.stop(),a.isPresenting=!1,e.setPixelRatio(z),e.setSize(H.width,H.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){c=D,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){h=D,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(D){m=D},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(D){if(o=D,o!==null){if(S=e.getRenderTarget(),o.addEventListener("select",ae),o.addEventListener("selectstart",ae),o.addEventListener("selectend",ae),o.addEventListener("squeeze",ae),o.addEventListener("squeezestart",ae),o.addEventListener("squeezeend",ae),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",fe),M.xrCompatible!==!0&&await i.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,me=null,Ce=null;M.depth&&(Ce=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ve=M.stencil?Nl:El,me=M.stencil?Cl:xo);const We={colorFormat:i.RGBA8,depthFormat:Ce,scaleFactor:c};g=new XRWebGLBinding(o,i),v=g.createProjectionLayer(We),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),I=new yo(v.textureWidth,v.textureHeight,{format:$i,type:Ls,depthTexture:new eM(v.textureWidth,v.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,i,ve),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new yo(y.framebufferWidth,y.framebufferHeight,{format:$i,type:Ls,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await o.requestReferenceSpace(h),Nt.setContext(o),Nt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function fe(D){for(let J=0;J<D.removed.length;J++){const ve=D.removed[J],me=R.indexOf(ve);me>=0&&(R[me]=null,L[me].disconnect(ve))}for(let J=0;J<D.added.length;J++){const ve=D.added[J];let me=R.indexOf(ve);if(me===-1){for(let We=0;We<L.length;We++)if(We>=R.length){R.push(ve),me=We;break}else if(R[We]===null){R[We]=ve,me=We;break}if(me===-1)break}const Ce=L[me];Ce&&Ce.connect(ve)}}const q=new F,ce=new F;function Y(D,J,ve){q.setFromMatrixPosition(J.matrixWorld),ce.setFromMatrixPosition(ve.matrixWorld);const me=q.distanceTo(ce),Ce=J.projectionMatrix.elements,We=ve.projectionMatrix.elements,Le=Ce[14]/(Ce[10]-1),Ue=Ce[14]/(Ce[10]+1),Pe=(Ce[9]+1)/Ce[5],ft=(Ce[9]-1)/Ce[5],k=(Ce[8]-1)/Ce[0],Dn=(We[8]+1)/We[0],_t=Le*k,Qe=Le*Dn,Oe=me/(-k+Dn),Rt=Oe*-k;if(J.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Rt),D.translateZ(Oe),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Ce[10]===-1)D.projectionMatrix.copy(J.projectionMatrix),D.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const $e=Le+Oe,U=Ue+Oe,A=_t-Rt,ie=Qe+(me-Rt),xe=Pe*Ue/U*$e,Te=ft*Ue/U*$e;D.projectionMatrix.makePerspective(A,ie,xe,Te,$e,U),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function ye(D,J){J===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(J.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(o===null)return;let J=D.near,ve=D.far;T.texture!==null&&(T.depthNear>0&&(J=T.depthNear),T.depthFar>0&&(ve=T.depthFar)),w.near=B.near=O.near=J,w.far=B.far=O.far=ve,(G!==w.near||se!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,se=w.far),O.layers.mask=D.layers.mask|2,B.layers.mask=D.layers.mask|4,w.layers.mask=O.layers.mask|B.layers.mask;const me=D.parent,Ce=w.cameras;ye(w,me);for(let We=0;We<Ce.length;We++)ye(Ce[We],me);Ce.length===2?Y(w,O,B):w.projectionMatrix.copy(O.projectionMatrix),Me(D,w,me)};function Me(D,J,ve){ve===null?D.matrix.copy(J.matrixWorld):(D.matrix.copy(ve.matrixWorld),D.matrix.invert(),D.matrix.multiply(J.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(J.projectionMatrix),D.projectionMatrixInverse.copy(J.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Dl*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(D){p=D,v!==null&&(v.fixedFoveation=D),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=D)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(w)};let je=null;function ut(D,J){if(_=J.getViewerPose(m||f),E=J,_!==null){const ve=_.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let me=!1;ve.length!==w.cameras.length&&(w.cameras.length=0,me=!0);for(let Le=0;Le<ve.length;Le++){const Ue=ve[Le];let Pe=null;if(y!==null)Pe=y.getViewport(Ue);else{const k=g.getViewSubImage(v,Ue);Pe=k.viewport,Le===0&&(e.setRenderTargetTextures(I,k.colorTexture,v.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(I))}let ft=N[Le];ft===void 0&&(ft=new Ai,ft.layers.enable(Le),ft.viewport=new jt,N[Le]=ft),ft.matrix.fromArray(Ue.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Ue.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Le===0&&(w.matrix.copy(ft.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),me===!0&&w.cameras.push(ft)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const Le=g.getDepthInformation(ve[0]);Le&&Le.isValid&&Le.texture&&T.init(e,Le,o.renderState)}}for(let ve=0;ve<L.length;ve++){const me=R[ve],Ce=L[ve];me!==null&&Ce!==void 0&&Ce.update(me,J,m||f)}je&&je(D,J),J.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:J}),E=null}const Nt=new sM;Nt.setAnimationLoop(ut),this.setAnimationLoop=function(D){je=D},this.dispose=function(){}}}const oo=new Wa,t3=new yt;function n3(l,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function a(M,S){S.color.getRGB(M.fogColor.value,WS(l)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function o(M,S,I,L,R){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(M,S):S.isMeshToonMaterial?(c(M,S),g(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S)):S.isMeshStandardMaterial?(c(M,S),v(M,S),S.isMeshPhysicalMaterial&&y(M,S,R)):S.isMeshMatcapMaterial?(c(M,S),E(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),T(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(f(M,S),S.isLineDashedMaterial&&h(M,S)):S.isPointsMaterial?p(M,S,I,L):S.isSpriteMaterial?m(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===wi&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===wi&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const I=e.get(S),L=I.envMap,R=I.envMapRotation;L&&(M.envMap.value=L,oo.copy(R),oo.x*=-1,oo.y*=-1,oo.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(oo.y*=-1,oo.z*=-1),M.envMapRotation.value.setFromMatrix4(t3.makeRotationFromEuler(oo)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function h(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,I,L){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*I,M.scale.value=L*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function m(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function g(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function v(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,I){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===wi&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function T(M,S){const I=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function i3(l,e,i,a){let o={},c={},f=[];const h=l.getParameter(l.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,L){const R=L.program;a.uniformBlockBinding(I,R)}function m(I,L){let R=o[I.id];R===void 0&&(E(I),R=_(I),o[I.id]=R,I.addEventListener("dispose",M));const H=L.program;a.updateUBOMapping(I,H);const z=e.render.frame;c[I.id]!==z&&(v(I),c[I.id]=z)}function _(I){const L=g();I.__bindingPointIndex=L;const R=l.createBuffer(),H=I.__size,z=I.usage;return l.bindBuffer(l.UNIFORM_BUFFER,R),l.bufferData(l.UNIFORM_BUFFER,H,z),l.bindBuffer(l.UNIFORM_BUFFER,null),l.bindBufferBase(l.UNIFORM_BUFFER,L,R),R}function g(){for(let I=0;I<h;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const L=o[I.id],R=I.uniforms,H=I.__cache;l.bindBuffer(l.UNIFORM_BUFFER,L);for(let z=0,O=R.length;z<O;z++){const B=Array.isArray(R[z])?R[z]:[R[z]];for(let N=0,w=B.length;N<w;N++){const G=B[N];if(y(G,z,N,H)===!0){const se=G.__offset,ae=Array.isArray(G.value)?G.value:[G.value];let ue=0;for(let fe=0;fe<ae.length;fe++){const q=ae[fe],ce=T(q);typeof q=="number"||typeof q=="boolean"?(G.__data[0]=q,l.bufferSubData(l.UNIFORM_BUFFER,se+ue,G.__data)):q.isMatrix3?(G.__data[0]=q.elements[0],G.__data[1]=q.elements[1],G.__data[2]=q.elements[2],G.__data[3]=0,G.__data[4]=q.elements[3],G.__data[5]=q.elements[4],G.__data[6]=q.elements[5],G.__data[7]=0,G.__data[8]=q.elements[6],G.__data[9]=q.elements[7],G.__data[10]=q.elements[8],G.__data[11]=0):(q.toArray(G.__data,ue),ue+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(l.UNIFORM_BUFFER,se,G.__data)}}}l.bindBuffer(l.UNIFORM_BUFFER,null)}function y(I,L,R,H){const z=I.value,O=L+"_"+R;if(H[O]===void 0)return typeof z=="number"||typeof z=="boolean"?H[O]=z:H[O]=z.clone(),!0;{const B=H[O];if(typeof z=="number"||typeof z=="boolean"){if(B!==z)return H[O]=z,!0}else if(B.equals(z)===!1)return B.copy(z),!0}return!1}function E(I){const L=I.uniforms;let R=0;const H=16;for(let O=0,B=L.length;O<B;O++){const N=Array.isArray(L[O])?L[O]:[L[O]];for(let w=0,G=N.length;w<G;w++){const se=N[w],ae=Array.isArray(se.value)?se.value:[se.value];for(let ue=0,fe=ae.length;ue<fe;ue++){const q=ae[ue],ce=T(q),Y=R%H,ye=Y%ce.boundary,Me=Y+ye;R+=ye,Me!==0&&H-Me<ce.storage&&(R+=H-Me),se.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=R,R+=ce.storage}}}const z=R%H;return z>0&&(R+=H-z),I.__size=R,I.__cache={},this}function T(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function M(I){const L=I.target;L.removeEventListener("dispose",M);const R=f.indexOf(L.__bindingPointIndex);f.splice(R,1),l.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function S(){for(const I in o)l.deleteBuffer(o[I]);f=[],o={},c={}}return{bind:p,update:m,dispose:S}}class a3{constructor(e={}){const{canvas:i=n1(),context:a=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),T=new Int32Array(4);let M=null,S=null;const I=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=wr,this.toneMappingExposure=1;const R=this;let H=!1,z=0,O=0,B=null,N=-1,w=null;const G=new jt,se=new jt;let ae=null;const ue=new ot(0);let fe=0,q=i.width,ce=i.height,Y=1,ye=null,Me=null;const je=new jt(0,0,q,ce),ut=new jt(0,0,q,ce);let Nt=!1;const D=new Dg;let J=!1,ve=!1;this.transmissionResolutionScale=1;const me=new yt,Ce=new yt,We=new F,Le=new jt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function ft(){return B===null?Y:1}let k=a;function Dn(C,K){return i.getContext(C,K)}try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${_g}`),i.addEventListener("webglcontextlost",Se,!1),i.addEventListener("webglcontextrestored",ke,!1),i.addEventListener("webglcontextcreationerror",Ne,!1),k===null){const K="webgl2";if(k=Dn(K,C),k===null)throw Dn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let _t,Qe,Oe,Rt,$e,U,A,ie,xe,Te,de,qe,Be,Ge,bt,Re,Ye,at,lt,Xe,At,St,Qt,j;function Ve(){_t=new pC(k),_t.init(),St=new K2(k,_t),Qe=new oC(k,_t,e,St),Oe=new Y2(k,_t),Qe.reverseDepthBuffer&&v&&Oe.buffers.depth.setReversed(!0),Rt=new _C(k),$e=new I2,U=new Z2(k,_t,Oe,$e,Qe,St,Rt),A=new cC(R),ie=new hC(R),xe=new EA(k),Qt=new sC(k,xe),Te=new mC(k,xe,Rt,Qt),de=new xC(k,Te,xe,Rt),lt=new vC(k,Qe,U),Re=new lC($e),qe=new O2(R,A,ie,_t,Qe,Qt,Re),Be=new n3(R,$e),Ge=new z2,bt=new k2(_t),at=new aC(R,A,ie,Oe,de,y,p),Ye=new q2(R,de,Qe),j=new i3(k,Rt,Qe,Oe),Xe=new rC(k,_t,Rt),At=new gC(k,_t,Rt),Rt.programs=qe.programs,R.capabilities=Qe,R.extensions=_t,R.properties=$e,R.renderLists=Ge,R.shadowMap=Ye,R.state=Oe,R.info=Rt}Ve();const he=new e3(R,k);this.xr=he,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=_t.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_t.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(q,ce,!1))},this.getSize=function(C){return C.set(q,ce)},this.setSize=function(C,K,oe=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,ce=K,i.width=Math.floor(C*Y),i.height=Math.floor(K*Y),oe===!0&&(i.style.width=C+"px",i.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(q*Y,ce*Y).floor()},this.setDrawingBufferSize=function(C,K,oe){q=C,ce=K,Y=oe,i.width=Math.floor(C*oe),i.height=Math.floor(K*oe),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(je)},this.setViewport=function(C,K,oe,le){C.isVector4?je.set(C.x,C.y,C.z,C.w):je.set(C,K,oe,le),Oe.viewport(G.copy(je).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(ut)},this.setScissor=function(C,K,oe,le){C.isVector4?ut.set(C.x,C.y,C.z,C.w):ut.set(C,K,oe,le),Oe.scissor(se.copy(ut).multiplyScalar(Y).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(C){Oe.setScissorTest(Nt=C)},this.setOpaqueSort=function(C){ye=C},this.setTransparentSort=function(C){Me=C},this.getClearColor=function(C){return C.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,oe=!0){let le=0;if(C){let $=!1;if(B!==null){const Ae=B.texture.format;$=Ae===Tg||Ae===Eg||Ae===Mg}if($){const Ae=B.texture.type,De=Ae===Ls||Ae===xo||Ae===Yc||Ae===Cl||Ae===xg||Ae===yg,we=at.getClearColor(),Ie=at.getClearAlpha(),it=we.r,dt=we.g,tt=we.b;De?(E[0]=it,E[1]=dt,E[2]=tt,E[3]=Ie,k.clearBufferuiv(k.COLOR,0,E)):(T[0]=it,T[1]=dt,T[2]=tt,T[3]=Ie,k.clearBufferiv(k.COLOR,0,T))}else le|=k.COLOR_BUFFER_BIT}K&&(le|=k.DEPTH_BUFFER_BIT),oe&&(le|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Se,!1),i.removeEventListener("webglcontextrestored",ke,!1),i.removeEventListener("webglcontextcreationerror",Ne,!1),at.dispose(),Ge.dispose(),bt.dispose(),$e.dispose(),A.dispose(),ie.dispose(),de.dispose(),Qt.dispose(),j.dispose(),qe.dispose(),he.dispose(),he.removeEventListener("sessionstart",Qn),he.removeEventListener("sessionend",Rr),ea.stop()};function Se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const C=Rt.autoReset,K=Ye.enabled,oe=Ye.autoUpdate,le=Ye.needsUpdate,$=Ye.type;Ve(),Rt.autoReset=C,Ye.enabled=K,Ye.autoUpdate=oe,Ye.needsUpdate=le,Ye.type=$}function Ne(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function mt(C){const K=C.target;K.removeEventListener("dispose",mt),cn(K)}function cn(C){An(C),$e.remove(C)}function An(C){const K=$e.get(C).programs;K!==void 0&&(K.forEach(function(oe){qe.releaseProgram(oe)}),C.isShaderMaterial&&qe.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,oe,le,$,Ae){K===null&&(K=Ue);const De=$.isMesh&&$.matrixWorld.determinant()<0,we=Os(C,K,oe,le,$);Oe.setMaterial(le,De);let Ie=oe.index,it=1;if(le.wireframe===!0){if(Ie=Te.getWireframeAttribute(oe),Ie===void 0)return;it=2}const dt=oe.drawRange,tt=oe.attributes.position;let It=dt.start*it,Vt=(dt.start+dt.count)*it;Ae!==null&&(It=Math.max(It,Ae.start*it),Vt=Math.min(Vt,(Ae.start+Ae.count)*it)),Ie!==null?(It=Math.max(It,0),Vt=Math.min(Vt,Ie.count)):tt!=null&&(It=Math.max(It,0),Vt=Math.min(Vt,tt.count));const Kt=Vt-It;if(Kt<0||Kt===1/0)return;Qt.setup($,le,we,oe,Ie);let qt,Dt=Xe;if(Ie!==null&&(qt=xe.get(Ie),Dt=At,Dt.setIndex(qt)),$.isMesh)le.wireframe===!0?(Oe.setLineWidth(le.wireframeLinewidth*ft()),Dt.setMode(k.LINES)):Dt.setMode(k.TRIANGLES);else if($.isLine){let et=le.linewidth;et===void 0&&(et=1),Oe.setLineWidth(et*ft()),$.isLineSegments?Dt.setMode(k.LINES):$.isLineLoop?Dt.setMode(k.LINE_LOOP):Dt.setMode(k.LINE_STRIP)}else $.isPoints?Dt.setMode(k.POINTS):$.isSprite&&Dt.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)co("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Dt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const et=$._multiDrawStarts,hn=$._multiDrawCounts,Lt=$._multiDrawCount,vn=Ie?xe.get(Ie).bytesPerElement:1,nn=$e.get(le).currentProgram.getUniforms();for(let Xn=0;Xn<Lt;Xn++)nn.setValue(k,"_gl_DrawID",Xn),Dt.render(et[Xn]/vn,hn[Xn])}else if($.isInstancedMesh)Dt.renderInstances(It,Kt,$.count);else if(oe.isInstancedBufferGeometry){const et=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,hn=Math.min(oe.instanceCount,et);Dt.renderInstances(It,Kt,hn)}else Dt.render(It,Kt)};function Ot(C,K,oe){C.transparent===!0&&C.side===ha&&C.forceSinglePass===!1?(C.side=wi,C.needsUpdate=!0,Gi(C,K,oe),C.side=Ds,C.needsUpdate=!0,Gi(C,K,oe),C.side=ha):Gi(C,K,oe)}this.compile=function(C,K,oe=null){oe===null&&(oe=C),S=bt.get(oe),S.init(K),L.push(S),oe.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),C!==oe&&C.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),S.setupLights();const le=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let De=0;De<Ae.length;De++){const we=Ae[De];Ot(we,oe,$),le.add(we)}else Ot(Ae,oe,$),le.add(Ae)}),S=L.pop(),le},this.compileAsync=function(C,K,oe=null){const le=this.compile(C,K,oe);return new Promise($=>{function Ae(){if(le.forEach(function(De){$e.get(De).currentProgram.isReady()&&le.delete(De)}),le.size===0){$(C);return}setTimeout(Ae,10)}_t.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Zt=null;function Ln(C){Zt&&Zt(C)}function Qn(){ea.stop()}function Rr(){ea.start()}const ea=new sM;ea.setAnimationLoop(Ln),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(C){Zt=C,he.setAnimationLoop(C),C===null?ea.stop():ea.start()},he.addEventListener("sessionstart",Qn),he.addEventListener("sessionend",Rr),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(K),K=he.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,K,B),S=bt.get(C,L.length),S.init(K),L.push(S),Ce.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),D.setFromProjectionMatrix(Ce),ve=this.localClippingEnabled,J=Re.init(this.clippingPlanes,ve),M=Ge.get(C,I.length),M.init(),I.push(M),he.enabled===!0&&he.isPresenting===!0){const Ae=R.xr.getDepthSensingMesh();Ae!==null&&Us(Ae,K,-1/0,R.sortObjects)}Us(C,K,0,R.sortObjects),M.finish(),R.sortObjects===!0&&M.sort(ye,Me),Pe=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Pe&&at.addToRenderList(M,C),this.info.render.frame++,J===!0&&Re.beginShadows();const oe=S.state.shadowsArray;Ye.render(oe,C,K),J===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=M.opaque,$=M.transmissive;if(S.setupLights(),K.isArrayCamera){const Ae=K.cameras;if($.length>0)for(let De=0,we=Ae.length;De<we;De++){const Ie=Ae[De];$a(le,$,C,Ie)}Pe&&at.render(C);for(let De=0,we=Ae.length;De<we;De++){const Ie=Ae[De];Ja(M,C,Ie,Ie.viewport)}}else $.length>0&&$a(le,$,C,K),Pe&&at.render(C),Ja(M,C,K);B!==null&&O===0&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),C.isScene===!0&&C.onAfterRender(R,C,K),Qt.resetDefaultState(),N=-1,w=null,L.pop(),L.length>0?(S=L[L.length-1],J===!0&&Re.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,I.pop(),I.length>0?M=I[I.length-1]:M=null};function Us(C,K,oe,le){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||D.intersectsSprite(C)){le&&Le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ce);const De=de.update(C),we=C.material;we.visible&&M.push(C,De,we,oe,Le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||D.intersectsObject(C))){const De=de.update(C),we=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Le.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Le.copy(De.boundingSphere.center)),Le.applyMatrix4(C.matrixWorld).applyMatrix4(Ce)),Array.isArray(we)){const Ie=De.groups;for(let it=0,dt=Ie.length;it<dt;it++){const tt=Ie[it],It=we[tt.materialIndex];It&&It.visible&&M.push(C,De,It,oe,Le.z,tt)}}else we.visible&&M.push(C,De,we,oe,Le.z,null)}}const Ae=C.children;for(let De=0,we=Ae.length;De<we;De++)Us(Ae[De],K,oe,le)}function Ja(C,K,oe,le){const $=C.opaque,Ae=C.transmissive,De=C.transparent;S.setupLightsView(oe),J===!0&&Re.setGlobalState(R.clippingPlanes,oe),le&&Oe.viewport(G.copy(le)),$.length>0&&Jn($,K,oe),Ae.length>0&&Jn(Ae,K,oe),De.length>0&&Jn(De,K,oe),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function $a(C,K,oe,le){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[le.id]===void 0&&(S.state.transmissionRenderTarget[le.id]=new yo(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Jc:Ls,minFilter:As,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const Ae=S.state.transmissionRenderTarget[le.id],De=le.viewport||G;Ae.setSize(De.z*R.transmissionResolutionScale,De.w*R.transmissionResolutionScale);const we=R.getRenderTarget();R.setRenderTarget(Ae),R.getClearColor(ue),fe=R.getClearAlpha(),fe<1&&R.setClearColor(16777215,.5),R.clear(),Pe&&at.render(oe);const Ie=R.toneMapping;R.toneMapping=wr;const it=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),S.setupLightsView(le),J===!0&&Re.setGlobalState(R.clippingPlanes,le),Jn(C,oe,le),U.updateMultisampleRenderTarget(Ae),U.updateRenderTargetMipmap(Ae),_t.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let tt=0,It=K.length;tt<It;tt++){const Vt=K[tt],Kt=Vt.object,qt=Vt.geometry,Dt=Vt.material,et=Vt.group;if(Dt.side===ha&&Kt.layers.test(le.layers)){const hn=Dt.side;Dt.side=wi,Dt.needsUpdate=!0,kn(Kt,oe,le,qt,Dt,et),Dt.side=hn,Dt.needsUpdate=!0,dt=!0}}dt===!0&&(U.updateMultisampleRenderTarget(Ae),U.updateRenderTargetMipmap(Ae))}R.setRenderTarget(we),R.setClearColor(ue,fe),it!==void 0&&(le.viewport=it),R.toneMapping=Ie}function Jn(C,K,oe){const le=K.isScene===!0?K.overrideMaterial:null;for(let $=0,Ae=C.length;$<Ae;$++){const De=C[$],we=De.object,Ie=De.geometry,it=le===null?De.material:le,dt=De.group;we.layers.test(oe.layers)&&kn(we,K,oe,Ie,it,dt)}}function kn(C,K,oe,le,$,Ae){C.onBeforeRender(R,K,oe,le,$,Ae),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(R,K,oe,le,C,Ae),$.transparent===!0&&$.side===ha&&$.forceSinglePass===!1?($.side=wi,$.needsUpdate=!0,R.renderBufferDirect(oe,K,le,$,C,Ae),$.side=Ds,$.needsUpdate=!0,R.renderBufferDirect(oe,K,le,$,C,Ae),$.side=ha):R.renderBufferDirect(oe,K,le,$,C,Ae),C.onAfterRender(R,K,oe,le,$,Ae)}function Gi(C,K,oe){K.isScene!==!0&&(K=Ue);const le=$e.get(C),$=S.state.lights,Ae=S.state.shadowsArray,De=$.state.version,we=qe.getParameters(C,$.state,Ae,K,oe),Ie=qe.getProgramCacheKey(we);let it=le.programs;le.environment=C.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(C.isMeshStandardMaterial?ie:A).get(C.envMap||le.environment),le.envMapRotation=le.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,it===void 0&&(C.addEventListener("dispose",mt),it=new Map,le.programs=it);let dt=it.get(Ie);if(dt!==void 0){if(le.currentProgram===dt&&le.lightsStateVersion===De)return ii(C,we),dt}else we.uniforms=qe.getUniforms(C),C.onBeforeCompile(we,R),dt=qe.acquireProgram(we,Ie),it.set(Ie,dt),le.uniforms=we.uniforms;const tt=le.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(tt.clippingPlanes=Re.uniform),ii(C,we),le.needsLights=Is(C),le.lightsStateVersion=De,le.needsLights&&(tt.ambientLightColor.value=$.state.ambient,tt.lightProbe.value=$.state.probe,tt.directionalLights.value=$.state.directional,tt.directionalLightShadows.value=$.state.directionalShadow,tt.spotLights.value=$.state.spot,tt.spotLightShadows.value=$.state.spotShadow,tt.rectAreaLights.value=$.state.rectArea,tt.ltc_1.value=$.state.rectAreaLTC1,tt.ltc_2.value=$.state.rectAreaLTC2,tt.pointLights.value=$.state.point,tt.pointLightShadows.value=$.state.pointShadow,tt.hemisphereLights.value=$.state.hemi,tt.directionalShadowMap.value=$.state.directionalShadowMap,tt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,tt.spotShadowMap.value=$.state.spotShadowMap,tt.spotLightMatrix.value=$.state.spotLightMatrix,tt.spotLightMap.value=$.state.spotLightMap,tt.pointShadowMap.value=$.state.pointShadowMap,tt.pointShadowMatrix.value=$.state.pointShadowMatrix),le.currentProgram=dt,le.uniformsList=null,dt}function ta(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=nd.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function ii(C,K){const oe=$e.get(C);oe.outputColorSpace=K.outputColorSpace,oe.batching=K.batching,oe.batchingColor=K.batchingColor,oe.instancing=K.instancing,oe.instancingColor=K.instancingColor,oe.instancingMorph=K.instancingMorph,oe.skinning=K.skinning,oe.morphTargets=K.morphTargets,oe.morphNormals=K.morphNormals,oe.morphColors=K.morphColors,oe.morphTargetsCount=K.morphTargetsCount,oe.numClippingPlanes=K.numClippingPlanes,oe.numIntersection=K.numClipIntersection,oe.vertexAlphas=K.vertexAlphas,oe.vertexTangents=K.vertexTangents,oe.toneMapping=K.toneMapping}function Os(C,K,oe,le,$){K.isScene!==!0&&(K=Ue),U.resetTextureUnits();const Ae=K.fog,De=le.isMeshStandardMaterial?K.environment:null,we=B===null?R.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ni,Ie=(le.isMeshStandardMaterial?ie:A).get(le.envMap||De),it=le.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,dt=!!oe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),tt=!!oe.morphAttributes.position,It=!!oe.morphAttributes.normal,Vt=!!oe.morphAttributes.color;let Kt=wr;le.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Kt=R.toneMapping);const qt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Dt=qt!==void 0?qt.length:0,et=$e.get(le),hn=S.state.lights;if(J===!0&&(ve===!0||C!==w)){const Rn=C===w&&le.id===N;Re.setState(le,C,Rn)}let Lt=!1;le.version===et.__version?(et.needsLights&&et.lightsStateVersion!==hn.state.version||et.outputColorSpace!==we||$.isBatchedMesh&&et.batching===!1||!$.isBatchedMesh&&et.batching===!0||$.isBatchedMesh&&et.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&et.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&et.instancing===!1||!$.isInstancedMesh&&et.instancing===!0||$.isSkinnedMesh&&et.skinning===!1||!$.isSkinnedMesh&&et.skinning===!0||$.isInstancedMesh&&et.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&et.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&et.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&et.instancingMorph===!1&&$.morphTexture!==null||et.envMap!==Ie||le.fog===!0&&et.fog!==Ae||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Re.numPlanes||et.numIntersection!==Re.numIntersection)||et.vertexAlphas!==it||et.vertexTangents!==dt||et.morphTargets!==tt||et.morphNormals!==It||et.morphColors!==Vt||et.toneMapping!==Kt||et.morphTargetsCount!==Dt)&&(Lt=!0):(Lt=!0,et.__version=le.version);let vn=et.currentProgram;Lt===!0&&(vn=Gi(le,K,$));let nn=!1,Xn=!1,ma=!1;const en=vn.getUniforms(),Tn=et.uniforms;if(Oe.useProgram(vn.program)&&(nn=!0,Xn=!0,ma=!0),le.id!==N&&(N=le.id,Xn=!0),nn||w!==C){Oe.buffers.depth.getReversed()?(me.copy(C.projectionMatrix),a1(me),s1(me),en.setValue(k,"projectionMatrix",me)):en.setValue(k,"projectionMatrix",C.projectionMatrix),en.setValue(k,"viewMatrix",C.matrixWorldInverse);const xn=en.map.cameraPosition;xn!==void 0&&xn.setValue(k,We.setFromMatrixPosition(C.matrixWorld)),Qe.logarithmicDepthBuffer&&en.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&en.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Xn=!0,ma=!0)}if($.isSkinnedMesh){en.setOptional(k,$,"bindMatrix"),en.setOptional(k,$,"bindMatrixInverse");const Rn=$.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),en.setValue(k,"boneTexture",Rn.boneTexture,U))}$.isBatchedMesh&&(en.setOptional(k,$,"batchingTexture"),en.setValue(k,"batchingTexture",$._matricesTexture,U),en.setOptional(k,$,"batchingIdTexture"),en.setValue(k,"batchingIdTexture",$._indirectTexture,U),en.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&en.setValue(k,"batchingColorTexture",$._colorsTexture,U));const wn=oe.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&lt.update($,oe,vn),(Xn||et.receiveShadow!==$.receiveShadow)&&(et.receiveShadow=$.receiveShadow,en.setValue(k,"receiveShadow",$.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Tn.envMap.value=Ie,Tn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&K.environment!==null&&(Tn.envMapIntensity.value=K.environmentIntensity),Xn&&(en.setValue(k,"toneMappingExposure",R.toneMappingExposure),et.needsLights&&Da(Tn,ma),Ae&&le.fog===!0&&Be.refreshFogUniforms(Tn,Ae),Be.refreshMaterialUniforms(Tn,le,Y,ce,S.state.transmissionRenderTarget[C.id]),nd.upload(k,ta(et),Tn,U)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(nd.upload(k,ta(et),Tn,U),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&en.setValue(k,"center",$.center),en.setValue(k,"modelViewMatrix",$.modelViewMatrix),en.setValue(k,"normalMatrix",$.normalMatrix),en.setValue(k,"modelMatrix",$.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Rn=le.uniformsGroups;for(let xn=0,Ps=Rn.length;xn<Ps;xn++){const ga=Rn[xn];j.update(ga,vn),j.bind(ga,vn)}}return vn}function Da(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Is(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,K,oe){$e.get(C.texture).__webglTexture=K,$e.get(C.depthTexture).__webglTexture=oe;const le=$e.get(C);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=oe===void 0,le.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,K){const oe=$e.get(C);oe.__webglFramebuffer=K,oe.__useDefaultFramebuffer=K===void 0};const La=k.createFramebuffer();this.setRenderTarget=function(C,K=0,oe=0){B=C,z=K,O=oe;let le=!0,$=null,Ae=!1,De=!1;if(C){const Ie=$e.get(C);if(Ie.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(k.FRAMEBUFFER,null),le=!1;else if(Ie.__webglFramebuffer===void 0)U.setupRenderTarget(C);else if(Ie.__hasExternalTextures)U.rebindTextures(C,$e.get(C.texture).__webglTexture,$e.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const tt=C.depthTexture;if(Ie.__boundDepthTexture!==tt){if(tt!==null&&$e.has(tt)&&(C.width!==tt.image.width||C.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(C)}}const it=C.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(De=!0);const dt=$e.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(dt[K])?$=dt[K][oe]:$=dt[K],Ae=!0):C.samples>0&&U.useMultisampledRTT(C)===!1?$=$e.get(C).__webglMultisampledFramebuffer:Array.isArray(dt)?$=dt[oe]:$=dt,G.copy(C.viewport),se.copy(C.scissor),ae=C.scissorTest}else G.copy(je).multiplyScalar(Y).floor(),se.copy(ut).multiplyScalar(Y).floor(),ae=Nt;if(oe!==0&&($=La),Oe.bindFramebuffer(k.FRAMEBUFFER,$)&&le&&Oe.drawBuffers(C,$),Oe.viewport(G),Oe.scissor(se),Oe.setScissorTest(ae),Ae){const Ie=$e.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ie.__webglTexture,oe)}else if(De){const Ie=$e.get(C.texture),it=K;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ie.__webglTexture,oe,it)}else if(C!==null&&oe!==0){const Ie=$e.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ie.__webglTexture,oe)}N=-1},this.readRenderTargetPixels=function(C,K,oe,le,$,Ae,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=$e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(we=we[De]),we){Oe.bindFramebuffer(k.FRAMEBUFFER,we);try{const Ie=C.texture,it=Ie.format,dt=Ie.type;if(!Qe.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-le&&oe>=0&&oe<=C.height-$&&k.readPixels(K,oe,le,$,St.convert(it),St.convert(dt),Ae)}finally{const Ie=B!==null?$e.get(B).__webglFramebuffer:null;Oe.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(C,K,oe,le,$,Ae,De){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=$e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(we=we[De]),we){const Ie=C.texture,it=Ie.format,dt=Ie.type;if(!Qe.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=C.width-le&&oe>=0&&oe<=C.height-$){Oe.bindFramebuffer(k.FRAMEBUFFER,we);const tt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,tt),k.bufferData(k.PIXEL_PACK_BUFFER,Ae.byteLength,k.STREAM_READ),k.readPixels(K,oe,le,$,St.convert(it),St.convert(dt),0);const It=B!==null?$e.get(B).__webglFramebuffer:null;Oe.bindFramebuffer(k.FRAMEBUFFER,It);const Vt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await i1(k,Vt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,tt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ae),k.deleteBuffer(tt),k.deleteSync(Vt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,K=null,oe=0){C.isTexture!==!0&&(co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,C=arguments[1]);const le=Math.pow(2,-oe),$=Math.floor(C.image.width*le),Ae=Math.floor(C.image.height*le),De=K!==null?K.x:0,we=K!==null?K.y:0;U.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,oe,0,0,De,we,$,Ae),Oe.unbindTexture()};const Vi=k.createFramebuffer(),Cr=k.createFramebuffer();this.copyTextureToTexture=function(C,K,oe=null,le=null,$=0,Ae=null){C.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,C=arguments[1],K=arguments[2],Ae=arguments[3]||0,oe=null),Ae===null&&($!==0?(co("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=$,$=0):Ae=0);let De,we,Ie,it,dt,tt,It,Vt,Kt;const qt=C.isCompressedTexture?C.mipmaps[Ae]:C.image;if(oe!==null)De=oe.max.x-oe.min.x,we=oe.max.y-oe.min.y,Ie=oe.isBox3?oe.max.z-oe.min.z:1,it=oe.min.x,dt=oe.min.y,tt=oe.isBox3?oe.min.z:0;else{const wn=Math.pow(2,-$);De=Math.floor(qt.width*wn),we=Math.floor(qt.height*wn),C.isDataArrayTexture?Ie=qt.depth:C.isData3DTexture?Ie=Math.floor(qt.depth*wn):Ie=1,it=0,dt=0,tt=0}le!==null?(It=le.x,Vt=le.y,Kt=le.z):(It=0,Vt=0,Kt=0);const Dt=St.convert(K.format),et=St.convert(K.type);let hn;K.isData3DTexture?(U.setTexture3D(K,0),hn=k.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(U.setTexture2DArray(K,0),hn=k.TEXTURE_2D_ARRAY):(U.setTexture2D(K,0),hn=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);const Lt=k.getParameter(k.UNPACK_ROW_LENGTH),vn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),nn=k.getParameter(k.UNPACK_SKIP_PIXELS),Xn=k.getParameter(k.UNPACK_SKIP_ROWS),ma=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,qt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,it),k.pixelStorei(k.UNPACK_SKIP_ROWS,dt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,tt);const en=C.isDataArrayTexture||C.isData3DTexture,Tn=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const wn=$e.get(C),Rn=$e.get(K),xn=$e.get(wn.__renderTarget),Ps=$e.get(Rn.__renderTarget);Oe.bindFramebuffer(k.READ_FRAMEBUFFER,xn.__webglFramebuffer),Oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ps.__webglFramebuffer);for(let ga=0;ga<Ie;ga++)en&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$e.get(C).__webglTexture,$,tt+ga),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$e.get(K).__webglTexture,Ae,Kt+ga)),k.blitFramebuffer(it,dt,De,we,It,Vt,De,we,k.DEPTH_BUFFER_BIT,k.NEAREST);Oe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||$e.has(C)){const wn=$e.get(C),Rn=$e.get(K);Oe.bindFramebuffer(k.READ_FRAMEBUFFER,Vi),Oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Cr);for(let xn=0;xn<Ie;xn++)en?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,wn.__webglTexture,$,tt+xn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,wn.__webglTexture,$),Tn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rn.__webglTexture,Ae,Kt+xn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Rn.__webglTexture,Ae),$!==0?k.blitFramebuffer(it,dt,De,we,It,Vt,De,we,k.COLOR_BUFFER_BIT,k.NEAREST):Tn?k.copyTexSubImage3D(hn,Ae,It,Vt,Kt+xn,it,dt,De,we):k.copyTexSubImage2D(hn,Ae,It,Vt,it,dt,De,we);Oe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Tn?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(hn,Ae,It,Vt,Kt,De,we,Ie,Dt,et,qt.data):K.isCompressedArrayTexture?k.compressedTexSubImage3D(hn,Ae,It,Vt,Kt,De,we,Ie,Dt,qt.data):k.texSubImage3D(hn,Ae,It,Vt,Kt,De,we,Ie,Dt,et,qt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ae,It,Vt,De,we,Dt,et,qt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ae,It,Vt,qt.width,qt.height,Dt,qt.data):k.texSubImage2D(k.TEXTURE_2D,Ae,It,Vt,De,we,Dt,et,qt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Lt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,nn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Xn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ma),Ae===0&&K.generateMipmaps&&k.generateMipmap(hn),Oe.unbindTexture()},this.copyTextureToTexture3D=function(C,K,oe=null,le=null,$=0){return C.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,le=arguments[1]||null,C=arguments[2],K=arguments[3],$=arguments[4]||0),co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,K,oe,le,$)},this.initRenderTarget=function(C){$e.get(C).__webglFramebuffer===void 0&&U.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),Oe.unbindTexture()},this.resetState=function(){z=0,O=0,B=null,Oe.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ws}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Yt._getUnpackColorSpace()}}class pd extends Yn{constructor(){const e=pd.SkyShader,i=new Ya({name:e.name,uniforms:fd.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:wi,depthWrite:!1});super(new So(1,1,1),i),this.isSky=!0}}pd.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new F},up:{value:new F(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const oS=new Hi,qf=new F;class dg extends cA{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],a=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(a),this.setAttribute("position",new Ci(e,3)),this.setAttribute("uv",new Ci(i,2))}applyMatrix4(e){const i=this.attributes.instanceStart,a=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(e),a.applyMatrix4(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const a=new ug(i,6,1);return this.setAttribute("instanceStart",new Cs(a,3,0)),this.setAttribute("instanceEnd",new Cs(a,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const a=new ug(i,6,1);return this.setAttribute("instanceColorStart",new Cs(a,3,0)),this.setAttribute("instanceColorEnd",new Cs(a,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new H1(e.geometry)),this}fromLineSegments(e){const i=e.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;e!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(e),oS.setFromBufferAttribute(i),this.boundingBox.union(oS))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pa),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(e!==void 0&&i!==void 0){const a=this.boundingSphere.center;this.boundingBox.getCenter(a);let o=0;for(let c=0,f=e.count;c<f;c++)qf.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(qf)),qf.fromBufferAttribute(i,c),o=Math.max(o,a.distanceToSquared(qf));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}Fe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Gt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Bi.line={uniforms:fd.merge([Fe.common,Fe.fog,Fe.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class id extends Ya{constructor(e){super({type:"LineMaterial",uniforms:fd.clone(Bi.line.uniforms),vertexShader:Bi.line.vertexShader,fragmentShader:Bi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const hm=new jt,lS=new F,cS=new F,fi=new jt,di=new jt,ka=new jt,pm=new F,mm=new yt,hi=new SA,uS=new F,Wf=new Hi,Yf=new pa,Xa=new jt;let ja,_o;function fS(l,e,i){return Xa.set(0,0,-e,1).applyMatrix4(l.projectionMatrix),Xa.multiplyScalar(1/Xa.w),Xa.x=_o/i.width,Xa.y=_o/i.height,Xa.applyMatrix4(l.projectionMatrixInverse),Xa.multiplyScalar(1/Xa.w),Math.abs(Math.max(Xa.x,Xa.y))}function s3(l,e){const i=l.matrixWorld,a=l.geometry,o=a.attributes.instanceStart,c=a.attributes.instanceEnd,f=Math.min(a.instanceCount,o.count);for(let h=0,p=f;h<p;h++){hi.start.fromBufferAttribute(o,h),hi.end.fromBufferAttribute(c,h),hi.applyMatrix4(i);const m=new F,_=new F;ja.distanceSqToSegment(hi.start,hi.end,_,m),_.distanceTo(m)<_o*.5&&e.push({point:_,pointOnLine:m,distance:ja.origin.distanceTo(_),object:l,face:null,faceIndex:h,uv:null,uv1:null})}}function r3(l,e,i){const a=e.projectionMatrix,c=l.material.resolution,f=l.matrixWorld,h=l.geometry,p=h.attributes.instanceStart,m=h.attributes.instanceEnd,_=Math.min(h.instanceCount,p.count),g=-e.near;ja.at(1,ka),ka.w=1,ka.applyMatrix4(e.matrixWorldInverse),ka.applyMatrix4(a),ka.multiplyScalar(1/ka.w),ka.x*=c.x/2,ka.y*=c.y/2,ka.z=0,pm.copy(ka),mm.multiplyMatrices(e.matrixWorldInverse,f);for(let v=0,y=_;v<y;v++){if(fi.fromBufferAttribute(p,v),di.fromBufferAttribute(m,v),fi.w=1,di.w=1,fi.applyMatrix4(mm),di.applyMatrix4(mm),fi.z>g&&di.z>g)continue;if(fi.z>g){const L=fi.z-di.z,R=(fi.z-g)/L;fi.lerp(di,R)}else if(di.z>g){const L=di.z-fi.z,R=(di.z-g)/L;di.lerp(fi,R)}fi.applyMatrix4(a),di.applyMatrix4(a),fi.multiplyScalar(1/fi.w),di.multiplyScalar(1/di.w),fi.x*=c.x/2,fi.y*=c.y/2,di.x*=c.x/2,di.y*=c.y/2,hi.start.copy(fi),hi.start.z=0,hi.end.copy(di),hi.end.z=0;const T=hi.closestPointToPointParameter(pm,!0);hi.at(T,uS);const M=Ts.lerp(fi.z,di.z,T),S=M>=-1&&M<=1,I=pm.distanceTo(uS)<_o*.5;if(S&&I){hi.start.fromBufferAttribute(p,v),hi.end.fromBufferAttribute(m,v),hi.start.applyMatrix4(f),hi.end.applyMatrix4(f);const L=new F,R=new F;ja.distanceSqToSegment(hi.start,hi.end,R,L),i.push({point:R,pointOnLine:L,distance:ja.origin.distanceTo(R),object:l,face:null,faceIndex:v,uv:null,uv1:null})}}}class gm extends Yn{constructor(e=new dg,i=new id({color:Math.random()*16777215})){super(e,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,i=e.attributes.instanceStart,a=e.attributes.instanceEnd,o=new Float32Array(2*i.count);for(let f=0,h=0,p=i.count;f<p;f++,h+=2)lS.fromBufferAttribute(i,f),cS.fromBufferAttribute(a,f),o[h]=h===0?0:o[h-1],o[h+1]=o[h]+lS.distanceTo(cS);const c=new ug(o,2,1);return e.setAttribute("instanceDistanceStart",new Cs(c,1,0)),e.setAttribute("instanceDistanceEnd",new Cs(c,1,1)),this}raycast(e,i){const a=this.material.worldUnits,o=e.camera;o===null&&!a&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const c=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ja=e.ray;const f=this.matrixWorld,h=this.geometry,p=this.material;_o=p.linewidth+c,h.boundingSphere===null&&h.computeBoundingSphere(),Yf.copy(h.boundingSphere).applyMatrix4(f);let m;if(a)m=_o*.5;else{const g=Math.max(o.near,Yf.distanceToPoint(ja.origin));m=fS(o,g,p.resolution)}if(Yf.radius+=m,ja.intersectsSphere(Yf)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),Wf.copy(h.boundingBox).applyMatrix4(f);let _;if(a)_=_o*.5;else{const g=Math.max(o.near,Wf.distanceToPoint(ja.origin));_=fS(o,g,p.resolution)}Wf.expandByScalar(_),ja.intersectsBox(Wf)!==!1&&(a?s3(this,i):r3(this,o,i))}onBeforeRender(e){const i=this.material.uniforms;i&&i.resolution&&(e.getViewport(hm),this.material.uniforms.resolution.value.set(hm.z,hm.w))}}function dS(l,e){if(e===Cb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),l;if(e===rg||e===BS){let i=l.getIndex();if(i===null){const f=[],h=l.getAttribute("position");if(h!==void 0){for(let p=0;p<h.count;p++)f.push(p);l.setIndex(f),i=l.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),l}const a=i.count-2,o=[];if(e===rg)for(let f=1;f<=a;f++)o.push(i.getX(0)),o.push(i.getX(f)),o.push(i.getX(f+1));else for(let f=0;f<a;f++)f%2===0?(o.push(i.getX(f)),o.push(i.getX(f+1)),o.push(i.getX(f+2))):(o.push(i.getX(f+2)),o.push(i.getX(f+1)),o.push(i.getX(f)));o.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=l.clone();return c.setIndex(o),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),l}class o3 extends Fl{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(i){return new d3(i)}),this.register(function(i){return new h3(i)}),this.register(function(i){return new M3(i)}),this.register(function(i){return new E3(i)}),this.register(function(i){return new T3(i)}),this.register(function(i){return new m3(i)}),this.register(function(i){return new g3(i)}),this.register(function(i){return new _3(i)}),this.register(function(i){return new v3(i)}),this.register(function(i){return new f3(i)}),this.register(function(i){return new x3(i)}),this.register(function(i){return new p3(i)}),this.register(function(i){return new S3(i)}),this.register(function(i){return new y3(i)}),this.register(function(i){return new c3(i)}),this.register(function(i){return new b3(i)}),this.register(function(i){return new A3(i)})}load(e,i,a,o){const c=this;let f;if(this.resourcePath!=="")f=this.resourcePath;else if(this.path!==""){const m=Wc.extractUrlBase(e);f=Wc.resolveURL(m,this.path)}else f=Wc.extractUrlBase(e);this.manager.itemStart(e);const h=function(m){o?o(m):console.error(m),c.manager.itemError(e),c.manager.itemEnd(e)},p=new iM(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(m){try{c.parse(m,f,function(_){i(_),c.manager.itemEnd(e)},h)}catch(_){h(_)}},a,h)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,i,a,o){let c;const f={},h={},p=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===uM){try{f[Ht.KHR_BINARY_GLTF]=new w3(e)}catch(g){o&&o(g);return}c=JSON.parse(f[Ht.KHR_BINARY_GLTF].content)}else c=JSON.parse(p.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const m=new H3(c,{path:i||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});m.fileLoader.setRequestHeader(this.requestHeader);for(let _=0;_<this.pluginCallbacks.length;_++){const g=this.pluginCallbacks[_](m);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[g.name]=g,f[g.name]=!0}if(c.extensionsUsed)for(let _=0;_<c.extensionsUsed.length;++_){const g=c.extensionsUsed[_],v=c.extensionsRequired||[];switch(g){case Ht.KHR_MATERIALS_UNLIT:f[g]=new u3;break;case Ht.KHR_DRACO_MESH_COMPRESSION:f[g]=new R3(c,this.dracoLoader);break;case Ht.KHR_TEXTURE_TRANSFORM:f[g]=new C3;break;case Ht.KHR_MESH_QUANTIZATION:f[g]=new N3;break;default:v.indexOf(g)>=0&&h[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}m.setExtensions(f),m.setPlugins(h),m.parse(a,o)}parseAsync(e,i){const a=this;return new Promise(function(o,c){a.parse(e,i,o,c)})}}function l3(){let l={};return{get:function(e){return l[e]},add:function(e,i){l[e]=i},remove:function(e){delete l[e]},removeAll:function(){l={}}}}const Ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class c3{constructor(e){this.parser=e,this.name=Ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,i=this.parser.json.nodes||[];for(let a=0,o=i.length;a<o;a++){const c=i[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const i=this.parser,a="light:"+e;let o=i.cache.get(a);if(o)return o;const c=i.json,p=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let m;const _=new ot(16777215);p.color!==void 0&&_.setRGB(p.color[0],p.color[1],p.color[2],Ni);const g=p.range!==void 0?p.range:0;switch(p.type){case"directional":m=new aM(_),m.target.position.set(0,0,-1),m.add(m.target);break;case"point":m=new oA(_),m.distance=g;break;case"spot":m=new sA(_),m.distance=g,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,m.angle=p.spot.outerConeAngle,m.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,m.target.position.set(0,0,-1),m.add(m.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return m.position.set(0,0,0),bs(m,p),p.intensity!==void 0&&(m.intensity=p.intensity),m.name=i.createUniqueName(p.name||"light_"+e),o=Promise.resolve(m),i.cache.add(a,o),o}getDependency(e,i){if(e==="light")return this._loadLight(i)}createNodeAttachment(e){const i=this,a=this.parser,c=a.json.nodes[e],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(p){return a._getNodeRef(i.cache,h,p)})}}class u3{constructor(){this.name=Ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Tr}extendParams(e,i,a){const o=[];e.color=new ot(1,1,1),e.opacity=1;const c=i.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const f=c.baseColorFactor;e.color.setRGB(f[0],f[1],f[2],Ni),e.opacity=f[3]}c.baseColorTexture!==void 0&&o.push(a.assignTexture(e,"map",c.baseColorTexture,Wn))}return Promise.all(o)}}class f3{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,i){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=o.extensions[this.name].emissiveStrength;return c!==void 0&&(i.emissiveIntensity=c),Promise.resolve()}}class d3{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ka}extendMaterialParams(e,i){const a=this.parser,o=a.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[],f=o.extensions[this.name];if(f.clearcoatFactor!==void 0&&(i.clearcoat=f.clearcoatFactor),f.clearcoatTexture!==void 0&&c.push(a.assignTexture(i,"clearcoatMap",f.clearcoatTexture)),f.clearcoatRoughnessFactor!==void 0&&(i.clearcoatRoughness=f.clearcoatRoughnessFactor),f.clearcoatRoughnessTexture!==void 0&&c.push(a.assignTexture(i,"clearcoatRoughnessMap",f.clearcoatRoughnessTexture)),f.clearcoatNormalTexture!==void 0&&(c.push(a.assignTexture(i,"clearcoatNormalMap",f.clearcoatNormalTexture)),f.clearcoatNormalTexture.scale!==void 0)){const h=f.clearcoatNormalTexture.scale;i.clearcoatNormalScale=new Gt(h,h)}return Promise.all(c)}}class h3{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ka}extendMaterialParams(e,i){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=o.extensions[this.name];return i.dispersion=c.dispersion!==void 0?c.dispersion:0,Promise.resolve()}}class p3{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ka}extendMaterialParams(e,i){const a=this.parser,o=a.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[],f=o.extensions[this.name];return f.iridescenceFactor!==void 0&&(i.iridescence=f.iridescenceFactor),f.iridescenceTexture!==void 0&&c.push(a.assignTexture(i,"iridescenceMap",f.iridescenceTexture)),f.iridescenceIor!==void 0&&(i.iridescenceIOR=f.iridescenceIor),i.iridescenceThicknessRange===void 0&&(i.iridescenceThicknessRange=[100,400]),f.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessRange[0]=f.iridescenceThicknessMinimum),f.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessRange[1]=f.iridescenceThicknessMaximum),f.iridescenceThicknessTexture!==void 0&&c.push(a.assignTexture(i,"iridescenceThicknessMap",f.iridescenceThicknessTexture)),Promise.all(c)}}class m3{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ka}extendMaterialParams(e,i){const a=this.parser,o=a.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[];i.sheenColor=new ot(0,0,0),i.sheenRoughness=0,i.sheen=1;const f=o.extensions[this.name];if(f.sheenColorFactor!==void 0){const h=f.sheenColorFactor;i.sheenColor.setRGB(h[0],h[1],h[2],Ni)}return f.sheenRoughnessFactor!==void 0&&(i.sheenRoughness=f.sheenRoughnessFactor),f.sheenColorTexture!==void 0&&c.push(a.assignTexture(i,"sheenColorMap",f.sheenColorTexture,Wn)),f.sheenRoughnessTexture!==void 0&&c.push(a.assignTexture(i,"sheenRoughnessMap",f.sheenRoughnessTexture)),Promise.all(c)}}class g3{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ka}extendMaterialParams(e,i){const a=this.parser,o=a.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[],f=o.extensions[this.name];return f.transmissionFactor!==void 0&&(i.transmission=f.transmissionFactor),f.transmissionTexture!==void 0&&c.push(a.assignTexture(i,"transmissionMap",f.transmissionTexture)),Promise.all(c)}}class _3{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ka}extendMaterialParams(e,i){const a=this.parser,o=a.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[],f=o.extensions[this.name];i.thickness=f.thicknessFactor!==void 0?f.thicknessFactor:0,f.thicknessTexture!==void 0&&c.push(a.assignTexture(i,"thicknessMap",f.thicknessTexture)),i.attenuationDistance=f.attenuationDistance||1/0;const h=f.attenuationColor||[1,1,1];return i.attenuationColor=new ot().setRGB(h[0],h[1],h[2],Ni),Promise.all(c)}}class v3{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ka}extendMaterialParams(e,i){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=o.extensions[this.name];return i.ior=c.ior!==void 0?c.ior:1.5,Promise.resolve()}}class x3{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ka}extendMaterialParams(e,i){const a=this.parser,o=a.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[],f=o.extensions[this.name];i.specularIntensity=f.specularFactor!==void 0?f.specularFactor:1,f.specularTexture!==void 0&&c.push(a.assignTexture(i,"specularIntensityMap",f.specularTexture));const h=f.specularColorFactor||[1,1,1];return i.specularColor=new ot().setRGB(h[0],h[1],h[2],Ni),f.specularColorTexture!==void 0&&c.push(a.assignTexture(i,"specularColorMap",f.specularColorTexture,Wn)),Promise.all(c)}}class y3{constructor(e){this.parser=e,this.name=Ht.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ka}extendMaterialParams(e,i){const a=this.parser,o=a.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[],f=o.extensions[this.name];return i.bumpScale=f.bumpFactor!==void 0?f.bumpFactor:1,f.bumpTexture!==void 0&&c.push(a.assignTexture(i,"bumpMap",f.bumpTexture)),Promise.all(c)}}class S3{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Ka}extendMaterialParams(e,i){const a=this.parser,o=a.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[],f=o.extensions[this.name];return f.anisotropyStrength!==void 0&&(i.anisotropy=f.anisotropyStrength),f.anisotropyRotation!==void 0&&(i.anisotropyRotation=f.anisotropyRotation),f.anisotropyTexture!==void 0&&c.push(a.assignTexture(i,"anisotropyMap",f.anisotropyTexture)),Promise.all(c)}}class M3{constructor(e){this.parser=e,this.name=Ht.KHR_TEXTURE_BASISU}loadTexture(e){const i=this.parser,a=i.json,o=a.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const c=o.extensions[this.name],f=i.options.ktx2Loader;if(!f){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return i.loadTextureImage(e,c.source,f)}}class E3{constructor(e){this.parser=e,this.name=Ht.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const i=this.name,a=this.parser,o=a.json,c=o.textures[e];if(!c.extensions||!c.extensions[i])return null;const f=c.extensions[i],h=o.images[f.source];let p=a.textureLoader;if(h.uri){const m=a.options.manager.getHandler(h.uri);m!==null&&(p=m)}return this.detectSupport().then(function(m){if(m)return a.loadTextureImage(e,f.source,p);if(o.extensionsRequired&&o.extensionsRequired.indexOf(i)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return a.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const i=new Image;i.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",i.onload=i.onerror=function(){e(i.height===1)}})),this.isSupported}}class T3{constructor(e){this.parser=e,this.name=Ht.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const i=this.name,a=this.parser,o=a.json,c=o.textures[e];if(!c.extensions||!c.extensions[i])return null;const f=c.extensions[i],h=o.images[f.source];let p=a.textureLoader;if(h.uri){const m=a.options.manager.getHandler(h.uri);m!==null&&(p=m)}return this.detectSupport().then(function(m){if(m)return a.loadTextureImage(e,f.source,p);if(o.extensionsRequired&&o.extensionsRequired.indexOf(i)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return a.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const i=new Image;i.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",i.onload=i.onerror=function(){e(i.height===1)}})),this.isSupported}}class b3{constructor(e){this.name=Ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const i=this.parser.json,a=i.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const o=a.extensions[this.name],c=this.parser.getDependency("buffer",o.buffer),f=this.parser.options.meshoptDecoder;if(!f||!f.supported){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const p=o.byteOffset||0,m=o.byteLength||0,_=o.count,g=o.byteStride,v=new Uint8Array(h,p,m);return f.decodeGltfBufferAsync?f.decodeGltfBufferAsync(_,g,v,o.mode,o.filter).then(function(y){return y.buffer}):f.ready.then(function(){const y=new ArrayBuffer(_*g);return f.decodeGltfBuffer(new Uint8Array(y),_,g,v,o.mode,o.filter),y})})}else return null}}class A3{constructor(e){this.name=Ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const i=this.parser.json,a=i.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const o=i.meshes[a.mesh];for(const m of o.primitives)if(m.mode!==da.TRIANGLES&&m.mode!==da.TRIANGLE_STRIP&&m.mode!==da.TRIANGLE_FAN&&m.mode!==void 0)return null;const f=a.extensions[this.name].attributes,h=[],p={};for(const m in f)h.push(this.parser.getDependency("accessor",f[m]).then(_=>(p[m]=_,p[m])));return h.length<1?null:(h.push(this.parser.createNodeMesh(e)),Promise.all(h).then(m=>{const _=m.pop(),g=_.isGroup?_.children:[_],v=m[0].count,y=[];for(const E of g){const T=new yt,M=new F,S=new Za,I=new F(1,1,1),L=new Ng(E.geometry,E.material,v);for(let R=0;R<v;R++)p.TRANSLATION&&M.fromBufferAttribute(p.TRANSLATION,R),p.ROTATION&&S.fromBufferAttribute(p.ROTATION,R),p.SCALE&&I.fromBufferAttribute(p.SCALE,R),L.setMatrixAt(R,T.compose(M,S,I));for(const R in p)if(R==="_COLOR_0"){const H=p[R];L.instanceColor=new lg(H.array,H.itemSize,H.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&E.geometry.setAttribute(R,p[R]);En.prototype.copy.call(L,E),this.parser.assignFinalMaterial(L),y.push(L)}return _.isGroup?(_.clear(),_.add(...y),_):y[0]}))}}const uM="glTF",Hc=12,hS={JSON:1313821514,BIN:5130562};class w3{constructor(e){this.name=Ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const i=new DataView(e,0,Hc),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:i.getUint32(4,!0),length:i.getUint32(8,!0)},this.header.magic!==uM)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-Hc,c=new DataView(e,Hc);let f=0;for(;f<o;){const h=c.getUint32(f,!0);f+=4;const p=c.getUint32(f,!0);if(f+=4,p===hS.JSON){const m=new Uint8Array(e,Hc+f,h);this.content=a.decode(m)}else if(p===hS.BIN){const m=Hc+f;this.body=e.slice(m,m+h)}f+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class R3{constructor(e,i){if(!i)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=i,this.dracoLoader.preload()}decodePrimitive(e,i){const a=this.json,o=this.dracoLoader,c=e.extensions[this.name].bufferView,f=e.extensions[this.name].attributes,h={},p={},m={};for(const _ in f){const g=hg[_]||_.toLowerCase();h[g]=f[_]}for(const _ in e.attributes){const g=hg[_]||_.toLowerCase();if(f[_]!==void 0){const v=a.accessors[e.attributes[_]],y=bl[v.componentType];m[g]=y.name,p[g]=v.normalized===!0}}return i.getDependency("bufferView",c).then(function(_){return new Promise(function(g,v){o.decodeDracoFile(_,function(y){for(const E in y.attributes){const T=y.attributes[E],M=p[E];M!==void 0&&(T.normalized=M)}g(y)},h,m,Ni,v)})})}}class C3{constructor(){this.name=Ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,i){return(i.texCoord===void 0||i.texCoord===e.channel)&&i.offset===void 0&&i.rotation===void 0&&i.scale===void 0||(e=e.clone(),i.texCoord!==void 0&&(e.channel=i.texCoord),i.offset!==void 0&&e.offset.fromArray(i.offset),i.rotation!==void 0&&(e.rotation=i.rotation),i.scale!==void 0&&e.repeat.fromArray(i.scale),e.needsUpdate=!0),e}}class N3{constructor(){this.name=Ht.KHR_MESH_QUANTIZATION}}class fM extends eu{constructor(e,i,a,o){super(e,i,a,o)}copySampleValue_(e){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o*3+o;for(let f=0;f!==o;f++)i[f]=a[c+f];return i}interpolate_(e,i,a,o){const c=this.resultBuffer,f=this.sampleValues,h=this.valueSize,p=h*2,m=h*3,_=o-i,g=(a-i)/_,v=g*g,y=v*g,E=e*m,T=E-m,M=-2*y+3*v,S=y-v,I=1-M,L=S-v+g;for(let R=0;R!==h;R++){const H=f[T+R+h],z=f[T+R+p]*_,O=f[E+R+h],B=f[E+R]*_;c[R]=I*H+L*z+M*O+S*B}return c}}const D3=new Za;class L3 extends fM{interpolate_(e,i,a,o){const c=super.interpolate_(e,i,a,o);return D3.fromArray(c).normalize().toArray(c),c}}const da={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},bl={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pS={9728:Ri,9729:Fi,9984:RS,9985:Kf,9986:Vc,9987:As},mS={33071:Er,33648:ad,10497:vo},_m={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hg={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},U3={CUBICSPLINE:void 0,LINEAR:Kc,STEP:Zc},vm={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function O3(l){return l.DefaultMaterial===void 0&&(l.DefaultMaterial=new go({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ds})),l.DefaultMaterial}function lo(l,e,i){for(const a in i.extensions)l[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=i.extensions[a])}function bs(l,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(l.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function I3(l,e,i){let a=!1,o=!1,c=!1;for(let m=0,_=e.length;m<_;m++){const g=e[m];if(g.POSITION!==void 0&&(a=!0),g.NORMAL!==void 0&&(o=!0),g.COLOR_0!==void 0&&(c=!0),a&&o&&c)break}if(!a&&!o&&!c)return Promise.resolve(l);const f=[],h=[],p=[];for(let m=0,_=e.length;m<_;m++){const g=e[m];if(a){const v=g.POSITION!==void 0?i.getDependency("accessor",g.POSITION):l.attributes.position;f.push(v)}if(o){const v=g.NORMAL!==void 0?i.getDependency("accessor",g.NORMAL):l.attributes.normal;h.push(v)}if(c){const v=g.COLOR_0!==void 0?i.getDependency("accessor",g.COLOR_0):l.attributes.color;p.push(v)}}return Promise.all([Promise.all(f),Promise.all(h),Promise.all(p)]).then(function(m){const _=m[0],g=m[1],v=m[2];return a&&(l.morphAttributes.position=_),o&&(l.morphAttributes.normal=g),c&&(l.morphAttributes.color=v),l.morphTargetsRelative=!0,l})}function P3(l,e){if(l.updateMorphTargets(),e.weights!==void 0)for(let i=0,a=e.weights.length;i<a;i++)l.morphTargetInfluences[i]=e.weights[i];if(e.extras&&Array.isArray(e.extras.targetNames)){const i=e.extras.targetNames;if(l.morphTargetInfluences.length===i.length){l.morphTargetDictionary={};for(let a=0,o=i.length;a<o;a++)l.morphTargetDictionary[i[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function z3(l){let e;const i=l.extensions&&l.extensions[Ht.KHR_DRACO_MESH_COMPRESSION];if(i?e="draco:"+i.bufferView+":"+i.indices+":"+xm(i.attributes):e=l.indices+":"+xm(l.attributes)+":"+l.mode,l.targets!==void 0)for(let a=0,o=l.targets.length;a<o;a++)e+=":"+xm(l.targets[a]);return e}function xm(l){let e="";const i=Object.keys(l).sort();for(let a=0,o=i.length;a<o;a++)e+=i[a]+":"+l[i[a]]+";";return e}function pg(l){switch(l){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function B3(l){return l.search(/\.jpe?g($|\?)/i)>0||l.search(/^data\:image\/jpeg/)===0?"image/jpeg":l.search(/\.webp($|\?)/i)>0||l.search(/^data\:image\/webp/)===0?"image/webp":l.search(/\.ktx2($|\?)/i)>0||l.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const F3=new yt;class H3{constructor(e={},i={}){this.json=e,this.extensions={},this.plugins={},this.options=i,this.cache=new l3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,o=-1,c=!1,f=-1;if(typeof navigator<"u"){const h=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(h)===!0;const p=h.match(/Version\/(\d+)/);o=a&&p?parseInt(p[1],10):-1,c=h.indexOf("Firefox")>-1,f=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&o<17||c&&f<98?this.textureLoader=new nA(this.options.manager):this.textureLoader=new uA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new iM(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,i){const a=this,o=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(f){return f._markDefs&&f._markDefs()}),Promise.all(this._invokeAll(function(f){return f.beforeRoot&&f.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(f){const h={scene:f[0][o.scene||0],scenes:f[0],animations:f[1],cameras:f[2],asset:o.asset,parser:a,userData:{}};return lo(c,h,o),bs(h,o),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(h)})).then(function(){for(const p of h.scenes)p.updateMatrixWorld();e(h)})}).catch(i)}_markDefs(){const e=this.json.nodes||[],i=this.json.skins||[],a=this.json.meshes||[];for(let o=0,c=i.length;o<c;o++){const f=i[o].joints;for(let h=0,p=f.length;h<p;h++)e[f[h]].isBone=!0}for(let o=0,c=e.length;o<c;o++){const f=e[o];f.mesh!==void 0&&(this._addNodeRef(this.meshCache,f.mesh),f.skin!==void 0&&(a[f.mesh].isSkinnedMesh=!0)),f.camera!==void 0&&this._addNodeRef(this.cameraCache,f.camera)}}_addNodeRef(e,i){i!==void 0&&(e.refs[i]===void 0&&(e.refs[i]=e.uses[i]=0),e.refs[i]++)}_getNodeRef(e,i,a){if(e.refs[i]<=1)return a;const o=a.clone(),c=(f,h)=>{const p=this.associations.get(f);p!=null&&this.associations.set(h,p);for(const[m,_]of f.children.entries())c(_,h.children[m])};return c(a,o),o.name+="_instance_"+e.uses[i]++,o}_invokeOne(e){const i=Object.values(this.plugins);i.push(this);for(let a=0;a<i.length;a++){const o=e(i[a]);if(o)return o}return null}_invokeAll(e){const i=Object.values(this.plugins);i.unshift(this);const a=[];for(let o=0;o<i.length;o++){const c=e(i[o]);c&&a.push(c)}return a}getDependency(e,i){const a=e+":"+i;let o=this.cache.get(a);if(!o){switch(e){case"scene":o=this.loadScene(i);break;case"node":o=this._invokeOne(function(c){return c.loadNode&&c.loadNode(i)});break;case"mesh":o=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(i)});break;case"accessor":o=this.loadAccessor(i);break;case"bufferView":o=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(i)});break;case"buffer":o=this.loadBuffer(i);break;case"material":o=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(i)});break;case"texture":o=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(i)});break;case"skin":o=this.loadSkin(i);break;case"animation":o=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(i)});break;case"camera":o=this.loadCamera(i);break;default:if(o=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,i)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(a,o)}return o}getDependencies(e){let i=this.cache.get(e);if(!i){const a=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];i=Promise.all(o.map(function(c,f){return a.getDependency(e,f)})),this.cache.add(e,i)}return i}loadBuffer(e){const i=this.json.buffers[e],a=this.fileLoader;if(i.type&&i.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+i.type+" buffer type is not supported.");if(i.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ht.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(c,f){a.load(Wc.resolveURL(i.uri,o.path),c,void 0,function(){f(new Error('THREE.GLTFLoader: Failed to load buffer "'+i.uri+'".'))})})}loadBufferView(e){const i=this.json.bufferViews[e];return this.getDependency("buffer",i.buffer).then(function(a){const o=i.byteLength||0,c=i.byteOffset||0;return a.slice(c,c+o)})}loadAccessor(e){const i=this,a=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const f=_m[o.type],h=bl[o.componentType],p=o.normalized===!0,m=new h(o.count*f);return Promise.resolve(new On(m,f,p))}const c=[];return o.bufferView!==void 0?c.push(this.getDependency("bufferView",o.bufferView)):c.push(null),o.sparse!==void 0&&(c.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(c).then(function(f){const h=f[0],p=_m[o.type],m=bl[o.componentType],_=m.BYTES_PER_ELEMENT,g=_*p,v=o.byteOffset||0,y=o.bufferView!==void 0?a.bufferViews[o.bufferView].byteStride:void 0,E=o.normalized===!0;let T,M;if(y&&y!==g){const S=Math.floor(v/y),I="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+S+":"+o.count;let L=i.cache.get(I);L||(T=new m(h,S*y,o.count*y/_),L=new KS(T,y/_),i.cache.add(I,L)),M=new Cs(L,p,v%y/_,E)}else h===null?T=new m(o.count*p):T=new m(h,v,o.count*p),M=new On(T,p,E);if(o.sparse!==void 0){const S=_m.SCALAR,I=bl[o.sparse.indices.componentType],L=o.sparse.indices.byteOffset||0,R=o.sparse.values.byteOffset||0,H=new I(f[1],L,o.sparse.count*S),z=new m(f[2],R,o.sparse.count*p);h!==null&&(M=new On(M.array.slice(),M.itemSize,M.normalized)),M.normalized=!1;for(let O=0,B=H.length;O<B;O++){const N=H[O];if(M.setX(N,z[O*p]),p>=2&&M.setY(N,z[O*p+1]),p>=3&&M.setZ(N,z[O*p+2]),p>=4&&M.setW(N,z[O*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=E}return M})}loadTexture(e){const i=this.json,a=this.options,c=i.textures[e].source,f=i.images[c];let h=this.textureLoader;if(f.uri){const p=a.manager.getHandler(f.uri);p!==null&&(h=p)}return this.loadTextureImage(e,c,h)}loadTextureImage(e,i,a){const o=this,c=this.json,f=c.textures[e],h=c.images[i],p=(h.uri||h.bufferView)+":"+f.sampler;if(this.textureCache[p])return this.textureCache[p];const m=this.loadImageSource(i,a).then(function(_){_.flipY=!1,_.name=f.name||h.name||"",_.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(_.name=h.uri);const v=(c.samplers||{})[f.sampler]||{};return _.magFilter=pS[v.magFilter]||Fi,_.minFilter=pS[v.minFilter]||As,_.wrapS=mS[v.wrapS]||vo,_.wrapT=mS[v.wrapT]||vo,_.generateMipmaps=!_.isCompressedTexture&&_.minFilter!==Ri&&_.minFilter!==Fi,o.associations.set(_,{textures:e}),_}).catch(function(){return null});return this.textureCache[p]=m,m}loadImageSource(e,i){const a=this,o=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const f=o.images[e],h=self.URL||self.webkitURL;let p=f.uri||"",m=!1;if(f.bufferView!==void 0)p=a.getDependency("bufferView",f.bufferView).then(function(g){m=!0;const v=new Blob([g],{type:f.mimeType});return p=h.createObjectURL(v),p});else if(f.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const _=Promise.resolve(p).then(function(g){return new Promise(function(v,y){let E=v;i.isImageBitmapLoader===!0&&(E=function(T){const M=new Vn(T);M.needsUpdate=!0,v(M)}),i.load(Wc.resolveURL(g,c.path),E,void 0,y)})}).then(function(g){return m===!0&&h.revokeObjectURL(p),bs(g,f),g.userData.mimeType=f.mimeType||B3(f.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),g});return this.sourceCache[e]=_,_}assignTexture(e,i,a,o){const c=this;return this.getDependency("texture",a.index).then(function(f){if(!f)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(f=f.clone(),f.channel=a.texCoord),c.extensions[Ht.KHR_TEXTURE_TRANSFORM]){const h=a.extensions!==void 0?a.extensions[Ht.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const p=c.associations.get(f);f=c.extensions[Ht.KHR_TEXTURE_TRANSFORM].extendTexture(f,h),c.associations.set(f,p)}}return o!==void 0&&(f.colorSpace=o),e[i]=f,f})}assignFinalMaterial(e){const i=e.geometry;let a=e.material;const o=i.attributes.tangent===void 0,c=i.attributes.color!==void 0,f=i.attributes.normal===void 0;if(e.isPoints){const h="PointsMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new $S,qa.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(h,p)),a=p}else if(e.isLine){const h="LineBasicMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new JS,qa.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(h,p)),a=p}if(o||c||f){let h="ClonedMaterial:"+a.uuid+":";o&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),f&&(h+="flat-shading:");let p=this.cache.get(h);p||(p=a.clone(),c&&(p.vertexColors=!0),f&&(p.flatShading=!0),o&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(h,p),this.associations.set(p,this.associations.get(a))),a=p}e.material=a}getMaterialType(){return go}loadMaterial(e){const i=this,a=this.json,o=this.extensions,c=a.materials[e];let f;const h={},p=c.extensions||{},m=[];if(p[Ht.KHR_MATERIALS_UNLIT]){const g=o[Ht.KHR_MATERIALS_UNLIT];f=g.getMaterialType(),m.push(g.extendParams(h,c,i))}else{const g=c.pbrMetallicRoughness||{};if(h.color=new ot(1,1,1),h.opacity=1,Array.isArray(g.baseColorFactor)){const v=g.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],Ni),h.opacity=v[3]}g.baseColorTexture!==void 0&&m.push(i.assignTexture(h,"map",g.baseColorTexture,Wn)),h.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,h.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(m.push(i.assignTexture(h,"metalnessMap",g.metallicRoughnessTexture)),m.push(i.assignTexture(h,"roughnessMap",g.metallicRoughnessTexture))),f=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),m.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,h)})))}c.doubleSided===!0&&(h.side=ha);const _=c.alphaMode||vm.OPAQUE;if(_===vm.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,_===vm.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&f!==Tr&&(m.push(i.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new Gt(1,1),c.normalTexture.scale!==void 0)){const g=c.normalTexture.scale;h.normalScale.set(g,g)}if(c.occlusionTexture!==void 0&&f!==Tr&&(m.push(i.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&f!==Tr){const g=c.emissiveFactor;h.emissive=new ot().setRGB(g[0],g[1],g[2],Ni)}return c.emissiveTexture!==void 0&&f!==Tr&&m.push(i.assignTexture(h,"emissiveMap",c.emissiveTexture,Wn)),Promise.all(m).then(function(){const g=new f(h);return c.name&&(g.name=c.name),bs(g,c),i.associations.set(g,{materials:e}),c.extensions&&lo(o,g,c),g})}createUniqueName(e){const i=ln.sanitizeNodeName(e||"");return i in this.nodeNamesUsed?i+"_"+ ++this.nodeNamesUsed[i]:(this.nodeNamesUsed[i]=0,i)}loadGeometries(e){const i=this,a=this.extensions,o=this.primitiveCache;function c(h){return a[Ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,i).then(function(p){return gS(p,h,i)})}const f=[];for(let h=0,p=e.length;h<p;h++){const m=e[h],_=z3(m),g=o[_];if(g)f.push(g.promise);else{let v;m.extensions&&m.extensions[Ht.KHR_DRACO_MESH_COMPRESSION]?v=c(m):v=gS(new Di,m,i),o[_]={primitive:m,promise:v},f.push(v)}}return Promise.all(f)}loadMesh(e){const i=this,a=this.json,o=this.extensions,c=a.meshes[e],f=c.primitives,h=[];for(let p=0,m=f.length;p<m;p++){const _=f[p].material===void 0?O3(this.cache):this.getDependency("material",f[p].material);h.push(_)}return h.push(i.loadGeometries(f)),Promise.all(h).then(function(p){const m=p.slice(0,p.length-1),_=p[p.length-1],g=[];for(let y=0,E=_.length;y<E;y++){const T=_[y],M=f[y];let S;const I=m[y];if(M.mode===da.TRIANGLES||M.mode===da.TRIANGLE_STRIP||M.mode===da.TRIANGLE_FAN||M.mode===void 0)S=c.isSkinnedMesh===!0?new D1(T,I):new Yn(T,I),S.isSkinnedMesh===!0&&S.normalizeSkinWeights(),M.mode===da.TRIANGLE_STRIP?S.geometry=dS(S.geometry,BS):M.mode===da.TRIANGLE_FAN&&(S.geometry=dS(S.geometry,rg));else if(M.mode===da.LINES)S=new P1(T,I);else if(M.mode===da.LINE_STRIP)S=new Lg(T,I);else if(M.mode===da.LINE_LOOP)S=new z1(T,I);else if(M.mode===da.POINTS)S=new B1(T,I);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(S.geometry.morphAttributes).length>0&&P3(S,c),S.name=i.createUniqueName(c.name||"mesh_"+e),bs(S,c),M.extensions&&lo(o,S,M),i.assignFinalMaterial(S),g.push(S)}for(let y=0,E=g.length;y<E;y++)i.associations.set(g[y],{meshes:e,primitives:y});if(g.length===1)return c.extensions&&lo(o,g[0],c),g[0];const v=new Rs;c.extensions&&lo(o,v,c),i.associations.set(v,{meshes:e});for(let y=0,E=g.length;y<E;y++)v.add(g[y]);return v})}loadCamera(e){let i;const a=this.json.cameras[e],o=a[a.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?i=new Ai(Ts.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):a.type==="orthographic"&&(i=new Ig(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),a.name&&(i.name=this.createUniqueName(a.name)),bs(i,a),Promise.resolve(i)}loadSkin(e){const i=this.json.skins[e],a=[];for(let o=0,c=i.joints.length;o<c;o++)a.push(this._loadNodeShallow(i.joints[o]));return i.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",i.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(o){const c=o.pop(),f=o,h=[],p=[];for(let m=0,_=f.length;m<_;m++){const g=f[m];if(g){h.push(g);const v=new yt;c!==null&&v.fromArray(c.array,m*16),p.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',i.joints[m])}return new Cg(h,p)})}loadAnimation(e){const i=this.json,a=this,o=i.animations[e],c=o.name?o.name:"animation_"+e,f=[],h=[],p=[],m=[],_=[];for(let g=0,v=o.channels.length;g<v;g++){const y=o.channels[g],E=o.samplers[y.sampler],T=y.target,M=T.node,S=o.parameters!==void 0?o.parameters[E.input]:E.input,I=o.parameters!==void 0?o.parameters[E.output]:E.output;T.node!==void 0&&(f.push(this.getDependency("node",M)),h.push(this.getDependency("accessor",S)),p.push(this.getDependency("accessor",I)),m.push(E),_.push(T))}return Promise.all([Promise.all(f),Promise.all(h),Promise.all(p),Promise.all(m),Promise.all(_)]).then(function(g){const v=g[0],y=g[1],E=g[2],T=g[3],M=g[4],S=[];for(let I=0,L=v.length;I<L;I++){const R=v[I],H=y[I],z=E[I],O=T[I],B=M[I];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const N=a._createAnimationTracks(R,H,z,O,B);if(N)for(let w=0;w<N.length;w++)S.push(N[w])}return new Z1(c,void 0,S)})}createNodeMesh(e){const i=this.json,a=this,o=i.nodes[e];return o.mesh===void 0?null:a.getDependency("mesh",o.mesh).then(function(c){const f=a._getNodeRef(a.meshCache,o.mesh,c);return o.weights!==void 0&&f.traverse(function(h){if(h.isMesh)for(let p=0,m=o.weights.length;p<m;p++)h.morphTargetInfluences[p]=o.weights[p]}),f})}loadNode(e){const i=this.json,a=this,o=i.nodes[e],c=a._loadNodeShallow(e),f=[],h=o.children||[];for(let m=0,_=h.length;m<_;m++)f.push(a.getDependency("node",h[m]));const p=o.skin===void 0?Promise.resolve(null):a.getDependency("skin",o.skin);return Promise.all([c,Promise.all(f),p]).then(function(m){const _=m[0],g=m[1],v=m[2];v!==null&&_.traverse(function(y){y.isSkinnedMesh&&y.bind(v,F3)});for(let y=0,E=g.length;y<E;y++)_.add(g[y]);return _})}_loadNodeShallow(e){const i=this.json,a=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=i.nodes[e],f=c.name?o.createUniqueName(c.name):"",h=[],p=o._invokeOne(function(m){return m.createNodeMesh&&m.createNodeMesh(e)});return p&&h.push(p),c.camera!==void 0&&h.push(o.getDependency("camera",c.camera).then(function(m){return o._getNodeRef(o.cameraCache,c.camera,m)})),o._invokeAll(function(m){return m.createNodeAttachment&&m.createNodeAttachment(e)}).forEach(function(m){h.push(m)}),this.nodeCache[e]=Promise.all(h).then(function(m){let _;if(c.isBone===!0?_=new QS:m.length>1?_=new Rs:m.length===1?_=m[0]:_=new En,_!==m[0])for(let g=0,v=m.length;g<v;g++)_.add(m[g]);if(c.name&&(_.userData.name=c.name,_.name=f),bs(_,c),c.extensions&&lo(a,_,c),c.matrix!==void 0){const g=new yt;g.fromArray(c.matrix),_.applyMatrix4(g)}else c.translation!==void 0&&_.position.fromArray(c.translation),c.rotation!==void 0&&_.quaternion.fromArray(c.rotation),c.scale!==void 0&&_.scale.fromArray(c.scale);return o.associations.has(_)||o.associations.set(_,{}),o.associations.get(_).nodes=e,_}),this.nodeCache[e]}loadScene(e){const i=this.extensions,a=this.json.scenes[e],o=this,c=new Rs;a.name&&(c.name=o.createUniqueName(a.name)),bs(c,a),a.extensions&&lo(i,c,a);const f=a.nodes||[],h=[];for(let p=0,m=f.length;p<m;p++)h.push(o.getDependency("node",f[p]));return Promise.all(h).then(function(p){for(let _=0,g=p.length;_<g;_++)c.add(p[_]);const m=_=>{const g=new Map;for(const[v,y]of o.associations)(v instanceof qa||v instanceof Vn)&&g.set(v,y);return _.traverse(v=>{const y=o.associations.get(v);y!=null&&g.set(v,y)}),g};return o.associations=m(c),c})}_createAnimationTracks(e,i,a,o,c){const f=[],h=e.name?e.name:e.uuid,p=[];gr[c.path]===gr.weights?e.traverse(function(v){v.morphTargetInfluences&&p.push(v.name?v.name:v.uuid)}):p.push(h);let m;switch(gr[c.path]){case gr.weights:m=Ul;break;case gr.rotation:m=Ol;break;case gr.position:case gr.scale:m=Il;break;default:switch(a.itemSize){case 1:m=Ul;break;case 2:case 3:default:m=Il;break}break}const _=o.interpolation!==void 0?U3[o.interpolation]:Kc,g=this._getArrayFromAccessor(a);for(let v=0,y=p.length;v<y;v++){const E=new m(p[v]+"."+gr[c.path],i.array,g,_);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),f.push(E)}return f}_getArrayFromAccessor(e){let i=e.array;if(e.normalized){const a=pg(i.constructor),o=new Float32Array(i.length);for(let c=0,f=i.length;c<f;c++)o[c]=i[c]*a;i=o}return i}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const o=this instanceof Ol?L3:fM;return new o(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function G3(l,e,i){const a=e.attributes,o=new Hi;if(a.POSITION!==void 0){const h=i.json.accessors[a.POSITION],p=h.min,m=h.max;if(p!==void 0&&m!==void 0){if(o.set(new F(p[0],p[1],p[2]),new F(m[0],m[1],m[2])),h.normalized){const _=pg(bl[h.componentType]);o.min.multiplyScalar(_),o.max.multiplyScalar(_)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const h=new F,p=new F;for(let m=0,_=c.length;m<_;m++){const g=c[m];if(g.POSITION!==void 0){const v=i.json.accessors[g.POSITION],y=v.min,E=v.max;if(y!==void 0&&E!==void 0){if(p.setX(Math.max(Math.abs(y[0]),Math.abs(E[0]))),p.setY(Math.max(Math.abs(y[1]),Math.abs(E[1]))),p.setZ(Math.max(Math.abs(y[2]),Math.abs(E[2]))),v.normalized){const T=pg(bl[v.componentType]);p.multiplyScalar(T)}h.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(h)}l.boundingBox=o;const f=new pa;o.getCenter(f.center),f.radius=o.min.distanceTo(o.max)/2,l.boundingSphere=f}function gS(l,e,i){const a=e.attributes,o=[];function c(f,h){return i.getDependency("accessor",f).then(function(p){l.setAttribute(h,p)})}for(const f in a){const h=hg[f]||f.toLowerCase();h in l.attributes||o.push(c(a[f],h))}if(e.indices!==void 0&&!l.index){const f=i.getDependency("accessor",e.indices).then(function(h){l.setIndex(h)});o.push(f)}return Yt.workingColorSpace!==Ni&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Yt.workingColorSpace}" not supported.`),bs(l,e),G3(l,e,i),Promise.all(o).then(function(){return e.targets!==void 0?I3(l,e.targets,i):l})}const bi="./".endsWith("/")?"./":".//",_S=l=>new Promise((e,i)=>new o3().load(l,e,void 0,i));function vS(l){l.updateMatrixWorld(!0);const e=[];return l.traverse(i=>{if(!i.isMesh)return;const a=i.geometry.clone();a.applyMatrix4(i.matrixWorld),e.push({geometry:a,material:Array.isArray(i.material)?i.material[0]:i.material})}),e}async function V3(){const l=[];for(const e of["island_tree_01","island_tree_02"]){const[i,a]=await Promise.all([_S(`${bi}assets/modelo/arboles/${e}_L1_hojas.glb`),_S(`${bi}assets/modelo/arboles/${e}_L1_madera.glb`)]),o=[...vS(i.scene).map(p=>({...p,kind:"leaf"})),...vS(a.scene).map(p=>({...p,kind:"wood"}))],c=new Hi;o.forEach(p=>{p.geometry.computeBoundingBox(),c.union(p.geometry.boundingBox)});const f=c.max.y-c.min.y||1,h=new yt().makeScale(1/f,1/f,1/f).multiply(new yt().makeTranslation(-(c.min.x+c.max.x)/2,-c.min.y,-(c.min.z+c.max.z)/2));o.forEach(p=>{p.geometry.applyMatrix4(h),p.material=p.material.clone(),p.material.side=ha,p.kind==="leaf"&&(p.material.alphaTest=Math.max(p.material.alphaTest||0,.4),p.material.color.multiplyScalar(1.9),p.material.envMapIntensity=1.4)}),l.push(o)}return l}function ym(l,e,i=60){const a=new Map;e.forEach((g,v)=>{const E=`${(Math.imul(v+1,2654435761)>>>0)%l.length}:${Math.floor(g.x/i)}:${Math.floor(g.z/i)}`;a.has(E)||a.set(E,[]),a.get(E).push(g)});const o=new Rs,c=new yt,f=new Za,h=new F(0,1,0),p=new F,m=new F,_=new ot;for(const[g,v]of a){const y=parseInt(g.split(":")[0],10);l[y].forEach(E=>{const T=new Ng(E.geometry,E.material,v.length);v.forEach((M,S)=>{if(f.setFromAxisAngle(h,M.rot),p.set(M.height,M.height,M.height),m.set(M.x,M.y,M.z),c.compose(m,f,p),T.setMatrixAt(S,c),E.kind==="leaf"){const I=.82+M.tone*.3;_.setRGB(I,I*(.96+M.tone*.08),I*.9),T.setColorAt(S,_)}}),T.instanceMatrix.needsUpdate=!0,T.instanceColor&&(T.instanceColor.needsUpdate=!0),T.receiveShadow=!1,T.computeBoundingSphere(),o.add(T)})}return o}const dM=[[0,"#3f4cc4"],[.25,"#2aa7d8"],[.5,"#3cc27a"],[.75,"#f2d14a"],[1,"#e8503a"]],Gc=dM.map(([l,e])=>[l,new ot(e)]),xS=new ot;function k3(l,e=new ot){const i=Math.max(0,Math.min(1,l));for(let a=0;a<Gc.length-1;a++){const[o,c]=Gc[a],[f,h]=Gc[a+1];if(i<=f)return xS.copy(c).lerp(h,(i-o)/(f-o)),e.copy(xS)}return e.copy(Gc[Gc.length-1][1])}const X3=`linear-gradient(90deg, ${dM.map(([l,e])=>`${e} ${l*100}%`).join(", ")})`;function Zf(l,e){const i=Array.from(l).filter(a=>a>0&&Number.isFinite(a)).sort((a,o)=>a-o);return i.length?i[Math.min(i.length-1,Math.max(0,Math.floor(e*(i.length-1))))]:0}const Mr=1.8,_r={x0:9502,y0:15426,nx:10,ny:17},vr={left:231,top:1734,w:1445,h:2578},j3=2.6,yS={x0:1187,y0:1929},Sm=2.6,xr=l=>new Promise((e,i)=>{const a=new Image;a.onload=()=>e(a),a.onerror=()=>i(new Error(`No se pudo cargar ${l}`)),a.src=l}),q3=(l,e,i)=>{const a=Math.max(0,Math.min(1,(i-l)/(e-l)));return a*a*(3-2*a)},yr=l=>Math.max(0,Math.min(1,l)),W3=Number(new URLSearchParams(window.location.search).get("dt"))||.05;function Y3(l,e,i){const o=new Float32Array(l*e);for(let g=0;g<o.length;g++)o[g]=i[g]?1e12:0;const c=Math.max(l,e),f=new Float32Array(c),h=new Int32Array(c),p=new Float32Array(c+1),m=new Float32Array(c),_=(g,v,y)=>{for(let T=0;T<g;T++)m[T]=v(T);let E=0;h[0]=0,p[0]=-1e12,p[1]=1e12;for(let T=1;T<g;T++){let M=(m[T]+T*T-(m[h[E]]+h[E]*h[E]))/(2*T-2*h[E]);for(;M<=p[E];)E--,M=(m[T]+T*T-(m[h[E]]+h[E]*h[E]))/(2*T-2*h[E]);E++,h[E]=T,p[E]=M,p[E+1]=1e12}E=0;for(let T=0;T<g;T++){for(;p[E+1]<T;)E++;f[T]=(T-h[E])*(T-h[E])+m[h[E]]}for(let T=0;T<g;T++)y(T,f[T])};for(let g=0;g<l;g++)_(e,v=>o[v*l+g],(v,y)=>{o[v*l+g]=y});for(let g=0;g<e;g++)_(l,v=>o[g*l+v],(v,y)=>{o[g*l+v]=y});return o}function SS(l,e){l.onBeforeCompile=i=>{i.uniforms.uLost=e.uLost,i.uniforms.uYear=e.uYear,i.uniforms.uMode=e.uMode,i.uniforms.uDim=e.uDim,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aWin;
varying vec2 vWin;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWin = aWin;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uLost;
uniform float uYear;
uniform float uMode;
uniform float uDim;
varying vec2 vWin;`).replace("#include <map_fragment>",`#include <map_fragment>
        vec4 lt = texture2D(uLost, vWin);
        float lostAt = lt.r * 63.75;
        if (lt.g < 0.5) discard;
        bool gone = uYear > 0.001 && lostAt <= uYear;
        if (gone && uMode > 0.5) discard;
        diffuseColor.rgb *= mix(1.0, 0.30, uDim);
        if (gone) {
          vec3 band = lostAt <= 10.0 ? vec3(0.60, 0.09, 0.09) : (lostAt <= 20.0 ? vec3(0.86, 0.15, 0.15) : vec3(0.98, 0.45, 0.42));
          diffuseColor.rgb = mix(diffuseColor.rgb, band, 0.84);
        }
        float front = smoothstep(0.8, 0.0, abs(lostAt - uYear)) * step(0.001, uYear) * (1.0 - uMode);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.66, 0.34), front * 0.9);`)},l.customProgramCacheKey=()=>"erosion-v1"}const Z3={residential:"#f4f1ec",unclassified:"#f4f1ec",service:"#9fd3e0",track:"#9fd3e0",path:"#e0917a",footway:"#e0917a",steps:"#e0917a",pedestrian:"#e0917a"},hM=[{id:"calles",nombre:"Calles y caminos",color:"#f4f1ec",tipos:["residential","unclassified"]},{id:"servicio",nombre:"Servicio y trochas",color:"#9fd3e0",tipos:["service","track"]},{id:"senderos",nombre:"Senderos y peatonales",color:"#e0917a",tipos:["path","footway","steps","pedestrian"]}];async function K3(l,{onProgreso:e=()=>{}}={}){const i=window.innerWidth<768,a=new a3({antialias:!i,powerPreference:"high-performance"});a.setPixelRatio(Math.min(window.devicePixelRatio,i?1.5:1.75)),a.outputColorSpace=Wn,a.toneMapping=AS,a.toneMappingExposure=1;const o=a.domElement;o.style.cssText="display:block;width:100%;height:100%;opacity:0;transition:opacity 1.4s ease",l.appendChild(o);const c=[()=>{a.dispose(),o.parentNode===l&&l.removeChild(o)}];let f=!1;const h=13;let p=0;const m=ee=>ee.then(pe=>(p++,e(.6*(p/h),"Descargando la isla"),pe)),_=ee=>fetch(ee).then(pe=>{if(!pe.ok)throw new Error(ee);return pe.json()}),g=async ee=>{const pe=await(await fetch(ee)).arrayBuffer(),Ee=new Uint8Array(pe);if(Ee[0]===31&&Ee[1]===139){const be=new Response(pe).body.pipeThrough(new DecompressionStream("gzip"));return JSON.parse(await new Response(be).text())}return JSON.parse(new TextDecoder().decode(Ee))},[v,y,E,T,M,S,I,L,...R]=await Promise.all([m(xr(`${bi}assets/texturas/sat_base.jpg`)),m(xr(`${bi}datos/isla_mascara.png`)),m(xr(`${bi}assets/texturas/tierrabomba_satelite.jpg`)),m(_(`${bi}assets/data/georef.json`)),m(_(`${bi}assets/data/vegetacion.json`)),m(g(`${bi}datos/construcciones_tierra_bomba.json.gz`)),m(_(`${bi}datos/sintaxis.json`)),m(xr(`${bi}datos/water_normals_fine.jpg`)),m(xr(`${bi}datos/elevacion/1187_1929.png`)),m(xr(`${bi}datos/elevacion/1188_1929.png`)),m(xr(`${bi}datos/elevacion/1187_1930.png`)),m(xr(`${bi}datos/elevacion/1188_1930.png`))]);if(f)return null;const H=()=>new Promise(ee=>setTimeout(ee,0)),z=_r.x0+vr.left/256,O=_r.x0+(vr.left+vr.w)/256,B=_r.y0+vr.top/256,N=_r.y0+(vr.top+vr.h)/256,w=2**15,se=40075016686e-3*Math.cos((ee=>Math.atan(Math.sinh(Math.PI*(1-2*ee/w)))*180/Math.PI)((B+N)/2)*Math.PI/180)/w,ae=se/256,ue=(z+O)/2,fe=(B+N)/2,q=(ee,pe)=>[(ee-ue)*se,(pe-fe)*se],ce=(ee,pe)=>[(ee+180)/360*w,(1-Math.log(Math.tan(pe*Math.PI/180)+1/Math.cos(pe*Math.PI/180))/Math.PI)/2*w],Y=(ee,pe)=>{const[Ee,be]=ce(ee,pe);return q(Ee,be)};e(.62,"Calculando la costa"),await H();const ye=vr.w,Me=vr.h,je=document.createElement("canvas");je.width=ye,je.height=Me;const ut=je.getContext("2d",{willReadFrequently:!0});ut.drawImage(y,0,0);const Nt=ut.getImageData(0,0,ye,Me).data,D=new Uint8Array(ye*Me),J=new Uint8Array(ye*Me);let ve=0;for(let ee=0;ee<ye*Me;ee++){const pe=Nt[ee*4+3]<255?Nt[ee*4+3]:Nt[ee*4];J[ee]=pe,pe>127&&(D[ee]=1,ve++)}const me=Y3(ye,Me,D),Ce=new Float32Array(ye*Me);for(let ee=0;ee<Ce.length;ee++)Ce[ee]=D[ee]?Math.sqrt(me[ee])*ae:0;if(f)return null;const We=new Uint8Array(ye*Me*4);for(let ee=0;ee<ye*Me;ee++)We[ee*4]=D[ee]?Math.min(255,Math.round(Ce[ee]/Mr*4)):0,We[ee*4+1]=J[ee],We[ee*4+3]=255;const Le=new Rg(We,ye,Me,$i);Le.minFilter=Le.magFilter=Fi,Le.generateMipmaps=!1,Le.needsUpdate=!0;const Ue=new Float64Array(31);for(let ee=0;ee<Ce.length;ee++){if(!D[ee])continue;const pe=Ce[ee]/Mr;pe<30&&(Ue[Math.floor(pe)+1]+=1)}const Pe=new Float64Array(31);for(let ee=1;ee<=30;ee++)Pe[ee]=Pe[ee-1]+Ue[ee];const ft=ee=>ee*ae*ae/1e4,k=(ee,pe)=>{const Ee=(ee/se+ue-z)/(O-z)*ye-.5,be=(pe/se+fe-B)/(N-B)*Me-.5;if(Ee<0||be<0||Ee>ye-1.001||be>Me-1.001)return-1;const Ke=Math.floor(Ee),ct=Math.floor(be),nt=Ee-Ke,ht=be-ct,Mt=ct*ye+Ke;return Ce[Mt]*(1-nt)*(1-ht)+Ce[Mt+1]*nt*(1-ht)+Ce[Mt+ye]*(1-nt)*ht+Ce[Mt+ye+1]*nt*ht},Dn=(ee,pe)=>{const Ee=k(ee,pe);return Ee<0?1/0:Ee/Mr};e(.7,"Levantando el relieve"),await H();const _t=4,Qe=document.createElement("canvas");Qe.width=Math.round(ye/_t),Qe.height=Math.round(Me/_t);const Oe=Qe.getContext("2d",{willReadFrequently:!0});Oe.filter="blur(2px)",Oe.drawImage(je,0,0,Qe.width,Qe.height);const Rt=Oe.getImageData(0,0,Qe.width,Qe.height).data,$e=(ee,pe)=>{const Ee=Math.max(0,Math.min(Qe.width-1,Math.floor(ee*Qe.width))),Ke=(Math.max(0,Math.min(Qe.height-1,Math.floor(pe*Qe.height)))*Qe.width+Ee)*4;return(Rt[Ke+3]<255?Rt[Ke+3]:Rt[Ke])/255},U=document.createElement("canvas");U.width=U.height=512;const A=U.getContext("2d",{willReadFrequently:!0});A.drawImage(R[0],0,0),A.drawImage(R[1],256,0),A.drawImage(R[2],0,256),A.drawImage(R[3],256,256);const ie=A.getImageData(0,0,512,512).data,xe=(ee,pe)=>{ee=Math.max(0,Math.min(511,ee)),pe=Math.max(0,Math.min(511,pe));const Ee=(pe*512+ee)*4;return ie[Ee]*256+ie[Ee+1]+ie[Ee+2]/256-32768},Te=(ee,pe)=>{const Ee=(ee/8-yS.x0)*256-.5,be=(pe/8-yS.y0)*256-.5,Ke=Math.floor(Ee),ct=Math.floor(be),nt=Ee-Ke,ht=be-ct;return xe(Ke,ct)*(1-nt)*(1-ht)+xe(Ke+1,ct)*nt*(1-ht)+xe(Ke,ct+1)*(1-nt)*ht+xe(Ke+1,ct+1)*nt*ht},de=i?130:180,qe=Math.round(de*Me/ye),Be=new Float32Array((de+1)*(qe+1)*3),Ge=new Float32Array((de+1)*(qe+1)*2),bt=new Float32Array((de+1)*(qe+1)*2),Re=new Float32Array((de+1)*(qe+1));{let ee=0,pe=0;for(let Ee=0;Ee<=qe;Ee++)for(let be=0;be<=de;be++){const Ke=be/de,ct=Ee/qe,nt=z+Ke*(O-z),ht=B+ct*(N-B),[Mt,He]=q(nt,ht),rt=q3(.3,.85,$e(Ke,ct)),vt=Math.max(0,Te(nt,ht))*j3*rt+.3*rt;Re[Ee*(de+1)+be]=vt,Be[ee++]=Mt,Be[ee++]=vt,Be[ee++]=He,Ge[pe]=(nt-_r.x0)/_r.nx,Ge[pe+1]=1-(ht-_r.y0)/_r.ny,bt[pe]=Ke,bt[pe+1]=ct,pe+=2}}const Ye=[];for(let ee=0;ee<qe;ee++)for(let pe=0;pe<de;pe++){const Ee=ee*(de+1)+pe;Ye.push(Ee,Ee+de+1,Ee+1,Ee+1,Ee+de+1,Ee+de+2)}const at=new Di;at.setAttribute("position",new On(Be,3)),at.setAttribute("uv",new On(Ge,2)),at.setAttribute("aWin",new On(bt,2)),at.setIndex(Ye),at.computeVertexNormals();const lt=(ee,pe)=>{const Ee=Math.max(0,Math.min(de-.001,ee*de)),be=Math.max(0,Math.min(qe-.001,pe*qe)),Ke=Math.floor(Ee),ct=Math.floor(be),nt=Ee-Ke,ht=be-ct,Mt=(He,rt)=>Re[rt*(de+1)+He];return Mt(Ke,ct)*(1-nt)*(1-ht)+Mt(Ke+1,ct)*nt*(1-ht)+Mt(Ke,ct+1)*(1-nt)*ht+Mt(Ke+1,ct+1)*nt*ht},Xe=(ee,pe)=>lt(yr((ee/se+ue-z)/(O-z)),yr((pe/se+fe-B)/(N-B))),At=a.capabilities.maxTextureSize,St=Math.min(8,a.capabilities.getMaxAnisotropy()),Qt=(ee,pe)=>{const Ee=Math.min(1,pe/Math.max(ee.width,ee.height)),be=document.createElement("canvas");be.width=Math.round(ee.width*Ee),be.height=Math.round(ee.height*Ee),be.getContext("2d").drawImage(ee,0,0,be.width,be.height);const Ke=new F1(be);return Ke.colorSpace=Wn,Ke.anisotropy=St,Ke},j={uLost:{value:Le},uYear:{value:0},uMode:{value:0},uDim:{value:0}},Ve=new go({map:Qt(v,At),roughness:1,metalness:0});SS(Ve,j);const he=new Yn(at,Ve),Se=T.mosaico,ke=Se.px/256,Ne=i?100:150,mt=new Float32Array((Ne+1)*(Ne+1)*3),cn=new Float32Array((Ne+1)*(Ne+1)*2),An=new Float32Array((Ne+1)*(Ne+1)*2);{let ee=0,pe=0;for(let Ee=0;Ee<=Ne;Ee++)for(let be=0;be<=Ne;be++){const Ke=(Se.x0+be/Ne*ke)/8,ct=(Se.y0+Ee/Ne*ke)/8,[nt,ht]=q(Ke,ct),Mt=(Ke-z)/(O-z),He=(ct-B)/(N-B);mt[ee++]=nt,mt[ee++]=lt(yr(Mt),yr(He))+.4,mt[ee++]=ht,cn[pe]=be/Ne,cn[pe+1]=1-Ee/Ne,An[pe]=Mt,An[pe+1]=He,pe+=2}}const Ot=[];for(let ee=0;ee<Ne;ee++)for(let pe=0;pe<Ne;pe++){const Ee=ee*(Ne+1)+pe;Ot.push(Ee,Ee+Ne+1,Ee+1,Ee+1,Ee+Ne+1,Ee+Ne+2)}const Zt=new Di;Zt.setAttribute("position",new On(mt,3)),Zt.setAttribute("uv",new On(cn,2)),Zt.setAttribute("aWin",new On(An,2)),Zt.setIndex(Ot),Zt.computeVertexNormals();const Ln=new go({map:Qt(E,At),roughness:1,metalness:0});SS(Ln,j);const Qn=new Yn(Zt,Ln),Rr=Math.cos(T.rot),ea=Math.sin(T.rot),Us=(ee,pe)=>{const Ee=(ee-T.tx)/T.sc,be=(pe-T.ty)/T.sc;return[T.lon0+(Ee*Rr+be*ea)/T.kx,T.lat0+(-Ee*ea+be*Rr)/T.ky]},[Ja,$a]=Us(40,390),[Jn,kn]=Y(Ja,$a);e(.78,"Colocando los árboles reales"),await H();const Gi=await V3();if(f)return null;const ta=M.arboles.map(([ee,pe,Ee,be],Ke)=>{const[ct,nt]=Us(ee,pe),[ht,Mt]=Y(ct,nt),He=k(ht,Mt);return{X:ht,Z:Mt,i:Ke,size:Ee,dense:be,d:He,lostAt:He<0?-1:He/Mr,dc:Math.hypot(ht-Jn,Mt-kn)}}).filter(ee=>ee.d>0).sort((ee,pe)=>ee.dc-pe.dc).slice(0,i?700:1800).map(ee=>({x:ee.X,y:Xe(ee.X,ee.Z)+.4,z:ee.Z,rot:(Math.imul(ee.i+7,40503)>>>0)%628/100,height:8.5*ee.size*1.35*(ee.dense?.92:1.05),tone:(Math.imul(ee.i+3,69069)>>>0)%100/100,lostAt:ee.lostAt}));let ii=ym(Gi,ta,60),Os=-1;e(.84,"Colocando las construcciones"),await H();const Da=[];for(const[,ee,pe]of S.buildings){let Ee=0,be=0;const Ke=pe.map(([jn,mi])=>{const[_a,un]=Y(jn,mi);return Ee+=_a,be+=un,[_a,un]});Ee/=Ke.length,be/=Ke.length;let ct=0,nt=0,ht=0;for(const[jn,mi]of Ke)ct+=(jn-Ee)**2,nt+=(mi-be)**2,ht+=(jn-Ee)*(mi-be);const Mt=.5*Math.atan2(2*ht,ct-nt),He=Math.cos(Mt),rt=Math.sin(Mt);let vt=1e9,gt=-1e9,yn=1e9,In=-1e9;for(const[jn,mi]of Ke){const _a=(jn-Ee)*He+(mi-be)*rt,un=-(jn-Ee)*rt+(mi-be)*He;vt=Math.min(vt,_a),gt=Math.max(gt,_a),yn=Math.min(yn,un),In=Math.max(In,un)}const ki=k(Ee,be);ki<0||Da.push({x:Ee,z:be,ang:Mt,w:Math.max(3,gt-vt),d:Math.max(3,In-yn),h:ee||4,y:Xe(Ee,be),lostAt:ki/Mr})}const Is=new So(1,1,1);Is.translate(0,.5,0);const La=new go({roughness:.85,metalness:0,transparent:!0,opacity:1}),Vi=new Ng(Is,La,Da.length);Vi.frustumCulled=!1;const Cr=new yt,C=new Za,K=new F(0,1,0),oe=new F,le=new F,$=new ot,Ae=new ot(16722474),De=(ee,pe,Ee)=>{Da.forEach((be,Ke)=>{const ct=ee>.001&&be.lostAt<=ee,nt=ct&&pe==="despues";C.setFromAxisAngle(K,-be.ang),le.set(be.x,be.y,be.z);const ht=nt?1e-4:Ee;oe.set(be.w*ht,be.h*ht,be.d*ht),Cr.compose(le,C,oe),Vi.setMatrixAt(Ke,Cr),ct?$.copy(Ae):$.setHSL(.09,.08+Ke*37%10/100,.78+Ke*53%10/100),Vi.setColorAt(Ke,$)}),Vi.instanceMatrix.needsUpdate=!0,Vi.instanceColor&&(Vi.instanceColor.needsUpdate=!0)};De(0,"perdida",Sm);const we=new C1;we.fog=new wg(10471124,11e-6),we.add(he,Qn,Vi,ii);const Ie=new pd;Ie.scale.setScalar(45e4);const it=Ie.material.uniforms;it.turbidity.value=2,it.rayleigh.value=2.4,it.mieCoefficient.value=.004,it.mieDirectionalG.value=.82;const dt=new F().setFromSphericalCoords(1,Ts.degToRad(52),Ts.degToRad(215));it.sunPosition.value.copy(dt),we.add(Ie);const tt=new Vn(L);tt.wrapS=tt.wrapT=vo,tt.repeat.set(900,900),tt.needsUpdate=!0;const It=new Yn(new $c(2e5,2e5),new go({color:675712,roughness:.62,metalness:0,normalMap:tt,normalScale:new Gt(.35,.35)}));It.rotation.x=-Math.PI/2,we.add(It);const Vt=new aM(16773336,2.6);Vt.position.copy(dt).multiplyScalar(8e3),we.add(Vt,new iA(13625087,7036218,.7));const Kt=new Ai(42,1,5,4e5);e(.9,"Dibujando las vías"),await H();const qt={},Dt=()=>new id({color:329740,linewidth:6,transparent:!0,opacity:0,depthWrite:!1}),et=()=>new id({linewidth:3,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1}),hn=[];for(const ee of["peatonal","motos"]){const pe=I[ee],Ee=[];for(let He=0;He<pe.segmentos;He++){const[rt,vt,gt,yn]=pe.coords[He],[In,ki]=Y(rt,vt),[jn,mi]=Y(gt,yn),_a=Math.hypot(jn-In,mi-ki),un=Math.max(1,Math.ceil(_a/16));for(let xi=0;xi<un;xi++){const Or=In+(jn-In)*xi/un,Fs=ki+(mi-ki)*xi/un,iu=In+(jn-In)*(xi+1)/un,To=ki+(mi-ki)*(xi+1)/un,Ir=(Or+iu)/2,as=(Fs+To)/2;Ee.push({s:He,x0:Or,z0:Fs,x1:iu,z1:To,mx:Ir,mz:as,largo:_a/un,orden:Math.hypot(Ir-Jn,as-kn),lostAt:Dn(Ir,as)})}}Ee.sort((He,rt)=>He.orden-rt.orden);const be=new Float32Array(Ee.length*6);Ee.forEach((He,rt)=>{be[rt*6]=He.x0,be[rt*6+1]=Xe(He.x0,He.z0)+3,be[rt*6+2]=He.z0,be[rt*6+3]=He.x1,be[rt*6+4]=Xe(He.x1,He.z1)+3,be[rt*6+5]=He.z1});const Ke=new dg;Ke.setPositions(be),Ke.setColors(new Float32Array(Ee.length*6).fill(1));const ct=new gm(Ke,Dt()),nt=new gm(Ke,et());ct.renderOrder=5,nt.renderOrder=6,ct.frustumCulled=nt.frustumCulled=!1,ct.visible=nt.visible=!1,hn.push(ct.material,nt.material),we.add(ct,nt);const ht=pe.largo_m.reduce((He,rt)=>He+rt,0)/1e3,Mt={};pe.tipo.forEach((He,rt)=>{Mt[He]=(Mt[He]||0)+pe.largo_m[rt]/1e3}),qt[ee]={nombre:ee,d:pe,piezas:Ee,g:Ke,halo:ct,main:nt,op:0,reveal:0,firma:"",km:ht,porTipo:Mt,N:Ee.length}}const Lt={};for(const[ee,pe]of Object.entries(qt)){const Ee={10:0,20:0,30:0};let be=0;pe.piezas.forEach(He=>{be+=He.largo;for(const rt of[10,20,30])He.lostAt<=rt&&(Ee[rt]+=He.largo)});const Ke=pe.d.medidas.n.nach,ct=Zf(Ke.filter((He,rt)=>pe.d.comp[rt]===pe.d.mayor_comp),.9),nt=new Float64Array(pe.d.segmentos).fill(1/0);pe.piezas.forEach(He=>{He.lostAt<nt[He.s]&&(nt[He.s]=He.lostAt)});let ht=0;const Mt={10:0,20:0,30:0};for(let He=0;He<pe.d.segmentos;He++)if(Ke[He]>=ct&&pe.d.comp[He]===pe.d.mayor_comp){ht++;for(const rt of[10,20,30])nt[He]<=rt&&Mt[rt]++}Lt[ee]={km:be/1e3,pct:{10:100*Ee[10]/be,20:100*Ee[20]/be,30:100*Ee[30]/be},km_perdidos:{10:Ee[10]/1e3,20:Ee[20]/1e3,30:Ee[30]/1e3},altos:ht,altosLost:Mt}}const vn=new Rs;vn.visible=!1,we.add(vn);const nn=[],Xn=[];for(const ee of I.rutas_lanchas){const pe=[];for(let ct=0;ct<ee.puntos.length-1;ct++){const[nt,ht]=ee.puntos[ct],[Mt,He]=ee.puntos[ct+1],[rt,vt]=Y(nt,ht),[gt,yn]=Y(Mt,He);pe.push(rt,3,vt,gt,3,yn),Xn.push([rt,vt])}const Ee=new dg;Ee.setPositions(pe);const be=new id({color:9425902,linewidth:2.6,transparent:!0,opacity:0,dashed:!0,dashSize:170,gapSize:130,depthWrite:!1}),Ke=new gm(Ee,be);Ke.computeLineDistances(),Ke.frustumCulled=!1,vn.add(Ke),nn.push(be)}const ma=new Ug(1,1,1,10,1,!0);ma.translate(0,.5,0);const en=new Tr({color:16756838,transparent:!0,opacity:0,depthWrite:!1,blending:Mm,side:ha}),Tn=[],wn=(ee,pe,Ee)=>{const be=new Yn(ma,en);be.position.set(ee,Xe(ee,pe),pe),be.userData.tipo=Ee,be.frustumCulled=!1,vn.add(be),Tn.push(be)},Rn=I.muelles;Rn.puntos.forEach(ee=>{const[pe,Ee]=Y(ee.lon,ee.lat);wn(pe,Ee,"muelle")});for(const ee of I.rutas_lanchas)for(const pe of[0,ee.puntos.length-1]){const[Ee,be]=Y(...ee.puntos[pe]);wn(Ee,be,"embarque")}const xn=new ot,Ps=new ot().setRGB(.3,.32,.34);function ga(ee,pe,Ee){const{d:be,piezas:Ke,g:ct}=ee,nt=new Float32Array(Ke.length*6);let ht=null;const Mt=be.mayor_comp;if(pe==="nain"||pe==="nach"){const He=be.medidas[Ee][pe],rt=He.filter((yn,In)=>be.comp[In]===Mt),vt=Zf(rt,.02),gt=Zf(rt,.98);ht=yn=>be.comp[yn]!==Mt?-1:yr((He[yn]-vt)/(gt-vt||1))}else if(pe==="muelle_dist"){const He=Rn.dist_m,rt=Zf(He.filter(vt=>vt>=0),.95)||1;ht=vt=>He[vt]<0?-1:1-yr(He[vt]/rt)}else if(pe==="muelle_ch"){const He=Rn.eleccion;ht=rt=>be.comp[rt]!==Mt?-1:yr(Math.pow(He[rt],.45))}Ke.forEach((He,rt)=>{if(pe==="tipo")xn.set(Z3[be.tipo[He.s]]||"#f4f1ec");else if(pe==="riesgo"){const vt=He.lostAt,gt=vt<=10?"#b3261e":vt<=20?"#e0453a":vt<=30?"#f58b7e":"#aeb8bd";xn.set(gt)}else{const vt=ht?ht(He.s):0;vt<0?xn.copy(Ps):k3(vt,xn)}nt[rt*6]=nt[rt*6+3]=xn.r,nt[rt*6+1]=nt[rt*6+4]=xn.g,nt[rt*6+2]=nt[rt*6+5]=xn.b}),ct.setColors(nt)}const zt=ee=>Da.reduce((pe,Ee)=>pe+(Ee.lostAt<=ee?1:0),0),tu={mpp:ae,resolucionM:ae,ha:{total:ft(ve),10:ft(Pe[10]),20:ft(Pe[20]),30:ft(Pe[30])},pct:{10:100*Pe[10]/ve,20:100*Pe[20]/ve,30:100*Pe[30]/ve},casas:{total:Da.length,10:zt(10),20:zt(20),30:zt(30)},haAnio:ee=>ft(Pe[Math.max(0,Math.min(30,Math.round(ee)))]),pctAnio:ee=>100*Pe[Math.max(0,Math.min(30,Math.round(ee)))]/ve,casasAnio:ee=>zt(ee),riesgoRed:Lt,km:{peatonal:qt.peatonal.km,motos:qt.motos.km},porTipo:{peatonal:qt.peatonal.porTipo,motos:qt.motos.porTipo}},es=new Hi;Xn.forEach(([ee,pe])=>es.expandByPoint(new F(ee,0,pe))),Rn.puntos.forEach(ee=>{const[pe,Ee]=Y(ee.lon,ee.lat);es.expandByPoint(new F(pe,0,Ee))});const ts=es.getCenter(new F),na=es.getSize(new F),ai=Math.max(na.x,na.z)*1.05+2500,ns=()=>window.innerWidth>=1024?-1500:0,Gl={hero:ee=>{const pe=Ts.degToRad(205)+Math.sin(ee*.05)*.55;return{pos:new F(Jn+Math.sin(pe)*470,170,kn+Math.cos(pe)*470),look:new F(Jn,-6,kn)}},casco:()=>({pos:new F(Jn+380,520,kn+700),look:new F(Jn,10,kn)}),isla:()=>({pos:new F(500+ns(),7800,8400),look:new F(ns(),0,300)}),problema:()=>window.innerWidth>=1024?{pos:new F(-900,7400,8e3),look:new F(-2300,0,300)}:{pos:new F(500,7800,8400),look:new F(0,0,300)},vias:()=>({pos:new F(250+ns(),5700,6700),look:new F(ns(),0,250)}),lancha:()=>({pos:new F(ts.x+ai*.18+ns()*1.5,ai*.62,ts.z+ai*.92),look:new F(ts.x+ns()*1.5,0,ts.z)}),casco_alto:()=>({pos:new F(Jn+250,1500,kn+1500),look:new F(Jn,0,kn)})},pn={cam:"hero",year:0,modo:"perdida",red:null,capa:"tipo",radio:"n",calles:0,casas:1,dim:0,rutas:0},Jt={year:0,dim:0,casas:1,rutas:0,escala:Sm},Nr=Gl.hero(0).pos.clone(),pi=Gl.hero(0).look.clone(),Li={x:0,y:0,sx:0,sy:0},Vl=ee=>{Li.x=(ee.clientX/window.innerWidth-.5)*2,Li.y=(ee.clientY/window.innerHeight-.5)*2};window.addEventListener("pointermove",Vl,{passive:!0}),c.push(()=>window.removeEventListener("pointermove",Vl));const Mo=()=>{const ee=l.clientWidth||window.innerWidth,pe=l.clientHeight||window.innerHeight;a.setSize(ee,pe,!1),Kt.aspect=ee/pe,Kt.updateProjectionMatrix(),hn.forEach(Ee=>Ee.resolution.set(ee,pe)),nn.forEach(Ee=>Ee.resolution.set(ee,pe))};Mo();const is=new ResizeObserver(Mo);is.observe(l),c.push(()=>is.disconnect());const Dr=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let Lr=performance.now();const zs=Lr;let kl=0,Xl=document.hidden;const jl=()=>{Xl=document.hidden,Lr=performance.now()};document.addEventListener("visibilitychange",jl),c.push(()=>document.removeEventListener("visibilitychange",jl));let Eo="",nu=!1;const Bs=(ee,pe)=>1-Math.exp(-ee*pe),Ur=ee=>{if(kl=requestAnimationFrame(Ur),Xl||f)return;const pe=Math.min(W3,(ee-Lr)/1e3);Lr=ee;const Ee=(ee-zs)/1e3;Jt.year+=(pn.year-Jt.year)*Bs(pe,Dr?30:5),Math.abs(pn.year-Jt.year)<.002&&(Jt.year=pn.year),j.uYear.value=Jt.year,j.uMode.value=pn.modo==="despues"?1:0,Jt.dim+=(pn.dim-Jt.dim)*Bs(pe,3),j.uDim.value=Jt.dim;const be=Gl[pn.cam](Ee*(Dr?0:1)),Ke=window.innerWidth/window.innerHeight;if(Ke<.85&&pn.cam!=="hero"&&pn.cam!=="casco"){const vt=Math.min(2.3,.95/Ke),gt=be.pos.clone().sub(be.look).multiplyScalar(vt),yn=gt.length()*.2;be.look.z+=yn,be.pos=be.look.clone().add(gt)}const ct=Bs(pe,Dr?30:1.7);Nr.lerp(be.pos,ct),pi.lerp(be.look,ct),Li.sx+=(Li.x-Li.sx)*.05,Li.sy+=(Li.y-Li.sy)*.05;const nt=Nr.distanceTo(pi);Kt.position.set(Nr.x+Li.sx*nt*.012,Nr.y-Li.sy*nt*.008,Nr.z),Kt.lookAt(pi),Jt.casas+=(pn.casas-Jt.casas)*Bs(pe,3),La.opacity=Jt.casas,Vi.visible=Jt.casas>.02;const ht=Ts.clamp(nt/3800,1,Sm);Math.abs(ht-Jt.escala)/Jt.escala>.05&&(Jt.escala=ht);const Mt=Math.round(Jt.year*2)/2,He=`${Mt}|${pn.modo}|${Jt.escala.toFixed(2)}`;Vi.visible&&He!==Eo&&(Eo=He,De(Mt,pn.modo,Jt.escala)),ii.visible=nt<3500&&Jt.casas>.5,pn.modo==="despues"&&ii.visible&&Math.round(Jt.year)!==Os?(Os=Math.round(Jt.year),we.remove(ii),ii.traverse(vt=>{vt.isInstancedMesh&&vt.dispose()}),ii=ym(Gi,ta.filter(vt=>vt.lostAt>Jt.year),60),we.add(ii)):pn.modo!=="despues"&&Os!==-1&&(Os=-1,we.remove(ii),ii.traverse(vt=>{vt.isInstancedMesh&&vt.dispose()}),ii=ym(Gi,ta,60),we.add(ii));const rt=yr((nt-900)/6e3);for(const[vt,gt]of Object.entries(qt)){const yn=`${pn.capa}|${pn.radio}`,In=pn.red===vt&&pn.calles>0;In&&gt.firma!==yn&&(gt.firma=yn,ga(gt,pn.capa,pn.radio),gt.reveal=Dr?1:0);const ki=In?pn.calles:0;gt.op+=(ki-gt.op)*Bs(pe,4),In&&(gt.reveal=Math.min(1,gt.reveal+pe*.7));const jn=gt.op>.01;gt.halo.visible=gt.main.visible=jn,jn&&(gt.g.instanceCount=Math.max(1,Math.floor(gt.N*gt.reveal)),gt.main.material.opacity=gt.op,gt.halo.material.opacity=gt.op*.55,gt.main.material.linewidth=Ts.lerp(3.8,2.3,rt)*(i?.85:1),gt.halo.material.linewidth=Ts.lerp(7.2,4.6,rt)*(i?.85:1))}if(Jt.rutas+=(pn.rutas-Jt.rutas)*Bs(pe,3),vn.visible=Jt.rutas>.01,vn.visible){nn.forEach(gt=>{gt.opacity=Jt.rutas*.9}),en.opacity=Jt.rutas*.8;const vt=Ts.clamp(nt*.05,45,700);Tn.forEach(gt=>{const yn=gt.userData.tipo==="embarque"?1.5:1;gt.scale.set(vt*.011*yn,vt*yn,vt*.011*yn)})}a.render(we,Kt),nu||(nu=!0,o.style.opacity="1")};return kl=requestAnimationFrame(Ur),c.push(()=>cancelAnimationFrame(kl)),e(1,"Listo"),{stats:tu,datos:I,set(ee){Object.assign(pn,ee)},estado:pn,anioActual:()=>Jt.year,dispose(){f=!0,c.forEach(ee=>ee())}}}const Mn=(l,e=0)=>l.toLocaleString("es-CO",{minimumFractionDigits:e,maximumFractionDigits:e}),Xc=l=>Math.max(0,Math.min(1,l)),MS=l=>l<.5?2*l*l:1-(-2*l+2)**2/2,Q3="La pérdida paulatina de suelo costero por el aumento del mar amenaza con desplazar progresivamente a la población de Tierra Bomba y fragmentar sus modos de vida.",mg=[{id:"portada",n:"00",nombre:"Portada"},{id:"problema",n:"01",nombre:"El problema"},{id:"erosion",n:"02",nombre:"Si no se frena la erosión"},{id:"vias",n:"03",nombre:"Las vías"},{id:"sintaxis",n:"04",nombre:"Sintaxis espacial"},{id:"cierre",n:"05",nombre:"Lo que sigue"}],J3=[["n","Toda la isla"],["1200","1,2 km"],["400","400 m"]],ho=[{id:"metodo",corto:"Método",grupo:"Método",titulo:"Cómo se lee una red",red:"peatonal",capa:"tipo"},{id:"pea-int",corto:"Peatonal · Integración",grupo:"Red peatonal",titulo:"Integración",red:"peatonal",capa:"nain",medida:"nain"},{id:"pea-ele",corto:"Peatonal · Elección",grupo:"Red peatonal",titulo:"Elección",red:"peatonal",capa:"nach",medida:"nach"},{id:"mot-int",corto:"Motos · Integración",grupo:"Red de motos",titulo:"Integración",red:"motos",capa:"nain",medida:"nain"},{id:"mot-ele",corto:"Motos · Elección",grupo:"Red de motos",titulo:"Elección",red:"motos",capa:"nach",medida:"nach"},{id:"mu-dist",corto:"Lanchas · Acceso a muelles",grupo:"Lanchas",titulo:"Acceso a los muelles",red:"peatonal",capa:"muelle_dist",rutas:1},{id:"mu-ele",corto:"Lanchas · Elección a muelles",grupo:"Lanchas",titulo:"Elección hacia los muelles",red:"peatonal",capa:"muelle_ch",rutas:1},{id:"rutas",corto:"Lanchas · Rutas",grupo:"Lanchas",titulo:"Rutas de lancha",red:"peatonal",capa:"tipo",calles:.22,rutas:1,cam:"lancha"},{id:"riesgo",corto:"La erosión sobre las redes",grupo:"Erosión + redes",titulo:"La erosión sobre las redes",capa:"riesgo"}],$3=95;function eN({text:l,className:e=""}){const i=Gn.useRef(null),[a,o]=Gn.useState(0);Gn.useEffect(()=>{const f=()=>{const h=i.current;if(!h)return;const p=h.getBoundingClientRect(),m=window.innerHeight;o(Xc((m*.9-p.top)/(p.height+m*.45)))};return f(),window.addEventListener("scroll",f,{passive:!0}),window.addEventListener("resize",f),()=>{window.removeEventListener("scroll",f),window.removeEventListener("resize",f)}},[]);const c=l.split(" ");return V.jsx("p",{ref:i,className:e,children:c.map((f,h)=>V.jsxs("span",{className:"transition-opacity duration-300",style:{opacity:a*c.length*1.15>h?1:.16},children:[f," "]},h))})}function ES({izquierda:l="Menos",derecha:e="Más"}){return V.jsxs("div",{children:[V.jsx("div",{className:"h-2 w-full rounded-[2px]",style:{background:X3}}),V.jsxs("div",{className:"etiqueta mt-1.5 flex justify-between text-white/55",children:[V.jsx("span",{children:l}),V.jsx("span",{children:e})]})]})}function tN({titulo:l,items:e}){return e!=null&&e.length?V.jsxs("div",{className:"mt-4",children:[V.jsx("p",{className:"etiqueta text-white/50",children:l}),V.jsx("ol",{className:"mt-2 space-y-1.5",children:e.slice(0,4).map((i,a)=>V.jsxs("li",{className:"flex items-baseline gap-3 border-t border-white/12 pt-1.5 text-[13px]",children:[V.jsx("span",{className:"etiqueta w-4 text-white/40",children:a+1}),V.jsx("span",{className:"flex-1 truncate",children:i.nombre}),V.jsx("span",{className:"num text-white/55",children:Mn(i.valor,2)})]},i.nombre))})]}):null}function nN({cap:l}){const e=mg.find(a=>a.id===l)||mg[0],i=l==="cierre";return V.jsxs("header",{className:`pointer-events-none fixed inset-x-0 top-0 z-30 pb-6 ${i?"bg-papel/90 backdrop-blur-sm":"bg-gradient-to-b from-tinta/80 via-tinta/35 to-transparent"}`,children:[V.jsxs("div",{className:`flex items-start justify-between gap-4 px-4 pt-4 sm:px-8 sm:pt-5 ${i?"text-tinta/70":"text-white/75 [text-shadow:0_1px_12px_rgba(0,0,0,.6)]"}`,children:[V.jsxs("p",{className:"etiqueta",children:["Tierra Bomba",V.jsx("span",{className:"hidden sm:inline",children:" · Tercer corte"})]}),V.jsxs("p",{className:"etiqueta truncate text-right",children:[V.jsx("span",{className:"text-arcilla",children:e.n}),V.jsx("span",{className:"mx-2 opacity-40",children:"/"}),e.nombre]})]}),V.jsx("div",{className:`mt-3 h-[2px] w-full ${i?"bg-tinta/10":"bg-white/10"}`,children:V.jsx("div",{className:"progreso progreso-nativo h-full w-full bg-arcilla"})})]})}const Fg="vidrio fixed z-20 bottom-3 left-3 right-3 max-h-[58svh] overflow-y-auto p-4 sm:bottom-6 sm:left-8 sm:right-auto sm:max-h-[calc(100svh-7rem)] sm:w-[25rem] sm:p-5";function iN({stats:l,anio:e,modo:i}){const a=l.casasAnio(e),o=l.haAnio(e),c=l.pctAnio(e),f=Mr*e;return V.jsxs("aside",{className:`${Fg} entra`,"aria-live":"polite",children:[V.jsx("p",{className:"etiqueta text-arcilla",children:"02 · Si no se frena la erosión"}),V.jsxs("div",{className:"mt-3 flex items-end justify-between gap-4",children:[V.jsxs("p",{className:"num text-5xl font-semibold leading-none tracking-tight",children:[e===0?"Hoy":`+${e}`,e>0&&V.jsx("span",{className:"ml-2 text-base font-normal text-white/55",children:"años"})]}),V.jsxs("p",{className:"num text-right text-xs text-white/55",children:[Mn(f,0)," m de",V.jsx("br",{}),"costa perdida"]})]}),V.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-4 border-t border-white/14 pt-3",children:[V.jsxs("div",{children:[V.jsx("p",{className:"num text-3xl font-semibold leading-none text-[#ff8a7a]",children:Mn(a)}),V.jsxs("p",{className:"mt-1.5 text-xs leading-snug text-white/65",children:["viviendas perdidas",V.jsx("br",{}),"de ",Mn(l.casas.total)]})]}),V.jsxs("div",{children:[V.jsx("p",{className:"num text-3xl font-semibold leading-none",children:Mn(o,o<10?1:0)}),V.jsxs("p",{className:"mt-1.5 text-xs leading-snug text-white/65",children:["hectáreas de costa",V.jsx("br",{}),"(",Mn(c,1)," % de la isla)"]})]})]}),V.jsxs("div",{className:"mt-4",children:[V.jsxs("div",{className:"relative h-[3px] bg-white/18",children:[V.jsx("div",{className:"absolute inset-y-0 left-0 bg-arcilla",style:{width:`${e/30*100}%`}}),[0,10,20,30].map(h=>V.jsx("span",{className:"absolute top-[-3px] h-[9px] w-px bg-white/50",style:{left:`${h/30*100}%`}},h))]}),V.jsx("div",{className:"etiqueta num relative mt-2 h-3 text-white/45",children:[0,10,20,30].map(h=>V.jsx("span",{className:"absolute -translate-x-1/2",style:{left:`${h/30*100}%`},children:h===0?"hoy":h},h))})]}),V.jsx("p",{className:"mt-4 text-[13px] leading-relaxed text-white/80",children:i==="despues"?"Así quedaría la isla: el mar ocupa la franja que se pierde y las viviendas dentro de ella desaparecen.":e===0?"La línea de costa actual, según la silueta oficial de la isla. Desplázate: la costa empieza a retroceder.":"En rojo, la tierra que el mar ocupa. El frente naranja es la costa de ese año."}),V.jsx("div",{className:"mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/60",children:[["#991b1b","hasta 10 años"],["#dc2626","10 a 20"],["#f87171","20 a 30"]].map(([h,p])=>V.jsxs("span",{className:"flex items-center gap-1.5",children:[V.jsx("i",{className:"inline-block h-2.5 w-2.5",style:{background:h}}),p]},p))}),V.jsxs("p",{className:"mt-3 border-t border-white/12 pt-2.5 text-[11px] leading-snug text-white/45",children:["Retroceso uniforme de ",Mn(Mr,1)," m/año (tasa máxima registrada); la erosión real varía por tramo. Construcciones del archivo de la tesis, con alturas de referencia."]})]})}function aN({stats:l,datos:e}){const i=e.peatonal,a=l.km.peatonal,o=hM.map(c=>({...c,km:c.tipos.reduce((f,h)=>f+(l.porTipo.peatonal[h]||0),0)}));return V.jsxs("aside",{className:`${Fg} entra`,children:[V.jsx("p",{className:"etiqueta text-arcilla",children:"03 · Todas las vías"}),V.jsxs("p",{className:"num mt-3 text-5xl font-semibold leading-none tracking-tight",children:[Mn(a,1),V.jsx("span",{className:"ml-2 text-base font-normal text-white/55",children:"km"})]}),V.jsxs("p",{className:"mt-2 text-[13px] text-white/70",children:["de vías cartografiadas sobre la isla, en ",Mn(i.segmentos)," tramos."]}),V.jsx("ul",{className:"mt-4 space-y-2 border-t border-white/14 pt-3",children:o.map(c=>V.jsxs("li",{className:"flex items-center gap-3 text-[13px]",children:[V.jsx("i",{className:"inline-block h-[3px] w-6",style:{background:c.color}}),V.jsx("span",{className:"flex-1",children:c.nombre}),V.jsxs("span",{className:"num text-white/60",children:[Mn(c.km,1)," km"]})]},c.id))}),V.jsxs("p",{className:"mt-4 border-t border-white/12 pt-3 text-[11px] leading-snug text-white/45",children:[e.meta.fuente_vias,", consultado el ",e.meta.fecha_vias,". Cobertura parcial: no es un inventario levantado en campo ni mide anchos."]})]})}function sN({paso:l,datos:e,stats:i,ctrl:a,setCtrl:o}){const c=l.red?e[l.red]:null,f=e.muelles,h=f.dist_m.filter(y=>y>=0).sort((y,E)=>y-E),p=h[Math.floor(h.length/2)]??0,m=h[h.length-1]??0,_=V.jsxs(V.Fragment,{children:[V.jsxs("p",{className:"etiqueta text-arcilla",children:["04 · Sintaxis espacial · ",l.grupo]}),V.jsx("h3",{className:"mt-2 text-2xl font-semibold leading-tight tracking-tight sm:text-[1.7rem]",children:l.titulo})]}),g=l.medida&&V.jsxs("div",{className:"mt-4",children:[V.jsx("p",{className:"etiqueta mb-2 text-white/50",children:"Radio de análisis"}),V.jsx("div",{className:"flex flex-wrap gap-2",children:J3.map(([y,E])=>V.jsx("button",{type:"button",className:"ficha","aria-pressed":a.radio===y,onClick:()=>o(T=>({...T,radio:y})),children:E},y))})]});let v=null;if(l.id==="metodo")v=V.jsxs(V.Fragment,{children:[V.jsx("p",{className:"mt-3 text-[13px] leading-relaxed text-white/80",children:"La sintaxis espacial mide qué tan accesible es cada tramo de calle respecto a todos los demás, contando los giros más que los metros. Cada vía se divide en tramos y se calcula, con el método angular de depthmapX, su integración y su elección."}),V.jsxs("dl",{className:"mt-4 space-y-3 border-t border-white/14 pt-3 text-[13px] leading-snug",children:[V.jsxs("div",{children:[V.jsx("dt",{className:"font-semibold",children:"Integración (NAIN)"}),V.jsx("dd",{className:"text-white/65",children:"Qué tan cerca, en giros, queda un tramo de todos los demás. Cálido: más integrado."})]}),V.jsxs("div",{children:[V.jsx("dt",{className:"font-semibold",children:"Elección (NACH)"}),V.jsx("dd",{className:"text-white/65",children:"Cuántos de los recorridos más directos entre todos los pares de tramos pasan por él. Cálido: más elegido."})]})]}),V.jsx("ul",{className:"mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/60",children:hM.map(y=>V.jsxs("li",{className:"flex items-center gap-1.5",children:[V.jsx("i",{className:"inline-block h-[3px] w-5",style:{background:y.color}}),y.nombre]},y.id))})]});else if(l.medida){const y=l.red==="motos";v=V.jsxs(V.Fragment,{children:[V.jsxs("p",{className:"mt-3 text-[13px] leading-relaxed text-white/80",children:[l.medida==="nain"?"Los tramos cálidos son aquellos desde los que se llega a todos los demás con menos giros.":"Los tramos cálidos concentran los recorridos más directos entre cualquier origen y destino de la red.",y?" Red de motos: calles y caminos carreteables según OpenStreetMap, sin senderos, peatonales ni escaleras. Es una suposición de trabajo, no verificada en campo.":" Red peatonal: todas las vías cartografiadas."]}),g,V.jsx("div",{className:"mt-4",children:V.jsx(ES,{izquierda:"Segregado",derecha:l.medida==="nain"?"Integrado":"Más elegido"})}),a.radio==="n"?V.jsx(tN,{titulo:l.medida==="nain"?"Ejes más integrados (toda la isla)":"Ejes más elegidos (toda la isla)",items:l.medida==="nain"?c.top_integracion:c.top_eleccion}):V.jsx("p",{className:"mt-4 text-[11px] text-white/45",children:"El ranking por nombre se calcula con el radio de toda la isla."}),V.jsxs("p",{className:"mt-3 text-[11px] text-white/45",children:[Mn(c.segmentos)," tramos · ",Mn(c.km,1)," km · ",c.componentes," ",c.componentes===1?"componente":"componentes"," conectados. En gris, tramos sin conexión con la red principal."]})]})}else if(l.id==="mu-dist"||l.id==="mu-ele")v=V.jsxs(V.Fragment,{children:[V.jsx("p",{className:"mt-3 text-[13px] leading-relaxed text-white/80",children:l.id==="mu-dist"?`Se tomaron los ${f.puntos.length} muelles y espolones de OpenStreetMap que quedan a menos de 120 m de la red peatonal. En color, la distancia por la red al muelle más cercano.`:"Cuántos recorridos directos, desde todos los tramos de la isla hacia un muelle, pasan por cada tramo."}),V.jsx("div",{className:"mt-4",children:V.jsx(ES,{izquierda:l.id==="mu-dist"?"Lejos":"Poco usado",derecha:l.id==="mu-dist"?"Cerca":"Más usado"})}),l.id==="mu-dist"&&V.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4 border-t border-white/14 pt-3",children:[V.jsxs("div",{children:[V.jsxs("p",{className:"num text-3xl font-semibold leading-none",children:[Mn(p),V.jsx("span",{className:"ml-1 text-sm font-normal text-white/55",children:"m"})]}),V.jsxs("p",{className:"mt-1.5 text-xs text-white/65",children:["distancia mediana",V.jsx("br",{}),"a un muelle"]})]}),V.jsxs("div",{children:[V.jsxs("p",{className:"num text-3xl font-semibold leading-none",children:[Mn(m),V.jsx("span",{className:"ml-1 text-sm font-normal text-white/55",children:"m"})]}),V.jsxs("p",{className:"mt-1.5 text-xs text-white/65",children:["distancia máxima",V.jsx("br",{}),"a un muelle"]})]})]}),V.jsx("p",{className:"mt-3 text-[11px] leading-snug text-white/45",children:"Las columnas de luz marcan los muelles mapeados. No hay otros datos de embarcaderos: faltan los que usa la comunidad."})]});else if(l.id==="rutas")v=V.jsxs(V.Fragment,{children:[V.jsx("p",{className:"mt-3 text-[13px] leading-relaxed text-white/80",children:"Las únicas rutas de lancha del archivo son dos conexiones esquemáticas: Castillogrande a Punta Arena y La Bodeguita a Bocachica. No son trayectorias registradas ni derrotas de navegación."}),V.jsx("ul",{className:"mt-4 space-y-2 border-t border-white/14 pt-3 text-[13px]",children:e.rutas_lanchas.map(y=>V.jsxs("li",{className:"flex items-center gap-3",children:[V.jsx("i",{className:"inline-block h-px w-6 border-t border-dashed border-[#8fd3ee]"}),V.jsx("span",{children:y.nombre})]},y.id))}),V.jsx("p",{className:"mt-4 text-[13px] leading-relaxed text-white/80",children:"Con dos líneas no hay red que analizar. Por eso el análisis de lanchas se hizo sobre el acceso a los muelles. Para una sintaxis marítima propia hace falta levantar las rutas reales. Las columnas de luz marcan los muelles de OpenStreetMap y los extremos de cada ruta."})]});else if(l.id==="riesgo"){const y=i.riesgoRed[a.redRiesgo],E=a.anioRiesgo;v=V.jsxs(V.Fragment,{children:[V.jsx("p",{className:"mt-3 text-[13px] leading-relaxed text-white/80",children:"Cada tramo se colorea según el año en que la costa lo alcanza con retroceso uniforme. Es el cruce entre la sintaxis y la erosión."}),V.jsxs("div",{className:"mt-4 space-y-2",children:[V.jsxs("div",{className:"flex items-center gap-2",children:[V.jsx("span",{className:"etiqueta w-[4.6rem] text-white/45",children:"Red"}),[["peatonal","Peatonal"],["motos","Motos"]].map(([T,M])=>V.jsx("button",{type:"button",className:"ficha","aria-pressed":a.redRiesgo===T,onClick:()=>o(S=>({...S,redRiesgo:T})),children:M},T))]}),V.jsxs("div",{className:"flex items-center gap-2",children:[V.jsx("span",{className:"etiqueta w-[4.6rem] text-white/45",children:"Horizonte"}),[10,20,30].map(T=>V.jsxs("button",{type:"button",className:"ficha","aria-pressed":a.anioRiesgo===T,onClick:()=>o(M=>({...M,anioRiesgo:T})),children:[T," años"]},T))]})]}),V.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4 border-t border-white/14 pt-3",children:[V.jsxs("div",{children:[V.jsxs("p",{className:"num text-3xl font-semibold leading-none text-[#ff8a7a]",children:[Mn(y.pct[E],1),V.jsx("span",{className:"ml-1 text-sm font-normal",children:"%"})]}),V.jsxs("p",{className:"mt-1.5 text-xs leading-snug text-white/65",children:["de la red (",Mn(y.km_perdidos[E],1)," de ",Mn(y.km,1)," km)",V.jsx("br",{}),"queda dentro de la franja"]})]}),V.jsxs("div",{children:[V.jsxs("p",{className:"num text-3xl font-semibold leading-none",children:[y.altosLost[E],V.jsxs("span",{className:"ml-1 text-sm font-normal text-white/55",children:["de ",y.altos]})]}),V.jsxs("p",{className:"mt-1.5 text-xs leading-snug text-white/65",children:["ejes de mayor elección",V.jsx("br",{}),"(10 % superior) afectados"]})]})]}),V.jsx("ul",{className:"mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/60",children:[["#b3261e","≤ 10 años"],["#e0453a","10 a 20"],["#f58b7e","20 a 30"],["#aeb8bd","fuera de 30"]].map(([T,M])=>V.jsxs("li",{className:"flex items-center gap-1.5",children:[V.jsx("i",{className:"inline-block h-[3px] w-5",style:{background:T}}),M]},M))})]})}return V.jsxs("aside",{className:`${Fg} entra`,"aria-live":"polite",children:[_,v,l.id!=="riesgo"&&l.id!=="rutas"&&l.id!=="metodo"&&V.jsx("p",{className:"mt-3 border-t border-white/12 pt-3 text-[11px] leading-snug text-white/40",children:"Método de depthmapX reimplementado en JavaScript; no se ejecutó la aplicación. Valores sin validar contra su salida."})]},l.id)}function rN({activo:l,onIr:e}){return V.jsx("nav",{"aria-label":"Pasos de la sintaxis espacial",className:"fixed right-5 top-1/2 z-20 hidden -translate-y-1/2 lg:block",children:V.jsx("ol",{className:"flex flex-col items-end gap-1",children:ho.map((i,a)=>V.jsx("li",{children:V.jsx("button",{type:"button",onClick:()=>e(a),title:i.corto,"aria-label":i.corto,"aria-current":a===l?"step":void 0,className:"group flex h-6 items-center",children:V.jsx("span",{className:`block h-[2px] rounded-full transition-all duration-300 ${a===l?"w-9 bg-arcilla":"w-4 bg-white/40 group-hover:w-6 group-hover:bg-white"}`})})},i.id))})})}function oN({api:l}){const e=l==null?void 0:l.datos,i=l==null?void 0:l.stats,a=Gn.useMemo(()=>{if(!e||!i)return[];const o=(f,h)=>{var p,m;return(m=(p=e[f][h])==null?void 0:p[0])==null?void 0:m.nombre};return[`Con retroceso uniforme de ${Mn(Mr,1)} m/año, a 30 años se pierden ${Mn(i.ha[30],0)} ha (${Mn(i.pct[30],1)} % de la isla) y ${Mn(i.casas[30])} de las ${Mn(i.casas.total)} construcciones del archivo.`,(()=>{const f=[o("peatonal","top_integracion"),o("peatonal","top_eleccion"),o("motos","top_integracion"),o("motos","top_eleccion")];return new Set(f).size===1?`«${f[0]}» es el eje más integrado y el más elegido, tanto en la red peatonal como en la de motos.`:`Red peatonal: integración en «${f[0]}», elección en «${f[1]}». Red de motos: integración en «${f[2]}», elección en «${f[3]}».`})(),`A 30 años, ${Mn(i.riesgoRed.peatonal.pct[30],1)} % de la red peatonal y ${Mn(i.riesgoRed.motos.pct[30],1)} % de la red de motos quedan dentro de la franja que se pierde.`,`De los ${i.riesgoRed.peatonal.altos} ejes de mayor elección de la red peatonal, ${i.riesgoRed.peatonal.altosLost[30]} quedan dentro de esa franja a 30 años.`]},[e,i]);return V.jsx("section",{id:"cierre",className:"relative bg-papel text-tinta",children:V.jsxs("div",{className:"mx-auto max-w-6xl px-5 py-24 sm:px-10 sm:py-32",children:[V.jsx("p",{className:"etiqueta text-arcilla",children:"05 · Lo que sigue"}),V.jsx("h2",{className:"mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl",children:"Lo que muestran los números, y lo que falta."}),V.jsxs("div",{className:"mt-14 grid gap-12 lg:grid-cols-2",children:[V.jsxs("div",{children:[V.jsx("h3",{className:"etiqueta text-tinta/55",children:"Resultados calculados"}),V.jsx("ol",{className:"regla mt-4",children:a.map((o,c)=>V.jsxs("li",{className:"regla grid grid-cols-[2.5rem_1fr] gap-3 py-4 first:border-t-0",children:[V.jsx("span",{className:"etiqueta text-arcilla",children:String(c+1).padStart(2,"0")}),V.jsx("p",{className:"leading-relaxed",children:o})]},c))})]}),V.jsxs("div",{children:[V.jsx("h3",{className:"etiqueta text-tinta/55",children:"Límites de este análisis"}),V.jsx("ul",{className:"regla mt-4",children:["La erosión se modela como un retroceso uniforme de toda la costa. No distingue tramos, mareas ni obras de defensa.","Las vías vienen de OpenStreetMap con cobertura parcial. La red de motos es una suposición según la etiqueta de cada vía.","La sintaxis es una reimplementación propia del método angular de depthmapX y no se comparó con su salida.","No hay una red de lanchas con datos reales: solo dos rutas esquemáticas. Lo medido es el acceso a muelles mapeados.","Las alturas de las construcciones son de referencia, no medidas."].map(o=>V.jsx("li",{className:"regla py-3 leading-relaxed first:border-t-0",children:o},o))})]})]}),V.jsx("div",{className:"mt-20 grid gap-4 sm:grid-cols-2",children:[["Versión para la comunidad","Territorio, historia, riesgos y el nuevo barrio, para quienes habitan la isla.","https://alejagoguti-cpu.github.io/tesis/#/comunidad"],["Tesis completa","La plataforma con el marco, los módulos técnicos y el visor 3D.","https://alejagoguti-cpu.github.io/tesis/"]].map(([o,c,f])=>V.jsxs("a",{href:f,target:"_blank",rel:"noopener noreferrer",className:"group block border border-tinta/20 p-6 transition-colors hover:border-tinta hover:bg-tinta hover:text-papel",children:[V.jsx("p",{className:"etiqueta opacity-60",children:"Enlace"}),V.jsxs("p",{className:"mt-2 text-2xl font-semibold tracking-tight",children:[o," ",V.jsx("span",{className:"inline-block transition-transform group-hover:translate-x-1",children:"→"})]}),V.jsx("p",{className:"mt-2 text-sm opacity-70",children:c})]},o))}),V.jsxs("footer",{className:"mt-20 border-t border-tinta/20 pt-6 text-xs leading-relaxed text-tinta/60",children:[V.jsx("p",{children:"Alejandra Gómez · Ana Casas · Tesis de grado en Arquitectura y Urbanismo · 2026"}),V.jsx("p",{className:"mt-2",children:"Fuentes: imagen satelital Esri World Imagery (Esri, Maxar, Earthstar Geographics y la comunidad GIS); relieve Terrain Tiles (Mapzen / AWS Open Data); vías y muelles © OpenStreetMap contributors (ODbL); árboles Island Tree 01 y 02, Poly Haven (CC0); método de sintaxis espacial de depthmapX (UCL Space Group, GPL-3.0)."})]})]})})}function lN({api:l,sinEscena:e}){const[i,a]=Gn.useState("portada"),[o,c]=Gn.useState(0),[f,h]=Gn.useState(0),[p,m]=Gn.useState("perdida"),[_,g]=Gn.useState({radio:"n",redRiesgo:"peatonal",anioRiesgo:30}),v=Gn.useRef(_);v.current=_;const y=Gn.useRef({cap:"portada",pasoIdx:0,p:0}),E=Gn.useRef(l);E.current=l;const T=Gn.useCallback(()=>{const L=E.current;if(!L)return;const{cap:R,pasoIdx:H,p:z}=y.current,O=v.current,B={cam:"hero",year:0,modo:"perdida",red:null,capa:"tipo",radio:"n",calles:0,casas:1,dim:0,rutas:0};let N=B;if(R==="portada")N=B;else if(R==="problema")N={...B,cam:"problema",dim:.1};else if(R==="erosion"){const w=30*MS(Xc((z-.08)/.76));N={...B,cam:z<.58?"casco":"isla",year:w,modo:z>.9?"despues":"perdida"}}else if(R==="vias")N={...B,cam:"vias",red:"peatonal",capa:"tipo",calles:1,casas:0,dim:.55};else if(R==="sintaxis"){const w=ho[H];N={...B,cam:w.cam||"vias",red:w.red||O.redRiesgo,capa:w.capa,radio:O.radio,calles:w.calles??1,casas:0,dim:.55,rutas:w.rutas||0},w.id==="riesgo"&&(N={...N,year:O.anioRiesgo,modo:"perdida",dim:.3,red:O.redRiesgo})}else N={...B,cam:"isla",dim:.5};L.set(N)},[]);Gn.useEffect(()=>{let L=0;const R=()=>{L=0;const z=window.innerHeight;let O="portada";for(const ue of mg){const fe=document.getElementById(ue.id);fe&&fe.getBoundingClientRect().top<=z*.55&&(O=ue.id)}const N=document.getElementById(O).getBoundingClientRect(),w=Math.max(1,N.height-z),G=Xc(-N.top/w);let se=y.current.pasoIdx;O==="sintaxis"&&(se=Math.min(ho.length-1,Math.floor(G*ho.length))),y.current={cap:O,pasoIdx:se,p:G};const ae=document.documentElement.scrollHeight-z;if(document.documentElement.style.setProperty("--p",ae>0?String(Xc(window.scrollY/ae)):"0"),a(ue=>ue===O?ue:O),c(ue=>ue===se?ue:se),O==="erosion"){const ue=Math.round(30*MS(Xc((G-.08)/.76)));h(fe=>fe===ue?fe:ue),m(G>.9?"despues":"perdida")}T()},H=()=>{L||(L=requestAnimationFrame(R))};return R(),window.addEventListener("scroll",H,{passive:!0}),window.addEventListener("resize",H),()=>{window.removeEventListener("scroll",H),window.removeEventListener("resize",H),cancelAnimationFrame(L)}},[T,l]),Gn.useEffect(()=>{T()},[_,l,T]);const M=L=>{const R=document.getElementById("sintaxis"),H=window.innerHeight,z=window.scrollY+R.getBoundingClientRect().top+(L+.5)/ho.length*(R.offsetHeight-H);window.scrollTo({top:z,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})},S=l==null?void 0:l.stats,I=l==null?void 0:l.datos;return V.jsxs("div",{className:"relative z-10",children:[V.jsx(nN,{cap:i}),V.jsxs("section",{id:"portada",className:"relative flex h-[100svh] min-h-[560px] items-end",children:[V.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-tinta/75 to-transparent"}),V.jsxs("div",{className:"relative w-full px-5 pb-12 sm:px-12 sm:pb-16",children:[V.jsx("p",{className:"etiqueta subir text-white/70",style:{animationDelay:"0.2s"},children:"Tesis de grado · Arquitectura y Urbanismo · Tercer corte"}),V.jsxs("h1",{className:"subir mt-4 text-[clamp(3.6rem,14vw,11.5rem)] font-semibold leading-[0.86] tracking-[-0.045em]",style:{animationDelay:"0.35s"},children:["Tierra",V.jsx("br",{className:"sm:hidden"})," Bomba"]}),V.jsx("div",{className:"trazo mt-6 h-px w-24 bg-arcilla"}),V.jsx("p",{className:"subir mt-5 max-w-xl text-lg font-light leading-snug text-white/90 sm:text-2xl",style:{animationDelay:"0.6s"},children:"Planificación y adaptación territorial frente a la pérdida de suelo costero"}),V.jsxs("div",{className:"subir mt-8 flex flex-wrap items-end justify-between gap-6",style:{animationDelay:"0.8s"},children:[V.jsx("p",{className:"text-sm text-white/65",children:"Alejandra Gómez · Ana Casas"}),V.jsxs("p",{className:"etiqueta flex items-center gap-3 text-white/70",children:["Desplázate ",V.jsx("span",{className:"flecha inline-block",children:"↓"})]})]})]})]}),V.jsxs("section",{id:"problema",className:"relative flex min-h-[150svh] items-center",children:[V.jsx("div",{className:"absolute inset-0 bg-tinta/45"}),V.jsxs("div",{className:"relative w-full max-w-[44rem] px-5 py-24 sm:px-12 lg:ml-[5vw]",children:[V.jsx("p",{className:"etiqueta text-arcilla",children:"01 · Formulación del problema"}),V.jsx(eN,{text:Q3,className:"mt-6 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"}),e&&V.jsx("p",{className:"mt-8 text-sm text-white/60",children:"Este dispositivo no pudo mostrar la vista 3D; se muestra la imagen satelital y los datos."})]})]}),V.jsx("section",{id:"erosion",style:{height:"520svh"},"aria-label":"Simulación de la erosión a 10, 20 y 30 años"}),V.jsx("section",{id:"vias",style:{height:"150svh"},"aria-label":"Todas las vías de la isla"}),V.jsx("section",{id:"sintaxis",style:{height:`${ho.length*$3}svh`},"aria-label":"Sintaxis espacial"}),l&&i==="erosion"&&V.jsx(iN,{stats:S,anio:f,modo:p}),l&&i==="vias"&&V.jsx(aN,{stats:S,datos:I}),l&&i==="sintaxis"&&V.jsxs(V.Fragment,{children:[V.jsx(sN,{paso:ho[o],datos:I,stats:S,ctrl:_,setCtrl:g}),V.jsx(rN,{activo:o,onIr:M})]}),V.jsx(oN,{api:l})]})}function cN({prog:l,visible:e}){return V.jsx("div",{className:`fixed inset-0 z-40 flex items-end bg-tinta transition-opacity duration-1000 ${e?"opacity-100":"pointer-events-none opacity-0"}`,"aria-hidden":!e,children:V.jsxs("div",{className:"w-full px-5 pb-8 sm:px-12 sm:pb-12",children:[V.jsx("p",{className:"etiqueta text-white/50",children:"Tierra Bomba · Tesis"}),V.jsx("p",{className:"mt-3 text-sm text-white/70",children:l.msg}),V.jsx("div",{className:"mt-4 h-px w-full max-w-md bg-white/15",children:V.jsx("div",{className:"h-px bg-arcilla transition-[width] duration-500",style:{width:`${Math.round(l.p*100)}%`}})})]})})}function uN(){const l=Gn.useRef(null),[e,i]=Gn.useState(null),[a,o]=Gn.useState({p:.02,msg:"Preparando la isla"}),[c,f]=Gn.useState(!1);return Gn.useEffect(()=>{let h=!1,p=null;return K3(l.current,{onProgreso:(m,_)=>o({p:m,msg:_})}).then(m=>{if(h){m==null||m.dispose();return}p=m,window.location.search.includes("debug")&&(window.__escena=m),i(m)}).catch(m=>{console.warn("Escena 3D no disponible:",m),h||f(!0)}),()=>{h=!0,p==null||p.dispose()}},[]),V.jsxs(V.Fragment,{children:[V.jsx("div",{ref:l,className:"fixed inset-0 z-0 bg-tinta"}),c&&V.jsx("img",{src:`${bi}assets/texturas/tierrabomba_satelite.jpg`,alt:"Vista satelital de la isla de Tierra Bomba",className:"fixed inset-0 z-0 h-full w-full object-cover opacity-60"}),V.jsx(cN,{prog:a,visible:!e&&!c}),V.jsx(lN,{api:e,sinEscena:c})]})}QT.createRoot(document.getElementById("root")).render(V.jsx(uN,{}));
