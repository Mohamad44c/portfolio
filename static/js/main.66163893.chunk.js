(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),n=c(10),a=c.n(n),r=c(3),l=(c(19),c(44)),o=c(45),d=c(46),m=c(0);function j(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(m.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("a",{href:"intro",className:"logo",children:"MC."}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(l.a,{className:"icon"}),Object(m.jsx)("span",{children:"+961 78-830254"})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(o.a,{className:"icon"}),Object(m.jsx)("span",{children:"chebli17c@gmail.com"})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(d.a,{className:"icon"}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{rel:"noreferrer",href:"https://github.com/Mohamad44c",target:"_blank",className:"githubLink",children:"Github"})})]})]}),Object(m.jsx)("div",{className:"right",children:Object(m.jsxs)("div",{className:"hamburger",onClick:function(){return c(!t)},children:[Object(m.jsx)("span",{className:"line1"}),Object(m.jsx)("span",{className:"line2"}),Object(m.jsx)("span",{className:"line3"})]})})]})})}c(25);var u=c(47),b=c(12);function h(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(b.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Web Development","Mobile Development","Computer Networks","Computer Security"]})}),[]),Object(m.jsxs)("div",{className:"intro",id:"intro",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsx)("div",{className:"imgContainer",children:Object(m.jsx)("img",{src:"assets/me.jpg",alt:"me"})})}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h2",{children:"Hi there, I'm"}),Object(m.jsx)("h1",{children:"Mohamad Chebli"}),Object(m.jsxs)("h3",{children:["A CS student learning ",Object(m.jsx)("span",{ref:e})]})]}),Object(m.jsx)("a",{href:"#portfolio",children:Object(m.jsx)(u.a,{className:"icon",fontSize:"large"})})]})]})}c(26);function p(e){var t=e.id,c=e.title,i=e.active,s=e.setSelected;return Object(m.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return s(t)},children:c})}c(27);var O=[{id:1,title:"E-Commerce Website",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.AC8JfGbRnYplip_BOgdEmwHaE8%26pid%3DApi&f=1"},{id:2,title:"Parallel Programming",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.AtB0LYpt6k1O-eDjjGmj8AHaE8%26pid%3DApi&f=1"},{id:3,title:"E-Commerce Web Design",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.74sAOfAc0hiJx3BszIqM9gHaE8%26pid%3DApi&f=1"}],g=[{id:1,title:"Full-Stack Web E-Commerce",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.AC8JfGbRnYplip_BOgdEmwHaE8%26pid%3DApi&f=1"},{id:2,title:"Portfolio Design",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OOe7ppn6rJVcdBKeQxrc7gHaE6%26pid%3DApi&f=1"}],f=[{id:1,title:"Parallel Programming",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.AtB0LYpt6k1O-eDjjGmj8AHaE8%26pid%3DApi&f=1"},{id:2,title:"Networks",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ueiB2YTqsqALtWOEO0apyQHaHa%26pid%3DApi&f=1"}];function x(){var e=Object(i.useState)("web"),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)([]),a=Object(r.a)(n,2),l=a[0],o=a[1];return Object(i.useEffect)((function(){switch(c){default:o(O);break;case"web":o(g);break;case"programming":o(f)}}),[c]),Object(m.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(m.jsx)("h1",{children:"Portfolio"}),Object(m.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"web",title:"Web App"},{id:"programming",title:"Programming"}].map((function(e){return Object(m.jsx)(p,{title:e.title,active:c===e.id,setSelected:s,id:e.id})}))}),Object(m.jsx)("div",{className:"container",children:l.map((function(e){return Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("img",{src:e.img,alt:""}),Object(m.jsx)("h3",{children:e.title})]})}))})]})}c(28);function v(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],n=[{id:"1",icon:"./assets/mobile.png",title:"Web Design",desc:"I believe I have good knowledge of about web development and E-commerce web development",img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"},{id:"2",icon:"./assets/globe.png",title:"Programming",desc:"",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.gaNma7dJf0v2pnwYnkujeAHaEK%26pid%3DApi&f=1"},{id:"3",icon:"./assets/writing.png",title:"Googling",desc:"Experting in finding and learning from google and online resources",img:"https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg"}],a=function(e){s("left"===e?c>0?c-1:2:c<n.length-1?c+1:0)};return Object(m.jsxs)("div",{className:"works",id:"works",children:[Object(m.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*c,"vw)")},children:n.map((function(e){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsxs)("div",{className:"leftContainer",children:[Object(m.jsx)("div",{className:"imgContainer",children:Object(m.jsx)("img",{src:e.icon,alt:""})}),Object(m.jsx)("h2",{children:e.title}),Object(m.jsx)("p",{children:e.desc}),Object(m.jsx)("span",{children:"Check my Github account!"})]})}),Object(m.jsx)("div",{className:"right",children:Object(m.jsx)("img",{src:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",alt:""})})]})})}))}),Object(m.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return a("left")}}),Object(m.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return a()}})]})}c(29);function k(){return Object(m.jsxs)("div",{className:"Experience",id:"Experience",children:[Object(m.jsx)("h1",{children:"Experience"}),Object(m.jsx)("div",{className:"container",children:[{id:1,name:"PC Garage",title:"Technical Support",img:"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",desc:"I worked with PC Garage for 1 year learning sales, computer hardware refurbishing and data entry."},{id:2,name:"Ecomz",title:"Merchant Success Executive",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fglobal-uploads.webflow.com%2F5f6e16afd274a43996712135%2F5f76f896ade25a224b2ba082_Group%25209570.png&f=1&nofb=1",desc:"I have been working with Ecomz for the past 9 months. My main tasks include front-end design, technical support, and data entry. They have taught me the concepts of E-Commerce from A-Z",featured:!0},{id:3,name:"Web Development Bootcamp",title:"Certificate",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0dcROikq9uu-FGqDyKdSpQHaHa%26pid%3DApi&f=1",desc:"Over the summer of 2021 I completed a full-stack web development course on Udemy."}].map((function(e){return Object(m.jsxs)("div",{className:e.featured?"card featured":"card",children:[Object(m.jsxs)("div",{className:"top",children:[Object(m.jsx)("img",{src:"",className:"left",alt:""}),Object(m.jsx)("img",{className:"user",src:e.img,alt:""}),Object(m.jsx)("img",{className:"right",src:e.icon,alt:""})]}),Object(m.jsx)("div",{className:"center",children:e.desc}),Object(m.jsxs)("div",{className:"bottom",children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("h4",{children:e.title})]})]})}))})]})}c(30);function N(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(m.jsx)("div",{className:"menu "+(t&&"active"),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:function(){return c(!1)},children:Object(m.jsx)("a",{href:"#intro",children:"Home"})}),Object(m.jsx)("li",{onClick:function(){return c(!1)},children:Object(m.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(m.jsx)("li",{onClick:function(){return c(!1)},children:Object(m.jsx)("a",{href:"#works",children:"Works"})}),Object(m.jsx)("li",{onClick:function(){return c(!1)},children:Object(m.jsx)("a",{href:"#testimonials",children:"Testimonials"})})]})})}c(31);var F=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(j,{menuOpen:c,setMenuOpen:s}),Object(m.jsx)(N,{menuOpen:c,setMenuOpen:s}),Object(m.jsxs)("div",{className:"sections",children:[Object(m.jsx)(h,{}),Object(m.jsx)(x,{}),Object(m.jsx)(v,{}),Object(m.jsx)(k,{})]})]})};a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.66163893.chunk.js.map