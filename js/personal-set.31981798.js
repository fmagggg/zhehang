(function(e){function t(t){for(var s,l,o=t[0],n=t[1],c=t[2],m=0,d=[];m<o.length;m++)l=o[m],r[l]&&d.push(r[l][0]),r[l]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var n=a[o];0!==r[n]&&(s=!1)}s&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},r={"personal-set":0},i=[];function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=n;i.push([11,"chunk-vendors","chunk-common"]),a()})({11:function(e,t,a){e.exports=a("c90c")},1282:function(e,t,a){"use strict";(function(e){var s=a("8af6");t["a"]={name:"app",mounted(){this.loadData()},components:{Header:s["a"]},methods:{loadData(){let t=this;this.$http.post("/user/queryuserinfo",{},a=>{console.log(a.data),a.success&&(e.extend(t.form,a.data),null!==a.data.userEnterYear&&t.$http.post("/user/queryclass",{userEnterYear:a.data.userEnterYear},e=>{console.log(e.data),t.classData=e.data}))});let a=[],s=(new Date).getFullYear();for(let e=0;e<10;e++)a.push(s-e);this.enterYearData=a},changeEnterYear(){let e=this;e.form.userClassId="",this.$http.post("/user/queryclass",{userEnterYear:this.form.userEnterYear},t=>{t.success&&(e.classData=t.data)})},changeNickNameFlg(){this.nickNameEditFlg=!this.nickNameEditFlg},saveNickName(){let e=this;if(""===e.nickNameEdit)return e.$message("修改昵称不能为空"),!1;e.$http.post("/user/modifynickname",{token:localStorage.getItem("token"),userNickname:e.nickNameEdit},t=>{t.success&&(e.$message("保存成功"),e.nickNameEditFlg=!1,e.form.userNickname=e.nickNameEdit)})},changeEditImgStatus(e){this.editImgFlg="img"!==e||!this.editImgFlg},uploadPhoto(e){console.log(1);let t=this,a=e.target.files[0],s=new FormData;s.append("file",a),this.$http.uploadFile("/user/uploadimg",s,e=>{console.log(e.data),e.success&&(t.$message("上传成功"),t.form.userPhotoUrl=e.data)})},save(e){let t=this;this.$refs[e].validate(e=>{if(!e)return console.log("error submit!!"),!1;t.$http.post("/user/modifybasicinfo",t.form,e=>{e.success&&t.$message("保存成功")})})}},data(){return{avatar:"https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=62d46c39067b020818c437b303b099b6/d4628535e5dde7119c3d076aabefce1b9c1661ba.jpg",classData:[],enterYearData:[],editImgFlg:!1,nickNameEditFlg:!1,nickNameEdit:"",form:{userNickname:"",userSex:"男",userEmail:"",userRealname:"",userStudentNumber:"",schoolName:"",facultyName:"",majorName:"",userClassId:"",userEnterYear:"",userPhotoUrl:""},rules:{userRealname:[{required:!0,message:"请输入昵称",trigger:"blur"}],userSex:[{required:!0,message:"请选择性别",trigger:"blur"}],userEmail:[{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],username:[{required:!0,message:"请输入姓名",trigger:"blur"}],userClassId:[{required:!0,message:"请选择班级",trigger:"blur"}]}}}}}).call(this,a("1157"))},6139:function(e,t,a){"use strict";var s=a("e922"),r=a.n(s);r.a},be36:function(e,t,a){"use strict";var s=a("e817"),r=a.n(s);r.a},c90c:function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}}),a("div",{staticClass:"container-fluid"},[a("hr",{staticStyle:{border:"none"}}),a("div",{staticClass:"row",staticStyle:{width:"1288px","margin-bottom":"40px"}},[a("div",{staticClass:"col-2 col-md-offset-1 navigation"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("img",{class:e.editImgFlg?"img-focus":"",staticStyle:{"margin-top":"23px","border-radius":"50%"},attrs:{src:e.form.userPhotoUrl,width:"103px",height:"103px"},on:{click:function(t){return e.$refs.headPortrait.click()},mouseover:function(t){return e.changeEditImgStatus("img")},mouseout:function(t){return e.changeEditImgStatus("img")}}}),a("input",{ref:"headPortrait",staticStyle:{display:"none"},attrs:{type:"file",name:"fileUpload"},on:{change:function(t){return e.uploadPhoto(t)}}})]),e.editImgFlg?a("span",{staticClass:"edit-img",on:{mouseover:function(t){return e.changeEditImgStatus("span")},mouseout:function(t){return e.changeEditImgStatus("span")}}},[e._v("修改头像")]):e._e(),e.nickNameEditFlg?e._e():a("div",{staticClass:"col-12 text-center",staticStyle:{height:"50px","margin-top":"25px"}},[null===e.form.userNickname?a("span",{staticClass:"nick-name"},[e._v("请设置昵称")]):a("span",{staticClass:"nick-name"},[e._v(e._s(e.form.userNickname))]),a("a",{staticClass:"edit",on:{click:e.changeNickNameFlg}},[e._v("修改")])]),e.nickNameEditFlg?a("div",{staticClass:"col-12 text-center",staticStyle:{height:"50px","margin-top":"25px"}},[a("div",{staticClass:"col-md-12 text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.nickNameEdit,expression:"nickNameEdit"}],staticClass:"nick-name el-input__inner",staticStyle:{width:"80px!important",height:"25px!important"},attrs:{maxlength:"8",type:"text"},domProps:{value:e.nickNameEdit},on:{input:function(t){t.target.composing||(e.nickNameEdit=t.target.value)}}})]),a("div",{staticClass:"col-md-12 text-center"},[a("a",{staticClass:"edit",staticStyle:{"margin-left":"0px"},on:{click:function(t){return e.saveNickName()}}},[e._v("保存")]),a("a",{staticClass:"edit",staticStyle:{color:"rgba(153,153,153,1)!important"},on:{click:e.changeNickNameFlg}},[e._v("取消")])])]):e._e()]),e._m(0)]),a("div",{staticClass:"col-8  person-detail"},[e._m(1),a("div",{staticClass:"row",staticStyle:{"padding-left":"38px","margin-top":"20px"}},[a("h4",{staticClass:"ml-5 xinxi-title"},[e._v("基本信息")]),a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("div",{staticClass:"row mr-3 mt-5"},[a("div",{staticClass:"col-6"},[a("el-form-item",{attrs:{label:"姓名",prop:"userRealname"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.userRealname,callback:function(t){e.$set(e.form,"userRealname",t)},expression:"form.userRealname"}})],1),a("el-form-item",{attrs:{label:"性别",prop:"userSex"}},[a("el-radio",{attrs:{label:"0"},model:{value:e.form.userSex,callback:function(t){e.$set(e.form,"userSex",t)},expression:"form.userSex"}},[e._v("男")]),a("el-radio",{attrs:{label:"1"},model:{value:e.form.userSex,callback:function(t){e.$set(e.form,"userSex",t)},expression:"form.userSex"}},[e._v("女")])],1)],1)]),a("h4",{staticClass:"ml-5 xinxi-title"},[e._v("校园信息")]),a("div",{staticClass:"row mt-5 mr-3"},[a("div",{staticClass:"col-6"},[a("el-form-item",{attrs:{label:"邮箱",prop:"userEmail"}},[a("el-input",{attrs:{placeholder:"请输入邮箱地址"},model:{value:e.form.userEmail,callback:function(t){e.$set(e.form,"userEmail",t)},expression:"form.userEmail"}})],1)],1),a("div",{staticClass:"col-6"},[a("el-form-item",{attrs:{label:"学校"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.form.schoolName,callback:function(t){e.$set(e.form,"schoolName",t)},expression:"form.schoolName"}})],1)],1)]),a("div",{staticClass:"row mr-3"},[a("div",{staticClass:"col-6"},[a("el-form-item",{attrs:{label:"学号"}},[a("el-input",{attrs:{placeholder:"请输入学号"},model:{value:e.form.userStudentNumber,callback:function(t){e.$set(e.form,"userStudentNumber",t)},expression:"form.userStudentNumber"}})],1)],1),a("div",{staticClass:"col-6"},[a("el-form-item",{attrs:{label:"学院/系"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.form.facultyName,callback:function(t){e.$set(e.form,"facultyName",t)},expression:"form.facultyName"}})],1)],1)]),a("div",{staticClass:"row mr-3"},[a("div",{staticClass:"col-6"},[a("el-form-item",{attrs:{label:"班级",prop:"userClassId"}},[a("el-select",{attrs:{placeholder:"请选择班级"},model:{value:e.form.userClassId,callback:function(t){e.$set(e.form,"userClassId",t)},expression:"form.userClassId"}},e._l(e.classData,function(e){return a("el-option",{key:e.classId,attrs:{label:e.className,value:e.classId}})}),1)],1)],1),a("div",{staticClass:"col-6"},[a("el-form-item",{attrs:{label:"专业"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.form.majorName,callback:function(t){e.$set(e.form,"majorName",t)},expression:"form.majorName"}})],1)],1)]),a("div",{staticClass:"row mr-3"},[a("div",{staticClass:"col-6"},[a("el-form-item",{attrs:{label:"入学时间"}},[a("el-select",{attrs:{placeholder:"请选择入学时间"},on:{change:e.changeEnterYear},model:{value:e.form.userEnterYear,callback:function(t){e.$set(e.form,"userEnterYear",t)},expression:"form.userEnterYear"}},e._l(e.enterYearData,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1)],1)]),a("div",{staticClass:"row mt-4"},[a("a",{staticClass:"center-block btn save-btn",staticStyle:{"padding-top":"12px",color:"white"},on:{click:function(t){return e.save("form")}}},[e._v("保存")])])])],1)])])])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row",staticStyle:{"border-top":"1px solid #EBEBEB"}},[a("div",{staticClass:" text-center",staticStyle:{height:"56px","line-height":"56px"}},[a("div",{staticStyle:{height:"33px",width:"4px",background:"#6612CF",float:"left","margin-top":"10px","border-radius":"2px"}}),a("span",[e._v("个人资料")])]),a("div",{staticClass:"col-12 text-center",staticStyle:{height:"56px","line-height":"56px",background:"rgba(248,248,248,1)"}},[a("a",{staticStyle:{color:"#333333"},attrs:{href:"personal-management.html"}},[e._v("账户管理")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"border-bottom":"1px solid #EBEBEB",padding:"unset",height:"56px","line-height":"56px"}},[a("span",{staticClass:"detail-title"},[e._v("个人资料")])])}],l=a("1282"),o=l["a"],n=(a("6139"),a("be36"),a("2877")),c=Object(n["a"])(o,r,i,!1,null,"0b4677cf",null),u=c.exports,m=(a("7378"),a("3a10"),a("49f4"),a("751a"));s["default"].prototype.$http=m["a"],new s["default"]({render:e=>e(u)}).$mount("#app")},e817:function(e,t,a){},e922:function(e,t,a){}});
//# sourceMappingURL=personal-set.31981798.js.map