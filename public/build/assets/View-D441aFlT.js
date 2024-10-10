import{A as re}from"./AppLayout-C_0tXS6j.js";import{s as $}from"./vue-multiselect.css_vue_type_style_index_0_src_true_lang-B0IMtBhF.js";import{A as H,L as B,d as I,M as J,z as ne,y as ie,i as oe,j as A,o as C,c as S,w as E,a as k,b,e as x,t as X,f as y,u as N,g as ae,l as se}from"./app-HJaQnsHa.js";import"./index-DajnbktX.js";import ue from"./PrintCSF-C5kbFvhV.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./dar-logo-B4Huuyod.js";/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var Q=function(){return Q=Object.assign||function(l){for(var s,d=1,f=arguments.length;d<f;d++){s=arguments[d];for(var v in s)Object.prototype.hasOwnProperty.call(s,v)&&(l[v]=s[v])}return l},Q.apply(this,arguments)};var z;(function(u){var l=function(){function n(e,t,r,i){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(i<-1||i>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var a=[],o=0;o<this.size;o++)a.push(!1);for(var o=0;o<this.size;o++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();var c=this.addEccAndInterleave(r);if(this.drawCodewords(c),i==-1)for(var h=1e9,o=0;o<8;o++){this.applyMask(o),this.drawFormatBits(o);var w=this.getPenaltyScore();w<h&&(i=o,h=w),this.applyMask(o)}f(0<=i&&i<=7),this.mask=i,this.applyMask(i),this.drawFormatBits(i),this.isFunction=[]}return n.encodeText=function(e,t){var r=u.QrSegment.makeSegments(e);return n.encodeSegments(r,t)},n.encodeBinary=function(e,t){var r=u.QrSegment.makeBytes(e);return n.encodeSegments([r],t)},n.encodeSegments=function(e,t,r,i,a,o){if(r===void 0&&(r=1),i===void 0&&(i=40),a===void 0&&(a=-1),o===void 0&&(o=!0),!(n.MIN_VERSION<=r&&r<=i&&i<=n.MAX_VERSION)||a<-1||a>7)throw new RangeError("Invalid value");var c,h;for(c=r;;c++){var w=n.getNumDataCodewords(c,t)*8,p=v.getTotalBits(e,c);if(p<=w){h=p;break}if(c>=i)throw new RangeError("Data too long")}for(var _=0,M=[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH];_<M.length;_++){var R=M[_];o&&h<=n.getNumDataCodewords(c,R)*8&&(t=R)}for(var m=[],g=0,L=e;g<L.length;g++){var P=L[g];s(P.mode.modeBits,4,m),s(P.numChars,P.mode.numCharCountBits(c),m);for(var U=0,D=P.getData();U<D.length;U++){var ee=D[U];m.push(ee)}}f(m.length==h);var V=n.getNumDataCodewords(c,t)*8;f(m.length<=V),s(0,Math.min(4,V-m.length),m),s(0,(8-m.length%8)%8,m),f(m.length%8==0);for(var K=236;m.length<V;K^=253)s(K,8,m);for(var F=[];F.length*8<m.length;)F.push(0);return m.forEach(function(te,W){return F[W>>>3]|=te<<7-(W&7)}),new n(c,t,F,a)},n.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},n.prototype.getModules=function(){return this.modules},n.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,e=0;e<r;e++)for(var i=0;i<r;i++)e==0&&i==0||e==0&&i==r-1||e==r-1&&i==0||this.drawAlignmentPattern(t[e],t[i]);this.drawFormatBits(0),this.drawVersion()},n.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,i=0;i<10;i++)r=r<<1^(r>>>9)*1335;var a=(t<<10|r)^21522;f(a>>>15==0);for(var i=0;i<=5;i++)this.setFunctionModule(8,i,d(a,i));this.setFunctionModule(8,7,d(a,6)),this.setFunctionModule(8,8,d(a,7)),this.setFunctionModule(7,8,d(a,8));for(var i=9;i<15;i++)this.setFunctionModule(14-i,8,d(a,i));for(var i=0;i<8;i++)this.setFunctionModule(this.size-1-i,8,d(a,i));for(var i=8;i<15;i++)this.setFunctionModule(8,this.size-15+i,d(a,i));this.setFunctionModule(8,this.size-8,!0)},n.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;f(r>>>18==0);for(var t=0;t<18;t++){var i=d(r,t),a=this.size-11+t%3,o=Math.floor(t/3);this.setFunctionModule(a,o,i),this.setFunctionModule(o,a,i)}}},n.prototype.drawFinderPattern=function(e,t){for(var r=-4;r<=4;r++)for(var i=-4;i<=4;i++){var a=Math.max(Math.abs(i),Math.abs(r)),o=e+i,c=t+r;0<=o&&o<this.size&&0<=c&&c<this.size&&this.setFunctionModule(o,c,a!=2&&a!=4)}},n.prototype.drawAlignmentPattern=function(e,t){for(var r=-2;r<=2;r++)for(var i=-2;i<=2;i++)this.setFunctionModule(e+i,t+r,Math.max(Math.abs(i),Math.abs(r))!=1)},n.prototype.setFunctionModule=function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0},n.prototype.addEccAndInterleave=function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var i=n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],a=n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],o=Math.floor(n.getNumRawDataModules(t)/8),c=i-o%i,h=Math.floor(o/i),w=[],p=n.reedSolomonComputeDivisor(a),_=0,M=0;_<i;_++){var R=e.slice(M,M+h-a+(_<c?0:1));M+=R.length;var m=n.reedSolomonComputeRemainder(R,p);_<c&&R.push(0),w.push(R.concat(m))}for(var g=[],L=function(P){w.forEach(function(U,D){(P!=h-a||D>=c)&&g.push(U[P])})},_=0;_<w[0].length;_++)L(_);return f(g.length==o),g},n.prototype.drawCodewords=function(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var i=0;i<this.size;i++)for(var a=0;a<2;a++){var o=r-a,c=(r+1&2)==0,h=c?this.size-1-i:i;!this.isFunction[h][o]&&t<e.length*8&&(this.modules[h][o]=d(e[t>>>3],7-(t&7)),t++)}}f(t==e.length*8)},n.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var i=void 0;switch(e){case 0:i=(r+t)%2==0;break;case 1:i=t%2==0;break;case 2:i=r%3==0;break;case 3:i=(r+t)%3==0;break;case 4:i=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:i=r*t%2+r*t%3==0;break;case 6:i=(r*t%2+r*t%3)%2==0;break;case 7:i=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&i&&(this.modules[t][r]=!this.modules[t][r])}},n.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,i=0,a=[0,0,0,0,0,0,0],o=0;o<this.size;o++)this.modules[t][o]==r?(i++,i==5?e+=n.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),r||(e+=this.finderPenaltyCountPatterns(a)*n.PENALTY_N3),r=this.modules[t][o],i=1);e+=this.finderPenaltyTerminateAndCount(r,i,a)*n.PENALTY_N3}for(var o=0;o<this.size;o++){for(var r=!1,c=0,a=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][o]==r?(c++,c==5?e+=n.PENALTY_N1:c>5&&e++):(this.finderPenaltyAddHistory(c,a),r||(e+=this.finderPenaltyCountPatterns(a)*n.PENALTY_N3),r=this.modules[t][o],c=1);e+=this.finderPenaltyTerminateAndCount(r,c,a)*n.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var o=0;o<this.size-1;o++){var h=this.modules[t][o];h==this.modules[t][o+1]&&h==this.modules[t+1][o]&&h==this.modules[t+1][o+1]&&(e+=n.PENALTY_N2)}for(var w=0,p=0,_=this.modules;p<_.length;p++){var M=_[p];w=M.reduce(function(g,L){return g+(L?1:0)},w)}var R=this.size*this.size,m=Math.ceil(Math.abs(w*20-R*10)/R)-1;return f(0<=m&&m<=9),e+=m*n.PENALTY_N4,f(0<=e&&e<=2568888),e},n.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],i=this.size-7;r.length<e;i-=t)r.splice(1,0,i);return r},n.getNumRawDataModules=function(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return f(208<=t&&t<=29648),t},n.getNumDataCodewords=function(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},n.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var i=1,r=0;r<e;r++){for(var a=0;a<t.length;a++)t[a]=n.reedSolomonMultiply(t[a],i),a+1<t.length&&(t[a]^=t[a+1]);i=n.reedSolomonMultiply(i,2)}return t},n.reedSolomonComputeRemainder=function(e,t){for(var r=t.map(function(h){return 0}),i=function(h){var w=h^r.shift();r.push(0),t.forEach(function(p,_){return r[_]^=n.reedSolomonMultiply(p,w)})},a=0,o=e;a<o.length;a++){var c=o[a];i(c)}return r},n.reedSolomonMultiply=function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var r=0,i=7;i>=0;i--)r=r<<1^(r>>>7)*285,r^=(t>>>i&1)*e;return f(r>>>8==0),r},n.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];f(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)},n.prototype.finderPenaltyTerminateAndCount=function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)},n.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],n}();u.QrCode=l;function s(n,e,t){if(e<0||e>31||n>>>e)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)t.push(n>>>r&1)}function d(n,e){return(n>>>e&1)!=0}function f(n){if(!n)throw new Error("Assertion error")}var v=function(){function n(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return n.makeBytes=function(e){for(var t=[],r=0,i=e;r<i.length;r++){var a=i[r];s(a,8,t)}return new n(n.Mode.BYTE,e.length,t)},n.makeNumeric=function(e){if(!n.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var i=Math.min(e.length-r,3);s(parseInt(e.substring(r,r+i),10),i*3+1,t),r+=i}return new n(n.Mode.NUMERIC,e.length,t)},n.makeAlphanumeric=function(e){if(!n.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var i=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;i+=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),s(i,11,t)}return r<e.length&&s(n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new n(n.Mode.ALPHANUMERIC,e.length,t)},n.makeSegments=function(e){return e==""?[]:n.isNumeric(e)?[n.makeNumeric(e)]:n.isAlphanumeric(e)?[n.makeAlphanumeric(e)]:[n.makeBytes(n.toUtf8ByteArray(e))]},n.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)s(e,8,t);else if(e<16384)s(2,2,t),s(e,14,t);else if(e<1e6)s(6,3,t),s(e,21,t);else throw new RangeError("ECI assignment value out of range");return new n(n.Mode.ECI,0,t)},n.isNumeric=function(e){return n.NUMERIC_REGEX.test(e)},n.isAlphanumeric=function(e){return n.ALPHANUMERIC_REGEX.test(e)},n.prototype.getData=function(){return this.bitData.slice()},n.getTotalBits=function(e,t){for(var r=0,i=0,a=e;i<a.length;i++){var o=a[i],c=o.mode.numCharCountBits(t);if(o.numChars>=1<<c)return 1/0;r+=4+c+o.bitData.length}return r},n.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t},n.NUMERIC_REGEX=/^[0-9]*$/,n.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,n.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",n}();u.QrSegment=v})(z||(z={}));(function(u){(function(l){var s=function(){function d(f,v){this.ordinal=f,this.formatBits=v}return d.LOW=new d(0,1),d.MEDIUM=new d(1,0),d.QUARTILE=new d(2,3),d.HIGH=new d(3,2),d}();l.Ecc=s})(u.QrCode||(u.QrCode={}))})(z||(z={}));(function(u){(function(l){var s=function(){function d(f,v){this.modeBits=f,this.numBitsCharCount=v}return d.prototype.numCharCountBits=function(f){return this.numBitsCharCount[Math.floor((f+7)/17)]},d.NUMERIC=new d(1,[10,12,14]),d.ALPHANUMERIC=new d(2,[9,11,13]),d.BYTE=new d(4,[8,16,16]),d.KANJI=new d(8,[8,10,12]),d.ECI=new d(7,[0,0,0]),d}();l.Mode=s})(u.QrSegment||(u.QrSegment={}))})(z||(z={}));var O=z,Z="H",Y={L:O.QrCode.Ecc.LOW,M:O.QrCode.Ecc.MEDIUM,Q:O.QrCode.Ecc.QUARTILE,H:O.QrCode.Ecc.HIGH},de=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function q(u){return u in Y}function j(u,l){l===void 0&&(l=0);var s=[];return u.forEach(function(d,f){var v=null;d.forEach(function(n,e){if(!n&&v!==null){s.push("M".concat(v+l," ").concat(f+l,"h").concat(e-v,"v1H").concat(v+l,"z")),v=null;return}if(e===d.length-1){if(!n)return;v===null?s.push("M".concat(e+l,",").concat(f+l," h1v1H").concat(e+l,"z")):s.push("M".concat(v+l,",").concat(f+l," h").concat(e+1-v,"v1H").concat(v+l,"z"));return}n&&v===null&&(v=e)})}),s.join("")}var G={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:Z,validator:function(u){return q(u)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},ce=Q(Q({},G),{renderAs:{type:String,required:!1,default:"canvas",validator:function(u){return["canvas","svg"].indexOf(u)>-1}}}),fe=H({name:"QRCodeSvg",props:G,setup:function(u){var l=I(0),s=I(""),d=function(){var f=u.value,v=u.level,n=u.margin,e=O.QrCode.encodeText(f,Y[v]).getModules();l.value=e.length+n*2,s.value=j(e,n)};return d(),J(d),function(){return B("svg",{width:u.size,height:u.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(l.value," ").concat(l.value)},[B("path",{fill:u.background,d:"M0,0 h".concat(l.value,"v").concat(l.value,"H0z")}),B("path",{fill:u.foreground,d:s.value})])}}}),ve=H({name:"QRCodeCanvas",props:G,setup:function(u){var l=I(null),s=function(){var d=u.value,f=u.level,v=u.size,n=u.margin,e=u.background,t=u.foreground,r=l.value;if(r){var i=r.getContext("2d");if(i){var a=O.QrCode.encodeText(d,Y[f]).getModules(),o=a.length+n*2,c=window.devicePixelRatio||1,h=v/o*c;r.height=r.width=v*c,i.scale(h,h),i.fillStyle=e,i.fillRect(0,0,o,o),i.fillStyle=t,de?i.fill(new Path2D(j(a,n))):a.forEach(function(w,p){w.forEach(function(_,M){_&&i.fillRect(M+n,p+n,1,1)})})}}};return ne(s),J(s),function(){return B("canvas",{ref:l,style:{width:"".concat(u.size,"px"),height:"".concat(u.size,"px")}})}}}),T=H({name:"Qrcode",render:function(){var u=this.$props,l=u.renderAs,s=u.value,d=u.size,f=u.margin,v=u.level,n=u.background,e=u.foreground,t=d>>>0,r=f>>>0,i=q(v)?v:Z;return B(l==="svg"?fe:ve,{value:s,size:t,margin:r,level:i,background:n,foreground:e})},props:ce});const he={class:"py-10",style:{"margin-left":"80px","margin-right":"80px"}},_e={class:"max-w-7x1 mx-auto sm:px-6 lg:px-8"},me={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},ge={key:0},pe={key:1},we={class:"p-5 m-5",label:"URL"},be={key:0},Ee={style:{display:"flex","justify-content":"center","align-items":"center"},class:"mb-10"},Ce={__name:"View",props:{service:Object,unit:Object,unit_pstos:Object,sub_unit_pstos:Object,sub_unit_types:Object,user:Object},setup(u){const l=u,s=ie({generated_url:null,selected_sub_unit:"",selected_unit_psto:"",selected_sub_unit_psto:"",sub_unit_type:"",client_type:""}),d=async a=>{const o=new URLSearchParams(window.location.search);o.set("sub_unit_id",a);const c=`/csi/view?${o.toString()}`;await se.visit(c,{preserveState:!0,preserveScroll:!0})};oe(()=>s.selected_sub_unit,a=>{d(a.id)});const f=I(null),v=I(!1),n=async(a,o,c,h)=>{v.value=!0,l.unit.data[0].id==8?(f.value=4,s.generated_url=e+"/services/csf?region_id="+l.user.region_id+"&service_id="+l.service.id+"&unit_id="+l.unit.data[0].id+"&client_type="+s.client_type):o?(f.value=3,s.generated_url=e+"/services/csf?region_id="+l.user.region_id+"&service_id="+l.service.id+"&unit_id="+l.unit.data[0].id+"&psto_id="+o.id):c&&c?(f.value=2,s.generated_url=e+"/services/csf?region_id="+l.user.region_id+"&service_id="+l.service.id+"&unit_id="+l.unit.data[0].id+"&sub_unit_id="+a.id+"&psto_id="+c.id):a?h?(f.value=1.1,s.generated_url=e+"/services/csf?region_id="+l.user.region_id+"&service_id="+l.service.id+"&unit_id="+l.unit.data[0].id+"&sub_unit_id="+a.id+"&sub_unit_type="+s.sub_unit_type.type_name):(f.value=1.2,s.generated_url=e+"/services/csf?region_id="+l.user.region_id+"&service_id="+l.service.id+"&unit_id="+l.unit.data[0].id+"&sub_unit_id="+a.id):(f.value=0,s.generated_url=e+"/services/csf?region_id="+l.user.region_id+"&service_id="+l.service.id+"&unit_id="+l.unit.data[0].id)},e=window.location.origin,t=I(!1),r=()=>{const a=document.createElement("textarea");a.value=s.generated_url,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),t.value=!0,setTimeout(()=>{t.value=!1},2e3)},i=I(!1);return(a,o)=>{const c=A("v-divider"),h=A("v-card-title"),w=A("v-card"),p=A("v-col"),_=A("v-btn"),M=A("v-row"),R=A("v-text-field"),m=A("v-card-body");return C(),S(re,{title:"Dashboard"},{header:E(()=>o[7]||(o[7]=[k("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," View ",-1)])),default:E(()=>[k("div",he,[k("div",_e,[k("div",me,[b(w,{class:"mb-3"},{default:E(()=>[b(h,{class:"m-3"},{default:E(()=>[u.service?(C(),x("div",ge," SERVICES : "+X(u.service.services_name),1)):y("",!0),b(c,{class:"border-opacity-100"}),u.unit?(C(),x("div",pe," SERVICE UNIT : "+X(l.unit.data[0].unit_name),1)):y("",!0)]),_:1})]),_:1}),b(w,{class:"mb-3",height:"600px"},{default:E(()=>[b(m,{class:"overflow-visible"},{default:E(()=>[b(M,{class:"p-5",key:""},{default:E(()=>[u.unit.data[0].sub_units.length>0?(C(),S(p,{key:0,class:"my-auto ml-5"},{default:E(()=>[b(N($),{modelValue:s.selected_sub_unit,"onUpdate:modelValue":o[0]||(o[0]=g=>s.selected_sub_unit=g),"prepend-icon":"mdi-account",options:u.unit.data[0].sub_units,multiple:!1,placeholder:"Select Sub Unit*",label:"sub_unit_name","track-by":"sub_unit_name","allow-empty":!1},null,8,["modelValue","options"])]),_:1})):y("",!0),u.unit_pstos.length>0?(C(),S(p,{key:1,class:"my-auto mr-5 ml-5"},{default:E(()=>[b(N($),{modelValue:s.selected_unit_psto,"onUpdate:modelValue":o[1]||(o[1]=g=>s.selected_unit_psto=g),options:u.unit_pstos,multiple:!1,placeholder:"Select Unit PSTO",label:"psto_name","track-by":"psto_name","allow-empty":!1},null,8,["modelValue","options"])]),_:1})):y("",!0),u.sub_unit_pstos.length>0?(C(),S(p,{key:2,class:"my-auto mr-5"},{default:E(()=>[b(N($),{modelValue:s.selected_sub_unit_psto,"onUpdate:modelValue":o[2]||(o[2]=g=>s.selected_sub_unit_psto=g),options:u.sub_unit_pstos,multiple:!1,placeholder:"Select Sub Unit PSTO",label:"psto_name","track-by":"psto_name","allow-empty":!1},null,8,["modelValue","options"])]),_:1})):y("",!0),u.sub_unit_types.length>0&&s.selected_sub_unit?(C(),S(p,{key:3,class:"my-auto"},{default:E(()=>[b(N($),{modelValue:s.sub_unit_type,"onUpdate:modelValue":o[3]||(o[3]=g=>s.sub_unit_type=g),options:u.sub_unit_types,multiple:!1,placeholder:"Select Sub Unit Type",label:"type_name","track-by":"type_name","allow-empty":!1},null,8,["modelValue","options"])]),_:1})):y("",!0),b(p,{class:"my-auto text-right"},{default:E(()=>[b(_,{disabled:u.unit.data[0].sub_units.length>0&&s.selected_sub_unit==""||u.sub_unit_pstos.length>0&&s.selected_sub_unit_psto==""||u.unit_pstos.length>0&&s.selected_unit_psto==""||s.selected_sub_unit==3&&s.sub_unit_type=="","prepend-icon":"mdi-plus",onClick:o[4]||(o[4]=g=>n(s.selected_sub_unit,s.selected_unit_psto,s.selected_sub_unit_psto,s.sub_unit_type))},{default:E(()=>o[8]||(o[8]=[ae("Generate URL ")])),_:1},8,["disabled"])]),_:1})]),_:1}),k("div",we,[b(M,null,{default:E(()=>[b(p,{cols:"10",md:"11"},{default:E(()=>[b(R,{modelValue:s.generated_url,"onUpdate:modelValue":o[5]||(o[5]=g=>s.generated_url=g),variant:"outlined",label:"URL",readonly:""},null,8,["modelValue"])]),_:1}),b(p,null,{default:E(()=>[b(_,{color:"none",icon:"mdi-content-copy",onClick:o[6]||(o[6]=g=>r())}),t.value?(C(),x("span",be,"copied")):y("",!0)]),_:1})]),_:1})]),k("div",Ee,[f.value==0?(C(),S(T,{key:0,"render-as":"svg",value:`${N(e)}/services/csf?region_id=${u.user.region_id}&service_id=${l.service.id}&unit_id=${l.unit.data[0].id}`,size:145,foreground:"#000",level:"L",style:{border:"3px #ffffff solid",width:"300px",height:"300px"}},null,8,["value"])):y("",!0),f.value==1.1?(C(),S(T,{key:1,"render-as":"svg",value:`${N(e)}/services/csf?region_id=${u.user.region_id}&service_id=${l.service.id}&unit_idk=${u.unit.data[0].id}&sub_unit_id=${s.selected_sub_unit.id}`,size:145,foreground:"#000",level:"L",style:{border:"3px #ffffff solid",width:"300px",height:"300px"}},null,8,["value"])):y("",!0),f.value==1.2?(C(),S(T,{key:2,"render-as":"svg",value:`${N(e)}/services/csf?region_id=${u.user.region_id}&service_id=${l.service.id}&unit_id=${u.unit.data[0].id}&sub_unit_id=${s.selected_sub_unit.id}&sub_unit_type=${s.sub_unit_type.id}`,size:145,foreground:"#000",level:"L",style:{border:"3px #ffffff solid",width:"300px",height:"300px"}},null,8,["value"])):y("",!0),f.value==2?(C(),S(T,{key:3,"render-as":"svg",value:`${N(e)}/services/csf?region_id=${u.user.region_id}&service_id=${l.service.id}&unit_id=${u.unit.data[0].id}&sub_unit_id=${s.selected_sub_unit.id}&psto_id=${s.selected_sub_unit_psto.id}`,size:145,foreground:"#000",level:"L",style:{border:"3px #ffffff solid",width:"300px",height:"300px"}},null,8,["value"])):y("",!0),f.value==3?(C(),S(T,{key:4,"render-as":"svg",value:`${N(e)}/services/csf?region_id=${u.user.region_id}&service_id=${l.service.id}&unit_id=${u.unit.data[0].id}&psto_id=${s.selected_unit_psto.id}`,size:145,foreground:"#000",level:"L",style:{border:"3px #ffffff solid",width:"300px",height:"300px"}},null,8,["value"])):y("",!0)])]),_:1})]),_:1})])])]),v.value==!0?(C(),S(ue,{key:0,is_printing:i.value,form:s,data:l},null,8,["is_printing","form","data"])):y("",!0)]),_:1})}}},Ie=le(Ce,[["__scopeId","data-v-1138cd0a"]]);export{Ie as default};
