"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9435],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3066:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"BarData",title:"Interface: BarData",sidebar_label:"BarData",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"api/interfaces/BarData",id:"api/interfaces/BarData",isDocsHomePage:!1,title:"Interface: BarData",description:"Represents a bar with a Time and open, high, low, and close prices.",source:"@site/docs/api/interfaces/BarData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/BarData",permalink:"/lightweight-charts/docs/api/interfaces/BarData",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BarData",title:"Interface: BarData",sidebar_label:"BarData",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"AxisPressedMouseMoveOptions",permalink:"/lightweight-charts/docs/api/interfaces/AxisPressedMouseMoveOptions"},next:{title:"BarPrices",permalink:"/lightweight-charts/docs/api/interfaces/BarPrices"}},s=[{value:"Properties",id:"properties",children:[{value:"time",id:"time",children:[],level:3},{value:"open",id:"open",children:[],level:3},{value:"high",id:"high",children:[],level:3},{value:"low",id:"low",children:[],level:3},{value:"close",id:"close",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents a bar with a ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/TickMarkType#time"},"Time")," and open, high, low, and close prices."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"time"},"time"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"time"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#time"},(0,i.kt)("inlineCode",{parentName:"a"},"Time"))),(0,i.kt)("p",null,"The bar time."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"open"},"open"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"open"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The open price."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"high"},"high"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"high"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The high price."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"low"},"low"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"low"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The low price."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"close"},"close"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"close"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The close price."))}d.isMDXComponent=!0}}]);