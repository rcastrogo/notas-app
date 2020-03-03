!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r={},i=-1;var o={subscribe:function(e,t){r[e]||(r[e]=[]);var n=(++i).toString();return r[e].push({token:n,func:t}),n},publish:function(e,t){return!!r[e]&&(setTimeout((function(){for(var n=r[e],i=n?n.length:0;i--;)n[i].func(e,t)}),0),!0)},unsubscribe:function(e){for(var t in r)if(r[t])for(var n=0,i=r[t].length;n<i;n++)if(r[t][n].token===e)return r[t].splice(n,1),e;return!1},TOPICS:{VIEW_CHANGE:"view:change",VALUE_CHANGE:"value:change",MUNICIPIO_CHANGE:"municipio:change"}};const a=["[on-click]","[on-publish]","[route-link]","[on-change]"];var s={addEventListeners:function(e,t,n){a.forEach((r,i)=>{u.toArray(u.$(r,e)).forEach(e=>{let a=r.replace("[","").replace("]",""),s=e.attributes[a].value,c=s.split(":");if(0!==i){if(1===i){let r=u.templates.getValue(c[0],o);o.subscribe(r,(r,i)=>{if(c[1]){let r=t[c[1]]||u.templates.getValue(c[1],n);r&&r(e,i)}else!function(e,t){e.innerHTML=t}(e,i)})}if(2===i&&(e.onclick=function(e){let t=n.router,r=t.normalizePath(e.target.href);if(t.current!=r)try{t.navigateTo(r)}catch(e){console.log(e)}return!1}),3===i){let r="SELECT"===e.tagName;if("publish"===s)return void(r?e.onchange=()=>o.publish(o.TOPICS.VALUE_CHANGE,e):e.oninput=()=>o.publish(o.TOPICS.VALUE_CHANGE,e));let i=t[s]||u.templates.getValue(s,n);r?e.onchange=()=>i(e):e.oninput=()=>i(e)}}else{let r=t[s]||u.templates.getValue(s,n);e.onclick=t=>r(e,t)}})})}};let c={};!function(e,t){var n=e.Pol={apply:function e(t,n,r){if(r&&e(t,r),t&&n&&"object"==typeof n)for(var i in n)"object"==typeof n[i]?e(t[i],n[i]):t[i]=n[i];return t}};!function(e){e.apply(e,{toArray:function(e){return Array.prototype.slice.call(e)},isNull:function(e){return null===e},isArray:function(e){return Array.isArray(e)},isString:function(e){return"string"==typeof e},isBoolean:function(e){return"boolean"==typeof e},isNumber:function(e){return"number"==typeof e},isFunction:function(e){return"function"==typeof e},isObject:function(e){return e&&"object"==typeof e},clone:function(t){return e.isArray(t)?t.slice(0):e.isObject(t)&&t.clone?t.clone():e.isObject(t)?Object.keys(t).reduce((function(n,r){return n[r]=e.clone(t[r]),n}),{}):t},join:function(e,t,n){return e.reduce((function(e,n){return e.append(n[t||"id"])}),[]).join(void 0===n?"-":n||"")},stringBuilder:function(e){return{value:e||"",append:function(e){return this.value=this.value+e,this},appendLine:function(e){return this.value=this.value+(e||"")+"\n",this}}},build:function(t,r){let i=e.isString(r)?{innerHTML:r}:r;return n.apply(document.createElement(t),i)},$:function(t,n){return"string"==typeof t?document.getElementById(t)||e.toArray((n||document).querySelectorAll(t)||[]):t}})}(n),function(e){e.apply(String,{stringBuilder:e.stringBuilder,leftPad:function(e,t,n){var r=""+e;for(null!=n&&""!==n||(n=" ");r.length<t;)r=n+r;return r},trimValues:function(e){return e.map((function(e){return e.trim()}))}}),e.apply(String.prototype,{replaceAll:function(e,t){return this.split(e).join(t)},repeat:String.prototype.repeat||function(e){return new Array(e+1).join(this)},contains:String.prototype.includes||function(e,t){return this.indexOf(e)>=(t||0)},startsWith:String.prototype.startsWith||function(e){return 0==this.indexOf(e)},toFloat:function(){return this.trim().replaceAll(".","").replaceAll(",",".")},fixDate:function(e){return this.split(e||" ")[0]},fixTime:function(e){return this.split(e||" ")[1]},fixYear:function(){return this.fixDate().split("/")[2]},trimSeconds:function(){return this.split(":")[0]+":"+this.split(":")[1]},paddingLeft:function(e){return(e+this).slice(-e.length)},format:function(){var t=arguments,n=t[t.length-1]||self;return this.replace(/\{(\d+|[^{]+)\}/g,(function(r,i){if(i.indexOf("#")>0){let e=i.split("#"),n=t[e[0]],r=e[1];return(n+"").paddingLeft(r)}if(i.indexOf(":")>0){var o=i.split(":");return o[0]=e.templates.getValue(o[0],n),o[1]=e.templates.getValue(o[1],n),o[0](o[1],n,o.slice(2))}return/^\d+$/.test(i)?t[i]:void 0===n[i]?e.templates.getValue(i,n):n[i]}))}})}(n),function(e){e.apply(Array.prototype,{remove:function(e){var t=this.indexOf(e);return-1!=t&&this.splice(t,1),this},add:function(e){return this.push(e),e},append:function(e){return this.push(e),this},item:function(e,t,n){return 1==arguments?this.filter((function(t){return t.id==e||t._id==e}))[0]||n:this.filter((function(n){return n[e]==t}))[0]||n},contains:function(e,t){return this.item(e,t)},lastItem:function(){return this[this.length-1]},select:function(e){return this.map(e)},where:function(t){return e.isFunction(t)?this.filter(t):e.isObject(t)?this.filter(new Function("a",Object.keys(t).reduce((function(n,r,i){return n+(i>0?" && ":"")+((o=t[r])instanceof RegExp?"{1}.test(a.{0})".format(r,o):e.isString(o)?"a.{0} === '{1}'".format(r,o):"a.{0} === {1}".format(r,o));var o}),"return "))):this},sortBy:function(e,t){var n=[],r=e.split(",").map((function(e,t){var r=e.split(" ");return n[t]=r[1]&&"DESC"==r[1].toUpperCase()?-1:1,r[0]}));return n[0]=t?-1:1,this.sort((function(e,t){var i=0,o=function(e,t){var a=e[r[i]],s=t[r[i]];return a<s?-1*n[i]:a>s?1*n[i]:++i<r.length?o(e,t):0};return o(e,t)})),this},orderBy:function(t){var n=t;return e.isString(t)&&(n=function(e){return e[t]}),this.map((function(e){return e})).sort((function(e,t){var r=n(e),i=n(t);return r<i?-1:r>i?1:0}))},distinct:function(t){var n=t;e.isString(t)&&(n=function(e){return e[t]});var r=[];return this.forEach((function(e){var t=n(e);-1==r.indexOf(t)&&r.push(t)})),r},groupBy:function(e){return this.reduce((function(t,n){var r=n[e];return(t[r]=t[r]||[]).push(n),t}),{})},toDictionary:function(e,t){return this.reduce((function(n,r){return n[r[e]]=t?r[t]:r,n}),{})}})}(n),function(e){function t(e,t){return e.split(/\.|\[|\]/).reduce((function(e,t){return""===t?e:void 0===e[t]?e===self?"":self:e[t]}),t||self)}function r(i,o){var a=e.$(i),s=e.$("[xfor]",a),c=e.$("[xbind]",a).filter(e=>!s.includes(e));return a.attributes.xbind&&c.push(a),c.forEach((function(e){String.trimValues(e.attributes.xbind.value.split(";")).forEach((function(n){if(""!==n){var r=String.trimValues(n.split(":")),i=String.trimValues(r[1].split(/\s|\,/)),a=t(i[0],o);if("function"==typeof a){var s=i.slice(1).reduce((function(e,n){return e.push("@"==n.charAt(0)?t(n.slice(1),o):n),e}),[o,e]);a=a.apply(o,s)}else if(i[1]){a=t(i[1],o)(a,i[2],o,e)}e[r[0]]=a}}))})),s.forEach(e=>{let i=e.parentNode;t(e.attributes.xfor.value,o).map(t=>{let a=n.clone(t);a.parentScope=o;let s=r(e.cloneNode(!0),a);i.insertBefore(s,e)}),i.removeChild(e)}),i}e.templates={getValue:t,merge:function(e,n,r){return e.replace(/{([^{]+)?}/g,(function(e,r){if(r.indexOf(":")>0){var i=r.split(":");return i[0]=t(i[0],n),i[1]=t(i[1],n),i[0](i[1],n)}var o=t(r,n);return"function"==typeof o?o(n):o}))},execute:function(t,n,i){var o=e.$(t),a=n.reduce((function(e,t,n){var a={index:n,data:t,node:r(o.cloneNode(!0),t)};return e.nodes.push(a),i||e.html.push(a.node.outerHTML.replace(/xbind="[^"]*"/g,"")),e}),{nodes:[],html:[]});return i?a.nodes:a.html.join("")},fill:r}}(n),function(e){e.ajax={},e.apply(e.ajax,{get:function(e,t){return new Promise((n,r)=>{var i=this.createXMLHttpRequest();i.open("GET",e,!0),t&&t(i),i.setRequestHeader("If-Modified-Since","Thu, 01 Jan 1970 00:00:00 GMT"),i.setRequestHeader("Cache-Control","no-cache"),i.onreadystatechange=function(){4==i.readyState&&n(i.responseText)},i.onerror=function(e){r(e)},i.send(null)})},post:function(e,t,n){var r=this.createXMLHttpRequest();r.open("POST",e,!0),r.onreadystatechange=function(){4==r.readyState&&n(r.responseText)},r.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset:ISO-8859-1"),r.send(t)},callWebMethod:function(e,t,n){var r=this.createXMLHttpRequest();r.open("POST",e,!0),r.onreadystatechange=function(){4==r.readyState&&n(r.responseText)},r.setRequestHeader("Content-type","application/json; charset=utf-8"),r.send(t)},createXMLHttpRequest:function(){return new XMLHttpRequest}})}(n),function(e){var t;e.tabbly={execute:function(e){var n;t={sections:[],groups:[],details:[]};var r="",i="",o=!1;function a(e){return e&&e.trim().startsWith("@")?t[e.trim().split("@")[1].trim()]||"":e?e.trim():""}function s(e){for(var t=/([a-zA-Z0-9_\-]*)\s*:\s*('[^']*'|[^\s]*)/g,n={},r=t.exec(e);null!=r;)n[r[1].trim()]=a(r[2].trim().replace(/^'([^']*)'$/g,"$1")),r=t.exec(e);return n}return e.split("\n").forEach((function(e){!function(e,t){if(!r&&!e.trim())return function(){};var a;if(!/DEFINE|#|CREATE|SET|FUNCTION|END/.test(e)){if(r)return i+=t,i+="\n",function(){};throw new Error("Tabbly : Unrecognized text")}if(/^#/.test(e))return function(){};if(/^SET (\w.*)/.test(e)){var c=e.match(/^SET (\w.*)$/);return o=!0,r=c[1].trim(),i="",function(){}}if(/^FUNCTION (\w.*)/.test(e)){var c=e.match(/^FUNCTION (\w.*)$/);return o=!1,r=c[1].trim(),i="",function(){}}if(/^END/.test(e)){var u=i,l=r;return r=i="",o?(o=!1,function(e){n[l]=u.trim()}):function(e){e[l]=new Function("ctx",u)}}if(/^DEFINE\s\s*(\w.*)\s*=\s*(.*)$/.test(e)){c=e.match(/^DEFINE\s\s*([a-zA-Z0-9_\-]*)\s*=\s*(.*)$/);return a=c,function(e){e[a[1].trim()]=a[2].trim()}}if(!/^CREATE\s\s*(\w*) (.*)$/.test(e))throw new Error("Tabbly : Unrecognized text after DEFINE");return"section"==(c=e.match(/^CREATE\s\s*(\w*) (.*)$/))[1]?function(){var e=c;return function(t){t.sections.push(s(e[2])),n=t.sections[t.sections.length-1]}}():"group"==c[1]?function(){var e=c;return function(t){t.groups.push(s(e[2])),n=t.groups[t.groups.length-1]}}():"detail"==c[1]?function(){var e=c;return function(t){t.details.push(s(e[2])),n=t.details[t.details.length-1]}}():void 0}(e.trim(),e)(t)})),{context:t}}}}(n),function(e){e.ReportEngine={},e.ReportEngine.generateReport=function(t,n,r){r.message({type:"report.begin"});var i=t||e.ReportEngine.rd,o=i.context.parseData?i.context.parseData(i,n,r.message):n;r.message({type:"report.log.message",text:"Inicializando..."}),console.time("Render");var a=function(t,n,i){r.send(e.templates.merge(t,n,i))};function s(){h.forEach((function(e,t){if(!(t<u))return r.message({type:"report.sections.group.header",value:e.id}),e.definition.header?a(e.definition.header,e,"compiled_headerfn"):e.definition.headerValueProvider?r.send(e.definition.headerValueProvider(e)):void 0}))}function c(e){var t=h.map((function(e){return e}));e&&t.splice(0,e),t.reverse().forEach((function(e){return r.message({type:"report.sections.group.footer",value:e.id}),e.definition.footer?a(e.definition.footer,e,"compiled_footerfn"):e.definition.footerValueProvider?r.send(e.definition.footerValueProvider(e)):void 0}))}var u=-1,l=function(){var e=JSON.parse(i.context.summary||"{}");return i.context.onInitSummaryObject?i.context.onInitSummaryObject(e):e}(),d=(i.context.sections||[]).where({type:"header"}),f=(i.context.sections||[]).where({type:"total"}),p=((i.context.sections||[]).where({type:"footer"}),i.context.details||[]),h=i.context.groups.map((function(t,n){return{name:"G"+(n+1),rd:i,definition:t,current:"",data:e.clone(l),init:function(t){var n=t[this.definition.key].toString(),r=self.BS[this.name];r.all[n]=r.all[n]||[],r.all[n].push(t),r.recordCount=1,!1!==this.__resume&&(this.__resume?e.ReportEngine.copy(t,this.data):(this.__resume=Object.keys(this.data).length>0)&&e.ReportEngine.copy(t,this.data))},sum:function(t){var n=t[this.definition.key].toString(),r=self.BS[this.name];r.all[n]=r.all[n]||[],r.all[n].push(t),r.recordCount+=1,!1!==this.__resume&&e.ReportEngine.sum(t,this.data)},test:function(e){return e[this.definition.key]==this.current}}}))||[];self.BS={reportDefinition:i,mediator:r},i.context.iteratefn&&(r.message({type:"report.log.message",text:"Inicializando elementos..."}),o.forEach(i.context.iteratefn)),i.context.orderBy&&(r.message({type:"report.log.message",text:"Ordenando datos..."}),o.sortBy(i.context.orderBy,!1)),self.BS={recordCount:0,G0:e.clone(l),dataSet:o,reportDefinition:i,mediator:r},h.forEach((function(e,t){e.current=o&&o[0]?o[0][e.definition.key]:"",self.BS[e.name]={recordCount:0,all:{}}})),i.context.onStartfn&&i.context.onStartfn(self.BS),[i.context.sections,i.context.details,i.context.groups].reduce((function(e,t){return e.concat(t)}),[]).map((function(t){t.valueProviderfn&&(t.valueProvider=e.templates.getValue(t.valueProviderfn,self),delete t.valueProviderfn),t.footerValueProviderfn&&(t.footerValueProvider=e.templates.getValue(t.footerValueProviderfn,self),delete t.footerValueProviderfn),t.headerValueProviderfn&&(t.headerValueProvider=e.templates.getValue(t.headerValueProviderfn,self),delete t.headerValueProviderfn)})),r.message({type:"report.render.rows"}),r.message({type:"report.log.message",text:"Generando informe..."}),d.forEach((function(e){return r.message({type:"report.sections.header",value:e}),e.template?a(e.template,e,"compiledfn"):e.valueProvider?r.send(e.valueProvider(e)):void 0})),o.length>0&&s(),o.forEach((function(t,n){if(self.BS.recordCount++,self.BS.isLastRow=o.length===self.BS.recordCount,self.BS.isLastRowInGroup=self.BS.isLastRow,self.BS.percent=self.BS.recordCount/o.length*100,self.BS.previous=self.BS.data||t,self.BS.data=t,h.forEach((function(e,t){self.BS[e.name].data=Object.create(e.data)})),e.ReportEngine.sum(t,self.BS.G0),i.context.onRowfn&&i.context.onRowfn(self.BS),r.message({type:"report.render.row",text:self.BS.percent.toFixed(1)+" %",value:self.BS.percent}),h.every((function(e){return e.test(t)}))?h.forEach((function(e){e.sum(t)})):(h.some((function(e,n){return!e.test(t)&&(c(u=n),h.forEach((function(e,r){r>=u?(e.init(t),u=n):e.sum(t)})),!0)})),h.forEach((function(e){e.current=t[e.definition.key]})),i.context.onGroupChangefn&&i.context.onGroupChangefn(self.BS),r.message({type:"report.sections.group.change",value:"__groups"}),s()),h.length&&!self.BS.isLastRow){var l=o[self.BS.recordCount];self.BS.isLastRowInGroup=!h.every((function(e){var t=e.definition.key;return l[t]===self.BS.data[t]}))}p.forEach((function(e){return r.message({type:"report.sections.detail",value:e.id}),e.template?a(e.template,e,"compiledfn"):e.valueProvider?r.send(e.valueProvider(e)):void 0}))})),o.length>0&&(self.BS.previous=self.BS.data,c()),f.forEach((function(e){return r.message({type:"report.sections.total",value:e.id}),e.template?a(e.template,e,"compiledfn"):e.valueProvider?r.send(e.valueProvider(e)):void 0})),r.message({type:"report.render.end"}),r.message({type:"report.end"}),r.flush(),console.timeEnd("Render")},e.ReportEngine.copy=function(e,t){Object.keys(t).map((function(n){t[n]=e[n]}))},e.ReportEngine.sum=function(e,t){Object.keys(t).map((function(n){t[n]+=e[n]}))},e.ReportEngine.compute=function(e,t){return e.reduce((function(e,n){return e+n[t]}),0)},e.ReportEngine.group=function(e,t){var n=e,r=function(e,i){return n.distinct((function(t){return t[e]})).forEach((function(r){t[r]=n.reduce((function(t,n,o,a){return n[e]==r?t+n[i]:t}),0)})),r};return r}}(n)}(c),c.Pol.APP_PATH="/notas-app/";var u=c.Pol;const l="\n  <h1>{title}</h1>\n";const d="  \n  <p>{text}</p>\n";const f='  \n  <a href=""          route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button selected">Inicio</a>\n  <a href="el-tiempo" route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button">El tiempo</a>\n  <a href="list"      route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button">Notas</a>\n  <a href="note"      route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button">+</a>\n  <a href="about"     route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button w3-right">?</a>';class p{constructor(e){this.dbname=e,this.db=""}openDb(){return new Promise((e,t)=>{let n=window.indexedDB.open(this.dbname,1);n.onsuccess=t=>{this.db=t.target.result,e(this.db)},n.onerror=e=>{t("Error")},n.onupgradeneeded=e=>{this.db=e.target.result;try{this.db.objectStoreNames&&this.db.objectStoreNames.contains("notas")&&this.db.deleteObjectStore("notas")}catch(e){console.log(e)}this.db.createObjectStore("notas",{keyPath:"key"})}})}readAll(e){return new Promise((t,n)=>{var r=[];this.db.transaction(e,"readonly").objectStore(e).openCursor(IDBKeyRange.lowerBound(0)).onsuccess=e=>{var n=e.target.result;n?(r.push(n.value),n.continue()):t(r)}})}save(e,t){return new Promise(n=>{var r;(r=this.db.transaction(e,"readwrite").objectStore(e).put(t)).onsuccess=e=>{n(t)},r.onerror=e=>{console.log(e)}})}delete(e,t){return new Promise(n=>{var r;(r=this.db.transaction(e,"readwrite").objectStore(e).delete(t)).onsuccess=e=>{n()},r.onerror=e=>{console.log(e)}})}readOne(e,t){return new Promise(n=>{var r;(r=this.db.transaction(e,"readwrite").objectStore(e).get(t)).onsuccess=e=>{n(e.target.result)},r.onerror=e=>{console.log(e)}})}}const h='\n<div class="w3-border-bottom w3-animate-left" style="padding:0; font-size:14px;" id="note-{note.key}">\n  <div class="w3-container" style="padding:5px">\n    <div on-click="expandCollapse"><b>{note.title}</b><i class="w3-right w3-large fa fa-caret-down"></i></div>\n  </div>\n  <div class="w3-container" style="display:none;padding:0 4px">\n    <p id="editp-{note.key}" on-click="editNote" style="padding:2px;min-height:4em;margin:2px 0;white-space: pre-wrap">{formatText:note.text}</p>\n    <div class="w3-bar w3-center" style="padding:4px 0;">\n      <button type="button" id="delete-{note.key}" on-click="deleteNote" class="w3-button w3-border"><i class="fa fa-trash" aria-hidden="true"></i></button>\n      <button type="button" id="fav-{note.key}" on-click="saveFavorites" class="w3-button w3-border"><i class="fa {css:note.key}" aria-hidden="true"></i></button>\n      <button type="button" id="edit-{note.key}" on-click="editNote" class="w3-button w3-border"><i class="fa fa-edit" aria-hidden="true"></i></button>\n    </div>\n  </div>\n</div>';const m=o.TOPICS;var v=function(e){let t,n,r={root:{},init:function(e){},render:function(e){return this.root=u.build("div",'  \n<div class="w3-container w3-margin-bottom w3-animate-left">\n  <h2>Nueva nota</h2>\n  <form class="w3-margin-bottom">\n    <label for="txt-title">Título</label>\n    <input on-change="onChange" class="w3-input w3-border" type="text" id="txt-title" placeholder="Introduce un título" >\n    <label for="txt-text">Texto</label>\n    <textarea on-change="publish" class="w3-input w3-border" id="txt-text" rows="4" placeholder="Contenido de la nota"></textarea>\n  </form>\n  <div class="w3-container w3-margin-bottom w3-center w3-animate-zoom">\n    <button type="button" id="btn-grabar" class="w3-button w3-black">Grabar</button>\n  </div>\n</div>\n'),this.root},mounted:function(a){!function(){let a=r.root.firstElementChild;a.style.display="none",s.addEventListeners(a,{},{onChange:e=>{console.log("onChange_fn",e.value)}}),o.subscribe(m.VALUE_CHANGE,(e,t)=>{console.log("value.change",t.value)}),n=new p("notas-app.db"),n.openDb().then(()=>{let o=function(){a.style.display="",u.$("btn-grabar").onclick=i},s=e.router.current.params[1]||"";s?n.readOne("notas",parseInt(s)).then(e=>{t=e,u.$("txt-title").value=t.title,u.$("txt-text").value=t.text,u.$("h2",r.root)[0].innerHTML="Edición de nota",o()}):o()})}()}};function i(){var r=u.$("txt-title"),i=u.$("txt-text"),o=r.value.trim(),a=i.value.trim();if(!o)return void setTimeout(()=>r.focus(),20);if(!a)return void setTimeout(()=>i.focus(),20);let s=new Date;n.save("notas",{key:t?t.key:s.valueOf(),date:t?t.date:"{0}/{1}/{2}".format(s.getDate(),s.getMonth,s.getFullYear()),title:o,text:a}).then(t=>{e.router.navigateTo("list")})}return r};const g=o.TOPICS;const w=o.TOPICS,b=[{title:"Notas App",init:function(e){},render:function(e){let t={id:"appHeader",innerHTML:l.format(this),className:"w3-container w3-teal"};return u.build("header",t)},mounted:function(e){}},function(){let e={root:{},id:"menu.component.ref",init:function(e,t){this.router=t},render:function(e){let t={id:"appMenu",innerHTML:f.format(this),className:"w3-bar w3-black"};return this.root=u.build("nav",t),this.root},mounted:function(n){s.addEventListeners(e.root,e.eventHandlers,{router:e.router,syncr:t})},eventHandlers:{sync:t}};function t(e,t){t.name===e.href.split("/").lastItem()?e.classList.add("selected"):e.classList.remove("selected")}return e}(),{root:{},init:function(e){},render:function(e){let t={id:"app-content-container",innerHTML:"",className:"w3-container",style:{minHeight:"440px",padding:"0 0 60px 0"}};return u.build("section",t)},mounted:function(e){!function(){function e(){var e=document.getElementById("appMenu");if(!e.className.includes("sticky")){var t=e.offsetTop;window.onscroll=function(){window.pageYOffset>=t?e.classList.add("sticky"):e.classList.remove("sticky")}}}var t,n,r,i;window.addEventListener("resize",(t=e,n=150,function(){var e=this,o=arguments,a=function(){i=null,r||t.apply(e,o)},s=r&&!i;clearTimeout(i),i=setTimeout(a,n),s&&t.apply(e,o)}),!1),e()}()}},{text:"© Rafael Castro Gómez, 2020",init:function(e){},render:function(e){let t={id:"appFooter",innerHTML:d.format(this),className:"w3-container w3-teal w3-center"};return u.build("footer",t)},mounted:function(e){}}],y={routes:[],addRoute:function(e,t,n){return this.routes.push({name:e,path:t,controler:n}),this},getRoute:function(e){return this.routes.where((function(t){let n=t.path.exec(e);return n&&(t.params=n.map(e=>e)),n}))[0]},navigateTo:function(e){this.current=this.getRoute(e);let t="{origin}{0}{1}".format(u.APP_PATH,e,location);window.history.pushState({},e,t),C()},normalizePath:function(e){return e.replace(document.baseURI,"")},sync:function(){this.current=this.getRoute(this.normalizePath(window.location.href)),C()},current:{}};y.addRoute("list",/list$/,(function(e){let t,n,r=[],i=[],o={root:{},init:function(e){},render:function(e){return this.root=u.build("div",'\n<div notas-container style="padding:0; margin-bottom:43px;" class="w3-animate-left"></div>\n<button btn-add-note on-click="addNote" class="w3-button w3-black w3-circle">＋</button>'),n=this.root.firstElementChild,this.root},mounted:function(e){t=new p("notas-app.db"),t.openDb().then(e=>{a()}),s.addEventListeners(o.root,o.eventHandlers)},eventHandlers:{addNote:function(t,n){e.router.navigateTo("note")},deleteNote:function(e,n){let i=parseInt(e.id.split("-")[1]),o=r.where({key:i})[0],a=document.getElementById("note-{0}".format(i));t.delete("notas",i).then(()=>{r.remove(o),a.parentNode.removeChild(a)})},expandCollapse:function(e,t){let n=e.parentNode.nextElementSibling.style;"none"==n.display?(n.display="",e.querySelector("i").classList.remove("fa-caret-down"),e.querySelector("i").classList.add("fa-caret-up")):(n.display="none",e.querySelector("i").classList.remove("fa-caret-up"),e.querySelector("i").classList.add("fa-caret-down"))},saveFavorites:function(e,t){let n=e.firstElementChild,r=e.id.split("-")[1];i.includes(r)?(i.remove(r),n.classList.add("fa-star-o"),n.classList.remove("fa-star")):(i.push(r),n.classList.remove("fa-star-o"),n.classList.add("fa-star"));window.localStorage.setItem("favorites",i.join("-"))},editNote:function(t,n){e.router.navigateTo("note/"+t.id.split("-")[1])}}};function a(){t.readAll("notas").then(e=>{r=e.reverse(),i=(window.localStorage.getItem("favorites")||"").split("-"),n.innerHTML="",r.map(e=>{let t={note:e,formatText:function(e){return e},css:function(e){return i.includes(e.toString())?"fa-star":"fa-star-o"}};return u.build("div",h.format(t))}).map(e=>e.firstElementChild).forEach(e=>{n.appendChild(e)}),s.addEventListeners(n,o.eventHandlers)})}return o})).addRoute("about",/about$/,(function(){return{root:{},init:function(e){},render:function(e){return this.root=u.build("div",'  \n<div class="w3-container w3-margin-bottom w3-animate-left">\n  <h1>Sobre Notas App</h1>\n  <p style="text-indent:1em;">\n    Notas App es una prueba de concepto de lo que podría ser un <span class="w3-bold w3-italic">framework</span> \n    sencillo con el cual desarrollar aplicaciones <span class="w3-bold w3-italic">SPA</span> basadas únicamente en <span class="w3-bold">HTML5</span> y <span class="w3-bold">JavaScript</span>.\n  </p>\n  <p style="text-indent:1em;">\n    Estas aplicaciones serían subceptibles de ser instaladas en dispositivos móviles como una <span class="w3-bold w3-italic">PWA</span>.\n  </p>\n  <ul class="w3-ul w3-border">\n    <li><h2>Referencias</h2></li>\n    <li><a href="https://es.wikipedia.org/wiki/Single-page_application" target="_blank">SPA (Single-page application)</a></li>\n    <li><a href="https://es.wikipedia.org/wiki/Progressive_Web_Apps" target="_blank">PWA (Progressive Web Apps)</a></li>\n    <li><h2>Repositorio</h2></li>\n    <li><a href="https://github.com/rcastrogo/notas-app" target="_blank">https://github.com/rcastrogo/notas-app</a></li>\n  </ul>\n  <p style="text-indent:1em;">\n    Para su desarrollo no se han utilizado ninguno de los <span class="w3-bold w3-italic">frameworks</span> existentes como pueden ser Angular, React o Vue.js.\n  </p>\n</div>\n<div class="w3-container w3-margin-bottom w3-center">\n  <button type="button" about-btn-back class="w3-button w3-black">Volver</button>\n</div>\n'),this.root},mounted:function(e){e.querySelector("[about-btn-back]").onclick=()=>{history.back()}}}})).addRoute("note",/note$/,v).addRoute("note",/note\/(\d{13})$/,v).addRoute("el-tiempo",/el-tiempo$/,(function(e){let t,n,r,i,a={root:{},data:{municipios:{45022:"Buenaventura (TOLEDO)",28079:"Madrid"}},init:function(e){},render:function(e){return this.root=u.build("div",'  \n<div class="w3-container w3-margin-bottom w3-animate-bottom">\n  <div class="w3-border w3-margin-top">\n    <button on-click="expandCollapse" class="w3-button w3-block w3-left-align">\n      <span on-publish="municipio.change:css">Buenaventura</span><i class="w3-right w3-large fa fa-caret-down"></i>\n    </button>\n    <div class="w3-hide">\n      <ul class="w3-ul">\n        <li on-click="requestData" id="loc-45022">Buenaventura</li>\n        <li on-click="requestData" id="loc-28079">Madrid</li>\n      </ul>\n    </div>\n  </div>\n  <div class="w3-margin-top w3-hide" id="aemetApi-container" style="padding:0;">\n    <div id="progress-bar-container">\n      <div class="w3-center">Cargando datos desde la AEMET...</div>\n      <div class="w3-border">\n        <div id="progress-bar" class="w3-green" style="height:24px;width:0%"></div>\n      </div>\n    <div>\n  </div>\n</div>'),this.root},mounted:function(e){t=u.$("aemetApi-container"),r=u.$("progress-bar"),n=u.$("progress-bar-container"),s.addEventListeners(a.root,a.eventHandlers,{css:(e,t)=>{console.log(e)}}),l()},dispose:function(){clearInterval(i)},eventHandlers:{expandCollapse:d,requestData:function(e,t){let n=e.parentNode.parentNode.previousElementSibling;c=e.id.split("-")[1],o.publish(g.MUNICIPIO_CHANGE,a.data.municipios[c]),d(n),l()}}};let c=45022;function l(){!function(){let e=0;r.style.width="{0}%".format(e),i&&clearInterval(i),i=setInterval(()=>{e=(e+9)%100,r.style.width="{0}%".format(e)},300)}(),t.innerHTML="",t.appendChild(n),t.classList.remove("w3-hide");const o="https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/"+c+"?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyY2FzdHJvZ29AaG90bWFpbC5jb20iLCJqdGkiOiJmZmI3OWJjZi1lZWQwLTQwODMtYTkwZC04MmNkMmRhMTA2MjQiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTU4MjcyNTg3NiwidXNlcklkIjoiZmZiNzliY2YtZWVkMC00MDgzLWE5MGQtODJjZDJkYTEwNjI0Iiwicm9sZSI6IiJ9.bPhAJDutP62_75peo3qr88Qs1JQ4jmu6TWXHjvIzZx0";u.ajax.get(o,e=>{e.setRequestHeader("Accept","application/javascript")}).then(e=>JSON.parse(e)).then(e=>{if(200==e.estado)return u.ajax.get(e.datos);throw new Error(e.descripcion)}).then(n=>{var r;t.innerHTML="",(r=function(){const e='\n  <div class="w3-container w3-teal w3-center w3-small w3-padding">\n    {fn.formatFecha:elaborado}\n  </div>\n  <div style="padding:0">\n    <h3 class="w3-center w3-border-bottom">{fn.formatFecha:prediccion.dia[0].fecha:day}</h3>\n    <div>{fn.showDay:rows-0}</div>\n    <div class="w3-small w3-teal w3-padding w3-center">\n      <div><i class="fa fa-arrow-up"></i> {prediccion.dia[0].orto}</div>\n      <div><i class="fa fa-arrow-down"></i> {prediccion.dia[0].ocaso}</div>\n    </div>\n  </div>\n  <br/>\n  <div style="padding:0">\n    <h3 class="w3-center w3-border-bottom">{fn.formatFecha:prediccion.dia[1].fecha:day}</h3>\n    <div>{fn.showDay:rows-1}</div>\n    <div class="w3-small w3-teal w3-padding w3-center">\n      <div><i class="fa fa-arrow-up"></i> {prediccion.dia[1].orto}</div>\n      <div><i class="fa fa-arrow-down"></i> {prediccion.dia[1].ocaso}</div> \n    </div>\n  </div>\n  <br/>\n  <div style="padding:0">\n    <h3 class="w3-center w3-border-bottom">{fn.formatFecha:prediccion.dia[2].fecha:day}</h3>\n    <div>{fn.showDay:rows-2}</div>\n    <div class="w3-small w3-teal w3-padding w3-center">\n      <div><i class="fa fa-arrow-up"></i> {prediccion.dia[2].orto}</div>\n      <div><i class="fa fa-arrow-down"></i> {prediccion.dia[2].ocaso}</div>\n    </div>\n  </div>';let t={formatFecha:function(e,t,n){let r=e.split("T");if(n&&"date"===n[0])return r[0];if(n&&"time"===n[0])return r[1];if(n&&"day"===n[0]){r=r[0].split("-");let e=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sabado"],t=new Date(~~r[0],~~r[1]-1,~~r[2]).getDay();return"{0} {1}".format(e[t],~~r[2])}return"{1} - {0}".format(...r)},showDay:function(e){return e.reduce((function(e,n){let r='\n          <tr class="w3-center">\n            <td>{row.periodo}:00</td>\n            <td>{row.cielo}</td>\n            <td>{row.temperatura}</td>\n            <td>{fn.formatZero:row.lluvia}</td>\n            <td><i class="fa fa-2x fa-long-arrow-right pol-{row.viento[0]}"></i> {row.viento[1]}</td>\n          </tr>',i={row:n,fn:t};return e.append(r.format(i))}),u.stringBuilder().append('<table class="w3-table w3-bordered w3-small w3-striped">').append('<tr class="w3-center w3-teal"><th>Hora</th><th>Cielo</th><th>Temp<br>ºC</th><th>Lluvia<br>mm</th><th>Viento<br>km/h</th></tr>')).append("</table>").value},formatZero:function(e){return"0"==e?"":e}};return{root:{},init:function(e){},render:function(t){return this.root=u.build("div",e.format(this.data)),this.root},mounted:function(e){},withData:function(e){let n=(r=new Date,"{0#0000}-{1#00}-{2#00}-{3#00}".format(r.getFullYear(),r.getMonth()+1,r.getDate(),r.getHours()));var r;return this.data=JSON.parse(e)[0],this.data.fn=t,this.data.prediccion.dia.reduce((function(e,t,r){let i=t.fecha.fixDate("T"),o=[].concat(t.estadoCielo.map((function(e){return{t:"c",periodo:e.periodo,value:e.descripcion}})),t.temperatura.map((function(e){return{t:"t",periodo:e.periodo,value:e.value}})),t.precipitacion.map((function(e){return{t:"p",periodo:e.periodo,value:e.value}})),t.vientoAndRachaMax.where(e=>e.velocidad).map((function(e){return{t:"v",periodo:e.periodo,value:[e.direccion[0],e.velocidad[0]]}}))).where(e=>"{0}-{1}".format(i,e.periodo)>=n).groupBy("periodo");return e["rows-{0}".format(r)]=Object.keys(o).reduce((function(e,t){let n=o[t];return e.push({periodo:t,cielo:n.where({t:"c"})[0].value,temperatura:n.where({t:"t"})[0].value,lluvia:n.where({t:"p"})[0].value,viento:n.where({t:"v"})[0].value}),e}),[]).sortBy("periodo"),e}),this.data),this}}}().withData(n)).init(e),t.appendChild(r.render()),r.mounted(e)}).catch(e=>{console.log(e)})}function d(e,t){let n=e.nextElementSibling.classList;n.contains("w3-hide")?(n.remove("w3-hide"),e.querySelector("i").classList.remove("fa-caret-down"),e.querySelector("i").classList.add("fa-caret-up")):(n.add("w3-hide"),e.querySelector("i").classList.remove("fa-caret-up"),e.querySelector("i").classList.add("fa-caret-down"))}return a})).addRoute("",/$/,(function(){let e={root:{},init:function(e){},render:function(e){return this.root=u.build("div",'  \n  <div class="w3-container w3-center w3-animate-left" style="padding-top:60px;">\n    <img src="./assets/img/logo.png" alt="logo" style="width: 300px">\n    <p>La app que te permite almacenar todas tus notas en el móvil!!!</p>\n  </div>').firstElementChild,this.root},mounted:function(e){},dispose:function(){}};return e})),function(){const e=u.$("appContent");b.forEach(t=>{t.init&&t.init(e,y),e.appendChild(t.render(e)),t.mounted&&t.mounted(e)})}();const x=u.$("app-content-container");let S,E;function C(){let e=y.current.controler;E&&S==e||(E&&E.dispose&&E.dispose(),x.innerHTML="",E=e({router:y}),S=e,E.init&&E.init(),x.appendChild(E.render()),E.mounted&&E.mounted(x),o.publish(w.VIEW_CHANGE,y.current))}y.sync(),window.onpopstate=function(){y.sync()},window.addEventListener("load",()=>{if("serviceWorker"in navigator)try{navigator.serviceWorker.register("serviceWorker.js"),console.log("Service Worker Registered")}catch(e){console.log("Service Worker Registration Failed")}})}]);