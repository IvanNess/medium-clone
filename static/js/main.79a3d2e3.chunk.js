(this["webpackJsonpmedium-clone"]=this["webpackJsonpmedium-clone"]||[]).push([[0],{35:function(e,t,a){e.exports=a(74)},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),l=a.n(r),o=a(2),s=a(3),m=a(1),i=a(10),u=a(5),d=a(32),E=a.n(d),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(n.useState)((function(){return localStorage.getItem(e)||t})),c=Object(m.a)(a,2),r=c[0],l=c[1];return Object(n.useEffect)((function(){localStorage.setItem(e,r)}),[e,r]),[r,l]},p=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(null),o=Object(m.a)(l,2),s=o[0],i=o[1],d=Object(n.useState)(null),p=Object(m.a)(d,2),g=p[0],b=p[1],v=Object(n.useState)({}),N=Object(m.a)(v,2),O=N[0],j=N[1],h=f("token"),y=Object(m.a)(h,1)[0],S=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j(e),r(!0)}),[]);return Object(n.useEffect)((function(){var t=Object(u.a)(Object(u.a)({},O),{headers:{authorization:y?"Token ".concat(y):""}});c&&E()("https://conduit.productionready.io/api"+e,t).then((function(e){r(!1),i(e.data)})).catch((function(e){r(!1),b(e.response.data)}))}),[c,O,e,y]),[{isLoading:c,response:s,error:g},S]},g=function(e){var t=e.tags;return c.a.createElement("ul",{className:"tag-list"},t.map((function(e){return c.a.createElement("li",{className:"tag-default tag-pill tag-outline",key:e},e)})))},b=a(15),v=a.n(b),N=function(e){var t=e.isFavorited,a=e.favoritesCount,n=e.articleSlug,r=p("/articles/".concat(n,"/favorite")),l=Object(m.a)(r,2),o=l[0].response,s=l[1],i=o?o.article.favorited:t,u=o?o.article.favoritesCount:a,d=v()({btn:!0,"btn-sm":!0,"btn-primary":i,"btn-outline-primary":!i});return c.a.createElement("button",{className:d,onClick:function(e){e.preventDefault(),s({method:i?"delete":"post"})}},c.a.createElement("i",{className:"ion-heart"}),c.a.createElement("span",null,"\xa0 ",u))},O=function(e){var t=e.articles;return c.a.createElement("div",null,t.map((function(e,t){return c.a.createElement("div",{className:"article-preview",key:t},c.a.createElement("div",{className:"article-meta"},c.a.createElement(o.b,{to:"".concat("/medium-clone","/profiles/").concat(e.author.username)},c.a.createElement("img",{src:e.author.image,alt:""}))),c.a.createElement("div",{className:"info"},c.a.createElement(o.b,{to:"".concat("/medium-clone","/profiles/").concat(e.author.username)},e.author.userName),c.a.createElement("span",{className:"date"},e.createdAt)),c.a.createElement("div",{className:"pull-xs-right"},c.a.createElement(N,{isFavorited:e.favorited,favoritesCount:e.favoritesCount,articleSlug:e.slug})),c.a.createElement(o.b,{to:"".concat("/medium-clone","/article/").concat(e.slug),className:"preview-link"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.description),c.a.createElement("span",null,"Read more..."),c.a.createElement(g,{tags:e.tagList})))})))},j=a(34),h=function(e){var t=Object(i.parse)(e),a=t.page?Number(t.page):1;return{currentPage:a,offset:10*a-10}},y=function(e){var t=e.page,a=e.currentPage,n=e.url,r=v()({"page-item":!0,active:a===t});return c.a.createElement("li",{className:r},c.a.createElement(o.b,{to:"".concat("/medium-clone","/").concat(n,"?page=").concat(t),className:"page-link"},t))},S=function(e){var t,a,n=e.total,r=e.limit,l=e.url,o=e.currentPage,s=Math.ceil(n/r),m=(t=1,a=s,Object(j.a)(Array(a).keys()).map((function(e){return e+t})));return c.a.createElement("ul",{className:"pagination"},m.map((function(e){return c.a.createElement(y,{page:e,currentPage:o,url:l,key:e})})))},k=function(){var e=p("/tags"),t=Object(m.a)(e,2),a=t[0],r=a.response,l=a.error,s=a.isLoading,i=t[1];return Object(n.useEffect)((function(){i()}),[i]),c.a.createElement("div",null,l&&c.a.createElement("div",null,"Error"),s&&c.a.createElement("div",null,"Loading..."),!s&&r&&c.a.createElement("div",{className:"side-bar"},c.a.createElement("p",null,"Popular Tags"),c.a.createElement("div",{className:"tag-list"},r.tags.map((function(e){return c.a.createElement(o.b,{to:"".concat("/medium-clone","/tags/").concat(e),className:"tag-default tag-pill",key:e},e)})))))},x={isLoading:!1,isLogged:null,currentUser:null},L=function(e,t){var a=t.type,n=t.payload;switch(a){case"LOADING":return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0});case"SET_AUTHORIZED":return Object(u.a)(Object(u.a)({},e),{},{isLogged:!0,isLoading:!1,currentUser:n});case"SET_UNAUTHORIZED":return Object(u.a)(Object(u.a)({},e),{},{isLogged:!1});case"LOGOUT":return Object(u.a)(Object(u.a)({},x),{},{isLogged:!1});default:return e}},C=Object(n.createContext)([{},function(){}]),w=function(e){var t=e.children,a=Object(n.useReducer)(L,x);return c.a.createElement(C.Provider,{value:a},t)},U=function(e){var t=e.tagName,a=Object(n.useContext)(C),r=Object(m.a)(a,1)[0];return c.a.createElement("div",{className:"feed-toggle"},c.a.createElement("ul",{className:"nav nav-pills outline-active"},r.isLogged&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:"".concat("/medium-clone","/feed"),className:"nav-link"},"Your feed")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:"".concat("/medium-clone","/"),className:"nav-link",exact:!0},"Global feed")),t&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:"".concat("/medium-clone","/tags/").concat(t),className:"nav-link"},c.a.createElement("i",{className:"ion-pound"}),t))))},P=function(e){var t=e.location,a=e.match,r=h(t.search),l=r.offset,o=r.currentPage,s=Object(i.stringify)({offset:l,limit:10}),u="/articles?".concat(s),d=p(u),E=Object(m.a)(d,2),f=E[0],g=f.response,b=f.isLoading,v=f.error,N=E[1],j=a.url;return Object(n.useEffect)((function(){N()}),[N,o]),c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"banner"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Medium Clone"),c.a.createElement("p",null," A place to share knowledge"))),c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement(U,null),b&&c.a.createElement("div",null,"Loading..."),v&&c.a.createElement("div",null,"Some Error Happened"),!b&&g&&c.a.createElement(n.Fragment,null,c.a.createElement(O,{articles:g.articles}),c.a.createElement(S,{total:g.articlesCount,limit:10,url:j,currentPage:o}))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(k,null)))))},A=function(e){var t=e.match.params.slug,a="/articles/".concat(t),r=p(a),l=Object(m.a)(r,2),i=l[0],u=i.isLoading,d=i.error,E=i.response,f=l[1],b=p(a),v=Object(m.a)(b,2),N=v[0].response,O=v[1],j=Object(n.useContext)(C),h=Object(m.a)(j,1)[0],y=Object(n.useState)(!1),S=Object(m.a)(y,2),k=S[0],x=S[1];return Object(n.useEffect)((function(){f()}),[f]),Object(n.useEffect)((function(){N&&x(!0)}),[N]),k?c.a.createElement(s.a,{to:"".concat("/medium-clone","/")}):c.a.createElement("div",{className:"article-page"},c.a.createElement("div",{className:"banner"},!u&&E&&c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,E.article.title),c.a.createElement("div",{className:"article-meta"},c.a.createElement(o.b,{to:"".concat("/medium-clone","/profiles/").concat(E.article.author.username)},c.a.createElement("img",{src:E.article.author.image,alt:""}))),c.a.createElement("div",{className:"info"},c.a.createElement(o.b,{to:"".concat("/medium-clone","/profiles/").concat(E.article.author.username)},E.article.author.username),c.a.createElement("span",{className:"date"},E.article.createdAt)),function(){return!(!E||!h.isLogged)&&E.article.author.userName===h.currentUser.userName}&&c.a.createElement("span",null,c.a.createElement(o.b,{to:"".concat("/medium-clone","/article/").concat(E.article.slug,"/edit"),className:"btn btn-outline-secondary btn-sm"},c.a.createElement("i",{className:"ion-edit"}),"Edit Article"),c.a.createElement("button",{className:"btn btn-outline-danger btn-sm",onClick:function(){O({method:"delete"})}},c.a.createElement("i",{className:"ion-trash-a"}),"Delete Article")))),c.a.createElement("div",{className:"container page"},u&&c.a.createElement("div",null,"is Loading"),d&&c.a.createElement("div",null,"Error!!!"),!u&&E&&c.a.createElement("div",{className:"row article-content"},c.a.createElement("div",{className:"col-xs-12"},c.a.createElement("div",null,c.a.createElement("p",null,E.article.body)),c.a.createElement(g,{tags:E.article.tagList})))))},T=function(e){var t=e.location,a=e.match,r=a.params.slug,l=h(t.search),o=l.offset,s=l.currentPage,u=Object(i.stringify)({offset:o,limit:10,tag:r}),d="/articles?".concat(u),E=p(d),f=Object(m.a)(E,2),g=f[0],b=g.response,v=g.isLoading,N=g.error,j=f[1],y=a.url;return console.log("response",b),Object(n.useEffect)((function(){j()}),[j,s,r]),c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"banner"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Medium Clone"),c.a.createElement("p",null," A place to share knowledge"))),c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement(U,{tagName:r}),v&&c.a.createElement("div",null,"Loading..."),N&&c.a.createElement("div",null,"Some Error Happened"),!v&&b&&c.a.createElement(n.Fragment,null,c.a.createElement(O,{articles:b.articles}),c.a.createElement(S,{total:b.articlesCount,limit:10,url:y,currentPage:s}))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(k,null)))))},D=function(e){var t=e.backendErrors,a=Object.keys(t).map((function(e){var a=t[e].join(" ");return"".concat(e," ").concat(a)}));return c.a.createElement("ul",{className:"error-messages"},a.map((function(e){return c.a.createElement("li",{key:e},e)})))},F=function(){var e=Object(n.useContext)(C),t=Object(m.a)(e,2),a=t[0],r=t[1],l=p("/user"),o=Object(m.a)(l,2),i=o[0],d=i.response,E=i.error,g=o[1],b=f("token"),v=Object(m.a)(b,2)[1],N=Object(n.useState)(!1),O=Object(m.a)(N,2),j=O[0],h=O[1],y=Object(n.useState)(""),S=Object(m.a)(y,2),k=S[0],x=S[1],L=Object(n.useState)(""),w=Object(m.a)(L,2),U=w[0],P=w[1],A=Object(n.useState)(""),T=Object(m.a)(A,2),F=T[0],H=T[1],I=Object(n.useState)(""),R=Object(m.a)(I,2),M=R[0],Z=R[1],_=Object(n.useState)(""),G=Object(m.a)(_,2),V=G[0],J=G[1];return Object(n.useEffect)((function(){a.currentUser&&(x(a.currentUser.image),P(a.currentUser.username),H(a.currentUser.bio),Z(a.currentUser.email))}),[a.currentUser]),Object(n.useEffect)((function(){d&&r({type:"SET_AUTHORIZED",payload:d.user})}),[d,r]),j?c.a.createElement(s.a,{to:"".concat("/medium-clone","/")}):c.a.createElement("div",{className:"settings-page"},c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},c.a.createElement("h1",{className:"text-xs-center"},"Your Settings"),E&&c.a.createElement(D,{backendErrors:E.errors}),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g({method:"put",data:{user:Object(u.a)(Object(u.a)({},a.currentUser),{},{image:k,username:U,bio:F,email:M,password:V})}})}},c.a.createElement("fieldset",null,c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"URL of profile picture",value:k,onChange:function(e){return x(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Username",value:U,onChange:function(e){return P(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("textarea",{className:"form-control form-control-lg",rows:"8",placeholder:"Short bio",value:F,onChange:function(e){return H(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Email",value:M,onChange:function(e){return Z(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"password",className:"form-control form-control-lg",placeholder:"Password",value:V,onChange:function(e){return J(e.target.value)}})),c.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary pull-xs-right"},"Update Settings"))),c.a.createElement("hr",null),c.a.createElement("button",{type:"submit",className:"btn btn-outline-danger",onClick:function(e){e.preventDefault(),v(""),r({type:"LOGOUT"}),h(!0)}},"Or click here to logout")))))},H=function(e){var t=e.location,a=e.match,r=h(t.search),l=r.offset,o=r.currentPage,s=Object(i.stringify)({offset:l,limit:10}),u="/articles/feed?".concat(s),d=p(u),E=Object(m.a)(d,2),f=E[0],g=f.response,b=f.isLoading,v=f.error,N=E[1],j=a.url;return Object(n.useEffect)((function(){N()}),[N,o]),c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"banner"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Medium Clone"),c.a.createElement("p",null," A place to share knowledge"))),c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement(U,null),b&&c.a.createElement("div",null,"Loading..."),v&&c.a.createElement("div",null,"Some Error Happened"),!b&&g&&c.a.createElement(n.Fragment,null,c.a.createElement(O,{articles:g.articles}),c.a.createElement(S,{total:g.articlesCount,limit:10,url:j,currentPage:o}))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(k,null)))))},I=function(e){var t=e.onSubmit,a=e.errors,r=e.initialValues;console.log("errors",a);var l=Object(n.useState)(""),o=Object(m.a)(l,2),s=o[0],i=o[1],u=Object(n.useState)(""),d=Object(m.a)(u,2),E=d[0],f=d[1],p=Object(n.useState)(""),g=Object(m.a)(p,2),b=g[0],v=g[1],N=Object(n.useState)(""),O=Object(m.a)(N,2),j=O[0],h=O[1];return Object(n.useEffect)((function(){r&&(i(r.title),f(r.body),v(r.description),h(r.tagList.join(" ")))}),[r]),c.a.createElement("div",{className:"editor-page"},c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"col-md-10 offset-md-1 col-xs-12"},a&&c.a.createElement(D,{backendErrors:a}),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:s,body:E,description:b,tagList:j})}},c.a.createElement("fieldset",null,c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Article title",value:s,onChange:function(e){return i(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"What is this article about?",value:b,onChange:function(e){return v(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("textarea",{className:"form-control",rows:"8",placeholder:"Write your article",value:E,onChange:function(e){return f(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter tags",value:j,onChange:function(e){return h(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("button",{type:"submit",className:"btn btn-lg pull-xs-right btn-primary",placeholder:"article title"},"Publish Article")))))))},R=function(){var e=p("/articles"),t=Object(m.a)(e,2),a=t[0],r=a.error,l=a.response,o=t[1],i=Object(n.useContext)(C),u=Object(m.a)(i,1)[0],d=Object(n.useState)(!1),E=Object(m.a)(d,2),f=E[0],g=E[1];return Object(n.useEffect)((function(){l&&g(!0)}),[l]),!1===u.isLogged?c.a.createElement(s.a,{to:"".concat("/medium-clone","/")}):f?c.a.createElement(s.a,{to:"".concat("/medium-clone","/article/").concat(l.article.slug)}):c.a.createElement("div",null,c.a.createElement(I,{errors:r&&r.errors||{},initialValues:{title:"",description:"",body:"",tagList:[]},onSubmit:function(e){o({method:"post",data:{article:e}})}}))},M=function(e){var t=e.match,a=Object(n.useContext)(C),r=Object(m.a)(a,1)[0],l=t.params.slug,o="/articles/".concat(l),i=p(o),u=Object(m.a)(i,2),d=u[0].response,E=u[1],f=p(o),g=Object(m.a)(f,2),b=g[0],v=b.response,N=b.error,O=g[1],j=Object(n.useState)(null),h=Object(m.a)(j,2),y=h[0],S=h[1],k=Object(n.useState)(!1),x=Object(m.a)(k,2),L=x[0],w=x[1];return Object(n.useEffect)((function(){E()}),[E]),Object(n.useEffect)((function(){if(d){var e=d.article,t=e.title,a=e.body,n=e.description,c=e.tagList;S({title:t,body:a,description:n,tagList:c})}}),[d]),Object(n.useEffect)((function(){v&&w(!0)}),[v]),L?c.a.createElement(s.a,{to:"".concat("/medium-clone","/article/").concat(l)}):!1===r.isLogged?c.a.createElement(s.a,{to:"".concat("/medium-clone","/")}):c.a.createElement(I,{onSubmit:function(e){O({method:"put",data:{article:e}})},errors:N&&N.errors||{},initialValues:y})},Z=function(e){var t=e.match.path==="".concat("/medium-clone","/login"),a=t?"Sign in":"Sign up",r="".concat("/medium-clone",t?"/register":"/login"),l=t?"Need an acount?":"Have an acount?",i=t?"/users/login":"/users",u=Object(n.useState)(""),d=Object(m.a)(u,2),E=d[0],g=d[1],b=Object(n.useState)(""),v=Object(m.a)(b,2),N=v[0],O=v[1],j=Object(n.useState)(""),h=Object(m.a)(j,2),y=h[0],S=h[1],k=Object(n.useState)(!1),x=Object(m.a)(k,2),L=x[0],w=x[1],U=p(i),P=Object(m.a)(U,2),A=P[0],T=A.isLoading,F=A.response,H=A.error,I=P[1],R=f("token"),M=Object(m.a)(R,2)[1],Z=Object(n.useContext)(C),_=Object(m.a)(Z,2),G=(_[0],_[1]);if(Object(n.useEffect)((function(){F&&(M(F.user.token),w(!0),G({type:"SET_AUTHORIZED",payload:F.user}))}),[F,M,G]),L)return c.a.createElement(s.a,{to:"".concat("/medium-clone","/")});return c.a.createElement("div",{className:"auth-page"},c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},c.a.createElement("h1",{className:"text-xs-center"},a),c.a.createElement("p",{className:"text-xs-center"},c.a.createElement(o.b,{to:r},l)),c.a.createElement("form",{onSubmit:function(e){var a=t?{email:E,password:N}:{email:E,password:N,username:y};e.preventDefault(),I({method:"post",data:{user:a}})}},H&&c.a.createElement(D,{backendErrors:H.errors}),c.a.createElement("fieldset",null,!t&&c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Username",value:y,onChange:function(e){return S(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"email",className:"form-control form-control-lg",placeholder:"Email",value:E,onChange:function(e){return g(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"password",className:"form-control form-control-lg",placeholder:"Password",value:N,onChange:function(e){return O(e.target.value)}})),c.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:T},a)))))))},_=function(e){var t=e.username,a=e.location,r=e.isFavorites,l=e.url,o=h(a.search),s=o.offset,u=o.currentPage,d=function(e){var t=e.username,a=e.offset,n=e.isFavorites?{limit:10,offset:a,favorited:t}:{limit:10,offset:a,author:t};return"/articles?".concat(Object(i.stringify)(n))}({username:t,offset:s,isFavorites:r}),E=p(d),f=Object(m.a)(E,2),g=f[0],b=g.response,v=g.isLoading,N=g.error,j=f[1];return Object(n.useEffect)((function(){j()}),[j,r,t]),c.a.createElement("div",null,v&&c.a.createElement("div",null,"is Loading..."),N&&c.a.createElement("div",null,"Error!!!"),!v&&b&&c.a.createElement(n.Fragment,null,c.a.createElement(O,{articles:b.articles}),c.a.createElement(S,{total:b.articlesCount,limit:10,currentPage:u,url:l})))},G=function(e){var t=e.location,a=e.match.params.slug,r=t.pathname.includes("favorites"),l="/profiles/".concat(a),s=p(l),i=Object(m.a)(s,2),u=i[0].response,d=i[1];return Object(n.useEffect)((function(){d()}),[d,a]),u?c.a.createElement("div",{className:"profile-page"},c.a.createElement("div",{className:"user-info"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-md-10 offset-md-1"},c.a.createElement("img",{className:"user-img",alt:"",src:u.profile.image}),c.a.createElement("h4",null,u.profile.username),c.a.createElement("p",null,u.profile.bio))))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-md-10 offset-md-1"},c.a.createElement("div",{className:"article-toggle"},c.a.createElement("ul",{className:"nav nav-pills outline-active"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:"".concat("/medium-clone","/profiles/").concat(u.profile.username),className:"nav-link",exact:!0},"My Posts")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:"".concat("/medium-clone","/profiles/").concat(u.profile.username,"/favorites"),className:"nav-link"},"Favorite Posts")))),c.a.createElement(_,{username:u.profile.username,location:t,isFavorites:r,url:t.pathname}))))):null},V=function(){return c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"".concat("/medium-clone","/profiles/:slug"),component:G}),c.a.createElement(s.b,{path:"".concat("/medium-clone","/profiles/:slug/favorites"),component:G}),c.a.createElement(s.b,{path:"".concat("/medium-clone","/tags/:slug"),component:T}),c.a.createElement(s.b,{path:"".concat("/medium-clone","/feed"),component:H}),c.a.createElement(s.b,{path:"".concat("/medium-clone","/settings"),component:F}),c.a.createElement(s.b,{path:"".concat("/medium-clone","/"),component:P,exact:!0}),c.a.createElement(s.b,{path:"".concat("/medium-clone","/login"),component:Z}),c.a.createElement(s.b,{path:"".concat("/medium-clone","/register"),component:Z}),c.a.createElement(s.b,{path:"".concat("/medium-clone","/article/new"),component:R}),c.a.createElement(s.b,{path:"".concat("/medium-clone","/article/:slug/edit"),component:M}),c.a.createElement(s.b,{path:"".concat("/medium-clone","/article/:slug"),component:A}))},J=function(){var e=Object(n.useContext)(C),t=Object(m.a)(e,1)[0];return c.a.createElement("nav",{className:"navbar navbar-light"},c.a.createElement("div",{className:"container"},c.a.createElement(o.b,{to:"".concat("/medium-clone","/"),className:"navbar-brand"},"Medium"),c.a.createElement("ul",{className:"nav navbar-nav pull-xs-right"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:"".concat("/medium-clone","/"),className:"nav-link",exact:!0},"Home")),!1===t.isLogged&&c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:"".concat("/medium-clone","/login"),className:"nav-link"},"Sign in")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:"".concat("/medium-clone","/register"),className:"nav-link"},"Sign up"))),t.isLogged&&c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:"".concat("/medium-clone","/article/new"),className:"nav-link"},c.a.createElement("i",{className:"ion-compose"}),"\xa0 New Post")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:"".concat("/medium-clone","/settings"),className:"nav-link"},c.a.createElement("i",{className:"ion-gear-a"}),"\xa0 Settings")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{to:"".concat("/medium-clone","/profiles/").concat(t.currentUser.username),className:"nav-link"},c.a.createElement("img",{className:"user-pic",src:t.currentUser.image,alt:""}),"\xa0 ",t.currentUser.username))))))},W=function(e){var t=e.children,a=p("/user"),c=Object(m.a)(a,2),r=c[0].response,l=c[1],o=Object(n.useContext)(C),s=Object(m.a)(o,2)[1],i=f("token"),u=Object(m.a)(i,1)[0];return Object(n.useEffect)((function(){u?(l(),s({type:"LOADING"})):s({type:"SET_UNAUTHORIZED"})}),[s,u,l]),Object(n.useEffect)((function(){r&&s({type:"SET_AUTHORIZED",payload:r.user})}),[r,s]),t};var Y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(w,null,c.a.createElement(W,null,c.a.createElement(o.a,null,c.a.createElement(J,null),c.a.createElement(V,null)))))};l.a.render(c.a.createElement(Y,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.79a3d2e3.chunk.js.map