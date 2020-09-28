(this.webpackJsonpextra=this.webpackJsonpextra||[]).push([[0],{168:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(56),s=t.n(r),o=t(5),l=function(){return c.a.createElement("nav",{className:"main-nav-container"},c.a.createElement("div",{className:"main-nav-logo"},c.a.createElement(o.b,{to:"/",className:"logo-container",onMouseEnter:function(){return document.querySelector(".first-logo-span").classList.add("expand"),void document.querySelector(".second-logo-span").classList.add("expand")},onMouseLeave:function(){return document.querySelector(".first-logo-span").classList.remove("expand"),void document.querySelector(".second-logo-span").classList.remove("expand")}},c.a.createElement("span",{className:"first-logo-span"},"Expense"),c.a.createElement("span",{className:"second-logo-span"},"Tracker"))),c.a.createElement("div",{className:"main-nav-bar"},c.a.createElement("div",{className:"nav-bar-links-container"},c.a.createElement(o.c,{className:"main-nav-links",activeClassName:"nav-active",exact:!0,to:"/summary"},"Summary"),c.a.createElement(o.c,{className:"main-nav-links",activeClassName:"nav-active",exact:!0,to:"/transactions"},"Transactions"),c.a.createElement(o.c,{className:"main-nav-links",activeClassName:"nav-active",to:"/report"},"Reports"))))},i=t(2),m=(t(67),t(68),t(69),t(70),t(71),t(72),t(73),t(4)),u=t(1),d=function(e){var a=e.account,t=e.formatNumber,n=e.index;return c.a.createElement("div",{className:"account-item-container color-".concat(n%2===0?"even":"odd")},c.a.createElement("div",{className:"institution-name"},a.institution),c.a.createElement("div",null,"$",t(parseFloat(a.accountBalance).toFixed(2))))},p=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("ExtraAppCashAccounts")||JSON.stringify([]))),a=Object(u.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)(JSON.parse(localStorage.getItem("ExtraAppCreditAccounts")||JSON.stringify([]))),o=Object(u.a)(s,2),l=o[0],i=o[1],p=Object(n.useState)(JSON.parse(localStorage.getItem("ExtraAppBankAccounts")||JSON.stringify([]))),f=Object(u.a)(p,2),E=f[0],g=f[1],v=Object(n.useState)((function(){JSON.parse(localStorage.getItem("ExtraAppTransactions")||JSON.stringify([]));var e=0;return[].concat(Object(m.a)(t),Object(m.a)(l),Object(m.a)(E)).forEach((function(a){return e+=parseFloat(a.accountBalance)})),e})),N=Object(u.a)(v,2),h=N[0],b=N[1],y=Object(n.useState)((function(){var e=JSON.parse(localStorage.getItem("ExtraAppTransactions")||JSON.stringify([])),a=0;return e.forEach((function(e){"expense"===e.type&&(a+=parseFloat(e.amount))})),a})),S=Object(u.a)(y,2),O=S[0],x=(S[1],Object(n.useState)("")),k=Object(u.a)(x,2),j=k[0],C=k[1],A=Object(n.useState)(0),I=Object(u.a)(A,2),J=I[0],B=I[1],L=Object(n.useState)(""),T=Object(u.a)(L,2),q=T[0],D=T[1];Object(n.useEffect)((function(){localStorage.setItem("ExtraAppCashAccounts",JSON.stringify(t))}),[t]),Object(n.useEffect)((function(){localStorage.setItem("ExtraAppCreditAccounts",JSON.stringify(l))}),[l]),Object(n.useEffect)((function(){localStorage.setItem("ExtraAppBankAccounts",JSON.stringify(E))}),[E]);var F=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},w=function(e){var a=document.querySelector(".summary-form-container");e.target===e.currentTarget&&a.classList.remove("open")};return c.a.createElement("div",{className:"summary-content"},c.a.createElement("h2",{className:"summary-header"},"Summary"),c.a.createElement("div",{className:"summary-form-container",onClick:function(e){return w(e)}},c.a.createElement("form",{className:"summary-form",onSubmit:function(e){return function(e){e.preventDefault(),"cash"===q?r((function(e){return[{id:Math.floor(9999999999*Math.random()),accountCategory:q,accountBalance:J,institution:j}].concat(Object(m.a)(e))})):"credit"===q?i((function(e){return[{id:Math.floor(9999999999*Math.random()),accountCategory:q,accountBalance:J,institution:j}].concat(Object(m.a)(e))})):g((function(e){return[{id:Math.floor(9999999999*Math.random()),accountCategory:q,accountBalance:J,institution:j}].concat(Object(m.a)(e))})),b(parseFloat(h)+parseFloat(J)),C(""),B(0)}(e)}},c.a.createElement("div",{className:"summary-form-title-container"},c.a.createElement("h2",{className:"summary-form-title"},"Add an Account")),c.a.createElement("div",{className:"summary-input-container"},c.a.createElement("label",null,"Account Name"),c.a.createElement("input",{className:"summary-inputs first-input",required:!0,type:"text",placeholder:"Enter account name...",value:j,onChange:function(e){return C(e.target.value)}})),c.a.createElement("div",{className:"summary-input-container"},c.a.createElement("label",null,"Account Balance"),c.a.createElement("input",{className:"summary-inputs",required:!0,type:"number",step:"0.01",value:J,onChange:function(e){return B(e.target.value)}})),c.a.createElement("select",{className:"summary-inputs select-input",required:!0,defaultValue:"",name:"accountCategory",onChange:function(e){return D(e.target.value)}},c.a.createElement("option",{disabled:!0,value:""},"Select Category"),c.a.createElement("option",{value:"cash"},"Cash"),c.a.createElement("option",{value:"banks"},"Bank Account"),c.a.createElement("option",{value:"credit"},"Credit")),c.a.createElement("div",{className:"summary-button-containers"},c.a.createElement("input",{className:"summary-submit-btn",type:"submit",value:"Add Account"}),c.a.createElement("span",{className:"summary-cancel-btn",onClick:function(e){return w(e)}},"Cancel")))),c.a.createElement("div",{className:"summary-overview-container"},c.a.createElement("div",{className:"balance-expense-container"},c.a.createElement("div",{className:"balance-container"},c.a.createElement("h4",{className:"summary-title"},"Balance"),c.a.createElement("h3",{className:"balance-total"},"$",F(h.toFixed(2)))),c.a.createElement("div",{className:"expense-container"},c.a.createElement("h4",{className:"summary-title"},"Expenses"),c.a.createElement("h3",{className:"expenses-total"},"$",F(O.toFixed(2)))))),c.a.createElement("hr",{className:"hr-divider"}),c.a.createElement("div",{className:"accounts-container"},c.a.createElement("div",{className:"accounts-container-header"},c.a.createElement("h3",{className:"accounts-header"},"Accounts"),c.a.createElement("span",{className:"add-account-btn",onClick:function(){document.querySelector(".summary-form-container").classList.add("open")}},"Add Account")),c.a.createElement("div",null,c.a.createElement("span",{className:"account-type-header"},"Cash"),c.a.createElement("div",null,t.map((function(e,a){return c.a.createElement(d,{key:e.id,index:a,formatNumber:F,account:e})})),0===t.length?c.a.createElement("div",{className:"empty-account-message"},'You don\'t have any cash accounts currently. Click "Add Account" to add one.'):null),c.a.createElement("span",{className:"account-type-header"},"Bank"),c.a.createElement("div",null,E.map((function(e,a){return c.a.createElement(d,{key:e.id,index:a,formatNumber:F,account:e})})),0===E.length?c.a.createElement("div",{className:"empty-account-message"},'You don\'t have any bank accounts currently. Click "Add Account" to add one.'):null)),c.a.createElement("div",null,c.a.createElement("span",{className:"account-type-header"},"Credit"),c.a.createElement("div",null,l.map((function(e,a){return c.a.createElement(d,{key:e.id,index:a,formatNumber:F,account:e})})),0===l.length?c.a.createElement("div",{className:"empty-account-message"},'You don\'t have any credit accounts currently. Click "Add Account" to add one.'):null))))},f=function(e){var a=e.transaction,t=e.handleDelete,n=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return c.a.createElement("tr",{className:"transactions-table-row"},c.a.createElement("td",{className:"transactions-table-data"},a.account),c.a.createElement("td",{className:"transactions-table-data"},a.category),c.a.createElement("td",{className:"".concat(a.type," transactions-table-data")},"expense"===a.type?"-$".concat(n(parseFloat(a.amount).toFixed(2))):"$".concat(n(parseFloat(a.amount).toFixed(2)))),c.a.createElement("td",{className:"transactions-table-data"},a.date),c.a.createElement("td",{className:"transactions-table-data"},a.description),c.a.createElement("td",{className:"transactions-table-data"},c.a.createElement("i",{className:"fas fa-trash-alt",onClick:function(){return t(a.id)}})))},E=function(){var e=Object(n.useState)((function(){return JSON.parse(localStorage.getItem("ExtraAppTransactions")||JSON.stringify([])).sort((function(e,a){return e.date>a.date?-1:e.date<a.date?1:0}))})),a=Object(u.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)(""),o=Object(u.a)(s,2),l=o[0],i=o[1],d=Object(n.useState)(0),p=Object(u.a)(d,2),E=p[0],g=p[1],v=Object(n.useState)((function(){var e=(new Date).toLocaleDateString().split("/"),a=Object(u.a)(e,3),t=a[0],n=a[1],c=a[2];return 1===t.length&&(t="0".concat(t)),1===n.length&&(t="0".concat(n)),"".concat(c,"-").concat(t,"-").concat(n)})),N=Object(u.a)(v,2),h=N[0],b=N[1],y=Object(n.useState)(""),S=Object(u.a)(y,2),O=S[0],x=S[1],k=Object(n.useState)(""),j=Object(u.a)(k,2),C=j[0],A=j[1],I=Object(n.useState)(""),J=Object(u.a)(I,2),B=J[0],L=J[1],T=Object(n.useState)(JSON.parse(localStorage.getItem("ExtraAppCashAccounts")||JSON.stringify([]))),q=Object(u.a)(T,2),D=q[0],F=q[1],w=Object(n.useState)(JSON.parse(localStorage.getItem("ExtraAppCreditAccounts")||JSON.stringify([]))),M=Object(u.a)(w,2),Y=M[0],$=M[1],G=Object(n.useState)(JSON.parse(localStorage.getItem("ExtraAppBankAccounts")||JSON.stringify([]))),V=Object(u.a)(G,2),W=V[0],_=V[1];Object(n.useEffect)((function(){localStorage.setItem("ExtraAppTransactions",JSON.stringify(t))}),[t]),Object(n.useEffect)((function(){localStorage.setItem("ExtraAppCashAccounts",JSON.stringify(D))}),[D]),Object(n.useEffect)((function(){localStorage.setItem("ExtraAppCreditAccounts",JSON.stringify(Y))}),[Y]),Object(n.useEffect)((function(){localStorage.setItem("ExtraAppBankAccounts",JSON.stringify(W))}),[W]);var z=function(e){var a,n=[];t.forEach((function(t){t.id===e?a=t:n.push(t)})),D.forEach((function(e){e.institution===a.account&&("income"===a.type?(e.accountBalance=parseInt(e.accountBalance)-parseInt(a.amount),F(D.slice())):(e.accountBalance=parseInt(e.accountBalance)+parseInt(a.amount),F(D.slice())))})),Y.forEach((function(e){e.institution===a.account&&("income"===a.type?(e.accountBalance=parseInt(e.accountBalance)-parseInt(a.amount),$(Y.slice())):(e.accountBalance=parseInt(e.accountBalance)+parseInt(a.amount),$(Y.slice())))})),W.forEach((function(e){e.institution===a.account&&("income"===a.type?(e.accountBalance=parseInt(e.accountBalance)-parseInt(a.amount),_(W.slice())):(e.accountBalance=parseInt(e.accountBalance)+parseInt(a.amount),_(W.slice())))})),r(n)},P=function(e){var a=document.querySelector(".transactions-form-container");e.target===e.currentTarget&&a.classList.remove("open")};return c.a.createElement("div",{className:"transactions-content"},c.a.createElement("h2",{className:"transactions-header"},"Transactions"),c.a.createElement("span",{className:"add-transaction-btn",onClick:function(){document.querySelector(".transactions-form-container").classList.add("open")}},"Add Transaction"),c.a.createElement("div",{className:"transactions-form-container",onClick:function(e){return P(e)}},c.a.createElement("form",{className:"transactions-form",onSubmit:function(e){return function(e){e.preventDefault(),r((function(e){return[{id:Math.floor(9999999999*Math.random()),category:l,amount:E,date:h,type:B,description:O,account:C}].concat(Object(m.a)(e))})),i(""),g(""),D.forEach((function(e){e.institution===C&&("income"===B?(e.accountBalance=parseInt(e.accountBalance)+parseInt(E),F(D.slice())):(e.accountBalance=parseInt(e.accountBalance)-parseInt(E),F(D.slice())))})),Y.forEach((function(e){e.institution===C&&("income"===B?(e.accountBalance=parseInt(e.accountBalance)+parseInt(E),$(Y.slice())):(e.accountBalance=parseInt(e.accountBalance)-parseInt(E),$(Y.slice())))})),W.forEach((function(e){e.institution===C&&("income"===B?(e.accountBalance=parseInt(e.accountBalance)+parseInt(E),_(W.slice())):(e.accountBalance=parseInt(e.accountBalance)-parseInt(E),_(W.slice())))}))}(e)}},c.a.createElement("div",{className:"transaction-form-title-container"},c.a.createElement("h2",{className:"transaction-form-title"},"Add a Transaction")),c.a.createElement("select",{className:"transactions-inputs",required:!0,defaultValue:"",name:"account",onChange:function(e){return A(e.target.value)}},c.a.createElement("option",{disabled:!0,value:""},"Choose an account"),function(){var e=JSON.parse(localStorage.getItem("ExtraAppCashAccounts")||JSON.stringify([])),a=JSON.parse(localStorage.getItem("ExtraAppCreditAccounts")||JSON.stringify([])),t=JSON.parse(localStorage.getItem("ExtraAppBankAccounts")||JSON.stringify([]));return[].concat(Object(m.a)(e),Object(m.a)(a),Object(m.a)(t))}().map((function(e,a){return c.a.createElement("option",{key:a,value:"".concat(e.institution)},e.institution)}))),c.a.createElement("select",{className:"transactions-inputs",required:!0,defaultValue:"",name:"category",onChange:function(e){return i(e.target.value)}},c.a.createElement("option",{disabled:!0,value:""},"Category"),c.a.createElement("option",{value:"groceries"},"Groceries"),c.a.createElement("option",{value:"income"},"Income"),c.a.createElement("option",{value:"personal"},"Personal"),c.a.createElement("option",{value:"utilities"},"Utilities"),c.a.createElement("option",{value:"entertainment"},"Entertainment"),c.a.createElement("option",{value:"other"},"Other")),c.a.createElement("div",{className:"transaction-input-container"},c.a.createElement("label",null,"Transaction Amount"),c.a.createElement("input",{className:"transactions-inputs",required:!0,type:"number",min:"0",step:"0.01",value:E,placeholder:"amount",onChange:function(e){return g(e.target.value)}})),c.a.createElement("div",{className:"transaction-input-container"},c.a.createElement("label",null,"Transaction Date"),c.a.createElement("input",{className:"transactions-inputs transactions-date-input",type:"date",value:h,onChange:function(e){return b(e.target.value)}})),c.a.createElement("select",{className:"transactions-inputs",required:!0,defaultValue:"",name:"type",onChange:function(e){return L(e.target.value)}},c.a.createElement("option",{disabled:!0,value:""},"Select entry type"),c.a.createElement("option",{value:"expense"},"Expense"),c.a.createElement("option",{value:"income"},"Income")),c.a.createElement("div",{className:"transaction-input-container"},c.a.createElement("label",null,"Description"),c.a.createElement("input",{className:"transactions-inputs",required:!0,type:"text",value:O,placeholder:"Add a description...",onChange:function(e){return x(e.target.value)}})),c.a.createElement("div",{className:"transactions-button-containers"},c.a.createElement("input",{className:"transactions-submit-btn",type:"submit",value:"Add Transaction"}),c.a.createElement("span",{className:"transactions-cancel-btn",onClick:function(e){return P(e)}},"Cancel")))),c.a.createElement("div",{className:"transactions-table-container"},c.a.createElement("table",{className:"transactions-table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"table-header account-header",onClick:function(e){return function(e){var a=e.target,n=document.querySelector(".amount-header"),c=document.querySelector(".date-header"),s=document.querySelector(".category-header"),o=a.classList.contains("ascending");r((function(e){var t=Object(m.a)(e);return o?(a.classList.remove("ascending"),t.sort((function(e,a){return e.account>a.account?-1:e.account<a.account?1:0}))):(a.classList.add("ascending"),s.classList.remove("ascending"),n.classList.remove("ascending"),c.classList.remove("ascending"),t.sort((function(e,a){return e.account<a.account?-1:e.account>a.account?1:0})))})),localStorage.setItem("ExtraAppTransactions",JSON.stringify(t))}(e)}},c.a.createElement("i",{className:"fas fa-sort"}),"Account"),c.a.createElement("th",{className:"table-header category-header",onClick:function(e){return function(e){var a=e.target,n=document.querySelector(".amount-header"),c=document.querySelector(".date-header"),s=document.querySelector(".account-header"),o=a.classList.contains("ascending");r((function(e){var t=Object(m.a)(e);return o?(a.classList.remove("ascending"),t.sort((function(e,a){return e.category>a.category?-1:e.category<a.category?1:0}))):(a.classList.add("ascending"),n.classList.remove("ascending"),c.classList.remove("ascending"),s.classList.remove("ascending"),t.sort((function(e,a){return e.category<a.category?-1:e.category>a.category?1:0})))})),localStorage.setItem("ExtraAppTransactions",JSON.stringify(t))}(e)}},c.a.createElement("i",{className:"fas fa-sort"}),"Category"),c.a.createElement("th",{className:"table-header amount-header",onClick:function(e){return function(e){var a=e.target,n=document.querySelector(".category-header"),c=document.querySelector(".date-header"),s=document.querySelector(".account-header"),o=a.classList.contains("ascending");r((function(e){var t=e.filter((function(e){return"income"===e.type})),r=e.filter((function(e){return"expense"===e.type}));return o?(a.classList.remove("ascending"),t.sort((function(e,a){return a.amount-e.amount})),r.sort((function(e,a){return a.amount-e.amount})),[].concat(Object(m.a)(t),Object(m.a)(r))):(a.classList.add("ascending"),n.classList.remove("ascending"),c.classList.remove("ascending"),s.classList.remove("ascending"),t.sort((function(e,a){return e.amount-a.amount})),r.sort((function(e,a){return e.amount-a.amount})),[].concat(Object(m.a)(r),Object(m.a)(t)))})),localStorage.setItem("ExtraAppTransactions",JSON.stringify(t))}(e)}},c.a.createElement("i",{className:"fas fa-sort"}),"Amount"),c.a.createElement("th",{className:"table-header date-header",onClick:function(e){return function(e){var a=e.target,n=document.querySelector(".amount-header"),c=document.querySelector(".category-header"),s=document.querySelector(".account-header"),o=a.classList.contains("ascending");r((function(e){var t=Object(m.a)(e);return o?(a.classList.remove("ascending"),t.sort((function(e,a){return e.date>a.date?-1:e.date<a.date?1:0}))):(a.classList.add("ascending"),n.classList.remove("ascending"),c.classList.remove("ascending"),s.classList.remove("ascending"),t.sort((function(e,a){return e.date<a.date?-1:e.date>a.date?1:0})))})),localStorage.setItem("ExtraAppTransactions",JSON.stringify(t))}(e)}},c.a.createElement("i",{className:"fas fa-sort"}),"Date"),c.a.createElement("th",{className:"table-header"},"Description"),c.a.createElement("th",{className:"table-header"},"Options"))),c.a.createElement("tbody",null,t.map((function(e){return c.a.createElement(f,{key:e.id,transaction:e,handleDelete:z})}))))))},g=t(14),v=function(){var e=Object(n.useState)((function(){var e=(new Date).toLocaleDateString().split("/"),a=Object(u.a)(e,3),t=a[0],n=a[1],c=a[2];return 1===t.length&&(t="0".concat(t)),1===n.length&&(t="0".concat(n)),"".concat(c,"-").concat(t,"-").concat(n)})),a=Object(u.a)(e,2),t=a[0],r=a[1],s={labels:["Groceries","Income","Personal","Utilities","Entertainment","Other"],datasets:[{label:"Rainfall",backgroundColor:["#f94144","#f3722c","#277da1","#43aa8b","#f9c74f","#98c1d9"],hoverBackgroundColor:["#a73234","#b15727","#265d75","#2f6e5b","#ac8a3b","#6c97af"],data:function(){var e=JSON.parse(localStorage.getItem("ExtraAppTransactions")||JSON.stringify([])),a=[];return["Groceries","Personal","Utilities","Entertainment","Other"].forEach((function(n){var c=0;e.forEach((function(e){e.category===n.toLowerCase()&&e.date===t&&"expense"===e.type&&(c+=parseFloat(e.amount))})),a.push(c.toFixed(2))})),a}()}]};return c.a.createElement("div",{className:"reports-content"},c.a.createElement("div",{className:"total-reports-container"},c.a.createElement("h4",{className:"total-reports-header"},"Total Daily Expense"),c.a.createElement("h3",{className:"reports-total-expenses"},"$",function(){var e=JSON.parse(localStorage.getItem("ExtraAppTransactions")||JSON.stringify([])),a=0;return e.forEach((function(e){e.date===t&&"expense"===e.type&&(a+=parseFloat(e.amount))})),a.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}())),c.a.createElement("label",{className:"reports-date-label"},"Choose a Day"),c.a.createElement("input",{className:"reports-date-select",type:"date",value:t,onChange:function(e){return r(e.target.value)}}),c.a.createElement("div",{className:"pie-chart-container"},s.datasets[0].data.every((function(e){return"0.00"===e}))?c.a.createElement("span",{className:"empty-pie-message"},"You have no expenses for the selected day"):null,c.a.createElement(g.Pie,{data:s,options:{title:{display:!0,text:"Daily Expense Breakdown",fontSize:30},legend:{display:!0,position:"right"}}})))},N=function(){return c.a.createElement("div",{className:"reports-nav-links-container"},c.a.createElement("div",{className:"reports-nav-links"},c.a.createElement(o.c,{className:"report-nav-link",activeClassName:"reports-nav-active",exact:!0,to:"/report"},"Daily"),c.a.createElement(o.c,{className:"report-nav-link",activeClassName:"reports-nav-active",exact:!0,to:"/report/week"},"Week"),c.a.createElement(o.c,{className:"report-nav-link",activeClassName:"reports-nav-active",exact:!0,to:"/report/month"},"Month")))},h=t(35),b=t.n(h),y=function(){var e=function(){for(var e,a=new Date("".concat(r,"T00:00:00.000-07:00")).getDay(),t=[],n=b()(r,"YYYY-MM-DD");t.length<7;)a>0?((e=n.clone().subtract(a,"days").format("YYYY-MM-DD")).split("/").join("-"),t.push(e)):a<0?((e=n.clone().add(Math.abs(a),"days").format("YYYY-MM-DD")).split("/").join("-"),t.push(e)):t.push(r),a--;return t},a=Object(n.useState)((function(){var e=(new Date).toLocaleDateString().split("/"),a=Object(u.a)(e,3),t=a[0],n=a[1],c=a[2];return 1===t.length&&(t="0".concat(t)),1===n.length&&(t="0".concat(n)),"".concat(c,"-").concat(t,"-").concat(n)})),t=Object(u.a)(a,2),r=t[0],s=t[1],o={labels:e(),datasets:[{label:"Weekly Expenses",fill:!0,lineTension:.2,backgroundColor:"tomato",borderColor:"rgba(0, 0, 0, 1)",borderWidth:2,data:function(){var a=JSON.parse(localStorage.getItem("ExtraAppTransactions")||JSON.stringify([])),t=[];return e().forEach((function(e){var n=0;a.forEach((function(a){a.date===e&&"expense"===a.type&&(n+=parseFloat(a.amount))})),t.push(n.toFixed(2))})),t}()}]};return c.a.createElement("div",{className:"reports-content"},c.a.createElement("div",null,c.a.createElement("h4",{className:"total-reports-header"},"Total Weekly Expense"),c.a.createElement("h3",{className:"reports-total-expenses"},"$",function(){var a=JSON.parse(localStorage.getItem("ExtraAppTransactions")||JSON.stringify([])),t=0,n=e();return a.forEach((function(e){n.includes(e.date)&&"expense"===e.type&&(t+=parseFloat(e.amount))})),t.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}())),c.a.createElement("label",{className:"reports-date-label"},"Choose a Day"),c.a.createElement("input",{className:"reports-date-select",type:"date",value:r,onChange:function(e){return s(e.target.value)}}),c.a.createElement("div",{className:"line-graph-container"},c.a.createElement(g.Line,{data:o,options:{title:{display:!0,text:"Weekly Expense Breakdown",fontSize:30},legend:{display:!1}}})))},S=function(){var e=function(){for(var e=new Date(s.slice(0,4),s.slice(5,7),0).getDate(),a=[],t=1;t<=e;t++)t.toString().length<2?a.push("".concat(s.slice(0,4),"-").concat(s.slice(5,7),"-0").concat(t)):a.push("".concat(s.slice(0,4),"-").concat(s.slice(5,7),"-").concat(t));return a},a=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},t=Object(n.useState)((function(){var e=(new Date).toLocaleDateString().split("/"),a=Object(u.a)(e,3),t=a[0],n=a[1],c=a[2];return 1===t.length&&(t="0".concat(t)),1===n.length&&(t="0".concat(n)),"".concat(c,"-").concat(t,"-").concat(n)})),r=Object(u.a)(t,2),s=r[0],o=r[1],l={labels:e(),datasets:[{label:"Monthly Expenses",fill:!0,lineTension:.2,backgroundColor:"tomato",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:function(){var a=JSON.parse(localStorage.getItem("ExtraAppTransactions")||JSON.stringify([])),t=[];return e().forEach((function(e){var n=0;a.forEach((function(a){a.date===e&&(n+=parseFloat(a.amount))})),t.push(n.toFixed(2))})),t}()}]};return c.a.createElement("div",{className:"reports-content"},c.a.createElement("div",{className:"total-reports-container"},c.a.createElement("h4",{className:"total-reports-header"},"Total Monthly Expense"),c.a.createElement("h3",{className:"reports-total-expenses"},"$",function(){var e=JSON.parse(localStorage.getItem("ExtraAppTransactions")||JSON.stringify([])),t=0;return e.forEach((function(e){var a=e.date.slice(5,7),n=e.date.slice(0,4);a===s.slice(5,7)&&n===s.slice(0,4)&&"expense"===e.type&&(t+=parseFloat(e.amount))})),a(t.toFixed(2))}())),c.a.createElement("label",{className:"reports-date-label"},"Choose a Day"),c.a.createElement("input",{className:"reports-date-select",type:"date",value:s,onChange:function(e){return o(e.target.value)}}),c.a.createElement("div",{className:"line-graph-container"},c.a.createElement(g.Line,{data:l,options:{title:{display:!0,text:"Monthly Expense Breakdown",fontSize:30},legend:{display:!1}}})))},O=function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"splash-header"},"Take control of your Expenses"),c.a.createElement("div",{className:"splash-first-container"},c.a.createElement("div",{className:"first-container-left-text"},c.a.createElement("span",{className:"first-container-span"},"Have us keep track of all of your transactions. You just enjoy yourself."),c.a.createElement("span",{className:"first-container-span"},"Your one stop app for making better finance decisions for the rest of your life."),c.a.createElement("span",{className:"first-container-span"},"Free and open for all. There's no risk. Give it a try."),c.a.createElement(o.b,{to:"/summary",className:"splash-try-btn"},"Try for free")),c.a.createElement("div",{className:"first-container-image"})),c.a.createElement("div",{className:"splash-second-container"},c.a.createElement("div",{className:"card-container"},c.a.createElement("div",{className:"second-container-card"},c.a.createElement("i",{className:"fas fa-chart-pie"}),c.a.createElement("span",{className:"card-spans-title"},"Visualize"),c.a.createElement("span",{className:"card-spans"},"Visually see your spending with pie charts and line graphs")),c.a.createElement("div",{className:"second-container-card"},c.a.createElement("i",{className:"fas fa-table"}),c.a.createElement("span",{className:"card-spans-title"},"Tabulate"),c.a.createElement("span",{className:"card-spans"},"Arrange your transactions in an easy to organize table")),c.a.createElement("div",{className:"second-container-card"},c.a.createElement("i",{className:"fas fa-money-bill"}),c.a.createElement("span",{className:"card-spans-title"},"Take Control"),c.a.createElement("span",{className:"card-spans"},"Use the data we provide you to make better decisions")))))},x=function(){return c.a.createElement("footer",{className:"footer-container"},c.a.createElement("div",{className:"second-band-background"},c.a.createElement("div",{className:"second-band"},c.a.createElement("div",{className:"second-band-left"},c.a.createElement("div",{className:"second-band-left-div"},c.a.createElement("span",{className:"left-div-title"},"SOCIAL"),c.a.createElement("a",{href:"https://www.linkedin.com/in/thomas-grega-4931711b6/",target:"_blank",className:"footer-personal-link"},"Connect on LinkedIn"),c.a.createElement("a",{href:"https://angel.co/u/thomas-grega",target:"_blank",className:"footer-personal-link"},"Connect on AngelList"),c.a.createElement("a",{href:"https://github.com/thomaslgrega/extra",target:"_blank",className:"footer-personal-link"},"GitHub Repo")),c.a.createElement("div",{className:"second-band-left-div"},c.a.createElement("span",{className:"left-div-title"},"QUICK LINKS"),c.a.createElement(o.b,{to:"/summary",className:"footer-quick-links"},"Summary"),c.a.createElement(o.b,{to:"/transactions",className:"footer-quick-links"},"Transactions"),c.a.createElement(o.b,{to:"/report",className:"footer-quick-links"},"Reports"))),c.a.createElement("div",{className:"second-band-right"},c.a.createElement("span",{className:"second-band-right-title"},"PERSONAL LINKS"),c.a.createElement("div",{className:"second-band-right-links"},c.a.createElement("a",{href:"https://github.com/thomaslgrega",target:"_blank",className:"fab fa-github-square right-band-link"}),c.a.createElement("a",{href:"https://www.linkedin.com/in/thomas-grega-4931711b6/",target:"_blank",className:"fab fa-linkedin right-band-link"}),c.a.createElement("a",{href:"https://angel.co/u/thomas-grega",target:"_blank",className:"fab fa-angellist right-band-link-angellist"}))))),c.a.createElement("div",{className:"third-band"},c.a.createElement("span",null,"Created by Thomas Grega")))};var k=function(){return c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement(l,null),c.a.createElement(i.a,{path:"/",exact:!0,component:O}),c.a.createElement(i.a,{path:"/summary",component:p}),c.a.createElement(i.a,{path:"/transactions",component:E}),c.a.createElement(i.a,{path:"/report",component:N}),c.a.createElement(i.a,{path:"/report",exact:!0,component:v}),c.a.createElement(i.a,{path:"/report/week",component:y}),c.a.createElement(i.a,{path:"/report/month",component:S}),c.a.createElement(i.a,{path:"/",exact:!0,component:x})))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))},58:function(e,a,t){e.exports=t(168)},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.60c64f64.chunk.js.map