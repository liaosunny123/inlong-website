"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[44861],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68018:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"Example",sidebar_position:1},i=void 0,l={unversionedId:"sdk/manager-sdk/example",id:"version-1.1.0/sdk/manager-sdk/example",title:"Example",description:"Overview",source:"@site/versioned_docs/version-1.1.0/sdk/manager-sdk/example.md",sourceDirName:"sdk/manager-sdk",slug:"/sdk/manager-sdk/example",permalink:"/docs/1.1.0/sdk/manager-sdk/example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/sdk/manager-sdk/example.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{title:"Example",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.1.0/sdk/dataproxy-sdk/overview"},next:{title:"Dashboard Guide",permalink:"/docs/1.1.0/user_guide/dashboard_usage"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Dependency",id:"dependency",level:2},{value:"Code",id:"code",level:2},{value:"Programming must know interface",id:"programming-must-know-interface",level:3},{value:"Kafka2Hive",id:"kafka2hive",level:3},{value:"Binlog2Kafka",id:"binlog2kafka",level:3},{value:"Last but not Least",id:"last-but-not-least",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Apache InLong Manager is the user-oriented unified UI of the entire data access platform. Now we provide client SDK for users,\nwhich means you can use client to manipulate your group task instead of UI."),(0,a.kt)("h2",{id:"dependency"},"Dependency"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add Maven Dependency")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>manager-client</artifactId>\n    <version>${inlong.version}</version>\n</dependency>\n")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We provide two unit cases for you to build your own group task, you can replace the predefined params and try it in your own cluster."),(0,a.kt)("li",{parentName:"ul"},"In following cases, ",(0,a.kt)("strong",{parentName:"li"},"Apache Pulsar")," and ",(0,a.kt)("strong",{parentName:"li"},"Apache Flink")," are needed when your group is inited. You can run Inlong group in your own cluster, or with the help of third-party services.")),(0,a.kt)("h3",{id:"programming-must-know-interface"},"Programming must know interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Create client configuration\nClientConfiguration configuration = createClientConfig();\n// Init Inlong client\nInlongClient inlongClient = InlongClient.create(SERVICE_URL, configuration);\ntry {\n    // Create group conf\n    InlongGroupConf groupConf = createGroupConf();\n    // Init group resource by conf\n    InlongGroup group = inlongClient.forGroup(groupConf);\n    // Create stream conf\n    InlongStreamConf streamConf = createStreamConf();\n    // Create Stream builder \n    InlongStreamBuilder streamBuilder = group.createStream(streamConf);\n    // Create stream source\n    streamBuilder.source(createSource());\n    // Create stream sink\n    streamBuilder.sink(createSink());\n    // Init stream \n    streamBuilder.initOrUpdate();\n    // Start group in server\n    InlongGroupContext inlongGroupContext = group.init();\n} catch (Exception e) {\n    e.printStackTrace();\n}\n")),(0,a.kt)("h3",{id:"kafka2hive"},"Kafka2Hive"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("strong",{parentName:"p"},"manager-client-examples"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/blob/master/inlong-manager/manager-client-examples/src/test/java/org/apache/inlong/manager/client/Kafka2HiveExample.java"},"org.apache.inlong.manager.client.Kafka2HiveExample.java")),(0,a.kt)("h3",{id:"binlog2kafka"},"Binlog2Kafka"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("strong",{parentName:"p"},"manager-client-examples"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/blob/master/inlong-manager/manager-client-examples/src/test/java/org/apache/inlong/manager/client/Binlog2KafkaExample.java"},"org.apache.inlong.manager.client.Binlog2KafkaExample.java")),(0,a.kt)("h2",{id:"last-but-not-least"},"Last but not Least"),(0,a.kt)("p",null,"If you have any question about manager client, communicate with us please."))}u.isMDXComponent=!0}}]);