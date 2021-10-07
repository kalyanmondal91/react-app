(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{72:function(t,e,a){},73:function(t,e,a){},90:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(29),r=a.n(c),s=(a(72),a(11)),l=a(12),i=a(14),o=a(13),j=(a(73),a(99)),h=a(96),u=a(101),b=a(98),d=a(1),O=function(t){Object(i.a)(a,t);var e=Object(o.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)(j.a,{bg:"light",expand:"lg",children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(j.a.Brand,{href:"#/",children:"React App"}),Object(d.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(u.a,{className:"me-auto",children:[Object(d.jsx)(u.a.Link,{href:"#/",children:"Home"}),Object(d.jsxs)(b.a,{title:"Formatter",id:"basic-nav-dropdown",children:[Object(d.jsx)(b.a.Item,{href:"#/formatter/xml",children:"XML"}),Object(d.jsx)(b.a.Item,{href:"#/formatter/json",children:"JSON"}),Object(d.jsx)(b.a.Item,{href:"#/formatter/html",children:"HTML"}),Object(d.jsx)(b.a.Item,{href:"#/formatter/css",children:"CSS"}),Object(d.jsx)(b.a.Item,{href:"#/formatter/js",children:"JS"})]}),Object(d.jsxs)(b.a,{title:"Validator",id:"basic-nav-dropdown",children:[Object(d.jsx)(b.a.Item,{href:"/validator/xml",children:"XML"}),Object(d.jsx)(b.a.Item,{href:"/validator/json",children:"JSON"}),Object(d.jsx)(b.a.Item,{href:"/validator/html",children:"HTML"}),Object(d.jsx)(b.a.Item,{href:"/validator/sql",children:"SQL"})]}),Object(d.jsx)(u.a.Link,{href:"#/about",children:"About"})]})})]})})}}]),a}(n.Component),m=O,p=a(7),x=a(97),f=a(63),v=function(t){Object(i.a)(a,t);var e=Object(o.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)(h.a,{children:Object(d.jsx)(x.a,{children:Object(d.jsx)(f.a,{children:"Home"})})})}}]),a}(n.Component),C=v,S=a(10),y=a(100),g=a(62),J=a(27),L=a.n(J),k=function(t){Object(i.a)(a,t);var e=Object(o.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={inputJson:"",outputJson:""},n.handleChange=n.handleChange.bind(Object(S.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(S.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(t){this.setState({inputJson:t.target.value})}},{key:"handleSubmit",value:function(t){var e=this.state.inputJson;this.setState({outputJson:L()(e,{format:"json"})}),t.preventDefault()}},{key:"render",value:function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)(y.a,{onSubmit:this.handleSubmit,children:[Object(d.jsxs)(x.a,{children:[Object(d.jsx)(f.a,{children:Object(d.jsxs)(y.a.Group,{className:"mb-3",controlId:"formatJson.input",children:[Object(d.jsx)(y.a.Label,{children:"Json Data"}),Object(d.jsx)(y.a.Control,{as:"textarea",rows:15,onChange:this.handleChange,value:this.state.inputJson,placeholder:"Paste your json"})]})}),Object(d.jsx)(f.a,{children:Object(d.jsxs)(y.a.Group,{className:"mb-3",controlId:"formatJson.output",children:[Object(d.jsx)(y.a.Label,{children:"Formatted Json Data"}),Object(d.jsx)(y.a.Control,{as:"textarea",rows:15,readOnly:!0,value:this.state.outputJson,placeholder:"Json Output"})]})})]}),Object(d.jsx)(x.a,{children:Object(d.jsx)(f.a,{children:Object(d.jsx)(g.a,{variant:"primary",type:"submit",children:"Process"})})})]})})}}]),a}(n.Component),I=a(64),D=a.n(I),H=function(t){Object(i.a)(a,t);var e=Object(o.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={inputXml:"",outputXml:""},n.handleChange=n.handleChange.bind(Object(S.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(S.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(t){this.setState({inputXml:t.target.value})}},{key:"handleSubmit",value:function(t){this.setState({disabled:!0});var e=this.state.inputXml;this.setState({outputXml:D()(e,{indentation:"\t",filter:function(t){return"Comment"!==t.type},collapseContent:!0,lineSeparator:"\n"})}),t.preventDefault()}},{key:"render",value:function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)(y.a,{onSubmit:this.handleSubmit,children:[Object(d.jsxs)(x.a,{children:[Object(d.jsx)(f.a,{md:!0,children:Object(d.jsxs)(y.a.Group,{className:"mb-3",controlId:"formatXml.input",children:[Object(d.jsx)(y.a.Label,{children:"XML Data"}),Object(d.jsx)(y.a.Control,{as:"textarea",rows:15,onChange:this.handleChange,value:this.state.inputXml,placeholder:"Paste your XML"})]})}),Object(d.jsx)(f.a,{md:!0,children:Object(d.jsxs)(y.a.Group,{className:"mb-3",controlId:"formatXml.output",children:[Object(d.jsx)(y.a.Label,{children:"Formatted XML Data"}),Object(d.jsx)(y.a.Control,{as:"textarea",rows:15,readOnly:!0,value:this.state.outputXml,placeholder:"XML Output"})]})})]}),Object(d.jsx)(x.a,{children:Object(d.jsx)(f.a,{children:Object(d.jsx)(g.a,{variant:"primary",type:"submit",children:"Process"})})})]})})}}]),a}(n.Component),X=function(t){Object(i.a)(a,t);var e=Object(o.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={inputHtml:"",outputHtml:""},n.handleChange=n.handleChange.bind(Object(S.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(S.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(t){this.setState({inputHtml:t.target.value})}},{key:"handleSubmit",value:function(t){var e=this.state.inputHtml;this.setState({outputHtml:L()(e,{format:"html"})}),t.preventDefault()}},{key:"render",value:function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)(y.a,{onSubmit:this.handleSubmit,children:[Object(d.jsxs)(x.a,{children:[Object(d.jsx)(f.a,{md:!0,children:Object(d.jsxs)(y.a.Group,{className:"mb-3",controlId:"formatJson.input",children:[Object(d.jsx)(y.a.Label,{children:"HTML Data"}),Object(d.jsx)(y.a.Control,{as:"textarea",rows:15,onChange:this.handleChange,value:this.state.inputHtml,placeholder:"Paste your HTML"})]})}),Object(d.jsx)(f.a,{md:!0,children:Object(d.jsxs)(y.a.Group,{className:"mb-3",controlId:"formatJson.output",children:[Object(d.jsx)(y.a.Label,{children:"Formatted HTML Data"}),Object(d.jsx)(y.a.Control,{as:"textarea",rows:15,readOnly:!0,value:this.state.outputHtml,placeholder:"HTML Output"})]})})]}),Object(d.jsx)(x.a,{children:Object(d.jsx)(f.a,{children:Object(d.jsx)(g.a,{variant:"primary",type:"submit",children:"Process"})})})]})})}}]),a}(n.Component),w=function(t){Object(i.a)(a,t);var e=Object(o.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={inputCss:"",outputCss:""},n.handleChange=n.handleChange.bind(Object(S.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(S.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(t){this.setState({inputCss:t.target.value})}},{key:"handleSubmit",value:function(t){var e=this.state.inputCss;this.setState({outputCss:L()(e,{format:"css"})}),t.preventDefault()}},{key:"render",value:function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)(y.a,{onSubmit:this.handleSubmit,children:[Object(d.jsxs)(x.a,{children:[Object(d.jsx)(f.a,{md:!0,children:Object(d.jsxs)(y.a.Group,{className:"mb-3",controlId:"formatJson.input",children:[Object(d.jsx)(y.a.Label,{children:"CSS Data"}),Object(d.jsx)(y.a.Control,{as:"textarea",rows:15,onChange:this.handleChange,value:this.state.inputCss,placeholder:"Paste your CSS"})]})}),Object(d.jsx)(f.a,{md:!0,children:Object(d.jsxs)(y.a.Group,{className:"mb-3",controlId:"formatJson.output",children:[Object(d.jsx)(y.a.Label,{children:"Formatted CSS Data"}),Object(d.jsx)(y.a.Control,{as:"textarea",rows:15,readOnly:!0,value:this.state.outputCss,placeholder:"CSS Output"})]})})]}),Object(d.jsx)(x.a,{children:Object(d.jsx)(f.a,{children:Object(d.jsx)(g.a,{variant:"primary",type:"submit",children:"Process"})})})]})})}}]),a}(n.Component),N=function(t){Object(i.a)(a,t);var e=Object(o.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={inputJs:"",outputJs:""},n.handleChange=n.handleChange.bind(Object(S.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(S.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(t){this.setState({inputJs:t.target.value})}},{key:"handleSubmit",value:function(t){var e=this.state.inputJs;this.setState({outputJs:L()(e,{format:"js"})}),t.preventDefault()}},{key:"render",value:function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)(y.a,{onSubmit:this.handleSubmit,children:[Object(d.jsxs)(x.a,{children:[Object(d.jsx)(f.a,{md:!0,children:Object(d.jsxs)(y.a.Group,{className:"mb-3",controlId:"formatJson.input",children:[Object(d.jsx)(y.a.Label,{children:"JS Data"}),Object(d.jsx)(y.a.Control,{as:"textarea",rows:15,onChange:this.handleChange,value:this.state.inputJs,placeholder:"Paste your JS"})]})}),Object(d.jsx)(f.a,{md:!0,children:Object(d.jsxs)(y.a.Group,{className:"mb-3",controlId:"formatJson.output",children:[Object(d.jsx)(y.a.Label,{children:"Formatted JS Data"}),Object(d.jsx)(y.a.Control,{as:"textarea",rows:15,readOnly:!0,value:this.state.outputJs,placeholder:"JS Output"})]})})]}),Object(d.jsx)(x.a,{children:Object(d.jsx)(f.a,{children:Object(d.jsx)(g.a,{variant:"primary",type:"submit",children:"Process"})})})]})})}}]),a}(n.Component),M=function(t){Object(i.a)(a,t);var e=Object(o.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsx)("br",{}),Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{exact:!0,path:"/",component:C}),Object(d.jsx)(p.a,{path:"/about",component:P}),Object(d.jsx)(p.a,{exact:!0,path:"/formatter/xml",component:H}),Object(d.jsx)(p.a,{exact:!0,path:"/formatter/json",component:k}),Object(d.jsx)(p.a,{exact:!0,path:"/formatter/html",component:X}),Object(d.jsx)(p.a,{exact:!0,path:"/formatter/css",component:w}),Object(d.jsx)(p.a,{exact:!0,path:"/formatter/js",component:N})]})]})}}]),a}(n.Component),P=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h2",{children:"About"})})},F=M,G=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,102)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;a(t),n(t),c(t),r(t),s(t)}))},T=(a(89),a(56));r.a.render(Object(d.jsx)(T.a,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),G()}},[[90,1,2]]]);
//# sourceMappingURL=main.7234c9c1.chunk.js.map