(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){e.exports=a(46)},24:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),c=a.n(s),l=(a(24),a(3)),i=a(4),o=a(6),u=a(5),m=a(7),h=a(2),d=a(9),f=a.n(d),v=a(17),p=a.n(v),g=function(e){var t=e.users,a=e.classes,n=e.handleChange;return r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.navbar},r.a.createElement("i",{className:"fa fa-search"}),r.a.createElement("input",{onChange:n,type:"text",placeholder:"\tSearch by name..."})),t&&t.length>0&&t.map(function(e,t){return r.a.createElement("div",{className:a.listItems,key:t},r.a.createElement("div",{className:a.name},r.a.createElement("p",null,e.firstName+" "+e.lastName)),r.a.createElement("div",{className:a.occupation},r.a.createElement("p",null,"("+e.jobTitle+")")),r.a.createElement("div",{className:a.phone},r.a.createElement("p",null,e.phoneNumber)),r.a.createElement("div",{className:a.img},r.a.createElement("img",{src:e.avatarUrl})))}))},b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={allUsers:[],filteredUsers:[],username:""},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("localhost:3000/people").then(function(e){return e.data}).then(function(t){e.sortingByName(t),e.setState({allUsers:t})})}},{key:"sortingByName",value:function(e){return e.sort(function(e,t){var a=e.firstName,n=t.firstName;return a<n?-1:a>n?1:0})}},{key:"handleChange",value:function(e){var t=this,a=e.target.value;this.setState({username:a}),a.length>=3?f.a.get("/people/by-name/".concat(a)).then(function(e){return e.data}).then(function(e){return t.setState({filteredUsers:e})}):this.setState({filteredUsers:[]})}},{key:"render",value:function(){return r.a.createElement(g,{handleChange:this.handleChange,users:this.state.filteredUsers.length>0&&this.state.filteredUsers||this.state.allUsers,classes:p.a})}}]),t}(n.Component),E=function(e){function t(e){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.85058a5f.chunk.js.map