"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[40116],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>p});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),u=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},s=function(t){var e=u(t.components);return l.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=u(n),p=r,v=c["".concat(o,".").concat(p)]||c[p]||k[p]||a;return n?l.createElement(v,d(d({ref:e},s),{},{components:n})):l.createElement(v,d({ref:e},s))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,d=new Array(a);d[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,d[1]=i;for(var u=2;u<a;u++)d[u]=n[u];return l.createElement.apply(null,d)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9228:(t,e,n)=>{n.d(e,{Y:()=>l});const l={inLongVersion:"1.2.0-incubating"}},80134:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>d,metadata:()=>o,toc:()=>s});var l=n(87462),r=(n(67294),n(3905)),a=n(9228);const d={title:"Hive",sidebar_position:8},i=void 0,o={unversionedId:"data_node/load_node/hive",id:"version-1.2.0/data_node/load_node/hive",title:"Hive",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/data_node/load_node/hive.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/hive",permalink:"/zh-CN/docs/1.2.0/data_node/load_node/hive",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/data_node/load_node/hive.md",tags:[],version:"1.2.0",sidebarPosition:8,frontMatter:{title:"Hive",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"HDFS",permalink:"/zh-CN/docs/1.2.0/data_node/load_node/hdfs"},next:{title:"Iceberg",permalink:"/zh-CN/docs/1.2.0/data_node/load_node/iceberg"}},u={},s=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:3},{value:"Maven \u4f9d\u8d56",id:"maven-\u4f9d\u8d56",level:3},{value:"\u5982\u4f55\u914d\u7f6e Hive \u6570\u636e\u52a0\u8f7d\u8282\u70b9",id:"\u5982\u4f55\u914d\u7f6e-hive-\u6570\u636e\u52a0\u8f7d\u8282\u70b9",level:2},{value:"SQL API \u7684\u4f7f\u7528",id:"sql-api-\u7684\u4f7f\u7528",level:3},{value:"InLong Dashboard \u65b9\u5f0f",id:"inlong-dashboard-\u65b9\u5f0f",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:4},{value:"InLong Manager Client \u65b9\u5f0f",id:"inlong-manager-client-\u65b9\u5f0f",level:3},{value:"Hive \u52a0\u8f7d\u8282\u70b9\u53c2\u6570\u4fe1\u606f",id:"hive-\u52a0\u8f7d\u8282\u70b9\u53c2\u6570\u4fe1\u606f",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],k={toc:s};function c(t){let{components:e,...d}=t;return(0,r.kt)("wrapper",(0,l.Z)({},k,d,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.kt)("p",null,"Hive \u52a0\u8f7d\u8282\u70b9\u53ef\u4ee5\u5c06\u6570\u636e\u5199\u5165 Hive\u3002\u4f7f\u7528 Flink \u65b9\u8a00\uff0c\u76ee\u524d\u4ec5\u652f\u6301 Insert \u64cd\u4f5c\uff0cUpsert \u6a21\u5f0f\u4e0b\u7684\u6570\u636e\u4f1a\u8f6c\u6362\u6210 Insert \u65b9\u5f0f\n\u76ee\u524d\u6682\u65f6\u4e0d\u652f\u6301\u4f7f\u7528 Hive \u65b9\u8a00\u64cd\u4f5c Hive \u8868\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Load Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.2.0/data_node/load_node/hive"},"Hive")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/hive/overview/#supported-hive-version"},"Hive"),": 1.x, 2.x, 3.x")))),(0,r.kt)("h3",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.kt)("p",null,"\u901a\u8fc7 Maven \u5f15\u5165 sort-connector-hive \u6784\u5efa\u81ea\u5df1\u7684\u9879\u76ee\u3002\n\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 INLONG \u63d0\u4f9b\u7684 jar \u5305\u3002(",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"sort-connector-hive"),")"),(0,r.kt)("h3",{id:"maven-\u4f9d\u8d56"},"Maven \u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-hive</artifactId>\n    <version>${a.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"\u5982\u4f55\u914d\u7f6e-hive-\u6570\u636e\u52a0\u8f7d\u8282\u70b9"},"\u5982\u4f55\u914d\u7f6e Hive \u6570\u636e\u52a0\u8f7d\u8282\u70b9"),(0,r.kt)("h3",{id:"sql-api-\u7684\u4f7f\u7528"},"SQL API \u7684\u4f7f\u7528"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hiveTableName (\n  id STRING,\n  name STRING,\n  uv BIGINT,\n  pv BIGINT\n) WITH (\n  'connector' = 'hive',\n  'default-database' = 'default',\n  'hive-version' = '3.1.2',\n  'hive-conf-dir' = 'hdfs://localhost:9000/user/hive/hive-site.xml'\n);\n")),(0,r.kt)("h3",{id:"inlong-dashboard-\u65b9\u5f0f"},"InLong Dashboard \u65b9\u5f0f"),(0,r.kt)("h4",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u6570\u636e\u6d41\u65f6\uff0c\u9009\u62e9\u6570\u636e\u843d\u5730\u4e3a 'Hive' \u7136\u540e\u70b9\u51fb 'Add' \u6765\u914d\u7f6e Hive \u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hive Configuration",src:n(2734).Z,width:"1489",height:"1156"})),(0,r.kt)("h3",{id:"inlong-manager-client-\u65b9\u5f0f"},"InLong Manager Client \u65b9\u5f0f"),(0,r.kt)("p",null,"TODO: \u672a\u6765\u7248\u672c\u652f\u6301"),(0,r.kt)("h2",{id:"hive-\u52a0\u8f7d\u8282\u70b9\u53c2\u6570\u4fe1\u606f"},"Hive \u52a0\u8f7d\u8282\u70b9\u53c2\u6570\u4fe1\u606f"),(0,r.kt)("table",{class:"table table-bordered"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left",style:{width:"10%"}},"\u53c2\u6570"),(0,r.kt)("th",{class:"text-left",style:{width:"8%"}},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{class:"text-left",style:{width:"7%"}},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{class:"text-left",style:{width:"10%"}},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{class:"text-left",style:{width:"65%"}},"\u63cf\u8ff0"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"connector")),(0,r.kt)("td",null,"\u5fc5\u987b"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u6307\u5b9a\u4f7f\u7528\u4ec0\u4e48\u8fde\u63a5\u5668\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f  'hive'\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"default-database")),(0,r.kt)("td",null,"\u5fc5\u987b"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u6307\u5b9a\u6570\u636e\u5e93\u540d\u79f0\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"hive-conf-dir")),(0,r.kt)("td",null,"\u5fc5\u987b"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u672c\u5730\u6784\u5efa\u9879\u76ee\u53ef\u4ee5\u5c06hive-site.xml\u6784\u5efa\u5230 classpath \u4e2d\uff0c\u672a\u6765 Dashboard \u5c06\u652f\u6301\u672c\u5730\u4e0a\u4f20\u80fd\u529b\u3002 \u76ee\u524d\u901a\u7528\u65b9\u5f0f\u53ea\u652f\u6301\u914d\u7f6e\u5df2\u7ecf\u4e0a\u4f20\u6587\u4ef6\u540e\u7684 HDFS \u8def\u5f84\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.partition-commit.trigger")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u5982\u679c\u8868\u662f\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u914d\u7f6e\u89e6\u53d1\u6a21\u5f0f\u3002\u5982\uff1a(process-time)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"partition.time-extractor.timestamp-pattern")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u5982\u679c\u8868\u662f\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u914d\u7f6e\u65f6\u95f4\u6233\u3002\u5982\uff1a(yyyy-MM-dd)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.partition-commit.delay")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u5982\u679c\u8868\u662f\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u914d\u7f6e\u5ef6\u8fdf\u65f6\u95f4\u3002\u5982\uff1a(10s,20s,1m...)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.partition-commit.policy.kind")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u5206\u533a\u63d0\u4ea4\u7b56\u7565\u901a\u77e5\u4e0b\u6e38\u67d0\u4e2a\u5206\u533a\u5df2\u7ecf\u5199\u5b8c\u6bd5\u53ef\u4ee5\u88ab\u8bfb\u53d6\u4e86\u3002 metastore\uff1a\u5411 metadata \u589e\u52a0\u5206\u533a\u3002\u4ec5 hive \u652f\u6301 metastore \u7b56\u7565\uff0c\u6587\u4ef6\u7cfb\u7edf\u901a\u8fc7\u76ee\u5f55\u7ed3\u6784\u7ba1\u7406\u5206\u533a\uff1b success-file\uff1a\u5728\u76ee\u5f55\u4e2d\u589e\u52a0 '_success' \u6587\u4ef6\uff1b \u4e0a\u8ff0\u4e24\u4e2a\u7b56\u7565\u53ef\u4ee5\u540c\u65f6\u6307\u5b9a\uff1a'metastore,success-file'\u3002 custom\uff1a\u901a\u8fc7\u6307\u5b9a\u7684\u7c7b\u6765\u521b\u5efa\u63d0\u4ea4\u7b56\u7565\uff0c \u652f\u6301\u540c\u65f6\u6307\u5b9a\u591a\u4e2a\u63d0\u4ea4\u7b56\u7565\uff1a'metastore,success-file'\u3002")))),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("div",{class:"wy-table-responsive"},(0,r.kt)("table",{class:"colwidths-auto docutils"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left"},"Hive type"),(0,r.kt)("th",{class:"text-left"},"Flink SQL type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"char(p)"),(0,r.kt)("td",null,"CHAR(p)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"varchar(p)"),(0,r.kt)("td",null,"VARCHAR(p)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"STRING")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"BOOLEAN")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"tinyint"),(0,r.kt)("td",null,"TINYINT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"smallint"),(0,r.kt)("td",null,"SMALLINT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"int"),(0,r.kt)("td",null,"INT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"bigint"),(0,r.kt)("td",null,"BIGINT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"float"),(0,r.kt)("td",null,"FLOAT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"double"),(0,r.kt)("td",null,"DOUBLE")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"decimal(p, s)"),(0,r.kt)("td",null,"DECIMAL(p, s)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"date"),(0,r.kt)("td",null,"DATE")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"timestamp(9)"),(0,r.kt)("td",null,"TIMESTAMP")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"bytes"),(0,r.kt)("td",null,"BINARY")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"LIST")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"map"),(0,r.kt)("td",null,"MAP")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"row"),(0,r.kt)("td",null,"STRUCT"))))))}c.isMDXComponent=!0},2734:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/hive-97be71bbdd619a33289d0801b0a4e18c.png"}}]);