(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("publicHeader"),a("router-view")],1)},r=[],o=(a("7faf"),a("2877")),i={},l=Object(o["a"])(i,n,r,!1,null,null,null),c=l.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("div",{staticClass:"Leftsidebar"},[a("sidebar")],1),a("div",{staticClass:"rightContent"},[a("router-view")],1)])},p=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/dashboard"}},[t._v("Dashboard")])],1),a("li",[a("router-link",{attrs:{to:"/pend","router-link-active":"active"}},[t._v("Orders")])],1),a("li",[a("router-link",{attrs:{to:"/products"}},[t._v("Products")])],1),a("li",[a("router-link",{attrs:{to:"/customers"}},[t._v("Customers")])],1),a("li",[a("router-link",{attrs:{to:"/account"}},[t._v("Accounting")])],1),a("li",[a("router-link",{attrs:{to:"/settings"}},[t._v("Settings")])],1)])])},h=[],f={name:"sidebar",data:function(){return{}}},_=f,m=Object(o["a"])(_,v,h,!1,null,"7b2c62ce",null),b=m.exports,g={name:"order",data:function(){return{}},components:{sidebar:b}},C=g,y=Object(o["a"])(C,d,p,!1,null,"e17ee5fc",null),k=y.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"viewContent"},[a("div",{staticClass:"orderInfoTop"},[a("div",{staticClass:"blockTop"}),a("div",[t._v(t._s(t.oderData.date))]),a("ul",[a("li",t._l(t.oderData.channel,(function(t){return a("img",{key:t.index,staticClass:"platformName img1",attrs:{src:"../img/"+t.picName,alt:""}})})),0),a("li",[a("strong",[t._v("Created at")]),a("p",[t._v(t._s(t.oderData.createdData))])]),a("li",[a("strong",[t._v("Update at")]),a("p",[t._v(t._s(t.oderData.upData))])]),a("li",[a("strong",[t._v("Imported at")]),a("p",[t._v(t._s(t.oderData.importData))])]),a("li",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Status")]),a("p",[t._v(t._s(t.oderData.status))])])])]),a("div",{staticClass:"path"},[a("el-steps",{attrs:{space:200,active:t.active,"finish-status":"success"}},[a("el-step",{attrs:{title:"Pick List"}},[t._v("Pick List")]),a("el-step",{attrs:{title:"Invoice"}},[t._v("1")]),a("el-step",{attrs:{title:"Shipping Label"}},[t._v("2")]),a("el-step",{attrs:{title:"Packed"}},[t._v("3")]),a("el-step",{attrs:{title:"Ready to Ship"}}),a("el-step",{attrs:{title:"Shipped"}}),a("el-step",{attrs:{title:"Shipped"}})],1)],1),a("div",{staticClass:"orderDetils"},[a("h2",[t._v("ORDER DETILS")]),a("div",{staticClass:"address"},[a("ul",[a("li",[a("strong",[t._v("Biling Address")]),a("p",[t._v("姓名："+t._s(t.billingAddress.name))]),a("p",[t._v("地址："+t._s(t.billingAddress.address))]),a("p",[t._v("国家："+t._s(t.billingAddress.country))]),a("p",[t._v("邮编："+t._s(t.billingAddress.zipCode))]),a("p",[t._v("手机："+t._s(t.billingAddress.phone))])]),a("li",[a("strong",[t._v("Shiipping Address")]),a("p",[t._v("姓名："+t._s(t.shippingAddress.name))]),a("p",[t._v("地址："+t._s(t.shippingAddress.address))]),a("p",[t._v("国家："+t._s(t.shippingAddress.country))]),a("p",[t._v("邮编："+t._s(t.shippingAddress.zipCode))]),a("p",[t._v("手机："+t._s(t.shippingAddress.phone))])])])]),a("div",{staticClass:"deliveryInfo"},[a("ul",[a("li",[a("strong",[t._v("Shiment Type")]),a("p",[t._v(t._s(t.oderData.shipmentType))])]),a("li",[a("strong",[t._v("Logistic Company")]),a("p",[t._v(t._s(t.oderData.companyName))])]),a("li",[a("strong",[t._v("Tracking No.")]),a("p",[t._v(t._s(t.oderData.waybillNumber))])])])]),a("div",{staticClass:"commodity"},[a("h3",[t._v("Order No:"),a("span",[t._v(" "+t._s(t.oderData.orderNumber))])]),t._l(t.oderData.productDetails,(function(e){return a("div",{staticClass:"boxs"},[a("div",{staticClass:"pic"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"../img/"+e.productPicUrl,alt:""}})])]),a("div",{staticClass:"text t1"},[a("strong",[t._v("Item")]),a("p",[t._v(t._s(e.productName))]),a("p",[t._v(t._s(e.sku))])]),a("div",{staticClass:"text"},[a("strong",[t._v("QTY")]),a("p",[t._v(t._s(e.qty))])]),a("div",{staticClass:"text"},[a("strong",[t._v("Unit Price")]),a("p",[t._v(t._s(e.paid))])]),a("div",{staticClass:"text"},[a("strong",[t._v("Total Price")]),a("p",[t._v(t._s(e.subtotal))])])])})),a("div",{staticClass:"totalBottom"},[a("p",[a("b",[t._v("Subtotal")]),a("span",[t._v("$"+t._s(t.count))])]),t._m(0),t._m(1),a("p",[a("b",[t._v("GST")]),a("span",[t._v("$"+t._s(t.oderData.gst))])]),a("p",[a("b",[t._v("Total")]),a("span",[t._v("$"+t._s(t.sum))])])])],2)]),a("div",{staticClass:"orderHistory"},[a("h5",[t._v("ORDER PROCESS HISTORY")]),a("div",{staticClass:"box"},[a("div",{staticClass:"tip"},[t._v("Pick printed by "),a("span",[t._v(t._s(t.orderProcessHistory.printedBy))])]),a("p",[t._v(t._s(t.orderProcessHistory.printDate))])]),a("div",{staticClass:"box"},[t._m(2),a("p",[t._v(t._s(t.orderProcessHistory.importDate))])])])])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("b",[t._v("Shipping Fee ")]),a("span",[t._v("$0")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("b",[t._v("Voucher / Rebate")]),a("span",[t._v("$0")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tip"},[t._v("Order imported by "),a("span",[t._v("system")])])}],D=(a("ac6a"),{name:"viewContent",data:function(){return{active:0,oderData:[],billingAddress:[],shippingAddress:[],count:0,sum:0,orderProcessHistory:[]}},methods:{fetchOrderData:function(t){var e=this;this.axios.get("http://localhost:3000/orderInfo/"+t).then((function(t){e.oderData=t.data,e.costSum()}))},fetchBillingData:function(t){var e=this;this.axios.get("http://localhost:3000/billingAddress/"+t).then((function(t){e.billingAddress=t.data}))},fetchShipData:function(t){var e=this;this.axios.get("http://localhost:3000/shippingAddress/"+t).then((function(t){e.shippingAddress=t.data}))},fetchOrderHistoryData:function(t){var e=this;this.axios.get("http://localhost:3000/orderProcessHistory/"+t).then((function(t){e.orderProcessHistory=t.data}))},costSum:function(){var t=0;this.oderData.productDetails.forEach((function(e){t+=e.subtotal})),this.count=t,this.sum=this.oderData.gst+this.count,console.log(this.sum)}},created:function(){this.fetchOrderData(this.$route.params.id),this.fetchBillingData(this.$route.params.id),this.fetchShipData(this.$route.params.id),this.fetchOrderHistoryData(this.$route.params.id)},mounted:function(){}}),w=D,P=Object(o["a"])(w,x,S,!1,null,"686d809c",null),O=P.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"orderContent"},[a("div",{staticClass:"topMenu"},[a("router-link",{staticClass:"router-link-active",attrs:{to:"/pend"}},[t._v("Pending("+t._s(t.amount.pending)+")")]),a("router-link",{attrs:{to:"/a2"}},[t._v("Ready to Ship("+t._s(t.amount.readyship)+")")]),a("router-link",{attrs:{to:"/a3"}},[t._v("Shipped("+t._s(t.amount.shipped)+")")]),a("router-link",{attrs:{to:"/a4"}},[t._v("Delivered("+t._s(t.amount.delivered)+")")]),a("router-link",{attrs:{to:"/a5"}},[t._v("Canceled("+t._s(t.amount.canceled)+")")]),a("router-link",{attrs:{to:"/a6"}},[t._v("All("+t._s(t.amount.all)+")")])],1),a("div",{staticClass:"topMenuShow"},[a("router-view")],1)])},E=[],A={name:"orderContent",data:function(){return{amount:""}},methods:{getData:function(t){var e=this;this.axios.get(t).then((function(t){e.amount=t.data})).catch((function(t){console.log("数据获取失败")}))}},mounted:function(){this.getData("http://localhost:3000/topMenuJson")}},$=A,T=Object(o["a"])($,N,E,!1,null,"1efa35a7",null),j=T.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account"},[t._v("\n\t2222222\n")])},H=[],R={name:"account",data:function(){return{}}},B=R,L=Object(o["a"])(B,I,H,!1,null,"33ce121b",null),M=L.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customers"},[t._v("\n\t333333333333\n")])},z=[],q={name:"customers",data:function(){return{}}},J=q,Y=Object(o["a"])(J,U,z,!1,null,"96278e0a",null),K=Y.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[t._v("\n\t44444444444\n")])},V=[],F={name:"dashboard",data:function(){return{}}},G=F,W=Object(o["a"])(G,Q,V,!1,null,"3066d82a",null),X=W.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"products"},[t._v("\n\t5555555555\n")])},tt=[],et={name:"products",data:function(){return{}}},at=et,st=Object(o["a"])(at,Z,tt,!1,null,"83a52442",null),nt=st.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settings"},[t._v("\n\t666666666666\n")])},ot=[],it={name:"settings",data:function(){return{}}},lt=it,ct=Object(o["a"])(lt,rt,ot,!1,null,"0d7d3082",null),ut=ct.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pend"},[a("div",{staticClass:"fourBox"},[a("ul",[a("li",{staticClass:"li1"},[a("a",{attrs:{href:"#"}},[a("b",[t._v(t._s(t.sum.fourBox1))]),t._v("Picklist & Invoice to be printed")])]),a("li",{staticClass:"li2"},[a("a",{attrs:{href:"#"}},[a("b",[t._v(t._s(t.sum.fourBox2))]),t._v("hipping Label to be printed")])]),a("li",{staticClass:"li3"},[a("a",{attrs:{href:"#"}},[a("b",[t._v(t._s(t.sum.fourBox3))]),t._v("Picklist & To be packed")])]),a("li",{staticClass:"li4"},[a("a",{attrs:{href:"#"}},[a("b",[t._v(t._s(t.sum.fourBox4))]),t._v("Picklist & To be ready to collect")])])])]),a("div",{staticClass:"sechBox"},[a("div",{staticClass:"box"},[a("el-input",{attrs:{placeholder:"Order Number"},model:{value:t.orderNumber,callback:function(e){t.orderNumber=e},expression:"orderNumber"}}),a("el-input",{attrs:{placeholder:"Platform"},model:{value:t.platform,callback:function(e){t.platform=e},expression:"platform"}}),a("el-input",{attrs:{placeholder:"Shop Name"},model:{value:t.shopName,callback:function(e){t.shopName=e},expression:"shopName"}}),a("el-input",{attrs:{placeholder:"Product"},model:{value:t.product,callback:function(e){t.product=e},expression:"product"}}),a("el-input",{attrs:{placeholder:"SKU"},model:{value:t.sku,callback:function(e){t.sku=e},expression:"sku"}}),a("el-input",{attrs:{placeholder:"Tracking Number"},model:{value:t.trackingNumber,callback:function(e){t.trackingNumber=e},expression:"trackingNumber"}})],1),a("el-button",{attrs:{type:"danger"}},[t._v("Search")])],1),a("div",{staticClass:"features"},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},t._l(t.options2,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("div",{staticClass:"shopList"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"DATE",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.createdData))]}}])}),a("el-table-column",{attrs:{prop:"channel",label:"SALES CHANNEL",width:"140px"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.channel,(function(t){return a("img",{key:t.index,staticClass:"channelImgs",attrs:{src:"img/"+t.picName,alt:""}})}))}}])}),a("el-table-column",{attrs:{prop:"orderNumber",label:"ORDER NUMBER","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"productDetails",label:"PRODUCT DETAILS","show-overflow-tooltip":"",width:"300px"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.productDetails,(function(e){return a("div",{key:e.productType,staticClass:"ProductInfo"},[a("div",{staticClass:"pic"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"img/"+e.productPicUrl,height:"106",width:"106",alt:""}})])]),a("div",{staticClass:"text"},[a("span",[t._v("SKU:"),a("var",[t._v(t._s(e.sku))])]),a("span",[t._v("QTY:"),a("i",[t._v(t._s(e.qty))])]),a("span",[t._v("PAID:"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.paid,expression:"item.paid"}],staticClass:"paidValue",attrs:{type:"text",readonly:""},domProps:{value:e.paid},on:{input:function(a){a.target.composing||t.$set(e,"paid",a.target.value)}}})])])])}))}}])}),a("el-table-column",{attrs:{prop:"amout",label:"AMOUNT","show-overflow-tooltip":"",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.amout))]}}])}),a("el-table-column",{attrs:{prop:"process",label:"PROCESS","show-overflow-tooltip":""}},[a("span",{staticClass:"process"},[t._v("Picklist")]),a("span",{staticClass:"process"},[t._v("Invoice")]),a("span",{staticClass:"process"},[t._v("Shipping Label")]),a("span",{staticClass:"process"},[t._v("Packed")]),a("span",{staticClass:"process"},[t._v("Ready to Ship")])]),a("el-table-column",{attrs:{prop:"shipment",label:"SHIPMENT","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"shipment"},[t._v(t._s(e.row.companyName))]),a("span",{staticClass:"shipment"},[t._v(t._s(e.row.waybillNumber))])]}}])}),a("el-table-column",{attrs:{prop:"view",label:"","show-overflow-tooltip":"",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{staticClass:"viewBtn",attrs:{to:"/pend/"+e.row.id}},[t._v("view")])]}}])})],1),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"","current-page":t.currentPage2,"page-sizes":[10,20,30,40],"page-size":50,layout:"sizes, prev, pager, next",total:50},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage2=e},"update:current-page":function(e){t.currentPage2=e}}})],1)],1)])},pt=[],vt=a("bd86"),ht={name:"pend",data:function(){return{options:[{value:"选项1",label:"Print"},{value:"选项2",label:"Print"},{value:"选项3",label:"Print"}],options2:[{value:"选项1",label:"Actions"},{value:"选项2",label:"Actions"},{value:"选项3",label:"Actions"}],value:"",value2:"",orderNumber:"",platform:"",shopName:"",product:"",sku:"",trackingNumber:"",count:"",tableData:[],multipleSelection:[],currentPage1:5,currentPage2:1,currentPage3:5,currentPage4:4,sum:""}},methods:{toggleSelection:function(t){var e=this;t?t.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))},getData:function(t){var e=this;this.axios.get(t).then((function(t){e.sum=t.data})).catch((function(t){console.log("数据获取失败")}))},getOrderData:function(t){var e=this;this.axios.get(t).then((function(t){e.tableData=t.data,e.paidSum()})).catch((function(t){console.log("数据获取失败")}))},getShopData:function(t){var e=this;this.axios.post(t).then((function(t){e.tableData=t.data.data,console.log(t.data)})).catch((function(t){console.log("数据获取失败")}))},paidSum:function(){this.tableData.forEach((function(t){var e=0;t.productDetails.forEach((function(t){e+=t.paid})),console.log(e)}))},sechOrder:function(){var t=Object(vt["a"])({a:this.orderNumber,b:this.platform,c:this.shopName,d:this.product,e:this.sku},"e",this.trackingNumber);this.axios.post("http://localhost:3000/orderInfo",this.qs.stringify(t)).then((function(t){console.log(t.data)}))}},mounted:function(){this.getData("http://localhost:3000/topMenuJson"),this.getOrderData("http://localhost:3000/orderInfo")},computed:{}},ft=ht,_t=Object(o["a"])(ft,dt,pt,!1,null,"f746c06e",null),mt=_t.exports;s["default"].use(u["a"]);var bt=new u["a"]({mode:"history",base:"/",linkActiveClass:"active",linkExactActiveClass:"active",routes:[{path:"/",name:"order",component:k,children:[{path:"/account",name:"account",component:M},{path:"/customers",name:"customers",component:K},{path:"/dashboard",name:"dashboard",component:X},{path:"/orderContent",name:"orderContent",component:j,children:[{path:"/pend",name:"pend",component:mt}],redirect:"/pend"},{path:"/products",name:"products",component:nt},{path:"/settings",name:"settings",component:ut},{path:"/pend/:id",name:"viewContent",component:O}],redirect:"/orderContent"}]}),gt=a("2f62"),Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"publicHeader"},[s("h1",{staticClass:"logo"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:a("c780"),height:"50",width:"160",alt:""}})])],1),s("span",[t._v("Log Out")])])},yt=[],kt={name:"publicHeader",data:function(){return{}}},xt=kt,St=Object(o["a"])(xt,Ct,yt,!1,null,"36664807",null),Dt=St.exports;s["default"].component("publicHeader",Dt),s["default"].use(gt["a"]);var wt=new gt["a"].Store({state:{},mutations:{},actions:{}}),Pt=a("bc3a"),Ot=a.n(Pt),Nt=a("a7fe"),Et=a.n(Nt),At=a("4328"),$t=a.n(At),Tt=a("5c96"),jt=a.n(Tt);a("0fae"),a("fd38"),a("8d8b");s["default"].use(jt.a),s["default"].use(Et.a,Ot.a),s["default"].prototype.qs=$t.a,s["default"].config.productionTip=!1,new s["default"]({router:bt,store:wt,render:function(t){return t(c)}}).$mount("#app")},"7faf":function(t,e,a){"use strict";var s=a("8fba"),n=a.n(s);n.a},"8d8b":function(t,e,a){},"8fba":function(t,e,a){},c780:function(t,e,a){t.exports=a.p+"img/logo.f6973b02.png"},fd38:function(t,e,a){}});
//# sourceMappingURL=app.ebd9b4d3.js.map