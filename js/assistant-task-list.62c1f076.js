(function(t){function s(s){for(var i,o,l=s[0],c=s[1],r=s[2],p=0,u=[];p<l.length;p++)o=l[p],e[o]&&u.push(e[o][0]),e[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(s);while(u.length)u.shift()();return n.push.apply(n,r||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],i=!0,l=1;l<a.length;l++){var c=a[l];0!==e[c]&&(i=!1)}i&&(n.splice(s--,1),t=o(o.s=a[0]))}return t}var i={},e={"assistant-task-list":0},n=[];function o(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,s,a){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)o.d(a,i,function(s){return t[s]}.bind(null,i));return a},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=s,l=l.slice();for(var r=0;r<l.length;r++)s(l[r]);var d=c;n.push([2,"chunk-vendors","chunk-common"]),a()})({2:function(t,s,a){t.exports=a("4282")},2227:function(t,s,a){},"41f9":function(t,s,a){"use strict";var i=a("2227"),e=a.n(i);e.a},4282:function(t,s,a){"use strict";a.r(s);var i=a("2b0e"),e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[a("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}}),t._m(0),t._m(1),a("div",{staticClass:"row pt-4 mt-3"},[a("div",{staticClass:"col-md-2 col-md-offset-2 task-list"},[t._m(2),a("StepList",{attrs:{data:t.stepData,"expand-id":8,"active-id":81,"iconshijian-flg":!0}})],1),a("div",{staticClass:"col-md-6 ml-5"},[t._m(3),t._m(4),a("div",{staticClass:"col-md-12 mt-4 history"},[t._m(5),a("div",{staticClass:"col-md-12"},t._l(t.docData,function(s){return a("div",{key:s.id,staticClass:"col-md-12 text-center doc mt-3 mb-5"},[a("i",{directives:[{name:"show",rawName:"v-show",value:"1"==s.status,expression:"obj.status == '1'"}],staticClass:"iconfont iconyiwancheng icon",staticStyle:{color:"#00C366"}}),a("i",{directives:[{name:"show",rawName:"v-show",value:"0"==s.status,expression:"obj.status == '0'"}],staticClass:"iconfont iconweiwancheng icon",staticStyle:{color:"#FF4C55"}}),t._m(6,!0),a("div",{staticClass:"col-md-8 text-left"},[a("span",{staticClass:"col-md-12 font-regular",staticStyle:{"font-size":"12px","margin-top":"12px"}},[t._v(t._s(s.name))]),a("span",{staticClass:"col-md-5 font-regular",staticStyle:{"font-size":"12px"}},[t._v("上传时间："+t._s(s.time)+" ")]),a("span",{staticClass:"col-md-4 font-regular",staticStyle:{"font-size":"12px"}},[t._v("操作："+t._s(s.do)+" ")])]),a("div",{staticClass:"col-md-3 text-left mt-5"},[a("span",{directives:[{name:"show",rawName:"v-show",value:"0"==s.status,expression:"obj.status == '0'"}],staticClass:"font-regular",staticStyle:{color:"#FC4E54","font-size":"12px","margin-top":"36px"}},[t._v("系统未通过")]),a("span",{directives:[{name:"show",rawName:"v-show",value:"1"==s.status,expression:"obj.status == '1'"}],staticClass:"font-regular",staticStyle:{color:"#02C365","font-size":"12px","margin-top":"36px"}},[t._v("系统已通过")]),a("span",{directives:[{name:"show",rawName:"v-show",value:"1"==s.status,expression:"obj.status == '1'"}],staticClass:"font-regular",staticStyle:{"font-size":"12px","margin-top":"36px","margin-left":"20px"},on:{click:t.gotoComment}},[t._v("去点评")])])])}),0)])])])],1)])},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row top-main"},[i("div",{staticClass:"col-md-6 col-md-offset-2 mt-2",staticStyle:{height:"51px","line-height":"51px"}},[i("div",{staticClass:"col-sm-12 mt-4",staticStyle:{height:"18px","font-size":"18px","font-family":"PingFang-SC-Bold","font-weight":"bold",color:"rgba(255,255,255,1)"}},[i("img",{staticStyle:{"border-radius":"50%",width:"51px",height:"51px"},attrs:{src:a("f070")}}),i("span",{staticStyle:{"margin-left":"15px"}},[t._v("用户姓名 | Go语言实战抽奖")])]),i("div",{staticClass:"col-sm-12 mt-6",staticStyle:{"font-family":"PingFang-SC-Regular","font-weight":"bold",color:"rgba(255,255,255,1)"}},[i("span",[t._v("单人模式 |")]),i("span",[t._v("成员  张三  |")]),i("span",[t._v("当前进度  需求分析-更嗯呢该理解  |")]),i("span",[t._v("待点评  14 | Q&A 4  ")])])]),i("div",{staticClass:"col-md-2 text-center",staticStyle:{border:"1px solid #FF4C55","border-radius":"10px","margin-top":"100px"}},[i("i",{staticClass:"iconfont icongantanhao",staticStyle:{color:"#FF4C55"}}),i("span",{staticStyle:{color:"#FF4C55"}},[t._v("即将超时任务：1项")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row",staticStyle:{background:"rgba(255,255,255,1)","box-shadow":"0px 3px 15px 0px rgba(0, 0, 0, 0.08)",height:"59px","line-height":"59px"}},[a("div",{staticClass:"col-md-3 col-md-offset-2",staticStyle:{cursor:"pointer"}},[a("span",[t._v("助教中心 > 项目列表 > 项目")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bar"},[a("span",[t._v("阶段与任务列表")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bar"},[a("span",[t._v("任务详情")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-12 pt-4 task-detail"},[a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconshijian "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("任务名称：")]),a("span",{staticClass:"font-regular ml-3"},[t._v("功能模块详细设计")])]),a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconshijian "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("点评截止时间：")]),a("span",{staticClass:"font-regular ml-3"},[t._v("2109-08-88")])]),a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconshijian "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("任务描述：")]),a("span",{staticClass:"font-regular col-md-12 pl-5 mt-2"},[t._v("编码人员依据《详细设计报告》的内容，遵循编码规范的要求对设计元素进行编码实现和调试。")])]),a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconshijian "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("任务要求：")]),a("span",{staticClass:"font-regular col-md-12 pl-5 mt-2"},[t._v("按照详细设计要求完成编码、调试工作。调试代码中的调试代码应在调试后删除，以保证代码的安全性。在编码的过程\n中如果发现设计错误，应及时修改相关设计文档。将完成代码形成JAR包上传平台")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-12 pl-0 pr-0",staticStyle:{height:"55px","line-height":"50px","border-bottom":"1px solid #EBEBEB"}},[a("div",{staticClass:"col-md-2",staticStyle:{cursor:"pointer"}},[a("span",{staticClass:"col-sm-12 text-center font-tab active-font-color"},[t._v("点评历程")]),a("span",{staticClass:"col-sm-4 col-sm-offset-4 text-center active-bg-color",staticStyle:{height:"2px","border-radius":"1px"}})]),a("div",{staticClass:"col-md-2",staticStyle:{cursor:"pointer"}},[a("span",{staticClass:"col-sm-12 text-center font-tab unactive-font-color"},[t._v("Q&A")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-md-1"},[i("img",{staticStyle:{width:"36px",height:"42px","margin-top":"9px"},attrs:{src:a("e85a")}})])}],o=a("8af6"),l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"step-list"},t._l(t.data,function(s){return a("div",{key:s.id},[a("div",{staticClass:"item",class:[s.id==t.expandId_?"active":""],on:{click:function(a){return t.expandItem(s.id)}}},[s.id==t.expandId_?a("i",{staticClass:"el-icon-caret-bottom"}):a("i",{staticClass:"el-icon-caret-right"}),a("span",[t._v(t._s(s.label))]),a("span",{staticClass:"pull-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.iconduihaoShow,expression:"iconduihaoShow"}],staticClass:"iconfont iconduihao"}),a("i",{directives:[{name:"show",rawName:"v-show",value:t.iconshijianShow,expression:"iconshijianShow"}],staticClass:"iconfont iconshijian"})])]),s.id==t.expandId_?a("div",{staticClass:"itemContent"},t._l(s.children,function(i){return a("div",{key:i.id,staticClass:"item",class:[i.id==t.currentId?"active":""],on:{click:function(a){return t.activeItem(i.id,s.id)}}},[a("span",[t._v(t._s(i.label))])])}),0):t._e()])}),0)},c=[],r={name:"StepList",props:{expandId:Number,activeId:Number,data:Array,iconduihaoFlg:{default:!1},iconshijianFlg:{default:!1}},data(){return{expandId_:this.expandId,currentId:this.activeId,iconduihaoShow:this.iconduihaoFlg,iconshijianShow:this.iconshijianFlg}},methods:{expandItem(t){this.expandId_===t?this.expandId_=-1:this.expandId_=t},activeItem(t,s){this.expandId_=s,this.currentId=t}}},d=r,p=(a("4fa6"),a("2877")),u=Object(p["a"])(d,l,c,!1,null,"54fe1826",null),m=u.exports,f={name:"app",components:{Header:o["a"],StepList:m},data(){return{stepData:[{id:1,label:"任务前评测",children:[{id:111,label:"能力调查评测"}]},{id:2,label:"项目策划"},{id:3,label:"需求分析"},{id:4,label:"架构设计"},{id:5,label:"模块概要设计"},{id:6,label:"模块详细设计"},{id:7,label:"阶段评审"},{id:8,label:"编码",children:[{id:81,label:"编码准备"},{id:82,label:"编码与调试"}]},{id:9,label:"单元测试"},{id:10,label:"系统验收"},{id:11,label:"项目进阶"},{id:12,label:"附加阶段"},{id:13,label:"任务后评测"}],docData:[{id:"1",name:"《软件需求调研提纲1》.docx",status:"0",time:"2019-12-12",do:"于子博"},{id:"2",name:"《软件需求调研提纲2》.docx",status:"1",time:"2019-12-12",do:"子博"},{id:"3",name:"《软件需求调研提纲3》.docx",status:"0",time:"2019-12-12",do:"于子"},{id:"4",name:"《软件需求调研提纲4》.docx",status:"1",time:"2019-12-12",do:"于博"}]}},methods:{gotoComment(){window.location="assistant-task-comment.html"}}},v=f,h=(a("41f9"),a("a599"),Object(p["a"])(v,e,n,!1,null,"2875570c",null)),x=h.exports;a("7378"),a("3a10"),a("49f4");new i["default"]({render:t=>t(x)}).$mount("#app")},"4fa6":function(t,s,a){"use strict";var i=a("86a2"),e=a.n(i);e.a},"86a2":function(t,s,a){},"8e04":function(t,s,a){},a599:function(t,s,a){"use strict";var i=a("8e04"),e=a.n(i);e.a}});
//# sourceMappingURL=assistant-task-list.62c1f076.js.map