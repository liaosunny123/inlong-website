"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[56297],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17038:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"Basic Concept",sidebar_position:1},o=void 0,i={unversionedId:"design_and_concept/basic_concept",id:"design_and_concept/basic_concept",title:"Basic Concept",description:"| Name        | Description                                                                                                                | Other                                                                              |",source:"@site/docs/design_and_concept/basic_concept.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/basic_concept",permalink:"/docs/next/design_and_concept/basic_concept",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/design_and_concept/basic_concept.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Basic Concept",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/next/introduction"},next:{title:"Agent Plugin",permalink:"/docs/next/design_and_concept/how_to_write_plugin_agent"}},s={},c=[],p={toc:c};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Other"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Standard"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard Architecture, contains all InLong components such as InLong Agent, Manager, MQ, Sort, Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"Suitable for massive data and large-scale production environments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight Architecture, contains only one component of InLong Sort, which also can be used with Manager, Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"The lightweight architecture is simple and flexible, suitable for small-scale data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Group"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Streams Group, it contains multiple data streams, and one Group represents one data business unit."),(0,r.kt)("td",{parentName:"tr",align:null},"Group has attributes such as ID and Name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Stream, a stream has a specific data source, data format and data sink."),(0,r.kt)("td",{parentName:"tr",align:null},"Stream has attributes such as ID, Name, and data fields.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Node, including ",(0,r.kt)("inlineCode",{parentName:"td"},"Extract Node")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Load Node"),",  stands for the data source and sink types separately."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InLongMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"InLong data format, if you consume message directly from the message queue, you need to perform ",(0,r.kt)("inlineCode",{parentName:"td"},"InLongMsg")," parsing first."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"Each component can form a single cluster."),(0,r.kt)("td",{parentName:"tr",align:null},"Contains cluster name, label, necessary information for each component, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Clusters of different components can use the same tag to represent a set of data stream execution units."),(0,r.kt)("td",{parentName:"tr",align:null},"Currently tag are only available for clusters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Agent"),(0,r.kt)("td",{parentName:"tr",align:null},"The standard architecture uses Agent for data collection, and Agent represents different types of collection capabilities."),(0,r.kt)("td",{parentName:"tr",align:null},"It contains File Agent, SQL Agent, Binlog Agent, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DataProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"Forward received data to different message queues."),(0,r.kt)("td",{parentName:"tr",align:null},"Supports data transmission blocking, placing retransmission.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sort"),(0,r.kt)("td",{parentName:"tr",align:null},"Data stream sorting."),(0,r.kt)("td",{parentName:"tr",align:null},"Sort-flink based on Flink, sort-standalone for local sorting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TubeMQ"),(0,r.kt)("td",{parentName:"tr",align:null},"InLong's self-developed message queuing service"),(0,r.kt)("td",{parentName:"tr",align:null},"It can also be called Tube, with low-cost, high-performance features.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/"},"Apache Pulsar"),", a high-performance, high-consistency message queue service"),(0,r.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);