webpackJsonp([1],{38:function(n,e,t){t(84);var r=t(23)(t(40),t(96),"data-v-bd26cd6c",null);n.exports=r.exports},40:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(24),o=t.n(r),i=t(45),a=t.n(i),s=t(44),l=t.n(s),u=t(93),c=t.n(u),d=t(92),f=t.n(d),m=t(81),h=(t.n(m),function(){for(var n=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],t=!0,r=0;r<e.length;r++)if(n.indexOf(e[r])>0){t=!1;break}return t}()),g=function(n,e){var t=new Date(Date.parse(n.replace(/-/g,"/"))).getTime(),r=new Date(Date.parse(e.replace(/-/g,"/"))).getTime();return Math.abs(t-r)/864e5};document.title+=g((new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),"2016-09-15")+1+"天",e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:f.a},data:function(){return{interval:27,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Hi。李洁颖小公举！\n* 情人节快乐哟!\n* 这么久了。还没和宝宝说过我的工作呢！\n* 我是个前端工程师。俗称程序员。网页相关\n* 如这个页面。就是个什么也没有的网页\n* 我的工作就是给这种空白的页面加点儿东西\n* 嗯。说起来手机和电脑还得区分一下\n* 你现在用的是。。。"+(h?"电脑":"手机")+"\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* 白色背景太单调了。来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54); \n}\n/* 文字太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  "+(h?"width: 48%;height: 96%;":"width: 96%;height: 50%;")+"\n  font-size: 14px;\n  line-height:1.5;\n}\n/* 这些代码颜色都一样。加点儿高亮区别来 */\n.token.selector{ color: rgb(133,153,0) }\n.token.property{ color: rgb(187,137,0) }\n.token.punctuation{ color: yellow }\n.token.function{ color: rgb(42,161,152) }\n.token.comment{ color: rgb(177,177,177) }\n/* 加个 3D 效果 */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; \n  "+(h?"left: 0;":"left:0;right:0;margin:auto;")+"\n  top: 0; \n  -webkit-transition: none; \n  transition: none;   \n  "+(h?"-webkit-transform: rotateY(10deg) translateZ(-100px) ;transform: rotateY(10deg) translateZ(-100px) ;":"-webkit-transform: rotateX(-10deg) translateZ(-100px) ;transform: rotateX(-10deg) translateZ(-100px) ;")+"\n  "+(h?"":"-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;")+"\n}\n\n/* 再来一张信纸 */\n.resumeEditor{\n  position: fixed; \n  "+(h?"right: 0;":"left:0;right:0;margin:auto;")+"\n  "+(h?"top: 0;":"bottom:2%;")+"\n  padding: .5em;  \n  "+(h?"margin: .5em;":"")+"\n  "+(h?"width: 48%;height: 96%;":"width: 96%;height: 50%;")+"\n  border: 1px solid;\n  color: #222;\n  overflow: auto;\n  font-size: 14px;\n  line-height:1.5;\n  "+(h?"-webkit-transform: rotateY(-10deg) translateZ(-100px) ;transform: rotateY(-10deg) translateZ(-100px) ;":"-webkit-transform: rotateX(10deg) translateZ(-100px) ;transform: rotateX(10deg) translateZ(-100px) ;")+"\n    "+(h?"":"-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;")+"\n  }\n/* 我开始写了 */\n\n\n","\n/* 是不是看着很简陋粗糙？\n * 因为这是 Markdown 格式的\n * 一种程序员用来写文档日志的简易语言\n * 翻译成 网页 就行了\n */\n",'\n/* 再加点样式 */\n.resumeEditor{\n  padding: 2em;\n  line-height:1.8;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n  font-size:18px;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: rgba(221,221,221,.5);\n}\n\n/* OK。完成！ */\n\n'],currentMarkdown:"",fullMarkdown:"cjc × ljy\n----\n\n2014年12月31日晚。 \n与卿相约云影湖畔。\n虽双腿冷颤，心不胜欣喜\n2015年1月1日。相恋开始。  \n已有 `"+(g((new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),"2015-01-01")+1)+"` 天\n\n一起去过的地方\n----\n* 2015年5月 靖港古镇\n* 2015年5月 登临岳麓山\n* 2015年5月 梅溪湖音乐喷泉\n* 2015年12月 奥特莱斯圣诞树\n* 2016年1月 张家界的雪晴雨\n* 2016年2月 长沙动物园\n* 2016年8月 武汉东湖相会\n* 2016年9月 下雨的株洲方特\n* 2016年12月 冬日荔波之行\n* 2017年7月 初次见家长的橘子洲\n* 2018年12月 成都的美食之旅\n* 2019年5月 天真蓝的结婚证照片\n* 2019年5月 牵手逛一中\n* 2019年8月 参加婚礼顺便河南游\n* 2019年1月 一起参加长沙土著的婚礼\n* 2019年2月 一起回家过年\n\n未来还有很长，我想带你去的地方还有很多...\n\n一起呲过的美食\n----\n\n* 君英的饺子\n* 西门的凉菜\n* 七杯茶的烧仙草\n* 辣辣的王记热卤\n* 小摊的烤羊肉串\n* 流口水的螺狮粉\n* 妖灵妖必旺的大蜘蛛\n* 木村屋的暖暖灯光\n* 幸福西饼的小蛋糕\n* 北辰三角洲的下午茶\n* 边走边吃的香米糕\n* 一起排队的茶颜悦色\n* 一起啃螃蟹的五溪红小子\n* 一起到处吃的年会券\n* ……\n\n未来还有很长，想带你吃的美食还有很多...\n\n\n一起玩过的游戏\n----\n\n* 结缘的剑灵\n* 英雄联盟\n* 炉石传说\n* 王者荣耀\n* 问道\n* 天涯明月刀\n* 绝地求生\n* 饥荒\n* 战斗方块剧场\n* dota自走棋\n* ……\n\n未来还有很长，想带你玩的游戏还有很多...\n----\n\n> 很感激在我最美好的年华遇见了你\n\n> 或许我不是一个很体贴的好男友好老公\n\n> 但我会尽我自己最大的努力\n\n> 给你我全部的爱\n\n\n> 霜雪落满头\n\n> 与卿共白首\n\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=l()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=l()(a.a.mark(function e(){var r,s,l,u,c,d=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:s=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),l=s-r.length,this.currentStyle.length<s?(u=this.currentStyle.length-l,c=r.substring(u,u+1)||" ",this.currentStyle+=c,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},41:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(85),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},42:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(86),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},43:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(39),o=t(38),i=t.n(o);new r.a({el:"#app",render:function(n){return n(i.a)}})},81:function(n,e){},82:function(n,e){},83:function(n,e){},84:function(n,e){},92:function(n,e,t){t(83);var r=t(23)(t(41),t(95),"data-v-3539023c",null);n.exports=r.exports},93:function(n,e,t){t(82);var r=t(23)(t(42),t(94),"data-v-23b5cc2c",null);n.exports=r.exports},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}}),n._v(" "),n._m(0)],1)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("audio",{attrs:{autoplay:""}},[t("source",{attrs:{src:"https://sharefs.yun.kugou.com/202002132156/4b87e9dcbeb84c8107d453e7ef294d5e/G146/M08/05/01/0g0DAFvH-ieAWaK6AEEpYqirB8A023.mp3",type:"audio/mpeg"}})])}]}}},[43]);