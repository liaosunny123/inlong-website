"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[46103],{48166:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(67294),l=n(86010),o=n(10833),r=n(35281),i=n(39058),s=n(51860),c=n(87462),m=n(95999),d=n(32244);function u(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,c.Z)({},n,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,c.Z)({},t,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var g=n(39407);function f(e){const{content:t}=e,{assets:n,metadata:l}=t,{title:r,description:i,date:s,tags:c,authors:m,frontMatter:d}=l,{keywords:u}=d,g=n.image??d.image;return a.createElement(o.d,{title:r,description:i,keywords:u,image:g},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),m.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}function v(e){const{content:t,sidebar:n}=e,{assets:l,metadata:o}=t,{nextItem:r,prevItem:c,frontMatter:m}=o,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:v}=m;return a.createElement(i.Z,{sidebar:n,toc:!d&&t.toc&&t.toc.length>0?a.createElement(g.Z,{toc:t.toc,minHeadingLevel:f,maxHeadingLevel:v}):void 0},a.createElement(s.Z,{frontMatter:m,assets:l,metadata:o,isBlogPostPage:!0},a.createElement(t,null)),(r||c)&&a.createElement(u,{nextItem:r,prevItem:c}))}function p(e){return a.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage)},a.createElement(f,e),a.createElement(v,e))}},39407:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87462),l=n(67294),o=n(86010),r=n(93743);const i="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,o.Z)(i,"thin-scrollbar",t)},l.createElement(r.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),l=n(67294),o=n(86668);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),s=c(i,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?l.createElement("ul",{className:o?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=l.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:u,...f}=e;const v=(0,o.L)(),p=m??v.tableOfContents.minHeadingLevel,h=u??v.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:h});return d((0,l.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:p,maxHeadingLevel:h}}),[s,c,p,h])),l.createElement(g,(0,a.Z)({toc:b,className:n,linkClassName:s},f))}}}]);