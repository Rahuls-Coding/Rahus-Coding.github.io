(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(2930)}])},2930:function(f,c,a){"use strict";a.r(c),a.d(c,{default:function(){return H}});var g=a(1799),h=a(5893);a(4831);var b=a(7294);let i=["light","dark"],j="(prefers-color-scheme: dark)",k="undefined"==typeof window,l=(0,b.createContext)(void 0),m=a=>(0,b.useContext)(l)?b.createElement(b.Fragment,null,a.children):b.createElement(n,a),n=({forcedTheme:a,disableTransitionOnChange:m=!1,enableSystem:d=!0,enableColorScheme:n=!0,storageKey:s="theme",themes:e=["light","dark"],defaultTheme:t=d?"system":"light",attribute:u="data-theme",value:f,children:g,nonce:v})=>{let[c,y]=(0,b.useState)(()=>p(s,t)),[h,z]=(0,b.useState)(()=>p(s)),w=f?Object.values(f):e,A=(0,b.useCallback)(e=>{let a=e;if(!a)return;"system"===e&&d&&(a=r());let c=f?f[a]:a,g=m?q():null,b=document.documentElement;if("class"===u?(b.classList.remove(...w),c&&b.classList.add(c)):c?b.setAttribute(u,c):b.removeAttribute(u),n){let h=i.includes(t)?t:null,j=i.includes(a)?a:h;b.style.colorScheme=j}null==g||g()},[]),k=(0,b.useCallback)(a=>{y(a);try{localStorage.setItem(s,a)}catch(b){}},[a]),x=(0,b.useCallback)(b=>{let e=r(b);z(e),"system"===c&&d&&!a&&A("system")},[c,a]);return(0,b.useEffect)(()=>{let a=window.matchMedia(j);return a.addListener(x),x(a),()=>a.removeListener(x)},[x]),(0,b.useEffect)(()=>{let a=a=>{a.key===s&&k(a.newValue||t)};return window.addEventListener("storage",a),()=>window.removeEventListener("storage",a)},[k]),(0,b.useEffect)(()=>{A(null!=a?a:c)},[a,c]),b.createElement(l.Provider,{value:{theme:c,setTheme:k,forcedTheme:a,resolvedTheme:"system"===c?h:c,themes:d?[...e,"system"]:e,systemTheme:d?h:void 0}},b.createElement(o,{forcedTheme:a,disableTransitionOnChange:m,enableSystem:d,enableColorScheme:n,storageKey:s,themes:e,defaultTheme:t,attribute:u,value:f,children:g,attrs:w,nonce:v}),g)},o=(0,b.memo)(({forcedTheme:f,storageKey:g,attribute:h,enableSystem:m,enableColorScheme:n,defaultTheme:c,value:d,attrs:o,nonce:p})=>{let k="system"===c,e="class"===h?`var d=document.documentElement,c=d.classList;c.remove(${o.map(a=>`'${a}'`).join(",")});`:`var d=document.documentElement,n='${h}',s='setAttribute';`,l=n?i.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",a=(a,c=!1,g=!0)=>{let e=d?d[a]:a,f=c?a+"|| ''":`'${e}'`,b="";return n&&g&&!c&&i.includes(a)&&(b+=`d.style.colorScheme = '${a}';`),"class"===h?b+=c||e?`c.add(${f})`:"null":e&&(b+=`d[s](n,${f})`),b},q=f?`!function(){${e}${a(f)}}()`:m?`!function(){try{${e}var e=localStorage.getItem('${g}');if('system'===e||(!e&&${k})){var t='${j}',m=window.matchMedia(t);if(m.media!==t||m.matches){${a("dark")}}else{${a("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${a(d?"x[e]":"e",!0)}}${k?"":"else{"+a(c,!1,!1)+"}"}${l}}catch(e){}}()`:`!function(){try{${e}var e=localStorage.getItem('${g}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${a(d?"x[e]":"e",!0)}}else{${a(c,!1,!1)};}${l}}catch(t){}}();`;return b.createElement("script",{nonce:p,dangerouslySetInnerHTML:{__html:q}})},()=>!0),p=(b,c)=>{if(k)return;let a;try{a=localStorage.getItem(b)||void 0}catch(d){}return a||c},q=()=>{let a=document.createElement("style");return a.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(a),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(a)},1)}},r=a=>(a||(a=window.matchMedia(j)),a.matches?"dark":"light");var d=a(9008),s=a.n(d);function t(){return(t=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function u(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}var v={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},w=function(e,a,c){void 0===a&&(a=[]);var d=void 0===c?{}:c,f=d.defaultWidth,g=d.defaultHeight;return a.reduce(function(c,a,d){return c.push(b.createElement("meta",{key:"og:"+e+":0"+d,property:"og:"+e,content:a.url})),a.alt&&c.push(b.createElement("meta",{key:"og:"+e+":alt0"+d,property:"og:"+e+":alt",content:a.alt})),a.secureUrl&&c.push(b.createElement("meta",{key:"og:"+e+":secure_url0"+d,property:"og:"+e+":secure_url",content:a.secureUrl.toString()})),a.type&&c.push(b.createElement("meta",{key:"og:"+e+":type0"+d,property:"og:"+e+":type",content:a.type.toString()})),a.width?c.push(b.createElement("meta",{key:"og:"+e+":width0"+d,property:"og:"+e+":width",content:a.width.toString()})):f&&c.push(b.createElement("meta",{key:"og:"+e+":width0"+d,property:"og:"+e+":width",content:f.toString()})),a.height?c.push(b.createElement("meta",{key:"og:"+e+":height"+d,property:"og:"+e+":height",content:a.height.toString()})):g&&c.push(b.createElement("meta",{key:"og:"+e+":height"+d,property:"og:"+e+":height",content:g.toString()})),c},[])},x=function(a){var h,i,j,k,l,c=[];a.titleTemplate&&(v.templateTitle=a.titleTemplate);var f="";a.title?(f=a.title,v.templateTitle&&(f=v.templateTitle.replace(/%s/g,function(){return f}))):a.defaultTitle&&(f=a.defaultTitle),f&&c.push(b.createElement("title",{key:"title"},f));var m=a.noindex||v.noindex||a.dangerouslySetAllPagesToNoIndex,n=a.nofollow||v.nofollow||a.dangerouslySetAllPagesToNoFollow,g="";if(a.robotsProps){var d=a.robotsProps,s=d.nosnippet,o=d.maxSnippet,p=d.maxImagePreview,q=d.maxVideoPreview,u=d.noarchive,x=d.noimageindex,y=d.notranslate,r=d.unavailableAfter;g=(s?",nosnippet":"")+(o?",max-snippet:"+o:"")+(p?",max-image-preview:"+p:"")+(u?",noarchive":"")+(r?",unavailable_after:"+r:"")+(x?",noimageindex":"")+(q?",max-video-preview:"+q:"")+(y?",notranslate":"")}if(m||n?(a.dangerouslySetAllPagesToNoIndex&&(v.noindex=!0),a.dangerouslySetAllPagesToNoFollow&&(v.nofollow=!0),c.push(b.createElement("meta",{key:"robots",name:"robots",content:(m?"noindex":"index")+","+(n?"nofollow":"follow")+g}))):c.push(b.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+g})),a.description&&c.push(b.createElement("meta",{key:"description",name:"description",content:a.description})),a.mobileAlternate&&c.push(b.createElement("link",{rel:"alternate",key:"mobileAlternate",media:a.mobileAlternate.media,href:a.mobileAlternate.href})),a.languageAlternates&&a.languageAlternates.length>0&&a.languageAlternates.forEach(function(a){c.push(b.createElement("link",{rel:"alternate",key:"languageAlternate-"+a.hrefLang,hrefLang:a.hrefLang,href:a.href}))}),a.twitter&&(a.twitter.cardType&&c.push(b.createElement("meta",{key:"twitter:card",name:"twitter:card",content:a.twitter.cardType})),a.twitter.site&&c.push(b.createElement("meta",{key:"twitter:site",name:"twitter:site",content:a.twitter.site})),a.twitter.handle&&c.push(b.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:a.twitter.handle}))),a.facebook&&a.facebook.appId&&c.push(b.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:a.facebook.appId})),(null!=(h=a.openGraph)&&h.title||f)&&c.push(b.createElement("meta",{key:"og:title",property:"og:title",content:(null==(k=a.openGraph)?void 0:k.title)||f})),(null!=(i=a.openGraph)&&i.description||a.description)&&c.push(b.createElement("meta",{key:"og:description",property:"og:description",content:(null==(l=a.openGraph)?void 0:l.description)||a.description})),a.openGraph){if((a.openGraph.url||a.canonical)&&c.push(b.createElement("meta",{key:"og:url",property:"og:url",content:a.openGraph.url||a.canonical})),a.openGraph.type){var e=a.openGraph.type.toLowerCase();c.push(b.createElement("meta",{key:"og:type",property:"og:type",content:e})),"profile"===e&&a.openGraph.profile?(a.openGraph.profile.firstName&&c.push(b.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:a.openGraph.profile.firstName})),a.openGraph.profile.lastName&&c.push(b.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:a.openGraph.profile.lastName})),a.openGraph.profile.username&&c.push(b.createElement("meta",{key:"profile:username",property:"profile:username",content:a.openGraph.profile.username})),a.openGraph.profile.gender&&c.push(b.createElement("meta",{key:"profile:gender",property:"profile:gender",content:a.openGraph.profile.gender}))):"book"===e&&a.openGraph.book?(a.openGraph.book.authors&&a.openGraph.book.authors.length&&a.openGraph.book.authors.forEach(function(a,d){c.push(b.createElement("meta",{key:"book:author:0"+d,property:"book:author",content:a}))}),a.openGraph.book.isbn&&c.push(b.createElement("meta",{key:"book:isbn",property:"book:isbn",content:a.openGraph.book.isbn})),a.openGraph.book.releaseDate&&c.push(b.createElement("meta",{key:"book:release_date",property:"book:release_date",content:a.openGraph.book.releaseDate})),a.openGraph.book.tags&&a.openGraph.book.tags.length&&a.openGraph.book.tags.forEach(function(a,d){c.push(b.createElement("meta",{key:"book:tag:0"+d,property:"book:tag",content:a}))})):"article"===e&&a.openGraph.article?(a.openGraph.article.publishedTime&&c.push(b.createElement("meta",{key:"article:published_time",property:"article:published_time",content:a.openGraph.article.publishedTime})),a.openGraph.article.modifiedTime&&c.push(b.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:a.openGraph.article.modifiedTime})),a.openGraph.article.expirationTime&&c.push(b.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:a.openGraph.article.expirationTime})),a.openGraph.article.authors&&a.openGraph.article.authors.length&&a.openGraph.article.authors.forEach(function(a,d){c.push(b.createElement("meta",{key:"article:author:0"+d,property:"article:author",content:a}))}),a.openGraph.article.section&&c.push(b.createElement("meta",{key:"article:section",property:"article:section",content:a.openGraph.article.section})),a.openGraph.article.tags&&a.openGraph.article.tags.length&&a.openGraph.article.tags.forEach(function(a,d){c.push(b.createElement("meta",{key:"article:tag:0"+d,property:"article:tag",content:a}))})):("video.movie"===e||"video.episode"===e||"video.tv_show"===e||"video.other"===e)&&a.openGraph.video&&(a.openGraph.video.actors&&a.openGraph.video.actors.length&&a.openGraph.video.actors.forEach(function(a,d){a.profile&&c.push(b.createElement("meta",{key:"video:actor:0"+d,property:"video:actor",content:a.profile})),a.role&&c.push(b.createElement("meta",{key:"video:actor:role:0"+d,property:"video:actor:role",content:a.role}))}),a.openGraph.video.directors&&a.openGraph.video.directors.length&&a.openGraph.video.directors.forEach(function(a,d){c.push(b.createElement("meta",{key:"video:director:0"+d,property:"video:director",content:a}))}),a.openGraph.video.writers&&a.openGraph.video.writers.length&&a.openGraph.video.writers.forEach(function(a,d){c.push(b.createElement("meta",{key:"video:writer:0"+d,property:"video:writer",content:a}))}),a.openGraph.video.duration&&c.push(b.createElement("meta",{key:"video:duration",property:"video:duration",content:a.openGraph.video.duration.toString()})),a.openGraph.video.releaseDate&&c.push(b.createElement("meta",{key:"video:release_date",property:"video:release_date",content:a.openGraph.video.releaseDate})),a.openGraph.video.tags&&a.openGraph.video.tags.length&&a.openGraph.video.tags.forEach(function(a,d){c.push(b.createElement("meta",{key:"video:tag:0"+d,property:"video:tag",content:a}))}),a.openGraph.video.series&&c.push(b.createElement("meta",{key:"video:series",property:"video:series",content:a.openGraph.video.series})))}a.defaultOpenGraphImageWidth&&(v.defaultOpenGraphImageWidth=a.defaultOpenGraphImageWidth),a.defaultOpenGraphImageHeight&&(v.defaultOpenGraphImageHeight=a.defaultOpenGraphImageHeight),a.openGraph.images&&a.openGraph.images.length&&c.push.apply(c,w("image",a.openGraph.images,{defaultWidth:v.defaultOpenGraphImageWidth,defaultHeight:v.defaultOpenGraphImageHeight})),a.defaultOpenGraphVideoWidth&&(v.defaultOpenGraphVideoWidth=a.defaultOpenGraphVideoWidth),a.defaultOpenGraphVideoHeight&&(v.defaultOpenGraphVideoHeight=a.defaultOpenGraphVideoHeight),a.openGraph.videos&&a.openGraph.videos.length&&c.push.apply(c,w("video",a.openGraph.videos,{defaultWidth:v.defaultOpenGraphVideoWidth,defaultHeight:v.defaultOpenGraphVideoHeight})),a.openGraph.locale&&c.push(b.createElement("meta",{key:"og:locale",property:"og:locale",content:a.openGraph.locale})),a.openGraph.site_name&&c.push(b.createElement("meta",{key:"og:site_name",property:"og:site_name",content:a.openGraph.site_name}))}return a.canonical&&c.push(b.createElement("link",{rel:"canonical",href:a.canonical,key:"canonical"})),a.additionalMetaTags&&a.additionalMetaTags.length>0&&a.additionalMetaTags.forEach(function(a){var d,e,f;c.push(b.createElement("meta",t({key:"meta:"+(null!=(d=null!=(e=null!=(f=a.keyOverride)?f:a.name)?e:a.property)?d:a.httpEquiv)},a)))}),null!=(j=a.additionalLinkTags)&&j.length&&a.additionalLinkTags.forEach(function(a){var d;c.push(b.createElement("link",t({key:"link"+(null!=(d=a.keyOverride)?d:a.href)+a.rel},a)))}),c};b.Component;var y=function(e){var a,c;function d(){return e.apply(this,arguments)||this}return a=d,c=e,a.prototype=Object.create(c.prototype),a.prototype.constructor=a,a.__proto__=c,d.prototype.render=function(){var a=this.props,d=a.title,c=a.noindex,e=a.nofollow,f=a.robotsProps,g=a.description,h=a.canonical,i=a.openGraph,j=a.facebook,k=a.twitter,l=a.additionalMetaTags,m=a.titleTemplate,n=a.defaultTitle,o=a.mobileAlternate,p=a.languageAlternates,q=a.additionalLinkTags;return b.createElement(s(),null,x({title:d,noindex:void 0!==c&&c,nofollow:e,robotsProps:f,description:g,canonical:h,facebook:j,openGraph:i,additionalMetaTags:l,twitter:k,titleTemplate:m,defaultTitle:n,mobileAlternate:o,languageAlternates:p,additionalLinkTags:q}))},d}(b.Component),z=function(d,a){var b=a.id,c=t({},(void 0===b?void 0:b)?{"@id":a.id}:{},a);return delete c.id,{__html:JSON.stringify(t({"@context":"https://schema.org","@type":d},c),C)}},e=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}),A=RegExp("["+Object.keys(e).join("")+"]","g"),B=function(a){return e[a]},C=function(b,a){switch(typeof a){case"object":if(null===a)return;return a;case"number":case"boolean":case"bigint":return a;case"string":return a.replace(A,B);default:return}};function D(a){var b;return"string"==typeof a?{"@type":"Person",name:a}:"object"==typeof(b=a)&&b.name&&b.url?{"@type":"Person",name:a.name,url:a.url}:void 0}var E="Rahul Rajkumar",F="Fast, composable, unstyled command menu for React",G="https://cmdk.paco.me";function H(a){var b=a.Component,c=a.pageProps;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(s(),{children:[(0,h.jsx)("link",{rel:"shortcut icon",href:"/favicon.png"}),(0,h.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,h.jsx)(y,{title:E,description:F,openGraph:{type:"website",url:G,title:E,description:F+".",images:[{url:"".concat(G,"/og.png"),alt:E},]}}),(0,h.jsx)(m,{disableTransitionOnChange:!0,attribute:"class",children:(0,h.jsx)(b,(0,g.Z)({},c))})]})}},4831:function(){},9008:function(a,c,b){a.exports=b(5443)},1799:function(c,a,b){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(e){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){d(e,a,c[a])})}return e}b.d(a,{Z:function(){return e}})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6840),b(387)}),_N_E=a.O()}])