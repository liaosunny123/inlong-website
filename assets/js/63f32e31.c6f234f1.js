"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[13988],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(a),p=i,g=m["".concat(s,".").concat(p)]||m[p]||c[p]||r;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={title:"Overview",sidebar_position:1},l=void 0,o={unversionedId:"modules/audit/overview",id:"version-1.2.0/modules/audit/overview",title:"Overview",description:"InLong audit is a subsystem independent of InLong, which performs real-time audit and reconciliation on the incoming and outgoing traffic of the Agent, DataProxy, and Sort modules of the InLong system.",source:"@site/versioned_docs/version-1.2.0/modules/audit/overview.md",sourceDirName:"modules/audit",slug:"/modules/audit/overview",permalink:"/docs/1.2.0/modules/audit/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/modules/audit/overview.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch Example",permalink:"/docs/1.2.0/modules/sort-standalone/elasticsearch_example"},next:{title:"Deployment",permalink:"/docs/1.2.0/modules/audit/quick_start"}},s={},d=[{value:"Architecture",id:"architecture",level:2},{value:"Audit Dimension",id:"audit-dimension",level:2},{value:"Audit ID",id:"audit-id",level:2},{value:"Data Transfer Protocol",id:"data-transfer-protocol",level:2},{value:"Audit SDK Implementation Details",id:"audit-sdk-implementation-details",level:2},{value:"Target",id:"target",level:3},{value:"Main Logic Diagram",id:"main-logic-diagram",level:3},{value:"Service Discovery",id:"service-discovery",level:3},{value:"Disaster Recovery",id:"disaster-recovery",level:3},{value:"Access layer Implementation",id:"access-layer-implementation",level:2},{value:"Target",id:"target-1",level:3},{value:"Main Logic Diagram",id:"main-logic-diagram-1",level:3},{value:"Elasticsearch Distribution Implementation",id:"elasticsearch-distribution-implementation",level:2},{value:"Target",id:"target-2",level:3},{value:"Main Logic Diagram",id:"main-logic-diagram-2",level:3},{value:"Elasticsearch Index Design",id:"elasticsearch-index-design",level:3},{value:"Index Name",id:"index-name",level:4},{value:"Index Field Schema",id:"index-field-schema",level:4},{value:"Elasticsearch Index Storage Period",id:"elasticsearch-index-storage-period",level:4},{value:"Elasticsearch Write Design",id:"elasticsearch-write-design",level:2},{value:"The relationship between inlong_group_id, inlong_stream_id, audit ID and Elasticsearch index",id:"the-relationship-between-inlong_group_id-inlong_stream_id-audit-id-and-elasticsearch-index",level:3},{value:"Write Routing Policy",id:"write-routing-policy",level:3},{value:"Optional DeduplicationBy doc_id",id:"optional-deduplicationby-doc_id",level:3},{value:"Use bulk batch method",id:"use-bulk-batch-method",level:3},{value:"MySQL Distribution Implementation",id:"mysql-distribution-implementation",level:2},{value:"Target",id:"target-3",level:3},{value:"Main Logic Diagram",id:"main-logic-diagram-3",level:3},{value:"Usage introduction",id:"usage-introduction",level:3},{value:"Audit Usage Interface Design",id:"audit-usage-interface-design",level:2},{value:"Main Logic Diagram",id:"main-logic-diagram-4",level:3},{value:"UI Interface Display",id:"ui-interface-display",level:3},{value:"Main Logic Diagram",id:"main-logic-diagram-5",level:3}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"InLong audit is a subsystem independent of InLong, which performs real-time audit and reconciliation on the incoming and outgoing traffic of the Agent, DataProxy, and Sort modules of the InLong system.\nThere are three granularities for reconciliation: minutes, hours, and days."),(0,i.kt)("p",null,"The audit reconciliation is based on the log reporting time, and each service participating in the audit will conduct real-time reconciliation according to the same log time. Through audit reconciliation, we can clearly understand InLong\nThe transmission status of each module, and whether the data stream is lost or repeated"),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(93164).Z,width:"1260",height:"213"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The audit SDK is nested in the service that needs to be audited, audits the service, and sends the audit result to the audit access layer"),(0,i.kt)("li",{parentName:"ol"},"The audit proxy writes audit data to MQ (Pulsar or TubeMQ)"),(0,i.kt)("li",{parentName:"ol"},"The distribution service consumes the audit data of MQ, and writes the audit data to MySQL and Elasticsearch"),(0,i.kt)("li",{parentName:"ol"},"The interface layer encapsulates the data of MySQL and Elasticsearch"),(0,i.kt)("li",{parentName:"ol"},"Application scenarios mainly include report display, audit reconciliation, etc.")),(0,i.kt)("h2",{id:"audit-dimension"},"Audit Dimension"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Machine ip"),(0,i.kt)("td",{parentName:"tr",align:null},"Container ID"),(0,i.kt)("td",{parentName:"tr",align:null},"Thread ID"),(0,i.kt)("td",{parentName:"tr",align:null},"Log time (minutes)"),(0,i.kt)("td",{parentName:"tr",align:null},"Audit ID"),(0,i.kt)("td",{parentName:"tr",align:null},"inlong_group_id"),(0,i.kt)("td",{parentName:"tr",align:null},"inlong_stream_id"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of records"),(0,i.kt)("td",{parentName:"tr",align:null},"Size"),(0,i.kt)("td",{parentName:"tr",align:null},"Transmission delay (ms)")))),(0,i.kt)("h2",{id:"audit-id"},"Audit ID"),(0,i.kt)("p",null,"The receiving and sending of each module are respectively an independent audit item ID"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Inlong Service Module"),(0,i.kt)("th",{parentName:"tr",align:null},"Audit ID"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Inlong API Received Successfully"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Inlong API Send Successfully"),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Inlong Agent Received Successfully"),(0,i.kt)("td",{parentName:"tr",align:null},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Inlong Agent Send Successfully"),(0,i.kt)("td",{parentName:"tr",align:null},"4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Inlong DataProxy Received Successfully"),(0,i.kt)("td",{parentName:"tr",align:null},"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Inlong DataProxy Send Successfully"),(0,i.kt)("td",{parentName:"tr",align:null},"6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Inlong Sort Received Successfully"),(0,i.kt)("td",{parentName:"tr",align:null},"7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Inlong Sort Send Successfully"),(0,i.kt)("td",{parentName:"tr",align:null},"8")))),(0,i.kt)("h2",{id:"data-transfer-protocol"},"Data Transfer Protocol"),(0,i.kt)("p",null,"The transmission protocol between sdk, access layer, and distribution layer is Protocol Buffers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'syntax = "proto3";\n\npackage org.apache.inlong.audit.protocol;\n\nmessage BaseCommand {\n    enum Type {\n        PING          = 0;\n        PONG          = 1;\n        AUDITREQUEST  = 2;\n        AUDITREPLY    = 3;\n    }\n    Type type                            = 1;\n    optional AuditRequest audit_request  = 2;\n    optional AuditReply audit_reply      = 3;\n    optional Ping ping                   = 4;\n    optional Pong pong                   = 5;\n}\n\nmessage Ping {\n}\n\nmessage Pong {\n}\n\nmessage AuditRequest {\n  AuditMessageHeader msg_header = 1;   \n  repeated AuditMessageBody msg_body = 2;   \n}\n\nmessage AuditMessageHeader {\n  string ip = 1;            \n  string docker_id = 2;     \n  string thread_id = 3;     \n  uint64 sdk_ts = 4;        \n  uint64 packet_id = 5;     \n}\n\nmessage AuditMessageBody {\n  uint64 log_ts = 1;   \n  string inlong_group_id= 2;   \n  string inlong_stream_id= 3; \n  string audit_id = 4;   \n  uint64 count = 5;     \n  uint64 size = 6;      \n  int64  delay = 7;      \n}\n\nmessage AuditReply {\n  enum RSP_CODE {\n    SUCCESS  = 0;  \n    FAILED   = 1;   \n    DISASTER = 2; \n  }\n  RSP_CODE rsp_code = 1;   \n  optional string message = 2;\n}\n')),(0,i.kt)("h2",{id:"audit-sdk-implementation-details"},"Audit SDK Implementation Details"),(0,i.kt)("h3",{id:"target"},"Target"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"1. Support local disaster recovery")),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"2. Data Uniqueness")),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"3. Reduce data loss caused by abnormal restart"))),(0,i.kt)("h3",{id:"main-logic-diagram"},"Main Logic Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(23679).Z,width:"848",height:"1444"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The sdk provides the add interface externally. The parameters are: audit_id, inlong_group_id, inlong_stream_id, number, size."),(0,i.kt)("li",{parentName:"ol"},"The sdk uses log time+audit_id+inlong_group_id+inlong_stream_id as the key to perform real-time statistics."),(0,i.kt)("li",{parentName:"ol"},"When the sending cycle is satisfied or the business program is actively triggered, the SDK will package the statistical results with the PB protocol and send the audit access layer."),(0,i.kt)("li",{parentName:"ol"},"If (4) fails to send, put it into the failure queue, and continue to send in the next cycle."),(0,i.kt)("li",{parentName:"ol"},"When the failure queue is greater than the threshold, perform disaster recovery through local files.")),(0,i.kt)("h3",{id:"service-discovery"},"Service Discovery"),(0,i.kt)("p",null,"Audit name discovery between sdk and access layer, support plug-in, including domain name, vip, etc."),(0,i.kt)("h3",{id:"disaster-recovery"},"Disaster Recovery"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(43608).Z,width:"280",height:"824"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When the SDK fails to send the access layer, it will be placed in the failure queue."),(0,i.kt)("li",{parentName:"ol"},"When the failure queue reaches the threshold, it will be written to the local disaster recovery file."),(0,i.kt)("li",{parentName:"ol"},"When the local disaster recovery file reaches the threshold, the old data will be eliminated (eliminated by time).")),(0,i.kt)("h2",{id:"access-layer-implementation"},"Access layer Implementation"),(0,i.kt)("h3",{id:"target-1"},"Target"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"1.High reliability")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"2.at least once")),"  "),(0,i.kt)("h3",{id:"main-logic-diagram-1"},"Main Logic Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2335).Z,width:"1192",height:"424"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"After the access layer receives the packet sent by the sdk, it writes the message queue."),(0,i.kt)("li",{parentName:"ol"},"After writing the message queue successfully, return success to the sdk."),(0,i.kt)("li",{parentName:"ol"},"The data protocol of the message queue is the PB protocol."),(0,i.kt)("li",{parentName:"ol"},"Set the ack of the write message queue to -1 or all.")),(0,i.kt)("h2",{id:"elasticsearch-distribution-implementation"},"Elasticsearch Distribution Implementation"),(0,i.kt)("h3",{id:"target-2"},"Target"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"1. High real-time performance (minute level)")),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"2. Can operate tens of billions of audit data per day")),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"3. Can be deduplicated"))),(0,i.kt)("h3",{id:"main-logic-diagram-2"},"Main Logic Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9207).Z,width:"1289",height:"508"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Distribution service AuditDds consumes messages in real time."),(0,i.kt)("li",{parentName:"ol"},"According to the audit ID in the audit data, route the data to the corresponding Elasticsearch cluster."),(0,i.kt)("li",{parentName:"ol"},"Each audit ID corresponds to an Elasticsearch index.")),(0,i.kt)("h3",{id:"elasticsearch-index-design"},"Elasticsearch Index Design"),(0,i.kt)("h4",{id:"index-name"},"Index Name"),(0,i.kt)("p",null,"The index name consists of date + audit item ID, such as 20211019_1, 20211019_2."),(0,i.kt)("h4",{id:"index-field-schema"},"Index Field Schema"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"field"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"instruction"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"audit_id"),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"Audit ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"inlong_group_id"),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"inlong_group_id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"inlong_stream_id"),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"inlong_stream_id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"docker_id"),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"ID of the container where the dk is located")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"thread_id"),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"thread ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"packet_id"),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"Package ID reported by sdk")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ip"),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"Machine IP")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"log_ts"),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"log time")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sdk_ts"),(0,i.kt)("td",{parentName:"tr",align:null},"long"),(0,i.kt)("td",{parentName:"tr",align:null},"Audit SDK reporting time")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"count"),(0,i.kt)("td",{parentName:"tr",align:null},"long"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of logs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"size"),(0,i.kt)("td",{parentName:"tr",align:null},"long"),(0,i.kt)("td",{parentName:"tr",align:null},"size of log")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"delay"),(0,i.kt)("td",{parentName:"tr",align:null},"long"),(0,i.kt)("td",{parentName:"tr",align:null},"The log transfer time, equal to the current machine time minus the log time")))),(0,i.kt)("h4",{id:"elasticsearch-index-storage-period"},"Elasticsearch Index Storage Period"),(0,i.kt)("p",null,"Storage by day, storage period is dynamically configurable"),(0,i.kt)("h2",{id:"elasticsearch-write-design"},"Elasticsearch Write Design"),(0,i.kt)("h3",{id:"the-relationship-between-inlong_group_id-inlong_stream_id-audit-id-and-elasticsearch-index"},"The relationship between inlong_group_id, inlong_stream_id, audit ID and Elasticsearch index"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(52332).Z,width:"1040",height:"258"}),"\nThe relationship between inlong_group_id, inlong_stream_id, audit ID and Elasticsearch index is 1:N in system design and service implementation"),(0,i.kt)("h3",{id:"write-routing-policy"},"Write Routing Policy"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(48800).Z,width:"1920",height:"259"}),"\nUse inlong_group_id and inlong_stream_id to route to Elasticsearch shards to ensure that the same inlong_group_id and inlong_stream_id are stored in the same shard\nWhen writing the same inlong_group_id and inlong_stream_id to the same shard, when querying and aggregating, only one shard needs to be processed, which can greatly improve performance"),(0,i.kt)("h3",{id:"optional-deduplicationby-doc_id"},"Optional DeduplicationBy doc_id"),(0,i.kt)("p",null,"Elasticsearch is resource-intensive for real-time deduplication. This function is optional through configuration."),(0,i.kt)("h3",{id:"use-bulk-batch-method"},"Use bulk batch method"),(0,i.kt)("p",null,"Use bulk to write, each batch of 5000, improve the write performance of the Elasticsearch cluster"),(0,i.kt)("h2",{id:"mysql-distribution-implementation"},"MySQL Distribution Implementation"),(0,i.kt)("h3",{id:"target-3"},"Target"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"1. High real-time performance (minute level)")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"2. Simple to deploy")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"3. Can be deduplicated")),"  "),(0,i.kt)("h3",{id:"main-logic-diagram-3"},"Main Logic Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(62633).Z,width:"1050",height:"250"}),"\nMySQL distribution supports distribution to different MySQL instances according to the audit ID, and supports horizontal expansion."),(0,i.kt)("h3",{id:"usage-introduction"},"Usage introduction"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When the audit scale of the business is relatively small, less than ten million per day, you can consider using MySQL as the audit storage. Because the deployment of MySQL is much simpler than that of Elasticsearch, the resource cost will be much less."),(0,i.kt)("li",{parentName:"ol"},"If the scale of audit data is large and MySQL cannot support it, you can consider using Elasticsearch as storage. After all, a single Elasticsearch cluster can support tens of billions of audit data and horizontal expansion.")),(0,i.kt)("h2",{id:"audit-usage-interface-design"},"Audit Usage Interface Design"),(0,i.kt)("h3",{id:"main-logic-diagram-4"},"Main Logic Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(19322).Z,width:"1718",height:"241"}),"\nThe audit interface layer uses SQL to check MySQL or restful to check Elasticsearch. How to check which type of storage the interface uses depends on which type of storage is used."),(0,i.kt)("h3",{id:"ui-interface-display"},"UI Interface Display"),(0,i.kt)("h3",{id:"main-logic-diagram-5"},"Main Logic Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(94677).Z,width:"1735",height:"931"}),"\nThe front-end page pulls the audit data of each module through the interface layer and displays it."))}c.isMDXComponent=!0},19322:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/audit_api-2fa08b39a7e31207a2cd8bd104525901.png"},93164:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/audit_architecture-8402cbb7c4906ca8cf7d26c57c204dbb.png"},62633:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/audit_mysql-527cb86d7d377b0a6e944b2ee2930431.png"},2335:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/audit_proxy-da4ab5907594ab9e46b70645c9a0ea91.png"},23679:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/audit_sdk-76111ecb81d46749cf0daad888a756a0.png"},43608:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/audit_sdk_disaster_recovery-4c48c3a8e253ca1ca7dc99a2be2a4e48.png"},94677:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/audit_ui-51d52c5abdbf1615d329fe78b407e151.png"},52332:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/elasticsearch_index-e91afcde5316b4c42de87b9e3a0e363d.png"},9207:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/elasticsearch_overview-baeacc406471a715846369f35fe0d4d7.png"},48800:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/elasticsearch_write-4408c917c9a09304298f43924a25a625.png"}}]);