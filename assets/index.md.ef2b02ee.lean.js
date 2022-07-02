var H=Object.defineProperty,L=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var x=(e,a,s)=>a in e?H(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,C=(e,a)=>{for(var s in a||(a={}))W.call(a,s)&&x(e,s,a[s]);if(k)for(var s of k(a))K.call(a,s)&&x(e,s,a[s]);return e},z=(e,a)=>L(e,M(a));import{d as defineComponent,i as inject,r as ref,w as watch,h,o as openBlock,c as createElementBlock,F as Fragment,b as renderList,e as createVNode,u as unref,f as computed,g as createBlock,j as resolveDynamicComponent,k as createBaseVNode,l as withDirectives,v as vModelDynamic,m as mergeProps,t as toHandlers,n as normalizeClass,_ as _export_sfc,p as useSlots,q as watchEffect,s as onMounted,x as nextTick,y as onBeforeUnmount,z as vShow,A as renderSlot,B as useCssVars,C as provide,D as setBlockTracking,E as createTextVNode,G as toDisplayString,H as createCommentVNode,I as toRefs,J as reactive,K as shallowRef,L as __vitePreload,M as withCtx,T as Transition,a as createStaticVNode}from"./app.1f4039e1.js";const getId=(e="id")=>e+"-"+Math.random().toString(36).slice(-6),tableProvideKey=Symbol("fuzzy-ui-table"),getDirectionChar=e=>e==="asc"?"\u25B2":e==="desc"?"\u25BC":"",_sfc_main$7=defineComponent({props:{col:{type:Object,required:!0}},emits:["sort"],setup(e,{emit:a}){const{allSelected:s}=inject(tableProvideKey),t=()=>a("sort"),n=()=>{s.value=!s.value},l=ref();return watch(s,r=>{l.value&&(l.value.indeterminate=r===null)}),()=>{const r=e.col,p=r.checkbox,d=r.slots.header,o=d!=null?d:p?h("input",{type:"checkbox",checked:s.value,onChange:n,ref:l}):h("div",[r.header,r.sortable?h("span",getDirectionChar(e.col.sortDirection)):null]);return p?h("label",o):h("div",{onClick:r.sortable?t:void 0},o)}}}),_sfc_main$6=defineComponent({__name:"HRow",setup(e){const{columns:a,setSort:s}=inject(tableProvideKey),t=(n,l)=>{s(n,l.sortDirection===void 0?"asc":l.sortDirection==="asc"?"desc":void 0)};return(n,l)=>(openBlock(),createElementBlock("tr",null,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(a),([r,p])=>(openBlock(),createElementBlock("th",{key:p.key+"th"},[createVNode(_sfc_main$7,{col:p,onSort:d=>t(r,p)},null,8,["col","onSort"])]))),128))]))}}),_hoisted_1$3={key:1},_hoisted_2$2=["checked"],_hoisted_3$1=["disabled","type"],_sfc_main$5=defineComponent({__name:"Cell",props:{row:{type:Object,required:!0},col:{type:Object,required:!0},component:{type:Function}},setup(e,{expose:a}){const s=e,{setActiveCell:t,setCheckedRow:n,updateField:l}=inject(tableProvideKey),r=ref(s.col.getter(s.row));watch(()=>s.col.getter(s.row),c=>{r.value=c});const p=async()=>{await l(s.row,s.col,r.value),r.value=s.col.getter(s.row)};a({edit:()=>{r.value=String(s.col.getter(s.row))},save:p});const o=ref(),y=()=>{var D;const c=o.value.cellIndex;return[((D=o.value)==null?void 0:D.parentElement).rowIndex,c]},f=computed(()=>s.col.editable?{focus:()=>{var c;r.value=s.col.getterOnEdit?s.col.getter(s.row):(c=s.row[s.col.prop])!=null?c:s.col.getter(s.row)},change:p,keydown:c=>{if(c.key!=="Tab"){if(c.key==="Enter"||c.key==="ArrowDown")return c.preventDefault(),t(...y(),"down");if(c.key==="ArrowUp")return c.preventDefault(),t(...y(),"up");if(c.key==="Escape"){c.preventDefault(),r.value=String(s.col.getter(s.row));return}}}}:{});return(c,b)=>(openBlock(),createElementBlock("td",{ref_key:"tdRef",ref:o},[e.col.slots.default?(openBlock(),createBlock(resolveDynamicComponent(e.col.slots.default),{key:0,row:e.row,col:e.col},null,8,["row","col"])):e.col.checkbox?(openBlock(),createElementBlock("label",_hoisted_1$3,[createBaseVNode("input",{checked:!!r.value,type:"checkbox",onChange:b[0]||(b[0]=D=>unref(n)(e.row,D.target.checked))},null,40,_hoisted_2$2)])):withDirectives((openBlock(),createElementBlock("input",mergeProps({key:2,"onUpdate:modelValue":b[1]||(b[1]=D=>r.value=D),disabled:!e.col.editable,type:e.col.type},toHandlers(unref(f))),null,16,_hoisted_3$1)),[[vModelDynamic,r.value]])],512))}}),_sfc_main$4=defineComponent({__name:"Row",props:{data:{type:Object,required:!0}},setup(e){const{columns:a,isCheckedRow:s}=inject(tableProvideKey);return(t,n)=>(openBlock(),createElementBlock("tr",{class:normalizeClass({checked:unref(s)(e.data)})},[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(a),([,l])=>(openBlock(),createBlock(_sfc_main$5,{key:l.key,row:e.data,col:l},null,8,["row","col"]))),128))],2))}});var Table_vue_vue_type_style_index_0_scoped_true_lang=(()=>`div.shadow[data-v-7493f8ec]{position:absolute;width:5px;top:0;height:min(calc(var(--566d1907) * var(--fuzzy-ui-table-row-height) + var(--fuzzy-ui-table-header-height)),calc(100% - var(--68c3753d)))}div.shadow-top[data-v-7493f8ec]{background:linear-gradient(180deg,gray,transparent);height:5px;top:calc(var(--fuzzy-ui-table-header-height) - 1px);width:calc(100% - var(--a33a64a0))}div.no-data[data-v-7493f8ec]{position:absolute;top:calc(var(--fuzzy-ui-table-header-height) - 1px);left:0;width:calc(100% - var(--a33a64a0));height:calc(100% - var(--68c3753d) - var(--fuzzy-ui-table-header-height))}div.fuzzy-ui-table>div.table-scroll[data-v-7493f8ec]:after{height:calc(var(--566d1907) * var(--fuzzy-ui-table-row-height))}
`)(),Table_vue_vue_type_style_index_1_lang=(()=>`:root{--fuzzy-ui-table-col-bg-fixed: #dddddd;--fuzzy-ui-table-header-bg: #f5f5f5;--fuzzy-ui-table-header-bg-fixed: var(--fuzzy-ui-table-col-bg-fixed);--fuzzy-ui-table-row-bg: white;--fuzzy-ui-table-row-bg-checked: #f0f0f0;--fuzzy-ui-table-row-bg-hover: #ccc;--fuzzy-ui-table-header-color: #333;--fuzzy-ui-table-header-font-size: 16px;--fuzzy-ui-table-header-font-weight: bold;--fuzzy-ui-table-header-height: 40px;--fuzzy-ui-table-header-padding: 10px;--fuzzy-ui-table-header-border-bottom: 1px solid #e5e5e5;--fuzzy-ui-table-cell-padding: 10px;--fuzzy-ui-table-cell-font-size: 14px;--fuzzy-ui-table-cell-font-weight: normal;--fuzzy-ui-table-cell-color: #333;--fuzzy-ui-table-cell-border-color: #e5e5e5;--fuzzy-ui-table-cell-border-width: 1px;--fuzzy-ui-table-cell-min-width: auto;--fuzzy-ui-table-cell-height: calc(var(--fuzzy-ui-table-cell-font-size) + var(--fuzzy-ui-table-cell-padding) * 2);--fuzzy-ui-table-row-height: calc( var(--fuzzy-ui-table-cell-height) + var(--fuzzy-ui-table-cell-border-width) * 2 + 2px )}.fuzzy-ui-table>div>table>thead>tr>th>:is(div,label){height:var(--fuzzy-ui-table-header-height);max-height:var(--fuzzy-ui-table-header-height);padding:var(--fuzzy-ui-table-header-padding);display:flex;align-items:center;box-sizing:border-box}.fuzzy-ui-table>div>table>thead>tr>th{background:var(--fuzzy-ui-table-header-bg);color:var(--fuzzy-ui-table-header-color);font-size:var(--fuzzy-ui-table-header-font-size);font-weight:var(--fuzzy-ui-table-header-font-weight);padding:0;border-bottom:var(--fuzzy-ui-table-header-border-bottom);box-sizing:border-box}.fuzzy-ui-table>div>table>tbody>tr>td{padding:1px;box-sizing:border-box;font-size:var(--fuzzy-ui-table-cell-font-size);font-weight:var(--fuzzy-ui-table-cell-font-weight);color:var(--fuzzy-ui-table-cell-color);border-width:var(--fuzzy-ui-table-cell-border-width);border-color:var(--fuzzy-ui-table-cell-border-color);border-style:solid;white-space:nowrap;min-width:var(--fuzzy-ui-table-cell-min-width)}.fuzzy-ui-table>div>table>tbody>tr>td>:is(input,label){all:unset;padding:var(--fuzzy-ui-table-cell-padding);box-sizing:border-box;width:100%;height:100%;display:flex;height:var(--fuzzy-ui-table-cell-height);line-height:1}.fuzzy-ui-table>div>table tr>:is(td,th)>label>input{margin:auto}.fuzzy-ui-table>div>table>tbody>tr>td>input:focus{outline:auto 1px Highlight}.fuzzy-ui-table>div>table>thead>tr>th>div>div{display:flex;width:100%;align-items:center}.fuzzy-ui-table>div>table>thead>tr>th>div>div>span{transform:scaleY(.7);margin-left:auto;user-select:none;min-width:16px;flex-shrink:0}.fuzzy-ui-table>div>table>tbody>tr{background-color:var(--fuzzy-ui-table-row-bg)}.fuzzy-ui-table>div>table>tbody>tr.checked{background-color:var(--fuzzy-ui-table-row-bg-checked)}.fuzzy-ui-table>div>table>tbody>tr:hover{background-color:var(--fuzzy-ui-table-row-bg-hover)}.fuzzy-ui-table{position:relative}.fuzzy-ui-table>div.table-scroll{overflow:auto;position:relative;height:100%;width:100%}.fuzzy-ui-table>div.table-scroll:after{content:"";position:absolute;top:0;left:0;width:100%;opacity:0;pointer-events:none}.fuzzy-ui-table>div.table-scroll>table{position:sticky;border-spacing:0;width:100%;top:0}.fuzzy-ui-table>div.table-scroll>table>thead{position:sticky;background:white;z-index:2;top:0}.fuzzy-ui-table>.no-data>div{display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:1.5em;height:100%}.fuzzy-ui-table>.no-data .reset-button{all:unset;text-decoration:underline;cursor:pointer}.fuzzy-ui-table:after{display:table;content:"";clear:both}.fuzzy-ui-table>div.shadow-left{background:linear-gradient(90deg,gray,transparent)}.fuzzy-ui-table>div.shadow-right{background:linear-gradient(90deg,transparent,gray)}
`)();const _hoisted_1$2=["id"],_hoisted_2$1={class:"shadow shadow-left"},_hoisted_3={class:"shadow shadow-right"},_hoisted_4={class:"shadow shadow-top"},_hoisted_5={class:"no-data"},_sfc_main$3=defineComponent({__name:"Table",props:{data:{type:Array,required:!0},"onUpdate:data":{type:Function},onUpdateRow:{type:Function},onUpdateField:{type:Function}},emits:["selection-change"],setup(__props,{expose,emit}){const props=__props;useCssVars(e=>({"566d1907":unref(filteredRows).length,"68c3753d":scrollbarHeight.value+"px",a33a64a0:scrollbarWidth.value+"px"}));const uniqueId=getId("fuzzy-ui-table-"),slots=useSlots(),Columns=()=>{var e;return(e=slots.default)==null?void 0:e.call(slots)};let currentSortKey="",currentSortDirection;const wrapperRef=ref(),styleRef=ref(),data=ref(props.data),columns=ref(new Map),maxOrderNum=ref(0),checkedRows=ref(new Set),rowKeys=ref(new Map),filteredRowsSet=ref(new Set(data.value)),numberOfRows=ref(0),currentRow=ref(1/0),currentRows=ref([]);ref(0);const rowHeight=ref(1/0),showLeftShadow=ref(!1),showRightShadow=ref(!0),showTopShadow=ref(!1),scrollbarWidth=ref(0),scrollbarHeight=ref(0),allSelected=computed({get:()=>data.value.every(s=>checkedRows.value.has(s))?!0:data.value.some(s=>checkedRows.value.has(s))?null:!1,set:e=>{e?checkedRows.value=new Set(data.value):checkedRows.value.clear()}}),sortedColumns=computed(()=>new Map([...columns.value].sort(([,e],[,a])=>e.fixed==="left"&&a.fixed!=="left"?-1:e.fixed!=="left"&&a.fixed==="left"||e.fixed==="right"&&a.fixed!=="right"?1:e.fixed!=="right"&&a.fixed==="right"?-1:e.order-a.order))),filteredRows=computed(()=>data.value.filter(e=>filteredRowsSet.value.has(e))),updateField=async(e,a,s)=>{var t;try{if(a.hasCustomSetter)return await a.setter(e,s);const n=a.prop,l=props.data.indexOf(e);if(props.onUpdateField)return await((t=props.onUpdateField)==null?void 0:t.call(props,l,n,s));if(props.onUpdateRow){const r=z(C({},e),{[n]:s});return await props.onUpdateRow(r,l)}if(props["onUpdate:data"]){const r=z(C({},e),{[n]:s}),p=props.data.map((d,o)=>o===l?r:C({},d));return await props["onUpdate:data"](p)}await a.setter(e,s)}catch(n){const l=a.prop,r=props.data.indexOf(e);console.warn(`Your update function threw an error while updating row #${r}, field: ${l} with ${s}:`,n),console.warn("Make sure to handle errors in your update function.")}},registerCol=(e,a)=>{columns.value.has(e)||(maxOrderNum.value=Math.max(maxOrderNum.value,a.order),columns.value.set(e,a))},unregisterCol=e=>{!columns.value.has(e)||columns.value.delete(e)},resetSort=()=>{const e=[...rowKeys.value.keys()];data.value.sort((a,s)=>e.indexOf(a)-e.indexOf(s))},setSort=(e,a)=>{currentSortKey&&(columns.value.get(currentSortKey).sortDirection=void 0);const s=columns.value.get(e);if(currentSortKey=e,s.sortDirection=a,currentSortDirection=a,!currentSortDirection){resetSort();return}const t=typeof s.sortable=="function"?s.sortable:(n,l)=>{const r=s.getter(n),p=s.getter(l);return`${r}`.localeCompare(`${p}`)*(currentSortDirection==="asc"?1:-1)};data.value.sort(t)},filter=e=>{filteredRowsSet.value=new Set(props.data.filter(e))},resetFilter=()=>{filteredRowsSet.value=new Set(props.data)},isCheckedRow=e=>checkedRows.value.has(e),setCheckedRow=(e,a)=>{a?checkedRows.value.add(e):checkedRows.value.delete(e),emit("selection-change",e,a)},focusCell=(e,a)=>{nextTick(()=>{var t;const s=(t=wrapperRef.value)==null?void 0:t.querySelector(`table > tbody > tr:nth-child(${e}) > td:nth-child(${a+1}) input`);s==null||s.focus({preventScroll:!0})})},setActiveCell=(e,a,s)=>{var t,n;switch(s){case"up":(t=wrapperRef.value)==null||t.scrollBy(0,-rowHeight.value),focusCell(e-1,a);break;case"down":(n=wrapperRef.value)==null||n.scrollBy(0,rowHeight.value),focusCell(e+1,a);break;case"left":focusCell(e,a-1);break;case"right":focusCell(e,a+1);break}},updateCurrentRow=()=>{const e=wrapperRef.value;if(!e)return;const{scrollTop:a,scrollHeight:s,clientHeight:t}=e,n=Math.floor(a/rowHeight.value);n!==currentRow.value&&(currentRow.value=n,currentRows.value=filteredRows.value.slice(currentRow.value,currentRow.value+numberOfRows.value))},updateShadowVisibility=e=>{const{scrollTop:a,scrollWidth:s,clientWidth:t,scrollLeft:n}=e;showLeftShadow.value=n>0,showTopShadow.value=a>0,showRightShadow.value=n!==s-t},setScrollbarDimensions=e=>{const{clientHeight:a,clientWidth:s,offsetWidth:t,offsetHeight:n}=e;scrollbarWidth.value=t-s,scrollbarHeight.value=n-a},onScroll=()=>{updateShadowVisibility(wrapperRef.value),updateCurrentRow()};return watch(()=>[...data.value],e=>{e.forEach(a=>{rowKeys.value.has(a)||(rowKeys.value.set(a,Math.random().toString()),filteredRowsSet.value.add(a))})},{immediate:!0}),watch(()=>props.data,()=>{console.log("Data watcher triggered"),data.value=props.data}),watch(filteredRows,updateCurrentRow),watchEffect(()=>{var m,A,w,_;const e=styleRef.value;if(!e)return;const a=[...sortedColumns.value],s=[],t=[],n=[],l=[],r=[];a.forEach(([,i],u)=>{if(i.hidden){s.push(u+1);return}if(i.fixed!==!1){if(t.push(u+1),i.fixed==="left"||i.fixed===!0||i.fixed===""){const F=n.at(-1);n.push([u+1,Number(i.width)+2,F?F[1]+F[2]:0])}}else i.width&&r.push([u+1,Number(i.width)])}),a.slice().reverse().forEach(([,i],u)=>{if(i.fixed==="right"){const F=l.at(-1);l.unshift([a.length-u,Number(i.width),F?F[1]+F[2]:0])}});const p=s.map(i=>`:nth-child(${i})`).join(","),d=`div#${uniqueId} > div > table tr > :is(td, th):is(${p})`,o=t.map(i=>`:nth-child(${i})`).join(","),y=`div#${uniqueId} > div > table tr > :is(td, th):is(${o})`,f=`div#${uniqueId} > div > table tr > td:is(${o})`,c=`div#${uniqueId} > div > table tr.checked > td:is(${o})`,b=`div#${uniqueId} > div > table tr:hover > td:is(${o})`,D=`div#${uniqueId} > div > table tr > th:is(${o})`,B=p?`${d} { display: none; }`:"",S=o?`${y} { position: sticky; z-index: 1; }`:"",R=o?`${f} { background: var(--fuzzy-ui-table-col-bg-fixed); }`:"",E=o?`${c} { background: var(--fuzzy-ui-table-row-bg-checked); }`:"",$=o?`${b} { background: var(--fuzzy-ui-table-row-bg-hover); }`:"",T=o?`${D} { background: var(--fuzzy-ui-table-header-bg-fixed); }`:"",I=n.map(([i,u,F])=>`div#${uniqueId} > div > table tr > :nth-child(${i}) { left: ${F}px; width: ${u}px; min-width: ${u}px; }`).join(`
`),N=l.map(([i,u,F])=>`div#${uniqueId} > div > table tr > :nth-child(${i}) { right: ${F}px; width: ${u}px; min-width: ${u}px; }`).join(`
`),V=r.map(([i,u])=>`div#${uniqueId} > div > table tr > :nth-child(${i}) { width: ${u}px; max-width: ${u}px; min-width: ${u}px; }`).join(`
`),v=n.length>0,g=l.length>0,q=v?n.at(-1)[1]+n.at(-1)[2]:0,O=g?l.at(-1)[1]+l.at(-1)[2]:0,P=`div#${uniqueId} div.shadow-left { left: ${q}px }`,U=O+((A=(m=wrapperRef.value)==null?void 0:m.offsetWidth)!=null?A:0)-((_=(w=wrapperRef.value)==null?void 0:w.clientWidth)!=null?_:0),j=`div#${uniqueId} div.shadow-right { right: ${U}px }`;e.innerHTML=[B,S,R,E,$,T,I,N,V,v?P:"",g?j:""].join(`
`)}),onMounted(()=>{const wrapper=wrapperRef.value;nextTick(()=>{setScrollbarDimensions(wrapper),updateShadowVisibility(wrapper)});const fontSize=window.getComputedStyle(document.documentElement).getPropertyValue("--fuzzy-ui-table-cell-font-size"),calcHeight=window.getComputedStyle(document.documentElement).getPropertyValue("--fuzzy-ui-table-row-height"),replaceCalc=calcHeight.replace(/calc/g,""),replaceEm=replaceCalc.replace(/em/g,"*"+fontSize).replace(/px/g,"");rowHeight.value=eval(replaceEm);const thRowHeight=parseInt(window.getComputedStyle(wrapper).getPropertyValue("--fuzzy-ui-table-header-height"));numberOfRows.value=Math.ceil((wrapper.clientHeight-thRowHeight)/rowHeight.value)+1,updateCurrentRow(),wrapper.addEventListener("scroll",onScroll)}),onBeforeUnmount(()=>wrapperRef.value.removeEventListener("scroll",onScroll)),expose({filter,resetFilter,selected:checkedRows}),provide(tableProvideKey,{updateField,data,columns:sortedColumns,registerCol,unregisterCol,isCheckedRow,setCheckedRow,setSort,setActiveCell,allSelected,maxOrderNum}),(e,a)=>(openBlock(),createElementBlock("div",mergeProps(e.$attrs,{id:unref(uniqueId),class:"fuzzy-ui-table"}),[a[0]||(setBlockTracking(-1),a[0]=(openBlock(),createBlock(resolveDynamicComponent("style"),{ref_key:"styleRef",ref:styleRef},null,512)),setBlockTracking(1),a[0]),createVNode(Columns),createBaseVNode("div",{ref_key:"wrapperRef",ref:wrapperRef,class:"table-scroll"},[createBaseVNode("table",null,[createBaseVNode("thead",null,[createVNode(_sfc_main$6)]),createBaseVNode("tbody",null,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(filteredRows).slice(currentRow.value,currentRow.value+numberOfRows.value),(s,t)=>(openBlock(),createBlock(_sfc_main$4,{key:t,data:s},null,8,["data"]))),128))])])],512),withDirectives(createBaseVNode("div",_hoisted_2$1,null,512),[[vShow,showLeftShadow.value]]),withDirectives(createBaseVNode("div",_hoisted_3,null,512),[[vShow,showRightShadow.value]]),withDirectives(createBaseVNode("div",_hoisted_4,null,512),[[vShow,showTopShadow.value]]),withDirectives(createBaseVNode("div",_hoisted_5,[renderSlot(e.$slots,"empty",{filter:!!data.value.length},()=>[createBaseVNode("div",null,[createTextVNode(" No data "+toDisplayString(data.value.length?"matching your filter":"")+" ",1),data.value.length?(openBlock(),createElementBlock("button",{key:0,class:"reset-button",onClick:resetFilter},"Reset Filters")):createCommentVNode("",!0)])],!0)],512),[[vShow,!unref(filteredRows).length]])],16,_hoisted_1$2))}});var FUITable=_export_sfc(_sfc_main$3,[["__scopeId","data-v-7493f8ec"]]);const spaceSeperatedToCamelCase=e=>unCapitalize(e.replace(/\s(.)/g,(a,s)=>s.toUpperCase())),unCapitalize=e=>e.charAt(0).toLowerCase()+e.slice(1),createPropAccessor=e=>a=>a[e],createPropMutator=e=>(a,s)=>a[e]=s,returnNull=()=>null,_sfc_main$2=defineComponent({props:{header:{type:String,default:""},prop:{type:String},getter:{type:Function},setter:{type:Function},sortable:{type:Boolean,default:!1},filterable:Boolean,editable:Boolean,checkbox:Boolean,width:[String,Number],fixed:[String,Boolean],hidden:Boolean,sortDirection:{type:String,default:void 0},order:{type:Number},type:{type:String},getterOnEdit:{type:Boolean}},setup(e){const{registerCol:a,isCheckedRow:s,unregisterCol:t,setCheckedRow:n,maxOrderNum:l}=inject(tableProvideKey),r=computed(()=>e.getter?e.getter:e.checkbox?s:createPropAccessor(d.value)),p=computed(()=>e.setter?e.setter:e.checkbox?n:createPropMutator(d.value)),d=computed(()=>{var D;return(D=e.prop)!=null?D:spaceSeperatedToCamelCase(e.header)}),o=l.value+1,y=computed(()=>{var D;return(D=e.order)!=null?D:o}),f=getId(e.header||e.prop),c=toRefs(e),b=reactive(z(C({},c),{prop:d,getter:r,setter:p,slots:useSlots(),key:f,sortDirection:e.sortDirection,fixed:computed(()=>e.fixed===!0||e.fixed===""?"left":e.fixed),order:y,hasCustomSetter:computed(()=>!!e.setter)}));return a(f,b),onBeforeUnmount(()=>t(f)),returnNull}});var Button_vue_vue_type_style_index_0_lang=(()=>`:root{--fuzzy-ui-button-padding: .15em .4em;--fuzzy-ui-button-border-radius: .125em;--fuzzy-ui-button-border-width: 1px;--fuzzy-ui-button-border-color: currentColor;--fuzzy-ui-button-background-color: white;--fuzzy-ui-button-color: currentColor;--fuzzy-ui-button-hover-background-color: #f0f0f0;--fuzzy-ui-button-hover-color: currentColor;--fuzzy-ui-button-active-background-color: #e0e0e0;--fuzzy-ui-button-active-color: currentColor;--fuzzy-ui-button-disabled-background-color: #f0f0f0;--fuzzy-ui-button-disabled-color: currentColor;--fuzzy-ui-button-disabled-opacity: .5;--fuzzy-ui-button-loading-color: currentColor;--fuzzy-ui-button-loading-opacity: .8;--fuzzy-ui-button-icon-size: 1em;--fuzzy-ui-button-font-size: 1em}.fuzzy-ui-button{display:inline-flex;position:relative;align-items:center;justify-content:center;border-style:solid}.fuzzy-ui-button.loading{pointer-events:none}.fuzzy-ui-button.squared{aspect-ratio:1}.fuzzy-ui-button__content{display:flex;flex:1 1 0;align-items:center;justify-content:center;gap:.25em;transition:background-color .1s ease-in-out,color .1s ease-in-out}.fuzzy-ui-button__content.iconRight{flex-direction:row-reverse}.fuzzy-ui-button__content.loading{opacity:0}.fuzzy-ui-button__loader{position:absolute;top:0;left:0;width:100%;height:100%;display:inline-flex;align-items:center;justify-content:center;padding:.125em;box-sizing:border-box}.fuzzy-ui-button .fade-enter-active,.fuzzy-ui-button .fade-leave-active{transition:opacity .25s}.fuzzy-ui-button .fade-enter,.fuzzy-ui-button .fade-leave-to{opacity:0}.fuzzy-ui-button{border-radius:var(--fuzzy-ui-button-border-radius);border-width:var(--fuzzy-ui-button-border-width);border-color:var(--fuzzy-ui-button-border-color);background-color:var(--fuzzy-ui-button-background-color);color:var(--fuzzy-ui-button-color);transition:background-color .1s ease-in-out,color .1s ease-in-out;font-size:var(--fuzzy-ui-button-font-size);padding:var(--fuzzy-ui-button-padding);line-height:1}.fuzzy-ui-button:focus-visible{outline-color:var(--fuzzy-ui-button-color)}.fuzzy-ui-button:hover{background-color:var(--fuzzy-ui-button-hover-background-color)}.fuzzy-ui-button:hover .fuzzy-ui-button__content{color:var(--fuzzy-ui-button-hover-color)}.fuzzy-ui-button:active{background-color:var(--fuzzy-ui-button-active-background-color)}.fuzzy-ui-button:active .fuzzy-ui-button__content{color:var(--fuzzy-ui-button-active-color)}.fuzzy-ui-button.disabled,.fuzzy-ui-button[disabled]{background-color:var(--fuzzy-ui-button-disabled-background-color);pointer-events:none}.fuzzy-ui-button.disabled .fuzzy-ui-button__content,.fuzzy-ui-button[disabled] .fuzzy-ui-button__content{color:var(--fuzzy-ui-button-disabled-color);opacity:var(--fuzzy-ui-button-disabled-opacity)}.fuzzy-ui-button__loader{color:var(--fuzzy-ui-button-loading-color);opacity:var(--fuzzy-ui-button-loading-opacity)}
`)();const _hoisted_1$1={key:0},_hoisted_2={class:"fuzzy-ui-button__loader"},_sfc_main$1=defineComponent({__name:"Button",props:{is:{type:[String,Object],default:"button"},onClick:{type:Function},icon:{type:[String,Object]},iconRight:{type:Boolean},label:{type:String},loader:{type:[String,Object]},loading:{type:Boolean,default:void 0},squared:{type:Boolean,default:void 0}},emits:["update:loading"],setup(e,{emit:a}){const s=e,t=useSlots(),n=computed(()=>{var o,y;return!s.label&&!((o=t.default)!=null&&o.call(t))&&!((y=t.label)!=null&&y.call(t))}),l=shallowRef();watchEffect(async()=>{var o;s.loader||((o=t.loader)==null?void 0:o.call(t))||(n.value?l.value=(await __vitePreload(()=>import("./chunks/CircleLoader.d625e764.js"),["assets/chunks/CircleLoader.d625e764.js","assets/index.md.ef2b02ee.js","assets/app.1f4039e1.js"])).default:l.value=(await __vitePreload(()=>import("./chunks/DotLoader.8acd3ef1.js"),["assets/chunks/DotLoader.8acd3ef1.js","assets/index.md.ef2b02ee.js","assets/app.1f4039e1.js"])).default)});const r=ref(!1),p=computed({get(){var o;return(o=s.loading)!=null?o:r.value},set(o){r.value=o,a("update:loading",o)}}),d=async o=>{if(!s.onClick||p.value)return;const y=s.onClick(o);return y instanceof Promise&&(p.value=!0,await y,p.value=!1),y};return(o,y)=>{var f;return openBlock(),createBlock(resolveDynamicComponent(o.$attrs.href?"a":e.is),{class:normalizeClass(["fuzzy-ui-button",{squared:(f=e.squared)!=null?f:unref(n),loading:unref(p)}]),type:e.is==="button"&&!o.$attrs.href&&o.$attrs.type?"button":o.$attrs.type,onClick:d},{default:withCtx(()=>[createBaseVNode("div",{class:normalizeClass(["fuzzy-ui-button__content",{loading:unref(p),iconRight:e.iconRight}])},[renderSlot(o.$slots,"default",{},()=>[renderSlot(o.$slots,"icon",{},()=>[e.icon?(openBlock(),createBlock(resolveDynamicComponent(e.icon),{key:0})):createCommentVNode("",!0)]),renderSlot(o.$slots,"label",{},()=>[e.label?(openBlock(),createElementBlock("span",_hoisted_1$1,toDisplayString(e.label),1)):createCommentVNode("",!0)])])],2),unref(p)?(openBlock(),createBlock(Transition,{key:0,name:"fade"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_2,[renderSlot(o.$slots,"loader",{iconOnly:unref(n)},()=>{var c;return[(openBlock(),createBlock(resolveDynamicComponent((c=e.loader)!=null?c:unref(l))))]})])]),_:3})):createCommentVNode("",!0)]),_:3},8,["class","type"])}}});var CircleLoader_vue_vue_type_style_index_0_lang=(()=>`:where(.fuzzy-ui-circle-loader){animation:fuzzy-ui-circle-loader-animation 1s linear infinite;fill:none;stroke:currentColor;stroke-width:2px;stroke-dasharray:100%;opacity:.8;width:var(--fuzzy-ui-button-icon-size);height:var(--fuzzy-ui-button-icon-size)}@keyframes fuzzy-ui-circle-loader-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`)(),DotLoader_vue_vue_type_style_index_0_lang=(()=>`:where(.fuzzy-ui-dot-loader circle){animation:fuzzy-ui-dot-loader-animation 1s infinite;fill:currentColor;animation-delay:.1s;opacity:.8}:where(.fuzzy-ui-dot-loader:nth-child(2) circle){animation-delay:.2s}:where(.fuzzy-ui-dot-loader:nth-child(3) circle){animation-delay:.3s}@keyframes fuzzy-ui-dot-loader-animation{0%{opacity:0}50%{opacity:1}to{opacity:0}}:where(.fuzzy-ui-dot-loader){width:var(--fuzzy-ui-button-icon-size);height:var(--fuzzy-ui-button-icon-size)}
`)(),index_md_vue_type_style_index_0_lang=(()=>`:root{--fuzzy-ui-button-background-color: #0070f3;--fuzzy-ui-button-hover-background-color: #0060e9;--fuzzy-ui-button-active-background-color: #0050d7;--fuzzy-ui-button-disabled-background-color: #66aeff;--fuzzy-ui-button-border-color: #7ebaff;--fuzzy-ui-button-active-color: #bcbcbc;--fuzzy-ui-button-color: #fff;--fuzzy-ui-button-font-size: 5rem}
`)();const _hoisted_1=createStaticVNode("",13),_hoisted_14=createTextVNode("Click Me"),_hoisted_15=createStaticVNode("",2),__pageData=JSON.parse('{"title":"Home","description":"","frontmatter":{},"headers":[{"level":2,"title":"Quick Start","slug":"quick-start"},{"level":2,"title":"Why Fuzzy UI?","slug":"why-fuzzy-ui"},{"level":3,"title":"Button","slug":"button"},{"level":3,"title":"Table","slug":"table"}],"relativePath":"index.md","lastUpdated":1656782149000}'),__default__={name:"index.md"},_sfc_main=Object.assign(__default__,{setup(e){const a=()=>new Promise(l=>{setTimeout(l,1e3)}),s=l=>l.dateOfBirth.split(".").reverse().join("-"),t=(l,r)=>l.dateOfBirth=r.split("-").reverse().join("."),n=ref([{name:"John Doe",age:"25",email:"john.doe@example.com",phone:"+49 123456789",dateOfBirth:"01.01.2000"},{name:"Jane Doe",age:"24",email:"jane.doe@example.com",phone:"+49 987654321",dateOfBirth:"12.12.2003"},{name:"David Smith",age:"23",email:"david.smith@example.com",phone:"+49 987654321",dateOfBirth:"03.05.2012"}]);return(l,r)=>(openBlock(),createElementBlock("div",null,[_hoisted_1,createVNode(unref(_sfc_main$1),{onClick:a},{default:withCtx(()=>[_hoisted_14]),_:1}),_hoisted_15,createVNode(unref(FUITable),{data:n.value},{default:withCtx(()=>[createVNode(unref(_sfc_main$2),{header:"Name",sortable:"",editable:""}),createVNode(unref(_sfc_main$2),{header:"Age",sortable:"",editable:""}),createVNode(unref(_sfc_main$2),{header:"Email",sortable:"",editable:""}),createVNode(unref(_sfc_main$2),{header:"Phone",sortable:"",editable:""}),createVNode(unref(_sfc_main$2),{header:"Date of Birth",sortable:"",editable:"",type:"date",getter:s,setter:t,"getter-on-edit":""})]),_:1},8,["data"])]))}});export{__pageData,_sfc_main as default};
