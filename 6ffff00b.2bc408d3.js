/*! For license information please see 6ffff00b.2bc408d3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{358:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(6),c=(a(766),a(765)),b={id:"_runtime_graphbackcrudservice_.graphbackcrudservice",title:"GraphbackCRUDService",sidebar_label:"GraphbackCRUDService"},l={unversionedId:"api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice",id:"api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice",isDocsHomePage:!1,title:"GraphbackCRUDService",description:"Graphback layered architecture component that can be called",source:"@site/../docs/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice.md",permalink:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice.md",version:"next",sidebar_label:"GraphbackCRUDService",sidebar:"docs",previous:{title:"runtime/createCRUDService",permalink:"/docs/next/api/graphback-core/modules/_runtime_createcrudservice_"},next:{title:"CRUDService",permalink:"/docs/next/api/graphback-core/classes/_runtime_crudservice_.crudservice"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchLoadData",id:"batchloaddata",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"subscribeToCreate",id:"subscribetocreate",children:[]},{value:"subscribeToDelete",id:"subscribetodelete",children:[]},{value:"subscribeToUpdate",id:"subscribetoupdate",children:[]},{value:"update",id:"update",children:[]}]}],i={rightToc:p};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Graphback layered architecture component that can be called\nfrom the resolver layer in GraphQL and Middlerware layer in RESTfull approach."),Object(c.b)("p",null,"Graphback implements server side procesing using following flow:"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"GraphQL Resolvers")," ->  ",Object(c.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," ","[1-*]"," -> ",Object(c.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider")),Object(c.b)("p",null,"Services can be composable (each service can reference multiple layers of other services).\nFor data abstraction Graphback ",Object(c.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider")," can be being used."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"see"))," GraphbackDataProvider"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("p",null,"\u25aa ",Object(c.b)("strong",{parentName:"p"},"Type")),Object(c.b)("p",null,"\u25aa ",Object(c.b)("strong",{parentName:"p"},"GraphbackContext")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GraphbackCRUDService"))),Object(c.b)("h2",{id:"implemented-by"},"Implemented by"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_runtime_crudservice_.crudservice"}),"CRUDService")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice"}),"GraphbackProxyService"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#batchloaddata"}),"batchLoadData")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#create"}),"create")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#delete"}),"delete")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#findby"}),"findBy")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#findone"}),"findOne")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#subscribetocreate"}),"subscribeToCreate")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#subscribetodelete"}),"subscribeToDelete")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#subscribetoupdate"}),"subscribeToUpdate")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#update"}),"update"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"batchloaddata"},"batchLoadData"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"batchLoadData"),"(",Object(c.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"id"),": string | number, ",Object(c.b)("inlineCode",{parentName:"p"},"filter"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": any): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/c0056b4b/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L102"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:102"))),Object(c.b)("p",null,"Speciallized function that can utilize batching the data basing on\nDataLoader library"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"relationField")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"name of the field that will be used to match ids")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"id")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," number"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id of the object we want to load")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resolver context object that will be used to apply new loader")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"create"},"create"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"create"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/c0056b4b/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L32"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:32"))),Object(c.b)("p",null,"Implementation for object creation"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input data")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context object passed from graphql or rest layer")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"delete"},"delete"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"delete"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/c0056b4b/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L48"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:48"))),Object(c.b)("p",null,"Implementation for object deletes"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data used for consistency reasons")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context object passed from graphql or rest layer")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"findby"},"findBy"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"findBy"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),"\u2039Type\u203a, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext, ",Object(c.b)("inlineCode",{parentName:"p"},"page?"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.graphbackpage"}),"GraphbackPage"),", ",Object(c.b)("inlineCode",{parentName:"p"},"orderBy?"),": any): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.resultlist"}),"ResultList"),"\u2039Type\u203a\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/c0056b4b/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L66"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:66"))),Object(c.b)("p",null,"Implementation for reading objects with filtering capabilities"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),"\u2039Type\u203a"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter by specific type")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context object passed from graphql or rest layer")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"page?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.graphbackpage"}),"GraphbackPage")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pagination options")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"orderBy?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"optionally sort the results by a column")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.resultlist"}),"ResultList"),"\u2039Type\u203a\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"findone"},"findOne"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"findOne"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter"),": Type, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/c0056b4b/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L56"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:56"))),Object(c.b)("p",null,"Fetch a single record by its unique attribute(s)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"the unique attributes to fetch the record with")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context object from GraphQL/REST layer")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"subscribetocreate"},"subscribeToCreate"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"subscribeToCreate"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter?"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext): ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/c0056b4b/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L74"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:74"))),Object(c.b)("p",null,"Subscription for all creation events"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter used in subscription")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"additional context")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"subscribetodelete"},"subscribeToDelete"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"subscribeToDelete"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter?"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext): ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/c0056b4b/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L90"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:90"))),Object(c.b)("p",null,"Subscription for all deletion events"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter used in subscription")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"additional context")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"subscribetoupdate"},"subscribeToUpdate"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"subscribeToUpdate"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter?"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext): ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/c0056b4b/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L82"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:82"))),Object(c.b)("p",null,"Subscription for all update events"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter used in subscription")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"additional context")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"update"},"update"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"update"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/c0056b4b/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L40"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:40"))),Object(c.b)("p",null,"Implementation for object updates"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input data including id")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context object passed from graphql or rest layer")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")))}o.isMDXComponent=!0},765:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),o=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=o(a),j=r,s=u["".concat(b,".").concat(j)]||u[j]||O[j]||c;return a?n.a.createElement(s,l(l({ref:t},i),{},{components:a})):n.a.createElement(s,l({ref:t},i))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=j;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var i=2;i<c;i++)b[i]=a[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},766:function(e,t,a){"use strict";e.exports=a(767)},767:function(e,t,a){"use strict";var r=a(768),n="function"==typeof Symbol&&Symbol.for,c=n?Symbol.for("react.element"):60103,b=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,p=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,O=n?Symbol.for("react.forward_ref"):60112,j=n?Symbol.for("react.suspense"):60113,s=n?Symbol.for("react.memo"):60115,d=n?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function N(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||f}function y(){}function k(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||f}N.prototype.isReactComponent={},N.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},N.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=N.prototype;var v=k.prototype=new y;v.constructor=k,r(v,N.prototype),v.isPureReactComponent=!0;var C={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,a){var r,n={},b=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(b=""+t.key),t)_.call(t,r)&&!x.hasOwnProperty(r)&&(n[r]=t[r]);var p=arguments.length-2;if(1===p)n.children=a;else if(1<p){for(var i=Array(p),o=0;o<p;o++)i[o]=arguments[o+2];n.children=i}if(e&&e.defaultProps)for(r in p=e.defaultProps)void 0===n[r]&&(n[r]=p[r]);return{$$typeof:c,type:e,key:b,ref:l,props:n,_owner:C.current}}function D(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var T=/\/+/g,R=[];function w(e,t,a,r){if(R.length){var n=R.pop();return n.result=e,n.keyPrefix=t,n.func=a,n.context=r,n.count=0,n}return{result:e,keyPrefix:t,func:a,context:r,count:0}}function P(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function G(e,t,a){return null==e?0:function e(t,a,r,n){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var p=!1;if(null===t)p=!0;else switch(l){case"string":case"number":p=!0;break;case"object":switch(t.$$typeof){case c:case b:p=!0}}if(p)return r(n,t,""===a?"."+U(t,0):a),1;if(p=0,a=""===a?".":a+":",Array.isArray(t))for(var i=0;i<t.length;i++){var o=a+U(l=t[i],i);p+=e(l,o,r,n)}else if(null===t||"object"!=typeof t?o=null:o="function"==typeof(o=m&&t[m]||t["@@iterator"])?o:null,"function"==typeof o)for(t=o.call(t),i=0;!(l=t.next()).done;)p+=e(l=l.value,o=a+U(l,i++),r,n);else if("object"===l)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return p}(e,"",t,a)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function E(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,a){var r=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,a,(function(e){return e})):null!=e&&(D(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+a)),r.push(e))}function I(e,t,a,r,n){var c="";null!=a&&(c=(""+a).replace(T,"$&/")+"/"),G(e,L,t=w(t,c,r,n)),P(t)}var $={current:null};function q(){var e=$.current;if(null===e)throw Error(h(321));return e}var A={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,a){if(null==e)return e;var r=[];return I(e,r,null,t,a),r},forEach:function(e,t,a){if(null==e)return e;G(e,E,t=w(null,null,t,a)),P(t)},count:function(e){return G(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!D(e))throw Error(h(143));return e}},t.Component=N,t.Fragment=l,t.Profiler=i,t.PureComponent=k,t.StrictMode=p,t.Suspense=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,a){if(null==e)throw Error(h(267,e));var n=r({},e.props),b=e.key,l=e.ref,p=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,p=C.current),void 0!==t.key&&(b=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(o in t)_.call(t,o)&&!x.hasOwnProperty(o)&&(n[o]=void 0===t[o]&&void 0!==i?i[o]:t[o])}var o=arguments.length-2;if(1===o)n.children=a;else if(1<o){i=Array(o);for(var u=0;u<o;u++)i[u]=arguments[u+2];n.children=i}return{$$typeof:c,type:e.type,key:b,ref:l,props:n,_owner:p}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:O,render:e}},t.isValidElement=D,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return q().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,a){return q().useReducer(e,t,a)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},768:function(e,t,a){"use strict";var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function b(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var a,l,p=b(e),i=1;i<arguments.length;i++){for(var o in a=Object(arguments[i]))n.call(a,o)&&(p[o]=a[o]);if(r){l=r(a);for(var u=0;u<l.length;u++)c.call(a,l[u])&&(p[l[u]]=a[l[u]])}}return p}}}]);