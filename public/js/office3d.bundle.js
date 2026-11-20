(()=>{var Jl="186",Je={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},un={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$l=0,ua=1,Kl=2;var jn=1,jl=2,Di=3,kn=0,Ve=1,$e=2,xn=0,os=1,da=2,fa=3,pa=4,Ql=5;var Ni=100,tc=101,ec=102,nc=103,ic=104,sc=200,rc=201,ac=202,oc=203,lc=204,cc=205,hc=206,uc=207,dc=208,fc=209,pc=210,mc=211,gc=212,_c=213,xc=214,yc=0,vc=1,Sc=2,ma=3,Mc=4,bc=5,Ec=6,Tc=7,wc=0,Ac=1,Rc=2,dn=0,ga=1,_a=2,xa=3,ya=4,va=5,Sa=6,Ma=7;var Ui=301,Qn=302,Ks=303,js=304,ls=306,cs=1000,Qs=1001,Cc=1002,Vn=1003,Pc=1004;var hs=1005;var We=1006,tr=1007;var ti=1008;var fn=1009,Ic=1010,Lc=1011,us=1012,ba=1013,Wn=1014,Dn=1015,yn=1016,Ea=1017,Ta=1018,Fi=1020,Dc=35902,Nc=35899,Uc=1021,Fc=1022,vn=1023,ei=1026,ni=1027,Oc=1028,wa=1029,ii=1030,Aa=1031;var Ra=1033,er=33776,nr=33777,ir=33778,sr=33779,Ca=35840,Pa=35841,Ia=35842,La=35843,Da=36196,Na=37492,Ua=37496,Fa=37488,Oa=37489,rr=37490,Ba=37491,za=37808,Ha=37809,Ga=37810,ka=37811,Va=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,Za=37817,Ja=37818,$a=37819,Ka=37820,ja=37821,Qa=36492,to=36494,eo=36495,no=36283,io=36284,ar=36285,so=36286;var ro=0,Bc=1,si="",or="srgb",ao="srgb-linear",oo="linear",le="srgb";var zc=512,Hc=513,Gc=514,lr=515,kc=516,Vc=517,cr=518,Wc=519;var lo="300 es",co=2000;function ku(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vu(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function as(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Xc(){let t=as("canvas");return t.style.display="block",t}var Tl={},Ii=null;function ho(...t){let e="THREE."+t.shift();if(Ii)Ii("log",e,...t);else console.log(e,...t)}function qc(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function It(...t){t=qc(t);let e="THREE."+t.shift();if(Ii)Ii("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Nt(...t){t=qc(t);let e="THREE."+t.shift();if(Ii)Ii("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Kn(...t){let e=t.join(" ");if(e in Tl)return;Tl[e]=!0,It(...t)}function Yc(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Zc={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class Sn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wl=1234567,ss=Math.PI/180,Li=180/Math.PI;function Oi(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[t&255]+De[t>>8&255]+De[t>>16&255]+De[t>>24&255]+"-"+De[e&255]+De[e>>8&255]+"-"+De[e>>16&15|64]+De[e>>24&255]+"-"+De[n&63|128]+De[n>>8&255]+"-"+De[n>>16&255]+De[n>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function uo(t,e){return(t%e+e)%e}function Wu(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function Xu(t,e,n){if(t!==e)return(n-t)/(e-t);else return 0}function rs(t,e,n){return(1-n)*t+n*e}function qu(t,e,n,i){return rs(t,e,1-Math.exp(-n*i))}function Yu(t,e=1){return e-Math.abs(uo(t,e*2)-e)}function Zu(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*(3-2*t)}function Ju(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10)}function $u(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Ku(t,e){return t+Math.random()*(e-t)}function ju(t){return t*(0.5-Math.random())}function Qu(t){if(t!==void 0)wl=t;let e=wl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function td(t){return t*ss}function ed(t){return t*Li}function nd(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function id(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function sd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function rd(t,e,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((e+i)/2),d=a((e+i)/2),p=r((e-i)/2),h=a((e-i)/2),f=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":t.set(o*d,l*p,l*h,o*c);break;case"YZY":t.set(l*h,o*d,l*p,o*c);break;case"ZXZ":t.set(l*p,l*h,o*d,o*c);break;case"XZX":t.set(o*d,l*_,l*f,o*c);break;case"YXY":t.set(l*f,o*d,l*_,o*c);break;case"ZYZ":t.set(l*_,l*f,o*d,o*c);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function Oe(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var fo={DEG2RAD:ss,RAD2DEG:Li,generateUUID:Oi,clamp:Vt,euclideanModulo:uo,mapLinear:Wu,inverseLerp:Xu,lerp:rs,damp:qu,pingpong:Yu,smoothstep:Zu,smootherstep:Ju,randInt:$u,randFloat:Ku,randFloatSpread:ju,seededRandom:Qu,degToRad:td,radToDeg:ed,isPowerOfTwo:nd,ceilPowerOfTwo:id,floorPowerOfTwo:sd,setQuaternionFromProperEuler:rd,normalize:Oe,denormalize:Ci};class Et{static{Et.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],d=n[i+3],p=s[r+0],h=s[r+1],f=s[r+2],_=s[r+3];if(d!==_||o!==p||l!==h||c!==f){let E=o*p+l*h+c*f+d*_;if(E<0)p=-p,h=-h,f=-f,_=-_,E=-E;let m=1-a;if(E<0.9995){let u=Math.acos(E),w=Math.sin(u);m=Math.sin(m*u)/w,a=Math.sin(a*u)/w,o=o*m+p*a,l=l*m+h*a,c=c*m+f*a,d=d*m+_*a}else{o=o*m+p*a,l=l*m+h*a,c=c*m+f*a,d=d*m+_*a;let u=1/Math.sqrt(o*o+l*l+c*c+d*d);o*=u,l*=u,c*=u,d*=u}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],d=s[r],p=s[r+1],h=s[r+2],f=s[r+3];return t[e]=a*f+c*d+o*h-l*p,t[e+1]=o*f+c*p+l*d-a*h,t[e+2]=l*f+c*h+a*p-o*d,t[e+3]=c*f-a*d-o*p-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),d=a(s/2),p=o(n/2),h=o(i/2),f=o(s/2);switch(r){case"XYZ":this._x=p*c*d+l*h*f,this._y=l*h*d-p*c*f,this._z=l*c*f+p*h*d,this._w=l*c*d-p*h*f;break;case"YXZ":this._x=p*c*d+l*h*f,this._y=l*h*d-p*c*f,this._z=l*c*f-p*h*d,this._w=l*c*d+p*h*f;break;case"ZXY":this._x=p*c*d-l*h*f,this._y=l*h*d+p*c*f,this._z=l*c*f+p*h*d,this._w=l*c*d-p*h*f;break;case"ZYX":this._x=p*c*d-l*h*f,this._y=l*h*d+p*c*f,this._z=l*c*f-p*h*d,this._w=l*c*d+p*h*f;break;case"YZX":this._x=p*c*d+l*h*f,this._y=l*h*d+p*c*f,this._z=l*c*f-p*h*d,this._w=l*c*d-p*h*f;break;case"XZY":this._x=p*c*d-l*h*f,this._y=l*h*d-p*c*f,this._z=l*c*f+p*h*d,this._w=l*c*d+p*h*f;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10],p=n+a+d;if(p>0){let h=0.5/Math.sqrt(p+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>d){let h=2*Math.sqrt(1+n-a-d);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-n-d);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+d-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{static{L.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Al.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),d=2*(s*n-r*e);return this.x=e+o*l+r*d-a*c,this.y=n+o*c+a*l-s*d,this.z=i+o*d+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vr.copy(this).projectOnVector(t),this.sub(Vr)}reflect(t){return this.sub(Vr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Vr=new L,Al=new Xe;class Ft{static{Ft.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],d=n[7],p=n[2],h=n[5],f=n[8],_=i[0],E=i[3],m=i[6],u=i[1],w=i[4],R=i[7],v=i[2],b=i[5],A=i[8];return s[0]=r*_+a*u+o*v,s[3]=r*E+a*w+o*b,s[6]=r*m+a*R+o*A,s[1]=l*_+c*u+d*v,s[4]=l*E+c*w+d*b,s[7]=l*m+c*R+d*A,s[2]=p*_+h*u+f*v,s[5]=p*E+h*w+f*b,s[8]=p*m+h*R+f*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],d=c*r-a*l,p=a*o-c*s,h=l*s-r*o,f=e*d+n*p+i*h;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return t[0]=d*_,t[1]=(i*l-c*n)*_,t[2]=(a*n-i*r)*_,t[3]=p*_,t[4]=(c*e-i*o)*_,t[5]=(i*s-a*e)*_,t[6]=h*_,t[7]=(n*o-l*e)*_,t[8]=(r*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Kn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wr.makeScale(t,e)),this}rotate(t){return Kn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wr.makeRotation(-t)),this}translate(t,e){return Kn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wr.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Wr=new Ft,Rl=new Ft().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Cl=new Ft().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function ad(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=In(s.r),s.g=In(s.g),s.b=In(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Kn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Kn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var Yt=ad();function In(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function Pi(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var gi;class po{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(gi===void 0)gi=as("canvas");gi.width=t.width,gi.height=t.height;let i=gi.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=gi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=as("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=In(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(In(e[n]/255)*255);else e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var od=0;class ds{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(Xr(i[r].image));else s.push(Xr(i[r]))}else s=Xr(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function Xr(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return po.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return It("Texture: Unable to serialize Texture."),{}}var ld=0,qr=new L;class Ee extends Sn{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Ee.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Oi(),this.name="",this.source=new ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qr).x}get height(){return this.source.getSize(qr).y}get depth(){return this.source.getSize(qr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=300;Ee.DEFAULT_ANISOTROPY=1;class me{static{me.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],d=o[8],p=o[1],h=o[5],f=o[9],_=o[2],E=o[6],m=o[10];if(Math.abs(c-p)<0.01&&Math.abs(d-_)<0.01&&Math.abs(f-E)<0.01){if(Math.abs(c+p)<0.1&&Math.abs(d+_)<0.1&&Math.abs(f+E)<0.1&&Math.abs(l+h+m-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,R=(h+1)/2,v=(m+1)/2,b=(c+p)/4,A=(d+_)/4,T=(f+E)/4;if(w>R&&w>v)if(w<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(w),i=b/n,s=A/n;else if(R>v)if(R<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(R),n=b/i,s=T/i;else if(v<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(v),n=A/s,i=T/s;return this.set(n,i,s,e),this}let u=Math.sqrt((E-f)*(E-f)+(d-_)*(d-_)+(p-c)*(p-c));if(Math.abs(u)<0.001)u=1;return this.x=(E-f)/u,this.y=(d-_)/u,this.z=(p-c)/u,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mo extends Sn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Ee(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ds(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ke extends mo{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class hr extends Ee{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class go extends Ee{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class ae{static{ae.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,d,p,h,f,_,E){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,d,p,h,f,_,E)}set(t,e,n,i,s,r,a,o,l,c,d,p,h,f,_,E){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=d,m[14]=p,m[3]=h,m[7]=f,m[11]=_,m[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/_i.setFromMatrixColumn(t,0).length(),s=1/_i.setFromMatrixColumn(t,1).length(),r=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let p=r*c,h=r*d,f=a*c,_=a*d;e[0]=o*c,e[4]=-o*d,e[8]=l,e[1]=h+f*l,e[5]=p-_*l,e[9]=-a*o,e[2]=_-p*l,e[6]=f+h*l,e[10]=r*o}else if(t.order==="YXZ"){let p=o*c,h=o*d,f=l*c,_=l*d;e[0]=p+_*a,e[4]=f*a-h,e[8]=r*l,e[1]=r*d,e[5]=r*c,e[9]=-a,e[2]=h*a-f,e[6]=_+p*a,e[10]=r*o}else if(t.order==="ZXY"){let p=o*c,h=o*d,f=l*c,_=l*d;e[0]=p-_*a,e[4]=-r*d,e[8]=f+h*a,e[1]=h+f*a,e[5]=r*c,e[9]=_-p*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let p=r*c,h=r*d,f=a*c,_=a*d;e[0]=o*c,e[4]=f*l-h,e[8]=p*l+_,e[1]=o*d,e[5]=_*l+p,e[9]=h*l-f,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let p=r*o,h=r*l,f=a*o,_=a*l;e[0]=o*c,e[4]=_-p*d,e[8]=f*d+h,e[1]=d,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=h*d+f,e[10]=p-_*d}else if(t.order==="XZY"){let p=r*o,h=r*l,f=a*o,_=a*l;e[0]=o*c,e[4]=-d,e[8]=l*c,e[1]=p*d+_,e[5]=r*c,e[9]=h*d-f,e[2]=f*d-h,e[6]=a*c,e[10]=_*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cd,t,hd)}lookAt(t,e,n){let i=this.elements;if(Ye.subVectors(t,e),Ye.lengthSq()===0)Ye.z=1;if(Ye.normalize(),On.crossVectors(n,Ye),On.lengthSq()===0){if(Math.abs(n.z)===1)Ye.x+=0.0001;else Ye.z+=0.0001;Ye.normalize(),On.crossVectors(n,Ye)}return On.normalize(),Ls.crossVectors(Ye,On),i[0]=On.x,i[4]=Ls.x,i[8]=Ye.x,i[1]=On.y,i[5]=Ls.y,i[9]=Ye.y,i[2]=On.z,i[6]=Ls.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],d=n[5],p=n[9],h=n[13],f=n[2],_=n[6],E=n[10],m=n[14],u=n[3],w=n[7],R=n[11],v=n[15],b=i[0],A=i[4],T=i[8],g=i[12],S=i[1],z=i[5],C=i[9],F=i[13],X=i[2],P=i[6],V=i[10],K=i[14],k=i[3],nt=i[7],q=i[11],j=i[15];return s[0]=r*b+a*S+o*X+l*k,s[4]=r*A+a*z+o*P+l*nt,s[8]=r*T+a*C+o*V+l*q,s[12]=r*g+a*F+o*K+l*j,s[1]=c*b+d*S+p*X+h*k,s[5]=c*A+d*z+p*P+h*nt,s[9]=c*T+d*C+p*V+h*q,s[13]=c*g+d*F+p*K+h*j,s[2]=f*b+_*S+E*X+m*k,s[6]=f*A+_*z+E*P+m*nt,s[10]=f*T+_*C+E*V+m*q,s[14]=f*g+_*F+E*K+m*j,s[3]=u*b+w*S+R*X+v*k,s[7]=u*A+w*z+R*P+v*nt,s[11]=u*T+w*C+R*V+v*q,s[15]=u*g+w*F+R*K+v*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],d=t[6],p=t[10],h=t[14],f=t[3],_=t[7],E=t[11],m=t[15],u=o*h-l*p,w=a*h-l*d,R=a*p-o*d,v=r*h-l*c,b=r*p-o*c,A=r*d-a*c;return e*(_*u-E*w+m*R)-n*(f*u-E*v+m*b)+i*(f*w-_*v+m*A)-s*(f*R-_*b+E*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],d=t[9],p=t[10],h=t[11],f=t[12],_=t[13],E=t[14],m=t[15],u=e*a-n*r,w=e*o-i*r,R=e*l-s*r,v=n*o-i*a,b=n*l-s*a,A=i*l-s*o,T=c*_-d*f,g=c*E-p*f,S=c*m-h*f,z=d*E-p*_,C=d*m-h*_,F=p*m-h*E,X=u*F-w*C+R*z+v*S-b*g+A*T;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/X;return t[0]=(a*F-o*C+l*z)*P,t[1]=(i*C-n*F-s*z)*P,t[2]=(_*A-E*b+m*v)*P,t[3]=(p*b-d*A-h*v)*P,t[4]=(o*S-r*F-l*g)*P,t[5]=(e*F-i*S+s*g)*P,t[6]=(E*R-f*A-m*w)*P,t[7]=(c*A-p*R+h*w)*P,t[8]=(r*C-a*S+l*T)*P,t[9]=(n*S-e*C-s*T)*P,t[10]=(f*b-_*R+m*u)*P,t[11]=(d*R-c*b-h*u)*P,t[12]=(a*g-r*z-o*T)*P,t[13]=(e*z-n*g+i*T)*P,t[14]=(_*w-f*v-E*u)*P,t[15]=(c*v-d*w+p*u)*P,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,d=a+a,p=s*l,h=s*c,f=s*d,_=r*c,E=r*d,m=a*d,u=o*l,w=o*c,R=o*d,{x:v,y:b,z:A}=n;return i[0]=(1-(_+m))*v,i[1]=(h+R)*v,i[2]=(f-w)*v,i[3]=0,i[4]=(h-R)*b,i[5]=(1-(p+m))*b,i[6]=(E+u)*b,i[7]=0,i[8]=(f+w)*A,i[9]=(E-u)*A,i[10]=(1-(p+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=_i.set(i[0],i[1],i[2]).length(),a=_i.set(i[4],i[5],i[6]).length(),o=_i.set(i[8],i[9],i[10]).length();if(s<0)r=-r;on.copy(this);let l=1/r,c=1/a,d=1/o;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=c,on.elements[5]*=c,on.elements[6]*=c,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),d=2*s/(n-i),p=(e+t)/(e-t),h=(n+i)/(n-i),f,_;if(o)f=s/(r-s),_=r*s/(r-s);else if(a===2000)f=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(a===2001)f=-r/(r-s),_=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),d=2/(n-i),p=-(e+t)/(e-t),h=-(n+i)/(n-i),f,_;if(o)f=1/(r-s),_=r/(r-s);else if(a===2000)f=-2/(r-s),_=-(r+s)/(r-s);else if(a===2001)f=-1/(r-s),_=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var _i=new L,on=new ae,cd=new L(0,0,0),hd=new L(1,1,1),On=new L,Ls=new L,Ye=new L,Pl=new ae,Il=new Xe;class Ln{constructor(t=0,e=0,n=0,i=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],d=i[2],p=i[6],h=i[10];switch(e){case"XYZ":if(this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(p,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Vt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-d,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Vt(p,-1,1)),Math.abs(p)<0.9999999)this._y=Math.atan2(-d,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<0.9999999)this._x=Math.atan2(p,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Vt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-d,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-Vt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(p,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Il.setFromEuler(this),this.setFromQuaternion(Il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class fs{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var ud=0,Ll=new L,xi=new Xe,wn=new ae,Ds=new L,ts=new L,dd=new L,fd=new Xe,Dl=new L(1,0,0),Nl=new L(0,1,0),Ul=new L(0,0,1),Fl={type:"added"},pd={type:"removed"},yi={type:"childadded",child:null},Yr={type:"childremoved",child:null};class ve extends Sn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();let t=new L,e=new Ln,n=new Xe,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ft}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(Dl,t)}rotateY(t){return this.rotateOnAxis(Nl,t)}rotateZ(t){return this.rotateOnAxis(Ul,t)}translateOnAxis(t,e){return Ll.copy(t).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dl,t)}translateY(t){return this.translateOnAxis(Nl,t)}translateZ(t){return this.translateOnAxis(Ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Ds.copy(t);else Ds.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)wn.lookAt(ts,Ds,this.up);else wn.lookAt(Ds,ts,this.up);if(this.quaternion.setFromRotationMatrix(wn),i)wn.extractRotation(i.matrixWorld),xi.setFromRotationMatrix(wn),this.quaternion.premultiply(xi.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Nt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fl),yi.child=t,this.dispatchEvent(yi),yi.child=null;else Nt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(pd),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld);return t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fl),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let d=o[l];s(t.shapes,d)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),d=r(t.shapes),p=r(t.skeletons),h=r(t.animations),f=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(d.length>0)n.shapes=d;if(p.length>0)n.skeletons=p;if(h.length>0)n.animations=h;if(f.length>0)n.nodes=f}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ve.DEFAULT_UP=new L(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ut extends ve{constructor(){super();this.isGroup=!0,this.type="Group"}}var md={type:"move"};class ps{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let _ of t.hand.values()){let E=e.getJointPose(_,n),m=this._getHandJoint(l,_);if(E!==null)m.matrix.fromArray(E.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=E.radius;m.visible=E!==null}let c=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=c.position.distanceTo(d.position),h=0.02,f=0.005;if(l.inputState.pinching&&p>h+f)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&p<=h-f)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(md)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function Zr(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=uo(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Zr(r,s,t+0.3333333333333333),this.g=Zr(r,s,t),this.b=Zr(r,s,t-0.3333333333333333)}return Yt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)It("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=Jc[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else It("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Yt.workingToColorSpace(Ne.copy(this),t),Math.round(Vt(Ne.r*255,0,255))*65536+Math.round(Vt(Ne.g*255,0,255))*256+Math.round(Vt(Ne.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Ne.copy(this),e);let{r:n,g:i,b:s}=Ne,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let d=r-a;switch(l=c<=0.5?d/(r+a):d/(2-r-a),r){case n:o=(i-s)/d+(i<s?6:0);break;case i:o=(s-n)/d+2;break;case s:o=(n-i)/d+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t="srgb"){Yt.workingToColorSpace(Ne.copy(this),t);let{r:e,g:n,b:i}=Ne;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Ns);let n=rs(Bn.h,Ns.h,e),i=rs(Bn.s,Ns.s,e),s=rs(Bn.l,Ns.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ne=new Gt;Gt.NAMES=Jc;class ms{constructor(t,e=1,n=1000){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new ms(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ur extends ve{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var ln=new L,An=new L,Jr=new L,Rn=new L,vi=new L,Si=new L,Ol=new L,$r=new L,Kr=new L,jr=new L,Qr=new me,ta=new me,ea=new me;class nn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ln.subVectors(i,e),An.subVectors(n,e),Jr.subVectors(t,e);let r=ln.dot(ln),a=ln.dot(An),o=ln.dot(Jr),l=An.dot(An),c=An.dot(Jr),d=r*l-a*a;if(d===0)return s.set(0,0,0),null;let p=1/d,h=(l*o-a*c)*p,f=(r*c-a*o)*p;return s.set(1-h-f,f,h)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Rn)===null)return!1;return Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,Rn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Rn.x),o.addScaledVector(r,Rn.y),o.addScaledVector(a,Rn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return Qr.setScalar(0),ta.setScalar(0),ea.setScalar(0),Qr.fromBufferAttribute(t,e),ta.fromBufferAttribute(t,n),ea.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Qr,s.x),r.addScaledVector(ta,s.y),r.addScaledVector(ea,s.z),r}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),An.subVectors(t,e),ln.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),An.subVectors(this.a,this.b),ln.cross(An).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;vi.subVectors(i,n),Si.subVectors(s,n),$r.subVectors(t,n);let o=vi.dot($r),l=Si.dot($r);if(o<=0&&l<=0)return e.copy(n);Kr.subVectors(t,i);let c=vi.dot(Kr),d=Si.dot(Kr);if(c>=0&&d<=c)return e.copy(i);let p=o*d-c*l;if(p<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(vi,r);jr.subVectors(t,s);let h=vi.dot(jr),f=Si.dot(jr);if(f>=0&&h<=f)return e.copy(s);let _=h*l-o*f;if(_<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(Si,a);let E=c*f-h*d;if(E<=0&&d-c>=0&&h-f>=0)return Ol.subVectors(s,i),a=(d-c)/(d-c+(h-f)),e.copy(i).addScaledVector(Ol,a);let m=1/(E+_+p);return r=_*m,a=p*m,e.copy(n).addScaledVector(vi,r).addScaledVector(Si,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ri{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,cn);else cn.fromBufferAttribute(s,r);cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();Us.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Us.copy(n.boundingBox)}Us.applyMatrix4(t.matrixWorld),this.union(Us)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),Fs.subVectors(this.max,es),Mi.subVectors(t.a,es),bi.subVectors(t.b,es),Ei.subVectors(t.c,es),zn.subVectors(bi,Mi),Hn.subVectors(Ei,bi),Yn.subVectors(Mi,Ei);let e=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-Yn.z,Yn.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,Yn.z,0,-Yn.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-Yn.y,Yn.x,0];if(!na(e,Mi,bi,Ei,Fs))return!1;if(e=[1,0,0,0,1,0,0,0,1],!na(e,Mi,bi,Ei,Fs))return!1;return Os.crossVectors(zn,Hn),e=[Os.x,Os.y,Os.z],na(e,Mi,bi,Ei,Fs)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(cn).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var Cn=[new L,new L,new L,new L,new L,new L,new L,new L],cn=new L,Us=new ri,Mi=new L,bi=new L,Ei=new L,zn=new L,Hn=new L,Yn=new L,es=new L,Fs=new L,Os=new L,Zn=new L;function na(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Zn.fromArray(t,r);let o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=e.dot(Zn),c=n.dot(Zn),d=i.dot(Zn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var ye=new L,Bs=new Et,gd=0;class hn extends Sn{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(t),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=Ci(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=Oe(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=Ci(e,this.array);return e}setX(t,e){if(this.normalized)e=Oe(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=Ci(e,this.array);return e}setY(t,e){if(this.normalized)e=Oe(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=Ci(e,this.array);return e}setZ(t,e){if(this.normalized)e=Oe(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=Ci(e,this.array);return e}setW(t,e){if(this.normalized)e=Oe(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=Oe(e,this.array),n=Oe(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array),s=Oe(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fr extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}var _d=new ri,ns=new L,ia=new L;class gs{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else _d.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);let e=ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(ns,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(ia)),this.expandByPoint(ns.copy(t.center).sub(ia));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var xd=0,tn=new ae,sa=new ve,Ti=new L,Ze=new ri,is=new ri,Re=new L;class ze extends Sn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((ku(t))?fr:dr)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new de(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new ri;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(Ze.setFromBufferAttribute(s),this.morphTargetsRelative)Re.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Re);else this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new gs;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(is.setFromBufferAttribute(a),this.morphTargetsRelative)Re.addVectors(Ze.min,is.min),Ze.expandByPoint(Re),Re.addVectors(Ze.max,is.max),Ze.expandByPoint(Re);else Ze.expandByPoint(is.min),Ze.expandByPoint(is.max)}Ze.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Re.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Re.fromBufferAttribute(a,l),o)Ti.fromBufferAttribute(t,l),Re.add(Ti);i=Math.max(i,n.distanceToSquared(Re))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let T=0;T<n.count;T++)a[T]=new L,o[T]=new L;let l=new L,c=new L,d=new L,p=new Et,h=new Et,f=new Et,_=new L,E=new L;function m(T,g,S){l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,g),d.fromBufferAttribute(n,S),p.fromBufferAttribute(s,T),h.fromBufferAttribute(s,g),f.fromBufferAttribute(s,S),c.sub(l),d.sub(l),h.sub(p),f.sub(p);let z=1/(h.x*f.y-f.x*h.y);if(!isFinite(z))return;_.copy(c).multiplyScalar(f.y).addScaledVector(d,-h.y).multiplyScalar(z),E.copy(d).multiplyScalar(h.x).addScaledVector(c,-f.x).multiplyScalar(z),a[T].add(_),a[g].add(_),a[S].add(_),o[T].add(E),o[g].add(E),o[S].add(E)}let u=this.groups;if(u.length===0)u=[{start:0,count:t.count}];for(let T=0,g=u.length;T<g;++T){let S=u[T],{start:z,count:C}=S;for(let F=z,X=z+C;F<X;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let w=new L,R=new L,v=new L,b=new L;function A(T){v.fromBufferAttribute(i,T),b.copy(v);let g=a[T];w.copy(g),w.sub(v.multiplyScalar(v.dot(g))).normalize(),R.crossVectors(b,g);let z=R.dot(o[T])<0?-1:1;r.setXYZW(T,w.x,w.y,w.z,z)}for(let T=0,g=u.length;T<g;++T){let S=u[T],{start:z,count:C}=S;for(let F=z,X=z+C;F<X;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,h=n.count;p<h;p++)n.setXYZ(p,0,0,0);let i=new L,s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,d=new L;if(t)for(let p=0,h=t.count;p<h;p+=3){let f=t.getX(p+0),_=t.getX(p+1),E=t.getX(p+2);i.fromBufferAttribute(e,f),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,E),c.subVectors(r,s),d.subVectors(i,s),c.cross(d),a.fromBufferAttribute(n,f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,E),a.add(c),o.add(c),l.add(c),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z)}else for(let p=0,h=e.count;p<h;p+=3)i.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),c.subVectors(r,s),d.subVectors(i,s),c.cross(d),n.setXYZ(p+0,c.x,c.y,c.z),n.setXYZ(p+1,c.x,c.y,c.z),n.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:d}=a,p=new l.constructor(o.length*c),h=0,f=0;for(let _=0,E=o.length;_<E;_++){if(a.isInterleavedBufferAttribute)h=o[_]*a.data.stride+a.offset;else h=o[_]*c;for(let m=0;m<c;m++)p[f++]=l[h++]}return new hn(p,c,d)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new ze,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,d=l.length;c<d;c++){let p=l[c],h=t(p,n);o.push(h)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let d=0,p=l.length;d<p;d++){let h=l[d];c.push(h.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],d=s[l];for(let p=0,h=d.length;p<h;p++)c.push(d[p].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var ra=new L,yd=new L,vd=new Ft;class en{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ra.subVectors(n,e).cross(yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(ra),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||vd.getNormalMatrix(t),i=this.coplanarPoint(ra).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var Sd=0;class ai extends Sn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new Gt().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=t.iridescenceThicknessRange;if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new en().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new Et().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Et().fromArray(t.clearcoatNormalScale);if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}var Pn=new L,aa=new L,zs=new L,Hs=new L;class Bi{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){aa.copy(t).add(e).multiplyScalar(0.5),zs.copy(e).sub(t).normalize(),Hs.copy(this.origin).sub(aa);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(zs),a=Hs.dot(this.direction),o=-Hs.dot(zs),l=Hs.lengthSq(),c=Math.abs(1-r*r),d,p,h,f;if(c>0)if(d=r*o-a,p=r*a-o,f=s*c,d>=0)if(p>=-f)if(p<=f){let _=1/c;d*=_,p*=_,h=d*(d+r*p+2*a)+p*(r*d+p+2*o)+l}else p=s,d=Math.max(0,-(r*p+a)),h=-d*d+p*(p+2*o)+l;else p=-s,d=Math.max(0,-(r*p+a)),h=-d*d+p*(p+2*o)+l;else if(p<=-f)d=Math.max(0,-(-r*s+a)),p=d>0?-s:Math.min(Math.max(-s,-o),s),h=-d*d+p*(p+2*o)+l;else if(p<=f)d=0,p=Math.min(Math.max(-s,-o),s),h=p*(p+2*o)+l;else d=Math.max(0,-(r*s+a)),p=d>0?s:Math.min(Math.max(-s,-o),s),h=-d*d+p*(p+2*o)+l;else p=r>0?-s:s,d=Math.max(0,-(r*p+a)),h=-d*d+p*(p+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,d);if(i)i.copy(aa).addScaledVector(zs,p);return h}intersectSphere(t,e){if(t.radius<0)return null;Pn.subVectors(t.center,this.origin);let n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,p=this.origin;if(l>=0)n=(t.min.x-p.x)*l,i=(t.max.x-p.x)*l;else n=(t.max.x-p.x)*l,i=(t.min.x-p.x)*l;if(c>=0)s=(t.min.y-p.y)*c,r=(t.max.y-p.y)*c;else s=(t.max.y-p.y)*c,r=(t.min.y-p.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(d>=0)a=(t.min.z-p.z)*d,o=(t.max.z-p.z)*d;else a=(t.max.z-p.z)*d,o=(t.min.z-p.z)*d;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,d=t.x-r.x,p=t.y-r.y,h=t.z-r.z,f=e.x-r.x,_=e.y-r.y,E=e.z-r.z,m=n.x-r.x,u=n.y-r.y,w=n.z-r.z,R=Math.abs(o),v=Math.abs(l),b=Math.abs(c),A,T,g,S,z,C,F,X,P,V,K,k;if(R>=v&&R>=b)if(g=o,C=d,P=f,k=m,o>=0)A=l,T=c,S=p,z=h,F=_,X=E,V=u,K=w;else A=c,T=l,S=h,z=p,F=E,X=_,V=w,K=u;else if(v>=b)if(g=l,C=p,P=_,k=u,l>=0)A=c,T=o,S=h,z=d,F=E,X=f,V=w,K=m;else A=o,T=c,S=d,z=h,F=f,X=E,V=m,K=w;else if(g=c,C=h,P=E,k=w,c>=0)A=o,T=l,S=d,z=p,F=f,X=_,V=m,K=u;else A=l,T=o,S=p,z=d,F=_,X=f,V=u,K=m;if(g===0)return null;let nt=A/g,q=T/g,j=1/g,et=S-nt*C,Lt=z-q*C,At=F-nt*P,ce=X-q*P,kt=V-nt*k,Y=K-q*k,it=kt*ce-Y*At,at=et*Y-Lt*kt,Rt=At*Lt-ce*et;if(i){if(it<0||at<0||Rt<0)return null}else if((it<0||at<0||Rt<0)&&(it>0||at>0||Rt>0))return null;let Dt=it+at+Rt;if(Dt===0)return null;let Tt=j*(it*C+at*P+Rt*k);if(Dt>0?Tt<0:Tt>0)return null;return this.at(Tt/Dt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pr extends ai{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Bl=new ae,Jn=new Bi,Gs=new gs,zl=new L,ks=new L,Vs=new L,Ws=new L,oa=new L,Xs=new L,Hl=new L,qs=new L;class Pt extends ve{constructor(t=new ze,e=new pr){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Xs.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],d=s[o];if(c===0)continue;if(oa.fromBufferAttribute(d,t),r)Xs.addScaledVector(oa,c);else Xs.addScaledVector(oa.sub(e),c)}e.add(Xs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Jn.copy(t.ray).recast(t.near),Gs.containsPoint(Jn.origin)===!1){if(Jn.intersectSphere(Gs,zl)===null)return;if(Jn.origin.distanceToSquared(zl)>(t.far-t.near)**2)return}if(Bl.copy(s).invert(),Jn.copy(t.ray).applyMatrix4(Bl),n.boundingBox!==null){if(Jn.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,Jn)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,{groups:p,drawRange:h}=s;if(a!==null)if(Array.isArray(r))for(let f=0,_=p.length;f<_;f++){let E=p[f],m=r[E.materialIndex],u=Math.max(E.start,h.start),w=Math.min(a.count,Math.min(E.start+E.count,h.start+h.count));for(let R=u,v=w;R<v;R+=3){let b=a.getX(R),A=a.getX(R+1),T=a.getX(R+2);if(i=Ys(this,m,t,n,l,c,d,b,A,T),i)i.faceIndex=Math.floor(R/3),i.face.materialIndex=E.materialIndex,e.push(i)}}else{let f=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let E=f,m=_;E<m;E+=3){let u=a.getX(E),w=a.getX(E+1),R=a.getX(E+2);if(i=Ys(this,r,t,n,l,c,d,u,w,R),i)i.faceIndex=Math.floor(E/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let f=0,_=p.length;f<_;f++){let E=p[f],m=r[E.materialIndex],u=Math.max(E.start,h.start),w=Math.min(o.count,Math.min(E.start+E.count,h.start+h.count));for(let R=u,v=w;R<v;R+=3){let b=R,A=R+1,T=R+2;if(i=Ys(this,m,t,n,l,c,d,b,A,T),i)i.faceIndex=Math.floor(R/3),i.face.materialIndex=E.materialIndex,e.push(i)}}else{let f=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let E=f,m=_;E<m;E+=3){let u=E,w=E+1,R=E+2;if(i=Ys(this,r,t,n,l,c,d,u,w,R),i)i.faceIndex=Math.floor(E/3),e.push(i)}}}}function Md(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;qs.copy(o),qs.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(qs);if(c<n.near||c>n.far)return null;return{distance:c,point:qs.clone(),object:t}}function Ys(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,ks),t.getVertexPosition(l,Vs),t.getVertexPosition(c,Ws);let d=Md(t,e,n,i,ks,Vs,Ws,Hl);if(d){let p=new L;if(nn.getBarycoord(Hl,ks,Vs,Ws,p),s)d.uv=nn.getInterpolatedAttribute(s,o,l,c,p,new Et);if(r)d.uv1=nn.getInterpolatedAttribute(r,o,l,c,p,new Et);if(a){if(d.normal=nn.getInterpolatedAttribute(a,o,l,c,p,new L),d.normal.dot(i.direction)>0)d.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new L,materialIndex:0};nn.getNormal(ks,Vs,Ws,h.normal),d.face=h,d.barycoord=p}return d}class _o extends Ee{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,d,p){super(null,r,a,o,l,c,i,s,d,p);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var $n=new gs,bd=new Et(0.5,0.5),Zs=new L;class _s{constructor(t=new en,e=new en,n=new en,i=new en,s=new en,r=new en){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],p=s[6],h=s[7],f=s[8],_=s[9],E=s[10],m=s[11],u=s[12],w=s[13],R=s[14],v=s[15];if(i[0].setComponents(l-r,h-c,m-f,v-u).normalize(),i[1].setComponents(l+r,h+c,m+f,v+u).normalize(),i[2].setComponents(l+a,h+d,m+_,v+w).normalize(),i[3].setComponents(l-a,h-d,m-_,v-w).normalize(),n)i[4].setComponents(o,p,E,R).normalize(),i[5].setComponents(l-o,h-p,m-E,v-R).normalize();else if(i[4].setComponents(l-o,h-p,m-E,v-R).normalize(),e===2000)i[5].setComponents(l+o,h+p,m+E,v+R).normalize();else if(e===2001)i[5].setComponents(o,p,E,R).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){$n.center.set(0,0,0);let e=bd.distanceTo(t.center);return $n.radius=0.7071067811865476+e,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Zs.x=i.normal.x>0?t.max.x:t.min.x,Zs.y=i.normal.y>0?t.max.y:t.min.y,Zs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mr extends Ee{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gr extends Ee{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class oi extends Ee{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,d=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:d};super(p,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class xo extends oi{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},d=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class _r extends Ee{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class He extends ze{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],d=[],p=0,h=0;f("z","y","x",-1,-1,n,e,t,r,s,0),f("z","y","x",1,-1,n,e,-t,r,s,1),f("x","z","y",1,1,t,n,e,i,r,2),f("x","z","y",1,-1,t,n,-e,i,r,3),f("x","y","z",1,-1,t,e,n,i,s,4),f("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(d,2));function f(_,E,m,u,w,R,v,b,A,T,g){let S=R/A,z=v/T,C=R/2,F=v/2,X=b/2,P=A+1,V=T+1,K=0,k=0,nt=new L;for(let q=0;q<V;q++){let j=q*z-F;for(let et=0;et<P;et++){let Lt=et*S-C;nt[_]=Lt*u,nt[E]=j*w,nt[m]=X,l.push(nt.x,nt.y,nt.z),nt[_]=0,nt[E]=0,nt[m]=b>0?1:-1,c.push(nt.x,nt.y,nt.z),d.push(et/A),d.push(1-q/T),K+=1}}for(let q=0;q<T;q++)for(let j=0;j<A;j++){let et=p+j+P*q,Lt=p+j+P*(q+1),At=p+(j+1)+P*(q+1),ce=p+(j+1)+P*q;o.push(et,Lt,ce),o.push(Lt,At,ce),k+=6}a.addGroup(h,k,g),h+=k,p+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class li extends ze{constructor(t=1,e=32,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],r=[],a=[],o=[],l=new L,c=new Et;r.push(0,0,0),a.push(0,0,1),o.push(0.5,0.5);for(let d=0,p=3;d<=e;d++,p+=3){let h=n+d/e*i;l.x=t*Math.cos(h),l.y=t*Math.sin(h),r.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(r[p]/t+1)/2,c.y=(r[p+1]/t+1)/2,o.push(c.x,c.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class zi extends ze{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],d=[],p=[],h=[],f=0,_=[],E=n/2,m=0;if(u(),r===!1){if(t>0)w(!0);if(e>0)w(!1)}this.setIndex(c),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(p,3)),this.setAttribute("uv",new de(h,2));function u(){let R=new L,v=new L,b=0,A=(e-t)/n;for(let T=0;T<=s;T++){let g=[],S=T/s,z=S*(e-t)+t;for(let C=0;C<=i;C++){let F=C/i,X=F*o+a,P=Math.sin(X),V=Math.cos(X);v.x=z*P,v.y=-S*n+E,v.z=z*V,d.push(v.x,v.y,v.z),R.set(P,A,V).normalize(),p.push(R.x,R.y,R.z),h.push(F,1-S),g.push(f++)}_.push(g)}for(let T=0;T<i;T++)for(let g=0;g<s;g++){let S=_[g][T],z=_[g+1][T],C=_[g+1][T+1],F=_[g][T+1];if(t>0||g!==0)c.push(S,z,F),b+=3;if(e>0||g!==s-1)c.push(z,C,F),b+=3}l.addGroup(m,b,0),m+=b}function w(R){let v=f,b=new Et,A=new L,T=0,g=R===!0?t:e,S=R===!0?1:-1;for(let C=1;C<=i;C++)d.push(0,E*S,0),p.push(0,S,0),h.push(0.5,0.5),f++;let z=f;for(let C=0;C<=i;C++){let X=C/i*o+a,P=Math.cos(X),V=Math.sin(X);A.x=g*V,A.y=E*S,A.z=g*P,d.push(A.x,A.y,A.z),p.push(0,S,0),b.x=P*0.5+0.5,b.y=V*0.5*S+0.5,h.push(b.x,b.y),f++}for(let C=0;C<i;C++){let F=v+C,X=z+C;if(R===!0)c.push(X,X+1,F);else c.push(X+1,X,F);T+=3}l.addGroup(m,T,R===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xr extends ze{constructor(t=[],e=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];if(a(i),l(n),c(),this.setAttribute("position",new de(s,3)),this.setAttribute("normal",new de(s.slice(),3)),this.setAttribute("uv",new de(r,2)),i===0)this.computeVertexNormals();else this.normalizeNormals();function a(u){let w=new L,R=new L,v=new L;for(let b=0;b<e.length;b+=3)h(e[b+0],w),h(e[b+1],R),h(e[b+2],v),o(w,R,v,u)}function o(u,w,R,v){let b=v+1,A=[];for(let T=0;T<=b;T++){A[T]=[];let g=u.clone().lerp(R,T/b),S=w.clone().lerp(R,T/b),z=b-T;for(let C=0;C<=z;C++)if(C===0&&T===b)A[T][C]=g;else A[T][C]=g.clone().lerp(S,C/z)}for(let T=0;T<b;T++)for(let g=0;g<2*(b-T)-1;g++){let S=Math.floor(g/2);if(g%2===0)p(A[T][S+1]),p(A[T+1][S]),p(A[T][S]);else p(A[T][S+1]),p(A[T+1][S+1]),p(A[T+1][S])}}function l(u){let w=new L;for(let R=0;R<s.length;R+=3)w.x=s[R+0],w.y=s[R+1],w.z=s[R+2],w.normalize().multiplyScalar(u),s[R+0]=w.x,s[R+1]=w.y,s[R+2]=w.z}function c(){let u=new L;for(let w=0;w<s.length;w+=3){u.x=s[w+0],u.y=s[w+1],u.z=s[w+2];let R=E(u)/2/Math.PI+0.5,v=m(u)/Math.PI+0.5;r.push(R,1-v)}f(),d()}function d(){for(let u=0;u<r.length;u+=6){let w=r[u+0],R=r[u+2],v=r[u+4],b=Math.max(w,R,v),A=Math.min(w,R,v);if(b>0.9&&A<0.1){if(w<0.2)r[u+0]+=1;if(R<0.2)r[u+2]+=1;if(v<0.2)r[u+4]+=1}}}function p(u){s.push(u.x,u.y,u.z)}function h(u,w){let R=u*3;w.x=t[R+0],w.y=t[R+1],w.z=t[R+2]}function f(){let u=new L,w=new L,R=new L,v=new L,b=new Et,A=new Et,T=new Et;for(let g=0,S=0;g<s.length;g+=9,S+=6){u.set(s[g+0],s[g+1],s[g+2]),w.set(s[g+3],s[g+4],s[g+5]),R.set(s[g+6],s[g+7],s[g+8]),b.set(r[S+0],r[S+1]),A.set(r[S+2],r[S+3]),T.set(r[S+4],r[S+5]),v.copy(u).add(w).add(R).divideScalar(3);let z=E(v);_(b,S+0,u,z),_(A,S+2,w,z),_(T,S+4,R,z)}}function _(u,w,R,v){if(v<0&&u.x===1)r[w]=u.x-1;if(R.x===0&&R.z===0)r[w]=v/2/Math.PI+0.5}function E(u){return Math.atan2(u.z,-u.x)}function m(u){return Math.atan2(-u.y,Math.sqrt(u.x*u.x+u.z*u.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.vertices,t.indices,t.radius,t.detail)}}class Hi extends xr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e);this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hi(t.radius,t.detail)}}class Pe extends ze{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,d=t/a,p=e/o,h=[],f=[],_=[],E=[];for(let m=0;m<c;m++){let u=m*p-r;for(let w=0;w<l;w++){let R=w*d-s;f.push(R,-u,0),_.push(0,0,1),E.push(w/a),E.push(1-m/o)}}for(let m=0;m<o;m++)for(let u=0;u<a;u++){let w=u+l*m,R=u+l*(m+1),v=u+1+l*(m+1),b=u+1+l*m;h.push(w,R,b),h.push(R,v,b)}this.setIndex(h),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.widthSegments,t.heightSegments)}}class je extends ze{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],d=new L,p=new L,h=[],f=[],_=[],E=[];for(let m=0;m<=n;m++){let u=[],w=m/n,R=r+w*a,v=t*Math.cos(R),b=Math.sqrt(t*t-v*v),A=0;if(m===0&&r===0)A=0.5/e;else if(m===n&&o===Math.PI)A=-0.5/e;for(let T=0;T<=e;T++){let g=T/e,S=i+g*s;d.x=-b*Math.cos(S),d.y=v,d.z=b*Math.sin(S),f.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),E.push(g+A,1-w),u.push(l++)}c.push(u)}for(let m=0;m<n;m++)for(let u=0;u<e;u++){let w=c[m][u+1],R=c[m][u],v=c[m+1][u],b=c[m+1][u+1];if(m!==0||r>0)h.push(w,R,b);if(m!==n-1||o<Math.PI)h.push(R,v,b)}this.setIndex(h),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gi extends ze{constructor(t=1,e=0.4,n=12,i=48,s=Math.PI*2,r=0,a=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],d=[],p=new L,h=new L,f=new L;for(let _=0;_<=n;_++){let E=r+_/n*a;for(let m=0;m<=i;m++){let u=m/i*s;h.x=(t+e*Math.cos(E))*Math.cos(u),h.y=(t+e*Math.cos(E))*Math.sin(u),h.z=e*Math.sin(E),l.push(h.x,h.y,h.z),p.x=t*Math.cos(u),p.y=t*Math.sin(u),f.subVectors(h,p).normalize(),c.push(f.x,f.y,f.z),d.push(m/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let E=1;E<=i;E++){let m=(i+1)*_+E-1,u=(i+1)*(_-1)+E-1,w=(i+1)*(_-1)+E,R=(i+1)*_+E;o.push(m,u,R),o.push(u,w,R)}this.setIndex(o),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function ci(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(Gl(s))if(s.isRenderTargetTexture)It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(Gl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Ue(t){let e={};for(let n=0;n<t.length;n++){let i=ci(t[n]);for(let s in i)e[s]=i[s]}return e}function Gl(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Ed(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function yo(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return Yt.workingColorSpace}var $c={clone:ci,merge:Ue},Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends ai{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ci(t.uniforms),this.uniformsGroups=Ed(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Et().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new me().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class vo extends sn{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xt extends ai{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class So extends ai{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mo extends ai{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function wi(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function la(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class hi{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class bo extends hi{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,h=this._weightNext,f=(n-e)/(i-e),_=f*f,E=_*f,m=-p*E+2*p*_-p*f,u=(1+p)*E+(-1.5-2*p)*_+(-0.5+p)*f+1,w=(-1-h)*E+(1.5+h)*_+0.5*f,R=h*E-h*_;for(let v=0;v!==a;++v)s[v]=m*r[c+v]+u*r[l+v]+w*r[o+v]+R*r[d+v];return s}}class Eo extends hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),d=1-c;for(let p=0;p!==a;++p)s[p]=r[l+p]*d+r[o+p]*c;return s}}class To extends hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class wo extends hi{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,d=this.outTangents;if(!c||!d){let f=(n-e)/(i-e),_=1-f;for(let E=0;E!==a;++E)s[E]=r[l+E]*_+r[o+E]*f;return s}let p=a*2,h=t-1;for(let f=0;f!==a;++f){let _=r[l+f],E=r[o+f],m=h*p+f*2,u=d[m],w=d[m+1],R=t*p+f*2,v=c[R],b=c[R+1],A=Rd(n,e,u,v,i);s[f]=Kc(A,_,w,b,E)}return s}}function Kc(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function Ad(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function Rd(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=Kc(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=Ad(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class rn{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wi(e,this.TimeBufferType),this.values=wi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wi(t.times,Array),values:wi(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(la(t.settings))n.settings={inTangents:wi(t.settings.inTangents,Array),outTangents:wi(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new To(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wo(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(la(this.settings))kl(this.settings.inTangents,t),kl(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Nt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Nt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Nt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Nt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(Vu(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Nt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let d=a*n,p=d-n,h=d+n;for(let f=0;f!==n;++f){let _=e[d+f];if(_!==e[p+f]||_!==e[h+f]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let d=a*n,p=r*n;for(let h=0;h!==n;++h)e[p+h]=e[d+h]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,la(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function kl(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=2301;class ui extends rn{constructor(t,e,n){super(t,e,n)}}ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=2300;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;class Ao extends rn{constructor(t,e,n,i){super(t,e,n,i)}}Ao.prototype.ValueTypeName="color";class Ro extends rn{constructor(t,e,n,i){super(t,e,n,i)}}Ro.prototype.ValueTypeName="number";class Co extends hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)Xe.slerpFlat(s,0,r,l-a,r,l,o);return s}}class yr extends rn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Co(this.times,this.values,this.getValueSize(),t)}}yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;class di extends rn{constructor(t,e,n){super(t,e,n)}}di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=2300;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;class Po extends rn{constructor(t,e,n,i){super(t,e,n,i)}}Po.prototype.ValueTypeName="vector";class Io{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,d){return l.push(c,d),this},this.removeHandler=function(c){let d=l.indexOf(c);if(d!==-1)l.splice(d,2);return this},this.getHandler=function(c){for(let d=0,p=l.length;d<p;d+=2){let h=l[d],f=l[d+1];if(h.global)h.lastIndex=0;if(h.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var jc=new Io;class Lo{constructor(t){if(this.manager=t!==void 0?t:jc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Lo.DEFAULT_MATERIAL_NAME="__DEFAULT";class xs extends ve{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class vr extends xs{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}var ca=new ae,Vl=new L,Wl=new L;class Do{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vl),Wl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ca,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var Js=new L,$s=new Xe,_n=new L;class Sr extends ve{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(Js,$s,_n),_n.x===1&&_n.y===1&&_n.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Js,$s,_n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Js,$s,_n),_n.x===1&&_n.y===1&&_n.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Js,$s,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Gn=new L,Xl=new Et,ql=new Et;class Be extends Sr{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=Li*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ss*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return Li*2*Math.atan(Math.tan(ss*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,Xl,ql),e.subVectors(ql,Xl)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ss*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ys extends Sr{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class Qc extends Do{constructor(){super(new ys(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Mr extends xs{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Qc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class br extends xs{constructor(t,e){super(t,e);this.isAmbientLight=!0,this.type="AmbientLight"}}var Ai=-90,Ri=1;class No extends ve{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Be(Ai,Ri,t,e);i.layers=this.layers,this.add(i);let s=new Be(Ai,Ri,t,e);s.layers=this.layers,this.add(s);let r=new Be(Ai,Ri,t,e);r.layers=this.layers,this.add(r);let a=new Be(Ai,Ri,t,e);a.layers=this.layers,this.add(a);let o=new Be(Ai,Ri,t,e);o.layers=this.layers,this.add(o);let l=new Be(Ai,Ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let E=!1;if(t.isWebGLRenderer===!0)E=t.state.buffers.depth.getReversed();else E=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),E&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),E&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),E&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),E&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),E&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),E&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(d,p,h),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Uo extends Be{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Er{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){if(this._document=t,t.hidden!==void 0)this._pageVisibilityHandler=Cd.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function Cd(){if(this._document.hidden===!1)this.reset()}var Fo="\\[\\]\\.:\\/",Pd=new RegExp("["+Fo+"]","g"),Oo="[^"+Fo+"]",Id="[^"+Fo.replace("\\.","")+"]",Ld=/((?:WC+[\/:])*)/.source.replace("WC",Oo),Dd=/(WCOD+)?/.source.replace("WCOD",Id),Nd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oo),Ud=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oo),Fd=new RegExp("^"+Ld+Dd+Nd+Ud+"$"),Od=["material","materials","bones","map"];class th{constructor(t,e,n){let i=n||ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ie{constructor(t,e,n){this.path=e,this.parsedPath=n||ie.parseTrackName(e),this.node=ie.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new ie(t,e,n);else return new ie.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pd,"")}static parseTrackName(t){let e=Fd.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Od.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=ie.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ie.Composite=th;ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ie.prototype.GetterByBindingType=[ie.prototype._getValue_direct,ie.prototype._getValue_array,ie.prototype._getValue_arrayElement,ie.prototype._getValue_toArray];ie.prototype.SetterByBindingTypeAndVersioning=[[ie.prototype._setValue_direct,ie.prototype._setValue_direct_setNeedsUpdate,ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_array,ie.prototype._setValue_array_setNeedsUpdate,ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_arrayElement,ie.prototype._setValue_arrayElement_setNeedsUpdate,ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_fromArray,ie.prototype._setValue_fromArray_setNeedsUpdate,ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jg=new Float32Array(1);var Yl=new ae;class Tr{constructor(t,e,n=0,i=1/0){this.ray=new Bi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){if(e.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,0.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e;else if(e.isOrthographicCamera)this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e;else Nt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yl),this}intersectObject(t,e=!0,n=[]){return ha(t,this,n,e),n.sort(Zl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ha(t[i],this,n,e);return n.sort(Zl),n}}function Zl(t,e){return t.distance-e.distance}function ha(t,e,n,i){let s=!0;if(t.layers.test(e.layers)){if(t.raycast(e,n)===!1)s=!1}if(s===!0&&i===!0){let r=t.children;for(let a=0,o=r.length;a<o;a++)ha(r[a],e,n,!0)}}class vs{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){if(this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class Bo{static{Bo.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}class wr extends Sn{constructor(t,e=null){super();this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(this.domElement!==null)this.disconnect();this.domElement=t}disconnect(){}dispose(){}update(){}}function zo(t,e,n,i){let s=Bd(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Bd(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)It("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function Mh(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function zd(t){let e=new WeakMap;function n(o,l){let{array:c,usage:d}=o,p=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)f=t.HALF_FLOAT;else f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let{array:d,updateRanges:p}=l;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,d);else{p.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<p.length;f++){let _=p[h],E=p[f];if(E.start<=_.start+_.count+1)_.count=Math.max(_.count,E.start+E.count-_.start);else++h,p[h]=E}p.length=h+1;for(let f=0,_=p.length;f<_;f++){let E=p[f];t.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let d=e.get(o);if(!d||d.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,df=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_f="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Df=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Np=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;var Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$p=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,em=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Hd,alphahash_pars_fragment:Gd,alphamap_fragment:kd,alphamap_pars_fragment:Vd,alphatest_fragment:Wd,alphatest_pars_fragment:Xd,aomap_fragment:qd,aomap_pars_fragment:Yd,batching_pars_vertex:Zd,batching_vertex:Jd,begin_vertex:$d,beginnormal_vertex:Kd,bsdfs:jd,iridescence_fragment:Qd,bumpmap_pars_fragment:tf,clipping_planes_fragment:ef,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:rf,color_fragment:af,color_pars_fragment:of,color_pars_vertex:lf,color_vertex:cf,common:hf,cube_uv_reflection_fragment:uf,defaultnormal_vertex:df,displacementmap_pars_vertex:ff,displacementmap_vertex:pf,emissivemap_fragment:mf,emissivemap_pars_fragment:gf,colorspace_fragment:_f,colorspace_pars_fragment:xf,envmap_fragment:yf,envmap_common_pars_fragment:vf,envmap_pars_fragment:Sf,envmap_pars_vertex:Mf,envmap_physical_pars_fragment:Df,envmap_vertex:bf,fog_vertex:Ef,fog_pars_vertex:Tf,fog_fragment:wf,fog_pars_fragment:Af,gradientmap_pars_fragment:Rf,lightmap_pars_fragment:Cf,lights_lambert_fragment:Pf,lights_lambert_pars_fragment:If,lights_pars_begin:Lf,lights_toon_fragment:Nf,lights_toon_pars_fragment:Uf,lights_phong_fragment:Ff,lights_phong_pars_fragment:Of,lights_physical_fragment:Bf,lights_physical_pars_fragment:zf,lights_fragment_begin:Hf,lights_fragment_maps:Gf,lights_fragment_end:kf,lightprobes_pars_fragment:Vf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:Yf,map_fragment:Zf,map_pars_fragment:Jf,map_particle_fragment:$f,map_particle_pars_fragment:Kf,metalnessmap_fragment:jf,metalnessmap_pars_fragment:Qf,morphinstance_vertex:tp,morphcolor_vertex:ep,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:sp,normal_fragment_begin:rp,normal_fragment_maps:ap,normal_pars_fragment:op,normal_pars_vertex:lp,normal_vertex:cp,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:up,clearcoat_normal_fragment_maps:dp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:pp,opaque_fragment:mp,packing:gp,premultiplied_alpha_fragment:_p,project_vertex:xp,dithering_fragment:yp,dithering_pars_fragment:vp,roughnessmap_fragment:Sp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:Ep,shadowmap_vertex:Tp,shadowmask_pars_fragment:wp,skinbase_vertex:Ap,skinning_pars_vertex:Rp,skinning_vertex:Cp,skinnormal_vertex:Pp,specularmap_fragment:Ip,specularmap_pars_fragment:Lp,tonemapping_fragment:Dp,tonemapping_pars_fragment:Np,transmission_fragment:Up,transmission_pars_fragment:Fp,uv_pars_fragment:Op,uv_pars_vertex:Bp,uv_vertex:zp,worldpos_vertex:Hp,background_vert:Gp,background_frag:kp,backgroundCube_vert:Vp,backgroundCube_frag:Wp,cube_vert:Xp,cube_frag:qp,depth_vert:Yp,depth_frag:Zp,distance_vert:Jp,distance_frag:$p,equirect_vert:Kp,equirect_frag:jp,linedashed_vert:Qp,linedashed_frag:tm,meshbasic_vert:em,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:sm,meshmatcap_vert:rm,meshmatcap_frag:am,meshnormal_vert:om,meshnormal_frag:lm,meshphong_vert:cm,meshphong_frag:hm,meshphysical_vert:um,meshphysical_frag:dm,meshtoon_vert:fm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:_m,shadow_frag:xm,sprite_vert:ym,sprite_frag:vm},dt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Et(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},bn={basic:{uniforms:Ue([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ue([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ue([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ue([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ue([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ue([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ue([dt.points,dt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ue([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ue([dt.common,dt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ue([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ue([dt.sprite,dt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Ue([dt.common,dt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Ue([dt.lights,dt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};bn.physical={uniforms:Ue([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Ar={r:0,b:0,g:0},Sm=new ae,bh=new Ft;bh.set(-1,0,0,0,1,0,0,0,1);function Mm(t,e,n,i,s,r){let a=new Gt(0),o=s===!0?0:1,l,c,d=null,p=0,h=null;function f(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){let v=w.backgroundBlurriness>0;R=e.get(R,v)}return R}function _(w){let R=!1,v=f(w);if(v===null)m(a,o);else if(v&&v.isColor)m(v,1),R=!0;let b=t.xr.getEnvironmentBlendMode();if(b==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(b==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||R)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function E(w,R){let v=f(R);if(v&&(v.isCubeTexture||v.mapping===ls)){if(c===void 0)c=new Pt(new He(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:ci(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(bh);if(c.material.toneMapped=Yt.getTransfer(v.colorSpace)!==le,d!==v||p!==v.version||h!==t.toneMapping)c.material.needsUpdate=!0,d=v,p=v.version,h=t.toneMapping;c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)}else if(v&&v.isTexture){if(l===void 0)l=new Pt(new Pe(2,2),new sn({name:"BackgroundMaterial",uniforms:ci(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0)v.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(v.matrix),d!==v||p!==v.version||h!==t.toneMapping)l.material.needsUpdate=!0,d=v,p=v.version,h=t.toneMapping;l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)}}function m(w,R){w.getRGB(Ar,yo(t)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,R,r)}function u(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(w,R=1){a.set(w),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:_,addToRenderList:E,dispose:u}}function bm(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(C,F,X,P,V){let K=!1,k=p(C,P,X,F);if(r!==k)r=k,c(r.object);if(K=f(C,P,X,V),K)_(C,P,X,V);if(V!==null)e.update(V,t.ELEMENT_ARRAY_BUFFER);if(K||a){if(a=!1,v(C,F,X,P),V!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer)}}function l(){return t.createVertexArray()}function c(C){return t.bindVertexArray(C)}function d(C){return t.deleteVertexArray(C)}function p(C,F,X,P){let V=P.wireframe===!0,K=i[F.id];if(K===void 0)K={},i[F.id]=K;let k=C.isInstancedMesh===!0?C.id:0,nt=K[k];if(nt===void 0)nt={},K[k]=nt;let q=nt[X.id];if(q===void 0)q={},nt[X.id]=q;let j=q[V];if(j===void 0)j=h(l()),q[V]=j;return j}function h(C){let F=[],X=[],P=[];for(let V=0;V<n;V++)F[V]=0,X[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:P,object:C,attributes:{},index:null}}function f(C,F,X,P){let V=r.attributes,K=F.attributes,k=0,nt=X.getAttributes();for(let q in nt)if(nt[q].location>=0){let et=V[q],Lt=K[q];if(Lt===void 0){if(q==="instanceMatrix"&&C.instanceMatrix)Lt=C.instanceMatrix;if(q==="instanceColor"&&C.instanceColor)Lt=C.instanceColor}if(et===void 0)return!0;if(et.attribute!==Lt)return!0;if(Lt&&et.data!==Lt.data)return!0;k++}if(r.attributesNum!==k)return!0;if(r.index!==P)return!0;return!1}function _(C,F,X,P){let V={},K=F.attributes,k=0,nt=X.getAttributes();for(let q in nt)if(nt[q].location>=0){let et=K[q];if(et===void 0){if(q==="instanceMatrix"&&C.instanceMatrix)et=C.instanceMatrix;if(q==="instanceColor"&&C.instanceColor)et=C.instanceColor}let Lt={};if(Lt.attribute=et,et&&et.data)Lt.data=et.data;V[q]=Lt,k++}r.attributes=V,r.attributesNum=k,r.index=P}function E(){let C=r.newAttributes;for(let F=0,X=C.length;F<X;F++)C[F]=0}function m(C){u(C,0)}function u(C,F){let X=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;if(X[C]=1,P[C]===0)t.enableVertexAttribArray(C),P[C]=1;if(V[C]!==F)t.vertexAttribDivisor(C,F),V[C]=F}function w(){let C=r.newAttributes,F=r.enabledAttributes;for(let X=0,P=F.length;X<P;X++)if(F[X]!==C[X])t.disableVertexAttribArray(X),F[X]=0}function R(C,F,X,P,V,K,k){if(k===!0)t.vertexAttribIPointer(C,F,X,V,K);else t.vertexAttribPointer(C,F,X,P,V,K)}function v(C,F,X,P){E();let V=P.attributes,K=X.getAttributes(),k=F.defaultAttributeValues;for(let nt in K){let q=K[nt];if(q.location>=0){let j=V[nt];if(j===void 0){if(nt==="instanceMatrix"&&C.instanceMatrix)j=C.instanceMatrix;if(nt==="instanceColor"&&C.instanceColor)j=C.instanceColor}if(j!==void 0){let et=j.normalized,Lt=j.itemSize,At=e.get(j);if(At===void 0)continue;let{buffer:ce,type:kt,bytesPerElement:Y}=At,it=kt===t.INT||kt===t.UNSIGNED_INT||j.gpuType===ba;if(j.isInterleavedBufferAttribute){let at=j.data,Rt=at.stride,Dt=j.offset;if(at.isInstancedInterleavedBuffer){for(let Tt=0;Tt<q.locationSize;Tt++)u(q.location+Tt,at.meshPerAttribute);if(C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=at.meshPerAttribute*at.count}else for(let Tt=0;Tt<q.locationSize;Tt++)m(q.location+Tt);t.bindBuffer(t.ARRAY_BUFFER,ce);for(let Tt=0;Tt<q.locationSize;Tt++)R(q.location+Tt,Lt/q.locationSize,kt,et,Rt*Y,(Dt+Lt/q.locationSize*Tt)*Y,it)}else{if(j.isInstancedBufferAttribute){for(let at=0;at<q.locationSize;at++)u(q.location+at,j.meshPerAttribute);if(C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=j.meshPerAttribute*j.count}else for(let at=0;at<q.locationSize;at++)m(q.location+at);t.bindBuffer(t.ARRAY_BUFFER,ce);for(let at=0;at<q.locationSize;at++)R(q.location+at,Lt/q.locationSize,kt,et,Lt*Y,Lt/q.locationSize*at*Y,it)}}else if(k!==void 0){let et=k[nt];if(et!==void 0)switch(et.length){case 2:t.vertexAttrib2fv(q.location,et);break;case 3:t.vertexAttrib3fv(q.location,et);break;case 4:t.vertexAttrib4fv(q.location,et);break;default:t.vertexAttrib1fv(q.location,et)}}}}w()}function b(){S();for(let C in i){let F=i[C];for(let X in F){let P=F[X];for(let V in P){let K=P[V];for(let k in K)d(K[k].object),delete K[k];delete P[V]}}delete i[C]}}function A(C){if(i[C.id]===void 0)return;let F=i[C.id];for(let X in F){let P=F[X];for(let V in P){let K=P[V];for(let k in K)d(K[k].object),delete K[k];delete P[V]}}delete i[C.id]}function T(C){for(let F in i){let X=i[F];for(let P in X){let V=X[P];if(V[C.id]===void 0)continue;let K=V[C.id];for(let k in K)d(K[k].object),delete K[k];delete V[C.id]}}}function g(C){for(let F in i){let X=i[F],P=C.isInstancedMesh===!0?C.id:0,V=X[P];if(V===void 0)continue;for(let K in V){let k=V[K];for(let nt in k)d(k[nt].object),delete k[nt];delete V[K]}if(delete X[P],Object.keys(X).length===0)delete i[F]}}function S(){if(z(),a=!0,r===s)return;r=s,c(r.object)}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:z,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:T,initAttributes:E,enableAttribute:m,disableUnusedAttributes:w}}function Em(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,d){if(d===0)return;t.drawArraysInstanced(i,l,c,d),n.update(c,i,d)}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Tm(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){if(T!==vn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(T){let g=T===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(T!==fn&&T!==Dn&&!g&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}if(T==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",d=l(c);if(d!==c)It("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d;let p=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&h===!1)It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),R=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:v,maxSamples:b,samples:A}}function wm(t){let e=this,n=null,i=0,s=!1,r=!1,a=new en,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let f=p.length!==0||h||i!==0||s;return s=h,i=p.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){n=d(p,h,0)},this.setState=function(p,h,f){let{clippingPlanes:_,clipIntersection:E,clipShadows:m}=p,u=t.get(p);if(!s||_===null||_.length===0||r&&!m)if(r)d(null);else c();else{let w=r?0:i,R=w*4,v=u.clippingState||null;l.value=v,v=d(_,h,R,f);for(let b=0;b!==R;++b)v[b]=n[b];u.clippingState=v,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=w}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function d(p,h,f,_){let E=p!==null?p.length:0,m=null;if(E!==0){if(m=l.value,_!==!0||m===null){let u=f+E*4,w=h.matrixWorldInverse;if(o.getNormalMatrix(w),m===null||m.length<u)m=new Float32Array(u);for(let R=0,v=f;R!==E;++R,v+=4)a.copy(p[R]).applyMatrix4(w,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}var Vi=4,Am=6,Rm=20,Cm=256,Ss=new ys,eh=new Gt,Ho=null,Go=0,ko=0,Vo=!1,Pm=new L,fi=new L;class qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=Pm}=s;Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ho,Go,ko),this._renderer.xr.enabled=Vo,t.scissorTest=!1,ki(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===Ui||t.mapping===Qn)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:yn,format:vn,colorSpace:ao,depthBuffer:!1},i=nh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=nh(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Im(s)),this._blurMaterial=Dm(s,t,e),this._ggxMaterial=Lm(s,t,e)}return i}_compileMaterial(t){let e=new Pt(new ze,t);this._renderer.compile(e,Ss)}_sceneToCubeUV(t,e,n,i,s){let o=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,{autoClear:p,toneMapping:h}=d;if(d.getClearColor(eh),d.toneMapping=dn,d.autoClear=!1,d.state.buffers.depth.getReversed())d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Pt(new He,new pr({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}));let _=this._backgroundBox,E=_.material,m=!1,u=t.background;if(u){if(u.isColor)E.color.copy(u),t.background=null,m=!0}else E.color.copy(eh),m=!0;for(let w=0;w<6;w++){let R=w%3;if(R===0)o.up.set(0,l[w],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[w],s.y,s.z);else if(R===1)o.up.set(0,0,l[w]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[w],s.z);else o.up.set(0,l[w],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[w]);let v=this._cubeSize;if(ki(i,R*v,w>2?v:0,v,v),d.setRenderTarget(i),m)d.render(_,o);d.render(t,o)}d.toneMapping=h,d.autoClear=p,t.background=u}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ui||t.mapping===Qn;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=sh();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=ih();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;ki(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,Ss)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-c*c),p=l*1.25,h=d*p,{_lodMax:f}=this,_=this._sizeLods[n],E=3*_*(n>f-Vi?n-f+Vi:0),m=4*(this._cubeSize-_);o.envMap.value=t.texture,o.roughness.value=h,o.mipInt.value=f-e,ki(s,E,m,3*_,2*_),i.setRenderTarget(s),i.render(a,Ss),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=f-n,ki(t,E,m,3*_,2*_),i.setRenderTarget(t),i.render(a,Ss)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,r),this._blurPass(s,t,n,n,r)}_blurPass(t,e,n,i,s){let r=this._renderer,a=this._blurMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let c=this._sizeLods[i],d=3*c*(i>this._lodMax-Vi?i-this._lodMax+Vi:0),p=4*(this._cubeSize-c);ki(e,d,p,3*c,2*c),r.setRenderTarget(e),r.render(o,Ss)}}function Im(t){let e=[],n=[],i=t,s=t-Vi+1+Am;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,h=6,f=3,_=new Float32Array(f*h*p),E=new Float32Array(f*h*p);for(let u=0;u<p;u++){let w=u%3*2/3-1,R=u>2?0:-1,v=[w,R,0,w+0.6666666666666666,R,0,w+0.6666666666666666,R+1,0,w,R,0,w+0.6666666666666666,R+1,0,w,R+1,0];_.set(v,f*h*u);for(let b=0;b<h;b++){let A=d[b*2]*2-1,T=d[b*2+1]*2-1;if(u===0)fi.set(1,T,A);else if(u===1)fi.set(-A,1,-T);else if(u===2)fi.set(-A,T,1);else if(u===3)fi.set(-1,T,-A);else if(u===4)fi.set(-A,-1,T);else fi.set(A,T,-1);fi.toArray(E,(u*h+b)*f)}}let m=new ze;if(m.setAttribute("position",new hn(_,f)),m.setAttribute("outputDirection",new hn(E,f)),n.push(new Pt(m,null)),i>Vi)i--}return{lodMeshes:n,sizeLods:e}}function nh(t,e,n){let i=new Ke(t,e,n);return i.texture.mapping=ls,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ki(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function Lm(t,e,n){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Dm(t,e,n){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:Rm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function ih(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function sh(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Cr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jo extends Ke{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new mr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new He(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:xn});s.uniforms.tEquirect.value=e;let r=new Pt(i,s),a=e.minFilter;if(e.minFilter===ti)e.minFilter=We;return new No(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function Nm(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,f=!1){if(h===null||h===void 0)return null;if(f)return a(h);return r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Ks||f===js)if(e.has(h)){let _=e.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let E=new Jo(_.height);return E.fromEquirectangularTexture(t,h),e.set(h,E),h.addEventListener("dispose",c),o(E.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,_=f===Ks||f===js,E=f===Ui||f===Qn;if(_||E){let m=n.get(h),u=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u){if(i===null)i=new qo(t);return m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture}else if(m!==void 0)return m.texture;else{let w=h.image;if(_&&w&&w.height>0||E&&w&&l(w)){if(i===null)i=new qo(t);return m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",d),m.texture}else return null}}}return h}function o(h,f){if(f===Ks)h.mapping=Ui;else if(f===js)h.mapping=Qn;return h}function l(h){let f=0,_=6;for(let E=0;E<_;E++)if(h[E]!==void 0)f++;return f===_}function c(h){let f=h.target;f.removeEventListener("dispose",c);let _=e.get(f);if(_!==void 0)e.delete(f),_.dispose()}function d(h){let f=h.target;f.removeEventListener("dispose",d);let _=n.get(f);if(_!==void 0)n.delete(f),_.dispose()}function p(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:p}}function Um(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Kn("WebGLRenderer: "+i+" extension not supported.");return s}}}function Fm(t,e,n,i){let s={},r=new WeakMap;function a(p){let h=p.target;if(h.index!==null)e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);if(f)e.remove(f),r.delete(h);if(i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0)delete h._maxInstanceCount;n.memory.geometries--}function o(p,h){if(s[h.id]===!0)return h;return h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++,h}function l(p){let h=p.attributes;for(let f in h)e.update(h[f],t.ARRAY_BUFFER)}function c(p){let h=[],f=p.index,_=p.attributes.position,E=0;if(_===void 0)return;if(f!==null){let w=f.array;E=f.version;for(let R=0,v=w.length;R<v;R+=3){let b=w[R+0],A=w[R+1],T=w[R+2];h.push(b,A,A,T,T,b)}}else{let w=_.array;E=_.version;for(let R=0,v=w.length/3-1;R<v;R+=3){let b=R+0,A=R+1,T=R+2;h.push(b,A,A,T,T,b)}}let m=new(_.count>=65535?fr:dr)(h,1);m.version=E;let u=r.get(p);if(u)e.remove(u);r.set(p,m)}function d(p){let h=r.get(p);if(h){let f=p.index;if(f!==null){if(h.version<f.version)c(p)}}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function Om(t,e,n){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,h){t.drawElements(i,h,r,p*a),n.update(h,i,1)}function c(p,h,f){if(f===0)return;t.drawElementsInstanced(i,h,r,p*a,f),n.update(h,i,f)}function d(p,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,p,0,f);let E=0;for(let m=0;m<f;m++)E+=h[m];n.update(E,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Bm(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function zm(t,e,n){let i=new WeakMap,s=new me;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,h=i.get(o);if(h===void 0||h.count!==p){let S=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",S)};if(h!==void 0)h.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],R=0;if(f===!0)R=1;if(_===!0)R=2;if(E===!0)R=3;let v=o.attributes.position.count*R,b=1;if(v>e.maxTextureSize)b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize;let A=new Float32Array(v*b*4*p),T=new hr(A,v,b,p);T.type=Dn,T.needsUpdate=!0;let g=R*4;for(let z=0;z<p;z++){let C=m[z],F=u[z],X=w[z],P=v*b*4*z;for(let V=0;V<C.count;V++){let K=V*g;if(f===!0)s.fromBufferAttribute(C,V),A[P+K+0]=s.x,A[P+K+1]=s.y,A[P+K+2]=s.z,A[P+K+3]=0;if(_===!0)s.fromBufferAttribute(F,V),A[P+K+4]=s.x,A[P+K+5]=s.y,A[P+K+6]=s.z,A[P+K+7]=0;if(E===!0)s.fromBufferAttribute(X,V),A[P+K+8]=s.x,A[P+K+9]=s.y,A[P+K+10]=s.z,A[P+K+11]=X.itemSize===4?s.w:1}}h={count:p,texture:T,size:new Et(v,b)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function Hm(t,e,n,i,s){let r=new WeakMap;function a(c){let d=s.render.frame,p=c.geometry,h=e.get(c,p);if(r.get(h)!==d)e.update(h),r.set(h,d);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==d){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,d)}}if(c.isSkinnedMesh){let f=c.skeleton;if(r.get(f)!==d)f.update(),r.set(f,d)}return h}function o(){r=new WeakMap}function l(c){let d=c.target;if(d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null)n.remove(d.instanceColor)}return{update:a,dispose:o}}var Gm={[ga]:"LINEAR_TONE_MAPPING",[_a]:"REINHARD_TONE_MAPPING",[xa]:"CINEON_TONE_MAPPING",[ya]:"ACES_FILMIC_TONE_MAPPING",[Sa]:"AGX_TONE_MAPPING",[Ma]:"NEUTRAL_TONE_MAPPING",[va]:"CUSTOM_TONE_MAPPING"};function km(t,e,n,i,s,r){let a=new Ke(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ze;c.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new de([0,2,0,0,2,0],2));let d=new vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Pt(c,d),h=new ys(-1,1,1,-1,0,1),f=null,_=null,E=!1,m,u=null,w=[],R=!1;this.setSize=function(v,b){if(a.setSize(v,b),o!==null)o.setSize(v,b);if(l!==null)l.setSize(v,b);for(let A=0;A<w.length;A++){let T=w[A];if(T.setSize)T.setSize(v,b)}},this.setEffects=function(v){w=v,R=w.length>0&&w[0].isRenderPass===!0;let{width:b,height:A}=a;if(w.length>0&&o===null)o=new Ke(b,A,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new Ke(b,A,{type:yn,depthBuffer:!1,stencilBuffer:!1});for(let T=0;T<w.length;T++){let g=w[T];if(g.setSize)g.setSize(b,A)}},this.begin=function(v,b){if(E)return!1;if(v.toneMapping===dn&&w.length===0)return!1;if(u=b,b!==null){let{width:A,height:T}=b;if(a.width!==A||a.height!==T)this.setSize(A,T)}if(R===!1)v.setRenderTarget(a);return m=v.toneMapping,v.toneMapping=dn,!0},this.hasRenderPass=function(){return R},this.end=function(v,b){v.toneMapping=m,E=!0;let A=a,T=o;for(let g=0;g<w.length;g++){let S=w[g];if(S.enabled===!1)continue;if(S.render(v,T,A,b),S.needsSwap!==!1)A=T,T=T===o?l:o}if(f!==v.outputColorSpace||_!==v.toneMapping){if(f=v.outputColorSpace,_=v.toneMapping,d.defines={},Yt.getTransfer(f)===le)d.defines.SRGB_TRANSFER="";let g=Gm[_];if(g)d.defines[g]="";d.needsUpdate=!0}d.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(u),v.render(p,h),u=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();c.dispose(),d.dispose()}}var Eh=new Ee,Yo=new oi(1,1),Th=new hr,wh=new go,Ah=new mr,rh=[],ah=[],oh=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function Wi(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=rh[s];if(r===void 0)r=new Float32Array(s),rh[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Te(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function we(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pr(t,e){let n=ah[e];if(n===void 0)n=new Int32Array(e),ah[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Vm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function Wm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Te(n,e))return;t.uniform2fv(this.addr,e),we(n,e)}}function Xm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Te(n,e))return;t.uniform3fv(this.addr,e),we(n,e)}}function qm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Te(n,e))return;t.uniform4fv(this.addr,e),we(n,e)}}function Ym(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Te(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),we(n,e)}else{if(Te(n,i))return;ch.set(i),t.uniformMatrix2fv(this.addr,!1,ch),we(n,i)}}function Zm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Te(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),we(n,e)}else{if(Te(n,i))return;lh.set(i),t.uniformMatrix3fv(this.addr,!1,lh),we(n,i)}}function Jm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Te(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),we(n,e)}else{if(Te(n,i))return;oh.set(i),t.uniformMatrix4fv(this.addr,!1,oh),we(n,i)}}function $m(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function Km(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Te(n,e))return;t.uniform2iv(this.addr,e),we(n,e)}}function jm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Te(n,e))return;t.uniform3iv(this.addr,e),we(n,e)}}function Qm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Te(n,e))return;t.uniform4iv(this.addr,e),we(n,e)}}function t0(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function e0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Te(n,e))return;t.uniform2uiv(this.addr,e),we(n,e)}}function n0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Te(n,e))return;t.uniform3uiv(this.addr,e),we(n,e)}}function i0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Te(n,e))return;t.uniform4uiv(this.addr,e),we(n,e)}}function s0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)Yo.compareFunction=n.isReversedDepthBuffer()?cr:lr,r=Yo;else r=Eh;n.setTexture2D(e||r,s)}function r0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||wh,s)}function a0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||Ah,s)}function o0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Th,s)}function l0(t){switch(t){case 5126:return Vm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return t0;case 36294:return e0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return o0}}function c0(t,e){t.uniform1fv(this.addr,e)}function h0(t,e){let n=Wi(e,this.size,2);t.uniform2fv(this.addr,n)}function u0(t,e){let n=Wi(e,this.size,3);t.uniform3fv(this.addr,n)}function d0(t,e){let n=Wi(e,this.size,4);t.uniform4fv(this.addr,n)}function f0(t,e){let n=Wi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function p0(t,e){let n=Wi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function m0(t,e){let n=Wi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function g0(t,e){t.uniform1iv(this.addr,e)}function _0(t,e){t.uniform2iv(this.addr,e)}function x0(t,e){t.uniform3iv(this.addr,e)}function y0(t,e){t.uniform4iv(this.addr,e)}function v0(t,e){t.uniform1uiv(this.addr,e)}function S0(t,e){t.uniform2uiv(this.addr,e)}function M0(t,e){t.uniform3uiv(this.addr,e)}function b0(t,e){t.uniform4uiv(this.addr,e)}function E0(t,e,n){let i=this.cache,s=e.length,r=Pr(n,s);if(!Te(i,r))t.uniform1iv(this.addr,r),we(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=Yo;else a=Eh;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function T0(t,e,n){let i=this.cache,s=e.length,r=Pr(n,s);if(!Te(i,r))t.uniform1iv(this.addr,r),we(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||wh,r[a])}function w0(t,e,n){let i=this.cache,s=e.length,r=Pr(n,s);if(!Te(i,r))t.uniform1iv(this.addr,r),we(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Ah,r[a])}function A0(t,e,n){let i=this.cache,s=e.length,r=Pr(n,s);if(!Te(i,r))t.uniform1iv(this.addr,r),we(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Th,r[a])}function R0(t){switch(t){case 5126:return c0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return x0;case 35669:case 35673:return y0;case 5125:return v0;case 36294:return S0;case 36295:return M0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return A0}}class Rh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=l0(e.type)}}class Ch{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R0(e.type)}}class Ph{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var Wo=/(\w+)(\])?(\[|\.)?/g;function hh(t,e){t.seq.push(e),t.map[e.id]=e}function C0(t,e,n){let i=t.name,s=i.length;Wo.lastIndex=0;while(!0){let r=Wo.exec(i),a=Wo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){hh(n,c===void 0?new Rh(o,t,e):new Ch(o,t,e));break}else{let p=n.map[o];if(p===void 0)p=new Ph(o),hh(n,p);n=p}}}class Es{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);C0(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function uh(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var P0=37297,I0=0;function L0(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var dh=new Ft;function D0(t){Yt._getMatrix(dh,Yt.workingColorSpace,t);let e=`mat3( ${dh.elements.map((n)=>n.toFixed(4))} )`;switch(Yt.getTransfer(t)){case oo:return[e,"LinearTransferOETF"];case le:return[e,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function fh(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+L0(t.getShaderSource(e),o)}else return r}function N0(t,e){let n=D0(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var U0={[ga]:"Linear",[_a]:"Reinhard",[xa]:"Cineon",[ya]:"ACESFilmic",[Sa]:"AgX",[Ma]:"Neutral",[va]:"Custom"};function F0(t,e){let n=U0[e];if(n===void 0)return It("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Rr=new L;function O0(){Yt.getLuminanceCoefficients(Rr);let t=Rr.x.toFixed(4),e=Rr.y.toFixed(4),n=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function B0(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function z0(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function H0(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function bs(t){return t!==""}function ph(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(t){return t.replace(G0,V0)}var k0=new Map;function V0(t,e){let n=Ht[e];if(n===void 0){let i=k0.get(e);if(i!==void 0)n=Ht[i],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zo(n)}var W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gh(t){return t.replace(W0,X0)}function X0(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _h(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}var q0={[jn]:"SHADOWMAP_TYPE_PCF",[Di]:"SHADOWMAP_TYPE_VSM"};function Y0(t){return q0[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Z0={[Ui]:"ENVMAP_TYPE_CUBE",[Qn]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE_UV"};function J0(t){if(t.envMap===!1)return"ENVMAP_TYPE_CUBE";return Z0[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var $0={[Qn]:"ENVMAP_MODE_REFRACTION"};function K0(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return $0[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var j0={[wc]:"ENVMAP_BLENDING_MULTIPLY",[Ac]:"ENVMAP_BLENDING_MIX",[Rc]:"ENVMAP_BLENDING_ADD"};function Q0(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return j0[t.combine]||"ENVMAP_BLENDING_NONE"}function tg(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function eg(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=Y0(n),c=J0(n),d=K0(n),p=Q0(n),h=tg(n),f=B0(n),_=z0(r),E=s.createProgram(),m,u,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(bs).join(`
`),m.length>0)m+=`
`;if(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(bs).join(`
`),u.length>0)u+=`
`}else m=[_h(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),u=[_h(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dn?"#define TONE_MAPPING":"",n.toneMapping!==dn?Ht.tonemapping_pars_fragment:"",n.toneMapping!==dn?F0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,N0("linearToOutputTexel",n.outputColorSpace),O0(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bs).join(`
`);if(a=Zo(a),a=ph(a,n),a=mh(a,n),o=Zo(o),o=ph(o,n),o=mh(o,n),a=gh(a),o=gh(o),n.isRawShaderMaterial!==!0)w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u;let R=w+m+a,v=w+u+o,b=uh(s,s.VERTEX_SHADER,R),A=uh(s,s.FRAGMENT_SHADER,v);if(s.attachShader(E,b),s.attachShader(E,A),n.index0AttributeName!==void 0)s.bindAttribLocation(E,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(E,0,"position");s.linkProgram(E);function T(C){if(t.debug.checkShaderErrors){let F=s.getProgramInfoLog(E)||"",X=s.getShaderInfoLog(b)||"",P=s.getShaderInfoLog(A)||"",V=F.trim(),K=X.trim(),k=P.trim(),nt=!0,q=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(nt=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,E,b,A);else{let j=fh(s,b,"vertex"),et=fh(s,A,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+j+`
`+et)}else if(V!=="")It("WebGLProgram: Program Info Log:",V);else if(K===""||k==="")q=!1;if(q)C.diagnostics={runnable:nt,programLog:V,vertexShader:{log:K,prefix:m},fragmentShader:{log:k,prefix:u}}}s.deleteShader(b),s.deleteShader(A),g=new Es(s,E),S=H0(s,E)}let g;this.getUniforms=function(){if(g===void 0)T(this);return g};let S;this.getAttributes=function(){if(S===void 0)T(this);return S};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(z===!1)z=s.getProgramParameter(E,P0);return z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=I0++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=A,this}var ng=0;class Ih{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Lh(t),e.set(t,n);return n}}class Lh{constructor(t){this.id=ng++,this.code=t,this.usedTimes=0}}function ig(t){return t===ii||t===rr||t===ar}function sg(t,e,n,i,s,r){let a=new fs,o=new Ih,l=new Set,c=[],d=new Map,{logarithmicDepthBuffer:p,precision:h}=i,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function E(g,S,z,C,F,X){let P=C.fog,V=F.geometry,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,nt=e.get(g.envMap||K,k),q=!!nt&&nt.mapping===ls?nt.image.height:null,j=f[g.type];if(g.precision!==null){if(h=i.getMaxPrecision(g.precision),h!==g.precision)It("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead.")}let et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Lt=et!==void 0?et.length:0,At=0;if(V.morphAttributes.position!==void 0)At=1;if(V.morphAttributes.normal!==void 0)At=2;if(V.morphAttributes.color!==void 0)At=3;let ce,kt,Y,it;if(j){let he=bn[j];ce=he.vertexShader,kt=he.fragmentShader}else{ce=g.vertexShader,kt=g.fragmentShader;let he=o.getVertexShaderStage(g),Qt=o.getFragmentShaderStage(g);o.update(g,he,Qt),Y=he.id,it=Qt.id}let at=t.getRenderTarget(),Rt=t.state.buffers.depth.getReversed(),Dt=F.isInstancedMesh===!0,Tt=F.isBatchedMesh===!0,Se=!!g.map,qt=!!g.matcap,Zt=!!nt,ne=!!g.aoMap,Jt=!!g.lightMap,Ce=!!g.bumpMap&&g.wireframe===!1,fe=!!g.normalMap,Ge=!!g.displacementMap,Me=!!g.emissiveMap,be=!!g.metalnessMap,D=!!g.roughnessMap,ke=g.anisotropy>0,jt=g.clearcoat>0,ge=g.dispersion>0,M=g.retroreflectivity>0,x=g.iridescence>0,I=g.sheen>0,H=g.transmission>0,tt=ke&&!!g.anisotropyMap,ot=jt&&!!g.clearcoatMap,ht=jt&&!!g.clearcoatNormalMap,W=jt&&!!g.clearcoatRoughnessMap,J=x&&!!g.iridescenceMap,gt=x&&!!g.iridescenceThicknessMap,bt=I&&!!g.sheenColorMap,ut=I&&!!g.sheenRoughnessMap,st=!!g.specularMap,wt=!!g.specularColorMap,Ct=!!g.specularIntensityMap,Kt=H&&!!g.transmissionMap,U=H&&!!g.thicknessMap,lt=!!g.gradientMap,Z=!!g.alphaMap,ct=g.alphaTest>0,_t=!!g.alphaHash,Q=!!g.extensions,ft=dn;if(g.toneMapped){if(at===null||at.isXRRenderTarget===!0)ft=t.toneMapping}let Bt={shaderID:j,shaderType:g.type,shaderName:g.name,vertexShader:ce,fragmentShader:kt,defines:g.defines,customVertexShaderID:Y,customFragmentShaderID:it,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:Tt,batchingColor:Tt&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,outputColorSpace:at===null?t.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Se,matcap:qt,envMap:Zt,envMapMode:Zt&&nt.mapping,envMapCubeUVHeight:q,aoMap:ne,lightMap:Jt,bumpMap:Ce,normalMap:fe,displacementMap:Ge,emissiveMap:Me,normalMapObjectSpace:fe&&g.normalMapType===Bc,normalMapTangentSpace:fe&&g.normalMapType===ro,packedNormalMap:fe&&g.normalMapType===ro&&ig(g.normalMap.format),metalnessMap:be,roughnessMap:D,anisotropy:ke,anisotropyMap:tt,clearcoat:jt,clearcoatMap:ot,clearcoatNormalMap:ht,clearcoatRoughnessMap:W,dispersion:ge,retroreflection:M,iridescence:x,iridescenceMap:J,iridescenceThicknessMap:gt,sheen:I,sheenColorMap:bt,sheenRoughnessMap:ut,specularMap:st,specularColorMap:wt,specularIntensityMap:Ct,transmission:H,transmissionMap:Kt,thicknessMap:U,gradientMap:lt,opaque:g.transparent===!1&&g.blending===os&&g.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:_t,combine:g.combine,mapUv:Se&&_(g.map.channel),aoMapUv:ne&&_(g.aoMap.channel),lightMapUv:Jt&&_(g.lightMap.channel),bumpMapUv:Ce&&_(g.bumpMap.channel),normalMapUv:fe&&_(g.normalMap.channel),displacementMapUv:Ge&&_(g.displacementMap.channel),emissiveMapUv:Me&&_(g.emissiveMap.channel),metalnessMapUv:be&&_(g.metalnessMap.channel),roughnessMapUv:D&&_(g.roughnessMap.channel),anisotropyMapUv:tt&&_(g.anisotropyMap.channel),clearcoatMapUv:ot&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:ht&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(g.sheenRoughnessMap.channel),specularMapUv:st&&_(g.specularMap.channel),specularColorMapUv:wt&&_(g.specularColorMap.channel),specularIntensityMapUv:Ct&&_(g.specularIntensityMap.channel),transmissionMapUv:Kt&&_(g.transmissionMap.channel),thicknessMapUv:U&&_(g.thicknessMap.channel),alphaMapUv:Z&&_(g.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(fe||ke),vertexNormals:!!V.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Se||Z),fog:!!P,useFog:g.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||V.attributes.normal===void 0&&fe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Rt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:At,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:ft,decodeVideoTexture:Se&&g.map.isVideoTexture===!0&&Yt.getTransfer(g.map.colorSpace)===le,decodeVideoTextureEmissive:Me&&g.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(g.emissiveMap.colorSpace)===le,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===$e,flipSided:g.side===Ve,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Q&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Q&&g.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function m(g){let S=[];if(g.shaderID)S.push(g.shaderID);else S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let z in g.defines)S.push(z),S.push(g.defines[z]);if(g.isRawShaderMaterial===!1)u(S,g),w(S,g),S.push(t.outputColorSpace);return S.push(g.customProgramCacheKey),S.join()}function u(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function w(g,S){if(a.disableAll(),S.instancing)a.enable(0);if(S.instancingColor)a.enable(1);if(S.instancingMorph)a.enable(2);if(S.matcap)a.enable(3);if(S.envMap)a.enable(4);if(S.normalMapObjectSpace)a.enable(5);if(S.normalMapTangentSpace)a.enable(6);if(S.clearcoat)a.enable(7);if(S.iridescence)a.enable(8);if(S.alphaTest)a.enable(9);if(S.vertexColors)a.enable(10);if(S.vertexAlphas)a.enable(11);if(S.vertexUv1s)a.enable(12);if(S.vertexUv2s)a.enable(13);if(S.vertexUv3s)a.enable(14);if(S.vertexTangents)a.enable(15);if(S.anisotropy)a.enable(16);if(S.alphaHash)a.enable(17);if(S.batching)a.enable(18);if(S.dispersion)a.enable(19);if(S.retroreflection)a.enable(24);if(S.batchingColor)a.enable(20);if(S.gradientMap)a.enable(21);if(S.packedNormalMap)a.enable(22);if(S.vertexNormals)a.enable(23);if(g.push(a.mask),a.disableAll(),S.fog)a.enable(0);if(S.useFog)a.enable(1);if(S.flatShading)a.enable(2);if(S.logarithmicDepthBuffer)a.enable(3);if(S.reversedDepthBuffer)a.enable(4);if(S.skinning)a.enable(5);if(S.morphTargets)a.enable(6);if(S.morphNormals)a.enable(7);if(S.morphColors)a.enable(8);if(S.premultipliedAlpha)a.enable(9);if(S.shadowMapEnabled)a.enable(10);if(S.doubleSided)a.enable(11);if(S.flipSided)a.enable(12);if(S.useDepthPacking)a.enable(13);if(S.dithering)a.enable(14);if(S.transmission)a.enable(15);if(S.sheen)a.enable(16);if(S.opaque)a.enable(17);if(S.pointsUvs)a.enable(18);if(S.decodeVideoTexture)a.enable(19);if(S.decodeVideoTextureEmissive)a.enable(20);if(S.alphaToCoverage)a.enable(21);if(S.numLightProbeGrids>0)a.enable(22);if(S.hasPositionAttribute)a.enable(23);g.push(a.mask)}function R(g){let S=f[g.type],z;if(S){let C=bn[S];z=$c.clone(C.uniforms)}else z=g.uniforms;return z}function v(g,S){let z=d.get(S);if(z!==void 0)++z.usedTimes;else z=new eg(t,S,g,s),c.push(z),d.set(S,z);return z}function b(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),d.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function T(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:R,acquireProgram:v,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:T}}function rg(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function ag(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function xh(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function yh(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(h){let f=0;if(h.isInstancedMesh)f+=2;if(h.isSkinnedMesh)f+=1;return f}function o(h,f,_,E,m,u){let w=t[e];if(w===void 0)w={id:h.id,object:h,geometry:f,material:_,materialVariant:a(h),groupOrder:E,renderOrder:h.renderOrder,z:m,group:u},t[e]=w;else w.id=h.id,w.object=h,w.geometry=f,w.material=_,w.materialVariant=a(h),w.groupOrder=E,w.renderOrder=h.renderOrder,w.z=m,w.group=u;return e++,w}function l(h,f,_,E,m,u,w){if(w.reversedDepth===!0)m=-m;let R=o(h,f,_,E,m,u);if(_.transmission>0)i.push(R);else if(_.transparent===!0)s.push(R);else n.push(R)}function c(h,f,_,E,m,u){let w=o(h,f,_,E,m,u);if(_.transmission>0)i.unshift(w);else if(_.transparent===!0)s.unshift(w);else n.unshift(w)}function d(h,f){if(n.length>1)n.sort(h||ag);if(i.length>1)i.sort(f||xh);if(s.length>1)s.sort(f||xh)}function p(){for(let h=e,f=t.length;h<f;h++){let _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:d}}function og(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new yh,t.set(i,[a]);else if(s>=r.length)a=new yh,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function lg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new L,color:new Gt};break;case"SpotLight":n={position:new L,direction:new L,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":n={color:new Gt,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function cg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var hg=0;function ug(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function dg(t){let e=new lg,n=cg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new ae,a=new ae;function o(c){let d=0,p=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,_=0,E=0,m=0,u=0,w=0,R=0,v=0,b=0,A=0,T=0,g=0,S=0,z=0;c.sort(ug);for(let F=0,X=c.length;F<X;F++){let P=c[F],{color:V,intensity:K,distance:k}=P,nt=null;if(P.shadow&&P.shadow.map)if(P.shadow.map.texture.format===ii)nt=P.shadow.map.texture;else nt=P.shadow.map.depthTexture||P.shadow.map.texture;if(P.isAmbientLight)d+=V.r*K,p+=V.g*K,h+=V.b*K;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],K);z++}else if(P.isSunLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,et=n.get(P);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[_]=et,i.sunShadowMap[_]=nt;let Lt=j.getViewportCount();for(let At=0;At<Lt;At++)i.sunShadowMatrix[E+At]=j.getMatrix(At),i.sunShadowCascade[E+At]=j._cascadeData[At];E+=Lt,_++}i.sun[f]=q,f++}else if(P.isDirectionalLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,et=n.get(P);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=P.shadow.matrix,b++}i.directional[m]=q,m++}else if(P.isSpotLight){let q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(V).multiplyScalar(K),q.distance=k,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[w]=q;let j=P.shadow;if(P.map){if(i.spotLightMap[g]=P.map,g++,j.updateMatrices(P),P.castShadow)S++}if(i.spotLightMatrix[w]=j.matrix,P.castShadow){let et=n.get(P);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.spotShadow[w]=et,i.spotShadowMap[w]=nt,T++}w++}else if(P.isRectAreaLight){let q=e.get(P);q.color.copy(V).multiplyScalar(K),q.halfWidth.set(P.width*0.5,0,0),q.halfHeight.set(0,P.height*0.5,0),i.rectArea[R]=q,R++}else if(P.isPointLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let j=P.shadow,et=n.get(P);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,i.pointShadow[u]=et,i.pointShadowMap[u]=nt,i.pointShadowMatrix[u]=P.shadow.matrix,A++}i.point[u]=q,u++}else if(P.isHemisphereLight){let q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(K),q.groundColor.copy(P.groundColor).multiplyScalar(K),i.hemi[v]=q,v++}}if(R>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2;else i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2;i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=h;let C=i.hash;if(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==u||C.spotLength!==w||C.rectAreaLength!==R||C.hemiLength!==v||C.numSunShadows!==_||C.numDirectionalShadows!==b||C.numPointShadows!==A||C.numSpotShadows!==T||C.numSpotMaps!==g||C.numLightProbes!==z)i.sun.length=f,i.directional.length=m,i.spot.length=w,i.rectArea.length=R,i.point.length=u,i.hemi.length=v,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+g-S,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=z,C.sunLength=f,C.directionalLength=m,C.pointLength=u,C.spotLength=w,C.rectAreaLength=R,C.hemiLength=v,C.numSunShadows=_,C.numDirectionalShadows=b,C.numPointShadows=A,C.numSpotShadows=T,C.numSpotMaps=g,C.numLightProbes=z,i.version=hg++}function l(c,d){let p=0,h=0,f=0,_=0,E=0,m=0,u=d.matrixWorldInverse;for(let w=0,R=c.length;w<R;w++){let v=c[w];if(v.isSunLight){let b=i.sun[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(u),p++}else if(v.isDirectionalLight){let b=i.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),h++}else if(v.isSpotLight){let b=i.spot[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),_++}else if(v.isRectAreaLight){let b=i.rectArea[E];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(u),a.identity(),r.copy(v.matrixWorld),r.premultiply(u),a.extractRotation(r),b.halfWidth.set(v.width*0.5,0,0),b.halfHeight.set(0,v.height*0.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),E++}else if(v.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(u),f++}else if(v.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(u),m++}}}return{setup:o,setupView:l,state:i}}function vh(t){let e=new dg(t),n=[],i=[],s=[];function r(h){p.camera=h,n.length=0,i.length=0,s.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(n)}function d(h){e.setupView(n,h)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function fg(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new vh(t),e.set(s,[o]);else if(r>=a.length)o=new vh(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gg=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],_g=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Sh=new ae,Ms=new L,Xo=new L;function xg(t,e,n){let i=new _s,s=new Et,r=new Et,a=new me,o=new So,l=new Mo,c={},d=n.maxTextureSize,p={[kn]:Ve,[Ve]:kn,[$e]:$e},h=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let _=new ze;_.setAttribute("position",new hn(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let E=new Pt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jn;let u=this.type;this.render=function(A,T,g){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(A.length===0)return;if(this.type===jl)It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=jn;let S=t.getRenderTarget(),z=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),F=t.state;if(F.setBlending(xn),F.buffers.depth.getReversed()===!0)F.buffers.color.setClear(0,0,0,0);else F.buffers.color.setClear(1,1,1,1);F.buffers.depth.setTest(!0),F.setScissorTest(!1);let X=u!==this.type;if(X)T.traverse(function(P){if(P.material)if(Array.isArray(P.material))P.material.forEach((V)=>V.needsUpdate=!0);else P.material.needsUpdate=!0});for(let P=0,V=A.length;P<V;P++){let K=A[P],k=K.shadow;if(k===void 0){It("WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let nt=k.getFrameExtents();if(s.multiply(nt),r.copy(k.mapSize),s.x>d||s.y>d){if(s.x>d)r.x=Math.floor(d/nt.x),s.x=r.x*nt.x,k.mapSize.x=r.x;if(s.y>d)r.y=Math.floor(d/nt.y),s.y=r.y*nt.y,k.mapSize.y=r.y}let q=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||X===!0){if(k.map!==null){if(k.map.depthTexture!==null)k.map.depthTexture.dispose(),k.map.depthTexture=null;k.map.dispose()}if(this.type===Di){if(K.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ke(s.x,s.y,{format:ii,type:yn,minFilter:We,magFilter:We,generateMipmaps:!1}),k.map.texture.name=K.name+".shadowMap",k.map.depthTexture=new oi(s.x,s.y,Dn),k.map.depthTexture.name=K.name+".shadowMapDepth",k.map.depthTexture.format=ei,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Vn,k.map.depthTexture.magFilter=Vn}else{if(K.isPointLight)k.map=new Jo(s.x),k.map.depthTexture=new xo(s.x,Wn);else k.map=new Ke(s.x,s.y),k.map.depthTexture=new oi(s.x,s.y,Wn);if(k.map.depthTexture.name=K.name+".shadowMap",k.map.depthTexture.format=ei,this.type===jn)k.map.depthTexture.compareFunction=q?cr:lr,k.map.depthTexture.minFilter=We,k.map.depthTexture.magFilter=We;else k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Vn,k.map.depthTexture.magFilter=Vn}k.camera.updateProjectionMatrix()}if(k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y))k.map.setSize(s.x,s.y);let j=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();if(K.isPointLight!==!0)k.updateMatrices(K,g);for(let et=0;et<j;et++){let Lt=k.getCamera(et);if(K.isPointLight){let{camera:At,matrix:ce}=k,kt=K.distance||At.far;if(kt!==At.far)At.far=kt,At.updateProjectionMatrix();Ms.setFromMatrixPosition(K.matrixWorld),At.position.copy(Ms),Xo.copy(At.position),Xo.add(gg[et]),At.up.copy(_g[et]),At.lookAt(Xo),At.updateMatrixWorld(),ce.makeTranslation(-Ms.x,-Ms.y,-Ms.z),Sh.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Sh,At.coordinateSystem,At.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,et),t.clear();else{if(et===0)t.setRenderTarget(k.map),t.clear();let At=k.getViewport(et);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),F.viewport(a)}i=k.getFrustum(et),v(T,g,Lt,K,this.type)}if(k.isPointLightShadow!==!0&&this.type===Di)w(k,g);k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(S,z,C)};function w(A,T){let g=e.update(E);if(h.defines.VSM_SAMPLES!==A.blurSamples)h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0;if(A.mapPass===null)A.mapPass=new Ke(s.x,s.y,{format:ii,type:yn});else if(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)A.mapPass.setSize(A.map.width,A.map.height);h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,g,h,E,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,g,f,E,null)}function R(A,T,g,S){let z=null,C=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)z=C;else if(z=g.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=z.uuid,X=T.uuid,P=c[F];if(P===void 0)P={},c[F]=P;let V=P[X];if(V===void 0)V=z.clone(),P[X]=V,T.addEventListener("dispose",b);z=V}if(z.visible=T.visible,z.wireframe=T.wireframe,S===Di)z.side=T.shadowSide!==null?T.shadowSide:T.side;else z.side=T.shadowSide!==null?T.shadowSide:p[T.side];if(z.alphaMap=T.alphaMap,z.alphaTest=T.alphaToCoverage===!0?0.5:T.alphaTest,z.map=T.map,z.clipShadows=T.clipShadows,z.clippingPlanes=T.clippingPlanes,z.clipIntersection=T.clipIntersection,z.displacementMap=T.displacementMap,z.displacementScale=T.displacementScale,z.displacementBias=T.displacementBias,z.wireframeLinewidth=T.wireframeLinewidth,z.linewidth=T.linewidth,g.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let F=t.properties.get(z);F.light=g}return z}function v(A,T,g,S,z){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)){if((A.castShadow||A.receiveShadow&&z===Di)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);let X=e.update(A),P=A.material;if(Array.isArray(P)){let V=X.groups;for(let K=0,k=V.length;K<k;K++){let nt=V[K],q=P[nt.materialIndex];if(q&&q.visible){let j=R(A,q,S,z);A.onBeforeShadow(t,A,T,g,X,j,nt),t.renderBufferDirect(g,null,X,j,A,nt),A.onAfterShadow(t,A,T,g,X,j,nt)}}}else if(P.visible){let V=R(A,P,S,z);A.onBeforeShadow(t,A,T,g,X,V,null),t.renderBufferDirect(g,null,X,V,A,null),A.onAfterShadow(t,A,T,g,X,V,null)}}}let F=A.children;for(let X=0,P=F.length;X<P;X++)v(F[X],T,g,S,z)}function b(A){A.target.removeEventListener("dispose",b);for(let g in c){let S=c[g],z=A.target.uuid;if(z in S)S[z].dispose(),delete S[z]}}}function yg(t,e){function n(){let U=!1,lt=new me,Z=null,ct=new me(0,0,0,0);return{setMask:function(_t){if(Z!==_t&&!U)t.colorMask(_t,_t,_t,_t),Z=_t},setLocked:function(_t){U=_t},setClear:function(_t,Q,ft,Bt,he){if(he===!0)_t*=Bt,Q*=Bt,ft*=Bt;if(lt.set(_t,Q,ft,Bt),ct.equals(lt)===!1)t.clearColor(_t,Q,ft,Bt),ct.copy(lt)},reset:function(){U=!1,Z=null,ct.set(-1,0,0,0)}}}function i(){let U=!1,lt=!1,Z=null,ct=null,_t=null;return{setReversed:function(Q){if(lt!==Q){let ft=e.get("EXT_clip_control");if(Q)ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT);else ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);lt=Q;let Bt=_t;_t=null,this.setClear(Bt)}},getReversed:function(){return lt},setTest:function(Q){if(Q)at(t.DEPTH_TEST);else Rt(t.DEPTH_TEST)},setMask:function(Q){if(Z!==Q&&!U)t.depthMask(Q),Z=Q},setFunc:function(Q){if(lt)Q=Zc[Q];if(ct!==Q){switch(Q){case yc:t.depthFunc(t.NEVER);break;case vc:t.depthFunc(t.ALWAYS);break;case Sc:t.depthFunc(t.LESS);break;case ma:t.depthFunc(t.LEQUAL);break;case Mc:t.depthFunc(t.EQUAL);break;case bc:t.depthFunc(t.GEQUAL);break;case Ec:t.depthFunc(t.GREATER);break;case Tc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ct=Q}},setLocked:function(Q){U=Q},setClear:function(Q){if(_t!==Q){if(_t=Q,lt)Q=1-Q;t.clearDepth(Q)}},reset:function(){U=!1,Z=null,ct=null,_t=null,lt=!1}}}function s(){let U=!1,lt=null,Z=null,ct=null,_t=null,Q=null,ft=null,Bt=null,he=null;return{setTest:function(Qt){if(!U)if(Qt)at(t.STENCIL_TEST);else Rt(t.STENCIL_TEST)},setMask:function(Qt){if(lt!==Qt&&!U)t.stencilMask(Qt),lt=Qt},setFunc:function(Qt,mn,Tn){if(Z!==Qt||ct!==mn||_t!==Tn)t.stencilFunc(Qt,mn,Tn),Z=Qt,ct=mn,_t=Tn},setOp:function(Qt,mn,Tn){if(Q!==Qt||ft!==mn||Bt!==Tn)t.stencilOp(Qt,mn,Tn),Q=Qt,ft=mn,Bt=Tn},setLocked:function(Qt){U=Qt},setClear:function(Qt){if(he!==Qt)t.clearStencil(Qt),he=Qt},reset:function(){U=!1,lt=null,Z=null,ct=null,_t=null,Q=null,ft=null,Bt=null,he=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,d={},p={},h={},f=new WeakMap,_=[],E=null,m=!1,u=null,w=null,R=null,v=null,b=null,A=null,T=null,g=new Gt(0,0,0),S=0,z=!1,C=null,F=null,X=null,P=null,V=null,K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,nt=0,q=t.getParameter(t.VERSION);if(q.indexOf("WebGL")!==-1)nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=nt>=1;else if(q.indexOf("OpenGL ES")!==-1)nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=nt>=2;let j=null,et={},Lt=t.getParameter(t.SCISSOR_BOX),At=t.getParameter(t.VIEWPORT),ce=new me().fromArray(Lt),kt=new me().fromArray(At);function Y(U,lt,Z,ct){let _t=new Uint8Array(4),Q=t.createTexture();t.bindTexture(U,Q),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ft=0;ft<Z;ft++)if(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)t.texImage3D(lt,0,t.RGBA,1,1,ct,0,t.RGBA,t.UNSIGNED_BYTE,_t);else t.texImage2D(lt+ft,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_t);return Q}let it={};it[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),it[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),it[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(t.DEPTH_TEST),a.setFunc(ma),Ce(!1),fe(ua),at(t.CULL_FACE),ne(xn);function at(U){if(d[U]!==!0)t.enable(U),d[U]=!0}function Rt(U){if(d[U]!==!1)t.disable(U),d[U]=!1}function Dt(U,lt){if(h[U]!==lt){if(t.bindFramebuffer(U,lt),h[U]=lt,U===t.DRAW_FRAMEBUFFER)h[t.FRAMEBUFFER]=lt;if(U===t.FRAMEBUFFER)h[t.DRAW_FRAMEBUFFER]=lt;return!0}return!1}function Tt(U,lt){let Z=_,ct=!1;if(U){if(Z=f.get(lt),Z===void 0)Z=[],f.set(lt,Z);let _t=U.textures;if(Z.length!==_t.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,ft=_t.length;Q<ft;Q++)Z[Q]=t.COLOR_ATTACHMENT0+Q;Z.length=_t.length,ct=!0}}else if(Z[0]!==t.BACK)Z[0]=t.BACK,ct=!0;if(ct)t.drawBuffers(Z)}function Se(U){if(E!==U)return t.useProgram(U),E=U,!0;return!1}let qt={[Ni]:t.FUNC_ADD,[tc]:t.FUNC_SUBTRACT,[ec]:t.FUNC_REVERSE_SUBTRACT};qt[nc]=t.MIN,qt[ic]=t.MAX;let Zt={[sc]:t.ZERO,[rc]:t.ONE,[ac]:t.SRC_COLOR,[lc]:t.SRC_ALPHA,[pc]:t.SRC_ALPHA_SATURATE,[dc]:t.DST_COLOR,[hc]:t.DST_ALPHA,[oc]:t.ONE_MINUS_SRC_COLOR,[cc]:t.ONE_MINUS_SRC_ALPHA,[fc]:t.ONE_MINUS_DST_COLOR,[uc]:t.ONE_MINUS_DST_ALPHA,[mc]:t.CONSTANT_COLOR,[gc]:t.ONE_MINUS_CONSTANT_COLOR,[_c]:t.CONSTANT_ALPHA,[xc]:t.ONE_MINUS_CONSTANT_ALPHA};function ne(U,lt,Z,ct,_t,Q,ft,Bt,he,Qt){if(U===xn){if(m===!0)Rt(t.BLEND),m=!1;return}if(m===!1)at(t.BLEND),m=!0;if(U!==Ql){if(U!==u||Qt!==z){if(w!==Ni||b!==Ni)t.blendEquation(t.FUNC_ADD),w=Ni,b=Ni;if(Qt)switch(U){case os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case da:t.blendFunc(t.ONE,t.ONE);break;case fa:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pa:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Nt("WebGLState: Invalid blending: ",U);break}else switch(U){case os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case da:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case fa:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pa:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",U);break}R=null,v=null,A=null,T=null,g.set(0,0,0),S=0,u=U,z=Qt}return}if(_t=_t||lt,Q=Q||Z,ft=ft||ct,lt!==w||_t!==b)t.blendEquationSeparate(qt[lt],qt[_t]),w=lt,b=_t;if(Z!==R||ct!==v||Q!==A||ft!==T)t.blendFuncSeparate(Zt[Z],Zt[ct],Zt[Q],Zt[ft]),R=Z,v=ct,A=Q,T=ft;if(Bt.equals(g)===!1||he!==S)t.blendColor(Bt.r,Bt.g,Bt.b,he),g.copy(Bt),S=he;u=U,z=!1}function Jt(U,lt){U.side===$e?Rt(t.CULL_FACE):at(t.CULL_FACE);let Z=U.side===Ve;if(lt)Z=!Z;Ce(Z),U.blending===os&&U.transparent===!1?ne(xn):ne(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let ct=U.stencilWrite;if(o.setTest(ct),ct)o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass);Me(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?at(t.SAMPLE_ALPHA_TO_COVERAGE):Rt(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(U){if(C!==U){if(U)t.frontFace(t.CW);else t.frontFace(t.CCW);C=U}}function fe(U){if(U!==$l){if(at(t.CULL_FACE),U!==F)if(U===ua)t.cullFace(t.BACK);else if(U===Kl)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Rt(t.CULL_FACE);F=U}function Ge(U){if(U!==X){if(k)t.lineWidth(U);X=U}}function Me(U,lt,Z){if(U){if(at(t.POLYGON_OFFSET_FILL),P!==lt||V!==Z){if(P=lt,V=Z,a.getReversed())lt=-lt;t.polygonOffset(lt,Z)}}else Rt(t.POLYGON_OFFSET_FILL)}function be(U){if(U)at(t.SCISSOR_TEST);else Rt(t.SCISSOR_TEST)}function D(U){if(U===void 0)U=t.TEXTURE0+K-1;if(j!==U)t.activeTexture(U),j=U}function ke(U,lt,Z){if(Z===void 0)if(j===null)Z=t.TEXTURE0+K-1;else Z=j;let ct=et[Z];if(ct===void 0)ct={type:void 0,texture:void 0},et[Z]=ct;if(ct.type!==U||ct.texture!==lt){if(j!==Z)t.activeTexture(Z),j=Z;t.bindTexture(U,lt||it[U]),ct.type=U,ct.texture=lt}}function jt(){let U=et[j];if(U!==void 0&&U.type!==void 0)t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0}function ge(){try{t.compressedTexImage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function M(){try{t.compressedTexImage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function x(){try{t.texSubImage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function I(){try{t.texSubImage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function H(){try{t.compressedTexSubImage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function tt(){try{t.compressedTexSubImage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function ot(){try{t.texStorage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function ht(){try{t.texStorage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function W(){try{t.texImage2D(...arguments)}catch(U){Nt("WebGLState:",U)}}function J(){try{t.texImage3D(...arguments)}catch(U){Nt("WebGLState:",U)}}function gt(U){if(p[U]!==void 0)return p[U];else return t.getParameter(U)}function bt(U,lt){if(p[U]!==lt)t.pixelStorei(U,lt),p[U]=lt}function ut(U){if(ce.equals(U)===!1)t.scissor(U.x,U.y,U.z,U.w),ce.copy(U)}function st(U){if(kt.equals(U)===!1)t.viewport(U.x,U.y,U.z,U.w),kt.copy(U)}function wt(U,lt){let Z=c.get(lt);if(Z===void 0)Z=new WeakMap,c.set(lt,Z);let ct=Z.get(U);if(ct===void 0)ct=t.getUniformBlockIndex(lt,U.name),Z.set(U,ct)}function Ct(U,lt){let ct=c.get(lt).get(U);if(l.get(lt)!==ct)t.uniformBlockBinding(lt,ct,U.__bindingPointIndex),l.set(lt,ct)}function Kt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},j=null,et={},h={},f=new WeakMap,_=[],E=null,m=!1,u=null,w=null,R=null,v=null,b=null,A=null,T=null,g=new Gt(0,0,0),S=0,z=!1,C=null,F=null,X=null,P=null,V=null,ce.set(0,0,t.canvas.width,t.canvas.height),kt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Rt,bindFramebuffer:Dt,drawBuffers:Tt,useProgram:Se,setBlending:ne,setMaterial:Jt,setFlipSided:Ce,setCullFace:fe,setLineWidth:Ge,setPolygonOffset:Me,setScissorTest:be,activeTexture:D,bindTexture:ke,unbindTexture:jt,compressedTexImage2D:ge,compressedTexImage3D:M,texImage2D:W,texImage3D:J,pixelStorei:bt,getParameter:gt,updateUBOMapping:wt,uniformBlockBinding:Ct,texStorage2D:ot,texStorage3D:ht,texSubImage2D:x,texSubImage3D:I,compressedTexSubImage2D:H,compressedTexSubImage3D:tt,scissor:ut,viewport:st,reset:Kt}}function vg(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,d=new WeakMap,p=new Set,h,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function E(M,x){return _?new OffscreenCanvas(M,x):as("canvas")}function m(M,x,I){let H=1,tt=ge(M);if(tt.width>I||tt.height>I)H=I/Math.max(tt.width,tt.height);if(H<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let ot=Math.floor(H*tt.width),ht=Math.floor(H*tt.height);if(h===void 0)h=E(ot,ht);let W=x?E(ot,ht):h;return W.width=ot,W.height=ht,W.getContext("2d").drawImage(M,0,0,ot,ht),It("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ot+"x"+ht+")."),W}else{if("data"in M)It("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+").");return M}return M}function u(M){return M.generateMipmaps}function w(M){t.generateMipmap(M)}function R(M){if(M.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(M.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function v(M,x,I,H,tt,ot=!1){if(M!==null){if(t[M]!==void 0)return t[M];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ht;if(H){if(ht=e.get("EXT_texture_norm16"),!ht)It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let W=x;if(x===t.RED){if(I===t.FLOAT)W=t.R32F;if(I===t.HALF_FLOAT)W=t.R16F;if(I===t.UNSIGNED_BYTE)W=t.R8;if(I===t.UNSIGNED_SHORT&&ht)W=ht.R16_EXT;if(I===t.SHORT&&ht)W=ht.R16_SNORM_EXT}if(x===t.RED_INTEGER){if(I===t.UNSIGNED_BYTE)W=t.R8UI;if(I===t.UNSIGNED_SHORT)W=t.R16UI;if(I===t.UNSIGNED_INT)W=t.R32UI;if(I===t.BYTE)W=t.R8I;if(I===t.SHORT)W=t.R16I;if(I===t.INT)W=t.R32I}if(x===t.RG){if(I===t.FLOAT)W=t.RG32F;if(I===t.HALF_FLOAT)W=t.RG16F;if(I===t.UNSIGNED_BYTE)W=t.RG8;if(I===t.UNSIGNED_SHORT&&ht)W=ht.RG16_EXT;if(I===t.SHORT&&ht)W=ht.RG16_SNORM_EXT}if(x===t.RG_INTEGER){if(I===t.UNSIGNED_BYTE)W=t.RG8UI;if(I===t.UNSIGNED_SHORT)W=t.RG16UI;if(I===t.UNSIGNED_INT)W=t.RG32UI;if(I===t.BYTE)W=t.RG8I;if(I===t.SHORT)W=t.RG16I;if(I===t.INT)W=t.RG32I}if(x===t.RGB_INTEGER){if(I===t.UNSIGNED_BYTE)W=t.RGB8UI;if(I===t.UNSIGNED_SHORT)W=t.RGB16UI;if(I===t.UNSIGNED_INT)W=t.RGB32UI;if(I===t.BYTE)W=t.RGB8I;if(I===t.SHORT)W=t.RGB16I;if(I===t.INT)W=t.RGB32I}if(x===t.RGBA_INTEGER){if(I===t.UNSIGNED_BYTE)W=t.RGBA8UI;if(I===t.UNSIGNED_SHORT)W=t.RGBA16UI;if(I===t.UNSIGNED_INT)W=t.RGBA32UI;if(I===t.BYTE)W=t.RGBA8I;if(I===t.SHORT)W=t.RGBA16I;if(I===t.INT)W=t.RGBA32I}if(x===t.RGB){if(I===t.UNSIGNED_SHORT&&ht)W=ht.RGB16_EXT;if(I===t.SHORT&&ht)W=ht.RGB16_SNORM_EXT;if(I===t.UNSIGNED_INT_5_9_9_9_REV)W=t.RGB9_E5;if(I===t.UNSIGNED_INT_10F_11F_11F_REV)W=t.R11F_G11F_B10F}if(x===t.RGBA){let J=ot?oo:Yt.getTransfer(tt);if(I===t.FLOAT)W=t.RGBA32F;if(I===t.HALF_FLOAT)W=t.RGBA16F;if(I===t.UNSIGNED_BYTE)W=J===le?t.SRGB8_ALPHA8:t.RGBA8;if(I===t.UNSIGNED_SHORT&&ht)W=ht.RGBA16_EXT;if(I===t.SHORT&&ht)W=ht.RGBA16_SNORM_EXT;if(I===t.UNSIGNED_SHORT_4_4_4_4)W=t.RGBA4;if(I===t.UNSIGNED_SHORT_5_5_5_1)W=t.RGB5_A1}if(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)e.get("EXT_color_buffer_float");return W}function b(M,x){let I;if(M){if(x===null||x===Wn||x===Fi)I=t.DEPTH24_STENCIL8;else if(x===Dn)I=t.DEPTH32F_STENCIL8;else if(x===us)I=t.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(x===null||x===Wn||x===Fi)I=t.DEPTH_COMPONENT24;else if(x===Dn)I=t.DEPTH_COMPONENT32F;else if(x===us)I=t.DEPTH_COMPONENT16;return I}function A(M,x){if(u(M)===!0||M.isFramebufferTexture&&M.minFilter!==Vn&&M.minFilter!==We)return Math.log2(Math.max(x.width,x.height))+1;else if(M.mipmaps!==void 0&&M.mipmaps.length>0)return M.mipmaps.length;else if(M.isCompressedTexture&&Array.isArray(M.image))return x.mipmaps.length;else return 1}function T(M){let x=M.target;if(x.removeEventListener("dispose",T),S(x),x.isVideoTexture)d.delete(x);if(x.isHTMLTexture)p.delete(x)}function g(M){let x=M.target;x.removeEventListener("dispose",g),C(x)}function S(M){let x=i.get(M);if(x.__webglInit===void 0)return;let I=M.source,H=f.get(I);if(H){let tt=H[x.__cacheKey];if(tt.usedTimes--,tt.usedTimes===0)z(M);if(Object.keys(H).length===0)f.delete(I)}i.remove(M)}function z(M){let x=i.get(M);t.deleteTexture(x.__webglTexture);let I=M.source,H=f.get(I);delete H[x.__cacheKey],a.memory.textures--}function C(M){let x=i.get(M);if(M.depthTexture)M.depthTexture.dispose(),i.remove(M.depthTexture);if(M.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let tt=0;tt<x.__webglFramebuffer[H].length;tt++)t.deleteFramebuffer(x.__webglFramebuffer[H][tt]);else t.deleteFramebuffer(x.__webglFramebuffer[H]);if(x.__webglDepthbuffer)t.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)t.deleteFramebuffer(x.__webglFramebuffer[H]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer)t.deleteRenderbuffer(x.__webglDepthbuffer);if(x.__webglMultisampledFramebuffer)t.deleteFramebuffer(x.__webglMultisampledFramebuffer);if(x.__webglColorRenderbuffer){for(let H=0;H<x.__webglColorRenderbuffer.length;H++)if(x.__webglColorRenderbuffer[H])t.deleteRenderbuffer(x.__webglColorRenderbuffer[H])}if(x.__webglDepthRenderbuffer)t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let I=M.textures;for(let H=0,tt=I.length;H<tt;H++){let ot=i.get(I[H]);if(ot.__webglTexture)t.deleteTexture(ot.__webglTexture),a.memory.textures--;i.remove(I[H])}i.remove(M)}let F=0;function X(){F=0}function P(){return F}function V(M){F=M}function K(){let M=F;if(M>=s.maxTextures)It("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures);return F+=1,M}function k(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function nt(M,x){let I=i.get(M);if(M.isVideoTexture)ke(M);if(M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&I.__version!==M.version){let H=M.image;if(H===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(I,M,x);return}}else if(M.isExternalTexture)I.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+x)}function q(M,x){let I=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){Rt(I,M,x);return}else if(M.isExternalTexture)I.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+x)}function j(M,x){let I=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){Rt(I,M,x);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+x)}function et(M,x){let I=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&I.__version!==M.version){Dt(I,M,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+x)}let Lt={[cs]:t.REPEAT,[Qs]:t.CLAMP_TO_EDGE,[Cc]:t.MIRRORED_REPEAT},At={[Vn]:t.NEAREST,[Pc]:t.NEAREST_MIPMAP_NEAREST,[hs]:t.NEAREST_MIPMAP_LINEAR,[We]:t.LINEAR,[tr]:t.LINEAR_MIPMAP_NEAREST,[ti]:t.LINEAR_MIPMAP_LINEAR},ce={[zc]:t.NEVER,[Wc]:t.ALWAYS,[Hc]:t.LESS,[lr]:t.LEQUAL,[Gc]:t.EQUAL,[cr]:t.GEQUAL,[kc]:t.GREATER,[Vc]:t.NOTEQUAL};function kt(M,x){if(x.type===Dn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===We||x.magFilter===tr||x.magFilter===hs||x.magFilter===ti||x.minFilter===We||x.minFilter===tr||x.minFilter===hs||x.minFilter===ti))It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(M,t.TEXTURE_WRAP_S,Lt[x.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,Lt[x.wrapT]),M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)t.texParameteri(M,t.TEXTURE_WRAP_R,Lt[x.wrapR]);if(t.texParameteri(M,t.TEXTURE_MAG_FILTER,At[x.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,At[x.minFilter]),x.compareFunction)t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,ce[x.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vn)return;if(x.minFilter!==hs&&x.minFilter!==ti)return;if(x.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Y(M,x){let I=!1;if(M.__webglInit===void 0)M.__webglInit=!0,x.addEventListener("dispose",T);let H=x.source,tt=f.get(H);if(tt===void 0)tt={},f.set(H,tt);let ot=k(x);if(ot!==M.__cacheKey){if(tt[ot]===void 0)tt[ot]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,I=!0;tt[ot].usedTimes++;let ht=tt[M.__cacheKey];if(ht!==void 0){if(tt[M.__cacheKey].usedTimes--,ht.usedTimes===0)z(x)}M.__cacheKey=ot,M.__webglTexture=tt[ot].texture}return I}function it(M,x,I){return Math.floor(Math.floor(M/I)/x)}function at(M,x,I,H){let ot=M.updateRanges;if(ot.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,I,H,x.data);else{ot.sort((bt,ut)=>bt.start-ut.start);let ht=0;for(let bt=1;bt<ot.length;bt++){let ut=ot[ht],st=ot[bt],wt=ut.start+ut.count,Ct=it(st.start,x.width,4),Kt=it(ut.start,x.width,4);if(st.start<=wt+1&&Ct===Kt&&it(st.start+st.count-1,x.width,4)===Ct)ut.count=Math.max(ut.count,st.start+st.count-ut.start);else++ht,ot[ht]=st}ot.length=ht+1;let W=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),gt=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let bt=0,ut=ot.length;bt<ut;bt++){let st=ot[bt],wt=Math.floor(st.start/4),Ct=Math.ceil(st.count/4),Kt=wt%x.width,U=Math.floor(wt/x.width),lt=Ct,Z=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Kt),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Kt,U,lt,1,I,H,x.data)}M.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,W),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,gt)}}function Rt(M,x,I){let H=t.TEXTURE_2D;if(x.isDataArrayTexture||x.isCompressedArrayTexture)H=t.TEXTURE_2D_ARRAY;if(x.isData3DTexture)H=t.TEXTURE_3D;let tt=Y(M,x),ot=x.source;n.bindTexture(H,M.__webglTexture,t.TEXTURE0+I);let ht=i.get(ot);if(ot.version!==ht.__version||tt===!0){if(n.activeTexture(t.TEXTURE0+I),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Z=Yt.getPrimaries(Yt.workingColorSpace),ct=x.colorSpace===si?null:Yt.getPrimaries(x.colorSpace),_t=x.colorSpace===si||Z===ct?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let J=m(x.image,!1,s.maxTextureSize);J=jt(x,J);let gt=r.convert(x.format,x.colorSpace),bt=r.convert(x.type),ut=v(x.internalFormat,gt,bt,x.normalized,x.colorSpace,x.isVideoTexture);kt(H,x);let st,wt=x.mipmaps,Ct=x.isVideoTexture!==!0,Kt=ht.__version===void 0||tt===!0,U=ot.dataReady,lt=A(x,J);if(x.isDepthTexture){if(ut=b(x.format===ni,x.type),Kt)if(Ct)n.texStorage2D(t.TEXTURE_2D,1,ut,J.width,J.height);else n.texImage2D(t.TEXTURE_2D,0,ut,J.width,J.height,0,gt,bt,null)}else if(x.isDataTexture)if(wt.length>0){if(Ct&&Kt)n.texStorage2D(t.TEXTURE_2D,lt,ut,wt[0].width,wt[0].height);for(let Z=0,ct=wt.length;Z<ct;Z++)if(st=wt[Z],Ct){if(U)n.texSubImage2D(t.TEXTURE_2D,Z,0,0,st.width,st.height,gt,bt,st.data)}else n.texImage2D(t.TEXTURE_2D,Z,ut,st.width,st.height,0,gt,bt,st.data);x.generateMipmaps=!1}else if(Ct){if(Kt)n.texStorage2D(t.TEXTURE_2D,lt,ut,J.width,J.height);if(U)at(x,J,gt,bt)}else n.texImage2D(t.TEXTURE_2D,0,ut,J.width,J.height,0,gt,bt,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){if(Ct&&Kt)n.texStorage3D(t.TEXTURE_2D_ARRAY,lt,ut,wt[0].width,wt[0].height,J.depth);for(let Z=0,ct=wt.length;Z<ct;Z++)if(st=wt[Z],x.format!==vn)if(gt!==null)if(Ct){if(U)if(x.layerUpdates.size>0){let _t=zo(st.width,st.height,x.format,x.type);for(let Q of x.layerUpdates){let ft=st.data.subarray(Q*_t/st.data.BYTES_PER_ELEMENT,(Q+1)*_t/st.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,Q,st.width,st.height,1,gt,ft)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,st.width,st.height,J.depth,gt,st.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,ut,st.width,st.height,J.depth,0,st.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ct){if(U)n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,st.width,st.height,J.depth,gt,bt,st.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,Z,ut,st.width,st.height,J.depth,0,gt,bt,st.data);if(x.layerUpdates.size>0)x.clearLayerUpdates()}else{if(Ct&&Kt)n.texStorage2D(t.TEXTURE_2D,lt,ut,wt[0].width,wt[0].height);for(let Z=0,ct=wt.length;Z<ct;Z++)if(st=wt[Z],x.format!==vn)if(gt!==null)if(Ct){if(U)n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,st.width,st.height,gt,st.data)}else n.compressedTexImage2D(t.TEXTURE_2D,Z,ut,st.width,st.height,0,st.data);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ct){if(U)n.texSubImage2D(t.TEXTURE_2D,Z,0,0,st.width,st.height,gt,bt,st.data)}else n.texImage2D(t.TEXTURE_2D,Z,ut,st.width,st.height,0,gt,bt,st.data)}else if(x.isDataArrayTexture)if(Ct){if(Kt)n.texStorage3D(t.TEXTURE_2D_ARRAY,lt,ut,J.width,J.height,J.depth);if(U)if(x.layerUpdates.size>0){let Z=zo(J.width,J.height,x.format,x.type);for(let ct of x.layerUpdates){let _t=J.data.subarray(ct*Z/J.data.BYTES_PER_ELEMENT,(ct+1)*Z/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ct,J.width,J.height,1,gt,bt,_t)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,gt,bt,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ut,J.width,J.height,J.depth,0,gt,bt,J.data);else if(x.isData3DTexture)if(Ct){if(Kt)n.texStorage3D(t.TEXTURE_3D,lt,ut,J.width,J.height,J.depth);if(U)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,gt,bt,J.data)}else n.texImage3D(t.TEXTURE_3D,0,ut,J.width,J.height,J.depth,0,gt,bt,J.data);else if(x.isFramebufferTexture){if(Kt)if(Ct)n.texStorage2D(t.TEXTURE_2D,lt,ut,J.width,J.height);else{let Z=J.width,ct=J.height;for(let _t=0;_t<lt;_t++)n.texImage2D(t.TEXTURE_2D,_t,ut,Z,ct,0,gt,bt,null),Z>>=1,ct>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){let Z=t.canvas;if(!Z.hasAttribute("layoutsubtree"))Z.setAttribute("layoutsubtree","true");if(J.parentNode!==Z){Z.appendChild(J),p.add(x),Z.onpaint=(ct)=>{let _t=ct.changedElements;for(let Q of p)if(_t.includes(Q.image))Q.needsUpdate=!0},Z.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{let{RGBA:_t,RGBA:Q,UNSIGNED_BYTE:ft}=t;t.texElementImage2D(t.TEXTURE_2D,0,_t,Q,ft,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(wt.length>0){if(Ct&&Kt){let Z=ge(wt[0]);n.texStorage2D(t.TEXTURE_2D,lt,ut,Z.width,Z.height)}for(let Z=0,ct=wt.length;Z<ct;Z++)if(st=wt[Z],Ct){if(U)n.texSubImage2D(t.TEXTURE_2D,Z,0,0,gt,bt,st)}else n.texImage2D(t.TEXTURE_2D,Z,ut,gt,bt,st);x.generateMipmaps=!1}else if(Ct){if(Kt){let Z=ge(J);n.texStorage2D(t.TEXTURE_2D,lt,ut,Z.width,Z.height)}if(U)n.texSubImage2D(t.TEXTURE_2D,0,0,0,gt,bt,J)}else n.texImage2D(t.TEXTURE_2D,0,ut,gt,bt,J);if(u(x))w(H);if(ht.__version=ot.version,x.onUpdate)x.onUpdate(x)}M.__version=x.version}function Dt(M,x,I){if(x.image.length!==6)return;let H=Y(M,x),tt=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+I);let ot=i.get(tt);if(tt.version!==ot.__version||H===!0){n.activeTexture(t.TEXTURE0+I);let ht=Yt.getPrimaries(Yt.workingColorSpace),W=x.colorSpace===si?null:Yt.getPrimaries(x.colorSpace),J=x.colorSpace===si||ht===W?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let gt=x.isCompressedTexture||x.image[0].isCompressedTexture,bt=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let Q=0;Q<6;Q++){if(!gt&&!bt)ut[Q]=m(x.image[Q],!0,s.maxCubemapSize);else ut[Q]=bt?x.image[Q].image:x.image[Q];ut[Q]=jt(x,ut[Q])}let st=ut[0],wt=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type),Kt=v(x.internalFormat,wt,Ct,x.normalized,x.colorSpace),U=x.isVideoTexture!==!0,lt=ot.__version===void 0||H===!0,Z=tt.dataReady,ct=A(x,st);kt(t.TEXTURE_CUBE_MAP,x);let _t;if(gt){if(U&&lt)n.texStorage2D(t.TEXTURE_CUBE_MAP,ct,Kt,st.width,st.height);for(let Q=0;Q<6;Q++){_t=ut[Q].mipmaps;for(let ft=0;ft<_t.length;ft++){let Bt=_t[ft];if(x.format!==vn)if(wt!==null)if(U){if(Z)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,Bt.width,Bt.height,wt,Bt.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Kt,Bt.width,Bt.height,0,Bt.data);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(U){if(Z)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,Bt.width,Bt.height,wt,Ct,Bt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Kt,Bt.width,Bt.height,0,wt,Ct,Bt.data)}}}else{if(_t=x.mipmaps,U&&lt){if(_t.length>0)ct++;let Q=ge(ut[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ct,Kt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(bt){if(U){if(Z)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ut[Q].width,ut[Q].height,wt,Ct,ut[Q].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,ut[Q].width,ut[Q].height,0,wt,Ct,ut[Q].data);for(let ft=0;ft<_t.length;ft++){let he=_t[ft].image[Q].image;if(U){if(Z)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,he.width,he.height,wt,Ct,he.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Kt,he.width,he.height,0,wt,Ct,he.data)}}else{if(U){if(Z)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,wt,Ct,ut[Q])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,wt,Ct,ut[Q]);for(let ft=0;ft<_t.length;ft++){let Bt=_t[ft];if(U){if(Z)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,wt,Ct,Bt.image[Q])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Kt,wt,Ct,Bt.image[Q])}}}if(u(x))w(t.TEXTURE_CUBE_MAP);if(ot.__version=tt.version,x.onUpdate)x.onUpdate(x)}M.__version=x.version}function Tt(M,x,I,H,tt,ot){let ht=r.convert(I.format,I.colorSpace),W=r.convert(I.type),J=v(I.internalFormat,ht,W,I.normalized,I.colorSpace),gt=i.get(x),bt=i.get(I);if(bt.__renderTarget=x,!gt.__hasExternalTextures){let ut=Math.max(1,x.width>>ot),st=Math.max(1,x.height>>ot);if(tt===t.TEXTURE_3D||tt===t.TEXTURE_2D_ARRAY)n.texImage3D(tt,ot,J,ut,st,x.depth,0,ht,W,null);else n.texImage2D(tt,ot,J,ut,st,0,ht,W,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,M),D(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,tt,bt.__webglTexture,0,be(x));else if(tt===t.TEXTURE_2D||tt>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,H,tt,bt.__webglTexture,ot);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Se(M,x,I){if(t.bindRenderbuffer(t.RENDERBUFFER,M),x.depthBuffer){let H=x.depthTexture,tt=H&&H.isDepthTexture?H.type:null,ot=b(x.stencilBuffer,tt),ht=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(D(x))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be(x),ot,x.width,x.height);else if(I)t.renderbufferStorageMultisample(t.RENDERBUFFER,be(x),ot,x.width,x.height);else t.renderbufferStorage(t.RENDERBUFFER,ot,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ht,t.RENDERBUFFER,M)}else{let H=x.textures;for(let tt=0;tt<H.length;tt++){let ot=H[tt],ht=r.convert(ot.format,ot.colorSpace),W=r.convert(ot.type),J=v(ot.internalFormat,ht,W,ot.normalized,ot.colorSpace);if(D(x))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be(x),J,x.width,x.height);else if(I)t.renderbufferStorageMultisample(t.RENDERBUFFER,be(x),J,x.width,x.height);else t.renderbufferStorage(t.RENDERBUFFER,J,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qt(M,x,I){let H=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(x.depthTexture);if(tt.__renderTarget=x,!tt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0;if(H){if(tt.__webglInit===void 0)tt.__webglInit=!0,x.depthTexture.addEventListener("dispose",T);if(tt.__webglTexture===void 0){tt.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,tt.__webglTexture),kt(t.TEXTURE_CUBE_MAP,x.depthTexture);let gt=r.convert(x.depthTexture.format),bt=r.convert(x.depthTexture.type),ut;if(x.depthTexture.format===ei)ut=t.DEPTH_COMPONENT24;else if(x.depthTexture.format===ni)ut=t.DEPTH24_STENCIL8;for(let st=0;st<6;st++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ut,x.width,x.height,0,gt,bt,null)}}else nt(x.depthTexture,0);let ot=tt.__webglTexture,ht=be(x),W=H?t.TEXTURE_CUBE_MAP_POSITIVE_X+I:t.TEXTURE_2D,J=x.depthTexture.format===ni?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===ei)if(D(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,W,ot,0,ht);else t.framebufferTexture2D(t.FRAMEBUFFER,J,W,ot,0);else if(x.depthTexture.format===ni)if(D(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,W,ot,0,ht);else t.framebufferTexture2D(t.FRAMEBUFFER,J,W,ot,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(M){let x=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){let H=M.depthTexture;if(x.__depthDisposeCallback)x.__depthDisposeCallback();if(H){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",tt)};H.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=H}if(M.depthTexture&&!x.__autoAllocateDepthBuffer)if(I)for(let H=0;H<6;H++)qt(x.__webglFramebuffer[H],M,H);else{let H=M.texture.mipmaps;if(H&&H.length>0)qt(x.__webglFramebuffer[0],M,0);else qt(x.__webglFramebuffer,M,0)}else if(I){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=t.createRenderbuffer(),Se(x.__webglDepthbuffer[H],M,!1);else{let tt=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,ot),t.framebufferRenderbuffer(t.FRAMEBUFFER,tt,t.RENDERBUFFER,ot)}}else{let H=M.texture.mipmaps;if(H&&H.length>0)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer);if(x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Se(x.__webglDepthbuffer,M,!1);else{let tt=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ot),t.framebufferRenderbuffer(t.FRAMEBUFFER,tt,t.RENDERBUFFER,ot)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(M,x,I){let H=i.get(M);if(x!==void 0)Tt(H.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(I!==void 0)Zt(M)}function Jt(M){let x=M.texture,I=i.get(M),H=i.get(x);M.addEventListener("dispose",g);let tt=M.textures,ot=M.isWebGLCubeRenderTarget===!0,ht=tt.length>1;if(!ht){if(H.__webglTexture===void 0)H.__webglTexture=t.createTexture();H.__version=x.version,a.memory.textures++}if(ot){I.__webglFramebuffer=[];for(let W=0;W<6;W++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[W]=[];for(let J=0;J<x.mipmaps.length;J++)I.__webglFramebuffer[W][J]=t.createFramebuffer()}else I.__webglFramebuffer[W]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let W=0;W<x.mipmaps.length;W++)I.__webglFramebuffer[W]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(ht)for(let W=0,J=tt.length;W<J;W++){let gt=i.get(tt[W]);if(gt.__webglTexture===void 0)gt.__webglTexture=t.createTexture(),a.memory.textures++}if(M.samples>0&&D(M)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let W=0;W<tt.length;W++){let J=tt[W];I.__webglColorRenderbuffer[W]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[W]);let gt=r.convert(J.format,J.colorSpace),bt=r.convert(J.type),ut=v(J.internalFormat,gt,bt,J.normalized,J.colorSpace,M.isXRRenderTarget===!0),st=be(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,st,ut,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,I.__webglColorRenderbuffer[W])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer)I.__webglDepthRenderbuffer=t.createRenderbuffer(),Se(I.__webglDepthRenderbuffer,M,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ot){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),kt(t.TEXTURE_CUBE_MAP,x);for(let W=0;W<6;W++)if(x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Tt(I.__webglFramebuffer[W][J],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,J);else Tt(I.__webglFramebuffer[W],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);if(u(x))w(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(ht){for(let W=0,J=tt.length;W<J;W++){let gt=tt[W],bt=i.get(gt),ut=t.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)ut=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(ut,bt.__webglTexture),kt(ut,gt),Tt(I.__webglFramebuffer,M,gt,t.COLOR_ATTACHMENT0+W,ut,0),u(gt))w(ut)}n.unbindTexture()}else{let W=t.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)W=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(W,H.__webglTexture),kt(W,x),x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Tt(I.__webglFramebuffer[J],M,x,t.COLOR_ATTACHMENT0,W,J);else Tt(I.__webglFramebuffer,M,x,t.COLOR_ATTACHMENT0,W,0);if(u(x))w(W);n.unbindTexture()}if(M.depthBuffer)Zt(M)}function Ce(M){let x=M.textures;for(let I=0,H=x.length;I<H;I++){let tt=x[I];if(u(tt)){let ot=R(M),ht=i.get(tt).__webglTexture;n.bindTexture(ot,ht),w(ot),n.unbindTexture()}}}let fe=[],Ge=[];function Me(M){if(M.samples>0){if(D(M)===!1){let{textures:x,width:I,height:H}=M,tt=t.COLOR_BUFFER_BIT,ot=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ht=i.get(M),W=x.length>1;if(W)for(let gt=0;gt<x.length;gt++)n.bindFramebuffer(t.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+gt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ht.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+gt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let J=M.texture.mipmaps;if(J&&J.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let gt=0;gt<x.length;gt++){if(M.resolveDepthBuffer){if(M.depthBuffer)tt|=t.DEPTH_BUFFER_BIT;if(M.stencilBuffer&&M.resolveStencilBuffer)tt|=t.STENCIL_BUFFER_BIT}if(W){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ht.__webglColorRenderbuffer[gt]);let bt=i.get(x[gt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,bt,0)}if(t.blitFramebuffer(0,0,I,H,0,0,I,H,tt,t.NEAREST),l===!0){if(fe.length=0,Ge.length=0,fe.push(t.COLOR_ATTACHMENT0+gt),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1)fe.push(ot),Ge.push(ot),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ge);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),W)for(let gt=0;gt<x.length;gt++){n.bindFramebuffer(t.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+gt,t.RENDERBUFFER,ht.__webglColorRenderbuffer[gt]);let bt=i.get(x[gt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ht.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+gt,t.TEXTURE_2D,bt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let x=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function be(M){return Math.min(s.maxSamples,M.samples)}function D(M){let x=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ke(M){let x=a.render.frame;if(d.get(M)!==x)d.set(M,x),M.update()}function jt(M,x){let{colorSpace:I,format:H,type:tt}=M;if(M.isCompressedTexture===!0||M.isVideoTexture===!0)return x;if(I!==ao&&I!==si)if(Yt.getTransfer(I)===le){if(H!==vn||tt!==fn)It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Nt("WebGLTextures: Unsupported texture color space:",I);return x}function ge(M){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement)c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height;else if(typeof VideoFrame<"u"&&M instanceof VideoFrame)c.width=M.displayWidth,c.height=M.displayHeight;else c.width=M.width,c.height=M.height;return c}this.allocateTextureUnit=K,this.resetTextureUnits=X,this.getTextureUnits=P,this.setTextureUnits=V,this.setTexture2D=nt,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=et,this.rebindTextures=ne,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Sg(t,e){function n(i,s=si){let r,a=Yt.getTransfer(s);if(i===fn)return t.UNSIGNED_BYTE;if(i===Ea)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ta)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Dc)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Nc)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ic)return t.BYTE;if(i===Lc)return t.SHORT;if(i===us)return t.UNSIGNED_SHORT;if(i===ba)return t.INT;if(i===Wn)return t.UNSIGNED_INT;if(i===Dn)return t.FLOAT;if(i===yn)return t.HALF_FLOAT;if(i===Uc)return t.ALPHA;if(i===Fc)return t.RGB;if(i===vn)return t.RGBA;if(i===ei)return t.DEPTH_COMPONENT;if(i===ni)return t.DEPTH_STENCIL;if(i===Oc)return t.RED;if(i===wa)return t.RED_INTEGER;if(i===ii)return t.RG;if(i===Aa)return t.RG_INTEGER;if(i===Ra)return t.RGBA_INTEGER;if(i===er||i===nr||i===ir||i===sr)if(a===le)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ca||i===Pa||i===Ia||i===La)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===La)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Da||i===Na||i===Ua||i===Fa||i===Oa||i===rr||i===Ba)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Da||i===Na)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ua)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fa)return r.COMPRESSED_R11_EAC;if(i===Oa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===rr)return r.COMPRESSED_RG11_EAC;if(i===Ba)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===za||i===Ha||i===Ga||i===ka||i===Va||i===Wa||i===Xa||i===qa||i===Ya||i===Za||i===Ja||i===$a||i===Ka||i===ja)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ha)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ga)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ka)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Va)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ya)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ja)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$a)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ka)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ja)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qa||i===to||i===eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Qa)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===to)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===no||i===io||i===ar||i===so)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===no)return r.COMPRESSED_RED_RGTC1_EXT;if(i===io)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===so)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Fi)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var Mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new _r(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:Mg,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new Pe(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nh extends Sn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,d=null,p=null,h=null,f=null,_=typeof XRWebGLBinding<"u",E=new Dh,m={},u=e.getContextAttributes(),w=null,R=null,v=[],b=[],A=new Et,T=null,g=null,S=new Be;S.viewport=new me;let z=new Be;z.viewport=new me;let C=[S,z],F=new Uo,X=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=v[Y];if(it===void 0)it=new ps,v[Y]=it;return it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=v[Y];if(it===void 0)it=new ps,v[Y]=it;return it.getGripSpace()},this.getHand=function(Y){let it=v[Y];if(it===void 0)it=new ps,v[Y]=it;return it.getHandSpace()};function V(Y){let it=b.indexOf(Y.inputSource);if(it===-1)return;let at=v[it];if(at!==void 0)at.update(Y.inputSource,Y.frame,l||r),at.dispatchEvent({type:Y.type,data:Y.inputSource})}function K(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",k);for(let Y=0;Y<v.length;Y++){let it=b[Y];if(it===null)continue;b[Y]=null,v[Y].disconnect(it)}X=null,P=null,E.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(w),h=null,p=null,d=null,i=null,R=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),g!==null){let Y=g.camera;Y.fov=g.fov,Y.zoom=g.zoom,Y.updateProjectionMatrix(),g=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){if(s=Y,n.isPresenting===!0)It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){if(a=Y,n.isPresenting===!0)It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){if(d===null&&_)d=new XRWebGLBinding(i,e);return d},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",K),i.addEventListener("inputsourceschange",k),u.xrCompatible!==!0)await e.makeXRCompatible();if(T=t.getPixelRatio(),t.getSize(A),!(_&&("createProjectionLayer"in XRWebGLBinding.prototype))){let at={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),R=new Ke(h.framebufferWidth,h.framebufferHeight,{format:vn,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let at=null,Rt=null,Dt=null;if(u.depth)Dt=u.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=u.stencil?ni:ei,Rt=u.stencil?Fi:Wn;let Tt={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(Tt),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),R=new Ke(p.textureWidth,p.textureHeight,{format:vn,type:fn,depthTexture:new oi(p.textureWidth,p.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:u.stencil,colorSpace:t.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),kt.setContext(i),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function k(Y){for(let it=0;it<Y.removed.length;it++){let at=Y.removed[it],Rt=b.indexOf(at);if(Rt>=0)b[Rt]=null,v[Rt].disconnect(at)}for(let it=0;it<Y.added.length;it++){let at=Y.added[it],Rt=b.indexOf(at);if(Rt===-1){for(let Tt=0;Tt<v.length;Tt++)if(Tt>=b.length){b.push(at),Rt=Tt;break}else if(b[Tt]===null){b[Tt]=at,Rt=Tt;break}if(Rt===-1)break}let Dt=v[Rt];if(Dt)Dt.connect(at)}}let nt=new L,q=new L;function j(Y,it,at){nt.setFromMatrixPosition(it.matrixWorld),q.setFromMatrixPosition(at.matrixWorld);let Rt=nt.distanceTo(q),Dt=it.projectionMatrix.elements,Tt=at.projectionMatrix.elements,Se=Dt[14]/(Dt[10]-1),qt=Dt[14]/(Dt[10]+1),Zt=(Dt[9]+1)/Dt[5],ne=(Dt[9]-1)/Dt[5],Jt=(Dt[8]-1)/Dt[0],Ce=(Tt[8]+1)/Tt[0],fe=Se*Jt,Ge=Se*Ce,Me=Rt/(-Jt+Ce),be=Me*-Jt;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(be),Y.translateZ(Me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Dt[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let D=Se+Me,ke=qt+Me,jt=fe-be,ge=Ge+(Rt-be),M=Zt*qt/ke*D,x=ne*qt/ke*D;Y.projectionMatrix.makePerspective(jt,ge,M,x,D,ke),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function et(Y,it){if(it===null)Y.matrixWorld.copy(Y.matrix);else Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix);Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let{near:it,far:at}=Y;if(E.texture!==null){if(E.depthNear>0)it=E.depthNear;if(E.depthFar>0)at=E.depthFar}if(F.near=z.near=S.near=it,F.far=z.far=S.far=at,X!==F.near||P!==F.far)i.updateRenderState({depthNear:F.near,depthFar:F.far}),X=F.near,P=F.far;F.layers.mask=Y.layers.mask|6,S.layers.mask=F.layers.mask&-5,z.layers.mask=F.layers.mask&-3;let Rt=Y.parent,Dt=F.cameras;et(F,Rt);for(let Tt=0;Tt<Dt.length;Tt++)et(Dt[Tt],Rt);if(Dt.length===2)j(F,S,z);else F.projectionMatrix.copy(S.projectionMatrix);if(g===null&&Y.isPerspectiveCamera)g={camera:Y,fov:Y.fov,zoom:Y.zoom};Lt(Y,F,Rt)};function Lt(Y,it,at){if(at===null)Y.matrix.copy(it.matrixWorld);else Y.matrix.copy(at.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld);if(Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera)Y.fov=Li*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1}this.getCamera=function(){return F},this.getFoveation=function(){if(p===null&&h===null)return;return o},this.setFoveation=function(Y){if(o=Y,p!==null)p.fixedFoveation=Y;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=Y},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(F)},this.getCameraTexture=function(Y){return m[Y]};let At=null;function ce(Y,it){if(c=it.getViewerPose(l||r),f=it,c!==null){let at=c.views;if(h!==null)t.setRenderTargetFramebuffer(R,h.framebuffer),t.setRenderTarget(R);let Rt=!1;if(at.length!==F.cameras.length)F.cameras.length=0,Rt=!0;for(let qt=0;qt<at.length;qt++){let Zt=at[qt],ne=null;if(h!==null)ne=h.getViewport(Zt);else{let Ce=d.getViewSubImage(p,Zt);if(ne=Ce.viewport,qt===0)t.setRenderTargetTextures(R,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(R)}let Jt=C[qt];if(Jt===void 0)Jt=new Be,Jt.layers.enable(qt),Jt.viewport=new me,C[qt]=Jt;if(Jt.matrix.fromArray(Zt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Zt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ne.x,ne.y,ne.width,ne.height),qt===0)F.matrix.copy(Jt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);if(Rt===!0)F.cameras.push(Jt)}let Dt=i.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let qt=d.getDepthInformation(at[0]);if(qt&&qt.isValid&&qt.texture)E.init(qt,i.renderState)}if(Dt&&Dt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let qt=0;qt<at.length;qt++){let Zt=at[qt].camera;if(Zt){let ne=m[Zt];if(!ne)ne=new _r,m[Zt]=ne;let Jt=d.getCameraImage(Zt);ne.sourceTexture=Jt}}}}for(let at=0;at<v.length;at++){let Rt=b[at],Dt=v[at];if(Rt!==null&&Dt!==void 0)Dt.update(Rt,it,l||r)}if(At)At(Y,it);if(it.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:it});f=null}let kt=new Mh;kt.setAnimationLoop(ce),this.setAnimationLoop=function(Y){At=Y},this.dispose=function(){}}}var Eg=new ae,Uh=new Ft;Uh.set(-1,0,0,0,1,0,0,0,1);function Tg(t,e){function n(m,u){if(m.matrixAutoUpdate===!0)m.updateMatrix();u.value.copy(m.matrix)}function i(m,u){if(u.color.getRGB(m.fogColor.value,yo(t)),u.isFog)m.fogNear.value=u.near,m.fogFar.value=u.far;else if(u.isFogExp2)m.fogDensity.value=u.density}function s(m,u,w,R,v){if(u.isNodeMaterial)u.uniformsNeedUpdate=!1;else if(u.isMeshBasicMaterial)r(m,u);else if(u.isMeshLambertMaterial){if(r(m,u),u.envMap)m.envMapIntensity.value=u.envMapIntensity}else if(u.isMeshToonMaterial)r(m,u),p(m,u);else if(u.isMeshPhongMaterial){if(r(m,u),d(m,u),u.envMap)m.envMapIntensity.value=u.envMapIntensity}else if(u.isMeshStandardMaterial){if(r(m,u),h(m,u),u.isMeshPhysicalMaterial)f(m,u,v)}else if(u.isMeshMatcapMaterial)r(m,u),_(m,u);else if(u.isMeshDepthMaterial)r(m,u);else if(u.isMeshDistanceMaterial)r(m,u),E(m,u);else if(u.isMeshNormalMaterial)r(m,u);else if(u.isLineBasicMaterial){if(a(m,u),u.isLineDashedMaterial)o(m,u)}else if(u.isPointsMaterial)l(m,u,w,R);else if(u.isSpriteMaterial)c(m,u);else if(u.isShadowMaterial)m.color.value.copy(u.color),m.opacity.value=u.opacity;else if(u.isShaderMaterial)u.uniformsNeedUpdate=!1}function r(m,u){if(m.opacity.value=u.opacity,u.color)m.diffuse.value.copy(u.color);if(u.emissive)m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity);if(u.map)m.map.value=u.map,n(u.map,m.mapTransform);if(u.alphaMap)m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform);if(u.bumpMap){if(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ve)m.bumpScale.value*=-1}if(u.normalMap){if(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ve)m.normalScale.value.negate()}if(u.displacementMap)m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias;if(u.emissiveMap)m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform);if(u.specularMap)m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform);if(u.alphaTest>0)m.alphaTest.value=u.alphaTest;let w=e.get(u),{envMap:R,envMapRotation:v}=w;if(R){if(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(Uh);m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio}if(u.lightMap)m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform);if(u.aoMap)m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform)}function a(m,u){if(m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map)m.map.value=u.map,n(u.map,m.mapTransform)}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,w,R){if(m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=R*0.5,u.map)m.map.value=u.map,n(u.map,m.uvTransform);if(u.alphaMap)m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform);if(u.alphaTest>0)m.alphaTest.value=u.alphaTest}function c(m,u){if(m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map)m.map.value=u.map,n(u.map,m.mapTransform);if(u.alphaMap)m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform);if(u.alphaTest>0)m.alphaTest.value=u.alphaTest}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,0.0001)}function p(m,u){if(u.gradientMap)m.gradientMap.value=u.gradientMap}function h(m,u){if(m.metalness.value=u.metalness,u.metalnessMap)m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=u.roughness,u.roughnessMap)m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform);if(u.envMap)m.envMapIntensity.value=u.envMapIntensity}function f(m,u,w){if(m.ior.value=u.ior,u.sheen>0){if(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap)m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform);if(u.sheenRoughnessMap)m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(u.clearcoat>0){if(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap)m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform);if(u.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(u.clearcoatNormalMap){if(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ve)m.clearcoatNormalScale.value.negate()}}if(u.dispersion>0)m.dispersion.value=u.dispersion;if(u.retroreflectivity>0)m.retroreflectivity.value=u.retroreflectivity;if(u.iridescence>0){if(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap)m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform);if(u.iridescenceThicknessMap)m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(u.transmission>0){if(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap)m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=u.thickness,u.thicknessMap)m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)}if(u.anisotropy>0){if(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap)m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap)m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform);if(u.specularIntensityMap)m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform)}function _(m,u){if(u.matcap)m.matcap.value=u.matcap}function E(m,u){let w=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wg(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let A=b.program;i.uniformBlockBinding(v,A)}function c(v,b){let A=s[v.id];if(A===void 0)m(v),A=d(v),s[v.id]=A,v.addEventListener("dispose",w);let T=b.program;i.updateUBOMapping(v,T);let g=e.render.frame;if(r[v.id]!==g)h(v),r[v.id]=g}function d(v){let b=p();v.__bindingPointIndex=b;let A=t.createBuffer(),{__size:T,usage:g}=v;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,T,g),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,A),A}function p(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let b=s[v.id],{uniforms:A,__cache:T}=v;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let g=0,S=A.length;g<S;g++){let z=A[g];if(Array.isArray(z))for(let C=0,F=z.length;C<F;C++)f(z[C],g,C,T);else f(z,g,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(v,b,A,T){if(E(v,b,A,T)===!0){let{__offset:g,value:S}=v;if(Array.isArray(S)){let z=0;for(let C=0;C<S.length;C++){let F=S[C],X=u(F);if(_(F,v.__data,z),typeof F!=="number"&&typeof F!=="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F))z+=X.storage/Float32Array.BYTES_PER_ELEMENT}}else _(S,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,g,v.__data)}}function _(v,b,A){if(typeof v==="number"||typeof v==="boolean")b[0]=v;else if(v.isMatrix3)b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0;else if(ArrayBuffer.isView(v))b.set(new v.constructor(v.buffer,v.byteOffset,b.length));else v.toArray(b,A)}function E(v,b,A,T){let g=v.value,S=b+"_"+A;if(T[S]===void 0){if(typeof g==="number"||typeof g==="boolean")T[S]=g;else if(ArrayBuffer.isView(g))T[S]=g.slice();else T[S]=g.clone();return!0}else{let z=T[S];if(typeof g==="number"||typeof g==="boolean"){if(z!==g)return T[S]=g,!0}else if(ArrayBuffer.isView(g))return!0;else if(z.equals(g)===!1)return z.copy(g),!0}return!1}function m(v){let b=v.uniforms,A=0,T=16;for(let S=0,z=b.length;S<z;S++){let C=Array.isArray(b[S])?b[S]:[b[S]];for(let F=0,X=C.length;F<X;F++){let P=C[F],V=Array.isArray(P.value)?P.value:[P.value];for(let K=0,k=V.length;K<k;K++){let nt=V[K],q=u(nt),j=A%T,et=j%q.boundary,Lt=j+et;if(A+=et,Lt!==0&&T-Lt<q.storage)A+=T-Lt;P.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=q.storage}}}let g=A%T;if(g>0)A+=T-g;return v.__size=A,v.__cache={},this}function u(v){let b={boundary:0,storage:0};if(typeof v==="number"||typeof v==="boolean")b.boundary=4,b.storage=4;else if(v.isVector2)b.boundary=8,b.storage=8;else if(v.isVector3||v.isColor)b.boundary=16,b.storage=12;else if(v.isVector4)b.boundary=16,b.storage=16;else if(v.isMatrix3)b.boundary=48,b.storage=48;else if(v.isMatrix4)b.boundary=64,b.storage=64;else if(v.isTexture)It("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(v))b.boundary=16,b.storage=v.byteLength;else It("WebGLRenderer: Unsupported uniform value type.",v);return b}function w(v){let b=v.target;b.removeEventListener("dispose",w);let A=a.indexOf(b.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function R(){for(let v in s)t.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var Ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mn=null;function Rg(){if(Mn===null)Mn=new _o(Ag,16,16,ii,yn),Mn.name="DFG_LUT",Mn.minFilter=We,Mn.magFilter=We,Mn.wrapS=Qs,Mn.wrapT=Qs,Mn.generateMipmaps=!1,Mn.needsUpdate=!0;return Mn}class $o{constructor(t={}){let{canvas:e=Xc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:h=fn}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let _=h,E=new Set([Ra,Aa,wa]),m=new Set([fn,Wn,us,Fi,Ea,Ta]),u=new Uint32Array(4),w=new Int32Array(4),R=new L,v=null,b=null,A=[],T=[],g=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,z=!1,C=null,F=null,X=null,P=null;this._outputColorSpace=or;let V=0,K=0,k=null,nt=-1,q=null,j=new me,et=new me,Lt=null,At=new Gt(0),ce=0,{width:kt,height:Y}=e,it=1,at=null,Rt=null,Dt=new me(0,0,kt,Y),Tt=new me(0,0,kt,Y),Se=!1,qt=new _s,Zt=!1,ne=!1,Jt=new ae,Ce=new L,fe=new me,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function be(){return k===null?it:1}let D=n;function ke(y,N){return e.getContext(y,N)}let jt,ge,M,x,I,H,tt,ot,ht,W,J,gt,bt,ut,st,wt,Ct,Kt,U,lt,Z,ct,_t;try{let y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${Jl}`);if(e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Qt,!1),D===null){if(D=ke("webgl2",y),D===null)if(ke("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Q()}catch(y){throw e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Qt,!1),Nt("WebGLRenderer: "+y.message),y}function Q(){if(jt=new Um(D),jt.init(),Z=new Sg(D,jt),ge=new Tm(D,jt,t,Z),M=new yg(D,jt),ge.reversedDepthBuffer&&p)M.buffers.depth.setReversed(!0);F=D.createFramebuffer(),X=D.createFramebuffer(),P=D.createFramebuffer(),x=new Bm(D),I=new rg,H=new vg(D,jt,M,I,ge,Z,x),tt=new Nm(S),ot=new zd(D),ct=new bm(D,ot),ht=new Fm(D,ot,x,ct),W=new Hm(D,ht,ot,ct,x),Kt=new zm(D,ge,H),st=new wm(I),J=new sg(S,tt,jt,ge,ct,st),gt=new Tg(S,I),bt=new og,ut=new fg(jt),Ct=new Mm(S,tt,M,W,f,o),wt=new xg(S,W,ge),_t=new wg(D,x,ge,M),U=new Em(D,jt,x),lt=new Om(D,jt,x),x.programs=J.programs,S.capabilities=ge,S.extensions=jt,S.properties=I,S.renderLists=bt,S.shadowMap=wt,S.state=M,S.info=x}if(_!==fn)g=new km(_,e.width,e.height,a,i,s);let ft=new Nh(S,D);this.xr=ft,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=jt.get("WEBGL_lose_context");if(y)y.loseContext()},this.forceContextRestore=function(){let y=jt.get("WEBGL_lose_context");if(y)y.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(y){if(y===void 0)return;it=y,this.setSize(kt,Y,!1)},this.getSize=function(y){return y.set(kt,Y)},this.setSize=function(y,N,G=!0){if(ft.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}if(kt=y,Y=N,e.width=Math.floor(y*it),e.height=Math.floor(N*it),G===!0)e.style.width=y+"px",e.style.height=N+"px";if(g!==null)g.setSize(e.width,e.height);this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(kt*it,Y*it).floor()},this.setDrawingBufferSize=function(y,N,G){kt=y,Y=N,it=G,e.width=Math.floor(y*G),e.height=Math.floor(N*G),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(_===fn){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(Dt)},this.setViewport=function(y,N,G,O){if(y.isVector4)Dt.set(y.x,y.y,y.z,y.w);else Dt.set(y,N,G,O);M.viewport(j.copy(Dt).multiplyScalar(it).round())},this.getScissor=function(y){return y.copy(Tt)},this.setScissor=function(y,N,G,O){if(y.isVector4)Tt.set(y.x,y.y,y.z,y.w);else Tt.set(y,N,G,O);M.scissor(et.copy(Tt).multiplyScalar(it).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(y){M.setScissorTest(Se=y)},this.setOpaqueSort=function(y){at=y},this.setTransparentSort=function(y){Rt=y},this.getClearColor=function(y){return y.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,G=!0){let O=0;if(y){let B=!1;if(k!==null){let mt=k.texture.format;B=E.has(mt)}if(B){let mt=k.texture.type,yt=m.has(mt),pt=Ct.getClearColor(),vt=Ct.getClearAlpha(),{r:Mt,g:zt,b:Wt}=pt;if(yt)u[0]=Mt,u[1]=zt,u[2]=Wt,u[3]=vt,D.clearBufferuiv(D.COLOR,0,u);else w[0]=Mt,w[1]=zt,w[2]=Wt,w[3]=vt,D.clearBufferiv(D.COLOR,0,w)}else O|=D.COLOR_BUFFER_BIT}if(N)O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(G)O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(O!==0)D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),C=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Qt,!1),Ct.dispose(),bt.dispose(),ut.dispose(),I.dispose(),tt.dispose(),W.dispose(),ct.dispose(),_t.dispose(),J.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",gl),ft.removeEventListener("sessionend",_l),qn.stop()};function Bt(y){y.preventDefault(),ho("WebGLRenderer: Context Lost."),z=!0}function he(){ho("WebGLRenderer: Context Restored."),z=!1;let y=x.autoReset,N=wt.enabled,G=wt.autoUpdate,O=wt.needsUpdate,B=wt.type;Q(),x.autoReset=y,wt.enabled=N,wt.autoUpdate=G,wt.needsUpdate=O,wt.type=B}function Qt(y){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function mn(y){let N=y.target;N.removeEventListener("dispose",mn),Tn(N)}function Tn(y){Fu(y),I.remove(y)}function Fu(y){let N=I.get(y).programs;if(N!==void 0){if(N.forEach(function(G){J.releaseProgram(G)}),y.isShaderMaterial)J.releaseShaderCache(y)}}this.renderBufferDirect=function(y,N,G,O,B,mt){if(N===null)N=Ge;let yt=B.isMesh&&B.matrixWorld.determinantAffine()<0,pt=zu(y,N,G,O,B);M.setMaterial(O,yt);let vt=G.index,Mt=1;if(O.wireframe===!0){if(vt=ht.getWireframeAttribute(G),vt===void 0)return;Mt=2}let zt=G.drawRange,Wt=G.attributes.position,St=zt.start*Mt,te=(zt.start+zt.count)*Mt;if(mt!==null)St=Math.max(St,mt.start*Mt),te=Math.min(te,(mt.start+mt.count)*Mt);if(vt!==null)St=Math.max(St,0),te=Math.min(te,vt.count);else if(Wt!==void 0&&Wt!==null)St=Math.max(St,0),te=Math.min(te,Wt.count);let xe=te-St;if(xe<0||xe===1/0)return;ct.setup(B,O,pt,G,vt);let pe,oe=U;if(vt!==null)pe=ot.get(vt),oe=lt,oe.setIndex(pe);if(B.isMesh)if(O.wireframe===!0)M.setLineWidth(O.wireframeLinewidth*be()),oe.setMode(D.LINES);else oe.setMode(D.TRIANGLES);else if(B.isLine){let Le=O.linewidth;if(Le===void 0)Le=1;if(M.setLineWidth(Le*be()),B.isLineSegments)oe.setMode(D.LINES);else if(B.isLineLoop)oe.setMode(D.LINE_LOOP);else oe.setMode(D.LINE_STRIP)}else if(B.isPoints)oe.setMode(D.POINTS);else if(B.isSprite)oe.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(!jt.get("WEBGL_multi_draw")){let{_multiDrawStarts:Le,_multiDrawCounts:xt,_multiDrawCount:Fe}=B,$t=vt?ot.get(vt).bytesPerElement:1,Qe=I.get(O).currentProgram.getUniforms();for(let gn=0;gn<Fe;gn++)Qe.setValue(D,"_gl_DrawID",gn),oe.render(Le[gn]/$t,xt[gn])}else oe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)oe.renderInstances(St,xe,B.count);else if(G.isInstancedBufferGeometry){let Le=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xt=Math.min(G.instanceCount,Le);oe.renderInstances(St,xe,xt)}else oe.render(St,xe)};function ml(y,N,G,O){if(C!==null&&y.isNodeMaterial)C.setObject(O,y);if(Zt===!0)st.setState(y,G,!1);if(y.transparent===!0&&y.side===$e&&y.forceSinglePass===!1)y.side=Ve,y.needsUpdate=!0,Is(y,N,O),y.side=kn,y.needsUpdate=!0,Is(y,N,O),y.side=$e;else Is(y,N,O)}this.compile=function(y,N,G=null){if(G===null)G=y;if(C!==null)C.renderStart(y,N,G);if(b=ut.get(G),b.init(N),T.push(b),G.traverseVisible(function(B){if(B.isLight&&B.layers.test(N.layers)){if(b.pushLight(B),B.castShadow)b.pushShadow(B)}}),y!==G)y.traverseVisible(function(B){if(B.isLight&&B.layers.test(N.layers)){if(b.pushLight(B),B.castShadow)b.pushShadow(B)}});if(b.setupLights(),C!==null)C.updateLights(b.state.lightsArray);if(ne=this.localClippingEnabled,Zt=st.init(this.clippingPlanes,ne),Zt===!0)st.setGlobalState(this.clippingPlanes,N);if(C!==null)wt.render(b.state.shadowsArray,G,N);let O=new Set;if(y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let mt=B.material;if(mt)if(Array.isArray(mt))for(let yt=0;yt<mt.length;yt++){let pt=mt[yt];ml(pt,G,N,B),O.add(pt)}else ml(mt,G,N,B),O.add(mt)}),b=T.pop(),C!==null)C.renderEnd();return O},this.compileAsync=function(y,N,G=null){let O=this.compile(y,N,G);return new Promise((B)=>{function mt(){if(O.forEach(function(yt){let vt=I.get(yt).currentProgram;if(vt===void 0||vt.isReady())O.delete(yt)}),O.size===0){B(y);return}setTimeout(mt,10)}if(jt.get("KHR_parallel_shader_compile")!==null)mt();else setTimeout(mt,10)})};let Gr=null;function Ou(y){if(Gr)Gr(y)}function gl(){qn.stop()}function _l(){qn.start()}let qn=new Mh;if(qn.setAnimationLoop(Ou),typeof self<"u")qn.setContext(self);this.setAnimationLoop=function(y){Gr=y,ft.setAnimationLoop(y),y===null?qn.stop():qn.start()},ft.addEventListener("sessionstart",gl),ft.addEventListener("sessionend",_l),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(C!==null)C.renderStart(y,N);let G=ft.enabled===!0&&ft.isPresenting===!0,O=g!==null&&(k===null||G)&&g.begin(S,k);if(y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(N.parent===null&&N.matrixWorldAutoUpdate===!0)N.updateMatrixWorld();if(ft.enabled===!0&&ft.isPresenting===!0&&(g===null||g.isCompositing()===!1)){if(ft.cameraAutoUpdate===!0)ft.updateCamera(N);N=ft.getCamera()}if(y.isScene===!0)y.onBeforeRender(S,y,N,k);if(b=ut.get(y,T.length),b.init(N),b.state.textureUnits=H.getTextureUnits(),T.push(b),Jt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),qt.setFromProjectionMatrix(Jt,co,N.reversedDepth),ne=this.localClippingEnabled,Zt=st.init(this.clippingPlanes,ne),v=bt.get(y,A.length),v.init(),A.push(v),ft.enabled===!0&&ft.isPresenting===!0){let yt=S.xr.getDepthSensingMesh();if(yt!==null)kr(yt,N,-1/0,S.sortObjects)}if(kr(y,N,0,S.sortObjects),v.finish(),C!==null)C.updateLights(b.state.lightsArray);if(S.sortObjects===!0)v.sort(at,Rt);if(Me=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Me)Ct.addToRenderList(v,y);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(Zt===!0)st.beginShadows();let B=b.state.shadowsArray;if(wt.render(B,y,N),Zt===!0)st.endShadows();if((O&&g.hasRenderPass())===!1){let yt=v.opaque,pt=v.transmissive;if(b.setupLights(),N.isArrayCamera){let vt=N.cameras;if(pt.length>0)for(let Mt=0,zt=vt.length;Mt<zt;Mt++){let Wt=vt[Mt];yl(yt,pt,y,Wt)}if(Me)Ct.render(y);for(let Mt=0,zt=vt.length;Mt<zt;Mt++){let Wt=vt[Mt];xl(v,y,Wt,Wt.viewport)}}else{if(pt.length>0)yl(yt,pt,y,N);if(Me)Ct.render(y);xl(v,y,N)}}if(k!==null&&K===0)H.updateMultisampleRenderTarget(k),H.updateRenderTargetMipmap(k);if(O)g.end(S);if(y.isScene===!0)y.onAfterRender(S,y,N);if(ct.resetDefaultState(),nt=-1,q=null,T.pop(),T.length>0){if(b=T[T.length-1],H.setTextureUnits(b.state.textureUnits),Zt===!0)st.setGlobalState(S.clippingPlanes,b.state.camera)}else b=null;if(A.pop(),A.length>0)v=A[A.length-1];else v=null;if(C!==null)C.renderEnd()};function kr(y,N,G,O){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD){if(y.autoUpdate===!0)y.update(N)}else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight){if(b.pushLight(y),y.castShadow)b.pushShadow(y)}else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(qt)){if(O)fe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Jt);let yt=W.update(y),pt=y.material;if(pt.visible)v.push(y,yt,pt,G,fe.z,null,N)}}else if(y.isMesh||y.isLine||y.isPoints){if(!y.frustumCulled||y.intersectsFrustum(qt)){let yt=W.update(y),pt=y.material;if(O){if(y.boundingSphere!==void 0){if(y.boundingSphere===null)y.computeBoundingSphere();fe.copy(y.boundingSphere.center)}else{if(yt.boundingSphere===null)yt.computeBoundingSphere();fe.copy(yt.boundingSphere.center)}fe.applyMatrix4(y.matrixWorld).applyMatrix4(Jt)}if(Array.isArray(pt)){let vt=yt.groups;for(let Mt=0,zt=vt.length;Mt<zt;Mt++){let Wt=vt[Mt],St=pt[Wt.materialIndex];if(St&&St.visible)v.push(y,yt,St,G,fe.z,Wt,N)}}else if(pt.visible)v.push(y,yt,pt,G,fe.z,null,N)}}}let mt=y.children;for(let yt=0,pt=mt.length;yt<pt;yt++)kr(mt[yt],N,G,O)}function xl(y,N,G,O){let{opaque:B,transmissive:mt,transparent:yt}=y;if(b.setupLightsView(G),Zt===!0)st.setGlobalState(S.clippingPlanes,G);if(O)M.viewport(j.copy(O));if(B.length>0)Ps(B,N,G);if(mt.length>0)Ps(mt,N,G);if(yt.length>0)Ps(yt,N,G);M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function yl(y,N,G,O){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[O.id]===void 0){let St=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[O.id]=new Ke(1,1,{generateMipmaps:!0,type:St?yn:fn,minFilter:ti,samples:Math.max(4,ge.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let mt=b.state.transmissionRenderTarget[O.id],yt=O.viewport||j;mt.setSize(yt.z*S.transmissionResolutionScale,yt.w*S.transmissionResolutionScale);let pt=S.getRenderTarget(),vt=S.getActiveCubeFace(),Mt=S.getActiveMipmapLevel();if(S.setRenderTarget(mt),S.getClearColor(At),ce=S.getClearAlpha(),ce<1)S.setClearColor(16777215,0.5);if(S.clear(),Me)Ct.render(G);let zt=S.toneMapping;S.toneMapping=dn;let Wt=O.viewport;if(O.viewport!==void 0)O.viewport=void 0;if(b.setupLightsView(O),Zt===!0)st.setGlobalState(S.clippingPlanes,O);if(Ps(y,G,O),H.updateMultisampleRenderTarget(mt),H.updateRenderTargetMipmap(mt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let te=0,xe=N.length;te<xe;te++){let pe=N[te],{object:oe,geometry:Le,material:xt,group:Fe}=pe;if(xt.side===$e&&oe.layers.test(O.layers)){let $t=xt.side;xt.side=Ve,xt.needsUpdate=!0,vl(oe,G,O,Le,xt,Fe),xt.side=$t,xt.needsUpdate=!0,St=!0}}if(St===!0)H.updateMultisampleRenderTarget(mt),H.updateRenderTargetMipmap(mt)}if(S.setRenderTarget(pt,vt,Mt),S.setClearColor(At,ce),Wt!==void 0)O.viewport=Wt;S.toneMapping=zt}function Ps(y,N,G){let O=N.isScene===!0?N.overrideMaterial:null;for(let B=0,mt=y.length;B<mt;B++){let yt=y[B],{object:pt,geometry:vt,group:Mt}=yt,zt=yt.material;if(zt.allowOverride===!0&&O!==null)zt=O;if(pt.layers.test(G.layers))vl(pt,N,G,vt,zt,Mt)}}function vl(y,N,G,O,B,mt){if(C!==null&&B.isNodeMaterial)C.setObject(y,B);if(y.onBeforeRender(S,N,G,O,B,mt),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(S,N,G,O,y,mt),B.transparent===!0&&B.side===$e&&B.forceSinglePass===!1)B.side=Ve,B.needsUpdate=!0,S.renderBufferDirect(G,N,O,B,y,mt),B.side=kn,B.needsUpdate=!0,S.renderBufferDirect(G,N,O,B,y,mt),B.side=$e;else S.renderBufferDirect(G,N,O,B,y,mt);y.onAfterRender(S,N,G,O,B,mt)}function Is(y,N,G){if(N.isScene!==!0)N=Ge;let O=I.get(y),B=b.state.lights,mt=b.state.shadowsArray,yt=B.state.version,pt=J.getParameters(y,B.state,mt,N,G,b.state.lightProbeGridArray),vt=J.getProgramCacheKey(pt),Mt=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,O.fog=N.fog;let zt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;if(O.envMap=tt.get(y.envMap||O.environment,zt),O.envMapRotation=O.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Mt===void 0)y.addEventListener("dispose",mn),Mt=new Map,O.programs=Mt;let Wt=Mt.get(vt);if(Wt!==void 0){if(O.currentProgram===Wt&&O.lightsStateVersion===yt)return Ml(y,pt),Wt}else{if(pt.uniforms=J.getUniforms(y),C!==null&&y.isNodeMaterial)C.build(y,G,pt);y.onBeforeCompile(pt,S),Wt=J.acquireProgram(pt,vt),Mt.set(vt,Wt),O.uniforms=pt.uniforms}let St=O.uniforms;if(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)St.clippingPlanes=st.uniform;if(Ml(y,pt),O.needsLights=Gu(y),O.lightsStateVersion=yt,O.needsLights)St.ambientLightColor.value=B.state.ambient,St.lightProbe.value=B.state.probe,St.sunLights.value=B.state.sun,St.sunLightShadows.value=B.state.sunShadow,St.directionalLights.value=B.state.directional,St.directionalLightShadows.value=B.state.directionalShadow,St.spotLights.value=B.state.spot,St.spotLightShadows.value=B.state.spotShadow,St.rectAreaLights.value=B.state.rectArea,St.ltc_1.value=B.state.rectAreaLTC1,St.ltc_2.value=B.state.rectAreaLTC2,St.pointLights.value=B.state.point,St.pointLightShadows.value=B.state.pointShadow,St.hemisphereLights.value=B.state.hemi,St.sunShadowMatrix.value=B.state.sunShadowMatrix,St.sunShadowCascade.value=B.state.sunShadowCascade,St.directionalShadowMatrix.value=B.state.directionalShadowMatrix,St.spotLightMatrix.value=B.state.spotLightMatrix,St.spotLightMap.value=B.state.spotLightMap,St.pointShadowMatrix.value=B.state.pointShadowMatrix;return O.lightProbeGrid=b.state.lightProbeGridArray.length>0,O.currentProgram=Wt,O.uniformsList=null,Wt}function Sl(y){if(y.uniformsList===null){let N=y.currentProgram.getUniforms();y.uniformsList=Es.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Ml(y,N){let G=I.get(y);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Bu(y,N){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;R.setFromMatrixPosition(N.matrixWorld);for(let G=0,O=y.length;G<O;G++){let B=y[G];if(B.texture!==null&&B.boundingBox.containsPoint(R))return B}return null}function zu(y,N,G,O,B){if(N.isScene!==!0)N=Ge;H.resetTextureUnits();let mt=N.fog,yt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?N.environment:null,pt=k===null?S.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Yt.workingColorSpace,vt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Mt=tt.get(O.envMap||yt,vt),zt=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Wt=!!G.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),St=!!G.morphAttributes.position,te=!!G.morphAttributes.normal,xe=!!G.morphAttributes.color,pe=dn;if(O.toneMapped){if(k===null||k.isXRRenderTarget===!0)pe=S.toneMapping}let oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Le=oe!==void 0?oe.length:0,xt=I.get(O),Fe=b.state.lights;if(Zt===!0){if(ne===!0||y!==q){let ue=y===q&&O.id===nt;st.setState(O,y,ue)}}let $t=!1;if(O.version===xt.__version){if(xt.needsLights&&xt.lightsStateVersion!==Fe.state.version)$t=!0;else if(xt.outputColorSpace!==pt)$t=!0;else if(B.isBatchedMesh&&xt.batching===!1)$t=!0;else if(!B.isBatchedMesh&&xt.batching===!0)$t=!0;else if(B.isBatchedMesh&&xt.batchingColor===!0&&B._colorsTexture===null)$t=!0;else if(B.isBatchedMesh&&xt.batchingColor===!1&&B._colorsTexture!==null)$t=!0;else if(B.isInstancedMesh&&xt.instancing===!1)$t=!0;else if(!B.isInstancedMesh&&xt.instancing===!0)$t=!0;else if(B.isSkinnedMesh&&xt.skinning===!1)$t=!0;else if(!B.isSkinnedMesh&&xt.skinning===!0)$t=!0;else if(B.isInstancedMesh&&xt.instancingColor===!0&&B.instanceColor===null)$t=!0;else if(B.isInstancedMesh&&xt.instancingColor===!1&&B.instanceColor!==null)$t=!0;else if(B.isInstancedMesh&&xt.instancingMorph===!0&&B.morphTexture===null)$t=!0;else if(B.isInstancedMesh&&xt.instancingMorph===!1&&B.morphTexture!==null)$t=!0;else if(xt.envMap!==Mt)$t=!0;else if(O.fog===!0&&xt.fog!==mt)$t=!0;else if(xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==st.numPlanes||xt.numIntersection!==st.numIntersection))$t=!0;else if(xt.vertexAlphas!==zt)$t=!0;else if(xt.vertexTangents!==Wt)$t=!0;else if(xt.morphTargets!==St)$t=!0;else if(xt.morphNormals!==te)$t=!0;else if(xt.morphColors!==xe)$t=!0;else if(xt.toneMapping!==pe)$t=!0;else if(xt.morphTargetsCount!==Le)$t=!0;else if(!!xt.lightProbeGrid!==b.state.lightProbeGridArray.length>0)$t=!0}else $t=!0,xt.__version=O.version;let Qe=xt.currentProgram;if($t===!0){if(Qe=Is(O,N,B),C&&O.isNodeMaterial)C.onUpdateProgram(O,Qe,xt)}let gn=!1,Nn=!1,pi=!1,re=Qe.getUniforms(),_e=xt.uniforms;if(M.useProgram(Qe.program))gn=!0,Nn=!0,pi=!0;if(O.id!==nt)nt=O.id,Nn=!0;if(xt.needsLights){let ue=Bu(b.state.lightProbeGridArray,B);if(xt.lightProbeGrid!==ue)xt.lightProbeGrid=ue,Nn=!0}if(gn||q!==y){if(M.buffers.depth.getReversed()&&y.reversedDepth!==!0)y._reversedDepth=!0,y.updateProjectionMatrix();re.setValue(D,"projectionMatrix",y.projectionMatrix),re.setValue(D,"viewMatrix",y.matrixWorldInverse);let Fn=re.map.cameraPosition;if(Fn!==void 0)Fn.setValue(D,Ce.setFromMatrixPosition(y.matrixWorld));if(ge.logarithmicDepthBuffer)re.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2));if(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)re.setValue(D,"isOrthographic",y.isOrthographicCamera===!0);if(q!==y)q=y,Nn=!0,pi=!0}if(xt.needsLights){if(Fe.state.sunShadowMap.length>0)re.setValue(D,"sunShadowMap",Fe.state.sunShadowMap,H);if(Fe.state.directionalShadowMap.length>0)re.setValue(D,"directionalShadowMap",Fe.state.directionalShadowMap,H);if(Fe.state.spotShadowMap.length>0)re.setValue(D,"spotShadowMap",Fe.state.spotShadowMap,H);if(Fe.state.pointShadowMap.length>0)re.setValue(D,"pointShadowMap",Fe.state.pointShadowMap,H)}if(B.isSkinnedMesh){re.setOptional(D,B,"bindMatrix"),re.setOptional(D,B,"bindMatrixInverse");let ue=B.skeleton;if(ue){if(ue.boneTexture===null)ue.computeBoneTexture();re.setValue(D,"boneTexture",ue.boneTexture,H)}}if(B.isBatchedMesh){if(re.setOptional(D,B,"batchingTexture"),re.setValue(D,"batchingTexture",B._matricesTexture,H),re.setOptional(D,B,"batchingIdTexture"),re.setValue(D,"batchingIdTexture",B._indirectTexture,H),re.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null)re.setValue(D,"batchingColorTexture",B._colorsTexture,H)}let Un=G.morphAttributes;if(Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)Kt.update(B,G,Qe);if(Nn||xt.receiveShadow!==B.receiveShadow)xt.receiveShadow=B.receiveShadow,re.setValue(D,"receiveShadow",B.receiveShadow);if((O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&N.environment!==null)_e.envMapIntensity.value=N.environmentIntensity;if(_e.dfgLUT!==void 0)_e.dfgLUT.value=Rg();if(Nn){if(re.setValue(D,"toneMappingExposure",S.toneMappingExposure),xt.needsLights)Hu(_e,pi);if(mt&&O.fog===!0)gt.refreshFogUniforms(_e,mt);if(gt.refreshMaterialUniforms(_e,O,it,Y,b.state.transmissionRenderTarget[y.id]),xt.needsLights&&xt.lightProbeGrid){let ue=xt.lightProbeGrid;_e.probesSH.value=ue.texture,_e.probesMin.value.copy(ue.boundingBox.min),_e.probesMax.value.copy(ue.boundingBox.max),_e.probesResolution.value.copy(ue.resolution)}Es.upload(D,Sl(xt),_e,H)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0)Es.upload(D,Sl(xt),_e,H),O.uniformsNeedUpdate=!1;if(O.isSpriteMaterial)re.setValue(D,"center",B.center);if(re.setValue(D,"modelViewMatrix",B.modelViewMatrix),re.setValue(D,"normalMatrix",B.normalMatrix),re.setValue(D,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){let ue=O.uniformsGroups;for(let Fn=0,mi=ue.length;Fn<mi;Fn++){let El=ue[Fn];_t.update(El,Qe),_t.bind(El,Qe)}}return Qe}function Hu(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.sunLights.needsUpdate=N,y.sunLightShadows.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Gu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(y,N,G){let O=I.get(y);if(O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1)O.__useRenderToTexture=!1;I.get(y.texture).__webglTexture=N,I.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:G,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){let G=I.get(y);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,G=0){k=y,V=N,K=G;let O=null,B=!1,mt=!1;if(y){let pt=I.get(y);if(pt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(D.FRAMEBUFFER,pt.__webglFramebuffer),j.copy(y.viewport),et.copy(y.scissor),Lt=y.scissorTest,M.viewport(j),M.scissor(et),M.setScissorTest(Lt),nt=-1;return}else if(pt.__webglFramebuffer===void 0)H.setupRenderTarget(y);else if(pt.__hasExternalTextures)H.rebindTextures(y,I.get(y.texture).__webglTexture,I.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let zt=y.depthTexture;if(pt.__boundDepthTexture!==zt){if(zt!==null&&I.has(zt)&&(y.width!==zt.image.width||y.height!==zt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(y)}}let vt=y.texture;if(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)mt=!0;let Mt=I.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget){if(Array.isArray(Mt[N]))O=Mt[N][G];else O=Mt[N];B=!0}else if(y.samples>0&&H.useMultisampledRTT(y)===!1)O=I.get(y).__webglMultisampledFramebuffer;else if(Array.isArray(Mt))O=Mt[G];else O=Mt;j.copy(y.viewport),et.copy(y.scissor),Lt=y.scissorTest}else j.copy(Dt).multiplyScalar(it).floor(),et.copy(Tt).multiplyScalar(it).floor(),Lt=Se;if(G!==0)O=F;if(M.bindFramebuffer(D.FRAMEBUFFER,O))M.drawBuffers(y,O);if(M.viewport(j),M.scissor(et),M.setScissorTest(Lt),B){let pt=I.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,pt.__webglTexture,G)}else if(mt){let pt=N;for(let vt=0;vt<y.textures.length;vt++){let Mt=I.get(y.textures[vt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+vt,Mt.__webglTexture,G,pt)}}else if(y!==null&&G!==0){let pt=I.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pt.__webglTexture,G)}nt=-1};function bl(y){let N=I.get(y);if(N.__readFormat!==y.format||N.__readType!==y.type)N.__readFormat=y.format,N.__readType=y.type,N.__formatReadable=ge.textureFormatReadable(y.format),N.__typeReadable=ge.textureTypeReadable(y.type);return N}if(this.readRenderTargetPixels=function(y,N,G,O,B,mt,yt,pt=0){if(!(y&&y.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=I.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&yt!==void 0)vt=vt[yt];if(vt){M.bindFramebuffer(D.FRAMEBUFFER,vt);try{let Mt=y.textures[pt],{format:zt,type:Wt}=Mt;if(y.textures.length>1)D.readBuffer(D.COLOR_ATTACHMENT0+pt);let St=bl(Mt);if(St.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(N>=0&&N<=y.width-O&&(G>=0&&G<=y.height-B))D.readPixels(N,G,O,B,Z.convert(zt),Z.convert(Wt),mt)}finally{let Mt=k!==null?I.get(k).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(y,N,G,O,B,mt,yt,pt=0){if(!(y&&y.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=I.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&yt!==void 0)vt=vt[yt];if(vt)if(N>=0&&N<=y.width-O&&(G>=0&&G<=y.height-B)){M.bindFramebuffer(D.FRAMEBUFFER,vt);let Mt=y.textures[pt],{format:zt,type:Wt}=Mt;if(y.textures.length>1)D.readBuffer(D.COLOR_ATTACHMENT0+pt);let St=bl(Mt);if(St.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,te),D.bufferData(D.PIXEL_PACK_BUFFER,mt.byteLength,D.STREAM_READ),D.readPixels(N,G,O,B,Z.convert(zt),Z.convert(Wt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let xe=k!==null?I.get(k).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,xe);let pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Yc(D,pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,mt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(te),D.deleteSync(pe),mt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,G=0){let O=Math.pow(2,-G),B=Math.floor(y.image.width*O),mt=Math.floor(y.image.height*O),yt=N!==null?N.x:0,pt=N!==null?N.y:0;H.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,yt,pt,B,mt),M.unbindTexture()},this.copyTextureToTexture=function(y,N,G=null,O=null,B=0,mt=0){let yt,pt,vt,Mt,zt,Wt,St,te,xe,pe=y.isCompressedTexture?y.mipmaps[mt]:y.image;if(G!==null)yt=G.max.x-G.min.x,pt=G.max.y-G.min.y,vt=G.isBox3?G.max.z-G.min.z:1,Mt=G.min.x,zt=G.min.y,Wt=G.isBox3?G.min.z:0;else{let _e=Math.pow(2,-B);if(yt=Math.floor(pe.width*_e),pt=Math.floor(pe.height*_e),y.isDataArrayTexture)vt=pe.depth;else if(y.isData3DTexture)vt=Math.floor(pe.depth*_e);else vt=1;Mt=0,zt=0,Wt=0}if(O!==null)St=O.x,te=O.y,xe=O.z;else St=0,te=0,xe=0;let oe=Z.convert(N.format),Le=Z.convert(N.type),xt;if(N.isData3DTexture)H.setTexture3D(N,0),xt=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)H.setTexture2DArray(N,0),xt=D.TEXTURE_2D_ARRAY;else H.setTexture2D(N,0),xt=D.TEXTURE_2D;M.activeTexture(D.TEXTURE0),M.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),M.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),M.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let Fe=M.getParameter(D.UNPACK_ROW_LENGTH),$t=M.getParameter(D.UNPACK_IMAGE_HEIGHT),Qe=M.getParameter(D.UNPACK_SKIP_PIXELS),gn=M.getParameter(D.UNPACK_SKIP_ROWS),Nn=M.getParameter(D.UNPACK_SKIP_IMAGES);M.pixelStorei(D.UNPACK_ROW_LENGTH,pe.width),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe.height),M.pixelStorei(D.UNPACK_SKIP_PIXELS,Mt),M.pixelStorei(D.UNPACK_SKIP_ROWS,zt),M.pixelStorei(D.UNPACK_SKIP_IMAGES,Wt);let pi=y.isDataArrayTexture||y.isData3DTexture,re=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){let _e=I.get(y),Un=I.get(N),ue=I.get(_e.__renderTarget),Fn=I.get(Un.__renderTarget);M.bindFramebuffer(D.READ_FRAMEBUFFER,ue.__webglFramebuffer),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let mi=0;mi<vt;mi++){if(pi)D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,I.get(y).__webglTexture,B,Wt+mi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,I.get(N).__webglTexture,mt,xe+mi);D.blitFramebuffer(Mt,zt,yt,pt,St,te,yt,pt,D.DEPTH_BUFFER_BIT,D.NEAREST)}M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||I.has(y)){let _e=I.get(y),Un=I.get(N);M.bindFramebuffer(D.READ_FRAMEBUFFER,X),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,P);for(let ue=0;ue<vt;ue++){if(pi)D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.__webglTexture,B,Wt+ue);else D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,B);if(re)D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Un.__webglTexture,mt,xe+ue);else D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Un.__webglTexture,mt);if(B!==0)D.blitFramebuffer(Mt,zt,yt,pt,St,te,yt,pt,D.COLOR_BUFFER_BIT,D.NEAREST);else if(re)D.copyTexSubImage3D(xt,mt,St,te,xe+ue,Mt,zt,yt,pt);else D.copyTexSubImage2D(xt,mt,St,te,Mt,zt,yt,pt)}M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(re)if(y.isDataTexture||y.isData3DTexture)D.texSubImage3D(xt,mt,St,te,xe,yt,pt,vt,oe,Le,pe.data);else if(N.isCompressedArrayTexture)D.compressedTexSubImage3D(xt,mt,St,te,xe,yt,pt,vt,oe,pe.data);else D.texSubImage3D(xt,mt,St,te,xe,yt,pt,vt,oe,Le,pe);else if(y.isDataTexture)D.texSubImage2D(D.TEXTURE_2D,mt,St,te,yt,pt,oe,Le,pe.data);else if(y.isCompressedTexture)D.compressedTexSubImage2D(D.TEXTURE_2D,mt,St,te,pe.width,pe.height,oe,pe.data);else D.texSubImage2D(D.TEXTURE_2D,mt,St,te,yt,pt,oe,Le,pe);if(M.pixelStorei(D.UNPACK_ROW_LENGTH,Fe),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$t),M.pixelStorei(D.UNPACK_SKIP_PIXELS,Qe),M.pixelStorei(D.UNPACK_SKIP_ROWS,gn),M.pixelStorei(D.UNPACK_SKIP_IMAGES,Nn),mt===0&&N.generateMipmaps)D.generateMipmap(xt);M.unbindTexture()},this.initRenderTarget=function(y){if(I.get(y).__webglFramebuffer===void 0)H.setupRenderTarget(y)},this.initTexture=function(y){if(y.isCubeTexture)H.setTextureCube(y,0);else if(y.isData3DTexture)H.setTexture3D(y,0);else if(y.isDataArrayTexture||y.isCompressedArrayTexture)H.setTexture2DArray(y,0);else H.setTexture2D(y,0);M.unbindTexture()},this.resetState=function(){V=0,K=0,k=null,M.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return co}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}var Fh={type:"change"},Qo={type:"start"},Bh={type:"end"},Ir=new Bi,Oh=new en,Cg=Math.cos(70*fo.DEG2RAD),Ae=new L,qe=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jo=0.000001;class tl extends wr{constructor(t,e=null){super(t,e);if(this.state=se.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Je.ROTATE,MIDDLE:Je.DOLLY,RIGHT:Je.PAN},this.touches={ONE:un.ROTATE,TWO:un.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Xe,this._lastTargetPosition=new L,this._quat=new Xe().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vs,this._sphericalDelta=new vs,this._scale=1,this._panOffset=new L,this._rotateStart=new Et,this._rotateEnd=new Et,this._rotateDelta=new Et,this._panStart=new Et,this._panEnd=new Et,this._panDelta=new Et,this._dollyStart=new Et,this._dollyEnd=new Et,this._dollyDelta=new Et,this._dollyDirection=new L,this._mouse=new Et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ig.bind(this),this._onPointerDown=Pg.bind(this),this._onPointerUp=Lg.bind(this),this._onContextMenu=zg.bind(this),this._onMouseWheel=Ug.bind(this),this._onKeyDown=Fg.bind(this),this._onTouchStart=Og.bind(this),this._onTouchMove=Bg.bind(this),this._onMouseDown=Dg.bind(this),this._onMouseMove=Ng.bind(this),this._interceptControlDown=Hg.bind(this),this._interceptControlUp=Gg.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(t){if(this._cursorStyle=t,t==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=se.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fh),this.update(),this.state=se.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;if(Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===se.NONE)this._rotateLeft(this._getAutoRotationAngle(t));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;if(isFinite(n)&&isFinite(i)){if(n<-Math.PI)n+=qe;else if(n>Math.PI)n-=qe;if(i<-Math.PI)i+=qe;else if(i>Math.PI)i-=qe;if(n<=i)this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let a=Ae.length();r=this._clampDistance(a*this._scale);let o=a-r;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),s=!!o}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=o!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(r!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position);else if(Ir.origin.copy(this.object.position),Ir.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ir.direction))<Cg)this.object.lookAt(this.target);else Oh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ir.intersectPlane(Oh,this.target)}else if(this.object.isOrthographicCamera){let r=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom)this.object.updateProjectionMatrix(),s=!0}if(this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>jo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jo||this._lastTargetPosition.distanceToSquared(this.target)>jo)return this.dispatchEvent(Fh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(t){if(t!==null)return qe/60*this.autoRotateSpeed*t;else return qe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*0.01);return Math.pow(0.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){if(this.screenSpacePanning===!0)Ae.setFromMatrixColumn(e,1);else Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae);Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Ae.copy(i).sub(this.target);let s=Ae.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(t){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=t;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(t){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=t;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,{width:r,height:a}=n;this._mouse.x=i/r*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){if(this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){if(this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0)this._dollyIn(this._getZoomScale(t.deltaY));else if(t.deltaY>0)this._dollyOut(this._getZoomScale(t.deltaY));this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);e=!0;break;case this.keys.BOTTOM:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);e=!0;break;case this.keys.LEFT:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);e=!0;break;case this.keys.RIGHT:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);e=!0;break}if(e)t.preventDefault(),this.update()}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){if(this.enableZoom)this._handleTouchStartDolly(t);if(this.enablePan)this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){if(this.enableZoom)this._handleTouchStartDolly(t);if(this.enableRotate)this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=0.5*(t.pageX+n.x),s=0.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+e.x)*0.5,a=(t.pageY+e.y)*0.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){if(this.enableZoom)this._handleTouchMoveDolly(t);if(this.enablePan)this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){if(this.enableZoom)this._handleTouchMoveDolly(t);if(this.enableRotate)this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];if(e===void 0)e=new Et,this._pointerPositions[t.pointerId]=e;e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}if(t.ctrlKey&&!this._controlActive)n.deltaY*=10;return n}}function Pg(t){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(t))return;if(this._addPointer(t),t.pointerType==="touch")this._onTouchStart(t);else this._onMouseDown(t);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function Ig(t){if(this.enabled===!1)return;if(t.pointerType==="touch")this._onTouchMove(t);else this._onMouseMove(t)}function Lg(t){switch(this._removePointer(t),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bh),this.state=se.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Dg(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=se.DOLLY;break;case Je.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=se.ROTATE}break;case Je.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=se.PAN}break;default:this.state=se.NONE}if(this.state!==se.NONE)this.dispatchEvent(Qo)}function Ng(t){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function Ug(t){if(this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE)return;t.preventDefault(),this.dispatchEvent(Qo),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Bh)}function Fg(t){if(this.enabled===!1)return;this._handleKeyDown(t)}function Og(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case un.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=se.TOUCH_ROTATE;break;case un.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case un.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=se.TOUCH_DOLLY_PAN;break;case un.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}if(this.state!==se.NONE)this.dispatchEvent(Qo)}function Bg(t){switch(this._trackPointer(t),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=se.NONE}}function zg(t){if(this.enabled===!1)return;t.preventDefault()}function Hg(t){if(t.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function Gg(t){if(t.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}class el extends ve{constructor(t=document.createElement("div")){super();this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Et(0.5,0.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){if(e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null)e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}}var Xi=new L,zh=new ae,Hh=new ae,Gh=new L,kh=new L;class nl{constructor(t={}){let e=this,n,i,s,r,a={objects:new WeakMap},o=t.element!==void 0?t.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o,this.sortObjects=!0,this.getSize=function(){return{width:n,height:i}},this.render=function(f,_){if(f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(_.parent===null&&_.matrixWorldAutoUpdate===!0)_.updateMatrixWorld();if(zh.copy(_.matrixWorldInverse),Hh.multiplyMatrices(_.projectionMatrix,zh),c(f,f,_),this.sortObjects)h(f)},this.setSize=function(f,_){n=f,i=_,s=n/2,r=i/2,o.style.width=f+"px",o.style.height=_+"px"};function l(f){if(f.isCSS2DObject)f.element.style.display="none";for(let _=0,E=f.children.length;_<E;_++)l(f.children[_])}function c(f,_,E){if(f.visible===!1){l(f);return}if(f.isCSS2DObject){Xi.setFromMatrixPosition(f.matrixWorld),Xi.applyMatrix4(Hh);let m=Xi.z>=-1&&Xi.z<=1&&f.layers.test(E.layers)===!0,u=f.element;if(u.style.display=m===!0?"":"none",m===!0){f.onBeforeRender(e,_,E);let R=100*f.center.x,v=100*f.center.y;u.style.transformOrigin=`${R}% ${v}%`;let b=-f.rotation2D,A=Xi.x*s+s,T=-Xi.y*r+r;if(u.style.transform=`translate(${-R}%, ${-v}%) translate(${A}px, ${T}px) rotate(${b}rad)`,u.parentNode!==o)o.appendChild(u);f.onAfterRender(e,_,E)}let w={distanceToCameraSquared:d(E,f)};a.objects.set(f,w)}for(let m=0,u=f.children.length;m<u;m++)c(f.children[m],_,E)}function d(f,_){return Gh.setFromMatrixPosition(f.matrixWorld),kh.setFromMatrixPosition(_.matrixWorld),Gh.distanceToSquared(kh)}function p(f){let _=[];return f.traverseVisible(function(E){if(E.isCSS2DObject)_.push(E)}),_}function h(f){let _=p(f).sort(function(m,u){if(m.renderOrder!==u.renderOrder)return u.renderOrder-m.renderOrder;let w=a.objects.get(m).distanceToCameraSquared,R=a.objects.get(u).distanceToCameraSquared;return w-R}),E=_.length;for(let m=0,u=_.length;m<u;m++)_[m].element.style.zIndex=E-m}}}var Nr=0.4,sl=-0.5,ee={minX:9.5,maxX:15.5,minZ:-5.2,maxZ:0.6};var Ts={fromZ:-4.4,toZ:-3},Yi=[12.6,0,-1.4],Zi=[[10.6,0,-4.75],[11.6,0,-4.75]],ws=[14.2,0,-5.05],Ji=[[13.7,0,-4.35],[14.7,0,-4.35]],Xh=[10.6,0,-0.1];var $i=[-5.2,0,2.2],ji=[4.6,0,-4.8],qh=[4.6,0,-1.3],Lr=[[4,0,-1.8],[2.5,0,-2.9],[6.7,0,-2.9]],Yh=[Math.PI,Math.PI/2,-Math.PI/2],Zh=[4.6,0,-2.9];var Ki=Math.PI/2,Dr=[16.4,0,2.6];var Vh=[-3.5,-1];var kg=[-3.9,15.2,18.8],Ie=(t,e,n,i=!1,s)=>({position:[t,0,e],facing:n,seated:i,...s?{label:s}:{}});function qi(t,e,n,i,s=!1){let r=Math.cos(Ki),a=Math.sin(Ki);return Ie(t[0]+e*r+n*a,t[2]-e*a+n*r,i+Ki,s)}function Vg(t,e,n){return[{key:"lounge",label:"Relaxing in the lounge",spots:Lr.map(([i,,s],r)=>Ie(i,s,Yh[r],!0))},{key:"galon",label:"Getting water from the galon",spots:[Ie(8.35,-0.4,Math.PI/2),Ie(8.2,-1.05,2.2),Ie(8.2,0.3,1.1)]},{key:"bakso",label:"Eating bakso at the gerobak",spots:[qi(e,0.5,1.1,Math.PI,!0),qi(e,-0.3,1.2,Math.PI,!0),qi(e,1.3,0.9,-2.4)]},{key:"dapur",label:"In the pantry kitchen",spots:[Ie(8.25,2.6,Math.PI/2),Ie(8.3,0.65,Math.PI/2),Ie(8.25,3.3,Math.PI/2)]},{key:"kopi",label:"Coffee break at kopi sepeda",spots:[qi(n,-0.5,0.85,Math.PI),qi(n,0.5,0.85,Math.PI),qi(n,1.45,0.3,-Math.PI/2)]},{key:"game",label:"Playing ping-pong",spots:[Ie(Yi[0]-1.75,Yi[2],Math.PI/2),Ie(Yi[0]+1.75,Yi[2],-Math.PI/2),Ie(Ji[0][0],Ji[0][2],Math.PI,!0,"Gaming on console")]},{key:"arcade",label:"Playing arcade games",spots:[Ie(Zi[0][0],Zi[0][2]+0.8,Math.PI),Ie(Zi[1][0],Zi[1][2]+0.8,Math.PI),Ie(Ji[1][0],Ji[1][2],Math.PI,!0,"Gaming on console")]},{key:"jalan",label:"Taking a stroll outside",spots:[Ie(Dr[0]-0.8,Dr[2]+0.3,Math.PI/2),Ie(t.minX+0.95,-0.9,-Math.PI/2),Ie(1.3,-4.4,Math.PI)]}]}function rl(t){let e=Math.max(1,t),n=Math.max(3,Math.ceil(e/Vh.length)),i=Array.from({length:e},(p,h)=>{let f=h<n?0:1;return[-2-(f===0?h:h-n)*2.6,0,Vh[f]]}),s=-2-(n-1)*2.6-2.3,r=s- -9.5,a={minX:s,maxX:9.5,minZ:-5.2,maxZ:4.2},o=[-11.9+r,0,-2.3],l=[-11.9+r,0,1.6],c=s-3.7,d=(ee.maxX-c)/28.7;return{deskCount:e,building:a,desks:i,baksoCart:o,kopiBike:l,sideLaneX:-10.15+r,gangCenterX:-11.4+r,camera:{target:[(c+ee.maxX)/2-0.15,0.6,0.2],offset:kg.map((p)=>p*d)},pan:{minX:c-0.3,maxX:17,minZ:-7,maxZ:11},idleStops:Vg(a,o,l)}}var Wg=[{radius:1.4,angles:[Math.PI,2*Math.PI,1.5*Math.PI,1.25*Math.PI,1.75*Math.PI]},{radius:2.1,angles:[1.2*Math.PI,1.8*Math.PI,1.5*Math.PI,1.35*Math.PI,1.65*Math.PI]}];function Xg(t){let e=Wg.flatMap((a)=>a.angles.map((o)=>({radius:a.radius,angle:o}))),{radius:n,angle:i}=e[t%e.length],s=$i[0]+n*Math.cos(i),r=$i[2]+n*Math.sin(i);return{position:[s,0,r],facing:Math.atan2($i[0]-s,$i[2]-r),seated:!1}}function Jh(t,e,n=0){let i=Math.max(t.seat||1,1)-1;if(t.room==="Lounge"){let[o,l,c]=Lr[i%Lr.length];return{position:[o,l,c],facing:Yh[i%Lr.length],seated:!0}}if(t.roomPosition==="meeting-area")return Xg(n);let[s,r,a]=e.desks[i%e.desks.length];return{position:[s,r,a-0.75],facing:0,seated:t.state==="Working"||t.state==="Reviewing"}}var Wh=([t,e])=>t>ee.minX&&t<ee.maxX&&e>ee.minZ&&e<ee.maxZ,qg=([t,e])=>t>1.5&&t<7.8&&e<-0.6;function $h(t,e,n){if(Math.hypot(e[0]-t[0],e[1]-t[1])<0.3)return[e];let{building:i,sideLaneX:s}=n,r=(f)=>f[1]>i.maxZ||f[0]<i.minX||f[0]>i.maxX&&!Wh(f),a=([f])=>f<i.minX,o=[t],l=(f)=>Wh(f)?[[f[0],-3.7],[3.1,-3.7],[3.1,0.4]]:qg(f)?[[3.1,f[1]],[3.1,0.4]]:[[f[0],0.4]],c=(f)=>a(f)?[[s,f[1]],[s,5.4]]:[[f[0],5.4]];if(!r(t)&&!r(e))o.push(...l(t),...l(e).reverse());else if(a(t)&&a(e))o.push([s,t[1]],[s,e[1]]);else if(r(t)&&r(e))o.push(...c(t),...c(e).reverse());else if(r(e))o.push(...l(t),[5.8,0.4],[5.8,5.4],...c(e).reverse());else o.push(...c(t),[5.8,5.4],[5.8,0.4],...l(e).reverse());o.push(e);let d=[t];for(let f of o.slice(1)){let _=d[d.length-1];if(Math.hypot(f[0]-_[0],f[1]-_[1])>0.2)d.push(f)}let p=(f,_,E)=>Math.abs(f[0]-_[0])<0.01&&Math.abs(_[0]-E[0])<0.01||Math.abs(f[1]-_[1])<0.01&&Math.abs(_[1]-E[1])<0.01;for(let f=1;f<d.length-1;)if(p(d[f-1],d[f],d[f+1]))d.splice(f,1);else f+=1;let h=d.slice(1);if(h.length===0||h[h.length-1]!==e)h.push(e);return h}var As=32000,il=["lounge","galon","game","bakso","jalan","arcade","kopi","dapur","game","lounge"];function al(t,e,n){let i=new Map,s=new Map,r=Math.floor(e/As),a=(o)=>n.idleStops.find((l)=>l.key===il[o%il.length]);for(let o of[...t].sort((l,c)=>l-c)){let l=r+(Math.max(o,1)-1)*3,c=a(l);for(let p=0;p<il.length;p+=1){let h=a(l+p);if((s.get(h.key)??0)<h.spots.length){c=h;break}}let d=s.get(c.key)??0;s.set(c.key,d+1),i.set(o,{stop:c,placement:c.spots[d%c.spots.length]})}return i}function Kh(t,e,n){return[Math.min(Math.max(t,n.minX),n.maxX),Math.min(Math.max(e,n.minZ),n.maxZ)]}var zv=rl(8);var Rs=new L;function an(t,e,n,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Rs.copy(e),Rs[i]=0,Rs.normalize();let c=0.5*a/(a+o),d=1-Rs.angleTo(t)/l;if(Math.sign(Rs[n])===1)return d*c;else return o/(a+o)+c+c*(1-d)}class Ur extends He{constructor(t=1,e=1,n=1,i=2,s=0.1){let r=i*2+1;s=Math.min(t/2,e/2,n/2,s);super(1,1,1,r,r,r);if(this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},r===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new L,l=new L,c=new L(t,e,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,p=this.attributes.normal.array,h=this.attributes.uv.array,f=d.length/6,_=new L,E=0.5/r;for(let m=0,u=0;m<d.length;m+=3,u+=2)switch(o.fromArray(d,m),l.copy(o),l.x-=Math.sign(l.x)*E,l.y-=Math.sign(l.y)*E,l.z-=Math.sign(l.z)*E,l.normalize(),d[m+0]=c.x*Math.sign(o.x)+l.x*s,d[m+1]=c.y*Math.sign(o.y)+l.y*s,d[m+2]=c.z*Math.sign(o.z)+l.z*s,p[m+0]=l.x,p[m+1]=l.y,p[m+2]=l.z,Math.floor(m/f)){case 0:_.set(1,0,0),h[u+0]=an(_,l,"z","y",s,n),h[u+1]=1-an(_,l,"y","z",s,e);break;case 1:_.set(-1,0,0),h[u+0]=1-an(_,l,"z","y",s,n),h[u+1]=1-an(_,l,"y","z",s,e);break;case 2:_.set(0,1,0),h[u+0]=1-an(_,l,"x","z",s,t),h[u+1]=an(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),h[u+0]=1-an(_,l,"x","z",s,t),h[u+1]=1-an(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),h[u+0]=1-an(_,l,"x","y",s,t),h[u+1]=1-an(_,l,"y","x",s,e);break;case 5:_.set(0,0,-1),h[u+0]=an(_,l,"x","y",s,t),h[u+1]=1-an(_,l,"y","x",s,e);break}}static fromJSON(t){return new Ur(t.width,t.height,t.depth,t.segments,t.radius)}}var jh=new Map;function En(t,e,n,i,s){let r=jh.get(t);if(r)return r;let a=document.createElement("canvas");a.width=e,a.height=n;let o=a.getContext("2d");if(o)i(o);let l=new gr(a);if(l.colorSpace=or,l.anisotropy=4,s)l.wrapS=cs,l.wrapT=cs,l.repeat.set(...s);return jh.set(t,l),l}function Cs(t){let e=t;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}function Qh(t){return En(`wood-${t.join("x")}`,512,512,(e)=>{let n=Cs(7),i=["#b98355","#a9744a","#c48f5f","#b07b4f","#9f6c43"],s=64;for(let r=0;r<8;r+=1){let a=r%2===0?0:-96;while(a<512){let o=128+Math.floor(n()*96);e.fillStyle=i[Math.floor(n()*i.length)],e.fillRect(a,r*64,o,64),e.strokeStyle="rgba(60,35,20,0.18)";for(let l=0;l<5;l+=1){let c=r*64+8+n()*48;e.beginPath(),e.moveTo(a+4,c),e.bezierCurveTo(a+o/3,c+3,a+2*o/3,c-3,a+o-4,c),e.stroke()}e.fillStyle="rgba(50,28,15,0.55)",e.fillRect(a,r*64,2,64),a+=o}e.fillStyle="rgba(50,28,15,0.5)",e.fillRect(0,r*64,512,2)}},t)}function tu(t){return En(`tile-${t.join("x")}`,256,256,(e)=>{e.fillStyle="#e9e4da",e.fillRect(0,0,256,256),e.fillStyle="#d6cfc2";for(let n=0;n<=256;n+=64)e.fillRect(n-1,0,2,256),e.fillRect(0,n-1,256,2)},t)}function Fr(t,e){return En(`carpet-${t}-${e.join("x")}`,128,128,(n)=>{let i=Cs(11);n.fillStyle=t,n.fillRect(0,0,128,128);for(let s=0;s<900;s+=1)n.fillStyle=`rgba(0,0,0,${i()*0.08})`,n.fillRect(i()*128,i()*128,1,1)},e)}function eu(t){return En(`grass-${t.join("x")}`,256,256,(e)=>{let n=Cs(3);e.fillStyle="#5d8f4e",e.fillRect(0,0,256,256);for(let i=0;i<2600;i+=1){let s=70+Math.floor(n()*60);e.fillStyle=`rgb(${s-25},${s+55},${s-30})`,e.fillRect(n()*256,n()*256,2,3)}},t)}function nu(t){return En(`asphalt-${t.join("x")}`,256,256,(e)=>{let n=Cs(5);e.fillStyle="#3d4044",e.fillRect(0,0,256,256);for(let i=0;i<3000;i+=1){let s=50+Math.floor(n()*40);e.fillStyle=`rgb(${s},${s},${s+4})`,e.fillRect(n()*256,n()*256,1.5,1.5)}e.fillStyle="#e8dfa0",e.fillRect(0,124,110,8),e.fillRect(146,124,110,8)},t)}function ol(t){return En(`paving-${t.join("x")}`,256,256,(e)=>{e.fillStyle="#b8b2a6",e.fillRect(0,0,256,256),e.fillStyle="#a19b8f";for(let n=0;n<256;n+=32){e.fillRect(0,n,256,2);for(let i=n/32%2===0?0:32;i<256;i+=64)e.fillRect(i,n,2,32)}},t)}function ll(t,e,n,i){return En(`sign-${t}-${e}-${i??""}`,512,160,(s)=>{if(s.fillStyle=e,s.fillRect(0,0,512,160),s.strokeStyle=n,s.lineWidth=8,s.strokeRect(10,10,492,140),s.fillStyle=n,s.textAlign="center",s.textBaseline="middle",s.font='bold 76px Georgia, "Times New Roman", serif',s.fillText(t,256,i?66:82),i)s.font="bold 30px Arial, sans-serif",s.fillText(i,256,124)})}function iu(){return En("merah-putih",96,64,(t)=>{t.fillStyle="#ce1126",t.fillRect(0,0,96,32),t.fillStyle="#ffffff",t.fillRect(0,32,96,32)})}function cl(t){return En(`screen-${t}`,128,80,(e)=>{if(e.fillStyle=t?"#15313a":"#0d1112",e.fillRect(0,0,128,80),!t)return;let n=Cs(13);for(let i=0;i<9;i+=1)e.fillStyle=["#7ee0c3","#f2c58a","#a9d4ff","#e7e7e7"][i%4],e.fillRect(8+i%3*6,8+i*7.5,30+n()*70,3)})}function su(){return En("arcade-screen",128,100,(t)=>{t.fillStyle="#0b1026",t.fillRect(0,0,128,100),["#e63946","#f4a261","#f4d35e","#2a9d8f","#3a86ff"].forEach((n,i)=>{t.fillStyle=n;for(let s=0;s<8;s+=1)t.fillRect(6+s*15,10+i*7,13,5)}),t.fillStyle="#ffffff",t.fillRect(52,88,26,4),t.fillRect(70,64,4,4)})}var ru=new Map;function Yg(t,e){let n=`${t.join(",")}:${e}`,i=ru.get(n);if(!i)i=new Ur(t[0],t[1],t[2],2,Math.min(e,...t.map((s)=>s/2-0.001))),ru.set(n,i);return i}function lu(t){let e=t.transparent??(t.opacity!==void 0&&t.opacity<1),n={color:t.color,roughness:t.roughness??0.7,metalness:t.metalness??0,emissive:t.emissive??"#000000",emissiveIntensity:t.emissive?t.emissiveIntensity??0.5:0,transparent:e,opacity:t.opacity??1,side:t.side??kn};if(t.map)n.map=t.map;return new Xt(n)}function rt(t,e,n=0.04,i,s,r=!0){let a=new Pt(Yg(e,n),lu(i));if(a.position.set(...t),s)a.rotation.set(...s);return a.castShadow=r,a.receiveShadow=!0,a}function Ot(t,e,n,i,s,r=20,a,o=!0){let l=new zi(a??e,e,n,r),c=new Pt(l,lu(i));if(c.position.set(...t),s)c.rotation.set(...s);return c.castShadow=o,c.receiveShadow=!0,c}function Zg(t,e=0,n="#2f3a44"){let i=new Ut;i.position.set(...t),i.rotation.y=e,i.add(rt([0,0.48,0],[0.52,0.09,0.5],0.04,{color:n,roughness:0.9})),i.add(rt([0,0.85,-0.23],[0.5,0.6,0.07],0.04,{color:n,roughness:0.9})),i.add(Ot([0,0.25,0],0.035,0.42,{color:"#8b9297",metalness:0.6,roughness:0.3}));for(let s=0;s<5;s+=1){let r=s/5*Math.PI*2;i.add(rt([Math.sin(r)*0.2,0.05,Math.cos(r)*0.2],[0.05,0.04,0.42],0.015,{color:"#2a2f33"},[0,r,0]))}return i}function cu(t,e,n=!0){let i=new Ut;i.position.set(...t);let s=cl(e);i.add(rt([0,0.74,0],[1.9,0.07,0.95],0.03,{color:"#d9c3a0",roughness:0.6})),i.add(rt([-0.9,0.37,0],[0.06,0.72,0.85],0.02,{color:"#e7e2d8"})),i.add(rt([0.9,0.37,0],[0.06,0.72,0.85],0.02,{color:"#e7e2d8"})),i.add(rt([0.55,0.52,0.02],[0.42,0.4,0.8],0.02,{color:"#e7e2d8"})),i.add(rt([0,1.13,0.22],[0.86,0.52,0.05],0.02,{color:"#1c2024",roughness:0.4}));let r=new Pe(0.8,0.46),a=new Xt({map:s,emissive:e?"#ffffff":"#000000",emissiveMap:s,emissiveIntensity:e?0.9:0,roughness:0.3}),o=new Pt(r,a);if(o.position.set(0,1.13,0.194),o.rotation.y=Math.PI,i.add(o),i.userData.screen=o,i.add(Ot([0,0.88,0.25],0.03,0.22,{color:"#2a2f33"})),i.add(rt([0,0.785,0.28],[0.3,0.02,0.18],0.01,{color:"#2a2f33"})),i.add(rt([0,0.79,-0.18],[0.56,0.025,0.18],0.01,{color:"#3a4046"})),i.add(rt([0.42,0.79,-0.18],[0.07,0.03,0.11],0.02,{color:"#3a4046"})),i.add(Ot([-0.65,0.84,-0.1],0.05,0.12,{color:"#f4efe6"})),i.add(Ot([-0.65,0.901,-0.1],0.043,0.005,{color:"#3b2415"})),n)i.add(Zg([0,0,-0.78]));return i}function hu(t,e){let n=t.userData.screen.material,i=cl(e);n.map=i,n.emissiveMap=i,n.emissive.set(e?"#ffffff":"#000000"),n.emissiveIntensity=e?0.9:0}function uu(t){let e=new Ut;e.position.set(...t),e.add(Ot([0,0.74,0],1.05,0.08,{color:"#7a4f33",roughness:0.45},void 0,40)),e.add(Ot([0,0.37,0],0.12,0.72,{color:"#2a2f33"})),e.add(Ot([0,0.03,0],0.5,0.05,{color:"#2a2f33"})),e.add(Ot([0.2,0.8,0.1],0.22,0.03,{color:"#f4efe6"}));for(let n=0;n<4;n+=1)e.add(rt([0.12+n%2*0.14,0.84,0.02+Math.floor(n/2)*0.14],[0.12,0.05,0.08],0.02,{color:"#c98a3c",roughness:0.9}));return e}function du(t,e=0,n="#5b6f8c"){let i=new Ut;return i.position.set(...t),i.rotation.y=e,i.add(rt([0,0.28,0],[2.4,0.36,0.9],0.1,{color:n,roughness:0.95})),i.add(rt([0,0.66,-0.36],[2.4,0.62,0.2],0.1,{color:n,roughness:0.95})),i.add(rt([-1.12,0.52,0],[0.2,0.42,0.9],0.08,{color:n,roughness:0.95})),i.add(rt([1.12,0.52,0],[0.2,0.42,0.9],0.08,{color:n,roughness:0.95})),[-0.5,0.5].forEach((s)=>{i.add(rt([s,0.5,0.05],[0.95,0.14,0.7],0.07,{color:"#6e83a2",roughness:0.95}))}),i.add(rt([-0.7,0.72,-0.18],[0.38,0.34,0.14],0.07,{color:"#e0a43a",roughness:0.95})),i}function hl(t,e=0,n="#d9784a"){let i=new Ut;return i.position.set(...t),i.rotation.y=e,i.add(rt([0,0.3,0],[0.9,0.4,0.85],0.12,{color:n,roughness:0.95})),i.add(rt([0,0.66,-0.34],[0.9,0.52,0.18],0.08,{color:n,roughness:0.95})),i}function fu(t){let e=new Ut;return e.position.set(...t),e.add(rt([0,0.36,0],[1.3,0.07,0.7],0.03,{color:"#8a5a3a",roughness:0.5})),[[-0.55,-0.27],[0.55,-0.27],[-0.55,0.27],[0.55,0.27]].forEach(([n,i])=>{e.add(Ot([n,0.17,i],0.03,0.34,{color:"#2a2f33"}))}),e.add(Ot([-0.3,0.48,0.05],0.04,0.18,{color:"#3a1f12",opacity:0.85})),e.add(Ot([0.25,0.49,0],0.12,0.2,{color:"#dfe8e6",opacity:0.55,roughness:0.1})),e.add(Ot([0.25,0.47,0],0.1,0.14,{color:"#f1d9a6"})),e}function Qi(t,e=1){let n=new Ut;return n.position.set(...t),n.scale.setScalar(e),n.add(Ot([0,0.22,0],0.2,0.44,{color:"#b0643a",roughness:0.8},void 0,20,0.26)),[[0,0.75,0,0.32],[0.14,0.95,0.05,0.22],[-0.12,0.92,-0.06,0.24],[0,1.12,0,0.18]].forEach(([s,r,a,o])=>{let l=new Pt(new Hi(o,1),new Xt({color:"#4f8a4a",roughness:0.85,flatShading:!0}));l.position.set(s,r,a),l.castShadow=!0,n.add(l)}),n}function pu(t,e=0){let n=new Ut;n.position.set(...t),n.rotation.y=e,n.add(rt([0,1,0],[1.4,2,0.4],0.02,{color:"#6b4a32"}));let i=["#b54b45","#2f6f8f","#e0a43a","#4f8a4a","#6a4d8d","#dcd6c8"];return[0.35,0.95,1.55].forEach((s,r)=>{for(let a=0;a<6;a+=1){let o=r*6+a,l=0.26+o*7%5*0.03;n.add(rt([-0.5+a*0.2,s+l/2,0.08],[0.14,l,0.26],0.01,{color:i[o%6]}))}}),n}function ul(t){let e=new Ut;e.position.set(...t),e.add(rt([0,0,0],[2,1.15,0.08],0.03,{color:"#111416",roughness:0.3}));let n=new Pt(new Pe(1.88,1.03),new Xt({color:"#1d5a6b",emissive:"#2a8aa0",emissiveIntensity:0.55,roughness:0.2}));return n.position.set(0,0,0.045),e.add(n),e}function mu(t){let e=new Ut;return e.position.set(...t),e.add(Ot([0,0,0],0.3,0.05,{color:"#f4efe6"},[Math.PI/2,0,0],28)),e.add(rt([0,0.07,0.035],[0.03,0.18,0.01],0.004,{color:"#1c2024"})),e.add(rt([0.06,0,0.035],[0.14,0.025,0.01],0.004,{color:"#1c2024"})),e}function gu(t,e=0){let n=new Ut;return n.position.set(...t),n.rotation.y=e,n.add(rt([0,0.5,0],[0.42,1,0.42],0.05,{color:"#eef0ee",roughness:0.4})),n.add(rt([0,0.72,0.19],[0.3,0.14,0.06],0.02,{color:"#c9ced0"})),n.add(Ot([-0.07,0.72,0.23],0.022,0.06,{color:"#d64545"},[Math.PI/2,0,0])),n.add(Ot([0.07,0.72,0.23],0.022,0.06,{color:"#3d7fd6"},[Math.PI/2,0,0])),n.add(rt([0,0.54,0.16],[0.28,0.02,0.14],0.01,{color:"#9aa2a6"})),n.add(Ot([0,1.33,0],0.19,0.52,{color:"#5fb4f2",opacity:0.55,roughness:0.08},void 0,24)),n.add(Ot([0,1.05,0],0.06,0.1,{color:"#5fb4f2",opacity:0.6,roughness:0.08},void 0,20,0.17)),n.add(Ot([0,1.6,0],0.17,0.03,{color:"#3d8fd6",opacity:0.7})),n.add(Ot([0,1.3,0],0.175,0.4,{color:"#8fd0ff",opacity:0.35,roughness:0.05})),n}function _u(t,e=0){let n=new Ut;return n.position.set(...t),n.rotation.y=e,n.add(rt([0,0.9,0],[0.75,1.8,0.7],0.05,{color:"#dfe3e4",roughness:0.35,metalness:0.2})),n.add(rt([0,1.3,0.36],[0.7,0.02,0.02],0.005,{color:"#9aa2a6"})),n.add(rt([0.28,1,0.37],[0.03,0.4,0.03],0.01,{color:"#9aa2a6"})),n}function xu(t,e=0){let n=new Ut;return n.position.set(...t),n.rotation.y=e,n.add(rt([0,0.45,0],[2,0.9,0.6],0.02,{color:"#f2eee6"})),n.add(rt([0,0.92,0],[2.05,0.05,0.65],0.01,{color:"#3a3f44",roughness:0.3})),n.add(Ot([-0.6,1.07,0],0.16,0.24,{color:"#f5f5f2"})),n.add(Ot([-0.6,1.2,0],0.14,0.05,{color:"#d64545"},void 0,20,0.1)),n.add(Ot([0.1,1.05,0],0.1,0.2,{color:"#dfe8e6",opacity:0.5})),n.add(Ot([0.1,1.02,0],0.085,0.12,{color:"#6b3b1e"})),n.add(Ot([0.62,1.06,0],0.12,0.22,{color:"#b9c0c4",metalness:0.7,roughness:0.25},void 0,20,0.08)),n}function yu(t,e){let n=new Ut;n.position.set(...t),n.add(Ot([0,0.1,0],0.35,0.2,{color:"#bdb6a8"})),n.add(Ot([0,2.6,0],0.04,5,{color:"#d9dde0",metalness:0.6,roughness:0.3}));let i=new Pt(new je(0.07,12,8),new Xt({color:"#d8b24a",metalness:0.7,roughness:0.3}));i.position.set(0,5.05,0),n.add(i);let s=iu(),r=new Pe(1.2,0.8,12,1).translate(0.6,0,0),a=Float32Array.from(r.attributes.position.array),o=new Pt(r,new Xt({map:s,side:$e,roughness:0.8}));return o.position.set(0.04,4.55,0),o.castShadow=!0,n.add(o),e.push((l)=>{let c=r.attributes.position;for(let d=0;d<c.count;d+=1){let p=a[d*3];c.setZ(d,Math.sin(l*3+p*4)*0.08*p)}c.needsUpdate=!0,r.computeVertexNormals()}),n}function Or(t,e){let n=new Ut;return n.position.set(...t),n.add(Ot([0,0.42,0],0.17,0.04,{color:e,roughness:0.5})),n.add(Ot([0,0.21,0],0.19,0.4,{color:e,roughness:0.5},void 0,8,0.15)),n}function au(t){let e=new Ut;return e.position.set(...t),e.add(Ot([0,0,0],0.3,0.06,{color:"#1f2326"},[0,0,Math.PI/2],20)),e.add(Ot([0,0,0],0.08,0.08,{color:"#c9ced0",metalness:0.6},[0,0,Math.PI/2])),e}function dl(t,e=0,n="#f1f1ec",i="#34393f",s="peci"){let r=new Ut;if(r.position.set(...t),r.rotation.y=e,r.add(rt([-0.11,0.35,0],[0.17,0.66,0.2],0.05,{color:i})),r.add(rt([0.11,0.35,0],[0.17,0.66,0.2],0.05,{color:i})),r.add(rt([0,0.98,0],[0.48,0.6,0.3],0.07,{color:n,roughness:0.85})),r.add(rt([-0.31,0.95,0.05],[0.12,0.52,0.14],0.04,{color:n},[-0.35,0,0])),r.add(rt([0.31,0.95,0.05],[0.12,0.52,0.14],0.04,{color:n},[-0.35,0,0])),r.add(rt([0,1.5,0],[0.4,0.4,0.37],0.08,{color:"#c98e5a",roughness:0.7})),r.add(rt([-0.09,1.52,0.186],[0.06,0.07,0.01],0.004,{color:"#17201e"},void 0,!1)),r.add(rt([0.09,1.52,0.186],[0.06,0.07,0.01],0.004,{color:"#17201e"},void 0,!1)),s==="peci")r.add(rt([0,1.76,0],[0.36,0.14,0.34],0.03,{color:"#1b1d20",roughness:0.9}));else r.add(rt([0,1.74,0],[0.42,0.12,0.4],0.06,{color:"#c0392b"})),r.add(rt([0,1.7,0.24],[0.36,0.03,0.16],0.01,{color:"#c0392b"}));return r}function vu(t,e=0,n=[],i=[]){let s=new Ut;s.position.set(...t),s.rotation.y=e;let r=ll("BAKSO","#c62828","#fff4d6","MALANG · MANTAP");s.add(rt([0,0.72,0],[1.8,0.8,0.8],0.05,{color:"#f3efe4",roughness:0.6})),s.add(rt([0,0.34,0],[1.85,0.06,0.85],0.02,{color:"#c62828"})),s.add(rt([0,1.14,0],[1.85,0.05,0.85],0.02,{color:"#c62828"})),s.add(au([-0.5,0.3,0.45])),s.add(au([-0.5,0.3,-0.45])),s.add(Ot([0.75,0.15,0],0.04,0.3,{color:"#2a2f33"})),s.add(rt([-1.15,0.95,0],[0.5,0.05,0.05],0.02,{color:"#6b4a32"},[0,0,-0.35])),s.add(rt([0.35,1.45,0],[0.9,0.55,0.62],0.02,{color:"#d8f0f4",opacity:0.35,roughness:0.05}));for(let p=0;p<6;p+=1){let h=new Pt(new je(0.07,10,8),new Xt({color:"#a98367",roughness:0.9}));h.position.set(0.1+p%3*0.22,1.28,-0.12+Math.floor(p/3)*0.22),s.add(h)}s.add(Ot([-0.45,1.36,0],0.25,0.4,{color:"#b9c0c4",metalness:0.75,roughness:0.25})),s.add(Ot([-0.45,1.58,0],0.26,0.04,{color:"#9aa2a6",metalness:0.75,roughness:0.25}));let a=new Ut;a.position.set(-0.45,0,0);let o=[];for(let p=0;p<3;p+=1){let h=new Pt(new je(0.1,10,8),new Xt({color:"#ffffff",transparent:!0,opacity:0.4,depthWrite:!1}));o.push(h),a.add(h)}s.add(a),i.push((p)=>{o.forEach((h,f)=>{let _=(p*0.5+f/3)%1;h.position.y=1.35+_*0.9,h.scale.setScalar(0.6+_),h.material.opacity=0.45*(1-_)})}),[[-0.85,-0.38],[0.85,-0.38],[-0.85,0.38],[0.85,0.38]].forEach(([p,h])=>{s.add(Ot([p,1.75,h],0.025,1.2,{color:"#6b4a32"}))}),s.add(rt([0,2.38,0],[2.1,0.08,1.1],0.03,{color:"#c62828"}));let l=new Pt(new Pe(1.7,0.53),new Xt({map:r,roughness:0.7}));l.position.set(0,2.12,0.42),s.add(l);let c=new Pt(new Pe(1.7,0.53),new Xt({map:r,roughness:0.7}));c.position.set(0,2.12,-0.42),c.rotation.y=Math.PI,s.add(c);let d=new Pt(new je(0.08,12,8),new Xt({color:"#fff2c4",emissive:"#ffcc66",emissiveIntensity:0.1}));return d.position.set(0.2,1.8,0),s.add(d),n.push((p)=>d.material.emissiveIntensity=p?2.2:0.1),s.add(Or([0.5,0,1.1],"#d64545")),s.add(Or([-0.3,0,1.2],"#3d7fd6")),s}function Xn(t,e,n=0.025,i="#1f6f5c"){let s=new L(...t),r=new L(...e),a=r.clone().sub(s),o=a.length(),l=s.add(r).multiplyScalar(0.5),c=new Xe().setFromUnitVectors(new L(0,1,0),a.clone().normalize()),d=new zi(n,n,o,8),p=new Xt({color:i,metalness:0.5,roughness:0.35}),h=new Pt(d,p);return h.position.copy(l),h.quaternion.copy(c),h.castShadow=!0,h}function ou(t){let e=new Ut;e.position.set(t,0.33,0);let n=new Pt(new Gi(0.3,0.035,8,28),new Xt({color:"#1f2326",roughness:0.8}));n.castShadow=!0,e.add(n);let i=new Pt(new Gi(0.26,0.012,6,28),new Xt({color:"#c9ced0",metalness:0.7,roughness:0.3}));e.add(i);for(let s=0;s<4;s+=1){let r=new Pt(new He(0.52,0.008,0.008),new Xt({color:"#c9ced0",metalness:0.7}));r.rotation.z=s/4*Math.PI,e.add(r)}return e}function Su(t,e=0,n=[]){let i=new Ut;i.position.set(...t),i.rotation.y=e;let s=ll("KOPI","#4a2c1d","#ffe3b3","PANAS · ES · SACHET"),r="#1f6f5c",a=["#6b3b1e","#d64545","#e2b33c","#2c2c2c","#b0703a","#e8e1d0"];i.add(ou(-0.55)),i.add(ou(0.55)),i.add(Xn([-0.55,0.33,0],[-0.15,0.36,0],0.025,r)),i.add(Xn([-0.15,0.36,0],[-0.25,0.9,0],0.025,r)),i.add(Xn([-0.25,0.85,0],[0.42,0.88,0],0.025,r)),i.add(Xn([-0.15,0.36,0],[0.42,0.88,0],0.025,r)),i.add(Xn([0.55,0.33,0],[0.45,1.05,0],0.025,r)),i.add(Xn([0.45,1.05,-0.28],[0.45,1.05,0.28],0.02,"#2a2f33")),i.add(Xn([-0.55,0.33,0],[-0.25,0.85,0],0.018,r)),i.add(rt([-0.27,0.95,0],[0.26,0.06,0.14],0.03,{color:"#2a2f33"})),i.add(Xn([-0.15,0.36,0],[-0.05,0,0.18],0.015,"#8b9297")),i.add(rt([-0.62,0.78,0],[0.62,0.05,0.42],0.01,{color:"#8b9297",metalness:0.5})),i.add(rt([-0.62,1.03,0],[0.58,0.44,0.44],0.04,{color:"#3d7fd6"}));let o=new Pt(new Pe(0.54,0.17),new Xt({map:s}));o.position.set(-0.62,1.03,0.225),i.add(o);let l=new Pt(new Pe(0.54,0.17),new Xt({map:s}));l.position.set(-0.62,1.03,-0.225),l.rotation.y=Math.PI,i.add(l),i.add(Ot([-0.76,1.42,0.08],0.08,0.34,{color:"#c62828",roughness:0.4})),i.add(Ot([-0.5,1.42,0.08],0.08,0.34,{color:"#d9dde0",metalness:0.7,roughness:0.25})),i.add(Ot([-0.63,1.38,-0.1],0.07,0.26,{color:"#f0f0ec"})),a.forEach((d,p)=>{i.add(rt([0.5,0.78,-0.22+p*0.09],[0.012,0.46,0.07],0.004,{color:d},void 0,!1))});let c=new Pt(new je(0.06,10,8),new Xt({color:"#fff2c4",emissive:"#ffcc66",emissiveIntensity:0.1}));return c.position.set(0.52,1.18,0),i.add(c),n.push((d)=>c.material.emissiveIntensity=d?2:0.1),i}function Mu(t,e=1){let n=new Ut;return n.position.set(...t),n.scale.setScalar(e),n.add(Ot([0,0.9,0],0.16,1.8,{color:"#6b4a32",roughness:0.9},void 0,20,0.12)),[[0,2.2,0,1],[0.5,1.9,0.2,0.7],[-0.45,2,-0.2,0.75],[0.1,2.7,0.1,0.7]].forEach(([s,r,a,o])=>{let l=new Pt(new Hi(o,1),new Xt({color:"#3f7a3c",roughness:0.9,flatShading:!0}));l.position.set(s,r,a),l.castShadow=!0,n.add(l)}),n}function fl(t,e=[]){let n=new Ut;n.position.set(...t),n.add(Ot([0,1.6,0],0.06,3.2,{color:"#2f3336",metalness:0.5})),n.add(rt([0.35,3.15,0],[0.8,0.06,0.06],0.02,{color:"#2f3336"}));let i=rt([0.7,3.05,0],[0.3,0.12,0.2],0.04,{color:"#f5e6b8",emissive:"#ffd98a",emissiveIntensity:0.2});return n.add(i),e.push((s)=>i.material.emissiveIntensity=s?2.5:0.2),n}function bu(t,e=0,n=[]){let i=new Ut;i.position.set(...t),i.rotation.y=e,[-0.55,0.55].forEach((r)=>{i.add(Ot([r,0.3,0],0.006,0.6,{color:"#8b9297"}))}),i.add(rt([0,0,0],[1.4,0.06,0.16],0.02,{color:"#d9dde0",metalness:0.4,roughness:0.35},void 0,!1));let s=new Pt(new Pe(1.32,0.11),new Xt({color:"#ffffff",emissive:"#f2f6ff",emissiveIntensity:0.9,side:$e}));return s.position.set(0,-0.032,0),s.rotation.x=Math.PI/2,i.add(s),n.push((r)=>s.material.emissiveIntensity=r?2.6:0.9),i}function Br(t,e=0,n=[]){let i=new Ut;i.position.set(...t),i.rotation.y=e,i.add(rt([0,0,0.13],[1.05,0.32,0.24],0.06,{color:"#f6f7f5",roughness:0.35})),i.add(rt([0,-0.03,0.255],[0.95,0.02,0.01],0.004,{color:"#dfe3e4"},void 0,!1));let s=new Pt(new He(0.9,0.012,0.08),new Xt({color:"#e3e6e6"}));s.position.set(0,-0.14,0.24),i.add(s);let r=new Pt(new li(0.012,10),new Xt({color:"#6cf08a",emissive:"#4be07a",emissiveIntensity:1.2}));return r.position.set(0.4,0.07,0.256),i.add(r),i.add(Ot([-0.46,-0.3,0.06],0.02,0.35,{color:"#e6e8e6"})),n.push((a)=>{s.rotation.x=0.5+Math.sin(a*0.6)*0.25}),i}function pl(t,e=0,n=[]){let i=new Ut;i.position.set(...t),i.rotation.y=e,i.add(rt([0,0.34,0],[0.85,0.6,0.32],0.03,{color:"#e9ebe8",roughness:0.45}));let s=new Pt(new li(0.22,24),new Xt({color:"#3a4046"}));s.position.set(-0.12,0.34,0.165),i.add(s);let r=new Ut;r.position.set(-0.12,0.34,0.17);for(let a=0;a<3;a+=1){let o=new Pt(new He(0.04,0.36,0.005),new Xt({color:"#9aa2a6"}));o.rotation.z=a/3*Math.PI*2,r.add(o)}return i.add(r),i.add(rt([0,0.02,0],[0.9,0.04,0.36],0.01,{color:"#8b9297"})),n.push((a,o)=>{r.rotation.z-=o*6}),i}function Eu(t){let e=new Ut;e.position.set(...t),e.add(rt([0,0.74,0],[2.74,0.05,1.52],0.02,{color:"#1f5f8b",roughness:0.45})),e.add(rt([0,0.768,0],[2.7,0.004,0.03],0.001,{color:"#ffffff"},void 0,!1)),e.add(rt([0,0.768,0],[0.02,0.004,1.48],0.001,{color:"#ffffff"},void 0,!1)),e.add(rt([0,0.85,0],[0.02,0.16,1.62],0.004,{color:"#f4f4f0",opacity:0.75})),[[-1.1,-0.6],[1.1,-0.6],[-1.1,0.6],[1.1,0.6]].forEach(([i,s])=>{e.add(Ot([i,0.36,s],0.035,0.72,{color:"#2a2f33"}))});let n=new Pt(new je(0.03,10,8),new Xt({color:"#ff8a1f"}));return n.position.set(0.4,0.8,0.3),e.add(n),e.add(rt([-0.9,0.78,-0.35],[0.16,0.02,0.15],0.01,{color:"#c62828"},[0,0.4,0])),e}function Tu(t,e="#c62828"){let n=new Ut;n.position.set(...t);let i=su();n.add(rt([0,0.85,0],[0.72,1.7,0.62],0.04,{color:e,roughness:0.5})),n.add(rt([0,0.95,0.32],[0.66,0.06,0.22],0.02,{color:"#1c1f24"}));let s=["#e63946","#f4d35e","#3a86ff"];[-0.15,0.05,0.2].forEach((a,o)=>{let l=new Pt(new je(0.03,8,6),new Xt({color:s[o],emissive:s[o],emissiveIntensity:0.5}));l.position.set(a,0.99,0.35),n.add(l)});let r=new Pt(new Pe(0.56,0.44),new Xt({map:i,emissiveMap:i,emissive:"#ffffff",emissiveIntensity:0.9}));return r.position.set(0,1.35,0.315),n.add(r),n.add(rt([0,1.66,0.3],[0.66,0.14,0.04],0.01,{color:"#f4d35e",emissive:"#f4d35e",emissiveIntensity:0.6})),n}function wu(t,e="#e76f51"){let n=new Ut;n.position.set(...t);let i=new Pt(new je(0.42,18,14),new Xt({color:e,roughness:0.95}));i.position.set(0,0.24,0),i.scale.set(1,0.62,1),i.castShadow=!0,i.receiveShadow=!0,n.add(i);let s=new Pt(new je(0.36,16,12),new Xt({color:e,roughness:0.95}));return s.position.set(0,0.36,-0.18),s.scale.set(1,0.9,0.55),s.castShadow=!0,s.receiveShadow=!0,n.add(s),n}function Au(t){let e=new Ut;return e.position.set(...t),e.add(rt([0,0.3,0],[0.5,0.6,0.5],0.03,{color:"#6b4a32"})),e.add(rt([0,0.63,0],[0.9,0.06,0.9],0.02,{color:"#5a3a24"})),e.add(rt([0,0.664,0],[0.78,0.01,0.78],0.004,{color:"#e8cf9c"},void 0,!1)),[[-0.36,-0.36],[0.36,-0.36],[-0.36,0.36],[0.36,0.36]].forEach(([i,s])=>{let r=new Pt(new li(0.035,12),new Xt({color:"#1c1f24"}));r.position.set(i,0.671,s),r.rotation.x=-Math.PI/2,e.add(r)}),[[0,0,"#f4f1ea"],[0.08,0.05,"#1c1f24"],[-0.07,0.06,"#f4f1ea"],[0.02,-0.09,"#1c1f24"],[-0.05,-0.05,"#c62828"]].forEach(([i,s,r])=>{e.add(Ot([i,0.676,s],0.022,0.01,{color:r}))}),e.add(Or([0,0,0.75],"#3d7fd6")),e.add(Or([0,0,-0.75],"#d64545")),e}var pn=(t)=>`<svg class="icon" aria-hidden="true"><use href="#i-${t}"></use></svg>`,Ru=["#1d293c","#b54b45","#6a4d8d","#3b2a20","#c9a24a","#2f4f3a","#8b5a2b","#11151c"],Cu=["#e9b57d","#c98e5a","#f1c9a0","#a8714a","#dca06e"],Pu=["#e6b34e","#70bdcb","#93ca67","#e76f51","#8f7ae6","#f4a3b4","#4f9c7a","#d9534f","#5a8dee","#c7a17a"],Iu=["#36475d","#374052","#344349","#4a3b2f","#2f3a44","#3d2f4a"],Jg=new Set(["Working","Reviewing","Collaborating"]),zr=(t)=>t.state==="Idle"&&t.room==="Lounge";function $g(t){let e=2166136261;for(let n=0;n<t.length;n+=1)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function Kg(t){if(t.colors)return t.colors;let e=$g(t.id);return{hair:Ru[e%Ru.length],skin:Cu[(e>>>4)%Cu.length],shirt:Pu[(e>>>8)%Pu.length],pants:Iu[(e>>>12)%Iu.length]}}function Hr(t){let e=document.createElement("span");return e.className=t,e}var Lu=new He(0.17,0.62,0.2).translate(0,-0.31,0),Du=new He(0.12,0.52,0.14).translate(0,-0.26,0);class Nu{station;layout;offline;root;body;leftLeg;rightLeg;leftArm;rightArm;label;labelEl;speechEl;nameEl;stateEl;path=[];placement;constructor(t,e,n){this.station=t,this.placement=e,this.layout=n;let i=Kg(t);this.offline=t.state==="Offline";let s=(l)=>this.offline?"#7b7f7d":l;this.root=new Ut,this.root.position.set(...e.position),this.root.rotation.y=e.facing,this.root.agentId=t.id,this.body=new Ut,this.body.agentId=t.id;let r=new Xt({color:s(i.pants),roughness:0.8});this.leftLeg=new Pt(Lu,r),this.leftLeg.position.set(-0.11,0.66,0),this.leftLeg.castShadow=!0,this.body.add(this.leftLeg),this.rightLeg=new Pt(Lu,r),this.rightLeg.position.set(0.11,0.66,0),this.rightLeg.castShadow=!0,this.body.add(this.rightLeg),this.body.add(rt([0,0.98,0],[0.48,0.58,0.3],0.07,{color:s(i.shirt),roughness:0.85}));let a=new Xt({color:s(i.shirt),roughness:0.85});this.leftArm=new Pt(Du,a),this.leftArm.position.set(-0.31,1.2,0),this.leftArm.castShadow=!0,this.body.add(this.leftArm),this.rightArm=new Pt(Du,a),this.rightArm.position.set(0.31,1.2,0),this.rightArm.castShadow=!0,this.body.add(this.rightArm),this.body.add(rt([0,1.5,0],[0.4,0.4,0.37],0.08,{color:s(i.skin),roughness:0.7})),this.body.add(rt([0,1.72,-0.02],[0.43,0.13,0.41],0.05,{color:s(i.hair),roughness:0.9})),this.body.add(rt([0,1.58,-0.19],[0.43,0.3,0.06],0.03,{color:s(i.hair),roughness:0.9})),this.body.add(rt([-0.09,1.52,0.186],[0.06,0.07,0.01],0.004,{color:"#17201e"},void 0,!1)),this.body.add(rt([0.09,1.52,0.186],[0.06,0.07,0.01],0.004,{color:"#17201e"},void 0,!1)),this.body.add(rt([0,1.4,0.186],[0.12,0.025,0.01],0.004,{color:"#9a5a44"},void 0,!1)),this.labelEl=document.createElement("button"),this.labelEl.type="button",this.labelEl.dataset.agentId=t.id,this.speechEl=Hr("speech speech-3d"),this.nameEl=Hr("pixel-station-name"),this.stateEl=Hr("badge");let o=Hr("agent-tag-row");o.append(this.nameEl,this.stateEl),this.labelEl.append(o,this.speechEl),this.label=new el(this.labelEl),this.label.center.set(0.5,1),this.label.position.set(0,2.05,0),this.body.add(this.label),this.refreshLabel(""),this.root.add(this.body)}refreshLabel(t){let e=this.station,n=Jg.has(e.state),i=n?e.currentTask||e.activity||"":t;this.labelEl.className=`agent-tag-3d state-${e.state.toLowerCase()}`,this.speechEl.className=n?"speech speech-3d":"speech speech-3d speech-idle",this.speechEl.textContent=i,this.speechEl.style.display=i?"":"none",this.nameEl.textContent=e.name,this.stateEl.className=`badge ${e.state==="Working"?"active":"inactive"}`,this.stateEl.textContent=e.state}setPlacement(t){this.placement=t;let[e,,n]=t.position,i=$h([this.root.position.x,this.root.position.z],[e,n],this.layout);this.path=i.map(([s,r])=>new L(s,0,r))}update(t,e,n){if(!n)return this.snapToPlacement();let i=this.path[0],s=!1;if(i){let p=i.clone().sub(this.root.position);p.y=0;let h=p.length();if(h<0.05)this.path.shift(),s=this.path.length>0;else{s=!0,this.root.position.add(p.normalize().multiplyScalar(Math.min(h,e*2.6)));let f=Math.atan2(p.x,p.z);this.root.rotation.y+=Math.atan2(Math.sin(f-this.root.rotation.y),Math.cos(f-this.root.rotation.y))*0.25}}if(!s)this.root.rotation.y+=Math.atan2(Math.sin(this.placement.facing-this.root.rotation.y),Math.cos(this.placement.facing-this.root.rotation.y))*0.12;let r=s?Math.sin(t*10)*0.6:0,a=!s&&this.placement.seated;this.leftLeg.rotation.x=a?-Math.PI/2.2:r,this.rightLeg.rotation.x=a?-Math.PI/2.2:-r;let o=!s&&(this.station.state==="Working"||this.station.state==="Reviewing"),l=!s&&this.station.state==="Collaborating";this.leftArm.rotation.x=s?-r:o?-1.1+Math.sin(t*14)*0.12:l?-0.4+Math.sin(t*3)*0.3:0,this.rightArm.rotation.x=s?r:o?-1.1+Math.cos(t*14)*0.12:0;let c=this.station.state==="Collaborating"&&!s?Math.abs(Math.sin(t*5))*0.03:0,d=this.station.state==="Idle"?Math.sin(t*2)*0.015:0;return this.body.position.y=(a?-0.14:0)+c+d,s}snapToPlacement(){let t=this.path.length>0;if(t)this.root.position.set(...this.placement.position),this.path=[];this.root.rotation.y=this.placement.facing;let e=this.placement.seated,n=this.station.state==="Working"||this.station.state==="Reviewing";return this.leftLeg.rotation.x=this.rightLeg.rotation.x=e?-Math.PI/2.2:0,this.leftArm.rotation.x=this.rightArm.rotation.x=n?-1.1:0,this.body.position.y=e?-0.14:0,t}dispose(){this.label.removeFromParent(),this.root.removeFromParent(),this.root.traverse((t)=>{if(t instanceof Pt)t.material.dispose()})}}class Uu{container;canvasContainer;labelsContainer;onSelectStation;scene;camera;renderer;labelRenderer;controls;timer;layout;stations=[];characters=new Map;charactersGroup;desks=[];propUpdaters=[];nightHooks=[];dirLight;hemiLight;ambLight;background=new Gt("#bfe0ef");panMode=!1;motionPaused=!1;isNight=!1;needsRender=!0;planStep=-1;resizeObserver;visibilityObserver;constructor(t,e){this.container=t,this.onSelectStation=e,this.layout=rl(8);let n=window.devicePixelRatio||1;this.renderer=new $o({antialias:n<2,powerPreference:"default"}),this.renderer.setPixelRatio(Math.min(n,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=jn,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0;let i=this.renderer.domElement;i.tabIndex=0,i.setAttribute("role","img"),i.setAttribute("aria-label","3D office view. Arrow keys pan the camera; the crew list next to it has every agent and task."),this.container.innerHTML=`
      <div class="office-3d-canvas-wrap" style="position: absolute; inset: 0;"></div>
      <div class="office-3d-labels" style="position: absolute; inset: 0; pointer-events: none; overflow: clip;"></div>
      <div class="office-3d-tools">
        <button type="button" id="btn3DMotionToggle" class="btn btn-secondary btn-sm" aria-pressed="false" title="Pause or resume animation">${pn("pause")} Pause</button>
        <button type="button" id="btn3DPanToggle" class="btn btn-secondary btn-sm" aria-pressed="false" title="Drag to move view instead of rotating">${pn("move")} Geser</button>
        <button type="button" id="btn3DResetView" class="btn btn-secondary btn-sm" title="Back to default isometric view">${pn("rotate-ccw")} Reset view</button>
      </div>
      <div class="office-3d-hint">
        ${window.matchMedia?.("(pointer: coarse)").matches?`${pn("pointer")} Putar: geser 1 jari · ${pn("move")} Geser: 2 jari · ${pn("zoom-in")} Zoom: cubit`:`${pn("mouse")} Putar: Klik kiri drag · ${pn("move")} Geser: Klik kanan / Pan · ${pn("zoom-in")} Zoom: Scroll`}
      </div>
    `,this.canvasContainer=this.container.querySelector(".office-3d-canvas-wrap"),this.labelsContainer=this.container.querySelector(".office-3d-labels"),this.canvasContainer.appendChild(i),this.labelRenderer=new nl({element:this.labelsContainer});let s=this.container.clientWidth||800,r=this.container.clientHeight||560;this.renderer.setSize(s,r),this.labelRenderer.setSize(s,r),this.scene=new ur,this.scene.background=this.background,this.scene.fog=new ms("#bfe0ef",38,75),this.camera=new Be(40,s/r,0.5,150),this.controls=new tl(this.camera,i),this.controls.enableDamping=!0,this.controls.screenSpacePanning=!1,this.controls.minDistance=5,this.controls.maxDistance=48,this.controls.minPolarAngle=0.2,this.controls.maxPolarAngle=1.32,this.controls.keyPanSpeed=25,this.controls.listenToKeyEvents(i),this.timer=new Er,this.timer.connect(document),this.hemiLight=new vr("#fff4e0","#5d7a4c",1.1),this.scene.add(this.hemiLight),this.dirLight=new Mr("#fff1d6",2.4),this.dirLight.position.set(10,16,9),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.bias=-0.0004,this.dirLight.shadow.camera.left=-16,this.dirLight.shadow.camera.right=16,this.dirLight.shadow.camera.top=16,this.dirLight.shadow.camera.bottom=-16,this.dirLight.shadow.camera.far=60,this.scene.add(this.dirLight),this.ambLight=new br("#ffffff",0.35),this.scene.add(this.ambLight),this.charactersGroup=new Ut,this.scene.add(this.charactersGroup),this.buildStaticEnvironment(),this.desks=this.layout.desks.map((o)=>{let l=cu(o,!1,!0);return this.scene.add(l),l}),this.resetCamera(),this.setupEvents();let a=window.matchMedia?.("(prefers-reduced-motion: reduce)");this.setMotionPaused(Boolean(a?.matches)),a?.addEventListener?.("change",(o)=>this.setMotionPaused(o.matches)),this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(this.container),this.visibilityObserver=new IntersectionObserver(([o])=>this.setVisible(o.isIntersecting)),this.visibilityObserver.observe(this.container)}buildStaticEnvironment(){let{building:t,gangCenterX:e,baksoCart:n,kopiBike:i}=this.layout,s=t.minX+9.5,r=Qh([4,4]),a=tu([3,5]),o=Fr("#5b7c8c",[2,2]),l=Fr("#8a4b3c",[2,2]),c=eu([14,12]),d=nu([8,1]),p=ol([14,2]),h=ol([2,5]),f=(T,g,S,z=0.8)=>{let C=new Pe(...g),F=new Xt({map:S,roughness:z}),X=new Pt(C,F);X.position.set(...T),X.rotation.x=-Math.PI/2,X.receiveShadow=!0,this.scene.add(X)};f([(t.minX+t.maxX)/2,0.005,(t.minZ+t.maxZ)/2],[t.maxX-t.minX,t.maxZ-t.minZ],r,0.55),f([8.35,0.01,1.4],[2.3,5.4],a,0.35),f([4.6,0.012,-2.9],[4.4,2.8],o,0.8),f([-5.2,0.012,2.2],[3.6,3],l,0.8),f([s/2,-0.02,2],[60-s,44],c,1),f([s/2,-0.005,7.1],[34-s,5],p,0.9),f([s/2,-0.01,12.1],[60-s,5],d,0.95),f([5.8,0,4.7],[1.8,1],p,0.9),f([e,-0.008,-0.4],[3.6,10],h,0.9);let _="#efe6d6",E="#d9cdb8",m=(T,g,S=2.6)=>{let[z,C]=T,[F,X]=g,P=Math.hypot(F-z,X-C),V=Math.atan2(X-C,F-z),K=new Ut;K.position.set((z+F)/2,0,(C+X)/2),K.rotation.y=-V,K.add(rt([0,S/2,0],[P+0.25,S,0.25],0.02,{color:_,roughness:0.9})),K.add(rt([0,S+0.02,0],[P+0.27,0.05,0.29],0.01,{color:E})),this.scene.add(K)},u=(T,g,S,z)=>{let F=2.4-z,X=Math.abs(S-g),P=rt([T,(z+2.4)/2,(g+S)/2],[0.05,F,X],0.01,{color:"#cfe8ee",opacity:0.25,roughness:0.05},void 0,!1);this.scene.add(P)};m([t.minX,t.minZ],[t.maxX,t.minZ]),m([t.minX,t.minZ],[t.minX,t.maxZ]),m([t.maxX,t.minZ],[t.maxX,Ts.fromZ],1.1),m([t.maxX,Ts.toZ],[t.maxX,t.maxZ],1.1),u(t.maxX,t.minZ,Ts.fromZ,1.1),u(t.maxX,Ts.toZ,ee.maxZ,1.1),m([Nr,t.minZ],[Nr,sl],0.9),u(Nr,t.minZ,sl,0.9),m([t.minX,t.maxZ],[4.9,t.maxZ],0.55),m([6.7,t.maxZ],[t.maxX,t.maxZ],0.55),m([-3.2,1],[-3.2,t.maxZ],0.9),this.scene.add(rt([-3.2,1.35,2.6],[0.06,0.9,3.2],0.01,{color:"#cfe8ee",opacity:0.3,roughness:0.05},void 0,!1)),this.scene.add(uu($i)),this.scene.add(pu([t.minX+0.35,0,-0.9],Math.PI/2)),this.scene.add(Qi([t.minX+0.5,0,-4.6])),this.scene.add(Qi([-0.4,0,-4.7],0.9)),[1.3,2.3,3.3].forEach((T)=>this.scene.add(Qi([0.9,0,T],0.8))),this.scene.add(mu([-3.6,2.35,t.minZ+0.14])),this.scene.add(du(qh,Math.PI)),this.scene.add(hl([2.1,0,-2.9],Math.PI/2,"#d9784a")),this.scene.add(hl([7.1,0,-2.9],-Math.PI/2,"#3d7fd6")),this.scene.add(fu(Zh)),this.scene.add(rt([ji[0],0.3,ji[2]],[1.8,0.6,0.45],0.03,{color:"#6b4a32"})),this.scene.add(ul([ji[0],1.35,t.minZ+0.17])),this.scene.add(Qi([2.1,0,-4.6])),this.scene.add(gu([t.maxX-0.45,0,-0.4],-Math.PI/2)),this.scene.add(_u([t.maxX-0.5,0,0.6],-Math.PI/2)),this.scene.add(xu([t.maxX-0.45,0,2.6],-Math.PI/2)),this.scene.add(Br([-5.3,2.3,t.minZ+0.125],0,this.propUpdaters)),this.scene.add(Br([ji[0],2.3,t.minZ+0.125],0,this.propUpdaters)),this.scene.add(Br([t.minX+0.125,2.3,2.6],Math.PI/2,this.propUpdaters)),[[-5.2,2.3,2.2],[4.6,2.4,-2.5],[8.2,2.4,1.2],[-2,2.4,-3.3],[-4.6,2.4,-3.3],[-2,2.4,-0.8],[-4.6,2.4,-0.8]].forEach((T)=>this.scene.add(bu(T,0,this.nightHooks)));let R=Fr("#3b4170",[3,3]);f([(ee.minX+ee.maxX)/2,0.006,(ee.minZ+ee.maxZ)/2],[ee.maxX-ee.minX,ee.maxZ-ee.minZ],R,0.9),m([ee.minX,ee.minZ],[ee.maxX,ee.minZ]),m([ee.maxX,ee.minZ],[ee.maxX,ee.maxZ]),m([ee.minX,ee.maxZ],[ee.maxX,ee.maxZ],0.55),this.scene.add(Eu(Yi)),Zi.forEach((T,g)=>this.scene.add(Tu(T,g===0?"#c62828":"#1d4ed8"))),this.scene.add(rt([ws[0],0.25,ws[2]+0.2],[1.8,0.5,0.4],0.03,{color:"#1f2328"})),this.scene.add(ul([ws[0],1.35,ws[2]+0.02])),Ji.forEach((T,g)=>this.scene.add(wu(T,g===0?"#e76f51":"#2a9d8f"))),this.scene.add(Au(Xh)),this.scene.add(Qi([ee.maxX-0.5,0,ee.maxZ-0.5],0.9)),this.scene.add(yu(Dr,this.propUpdaters));let v=new Ut;v.position.set(...n),v.rotation.y=Ki,v.add(vu([0,0,0],0,this.nightHooks,this.propUpdaters)),v.add(dl([-1.6,0,0],Math.PI/2,"#f1f1ec","#34393f","peci")),this.scene.add(v);let b=new Ut;b.position.set(...i),b.rotation.y=Ki,b.add(Su([0,0,0],0,this.nightHooks)),b.add(dl([-1.35,0,-0.1],Math.PI/2,"#2f6d8f","#34393f","cap")),this.scene.add(b),this.scene.add(pl([-5.3,0,t.minZ-0.45],Math.PI,this.propUpdaters)),this.scene.add(pl([ji[0]-1.6,0,t.minZ-0.45],Math.PI,this.propUpdaters)),this.scene.add(fl([-8,0,9.3],this.nightHooks)),this.scene.add(fl([4,0,9.3],this.nightHooks)),[[-12.8+s,-7.4,1.3],[13.5,-7.2,1.2],[-14.8+s,2.6,1.1],[18.6,4.8,1.3],[-10.5+s,7.5,1],[12,8,1.1],[-2,-8.5,1.2],[6,-8,1.1]].forEach(([T,g,S])=>this.scene.add(Mu([T,0,g],S)))}setupEvents(){this.container.querySelector("#btn3DMotionToggle")?.addEventListener("click",()=>this.setMotionPaused(!this.motionPaused)),this.container.querySelector("#btn3DPanToggle")?.addEventListener("click",()=>this.togglePan()),this.container.querySelector("#btn3DResetView")?.addEventListener("click",()=>this.resetCamera()),this.controls.addEventListener("change",()=>this.requestRender()),this.labelsContainer.addEventListener("click",(r)=>{let a=r.target.closest("[data-agent-id]"),o=a&&this.stations.find((l)=>l.id===a.dataset.agentId);if(o)this.onSelectStation(o)});let t=new Tr,e=new Et,n=this.renderer.domElement,i=0,s=0;n.addEventListener("pointerdown",(r)=>{i=r.clientX,s=r.clientY}),n.addEventListener("click",(r)=>{if(Math.hypot(r.clientX-i,r.clientY-s)>5)return;let a=n.getBoundingClientRect();e.x=(r.clientX-a.left)/a.width*2-1,e.y=-((r.clientY-a.top)/a.height)*2+1,t.setFromCamera(e,this.camera);for(let o of t.intersectObjects(this.charactersGroup.children,!0)){let l=o.object;while(l){let c=l.agentId&&this.stations.find((d)=>d.id===l.agentId);if(c){this.onSelectStation(c);return}l=l.parent}}})}handleResize(){let t=this.container.clientWidth,e=this.container.clientHeight;if(!t||!e)return;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.labelRenderer.setSize(t,e),this.requestRender()}setVisible(t){if(t)this.timer.reset();this.renderer.setAnimationLoop(t?this.loop:null),this.requestRender()}setMotionPaused(t){this.motionPaused=t,this.controls.enableDamping=!t;let e=this.container.querySelector("#btn3DMotionToggle");if(e)e.setAttribute("aria-pressed",String(t)),e.innerHTML=t?`${pn("play")} Play`:`${pn("pause")} Pause`;this.requestRender()}togglePan(t){this.panMode=t!==void 0?t:!this.panMode;let e=this.container.querySelector("#btn3DPanToggle");if(e)e.classList.toggle("active",this.panMode),e.setAttribute("aria-pressed",String(this.panMode));this.controls.mouseButtons.LEFT=this.panMode?Je.PAN:Je.ROTATE,this.controls.mouseButtons.RIGHT=this.panMode?Je.ROTATE:Je.PAN,this.controls.touches.ONE=this.panMode?un.PAN:un.ROTATE}resetCamera(){let{target:t,offset:e}=this.layout.camera,n=new L(...t),i=new L(...e),s=this.controls.enableDamping;this.controls.enableDamping=!1,this.controls.target.copy(n),this.camera.position.copy(n).add(i),this.camera.lookAt(n),this.controls.update(),this.controls.enableDamping=s,this.requestRender()}requestRender(){this.needsRender=!0}applyDayNight(){let t=!this.isNight;this.background.set(t?"#bfe0ef":"#1a2335"),this.scene.fog.color.set(t?"#bfe0ef":"#1a2335"),this.hemiLight.color.set(t?"#fff4e0":"#7f95bd"),this.hemiLight.groundColor.set(t?"#5d7a4c":"#1e2620"),this.hemiLight.intensity=t?1.1:0.32,this.dirLight.color.set(t?"#fff1d6":"#ff9a5a"),this.dirLight.intensity=t?2.4:0.75,this.ambLight.intensity=t?0.35:0.14,this.nightHooks.forEach((e)=>e(this.isNight)),this.renderer.shadowMap.needsUpdate=!0}applyIdlePlan(t=Date.now()){this.planStep=Math.floor(t/As);let e=al(this.stations.filter(zr).map((n)=>n.seat),t,this.layout);for(let n of this.stations){if(!zr(n))continue;let i=this.characters.get(n.id),s=e.get(n.seat);if(!i||!s)continue;i.setPlacement(s.placement),i.refreshLabel(s.placement.label??s.stop.label??"")}this.requestRender()}removeCharacter(t){this.characters.get(t)?.dispose(),this.characters.delete(t)}updateStations(t,e=!1){if(this.stations=t,e!==this.isNight)this.isNight=e,this.applyDayNight();let n=new Set(t.filter((r)=>r.room==="Workspace"&&r.roomPosition!=="meeting-area"&&r.state!=="Offline").map((r)=>r.seat));this.desks.forEach((r,a)=>hu(r,n.has(a+1)));let i=t.filter((r)=>r.roomPosition==="meeting-area").map((r)=>r.id),s=al(t.filter(zr).map((r)=>r.seat),Date.now(),this.layout);for(let r of t){let a=this.characters.get(r.id);if(a&&a.offline!==(r.state==="Offline"))this.removeCharacter(r.id);let o=zr(r)?s.get(r.seat):void 0,l=o?.placement??Jh(r,this.layout,Math.max(0,i.indexOf(r.id))),c=this.characters.get(r.id);if(!c)c=new Nu(r,l,this.layout),this.characters.set(r.id,c),this.charactersGroup.add(c.root);else c.station=r,c.setPlacement(l);c.refreshLabel(o?o.placement.label??o.stop.label??"":"")}for(let r of[...this.characters.keys()])if(!t.some((a)=>a.id===r))this.removeCharacter(r);this.planStep=Math.floor(Date.now()/As),this.renderer.shadowMap.needsUpdate=!0,this.requestRender()}loop=(t)=>{this.timer.update(t);let e=Math.min(this.timer.getDelta(),0.1),n=this.timer.getElapsed(),i=this.controls.update(),[s,r]=Kh(this.controls.target.x,this.controls.target.z,this.layout.pan);if(s!==this.controls.target.x||r!==this.controls.target.z){let o=new L(s-this.controls.target.x,0,r-this.controls.target.z);this.controls.target.add(o),this.camera.position.add(o)}if(Math.floor(Date.now()/As)!==this.planStep)this.applyIdlePlan();let a=!1;for(let o of this.characters.values())a=o.update(n,e,!this.motionPaused)||a;if(a)this.renderer.shadowMap.needsUpdate=!0;if(this.motionPaused){if(!this.needsRender&&!i&&!a)return}else for(let o of this.propUpdaters)o(n,e);this.needsRender=!1,this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera)};destroy(){this.renderer.setAnimationLoop(null),this.resizeObserver.disconnect(),this.visibilityObserver.disconnect(),this.timer.dispose(),this.controls.dispose();for(let i of[...this.characters.keys()])this.removeCharacter(i);let t=new Set,e=new Set,n=new Set;this.scene.traverse((i)=>{if(!(i instanceof Pt))return;t.add(i.geometry);for(let s of Array.isArray(i.material)?i.material:[i.material]){e.add(s);for(let r of Object.values(s))if(r instanceof Ee)n.add(r)}}),t.forEach((i)=>i.dispose()),e.forEach((i)=>i.dispose()),n.forEach((i)=>i.dispose()),this.renderer.dispose(),this.renderer.forceContextLoss(),this.container.innerHTML=""}}window.Office3D={init(t,e){window.Office3D.destroy();try{window.Office3DInstance=new Uu(t,e)}catch(n){console.error("3D office unavailable:",n),window.Office3DInstance=null,t.innerHTML='<div class="office-3d-fallback">The 3D office needs WebGL 2, which this browser or device could not start. The crew list beside it shows every agent and task.</div>'}return window.Office3DInstance},update(t,e=!1){window.Office3DInstance?.updateStations(t,e)},destroy(){window.Office3DInstance?.destroy(),window.Office3DInstance=null}};})();
