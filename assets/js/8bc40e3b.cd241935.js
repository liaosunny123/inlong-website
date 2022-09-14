"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[21124],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},53567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Architecture"},i=void 0,s={unversionedId:"modules/tubemq/architecture",id:"version-0.11.0/modules/tubemq/architecture",title:"Architecture",description:"1. TubeMQ Architecture:",source:"@site/versioned_docs/version-0.11.0/modules/tubemq/architecture.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/architecture",permalink:"/docs/0.11.0/modules/tubemq/architecture",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.11.0/modules/tubemq/architecture.md",tags:[],version:"0.11.0",frontMatter:{title:"Architecture"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"Build && Deployment",permalink:"/docs/0.11.0/modules/dataproxy-sdk/quick_start"},next:{title:"Client RPC",permalink:"/docs/0.11.0/modules/tubemq/client_rpc"}},c={},l=[{value:"1. TubeMQ Architecture:",id:"1-tubemq-architecture",level:2},{value:"2. Broker File Storage Scheme Improvement:",id:"2-broker-file-storage-scheme-improvement",level:2}],p={toc:l};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-tubemq-architecture"},"1. TubeMQ Architecture:"),(0,o.kt)("p",null,"After years of evolution, the TubeMQ cluster is divided into the following 5 parts:\n",(0,o.kt)("img",{src:r(44775).Z,width:"1031",height:"507"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Portal\uff1a")," The Portal part responsible for external interaction and maintenance operations, including API and Web.\nThe API connects to the management system outside the cluster. The Web is a page encapsulation of daily operation\nand maintenance functions based on the API;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Master\uff1a")," It is responsible for the Control part of the cluster. This part is composed of one or more Master nodes.\nMaster HA performs heartbeat keep-alive and real-time hot standby switching between master nodes (This is the reason\nwhy everyone needs to fill in the addresses of all Master nodes corresponding to the cluster when using TubeMQ Lib).\nThe main master is responsible for managing the status of the entire cluster, resource scheduling, permission\nchecking, metadata query, etc.;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Broker\uff1a")," The Store part responsible for data storage. This part is composed of independent Broker nodes.\nEach Broker node manages the Topic set in this node, including the addition, deletion, modification, and inquiring\nabout Topics. It is also responsible for message storage, consumption, aging, partition expansion, data consumption\noffset records, etc. On the topic, and the external capabilities of the cluster, including the number of topics,\nthroughput, and capacity, are completed by horizontally expanding the broker node;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Client\uff1a")," The Client part responsible for data production and consumption. We provide this part in the form of Lib.\nThe most commonly used is the consumer. Compared with the previous, the consumer now supports Push and Pull data pull\nmodes, data consumption behavior support both order and filtered consumption. For the Pull consumption mode, the\nservice supports resetting the precise offset through the client to support the business extract-once consumption.\nAt the same time, the consumer has launched a new cross-cluster switch-free Consumer client;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ZooKeeper\uff1a")," Responsible for the ZooKeeper part of the offset storage. This part of the function has been weakened to only the persistent storage of the offset. Considering the next multi-node copy function, this module is temporarily reserved;"))),(0,o.kt)("h2",{id:"2-broker-file-storage-scheme-improvement"},"2. Broker File Storage Scheme Improvement:"),(0,o.kt)("p",null,"Systems that use disks as data persistence media are faced with various system performance problems caused by disk problems. The TubeMQ system is no exception, the performance improvement is largely to solve the problem of how to read, write and store message data. In this regard TubeMQ has made many improvements: storage instances is as the smallest Topic data management unit; each storage instance includes a file storage block and a memory cache block; each Topic can be assigned multiple storage instances. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"File storage block:")," The disk storage solution of TubeMQ is similar to Kafka, but it is not the same, as shown in the following figure: each file storage block is composed of an index file and a data file; the partiton is a logical partition in the data file; each Topic maintains and manages the file storage block separately, the related mechanisms include the aging cycle, the number of partitions, whether it is readable and writable, etc.\n",(0,o.kt)("img",{src:r(19252).Z,width:"1211",height:"700"}))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Memory cache block:")," We added a separate memory cache block on the file storage block, that is, add a block of memory to the original write disk to isolate the slow effect of the hard disk. The data is first flushed to the memory cache block, and then the memory cache block is batched flush the data to the disk file.\n",(0,o.kt)("img",{src:r(12945).Z,width:"794",height:"604"}))))}m.isMDXComponent=!0},19252:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/store_file-afacb93118082ca4afc7f0ee3176af70.png"},12945:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/store_mem-05a41b24e2b5e68a769c9236d1e063d4.png"},44775:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sys_structure-8696e2c7dfebcbe30e47b2d99e185485.png"}}]);