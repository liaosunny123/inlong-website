"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7164],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49044:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={title:"Release InLong 0.12.0",sidebar_position:2},l=void 0,c={permalink:"/blog/apache-inlong-0.12.0",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/blog/blog/apache-inlong-0.12.0.md",source:"@site/blog/apache-inlong-0.12.0.md",title:"Release InLong 0.12.0",description:"InLong: the sacred animal in Chinese myths stories, draws rivers into the sea, as a metaphor for the InLong system to provide data access capabilities.",date:"2022-04-25T10:01:53.000Z",formattedDate:"April 25, 2022",tags:[],readingTime:5.15,truncated:!1,authors:[],frontMatter:{title:"Release InLong 0.12.0",sidebar_position:2},prevItem:{title:"Release InLong 0.11.0",permalink:"/blog/apache-inlong-0.11.0"},nextItem:{title:"Release InLong 1.1.0",permalink:"/blog/apache-inlong-1.1.0"}},u={authorsImageUrls:[]},p=[{value:"Apache InLong(incubating) Introduction",id:"apache-inlongincubating-introduction",level:3},{value:"What\u2019s New in Apache InLong(incubating) 0.12.0",id:"whats-new-in-apache-inlongincubating-0120",level:3},{value:"1. Support Apache Pulsar data cache",id:"1-support-apache-pulsar-data-cache",level:4},{value:"2. Support JMX and Prometheus metrics",id:"2-support-jmx-and-prometheus-metrics",level:4},{value:"3. Function extension of the modules",id:"3-function-extension-of-the-modules",level:4},{value:"4. Official website document directory reconstruction",id:"4-official-website-document-directory-reconstruction",level:4},{value:"5. Other features and bug fixes",id:"5-other-features-and-bug-fixes",level:4},{value:"Apache InLong(incubating) follow-up planning",id:"apache-inlongincubating-follow-up-planning",level:3}],h={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"InLong: the sacred animal in Chinese myths stories, draws rivers into the sea, as a metaphor for the InLong system to provide data access capabilities."),(0,o.kt)("p",null,"Apache InLong is a one-stop integration framework for massive data that provides automatic, secure and reliable data transmission capabilities. InLong supports both batch and stream data processing at the same time, which offers great power to build data analysis, modeling and other real-time applications based on streaming data.\nThe 0.12.0-incubating just released mainly includes the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide automatic, safe, reliable and high-performance data transmission capabilities, while supporting batch and streaming"),(0,o.kt)("li",{parentName:"ul"},"Refactor the document structure of the official website to facilitate users to consult related documents based on the main line"),(0,o.kt)("li",{parentName:"ul"},"The whole process supports Pulsar data flow, and completes the whole process coverage of high-performance and high-reliability scenarios"),(0,o.kt)("li",{parentName:"ul"},"Full-process support indicators, including JMX and Prometheus output"),(0,o.kt)("li",{parentName:"ul"},"The first phase of data audit and reconciliation, write audit data to MySQL")),(0,o.kt)("p",null,"This version closed about 120+ issues, including four major features and 35 improvements."),(0,o.kt)("h3",{id:"apache-inlongincubating-introduction"},"Apache InLong(incubating) Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://inlong.apache.org"},"Apache InLong")," is a one-stop integration framework for massive data donated by Tencent to the Apache community.  It provides automatic,  safe,  reliable,  and high-performance data transmission capabilities to facilitate the construction of streaming-based data analysis,  modeling,  and applications.",(0,o.kt)("br",{parentName:"p"}),"\n","The Apache InLong project was originally called TubeMQ,  focusing on high-performance,  low-cost message queuing services.  In order to further release the surrounding ecological capabilities of TubeMQ,  we upgraded the project to InLong,  focusing on creating a one-stop integration framework for massive data."),(0,o.kt)("p",null,"Apache InLong uses TDBank internally used by Tencent as the prototype,  and relies on trillion-level data access and processing capabilities to integrate the entire process of data collection,  aggregation,  storage,  and sorting data processing.  It is simple to use,  flexible to expand,  stable and reliable characteristic."),(0,o.kt)("img",{src:"/img/inlong-structure-en.png",align:"center",alt:"Apache InLong"}),(0,o.kt)("p",null,"Apache InLong serves the entire life cycle from data collection to landing,  and provides different processing modules according to different stages of data,  including the next modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inlong-agent"),",  data collection agent, supports reading regular logs from specified directories or files and reporting data one by one.  In the future,  DB collection and HTTP reporting capabilities will also be expanded."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inlong-dataproxy"),",  a Proxy component based on Flume-ng,  supports data transmission blocking,  placing retransmission, and has the ability to forward received data to different MQ (message queues)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inlong-tubemq"),",  Tencent's self-developed message queuing service,  focuses on high-performance storage and transmission of massive data in big data scenarios and has a relatively good core advantage in mass practice and low cost."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inlong-sort"),",  after consuming data from different MQ services,  perform ETL processing,  and then aggregate and write the data into Apache Hive, ClickHouse,  Hbase,  IceBerg,  etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inlong-manager"),", provides complete data service management and control capabilities,  including metadata,  OpenAPI,  task flow,  authority,  etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inlong-website"),", a front-end page for managing data access,  simplifying the use of the entire InLong control platform.")),(0,o.kt)("h3",{id:"whats-new-in-apache-inlongincubating-0120"},"What\u2019s New in Apache InLong(incubating) 0.12.0"),(0,o.kt)("h4",{id:"1-support-apache-pulsar-data-cache"},"1. Support Apache Pulsar data cache"),(0,o.kt)("p",null,"In version 0.12.0, we have completed the data reporting capability of FileAgent\u2192DataProxy\u2192Pulsar\u2192Sort. So far, InLong supports high-performance and high-reliability data access scenarios: Compared with the high-throughput TubeMQ, Apache Pulsar can provide better data consistency and is more suitable for scenarios that require extremely high data reliability. For example, finance and billing."),(0,o.kt)("img",{src:"/img/pulsar-arch-en.png",align:"center",alt:"Report via Pulsar"}),(0,o.kt)("p",null,"Thanks to @healzhou, @baomingyu, @leezng, @bruceneenhl, @ifndef-SleePy and others for their contributions to this feature. For more information, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/"},"INLONG-1310"),"incubator-inlong/issues/1310), please refer to ","[Pulsar usage example]","(",(0,o.kt)("a",{parentName:"p",href:"https://inlong.apache."},"https://inlong.apache.")," org/zh -CN/docs/next/quick_start/pulsar_example/) to get the usage guide."),(0,o.kt)("h4",{id:"2-support-jmx-and-prometheus-metrics"},"2. Support JMX and Prometheus metrics"),(0,o.kt)("p",null,"In addition to the existing file output metrics, the various components of InLong began to gradually support the output of JMX and Prometheus metrics to improve the visibility of the entire system. Currently, modules including Agent, DataProxy, TubeMQ, Sort-Standalone, etc. already support the above metrics, and the documentation of metrics output by each module is being sorted out."),(0,o.kt)("p",null,"Thanks to @shink, @luchunliang, @EMsnap, @gosonzhang and others for their contributions. For related PRs, please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1712"},"INLONG-1712"),", ","[INLONG-1786]"," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1786"},"https://github.com/apache/incubator-inlong/issues/1786"),"), ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1796"},"INLONG-1796"),", ","[INLONG-1827]"," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1827"},"https://github.com/apache/incubator-inlong/issues/1827"),"), ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1851"},"INLONG-1851"),", ","[INLONG-1926]"," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1926"},"https://github.com/apache/incubator-inlong/issues/1926"),")."),(0,o.kt)("h4",{id:"3-function-extension-of-the-modules"},"3. Function extension of the modules"),(0,o.kt)("p",null,"The Sort module adds support for Apache Doris storage and realizes the ability to load sorted data into Apache Doris, giving InLong one more storage option. In addition, in order to enrich the functions of the entire data access process, the Audit and Sort-Standalone modules have been added:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Audit module provides the ability to reconcile the entire process of data flow, and monitor the service quality of the system through data flow indicators;"),(0,o.kt)("li",{parentName:"ul"},"Sort-Standalone module is a non-Flink-based data sorting module. It adds lightweight data sorting capabilities to the system, facilitating the rapid construction and use of businesses.")),(0,o.kt)("p",null,"The Audit and Sort-Standalone modules are still under development and will be released when the version is stable."),(0,o.kt)("p",null,"Thanks to @huzk8, @doleyzi, @luchunliang and others for their contributions, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1821"},"INLONG-1821"),", ","[INLONG-1738]","( https: / /github.com/apache/incubator-inlong/issues/1738), ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1889"},"INLONG-1889"),"."),(0,o.kt)("h4",{id:"4-official-website-document-directory-reconstruction"},"4. Official website document directory reconstruction"),(0,o.kt)("p",null,"In addition to the improvement of functional modules in version 0.12.0, the official website structure and the use of documents have also been deeply adjusted, including the reconstruction of the document directory structure, supplementing and improving the function introduction of each module, adding document translation, and further improving the documentation of the InLong official website. Readability, to achieve quick search and easy reading. You can check the official website to understand this content. The document is still under construction. We welcome your valuable comments or suggestions."),(0,o.kt)("p",null,"Thanks to @bluewang, @dockerzhang, @healchow and others for their contributions, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1711"},"INLONG-1711"),", ","[INLONG-1740]","(https: //github.com/apache/incubator-inlong/issues/1740), ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1802"},"INLONG-1802"),", ","[INLONG-1809]","(https: //github.com/apache/incubator-inlong/issues/1809), ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1810"},"INLONG-1810"),", ","[INLONG-1815]","(https: //github.com/apache/incubator-inlong/issues/1815), ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1822"},"INLONG-1822"),", ","[INLONG-1840]","(https: //github.com/apache/incubator-inlong/issues/1840), ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1856"},"INLONG-1856"),", ","[INLONG-1861]","(https: //github.com/apache/incubator-inlong/issues/1861), ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1867"},"INLONG-1867"),", ","[INLONG-1878]","(https: //github.com/apache/incubator-inlong/issues/1878), ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1901"},"INLONG-1901"),", ","[INLONG-1939]","(https: //gith ub.com/apache/incubator-inlong/issues/1939)."),(0,o.kt)("h4",{id:"5-other-features-and-bug-fixes"},"5. Other features and bug fixes"),(0,o.kt)("p",null,"For related content, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/blob/0.12.0-incubating-RC0/CHANGES.md"},"Version Release Notes"),", which lists the detailed features of this version, Improvements, bug fixes, and specific contributors."),(0,o.kt)("h3",{id:"apache-inlongincubating-follow-up-planning"},"Apache InLong(incubating) follow-up planning"),(0,o.kt)("p",null,"In subsequent versions, we will further enhance the capabilities of InLong to cover more usage scenarios, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support link for data access ClickHouse"),(0,o.kt)("li",{parentName:"ul"},"Support DB data collection"),(0,o.kt)("li",{parentName:"ul"},"The second stage full link indicator audit function")))}d.isMDXComponent=!0}}]);