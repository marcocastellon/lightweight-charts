"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9950],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4831:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"BarStyleOptions",title:"Interface: BarStyleOptions",sidebar_label:"BarStyleOptions",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"api/interfaces/BarStyleOptions",id:"api/interfaces/BarStyleOptions",isDocsHomePage:!1,title:"Interface: BarStyleOptions",description:"Represents style options for a bar series.",source:"@site/docs/api/interfaces/BarStyleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/BarStyleOptions",permalink:"/lightweight-charts/docs/api/interfaces/BarStyleOptions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BarStyleOptions",title:"Interface: BarStyleOptions",sidebar_label:"BarStyleOptions",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"BarPrices",permalink:"/lightweight-charts/docs/api/interfaces/BarPrices"},next:{title:"BarsInfo",permalink:"/lightweight-charts/docs/api/interfaces/BarsInfo"}},u=[{value:"Properties",id:"properties",children:[{value:"upColor",id:"upcolor",children:[],level:3},{value:"downColor",id:"downcolor",children:[],level:3},{value:"openVisible",id:"openvisible",children:[],level:3},{value:"thinBars",id:"thinbars",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents style options for a bar series."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"upcolor"},"upColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"upColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Color of rising bars."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"'#26a69a'")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"downcolor"},"downColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"downColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Color of falling bars."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"'#ef5350'")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"openvisible"},"openVisible"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"openVisible"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Show open lines on bars."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"thinbars"},"thinBars"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"thinBars"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Show bars as sticks."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"true")))}d.isMDXComponent=!0}}]);