"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3571],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1060:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=n(7462),i=n(3366),l=(n(7294),n(3905)),a=["components"],o={id:"LineStyle",title:"Enumeration: LineStyle",sidebar_label:"LineStyle",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"api/enums/LineStyle",id:"api/enums/LineStyle",isDocsHomePage:!1,title:"Enumeration: LineStyle",description:"Represents the possible line styles.",source:"@site/docs/api/enums/LineStyle.md",sourceDirName:"api/enums",slug:"/api/enums/LineStyle",permalink:"/lightweight-charts/docs/api/enums/LineStyle",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"LineStyle",title:"Enumeration: LineStyle",sidebar_label:"LineStyle",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"LastPriceAnimationMode",permalink:"/lightweight-charts/docs/api/enums/LastPriceAnimationMode"},next:{title:"LineType",permalink:"/lightweight-charts/docs/api/enums/LineType"}},u=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"Solid",id:"solid",children:[],level:3},{value:"Dotted",id:"dotted",children:[],level:3},{value:"Dashed",id:"dashed",children:[],level:3},{value:"LargeDashed",id:"largedashed",children:[],level:3},{value:"SparseDotted",id:"sparsedotted",children:[],level:3}],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Represents the possible line styles."),(0,l.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,l.kt)("h3",{id:"solid"},"Solid"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"Solid")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"0")),(0,l.kt)("p",null,"A solid line."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"dotted"},"Dotted"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"Dotted")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"1")),(0,l.kt)("p",null,"A dotted line."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"dashed"},"Dashed"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"Dashed")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"2")),(0,l.kt)("p",null,"A dashed line."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"largedashed"},"LargeDashed"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"LargeDashed")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"3")),(0,l.kt)("p",null,"A dashed line with bigger dashes."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sparsedotted"},"SparseDotted"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"SparseDotted")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"4")),(0,l.kt)("p",null,"A dottled line with more space between dots."))}c.isMDXComponent=!0}}]);