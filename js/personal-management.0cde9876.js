(function(t){function e(e){for(var o,i,a=e[0],l=e[1],c=e[2],p=0,u=[];p<a.length;p++)i=a[p],r[i]&&u.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],o=!0,a=1;a<s.length;a++){var l=s[a];0!==r[l]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var o={},r={"personal-management":0},n=[];function i(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=o,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=l;n.push([9,"chunk-vendors","chunk-common"]),s()})({"49f0":function(t,e,s){"use strict";var o=s("8eaf"),r=s.n(o);r.a},7595:function(t,e,s){},"8eaf":function(t,e,s){},9:function(t,e,s){t.exports=s("b539")},b539:function(t,e,s){"use strict";s.r(e);var o=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container-fluid"},[s("hr",{staticStyle:{border:"none"}}),s("div",{staticClass:"row",staticStyle:{width:"1288px","margin-bottom":"40px"}},[t._m(0),s("div",{staticClass:"col-8  person-detail"},[t._m(1),s("div",{staticClass:"row text-center"},[s("div",{staticClass:"management-detail row"},[t._m(2),t._m(3),s("div",{staticClass:"col-2",staticStyle:{"padding-top":"35px"}},[s("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.updateBindPhone("phoneForm")}}},[t._v("更改")])]),s("div",{staticClass:"col-9 col-offset-1 text-left",staticStyle:{"padding-left":"29px"}},[s("el-form",{ref:"phoneForm",staticClass:"center-block mt-3",attrs:{model:t.formBindPhone,rules:t.rules,"status-icon":"","show-message":!0}},[s("el-form-item",{attrs:{prop:"phone"}},[s("el-input",{staticStyle:{width:"330px"},attrs:{placeholder:"你的手机号"},model:{value:t.formBindPhone.phone,callback:function(e){t.$set(t.formBindPhone,"phone",e)},expression:"formBindPhone.phone"}})],1),s("el-form-item",{attrs:{prop:"verify"}},[s("el-input",{staticStyle:{width:"330px"},attrs:{placeholder:"验证码"},model:{value:t.formBindPhone.verify,callback:function(e){t.$set(t.formBindPhone,"verify",e)},expression:"formBindPhone.verify"}}),s("el-popover",{attrs:{placement:"right",trigger:"click"}},[s("slide-verify",{attrs:{l:42,r:10,w:310,h:155,sliderText:"请向右滑动",setNum:60},on:{success:t.onSuccess}}),s("div",[t._v(t._s(t.msg))]),s("el-button",{staticClass:"verifycode ",attrs:{slot:"reference",disabled:t.countdownshow},slot:"reference"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.countdownshow,expression:"!countdownshow"}]},[t._v(t._s(t.verifyCodeText))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.countdownshow,expression:"countdownshow"}]},[t._v(t._s(t.countdown)+"s")])])],1)],1)],1)],1)]),s("div",{staticClass:"management-detail row",staticStyle:{"margin-bottom":"132px"}},[t._m(4),t._m(5),s("div",{staticClass:"col-2",staticStyle:{"padding-top":"35px"}},[s("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.updatePwd("pwdForm")}}},[t._v("更改")])]),s("div",{staticClass:"col-9 col-offset-1 text-left",staticStyle:{"padding-left":"29px"}},[s("el-form",{ref:"pwdForm",staticClass:"center-block mt-3",attrs:{model:t.formPwd,rules:t.rules,"status-icon":"","show-message":!0}},[s("el-form-item",{attrs:{prop:"oldPwd"}},[s("el-input",{attrs:{placeholder:"旧密码","show-password":""},model:{value:t.formPwd.oldPwd,callback:function(e){t.$set(t.formPwd,"oldPwd",e)},expression:"formPwd.oldPwd"}})],1),s("el-form-item",{attrs:{prop:"newPwd"}},[s("el-input",{attrs:{placeholder:"新密码","show-password":""},model:{value:t.formPwd.newPwd,callback:function(e){t.$set(t.formPwd,"newPwd",e)},expression:"formPwd.newPwd"}})],1),s("el-form-item",{attrs:{prop:"confirmPwd"}},[s("el-input",{attrs:{placeholder:"确认新密码","show-password":""},model:{value:t.formPwd.confirmPwd,callback:function(e){t.$set(t.formPwd,"confirmPwd",e)},expression:"formPwd.confirmPwd"}})],1)],1)],1)])])])])])])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-2 col-offset-1 navigation"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 text-center"},[o("img",{staticStyle:{"margin-top":"23px"},attrs:{src:s("f070"),width:"103px",height:"103px"}})]),o("div",{staticClass:"col-12 text-center",staticStyle:{height:"50px","margin-top":"25px"}},[o("span",{staticClass:"nick-name"},[t._v("用户昵称")])])]),o("div",{staticClass:"row",staticStyle:{"border-top":"1px solid #EBEBEB"}},[o("div",{staticClass:" text-center",staticStyle:{height:"56px","line-height":"56px"}},[o("a",{staticStyle:{color:"#333333"},attrs:{href:"personal-set.html"}},[t._v("个人资料")])]),o("div",{staticClass:"text-center",staticStyle:{height:"56px","line-height":"56px",background:"rgba(248,248,248,1)"}},[o("div",{staticStyle:{height:"33px",width:"4px",background:"#6612CF",float:"left","margin-top":"10px","border-radius":"2px"}}),o("span",[t._v("账户管理")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"border-bottom":"1px solid #EBEBEB",padding:"unset",height:"56px","line-height":"56px"}},[s("span",{staticClass:"detail-title"},[t._v("账户管理")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-1",staticStyle:{"padding-top":"24px"}},[s("i",{staticClass:"iconfont iconshouji icon"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-9",staticStyle:{"padding-top":"24px"}},[s("div",{staticClass:"col-12"},[s("span",{staticClass:"pull-left font-bind"},[t._v("绑定手机")])]),s("div",{staticClass:"col-12",staticStyle:{"margin-top":"8px"}},[s("span",{staticClass:"pull-left bind-status"},[t._v("已绑定")]),s("span",{staticClass:"pull-left"},[t._v("159****9888")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-1",staticStyle:{"padding-top":"24px"}},[s("i",{staticClass:"iconfont iconsuo icon",staticStyle:{color:"#6612CF"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-9",staticStyle:{"padding-top":"24px"}},[s("div",{staticClass:"col-12"},[s("span",{staticClass:"pull-left font-bind"},[t._v("修改密码")])]),s("div",{staticClass:"col-12",staticStyle:{"margin-top":"8px"}},[s("span",{staticClass:"pull-left bind-status"},[t._v("建议定期修改密码，保证账号安全")])])])}],i={name:"app",mounted(){this.loadData()},data(){return{msg:"",level:"",verifyCodeText:"获取验证码",interval:null,countdown:"",countdownshow:!1,formBindPhone:{phone:"",verify:""},formPwd:{oldPwd:"",newPwd:"",confirmPwd:""},rules:{phone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{min:11,max:11,message:"手机号不完整",trigger:"blur"}],verify:[{required:!0,message:"请输入短信验证码",trigger:"blur"}],oldPwd:[{required:!0,message:"请输入密码",trigger:"blur"}],newPwd:[{required:!0,message:"请输入密码",trigger:"blur"}],confirmPwd:[{required:!0,message:"请输入确认密码",trigger:"blur"}],inviteCode:[{required:!0,message:"请输入邀请码",trigger:"blur"}]}}},methods:{loadData(){this.$http.post("/user/queryuserinfo",{},t=>{t.success&&console.log(t.data)})},onSuccess(){let t=this;function e(){t.msg="验证成功,请注意查收短信。",t.countdown=60,t.countdownshow=!0,t.interval=setInterval(()=>{t.countdown--,t.countdown<=0&&(t.verifyCodeText="重新发送",t.countdownshow=!1,clearInterval(t.interval))},1e3)}this.$http.post("/user/vcfraudprevent",{},s=>{s.success&&this.$http.post("/user/sendsmsverificationcode",{phone:t.formBindPhone.phone,msgType:"modcellphone",sign:s.data.sign},t=>{t.success&&e()})})},updateBindPhone(t){let e=this;this.$refs[t].validate(t=>{if(!t)return console.log("error submit!!"),!1;e.$http.post("/user/modifycellphone",{newCellphone:e.formBindPhone.phone,smsVerificationCode:e.formBindPhone.verify},t=>{t.success&&console.log(t.data)})})},updatePwd(t){let e=this;console.log(e.formPwd),this.$refs[t].validate(t=>{if(!t)return console.log("error submit!!"),!1;e.$http.post("/user/modifypassword",{oldPassword:e.formPwd.oldPwd,newPassword:e.formPwd.newPwd},t=>{t.success&&e.$message("修改密码成功")})})}}},a=i,l=(s("ce3d"),s("49f0"),s("2877")),c=Object(l["a"])(a,r,n,!1,null,"1488a7e4",null),d=c.exports,p=(s("7378"),s("3a10"),s("49f4"),s("26a0")),u=s("751a");o["default"].prototype.$http=u["a"],o["default"].use(p["a"]),new o["default"]({render:t=>t(d)}).$mount("#app")},ce3d:function(t,e,s){"use strict";var o=s("7595"),r=s.n(o);r.a}});
//# sourceMappingURL=personal-management.0cde9876.js.map