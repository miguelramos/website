import{R as e,r as t,a}from"./vendor.e85bb68f.js";function n({list:t=[]}){return e.createElement("ul",{className:"ui-bar__container"},t&&t.map((({id:t,label:a,year:n})=>e.createElement("li",{key:t},e.createElement("span",{className:"ui-bar__years"},n)," ",e.createElement("span",{className:"ui-bar__label"},a)))))}function l({experiences:t}){return e.createElement("div",{className:"ui-bar"},e.createElement(n,{list:t}))}function r({children:t}){return e.createElement("div",{className:"ui-body"},t)}function i({contacts:t}){return e.createElement(e.Fragment,null,t&&t.map((({icon:t,id:a,link:n,title:l})=>e.createElement("a",{key:a,className:"ui-sidebar__link",href:n},e.createElement("img",{alt:l,className:"ui-icon",src:t})))))}function c({description:a,info:n,sentences:l,title:r}){const[i,c]=t.exports.useState("");return t.exports.useEffect((()=>{!function(e=[],t=(e=>{}),a=0,n=2e3){let l=!1,r="";const i=()=>{const c=a%e.length,s=e[c];r=l?s.substring(0,r.length-1):s.substring(0,r.length+1),t(r);let m=200-100*Math.random();l&&(m/=2),l||r!==s?l&&""===r&&(l=!1,a+=1,m=500):(m=n,l=!0),setTimeout((()=>{i()}),m)};i()}(l,(e=>c(e)))}),[l]),e.createElement("div",{className:"ui-hero"},e.createElement("div",{className:"ui-hero__container"},e.createElement("div",{className:"ui-hero__left"},e.createElement("p",{className:"ui-hero__writer"},e.createElement("span",{className:"ui-hero__code"},"<code>"),e.createElement("span",null,i),e.createElement("span",{className:"ui-hero__code"},"</code>"))),e.createElement("div",{className:"ui-hero__right"},e.createElement("h1",{className:"ui-hero__container-title"},r),e.createElement("p",{className:"ui-hero__container-info"},n),e.createElement("p",{className:"ui-hero__container-description"},a))))}function s({picture:t}){return e.createElement("div",{className:"ui-avatar__content"},e.createElement("img",{alt:"Profile",className:"ui-avatar",src:t}),e.createElement("span",{className:"ui-avatar__badge"}))}function m({description:t,info:a,time:n,title:l}){return e.createElement("div",{className:"ui-card"},e.createElement("header",{className:"ui-card__head"},e.createElement("div",{className:"ui-card__side"},e.createElement("h1",{className:"ui-card__title"},l),a&&e.createElement("p",{className:"ui-card__info"},a)),n&&e.createElement("span",{className:"ui-card__date"},n)),e.createElement("article",{className:"ui-card__description"},t))}function u({amount:t,deegres:a=180,fontSize:n=.875,height:l=50,width:r=50}){const i={"--ui-circular-background":"var(--ui-color-black-one)","--ui-circular-color":"var(--ui-color-warning)","--ui-circular-deegres":`${a}deg`,"--ui-circular-font-size":`${n}rem`,"--ui-circular-height":`${l}px`,"--ui-circular-width":`${r}px`};return e.createElement("div",{className:"ui-circular",style:i},e.createElement("div",{className:"ui-circle"},e.createElement("div",{className:"ui-circle__mask ui-circle__full"},e.createElement("div",{className:"ui-circle__fill"})),e.createElement("div",{className:"ui-circle__mask ui-circle__half"},e.createElement("div",{className:"ui-circle__fill"})),e.createElement("div",{className:"ui-circle__content"},e.createElement("span",null,t,"%"))))}function o({amount:t=0,height:a=10}){const n={"--ui-linear-amount":`${t}%`,"--ui-linear-height":`${a}px`};return e.createElement("div",{className:"ui-linear",style:n},e.createElement("div",{className:"ui-linear__progress"}))}function d({list:t=[]}){return e.createElement(e.Fragment,null,t&&t.map((({description:t,id:a,info:n,time:l,title:r})=>e.createElement(m,{key:a,description:t,info:n,time:l,title:r}))))}function E({resumes:t}){return e.createElement("div",{className:"ui-resume"},e.createElement(d,{list:t}))}function _({children:t,picture:a}){return e.createElement("div",{className:"ui-avatar__container"},e.createElement(s,{picture:a}),t)}function N({list:t=[]}){return e.createElement("ul",{className:"ui-sidebar__knowledge-list"},t&&t.map((({description:t,id:a})=>e.createElement("li",{key:a,className:"ui-sidebar__knowledge-item"},e.createElement("i",{className:"ui-check"})," ",e.createElement("span",null,t)))))}function g({list:t=[]}){return e.createElement("ul",{className:"ui-sidebar__lang-list"},t&&t.map((({amount:t,deegre:a,id:n,label:l})=>e.createElement("li",{key:n,className:"ui-sidebar__lang-item"},e.createElement(u,{amount:t,deegres:a}),e.createElement("p",null,l)))))}function p({list:t=[]}){return e.createElement("ul",{className:"ui-sidebar__person-list"},t&&t.map((({id:t,label:a,value:n})=>e.createElement("li",{key:t,className:"ui-sidebar__person-item"},e.createElement("p",null,a),e.createElement("p",null,n)))))}function h({list:t=[],height:a=4}){return e.createElement(e.Fragment,null,t&&t.map((({amount:t,id:n,label:l})=>e.createElement("div",{key:n,className:"ui-skill"},e.createElement("div",{className:"ui-skill__info"},e.createElement("p",null,l),e.createElement("p",null,t,"%")),e.createElement(o,{amount:t,height:a})))))}function f({children:t}){return e.createElement("div",{className:"ui-sidebar"},t)}function v({hasError:t=!1}){return e.createElement("div",{className:"ui-loading"},e.createElement("div",{className:"ui-ring"},e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null)),t&&e.createElement("p",{className:"ui-loading__error"},"Something went wrong :(!"))}function b(){const[a,n]=t.exports.useState({data:{},hasError:!1,isLoading:!0});return t.exports.useEffect((()=>{(async()=>{const e=await fetch("/data/content.json");await e.json().then((({data:e})=>n({data:e,hasError:!1,isLoading:!1}))).catch((()=>n({data:{},hasError:!0,isLoading:!0})))})()}),[]),e.createElement(e.Fragment,null,a.isLoading?e.createElement(v,{hasError:a.hasError}):e.createElement(e.Fragment,null,e.createElement(f,null,e.createElement(f.Avatar,{picture:a.data.personal.avatar},e.createElement(f.Avatar.Name,{name:a.data.personal.name}),e.createElement(f.Avatar.Title,{title:a.data.personal.title}),e.createElement(f.Avatar.Title,{title:a.data.personal.sentence})),e.createElement(f.Content,null,e.createElement(f.Person,{persons:a.data.person}),e.createElement(f.Language,{languages:a.data.languages.collection,title:a.data.languages.title}),e.createElement(f.Skill,{skills:a.data.skills.collection,title:a.data.skills.title}),e.createElement(f.Knowledge,{items:a.data.knowledge.collection,title:a.data.knowledge.title}),e.createElement("a",{className:"ui-sidebar__download",href:"/assets/data/cv-miguel-ramos.zip"},e.createElement("span",null,"Download CV")," ",e.createElement("img",{alt:"Donwload cv",className:"ui-icon",src:"/assets/icons/download.svg"}))),e.createElement(f.Footer,null,e.createElement(i,{contacts:a.data.contacts}))),e.createElement(r,null,e.createElement(r.Container,null,e.createElement(c,{description:a.data.hero.description,info:a.data.hero.info,sentences:a.data.hero.sentences,title:a.data.hero.title}),e.createElement(l,{experiences:a.data.experience}),e.createElement(E,{resumes:a.data.resume})))))}r.Container=function({children:t}){return e.createElement("div",{className:"ui-body__container"},t)},_.Name=function({name:t}){return e.createElement("h6",{className:"ui-avatar__name"},t)},_.Title=function({title:t}){return e.createElement("p",{className:"ui-avatar__title"},t)},f.Content=function({children:t}){return e.createElement("div",{className:"ui-sidebar__content"},t)},f.Avatar=_,f.Footer=function({children:t}){return e.createElement("div",{className:"ui-sidebar__footer"},t)},f.Language=function({languages:t,title:a}){return e.createElement("div",{className:"ui-sidebar__lang"},e.createElement("h6",{className:"ui-sidebar__lang-title"},a),e.createElement(g,{list:t}))},f.Person=function({persons:t}){return e.createElement("div",{className:"ui-sidebar__person"},e.createElement(p,{list:t}))},f.Skill=function({skills:t,title:a}){return e.createElement("div",{className:"ui-sidebar__skill"},e.createElement("h6",{className:"ui-sidebar__skill-title"},a),e.createElement(h,{list:t}))},f.Knowledge=function({items:t,title:a}){return e.createElement("div",{className:"ui-sidebar__knowledge"},e.createElement("h6",{className:"ui-sidebar__knowledge-title"},a),e.createElement(N,{list:t}))},a.render(e.createElement(e.StrictMode,null,e.createElement(b,null)),document.getElementById("root"));
