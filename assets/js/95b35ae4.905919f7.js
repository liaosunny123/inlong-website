"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[86057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Deployment"},l=void 0,o={unversionedId:"modules/manager/quick_start",id:"version-1.1.0/modules/manager/quick_start",title:"Deployment",description:"Environment Requirements",source:"@site/versioned_docs/version-1.1.0/modules/manager/quick_start.md",sourceDirName:"modules/manager",slug:"/modules/manager/quick_start",permalink:"/docs/1.1.0/modules/manager/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/modules/manager/quick_start.md",tags:[],version:"1.1.0",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.1.0/modules/manager/overview"},next:{title:"Overview",permalink:"/docs/1.1.0/modules/dashboard/overview"}},s={},u=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Flink Plugin",id:"flink-plugin",level:2},{value:"Start",id:"start",level:2},{value:"Register Message Queue",id:"register-message-queue",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install and start MySQL 5.7+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"initialize database\nthere is ",(0,a.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_manager.sql")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-manager")," directory, load this file through the\nfollowing command to complete the initialization of the table structure and basic data"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize database\uff1a\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql\n")))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the backend database is MySQL, please download ",(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar")," and put it into ",(0,a.kt)("inlineCode",{parentName:"li"},"lib/")," directory."),(0,a.kt)("li",{parentName:"ul"},"If the backend database is PostgreSQL, there's no need for additional dependencies.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Go to the decompressed ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-manager")," directory and modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/application.properties")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# manager service port number\nserver.port=8083\n\n# The configuration file used is dev\nspring.profiles.active=dev\n")),(0,a.kt)("p",null,"The dev configuration is specified above, then modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/application-dev.properties")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n")),(0,a.kt)("h2",{id:"flink-plugin"},"Flink Plugin"),(0,a.kt)("p",null,"InLong support to start a Sort task by Manager, you need to configure a Flink environment in the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/flink-sort-plugin.properties"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Flink host split by coma if more than one host, such as 'host1,host2'\nflink.rest.address=127.0.0.1\n# Flink port\nflink.rest.port=8081\n# Flink jobmanager port\nflink.jobmanager.port=6123\n# InLong Audit Proxy Address\nmetrics.audit.proxy.hosts=127.0.0.1:10081\n")),(0,a.kt)("h2",{id:"start"},"Start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"bash +x bin/startup.sh\n")),(0,a.kt)("h2",{id:"register-message-queue"},"Register Message Queue"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If using InLong TubeMQ, the register command is:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" --request POST http://localhost:8083/api/inlong/manager/openapi/cluster/save --data \'\n{\n        "name": "tube_cluster",\n        "type": "TUBE",\n        "mqSetName": "default_set_name",\n        "extParams": "{\\"cluster_tube_manager\\": \\"127.0.0.1:8080\\", \\"tube_masterUrl\\": \\"127.0.0.1:8715\\", \\"cluster_tube_clusterId\\": \\"1\\"}",\n        "inCharges": "admin"\n}\'\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"extParams"),": the other info of your cluster. It is described in JSON format, for example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster_tube_manager": "http://127.0.0.1:8081",\n  "tube_masterUrl": "127.0.0.1:8715",\n  "cluster_tube_clusterId": "1"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If using Pulsar, the register command is:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" --request POST http://localhost:8083/api/inlong/manager/openapi/cluster/save --data \'\n{\n        "name": "pulsar_cluster",\n        "type": "PULSAR",\n        "url": "pulsar://pulsar:6650",\n        "token": "null",\n        "mqSetName": "default_set_name",\n        "extParams": "{\\"pulsar_adminUrl\\": \\"http://pulsar:8080\\"}",\n        "inCharges": "admin",\n        "creator": "admin"\n}\'\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"url"),": the address of your Pulsar cluster, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"pulsar://127.0.0.1:6650,127.0.0.1:6650,127.0.0.1:6650")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pulsar_adminUrl"),": the other info of your cluster")))}c.isMDXComponent=!0}}]);