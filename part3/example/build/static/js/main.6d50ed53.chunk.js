(this.webpackJsonpexamples=this.webpackJsonpexamples||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n(15),o=n.n(r),i=n(6),a=n(3),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]})},j=n(4),l=n.n(j),f="/api/notes",b=function(){return l.a.get(f).then((function(t){return t.data}))},d=function(t){return l.a.post(f,t).then((function(t){return t.data}))},m=function(t,e){return l.a.put("".concat(f,"/").concat(t),e).then((function(t){return t.data}))},p=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})},O=function(t){return Object(u.jsx)("button",{type:t.type,onClick:t.handler,children:t.text})},h=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, Univeristy of Helsinki 2021"})]})},x=function(t){var e=Object(c.useState)([]),n=Object(a.a)(e,2),r=n[0],o=n[1],j=Object(c.useState)(""),l=Object(a.a)(j,2),f=l[0],x=l[1],v=Object(c.useState)(!0),g=Object(a.a)(v,2),S=g[0],y=g[1],k=Object(c.useState)(null),w=Object(a.a)(k,2),N=w[0],C=w[1];Object(c.useEffect)((function(){b().then((function(t){o(t)}))}),[]);var I=S?r:r.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(p,{message:N}),Object(u.jsx)(O,{text:S?"show important":"show all",handler:function(){return y(!S)}}),Object(u.jsx)("ul",{children:I.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=r.find((function(e){return e.id===t})),n=Object(i.a)(Object(i.a)({},e),{},{important:!e.important});m(t,n).then((function(e){o(r.map((function(n){return n.id!==t?n:e})))})).catch((function(n){C("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){C(null)}),5e3),o(r.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:r.length+1,content:f,date:(new Date).toISOString(),important:Math.random()<.5};d(e).then((function(t){o(r.concat(t))}))},children:[Object(u.jsx)("input",{type:"text",value:f,onChange:function(t){x(t.target.value)}}),Object(u.jsx)(O,{type:"submit",text:"save"})]}),Object(u.jsx)(h,{})]})};n(39);o.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.6d50ed53.chunk.js.map