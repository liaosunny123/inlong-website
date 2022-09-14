"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[92830],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=u(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(g,l(l({ref:e},p),{},{components:n})):r.createElement(g,l({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13574:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Monitor Metrics",sidebar_position:3},l=void 0,o={unversionedId:"modules/agent/metrics",id:"modules/agent/metrics",title:"Monitor Metrics",description:"JMX Configuration",source:"@site/docs/modules/agent/metrics.md",sourceDirName:"modules/agent",slug:"/modules/agent/metrics",permalink:"/docs/next/modules/agent/metrics",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/agent/metrics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Monitor Metrics",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/next/modules/agent/quick_start"},next:{title:"Overview",permalink:"/docs/next/modules/dataproxy/overview"}},s={},u=[{value:"JMX Configuration",id:"jmx-configuration",level:2},{value:"Prometheus Configuration",id:"prometheus-configuration",level:2},{value:"Custom Configuration",id:"custom-configuration",level:2},{value:"Appendix: Metrics Items",id:"appendix-metrics-items",level:2},{value:"AgentTaskMetric",id:"agenttaskmetric",level:3},{value:"JobMetrics",id:"jobmetrics",level:3},{value:"PluginMetric",id:"pluginmetric",level:3},{value:"SourceMetric",id:"sourcemetric",level:3},{value:"SinkMetric",id:"sinkmetric",level:3}],p={toc:u};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"jmx-configuration"},"JMX Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# The listener of JMX is AgentJmxMetricListener\nagent.domainListeners=org.apache.inlong.agent.metrics.AgentJmxMetricListener\n")),(0,a.kt)("h2",{id:"prometheus-configuration"},"Prometheus Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# The listener of Prometheus is AgentPrometheusMetricListener\nagent.domainListeners=org.apache.inlong.agent.metrics.AgentPrometheusMetricListener\n# the default is 9080\nagent.prometheus.exporter.port=9080\n")),(0,a.kt)("h2",{id:"custom-configuration"},"Custom Configuration"),(0,a.kt)("p",null,"If the user wants to monitor the indicator capabilities in other ways, You can inherit the ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.inlong.agent.metrics.AgentMetricBaseListener"),"  class and implement it,\nand finally configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"agent.domainListeners")," property in the ",(0,a.kt)("inlineCode",{parentName:"p"},"agent.properties")," file. "),(0,a.kt)("h2",{id:"appendix-metrics-items"},"Appendix: Metrics Items"),(0,a.kt)("h3",{id:"agenttaskmetric"},"AgentTaskMetric"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"property"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"runningTasks"),(0,a.kt)("td",{parentName:"tr",align:null},"tasks currently being executed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"retryingTasks"),(0,a.kt)("td",{parentName:"tr",align:null},"Tasks that are currently being retried")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fatalTasks"),(0,a.kt)("td",{parentName:"tr",align:null},"The total number of currently failed tasks")))),(0,a.kt)("h3",{id:"jobmetrics"},"JobMetrics"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"property"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"runningJobs"),(0,a.kt)("td",{parentName:"tr",align:null},"the total number of currently running jobs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fatalJobs"),(0,a.kt)("td",{parentName:"tr",align:null},"the total number of currently failed jobs")))),(0,a.kt)("h3",{id:"pluginmetric"},"PluginMetric"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"property"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"readNum"),(0,a.kt)("td",{parentName:"tr",align:null},"the number of reads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sendNum"),(0,a.kt)("td",{parentName:"tr",align:null},"the number of sent items")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sendFailedNum"),(0,a.kt)("td",{parentName:"tr",align:null},"the number of failed sending")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"readFailedNum"),(0,a.kt)("td",{parentName:"tr",align:null},"the number of failed reads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"readSuccessNum"),(0,a.kt)("td",{parentName:"tr",align:null},"the number of successful reads")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sendSuccessNum"),(0,a.kt)("td",{parentName:"tr",align:null},"the number of successfully sent")))),(0,a.kt)("h3",{id:"sourcemetric"},"SourceMetric"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"property"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"agent_source_count_success"),(0,a.kt)("td",{parentName:"tr",align:null},"Counter"),(0,a.kt)("td",{parentName:"tr",align:null},"the success message count in agent source since agent started")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"agent_source_count_fail"),(0,a.kt)("td",{parentName:"tr",align:null},"Counter"),(0,a.kt)("td",{parentName:"tr",align:null},"the sink success message count in agent source since agent started")))),(0,a.kt)("h3",{id:"sinkmetric"},"SinkMetric"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"property"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"agent_sink_count_success"),(0,a.kt)("td",{parentName:"tr",align:null},"Counter"),(0,a.kt)("td",{parentName:"tr",align:null},"the sink success message count in agent source since agent started")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"agent_sink_count_fail"),(0,a.kt)("td",{parentName:"tr",align:null},"Counter"),(0,a.kt)("td",{parentName:"tr",align:null},"the sink failed message count in agent source since agent started")))))}m.isMDXComponent=!0}}]);