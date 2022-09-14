"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[48385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,k=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u5165\u5e93 Hive \u793a\u4f8b",sidebar_position:2},l=void 0,i={unversionedId:"quick_start/hive_example",id:"version-0.12.0/quick_start/hive_example",title:"\u5165\u5e93 Hive \u793a\u4f8b",description:"\u672c\u8282\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u5e2e\u52a9\u60a8\u4f7f\u7528 Docker \u5feb\u901f\u4f53\u9a8c InLong \u7684\u5b8c\u6574\u6d41\u7a0b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.12.0/quick_start/hive_example.md",sourceDirName:"quick_start",slug:"/quick_start/hive_example",permalink:"/zh-CN/docs/0.12.0/quick_start/hive_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/quick_start/hive_example.md",tags:[],version:"0.12.0",sidebarPosition:2,frontMatter:{title:"\u5165\u5e93 Hive \u793a\u4f8b",sidebar_position:2},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"\u5982\u4f55\u7f16\u8bd1",permalink:"/zh-CN/docs/0.12.0/quick_start/how_to_build"},next:{title:"\u4f7f\u7528 Pulsar \u793a\u4f8b",permalink:"/zh-CN/docs/0.12.0/quick_start/pulsar_example"}},p={},c=[{value:"\u5b89\u88c5 Hive",id:"\u5b89\u88c5-hive",level:2},{value:"\u5b89\u88c5 InLong",id:"\u5b89\u88c5-inlong",level:2},{value:"\u65b0\u5efa\u63a5\u5165",id:"\u65b0\u5efa\u63a5\u5165",level:2},{value:"\u5ba1\u6279\u63a5\u5165",id:"\u5ba1\u6279\u63a5\u5165",level:2},{value:"\u914d\u7f6e agent",id:"\u914d\u7f6e-agent",level:2}],s={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8282\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u5e2e\u52a9\u60a8\u4f7f\u7528 Docker \u5feb\u901f\u4f53\u9a8c InLong \u7684\u5b8c\u6574\u6d41\u7a0b\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5-hive"},"\u5b89\u88c5 Hive"),(0,a.kt)("p",null,"Hive \u662f\u8fd0\u884c\u7684\u5fc5\u5907\u7ec4\u4ef6\u3002\u5982\u679c\u60a8\u7684\u673a\u5668\u4e0a\u6ca1\u6709 Hive\uff0c\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528 Docker \u8fdb\u884c\u5feb\u901f\u5b89\u88c5\uff0c\u8be6\u60c5\u53ef\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/big-data-europe/docker-hive"},"\u8fd9\u91cc"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u5982\u679c\u4f7f\u7528\u4ee5\u4e0a Docker \u955c\u50cf\u7684\u8bdd\uff0c\u6211\u4eec\u9700\u8981\u5728 namenode \u4e2d\u6dfb\u52a0\u4e00\u4e2a\u7aef\u53e3\u6620\u5c04 ",(0,a.kt)("inlineCode",{parentName:"p"},"8020:8020"),"\uff0c\u56e0\u4e3a\u5b83\u662f HDFS DefaultFS \u7684\u7aef\u53e3\uff0c\u540e\u9762\u5728\u914d\u7f6e Hive \u65f6\u9700\u8981\u7528\u5230\u3002")),(0,a.kt)("h2",{id:"\u5b89\u88c5-inlong"},"\u5b89\u88c5 InLong"),(0,a.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5b89\u88c5 InLong \u7684\u5168\u90e8\u7ec4\u4ef6\uff0c\u8fd9\u91cc\u63d0\u4f9b\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6309\u7167 ",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.12.0/deployment/docker"},"\u8fd9\u91cc\u7684\u8bf4\u660e"),"\uff0c\u4f7f\u7528 Docker \u8fdb\u884c\u5feb\u901f\u90e8\u7f72\u3002\uff08\u63a8\u8350\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u6309\u7167 ",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.12.0/deployment/bare_metal"},"\u8fd9\u91cc\u7684\u8bf4\u660e"),"\uff0c\u4f7f\u7528\u4e8c\u8fdb\u5236\u5305\u4f9d\u6b21\u5b89\u88c5\u5404\u7ec4\u4ef6\u3002")),(0,a.kt)("h2",{id:"\u65b0\u5efa\u63a5\u5165"},"\u65b0\u5efa\u63a5\u5165"),(0,a.kt)("p",null,"\u90e8\u7f72\u5b8c\u6bd5\u540e\uff0c\u9996\u5148\u6211\u4eec\u8fdb\u5165 \u201c\u6570\u636e\u63a5\u5165\u201d \u754c\u9762\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684 \u201c\u65b0\u5efa\u63a5\u5165\u201d\uff0c\u65b0\u5efa\u4e00\u6761\u63a5\u5165\uff0c\u6309\u4e0b\u56fe\u6240\u793a\u586b\u5165\u6570\u636e\u6d41 Group \u4fe1\u606f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create Group",src:n(51829).Z,width:"812",height:"734"})),(0,a.kt)("p",null,"\u7136\u540e\u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u6309\u4e0b\u56fe\u6240\u793a\u586b\u5165\u6570\u636e\u6d41\u4fe1\u606f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create Stream",src:n(98544).Z,width:"909",height:"460"})),(0,a.kt)("p",null,"\u6ce8\u610f\u5176\u4e2d\u6d88\u606f\u6765\u6e90\u9009\u62e9\u201c\u6587\u4ef6\u201d\uff0c\u6682\u65f6\u4e0d\u7528\u65b0\u5efa\u6570\u636e\u6e90\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u5728\u4e0b\u9762\u7684\u201c\u6570\u636e\u4fe1\u606f\u201d\u4e00\u680f\u4e2d\u586b\u5165\u4ee5\u4e0b\u4fe1\u606f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Data Information",src:n(35489).Z,width:"1332",height:"429"})),(0,a.kt)("p",null,"\u7136\u540e\u5728\u6570\u636e\u6d41\u5411\u4e2d\u9009\u62e9 Hive\uff0c\u5e76\u70b9\u51fb \u201c\u6dfb\u52a0\u201d\uff0c\u6dfb\u52a0 Hive \u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hive Config",src:n(74217).Z,width:"1173",height:"682"})),(0,a.kt)("p",null,"\u6ce8\u610f\u8fd9\u91cc\u76ee\u6807\u8868\u65e0\u9700\u63d0\u524d\u521b\u5efa\uff0cInLong Manager \u4f1a\u5728\u63a5\u5165\u901a\u8fc7\u4e4b\u540e\u81ea\u52a8\u4e3a\u6211\u4eec\u521b\u5efa\u8868\u3002\u53e6\u5916\uff0c\u8bf7\u4f7f\u7528 \u201c\u8fde\u63a5\u6d4b\u8bd5\u201d \u4fdd\u8bc1 InLong Manager \u53ef\u4ee5\u8fde\u63a5\u5230\u4f60\u7684 Hive\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u70b9\u51fb\u201c\u63d0\u4ea4\u5ba1\u6279\u201d\u6309\u94ae\uff0c\u8be5\u63a5\u5165\u5c31\u4f1a\u521b\u5efa\u6210\u529f\uff0c\u8fdb\u5165\u5ba1\u6279\u72b6\u6001\u3002"),(0,a.kt)("h2",{id:"\u5ba1\u6279\u63a5\u5165"},"\u5ba1\u6279\u63a5\u5165"),(0,a.kt)("p",null,"\u8fdb\u5165\u201c\u5ba1\u6279\u7ba1\u7406\u201d\u754c\u9762\uff0c\u70b9\u51fb\u201c\u6211\u7684\u5ba1\u6279\u201d\uff0c\u5c06\u521a\u521a\u7533\u8bf7\u7684\u63a5\u5165\u901a\u8fc7\u3002"),(0,a.kt)("p",null,"\u5230\u6b64\u63a5\u5165\u5c31\u5df2\u7ecf\u521b\u5efa\u5b8c\u6bd5\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 Hive \u4e2d\u770b\u5230\u76f8\u5e94\u7684\u8868\u5df2\u7ecf\u88ab\u521b\u5efa\uff0c\u5e76\u4e14\u5728 TubeMQ \u7684\u7ba1\u7406\u754c\u9762\u4e2d\u53ef\u4ee5\u770b\u5230\u76f8\u5e94\u7684 topic \u5df2\u7ecf\u521b\u5efa\u6210\u529f\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e-agent"},"\u914d\u7f6e agent"),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u4f7f\u7528 docker \u8fdb\u5165 agent \u5bb9\u5668\u5185\uff0c\u521b\u5efa\u76f8\u5e94\u7684 agent \u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker exec -it agent sh\n")),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u65b0\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},".inlong")," \u6587\u4ef6\u5939\uff0c\u5e76\u521b\u5efa\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"groupId.local")," \u547d\u540d\u7684\u6587\u4ef6\uff0c\u5728\u5176\u4e2d\u586b\u5165 Dataproxy \u6709\u5173\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ mkdir .inlong\n$ cd .inlong\n$ touch b_test.local\n$ echo \'{"cluster_id":1,"isInterVisit":1,"size":1,"address": [{"port":46801,"host":"dataproxy"}], "switch":0}\' >> b_test.local\n')),(0,a.kt)("p",null,"\u7136\u540e\u9000\u51fa\u5bb9\u5668\uff0c\u4f7f\u7528 curl \u5411 agent \u5bb9\u5668\u53d1\u9001\u8bf7\u6c42\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8008/config/job\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/collect-data/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"inlongGroupId": "b_test",\n"inlongStreamId": "test_stream"\n},\n"op": "add"\n}\'\n')),(0,a.kt)("p",null,"\u81f3\u6b64\uff0cagent \u5c31\u914d\u7f6e\u5b8c\u6bd5\u4e86\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u53ef\u4ee5\u65b0\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"./collect-data/test.log")," \uff0c\u5e76\u5f80\u91cc\u9762\u6dfb\u52a0\u5185\u5bb9\uff0c\u6765\u89e6\u53d1 agent \u5411 dataproxy \u53d1\u9001\u6570\u636e\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ touch collect-data/test.log\n$ echo 'test,24' >> collect-data/test.log\n")),(0,a.kt)("p",null,"\u7136\u540e\u89c2\u5bdf agent \u548c dataproxy \u7684\u65e5\u5fd7\uff0c\u53ef\u4ee5\u770b\u5230\u76f8\u5173\u6570\u636e\u5df2\u7ecf\u6210\u529f\u53d1\u9001\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker logs agent\n$ docker logs dataproxy\n")))}u.isMDXComponent=!0},51829:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-group-57136f85704b6678cd1a957447bfb4d5.png"},98544:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-stream-92759b8f5add9db6300f28f87077aa51.png"},35489:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/data-information-793764387d32e1c8d9d5511c81e20bb5.png"},74217:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hive-config-7b09aa7985e1be2ef986bb3d8cd0f98a.png"}}]);