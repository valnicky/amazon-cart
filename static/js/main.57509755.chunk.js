(this["webpackJsonpamazon-cart"]=this["webpackJsonpamazon-cart"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var c=i(1),n=i.n(c),a=i(5),s=i.n(a),r=(i(13),i(7)),l=(i(14),i(15),i(0));var o=function(t){var e=t.title;return Object(l.jsx)("div",{className:"App-header",children:Object(l.jsxs)("h1",{children:[" ",e," "]})})},j=i(8);i(17),i(18);var u=function(t){var e=t.index,i=t.item,c=t.changeItemQuantity,n=t.deleteItem;return Object(l.jsxs)("div",{className:"CartItem",children:[Object(l.jsxs)("div",{className:"CartItem-image",children:[" ",Object(l.jsx)("img",{src:"/amazon-cart/items/"+i.image,alt:""})]}),Object(l.jsxs)("div",{className:"CartItem-info",children:[Object(l.jsxs)("div",{className:"info-title",children:[" ",Object(l.jsxs)("h2",{children:[" ",i.title," "]})]}),Object(l.jsxs)("div",{className:"info-stock",children:[" ",i.stock]}),Object(l.jsxs)("div",{className:"item-actions",children:[Object(l.jsx)("div",{className:"item-quantity",children:Object(l.jsxs)("select",{onChange:function(t){return c(t,e)},value:i.quantity,children:[Object(l.jsx)("option",{value:"1",children:" Qty: 1 "}),Object(l.jsx)("option",{value:"2",children:" Qty: 2 "}),Object(l.jsx)("option",{value:"3",children:"Qty: 3 "}),Object(l.jsx)("option",{value:"4",children:" Qty: 4 "}),Object(l.jsx)("option",{value:"5",children:"Qty: 5 "}),Object(l.jsx)("option",{value:"6",children:" Qty: 6 "})]})}),Object(l.jsx)("div",{className:"item-action-divider",children:"|"}),Object(l.jsx)("div",{className:"item-delete",onClick:n.bind(this,e),children:"Delete"})]})]}),Object(l.jsxs)("div",{className:"CartItem-price",children:[" $",i.price," "]})]})};var d=function(t){var e=t.items,i=t.setCartItems,c=function(t,c){var n=Object(j.a)(e);e[c].quantity=t.target.value,i(n)},n=function(t){var c=e.filter((function(e,i){return i!==t}));i(c)};return Object(l.jsxs)("div",{className:"CartItems",children:[Object(l.jsx)("h1",{children:" Shopping Cart "}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"CartItems-items",children:[" ",e.map((function(t,e){return Object(l.jsx)(u,{index:e,item:t,changeItemQuantity:c,deleteItem:n},e)}))," "]})]})},m=(i(19),i(6));var h=function(t){var e=t.items;return Object(l.jsxs)("div",{className:"CartTotal",children:[Object(l.jsxs)("h3",{children:["Subtotal(",function(){var t=0;return e.forEach((function(e){t+=parseInt(e.quantity)})),t}()," items):",Object(l.jsx)("span",{className:"CartTotal-price",children:Object(l.jsx)(m.a,{value:function(){var t=0;return e.forEach((function(e){t+=e.price*e.quantity})),t}(),displayType:"text",thousandSeparator:!0,prefix:"$",decimalScale:2})})]}),Object(l.jsx)("button",{type:"",children:"Proceed to checkout "})," "]})},b=[{title:"Apple iPad Pro",stock:"In Stock",image:"item-1.jpg",price:"769.00",quantity:1},{title:"Beats Flex Wireless Earphones",stock:"In Stock",image:"item-2.jpg",price:"49.88",quantity:2},{title:"De'Longhi La Specialista Espresso Machine with Knock Box",stock:"In Stock",image:"item-3.jpg",price:"745.05",quantity:1},{title:"Oculus Quest 2 \u2014 Advanced All-In-One Virtual Reality Headset",stock:"In stock on January 2, 2020",image:"item-4.jpg",price:"399.00",quantity:1},{title:"All-new Echo Dot (4th Gen) | Glacier White",stock:"In stock on December 25, 2020",image:"item-5.jpg",price:"39.99",quantity:3}];var p=function(){var t=Object(c.useState)(b),e=Object(r.a)(t,2),i=e[0],n=e[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{title:"Amazon Cart"}),Object(l.jsxs)("div",{className:"App-main",children:[Object(l.jsx)(d,{items:i,setCartItems:n})," ",Object(l.jsx)(h,{items:i})," "]})," "]})},x=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,21)).then((function(e){var i=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,s=e.getTTFB;i(t),c(t),n(t),a(t),s(t)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),x()}],[[20,1,2]]]);
//# sourceMappingURL=main.57509755.chunk.js.map