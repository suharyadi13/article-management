(function(e){function t(t){for(var n,r,c=t[0],l=t[1],i=t[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);g&&g(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o={app:0},s=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-0c4c0e4a":"ba9cc649","chunk-30a4f47f":"5a988fba","chunk-727caf5c":"9324c7ab"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-0c4c0e4a":1,"chunk-30a4f47f":1,"chunk-727caf5c":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-0c4c0e4a":"093e51ec","chunk-30a4f47f":"7e78e6b4","chunk-727caf5c":"093e51ec"}[e]+".css",o=l.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var i=s[c],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===n||u===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],u=i.getAttribute("data-href");if(u===n||u===o)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],g.parentNode.removeChild(g),a(s)},g.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(g)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=s);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var d=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(g);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[e]=void 0}};var g=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var g=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"000c":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r=(a("b0c0"),{id:"app"}),o={class:"navbar navbar-expand-md navbar-light bg-white fixed-top "},s=Object(n["g"])("img",{src:"/logo.png",class:"img img-fluid",style:{width:"134px",height:"auto"}},null,-1),c=Object(n["f"])(" Assessment"),l=Object(n["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["g"])("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarCollapse"},u={class:"navbar-nav mr-auto text-center"},d={class:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},g=Object(n["f"])("Home"),b={class:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},m=Object(n["f"])("Article"),p={key:0,class:"nav-item"},f=Object(n["f"])("Create"),h={key:0,class:"navbar-nav ml-auto text-center"},O={class:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},j={key:1,class:"navbar-nav ml-auto text-center"},v={class:"nav-item"},y={role:"main"},w={class:"container home"},k=Object(n["g"])("footer",{class:"fixed-bottom"},[Object(n["g"])("div",{class:"row"},[Object(n["g"])("div",{class:"col-md-12"},"Copyright @copy Sahaware Assessment 2021")])],-1),_={id:"ModalLogin",class:"modal fade mb-sm-0",role:"dialog"},S={class:"modal-dialog modal-md "},x={class:"modal-content p-md-5"},M={class:"modal-header d-flex flex-column"},E=Object(n["g"])("button",{type:"button",class:"close d-block d-sm-none","data-dismiss":"modal","aria-label":"Close"},[Object(n["g"])("span",{"aria-hidden":"true"},"×")],-1),C=Object(n["g"])("h4",{class:"modal-title"},"Login",-1),P=Object(n["f"])("Don't have an account? "),A={class:"modal-body"},N={class:"form-group"},I=Object(n["g"])("label",{for:"email"},"Username",-1),L={class:"form-group"},q=Object(n["g"])("label",{for:"password"},"Password",-1),F={class:"form-group"},T={class:"spinner-border spinner-border-sm"},D=Object(n["g"])("span",null,"Log in",-1),U={class:"form-group"},$={key:0,class:"alert alert-danger",role:"alert"},J={id:"ModalSignup",class:"modal fade",role:"dialog"},B={class:"modal-dialog modal-md "},Y={class:"modal-content p-md-5"},H={class:"modal-header d-flex flex-column"},K=Object(n["g"])("button",{type:"button",class:"close d-block d-sm-none","data-dismiss":"modal","aria-label":"Close"},[Object(n["g"])("span",{"aria-hidden":"true"},"×")],-1),z=Object(n["g"])("h4",{class:"modal-title"},"Create Account",-1),G=Object(n["f"])("Have an account? "),Q={class:"modal-body"},R={class:"form-group"},V=Object(n["g"])("label",{for:"name"},"Name",-1),W={class:"form-group"},X=Object(n["g"])("label",{for:"email"},"Email",-1),Z={class:"form-group"},ee=Object(n["g"])("label",{for:"password"},"Password",-1),te={class:"form-group"},ae=Object(n["g"])("label",{for:"phone"},"Phone",-1),ne={class:"form-group"},re={class:"spinner-border spinner-border-sm"},oe=Object(n["g"])("span",null,"Create Account",-1),se={class:"form-group"},ce={key:0,class:"alert alert-danger",role:"alert"},le={key:1,class:"alert alert-success",role:"alert"};function ie(e,t,a,ie,ue,de){var ge=Object(n["A"])("router-link"),be=Object(n["A"])("router-view"),me=Object(n["A"])("Field"),pe=Object(n["A"])("ErrorMessage"),fe=Object(n["A"])("Form");return Object(n["t"])(),Object(n["d"])("div",r,[Object(n["g"])("nav",o,[Object(n["g"])(ge,{to:"/",class:"navbar-brand"},{default:Object(n["N"])((function(){return[s,c]})),_:1}),l,Object(n["g"])("div",i,[Object(n["g"])("ul",u,[Object(n["g"])("li",d,[Object(n["g"])(ge,{to:"/home",class:"nav-link"},{default:Object(n["N"])((function(){return[g]})),_:1})]),Object(n["g"])("li",b,[Object(n["g"])(ge,{to:"/article",class:"nav-link"},{default:Object(n["N"])((function(){return[m]})),_:1})]),de.currentUser?(Object(n["t"])(),Object(n["d"])("li",p,[Object(n["g"])(ge,{to:"/add",class:"nav-link"},{default:Object(n["N"])((function(){return[f]})),_:1})])):Object(n["e"])("",!0)]),de.currentUser?Object(n["e"])("",!0):(Object(n["t"])(),Object(n["d"])("div",h,[Object(n["g"])("li",O,[Object(n["g"])("a",{class:"nav-link login mr-auto",onClick:t[1]||(t[1]=function(e){return de.showModal()})}," Login ")])])),de.currentUser?(Object(n["t"])(),Object(n["d"])("div",j,[Object(n["g"])("li",v,[Object(n["g"])("button",{class:"btn btn-outline-success",onClick:t[2]||(t[2]=function(){return de.logOut&&de.logOut.apply(de,arguments)})}," Log out "+Object(n["D"])(de.currentUser.name),1)])])):Object(n["e"])("",!0)])]),Object(n["g"])("main",y,[Object(n["g"])("div",w,[Object(n["g"])(be)]),k]),Object(n["g"])("div",_,[Object(n["g"])("div",S,[Object(n["g"])("div",x,[Object(n["g"])("div",M,[E,C,Object(n["g"])("p",null,[P,Object(n["g"])("a",{onClick:t[3]||(t[3]=function(){return de.sign_up&&de.sign_up.apply(de,arguments)}),class:"text-danger"},"Create Account")])]),Object(n["g"])("div",A,[Object(n["g"])(fe,{onSubmit:de.handleLogin,"validation-schema":ue.schema},{default:Object(n["N"])((function(){return[Object(n["g"])("div",N,[I,Object(n["g"])(me,{name:"email",type:"text",placeholder:"Entry Your Email",class:"form-control"}),Object(n["g"])(pe,{name:"email",class:"error-feedback"})]),Object(n["g"])("div",L,[q,Object(n["g"])(me,{name:"password",type:"password",placeholder:"Entry Your Password",class:"form-control"}),Object(n["g"])(pe,{name:"password",class:"error-feedback"})]),Object(n["g"])("div",F,[Object(n["g"])("button",{class:"btn btn-danger btn-custom",disabled:ue.loading},[Object(n["O"])(Object(n["g"])("span",T,null,512),[[n["J"],ue.loading]]),D],8,["disabled"])]),Object(n["g"])("div",U,[ue.message?(Object(n["t"])(),Object(n["d"])("div",$,Object(n["D"])(ue.message),1)):Object(n["e"])("",!0)])]})),_:1},8,["onSubmit","validation-schema"])])])])]),Object(n["g"])("div",J,[Object(n["g"])("div",B,[Object(n["g"])("div",Y,[Object(n["g"])("div",H,[K,z,Object(n["g"])("p",null,[G,Object(n["g"])("a",{onClick:t[4]||(t[4]=function(){return de.sign_in&&de.sign_in.apply(de,arguments)}),class:"text-danger"},"Login")])]),Object(n["g"])("div",Q,[Object(n["g"])(fe,{onSubmit:de.handleSignup,"validation-schema":ue.schemaSignup},{default:Object(n["N"])((function(){return[Object(n["g"])("div",R,[V,Object(n["g"])(me,{name:"name",type:"text",placeholder:"Entry Your Name",class:"form-control"}),Object(n["g"])(pe,{name:"name",class:"error-feedback"})]),Object(n["g"])("div",W,[X,Object(n["g"])(me,{name:"email",type:"text",placeholder:"Entry Your Email",class:"form-control"}),Object(n["g"])(pe,{name:"email",class:"error-feedback"})]),Object(n["g"])("div",Z,[ee,Object(n["g"])(me,{name:"password",type:"password",placeholder:"Entry Your Password",class:"form-control"}),Object(n["g"])(pe,{name:"password",class:"error-feedback"})]),Object(n["g"])("div",te,[ae,Object(n["g"])(me,{name:"phone",type:"text",class:"form-control"})]),Object(n["g"])("div",ne,[Object(n["g"])("button",{class:"btn btn-danger btn-custom",disabled:ue.loading},[Object(n["O"])(Object(n["g"])("span",re,null,512),[[n["J"],ue.loading]]),oe],8,["disabled"])]),Object(n["g"])("div",se,[ue.register_message?(Object(n["t"])(),Object(n["d"])("div",ce,Object(n["D"])(ue.register_message),1)):Object(n["e"])("",!0),ue.register_message_success?(Object(n["t"])(),Object(n["d"])("div",le,Object(n["D"])(ue.register_message_success),1)):Object(n["e"])("",!0)])]})),_:1},8,["onSubmit","validation-schema"])])])])])])}a("d3b7"),a("25f0");var ue=a("7bb1"),de=a("506a"),ge=a("4989"),be={name:"app",components:{Form:ue["c"],Field:ue["b"],ErrorMessage:ue["a"]},data:function(){var e=de["a"]().shape({email:de["b"]().required("Email is required!"),password:de["b"]().required("Password is required!")}),t=de["a"]().shape({name:de["b"]().required("Name is required!"),email:de["b"]().required("Email is required!"),password:de["b"]().required("Password is required!")});return{loading:!1,message:"",register_message:"",register_message_success:"",schema:e,schemaSignup:t,loginModal:null,signupModal:null}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn},currentUser:function(){return this.$store.state.auth.user}},methods:{handleLogin:function(e){var t=this;this.loading=!0,this.$store.dispatch("auth/login",e).then((function(){t.loginModal.hide(),t.$router.push("/add")}),(function(e){t.loading=!1,t.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString()}))},handleSignup:function(e){var t=this;this.loading=!0,this.$store.dispatch("auth/register",e).then((function(e){t.loading=!1,t.register_message="",t.register_message_success=e.message}),(function(e){t.loading=!1,t.register_message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString()}))},logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/home")},showModal:function(){this.loginModal=new ge["Modal"](document.getElementById("ModalLogin"),{}),this.signupModal=new ge["Modal"](document.getElementById("ModalSignup"),{}),this.loginModal.show()},closeModal:function(e){e.hide()},sign_in:function(){this.loginModal.show(),this.signupModal.hide()},sign_up:function(){this.signupModal.show(),this.loginModal.hide()}}};a("b172");be.render=ie;var me=be,pe=(a("ab8b"),a("0deb"),a("3ca3"),a("ddb0"),a("6c02")),fe=[{path:"/",alias:"/home",name:"home",component:function(){return a.e("chunk-727caf5c").then(a.bind(null,"57da"))}},{path:"/",alias:"/article",name:"article",component:function(){return a.e("chunk-0c4c0e4a").then(a.bind(null,"4771"))}},{path:"/add",name:"add",component:function(){return a.e("chunk-30a4f47f").then(a.bind(null,"c830"))}}],he=Object(pe["a"])({history:Object(pe["b"])(),routes:fe}),Oe=he,je=a("5502"),ve=a("d4ec"),ye=a("bee2"),we=(a("e9c4"),a("bc3a")),ke=a.n(we),_e="http://localhost:8080/api/auth/",Se=function(){function e(){Object(ve["a"])(this,e)}return Object(ye["a"])(e,[{key:"login",value:function(e){return ke.a.post(_e+"login",{email:e.email,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return ke.a.post(_e+"register",{name:e.name,email:e.email,password:e.password,phone:e.phone})}}]),e}(),xe=new Se,Me=JSON.parse(localStorage.getItem("user")),Ee=Me?{status:{loggedIn:!0},user:Me}:{status:{loggedIn:!1},user:null},Ce={namespaced:!0,state:Ee,actions:{login:function(e,t){var a=e.commit;return xe.login(t).then((function(e){return a("loginSuccess",e),Promise.resolve(e)}),(function(e){return a("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;xe.logout(),t("logout")},register:function(e,t){var a=e.commit;return xe.register(t).then((function(e){return a("registerSuccess"),Promise.resolve(e.data)}),(function(e){return a("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}},Pe=Object(je["a"])({modules:{auth:Ce}}),Ae=Pe;Object(n["c"])(me).use(Oe).use(Ae).mount("#app")},b172:function(e,t,a){"use strict";a("000c")}});
//# sourceMappingURL=app.0eba7692.js.map