(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1ibO":function(t,e,r){"use strict";r.r(e);var s=r("ofXK"),i=r("3Pt+"),c=r("tyNb"),n=r("Tlfu"),l=r("fXoL"),o=r("jhN1"),u=r("veTR");const a=["drawerContent"],p=[{displayName:"\u793a\u4f8b",source:"sample"}];let d=(()=>{class t{constructor(t,e){this.title=t,this.activatedRoute=e,this.items=p,this.currentUrl="/skilltree",this.urlPrefix="skilltrees"}ngOnInit(){this.activatedRoute.paramMap.subscribe(t=>{const e=t.get("skilltree"),r=this.items.find(t=>t.source===e);this.title.setTitle(`\u5f00\u6e90 ${r.displayName} \u6280\u80fd\u56fe\u8c31 - \u5f00\u6e90\u77e5\u8bc6\u5e73\u53f0`),this.currentSource=e})}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(o.d),l.Ob(c.a))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-skill-tree"]],viewQuery:function(t,e){var r;1&t&&l.Mc(a,!0),2&t&&l.tc(r=l.dc())&&(e.drawerContent=r.first)},decls:1,vars:4,consts:[[3,"items","currentUrl","urlPrefix","source"]],template:function(t,e){1&t&&l.Pb(0,"ledge-multiple-docs",0),2&t&&l.lc("items",e.items)("currentUrl",e.currentUrl)("urlPrefix",e.urlPrefix)("source",e.currentSource)},directives:[u.b],styles:[""]}),t})();var f=r("PCNd");r.d(e,"SkillTreeModule",(function(){return m}));const h=[{path:":skilltree",component:d},{path:"",pathMatch:"full",redirectTo:"sample"}];let m=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(e){return new(e||t)},imports:[[s.c,i.d,f.a,n.b,c.h.forChild(h)]]}),t})()}}]);