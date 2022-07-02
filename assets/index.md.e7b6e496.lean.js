var j=Object.defineProperty,N=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var w=(e,o,t)=>o in e?j(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,_=(e,o)=>{for(var t in o||(o={}))q.call(o,t)&&w(e,t,o[t]);if(A)for(var t of A(o))$.call(o,t)&&w(e,t,o[t]);return e},k=(e,o)=>N(e,U(o));import{d as m,i as I,r as T,w as V,h as f,b as c,t as L,e as M,u as E,f as H,s as W,g as K,j as x,o as z,k as D,l as C,m as B,n as g,p as S,q as y,T as Q,v as F,x as v,c as R,y as Y,z as J,a as G,A as X}from"./app.fb5a5154.js";const Z=(e="id")=>e+"-"+Math.random().toString(36).slice(-6),O=Symbol("fuzzy-ui-table"),ee=e=>e==="asc"?"\u25B2":e==="desc"?"\u25BC":"";m({props:{col:{type:Object,required:!0}},emits:["sort"],setup(e,{emit:o}){const{allSelected:t}=I(O),n=()=>o("sort"),p=()=>{t.value=!t.value},r=T();return V(t,s=>{r.value&&(r.value.indeterminate=s===null)}),()=>{const s=e.col,l=s.checkbox,i=s.slots.header,a=i!=null?i:l?f("input",{type:"checkbox",checked:t.value,onChange:p,ref:r}):f("div",[s.header,s.sortable?f("span",ee(e.col.sortDirection)):null]);return l?f("label",a):f("div",{onClick:s.sortable?n:void 0},a)}}});const te=e=>ae(e.replace(/\s(.)/g,(o,t)=>t.toUpperCase())),ae=e=>e.charAt(0).toLowerCase()+e.slice(1),oe=e=>o=>o[e],ne=e=>(o,t)=>o[e]=t,se=()=>null;m({props:{header:{type:String,default:""},prop:{type:String},getter:{type:Function},setter:{type:Function},sortable:{type:Boolean,default:!1},filterable:Boolean,editable:Boolean,checkbox:Boolean,width:[String,Number],fixed:[String,Boolean],hidden:Boolean,sortDirection:{type:String,default:void 0},order:{type:Number},type:{type:String}},setup(e){const{registerCol:o,isCheckedRow:t,unregisterCol:n,setCheckedRow:p,maxOrderNum:r}=I(O),s=c(()=>e.getter?e.getter:e.checkbox?t:oe(i.value)),l=c(()=>e.setter?e.setter:e.checkbox?p:ne(i.value)),i=c(()=>{var b;return(b=e.prop)!=null?b:te(e.header)}),a=r.value+1,u=c(()=>{var b;return(b=e.order)!=null?b:a}),d=Z(e.header||e.prop),h=L(e),P=M(k(_({},h),{prop:i,getter:s,setter:l,slots:E(),key:d,sortDirection:e.sortDirection,fixed:c(()=>e.fixed===!0||e.fixed===""?"left":e.fixed),order:u,hasCustomSetter:c(()=>!!e.setter)}));return o(d,P),H(()=>n(d)),se}});const le={key:0},re={class:"fuzzy-ui-button__loader"},ie=m({__name:"Button",props:{is:{type:[String,Object],default:"button"},onClick:{type:Function},icon:{type:[String,Object]},iconRight:{type:Boolean},label:{type:String},loader:{type:[String,Object]},loading:{type:Boolean,default:void 0},squared:{type:Boolean,default:void 0}},emits:["update:loading"],setup(e,{emit:o}){const t=e,n=E(),p=c(()=>{var a,u;return!t.label&&!((a=n.default)!=null&&a.call(n))&&!((u=n.label)!=null&&u.call(n))}),r=W();K(async()=>{var a;t.loader||((a=n.loader)==null?void 0:a.call(n))||(p.value?r.value=(await x(()=>import("./chunks/CircleLoader.23d0f304.js"),["assets/chunks/CircleLoader.23d0f304.js","assets/index.md.e7b6e496.js","assets/app.fb5a5154.js"])).default:r.value=(await x(()=>import("./chunks/DotLoader.8a801189.js"),["assets/chunks/DotLoader.8a801189.js","assets/index.md.e7b6e496.js","assets/app.fb5a5154.js"])).default)});const s=T(!1),l=c({get(){var a;return(a=t.loading)!=null?a:s.value},set(a){s.value=a,o("update:loading",a)}}),i=async a=>{if(!t.onClick||l.value)return;const u=t.onClick(a);return u instanceof Promise&&(l.value=!0,await u,l.value=!1),u};return(a,u)=>{var d;return z(),D(v(a.$attrs.href?"a":e.is),{class:S(["fuzzy-ui-button",{squared:(d=e.squared)!=null?d:y(p),loading:y(l)}]),type:e.is==="button"&&!a.$attrs.href&&a.$attrs.type?"button":a.$attrs.type,onClick:i},{default:C(()=>[B("div",{class:S(["fuzzy-ui-button__content",{loading:y(l),iconRight:e.iconRight}])},[g(a.$slots,"default",{},()=>[g(a.$slots,"icon",{},()=>[e.icon?(z(),D(v(e.icon),{key:0})):F("",!0)]),g(a.$slots,"label",{},()=>[e.label?(z(),R("span",le,Y(e.label),1)):F("",!0)])])],2),y(l)?(z(),D(Q,{key:0,name:"fade"},{default:C(()=>[B("div",re,[g(a.$slots,"loader",{iconOnly:y(p)},()=>{var h;return[(z(),D(v((h=e.loader)!=null?h:y(r))))]})])]),_:3})):F("",!0)]),_:3},8,["class","type"])}}});const ue=G("",15),ce=X("Click Me"),ze=JSON.parse('{"title":"Home","description":"","frontmatter":{},"headers":[{"level":2,"title":"Quick Start","slug":"quick-start"},{"level":2,"title":"Why Fuzzy UI?","slug":"why-fuzzy-ui"},{"level":2,"title":"Components","slug":"components"},{"level":3,"title":"Button","slug":"button"}],"relativePath":"index.md","lastUpdated":1656776601000}'),pe={name:"index.md"},be=Object.assign(pe,{setup(e){const o=()=>new Promise(t=>{setTimeout(t,1e3)});return(t,n)=>(z(),R("div",null,[ue,J(y(ie),{onClick:o},{default:C(()=>[ce]),_:1})]))}});export{ze as __pageData,be as default};
