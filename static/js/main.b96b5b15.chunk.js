(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),c=n(7),r=n.n(c),s=(n(13),n(8)),i=n(2),d=n(3),l=n(5),u=n(4),h=n(0),j=function(t){var e=t.todos,n=t.deleteTodo,o=e.length?e.map((function(t){return Object(h.jsx)("div",{className:"collection-item",children:Object(h.jsx)("span",{onClick:function(){return n(t.id)},children:t.content})},t.id)})):Object(h.jsx)("p",{className:"center",children:"No hay tareas pendientes! "});return Object(h.jsx)("div",{className:"todos collection",children:o})},b=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={content:""},t.handleChange=function(e){t.setState({content:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state),t.setState({content:""})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("label",{children:"\xa1Agreg\xe1 una nueva tarea y presiona Enter!"}),Object(h.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.content})]})})}}]),n}(o.Component),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.deleteTodo=function(e){var n=t.state.todos.filter((function(t){return t.id!==e}));t.setState({todos:n})},t.addTodo=function(e){e.id=Math.random();var n=[].concat(Object(s.a)(t.state.todos),[e]);t.setState({todos:n})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"todo-app container",children:[Object(h.jsx)("h1",{className:"center blue-text",children:"Tareas"}),Object(h.jsx)(j,{todos:this.state.todos,deleteTodo:this.deleteTodo}),Object(h.jsx)(b,{addTodo:this.addTodo})]})}}]),n}(o.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),o(t),a(t),c(t),r(t)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.b96b5b15.chunk.js.map