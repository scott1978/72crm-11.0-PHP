(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-531a"],{"2xBc":function(t,e,n){"use strict";var i=n("Mb4B");n.n(i).a},"5e4S":function(t,e,n){t.exports={xrColorPrimary:"#2362FB"}},"67Ak":function(t,e,n){"use strict";n.r(e);var i=n("6iAj"),o=n("KTTK"),a=n("glbJ"),r=n("ZoMv"),s=n("7Qib"),c={name:"Print",components:{Tinymce:a.a},props:{},data:function(){return{loading:!1,isPreview:!1,templateOptions:[],templateId:"",typeId:"",previewOptions:["word","pdf"],perviewType:"word",content:"",historyData:null,iframeUrl:"",iframeHeight:document.documentElement.clientHeight-170,srcData:null}},computed:{perviewTypeName:function(){return{word:"Word",pdf:"PDF"}[this.perviewType]}},created:function(){"history"==this.$route.query.type?this.getRecordDetail():(this.typeId=this.$route.query.id,this.getTemplateOptions(r.a.convertKeyToType(this.$route.query.module))),window.addEventListener("resize",this.changeIframeHeight)},beforeRouteUpdate:function(t,e,n){this.content="",n()},beforeDestroy:function(){window.removeEventListener("resize",this.changeIframeHeight)},methods:{changeIframeHeight:function(){this.iframeHeight=document.documentElement.clientHeight-170},getTemplateOptions:function(t){var e=this;this.loading=!0,Object(i.H)({type:t,pageType:0}).then(function(t){e.templateOptions=t.data.list||[],"history"!=e.$route.query.type&&(e.templateOptions.length?(e.templateId=e.templateOptions[0].id,e.getDetail()):e.templateId=""),e.loading=!1}).catch(function(){e.loading=!1})},getDetail:function(){var t=this;this.loading=!0,Object(i.B)({template_id:this.templateId,action_id:this.typeId,type:r.a.convertKeyToType(this.$route.query.module)}).then(function(e){t.loading=!1,t.content=e.data}).catch(function(){t.loading=!1})},getRecordDetail:function(){var t=this;this.loading=!0,Object(i.E)({record_id:this.$route.query.id,type:20}).then(function(e){t.loading=!1;var n=e.data||{};t.historyData=n,t.templateId=n.template_id,t.typeId=n.typeId,t.getTemplateOptions(n.type),t.content=n.content||""}).catch(function(){t.loading=!1})},compactPrint:function(){this.$refs.editor.editor.execCommand("mcePrint"),this.savePrintRecord()},printPreviewClick:function(){var t=this;this.loading=!0,Object(i.A)({type:this.perviewType,content:this.content}).then(function(e){t.loading=!1;var n=e.data,i="/crm/preview/previewPDF?key="+n;Object(o.k)({key:n},i).then(function(e){t.iframeUrl=window.URL.createObjectURL(e.data)}).catch(function(){}),t.srcData=n,t.isPreview=!0}).catch(function(){t.loading=!1})},savePrintRecord:function(){this.templateId&&this.typeId&&Object(i.F)({template_id:this.templateId,action_id:this.typeId,recordContent:this.content,type:r.a.convertKeyToType(this.$route.query.module)}).then(function(t){}).catch(function(){})},hidenView:function(){this.$emit("close")},handleClick:function(t){if("goback"==t)this.isPreview=!1;else if("print"==t)document.getElementById("wkPrint").contentWindow.print(),this.savePrintRecord();else if("download"==t&&this.srcData){var e=this.perviewType,n={key:this.srcData,type:"word"===e?2:1};e="word"===e?"doc":"pdf",Object(o.d)(n).then(function(t){var n=new Blob([t.data],{type:""});Object(s.e)(n,"文档."+e)}).catch(function(){})}}}},l=(n("2xBc"),n("KHd+")),d=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"wk-print-container",class:{"is-perview":t.isPreview}},[n("el-header",[t.isPreview?[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleClick("download")}}},[t._v(t._s(t.perviewTypeName+" 下载"))]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleClick("print")}}},[t._v("打印")]),t._v(" "),n("el-button",{on:{click:function(e){t.handleClick("goback")}}},[t._v("取消")])]:[n("span",{staticClass:"select-label"},[t._v("选择模版")]),t._v(" "),n("el-select",{staticClass:"handle-item-content",staticStyle:{width:"170px"},on:{change:t.getDetail},model:{value:t.templateId,callback:function(e){t.templateId=e},expression:"templateId"}},t._l(t.templateOptions,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),n("span",{staticClass:"select-label"},[t._v("选择模版")]),t._v(" "),n("el-select",{staticClass:"handle-item-content",staticStyle:{width:"80px"},model:{value:t.perviewType,callback:function(e){t.perviewType=e},expression:"perviewType"}},t._l(t.previewOptions,function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),t._v(" "),n("el-button",{staticClass:"preview-button",attrs:{type:"primary"},on:{click:t.printPreviewClick}},[t._v("打印预览")])]],2),t._v(" "),n("el-main",[n("div",{staticClass:"main-container"},[n("div",{staticClass:"main-content"},[n("iframe",{directives:[{name:"show",rawName:"v-show",value:t.isPreview,expression:"isPreview"}],staticStyle:{width:"100%","margin-top":"54px"},attrs:{id:"wkPrint",height:t.iframeHeight,src:t.iframeUrl,scrolling:"no",frameborder:"0"}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isPreview,expression:"!isPreview"}],staticClass:"main-tips"},[t._v("您可以在当前页面对模版文字进行调整，确认无误后可进行打印")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isPreview,expression:"!isPreview"}],staticClass:"main-content"},[n("tinymce",{ref:"editor",staticClass:"rich-txt",attrs:{toolbar:[],init:{statusbar:!1,plugins:"print autoresize",extended_valid_elements:"span[class|title|wktag|style|contenteditable]",content_style:" body {padding: 60px !important;width: 595px; margin: 0 auto;} p { margin: 5px 0;}"}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])])],1)},[],!1,null,"7fe65328",null);d.options.__file="index.vue";e.default=d.exports},FzPI:function(t,e,n){"use strict";var i=n("5e4S");n.n(i).a},Mb4B:function(t,e,n){},glbJ:function(t,e,n){"use strict";var i,o=n("QbLZ"),a=n.n(o),r=n("KTTK"),s=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],c=function(t){return-1!==s.map(function(t){return t.toLowerCase()}).indexOf(t.toLowerCase())},l=function(t,e,n){var i=e.$props.value?e.$props.value:"",o=e.$props.initialValue?e.$props.initialValue:"";n.setContent(i||(e.initialized?e.cache:o)),e.$listeners.input&&function(t,e){var n=t.$props.modelEvents?t.$props.modelEvents:null,i=Array.isArray(n)?n.join(" "):n;t.$watch("value",function(n,i){e&&"string"==typeof n&&n!==i&&n!==e.getContent({format:t.$props.outputFormat})&&e.setContent(n)}),e.on(i||"change input undo redo",function(){t.$emit("input",e.getContent({format:t.$props.outputFormat}))})}(e,n),function(t,e,n){Object.keys(e).filter(c).forEach(function(i){var o=e[i];"function"==typeof o&&("onInit"===i?o(t,n):n.on(i.substring(2),function(t){return o(t,n)}))})}(t,e.$listeners,n),e.initialized=!0},d=0,u=function(t){var e=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++d+String(e)},p=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},h=function(){return{listeners:[],scriptId:u("tiny-script"),scriptLoaded:!1}},m=(i=h(),{load:function(t,e,n){i.scriptLoaded?n():(i.listeners.push(n),t.getElementById(i.scriptId)||function(t,e,n,i){var o=e.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=t,o.src=n;var a=function(){o.removeEventListener("load",a),i()};o.addEventListener("load",a),e.head&&e.head.appendChild(o)}(i.scriptId,t,e,function(){i.listeners.forEach(function(t){return t()}),i.scriptLoaded=!0}))},reinitialize:function(){i=h()}}),f=n("xKn5"),v=function(){return(v=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},g=function(t){return function(){var e,n,i,o=v(v({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(e=t.$props.init&&t.$props.init.plugins,n=t.$props.plugins,p(e).concat(p(n))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",function(n){return l(n,t,e)}),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(e)}});null!==(i=t.element)&&"textarea"===i.tagName.toLowerCase()&&(t.element.style.visibility=""),Object(f.a)().init(o)}},y=0,w={name:"Tinymce",components:{Editor:{props:{apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},created:function(){this.elementId=this.$props.id||u("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(f.a)())g(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"no-api-key",n=null===(i=this.$props.tinymceScriptSrc)||void 0===i?"https://cdn.tiny.cloud/1/"+e+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;m.load(this.element.ownerDocument,n,g(this))}var i},beforeDestroy:function(){null!==Object(f.a)()&&Object(f.a)().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=Object(f.a)())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&g(this)()},render:function(t){return this.inlineEditor?function(t,e,n){return t(n||"div",{attrs:{id:e}})}(t,this.elementId,this.$props.tagName):function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(t,this.elementId)}}},inheritAttrs:!1,props:{value:String,init:Object,height:[String,Number],plugins:[String,Array],toolbar:[String,Array],menubar:[String,Array]},data:function(){return{id:this.uuid(),dataValue:"",languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"},showInit:{}}},computed:{editor:function(){return window.tinymce.get(this.id)},showToolbar:function(){return void 0!=this.toolbar?this.toolbar:"undo redo | bold italic underline strikethrough | charmap emoticons | fontselect fontsizeselect formatselect | rowspacingtop rowspacingbottom | lineheight | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | table | forecolor backcolor removeformat | pagebreak | fullscreen  preview save print | insertfile image media link anchor codesample | ltr rtl"},showPlugins:function(){return void 0!=this.plugins?this.plugins:"print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons lineheight rowspacing"}},watch:{value:{handler:function(t){t!=this.dataValue&&(this.dataValue=t)},immediate:!0,deep:!0},dataValue:function(){this.$emit("input",this.dataValue)},init:{handler:function(){this.initTinymce()},immediate:!0,deep:!0}},mounted:function(){},methods:{initTinymce:function(){var t=a()({skin:"wukong",resize:!1,branding:!1,language:this.languageTypeList.zh,menubar:!!this.menubar&&this.menubar,body_class:"panel-body",image_advtab:!0,end_container_on_empty_block:!0,powerpaste_word_import:"clean",content_css:["./static/tinymce/css/tiny-wukong.css"],fontsize_formats:"12px 14px 16px 18px 24px 36px 48px 56px 72px",font_formats:"Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats;微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,quickbars_insert_toolbar:!1,nonbreaking_force_tab:!0,convert_urls:!1,toolbar_mode:"sliding",images_upload_handler:function(t,e,n,i){i(0),Object(r.z)({file:t.blob()}).then(function(t){e(t.data.url),i(100)}).catch(function(){n("出现未知问题，刷新页面，或者联系管理员")})}},this.init);void 0!=this.height&&(t.height=this.height),this.showInit=t},uuid:function(){var t=Date.now();return"wukong_"+Math.floor(1e9*Math.random())+ ++y+String(t)},imageSuccessCBK:function(t){var e=this;t.forEach(function(t){e.editor.insertContent('<img class="wscnph" src="'+t.url+'" >')})}}},b=(n("FzPI"),n("KHd+")),_=Object(b.a)(w,function(){var t=this,e=t.$createElement;return(t._self._c||e)("editor",t._g(t._b({ref:"mceEditor",attrs:{id:t.id,init:t.showInit,plugins:t.showPlugins,toolbar:t.showToolbar,"tinymce-script-src":"https://www.72crm.com/npm/tinymce/tinymce.min.js"},model:{value:t.dataValue,callback:function(e){t.dataValue=e},expression:"dataValue"}},"editor",t.$attrs,!1),t.$listeners))},[],!1,null,null,null);_.options.__file="index.vue";e.a=_.exports},xKn5:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return o});var i=function(){return"undefined"!=typeof window?window:t},o=function(){var t=i();return t&&t.tinymce?t.tinymce:null}}).call(this,n("yLpj"))}}]);