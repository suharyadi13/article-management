(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30a4f47f"],{"057f":function(e,t,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return o(e)}catch(t){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?c(e):o(r(e))}},"0e44":function(e,t,n){"use strict";n("5fb5")},"5fb5":function(e,t,n){},"65f0":function(e,t,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),a=i("species");e.exports=function(e,t){var n;return o(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"746f":function(e,t,n){var r=n("428f"),o=n("5135"),i=n("e538"),a=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});o(t,e)||a(t,e,{value:i.f(e)})}},a4d3:function(e,t,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),a=n("c430"),c=n("83ab"),l=n("4930"),u=n("fdbf"),s=n("d039"),d=n("5135"),f=n("e8b5"),b=n("861d"),g=n("825a"),p=n("7b0b"),v=n("fc6a"),y=n("c04e"),h=n("5c6c"),O=n("7c73"),m=n("df75"),j=n("241c"),k=n("057f"),S=n("7418"),w=n("06cf"),C=n("9bf2"),x=n("d1e7"),D=n("9112"),P=n("6eeb"),A=n("5692"),V=n("f772"),L=n("d012"),q=n("90e3"),_=n("b622"),E=n("e538"),U=n("746f"),M=n("d44e"),B=n("69f3"),I=n("b727").forEach,N=V("hidden"),F="Symbol",T="prototype",R=_("toPrimitive"),z=B.set,K=B.getterFor(F),$=Object[T],J=o.Symbol,H=i("JSON","stringify"),G=w.f,Q=C.f,W=k.f,Y=x.f,X=A("symbols"),Z=A("op-symbols"),ee=A("string-to-symbol-registry"),te=A("symbol-to-string-registry"),ne=A("wks"),re=o.QObject,oe=!re||!re[T]||!re[T].findChild,ie=c&&s((function(){return 7!=O(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=G($,t);r&&delete $[t],Q(e,t,n),r&&e!==$&&Q($,t,r)}:Q,ae=function(e,t){var n=X[e]=O(J[T]);return z(n,{type:F,tag:e,description:t}),c||(n.description=t),n},ce=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof J},le=function(e,t,n){e===$&&le(Z,t,n),g(e);var r=y(t,!0);return g(n),d(X,r)?(n.enumerable?(d(e,N)&&e[N][r]&&(e[N][r]=!1),n=O(n,{enumerable:h(0,!1)})):(d(e,N)||Q(e,N,h(1,{})),e[N][r]=!0),ie(e,r,n)):Q(e,r,n)},ue=function(e,t){g(e);var n=v(t),r=m(n).concat(ge(n));return I(r,(function(t){c&&!de.call(n,t)||le(e,t,n[t])})),e},se=function(e,t){return void 0===t?O(e):ue(O(e),t)},de=function(e){var t=y(e,!0),n=Y.call(this,t);return!(this===$&&d(X,t)&&!d(Z,t))&&(!(n||!d(this,t)||!d(X,t)||d(this,N)&&this[N][t])||n)},fe=function(e,t){var n=v(e),r=y(t,!0);if(n!==$||!d(X,r)||d(Z,r)){var o=G(n,r);return!o||!d(X,r)||d(n,N)&&n[N][r]||(o.enumerable=!0),o}},be=function(e){var t=W(v(e)),n=[];return I(t,(function(e){d(X,e)||d(L,e)||n.push(e)})),n},ge=function(e){var t=e===$,n=W(t?Z:v(e)),r=[];return I(n,(function(e){!d(X,e)||t&&!d($,e)||r.push(X[e])})),r};if(l||(J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=q(e),n=function(e){this===$&&n.call(Z,e),d(this,N)&&d(this[N],t)&&(this[N][t]=!1),ie(this,t,h(1,e))};return c&&oe&&ie($,t,{configurable:!0,set:n}),ae(t,e)},P(J[T],"toString",(function(){return K(this).tag})),P(J,"withoutSetter",(function(e){return ae(q(e),e)})),x.f=de,C.f=le,w.f=fe,j.f=k.f=be,S.f=ge,E.f=function(e){return ae(_(e),e)},c&&(Q(J[T],"description",{configurable:!0,get:function(){return K(this).description}}),a||P($,"propertyIsEnumerable",de,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:J}),I(m(ne),(function(e){U(e)})),r({target:F,stat:!0,forced:!l},{for:function(e){var t=String(e);if(d(ee,t))return ee[t];var n=J(t);return ee[t]=n,te[n]=t,n},keyFor:function(e){if(!ce(e))throw TypeError(e+" is not a symbol");if(d(te,e))return te[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!c},{create:se,defineProperty:le,defineProperties:ue,getOwnPropertyDescriptor:fe}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:be,getOwnPropertySymbols:ge}),r({target:"Object",stat:!0,forced:s((function(){S.f(1)}))},{getOwnPropertySymbols:function(e){return S.f(p(e))}}),H){var pe=!l||s((function(){var e=J();return"[null]"!=H([e])||"{}"!=H({a:e})||"{}"!=H(Object(e))}));r({target:"JSON",stat:!0,forced:pe},{stringify:function(e,t,n){var r,o=[e],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=t,(b(t)||void 0!==e)&&!ce(e))return f(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!ce(t))return t}),o[1]=t,H.apply(null,o)}})}J[T][R]||D(J[T],R,J[T].valueOf),M(J,F),L[N]=!0},b727:function(e,t,n){var r=n("0366"),o=n("44ad"),i=n("7b0b"),a=n("50c4"),c=n("65f0"),l=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,s=4==e,d=6==e,f=7==e,b=5==e||d;return function(g,p,v,y){for(var h,O,m=i(g),j=o(m),k=r(p,v,3),S=a(j.length),w=0,C=y||c,x=t?C(g,S):n||f?C(g,0):void 0;S>w;w++)if((b||w in j)&&(h=j[w],O=k(h,w,m),e))if(t)x[w]=O;else if(O)switch(e){case 3:return!0;case 5:return h;case 6:return w;case 2:l.call(x,h)}else switch(e){case 4:return!1;case 7:l.call(x,h)}return d?-1:u||s?s:x}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},c1c3:function(e,t,n){"use strict";n("ceae")},c427:function(e,t,n){"use strict";var r=n("bc3a"),o=n.n(r);t["a"]=o.a.create({baseURL:"https://suharyadi-assessment.herokuapp.com/",headers:{"Content-type":"application/json"}})},c4a9:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var r=function(){return"undefined"!==typeof window?window:e},o=function(){var e=r();return e&&e.tinymce?e.tinymce:null}}).call(this,n("c8ba"))},c830:function(e,t,n){"use strict";n.r(t);n("a4d3"),n("e01a");var r=n("7a23"),o={class:"container"},i={key:0},a={class:"row"},c={class:"col-12"},l={key:0,class:"alert alert-danger",role:"alert"},u={class:"col-md-6"},s=Object(r["g"])("h3",null,"Create New Article",-1),d={class:"form-group"},f=Object(r["g"])("label",{for:"title"},"Title",-1),b={class:"form-group"},g=Object(r["g"])("label",{for:"description"},"Description",-1),p={class:"col-md-6 publication-detail"},v=Object(r["g"])("h3",null,"Publication Detail",-1),y={class:"form-group"},h=Object(r["g"])("label",{for:"short_description"},"Short Description",-1),O={class:"form-group"},m=Object(r["g"])("label",{for:"image"},"Thumbnail",-1),j={class:"form-group"},k=Object(r["g"])("label",{for:"category",class:"control-label"},"Category",-1),S=Object(r["g"])("option",{selected:"",disabled:"",value:""},"Please select one",-1),w={class:"form-group"},C=Object(r["g"])("label",{for:"is_visible"},"Published ",-1),x={class:"float-right"},D={key:1},P=Object(r["g"])("h4",null,"You submitted successfully!",-1);function A(e,t,n,A,V,L){var q=Object(r["A"])("editor"),_=Object(r["A"])("Toggle");return Object(r["t"])(),Object(r["d"])("div",o,[V.submitted?(Object(r["t"])(),Object(r["d"])("div",D,[P,Object(r["g"])("button",{class:"btn btn-success",onClick:t[8]||(t[8]=function(){return L.newArticle&&L.newArticle.apply(L,arguments)})},"Add")])):(Object(r["t"])(),Object(r["d"])("div",i,[Object(r["g"])("div",a,[Object(r["g"])("div",c,[V.message?(Object(r["t"])(),Object(r["d"])("div",l,Object(r["D"])(V.message),1)):Object(r["e"])("",!0)]),Object(r["g"])("div",u,[s,Object(r["g"])("div",d,[f,Object(r["O"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"title",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return V.article.title=e}),name:"title"},null,512),[[r["I"],V.article.title]])]),Object(r["g"])("div",b,[g,Object(r["g"])(q,{"api-key":"kmdqjt7nkqjx0jkoi9qps4wztj5n8ufjzavtlmaxp4xpo5eu",class:"form-control",id:"description",required:"",modelValue:V.article.description,"onUpdate:modelValue":t[2]||(t[2]=function(e){return V.article.description=e})},null,8,["modelValue"])])]),Object(r["g"])("div",p,[v,Object(r["g"])("div",y,[h,Object(r["O"])(Object(r["g"])("textarea",{class:"form-control",id:"short_description","onUpdate:modelValue":t[3]||(t[3]=function(e){return V.article.short_description=e}),name:"short_description"},null,512),[[r["I"],V.article.short_description]])]),Object(r["g"])("div",O,[m,Object(r["g"])("input",{type:"file",ref:"file",class:"form-control",onChange:t[4]||(t[4]=function(){return L.uploadImage&&L.uploadImage.apply(L,arguments)}),id:"image",name:"image"},null,544)]),Object(r["g"])("div",j,[k,Object(r["O"])(Object(r["g"])("select",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return V.article.category_id=e}),name:"category_id",id:"category_id",class:"form-control",required:""},[S,(Object(r["t"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(V.articelCategory,(function(e,t){return Object(r["t"])(),Object(r["d"])("option",{key:t,value:e.id},Object(r["D"])(e.title),9,["value"])})),128))],512),[[r["H"],V.article.category_id]])]),Object(r["g"])("div",w,[C,Object(r["g"])("div",x,[Object(r["g"])(_,{modelValue:V.article.is_visible,"onUpdate:modelValue":t[6]||(t[6]=function(e){return V.article.is_visible=e})},null,8,["modelValue"])])]),Object(r["g"])("button",{class:"btn btn-danger btn-custom",onClick:t[7]||(t[7]=function(){return L.saveArticle&&L.saveArticle.apply(L,arguments)})},"Publish")])])]))])}n("d3b7"),n("25f0");var V=n("cd2a"),L=n("d4ec"),q=n("bee2"),_=n("c427"),E=function(){function e(){Object(L["a"])(this,e)}return Object(q["a"])(e,[{key:"getAll",value:function(){return _["a"].get("/article-category")}},{key:"get",value:function(e){return _["a"].get("/article-category/".concat(e))}},{key:"create",value:function(e){return _["a"].post("/article-category",e)}},{key:"update",value:function(e,t){return _["a"].put("/article-category/".concat(e),t)}},{key:"delete",value:function(e){return _["a"].delete("/article-category/".concat(e))}},{key:"deleteAll",value:function(){return _["a"].delete("/article-category")}},{key:"findByTitle",value:function(e){return _["a"].get("/article-category?title=".concat(e))}}]),e}(),U=new E;function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t,n){var o=Object(r["F"])(e),i=o.disabled,a=n.checked,c=Object(r["b"])((function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){B(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label"},o.classes.value)}));return{classList:Object(r["b"])((function(){return{container:c.value.container,toggle:[c.value.toggle,i.value?a.value?c.value.toggleOnDisabled:c.value.toggleOffDisabled:a.value?c.value.toggleOn:c.value.toggleOff],handle:[c.value.handle,i.value?a.value?c.value.handleOnDisabled:c.value.handleOffDisabled:a.value?c.value.handleOn:c.value.handleOff],label:c.value.label}}))}}var N={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},modelValue:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1}},setup(e,t){const n=function(e,t,n){var o=Object(r["F"])(e),i=o.value,a=o.modelValue,c=o.falseValue,l=o.trueValue,u=o.disabled,s=void 0!==t.expose?a:i,d=Object(r["b"])((function(){return s.value===l.value})),f=function(e){t.emit("input",e),t.emit("update:modelValue",e),t.emit("change",e)},b=function(){f(l.value)},g=function(){f(c.value)};return-1!==[null,void 0,!1,0,"0","off"].indexOf(s.value)&&-1===[c.value,l.value].indexOf(s.value)&&g(),-1!==[!0,1,"1","on"].indexOf(s.value)&&-1===[c.value,l.value].indexOf(s.value)&&b(),{externalValue:s,checked:d,update:f,check:b,uncheck:g,handleInput:function(e){f(e.target.checked?l.value:c.value)},handleClick:function(){u.value||(d.value?g():b())}}}(e,t),o=function(e,t,n){var o=Object(r["F"])(e),i=o.trueValue,a=o.falseValue,c=o.onLabel,l=o.offLabel,u=n.checked,s=n.update;return{label:Object(r["b"])((function(){var e=u.value?c.value:l.value;return e||(e="&nbsp;"),e})),toggle:function(){s(u.value?a.value:i.value)},on:function(){s(i.value)},off:function(){s(a.value)}}}(e,0,{checked:n.checked,update:n.update}),i=I(e,0,{checked:n.checked}),a=function(e,t,n){var o=Object(r["F"])(e).disabled,i=n.check,a=n.uncheck,c=n.checked;return{handleSpace:function(){o.value||(c.value?a():i())}}}(e,0,{check:n.check,uncheck:n.uncheck,checked:n.checked});return{...n,...i,...o,...a}},render:function(e,t,n,o,i,a){return Object(r["t"])(),Object(r["d"])("div",{class:e.classList.container,tabindex:n.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":n.describedby,"aria-labelledby":n.labelledby,role:"switch",onKeyup:t[2]||(t[2]=Object(r["P"])((...t)=>e.handleSpace&&e.handleSpace(...t),["space"]))},[Object(r["O"])(Object(r["g"])("input",{type:"checkbox",id:n.id,name:n.name,value:n.trueValue,checked:e.checked,disabled:n.disabled},null,8,["id","name","value","checked","disabled"]),[[r["J"],!1]]),Object(r["g"])("div",{class:e.classList.toggle,onClick:t[1]||(t[1]=(...t)=>e.handleClick&&e.handleClick(...t))},[Object(r["g"])("span",{class:e.classList.handle},null,2),Object(r["z"])(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[Object(r["g"])("span",{class:e.classList.label,innerHTML:e.label},null,10,["innerHTML"])]),n.required?(Object(r["t"])(),Object(r["d"])("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,["checked"])):Object(r["e"])("v-if",!0)],2)],42,["tabindex","aria-checked","aria-describedby","aria-labelledby"])},__file:"src/Toggle.vue"},F=N,T=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],R=function(e){return-1!==T.map((function(e){return e.toLowerCase()})).indexOf(e.toLowerCase())},z=function(e,t,n){Object.keys(t).filter(R).forEach((function(r){var o=t[r];"function"===typeof o&&("onInit"===r?o(e,n):n.on(r.substring(2),(function(e){return o(e,n)})))}))},K=function(e,t,n,o){var i=e.modelEvents?e.modelEvents:null,a=Array.isArray(i)?i.join(" "):i;Object(r["L"])(o,(function(t,r){n&&"string"===typeof t&&t!==r&&t!==n.getContent({format:e.outputFormat})&&n.setContent(t)})),n.on(a||"change input undo redo",(function(){t.emit("update:modelValue",n.getContent({format:e.outputFormat}))}))},$=function(e,t,n,r,o,i){r.setContent(i()),n.attrs["onUpdate:modelValue"]&&K(t,n,r,o),z(e,n.attrs,r)},J=0,H=function(e){var t=Date.now(),n=Math.floor(1e9*Math.random());return J++,e+"_"+n+J+String(t)},G=function(e){return null!==e&&"textarea"===e.tagName.toLowerCase()},Q=function(e){return"undefined"===typeof e||""===e?[]:Array.isArray(e)?e:e.split(" ")},W=function(e,t){return Q(e).concat(Q(t))},Y=function(e){return null===e||void 0===e},X=function(){return{listeners:[],scriptId:H("tiny-script"),scriptLoaded:!1}},Z=function(){var e=X(),t=function(e,t,n,r){var o=t.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=e,o.src=n;var i=function(){o.removeEventListener("load",i),r()};o.addEventListener("load",i),t.head&&t.head.appendChild(o)},n=function(n,r,o){e.scriptLoaded?o():(e.listeners.push(o),n.getElementById(e.scriptId)||t(e.scriptId,n,r,(function(){e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0})))},r=function(){e=X()};return{load:n,reinitialize:r}},ee=Z(),te=n("c4a9"),ne={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return"html"===e||"text"===e}}},re=function(){return re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},re.apply(this,arguments)},oe=function(e,t,n,r){return e(r||"div",{id:t,ref:n})},ie=function(e,t,n){return e("textarea",{id:t,visibility:"hidden",ref:n})},ae=Object(r["h"])({props:ne,setup:function(e,t){var n=e.init?re({},e.init):{},o=Object(r["F"])(e),i=o.disabled,a=o.modelValue,c=o.tagName,l=Object(r["x"])(null),u=null,s=e.id||H("tiny-vue"),d=e.init&&e.init.inline||e.inline,f=!!t.attrs["onUpdate:modelValue"],b=!0,g=e.initialValue?e.initialValue:"",p="",v=function(e){return f?function(){return(null===a||void 0===a?void 0:a.value)?a.value:""}:function(){return e?g:p}},y=function(){var r=v(b),o=re(re({},n),{readonly:e.disabled,selector:"#"+s,plugins:W(n.plugins,e.plugins),toolbar:e.toolbar||n.toolbar,inline:d,setup:function(o){u=o,o.on("init",(function(n){return $(n,e,t,o,a,r)})),"function"===typeof n.setup&&n.setup(o)}});G(l.value)&&(l.value.style.visibility=""),Object(te["a"])().init(o),b=!1};Object(r["L"])(i,(function(e){var t;null!==u&&("function"===typeof(null===(t=u.mode)||void 0===t?void 0:t.set)?u.mode.set(e?"readonly":"design"):u.setMode(e?"readonly":"design"))})),Object(r["L"])(c,(function(e){var t;f||(p=u.getContent()),null===(t=Object(te["a"])())||void 0===t||t.remove(u),Object(r["n"])((function(){return y()}))})),Object(r["r"])((function(){if(null!==Object(te["a"])())y();else if(l.value&&l.value.ownerDocument){var t=e.cloudChannel?e.cloudChannel:"5",n=e.apiKey?e.apiKey:"no-api-key",r=Y(e.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+t+"/tinymce.min.js":e.tinymceScriptSrc;ee.load(l.value.ownerDocument,r,y)}})),Object(r["p"])((function(){null!==Object(te["a"])()&&Object(te["a"])().remove(u)})),d||(Object(r["o"])((function(){b||y()})),Object(r["q"])((function(){var e;f||(p=u.getContent()),null===(e=Object(te["a"])())||void 0===e||e.remove(u)})));var h=function(e){var t;p=u.getContent(),null===(t=Object(te["a"])())||void 0===t||t.remove(u),n=re(re({},n),e),Object(r["n"])((function(){return y()}))};return t.expose({rerender:h}),function(){return d?oe(r["j"],s,l,e.tagName):ie(r["j"],s,l)}}}),ce=ae,le={name:"add-article",components:{Toggle:F,editor:ce},data:function(){return{articelCategory:[],selectedCategory:"",message:null,file:"",article:{id:null,title:"",description:"",short_description:"",image:"",category_id:"",is_visible:!0},submitted:!1}},methods:{saveArticle:function(){var e=this,t={title:this.article.title,description:this.article.description,short_description:this.article.short_description,image:this.file,category_id:this.article.category_id},n=new FormData;for(var r in t)n.append(r,t[r]);console.log(n),V["a"].create(n).then((function(t){e.article.id=t.data.id,e.submitted=!0,e.showMessage("")})).catch((function(t){var n=t.response&&t.response.data&&t.response.data.message||t.message||t.toString();console.log(t),e.showMessage(n)}))},uploadImage:function(){this.file=this.$refs.file.files[0]},newArticle:function(){this.submitted=!1,this.article={}},getCategory:function(){var e=this;U.getAll().then((function(t){e.articelCategory=t.data,console.log(t.data)})).catch((function(e){console.log(e)}))},showMessage:function(e){var t=this;this.message=e,setTimeout((function(){t.message=""}),20)}},created:function(){this.currentUser||this.$router.push("/home")},computed:{currentUser:function(){return this.getCategory(),this.$store.state.auth.user}},mounted:function(){this.currentUser||this.$router.push("/home")}};n("c1c3"),n("0e44");le.render=A;t["default"]=le},cd2a:function(e,t,n){"use strict";var r=n("d4ec"),o=n("bee2"),i=n("c427"),a=function(){function e(){Object(r["a"])(this,e)}return Object(o["a"])(e,[{key:"getAll",value:function(){return i["a"].get("/article")}},{key:"getNew",value:function(){return i["a"].get("/article/new")}},{key:"get",value:function(e){return i["a"].get("/article/".concat(e))}},{key:"create",value:function(e){return i["a"].post("/article/create",e)}},{key:"update",value:function(e,t){return i["a"].put("/article/".concat(e),t)}},{key:"delete",value:function(e){return i["a"].delete("/article/".concat(e))}},{key:"deleteAll",value:function(){return i["a"].delete("/article")}},{key:"findByTitle",value:function(e){return i["a"].get("/article?title=".concat(e))}}]),e}();t["a"]=new a},ceae:function(e,t,n){},e01a:function(e,t,n){"use strict";var r=n("23e7"),o=n("83ab"),i=n("da84"),a=n("5135"),c=n("861d"),l=n("9bf2").f,u=n("e893"),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new s(e):void 0===e?s():s(e);return""===e&&(d[t]=!0),t};u(f,s);var b=f.prototype=s.prototype;b.constructor=f;var g=b.toString,p="Symbol(test)"==String(s("test")),v=/^Symbol\((.*)\)[^)]+$/;l(b,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=g.call(e);if(a(d,e))return"";var n=p?t.slice(7,-1):t.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},e538:function(e,t,n){var r=n("b622");t.f=r},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=chunk-30a4f47f.5a988fba.js.map