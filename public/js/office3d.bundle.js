(()=>{var nZ="186",iJ={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},U9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sZ=0,UQ=1,iZ=2;var a9=1,oZ=2,S8=3,p9=0,lJ=1,oJ=2,O9=0,W7=1,qQ=2,NQ=3,GQ=4,aZ=5;var j8=100,rZ=101,tZ=102,eZ=103,JK=104,QK=200,$K=201,ZK=202,KK=203,WK=204,YK=205,HK=206,XK=207,UK=208,qK=209,NK=210,GK=211,FK=212,DK=213,EK=214,OK=0,RK=1,MK=2,FQ=3,LK=4,VK=5,kK=6,BK=7,IK=0,zK=1,PK=2,q9=0,DQ=1,EQ=2,OQ=3,RQ=4,MQ=5,LQ=6,VQ=7;var y8=301,r9=302,o7=303,a7=304,Y7=306,H7=1000,r7=1001,CK=1002,m9=1003,AK=1004;var X7=1005;var dJ=1006,t7=1007;var t9=1008;var N9=1009,wK=1010,_K=1011,U7=1012,kQ=1013,l9=1014,S9=1015,R9=1016,BQ=1017,IQ=1018,f8=1020,TK=35902,SK=35899,jK=1021,yK=1022,M9=1023,e9=1026,J8=1027,fK=1028,zQ=1029,Q8=1030,PQ=1031;var CQ=1033,e7=33776,J6=33777,Q6=33778,$6=33779,AQ=35840,wQ=35841,_Q=35842,TQ=35843,SQ=36196,jQ=37492,yQ=37496,fQ=37488,vQ=37489,Z6=37490,bQ=37491,hQ=37808,xQ=37809,gQ=37810,pQ=37811,mQ=37812,lQ=37813,dQ=37814,uQ=37815,cQ=37816,nQ=37817,sQ=37818,iQ=37819,oQ=37820,aQ=37821,rQ=36492,tQ=36494,eQ=36495,J$=36283,Q$=36284,K6=36285,$$=36286;var Z$=0,vK=1,$8="",W6="srgb",K$="srgb-linear",W$="linear",HJ="srgb";var bK=512,hK=513,xK=514,Y6=515,gK=516,pK=517,H6=518,mK=519;var Y$="300 es",H$=2000;function gY(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function pY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function K7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function lK(){let J=K7("canvas");return J.style.display="block",J}var BZ={},_8=null;function X$(...J){let Q="THREE."+J.shift();if(_8)_8("log",Q,...J);else console.log(Q,...J)}function dK(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function T0(...J){J=dK(J);let Q="THREE."+J.shift();if(_8)_8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function y0(...J){J=dK(J);let Q="THREE."+J.shift();if(_8)_8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function o9(...J){let Q=J.join(" ");if(Q in BZ)return;BZ[Q]=!0,T0(...J)}function uK(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var cK={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class L9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var jJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],IZ=1234567,$7=Math.PI/180,T8=180/Math.PI;function v8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(jJ[J&255]+jJ[J>>8&255]+jJ[J>>16&255]+jJ[J>>24&255]+"-"+jJ[Q&255]+jJ[Q>>8&255]+"-"+jJ[Q>>16&15|64]+jJ[Q>>24&255]+"-"+jJ[$&63|128]+jJ[$>>8&255]+"-"+jJ[$>>16&255]+jJ[$>>24&255]+jJ[Z&255]+jJ[Z>>8&255]+jJ[Z>>16&255]+jJ[Z>>24&255]).toLowerCase()}function l0(J,Q,$){return Math.max(Q,Math.min($,J))}function U$(J,Q){return(J%Q+Q)%Q}function mY(J,Q,$,Z,K){return Z+(J-Q)*(K-Z)/($-Q)}function lY(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function Z7(J,Q,$){return(1-$)*J+$*Q}function dY(J,Q,$,Z){return Z7(J,Q,1-Math.exp(-$*Z))}function uY(J,Q=1){return Q-Math.abs(U$(J,Q*2)-Q)}function cY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function nY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function sY(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function iY(J,Q){return J+Math.random()*(Q-J)}function oY(J){return J*(0.5-Math.random())}function aY(J){if(J!==void 0)IZ=J;let Q=IZ+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function rY(J){return J*$7}function tY(J){return J*T8}function eY(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function JH(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function QH(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function $H(J,Q,$,Z,K){let{cos:W,sin:Y}=Math,H=W($/2),X=Y($/2),U=W((Q+Z)/2),G=Y((Q+Z)/2),D=W((Q-Z)/2),q=Y((Q-Z)/2),F=W((Z-Q)/2),R=Y((Z-Q)/2);switch(K){case"XYX":J.set(H*G,X*D,X*q,H*U);break;case"YZY":J.set(X*q,H*G,X*D,H*U);break;case"ZXZ":J.set(X*D,X*q,H*G,H*U);break;case"XZX":J.set(H*G,X*R,X*F,H*U);break;case"YXY":J.set(X*F,H*G,X*R,H*U);break;case"ZYZ":J.set(X*R,X*F,H*G,H*U);break;default:T0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+K)}}function A8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function bJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var q$={DEG2RAD:$7,RAD2DEG:T8,generateUUID:v8,clamp:l0,euclideanModulo:U$,mapLinear:mY,inverseLerp:lY,lerp:Z7,damp:dY,pingpong:uY,smoothstep:cY,smootherstep:nY,randInt:sY,randFloat:iY,randFloatSpread:oY,seededRandom:aY,degToRad:rY,radToDeg:tY,isPowerOfTwo:eY,ceilPowerOfTwo:JH,floorPowerOfTwo:QH,setQuaternionFromProperEuler:$H,normalize:bJ,denormalize:A8};class I0{static{I0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(l0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class uJ{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,Y){let H=$[Z+0],X=$[Z+1],U=$[Z+2],G=$[Z+3],D=K[W+0],q=K[W+1],F=K[W+2],R=K[W+3];if(G!==R||H!==D||X!==q||U!==F){let z=H*D+X*q+U*F+G*R;if(z<0)D=-D,q=-q,F=-F,R=-R,z=-z;let E=1-Y;if(z<0.9995){let N=Math.acos(z),C=Math.sin(N);E=Math.sin(E*N)/C,Y=Math.sin(Y*N)/C,H=H*E+D*Y,X=X*E+q*Y,U=U*E+F*Y,G=G*E+R*Y}else{H=H*E+D*Y,X=X*E+q*Y,U=U*E+F*Y,G=G*E+R*Y;let N=1/Math.sqrt(H*H+X*X+U*U+G*G);H*=N,X*=N,U*=N,G*=N}}J[Q]=H,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let Y=$[Z],H=$[Z+1],X=$[Z+2],U=$[Z+3],G=K[W],D=K[W+1],q=K[W+2],F=K[W+3];return J[Q]=Y*F+U*G+H*q-X*D,J[Q+1]=H*F+U*D+X*G-Y*q,J[Q+2]=X*F+U*q+Y*D-H*G,J[Q+3]=U*F-Y*G-H*D-X*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,Y=Math.cos,H=Math.sin,X=Y($/2),U=Y(Z/2),G=Y(K/2),D=H($/2),q=H(Z/2),F=H(K/2);switch(W){case"XYZ":this._x=D*U*G+X*q*F,this._y=X*q*G-D*U*F,this._z=X*U*F+D*q*G,this._w=X*U*G-D*q*F;break;case"YXZ":this._x=D*U*G+X*q*F,this._y=X*q*G-D*U*F,this._z=X*U*F-D*q*G,this._w=X*U*G+D*q*F;break;case"ZXY":this._x=D*U*G-X*q*F,this._y=X*q*G+D*U*F,this._z=X*U*F+D*q*G,this._w=X*U*G-D*q*F;break;case"ZYX":this._x=D*U*G-X*q*F,this._y=X*q*G+D*U*F,this._z=X*U*F-D*q*G,this._w=X*U*G+D*q*F;break;case"YZX":this._x=D*U*G+X*q*F,this._y=X*q*G+D*U*F,this._z=X*U*F-D*q*G,this._w=X*U*G-D*q*F;break;case"XZY":this._x=D*U*G-X*q*F,this._y=X*q*G-D*U*F,this._z=X*U*F+D*q*G,this._w=X*U*G+D*q*F;break;default:T0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],Y=Q[5],H=Q[9],X=Q[2],U=Q[6],G=Q[10],D=$+Y+G;if(D>0){let q=0.5/Math.sqrt(D+1);this._w=0.25/q,this._x=(U-H)*q,this._y=(K-X)*q,this._z=(W-Z)*q}else if($>Y&&$>G){let q=2*Math.sqrt(1+$-Y-G);this._w=(U-H)/q,this._x=0.25*q,this._y=(Z+W)/q,this._z=(K+X)/q}else if(Y>G){let q=2*Math.sqrt(1+Y-$-G);this._w=(K-X)/q,this._x=(Z+W)/q,this._y=0.25*q,this._z=(H+U)/q}else{let q=2*Math.sqrt(1+G-$-Y);this._w=(W-Z)/q,this._x=(K+X)/q,this._y=(H+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(l0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,Y=Q._x,H=Q._y,X=Q._z,U=Q._w;return this._x=$*U+W*Y+Z*X-K*H,this._y=Z*U+W*H+K*Y-$*X,this._z=K*U+W*X+$*H-Z*Y,this._w=W*U-$*Y-Z*H-K*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,Y=this.dot(J);if(Y<0)$=-$,Z=-Z,K=-K,W=-W,Y=-Y;let H=1-Q;if(Y<0.9995){let X=Math.acos(Y),U=Math.sin(X);H=Math.sin(H*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*H+$*Q,this._y=this._y*H+Z*Q,this._z=this._z*H+K*Q,this._w=this._w*H+W*Q,this._onChangeCallback()}else this._x=this._x*H+$*Q,this._y=this._y*H+Z*Q,this._z=this._z*H+K*Q,this._w=this._w*H+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{static{j.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(zZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(zZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,Y=J.z,H=J.w,X=2*(W*Z-Y*$),U=2*(Y*Q-K*Z),G=2*(K*$-W*Q);return this.x=Q+H*X+W*G-Y*U,this.y=$+H*U+Y*X-K*G,this.z=Z+H*G+K*U-W*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this.z=l0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this.z=l0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,Y=Q.y,H=Q.z;return this.x=Z*H-K*Y,this.y=K*W-$*H,this.z=$*Y-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return m6.copy(this).projectOnVector(J),this.sub(m6)}reflect(J){return this.sub(m6.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(l0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var m6=new j,zZ=new uJ;class v0{static{v0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,Y,H,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,Y,H,X)}set(J,Q,$,Z,K,W,Y,H,X){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=Y,U[3]=Q,U[4]=K,U[5]=H,U[6]=$,U[7]=W,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],Y=$[3],H=$[6],X=$[1],U=$[4],G=$[7],D=$[2],q=$[5],F=$[8],R=Z[0],z=Z[3],E=Z[6],N=Z[1],C=Z[4],w=Z[7],V=Z[2],I=Z[5],A=Z[8];return K[0]=W*R+Y*N+H*V,K[3]=W*z+Y*C+H*I,K[6]=W*E+Y*w+H*A,K[1]=X*R+U*N+G*V,K[4]=X*z+U*C+G*I,K[7]=X*E+U*w+G*A,K[2]=D*R+q*N+F*V,K[5]=D*z+q*C+F*I,K[8]=D*E+q*w+F*A,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],H=J[6],X=J[7],U=J[8];return Q*W*U-Q*Y*X-$*K*U+$*Y*H+Z*K*X-Z*W*H}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],H=J[6],X=J[7],U=J[8],G=U*W-Y*X,D=Y*H-U*K,q=X*K-W*H,F=Q*G+$*D+Z*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/F;return J[0]=G*R,J[1]=(Z*X-U*$)*R,J[2]=(Y*$-Z*W)*R,J[3]=D*R,J[4]=(U*Q-Z*H)*R,J[5]=(Z*K-Y*Q)*R,J[6]=q*R,J[7]=($*H-X*Q)*R,J[8]=(W*Q-$*K)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,Y){let H=Math.cos(K),X=Math.sin(K);return this.set($*H,$*X,-$*(H*W+X*Y)+W+J,-Z*X,Z*H,-Z*(-X*W+H*Y)+Y+Q,0,0,1),this}scale(J,Q){return o9("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(l6.makeScale(J,Q)),this}rotate(J){return o9("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(l6.makeRotation(-J)),this}translate(J,Q){return o9("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(l6.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var l6=new v0,PZ=new v0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),CZ=new v0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function ZH(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,Y){if(this.enabled===!1||W===Y||!W||!Y)return K;if(this.spaces[W].transfer==="srgb")K.r=_9(K.r),K.g=_9(K.g),K.b=_9(K.b);if(this.spaces[W].primaries!==this.spaces[Y].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")K.r=w8(K.r),K.g=w8(K.g),K.b=w8(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,Y){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return o9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return o9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:PZ,fromXYZ:CZ,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:PZ,fromXYZ:CZ,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var n0=ZH();function _9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function w8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var D8;class N${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(D8===void 0)D8=K7("canvas");D8.width=J.width,D8.height=J.height;let Z=D8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=D8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=K7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=_9(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(_9(Q[$]/255)*255);else Q[$]=_9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return T0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var KH=0;class q7{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:KH++}),this.uuid=v8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,Y=Z.length;W<Y;W++)if(Z[W].isDataTexture)K.push(d6(Z[W].image));else K.push(d6(Z[W]))}else K=d6(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function d6(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return N$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return T0("Texture: Unable to serialize Texture."),{}}var WH=0,u6=new j;class IJ extends L9{constructor(J=IJ.DEFAULT_IMAGE,Q=IJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,Y=1023,H=1009,X=IJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:WH++}),this.uuid=v8(),this.name="",this.source=new q7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=X,this.format=Y,this.internalFormat=null,this.type=H,this.offset=new I0(0,0),this.repeat=new I0(1,1),this.center=new I0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new v0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(u6).x}get height(){return this.source.getSize(u6).y}get depth(){return this.source.getSize(u6).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){T0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){T0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}IJ.DEFAULT_IMAGE=null;IJ.DEFAULT_MAPPING=300;IJ.DEFAULT_ANISOTROPY=1;class DJ{static{DJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,Y=0.1,H=J.elements,X=H[0],U=H[4],G=H[8],D=H[1],q=H[5],F=H[9],R=H[2],z=H[6],E=H[10];if(Math.abs(U-D)<0.01&&Math.abs(G-R)<0.01&&Math.abs(F-z)<0.01){if(Math.abs(U+D)<0.1&&Math.abs(G+R)<0.1&&Math.abs(F+z)<0.1&&Math.abs(X+q+E-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let C=(X+1)/2,w=(q+1)/2,V=(E+1)/2,I=(U+D)/4,A=(G+R)/4,P=(F+z)/4;if(C>w&&C>V)if(C<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(C),Z=I/$,K=A/$;else if(w>V)if(w<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(w),$=I/Z,K=P/Z;else if(V<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(V),$=A/K,Z=P/K;return this.set($,Z,K,Q),this}let N=Math.sqrt((z-F)*(z-F)+(G-R)*(G-R)+(D-U)*(D-U));if(Math.abs(N)<0.001)N=1;return this.x=(z-F)/N,this.y=(G-R)/N,this.z=(D-U)/N,this.w=Math.acos((X+q+E-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=l0(this.x,J.x,Q.x),this.y=l0(this.y,J.y,Q.y),this.z=l0(this.z,J.z,Q.z),this.w=l0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=l0(this.x,J,Q),this.y=l0(this.y,J,Q),this.z=l0(this.z,J,Q),this.w=l0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(l0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class G$ extends L9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new DJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new DJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new IJ(Z),W=$.count;for(let Y=0;Y<W;Y++)this.textures[Y]=K.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new q7(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aJ extends G${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class X6 extends IJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class F$ extends IJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class WJ{static{WJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,Y,H,X,U,G,D,q,F,R,z){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,Y,H,X,U,G,D,q,F,R,z)}set(J,Q,$,Z,K,W,Y,H,X,U,G,D,q,F,R,z){let E=this.elements;return E[0]=J,E[4]=Q,E[8]=$,E[12]=Z,E[1]=K,E[5]=W,E[9]=Y,E[13]=H,E[2]=X,E[6]=U,E[10]=G,E[14]=D,E[3]=q,E[7]=F,E[11]=R,E[15]=z,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new WJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/E8.setFromMatrixColumn(J,0).length(),K=1/E8.setFromMatrixColumn(J,1).length(),W=1/E8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),Y=Math.sin($),H=Math.cos(Z),X=Math.sin(Z),U=Math.cos(K),G=Math.sin(K);if(J.order==="XYZ"){let D=W*U,q=W*G,F=Y*U,R=Y*G;Q[0]=H*U,Q[4]=-H*G,Q[8]=X,Q[1]=q+F*X,Q[5]=D-R*X,Q[9]=-Y*H,Q[2]=R-D*X,Q[6]=F+q*X,Q[10]=W*H}else if(J.order==="YXZ"){let D=H*U,q=H*G,F=X*U,R=X*G;Q[0]=D+R*Y,Q[4]=F*Y-q,Q[8]=W*X,Q[1]=W*G,Q[5]=W*U,Q[9]=-Y,Q[2]=q*Y-F,Q[6]=R+D*Y,Q[10]=W*H}else if(J.order==="ZXY"){let D=H*U,q=H*G,F=X*U,R=X*G;Q[0]=D-R*Y,Q[4]=-W*G,Q[8]=F+q*Y,Q[1]=q+F*Y,Q[5]=W*U,Q[9]=R-D*Y,Q[2]=-W*X,Q[6]=Y,Q[10]=W*H}else if(J.order==="ZYX"){let D=W*U,q=W*G,F=Y*U,R=Y*G;Q[0]=H*U,Q[4]=F*X-q,Q[8]=D*X+R,Q[1]=H*G,Q[5]=R*X+D,Q[9]=q*X-F,Q[2]=-X,Q[6]=Y*H,Q[10]=W*H}else if(J.order==="YZX"){let D=W*H,q=W*X,F=Y*H,R=Y*X;Q[0]=H*U,Q[4]=R-D*G,Q[8]=F*G+q,Q[1]=G,Q[5]=W*U,Q[9]=-Y*U,Q[2]=-X*U,Q[6]=q*G+F,Q[10]=D-R*G}else if(J.order==="XZY"){let D=W*H,q=W*X,F=Y*H,R=Y*X;Q[0]=H*U,Q[4]=-G,Q[8]=X*U,Q[1]=D*G+R,Q[5]=W*U,Q[9]=q*G-F,Q[2]=F*G-q,Q[6]=Y*U,Q[10]=R*G+D}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(YH,J,HH)}lookAt(J,Q,$){let Z=this.elements;if(nJ.subVectors(J,Q),nJ.lengthSq()===0)nJ.z=1;if(nJ.normalize(),v9.crossVectors($,nJ),v9.lengthSq()===0){if(Math.abs($.z)===1)nJ.x+=0.0001;else nJ.z+=0.0001;nJ.normalize(),v9.crossVectors($,nJ)}return v9.normalize(),T7.crossVectors(nJ,v9),Z[0]=v9.x,Z[4]=T7.x,Z[8]=nJ.x,Z[1]=v9.y,Z[5]=T7.y,Z[9]=nJ.y,Z[2]=v9.z,Z[6]=T7.z,Z[10]=nJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],Y=$[4],H=$[8],X=$[12],U=$[1],G=$[5],D=$[9],q=$[13],F=$[2],R=$[6],z=$[10],E=$[14],N=$[3],C=$[7],w=$[11],V=$[15],I=Z[0],A=Z[4],P=Z[8],O=Z[12],k=Z[1],g=Z[5],_=Z[9],b=Z[13],c=Z[2],T=Z[6],d=Z[10],a=Z[14],l=Z[3],Q0=Z[7],n=Z[11],r=Z[15];return K[0]=W*I+Y*k+H*c+X*l,K[4]=W*A+Y*g+H*T+X*Q0,K[8]=W*P+Y*_+H*d+X*n,K[12]=W*O+Y*b+H*a+X*r,K[1]=U*I+G*k+D*c+q*l,K[5]=U*A+G*g+D*T+q*Q0,K[9]=U*P+G*_+D*d+q*n,K[13]=U*O+G*b+D*a+q*r,K[2]=F*I+R*k+z*c+E*l,K[6]=F*A+R*g+z*T+E*Q0,K[10]=F*P+R*_+z*d+E*n,K[14]=F*O+R*b+z*a+E*r,K[3]=N*I+C*k+w*c+V*l,K[7]=N*A+C*g+w*T+V*Q0,K[11]=N*P+C*_+w*d+V*n,K[15]=N*O+C*b+w*a+V*r,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],Y=J[5],H=J[9],X=J[13],U=J[2],G=J[6],D=J[10],q=J[14],F=J[3],R=J[7],z=J[11],E=J[15],N=H*q-X*D,C=Y*q-X*G,w=Y*D-H*G,V=W*q-X*U,I=W*D-H*U,A=W*G-Y*U;return Q*(R*N-z*C+E*w)-$*(F*N-z*V+E*I)+Z*(F*C-R*V+E*A)-K*(F*w-R*I+z*A)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],Y=J[9],H=J[2],X=J[6],U=J[10];return Q*(W*U-Y*X)-$*(K*U-Y*H)+Z*(K*X-W*H)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],H=J[6],X=J[7],U=J[8],G=J[9],D=J[10],q=J[11],F=J[12],R=J[13],z=J[14],E=J[15],N=Q*Y-$*W,C=Q*H-Z*W,w=Q*X-K*W,V=$*H-Z*Y,I=$*X-K*Y,A=Z*X-K*H,P=U*R-G*F,O=U*z-D*F,k=U*E-q*F,g=G*z-D*R,_=G*E-q*R,b=D*E-q*z,c=N*b-C*_+w*g+V*k-I*O+A*P;if(c===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/c;return J[0]=(Y*b-H*_+X*g)*T,J[1]=(Z*_-$*b-K*g)*T,J[2]=(R*A-z*I+E*V)*T,J[3]=(D*I-G*A-q*V)*T,J[4]=(H*k-W*b-X*O)*T,J[5]=(Q*b-Z*k+K*O)*T,J[6]=(z*w-F*A-E*C)*T,J[7]=(U*A-D*w+q*C)*T,J[8]=(W*_-Y*k+X*P)*T,J[9]=($*k-Q*_-K*P)*T,J[10]=(F*I-R*w+E*N)*T,J[11]=(G*w-U*I-q*N)*T,J[12]=(Y*O-W*g-H*P)*T,J[13]=(Q*g-$*O+Z*P)*T,J[14]=(R*C-F*V-z*N)*T,J[15]=(U*V-G*C+D*N)*T,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,Y=J.y,H=J.z,X=K*W,U=K*Y;return this.set(X*W+$,X*Y-Z*H,X*H+Z*Y,0,X*Y+Z*H,U*Y+$,U*H-Z*W,0,X*H-Z*Y,U*H+Z*W,K*H*H+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,Y=Q._z,H=Q._w,X=K+K,U=W+W,G=Y+Y,D=K*X,q=K*U,F=K*G,R=W*U,z=W*G,E=Y*G,N=H*X,C=H*U,w=H*G,V=$.x,I=$.y,A=$.z;return Z[0]=(1-(R+E))*V,Z[1]=(q+w)*V,Z[2]=(F-C)*V,Z[3]=0,Z[4]=(q-w)*I,Z[5]=(1-(D+E))*I,Z[6]=(z+N)*I,Z[7]=0,Z[8]=(F+C)*A,Z[9]=(z-N)*A,Z[10]=(1-(D+R))*A,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=E8.set(Z[0],Z[1],Z[2]).length(),Y=E8.set(Z[4],Z[5],Z[6]).length(),H=E8.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;W9.copy(this);let X=1/W,U=1/Y,G=1/H;return W9.elements[0]*=X,W9.elements[1]*=X,W9.elements[2]*=X,W9.elements[4]*=U,W9.elements[5]*=U,W9.elements[6]*=U,W9.elements[8]*=G,W9.elements[9]*=G,W9.elements[10]*=G,Q.setFromRotationMatrix(W9),$.x=W,$.y=Y,$.z=H,this}makePerspective(J,Q,$,Z,K,W,Y=2000,H=!1){let X=this.elements,U=2*K/(Q-J),G=2*K/($-Z),D=(Q+J)/(Q-J),q=($+Z)/($-Z),F,R;if(H)F=K/(W-K),R=W*K/(W-K);else if(Y===2000)F=-(W+K)/(W-K),R=-2*W*K/(W-K);else if(Y===2001)F=-W/(W-K),R=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return X[0]=U,X[4]=0,X[8]=D,X[12]=0,X[1]=0,X[5]=G,X[9]=q,X[13]=0,X[2]=0,X[6]=0,X[10]=F,X[14]=R,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,Y=2000,H=!1){let X=this.elements,U=2/(Q-J),G=2/($-Z),D=-(Q+J)/(Q-J),q=-($+Z)/($-Z),F,R;if(H)F=1/(W-K),R=W/(W-K);else if(Y===2000)F=-2/(W-K),R=-(W+K)/(W-K);else if(Y===2001)F=-1/(W-K),R=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return X[0]=U,X[4]=0,X[8]=0,X[12]=D,X[1]=0,X[5]=G,X[9]=0,X[13]=q,X[2]=0,X[6]=0,X[10]=F,X[14]=R,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var E8=new j,W9=new WJ,YH=new j(0,0,0),HH=new j(1,1,1),v9=new j,T7=new j,nJ=new j,AZ=new WJ,wZ=new uJ;class T9{constructor(J=0,Q=0,$=0,Z=T9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],Y=Z[8],H=Z[1],X=Z[5],U=Z[9],G=Z[2],D=Z[6],q=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(l0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-W,K);else this._x=Math.atan2(D,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-l0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,q),this._z=Math.atan2(H,X);else this._y=Math.atan2(-G,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(l0(D,-1,1)),Math.abs(D)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-W,X);else this._y=0,this._z=Math.atan2(H,K);break;case"ZYX":if(this._y=Math.asin(-l0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(D,q),this._z=Math.atan2(H,K);else this._x=0,this._z=Math.atan2(-W,X);break;case"YZX":if(this._z=Math.asin(l0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-G,K);else this._x=0,this._y=Math.atan2(Y,q);break;case"XZY":if(this._z=Math.asin(-l0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(D,X),this._y=Math.atan2(Y,K);else this._x=Math.atan2(-U,q),this._y=0;break;default:T0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return AZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(AZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return wZ.setFromEuler(this),this.setFromQuaternion(wZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}T9.DEFAULT_ORDER="XYZ";class N7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var XH=0,_Z=new j,O8=new uJ,z9=new WJ,S7=new j,t8=new j,UH=new j,qH=new uJ,TZ=new j(1,0,0),SZ=new j(0,1,0),jZ=new j(0,0,1),yZ={type:"added"},NH={type:"removed"},R8={type:"childadded",child:null},c6={type:"childremoved",child:null};class LJ extends L9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:XH++}),this.uuid=v8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=LJ.DEFAULT_UP.clone();let J=new j,Q=new T9,$=new uJ,Z=new j(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new WJ},normalMatrix:{value:new v0}}),this.matrix=new WJ,this.matrixWorld=new WJ,this.matrixAutoUpdate=LJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=LJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return O8.setFromAxisAngle(J,Q),this.quaternion.multiply(O8),this}rotateOnWorldAxis(J,Q){return O8.setFromAxisAngle(J,Q),this.quaternion.premultiply(O8),this}rotateX(J){return this.rotateOnAxis(TZ,J)}rotateY(J){return this.rotateOnAxis(SZ,J)}rotateZ(J){return this.rotateOnAxis(jZ,J)}translateOnAxis(J,Q){return _Z.copy(J).applyQuaternion(this.quaternion),this.position.add(_Z.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(TZ,J)}translateY(J){return this.translateOnAxis(SZ,J)}translateZ(J){return this.translateOnAxis(jZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(z9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)S7.copy(J);else S7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),t8.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)z9.lookAt(t8,S7,this.up);else z9.lookAt(S7,t8,this.up);if(this.quaternion.setFromRotationMatrix(z9),Z)z9.extractRotation(Z.matrixWorld),O8.setFromRotationMatrix(z9),this.quaternion.premultiply(O8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return y0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(yZ),R8.child=J,this.dispatchEvent(R8),R8.child=null;else y0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(NH),c6.child=J,this.dispatchEvent(c6),c6.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),z9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),z9.multiply(J.parent.matrixWorld);return J.applyMatrix4(z9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(yZ),R8.child=J,this.dispatchEvent(R8),R8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(t8,J,UH),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(t8,qH,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,Y=K.length;W<Y;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(Y,H){if(Y[H.uuid]===void 0)Y[H.uuid]=H.toJSON(J);return H.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let H=Y.shapes;if(Array.isArray(H))for(let X=0,U=H.length;X<U;X++){let G=H[X];K(J.shapes,G)}else K(J.shapes,H)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let H=0,X=this.material.length;H<X;H++)Y.push(K(J.materials,this.material[H]));Z.material=Y}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let H=this.animations[Y];Z.animations.push(K(J.animations,H))}}if(Q){let Y=W(J.geometries),H=W(J.materials),X=W(J.textures),U=W(J.images),G=W(J.shapes),D=W(J.skeletons),q=W(J.animations),F=W(J.nodes);if(Y.length>0)$.geometries=Y;if(H.length>0)$.materials=H;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(D.length>0)$.skeletons=D;if(q.length>0)$.animations=q;if(F.length>0)$.nodes=F}return $.object=Z,$;function W(Y){let H=[];for(let X in Y){let U=Y[X];delete U.metadata,H.push(U)}return H}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}LJ.DEFAULT_UP=new j(0,1,0);LJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;LJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class f0 extends LJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var GH={type:"move"};class G7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new f0,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new f0,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new f0,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,Y=this._targetRay,H=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){W=!0;for(let R of J.hand.values()){let z=Q.getJointPose(R,$),E=this._getHandJoint(X,R);if(z!==null)E.matrix.fromArray(z.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=z.radius;E.visible=z!==null}let U=X.joints["index-finger-tip"],G=X.joints["thumb-tip"],D=U.position.distanceTo(G.position),q=0.02,F=0.005;if(X.inputState.pinching&&D>q+F)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&D<=q-F)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(H!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(H.matrix.fromArray(K.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,K.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(K.linearVelocity);else H.hasLinearVelocity=!1;if(K.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(K.angularVelocity);else H.hasAngularVelocity=!1;if(H.eventsEnabled)H.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(Y!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(GH)}}}if(Y!==null)Y.visible=Z!==null;if(H!==null)H.visible=K!==null;if(X!==null)X.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new f0;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var nK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},b9={h:0,s:0,l:0},j7={h:0,s:0,l:0};function n6(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class p0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,n0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=n0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,n0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=n0.workingColorSpace){if(J=U$(J,1),Q=l0(Q,0,1),$=l0($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=n6(W,K,J+0.3333333333333333),this.g=n6(W,K,J),this.b=n6(W,K,J-0.3333333333333333)}return n0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)T0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],Y=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:T0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else T0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=nK[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else T0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=_9(J.r),this.g=_9(J.g),this.b=_9(J.b),this}copyLinearToSRGB(J){return this.r=w8(J.r),this.g=w8(J.g),this.b=w8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return n0.workingToColorSpace(yJ.copy(this),J),Math.round(l0(yJ.r*255,0,255))*65536+Math.round(l0(yJ.g*255,0,255))*256+Math.round(l0(yJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=n0.workingColorSpace){n0.workingToColorSpace(yJ.copy(this),Q);let{r:$,g:Z,b:K}=yJ,W=Math.max($,Z,K),Y=Math.min($,Z,K),H,X,U=(Y+W)/2;if(Y===W)H=0,X=0;else{let G=W-Y;switch(X=U<=0.5?G/(W+Y):G/(2-W-Y),W){case $:H=(Z-K)/G+(Z<K?6:0);break;case Z:H=(K-$)/G+2;break;case K:H=($-Z)/G+4;break}H/=6}return J.h=H,J.s=X,J.l=U,J}getRGB(J,Q=n0.workingColorSpace){return n0.workingToColorSpace(yJ.copy(this),Q),J.r=yJ.r,J.g=yJ.g,J.b=yJ.b,J}getStyle(J="srgb"){n0.workingToColorSpace(yJ.copy(this),J);let{r:Q,g:$,b:Z}=yJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(b9),this.setHSL(b9.h+J,b9.s+Q,b9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(b9),J.getHSL(j7);let $=Z7(b9.h,j7.h,Q),Z=Z7(b9.s,j7.s,Q),K=Z7(b9.l,j7.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var yJ=new p0;p0.NAMES=nK;class F7{constructor(J,Q=1,$=1000){this.isFog=!0,this.name="",this.color=new p0(J),this.near=Q,this.far=$}clone(){return new F7(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class U6 extends LJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new T9,this.environmentIntensity=1,this.environmentRotation=new T9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var Y9=new j,P9=new j,s6=new j,C9=new j,M8=new j,L8=new j,fZ=new j,i6=new j,o6=new j,a6=new j,r6=new DJ,t6=new DJ,e6=new DJ;class Q9{constructor(J=new j,Q=new j,$=new j){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),Y9.subVectors(J,Q),Z.cross(Y9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){Y9.subVectors(Z,Q),P9.subVectors($,Q),s6.subVectors(J,Q);let W=Y9.dot(Y9),Y=Y9.dot(P9),H=Y9.dot(s6),X=P9.dot(P9),U=P9.dot(s6),G=W*X-Y*Y;if(G===0)return K.set(0,0,0),null;let D=1/G,q=(X*H-Y*U)*D,F=(W*U-Y*H)*D;return K.set(1-q-F,F,q)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,C9)===null)return!1;return C9.x>=0&&C9.y>=0&&C9.x+C9.y<=1}static getInterpolation(J,Q,$,Z,K,W,Y,H){if(this.getBarycoord(J,Q,$,Z,C9)===null){if(H.x=0,H.y=0,"z"in H)H.z=0;if("w"in H)H.w=0;return null}return H.setScalar(0),H.addScaledVector(K,C9.x),H.addScaledVector(W,C9.y),H.addScaledVector(Y,C9.z),H}static getInterpolatedAttribute(J,Q,$,Z,K,W){return r6.setScalar(0),t6.setScalar(0),e6.setScalar(0),r6.fromBufferAttribute(J,Q),t6.fromBufferAttribute(J,$),e6.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(r6,K.x),W.addScaledVector(t6,K.y),W.addScaledVector(e6,K.z),W}static isFrontFacing(J,Q,$,Z){return Y9.subVectors($,Q),P9.subVectors(J,Q),Y9.cross(P9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return Y9.subVectors(this.c,this.b),P9.subVectors(this.a,this.b),Y9.cross(P9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return Q9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return Q9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return Q9.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return Q9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return Q9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,Y;M8.subVectors(Z,$),L8.subVectors(K,$),i6.subVectors(J,$);let H=M8.dot(i6),X=L8.dot(i6);if(H<=0&&X<=0)return Q.copy($);o6.subVectors(J,Z);let U=M8.dot(o6),G=L8.dot(o6);if(U>=0&&G<=U)return Q.copy(Z);let D=H*G-U*X;if(D<=0&&H>=0&&U<=0)return W=H/(H-U),Q.copy($).addScaledVector(M8,W);a6.subVectors(J,K);let q=M8.dot(a6),F=L8.dot(a6);if(F>=0&&q<=F)return Q.copy(K);let R=q*X-H*F;if(R<=0&&X>=0&&F<=0)return Y=X/(X-F),Q.copy($).addScaledVector(L8,Y);let z=U*F-q*G;if(z<=0&&G-U>=0&&q-F>=0)return fZ.subVectors(K,Z),Y=(G-U)/(G-U+(q-F)),Q.copy(Z).addScaledVector(fZ,Y);let E=1/(z+R+D);return W=R*E,Y=D*E,Q.copy($).addScaledVector(M8,W).addScaledVector(L8,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class Z8{constructor(J=new j(1/0,1/0,1/0),Q=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(H9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(H9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=H9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,Y=K.count;W<Y;W++){if(J.isMesh===!0)J.getVertexPosition(W,H9);else H9.fromBufferAttribute(K,W);H9.applyMatrix4(J.matrixWorld),this.expandByPoint(H9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();y7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();y7.copy($.boundingBox)}y7.applyMatrix4(J.matrixWorld),this.union(y7)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,H9),H9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(e8),f7.subVectors(this.max,e8),V8.subVectors(J.a,e8),k8.subVectors(J.b,e8),B8.subVectors(J.c,e8),h9.subVectors(k8,V8),x9.subVectors(B8,k8),c9.subVectors(V8,B8);let Q=[0,-h9.z,h9.y,0,-x9.z,x9.y,0,-c9.z,c9.y,h9.z,0,-h9.x,x9.z,0,-x9.x,c9.z,0,-c9.x,-h9.y,h9.x,0,-x9.y,x9.x,0,-c9.y,c9.x,0];if(!JQ(Q,V8,k8,B8,f7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!JQ(Q,V8,k8,B8,f7))return!1;return v7.crossVectors(h9,x9),Q=[v7.x,v7.y,v7.z],JQ(Q,V8,k8,B8,f7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,H9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(H9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return A9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),A9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),A9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),A9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),A9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),A9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),A9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),A9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(A9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var A9=[new j,new j,new j,new j,new j,new j,new j,new j],H9=new j,y7=new Z8,V8=new j,k8=new j,B8=new j,h9=new j,x9=new j,c9=new j,e8=new j,f7=new j,v7=new j,n9=new j;function JQ(J,Q,$,Z,K){for(let W=0,Y=J.length-3;W<=Y;W+=3){n9.fromArray(J,W);let H=K.x*Math.abs(n9.x)+K.y*Math.abs(n9.y)+K.z*Math.abs(n9.z),X=Q.dot(n9),U=$.dot(n9),G=Z.dot(n9);if(Math.max(-Math.max(X,U,G),Math.min(X,U,G))>H)return!1}return!0}var MJ=new j,b7=new I0,FH=0;class X9 extends L9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FH++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)b7.fromBufferAttribute(this,Q),b7.applyMatrix3(J),this.setXY(Q,b7.x,b7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)MJ.fromBufferAttribute(this,Q),MJ.applyMatrix3(J),this.setXYZ(Q,MJ.x,MJ.y,MJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)MJ.fromBufferAttribute(this,Q),MJ.applyMatrix4(J),this.setXYZ(Q,MJ.x,MJ.y,MJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)MJ.fromBufferAttribute(this,Q),MJ.applyNormalMatrix(J),this.setXYZ(Q,MJ.x,MJ.y,MJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)MJ.fromBufferAttribute(this,Q),MJ.transformDirection(J),this.setXYZ(Q,MJ.x,MJ.y,MJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=A8($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=bJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=A8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=bJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=A8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=bJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=A8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=bJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=A8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=bJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=bJ(Q,this.array),$=bJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=bJ(Q,this.array),$=bJ($,this.array),Z=bJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=bJ(Q,this.array),$=bJ($,this.array),Z=bJ(Z,this.array),K=bJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class q6 extends X9{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class N6 extends X9{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class NJ extends X9{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var DH=new Z8,J7=new j,QQ=new j;class D7{constructor(J=new j,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else DH.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;J7.subVectors(J,this.center);let Q=J7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(J7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else QQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(J7.copy(J.center).add(QQ)),this.expandByPoint(J7.copy(J.center).sub(QQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var EH=0,eJ=new WJ,$Q=new LJ,I8=new j,sJ=new Z8,Q7=new Z8,AJ=new j;class xJ extends L9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EH++}),this.uuid=v8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((gY(J))?N6:q6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new v0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return eJ.makeRotationFromQuaternion(J),this.applyMatrix4(eJ),this}rotateX(J){return eJ.makeRotationX(J),this.applyMatrix4(eJ),this}rotateY(J){return eJ.makeRotationY(J),this.applyMatrix4(eJ),this}rotateZ(J){return eJ.makeRotationZ(J),this.applyMatrix4(eJ),this}translate(J,Q,$){return eJ.makeTranslation(J,Q,$),this.applyMatrix4(eJ),this}scale(J,Q,$){return eJ.makeScale(J,Q,$),this.applyMatrix4(eJ),this}lookAt(J){return $Q.lookAt(J),$Q.updateMatrix(),this.applyMatrix4($Q.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(I8).negate(),this.translate(I8.x,I8.y,I8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new NJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)T0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Z8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){y0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(sJ.setFromBufferAttribute(K),this.morphTargetsRelative)AJ.addVectors(this.boundingBox.min,sJ.min),this.boundingBox.expandByPoint(AJ),AJ.addVectors(this.boundingBox.max,sJ.max),this.boundingBox.expandByPoint(AJ);else this.boundingBox.expandByPoint(sJ.min),this.boundingBox.expandByPoint(sJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))y0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new D7;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){y0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(J){let $=this.boundingSphere.center;if(sJ.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let Y=Q[K];if(Q7.setFromBufferAttribute(Y),this.morphTargetsRelative)AJ.addVectors(sJ.min,Q7.min),sJ.expandByPoint(AJ),AJ.addVectors(sJ.max,Q7.max),sJ.expandByPoint(AJ);else sJ.expandByPoint(Q7.min),sJ.expandByPoint(Q7.max)}sJ.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)AJ.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(AJ));if(Q)for(let K=0,W=Q.length;K<W;K++){let Y=Q[K],H=this.morphTargetsRelative;for(let X=0,U=Y.count;X<U;X++){if(AJ.fromBufferAttribute(Y,X),H)I8.fromBufferAttribute(J,X),AJ.add(I8);Z=Math.max(Z,$.distanceToSquared(AJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))y0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){y0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new X9(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let Y=[],H=[];for(let P=0;P<$.count;P++)Y[P]=new j,H[P]=new j;let X=new j,U=new j,G=new j,D=new I0,q=new I0,F=new I0,R=new j,z=new j;function E(P,O,k){X.fromBufferAttribute($,P),U.fromBufferAttribute($,O),G.fromBufferAttribute($,k),D.fromBufferAttribute(K,P),q.fromBufferAttribute(K,O),F.fromBufferAttribute(K,k),U.sub(X),G.sub(X),q.sub(D),F.sub(D);let g=1/(q.x*F.y-F.x*q.y);if(!isFinite(g))return;R.copy(U).multiplyScalar(F.y).addScaledVector(G,-q.y).multiplyScalar(g),z.copy(G).multiplyScalar(q.x).addScaledVector(U,-F.x).multiplyScalar(g),Y[P].add(R),Y[O].add(R),Y[k].add(R),H[P].add(z),H[O].add(z),H[k].add(z)}let N=this.groups;if(N.length===0)N=[{start:0,count:J.count}];for(let P=0,O=N.length;P<O;++P){let k=N[P],g=k.start,_=k.count;for(let b=g,c=g+_;b<c;b+=3)E(J.getX(b+0),J.getX(b+1),J.getX(b+2))}let C=new j,w=new j,V=new j,I=new j;function A(P){V.fromBufferAttribute(Z,P),I.copy(V);let O=Y[P];C.copy(O),C.sub(V.multiplyScalar(V.dot(O))).normalize(),w.crossVectors(I,O);let g=w.dot(H[P])<0?-1:1;W.setXYZW(P,C.x,C.y,C.z,g)}for(let P=0,O=N.length;P<O;++P){let k=N[P],g=k.start,_=k.count;for(let b=g,c=g+_;b<c;b+=3)A(J.getX(b+0)),A(J.getX(b+1)),A(J.getX(b+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new X9(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let D=0,q=$.count;D<q;D++)$.setXYZ(D,0,0,0);let Z=new j,K=new j,W=new j,Y=new j,H=new j,X=new j,U=new j,G=new j;if(J)for(let D=0,q=J.count;D<q;D+=3){let F=J.getX(D+0),R=J.getX(D+1),z=J.getX(D+2);Z.fromBufferAttribute(Q,F),K.fromBufferAttribute(Q,R),W.fromBufferAttribute(Q,z),U.subVectors(W,K),G.subVectors(Z,K),U.cross(G),Y.fromBufferAttribute($,F),H.fromBufferAttribute($,R),X.fromBufferAttribute($,z),Y.add(U),H.add(U),X.add(U),$.setXYZ(F,Y.x,Y.y,Y.z),$.setXYZ(R,H.x,H.y,H.z),$.setXYZ(z,X.x,X.y,X.z)}else for(let D=0,q=Q.count;D<q;D+=3)Z.fromBufferAttribute(Q,D+0),K.fromBufferAttribute(Q,D+1),W.fromBufferAttribute(Q,D+2),U.subVectors(W,K),G.subVectors(Z,K),U.cross(G),$.setXYZ(D+0,U.x,U.y,U.z),$.setXYZ(D+1,U.x,U.y,U.z),$.setXYZ(D+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)AJ.fromBufferAttribute(J,Q),AJ.normalize(),J.setXYZ(Q,AJ.x,AJ.y,AJ.z)}toNonIndexed(){function J(Y,H){let{array:X,itemSize:U,normalized:G}=Y,D=new X.constructor(H.length*U),q=0,F=0;for(let R=0,z=H.length;R<z;R++){if(Y.isInterleavedBufferAttribute)q=H[R]*Y.data.stride+Y.offset;else q=H[R]*U;for(let E=0;E<U;E++)D[F++]=X[q++]}return new X9(D,U,G)}if(this.index===null)return T0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new xJ,$=this.index.array,Z=this.attributes;for(let Y in Z){let H=Z[Y],X=J(H,$);Q.setAttribute(Y,X)}let K=this.morphAttributes;for(let Y in K){let H=[],X=K[Y];for(let U=0,G=X.length;U<G;U++){let D=X[U],q=J(D,$);H.push(q)}Q.morphAttributes[Y]=H}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let Y=0,H=W.length;Y<H;Y++){let X=W[Y];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let H=this.parameters;for(let X in H)if(H[X]!==void 0)J[X]=H[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let H in $){let X=$[H];J.data.attributes[H]=X.toJSON(J.data)}let Z={},K=!1;for(let H in this.morphAttributes){let X=this.morphAttributes[H],U=[];for(let G=0,D=X.length;G<D;G++){let q=X[G];U.push(q.toJSON(J.data))}if(U.length>0)Z[H]=U,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let X in Z){let U=Z[X];this.setAttribute(X,U.clone(Q))}let K=J.morphAttributes;for(let X in K){let U=[],G=K[X];for(let D=0,q=G.length;D<q;D++)U.push(G[D].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let X=0,U=W.length;X<U;X++){let G=W[X];this.addGroup(G.start,G.count,G.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let H=J.boundingSphere;if(H!==null)this.boundingSphere=H.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var ZQ=new j,OH=new j,RH=new v0;class J9{constructor(J=new j(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=ZQ.subVectors($,Q).cross(OH.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(ZQ),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||RH.getNormalMatrix(J),Z=this.coplanarPoint(ZQ).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var MH=0;class K8 extends L9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:MH++}),this.uuid=v8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new p0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){T0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){T0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((K)=>K.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let Y in K){let H=K[Y];delete H.metadata,W.push(H)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new p0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new J9().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new I0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new I0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var w9=new j,KQ=new j,h7=new j,x7=new j;class b8{constructor(J=new j,Q=new j(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,w9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=w9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return w9.copy(this.origin).addScaledVector(this.direction,Q),w9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){KQ.copy(J).add(Q).multiplyScalar(0.5),h7.copy(Q).sub(J).normalize(),x7.copy(this.origin).sub(KQ);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(h7),Y=x7.dot(this.direction),H=-x7.dot(h7),X=x7.lengthSq(),U=Math.abs(1-W*W),G,D,q,F;if(U>0)if(G=W*H-Y,D=W*Y-H,F=K*U,G>=0)if(D>=-F)if(D<=F){let R=1/U;G*=R,D*=R,q=G*(G+W*D+2*Y)+D*(W*G+D+2*H)+X}else D=K,G=Math.max(0,-(W*D+Y)),q=-G*G+D*(D+2*H)+X;else D=-K,G=Math.max(0,-(W*D+Y)),q=-G*G+D*(D+2*H)+X;else if(D<=-F)G=Math.max(0,-(-W*K+Y)),D=G>0?-K:Math.min(Math.max(-K,-H),K),q=-G*G+D*(D+2*H)+X;else if(D<=F)G=0,D=Math.min(Math.max(-K,-H),K),q=D*(D+2*H)+X;else G=Math.max(0,-(W*K+Y)),D=G>0?K:Math.min(Math.max(-K,-H),K),q=-G*G+D*(D+2*H)+X;else D=W>0?-K:K,G=Math.max(0,-(W*D+Y)),q=-G*G+D*(D+2*H)+X;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(KQ).addScaledVector(h7,D);return q}intersectSphere(J,Q){if(J.radius<0)return null;w9.subVectors(J.center,this.origin);let $=w9.dot(this.direction),Z=w9.dot(w9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),Y=$-W,H=$+W;if(H<0)return null;if(Y<0)return this.at(H,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,Y,H,X=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,D=this.origin;if(X>=0)$=(J.min.x-D.x)*X,Z=(J.max.x-D.x)*X;else $=(J.max.x-D.x)*X,Z=(J.min.x-D.x)*X;if(U>=0)K=(J.min.y-D.y)*U,W=(J.max.y-D.y)*U;else K=(J.max.y-D.y)*U,W=(J.min.y-D.y)*U;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(G>=0)Y=(J.min.z-D.z)*G,H=(J.max.z-D.z)*G;else Y=(J.max.z-D.z)*G,H=(J.min.z-D.z)*G;if($>H||Y>Z)return null;if(Y>$||$!==$)$=Y;if(H<Z||Z!==Z)Z=H;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,w9)!==null}intersectTriangle(J,Q,$,Z,K){let W=this.origin,Y=this.direction,H=Y.x,X=Y.y,U=Y.z,G=J.x-W.x,D=J.y-W.y,q=J.z-W.z,F=Q.x-W.x,R=Q.y-W.y,z=Q.z-W.z,E=$.x-W.x,N=$.y-W.y,C=$.z-W.z,w=Math.abs(H),V=Math.abs(X),I=Math.abs(U),A,P,O,k,g,_,b,c,T,d,a,l;if(w>=V&&w>=I)if(O=H,_=G,T=F,l=E,H>=0)A=X,P=U,k=D,g=q,b=R,c=z,d=N,a=C;else A=U,P=X,k=q,g=D,b=z,c=R,d=C,a=N;else if(V>=I)if(O=X,_=D,T=R,l=N,X>=0)A=U,P=H,k=q,g=G,b=z,c=F,d=C,a=E;else A=H,P=U,k=G,g=q,b=F,c=z,d=E,a=C;else if(O=U,_=q,T=z,l=C,U>=0)A=H,P=X,k=G,g=D,b=F,c=R,d=E,a=N;else A=X,P=H,k=D,g=G,b=R,c=F,d=N,a=E;if(O===0)return null;let Q0=A/O,n=P/O,r=1/O,J0=k-Q0*_,S0=g-n*_,C0=b-Q0*T,XJ=c-n*T,m0=d-Q0*l,s=a-n*l,$0=m0*XJ-s*C0,W0=J0*s-S0*m0,A0=C0*S0-XJ*J0;if(Z){if($0<0||W0<0||A0<0)return null}else if(($0<0||W0<0||A0<0)&&($0>0||W0>0||A0>0))return null;let j0=$0+W0+A0;if(j0===0)return null;let z0=r*($0*_+W0*T+A0*l);if(j0>0?z0<0:z0>0)return null;return this.at(z0/j0,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class G6 extends K8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new p0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new T9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var vZ=new WJ,s9=new b8,g7=new D7,bZ=new j,p7=new j,m7=new j,l7=new j,WQ=new j,d7=new j,hZ=new j,u7=new j;class _0 extends LJ{constructor(J=new xJ,Q=new G6){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(K&&Y){d7.set(0,0,0);for(let H=0,X=K.length;H<X;H++){let U=Y[H],G=K[H];if(U===0)continue;if(WQ.fromBufferAttribute(G,J),W)d7.addScaledVector(WQ,U);else d7.addScaledVector(WQ.sub(Q),U)}Q.add(d7)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(g7.copy($.boundingSphere),g7.applyMatrix4(K),s9.copy(J.ray).recast(J.near),g7.containsPoint(s9.origin)===!1){if(s9.intersectSphere(g7,bZ)===null)return;if(s9.origin.distanceToSquared(bZ)>(J.far-J.near)**2)return}if(vZ.copy(K).invert(),s9.copy(J.ray).applyMatrix4(vZ),$.boundingBox!==null){if(s9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,s9)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,Y=K.index,H=K.attributes.position,X=K.attributes.uv,U=K.attributes.uv1,G=K.attributes.normal,D=K.groups,q=K.drawRange;if(Y!==null)if(Array.isArray(W))for(let F=0,R=D.length;F<R;F++){let z=D[F],E=W[z.materialIndex],N=Math.max(z.start,q.start),C=Math.min(Y.count,Math.min(z.start+z.count,q.start+q.count));for(let w=N,V=C;w<V;w+=3){let I=Y.getX(w),A=Y.getX(w+1),P=Y.getX(w+2);if(Z=c7(this,E,J,$,X,U,G,I,A,P),Z)Z.faceIndex=Math.floor(w/3),Z.face.materialIndex=z.materialIndex,Q.push(Z)}}else{let F=Math.max(0,q.start),R=Math.min(Y.count,q.start+q.count);for(let z=F,E=R;z<E;z+=3){let N=Y.getX(z),C=Y.getX(z+1),w=Y.getX(z+2);if(Z=c7(this,W,J,$,X,U,G,N,C,w),Z)Z.faceIndex=Math.floor(z/3),Q.push(Z)}}else if(H!==void 0)if(Array.isArray(W))for(let F=0,R=D.length;F<R;F++){let z=D[F],E=W[z.materialIndex],N=Math.max(z.start,q.start),C=Math.min(H.count,Math.min(z.start+z.count,q.start+q.count));for(let w=N,V=C;w<V;w+=3){let I=w,A=w+1,P=w+2;if(Z=c7(this,E,J,$,X,U,G,I,A,P),Z)Z.faceIndex=Math.floor(w/3),Z.face.materialIndex=z.materialIndex,Q.push(Z)}}else{let F=Math.max(0,q.start),R=Math.min(H.count,q.start+q.count);for(let z=F,E=R;z<E;z+=3){let N=z,C=z+1,w=z+2;if(Z=c7(this,W,J,$,X,U,G,N,C,w),Z)Z.faceIndex=Math.floor(z/3),Q.push(Z)}}}}function LH(J,Q,$,Z,K,W,Y,H){let X;if(Q.side===1)X=Z.intersectTriangle(Y,W,K,!0,H);else X=Z.intersectTriangle(K,W,Y,Q.side===0,H);if(X===null)return null;u7.copy(H),u7.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(u7);if(U<$.near||U>$.far)return null;return{distance:U,point:u7.clone(),object:J}}function c7(J,Q,$,Z,K,W,Y,H,X,U){J.getVertexPosition(H,p7),J.getVertexPosition(X,m7),J.getVertexPosition(U,l7);let G=LH(J,Q,$,Z,p7,m7,l7,hZ);if(G){let D=new j;if(Q9.getBarycoord(hZ,p7,m7,l7,D),K)G.uv=Q9.getInterpolatedAttribute(K,H,X,U,D,new I0);if(W)G.uv1=Q9.getInterpolatedAttribute(W,H,X,U,D,new I0);if(Y){if(G.normal=Q9.getInterpolatedAttribute(Y,H,X,U,D,new j),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let q={a:H,b:X,c:U,normal:new j,materialIndex:0};Q9.getNormal(p7,m7,l7,q.normal),G.face=q,G.barycoord=D}return G}class D$ extends IJ{constructor(J=null,Q=1,$=1,Z,K,W,Y,H,X=1003,U=1003,G,D){super(null,W,Y,H,X,U,Z,K,G,D);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var i9=new D7,VH=new I0(0.5,0.5),n7=new j;class E7{constructor(J=new J9,Q=new J9,$=new J9,Z=new J9,K=new J9,W=new J9){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy($),Y[3].copy(Z),Y[4].copy(K),Y[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],Y=K[1],H=K[2],X=K[3],U=K[4],G=K[5],D=K[6],q=K[7],F=K[8],R=K[9],z=K[10],E=K[11],N=K[12],C=K[13],w=K[14],V=K[15];if(Z[0].setComponents(X-W,q-U,E-F,V-N).normalize(),Z[1].setComponents(X+W,q+U,E+F,V+N).normalize(),Z[2].setComponents(X+Y,q+G,E+R,V+C).normalize(),Z[3].setComponents(X-Y,q-G,E-R,V-C).normalize(),$)Z[4].setComponents(H,D,z,w).normalize(),Z[5].setComponents(X-H,q-D,E-z,V-w).normalize();else if(Z[4].setComponents(X-H,q-D,E-z,V-w).normalize(),Q===2000)Z[5].setComponents(X+H,q+D,E+z,V+w).normalize();else if(Q===2001)Z[5].setComponents(H,D,z,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();i9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();i9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(i9)}intersectsSprite(J){i9.center.set(0,0,0);let Q=VH.distanceTo(J.center);return i9.radius=0.7071067811865476+Q,i9.applyMatrix4(J.matrixWorld),this.intersectsSphere(i9)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(n7.x=Z.normal.x>0?J.max.x:J.min.x,n7.y=Z.normal.y>0?J.max.y:J.min.y,n7.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(n7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class F6 extends IJ{constructor(J=[],Q=301,$,Z,K,W,Y,H,X,U){super(J,Q,$,Z,K,W,Y,H,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class D6 extends IJ{constructor(J,Q,$,Z,K,W,Y,H,X){super(J,Q,$,Z,K,W,Y,H,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class W8 extends IJ{constructor(J,Q,$=1014,Z,K,W,Y=1003,H=1003,X,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let D={width:J,height:Q,depth:G};super(D,Z,K,W,Y,H,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new q7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class E$ extends W8{constructor(J,Q=1014,$=301,Z,K,W=1003,Y=1003,H,X=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,Z,K,W,Y,H,X);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class E6 extends IJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class gJ extends xJ{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let Y=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let H=[],X=[],U=[],G=[],D=0,q=0;F("z","y","x",-1,-1,$,Q,J,W,K,0),F("z","y","x",1,-1,$,Q,-J,W,K,1),F("x","z","y",1,1,J,$,Q,Z,W,2),F("x","z","y",1,-1,J,$,-Q,Z,W,3),F("x","y","z",1,-1,J,Q,$,Z,K,4),F("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(H),this.setAttribute("position",new NJ(X,3)),this.setAttribute("normal",new NJ(U,3)),this.setAttribute("uv",new NJ(G,2));function F(R,z,E,N,C,w,V,I,A,P,O){let k=w/A,g=V/P,_=w/2,b=V/2,c=I/2,T=A+1,d=P+1,a=0,l=0,Q0=new j;for(let n=0;n<d;n++){let r=n*g-b;for(let J0=0;J0<T;J0++){let S0=J0*k-_;Q0[R]=S0*N,Q0[z]=r*C,Q0[E]=c,X.push(Q0.x,Q0.y,Q0.z),Q0[R]=0,Q0[z]=0,Q0[E]=I>0?1:-1,U.push(Q0.x,Q0.y,Q0.z),G.push(J0/A),G.push(1-n/P),a+=1}}for(let n=0;n<P;n++)for(let r=0;r<A;r++){let J0=D+r+T*n,S0=D+r+T*(n+1),C0=D+(r+1)+T*(n+1),XJ=D+(r+1)+T*n;H.push(J0,S0,XJ),H.push(S0,C0,XJ),l+=6}Y.addGroup(q,l,O),q+=l,D+=a}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new gJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class Y8 extends xJ{constructor(J=1,Q=32,$=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:Z},Q=Math.max(3,Q);let K=[],W=[],Y=[],H=[],X=new j,U=new I0;W.push(0,0,0),Y.push(0,0,1),H.push(0.5,0.5);for(let G=0,D=3;G<=Q;G++,D+=3){let q=$+G/Q*Z;X.x=J*Math.cos(q),X.y=J*Math.sin(q),W.push(X.x,X.y,X.z),Y.push(0,0,1),U.x=(W[D]/J+1)/2,U.y=(W[D+1]/J+1)/2,H.push(U.x,U.y)}for(let G=1;G<=Q;G++)K.push(G,G+1,0);this.setIndex(K),this.setAttribute("position",new NJ(W,3)),this.setAttribute("normal",new NJ(Y,3)),this.setAttribute("uv",new NJ(H,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Y8(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class h8 extends xJ{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,Y=0,H=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:Y,thetaLength:H};let X=this;Z=Math.floor(Z),K=Math.floor(K);let U=[],G=[],D=[],q=[],F=0,R=[],z=$/2,E=0;if(N(),W===!1){if(J>0)C(!0);if(Q>0)C(!1)}this.setIndex(U),this.setAttribute("position",new NJ(G,3)),this.setAttribute("normal",new NJ(D,3)),this.setAttribute("uv",new NJ(q,2));function N(){let w=new j,V=new j,I=0,A=(Q-J)/$;for(let P=0;P<=K;P++){let O=[],k=P/K,g=k*(Q-J)+J;for(let _=0;_<=Z;_++){let b=_/Z,c=b*H+Y,T=Math.sin(c),d=Math.cos(c);V.x=g*T,V.y=-k*$+z,V.z=g*d,G.push(V.x,V.y,V.z),w.set(T,A,d).normalize(),D.push(w.x,w.y,w.z),q.push(b,1-k),O.push(F++)}R.push(O)}for(let P=0;P<Z;P++)for(let O=0;O<K;O++){let k=R[O][P],g=R[O+1][P],_=R[O+1][P+1],b=R[O][P+1];if(J>0||O!==0)U.push(k,g,b),I+=3;if(Q>0||O!==K-1)U.push(g,_,b),I+=3}X.addGroup(E,I,0),E+=I}function C(w){let V=F,I=new I0,A=new j,P=0,O=w===!0?J:Q,k=w===!0?1:-1;for(let _=1;_<=Z;_++)G.push(0,z*k,0),D.push(0,k,0),q.push(0.5,0.5),F++;let g=F;for(let _=0;_<=Z;_++){let c=_/Z*H+Y,T=Math.cos(c),d=Math.sin(c);A.x=O*d,A.y=z*k,A.z=O*T,G.push(A.x,A.y,A.z),D.push(0,k,0),I.x=T*0.5+0.5,I.y=d*0.5*k+0.5,q.push(I.x,I.y),F++}for(let _=0;_<Z;_++){let b=V+_,c=g+_;if(w===!0)U.push(c,c+1,b);else U.push(c+1,c,b);P+=3}X.addGroup(E,P,w===!0?1:2),E+=P}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new h8(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class O6 extends xJ{constructor(J=[],Q=[],$=1,Z=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:Z};let K=[],W=[];if(Y(Z),X($),U(),this.setAttribute("position",new NJ(K,3)),this.setAttribute("normal",new NJ(K.slice(),3)),this.setAttribute("uv",new NJ(W,2)),Z===0)this.computeVertexNormals();else this.normalizeNormals();function Y(N){let C=new j,w=new j,V=new j;for(let I=0;I<Q.length;I+=3)q(Q[I+0],C),q(Q[I+1],w),q(Q[I+2],V),H(C,w,V,N)}function H(N,C,w,V){let I=V+1,A=[];for(let P=0;P<=I;P++){A[P]=[];let O=N.clone().lerp(w,P/I),k=C.clone().lerp(w,P/I),g=I-P;for(let _=0;_<=g;_++)if(_===0&&P===I)A[P][_]=O;else A[P][_]=O.clone().lerp(k,_/g)}for(let P=0;P<I;P++)for(let O=0;O<2*(I-P)-1;O++){let k=Math.floor(O/2);if(O%2===0)D(A[P][k+1]),D(A[P+1][k]),D(A[P][k]);else D(A[P][k+1]),D(A[P+1][k+1]),D(A[P+1][k])}}function X(N){let C=new j;for(let w=0;w<K.length;w+=3)C.x=K[w+0],C.y=K[w+1],C.z=K[w+2],C.normalize().multiplyScalar(N),K[w+0]=C.x,K[w+1]=C.y,K[w+2]=C.z}function U(){let N=new j;for(let C=0;C<K.length;C+=3){N.x=K[C+0],N.y=K[C+1],N.z=K[C+2];let w=z(N)/2/Math.PI+0.5,V=E(N)/Math.PI+0.5;W.push(w,1-V)}F(),G()}function G(){for(let N=0;N<W.length;N+=6){let C=W[N+0],w=W[N+2],V=W[N+4],I=Math.max(C,w,V),A=Math.min(C,w,V);if(I>0.9&&A<0.1){if(C<0.2)W[N+0]+=1;if(w<0.2)W[N+2]+=1;if(V<0.2)W[N+4]+=1}}}function D(N){K.push(N.x,N.y,N.z)}function q(N,C){let w=N*3;C.x=J[w+0],C.y=J[w+1],C.z=J[w+2]}function F(){let N=new j,C=new j,w=new j,V=new j,I=new I0,A=new I0,P=new I0;for(let O=0,k=0;O<K.length;O+=9,k+=6){N.set(K[O+0],K[O+1],K[O+2]),C.set(K[O+3],K[O+4],K[O+5]),w.set(K[O+6],K[O+7],K[O+8]),I.set(W[k+0],W[k+1]),A.set(W[k+2],W[k+3]),P.set(W[k+4],W[k+5]),V.copy(N).add(C).add(w).divideScalar(3);let g=z(V);R(I,k+0,N,g),R(A,k+2,C,g),R(P,k+4,w,g)}}function R(N,C,w,V){if(V<0&&N.x===1)W[C]=N.x-1;if(w.x===0&&w.z===0)W[C]=V/2/Math.PI+0.5}function z(N){return Math.atan2(N.z,-N.x)}function E(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new O6(J.vertices,J.indices,J.radius,J.detail)}}class x8 extends O6{constructor(J=1,Q=0){let $=(1+Math.sqrt(5))/2,Z=[-1,$,0,1,$,0,-1,-$,0,1,-$,0,0,-1,$,0,1,$,0,-1,-$,0,1,-$,$,0,-1,$,0,1,-$,0,-1,-$,0,1],K=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(Z,K,J,Q);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new x8(J.radius,J.detail)}}class _J extends xJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,Y=Math.floor($),H=Math.floor(Z),X=Y+1,U=H+1,G=J/Y,D=Q/H,q=[],F=[],R=[],z=[];for(let E=0;E<U;E++){let N=E*D-W;for(let C=0;C<X;C++){let w=C*G-K;F.push(w,-N,0),R.push(0,0,1),z.push(C/Y),z.push(1-E/H)}}for(let E=0;E<H;E++)for(let N=0;N<Y;N++){let C=N+X*E,w=N+X*(E+1),V=N+1+X*(E+1),I=N+1+X*E;q.push(C,w,I),q.push(w,V,I)}this.setIndex(q),this.setAttribute("position",new NJ(F,3)),this.setAttribute("normal",new NJ(R,3)),this.setAttribute("uv",new NJ(z,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new _J(J.width,J.height,J.widthSegments,J.heightSegments)}}class rJ extends xJ{constructor(J=1,Q=32,$=16,Z=0,K=Math.PI*2,W=0,Y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:Z,phiLength:K,thetaStart:W,thetaLength:Y},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let H=Math.min(W+Y,Math.PI),X=0,U=[],G=new j,D=new j,q=[],F=[],R=[],z=[];for(let E=0;E<=$;E++){let N=[],C=E/$,w=W+C*Y,V=J*Math.cos(w),I=Math.sqrt(J*J-V*V),A=0;if(E===0&&W===0)A=0.5/Q;else if(E===$&&H===Math.PI)A=-0.5/Q;for(let P=0;P<=Q;P++){let O=P/Q,k=Z+O*K;G.x=-I*Math.cos(k),G.y=V,G.z=I*Math.sin(k),F.push(G.x,G.y,G.z),D.copy(G).normalize(),R.push(D.x,D.y,D.z),z.push(O+A,1-C),N.push(X++)}U.push(N)}for(let E=0;E<$;E++)for(let N=0;N<Q;N++){let C=U[E][N+1],w=U[E][N],V=U[E+1][N],I=U[E+1][N+1];if(E!==0||W>0)q.push(C,w,I);if(E!==$-1||H<Math.PI)q.push(w,V,I)}this.setIndex(q),this.setAttribute("position",new NJ(F,3)),this.setAttribute("normal",new NJ(R,3)),this.setAttribute("uv",new NJ(z,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new rJ(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class g8 extends xJ{constructor(J=1,Q=0.4,$=12,Z=48,K=Math.PI*2,W=0,Y=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:Z,arc:K,thetaStart:W,thetaLength:Y},$=Math.floor($),Z=Math.floor(Z);let H=[],X=[],U=[],G=[],D=new j,q=new j,F=new j;for(let R=0;R<=$;R++){let z=W+R/$*Y;for(let E=0;E<=Z;E++){let N=E/Z*K;q.x=(J+Q*Math.cos(z))*Math.cos(N),q.y=(J+Q*Math.cos(z))*Math.sin(N),q.z=Q*Math.sin(z),X.push(q.x,q.y,q.z),D.x=J*Math.cos(N),D.y=J*Math.sin(N),F.subVectors(q,D).normalize(),U.push(F.x,F.y,F.z),G.push(E/Z),G.push(R/$)}}for(let R=1;R<=$;R++)for(let z=1;z<=Z;z++){let E=(Z+1)*R+z-1,N=(Z+1)*(R-1)+z-1,C=(Z+1)*(R-1)+z,w=(Z+1)*R+z;H.push(E,N,w),H.push(N,C,w)}this.setIndex(H),this.setAttribute("position",new NJ(X,3)),this.setAttribute("normal",new NJ(U,3)),this.setAttribute("uv",new NJ(G,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new g8(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}function H8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(xZ(K))if(K.isRenderTargetTexture)T0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(xZ(K[0])){let W=[];for(let Y=0,H=K.length;Y<H;Y++)W[Y]=K[Y].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function fJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=H8(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function xZ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function kH(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function O$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return n0.workingColorSpace}var sK={clone:H8,merge:fJ},BH=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IH=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $9 extends K8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BH,this.fragmentShader=IH,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=H8(J.uniforms),this.uniformsGroups=kH(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new p0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new I0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new j().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new DJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new v0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new WJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class R$ extends $9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class u0 extends K8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new p0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new p0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new T9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class M$ extends K8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class L$ extends K8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function z8(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function YQ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class X8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let W;Q:{Z:if(!(J<Z)){for(let Y=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===Y)break;if(K=Z,Z=Q[++$],J<Z)break J}W=Q.length;break Q}if(!(J>=K)){let Y=Q[1];if(J<Y)$=2,K=Y;for(let H=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===H)break;if(Z=K,K=Q[--$-1],J>=K)break J}W=$,$=0;break Q}break $}while($<W){let Y=$+W>>>1;if(J<Q[Y])W=Y;else $=Y+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class V$ extends X8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,Y=Z[K],H=Z[W];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,Y=2*Q-$;break;case 2402:K=Z.length-2,Y=Q+Z[K]-Z[K+1];break;default:K=J,Y=$}if(H===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,H=2*$-Q;break;case 2402:W=1,H=$+Z[1]-Z[0];break;default:W=J-1,H=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-Y),this._weightNext=X/(H-$),this._offsetPrev=K*U,this._offsetNext=W*U}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,H=J*Y,X=H-Y,U=this._offsetPrev,G=this._offsetNext,D=this._weightPrev,q=this._weightNext,F=($-Q)/(Z-Q),R=F*F,z=R*F,E=-D*z+2*D*R-D*F,N=(1+D)*z+(-1.5-2*D)*R+(-0.5+D)*F+1,C=(-1-q)*z+(1.5+q)*R+0.5*F,w=q*z-q*R;for(let V=0;V!==Y;++V)K[V]=E*W[U+V]+N*W[X+V]+C*W[H+V]+w*W[G+V];return K}}class k$ extends X8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,H=J*Y,X=H-Y,U=($-Q)/(Z-Q),G=1-U;for(let D=0;D!==Y;++D)K[D]=W[X+D]*G+W[H+D]*U;return K}}class B$ extends X8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class I$ extends X8{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,H=J*Y,X=H-Y,U=this.inTangents,G=this.outTangents;if(!U||!G){let F=($-Q)/(Z-Q),R=1-F;for(let z=0;z!==Y;++z)K[z]=W[X+z]*R+W[H+z]*F;return K}let D=Y*2,q=J-1;for(let F=0;F!==Y;++F){let R=W[X+F],z=W[H+F],E=q*D+F*2,N=G[E],C=G[E+1],w=J*D+F*2,V=U[w],I=U[w+1],A=PH($,Q,N,V,Z);K[F]=iK(A,R,C,I,z)}return K}}function iK(J,Q,$,Z,K){let W=1-J;return W*W*W*Q+3*W*W*J*$+3*W*J*J*Z+J*J*J*K}function zH(J,Q,$,Z,K){let W=1-J;return 3*W*W*($-Q)+6*W*J*(Z-$)+3*J*J*(K-Z)}function PH(J,Q,$,Z,K){let W=(J-Q)/(K-Q);for(let Y=0;Y<8;Y++){let H=iK(W,Q,$,Z,K)-J;if(Math.abs(H)<0.0000000001)break;let X=zH(W,Q,$,Z,K);if(Math.abs(X)<0.0000000001)break;W=Math.max(0,Math.min(1,W-H/X))}return W}class Z9{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=z8(Q,this.TimeBufferType),this.values=z8($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:z8(J.times,Array),values:z8(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z;if(YQ(J.settings))$.settings={inTangents:z8(J.settings.inTangents,Array),outTangents:z8(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new B$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new k$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new V$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new I$(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return T0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J;if(YQ(this.settings))gZ(this.settings.inTangents,J),gZ(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let Y=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*Y,W*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)y0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)y0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let Y=0;Y!==K;Y++){let H=$[Y];if(typeof H==="number"&&isNaN(H)){y0("KeyframeTrack: Time is not a valid number.",this,Y,H),J=!1;break}if(W!==null&&W>H){y0("KeyframeTrack: Out of order keys.",this,Y,H,W),J=!1;break}W=H}if(Z!==void 0){if(pY(Z))for(let Y=0,H=Z.length;Y!==H;++Y){let X=Z[Y];if(isNaN(X)){y0("KeyframeTrack: Value is not a valid number.",this,Y,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let Y=1;Y<K;++Y){let H=!1,X=J[Y],U=J[Y+1];if(X!==U&&(Y!==1||X!==J[0]))if(!Z){let G=Y*$,D=G-$,q=G+$;for(let F=0;F!==$;++F){let R=Q[G+F];if(R!==Q[D+F]||R!==Q[q+F]){H=!0;break}}}else H=!0;if(H){if(Y!==W){J[W]=J[Y];let G=Y*$,D=W*$;for(let q=0;q!==$;++q)Q[D+q]=Q[G+q]}++W}}if(K>0){J[W]=J[K];for(let Y=K*$,H=W*$,X=0;X!==$;++X)Q[H+X]=Q[Y+X];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);if(Z.createInterpolant=this.createInterpolant,YQ(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function gZ(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]*=Q}Z9.prototype.ValueTypeName="";Z9.prototype.TimeBufferType=Float32Array;Z9.prototype.ValueBufferType=Float32Array;Z9.prototype.DefaultInterpolation=2301;class U8 extends Z9{constructor(J,Q,$){super(J,Q,$)}}U8.prototype.ValueTypeName="bool";U8.prototype.ValueBufferType=Array;U8.prototype.DefaultInterpolation=2300;U8.prototype.InterpolantFactoryMethodLinear=void 0;U8.prototype.InterpolantFactoryMethodSmooth=void 0;class z$ extends Z9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}z$.prototype.ValueTypeName="color";class P$ extends Z9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}P$.prototype.ValueTypeName="number";class C$ extends X8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,H=($-Q)/(Z-Q),X=J*Y;for(let U=X+Y;X!==U;X+=4)uJ.slerpFlat(K,0,W,X-Y,W,X,H);return K}}class R6 extends Z9{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new C$(this.times,this.values,this.getValueSize(),J)}}R6.prototype.ValueTypeName="quaternion";R6.prototype.InterpolantFactoryMethodSmooth=void 0;class q8 extends Z9{constructor(J,Q,$){super(J,Q,$)}}q8.prototype.ValueTypeName="string";q8.prototype.ValueBufferType=Array;q8.prototype.DefaultInterpolation=2300;q8.prototype.InterpolantFactoryMethodLinear=void 0;q8.prototype.InterpolantFactoryMethodSmooth=void 0;class A$ extends Z9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}A$.prototype.ValueTypeName="vector";class w${constructor(J,Q,$){let Z=this,K=!1,W=0,Y=0,H=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(Y++,K===!1){if(Z.onStart!==void 0)Z.onStart(U,W,Y)}K=!0},this.itemEnd=function(U){if(W++,Z.onProgress!==void 0)Z.onProgress(U,W,Y);if(W===Y){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),H)return H(U);return U},this.setURLModifier=function(U){return H=U,this},this.addHandler=function(U,G){return X.push(U,G),this},this.removeHandler=function(U){let G=X.indexOf(U);if(G!==-1)X.splice(G,2);return this},this.getHandler=function(U){for(let G=0,D=X.length;G<D;G+=2){let q=X[G],F=X[G+1];if(q.global)q.lastIndex=0;if(q.test(U))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var oK=new w$;class _${constructor(J){if(this.manager=J!==void 0?J:oK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}_$.DEFAULT_MATERIAL_NAME="__DEFAULT";class O7 extends LJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new p0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class M6 extends O7{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(LJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new p0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var HQ=new WJ,pZ=new j,mZ=new j;class T${constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new I0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new WJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new E7,this._frameExtents=new I0(1,1),this._viewportCount=1,this._viewports=[new DJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;pZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(pZ),mZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(mZ),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,Z){HQ.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(HQ,J.coordinateSystem,J.reversedDepth);let K=this._frameExtents,W=Z?Z.z/K.x:1,Y=Z?Z.w/K.y:1,H=Z?Z.x/K.x:0,X=Z?Z.y/K.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*W,0,0,0.5*W+H,0,0.5*Y,0,0.5*Y+X,0,0,1,0,0,0,0,1);else Q.set(0.5*W,0,0,0.5*W+H,0,0.5*Y,0,0.5*Y+X,0,0,0.5,0.5,0,0,0,1);Q.multiply(HQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var s7=new j,i7=new uJ,E9=new j;class L6 extends LJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new WJ,this.projectionMatrix=new WJ,this.projectionMatrixInverse=new WJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(s7,i7,E9),E9.x===1&&E9.y===1&&E9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(s7,i7,E9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(s7,i7,E9),E9.x===1&&E9.y===1&&E9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(s7,i7,E9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var g9=new j,lZ=new I0,dZ=new I0;class hJ extends L6{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=T8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan($7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return T8*2*Math.atan(Math.tan($7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){g9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(g9.x,g9.y).multiplyScalar(-J/g9.z),g9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(g9.x,g9.y).multiplyScalar(-J/g9.z)}getViewSize(J,Q){return this.getViewBounds(J,lZ,dZ),Q.subVectors(dZ,lZ)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan($7*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:H,fullHeight:X}=W;K+=W.offsetX*Z/H,Q-=W.offsetY*$/X,Z*=W.width/H,$*=W.height/X}let Y=this.filmOffset;if(Y!==0)K+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class R7 extends L6{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,Y=Z+Q,H=Z-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=X*this.view.offsetX,W=K+X*this.view.width,Y-=U*this.view.offsetY,H=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(K,W,Y,H,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class aK extends T${constructor(){super(new R7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class V6 extends O7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(LJ.DEFAULT_UP),this.updateMatrix(),this.target=new LJ,this.shadow=new aK}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class k6 extends O7{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}var P8=-90,C8=1;class S$ extends LJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new hJ(P8,C8,J,Q);Z.layers=this.layers,this.add(Z);let K=new hJ(P8,C8,J,Q);K.layers=this.layers,this.add(K);let W=new hJ(P8,C8,J,Q);W.layers=this.layers,this.add(W);let Y=new hJ(P8,C8,J,Q);Y.layers=this.layers,this.add(Y);let H=new hJ(P8,C8,J,Q);H.layers=this.layers,this.add(H);let X=new hJ(P8,C8,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,Y,H]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),H.up.set(0,1,0),H.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),H.up.set(0,-1,0),H.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,Y,H,X,U]=this.children,G=J.getRenderTarget(),D=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let z=!1;if(J.isWebGLRenderer===!0)z=J.state.buffers.depth.getReversed();else z=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,3,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,4,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=R,J.setRenderTarget($,5,Z),z&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(G,D,q),J.xr.enabled=F,$.texture.needsPMREMUpdate=!0}}class j$ extends hJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class B6{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=CH.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function CH(){if(this._document.hidden===!1)this.reset()}var y$="\\[\\]\\.:\\/",AH=new RegExp("["+y$+"]","g"),f$="[^"+y$+"]",wH="[^"+y$.replace("\\.","")+"]",_H=/((?:WC+[\/:])*)/.source.replace("WC",f$),TH=/(WCOD+)?/.source.replace("WCOD",wH),SH=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",f$),jH=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",f$),yH=new RegExp("^"+_H+TH+SH+jH+"$"),fH=["material","materials","bones","map"];class rK{constructor(J,Q,$){let Z=$||$J.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class $J{constructor(J,Q,$){this.path=Q,this.parsedPath=$||$J.parseTrackName(Q),this.node=$J.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new $J(J,Q,$);else return new $J.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(AH,"")}static parseTrackName(J){let Q=yH.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(fH.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let Y=K[W];if(Y.name===Q||Y.uuid===Q)return Y;let H=$(Y.children);if(H)return H}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=$J.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){T0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){y0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){y0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){y0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){y0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){y0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){y0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){y0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let W=J[Z];if(W===void 0){let X=Q.nodeName;y0("PropertyBinding: Trying to update property for track: "+X+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let H=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){y0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){y0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}H=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)H=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))H=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[H],this.setValue=this.SetterByBindingTypeAndVersioning[H][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$J.Composite=rK;$J.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$J.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$J.prototype.GetterByBindingType=[$J.prototype._getValue_direct,$J.prototype._getValue_array,$J.prototype._getValue_arrayElement,$J.prototype._getValue_toArray];$J.prototype.SetterByBindingTypeAndVersioning=[[$J.prototype._setValue_direct,$J.prototype._setValue_direct_setNeedsUpdate,$J.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$J.prototype._setValue_array,$J.prototype._setValue_array_setNeedsUpdate,$J.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$J.prototype._setValue_arrayElement,$J.prototype._setValue_arrayElement_setNeedsUpdate,$J.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$J.prototype._setValue_fromArray,$J.prototype._setValue_fromArray_setNeedsUpdate,$J.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iN=new Float32Array(1);var uZ=new WJ;class I6{constructor(J,Q,$=0,Z=1/0){this.ray=new b8(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new N7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else y0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return uZ.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uZ),this}intersectObject(J,Q=!0,$=[]){return XQ(J,this,$,Q),$.sort(cZ),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,K=J.length;Z<K;Z++)XQ(J[Z],this,$,Q);return $.sort(cZ),$}}function cZ(J,Q){return J.distance-Q.distance}function XQ(J,Q,$,Z){let K=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)K=!1}if(K===!0&&Z===!0){let W=J.children;for(let Y=0,H=W.length;Y<H;Y++)XQ(W[Y],Q,$,!0)}}class M7{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=l0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(l0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class v${static{v$.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}class z6 extends L9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function b$(J,Q,$,Z){let K=vH(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function vH(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)T0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function LW(){let J=null,Q=!1,$=null,Z=null;function K(W,Y){Z=J.requestAnimationFrame(K),$(W,Y)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function bH(J){let Q=new WeakMap;function $(H,X){let{array:U,usage:G}=H,D=U.byteLength,q=J.createBuffer();J.bindBuffer(X,q),J.bufferData(X,U,G),H.onUploadCallback();let F;if(U instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)F=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(H.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)F=J.SHORT;else if(U instanceof Uint32Array)F=J.UNSIGNED_INT;else if(U instanceof Int32Array)F=J.INT;else if(U instanceof Int8Array)F=J.BYTE;else if(U instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:F,bytesPerElement:U.BYTES_PER_ELEMENT,version:H.version,size:D}}function Z(H,X,U){let{array:G,updateRanges:D}=X;if(J.bindBuffer(U,H),D.length===0)J.bufferSubData(U,0,G);else{D.sort((F,R)=>F.start-R.start);let q=0;for(let F=1;F<D.length;F++){let R=D[q],z=D[F];if(z.start<=R.start+R.count+1)R.count=Math.max(R.count,z.start+z.count-R.start);else++q,D[q]=z}D.length=q+1;for(let F=0,R=D.length;F<R;F++){let z=D[F];J.bufferSubData(U,z.start*G.BYTES_PER_ELEMENT,G,z.start,z.count)}X.clearUpdateRanges()}X.onUploadCallback()}function K(H){if(H.isInterleavedBufferAttribute)H=H.data;return Q.get(H)}function W(H){if(H.isInterleavedBufferAttribute)H=H.data;let X=Q.get(H);if(X)J.deleteBuffer(X.buffer),Q.delete(H)}function Y(H,X){if(H.isInterleavedBufferAttribute)H=H.data;if(H.isGLBufferAttribute){let G=Q.get(H);if(!G||G.version<H.version)Q.set(H,{buffer:H.buffer,type:H.type,bytesPerElement:H.elementSize,version:H.version});return}let U=Q.get(H);if(U===void 0)Q.set(H,$(H,X));else if(U.version<H.version){if(U.size!==H.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,H,X),U.version=H.version}}return{get:K,remove:W,update:Y}}var hH=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xH=`#ifdef USE_ALPHAHASH
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
#endif`,gH=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pH=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mH=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lH=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dH=`#ifdef USE_AOMAP
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
#endif`,uH=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cH=`#ifdef USE_BATCHING
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
#endif`,nH=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sH=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iH=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oH=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aH=`#ifdef USE_IRIDESCENCE
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
#endif`,rH=`#ifdef USE_BUMPMAP
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
#endif`,tH=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$X=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,KX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,WX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,YX=`#define PI 3.141592653589793
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
} // validated`,HX=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XX=`vec3 transformedNormal = objectNormal;
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
#endif`,UX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FX="gl_FragColor = linearToOutputTexel( gl_FragColor );",DX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EX=`#ifdef USE_ENVMAP
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
#endif`,OX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,RX=`#ifdef USE_ENVMAP
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
#endif`,MX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LX=`#ifdef USE_ENVMAP
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
#endif`,VX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kX=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zX=`#ifdef USE_GRADIENTMAP
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
}`,PX=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CX=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wX=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_X=`#ifdef USE_ENVMAP
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
#endif`,TX=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jX=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fX=`PhysicalMaterial material;
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
#endif`,vX=`uniform sampler2D dfgLUT;
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
}`,bX=`
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
#endif`,hX=`#if defined( RE_IndirectDiffuse )
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
#endif`,xX=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gX=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pX=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mX=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lX=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dX=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uX=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cX=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nX=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sX=`#if defined( USE_POINTS_UV )
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
#endif`,iX=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oX=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aX=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rX=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tX=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eX=`#ifdef USE_MORPHTARGETS
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
#endif`,JU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$U=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,YU=`#ifdef USE_NORMALMAP
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
#endif`,HU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GU=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BU=`float getShadowMask() {
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
}`,IU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zU=`#ifdef USE_SKINNING
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
#endif`,PU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CU=`#ifdef USE_SKINNING
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
#endif`,AU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_U=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TU=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SU=`#ifdef USE_TRANSMISSION
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
#endif`,jU=`#ifdef USE_TRANSMISSION
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
#endif`,yU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xU=`uniform sampler2D t2D;
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
}`,gU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pU=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dU=`#include <common>
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
}`,uU=`#if DEPTH_PACKING == 3200
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
}`,cU=`#define DISTANCE
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
}`,nU=`#define DISTANCE
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
}`,sU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oU=`uniform float scale;
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
}`,aU=`uniform vec3 diffuse;
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
}`,rU=`#include <common>
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
}`,tU=`uniform vec3 diffuse;
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
}`,eU=`#define LAMBERT
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
}`,J5=`#define LAMBERT
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
}`,Q5=`#define MATCAP
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
}`,$5=`#define MATCAP
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
}`,Z5=`#define NORMAL
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
}`,K5=`#define NORMAL
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
}`,W5=`#define PHONG
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
}`,Y5=`#define PHONG
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
}`,H5=`#define STANDARD
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
}`,X5=`#define STANDARD
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
}`,U5=`#define TOON
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
}`,q5=`#define TOON
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
}`,N5=`uniform float size;
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
}`,G5=`uniform vec3 diffuse;
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
}`,F5=`#include <common>
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
}`,D5=`uniform vec3 color;
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
}`,E5=`uniform float rotation;
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
}`,O5=`uniform vec3 diffuse;
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
}`,g0={alphahash_fragment:hH,alphahash_pars_fragment:xH,alphamap_fragment:gH,alphamap_pars_fragment:pH,alphatest_fragment:mH,alphatest_pars_fragment:lH,aomap_fragment:dH,aomap_pars_fragment:uH,batching_pars_vertex:cH,batching_vertex:nH,begin_vertex:sH,beginnormal_vertex:iH,bsdfs:oH,iridescence_fragment:aH,bumpmap_pars_fragment:rH,clipping_planes_fragment:tH,clipping_planes_pars_fragment:eH,clipping_planes_pars_vertex:JX,clipping_planes_vertex:QX,color_fragment:$X,color_pars_fragment:ZX,color_pars_vertex:KX,color_vertex:WX,common:YX,cube_uv_reflection_fragment:HX,defaultnormal_vertex:XX,displacementmap_pars_vertex:UX,displacementmap_vertex:qX,emissivemap_fragment:NX,emissivemap_pars_fragment:GX,colorspace_fragment:FX,colorspace_pars_fragment:DX,envmap_fragment:EX,envmap_common_pars_fragment:OX,envmap_pars_fragment:RX,envmap_pars_vertex:MX,envmap_physical_pars_fragment:_X,envmap_vertex:LX,fog_vertex:VX,fog_pars_vertex:kX,fog_fragment:BX,fog_pars_fragment:IX,gradientmap_pars_fragment:zX,lightmap_pars_fragment:PX,lights_lambert_fragment:CX,lights_lambert_pars_fragment:AX,lights_pars_begin:wX,lights_toon_fragment:TX,lights_toon_pars_fragment:SX,lights_phong_fragment:jX,lights_phong_pars_fragment:yX,lights_physical_fragment:fX,lights_physical_pars_fragment:vX,lights_fragment_begin:bX,lights_fragment_maps:hX,lights_fragment_end:xX,lightprobes_pars_fragment:gX,logdepthbuf_fragment:pX,logdepthbuf_pars_fragment:mX,logdepthbuf_pars_vertex:lX,logdepthbuf_vertex:dX,map_fragment:uX,map_pars_fragment:cX,map_particle_fragment:nX,map_particle_pars_fragment:sX,metalnessmap_fragment:iX,metalnessmap_pars_fragment:oX,morphinstance_vertex:aX,morphcolor_vertex:rX,morphnormal_vertex:tX,morphtarget_pars_vertex:eX,morphtarget_vertex:JU,normal_fragment_begin:QU,normal_fragment_maps:$U,normal_pars_fragment:ZU,normal_pars_vertex:KU,normal_vertex:WU,normalmap_pars_fragment:YU,clearcoat_normal_fragment_begin:HU,clearcoat_normal_fragment_maps:XU,clearcoat_pars_fragment:UU,iridescence_pars_fragment:qU,opaque_fragment:NU,packing:GU,premultiplied_alpha_fragment:FU,project_vertex:DU,dithering_fragment:EU,dithering_pars_fragment:OU,roughnessmap_fragment:RU,roughnessmap_pars_fragment:MU,shadowmap_pars_fragment:LU,shadowmap_pars_vertex:VU,shadowmap_vertex:kU,shadowmask_pars_fragment:BU,skinbase_vertex:IU,skinning_pars_vertex:zU,skinning_vertex:PU,skinnormal_vertex:CU,specularmap_fragment:AU,specularmap_pars_fragment:wU,tonemapping_fragment:_U,tonemapping_pars_fragment:TU,transmission_fragment:SU,transmission_pars_fragment:jU,uv_pars_fragment:yU,uv_pars_vertex:fU,uv_vertex:vU,worldpos_vertex:bU,background_vert:hU,background_frag:xU,backgroundCube_vert:gU,backgroundCube_frag:pU,cube_vert:mU,cube_frag:lU,depth_vert:dU,depth_frag:uU,distance_vert:cU,distance_frag:nU,equirect_vert:sU,equirect_frag:iU,linedashed_vert:oU,linedashed_frag:aU,meshbasic_vert:rU,meshbasic_frag:tU,meshlambert_vert:eU,meshlambert_frag:J5,meshmatcap_vert:Q5,meshmatcap_frag:$5,meshnormal_vert:Z5,meshnormal_frag:K5,meshphong_vert:W5,meshphong_frag:Y5,meshphysical_vert:H5,meshphysical_frag:X5,meshtoon_vert:U5,meshtoon_frag:q5,points_vert:N5,points_frag:G5,shadow_vert:F5,shadow_frag:D5,sprite_vert:E5,sprite_frag:O5},N0={common:{diffuse:{value:new p0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new v0},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new v0}},envmap:{envMap:{value:null},envMapRotation:{value:new v0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new v0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new v0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new v0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new v0},normalScale:{value:new I0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new v0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new v0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new v0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new v0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new p0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new p0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0},uvTransform:{value:new v0}},sprite:{diffuse:{value:new p0(16777215)},opacity:{value:1},center:{value:new I0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new v0},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0}}},k9={basic:{uniforms:fJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.fog]),vertexShader:g0.meshbasic_vert,fragmentShader:g0.meshbasic_frag},lambert:{uniforms:fJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,N0.lights,{emissive:{value:new p0(0)},envMapIntensity:{value:1}}]),vertexShader:g0.meshlambert_vert,fragmentShader:g0.meshlambert_frag},phong:{uniforms:fJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,N0.lights,{emissive:{value:new p0(0)},specular:{value:new p0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:g0.meshphong_vert,fragmentShader:g0.meshphong_frag},standard:{uniforms:fJ([N0.common,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.roughnessmap,N0.metalnessmap,N0.fog,N0.lights,{emissive:{value:new p0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:g0.meshphysical_vert,fragmentShader:g0.meshphysical_frag},toon:{uniforms:fJ([N0.common,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.gradientmap,N0.fog,N0.lights,{emissive:{value:new p0(0)}}]),vertexShader:g0.meshtoon_vert,fragmentShader:g0.meshtoon_frag},matcap:{uniforms:fJ([N0.common,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,{matcap:{value:null}}]),vertexShader:g0.meshmatcap_vert,fragmentShader:g0.meshmatcap_frag},points:{uniforms:fJ([N0.points,N0.fog]),vertexShader:g0.points_vert,fragmentShader:g0.points_frag},dashed:{uniforms:fJ([N0.common,N0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:g0.linedashed_vert,fragmentShader:g0.linedashed_frag},depth:{uniforms:fJ([N0.common,N0.displacementmap]),vertexShader:g0.depth_vert,fragmentShader:g0.depth_frag},normal:{uniforms:fJ([N0.common,N0.bumpmap,N0.normalmap,N0.displacementmap,{opacity:{value:1}}]),vertexShader:g0.meshnormal_vert,fragmentShader:g0.meshnormal_frag},sprite:{uniforms:fJ([N0.sprite,N0.fog]),vertexShader:g0.sprite_vert,fragmentShader:g0.sprite_frag},background:{uniforms:{uvTransform:{value:new v0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:g0.background_vert,fragmentShader:g0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new v0}},vertexShader:g0.backgroundCube_vert,fragmentShader:g0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:g0.cube_vert,fragmentShader:g0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:g0.equirect_vert,fragmentShader:g0.equirect_frag},distance:{uniforms:fJ([N0.common,N0.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:g0.distance_vert,fragmentShader:g0.distance_frag},shadow:{uniforms:fJ([N0.lights,N0.fog,{color:{value:new p0(0)},opacity:{value:1}}]),vertexShader:g0.shadow_vert,fragmentShader:g0.shadow_frag}};k9.physical={uniforms:fJ([k9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new v0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new v0},clearcoatNormalScale:{value:new I0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new v0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new v0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new v0},sheen:{value:0},sheenColor:{value:new p0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new v0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new v0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new v0},transmissionSamplerSize:{value:new I0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new v0},attenuationDistance:{value:0},attenuationColor:{value:new p0(0)},specularColor:{value:new p0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new v0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new v0},anisotropyVector:{value:new I0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new v0}}]),vertexShader:g0.meshphysical_vert,fragmentShader:g0.meshphysical_frag};var P6={r:0,b:0,g:0},R5=new WJ,VW=new v0;VW.set(-1,0,0,0,1,0,0,0,1);function M5(J,Q,$,Z,K,W){let Y=new p0(0),H=K===!0?0:1,X,U,G=null,D=0,q=null;function F(C){let w=C.isScene===!0?C.background:null;if(w&&w.isTexture){let V=C.backgroundBlurriness>0;w=Q.get(w,V)}return w}function R(C){let w=!1,V=F(C);if(V===null)E(Y,H);else if(V&&V.isColor)E(V,1),w=!0;let I=J.xr.getEnvironmentBlendMode();if(I==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(I==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||w)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function z(C,w){let V=F(w);if(V&&(V.isCubeTexture||V.mapping===Y7)){if(U===void 0)U=new _0(new gJ(1,1,1),new $9({name:"BackgroundCubeMaterial",uniforms:H8(k9.backgroundCube.uniforms),vertexShader:k9.backgroundCube.vertexShader,fragmentShader:k9.backgroundCube.fragmentShader,side:lJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(I,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(R5.makeRotationFromEuler(w.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(VW);if(U.material.toneMapped=n0.getTransfer(V.colorSpace)!==HJ,G!==V||D!==V.version||q!==J.toneMapping)U.material.needsUpdate=!0,G=V,D=V.version,q=J.toneMapping;U.layers.enableAll(),C.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(X===void 0)X=new _0(new _J(2,2),new $9({name:"BackgroundMaterial",uniforms:H8(k9.background.uniforms),vertexShader:k9.background.vertexShader,fragmentShader:k9.background.fragmentShader,side:p9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(X);if(X.material.uniforms.t2D.value=V,X.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,X.material.toneMapped=n0.getTransfer(V.colorSpace)!==HJ,V.matrixAutoUpdate===!0)V.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(V.matrix),G!==V||D!==V.version||q!==J.toneMapping)X.material.needsUpdate=!0,G=V,D=V.version,q=J.toneMapping;X.layers.enableAll(),C.unshift(X,X.geometry,X.material,0,0,null)}}function E(C,w){C.getRGB(P6,O$(J)),$.buffers.color.setClear(P6.r,P6.g,P6.b,w,W)}function N(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return Y},setClearColor:function(C,w=1){Y.set(C),H=w,E(Y,H)},getClearAlpha:function(){return H},setClearAlpha:function(C){H=C,E(Y,H)},render:R,addToRenderList:z,dispose:N}}function L5(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=q(null),W=K,Y=!1;function H(_,b,c,T,d){let a=!1,l=D(_,T,c,b);if(W!==l)W=l,U(W.object);if(a=F(_,T,c,d),a)R(_,T,c,d);if(d!==null)Q.update(d,J.ELEMENT_ARRAY_BUFFER);if(a||Y){if(Y=!1,V(_,b,c,T),d!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(d).buffer)}}function X(){return J.createVertexArray()}function U(_){return J.bindVertexArray(_)}function G(_){return J.deleteVertexArray(_)}function D(_,b,c,T){let d=T.wireframe===!0,a=Z[b.id];if(a===void 0)a={},Z[b.id]=a;let l=_.isInstancedMesh===!0?_.id:0,Q0=a[l];if(Q0===void 0)Q0={},a[l]=Q0;let n=Q0[c.id];if(n===void 0)n={},Q0[c.id]=n;let r=n[d];if(r===void 0)r=q(X()),n[d]=r;return r}function q(_){let b=[],c=[],T=[];for(let d=0;d<$;d++)b[d]=0,c[d]=0,T[d]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:c,attributeDivisors:T,object:_,attributes:{},index:null}}function F(_,b,c,T){let d=W.attributes,a=b.attributes,l=0,Q0=c.getAttributes();for(let n in Q0)if(Q0[n].location>=0){let J0=d[n],S0=a[n];if(S0===void 0){if(n==="instanceMatrix"&&_.instanceMatrix)S0=_.instanceMatrix;if(n==="instanceColor"&&_.instanceColor)S0=_.instanceColor}if(J0===void 0)return!0;if(J0.attribute!==S0)return!0;if(S0&&J0.data!==S0.data)return!0;l++}if(W.attributesNum!==l)return!0;if(W.index!==T)return!0;return!1}function R(_,b,c,T){let d={},a=b.attributes,l=0,Q0=c.getAttributes();for(let n in Q0)if(Q0[n].location>=0){let J0=a[n];if(J0===void 0){if(n==="instanceMatrix"&&_.instanceMatrix)J0=_.instanceMatrix;if(n==="instanceColor"&&_.instanceColor)J0=_.instanceColor}let S0={};if(S0.attribute=J0,J0&&J0.data)S0.data=J0.data;d[n]=S0,l++}W.attributes=d,W.attributesNum=l,W.index=T}function z(){let _=W.newAttributes;for(let b=0,c=_.length;b<c;b++)_[b]=0}function E(_){N(_,0)}function N(_,b){let{newAttributes:c,enabledAttributes:T,attributeDivisors:d}=W;if(c[_]=1,T[_]===0)J.enableVertexAttribArray(_),T[_]=1;if(d[_]!==b)J.vertexAttribDivisor(_,b),d[_]=b}function C(){let{newAttributes:_,enabledAttributes:b}=W;for(let c=0,T=b.length;c<T;c++)if(b[c]!==_[c])J.disableVertexAttribArray(c),b[c]=0}function w(_,b,c,T,d,a,l){if(l===!0)J.vertexAttribIPointer(_,b,c,d,a);else J.vertexAttribPointer(_,b,c,T,d,a)}function V(_,b,c,T){z();let d=T.attributes,a=c.getAttributes(),l=b.defaultAttributeValues;for(let Q0 in a){let n=a[Q0];if(n.location>=0){let r=d[Q0];if(r===void 0){if(Q0==="instanceMatrix"&&_.instanceMatrix)r=_.instanceMatrix;if(Q0==="instanceColor"&&_.instanceColor)r=_.instanceColor}if(r!==void 0){let{normalized:J0,itemSize:S0}=r,C0=Q.get(r);if(C0===void 0)continue;let{buffer:XJ,type:m0,bytesPerElement:s}=C0,$0=m0===J.INT||m0===J.UNSIGNED_INT||r.gpuType===kQ;if(r.isInterleavedBufferAttribute){let W0=r.data,A0=W0.stride,j0=r.offset;if(W0.isInstancedInterleavedBuffer){for(let z0=0;z0<n.locationSize;z0++)N(n.location+z0,W0.meshPerAttribute);if(_.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=W0.meshPerAttribute*W0.count}else for(let z0=0;z0<n.locationSize;z0++)E(n.location+z0);J.bindBuffer(J.ARRAY_BUFFER,XJ);for(let z0=0;z0<n.locationSize;z0++)w(n.location+z0,S0/n.locationSize,m0,J0,A0*s,(j0+S0/n.locationSize*z0)*s,$0)}else{if(r.isInstancedBufferAttribute){for(let W0=0;W0<n.locationSize;W0++)N(n.location+W0,r.meshPerAttribute);if(_.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=r.meshPerAttribute*r.count}else for(let W0=0;W0<n.locationSize;W0++)E(n.location+W0);J.bindBuffer(J.ARRAY_BUFFER,XJ);for(let W0=0;W0<n.locationSize;W0++)w(n.location+W0,S0/n.locationSize,m0,J0,S0*s,S0/n.locationSize*W0*s,$0)}}else if(l!==void 0){let J0=l[Q0];if(J0!==void 0)switch(J0.length){case 2:J.vertexAttrib2fv(n.location,J0);break;case 3:J.vertexAttrib3fv(n.location,J0);break;case 4:J.vertexAttrib4fv(n.location,J0);break;default:J.vertexAttrib1fv(n.location,J0)}}}}C()}function I(){k();for(let _ in Z){let b=Z[_];for(let c in b){let T=b[c];for(let d in T){let a=T[d];for(let l in a)G(a[l].object),delete a[l];delete T[d]}}delete Z[_]}}function A(_){if(Z[_.id]===void 0)return;let b=Z[_.id];for(let c in b){let T=b[c];for(let d in T){let a=T[d];for(let l in a)G(a[l].object),delete a[l];delete T[d]}}delete Z[_.id]}function P(_){for(let b in Z){let c=Z[b];for(let T in c){let d=c[T];if(d[_.id]===void 0)continue;let a=d[_.id];for(let l in a)G(a[l].object),delete a[l];delete d[_.id]}}}function O(_){for(let b in Z){let c=Z[b],T=_.isInstancedMesh===!0?_.id:0,d=c[T];if(d===void 0)continue;for(let a in d){let l=d[a];for(let Q0 in l)G(l[Q0].object),delete l[Q0];delete d[a]}if(delete c[T],Object.keys(c).length===0)delete Z[b]}}function k(){if(g(),Y=!0,W===K)return;W=K,U(W.object)}function g(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:H,reset:k,resetDefaultState:g,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfObject:O,releaseStatesOfProgram:P,initAttributes:z,enableAttribute:E,disableUnusedAttributes:C}}function V5(J,Q,$){let Z;function K(X){Z=X}function W(X,U){J.drawArrays(Z,X,U),$.update(U,Z,1)}function Y(X,U,G){if(G===0)return;J.drawArraysInstanced(Z,X,U,G),$.update(U,Z,G)}function H(X,U,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,X,0,U,0,G);let q=0;for(let F=0;F<G;F++)q+=U[F];$.update(q,Z,1)}this.setMode=K,this.render=W,this.renderInstances=Y,this.renderMultiDraw=H}function k5(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let P=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function Y(P){if(P!==M9&&Z.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function H(P){let O=P===R9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(P!==N9&&P!==S9&&!O&&Z.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(P){if(P==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";P="mediump"}if(P==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=X(U);if(G!==U)T0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let D=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&q===!1)T0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),z=J.getParameter(J.MAX_TEXTURE_SIZE),E=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),N=J.getParameter(J.MAX_VERTEX_ATTRIBS),C=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),w=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),I=J.getParameter(J.MAX_SAMPLES),A=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:X,textureFormatReadable:Y,textureTypeReadable:H,precision:U,logarithmicDepthBuffer:D,reversedDepthBuffer:q,maxTextures:F,maxVertexTextures:R,maxTextureSize:z,maxCubemapSize:E,maxAttributes:N,maxVertexUniforms:C,maxVaryings:w,maxFragmentUniforms:V,maxSamples:I,samples:A}}function B5(J){let Q=this,$=null,Z=0,K=!1,W=!1,Y=new J9,H=new v0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(D,q){let F=D.length!==0||q||Z!==0||K;return K=q,Z=D.length,F},this.beginShadows=function(){W=!0,G(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(D,q){$=G(D,q,0)},this.setState=function(D,q,F){let{clippingPlanes:R,clipIntersection:z,clipShadows:E}=D,N=J.get(D);if(!K||R===null||R.length===0||W&&!E)if(W)G(null);else U();else{let C=W?0:Z,w=C*4,V=N.clippingState||null;X.value=V,V=G(R,q,w,F);for(let I=0;I!==w;++I)V[I]=$[I];N.clippingState=V,this.numIntersection=z?this.numPlanes:0,this.numPlanes+=C}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(D,q,F,R){let z=D!==null?D.length:0,E=null;if(z!==0){if(E=X.value,R!==!0||E===null){let N=F+z*4,C=q.matrixWorldInverse;if(H.getNormalMatrix(C),E===null||E.length<N)E=new Float32Array(N);for(let w=0,V=F;w!==z;++w,V+=4)Y.copy(D[w]).applyMatrix4(C,H),Y.normal.toArray(E,V),E[V+3]=Y.constant}X.value=E,X.needsUpdate=!0}return Q.numPlanes=z,Q.numIntersection=0,E}}var m8=4,I5=6,z5=20,P5=256,L7=new R7,tK=new p0,h$=null,x$=0,g$=0,p$=!1,C5=new j,N8=new j;class d${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:Y=C5}=K;h$=this._renderer.getRenderTarget(),x$=this._renderer.getActiveCubeFace(),g$=this._renderer.getActiveMipmapLevel(),p$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let H=this._allocateTargets();if(H.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,H,Y),Q>0)this._blur(H,0,0,Q);return this._applyPMREM(H),this._cleanup(H),H}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=QW(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=JW(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(h$,x$,g$),this._renderer.xr.enabled=p$,J.scissorTest=!1,p8(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===y8||J.mapping===r9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);h$=this._renderer.getRenderTarget(),x$=this._renderer.getActiveCubeFace(),g$=this._renderer.getActiveMipmapLevel(),p$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:dJ,minFilter:dJ,generateMipmaps:!1,type:R9,format:M9,colorSpace:K$,depthBuffer:!1},Z=eK(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=eK(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=A5(K)),this._blurMaterial=_5(K,J,Q),this._ggxMaterial=w5(K,J,Q)}return Z}_compileMaterial(J){let Q=new _0(new xJ,J);this._renderer.compile(Q,L7)}_sceneToCubeUV(J,Q,$,Z,K){let H=new hJ(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,D=G.autoClear,q=G.toneMapping;if(G.getClearColor(tK),G.toneMapping=q9,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new _0(new gJ,new G6({name:"PMREM.Background",side:lJ,depthWrite:!1,depthTest:!1}));let R=this._backgroundBox,z=R.material,E=!1,N=J.background;if(N){if(N.isColor)z.color.copy(N),J.background=null,E=!0}else z.color.copy(tK),E=!0;for(let C=0;C<6;C++){let w=C%3;if(w===0)H.up.set(0,X[C],0),H.position.set(K.x,K.y,K.z),H.lookAt(K.x+U[C],K.y,K.z);else if(w===1)H.up.set(0,0,X[C]),H.position.set(K.x,K.y,K.z),H.lookAt(K.x,K.y+U[C],K.z);else H.up.set(0,X[C],0),H.position.set(K.x,K.y,K.z),H.lookAt(K.x,K.y,K.z+U[C]);let V=this._cubeSize;if(p8(Z,w*V,C>2?V:0,V,V),G.setRenderTarget(Z),E)G.render(R,H);G.render(J,H)}G.toneMapping=q,G.autoClear=D,J.background=N}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===y8||J.mapping===r9;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=QW();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=JW();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let Y=K.uniforms;Y.envMap.value=J;let H=this._cubeSize;p8(Q,0,0,3*H,2*H),$.setRenderTarget(Q),$.render(W,L7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,Y=this._lodMeshes[$];Y.material=W;let H=W.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),G=Math.sqrt(X*X-U*U),D=X*1.25,q=G*D,{_lodMax:F}=this,R=this._sizeLods[$],z=3*R*($>F-m8?$-F+m8:0),E=4*(this._cubeSize-R);H.envMap.value=J.texture,H.roughness.value=q,H.mipInt.value=F-Q,p8(K,z,E,3*R,2*R),Z.setRenderTarget(K),Z.render(Y,L7),H.envMap.value=K.texture,H.roughness.value=0,H.mipInt.value=F-$,p8(J,z,E,3*R,2*R),Z.setRenderTarget(J),Z.render(Y,L7)}_blur(J,Q,$,Z){let K=this._pingPongRenderTarget,W=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,K,Q,$,W),this._blurPass(K,J,$,$,W)}_blurPass(J,Q,$,Z,K){let W=this._renderer,Y=this._blurMaterial,H=this._lodMeshes[Z];H.material=Y;let X=Y.uniforms;X.envMap.value=J.texture,X.sigma.value=K,X.mipInt.value=this._lodMax-$;let U=this._sizeLods[Z],G=3*U*(Z>this._lodMax-m8?Z-this._lodMax+m8:0),D=4*(this._cubeSize-U);p8(Q,G,D,3*U,2*U),W.setRenderTarget(Q),W.render(H,L7)}}function A5(J){let Q=[],$=[],Z=J,K=J-m8+1+I5;for(let W=0;W<K;W++){let Y=Math.pow(2,Z);Q.push(Y);let H=1/(Y-2),X=-H,U=1+H,G=[X,X,U,X,U,U,X,X,U,U,X,U],D=6,q=6,F=3,R=new Float32Array(F*q*D),z=new Float32Array(F*q*D);for(let N=0;N<D;N++){let C=N%3*2/3-1,w=N>2?0:-1,V=[C,w,0,C+0.6666666666666666,w,0,C+0.6666666666666666,w+1,0,C,w,0,C+0.6666666666666666,w+1,0,C,w+1,0];R.set(V,F*q*N);for(let I=0;I<q;I++){let A=G[I*2]*2-1,P=G[I*2+1]*2-1;if(N===0)N8.set(1,P,A);else if(N===1)N8.set(-A,1,-P);else if(N===2)N8.set(-A,P,1);else if(N===3)N8.set(-1,P,-A);else if(N===4)N8.set(-A,-1,P);else N8.set(A,P,-1);N8.toArray(z,(N*q+I)*F)}}let E=new xJ;if(E.setAttribute("position",new X9(R,F)),E.setAttribute("outputDirection",new X9(z,F)),$.push(new _0(E,null)),Z>m8)Z--}return{lodMeshes:$,sizeLods:Q}}function eK(J,Q,$){let Z=new aJ(J,Q,$);return Z.texture.mapping=Y7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function p8(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function w5(J,Q,$){return new $9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P5,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:A6(),fragmentShader:`

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
		`,blending:O9,depthTest:!1,depthWrite:!1})}function _5(J,Q,$){return new $9({name:"SphericalGaussianBlur",defines:{SAMPLES:z5,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:A6(),fragmentShader:`

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
		`,blending:O9,depthTest:!1,depthWrite:!1})}function JW(){return new $9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:A6(),fragmentShader:`

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
		`,blending:O9,depthTest:!1,depthWrite:!1})}function QW(){return new $9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:A6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:O9,depthTest:!1,depthWrite:!1})}function A6(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class n$ extends aJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new F6(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new gJ(5,5,5),K=new $9({name:"CubemapFromEquirect",uniforms:H8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:lJ,blending:O9});K.uniforms.tEquirect.value=Q;let W=new _0(Z,K),Y=Q.minFilter;if(Q.minFilter===t9)Q.minFilter=dJ;return new S$(1,10,this).update(J,W),Q.minFilter=Y,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function T5(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(q,F=!1){if(q===null||q===void 0)return null;if(F)return Y(q);return W(q)}function W(q){if(q&&q.isTexture){let F=q.mapping;if(F===o7||F===a7)if(Q.has(q)){let R=Q.get(q).texture;return H(R,q.mapping)}else{let R=q.image;if(R&&R.height>0){let z=new n$(R.height);return z.fromEquirectangularTexture(J,q),Q.set(q,z),q.addEventListener("dispose",U),H(z.texture,q.mapping)}else return null}}return q}function Y(q){if(q&&q.isTexture){let F=q.mapping,R=F===o7||F===a7,z=F===y8||F===r9;if(R||z){let E=$.get(q),N=E!==void 0?E.texture.pmremVersion:0;if(q.isRenderTargetTexture&&q.pmremVersion!==N){if(Z===null)Z=new d$(J);return E=R?Z.fromEquirectangular(q,E):Z.fromCubemap(q,E),E.texture.pmremVersion=q.pmremVersion,$.set(q,E),E.texture}else if(E!==void 0)return E.texture;else{let C=q.image;if(R&&C&&C.height>0||z&&C&&X(C)){if(Z===null)Z=new d$(J);return E=R?Z.fromEquirectangular(q):Z.fromCubemap(q),E.texture.pmremVersion=q.pmremVersion,$.set(q,E),q.addEventListener("dispose",G),E.texture}else return null}}}return q}function H(q,F){if(F===o7)q.mapping=y8;else if(F===a7)q.mapping=r9;return q}function X(q){let F=0,R=6;for(let z=0;z<R;z++)if(q[z]!==void 0)F++;return F===R}function U(q){let F=q.target;F.removeEventListener("dispose",U);let R=Q.get(F);if(R!==void 0)Q.delete(F),R.dispose()}function G(q){let F=q.target;F.removeEventListener("dispose",G);let R=$.get(F);if(R!==void 0)$.delete(F),R.dispose()}function D(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:D}}function S5(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)o9("WebGLRenderer: "+Z+" extension not supported.");return K}}}function j5(J,Q,$,Z){let K={},W=new WeakMap;function Y(D){let q=D.target;if(q.index!==null)Q.remove(q.index);for(let R in q.attributes)Q.remove(q.attributes[R]);q.removeEventListener("dispose",Y),delete K[q.id];let F=W.get(q);if(F)Q.remove(F),W.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function H(D,q){if(K[q.id]===!0)return q;return q.addEventListener("dispose",Y),K[q.id]=!0,$.memory.geometries++,q}function X(D){let q=D.attributes;for(let F in q)Q.update(q[F],J.ARRAY_BUFFER)}function U(D){let q=[],F=D.index,R=D.attributes.position,z=0;if(R===void 0)return;if(F!==null){let C=F.array;z=F.version;for(let w=0,V=C.length;w<V;w+=3){let I=C[w+0],A=C[w+1],P=C[w+2];q.push(I,A,A,P,P,I)}}else{let C=R.array;z=R.version;for(let w=0,V=C.length/3-1;w<V;w+=3){let I=w+0,A=w+1,P=w+2;q.push(I,A,A,P,P,I)}}let E=new(R.count>=65535?N6:q6)(q,1);E.version=z;let N=W.get(D);if(N)Q.remove(N);W.set(D,E)}function G(D){let q=W.get(D);if(q){let F=D.index;if(F!==null){if(q.version<F.version)U(D)}}else U(D);return W.get(D)}return{get:H,update:X,getWireframeAttribute:G}}function y5(J,Q,$){let Z;function K(D){Z=D}let W,Y;function H(D){W=D.type,Y=D.bytesPerElement}function X(D,q){J.drawElements(Z,q,W,D*Y),$.update(q,Z,1)}function U(D,q,F){if(F===0)return;J.drawElementsInstanced(Z,q,W,D*Y,F),$.update(q,Z,F)}function G(D,q,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,q,0,W,D,0,F);let z=0;for(let E=0;E<F;E++)z+=q[E];$.update(z,Z,1)}this.setMode=K,this.setIndex=H,this.render=X,this.renderInstances=U,this.renderMultiDraw=G}function f5(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,Y,H){switch($.calls++,Y){case J.TRIANGLES:$.triangles+=H*(W/3);break;case J.LINES:$.lines+=H*(W/2);break;case J.LINE_STRIP:$.lines+=H*(W-1);break;case J.LINE_LOOP:$.lines+=H*W;break;case J.POINTS:$.points+=H*W;break;default:y0("WebGLInfo: Unknown draw mode:",Y);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function v5(J,Q,$){let Z=new WeakMap,K=new DJ;function W(Y,H,X){let U=Y.morphTargetInfluences,G=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,D=G!==void 0?G.length:0,q=Z.get(H);if(q===void 0||q.count!==D){let k=function(){P.dispose(),Z.delete(H),H.removeEventListener("dispose",k)};if(q!==void 0)q.texture.dispose();let F=H.morphAttributes.position!==void 0,R=H.morphAttributes.normal!==void 0,z=H.morphAttributes.color!==void 0,E=H.morphAttributes.position||[],N=H.morphAttributes.normal||[],C=H.morphAttributes.color||[],w=0;if(F===!0)w=1;if(R===!0)w=2;if(z===!0)w=3;let V=H.attributes.position.count*w,I=1;if(V>Q.maxTextureSize)I=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let A=new Float32Array(V*I*4*D),P=new X6(A,V,I,D);P.type=S9,P.needsUpdate=!0;let O=w*4;for(let g=0;g<D;g++){let _=E[g],b=N[g],c=C[g],T=V*I*4*g;for(let d=0;d<_.count;d++){let a=d*O;if(F===!0)K.fromBufferAttribute(_,d),A[T+a+0]=K.x,A[T+a+1]=K.y,A[T+a+2]=K.z,A[T+a+3]=0;if(R===!0)K.fromBufferAttribute(b,d),A[T+a+4]=K.x,A[T+a+5]=K.y,A[T+a+6]=K.z,A[T+a+7]=0;if(z===!0)K.fromBufferAttribute(c,d),A[T+a+8]=K.x,A[T+a+9]=K.y,A[T+a+10]=K.z,A[T+a+11]=c.itemSize===4?K.w:1}}q={count:D,texture:P,size:new I0(V,I)},Z.set(H,q),H.addEventListener("dispose",k)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",Y.morphTexture,$);else{let F=0;for(let z=0;z<U.length;z++)F+=U[z];let R=H.morphTargetsRelative?1:1-F;X.getUniforms().setValue(J,"morphTargetBaseInfluence",R),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:W}}function b5(J,Q,$,Z,K){let W=new WeakMap;function Y(U){let G=K.render.frame,D=U.geometry,q=Q.get(U,D);if(W.get(q)!==G)Q.update(q),W.set(q,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(W.get(U)!==G){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,G)}}if(U.isSkinnedMesh){let F=U.skeleton;if(W.get(F)!==G)F.update(),W.set(F,G)}return q}function H(){W=new WeakMap}function X(U){let G=U.target;if(G.removeEventListener("dispose",X),Z.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:Y,dispose:H}}var h5={[DQ]:"LINEAR_TONE_MAPPING",[EQ]:"REINHARD_TONE_MAPPING",[OQ]:"CINEON_TONE_MAPPING",[RQ]:"ACES_FILMIC_TONE_MAPPING",[LQ]:"AGX_TONE_MAPPING",[VQ]:"NEUTRAL_TONE_MAPPING",[MQ]:"CUSTOM_TONE_MAPPING"};function x5(J,Q,$,Z,K,W){let Y=new aJ(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),H=null,X=null,U=new xJ;U.setAttribute("position",new NJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new NJ([0,2,0,0,2,0],2));let G=new R$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),D=new _0(U,G),q=new R7(-1,1,1,-1,0,1),F=null,R=null,z=!1,E,N=null,C=[],w=!1;this.setSize=function(V,I){if(Y.setSize(V,I),H!==null)H.setSize(V,I);if(X!==null)X.setSize(V,I);for(let A=0;A<C.length;A++){let P=C[A];if(P.setSize)P.setSize(V,I)}},this.setEffects=function(V){C=V,w=C.length>0&&C[0].isRenderPass===!0;let{width:I,height:A}=Y;if(C.length>0&&H===null)H=new aJ(I,A,{type:R9,depthBuffer:!1,stencilBuffer:!1}),X=new aJ(I,A,{type:R9,depthBuffer:!1,stencilBuffer:!1});for(let P=0;P<C.length;P++){let O=C[P];if(O.setSize)O.setSize(I,A)}},this.begin=function(V,I){if(z)return!1;if(V.toneMapping===q9&&C.length===0)return!1;if(N=I,I!==null){let{width:A,height:P}=I;if(Y.width!==A||Y.height!==P)this.setSize(A,P)}if(w===!1)V.setRenderTarget(Y);return E=V.toneMapping,V.toneMapping=q9,!0},this.hasRenderPass=function(){return w},this.end=function(V,I){V.toneMapping=E,z=!0;let A=Y,P=H;for(let O=0;O<C.length;O++){let k=C[O];if(k.enabled===!1)continue;if(k.render(V,P,A,I),k.needsSwap!==!1)A=P,P=P===H?X:H}if(F!==V.outputColorSpace||R!==V.toneMapping){if(F=V.outputColorSpace,R=V.toneMapping,G.defines={},n0.getTransfer(F)===HJ)G.defines.SRGB_TRANSFER="";let O=h5[R];if(O)G.defines[O]="";G.needsUpdate=!0}G.uniforms.tDiffuse.value=A.texture,V.setRenderTarget(N),V.render(D,q),N=null,z=!1},this.isCompositing=function(){return z},this.dispose=function(){if(Y.dispose(),H!==null)H.dispose();if(X!==null)X.dispose();U.dispose(),G.dispose()}}var kW=new IJ,u$=new W8(1,1),BW=new X6,IW=new F$,zW=new F6,$W=[],ZW=[],KW=new Float32Array(16),WW=new Float32Array(9),YW=new Float32Array(4);function l8(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=$W[K];if(W===void 0)W=new Float32Array(K),$W[K]=W;if(Q!==0){Z.toArray(W,0);for(let Y=1,H=0;Y!==Q;++Y)H+=$,J[Y].toArray(W,H)}return W}function zJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function PJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function w6(J,Q){let $=ZW[Q];if($===void 0)$=new Int32Array(Q),ZW[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function g5(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function p5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(zJ($,Q))return;J.uniform2fv(this.addr,Q),PJ($,Q)}}function m5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(zJ($,Q))return;J.uniform3fv(this.addr,Q),PJ($,Q)}}function l5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(zJ($,Q))return;J.uniform4fv(this.addr,Q),PJ($,Q)}}function d5(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(zJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),PJ($,Q)}else{if(zJ($,Z))return;YW.set(Z),J.uniformMatrix2fv(this.addr,!1,YW),PJ($,Z)}}function u5(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(zJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),PJ($,Q)}else{if(zJ($,Z))return;WW.set(Z),J.uniformMatrix3fv(this.addr,!1,WW),PJ($,Z)}}function c5(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(zJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),PJ($,Q)}else{if(zJ($,Z))return;KW.set(Z),J.uniformMatrix4fv(this.addr,!1,KW),PJ($,Z)}}function n5(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function s5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(zJ($,Q))return;J.uniform2iv(this.addr,Q),PJ($,Q)}}function i5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(zJ($,Q))return;J.uniform3iv(this.addr,Q),PJ($,Q)}}function o5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(zJ($,Q))return;J.uniform4iv(this.addr,Q),PJ($,Q)}}function a5(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function r5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(zJ($,Q))return;J.uniform2uiv(this.addr,Q),PJ($,Q)}}function t5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(zJ($,Q))return;J.uniform3uiv(this.addr,Q),PJ($,Q)}}function e5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(zJ($,Q))return;J.uniform4uiv(this.addr,Q),PJ($,Q)}}function Jq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)u$.compareFunction=$.isReversedDepthBuffer()?H6:Y6,W=u$;else W=kW;$.setTexture2D(Q||W,K)}function Qq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||IW,K)}function $q(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||zW,K)}function Zq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||BW,K)}function Kq(J){switch(J){case 5126:return g5;case 35664:return p5;case 35665:return m5;case 35666:return l5;case 35674:return d5;case 35675:return u5;case 35676:return c5;case 5124:case 35670:return n5;case 35667:case 35671:return s5;case 35668:case 35672:return i5;case 35669:case 35673:return o5;case 5125:return a5;case 36294:return r5;case 36295:return t5;case 36296:return e5;case 35678:case 36198:case 36298:case 36306:case 35682:return Jq;case 35679:case 36299:case 36307:return Qq;case 35680:case 36300:case 36308:case 36293:return $q;case 36289:case 36303:case 36311:case 36292:return Zq}}function Wq(J,Q){J.uniform1fv(this.addr,Q)}function Yq(J,Q){let $=l8(Q,this.size,2);J.uniform2fv(this.addr,$)}function Hq(J,Q){let $=l8(Q,this.size,3);J.uniform3fv(this.addr,$)}function Xq(J,Q){let $=l8(Q,this.size,4);J.uniform4fv(this.addr,$)}function Uq(J,Q){let $=l8(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function qq(J,Q){let $=l8(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function Nq(J,Q){let $=l8(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function Gq(J,Q){J.uniform1iv(this.addr,Q)}function Fq(J,Q){J.uniform2iv(this.addr,Q)}function Dq(J,Q){J.uniform3iv(this.addr,Q)}function Eq(J,Q){J.uniform4iv(this.addr,Q)}function Oq(J,Q){J.uniform1uiv(this.addr,Q)}function Rq(J,Q){J.uniform2uiv(this.addr,Q)}function Mq(J,Q){J.uniform3uiv(this.addr,Q)}function Lq(J,Q){J.uniform4uiv(this.addr,Q)}function Vq(J,Q,$){let Z=this.cache,K=Q.length,W=w6($,K);if(!zJ(Z,W))J.uniform1iv(this.addr,W),PJ(Z,W);let Y;if(this.type===J.SAMPLER_2D_SHADOW)Y=u$;else Y=kW;for(let H=0;H!==K;++H)$.setTexture2D(Q[H]||Y,W[H])}function kq(J,Q,$){let Z=this.cache,K=Q.length,W=w6($,K);if(!zJ(Z,W))J.uniform1iv(this.addr,W),PJ(Z,W);for(let Y=0;Y!==K;++Y)$.setTexture3D(Q[Y]||IW,W[Y])}function Bq(J,Q,$){let Z=this.cache,K=Q.length,W=w6($,K);if(!zJ(Z,W))J.uniform1iv(this.addr,W),PJ(Z,W);for(let Y=0;Y!==K;++Y)$.setTextureCube(Q[Y]||zW,W[Y])}function Iq(J,Q,$){let Z=this.cache,K=Q.length,W=w6($,K);if(!zJ(Z,W))J.uniform1iv(this.addr,W),PJ(Z,W);for(let Y=0;Y!==K;++Y)$.setTexture2DArray(Q[Y]||BW,W[Y])}function zq(J){switch(J){case 5126:return Wq;case 35664:return Yq;case 35665:return Hq;case 35666:return Xq;case 35674:return Uq;case 35675:return qq;case 35676:return Nq;case 5124:case 35670:return Gq;case 35667:case 35671:return Fq;case 35668:case 35672:return Dq;case 35669:case 35673:return Eq;case 5125:return Oq;case 36294:return Rq;case 36295:return Mq;case 36296:return Lq;case 35678:case 36198:case 36298:case 36306:case 35682:return Vq;case 35679:case 36299:case 36307:return kq;case 35680:case 36300:case 36308:case 36293:return Bq;case 36289:case 36303:case 36311:case 36292:return Iq}}class PW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=Kq(Q.type)}}class CW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=zq(Q.type)}}class AW{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let Y=Z[K];Y.setValue(J,Q[Y.id],$)}}}var m$=/(\w+)(\])?(\[|\.)?/g;function HW(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function Pq(J,Q,$){let Z=J.name,K=Z.length;m$.lastIndex=0;while(!0){let W=m$.exec(Z),Y=m$.lastIndex,H=W[1],X=W[2]==="]",U=W[3];if(X)H=H|0;if(U===void 0||U==="["&&Y+2===K){HW($,U===void 0?new PW(H,J,Q):new CW(H,J,Q));break}else{let D=$.map[H];if(D===void 0)D=new AW(H),HW($,D);$=D}}}class B7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let Y=J.getActiveUniform(Q,W),H=J.getUniformLocation(Q,Y.name);Pq(Y,H,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let Y=Q[K],H=$[Y.id];if(H.needsUpdate!==!1)Y.setValue(J,H.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function XW(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var Cq=37297,Aq=0;function wq(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let Y=K;Y<W;Y++){let H=Y+1;Z.push(`${H===Q?">":" "} ${H}: ${$[Y]}`)}return Z.join(`
`)}var UW=new v0;function _q(J){n0._getMatrix(UW,n0.workingColorSpace,J);let Q=`mat3( ${UW.elements.map(($)=>$.toFixed(4))} )`;switch(n0.getTransfer(J)){case W$:return[Q,"LinearTransferOETF"];case HJ:return[Q,"sRGBTransferOETF"];default:return T0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function qW(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let Y=/ERROR: 0:(\d+)/.exec(W);if(Y){let H=parseInt(Y[1]);return $.toUpperCase()+`

`+W+`

`+wq(J.getShaderSource(Q),H)}else return W}function Tq(J,Q){let $=_q(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var Sq={[DQ]:"Linear",[EQ]:"Reinhard",[OQ]:"Cineon",[RQ]:"ACESFilmic",[LQ]:"AgX",[VQ]:"Neutral",[MQ]:"Custom"};function jq(J,Q){let $=Sq[Q];if($===void 0)return T0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var C6=new j;function yq(){n0.getLuminanceCoefficients(C6);let J=C6.x.toFixed(4),Q=C6.y.toFixed(4),$=C6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function fq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(k7).join(`
`)}function vq(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function bq(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),Y=W.name,H=1;if(W.type===J.FLOAT_MAT2)H=2;if(W.type===J.FLOAT_MAT3)H=3;if(W.type===J.FLOAT_MAT4)H=4;$[Y]={type:W.type,location:J.getAttribLocation(Q,Y),locationSize:H}}return $}function k7(J){return J!==""}function NW(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function GW(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var hq=/^[ \t]*#include +<([\w\d./]+)>/gm;function c$(J){return J.replace(hq,gq)}var xq=new Map;function gq(J,Q){let $=g0[Q];if($===void 0){let Z=xq.get(Q);if(Z!==void 0)$=g0[Z],T0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return c$($)}var pq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function FW(J){return J.replace(pq,mq)}function mq(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function DW(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var lq={[a9]:"SHADOWMAP_TYPE_PCF",[S8]:"SHADOWMAP_TYPE_VSM"};function dq(J){return lq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var uq={[y8]:"ENVMAP_TYPE_CUBE",[r9]:"ENVMAP_TYPE_CUBE",[Y7]:"ENVMAP_TYPE_CUBE_UV"};function cq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return uq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var nq={[r9]:"ENVMAP_MODE_REFRACTION"};function sq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return nq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var iq={[IK]:"ENVMAP_BLENDING_MULTIPLY",[zK]:"ENVMAP_BLENDING_MIX",[PK]:"ENVMAP_BLENDING_ADD"};function oq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return iq[J.combine]||"ENVMAP_BLENDING_NONE"}function aq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function rq(J,Q,$,Z){let K=J.getContext(),W=$.defines,Y=$.vertexShader,H=$.fragmentShader,X=dq($),U=cq($),G=sq($),D=oq($),q=aq($),F=fq($),R=vq(W),z=K.createProgram(),E,N,C=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(k7).join(`
`),E.length>0)E+=`
`;if(N=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(k7).join(`
`),N.length>0)N+=`
`}else E=[DW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(k7).join(`
`),N=[DW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+D:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==q9?"#define TONE_MAPPING":"",$.toneMapping!==q9?g0.tonemapping_pars_fragment:"",$.toneMapping!==q9?jq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",g0.colorspace_pars_fragment,Tq("linearToOutputTexel",$.outputColorSpace),yq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(k7).join(`
`);if(Y=c$(Y),Y=NW(Y,$),Y=GW(Y,$),H=c$(H),H=NW(H,$),H=GW(H,$),Y=FW(Y),H=FW(H),$.isRawShaderMaterial!==!0)C=`#version 300 es
`,E=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,N=["#define varying in",$.glslVersion===Y$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===Y$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N;let w=C+E+Y,V=C+N+H,I=XW(K,K.VERTEX_SHADER,w),A=XW(K,K.FRAGMENT_SHADER,V);if(K.attachShader(z,I),K.attachShader(z,A),$.index0AttributeName!==void 0)K.bindAttribLocation(z,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(z,0,"position");K.linkProgram(z);function P(_){if(J.debug.checkShaderErrors){let b=K.getProgramInfoLog(z)||"",c=K.getShaderInfoLog(I)||"",T=K.getShaderInfoLog(A)||"",d=b.trim(),a=c.trim(),l=T.trim(),Q0=!0,n=!0;if(K.getProgramParameter(z,K.LINK_STATUS)===!1)if(Q0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,z,I,A);else{let r=qW(K,I,"vertex"),J0=qW(K,A,"fragment");y0("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(z,K.VALIDATE_STATUS)+`

Material Name: `+_.name+`
Material Type: `+_.type+`

Program Info Log: `+d+`
`+r+`
`+J0)}else if(d!=="")T0("WebGLProgram: Program Info Log:",d);else if(a===""||l==="")n=!1;if(n)_.diagnostics={runnable:Q0,programLog:d,vertexShader:{log:a,prefix:E},fragmentShader:{log:l,prefix:N}}}K.deleteShader(I),K.deleteShader(A),O=new B7(K,z),k=bq(K,z)}let O;this.getUniforms=function(){if(O===void 0)P(this);return O};let k;this.getAttributes=function(){if(k===void 0)P(this);return k};let g=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(g===!1)g=K.getProgramParameter(z,Cq);return g},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(z),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=Aq++,this.cacheKey=Q,this.usedTimes=1,this.program=z,this.vertexShader=I,this.fragmentShader=A,this}var tq=0;class wW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new _W(J),Q.set(J,$);return $}}class _W{constructor(J){this.id=tq++,this.code=J,this.usedTimes=0}}function eq(J){return J===Q8||J===Z6||J===K6}function JN(J,Q,$,Z,K,W){let Y=new N7,H=new wW,X=new Set,U=[],G=new Map,D=Z.logarithmicDepthBuffer,q=Z.precision,F={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(O){if(X.add(O),O===0)return"uv";return`uv${O}`}function z(O,k,g,_,b,c){let T=_.fog,d=b.geometry,a=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?_.environment:null,l=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Q0=Q.get(O.envMap||a,l),n=!!Q0&&Q0.mapping===Y7?Q0.image.height:null,r=F[O.type];if(O.precision!==null){if(q=Z.getMaxPrecision(O.precision),q!==O.precision)T0("WebGLProgram.getParameters:",O.precision,"not supported, using",q,"instead.")}let J0=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S0=J0!==void 0?J0.length:0,C0=0;if(d.morphAttributes.position!==void 0)C0=1;if(d.morphAttributes.normal!==void 0)C0=2;if(d.morphAttributes.color!==void 0)C0=3;let XJ,m0,s,$0;if(r){let UJ=k9[r];XJ=UJ.vertexShader,m0=UJ.fragmentShader}else{XJ=O.vertexShader,m0=O.fragmentShader;let UJ=H.getVertexShaderStage(O),t0=H.getFragmentShaderStage(O);H.update(O,UJ,t0),s=UJ.id,$0=t0.id}let W0=J.getRenderTarget(),A0=J.state.buffers.depth.getReversed(),j0=b.isInstancedMesh===!0,z0=b.isBatchedMesh===!0,VJ=!!O.map,c0=!!O.matcap,s0=!!Q0,QJ=!!O.aoMap,i0=!!O.lightMap,wJ=!!O.bumpMap&&O.wireframe===!1,GJ=!!O.normalMap,pJ=!!O.displacementMap,kJ=!!O.emissiveMap,BJ=!!O.metalnessMap,y=!!O.roughnessMap,mJ=O.anisotropy>0,r0=O.clearcoat>0,EJ=O.dispersion>0,B=O.retroreflectivity>0,M=O.iridescence>0,S=O.sheen>0,p=O.transmission>0,e=mJ&&!!O.anisotropyMap,Y0=r0&&!!O.clearcoatMap,U0=r0&&!!O.clearcoatNormalMap,u=r0&&!!O.clearcoatRoughnessMap,o=M&&!!O.iridescenceMap,E0=M&&!!O.iridescenceThicknessMap,B0=S&&!!O.sheenColorMap,q0=S&&!!O.sheenRoughnessMap,Z0=!!O.specularMap,P0=!!O.specularColorMap,w0=!!O.specularIntensityMap,a0=p&&!!O.transmissionMap,v=p&&!!O.thicknessMap,H0=!!O.gradientMap,i=!!O.alphaMap,X0=O.alphaTest>0,O0=!!O.alphaHash,t=!!O.extensions,G0=q9;if(O.toneMapped){if(W0===null||W0.isXRRenderTarget===!0)G0=J.toneMapping}let h0={shaderID:r,shaderType:O.type,shaderName:O.name,vertexShader:XJ,fragmentShader:m0,defines:O.defines,customVertexShaderID:s,customFragmentShaderID:$0,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:q,batching:z0,batchingColor:z0&&b._colorsTexture!==null,instancing:j0,instancingColor:j0&&b.instanceColor!==null,instancingMorph:j0&&b.morphTexture!==null,outputColorSpace:W0===null?J.outputColorSpace:W0.isXRRenderTarget===!0?W0.texture.colorSpace:n0.workingColorSpace,alphaToCoverage:!!O.alphaToCoverage,map:VJ,matcap:c0,envMap:s0,envMapMode:s0&&Q0.mapping,envMapCubeUVHeight:n,aoMap:QJ,lightMap:i0,bumpMap:wJ,normalMap:GJ,displacementMap:pJ,emissiveMap:kJ,normalMapObjectSpace:GJ&&O.normalMapType===vK,normalMapTangentSpace:GJ&&O.normalMapType===Z$,packedNormalMap:GJ&&O.normalMapType===Z$&&eq(O.normalMap.format),metalnessMap:BJ,roughnessMap:y,anisotropy:mJ,anisotropyMap:e,clearcoat:r0,clearcoatMap:Y0,clearcoatNormalMap:U0,clearcoatRoughnessMap:u,dispersion:EJ,retroreflection:B,iridescence:M,iridescenceMap:o,iridescenceThicknessMap:E0,sheen:S,sheenColorMap:B0,sheenRoughnessMap:q0,specularMap:Z0,specularColorMap:P0,specularIntensityMap:w0,transmission:p,transmissionMap:a0,thicknessMap:v,gradientMap:H0,opaque:O.transparent===!1&&O.blending===W7&&O.alphaToCoverage===!1,alphaMap:i,alphaTest:X0,alphaHash:O0,combine:O.combine,mapUv:VJ&&R(O.map.channel),aoMapUv:QJ&&R(O.aoMap.channel),lightMapUv:i0&&R(O.lightMap.channel),bumpMapUv:wJ&&R(O.bumpMap.channel),normalMapUv:GJ&&R(O.normalMap.channel),displacementMapUv:pJ&&R(O.displacementMap.channel),emissiveMapUv:kJ&&R(O.emissiveMap.channel),metalnessMapUv:BJ&&R(O.metalnessMap.channel),roughnessMapUv:y&&R(O.roughnessMap.channel),anisotropyMapUv:e&&R(O.anisotropyMap.channel),clearcoatMapUv:Y0&&R(O.clearcoatMap.channel),clearcoatNormalMapUv:U0&&R(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:u&&R(O.clearcoatRoughnessMap.channel),iridescenceMapUv:o&&R(O.iridescenceMap.channel),iridescenceThicknessMapUv:E0&&R(O.iridescenceThicknessMap.channel),sheenColorMapUv:B0&&R(O.sheenColorMap.channel),sheenRoughnessMapUv:q0&&R(O.sheenRoughnessMap.channel),specularMapUv:Z0&&R(O.specularMap.channel),specularColorMapUv:P0&&R(O.specularColorMap.channel),specularIntensityMapUv:w0&&R(O.specularIntensityMap.channel),transmissionMapUv:a0&&R(O.transmissionMap.channel),thicknessMapUv:v&&R(O.thicknessMap.channel),alphaMapUv:i&&R(O.alphaMap.channel),vertexTangents:!!d.attributes.tangent&&(GJ||mJ),vertexNormals:!!d.attributes.normal,vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!d.attributes.color&&d.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!d.attributes.uv&&(VJ||i),fog:!!T,useFog:O.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:O.wireframe===!1&&(O.flatShading===!0||d.attributes.normal===void 0&&GJ===!1&&(O.isMeshLambertMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isMeshPhysicalMaterial)),sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:D,reversedDepthBuffer:A0,skinning:b.isSkinnedMesh===!0,hasPositionAttribute:d.attributes.position!==void 0,morphTargets:d.morphAttributes.position!==void 0,morphNormals:d.morphAttributes.normal!==void 0,morphColors:d.morphAttributes.color!==void 0,morphTargetsCount:S0,morphTextureStride:C0,numSunLights:k.sun.length,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numSunLightShadows:k.sunShadowMap.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:c.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:O.dithering,shadowMapEnabled:J.shadowMap.enabled&&g.length>0,shadowMapType:J.shadowMap.type,toneMapping:G0,decodeVideoTexture:VJ&&O.map.isVideoTexture===!0&&n0.getTransfer(O.map.colorSpace)===HJ,decodeVideoTextureEmissive:kJ&&O.emissiveMap.isVideoTexture===!0&&n0.getTransfer(O.emissiveMap.colorSpace)===HJ,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===oJ,flipSided:O.side===lJ,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:t&&O.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(t&&O.extensions.multiDraw===!0||z0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return h0.vertexUv1s=X.has(1),h0.vertexUv2s=X.has(2),h0.vertexUv3s=X.has(3),X.clear(),h0}function E(O){let k=[];if(O.shaderID)k.push(O.shaderID);else k.push(O.customVertexShaderID),k.push(O.customFragmentShaderID);if(O.defines!==void 0)for(let g in O.defines)k.push(g),k.push(O.defines[g]);if(O.isRawShaderMaterial===!1)N(k,O),C(k,O),k.push(J.outputColorSpace);return k.push(O.customProgramCacheKey),k.join()}function N(O,k){O.push(k.precision),O.push(k.outputColorSpace),O.push(k.envMapMode),O.push(k.envMapCubeUVHeight),O.push(k.mapUv),O.push(k.alphaMapUv),O.push(k.lightMapUv),O.push(k.aoMapUv),O.push(k.bumpMapUv),O.push(k.normalMapUv),O.push(k.displacementMapUv),O.push(k.emissiveMapUv),O.push(k.metalnessMapUv),O.push(k.roughnessMapUv),O.push(k.anisotropyMapUv),O.push(k.clearcoatMapUv),O.push(k.clearcoatNormalMapUv),O.push(k.clearcoatRoughnessMapUv),O.push(k.iridescenceMapUv),O.push(k.iridescenceThicknessMapUv),O.push(k.sheenColorMapUv),O.push(k.sheenRoughnessMapUv),O.push(k.specularMapUv),O.push(k.specularColorMapUv),O.push(k.specularIntensityMapUv),O.push(k.transmissionMapUv),O.push(k.thicknessMapUv),O.push(k.combine),O.push(k.fogExp2),O.push(k.sizeAttenuation),O.push(k.morphTargetsCount),O.push(k.morphAttributeCount),O.push(k.numSunLights),O.push(k.numDirLights),O.push(k.numPointLights),O.push(k.numSpotLights),O.push(k.numSpotLightMaps),O.push(k.numHemiLights),O.push(k.numRectAreaLights),O.push(k.numSunLightShadows),O.push(k.numDirLightShadows),O.push(k.numPointLightShadows),O.push(k.numSpotLightShadows),O.push(k.numSpotLightShadowsWithMaps),O.push(k.numLightProbes),O.push(k.shadowMapType),O.push(k.toneMapping),O.push(k.numClippingPlanes),O.push(k.numClipIntersection),O.push(k.depthPacking)}function C(O,k){if(Y.disableAll(),k.instancing)Y.enable(0);if(k.instancingColor)Y.enable(1);if(k.instancingMorph)Y.enable(2);if(k.matcap)Y.enable(3);if(k.envMap)Y.enable(4);if(k.normalMapObjectSpace)Y.enable(5);if(k.normalMapTangentSpace)Y.enable(6);if(k.clearcoat)Y.enable(7);if(k.iridescence)Y.enable(8);if(k.alphaTest)Y.enable(9);if(k.vertexColors)Y.enable(10);if(k.vertexAlphas)Y.enable(11);if(k.vertexUv1s)Y.enable(12);if(k.vertexUv2s)Y.enable(13);if(k.vertexUv3s)Y.enable(14);if(k.vertexTangents)Y.enable(15);if(k.anisotropy)Y.enable(16);if(k.alphaHash)Y.enable(17);if(k.batching)Y.enable(18);if(k.dispersion)Y.enable(19);if(k.retroreflection)Y.enable(24);if(k.batchingColor)Y.enable(20);if(k.gradientMap)Y.enable(21);if(k.packedNormalMap)Y.enable(22);if(k.vertexNormals)Y.enable(23);if(O.push(Y.mask),Y.disableAll(),k.fog)Y.enable(0);if(k.useFog)Y.enable(1);if(k.flatShading)Y.enable(2);if(k.logarithmicDepthBuffer)Y.enable(3);if(k.reversedDepthBuffer)Y.enable(4);if(k.skinning)Y.enable(5);if(k.morphTargets)Y.enable(6);if(k.morphNormals)Y.enable(7);if(k.morphColors)Y.enable(8);if(k.premultipliedAlpha)Y.enable(9);if(k.shadowMapEnabled)Y.enable(10);if(k.doubleSided)Y.enable(11);if(k.flipSided)Y.enable(12);if(k.useDepthPacking)Y.enable(13);if(k.dithering)Y.enable(14);if(k.transmission)Y.enable(15);if(k.sheen)Y.enable(16);if(k.opaque)Y.enable(17);if(k.pointsUvs)Y.enable(18);if(k.decodeVideoTexture)Y.enable(19);if(k.decodeVideoTextureEmissive)Y.enable(20);if(k.alphaToCoverage)Y.enable(21);if(k.numLightProbeGrids>0)Y.enable(22);if(k.hasPositionAttribute)Y.enable(23);O.push(Y.mask)}function w(O){let k=F[O.type],g;if(k){let _=k9[k];g=sK.clone(_.uniforms)}else g=O.uniforms;return g}function V(O,k){let g=G.get(k);if(g!==void 0)++g.usedTimes;else g=new rq(J,k,O,K),U.push(g),G.set(k,g);return g}function I(O){if(--O.usedTimes===0){let k=U.indexOf(O);U[k]=U[U.length-1],U.pop(),G.delete(O.cacheKey),O.destroy()}}function A(O){H.remove(O)}function P(){H.dispose()}return{getParameters:z,getProgramCacheKey:E,getUniforms:w,acquireProgram:V,releaseProgram:I,releaseShaderCache:A,programs:U,dispose:P}}function QN(){let J=new WeakMap;function Q(Y){return J.has(Y)}function $(Y){let H=J.get(Y);if(H===void 0)H={},J.set(Y,H);return H}function Z(Y){J.delete(Y)}function K(Y,H,X){J.get(Y)[H]=X}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function $N(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function EW(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function OW(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function Y(q){let F=0;if(q.isInstancedMesh)F+=2;if(q.isSkinnedMesh)F+=1;return F}function H(q,F,R,z,E,N){let C=J[Q];if(C===void 0)C={id:q.id,object:q,geometry:F,material:R,materialVariant:Y(q),groupOrder:z,renderOrder:q.renderOrder,z:E,group:N},J[Q]=C;else C.id=q.id,C.object=q,C.geometry=F,C.material=R,C.materialVariant=Y(q),C.groupOrder=z,C.renderOrder=q.renderOrder,C.z=E,C.group=N;return Q++,C}function X(q,F,R,z,E,N,C){if(C.reversedDepth===!0)E=-E;let w=H(q,F,R,z,E,N);if(R.transmission>0)Z.push(w);else if(R.transparent===!0)K.push(w);else $.push(w)}function U(q,F,R,z,E,N){let C=H(q,F,R,z,E,N);if(R.transmission>0)Z.unshift(C);else if(R.transparent===!0)K.unshift(C);else $.unshift(C)}function G(q,F){if($.length>1)$.sort(q||$N);if(Z.length>1)Z.sort(F||EW);if(K.length>1)K.sort(F||EW)}function D(){for(let q=Q,F=J.length;q<F;q++){let R=J[q];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:X,unshift:U,finish:D,sort:G}}function ZN(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),Y;if(W===void 0)Y=new OW,J.set(Z,[Y]);else if(K>=W.length)Y=new OW,W.push(Y);else Y=W[K];return Y}function $(){J=new WeakMap}return{get:Q,dispose:$}}function KN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new j,color:new p0};break;case"SpotLight":$={position:new j,direction:new j,color:new p0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new j,color:new p0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new j,skyColor:new p0,groundColor:new p0};break;case"RectAreaLight":$={color:new p0,position:new j,halfWidth:new j,halfHeight:new j};break}return J[Q.id]=$,$}}}function WN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var YN=0;function HN(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function XN(J){let Q=new KN,$=WN(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new j);let K=new j,W=new WJ,Y=new WJ;function H(U){let G=0,D=0,q=0;for(let b=0;b<9;b++)Z.probe[b].set(0,0,0);let F=0,R=0,z=0,E=0,N=0,C=0,w=0,V=0,I=0,A=0,P=0,O=0,k=0,g=0;U.sort(HN);for(let b=0,c=U.length;b<c;b++){let T=U[b],d=T.color,a=T.intensity,l=T.distance,Q0=null;if(T.shadow&&T.shadow.map)if(T.shadow.map.texture.format===Q8)Q0=T.shadow.map.texture;else Q0=T.shadow.map.depthTexture||T.shadow.map.texture;if(T.isAmbientLight)G+=d.r*a,D+=d.g*a,q+=d.b*a;else if(T.isLightProbe){for(let n=0;n<9;n++)Z.probe[n].addScaledVector(T.sh.coefficients[n],a);g++}else if(T.isSunLight){let n=Q.get(T);if(n.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let r=T.shadow,J0=$.get(T);J0.shadowIntensity=r.intensity,J0.shadowBias=r.bias,J0.shadowNormalBias=r.normalBias,J0.shadowRadius=r.radius,J0.shadowMapSize.copy(r.mapSize).multiply(r.getFrameExtents()),Z.sunShadow[R]=J0,Z.sunShadowMap[R]=Q0;let S0=r.getViewportCount();for(let C0=0;C0<S0;C0++)Z.sunShadowMatrix[z+C0]=r.getMatrix(C0),Z.sunShadowCascade[z+C0]=r._cascadeData[C0];z+=S0,R++}Z.sun[F]=n,F++}else if(T.isDirectionalLight){let n=Q.get(T);if(n.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let r=T.shadow,J0=$.get(T);J0.shadowIntensity=r.intensity,J0.shadowBias=r.bias,J0.shadowNormalBias=r.normalBias,J0.shadowRadius=r.radius,J0.shadowMapSize=r.mapSize,Z.directionalShadow[E]=J0,Z.directionalShadowMap[E]=Q0,Z.directionalShadowMatrix[E]=T.shadow.matrix,I++}Z.directional[E]=n,E++}else if(T.isSpotLight){let n=Q.get(T);n.position.setFromMatrixPosition(T.matrixWorld),n.color.copy(d).multiplyScalar(a),n.distance=l,n.coneCos=Math.cos(T.angle),n.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),n.decay=T.decay,Z.spot[C]=n;let r=T.shadow;if(T.map){if(Z.spotLightMap[O]=T.map,O++,r.updateMatrices(T),T.castShadow)k++}if(Z.spotLightMatrix[C]=r.matrix,T.castShadow){let J0=$.get(T);J0.shadowIntensity=r.intensity,J0.shadowBias=r.bias,J0.shadowNormalBias=r.normalBias,J0.shadowRadius=r.radius,J0.shadowMapSize=r.mapSize,Z.spotShadow[C]=J0,Z.spotShadowMap[C]=Q0,P++}C++}else if(T.isRectAreaLight){let n=Q.get(T);n.color.copy(d).multiplyScalar(a),n.halfWidth.set(T.width*0.5,0,0),n.halfHeight.set(0,T.height*0.5,0),Z.rectArea[w]=n,w++}else if(T.isPointLight){let n=Q.get(T);if(n.color.copy(T.color).multiplyScalar(T.intensity),n.distance=T.distance,n.decay=T.decay,T.castShadow){let r=T.shadow,J0=$.get(T);J0.shadowIntensity=r.intensity,J0.shadowBias=r.bias,J0.shadowNormalBias=r.normalBias,J0.shadowRadius=r.radius,J0.shadowMapSize=r.mapSize,J0.shadowCameraNear=r.camera.near,J0.shadowCameraFar=r.camera.far,Z.pointShadow[N]=J0,Z.pointShadowMap[N]=Q0,Z.pointShadowMatrix[N]=T.shadow.matrix,A++}Z.point[N]=n,N++}else if(T.isHemisphereLight){let n=Q.get(T);n.skyColor.copy(T.color).multiplyScalar(a),n.groundColor.copy(T.groundColor).multiplyScalar(a),Z.hemi[V]=n,V++}}if(w>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=N0.LTC_FLOAT_1,Z.rectAreaLTC2=N0.LTC_FLOAT_2;else Z.rectAreaLTC1=N0.LTC_HALF_1,Z.rectAreaLTC2=N0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=D,Z.ambient[2]=q;let _=Z.hash;if(_.sunLength!==F||_.directionalLength!==E||_.pointLength!==N||_.spotLength!==C||_.rectAreaLength!==w||_.hemiLength!==V||_.numSunShadows!==R||_.numDirectionalShadows!==I||_.numPointShadows!==A||_.numSpotShadows!==P||_.numSpotMaps!==O||_.numLightProbes!==g)Z.sun.length=F,Z.directional.length=E,Z.spot.length=C,Z.rectArea.length=w,Z.point.length=N,Z.hemi.length=V,Z.sunShadow.length=R,Z.sunShadowMap.length=R,Z.sunShadowMatrix.length=z,Z.sunShadowCascade.length=z,Z.directionalShadow.length=I,Z.directionalShadowMap.length=I,Z.directionalShadowMatrix.length=I,Z.pointShadow.length=A,Z.pointShadowMap.length=A,Z.pointShadowMatrix.length=A,Z.spotShadow.length=P,Z.spotShadowMap.length=P,Z.spotLightMatrix.length=P+O-k,Z.spotLightMap.length=O,Z.numSpotLightShadowsWithMaps=k,Z.numLightProbes=g,_.sunLength=F,_.directionalLength=E,_.pointLength=N,_.spotLength=C,_.rectAreaLength=w,_.hemiLength=V,_.numSunShadows=R,_.numDirectionalShadows=I,_.numPointShadows=A,_.numSpotShadows=P,_.numSpotMaps=O,_.numLightProbes=g,Z.version=YN++}function X(U,G){let D=0,q=0,F=0,R=0,z=0,E=0,N=G.matrixWorldInverse;for(let C=0,w=U.length;C<w;C++){let V=U[C];if(V.isSunLight){let I=Z.sun[D];I.direction.setFromMatrixPosition(V.matrixWorld),I.direction.transformDirection(N),D++}else if(V.isDirectionalLight){let I=Z.directional[q];I.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),I.direction.sub(K),I.direction.transformDirection(N),q++}else if(V.isSpotLight){let I=Z.spot[R];I.position.setFromMatrixPosition(V.matrixWorld),I.position.applyMatrix4(N),I.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),I.direction.sub(K),I.direction.transformDirection(N),R++}else if(V.isRectAreaLight){let I=Z.rectArea[z];I.position.setFromMatrixPosition(V.matrixWorld),I.position.applyMatrix4(N),Y.identity(),W.copy(V.matrixWorld),W.premultiply(N),Y.extractRotation(W),I.halfWidth.set(V.width*0.5,0,0),I.halfHeight.set(0,V.height*0.5,0),I.halfWidth.applyMatrix4(Y),I.halfHeight.applyMatrix4(Y),z++}else if(V.isPointLight){let I=Z.point[F];I.position.setFromMatrixPosition(V.matrixWorld),I.position.applyMatrix4(N),F++}else if(V.isHemisphereLight){let I=Z.hemi[E];I.direction.setFromMatrixPosition(V.matrixWorld),I.direction.transformDirection(N),E++}}}return{setup:H,setupView:X,state:Z}}function RW(J){let Q=new XN(J),$=[],Z=[],K=[];function W(q){D.camera=q,$.length=0,Z.length=0,K.length=0}function Y(q){$.push(q)}function H(q){Z.push(q)}function X(q){K.push(q)}function U(){Q.setup($)}function G(q){Q.setupView($,q)}let D={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:D,setupLights:U,setupLightsView:G,pushLight:Y,pushShadow:H,pushLightProbeGrid:X}}function UN(J){let Q=new WeakMap;function $(K,W=0){let Y=Q.get(K),H;if(Y===void 0)H=new RW(J),Q.set(K,[H]);else if(W>=Y.length)H=new RW(J),Y.push(H);else H=Y[W];return H}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var qN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NN=`uniform sampler2D shadow_pass;
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
}`,GN=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],FN=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],MW=new WJ,V7=new j,l$=new j;function DN(J,Q,$){let Z=new E7,K=new I0,W=new I0,Y=new DJ,H=new M$,X=new L$,U={},G=$.maxTextureSize,D={[p9]:lJ,[lJ]:p9,[oJ]:oJ},q=new $9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new I0},radius:{value:4}},vertexShader:qN,fragmentShader:NN}),F=q.clone();F.defines.HORIZONTAL_PASS=1;let R=new xJ;R.setAttribute("position",new X9(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let z=new _0(R,q),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a9;let N=this.type;this.render=function(A,P,O){if(E.enabled===!1)return;if(E.autoUpdate===!1&&E.needsUpdate===!1)return;if(A.length===0)return;if(this.type===oZ)T0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=a9;let k=J.getRenderTarget(),g=J.getActiveCubeFace(),_=J.getActiveMipmapLevel(),b=J.state;if(b.setBlending(O9),b.buffers.depth.getReversed()===!0)b.buffers.color.setClear(0,0,0,0);else b.buffers.color.setClear(1,1,1,1);b.buffers.depth.setTest(!0),b.setScissorTest(!1);let c=N!==this.type;if(c)P.traverse(function(T){if(T.material)if(Array.isArray(T.material))T.material.forEach((d)=>d.needsUpdate=!0);else T.material.needsUpdate=!0});for(let T=0,d=A.length;T<d;T++){let a=A[T],l=a.shadow;if(l===void 0){T0("WebGLShadowMap:",a,"has no shadow.");continue}if(l.autoUpdate===!1&&l.needsUpdate===!1)continue;K.copy(l.mapSize);let Q0=l.getFrameExtents();if(K.multiply(Q0),W.copy(l.mapSize),K.x>G||K.y>G){if(K.x>G)W.x=Math.floor(G/Q0.x),K.x=W.x*Q0.x,l.mapSize.x=W.x;if(K.y>G)W.y=Math.floor(G/Q0.y),K.y=W.y*Q0.y,l.mapSize.y=W.y}let n=J.state.buffers.depth.getReversed();if(l.camera._reversedDepth=n,l.map===null||c===!0){if(l.map!==null){if(l.map.depthTexture!==null)l.map.depthTexture.dispose(),l.map.depthTexture=null;l.map.dispose()}if(this.type===S8){if(a.isPointLight){T0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}l.map=new aJ(K.x,K.y,{format:Q8,type:R9,minFilter:dJ,magFilter:dJ,generateMipmaps:!1}),l.map.texture.name=a.name+".shadowMap",l.map.depthTexture=new W8(K.x,K.y,S9),l.map.depthTexture.name=a.name+".shadowMapDepth",l.map.depthTexture.format=e9,l.map.depthTexture.compareFunction=null,l.map.depthTexture.minFilter=m9,l.map.depthTexture.magFilter=m9}else{if(a.isPointLight)l.map=new n$(K.x),l.map.depthTexture=new E$(K.x,l9);else l.map=new aJ(K.x,K.y),l.map.depthTexture=new W8(K.x,K.y,l9);if(l.map.depthTexture.name=a.name+".shadowMap",l.map.depthTexture.format=e9,this.type===a9)l.map.depthTexture.compareFunction=n?H6:Y6,l.map.depthTexture.minFilter=dJ,l.map.depthTexture.magFilter=dJ;else l.map.depthTexture.compareFunction=null,l.map.depthTexture.minFilter=m9,l.map.depthTexture.magFilter=m9}l.camera.updateProjectionMatrix()}if(l.map.isWebGLCubeRenderTarget!==!0&&(l.map.width!==K.x||l.map.height!==K.y))l.map.setSize(K.x,K.y);let r=l.map.isWebGLCubeRenderTarget?6:l.getViewportCount();if(a.isPointLight!==!0)l.updateMatrices(a,O);for(let J0=0;J0<r;J0++){let S0=l.getCamera(J0);if(a.isPointLight){let{camera:C0,matrix:XJ}=l,m0=a.distance||C0.far;if(m0!==C0.far)C0.far=m0,C0.updateProjectionMatrix();V7.setFromMatrixPosition(a.matrixWorld),C0.position.copy(V7),l$.copy(C0.position),l$.add(GN[J0]),C0.up.copy(FN[J0]),C0.lookAt(l$),C0.updateMatrixWorld(),XJ.makeTranslation(-V7.x,-V7.y,-V7.z),MW.multiplyMatrices(C0.projectionMatrix,C0.matrixWorldInverse),l._frustum.setFromProjectionMatrix(MW,C0.coordinateSystem,C0.reversedDepth)}if(l.map.isWebGLCubeRenderTarget)J.setRenderTarget(l.map,J0),J.clear();else{if(J0===0)J.setRenderTarget(l.map),J.clear();let C0=l.getViewport(J0);Y.set(W.x*C0.x,W.y*C0.y,W.x*C0.z,W.y*C0.w),b.viewport(Y)}Z=l.getFrustum(J0),V(P,O,S0,a,this.type)}if(l.isPointLightShadow!==!0&&this.type===S8)C(l,O);l.needsUpdate=!1}N=this.type,E.needsUpdate=!1,J.setRenderTarget(k,g,_)};function C(A,P){let O=Q.update(z);if(q.defines.VSM_SAMPLES!==A.blurSamples)q.defines.VSM_SAMPLES=A.blurSamples,F.defines.VSM_SAMPLES=A.blurSamples,q.needsUpdate=!0,F.needsUpdate=!0;if(A.mapPass===null)A.mapPass=new aJ(K.x,K.y,{format:Q8,type:R9});else if(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)A.mapPass.setSize(A.map.width,A.map.height);q.uniforms.shadow_pass.value=A.map.depthTexture,q.uniforms.resolution.value.set(A.map.width,A.map.height),q.uniforms.radius.value=A.radius,J.setRenderTarget(A.mapPass),J.clear(),J.renderBufferDirect(P,null,O,q,z,null),F.uniforms.shadow_pass.value=A.mapPass.texture,F.uniforms.resolution.value.set(A.map.width,A.map.height),F.uniforms.radius.value=A.radius,J.setRenderTarget(A.map),J.clear(),J.renderBufferDirect(P,null,O,F,z,null)}function w(A,P,O,k){let g=null,_=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(_!==void 0)g=_;else if(g=O.isPointLight===!0?X:H,J.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let b=g.uuid,c=P.uuid,T=U[b];if(T===void 0)T={},U[b]=T;let d=T[c];if(d===void 0)d=g.clone(),T[c]=d,P.addEventListener("dispose",I);g=d}if(g.visible=P.visible,g.wireframe=P.wireframe,k===S8)g.side=P.shadowSide!==null?P.shadowSide:P.side;else g.side=P.shadowSide!==null?P.shadowSide:D[P.side];if(g.alphaMap=P.alphaMap,g.alphaTest=P.alphaToCoverage===!0?0.5:P.alphaTest,g.map=P.map,g.clipShadows=P.clipShadows,g.clippingPlanes=P.clippingPlanes,g.clipIntersection=P.clipIntersection,g.displacementMap=P.displacementMap,g.displacementScale=P.displacementScale,g.displacementBias=P.displacementBias,g.wireframeLinewidth=P.wireframeLinewidth,g.linewidth=P.linewidth,O.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let b=J.properties.get(g);b.light=O}return g}function V(A,P,O,k,g){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)){if((A.castShadow||A.receiveShadow&&g===S8)&&(!A.frustumCulled||A.intersectsFrustum(Z))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let c=Q.update(A),T=A.material;if(Array.isArray(T)){let d=c.groups;for(let a=0,l=d.length;a<l;a++){let Q0=d[a],n=T[Q0.materialIndex];if(n&&n.visible){let r=w(A,n,k,g);A.onBeforeShadow(J,A,P,O,c,r,Q0),J.renderBufferDirect(O,null,c,r,A,Q0),A.onAfterShadow(J,A,P,O,c,r,Q0)}}}else if(T.visible){let d=w(A,T,k,g);A.onBeforeShadow(J,A,P,O,c,d,null),J.renderBufferDirect(O,null,c,d,A,null),A.onAfterShadow(J,A,P,O,c,d,null)}}}let b=A.children;for(let c=0,T=b.length;c<T;c++)V(b[c],P,O,k,g)}function I(A){A.target.removeEventListener("dispose",I);for(let O in U){let k=U[O],g=A.target.uuid;if(g in k)k[g].dispose(),delete k[g]}}}function EN(J,Q){function $(){let v=!1,H0=new DJ,i=null,X0=new DJ(0,0,0,0);return{setMask:function(O0){if(i!==O0&&!v)J.colorMask(O0,O0,O0,O0),i=O0},setLocked:function(O0){v=O0},setClear:function(O0,t,G0,h0,UJ){if(UJ===!0)O0*=h0,t*=h0,G0*=h0;if(H0.set(O0,t,G0,h0),X0.equals(H0)===!1)J.clearColor(O0,t,G0,h0),X0.copy(H0)},reset:function(){v=!1,i=null,X0.set(-1,0,0,0)}}}function Z(){let v=!1,H0=!1,i=null,X0=null,O0=null;return{setReversed:function(t){if(H0!==t){let G0=Q.get("EXT_clip_control");if(t)G0.clipControlEXT(G0.LOWER_LEFT_EXT,G0.ZERO_TO_ONE_EXT);else G0.clipControlEXT(G0.LOWER_LEFT_EXT,G0.NEGATIVE_ONE_TO_ONE_EXT);H0=t;let h0=O0;O0=null,this.setClear(h0)}},getReversed:function(){return H0},setTest:function(t){if(t)W0(J.DEPTH_TEST);else A0(J.DEPTH_TEST)},setMask:function(t){if(i!==t&&!v)J.depthMask(t),i=t},setFunc:function(t){if(H0)t=cK[t];if(X0!==t){switch(t){case OK:J.depthFunc(J.NEVER);break;case RK:J.depthFunc(J.ALWAYS);break;case MK:J.depthFunc(J.LESS);break;case FQ:J.depthFunc(J.LEQUAL);break;case LK:J.depthFunc(J.EQUAL);break;case VK:J.depthFunc(J.GEQUAL);break;case kK:J.depthFunc(J.GREATER);break;case BK:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}X0=t}},setLocked:function(t){v=t},setClear:function(t){if(O0!==t){if(O0=t,H0)t=1-t;J.clearDepth(t)}},reset:function(){v=!1,i=null,X0=null,O0=null,H0=!1}}}function K(){let v=!1,H0=null,i=null,X0=null,O0=null,t=null,G0=null,h0=null,UJ=null;return{setTest:function(t0){if(!v)if(t0)W0(J.STENCIL_TEST);else A0(J.STENCIL_TEST)},setMask:function(t0){if(H0!==t0&&!v)J.stencilMask(t0),H0=t0},setFunc:function(t0,F9,I9){if(i!==t0||X0!==F9||O0!==I9)J.stencilFunc(t0,F9,I9),i=t0,X0=F9,O0=I9},setOp:function(t0,F9,I9){if(t!==t0||G0!==F9||h0!==I9)J.stencilOp(t0,F9,I9),t=t0,G0=F9,h0=I9},setLocked:function(t0){v=t0},setClear:function(t0){if(UJ!==t0)J.clearStencil(t0),UJ=t0},reset:function(){v=!1,H0=null,i=null,X0=null,O0=null,t=null,G0=null,h0=null,UJ=null}}}let W=new $,Y=new Z,H=new K,X=new WeakMap,U=new WeakMap,G={},D={},q={},F=new WeakMap,R=[],z=null,E=!1,N=null,C=null,w=null,V=null,I=null,A=null,P=null,O=new p0(0,0,0),k=0,g=!1,_=null,b=null,c=null,T=null,d=null,a=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),l=!1,Q0=0,n=J.getParameter(J.VERSION);if(n.indexOf("WebGL")!==-1)Q0=parseFloat(/^WebGL (\d)/.exec(n)[1]),l=Q0>=1;else if(n.indexOf("OpenGL ES")!==-1)Q0=parseFloat(/^OpenGL ES (\d)/.exec(n)[1]),l=Q0>=2;let r=null,J0={},S0=J.getParameter(J.SCISSOR_BOX),C0=J.getParameter(J.VIEWPORT),XJ=new DJ().fromArray(S0),m0=new DJ().fromArray(C0);function s(v,H0,i,X0){let O0=new Uint8Array(4),t=J.createTexture();J.bindTexture(v,t),J.texParameteri(v,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(v,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let G0=0;G0<i;G0++)if(v===J.TEXTURE_3D||v===J.TEXTURE_2D_ARRAY)J.texImage3D(H0,0,J.RGBA,1,1,X0,0,J.RGBA,J.UNSIGNED_BYTE,O0);else J.texImage2D(H0+G0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,O0);return t}let $0={};$0[J.TEXTURE_2D]=s(J.TEXTURE_2D,J.TEXTURE_2D,1),$0[J.TEXTURE_CUBE_MAP]=s(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),$0[J.TEXTURE_2D_ARRAY]=s(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),$0[J.TEXTURE_3D]=s(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),Y.setClear(1),H.setClear(0),W0(J.DEPTH_TEST),Y.setFunc(FQ),wJ(!1),GJ(UQ),W0(J.CULL_FACE),QJ(O9);function W0(v){if(G[v]!==!0)J.enable(v),G[v]=!0}function A0(v){if(G[v]!==!1)J.disable(v),G[v]=!1}function j0(v,H0){if(q[v]!==H0){if(J.bindFramebuffer(v,H0),q[v]=H0,v===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=H0;if(v===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=H0;return!0}return!1}function z0(v,H0){let i=R,X0=!1;if(v){if(i=F.get(H0),i===void 0)i=[],F.set(H0,i);let O0=v.textures;if(i.length!==O0.length||i[0]!==J.COLOR_ATTACHMENT0){for(let t=0,G0=O0.length;t<G0;t++)i[t]=J.COLOR_ATTACHMENT0+t;i.length=O0.length,X0=!0}}else if(i[0]!==J.BACK)i[0]=J.BACK,X0=!0;if(X0)J.drawBuffers(i)}function VJ(v){if(z!==v)return J.useProgram(v),z=v,!0;return!1}let c0={[j8]:J.FUNC_ADD,[rZ]:J.FUNC_SUBTRACT,[tZ]:J.FUNC_REVERSE_SUBTRACT};c0[eZ]=J.MIN,c0[JK]=J.MAX;let s0={[QK]:J.ZERO,[$K]:J.ONE,[ZK]:J.SRC_COLOR,[WK]:J.SRC_ALPHA,[NK]:J.SRC_ALPHA_SATURATE,[UK]:J.DST_COLOR,[HK]:J.DST_ALPHA,[KK]:J.ONE_MINUS_SRC_COLOR,[YK]:J.ONE_MINUS_SRC_ALPHA,[qK]:J.ONE_MINUS_DST_COLOR,[XK]:J.ONE_MINUS_DST_ALPHA,[GK]:J.CONSTANT_COLOR,[FK]:J.ONE_MINUS_CONSTANT_COLOR,[DK]:J.CONSTANT_ALPHA,[EK]:J.ONE_MINUS_CONSTANT_ALPHA};function QJ(v,H0,i,X0,O0,t,G0,h0,UJ,t0){if(v===O9){if(E===!0)A0(J.BLEND),E=!1;return}if(E===!1)W0(J.BLEND),E=!0;if(v!==aZ){if(v!==N||t0!==g){if(C!==j8||I!==j8)J.blendEquation(J.FUNC_ADD),C=j8,I=j8;if(t0)switch(v){case W7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case qQ:J.blendFunc(J.ONE,J.ONE);break;case NQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case GQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:y0("WebGLState: Invalid blending: ",v);break}else switch(v){case W7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case qQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case NQ:y0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case GQ:y0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:y0("WebGLState: Invalid blending: ",v);break}w=null,V=null,A=null,P=null,O.set(0,0,0),k=0,N=v,g=t0}return}if(O0=O0||H0,t=t||i,G0=G0||X0,H0!==C||O0!==I)J.blendEquationSeparate(c0[H0],c0[O0]),C=H0,I=O0;if(i!==w||X0!==V||t!==A||G0!==P)J.blendFuncSeparate(s0[i],s0[X0],s0[t],s0[G0]),w=i,V=X0,A=t,P=G0;if(h0.equals(O)===!1||UJ!==k)J.blendColor(h0.r,h0.g,h0.b,UJ),O.copy(h0),k=UJ;N=v,g=!1}function i0(v,H0){v.side===oJ?A0(J.CULL_FACE):W0(J.CULL_FACE);let i=v.side===lJ;if(H0)i=!i;wJ(i),v.blending===W7&&v.transparent===!1?QJ(O9):QJ(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),Y.setFunc(v.depthFunc),Y.setTest(v.depthTest),Y.setMask(v.depthWrite),W.setMask(v.colorWrite);let X0=v.stencilWrite;if(H.setTest(X0),X0)H.setMask(v.stencilWriteMask),H.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),H.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass);kJ(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?W0(J.SAMPLE_ALPHA_TO_COVERAGE):A0(J.SAMPLE_ALPHA_TO_COVERAGE)}function wJ(v){if(_!==v){if(v)J.frontFace(J.CW);else J.frontFace(J.CCW);_=v}}function GJ(v){if(v!==sZ){if(W0(J.CULL_FACE),v!==b)if(v===UQ)J.cullFace(J.BACK);else if(v===iZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else A0(J.CULL_FACE);b=v}function pJ(v){if(v!==c){if(l)J.lineWidth(v);c=v}}function kJ(v,H0,i){if(v){if(W0(J.POLYGON_OFFSET_FILL),T!==H0||d!==i){if(T=H0,d=i,Y.getReversed())H0=-H0;J.polygonOffset(H0,i)}}else A0(J.POLYGON_OFFSET_FILL)}function BJ(v){if(v)W0(J.SCISSOR_TEST);else A0(J.SCISSOR_TEST)}function y(v){if(v===void 0)v=J.TEXTURE0+a-1;if(r!==v)J.activeTexture(v),r=v}function mJ(v,H0,i){if(i===void 0)if(r===null)i=J.TEXTURE0+a-1;else i=r;let X0=J0[i];if(X0===void 0)X0={type:void 0,texture:void 0},J0[i]=X0;if(X0.type!==v||X0.texture!==H0){if(r!==i)J.activeTexture(i),r=i;J.bindTexture(v,H0||$0[v]),X0.type=v,X0.texture=H0}}function r0(){let v=J0[r];if(v!==void 0&&v.type!==void 0)J.bindTexture(v.type,null),v.type=void 0,v.texture=void 0}function EJ(){try{J.compressedTexImage2D(...arguments)}catch(v){y0("WebGLState:",v)}}function B(){try{J.compressedTexImage3D(...arguments)}catch(v){y0("WebGLState:",v)}}function M(){try{J.texSubImage2D(...arguments)}catch(v){y0("WebGLState:",v)}}function S(){try{J.texSubImage3D(...arguments)}catch(v){y0("WebGLState:",v)}}function p(){try{J.compressedTexSubImage2D(...arguments)}catch(v){y0("WebGLState:",v)}}function e(){try{J.compressedTexSubImage3D(...arguments)}catch(v){y0("WebGLState:",v)}}function Y0(){try{J.texStorage2D(...arguments)}catch(v){y0("WebGLState:",v)}}function U0(){try{J.texStorage3D(...arguments)}catch(v){y0("WebGLState:",v)}}function u(){try{J.texImage2D(...arguments)}catch(v){y0("WebGLState:",v)}}function o(){try{J.texImage3D(...arguments)}catch(v){y0("WebGLState:",v)}}function E0(v){if(D[v]!==void 0)return D[v];else return J.getParameter(v)}function B0(v,H0){if(D[v]!==H0)J.pixelStorei(v,H0),D[v]=H0}function q0(v){if(XJ.equals(v)===!1)J.scissor(v.x,v.y,v.z,v.w),XJ.copy(v)}function Z0(v){if(m0.equals(v)===!1)J.viewport(v.x,v.y,v.z,v.w),m0.copy(v)}function P0(v,H0){let i=U.get(H0);if(i===void 0)i=new WeakMap,U.set(H0,i);let X0=i.get(v);if(X0===void 0)X0=J.getUniformBlockIndex(H0,v.name),i.set(v,X0)}function w0(v,H0){let X0=U.get(H0).get(v);if(X.get(H0)!==X0)J.uniformBlockBinding(H0,X0,v.__bindingPointIndex),X.set(H0,X0)}function a0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},D={},r=null,J0={},q={},F=new WeakMap,R=[],z=null,E=!1,N=null,C=null,w=null,V=null,I=null,A=null,P=null,O=new p0(0,0,0),k=0,g=!1,_=null,b=null,c=null,T=null,d=null,XJ.set(0,0,J.canvas.width,J.canvas.height),m0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),Y.reset(),H.reset()}return{buffers:{color:W,depth:Y,stencil:H},enable:W0,disable:A0,bindFramebuffer:j0,drawBuffers:z0,useProgram:VJ,setBlending:QJ,setMaterial:i0,setFlipSided:wJ,setCullFace:GJ,setLineWidth:pJ,setPolygonOffset:kJ,setScissorTest:BJ,activeTexture:y,bindTexture:mJ,unbindTexture:r0,compressedTexImage2D:EJ,compressedTexImage3D:B,texImage2D:u,texImage3D:o,pixelStorei:B0,getParameter:E0,updateUBOMapping:P0,uniformBlockBinding:w0,texStorage2D:Y0,texStorage3D:U0,texSubImage2D:M,texSubImage3D:S,compressedTexSubImage2D:p,compressedTexSubImage3D:e,scissor:q0,viewport:Z0,reset:a0}}function ON(J,Q,$,Z,K,W,Y){let H=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new I0,G=new WeakMap,D=new Set,q,F=new WeakMap,R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function z(B,M){return R?new OffscreenCanvas(B,M):K7("canvas")}function E(B,M,S){let p=1,e=EJ(B);if(e.width>S||e.height>S)p=S/Math.max(e.width,e.height);if(p<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let Y0=Math.floor(p*e.width),U0=Math.floor(p*e.height);if(q===void 0)q=z(Y0,U0);let u=M?z(Y0,U0):q;return u.width=Y0,u.height=U0,u.getContext("2d").drawImage(B,0,0,Y0,U0),T0("WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+Y0+"x"+U0+")."),u}else{if("data"in B)T0("WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+").");return B}return B}function N(B){return B.generateMipmaps}function C(B){J.generateMipmap(B)}function w(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(B,M,S,p,e,Y0=!1){if(B!==null){if(J[B]!==void 0)return J[B];T0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let U0;if(p){if(U0=Q.get("EXT_texture_norm16"),!U0)T0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let u=M;if(M===J.RED){if(S===J.FLOAT)u=J.R32F;if(S===J.HALF_FLOAT)u=J.R16F;if(S===J.UNSIGNED_BYTE)u=J.R8;if(S===J.UNSIGNED_SHORT&&U0)u=U0.R16_EXT;if(S===J.SHORT&&U0)u=U0.R16_SNORM_EXT}if(M===J.RED_INTEGER){if(S===J.UNSIGNED_BYTE)u=J.R8UI;if(S===J.UNSIGNED_SHORT)u=J.R16UI;if(S===J.UNSIGNED_INT)u=J.R32UI;if(S===J.BYTE)u=J.R8I;if(S===J.SHORT)u=J.R16I;if(S===J.INT)u=J.R32I}if(M===J.RG){if(S===J.FLOAT)u=J.RG32F;if(S===J.HALF_FLOAT)u=J.RG16F;if(S===J.UNSIGNED_BYTE)u=J.RG8;if(S===J.UNSIGNED_SHORT&&U0)u=U0.RG16_EXT;if(S===J.SHORT&&U0)u=U0.RG16_SNORM_EXT}if(M===J.RG_INTEGER){if(S===J.UNSIGNED_BYTE)u=J.RG8UI;if(S===J.UNSIGNED_SHORT)u=J.RG16UI;if(S===J.UNSIGNED_INT)u=J.RG32UI;if(S===J.BYTE)u=J.RG8I;if(S===J.SHORT)u=J.RG16I;if(S===J.INT)u=J.RG32I}if(M===J.RGB_INTEGER){if(S===J.UNSIGNED_BYTE)u=J.RGB8UI;if(S===J.UNSIGNED_SHORT)u=J.RGB16UI;if(S===J.UNSIGNED_INT)u=J.RGB32UI;if(S===J.BYTE)u=J.RGB8I;if(S===J.SHORT)u=J.RGB16I;if(S===J.INT)u=J.RGB32I}if(M===J.RGBA_INTEGER){if(S===J.UNSIGNED_BYTE)u=J.RGBA8UI;if(S===J.UNSIGNED_SHORT)u=J.RGBA16UI;if(S===J.UNSIGNED_INT)u=J.RGBA32UI;if(S===J.BYTE)u=J.RGBA8I;if(S===J.SHORT)u=J.RGBA16I;if(S===J.INT)u=J.RGBA32I}if(M===J.RGB){if(S===J.UNSIGNED_SHORT&&U0)u=U0.RGB16_EXT;if(S===J.SHORT&&U0)u=U0.RGB16_SNORM_EXT;if(S===J.UNSIGNED_INT_5_9_9_9_REV)u=J.RGB9_E5;if(S===J.UNSIGNED_INT_10F_11F_11F_REV)u=J.R11F_G11F_B10F}if(M===J.RGBA){let o=Y0?W$:n0.getTransfer(e);if(S===J.FLOAT)u=J.RGBA32F;if(S===J.HALF_FLOAT)u=J.RGBA16F;if(S===J.UNSIGNED_BYTE)u=o===HJ?J.SRGB8_ALPHA8:J.RGBA8;if(S===J.UNSIGNED_SHORT&&U0)u=U0.RGBA16_EXT;if(S===J.SHORT&&U0)u=U0.RGBA16_SNORM_EXT;if(S===J.UNSIGNED_SHORT_4_4_4_4)u=J.RGBA4;if(S===J.UNSIGNED_SHORT_5_5_5_1)u=J.RGB5_A1}if(u===J.R16F||u===J.R32F||u===J.RG16F||u===J.RG32F||u===J.RGBA16F||u===J.RGBA32F)Q.get("EXT_color_buffer_float");return u}function I(B,M){let S;if(B){if(M===null||M===l9||M===f8)S=J.DEPTH24_STENCIL8;else if(M===S9)S=J.DEPTH32F_STENCIL8;else if(M===U7)S=J.DEPTH24_STENCIL8,T0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===l9||M===f8)S=J.DEPTH_COMPONENT24;else if(M===S9)S=J.DEPTH_COMPONENT32F;else if(M===U7)S=J.DEPTH_COMPONENT16;return S}function A(B,M){if(N(B)===!0||B.isFramebufferTexture&&B.minFilter!==m9&&B.minFilter!==dJ)return Math.log2(Math.max(M.width,M.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return M.mipmaps.length;else return 1}function P(B){let M=B.target;if(M.removeEventListener("dispose",P),k(M),M.isVideoTexture)G.delete(M);if(M.isHTMLTexture)D.delete(M)}function O(B){let M=B.target;M.removeEventListener("dispose",O),_(M)}function k(B){let M=Z.get(B);if(M.__webglInit===void 0)return;let S=B.source,p=F.get(S);if(p){let e=p[M.__cacheKey];if(e.usedTimes--,e.usedTimes===0)g(B);if(Object.keys(p).length===0)F.delete(S)}Z.remove(B)}function g(B){let M=Z.get(B);J.deleteTexture(M.__webglTexture);let S=B.source,p=F.get(S);delete p[M.__cacheKey],Y.memory.textures--}function _(B){let M=Z.get(B);if(B.depthTexture)B.depthTexture.dispose(),Z.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let p=0;p<6;p++){if(Array.isArray(M.__webglFramebuffer[p]))for(let e=0;e<M.__webglFramebuffer[p].length;e++)J.deleteFramebuffer(M.__webglFramebuffer[p][e]);else J.deleteFramebuffer(M.__webglFramebuffer[p]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[p])}else{if(Array.isArray(M.__webglFramebuffer))for(let p=0;p<M.__webglFramebuffer.length;p++)J.deleteFramebuffer(M.__webglFramebuffer[p]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let p=0;p<M.__webglColorRenderbuffer.length;p++)if(M.__webglColorRenderbuffer[p])J.deleteRenderbuffer(M.__webglColorRenderbuffer[p])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let S=B.textures;for(let p=0,e=S.length;p<e;p++){let Y0=Z.get(S[p]);if(Y0.__webglTexture)J.deleteTexture(Y0.__webglTexture),Y.memory.textures--;Z.remove(S[p])}Z.remove(B)}let b=0;function c(){b=0}function T(){return b}function d(B){b=B}function a(){let B=b;if(B>=K.maxTextures)T0("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+K.maxTextures);return b+=1,B}function l(B){let M=[];return M.push(B.wrapS),M.push(B.wrapT),M.push(B.wrapR||0),M.push(B.magFilter),M.push(B.minFilter),M.push(B.anisotropy),M.push(B.internalFormat),M.push(B.format),M.push(B.type),M.push(B.generateMipmaps),M.push(B.premultiplyAlpha),M.push(B.flipY),M.push(B.unpackAlignment),M.push(B.colorSpace),M.join()}function Q0(B,M){let S=Z.get(B);if(B.isVideoTexture)mJ(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&S.__version!==B.version){let p=B.image;if(p===null)T0("WebGLRenderer: Texture marked for update but no image data found.");else if(p.complete===!1)T0("WebGLRenderer: Texture marked for update but image is incomplete");else{A0(S,B,M);return}}else if(B.isExternalTexture)S.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,S.__webglTexture,J.TEXTURE0+M)}function n(B,M){let S=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&S.__version!==B.version){A0(S,B,M);return}else if(B.isExternalTexture)S.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,S.__webglTexture,J.TEXTURE0+M)}function r(B,M){let S=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&S.__version!==B.version){A0(S,B,M);return}$.bindTexture(J.TEXTURE_3D,S.__webglTexture,J.TEXTURE0+M)}function J0(B,M){let S=Z.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&S.__version!==B.version){j0(S,B,M);return}$.bindTexture(J.TEXTURE_CUBE_MAP,S.__webglTexture,J.TEXTURE0+M)}let S0={[H7]:J.REPEAT,[r7]:J.CLAMP_TO_EDGE,[CK]:J.MIRRORED_REPEAT},C0={[m9]:J.NEAREST,[AK]:J.NEAREST_MIPMAP_NEAREST,[X7]:J.NEAREST_MIPMAP_LINEAR,[dJ]:J.LINEAR,[t7]:J.LINEAR_MIPMAP_NEAREST,[t9]:J.LINEAR_MIPMAP_LINEAR},XJ={[bK]:J.NEVER,[mK]:J.ALWAYS,[hK]:J.LESS,[Y6]:J.LEQUAL,[xK]:J.EQUAL,[H6]:J.GEQUAL,[gK]:J.GREATER,[pK]:J.NOTEQUAL};function m0(B,M){if(M.type===S9&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===dJ||M.magFilter===t7||M.magFilter===X7||M.magFilter===t9||M.minFilter===dJ||M.minFilter===t7||M.minFilter===X7||M.minFilter===t9))T0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,S0[M.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,S0[M.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,S0[M.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,C0[M.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,C0[M.minFilter]),M.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,XJ[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===m9)return;if(M.minFilter!==X7&&M.minFilter!==t9)return;if(M.type===S9&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||Z.get(M).__currentAnisotropy){let S=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,K.getMaxAnisotropy())),Z.get(M).__currentAnisotropy=M.anisotropy}}}function s(B,M){let S=!1;if(B.__webglInit===void 0)B.__webglInit=!0,M.addEventListener("dispose",P);let p=M.source,e=F.get(p);if(e===void 0)e={},F.set(p,e);let Y0=l(M);if(Y0!==B.__cacheKey){if(e[Y0]===void 0)e[Y0]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,S=!0;e[Y0].usedTimes++;let U0=e[B.__cacheKey];if(U0!==void 0){if(e[B.__cacheKey].usedTimes--,U0.usedTimes===0)g(M)}B.__cacheKey=Y0,B.__webglTexture=e[Y0].texture}return S}function $0(B,M,S){return Math.floor(Math.floor(B/S)/M)}function W0(B,M,S,p){let Y0=B.updateRanges;if(Y0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,S,p,M.data);else{Y0.sort((B0,q0)=>B0.start-q0.start);let U0=0;for(let B0=1;B0<Y0.length;B0++){let q0=Y0[U0],Z0=Y0[B0],P0=q0.start+q0.count,w0=$0(Z0.start,M.width,4),a0=$0(q0.start,M.width,4);if(Z0.start<=P0+1&&w0===a0&&$0(Z0.start+Z0.count-1,M.width,4)===w0)q0.count=Math.max(q0.count,Z0.start+Z0.count-q0.start);else++U0,Y0[U0]=Z0}Y0.length=U0+1;let u=$.getParameter(J.UNPACK_ROW_LENGTH),o=$.getParameter(J.UNPACK_SKIP_PIXELS),E0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let B0=0,q0=Y0.length;B0<q0;B0++){let Z0=Y0[B0],P0=Math.floor(Z0.start/4),w0=Math.ceil(Z0.count/4),a0=P0%M.width,v=Math.floor(P0/M.width),H0=w0,i=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,a0),$.pixelStorei(J.UNPACK_SKIP_ROWS,v),$.texSubImage2D(J.TEXTURE_2D,0,a0,v,H0,1,S,p,M.data)}B.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,u),$.pixelStorei(J.UNPACK_SKIP_PIXELS,o),$.pixelStorei(J.UNPACK_SKIP_ROWS,E0)}}function A0(B,M,S){let p=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)p=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)p=J.TEXTURE_3D;let e=s(B,M),Y0=M.source;$.bindTexture(p,B.__webglTexture,J.TEXTURE0+S);let U0=Z.get(Y0);if(Y0.version!==U0.__version||e===!0){if($.activeTexture(J.TEXTURE0+S),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let i=n0.getPrimaries(n0.workingColorSpace),X0=M.colorSpace===$8?null:n0.getPrimaries(M.colorSpace),O0=M.colorSpace===$8||i===X0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,O0)}$.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment);let o=E(M.image,!1,K.maxTextureSize);o=r0(M,o);let E0=W.convert(M.format,M.colorSpace),B0=W.convert(M.type),q0=V(M.internalFormat,E0,B0,M.normalized,M.colorSpace,M.isVideoTexture);m0(p,M);let Z0,P0=M.mipmaps,w0=M.isVideoTexture!==!0,a0=U0.__version===void 0||e===!0,v=Y0.dataReady,H0=A(M,o);if(M.isDepthTexture){if(q0=I(M.format===J8,M.type),a0)if(w0)$.texStorage2D(J.TEXTURE_2D,1,q0,o.width,o.height);else $.texImage2D(J.TEXTURE_2D,0,q0,o.width,o.height,0,E0,B0,null)}else if(M.isDataTexture)if(P0.length>0){if(w0&&a0)$.texStorage2D(J.TEXTURE_2D,H0,q0,P0[0].width,P0[0].height);for(let i=0,X0=P0.length;i<X0;i++)if(Z0=P0[i],w0){if(v)$.texSubImage2D(J.TEXTURE_2D,i,0,0,Z0.width,Z0.height,E0,B0,Z0.data)}else $.texImage2D(J.TEXTURE_2D,i,q0,Z0.width,Z0.height,0,E0,B0,Z0.data);M.generateMipmaps=!1}else if(w0){if(a0)$.texStorage2D(J.TEXTURE_2D,H0,q0,o.width,o.height);if(v)W0(M,o,E0,B0)}else $.texImage2D(J.TEXTURE_2D,0,q0,o.width,o.height,0,E0,B0,o.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(w0&&a0)$.texStorage3D(J.TEXTURE_2D_ARRAY,H0,q0,P0[0].width,P0[0].height,o.depth);for(let i=0,X0=P0.length;i<X0;i++)if(Z0=P0[i],M.format!==M9)if(E0!==null)if(w0){if(v)if(M.layerUpdates.size>0){let O0=b$(Z0.width,Z0.height,M.format,M.type);for(let t of M.layerUpdates){let G0=Z0.data.subarray(t*O0/Z0.data.BYTES_PER_ELEMENT,(t+1)*O0/Z0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,t,Z0.width,Z0.height,1,E0,G0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,Z0.width,Z0.height,o.depth,E0,Z0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,i,q0,Z0.width,Z0.height,o.depth,0,Z0.data,0,0);else T0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(w0){if(v)$.texSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,Z0.width,Z0.height,o.depth,E0,B0,Z0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,i,q0,Z0.width,Z0.height,o.depth,0,E0,B0,Z0.data);if(M.layerUpdates.size>0)M.clearLayerUpdates()}else{if(w0&&a0)$.texStorage2D(J.TEXTURE_2D,H0,q0,P0[0].width,P0[0].height);for(let i=0,X0=P0.length;i<X0;i++)if(Z0=P0[i],M.format!==M9)if(E0!==null)if(w0){if(v)$.compressedTexSubImage2D(J.TEXTURE_2D,i,0,0,Z0.width,Z0.height,E0,Z0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,i,q0,Z0.width,Z0.height,0,Z0.data);else T0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(w0){if(v)$.texSubImage2D(J.TEXTURE_2D,i,0,0,Z0.width,Z0.height,E0,B0,Z0.data)}else $.texImage2D(J.TEXTURE_2D,i,q0,Z0.width,Z0.height,0,E0,B0,Z0.data)}else if(M.isDataArrayTexture)if(w0){if(a0)$.texStorage3D(J.TEXTURE_2D_ARRAY,H0,q0,o.width,o.height,o.depth);if(v)if(M.layerUpdates.size>0){let i=b$(o.width,o.height,M.format,M.type);for(let X0 of M.layerUpdates){let O0=o.data.subarray(X0*i/o.data.BYTES_PER_ELEMENT,(X0+1)*i/o.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,X0,o.width,o.height,1,E0,B0,O0)}M.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,o.width,o.height,o.depth,E0,B0,o.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,q0,o.width,o.height,o.depth,0,E0,B0,o.data);else if(M.isData3DTexture)if(w0){if(a0)$.texStorage3D(J.TEXTURE_3D,H0,q0,o.width,o.height,o.depth);if(v)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,o.width,o.height,o.depth,E0,B0,o.data)}else $.texImage3D(J.TEXTURE_3D,0,q0,o.width,o.height,o.depth,0,E0,B0,o.data);else if(M.isFramebufferTexture){if(a0)if(w0)$.texStorage2D(J.TEXTURE_2D,H0,q0,o.width,o.height);else{let{width:i,height:X0}=o;for(let O0=0;O0<H0;O0++)$.texImage2D(J.TEXTURE_2D,O0,q0,i,X0,0,E0,B0,null),i>>=1,X0>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in J){let i=J.canvas;if(!i.hasAttribute("layoutsubtree"))i.setAttribute("layoutsubtree","true");if(o.parentNode!==i){i.appendChild(o),D.add(M),i.onpaint=(X0)=>{let O0=X0.changedElements;for(let t of D)if(O0.includes(t.image))t.needsUpdate=!0},i.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,o);else{let{RGBA:O0,RGBA:t,UNSIGNED_BYTE:G0}=J;J.texElementImage2D(J.TEXTURE_2D,0,O0,t,G0,o)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(P0.length>0){if(w0&&a0){let i=EJ(P0[0]);$.texStorage2D(J.TEXTURE_2D,H0,q0,i.width,i.height)}for(let i=0,X0=P0.length;i<X0;i++)if(Z0=P0[i],w0){if(v)$.texSubImage2D(J.TEXTURE_2D,i,0,0,E0,B0,Z0)}else $.texImage2D(J.TEXTURE_2D,i,q0,E0,B0,Z0);M.generateMipmaps=!1}else if(w0){if(a0){let i=EJ(o);$.texStorage2D(J.TEXTURE_2D,H0,q0,i.width,i.height)}if(v)$.texSubImage2D(J.TEXTURE_2D,0,0,0,E0,B0,o)}else $.texImage2D(J.TEXTURE_2D,0,q0,E0,B0,o);if(N(M))C(p);if(U0.__version=Y0.version,M.onUpdate)M.onUpdate(M)}B.__version=M.version}function j0(B,M,S){if(M.image.length!==6)return;let p=s(B,M),e=M.source;$.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+S);let Y0=Z.get(e);if(e.version!==Y0.__version||p===!0){$.activeTexture(J.TEXTURE0+S);let U0=n0.getPrimaries(n0.workingColorSpace),u=M.colorSpace===$8?null:n0.getPrimaries(M.colorSpace),o=M.colorSpace===$8||U0===u?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,o);let E0=M.isCompressedTexture||M.image[0].isCompressedTexture,B0=M.image[0]&&M.image[0].isDataTexture,q0=[];for(let t=0;t<6;t++){if(!E0&&!B0)q0[t]=E(M.image[t],!0,K.maxCubemapSize);else q0[t]=B0?M.image[t].image:M.image[t];q0[t]=r0(M,q0[t])}let Z0=q0[0],P0=W.convert(M.format,M.colorSpace),w0=W.convert(M.type),a0=V(M.internalFormat,P0,w0,M.normalized,M.colorSpace),v=M.isVideoTexture!==!0,H0=Y0.__version===void 0||p===!0,i=e.dataReady,X0=A(M,Z0);m0(J.TEXTURE_CUBE_MAP,M);let O0;if(E0){if(v&&H0)$.texStorage2D(J.TEXTURE_CUBE_MAP,X0,a0,Z0.width,Z0.height);for(let t=0;t<6;t++){O0=q0[t].mipmaps;for(let G0=0;G0<O0.length;G0++){let h0=O0[G0];if(M.format!==M9)if(P0!==null)if(v){if(i)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,G0,0,0,h0.width,h0.height,P0,h0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,G0,a0,h0.width,h0.height,0,h0.data);else T0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,G0,0,0,h0.width,h0.height,P0,w0,h0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,G0,a0,h0.width,h0.height,0,P0,w0,h0.data)}}}else{if(O0=M.mipmaps,v&&H0){if(O0.length>0)X0++;let t=EJ(q0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,X0,a0,t.width,t.height)}for(let t=0;t<6;t++)if(B0){if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,q0[t].width,q0[t].height,P0,w0,q0[t].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,a0,q0[t].width,q0[t].height,0,P0,w0,q0[t].data);for(let G0=0;G0<O0.length;G0++){let UJ=O0[G0].image[t].image;if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,G0+1,0,0,UJ.width,UJ.height,P0,w0,UJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,G0+1,a0,UJ.width,UJ.height,0,P0,w0,UJ.data)}}else{if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,P0,w0,q0[t])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,a0,P0,w0,q0[t]);for(let G0=0;G0<O0.length;G0++){let h0=O0[G0];if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,G0+1,0,0,P0,w0,h0.image[t])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,G0+1,a0,P0,w0,h0.image[t])}}}if(N(M))C(J.TEXTURE_CUBE_MAP);if(Y0.__version=e.version,M.onUpdate)M.onUpdate(M)}B.__version=M.version}function z0(B,M,S,p,e,Y0){let U0=W.convert(S.format,S.colorSpace),u=W.convert(S.type),o=V(S.internalFormat,U0,u,S.normalized,S.colorSpace),E0=Z.get(M),B0=Z.get(S);if(B0.__renderTarget=M,!E0.__hasExternalTextures){let q0=Math.max(1,M.width>>Y0),Z0=Math.max(1,M.height>>Y0);if(e===J.TEXTURE_3D||e===J.TEXTURE_2D_ARRAY)$.texImage3D(e,Y0,o,q0,Z0,M.depth,0,U0,u,null);else $.texImage2D(e,Y0,o,q0,Z0,0,U0,u,null)}if($.bindFramebuffer(J.FRAMEBUFFER,B),y(M))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,p,e,B0.__webglTexture,0,BJ(M));else if(e===J.TEXTURE_2D||e>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&e<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,p,e,B0.__webglTexture,Y0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function VJ(B,M,S){if(J.bindRenderbuffer(J.RENDERBUFFER,B),M.depthBuffer){let p=M.depthTexture,e=p&&p.isDepthTexture?p.type:null,Y0=I(M.stencilBuffer,e),U0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(y(M))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,BJ(M),Y0,M.width,M.height);else if(S)J.renderbufferStorageMultisample(J.RENDERBUFFER,BJ(M),Y0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,Y0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,U0,J.RENDERBUFFER,B)}else{let p=M.textures;for(let e=0;e<p.length;e++){let Y0=p[e],U0=W.convert(Y0.format,Y0.colorSpace),u=W.convert(Y0.type),o=V(Y0.internalFormat,U0,u,Y0.normalized,Y0.colorSpace);if(y(M))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,BJ(M),o,M.width,M.height);else if(S)J.renderbufferStorageMultisample(J.RENDERBUFFER,BJ(M),o,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,o,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function c0(B,M,S){let p=M.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,B),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let e=Z.get(M.depthTexture);if(e.__renderTarget=M,!e.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0;if(p){if(e.__webglInit===void 0)e.__webglInit=!0,M.depthTexture.addEventListener("dispose",P);if(e.__webglTexture===void 0){e.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),m0(J.TEXTURE_CUBE_MAP,M.depthTexture);let E0=W.convert(M.depthTexture.format),B0=W.convert(M.depthTexture.type),q0;if(M.depthTexture.format===e9)q0=J.DEPTH_COMPONENT24;else if(M.depthTexture.format===J8)q0=J.DEPTH24_STENCIL8;for(let Z0=0;Z0<6;Z0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,0,q0,M.width,M.height,0,E0,B0,null)}}else Q0(M.depthTexture,0);let Y0=e.__webglTexture,U0=BJ(M),u=p?J.TEXTURE_CUBE_MAP_POSITIVE_X+S:J.TEXTURE_2D,o=M.depthTexture.format===J8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===e9)if(y(M))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,u,Y0,0,U0);else J.framebufferTexture2D(J.FRAMEBUFFER,o,u,Y0,0);else if(M.depthTexture.format===J8)if(y(M))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,u,Y0,0,U0);else J.framebufferTexture2D(J.FRAMEBUFFER,o,u,Y0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function s0(B){let M=Z.get(B),S=B.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==B.depthTexture){let p=B.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(p){let e=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,p.removeEventListener("dispose",e)};p.addEventListener("dispose",e),M.__depthDisposeCallback=e}M.__boundDepthTexture=p}if(B.depthTexture&&!M.__autoAllocateDepthBuffer)if(S)for(let p=0;p<6;p++)c0(M.__webglFramebuffer[p],B,p);else{let p=B.texture.mipmaps;if(p&&p.length>0)c0(M.__webglFramebuffer[0],B,0);else c0(M.__webglFramebuffer,B,0)}else if(S){M.__webglDepthbuffer=[];for(let p=0;p<6;p++)if($.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[p]),M.__webglDepthbuffer[p]===void 0)M.__webglDepthbuffer[p]=J.createRenderbuffer(),VJ(M.__webglDepthbuffer[p],B,!1);else{let e=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Y0=M.__webglDepthbuffer[p];J.bindRenderbuffer(J.RENDERBUFFER,Y0),J.framebufferRenderbuffer(J.FRAMEBUFFER,e,J.RENDERBUFFER,Y0)}}else{let p=B.texture.mipmaps;if(p&&p.length>0)$.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),VJ(M.__webglDepthbuffer,B,!1);else{let e=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Y0=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,Y0),J.framebufferRenderbuffer(J.FRAMEBUFFER,e,J.RENDERBUFFER,Y0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function QJ(B,M,S){let p=Z.get(B);if(M!==void 0)z0(p.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(S!==void 0)s0(B)}function i0(B){let M=B.texture,S=Z.get(B),p=Z.get(M);B.addEventListener("dispose",O);let e=B.textures,Y0=B.isWebGLCubeRenderTarget===!0,U0=e.length>1;if(!U0){if(p.__webglTexture===void 0)p.__webglTexture=J.createTexture();p.__version=M.version,Y.memory.textures++}if(Y0){S.__webglFramebuffer=[];for(let u=0;u<6;u++)if(M.mipmaps&&M.mipmaps.length>0){S.__webglFramebuffer[u]=[];for(let o=0;o<M.mipmaps.length;o++)S.__webglFramebuffer[u][o]=J.createFramebuffer()}else S.__webglFramebuffer[u]=J.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){S.__webglFramebuffer=[];for(let u=0;u<M.mipmaps.length;u++)S.__webglFramebuffer[u]=J.createFramebuffer()}else S.__webglFramebuffer=J.createFramebuffer();if(U0)for(let u=0,o=e.length;u<o;u++){let E0=Z.get(e[u]);if(E0.__webglTexture===void 0)E0.__webglTexture=J.createTexture(),Y.memory.textures++}if(B.samples>0&&y(B)===!1){S.__webglMultisampledFramebuffer=J.createFramebuffer(),S.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let u=0;u<e.length;u++){let o=e[u];S.__webglColorRenderbuffer[u]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,S.__webglColorRenderbuffer[u]);let E0=W.convert(o.format,o.colorSpace),B0=W.convert(o.type),q0=V(o.internalFormat,E0,B0,o.normalized,o.colorSpace,B.isXRRenderTarget===!0),Z0=BJ(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,Z0,q0,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+u,J.RENDERBUFFER,S.__webglColorRenderbuffer[u])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)S.__webglDepthRenderbuffer=J.createRenderbuffer(),VJ(S.__webglDepthRenderbuffer,B,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(Y0){$.bindTexture(J.TEXTURE_CUBE_MAP,p.__webglTexture),m0(J.TEXTURE_CUBE_MAP,M);for(let u=0;u<6;u++)if(M.mipmaps&&M.mipmaps.length>0)for(let o=0;o<M.mipmaps.length;o++)z0(S.__webglFramebuffer[u][o],B,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+u,o);else z0(S.__webglFramebuffer[u],B,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+u,0);if(N(M))C(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(U0){for(let u=0,o=e.length;u<o;u++){let E0=e[u],B0=Z.get(E0),q0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)q0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(q0,B0.__webglTexture),m0(q0,E0),z0(S.__webglFramebuffer,B,E0,J.COLOR_ATTACHMENT0+u,q0,0),N(E0))C(q0)}$.unbindTexture()}else{let u=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)u=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(u,p.__webglTexture),m0(u,M),M.mipmaps&&M.mipmaps.length>0)for(let o=0;o<M.mipmaps.length;o++)z0(S.__webglFramebuffer[o],B,M,J.COLOR_ATTACHMENT0,u,o);else z0(S.__webglFramebuffer,B,M,J.COLOR_ATTACHMENT0,u,0);if(N(M))C(u);$.unbindTexture()}if(B.depthBuffer)s0(B)}function wJ(B){let M=B.textures;for(let S=0,p=M.length;S<p;S++){let e=M[S];if(N(e)){let Y0=w(B),U0=Z.get(e).__webglTexture;$.bindTexture(Y0,U0),C(Y0),$.unbindTexture()}}}let GJ=[],pJ=[];function kJ(B){if(B.samples>0){if(y(B)===!1){let{textures:M,width:S,height:p}=B,e=J.COLOR_BUFFER_BIT,Y0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=Z.get(B),u=M.length>1;if(u)for(let E0=0;E0<M.length;E0++)$.bindFramebuffer(J.FRAMEBUFFER,U0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,U0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,U0.__webglMultisampledFramebuffer);let o=B.texture.mipmaps;if(o&&o.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,U0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,U0.__webglFramebuffer);for(let E0=0;E0<M.length;E0++){if(B.resolveDepthBuffer){if(B.depthBuffer)e|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)e|=J.STENCIL_BUFFER_BIT}if(u){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,U0.__webglColorRenderbuffer[E0]);let B0=Z.get(M[E0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,B0,0)}if(J.blitFramebuffer(0,0,S,p,0,0,S,p,e,J.NEAREST),X===!0){if(GJ.length=0,pJ.length=0,GJ.push(J.COLOR_ATTACHMENT0+E0),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1)GJ.push(Y0),pJ.push(Y0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,pJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,GJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),u)for(let E0=0;E0<M.length;E0++){$.bindFramebuffer(J.FRAMEBUFFER,U0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.RENDERBUFFER,U0.__webglColorRenderbuffer[E0]);let B0=Z.get(M[E0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,U0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.TEXTURE_2D,B0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,U0.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&X){let M=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function BJ(B){return Math.min(K.maxSamples,B.samples)}function y(B){let M=Z.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function mJ(B){let M=Y.render.frame;if(G.get(B)!==M)G.set(B,M),B.update()}function r0(B,M){let{colorSpace:S,format:p,type:e}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return M;if(S!==K$&&S!==$8)if(n0.getTransfer(S)===HJ){if(p!==M9||e!==N9)T0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else y0("WebGLTextures: Unsupported texture color space:",S);return M}function EJ(B){if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement)U.width=B.naturalWidth||B.width,U.height=B.naturalHeight||B.height;else if(typeof VideoFrame<"u"&&B instanceof VideoFrame)U.width=B.displayWidth,U.height=B.displayHeight;else U.width=B.width,U.height=B.height;return U}this.allocateTextureUnit=a,this.resetTextureUnits=c,this.getTextureUnits=T,this.setTextureUnits=d,this.setTexture2D=Q0,this.setTexture2DArray=n,this.setTexture3D=r,this.setTextureCube=J0,this.rebindTextures=QJ,this.setupRenderTarget=i0,this.updateRenderTargetMipmap=wJ,this.updateMultisampleRenderTarget=kJ,this.setupDepthRenderbuffer=s0,this.setupFrameBufferTexture=z0,this.useMultisampledRTT=y,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function RN(J,Q){function $(Z,K=$8){let W,Y=n0.getTransfer(K);if(Z===N9)return J.UNSIGNED_BYTE;if(Z===BQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===IQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===TK)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===SK)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===wK)return J.BYTE;if(Z===_K)return J.SHORT;if(Z===U7)return J.UNSIGNED_SHORT;if(Z===kQ)return J.INT;if(Z===l9)return J.UNSIGNED_INT;if(Z===S9)return J.FLOAT;if(Z===R9)return J.HALF_FLOAT;if(Z===jK)return J.ALPHA;if(Z===yK)return J.RGB;if(Z===M9)return J.RGBA;if(Z===e9)return J.DEPTH_COMPONENT;if(Z===J8)return J.DEPTH_STENCIL;if(Z===fK)return J.RED;if(Z===zQ)return J.RED_INTEGER;if(Z===Q8)return J.RG;if(Z===PQ)return J.RG_INTEGER;if(Z===CQ)return J.RGBA_INTEGER;if(Z===e7||Z===J6||Z===Q6||Z===$6)if(Y===HJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===e7)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===J6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===Q6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===$6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===e7)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===J6)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===Q6)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===$6)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===AQ||Z===wQ||Z===_Q||Z===TQ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===AQ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===wQ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===_Q)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===TQ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===SQ||Z===jQ||Z===yQ||Z===fQ||Z===vQ||Z===Z6||Z===bQ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===SQ||Z===jQ)return Y===HJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===yQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===fQ)return W.COMPRESSED_R11_EAC;if(Z===vQ)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===Z6)return W.COMPRESSED_RG11_EAC;if(Z===bQ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===hQ||Z===xQ||Z===gQ||Z===pQ||Z===mQ||Z===lQ||Z===dQ||Z===uQ||Z===cQ||Z===nQ||Z===sQ||Z===iQ||Z===oQ||Z===aQ)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===hQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===xQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===gQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===pQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===mQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===lQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===dQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===uQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===cQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===nQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===sQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===iQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===oQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===aQ)return Y===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===rQ||Z===tQ||Z===eQ)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===rQ)return Y===HJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===tQ)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===eQ)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===J$||Z===Q$||Z===K6||Z===$$)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===J$)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===Q$)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===K6)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===$$)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===f8)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var MN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LN=`
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

}`;class TW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new E6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new $9({vertexShader:MN,fragmentShader:LN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new _0(new _J(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SW extends L9{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,Y="local-floor",H=1,X=null,U=null,G=null,D=null,q=null,F=null,R=typeof XRWebGLBinding<"u",z=new TW,E={},N=Q.getContextAttributes(),C=null,w=null,V=[],I=[],A=new I0,P=null,O=null,k=new hJ;k.viewport=new DJ;let g=new hJ;g.viewport=new DJ;let _=[k,g],b=new j$,c=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(s){let $0=V[s];if($0===void 0)$0=new G7,V[s]=$0;return $0.getTargetRaySpace()},this.getControllerGrip=function(s){let $0=V[s];if($0===void 0)$0=new G7,V[s]=$0;return $0.getGripSpace()},this.getHand=function(s){let $0=V[s];if($0===void 0)$0=new G7,V[s]=$0;return $0.getHandSpace()};function d(s){let $0=I.indexOf(s.inputSource);if($0===-1)return;let W0=V[$0];if(W0!==void 0)W0.update(s.inputSource,s.frame,X||W),W0.dispatchEvent({type:s.type,data:s.inputSource})}function a(){Z.removeEventListener("select",d),Z.removeEventListener("selectstart",d),Z.removeEventListener("selectend",d),Z.removeEventListener("squeeze",d),Z.removeEventListener("squeezestart",d),Z.removeEventListener("squeezeend",d),Z.removeEventListener("end",a),Z.removeEventListener("inputsourceschange",l);for(let s=0;s<V.length;s++){let $0=I[s];if($0===null)continue;I[s]=null,V[s].disconnect($0)}c=null,T=null,z.reset();for(let s in E)delete E[s];if(J.setRenderTarget(C),q=null,D=null,G=null,Z=null,w=null,m0.stop(),$.isPresenting=!1,J.setPixelRatio(P),J.setSize(A.width,A.height,!1),O!==null){let s=O.camera;s.fov=O.fov,s.zoom=O.zoom,s.updateProjectionMatrix(),O=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(s){if(K=s,$.isPresenting===!0)T0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(s){if(Y=s,$.isPresenting===!0)T0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||W},this.setReferenceSpace=function(s){X=s},this.getBaseLayer=function(){return D!==null?D:q},this.getBinding=function(){if(G===null&&R)G=new XRWebGLBinding(Z,Q);return G},this.getFrame=function(){return F},this.getSession=function(){return Z},this.setSession=async function(s){if(Z=s,Z!==null){if(C=J.getRenderTarget(),Z.addEventListener("select",d),Z.addEventListener("selectstart",d),Z.addEventListener("selectend",d),Z.addEventListener("squeeze",d),Z.addEventListener("squeezestart",d),Z.addEventListener("squeezeend",d),Z.addEventListener("end",a),Z.addEventListener("inputsourceschange",l),N.xrCompatible!==!0)await Q.makeXRCompatible();if(P=J.getPixelRatio(),J.getSize(A),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let W0={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:K};q=new XRWebGLLayer(Z,Q,W0),Z.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),w=new aJ(q.framebufferWidth,q.framebufferHeight,{format:M9,type:N9,colorSpace:J.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1,storeMultisampledDepthBuffer:q.ignoreDepthValues===!1,storeMultisampledStencilBuffer:q.ignoreDepthValues===!1})}else{let W0=null,A0=null,j0=null;if(N.depth)j0=N.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,W0=N.stencil?J8:e9,A0=N.stencil?f8:l9;let z0={colorFormat:Q.RGBA8,depthFormat:j0,scaleFactor:K};G=this.getBinding(),D=G.createProjectionLayer(z0),Z.updateRenderState({layers:[D]}),J.setPixelRatio(1),J.setSize(D.textureWidth,D.textureHeight,!1),w=new aJ(D.textureWidth,D.textureHeight,{format:M9,type:N9,depthTexture:new W8(D.textureWidth,D.textureHeight,A0,void 0,void 0,void 0,void 0,void 0,void 0,W0),stencilBuffer:N.stencil,colorSpace:J.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:D.ignoreDepthValues===!1,resolveStencilBuffer:D.ignoreDepthValues===!1,storeMultisampledDepthBuffer:D.ignoreDepthValues===!1,storeMultisampledStencilBuffer:D.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(H),X=null,W=await Z.requestReferenceSpace(Y),m0.setContext(Z),m0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return z.getDepthTexture()};function l(s){for(let $0=0;$0<s.removed.length;$0++){let W0=s.removed[$0],A0=I.indexOf(W0);if(A0>=0)I[A0]=null,V[A0].disconnect(W0)}for(let $0=0;$0<s.added.length;$0++){let W0=s.added[$0],A0=I.indexOf(W0);if(A0===-1){for(let z0=0;z0<V.length;z0++)if(z0>=I.length){I.push(W0),A0=z0;break}else if(I[z0]===null){I[z0]=W0,A0=z0;break}if(A0===-1)break}let j0=V[A0];if(j0)j0.connect(W0)}}let Q0=new j,n=new j;function r(s,$0,W0){Q0.setFromMatrixPosition($0.matrixWorld),n.setFromMatrixPosition(W0.matrixWorld);let A0=Q0.distanceTo(n),j0=$0.projectionMatrix.elements,z0=W0.projectionMatrix.elements,VJ=j0[14]/(j0[10]-1),c0=j0[14]/(j0[10]+1),s0=(j0[9]+1)/j0[5],QJ=(j0[9]-1)/j0[5],i0=(j0[8]-1)/j0[0],wJ=(z0[8]+1)/z0[0],GJ=VJ*i0,pJ=VJ*wJ,kJ=A0/(-i0+wJ),BJ=kJ*-i0;if($0.matrixWorld.decompose(s.position,s.quaternion,s.scale),s.translateX(BJ),s.translateZ(kJ),s.matrixWorld.compose(s.position,s.quaternion,s.scale),s.matrixWorldInverse.copy(s.matrixWorld).invert(),j0[10]===-1)s.projectionMatrix.copy($0.projectionMatrix),s.projectionMatrixInverse.copy($0.projectionMatrixInverse);else{let y=VJ+kJ,mJ=c0+kJ,r0=GJ-BJ,EJ=pJ+(A0-BJ),B=s0*c0/mJ*y,M=QJ*c0/mJ*y;s.projectionMatrix.makePerspective(r0,EJ,B,M,y,mJ),s.projectionMatrixInverse.copy(s.projectionMatrix).invert()}}function J0(s,$0){if($0===null)s.matrixWorld.copy(s.matrix);else s.matrixWorld.multiplyMatrices($0.matrixWorld,s.matrix);s.matrixWorldInverse.copy(s.matrixWorld).invert()}this.updateCamera=function(s){if(Z===null)return;let{near:$0,far:W0}=s;if(z.texture!==null){if(z.depthNear>0)$0=z.depthNear;if(z.depthFar>0)W0=z.depthFar}if(b.near=g.near=k.near=$0,b.far=g.far=k.far=W0,c!==b.near||T!==b.far)Z.updateRenderState({depthNear:b.near,depthFar:b.far}),c=b.near,T=b.far;b.layers.mask=s.layers.mask|6,k.layers.mask=b.layers.mask&-5,g.layers.mask=b.layers.mask&-3;let A0=s.parent,j0=b.cameras;J0(b,A0);for(let z0=0;z0<j0.length;z0++)J0(j0[z0],A0);if(j0.length===2)r(b,k,g);else b.projectionMatrix.copy(k.projectionMatrix);if(O===null&&s.isPerspectiveCamera)O={camera:s,fov:s.fov,zoom:s.zoom};S0(s,b,A0)};function S0(s,$0,W0){if(W0===null)s.matrix.copy($0.matrixWorld);else s.matrix.copy(W0.matrixWorld),s.matrix.invert(),s.matrix.multiply($0.matrixWorld);if(s.matrix.decompose(s.position,s.quaternion,s.scale),s.updateMatrixWorld(!0),s.projectionMatrix.copy($0.projectionMatrix),s.projectionMatrixInverse.copy($0.projectionMatrixInverse),s.isPerspectiveCamera)s.fov=T8*2*Math.atan(1/s.projectionMatrix.elements[5]),s.zoom=1}this.getCamera=function(){return b},this.getFoveation=function(){if(D===null&&q===null)return;return H},this.setFoveation=function(s){if(H=s,D!==null)D.fixedFoveation=s;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=s},this.hasDepthSensing=function(){return z.texture!==null},this.getDepthSensingMesh=function(){return z.getMesh(b)},this.getCameraTexture=function(s){return E[s]};let C0=null;function XJ(s,$0){if(U=$0.getViewerPose(X||W),F=$0,U!==null){let W0=U.views;if(q!==null)J.setRenderTargetFramebuffer(w,q.framebuffer),J.setRenderTarget(w);let A0=!1;if(W0.length!==b.cameras.length)b.cameras.length=0,A0=!0;for(let c0=0;c0<W0.length;c0++){let s0=W0[c0],QJ=null;if(q!==null)QJ=q.getViewport(s0);else{let wJ=G.getViewSubImage(D,s0);if(QJ=wJ.viewport,c0===0)J.setRenderTargetTextures(w,wJ.colorTexture,wJ.depthStencilTexture),J.setRenderTarget(w)}let i0=_[c0];if(i0===void 0)i0=new hJ,i0.layers.enable(c0),i0.viewport=new DJ,_[c0]=i0;if(i0.matrix.fromArray(s0.transform.matrix),i0.matrix.decompose(i0.position,i0.quaternion,i0.scale),i0.projectionMatrix.fromArray(s0.projectionMatrix),i0.projectionMatrixInverse.copy(i0.projectionMatrix).invert(),i0.viewport.set(QJ.x,QJ.y,QJ.width,QJ.height),c0===0)b.matrix.copy(i0.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale);if(A0===!0)b.cameras.push(i0)}let j0=Z.enabledFeatures;if(j0&&j0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&R){G=$.getBinding();let c0=G.getDepthInformation(W0[0]);if(c0&&c0.isValid&&c0.texture)z.init(c0,Z.renderState)}if(j0&&j0.includes("camera-access")&&R){J.state.unbindTexture(),G=$.getBinding();for(let c0=0;c0<W0.length;c0++){let s0=W0[c0].camera;if(s0){let QJ=E[s0];if(!QJ)QJ=new E6,E[s0]=QJ;let i0=G.getCameraImage(s0);QJ.sourceTexture=i0}}}}for(let W0=0;W0<V.length;W0++){let A0=I[W0],j0=V[W0];if(A0!==null&&j0!==void 0)j0.update(A0,$0,X||W)}if(C0)C0(s,$0);if($0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:$0});F=null}let m0=new LW;m0.setAnimationLoop(XJ),this.setAnimationLoop=function(s){C0=s},this.dispose=function(){}}}var VN=new WJ,jW=new v0;jW.set(-1,0,0,0,1,0,0,0,1);function kN(J,Q){function $(E,N){if(E.matrixAutoUpdate===!0)E.updateMatrix();N.value.copy(E.matrix)}function Z(E,N){if(N.color.getRGB(E.fogColor.value,O$(J)),N.isFog)E.fogNear.value=N.near,E.fogFar.value=N.far;else if(N.isFogExp2)E.fogDensity.value=N.density}function K(E,N,C,w,V){if(N.isNodeMaterial)N.uniformsNeedUpdate=!1;else if(N.isMeshBasicMaterial)W(E,N);else if(N.isMeshLambertMaterial){if(W(E,N),N.envMap)E.envMapIntensity.value=N.envMapIntensity}else if(N.isMeshToonMaterial)W(E,N),D(E,N);else if(N.isMeshPhongMaterial){if(W(E,N),G(E,N),N.envMap)E.envMapIntensity.value=N.envMapIntensity}else if(N.isMeshStandardMaterial){if(W(E,N),q(E,N),N.isMeshPhysicalMaterial)F(E,N,V)}else if(N.isMeshMatcapMaterial)W(E,N),R(E,N);else if(N.isMeshDepthMaterial)W(E,N);else if(N.isMeshDistanceMaterial)W(E,N),z(E,N);else if(N.isMeshNormalMaterial)W(E,N);else if(N.isLineBasicMaterial){if(Y(E,N),N.isLineDashedMaterial)H(E,N)}else if(N.isPointsMaterial)X(E,N,C,w);else if(N.isSpriteMaterial)U(E,N);else if(N.isShadowMaterial)E.color.value.copy(N.color),E.opacity.value=N.opacity;else if(N.isShaderMaterial)N.uniformsNeedUpdate=!1}function W(E,N){if(E.opacity.value=N.opacity,N.color)E.diffuse.value.copy(N.color);if(N.emissive)E.emissive.value.copy(N.emissive).multiplyScalar(N.emissiveIntensity);if(N.map)E.map.value=N.map,$(N.map,E.mapTransform);if(N.alphaMap)E.alphaMap.value=N.alphaMap,$(N.alphaMap,E.alphaMapTransform);if(N.bumpMap){if(E.bumpMap.value=N.bumpMap,$(N.bumpMap,E.bumpMapTransform),E.bumpScale.value=N.bumpScale,N.side===lJ)E.bumpScale.value*=-1}if(N.normalMap){if(E.normalMap.value=N.normalMap,$(N.normalMap,E.normalMapTransform),E.normalScale.value.copy(N.normalScale),N.side===lJ)E.normalScale.value.negate()}if(N.displacementMap)E.displacementMap.value=N.displacementMap,$(N.displacementMap,E.displacementMapTransform),E.displacementScale.value=N.displacementScale,E.displacementBias.value=N.displacementBias;if(N.emissiveMap)E.emissiveMap.value=N.emissiveMap,$(N.emissiveMap,E.emissiveMapTransform);if(N.specularMap)E.specularMap.value=N.specularMap,$(N.specularMap,E.specularMapTransform);if(N.alphaTest>0)E.alphaTest.value=N.alphaTest;let C=Q.get(N),w=C.envMap,V=C.envMapRotation;if(w){if(E.envMap.value=w,E.envMapRotation.value.setFromMatrix4(VN.makeRotationFromEuler(V)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1)E.envMapRotation.value.premultiply(jW);E.reflectivity.value=N.reflectivity,E.ior.value=N.ior,E.refractionRatio.value=N.refractionRatio}if(N.lightMap)E.lightMap.value=N.lightMap,E.lightMapIntensity.value=N.lightMapIntensity,$(N.lightMap,E.lightMapTransform);if(N.aoMap)E.aoMap.value=N.aoMap,E.aoMapIntensity.value=N.aoMapIntensity,$(N.aoMap,E.aoMapTransform)}function Y(E,N){if(E.diffuse.value.copy(N.color),E.opacity.value=N.opacity,N.map)E.map.value=N.map,$(N.map,E.mapTransform)}function H(E,N){E.dashSize.value=N.dashSize,E.totalSize.value=N.dashSize+N.gapSize,E.scale.value=N.scale}function X(E,N,C,w){if(E.diffuse.value.copy(N.color),E.opacity.value=N.opacity,E.size.value=N.size*C,E.scale.value=w*0.5,N.map)E.map.value=N.map,$(N.map,E.uvTransform);if(N.alphaMap)E.alphaMap.value=N.alphaMap,$(N.alphaMap,E.alphaMapTransform);if(N.alphaTest>0)E.alphaTest.value=N.alphaTest}function U(E,N){if(E.diffuse.value.copy(N.color),E.opacity.value=N.opacity,E.rotation.value=N.rotation,N.map)E.map.value=N.map,$(N.map,E.mapTransform);if(N.alphaMap)E.alphaMap.value=N.alphaMap,$(N.alphaMap,E.alphaMapTransform);if(N.alphaTest>0)E.alphaTest.value=N.alphaTest}function G(E,N){E.specular.value.copy(N.specular),E.shininess.value=Math.max(N.shininess,0.0001)}function D(E,N){if(N.gradientMap)E.gradientMap.value=N.gradientMap}function q(E,N){if(E.metalness.value=N.metalness,N.metalnessMap)E.metalnessMap.value=N.metalnessMap,$(N.metalnessMap,E.metalnessMapTransform);if(E.roughness.value=N.roughness,N.roughnessMap)E.roughnessMap.value=N.roughnessMap,$(N.roughnessMap,E.roughnessMapTransform);if(N.envMap)E.envMapIntensity.value=N.envMapIntensity}function F(E,N,C){if(E.ior.value=N.ior,N.sheen>0){if(E.sheenColor.value.copy(N.sheenColor).multiplyScalar(N.sheen),E.sheenRoughness.value=N.sheenRoughness,N.sheenColorMap)E.sheenColorMap.value=N.sheenColorMap,$(N.sheenColorMap,E.sheenColorMapTransform);if(N.sheenRoughnessMap)E.sheenRoughnessMap.value=N.sheenRoughnessMap,$(N.sheenRoughnessMap,E.sheenRoughnessMapTransform)}if(N.clearcoat>0){if(E.clearcoat.value=N.clearcoat,E.clearcoatRoughness.value=N.clearcoatRoughness,N.clearcoatMap)E.clearcoatMap.value=N.clearcoatMap,$(N.clearcoatMap,E.clearcoatMapTransform);if(N.clearcoatRoughnessMap)E.clearcoatRoughnessMap.value=N.clearcoatRoughnessMap,$(N.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform);if(N.clearcoatNormalMap){if(E.clearcoatNormalMap.value=N.clearcoatNormalMap,$(N.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(N.clearcoatNormalScale),N.side===lJ)E.clearcoatNormalScale.value.negate()}}if(N.dispersion>0)E.dispersion.value=N.dispersion;if(N.retroreflectivity>0)E.retroreflectivity.value=N.retroreflectivity;if(N.iridescence>0){if(E.iridescence.value=N.iridescence,E.iridescenceIOR.value=N.iridescenceIOR,E.iridescenceThicknessMinimum.value=N.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=N.iridescenceThicknessRange[1],N.iridescenceMap)E.iridescenceMap.value=N.iridescenceMap,$(N.iridescenceMap,E.iridescenceMapTransform);if(N.iridescenceThicknessMap)E.iridescenceThicknessMap.value=N.iridescenceThicknessMap,$(N.iridescenceThicknessMap,E.iridescenceThicknessMapTransform)}if(N.transmission>0){if(E.transmission.value=N.transmission,E.transmissionSamplerMap.value=C.texture,E.transmissionSamplerSize.value.set(C.width,C.height),N.transmissionMap)E.transmissionMap.value=N.transmissionMap,$(N.transmissionMap,E.transmissionMapTransform);if(E.thickness.value=N.thickness,N.thicknessMap)E.thicknessMap.value=N.thicknessMap,$(N.thicknessMap,E.thicknessMapTransform);E.attenuationDistance.value=N.attenuationDistance,E.attenuationColor.value.copy(N.attenuationColor)}if(N.anisotropy>0){if(E.anisotropyVector.value.set(N.anisotropy*Math.cos(N.anisotropyRotation),N.anisotropy*Math.sin(N.anisotropyRotation)),N.anisotropyMap)E.anisotropyMap.value=N.anisotropyMap,$(N.anisotropyMap,E.anisotropyMapTransform)}if(E.specularIntensity.value=N.specularIntensity,E.specularColor.value.copy(N.specularColor),N.specularColorMap)E.specularColorMap.value=N.specularColorMap,$(N.specularColorMap,E.specularColorMapTransform);if(N.specularIntensityMap)E.specularIntensityMap.value=N.specularIntensityMap,$(N.specularIntensityMap,E.specularIntensityMapTransform)}function R(E,N){if(N.matcap)E.matcap.value=N.matcap}function z(E,N){let C=Q.get(N).light;E.referencePosition.value.setFromMatrixPosition(C.matrixWorld),E.nearDistance.value=C.shadow.camera.near,E.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function BN(J,Q,$,Z){let K={},W={},Y=[],H=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(V,I){let A=I.program;Z.uniformBlockBinding(V,A)}function U(V,I){let A=K[V.id];if(A===void 0)E(V),A=G(V),K[V.id]=A,V.addEventListener("dispose",C);let P=I.program;Z.updateUBOMapping(V,P);let O=Q.render.frame;if(W[V.id]!==O)q(V),W[V.id]=O}function G(V){let I=D();V.__bindingPointIndex=I;let A=J.createBuffer(),P=V.__size,O=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,A),J.bufferData(J.UNIFORM_BUFFER,P,O),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,I,A),A}function D(){for(let V=0;V<H;V++)if(Y.indexOf(V)===-1)return Y.push(V),V;return y0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(V){let I=K[V.id],A=V.uniforms,P=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,I);for(let O=0,k=A.length;O<k;O++){let g=A[O];if(Array.isArray(g))for(let _=0,b=g.length;_<b;_++)F(g[_],O,_,P);else F(g,O,0,P)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(V,I,A,P){if(z(V,I,A,P)===!0){let{__offset:O,value:k}=V;if(Array.isArray(k)){let g=0;for(let _=0;_<k.length;_++){let b=k[_],c=N(b);if(R(b,V.__data,g),typeof b!=="number"&&typeof b!=="boolean"&&!b.isMatrix3&&!ArrayBuffer.isView(b))g+=c.storage/Float32Array.BYTES_PER_ELEMENT}}else R(k,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,O,V.__data)}}function R(V,I,A){if(typeof V==="number"||typeof V==="boolean")I[0]=V;else if(V.isMatrix3)I[0]=V.elements[0],I[1]=V.elements[1],I[2]=V.elements[2],I[3]=0,I[4]=V.elements[3],I[5]=V.elements[4],I[6]=V.elements[5],I[7]=0,I[8]=V.elements[6],I[9]=V.elements[7],I[10]=V.elements[8],I[11]=0;else if(ArrayBuffer.isView(V))I.set(new V.constructor(V.buffer,V.byteOffset,I.length));else V.toArray(I,A)}function z(V,I,A,P){let O=V.value,k=I+"_"+A;if(P[k]===void 0){if(typeof O==="number"||typeof O==="boolean")P[k]=O;else if(ArrayBuffer.isView(O))P[k]=O.slice();else P[k]=O.clone();return!0}else{let g=P[k];if(typeof O==="number"||typeof O==="boolean"){if(g!==O)return P[k]=O,!0}else if(ArrayBuffer.isView(O))return!0;else if(g.equals(O)===!1)return g.copy(O),!0}return!1}function E(V){let I=V.uniforms,A=0,P=16;for(let k=0,g=I.length;k<g;k++){let _=Array.isArray(I[k])?I[k]:[I[k]];for(let b=0,c=_.length;b<c;b++){let T=_[b],d=Array.isArray(T.value)?T.value:[T.value];for(let a=0,l=d.length;a<l;a++){let Q0=d[a],n=N(Q0),r=A%P,J0=r%n.boundary,S0=r+J0;if(A+=J0,S0!==0&&P-S0<n.storage)A+=P-S0;T.__data=new Float32Array(n.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=A,A+=n.storage}}}let O=A%P;if(O>0)A+=P-O;return V.__size=A,V.__cache={},this}function N(V){let I={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")I.boundary=4,I.storage=4;else if(V.isVector2)I.boundary=8,I.storage=8;else if(V.isVector3||V.isColor)I.boundary=16,I.storage=12;else if(V.isVector4)I.boundary=16,I.storage=16;else if(V.isMatrix3)I.boundary=48,I.storage=48;else if(V.isMatrix4)I.boundary=64,I.storage=64;else if(V.isTexture)T0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))I.boundary=16,I.storage=V.byteLength;else T0("WebGLRenderer: Unsupported uniform value type.",V);return I}function C(V){let I=V.target;I.removeEventListener("dispose",C);let A=Y.indexOf(I.__bindingPointIndex);Y.splice(A,1),J.deleteBuffer(K[I.id]),delete K[I.id],delete W[I.id]}function w(){for(let V in K)J.deleteBuffer(K[V]);Y=[],K={},W={}}return{bind:X,update:U,dispose:w}}var IN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),V9=null;function zN(){if(V9===null)V9=new D$(IN,16,16,Q8,R9),V9.name="DFG_LUT",V9.minFilter=dJ,V9.magFilter=dJ,V9.wrapS=r7,V9.wrapT=r7,V9.generateMipmaps=!1,V9.needsUpdate=!0;return V9}class s${constructor(J={}){let{canvas:Q=lK(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:Y=!1,premultipliedAlpha:H=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:D=!1,outputBufferType:q=N9}=J;this.isWebGLRenderer=!0;let F;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=$.getContextAttributes().alpha}else F=W;let R=q,z=new Set([CQ,PQ,zQ]),E=new Set([N9,l9,U7,f8,BQ,IQ]),N=new Uint32Array(4),C=new Int32Array(4),w=new j,V=null,I=null,A=[],P=[],O=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=q9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,g=!1,_=null,b=null,c=null,T=null;this._outputColorSpace=W6;let d=0,a=0,l=null,Q0=-1,n=null,r=new DJ,J0=new DJ,S0=null,C0=new p0(0),XJ=0,m0=Q.width,s=Q.height,$0=1,W0=null,A0=null,j0=new DJ(0,0,m0,s),z0=new DJ(0,0,m0,s),VJ=!1,c0=new E7,s0=!1,QJ=!1,i0=new WJ,wJ=new j,GJ=new DJ,pJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kJ=!1;function BJ(){return l===null?$0:1}let y=$;function mJ(L,f){return Q.getContext(L,f)}let r0,EJ,B,M,S,p,e,Y0,U0,u,o,E0,B0,q0,Z0,P0,w0,a0,v,H0,i,X0,O0;try{let L={alpha:!0,depth:Z,stencil:K,antialias:Y,premultipliedAlpha:H,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${nZ}`);if(Q.addEventListener("webglcontextlost",h0,!1),Q.addEventListener("webglcontextrestored",UJ,!1),Q.addEventListener("webglcontextcreationerror",t0,!1),y===null){if(y=mJ("webgl2",L),y===null)if(mJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}t()}catch(L){throw Q.removeEventListener("webglcontextlost",h0,!1),Q.removeEventListener("webglcontextrestored",UJ,!1),Q.removeEventListener("webglcontextcreationerror",t0,!1),y0("WebGLRenderer: "+L.message),L}function t(){if(r0=new S5(y),r0.init(),i=new RN(y,r0),EJ=new k5(y,r0,J,i),B=new EN(y,r0),EJ.reversedDepthBuffer&&D)B.buffers.depth.setReversed(!0);b=y.createFramebuffer(),c=y.createFramebuffer(),T=y.createFramebuffer(),M=new f5(y),S=new QN,p=new ON(y,r0,B,S,EJ,i,M),e=new T5(k),Y0=new bH(y),X0=new L5(y,Y0),U0=new j5(y,Y0,M,X0),u=new b5(y,U0,Y0,X0,M),a0=new v5(y,EJ,p),Z0=new B5(S),o=new JN(k,e,r0,EJ,X0,Z0),E0=new kN(k,S),B0=new ZN,q0=new UN(r0),w0=new M5(k,e,B,u,F,H),P0=new DN(k,u,EJ),O0=new BN(y,M,EJ,B),v=new V5(y,r0,M),H0=new y5(y,r0,M),M.programs=o.programs,k.capabilities=EJ,k.extensions=r0,k.properties=S,k.renderLists=B0,k.shadowMap=P0,k.state=B,k.info=M}if(R!==N9)O=new x5(R,Q.width,Q.height,Y,Z,K);let G0=new SW(k,y);this.xr=G0,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){let L=r0.get("WEBGL_lose_context");if(L)L.loseContext()},this.forceContextRestore=function(){let L=r0.get("WEBGL_lose_context");if(L)L.restoreContext()},this.getPixelRatio=function(){return $0},this.setPixelRatio=function(L){if(L===void 0)return;$0=L,this.setSize(m0,s,!1)},this.getSize=function(L){return L.set(m0,s)},this.setSize=function(L,f,m=!0){if(G0.isPresenting){T0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(m0=L,s=f,Q.width=Math.floor(L*$0),Q.height=Math.floor(f*$0),m===!0)Q.style.width=L+"px",Q.style.height=f+"px";if(O!==null)O.setSize(Q.width,Q.height);this.setViewport(0,0,L,f)},this.getDrawingBufferSize=function(L){return L.set(m0*$0,s*$0).floor()},this.setDrawingBufferSize=function(L,f,m){m0=L,s=f,$0=m,Q.width=Math.floor(L*m),Q.height=Math.floor(f*m),this.setViewport(0,0,L,f)},this.setEffects=function(L){if(R===N9){y0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let f=0;f<L.length;f++)if(L[f].isOutputPass===!0){T0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(r)},this.getViewport=function(L){return L.copy(j0)},this.setViewport=function(L,f,m,h){if(L.isVector4)j0.set(L.x,L.y,L.z,L.w);else j0.set(L,f,m,h);B.viewport(r.copy(j0).multiplyScalar($0).round())},this.getScissor=function(L){return L.copy(z0)},this.setScissor=function(L,f,m,h){if(L.isVector4)z0.set(L.x,L.y,L.z,L.w);else z0.set(L,f,m,h);B.scissor(J0.copy(z0).multiplyScalar($0).round())},this.getScissorTest=function(){return VJ},this.setScissorTest=function(L){B.setScissorTest(VJ=L)},this.setOpaqueSort=function(L){W0=L},this.setTransparentSort=function(L){A0=L},this.getClearColor=function(L){return L.copy(w0.getClearColor())},this.setClearColor=function(){w0.setClearColor(...arguments)},this.getClearAlpha=function(){return w0.getClearAlpha()},this.setClearAlpha=function(){w0.setClearAlpha(...arguments)},this.clear=function(L=!0,f=!0,m=!0){let h=0;if(L){let x=!1;if(l!==null){let D0=l.texture.format;x=z.has(D0)}if(x){let D0=l.texture.type,M0=E.has(D0),F0=w0.getClearColor(),L0=w0.getClearAlpha(),k0=F0.r,x0=F0.g,d0=F0.b;if(M0)N[0]=k0,N[1]=x0,N[2]=d0,N[3]=L0,y.clearBufferuiv(y.COLOR,0,N);else C[0]=k0,C[1]=x0,C[2]=d0,C[3]=L0,y.clearBufferiv(y.COLOR,0,C)}else h|=y.COLOR_BUFFER_BIT}if(f)h|=y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(m)h|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(h!==0)y.clear(h)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),_=L},this.dispose=function(){Q.removeEventListener("webglcontextlost",h0,!1),Q.removeEventListener("webglcontextrestored",UJ,!1),Q.removeEventListener("webglcontextcreationerror",t0,!1),w0.dispose(),B0.dispose(),q0.dispose(),S.dispose(),e.dispose(),u.dispose(),X0.dispose(),O0.dispose(),o.dispose(),G0.dispose(),G0.removeEventListener("sessionstart",FZ),G0.removeEventListener("sessionend",DZ),u9.stop()};function h0(L){L.preventDefault(),X$("WebGLRenderer: Context Lost."),g=!0}function UJ(){X$("WebGLRenderer: Context Restored."),g=!1;let L=M.autoReset,f=P0.enabled,m=P0.autoUpdate,h=P0.needsUpdate,x=P0.type;t(),M.autoReset=L,P0.enabled=f,P0.autoUpdate=m,P0.needsUpdate=h,P0.type=x}function t0(L){y0("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function F9(L){let f=L.target;f.removeEventListener("dispose",F9),I9(f)}function I9(L){yY(L),S.remove(L)}function yY(L){let f=S.get(L).programs;if(f!==void 0){if(f.forEach(function(m){o.releaseProgram(m)}),L.isShaderMaterial)o.releaseShaderCache(L)}}this.renderBufferDirect=function(L,f,m,h,x,D0){if(f===null)f=pJ;let M0=x.isMesh&&x.matrixWorld.determinantAffine()<0,F0=bY(L,f,m,h,x);B.setMaterial(h,M0);let L0=m.index,k0=1;if(h.wireframe===!0){if(L0=U0.getWireframeAttribute(m),L0===void 0)return;k0=2}let x0=m.drawRange,d0=m.attributes.position,V0=x0.start*k0,e0=(x0.start+x0.count)*k0;if(D0!==null)V0=Math.max(V0,D0.start*k0),e0=Math.min(e0,(D0.start+D0.count)*k0);if(L0!==null)V0=Math.max(V0,0),e0=Math.min(e0,L0.count);else if(d0!==void 0&&d0!==null)V0=Math.max(V0,0),e0=Math.min(e0,d0.count);let RJ=e0-V0;if(RJ<0||RJ===1/0)return;X0.setup(x,h,F0,m,L0);let FJ,YJ=v;if(L0!==null)FJ=Y0.get(L0),YJ=H0,YJ.setIndex(FJ);if(x.isMesh)if(h.wireframe===!0)B.setLineWidth(h.wireframeLinewidth*BJ()),YJ.setMode(y.LINES);else YJ.setMode(y.TRIANGLES);else if(x.isLine){let SJ=h.linewidth;if(SJ===void 0)SJ=1;if(B.setLineWidth(SJ*BJ()),x.isLineSegments)YJ.setMode(y.LINES);else if(x.isLineLoop)YJ.setMode(y.LINE_LOOP);else YJ.setMode(y.LINE_STRIP)}else if(x.isPoints)YJ.setMode(y.POINTS);else if(x.isSprite)YJ.setMode(y.TRIANGLES);if(x.isBatchedMesh)if(!r0.get("WEBGL_multi_draw")){let{_multiDrawStarts:SJ,_multiDrawCounts:R0,_multiDrawCount:vJ}=x,o0=L0?Y0.get(L0).bytesPerElement:1,tJ=S.get(h).currentProgram.getUniforms();for(let D9=0;D9<vJ;D9++)tJ.setValue(y,"_gl_DrawID",D9),YJ.render(SJ[D9]/o0,R0[D9])}else YJ.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else if(x.isInstancedMesh)YJ.renderInstances(V0,RJ,x.count);else if(m.isInstancedBufferGeometry){let SJ=m._maxInstanceCount!==void 0?m._maxInstanceCount:1/0,R0=Math.min(m.instanceCount,SJ);YJ.renderInstances(V0,RJ,R0)}else YJ.render(V0,RJ)};function GZ(L,f,m,h){if(_!==null&&L.isNodeMaterial)_.setObject(h,L);if(s0===!0)Z0.setState(L,m,!1);if(L.transparent===!0&&L.side===oJ&&L.forceSinglePass===!1)L.side=lJ,L.needsUpdate=!0,_7(L,f,h),L.side=p9,L.needsUpdate=!0,_7(L,f,h),L.side=oJ;else _7(L,f,h)}this.compile=function(L,f,m=null){if(m===null)m=L;if(_!==null)_.renderStart(L,f,m);if(I=q0.get(m),I.init(f),P.push(I),m.traverseVisible(function(x){if(x.isLight&&x.layers.test(f.layers)){if(I.pushLight(x),x.castShadow)I.pushShadow(x)}}),L!==m)L.traverseVisible(function(x){if(x.isLight&&x.layers.test(f.layers)){if(I.pushLight(x),x.castShadow)I.pushShadow(x)}});if(I.setupLights(),_!==null)_.updateLights(I.state.lightsArray);if(QJ=this.localClippingEnabled,s0=Z0.init(this.clippingPlanes,QJ),s0===!0)Z0.setGlobalState(this.clippingPlanes,f);if(_!==null)P0.render(I.state.shadowsArray,m,f);let h=new Set;if(L.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;let D0=x.material;if(D0)if(Array.isArray(D0))for(let M0=0;M0<D0.length;M0++){let F0=D0[M0];GZ(F0,m,f,x),h.add(F0)}else GZ(D0,m,f,x),h.add(D0)}),I=P.pop(),_!==null)_.renderEnd();return h},this.compileAsync=function(L,f,m=null){let h=this.compile(L,f,m);return new Promise((x)=>{function D0(){if(h.forEach(function(M0){let L0=S.get(M0).currentProgram;if(L0===void 0||L0.isReady())h.delete(M0)}),h.size===0){x(L);return}setTimeout(D0,10)}if(r0.get("KHR_parallel_shader_compile")!==null)D0();else setTimeout(D0,10)})};let g6=null;function fY(L){if(g6)g6(L)}function FZ(){u9.stop()}function DZ(){u9.start()}let u9=new LW;if(u9.setAnimationLoop(fY),typeof self<"u")u9.setContext(self);this.setAnimationLoop=function(L){g6=L,G0.setAnimationLoop(L),L===null?u9.stop():u9.start()},G0.addEventListener("sessionstart",FZ),G0.addEventListener("sessionend",DZ),this.render=function(L,f){if(f!==void 0&&f.isCamera!==!0){y0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;if(_!==null)_.renderStart(L,f);let m=G0.enabled===!0&&G0.isPresenting===!0,h=O!==null&&(l===null||m)&&O.begin(k,l);if(L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(G0.enabled===!0&&G0.isPresenting===!0&&(O===null||O.isCompositing()===!1)){if(G0.cameraAutoUpdate===!0)G0.updateCamera(f);f=G0.getCamera()}if(L.isScene===!0)L.onBeforeRender(k,L,f,l);if(I=q0.get(L,P.length),I.init(f),I.state.textureUnits=p.getTextureUnits(),P.push(I),i0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),c0.setFromProjectionMatrix(i0,H$,f.reversedDepth),QJ=this.localClippingEnabled,s0=Z0.init(this.clippingPlanes,QJ),V=B0.get(L,A.length),V.init(),A.push(V),G0.enabled===!0&&G0.isPresenting===!0){let M0=k.xr.getDepthSensingMesh();if(M0!==null)p6(M0,f,-1/0,k.sortObjects)}if(p6(L,f,0,k.sortObjects),V.finish(),_!==null)_.updateLights(I.state.lightsArray);if(k.sortObjects===!0)V.sort(W0,A0);if(kJ=G0.enabled===!1||G0.isPresenting===!1||G0.hasDepthSensing()===!1,kJ)w0.addToRenderList(V,L);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(s0===!0)Z0.beginShadows();let x=I.state.shadowsArray;if(P0.render(x,L,f),s0===!0)Z0.endShadows();if((h&&O.hasRenderPass())===!1){let{opaque:M0,transmissive:F0}=V;if(I.setupLights(),f.isArrayCamera){let L0=f.cameras;if(F0.length>0)for(let k0=0,x0=L0.length;k0<x0;k0++){let d0=L0[k0];OZ(M0,F0,L,d0)}if(kJ)w0.render(L);for(let k0=0,x0=L0.length;k0<x0;k0++){let d0=L0[k0];EZ(V,L,d0,d0.viewport)}}else{if(F0.length>0)OZ(M0,F0,L,f);if(kJ)w0.render(L);EZ(V,L,f)}}if(l!==null&&a===0)p.updateMultisampleRenderTarget(l),p.updateRenderTargetMipmap(l);if(h)O.end(k);if(L.isScene===!0)L.onAfterRender(k,L,f);if(X0.resetDefaultState(),Q0=-1,n=null,P.pop(),P.length>0){if(I=P[P.length-1],p.setTextureUnits(I.state.textureUnits),s0===!0)Z0.setGlobalState(k.clippingPlanes,I.state.camera)}else I=null;if(A.pop(),A.length>0)V=A[A.length-1];else V=null;if(_!==null)_.renderEnd()};function p6(L,f,m,h){if(L.visible===!1)return;if(L.layers.test(f.layers)){if(L.isGroup)m=L.renderOrder;else if(L.isLOD){if(L.autoUpdate===!0)L.update(f)}else if(L.isLightProbeGrid)I.pushLightProbeGrid(L);else if(L.isLight){if(I.pushLight(L),L.castShadow)I.pushShadow(L)}else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(c0)){if(h)GJ.setFromMatrixPosition(L.matrixWorld).applyMatrix4(i0);let M0=u.update(L),F0=L.material;if(F0.visible)V.push(L,M0,F0,m,GJ.z,null,f)}}else if(L.isMesh||L.isLine||L.isPoints){if(!L.frustumCulled||L.intersectsFrustum(c0)){let M0=u.update(L),F0=L.material;if(h){if(L.boundingSphere!==void 0){if(L.boundingSphere===null)L.computeBoundingSphere();GJ.copy(L.boundingSphere.center)}else{if(M0.boundingSphere===null)M0.computeBoundingSphere();GJ.copy(M0.boundingSphere.center)}GJ.applyMatrix4(L.matrixWorld).applyMatrix4(i0)}if(Array.isArray(F0)){let L0=M0.groups;for(let k0=0,x0=L0.length;k0<x0;k0++){let d0=L0[k0],V0=F0[d0.materialIndex];if(V0&&V0.visible)V.push(L,M0,V0,m,GJ.z,d0,f)}}else if(F0.visible)V.push(L,M0,F0,m,GJ.z,null,f)}}}let D0=L.children;for(let M0=0,F0=D0.length;M0<F0;M0++)p6(D0[M0],f,m,h)}function EZ(L,f,m,h){let{opaque:x,transmissive:D0,transparent:M0}=L;if(I.setupLightsView(m),s0===!0)Z0.setGlobalState(k.clippingPlanes,m);if(h)B.viewport(r.copy(h));if(x.length>0)w7(x,f,m);if(D0.length>0)w7(D0,f,m);if(M0.length>0)w7(M0,f,m);B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function OZ(L,f,m,h){if((m.isScene===!0?m.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[h.id]===void 0){let V0=r0.has("EXT_color_buffer_half_float")||r0.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[h.id]=new aJ(1,1,{generateMipmaps:!0,type:V0?R9:N9,minFilter:t9,samples:Math.max(4,EJ.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:n0.workingColorSpace})}let D0=I.state.transmissionRenderTarget[h.id],M0=h.viewport||r;D0.setSize(M0.z*k.transmissionResolutionScale,M0.w*k.transmissionResolutionScale);let F0=k.getRenderTarget(),L0=k.getActiveCubeFace(),k0=k.getActiveMipmapLevel();if(k.setRenderTarget(D0),k.getClearColor(C0),XJ=k.getClearAlpha(),XJ<1)k.setClearColor(16777215,0.5);if(k.clear(),kJ)w0.render(m);let x0=k.toneMapping;k.toneMapping=q9;let d0=h.viewport;if(h.viewport!==void 0)h.viewport=void 0;if(I.setupLightsView(h),s0===!0)Z0.setGlobalState(k.clippingPlanes,h);if(w7(L,m,h),p.updateMultisampleRenderTarget(D0),p.updateRenderTargetMipmap(D0),r0.has("WEBGL_multisampled_render_to_texture")===!1){let V0=!1;for(let e0=0,RJ=f.length;e0<RJ;e0++){let FJ=f[e0],{object:YJ,geometry:SJ,material:R0,group:vJ}=FJ;if(R0.side===oJ&&YJ.layers.test(h.layers)){let o0=R0.side;R0.side=lJ,R0.needsUpdate=!0,RZ(YJ,m,h,SJ,R0,vJ),R0.side=o0,R0.needsUpdate=!0,V0=!0}}if(V0===!0)p.updateMultisampleRenderTarget(D0),p.updateRenderTargetMipmap(D0)}if(k.setRenderTarget(F0,L0,k0),k.setClearColor(C0,XJ),d0!==void 0)h.viewport=d0;k.toneMapping=x0}function w7(L,f,m){let h=f.isScene===!0?f.overrideMaterial:null;for(let x=0,D0=L.length;x<D0;x++){let M0=L[x],{object:F0,geometry:L0,group:k0}=M0,x0=M0.material;if(x0.allowOverride===!0&&h!==null)x0=h;if(F0.layers.test(m.layers))RZ(F0,f,m,L0,x0,k0)}}function RZ(L,f,m,h,x,D0){if(_!==null&&x.isNodeMaterial)_.setObject(L,x);if(L.onBeforeRender(k,f,m,h,x,D0),L.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),x.onBeforeRender(k,f,m,h,L,D0),x.transparent===!0&&x.side===oJ&&x.forceSinglePass===!1)x.side=lJ,x.needsUpdate=!0,k.renderBufferDirect(m,f,h,x,L,D0),x.side=p9,x.needsUpdate=!0,k.renderBufferDirect(m,f,h,x,L,D0),x.side=oJ;else k.renderBufferDirect(m,f,h,x,L,D0);L.onAfterRender(k,f,m,h,x,D0)}function _7(L,f,m){if(f.isScene!==!0)f=pJ;let h=S.get(L),x=I.state.lights,D0=I.state.shadowsArray,M0=x.state.version,F0=o.getParameters(L,x.state,D0,f,m,I.state.lightProbeGridArray),L0=o.getProgramCacheKey(F0),k0=h.programs;h.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?f.environment:null,h.fog=f.fog;let x0=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;if(h.envMap=e.get(L.envMap||h.environment,x0),h.envMapRotation=h.environment!==null&&L.envMap===null?f.environmentRotation:L.envMapRotation,k0===void 0)L.addEventListener("dispose",F9),k0=new Map,h.programs=k0;let d0=k0.get(L0);if(d0!==void 0){if(h.currentProgram===d0&&h.lightsStateVersion===M0)return LZ(L,F0),d0}else{if(F0.uniforms=o.getUniforms(L),_!==null&&L.isNodeMaterial)_.build(L,m,F0);L.onBeforeCompile(F0,k),d0=o.acquireProgram(F0,L0),k0.set(L0,d0),h.uniforms=F0.uniforms}let V0=h.uniforms;if(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)V0.clippingPlanes=Z0.uniform;if(LZ(L,F0),h.needsLights=xY(L),h.lightsStateVersion=M0,h.needsLights)V0.ambientLightColor.value=x.state.ambient,V0.lightProbe.value=x.state.probe,V0.sunLights.value=x.state.sun,V0.sunLightShadows.value=x.state.sunShadow,V0.directionalLights.value=x.state.directional,V0.directionalLightShadows.value=x.state.directionalShadow,V0.spotLights.value=x.state.spot,V0.spotLightShadows.value=x.state.spotShadow,V0.rectAreaLights.value=x.state.rectArea,V0.ltc_1.value=x.state.rectAreaLTC1,V0.ltc_2.value=x.state.rectAreaLTC2,V0.pointLights.value=x.state.point,V0.pointLightShadows.value=x.state.pointShadow,V0.hemisphereLights.value=x.state.hemi,V0.sunShadowMatrix.value=x.state.sunShadowMatrix,V0.sunShadowCascade.value=x.state.sunShadowCascade,V0.directionalShadowMatrix.value=x.state.directionalShadowMatrix,V0.spotLightMatrix.value=x.state.spotLightMatrix,V0.spotLightMap.value=x.state.spotLightMap,V0.pointShadowMatrix.value=x.state.pointShadowMatrix;return h.lightProbeGrid=I.state.lightProbeGridArray.length>0,h.currentProgram=d0,h.uniformsList=null,d0}function MZ(L){if(L.uniformsList===null){let f=L.currentProgram.getUniforms();L.uniformsList=B7.seqWithValue(f.seq,L.uniforms)}return L.uniformsList}function LZ(L,f){let m=S.get(L);m.outputColorSpace=f.outputColorSpace,m.batching=f.batching,m.batchingColor=f.batchingColor,m.instancing=f.instancing,m.instancingColor=f.instancingColor,m.instancingMorph=f.instancingMorph,m.skinning=f.skinning,m.morphTargets=f.morphTargets,m.morphNormals=f.morphNormals,m.morphColors=f.morphColors,m.morphTargetsCount=f.morphTargetsCount,m.numClippingPlanes=f.numClippingPlanes,m.numIntersection=f.numClipIntersection,m.vertexAlphas=f.vertexAlphas,m.vertexTangents=f.vertexTangents,m.toneMapping=f.toneMapping}function vY(L,f){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;w.setFromMatrixPosition(f.matrixWorld);for(let m=0,h=L.length;m<h;m++){let x=L[m];if(x.texture!==null&&x.boundingBox.containsPoint(w))return x}return null}function bY(L,f,m,h,x){if(f.isScene!==!0)f=pJ;p.resetTextureUnits();let D0=f.fog,M0=h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial?f.environment:null,F0=l===null?k.outputColorSpace:l.isXRRenderTarget===!0?l.texture.colorSpace:n0.workingColorSpace,L0=h.isMeshStandardMaterial||h.isMeshLambertMaterial&&!h.envMap||h.isMeshPhongMaterial&&!h.envMap,k0=e.get(h.envMap||M0,L0),x0=h.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,d0=!!m.attributes.tangent&&(!!h.normalMap||h.anisotropy>0),V0=!!m.morphAttributes.position,e0=!!m.morphAttributes.normal,RJ=!!m.morphAttributes.color,FJ=q9;if(h.toneMapped){if(l===null||l.isXRRenderTarget===!0)FJ=k.toneMapping}let YJ=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,SJ=YJ!==void 0?YJ.length:0,R0=S.get(h),vJ=I.state.lights;if(s0===!0){if(QJ===!0||L!==n){let qJ=L===n&&h.id===Q0;Z0.setState(h,L,qJ)}}let o0=!1;if(h.version===R0.__version){if(R0.needsLights&&R0.lightsStateVersion!==vJ.state.version)o0=!0;else if(R0.outputColorSpace!==F0)o0=!0;else if(x.isBatchedMesh&&R0.batching===!1)o0=!0;else if(!x.isBatchedMesh&&R0.batching===!0)o0=!0;else if(x.isBatchedMesh&&R0.batchingColor===!0&&x._colorsTexture===null)o0=!0;else if(x.isBatchedMesh&&R0.batchingColor===!1&&x._colorsTexture!==null)o0=!0;else if(x.isInstancedMesh&&R0.instancing===!1)o0=!0;else if(!x.isInstancedMesh&&R0.instancing===!0)o0=!0;else if(x.isSkinnedMesh&&R0.skinning===!1)o0=!0;else if(!x.isSkinnedMesh&&R0.skinning===!0)o0=!0;else if(x.isInstancedMesh&&R0.instancingColor===!0&&x.instanceColor===null)o0=!0;else if(x.isInstancedMesh&&R0.instancingColor===!1&&x.instanceColor!==null)o0=!0;else if(x.isInstancedMesh&&R0.instancingMorph===!0&&x.morphTexture===null)o0=!0;else if(x.isInstancedMesh&&R0.instancingMorph===!1&&x.morphTexture!==null)o0=!0;else if(R0.envMap!==k0)o0=!0;else if(h.fog===!0&&R0.fog!==D0)o0=!0;else if(R0.numClippingPlanes!==void 0&&(R0.numClippingPlanes!==Z0.numPlanes||R0.numIntersection!==Z0.numIntersection))o0=!0;else if(R0.vertexAlphas!==x0)o0=!0;else if(R0.vertexTangents!==d0)o0=!0;else if(R0.morphTargets!==V0)o0=!0;else if(R0.morphNormals!==e0)o0=!0;else if(R0.morphColors!==RJ)o0=!0;else if(R0.toneMapping!==FJ)o0=!0;else if(R0.morphTargetsCount!==SJ)o0=!0;else if(!!R0.lightProbeGrid!==I.state.lightProbeGridArray.length>0)o0=!0}else o0=!0,R0.__version=h.version;let tJ=R0.currentProgram;if(o0===!0){if(tJ=_7(h,f,x),_&&h.isNodeMaterial)_.onUpdateProgram(h,tJ,R0)}let D9=!1,j9=!1,G8=!1,KJ=tJ.getUniforms(),OJ=R0.uniforms;if(B.useProgram(tJ.program))D9=!0,j9=!0,G8=!0;if(h.id!==Q0)Q0=h.id,j9=!0;if(R0.needsLights){let qJ=vY(I.state.lightProbeGridArray,x);if(R0.lightProbeGrid!==qJ)R0.lightProbeGrid=qJ,j9=!0}if(D9||n!==L){if(B.buffers.depth.getReversed()&&L.reversedDepth!==!0)L._reversedDepth=!0,L.updateProjectionMatrix();KJ.setValue(y,"projectionMatrix",L.projectionMatrix),KJ.setValue(y,"viewMatrix",L.matrixWorldInverse);let f9=KJ.map.cameraPosition;if(f9!==void 0)f9.setValue(y,wJ.setFromMatrixPosition(L.matrixWorld));if(EJ.logarithmicDepthBuffer)KJ.setValue(y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2));if(h.isMeshPhongMaterial||h.isMeshToonMaterial||h.isMeshLambertMaterial||h.isMeshBasicMaterial||h.isMeshStandardMaterial||h.isShaderMaterial)KJ.setValue(y,"isOrthographic",L.isOrthographicCamera===!0);if(n!==L)n=L,j9=!0,G8=!0}if(R0.needsLights){if(vJ.state.sunShadowMap.length>0)KJ.setValue(y,"sunShadowMap",vJ.state.sunShadowMap,p);if(vJ.state.directionalShadowMap.length>0)KJ.setValue(y,"directionalShadowMap",vJ.state.directionalShadowMap,p);if(vJ.state.spotShadowMap.length>0)KJ.setValue(y,"spotShadowMap",vJ.state.spotShadowMap,p);if(vJ.state.pointShadowMap.length>0)KJ.setValue(y,"pointShadowMap",vJ.state.pointShadowMap,p)}if(x.isSkinnedMesh){KJ.setOptional(y,x,"bindMatrix"),KJ.setOptional(y,x,"bindMatrixInverse");let qJ=x.skeleton;if(qJ){if(qJ.boneTexture===null)qJ.computeBoneTexture();KJ.setValue(y,"boneTexture",qJ.boneTexture,p)}}if(x.isBatchedMesh){if(KJ.setOptional(y,x,"batchingTexture"),KJ.setValue(y,"batchingTexture",x._matricesTexture,p),KJ.setOptional(y,x,"batchingIdTexture"),KJ.setValue(y,"batchingIdTexture",x._indirectTexture,p),KJ.setOptional(y,x,"batchingColorTexture"),x._colorsTexture!==null)KJ.setValue(y,"batchingColorTexture",x._colorsTexture,p)}let y9=m.morphAttributes;if(y9.position!==void 0||y9.normal!==void 0||y9.color!==void 0)a0.update(x,m,tJ);if(j9||R0.receiveShadow!==x.receiveShadow)R0.receiveShadow=x.receiveShadow,KJ.setValue(y,"receiveShadow",x.receiveShadow);if((h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial)&&h.envMap===null&&f.environment!==null)OJ.envMapIntensity.value=f.environmentIntensity;if(OJ.dfgLUT!==void 0)OJ.dfgLUT.value=zN();if(j9){if(KJ.setValue(y,"toneMappingExposure",k.toneMappingExposure),R0.needsLights)hY(OJ,G8);if(D0&&h.fog===!0)E0.refreshFogUniforms(OJ,D0);if(E0.refreshMaterialUniforms(OJ,h,$0,s,I.state.transmissionRenderTarget[L.id]),R0.needsLights&&R0.lightProbeGrid){let qJ=R0.lightProbeGrid;OJ.probesSH.value=qJ.texture,OJ.probesMin.value.copy(qJ.boundingBox.min),OJ.probesMax.value.copy(qJ.boundingBox.max),OJ.probesResolution.value.copy(qJ.resolution)}B7.upload(y,MZ(R0),OJ,p)}if(h.isShaderMaterial&&h.uniformsNeedUpdate===!0)B7.upload(y,MZ(R0),OJ,p),h.uniformsNeedUpdate=!1;if(h.isSpriteMaterial)KJ.setValue(y,"center",x.center);if(KJ.setValue(y,"modelViewMatrix",x.modelViewMatrix),KJ.setValue(y,"normalMatrix",x.normalMatrix),KJ.setValue(y,"modelMatrix",x.matrixWorld),h.uniformsGroups!==void 0){let qJ=h.uniformsGroups;for(let f9=0,F8=qJ.length;f9<F8;f9++){let kZ=qJ[f9];O0.update(kZ,tJ),O0.bind(kZ,tJ)}}return tJ}function hY(L,f){L.ambientLightColor.needsUpdate=f,L.lightProbe.needsUpdate=f,L.sunLights.needsUpdate=f,L.sunLightShadows.needsUpdate=f,L.directionalLights.needsUpdate=f,L.directionalLightShadows.needsUpdate=f,L.pointLights.needsUpdate=f,L.pointLightShadows.needsUpdate=f,L.spotLights.needsUpdate=f,L.spotLightShadows.needsUpdate=f,L.rectAreaLights.needsUpdate=f,L.hemisphereLights.needsUpdate=f}function xY(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return d},this.getActiveMipmapLevel=function(){return a},this.getRenderTarget=function(){return l},this.setRenderTargetTextures=function(L,f,m){let h=S.get(L);if(h.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,h.__autoAllocateDepthBuffer===!1)h.__useRenderToTexture=!1;S.get(L.texture).__webglTexture=f,S.get(L.depthTexture).__webglTexture=h.__autoAllocateDepthBuffer?void 0:m,h.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,f){let m=S.get(L);m.__webglFramebuffer=f,m.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(L,f=0,m=0){l=L,d=f,a=m;let h=null,x=!1,D0=!1;if(L){let F0=S.get(L);if(F0.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(y.FRAMEBUFFER,F0.__webglFramebuffer),r.copy(L.viewport),J0.copy(L.scissor),S0=L.scissorTest,B.viewport(r),B.scissor(J0),B.setScissorTest(S0),Q0=-1;return}else if(F0.__webglFramebuffer===void 0)p.setupRenderTarget(L);else if(F0.__hasExternalTextures)p.rebindTextures(L,S.get(L.texture).__webglTexture,S.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let x0=L.depthTexture;if(F0.__boundDepthTexture!==x0){if(x0!==null&&S.has(x0)&&(L.width!==x0.image.width||L.height!==x0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");p.setupDepthRenderbuffer(L)}}let L0=L.texture;if(L0.isData3DTexture||L0.isDataArrayTexture||L0.isCompressedArrayTexture)D0=!0;let k0=S.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget){if(Array.isArray(k0[f]))h=k0[f][m];else h=k0[f];x=!0}else if(L.samples>0&&p.useMultisampledRTT(L)===!1)h=S.get(L).__webglMultisampledFramebuffer;else if(Array.isArray(k0))h=k0[m];else h=k0;r.copy(L.viewport),J0.copy(L.scissor),S0=L.scissorTest}else r.copy(j0).multiplyScalar($0).floor(),J0.copy(z0).multiplyScalar($0).floor(),S0=VJ;if(m!==0)h=b;if(B.bindFramebuffer(y.FRAMEBUFFER,h))B.drawBuffers(L,h);if(B.viewport(r),B.scissor(J0),B.setScissorTest(S0),x){let F0=S.get(L.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+f,F0.__webglTexture,m)}else if(D0){let F0=f;for(let L0=0;L0<L.textures.length;L0++){let k0=S.get(L.textures[L0]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+L0,k0.__webglTexture,m,F0)}}else if(L!==null&&m!==0){let F0=S.get(L.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,F0.__webglTexture,m)}Q0=-1};function VZ(L){let f=S.get(L);if(f.__readFormat!==L.format||f.__readType!==L.type)f.__readFormat=L.format,f.__readType=L.type,f.__formatReadable=EJ.textureFormatReadable(L.format),f.__typeReadable=EJ.textureTypeReadable(L.type);return f}if(this.readRenderTargetPixels=function(L,f,m,h,x,D0,M0,F0=0){if(!(L&&L.isWebGLRenderTarget)){y0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let L0=S.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&M0!==void 0)L0=L0[M0];if(L0){B.bindFramebuffer(y.FRAMEBUFFER,L0);try{let k0=L.textures[F0],x0=k0.format,d0=k0.type;if(L.textures.length>1)y.readBuffer(y.COLOR_ATTACHMENT0+F0);let V0=VZ(k0);if(V0.__formatReadable===!1){y0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(V0.__typeReadable===!1){y0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=L.width-h&&(m>=0&&m<=L.height-x))y.readPixels(f,m,h,x,i.convert(x0),i.convert(d0),D0)}finally{let k0=l!==null?S.get(l).__webglFramebuffer:null;B.bindFramebuffer(y.FRAMEBUFFER,k0)}}},this.readRenderTargetPixelsAsync=async function(L,f,m,h,x,D0,M0,F0=0){if(!(L&&L.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let L0=S.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&M0!==void 0)L0=L0[M0];if(L0)if(f>=0&&f<=L.width-h&&(m>=0&&m<=L.height-x)){B.bindFramebuffer(y.FRAMEBUFFER,L0);let k0=L.textures[F0],x0=k0.format,d0=k0.type;if(L.textures.length>1)y.readBuffer(y.COLOR_ATTACHMENT0+F0);let V0=VZ(k0);if(V0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(V0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let e0=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,e0),y.bufferData(y.PIXEL_PACK_BUFFER,D0.byteLength,y.STREAM_READ),y.readPixels(f,m,h,x,i.convert(x0),i.convert(d0),0),y.bindBuffer(y.PIXEL_PACK_BUFFER,null);let RJ=l!==null?S.get(l).__webglFramebuffer:null;B.bindFramebuffer(y.FRAMEBUFFER,RJ);let FJ=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await uK(y,FJ,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,e0),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,D0),y.bindBuffer(y.PIXEL_PACK_BUFFER,null),y.deleteBuffer(e0),y.deleteSync(FJ),D0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,f=null,m=0){let h=Math.pow(2,-m),x=Math.floor(L.image.width*h),D0=Math.floor(L.image.height*h),M0=f!==null?f.x:0,F0=f!==null?f.y:0;p.setTexture2D(L,0),y.copyTexSubImage2D(y.TEXTURE_2D,m,0,0,M0,F0,x,D0),B.unbindTexture()},this.copyTextureToTexture=function(L,f,m=null,h=null,x=0,D0=0){let M0,F0,L0,k0,x0,d0,V0,e0,RJ,FJ=L.isCompressedTexture?L.mipmaps[D0]:L.image;if(m!==null)M0=m.max.x-m.min.x,F0=m.max.y-m.min.y,L0=m.isBox3?m.max.z-m.min.z:1,k0=m.min.x,x0=m.min.y,d0=m.isBox3?m.min.z:0;else{let OJ=Math.pow(2,-x);if(M0=Math.floor(FJ.width*OJ),F0=Math.floor(FJ.height*OJ),L.isDataArrayTexture)L0=FJ.depth;else if(L.isData3DTexture)L0=Math.floor(FJ.depth*OJ);else L0=1;k0=0,x0=0,d0=0}if(h!==null)V0=h.x,e0=h.y,RJ=h.z;else V0=0,e0=0,RJ=0;let YJ=i.convert(f.format),SJ=i.convert(f.type),R0;if(f.isData3DTexture)p.setTexture3D(f,0),R0=y.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)p.setTexture2DArray(f,0),R0=y.TEXTURE_2D_ARRAY;else p.setTexture2D(f,0),R0=y.TEXTURE_2D;B.activeTexture(y.TEXTURE0),B.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,f.flipY),B.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),B.pixelStorei(y.UNPACK_ALIGNMENT,f.unpackAlignment);let vJ=B.getParameter(y.UNPACK_ROW_LENGTH),o0=B.getParameter(y.UNPACK_IMAGE_HEIGHT),tJ=B.getParameter(y.UNPACK_SKIP_PIXELS),D9=B.getParameter(y.UNPACK_SKIP_ROWS),j9=B.getParameter(y.UNPACK_SKIP_IMAGES);B.pixelStorei(y.UNPACK_ROW_LENGTH,FJ.width),B.pixelStorei(y.UNPACK_IMAGE_HEIGHT,FJ.height),B.pixelStorei(y.UNPACK_SKIP_PIXELS,k0),B.pixelStorei(y.UNPACK_SKIP_ROWS,x0),B.pixelStorei(y.UNPACK_SKIP_IMAGES,d0);let G8=L.isDataArrayTexture||L.isData3DTexture,KJ=f.isDataArrayTexture||f.isData3DTexture;if(L.isDepthTexture){let OJ=S.get(L),y9=S.get(f),qJ=S.get(OJ.__renderTarget),f9=S.get(y9.__renderTarget);B.bindFramebuffer(y.READ_FRAMEBUFFER,qJ.__webglFramebuffer),B.bindFramebuffer(y.DRAW_FRAMEBUFFER,f9.__webglFramebuffer);for(let F8=0;F8<L0;F8++){if(G8)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,S.get(L).__webglTexture,x,d0+F8),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,S.get(f).__webglTexture,D0,RJ+F8);y.blitFramebuffer(k0,x0,M0,F0,V0,e0,M0,F0,y.DEPTH_BUFFER_BIT,y.NEAREST)}B.bindFramebuffer(y.READ_FRAMEBUFFER,null),B.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(x!==0||L.isRenderTargetTexture||S.has(L)){let OJ=S.get(L),y9=S.get(f);B.bindFramebuffer(y.READ_FRAMEBUFFER,c),B.bindFramebuffer(y.DRAW_FRAMEBUFFER,T);for(let qJ=0;qJ<L0;qJ++){if(G8)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,OJ.__webglTexture,x,d0+qJ);else y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,OJ.__webglTexture,x);if(KJ)y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y9.__webglTexture,D0,RJ+qJ);else y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,y9.__webglTexture,D0);if(x!==0)y.blitFramebuffer(k0,x0,M0,F0,V0,e0,M0,F0,y.COLOR_BUFFER_BIT,y.NEAREST);else if(KJ)y.copyTexSubImage3D(R0,D0,V0,e0,RJ+qJ,k0,x0,M0,F0);else y.copyTexSubImage2D(R0,D0,V0,e0,k0,x0,M0,F0)}B.bindFramebuffer(y.READ_FRAMEBUFFER,null),B.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(KJ)if(L.isDataTexture||L.isData3DTexture)y.texSubImage3D(R0,D0,V0,e0,RJ,M0,F0,L0,YJ,SJ,FJ.data);else if(f.isCompressedArrayTexture)y.compressedTexSubImage3D(R0,D0,V0,e0,RJ,M0,F0,L0,YJ,FJ.data);else y.texSubImage3D(R0,D0,V0,e0,RJ,M0,F0,L0,YJ,SJ,FJ);else if(L.isDataTexture)y.texSubImage2D(y.TEXTURE_2D,D0,V0,e0,M0,F0,YJ,SJ,FJ.data);else if(L.isCompressedTexture)y.compressedTexSubImage2D(y.TEXTURE_2D,D0,V0,e0,FJ.width,FJ.height,YJ,FJ.data);else y.texSubImage2D(y.TEXTURE_2D,D0,V0,e0,M0,F0,YJ,SJ,FJ);if(B.pixelStorei(y.UNPACK_ROW_LENGTH,vJ),B.pixelStorei(y.UNPACK_IMAGE_HEIGHT,o0),B.pixelStorei(y.UNPACK_SKIP_PIXELS,tJ),B.pixelStorei(y.UNPACK_SKIP_ROWS,D9),B.pixelStorei(y.UNPACK_SKIP_IMAGES,j9),D0===0&&f.generateMipmaps)y.generateMipmap(R0);B.unbindTexture()},this.initRenderTarget=function(L){if(S.get(L).__webglFramebuffer===void 0)p.setupRenderTarget(L)},this.initTexture=function(L){if(L.isCubeTexture)p.setTextureCube(L,0);else if(L.isData3DTexture)p.setTexture3D(L,0);else if(L.isDataArrayTexture||L.isCompressedArrayTexture)p.setTexture2DArray(L,0);else p.setTexture2D(L,0);B.unbindTexture()},this.resetState=function(){d=0,a=0,l=null,B.reset(),X0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return H$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=n0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=n0._getUnpackColorSpace()}}var yW={type:"change"},a$={type:"start"},vW={type:"end"},_6=new b8,fW=new J9,PN=Math.cos(70*q$.DEG2RAD),CJ=new j,cJ=2*Math.PI,ZJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},o$=0.000001;class r$ extends z6{constructor(J,Q=null){super(J,Q);if(this.state=ZJ.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:iJ.ROTATE,MIDDLE:iJ.DOLLY,RIGHT:iJ.PAN},this.touches={ONE:U9.ROTATE,TWO:U9.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new uJ,this._lastTargetPosition=new j,this._quat=new uJ().setFromUnitVectors(J.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new M7,this._sphericalDelta=new M7,this._scale=1,this._panOffset=new j,this._rotateStart=new I0,this._rotateEnd=new I0,this._rotateDelta=new I0,this._panStart=new I0,this._panEnd=new I0,this._panDelta=new I0,this._dollyStart=new I0,this._dollyEnd=new I0,this._dollyDelta=new I0,this._dollyDirection=new j,this._mouse=new I0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=AN.bind(this),this._onPointerDown=CN.bind(this),this._onPointerUp=wN.bind(this),this._onContextMenu=vN.bind(this),this._onMouseWheel=SN.bind(this),this._onKeyDown=jN.bind(this),this._onTouchStart=yN.bind(this),this._onTouchMove=fN.bind(this),this._onMouseDown=_N.bind(this),this._onMouseMove=TN.bind(this),this._interceptControlDown=bN.bind(this),this._interceptControlUp=hN.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ZJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yW),this.update(),this.state=ZJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(CJ.copy(Q).sub(this.target),CJ.applyQuaternion(this._quat),this._spherical.setFromVector3(CJ),this.autoRotate&&this.state===ZJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite($)&&isFinite(Z)){if($<-Math.PI)$+=cJ;else if($>Math.PI)$-=cJ;if(Z<-Math.PI)Z+=cJ;else if(Z>Math.PI)Z-=cJ;if($<=Z)this._spherical.theta=Math.max($,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+Z)/2?Math.max($,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let K=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),K=W!=this._spherical.radius}if(CJ.setFromSpherical(this._spherical),CJ.applyQuaternion(this._quatInverse),Q.copy(this.target).add(CJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let Y=CJ.length();W=this._clampDistance(Y*this._scale);let H=Y-W;this.object.position.addScaledVector(this._dollyDirection,H),this.object.updateMatrixWorld(),K=!!H}else if(this.object.isOrthographicCamera){let Y=new j(this._mouse.x,this._mouse.y,0);Y.unproject(this.object);let H=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),K=H!==this.object.zoom;let X=new j(this._mouse.x,this._mouse.y,0);X.unproject(this.object),this.object.position.sub(X).add(Y),this.object.updateMatrixWorld(),W=CJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(_6.origin.copy(this.object.position),_6.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_6.direction))<PN)this.object.lookAt(this.target);else fW.setFromNormalAndCoplanarPoint(this.object.up,this.target),_6.intersectPlane(fW,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),K=!0}if(this._scale=1,this._performCursorZoom=!1,K||this._lastPosition.distanceToSquared(this.object.position)>o$||8*(1-this._lastQuaternion.dot(this.object.quaternion))>o$||this._lastTargetPosition.distanceToSquared(this.target)>o$)return this.dispatchEvent(yW),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return cJ/60*this.autoRotateSpeed*J;else return cJ/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){CJ.setFromMatrixColumn(Q,0),CJ.multiplyScalar(-J),this._panOffset.add(CJ)}_panUp(J,Q){if(this.screenSpacePanning===!0)CJ.setFromMatrixColumn(Q,1);else CJ.setFromMatrixColumn(Q,0),CJ.crossVectors(this.object.up,CJ);CJ.multiplyScalar(J),this._panOffset.add(CJ)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;CJ.copy(Z).sub(this.target);let K=CJ.length();K*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*K/$.clientHeight,this.object.matrix),this._panUp(2*Q*K/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),Z=J-$.left,K=Q-$.top,W=$.width,Y=$.height;this._mouse.x=Z/W*2-1,this._mouse.y=-(K/Y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(cJ*this._rotateDelta.x/Q.clientHeight),this._rotateUp(cJ*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(cJ*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-cJ*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(cJ*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-cJ*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._rotateStart.set($,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panStart.set($,Z)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,K=Math.sqrt($*$+Z*Z);this._dollyStart.set(0,K)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+$.x),K=0.5*(J.pageY+$.y);this._rotateEnd.set(Z,K)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(cJ*this._rotateDelta.x/Q.clientHeight),this._rotateUp(cJ*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panEnd.set($,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,K=Math.sqrt($*$+Z*Z);this._dollyEnd.set(0,K),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+Q.x)*0.5,Y=(J.pageY+Q.y)*0.5;this._updateZoomParameters(W,Y)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new I0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function CN(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function AN(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function wN(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vW),this.state=ZJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function _N(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case iJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=ZJ.DOLLY;break;case iJ.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=ZJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=ZJ.ROTATE}break;case iJ.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=ZJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=ZJ.PAN}break;default:this.state=ZJ.NONE}if(this.state!==ZJ.NONE)this.dispatchEvent(a$)}function TN(J){switch(this.state){case ZJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case ZJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case ZJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function SN(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==ZJ.NONE)return;J.preventDefault(),this.dispatchEvent(a$),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(vW)}function jN(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function yN(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case U9.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=ZJ.TOUCH_ROTATE;break;case U9.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=ZJ.TOUCH_PAN;break;default:this.state=ZJ.NONE}break;case 2:switch(this.touches.TWO){case U9.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=ZJ.TOUCH_DOLLY_PAN;break;case U9.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=ZJ.TOUCH_DOLLY_ROTATE;break;default:this.state=ZJ.NONE}break;default:this.state=ZJ.NONE}if(this.state!==ZJ.NONE)this.dispatchEvent(a$)}function fN(J){switch(this._trackPointer(J),this.state){case ZJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case ZJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case ZJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case ZJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=ZJ.NONE}}function vN(J){if(this.enabled===!1)return;J.preventDefault()}function bN(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function hN(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}class t$ extends LJ{constructor(J=document.createElement("div")){super();this.isCSS2DObject=!0,this.element=J,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new I0(0.5,0.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(Q){if(Q.element&&Q.element instanceof Q.element.ownerDocument.defaultView.Element&&Q.element.parentNode!==null)Q.element.remove()})})}copy(J,Q){return super.copy(J,Q),this.element=J.element.cloneNode(!0),this.center=J.center,this.rotation2D=J.rotation2D,this}}var d8=new j,bW=new WJ,hW=new WJ,xW=new j,gW=new j;class e${constructor(J={}){let Q=this,$,Z,K,W,Y={objects:new WeakMap},H=J.element!==void 0?J.element:document.createElement("div");H.style.overflow="hidden",this.domElement=H,this.sortObjects=!0,this.getSize=function(){return{width:$,height:Z}},this.render=function(F,R){if(F.matrixWorldAutoUpdate===!0)F.updateMatrixWorld();if(R.parent===null&&R.matrixWorldAutoUpdate===!0)R.updateMatrixWorld();if(bW.copy(R.matrixWorldInverse),hW.multiplyMatrices(R.projectionMatrix,bW),U(F,F,R),this.sortObjects)q(F)},this.setSize=function(F,R){$=F,Z=R,K=$/2,W=Z/2,H.style.width=F+"px",H.style.height=R+"px"};function X(F){if(F.isCSS2DObject)F.element.style.display="none";for(let R=0,z=F.children.length;R<z;R++)X(F.children[R])}function U(F,R,z){if(F.visible===!1){X(F);return}if(F.isCSS2DObject){d8.setFromMatrixPosition(F.matrixWorld),d8.applyMatrix4(hW);let E=d8.z>=-1&&d8.z<=1&&F.layers.test(z.layers)===!0,N=F.element;if(N.style.display=E===!0?"":"none",E===!0){F.onBeforeRender(Q,R,z);let w=100*F.center.x,V=100*F.center.y;N.style.transformOrigin=`${w}% ${V}%`;let I=-F.rotation2D,A=d8.x*K+K,P=-d8.y*W+W;if(N.style.transform=`translate(${-w}%, ${-V}%) translate(${A}px, ${P}px) rotate(${I}rad)`,N.parentNode!==H)H.appendChild(N);F.onAfterRender(Q,R,z)}let C={distanceToCameraSquared:G(z,F)};Y.objects.set(F,C)}for(let E=0,N=F.children.length;E<N;E++)U(F.children[E],R,z)}function G(F,R){return xW.setFromMatrixPosition(F.matrixWorld),gW.setFromMatrixPosition(R.matrixWorld),xW.distanceToSquared(gW)}function D(F){let R=[];return F.traverseVisible(function(z){if(z.isCSS2DObject)R.push(z)}),R}function q(F){let R=D(F).sort(function(E,N){if(E.renderOrder!==N.renderOrder)return N.renderOrder-E.renderOrder;let C=Y.objects.get(E).distanceToCameraSquared,w=Y.objects.get(N).distanceToCameraSquared;return C-w}),z=R.length;for(let E=0,N=R.length;E<N;E++)R[E].element.style.zIndex=z-E}}}var j6=0.4,QZ=-0.5,JJ={minX:9.5,maxX:15.5,minZ:-5.2,maxZ:0.6};var I7={fromZ:-4.4,toZ:-3},c8=[12.6,0,-1.4],n8=[[10.6,0,-4.75],[11.6,0,-4.75]],z7=[14.2,0,-5.05],s8=[[13.7,0,-4.35],[14.7,0,-4.35]],lW=[10.6,0,-0.1];var i8=[-5.2,0,2.2],a8=[4.6,0,-4.8],dW=[4.6,0,-1.3],T6=[[4,0,-1.8],[2.5,0,-2.9],[6.7,0,-2.9]],uW=[Math.PI,Math.PI/2,-Math.PI/2],cW=[4.6,0,-2.9];var o8=Math.PI/2,S6=[16.4,0,2.6];var pW=[-3.5,-1];var xN=[-3.9,15.2,18.8],TJ=(J,Q,$,Z=!1,K)=>({position:[J,0,Q],facing:$,seated:Z,...K?{label:K}:{}});function u8(J,Q,$,Z,K=!1){let W=Math.cos(o8),Y=Math.sin(o8);return TJ(J[0]+Q*W+$*Y,J[2]-Q*Y+$*W,Z+o8,K)}function gN(J,Q,$){return[{key:"lounge",label:"Relaxing in the lounge",spots:T6.map(([Z,,K],W)=>TJ(Z,K,uW[W],!0))},{key:"galon",label:"Getting water from the galon",spots:[TJ(8.35,-0.4,Math.PI/2),TJ(8.2,-1.05,2.2),TJ(8.2,0.3,1.1)]},{key:"bakso",label:"Eating bakso at the gerobak",spots:[u8(Q,0.5,1.1,Math.PI,!0),u8(Q,-0.3,1.2,Math.PI,!0),u8(Q,1.3,0.9,-2.4)]},{key:"dapur",label:"In the pantry kitchen",spots:[TJ(8.25,2.6,Math.PI/2),TJ(8.3,0.65,Math.PI/2),TJ(8.25,3.3,Math.PI/2)]},{key:"kopi",label:"Coffee break at kopi sepeda",spots:[u8($,-0.5,0.85,Math.PI),u8($,0.5,0.85,Math.PI),u8($,1.45,0.3,-Math.PI/2)]},{key:"game",label:"Playing ping-pong",spots:[TJ(c8[0]-1.75,c8[2],Math.PI/2),TJ(c8[0]+1.75,c8[2],-Math.PI/2),TJ(s8[0][0],s8[0][2],Math.PI,!0,"Gaming on console")]},{key:"arcade",label:"Playing arcade games",spots:[TJ(n8[0][0],n8[0][2]+0.8,Math.PI),TJ(n8[1][0],n8[1][2]+0.8,Math.PI),TJ(s8[1][0],s8[1][2],Math.PI,!0,"Gaming on console")]},{key:"jalan",label:"Taking a stroll outside",spots:[TJ(S6[0]-0.8,S6[2]+0.3,Math.PI/2),TJ(J.minX+0.95,-0.9,-Math.PI/2),TJ(1.3,-4.4,Math.PI)]}]}function $Z(J){let Q=Math.max(1,J),$=Math.max(3,Math.ceil(Q/pW.length)),Z=Array.from({length:Q},(D,q)=>{let F=q<$?0:1;return[-2-(F===0?q:q-$)*2.6,0,pW[F]]}),K=-2-($-1)*2.6-2.3,W=K- -9.5,Y={minX:K,maxX:9.5,minZ:-5.2,maxZ:4.2},H=[-11.9+W,0,-2.3],X=[-11.9+W,0,1.6],U=K-3.7,G=(JJ.maxX-U)/28.7;return{deskCount:Q,building:Y,desks:Z,baksoCart:H,kopiBike:X,sideLaneX:-10.15+W,gangCenterX:-11.4+W,camera:{target:[(U+JJ.maxX)/2-0.15,0.6,0.2],offset:xN.map((D)=>D*G)},pan:{minX:U-0.3,maxX:17,minZ:-7,maxZ:11},idleStops:gN(Y,H,X)}}var pN=[{radius:1.4,angles:[Math.PI,2*Math.PI,1.5*Math.PI,1.25*Math.PI,1.75*Math.PI]},{radius:2.1,angles:[1.2*Math.PI,1.8*Math.PI,1.5*Math.PI,1.35*Math.PI,1.65*Math.PI]}];function mN(J){let Q=pN.flatMap((Y)=>Y.angles.map((H)=>({radius:Y.radius,angle:H}))),{radius:$,angle:Z}=Q[J%Q.length],K=i8[0]+$*Math.cos(Z),W=i8[2]+$*Math.sin(Z);return{position:[K,0,W],facing:Math.atan2(i8[0]-K,i8[2]-W),seated:!1}}function nW(J,Q,$=0){let Z=Math.max(J.seat||1,1)-1;if(J.room==="Lounge"){let[H,X,U]=T6[Z%T6.length];return{position:[H,X,U],facing:uW[Z%T6.length],seated:!0}}if(J.roomPosition==="meeting-area")return mN($);let[K,W,Y]=Q.desks[Z%Q.desks.length];return{position:[K,W,Y-0.75],facing:0,seated:J.state==="Working"||J.state==="Reviewing"}}var mW=([J,Q])=>J>JJ.minX&&J<JJ.maxX&&Q>JJ.minZ&&Q<JJ.maxZ,lN=([J,Q])=>J>1.5&&J<7.8&&Q<-0.6;function sW(J,Q,$){if(Math.hypot(Q[0]-J[0],Q[1]-J[1])<0.3)return[Q];let{building:Z,sideLaneX:K}=$,W=(F)=>F[1]>Z.maxZ||F[0]<Z.minX||F[0]>Z.maxX&&!mW(F),Y=([F])=>F<Z.minX,H=[J],X=(F)=>mW(F)?[[F[0],-3.7],[3.1,-3.7],[3.1,0.4]]:lN(F)?[[3.1,F[1]],[3.1,0.4]]:[[F[0],0.4]],U=(F)=>Y(F)?[[K,F[1]],[K,5.4]]:[[F[0],5.4]];if(!W(J)&&!W(Q))H.push(...X(J),...X(Q).reverse());else if(Y(J)&&Y(Q))H.push([K,J[1]],[K,Q[1]]);else if(W(J)&&W(Q))H.push(...U(J),...U(Q).reverse());else if(W(Q))H.push(...X(J),[5.8,0.4],[5.8,5.4],...U(Q).reverse());else H.push(...U(J),[5.8,5.4],[5.8,0.4],...X(Q).reverse());H.push(Q);let G=[J];for(let F of H.slice(1)){let R=G[G.length-1];if(Math.hypot(F[0]-R[0],F[1]-R[1])>0.2)G.push(F)}let D=(F,R,z)=>Math.abs(F[0]-R[0])<0.01&&Math.abs(R[0]-z[0])<0.01||Math.abs(F[1]-R[1])<0.01&&Math.abs(R[1]-z[1])<0.01;for(let F=1;F<G.length-1;)if(D(G[F-1],G[F],G[F+1]))G.splice(F,1);else F+=1;let q=G.slice(1);if(q.length===0||q[q.length-1]!==Q)q.push(Q);return q}var P7=32000,JZ=["lounge","galon","game","bakso","jalan","arcade","kopi","dapur","game","lounge"];function ZZ(J,Q,$){let Z=new Map,K=new Map,W=Math.floor(Q/P7),Y=(H)=>$.idleStops.find((X)=>X.key===JZ[H%JZ.length]);for(let H of[...J].sort((X,U)=>X-U)){let X=W+(Math.max(H,1)-1)*3,U=Y(X);for(let D=0;D<JZ.length;D+=1){let q=Y(X+D);if((K.get(q.key)??0)<q.spots.length){U=q;break}}let G=K.get(U.key)??0;K.set(U.key,G+1),Z.set(H,{stop:U,placement:U.spots[G%U.spots.length]})}return Z}function iW(J,Q,$){return[Math.min(Math.max(J,$.minX),$.maxX),Math.min(Math.max(Q,$.minZ),$.maxZ)]}var vD=$Z(8);var C7=new j;function K9(J,Q,$,Z,K,W){let Y=2*Math.PI*K/4,H=Math.max(W-2*K,0),X=Math.PI/4;C7.copy(Q),C7[Z]=0,C7.normalize();let U=0.5*Y/(Y+H),G=1-C7.angleTo(J)/X;if(Math.sign(C7[$])===1)return G*U;else return H/(Y+H)+U+U*(1-G)}class y6 extends gJ{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let Y=this.toNonIndexed();this.index=null,this.attributes.position=Y.attributes.position,this.attributes.normal=Y.attributes.normal,this.attributes.uv=Y.attributes.uv;let H=new j,X=new j,U=new j(J,Q,$).divideScalar(2).subScalar(K),G=this.attributes.position.array,D=this.attributes.normal.array,q=this.attributes.uv.array,F=G.length/6,R=new j,z=0.5/W;for(let E=0,N=0;E<G.length;E+=3,N+=2)switch(H.fromArray(G,E),X.copy(H),X.x-=Math.sign(X.x)*z,X.y-=Math.sign(X.y)*z,X.z-=Math.sign(X.z)*z,X.normalize(),G[E+0]=U.x*Math.sign(H.x)+X.x*K,G[E+1]=U.y*Math.sign(H.y)+X.y*K,G[E+2]=U.z*Math.sign(H.z)+X.z*K,D[E+0]=X.x,D[E+1]=X.y,D[E+2]=X.z,Math.floor(E/F)){case 0:R.set(1,0,0),q[N+0]=K9(R,X,"z","y",K,$),q[N+1]=1-K9(R,X,"y","z",K,Q);break;case 1:R.set(-1,0,0),q[N+0]=1-K9(R,X,"z","y",K,$),q[N+1]=1-K9(R,X,"y","z",K,Q);break;case 2:R.set(0,1,0),q[N+0]=1-K9(R,X,"x","z",K,J),q[N+1]=K9(R,X,"z","x",K,$);break;case 3:R.set(0,-1,0),q[N+0]=1-K9(R,X,"x","z",K,J),q[N+1]=1-K9(R,X,"z","x",K,$);break;case 4:R.set(0,0,1),q[N+0]=1-K9(R,X,"x","y",K,J),q[N+1]=1-K9(R,X,"y","x",K,Q);break;case 5:R.set(0,0,-1),q[N+0]=K9(R,X,"x","y",K,J),q[N+1]=1-K9(R,X,"y","x",K,Q);break}}static fromJSON(J){return new y6(J.width,J.height,J.depth,J.segments,J.radius)}}var oW=new Map;function B9(J,Q,$,Z,K){let W=oW.get(J);if(W)return W;let Y=document.createElement("canvas");Y.width=Q,Y.height=$;let H=Y.getContext("2d");if(H)Z(H);let X=new D6(Y);if(X.colorSpace=W6,X.anisotropy=4,K)X.wrapS=H7,X.wrapT=H7,X.repeat.set(...K);return oW.set(J,X),X}function A7(J){let Q=J;return()=>{return Q=Q*16807%2147483647,(Q-1)/2147483646}}function aW(J){return B9(`wood-${J.join("x")}`,512,512,(Q)=>{let $=A7(7),Z=["#b98355","#a9744a","#c48f5f","#b07b4f","#9f6c43"],K=64;for(let W=0;W<8;W+=1){let Y=W%2===0?0:-96;while(Y<512){let H=128+Math.floor($()*96);Q.fillStyle=Z[Math.floor($()*Z.length)],Q.fillRect(Y,W*64,H,64),Q.strokeStyle="rgba(60,35,20,0.18)";for(let X=0;X<5;X+=1){let U=W*64+8+$()*48;Q.beginPath(),Q.moveTo(Y+4,U),Q.bezierCurveTo(Y+H/3,U+3,Y+2*H/3,U-3,Y+H-4,U),Q.stroke()}Q.fillStyle="rgba(50,28,15,0.55)",Q.fillRect(Y,W*64,2,64),Y+=H}Q.fillStyle="rgba(50,28,15,0.5)",Q.fillRect(0,W*64,512,2)}},J)}function rW(J){return B9(`tile-${J.join("x")}`,256,256,(Q)=>{Q.fillStyle="#e9e4da",Q.fillRect(0,0,256,256),Q.fillStyle="#d6cfc2";for(let $=0;$<=256;$+=64)Q.fillRect($-1,0,2,256),Q.fillRect(0,$-1,256,2)},J)}function f6(J,Q){return B9(`carpet-${J}-${Q.join("x")}`,128,128,($)=>{let Z=A7(11);$.fillStyle=J,$.fillRect(0,0,128,128);for(let K=0;K<900;K+=1)$.fillStyle=`rgba(0,0,0,${Z()*0.08})`,$.fillRect(Z()*128,Z()*128,1,1)},Q)}function tW(J){return B9(`grass-${J.join("x")}`,256,256,(Q)=>{let $=A7(3);Q.fillStyle="#5d8f4e",Q.fillRect(0,0,256,256);for(let Z=0;Z<2600;Z+=1){let K=70+Math.floor($()*60);Q.fillStyle=`rgb(${K-25},${K+55},${K-30})`,Q.fillRect($()*256,$()*256,2,3)}},J)}function eW(J){return B9(`asphalt-${J.join("x")}`,256,256,(Q)=>{let $=A7(5);Q.fillStyle="#3d4044",Q.fillRect(0,0,256,256);for(let Z=0;Z<3000;Z+=1){let K=50+Math.floor($()*40);Q.fillStyle=`rgb(${K},${K},${K+4})`,Q.fillRect($()*256,$()*256,1.5,1.5)}Q.fillStyle="#e8dfa0",Q.fillRect(0,124,110,8),Q.fillRect(146,124,110,8)},J)}function KZ(J){return B9(`paving-${J.join("x")}`,256,256,(Q)=>{Q.fillStyle="#b8b2a6",Q.fillRect(0,0,256,256),Q.fillStyle="#a19b8f";for(let $=0;$<256;$+=32){Q.fillRect(0,$,256,2);for(let Z=$/32%2===0?0:32;Z<256;Z+=64)Q.fillRect(Z,$,2,32)}},J)}function WZ(J,Q,$,Z){return B9(`sign-${J}-${Q}-${Z??""}`,512,160,(K)=>{if(K.fillStyle=Q,K.fillRect(0,0,512,160),K.strokeStyle=$,K.lineWidth=8,K.strokeRect(10,10,492,140),K.fillStyle=$,K.textAlign="center",K.textBaseline="middle",K.font='bold 76px Georgia, "Times New Roman", serif',K.fillText(J,256,Z?66:82),Z)K.font="bold 30px Arial, sans-serif",K.fillText(Z,256,124)})}function JY(){return B9("merah-putih",96,64,(J)=>{J.fillStyle="#ce1126",J.fillRect(0,0,96,32),J.fillStyle="#ffffff",J.fillRect(0,32,96,32)})}function YZ(J){return B9(`screen-${J}`,128,80,(Q)=>{if(Q.fillStyle=J?"#15313a":"#0d1112",Q.fillRect(0,0,128,80),!J)return;let $=A7(13);for(let Z=0;Z<9;Z+=1)Q.fillStyle=["#7ee0c3","#f2c58a","#a9d4ff","#e7e7e7"][Z%4],Q.fillRect(8+Z%3*6,8+Z*7.5,30+$()*70,3)})}function QY(){return B9("arcade-screen",128,100,(J)=>{J.fillStyle="#0b1026",J.fillRect(0,0,128,100),["#e63946","#f4a261","#f4d35e","#2a9d8f","#3a86ff"].forEach(($,Z)=>{J.fillStyle=$;for(let K=0;K<8;K+=1)J.fillRect(6+K*15,10+Z*7,13,5)}),J.fillStyle="#ffffff",J.fillRect(52,88,26,4),J.fillRect(70,64,4,4)})}var $Y=new Map;function dN(J,Q){let $=`${J.join(",")}:${Q}`,Z=$Y.get($);if(!Z)Z=new y6(J[0],J[1],J[2],2,Math.min(Q,...J.map((K)=>K/2-0.001))),$Y.set($,Z);return Z}function WY(J){let Q=J.transparent??(J.opacity!==void 0&&J.opacity<1),$={color:J.color,roughness:J.roughness??0.7,metalness:J.metalness??0,emissive:J.emissive??"#000000",emissiveIntensity:J.emissive?J.emissiveIntensity??0.5:0,transparent:Q,opacity:J.opacity??1,side:J.side??p9};if(J.map)$.map=J.map;return new u0($)}function K0(J,Q,$=0.04,Z,K,W=!0){let Y=new _0(dN(Q,$),WY(Z));if(Y.position.set(...J),K)Y.rotation.set(...K);return Y.castShadow=W,Y.receiveShadow=!0,Y}function b0(J,Q,$,Z,K,W=20,Y,H=!0){let X=new h8(Y??Q,Q,$,W),U=new _0(X,WY(Z));if(U.position.set(...J),K)U.rotation.set(...K);return U.castShadow=H,U.receiveShadow=!0,U}function uN(J,Q=0,$="#2f3a44"){let Z=new f0;Z.position.set(...J),Z.rotation.y=Q,Z.add(K0([0,0.48,0],[0.52,0.09,0.5],0.04,{color:$,roughness:0.9})),Z.add(K0([0,0.85,-0.23],[0.5,0.6,0.07],0.04,{color:$,roughness:0.9})),Z.add(b0([0,0.25,0],0.035,0.42,{color:"#8b9297",metalness:0.6,roughness:0.3}));for(let K=0;K<5;K+=1){let W=K/5*Math.PI*2;Z.add(K0([Math.sin(W)*0.2,0.05,Math.cos(W)*0.2],[0.05,0.04,0.42],0.015,{color:"#2a2f33"},[0,W,0]))}return Z}function YY(J,Q,$=!0){let Z=new f0;Z.position.set(...J);let K=YZ(Q);Z.add(K0([0,0.74,0],[1.9,0.07,0.95],0.03,{color:"#d9c3a0",roughness:0.6})),Z.add(K0([-0.9,0.37,0],[0.06,0.72,0.85],0.02,{color:"#e7e2d8"})),Z.add(K0([0.9,0.37,0],[0.06,0.72,0.85],0.02,{color:"#e7e2d8"})),Z.add(K0([0.55,0.52,0.02],[0.42,0.4,0.8],0.02,{color:"#e7e2d8"})),Z.add(K0([0,1.13,0.22],[0.86,0.52,0.05],0.02,{color:"#1c2024",roughness:0.4}));let W=new _J(0.8,0.46),Y=new u0({map:K,emissive:Q?"#ffffff":"#000000",emissiveMap:K,emissiveIntensity:Q?0.9:0,roughness:0.3}),H=new _0(W,Y);if(H.position.set(0,1.13,0.194),H.rotation.y=Math.PI,Z.add(H),Z.userData.screen=H,Z.add(b0([0,0.88,0.25],0.03,0.22,{color:"#2a2f33"})),Z.add(K0([0,0.785,0.28],[0.3,0.02,0.18],0.01,{color:"#2a2f33"})),Z.add(K0([0,0.79,-0.18],[0.56,0.025,0.18],0.01,{color:"#3a4046"})),Z.add(K0([0.42,0.79,-0.18],[0.07,0.03,0.11],0.02,{color:"#3a4046"})),Z.add(b0([-0.65,0.84,-0.1],0.05,0.12,{color:"#f4efe6"})),Z.add(b0([-0.65,0.901,-0.1],0.043,0.005,{color:"#3b2415"})),$)Z.add(uN([0,0,-0.78]));return Z}function HY(J,Q){let $=J.userData.screen.material,Z=YZ(Q);$.map=Z,$.emissiveMap=Z,$.emissive.set(Q?"#ffffff":"#000000"),$.emissiveIntensity=Q?0.9:0}function XY(J){let Q=new f0;Q.position.set(...J),Q.add(b0([0,0.74,0],1.05,0.08,{color:"#7a4f33",roughness:0.45},void 0,40)),Q.add(b0([0,0.37,0],0.12,0.72,{color:"#2a2f33"})),Q.add(b0([0,0.03,0],0.5,0.05,{color:"#2a2f33"})),Q.add(b0([0.2,0.8,0.1],0.22,0.03,{color:"#f4efe6"}));for(let $=0;$<4;$+=1)Q.add(K0([0.12+$%2*0.14,0.84,0.02+Math.floor($/2)*0.14],[0.12,0.05,0.08],0.02,{color:"#c98a3c",roughness:0.9}));return Q}function UY(J,Q=0,$="#5b6f8c"){let Z=new f0;return Z.position.set(...J),Z.rotation.y=Q,Z.add(K0([0,0.28,0],[2.4,0.36,0.9],0.1,{color:$,roughness:0.95})),Z.add(K0([0,0.66,-0.36],[2.4,0.62,0.2],0.1,{color:$,roughness:0.95})),Z.add(K0([-1.12,0.52,0],[0.2,0.42,0.9],0.08,{color:$,roughness:0.95})),Z.add(K0([1.12,0.52,0],[0.2,0.42,0.9],0.08,{color:$,roughness:0.95})),[-0.5,0.5].forEach((K)=>{Z.add(K0([K,0.5,0.05],[0.95,0.14,0.7],0.07,{color:"#6e83a2",roughness:0.95}))}),Z.add(K0([-0.7,0.72,-0.18],[0.38,0.34,0.14],0.07,{color:"#e0a43a",roughness:0.95})),Z}function HZ(J,Q=0,$="#d9784a"){let Z=new f0;return Z.position.set(...J),Z.rotation.y=Q,Z.add(K0([0,0.3,0],[0.9,0.4,0.85],0.12,{color:$,roughness:0.95})),Z.add(K0([0,0.66,-0.34],[0.9,0.52,0.18],0.08,{color:$,roughness:0.95})),Z}function qY(J){let Q=new f0;return Q.position.set(...J),Q.add(K0([0,0.36,0],[1.3,0.07,0.7],0.03,{color:"#8a5a3a",roughness:0.5})),[[-0.55,-0.27],[0.55,-0.27],[-0.55,0.27],[0.55,0.27]].forEach(([$,Z])=>{Q.add(b0([$,0.17,Z],0.03,0.34,{color:"#2a2f33"}))}),Q.add(b0([-0.3,0.48,0.05],0.04,0.18,{color:"#3a1f12",opacity:0.85})),Q.add(b0([0.25,0.49,0],0.12,0.2,{color:"#dfe8e6",opacity:0.55,roughness:0.1})),Q.add(b0([0.25,0.47,0],0.1,0.14,{color:"#f1d9a6"})),Q}function r8(J,Q=1){let $=new f0;return $.position.set(...J),$.scale.setScalar(Q),$.add(b0([0,0.22,0],0.2,0.44,{color:"#b0643a",roughness:0.8},void 0,20,0.26)),[[0,0.75,0,0.32],[0.14,0.95,0.05,0.22],[-0.12,0.92,-0.06,0.24],[0,1.12,0,0.18]].forEach(([K,W,Y,H])=>{let X=new _0(new x8(H,1),new u0({color:"#4f8a4a",roughness:0.85,flatShading:!0}));X.position.set(K,W,Y),X.castShadow=!0,$.add(X)}),$}function NY(J,Q=0){let $=new f0;$.position.set(...J),$.rotation.y=Q,$.add(K0([0,1,0],[1.4,2,0.4],0.02,{color:"#6b4a32"}));let Z=["#b54b45","#2f6f8f","#e0a43a","#4f8a4a","#6a4d8d","#dcd6c8"];return[0.35,0.95,1.55].forEach((K,W)=>{for(let Y=0;Y<6;Y+=1){let H=W*6+Y,X=0.26+H*7%5*0.03;$.add(K0([-0.5+Y*0.2,K+X/2,0.08],[0.14,X,0.26],0.01,{color:Z[H%6]}))}}),$}function XZ(J){let Q=new f0;Q.position.set(...J),Q.add(K0([0,0,0],[2,1.15,0.08],0.03,{color:"#111416",roughness:0.3}));let $=new _0(new _J(1.88,1.03),new u0({color:"#1d5a6b",emissive:"#2a8aa0",emissiveIntensity:0.55,roughness:0.2}));return $.position.set(0,0,0.045),Q.add($),Q}function GY(J){let Q=new f0;return Q.position.set(...J),Q.add(b0([0,0,0],0.3,0.05,{color:"#f4efe6"},[Math.PI/2,0,0],28)),Q.add(K0([0,0.07,0.035],[0.03,0.18,0.01],0.004,{color:"#1c2024"})),Q.add(K0([0.06,0,0.035],[0.14,0.025,0.01],0.004,{color:"#1c2024"})),Q}function FY(J,Q=0){let $=new f0;return $.position.set(...J),$.rotation.y=Q,$.add(K0([0,0.5,0],[0.42,1,0.42],0.05,{color:"#eef0ee",roughness:0.4})),$.add(K0([0,0.72,0.19],[0.3,0.14,0.06],0.02,{color:"#c9ced0"})),$.add(b0([-0.07,0.72,0.23],0.022,0.06,{color:"#d64545"},[Math.PI/2,0,0])),$.add(b0([0.07,0.72,0.23],0.022,0.06,{color:"#3d7fd6"},[Math.PI/2,0,0])),$.add(K0([0,0.54,0.16],[0.28,0.02,0.14],0.01,{color:"#9aa2a6"})),$.add(b0([0,1.33,0],0.19,0.52,{color:"#5fb4f2",opacity:0.55,roughness:0.08},void 0,24)),$.add(b0([0,1.05,0],0.06,0.1,{color:"#5fb4f2",opacity:0.6,roughness:0.08},void 0,20,0.17)),$.add(b0([0,1.6,0],0.17,0.03,{color:"#3d8fd6",opacity:0.7})),$.add(b0([0,1.3,0],0.175,0.4,{color:"#8fd0ff",opacity:0.35,roughness:0.05})),$}function DY(J,Q=0){let $=new f0;return $.position.set(...J),$.rotation.y=Q,$.add(K0([0,0.9,0],[0.75,1.8,0.7],0.05,{color:"#dfe3e4",roughness:0.35,metalness:0.2})),$.add(K0([0,1.3,0.36],[0.7,0.02,0.02],0.005,{color:"#9aa2a6"})),$.add(K0([0.28,1,0.37],[0.03,0.4,0.03],0.01,{color:"#9aa2a6"})),$}function EY(J,Q=0){let $=new f0;return $.position.set(...J),$.rotation.y=Q,$.add(K0([0,0.45,0],[2,0.9,0.6],0.02,{color:"#f2eee6"})),$.add(K0([0,0.92,0],[2.05,0.05,0.65],0.01,{color:"#3a3f44",roughness:0.3})),$.add(b0([-0.6,1.07,0],0.16,0.24,{color:"#f5f5f2"})),$.add(b0([-0.6,1.2,0],0.14,0.05,{color:"#d64545"},void 0,20,0.1)),$.add(b0([0.1,1.05,0],0.1,0.2,{color:"#dfe8e6",opacity:0.5})),$.add(b0([0.1,1.02,0],0.085,0.12,{color:"#6b3b1e"})),$.add(b0([0.62,1.06,0],0.12,0.22,{color:"#b9c0c4",metalness:0.7,roughness:0.25},void 0,20,0.08)),$}function OY(J,Q){let $=new f0;$.position.set(...J),$.add(b0([0,0.1,0],0.35,0.2,{color:"#bdb6a8"})),$.add(b0([0,2.6,0],0.04,5,{color:"#d9dde0",metalness:0.6,roughness:0.3}));let Z=new _0(new rJ(0.07,12,8),new u0({color:"#d8b24a",metalness:0.7,roughness:0.3}));Z.position.set(0,5.05,0),$.add(Z);let K=JY(),W=new _J(1.2,0.8,12,1).translate(0.6,0,0),Y=Float32Array.from(W.attributes.position.array),H=new _0(W,new u0({map:K,side:oJ,roughness:0.8}));return H.position.set(0.04,4.55,0),H.castShadow=!0,$.add(H),Q.push((X)=>{let U=W.attributes.position;for(let G=0;G<U.count;G+=1){let D=Y[G*3];U.setZ(G,Math.sin(X*3+D*4)*0.08*D)}U.needsUpdate=!0,W.computeVertexNormals()}),$}function v6(J,Q){let $=new f0;return $.position.set(...J),$.add(b0([0,0.42,0],0.17,0.04,{color:Q,roughness:0.5})),$.add(b0([0,0.21,0],0.19,0.4,{color:Q,roughness:0.5},void 0,8,0.15)),$}function ZY(J){let Q=new f0;return Q.position.set(...J),Q.add(b0([0,0,0],0.3,0.06,{color:"#1f2326"},[0,0,Math.PI/2],20)),Q.add(b0([0,0,0],0.08,0.08,{color:"#c9ced0",metalness:0.6},[0,0,Math.PI/2])),Q}function UZ(J,Q=0,$="#f1f1ec",Z="#34393f",K="peci"){let W=new f0;if(W.position.set(...J),W.rotation.y=Q,W.add(K0([-0.11,0.35,0],[0.17,0.66,0.2],0.05,{color:Z})),W.add(K0([0.11,0.35,0],[0.17,0.66,0.2],0.05,{color:Z})),W.add(K0([0,0.98,0],[0.48,0.6,0.3],0.07,{color:$,roughness:0.85})),W.add(K0([-0.31,0.95,0.05],[0.12,0.52,0.14],0.04,{color:$},[-0.35,0,0])),W.add(K0([0.31,0.95,0.05],[0.12,0.52,0.14],0.04,{color:$},[-0.35,0,0])),W.add(K0([0,1.5,0],[0.4,0.4,0.37],0.08,{color:"#c98e5a",roughness:0.7})),W.add(K0([-0.09,1.52,0.186],[0.06,0.07,0.01],0.004,{color:"#17201e"},void 0,!1)),W.add(K0([0.09,1.52,0.186],[0.06,0.07,0.01],0.004,{color:"#17201e"},void 0,!1)),K==="peci")W.add(K0([0,1.76,0],[0.36,0.14,0.34],0.03,{color:"#1b1d20",roughness:0.9}));else W.add(K0([0,1.74,0],[0.42,0.12,0.4],0.06,{color:"#c0392b"})),W.add(K0([0,1.7,0.24],[0.36,0.03,0.16],0.01,{color:"#c0392b"}));return W}function RY(J,Q=0,$=[],Z=[]){let K=new f0;K.position.set(...J),K.rotation.y=Q;let W=WZ("BAKSO","#c62828","#fff4d6","MALANG · MANTAP");K.add(K0([0,0.72,0],[1.8,0.8,0.8],0.05,{color:"#f3efe4",roughness:0.6})),K.add(K0([0,0.34,0],[1.85,0.06,0.85],0.02,{color:"#c62828"})),K.add(K0([0,1.14,0],[1.85,0.05,0.85],0.02,{color:"#c62828"})),K.add(ZY([-0.5,0.3,0.45])),K.add(ZY([-0.5,0.3,-0.45])),K.add(b0([0.75,0.15,0],0.04,0.3,{color:"#2a2f33"})),K.add(K0([-1.15,0.95,0],[0.5,0.05,0.05],0.02,{color:"#6b4a32"},[0,0,-0.35])),K.add(K0([0.35,1.45,0],[0.9,0.55,0.62],0.02,{color:"#d8f0f4",opacity:0.35,roughness:0.05}));for(let D=0;D<6;D+=1){let q=new _0(new rJ(0.07,10,8),new u0({color:"#a98367",roughness:0.9}));q.position.set(0.1+D%3*0.22,1.28,-0.12+Math.floor(D/3)*0.22),K.add(q)}K.add(b0([-0.45,1.36,0],0.25,0.4,{color:"#b9c0c4",metalness:0.75,roughness:0.25})),K.add(b0([-0.45,1.58,0],0.26,0.04,{color:"#9aa2a6",metalness:0.75,roughness:0.25}));let Y=new f0;Y.position.set(-0.45,0,0);let H=[];for(let D=0;D<3;D+=1){let q=new _0(new rJ(0.1,10,8),new u0({color:"#ffffff",transparent:!0,opacity:0.4,depthWrite:!1}));H.push(q),Y.add(q)}K.add(Y),Z.push((D)=>{H.forEach((q,F)=>{let R=(D*0.5+F/3)%1;q.position.y=1.35+R*0.9,q.scale.setScalar(0.6+R),q.material.opacity=0.45*(1-R)})}),[[-0.85,-0.38],[0.85,-0.38],[-0.85,0.38],[0.85,0.38]].forEach(([D,q])=>{K.add(b0([D,1.75,q],0.025,1.2,{color:"#6b4a32"}))}),K.add(K0([0,2.38,0],[2.1,0.08,1.1],0.03,{color:"#c62828"}));let X=new _0(new _J(1.7,0.53),new u0({map:W,roughness:0.7}));X.position.set(0,2.12,0.42),K.add(X);let U=new _0(new _J(1.7,0.53),new u0({map:W,roughness:0.7}));U.position.set(0,2.12,-0.42),U.rotation.y=Math.PI,K.add(U);let G=new _0(new rJ(0.08,12,8),new u0({color:"#fff2c4",emissive:"#ffcc66",emissiveIntensity:0.1}));return G.position.set(0.2,1.8,0),K.add(G),$.push((D)=>G.material.emissiveIntensity=D?2.2:0.1),K.add(v6([0.5,0,1.1],"#d64545")),K.add(v6([-0.3,0,1.2],"#3d7fd6")),K}function d9(J,Q,$=0.025,Z="#1f6f5c"){let K=new j(...J),W=new j(...Q),Y=W.clone().sub(K),H=Y.length(),X=K.add(W).multiplyScalar(0.5),U=new uJ().setFromUnitVectors(new j(0,1,0),Y.clone().normalize()),G=new h8($,$,H,8),D=new u0({color:Z,metalness:0.5,roughness:0.35}),q=new _0(G,D);return q.position.copy(X),q.quaternion.copy(U),q.castShadow=!0,q}function KY(J){let Q=new f0;Q.position.set(J,0.33,0);let $=new _0(new g8(0.3,0.035,8,28),new u0({color:"#1f2326",roughness:0.8}));$.castShadow=!0,Q.add($);let Z=new _0(new g8(0.26,0.012,6,28),new u0({color:"#c9ced0",metalness:0.7,roughness:0.3}));Q.add(Z);for(let K=0;K<4;K+=1){let W=new _0(new gJ(0.52,0.008,0.008),new u0({color:"#c9ced0",metalness:0.7}));W.rotation.z=K/4*Math.PI,Q.add(W)}return Q}function MY(J,Q=0,$=[]){let Z=new f0;Z.position.set(...J),Z.rotation.y=Q;let K=WZ("KOPI","#4a2c1d","#ffe3b3","PANAS · ES · SACHET"),W="#1f6f5c",Y=["#6b3b1e","#d64545","#e2b33c","#2c2c2c","#b0703a","#e8e1d0"];Z.add(KY(-0.55)),Z.add(KY(0.55)),Z.add(d9([-0.55,0.33,0],[-0.15,0.36,0],0.025,W)),Z.add(d9([-0.15,0.36,0],[-0.25,0.9,0],0.025,W)),Z.add(d9([-0.25,0.85,0],[0.42,0.88,0],0.025,W)),Z.add(d9([-0.15,0.36,0],[0.42,0.88,0],0.025,W)),Z.add(d9([0.55,0.33,0],[0.45,1.05,0],0.025,W)),Z.add(d9([0.45,1.05,-0.28],[0.45,1.05,0.28],0.02,"#2a2f33")),Z.add(d9([-0.55,0.33,0],[-0.25,0.85,0],0.018,W)),Z.add(K0([-0.27,0.95,0],[0.26,0.06,0.14],0.03,{color:"#2a2f33"})),Z.add(d9([-0.15,0.36,0],[-0.05,0,0.18],0.015,"#8b9297")),Z.add(K0([-0.62,0.78,0],[0.62,0.05,0.42],0.01,{color:"#8b9297",metalness:0.5})),Z.add(K0([-0.62,1.03,0],[0.58,0.44,0.44],0.04,{color:"#3d7fd6"}));let H=new _0(new _J(0.54,0.17),new u0({map:K}));H.position.set(-0.62,1.03,0.225),Z.add(H);let X=new _0(new _J(0.54,0.17),new u0({map:K}));X.position.set(-0.62,1.03,-0.225),X.rotation.y=Math.PI,Z.add(X),Z.add(b0([-0.76,1.42,0.08],0.08,0.34,{color:"#c62828",roughness:0.4})),Z.add(b0([-0.5,1.42,0.08],0.08,0.34,{color:"#d9dde0",metalness:0.7,roughness:0.25})),Z.add(b0([-0.63,1.38,-0.1],0.07,0.26,{color:"#f0f0ec"})),Y.forEach((G,D)=>{Z.add(K0([0.5,0.78,-0.22+D*0.09],[0.012,0.46,0.07],0.004,{color:G},void 0,!1))});let U=new _0(new rJ(0.06,10,8),new u0({color:"#fff2c4",emissive:"#ffcc66",emissiveIntensity:0.1}));return U.position.set(0.52,1.18,0),Z.add(U),$.push((G)=>U.material.emissiveIntensity=G?2:0.1),Z}function LY(J,Q=1){let $=new f0;return $.position.set(...J),$.scale.setScalar(Q),$.add(b0([0,0.9,0],0.16,1.8,{color:"#6b4a32",roughness:0.9},void 0,20,0.12)),[[0,2.2,0,1],[0.5,1.9,0.2,0.7],[-0.45,2,-0.2,0.75],[0.1,2.7,0.1,0.7]].forEach(([K,W,Y,H])=>{let X=new _0(new x8(H,1),new u0({color:"#3f7a3c",roughness:0.9,flatShading:!0}));X.position.set(K,W,Y),X.castShadow=!0,$.add(X)}),$}function qZ(J,Q=[]){let $=new f0;$.position.set(...J),$.add(b0([0,1.6,0],0.06,3.2,{color:"#2f3336",metalness:0.5})),$.add(K0([0.35,3.15,0],[0.8,0.06,0.06],0.02,{color:"#2f3336"}));let Z=K0([0.7,3.05,0],[0.3,0.12,0.2],0.04,{color:"#f5e6b8",emissive:"#ffd98a",emissiveIntensity:0.2});return $.add(Z),Q.push((K)=>Z.material.emissiveIntensity=K?2.5:0.2),$}function VY(J,Q=0,$=[]){let Z=new f0;Z.position.set(...J),Z.rotation.y=Q,[-0.55,0.55].forEach((W)=>{Z.add(b0([W,0.3,0],0.006,0.6,{color:"#8b9297"}))}),Z.add(K0([0,0,0],[1.4,0.06,0.16],0.02,{color:"#d9dde0",metalness:0.4,roughness:0.35},void 0,!1));let K=new _0(new _J(1.32,0.11),new u0({color:"#ffffff",emissive:"#f2f6ff",emissiveIntensity:0.9,side:oJ}));return K.position.set(0,-0.032,0),K.rotation.x=Math.PI/2,Z.add(K),$.push((W)=>K.material.emissiveIntensity=W?2.6:0.9),Z}function b6(J,Q=0,$=[]){let Z=new f0;Z.position.set(...J),Z.rotation.y=Q,Z.add(K0([0,0,0.13],[1.05,0.32,0.24],0.06,{color:"#f6f7f5",roughness:0.35})),Z.add(K0([0,-0.03,0.255],[0.95,0.02,0.01],0.004,{color:"#dfe3e4"},void 0,!1));let K=new _0(new gJ(0.9,0.012,0.08),new u0({color:"#e3e6e6"}));K.position.set(0,-0.14,0.24),Z.add(K);let W=new _0(new Y8(0.012,10),new u0({color:"#6cf08a",emissive:"#4be07a",emissiveIntensity:1.2}));return W.position.set(0.4,0.07,0.256),Z.add(W),Z.add(b0([-0.46,-0.3,0.06],0.02,0.35,{color:"#e6e8e6"})),$.push((Y)=>{K.rotation.x=0.5+Math.sin(Y*0.6)*0.25}),Z}function NZ(J,Q=0,$=[]){let Z=new f0;Z.position.set(...J),Z.rotation.y=Q,Z.add(K0([0,0.34,0],[0.85,0.6,0.32],0.03,{color:"#e9ebe8",roughness:0.45}));let K=new _0(new Y8(0.22,24),new u0({color:"#3a4046"}));K.position.set(-0.12,0.34,0.165),Z.add(K);let W=new f0;W.position.set(-0.12,0.34,0.17);for(let Y=0;Y<3;Y+=1){let H=new _0(new gJ(0.04,0.36,0.005),new u0({color:"#9aa2a6"}));H.rotation.z=Y/3*Math.PI*2,W.add(H)}return Z.add(W),Z.add(K0([0,0.02,0],[0.9,0.04,0.36],0.01,{color:"#8b9297"})),$.push((Y,H)=>{W.rotation.z-=H*6}),Z}function kY(J){let Q=new f0;Q.position.set(...J),Q.add(K0([0,0.74,0],[2.74,0.05,1.52],0.02,{color:"#1f5f8b",roughness:0.45})),Q.add(K0([0,0.768,0],[2.7,0.004,0.03],0.001,{color:"#ffffff"},void 0,!1)),Q.add(K0([0,0.768,0],[0.02,0.004,1.48],0.001,{color:"#ffffff"},void 0,!1)),Q.add(K0([0,0.85,0],[0.02,0.16,1.62],0.004,{color:"#f4f4f0",opacity:0.75})),[[-1.1,-0.6],[1.1,-0.6],[-1.1,0.6],[1.1,0.6]].forEach(([Z,K])=>{Q.add(b0([Z,0.36,K],0.035,0.72,{color:"#2a2f33"}))});let $=new _0(new rJ(0.03,10,8),new u0({color:"#ff8a1f"}));return $.position.set(0.4,0.8,0.3),Q.add($),Q.add(K0([-0.9,0.78,-0.35],[0.16,0.02,0.15],0.01,{color:"#c62828"},[0,0.4,0])),Q}function BY(J,Q="#c62828"){let $=new f0;$.position.set(...J);let Z=QY();$.add(K0([0,0.85,0],[0.72,1.7,0.62],0.04,{color:Q,roughness:0.5})),$.add(K0([0,0.95,0.32],[0.66,0.06,0.22],0.02,{color:"#1c1f24"}));let K=["#e63946","#f4d35e","#3a86ff"];[-0.15,0.05,0.2].forEach((Y,H)=>{let X=new _0(new rJ(0.03,8,6),new u0({color:K[H],emissive:K[H],emissiveIntensity:0.5}));X.position.set(Y,0.99,0.35),$.add(X)});let W=new _0(new _J(0.56,0.44),new u0({map:Z,emissiveMap:Z,emissive:"#ffffff",emissiveIntensity:0.9}));return W.position.set(0,1.35,0.315),$.add(W),$.add(K0([0,1.66,0.3],[0.66,0.14,0.04],0.01,{color:"#f4d35e",emissive:"#f4d35e",emissiveIntensity:0.6})),$}function IY(J,Q="#e76f51"){let $=new f0;$.position.set(...J);let Z=new _0(new rJ(0.42,18,14),new u0({color:Q,roughness:0.95}));Z.position.set(0,0.24,0),Z.scale.set(1,0.62,1),Z.castShadow=!0,Z.receiveShadow=!0,$.add(Z);let K=new _0(new rJ(0.36,16,12),new u0({color:Q,roughness:0.95}));return K.position.set(0,0.36,-0.18),K.scale.set(1,0.9,0.55),K.castShadow=!0,K.receiveShadow=!0,$.add(K),$}function zY(J){let Q=new f0;return Q.position.set(...J),Q.add(K0([0,0.3,0],[0.5,0.6,0.5],0.03,{color:"#6b4a32"})),Q.add(K0([0,0.63,0],[0.9,0.06,0.9],0.02,{color:"#5a3a24"})),Q.add(K0([0,0.664,0],[0.78,0.01,0.78],0.004,{color:"#e8cf9c"},void 0,!1)),[[-0.36,-0.36],[0.36,-0.36],[-0.36,0.36],[0.36,0.36]].forEach(([Z,K])=>{let W=new _0(new Y8(0.035,12),new u0({color:"#1c1f24"}));W.position.set(Z,0.671,K),W.rotation.x=-Math.PI/2,Q.add(W)}),[[0,0,"#f4f1ea"],[0.08,0.05,"#1c1f24"],[-0.07,0.06,"#f4f1ea"],[0.02,-0.09,"#1c1f24"],[-0.05,-0.05,"#c62828"]].forEach(([Z,K,W])=>{Q.add(b0([Z,0.676,K],0.022,0.01,{color:W}))}),Q.add(v6([0,0,0.75],"#3d7fd6")),Q.add(v6([0,0,-0.75],"#d64545")),Q}var G9=(J)=>`<svg class="icon" aria-hidden="true"><use href="#i-${J}"></use></svg>`,PY=["#1d293c","#b54b45","#6a4d8d","#3b2a20","#c9a24a","#2f4f3a","#8b5a2b","#11151c"],CY=["#e9b57d","#c98e5a","#f1c9a0","#a8714a","#dca06e"],AY=["#e6b34e","#70bdcb","#93ca67","#e76f51","#8f7ae6","#f4a3b4","#4f9c7a","#d9534f","#5a8dee","#c7a17a"],wY=["#36475d","#374052","#344349","#4a3b2f","#2f3a44","#3d2f4a"],cN=new Set(["Working","Reviewing","Collaborating"]),h6=(J)=>J.state==="Idle"&&J.room==="Lounge";function nN(J){let Q=2166136261;for(let $=0;$<J.length;$+=1)Q^=J.charCodeAt($),Q=Math.imul(Q,16777619);return Q>>>0}function sN(J){if(J.colors)return J.colors;let Q=nN(J.id);return{hair:PY[Q%PY.length],skin:CY[(Q>>>4)%CY.length],shirt:AY[(Q>>>8)%AY.length],pants:wY[(Q>>>12)%wY.length]}}function x6(J){let Q=document.createElement("span");return Q.className=J,Q}var _Y=new gJ(0.17,0.62,0.2).translate(0,-0.31,0),TY=new gJ(0.12,0.52,0.14).translate(0,-0.26,0);class SY{station;layout;offline;root;body;leftLeg;rightLeg;leftArm;rightArm;label;labelEl;speechEl;nameEl;stateEl;path=[];placement;constructor(J,Q,$){this.station=J,this.placement=Q,this.layout=$;let Z=sN(J);this.offline=J.state==="Offline";let K=(X)=>this.offline?"#7b7f7d":X;this.root=new f0,this.root.position.set(...Q.position),this.root.rotation.y=Q.facing,this.root.agentId=J.id,this.body=new f0,this.body.agentId=J.id;let W=new u0({color:K(Z.pants),roughness:0.8});this.leftLeg=new _0(_Y,W),this.leftLeg.position.set(-0.11,0.66,0),this.leftLeg.castShadow=!0,this.body.add(this.leftLeg),this.rightLeg=new _0(_Y,W),this.rightLeg.position.set(0.11,0.66,0),this.rightLeg.castShadow=!0,this.body.add(this.rightLeg),this.body.add(K0([0,0.98,0],[0.48,0.58,0.3],0.07,{color:K(Z.shirt),roughness:0.85}));let Y=new u0({color:K(Z.shirt),roughness:0.85});this.leftArm=new _0(TY,Y),this.leftArm.position.set(-0.31,1.2,0),this.leftArm.castShadow=!0,this.body.add(this.leftArm),this.rightArm=new _0(TY,Y),this.rightArm.position.set(0.31,1.2,0),this.rightArm.castShadow=!0,this.body.add(this.rightArm),this.body.add(K0([0,1.5,0],[0.4,0.4,0.37],0.08,{color:K(Z.skin),roughness:0.7})),this.body.add(K0([0,1.72,-0.02],[0.43,0.13,0.41],0.05,{color:K(Z.hair),roughness:0.9})),this.body.add(K0([0,1.58,-0.19],[0.43,0.3,0.06],0.03,{color:K(Z.hair),roughness:0.9})),this.body.add(K0([-0.09,1.52,0.186],[0.06,0.07,0.01],0.004,{color:"#17201e"},void 0,!1)),this.body.add(K0([0.09,1.52,0.186],[0.06,0.07,0.01],0.004,{color:"#17201e"},void 0,!1)),this.body.add(K0([0,1.4,0.186],[0.12,0.025,0.01],0.004,{color:"#9a5a44"},void 0,!1)),this.labelEl=document.createElement("button"),this.labelEl.type="button",this.labelEl.dataset.agentId=J.id,this.speechEl=x6("speech speech-3d"),this.nameEl=x6("pixel-station-name"),this.stateEl=x6("badge");let H=x6("agent-tag-row");H.append(this.nameEl,this.stateEl),this.labelEl.append(H,this.speechEl),this.label=new t$(this.labelEl),this.label.center.set(0.5,1),this.label.position.set(0,2.05,0),this.body.add(this.label),this.refreshLabel(""),this.root.add(this.body)}refreshLabel(J){let Q=this.station,$=cN.has(Q.state),Z=$?Q.currentTask||Q.activity||"":J;this.labelEl.className=`agent-tag-3d state-${Q.state.toLowerCase()}`,this.speechEl.className=$?"speech speech-3d":"speech speech-3d speech-idle",this.speechEl.textContent=Z,this.speechEl.style.display=Z?"":"none",this.nameEl.textContent=Q.name,this.stateEl.className=`badge ${Q.state==="Working"?"active":"inactive"}`,this.stateEl.textContent=Q.state}setPlacement(J){this.placement=J;let[Q,,$]=J.position,Z=sW([this.root.position.x,this.root.position.z],[Q,$],this.layout);this.path=Z.map(([K,W])=>new j(K,0,W))}update(J,Q,$){if(!$)return this.snapToPlacement();let Z=this.path[0],K=!1;if(Z){let D=Z.clone().sub(this.root.position);D.y=0;let q=D.length();if(q<0.05)this.path.shift(),K=this.path.length>0;else{K=!0,this.root.position.add(D.normalize().multiplyScalar(Math.min(q,Q*2.6)));let F=Math.atan2(D.x,D.z);this.root.rotation.y+=Math.atan2(Math.sin(F-this.root.rotation.y),Math.cos(F-this.root.rotation.y))*0.25}}if(!K)this.root.rotation.y+=Math.atan2(Math.sin(this.placement.facing-this.root.rotation.y),Math.cos(this.placement.facing-this.root.rotation.y))*0.12;let W=K?Math.sin(J*10)*0.6:0,Y=!K&&this.placement.seated;this.leftLeg.rotation.x=Y?-Math.PI/2.2:W,this.rightLeg.rotation.x=Y?-Math.PI/2.2:-W;let H=!K&&(this.station.state==="Working"||this.station.state==="Reviewing"),X=!K&&this.station.state==="Collaborating";this.leftArm.rotation.x=K?-W:H?-1.1+Math.sin(J*14)*0.12:X?-0.4+Math.sin(J*3)*0.3:0,this.rightArm.rotation.x=K?W:H?-1.1+Math.cos(J*14)*0.12:0;let U=this.station.state==="Collaborating"&&!K?Math.abs(Math.sin(J*5))*0.03:0,G=this.station.state==="Idle"?Math.sin(J*2)*0.015:0;return this.body.position.y=(Y?-0.14:0)+U+G,K}snapToPlacement(){let J=this.path.length>0;if(J)this.root.position.set(...this.placement.position),this.path=[];this.root.rotation.y=this.placement.facing;let Q=this.placement.seated,$=this.station.state==="Working"||this.station.state==="Reviewing";return this.leftLeg.rotation.x=this.rightLeg.rotation.x=Q?-Math.PI/2.2:0,this.leftArm.rotation.x=this.rightArm.rotation.x=$?-1.1:0,this.body.position.y=Q?-0.14:0,J}dispose(){this.label.removeFromParent(),this.root.removeFromParent(),this.root.traverse((J)=>{if(J instanceof _0)J.material.dispose()})}}class jY{container;canvasContainer;labelsContainer;onSelectStation;scene;camera;renderer;labelRenderer;controls;timer;layout;stations=[];characters=new Map;charactersGroup;desks=[];propUpdaters=[];nightHooks=[];dirLight;hemiLight;ambLight;background=new p0("#bfe0ef");panMode=!1;motionPaused=!1;isNight=!1;needsRender=!0;planStep=-1;resizeObserver;visibilityObserver;constructor(J,Q){this.container=J,this.onSelectStation=Q,this.layout=$Z(8);let $=window.devicePixelRatio||1;this.renderer=new s$({antialias:$<2,powerPreference:"default"}),this.renderer.setPixelRatio(Math.min($,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=a9,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0;let Z=this.renderer.domElement;Z.tabIndex=0,Z.setAttribute("role","img"),Z.setAttribute("aria-label","3D office view. Arrow keys pan the camera; the crew list next to it has every agent and task."),this.container.innerHTML=`
      <div class="office-3d-canvas-wrap" style="position: absolute; inset: 0;"></div>
      <div class="office-3d-labels" style="position: absolute; inset: 0; pointer-events: none; overflow: clip;"></div>
      <div class="office-3d-tools">
        <button type="button" id="btn3DMotionToggle" class="btn btn-secondary btn-sm" aria-pressed="false" title="Pause or resume animation">${G9("pause")} Pause</button>
        <button type="button" id="btn3DPanToggle" class="btn btn-secondary btn-sm" aria-pressed="false" title="Drag to move view instead of rotating">${G9("move")} Geser</button>
        <button type="button" id="btn3DResetView" class="btn btn-secondary btn-sm" title="Back to default isometric view">${G9("rotate-ccw")} Reset view</button>
      </div>
      <div class="office-3d-hint">
        ${window.matchMedia?.("(pointer: coarse)").matches?`${G9("pointer")} Putar: geser 1 jari · ${G9("move")} Geser: 2 jari · ${G9("zoom-in")} Zoom: cubit`:`${G9("mouse")} Putar: Klik kiri drag · ${G9("move")} Geser: Klik kanan / Pan · ${G9("zoom-in")} Zoom: Scroll`}
      </div>
    `,this.canvasContainer=this.container.querySelector(".office-3d-canvas-wrap"),this.labelsContainer=this.container.querySelector(".office-3d-labels"),this.canvasContainer.appendChild(Z),this.labelRenderer=new e$({element:this.labelsContainer});let K=this.container.clientWidth||800,W=this.container.clientHeight||560;this.renderer.setSize(K,W),this.labelRenderer.setSize(K,W),this.scene=new U6,this.scene.background=this.background,this.scene.fog=new F7("#bfe0ef",38,75),this.camera=new hJ(40,K/W,0.5,150),this.controls=new r$(this.camera,Z),this.controls.enableDamping=!0,this.controls.screenSpacePanning=!1,this.controls.minDistance=5,this.controls.maxDistance=48,this.controls.minPolarAngle=0.2,this.controls.maxPolarAngle=1.32,this.controls.keyPanSpeed=25,this.controls.listenToKeyEvents(Z),this.timer=new B6,this.timer.connect(document),this.hemiLight=new M6("#fff4e0","#5d7a4c",1.1),this.scene.add(this.hemiLight),this.dirLight=new V6("#fff1d6",2.4),this.dirLight.position.set(10,16,9),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.bias=-0.0004,this.dirLight.shadow.camera.left=-16,this.dirLight.shadow.camera.right=16,this.dirLight.shadow.camera.top=16,this.dirLight.shadow.camera.bottom=-16,this.dirLight.shadow.camera.far=60,this.scene.add(this.dirLight),this.ambLight=new k6("#ffffff",0.35),this.scene.add(this.ambLight),this.charactersGroup=new f0,this.scene.add(this.charactersGroup),this.buildStaticEnvironment(),this.desks=this.layout.desks.map((H)=>{let X=YY(H,!1,!0);return this.scene.add(X),X}),this.resetCamera(),this.setupEvents();let Y=window.matchMedia?.("(prefers-reduced-motion: reduce)");this.setMotionPaused(Boolean(Y?.matches)),Y?.addEventListener?.("change",(H)=>this.setMotionPaused(H.matches)),this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(this.container),this.visibilityObserver=new IntersectionObserver(([H])=>this.setVisible(H.isIntersecting)),this.visibilityObserver.observe(this.container)}buildStaticEnvironment(){let{building:J,gangCenterX:Q,baksoCart:$,kopiBike:Z}=this.layout,K=J.minX+9.5,W=aW([4,4]),Y=rW([3,5]),H=f6("#5b7c8c",[2,2]),X=f6("#8a4b3c",[2,2]),U=tW([14,12]),G=eW([8,1]),D=KZ([14,2]),q=KZ([2,5]),F=(P,O,k,g=0.8)=>{let _=new _J(...O),b=new u0({map:k,roughness:g}),c=new _0(_,b);c.position.set(...P),c.rotation.x=-Math.PI/2,c.receiveShadow=!0,this.scene.add(c)};F([(J.minX+J.maxX)/2,0.005,(J.minZ+J.maxZ)/2],[J.maxX-J.minX,J.maxZ-J.minZ],W,0.55),F([8.35,0.01,1.4],[2.3,5.4],Y,0.35),F([4.6,0.012,-2.9],[4.4,2.8],H,0.8),F([-5.2,0.012,2.2],[3.6,3],X,0.8),F([K/2,-0.02,2],[60-K,44],U,1),F([K/2,-0.005,7.1],[34-K,5],D,0.9),F([K/2,-0.01,12.1],[60-K,5],G,0.95),F([5.8,0,4.7],[1.8,1],D,0.9),F([Q,-0.008,-0.4],[3.6,10],q,0.9);let R="#efe6d6",z="#d9cdb8",E=(P,O,k=2.6)=>{let[g,_]=P,[b,c]=O,T=Math.hypot(b-g,c-_),d=Math.atan2(c-_,b-g),a=new f0;a.position.set((g+b)/2,0,(_+c)/2),a.rotation.y=-d,a.add(K0([0,k/2,0],[T+0.25,k,0.25],0.02,{color:R,roughness:0.9})),a.add(K0([0,k+0.02,0],[T+0.27,0.05,0.29],0.01,{color:z})),this.scene.add(a)},N=(P,O,k,g)=>{let b=2.4-g,c=Math.abs(k-O),T=K0([P,(g+2.4)/2,(O+k)/2],[0.05,b,c],0.01,{color:"#cfe8ee",opacity:0.25,roughness:0.05},void 0,!1);this.scene.add(T)};E([J.minX,J.minZ],[J.maxX,J.minZ]),E([J.minX,J.minZ],[J.minX,J.maxZ]),E([J.maxX,J.minZ],[J.maxX,I7.fromZ],1.1),E([J.maxX,I7.toZ],[J.maxX,J.maxZ],1.1),N(J.maxX,J.minZ,I7.fromZ,1.1),N(J.maxX,I7.toZ,JJ.maxZ,1.1),E([j6,J.minZ],[j6,QZ],0.9),N(j6,J.minZ,QZ,0.9),E([J.minX,J.maxZ],[4.9,J.maxZ],0.55),E([6.7,J.maxZ],[J.maxX,J.maxZ],0.55),E([-3.2,1],[-3.2,J.maxZ],0.9),this.scene.add(K0([-3.2,1.35,2.6],[0.06,0.9,3.2],0.01,{color:"#cfe8ee",opacity:0.3,roughness:0.05},void 0,!1)),this.scene.add(XY(i8)),this.scene.add(NY([J.minX+0.35,0,-0.9],Math.PI/2)),this.scene.add(r8([J.minX+0.5,0,-4.6])),this.scene.add(r8([-0.4,0,-4.7],0.9)),[1.3,2.3,3.3].forEach((P)=>this.scene.add(r8([0.9,0,P],0.8))),this.scene.add(GY([-3.6,2.35,J.minZ+0.14])),this.scene.add(UY(dW,Math.PI)),this.scene.add(HZ([2.1,0,-2.9],Math.PI/2,"#d9784a")),this.scene.add(HZ([7.1,0,-2.9],-Math.PI/2,"#3d7fd6")),this.scene.add(qY(cW)),this.scene.add(K0([a8[0],0.3,a8[2]],[1.8,0.6,0.45],0.03,{color:"#6b4a32"})),this.scene.add(XZ([a8[0],1.35,J.minZ+0.17])),this.scene.add(r8([2.1,0,-4.6])),this.scene.add(FY([J.maxX-0.45,0,-0.4],-Math.PI/2)),this.scene.add(DY([J.maxX-0.5,0,0.6],-Math.PI/2)),this.scene.add(EY([J.maxX-0.45,0,2.6],-Math.PI/2)),this.scene.add(b6([-5.3,2.3,J.minZ+0.125],0,this.propUpdaters)),this.scene.add(b6([a8[0],2.3,J.minZ+0.125],0,this.propUpdaters)),this.scene.add(b6([J.minX+0.125,2.3,2.6],Math.PI/2,this.propUpdaters)),[[-5.2,2.3,2.2],[4.6,2.4,-2.5],[8.2,2.4,1.2],[-2,2.4,-3.3],[-4.6,2.4,-3.3],[-2,2.4,-0.8],[-4.6,2.4,-0.8]].forEach((P)=>this.scene.add(VY(P,0,this.nightHooks)));let w=f6("#3b4170",[3,3]);F([(JJ.minX+JJ.maxX)/2,0.006,(JJ.minZ+JJ.maxZ)/2],[JJ.maxX-JJ.minX,JJ.maxZ-JJ.minZ],w,0.9),E([JJ.minX,JJ.minZ],[JJ.maxX,JJ.minZ]),E([JJ.maxX,JJ.minZ],[JJ.maxX,JJ.maxZ]),E([JJ.minX,JJ.maxZ],[JJ.maxX,JJ.maxZ],0.55),this.scene.add(kY(c8)),n8.forEach((P,O)=>this.scene.add(BY(P,O===0?"#c62828":"#1d4ed8"))),this.scene.add(K0([z7[0],0.25,z7[2]+0.2],[1.8,0.5,0.4],0.03,{color:"#1f2328"})),this.scene.add(XZ([z7[0],1.35,z7[2]+0.02])),s8.forEach((P,O)=>this.scene.add(IY(P,O===0?"#e76f51":"#2a9d8f"))),this.scene.add(zY(lW)),this.scene.add(r8([JJ.maxX-0.5,0,JJ.maxZ-0.5],0.9)),this.scene.add(OY(S6,this.propUpdaters));let V=new f0;V.position.set(...$),V.rotation.y=o8,V.add(RY([0,0,0],0,this.nightHooks,this.propUpdaters)),V.add(UZ([-1.6,0,0],Math.PI/2,"#f1f1ec","#34393f","peci")),this.scene.add(V);let I=new f0;I.position.set(...Z),I.rotation.y=o8,I.add(MY([0,0,0],0,this.nightHooks)),I.add(UZ([-1.35,0,-0.1],Math.PI/2,"#2f6d8f","#34393f","cap")),this.scene.add(I),this.scene.add(NZ([-5.3,0,J.minZ-0.45],Math.PI,this.propUpdaters)),this.scene.add(NZ([a8[0]-1.6,0,J.minZ-0.45],Math.PI,this.propUpdaters)),this.scene.add(qZ([-8,0,9.3],this.nightHooks)),this.scene.add(qZ([4,0,9.3],this.nightHooks)),[[-12.8+K,-7.4,1.3],[13.5,-7.2,1.2],[-14.8+K,2.6,1.1],[18.6,4.8,1.3],[-10.5+K,7.5,1],[12,8,1.1],[-2,-8.5,1.2],[6,-8,1.1]].forEach(([P,O,k])=>this.scene.add(LY([P,0,O],k)))}setupEvents(){this.container.querySelector("#btn3DMotionToggle")?.addEventListener("click",()=>this.setMotionPaused(!this.motionPaused)),this.container.querySelector("#btn3DPanToggle")?.addEventListener("click",()=>this.togglePan()),this.container.querySelector("#btn3DResetView")?.addEventListener("click",()=>this.resetCamera()),this.controls.addEventListener("change",()=>this.requestRender()),this.labelsContainer.addEventListener("click",(W)=>{let Y=W.target.closest("[data-agent-id]"),H=Y&&this.stations.find((X)=>X.id===Y.dataset.agentId);if(H)this.onSelectStation(H)});let J=new I6,Q=new I0,$=this.renderer.domElement,Z=0,K=0;$.addEventListener("pointerdown",(W)=>{Z=W.clientX,K=W.clientY}),$.addEventListener("click",(W)=>{if(Math.hypot(W.clientX-Z,W.clientY-K)>5)return;let Y=$.getBoundingClientRect();Q.x=(W.clientX-Y.left)/Y.width*2-1,Q.y=-((W.clientY-Y.top)/Y.height)*2+1,J.setFromCamera(Q,this.camera);for(let H of J.intersectObjects(this.charactersGroup.children,!0)){let X=H.object;while(X){let U=X.agentId&&this.stations.find((G)=>G.id===X.agentId);if(U){this.onSelectStation(U);return}X=X.parent}}})}handleResize(){let J=this.container.clientWidth,Q=this.container.clientHeight;if(!J||!Q)return;this.camera.aspect=J/Q,this.camera.updateProjectionMatrix(),this.renderer.setSize(J,Q),this.labelRenderer.setSize(J,Q),this.requestRender()}setVisible(J){if(J)this.timer.reset();this.renderer.setAnimationLoop(J?this.loop:null),this.requestRender()}setMotionPaused(J){this.motionPaused=J,this.controls.enableDamping=!J;let Q=this.container.querySelector("#btn3DMotionToggle");if(Q)Q.setAttribute("aria-pressed",String(J)),Q.innerHTML=J?`${G9("play")} Play`:`${G9("pause")} Pause`;this.requestRender()}togglePan(J){this.panMode=J!==void 0?J:!this.panMode;let Q=this.container.querySelector("#btn3DPanToggle");if(Q)Q.classList.toggle("active",this.panMode),Q.setAttribute("aria-pressed",String(this.panMode));this.controls.mouseButtons.LEFT=this.panMode?iJ.PAN:iJ.ROTATE,this.controls.mouseButtons.RIGHT=this.panMode?iJ.ROTATE:iJ.PAN,this.controls.touches.ONE=this.panMode?U9.PAN:U9.ROTATE}resetCamera(){let{target:J,offset:Q}=this.layout.camera,$=new j(...J),Z=new j(...Q),K=this.controls.enableDamping;this.controls.enableDamping=!1,this.controls.target.copy($),this.camera.position.copy($).add(Z),this.camera.lookAt($),this.controls.update(),this.controls.enableDamping=K,this.requestRender()}requestRender(){this.needsRender=!0}applyDayNight(){let J=!this.isNight;this.background.set(J?"#bfe0ef":"#1a2335"),this.scene.fog.color.set(J?"#bfe0ef":"#1a2335"),this.hemiLight.color.set(J?"#fff4e0":"#7f95bd"),this.hemiLight.groundColor.set(J?"#5d7a4c":"#1e2620"),this.hemiLight.intensity=J?1.1:0.32,this.dirLight.color.set(J?"#fff1d6":"#ff9a5a"),this.dirLight.intensity=J?2.4:0.75,this.ambLight.intensity=J?0.35:0.14,this.nightHooks.forEach((Q)=>Q(this.isNight)),this.renderer.shadowMap.needsUpdate=!0}applyIdlePlan(J=Date.now()){this.planStep=Math.floor(J/P7);let Q=ZZ(this.stations.filter(h6).map(($)=>$.seat),J,this.layout);for(let $ of this.stations){if(!h6($))continue;let Z=this.characters.get($.id),K=Q.get($.seat);if(!Z||!K)continue;Z.setPlacement(K.placement),Z.refreshLabel(K.placement.label??K.stop.label??"")}this.requestRender()}removeCharacter(J){this.characters.get(J)?.dispose(),this.characters.delete(J)}updateStations(J,Q=!1){if(this.stations=J,Q!==this.isNight)this.isNight=Q,this.applyDayNight();let $=new Set(J.filter((W)=>W.room==="Workspace"&&W.roomPosition!=="meeting-area"&&W.state!=="Offline").map((W)=>W.seat));this.desks.forEach((W,Y)=>HY(W,$.has(Y+1)));let Z=J.filter((W)=>W.roomPosition==="meeting-area").map((W)=>W.id),K=ZZ(J.filter(h6).map((W)=>W.seat),Date.now(),this.layout);for(let W of J){let Y=this.characters.get(W.id);if(Y&&Y.offline!==(W.state==="Offline"))this.removeCharacter(W.id);let H=h6(W)?K.get(W.seat):void 0,X=H?.placement??nW(W,this.layout,Math.max(0,Z.indexOf(W.id))),U=this.characters.get(W.id);if(!U)U=new SY(W,X,this.layout),this.characters.set(W.id,U),this.charactersGroup.add(U.root);else U.station=W,U.setPlacement(X);U.refreshLabel(H?H.placement.label??H.stop.label??"":"")}for(let W of[...this.characters.keys()])if(!J.some((Y)=>Y.id===W))this.removeCharacter(W);this.planStep=Math.floor(Date.now()/P7),this.renderer.shadowMap.needsUpdate=!0,this.requestRender()}loop=(J)=>{this.timer.update(J);let Q=Math.min(this.timer.getDelta(),0.1),$=this.timer.getElapsed(),Z=this.controls.update(),[K,W]=iW(this.controls.target.x,this.controls.target.z,this.layout.pan);if(K!==this.controls.target.x||W!==this.controls.target.z){let H=new j(K-this.controls.target.x,0,W-this.controls.target.z);this.controls.target.add(H),this.camera.position.add(H)}if(Math.floor(Date.now()/P7)!==this.planStep)this.applyIdlePlan();let Y=!1;for(let H of this.characters.values())Y=H.update($,Q,!this.motionPaused)||Y;if(Y)this.renderer.shadowMap.needsUpdate=!0;if(this.motionPaused){if(!this.needsRender&&!Z&&!Y)return}else for(let H of this.propUpdaters)H($,Q);this.needsRender=!1,this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera)};destroy(){this.renderer.setAnimationLoop(null),this.resizeObserver.disconnect(),this.visibilityObserver.disconnect(),this.timer.dispose(),this.controls.dispose();for(let Z of[...this.characters.keys()])this.removeCharacter(Z);let J=new Set,Q=new Set,$=new Set;this.scene.traverse((Z)=>{if(!(Z instanceof _0))return;J.add(Z.geometry);for(let K of Array.isArray(Z.material)?Z.material:[Z.material]){Q.add(K);for(let W of Object.values(K))if(W instanceof IJ)$.add(W)}}),J.forEach((Z)=>Z.dispose()),Q.forEach((Z)=>Z.dispose()),$.forEach((Z)=>Z.dispose()),this.renderer.dispose(),this.renderer.forceContextLoss(),this.container.innerHTML=""}}window.Office3D={init(J,Q){window.Office3D.destroy();try{window.Office3DInstance=new jY(J,Q)}catch($){console.error("3D office unavailable:",$),window.Office3DInstance=null,J.innerHTML='<div class="office-3d-fallback">The 3D office needs WebGL 2, which this browser or device could not start. The crew list beside it shows every agent and task.</div>'}return window.Office3DInstance},update(J,Q=!1){window.Office3DInstance?.updateStations(J,Q)},destroy(){window.Office3DInstance?.destroy(),window.Office3DInstance=null}};})();
