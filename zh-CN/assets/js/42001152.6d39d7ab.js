"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[82689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=c(n),k=r,h=g["".concat(u,".").concat(k)]||g[k]||p[k]||l;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},31938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"1.1.0 \u7248\u672c\u53d1\u5e03",author:"dockerzhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},o=void 0,i={permalink:"/zh-CN/blog/2022/04/25/release-1.1.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2022-04-25-release-1.1.0.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-04-25-release-1.1.0.md",title:"1.1.0 \u7248\u672c\u53d1\u5e03",description:"Apache InLong\uff08\u5e94\u9f99\uff09\u662f\u4e00\u4e2a\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u540c\u65f6\u652f\u6301\u6279\u548c\u6d41\uff0c\u65b9\u4fbf\u4e1a\u52a1\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002InLong\u652f\u6301\u5927\u6570\u636e\u9886\u57df\u7684\u91c7\u96c6\u3001\u6c47\u805a\u3001\u7f13\u5b58\u548c\u5206\u62e3\u529f\u80fd\uff0c\u7528\u6237\u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u628a\u6570\u636e\u4ece\u6570\u636e\u6e90\u5bfc\u5165\u5230\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u6216\u8005\u843d\u5730\u5230\u79bb\u7ebf\u5b58\u50a8\u3002",date:"2022-04-25T00:00:00.000Z",formattedDate:"2022\u5e744\u670825\u65e5",tags:[{label:"Apache InLong",permalink:"/zh-CN/blog/tags/apache-in-long"},{label:"Version",permalink:"/zh-CN/blog/tags/version"}],readingTime:6.245,hasTruncateMarker:!0,authors:[{name:"dockerzhang",url:"https://github.com/dockerzhang",imageURL:"https://avatars.githubusercontent.com/u/18047329?v=4"}],frontMatter:{title:"1.1.0 \u7248\u672c\u53d1\u5e03",author:"dockerzhang",author_url:"https://github.com/dockerzhang",author_image_url:"https://avatars.githubusercontent.com/u/18047329?v=4",tags:["Apache InLong","Version"]},prevItem:{title:"InLong Sort ETL \u65b9\u6848\u89e3\u6790",permalink:"/zh-CN/blog/2022/06/16/inlong-sort-etl"},nextItem:{title:"0.12.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2022/01/04/release-0.12.0"}},u={authorsImageUrls:[void 0]},c=[{value:"1.1.0 \u7248\u672c\u7279\u6027\u603b\u89c8",id:"110-\u7248\u672c\u7279\u6027\u603b\u89c8",level:2},{value:"\u7ba1\u63a7\u80fd\u529b\u589e\u5f3a",id:"\u7ba1\u63a7\u80fd\u529b\u589e\u5f3a",level:3},{value:"\u6570\u636e\u8282\u70b9\u4e30\u5bcc",id:"\u6570\u636e\u8282\u70b9\u4e30\u5bcc",level:3},{value:"\u914d\u5957\u5de5\u5177\u5efa\u8bbe",id:"\u914d\u5957\u5de5\u5177\u5efa\u8bbe",level:3},{value:"\u7cfb\u7edf\u5347\u7ea7",id:"\u7cfb\u7edf\u5347\u7ea7",level:3},{value:"1.1.0 \u7248\u672c\u7279\u6027\u4ecb\u7ecd",id:"110-\u7248\u672c\u7279\u6027\u4ecb\u7ecd",level:2},{value:"\u589e\u52a0 Manager Client",id:"\u589e\u52a0-manager-client",level:3},{value:"\u589e\u52a0 ManagerCtl \u547d\u4ee4\u884c\u5de5\u5177",id:"\u589e\u52a0-managerctl-\u547d\u4ee4\u884c\u5de5\u5177",level:3},{value:"Manager \u652f\u6301\u4e0b\u53d1 Sort \u4efb\u52a1",id:"manager-\u652f\u6301\u4e0b\u53d1-sort-\u4efb\u52a1",level:3},{value:"Manager \u5143\u6570\u636e\u4fdd\u5b58\u53bb ZooKeeper",id:"manager-\u5143\u6570\u636e\u4fdd\u5b58\u53bb-zookeeper",level:3},{value:"\u652f\u6301 MySQL Binlog \u91c7\u96c6",id:"\u652f\u6301-mysql-binlog-\u91c7\u96c6",level:3},{value:"Sort \u65b0\u589e Iceberg\u3001 ClickHouse\u3001 Kafka \u6d41\u5411\u5165\u5e93",id:"sort-\u65b0\u589e-iceberg-clickhouse-kafka-\u6d41\u5411\u5165\u5e93",level:3},{value:"Sort Standalone \u652f\u6301 Hive\u3001Elasticsearch\u3001Kafka",id:"sort-standalone-\u652f\u6301-hiveelasticsearchkafka",level:3},{value:"Protocol Buffers \u5347\u7ea7",id:"protocol-buffers-\u5347\u7ea7",level:3},{value:"InLong on Kubernetes \u4f18\u5316",id:"inlong-on-kubernetes-\u4f18\u5316",level:3},{value:"Dashboard \u63d2\u4ef6\u5316",id:"dashboard-\u63d2\u4ef6\u5316",level:3},{value:"\u5176\u4ed6\u7279\u6027\u53ca\u95ee\u9898\u4fee\u590d",id:"\u5176\u4ed6\u7279\u6027\u53ca\u95ee\u9898\u4fee\u590d",level:3},{value:"Apache InLong(incubating) \u540e\u7eed\u89c4\u5212",id:"apache-inlongincubating-\u540e\u7eed\u89c4\u5212",level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache InLong\uff08\u5e94\u9f99\uff09\u662f\u4e00\u4e2a\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u540c\u65f6\u652f\u6301\u6279\u548c\u6d41\uff0c\u65b9\u4fbf\u4e1a\u52a1\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002InLong\u652f\u6301\u5927\u6570\u636e\u9886\u57df\u7684\u91c7\u96c6\u3001\u6c47\u805a\u3001\u7f13\u5b58\u548c\u5206\u62e3\u529f\u80fd\uff0c\u7528\u6237\u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u628a\u6570\u636e\u4ece\u6570\u636e\u6e90\u5bfc\u5165\u5230\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u6216\u8005\u843d\u5730\u5230\u79bb\u7ebf\u5b58\u50a8\u3002"),(0,r.kt)("h2",{id:"110-\u7248\u672c\u7279\u6027\u603b\u89c8"},"1.1.0 \u7248\u672c\u7279\u6027\u603b\u89c8"),(0,r.kt)("p",null,"\u521a\u521a\u53d1\u5e03\u7684 1.1.0-incubating \u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("h3",{id:"\u7ba1\u63a7\u80fd\u529b\u589e\u5f3a"},"\u7ba1\u63a7\u80fd\u529b\u589e\u5f3a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0 Manager Client\uff0c\u652f\u6301\u96c6\u6210 InLong \u521b\u5efa\u4efb\u52a1"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0 ManagerCtl \u547d\u4ee4\u884c\u5de5\u5177\uff0c\u652f\u6301\u67e5\u770b\u3001\u521b\u5efa\u6570\u636e\u6d41"),(0,r.kt)("li",{parentName:"ul"},"Manager \u652f\u6301\u4e0b\u53d1 Agent \u4efb\u52a1"),(0,r.kt)("li",{parentName:"ul"},"Manager \u652f\u6301\u4e0b\u53d1 Sort Flink \u4efb\u52a1"),(0,r.kt)("li",{parentName:"ul"},"Manger \u6d41\u5411\u4efb\u52a1\u7ba1\u7406\uff0c\u652f\u6301\u542f\u52a8\u3001\u91cd\u542f\u3001\u6682\u505c\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"Manager \u63d2\u4ef6\u5316\u6539\u9020"),(0,r.kt)("li",{parentName:"ul"},"Manager \u5143\u6570\u636e\u7ba1\u7406\u652f\u6301\u4f7f\u7528 MySQL"),(0,r.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u7ba1\u7406\u4e00\u671f\uff0c\u7edf\u4e00\u96c6\u7fa4\u4fe1\u606f\u6ce8\u518c")),(0,r.kt)("h3",{id:"\u6570\u636e\u8282\u70b9\u4e30\u5bcc"},"\u6570\u636e\u8282\u70b9\u4e30\u5bcc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 Iceberg \u6d41\u5411\u5165\u5e93"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 ClickHouse \u6d41\u5411\u5165\u5e93"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 MySQL Binlog \u91c7\u96c6"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 Kafka \u91c7\u96c6"),(0,r.kt)("li",{parentName:"ul"},"Sort Standalone \u652f\u6301\u591a\u6d41\u5411")),(0,r.kt)("h3",{id:"\u914d\u5957\u5de5\u5177\u5efa\u8bbe"},"\u914d\u5957\u5de5\u5177\u5efa\u8bbe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dashboard \u63d2\u4ef6\u5316\u6539\u9020"),(0,r.kt)("li",{parentName:"ul"},"Kubernetes \u90e8\u7f72\u4f18\u5316"),(0,r.kt)("li",{parentName:"ul"},"Standalone \u90e8\u7f72\u91cd\u6784")),(0,r.kt)("h3",{id:"\u7cfb\u7edf\u5347\u7ea7"},"\u7cfb\u7edf\u5347\u7ea7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Protocol Buffers \u5347\u7ea7"),(0,r.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u7248\u672c Maven \u7248\u672c\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u590d\u4e00\u6279\u4f9d\u8d56 CVEs \u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"DataProxy \u652f\u6301 PB \u538b\u7f29\u534f\u8bae")),(0,r.kt)("p",null,"\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 642+ \u4e2a issue\uff0c\u5305\u542b 23+ \u4e2a\u91cd\u5927 feature \u548c 180+ \u4e2a improvements\u3002"),(0,r.kt)("h2",{id:"110-\u7248\u672c\u7279\u6027\u4ecb\u7ecd"},"1.1.0 \u7248\u672c\u7279\u6027\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"\u589e\u52a0-manager-client"},"\u589e\u52a0 Manager Client"),(0,r.kt)("p",null,"\u65b0\u589e\u7684 Manager Client\uff0c\u5b9a\u4e49\u4e86\u5e38\u89c1\u7684 InLong Group/Stream \u64cd\u4f5c\u63a5\u53e3\uff0c\u5305\u62ec\u4efb\u52a1\u7684\u521b\u5efa\u3001\u67e5\u770b\u548c\u5220\u9664\u3002\u7528\u6237\u901a\u8fc7 Manager Client\uff0c\u53ef\u4ee5\u5c06 InLong \u5185\u7f6e\u5230\u4efb\u4f55\u7b2c\u4e09\u65b9\u5e73\u53f0\u4e2d\uff0c\u5b9e\u73b0\u7edf\u4e00\u7684\u5b9a\u5236\u5316\u5e73\u53f0\u5efa\u8bbe\u3002Manager Client \u4e3b\u8981\u662f\u7531 @kipshi \u3001 @gong\u3001@ciscozhou \u8bbe\u8ba1\u548c\u5b9e\u73b0\uff0c\u611f\u8c22\u4e09\u4f4d\u8d21\u732e\u8005\u3002"),(0,r.kt)("h3",{id:"\u589e\u52a0-managerctl-\u547d\u4ee4\u884c\u5de5\u5177"},"\u589e\u52a0 ManagerCtl \u547d\u4ee4\u884c\u5de5\u5177"),(0,r.kt)("p",null,"ManagerCtl \u57fa\u4e8e Manager Client \u5f00\u53d1\u5b8c\u6210\uff0c\u662f\u4e00\u4e2a\u64cd\u4f5c InLong \u8d44\u6e90\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u7b80\u5316\u5f00\u53d1\u8005\u7684\u4f7f\u7528\u3002ManagerCtl \u662f\u7531 @haifxu \u72ec\u7acb\u8d21\u732e\uff0c\u5305\u62ec\u6307\u5f15\u5305\u62ec\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Usage: managerctl [options] [command] [command options]\nOptions:\n-h, --help\nGet all command about managerctl.\nCommands:\ncreate      Create resource by json file\nUsage: create [options]\n\u200b\ndescribe      Display details of one or more resources\nUsage: describe [options]\n\u200b\nlist      Displays main information for one or more resources\nUsage: list [options]\n")),(0,r.kt)("h3",{id:"manager-\u652f\u6301\u4e0b\u53d1-sort-\u4efb\u52a1"},"Manager \u652f\u6301\u4e0b\u53d1 Sort \u4efb\u52a1"),(0,r.kt)("p",null,"\u5728\u4e4b\u524d\u7248\u672c\uff0c\u7528\u6237\u521b\u5efa\u5b8c\u6570\u636e\u6d41 Group/Stream \u4efb\u52a1\u540e\uff0cSort \u9700\u8981\u901a\u8fc7\u547d\u4ee4\u884c\u63d0\u4ea4\u5230 Flink \u96c6\u7fa4\uff0c\u518d\u53bb\u6267\u884c\u6570\u636e\u5206\u62e3\u5de5\u4f5c\u3002\u5728 1.1.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5c06 Sort \u4efb\u52a1\u7684\u542f\u52a8\u3001\u505c\u6b62\u3001\u6302\u8d77\u64cd\u4f5c\uff0c\u7edf\u4e00\u5230 Manager \u5b8c\u6210\uff0c\u7528\u6237\u53ea\u9700\u8981\u5728 Manager \u90e8\u7f72\u65f6\u914d\u7f6e\u6b63\u786e\u7684 Flink \u96c6\u7fa4\uff0c\u5f53\u6570\u636e\u6d41\u5ba1\u6279\u901a\u8fc7\u540e\uff0c\u4f1a\u81ea\u52a8\u62c9\u8d77 Sort \u4efb\u52a1\u3002\u8be5\u90e8\u5206\u5de5\u4f5c\u4e3b\u8981\u662f\u7531 @LvJiancheng \u8d21\u732e\u5b8c\u6210\u3002"),(0,r.kt)("h3",{id:"manager-\u5143\u6570\u636e\u4fdd\u5b58\u53bb-zookeeper"},"Manager \u5143\u6570\u636e\u4fdd\u5b58\u53bb ZooKeeper"),(0,r.kt)("p",null,"InLong \u4f7f\u7528 ZooKeeper \u4fdd\u5b58\u6570\u636e\u6d41\u5143\u6570\u636e\uff0c\u589e\u52a0\u4e86\u5f00\u53d1\u8005\u548c\u7528\u6237\u7684\u90e8\u7f72\u95e8\u69db\u548c\u8fd0\u7ef4\u96be\u5ea6\u3002\u5728 1.1.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u9ed8\u8ba4\u5c06\u6570\u636e\u6d41\u5143\u6570\u636e\u4fdd\u5b58\u5728 DB \u4e2d\uff0cZooKeeper \u53ea\u4f5c\u4e3a\u5927\u89c4\u6a21\u573a\u666f\u4e0b\u53ef\u9009\u65b9\u6848\u3002\u611f\u8c22 @kipshi @yunqingmoswu \u8d21\u732e\u4e86\u53bb ZooKeeper \u7684 PR\u3002"),(0,r.kt)("h3",{id:"\u652f\u6301-mysql-binlog-\u91c7\u96c6"},"\u652f\u6301 MySQL Binlog \u91c7\u96c6"),(0,r.kt)("p",null,"1.1.0 \u7248\u672c\u5b8c\u6574\u652f\u6301\u4e86\u4ece MySQL \u91c7\u96c6\u6570\u636e\uff0c\u652f\u6301\u589e\u91cf\u548c\u5168\u91cf\u4e24\u79cd\u7b56\u7565\uff0c\u7528\u6237\u53ef\u4ee5\u5728 InLong \u7b80\u5355\u914d\u7f6e\u5c31\u53ef\u4ee5\u5b9e\u73b0 MySQL \u6570\u636e\u7684\u91c7\u96c6\u3002\u8be5\u90e8\u5206\u5de5\u4f5c\u662f\u7531 @EMsnap \u8d21\u732e\u5b8c\u6210\u3002"),(0,r.kt)("h3",{id:"sort-\u65b0\u589e-iceberg-clickhouse-kafka-\u6d41\u5411\u5165\u5e93"},"Sort \u65b0\u589e Iceberg\u3001 ClickHouse\u3001 Kafka \u6d41\u5411\u5165\u5e93"),(0,r.kt)("p",null,"1.1.0 \u7248\u672c\u4e2d\u589e\u52a0\u4e86\u591a\u79cd\u573a\u666f\u6570\u636e\u8282\u70b9\u7684\u5165\u5e93\uff0c\u5305\u62ec Iceberg\u3001 ClickHouse\u3001 Kafka\uff0c\u8fd9\u4e09\u79cd\u6d41\u5411\u7684\u652f\u6301\u4e30\u5bcc\u4e86 InLong \u7684\u4f7f\u7528\u573a\u666f\u3002\u65b0\u6d41\u5411\u7684\u652f\u6301\uff0c\u4e3b\u8981\u7531@chantccc @KevinWen007 @healchow \u53c2\u4e0e\u8d21\u732e\u3002"),(0,r.kt)("h3",{id:"sort-standalone-\u652f\u6301-hiveelasticsearchkafka"},"Sort Standalone \u652f\u6301 Hive\u3001Elasticsearch\u3001Kafka"),(0,r.kt)("p",null,"\u4e4b\u524d\u7248\u672c\u6709\u63d0\u5230\uff0c\u5bf9\u4e8e\u975e Flink \u73af\u5883\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 Sort Standalone \u6765\u8fdb\u884c\u6570\u636e\u6d41\u5206\u62e3\u3002\u5728 1.1.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u589e\u52a0\u4e86\u5bf9 Hive\u3001ElasticSearch\u3001Kafka \u7684\u652f\u6301\uff0c\u6269\u5c55\u4e86 Sort Standalone \u7684\u4f7f\u7528\u573a\u666f\u3002Sort Standalone \u4e3b\u8981\u6709 @vernedeng @luchunliang \u53c2\u4e0e\u8d21\u732e\u3002"),(0,r.kt)("h3",{id:"protocol-buffers-\u5347\u7ea7"},"Protocol Buffers \u5347\u7ea7"),(0,r.kt)("p",null,"InLong \u6240\u6709\u7ec4\u4ef6 Protocol Buffers \u4f9d\u8d56\u4ece 2.5.0 \u5347\u7ea7\u5230 3.19.4\uff0c\u611f\u8c22 @gosonzhang @doleyzi \u7684\u8d21\u732e\uff0c\u4e3a Protocol Buffers \u5347\u7ea7\u505a\u7684\u5927\u91cf\u517c\u5bb9\u548c\u6d4b\u8bd5\u5de5\u4f5c\u3002"),(0,r.kt)("h3",{id:"inlong-on-kubernetes-\u4f18\u5316"},"InLong on Kubernetes \u4f18\u5316"),(0,r.kt)("p",null,"InLong on Kubernetes \u7684\u4f18\u5316\u5de5\u4f5c\u4e3b\u8981\u5305\u62ec\u589e\u52a0 Audit\u3001\u68b3\u7406\u914d\u7f6e\u3001\u4f18\u5316\u6d88\u606f\u961f\u5217\u4f7f\u7528\u3001\u4f18\u5316\u6587\u6863\u4f7f\u7528\u7b49\uff0c\u65b9\u4fbf InLong \u4e0a\u4e91\u7684\u4f7f\u7528\u3002\u611f\u8c22 @shink \u4e3a\u8fd9\u4e9b\u4f18\u5316\u505a\u7684\u8d21\u732e\u3002"),(0,r.kt)("h3",{id:"dashboard-\u63d2\u4ef6\u5316"},"Dashboard \u63d2\u4ef6\u5316"),(0,r.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u7528\u6237\u5feb\u901f\u5728 Dashboard \u6784\u5efa\u65b0\u7684\u6d41\u5411\uff0c1.1.0 \u7248\u672c\u4e2d\u5b9e\u73b0\u4e86 Dashboard \u63d2\u4ef6\u5316\uff0c\u4e86\u89e3 JavaScript \u5f00\u53d1\u8005\u57fa\u4e8e\u63d2\u4ef6\u5f00\u53d1\u6307\u5f15\uff0c\u53ef\u4ee5\u5feb\u901f\u6269\u5c55\u65b0\u7684\u6570\u636e\u6d41\u5411\u3002\u8fd9\u90e8\u5206\u5de5\u4f5c\u611f\u8c22 @leezng"),(0,r.kt)("h3",{id:"\u5176\u4ed6\u7279\u6027\u53ca\u95ee\u9898\u4fee\u590d"},"\u5176\u4ed6\u7279\u6027\u53ca\u95ee\u9898\u4fee\u590d"),(0,r.kt)("p",null,"\u76f8\u5173\u5185\u5bb9\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/blob/master/CHANGES.md"},"\u7248\u672c\u8bf4\u660e"),"\uff0c\u5176\u4e2d\u8be6\u7ec6\u5217\u51fa\u4e86\u672c\u6b21\u7248\u672c\u7684\u7279\u6027\u3001\u63d0\u5347 \u548c Bug \u4fee\u590d\uff0c\u4ee5\u53ca\u5177\u4f53\u7684\u8d21\u732e\u8005\u3002"),(0,r.kt)("h2",{id:"apache-inlongincubating-\u540e\u7eed\u89c4\u5212"},"Apache InLong(incubating) \u540e\u7eed\u89c4\u5212"),(0,r.kt)("p",null,"\u540e\u7eed\u7248\u672c\uff0c\u6211\u4eec\u5c06\u652f\u6301\u8f7b\u91cf\u5316\u7684 Sort\uff0c\u4ee5\u53ca\u6269\u5c55\u66f4\u591a\u7684\u6570\u636e\u6e90\u7aef\u548c\u76ee\u6807\u7aef\uff0c\u8986\u76d6\u66f4\u591a\u7684\u4f7f\u7528\u573a\u666f\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flink SQL \u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"Elasticsearch\u3001HBase \u6d41\u5411\u652f\u6301")))}p.isMDXComponent=!0}}]);