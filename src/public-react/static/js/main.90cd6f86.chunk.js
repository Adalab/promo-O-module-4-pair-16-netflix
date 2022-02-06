(this["webpackJsonpmodulo-3-repaso-final"]=this["webpackJsonpmodulo-3-repaso-final"]||[]).push([[0],{30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(14),i=s.n(a),c=s(8),r=s(3),o=s(2),l=s(0),u=function(e){return Object(l.jsxs)("header",{className:"col2 border--medium",children:[Object(l.jsx)(c.b,{className:"nav__link",to:"/",children:Object(l.jsx)("h1",{className:"title--big",children:"Netflix"})}),Object(l.jsx)("nav",{className:"text-align-right",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(c.b,{className:"nav__link",to:"/",children:"Inicio"})}),function(){if(!1===e.isUserLogged)return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(c.b,{className:"nav__link",to:"/login",children:"Login"})}),Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(c.b,{className:"nav__link",to:"/signup",children:"Registro"})})]})}(),function(){if(!0===e.isUserLogged)return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(c.b,{className:"nav__link",to:"/profile",children:"Mi perfil"})}),Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(c.b,{className:"nav__link",to:"/my-movies",children:"Mis pel\xedculas"})}),Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)("span",{className:"nav__link",onClick:e.logout,children:"Cerrar sesi\xf3n"})})]})}()]})})]})},d=function(e){var t=function(){return e.movies.map((function(e){return Object(l.jsxs)("li",{className:"card",children:[Object(l.jsx)("img",{className:"card__img",src:e.image,alt:"Car\xe1tula de ".concat(e.title)}),Object(l.jsx)("h3",{className:"card__title",children:e.title}),Object(l.jsxs)("p",{className:"card__description",children:["G\xe9nero: ",e.gender]})]},e.id)}))};return e.movies.length?Object(l.jsx)("ul",{className:"cards",children:t()}):Object(l.jsx)("p",{children:"No hay pel\xedculas en este listado"})},j=(s(30),function(e){var t=function(t){e.handleAllMoviesOptions({value:t.target.value,key:t.target.name})};return Object(l.jsxs)("section",{className:"border--medium",children:[Object(l.jsx)("h1",{className:"title--medium",children:"Estas son todas las pel\xedculas de nuestro cat\xe1logo"}),Object(l.jsxs)("form",{className:"movies__filters",children:[Object(l.jsxs)("div",{className:"movies__filters--gender",children:[Object(l.jsx)("label",{htmlFor:"filterGender",children:"Filtrar por g\xe9nero"}),Object(l.jsxs)("select",{className:"form__input-text",id:"filterGender",name:"gender",value:e.allMoviesOptionGender,onChange:t,children:[Object(l.jsx)("option",{value:"",children:"Todas"}),Object(l.jsx)("option",{value:"Drama",children:"Drama"}),Object(l.jsx)("option",{value:"Comedia",children:"Comedia"})]})]}),Object(l.jsxs)("div",{className:"movies__filters--sort",children:[Object(l.jsxs)("label",{children:["Ordernar: A-Z",Object(l.jsx)("input",{className:"movies__radio",type:"radio",name:"sort",value:"asc",checked:"asc"===e.allMoviesOptionSort,onChange:t})]}),Object(l.jsxs)("label",{children:["Z-A",Object(l.jsx)("input",{className:"movies__radio",type:"radio",name:"sort",value:"desc",checked:"desc"===e.allMoviesOptionSort,onChange:t})]})]})]}),Object(l.jsx)(d,{movies:e.movies})]})}),m=function(e){return Object(l.jsxs)("section",{className:"border--medium",children:[Object(l.jsx)("h1",{className:"title--medium",children:"Estas son todas tus pel\xedculas"}),Object(l.jsx)(d,{movies:e.movies})]})},b=function(e){var t=Object(n.useState)(""),s=Object(r.a)(t,2),a=s[0],i=s[1],c=Object(n.useState)(""),o=Object(r.a)(c,2),u=o[0],d=o[1];return Object(l.jsxs)("section",{className:"border--medium",children:[Object(l.jsx)("h1",{children:"Identif\xedcate"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.sendLoginToApi({email:a,password:u})},children:[Object(l.jsx)("label",{className:"form__label display-block",htmlFor:"email",children:"Escribe tu email"}),Object(l.jsx)("input",{className:"form__input-text",type:"text",name:"email",id:"email",value:a,onChange:function(e){i(e.target.value)}}),Object(l.jsx)("label",{className:"form__label display-block",htmlFor:"password",children:"Escribe tu contrase\xf1a"}),Object(l.jsx)("input",{className:"form__input-text",type:"text",name:"password",id:"password",value:u,onChange:function(e){d(e.target.value)}}),Object(l.jsx)("input",{className:"form__btn display-block",type:"submit",value:"Entrar"}),function(){if(""!==e.loginErrorMessage)return Object(l.jsxs)("p",{className:"border--medium border--warning mt-1",children:["Error en el login: ",Object(l.jsx)("span",{className:"text--bold",children:e.loginErrorMessage})]})}()]})]})},p=function(e){var t=Object(n.useState)(e.userName||""),s=Object(r.a)(t,2),a=s[0],i=s[1],c=Object(n.useState)(e.userEmail||""),o=Object(r.a)(c,2),u=o[0],d=o[1],j=Object(n.useState)(e.userPassword||""),m=Object(r.a)(j,2),b=m[0],p=m[1];return Object(l.jsxs)("section",{className:"border--medium",children:[Object(l.jsx)("h1",{children:"Mi perfil"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.sendProfileToApi({name:a,email:u,password:b})},children:[Object(l.jsx)("label",{className:"form__label display-block",htmlFor:"name",children:"Mi nombre"}),Object(l.jsx)("input",{className:"form__input-text",type:"text",name:"name",id:"name",value:a,onChange:function(e){i(e.target.value)}}),Object(l.jsx)("label",{className:"form__label display-block",htmlFor:"email",children:"Mi email"}),Object(l.jsx)("input",{className:"form__input-text",type:"text",name:"email",id:"email",value:u,onChange:function(e){d(e.target.value)}}),Object(l.jsx)("label",{className:"form__label display-block",htmlFor:"password",children:"Mi contrase\xf1a"}),Object(l.jsx)("input",{className:"form__input-text",type:"text",name:"password",id:"password",value:b,onChange:function(e){p(e.target.value)}}),Object(l.jsx)("input",{className:"form__btn display-block",type:"submit",value:"Guardar"})]})]})},f=function(e){var t=Object(n.useState)(""),s=Object(r.a)(t,2),a=s[0],i=s[1],c=Object(n.useState)(""),o=Object(r.a)(c,2),u=o[0],d=o[1];return Object(l.jsxs)("section",{className:"border--medium",children:[Object(l.jsx)("h1",{children:"Reg\xedstrate"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.sendSingUpToApi({email:a,password:u})},children:[Object(l.jsx)("label",{className:"form__label display-block",htmlFor:"email",children:"Escribe tu email"}),Object(l.jsx)("input",{className:"form__input-text",type:"text",name:"email",id:"email",value:a,onChange:function(e){i(e.target.value)}}),Object(l.jsx)("label",{className:"form__label display-block",htmlFor:"password",children:"Escribe tu contrase\xf1a"}),Object(l.jsx)("input",{className:"form__input-text",type:"text",name:"password",id:"password",value:u,onChange:function(e){d(e.target.value)}}),Object(l.jsx)("input",{className:"form__btn display-block",type:"submit",value:"Registrar"}),function(){if(""!==e.signUpErrorMessage)return Object(l.jsxs)("p",{className:"border--medium border--warning mt-1",children:["Error en el registro: ",Object(l.jsx)("span",{className:"text--bold",children:e.signUpErrorMessage})]})}()]})]})},h={getMoviesFromApi:function(e){console.log("Se est\xe1n pidiendo las pel\xedculas de la app");var t="?gender=".concat(e.gender,"&sort=").concat(e.sort);return fetch("http://localhost:4000/movies"+t).then((function(e){return e.json()})).then((function(e){return e}))}},O={sendLoginToApi:function(e){return console.log("Se est\xe1n enviando datos al login:",e),fetch("//localhost:4000/login",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))},sendSingUpToApi:function(e){return console.log("Se est\xe1n enviando datos al signup:",e),fetch("//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json").then((function(e){return e.json()})).then((function(){return{success:!1,errorMessage:"Usuario ya existente"}}))},sendProfileToApi:function(e,t){return console.log("Se est\xe1n enviando datos al profile:",e,t),fetch("//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json")},getProfileFromApi:function(e){return console.log("Se est\xe1n pidiendo datos del profile del usuario:",e),fetch("//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json").then((function(e){return e.json()})).then((function(){return{success:!0,name:"Maricarmen",email:"mari@mail.com",password:"1234567"}}))},getUserMoviesFromApi:function(e){return console.log("Se est\xe1n pidiendo datos de las pel\xedculas de la usuaria:",e),fetch("//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json").then((function(e){return e.json()})).then((function(){return{success:!0,movies:[{id:1,title:"Gambita de dama",gender:"Drama",image:"//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/gambito-de-dama.jpg"}]}}))}},x={redirect:function(e){window.location.replace("#".concat(e))},reload:function(e){window.location.reload()}},g=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),s=t[0],a=t[1],i=Object(n.useState)(""),c=Object(r.a)(i,2),d=c[0],g=c[1],v=Object(n.useState)(""),_=Object(r.a)(v,2),N=_[0],y=_[1],S=Object(n.useState)(""),k=Object(r.a)(S,2),M=k[0],w=k[1],A=Object(n.useState)([]),E=Object(r.a)(A,2),F=E[0],C=E[1],T=Object(n.useState)(""),U=Object(r.a)(T,2),P=U[0],L=U[1],G=Object(n.useState)(""),D=Object(r.a)(G,2),I=D[0],J=D[1],R=Object(n.useState)([]),Z=Object(r.a)(R,2),q=Z[0],z=Z[1],B=Object(n.useState)(""),H=Object(r.a)(B,2),K=H[0],Q=H[1],V=Object(n.useState)("asc"),W=Object(r.a)(V,2),X=W[0],Y=W[1];Object(n.useEffect)((function(){var e={gender:K,sort:X};h.getMoviesFromApi(e).then((function(e){z(e.movies)}))}),[K,X]),Object(n.useEffect)((function(){""!==s&&O.getProfileFromApi(s).then((function(e){g(e.name),y(e.email),w(e.password)}))}),[s]),Object(n.useEffect)((function(){""!==s&&O.getUserMoviesFromApi(s).then((function(e){C(e.movies)}))}),[s]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{isUserLogged:!!s,logout:function(){x.redirect("/"),a(""),g(""),y(""),w(""),C([]),L(""),J(""),z([]),Q(""),Y("asc")}}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(j,{movies:q,allMoviesOptionGender:K,allMoviesOptionSort:X,handleAllMoviesOptions:function(e){"gender"===e.key?Q(e.value):"sort"===e.key&&Y(e.value)}})}),Object(l.jsx)(o.a,{path:"/my-movies",children:Object(l.jsx)(m,{movies:F})}),Object(l.jsx)(o.a,{path:"/login",children:Object(l.jsx)(b,{loginErrorMessage:P,sendLoginToApi:function(e){L(""),O.sendLoginToApi(e).then((function(e){!0===e.success?(a(e.userId),x.redirect("/")):L(e.errorMessage)}))}})}),Object(l.jsx)(o.a,{path:"/signup",children:Object(l.jsx)(f,{signUpErrorMessage:I,sendSingUpToApi:function(e){J(""),O.sendSingUpToApi(e).then((function(e){!0===e.success?(a(e.userId),x.redirect("/")):J(e.errorMessage)}))}})}),Object(l.jsx)(o.a,{path:"/profile",children:Object(l.jsx)(p,{userName:d,userEmail:N,userPassword:M,sendProfileToApi:function(e,t){O.sendProfileToApi(e,t).then((function(){O.getProfileFromApi(e).then((function(e){g(e.name),y(e.email),w(e.password)}))}))}})})]})]})};s(31);i.a.render(Object(l.jsx)(c.a,{children:Object(l.jsx)(g,{})}),document.querySelector("#root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.90cd6f86.chunk.js.map