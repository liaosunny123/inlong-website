"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[12115],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=u(r),f=n,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||s;return r?o.createElement(m,i(i({ref:t},d),{},{components:r})):o.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var u=2;u<s;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const s={title:"Overview",sidebar_position:1},i="overview",a={unversionedId:"modules/sort/overview",id:"version-1.1.0/modules/sort/overview",title:"Overview",description:"Inlong-sort is used to extract data from different source systems, then transforms the data and finally loads the data into diffrent storage systems.",source:"@site/versioned_docs/version-1.1.0/modules/sort/overview.md",sourceDirName:"modules/sort",slug:"/modules/sort/overview",permalink:"/docs/1.1.0/modules/sort/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/modules/sort/overview.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"TubeMQ VS Kafka",permalink:"/docs/1.1.0/modules/tubemq/tubemq_perf_test_vs_Kafka"},next:{title:"Deployment",permalink:"/docs/1.1.0/modules/sort/quick_start"}},l={},u=[{value:"supported sources",id:"supported-sources",level:2},{value:"supported storages",id:"supported-storages",level:2},{value:"limitations",id:"limitations",level:2},{value:"future plans",id:"future-plans",level:2},{value:"More kinds of source systems",id:"more-kinds-of-source-systems",level:3},{value:"More kinds of storage systems",id:"more-kinds-of-storage-systems",level:3},{value:"More kinds of file format in hive sink",id:"more-kinds-of-file-format-in-hive-sink",level:3}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"overview"),(0,n.kt)("p",null,"Inlong-sort is used to extract data from different source systems, then transforms the data and finally loads the data into diffrent storage systems.\nInlong-sort is simply an Flink application, and relys on Inlong-manager to manage meta data(such as the source informations and storage informations)"),(0,n.kt)("h1",{id:"features"},"features"),(0,n.kt)("h2",{id:"supported-sources"},"supported sources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"pulsar")),(0,n.kt)("h2",{id:"supported-storages"},"supported storages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"hive\uff08Currently we support parquet, orc and text file format\uff09"),(0,n.kt)("li",{parentName:"ul"},"kafka"),(0,n.kt)("li",{parentName:"ul"},"clickhouse"),(0,n.kt)("li",{parentName:"ul"},"iceberg")),(0,n.kt)("h2",{id:"limitations"},"limitations"),(0,n.kt)("p",null,"Currently, we just support extracting specified fields in the stage of ",(0,n.kt)("strong",{parentName:"p"},"Transform"),"."),(0,n.kt)("h2",{id:"future-plans"},"future plans"),(0,n.kt)("h3",{id:"more-kinds-of-source-systems"},"More kinds of source systems"),(0,n.kt)("p",null,"kafka and etc"),(0,n.kt)("h3",{id:"more-kinds-of-storage-systems"},"More kinds of storage systems"),(0,n.kt)("p",null,"Hbase, Elastic Search, and etc"),(0,n.kt)("h3",{id:"more-kinds-of-file-format-in-hive-sink"},"More kinds of file format in hive sink"),(0,n.kt)("p",null,"sequence file"))}p.isMDXComponent=!0}}]);