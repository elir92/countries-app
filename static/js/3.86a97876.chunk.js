(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{119:function(e,t,n){"use strict";var r=n(1),a=n.n(r);n(120);t.a=function(){return a.a.createElement("div",{style:{margin:"auto"}},a.a.createElement("div",{className:"Loader"}))}},120:function(e,t,n){},305:function(e,t,n){},311:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n(10),o=n(12),u=n(11),c=n(13),i=n(1),s=n.n(i),l=n(17),d=n(26),p=n(5),h=n(130),C=function(e){var t=e.popData,n=t.map(function(e){return e.population}),r={labels:t.map(function(e){return e.name}),datasets:[{data:n,backgroundColor:["#CD6155","#2E86C1","#16A085"],hoverBackgroundColor:["#CD6155","#2E86C1","#16A085"]}]};return s.a.createElement(h.b,{width:100,height:50,data:r})},m=function(e){var t={labels:e.regions,datasets:[{label:"Number Of Countries",backgroundColor:"#1b1a1a5c",borderColor:"#343a40",borderWidth:1,hoverBackgroundColor:"#e9ebed",hoverBorderColor:"#343a40",data:e.countedCountries.map(function(e){return e.count})}]};return s.a.createElement(h.a,{data:t})},b=n(119),f=(n(305),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderGraphs=function(){var e=n.props,t=e.topThreeCountries,r=e.regions,a=e.countedCountries;return s.a.createElement(p.s,{className:"Charts"},s.a.createElement(p.g,{className:"TopThree"},s.a.createElement("h2",{style:{textAlign:"center"}},"Top Highest Population"),s.a.createElement(C,{popData:t})),s.a.createElement(p.g,null,s.a.createElement("h2",{style:{textAlign:"center"}},"Countries Per Continent"),s.a.createElement(m,{regions:r,countedCountries:a})))},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.topThreeCountries.length||this.props.requestCountriesHandler()}},{key:"render",value:function(){return this.props.isPending?s.a.createElement(b.a,null):this.renderGraphs()}}]),t}(i.Component));t.default=Object(l.b)(function(e){return{isPending:e.chartsReducer.isPending,topThreeCountries:e.chartsReducer.topThreeCountries,regions:e.chartsReducer.regions,countedCountries:e.chartsReducer.countedCountries}},function(e){return{requestCountriesHandler:function(){return e(Object(d.c)())}}})(f)}}]);
//# sourceMappingURL=3.86a97876.chunk.js.map