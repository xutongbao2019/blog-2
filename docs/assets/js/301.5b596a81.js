(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{826:function(t,e,a){"use strict";a.r(e);var _=a(7),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("1.登录")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190418103555754.png?x-oss-processimage/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw,size_16,color_FFFFFF,t_70",alt:""}})]),t._v(" "),a("p",[t._v("2.新建")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190418103606990.png?x-oss-processimage/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw,size_16,color_FFFFFF,t_70",alt:""}})]),t._v(" "),a("p",[t._v("3.列表")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190418111640694.png?x-oss-processimage/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw,size_16,color_FFFFFF,t_70",alt:""}})]),t._v(" "),a("p",[t._v("4.列表（测试和运维）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190418111653518.png?x-oss-processimage/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw,size_16,color_FFFFFF,t_70",alt:""}})]),t._v(" "),a("p",[t._v("在线原型图："),a("a",{attrs:{href:"https://www.xiaopiu.com/project?proid5cb6c83591b3aa5c3a8d5386&activePage1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.xiaopiu.com/project?proid=5cb6c83591b3aa5c3a8d5386&activePage=1"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"简单解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单解释"}},[t._v("#")]),t._v(" 简单解释")]),t._v(" "),a("p",[t._v("登录页："),a("br"),t._v("\n开发、测试和运维人员登录")]),t._v(" "),a("p",[t._v("新建页："),a("br"),t._v("\n填写项目名称和分支名称")]),t._v(" "),a("p",[t._v("列表页："),a("br"),t._v("\n代码有更新时点击更新，部署完可以直接通过分支名称进行测试和联调，例如 http://feature_login.baidu.com")]),t._v(" "),a("p",[t._v("测试和运维的列表页："),a("br"),t._v("\n可以合并代码，合并后自动部署"),a("br"),t._v("\n合并到develop分支后可以通过http://develop.baidu.com访问"),a("br"),t._v("\n合并到master分支后可以通过http://master.baidu.com访问")]),t._v(" "),a("h1",{attrs:{id:"举个例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举个例子"}},[t._v("#")]),t._v(" 举个例子")]),t._v(" "),a("p",[t._v("1.后端在git上有个项目叫api，前端在git上有个项目叫web，这两个项目相结合实现一款产品叫baidu")]),t._v(" "),a("p",[t._v("2.两个项目上拥有完全相同的分支，分别是master、develop、feature_login、feature_tasklist、feature_systemset等等很多需求分支")]),t._v(" "),a("p",[t._v("3.在局域网内有一台固定的机器部署master分支上的代码，可以通过http://master.baidu.com访问，"),a("br"),t._v("\n还有一台固定的机器部署develop分支上的代码，可以通过http://develop.baidu.com访问")]),t._v(" "),a("p",[t._v("4.运维会写一套代码监控，监控master和develop这两分支上是否有代码有更新，如果有更新，程序就会自动部署到这两台机器上")]),t._v(" "),a("p",[t._v("5.在开发新需求时，前后端会建一个相同的分支名，例如feature_login，这个需求新开发的代码都提交到这个分支上，"),a("br"),t._v("\n当前后端需要联调时，登录部署测试平台，在平台上分别新建前后端项目feature_login分支的部署，"),a("br"),t._v("\n部署完成后可以通过http://feature_login.baidu.com访问，进行测试和联调")]),t._v(" "),a("p",[t._v("5.部署测试平台的列表页展示的是目前在测试的所有分支，程序员在分支上提交代码后，需要点击对应分支的更新按钮，"),a("br"),t._v("\n更新完成后就可以通过http://feature_login.baidu.com测试新更新的内容了，可以进行频繁的修改bug和测试的工作")]),t._v(" "),a("p",[t._v("6.某个需求全部测试完成后由测试合并到develop分支上，可以在develop上进行复测，合并到develop分支上后，原来的feature_login分支将会被删除，"),a("br"),t._v("\n测试虚拟机也会被自动回收，测试链接http://feature_login.baidu.com也将不能访问，在开发人员的部署测试平台列表页也将删除feature_login对应的记录")]),t._v(" "),a("p",[t._v("7.如果develop上有bug，则需要新建feature分支修改代码并重新在部署测试平台上部署并测试")]),t._v(" "),a("p",[t._v("参考链接：")]),t._v(" "),a("p",[t._v("互联网行业最佳产品开发流程")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/xutongbao/article/details/88294489",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/xutongbao/article/details/88294489"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);