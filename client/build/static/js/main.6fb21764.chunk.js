(this["webpackJsonplush-fit"]=this["webpackJsonplush-fit"]||[]).push([[0],{117:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){},130:function(e,t,c){},131:function(e,t,c){},132:function(e,t,c){},133:function(e,t,c){},134:function(e,t,c){"use strict";c.r(t);var n,r=c(29),s=c.n(r),a=c(10),i=c(7),o=c(50),l=c(51),j=c(65),u=c(64),d=c(2),b=c.n(d),m=(c(74),c(1)),O=function(){return Object(m.jsx)("div",{className:"error__wrapper",children:Object(m.jsx)("img",{className:"error__img",src:"https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png",alt:"error"})})},h=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(l.a)(c,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(m.jsx)(O,{}):this.props.children}}]),c}(d.Component),f=c(8),p=c(26),x=c(11),_=c(4);!function(e){e.BOOTS_LOADED="BOOTS_LOADED",e.BOOTS_REQUESTED="BOOTS_REQUESTED",e.CHANGE_CART="CHANGE_CART",e.CHECK_SIZE="CHECK_SIZE",e.DELETE_FROM_CART="DELETE_FROM_CART",e.BROWSE_PICS="BROWSE_PICS",e.EMPTY_CART="EMPTY_CART"}(n||(n={}));var v,g={boots:[],loading:!0,error:!1,cart:[]};v=function(e,t){return e.findIndex((function(e){return e.idSize===t}))};var N,S=function(){var e,t,c,r,s,a,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,o=arguments.length>1?arguments[1]:void 0,l=i.cart,j=i.boots;switch(o.type){case n.BOOTS_LOADED:return Object(_.a)(Object(_.a)({},i),{},{boots:o.payload,loading:!1});case n.BOOTS_REQUESTED:return Object(_.a)(Object(_.a)({},i),{},{loading:!0});case n.CHANGE_CART:if(t=o.id,c=o.idSize,e=v(l,c),0===c)return i;var u=Boolean(l.find((function(e){return e.idSize===c}))),d=(s=j[t-1]).sizes.find((function(e){return e.id===c}));return d?(void 0===d.maxRest&&(d.maxRest=d.rest),d.rest=d.rest-o.number,o.cartButton&&d.rest<1?(d.rest=1,i):d.rest<0||0===o.actualRest?(d.rest=0,i):d.rest>d.maxRest?(d.rest=d.maxRest,i):(r=[].concat(Object(x.a)(j.slice(0,t-1)),[s],Object(x.a)(j.slice(t))),0===(a=o.cartButton?l.find((function(e){return e.idSize===c})):JSON.parse(JSON.stringify(j[t-1]))).actualSize?i:u?(l.forEach((function(e){e.idSize===c&&(e.amount&&(a.amount=e.amount+o.number),(void 0===a.amount||a.amount<1)&&(a.amount=1))})),Object(_.a)(Object(_.a)({},i),{},{boots:r,cart:[].concat(Object(x.a)(l.slice(0,e)),[a],Object(x.a)(l.slice(e+1)))})):(a.amount=1,Object(_.a)(Object(_.a)({},i),{},{boots:r,cart:[].concat(Object(x.a)(l),[a])})))):i;case n.DELETE_FROM_CART:c=o.idSize,e=v(l,c);var b=(s=l.find((function(e){var t=!1;return e.sizes.forEach((function(e){if(e.id===c)return t=!0})),t}))).sizes.find((function(e){return e.id===c}));return b?(b.rest=b.maxRest,t=c>999?+(""+c).slice(0,2):+(""+c).slice(0,1),Object(_.a)(Object(_.a)({},i),{},{cart:[].concat(Object(x.a)(l.slice(0,e)),Object(x.a)(l.slice(e+1))),boots:[].concat(Object(x.a)(j.slice(0,t-1)),[s],Object(x.a)(j.slice(t)))})):i;case n.CHECK_SIZE:var m=o.itemId;return(a=j[m-1]).actualSize=o.size,a.idSize=+(""+m+o.size),Object(_.a)(Object(_.a)({},i),{},{boots:[].concat(Object(x.a)(j.slice(0,m-1)),[a],Object(x.a)(j.slice(m)))});case n.EMPTY_CART:return Object(_.a)(Object(_.a)({},i),{},{cart:[]});default:return i}},y={picsSlider:!1,picId:0},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BROWSE_PICS":return{picsSlider:!e.picsSlider,picId:t.id};default:return e}};!function(e){e.FIRST_TIME="FIRST_TIME",e.USER_ID="USER_ID",e.LOGIN_REQUESTED="LOGIN_REQUESTED",e.ORDERS="ORDERS",e.PLACE_ORDER="PLACE_ORDER"}(N||(N={}));var C={userId:"",newbie:void 0,loading:!1,orders:[],placeOrder:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.LOGIN_REQUESTED:return Object(_.a)(Object(_.a)({},e),{},{loading:!0});case N.FIRST_TIME:return Object(_.a)(Object(_.a)({},e),{},{newbie:t.payload});case N.USER_ID:return Object(_.a)(Object(_.a)({},e),{},{userId:t.payload,loading:!1});case N.ORDERS:return Object(_.a)(Object(_.a)({},e),{},{orders:t.payload,loading:!1});case N.PLACE_ORDER:return Object(_.a)(Object(_.a)({},e),{},{placeOrder:t.payload});default:return e}},T=i.c,R=Object(p.combineReducers)({load:S,pics:E,register:w});c(76);var k=c(22),z=c(35),I=c(53),D=c(54),A=c(55),F=[{title:"Home",url:"/",cName:"nav__list-item-links"},{title:"Sneakers",url:"/sneakers",cName:"nav__list-item-links"},{title:"Contacts",url:"/contacts",cName:"nav__list-item-links"}],P=c(5),L=c(52);c(93);var B=function(){var e=Object(d.useState)(!1),t=Object(P.a)(e,2),c=t[0],n=t[1];function r(){n(!c)}return Object(m.jsx)(L.bubble,{onOpen:r,onClose:r,isOpen:c,children:Object(m.jsx)("ul",{className:"burger-menu",onClick:r,children:F.map((function(e,t){return Object(m.jsx)("li",{className:"burger-menu__item",children:Object(m.jsx)(a.b,{onClick:r,className:"burger-menu__item-links",to:e.url,children:e.title})},t)}))})})},U=function(e){return{type:N.FIRST_TIME,payload:e}},M=function(e){return{type:N.USER_ID,payload:e}},q=function(e){return{type:N.ORDERS,payload:e}},H=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:N.PLACE_ORDER,payload:e}};var X,G=function(){var e=T((function(e){return e.register})).userId,t=Object(i.b)(),c=T((function(e){return e.load})).cart,n=0===c.length?Object(m.jsx)("span",{className:"nav__cart-price",children:"0$"}):Object(m.jsxs)("span",{className:"nav__cart-price",children:[c.reduce((function(e,t){return e+t.price*(t.amount||0)}),0),"$"]});return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(B,{}),Object(m.jsx)("div",{style:{height:"3.5rem"}}),Object(m.jsxs)("nav",{className:"nav",children:[Object(m.jsx)(a.b,{to:"/",className:"nav__wrapper",children:Object(m.jsxs)("div",{className:"nav__logo",onClick:function(){return window.scrollTo(0,0)},children:[Object(m.jsx)(k.c,{}),Object(m.jsx)("span",{className:"nav__logo-title",children:"Crunchy Boots"})]})}),Object(m.jsx)("ul",{className:"nav__list",children:F.map((function(e,t){return Object(m.jsx)("li",{className:"nav__list-item",onClick:function(){return window.scrollTo(0,0)},children:Object(m.jsx)(a.b,{className:e.cName,to:e.url,children:e.title})},t)}))}),Object(m.jsxs)("div",{className:"nav__block",children:[Object(m.jsx)(a.b,{to:"cart",className:"nav__wrapper",children:Object(m.jsxs)("div",{onClick:function(){return window.scrollTo(0,0)},children:[Object(m.jsx)(z.b,{}),Object(m.jsx)("p",{className:"nav__title",children:"Cart:"}),n]})}),e?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(a.b,{to:"profile",className:"nav__wrapper",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(D.a,{}),Object(m.jsx)("p",{className:"nav__title",children:"Cabinet"})]})}),Object(m.jsx)(a.b,{to:"/",className:"nav__wrapper",children:Object(m.jsxs)("div",{onClick:function(){return t(M(""))},children:[Object(m.jsx)(A.a,{style:{fontSize:"1.3rem"}}),Object(m.jsx)("p",{className:"nav__title",children:"Exit"})]})})]}):Object(m.jsx)(a.b,{to:"register",className:"nav__wrapper",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(I.a,{}),Object(m.jsx)("p",{className:"nav__title",children:"Sign In/Up"})]})})]})]})]})},Q=c(36),W=c.n(Q),J=c(56),Y=c(57),$=c.n(Y),K=c(40),Z=function(){var e=Object(K.css)(X||(X=Object(J.a)(["\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100vh;\n        "])));return Object(m.jsx)($.a,{css:e,size:20,color:"#F25287"})},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return{type:n.CHANGE_CART,id:e,idSize:t,actualRest:c,cartButton:r,number:s}},ee=function(e,t){return{type:n.CHECK_SIZE,size:e,itemId:t}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{type:n.BROWSE_PICS,id:e}};c(47);var ce=function(e){var t=e.chooseSize,c=e.item,n=e.buttonClass,r=c.size,s=c.rest;return Object(m.jsx)("button",{disabled:s<=0,className:n,onClick:function(){return t(s)},children:r})},ne=c(9);var re=function(e,t,c){return function(n){var r=n.addSize,s=n.item,a=s.newCollection,i=s.topseller,o=s.sizes,l=Object(d.useState)(y()),j=Object(P.a)(l,2),u=j[0],b=j[1],O=Object(d.useState)(0),h=Object(P.a)(O,2),f=h[0],p=h[1],v=Object(d.useState)(!1),g=Object(P.a)(v,2),N=g[0],S=g[1];function y(){for(var e=[],c=0;c<o.length;c++)e.push(t);return e}Object(d.useEffect)((function(){return function(){return S(!1)}}),[]);var E=function(e,t,c){return t===c?Object(m.jsx)("div",{className:"".concat(e," ").concat(e,"_").concat(c.toLowerCase()),children:t}):null},C=E(c,a,"NEW"),w=E(c,i,"TOP");return Object(m.jsx)(e,Object(_.a)(Object(_.a)({},n),{},{sizesWithClass:u,actualRest:f,checked:N,chooseSize:function(e,c){var n=y(),s="".concat(t," ").concat(t,"_checked");b([].concat(Object(x.a)(n.slice(0,e)),[s],Object(x.a)(n.slice(e+1)))),p(c),S(!0),r(o[e].size)},changeActualRest:function(){return f>0&&p(f-1),f},collectionLabel:C,topLabel:w}))}};var se=function(e){return function(t){var c=t.addToCart,n=t.checked,r=t.actualRest,s=Object(d.useState)(!1),a=Object(P.a)(s,2),i=a[0],o=a[1],l=Object(d.useState)("Please choose any size"),j=Object(P.a)(l,2),u=j[0],b=j[1],O=Object(d.useState)(!1),h=Object(P.a)(O,2),f=h[0],p=h[1];Object(d.useEffect)((function(){return p(n),function(){return p(!1)}}),[n]);var x=function(e,t){b(e),o(!0),setTimeout((function(){return o(!1)}),t)};return Object(m.jsx)(e,Object(_.a)(Object(_.a)({},t),{},{onCart:function(){if(f&&0===r)return x("Sorry, but there's nothing left. Choose another size.",2600);f?(x("Added to cart",1500),c()):x("Please choose any size",2e3)},text:u,pop:i}))}};c(48);var ae=se((function(e){var t=e.onCart,c=e.text,n=e.pop?"slider-card__pop-over":"slider-card__pop-over slider-card__pop-over_hidden";return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{className:"slider-card__btn",onClick:t,children:"Add To Cart"}),Object(m.jsx)("div",{className:n,children:c})]})}));var ie=re((function(e){var t=e.item,c=e.addToCart,n=e.actualRest,r=e.checked,s=e.sizesWithClass,a=e.chooseSize,i=e.changeActualRest,o=e.collectionLabel,l=e.topLabel,j=e.browseImgs,u=t.title,d=t.price,b=t.url,O=t.sizes,h=t.id,f=t.gender;return Object(m.jsx)(ne.a,{cascade:!0,direction:"up",triggerOnce:!0,children:Object(m.jsxs)("div",{className:"slider-card",children:[o,l,Object(m.jsx)("div",{className:"slider-card__img-wrapper",children:Object(m.jsx)("img",{className:"slider-card__img",src:b[0],alt:u,onClick:j})}),Object(m.jsxs)("div",{className:"slider-card__column",children:[Object(m.jsxs)("div",{className:"slider-card__text",children:[Object(m.jsx)("li",{children:u}),Object(m.jsx)("li",{children:f}),Object(m.jsxs)("li",{children:["Price: ",d,"$"]})]}),Object(m.jsx)("div",{className:"card__sizes",children:O.map((function(e,t){return Object(m.jsx)(ce,{buttonClass:s[t],item:e,chooseSize:function(e){return a(t,e)}},t)}))}),Object(m.jsx)(ae,{className:"slider-card__btn",addToCart:function(){return c(i())},actualRest:n,checked:r})]})]},h)})}),"card__size","slider-card__label");c(117);var oe=function(e){var t=e.item,c=t.id,n=t.url,r=t.title,s=e.picsSlider,a=e.browsePics,i=Object(d.useCallback)((function(e){"Escape"!==e.key&&"click"!==e.type||a()}),[a]);Object(d.useEffect)((function(){s?(document.addEventListener("keydown",i),document.querySelector("body").style.overflowY="hidden"):(document.removeEventListener("keydown",i),document.querySelector("body").style.overflowY="unset")}),[s,i]);var o=s?"":"browse-pics_hidden";return Object(m.jsxs)("div",{className:o,children:[Object(m.jsxs)("div",{className:"browse-pics",children:[Object(m.jsx)("span",{className:"browse-pics__close-btn",onClick:i,children:"\xd7"}),Object(m.jsx)(W.a,{autoplay:!0,autoplaySpeed:2e3,children:n.map((function(e,t){return Object(m.jsx)("img",{className:"browse-pics__img",src:e,alt:"".concat(r," img").concat(t)},"".concat(c).concat(t))}))})]}),Object(m.jsx)("div",{className:"browse-pics__modal",onClick:i})]})};c(118),c(119),c(120);var le=function(){var e=Object(i.b)(),t=T((function(e){return e})),c=t.load,n=c.boots,r=c.loading,s=t.pics,a=s.picsSlider,o=s.picId;return r?Object(m.jsx)(Z,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(oe,{item:n[o],browsePics:function(){return e(te)},picsSlider:a}),Object(m.jsx)("div",{className:"slider-wrapper",children:Object(m.jsx)(W.a,Object(_.a)(Object(_.a)({},{dots:!0,infinite:!0,draggable:!0,responsive:[{breakpoint:1100,settings:{slidesToShow:2,slidesToScroll:1,dots:!1}},{breakpoint:790,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}],speed:500,slidesToShow:3,slidesToScroll:2}),{},{className:"slick-list",children:n.map((function(t){return Object(m.jsx)(ie,{item:t,browseImgs:function(){return e(te(t.id-1))},addToCart:function(c){return e(V(t.id,t.idSize,c))},addSize:function(c){return e(ee(c,t.id))}},t.id)}))}))})]})};c(121);var je=se((function(e){var t=e.onCart,c=e.pop,n=e.text,r=c?"item-btn__pop-over":"item-btn__pop-over item-btn__pop-over_hidden";return Object(m.jsxs)("div",{className:"item-btn-wrapper",children:[Object(m.jsx)(ne.a,{direction:"up",style:{width:"90%",zIndex:9},triggerOnce:!0,children:Object(m.jsx)("button",{className:"item-btn",onClick:t,children:"Add To Cart"})}),Object(m.jsx)("div",{className:r,children:n})]})})),ue=re((function(e){var t=e.item,c=e.addToCart,n=e.actualRest,r=e.checked,s=e.sizesWithClass,a=e.chooseSize,i=e.changeActualRest,o=e.collectionLabel,l=e.topLabel,j=e.browseImgs,u=t.title,d=t.price,b=t.url,O=t.category,h=t.gender,f=t.sizes;return Object(m.jsx)(ne.a,{direction:"up",triggerOnce:!0,children:Object(m.jsxs)("div",{className:"item",children:[o,l,Object(m.jsxs)("div",{onClick:j,className:"item__img-wrapper",children:[Object(m.jsx)("img",{className:"item__img item__img_hide",src:b[0],alt:u}),Object(m.jsx)("img",{className:"item__img item__img_bg",src:b[3],alt:u})]}),Object(m.jsxs)("div",{className:"item__columns",children:[Object(m.jsxs)("div",{className:"item__text",children:[Object(m.jsx)("li",{children:u}),Object(m.jsxs)("li",{children:["Category: ",O]}),Object(m.jsxs)("li",{children:["Gender: ",h]}),Object(m.jsxs)("li",{children:["Price: ",d,"$"]})]}),Object(m.jsx)("div",{className:"item__sizes",children:f.map((function(e,t){return Object(m.jsx)(ce,{buttonClass:s[t],item:e,chooseSize:function(e){return a(t,e)}},t)}))})]}),Object(m.jsx)(je,{addToCart:function(){return c(i())},checked:r,actualRest:n})]})})}),"item__size","item__label"),de=(c(122),function(e){var t=e.title,c=e.onToggle,n=e.clazz;return Object(m.jsx)("button",{className:n,onClick:c,children:t})}),be=(c(123),function(e){var t=e.onFilter,c=e.gender,n=e.type,r={width:"100%",display:"flex",justifyContent:"center"};return Object(m.jsx)("div",{className:"filter-bar__margin",children:Object(m.jsx)("section",{className:"filter-bar__wrapper",children:Object(m.jsxs)(ne.a,{cascade:!0,direction:"up",triggerOnce:!0,damping:.3,children:[Object(m.jsx)("div",{className:"filter-bar__block",children:Object(m.jsx)(ne.a,{cascade:!0,direction:"up",triggerOnce:!0,style:r,damping:.3,children:["male","female"].map((function(e){var n=e===c?"filter-btn filter-btn_checked":"filter-btn";return Object(m.jsx)(de,{clazz:n,title:e,onToggle:function(){return t(e,"gender")}},"FB-".concat(e))}))})}),Object(m.jsx)("div",{className:"filter-bar__block",children:Object(m.jsx)(ne.a,{cascade:!0,direction:"up",triggerOnce:!0,style:r,damping:.2,children:["originals","sport","lifestyle","boost"].map((function(e){var c=e===n?"filter-btn filter-btn_checked":"filter-btn";return Object(m.jsx)(de,{clazz:c,title:e,onToggle:function(){return t(e,"type")}},"FB-".concat(e))}))})})]})})})}),me=(c(124),function(){var e=Object(d.useState)("all"),t=Object(P.a)(e,2),c=t[0],n=t[1],r=Object(d.useState)("all"),s=Object(P.a)(r,2),a=s[0],o=s[1],l=Object(i.b)(),j=T((function(e){return e})),u=j.load,b=u.boots,O=u.loading,h=j.pics,f=h.picId,p=h.picsSlider,x=function(e,t){var r,s;"gender"===t?(r=n,s=c):(r=o,s=a),r(e===s?"all":e)};return O?Object(m.jsx)(Z,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(oe,{item:b[f],browsePics:function(){return l(te())},picsSlider:p}),Object(m.jsx)(be,{gender:c,type:a,onFilter:function(e,t){return x(e,t)}}),Object(m.jsx)("main",{className:"items-list",children:b.map((function(e){return(c===e.gender.toLowerCase()||"all"===c)&&(a===e.category.toLowerCase()||a===e.boost||"all"===a)?Object(m.jsx)(ue,{item:e,browseImgs:function(){return l(te(e.id-1))},addToCart:function(t){l(V(e.id,e.idSize,t))},addSize:function(t){return l(ee(t,e.id))}},e.id):null}))})]})}),Oe=(c(125),c(13)),he=c(58);var fe=function(){return Object(m.jsxs)("footer",{children:[Object(m.jsx)("div",{className:"footer",children:Object(m.jsxs)(ne.a,{cascade:!0,direction:"up",triggerOnce:!0,damping:.1,children:[Object(m.jsx)("ul",{className:"footer__contacts",children:Object(m.jsxs)(ne.a,{cascade:!0,direction:"up",triggerOnce:!0,damping:.1,children:[Object(m.jsx)("li",{className:"footer__list-item",children:"123456, London, Queen St.18"}),Object(m.jsx)("li",{className:"footer__list-item",children:"daily from 10:00 to 22:00"}),Object(m.jsx)("li",{className:"footer__list-item",children:"8-800-555-55-55"}),Object(m.jsx)("li",{className:"footer__list-item",children:"info@crunchyboots.com"})]})}),Object(m.jsx)("div",{className:"icons",children:Object(m.jsxs)(ne.a,{cascade:!0,direction:"up",triggerOnce:!0,damping:.15,children:[Object(m.jsxs)("a",{className:"icons__item",href:"https://ru-ru.facebook.com/",children:[Object(m.jsx)(Oe.e,{}),Object(m.jsx)("span",{children:"facebook"})]}),Object(m.jsxs)("a",{className:"icons__item",href:"https://twitter.com/",children:[Object(m.jsx)(Oe.g,{}),Object(m.jsx)("span",{children:"twitter"})]}),Object(m.jsxs)("a",{className:"icons__item",href:"https://www.instagram.com/",children:[Object(m.jsx)(he.a,{}),Object(m.jsx)("span",{children:"instagram"})]})]})}),Object(m.jsx)("div",{className:"icons",children:Object(m.jsxs)(ne.a,{cascade:!0,direction:"up",triggerOnce:!0,damping:.23,children:[Object(m.jsxs)("div",{className:"icons__item",children:[Object(m.jsx)(Oe.d,{}),Object(m.jsx)("span",{children:"visa"})]}),Object(m.jsxs)("div",{className:"icons__item",children:[Object(m.jsx)(Oe.b,{}),Object(m.jsx)("span",{children:"mastercard"})]}),Object(m.jsxs)("div",{className:"icons__item",children:[Object(m.jsx)(k.a,{}),Object(m.jsx)("span",{children:"am.express"})]})]})}),Object(m.jsx)("div",{className:"icons",children:Object(m.jsxs)(ne.a,{cascade:!0,direction:"up",triggerOnce:!0,damping:.3,children:[Object(m.jsxs)("div",{className:"icons__item",children:[Object(m.jsx)(Oe.a,{}),Object(m.jsx)("span",{children:"amazon"})]}),Object(m.jsxs)("div",{className:"icons__item",children:[Object(m.jsx)(Oe.c,{}),Object(m.jsx)("span",{children:"paypal"})]}),Object(m.jsxs)("div",{className:"icons__item",children:[Object(m.jsx)(k.b,{}),Object(m.jsx)("span",{children:"contactless"})]})]})})]})}),Object(m.jsx)("div",{className:"copyright",children:Object(m.jsxs)(ne.a,{cascade:!0,direction:"up",triggerOnce:!0,damping:.2,children:[Object(m.jsx)(Oe.f,{className:"copyright__logo"}),Object(m.jsx)("span",{children:"2021, CRUNCHY BOOTS"})]})})]})};c(126);var pe=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(le,{}),Object(m.jsx)("div",{className:"img-forum-cut__wrapper img-forum-cut_margin",children:Object(m.jsx)(ne.a,{direction:"up",triggerOnce:!0,children:Object(m.jsx)("img",{className:"img-forum-cut",src:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ruRU/Images/plp-fw-21-women-2880x720_tcm224-724640.jpg",alt:"forum-female"})})}),Object(m.jsx)(me,{}),Object(m.jsx)(fe,{})]})},xe=c(18),_e=c.n(xe),ve=c(25),ge=c(21),Ne=(c(49),c(32),function(e){var t=e.onSended,c=e.sended,n=e.submitForm,r=e.isSubmitted,s=Object(i.b)(),a=Object(d.useState)(!1),o=Object(P.a)(a,2),l=o[0],j=o[1],u=Object(d.useState)({email:"",password:""}),b=Object(P.a)(u,2),O=b[0],h=b[1],f=function(e){var t=e.target,c=t.name,n=t.value;h(Object(_.a)(Object(_.a)({},O),{},Object(ge.a)({},c,n)))},p=function(){var e=Object(ve.a)(_e.a.mark((function e(t){return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(O)}).then((function(e){if(!e.ok)throw j(!0),new Error("Could not fetch user, status ".concat(e.status));return e.json()})).then((function(e){return n(),s(M(e))})).catch((function(e){console.log(e),s(M(""))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"form-content-right",hidden:c&&r,children:Object(m.jsxs)("form",{onSubmit:p,className:"form",noValidate:!0,children:[Object(m.jsx)("h1",{children:"Please enter your login data."}),Object(m.jsxs)("div",{className:"form-inputs",children:[Object(m.jsx)("label",{className:"form-label",children:"Email"}),Object(m.jsx)("input",{className:"form-input",type:"email",name:"email",placeholder:"Enter your email",value:O.email,onChange:f,required:!0}),l&&Object(m.jsx)("p",{children:"Incorrect email or password."})]}),Object(m.jsxs)("div",{className:"form-inputs",children:[Object(m.jsx)("label",{className:"form-label",children:"Password"}),Object(m.jsx)("input",{className:"form-input",type:"password",name:"password",placeholder:"Enter your password",value:O.password,onChange:f,required:!0}),l&&Object(m.jsx)("p",{children:"Incorrect email or password."})]}),Object(m.jsx)("button",{className:"form-input-btn",type:"submit",onClick:t,children:"Sign In"})]})})});function Se(e){var t={};return e.username.trim()||(t.username="Username is required"),e.phoneNumber?12!==e.phoneNumber.length&&(t.phoneNumber="Phone number is invalid"):t.phoneNumber="Phone number is required",e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email is required",t}var ye=c(63),Ee=function(e,t){var c=Object(i.b)(),n=Object(d.useState)({username:"",email:"",phoneNumber:""}),r=Object(P.a)(n,2),s=r[0],a=r[1],o=Object(d.useState)({}),l=Object(P.a)(o,2),j=l[0],u=l[1],b=Object(d.useState)(!1),m=Object(P.a)(b,2),O=m[0],h=m[1],f=Object(d.useState)(!1),p=Object(P.a)(f,2),x=p[0],v=p[1],g=function(){var t=Object(ve.a)(_e.a.mark((function t(n){return _e.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/profile",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({user:n})}).then((function(e){if(!e.ok)throw v(!0),new Error("Could not create user, status ".concat(e.status));return e.json()})).then((function(t){c(M(t)),e()})).catch((function(e){console.log(e),c(M(""))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.useEffect)((function(){if(v(!1),0===Object.keys(j).length&&O){var e=Math.random().toString().slice(2,6),t={username:s.username,email:s.email,phoneNumber:s.phoneNumber,password:e};g(t)}}),[j]),{handleChange:function(e){var t=e.target,c=t.name,n=t.value;a(Object(_.a)(Object(_.a)({},s),{},Object(ge.a)({},c,n)))},handleNumberChange:function(e){a(Object(_.a)(Object(_.a)({},s),{},{phoneNumber:e}))},handleSubmit:function(e){e.preventDefault(),u(t(s)),h(!0)},values:s,errors:j,emailExist:x}},Ce=function(e){var t=e.isSubmitted,c=e.submitForm,n=e.onSended,r=e.sended,s=Ee(c,Se),a=s.handleChange,i=s.handleSubmit,o=s.handleNumberChange,l=s.values,j=s.errors,u=s.emailExist;return Object(m.jsx)("div",{className:"form-content-right",hidden:r&&t,children:Object(m.jsxs)("form",{method:"POST",action:"/profile",onSubmit:i,className:"form",noValidate:!0,children:[Object(m.jsx)("h1",{children:"Please fill out the registration form."}),Object(m.jsxs)("div",{className:"form-inputs",children:[Object(m.jsx)("label",{className:"form-label",children:"Name"}),Object(m.jsx)("input",{className:"form-input",type:"text",name:"username",placeholder:"Enter your name",value:l.username,onChange:a,required:!0}),j.username&&Object(m.jsx)("p",{children:j.username})]}),Object(m.jsxs)("div",{className:"form-inputs",children:[Object(m.jsx)("label",{className:"form-label",children:"Phone number"}),Object(m.jsx)(ye.a,{name:"phoneNumber",className:"form-input",placeholder:"+7  XXX  XXX  XX  XX",defaultCountry:"RU",value:l.phoneNumber,onChange:o,maxLength:17,required:!0}),j.phoneNumber&&Object(m.jsx)("p",{children:j.phoneNumber})]}),Object(m.jsxs)("div",{className:"form-inputs",children:[Object(m.jsx)("label",{className:"form-label",children:"Email"}),Object(m.jsx)("input",{className:"form-input",type:"email",name:"email",placeholder:"Enter your email",value:l.email,onChange:a,required:!0}),j.email&&Object(m.jsx)("p",{children:j.email}),u&&Object(m.jsx)("p",{children:"Account with this data is already exist. Try Sign In."})]}),Object(m.jsx)("button",{className:"form-input-btn",type:"submit",onClick:n,children:"Sign Up"}),Object(m.jsxs)("span",{className:"form-input-login",children:["Don't want fill out the form? ",Object(m.jsx)("br",{})," \u0421all us: 8-800-555-55-55"]})]})})},we=function(){var e=Object(d.useState)(!1),t=Object(P.a)(e,2),c=t[0],n=t[1],r=T((function(e){return e.register})).placeOrder;return Object(d.useEffect)((function(){var e=setTimeout((function(){return n(!0)}),2e3);return function(){return clearTimeout(e)}}),[]),c?r?Object(m.jsx)(f.a,{to:"/cart"}):Object(m.jsx)(f.a,{to:"/profile"}):Object(m.jsxs)("div",{className:"form-content-success",children:[Object(m.jsxs)("h2",{className:"form-success",children:["Completed successfully.",r&&" Now you can place your order."]}),Object(m.jsx)("img",{className:"form-img-2",src:"img/img-3.svg",alt:"success"})]})},Te=function(e){e.closeForm;var t=e.newbie,c=Object(d.useState)(!1),n=Object(P.a)(c,2),r=n[0],s=n[1],a=Object(d.useState)(!1),i=Object(P.a)(a,2),o=i[0],l=i[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsx)("div",{className:"form-content-left",children:Object(m.jsx)("img",{className:"form-img",src:"img/img-2.svg",alt:"spaceship"})}),r&&o&&Object(m.jsx)(we,{}),t?Object(m.jsx)(Ce,{sended:r,onSended:function(){return s(!0)},submitForm:function(){return l(!0)},isSubmitted:o}):Object(m.jsx)(Ne,{sended:r,onSended:function(){return s(!0)},submitForm:function(){return l(!0)},isSubmitted:o})]})})};c(128);var Re=function(){var e=T((function(e){return e.register})).newbie,t=Object(i.b)();if(void 0===e)return Object(m.jsxs)("div",{className:"register__wrapper",children:[Object(m.jsxs)("div",{className:"register register__first-choise",children:[Object(m.jsx)("h1",{className:"register register__question",children:"Are you first time here?"}),Object(m.jsx)("button",{className:"register__btn",onClick:function(){return t(U(!0))},children:"Sign Up"})]}),Object(m.jsxs)("div",{className:"register register__first-choise",children:[Object(m.jsx)("h1",{className:"register register__question",children:"Do you already have an account?"}),Object(m.jsx)("button",{className:"register__btn",onClick:function(){return t(U(!1))},children:"Sign In"})]})]});var c=e?"Do you already have an account?":"Are you first time here?",n=e?"Sign In":"Sign Up";return Object(m.jsxs)("div",{className:"register",children:[Object(m.jsx)(Te,{newbie:e}),Object(m.jsxs)("div",{className:"register__container",children:[Object(m.jsx)("h1",{className:"register register__question",children:c}),Object(m.jsx)("button",{className:"register__btn",onClick:function(){return t(U(!e))},children:n})]})]})};c(129);var ke=function(e){var t=e.item,c=e.onDelete,n=t.title,r=t.price,s=t.url,a=t.amount,i=t.actualSize,o=a>1?"".concat(r,"*").concat(a," items"):"1 item",l=a>1?"".concat(r*a):r;return Object(m.jsxs)("div",{className:c?"cart-item":"cart-item cart-item__order",children:[Object(m.jsx)("img",{className:"cart-item__img",src:s[0],alt:n}),Object(m.jsx)("div",{className:"cart-item__title",children:n}),Object(m.jsx)("div",{className:"cart-item__pieces",children:o}),Object(m.jsxs)("div",{className:"cart-item__size",children:["Size: ",i]}),Object(m.jsxs)("div",{className:c?"cart-item__price":"cart-item__price cart-item__price__order",children:[l,"$"]}),c&&Object(m.jsx)("div",{className:"cart-item__actions",children:Object(m.jsx)(z.a,{className:"cart-item__delete",onClick:c})})]})};var ze=function(e){var t=e.cart;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"cart-wrapper",children:t.map((function(e){return Object(m.jsx)(ke,{item:e,onDelete:!1},e.idSize)}))})})};c(130);var Ie=function(){var e=Object(d.useState)({}),t=Object(P.a)(e,2),c=t[0],n=t[1],r=Object(d.useState)(!0),s=Object(P.a)(r,2),a=s[0],o=s[1],l=T((function(e){return e.register})),j=l.userId,u=l.orders,b=l.loading,O=Object(i.b)();if(Object(d.useEffect)((function(){j&&(O({type:N.LOGIN_REQUESTED}),fetch("/user?_id=".concat(j)).then((function(e){if(!e.ok)throw new Error("Could not fetch user,\n                            status ".concat(e.status));return e.json()})).then((function(e){return n.apply(void 0,Object(x.a)(e))})),fetch("/orders?userId=".concat(j)).then((function(e){if(!e.ok)throw new Error("Could not fetch user,\n                            status ".concat(e.status));return e.json()})).then((function(e){return O(q(e))})))}),[j,O]),Object(d.useEffect)((function(){var e=setTimeout((function(){return o(!1)}),800);return function(){return clearTimeout(e)}}),[]),b)return Object(m.jsx)(Z,{});if(c.email){var h=c.username,f=c.email,p=c.password,_=function(e){var t=u[e],c=t.orderNumber,n=t.date,r=c>10?"00".concat(c):"000".concat(c),s=new Date(+n),a=s.getMonth()+1;return a=a<10?"0".concat(a):a,"Order \u2116".concat(r," from ").concat(s.getDate(),"-").concat(a,"-").concat(s.getFullYear())};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"cart-wrapper profile",children:[Object(m.jsxs)("h1",{children:["Hello, ",h,"."]}),Object(m.jsx)("hr",{}),Object(m.jsx)("h4",{children:"login: "}),Object(m.jsx)("h3",{children:f})," ",Object(m.jsx)("hr",{}),Object(m.jsx)("h4",{children:"password:"}),Object(m.jsxs)("h3",{children:[" ",p]})," ",Object(m.jsx)("hr",{})]}),u.length>0?u.sort((function(e,t){return t.orderNumber-e.orderNumber})).map((function(e,t){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h3",{className:"cart-wrapper profile",children:[_(t),Object(m.jsx)("hr",{})]}),Object(m.jsx)(ze,{cart:e.cart})]},e.date)})):null]})}return Object(m.jsx)("div",{className:"profile__incorrect",children:Object(m.jsx)("h1",{children:!a&&"Incorrect login data."})})},De=c.p+"static/media/empty-cart.cf7eeb77.png";c(131);var Ae=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"cart-full cart-empty",children:[Object(m.jsx)("img",{src:De,alt:"cart-empty"}),Object(m.jsxs)("div",{className:"cart-empty__text",children:[Object(m.jsx)("h3",{children:"It seems, you haven't choosen anything."}),Object(m.jsx)(a.b,{to:"/",className:"nav__wrapper",children:Object(m.jsx)("div",{className:"cart-empty__not-worry",children:"don't worry!"})}),Object(m.jsx)("h3",{children:" Just go back and pick one."})]})]})})};c(132);var Fe=function(){var e=Object(d.useState)(!1),t=Object(P.a)(e,2),c=t[0],r=t[1],s=Object(i.b)(),a=T((function(e){return e})),o=a.load.cart,l=a.register,j=l.userId,u=l.placeOrder,b=function(){var e=Object(ve.a)(_e.a.mark((function e(){return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r(!0),!j){e.next=7;break}return s(H(!1)),e.next=5,fetch("/order",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({userId:j,cart:o})}).then((function(e){return e.json()})).then((function(e){s(q(e)),s({type:n.EMPTY_CART})})).catch((function(e){return console.log(e)}));case 5:e.next=8;break;case 7:s(H());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 0===o.length?Object(m.jsx)(Ae,{}):c?j?Object(m.jsx)(f.a,{to:"/profile"}):Object(m.jsx)(f.a,{to:"/register"}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"cart-wrapper",children:[Object(m.jsx)("p",{children:Object(m.jsx)("b",{children:j&&u&&"Registration was completed successfully.\n                            Now you can place your order."})}),o.map((function(e){return Object(m.jsx)(ke,{item:e,onDelete:function(){return s((t=e.idSize,{type:n.DELETE_FROM_CART,idSize:t}));var t}},e.idSize)})),Object(m.jsx)("button",{className:"cart-button",onClick:b,children:"Place order"})]})})},Pe=c(59),Le=c.n(Pe),Be=c(60);var Ue=function(){return Object(m.jsx)(Le.a,{smooth:!0,top:720,style:{background:"transparent",boxShadow:"unset"},component:Object(m.jsx)(Be.a,{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",fontSize:"2.5rem",color:"#F9F3F3"}})})};c(133);var Me=function(){var e=Object(i.b)(),t=T((function(e){return e})).load.boots;return b.a.useEffect((function(){var c;0===t.length&&e((c="/boots",function(e){e({type:n.BOOTS_REQUESTED}),fetch(c).then((function(e){if(!e.ok)throw new Error("Could not fetch boots,\n                                status ".concat(e.status));return e.json()})).then((function(t){return e({type:n.BOOTS_LOADED,payload:t.sort((function(e,t){return e.id-t.id}))})}))}))}),[]),Object(m.jsxs)(a.a,{children:[Object(m.jsx)(G,{}),Object(m.jsx)(Ue,{}),Object(m.jsxs)(f.d,{children:[Object(m.jsx)(f.b,{path:"/",exact:!0,component:pe}),Object(m.jsx)(f.b,{path:"/sneakers",component:me}),Object(m.jsx)(f.b,{path:"/contacts",component:fe}),Object(m.jsx)(f.b,{path:"/cart",component:Fe}),Object(m.jsx)(f.b,{path:"/register",component:Re}),Object(m.jsx)(f.b,{path:"/profile",component:Ie})]})]})},qe=c(61),He=c(62),Xe=Object(p.createStore)(R,Object(qe.composeWithDevTools)(Object(p.applyMiddleware)(He.a)));s.a.render(Object(m.jsx)(i.a,{store:Xe,children:Object(m.jsx)(h,{children:Object(m.jsx)(a.a,{children:Object(m.jsx)(Me,{})})})}),document.getElementById("root"))},32:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},74:function(e,t,c){},76:function(e,t,c){},93:function(e,t,c){}},[[134,1,2]]]);
//# sourceMappingURL=main.6fb21764.chunk.js.map