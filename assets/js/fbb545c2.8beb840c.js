"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[13581],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1860:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Deployment"},o=void 0,l={unversionedId:"modules/manager/quick_start",id:"version-0.12.0/modules/manager/quick_start",title:"Deployment",description:"Environment Requirements",source:"@site/versioned_docs/version-0.12.0/modules/manager/quick_start.md",sourceDirName:"modules/manager",slug:"/modules/manager/quick_start",permalink:"/docs/0.12.0/modules/manager/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/modules/manager/quick_start.md",tags:[],version:"0.12.0",frontMatter:{title:"Deployment"},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/0.12.0/modules/manager/overview"},next:{title:"Overview",permalink:"/docs/0.12.0/modules/website/overview"}},s={},u=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Deploy manager",id:"deploy-manager",level:2},{value:"Modify configuration",id:"modify-configuration",level:3},{value:"Start the service",id:"start-the-service",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install and start MySQL 5.7+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"initialize database\nthere is ",(0,a.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_manager.sql")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-manager-web")," directory, load this file through the\nfollowing command to complete the initialization of the table structure and basic data"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize database\uff1a\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql\n")))),(0,a.kt)("h2",{id:"deploy-manager"},"Deploy manager"),(0,a.kt)("p",null,"manager-web is a background service that interacts with the front-end page."),(0,a.kt)("h3",{id:"modify-configuration"},"Modify configuration"),(0,a.kt)("p",null,"Go to the decompressed ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-manager-web")," directory and modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/application.properties")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# manager-web service port number\nserver.port=8083\n\n# The configuration file used is dev\nspring.profiles.active=dev\n")),(0,a.kt)("p",null,"The dev configuration is specified above, then modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/application-dev.properties")," file:"),(0,a.kt)("p",null,"1) Modify the database URL, username and password:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"spring.datasource.jdbc-url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8\nspring.datasource.username=DB_USER\nspring.datasource.password=DB_PASSWD\n")),(0,a.kt)("p",null,"2) Configure the Message Queue Service, you could choose InLong TubeMQ or Apache Pulsar:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Configuration TubeMQ cluster information if using TubeMQ"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Manager address of TubeMQ cluster, used to create Topic\ncluster.tube.manager=http://127.0.0.1:8081\n# Broker used to manage TubeMQ\ncluster.tube.master=127.0.0.1:8000,127.0.0.1:8010\n# TubeMQ cluster ID\ncluster.tube.clusterId=1\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Configuration Pulsar cluster information if using Pulsar"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Pulsar admin URL\npulsar.adminUrl=http://127.0.0.1:8080,127.0.0.2:8080,127.0.0.3:8080\n# Pulsar broker address\npulsar.serviceUrl=pulsar://127.0.0.1:6650,127.0.0.1:6650,127.0.0.1:6650\n# Default tenant of Pulsar\npulsar.defaultTenant=public\n")))),(0,a.kt)("p",null,"3) Configure ZooKeeper clusters information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# ZK cluster, used to push the configuration of Sort\ncluster.zk.url=127.0.0.1:2181\ncluster.zk.root=inlong_hive\n# application name, that is the cluster-id parameter of InLong Sort\nsort.appName=inlong_app\n")),(0,a.kt)("h3",{id:"start-the-service"},"Start the service"),(0,a.kt)("p",null,"Enter the decompressed directory, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"sh bin/startup.sh")," to start the service, and check the\nlog ",(0,a.kt)("inlineCode",{parentName:"p"},"tailf log/manager-web.log"),". If a log similar to the following appears, the service has started successfully:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Started InLongWebApplication in 6.795 seconds (JVM running for 7.565)\n")))}c.isMDXComponent=!0}}]);