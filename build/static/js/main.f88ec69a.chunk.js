(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,n,t){},42:function(e,n,t){e.exports=t(61)},61:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(18),c=t.n(o),i=(t(47),t(9)),l=t(10),u=t(12),p=t(11),m=t(13),s=(t(21),t(3)),f=t(7),d=t.n(f),b=t(15),x=t(4),v=t(6),g=t(5);function h(){var e=Object(s.a)(["\n    color: #7387a9;\n    font-weight: 600;\n    padding: 8px 0px 0px 15px;\n    font-size: 15px;\n  "]);return h=function(){return e},e}function E(){var e=Object(s.a)(["\n    width: 400px;\n    margin: 85px auto 0px auto;\n    padding: 25px 30px;\n    background-color: #feffff;\n    border: 1px solid #ebf2fa;\n    border-radius: 3px;\n    box-shadow: 0px 2px 10px 0px rgba(233, 233, 233, 0.5);\n"]);return E=function(){return e},e}function j(){var e=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n"]);return j=function(){return e},e}var O=x.a.div(j()),w=x.a.div(E()),y=x.a.div(h()),S=function(e){var n=e.children;return r.a.createElement(O,null,r.a.createElement(w,null,r.a.createElement(g.b,{sm:13},r.a.createElement(g.n,null,r.a.createElement(g.n,{left:!0},r.a.createElement(g.n,{object:!0,src:"image/logo.png"})),r.a.createElement(g.n,{body:!0},r.a.createElement(y,null,"AJP Sentiment Analysis")))),n))},k=t(26);function z(){var e=Object(s.a)(["\n  font-size: 11px;\n"]);return z=function(){return e},e}var C=Object(x.a)(g.h)(z()),A=function(e){var n=e.input,t=e.meta,a=e.label,o=Object(k.a)(e,["input","meta","label"]),c=t.touched&&t.error;return r.a.createElement(g.i,null,r.a.createElement(g.m,{for:n.field},a),r.a.createElement(g.j,Object.assign({},n,o,{invalid:!!c})),c&&r.a.createElement(C,{invalid:c?"true":"false"},t.error))},N=function(e){return new Promise(function(n){return setTimeout(n,e)})},P=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduce(function(n,t){return n||t(e)},void 0)}},T=function(e){return e?void 0:"Field is required"},R=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0},B=function(e){return e?"Wrong password":void 0},I=t(63);function L(){var e=Object(s.a)(["\n  font-size: 11px;\n"]);return L=function(){return e},e}var $=Object(x.a)(g.h)(L()),G=function(e){var n=e.input,t=e.meta,a=e.label,o=Object(k.a)(e,["input","meta","label"]),c=t.touched&&t.error;return r.a.createElement(g.i,{className:"custom-control custom-checkbox"},r.a.createElement(g.j,Object.assign({type:"checkbox"},n,o,{className:"custom-control-input",id:n.name,invalid:!!c})),r.a.createElement(g.m,{className:"custom-control-label",for:n.name},a),c&&r.a.createElement($,{invalid:c?"true":"false"},t.error))};function q(){var e=Object(s.a)(["\n    font-weight: 700;\n    color:  #4ec2e2;\n    font-size: 14px;\n    &:hover {\n        color:  #4ec2e2;\n        text-decoration: none;\n    }\n"]);return q=function(){return e},e}function J(){var e=Object(s.a)(["\n    display: flex;  \n    justify-content: space-between;\n    align-items: center;\n"]);return J=function(){return e},e}function Z(){var e=Object(s.a)(["\n    color: $light;\n    margin: 30px 0px;\n    font-size: 19px;\n    font-weight: 300;\n"]);return Z=function(){return e},e}var F=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).onSubmit=function(){var e=Object(b.a)(d.a.mark(function e(n){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(2e3);case 2:console.log(n);case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(S,null,r.a.createElement(W,null,"Sign in your account"),r.a.createElement(v.b,{onSubmit:this.onSubmit,render:function(n){var t=n.handleSubmit;n.pristine,n.invalid;return r.a.createElement("form",{onSubmit:t},r.a.createElement(v.a,{name:"email",component:A,type:"text",label:"Email address:",validate:P(T,R)}),r.a.createElement(v.a,{name:"password",component:A,type:"password",label:"Password:",validate:T}),r.a.createElement(v.a,{type:"checkbox",name:"tos",component:G,label:"I agree to the Terms of Service and Privacy Policy",validate:T}),r.a.createElement(M,null,r.a.createElement(g.a,{color:"primary",onClick:e.toggle},"Sign in")," ",r.a.createElement(U,{to:"/resetpassword"},"Forgot password?")," ",r.a.createElement(U,{to:"/signup"},"Sign up")))}}))}}]),n}(a.Component),W=x.a.div(Z()),M=x.a.div(J()),U=Object(x.a)(I.a)(q()),_=F;function D(){var e=Object(s.a)(["\n  margin-right: 5px;\n  font-size: 14px;\n  font-weight: 300;\n"]);return D=function(){return e},e}function H(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n\n  margin-top: 10px;\n"]);return H=function(){return e},e}function K(){var e=Object(s.a)(["\n    font-weight: 700;\n    color:  #4ec2e2;\n    font-size: 14px;\n    &:hover {\n        color:  #4ec2e2;\n        text-decoration: none;\n    }\n"]);return K=function(){return e},e}function Q(){var e=Object(s.a)(["\n    display: flex;  \n    justify-content: space-between;\n    align-items: center;\n"]);return Q=function(){return e},e}function V(){var e=Object(s.a)(["\n    color: $light;\n    margin: 30px 0px;\n    font-size: 19px;\n    font-weight: 300;\n"]);return V=function(){return e},e}var X=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).onSubmit=function(){var e=Object(b.a)(d.a.mark(function e(n){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(2e3);case 2:console.log(n);case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(S,null,r.a.createElement(Y,null,"Create a new account"),r.a.createElement(v.b,{onSubmit:this.onSubmit,render:function(e){var n=e.handleSubmit;e.pristine,e.invalid;return r.a.createElement("form",{onSubmit:n},r.a.createElement(v.a,{name:"email",component:A,type:"text",label:"Email address:",validate:P(T,R)}),r.a.createElement(v.a,{name:"password",component:A,type:"password",label:"Password:",validate:T}),r.a.createElement(v.a,{type:"checkbox",name:"tos",component:G,label:"I agree to the Terms of Service and Privacy Policy",validate:T}),r.a.createElement(ee,null,r.a.createElement(g.a,{color:"primary"},"Sign up")),r.a.createElement(te,null,r.a.createElement(ae,null,"Already have an account?"),r.a.createElement(ne,{to:"/signin"},"Sign in")))}}))}}]),n}(a.Component),Y=x.a.div(V()),ee=x.a.div(Q()),ne=Object(x.a)(I.a)(K()),te=x.a.div(H()),ae=x.a.div(D()),re=X;function oe(){var e=Object(s.a)(["\n    font-weight: 700;\n    margin-right: 35px;\n    color:  #4ec2e2;\n    font-size: 14px;\n    &:hover {\n        color:  #4ec2e2;\n        text-decoration: none;\n    }\n"]);return oe=function(){return e},e}function ce(){var e=Object(s.a)(["\n    display: flex;  \n    justify-content: space-between;\n    align-items: center;\n"]);return ce=function(){return e},e}function ie(){var e=Object(s.a)(["\n    color: $light;\n    margin: 30px 0px;\n    font-size: 19px;\n    font-weight: 300;\n"]);return ie=function(){return e},e}var le=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).onSubmit=function(){var e=Object(b.a)(d.a.mark(function e(n){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(2e3);case 2:console.log(n);case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(S,null,r.a.createElement(ue,null,"Reset your password"),r.a.createElement(v.b,{onSubmit:this.onSubmit,render:function(n){var t=n.handleSubmit;n.pristine,n.invalid;return r.a.createElement("form",{onSubmit:t},r.a.createElement(v.a,{name:"email",component:A,type:"text",label:"Adress e-mail:",validate:P(T,R)}),r.a.createElement(pe,null,r.a.createElement(g.a,{color:"primary",onClick:e.toggle},"Reset password")," ",r.a.createElement(me,{to:"/signin"},"Back to sign in")))}}))}}]),n}(a.Component),ue=x.a.div(ie()),pe=x.a.div(ce()),me=Object(x.a)(I.a)(oe()),se=le;function fe(){var e=Object(s.a)(["\n  font-weight: 700;\n  margin-right: 25px;\n  color: #4ec2e2;\n  font-size: 14px;\n  &:hover {\n    color: #4ec2e2;\n    text-decoration: none;\n  }\n"]);return fe=function(){return e},e}function de(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return de=function(){return e},e}function be(){var e=Object(s.a)(["\n  color: $light;\n  margin: 30px 0px;\n  font-size: 19px;\n  font-weight: 300;\n"]);return be=function(){return e},e}var xe=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).onSubmit=function(){var e=Object(b.a)(d.a.mark(function e(n){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(2e3);case 2:console.log(n);case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(S,null,r.a.createElement(ve,null,"Change your password"),r.a.createElement(v.b,{onSubmit:this.onSubmit,render:function(n){var t=n.handleSubmit;n.pristine,n.invalid;return r.a.createElement("form",{onSubmit:t},r.a.createElement(v.a,{name:"password1",component:A,type:"password",label:"Password:",validate:T}),r.a.createElement(v.a,{name:"password2",component:A,type:"password",label:"Repeat password:",validate:T}),r.a.createElement(ge,null,r.a.createElement(g.a,{color:"primary",onClick:e.toggle},"Change password")," ",r.a.createElement(he,{to:"/signin"},"Back to sign in")))}}))}}]),n}(a.Component),ve=x.a.div(be()),ge=x.a.div(de()),he=Object(x.a)(I.a)(fe()),Ee=xe;function je(){var e=Object(s.a)(["\n  color: #7387a9;\n  font-weight: 600;\n  padding: 8px 0px 0px 15px;\n  font-size: 15px;\n"]);return je=function(){return e},e}var Oe=x.a.div(je()),we=function(e){var n=e.children;return r.a.createElement(Oe,null,n)},ye=t(23),Se=t(33),ke=t.n(Se),ze=t(39),Ce=t.n(ze),Ae=t(40),Ne=t.n(Ae);function Pe(){var e=Object(s.a)(["\n  color: #94a2bf;\n"]);return Pe=function(){return e},e}function Te(){var e=Object(s.a)(["\n  border-top: 0;\n  color: #94a2bf;\n  &:hover svg {\n    color: #4ec2e2;\n  }\n"]);return Te=function(){return e},e}function Re(){var e=Object(s.a)(["\n  border-top: 0;\n  background-color: #fff;\n  width: 100%;\n  border-radius: 3px;\n"]);return Re=function(){return e},e}function Be(){var e=Object(s.a)(["\n  width: 400px;\n  font-weight: 500;\n  padding: 0px 20px;\n  border-left: 1px solid #eee;\n"]);return Be=function(){return e},e}function Ie(){var e=Object(s.a)(["\n  padding: 12px 40px;\n  border: 2px solid #ebf2fa;\n  &:hover {\n    border-bottom: 2px solid #4ec2e2;\n  }\n"]);return Ie=function(){return e},e}function Le(){var e=Object(s.a)(["\n  padding: 12px 40px;\n  border-left: 2px solid #ebf2fa;\n  border-top: 2px solid #ebf2fa;\n  border-bottom: 2px solid #ebf2fa;\n  &:hover {\n    border-bottom: 2px solid #4ec2e2;\n  }\n"]);return Le=function(){return e},e}function $e(){var e=Object(s.a)(["\n  color: #7387a9;\n  font-weight: 600;\n  font-size: 14px;\n"]);return $e=function(){return e},e}function Ge(){var e=Object(s.a)(["\n  background-color: #9585c4;\n  padding: 20px 25px;\n"]);return Ge=function(){return e},e}var qe=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(u.a)(this,Object(p.a)(n).call(this,e))).toggle=t.toggle.bind(Object(ye.a)(t)),t.state={dropdownOpen:!1},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){return r.a.createElement(g.r,{expand:"md",style:{padding:"0"}},r.a.createElement(Je,null,r.a.createElement(g.n,{object:!0,src:"image/logo-white.png"})),r.a.createElement(g.c,null,r.a.createElement(g.s,null,r.a.createElement(g.o,{navbar:!0,style:{marginLeft:"110px"}},r.a.createElement(Fe,null,r.a.createElement(Ze,{href:"/dashboard"},r.a.createElement(Ce.a,null)," PAGE TEST")),r.a.createElement(We,null,r.a.createElement(Ze,{href:"/profile"},r.a.createElement(ke.a,null)," SETTINGS"))))),r.a.createElement(Me,{inNavbar:!0,isOpen:this.state.dropdownOpen,toggle:this.toggle},r.a.createElement(De,{nav:!0},r.a.createElement(g.n,{style:{marginRight:"10px"},object:!0,src:"image/edyta.png"}),"edyta@pqstudio.pl"),r.a.createElement(Ue,null,r.a.createElement(_e,{href:"/profile"},r.a.createElement(ke.a,{style:{margin:"5px",marginBottom:"7px"}})," Settings"),r.a.createElement(_e,{href:"/signin"},r.a.createElement(Ne.a,{style:{margin:"5px",marginBottom:"7px"}})," Log out"))))}}]),n}(r.a.Component),Je=x.a.div(Ge()),Ze=Object(x.a)(g.q)($e()),Fe=Object(x.a)(g.p)(Le()),We=Object(x.a)(g.p)(Ie()),Me=Object(x.a)(g.d)(Be()),Ue=Object(x.a)(g.f)(Re()),_e=Object(x.a)(g.e)(Te()),De=Object(x.a)(g.g)(Pe());function He(){var e=Object(s.a)(["\n  background-color: LimeGreen;\n  width: 17px;\n  height: 17px;\n  margin: 5px 0 0 0;\n  border-radius: 50%;\n"]);return He=function(){return e},e}function Ke(){var e=Object(s.a)(["\n  background-color: orange;\n  width: 17px;\n  height: 17px;\n  margin: 5px 0 0 0;\n  border-radius: 50%;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(s.a)(["\n  background-color: red;\n  width: 17px;\n  height: 17px;\n  margin: 5px 0 0 0;\n  border-radius: 50%;\n"]);return Qe=function(){return e},e}function Ve(){var e=Object(s.a)(["\n  background-color: #feffff;\n  border: 1px solid #ebf2fa;\n  border-radius: 3px;\n  box-shadow: 0px 2px 10px 0px rgba(233, 233, 233, 0.5);\n  height: 100px;\n  padding: 15px 0px 0px 30px;\n"]);return Ve=function(){return e},e}function Xe(){var e=Object(s.a)(["\n  width: 1030px;\n  margin: 15px auto 0px auto;\n  padding: 30px 80px 35px 30px;\n"]);return Xe=function(){return e},e}function Ye(){var e=Object(s.a)(["\n  color: #7387a9;\n  font-weight: 600;\n  padding: 8px 0px 0px 0px;\n  font-size: 15px;\n  width: 900px;\n  margin: 40px auto 10px auto;\n"]);return Ye=function(){return e},e}function en(){var e=Object(s.a)(["\n  width: 900px;\n  margin: 0px auto 0px auto;\n  padding: 30px 80px 35px 30px;\n  background-color: #feffff;\n  border: 1px solid #ebf2fa;\n  border-radius: 3px;\n  box-shadow: 0px 2px 10px 0px rgba(233, 233, 233, 0.5);\n"]);return en=function(){return e},e}function nn(){var e=Object(s.a)(["\n  width: 670px;\n"]);return nn=function(){return e},e}function tn(){var e=Object(s.a)(["\n  color: #7387a9;\n  font-weight: 600;\n  padding: 8px 0px 0px 15px;\n  font-size: 15px;\n"]);return tn=function(){return e},e}function an(){var e=Object(s.a)(["\n  color: #7387a9;\n  font-weight: 600;\n  padding: 8px 0px 0px 0px;\n  font-size: 15px;\n  margin-left: -55px;\n"]);return an=function(){return e},e}function rn(){var e=Object(s.a)(["\n  color: #7387a9;\n  font-weight: 400;\n  padding: 8px 0px 0px 0px;\n  font-size: 15px;\n  margin-left: 10px;\n"]);return rn=function(){return e},e}function on(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return on=function(){return e},e}var cn=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).onSubmit=function(){var e=Object(b.a)(d.a.mark(function e(n){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(2e3);case 2:console.log(n);case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(qe,null),r.a.createElement(dn,null,"Test your website"),r.a.createElement(fn,null,r.a.createElement(we,null,r.a.createElement(ln,null,r.a.createElement(un,null,"Try the URL:")," ",r.a.createElement(sn,null,r.a.createElement(g.k,null,r.a.createElement(g.j,null),r.a.createElement(g.l,{addonType:"append"},r.a.createElement(g.a,{color:"primary"},"Analyse"))))))),r.a.createElement(fn,null,r.a.createElement(we,null,r.a.createElement(ln,null,r.a.createElement(mn,null,"SCORE RANGE:")," ",r.a.createElement(vn,null)," ",r.a.createElement(pn,null,"Negative (-1 \u2013 -0,75)")," ",r.a.createElement(gn,null)," ",r.a.createElement(pn,null,"Neutral (-0,75 \u2013 0,25)")," ",r.a.createElement(hn,null)," ",r.a.createElement(pn,null,"Positive (0,25 \u2013 1,0)")))),r.a.createElement(bn,null,r.a.createElement(we,null,r.a.createElement(ln,{className:"row"},r.a.createElement("div",{className:"col-8"}),r.a.createElement(xn,{className:"col-4"},r.a.createElement(g.n,{object:!0,src:"image/score.png"}))))))}}]),n}(a.Component),ln=x.a.div(on()),un=x.a.div(rn()),pn=x.a.div(an()),mn=x.a.div(tn()),sn=x.a.div(nn()),fn=x.a.div(en()),dn=x.a.div(Ye()),bn=x.a.div(Xe()),xn=x.a.div(Ve()),vn=x.a.div(Qe()),gn=x.a.div(Ke()),hn=x.a.div(He()),En=cn,jn=t(41),On=t.n(jn);function wn(){var e=Object(s.a)(["\nposition:absolute;\nBottom: 0px;\nRight: 0px;\n\n"]);return wn=function(){return e},e}function yn(){var e=Object(s.a)(["\n  margin-top: 30px;\n"]);return yn=function(){return e},e}function Sn(){var e=Object(s.a)(["\n  margin-top: 30px;\n"]);return Sn=function(){return e},e}function kn(){var e=Object(s.a)(["\n  overflow: hidden;\n  margin: 15px 35px 0 20px;\n"]);return kn=function(){return e},e}function zn(){var e=Object(s.a)(["\n  color: white;\n  width: 125px;\n"]);return zn=function(){return e},e}function Cn(){var e=Object(s.a)(["\n  width: 900px;\n  margin: 15px auto 0px auto;\n"]);return Cn=function(){return e},e}function An(){var e=Object(s.a)(["\n  color: #7387a9;\n  font-weight: 600;\n  padding: 8px 0px 0px 0px;\n  font-size: 15px;\n  width: 900px;\n  margin: 40px auto 0px auto;\n"]);return An=function(){return e},e}function Nn(){var e=Object(s.a)(["\n  width: 900px;\n  margin: 10px auto 0px auto;\n  padding: 15px;\n  background-color: #feffff;\n  border: 1px solid #ebf2fa;\n  border-radius: 3px;\n  box-shadow: 0px 2px 10px 0px rgba(233, 233, 233, 0.5);\n"]);return Nn=function(){return e},e}function Pn(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Pn=function(){return e},e}var Tn=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).onSubmit=function(){var e=Object(b.a)(d.a.mark(function e(n){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(2e3);case 2:console.log(n);case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(qe,null),r.a.createElement(In,null,"Profile"),r.a.createElement(Bn,null,r.a.createElement(we,null,r.a.createElement(g.c,null,r.a.createElement(g.s,null,r.a.createElement(Gn,{className:"xs-2"}," ",r.a.createElement("div",{style:{width:"100px",height:"100px",position:"relative"}},r.a.createElement("img",{src:"image/pobrane.jpg",alt:"",style:{width:"100%",borderRadius:"50%"}}),r.a.createElement(Zn,{color:"primary",onClick:this.toggle,size:"sm"},r.a.createElement(On.a,null)))),r.a.createElement(qn,{className:"xs-5"},r.a.createElement(v.b,{onSubmit:this.onSubmit,render:function(e){var n=e.handleSubmit;e.pristine,e.invalid;return r.a.createElement("form",{onSubmit:n},r.a.createElement(v.a,{name:"Name",component:A,type:"text",label:"Name:",validate:T}),r.a.createElement(v.a,{name:"LastName",component:A,type:"text",label:"Last name:",validate:T}),r.a.createElement(v.a,{name:"email",component:A,type:"email",label:"Address e-mail:",validate:P(T,R)}))}})),r.a.createElement(Jn,{className:"xs-5"},r.a.createElement(v.b,{onSubmit:this.onSubmit,render:function(e){var n=e.handleSubmit;e.pristine,e.invalid;return r.a.createElement("form",{onSubmit:n},r.a.createElement(v.a,{name:"password1",component:A,type:"password",label:"Password:",validate:P(T,B)}),r.a.createElement(Rn,null,r.a.createElement(g.a,{color:"primary",href:"/changepassword"},"Change password")," "))}})))))),r.a.createElement(Ln,null,r.a.createElement(g.s,null,r.a.createElement(g.b,{xs:"10"}),r.a.createElement(g.b,{xs:"2"},r.a.createElement($n,{color:"secondary",onClick:this.toggle},"Save")))))}}]),n}(a.Component),Rn=x.a.div(Pn()),Bn=x.a.div(Nn()),In=x.a.div(An()),Ln=x.a.div(Cn()),$n=Object(x.a)(g.a)(zn()),Gn=x.a.div(kn()),qn=Object(x.a)(g.b)(Sn()),Jn=Object(x.a)(g.b)(yn()),Zn=Object(x.a)(g.a)(wn()),Fn=Tn;function Wn(){var e=Object(s.a)(["\n   width: 600px;\n    margin: 85px auto 0px auto;\n    padding: 25px 30px;\n    background-color: #feffff;\n    border: 1px solid #ebf2fa;\n    border-radius: 3px;\n"]);return Wn=function(){return e},e}function Mn(){var e=Object(s.a)(["\n  display: flex;\n  jostify-content: center;\n"]);return Mn=function(){return e},e}var Un=x.a.div(Mn()),_n=x.a.div(Wn()),Dn=function(e){var n=e.children;return r.a.createElement(Un,null,r.a.createElement(_n,null,n))};function Hn(){var e=Object(s.a)(["\n  margin-top: 30px;\n"]);return Hn=function(){return e},e}function Kn(){var e=Object(s.a)(["\n  font-weight: 700;\n  margin-right: 35px;\n  color: #4ec2e2;\n  font-size: 14px;\n  &:hover {\n    color: #4ec2e2;\n    text-decoration: none;\n  }\n"]);return Kn=function(){return e},e}function Qn(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Qn=function(){return e},e}var Vn=function(e){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(qe,null),r.a.createElement(Dn,null,r.a.createElement(g.b,{sm:13},r.a.createElement(g.n,{left:!0},r.a.createElement(g.n,{object:!0,src:"image/logo.png"}))),r.a.createElement(et,null,"Testowy widok do nauki",r.a.createElement(v.b,{onSubmit:this.onSubmit,render:function(n){var t=n.handleSubmit;n.pristine,n.invalid;return r.a.createElement("form",{onSubmit:t},r.a.createElement(v.a,{name:"email",component:A,type:"text",label:"Adress e-mail:"}),r.a.createElement(Xn,null,r.a.createElement(g.a,{color:"primary",onClick:e.toggle},"Reset password")," ",r.a.createElement(Yn,{to:"/signin"},"Back to sign in")))}}))))}}]),n}(a.Component),Xn=x.a.div(Qn()),Yn=Object(x.a)(I.a)(Kn()),et=x.a.div(Hn()),nt=Vn;function tt(){var e=Object(s.a)(["\n  height: 150px;\n  resize: none;\n"]);return tt=function(){return e},e}function at(){var e=Object(s.a)(["\n  color: white;\n  width: 170px;\n  top: 80px;\n  float: right;\n  left: 80px;\n  position: relative;\n"]);return at=function(){return e},e}function rt(){var e=Object(s.a)(["\n  color: #7387a9;\n  font-weight: 600;\n  padding: 8px 0px 0px 0px;\n  font-size: 17px;\n  width: 900px;\n  margin: 40px auto 10px auto;\n"]);return rt=function(){return e},e}function ot(){var e=Object(s.a)(["\n  width: 900px;\n  margin: 0px auto 0px auto;\n  padding: 30px 80px 35px 30px;\n  background-color: #feffff;\n  border: 1px solid #ebf2fa;\n  border-radius: 3px;\n  box-shadow: 0px 2px 10px 0px rgba(233, 233, 233, 0.5);\n"]);return ot=function(){return e},e}function ct(){var e=Object(s.a)(["\n  padding: 30px 0 30px 40px;\n  height: 360px;\n"]);return ct=function(){return e},e}var it=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).onSubmit=function(){var e=Object(b.a)(d.a.mark(function e(n){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(2e3);case 2:console.log(n);case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(qe,null),r.a.createElement(pt,null,"Contact"),r.a.createElement(ut,null,r.a.createElement(we,null,r.a.createElement(lt,null,r.a.createElement(v.b,{onSubmit:this.onSubmit,render:function(n){var t=n.handleSubmit;n.pristine,n.invalid;return r.a.createElement("form",{onSubmit:t},r.a.createElement(g.s,null,r.a.createElement(g.b,{sm:"5"},r.a.createElement(v.a,{name:"name",component:A,type:"text",label:"Name:",validate:T})),r.a.createElement(g.b,null,r.a.createElement(v.a,{name:"email",component:A,type:"text",label:"Adress e-mail:",validate:P(T,R)}))),r.a.createElement(g.s,null,r.a.createElement(g.b,null,r.a.createElement(st,{name:"message",component:A,type:"textarea",label:"Message:",validate:T}),r.a.createElement(v.a,{type:"checkbox",name:"checkbox",component:G,label:"I agree to the terms and conditions.",validate:T}),r.a.createElement(mt,{color:"secondary",onClick:e.toggle},"Send message"))))}})))))}}]),n}(a.Component),lt=x.a.div(ct()),ut=x.a.div(ot()),pt=x.a.div(rt()),mt=Object(x.a)(g.a)(at()),st=Object(x.a)(v.a)(tt()),ft=it;function dt(){var e=Object(s.a)(["\n  margin-top: 40px;\n"]);return dt=function(){return e},e}function bt(){var e=Object(s.a)(["\n  font-size: 15px;\n  margin: 3px 0px;\n"]);return bt=function(){return e},e}function xt(){var e=Object(s.a)(["\n  font-size: 30px;\n  margin-bottom: 20px;\n"]);return xt=function(){return e},e}function vt(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 100px;\n"]);return vt=function(){return e},e}var gt=x.a.div(vt()),ht=x.a.div(xt()),Et=x.a.div(bt()),jt=Object(x.a)(I.a).attrs({className:"btn btn-xl btn-primary"})(dt()),Ot=function(){return r.a.createElement(g.c,null,r.a.createElement(gt,null,r.a.createElement(ht,null,"404"),r.a.createElement(Et,null,"We can't seem to find the page you're looking for."),r.a.createElement(jt,{to:"/"},"Back to dashboard")))},wt=t(65),yt=t(66),St=t(67),kt=t(64),zt=function(e){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(wt.a,null,r.a.createElement(yt.a,null,r.a.createElement(St.a,{exact:!0,path:"/",render:function(){return r.a.createElement(kt.a,{to:"/signin"})}}),r.a.createElement(St.a,{path:"/signin",component:_}),r.a.createElement(St.a,{path:"/signup",component:re}),r.a.createElement(St.a,{path:"/resetpassword",component:se}),r.a.createElement(St.a,{path:"/changepassword",component:Ee}),r.a.createElement(St.a,{path:"/dashboard",component:En}),r.a.createElement(St.a,{path:"/profile",component:Fn}),r.a.createElement(St.a,{path:"/testview",component:nt}),r.a.createElement(St.a,{path:"/contactpage",component:ft}),r.a.createElement(St.a,{component:Ot})))}}]),n}(a.Component);c.a.render(r.a.createElement(zt,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.f88ec69a.chunk.js.map