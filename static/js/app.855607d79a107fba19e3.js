webpackJsonp([1],[,,,,function(t,e,i){"use strict";var a=i(83),s=i.n(a),n=i(21),r=(i.n(n),i(84)),o=i.n(r),c=i(86),l=i.n(c);e.a=[{path:"/",name:"index",component:s.a},{path:"/newsDetails/:id",name:"newsDetails",component:o.a},{path:"/themeList/:id",name:"themeList",component:l.a}]},,,,function(t,e,i){function a(t){i(78)}var s=i(1)(i(46),i(94),a,"data-v-f62fc210",null);t.exports=s.exports},,,,,,,,function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s}),i.d(e,"c",function(){return n});var a="ADD_NEWS",s="CHANGE_CURRENT_THEMEID",n="ADD_DATE"},,,,,function(t,e,i){function a(t){i(77)}var s=i(1)(i(49),i(93),a,"data-v-e1db8062",null);t.exports=s.exports},function(t,e,i){"use strict";var a=i(5),s=i(96),n=i(56),r=i(54),o=i.n(r),c=i(53),l=i(55);a.default.use(s.a),e.a=new s.a.Store({state:n.a,getters:o.a,actions:c.a,mutations:l.a})},function(t,e){},,function(t,e,i){function a(t){i(76)}var s=i(1)(i(44),i(92),a,null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i(4),i(10);e.default={name:"app"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),s=i.n(a);i(4);e.default={data:function(){return{topArticles:{}}},created:function(){var t=this;s.a.get("/api/news/latest").then(function(e){t.topArticles=e.data.top_stories,console.log(t.topArticles)}).catch(function(t){console.log(t)})},methods:{changeImgUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},articleDetails:function(t){this.$router.push({name:"newsDetails",params:{id:t}})}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),s=(i.n(a),i(85)),n=i.n(s);e.default={props:{headerTitle:String},data:function(){return{data:{},isShowSidebar:!1,newsDetails:"newsDetails",themeList:"themeList"}},created:function(){console.log(this.$route.name)},components:{SideBar:n.a},methods:{toggleSidebar:function(){this.isShowSidebar=!this.isShowSidebar},backToIndex:function(){this.$router.back(-1)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(82),s=i.n(a),n=i(21),r=i.n(n),o=i(8),c=i.n(o);e.default={data:function(){return{isShowSidebar:!1}},components:{Swipe:s.a,NewsList:r.a,HeaderBar:c.a},methods:{toggleSidebar:function(){this.isShowSidebar=!this.isShowSidebar}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),s=i.n(a),n=i(8),r=i.n(n);e.default={data:function(){return{data:{},imgId:""}},created:function(){this.fetchData()},components:{HeaderBar:r.a},methods:{fetchData:function(){var t=this,e=this.$route.params.id;console.log(this.$route),s.a.get("/api/news/"+e).then(function(e){e.data.body=t.getImgUrl(e.data.body),t.data=e.data,console.log(e.data.images),t.imgId=e.data.images.join("")}).catch(function(t){console.log(t)})},getImgUrl:function(t){return t.replace(/src="http\w{0,1}:\/\//g,'src="https://images.weserv.nl/?url=')},changeImgUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),s=i.n(a);e.default={data:function(){return{data:[],loading:!1,date:Date,dateStr:"",dateToChinese:""}},created:function(){var t=this;this.initDate(),s.a.get("api/news/latest").then(function(e){t.data=e.data.stories,console.log(e)}).catch(function(t){console.log(t)})},methods:{fetchMoreData:function(){var t=this;s.a.get("/api/news/before/"+this.dateStr).then(function(e){var i=e.data.stories,a=i.map(function(t){return t.id}),s=t.dateToChinese;t.$store.dispatch("addNews",{dateNum:s,articles:i,ids:a})}).catch(function(t){console.log(t)}),this.DateToChinese(),this.decreaseDate()},initDate:function(){this.date=new Date,this.DateToString()},DateToString:function(){var t=this.date.getFullYear(),e=this.date.getMonth()+1,i=this.date.getDate();e=e<10?"0"+e:e,i=i<10?"0"+i:i,this.dateStr=t+e+i,console.log(this.dateStr)},DateToChinese:function(){var t=(this.date.getFullYear(),this.date.getMonth()+1),e=this.date.getDate()-1,i=["星期六","星期天","星期一","星期二","星期三","星期四","星期五"];t=t<10?"0"+t:t,e=e<10?"0"+e:e,this.dateToChinese=t+"月"+e+"日   "+i[this.date.getDay()]},decreaseDate:function(){this.date.setDate(this.date.getDate()-1),console.log(this.date+1e8),this.DateToString()},changeImgUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},articleDetails:function(t){this.$router.push({name:"newsDetails",params:{id:t}})},loadMore:function(){this.loading=!0,this.fetchMoreData(),this.loading=!1,this.$store.dispatch("addDate",this.dateStr)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),s=i.n(a),n=i(59);i.n(n);e.default={props:["showresult"],data:function(){return{list:[],myresult:this.showresult}},created:function(){this.fetchData()},methods:{ShowSidebar:function(){this.$emit("hideSidebar")},skipping:function(t){this.$emit("hideSidebar"),-1==t?this.$router.push({name:"index"}):(this.$store.dispatch("changeCurrentThemeId",t),this.$router.push({name:"themeList",params:{id:t}}))},fetchData:function(){var t=this;s.a.get("/api/themes").then(function(e){t.list=e.data.others,console.log(e),t.list.unshift({color:0,thumbnail:"",description:"首页",id:-1,name:"首页"})}).catch(function(t){console.log(t)})}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),s=i.n(a),n=i(8),r=i.n(n);e.default={data:function(){return{data:[],id:"",loading:!1,title:"",headerTitle:"",imgUrl:"",description:"",stories:[]}},created:function(){this.id=this.$route.params.id,this.fetchData()},components:{HeaderBar:r.a},methods:{fetchData:function(){var t=this;s.a.get("/api/theme/"+this.id).then(function(e){t.title=e.data.name,t.imgUrl=e.data.background,t.description=e.data.description,t.stories=e.data.stories,t.headerTitle=e.data.name}).catch(function(t){console.log(t)})},loadMore:function(){this.loading=!0,this.fetchData(),this.loading=!1},changeImgUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},articleDetails:function(t){this.$router.push({name:"newsDetails",params:{id:t}})},ShowSidebar:function(){this.$emit("hideSidebar")}},watch:{$route:function(t,e){this.id=this.$route.params.id,this.fetchData()}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(5),s=i(25),n=i.n(s),r=i(4),o=i(10),c=i(22),l=i(24),d=i.n(l),u=i(23),h=(i.n(u),i(9)),f=i.n(h);a.default.use(d.a),a.default.use(o.a),a.default.use(f.a,{preLoad:1.3,error:"dist/error.png",loading:"dist/loading.gif",attempt:1,listenEvents:["scroll"]});var m=new o.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:r.a});new a.default({el:"#app",router:m,store:c.a,render:function(t){return t(n.a)}})},function(t,e,i){"use strict";var a=i(16);e.a={addNews:function(t,e){(0,t.commit)(a.a,e)},changeCurrentThemeId:function(t,e){(0,t.commit)(a.b,e)},addDate:function(t,e){(0,t.commit)(a.c,e)}}},function(t,e){},function(t,e,i){"use strict";var a,s=i(58),n=i.n(s),r=i(16);e.a=(a={},n()(a,r.a,function(t,e){t.list.push(e)}),n()(a,r.b,function(t,e){t.themeid=e}),n()(a,r.c,function(t,e){t.date=e}),a)},function(t,e,i){"use strict";e.a={list:[{dateNum:"",articles:[],ids:[]}],themeid:-1,date:"今日新闻"}},,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,i){function a(t){i(71)}var s=i(1)(i(45),i(87),a,"data-v-1d640b1c",null);t.exports=s.exports},function(t,e,i){function a(t){i(73)}var s=i(1)(i(47),i(89),a,null,null);t.exports=s.exports},function(t,e,i){function a(t){i(72)}var s=i(1)(i(48),i(88),a,"data-v-3a83f4be",null);t.exports=s.exports},function(t,e,i){function a(t){i(74)}var s=i(1)(i(50),i(90),a,"data-v-728c6924",null);t.exports=s.exports},function(t,e,i){function a(t){i(75)}var s=i(1)(i(51),i(91),a,"data-v-76c2ea39",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swipe"},[i("mt-swipe",{attrs:{auto:4e3}},t._l(t.topArticles,function(e){return i("mt-swipe-item",{nativeOn:{click:function(i){t.articleDetails(e.id)}}},[i("img",{staticClass:"articleImg",attrs:{src:t.changeImgUrl(e.image),alt:e.title}}),t._v(" "),i("span",{staticClass:"articleTitle"},[t._v(t._s(e.title))])])}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"news-detail"},[i("HeaderBar"),t._v(" "),i("div",{staticClass:"swipe"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.changeImgUrl(this.data.image),expression:"changeImgUrl(this.data.image)"}],staticClass:"articleImg"}),t._v(" "),i("span",{staticClass:"articleTitle"},[t._v(t._s(t.data.title))]),t._v(" "),i("span",{staticClass:"image-source"},[t._v(t._s(this.data.image_source))])]),t._v(" "),i("div",{staticClass:"body-wrap",domProps:{innerHTML:t._s(t.data.body)}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("HeaderBar"),t._v(" "),i("Swipe"),t._v(" "),i("NewsList")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar-box",class:{"show-sidebar":t.showresult}},[i("div",{staticClass:"swiper-slide"},[t._m(0),t._v(" "),i("div",{staticClass:"sidebar-list"},[i("ul",{staticClass:"sidebar-list-ul"},t._l(t.list,function(e){return i("li",{staticClass:"sidebar-list-li",on:{click:function(i){t.skipping(e.id)}}},[i("p",[t._v(t._s(e.name))]),t._v(" "),i("div",[t._v("+")])])}))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar-header"},[i("div",{staticClass:"user"},[i("img",{attrs:{src:"http://7xqch8.com1.z0.glb.clouddn.com/4.pic_hd.jpg",alt:""}}),t._v(" "),i("p",[t._v("卜成健")])]),t._v(" "),i("div",{staticClass:"function"},[i("div",{staticClass:"function-sub"},[i("i",{staticClass:"icon iconfont icon-wujiaoxing"}),t._v(" "),i("p",[t._v("我的收藏")])]),t._v(" "),i("div",{staticClass:"function-sub"},[i("i",{staticClass:"iconfont icon-lixian"}),t._v(" "),i("p",[t._v("离线下载")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ThemeList"},[i("HeaderBar",{attrs:{headerTitle:this.headerTitle}}),t._v(" "),i("div",{staticClass:"ThemePhoto"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.changeImgUrl(this.imgUrl),expression:"changeImgUrl(this.imgUrl)"}],staticClass:"articleImg"}),t._v(" "),i("span",{staticClass:"articleTitle"},[t._v(t._s(t.description))])]),t._v(" "),i("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],ref:"newsList",staticClass:"list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"40"}},t._l(this.stories,function(e){return i("li",{staticClass:"ThemeList-item",on:{click:function(i){t.articleDetails(e.id)}}},[i("span",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"image-wrapper"},[e.images?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.changeImgUrl(e.images[0]),expression:"changeImgUrl(story.images[0])"}],staticClass:"item-image"}):t._e()])])}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"newsList"},[i("ul",{staticClass:"list"},[i("li",[t._v("今日新闻")]),t._v(" "),t._l(t.data,function(e){return i("li",{key:e.id,staticClass:"list-item",on:{click:function(i){t.articleDetails(e.id)}}},[i("span",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"image-wrapper"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy.newsList",value:t.changeImgUrl(e.images[0]),expression:"changeImgUrl(article.images[0])",modifiers:{newsList:!0}}],staticClass:"item-image",attrs:{alt:e.title}})])])})],2),t._v(" "),t._l(this.$store.state.list,function(e){return i("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"40\n    "}},[i("li",[t._v(t._s(e.dateNum))]),t._v(" "),t._l(e.articles,function(e){return i("li",{key:e.id,staticClass:"list-item",on:{click:function(i){t.articleDetails(e.id)}}},[i("span",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"image-wrapper"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy.newsList",value:t.changeImgUrl(e.images[0]),expression:"changeImgUrl(article.images[0])",modifiers:{newsList:!0}}],staticClass:"item-image",attrs:{alt:e.title}})])])})],2)})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",{staticClass:"sidewrap"},[i("div",{staticClass:"sidebar"},[i("i",{staticClass:"icon iconfont ",class:{"icon-nopic-copy":this.$route.name!==this.newsDetails},on:{click:t.toggleSidebar}}),t._v(" "),this.$route.name!==this.newsDetails?i("i",{directives:[{name:"show",rawName:"v-show",value:this.$route.name!==this.themeList,expression:"this.$route.name!==this.themeList"}],staticClass:"con iconfont toptitle"},[t._v("今日新闻")]):t._e(),t._v(" "),i("i",{staticClass:"icon iconfont",class:{"icon-fanhui":this.$route.name===this.newsDetails},on:{click:t.backToIndex}}),t._v(" "),i("i",{staticClass:"icon iconfont frontpage"},[t._v(t._s(t.headerTitle))]),t._v(" "),i("i",{staticClass:"icon iconfont icon-lingdang"}),t._v(" "),i("i",{staticClass:"icon iconfont icon-fenxiang"})]),t._v(" "),i("SideBar",{attrs:{showresult:t.isShowSidebar},on:{hideSidebar:t.toggleSidebar}}),t._v(" "),t.isShowSidebar?i("div",{staticClass:"cover",on:{click:t.toggleSidebar}}):t._e()],1)])},staticRenderFns:[]}}],[52]);
//# sourceMappingURL=app.855607d79a107fba19e3.js.map