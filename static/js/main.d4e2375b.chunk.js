(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{100:function(e,t,a){e.exports=a(180)},177:function(e,t,a){},178:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),i=a.n(c),l=a(27),s=a(11),r=a(50),m=a(51),p=a(54),u=a(53),h=a(28),d=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={tableItemIndex:0},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return t.split("/").length>2?null:o.a.createElement("div",{style:{width:"100%",height:"70px",position:"fixed",bottom:"-1px"}},o.a.createElement(h.b,{unselectedTintColor:"#949494",tintColor:"#111213",barTintColor:"white"},o.a.createElement(h.b.Item,{className:"bar",title:"\u9996\u9875",key:"home",icon:o.a.createElement("i",{className:"iconfont icon-shouye"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-shouye1"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),o.a.createElement(h.b.Item,{icon:o.a.createElement("i",{className:"iconfont icon-gouwuche1"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-gouwuche"}),title:"\u6536\u85cf",key:"like",selected:"/shoucang"===t,onPress:function(){e.props.history.push("/shoucang")},"data-seed":"logId1"}),o.a.createElement(h.b.Item,{icon:o.a.createElement("i",{className:"iconfont icon-dingdanliebiao"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-dingdanliebiao-tianchong"}),title:"\u8ba2\u5355\u5217\u8868",key:"list",selected:"/list"===t,onPress:function(){e.props.history.push("/list")},"data-seed":"logId2"}),o.a.createElement(h.b.Item,{icon:o.a.createElement("i",{className:"iconfont icon-wode1"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-wode"}),title:"\u6211\u7684\u6dd8\u5b9d",key:"my",selected:"/my"===t,onPress:function(){e.props.history.push("/my")},"data-seed":"logId3"})))}}]),a}(o.a.Component),g=Object(s.g)(d),E=a(21),f=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={data:["https://gw.alicdn.com/imgextra/i3/191/O1CN01VWfpT01DHWHQurTZ7_!!191-0-lubanu.jpg","https://gw.alicdn.com/imgextra/i2/87/O1CN015w4ZpM1CVt5SJMwF8_!!87-0-lubanu.jpg","https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg","https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg","https://gw.alicdn.com/imgextra/i2/84/O1CN01SDz8671CUVtsDPOYB_!!84-0-ppp-picassogw.jpg"],imgHeight:105},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["https://gw.alicdn.com/imgextra/i3/191/O1CN01VWfpT01DHWHQurTZ7_!!191-0-lubanu.jpg","https://gw.alicdn.com/imgextra/i2/87/O1CN015w4ZpM1CVt5SJMwF8_!!87-0-lubanu.jpg","https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg","https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg","https://gw.alicdn.com/imgextra/i2/84/O1CN01SDz8671CUVtsDPOYB_!!84-0-ppp-picassogw.jpg"]})}),100)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{paddingTop:"40px"}},o.a.createElement(h.a,{autoplay:!0,infinite:!0},this.state.data.map((function(t){return o.a.createElement("a",{key:t,href:"http://www.taobao.com",style:{width:"100%",height:e.state.imgHeight}},o.a.createElement("img",{src:"".concat(t),alt:"",style:{width:"100%"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({height:e.state.imgHeight})}}))}))))}}]),a}(o.a.Component);a(177);var b=Object(E.b)((function(e){return e}))((function(e){return e.dispatch((function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e({type:"GOODS",datalist:t.data})}))})),o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"home_search"},o.a.createElement("i",{className:"iconfont icon-taobao",style:{position:"absolute",left:"3%",color:"white",fontSize:"250%"}}),o.a.createElement(l.b,{to:"/home/search"},o.a.createElement("input",{type:"text",value:"\u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa",className:"home_inp"})),o.a.createElement("i",{className:"iconfont icon-sousuo",style:{position:"absolute",left:"38%",top:"30%",color:"white"}})),o.a.createElement("div",{className:"home_content"},o.a.createElement(f,null),o.a.createElement("div",{className:"home_xihuan"},o.a.createElement("i",{className:"iconfont icon-aixin"}),"\u4f60\u53ef\u80fd\u8fd8\u559c\u6b22"),o.a.createElement("div",{className:"home_photo"},e.datalist.map((function(t,a){return o.a.createElement(l.b,{to:{pathname:"/home/goods",data:e.datalist,item:t}},o.a.createElement("div",{className:"home_photo_shop"},o.a.createElement("img",{src:t.img}),o.a.createElement("div",{className:"home_box"},t.title),o.a.createElement("div",null,o.a.createElement("div",{className:"how_much"},"\uffe5",t.price),o.a.createElement("div",{className:"how_many"},t.id,"\u4eba\u5df2\u8d2d\u4e70"))))})))))})),x=function(e){return o.a.createElement("div",{style:{position:"fixed",backgroundColor:"white",width:"100%",height:"45px"}},o.a.createElement("div",{style:{border:0,borderRadius:"5px",backgroundColor:"#E3E3E5",position:"relative",width:"300px",height:"32px",left:"14px",top:"6px"}},o.a.createElement("form",{style:{float:"left",marginTop:"5px"}},o.a.createElement("select",{style:{backgroundColor:"#E3E3E5",border:0,color:"grey"}},o.a.createElement("option",{selected:"selected"},"\u5b9d\u8d1d"),o.a.createElement("option",null,"\u5e97\u94fa"),o.a.createElement("option",null,"\u5929\u732b"))),o.a.createElement("input",{style:{border:0,position:"fixed",top:"13px",left:"70px",backgroundColor:"#E3E3E5",width:"200px"}}),o.a.createElement("i",{className:"iconfont icon-sousuo",style:{position:"fixed",top:"10px",left:"280px",fontSize:"23px"}}),o.a.createElement("div",{style:{marginLeft:"300px",height:"30px",width:"67px",lineHeight:"34px",textAlign:"center",color:"grey"},onClick:e.history.goBack},"\u53d6\u6d88")))},y=(a(178),Object(E.b)((function(e){return e}))((function(e){var t=e.location.item;return o.a.createElement("div",{className:"goods"},o.a.createElement("div",{className:"content"},o.a.createElement("img",{src:t.img}),o.a.createElement("p",null,t.title),o.a.createElement("p",null,"\uffe5",t.price),o.a.createElement(l.b,{to:"/"},o.a.createElement("div",{className:"fanhui"},o.a.createElement("i",null,o.a.createElement("i",{className:"iconfont icon-return",style:{color:"white",position:"fixed",fontSize:"25px"}})))),o.a.createElement("div",{className:"gowuche"},o.a.createElement("i",{className:"iconfont icon-gouwuche1",style:{color:"white",position:"fixed",fontSize:"28px"}}))),o.a.createElement("div",{className:"bar"},o.a.createElement("div",{className:"bar_bar"},o.a.createElement("div",{className:"bar_dianpu"},o.a.createElement("i",{className:"iconfont icon-dianpu"}),o.a.createElement("div",null,"\u5e97\u94fa")),o.a.createElement("div",{className:"bar_shoucang",onClick:function(){return function(){e.shoucang.push(t);var a=t.id;console.log(a);for(var n=0;n<e.shoucang.length-1;n++)e.shoucang[n].id===a&&(console.log("\u91cd\u590d\u6536\u85cf"),alert("\u4eb2\uff0c\u91cd\u590d\u6536\u85cf\u54e6\uff01"),e.shoucang.splice(n,1))}()}},o.a.createElement("i",{className:"iconfont icon-shoucang"}),o.a.createElement("div",null,"\u6536\u85cf")),o.a.createElement("div",{className:"bar_gouwuche"},o.a.createElement("i",{className:"iconfont icon-gouwuche1"}),o.a.createElement("div",null,"\u8d2d\u7269\u8f66"))),o.a.createElement("div",{className:"bar_buy"},"\u52a0\u5165\u8d2d\u7269\u8f66"),o.a.createElement("div",{className:"bar_join"},"\u7acb\u5373\u8d2d\u4e70")))}))),v=Object(E.b)((function(e){return e}))((function(e){return e.useinfo||e.history.push("/login"),console.log(e.shoucang),o.a.createElement("div",{style:{width:"100%"}},o.a.createElement("h2",{style:{textAlign:"center"}},"\u6211\u7684\u6536\u85cf"),e.shoucang.map((function(t,a){return o.a.createElement("div",{style:{bottom:"50px",float:"left",backgroundColor:"pink",width:"100%",height:"170px"}},o.a.createElement("div",{style:{marginLeft:"20px",marginTop:"14px",float:"left",width:"255px",height:"150px"}},o.a.createElement("img",{src:t.img,style:{width:"245px",height:"140px",borderRadius:"10px"}})),o.a.createElement("div",{onClick:function(){return e.dispatch({type:"DEL",item:t}),e.history.push("/shoucang")},style:{float:"left",width:"80px",height:"150px",textAlign:"center",lineHeight:"150px",fontSize:"20px",color:"blue"}},"\u53d6\u6d88\u6536\u85cf"))})))})),w=Object(E.b)((function(e){return e}))((function(e){return e.dispatch((function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e({type:"LOGIN",username:t.data.name})}))})),console.log(e),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("input",{type:"text",placeholder:"\u8f93\u5165\u59d3\u540d",id:"inp",style:{marginLeft:"30px",marginTop:"50px",width:"300px",height:"35px"}})),o.a.createElement("div",null,o.a.createElement("button",{type:"button",style:{marginLeft:"30px",width:"308px",height:"35px"},onClick:function(){!function(){var t=document.getElementById("inp");console.log(t.value),t.value===e.useinfo?(alert("\u767b\u5f55\u6210\u529f"),console.log("\u767b\u5f55\u6210\u529f"),e.history.push("/shoucang")):(alert("\u4eb2\uff0c\u8bf7\u5148\u767b\u5f55\u54e6"),console.log("\u8bf7\u767b\u5f55"))}()}},"\u767b\u5f55")))})),N=a(44),j=a(99),X={datalist:[],shoucang:[],useinfo:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object.assign({},e,{useinfo:t.username});case"GOODS":return Object.assign({},e,{datalist:t.datalist});case"SHOUCANG":return Object.assign({},e,{shoucang:[].concat(Object(j.a)(e.shoucang),[t.index])});case"DEL":for(var a=0;a<e.shoucang.length;a++)t.item===e.shoucang[a]&&e.shoucang.splice(a,1);return Object.assign({},e);default:return e}},C=a(98),k=Object(N.a)(C.a)(N.c)(O),_=function(){return o.a.createElement("h2",null,"\u8ba2\u5355\u5217\u8868")},I=function(){return o.a.createElement("h2",null,"\u6211\u7684\u6dd8\u5b9d")},S=function(){return o.a.createElement(E.a,{store:k},o.a.createElement(l.a,null,o.a.createElement(g,null),o.a.createElement(s.d,null,o.a.createElement(s.b,{exact:!0,path:"/",component:b}),o.a.createElement(s.b,{path:"/shoucang",component:v}),o.a.createElement(s.b,{path:"/list",component:_}),o.a.createElement(s.b,{path:"/my",component:I}),o.a.createElement(s.b,{path:"/home/search",component:x}),o.a.createElement(s.b,{path:"/home/goods",component:y}),o.a.createElement(s.b,{path:"/login",component:w}),o.a.createElement(s.b,{render:function(){return o.a.createElement(s.a,{to:"/"})}}))))};a(179);i.a.render(o.a.createElement(S,null),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.d4e2375b.chunk.js.map