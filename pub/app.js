var G=function(s,a){for(var d in a)s[d]=a[d];return s},wa=function(s){var a=s.parentNode;a&&a.removeChild(s)},Ha=function(s,a,d){var e,p,x,S={};for(x in a)x=="key"?e=a[x]:x=="ref"?p=a[x]:S[x]=a[x];if(arguments.length>2&&(S.children=arguments.length>3?P.call(arguments,2):d),typeof s=="function"&&s.defaultProps!=null)for(x in s.defaultProps)S[x]===void 0&&(S[x]=s.defaultProps[x]);return z(s,S,e,p,null)},z=function(s,a,d,e,p){var x={type:s,props:a,key:d,ref:e,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:p==null?++ba:p,__i:-1,__u:0};return p==null&&J.vnode!=null&&J.vnode(x),x};var F=function(s){return s.children},$=function(s,a){this.props=s,this.context=a},B=function(s,a){if(a==null)return s.__?B(s.__,s.__i+1):null;for(var d;a<s.__k.length;a++)if((d=s.__k[a])!=null&&d.__e!=null)return d.__e;return typeof s.type=="function"?B(s):null},Na=function(s){var a,d;if((s=s.__)!=null&&s.__c!=null){for(s.__e=s.__c.base=null,a=0;a<s.__k.length;a++)if((d=s.__k[a])!=null&&d.__e!=null){s.__e=s.__c.base=d.__e;break}return Na(s)}},pa=function(s){(!s.__d&&(s.__d=!0)&&q.push(s)&&!L.__r++||ea!==J.debounceRendering)&&((ea=J.debounceRendering)||ga)(L)},L=function(){var s,a,d,e,p,x,S,g;for(q.sort(_);s=q.shift();)s.__d&&(a=q.length,e=void 0,x=(p=(d=s).__v).__e,S=[],g=[],d.__P&&((e=G({},p)).__v=p.__v+1,J.vnode&&J.vnode(e),l(d.__P,e,p,d.__n,d.__P.namespaceURI,32&p.__u?[x]:null,S,x==null?B(p):x,!!(32&p.__u),g),e.__v=p.__v,e.__.__k[e.__i]=e,ya(S,e,g),e.__e!=x&&Na(e)),q.length>a&&q.sort(_));L.__r=0},va=function(s,a,d,e,p,x,S,g,w,b,v){var m,y,N,C,Q,K=e&&e.__k||Sa,E=a.length;for(d.__d=w,za(d,a,K),w=d.__d,m=0;m<E;m++)(N=d.__k[m])!=null&&typeof N!="boolean"&&typeof N!="function"&&(y=N.__i===-1?c:K[N.__i]||c,N.__i=m,l(s,N,y,p,x,S,g,w,b,v),C=N.__e,N.ref&&y.ref!=N.ref&&(y.ref&&u(y.ref,null,N),v.push(N.ref,N.__c||C,N)),Q==null&&C!=null&&(Q=C),65536&N.__u||y.__k===N.__k?w=Ja(N,w,s):typeof N.type=="function"&&N.__d!==void 0?w=N.__d:C&&(w=C.nextSibling),N.__d=void 0,N.__u&=-196609);d.__d=w,d.__e=Q},za=function(s,a,d){var e,p,x,S,g,w=a.length,b=d.length,v=b,m=0;for(s.__k=[],e=0;e<w;e++)S=e+m,(p=s.__k[e]=(p=a[e])==null||typeof p=="boolean"||typeof p=="function"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"||p.constructor==String?z(null,p,null,null,null):r(p)?z(F,{children:p},null,null,null):p.constructor===void 0&&p.__b>0?z(p.type,p.props,p.key,p.ref?p.ref:null,p.__v):p)!=null?(p.__=s,p.__b=s.__b+1,g=$a(p,d,S,v),p.__i=g,x=null,g!==-1&&(v--,(x=d[g])&&(x.__u|=131072)),x==null||x.__v===null?(g==-1&&m--,typeof p.type!="function"&&(p.__u|=65536)):g!==S&&(g==S-1?m--:g==S+1?m++:g>S?v>w-S?m+=g-S:m--:g<S&&(g==S-m?m-=g-S:m++),g!==e+m&&(p.__u|=65536))):(x=d[S])&&x.key==null&&x.__e&&(131072&x.__u)==0&&(x.__e==s.__d&&(s.__d=B(x)),i(x,x,!1),d[S]=null,v--);if(v)for(e=0;e<b;e++)(x=d[e])!=null&&(131072&x.__u)==0&&(x.__e==s.__d&&(s.__d=B(x)),i(x,x))},Ja=function(s,a,d){var e,p;if(typeof s.type=="function"){for(e=s.__k,p=0;e&&p<e.length;p++)e[p]&&(e[p].__=s,a=Ja(e[p],a,d));return a}s.__e!=a&&(a&&s.type&&!d.contains(a)&&(a=B(s)),d.insertBefore(s.__e,a||null),a=s.__e);do a=a&&a.nextSibling;while(a!=null&&a.nodeType===8);return a};var $a=function(s,a,d,e){var{key:p,type:x}=s,S=d-1,g=d+1,w=a[d];if(w===null||w&&p==w.key&&x===w.type&&(131072&w.__u)==0)return d;if(e>(w!=null&&(131072&w.__u)==0?1:0))for(;S>=0||g<a.length;){if(S>=0){if((w=a[S])&&(131072&w.__u)==0&&p==w.key&&x===w.type)return S;S--}if(g<a.length){if((w=a[g])&&(131072&w.__u)==0&&p==w.key&&x===w.type)return g;g++}}return-1},ma=function(s,a,d){a[0]==="-"?s.setProperty(a,d==null?"":d):s[a]=d==null?"":typeof d!="number"||Da.test(a)?d:d+"px"},H=function(s,a,d,e,p){var x;a:if(a==="style")if(typeof d=="string")s.style.cssText=d;else{if(typeof e=="string"&&(s.style.cssText=e=""),e)for(a in e)d&&a in d||ma(s.style,a,"");if(d)for(a in d)e&&d[a]===e[a]||ma(s.style,a,d[a])}else if(a[0]==="o"&&a[1]==="n")x=a!==(a=a.replace(/(PointerCapture)$|Capture$/i,"$1")),a=a.toLowerCase()in s||a==="onFocusOut"||a==="onFocusIn"?a.toLowerCase().slice(2):a.slice(2),s.l||(s.l={}),s.l[a+x]=d,d?e?d.u=e.u:(d.u=t,s.addEventListener(a,x?h:o,x)):s.removeEventListener(a,x?h:o,x);else{if(p=="http://www.w3.org/2000/svg")a=a.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(a!="width"&&a!="height"&&a!="href"&&a!="list"&&a!="form"&&a!="tabIndex"&&a!="download"&&a!="rowSpan"&&a!="colSpan"&&a!="role"&&a!="popover"&&a in s)try{s[a]=d==null?"":d;break a}catch(S){}typeof d=="function"||(d==null||d===!1&&a[4]!=="-"?s.removeAttribute(a):s.setAttribute(a,a=="popover"&&d==1?"":d))}},xa=function(s){return function(a){if(this.l){var d=this.l[a.type+s];if(a.t==null)a.t=t++;else if(a.t<d.u)return;return d(J.event?J.event(a):a)}}},l=function(s,a,d,e,p,x,S,g,w,b){var v,m,y,N,C,Q,K,E,W,R,Z,V,U,da,A,k,Y=a.type;if(a.constructor!==void 0)return null;128&d.__u&&(w=!!(32&d.__u),x=[g=a.__e=d.__e]),(v=J.__b)&&v(a);a:if(typeof Y=="function")try{if(E=a.props,W="prototype"in Y&&Y.prototype.render,R=(v=Y.contextType)&&e[v.__c],Z=v?R?R.props.value:v.__:e,d.__c?K=(m=a.__c=d.__c).__=m.__E:(W?a.__c=m=new Y(E,Z):(a.__c=m=new $(E,Z),m.constructor=Y,m.render=Pa),R&&R.sub(m),m.props=E,m.state||(m.state={}),m.context=Z,m.__n=e,y=m.__d=!0,m.__h=[],m._sb=[]),W&&m.__s==null&&(m.__s=m.state),W&&Y.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=G({},m.__s)),G(m.__s,Y.getDerivedStateFromProps(E,m.__s))),N=m.props,C=m.state,m.__v=a,y)W&&Y.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(),W&&m.componentDidMount!=null&&m.__h.push(m.componentDidMount);else{if(W&&Y.getDerivedStateFromProps==null&&E!==N&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(E,Z),!m.__e&&(m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(E,m.__s,Z)===!1||a.__v===d.__v)){for(a.__v!==d.__v&&(m.props=E,m.state=m.__s,m.__d=!1),a.__e=d.__e,a.__k=d.__k,a.__k.forEach(function(D){D&&(D.__=a)}),V=0;V<m._sb.length;V++)m.__h.push(m._sb[V]);m._sb=[],m.__h.length&&S.push(m);break a}m.componentWillUpdate!=null&&m.componentWillUpdate(E,m.__s,Z),W&&m.componentDidUpdate!=null&&m.__h.push(function(){m.componentDidUpdate(N,C,Q)})}if(m.context=Z,m.props=E,m.__P=s,m.__e=!1,U=J.__r,da=0,W){for(m.state=m.__s,m.__d=!1,U&&U(a),v=m.render(m.props,m.state,m.context),A=0;A<m._sb.length;A++)m.__h.push(m._sb[A]);m._sb=[]}else do m.__d=!1,U&&U(a),v=m.render(m.props,m.state,m.context),m.state=m.__s;while(m.__d&&++da<25);m.state=m.__s,m.getChildContext!=null&&(e=G(G({},e),m.getChildContext())),W&&!y&&m.getSnapshotBeforeUpdate!=null&&(Q=m.getSnapshotBeforeUpdate(N,C)),va(s,r(k=v!=null&&v.type===F&&v.key==null?v.props.children:v)?k:[k],a,d,e,p,x,S,g,w,b),m.base=a.__e,a.__u&=-161,m.__h.length&&S.push(m),K&&(m.__E=m.__=null)}catch(D){if(a.__v=null,w||x!=null){for(a.__u|=w?160:32;g&&g.nodeType===8&&g.nextSibling;)g=g.nextSibling;x[x.indexOf(g)]=null,a.__e=g}else a.__e=d.__e,a.__k=d.__k;J.__e(D,a,d)}else x==null&&a.__v===d.__v?(a.__k=d.__k,a.__e=d.__e):a.__e=La(d.__e,a,d,e,p,x,S,w,b);(v=J.diffed)&&v(a)},ya=function(s,a,d){a.__d=void 0;for(var e=0;e<d.length;e++)u(d[e],d[++e],d[++e]);J.__c&&J.__c(a,s),s.some(function(p){try{s=p.__h,p.__h=[],s.some(function(x){x.call(p)})}catch(x){J.__e(x,p.__v)}})},La=function(s,a,d,e,p,x,S,g,w){var b,v,m,y,N,C,Q,K=d.props,E=a.props,W=a.type;if(W==="svg"?p="http://www.w3.org/2000/svg":W==="math"?p="http://www.w3.org/1998/Math/MathML":p||(p="http://www.w3.org/1999/xhtml"),x!=null){for(b=0;b<x.length;b++)if((N=x[b])&&"setAttribute"in N==!!W&&(W?N.localName===W:N.nodeType===3)){s=N,x[b]=null;break}}if(s==null){if(W===null)return document.createTextNode(E);s=document.createElementNS(p,W,E.is&&E),x=null,g=!1}if(W===null)K===E||g&&s.data===E||(s.data=E);else{if(x=x&&P.call(s.childNodes),K=d.props||c,!g&&x!=null)for(K={},b=0;b<s.attributes.length;b++)K[(N=s.attributes[b]).name]=N.value;for(b in K)if(N=K[b],b=="children");else if(b=="dangerouslySetInnerHTML")m=N;else if(b!=="key"&&!(b in E)){if(b=="value"&&"defaultValue"in E||b=="checked"&&"defaultChecked"in E)continue;H(s,b,null,N,p)}for(b in E)N=E[b],b=="children"?y=N:b=="dangerouslySetInnerHTML"?v=N:b=="value"?C=N:b=="checked"?Q=N:b==="key"||g&&typeof N!="function"||K[b]===N||H(s,b,N,K[b],p);if(v)g||m&&(v.__html===m.__html||v.__html===s.innerHTML)||(s.innerHTML=v.__html),a.__k=[];else if(m&&(s.innerHTML=""),va(s,r(y)?y:[y],a,d,e,W==="foreignObject"?"http://www.w3.org/1999/xhtml":p,x,S,x?x[0]:d.__k&&B(d,0),g,w),x!=null)for(b=x.length;b--;)x[b]!=null&&wa(x[b]);g||(b="value",C!==void 0&&(C!==s[b]||W==="progress"&&!C||W==="option"&&C!==K[b])&&H(s,b,C,K[b],p),b="checked",Q!==void 0&&Q!==s[b]&&H(s,b,Q,K[b],p))}return s},u=function(s,a,d){try{if(typeof s=="function"){var e=typeof s.__u=="function";e&&s.__u(),e&&a==null||(s.__u=s(a))}else s.current=a}catch(p){J.__e(p,d)}},i=function(s,a,d){var e,p;if(J.unmount&&J.unmount(s),(e=s.ref)&&(e.current&&e.current!==s.__e||u(e,null,a)),(e=s.__c)!=null){if(e.componentWillUnmount)try{e.componentWillUnmount()}catch(x){J.__e(x,a)}e.base=e.__P=null}if(e=s.__k)for(p=0;p<e.length;p++)e[p]&&i(e[p],a,d||typeof s.type!="function");d||s.__e==null||wa(s.__e),s.__c=s.__=s.__e=s.__d=void 0},Pa=function(s,a,d){return this.constructor(s,d)},Ea=function(s,a,d){var e,p,x,S;J.__&&J.__(s,a),p=(e=typeof d=="function")?null:d&&d.__k||a.__k,x=[],S=[],l(a,s=(!e&&d||a).__k=Ha(F,null,[s]),p||c,c,a.namespaceURI,!e&&d?[d]:p?null:a.firstChild?P.call(a.childNodes):null,x,!e&&d?d:p?p.__e:a.firstChild,e,S),ya(x,s,S)};var P,J,ba,Va,q,ea,ga,_,t,o,h,Aa,c={},Sa=[],Da=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,r=Array.isArray;P=Sa.slice,J={__e:function(s,a,d,e){for(var p,x,S;a=a.__;)if((p=a.__c)&&!p.__)try{if((x=p.constructor)&&x.getDerivedStateFromError!=null&&(p.setState(x.getDerivedStateFromError(s)),S=p.__d),p.componentDidCatch!=null&&(p.componentDidCatch(s,e||{}),S=p.__d),S)return p.__E=p}catch(g){s=g}throw s}},ba=0,Va=function(s){return s!=null&&s.constructor==null},$.prototype.setState=function(s,a){var d;d=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=G({},this.state),typeof s=="function"&&(s=s(G({},d),this.props)),s&&G(d,s),s!=null&&this.__v&&(a&&this._sb.push(a),pa(this))},$.prototype.forceUpdate=function(s){this.__v&&(this.__e=!0,s&&this.__h.push(s),pa(this))},$.prototype.render=F,q=[],ga=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_=function(s,a){return s.__v.__b-a.__v.__b},L.__r=0,t=0,o=xa(!1),h=xa(!0),Aa=0;var sa=function(s,a){j.__h&&j.__h(X,s,T||a),T=0;var d=X.__H||(X.__H={__:[],__h:[]});return s>=d.__.length&&d.__.push({}),d.__[s]},M=function(s){return T=1,fa(Fa,s)},fa=function(s,a,d){var e=sa(I++,2);if(e.t=s,!e.__c&&(e.__=[d?d(a):Fa(void 0,a),function(g){var w=e.__N?e.__N[0]:e.__[0],b=e.t(w,g);w!==b&&(e.__N=[b,e.__[1]],e.__c.setState({}))}],e.__c=X,!X.u)){var p=function(g,w,b){if(!e.__c.__H)return!0;var v=e.__c.__H.__.filter(function(y){return!!y.__c});if(v.every(function(y){return!y.__N}))return!x||x.call(this,g,w,b);var m=!1;return v.forEach(function(y){if(y.__N){var N=y.__[0];y.__=y.__N,y.__N=void 0,N!==y.__[0]&&(m=!0)}}),!(!m&&e.__c.props===g)&&(!x||x.call(this,g,w,b))};X.u=!0;var{shouldComponentUpdate:x,componentWillUpdate:S}=X;X.componentWillUpdate=function(g,w,b){if(this.__e){var v=x;x=void 0,p(g,w,b),x=v}S&&S.call(this,g,w,b)},X.shouldComponentUpdate=p}return e.__N||e.__},Ga=function(s,a){var d=sa(I++,3);!j.__s&&Ba(d.__H,a)&&(d.__=s,d.i=a,X.__H.__h.push(d))};var qa=function(s){return T=5,Ta(function(){return{current:s}},[])};var Ta=function(s,a){var d=sa(I++,7);return Ba(d.__H,a)&&(d.__=s(),d.__H=a,d.__h=s),d.__};var Ma=function(){for(var s;s=Za.shift();)if(s.__P&&s.__H)try{s.__H.__h.forEach(f),s.__H.__h.forEach(aa),s.__H.__h=[]}catch(a){s.__H.__h=[],j.__e(a,s.__v)}},ka=function(s){var a,d=function(){clearTimeout(e),Ya&&cancelAnimationFrame(a),setTimeout(s)},e=setTimeout(d,100);Ya&&(a=requestAnimationFrame(d))},f=function(s){var a=X,d=s.__c;typeof d=="function"&&(s.__c=void 0,d()),X=a},aa=function(s){var a=X;s.__c=s.__(),X=a},Ba=function(s,a){return!s||s.length!==a.length||a.some(function(d,e){return d!==s[e]})},Fa=function(s,a){return typeof a=="function"?a(s):a},I,X,n,Oa,T=0,Za=[],j=J,Wa=j.__b,Xa=j.__r,ja=j.diffed,Ca=j.__c,Ka=j.unmount,Qa=j.__;j.__b=function(s){X=null,Wa&&Wa(s)},j.__=function(s,a){s&&a.__k&&a.__k.__m&&(s.__m=a.__k.__m),Qa&&Qa(s,a)},j.__r=function(s){Xa&&Xa(s),I=0;var a=(X=s.__c).__H;a&&(n===X?(a.__h=[],X.__h=[],a.__.forEach(function(d){d.__N&&(d.__=d.__N),d.i=d.__N=void 0})):(a.__h.forEach(f),a.__h.forEach(aa),a.__h=[],I=0)),n=X},j.diffed=function(s){ja&&ja(s);var a=s.__c;a&&a.__H&&(a.__H.__h.length&&(Za.push(a)!==1&&Oa===j.requestAnimationFrame||((Oa=j.requestAnimationFrame)||ka)(Ma)),a.__H.__.forEach(function(d){d.i&&(d.__H=d.i),d.i=void 0})),n=X=null},j.__c=function(s,a){a.some(function(d){try{d.__h.forEach(f),d.__h=d.__h.filter(function(e){return!e.__||aa(e)})}catch(e){a.some(function(p){p.__h&&(p.__h=[])}),a=[],j.__e(e,d.__v)}}),Ca&&Ca(s,a)},j.unmount=function(s){Ka&&Ka(s);var a,d=s.__c;d&&d.__H&&(d.__H.__.forEach(function(e){try{f(e)}catch(p){a=p}}),d.__H=void 0,a&&j.__e(a,d.__v))};var Ya=typeof requestAnimationFrame=="function";var Ia=function(...s){return s.filter(Boolean).join(" ")},oa=function({className:s,...a}){return O("div",{className:Ia("rounded-lg border bg-card text-card-foreground shadow-sm",s),...a},void 0,!1,void 0,this)};var Ua=function({className:s,...a}){return O("h3",{className:Ia("text-2xl font-semibold leading-none tracking-tight mb-4",s),...a},void 0,!1,void 0,this)};var O=function(s,a,d,e,p,x){a||(a={});var S,g,w=a;if("ref"in w)for(g in w={},a)g=="ref"?S=a[g]:w[g]=a[g];var b={type:s,props:w,key:d,ref:S,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--_a,__i:-1,__u:0,__source:p,__self:x};if(typeof s=="function"&&(S=s.defaultProps))for(g in S)w[g]===void 0&&(w[g]=S[g]);return J.vnode&&J.vnode(b),b};var _a=0,la=Array.isArray;var Ra=new WebSocket("/ws");function ca(){const[s,a]=M(),[d,e]=M([]),[p,x]=M(),S=qa(null);async function g(){const b=await fetch("/api/stats");a(await b.json())}async function w(){if(!S.current?.value?.trim())return;const b=await fetch("/api/bombardier",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({password:S.current.value})});x(await b.text())}return Ga(()=>{Ra.onopen=()=>{console.log("Connected")},Ra.onmessage=(b)=>{e(JSON.parse(b.data))},g()},[]),O("main",{class:"flex flex-col container mx-auto max-w-xl py-24",children:[O("h1",{class:"text-6xl font-bold tracking-tight mb-12 self-center",children:"Raspi @ Sapla"},void 0,!1,void 0,this),O(oa,{children:O("div",{class:"flex flex-col space-y-8 p-6",children:[O("section",{class:"flex flex-col gap-y-1",children:[O(Ua,{children:"System"},void 0,!1,void 0,this),s&&Object.entries(s).map(([b,v])=>O("div",{class:"flex justify-between",children:[O("span",{class:"text-muted-foreground",children:[b,":"]},void 0,!0,void 0,this),O("span",{children:v},void 0,!1,void 0,this)]},void 0,!0,void 0,this))]},void 0,!0,void 0,this),O("section",{class:"flex flex-col gap-y-2",children:[O(Ua,{children:"Usage"},void 0,!1,void 0,this),d.map((b,v)=>O("div",{class:"flex flex-col",children:[O("div",{class:"flex text-muted-foreground text-sm mb-1 justify-between",children:["Core ",v,O("span",{children:[b.toFixed(2),"%"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),O("div",{class:"relative flex h-4 items-center justify-center bg-primary/20 rounded-full overflow-hidden",children:O("div",{class:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(b||0)}%)`}},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this))]},void 0,!0,void 0,this),O("section",{children:[O("button",{className:"flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/80",onClick:()=>w(),children:"Bombardier"},void 0,!1,void 0,this),O("input",{ref:S,class:"rounded-md px-4 py-2 mt-2",type:"password",placeholder:"Password"},void 0,!1,void 0,this),O("pre",{class:"text-sm mt-2 overflow-auto",children:p},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)}Ea(O(ca,{},void 0,!1,void 0,this),document.body);export{ca as default};
