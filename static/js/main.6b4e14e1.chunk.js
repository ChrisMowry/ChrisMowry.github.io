(this["webpackJsonpspokane-surf-report"]=this["webpackJsonpspokane-surf-report"]||[]).push([[0],{13:function(t,e,a){},26:function(t,e,a){t.exports=a.p+"static/media/thumbs-up.e033c19d.svg"},27:function(t,e,a){t.exports=a.p+"static/media/thumbs-down.1694df64.svg"},29:function(t,e,a){t.exports=a.p+"static/media/graph-placeholder.d938b9c7.svg"},30:function(t,e,a){t.exports=a.p+"static/media/graph-placeholder-not-in.b125973b.svg"},33:function(t,e,a){t.exports=a(63)},38:function(t,e,a){},39:function(t,e,a){t.exports=a.p+"static/media/surf-spokane.00f3e031.svg"},40:function(t,e,a){},59:function(t,e,a){},60:function(t,e,a){},63:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(16),i=a.n(r),s=a(31),c=a(1),l=a(2),p=a(3),u=a(7),h=a(5),m=a(4),d=(a(38),function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(p.a)(n,[{key:"handleClick",value:function(t){this.props.toggleMapVisibility()}},{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("img",{src:a(39),alt:"Spokane Surf Logo"}),o.a.createElement("h1",null,"Spokane Surf Report"),o.a.createElement("input",{id:"map-button",className:"map-button",type:"checkbox",checked:this.props.mapVisible,onClick:this.handleClick,readOnly:!0}),o.a.createElement("label",{htmlFor:"map-button",className:"map-button-display"},o.a.createElement("h2",null,"Map"),o.a.createElement("svg",{version:"1.1",id:"arrow",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 50 50",enableBackground:"new 0 0 50 50"},o.a.createElement("polygon",{points:"25,6.555 50.009,6.555 37.505,25 25,43.445 12.496,25 -0.008,6.555 "}))))}}]),n}(n.Component)),b=a(15),f=a(17),v=(a(40),a(26)),g=a.n(v),E=a(27),k=a.n(E),j=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(t){var n;Object(l.a)(this,a);return(n=e.call(this,t)).state={center:n.getCenter(n.props.spots),zoom:n.getZoom(n.props.spots,0)},n.handleMarkerClick=n.handleMarkerClick.bind(Object(u.a)(n)),n.handleMapMouseOut=n.handleMapMouseOut.bind(Object(u.a)(n)),n.containerRef=o.a.createRef(),n}return Object(p.a)(a,[{key:"getStatus",value:function(t){return t.currentValue<=t.max&&t.currentValue>=t.min?g.a:k.a}},{key:"getCenter",value:function(t){return 1===t.length?{lat:t[0].location.lat,lng:t[0].location.lon}:t.length>1?{lat:(Math.min.apply(Math,Object(b.a)(t.map((function(t){return t.location.lat}))))+Math.max.apply(Math,Object(b.a)(t.map((function(t){return t.location.lat})))))/2,lng:(Math.min.apply(Math,Object(b.a)(t.map((function(t){return t.location.lon}))))+Math.max.apply(Math,Object(b.a)(t.map((function(t){return t.location.lon})))))/2}:{lat:47.7061299,lng:-117.1419032}}},{key:"getZoom",value:function(t,e){var a=11;if(e>0){var n=Math.min.apply(Math,Object(b.a)(t.map((function(t){return t.location.lon})))),o=Math.max.apply(Math,Object(b.a)(t.map((function(t){return t.location.lon}))))-n;o<0&&(o+=360),(a=Math.floor(Math.log(360*e/o/256)/Math.LN2))===1/0&&(a=15),a>15&&(a=15),console.log(a)}return a}},{key:"handleMarkerClick",value:function(t){this.setState({center:{lat:t.lat,lng:t.lng},zoom:16})}},{key:"handleMapMouseOut",value:function(t){16===this.state.zoom&&this.setState({center:this.defaultCenter,zoom:11})}},{key:"componentDidMount",value:function(){var t=parseInt(this.containerRef.current.offsetWidth);this.setState({zoom:this.getZoom(this.props.spots,t)})}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:this.props.mapVisible?"map-container":"map-container hidden",ref:this.containerRef},o.a.createElement(f.Map,{className:"map",google:this.props.google,zoom:this.state.zoom,initialCenter:{lat:this.state.center.lat,lng:this.state.center.lng},center:{lat:this.state.center.lat,lng:this.state.center.lng},onMouseout:this.handleMapMouseOut},this.props.spots.map((function(e){return o.a.createElement(f.Marker,{key:e.spot_id,position:{lat:e.location.lat,lng:e.location.lon},icon:t.getStatus(e),onClick:function(){return t.handleMarkerClick(e)}})}))))}}]),a}(n.Component),y=Object(f.GoogleApiWrapper)((function(t){return{apiKey:"AIzaSyASDGCu1bl0W6-fct3mb0qi4msLcV8qgMQ",language:t.language}}))(j),O=a(21),C=a.n(O),M=a(28),x=(a(13),a(29)),w=a.n(x),S=a(30),N=a.n(S),V=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("img",{src:this.props.surfable?w.a:N.a,alt:"flow graph"})}}]),a}(n.Component),_=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var t=void 0!==this.props.spot.currentValue?this.props.spot.currentValue:0,e=void 0!==this.props.spot.min?this.props.spot.min:0,a=void 0!==this.props.spot.max?this.props.spot.max:0,n=void 0!==this.props.spot.unit?this.props.spot.unit:"unk";return o.a.createElement("div",{className:"data-card-display"},o.a.createElement(V,{surfable:this.props.spot.surfable}),o.a.createElement("h2",null,this.props.spot.name),o.a.createElement("div",{className:"spot-values"},o.a.createElement("h3",null,t+" "+n),o.a.createElement("h4",null,"range: "+e+" - "+a+" "+n)))}}]),a}(n.Component);_.defaultProps={spot:{}};var D=_,B=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"data-card-desc"},"This is the description!")}}]),a}(n.Component),z=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return(new Date).setMonth(1),o.a.createElement("div",{className:"data-card-history"},o.a.createElement("table",null,o.a.createElement("tr",null,o.a.createElement("th",null),o.a.createElement("th",null,"J"),o.a.createElement("th",null,"F"),o.a.createElement("th",null,"M"),o.a.createElement("th",null,"A"),o.a.createElement("th",null,"M"),o.a.createElement("th",null,"J"),o.a.createElement("th",null,"J"),o.a.createElement("th",null,"A"),o.a.createElement("th",null,"S"),o.a.createElement("th",null,"O"),o.a.createElement("th",null,"N"),o.a.createElement("th",null,"D"))))}}]),a}(n.Component),H=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={activeTab:"describe"},n.handleHeaderButtonClick=n.handleHeaderButtonClick.bind(Object(u.a)(n)),n}return Object(p.a)(a,[{key:"handleHeaderButtonClick",value:function(t){this.setState({activeTab:t}),this.forceUpdate()}},{key:"render",value:function(){var t=this,e=void 0!==this.props.spot.optimumFlowLow_i?this.props.spot.optimumFlowLow_i:0,a=void 0!==this.props.spot.optimumFlowHigh_i?this.props.spot.optimumFlowHigh_i:0,n=void 0!==this.props.unit?this.props.unit:"unk";return o.a.createElement("div",{className:"data-card-detail"},o.a.createElement("div",{className:"detail-header"},o.a.createElement("h4",null,"optimum range: "+e+" - "+a+" "+n),o.a.createElement("div",{className:"tab-bar"},o.a.createElement("button",{className:"describe"===this.state.activeTab?"tab-button active":"tab-button",onClick:function(){return t.handleHeaderButtonClick("describe")}},"Description"),o.a.createElement("button",{className:"history"===this.state.activeTab?"tab-button active":"tab-button",onClick:function(){return t.handleHeaderButtonClick("history")}},"History"))),o.a.createElement("div",{className:"detail-content"},"describe"===this.state.activeTab?o.a.createElement(B,null):o.a.createElement(z,null)))}}]),a}(n.Component),T="/test-data/overview_spot_data.json",A="/test-data/detail_spot_data.json",F=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={details:{}},n.onChangeExpand=n.onChangeExpand.bind(Object(u.a)(n)),n}return Object(p.a)(a,[{key:"fetchData",value:function(){var t=this;fetch("/spokane-surf-report"+A,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(e){console.log(e.find((function(e){return e.spot_id===t.props.spot.spot_id}))),t.setState({details:e.find((function(e){return e.spot_id===t.props.spot.spot_id}))})}))}},{key:"onChangeExpand",value:function(){var t=Object(M.a)(C.a.mark((function t(e){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.target.checked&&this.fetchData();case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return o.a.createElement("li",{className:"data-card"},o.a.createElement("input",{id:"detail-button-"+this.props.spot.spot_id,className:"detail-button",type:"checkbox",onChange:this.onChangeExpand,defaultChecked:this.props.expanded}),o.a.createElement("label",{htmlFor:"detail-button-"+this.props.spot.spot_id,className:"detail-button-view"},o.a.createElement(D,{spot:this.props.spot}),o.a.createElement(H,{spot:this.state.details,unit:this.props.spot.unit})))}}]),a}(n.Component);F.defaultProps={spot:{id:0}};var L=F,J=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"data-card-deck"},o.a.createElement("ul",null,this.props.spots.map((function(e){return o.a.createElement(L,{key:e.spot_id,spot:e,expanded:t.props.expanded})}))))}}]),a}(n.Component),R=(a(59),function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={surfSpots:[],mapVisible:!1,expandedCards:!1},n.toggleMapVisibility=n.toggleMapVisibility.bind(Object(u.a)(n)),n.toggleCardExpand=n.toggleCardExpand.bind(Object(u.a)(n)),n}return Object(p.a)(a,[{key:"toggleMapVisibility",value:function(){this.setState({mapVisible:!this.state.mapVisible})}},{key:"toggleCardExpand",value:function(){this.setState({expandedCards:!this.state.expandedCards})}},{key:"componentDidMount",value:function(){var t=this;fetch("/spokane-surf-report"+T,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(e){var a=t.props.match.params.spot,n=parseInt(t.props.match.params.gage);a&&(e=e.filter((function(t){return t.name.toLowerCase()===a.toLowerCase()})),t.setState({mapVisible:!0,expandedCards:!0})),n&&1===(e=e.filter((function(t){return t.site===n}))).length&&t.setState({mapVisible:!0,expandedCards:!0}),t.setState({surfSpots:e})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(d,{mapVisible:this.state.mapVisible,toggleMapVisibility:this.toggleMapVisibility}),o.a.createElement("div",{className:"content"},o.a.createElement(y,{spots:this.state.surfSpots,mapVisible:this.state.mapVisible}),o.a.createElement(J,{spots:this.state.surfSpots,expanded:this.state.expandedCards})))}}]),a}(n.Component));a(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(s.a,{basename:"".concat("/spokane-surf-report","/")},o.a.createElement(c.a,{exact:!0,path:"/",component:R}),o.a.createElement(c.a,{exact:!0,path:"/spots",component:R}),o.a.createElement(c.a,{exact:!0,path:"/spots/:spot",component:R}),o.a.createElement(c.a,{exact:!0,path:"/gages/",component:R}),o.a.createElement(c.a,{exact:!0,path:"/gages/:gage",component:R})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.6b4e14e1.chunk.js.map