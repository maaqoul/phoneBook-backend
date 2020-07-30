(this["webpackJsonpthe-phonebook"]=this["webpackJsonpthe-phonebook"]||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=(t(20),t(14)),l=t(2),s=function(e){var n=e.search,t=e.handleOnSearch;return r.a.createElement("div",null,"filter shown with : ",r.a.createElement("input",{type:"text",value:n,onChange:t}))},i=function(e){var n=e.addPerson,t=e.newName,a=e.handleNewName,c=e.newNumber,u=e.handleNewNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:c,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},d=function(e){var n=e.persons,t=e.deletePerson;return n.map((function(e){return r.a.createElement("div",{key:e.id},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e.id,e.name)}},"delete"))}))},m=t(3),f=t.n(m),h="http://localhost:3001/api",b=function(){return f.a.get("".concat(h,"/persons")).then((function(e){return e.data}))},p=function(e){return f.a.post("".concat(h,"/persons"),e).then((function(e){return e.data}))},v=function(e,n){return f.a.put("".concat(h,"/persons/").concat(e),n).then((function(e){return e.data}))},w=function(e){return f.a.delete("".concat(h,"/persons/").concat(e)).then((function(e){return e.data}))},E=function(e){var n=e.type,t=e.message;return t?r.a.createElement("div",{className:n},t):null},g=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(null),m=Object(l.a)(u,2),f=m[0],h=m[1],g=Object(a.useState)(""),O=Object(l.a)(g,2),y=O[0],N=O[1],j=Object(a.useState)(""),S=Object(l.a)(j,2),k=S[0],C=S[1],P=Object(a.useState)(""),L=Object(l.a)(P,2),x=L[0],J=L[1],B=Object(a.useState)({message:null,type:null}),D=Object(l.a)(B,2),I=D[0],M=D[1],T=function(e,n){M({message:n,type:e}),setTimeout((function(){M({message:null,type:null})}),3e3)};return Object(a.useEffect)((function(){b().then((function(e){return function(e){e&&c(e)}(e)})).catch((function(e){T("an error has been occurred please try again later!","error")}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{type:I.type,message:I.message}),r.a.createElement(s,{search:x,handleOnSearch:function(e){var n=e.target;if(n.value){J(n.value);var a=t.filter((function(e){return e.name.toLowerCase().includes(n.value.toLowerCase())}));h(a)}else J(""),h(null)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(i,{addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name.toLowerCase()===y.toLowerCase()}));if(n){if(!window.confirm("".concat(y," is already added to phone book, replace the old number with new one!")))return;n=Object(o.a)({},n,{number:k}),v(n.id,n).then((function(e){c(t.map((function(t){return t.id!==n.id?t:e}))),T("".concat(e.number," updated with success"),"success")})).catch((function(e){T("an error has been occurred please try again later!","error")}))}else{p({name:y,number:k}).then((function(e){c(t.concat(e)),N(""),C(""),T("".concat(e.name," added with success"),"success")})).catch((function(e){T("an error has been occurred please try again later!","error")}))}},newName:y,newNumber:k,handleNewName:function(e){var n=e.target;N(n.value)},handleNewNumber:function(e){var n=e.target;C(n.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{persons:f||t,deletePerson:function(e,n){window.confirm("delete ".concat(n," ?"))&&w(e).then((function(){c(t.filter((function(n){return n.id!==e}))),T("".concat(n," added with success"),"success")})).catch((function(e){T("an error has been occurred please try again later!","error")}))}}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b4fae891.chunk.js.map