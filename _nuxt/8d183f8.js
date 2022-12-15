(window.webpackJsonp=window.webpackJsonp||[]).push([[13,6,7],{303:function(t,e,r){"use strict";r.r(e);var n={components:{Button:r(132).default},data:function(){return{}}},l=r(9),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full md:w-1/2"},[r("div",{staticClass:"\n      leading-loose\n      max-w-xl\n      m-4\n      p-7\n      bg-secondary-light\n      dark:bg-secondary-dark\n      rounded-xl\n      shadow-xl\n      text-left\n    "},[r("p",{staticClass:"\n        font-general-medium\n        text-primary-dark\n        dark:text-primary-light\n        text-2xl\n        mb-8\n      "},[t._v("\n      Formulaire de contact\n    ")]),t._v(" "),r("form",{staticClass:"font-general-regular space-y-7",on:{submit:function(t){t.preventDefault}}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"mt-6"},[r("Button",{staticClass:"\n            px-4\n            py-2.5\n            text-white\n            tracking-wider\n            bg-indigo-500\n            hover:bg-indigo-600\n            focus:ring-1 focus:ring-indigo-900\n            rounded-lg\n            duration-500\n          ",attrs:{title:"Envoyer un message",type:"submit","aria-label":"Send Message"}})],1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"name"}},[t._v("Votre nom")]),t._v(" "),r("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border border-gray-300\n            dark:border-primary-dark\n            border-opacity-50\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n          ",attrs:{id:"name",name:"name",type:"text",required:"",placeholder:"Votre nom","aria-label":"Name"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-6"},[r("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border border-gray-300\n            dark:border-primary-dark\n            border-opacity-50\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n          ",attrs:{id:"email",name:"email",type:"text",required:"",placeholder:"Votre email","aria-label":"Email"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-6"},[r("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"subject"}},[t._v("Sujet")]),t._v(" "),r("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border border-gray-300\n            dark:border-primary-dark\n            border-opacity-50\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n          ",attrs:{id:"subject",name:"subject",type:"text",required:"",placeholder:"Votre sujet","aria-label":"Subject"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-6"},[r("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),r("textarea",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border border-gray-300\n            dark:border-primary-dark\n            border-opacity-50\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n          ",attrs:{id:"message",name:"message",cols:"14",rows:"6","aria-label":"Message"}})])}],!1,null,"37df5892",null);e.default=component.exports},304:function(t,e,r){"use strict";r.r(e);var n={props:["contacts"],data:function(){return{}}},l=r(9),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full md:w-1/2"},[r("div",{staticClass:"text-left max-w-xl px-6"},[r("h2",{staticClass:"\n        font-general-medium\n        text-2xl text-primary-dark\n        dark:text-primary-light\n        mt-8\n        mb-8\n      "},[t._v("\n      Details de contact\n    ")]),t._v(" "),r("ul",{staticClass:"font-general-regular"},t._l(t.contacts,(function(e){return r("li",{key:e.id,staticClass:"flex"},[r("i",{staticClass:"w-5 text-gray-500 dark:text-gray-400 mr-4",attrs:{"data-feather":e.icon}}),t._v(" "),r("a",{staticClass:"text-lg mb-4 text-ternary-dark dark:text-ternary-light",class:"mail"===e.icon||"phone"===e.icon?"hover:underline cursor-pointer":"",attrs:{href:"#","aria-label":"Website and Phone"}},[t._v("\n          "+t._s(e.name)+"\n        ")])])})),0)])])}),[],!1,null,"679a8ef8",null);e.default=component.exports},308:function(t,e,r){"use strict";r.r(e);r(20),r(36);var n=r(31),l=r.n(n),o={scrollToTop:!0,head:function(){return{title:"Yatachi code -Contact ",meta:[{hid:"description",name:"description",content:"Vous avez un projet et vous souhaitez vous faire accompagner par quelqu'un ?  Vous pouvez désormais contacter Yatachi code"}]}},data:function(){return{contacts:[{id:1,name:"MAROC , casablanca sidi maarouf",icon:"map-pin"},{id:2,name:"poupoinaka03@domain.com",icon:"mail"},{id:3,name:"+212 600 670 388",icon:"phone"}]}},mounted:function(){l.a.replace()},updated:function(){l.a.replace()}},d=r(9),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"\n    container\n    mx-auto\n    flex flex-col-reverse\n    md:flex-row md:py-10 md:mt-20\n  "},[r("ContactForm"),t._v(" "),r("ContactDetails",{attrs:{contacts:t.contacts}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContactForm:r(303).default,ContactDetails:r(304).default})}}]);