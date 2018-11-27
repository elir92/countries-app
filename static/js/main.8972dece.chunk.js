(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,n,t){"use strict";t.d(n,"c",function(){return c}),t.d(n,"f",function(){return i}),t.d(n,"e",function(){return u}),t.d(n,"b",function(){return l}),t.d(n,"g",function(){return s}),t.d(n,"d",function(){return f}),t.d(n,"a",function(){return d});var r=t(43),a=t.n(r),o=t(3),c=function(){return function(e){e({type:o.e}),a.a.get("https://restcountries.eu/rest/v2/all?fields=name;flag;alpha3Code;capital;region;population").then(function(n){return e({type:o.f,payload:n.data})}).catch(function(n){return e({type:o.d,payload:n})})}},i=function(e){return{type:o.b,payload:e}},u=function(e){return{type:o.h,payload:e}},l=function(){return{type:o.c}},s=function(){return{type:o.i}},f=function(){return{type:o.g}},d=function(e){return{type:o.a,payload:e+1}}},3:function(e,n,t){"use strict";t.d(n,"e",function(){return r}),t.d(n,"f",function(){return a}),t.d(n,"d",function(){return o}),t.d(n,"b",function(){return c}),t.d(n,"h",function(){return i}),t.d(n,"c",function(){return u}),t.d(n,"i",function(){return l}),t.d(n,"g",function(){return s}),t.d(n,"a",function(){return f});var r="REQUEST_COUNTRIES_PENDING",a="REQUEST_COUNTRIES_SUCCESS",o="REQUEST_COUNTRIES_FAILED",c="CHANGE_SEARCH_FIELD",i="SET_MODAL_STATE",u="MODAL_TOGGLE",l="START_GAME",s="RESTART_GAME",f="ANSWER_HANDLER"},37:function(e,n,t){e.exports=t.p+"static/media/globe.de21dbaf.svg"},44:function(e,n,t){e.exports=t.p+"static/media/react-logo.c182efec.svg"},45:function(e,n,t){e.exports=t.p+"static/media/redux-logo.5142d43f.svg"},50:function(e,n,t){e.exports=t(95)},67:function(e,n,t){},70:function(e,n,t){},72:function(e,n,t){},92:function(e,n,t){},95:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(14),c=t.n(o),i=t(15),u=(t(59),t(17)),l=t(41),s=(t(63),t(65),t(67),t(9)),f=t(10),d=t(12),p=t(11),m=t(13),g=t(312),h=t(313),E=t(308),v=t(5),b=function(e){return e.children},y=t(307),O=(t(70),function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(d.a)(this,Object(p.a)(n).call(this,e))).toggleHandler=function(){t.setState({isOpen:!t.state.isOpen})},t.state={isOpen:!1},t}return Object(m.a)(n,e),Object(f.a)(n,[{key:"shouldComponentUpdate",value:function(e,n){return this.state.isOpen!==n.isOpen}},{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement(v.p,{color:"dark",dark:!0,expand:"sm",className:"mb-3"},a.a.createElement(v.i,{className:"navbar-container"},a.a.createElement(v.q,{href:""},"Countries Application"),a.a.createElement(v.r,{onClick:this.toggleHandler}),a.a.createElement(v.h,{isOpen:this.state.isOpen,navbar:!0},a.a.createElement(v.m,{className:"ml-auto",navbar:!0},a.a.createElement(v.n,null,a.a.createElement(v.o,{tag:y.a,to:"/countries-app/"},"Home")),a.a.createElement(v.n,null,a.a.createElement(v.o,{tag:y.a,to:"/countries-app/table"},"Table")),a.a.createElement(v.n,null,a.a.createElement(v.o,{tag:y.a,to:"/countries-app/flag-game"},"Flag Game")),a.a.createElement(v.n,null,a.a.createElement(v.o,{tag:y.a,to:"/countries-app/charts"},"Charts")))))))}}]),n}(a.a.Component)),w=(t(72),function(){return a.a.createElement("footer",{className:"Footer"},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/eli-rahamim-04b6a8144/"},a.a.createElement("i",{className:"fab fa-linkedin"})),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/elir92"},a.a.createElement("i",{className:"fab fa-github"})),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/EliRahamim"},a.a.createElement("i",{className:"fab fa-twitter"})))}),j=t(26),S=(t(92),t(37)),k=t.n(S),C=t(44),N=t.n(C),T=t(45),_=t.n(T),R=function(e){function n(){return Object(s.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.restartGameHandler()}},{key:"render",value:function(){return a.a.createElement("div",{className:"Home"},a.a.createElement("h1",{className:"Home-title"},"Welcome"),a.a.createElement("img",{src:k.a,className:"Home-logo",alt:"globe"}),a.a.createElement("h4",{className:"details__headtitle"},"Based on"),a.a.createElement("a",{href:"https://reactjs.org/"},a.a.createElement("img",{className:"react-logo",src:N.a,alt:"logo"})),a.a.createElement("a",{href:"https://redux.js.org/"},a.a.createElement("img",{className:"redux-logo",src:_.a,alt:"logo"})))}}]),n}(r.Component),A=Object(u.b)(null,function(e){return{restartGameHandler:function(){return e(Object(j.d)())}}})(R),P=function(e){return function(n){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={component:null},n}return Object(m.a)(t,n),Object(f.a)(t,[{key:"componentDidMount",value:function(){var n=this;e().then(function(e){n.setState({component:e.default})})}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),t}(r.Component)},x=P(function(){return t.e(1).then(t.bind(null,309))}),H=P(function(){return t.e(2).then(t.bind(null,310))}),F=P(function(){return Promise.all([t.e(4),t.e(3)]).then(t.bind(null,311))}),M=function(e){function n(){return Object(s.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(f.a)(n,[{key:"render",value:function(){return a.a.createElement(g.a,null,a.a.createElement(b,null,a.a.createElement(O,null),a.a.createElement(v.i,null,a.a.createElement(h.a,null,a.a.createElement(E.a,{path:"/countries-app/",exact:!0,component:A}),a.a.createElement(E.a,{path:"/countries-app/table",component:x}),a.a.createElement(E.a,{path:"/countries-app/flag-game",component:H}),a.a.createElement(E.a,{path:"/countries-app/charts",component:F}))),a.a.createElement(w,null)))}}]),n}(r.Component),G=t(20),L=t(3),U=function(e,n){return Object(G.a)({},e,n)},D=function(e,n){for(var t=[],r=0;r<n;r++){var a=e.splice(Math.floor(Math.random()*e.length),1);t.push(a[0])}return t},I={isPending:!1,countries:[],error:null,searchField:"",modal:!1,currentCountry:{}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case L.e:return function(e){return U(e,{isPending:!0})}(e);case L.f:return function(e,n){return U(e,{countries:n.payload,isPending:!1})}(e,n);case L.d:return function(e,n){return U(e,{error:n.payload,isPending:!1})}(e,n);case L.b:return function(e,n){return U(e,{searchField:n.payload})}(e,n);case L.h:return function(e,n){var t=Object(G.a)({},n.payload,{population:n.payload.population.toLocaleString()});return U(e,{modal:!0,currentCountry:t})}(e,n);case L.c:return function(e){return U(e,{modal:!e.modal,currentCountry:{}})}(e);default:return e}},Q=t(47),B={isPending:!1,countries:[],error:null,gameStatus:!1,game:[],currentStage:0,randomFlag:""},J=function(e,n){if(n<10)return e[n][Math.floor(Math.random()*e[n].length)]},q=function(e){var n=function(e){for(var n=[],t=0;t<10;t++){var r=D(e,4);n.push(r)}return n}(Object(Q.a)(e.countries));return U(e,{gameStatus:!0,game:n,randomFlag:J(n,e.currentStage)})},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case L.e:return function(e){return U(e,{isPending:!0})}(e);case L.f:return function(e,n){return U(e,{countries:n.payload,isPending:!1})}(e,n);case L.d:return function(e,n){return U(e,{error:n.payload,isPending:!1})}(e,n);case L.i:return q(e);case L.g:return function(e){return U(e,{gameStatus:!1,game:[],currentStage:0})}(e);case L.a:return function(e,n){if(n.payload<=10)return U(e,{currentStage:n.payload,randomFlag:J(e.game,n.payload)})}(e,n);default:return e}},z={isPending:!1,topThreeCountries:[],regions:[],countedCountries:[],error:null},K=function(e,n){var t=n.payload.sort(function(e,n){return n.population-e.population}).slice(0,3),r=function(e){var n=e.map(function(e){return e.region}).filter(function(e){return""!==e});return Array.from(new Set(n)).sort()}(n.payload),a=function(e){return e.sort(function(e,n){return(e.region>n.region)-(e.region<n.region)}).reduce(function(e,n){if(!n.region)return e;var t=e.findIndex(function(e){return n.region===e.name});return~t?e[t].count++:e.push({name:n.region,count:1}),e},[])}(n.payload);return U(e,{topThreeCountries:t,regions:r,countedCountries:a,isPending:!1})},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case L.e:return function(e){return U(e,{isPending:!0})}(e);case L.f:return K(e,n);case L.d:return function(e,n){return U(e,{error:n.payload,isPending:!1})}(e,n);default:return e}},X=Object(i.c)({tableReducer:W,gameReducer:$,chartsReducer:V}),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ee=[l.a],ne=Object(i.e)(X,i.a.apply(void 0,ee)),te=a.a.createElement(u.a,{store:ne},a.a.createElement(M,null));c.a.render(te,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/countries-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/countries-app","/service-worker.js");Y?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Z(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Z(e)})}}()}},[[50,6,5]]]);
//# sourceMappingURL=main.8972dece.chunk.js.map