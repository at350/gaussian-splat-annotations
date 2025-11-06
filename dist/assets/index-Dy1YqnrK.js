(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wo="180",Ki={ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ch=0,_A=1,xh=2,Vl=1,yh=2,Ln=3,si=0,Ye=1,Cn=2,Gn=0,ji=1,BA=2,vA=3,SA=4,_h=5,gi=100,Bh=101,vh=102,Sh=103,bh=104,wh=200,Mh=201,Qh=202,Th=203,Ya=204,Va=205,Dh=206,Rh=207,Nh=208,Fh=209,Uh=210,Lh=211,Ph=212,kh=213,Gh=214,qa=0,Wa=1,Ja=2,ts=3,Xa=4,Ka=5,ja=6,Za=7,ql=0,zh=1,Oh=2,ni=0,Hh=1,Yh=2,Vh=3,qh=4,Wh=5,Jh=6,Xh=7,Wl=300,es=301,ns=302,$a=303,to=304,Fr=306,eo=1e3,Ii=1001,no=1002,be=1003,Kh=1004,Ps=1005,yn=1006,$r=1007,Ci=1008,jh=1008,We=1009,Jl=1010,Xl=1011,_s=1012,Jo=1013,Ve=1014,_n=1015,Ts=1016,Xo=1017,Ko=1018,Bs=1020,Kl=35902,jl=35899,Zl=1021,$l=1022,Be=1023,vs=1026,Ss=1027,tc=1028,jo=1029,ec=1030,Ur=1031,zn=1033,fr=33776,pr=33777,gr=33778,mr=33779,io=35840,so=35841,ro=35842,ao=35843,oo=36196,Ao=37492,lo=37496,co=37808,ho=37809,uo=37810,fo=37811,po=37812,go=37813,mo=37814,Eo=37815,Io=37816,Co=37817,xo=37818,yo=37819,_o=37820,Bo=37821,vo=36492,So=36494,bo=36495,wo=36283,Mo=36284,Qo=36285,To=36286,Zh=3200,$h=3201,nc=0,tu=1,ei="",ze="srgb",is="srgb-linear",Br="linear",te="srgb",wi=7680,bA=519,eu=512,nu=513,iu=514,ic=515,su=516,ru=517,au=518,ou=519,wA=35044,Au=35048,vr="300 es",Bn=2e3,Sr=2001;class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Er=Math.PI/180,Do=180/Math.PI;function Ds(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Ot(i,t,e){return Math.max(t,Math.min(e,i))}function lu(i,t){return(i%t+t)%t}function ta(i,t,e){return(1-e)*i+e*t}function ls(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const cu={DEG2RAD:Er};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],A=n[s+1],h=n[s+2],c=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],m=r[a+3];if(o===0){t[e+0]=l,t[e+1]=A,t[e+2]=h,t[e+3]=c;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=m;return}if(c!==m||l!==d||A!==p||h!==g){let f=1-o;const u=l*d+A*p+h*g+c*m,y=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const b=Math.sqrt(x),S=Math.atan2(b,u*y);f=Math.sin(f*S)/b,o=Math.sin(o*S)/b}const I=o*y;if(l=l*f+d*I,A=A*f+p*I,h=h*f+g*I,c=c*f+m*I,f===1-o){const b=1/Math.sqrt(l*l+A*A+h*h+c*c);l*=b,A*=b,h*=b,c*=b}}t[e]=l,t[e+1]=A,t[e+2]=h,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],A=n[s+2],h=n[s+3],c=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*c+l*p-A*d,t[e+1]=l*g+h*d+A*c-o*p,t[e+2]=A*g+h*p+o*d-l*c,t[e+3]=h*g-o*c-l*d-A*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,A=o(n/2),h=o(s/2),c=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*c+A*p*g,this._y=A*p*c-d*h*g,this._z=A*h*g+d*p*c,this._w=A*h*c-d*p*g;break;case"YXZ":this._x=d*h*c+A*p*g,this._y=A*p*c-d*h*g,this._z=A*h*g-d*p*c,this._w=A*h*c+d*p*g;break;case"ZXY":this._x=d*h*c-A*p*g,this._y=A*p*c+d*h*g,this._z=A*h*g+d*p*c,this._w=A*h*c-d*p*g;break;case"ZYX":this._x=d*h*c-A*p*g,this._y=A*p*c+d*h*g,this._z=A*h*g-d*p*c,this._w=A*h*c+d*p*g;break;case"YZX":this._x=d*h*c+A*p*g,this._y=A*p*c+d*h*g,this._z=A*h*g-d*p*c,this._w=A*h*c-d*p*g;break;case"XZY":this._x=d*h*c-A*p*g,this._y=A*p*c-d*h*g,this._z=A*h*g+d*p*c,this._w=A*h*c+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],A=e[2],h=e[6],c=e[10],d=n+o+c;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-A)*p,this._z=(a-s)*p}else if(n>o&&n>c){const p=2*Math.sqrt(1+n-o-c);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+A)/p}else if(o>c){const p=2*Math.sqrt(1+o-n-c);this._w=(r-A)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+c-n-o);this._w=(a-s)/p,this._x=(r+A)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ot(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,A=e._z,h=e._w;return this._x=n*h+a*o+s*A-r*l,this._y=s*h+a*l+r*o-n*A,this._z=r*h+a*A+n*l-s*o,this._w=a*h-n*o-s*l-r*A,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const A=Math.sqrt(l),h=Math.atan2(A,o),c=Math.sin((1-e)*h)/A,d=Math.sin(e*h)/A;return this._w=a*c+this._w*d,this._x=n*c+this._x*d,this._y=s*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,e=0,n=0){Q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(MA.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(MA.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,A=2*(a*s-o*n),h=2*(o*e-r*s),c=2*(r*n-a*e);return this.x=e+l*A+a*c-o*h,this.y=n+l*h+o*A-r*c,this.z=s+l*c+r*h-a*A,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ea.copy(this).projectOnVector(t),this.sub(ea)}reflect(t){return this.sub(ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new Q,MA=new de;class Ut{constructor(t,e,n,s,r,a,o,l,A){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,A)}set(t,e,n,s,r,a,o,l,A){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=A,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],A=n[1],h=n[4],c=n[7],d=n[2],p=n[5],g=n[8],m=s[0],f=s[3],u=s[6],y=s[1],x=s[4],I=s[7],b=s[2],S=s[5],w=s[8];return r[0]=a*m+o*y+l*b,r[3]=a*f+o*x+l*S,r[6]=a*u+o*I+l*w,r[1]=A*m+h*y+c*b,r[4]=A*f+h*x+c*S,r[7]=A*u+h*I+c*w,r[2]=d*m+p*y+g*b,r[5]=d*f+p*x+g*S,r[8]=d*u+p*I+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],A=t[7],h=t[8];return e*a*h-e*o*A-n*r*h+n*o*l+s*r*A-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],A=t[7],h=t[8],c=h*a-o*A,d=o*l-h*r,p=A*r-a*l,g=e*c+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=c*m,t[1]=(s*A-h*n)*m,t[2]=(o*n-s*a)*m,t[3]=d*m,t[4]=(h*e-s*l)*m,t[5]=(s*r-o*e)*m,t[6]=p*m,t[7]=(n*l-A*e)*m,t[8]=(a*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),A=Math.sin(r);return this.set(n*l,n*A,-n*(l*a+A*o)+a+t,-s*A,s*l,-s*(-A*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Ut;function sc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hu(){const i=br("canvas");return i.style.display="block",i}const QA={};function bs(i){i in QA||(QA[i]=!0,console.warn(i))}function uu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const TA=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),DA=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function du(){const i={enabled:!0,workingColorSpace:is,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[is]:{primaries:t,whitePoint:n,transfer:Br,toXYZ:TA,fromXYZ:DA,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:te,toXYZ:TA,fromXYZ:DA,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}const Wt=du();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class fu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Mi===void 0&&(Mi=br("canvas")),Mi.width=t.width,Mi.height=t.height;const s=Mi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Mi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pu=0;class Zo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Ds(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ia(s[a].image)):r.push(ia(s[a]))}else r=ia(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gu=0;const sa=new Q;class De extends Si{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=Ii,s=Ii,r=yn,a=Ci,o=Be,l=We,A=De.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Ds(),this.name="",this.source=new Zo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=A,this.format=o,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case eo:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case no:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case eo:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case no:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Wl;De.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,s=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,A=l[0],h=l[4],c=l[8],d=l[1],p=l[5],g=l[9],m=l[2],f=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(c-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(c+m)<.1&&Math.abs(g+f)<.1&&Math.abs(A+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(A+1)/2,I=(p+1)/2,b=(u+1)/2,S=(h+d)/4,w=(c+m)/4,R=(g+f)/4;return x>I&&x>b?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=S/n,r=w/n):I>b?I<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(I),n=S/s,r=R/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=w/r,s=R/r),this.set(n,s,r,e),this}let y=Math.sqrt((f-g)*(f-g)+(c-m)*(c-m)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(c-m)/y,this.z=(d-h)/y,this.w=Math.acos((A+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this.w=Ot(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this.w=Ot(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mu extends Si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new De(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Zo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends mu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vn extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rc extends pn{constructor(t=1,e=1,n=1,s={}){super(t,e,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new vn(null,t,e,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class ac extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),Gs.subVectors(this.max,cs),Qi.subVectors(t.a,cs),Ti.subVectors(t.b,cs),Di.subVectors(t.c,cs),Wn.subVectors(Ti,Qi),Jn.subVectors(Di,Ti),Ai.subVectors(Qi,Di);let e=[0,-Wn.z,Wn.y,0,-Jn.z,Jn.y,0,-Ai.z,Ai.y,Wn.z,0,-Wn.x,Jn.z,0,-Jn.x,Ai.z,0,-Ai.x,-Wn.y,Wn.x,0,-Jn.y,Jn.x,0,-Ai.y,Ai.x,0];return!ra(e,Qi,Ti,Di,Gs)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,Qi,Ti,Di,Gs))?!1:(zs.crossVectors(Wn,Jn),e=[zs.x,zs.y,zs.z],ra(e,Qi,Ti,Di,Gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Tn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],An=new Q,ks=new ri,Qi=new Q,Ti=new Q,Di=new Q,Wn=new Q,Jn=new Q,Ai=new Q,cs=new Q,Gs=new Q,zs=new Q,li=new Q;function ra(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){li.fromArray(i,r);const o=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),l=t.dot(li),A=e.dot(li),h=n.dot(li);if(Math.max(-Math.max(l,A,h),Math.min(l,A,h))>o)return!1}return!0}const Eu=new ri,hs=new Q,aa=new Q;class Lr{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Eu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);const e=hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(aa)),this.expandByPoint(hs.copy(t.center).sub(aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Dn=new Q,oa=new Q,Os=new Q,Xn=new Q,Aa=new Q,Hs=new Q,la=new Q;class Pr{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){oa.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(oa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Os),o=Xn.dot(this.direction),l=-Xn.dot(Os),A=Xn.lengthSq(),h=Math.abs(1-a*a);let c,d,p,g;if(h>0)if(c=a*l-o,d=a*o-l,g=r*h,c>=0)if(d>=-g)if(d<=g){const m=1/h;c*=m,d*=m,p=c*(c+a*d+2*o)+d*(a*c+d+2*l)+A}else d=r,c=Math.max(0,-(a*d+o)),p=-c*c+d*(d+2*l)+A;else d=-r,c=Math.max(0,-(a*d+o)),p=-c*c+d*(d+2*l)+A;else d<=-g?(c=Math.max(0,-(-a*r+o)),d=c>0?-r:Math.min(Math.max(-r,-l),r),p=-c*c+d*(d+2*l)+A):d<=g?(c=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+A):(c=Math.max(0,-(a*r+o)),d=c>0?r:Math.min(Math.max(-r,-l),r),p=-c*c+d*(d+2*l)+A);else d=a>0?-r:r,c=Math.max(0,-(a*d+o)),p=-c*c+d*(d+2*l)+A;return n&&n.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(oa).addScaledVector(Os,d),p}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const A=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return A>=0?(n=(t.min.x-d.x)*A,s=(t.max.x-d.x)*A):(n=(t.max.x-d.x)*A,s=(t.min.x-d.x)*A),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),c>=0?(o=(t.min.z-d.z)*c,l=(t.max.z-d.z)*c):(o=(t.max.z-d.z)*c,l=(t.min.z-d.z)*c),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){Aa.subVectors(e,t),Hs.subVectors(n,t),la.crossVectors(Aa,Hs);let a=this.direction.dot(la),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,t);const l=o*this.direction.dot(Hs.crossVectors(Xn,Hs));if(l<0)return null;const A=o*this.direction.dot(Aa.cross(Xn));if(A<0||l+A>a)return null;const h=-o*Xn.dot(la);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(t,e,n,s,r,a,o,l,A,h,c,d,p,g,m,f){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,A,h,c,d,p,g,m,f)}set(t,e,n,s,r,a,o,l,A,h,c,d,p,g,m,f){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=A,u[6]=h,u[10]=c,u[14]=d,u[3]=p,u[7]=g,u[11]=m,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),A=Math.sin(s),h=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*c,g=o*h,m=o*c;e[0]=l*h,e[4]=-l*c,e[8]=A,e[1]=p+g*A,e[5]=d-m*A,e[9]=-o*l,e[2]=m-d*A,e[6]=g+p*A,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*c,g=A*h,m=A*c;e[0]=d+m*o,e[4]=g*o-p,e[8]=a*A,e[1]=a*c,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=m+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*c,g=A*h,m=A*c;e[0]=d-m*o,e[4]=-a*c,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=m-d*o,e[2]=-a*A,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*c,g=o*h,m=o*c;e[0]=l*h,e[4]=g*A-p,e[8]=d*A+m,e[1]=l*c,e[5]=m*A+d,e[9]=p*A-g,e[2]=-A,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*A,g=o*l,m=o*A;e[0]=l*h,e[4]=m-d*c,e[8]=g*c+p,e[1]=c,e[5]=a*h,e[9]=-o*h,e[2]=-A*h,e[6]=p*c+g,e[10]=d-m*c}else if(t.order==="XZY"){const d=a*l,p=a*A,g=o*l,m=o*A;e[0]=l*h,e[4]=-c,e[8]=A*h,e[1]=d*c+m,e[5]=a*h,e[9]=p*c-g,e[2]=g*c-p,e[6]=o*h,e[10]=m*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Iu,t,Cu)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Kn.crossVectors(n,je),Kn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Kn.crossVectors(n,je)),Kn.normalize(),Ys.crossVectors(je,Kn),s[0]=Kn.x,s[4]=Ys.x,s[8]=je.x,s[1]=Kn.y,s[5]=Ys.y,s[9]=je.y,s[2]=Kn.z,s[6]=Ys.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],A=n[12],h=n[1],c=n[5],d=n[9],p=n[13],g=n[2],m=n[6],f=n[10],u=n[14],y=n[3],x=n[7],I=n[11],b=n[15],S=s[0],w=s[4],R=s[8],B=s[12],_=s[1],T=s[5],L=s[9],O=s[13],H=s[2],J=s[6],z=s[10],K=s[14],P=s[3],Z=s[7],rt=s[11],ht=s[15];return r[0]=a*S+o*_+l*H+A*P,r[4]=a*w+o*T+l*J+A*Z,r[8]=a*R+o*L+l*z+A*rt,r[12]=a*B+o*O+l*K+A*ht,r[1]=h*S+c*_+d*H+p*P,r[5]=h*w+c*T+d*J+p*Z,r[9]=h*R+c*L+d*z+p*rt,r[13]=h*B+c*O+d*K+p*ht,r[2]=g*S+m*_+f*H+u*P,r[6]=g*w+m*T+f*J+u*Z,r[10]=g*R+m*L+f*z+u*rt,r[14]=g*B+m*O+f*K+u*ht,r[3]=y*S+x*_+I*H+b*P,r[7]=y*w+x*T+I*J+b*Z,r[11]=y*R+x*L+I*z+b*rt,r[15]=y*B+x*O+I*K+b*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],A=t[13],h=t[2],c=t[6],d=t[10],p=t[14],g=t[3],m=t[7],f=t[11],u=t[15];return g*(+r*l*c-s*A*c-r*o*d+n*A*d+s*o*p-n*l*p)+m*(+e*l*p-e*A*d+r*a*d-s*a*p+s*A*h-r*l*h)+f*(+e*A*c-e*o*p-r*a*c+n*a*p+r*o*h-n*A*h)+u*(-s*o*h-e*l*c+e*o*d+s*a*c-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],A=t[7],h=t[8],c=t[9],d=t[10],p=t[11],g=t[12],m=t[13],f=t[14],u=t[15],y=c*f*A-m*d*A+m*l*p-o*f*p-c*l*u+o*d*u,x=g*d*A-h*f*A-g*l*p+a*f*p+h*l*u-a*d*u,I=h*m*A-g*c*A+g*o*p-a*m*p-h*o*u+a*c*u,b=g*c*l-h*m*l-g*o*d+a*m*d+h*o*f-a*c*f,S=e*y+n*x+s*I+r*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/S;return t[0]=y*w,t[1]=(m*d*r-c*f*r-m*s*p+n*f*p+c*s*u-n*d*u)*w,t[2]=(o*f*r-m*l*r+m*s*A-n*f*A-o*s*u+n*l*u)*w,t[3]=(c*l*r-o*d*r-c*s*A+n*d*A+o*s*p-n*l*p)*w,t[4]=x*w,t[5]=(h*f*r-g*d*r+g*s*p-e*f*p-h*s*u+e*d*u)*w,t[6]=(g*l*r-a*f*r-g*s*A+e*f*A+a*s*u-e*l*u)*w,t[7]=(a*d*r-h*l*r+h*s*A-e*d*A-a*s*p+e*l*p)*w,t[8]=I*w,t[9]=(g*c*r-h*m*r-g*n*p+e*m*p+h*n*u-e*c*u)*w,t[10]=(a*m*r-g*o*r+g*n*A-e*m*A-a*n*u+e*o*u)*w,t[11]=(h*o*r-a*c*r-h*n*A+e*c*A+a*n*p-e*o*p)*w,t[12]=b*w,t[13]=(h*m*s-g*c*s+g*n*d-e*m*d-h*n*f+e*c*f)*w,t[14]=(g*o*s-a*m*s-g*n*l+e*m*l+a*n*f-e*o*f)*w,t[15]=(a*c*s-h*o*s+h*n*l-e*c*l-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,A=r*a,h=r*o;return this.set(A*a+n,A*o-s*l,A*l+s*o,0,A*o+s*l,h*o+n,h*l-s*a,0,A*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,A=r+r,h=a+a,c=o+o,d=r*A,p=r*h,g=r*c,m=a*h,f=a*c,u=o*c,y=l*A,x=l*h,I=l*c,b=n.x,S=n.y,w=n.z;return s[0]=(1-(m+u))*b,s[1]=(p+I)*b,s[2]=(g-x)*b,s[3]=0,s[4]=(p-I)*S,s[5]=(1-(d+u))*S,s[6]=(f+y)*S,s[7]=0,s[8]=(g+x)*w,s[9]=(f-y)*w,s[10]=(1-(d+m))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ri.set(s[0],s[1],s[2]).length();const a=Ri.set(s[4],s[5],s[6]).length(),o=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const A=1/r,h=1/a,c=1/o;return ln.elements[0]*=A,ln.elements[1]*=A,ln.elements[2]*=A,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=c,ln.elements[9]*=c,ln.elements[10]*=c,e.setFromRotationMatrix(ln),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Bn,l=!1){const A=this.elements,h=2*r/(e-t),c=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let g,m;if(l)g=r/(a-r),m=a*r/(a-r);else if(o===Bn)g=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Sr)g=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return A[0]=h,A[4]=0,A[8]=d,A[12]=0,A[1]=0,A[5]=c,A[9]=p,A[13]=0,A[2]=0,A[6]=0,A[10]=g,A[14]=m,A[3]=0,A[7]=0,A[11]=-1,A[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Bn,l=!1){const A=this.elements,h=2/(e-t),c=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,m;if(l)g=1/(a-r),m=a/(a-r);else if(o===Bn)g=-2/(a-r),m=-(a+r)/(a-r);else if(o===Sr)g=-1/(a-r),m=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return A[0]=h,A[4]=0,A[8]=0,A[12]=d,A[1]=0,A[5]=c,A[9]=0,A[13]=p,A[2]=0,A[6]=0,A[10]=g,A[14]=m,A[3]=0,A[7]=0,A[11]=0,A[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new Q,ln=new Xt,Iu=new Q(0,0,0),Cu=new Q(1,1,1),Kn=new Q,Ys=new Q,je=new Q,RA=new Xt,NA=new de;class bn{constructor(t=0,e=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],A=s[5],h=s[9],c=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,A),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,A)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,p),this._z=Math.atan2(-a,A)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,A));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,A),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,A),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return RA.makeRotationFromQuaternion(t),this.setFromRotationMatrix(RA,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return NA.setFromEuler(this),this.setFromQuaternion(NA,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class $o{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xu=0;const FA=new Q,Ni=new de,Rn=new Xt,Vs=new Q,us=new Q,yu=new Q,_u=new de,UA=new Q(1,0,0),LA=new Q(0,1,0),PA=new Q(0,0,1),kA={type:"added"},Bu={type:"removed"},Fi={type:"childadded",child:null},ca={type:"childremoved",child:null};class ve extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new Q,e=new bn,n=new de,s=new Q(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Ut}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(UA,t)}rotateY(t){return this.rotateOnAxis(LA,t)}rotateZ(t){return this.rotateOnAxis(PA,t)}translateOnAxis(t,e){return FA.copy(t).applyQuaternion(this.quaternion),this.position.add(FA.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(UA,t)}translateY(t){return this.translateOnAxis(LA,t)}translateZ(t){return this.translateOnAxis(PA,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vs.copy(t):Vs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(us,Vs,this.up):Rn.lookAt(Vs,us,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kA),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bu),ca.child=t,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kA),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,yu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,_u,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let A=0,h=l.length;A<h;A++){const c=l[A];r(t.shapes,c)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,A=this.material.length;l<A;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),A=a(t.textures),h=a(t.images),c=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),A.length>0&&(n.textures=A),h.length>0&&(n.images=h),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const A in o){const h=o[A];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ve.DEFAULT_UP=new Q(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new Q,Nn=new Q,ha=new Q,Fn=new Q,Ui=new Q,Li=new Q,GA=new Q,ua=new Q,da=new Q,fa=new Q,pa=new Jt,ga=new Jt,ma=new Jt;class dn{constructor(t=new Q,e=new Q,n=new Q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),Nn.subVectors(n,e),ha.subVectors(t,e);const a=cn.dot(cn),o=cn.dot(Nn),l=cn.dot(ha),A=Nn.dot(Nn),h=Nn.dot(ha),c=a*A-o*o;if(c===0)return r.set(0,0,0),null;const d=1/c,p=(A*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return pa.setScalar(0),ga.setScalar(0),ma.setScalar(0),pa.fromBufferAttribute(t,e),ga.fromBufferAttribute(t,n),ma.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(pa,r.x),a.addScaledVector(ga,r.y),a.addScaledVector(ma,r.z),a}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),Nn.subVectors(t,e),cn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),cn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ui.subVectors(s,n),Li.subVectors(r,n),ua.subVectors(t,n);const l=Ui.dot(ua),A=Li.dot(ua);if(l<=0&&A<=0)return e.copy(n);da.subVectors(t,s);const h=Ui.dot(da),c=Li.dot(da);if(h>=0&&c<=h)return e.copy(s);const d=l*c-h*A;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ui,a);fa.subVectors(t,r);const p=Ui.dot(fa),g=Li.dot(fa);if(g>=0&&p<=g)return e.copy(r);const m=p*A-l*g;if(m<=0&&A>=0&&g<=0)return o=A/(A-g),e.copy(n).addScaledVector(Li,o);const f=h*g-p*c;if(f<=0&&c-h>=0&&p-g>=0)return GA.subVectors(r,s),o=(c-h)/(c-h+(p-g)),e.copy(s).addScaledVector(GA,o);const u=1/(f+m+d);return a=m*u,o=d*u,e.copy(n).addScaledVector(Ui,a).addScaledVector(Li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},qs={h:0,s:0,l:0};function Ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=lu(t,1),e=Ot(e,0,1),n=Ot(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ea(a,r,t+1/3),this.g=Ea(a,r,t),this.b=Ea(a,r,t-1/3)}return Wt.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Wt.workingToColorSpace(Me.copy(this),t),Math.round(Ot(Me.r*255,0,255))*65536+Math.round(Ot(Me.g*255,0,255))*256+Math.round(Ot(Me.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(Me.copy(this),e);const n=Me.r,s=Me.g,r=Me.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,A;const h=(o+a)/2;if(o===a)l=0,A=0;else{const c=a-o;switch(A=h<=.5?c/(a+o):c/(2-a-o),a){case n:l=(s-r)/c+(s<r?6:0);break;case s:l=(r-n)/c+2;break;case r:l=(n-s)/c+4;break}l/=6}return t.h=l,t.s=A,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=ze){Wt.workingToColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,s=Me.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(qs);const n=ta(jn.h,qs.h,e),s=ta(jn.s,qs.s,e),r=ta(jn.l,qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new zt;zt.NAMES=oc;let vu=0;class rs extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=ji,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=Va,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bA&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class tA extends rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new Q,Ws=new wt;let Su=0;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Su++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wA,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wA&&(t.usage=this.usage),t}}class Ac extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lc extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Sn extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bu=0;const nn=new Xt,Ia=new ve,Pi=new Q,Ze=new ri,ds=new ri,ye=new Q;class on extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sc(t)?lc:Ac)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Sn(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Ze.min,ds.min),Ze.expandByPoint(ye),ye.addVectors(Ze.max,ds.max),Ze.expandByPoint(ye)):(Ze.expandByPoint(ds.min),Ze.expandByPoint(ds.max))}Ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let A=0,h=o.count;A<h;A++)ye.fromBufferAttribute(o,A),l&&(Pi.fromBufferAttribute(t,A),ye.add(Pi)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new Q,l[R]=new Q;const A=new Q,h=new Q,c=new Q,d=new wt,p=new wt,g=new wt,m=new Q,f=new Q;function u(R,B,_){A.fromBufferAttribute(n,R),h.fromBufferAttribute(n,B),c.fromBufferAttribute(n,_),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,B),g.fromBufferAttribute(r,_),h.sub(A),c.sub(A),p.sub(d),g.sub(d);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(m.copy(h).multiplyScalar(g.y).addScaledVector(c,-p.y).multiplyScalar(T),f.copy(c).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(T),o[R].add(m),o[B].add(m),o[_].add(m),l[R].add(f),l[B].add(f),l[_].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,B=y.length;R<B;++R){const _=y[R],T=_.start,L=_.count;for(let O=T,H=T+L;O<H;O+=3)u(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new Q,I=new Q,b=new Q,S=new Q;function w(R){b.fromBufferAttribute(s,R),S.copy(b);const B=o[R];x.copy(B),x.sub(b.multiplyScalar(b.dot(B))).normalize(),I.crossVectors(S,B);const T=I.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,B=y.length;R<B;++R){const _=y[R],T=_.start,L=_.count;for(let O=T,H=T+L;O<H;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new Q,r=new Q,a=new Q,o=new Q,l=new Q,A=new Q,h=new Q,c=new Q;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),m=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),a.fromBufferAttribute(e,f),h.subVectors(a,r),c.subVectors(s,r),h.cross(c),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),A.fromBufferAttribute(n,f),o.add(h),l.add(h),A.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(f,A.x,A.y,A.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),c.subVectors(s,r),h.cross(c),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const A=o.array,h=o.itemSize,c=o.normalized,d=new A.constructor(l.length*h);let p=0,g=0;for(let m=0,f=l.length;m<f;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*h;for(let u=0;u<h;u++)d[g++]=A[p++]}return new $e(d,h,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new on,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],A=t(l,n);e.setAttribute(o,A)}const r=this.morphAttributes;for(const o in r){const l=[],A=r[o];for(let h=0,c=A.length;h<c;h++){const d=A[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const A=a[o];e.addGroup(A.start,A.count,A.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const A in l)l[A]!==void 0&&(t[A]=l[A]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const A=n[l];t.data.attributes[l]=A.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const A=this.morphAttributes[l],h=[];for(let c=0,d=A.length;c<d;c++){const p=A[c];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const A in s){const h=s[A];this.setAttribute(A,h.clone(e))}const r=t.morphAttributes;for(const A in r){const h=[],c=r[A];for(let d=0,p=c.length;d<p;d++)h.push(c[d].clone(e));this.morphAttributes[A]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let A=0,h=a.length;A<h;A++){const c=a[A];this.addGroup(c.start,c.count,c.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zA=new Xt,ci=new Pr,Js=new Lr,OA=new Q,Xs=new Q,Ks=new Q,js=new Q,Ca=new Q,Zs=new Q,HA=new Q,$s=new Q;class He extends ve{constructor(t=new on,e=new tA){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Zs.set(0,0,0);for(let l=0,A=r.length;l<A;l++){const h=o[l],c=r[l];h!==0&&(Ca.fromBufferAttribute(c,t),a?Zs.addScaledVector(Ca,h):Zs.addScaledVector(Ca.sub(e),h))}e.add(Zs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(Js.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Js,OA)===null||ci.origin.distanceToSquared(OA)>(t.far-t.near)**2))&&(zA.copy(r).invert(),ci.copy(t.ray).applyMatrix4(zA),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,A=r.attributes.uv,h=r.attributes.uv1,c=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,m=d.length;g<m;g++){const f=d[g],u=a[f.materialIndex],y=Math.max(f.start,p.start),x=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let I=y,b=x;I<b;I+=3){const S=o.getX(I),w=o.getX(I+1),R=o.getX(I+2);s=tr(this,u,t,n,A,h,c,S,w,R),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let f=g,u=m;f<u;f+=3){const y=o.getX(f),x=o.getX(f+1),I=o.getX(f+2);s=tr(this,a,t,n,A,h,c,y,x,I),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,m=d.length;g<m;g++){const f=d[g],u=a[f.materialIndex],y=Math.max(f.start,p.start),x=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let I=y,b=x;I<b;I+=3){const S=I,w=I+1,R=I+2;s=tr(this,u,t,n,A,h,c,S,w,R),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let f=g,u=m;f<u;f+=3){const y=f,x=f+1,I=f+2;s=tr(this,a,t,n,A,h,c,y,x,I),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function wu(i,t,e,n,s,r,a,o){let l;if(t.side===Ye?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===si,o),l===null)return null;$s.copy(o),$s.applyMatrix4(i.matrixWorld);const A=e.ray.origin.distanceTo($s);return A<e.near||A>e.far?null:{distance:A,point:$s.clone(),object:i}}function tr(i,t,e,n,s,r,a,o,l,A){i.getVertexPosition(o,Xs),i.getVertexPosition(l,Ks),i.getVertexPosition(A,js);const h=wu(i,t,e,n,Xs,Ks,js,HA);if(h){const c=new Q;dn.getBarycoord(HA,Xs,Ks,js,c),s&&(h.uv=dn.getInterpolatedAttribute(s,o,l,A,c,new wt)),r&&(h.uv1=dn.getInterpolatedAttribute(r,o,l,A,c,new wt)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,l,A,c,new Q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c:A,normal:new Q,materialIndex:0};dn.getNormal(Xs,Ks,js,d.normal),h.face=d,h.barycoord=c}return h}class as extends on{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],A=[],h=[],c=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Sn(A,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(c,2));function g(m,f,u,y,x,I,b,S,w,R,B){const _=I/w,T=b/R,L=I/2,O=b/2,H=S/2,J=w+1,z=R+1;let K=0,P=0;const Z=new Q;for(let rt=0;rt<z;rt++){const ht=rt*T-O;for(let Tt=0;Tt<J;Tt++){const Gt=Tt*_-L;Z[m]=Gt*y,Z[f]=ht*x,Z[u]=H,A.push(Z.x,Z.y,Z.z),Z[m]=0,Z[f]=0,Z[u]=S>0?1:-1,h.push(Z.x,Z.y,Z.z),c.push(Tt/w),c.push(1-rt/R),K+=1}}for(let rt=0;rt<R;rt++)for(let ht=0;ht<w;ht++){const Tt=d+ht+J*rt,Gt=d+ht+J*(rt+1),Yt=d+(ht+1)+J*(rt+1),Lt=d+(ht+1)+J*rt;l.push(Tt,Gt,Lt),l.push(Gt,Yt,Lt),P+=6}o.addGroup(p,P,B),p+=P,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=ss(i[e]);for(const s in n)t[s]=n[s]}return t}function Mu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Qu={clone:ss,merge:Ue};var Tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tu,this.fragmentShader=Du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=Mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new Q,YA=new wt,VA=new wt;class Oe extends hc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Do*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,YA,VA),e.subVectors(VA,YA)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Er*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,A=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/A,s*=a.width/l,n*=a.height/A}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Gi=1;class uc extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Oe(ki,Gi,t,e);s.layers=this.layers,this.add(s);const r=new Oe(ki,Gi,t,e);r.layers=this.layers,this.add(r);const a=new Oe(ki,Gi,t,e);a.layers=this.layers,this.add(a);const o=new Oe(ki,Gi,t,e);o.layers=this.layers,this.add(o);const l=new Oe(ki,Gi,t,e);l.layers=this.layers,this.add(l);const A=new Oe(ki,Gi,t,e);A.layers=this.layers,this.add(A)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const A of e)this.remove(A);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const A of e)this.add(A),A.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,A,h]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,A),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(c,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dc extends De{constructor(t=[],e=es,n,s,r,a,o,l,A,h){super(t,e,n,s,r,a,o,l,A,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fc extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new as(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Gn});r.uniforms.tEquirect.value=e;const a=new He(s,r),o=e.minFilter;return e.minFilter===Ci&&(e.minFilter=yn),new uc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class er extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ru={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,A=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(A&&t.hand){a=!0;for(const m of t.hand.values()){const f=e.getJointPose(m,n),u=this._getHandJoint(A,m);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=A.joints["index-finger-tip"],c=A.joints["thumb-tip"],d=h.position.distanceTo(c.position),p=.02,g=.005;A.inputState.pinching&&d>p+g?(A.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!A.inputState.pinching&&d<=p-g&&(A.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ru)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),A!==null&&(A.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new er;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Nu extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Fu extends De{constructor(t=null,e=1,n=1,s,r,a,o,l,A=be,h=be,c,d){super(null,a,o,l,A,h,s,r,c,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uu extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ya=new Q,Lu=new Q,Pu=new Ut;class Pn{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ya.subVectors(n,e).cross(Lu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ya),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pu.getNormalMatrix(t),s=this.coplanarPoint(ya).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new Lr,ku=new wt(.5,.5),nr=new Q;class pc{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],A=r[3],h=r[4],c=r[5],d=r[6],p=r[7],g=r[8],m=r[9],f=r[10],u=r[11],y=r[12],x=r[13],I=r[14],b=r[15];if(s[0].setComponents(A-a,p-h,u-g,b-y).normalize(),s[1].setComponents(A+a,p+h,u+g,b+y).normalize(),s[2].setComponents(A+o,p+c,u+m,b+x).normalize(),s[3].setComponents(A-o,p-c,u-m,b-x).normalize(),n)s[4].setComponents(l,d,f,I).normalize(),s[5].setComponents(A-l,p-d,u-f,b-I).normalize();else if(s[4].setComponents(A-l,p-d,u-f,b-I).normalize(),e===Bn)s[5].setComponents(A+l,p+d,u+f,b+I).normalize();else if(e===Sr)s[5].setComponents(l,d,f,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){hi.center.set(0,0,0);const e=ku.distanceTo(t.center);return hi.radius=.7071067811865476+e,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(nr.x=s.normal.x>0?t.max.x:t.min.x,nr.y=s.normal.y>0?t.max.y:t.min.y,nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gc extends rs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wr=new Q,Mr=new Q,qA=new Xt,fs=new Pr,ir=new Lr,_a=new Q,WA=new Q;class Gu extends ve{constructor(t=new on,e=new gc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)wr.fromBufferAttribute(e,s-1),Mr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=wr.distanceTo(Mr);t.setAttribute("lineDistance",new Sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),ir.radius+=r,t.ray.intersectsSphere(ir)===!1)return;qA.copy(s).invert(),fs.copy(t.ray).applyMatrix4(qA);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,A=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let m=p,f=g-1;m<f;m+=A){const u=h.getX(m),y=h.getX(m+1),x=sr(this,t,fs,l,u,y,m);x&&e.push(x)}if(this.isLineLoop){const m=h.getX(g-1),f=h.getX(p),u=sr(this,t,fs,l,m,f,g-1);u&&e.push(u)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let m=p,f=g-1;m<f;m+=A){const u=sr(this,t,fs,l,m,m+1,m);u&&e.push(u)}if(this.isLineLoop){const m=sr(this,t,fs,l,g-1,p,g-1);m&&e.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function sr(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(wr.fromBufferAttribute(o,s),Mr.fromBufferAttribute(o,r),e.distanceSqToSegment(wr,Mr,_a,WA)>n)return;_a.applyMatrix4(i.matrixWorld);const A=t.ray.origin.distanceTo(_a);if(!(A<t.near||A>t.far))return{distance:A,point:WA.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class mc extends De{constructor(t,e,n=Ve,s,r,a,o=be,l=be,A,h=vs,c=1){if(h!==vs&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:c};super(d,s,r,a,o,l,h,n,A),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ec extends De{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class kr extends on{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),A=o+1,h=l+1,c=t/o,d=e/l,p=[],g=[],m=[],f=[];for(let u=0;u<h;u++){const y=u*d-a;for(let x=0;x<A;x++){const I=x*c-r;g.push(I,-y,0),m.push(0,0,1),f.push(x/o),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<o;y++){const x=y+A*u,I=y+A*(u+1),b=y+1+A*(u+1),S=y+1+A*u;p.push(x,I,S),p.push(I,b,S)}this.setIndex(p),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(m,3)),this.setAttribute("uv",new Sn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.width,t.height,t.widthSegments,t.heightSegments)}}class eA extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class JA extends rs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zu extends rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ou extends rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const XA={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Hu{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const A=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,c){return A.push(h,c),this},this.removeHandler=function(h){const c=A.indexOf(h);return c!==-1&&A.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=A.length;c<d;c+=2){const p=A[c],g=A[c+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Yu=new Hu;class nA{constructor(t){this.manager=t!==void 0?t:Yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}nA.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class Vu extends Error{constructor(t,e){super(t),this.response=e}}class qu extends nA{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=XA.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Un[t]!==void 0){Un[t].push({onLoad:e,onProgress:n,onError:s});return}Un[t]=[],Un[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(A=>{if(A.status===200||A.status===0){if(A.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||A.body===void 0||A.body.getReader===void 0)return A;const h=Un[t],c=A.body.getReader(),d=A.headers.get("X-File-Size")||A.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let m=0;const f=new ReadableStream({start(u){y();function y(){c.read().then(({done:x,value:I})=>{if(x)u.close();else{m+=I.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let S=0,w=h.length;S<w;S++){const R=h[S];R.onProgress&&R.onProgress(b)}u.enqueue(I),y()}},x=>{u.error(x)})}}});return new Response(f)}else throw new Vu(`fetch for "${A.url}" responded with ${A.status}: ${A.statusText}`,A)}).then(A=>{switch(l){case"arraybuffer":return A.arrayBuffer();case"blob":return A.blob();case"document":return A.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return A.json();default:if(o==="")return A.text();{const c=/charset="?([^;"\s]*)"?/i.exec(o),d=c&&c[1]?c[1].toLowerCase():void 0,p=new TextDecoder(d);return A.arrayBuffer().then(g=>p.decode(g))}}}).then(A=>{XA.add(`file:${t}`,A);const h=Un[t];delete Un[t];for(let c=0,d=h.length;c<d;c++){const p=h[c];p.onLoad&&p.onLoad(A)}}).catch(A=>{const h=Un[t];if(h===void 0)throw this.manager.itemError(t),A;delete Un[t];for(let c=0,d=h.length;c<d;c++){const p=h[c];p.onError&&p.onError(A)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ic extends hc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const A=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=A*this.view.offsetX,a=r+A*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Wu extends on{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Ju extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Cc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const KA=new Xt;class Xu{constructor(t,e,n=0,s=1/0){this.ray=new Pr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new $o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return KA.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(KA),this}intersectObject(t,e=!0,n=[]){return Ro(t,this,n,e),n.sort(jA),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ro(t[s],this,n,e);return n.sort(jA),n}}function jA(i,t){return i.distance-t.distance}function Ro(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ro(r[a],t,e,!0)}}class ZA{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ot(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Gr{constructor(t,e,n,s){Gr.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}}class Ku extends Si{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function $A(i,t,e,n){const s=ju(n);switch(e){case Zl:return i*t;case tc:return i*t/s.components*s.byteLength;case jo:return i*t/s.components*s.byteLength;case ec:return i*t*2/s.components*s.byteLength;case Ur:return i*t*2/s.components*s.byteLength;case $l:return i*t*3/s.components*s.byteLength;case Be:return i*t*4/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case so:case ao:return Math.max(i,16)*Math.max(t,8)/4;case io:case ro:return Math.max(i,8)*Math.max(t,8)/2;case oo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vo:case So:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wo:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qo:case To:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ju(i){switch(i){case We:case Jl:return{byteLength:1,components:1};case _s:case Xl:case Ts:return{byteLength:2,components:1};case Xo:case Ko:return{byteLength:2,components:4};case Ve:case Jo:case _n:return{byteLength:4,components:1};case Kl:case jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zu(i){const t=new WeakMap;function e(o,l){const A=o.array,h=o.usage,c=A.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,A,h),o.onUploadCallback();let p;if(A instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&A instanceof Float16Array)p=i.HALF_FLOAT;else if(A instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(A instanceof Int16Array)p=i.SHORT;else if(A instanceof Uint32Array)p=i.UNSIGNED_INT;else if(A instanceof Int32Array)p=i.INT;else if(A instanceof Int8Array)p=i.BYTE;else if(A instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(A instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+A);return{buffer:d,type:p,bytesPerElement:A.BYTES_PER_ELEMENT,version:o.version,size:c}}function n(o,l,A){const h=l.array,c=l.updateRanges;if(i.bindBuffer(A,o),c.length===0)i.bufferSubData(A,0,h);else{c.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<c.length;p++){const g=c[d],m=c[p];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++d,c[d]=m)}c.length=d+1;for(let p=0,g=c.length;p<g;p++){const m=c[p];i.bufferSubData(A,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const A=t.get(o);if(A===void 0)t.set(o,e(o,l));else if(A.version<o.version){if(A.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(A.buffer,o,l),A.version=o.version}}return{get:s,remove:r,update:a}}var $u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
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
#endif`,ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
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
#endif`,ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ud=`#ifdef USE_IRIDESCENCE
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
#endif`,dd=`#ifdef USE_BUMPMAP
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yd=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,_d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bd=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Md="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gd=`#ifdef USE_GRADIENTMAP
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
}`,zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yd=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,jd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lf=`#if defined( USE_POINTS_UV )
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
#endif`,cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
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
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
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
#endif`,_f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Of=`#ifdef USE_SKINNING
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
#endif`,Hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jf=`#ifdef USE_TRANSMISSION
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
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
}`,ap=`#if DEPTH_PACKING == 3200
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
}`,op=`#define DISTANCE
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
}`,Ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
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
}`,up=`uniform vec3 diffuse;
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
}`,dp=`#include <common>
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
}`,fp=`uniform vec3 diffuse;
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
}`,pp=`#define LAMBERT
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
}`,gp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,mp=`#define MATCAP
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
}`,Ep=`#define MATCAP
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
}`,Ip=`#define NORMAL
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
}`,Cp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xp=`#define PHONG
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
}`,yp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,_p=`#define STANDARD
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
}`,Bp=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,vp=`#define TOON
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
}`,Sp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,bp=`uniform float size;
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
}`,wp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,Qp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Tp=`uniform float rotation;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:$u,alphahash_pars_fragment:td,alphamap_fragment:ed,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:sd,aomap_fragment:rd,aomap_pars_fragment:ad,batching_pars_vertex:od,batching_vertex:Ad,begin_vertex:ld,beginnormal_vertex:cd,bsdfs:hd,iridescence_fragment:ud,bumpmap_pars_fragment:dd,clipping_planes_fragment:fd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:gd,clipping_planes_vertex:md,color_fragment:Ed,color_pars_fragment:Id,color_pars_vertex:Cd,color_vertex:xd,common:yd,cube_uv_reflection_fragment:_d,defaultnormal_vertex:Bd,displacementmap_pars_vertex:vd,displacementmap_vertex:Sd,emissivemap_fragment:bd,emissivemap_pars_fragment:wd,colorspace_fragment:Md,colorspace_pars_fragment:Qd,envmap_fragment:Td,envmap_common_pars_fragment:Dd,envmap_pars_fragment:Rd,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Vd,envmap_vertex:Fd,fog_vertex:Ud,fog_pars_vertex:Ld,fog_fragment:Pd,fog_pars_fragment:kd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:zd,lights_lambert_fragment:Od,lights_lambert_pars_fragment:Hd,lights_pars_begin:Yd,lights_toon_fragment:qd,lights_toon_pars_fragment:Wd,lights_phong_fragment:Jd,lights_phong_pars_fragment:Xd,lights_physical_fragment:Kd,lights_physical_pars_fragment:jd,lights_fragment_begin:Zd,lights_fragment_maps:$d,lights_fragment_end:tf,logdepthbuf_fragment:ef,logdepthbuf_pars_fragment:nf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:rf,map_fragment:af,map_pars_fragment:of,map_particle_fragment:Af,map_particle_pars_fragment:lf,metalnessmap_fragment:cf,metalnessmap_pars_fragment:hf,morphinstance_vertex:uf,morphcolor_vertex:df,morphnormal_vertex:ff,morphtarget_pars_vertex:pf,morphtarget_vertex:gf,normal_fragment_begin:mf,normal_fragment_maps:Ef,normal_pars_fragment:If,normal_pars_vertex:Cf,normal_vertex:xf,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:_f,clearcoat_normal_fragment_maps:Bf,clearcoat_pars_fragment:vf,iridescence_pars_fragment:Sf,opaque_fragment:bf,packing:wf,premultiplied_alpha_fragment:Mf,project_vertex:Qf,dithering_fragment:Tf,dithering_pars_fragment:Df,roughnessmap_fragment:Rf,roughnessmap_pars_fragment:Nf,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Uf,shadowmap_vertex:Lf,shadowmask_pars_fragment:Pf,skinbase_vertex:kf,skinning_pars_vertex:Gf,skinning_vertex:zf,skinnormal_vertex:Of,specularmap_fragment:Hf,specularmap_pars_fragment:Yf,tonemapping_fragment:Vf,tonemapping_pars_fragment:qf,transmission_fragment:Wf,transmission_pars_fragment:Jf,uv_pars_fragment:Xf,uv_pars_vertex:Kf,uv_vertex:jf,worldpos_vertex:Zf,background_vert:$f,background_frag:tp,backgroundCube_vert:ep,backgroundCube_frag:np,cube_vert:ip,cube_frag:sp,depth_vert:rp,depth_frag:ap,distanceRGBA_vert:op,distanceRGBA_frag:Ap,equirect_vert:lp,equirect_frag:cp,linedashed_vert:hp,linedashed_frag:up,meshbasic_vert:dp,meshbasic_frag:fp,meshlambert_vert:pp,meshlambert_frag:gp,meshmatcap_vert:mp,meshmatcap_frag:Ep,meshnormal_vert:Ip,meshnormal_frag:Cp,meshphong_vert:xp,meshphong_frag:yp,meshphysical_vert:_p,meshphysical_frag:Bp,meshtoon_vert:vp,meshtoon_frag:Sp,points_vert:bp,points_frag:wp,shadow_vert:Mp,shadow_frag:Qp,sprite_vert:Tp,sprite_frag:Dp},at={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},In={basic:{uniforms:Ue([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ue([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ue([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ue([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ue([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ue([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ue([at.points,at.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ue([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ue([at.common,at.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ue([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ue([at.sprite,at.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ue([at.common,at.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ue([at.lights,at.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};In.physical={uniforms:Ue([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const rr={r:0,b:0,g:0},ui=new bn,Rp=new Xt;function Np(i,t,e,n,s,r,a){const o=new zt(0);let l=r===!0?0:1,A,h,c=null,d=0,p=null;function g(x){let I=x.isScene===!0?x.background:null;return I&&I.isTexture&&(I=(x.backgroundBlurriness>0?e:t).get(I)),I}function m(x){let I=!1;const b=g(x);b===null?u(o,l):b&&b.isColor&&(u(b,1),I=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(x,I){const b=g(I);b&&(b.isCubeTexture||b.mapping===Fr)?(h===void 0&&(h=new He(new as(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:ss(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ui.copy(I.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rp.makeRotationFromEuler(ui)),h.material.toneMapped=Wt.getTransfer(b.colorSpace)!==te,(c!==b||d!==b.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,c=b,d=b.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(A===void 0&&(A=new He(new kr(2,2),new rn({name:"BackgroundMaterial",uniforms:ss(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),A.geometry.deleteAttribute("normal"),Object.defineProperty(A.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(A)),A.material.uniforms.t2D.value=b,A.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,A.material.toneMapped=Wt.getTransfer(b.colorSpace)!==te,b.matrixAutoUpdate===!0&&b.updateMatrix(),A.material.uniforms.uvTransform.value.copy(b.matrix),(c!==b||d!==b.version||p!==i.toneMapping)&&(A.material.needsUpdate=!0,c=b,d=b.version,p=i.toneMapping),A.layers.enableAll(),x.unshift(A,A.geometry,A.material,0,0,null))}function u(x,I){x.getRGB(rr,cc(i)),n.buffers.color.setClear(rr.r,rr.g,rr.b,I,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),A!==void 0&&(A.geometry.dispose(),A.material.dispose(),A=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,I=1){o.set(x),l=I,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:m,addToRenderList:f,dispose:y}}function Fp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(_,T,L,O,H){let J=!1;const z=c(O,L,T);r!==z&&(r=z,A(r.object)),J=p(_,O,L,H),J&&g(_,O,L,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,I(_,T,L,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function A(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function c(_,T,L){const O=L.wireframe===!0;let H=n[_.id];H===void 0&&(H={},n[_.id]=H);let J=H[T.id];J===void 0&&(J={},H[T.id]=J);let z=J[O];return z===void 0&&(z=d(l()),J[O]=z),z}function d(_){const T=[],L=[],O=[];for(let H=0;H<e;H++)T[H]=0,L[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:O,object:_,attributes:{},index:null}}function p(_,T,L,O){const H=r.attributes,J=T.attributes;let z=0;const K=L.getAttributes();for(const P in K)if(K[P].location>=0){const rt=H[P];let ht=J[P];if(ht===void 0&&(P==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),P==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor)),rt===void 0||rt.attribute!==ht||ht&&rt.data!==ht.data)return!0;z++}return r.attributesNum!==z||r.index!==O}function g(_,T,L,O){const H={},J=T.attributes;let z=0;const K=L.getAttributes();for(const P in K)if(K[P].location>=0){let rt=J[P];rt===void 0&&(P==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),P==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor));const ht={};ht.attribute=rt,rt&&rt.data&&(ht.data=rt.data),H[P]=ht,z++}r.attributes=H,r.attributesNum=z,r.index=O}function m(){const _=r.newAttributes;for(let T=0,L=_.length;T<L;T++)_[T]=0}function f(_){u(_,0)}function u(_,T){const L=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;L[_]=1,O[_]===0&&(i.enableVertexAttribArray(_),O[_]=1),H[_]!==T&&(i.vertexAttribDivisor(_,T),H[_]=T)}function y(){const _=r.newAttributes,T=r.enabledAttributes;for(let L=0,O=T.length;L<O;L++)T[L]!==_[L]&&(i.disableVertexAttribArray(L),T[L]=0)}function x(_,T,L,O,H,J,z){z===!0?i.vertexAttribIPointer(_,T,L,H,J):i.vertexAttribPointer(_,T,L,O,H,J)}function I(_,T,L,O){m();const H=O.attributes,J=L.getAttributes(),z=T.defaultAttributeValues;for(const K in J){const P=J[K];if(P.location>=0){let Z=H[K];if(Z===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),Z!==void 0){const rt=Z.normalized,ht=Z.itemSize,Tt=t.get(Z);if(Tt===void 0)continue;const Gt=Tt.buffer,Yt=Tt.type,Lt=Tt.bytesPerElement,q=Yt===i.INT||Yt===i.UNSIGNED_INT||Z.gpuType===Jo;if(Z.isInterleavedBufferAttribute){const Y=Z.data,At=Y.stride,xt=Z.offset;if(Y.isInstancedInterleavedBuffer){for(let ft=0;ft<P.locationSize;ft++)u(P.location+ft,Y.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ft=0;ft<P.locationSize;ft++)f(P.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let ft=0;ft<P.locationSize;ft++)x(P.location+ft,ht/P.locationSize,Yt,rt,At*Lt,(xt+ht/P.locationSize*ft)*Lt,q)}else{if(Z.isInstancedBufferAttribute){for(let Y=0;Y<P.locationSize;Y++)u(P.location+Y,Z.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Y=0;Y<P.locationSize;Y++)f(P.location+Y);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let Y=0;Y<P.locationSize;Y++)x(P.location+Y,ht/P.locationSize,Yt,rt,ht*Lt,ht/P.locationSize*Y*Lt,q)}}else if(z!==void 0){const rt=z[K];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(P.location,rt);break;case 3:i.vertexAttrib3fv(P.location,rt);break;case 4:i.vertexAttrib4fv(P.location,rt);break;default:i.vertexAttrib1fv(P.location,rt)}}}}y()}function b(){R();for(const _ in n){const T=n[_];for(const L in T){const O=T[L];for(const H in O)h(O[H].object),delete O[H];delete T[L]}delete n[_]}}function S(_){if(n[_.id]===void 0)return;const T=n[_.id];for(const L in T){const O=T[L];for(const H in O)h(O[H].object),delete O[H];delete T[L]}delete n[_.id]}function w(_){for(const T in n){const L=n[T];if(L[_.id]===void 0)continue;const O=L[_.id];for(const H in O)h(O[H].object),delete O[H];delete L[_.id]}}function R(){B(),a=!0,r!==s&&(r=s,A(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:m,enableAttribute:f,disableUnusedAttributes:y}}function Up(i,t,e){let n;function s(A){n=A}function r(A,h){i.drawArrays(n,A,h),e.update(h,n,1)}function a(A,h,c){c!==0&&(i.drawArraysInstanced(n,A,h,c),e.update(h,n,c))}function o(A,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,A,0,h,0,c);let p=0;for(let g=0;g<c;g++)p+=h[g];e.update(p,n,1)}function l(A,h,c,d){if(c===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<A.length;g++)a(A[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,A,0,h,0,d,0,c);let g=0;for(let m=0;m<c;m++)g+=h[m]*d[m];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Lp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Be&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==We&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==_n&&!R)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let A=e.precision!==void 0?e.precision:"highp";const h=l(A);h!==A&&(console.warn("THREE.WebGLRenderer:",A,"not supported, using",h,"instead."),A=h);const c=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),I=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:A,logarithmicDepthBuffer:c,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:I,vertexTextures:b,maxSamples:S}}function Pp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Pn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const p=c.length!==0||d||n!==0||s;return s=d,n=c.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){e=h(c,d,0)},this.setState=function(c,d,p){const g=c.clippingPlanes,m=c.clipIntersection,f=c.clipShadows,u=i.get(c);if(!s||g===null||g.length===0||r&&!f)r?h(null):A();else{const y=r?0:n,x=y*4;let I=u.clippingState||null;l.value=I,I=h(g,d,x,p);for(let b=0;b!==x;++b)I[b]=e[b];u.clippingState=I,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function A(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(c,d,p,g){const m=c!==null?c.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const u=p+m*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<u)&&(f=new Float32Array(u));for(let x=0,I=p;x!==m;++x,I+=4)a.copy(c[x]).applyMatrix4(y,o),a.normal.toArray(f,I),f[I+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,f}}function kp(i){let t=new WeakMap;function e(a,o){return o===$a?a.mapping=es:o===to&&(a.mapping=ns),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===$a||o===to)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const A=new fc(l.height);return A.fromEquirectangularTexture(i,a),t.set(a,A),a.addEventListener("dispose",s),e(A.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ji=4,tl=[.125,.215,.35,.446,.526,.582],mi=20,Ba=new Ic,el=new zt;let va=null,Sa=0,ba=0,wa=!1;const fi=(1+Math.sqrt(5))/2,zi=1/fi,nl=[new Q(-fi,zi,0),new Q(fi,zi,0),new Q(-zi,0,fi),new Q(zi,0,fi),new Q(0,fi,-zi),new Q(0,fi,zi),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],Gp=new Q;class No{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Gp}=r;va=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(va,Sa,ba),this._renderer.xr.enabled=wa,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),va=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ts,format:Be,colorSpace:is,depthBuffer:!1},s=il(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zp(r)),this._blurMaterial=Op(r,t,e)}return s}_compileMaterial(t){const e=new He(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,s,r){const l=new Oe(90,1,e,n),A=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,p=c.toneMapping;c.getClearColor(el),c.toneMapping=ni,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(s),c.clearDepth(),c.setRenderTarget(null));const m=new tA({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),f=new He(new as,m);let u=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,u=!0):(m.color.copy(el),u=!0);for(let x=0;x<6;x++){const I=x%3;I===0?(l.up.set(0,A[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):I===1?(l.up.set(0,0,A[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,A[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const b=this._cubeSize;ar(s,I*b,x>2?b:0,b,b),c.setRenderTarget(s),u&&c.render(f,l),c.render(t,l)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=p,c.autoClear=d,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===es||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new He(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ar(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ba)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nl[(s-r-1)%nl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,A=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,c=new He(this._lodPlanes[s],A),d=A.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*mi-1),m=r/g,f=isFinite(r)?1+Math.floor(h*m):mi;f>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${mi}`);const u=[];let y=0;for(let w=0;w<mi;++w){const R=w/m,B=Math.exp(-R*R/2);u.push(B),w===0?y+=B:w<f&&(y+=2*B)}for(let w=0;w<u.length;w++)u[w]=u[w]/y;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const I=this._sizeLods[s],b=3*I*(s>x-Ji?s-x+Ji:0),S=4*(this._cubeSize-I);ar(e,b,S,3*I,2*I),l.setRenderTarget(e),l.render(c,Ba)}}function zp(i){const t=[],e=[],n=[];let s=i;const r=i-Ji+1+tl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ji?l=tl[a-i+Ji-1]:a===0&&(l=0),n.push(l);const A=1/(o-2),h=-A,c=1+A,d=[h,h,c,h,c,c,h,h,c,c,h,c],p=6,g=6,m=3,f=2,u=1,y=new Float32Array(m*g*p),x=new Float32Array(f*g*p),I=new Float32Array(u*g*p);for(let S=0;S<p;S++){const w=S%3*2/3-1,R=S>2?0:-1,B=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];y.set(B,m*g*S),x.set(d,f*g*S);const _=[S,S,S,S,S,S];I.set(_,u*g*S)}const b=new on;b.setAttribute("position",new $e(y,m)),b.setAttribute("uv",new $e(x,f)),b.setAttribute("faceIndex",new $e(I,u)),t.push(b),s>Ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function il(i,t,e){const n=new pn(i,t,e);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Op(i,t,e){const n=new Float32Array(mi),s=new Q(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:iA(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function sl(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iA(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function rl(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iA(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function iA(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,A=l===$a||l===to,h=l===es||l===ns;if(A||h){let c=t.get(o);const d=c!==void 0?c.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new No(i)),c=A?e.fromEquirectangular(o,c):e.fromCubemap(o,c),c.texture.pmremVersion=o.pmremVersion,t.set(o,c),c.texture;if(c!==void 0)return c.texture;{const p=o.image;return A&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new No(i)),c=A?e.fromEquirectangular(o):e.fromCubemap(o),c.texture.pmremVersion=o.pmremVersion,t.set(o,c),o.addEventListener("dispose",r),c.texture):null}}}return o}function s(o){let l=0;const A=6;for(let h=0;h<A;h++)o[h]!==void 0&&l++;return l===A}function r(o){const l=o.target;l.removeEventListener("dispose",r);const A=t.get(l);A!==void 0&&(t.delete(l),A.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Yp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vp(i,t,e,n){const s={},r=new WeakMap;function a(c){const d=c.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(c,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(c){const d=c.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function A(c){const d=[],p=c.index,g=c.attributes.position;let m=0;if(p!==null){const y=p.array;m=p.version;for(let x=0,I=y.length;x<I;x+=3){const b=y[x+0],S=y[x+1],w=y[x+2];d.push(b,S,S,w,w,b)}}else if(g!==void 0){const y=g.array;m=g.version;for(let x=0,I=y.length/3-1;x<I;x+=3){const b=x+0,S=x+1,w=x+2;d.push(b,S,S,w,w,b)}}else return;const f=new(sc(d)?lc:Ac)(d,1);f.version=m;const u=r.get(c);u&&t.remove(u),r.set(c,f)}function h(c){const d=r.get(c);if(d){const p=c.index;p!==null&&d.version<p.version&&A(c)}else A(c);return r.get(c)}return{get:o,update:l,getWireframeAttribute:h}}function qp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function A(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let f=0;for(let u=0;u<g;u++)f+=p[u];e.update(f,n,1)}function c(d,p,g,m){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<d.length;u++)A(d[u]/a,p[u],m[u]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,m,0,g);let u=0;for(let y=0;y<g;y++)u+=p[y]*m[y];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=A,this.renderMultiDraw=h,this.renderMultiDrawInstances=c}function Wp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jp(i,t,e){const n=new WeakMap,s=new Jt;function r(a,o,l){const A=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,c=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==c){let B=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",B)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let I=o.attributes.position.count*x,b=1;I>t.maxTextureSize&&(b=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const S=new Float32Array(I*b*4*c),w=new vn(S,I,b,c);w.type=_n,w.needsUpdate=!0;const R=x*4;for(let _=0;_<c;_++){const T=f[_],L=u[_],O=y[_],H=I*b*4*_;for(let J=0;J<T.count;J++){const z=J*R;p===!0&&(s.fromBufferAttribute(T,J),S[H+z+0]=s.x,S[H+z+1]=s.y,S[H+z+2]=s.z,S[H+z+3]=0),g===!0&&(s.fromBufferAttribute(L,J),S[H+z+4]=s.x,S[H+z+5]=s.y,S[H+z+6]=s.z,S[H+z+7]=0),m===!0&&(s.fromBufferAttribute(O,J),S[H+z+8]=s.x,S[H+z+9]=s.y,S[H+z+10]=s.z,S[H+z+11]=O.itemSize===4?s.w:1)}}d={count:c,texture:w,size:new wt(I,b)},n.set(o,d),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let m=0;m<A.length;m++)p+=A[m];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",A)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Xp(i,t,e,n){let s=new WeakMap;function r(l){const A=n.render.frame,h=l.geometry,c=t.get(l,h);if(s.get(c)!==A&&(t.update(c),s.set(c,A)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==A&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,A))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==A&&(d.update(),s.set(d,A))}return c}function a(){s=new WeakMap}function o(l){const A=l.target;A.removeEventListener("dispose",o),e.remove(A.instanceMatrix),A.instanceColor!==null&&e.remove(A.instanceColor)}return{update:r,dispose:a}}const yc=new De,al=new mc(1,1),_c=new vn,Bc=new ac,vc=new dc,ol=[],Al=[],ll=new Float32Array(16),cl=new Float32Array(9),hl=new Float32Array(4);function os(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ol[s];if(r===void 0&&(r=new Float32Array(s),ol[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zr(i,t){let e=Al[t];e===void 0&&(e=new Int32Array(t),Al[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function $p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ie(e,n))return;hl.set(n),i.uniformMatrix2fv(this.addr,!1,hl),Ce(e,n)}}function eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ie(e,n))return;cl.set(n),i.uniformMatrix3fv(this.addr,!1,cl),Ce(e,n)}}function ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ie(e,n))return;ll.set(n),i.uniformMatrix4fv(this.addr,!1,ll),Ce(e,n)}}function ig(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function og(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(al.compareFunction=ic,r=al):r=yc,e.setTexture2D(t||r,s)}function ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bc,s)}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vc,s)}function fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_c,s)}function pg(i){switch(i){case 5126:return Kp;case 35664:return jp;case 35665:return Zp;case 35666:return $p;case 35674:return tg;case 35675:return eg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return ag;case 5125:return og;case 36294:return Ag;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function gg(i,t){i.uniform1fv(this.addr,t)}function mg(i,t){const e=os(t,this.size,2);i.uniform2fv(this.addr,e)}function Eg(i,t){const e=os(t,this.size,3);i.uniform3fv(this.addr,e)}function Ig(i,t){const e=os(t,this.size,4);i.uniform4fv(this.addr,e)}function Cg(i,t){const e=os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xg(i,t){const e=os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yg(i,t){const e=os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _g(i,t){i.uniform1iv(this.addr,t)}function Bg(i,t){i.uniform2iv(this.addr,t)}function vg(i,t){i.uniform3iv(this.addr,t)}function Sg(i,t){i.uniform4iv(this.addr,t)}function bg(i,t){i.uniform1uiv(this.addr,t)}function wg(i,t){i.uniform2uiv(this.addr,t)}function Mg(i,t){i.uniform3uiv(this.addr,t)}function Qg(i,t){i.uniform4uiv(this.addr,t)}function Tg(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||yc,r[a])}function Dg(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Bc,r[a])}function Rg(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||vc,r[a])}function Ng(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||_c,r[a])}function Fg(i){switch(i){case 5126:return gg;case 35664:return mg;case 35665:return Eg;case 35666:return Ig;case 35674:return Cg;case 35675:return xg;case 35676:return yg;case 5124:case 35670:return _g;case 35667:case 35671:return Bg;case 35668:case 35672:return vg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return wg;case 36295:return Mg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Ng}}class Ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pg(e.type)}}class Lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fg(e.type)}}class Pg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function ul(i,t){i.seq.push(t),i.map[t.id]=t}function kg(i,t,e){const n=i.name,s=n.length;for(Ma.lastIndex=0;;){const r=Ma.exec(n),a=Ma.lastIndex;let o=r[1];const l=r[2]==="]",A=r[3];if(l&&(o=o|0),A===void 0||A==="["&&a+2===s){ul(e,A===void 0?new Ug(o,i,t):new Lg(o,i,t));break}else{let c=e.map[o];c===void 0&&(c=new Pg(o),ul(e,c)),e=c}}}class Ir{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);kg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function dl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gg=37297;let zg=0;function Og(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const fl=new Ut;function Hg(i){Wt._getMatrix(fl,Wt.workingColorSpace,i);const t=`mat3( ${fl.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case Br:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Og(i.getShaderSource(t),o)}else return r}function Yg(i,t){const e=Hg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Vg(i,t){let e;switch(t){case Hh:e="Linear";break;case Yh:e="Reinhard";break;case Vh:e="Cineon";break;case qh:e="ACESFilmic";break;case Jh:e="AgX";break;case Xh:e="Neutral";break;case Wh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const or=new Q;function qg(){Wt.getLuminanceCoefficients(or);const i=or.x.toFixed(4),t=or.y.toFixed(4),e=or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function Jg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ps(i){return i!==""}function gl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ml(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(i){return i.replace(Kg,Zg)}const jg=new Map;function Zg(i,t){let e=kt[t];if(e===void 0){const n=jg.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fo(e)}const $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(i){return i.replace($g,tm)}function tm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Il(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function em(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===yh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function nm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case Fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function im(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function sm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ql:t="ENVMAP_BLENDING_MULTIPLY";break;case zh:t="ENVMAP_BLENDING_MIX";break;case Oh:t="ENVMAP_BLENDING_ADD";break}return t}function rm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function am(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=em(e),A=nm(e),h=im(e),c=sm(e),d=rm(e),p=Wg(e),g=Jg(r),m=s.createProgram();let f,u,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),f.length>0&&(f+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),u.length>0&&(u+=`
`)):(f=[Il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),u=[Il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+A:"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?kt.tonemapping_pars_fragment:"",e.toneMapping!==ni?Vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Yg("linearToOutputTexel",e.outputColorSpace),qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),a=Fo(a),a=gl(a,e),a=ml(a,e),o=Fo(o),o=gl(o,e),o=ml(o,e),a=El(a),o=El(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,u=["#define varying in",e.glslVersion===vr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=y+f+a,I=y+u+o,b=dl(s,s.VERTEX_SHADER,x),S=dl(s,s.FRAGMENT_SHADER,I);s.attachShader(m,b),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function w(T){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(m)||"",O=s.getShaderInfoLog(b)||"",H=s.getShaderInfoLog(S)||"",J=L.trim(),z=O.trim(),K=H.trim();let P=!0,Z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(P=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,b,S);else{const rt=pl(s,b,"vertex"),ht=pl(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+J+`
`+rt+`
`+ht)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(z===""||K==="")&&(Z=!1);Z&&(T.diagnostics={runnable:P,programLog:J,vertexShader:{log:z,prefix:f},fragmentShader:{log:K,prefix:u}})}s.deleteShader(b),s.deleteShader(S),R=new Ir(s,m),B=Xg(s,m)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let B;this.getAttributes=function(){return B===void 0&&w(this),B};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(m,Gg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=S,this}let om=0;class Am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lm(t),e.set(t,n)),n}}class lm{constructor(t){this.id=om++,this.code=t,this.usedTimes=0}}function cm(i,t,e,n,s,r,a){const o=new $o,l=new Am,A=new Set,h=[],c=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(B){return A.add(B),B===0?"uv":`uv${B}`}function f(B,_,T,L,O){const H=L.fog,J=O.geometry,z=B.isMeshStandardMaterial?L.environment:null,K=(B.isMeshStandardMaterial?e:t).get(B.envMap||z),P=K&&K.mapping===Fr?K.image.height:null,Z=g[B.type];B.precision!==null&&(p=s.getMaxPrecision(B.precision),p!==B.precision&&console.warn("THREE.WebGLProgram.getParameters:",B.precision,"not supported, using",p,"instead."));const rt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ht=rt!==void 0?rt.length:0;let Tt=0;J.morphAttributes.position!==void 0&&(Tt=1),J.morphAttributes.normal!==void 0&&(Tt=2),J.morphAttributes.color!==void 0&&(Tt=3);let Gt,Yt,Lt,q;if(Z){const jt=In[Z];Gt=jt.vertexShader,Yt=jt.fragmentShader}else Gt=B.vertexShader,Yt=B.fragmentShader,l.update(B),Lt=l.getVertexShaderID(B),q=l.getFragmentShaderID(B);const Y=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),xt=O.isInstancedMesh===!0,ft=O.isBatchedMesh===!0,Nt=!!B.map,re=!!B.matcap,M=!!K,Zt=!!B.aoMap,Mt=!!B.lightMap,vt=!!B.bumpMap,dt=!!B.normalMap,Kt=!!B.displacementMap,ut=!!B.emissiveMap,yt=!!B.metalnessMap,fe=!!B.roughnessMap,le=B.anisotropy>0,v=B.clearcoat>0,E=B.dispersion>0,U=B.iridescence>0,W=B.sheen>0,j=B.transmission>0,V=le&&!!B.anisotropyMap,It=v&&!!B.clearcoatMap,it=v&&!!B.clearcoatNormalMap,Ct=v&&!!B.clearcoatRoughnessMap,_t=U&&!!B.iridescenceMap,et=U&&!!B.iridescenceThicknessMap,ct=W&&!!B.sheenColorMap,Dt=W&&!!B.sheenRoughnessMap,Bt=!!B.specularMap,ot=!!B.specularColorMap,Pt=!!B.specularIntensityMap,D=j&&!!B.transmissionMap,nt=j&&!!B.thicknessMap,st=!!B.gradientMap,gt=!!B.alphaMap,$=B.alphaTest>0,X=!!B.alphaHash,Et=!!B.extensions;let Ft=ni;B.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ft=i.toneMapping);const se={shaderID:Z,shaderType:B.type,shaderName:B.name,vertexShader:Gt,fragmentShader:Yt,defines:B.defines,customVertexShaderID:Lt,customFragmentShaderID:q,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:p,batching:ft,batchingColor:ft&&O._colorsTexture!==null,instancing:xt,instancingColor:xt&&O.instanceColor!==null,instancingMorph:xt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:is,alphaToCoverage:!!B.alphaToCoverage,map:Nt,matcap:re,envMap:M,envMapMode:M&&K.mapping,envMapCubeUVHeight:P,aoMap:Zt,lightMap:Mt,bumpMap:vt,normalMap:dt,displacementMap:d&&Kt,emissiveMap:ut,normalMapObjectSpace:dt&&B.normalMapType===tu,normalMapTangentSpace:dt&&B.normalMapType===nc,metalnessMap:yt,roughnessMap:fe,anisotropy:le,anisotropyMap:V,clearcoat:v,clearcoatMap:It,clearcoatNormalMap:it,clearcoatRoughnessMap:Ct,dispersion:E,iridescence:U,iridescenceMap:_t,iridescenceThicknessMap:et,sheen:W,sheenColorMap:ct,sheenRoughnessMap:Dt,specularMap:Bt,specularColorMap:ot,specularIntensityMap:Pt,transmission:j,transmissionMap:D,thicknessMap:nt,gradientMap:st,opaque:B.transparent===!1&&B.blending===ji&&B.alphaToCoverage===!1,alphaMap:gt,alphaTest:$,alphaHash:X,combine:B.combine,mapUv:Nt&&m(B.map.channel),aoMapUv:Zt&&m(B.aoMap.channel),lightMapUv:Mt&&m(B.lightMap.channel),bumpMapUv:vt&&m(B.bumpMap.channel),normalMapUv:dt&&m(B.normalMap.channel),displacementMapUv:Kt&&m(B.displacementMap.channel),emissiveMapUv:ut&&m(B.emissiveMap.channel),metalnessMapUv:yt&&m(B.metalnessMap.channel),roughnessMapUv:fe&&m(B.roughnessMap.channel),anisotropyMapUv:V&&m(B.anisotropyMap.channel),clearcoatMapUv:It&&m(B.clearcoatMap.channel),clearcoatNormalMapUv:it&&m(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&m(B.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&m(B.iridescenceMap.channel),iridescenceThicknessMapUv:et&&m(B.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&m(B.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&m(B.sheenRoughnessMap.channel),specularMapUv:Bt&&m(B.specularMap.channel),specularColorMapUv:ot&&m(B.specularColorMap.channel),specularIntensityMapUv:Pt&&m(B.specularIntensityMap.channel),transmissionMapUv:D&&m(B.transmissionMap.channel),thicknessMapUv:nt&&m(B.thicknessMap.channel),alphaMapUv:gt&&m(B.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(dt||le),vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!J.attributes.uv&&(Nt||gt),fog:!!H,useFog:B.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:B.flatShading===!0&&B.wireframe===!1,sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:At,skinning:O.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Tt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:B.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Nt&&B.map.isVideoTexture===!0&&Wt.getTransfer(B.map.colorSpace)===te,decodeVideoTextureEmissive:ut&&B.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(B.emissiveMap.colorSpace)===te,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===Cn,flipSided:B.side===Ye,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionClipCullDistance:Et&&B.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&B.extensions.multiDraw===!0||ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:B.customProgramCacheKey()};return se.vertexUv1s=A.has(1),se.vertexUv2s=A.has(2),se.vertexUv3s=A.has(3),A.clear(),se}function u(B){const _=[];if(B.shaderID?_.push(B.shaderID):(_.push(B.customVertexShaderID),_.push(B.customFragmentShaderID)),B.defines!==void 0)for(const T in B.defines)_.push(T),_.push(B.defines[T]);return B.isRawShaderMaterial===!1&&(y(_,B),x(_,B),_.push(i.outputColorSpace)),_.push(B.customProgramCacheKey),_.join()}function y(B,_){B.push(_.precision),B.push(_.outputColorSpace),B.push(_.envMapMode),B.push(_.envMapCubeUVHeight),B.push(_.mapUv),B.push(_.alphaMapUv),B.push(_.lightMapUv),B.push(_.aoMapUv),B.push(_.bumpMapUv),B.push(_.normalMapUv),B.push(_.displacementMapUv),B.push(_.emissiveMapUv),B.push(_.metalnessMapUv),B.push(_.roughnessMapUv),B.push(_.anisotropyMapUv),B.push(_.clearcoatMapUv),B.push(_.clearcoatNormalMapUv),B.push(_.clearcoatRoughnessMapUv),B.push(_.iridescenceMapUv),B.push(_.iridescenceThicknessMapUv),B.push(_.sheenColorMapUv),B.push(_.sheenRoughnessMapUv),B.push(_.specularMapUv),B.push(_.specularColorMapUv),B.push(_.specularIntensityMapUv),B.push(_.transmissionMapUv),B.push(_.thicknessMapUv),B.push(_.combine),B.push(_.fogExp2),B.push(_.sizeAttenuation),B.push(_.morphTargetsCount),B.push(_.morphAttributeCount),B.push(_.numDirLights),B.push(_.numPointLights),B.push(_.numSpotLights),B.push(_.numSpotLightMaps),B.push(_.numHemiLights),B.push(_.numRectAreaLights),B.push(_.numDirLightShadows),B.push(_.numPointLightShadows),B.push(_.numSpotLightShadows),B.push(_.numSpotLightShadowsWithMaps),B.push(_.numLightProbes),B.push(_.shadowMapType),B.push(_.toneMapping),B.push(_.numClippingPlanes),B.push(_.numClipIntersection),B.push(_.depthPacking)}function x(B,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),B.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),B.push(o.mask)}function I(B){const _=g[B.type];let T;if(_){const L=In[_];T=Qu.clone(L.uniforms)}else T=B.uniforms;return T}function b(B,_){let T;for(let L=0,O=h.length;L<O;L++){const H=h[L];if(H.cacheKey===_){T=H,++T.usedTimes;break}}return T===void 0&&(T=new am(i,_,B,r),h.push(T)),T}function S(B){if(--B.usedTimes===0){const _=h.indexOf(B);h[_]=h[h.length-1],h.pop(),B.destroy()}}function w(B){l.remove(B)}function R(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:I,acquireProgram:b,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:R}}function hm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function um(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(c,d,p,g,m,f){let u=i[t];return u===void 0?(u={id:c.id,object:c,geometry:d,material:p,groupOrder:g,renderOrder:c.renderOrder,z:m,group:f},i[t]=u):(u.id=c.id,u.object=c,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=c.renderOrder,u.z=m,u.group=f),t++,u}function o(c,d,p,g,m,f){const u=a(c,d,p,g,m,f);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(c,d,p,g,m,f){const u=a(c,d,p,g,m,f);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function A(c,d){e.length>1&&e.sort(c||um),n.length>1&&n.sort(d||Cl),s.length>1&&s.sort(d||Cl)}function h(){for(let c=t,d=i.length;c<d;c++){const p=i[c];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:A}}function dm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new xl,i.set(n,[a])):s>=r.length?(a=new xl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function fm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Q,color:new zt};break;case"SpotLight":e={position:new Q,direction:new Q,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[t.id]=e,e}}}function pm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gm=0;function mm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Em(i){const t=new fm,e=pm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let A=0;A<9;A++)n.probe.push(new Q);const s=new Q,r=new Xt,a=new Xt;function o(A){let h=0,c=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let p=0,g=0,m=0,f=0,u=0,y=0,x=0,I=0,b=0,S=0,w=0;A.sort(mm);for(let B=0,_=A.length;B<_;B++){const T=A[B],L=T.color,O=T.intensity,H=T.distance,J=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=L.r*O,c+=L.g*O,d+=L.b*O;else if(T.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(T.sh.coefficients[z],O);w++}else if(T.isDirectionalLight){const z=t.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const K=T.shadow,P=e.get(T);P.shadowIntensity=K.intensity,P.shadowBias=K.bias,P.shadowNormalBias=K.normalBias,P.shadowRadius=K.radius,P.shadowMapSize=K.mapSize,n.directionalShadow[p]=P,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=T.shadow.matrix,y++}n.directional[p]=z,p++}else if(T.isSpotLight){const z=t.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy(L).multiplyScalar(O),z.distance=H,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,n.spot[m]=z;const K=T.shadow;if(T.map&&(n.spotLightMap[b]=T.map,b++,K.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[m]=K.matrix,T.castShadow){const P=e.get(T);P.shadowIntensity=K.intensity,P.shadowBias=K.bias,P.shadowNormalBias=K.normalBias,P.shadowRadius=K.radius,P.shadowMapSize=K.mapSize,n.spotShadow[m]=P,n.spotShadowMap[m]=J,I++}m++}else if(T.isRectAreaLight){const z=t.get(T);z.color.copy(L).multiplyScalar(O),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),n.rectArea[f]=z,f++}else if(T.isPointLight){const z=t.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){const K=T.shadow,P=e.get(T);P.shadowIntensity=K.intensity,P.shadowBias=K.bias,P.shadowNormalBias=K.normalBias,P.shadowRadius=K.radius,P.shadowMapSize=K.mapSize,P.shadowCameraNear=K.camera.near,P.shadowCameraFar=K.camera.far,n.pointShadow[g]=P,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=T.shadow.matrix,x++}n.point[g]=z,g++}else if(T.isHemisphereLight){const z=t.get(T);z.skyColor.copy(T.color).multiplyScalar(O),z.groundColor.copy(T.groundColor).multiplyScalar(O),n.hemi[u]=z,u++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=c,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==m||R.rectAreaLength!==f||R.hemiLength!==u||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==I||R.numSpotMaps!==b||R.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=m,n.rectArea.length=f,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=I,n.spotShadowMap.length=I,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=I+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,R.directionalLength=p,R.pointLength=g,R.spotLength=m,R.rectAreaLength=f,R.hemiLength=u,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=I,R.numSpotMaps=b,R.numLightProbes=w,n.version=gm++)}function l(A,h){let c=0,d=0,p=0,g=0,m=0;const f=h.matrixWorldInverse;for(let u=0,y=A.length;u<y;u++){const x=A[u];if(x.isDirectionalLight){const I=n.directional[c];I.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),c++}else if(x.isSpotLight){const I=n.spot[p];I.position.setFromMatrixPosition(x.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),p++}else if(x.isRectAreaLight){const I=n.rectArea[g];I.position.setFromMatrixPosition(x.matrixWorld),I.position.applyMatrix4(f),a.identity(),r.copy(x.matrixWorld),r.premultiply(f),a.extractRotation(r),I.halfWidth.set(x.width*.5,0,0),I.halfHeight.set(0,x.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const I=n.point[d];I.position.setFromMatrixPosition(x.matrixWorld),I.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){const I=n.hemi[m];I.direction.setFromMatrixPosition(x.matrixWorld),I.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function yl(i){const t=new Em(i),e=[],n=[];function s(h){A.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const A={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:A,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Im(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new yl(i),t.set(s,[o])):r>=a.length?(o=new yl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Cm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ym(i,t,e){let n=new pc;const s=new wt,r=new wt,a=new Jt,o=new zu({depthPacking:$h}),l=new Ou,A={},h=e.maxTextureSize,c={[si]:Ye,[Ye]:si,[Cn]:Cn},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Cm,fragmentShader:xm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new He(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let u=this.type;this.render=function(S,w,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;const B=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Gn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const O=u!==Ln&&this.type===Ln,H=u===Ln&&this.type!==Ln;for(let J=0,z=S.length;J<z;J++){const K=S[J],P=K.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);const Z=P.getFrameExtents();if(s.multiply(Z),r.copy(P.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,P.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,P.mapSize.y=r.y)),P.map===null||O===!0||H===!0){const ht=this.type!==Ln?{minFilter:be,magFilter:be}:{};P.map!==null&&P.map.dispose(),P.map=new pn(s.x,s.y,ht),P.map.texture.name=K.name+".shadowMap",P.camera.updateProjectionMatrix()}i.setRenderTarget(P.map),i.clear();const rt=P.getViewportCount();for(let ht=0;ht<rt;ht++){const Tt=P.getViewport(ht);a.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),L.viewport(a),P.updateMatrices(K,ht),n=P.getFrustum(),I(w,R,P.camera,K,this.type)}P.isPointLightShadow!==!0&&this.type===Ln&&y(P,R),P.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(B,_,T)};function y(S,w){const R=t.update(m);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new pn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,R,d,m,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,R,p,m,null)}function x(S,w,R,B){let _=null;const T=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)_=T;else if(_=R.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const L=_.uuid,O=w.uuid;let H=A[L];H===void 0&&(H={},A[L]=H);let J=H[O];J===void 0&&(J=_.clone(),H[O]=J,w.addEventListener("dispose",b)),_=J}if(_.visible=w.visible,_.wireframe=w.wireframe,B===Ln?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:c[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const L=i.properties.get(_);L.light=R}return _}function I(S,w,R,B,_){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===Ln)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const O=t.update(S),H=S.material;if(Array.isArray(H)){const J=O.groups;for(let z=0,K=J.length;z<K;z++){const P=J[z],Z=H[P.materialIndex];if(Z&&Z.visible){const rt=x(S,Z,B,_);S.onBeforeShadow(i,S,w,R,O,rt,P),i.renderBufferDirect(R,null,O,rt,S,P),S.onAfterShadow(i,S,w,R,O,rt,P)}}}else if(H.visible){const J=x(S,H,B,_);S.onBeforeShadow(i,S,w,R,O,J,null),i.renderBufferDirect(R,null,O,J,S,null),S.onAfterShadow(i,S,w,R,O,J,null)}}const L=S.children;for(let O=0,H=L.length;O<H;O++)I(L[O],w,R,B,_)}function b(S){S.target.removeEventListener("dispose",b);for(const R in A){const B=A[R],_=S.target.uuid;_ in B&&(B[_].dispose(),delete B[_])}}}const _m={[qa]:Wa,[Ja]:ja,[Xa]:Za,[ts]:Ka,[Wa]:qa,[ja]:Ja,[Za]:Xa,[Ka]:ts};function Bm(i,t){function e(){let D=!1;const nt=new Jt;let st=null;const gt=new Jt(0,0,0,0);return{setMask:function($){st!==$&&!D&&(i.colorMask($,$,$,$),st=$)},setLocked:function($){D=$},setClear:function($,X,Et,Ft,se){se===!0&&($*=Ft,X*=Ft,Et*=Ft),nt.set($,X,Et,Ft),gt.equals(nt)===!1&&(i.clearColor($,X,Et,Ft),gt.copy(nt))},reset:function(){D=!1,st=null,gt.set(-1,0,0,0)}}}function n(){let D=!1,nt=!1,st=null,gt=null,$=null;return{setReversed:function(X){if(nt!==X){const Et=t.get("EXT_clip_control");X?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),nt=X;const Ft=$;$=null,this.setClear(Ft)}},getReversed:function(){return nt},setTest:function(X){X?Y(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(X){st!==X&&!D&&(i.depthMask(X),st=X)},setFunc:function(X){if(nt&&(X=_m[X]),gt!==X){switch(X){case qa:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case Ka:i.depthFunc(i.GEQUAL);break;case ja:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=X}},setLocked:function(X){D=X},setClear:function(X){$!==X&&(nt&&(X=1-X),i.clearDepth(X),$=X)},reset:function(){D=!1,st=null,gt=null,$=null,nt=!1}}}function s(){let D=!1,nt=null,st=null,gt=null,$=null,X=null,Et=null,Ft=null,se=null;return{setTest:function(jt){D||(jt?Y(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(jt){nt!==jt&&!D&&(i.stencilMask(jt),nt=jt)},setFunc:function(jt,Qn,En){(st!==jt||gt!==Qn||$!==En)&&(i.stencilFunc(jt,Qn,En),st=jt,gt=Qn,$=En)},setOp:function(jt,Qn,En){(X!==jt||Et!==Qn||Ft!==En)&&(i.stencilOp(jt,Qn,En),X=jt,Et=Qn,Ft=En)},setLocked:function(jt){D=jt},setClear:function(jt){se!==jt&&(i.clearStencil(jt),se=jt)},reset:function(){D=!1,nt=null,st=null,gt=null,$=null,X=null,Et=null,Ft=null,se=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,A=new WeakMap;let h={},c={},d=new WeakMap,p=[],g=null,m=!1,f=null,u=null,y=null,x=null,I=null,b=null,S=null,w=new zt(0,0,0),R=0,B=!1,_=null,T=null,L=null,O=null,H=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const P=i.getParameter(i.VERSION);P.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(P)[1]),z=K>=1):P.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),z=K>=2);let Z=null,rt={};const ht=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),Gt=new Jt().fromArray(ht),Yt=new Jt().fromArray(Tt);function Lt(D,nt,st,gt){const $=new Uint8Array(4),X=i.createTexture();i.bindTexture(D,X),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<st;Et++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,$):i.texImage2D(nt+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$);return X}const q={};q[i.TEXTURE_2D]=Lt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(i.DEPTH_TEST),a.setFunc(ts),vt(!1),dt(_A),Y(i.CULL_FACE),Zt(Gn);function Y(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function At(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function xt(D,nt){return c[D]!==nt?(i.bindFramebuffer(D,nt),c[D]=nt,D===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=nt),D===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function ft(D,nt){let st=p,gt=!1;if(D){st=d.get(nt),st===void 0&&(st=[],d.set(nt,st));const $=D.textures;if(st.length!==$.length||st[0]!==i.COLOR_ATTACHMENT0){for(let X=0,Et=$.length;X<Et;X++)st[X]=i.COLOR_ATTACHMENT0+X;st.length=$.length,gt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,gt=!0);gt&&i.drawBuffers(st)}function Nt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const re={[gi]:i.FUNC_ADD,[Bh]:i.FUNC_SUBTRACT,[vh]:i.FUNC_REVERSE_SUBTRACT};re[Sh]=i.MIN,re[bh]=i.MAX;const M={[wh]:i.ZERO,[Mh]:i.ONE,[Qh]:i.SRC_COLOR,[Ya]:i.SRC_ALPHA,[Uh]:i.SRC_ALPHA_SATURATE,[Nh]:i.DST_COLOR,[Dh]:i.DST_ALPHA,[Th]:i.ONE_MINUS_SRC_COLOR,[Va]:i.ONE_MINUS_SRC_ALPHA,[Fh]:i.ONE_MINUS_DST_COLOR,[Rh]:i.ONE_MINUS_DST_ALPHA,[Lh]:i.CONSTANT_COLOR,[Ph]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[Gh]:i.ONE_MINUS_CONSTANT_ALPHA};function Zt(D,nt,st,gt,$,X,Et,Ft,se,jt){if(D===Gn){m===!0&&(At(i.BLEND),m=!1);return}if(m===!1&&(Y(i.BLEND),m=!0),D!==_h){if(D!==f||jt!==B){if((u!==gi||I!==gi)&&(i.blendEquation(i.FUNC_ADD),u=gi,I=gi),jt)switch(D){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case BA:i.blendFunc(i.ONE,i.ONE);break;case vA:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case SA:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case BA:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vA:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case SA:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,x=null,b=null,S=null,w.set(0,0,0),R=0,f=D,B=jt}return}$=$||nt,X=X||st,Et=Et||gt,(nt!==u||$!==I)&&(i.blendEquationSeparate(re[nt],re[$]),u=nt,I=$),(st!==y||gt!==x||X!==b||Et!==S)&&(i.blendFuncSeparate(M[st],M[gt],M[X],M[Et]),y=st,x=gt,b=X,S=Et),(Ft.equals(w)===!1||se!==R)&&(i.blendColor(Ft.r,Ft.g,Ft.b,se),w.copy(Ft),R=se),f=D,B=!1}function Mt(D,nt){D.side===Cn?At(i.CULL_FACE):Y(i.CULL_FACE);let st=D.side===Ye;nt&&(st=!st),vt(st),D.blending===ji&&D.transparent===!1?Zt(Gn):Zt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const gt=D.stencilWrite;o.setTest(gt),gt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(D){_!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),_=D)}function dt(D){D!==Ch?(Y(i.CULL_FACE),D!==T&&(D===_A?i.cullFace(i.BACK):D===xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),T=D}function Kt(D){D!==L&&(z&&i.lineWidth(D),L=D)}function ut(D,nt,st){D?(Y(i.POLYGON_OFFSET_FILL),(O!==nt||H!==st)&&(i.polygonOffset(nt,st),O=nt,H=st)):At(i.POLYGON_OFFSET_FILL)}function yt(D){D?Y(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function fe(D){D===void 0&&(D=i.TEXTURE0+J-1),Z!==D&&(i.activeTexture(D),Z=D)}function le(D,nt,st){st===void 0&&(Z===null?st=i.TEXTURE0+J-1:st=Z);let gt=rt[st];gt===void 0&&(gt={type:void 0,texture:void 0},rt[st]=gt),(gt.type!==D||gt.texture!==nt)&&(Z!==st&&(i.activeTexture(st),Z=st),i.bindTexture(D,nt||q[D]),gt.type=D,gt.texture=nt)}function v(){const D=rt[Z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(D){Gt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Gt.copy(D))}function Dt(D){Yt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Yt.copy(D))}function Bt(D,nt){let st=A.get(nt);st===void 0&&(st=new WeakMap,A.set(nt,st));let gt=st.get(D);gt===void 0&&(gt=i.getUniformBlockIndex(nt,D.name),st.set(D,gt))}function ot(D,nt){const gt=A.get(nt).get(D);l.get(nt)!==gt&&(i.uniformBlockBinding(nt,gt,D.__bindingPointIndex),l.set(nt,gt))}function Pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,rt={},c={},d=new WeakMap,p=[],g=null,m=!1,f=null,u=null,y=null,x=null,I=null,b=null,S=null,w=new zt(0,0,0),R=0,B=!1,_=null,T=null,L=null,O=null,H=null,Gt.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Y,disable:At,bindFramebuffer:xt,drawBuffers:ft,useProgram:Nt,setBlending:Zt,setMaterial:Mt,setFlipSided:vt,setCullFace:dt,setLineWidth:Kt,setPolygonOffset:ut,setScissorTest:yt,activeTexture:fe,bindTexture:le,unbindTexture:v,compressedTexImage2D:E,compressedTexImage3D:U,texImage2D:_t,texImage3D:et,updateUBOMapping:Bt,uniformBlockBinding:ot,texStorage2D:it,texStorage3D:Ct,texSubImage2D:W,texSubImage3D:j,compressedTexSubImage2D:V,compressedTexSubImage3D:It,scissor:ct,viewport:Dt,reset:Pt}}function vm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),A=new wt,h=new WeakMap;let c;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(v,E){return p?new OffscreenCanvas(v,E):br("canvas")}function m(v,E,U){let W=1;const j=le(v);if((j.width>U||j.height>U)&&(W=U/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const V=Math.floor(W*j.width),It=Math.floor(W*j.height);c===void 0&&(c=g(V,It));const it=E?g(V,It):c;return it.width=V,it.height=It,it.getContext("2d").drawImage(v,0,0,V,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+V+"x"+It+")."),it}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),v;return v}function f(v){return v.generateMipmaps}function u(v){i.generateMipmap(v)}function y(v){return v.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?i.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(v,E,U,W,j=!1){if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let V=E;if(E===i.RED&&(U===i.FLOAT&&(V=i.R32F),U===i.HALF_FLOAT&&(V=i.R16F),U===i.UNSIGNED_BYTE&&(V=i.R8)),E===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(V=i.R8UI),U===i.UNSIGNED_SHORT&&(V=i.R16UI),U===i.UNSIGNED_INT&&(V=i.R32UI),U===i.BYTE&&(V=i.R8I),U===i.SHORT&&(V=i.R16I),U===i.INT&&(V=i.R32I)),E===i.RG&&(U===i.FLOAT&&(V=i.RG32F),U===i.HALF_FLOAT&&(V=i.RG16F),U===i.UNSIGNED_BYTE&&(V=i.RG8)),E===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(V=i.RG8UI),U===i.UNSIGNED_SHORT&&(V=i.RG16UI),U===i.UNSIGNED_INT&&(V=i.RG32UI),U===i.BYTE&&(V=i.RG8I),U===i.SHORT&&(V=i.RG16I),U===i.INT&&(V=i.RG32I)),E===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(V=i.RGB8UI),U===i.UNSIGNED_SHORT&&(V=i.RGB16UI),U===i.UNSIGNED_INT&&(V=i.RGB32UI),U===i.BYTE&&(V=i.RGB8I),U===i.SHORT&&(V=i.RGB16I),U===i.INT&&(V=i.RGB32I)),E===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),U===i.UNSIGNED_INT&&(V=i.RGBA32UI),U===i.BYTE&&(V=i.RGBA8I),U===i.SHORT&&(V=i.RGBA16I),U===i.INT&&(V=i.RGBA32I)),E===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),E===i.RGBA){const It=j?Br:Wt.getTransfer(W);U===i.FLOAT&&(V=i.RGBA32F),U===i.HALF_FLOAT&&(V=i.RGBA16F),U===i.UNSIGNED_BYTE&&(V=It===te?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function I(v,E){let U;return v?E===null||E===Ve||E===Bs?U=i.DEPTH24_STENCIL8:E===_n?U=i.DEPTH32F_STENCIL8:E===_s&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ve||E===Bs?U=i.DEPTH_COMPONENT24:E===_n?U=i.DEPTH_COMPONENT32F:E===_s&&(U=i.DEPTH_COMPONENT16),U}function b(v,E){return f(v)===!0||v.isFramebufferTexture&&v.minFilter!==be&&v.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?E.mipmaps.length:1}function S(v){const E=v.target;E.removeEventListener("dispose",S),R(E),E.isVideoTexture&&h.delete(E)}function w(v){const E=v.target;E.removeEventListener("dispose",w),_(E)}function R(v){const E=n.get(v);if(E.__webglInit===void 0)return;const U=v.source,W=d.get(U);if(W){const j=W[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&B(v),Object.keys(W).length===0&&d.delete(U)}n.remove(v)}function B(v){const E=n.get(v);i.deleteTexture(E.__webglTexture);const U=v.source,W=d.get(U);delete W[E.__cacheKey],a.memory.textures--}function _(v){const E=n.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),n.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(E.__webglFramebuffer[W]))for(let j=0;j<E.__webglFramebuffer[W].length;j++)i.deleteFramebuffer(E.__webglFramebuffer[W][j]);else i.deleteFramebuffer(E.__webglFramebuffer[W]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[W])}else{if(Array.isArray(E.__webglFramebuffer))for(let W=0;W<E.__webglFramebuffer.length;W++)i.deleteFramebuffer(E.__webglFramebuffer[W]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let W=0;W<E.__webglColorRenderbuffer.length;W++)E.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[W]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const U=v.textures;for(let W=0,j=U.length;W<j;W++){const V=n.get(U[W]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(U[W])}n.remove(v)}let T=0;function L(){T=0}function O(){const v=T;return v>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),T+=1,v}function H(v){const E=[];return E.push(v.wrapS),E.push(v.wrapT),E.push(v.wrapR||0),E.push(v.magFilter),E.push(v.minFilter),E.push(v.anisotropy),E.push(v.internalFormat),E.push(v.format),E.push(v.type),E.push(v.generateMipmaps),E.push(v.premultiplyAlpha),E.push(v.flipY),E.push(v.unpackAlignment),E.push(v.colorSpace),E.join()}function J(v,E){const U=n.get(v);if(v.isVideoTexture&&yt(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&U.__version!==v.version){const W=v.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,v,E);return}}else v.isExternalTexture&&(U.__webglTexture=v.sourceTexture?v.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+E)}function z(v,E){const U=n.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&U.__version!==v.version){q(U,v,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+E)}function K(v,E){const U=n.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&U.__version!==v.version){q(U,v,E);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+E)}function P(v,E){const U=n.get(v);if(v.version>0&&U.__version!==v.version){Y(U,v,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+E)}const Z={[eo]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},rt={[be]:i.NEAREST,[Kh]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},ht={[eu]:i.NEVER,[ou]:i.ALWAYS,[nu]:i.LESS,[ic]:i.LEQUAL,[iu]:i.EQUAL,[au]:i.GEQUAL,[su]:i.GREATER,[ru]:i.NOTEQUAL};function Tt(v,E){if(E.type===_n&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===yn||E.magFilter===$r||E.magFilter===Ps||E.magFilter===Ci||E.minFilter===yn||E.minFilter===$r||E.minFilter===Ps||E.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(v,i.TEXTURE_WRAP_S,Z[E.wrapS]),i.texParameteri(v,i.TEXTURE_WRAP_T,Z[E.wrapT]),(v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY)&&i.texParameteri(v,i.TEXTURE_WRAP_R,Z[E.wrapR]),i.texParameteri(v,i.TEXTURE_MAG_FILTER,rt[E.magFilter]),i.texParameteri(v,i.TEXTURE_MIN_FILTER,rt[E.minFilter]),E.compareFunction&&(i.texParameteri(v,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(v,i.TEXTURE_COMPARE_FUNC,ht[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===be||E.minFilter!==Ps&&E.minFilter!==Ci||E.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(v,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Gt(v,E){let U=!1;v.__webglInit===void 0&&(v.__webglInit=!0,E.addEventListener("dispose",S));const W=E.source;let j=d.get(W);j===void 0&&(j={},d.set(W,j));const V=H(E);if(V!==v.__cacheKey){j[V]===void 0&&(j[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),j[V].usedTimes++;const It=j[v.__cacheKey];It!==void 0&&(j[v.__cacheKey].usedTimes--,It.usedTimes===0&&B(E)),v.__cacheKey=V,v.__webglTexture=j[V].texture}return U}function Yt(v,E,U){return Math.floor(Math.floor(v/U)/E)}function Lt(v,E,U,W){const V=v.updateRanges;if(V.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,U,W,E.data);else{V.sort((et,ct)=>et.start-ct.start);let It=0;for(let et=1;et<V.length;et++){const ct=V[It],Dt=V[et],Bt=ct.start+ct.count,ot=Yt(Dt.start,E.width,4),Pt=Yt(ct.start,E.width,4);Dt.start<=Bt+1&&ot===Pt&&Yt(Dt.start+Dt.count-1,E.width,4)===ot?ct.count=Math.max(ct.count,Dt.start+Dt.count-ct.start):(++It,V[It]=Dt)}V.length=It+1;const it=i.getParameter(i.UNPACK_ROW_LENGTH),Ct=i.getParameter(i.UNPACK_SKIP_PIXELS),_t=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let et=0,ct=V.length;et<ct;et++){const Dt=V[et],Bt=Math.floor(Dt.start/4),ot=Math.ceil(Dt.count/4),Pt=Bt%E.width,D=Math.floor(Bt/E.width),nt=ot,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Pt,D,nt,st,U,W,E.data)}v.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,it),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function q(v,E,U){let W=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(W=i.TEXTURE_3D);const j=Gt(v,E),V=E.source;e.bindTexture(W,v.__webglTexture,i.TEXTURE0+U);const It=n.get(V);if(V.version!==It.__version||j===!0){e.activeTexture(i.TEXTURE0+U);const it=Wt.getPrimaries(Wt.workingColorSpace),Ct=E.colorSpace===ei?null:Wt.getPrimaries(E.colorSpace),_t=E.colorSpace===ei||it===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let et=m(E.image,!1,s.maxTextureSize);et=fe(E,et);const ct=r.convert(E.format,E.colorSpace),Dt=r.convert(E.type);let Bt=x(E.internalFormat,ct,Dt,E.colorSpace,E.isVideoTexture);Tt(W,E);let ot;const Pt=E.mipmaps,D=E.isVideoTexture!==!0,nt=It.__version===void 0||j===!0,st=V.dataReady,gt=b(E,et);if(E.isDepthTexture)Bt=I(E.format===Ss,E.type),nt&&(D?e.texStorage2D(i.TEXTURE_2D,1,Bt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Bt,et.width,et.height,0,ct,Dt,null));else if(E.isDataTexture)if(Pt.length>0){D&&nt&&e.texStorage2D(i.TEXTURE_2D,gt,Bt,Pt[0].width,Pt[0].height);for(let $=0,X=Pt.length;$<X;$++)ot=Pt[$],D?st&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ot.width,ot.height,ct,Dt,ot.data):e.texImage2D(i.TEXTURE_2D,$,Bt,ot.width,ot.height,0,ct,Dt,ot.data);E.generateMipmaps=!1}else D?(nt&&e.texStorage2D(i.TEXTURE_2D,gt,Bt,et.width,et.height),st&&Lt(E,et,ct,Dt)):e.texImage2D(i.TEXTURE_2D,0,Bt,et.width,et.height,0,ct,Dt,et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){D&&nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Bt,Pt[0].width,Pt[0].height,et.depth);for(let $=0,X=Pt.length;$<X;$++)if(ot=Pt[$],E.format!==Be)if(ct!==null)if(D){if(st)if(E.layerUpdates.size>0){const Et=$A(ot.width,ot.height,E.format,E.type);for(const Ft of E.layerUpdates){const se=ot.data.subarray(Ft*Et/ot.data.BYTES_PER_ELEMENT,(Ft+1)*Et/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Ft,ot.width,ot.height,1,ct,se)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ot.width,ot.height,et.depth,ct,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Bt,ot.width,ot.height,et.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ot.width,ot.height,et.depth,ct,Dt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Bt,ot.width,ot.height,et.depth,0,ct,Dt,ot.data)}else{D&&nt&&e.texStorage2D(i.TEXTURE_2D,gt,Bt,Pt[0].width,Pt[0].height);for(let $=0,X=Pt.length;$<X;$++)ot=Pt[$],E.format!==Be?ct!==null?D?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ot.width,ot.height,ct,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Bt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?st&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ot.width,ot.height,ct,Dt,ot.data):e.texImage2D(i.TEXTURE_2D,$,Bt,ot.width,ot.height,0,ct,Dt,ot.data)}else if(E.isDataArrayTexture)if(D){if(nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Bt,et.width,et.height,et.depth),st)if(E.layerUpdates.size>0){const $=$A(et.width,et.height,E.format,E.type);for(const X of E.layerUpdates){const Et=et.data.subarray(X*$/et.data.BYTES_PER_ELEMENT,(X+1)*$/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,et.width,et.height,1,ct,Dt,Et)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ct,Dt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,et.width,et.height,et.depth,0,ct,Dt,et.data);else if(E.isData3DTexture)D?(nt&&e.texStorage3D(i.TEXTURE_3D,gt,Bt,et.width,et.height,et.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ct,Dt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,et.width,et.height,et.depth,0,ct,Dt,et.data);else if(E.isFramebufferTexture){if(nt)if(D)e.texStorage2D(i.TEXTURE_2D,gt,Bt,et.width,et.height);else{let $=et.width,X=et.height;for(let Et=0;Et<gt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Bt,$,X,0,ct,Dt,null),$>>=1,X>>=1}}else if(Pt.length>0){if(D&&nt){const $=le(Pt[0]);e.texStorage2D(i.TEXTURE_2D,gt,Bt,$.width,$.height)}for(let $=0,X=Pt.length;$<X;$++)ot=Pt[$],D?st&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ct,Dt,ot):e.texImage2D(i.TEXTURE_2D,$,Bt,ct,Dt,ot);E.generateMipmaps=!1}else if(D){if(nt){const $=le(et);e.texStorage2D(i.TEXTURE_2D,gt,Bt,$.width,$.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Dt,et)}else e.texImage2D(i.TEXTURE_2D,0,Bt,ct,Dt,et);f(E)&&u(W),It.__version=V.version,E.onUpdate&&E.onUpdate(E)}v.__version=E.version}function Y(v,E,U){if(E.image.length!==6)return;const W=Gt(v,E),j=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,v.__webglTexture,i.TEXTURE0+U);const V=n.get(j);if(j.version!==V.__version||W===!0){e.activeTexture(i.TEXTURE0+U);const It=Wt.getPrimaries(Wt.workingColorSpace),it=E.colorSpace===ei?null:Wt.getPrimaries(E.colorSpace),Ct=E.colorSpace===ei||It===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const _t=E.isCompressedTexture||E.image[0].isCompressedTexture,et=E.image[0]&&E.image[0].isDataTexture,ct=[];for(let X=0;X<6;X++)!_t&&!et?ct[X]=m(E.image[X],!0,s.maxCubemapSize):ct[X]=et?E.image[X].image:E.image[X],ct[X]=fe(E,ct[X]);const Dt=ct[0],Bt=r.convert(E.format,E.colorSpace),ot=r.convert(E.type),Pt=x(E.internalFormat,Bt,ot,E.colorSpace),D=E.isVideoTexture!==!0,nt=V.__version===void 0||W===!0,st=j.dataReady;let gt=b(E,Dt);Tt(i.TEXTURE_CUBE_MAP,E);let $;if(_t){D&&nt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Pt,Dt.width,Dt.height);for(let X=0;X<6;X++){$=ct[X].mipmaps;for(let Et=0;Et<$.length;Et++){const Ft=$[Et];E.format!==Be?Bt!==null?D?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,Et,0,0,Ft.width,Ft.height,Bt,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,Et,Pt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,Et,0,0,Ft.width,Ft.height,Bt,ot,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,Et,Pt,Ft.width,Ft.height,0,Bt,ot,Ft.data)}}}else{if($=E.mipmaps,D&&nt){$.length>0&&gt++;const X=le(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Pt,X.width,X.height)}for(let X=0;X<6;X++)if(et){D?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ct[X].width,ct[X].height,Bt,ot,ct[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Pt,ct[X].width,ct[X].height,0,Bt,ot,ct[X].data);for(let Et=0;Et<$.length;Et++){const se=$[Et].image[X].image;D?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,Et+1,0,0,se.width,se.height,Bt,ot,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,Et+1,Pt,se.width,se.height,0,Bt,ot,se.data)}}else{D?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Bt,ot,ct[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Pt,Bt,ot,ct[X]);for(let Et=0;Et<$.length;Et++){const Ft=$[Et];D?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,Et+1,0,0,Bt,ot,Ft.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,Et+1,Pt,Bt,ot,Ft.image[X])}}}f(E)&&u(i.TEXTURE_CUBE_MAP),V.__version=j.version,E.onUpdate&&E.onUpdate(E)}v.__version=E.version}function At(v,E,U,W,j,V){const It=r.convert(U.format,U.colorSpace),it=r.convert(U.type),Ct=x(U.internalFormat,It,it,U.colorSpace),_t=n.get(E),et=n.get(U);if(et.__renderTarget=E,!_t.__hasExternalTextures){const ct=Math.max(1,E.width>>V),Dt=Math.max(1,E.height>>V);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,V,Ct,ct,Dt,E.depth,0,It,it,null):e.texImage2D(j,V,Ct,ct,Dt,0,It,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,v),ut(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,j,et.__webglTexture,0,Kt(E)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,j,et.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(v,E,U){if(i.bindRenderbuffer(i.RENDERBUFFER,v),E.depthBuffer){const W=E.depthTexture,j=W&&W.isDepthTexture?W.type:null,V=I(E.stencilBuffer,j),It=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=Kt(E);ut(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,V,E.width,E.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,V,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,V,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,v)}else{const W=E.textures;for(let j=0;j<W.length;j++){const V=W[j],It=r.convert(V.format,V.colorSpace),it=r.convert(V.type),Ct=x(V.internalFormat,It,it,V.colorSpace),_t=Kt(E);U&&ut(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Ct,E.width,E.height):ut(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,Ct,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(v,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,v),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(E.depthTexture);W.__renderTarget=E,(!W.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J(E.depthTexture,0);const j=W.__webglTexture,V=Kt(E);if(E.depthTexture.format===vs)ut(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(E.depthTexture.format===Ss)ut(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Nt(v){const E=n.get(v),U=v.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==v.depthTexture){const W=v.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),W){const j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=W}if(v.depthTexture&&!E.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const W=v.texture.mipmaps;W&&W.length>0?ft(E.__webglFramebuffer[0],v):ft(E.__webglFramebuffer,v)}else if(U){E.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[W]),E.__webglDepthbuffer[W]===void 0)E.__webglDepthbuffer[W]=i.createRenderbuffer(),xt(E.__webglDepthbuffer[W],v,!1);else{const j=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=E.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,V)}}else{const W=v.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),xt(E.__webglDepthbuffer,v,!1);else{const j=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,V)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(v,E,U){const W=n.get(v);E!==void 0&&At(W.__webglFramebuffer,v,v.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Nt(v)}function M(v){const E=v.texture,U=n.get(v),W=n.get(E);v.addEventListener("dispose",w);const j=v.textures,V=v.isWebGLCubeRenderTarget===!0,It=j.length>1;if(It||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=E.version,a.memory.textures++),V){U.__webglFramebuffer=[];for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0){U.__webglFramebuffer[it]=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)U.__webglFramebuffer[it][Ct]=i.createFramebuffer()}else U.__webglFramebuffer[it]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){U.__webglFramebuffer=[];for(let it=0;it<E.mipmaps.length;it++)U.__webglFramebuffer[it]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(It)for(let it=0,Ct=j.length;it<Ct;it++){const _t=n.get(j[it]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),a.memory.textures++)}if(v.samples>0&&ut(v)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let it=0;it<j.length;it++){const Ct=j[it];U.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[it]);const _t=r.convert(Ct.format,Ct.colorSpace),et=r.convert(Ct.type),ct=x(Ct.internalFormat,_t,et,Ct.colorSpace,v.isXRRenderTarget===!0),Dt=Kt(v);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,ct,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,U.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),v.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(U.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,E);for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ct=0;Ct<E.mipmaps.length;Ct++)At(U.__webglFramebuffer[it][Ct],v,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct);else At(U.__webglFramebuffer[it],v,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);f(E)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let it=0,Ct=j.length;it<Ct;it++){const _t=j[it],et=n.get(_t);let ct=i.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(ct=v.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,et.__webglTexture),Tt(ct,_t),At(U.__webglFramebuffer,v,_t,i.COLOR_ATTACHMENT0+it,ct,0),f(_t)&&u(ct)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(it=v.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,W.__webglTexture),Tt(it,E),E.mipmaps&&E.mipmaps.length>0)for(let Ct=0;Ct<E.mipmaps.length;Ct++)At(U.__webglFramebuffer[Ct],v,E,i.COLOR_ATTACHMENT0,it,Ct);else At(U.__webglFramebuffer,v,E,i.COLOR_ATTACHMENT0,it,0);f(E)&&u(it),e.unbindTexture()}v.depthBuffer&&Nt(v)}function Zt(v){const E=v.textures;for(let U=0,W=E.length;U<W;U++){const j=E[U];if(f(j)){const V=y(v),It=n.get(j).__webglTexture;e.bindTexture(V,It),u(V),e.unbindTexture()}}}const Mt=[],vt=[];function dt(v){if(v.samples>0){if(ut(v)===!1){const E=v.textures,U=v.width,W=v.height;let j=i.COLOR_BUFFER_BIT;const V=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(v),it=E.length>1;if(it)for(let _t=0;_t<E.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Ct=v.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let _t=0;_t<E.length;_t++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[_t]);const et=n.get(E[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,U,W,0,0,U,W,j,i.NEAREST),l===!0&&(Mt.length=0,vt.length=0,Mt.push(i.COLOR_ATTACHMENT0+_t),v.depthBuffer&&v.resolveDepthBuffer===!1&&(Mt.push(V),vt.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let _t=0;_t<E.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,It.__webglColorRenderbuffer[_t]);const et=n.get(E[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const E=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Kt(v){return Math.min(s.maxSamples,v.samples)}function ut(v){const E=n.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function yt(v){const E=a.render.frame;h.get(v)!==E&&(h.set(v,E),v.update())}function fe(v,E){const U=v.colorSpace,W=v.format,j=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||U!==is&&U!==ei&&(Wt.getTransfer(U)===te?(W!==Be||j!==We)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),E}function le(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(A.width=v.naturalWidth||v.width,A.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(A.width=v.displayWidth,A.height=v.displayHeight):(A.width=v.width,A.height=v.height),A}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=J,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=P,this.rebindTextures=re,this.setupRenderTarget=M,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=ut}function Sm(i,t){function e(n,s=ei){let r;const a=Wt.getTransfer(s);if(n===We)return i.UNSIGNED_BYTE;if(n===Xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jl)return i.BYTE;if(n===Xl)return i.SHORT;if(n===_s)return i.UNSIGNED_SHORT;if(n===Jo)return i.INT;if(n===Ve)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===Zl)return i.ALPHA;if(n===$l)return i.RGB;if(n===Be)return i.RGBA;if(n===vs)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===tc)return i.RED;if(n===jo)return i.RED_INTEGER;if(n===ec)return i.RG;if(n===Ur)return i.RG_INTEGER;if(n===zn)return i.RGBA_INTEGER;if(n===fr||n===pr||n===gr||n===mr)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===io||n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===Ao||n===lo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oo||n===Ao)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===co||n===ho||n===uo||n===fo||n===po||n===go||n===mo||n===Eo||n===Io||n===Co||n===xo||n===yo||n===_o||n===Bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===co)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ho)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Io)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Co)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_o)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===So||n===bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===So)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wo||n===Mo||n===Qo||n===To)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wm=`
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

}`;class Mm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ec(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new rn({vertexShader:bm,fragmentShader:wm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qm extends Si{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,A=null,h=null,c=null,d=null,p=null,g=null;const m=typeof XRWebGLBinding<"u",f=new Mm,u={},y=e.getContextAttributes();let x=null,I=null;const b=[],S=[],w=new wt;let R=null;const B=new Oe;B.viewport=new Jt;const _=new Oe;_.viewport=new Jt;const T=[B,_],L=new Ju;let O=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Y=b[q];return Y===void 0&&(Y=new xa,b[q]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(q){let Y=b[q];return Y===void 0&&(Y=new xa,b[q]=Y),Y.getGripSpace()},this.getHand=function(q){let Y=b[q];return Y===void 0&&(Y=new xa,b[q]=Y),Y.getHandSpace()};function J(q){const Y=S.indexOf(q.inputSource);if(Y===-1)return;const At=b[Y];At!==void 0&&(At.update(q.inputSource,q.frame,A||a),At.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",K);for(let q=0;q<b.length;q++){const Y=S[q];Y!==null&&(S[q]=null,b[q].disconnect(Y))}O=null,H=null,f.reset();for(const q in u)delete u[q];t.setRenderTarget(x),p=null,d=null,c=null,s=null,I=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return A||a},this.setReferenceSpace=function(q){A=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return c===null&&m&&(c=new XRWebGLBinding(s,e)),c},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",z),s.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,xt=null,ft=null;y.depth&&(ft=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=y.stencil?Ss:vs,xt=y.stencil?Bs:Ve);const Nt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};c=this.getBinding(),d=c.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),I=new pn(d.textureWidth,d.textureHeight,{format:Be,type:We,depthTexture:new mc(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const At={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),I=new pn(p.framebufferWidth,p.framebufferHeight,{format:Be,type:We,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(l),A=null,a=await s.requestReferenceSpace(o),Lt.setContext(s),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function K(q){for(let Y=0;Y<q.removed.length;Y++){const At=q.removed[Y],xt=S.indexOf(At);xt>=0&&(S[xt]=null,b[xt].disconnect(At))}for(let Y=0;Y<q.added.length;Y++){const At=q.added[Y];let xt=S.indexOf(At);if(xt===-1){for(let Nt=0;Nt<b.length;Nt++)if(Nt>=S.length){S.push(At),xt=Nt;break}else if(S[Nt]===null){S[Nt]=At,xt=Nt;break}if(xt===-1)break}const ft=b[xt];ft&&ft.connect(At)}}const P=new Q,Z=new Q;function rt(q,Y,At){P.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(At.matrixWorld);const xt=P.distanceTo(Z),ft=Y.projectionMatrix.elements,Nt=At.projectionMatrix.elements,re=ft[14]/(ft[10]-1),M=ft[14]/(ft[10]+1),Zt=(ft[9]+1)/ft[5],Mt=(ft[9]-1)/ft[5],vt=(ft[8]-1)/ft[0],dt=(Nt[8]+1)/Nt[0],Kt=re*vt,ut=re*dt,yt=xt/(-vt+dt),fe=yt*-vt;if(Y.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(fe),q.translateZ(yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ft[10]===-1)q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const le=re+yt,v=M+yt,E=Kt-fe,U=ut+(xt-fe),W=Zt*M/v*le,j=Mt*M/v*le;q.projectionMatrix.makePerspective(E,U,W,j,le,v),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ht(q,Y){Y===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Y.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Y=q.near,At=q.far;f.texture!==null&&(f.depthNear>0&&(Y=f.depthNear),f.depthFar>0&&(At=f.depthFar)),L.near=_.near=B.near=Y,L.far=_.far=B.far=At,(O!==L.near||H!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),O=L.near,H=L.far),L.layers.mask=q.layers.mask|6,B.layers.mask=L.layers.mask&3,_.layers.mask=L.layers.mask&5;const xt=q.parent,ft=L.cameras;ht(L,xt);for(let Nt=0;Nt<ft.length;Nt++)ht(ft[Nt],xt);ft.length===2?rt(L,B,_):L.projectionMatrix.copy(B.projectionMatrix),Tt(q,L,xt)};function Tt(q,Y,At){At===null?q.matrix.copy(Y.matrixWorld):(q.matrix.copy(At.matrixWorld),q.matrix.invert(),q.matrix.multiply(Y.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Do*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(L)},this.getCameraTexture=function(q){return u[q]};let Gt=null;function Yt(q,Y){if(h=Y.getViewerPose(A||a),g=Y,h!==null){const At=h.views;p!==null&&(t.setRenderTargetFramebuffer(I,p.framebuffer),t.setRenderTarget(I));let xt=!1;At.length!==L.cameras.length&&(L.cameras.length=0,xt=!0);for(let M=0;M<At.length;M++){const Zt=At[M];let Mt=null;if(p!==null)Mt=p.getViewport(Zt);else{const dt=c.getViewSubImage(d,Zt);Mt=dt.viewport,M===0&&(t.setRenderTargetTextures(I,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(I))}let vt=T[M];vt===void 0&&(vt=new Oe,vt.layers.enable(M),vt.viewport=new Jt,T[M]=vt),vt.matrix.fromArray(Zt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Zt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),M===0&&(L.matrix.copy(vt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),xt===!0&&L.cameras.push(vt)}const ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){c=n.getBinding();const M=c.getDepthInformation(At[0]);M&&M.isValid&&M.texture&&f.init(M,s.renderState)}if(ft&&ft.includes("camera-access")&&m){t.state.unbindTexture(),c=n.getBinding();for(let M=0;M<At.length;M++){const Zt=At[M].camera;if(Zt){let Mt=u[Zt];Mt||(Mt=new Ec,u[Zt]=Mt);const vt=c.getCameraImage(Zt);Mt.sourceTexture=vt}}}}for(let At=0;At<b.length;At++){const xt=S[At],ft=b[At];xt!==null&&ft!==void 0&&ft.update(xt,Y,A||a)}Gt&&Gt(q,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Lt=new xc;Lt.setAnimationLoop(Yt),this.setAnimationLoop=function(q){Gt=q},this.dispose=function(){}}}const di=new bn,Tm=new Xt;function Dm(i,t){function e(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,cc(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function s(f,u,y,x,I){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(f,u):u.isMeshToonMaterial?(r(f,u),c(f,u)):u.isMeshPhongMaterial?(r(f,u),h(f,u)):u.isMeshStandardMaterial?(r(f,u),d(f,u),u.isMeshPhysicalMaterial&&p(f,u,I)):u.isMeshMatcapMaterial?(r(f,u),g(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),m(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?l(f,u,y,x):u.isSpriteMaterial?A(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,e(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Ye&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,e(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Ye&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,e(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,e(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const y=t.get(u),x=y.envMap,I=y.envMapRotation;x&&(f.envMap.value=x,di.copy(I),di.x*=-1,di.y*=-1,di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),f.envMapRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(di)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,y,x){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*y,f.scale.value=x*.5,u.map&&(f.map.value=u.map,e(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function A(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function c(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function d(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function p(f,u,y){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ye&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,u){u.matcap&&(f.matcap.value=u.matcap)}function m(f,u){const y=t.get(u).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const I=x.program;n.uniformBlockBinding(y,I)}function A(y,x){let I=s[y.id];I===void 0&&(g(y),I=h(y),s[y.id]=I,y.addEventListener("dispose",f));const b=x.program;n.updateUBOMapping(y,b);const S=t.render.frame;r[y.id]!==S&&(d(y),r[y.id]=S)}function h(y){const x=c();y.__bindingPointIndex=x;const I=i.createBuffer(),b=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,b,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,I),I}function c(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=s[y.id],I=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let S=0,w=I.length;S<w;S++){const R=Array.isArray(I[S])?I[S]:[I[S]];for(let B=0,_=R.length;B<_;B++){const T=R[B];if(p(T,S,B,b)===!0){const L=T.__offset,O=Array.isArray(T.value)?T.value:[T.value];let H=0;for(let J=0;J<O.length;J++){const z=O[J],K=m(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,L+H,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,I,b){const S=y.value,w=x+"_"+I;if(b[w]===void 0)return typeof S=="number"||typeof S=="boolean"?b[w]=S:b[w]=S.clone(),!0;{const R=b[w];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return b[w]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function g(y){const x=y.uniforms;let I=0;const b=16;for(let w=0,R=x.length;w<R;w++){const B=Array.isArray(x[w])?x[w]:[x[w]];for(let _=0,T=B.length;_<T;_++){const L=B[_],O=Array.isArray(L.value)?L.value:[L.value];for(let H=0,J=O.length;H<J;H++){const z=O[H],K=m(z),P=I%b,Z=P%K.boundary,rt=P+Z;I+=Z,rt!==0&&b-rt<K.storage&&(I+=b-rt),L.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=I,I+=K.storage}}}const S=I%b;return S>0&&(I+=b-S),y.__size=I,y.__cache={},this}function m(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function f(y){const x=y.target;x.removeEventListener("dispose",f);const I=a.indexOf(x.__bindingPointIndex);a.splice(I,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:A,dispose:u}}class Nm{constructor(t={}){const{canvas:e=hu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:A=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),m=new Int32Array(4);let f=null,u=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let b=!1;this._outputColorSpace=ze;let S=0,w=0,R=null,B=-1,_=null;const T=new Jt,L=new Jt;let O=null;const H=new zt(0);let J=0,z=e.width,K=e.height,P=1,Z=null,rt=null;const ht=new Jt(0,0,z,K),Tt=new Jt(0,0,z,K);let Gt=!1;const Yt=new pc;let Lt=!1,q=!1;const Y=new Xt,At=new Q,xt=new Jt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function re(){return R===null?P:1}let M=n;function Zt(C,N){return e.getContext(C,N)}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:A,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wo}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",$,!1),M===null){const N="webgl2";if(M=Zt(N,C),M===null)throw Zt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Mt,vt,dt,Kt,ut,yt,fe,le,v,E,U,W,j,V,It,it,Ct,_t,et,ct,Dt,Bt,ot,Pt;function D(){Mt=new Yp(M),Mt.init(),Bt=new Sm(M,Mt),vt=new Lp(M,Mt,t,Bt),dt=new Bm(M,Mt),vt.reversedDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),Kt=new Wp(M),ut=new hm,yt=new vm(M,Mt,dt,ut,vt,Bt,Kt),fe=new kp(I),le=new Hp(I),v=new Zu(M),ot=new Fp(M,v),E=new Vp(M,v,Kt,ot),U=new Xp(M,E,v,Kt),et=new Jp(M,vt,yt),it=new Pp(ut),W=new cm(I,fe,le,Mt,vt,ot,it),j=new Dm(I,ut),V=new dm,It=new Im(Mt),_t=new Np(I,fe,le,dt,U,p,l),Ct=new ym(I,U,vt),Pt=new Rm(M,Kt,vt,dt),ct=new Up(M,Mt,Kt),Dt=new qp(M,Mt,Kt),Kt.programs=W.programs,I.capabilities=vt,I.extensions=Mt,I.properties=ut,I.renderLists=V,I.shadowMap=Ct,I.state=dt,I.info=Kt}D();const nt=new Qm(I,M);this.xr=nt,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const C=Mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(C){C!==void 0&&(P=C,this.setSize(z,K,!1))},this.getSize=function(C){return C.set(z,K)},this.setSize=function(C,N,k=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,K=N,e.width=Math.floor(C*P),e.height=Math.floor(N*P),k===!0&&(e.style.width=C+"px",e.style.height=N+"px"),this.setViewport(0,0,C,N)},this.getDrawingBufferSize=function(C){return C.set(z*P,K*P).floor()},this.setDrawingBufferSize=function(C,N,k){z=C,K=N,P=k,e.width=Math.floor(C*k),e.height=Math.floor(N*k),this.setViewport(0,0,C,N)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(ht)},this.setViewport=function(C,N,k,G){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,N,k,G),dt.viewport(T.copy(ht).multiplyScalar(P).round())},this.getScissor=function(C){return C.copy(Tt)},this.setScissor=function(C,N,k,G){C.isVector4?Tt.set(C.x,C.y,C.z,C.w):Tt.set(C,N,k,G),dt.scissor(L.copy(Tt).multiplyScalar(P).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(C){dt.setScissorTest(Gt=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){rt=C},this.getClearColor=function(C){return C.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(C=!0,N=!0,k=!0){let G=0;if(C){let F=!1;if(R!==null){const tt=R.texture.format;F=tt===zn||tt===Ur||tt===jo}if(F){const tt=R.texture.type,lt=tt===We||tt===Ve||tt===_s||tt===Bs||tt===Xo||tt===Ko,mt=_t.getClearColor(),pt=_t.getClearAlpha(),Qt=mt.r,Rt=mt.g,St=mt.b;lt?(g[0]=Qt,g[1]=Rt,g[2]=St,g[3]=pt,M.clearBufferuiv(M.COLOR,0,g)):(m[0]=Qt,m[1]=Rt,m[2]=St,m[3]=pt,M.clearBufferiv(M.COLOR,0,m))}else G|=M.COLOR_BUFFER_BIT}N&&(G|=M.DEPTH_BUFFER_BIT),k&&(G|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",$,!1),_t.dispose(),V.dispose(),It.dispose(),ut.dispose(),fe.dispose(),le.dispose(),U.dispose(),ot.dispose(),Pt.dispose(),W.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",En),nt.removeEventListener("sessionend",mA),ai.stop()};function st(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=Kt.autoReset,N=Ct.enabled,k=Ct.autoUpdate,G=Ct.needsUpdate,F=Ct.type;D(),Kt.autoReset=C,Ct.enabled=N,Ct.autoUpdate=k,Ct.needsUpdate=G,Ct.type=F}function $(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function X(C){const N=C.target;N.removeEventListener("dispose",X),Et(N)}function Et(C){Ft(C),ut.remove(C)}function Ft(C){const N=ut.get(C).programs;N!==void 0&&(N.forEach(function(k){W.releaseProgram(k)}),C.isShaderMaterial&&W.releaseShaderCache(C))}this.renderBufferDirect=function(C,N,k,G,F,tt){N===null&&(N=ft);const lt=F.isMesh&&F.matrixWorld.determinant()<0,mt=fh(C,N,k,G,F);dt.setMaterial(G,lt);let pt=k.index,Qt=1;if(G.wireframe===!0){if(pt=E.getWireframeAttribute(k),pt===void 0)return;Qt=2}const Rt=k.drawRange,St=k.attributes.position;let Ht=Rt.start*Qt,$t=(Rt.start+Rt.count)*Qt;tt!==null&&(Ht=Math.max(Ht,tt.start*Qt),$t=Math.min($t,(tt.start+tt.count)*Qt)),pt!==null?(Ht=Math.max(Ht,0),$t=Math.min($t,pt.count)):St!=null&&(Ht=Math.max(Ht,0),$t=Math.min($t,St.count));const ue=$t-Ht;if(ue<0||ue===1/0)return;ot.setup(F,G,mt,k,pt);let ae,ne=ct;if(pt!==null&&(ae=v.get(pt),ne=Dt,ne.setIndex(ae)),F.isMesh)G.wireframe===!0?(dt.setLineWidth(G.wireframeLinewidth*re()),ne.setMode(M.LINES)):ne.setMode(M.TRIANGLES);else if(F.isLine){let bt=G.linewidth;bt===void 0&&(bt=1),dt.setLineWidth(bt*re()),F.isLineSegments?ne.setMode(M.LINES):F.isLineLoop?ne.setMode(M.LINE_LOOP):ne.setMode(M.LINE_STRIP)}else F.isPoints?ne.setMode(M.POINTS):F.isSprite&&ne.setMode(M.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))ne.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const bt=F._multiDrawStarts,ce=F._multiDrawCounts,Vt=F._multiDrawCount,Xe=pt?v.get(pt).bytesPerElement:1,bi=ut.get(G).currentProgram.getUniforms();for(let Ke=0;Ke<Vt;Ke++)bi.setValue(M,"_gl_DrawID",Ke),ne.render(bt[Ke]/Xe,ce[Ke])}else if(F.isInstancedMesh)ne.renderInstances(Ht,ue,F.count);else if(k.isInstancedBufferGeometry){const bt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ce=Math.min(k.instanceCount,bt);ne.renderInstances(Ht,ue,ce)}else ne.render(Ht,ue)};function se(C,N,k){C.transparent===!0&&C.side===Cn&&C.forceSinglePass===!1?(C.side=Ye,C.needsUpdate=!0,Ls(C,N,k),C.side=si,C.needsUpdate=!0,Ls(C,N,k),C.side=Cn):Ls(C,N,k)}this.compile=function(C,N,k=null){k===null&&(k=C),u=It.get(k),u.init(N),x.push(u),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),C!==k&&C.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();const G=new Set;return C.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const tt=F.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const mt=tt[lt];se(mt,k,F),G.add(mt)}else se(tt,k,F),G.add(tt)}),u=x.pop(),G},this.compileAsync=function(C,N,k=null){const G=this.compile(C,N,k);return new Promise(F=>{function tt(){if(G.forEach(function(lt){ut.get(lt).currentProgram.isReady()&&G.delete(lt)}),G.size===0){F(C);return}setTimeout(tt,10)}Mt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let jt=null;function Qn(C){jt&&jt(C)}function En(){ai.stop()}function mA(){ai.start()}const ai=new xc;ai.setAnimationLoop(Qn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(C){jt=C,nt.setAnimationLoop(C),C===null?ai.stop():ai.start()},nt.addEventListener("sessionstart",En),nt.addEventListener("sessionend",mA),this.render=function(C,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(N),N=nt.getCamera()),C.isScene===!0&&C.onBeforeRender(I,C,N,R),u=It.get(C,x.length),u.init(N),x.push(u),Y.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Yt.setFromProjectionMatrix(Y,Bn,N.reversedDepth),q=this.localClippingEnabled,Lt=it.init(this.clippingPlanes,q),f=V.get(C,y.length),f.init(),y.push(f),nt.enabled===!0&&nt.isPresenting===!0){const tt=I.xr.getDepthSensingMesh();tt!==null&&jr(tt,N,-1/0,I.sortObjects)}jr(C,N,0,I.sortObjects),f.finish(),I.sortObjects===!0&&f.sort(Z,rt),Nt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Nt&&_t.addToRenderList(f,C),this.info.render.frame++,Lt===!0&&it.beginShadows();const k=u.state.shadowsArray;Ct.render(k,C,N),Lt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=f.opaque,F=f.transmissive;if(u.setupLights(),N.isArrayCamera){const tt=N.cameras;if(F.length>0)for(let lt=0,mt=tt.length;lt<mt;lt++){const pt=tt[lt];IA(G,F,C,pt)}Nt&&_t.render(C);for(let lt=0,mt=tt.length;lt<mt;lt++){const pt=tt[lt];EA(f,C,pt,pt.viewport)}}else F.length>0&&IA(G,F,C,N),Nt&&_t.render(C),EA(f,C,N);R!==null&&w===0&&(yt.updateMultisampleRenderTarget(R),yt.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(I,C,N),ot.resetDefaultState(),B=-1,_=null,x.pop(),x.length>0?(u=x[x.length-1],Lt===!0&&it.setGlobalState(I.clippingPlanes,u.state.camera)):u=null,y.pop(),y.length>0?f=y[y.length-1]:f=null};function jr(C,N,k,G){if(C.visible===!1)return;if(C.layers.test(N.layers)){if(C.isGroup)k=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(N);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Yt.intersectsSprite(C)){G&&xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Y);const lt=U.update(C),mt=C.material;mt.visible&&f.push(C,lt,mt,k,xt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Yt.intersectsObject(C))){const lt=U.update(C),mt=C.material;if(G&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xt.copy(C.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),xt.copy(lt.boundingSphere.center)),xt.applyMatrix4(C.matrixWorld).applyMatrix4(Y)),Array.isArray(mt)){const pt=lt.groups;for(let Qt=0,Rt=pt.length;Qt<Rt;Qt++){const St=pt[Qt],Ht=mt[St.materialIndex];Ht&&Ht.visible&&f.push(C,lt,Ht,k,xt.z,St)}}else mt.visible&&f.push(C,lt,mt,k,xt.z,null)}}const tt=C.children;for(let lt=0,mt=tt.length;lt<mt;lt++)jr(tt[lt],N,k,G)}function EA(C,N,k,G){const F=C.opaque,tt=C.transmissive,lt=C.transparent;u.setupLightsView(k),Lt===!0&&it.setGlobalState(I.clippingPlanes,k),G&&dt.viewport(T.copy(G)),F.length>0&&Us(F,N,k),tt.length>0&&Us(tt,N,k),lt.length>0&&Us(lt,N,k),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function IA(C,N,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new pn(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?Ts:We,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const tt=u.state.transmissionRenderTarget[G.id],lt=G.viewport||T;tt.setSize(lt.z*I.transmissionResolutionScale,lt.w*I.transmissionResolutionScale);const mt=I.getRenderTarget(),pt=I.getActiveCubeFace(),Qt=I.getActiveMipmapLevel();I.setRenderTarget(tt),I.getClearColor(H),J=I.getClearAlpha(),J<1&&I.setClearColor(16777215,.5),I.clear(),Nt&&_t.render(k);const Rt=I.toneMapping;I.toneMapping=ni;const St=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),Lt===!0&&it.setGlobalState(I.clippingPlanes,G),Us(C,k,G),yt.updateMultisampleRenderTarget(tt),yt.updateRenderTargetMipmap(tt),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let $t=0,ue=N.length;$t<ue;$t++){const ae=N[$t],ne=ae.object,bt=ae.geometry,ce=ae.material,Vt=ae.group;if(ce.side===Cn&&ne.layers.test(G.layers)){const Xe=ce.side;ce.side=Ye,ce.needsUpdate=!0,CA(ne,k,G,bt,ce,Vt),ce.side=Xe,ce.needsUpdate=!0,Ht=!0}}Ht===!0&&(yt.updateMultisampleRenderTarget(tt),yt.updateRenderTargetMipmap(tt))}I.setRenderTarget(mt,pt,Qt),I.setClearColor(H,J),St!==void 0&&(G.viewport=St),I.toneMapping=Rt}function Us(C,N,k){const G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,tt=C.length;F<tt;F++){const lt=C[F],mt=lt.object,pt=lt.geometry,Qt=lt.group;let Rt=lt.material;Rt.allowOverride===!0&&G!==null&&(Rt=G),mt.layers.test(k.layers)&&CA(mt,N,k,pt,Rt,Qt)}}function CA(C,N,k,G,F,tt){C.onBeforeRender(I,N,k,G,F,tt),C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),F.onBeforeRender(I,N,k,G,C,tt),F.transparent===!0&&F.side===Cn&&F.forceSinglePass===!1?(F.side=Ye,F.needsUpdate=!0,I.renderBufferDirect(k,N,G,F,C,tt),F.side=si,F.needsUpdate=!0,I.renderBufferDirect(k,N,G,F,C,tt),F.side=Cn):I.renderBufferDirect(k,N,G,F,C,tt),C.onAfterRender(I,N,k,G,F,tt)}function Ls(C,N,k){N.isScene!==!0&&(N=ft);const G=ut.get(C),F=u.state.lights,tt=u.state.shadowsArray,lt=F.state.version,mt=W.getParameters(C,F.state,tt,N,k),pt=W.getProgramCacheKey(mt);let Qt=G.programs;G.environment=C.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(C.isMeshStandardMaterial?le:fe).get(C.envMap||G.environment),G.envMapRotation=G.environment!==null&&C.envMap===null?N.environmentRotation:C.envMapRotation,Qt===void 0&&(C.addEventListener("dispose",X),Qt=new Map,G.programs=Qt);let Rt=Qt.get(pt);if(Rt!==void 0){if(G.currentProgram===Rt&&G.lightsStateVersion===lt)return yA(C,mt),Rt}else mt.uniforms=W.getUniforms(C),C.onBeforeCompile(mt,I),Rt=W.acquireProgram(mt,pt),Qt.set(pt,Rt),G.uniforms=mt.uniforms;const St=G.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(St.clippingPlanes=it.uniform),yA(C,mt),G.needsLights=gh(C),G.lightsStateVersion=lt,G.needsLights&&(St.ambientLightColor.value=F.state.ambient,St.lightProbe.value=F.state.probe,St.directionalLights.value=F.state.directional,St.directionalLightShadows.value=F.state.directionalShadow,St.spotLights.value=F.state.spot,St.spotLightShadows.value=F.state.spotShadow,St.rectAreaLights.value=F.state.rectArea,St.ltc_1.value=F.state.rectAreaLTC1,St.ltc_2.value=F.state.rectAreaLTC2,St.pointLights.value=F.state.point,St.pointLightShadows.value=F.state.pointShadow,St.hemisphereLights.value=F.state.hemi,St.directionalShadowMap.value=F.state.directionalShadowMap,St.directionalShadowMatrix.value=F.state.directionalShadowMatrix,St.spotShadowMap.value=F.state.spotShadowMap,St.spotLightMatrix.value=F.state.spotLightMatrix,St.spotLightMap.value=F.state.spotLightMap,St.pointShadowMap.value=F.state.pointShadowMap,St.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Rt,G.uniformsList=null,Rt}function xA(C){if(C.uniformsList===null){const N=C.currentProgram.getUniforms();C.uniformsList=Ir.seqWithValue(N.seq,C.uniforms)}return C.uniformsList}function yA(C,N){const k=ut.get(C);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function fh(C,N,k,G,F){N.isScene!==!0&&(N=ft),yt.resetTextureUnits();const tt=N.fog,lt=G.isMeshStandardMaterial?N.environment:null,mt=R===null?I.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:is,pt=(G.isMeshStandardMaterial?le:fe).get(G.envMap||lt),Qt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Rt=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!k.morphAttributes.position,Ht=!!k.morphAttributes.normal,$t=!!k.morphAttributes.color;let ue=ni;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ue=I.toneMapping);const ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=ae!==void 0?ae.length:0,bt=ut.get(G),ce=u.state.lights;if(Lt===!0&&(q===!0||C!==_)){const Ne=C===_&&G.id===B;it.setState(G,C,Ne)}let Vt=!1;G.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==ce.state.version||bt.outputColorSpace!==mt||F.isBatchedMesh&&bt.batching===!1||!F.isBatchedMesh&&bt.batching===!0||F.isBatchedMesh&&bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&bt.instancing===!1||!F.isInstancedMesh&&bt.instancing===!0||F.isSkinnedMesh&&bt.skinning===!1||!F.isSkinnedMesh&&bt.skinning===!0||F.isInstancedMesh&&bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&bt.instancingMorph===!1&&F.morphTexture!==null||bt.envMap!==pt||G.fog===!0&&bt.fog!==tt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==it.numPlanes||bt.numIntersection!==it.numIntersection)||bt.vertexAlphas!==Qt||bt.vertexTangents!==Rt||bt.morphTargets!==St||bt.morphNormals!==Ht||bt.morphColors!==$t||bt.toneMapping!==ue||bt.morphTargetsCount!==ne)&&(Vt=!0):(Vt=!0,bt.__version=G.version);let Xe=bt.currentProgram;Vt===!0&&(Xe=Ls(G,N,F));let bi=!1,Ke=!1,As=!1;const he=Xe.getUniforms(),tn=bt.uniforms;if(dt.useProgram(Xe.program)&&(bi=!0,Ke=!0,As=!0),G.id!==B&&(B=G.id,Ke=!0),bi||_!==C){dt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),he.setValue(M,"projectionMatrix",C.projectionMatrix),he.setValue(M,"viewMatrix",C.matrixWorldInverse);const Pe=he.map.cameraPosition;Pe!==void 0&&Pe.setValue(M,At.setFromMatrixPosition(C.matrixWorld)),vt.logarithmicDepthBuffer&&he.setValue(M,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&he.setValue(M,"isOrthographic",C.isOrthographicCamera===!0),_!==C&&(_=C,Ke=!0,As=!0)}if(F.isSkinnedMesh){he.setOptional(M,F,"bindMatrix"),he.setOptional(M,F,"bindMatrixInverse");const Ne=F.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),he.setValue(M,"boneTexture",Ne.boneTexture,yt))}F.isBatchedMesh&&(he.setOptional(M,F,"batchingTexture"),he.setValue(M,"batchingTexture",F._matricesTexture,yt),he.setOptional(M,F,"batchingIdTexture"),he.setValue(M,"batchingIdTexture",F._indirectTexture,yt),he.setOptional(M,F,"batchingColorTexture"),F._colorsTexture!==null&&he.setValue(M,"batchingColorTexture",F._colorsTexture,yt));const en=k.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&et.update(F,k,Xe),(Ke||bt.receiveShadow!==F.receiveShadow)&&(bt.receiveShadow=F.receiveShadow,he.setValue(M,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(tn.envMap.value=pt,tn.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(tn.envMapIntensity.value=N.environmentIntensity),Ke&&(he.setValue(M,"toneMappingExposure",I.toneMappingExposure),bt.needsLights&&ph(tn,As),tt&&G.fog===!0&&j.refreshFogUniforms(tn,tt),j.refreshMaterialUniforms(tn,G,P,K,u.state.transmissionRenderTarget[C.id]),Ir.upload(M,xA(bt),tn,yt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ir.upload(M,xA(bt),tn,yt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&he.setValue(M,"center",F.center),he.setValue(M,"modelViewMatrix",F.modelViewMatrix),he.setValue(M,"normalMatrix",F.normalMatrix),he.setValue(M,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ne=G.uniformsGroups;for(let Pe=0,Zr=Ne.length;Pe<Zr;Pe++){const oi=Ne[Pe];Pt.update(oi,Xe),Pt.bind(oi,Xe)}}return Xe}function ph(C,N){C.ambientLightColor.needsUpdate=N,C.lightProbe.needsUpdate=N,C.directionalLights.needsUpdate=N,C.directionalLightShadows.needsUpdate=N,C.pointLights.needsUpdate=N,C.pointLightShadows.needsUpdate=N,C.spotLights.needsUpdate=N,C.spotLightShadows.needsUpdate=N,C.rectAreaLights.needsUpdate=N,C.hemisphereLights.needsUpdate=N}function gh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,N,k){const G=ut.get(C);G.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ut.get(C.texture).__webglTexture=N,ut.get(C.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:k,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,N){const k=ut.get(C);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const mh=M.createFramebuffer();this.setRenderTarget=function(C,N=0,k=0){R=C,S=N,w=k;let G=!0,F=null,tt=!1,lt=!1;if(C){const pt=ut.get(C);if(pt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(M.FRAMEBUFFER,null),G=!1;else if(pt.__webglFramebuffer===void 0)yt.setupRenderTarget(C);else if(pt.__hasExternalTextures)yt.rebindTextures(C,ut.get(C.texture).__webglTexture,ut.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const St=C.depthTexture;if(pt.__boundDepthTexture!==St){if(St!==null&&ut.has(St)&&(C.width!==St.image.width||C.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(C)}}const Qt=C.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(lt=!0);const Rt=ut.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Rt[N])?F=Rt[N][k]:F=Rt[N],tt=!0):C.samples>0&&yt.useMultisampledRTT(C)===!1?F=ut.get(C).__webglMultisampledFramebuffer:Array.isArray(Rt)?F=Rt[k]:F=Rt,T.copy(C.viewport),L.copy(C.scissor),O=C.scissorTest}else T.copy(ht).multiplyScalar(P).floor(),L.copy(Tt).multiplyScalar(P).floor(),O=Gt;if(k!==0&&(F=mh),dt.bindFramebuffer(M.FRAMEBUFFER,F)&&G&&dt.drawBuffers(C,F),dt.viewport(T),dt.scissor(L),dt.setScissorTest(O),tt){const pt=ut.get(C.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+N,pt.__webglTexture,k)}else if(lt){const pt=N;for(let Qt=0;Qt<C.textures.length;Qt++){const Rt=ut.get(C.textures[Qt]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+Qt,Rt.__webglTexture,k,pt)}}else if(C!==null&&k!==0){const pt=ut.get(C.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,pt.__webglTexture,k)}B=-1},this.readRenderTargetPixels=function(C,N,k,G,F,tt,lt,mt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=ut.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){dt.bindFramebuffer(M.FRAMEBUFFER,pt);try{const Qt=C.textures[mt],Rt=Qt.format,St=Qt.type;if(!vt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=C.width-G&&k>=0&&k<=C.height-F&&(C.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+mt),M.readPixels(N,k,G,F,Bt.convert(Rt),Bt.convert(St),tt))}finally{const Qt=R!==null?ut.get(R).__webglFramebuffer:null;dt.bindFramebuffer(M.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(C,N,k,G,F,tt,lt,mt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=ut.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt)if(N>=0&&N<=C.width-G&&k>=0&&k<=C.height-F){dt.bindFramebuffer(M.FRAMEBUFFER,pt);const Qt=C.textures[mt],Rt=Qt.format,St=Qt.type;if(!vt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Ht),M.bufferData(M.PIXEL_PACK_BUFFER,tt.byteLength,M.STREAM_READ),C.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+mt),M.readPixels(N,k,G,F,Bt.convert(Rt),Bt.convert(St),0);const $t=R!==null?ut.get(R).__webglFramebuffer:null;dt.bindFramebuffer(M.FRAMEBUFFER,$t);const ue=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await uu(M,ue,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Ht),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,tt),M.deleteBuffer(Ht),M.deleteSync(ue),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,N=null,k=0){const G=Math.pow(2,-k),F=Math.floor(C.image.width*G),tt=Math.floor(C.image.height*G),lt=N!==null?N.x:0,mt=N!==null?N.y:0;yt.setTexture2D(C,0),M.copyTexSubImage2D(M.TEXTURE_2D,k,0,0,lt,mt,F,tt),dt.unbindTexture()};const Eh=M.createFramebuffer(),Ih=M.createFramebuffer();this.copyTextureToTexture=function(C,N,k=null,G=null,F=0,tt=null){tt===null&&(F!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=F,F=0):tt=0);let lt,mt,pt,Qt,Rt,St,Ht,$t,ue;const ae=C.isCompressedTexture?C.mipmaps[tt]:C.image;if(k!==null)lt=k.max.x-k.min.x,mt=k.max.y-k.min.y,pt=k.isBox3?k.max.z-k.min.z:1,Qt=k.min.x,Rt=k.min.y,St=k.isBox3?k.min.z:0;else{const en=Math.pow(2,-F);lt=Math.floor(ae.width*en),mt=Math.floor(ae.height*en),C.isDataArrayTexture?pt=ae.depth:C.isData3DTexture?pt=Math.floor(ae.depth*en):pt=1,Qt=0,Rt=0,St=0}G!==null?(Ht=G.x,$t=G.y,ue=G.z):(Ht=0,$t=0,ue=0);const ne=Bt.convert(N.format),bt=Bt.convert(N.type);let ce;N.isData3DTexture?(yt.setTexture3D(N,0),ce=M.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(yt.setTexture2DArray(N,0),ce=M.TEXTURE_2D_ARRAY):(yt.setTexture2D(N,0),ce=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,N.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,N.unpackAlignment);const Vt=M.getParameter(M.UNPACK_ROW_LENGTH),Xe=M.getParameter(M.UNPACK_IMAGE_HEIGHT),bi=M.getParameter(M.UNPACK_SKIP_PIXELS),Ke=M.getParameter(M.UNPACK_SKIP_ROWS),As=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,ae.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ae.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Qt),M.pixelStorei(M.UNPACK_SKIP_ROWS,Rt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,St);const he=C.isDataArrayTexture||C.isData3DTexture,tn=N.isDataArrayTexture||N.isData3DTexture;if(C.isDepthTexture){const en=ut.get(C),Ne=ut.get(N),Pe=ut.get(en.__renderTarget),Zr=ut.get(Ne.__renderTarget);dt.bindFramebuffer(M.READ_FRAMEBUFFER,Pe.__webglFramebuffer),dt.bindFramebuffer(M.DRAW_FRAMEBUFFER,Zr.__webglFramebuffer);for(let oi=0;oi<pt;oi++)he&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,ut.get(C).__webglTexture,F,St+oi),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,ut.get(N).__webglTexture,tt,ue+oi)),M.blitFramebuffer(Qt,Rt,lt,mt,Ht,$t,lt,mt,M.DEPTH_BUFFER_BIT,M.NEAREST);dt.bindFramebuffer(M.READ_FRAMEBUFFER,null),dt.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(F!==0||C.isRenderTargetTexture||ut.has(C)){const en=ut.get(C),Ne=ut.get(N);dt.bindFramebuffer(M.READ_FRAMEBUFFER,Eh),dt.bindFramebuffer(M.DRAW_FRAMEBUFFER,Ih);for(let Pe=0;Pe<pt;Pe++)he?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,en.__webglTexture,F,St+Pe):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,en.__webglTexture,F),tn?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ne.__webglTexture,tt,ue+Pe):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Ne.__webglTexture,tt),F!==0?M.blitFramebuffer(Qt,Rt,lt,mt,Ht,$t,lt,mt,M.COLOR_BUFFER_BIT,M.NEAREST):tn?M.copyTexSubImage3D(ce,tt,Ht,$t,ue+Pe,Qt,Rt,lt,mt):M.copyTexSubImage2D(ce,tt,Ht,$t,Qt,Rt,lt,mt);dt.bindFramebuffer(M.READ_FRAMEBUFFER,null),dt.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else tn?C.isDataTexture||C.isData3DTexture?M.texSubImage3D(ce,tt,Ht,$t,ue,lt,mt,pt,ne,bt,ae.data):N.isCompressedArrayTexture?M.compressedTexSubImage3D(ce,tt,Ht,$t,ue,lt,mt,pt,ne,ae.data):M.texSubImage3D(ce,tt,Ht,$t,ue,lt,mt,pt,ne,bt,ae):C.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,tt,Ht,$t,lt,mt,ne,bt,ae.data):C.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,tt,Ht,$t,ae.width,ae.height,ne,ae.data):M.texSubImage2D(M.TEXTURE_2D,tt,Ht,$t,lt,mt,ne,bt,ae);M.pixelStorei(M.UNPACK_ROW_LENGTH,Vt),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Xe),M.pixelStorei(M.UNPACK_SKIP_PIXELS,bi),M.pixelStorei(M.UNPACK_SKIP_ROWS,Ke),M.pixelStorei(M.UNPACK_SKIP_IMAGES,As),tt===0&&N.generateMipmaps&&M.generateMipmap(ce),dt.unbindTexture()},this.initRenderTarget=function(C){ut.get(C).__webglFramebuffer===void 0&&yt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?yt.setTextureCube(C,0):C.isData3DTexture?yt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?yt.setTexture2DArray(C,0):yt.setTexture2D(C,0),dt.unbindTexture()},this.resetState=function(){S=0,w=0,R=null,dt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}const _l={type:"change"},sA={type:"start"},Sc={type:"end"},Ar=new Pr,Bl=new Pn,Fm=Math.cos(70*cu.DEG2RAD),ge=new Q,Ge=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qa=1e-6;class Um extends Ku{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new de,this._lastTargetPosition=new Q,this._quat=new de().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ZA,this._sphericalDelta=new ZA,this._scale=1,this._panOffset=new Q,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new Q,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Pm.bind(this),this._onPointerDown=Lm.bind(this),this._onPointerUp=km.bind(this),this._onContextMenu=qm.bind(this),this._onMouseWheel=Om.bind(this),this._onKeyDown=Hm.bind(this),this._onTouchStart=Ym.bind(this),this._onTouchMove=Vm.bind(this),this._onMouseDown=Gm.bind(this),this._onMouseMove=zm.bind(this),this._interceptControlDown=Wm.bind(this),this._interceptControlUp=Jm.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_l),this.update(),this.state=ee.NONE}update(t=null){const e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ge:n>Math.PI&&(n-=Ge),s<-Math.PI?s+=Ge:s>Math.PI&&(s-=Ge),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ge.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new Q(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const A=new Q(this._mouse.x,this._mouse.y,0);A.unproject(this.object),this.object.position.sub(A).add(o),this.object.updateMatrixWorld(),a=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ar.origin.copy(this.object.position),Ar.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ar.direction))<Fm?this.object.lookAt(this.target):(Bl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ar.intersectPlane(Bl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Qa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qa||this._lastTargetPosition.distanceToSquared(this.target)>Qa?(this.dispatchEvent(_l),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ge/60*this.autoRotateSpeed*t:Ge/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ge.copy(s).sub(this.target);let r=ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Lm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Pm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function km(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sc),this.state=ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Gm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ee.DOLLY;break;case Ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}break;case Ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(sA)}function zm(i){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Om(i){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(i.preventDefault(),this.dispatchEvent(sA),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Sc))}function Hm(i){this.enabled!==!1&&this._handleKeyDown(i)}function Ym(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ee.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ee.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(sA)}function Vm(i){switch(this._trackPointer(i),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ee.NONE}}function qm(i){this.enabled!==!1&&i.preventDefault()}function Wm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Xm extends ve{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new wt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Oi=new Q,vl=new Xt,Sl=new Xt,bl=new Q,wl=new Q;class Km{constructor(t={}){const e=this;let n,s,r,a;const o={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(g,m){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),vl.copy(m.matrixWorldInverse),Sl.multiplyMatrices(m.projectionMatrix,vl),h(g,g,m),p(g)},this.setSize=function(g,m){n=g,s=m,r=n/2,a=s/2,l.style.width=g+"px",l.style.height=m+"px"};function A(g){g.isCSS2DObject&&(g.element.style.display="none");for(let m=0,f=g.children.length;m<f;m++)A(g.children[m])}function h(g,m,f){if(g.visible===!1){A(g);return}if(g.isCSS2DObject){Oi.setFromMatrixPosition(g.matrixWorld),Oi.applyMatrix4(Sl);const u=Oi.z>=-1&&Oi.z<=1&&g.layers.test(f.layers)===!0,y=g.element;y.style.display=u===!0?"":"none",u===!0&&(g.onBeforeRender(e,m,f),y.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Oi.x*r+r)+"px,"+(-Oi.y*a+a)+"px)",y.parentNode!==l&&l.appendChild(y),g.onAfterRender(e,m,f));const x={distanceToCameraSquared:c(f,g)};o.objects.set(g,x)}for(let u=0,y=g.children.length;u<y;u++)h(g.children[u],m,f)}function c(g,m){return bl.setFromMatrixPosition(g.matrixWorld),wl.setFromMatrixPosition(m.matrixWorld),bl.distanceToSquared(wl)}function d(g){const m=[];return g.traverseVisible(function(f){f.isCSS2DObject&&m.push(f)}),m}function p(g){const m=d(g).sort(function(u,y){if(u.renderOrder!==y.renderOrder)return y.renderOrder-u.renderOrder;const x=o.objects.get(u).distanceToCameraSquared,I=o.objects.get(y).distanceToCameraSquared;return x-I}),f=m.length;for(let u=0,y=m.length;u<y;u++)m[u].element.style.zIndex=f-u}}}const jm=new Ic(-1,1,1,-1,0,1);class Zm extends on{constructor(){super(),this.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Sn([0,2,0,0,2,0],2))}}const $m=new Zm;class bc{constructor(t){this._mesh=new He($m,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,jm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}var _e=Uint8Array,Is=Uint16Array,tE=Int32Array,wc=new _e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Mc=new _e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),eE=new _e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Qc=function(i,t){for(var e=new Is(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var s=new tE(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)s[r]=r-e[n]<<5|n;return{b:e,r:s}},Tc=Qc(wc,2),Dc=Tc.b,nE=Tc.r;Dc[28]=258,nE[258]=28;var iE=Qc(Mc,0),sE=iE.b,Rc=new Is(32768);for(var Ae=0;Ae<32768;++Ae){var $n=(Ae&43690)>>1|(Ae&21845)<<1;$n=($n&52428)>>2|($n&13107)<<2,$n=($n&61680)>>4|($n&3855)<<4,Rc[Ae]=(($n&65280)>>8|($n&255)<<8)>>1}var Cs=function(i,t,e){for(var n=i.length,s=0,r=new Is(t);s<n;++s)i[s]&&++r[i[s]-1];var a=new Is(t);for(s=1;s<t;++s)a[s]=a[s-1]+r[s-1]<<1;var o;{o=new Is(1<<t);var l=15-t;for(s=0;s<n;++s)if(i[s])for(var A=s<<4|i[s],h=t-i[s],c=a[i[s]-1]++<<h,d=c|(1<<h)-1;c<=d;++c)o[Rc[c]>>l]=A}return o},Rs=new _e(288);for(var Ae=0;Ae<144;++Ae)Rs[Ae]=8;for(var Ae=144;Ae<256;++Ae)Rs[Ae]=9;for(var Ae=256;Ae<280;++Ae)Rs[Ae]=7;for(var Ae=280;Ae<288;++Ae)Rs[Ae]=8;var Nc=new _e(32);for(var Ae=0;Ae<32;++Ae)Nc[Ae]=5;var rE=Cs(Rs,9),aE=Cs(Nc,5),Ta=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},hn=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},Da=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},Fc=function(i){return(i+7)/8|0},$i=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new _e(i.subarray(t,e))},oE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Le=function(i,t,e){var n=new Error(t||oE[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Le),!e)throw n;return n},Uc=function(i,t,e,n){var s=i.length,r=n?n.length:0;if(!s||t.f&&!t.l)return e||new _e(0);var a=!e,o=a||t.i!=2,l=t.i;a&&(e=new _e(s*3));var A=function(Nt){var re=e.length;if(Nt>re){var M=new _e(Math.max(re*2,Nt));M.set(e),e=M}},h=t.f||0,c=t.p||0,d=t.b||0,p=t.l,g=t.d,m=t.m,f=t.n,u=s*8;do{if(!p){h=hn(i,c,1);var y=hn(i,c+1,3);if(c+=3,y)if(y==1)p=rE,g=aE,m=9,f=5;else if(y==2){var S=hn(i,c,31)+257,w=hn(i,c+10,15)+4,R=S+hn(i,c+5,31)+1;c+=14;for(var B=new _e(R),_=new _e(19),T=0;T<w;++T)_[eE[T]]=hn(i,c+T*3,7);c+=w*3;for(var L=Ta(_),O=(1<<L)-1,H=Cs(_,L),T=0;T<R;){var J=H[hn(i,c,O)];c+=J&15;var x=J>>4;if(x<16)B[T++]=x;else{var z=0,K=0;for(x==16?(K=3+hn(i,c,3),c+=2,z=B[T-1]):x==17?(K=3+hn(i,c,7),c+=3):x==18&&(K=11+hn(i,c,127),c+=7);K--;)B[T++]=z}}var P=B.subarray(0,S),Z=B.subarray(S);m=Ta(P),f=Ta(Z),p=Cs(P,m),g=Cs(Z,f)}else Le(1);else{var x=Fc(c)+4,I=i[x-4]|i[x-3]<<8,b=x+I;if(b>s){l&&Le(0);break}o&&A(d+I),e.set(i.subarray(x,b),d),t.b=d+=I,t.p=c=b*8,t.f=h;continue}if(c>u){l&&Le(0);break}}o&&A(d+131072);for(var rt=(1<<m)-1,ht=(1<<f)-1,Tt=c;;Tt=c){var z=p[Da(i,c)&rt],Gt=z>>4;if(c+=z&15,c>u){l&&Le(0);break}if(z||Le(2),Gt<256)e[d++]=Gt;else if(Gt==256){Tt=c,p=null;break}else{var Yt=Gt-254;if(Gt>264){var T=Gt-257,Lt=wc[T];Yt=hn(i,c,(1<<Lt)-1)+Dc[T],c+=Lt}var q=g[Da(i,c)&ht],Y=q>>4;q||Le(3),c+=q&15;var Z=sE[Y];if(Y>3){var Lt=Mc[Y];Z+=Da(i,c)&(1<<Lt)-1,c+=Lt}if(c>u){l&&Le(0);break}o&&A(d+131072);var At=d+Yt;if(d<Z){var xt=r-Z,ft=Math.min(Z,At);for(xt+d<0&&Le(3);d<ft;++d)e[d]=n[xt+d]}for(;d<At;++d)e[d]=e[d-Z]}}t.l=p,t.p=Tt,t.b=d,t.f=h,p&&(h=1,t.m=m,t.d=g,t.n=f)}while(!h);return d!=e.length&&a?$i(e,0,d):e.subarray(0,d)},AE=new _e(0),xn=function(i,t){return i[t]|i[t+1]<<8},un=function(i,t){return(i[t]|i[t+1]<<8|i[t+2]<<16|i[t+3]<<24)>>>0},Ra=function(i,t){return un(i,t)+un(i,t+4)*4294967296},lE=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&Le(6,"invalid gzip data");var t=i[3],e=10;t&4&&(e+=(i[10]|i[11]<<8)+2);for(var n=(t>>3&1)+(t>>4&1);n>0;n-=!i[e++]);return e+(t&2)},Na=(function(){function i(t,e){typeof t=="function"&&(e=t,t={}),this.ondata=e;var n=t&&t.dictionary&&t.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new _e(32768),this.p=new _e(0),n&&this.o.set(n)}return i.prototype.e=function(t){if(this.ondata||Le(5),this.d&&Le(4),!this.p.length)this.p=t;else if(t.length){var e=new _e(this.p.length+t.length);e.set(this.p),e.set(t,this.p.length),this.p=e}},i.prototype.c=function(t){this.s.i=+(this.d=t||!1);var e=this.s.b,n=Uc(this.p,this.s,this.o);this.ondata($i(n,e,this.s.b),this.d),this.o=$i(n,this.s.b-32768),this.s.b=this.o.length,this.p=$i(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(t,e){this.e(t),this.c(e)},i})();function cE(i,t){return Uc(i,{i:2},t&&t.out,t&&t.dictionary)}var hE=(function(){function i(t,e){this.v=1,this.r=0,Na.call(this,t,e)}return i.prototype.push=function(t,e){if(Na.prototype.e.call(this,t),this.r+=t.length,this.v){var n=this.p.subarray(this.v-1),s=n.length>3?lE(n):4;if(s>n.length){if(!e)return}else this.v>1&&this.onmember&&this.onmember(this.r-n.length);this.p=n.subarray(s),this.v=0}Na.prototype.c.call(this,e),this.s.f&&!this.s.l&&!e&&(this.v=Fc(this.s.p)+9,this.s={i:0},this.o=new _e(0),this.push(new _e(0),e))},i})(),Uo=typeof TextDecoder<"u"&&new TextDecoder,uE=0;try{Uo.decode(AE,{stream:!0}),uE=1}catch{}var dE=function(i){for(var t="",e=0;;){var n=i[e++],s=(n>127)+(n>223)+(n>239);if(e+s>i.length)return{s:t,r:$i(i,e-1)};s?s==3?(n=((n&15)<<18|(i[e++]&63)<<12|(i[e++]&63)<<6|i[e++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):s&1?t+=String.fromCharCode((n&31)<<6|i[e++]&63):t+=String.fromCharCode((n&15)<<12|(i[e++]&63)<<6|i[e++]&63):t+=String.fromCharCode(n)}};function fE(i,t){if(t){for(var e="",n=0;n<i.length;n+=16384)e+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return e}else{if(Uo)return Uo.decode(i);var s=dE(i),r=s.s,e=s.r;return e.length&&Le(8),r}}var pE=function(i,t){return t+30+xn(i,t+26)+xn(i,t+28)},gE=function(i,t,e){var n=xn(i,t+28),s=fE(i.subarray(t+46,t+46+n),!(xn(i,t+8)&2048)),r=t+46+n,a=un(i,t+20),o=e&&a==4294967295?mE(i,r):[a,un(i,t+24),un(i,t+42)],l=o[0],A=o[1],h=o[2];return[xn(i,t+10),l,A,s,r+xn(i,t+30)+xn(i,t+32),h]},mE=function(i,t){for(;xn(i,t)!=1;t+=4+xn(i,t+2));return[Ra(i,t+12),Ra(i,t+4),Ra(i,t+20)]};function EE(i,t){for(var e={},n=i.length-22;un(i,n)!=101010256;--n)(!n||i.length-n>65558)&&Le(13);var s=xn(i,n+8);if(!s)return{};var r=un(i,n+16),a=r==4294967295||s==65535;if(a){var o=un(i,n-12);a=un(i,o)==101075792,a&&(s=un(i,o+32),r=un(i,o+48))}for(var l=t&&t.filter,A=0;A<s;++A){var h=gE(i,r,a),c=h[0],d=h[1],p=h[2],g=h[3],m=h[4],f=h[5],u=pE(i,f);r=m,(!l||l({name:g,size:d,originalSize:p,compression:c}))&&(c?c==8?e[g]=cE(i.subarray(u,u+d),{out:new _e(p)}):Le(14,"unknown compression type "+c):e[g]=$i(i,u,u+d))}return e}let Hn;const Lc=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&Lc.decode();let gs=null;function IE(){return(gs===null||gs.byteLength===0)&&(gs=new Uint8Array(Hn.memory.buffer)),gs}function CE(i,t){return i=i>>>0,Lc.decode(IE().subarray(i,i+t))}function xE(i,t,e,n,s,r,a,o,l,A,h,c,d){return Hn.raycast_splats(i,t,e,n,s,r,a,o,l,A,h,c,d)}async function yE(i,t){if(typeof Response=="function"&&i instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(i,t)}catch(n){if(i.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}const e=await i.arrayBuffer();return await WebAssembly.instantiate(e,t)}else{const e=await WebAssembly.instantiate(i,t);return e instanceof WebAssembly.Instance?{instance:e,module:i}:e}}function _E(){const i={};return i.wbg={},i.wbg.__wbg_buffer_609cc3eee51ed158=function(t){return t.buffer},i.wbg.__wbg_length_3b4f022188ae8db6=function(t){return t.length},i.wbg.__wbg_length_6ca527665d89694d=function(t){return t.length},i.wbg.__wbg_length_8cfd2c6409af88ad=function(t){return t.length},i.wbg.__wbg_new_9fee97a409b32b68=function(t){return new Uint16Array(t)},i.wbg.__wbg_new_e3b321dcfef89fc7=function(t){return new Uint32Array(t)},i.wbg.__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354=function(t,e,n){return new Float32Array(t,e>>>0,n>>>0)},i.wbg.__wbg_newwithbyteoffsetandlength_f1dead44d1fc7212=function(t,e,n){return new Uint32Array(t,e>>>0,n>>>0)},i.wbg.__wbg_newwithlength_5a5efe313cfd59f1=function(t){return new Float32Array(t>>>0)},i.wbg.__wbg_set_10bad9bee0e9c58b=function(t,e,n){t.set(e,n>>>0)},i.wbg.__wbg_set_d23661d19148b229=function(t,e,n){t.set(e,n>>>0)},i.wbg.__wbg_set_f4f1f0daa30696fc=function(t,e,n){t.set(e,n>>>0)},i.wbg.__wbg_subarray_3aaeec89bb2544f0=function(t,e,n){return t.subarray(e>>>0,n>>>0)},i.wbg.__wbg_subarray_769e1e0f81bb259b=function(t,e,n){return t.subarray(e>>>0,n>>>0)},i.wbg.__wbindgen_init_externref_table=function(){const t=Hn.__wbindgen_export_0,e=t.grow(4);t.set(0,void 0),t.set(e+0,void 0),t.set(e+1,null),t.set(e+2,!0),t.set(e+3,!1)},i.wbg.__wbindgen_memory=function(){return Hn.memory},i.wbg.__wbindgen_throw=function(t,e){throw new Error(CE(t,e))},i}function BE(i,t){return Hn=i.exports,Pc.__wbindgen_wasm_module=t,gs=null,Hn.__wbindgen_start(),Hn}async function Pc(i){if(Hn!==void 0)return Hn;typeof i<"u"&&(Object.getPrototypeOf(i)===Object.prototype?{module_or_path:i}=i:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof i>"u"&&(i=new URL("data:application/wasm;base64,AGFzbQEAAAABzAEeYAJ/fwF/YAJ/fwBgA39/fwF/YAF/AX9gA39/fwBgAX8AYAV/f39/fwBgA29/fwFvYAV/f39/fwF/YAFvAW9gA29vfwBgAW8Bf2AAAX9gBH9/f38AYAAAYAR/f39/AX9gA39vbwF/YAF/AW9gAAFvYAF9AX1gBn9/f39/fwBgDX19fX19fX19f29/fX0Bb2AGf39/f39/AX9gBX9/fH9/AGAEf3x/fwBgBX9/fX9/AGAEf31/fwBgBX9/fn9/AGAEf35/fwBgAn19AX0C8gQRA3diZx1fX3diZ19idWZmZXJfNjA5Y2MzZWVlNTFlZDE1OAAJA3diZxpfX3diZ19uZXdfOWZlZTk3YTQwOWIzMmI2OAAJA3diZxpfX3diZ19zZXRfZjRmMWYwZGFhMzA2OTZmYwAKA3diZx1fX3diZ19sZW5ndGhfOGNmZDJjNjQwOWFmODhhZAALA3diZzFfX3diZ19uZXd3aXRoYnl0ZW9mZnNldGFuZGxlbmd0aF9mMWRlYWQ0NGQxZmM3MjEyAAcDd2JnGl9fd2JnX25ld19lM2IzMjFkY2ZlZjg5ZmM3AAkDd2JnGl9fd2JnX3NldF9kMjM2NjFkMTkxNDhiMjI5AAoDd2JnHV9fd2JnX2xlbmd0aF82Y2E1Mjc2NjVkODk2OTRkAAsDd2JnMV9fd2JnX25ld3dpdGhieXRlb2Zmc2V0YW5kbGVuZ3RoX2U2YjdlNjlhY2Q0YzczNTQABwN3YmcaX193Ymdfc2V0XzEwYmFkOWJlZTBlOWM1OGIACgN3YmcdX193YmdfbGVuZ3RoXzNiNGYwMjIxODhhZThkYjYACwN3YmcfX193Ymdfc3ViYXJyYXlfNzY5ZTFlMGY4MWJiMjU5YgAHA3diZx9fX3diZ19zdWJhcnJheV8zYWFlZWM4OWJiMjU0NGYwAAcDd2JnJF9fd2JnX25ld3dpdGhsZW5ndGhfNWE1ZWZlMzEzY2ZkNTlmMQARA3diZxBfX3diaW5kZ2VuX3Rocm93AAEDd2JnEV9fd2JpbmRnZW5fbWVtb3J5ABIDd2JnH19fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUADgNhYAMAAQIIBQQCEwEMAAEBAgAAAQwBBAYFBQQAAQYFFAENBAAGBQQEAQQOAgECAQAIBAAVARYGCBcZGwUNAhAQBR0FAQMPAAIDAwMADAAAAQEBAAAABAECAAEAAQAAAQEDAwQJAnABLi5vAIABBQMBABEGCQF/AUGAgMAACwdiBgZtZW1vcnkCAAtzb3J0X3NwbGF0cwBNDXNvcnQzMl9zcGxhdHMATg5yYXljYXN0X3NwbGF0cwBCE19fd2JpbmRnZW5fZXhwb3J0XzABARBfX3diaW5kZ2VuX3N0YXJ0ABAJMwEAQQELLVhZV1xBZ0YuRUZETEtFRUhHST5RN086IWlfXmE7YGpKMiQrbk88IGtsVVpiYwrF3wFghCQCCX8BfiMAQRBrIggkAAJ/AkACQAJAAkACQAJAIABB9QFPBEBBACAAQc3/e08NBxogAEELaiIBQXhxIQVB7JbAACgCACIJRQ0EQR8hB0EAIAVrIQQgAEH0//8HTQRAIAVBBiABQQh2ZyIAa3ZBAXEgAEEBdGtBPmohBwsgB0ECdEHQk8AAaigCACIBRQRAQQAhAAwCC0EAIQAgBUEZIAdBAXZrQQAgB0EfRxt0IQMDQAJAIAEoAgRBeHEiBiAFSQ0AIAYgBWsiBiAETw0AIAEhAiAGIgQNAEEAIQQgASEADAQLIAEoAhQiBiAAIAYgASADQR12QQRxakEQaigCACIBRxsgACAGGyEAIANBAXQhAyABDQALDAELQeiWwAAoAgAiAkEQIABBC2pB+ANxIABBC0kbIgVBA3YiAHYiAUEDcQRAAkAgAUF/c0EBcSAAaiIGQQN0IgBB4JTAAGoiAyAAQeiUwABqKAIAIgEoAggiBEcEQCAEIAM2AgwgAyAENgIIDAELQeiWwAAgAkF+IAZ3cTYCAAsgASAAQQNyNgIEIAAgAWoiACAAKAIEQQFyNgIEIAFBCGoMBwsgBUHwlsAAKAIATQ0DAkACQCABRQRAQeyWwAAoAgAiAEUNBiAAaEECdEHQk8AAaigCACICKAIEQXhxIAVrIQQgAiEBA0ACQCACKAIQIgANACACKAIUIgANACABKAIYIQcCQAJAIAEgASgCDCIARgRAIAFBFEEQIAEoAhQiABtqKAIAIgINAUEAIQAMAgsgASgCCCICIAA2AgwgACACNgIIDAELIAFBFGogAUEQaiAAGyEDA0AgAyEGIAIiAEEUaiAAQRBqIAAoAhQiAhshAyAAQRRBECACG2ooAgAiAg0ACyAGQQA2AgALIAdFDQQgASABKAIcQQJ0QdCTwABqIgIoAgBHBEAgB0EQQRQgBygCECABRhtqIAA2AgAgAEUNBQwECyACIAA2AgAgAA0DQeyWwABB7JbAACgCAEF+IAEoAhx3cTYCAAwECyAAKAIEQXhxIAVrIgIgBCACIARJIgIbIQQgACABIAIbIQEgACECDAALAAsCQEECIAB0IgNBACADa3IgASAAdHFoIgZBA3QiAUHglMAAaiIDIAFB6JTAAGooAgAiACgCCCIERwRAIAQgAzYCDCADIAQ2AggMAQtB6JbAACACQX4gBndxNgIACyAAIAVBA3I2AgQgACAFaiIGIAEgBWsiA0EBcjYCBCAAIAFqIAM2AgBB8JbAACgCACIEBEAgBEF4cUHglMAAaiEBQfiWwAAoAgAhAgJ/QeiWwAAoAgAiBUEBIARBA3Z0IgRxRQRAQeiWwAAgBCAFcjYCACABDAELIAEoAggLIQQgASACNgIIIAQgAjYCDCACIAE2AgwgAiAENgIIC0H4lsAAIAY2AgBB8JbAACADNgIAIABBCGoMCAsgACAHNgIYIAEoAhAiAgRAIAAgAjYCECACIAA2AhgLIAEoAhQiAkUNACAAIAI2AhQgAiAANgIYCwJAAkAgBEEQTwRAIAEgBUEDcjYCBCABIAVqIgMgBEEBcjYCBCADIARqIAQ2AgBB8JbAACgCACIGRQ0BIAZBeHFB4JTAAGohAEH4lsAAKAIAIQICf0HolsAAKAIAIgVBASAGQQN2dCIGcUUEQEHolsAAIAUgBnI2AgAgAAwBCyAAKAIICyEGIAAgAjYCCCAGIAI2AgwgAiAANgIMIAIgBjYCCAwBCyABIAQgBWoiAEEDcjYCBCAAIAFqIgAgACgCBEEBcjYCBAwBC0H4lsAAIAM2AgBB8JbAACAENgIACyABQQhqDAYLIAAgAnJFBEBBACECQQIgB3QiAEEAIABrciAJcSIARQ0DIABoQQJ0QdCTwABqKAIAIQALIABFDQELA0AgACACIAAoAgRBeHEiAyAFayIGIARJIgcbIQkgACgCECIBRQRAIAAoAhQhAQsgAiAJIAMgBUkiABshAiAEIAYgBCAHGyAAGyEEIAEiAA0ACwsgAkUNACAFQfCWwAAoAgAiAE0gBCAAIAVrT3ENACACKAIYIQcCQAJAIAIgAigCDCIARgRAIAJBFEEQIAIoAhQiABtqKAIAIgENAUEAIQAMAgsgAigCCCIBIAA2AgwgACABNgIIDAELIAJBFGogAkEQaiAAGyEDA0AgAyEGIAEiAEEUaiAAQRBqIAAoAhQiARshAyAAQRRBECABG2ooAgAiAQ0ACyAGQQA2AgALIAdFDQIgAiACKAIcQQJ0QdCTwABqIgEoAgBHBEAgB0EQQRQgBygCECACRhtqIAA2AgAgAEUNAwwCCyABIAA2AgAgAA0BQeyWwABB7JbAACgCAEF+IAIoAhx3cTYCAAwCCwJAAkACQAJAAkAgBUHwlsAAKAIAIgFLBEAgBUH0lsAAKAIAIgBPBEAgBUGvgARqQYCAfHEiAkEQdkAAIQAgCEEEaiIBQQA2AgggAUEAIAJBgIB8cSAAQX9GIgIbNgIEIAFBACAAQRB0IAIbNgIAQQAgCCgCBCIBRQ0JGiAIKAIMIQZBgJfAACAIKAIIIgRBgJfAACgCAGoiADYCAEGEl8AAQYSXwAAoAgAiAiAAIAAgAkkbNgIAAkACQEH8lsAAKAIAIgIEQEHQlMAAIQADQCABIAAoAgAiAyAAKAIEIgdqRg0CIAAoAggiAA0ACwwCC0GMl8AAKAIAIgBBACAAIAFNG0UEQEGMl8AAIAE2AgALQZCXwABB/x82AgBB3JTAACAGNgIAQdSUwAAgBDYCAEHQlMAAIAE2AgBB7JTAAEHglMAANgIAQfSUwABB6JTAADYCAEHolMAAQeCUwAA2AgBB/JTAAEHwlMAANgIAQfCUwABB6JTAADYCAEGElcAAQfiUwAA2AgBB+JTAAEHwlMAANgIAQYyVwABBgJXAADYCAEGAlcAAQfiUwAA2AgBBlJXAAEGIlcAANgIAQYiVwABBgJXAADYCAEGclcAAQZCVwAA2AgBBkJXAAEGIlcAANgIAQaSVwABBmJXAADYCAEGYlcAAQZCVwAA2AgBBrJXAAEGglcAANgIAQaCVwABBmJXAADYCAEGolcAAQaCVwAA2AgBBtJXAAEGolcAANgIAQbCVwABBqJXAADYCAEG8lcAAQbCVwAA2AgBBuJXAAEGwlcAANgIAQcSVwABBuJXAADYCAEHAlcAAQbiVwAA2AgBBzJXAAEHAlcAANgIAQciVwABBwJXAADYCAEHUlcAAQciVwAA2AgBB0JXAAEHIlcAANgIAQdyVwABB0JXAADYCAEHYlcAAQdCVwAA2AgBB5JXAAEHYlcAANgIAQeCVwABB2JXAADYCAEHslcAAQeCVwAA2AgBB9JXAAEHolcAANgIAQeiVwABB4JXAADYCAEH8lcAAQfCVwAA2AgBB8JXAAEHolcAANgIAQYSWwABB+JXAADYCAEH4lcAAQfCVwAA2AgBBjJbAAEGAlsAANgIAQYCWwABB+JXAADYCAEGUlsAAQYiWwAA2AgBBiJbAAEGAlsAANgIAQZyWwABBkJbAADYCAEGQlsAAQYiWwAA2AgBBpJbAAEGYlsAANgIAQZiWwABBkJbAADYCAEGslsAAQaCWwAA2AgBBoJbAAEGYlsAANgIAQbSWwABBqJbAADYCAEGolsAAQaCWwAA2AgBBvJbAAEGwlsAANgIAQbCWwABBqJbAADYCAEHElsAAQbiWwAA2AgBBuJbAAEGwlsAANgIAQcyWwABBwJbAADYCAEHAlsAAQbiWwAA2AgBB1JbAAEHIlsAANgIAQciWwABBwJbAADYCAEHclsAAQdCWwAA2AgBB0JbAAEHIlsAANgIAQeSWwABB2JbAADYCAEHYlsAAQdCWwAA2AgBB/JbAACABQQ9qQXhxIgBBCGsiAjYCAEHglsAAQdiWwAA2AgBB9JbAACAEQShrIgMgASAAa2pBCGoiADYCACACIABBAXI2AgQgASADakEoNgIEQYiXwABBgICAATYCAAwICyACIANJIAEgAk1yDQAgACgCDCIDQQFxDQAgA0EBdiAGRg0DC0GMl8AAQYyXwAAoAgAiACABIAAgAUkbNgIAIAEgBGohA0HQlMAAIQACQAJAA0AgAyAAKAIAIgdHBEAgACgCCCIADQEMAgsLIAAoAgwiA0EBcQ0AIANBAXYgBkYNAQtB0JTAACEAA0ACQCACIAAoAgAiA08EQCACIAMgACgCBGoiB0kNAQsgACgCCCEADAELC0H8lsAAIAFBD2pBeHEiAEEIayIDNgIAQfSWwAAgBEEoayIJIAEgAGtqQQhqIgA2AgAgAyAAQQFyNgIEIAEgCWpBKDYCBEGIl8AAQYCAgAE2AgAgAiAHQSBrQXhxQQhrIgAgACACQRBqSRsiA0EbNgIEQdCUwAApAgAhCiADQRBqQdiUwAApAgA3AgAgAyAKNwIIQdyUwAAgBjYCAEHUlMAAIAQ2AgBB0JTAACABNgIAQdiUwAAgA0EIajYCACADQRxqIQADQCAAQQc2AgAgAEEEaiIAIAdJDQALIAIgA0YNByADIAMoAgRBfnE2AgQgAiADIAJrIgBBAXI2AgQgAyAANgIAIABBgAJPBEAgAiAAECIMCAsgAEH4AXFB4JTAAGohAQJ/QeiWwAAoAgAiA0EBIABBA3Z0IgBxRQRAQeiWwAAgACADcjYCACABDAELIAEoAggLIQAgASACNgIIIAAgAjYCDCACIAE2AgwgAiAANgIIDAcLIAAgATYCACAAIAAoAgQgBGo2AgQgAUEPakF4cUEIayICIAVBA3I2AgQgB0EPakF4cUEIayIEIAIgBWoiAGshBSAEQfyWwAAoAgBGDQMgBEH4lsAAKAIARg0EIAQoAgQiAUEDcUEBRgRAIAQgAUF4cSIBEB4gASAFaiEFIAEgBGoiBCgCBCEBCyAEIAFBfnE2AgQgACAFQQFyNgIEIAAgBWogBTYCACAFQYACTwRAIAAgBRAiDAYLIAVB+AFxQeCUwABqIQECf0HolsAAKAIAIgNBASAFQQN2dCIEcUUEQEHolsAAIAMgBHI2AgAgAQwBCyABKAIICyEDIAEgADYCCCADIAA2AgwgACABNgIMIAAgAzYCCAwFC0H0lsAAIAAgBWsiATYCAEH8lsAAQfyWwAAoAgAiACAFaiICNgIAIAIgAUEBcjYCBCAAIAVBA3I2AgQgAEEIagwIC0H4lsAAKAIAIQACQCABIAVrIgJBD00EQEH4lsAAQQA2AgBB8JbAAEEANgIAIAAgAUEDcjYCBCAAIAFqIgEgASgCBEEBcjYCBAwBC0HwlsAAIAI2AgBB+JbAACAAIAVqIgM2AgAgAyACQQFyNgIEIAAgAWogAjYCACAAIAVBA3I2AgQLIABBCGoMBwsgACAEIAdqNgIEQfyWwABB/JbAACgCACIAQQ9qQXhxIgFBCGsiAjYCAEH0lsAAQfSWwAAoAgAgBGoiAyAAIAFrakEIaiIBNgIAIAIgAUEBcjYCBCAAIANqQSg2AgRBiJfAAEGAgIABNgIADAMLQfyWwAAgADYCAEH0lsAAQfSWwAAoAgAgBWoiATYCACAAIAFBAXI2AgQMAQtB+JbAACAANgIAQfCWwABB8JbAACgCACAFaiIBNgIAIAAgAUEBcjYCBCAAIAFqIAE2AgALIAJBCGoMAwtBAEH0lsAAKAIAIgAgBU0NAhpB9JbAACAAIAVrIgE2AgBB/JbAAEH8lsAAKAIAIgAgBWoiAjYCACACIAFBAXI2AgQgACAFQQNyNgIEIABBCGoMAgsgACAHNgIYIAIoAhAiAQRAIAAgATYCECABIAA2AhgLIAIoAhQiAUUNACAAIAE2AhQgASAANgIYCwJAIARBEE8EQCACIAVBA3I2AgQgAiAFaiIAIARBAXI2AgQgACAEaiAENgIAIARBgAJPBEAgACAEECIMAgsgBEH4AXFB4JTAAGohAQJ/QeiWwAAoAgAiA0EBIARBA3Z0IgRxRQRAQeiWwAAgAyAEcjYCACABDAELIAEoAggLIQMgASAANgIIIAMgADYCDCAAIAE2AgwgACADNgIIDAELIAIgBCAFaiIAQQNyNgIEIAAgAmoiACAAKAIEQQFyNgIECyACQQhqCyAIQRBqJAALxgYBCH8CQAJAIAEgAEEDakF8cSICIABrIghJDQAgASAIayIGQQRJDQAgBkEDcSEHQQAhAQJAIAAgAkYiCQ0AAkAgACACayIEQXxLBEBBACECDAELQQAhAgNAIAEgACACaiIDLAAAQb9/SmogA0EBaiwAAEG/f0pqIANBAmosAABBv39KaiADQQNqLAAAQb9/SmohASACQQRqIgINAAsLIAkNACAAIAJqIQMDQCABIAMsAABBv39KaiEBIANBAWohAyAEQQFqIgQNAAsLIAAgCGohAgJAIAdFDQAgAiAGQXxxaiIALAAAQb9/SiEFIAdBAUYNACAFIAAsAAFBv39KaiEFIAdBAkYNACAFIAAsAAJBv39KaiEFCyAGQQJ2IQYgASAFaiEEA0AgAiEAIAZFDQJBwAEgBiAGQcABTxsiBUEDcSEHIAVBAnQhCEEAIQMgBkEETwRAIAAgCEHwB3FqIQkgACEBA0AgASgCACICQX9zQQd2IAJBBnZyQYGChAhxIANqIAEoAgQiAkF/c0EHdiACQQZ2ckGBgoQIcWogASgCCCICQX9zQQd2IAJBBnZyQYGChAhxaiABKAIMIgJBf3NBB3YgAkEGdnJBgYKECHFqIQMgAUEQaiIBIAlHDQALCyAGIAVrIQYgACAIaiECIANBCHZB/4H8B3EgA0H/gfwHcWpBgYAEbEEQdiAEaiEEIAdFDQALAn8gACAFQfwBcUECdGoiACgCACIBQX9zQQd2IAFBBnZyQYGChAhxIgEgB0EBRg0AGiABIAAoAgQiAUF/c0EHdiABQQZ2ckGBgoQIcWoiASAHQQJGDQAaIAAoAggiAEF/c0EHdiAAQQZ2ckGBgoQIcSABagsiAUEIdkH/gRxxIAFB/4H8B3FqQYGABGxBEHYgBGoPCyABRQRAQQAPCyABQQNxIQICQCABQQRJBEAMAQsgAUF8cSEFA0AgBCAAIANqIgEsAABBv39KaiABQQFqLAAAQb9/SmogAUECaiwAAEG/f0pqIAFBA2osAABBv39KaiEEIAUgA0EEaiIDRw0ACwsgAkUNACAAIANqIQEDQCAEIAEsAABBv39KaiEEIAFBAWohASACQQFrIgINAAsLIAQL3QUBBX8gACgCCCIDIAFJBEAgASADIgJrIgQgACgCACACa0sEQCAAIAIgBEEEQQQQJiAAKAIIIQILIAAoAgQiBiACQQJ0aiEFIARBAk8EQCAFIANBf3MgAWpBAnQQKhogASACakECdCADQQJ0ayAGakEEayEFIAIgBGpBAWshAgsgBUEANgIAIAAgAkEBajYCCAsgACgCFCIDIAFJBEAgASADIgJrIgQgACgCDCACa0sEQCAAQQxqIAIgBEEEQQQQJiAAKAIUIQILIAAoAhAiBiACQQJ0aiEFIARBAk8EQCAFIANBf3MgAWpBAnQQKhogASACakECdCADQQJ0ayAGakEEayEFIAIgBGpBAWshAgsgBUEANgIAIAAgAkEBajYCFAsgACgCOCIDIAFJBEAgASADIgJrIgQgACgCMCACa0sEQCAAQTBqIAIgBEEEQQQQJiAAKAI4IQILIAAoAjQiBiACQQJ0aiEFIARBAk8EQCAFIANBf3MgAWpBAnQQKhogASACakECdCADQQJ0ayAGakEEayEFIAIgBGpBAWshAgsgBUEANgIAIAAgAkEBajYCOAsgACgCICIDQf//A00EQCADIQFBgIAEIANrIgIgACgCGCADa0sEQCAAQRhqIAMgAkEEQQQQJiAAKAIgIQELIAAoAhwiBSABQQJ0IgRqIQIgA0H//wNHBEAgAkH8/w8gA0ECdCICaxAqGiAEIAJrIAVqQfz/D2ohAiABIANrQf//A2ohAQsgAkEANgIAIAAgAUEBajYCIAsgACgCLCIDQf//A00EQCADIQFBgIAEIANrIgIgACgCJCADa0sEQCAAQSRqIAMgAkEEQQQQJiAAKAIsIQELIAAoAigiBSABQQJ0IgRqIQIgA0H//wNHBEAgAkH8/w8gA0ECdCICaxAqGiAEIAJrIAVqQfz/D2ohAiABIANrQf//A2ohAQsgAkEANgIAIAAgAUEBajYCLAsLqQUBB38CQCAAKAIIQQFxRSIEIAAoAgAiCUVxRQRAAkAgBA0AIAEgAmohBwJAIAAoAgwiBkUEQCABIQQMAQsgASEEA0AgBCIDIAdGDQICfyADQQFqIAMsAAAiCEEATg0AGiADQQJqIAhBYEkNABogA0EDaiAIQXBJDQAaIANBBGoLIgQgA2sgBWohBSAGQQFrIgYNAAsLIAQgB0YNACAELAAAGiAFIAICfwJAIAVFDQAgAiAFSwRAIAEgBWosAABBv39KDQFBAAwCCyACIAVGDQBBAAwBCyABCyIDGyECIAMgASADGyEBCyAJRQ0BIAAoAgQhBwJAIAJBEE8EQCABIAIQEiEDDAELIAJFBEBBACEDDAELIAJBA3EhBgJAIAJBBEkEQEEAIQNBACEFDAELIAJBDHEhCEEAIQNBACEFA0AgAyABIAVqIgQsAABBv39KaiAEQQFqLAAAQb9/SmogBEECaiwAAEG/f0pqIARBA2osAABBv39KaiEDIAggBUEEaiIFRw0ACwsgBkUNACABIAVqIQQDQCADIAQsAABBv39KaiEDIARBAWohBCAGQQFrIgYNAAsLAkAgAyAHSQRAIAcgA2shBEEAIQMCQAJAAkAgAC0AIEEBaw4CAAECCyAEIQNBACEEDAELIARBAXYhAyAEQQFqQQF2IQQLIANBAWohAyAAKAIQIQYgACgCGCEFIAAoAhQhAANAIANBAWsiA0UNAiAAIAYgBSgCEBEAAEUNAAtBAQ8LDAILIAAgASACIAUoAgwRAgAEQEEBDwtBACEDA0AgAyAERgRAQQAPCyADQQFqIQMgACAGIAUoAhARAABFDQALIANBAWsgBEkPCyAAKAIUIAEgAiAAKAIYKAIMEQIADwsgACgCFCABIAIgACgCGCgCDBECAAu/BQEIf0ErQYCAxAAgACgCHCIIQQFxIgYbIQwgBCAGaiEGAkAgCEEEcUUEQEEAIQEMAQsCQCACQRBPBEAgASACEBIhBQwBCyACRQRADAELIAJBA3EhCQJAIAJBBEkEQAwBCyACQQxxIQoDQCAFIAEgB2oiCywAAEG/f0pqIAtBAWosAABBv39KaiALQQJqLAAAQb9/SmogC0EDaiwAAEG/f0pqIQUgCiAHQQRqIgdHDQALCyAJRQ0AIAEgB2ohBwNAIAUgBywAAEG/f0pqIQUgB0EBaiEHIAlBAWsiCQ0ACwsgBSAGaiEGCyAAKAIARQRAIAAoAhQiBiAAKAIYIgAgDCABIAIQPwRAQQEPCyAGIAMgBCAAKAIMEQIADwsCQAJAAkAgBiAAKAIEIgdPBEAgACgCFCIGIAAoAhgiACAMIAEgAhA/RQ0BQQEPCyAIQQhxRQ0BIAAoAhAhCCAAQTA2AhAgAC0AICEKQQEhBSAAQQE6ACAgACgCFCIJIAAoAhgiCyAMIAEgAhA/DQIgByAGa0EBaiEFAkADQCAFQQFrIgVFDQEgCUEwIAsoAhARAABFDQALQQEPCyAJIAMgBCALKAIMEQIABEBBAQ8LIAAgCjoAICAAIAg2AhBBAA8LIAYgAyAEIAAoAgwRAgAhBQwBCyAHIAZrIQYCQAJAAkAgAC0AICIFQQFrDgMAAQACCyAGIQVBACEGDAELIAZBAXYhBSAGQQFqQQF2IQYLIAVBAWohBSAAKAIQIQogACgCGCEIIAAoAhQhAAJAA0AgBUEBayIFRQ0BIAAgCiAIKAIQEQAARQ0AC0EBDwtBASEFIAAgCCAMIAEgAhA/DQAgACADIAQgCCgCDBECAA0AQQAhBQNAIAUgBkYEQEEADwsgBUEBaiEFIAAgCiAIKAIQEQAARQ0ACyAFQQFrIAZJDwsgBQv+BQEFfyAAQQhrIgEgAEEEaygCACIDQXhxIgBqIQICQAJAIANBAXENACADQQJxRQ0BIAEoAgAiAyAAaiEAIAEgA2siAUH4lsAAKAIARgRAIAIoAgRBA3FBA0cNAUHwlsAAIAA2AgAgAiACKAIEQX5xNgIEIAEgAEEBcjYCBCACIAA2AgAPCyABIAMQHgsCQAJAAkACQAJAIAIoAgQiA0ECcUUEQCACQfyWwAAoAgBGDQIgAkH4lsAAKAIARg0DIAIgA0F4cSICEB4gASAAIAJqIgBBAXI2AgQgACABaiAANgIAIAFB+JbAACgCAEcNAUHwlsAAIAA2AgAPCyACIANBfnE2AgQgASAAQQFyNgIEIAAgAWogADYCAAsgAEGAAkkNAiABIAAQIkEAIQFBkJfAAEGQl8AAKAIAQQFrIgA2AgAgAA0EQdiUwAAoAgAiAARAA0AgAUEBaiEBIAAoAggiAA0ACwtBkJfAAEH/HyABIAFB/x9NGzYCAA8LQfyWwAAgATYCAEH0lsAAQfSWwAAoAgAgAGoiADYCACABIABBAXI2AgRB+JbAACgCACABRgRAQfCWwABBADYCAEH4lsAAQQA2AgALIABBiJfAACgCACIDTQ0DQfyWwAAoAgAiAkUNA0EAIQBB9JbAACgCACIEQSlJDQJB0JTAACEBA0AgAiABKAIAIgVPBEAgAiAFIAEoAgRqSQ0ECyABKAIIIQEMAAsAC0H4lsAAIAE2AgBB8JbAAEHwlsAAKAIAIABqIgA2AgAgASAAQQFyNgIEIAAgAWogADYCAA8LIABB+AFxQeCUwABqIQICf0HolsAAKAIAIgNBASAAQQN2dCIAcUUEQEHolsAAIAAgA3I2AgAgAgwBCyACKAIICyEAIAIgATYCCCAAIAE2AgwgASACNgIMIAEgADYCCA8LQdiUwAAoAgAiAQRAA0AgAEEBaiEAIAEoAggiAQ0ACwtBkJfAAEH/HyAAIABB/x9NGzYCACADIARPDQBBiJfAAEF/NgIACwvpBAEFfwJ/AkAgAkECTwRAIAEoAgQiBEH//wFxRQRAIARBEHQMAwsgBEH/B3EhBSAEQYCAAnEhAyAEQYD4AXEiBkGA+AFGBEAgA0EQdCEDIANBgICA/AdyIAVFDQMaIAMgBUENdHJBgICA/gdyDAMLIANBEHQhAyAGRQ0BIAZBDXRBgICA/ABxIAVBDXRyQYCAgMADaiADcgwCC0EBQQFB9IHAABA1AAsgBSAFZ0EQayIFQf//A3FBCGp0Qf///wNxIANBgICA2ANyIAVBF3RrcgshBQJ/IARBgIB8cSAEQRB2IgNB//8BcUUNABogA0H/B3EhBCADQYCAAnEhBiADQYD4AXEiB0GA+AFGBEAgBkEQdCEGIAZBgICA/AdyIARFDQEaIAYgA0ENdHJBgICA/gdyDAELIAZBEHQhAyAHQQ10QYCAgPwAcSAEQQ10ckGAgIDAA2ogA3IgBw0AGiAEIARnQRBrIgRB//8DcUEIanRB////A3EgA0GAgIDYA3IgBEEXdGtyCyEEIAACfwJAIAJBAkcEQCABKAIIIgJB//8BcUUEQCACQRB0DAMLIAJB/wdxIQEgAkGAgAJxIQMgAkGA+AFxIgJBgPgBRgRAIANBEHQhAiACQYCAgPwHciABRQ0DGiACIAFBDXRyQYCAgP4HcgwDCyADQRB0IQMgAkUNASACQQ10QYCAgPwAcSABQQ10ckGAgIDAA2ogA3IMAgtBAkECQYSCwAAQNQALIAEgAWdBEGsiAUH//wNxQQhqdEH///8DcSADQYCAgNgDciABQRd0a3ILNgIIIAAgBDYCBCAAIAU2AgAL6wQBCn8jAEEwayIDJAAgA0EDOgAsIANBIDYCHCADQQA2AiggAyABNgIkIAMgADYCICADQQA2AhQgA0EANgIMAn8CQAJAAkAgAigCECIKRQRAIAIoAgwiAEUNASACKAIIIgEgAEEDdGohBCAAQQFrQf////8BcUEBaiEHIAIoAgAhAANAIABBBGooAgAiBQRAIAMoAiAgACgCACAFIAMoAiQoAgwRAgANBAsgASgCACADQQxqIAEoAgQRAAANAyAAQQhqIQAgAUEIaiIBIARHDQALDAELIAIoAhQiAEUNACAAQQV0IQsgAEEBa0H///8/cUEBaiEHIAIoAgghBSACKAIAIQADQCAAQQRqKAIAIgEEQCADKAIgIAAoAgAgASADKAIkKAIMEQIADQMLIAMgCCAKaiIBQRBqKAIANgIcIAMgAUEcai0AADoALCADIAFBGGooAgA2AiggAUEMaigCACEEQQAhCUEAIQYCQAJAAkAgAUEIaigCAEEBaw4CAAIBCyAEQQN0IAVqIgwoAgANASAMKAIEIQQLQQEhBgsgAyAENgIQIAMgBjYCDCABQQRqKAIAIQQCQAJAAkAgASgCAEEBaw4CAAIBCyAEQQN0IAVqIgYoAgANASAGKAIEIQQLQQEhCQsgAyAENgIYIAMgCTYCFCAFIAFBFGooAgBBA3RqIgEoAgAgA0EMaiABKAIEEQAADQIgAEEIaiEAIAsgCEEgaiIIRw0ACwsgByACKAIETw0BIAMoAiAgAigCACAHQQN0aiIAKAIAIAAoAgQgAygCJCgCDBECAEUNAQtBAQwBC0EACyADQTBqJAALsgQCAn0EfyMAQRBrIQQgALwiBUEfdiEGAkACfSAAAn8CQAJAAkACQCAFQf////8HcSIDQdDYupUETwRAIANBgICA/AdLBEAgAA8LIAVBAEgiBUUgA0GX5MWVBEtxDQIgBUUNASAEQwAAgIAgAJU4AgggBCoCCBogA0G047+WBE0NAQwHCyADQZjkxfUDTQRAIANBgICAyANNDQNBACEDIAAMBgsgA0GSq5T8A00NAwsgAEM7qrg/lCAGQQJ0QYiSwABqKgIAkiIBQwAAAM9gIQRB/////wcCfyABi0MAAABPXQRAIAGoDAELQYCAgIB4C0GAgICAeCAEGyABQ////05eG0EAIAEgAVsbDAMLIABDAAAAf5QPCyAEIABDAAAAf5I4AgwgBCoCDBogAEMAAIA/kg8LIAZFIAZrCyIDsiIBQwByMb+UkiIAIAFDjr6/NZQiApMLIQEgACABIAEgASABlCIAIABDFVI1u5RDj6oqPpKUkyIAlEMAAABAIACTlSACk5JDAACAP5IhASADRQ0AAkACQAJAIANB/wBMBEAgA0GCf04NAyABQwAAgAyUIQEgA0Gbfk0NASADQeYAaiEDDAMLIAFDAAAAf5QhASADQf4BSw0BIANB/wBrIQMMAgsgAUMAAIAMlCEBQbZ9IAMgA0G2fU0bQcwBaiEDDAELIAFDAAAAf5QhAUH9AiADIANB/QJPG0H+AWshAwsgASADQRd0QYCAgPwDar6UIQELIAEL+QMBAn8gACABaiECAkACQCAAKAIEIgNBAXENACADQQJxRQ0BIAAoAgAiAyABaiEBIAAgA2siAEH4lsAAKAIARgRAIAIoAgRBA3FBA0cNAUHwlsAAIAE2AgAgAiACKAIEQX5xNgIEIAAgAUEBcjYCBCACIAE2AgAMAgsgACADEB4LAkACQAJAIAIoAgQiA0ECcUUEQCACQfyWwAAoAgBGDQIgAkH4lsAAKAIARg0DIAIgA0F4cSICEB4gACABIAJqIgFBAXI2AgQgACABaiABNgIAIABB+JbAACgCAEcNAUHwlsAAIAE2AgAPCyACIANBfnE2AgQgACABQQFyNgIEIAAgAWogATYCAAsgAUGAAk8EQCAAIAEQIg8LIAFB+AFxQeCUwABqIQICf0HolsAAKAIAIgNBASABQQN2dCIBcUUEQEHolsAAIAEgA3I2AgAgAgwBCyACKAIICyEBIAIgADYCCCABIAA2AgwgACACNgIMIAAgATYCCA8LQfyWwAAgADYCAEH0lsAAQfSWwAAoAgAgAWoiATYCACAAIAFBAXI2AgQgAEH4lsAAKAIARw0BQfCWwABBADYCAEH4lsAAQQA2AgAPC0H4lsAAIAA2AgBB8JbAAEHwlsAAKAIAIAFqIgE2AgAgACABQQFyNgIEIAAgAWogATYCAAsLggMBCX8jAEEgayIEJAAQIyIAKAIQIQUgACgCDCEIIABCADcCDCAAKAIEIQYgACgCCCEDIABCBDcCBCAAKAIAIQIgAEEANgIAAkAgAyAIRgRAAkAgAiADRgRA0G9BgAEgAiACQYABTRsiB/wPASIBQX9GDQMCQCAFRQRAIAEhBQwBCyACIAVqIAFHDQQLIAIgB2oiByACSSAHQf////8DS3INAyAHQQJ0IgFB/P///wdLDQMgBCACBH8gBCAGNgIUIAQgAkECdDYCHEEEBUEACzYCGCAEQQhqQQQgASAEQRRqEDAgBCgCCEEBRg0DIAQoAgwhBiACIQEgByECDAELIAIgAyIBTQ0CCyAGIAFBAnRqIANBAWo2AgAgAUEBaiEDCyADIAhNDQAgBiAIQQJ0aigCACEBIAAgBTYCECAAIAE2AgwgACADNgIIIAAoAgQhAyAAIAY2AgQgACgCACEBIAAgAjYCACABBEAgAyABQQJ0EGULIARBIGokACAFIAhqDwsAC+cCAQV/AkBBzf97QRAgACAAQRBNGyIAayABTQ0AIABBECABQQtqQXhxIAFBC0kbIgRqQQxqEBEiAkUNACACQQhrIQECQCAAQQFrIgMgAnFFBEAgASEADAELIAJBBGsiBSgCACIGQXhxIAIgA2pBACAAa3FBCGsiAiAAQQAgAiABa0EQTRtqIgAgAWsiAmshAyAGQQNxBEAgACADIAAoAgRBAXFyQQJyNgIEIAAgA2oiAyADKAIEQQFyNgIEIAUgAiAFKAIAQQFxckECcjYCACABIAJqIgMgAygCBEEBcjYCBCABIAIQGgwBCyABKAIAIQEgACADNgIEIAAgASACajYCAAsCQCAAKAIEIgFBA3FFDQAgAUF4cSICIARBEGpNDQAgACAEIAFBAXFyQQJyNgIEIAAgBGoiASACIARrIgRBA3I2AgQgACACaiICIAIoAgRBAXI2AgQgASAEEBoLIABBCGohAwsgAwv7AgEHfyMAQRBrIgQkAAJAAkACQAJAAkAgASgCBCICRQ0AIAEoAgAhByACQQNxIQUCQCACQQRJBEBBACECDAELIAdBHGohAyACQXxxIQhBACECA0AgAygCACADQQhrKAIAIANBEGsoAgAgA0EYaygCACACampqaiECIANBIGohAyAIIAZBBGoiBkcNAAsLIAUEQCAGQQN0IAdqQQRqIQMDQCADKAIAIAJqIQIgA0EIaiEDIAVBAWsiBQ0ACwsgASgCDARAIAJBAEgNASAHKAIERSACQRBJcQ0BIAJBAXQhAgtBACEFIAJBAEgNAyACDQELQQEhA0EAIQIMAQtBsZPAAC0AABpBASEFIAJBARBdIgNFDQELIARBADYCCCAEIAM2AgQgBCACNgIAIARBwIvAACABEBhFDQFBqIzAAEHWACAEQQ9qQZiMwABBkI3AABAzAAsgBSACEFIACyAAIAQpAgA3AgAgAEEIaiAEQQhqKAIANgIAIARBEGokAAvxAgEEfyAAKAIMIQICQAJAIAFBgAJPBEAgACgCGCEDAkACQCAAIAJGBEAgAEEUQRAgACgCFCICG2ooAgAiAQ0BQQAhAgwCCyAAKAIIIgEgAjYCDCACIAE2AggMAQsgAEEUaiAAQRBqIAIbIQQDQCAEIQUgASICQRRqIAJBEGogAigCFCIBGyEEIAJBFEEQIAEbaigCACIBDQALIAVBADYCAAsgA0UNAiAAIAAoAhxBAnRB0JPAAGoiASgCAEcEQCADQRBBFCADKAIQIABGG2ogAjYCACACRQ0DDAILIAEgAjYCACACDQFB7JbAAEHslsAAKAIAQX4gACgCHHdxNgIADAILIAAoAggiACACRwRAIAAgAjYCDCACIAA2AggPC0HolsAAQeiWwAAoAgBBfiABQQN2d3E2AgAPCyACIAM2AhggACgCECIBBEAgAiABNgIQIAEgAjYCGAsgACgCFCIARQ0AIAIgADYCFCAAIAI2AhgLC7YCAQd/AkAgAkEQSQRAIAAhAwwBCyAAQQAgAGtBA3EiBGohBSAEBEAgACEDIAEhBgNAIAMgBi0AADoAACAGQQFqIQYgA0EBaiIDIAVJDQALCyAFIAIgBGsiCEF8cSIHaiEDAkAgASAEaiIEQQNxBEAgB0EATA0BIARBA3QiAkEYcSEJIARBfHEiBkEEaiEBQQAgAmtBGHEhAiAGKAIAIQYDQCAFIAYgCXYgASgCACIGIAJ0cjYCACABQQRqIQEgBUEEaiIFIANJDQALDAELIAdBAEwNACAEIQEDQCAFIAEoAgA2AgAgAUEEaiEBIAVBBGoiBSADSQ0ACwsgCEEDcSECIAQgB2ohAQsgAgRAIAIgA2ohAgNAIAMgAS0AADoAACABQQFqIQEgA0EBaiIDIAJJDQALCyAAC78CAQN/IwBBEGsiAiQAAkAgAUGAAU8EQCACQQA2AgwCfyABQYAQTwRAIAFBgIAETwRAIAJBDGpBA3IhBCACIAFBEnZB8AFyOgAMIAIgAUEGdkE/cUGAAXI6AA4gAiABQQx2QT9xQYABcjoADUEEDAILIAJBDGpBAnIhBCACIAFBDHZB4AFyOgAMIAIgAUEGdkE/cUGAAXI6AA1BAwwBCyACQQxqQQFyIQQgAiABQQZ2QcABcjoADEECCyEDIAQgAUE/cUGAAXI6AAAgAyAAKAIAIAAoAggiAWtLBEAgACABIAMQKSAAKAIIIQELIAAoAgQgAWogAkEMaiADEB8aIAAgASADajYCCAwBCyAAKAIIIgMgACgCAEYEQCAAECgLIAAgA0EBajYCCCAAKAIEIANqIAE6AAALIAJBEGokAEEAC70CAQJ/IwBBEGsiAiQAAkAgAUGAAU8EQCACQQA2AgwCfyABQYAQTwRAIAFBgIAETwRAIAIgAUE/cUGAAXI6AA8gAiABQRJ2QfABcjoADCACIAFBBnZBP3FBgAFyOgAOIAIgAUEMdkE/cUGAAXI6AA1BBAwCCyACIAFBP3FBgAFyOgAOIAIgAUEMdkHgAXI6AAwgAiABQQZ2QT9xQYABcjoADUEDDAELIAIgAUE/cUGAAXI6AA0gAiABQQZ2QcABcjoADEECCyEBIAEgACgCACAAKAIIIgNrSwRAIAAgAyABECUgACgCCCEDCyAAKAIEIANqIAJBDGogARAfGiAAIAEgA2o2AggMAQsgACgCCCIDIAAoAgBGBEAgABAoCyAAIANBAWo2AgggACgCBCADaiABOgAACyACQRBqJABBAAvEAgEEfyAAQgA3AhAgAAJ/QQAgAUGAAkkNABpBHyABQf///wdLDQAaIAFBBiABQQh2ZyIDa3ZBAXEgA0EBdGtBPmoLIgI2AhwgAkECdEHQk8AAaiEEQQEgAnQiA0HslsAAKAIAcUUEQCAEIAA2AgAgACAENgIYIAAgADYCDCAAIAA2AghB7JbAAEHslsAAKAIAIANyNgIADwsCQAJAIAEgBCgCACIDKAIEQXhxRgRAIAMhAgwBCyABQRkgAkEBdmtBACACQR9HG3QhBQNAIAMgBUEddkEEcWpBEGoiBCgCACICRQ0CIAVBAXQhBSACIQMgAigCBEF4cSABRw0ACwsgAigCCCIBIAA2AgwgAiAANgIIIABBADYCGCAAIAI2AgwgACABNgIIDwsgBCAANgIAIAAgAzYCGCAAIAA2AgwgACAANgIIC/MCAQR/IwBBMGsiACQAAkACQEGQksAAKAIARQRAQaiSwAAoAgAhAUGoksAAQQA2AgAgAUUNASAAQRhqIAERBQAgAEEQaiICIABBJGopAgA3AwAgACAAKQIcNwMIIAAoAhghAUGQksAAKAIAIgMNAgJAIANFDQBBlJLAACgCACICRQ0AQZiSwAAoAgAgAkECdBBlC0GUksAAIAE2AgBBkJLAAEEBNgIAQZiSwAAgACkDCDcCAEGgksAAIABBEGopAwA3AgALIABBMGokAEGUksAADwsgAEEANgIoIABBATYCHCAAQaCHwAA2AhggAEIENwIgIABBGGpBiIjAABBDAAsgAEEoaiACKQMANwIAIAAgACkDCDcCICAAIAE2AhwgAEEBNgIYAkAgAEEYaiIBKAIARQ0AIAEoAgQiAkUNACABKAIIIAJBAnQQZQsgAEEANgIoIABBATYCHCAAQaiIwAA2AhggAEIENwIgIAFBsIjAABBDAAuoAgIDfwF+IwBBQGoiAiQAIAEoAgBBgICAgHhGBEAgASgCDCEDIAJBJGoiBEEANgIAIAJCgICAgBA3AhwgAkEwaiADKAIAIgNBCGopAgA3AwAgAkE4aiADQRBqKQIANwMAIAIgAykCADcDKCACQRxqQcCIwAAgAkEoahAYGiACQRhqIAQoAgAiAzYCACACIAIpAhwiBTcDECABQQhqIAM2AgAgASAFNwIACyABKQIAIQUgAUKAgICAEDcCACACQQhqIgMgAUEIaiIBKAIANgIAIAFBADYCAEGxk8AALQAAGiACIAU3AwBBDEEEEF0iAUUEQEEEQQwQbQALIAEgAikDADcCACABQQhqIAMoAgA2AgAgAEHgisAANgIEIAAgATYCACACQUBrJAAL0gECBH8BfiMAQSBrIgMkACABIAEgAmoiAksEQEEAQQAQUgALQQggACgCACIEQQF0IgEgAiABIAJLGyICIAJBCEkb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QQRqrUKAgICA4ACENwMoIAEgAa1CgICAgOAAhDcDICABIAFBIGo2AhAgAUEIakHIj8AAEEMAC2kCAX8BfiMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBAjYCDCADQfyNwAA2AgggA0ICNwIUIANCgICAgOAAIgQgA62ENwMoIAMgBCADQQRqrYQ3AyAgAyADQSBqNgIQIANBCGogAhBDAAtpAgF/AX4jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQQI2AgwgA0H4kcAANgIIIANCAjcCFCADQoCAgIDgACIEIANBBGqthDcDKCADIAQgA62ENwMgIAMgA0EgajYCECADQQhqIAIQQwALZgAjAEEwayIAJABBsJPAAC0AAARAIABBAjYCDCAAQbCKwAA2AgggAEIBNwIUIAAgATYCLCAAIABBLGqtQoCAgIDgAIQ3AyAgACAAQSBqNgIQIABBCGpB0IrAABBDAAsgAEEwaiQAC5QBAgN/AW8jAEEgayIDJAAgAyAAKAIAEHAiBDYCACADIAI2AgQgAiAERwRAIANBADYCCCADIANBBGogA0EIahBAAAsQWyIEEFMiBSUBEAUhBhAbIgIgBiYBIAVBhAFPBEAgBRAtCyACIAAoAgAgAUECdhBkIAJBhAFPBEAgAhAtCyAEQYQBTwRAIAQQLQsgA0EgaiQAC08BAX8jAEEwayIAJAAgAEEBNgIMIABBwI3AADYCCCAAQgE3AhQgACAAQS9qrUKAgICAoAWENwMgIAAgAEEgajYCECAAQQhqQcSBwAAQQwALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhAlIAAoAgghAwsgACgCBCADaiABIAIQHxogACACIANqNgIIQQALTQECf0Gxk8AALQAAGiABKAIEIQIgASgCACEDQQhBBBBdIgFFBEBBBEEIEG0ACyABIAI2AgQgASADNgIAIABB8IrAADYCBCAAIAE2AgALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhApIAAoAgghAwsgACgCBCADaiABIAIQHxogACACIANqNgIIQQALQQEBfyMAQSBrIgIkACACQQA2AhAgAkEBNgIEIAJCBDcCCCACQS42AhwgAiAANgIYIAIgAkEYajYCACACIAEQQwALswIBA38gACgCACECIAEoAhwiAEEQcUUE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ZCByZWN1cnNpdmVseSBvciBhZnRlciBiZWluZyBkcm9wcGVkTGF6eSBpbnN0YW5jZSBoYXMgcHJldmlvdXNseSBiZWVuIHBvaXNvbmVkdgMQACoAAAAvVXNlcnMvZG1hcmNvcy8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL29uY2VfY2VsbC0xLjIxLjMvc3JjL2xpYi5ycwCoAxAAXwAAAAgDAAAZAAAAcmVlbnRyYW50IGluaXQAABgEEAAOAAAAqAMQAF8AAAB6AgAADQAAABYAAAAMAAAABAAAABcAAAAYAAAAGQAAAC9ydXN0L2RlcHMvZGxtYWxsb2MtMC4yLjYvc3JjL2RsbWFsbG9jLnJzYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPj0gc2l6ZSArIG1pbl9vdmVyaGVhZABYBBAAKQAAAKgEAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPD0gc2l6ZSArIG1heF9vdmVyaGVhZAAAWAQQACkAAACuBAAADQAAAEFjY2Vzc0Vycm9ybWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAAAAAsFEAAVAAAAIAUQAA0AAABzdGQvc3JjL2FsbG9jLnJzQAUQABAAAABjAQAACQAAABYAAAAMAAAABAAAABoAAAAAAAAACAAAAAQAAAAbAAAAAAAAAAgAAAAEAAAAHAAAAB0AAAAeAAAAHwAAACAAAAAQAAAABAAAACEAAAAiAAAAIwAAACQAAABFcnJvcgAAACUAAAAMAAAABAAAACYAAAAnAAAAKAAAAGNhcGFjaXR5IG92ZXJmbG93AAAA2AUQABEAAABhbGxvYy9zcmMvcmF3X3ZlYy5yc/QFEAAUAAAAGAAAAAUAQaCMwAAL8AUBAAAAKQAAAGEgZm9ybWF0dGluZyB0cmFpdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvciB3aGVuIHRoZSB1bmRlcmx5aW5nIHN0cmVhbSBkaWQgbm90YWxsb2Mvc3JjL2ZtdC5ycwAAfgYQABAAAAB+AgAADgAAAEJvcnJvd011dEVycm9yYWxyZWFkeSBib3Jyb3dlZDogrgYQABIAAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAAyAYQACAAAADoBhAAEgAAAD09IT1tYXRjaGVzYXNzZXJ0aW9uIGBsZWZ0ICByaWdodGAgZmFpbGVkCiAgbGVmdDogCiByaWdodDogABcHEAAQAAAAJwcQABcAAAA+BxAACQAAACByaWdodGAgZmFpbGVkOiAKICBsZWZ0OiAAAAAXBxAAEAAAAGAHEAAQAAAAcAcQAAkAAAA+BxAACQAAADogAAABAAAAAAAAAJwHEAACAAAAfSB9Y29yZS9zcmMvZm10L251bS5ycwAAswcQABMAAABmAAAAFwAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTlyYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggAACiCBAAEgAAALQIEAAiAAAAcmFuZ2UgZW5kIGluZGV4IOgIEAAQAAAAtAgQACIAAAAAAAA/AAAAvwBBqJLAAAsBFABwCXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS44My4wICg5MGIzNWE2MjMgMjAyNC0xMS0yNikGd2FscnVzBjAuMjMuMwx3YXNtLWJpbmRnZW4HMC4yLjEwMABJD3RhcmdldF9mZWF0dXJlcwQrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQrD3JlZmVyZW5jZS10eXBlcysKbXVsdGl2YWx1ZQ==",import.meta.url));const t=_E();(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));const{instance:e,module:n}=await yE(await i,t);return BE(e,n)}const Yn=-12,Vn=9,vE=-30,Fa=Math.exp(vE),SE=11,bE=11,ie=1<<SE,xi=1<<bE,wE=1;function ME(i){return i==="bool"||i==="bvec2"||i==="bvec3"||i==="bvec4"}function yi(i){return i==="int"||i==="ivec2"||i==="ivec3"||i==="ivec4"}function _i(i){return i==="uint"||i==="uvec2"||i==="uvec3"||i==="uvec4"}function QE(i){return i==="float"||i==="vec2"||i==="vec3"||i==="vec4"}function TE(i){return i==="mat2"||i==="mat2x2"||i==="mat2x3"||i==="mat2x4"||i==="mat3"||i==="mat3x2"||i==="mat3x3"||i==="mat3x4"||i==="mat4"||i==="mat4x2"||i==="mat4x3"||i==="mat4x4"}function ws(i){return QE(i)||TE(i)}function Hi(i){return i==="mat2"||i==="mat2x2"}function Yi(i){return i==="mat3"||i==="mat3x3"}function Vi(i){return i==="mat4"||i==="mat4x4"}function DE(i){switch(i){case"vec2":return"float";case"vec3":return"float";case"vec4":return"float";case"ivec2":return"int";case"ivec3":return"int";case"ivec4":return"int";case"uvec2":return"uint";case"uvec3":return"uint";case"uvec4":return"uint";default:throw new Error(`Invalid vector type: ${i}`)}}function RE(i){switch(i){case"vec2":case"ivec2":case"uvec2":return 2;case"vec3":case"ivec3":case"uvec3":return 3;case"vec4":case"ivec4":case"uvec4":return 4;default:throw new Error(`Invalid vector type: ${i}`)}}function me(i){return Math.trunc(i).toString()}function Ee(i){return`${Math.max(0,Math.trunc(i)).toString()}u`}function qt(i){return i===Number.POSITIVE_INFINITY?"INFINITY":i===Number.NEGATIVE_INFINITY?"-INFINITY":Number.isInteger(i)?i.toFixed(1):i.toString()}function kn(i){return i instanceof Bi?i.type:i.dynoOut().type}class Bi{constructor(t){this.__isDynoValue=!0,this.type=t}}class qe extends Bi{constructor(t,e){super(t.outTypes[e]),this.dyno=t,this.key=e}}class Cr extends Bi{constructor(t,e){super(t),this.literal=e}getLiteral(){return this.literal}}class NE extends Cr{constructor(t,e){super(t,""),this.value=e}getLiteral(){const{type:t,value:e}=this;switch(t){case"bool":return e?"true":"false";case"uint":return Ee(e);case"int":return me(e);case"float":return qt(e);case"bvec2":{const n=e;return`bvec2(${n[0]}, ${n[1]})`}case"uvec2":{if(e instanceof wt)return`uvec2(${Ee(e.x)}, ${Ee(e.y)})`;const n=e;return`uvec2(${Ee(n[0])}, ${Ee(n[1])})`}case"ivec2":{if(e instanceof wt)return`ivec2(${me(e.x)}, ${me(e.y)})`;const n=e;return`ivec2(${me(n[0])}, ${me(n[1])})`}case"vec2":{if(e instanceof wt)return`vec2(${qt(e.x)}, ${qt(e.y)})`;const n=e;return`vec2(${qt(n[0])}, ${qt(n[1])})`}case"bvec3":{const n=e;return`bvec3(${n[0]}, ${n[1]}, ${n[2]})`}case"uvec3":{if(e instanceof Q)return`uvec3(${Ee(e.x)}, ${Ee(e.y)}, ${Ee(e.z)})`;const n=e;return`uvec3(${Ee(n[0])}, ${Ee(n[1])}, ${Ee(n[2])})`}case"ivec3":{if(e instanceof Q)return`ivec3(${me(e.x)}, ${me(e.y)}, ${me(e.z)})`;const n=e;return`ivec3(${me(n[0])}, ${me(n[1])}, ${me(n[2])})`}case"vec3":{if(e instanceof Q)return`vec3(${qt(e.x)}, ${qt(e.y)}, ${qt(e.z)})`;const n=e;return`vec3(${qt(n[0])}, ${qt(n[1])}, ${qt(n[2])})`}case"bvec4":{const n=e;return`bvec4(${n[0]}, ${n[1]}, ${n[2]}, ${n[3]})`}case"uvec4":{if(e instanceof Jt)return`uvec4(${Ee(e.x)}, ${Ee(e.y)}, ${Ee(e.z)}, ${Ee(e.w)})`;const n=e;return`uvec4(${Ee(n[0])}, ${Ee(n[1])}, ${Ee(n[2])}, ${Ee(n[3])})`}case"ivec4":{if(e instanceof Jt)return`ivec4(${me(e.x)}, ${me(e.y)}, ${me(e.z)}, ${me(e.w)})`;const n=e;return`ivec4(${me(n[0])}, ${me(n[1])}, ${me(n[2])}, ${me(n[3])})`}case"vec4":{if(e instanceof Jt)return`vec4(${qt(e.x)}, ${qt(e.y)}, ${qt(e.z)}, ${qt(e.w)})`;if(e instanceof de)return`vec4(${qt(e.x)}, ${qt(e.y)}, ${qt(e.z)}, ${qt(e.w)})`;const n=e;return`vec4(${qt(n[0])}, ${qt(n[1])}, ${qt(n[2])}, ${qt(n[3])})`}case"mat2":case"mat2x2":{const n=e,s=n instanceof Gr?n.elements:e,r=new Array(4).fill(0).map((a,o)=>qt(s[o]));return`${t}(${r.join(", ")})`}case"mat2x3":{const n=e,s=new Array(6).fill(0).map((r,a)=>qt(n[a]));return`${t}(${s.join(", ")})`}case"mat2x4":{const n=e,s=new Array(8).fill(0).map((r,a)=>qt(n[a]));return`${t}(${s.join(", ")})`}case"mat3":case"mat3x3":{const n=e,s=n instanceof Ut?n.elements:e,r=new Array(9).fill(0).map((a,o)=>qt(s[o]));return`${t}(${r.join(", ")})`}case"mat3x2":{const n=e,s=new Array(6).fill(0).map((r,a)=>qt(n[a]));return`${t}(${s.join(", ")})`}case"mat3x4":{const n=e,s=new Array(12).fill(0).map((r,a)=>qt(n[a]));return`${t}(${s.join(", ")})`}case"mat4":case"mat4x4":{const n=e,s=n instanceof Xt?n.elements:e,r=new Array(16).fill(0).map((a,o)=>qt(s[o]));return`${t}(${r.join(", ")})`}case"mat4x2":{const n=e,s=new Array(8).fill(0).map((r,a)=>qt(n[a]));return`${t}(${s.join(", ")})`}case"mat4x3":{const n=e,s=new Array(12).fill(0).map((r,a)=>qt(n[a]));return`${t}(${s.join(", ")})`}default:throw new Error(`Type not implemented: ${String(t)}`)}}}function xs(i,t){return new NE(i,t)}function lr(i){const t=String(i);if(ME(i))return`${t}(false)`;if(ws(i))return`${t}(0.0)`;if(yi(i))return`${t}(0)`;if(_i(i))return`${t}(0u)`;throw new Error(`Type not implemented: ${t}`)}const Ml="    ";class FE{constructor({indent:t}={}){this.globals=new Set,this.statements=[],this.uniforms={},this.declares=new Set,this.updaters=[],this.sequence=0,this.indent=Ml,this.indent=t??Ml}nextSequence(){return this.sequence++}}class Se{constructor({inTypes:t,outTypes:e,inputs:n,update:s,globals:r,statements:a,generate:o}){this.inTypes=t??{},this.outTypes=e??{},this.inputs=n??{},this.update=s,this.globals=r,this.statements=a,this.generate=o??(({inputs:l,outputs:A,compile:h})=>{var c,d;return{globals:(c=this.globals)==null?void 0:c.call(this,{inputs:l,outputs:A,compile:h}),statements:(d=this.statements)==null?void 0:d.call(this,{inputs:l,outputs:A,compile:h})}})}get outputs(){const t={};for(const e in this.outTypes)t[e]=new qe(this,e);return t}apply(t){return Object.assign(this.inputs,t),this.outputs}compile({inputs:t,outputs:e,compile:n}){const s=[`// ${this.constructor.name}(${Object.values(t).join(", ")}) => (${Object.values(e).join(", ")})`],r=[];for(const A in e){const h=e[A];h&&!n.declares.has(h)&&(n.declares.add(h),r.push(A))}const{globals:a,statements:o,uniforms:l}=this.generate({inputs:t,outputs:e,compile:n});for(const A of a??[])n.globals.add(A);for(const A in l)n.uniforms[A]=l[A];this.update&&n.updaters.push(this.update);for(const A of r){const h=e[A];h&&(n.uniforms[h]||s.push(`${kc(h,this.outTypes[A])};`))}return o?.length&&(s.push("{"),s.push(...o.map(A=>n.indent+A)),s.push("}")),s}}class UE extends Se{constructor({inTypes:t,outTypes:e,inputs:n,update:s,globals:r,construct:a}){super({inTypes:t,outTypes:e,inputs:n,update:s,globals:r,generate:o=>this.generateBlock(o)}),this.construct=a}generateBlock({inputs:t,outputs:e,compile:n}){var s,r;const a={},o={};for(const f in t)t[f]!=null&&(a[f]=new Cr(this.inTypes[f],t[f]));for(const f in e)e[f]!=null&&(o[f]=new Bi(this.outTypes[f]));const l={roots:[]},A=this.construct(a,o,l);for(const f of((s=this.globals)==null?void 0:s.call(this,{inputs:t,outputs:e,compile:n}))??[])n.globals.add(f);const h=[],c=new Map;function d(f,u,y){let x=c.get(f);if(!x){x={sequence:n.nextSequence(),outNames:new Map,newOuts:new Set},c.set(f,x);for(const I in f.inputs){let b=f.inputs[I];for(;b;){if(b instanceof Bi){b instanceof qe&&d(b.dyno,b.key);break}b=b.dynoOut()}}h.push(f)}u&&(y||x.newOuts.add(u),x.outNames.set(u,y??`${u}_${x.sequence}`))}for(const f of l.roots)d(f);for(const f in o){let u=A?.[f]??o[f];for(;u;){if(u instanceof Bi){u instanceof qe&&d(u.dyno,u.key,e[f]);break}u=u.dynoOut()}o[f]=u}const p=[];for(const f of h){const u={},y={};for(const b in f.inputs){let S=f.inputs[b];for(;S;){if(S instanceof Bi){if(S instanceof Cr)u[b]=S.getLiteral();else if(S instanceof qe){const w=(r=c.get(S.dyno))==null?void 0:r.outNames.get(S.key);if(!w)throw new Error(`Source not found for ${S.dyno.constructor.name}.${S.key}`);u[b]=w}break}S=S.dynoOut()}}const x=c.get(f)??{outNames:new Map};for(const[b,S]of x.outNames.entries())y[b]=S;const I=f.compile({inputs:u,outputs:y,compile:n});p.push(I)}const g=[];for(const f in e)o[f]instanceof Cr&&g.push(`${e[f]} = ${o[f].getLiteral()};`);return g.length>0&&p.push(g),{statements:p.flatMap((f,u)=>u===0?f:["",...f])}}}function qn(i,t,e,{update:n,globals:s}={}){return new UE({inTypes:i,outTypes:t,construct:e,update:n,globals:s})}function Or({inTypes:i,outTypes:t,inputs:e,update:n,globals:s,statements:r,generate:a}){return new Se({inTypes:i,outTypes:t,inputs:e,update:n,globals:s,statements:r,generate:a})}function kc(i,t,e){const n=typeof t=="string"?t:t.type;if(!n)throw new Error(`Invalid DynoType: ${String(t)}`);return`${n} ${i}${e!=null?`[${e}]`:""}`}function wn(i){var t;let e=!1;const n=i.split(`
`).map(a=>{const o=a.trimEnd();return e?o:o.length>0?(e=!0,o):null}).filter(a=>a!=null);for(;n.length>0&&n[n.length-1].length===0;)n.pop();if(n.length===0)return[];const s=(t=n[0].match(/^\s*/))==null?void 0:t[0];if(!s)return n;const r=new RegExp(`^${s}`);return n.map(a=>a.replace(r,""))}function Je(i){return wn(i).join(`
`)}class Hr extends Se{constructor({a:t,outKey:e,outTypeFunc:n}){const s={a:kn(t)},r=n(kn(t)),a={[e]:r};super({inTypes:s,outTypes:a,inputs:{a:t}}),this.outKey=e}dynoOut(){return new qe(this,this.outKey)}}class Yr extends Se{constructor({a:t,b:e,outKey:n,outTypeFunc:s}){const r={a:kn(t),b:kn(e)},a=s(kn(t),kn(e)),o={[n]:a};super({inTypes:r,outTypes:o,inputs:{a:t,b:e}}),this.outKey=n}dynoOut(){return new qe(this,this.outKey)}}const xe={type:"Gsplat"},Vr={type:"PackedSplats"},ys=(i,t)=>new PE({packedSplats:i,index:t}),LE=(i,t,e,n)=>new kE({packedSplats:i,index:t,base:e,count:n}),xr=i=>new GE({gsplat:i}),Ua=({gsplat:i,flags:t,index:e,center:n,scales:s,quaternion:r,rgba:a,rgb:o,opacity:l,x:A,y:h,z:c,r:d,g:p,b:g})=>new zE({gsplat:i,flags:t,index:e,center:n,scales:s,quaternion:r,rgba:a,rgb:o,opacity:l,x:A,y:h,z:c,r:d,g:p,b:g}),Gc=(i,{scale:t,rotate:e,translate:n,recolor:s})=>new OE({gsplat:i,scale:t,rotate:e,translate:n,recolor:s}),Mn=Je(`
  struct Gsplat {
    vec3 center;
    uint flags;
    vec3 scales;
    int index;
    vec4 quaternion;
    vec4 rgba;
  };
  const uint GSPLAT_FLAG_ACTIVE = 1u << 0u;

  bool isGsplatActive(uint flags) {
    return (flags & GSPLAT_FLAG_ACTIVE) != 0u;
  }
`),rA=Je(`
  struct PackedSplats {
    usampler2DArray texture;
    int numSplats;
    vec4 rgbMinMaxLnScaleMinMax;
  };
`),zc=Je(`
  bool readPackedSplat(usampler2DArray texture, int numSplats, vec4 rgbMinMaxLnScaleMinMax, int index, out Gsplat gsplat) {
    if ((index >= 0) && (index < numSplats)) {
      uvec4 packed = texelFetch(texture, splatTexCoord(index), 0);
      unpackSplatEncoding(packed, gsplat.center, gsplat.scales, gsplat.quaternion, gsplat.rgba, rgbMinMaxLnScaleMinMax);
      return true;
    } else {
      return false;
    }
  }
`);class PE extends Se{constructor({packedSplats:t,index:e}){super({inTypes:{packedSplats:Vr,index:"int"},outTypes:{gsplat:xe},inputs:{packedSplats:t,index:e},globals:()=>[Mn,rA,zc],statements:({inputs:n,outputs:s})=>{const{gsplat:r}=s;if(!r)return[];const{packedSplats:a,index:o}=n;let l;return a&&o?l=wn(`
            if (readPackedSplat(${a}.texture, ${a}.numSplats, ${a}.rgbMinMaxLnScaleMinMax, ${o}, ${r})) {
              bool zeroSize = all(equal(${r}.scales, vec3(0.0, 0.0, 0.0)));
              ${r}.flags = zeroSize ? 0u : GSPLAT_FLAG_ACTIVE;
            } else {
              ${r}.flags = 0u;
            }
          `):l=[`${r}.flags = 0u;`],l.push(`${r}.index = ${o??"0"};`),l}})}dynoOut(){return new qe(this,"gsplat")}}class kE extends Se{constructor({packedSplats:t,index:e,base:n,count:s}){super({inTypes:{packedSplats:Vr,index:"int",base:"int",count:"int"},outTypes:{gsplat:xe},inputs:{packedSplats:t,index:e,base:n,count:s},globals:()=>[Mn,rA,zc],statements:({inputs:r,outputs:a})=>{const{gsplat:o}=a;if(!o)return[];const{packedSplats:l,index:A,base:h,count:c}=r;let d;return l&&A&&h&&c?d=wn(`
            ${o}.flags = 0u;
            if ((${A} >= ${h}) && (${A} < (${h} + ${c}))) {
              if (readPackedSplat(${l}.texture, ${l}.numSplats, ${l}.rgbMinMaxLnScaleMinMax, ${A}, ${o})) {
                bool zeroSize = all(equal(${o}.scales, vec3(0.0, 0.0, 0.0)));
                ${o}.flags = zeroSize ? 0u : GSPLAT_FLAG_ACTIVE;
              }
            }
          `):d=[`${o}.flags = 0u;`],d.push(`${o}.index = ${A??"0"};`),d}})}dynoOut(){return new qe(this,"gsplat")}}class GE extends Se{constructor({gsplat:t}){super({inTypes:{gsplat:xe},outTypes:{flags:"uint",active:"bool",index:"int",center:"vec3",scales:"vec3",quaternion:"vec4",rgba:"vec4",rgb:"vec3",opacity:"float",x:"float",y:"float",z:"float",r:"float",g:"float",b:"float"},inputs:{gsplat:t},globals:()=>[Mn],statements:({inputs:e,outputs:n})=>{const{gsplat:s}=e,{flags:r,active:a,index:o,center:l,scales:A,quaternion:h,rgba:c,rgb:d,opacity:p,x:g,y:m,z:f,r:u,g:y,b:x}=n;return[r?`${r} = ${s?`${s}.flags`:"0u"};`:null,a?`${a} = isGsplatActive(${s?`${s}.flags`:"0u"});`:null,o?`${o} = ${s?`${s}.index`:"0"};`:null,l?`${l} = ${s?`${s}.center`:"vec3(0.0, 0.0, 0.0)"};`:null,A?`${A} = ${s?`${s}.scales`:"vec3(0.0, 0.0, 0.0)"};`:null,h?`${h} = ${s?`${s}.quaternion`:"vec4(0.0, 0.0, 0.0, 1.0)"};`:null,c?`${c} = ${s?`${s}.rgba`:"vec4(0.0, 0.0, 0.0, 0.0)"};`:null,d?`${d} = ${s?`${s}.rgba.rgb`:"vec3(0.0, 0.0, 0.0)"};`:null,p?`${p} = ${s?`${s}.rgba.a`:"0.0"};`:null,g?`${g} = ${s?`${s}.center.x`:"0.0"};`:null,m?`${m} = ${s?`${s}.center.y`:"0.0"};`:null,f?`${f} = ${s?`${s}.center.z`:"0.0"};`:null,u?`${u} = ${s?`${s}.rgba.r`:"0.0"};`:null,y?`${y} = ${s?`${s}.rgba.g`:"0.0"};`:null,x?`${x} = ${s?`${s}.rgba.b`:"0.0"};`:null].filter(Boolean)}})}}class zE extends Se{constructor({gsplat:t,flags:e,index:n,center:s,scales:r,quaternion:a,rgba:o,rgb:l,opacity:A,x:h,y:c,z:d,r:p,g,b:m}){super({inTypes:{gsplat:xe,flags:"uint",index:"int",center:"vec3",scales:"vec3",quaternion:"vec4",rgba:"vec4",rgb:"vec3",opacity:"float",x:"float",y:"float",z:"float",r:"float",g:"float",b:"float"},outTypes:{gsplat:xe},inputs:{gsplat:t,flags:e,index:n,center:s,scales:r,quaternion:a,rgba:o,rgb:l,opacity:A,x:h,y:c,z:d,r:p,g,b:m},globals:()=>[Mn],statements:({inputs:f,outputs:u})=>{const{gsplat:y}=u;if(!y)return[];const{gsplat:x,flags:I,index:b,center:S,scales:w,quaternion:R,rgba:B,rgb:_,opacity:T,x:L,y:O,z:H,r:J,g:z,b:K}=f;return[`${y}.flags = ${I??(x?`${x}.flags`:"0u")};`,`${y}.index = ${b??(x?`${x}.index`:"0")};`,`${y}.center = ${S??(x?`${x}.center`:"vec3(0.0, 0.0, 0.0)")};`,`${y}.scales = ${w??(x?`${x}.scales`:"vec3(0.0, 0.0, 0.0)")};`,`${y}.quaternion = ${R??(x?`${x}.quaternion`:"vec4(0.0, 0.0, 0.0, 1.0)")};`,`${y}.rgba = ${B??(x?`${x}.rgba`:"vec4(0.0, 0.0, 0.0, 0.0)")};`,_?`${y}.rgba.rgb = ${_};`:null,T?`${y}.rgba.a = ${T};`:null,L?`${y}.center.x = ${L};`:null,O?`${y}.center.y = ${O};`:null,H?`${y}.center.z = ${H};`:null,J?`${y}.rgba.r = ${J};`:null,z?`${y}.rgba.g = ${z};`:null,K?`${y}.rgba.b = ${K};`:null].filter(Boolean)}})}dynoOut(){return new qe(this,"gsplat")}}Je(`
  vec3 gsplatNormal(vec3 scales, vec4 quaternion) {
    float minScale = min(scales.x, min(scales.y, scales.z));
    vec3 normal;
    if (scales.z == minScale) {
      normal = vec3(0.0, 0.0, 1.0);
    } else if (scales.y == minScale) {
      normal = vec3(0.0, 1.0, 0.0);
    } else {
      normal = vec3(1.0, 0.0, 0.0);
    }
    return quatVec(quaternion, normal);
  }
`);class OE extends Se{constructor({gsplat:t,scale:e,rotate:n,translate:s,recolor:r}){super({inTypes:{gsplat:xe,scale:"float",rotate:"vec4",translate:"vec3",recolor:"vec4"},outTypes:{gsplat:xe},inputs:{gsplat:t,scale:e,rotate:n,translate:s,recolor:r},globals:()=>[Mn],statements:({inputs:a,outputs:o,compile:l})=>{const{gsplat:A}=o;if(!A||!a.gsplat)return[];const{scale:h,rotate:c,translate:d,recolor:p}=a,g=l.indent;return[`${A} = ${a.gsplat};`,`if (isGsplatActive(${A}.flags)) {`,h?`${g}${A}.center *= ${h};`:null,c?`${g}${A}.center = quatVec(${c}, ${A}.center);`:null,d?`${g}${A}.center += ${d};`:null,h?`${g}${A}.scales *= ${h};`:null,c?`${g}${A}.quaternion = quatQuat(${c}, ${A}.quaternion);`:null,p?`${g}${A}.rgba *= ${p};`:null,"}"].filter(Boolean)}})}dynoOut(){return new qe(this,"gsplat")}}const HE=(i,t)=>new YE({gsplat:i,rgbMinMaxLnScaleMinMax:t});class YE extends Se{constructor({gsplat:t,rgbMinMaxLnScaleMinMax:e}){super({inTypes:{gsplat:xe,rgbMinMaxLnScaleMinMax:"vec4"},inputs:{gsplat:t,rgbMinMaxLnScaleMinMax:e},globals:()=>[Mn],statements:({inputs:n,outputs:s})=>{const{output:r}=s;if(!r)return[];const{gsplat:a,rgbMinMaxLnScaleMinMax:o}=n;return a?wn(`
            if (isGsplatActive(${a}.flags)) {
              ${r} = packSplatEncoding(${a}.center, ${a}.scales, ${a}.quaternion, ${a}.rgba, ${o});
            } else {
              ${r} = uvec4(0u, 0u, 0u, 0u);
            }
          `):[`${r} = uvec4(0u, 0u, 0u, 0u);`]}})}dynoOut(){return new qe(this,"output")}}class VE extends Se{constructor({rgba8:t}){super({inTypes:{rgba8:"vec4"},inputs:{rgba8:t},statements:({inputs:e,outputs:n})=>[`target = ${e.rgba8??"vec4(0.0, 0.0, 0.0, 0.0)"};`]})}dynoOut(){return new qe(this,"rgba8")}}class gn extends Se{constructor({key:t,type:e,count:n,value:s,update:r,globals:a}){t=t??"value",super({outTypes:{[t]:e},update:()=>{if(r){const o=r(this.value);o!==void 0&&(this.value=o)}this.uniform.value=this.value},generate:({inputs:o,outputs:l})=>{const A=a?.({inputs:o,outputs:l})??[],h={},c=l[t];return c&&(A.push(`uniform ${kc(c,e,n)};`),h[c]=this.uniform),{globals:A,uniforms:h}}}),this.type=e,this.count=n,this.value=s,this.uniform={value:s},this.outKey=t}dynoOut(){return new qe(this,this.outKey)}}class Ql extends gn{constructor({key:t,value:e,update:n}){super({key:t,type:"bool",value:e,update:n})}}class Lo extends gn{constructor({key:t,value:e,update:n}){super({key:t,type:"int",value:e,update:n})}}class Ms extends gn{constructor({key:t,value:e,update:n}){super({key:t,type:"float",value:e,update:n})}}class La extends gn{constructor({key:t,value:e,update:n}){super({key:t,type:"vec2",value:e,update:n})}}class Qr extends gn{constructor({key:t,value:e,update:n}){super({key:t,type:"vec3",value:e,update:n})}}class qr extends gn{constructor({key:t,value:e,update:n}){super({key:t,type:"vec4",value:e,update:n})}}class Pa extends gn{constructor({key:t,value:e,update:n}){super({key:t,type:"usampler2DArray",value:e,update:n})}}const aA=new Float32Array(1),Oc=new Uint32Array(aA.buffer),oA="Float16Array"in globalThis,Tr=oA?new globalThis.Float16Array(1):null,Hc=new Uint16Array(Tr?.buffer),ka=oA?qE:WE,Ga=oA?JE:XE;function qE(i){return Tr[0]=i,Hc[0]}function WE(i){aA[0]=i;const t=Oc[0],e=t>>31&1,n=t>>23&255,s=t&8388607,r=e<<15;if(n===255)return s!==0?r|32767:r|31744;const a=n-127+15;if(a>=31)return r|31744;if(a<=0){if(a<-10)return r;const l=(s|8388608)>>1-a+13;return r|l}const o=s>>13;return r|a<<10|o}function JE(i){return Hc[0]=i,Tr[0]}function XE(i){const t=i>>15&1,e=i>>10&31,n=i&1023;let s;if(e===0)if(n===0)s=t<<31;else{let r=n,a=-14;for(;(r&1024)===0;)r<<=1,a--;r&=1023;const o=a+127,l=r<<13;s=t<<31|o<<23|l}else if(e===31)n===0?s=t<<31|2139095040:s=t<<31|2143289344;else{const r=e-15+127,a=n<<13;s=t<<31|r<<23|a}return Oc[0]=s,aA[0]}function cr(i){return Math.max(0,Math.min(255,Math.round(i*255)))}function KE(i){const t=[],e=new Set;function n(s){s&&typeof s=="object"&&!e.has(s)&&(e.add(s),s instanceof ArrayBuffer?t.push(s):ArrayBuffer.isView(s)?t.push(s.buffer):Array.isArray(s)?s.forEach(n):Object.values(s).forEach(n))}return n(i),t}class jE{constructor({allocate:t,dispose:e,valid:n}){this.items=[],this.allocate=t,this.dispose=e,this.valid=n}alloc(t){for(;;){const e=this.items.pop();if(!e)break;if(this.valid(e,t))return e;this.dispose&&this.dispose(e)}return this.allocate(t)}free(t){this.items.push(t)}disposeAll(){let t;for(t=this.items.pop();t;)this.dispose&&this.dispose(t),t=this.items.pop()}}function Tl(i,t,e,n,s,r,a,o,l,A,h,c,d,p,g,m,f){const u=f?.rgbMin??0,x=(f?.rgbMax??1)-u,I=cr((p-u)/x),b=cr((g-u)/x),S=cr((m-u)/x),w=cr(d),R=cI(ZE.set(l,A,h,c)),B=R&255,_=R>>>8&255,T=R>>>16&255,L=f?.lnScaleMin??Yn,H=254/((f?.lnScaleMax??Vn)-L),J=r<Fa?0:Math.min(255,Math.max(1,Math.round((Math.log(r)-L)*H)+1)),z=a<Fa?0:Math.min(255,Math.max(1,Math.round((Math.log(a)-L)*H)+1)),K=o<Fa?0:Math.min(255,Math.max(1,Math.round((Math.log(o)-L)*H)+1)),P=ka(e),Z=ka(n),rt=ka(s),ht=t*4;i[ht]=I|b<<8|S<<16|w<<24,i[ht+1]=P|Z<<16,i[ht+2]=rt|B<<16|_<<24,i[ht+3]=J|z<<8|K<<16|T<<24}const ZE=new de,$E=new Q,tI=new Q,eI=new de,nI=new zt,iI={center:$E,scales:tI,quaternion:eI,color:nI,opacity:0};function Dl(i,t,e){const n=iI,s=t*4,r=i[s],a=i[s+1],o=i[s+2],l=i[s+3],A=e?.rgbMin??0,c=(e?.rgbMax??1)-A;n.color.set(A+(r&255)/255*c,A+(r>>>8&255)/255*c,A+(r>>>16&255)/255*c),n.opacity=(r>>>24&255)/255,n.center.set(Ga(a&65535),Ga(a>>>16&65535),Ga(o&65535));const d=e?.lnScaleMin??Yn,g=((e?.lnScaleMax??Vn)-d)/254,m=l&255;n.scales.x=m===0?0:Math.exp(d+(m-1)*g);const f=l>>>8&255;n.scales.y=f===0?0:Math.exp(d+(f-1)*g);const u=l>>>16&255;n.scales.z=u===0?0:Math.exp(d+(u-1)*g);const y=o>>>16&65535|l>>>8&16711680;return hI(y,n.quaternion),n}function sn(i){const t=ie,e=Math.max(wE,Math.min(xi,Math.ceil(i/t))),n=Math.ceil(i/(t*e)),s=t*e*n;return{width:t,height:e,depth:n,maxSplats:s}}function sI(i){const t=new Cc(i.autoStart);return t.startTime=i.startTime,t.oldTime=i.oldTime,t.elapsedTime=i.elapsedTime,t.running=i.running,t}const rI=Je(`
  precision highp float;

  in vec3 position;

  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`);function aI(i){const t=new Q;for(const e of i)t.add(e);return t.divideScalar(i.length)}function oI(i){if(i.length===0)return new de;const t=i[0].clone();for(let e=1;e<i.length;e++)i[e].dot(i[0])<0?(t.x-=i[e].x,t.y-=i[e].y,t.z-=i[e].z,t.w-=i[e].w):(t.x+=i[e].x,t.y+=i[e].y,t.z+=i[e].z,t.w+=i[e].w);return t.normalize()}function AI(i,t){const[e,n]=[new Q,new de],[s,r]=[new Q,new de];i.decompose(e,n,new Q),t.decompose(s,r,new Q);const a=e.distanceTo(s),o=Math.abs(n.dot(r));return{distance:a,coorient:o}}function Po({matrix1:i,matrix2:t,maxDistance:e,minCoorient:n}){const{distance:s,coorient:r}=AI(i,t);return s<=e&&(n==null||r>=n)}const lI=new de,ko=new Q;function cI(i){const t=lI.copy(i).normalize();t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w);const e=2*Math.acos(t.w),n=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z),s=n<1e-6?ko.set(1,0,0):ko.set(t.x,t.y,t.z).divideScalar(n),r=Math.abs(s.x)+Math.abs(s.y)+Math.abs(s.z);let a=s.x/r,o=s.y/r;if(s.z<0){const p=a;a=(1-Math.abs(o))*(a>=0?1:-1),o=(1-Math.abs(p))*(o>=0?1:-1)}const l=a*.5+.5,A=o*.5+.5,h=Math.round(l*255),c=Math.round(A*255);return Math.round(e*(255/Math.PI))<<16|c<<8|h}function hI(i,t){const e=i&255,n=i>>>8&255,s=i>>>16&255,r=e/255,a=n/255;let o=(r-.5)*2,l=(a-.5)*2;const A=1-(Math.abs(o)+Math.abs(l)),h=Math.max(-A,0);o+=o>=0?-h:h,l+=l>=0?-h:h;const c=ko.set(o,l,A).normalize(),p=s/255*Math.PI*.5,g=Math.sin(p),m=Math.cos(p);return t.set(c.x*g,c.y*g,c.z*g,m),t}function uI(i,t){const e=[];let n=0,s=null;const r=new hE((l,A)=>{if(e.push(l),n+=l.length,A||n>=t){const h=new Uint8Array(n);let c=0;for(const d of e)h.set(d,c),c+=d.length;s=h.slice(0,t)}}),a=1024;let o=0;for(;s==null&&o<i.length;){const l=i.slice(o,o+a);r.push(l,!1),o+=a}if(s==null&&(r.push(new Uint8Array,!0),s==null))throw new Error("Failed to decompress partial gzip");return s}class Yc{constructor({graph:t,inputs:e,outputs:n,template:s}){this.graph=t,this.template=s,this.inputs=e??{},this.outputs=n??{};const r=new FE({indent:this.template.indent});for(const o in this.outputs)this.outputs[o]&&r.declares.add(this.outputs[o]);const a=t.compile({inputs:this.inputs,outputs:this.outputs,compile:r});this.shader=s.generate({globals:r.globals,statements:a}),this.uniforms=r.uniforms,this.updaters=r.updaters}prepareMaterial(){return dI(this)}update(){for(const t of this.updaters)t()}}class Vc{constructor(t){const e=t.match(/^([ \t]*)\{\{\s*GLOBALS\s*\}\}/m),n=t.match(/^([ \t]*)\{\{\s*STATEMENTS\s*\}\}/m);if(!e||!n)throw new Error("Template must contain {{ GLOBALS }} and {{ STATEMENTS }}");this.before=t.substring(0,e.index),this.between=t.substring(e.index+e[0].length,n.index),this.after=t.substring(n.index+n[0].length),this.indent=n[1]}generate({globals:t,statements:e}){return this.before+Array.from(t).join(`

`)+this.between+e.map(n=>this.indent+n).join(`
`)+this.after}}const Rl=new Map;function dI(i){let t=Rl.get(i);return t||(t=new eA({glslVersion:vr,vertexShader:rI,fragmentShader:i.shader,uniforms:i.uniforms}),Rl.set(i,t),t)}function qc(i,t,e="add"){const n=()=>{throw new Error(`Invalid ${e} types: ${i}, ${t}`)};if(i===t)return i;if(i==="int"){if(yi(t))return t;n()}if(t==="int"){if(yi(i))return i;n()}if(i==="uint"){if(_i(t))return t;n()}if(t==="uint"){if(_i(i))return i;n()}if(i==="float"){if(ws(t))return t;n()}if(t==="float"){if(ws(i))return i;n()}throw new Error(`Invalid ${e} types: ${i}, ${t}`)}function fI(i,t){return qc(i,t,"sub")}function pI(i,t){const e=()=>{throw new Error(`Invalid mul types: ${i}, ${t}`)},n=s=>s;if(i==="int"){if(yi(t))return n(t);e()}if(t==="int"){if(yi(i))return n(i);e()}if(i==="uint"){if(_i(t))return n(t);e()}if(t==="uint"){if(_i(i))return n(i);e()}if(i==="float"){if(ws(t))return n(t);e()}if(t==="float"){if(ws(i))return n(i);e()}if(yi(i)||_i(i)||yi(t)||_i(t)){if(i===t)return n(i);e()}if(i==="vec2"){if(t==="vec2"||Hi(t))return n("vec2");if(t==="mat3x2")return n("vec3");if(t==="mat4x2")return n("vec4");e()}if(i==="vec3"){if(t==="mat2x3")return n("vec2");if(t==="vec3"||Yi(t))return n("vec3");if(t==="mat4x3")return n("vec4");e()}if(i==="vec4"){if(t==="mat2x4")return n("vec2");if(t==="mat3x4")return n("vec3");if(t==="vec4"||Vi(t))return n("vec4");e()}if(t==="vec2"){if(Hi(i))return n("vec2");if(i==="mat2x3")return n("vec3");if(i==="mat2x4")return n("vec4");e()}if(t==="vec3"){if(i==="mat3x2")return n("vec2");if(Yi(i))return n("vec3");if(i==="mat3x4")return n("vec4");e()}if(t==="vec4"){if(i==="mat4x2")return n("vec2");if(i==="mat4x3")return n("vec3");if(Vi(i))return n("vec4");e()}if(Hi(i)){if(Hi(t))return n("mat2");if(t==="mat3x2")return n("mat3x2");if(t==="mat4x2")return n("mat4x2");e()}if(i==="mat2x3"){if(Hi(t))return n("mat2x3");if(t==="mat3x2")return n("mat3");if(t==="mat4x2")return n("mat4x3");e()}if(i==="mat2x4"){if(Hi(t))return n("mat2x4");if(t==="mat3x2")return n("mat3x4");if(t==="mat4x2")return n("mat4");e()}if(i==="mat3x2"){if(t==="mat2x3")return n("mat2");if(Yi(t))return n("mat3x2");if(t==="mat4x3")return n("mat4x2");e()}if(Yi(i)){if(t==="mat2x3")return n("mat2x3");if(Yi(t))return n("mat3");if(t==="mat4x3")return n("mat4x3");e()}if(i==="mat3x4"){if(t==="mat2x3")return n("mat2x4");if(Yi(t))return n("mat3x4");if(t==="mat4x3")return n("mat4");e()}if(i==="mat4x2"){if(t==="mat2x4")return n("mat2");if(t==="mat3x4")return n("mat3x2");if(Vi(t))return n("mat4x2");e()}if(i==="mat4x3"){if(t==="mat2x4")return n("mat2x3");if(t==="mat3x4")return n("mat3");if(Vi(t))return n("mat4x3");e()}if(Vi(i)){if(t==="mat2x4")return n("mat2x4");if(t==="mat3x4")return n("mat3x4");if(Vi(t))return n("mat4");e()}throw new Error(`Invalid mul types: ${i}, ${t}`)}const Ei=(i,t)=>new gI({a:i,b:t}),Nl=(i,t)=>new mI({a:i,b:t}),ms=(i,t)=>new EI({a:i,b:t});class gI extends Yr{constructor({a:t,b:e}){super({a:t,b:e,outKey:"sum",outTypeFunc:qc}),this.statements=({inputs:n,outputs:s})=>[`${s.sum} = ${n.a} + ${n.b};`]}}class mI extends Yr{constructor({a:t,b:e}){super({a:t,b:e,outKey:"difference",outTypeFunc:fI}),this.statements=({inputs:n,outputs:s})=>[`${s.difference} = ${n.a} - ${n.b};`]}}class EI extends Yr{constructor({a:t,b:e}){super({a:t,b:e,outKey:"product",outTypeFunc:pI}),this.statements=({inputs:n,outputs:s})=>[`${s.product} = ${n.a} * ${n.b};`]}}const II=i=>new xI({value:i}),CI=i=>new yI({value:i}),Fl=i=>new _I({value:i});class xI extends Hr{constructor({value:t}){super({a:t,outKey:"uint",outTypeFunc:()=>"uint"}),this.statements=({inputs:e,outputs:n})=>[`${n.uint} = floatBitsToUint(${e.a});`]}}class yI extends Hr{constructor({value:t}){super({a:t,outKey:"uint",outTypeFunc:()=>"uint"}),this.statements=({inputs:e,outputs:n})=>[`${n.uint} = packHalf2x16(${e.a});`]}}class _I extends Hr{constructor({value:t}){super({a:t,outKey:"rgba8",outTypeFunc:()=>"vec4"}),this.statements=({inputs:e,outputs:n})=>[`uvec4 uRgba = uvec4(${e.a} & 0xffu, (${e.a} >> 8u) & 0xffu, (${e.a} >> 16u) & 0xffu, (${e.a} >> 24u) & 0xffu);`,`${n.rgba8} = vec4(uRgba) / 255.0;`]}}const BI=i=>new wI({a:i}),vI=i=>new DI({vector:i}),SI=({vector:i,vectorType:t,x:e,y:n,z:s,w:r,r:a,g:o,b:l,a:A})=>new RI({vector:i,vectorType:t,x:e,y:n,z:s,w:r,r:a,g:o,b:l,a:A}),bI=(i,t)=>new QI({a:i,b:t});class wI extends Hr{constructor({a:t}){super({a:t,outTypeFunc:e=>e,outKey:"normalize"}),this.statements=({inputs:e,outputs:n})=>[`${n.normalize} = normalize(${e.a});`]}}function MI(i){if(i==="float")return"vec2";if(i==="vec2")return"vec3";if(i==="vec3")return"vec4";throw new Error("Invalid type")}class QI extends Yr{constructor({a:t,b:e}){const n=kn(t),s=MI(n);super({a:t,b:e,outKey:"extend",outTypeFunc:()=>s}),this.statements=({inputs:r,outputs:a})=>[`${a.extend} = ${s}(${r.a}, ${r.b});`]}}function TI(i){const t=e=>e;switch(i){case"vec2":return t({x:"float",y:"float",r:"float",g:"float"});case"vec3":return t({x:"float",y:"float",z:"float",r:"float",g:"float",b:"float"});case"vec4":return t({x:"float",y:"float",z:"float",w:"float",r:"float",g:"float",b:"float",a:"float"});case"ivec2":return t({x:"int",y:"int",r:"int",g:"int"});case"ivec3":return t({x:"int",y:"int",z:"int",r:"int",g:"int",b:"int"});case"ivec4":return t({x:"int",y:"int",z:"int",w:"int",r:"int",g:"int",b:"int",a:"int"});case"uvec2":return t({x:"uint",y:"uint",r:"uint",g:"uint"});case"uvec3":return t({x:"uint",y:"uint",z:"uint",r:"uint",g:"uint",b:"uint"});case"uvec4":return t({x:"uint",y:"uint",z:"uint",w:"uint",r:"uint",g:"uint",b:"uint",a:"uint"});default:throw new Error(`Invalid vector type: ${i}`)}}class DI extends Se{constructor({vector:t}){const n={vector:kn(t)},s=TI(n.vector);super({inTypes:n,outTypes:s,inputs:{vector:t}}),this.statements=({inputs:r,outputs:a})=>{const{x:o,y:l,z:A,w:h,r:c,g:d,b:p,a:g}=a,{vector:m}=r;return[o?`${o} = ${m}.x;`:null,l?`${l} = ${m}.y;`:null,A?`${A} = ${m}.z;`:null,h?`${h} = ${m}.w;`:null,c?`${c} = ${m}.r;`:null,d?`${d} = ${m}.g;`:null,p?`${p} = ${m}.b;`:null,g?`${g} = ${m}.a;`:null].filter(Boolean)}}}class RI extends Se{constructor({vector:t,vectorType:e,x:n,y:s,z:r,w:a,r:o,g:l,b:A,a:h}){if(!t&&!e)throw new Error("Either vector or vectorType must be provided");const c=e??kn(t),d=DE(c),p=RE(c),g={vector:c,x:d,y:d,r:d,g:d},m={vector:t,x:n,y:s,r:o,g:l};p>=3&&(Object.assign(g,{z:d,b:d}),Object.assign(m,{z:r,b:A})),p>=4&&(Object.assign(g,{w:d,a:d}),Object.assign(m,{w:a,a:h})),super({inTypes:g,outTypes:{vector:c},inputs:m}),this.statements=({inputs:f,outputs:u})=>{const{vector:y}=u,{vector:x,x:I,y:b,z:S,w,r:R,g:B,b:_,a:T}=f,L=[`${y}.x = ${I??R??(x?`${x}.x`:lr(d))};`,`${y}.y = ${b??B??(x?`${x}.y`:lr(d))};`];return p>=3&&L.push(`${y}.z = ${S??_??(x?`${x}.z`:lr(d))};`),p>=4&&L.push(`${y}.w = ${w??T??(x?`${x}.w`:lr(d))};`),L}}dynoOut(){return new qe(this,"vector")}}const NI=(i,{scale:t,scales:e,rotate:n,translate:s})=>new UI({position:i,scale:t,scales:e,rotate:n,translate:s}).outputs.position,FI=(i,{scale:t,scales:e,rotate:n})=>new LI({dir:i,scale:t,scales:e,rotate:n}).outputs.dir;class UI extends Se{constructor({position:t,scale:e,scales:n,rotate:s,translate:r}){super({inTypes:{position:"vec3",scale:"float",scales:"vec3",rotate:"vec4",translate:"vec3"},outTypes:{position:"vec3"},inputs:{position:t,scale:e,scales:n,rotate:s,translate:r},statements:({inputs:a,outputs:o})=>{const{position:l}=o;if(!l)return[];const{scale:A,scales:h,rotate:c,translate:d}=a;return[`${l} = ${a.position??"vec3(0.0, 0.0, 0.0)"};`,A?`${l} *= ${A};`:null,h?`${l} *= ${h};`:null,c?`${l} = quatVec(${c}, ${l});`:null,d?`${l} += ${d};`:null].filter(Boolean)}})}}class LI extends Se{constructor({dir:t,scale:e,scales:n,rotate:s}){super({inTypes:{dir:"vec3",scale:"float",scales:"vec3",rotate:"vec4"},outTypes:{dir:"vec3"},inputs:{dir:t,scale:e,scales:n,rotate:s},statements:({inputs:r,outputs:a})=>{const{dir:o}=a;if(!o)return[];const{scale:l,scales:A,rotate:h}=r;return[`${o} = ${r.dir??"vec3(0.0, 0.0, 0.0)"};`,l?`${o} *= ${l};`:null,A?`${o} *= ${A};`:null,h?`${o} = quatVec(${h}, ${o});`:null].filter(Boolean)}})}}var PI=`precision highp float;
precision highp int;
precision highp sampler2D;
precision highp usampler2D;
precision highp isampler2D;
precision highp sampler2DArray;
precision highp usampler2DArray;
precision highp isampler2DArray;
precision highp sampler3D;
precision highp usampler3D;
precision highp isampler3D;

#include <splatDefines>

uniform uint targetLayer;
uniform int targetBase;
uniform int targetCount;

out vec4 target;

{{ GLOBALS }}

void computeReadback(int index) {
    {{ STATEMENTS }}
}

void main() {
    int targetIndex = int(targetLayer << SPLAT_TEX_LAYER_BITS) + int(uint(gl_FragCoord.y) << SPLAT_TEX_WIDTH_BITS) + int(gl_FragCoord.x);
    int index = targetIndex - targetBase;

    if ((index >= 0) && (index < targetCount)) {
        computeReadback(index);
    } else {
        target = vec4(0.0, 0.0, 0.0, 0.0);
    }
}`;const Wr=class ti{constructor({renderer:t}={}){this.renderer=t,this.capacity=0,this.count=0}dispose(){this.target&&(this.target.dispose(),this.target=void 0)}ensureBuffer(t,e){const s=Math.ceil(Math.max(1,t)/ie)*ie*4;if(e.byteLength>=s)return e;const r=new ArrayBuffer(s);if(e instanceof ArrayBuffer)return r;const a=e.constructor;return new a(r)}ensureCapacity(t){const{width:e,height:n,depth:s,maxSplats:r}=sn(t);(!this.target||r>this.capacity)&&(this.dispose(),this.capacity=r,this.target=new rc(e,n,s,{depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,magFilter:be,minFilter:be}),this.target.texture.format=Be,this.target.texture.type=We,this.target.texture.internalFormat="RGBA8",this.target.scissorTest=!0)}prepareProgramMaterial(t){let e=ti.readbackProgram.get(t);if(!e){const s=qn({index:"int"},{rgba8:"vec4"},({index:r})=>(t.inputs.index=r,{rgba8:new VE({rgba8:t.outputs.rgba8})}));ti.programTemplate||(ti.programTemplate=new Vc(PI)),e=new Yc({graph:s,inputs:{index:"index"},outputs:{rgba8:"target"},template:ti.programTemplate}),Object.assign(e.uniforms,{targetLayer:{value:0},targetBase:{value:0},targetCount:{value:0}}),ti.readbackProgram.set(t,e)}const n=e.prepareMaterial();return ti.fullScreenQuad.material=n,{program:e,material:n}}saveRenderState(t){return{xrEnabled:t.xr.enabled,autoClear:t.autoClear}}resetRenderState(t,e){t.setRenderTarget(null),t.xr.enabled=e.xrEnabled,t.autoClear=e.autoClear}process({count:t,material:e}){const n=this.renderer;if(!n)throw new Error("No renderer");if(!this.target)throw new Error("No target");const s=ie*xi;e.uniforms.targetBase.value=0,e.uniforms.targetCount.value=t;let r=0;for(;r<t;){const a=Math.floor(r/s),o=a*s,l=Math.min(xi,Math.ceil((t-o)/ie));e.uniforms.targetLayer.value=a,this.target.scissor.set(0,0,ie,l),n.setRenderTarget(this.target,a),n.xr.enabled=!1,n.autoClear=!1,ti.fullScreenQuad.render(n),r+=ie*l}this.count=t}async read({readback:t}){const e=this.renderer;if(!e)throw new Error("No renderer");if(!this.target)throw new Error("No target");const n=Math.ceil(this.count/ie)*ie;if(t.byteLength<n*4)throw new Error(`Readback buffer too small: ${t.byteLength} < ${n*4}`);const s=new Uint8Array(t instanceof ArrayBuffer?t:t.buffer),r=ie*xi;let a=0;const o=[];for(;a<this.count;){const l=Math.floor(a/r),A=l*r,h=Math.min(xi,Math.ceil((this.count-A)/ie));e.setRenderTarget(this.target,l);const c=ie*h*4,d=s.subarray(A*4,A*4+c),p=e?.readRenderTargetPixelsAsync(this.target,0,0,ie,h,d);o.push(p),a+=ie*h}return Promise.all(o).then(()=>t)}render({reader:t,count:e,renderer:n}){if(this.renderer=n||this.renderer,!this.renderer)throw new Error("No renderer");this.ensureCapacity(e);const{program:s,material:r}=this.prepareProgramMaterial(t);s.update();const a=this.saveRenderState(this.renderer);this.process({count:e,material:r}),this.resetRenderState(this.renderer,a)}async readback({readback:t}){if(!this.renderer)throw new Error("No renderer");const e=this.saveRenderState(this.renderer),n=this.read({readback:t});return this.resetRenderState(this.renderer,e),n}async renderReadback({reader:t,count:e,renderer:n,readback:s}){if(this.renderer=n||this.renderer,!this.renderer)throw new Error("No renderer");this.ensureCapacity(e);const{program:r,material:a}=this.prepareProgramMaterial(t);r.update();const o=this.saveRenderState(this.renderer);this.process({count:e,material:a});const l=this.read({readback:s});return this.resetRenderState(this.renderer,o),l}getTexture(){var t;return(t=this.target)==null?void 0:t.texture}};Wr.programTemplate=null;Wr.readbackProgram=new Map;Wr.fullScreenQuad=new bc(new eA({visible:!1}));let Wc=Wr;const AA=class Fe{constructor(t={}){this.capacity=0,this.count=0,this.array=null,this.readback=null,this.source=null,this.needsUpdate=!0,this.dyno=new gn({key:"rgbaArray",type:Jc,globals:()=>[Xc],value:{texture:Fe.getEmpty(),count:0},update:e=>{var n;return e.texture=((n=this.readback)==null?void 0:n.getTexture())??this.source??Fe.getEmpty(),e.count=this.count,e}}),t.array?(this.array=t.array,this.capacity=Math.floor(this.array.length/4),this.capacity=Math.floor(this.capacity/ie)*ie,this.count=Math.min(this.capacity,t.count??Number.POSITIVE_INFINITY)):(this.capacity=t.capacity??0,this.count=0)}dispose(){this.readback&&(this.readback.dispose(),this.readback=null),this.source&&(this.source.dispose(),this.source=null)}ensureCapacity(t){var e;if(!this.array||t>(((e=this.array)==null?void 0:e.length)??0)/4){this.capacity=sn(t).maxSplats;const n=new Uint8Array(this.capacity*4);this.array&&n.set(this.array),this.array=n}return this.array}getTexture(){var t;let e=(t=this.readback)==null?void 0:t.getTexture();return(this.source||this.array)&&(e=this.maybeUpdateSource()),e??Fe.getEmpty()}maybeUpdateSource(){if(!this.array)throw new Error("No array");if(this.needsUpdate||!this.source){if(this.needsUpdate=!1,this.source){const{width:t,height:e,depth:n}=this.source.image;this.capacity!==t*e*n&&(this.source.dispose(),this.source=null)}if(this.source)this.array.buffer!==this.source.image.data.buffer&&(this.source.image.data=new Uint8Array(this.array.buffer));else{const{width:t,height:e,depth:n}=sn(this.capacity);this.source=new vn(this.array,t,e,n),this.source.format=Be,this.source.type=We,this.source.internalFormat="RGBA8",this.source.needsUpdate=!0}this.source.needsUpdate=!0}return this.source}render({reader:t,count:e,renderer:n}){this.readback||(this.readback=new Wc({renderer:n})),this.readback.render({reader:t,count:e,renderer:n}),this.capacity=this.readback.capacity,this.count=this.readback.count}fromPackedSplats({packedSplats:t,base:e,count:n,renderer:s}){const{dynoSplats:r,dynoBase:a,dynoCount:o,reader:l}=Fe.makeDynos();return r.packedSplats=t,a.value=e,o.value=n,this.render({reader:l,count:n,renderer:s}),this}async read(){if(!this.readback)throw new Error("No readback");return(!this.array||this.array.length<this.count*4)&&(this.array=new Uint8Array(this.capacity*4)),(await this.readback.readback({readback:this.array})).subarray(0,this.count*4)}static getEmpty(){if(!Fe.emptySource){const t=new Uint8Array(4);Fe.emptySource=new vn(t,1,1,1),Fe.emptySource.format=Be,Fe.emptySource.type=We,Fe.emptySource.internalFormat="RGBA8",Fe.emptySource.needsUpdate=!0}return Fe.emptySource}static makeDynos(){if(!Fe.dynos){const t=new hA,e=new Lo({value:0}),n=new Lo({value:0}),s=qn({index:"int"},{rgba8:"vec4"},({index:r})=>{if(!r)throw new Error("index is undefined");r=Ei(r,e);const a=LE(t,r,e,n);return{rgba8:xr(a).outputs.rgba}});Fe.dynos={dynoSplats:t,dynoBase:e,dynoCount:n,reader:s}}return Fe.dynos}};AA.emptySource=null;AA.dynos=null;let kI=AA;const Jc={type:"RgbaArray"},Xc=Je(`
  struct RgbaArray {
    sampler2DArray texture;
    int count;
  };
`);function GI(i,t){return new Se({inTypes:{rgba:Jc,index:"int"},outTypes:{rgba:"vec4"},inputs:{rgba:i,index:t},globals:()=>[Xc],statements:({inputs:n,outputs:s})=>wn(`
        if ((index >= 0) && (index < ${n.rgba}.count)) {
          ${s.rgba} = texelFetch(${n.rgba}.texture, splatTexCoord(index), 0);
        } else {
          ${s.rgba} = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `)}).outputs.rgba}function zI(i){switch(i){case"all":return 0;case"plane":return 1;case"sphere":return 2;case"box":return 3;case"ellipsoid":return 4;case"cylinder":return 5;case"capsule":return 6;case"infinite_cone":return 7;default:throw new Error(`Unknown SDF type: ${i}`)}}function OI(i){switch(i){case"multiply":return 0;case"set_rgb":return 1;case"add_rgba":return 2;default:throw new Error(`Unknown blend mode: ${i}`)}}class HI extends ve{constructor(t={}){super();const{type:e,invert:n,opacity:s,color:r,displace:a,radius:o}=t;this.type=e??"sphere",this.invert=n??!1,this.opacity=s??1,this.color=r??new zt(1,1,1),this.displace=a??new Q(0,0,0),this.radius=o??0}}const Kc=class jc extends ve{constructor(t={}){const{name:e,rgbaBlendMode:n="multiply",sdfSmooth:s=0,softEdge:r=0,invert:a=!1,sdfs:o=null}=t;super(),this.rgbaBlendMode=n,this.sdfSmooth=s,this.softEdge=r,this.invert=a,this.sdfs=o,this.ordering=jc.nextOrdering++,this.name=e??`Edit ${this.ordering}`}addSdf(t){this.sdfs==null&&(this.sdfs=[]),this.sdfs.includes(t)||this.sdfs.push(t)}removeSdf(t){this.sdfs!=null&&(this.sdfs=this.sdfs.filter(e=>e!==t))}};Kc.nextOrdering=1;let Zc=Kc;class YI{constructor({maxSdfs:t,maxEdits:e}){this.maxSdfs=Math.max(16,t??0),this.numSdfs=0,this.sdfData=new Uint32Array(this.maxSdfs*8*4),this.sdfFloatData=new Float32Array(this.sdfData.buffer),this.sdfTexture=this.newSdfTexture(this.sdfData,this.maxSdfs),this.dynoSdfArray=new gn({key:"sdfArray",type:$c,globals:()=>[th],value:{numSdfs:0,sdfTexture:this.sdfTexture},update:n=>(n.numSdfs=this.numSdfs,n.sdfTexture=this.sdfTexture,n)}),this.maxEdits=Math.max(16,e??0),this.numEdits=0,this.editData=new Uint32Array(this.maxEdits*4),this.editFloatData=new Float32Array(this.editData.buffer),this.dynoNumEdits=new Lo({value:0}),this.dynoEdits=this.newEdits(this.editData,this.maxEdits)}newSdfTexture(t,e){const n=new Fu(t,8,e,zn,Ve);return n.internalFormat="RGBA32UI",n.needsUpdate=!0,n}newEdits(t,e){return new gn({key:"edits",type:"uvec4",count:e,globals:()=>[eh],value:t})}ensureCapacity({maxSdfs:t,maxEdits:e}){let n=!1;return t>this.sdfTexture.image.height&&(this.sdfTexture.dispose(),this.maxSdfs=Math.max(this.maxSdfs*2,t),this.sdfData=new Uint32Array(this.maxSdfs*8*4),this.sdfFloatData=new Float32Array(this.sdfData.buffer),this.sdfTexture=this.newSdfTexture(this.sdfData,this.maxSdfs)),e>(this.dynoEdits.count??0)&&(this.maxEdits=Math.max(this.maxEdits*2,e),this.editData=new Uint32Array(this.maxEdits*4),this.editFloatData=new Float32Array(this.editData.buffer),this.dynoEdits=this.newEdits(this.editData,this.maxEdits),n=!0),n}updateEditData(t,e){const n=this.editData[t]!==e;return this.editData[t]=e,n}updateEditFloatData(t,e){qi[0]=e;const n=this.editFloatData[t]!==qi[0];return n&&(this.editFloatData[t]=qi[0]),n}encodeEdit(t,{sdfFirst:e,sdfCount:n,invert:s,rgbaBlendMode:r,softEdge:a,sdfSmooth:o}){const l=t*4;let A=!1;return A=this.updateEditData(l+0,r|(s?256:0))||A,A=this.updateEditData(l+1,e|n<<16)||A,A=this.updateEditFloatData(l+2,a)||A,A=this.updateEditFloatData(l+3,o)||A,A}updateSdfData(t,e){const n=this.sdfData[t]!==e;return this.sdfData[t]=e,n}updateSdfFloatData(t,e){qi[0]=e;const n=this.sdfFloatData[t]!==qi[0];return n&&(this.sdfFloatData[t]=qi[0]),n}encodeSdf(t,{sdfType:e,invert:n,center:s,quaternion:r,scale:a,sizes:o},l){const A=t*32,h=e|(n?256:0);let c=!1;c=this.updateSdfFloatData(A+0,s?.x??0)||c,c=this.updateSdfFloatData(A+1,s?.y??0)||c,c=this.updateSdfFloatData(A+2,s?.z??0)||c,c=this.updateSdfData(A+3,h)||c,c=this.updateSdfFloatData(A+4,r?.x??0)||c,c=this.updateSdfFloatData(A+5,r?.y??0)||c,c=this.updateSdfFloatData(A+6,r?.z??0)||c,c=this.updateSdfFloatData(A+7,r?.w??0)||c,c=this.updateSdfFloatData(A+8,a?.x??0)||c,c=this.updateSdfFloatData(A+9,a?.y??0)||c,c=this.updateSdfFloatData(A+10,a?.z??0)||c,c=this.updateSdfData(A+11,0)||c,c=this.updateSdfFloatData(A+12,o?.x??0)||c,c=this.updateSdfFloatData(A+13,o?.y??0)||c,c=this.updateSdfFloatData(A+14,o?.z??0)||c,c=this.updateSdfFloatData(A+15,o?.w??0)||c;const d=Math.min(4,l.length);for(let p=0;p<d;++p){const g=A+16+p*4;c=this.updateSdfFloatData(g+0,l[p].x)||c,c=this.updateSdfFloatData(g+1,l[p].y)||c,c=this.updateSdfFloatData(g+2,l[p].z)||c,c=this.updateSdfFloatData(g+3,l[p].w)||c}return c}update(t){const e=t.reduce((c,{sdfs:d})=>c+d.length,0),n=this.ensureCapacity({maxEdits:t.length,maxSdfs:e}),s=[new Jt,new Jt],r=new Q,a=new de,o=new Q,l=new Jt;let A=0,h=n;t.length!==this.dynoNumEdits.value&&(this.dynoNumEdits.value=t.length,this.numEdits=t.length,h=!0);for(const[c,{edit:d,sdfs:p}]of t.entries()){h=this.encodeEdit(c,{sdfFirst:A,sdfCount:p.length,invert:d.invert,rgbaBlendMode:OI(d.rgbaBlendMode),softEdge:d.softEdge,sdfSmooth:d.sdfSmooth})||h;let g=!1;for(const m of p)l.set(m.scale.x,m.scale.y,m.scale.z,m.radius),m.scale.setScalar(1),m.updateMatrixWorld(),m.matrixWorld.clone().invert().decompose(r,a,o),m.scale.set(l.x,l.y,l.z),m.updateMatrixWorld(),s[0].set(m.color.r,m.color.g,m.color.b,m.opacity),s[1].set(m.displace.x,m.displace.y,m.displace.z,1),g=this.encodeSdf(A,{sdfType:zI(m.type),invert:m.invert,center:r,quaternion:a,scale:o,sizes:l},s)||g,A+=1;this.numSdfs=A,g&&(this.sdfTexture.needsUpdate=!0),h||(h=g)}return{updated:h,dynoUpdated:n}}modify(t){return VI(t,this.dynoSdfArray,this.dynoNumEdits,this.dynoEdits)}}const $c={type:"SdfArray"},th=Je(`
  struct SdfArray {
    int numSdfs;
    usampler2D sdfTexture;
  };

  void unpackSdfArray(
    usampler2D sdfTexture, int sdfIndex, out uint flags,
    out vec3 center, out vec4 quaternion, out vec3 scale, out vec4 sizes,
    int numValues, out vec4 values[4]
  ) {
    uvec4 temp = texelFetch(sdfTexture, ivec2(0, sdfIndex), 0);
    flags = temp.w;
    center = vec3(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z));

    temp = texelFetch(sdfTexture, ivec2(1, sdfIndex), 0);
    quaternion = vec4(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z), uintBitsToFloat(temp.w));

    temp = texelFetch(sdfTexture, ivec2(2, sdfIndex), 0);
    scale = vec3(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z));

    temp = texelFetch(sdfTexture, ivec2(3, sdfIndex), 0);
    sizes = vec4(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z), uintBitsToFloat(temp.w));

    for (int i = 0; i < numValues; ++i) {
      temp = texelFetch(sdfTexture, ivec2(4 + i, sdfIndex), 0);
      values[i] = vec4(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z), uintBitsToFloat(temp.w));
    }
  }

  const uint SDF_FLAG_TYPE = 0xFFu;
  const uint SDF_FLAG_INVERT = 1u << 8u;

  const uint SDF_TYPE_ALL = 0u;
  const uint SDF_TYPE_PLANE = 1u;
  const uint SDF_TYPE_SPHERE = 2u;
  const uint SDF_TYPE_BOX = 3u;
  const uint SDF_TYPE_ELLIPSOID = 4u;
  const uint SDF_TYPE_CYLINDER = 5u;
  const uint SDF_TYPE_CAPSULE = 6u;
  const uint SDF_TYPE_INFINITE_CONE = 7u;

  float evaluateSdfArray(
    usampler2D sdfTexture, int numSdfs, int sdfFirst, int sdfCount, vec3 pos,
    float smoothK, int numValues, out vec4 outValues[4]
  ) {
    float distanceAccum = (smoothK == 0.0) ? 1.0 / 0.0 : 0.0;
    float maxExp = -1.0 / 0.0;
    for (int i = 0; i < numValues; ++i) {
        outValues[i] = vec4(0.0);
    }

    uint flags;
    vec3 center, scale;
    vec4 quaternion, sizes;
    vec4 values[4];

    int sdfLast = min(sdfFirst + sdfCount, numSdfs);
    for (int index = sdfFirst; index < sdfLast; ++index) {
      unpackSdfArray(sdfTexture, index, flags, center, quaternion, scale, sizes, numValues, values);
      uint sdfType = flags & SDF_FLAG_TYPE;
      vec3 sdfPos = quatVec(quaternion, pos * scale) + center;

      float distance;
      switch (sdfType) {
        case SDF_TYPE_ALL:
          distance = -1.0 / 0.0;
          break;
        case SDF_TYPE_PLANE: {
          distance = sdfPos.z;
          break;
        }
        case SDF_TYPE_SPHERE: {
          distance = length(sdfPos) - sizes.w;
          break;
        }
        case SDF_TYPE_BOX: {
          vec3 q = abs(sdfPos) - sizes.xyz + sizes.w;
          distance = length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - sizes.w;
          break;
        }
        case SDF_TYPE_ELLIPSOID: {
          vec3 sizes = sizes.xyz;
          float k0 = length(sdfPos / sizes);
          float k1 = length(sdfPos / dot(sizes, sizes));
          distance = k0 * (k0 - 1.0) / k1;
          break;
        }
        case SDF_TYPE_CYLINDER: {
          vec2 d = abs(vec2(length(sdfPos.xz), sdfPos.y)) - sizes.wy;
          distance = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
          break;
        }
        case SDF_TYPE_CAPSULE: {
          sdfPos.y -= clamp(sdfPos.y, -0.5 * sizes.y, 0.5 * sizes.y);
          distance = length(sdfPos) - sizes.w;
          break;
        }
        case SDF_TYPE_INFINITE_CONE: {
          float angle = 0.25 * PI * sizes.w;
          vec2 c = vec2(sin(angle), cos(angle));
          vec2 q = vec2(length(sdfPos.xy), -sdfPos.z);
          float d = length(q - c * max(dot(q, c), 0.0));
          distance = d * (((q.x * c.y - q.y * c.x) < 0.0) ? -1.0 : 1.0);
          break;
        }
      }

      if ((flags & SDF_FLAG_INVERT) != 0u) {
        distance = -distance;
      }

      if (smoothK == 0.0) {
        if (distance < distanceAccum) {
          distanceAccum = distance;
          for (int i = 0; i < numValues; ++i) {
            outValues[i] = values[i];
          }
        }
      } else {
        float scaledDistance = -distance / smoothK;
        if (scaledDistance > maxExp) {
          float scale = exp(maxExp - scaledDistance);
          distanceAccum *= scale;
          for (int i = 0; i < numValues; ++i) {
            outValues[i] *= scale;
          }
          maxExp = scaledDistance;
        }

        float weight = exp(scaledDistance - maxExp);
        distanceAccum += weight;
        for (int i = 0; i < numValues; ++i) {
          outValues[i] += weight * values[i];
        }
      }
    }

    if (smoothK == 0.0) {
      return distanceAccum;
    } else {
      // Very distant SDFs may result in 0 accumulation
      if (distanceAccum == 0.0) {
        return 1.0 / 0.0;
      }
      for (int i = 0; i < numValues; ++i) {
        outValues[i] /= distanceAccum;
      }
      return (-log(distanceAccum) - maxExp) * smoothK;
    }
  }

  float modulateSdfArray(
    usampler2D sdfTexture, int numSdfs, int sdfFirst, int sdfCount, vec3 pos,
    float smoothK, int numValues, out vec4 values[4],
    float softEdge, bool invert
  ) {
    float distance = evaluateSdfArray(sdfTexture, numSdfs, sdfFirst, sdfCount, pos, smoothK, numValues, values);
    if (invert) {
      distance = -distance;
    }

    return (softEdge == 0.0) ? ((distance < 0.0) ? 1.0 : 0.0)
      : clamp(-distance / softEdge + 0.5, 0.0, 1.0);
  }
`),eh=Je(`
  const uint EDIT_FLAG_BLEND = 0xFFu;
  const uint EDIT_BLEND_MULTIPLY = 0u;
  const uint EDIT_BLEND_SET_RGB = 1u;
  const uint EDIT_BLEND_ADD_RGBA = 2u;
  const uint EDIT_FLAG_INVERT = 0x100u;

  void decodeEdit(
    uvec4 packedEdit, out int sdfFirst, out int sdfCount,
    out bool invert, out uint rgbaBlendMode, out float softEdge, out float sdfSmooth
  ) {
    rgbaBlendMode = packedEdit.x & EDIT_FLAG_BLEND;
    invert = (packedEdit.x & EDIT_FLAG_INVERT) != 0u;

    sdfFirst = int(packedEdit.y & 0xFFFFu);
    sdfCount = int(packedEdit.y >> 16u);

    softEdge = uintBitsToFloat(packedEdit.z);
    sdfSmooth = uintBitsToFloat(packedEdit.w);
  }

  void applyRgbaDisplaceEdit(
    usampler2D sdfTexture, int numSdfs, int sdfFirst, int sdfCount, inout vec3 pos,
    float smoothK, float softEdge, bool invert, uint rgbaBlendMode, inout vec4 rgba
  ) {
    vec4 values[4];
    float modulate = modulateSdfArray(sdfTexture, numSdfs, sdfFirst, sdfCount, pos, smoothK, 2, values, softEdge, invert);
    // On Android, moving values[0] is necessary to work around a compiler bug.
    vec4 sdfRgba = values[0];
    vec4 sdfDisplaceScale = values[1];

    vec4 target;
    switch (rgbaBlendMode) {
      case EDIT_BLEND_MULTIPLY:
        target = rgba * sdfRgba;
        break;
      case EDIT_BLEND_SET_RGB:
        target = vec4(sdfRgba.rgb, rgba.a * sdfRgba.a);
        break;
      case EDIT_BLEND_ADD_RGBA:
        target = rgba + sdfRgba;
        break;
      default:
        // Debug output if blend mode not set
        target = vec4(fract(pos), 1.0);
    }
    rgba = mix(rgba, target, modulate);
    pos += sdfDisplaceScale.xyz * modulate;
  }

  void applyPackedRgbaDisplaceEdit(uvec4 packedEdit, usampler2D sdfTexture, int numSdfs, inout vec3 pos, inout vec4 rgba) {
    int sdfFirst, sdfCount;
    bool invert;
    uint rgbaBlendMode;
    float softEdge, sdfSmooth;
    decodeEdit(packedEdit, sdfFirst, sdfCount, invert, rgbaBlendMode, softEdge, sdfSmooth);
    applyRgbaDisplaceEdit(sdfTexture, numSdfs, sdfFirst, sdfCount, pos, sdfSmooth, softEdge, invert, rgbaBlendMode, rgba);
  }
`);function VI(i,t,e,n){return new Se({inTypes:{gsplat:xe,sdfArray:$c,numEdits:"int",rgbaDisplaceEdits:"uvec4"},outTypes:{gsplat:xe},globals:()=>[th,eh],inputs:{gsplat:i,sdfArray:t,numEdits:e,rgbaDisplaceEdits:n},statements:({inputs:r,outputs:a})=>{const{sdfArray:o,numEdits:l,rgbaDisplaceEdits:A}=r,{gsplat:h}=a;return wn(`
        ${h} = ${r.gsplat};
        if (isGsplatActive(${h}.flags)) {
          for (int editIndex = 0; editIndex < ${l}; ++editIndex) {
            applyPackedRgbaDisplaceEdit(
              ${A}[editIndex], ${o}.sdfTexture, ${o}.numSdfs,
              ${h}.center, ${h}.rgba
            );
          }
        }
      `)}}).outputs.gsplat}const qi=new Float32Array(1);class qI{constructor(t){this.modifier=t,this.cache=new Map}apply(t){let e=this.cache.get(t);return e||(e=qn({index:"int"},{gsplat:xe},({index:n})=>{const{gsplat:s}=t.apply({index:n});return this.modifier.apply({gsplat:s})}),this.cache.set(t,e)),e}}class hr{constructor(){this.scale=new Ms({value:Number.NEGATIVE_INFINITY}),this.rotate=new qr({value:new de(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY)}),this.translate=new Qr({value:new Q(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY)})}apply(t){return NI(t,{scale:this.scale,rotate:this.rotate,translate:this.translate})}applyDir(t){return FI(t,{rotate:this.rotate})}applyGsplat(t){return Gc(t,{scale:this.scale,rotate:this.rotate,translate:this.translate})}updateFromMatrix(t){const e=new Q,n=new de,s=new Q;t.decompose(s,n,e);const r=(e.x+e.y+e.z)/3;let a=!1;return r!==this.scale.value&&(this.scale.value=r,a=!0),s.equals(this.translate.value)||(this.translate.value.copy(s),a=!0),n.equals(this.rotate.value)||(this.rotate.value.copy(n),a=!0),a}update(t){return t.updateMatrixWorld(),this.updateFromMatrix(t.matrixWorld)}}class Go extends ve{constructor({numSplats:t,generator:e,construct:n,update:s}){if(super(),this.numSplats=t??0,this.generator=e,this.frameUpdate=s,this.version=0,n){const r=n(this);Object.assign(this,r)}}updateVersion(){this.version+=1}set needsUpdate(t){t&&this.updateVersion()}}const Qs=class zo extends Go{constructor(t={}){const e=new hr,n=new hr,s=new hr,r=new hr,a=new qr({value:new Jt(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY)}),o=new Ms({value:0}),l=new Ms({value:0}),A={transform:e,viewToWorld:n,worldToView:s,viewToObject:r,recolor:a,time:o,deltaTime:l};if(super({update:({time:h,deltaTime:c,viewToWorld:d,globalEdits:p})=>this.update({time:h,deltaTime:c,viewToWorld:d,globalEdits:p})}),this.isInitialized=!1,this.recolor=new zt(1,1,1),this.opacity=1,this.enableViewToObject=!1,this.enableViewToWorld=!1,this.enableWorldToView=!1,this.skinning=null,this.edits=null,this.rgbaDisplaceEdits=null,this.splatRgba=null,this.maxSh=3,this.packedSplats=t.packedSplats??new vi,this.packedSplats.splatEncoding=t.splatEncoding??{...Jr},this.numSplats=this.packedSplats.numSplats,this.editable=t.editable??!0,this.onFrame=t.onFrame,this.context=A,this.objectModifier=t.objectModifier,this.worldModifier=t.worldModifier,this.updateGenerator(),t.url||t.fileBytes||t.constructSplats||t.packedSplats&&!t.packedSplats.isInitialized)this.initialized=this.asyncInitialize(t).then(async()=>{if(this.updateGenerator(),this.isInitialized=!0,t.onLoad){const h=t.onLoad(this);h instanceof Promise&&await h}return this});else if(this.isInitialized=!0,this.initialized=Promise.resolve(this),t.onLoad){const h=t.onLoad(this);h instanceof Promise&&(this.initialized=h.then(()=>this))}this.add(eC())}async asyncInitialize(t){const{url:e,fileBytes:n,fileType:s,fileName:r,maxSplats:a,constructSplats:o,splatEncoding:l}=t;if(e||n||o){const A={url:e,fileBytes:n,fileType:s,fileName:r,maxSplats:a,construct:o,splatEncoding:l};this.packedSplats.reinitialize(A)}this.packedSplats&&(await this.packedSplats.initialized,this.numSplats=this.packedSplats.numSplats,this.updateGenerator())}static async staticInitialize(){await Pc(),zo.isStaticInitialized=!0}pushSplat(t,e,n,s,r){this.packedSplats.pushSplat(t,e,n,s,r)}forEachSplat(t){this.packedSplats.forEachSplat(t)}dispose(){this.packedSplats.dispose()}getBoundingBox(t=!0){if(!this.initialized)throw new Error("Cannot get bounding box before SplatMesh is initialized");const e=new Q(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),n=new Q(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),s=new Q,r=[-1,1];return this.packedSplats.forEachSplat((o,l,A,h,c,d)=>{if(t)e.min(l),n.max(l);else for(const p of r)for(const g of r)for(const m of r)s.set(p*A.x,g*A.y,m*A.z),s.applyQuaternion(h),s.add(l),e.min(s),n.max(s)}),new ri(e,n)}constructGenerator(t){const{transform:e,viewToObject:n,recolor:s}=t,r=qn({index:"int"},{gsplat:xe},({index:a})=>{if(!a)throw new Error("index is undefined");let o=ys(this.packedSplats.dyno,a);if(this.maxSh>=1){const{sh1Texture:A,sh2Texture:h,sh3Texture:c}=this.ensureShTextures();if(A){let d=function(x,I){const{x:b,y:S}=vI(I).outputs,w=ms(Ei(b,S),xs("float",.5)),R=ms(Nl(S,b),xs("float",.5));return Ei(w,ms(x,R))};const p=n.translate,{center:g}=xr(o).outputs,m=BI(Nl(g,p)),f=KI(o,A,m);let u=d(f,this.packedSplats.dynoSh1MinMax);if(this.maxSh>=2&&h){const x=jI(o,h,m);u=Ei(u,d(x,this.packedSplats.dynoSh2MinMax))}if(this.maxSh>=3&&c){const x=ZI(o,c,m);u=Ei(u,d(x,this.packedSplats.dynoSh3MinMax))}let{rgba:y}=xr(o).outputs;y=Ei(y,bI(u,xs("float",0))),o=Ua({gsplat:o,rgba:y})}}if(this.splatRgba){const A=GI(this.splatRgba.dyno,a);o=Ua({gsplat:o,rgba:A})}this.skinning&&(o=this.skinning.modify(o)),this.objectModifier&&(o=this.objectModifier.apply({gsplat:o}).gsplat),o=e.applyGsplat(o);const l=ms(s,xr(o).outputs.rgba);return o=Ua({gsplat:o,rgba:l}),this.rgbaDisplaceEdits&&(o=this.rgbaDisplaceEdits.modify(o)),this.worldModifier&&(o=this.worldModifier.apply({gsplat:o}).gsplat),{gsplat:o}});this.generator=r}updateGenerator(){this.constructGenerator(this.context)}update({time:t,viewToWorld:e,deltaTime:n,globalEdits:s}){var r;this.numSplats=this.packedSplats.numSplats,this.context.time.value=t,this.context.deltaTime.value=n,zo.dynoTime.value=t;const{transform:a,viewToObject:o,recolor:l}=this.context;let A=a.update(this);this.context.viewToWorld.updateFromMatrix(e)&&this.enableViewToWorld&&(A=!0);const h=e.clone().invert();this.context.worldToView.updateFromMatrix(h)&&this.enableWorldToView&&(A=!0);const p=new Xt().compose(a.translate.value,a.rotate.value,new Q().setScalar(a.scale.value)).invert().multiply(e);o.updateFromMatrix(p)&&(this.enableViewToObject||this.packedSplats.extra.sh1)&&(A=!0);const g=new Jt(this.recolor.r,this.recolor.g,this.recolor.b,this.opacity);g.equals(l.value)||(l.value.copy(g),A=!0);const m=this.editable?(this.edits??[]).concat(s):[];this.editable&&!this.edits&&this.traverseVisible(u=>{u instanceof Zc&&m.push(u)}),m.sort((u,y)=>u.ordering-y.ordering);const f=m.map(u=>{if(u.sdfs!=null)return{edit:u,sdfs:u.sdfs};const y=[];return u.traverseVisible(x=>{x instanceof HI&&y.push(x)}),{edit:u,sdfs:y}});if(f.length>0&&!this.rgbaDisplaceEdits){const u=f.length,y=f.reduce((x,I)=>x+I.sdfs.length,0);this.rgbaDisplaceEdits=new YI({maxEdits:u,maxSdfs:y}),this.updateGenerator()}if(this.rgbaDisplaceEdits){const u=this.rgbaDisplaceEdits.update(f);A||(A=u.updated),u.dynoUpdated&&this.updateGenerator()}A&&this.updateVersion(),(r=this.onFrame)==null||r.call(this,{mesh:this,time:t,deltaTime:n})}raycast(t,e){var n,s;if(!this.packedSplats.packedArray||!this.packedSplats.numSplats)return;const{near:r,far:a,ray:o}=t,l=this.matrixWorld.clone().invert(),A=new Ut().setFromMatrix4(l),h=o.origin.clone().applyMatrix4(l),c=o.direction.clone().applyMatrix3(A),d=new Q;l.decompose(new Q,new de,d),(d.x*d.y*d.z)**(1/3);const g=xE(h.x,h.y,h.z,c.x,c.y,c.z,r,a,this.packedSplats.numSplats,this.packedSplats.packedArray,!0,((n=this.packedSplats.splatEncoding)==null?void 0:n.lnScaleMin)??Yn,((s=this.packedSplats.splatEncoding)==null?void 0:s.lnScaleMax)??Vn);for(const m of g){const f=o.direction.clone().multiplyScalar(m).add(o.origin);e.push({distance:m,point:f,object:this})}}ensureShTextures(){if(!this.packedSplats.extra.sh1)return{};let t=this.packedSplats.extra.sh1Texture;if(!t){let s=this.packedSplats.extra.sh1;const{width:r,height:a,depth:o,maxSplats:l}=sn(s.length/2);if(s.length<l*2){const h=new Uint32Array(l*2);h.set(s),this.packedSplats.extra.sh1=h,s=h}const A=new vn(s,r,a,o);A.format=Ur,A.type=Ve,A.internalFormat="RG32UI",A.needsUpdate=!0,t=new Pa({value:A,key:"sh1"}),this.packedSplats.extra.sh1Texture=t}if(!this.packedSplats.extra.sh2)return{sh1Texture:t};let e=this.packedSplats.extra.sh2Texture;if(!e){let s=this.packedSplats.extra.sh2;const{width:r,height:a,depth:o,maxSplats:l}=sn(s.length/4);if(s.length<l*4){const h=new Uint32Array(l*4);h.set(s),this.packedSplats.extra.sh2=h,s=h}const A=new vn(s,r,a,o);A.format=zn,A.type=Ve,A.internalFormat="RGBA32UI",A.needsUpdate=!0,e=new Pa({value:A,key:"sh2"}),this.packedSplats.extra.sh2Texture=e}if(!this.packedSplats.extra.sh3)return{sh1Texture:t,sh2Texture:e};let n=this.packedSplats.extra.sh3Texture;if(!n){let s=this.packedSplats.extra.sh3;const{width:r,height:a,depth:o,maxSplats:l}=sn(s.length/4);if(s.length<l*4){const h=new Uint32Array(l*4);h.set(s),this.packedSplats.extra.sh3=h,s=h}const A=new vn(s,r,a,o);A.format=zn,A.type=Ve,A.internalFormat="RGBA32UI",A.needsUpdate=!0,n=new Pa({value:A,key:"sh3"}),this.packedSplats.extra.sh3Texture=n}return{sh1Texture:t,sh2Texture:e,sh3Texture:n}}};Qs.staticInitialized=Qs.staticInitialize();Qs.isStaticInitialized=!1;Qs.dynoTime=new Ms({value:0});let lA=Qs;const WI=Je(`
  vec3 evaluateSH1(Gsplat gsplat, usampler2DArray sh1, vec3 viewDir) {
    // Extract sint7 values packed into 2 x uint32
    uvec2 packed = texelFetch(sh1, splatTexCoord(gsplat.index), 0).rg;
    vec3 sh1_0 = vec3(ivec3(
      int(packed.x << 25u) >> 25,
      int(packed.x << 18u) >> 25,
      int(packed.x << 11u) >> 25
    )) / 63.0;
    vec3 sh1_1 = vec3(ivec3(
      int(packed.x << 4u) >> 25,
      int((packed.x >> 3u) | (packed.y << 29u)) >> 25,
      int(packed.y << 22u) >> 25
    )) / 63.0;
    vec3 sh1_2 = vec3(ivec3(
      int(packed.y << 15u) >> 25,
      int(packed.y << 8u) >> 25,
      int(packed.y << 1u) >> 25
    )) / 63.0;

    return sh1_0 * (-0.4886025 * viewDir.y)
      + sh1_1 * (0.4886025 * viewDir.z)
      + sh1_2 * (-0.4886025 * viewDir.x);
  }
`),JI=Je(`
  vec3 evaluateSH2(Gsplat gsplat, usampler2DArray sh2, vec3 viewDir) {
    // Extract sint8 values packed into 4 x uint32
    uvec4 packed = texelFetch(sh2, splatTexCoord(gsplat.index), 0);
    vec3 sh2_0 = vec3(ivec3(
      int(packed.x << 24u) >> 24,
      int(packed.x << 16u) >> 24,
      int(packed.x << 8u) >> 24
    )) / 127.0;
    vec3 sh2_1 = vec3(ivec3(
      int(packed.x) >> 24,
      int(packed.y << 24u) >> 24,
      int(packed.y << 16u) >> 24
    )) / 127.0;
    vec3 sh2_2 = vec3(ivec3(
      int(packed.y << 8u) >> 24,
      int(packed.y) >> 24,
      int(packed.z << 24u) >> 24
    )) / 127.0;
    vec3 sh2_3 = vec3(ivec3(
      int(packed.z << 16u) >> 24,
      int(packed.z << 8u) >> 24,
      int(packed.z) >> 24
    )) / 127.0;
    vec3 sh2_4 = vec3(ivec3(
      int(packed.w << 24u) >> 24,
      int(packed.w << 16u) >> 24,
      int(packed.w << 8u) >> 24
    )) / 127.0;

    return sh2_0 * (1.0925484 * viewDir.x * viewDir.y)
      + sh2_1 * (-1.0925484 * viewDir.y * viewDir.z)
      + sh2_2 * (0.3153915 * (2.0 * viewDir.z * viewDir.z - viewDir.x * viewDir.x - viewDir.y * viewDir.y))
      + sh2_3 * (-1.0925484 * viewDir.x * viewDir.z)
      + sh2_4 * (0.5462742 * (viewDir.x * viewDir.x - viewDir.y * viewDir.y));
  }
`),XI=Je(`
  vec3 evaluateSH3(Gsplat gsplat, usampler2DArray sh3, vec3 viewDir) {
    // Extract sint6 values packed into 4 x uint32
    uvec4 packed = texelFetch(sh3, splatTexCoord(gsplat.index), 0);
    vec3 sh3_0 = vec3(ivec3(
      int(packed.x << 26u) >> 26,
      int(packed.x << 20u) >> 26,
      int(packed.x << 14u) >> 26
    )) / 31.0;
    vec3 sh3_1 = vec3(ivec3(
      int(packed.x << 8u) >> 26,
      int(packed.x << 2u) >> 26,
      int((packed.x >> 4u) | (packed.y << 28u)) >> 26
    )) / 31.0;
    vec3 sh3_2 = vec3(ivec3(
      int(packed.y << 22u) >> 26,
      int(packed.y << 16u) >> 26,
      int(packed.y << 10u) >> 26
    )) / 31.0;
    vec3 sh3_3 = vec3(ivec3(
      int(packed.y << 4u) >> 26,
      int((packed.y >> 2u) | (packed.z << 30u)) >> 26,
      int(packed.z << 24u) >> 26
    )) / 31.0;
    vec3 sh3_4 = vec3(ivec3(
      int(packed.z << 18u) >> 26,
      int(packed.z << 12u) >> 26,
      int(packed.z << 6u) >> 26
    )) / 31.0;
    vec3 sh3_5 = vec3(ivec3(
      int(packed.z) >> 26,
      int(packed.w << 26u) >> 26,
      int(packed.w << 20u) >> 26
    )) / 31.0;
    vec3 sh3_6 = vec3(ivec3(
      int(packed.w << 14u) >> 26,
      int(packed.w << 8u) >> 26,
      int(packed.w << 2u) >> 26
    )) / 31.0;

    float xx = viewDir.x * viewDir.x;
    float yy = viewDir.y * viewDir.y;
    float zz = viewDir.z * viewDir.z;
    float xy = viewDir.x * viewDir.y;
    float yz = viewDir.y * viewDir.z;
    float zx = viewDir.z * viewDir.x;

    return sh3_0 * (-0.5900436 * viewDir.y * (3.0 * xx - yy))
      + sh3_1 * (2.8906114 * xy * viewDir.z) +
      + sh3_2 * (-0.4570458 * viewDir.y * (4.0 * zz - xx - yy))
      + sh3_3 * (0.3731763 * viewDir.z * (2.0 * zz - 3.0 * xx - 3.0 * yy))
      + sh3_4 * (-0.4570458 * viewDir.x * (4.0 * zz - xx - yy))
      + sh3_5 * (1.4453057 * viewDir.z * (xx - yy))
      + sh3_6 * (-0.5900436 * viewDir.x * (xx - 3.0 * yy));
  }
`);function KI(i,t,e){return Or({inTypes:{gsplat:xe,sh1:"usampler2DArray",viewDir:"vec3"},outTypes:{rgb:"vec3"},inputs:{gsplat:i,sh1:t,viewDir:e},globals:()=>[Mn,WI],statements:({inputs:n,outputs:s})=>wn(`
        if (isGsplatActive(${n.gsplat}.flags)) {
          ${s.rgb} = evaluateSH1(${n.gsplat}, ${n.sh1}, ${n.viewDir});
        } else {
          ${s.rgb} = vec3(0.0);
        }
      `)}).outputs.rgb}function jI(i,t,e){return Or({inTypes:{gsplat:xe,sh2:"usampler2DArray",viewDir:"vec3"},outTypes:{rgb:"vec3"},inputs:{gsplat:i,sh2:t,viewDir:e},globals:()=>[Mn,JI],statements:({inputs:n,outputs:s})=>wn(`
        if (isGsplatActive(${n.gsplat}.flags)) {
          ${s.rgb} = evaluateSH2(${n.gsplat}, ${n.sh2}, ${n.viewDir});
        } else {
          ${s.rgb} = vec3(0.0);
        }
      `)}).outputs.rgb}function ZI(i,t,e){return Or({inTypes:{gsplat:xe,sh3:"usampler2DArray",viewDir:"vec3"},outTypes:{rgb:"vec3"},inputs:{gsplat:i,sh3:t,viewDir:e},globals:()=>[Mn,XI],statements:({inputs:n,outputs:s})=>wn(`
        if (isGsplatActive(${n.gsplat}.flags)) {
          ${s.rgb} = evaluateSH3(${n.gsplat}, ${n.sh3}, ${n.viewDir});
        } else {
          ${s.rgb} = vec3(0.0);
        }
      `)}).outputs.rgb}const $I=new on,tC=new rn;function eC(){const i=new He($I,tC);return i.frustumCulled=!1,i.onBeforeRender=function(t,e){if(!e.isScene){this.removeFromParent();return}let n=!1;e.traverse(s=>{s instanceof Ol&&(n=!0)}),n||e.add(new Ol({renderer:t})),this.removeFromParent()},i}const Ul=["char","uchar","short","ushort","int","uint","float","double"],nh=class yr{constructor({fileBytes:t}){this.header="",this.littleEndian=!0,this.elements={},this.comments=[],this.data=null,this.numSplats=0,this.fileBytes=t instanceof ArrayBuffer?new Uint8Array(t):t}async parseHeader(){const e=new ReadableStream({start:a=>{a.enqueue(this.fileBytes.slice(0,65536)),a.close()}}).pipeThrough(new TextDecoderStream).getReader();this.header="";const n=`end_header
`;for(;;){const{value:a,done:o}=await e.read();if(o)throw new Error("Failed to read header");this.header+=a;const l=this.header.indexOf(n);if(l>=0){this.header=this.header.slice(0,l+n.length);break}}const s=new TextEncoder().encode(this.header).length;this.data=new DataView(this.fileBytes.buffer,s),this.elements={};let r=null;this.comments=[],this.header.trim().split(`
`).forEach((a,o)=>{const l=a.trim();if(o===0){if(l!=="ply")throw new Error("Invalid PLY header");return}if(l.length===0)return;const A=l.split(" ");switch(A[0]){case"format":if(A[1]==="binary_little_endian")this.littleEndian=!0;else if(A[1]==="binary_big_endian")this.littleEndian=!1;else throw new Error(`Unsupported PLY format: ${A[1]}`);if(A[2]!=="1.0")throw new Error(`Unsupported PLY version: ${A[2]}`);break;case"end_header":break;case"comment":this.comments.push(l.slice(8));break;case"element":{const h=A[1];r={name:h,count:Number.parseInt(A[2]),properties:{}},this.elements[h]=r;break}case"property":if(r==null)throw new Error("Property must be inside an element");A[1]==="list"?r.properties[A[4]]={isList:!0,type:A[3],countType:A[2]}:r.properties[A[2]]={isList:!1,type:A[1]};break}}),this.elements.vertex&&(this.numSplats=this.elements.vertex.count)}parseData(t){let e=0;const n=this.data;if(n==null)throw new Error("No data to parse");for(const s in this.elements){const r=this.elements[s],{count:a,properties:o}=r,l=rC(o),A=aC(o,this.littleEndian),h=t(r)??(()=>{});for(let c=0;c<a;c++)e=A(n,e,l),h(c,l)}}parseSplats(t,e){if(this.elements.vertex==null)throw new Error("No vertex element found");let n=!1;const s=[];let r=0,a=[],o=[],l=[],A,h,c;function d(){const u=sC[r];a=new Array(3).fill(null).flatMap((y,x)=>[0,1,2].map((I,b)=>x+b*u/3)),o=new Array(5).fill(null).flatMap((y,x)=>[0,1,2].map((I,b)=>3+x+b*u/3)),l=new Array(7).fill(null).flatMap((y,x)=>[0,1,2].map((I,b)=>8+x+b*u/3)),A=r>=1?new Float32Array(9):void 0,h=r>=2?new Float32Array(15):void 0,c=r>=3?new Float32Array(21):void 0}function p(u,y){if(!A)throw new Error("Missing sh1");const x=y.f_rest;for(let I=0;I<a.length;I++)A[I]=x[a[I]]*8/255-4;if(h)for(let I=0;I<o.length;I++)h[I]=x[o[I]]*8/255-4;if(c)for(let I=0;I<l.length;I++)c[I]=x[l[I]]*8/255-4;e?.(u,A,h,c)}function g(u){const{min_x:y,min_y:x,min_z:I,max_x:b,max_y:S,max_z:w,min_scale_x:R,min_scale_y:B,min_scale_z:_,max_scale_x:T,max_scale_y:L,max_scale_z:O}=u.properties;if(!y||!x||!I||!b||!S||!w||!R||!B||!_||!T||!L||!O)throw new Error("Missing PLY chunk properties");return n=!0,(H,J)=>{const{min_x:z,min_y:K,min_z:P,max_x:Z,max_y:rt,max_z:ht,min_scale_x:Tt,min_scale_y:Gt,min_scale_z:Yt,max_scale_x:Lt,max_scale_y:q,max_scale_z:Y,min_r:At,min_g:xt,min_b:ft,max_r:Nt,max_g:re,max_b:M}=J;s.push({min_x:z,min_y:K,min_z:P,max_x:Z,max_y:rt,max_z:ht,min_scale_x:Tt,min_scale_y:Gt,min_scale_z:Yt,max_scale_x:Lt,max_scale_y:q,max_scale_z:Y,min_r:At,min_g:xt,min_b:ft,max_r:Nt,max_g:re,max_b:M})}}function m(u){if(e&&u.name==="sh")return r=Oo(u.properties),d(),p;if(u.name!=="vertex")return null;const{packed_position:y,packed_rotation:x,packed_scale:I,packed_color:b}=u.properties;if(!y||!x||!I||!b)throw new Error("Missing PLY properties: packed_position, packed_rotation, packed_scale, packed_color");const S=Math.sqrt(2);return(w,R)=>{const B=s[w>>>8];if(B==null)throw new Error("Missing PLY chunk");const{min_x:_,min_y:T,min_z:L,max_x:O,max_y:H,max_z:J,min_scale_x:z,min_scale_y:K,min_scale_z:P,max_scale_x:Z,max_scale_y:rt,max_scale_z:ht,min_r:Tt,min_g:Gt,min_b:Yt,max_r:Lt,max_g:q,max_b:Y}=B,{packed_position:At,packed_rotation:xt,packed_scale:ft,packed_color:Nt}=R,re=(At>>>21&2047)/2047*(O-_)+_,M=(At>>>11&1023)/1023*(H-T)+T,Zt=(At&2047)/2047*(J-L)+L,Mt=((xt>>>20&1023)/1023-.5)*S,vt=((xt>>>10&1023)/1023-.5)*S,dt=((xt&1023)/1023-.5)*S,Kt=Math.sqrt(Math.max(0,1-Mt*Mt-vt*vt-dt*dt)),ut=xt>>>30,yt=ut===0?Mt:ut===1?Kt:vt,fe=ut<=1?vt:ut===2?Kt:dt,le=ut<=2?dt:Kt,v=ut===0?Kt:Mt,E=Math.exp((ft>>>21&2047)/2047*(Z-z)+z),U=Math.exp((ft>>>11&1023)/1023*(rt-K)+K),W=Math.exp((ft&2047)/2047*(ht-P)+P),j=(Nt>>>24&255)/255*((Lt??1)-(Tt??0))+(Tt??0),V=(Nt>>>16&255)/255*((q??1)-(Gt??0))+(Gt??0),It=(Nt>>>8&255)/255*((Y??1)-(Yt??0))+(Yt??0),it=(Nt&255)/255;t(w,re,M,Zt,E,U,W,yt,fe,le,v,it,j,V,It)}}const f=u=>{if(u.name==="chunk")return g(u);if(n)return m(u);if(u.name!=="vertex")return null;const{x:y,y:x,z:I,scale_0:b,scale_1:S,scale_2:w,rot_0:R,rot_1:B,rot_2:_,rot_3:T,opacity:L,f_dc_0:O,f_dc_1:H,f_dc_2:J,red:z,green:K,blue:P,alpha:Z}=u.properties;if(!y||!x||!I)throw new Error("Missing PLY properties: x, y, z");const rt=b&&S&&w,ht=R&&B&&_&&T,Tt=Z!=null?dr[Z.type]:1,Gt=z!=null?dr[z.type]:1,Yt=K!=null?dr[K.type]:1,Lt=P!=null?dr[P.type]:1;return r=Oo(u.properties),d(),(q,Y)=>{const At=rt?Math.exp(Y.scale_0):yr.defaultPointScale,xt=rt?Math.exp(Y.scale_1):yr.defaultPointScale,ft=rt?Math.exp(Y.scale_2):yr.defaultPointScale,Nt=ht?Y.rot_1:0,re=ht?Y.rot_2:0,M=ht?Y.rot_3:0,Zt=ht?Y.rot_0:1,Mt=L!=null?1/(1+Math.exp(-Y.opacity)):Z!=null?Y.alpha/Tt:1,vt=O!=null?Y.f_dc_0*ur+.5:z!=null?Y.red/Gt:1,dt=H!=null?Y.f_dc_1*ur+.5:K!=null?Y.green/Yt:1,Kt=J!=null?Y.f_dc_2*ur+.5:P!=null?Y.blue/Lt:1;if(t(q,Y.x,Y.y,Y.z,At,xt,ft,Nt,re,M,Zt,Mt,vt,dt,Kt),e&&A){const ut=Y.f_rest;if(A)for(let yt=0;yt<a.length;yt++)A[yt]=ut[a[yt]];if(h)for(let yt=0;yt<o.length;yt++)h[yt]=ut[o[yt]];if(c)for(let yt=0;yt<l.length;yt++)c[yt]=ut[l[yt]];e(q,A,h,c)}}};this.parseData(f)}injectRgba(t){let e=0;const n=this.data;if(n==null)throw new Error("No parsed data");if(t.length!==this.numSplats*4)throw new Error("Invalid RGBA array length");for(const s in this.elements){const r=this.elements[s],{count:a,properties:o}=r,l=[];let A=0;const h=s==="vertex";if(h){for(const c of["opacity","f_dc_0","f_dc_1","f_dc_2"])if(!o[c]||o[c].type!=="float")throw new Error(`Can't injectRgba due to property: ${c}`)}for(const[c,d]of Object.entries(o))if(d.isList)l.push(()=>{const p=Xi[d.countType](n,e,this.littleEndian);e+=fn[d.countType],e+=p*fn[d.type]});else{if(h)if(c==="f_dc_0"||c==="f_dc_1"||c==="f_dc_2"){const p=Number.parseInt(c.slice(5));l.push(()=>{const g=(t[A+p]/255-.5)/ur;Ll[d.type](n,e,this.littleEndian,g)})}else c==="opacity"&&l.push(()=>{const p=Math.max(-100,Math.min(100,-Math.log(1/(t[A+3]/255)-1)));Ll[d.type](n,e,this.littleEndian,p)});l.push(()=>{e+=fn[d.type]})}for(let c=0;c<a;c++){for(const d of l)d();h&&(A+=4)}}}};nh.defaultPointScale=.001;let nC=nh;const ur=.28209479177387814,Xi={char:(i,t,e)=>i.getInt8(t),uchar:(i,t,e)=>i.getUint8(t),short:(i,t,e)=>i.getInt16(t,e),ushort:(i,t,e)=>i.getUint16(t,e),int:(i,t,e)=>i.getInt32(t,e),uint:(i,t,e)=>i.getUint32(t,e),float:(i,t,e)=>i.getFloat32(t,e),double:(i,t,e)=>i.getFloat64(t,e)},Ll={char:(i,t,e,n)=>{i.setInt8(t,n)},uchar:(i,t,e,n)=>{i.setUint8(t,n)},short:(i,t,e,n)=>{i.setInt16(t,n,e)},ushort:(i,t,e,n)=>{i.setUint16(t,n,e)},int:(i,t,e,n)=>{i.setInt32(t,n,e)},uint:(i,t,e,n)=>{i.setUint32(t,n,e)},float:(i,t,e,n)=>{i.setFloat32(t,n,e)},double:(i,t,e,n)=>{i.setFloat64(t,n,e)}},fn={char:1,uchar:1,short:2,ushort:2,int:4,uint:4,float:4,double:8},dr={char:127,uchar:255,short:32767,ushort:65535,int:2147483647,uint:4294967295,float:1,double:1},iC={0:0,9:1,24:2,45:3},sC={0:0,1:9,2:24,3:45},cA=/^f_rest_([0-9]{1,2})$/;function rC(i){const t={};for(const[e,n]of Object.entries(i))cA.test(e)?t.f_rest=new Array(Oo(i)):t[e]=n.isList?[]:0;return t}function aC(i,t){return lC(i)?cC(i,t):hC(i,t)}const oC=(()=>{try{new Function("return 42;")}catch{return!1}return!0})(),AC=/^[a-zA-Z0-9_]+$/;function lC(i){if(!oC)return!1;for(const[t,e]of Object.entries(i))if(!AC.test(t)||e.isList&&!Ul.includes(e.countType)||!Ul.includes(e.type))return!1;return!0}function cC(i,t){const e=["let list;"];for(const[s,r]of Object.entries(i)){const a=s.match(cA);if(a){const o=+a[1];e.push(`
        item.f_rest[${o}] = PARSE_FIELD['${r.type}'](data, offset, ${t});
        offset += ${fn[r.type]};
      `)}else r.isList?e.push(`
        list = item['${s}'];
        list.length = PARSE_FIELD['${r.countType}'](data, offset, ${t});
        offset += ${fn[r.countType]};
        for (let i = 0; i < list.length; i++) {
          list[i] = PARSE_FIELD['${r.type}'](data, offset, ${t});
          offset += ${fn[r.type]};
        }
      `):e.push(`
        item['${s}'] = PARSE_FIELD['${r.type}'](data, offset, ${t});
        offset += ${fn[r.type]};
      `)}e.push("return offset;");const n=new Function("data","offset","item","PARSE_FIELD",e.join(`
`));return(s,r,a)=>n(s,r,a,Xi)}function hC(i,t){const e=[];for(const[n,s]of Object.entries(i)){const r=n.match(cA);if(r){const a=+r[1];e.push((o,l,A)=>(A.f_rest[a]=Xi[s.type](o,l,t),l+fn[s.type]))}else s.isList?e.push((a,o,l)=>{const A=l[n];A.length=Xi[s.countType](a,o,t);let h=o+fn[s.countType];for(let c=0;c<A.length;c++)A[c]=Xi[s.type](a,h,t),h+=fn[s.type];return h}):e.push((a,o,l)=>(l[n]=Xi[s.type](a,o,t),o+fn[s.type]))}return(n,s,r)=>{let a=s;for(let o=0;o<e.length;o++)a=e[o](n,a,r);return a}}function Oo(i){let t=0;for(;i[`f_rest_${t}`];)t+=1;const e=iC[t];if(e==null)throw new Error(`Unsupported number of SH coefficients: ${t}`);return e}const ih=`(function() {
  "use strict";
  let wasm;
  const cachedTextDecoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
    throw Error("TextDecoder not available");
  } };
  if (typeof TextDecoder !== "undefined") {
    cachedTextDecoder.decode();
  }
  let cachedUint8ArrayMemory0 = null;
  function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
      cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
  }
  function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
  }
  function sort_splats(num_splats, readback, ordering) {
    const ret = wasm.sort_splats(num_splats, readback, ordering);
    return ret >>> 0;
  }
  function sort32_splats(num_splats, readback, ordering) {
    const ret = wasm.sort32_splats(num_splats, readback, ordering);
    return ret >>> 0;
  }
  async function __wbg_load(module, imports) {
    if (typeof Response === "function" && module instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming === "function") {
        try {
          return await WebAssembly.instantiateStreaming(module, imports);
        } catch (e) {
          if (module.headers.get("Content-Type") != "application/wasm") {
            console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve Wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n", e);
          } else {
            throw e;
          }
        }
      }
      const bytes = await module.arrayBuffer();
      return await WebAssembly.instantiate(bytes, imports);
    } else {
      const instance = await WebAssembly.instantiate(module, imports);
      if (instance instanceof WebAssembly.Instance) {
        return { instance, module };
      } else {
        return instance;
      }
    }
  }
  function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_buffer_609cc3eee51ed158 = function(arg0) {
      const ret = arg0.buffer;
      return ret;
    };
    imports.wbg.__wbg_length_3b4f022188ae8db6 = function(arg0) {
      const ret = arg0.length;
      return ret;
    };
    imports.wbg.__wbg_length_6ca527665d89694d = function(arg0) {
      const ret = arg0.length;
      return ret;
    };
    imports.wbg.__wbg_length_8cfd2c6409af88ad = function(arg0) {
      const ret = arg0.length;
      return ret;
    };
    imports.wbg.__wbg_new_9fee97a409b32b68 = function(arg0) {
      const ret = new Uint16Array(arg0);
      return ret;
    };
    imports.wbg.__wbg_new_e3b321dcfef89fc7 = function(arg0) {
      const ret = new Uint32Array(arg0);
      return ret;
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354 = function(arg0, arg1, arg2) {
      const ret = new Float32Array(arg0, arg1 >>> 0, arg2 >>> 0);
      return ret;
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_f1dead44d1fc7212 = function(arg0, arg1, arg2) {
      const ret = new Uint32Array(arg0, arg1 >>> 0, arg2 >>> 0);
      return ret;
    };
    imports.wbg.__wbg_newwithlength_5a5efe313cfd59f1 = function(arg0) {
      const ret = new Float32Array(arg0 >>> 0);
      return ret;
    };
    imports.wbg.__wbg_set_10bad9bee0e9c58b = function(arg0, arg1, arg2) {
      arg0.set(arg1, arg2 >>> 0);
    };
    imports.wbg.__wbg_set_d23661d19148b229 = function(arg0, arg1, arg2) {
      arg0.set(arg1, arg2 >>> 0);
    };
    imports.wbg.__wbg_set_f4f1f0daa30696fc = function(arg0, arg1, arg2) {
      arg0.set(arg1, arg2 >>> 0);
    };
    imports.wbg.__wbg_subarray_3aaeec89bb2544f0 = function(arg0, arg1, arg2) {
      const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
      return ret;
    };
    imports.wbg.__wbg_subarray_769e1e0f81bb259b = function(arg0, arg1, arg2) {
      const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
      return ret;
    };
    imports.wbg.__wbindgen_init_externref_table = function() {
      const table = wasm.__wbindgen_export_0;
      const offset = table.grow(4);
      table.set(0, void 0);
      table.set(offset + 0, void 0);
      table.set(offset + 1, null);
      table.set(offset + 2, true);
      table.set(offset + 3, false);
    };
    imports.wbg.__wbindgen_memory = function() {
      const ret = wasm.memory;
      return ret;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    };
    return imports;
  }
  function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
  }
  async function __wbg_init(module_or_path) {
    if (wasm !== void 0) return wasm;
    if (typeof module_or_path !== "undefined") {
      if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
        ({ module_or_path } = module_or_path);
      } else {
        console.warn("using deprecated parameters for the initialization function; pass a single object instead");
      }
    }
    if (typeof module_or_path === "undefined") {
      module_or_path = new URL("data:application/wasm;base64,AGFzbQEAAAABzAEeYAJ/fwF/YAJ/fwBgA39/fwF/YAF/AX9gA39/fwBgAX8AYAV/f39/fwBgA29/fwFvYAV/f39/fwF/YAFvAW9gA29vfwBgAW8Bf2AAAX9gBH9/f38AYAAAYAR/f39/AX9gA39vbwF/YAF/AW9gAAFvYAF9AX1gBn9/f39/fwBgDX19fX19fX19f29/fX0Bb2AGf39/f39/AX9gBX9/fH9/AGAEf3x/fwBgBX9/fX9/AGAEf31/fwBgBX9/fn9/AGAEf35/fwBgAn19AX0C8gQRA3diZx1fX3diZ19idWZmZXJfNjA5Y2MzZWVlNTFlZDE1OAAJA3diZxpfX3diZ19uZXdfOWZlZTk3YTQwOWIzMmI2OAAJA3diZxpfX3diZ19zZXRfZjRmMWYwZGFhMzA2OTZmYwAKA3diZx1fX3diZ19sZW5ndGhfOGNmZDJjNjQwOWFmODhhZAALA3diZzFfX3diZ19uZXd3aXRoYnl0ZW9mZnNldGFuZGxlbmd0aF9mMWRlYWQ0NGQxZmM3MjEyAAcDd2JnGl9fd2JnX25ld19lM2IzMjFkY2ZlZjg5ZmM3AAkDd2JnGl9fd2JnX3NldF9kMjM2NjFkMTkxNDhiMjI5AAoDd2JnHV9fd2JnX2xlbmd0aF82Y2E1Mjc2NjVkODk2OTRkAAsDd2JnMV9fd2JnX25ld3dpdGhieXRlb2Zmc2V0YW5kbGVuZ3RoX2U2YjdlNjlhY2Q0YzczNTQABwN3YmcaX193Ymdfc2V0XzEwYmFkOWJlZTBlOWM1OGIACgN3YmcdX193YmdfbGVuZ3RoXzNiNGYwMjIxODhhZThkYjYACwN3YmcfX193Ymdfc3ViYXJyYXlfNzY5ZTFlMGY4MWJiMjU5YgAHA3diZx9fX3diZ19zdWJhcnJheV8zYWFlZWM4OWJiMjU0NGYwAAcDd2JnJF9fd2JnX25ld3dpdGhsZW5ndGhfNWE1ZWZlMzEzY2ZkNTlmMQARA3diZxBfX3diaW5kZ2VuX3Rocm93AAEDd2JnEV9fd2JpbmRnZW5fbWVtb3J5ABIDd2JnH19fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUADgNhYAMAAQIIBQQCEwEMAAEBAgAAAQwBBAYFBQQAAQYFFAENBAAGBQQEAQQOAgECAQAIBAAVARYG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ACIDKAIEQXhxRgRAIAMhAgwBCyABQRkgAkEBdmtBACACQR9HG3QhBQNAIAMgBUEddkEEcWpBEGoiBCgCACICRQ0CIAVBAXQhBSACIQMgAigCBEF4cSABRw0ACwsgAigCCCIBIAA2AgwgAiAANgIIIABBADYCGCAAIAI2AgwgACABNgIIDwsgBCAANgIAIAAgAzYCGCAAIAA2AgwgACAANgIIC/MCAQR/IwBBMGsiACQAAkACQEGQksAAKAIARQRAQaiSwAAoAgAhAUGoksAAQQA2AgAgAUUNASAAQRhqIAERBQAgAEEQaiICIABBJGopAgA3AwAgACAAKQIcNwMIIAAoAhghAUGQksAAKAIAIgMNAgJAIANFDQBBlJLAACgCACICRQ0AQZiSwAAoAgAgAkECdBBlC0GUksAAIAE2AgBBkJLAAEEBNgIAQZiSwAAgACkDCDcCAEGgksAAIABBEGopAwA3AgALIABBMGokAEGUksAADwsgAEEANgIoIABBATYCHCAAQaCHwAA2AhggAEIENwIgIABBGGpBiIjAABBDAAsgAEEoaiACKQMANwIAIAAgACkDCDcCICAAIAE2AhwgAEEBNgIYAkAgAEEYaiIBKAIARQ0AIAEoAgQiAkUNACABKAIIIAJBAnQQZQsgAEEANgIoIABBATYCHCAAQaiIwAA2AhggAEIENwIgIAFBsIjAABBDAAuoAgIDfwF+IwBBQGoiAiQAIAEoAgBBgICAgHhGBEAgASgCDCEDIAJBJGoiBEEANgIAIAJCgICAgBA3AhwgAkEwaiADKAIAIgNBCGopAgA3AwAgAkE4aiADQRBqKQIANwMAIAIgAykCADcDKCACQRxqQcCIwAAgAkEoahAYGiACQRhqIAQoAgAiAzYCACACIAIpAhwiBTcDECABQQhqIAM2AgAgASAFNwIACyABKQIAIQUgAUKAgICAEDcCACACQQhqIgMgAUEIaiIBKAIANgIAIAFBADYCAEGxk8AALQAAGiACIAU3AwBBDEEEEF0iAUUEQEEEQQwQbQALIAEgAikDADcCACABQQhqIAMoAgA2AgAgAEHgisAANgIEIAAgATYCACACQUBrJAAL0gECBH8BfiMAQSBrIgMkACABIAEgAmoiAksEQEEAQQAQUgALQQggACgCACIEQQF0IgEgAiABIAJLGyICIAJBCEkb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QQRqrUKAgICA4ACENwMoIAEgAa1CgICAgOAAhDcDICABIAFBIGo2AhAgAUEIakHIj8AAEEMAC2kCAX8BfiMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBAjYCDCADQfyNwAA2AgggA0ICNwIUIANCgICAgOAAIgQgA62ENwMoIAMgBCADQQRqrYQ3AyAgAyADQSBqNgIQIANBCGogAhBDAAtpAgF/AX4jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQQI2AgwgA0H4kcAANgIIIANCAjcCFCADQoCAgIDgACIEIANBBGqthDcDKCADIAQgA62ENwMgIAMgA0EgajYCECADQQhqIAIQQwALZgAjAEEwayIAJABBsJPAAC0AAARAIABBAjYCDCAAQbCKwAA2AgggAEIBNwIUIAAgATYCLCAAIABBLGqtQoCAgIDgAIQ3AyAgACAAQSBqNgIQIABBCGpB0IrAABBDAAsgAEEwaiQAC5QBAgN/AW8jAEEgayIDJAAgAyAAKAIAEHAiBDYCACADIAI2AgQgAiAERwRAIANBADYCCCADIANBBGogA0EIahBAAAsQWyIEEFMiBSUBEAUhBhAbIgIgBiYBIAVBhAFPBEAgBRAtCyACIAAoAgAgAUECdhBkIAJBhAFPBEAgAhAtCyAEQYQBTwRAIAQQLQsgA0EgaiQAC08BAX8jAEEwayIAJAAgAEEBNgIMIABBwI3AADYCCCAAQgE3AhQgACAAQS9qrUKAgICAoAWENwMgIAAgAEEgajYCECAAQQhqQcSBwAAQQwALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhAlIAAoAgghAwsgACgCBCADaiABIAIQHxogACACIANqNgIIQQALTQECf0Gxk8AALQAAGiABKAIEIQIgASgCACEDQQhBBBBdIgFFBEBBBEEIEG0ACyABIAI2AgQgASADNgIAIABB8IrAADYCBCAAIAE2AgALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhApIAAoAgghAwsgACgCBCADaiABIAIQHxogACACIANqNgIIQQALQQEBfyMAQSBrIgIkACACQQA2AhAgAkEBNgIEIAJCBDcCCCACQS42AhwgAiAANgIYIAIgAkEYajYCACACIAEQQwALswIBA38gACgCACECIAEoAhwiAEEQcUUE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ZCByZWN1cnNpdmVseSBvciBhZnRlciBiZWluZyBkcm9wcGVkTGF6eSBpbnN0YW5jZSBoYXMgcHJldmlvdXNseSBiZWVuIHBvaXNvbmVkdgMQACoAAAAvVXNlcnMvZG1hcmNvcy8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL29uY2VfY2VsbC0xLjIxLjMvc3JjL2xpYi5ycwCoAxAAXwAAAAgDAAAZAAAAcmVlbnRyYW50IGluaXQAABgEEAAOAAAAqAMQAF8AAAB6AgAADQAAABYAAAAMAAAABAAAABcAAAAYAAAAGQAAAC9ydXN0L2RlcHMvZGxtYWxsb2MtMC4yLjYvc3JjL2RsbWFsbG9jLnJzYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPj0gc2l6ZSArIG1pbl9vdmVyaGVhZABYBBAAKQAAAKgEAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPD0gc2l6ZSArIG1heF9vdmVyaGVhZAAAWAQQACkAAACuBAAADQAAAEFjY2Vzc0Vycm9ybWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAAAAAsFEAAVAAAAIAUQAA0AAABzdGQvc3JjL2FsbG9jLnJzQAUQABAAAABjAQAACQAAABYAAAAMAAAABAAAABoAAAAAAAAACAAAAAQAAAAbAAAAAAAAAAgAAAAEAAAAHAAAAB0AAAAeAAAAHwAAACAAAAAQAAAABAAAACEAAAAiAAAAIwAAACQAAABFcnJvcgAAACUAAAAMAAAABAAAACYAAAAnAAAAKAAAAGNhcGFjaXR5IG92ZXJmbG93AAAA2AUQABEAAABhbGxvYy9zcmMvcmF3X3ZlYy5yc/QFEAAUAAAAGAAAAAUAQaCMwAAL8AUBAAAAKQAAAGEgZm9ybWF0dGluZyB0cmFpdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvciB3aGVuIHRoZSB1bmRlcmx5aW5nIHN0cmVhbSBkaWQgbm90YWxsb2Mvc3JjL2ZtdC5ycwAAfgYQABAAAAB+AgAADgAAAEJvcnJvd011dEVycm9yYWxyZWFkeSBib3Jyb3dlZDogrgYQABIAAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAAyAYQACAAAADoBhAAEgAAAD09IT1tYXRjaGVzYXNzZXJ0aW9uIGBsZWZ0ICByaWdodGAgZmFpbGVkCiAgbGVmdDogCiByaWdodDogABcHEAAQAAAAJwcQABcAAAA+BxAACQAAACByaWdodGAgZmFpbGVkOiAKICBsZWZ0OiAAAAAXBxAAEAAAAGAHEAAQAAAAcAcQAAkAAAA+BxAACQAAADogAAABAAAAAAAAAJwHEAACAAAAfSB9Y29yZS9zcmMvZm10L251bS5ycwAAswcQABMAAABmAAAAFwAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTlyYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggAACiCBAAEgAAALQIEAAiAAAAcmFuZ2UgZW5kIGluZGV4IOgIEAAQAAAAtAgQACIAAAAAAAA/AAAAvwBBqJLAAAsBFABwCXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS44My4wICg5MGIzNWE2MjMgMjAyNC0xMS0yNikGd2FscnVzBjAuMjMuMwx3YXNtLWJpbmRnZW4HMC4yLjEwMABJD3RhcmdldF9mZWF0dXJlcwQrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQrD3JlZmVyZW5jZS10eXBlcysKbXVsdGl2YWx1ZQ==", self.location.href);
    }
    const imports = __wbg_get_imports();
    if (typeof module_or_path === "string" || typeof Request === "function" && module_or_path instanceof Request || typeof URL === "function" && module_or_path instanceof URL) {
      module_or_path = fetch(module_or_path);
    }
    const { instance, module } = await __wbg_load(await module_or_path, imports);
    return __wbg_finalize_init(instance, module);
  }
  var ch2 = {};
  var wk = function(c, id, msg, transfer, cb) {
    var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([
      c + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
    ], { type: "text/javascript" }))));
    w.onmessage = function(e) {
      var d = e.data, ed = d.$e$;
      if (ed) {
        var err2 = new Error(ed[0]);
        err2["code"] = ed[1];
        err2.stack = ed[2];
        cb(err2, null);
      } else
        cb(null, d);
    };
    w.postMessage(msg, transfer);
    return w;
  };
  var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
  var fleb = new u8([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    /* unused */
    0,
    0,
    /* impossible */
    0
  ]);
  var fdeb = new u8([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    /* unused */
    0,
    0
  ]);
  var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var freb = function(eb, start) {
    var b = new u16(31);
    for (var i2 = 0; i2 < 31; ++i2) {
      b[i2] = start += 1 << eb[i2 - 1];
    }
    var r = new i32(b[30]);
    for (var i2 = 1; i2 < 30; ++i2) {
      for (var j = b[i2]; j < b[i2 + 1]; ++j) {
        r[j] = j - b[i2] << 5 | i2;
      }
    }
    return { b, r };
  };
  var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
  fl[28] = 258, revfl[258] = 28;
  var _b = freb(fdeb, 0), fd = _b.b;
  var rev = new u16(32768);
  for (var i = 0; i < 32768; ++i) {
    var x = (i & 43690) >> 1 | (i & 21845) << 1;
    x = (x & 52428) >> 2 | (x & 13107) << 2;
    x = (x & 61680) >> 4 | (x & 3855) << 4;
    rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
  }
  var hMap = function(cd, mb, r) {
    var s = cd.length;
    var i2 = 0;
    var l = new u16(mb);
    for (; i2 < s; ++i2) {
      if (cd[i2])
        ++l[cd[i2] - 1];
    }
    var le = new u16(mb);
    for (i2 = 1; i2 < mb; ++i2) {
      le[i2] = le[i2 - 1] + l[i2 - 1] << 1;
    }
    var co;
    if (r) {
      co = new u16(1 << mb);
      var rvb = 15 - mb;
      for (i2 = 0; i2 < s; ++i2) {
        if (cd[i2]) {
          var sv = i2 << 4 | cd[i2];
          var r_1 = mb - cd[i2];
          var v = le[cd[i2] - 1]++ << r_1;
          for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
            co[rev[v] >> rvb] = sv;
          }
        }
      }
    } else {
      co = new u16(s);
      for (i2 = 0; i2 < s; ++i2) {
        if (cd[i2]) {
          co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
        }
      }
    }
    return co;
  };
  var flt = new u8(288);
  for (var i = 0; i < 144; ++i)
    flt[i] = 8;
  for (var i = 144; i < 256; ++i)
    flt[i] = 9;
  for (var i = 256; i < 280; ++i)
    flt[i] = 7;
  for (var i = 280; i < 288; ++i)
    flt[i] = 8;
  var fdt = new u8(32);
  for (var i = 0; i < 32; ++i)
    fdt[i] = 5;
  var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
  var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
  var max = function(a) {
    var m = a[0];
    for (var i2 = 1; i2 < a.length; ++i2) {
      if (a[i2] > m)
        m = a[i2];
    }
    return m;
  };
  var bits = function(d, p, m) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
  };
  var bits16 = function(d, p) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
  };
  var shft = function(p) {
    return (p + 7) / 8 | 0;
  };
  var slc = function(v, s, e) {
    if (s == null || s < 0)
      s = 0;
    if (e == null || e > v.length)
      e = v.length;
    return new u8(v.subarray(s, e));
  };
  var ec = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data"
    // determined by unknown compression method
  ];
  var err = function(ind, msg, nt) {
    var e = new Error(msg || ec[ind]);
    e.code = ind;
    if (Error.captureStackTrace)
      Error.captureStackTrace(e, err);
    if (!nt)
      throw e;
    return e;
  };
  var inflt = function(dat, st, buf, dict) {
    var sl = dat.length, dl = dict ? dict.length : 0;
    if (!sl || st.f && !st.l)
      return buf || new u8(0);
    var noBuf = !buf;
    var resize = noBuf || st.i != 2;
    var noSt = st.i;
    if (noBuf)
      buf = new u8(sl * 3);
    var cbuf = function(l2) {
      var bl = buf.length;
      if (l2 > bl) {
        var nbuf = new u8(Math.max(bl * 2, l2));
        nbuf.set(buf);
        buf = nbuf;
      }
    };
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    var tbts = sl * 8;
    do {
      if (!lm) {
        final = bits(dat, pos, 1);
        var type = bits(dat, pos + 1, 3);
        pos += 3;
        if (!type) {
          var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
          if (t > sl) {
            if (noSt)
              err(0);
            break;
          }
          if (resize)
            cbuf(bt + l);
          buf.set(dat.subarray(s, t), bt);
          st.b = bt += l, st.p = pos = t * 8, st.f = final;
          continue;
        } else if (type == 1)
          lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
        else if (type == 2) {
          var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
          var tl = hLit + bits(dat, pos + 5, 31) + 1;
          pos += 14;
          var ldt = new u8(tl);
          var clt = new u8(19);
          for (var i2 = 0; i2 < hcLen; ++i2) {
            clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
          }
          pos += hcLen * 3;
          var clb = max(clt), clbmsk = (1 << clb) - 1;
          var clm = hMap(clt, clb, 1);
          for (var i2 = 0; i2 < tl; ) {
            var r = clm[bits(dat, pos, clbmsk)];
            pos += r & 15;
            var s = r >> 4;
            if (s < 16) {
              ldt[i2++] = s;
            } else {
              var c = 0, n = 0;
              if (s == 16)
                n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i2 - 1];
              else if (s == 17)
                n = 3 + bits(dat, pos, 7), pos += 3;
              else if (s == 18)
                n = 11 + bits(dat, pos, 127), pos += 7;
              while (n--)
                ldt[i2++] = c;
            }
          }
          var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
          lbt = max(lt);
          dbt = max(dt);
          lm = hMap(lt, lbt, 1);
          dm = hMap(dt, dbt, 1);
        } else
          err(1);
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
      }
      if (resize)
        cbuf(bt + 131072);
      var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
      var lpos = pos;
      for (; ; lpos = pos) {
        var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
        pos += c & 15;
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (!c)
          err(2);
        if (sym < 256)
          buf[bt++] = sym;
        else if (sym == 256) {
          lpos = pos, lm = null;
          break;
        } else {
          var add = sym - 254;
          if (sym > 264) {
            var i2 = sym - 257, b = fleb[i2];
            add = bits(dat, pos, (1 << b) - 1) + fl[i2];
            pos += b;
          }
          var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
          if (!d)
            err(3);
          pos += d & 15;
          var dt = fd[dsym];
          if (dsym > 3) {
            var b = fdeb[dsym];
            dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
          }
          if (pos > tbts) {
            if (noSt)
              err(0);
            break;
          }
          if (resize)
            cbuf(bt + 131072);
          var end = bt + add;
          if (bt < dt) {
            var shift = dl - dt, dend = Math.min(dt, end);
            if (shift + bt < 0)
              err(3);
            for (; bt < dend; ++bt)
              buf[bt] = dict[shift + bt];
          }
          for (; bt < end; ++bt)
            buf[bt] = buf[bt - dt];
        }
      }
      st.l = lm, st.p = lpos, st.b = bt, st.f = final;
      if (lm)
        final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    } while (!final);
    return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
  };
  var et = /* @__PURE__ */ new u8(0);
  var mrg = function(a, b) {
    var o = {};
    for (var k in a)
      o[k] = a[k];
    for (var k in b)
      o[k] = b[k];
    return o;
  };
  var wcln = function(fn, fnStr, td2) {
    var dt = fn();
    var st = fn.toString();
    var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/\\s+/g, "").split(",");
    for (var i2 = 0; i2 < dt.length; ++i2) {
      var v = dt[i2], k = ks[i2];
      if (typeof v == "function") {
        fnStr += ";" + k + "=";
        var st_1 = v.toString();
        if (v.prototype) {
          if (st_1.indexOf("[native code]") != -1) {
            var spInd = st_1.indexOf(" ", 8) + 1;
            fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
          } else {
            fnStr += st_1;
            for (var t in v.prototype)
              fnStr += ";" + k + ".prototype." + t + "=" + v.prototype[t].toString();
          }
        } else
          fnStr += st_1;
      } else
        td2[k] = v;
    }
    return fnStr;
  };
  var ch = [];
  var cbfs = function(v) {
    var tl = [];
    for (var k in v) {
      if (v[k].buffer) {
        tl.push((v[k] = new v[k].constructor(v[k])).buffer);
      }
    }
    return tl;
  };
  var wrkr = function(fns, init, id, cb) {
    if (!ch[id]) {
      var fnStr = "", td_1 = {}, m = fns.length - 1;
      for (var i2 = 0; i2 < m; ++i2)
        fnStr = wcln(fns[i2], fnStr, td_1);
      ch[id] = { c: wcln(fns[m], fnStr, td_1), e: td_1 };
    }
    var td2 = mrg({}, ch[id].e);
    return wk(ch[id].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + init.toString() + "}", id, td2, cbfs(td2), cb);
  };
  var bInflt = function() {
    return [u8, u16, i32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, ec, hMap, max, bits, bits16, shft, slc, err, inflt, inflateSync, pbf, gopt];
  };
  var pbf = function(msg) {
    return postMessage(msg, [msg.buffer]);
  };
  var gopt = function(o) {
    return o && {
      out: o.size && new u8(o.size),
      dictionary: o.dictionary
    };
  };
  var cbify = function(dat, opts, fns, init, id, cb) {
    var w = wrkr(fns, init, id, function(err2, dat2) {
      w.terminate();
      cb(err2, dat2);
    });
    w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);
    return function() {
      w.terminate();
    };
  };
  var b2 = function(d, b) {
    return d[b] | d[b + 1] << 8;
  };
  var b4 = function(d, b) {
    return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
  };
  var b8 = function(d, b) {
    return b4(d, b) + b4(d, b + 4) * 4294967296;
  };
  var gzs = function(d) {
    if (d[0] != 31 || d[1] != 139 || d[2] != 8)
      err(6, "invalid gzip data");
    var flg = d[3];
    var st = 10;
    if (flg & 4)
      st += (d[10] | d[11] << 8) + 2;
    for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
      ;
    return st + (flg & 2);
  };
  var Inflate = /* @__PURE__ */ function() {
    function Inflate2(opts, cb) {
      if (typeof opts == "function")
        cb = opts, opts = {};
      this.ondata = cb;
      var dict = opts && opts.dictionary && opts.dictionary.subarray(-32768);
      this.s = { i: 0, b: dict ? dict.length : 0 };
      this.o = new u8(32768);
      this.p = new u8(0);
      if (dict)
        this.o.set(dict);
    }
    Inflate2.prototype.e = function(c) {
      if (!this.ondata)
        err(5);
      if (this.d)
        err(4);
      if (!this.p.length)
        this.p = c;
      else if (c.length) {
        var n = new u8(this.p.length + c.length);
        n.set(this.p), n.set(c, this.p.length), this.p = n;
      }
    };
    Inflate2.prototype.c = function(final) {
      this.s.i = +(this.d = final || false);
      var bts = this.s.b;
      var dt = inflt(this.p, this.s, this.o);
      this.ondata(slc(dt, bts, this.s.b), this.d);
      this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
      this.p = slc(this.p, this.s.p / 8 | 0), this.s.p &= 7;
    };
    Inflate2.prototype.push = function(chunk, final) {
      this.e(chunk), this.c(final);
    };
    return Inflate2;
  }();
  function inflate(data, opts, cb) {
    if (!cb)
      cb = opts, opts = {};
    if (typeof cb != "function")
      err(7);
    return cbify(data, opts, [
      bInflt
    ], function(ev) {
      return pbf(inflateSync(ev.data[0], gopt(ev.data[1])));
    }, 1, cb);
  }
  function inflateSync(data, opts) {
    return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
  }
  var Gunzip = /* @__PURE__ */ function() {
    function Gunzip2(opts, cb) {
      this.v = 1;
      this.r = 0;
      Inflate.call(this, opts, cb);
    }
    Gunzip2.prototype.push = function(chunk, final) {
      Inflate.prototype.e.call(this, chunk);
      this.r += chunk.length;
      if (this.v) {
        var p = this.p.subarray(this.v - 1);
        var s = p.length > 3 ? gzs(p) : 4;
        if (s > p.length) {
          if (!final)
            return;
        } else if (this.v > 1 && this.onmember) {
          this.onmember(this.r - p.length);
        }
        this.p = p.subarray(s), this.v = 0;
      }
      Inflate.prototype.c.call(this, final);
      if (this.s.f && !this.s.l && !final) {
        this.v = shft(this.s.p) + 9;
        this.s = { i: 0 };
        this.o = new u8(0);
        this.push(new u8(0), final);
      }
    };
    return Gunzip2;
  }();
  var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
  try {
    td.decode(et, { stream: true });
  } catch (e) {
  }
  var dutf8 = function(d) {
    for (var r = "", i2 = 0; ; ) {
      var c = d[i2++];
      var eb = (c > 127) + (c > 223) + (c > 239);
      if (i2 + eb > d.length)
        return { s: r, r: slc(d, i2 - 1) };
      if (!eb)
        r += String.fromCharCode(c);
      else if (eb == 3) {
        c = ((c & 15) << 18 | (d[i2++] & 63) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
      } else if (eb & 1)
        r += String.fromCharCode((c & 31) << 6 | d[i2++] & 63);
      else
        r += String.fromCharCode((c & 15) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63);
    }
  };
  function strFromU8(dat, latin1) {
    if (latin1) {
      var r = "";
      for (var i2 = 0; i2 < dat.length; i2 += 16384)
        r += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
      return r;
    } else if (td) {
      return td.decode(dat);
    } else {
      var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
      if (r.length)
        err(8);
      return s;
    }
  }
  var slzh = function(d, b) {
    return b + 30 + b2(d, b + 26) + b2(d, b + 28);
  };
  var zh = function(d, b, z) {
    var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
    var _a2 = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a2[0], su = _a2[1], off = _a2[2];
    return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
  };
  var z64e = function(d, b) {
    for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
      ;
    return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
  };
  var mt = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(fn) {
    fn();
  };
  function unzip(data, opts, cb) {
    if (!cb)
      cb = opts, opts = {};
    if (typeof cb != "function")
      err(7);
    var term = [];
    var tAll = function() {
      for (var i3 = 0; i3 < term.length; ++i3)
        term[i3]();
    };
    var files = {};
    var cbd = function(a, b) {
      mt(function() {
        cb(a, b);
      });
    };
    mt(function() {
      cbd = cb;
    });
    var e = data.length - 22;
    for (; b4(data, e) != 101010256; --e) {
      if (!e || data.length - e > 65558) {
        cbd(err(13, 0, 1), null);
        return tAll;
      }
    }
    var lft = b2(data, e + 8);
    if (lft) {
      var c = lft;
      var o = b4(data, e + 16);
      var z = o == 4294967295 || c == 65535;
      if (z) {
        var ze = b4(data, e - 12);
        z = b4(data, ze) == 101075792;
        if (z) {
          c = lft = b4(data, ze + 32);
          o = b4(data, ze + 48);
        }
      }
      var fltr = opts && opts.filter;
      var _loop_3 = function(i3) {
        var _a2 = zh(data, o, z), c_1 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
        o = no;
        var cbl = function(e2, d) {
          if (e2) {
            tAll();
            cbd(e2, null);
          } else {
            if (d)
              files[fn] = d;
            if (!--lft)
              cbd(null, files);
          }
        };
        if (!fltr || fltr({
          name: fn,
          size: sc,
          originalSize: su,
          compression: c_1
        })) {
          if (!c_1)
            cbl(null, slc(data, b, b + sc));
          else if (c_1 == 8) {
            var infl = data.subarray(b, b + sc);
            if (su < 524288 || sc > 0.8 * su) {
              try {
                cbl(null, inflateSync(infl, { out: new u8(su) }));
              } catch (e2) {
                cbl(e2, null);
              }
            } else
              term.push(inflate(infl, { size: su }, cbl));
          } else
            cbl(err(14, "unknown compression type " + c_1, 1), null);
        } else
          cbl(null, null);
      };
      for (var i2 = 0; i2 < c; ++i2) {
        _loop_3(i2);
      }
    } else
      cbd(null, {});
    return tAll;
  }
  function unzipSync(data, opts) {
    var files = {};
    var e = data.length - 22;
    for (; b4(data, e) != 101010256; --e) {
      if (!e || data.length - e > 65558)
        err(13);
    }
    var c = b2(data, e + 8);
    if (!c)
      return {};
    var o = b4(data, e + 16);
    var z = o == 4294967295 || c == 65535;
    if (z) {
      var ze = b4(data, e - 12);
      z = b4(data, ze) == 101075792;
      if (z) {
        c = b4(data, ze + 32);
        o = b4(data, ze + 48);
      }
    }
    var fltr = opts && opts.filter;
    for (var i2 = 0; i2 < c; ++i2) {
      var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
      o = no;
      if (!fltr || fltr({
        name: fn,
        size: sc,
        originalSize: su,
        compression: c_2
      })) {
        if (!c_2)
          files[fn] = slc(data, b, b + sc);
        else if (c_2 == 8)
          files[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) });
        else
          err(14, "unknown compression type " + c_2);
      }
    }
    return files;
  }
  /**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   */
  const REVISION = "178";
  const NoColorSpace = "";
  const SRGBColorSpace = "srgb";
  const LinearSRGBColorSpace = "srgb-linear";
  const LinearTransfer = "linear";
  const SRGBTransfer = "srgb";
  function clamp(value, min, max2) {
    return Math.max(min, Math.min(max2, value));
  }
  function euclideanModulo(n, m) {
    return (n % m + m) % m;
  }
  function lerp(x2, y, t) {
    return (1 - t) * x2 + t * y;
  }
  class Quaternion {
    /**
     * Constructs a new quaternion.
     *
     * @param {number} [x=0] - The x value of this quaternion.
     * @param {number} [y=0] - The y value of this quaternion.
     * @param {number} [z=0] - The z value of this quaternion.
     * @param {number} [w=1] - The w value of this quaternion.
     */
    constructor(x2 = 0, y = 0, z = 0, w = 1) {
      this.isQuaternion = true;
      this._x = x2;
      this._y = y;
      this._z = z;
      this._w = w;
    }
    /**
     * Interpolates between two quaternions via SLERP. This implementation assumes the
     * quaternion data are managed  in flat arrays.
     *
     * @param {Array<number>} dst - The destination array.
     * @param {number} dstOffset - An offset into the destination array.
     * @param {Array<number>} src0 - The source array of the first quaternion.
     * @param {number} srcOffset0 - An offset into the first source array.
     * @param {Array<number>} src1 -  The source array of the second quaternion.
     * @param {number} srcOffset1 - An offset into the second source array.
     * @param {number} t - The interpolation factor in the range \`[0,1]\`.
     * @see {@link Quaternion#slerp}
     */
    static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
      let x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w0 = src0[srcOffset0 + 3];
      const x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w1 = src1[srcOffset1 + 3];
      if (t === 0) {
        dst[dstOffset + 0] = x0;
        dst[dstOffset + 1] = y0;
        dst[dstOffset + 2] = z0;
        dst[dstOffset + 3] = w0;
        return;
      }
      if (t === 1) {
        dst[dstOffset + 0] = x1;
        dst[dstOffset + 1] = y1;
        dst[dstOffset + 2] = z1;
        dst[dstOffset + 3] = w1;
        return;
      }
      if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
        let s = 1 - t;
        const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1, dir = cos >= 0 ? 1 : -1, sqrSin = 1 - cos * cos;
        if (sqrSin > Number.EPSILON) {
          const sin = Math.sqrt(sqrSin), len = Math.atan2(sin, cos * dir);
          s = Math.sin(s * len) / sin;
          t = Math.sin(t * len) / sin;
        }
        const tDir = t * dir;
        x0 = x0 * s + x1 * tDir;
        y0 = y0 * s + y1 * tDir;
        z0 = z0 * s + z1 * tDir;
        w0 = w0 * s + w1 * tDir;
        if (s === 1 - t) {
          const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
          x0 *= f;
          y0 *= f;
          z0 *= f;
          w0 *= f;
        }
      }
      dst[dstOffset] = x0;
      dst[dstOffset + 1] = y0;
      dst[dstOffset + 2] = z0;
      dst[dstOffset + 3] = w0;
    }
    /**
     * Multiplies two quaternions. This implementation assumes the quaternion data are managed
     * in flat arrays.
     *
     * @param {Array<number>} dst - The destination array.
     * @param {number} dstOffset - An offset into the destination array.
     * @param {Array<number>} src0 - The source array of the first quaternion.
     * @param {number} srcOffset0 - An offset into the first source array.
     * @param {Array<number>} src1 -  The source array of the second quaternion.
     * @param {number} srcOffset1 - An offset into the second source array.
     * @return {Array<number>} The destination array.
     * @see {@link Quaternion#multiplyQuaternions}.
     */
    static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
      const x0 = src0[srcOffset0];
      const y0 = src0[srcOffset0 + 1];
      const z0 = src0[srcOffset0 + 2];
      const w0 = src0[srcOffset0 + 3];
      const x1 = src1[srcOffset1];
      const y1 = src1[srcOffset1 + 1];
      const z1 = src1[srcOffset1 + 2];
      const w1 = src1[srcOffset1 + 3];
      dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
      dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
      dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
      dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
      return dst;
    }
    /**
     * The x value of this quaternion.
     *
     * @type {number}
     * @default 0
     */
    get x() {
      return this._x;
    }
    set x(value) {
      this._x = value;
      this._onChangeCallback();
    }
    /**
     * The y value of this quaternion.
     *
     * @type {number}
     * @default 0
     */
    get y() {
      return this._y;
    }
    set y(value) {
      this._y = value;
      this._onChangeCallback();
    }
    /**
     * The z value of this quaternion.
     *
     * @type {number}
     * @default 0
     */
    get z() {
      return this._z;
    }
    set z(value) {
      this._z = value;
      this._onChangeCallback();
    }
    /**
     * The w value of this quaternion.
     *
     * @type {number}
     * @default 1
     */
    get w() {
      return this._w;
    }
    set w(value) {
      this._w = value;
      this._onChangeCallback();
    }
    /**
     * Sets the quaternion components.
     *
     * @param {number} x - The x value of this quaternion.
     * @param {number} y - The y value of this quaternion.
     * @param {number} z - The z value of this quaternion.
     * @param {number} w - The w value of this quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    set(x2, y, z, w) {
      this._x = x2;
      this._y = y;
      this._z = z;
      this._w = w;
      this._onChangeCallback();
      return this;
    }
    /**
     * Returns a new quaternion with copied values from this instance.
     *
     * @return {Quaternion} A clone of this instance.
     */
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    /**
     * Copies the values of the given quaternion to this instance.
     *
     * @param {Quaternion} quaternion - The quaternion to copy.
     * @return {Quaternion} A reference to this quaternion.
     */
    copy(quaternion) {
      this._x = quaternion.x;
      this._y = quaternion.y;
      this._z = quaternion.z;
      this._w = quaternion.w;
      this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion from the rotation specified by the given
     * Euler angles.
     *
     * @param {Euler} euler - The Euler angles.
     * @param {boolean} [update=true] - Whether the internal \`onChange\` callback should be executed or not.
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromEuler(euler, update = true) {
      const x2 = euler._x, y = euler._y, z = euler._z, order = euler._order;
      const cos = Math.cos;
      const sin = Math.sin;
      const c1 = cos(x2 / 2);
      const c2 = cos(y / 2);
      const c3 = cos(z / 2);
      const s1 = sin(x2 / 2);
      const s2 = sin(y / 2);
      const s3 = sin(z / 2);
      switch (order) {
        case "XYZ":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "YXZ":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        case "ZXY":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "ZYX":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        case "YZX":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "XZY":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + order);
      }
      if (update === true) this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion from the given axis and angle.
     *
     * @param {Vector3} axis - The normalized axis.
     * @param {number} angle - The angle in radians.
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromAxisAngle(axis, angle) {
      const halfAngle = angle / 2, s = Math.sin(halfAngle);
      this._x = axis.x * s;
      this._y = axis.y * s;
      this._z = axis.z * s;
      this._w = Math.cos(halfAngle);
      this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion from the given rotation matrix.
     *
     * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromRotationMatrix(m) {
      const te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10], trace = m11 + m22 + m33;
      if (trace > 0) {
        const s = 0.5 / Math.sqrt(trace + 1);
        this._w = 0.25 / s;
        this._x = (m32 - m23) * s;
        this._y = (m13 - m31) * s;
        this._z = (m21 - m12) * s;
      } else if (m11 > m22 && m11 > m33) {
        const s = 2 * Math.sqrt(1 + m11 - m22 - m33);
        this._w = (m32 - m23) / s;
        this._x = 0.25 * s;
        this._y = (m12 + m21) / s;
        this._z = (m13 + m31) / s;
      } else if (m22 > m33) {
        const s = 2 * Math.sqrt(1 + m22 - m11 - m33);
        this._w = (m13 - m31) / s;
        this._x = (m12 + m21) / s;
        this._y = 0.25 * s;
        this._z = (m23 + m32) / s;
      } else {
        const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
        this._w = (m21 - m12) / s;
        this._x = (m13 + m31) / s;
        this._y = (m23 + m32) / s;
        this._z = 0.25 * s;
      }
      this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion to the rotation required to rotate the direction vector
     * \`vFrom\` to the direction vector \`vTo\`.
     *
     * @param {Vector3} vFrom - The first (normalized) direction vector.
     * @param {Vector3} vTo - The second (normalized) direction vector.
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromUnitVectors(vFrom, vTo) {
      let r = vFrom.dot(vTo) + 1;
      if (r < 1e-8) {
        r = 0;
        if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
          this._x = -vFrom.y;
          this._y = vFrom.x;
          this._z = 0;
          this._w = r;
        } else {
          this._x = 0;
          this._y = -vFrom.z;
          this._z = vFrom.y;
          this._w = r;
        }
      } else {
        this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
        this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
        this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
        this._w = r;
      }
      return this.normalize();
    }
    /**
     * Returns the angle between this quaternion and the given one in radians.
     *
     * @param {Quaternion} q - The quaternion to compute the angle with.
     * @return {number} The angle in radians.
     */
    angleTo(q) {
      return 2 * Math.acos(Math.abs(clamp(this.dot(q), -1, 1)));
    }
    /**
     * Rotates this quaternion by a given angular step to the given quaternion.
     * The method ensures that the final quaternion will not overshoot \`q\`.
     *
     * @param {Quaternion} q - The target quaternion.
     * @param {number} step - The angular step in radians.
     * @return {Quaternion} A reference to this quaternion.
     */
    rotateTowards(q, step) {
      const angle = this.angleTo(q);
      if (angle === 0) return this;
      const t = Math.min(1, step / angle);
      this.slerp(q, t);
      return this;
    }
    /**
     * Sets this quaternion to the identity quaternion; that is, to the
     * quaternion that represents "no rotation".
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    identity() {
      return this.set(0, 0, 0, 1);
    }
    /**
     * Inverts this quaternion via {@link Quaternion#conjugate}. The
     * quaternion is assumed to have unit length.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    invert() {
      return this.conjugate();
    }
    /**
     * Returns the rotational conjugate of this quaternion. The conjugate of a
     * quaternion represents the same rotation in the opposite direction about
     * the rotational axis.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    conjugate() {
      this._x *= -1;
      this._y *= -1;
      this._z *= -1;
      this._onChangeCallback();
      return this;
    }
    /**
     * Calculates the dot product of this quaternion and the given one.
     *
     * @param {Quaternion} v - The quaternion to compute the dot product with.
     * @return {number} The result of the dot product.
     */
    dot(v) {
      return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
    }
    /**
     * Computes the squared Euclidean length (straight-line length) of this quaternion,
     * considered as a 4 dimensional vector. This can be useful if you are comparing the
     * lengths of two quaternions, as this is a slightly more efficient calculation than
     * {@link Quaternion#length}.
     *
     * @return {number} The squared Euclidean length.
     */
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    /**
     * Computes the Euclidean length (straight-line length) of this quaternion,
     * considered as a 4 dimensional vector.
     *
     * @return {number} The Euclidean length.
     */
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    /**
     * Normalizes this quaternion - that is, calculated the quaternion that performs
     * the same rotation as this one, but has a length equal to \`1\`.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    normalize() {
      let l = this.length();
      if (l === 0) {
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._w = 1;
      } else {
        l = 1 / l;
        this._x = this._x * l;
        this._y = this._y * l;
        this._z = this._z * l;
        this._w = this._w * l;
      }
      this._onChangeCallback();
      return this;
    }
    /**
     * Multiplies this quaternion by the given one.
     *
     * @param {Quaternion} q - The quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    multiply(q) {
      return this.multiplyQuaternions(this, q);
    }
    /**
     * Pre-multiplies this quaternion by the given one.
     *
     * @param {Quaternion} q - The quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    premultiply(q) {
      return this.multiplyQuaternions(q, this);
    }
    /**
     * Multiplies the given quaternions and stores the result in this instance.
     *
     * @param {Quaternion} a - The first quaternion.
     * @param {Quaternion} b - The second quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    multiplyQuaternions(a, b) {
      const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
      const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;
      this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
      this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
      this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
      this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
      this._onChangeCallback();
      return this;
    }
    /**
     * Performs a spherical linear interpolation between quaternions.
     *
     * @param {Quaternion} qb - The target quaternion.
     * @param {number} t - The interpolation factor in the closed interval \`[0, 1]\`.
     * @return {Quaternion} A reference to this quaternion.
     */
    slerp(qb, t) {
      if (t === 0) return this;
      if (t === 1) return this.copy(qb);
      const x2 = this._x, y = this._y, z = this._z, w = this._w;
      let cosHalfTheta = w * qb._w + x2 * qb._x + y * qb._y + z * qb._z;
      if (cosHalfTheta < 0) {
        this._w = -qb._w;
        this._x = -qb._x;
        this._y = -qb._y;
        this._z = -qb._z;
        cosHalfTheta = -cosHalfTheta;
      } else {
        this.copy(qb);
      }
      if (cosHalfTheta >= 1) {
        this._w = w;
        this._x = x2;
        this._y = y;
        this._z = z;
        return this;
      }
      const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
      if (sqrSinHalfTheta <= Number.EPSILON) {
        const s = 1 - t;
        this._w = s * w + t * this._w;
        this._x = s * x2 + t * this._x;
        this._y = s * y + t * this._y;
        this._z = s * z + t * this._z;
        this.normalize();
        return this;
      }
      const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
      const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
      const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta, ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
      this._w = w * ratioA + this._w * ratioB;
      this._x = x2 * ratioA + this._x * ratioB;
      this._y = y * ratioA + this._y * ratioB;
      this._z = z * ratioA + this._z * ratioB;
      this._onChangeCallback();
      return this;
    }
    /**
     * Performs a spherical linear interpolation between the given quaternions
     * and stores the result in this quaternion.
     *
     * @param {Quaternion} qa - The source quaternion.
     * @param {Quaternion} qb - The target quaternion.
     * @param {number} t - The interpolation factor in the closed interval \`[0, 1]\`.
     * @return {Quaternion} A reference to this quaternion.
     */
    slerpQuaternions(qa, qb, t) {
      return this.copy(qa).slerp(qb, t);
    }
    /**
     * Sets this quaternion to a uniformly random, normalized quaternion.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    random() {
      const theta1 = 2 * Math.PI * Math.random();
      const theta2 = 2 * Math.PI * Math.random();
      const x0 = Math.random();
      const r1 = Math.sqrt(1 - x0);
      const r2 = Math.sqrt(x0);
      return this.set(
        r1 * Math.sin(theta1),
        r1 * Math.cos(theta1),
        r2 * Math.sin(theta2),
        r2 * Math.cos(theta2)
      );
    }
    /**
     * Returns \`true\` if this quaternion is equal with the given one.
     *
     * @param {Quaternion} quaternion - The quaternion to test for equality.
     * @return {boolean} Whether this quaternion is equal with the given one.
     */
    equals(quaternion) {
      return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
    }
    /**
     * Sets this quaternion's components from the given array.
     *
     * @param {Array<number>} array - An array holding the quaternion component values.
     * @param {number} [offset=0] - The offset into the array.
     * @return {Quaternion} A reference to this quaternion.
     */
    fromArray(array, offset = 0) {
      this._x = array[offset];
      this._y = array[offset + 1];
      this._z = array[offset + 2];
      this._w = array[offset + 3];
      this._onChangeCallback();
      return this;
    }
    /**
     * Writes the components of this quaternion to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The quaternion components.
     */
    toArray(array = [], offset = 0) {
      array[offset] = this._x;
      array[offset + 1] = this._y;
      array[offset + 2] = this._z;
      array[offset + 3] = this._w;
      return array;
    }
    /**
     * Sets the components of this quaternion from the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
     * @param {number} index - The index into the attribute.
     * @return {Quaternion} A reference to this quaternion.
     */
    fromBufferAttribute(attribute, index) {
      this._x = attribute.getX(index);
      this._y = attribute.getY(index);
      this._z = attribute.getZ(index);
      this._w = attribute.getW(index);
      this._onChangeCallback();
      return this;
    }
    /**
     * This methods defines the serialization result of this class. Returns the
     * numerical elements of this quaternion in an array of format \`[x, y, z, w]\`.
     *
     * @return {Array<number>} The serialized quaternion.
     */
    toJSON() {
      return this.toArray();
    }
    _onChange(callback) {
      this._onChangeCallback = callback;
      return this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x;
      yield this._y;
      yield this._z;
      yield this._w;
    }
  }
  class Vector3 {
    /**
     * Constructs a new 3D vector.
     *
     * @param {number} [x=0] - The x value of this vector.
     * @param {number} [y=0] - The y value of this vector.
     * @param {number} [z=0] - The z value of this vector.
     */
    constructor(x2 = 0, y = 0, z = 0) {
      Vector3.prototype.isVector3 = true;
      this.x = x2;
      this.y = y;
      this.z = z;
    }
    /**
     * Sets the vector components.
     *
     * @param {number} x - The value of the x component.
     * @param {number} y - The value of the y component.
     * @param {number} z - The value of the z component.
     * @return {Vector3} A reference to this vector.
     */
    set(x2, y, z) {
      if (z === void 0) z = this.z;
      this.x = x2;
      this.y = y;
      this.z = z;
      return this;
    }
    /**
     * Sets the vector components to the same value.
     *
     * @param {number} scalar - The value to set for all vector components.
     * @return {Vector3} A reference to this vector.
     */
    setScalar(scalar) {
      this.x = scalar;
      this.y = scalar;
      this.z = scalar;
      return this;
    }
    /**
     * Sets the vector's x component to the given value
     *
     * @param {number} x - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setX(x2) {
      this.x = x2;
      return this;
    }
    /**
     * Sets the vector's y component to the given value
     *
     * @param {number} y - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setY(y) {
      this.y = y;
      return this;
    }
    /**
     * Sets the vector's z component to the given value
     *
     * @param {number} z - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setZ(z) {
      this.z = z;
      return this;
    }
    /**
     * Allows to set a vector component with an index.
     *
     * @param {number} index - The component index. \`0\` equals to x, \`1\` equals to y, \`2\` equals to z.
     * @param {number} value - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setComponent(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        case 2:
          this.z = value;
          break;
        default:
          throw new Error("index is out of range: " + index);
      }
      return this;
    }
    /**
     * Returns the value of the vector component which matches the given index.
     *
     * @param {number} index - The component index. \`0\` equals to x, \`1\` equals to y, \`2\` equals to z.
     * @return {number} A vector component value.
     */
    getComponent(index) {
      switch (index) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + index);
      }
    }
    /**
     * Returns a new vector with copied values from this instance.
     *
     * @return {Vector3} A clone of this instance.
     */
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    /**
     * Copies the values of the given vector to this instance.
     *
     * @param {Vector3} v - The vector to copy.
     * @return {Vector3} A reference to this vector.
     */
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
      return this;
    }
    /**
     * Adds the given vector to this instance.
     *
     * @param {Vector3} v - The vector to add.
     * @return {Vector3} A reference to this vector.
     */
    add(v) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      return this;
    }
    /**
     * Adds the given scalar value to all components of this instance.
     *
     * @param {number} s - The scalar to add.
     * @return {Vector3} A reference to this vector.
     */
    addScalar(s) {
      this.x += s;
      this.y += s;
      this.z += s;
      return this;
    }
    /**
     * Adds the given vectors and stores the result in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    addVectors(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      this.z = a.z + b.z;
      return this;
    }
    /**
     * Adds the given vector scaled by the given factor to this instance.
     *
     * @param {Vector3|Vector4} v - The vector.
     * @param {number} s - The factor that scales \`v\`.
     * @return {Vector3} A reference to this vector.
     */
    addScaledVector(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      this.z += v.z * s;
      return this;
    }
    /**
     * Subtracts the given vector from this instance.
     *
     * @param {Vector3} v - The vector to subtract.
     * @return {Vector3} A reference to this vector.
     */
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      return this;
    }
    /**
     * Subtracts the given scalar value from all components of this instance.
     *
     * @param {number} s - The scalar to subtract.
     * @return {Vector3} A reference to this vector.
     */
    subScalar(s) {
      this.x -= s;
      this.y -= s;
      this.z -= s;
      return this;
    }
    /**
     * Subtracts the given vectors and stores the result in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    subVectors(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      return this;
    }
    /**
     * Multiplies the given vector with this instance.
     *
     * @param {Vector3} v - The vector to multiply.
     * @return {Vector3} A reference to this vector.
     */
    multiply(v) {
      this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
      return this;
    }
    /**
     * Multiplies the given scalar value with all components of this instance.
     *
     * @param {number} scalar - The scalar to multiply.
     * @return {Vector3} A reference to this vector.
     */
    multiplyScalar(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      return this;
    }
    /**
     * Multiplies the given vectors and stores the result in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    multiplyVectors(a, b) {
      this.x = a.x * b.x;
      this.y = a.y * b.y;
      this.z = a.z * b.z;
      return this;
    }
    /**
     * Applies the given Euler rotation to this vector.
     *
     * @param {Euler} euler - The Euler angles.
     * @return {Vector3} A reference to this vector.
     */
    applyEuler(euler) {
      return this.applyQuaternion(_quaternion$4.setFromEuler(euler));
    }
    /**
     * Applies a rotation specified by an axis and an angle to this vector.
     *
     * @param {Vector3} axis - A normalized vector representing the rotation axis.
     * @param {number} angle - The angle in radians.
     * @return {Vector3} A reference to this vector.
     */
    applyAxisAngle(axis, angle) {
      return this.applyQuaternion(_quaternion$4.setFromAxisAngle(axis, angle));
    }
    /**
     * Multiplies this vector with the given 3x3 matrix.
     *
     * @param {Matrix3} m - The 3x3 matrix.
     * @return {Vector3} A reference to this vector.
     */
    applyMatrix3(m) {
      const x2 = this.x, y = this.y, z = this.z;
      const e = m.elements;
      this.x = e[0] * x2 + e[3] * y + e[6] * z;
      this.y = e[1] * x2 + e[4] * y + e[7] * z;
      this.z = e[2] * x2 + e[5] * y + e[8] * z;
      return this;
    }
    /**
     * Multiplies this vector by the given normal matrix and normalizes
     * the result.
     *
     * @param {Matrix3} m - The normal matrix.
     * @return {Vector3} A reference to this vector.
     */
    applyNormalMatrix(m) {
      return this.applyMatrix3(m).normalize();
    }
    /**
     * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
     * divides by perspective.
     *
     * @param {Matrix4} m - The matrix to apply.
     * @return {Vector3} A reference to this vector.
     */
    applyMatrix4(m) {
      const x2 = this.x, y = this.y, z = this.z;
      const e = m.elements;
      const w = 1 / (e[3] * x2 + e[7] * y + e[11] * z + e[15]);
      this.x = (e[0] * x2 + e[4] * y + e[8] * z + e[12]) * w;
      this.y = (e[1] * x2 + e[5] * y + e[9] * z + e[13]) * w;
      this.z = (e[2] * x2 + e[6] * y + e[10] * z + e[14]) * w;
      return this;
    }
    /**
     * Applies the given Quaternion to this vector.
     *
     * @param {Quaternion} q - The Quaternion.
     * @return {Vector3} A reference to this vector.
     */
    applyQuaternion(q) {
      const vx = this.x, vy = this.y, vz = this.z;
      const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
      const tx = 2 * (qy * vz - qz * vy);
      const ty = 2 * (qz * vx - qx * vz);
      const tz = 2 * (qx * vy - qy * vx);
      this.x = vx + qw * tx + qy * tz - qz * ty;
      this.y = vy + qw * ty + qz * tx - qx * tz;
      this.z = vz + qw * tz + qx * ty - qy * tx;
      return this;
    }
    /**
     * Projects this vector from world space into the camera's normalized
     * device coordinate (NDC) space.
     *
     * @param {Camera} camera - The camera.
     * @return {Vector3} A reference to this vector.
     */
    project(camera) {
      return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix);
    }
    /**
     * Unprojects this vector from the camera's normalized device coordinate (NDC)
     * space into world space.
     *
     * @param {Camera} camera - The camera.
     * @return {Vector3} A reference to this vector.
     */
    unproject(camera) {
      return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
    }
    /**
     * Transforms the direction of this vector by a matrix (the upper left 3 x 3
     * subset of the given 4x4 matrix and then normalizes the result.
     *
     * @param {Matrix4} m - The matrix.
     * @return {Vector3} A reference to this vector.
     */
    transformDirection(m) {
      const x2 = this.x, y = this.y, z = this.z;
      const e = m.elements;
      this.x = e[0] * x2 + e[4] * y + e[8] * z;
      this.y = e[1] * x2 + e[5] * y + e[9] * z;
      this.z = e[2] * x2 + e[6] * y + e[10] * z;
      return this.normalize();
    }
    /**
     * Divides this instance by the given vector.
     *
     * @param {Vector3} v - The vector to divide.
     * @return {Vector3} A reference to this vector.
     */
    divide(v) {
      this.x /= v.x;
      this.y /= v.y;
      this.z /= v.z;
      return this;
    }
    /**
     * Divides this vector by the given scalar.
     *
     * @param {number} scalar - The scalar to divide.
     * @return {Vector3} A reference to this vector.
     */
    divideScalar(scalar) {
      return this.multiplyScalar(1 / scalar);
    }
    /**
     * If this vector's x, y or z value is greater than the given vector's x, y or z
     * value, replace that value with the corresponding min value.
     *
     * @param {Vector3} v - The vector.
     * @return {Vector3} A reference to this vector.
     */
    min(v) {
      this.x = Math.min(this.x, v.x);
      this.y = Math.min(this.y, v.y);
      this.z = Math.min(this.z, v.z);
      return this;
    }
    /**
     * If this vector's x, y or z value is less than the given vector's x, y or z
     * value, replace that value with the corresponding max value.
     *
     * @param {Vector3} v - The vector.
     * @return {Vector3} A reference to this vector.
     */
    max(v) {
      this.x = Math.max(this.x, v.x);
      this.y = Math.max(this.y, v.y);
      this.z = Math.max(this.z, v.z);
      return this;
    }
    /**
     * If this vector's x, y or z value is greater than the max vector's x, y or z
     * value, it is replaced by the corresponding value.
     * If this vector's x, y or z value is less than the min vector's x, y or z value,
     * it is replaced by the corresponding value.
     *
     * @param {Vector3} min - The minimum x, y and z values.
     * @param {Vector3} max - The maximum x, y and z values in the desired range.
     * @return {Vector3} A reference to this vector.
     */
    clamp(min, max2) {
      this.x = clamp(this.x, min.x, max2.x);
      this.y = clamp(this.y, min.y, max2.y);
      this.z = clamp(this.z, min.z, max2.z);
      return this;
    }
    /**
     * If this vector's x, y or z values are greater than the max value, they are
     * replaced by the max value.
     * If this vector's x, y or z values are less than the min value, they are
     * replaced by the min value.
     *
     * @param {number} minVal - The minimum value the components will be clamped to.
     * @param {number} maxVal - The maximum value the components will be clamped to.
     * @return {Vector3} A reference to this vector.
     */
    clampScalar(minVal, maxVal) {
      this.x = clamp(this.x, minVal, maxVal);
      this.y = clamp(this.y, minVal, maxVal);
      this.z = clamp(this.z, minVal, maxVal);
      return this;
    }
    /**
     * If this vector's length is greater than the max value, it is replaced by
     * the max value.
     * If this vector's length is less than the min value, it is replaced by the
     * min value.
     *
     * @param {number} min - The minimum value the vector length will be clamped to.
     * @param {number} max - The maximum value the vector length will be clamped to.
     * @return {Vector3} A reference to this vector.
     */
    clampLength(min, max2) {
      const length = this.length();
      return this.divideScalar(length || 1).multiplyScalar(clamp(length, min, max2));
    }
    /**
     * The components of this vector are rounded down to the nearest integer value.
     *
     * @return {Vector3} A reference to this vector.
     */
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      return this;
    }
    /**
     * The components of this vector are rounded up to the nearest integer value.
     *
     * @return {Vector3} A reference to this vector.
     */
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      return this;
    }
    /**
     * The components of this vector are rounded to the nearest integer value
     *
     * @return {Vector3} A reference to this vector.
     */
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      return this;
    }
    /**
     * The components of this vector are rounded towards zero (up if negative,
     * down if positive) to an integer value.
     *
     * @return {Vector3} A reference to this vector.
     */
    roundToZero() {
      this.x = Math.trunc(this.x);
      this.y = Math.trunc(this.y);
      this.z = Math.trunc(this.z);
      return this;
    }
    /**
     * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
     *
     * @return {Vector3} A reference to this vector.
     */
    negate() {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    }
    /**
     * Calculates the dot product of the given vector with this instance.
     *
     * @param {Vector3} v - The vector to compute the dot product with.
     * @return {number} The result of the dot product.
     */
    dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    // TODO lengthSquared?
    /**
     * Computes the square of the Euclidean length (straight-line length) from
     * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
     * compare the length squared instead as it is slightly more efficient to calculate.
     *
     * @return {number} The square length of this vector.
     */
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    /**
     * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
     *
     * @return {number} The length of this vector.
     */
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    /**
     * Computes the Manhattan length of this vector.
     *
     * @return {number} The length of this vector.
     */
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    /**
     * Converts this vector to a unit vector - that is, sets it equal to a vector
     * with the same direction as this one, but with a vector length of \`1\`.
     *
     * @return {Vector3} A reference to this vector.
     */
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    /**
     * Sets this vector to a vector with the same direction as this one, but
     * with the specified length.
     *
     * @param {number} length - The new length of this vector.
     * @return {Vector3} A reference to this vector.
     */
    setLength(length) {
      return this.normalize().multiplyScalar(length);
    }
    /**
     * Linearly interpolates between the given vector and this instance, where
     * alpha is the percent distance along the line - alpha = 0 will be this
     * vector, and alpha = 1 will be the given one.
     *
     * @param {Vector3} v - The vector to interpolate towards.
     * @param {number} alpha - The interpolation factor, typically in the closed interval \`[0, 1]\`.
     * @return {Vector3} A reference to this vector.
     */
    lerp(v, alpha) {
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      this.z += (v.z - this.z) * alpha;
      return this;
    }
    /**
     * Linearly interpolates between the given vectors, where alpha is the percent
     * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
     * be the second one. The result is stored in this instance.
     *
     * @param {Vector3} v1 - The first vector.
     * @param {Vector3} v2 - The second vector.
     * @param {number} alpha - The interpolation factor, typically in the closed interval \`[0, 1]\`.
     * @return {Vector3} A reference to this vector.
     */
    lerpVectors(v1, v2, alpha) {
      this.x = v1.x + (v2.x - v1.x) * alpha;
      this.y = v1.y + (v2.y - v1.y) * alpha;
      this.z = v1.z + (v2.z - v1.z) * alpha;
      return this;
    }
    /**
     * Calculates the cross product of the given vector with this instance.
     *
     * @param {Vector3} v - The vector to compute the cross product with.
     * @return {Vector3} The result of the cross product.
     */
    cross(v) {
      return this.crossVectors(this, v);
    }
    /**
     * Calculates the cross product of the given vectors and stores the result
     * in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    crossVectors(a, b) {
      const ax = a.x, ay = a.y, az = a.z;
      const bx = b.x, by = b.y, bz = b.z;
      this.x = ay * bz - az * by;
      this.y = az * bx - ax * bz;
      this.z = ax * by - ay * bx;
      return this;
    }
    /**
     * Projects this vector onto the given one.
     *
     * @param {Vector3} v - The vector to project to.
     * @return {Vector3} A reference to this vector.
     */
    projectOnVector(v) {
      const denominator = v.lengthSq();
      if (denominator === 0) return this.set(0, 0, 0);
      const scalar = v.dot(this) / denominator;
      return this.copy(v).multiplyScalar(scalar);
    }
    /**
     * Projects this vector onto a plane by subtracting this
     * vector projected onto the plane's normal from this vector.
     *
     * @param {Vector3} planeNormal - The plane normal.
     * @return {Vector3} A reference to this vector.
     */
    projectOnPlane(planeNormal) {
      _vector$c.copy(this).projectOnVector(planeNormal);
      return this.sub(_vector$c);
    }
    /**
     * Reflects this vector off a plane orthogonal to the given normal vector.
     *
     * @param {Vector3} normal - The (normalized) normal vector.
     * @return {Vector3} A reference to this vector.
     */
    reflect(normal) {
      return this.sub(_vector$c.copy(normal).multiplyScalar(2 * this.dot(normal)));
    }
    /**
     * Returns the angle between the given vector and this instance in radians.
     *
     * @param {Vector3} v - The vector to compute the angle with.
     * @return {number} The angle in radians.
     */
    angleTo(v) {
      const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
      if (denominator === 0) return Math.PI / 2;
      const theta = this.dot(v) / denominator;
      return Math.acos(clamp(theta, -1, 1));
    }
    /**
     * Computes the distance from the given vector to this instance.
     *
     * @param {Vector3} v - The vector to compute the distance to.
     * @return {number} The distance.
     */
    distanceTo(v) {
      return Math.sqrt(this.distanceToSquared(v));
    }
    /**
     * Computes the squared distance from the given vector to this instance.
     * If you are just comparing the distance with another distance, you should compare
     * the distance squared instead as it is slightly more efficient to calculate.
     *
     * @param {Vector3} v - The vector to compute the squared distance to.
     * @return {number} The squared distance.
     */
    distanceToSquared(v) {
      const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
      return dx * dx + dy * dy + dz * dz;
    }
    /**
     * Computes the Manhattan distance from the given vector to this instance.
     *
     * @param {Vector3} v - The vector to compute the Manhattan distance to.
     * @return {number} The Manhattan distance.
     */
    manhattanDistanceTo(v) {
      return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
    }
    /**
     * Sets the vector components from the given spherical coordinates.
     *
     * @param {Spherical} s - The spherical coordinates.
     * @return {Vector3} A reference to this vector.
     */
    setFromSpherical(s) {
      return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
    }
    /**
     * Sets the vector components from the given spherical coordinates.
     *
     * @param {number} radius - The radius.
     * @param {number} phi - The phi angle in radians.
     * @param {number} theta - The theta angle in radians.
     * @return {Vector3} A reference to this vector.
     */
    setFromSphericalCoords(radius, phi, theta) {
      const sinPhiRadius = Math.sin(phi) * radius;
      this.x = sinPhiRadius * Math.sin(theta);
      this.y = Math.cos(phi) * radius;
      this.z = sinPhiRadius * Math.cos(theta);
      return this;
    }
    /**
     * Sets the vector components from the given cylindrical coordinates.
     *
     * @param {Cylindrical} c - The cylindrical coordinates.
     * @return {Vector3} A reference to this vector.
     */
    setFromCylindrical(c) {
      return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
    }
    /**
     * Sets the vector components from the given cylindrical coordinates.
     *
     * @param {number} radius - The radius.
     * @param {number} theta - The theta angle in radians.
     * @param {number} y - The y value.
     * @return {Vector3} A reference to this vector.
     */
    setFromCylindricalCoords(radius, theta, y) {
      this.x = radius * Math.sin(theta);
      this.y = y;
      this.z = radius * Math.cos(theta);
      return this;
    }
    /**
     * Sets the vector components to the position elements of the
     * given transformation matrix.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrixPosition(m) {
      const e = m.elements;
      this.x = e[12];
      this.y = e[13];
      this.z = e[14];
      return this;
    }
    /**
     * Sets the vector components to the scale elements of the
     * given transformation matrix.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrixScale(m) {
      const sx = this.setFromMatrixColumn(m, 0).length();
      const sy = this.setFromMatrixColumn(m, 1).length();
      const sz = this.setFromMatrixColumn(m, 2).length();
      this.x = sx;
      this.y = sy;
      this.z = sz;
      return this;
    }
    /**
     * Sets the vector components from the specified matrix column.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @param {number} index - The column index.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrixColumn(m, index) {
      return this.fromArray(m.elements, index * 4);
    }
    /**
     * Sets the vector components from the specified matrix column.
     *
     * @param {Matrix3} m - The 3x3 matrix.
     * @param {number} index - The column index.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrix3Column(m, index) {
      return this.fromArray(m.elements, index * 3);
    }
    /**
     * Sets the vector components from the given Euler angles.
     *
     * @param {Euler} e - The Euler angles to set.
     * @return {Vector3} A reference to this vector.
     */
    setFromEuler(e) {
      this.x = e._x;
      this.y = e._y;
      this.z = e._z;
      return this;
    }
    /**
     * Sets the vector components from the RGB components of the
     * given color.
     *
     * @param {Color} c - The color to set.
     * @return {Vector3} A reference to this vector.
     */
    setFromColor(c) {
      this.x = c.r;
      this.y = c.g;
      this.z = c.b;
      return this;
    }
    /**
     * Returns \`true\` if this vector is equal with the given one.
     *
     * @param {Vector3} v - The vector to test for equality.
     * @return {boolean} Whether this vector is equal with the given one.
     */
    equals(v) {
      return v.x === this.x && v.y === this.y && v.z === this.z;
    }
    /**
     * Sets this vector's x value to be \`array[ offset ]\`, y value to be \`array[ offset + 1 ]\`
     * and z value to be \`array[ offset + 2 ]\`.
     *
     * @param {Array<number>} array - An array holding the vector component values.
     * @param {number} [offset=0] - The offset into the array.
     * @return {Vector3} A reference to this vector.
     */
    fromArray(array, offset = 0) {
      this.x = array[offset];
      this.y = array[offset + 1];
      this.z = array[offset + 2];
      return this;
    }
    /**
     * Writes the components of this vector to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the vector components.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The vector components.
     */
    toArray(array = [], offset = 0) {
      array[offset] = this.x;
      array[offset + 1] = this.y;
      array[offset + 2] = this.z;
      return array;
    }
    /**
     * Sets the components of this vector from the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
     * @param {number} index - The index into the attribute.
     * @return {Vector3} A reference to this vector.
     */
    fromBufferAttribute(attribute, index) {
      this.x = attribute.getX(index);
      this.y = attribute.getY(index);
      this.z = attribute.getZ(index);
      return this;
    }
    /**
     * Sets each component of this vector to a pseudo-random value between \`0\` and
     * \`1\`, excluding \`1\`.
     *
     * @return {Vector3} A reference to this vector.
     */
    random() {
      this.x = Math.random();
      this.y = Math.random();
      this.z = Math.random();
      return this;
    }
    /**
     * Sets this vector to a uniformly random point on a unit sphere.
     *
     * @return {Vector3} A reference to this vector.
     */
    randomDirection() {
      const theta = Math.random() * Math.PI * 2;
      const u = Math.random() * 2 - 1;
      const c = Math.sqrt(1 - u * u);
      this.x = c * Math.cos(theta);
      this.y = u;
      this.z = c * Math.sin(theta);
      return this;
    }
    *[Symbol.iterator]() {
      yield this.x;
      yield this.y;
      yield this.z;
    }
  }
  const _vector$c = /* @__PURE__ */ new Vector3();
  const _quaternion$4 = /* @__PURE__ */ new Quaternion();
  class Matrix3 {
    /**
     * Constructs a new 3x3 matrix. The arguments are supposed to be
     * in row-major order. If no arguments are provided, the constructor
     * initializes the matrix as an identity matrix.
     *
     * @param {number} [n11] - 1-1 matrix element.
     * @param {number} [n12] - 1-2 matrix element.
     * @param {number} [n13] - 1-3 matrix element.
     * @param {number} [n21] - 2-1 matrix element.
     * @param {number} [n22] - 2-2 matrix element.
     * @param {number} [n23] - 2-3 matrix element.
     * @param {number} [n31] - 3-1 matrix element.
     * @param {number} [n32] - 3-2 matrix element.
     * @param {number} [n33] - 3-3 matrix element.
     */
    constructor(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
      Matrix3.prototype.isMatrix3 = true;
      this.elements = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ];
      if (n11 !== void 0) {
        this.set(n11, n12, n13, n21, n22, n23, n31, n32, n33);
      }
    }
    /**
     * Sets the elements of the matrix.The arguments are supposed to be
     * in row-major order.
     *
     * @param {number} [n11] - 1-1 matrix element.
     * @param {number} [n12] - 1-2 matrix element.
     * @param {number} [n13] - 1-3 matrix element.
     * @param {number} [n21] - 2-1 matrix element.
     * @param {number} [n22] - 2-2 matrix element.
     * @param {number} [n23] - 2-3 matrix element.
     * @param {number} [n31] - 3-1 matrix element.
     * @param {number} [n32] - 3-2 matrix element.
     * @param {number} [n33] - 3-3 matrix element.
     * @return {Matrix3} A reference to this matrix.
     */
    set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
      const te = this.elements;
      te[0] = n11;
      te[1] = n21;
      te[2] = n31;
      te[3] = n12;
      te[4] = n22;
      te[5] = n32;
      te[6] = n13;
      te[7] = n23;
      te[8] = n33;
      return this;
    }
    /**
     * Sets this matrix to the 3x3 identity matrix.
     *
     * @return {Matrix3} A reference to this matrix.
     */
    identity() {
      this.set(
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Copies the values of the given matrix to this instance.
     *
     * @param {Matrix3} m - The matrix to copy.
     * @return {Matrix3} A reference to this matrix.
     */
    copy(m) {
      const te = this.elements;
      const me = m.elements;
      te[0] = me[0];
      te[1] = me[1];
      te[2] = me[2];
      te[3] = me[3];
      te[4] = me[4];
      te[5] = me[5];
      te[6] = me[6];
      te[7] = me[7];
      te[8] = me[8];
      return this;
    }
    /**
     * Extracts the basis of this matrix into the three axis vectors provided.
     *
     * @param {Vector3} xAxis - The basis's x axis.
     * @param {Vector3} yAxis - The basis's y axis.
     * @param {Vector3} zAxis - The basis's z axis.
     * @return {Matrix3} A reference to this matrix.
     */
    extractBasis(xAxis, yAxis, zAxis) {
      xAxis.setFromMatrix3Column(this, 0);
      yAxis.setFromMatrix3Column(this, 1);
      zAxis.setFromMatrix3Column(this, 2);
      return this;
    }
    /**
     * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @return {Matrix3} A reference to this matrix.
     */
    setFromMatrix4(m) {
      const me = m.elements;
      this.set(
        me[0],
        me[4],
        me[8],
        me[1],
        me[5],
        me[9],
        me[2],
        me[6],
        me[10]
      );
      return this;
    }
    /**
     * Post-multiplies this matrix by the given 3x3 matrix.
     *
     * @param {Matrix3} m - The matrix to multiply with.
     * @return {Matrix3} A reference to this matrix.
     */
    multiply(m) {
      return this.multiplyMatrices(this, m);
    }
    /**
     * Pre-multiplies this matrix by the given 3x3 matrix.
     *
     * @param {Matrix3} m - The matrix to multiply with.
     * @return {Matrix3} A reference to this matrix.
     */
    premultiply(m) {
      return this.multiplyMatrices(m, this);
    }
    /**
     * Multiples the given 3x3 matrices and stores the result
     * in this matrix.
     *
     * @param {Matrix3} a - The first matrix.
     * @param {Matrix3} b - The second matrix.
     * @return {Matrix3} A reference to this matrix.
     */
    multiplyMatrices(a, b) {
      const ae = a.elements;
      const be = b.elements;
      const te = this.elements;
      const a11 = ae[0], a12 = ae[3], a13 = ae[6];
      const a21 = ae[1], a22 = ae[4], a23 = ae[7];
      const a31 = ae[2], a32 = ae[5], a33 = ae[8];
      const b11 = be[0], b12 = be[3], b13 = be[6];
      const b21 = be[1], b22 = be[4], b23 = be[7];
      const b31 = be[2], b32 = be[5], b33 = be[8];
      te[0] = a11 * b11 + a12 * b21 + a13 * b31;
      te[3] = a11 * b12 + a12 * b22 + a13 * b32;
      te[6] = a11 * b13 + a12 * b23 + a13 * b33;
      te[1] = a21 * b11 + a22 * b21 + a23 * b31;
      te[4] = a21 * b12 + a22 * b22 + a23 * b32;
      te[7] = a21 * b13 + a22 * b23 + a23 * b33;
      te[2] = a31 * b11 + a32 * b21 + a33 * b31;
      te[5] = a31 * b12 + a32 * b22 + a33 * b32;
      te[8] = a31 * b13 + a32 * b23 + a33 * b33;
      return this;
    }
    /**
     * Multiplies every component of the matrix by the given scalar.
     *
     * @param {number} s - The scalar.
     * @return {Matrix3} A reference to this matrix.
     */
    multiplyScalar(s) {
      const te = this.elements;
      te[0] *= s;
      te[3] *= s;
      te[6] *= s;
      te[1] *= s;
      te[4] *= s;
      te[7] *= s;
      te[2] *= s;
      te[5] *= s;
      te[8] *= s;
      return this;
    }
    /**
     * Computes and returns the determinant of this matrix.
     *
     * @return {number} The determinant.
     */
    determinant() {
      const te = this.elements;
      const a = te[0], b = te[1], c = te[2], d = te[3], e = te[4], f = te[5], g = te[6], h = te[7], i2 = te[8];
      return a * e * i2 - a * f * h - b * d * i2 + b * f * g + c * d * h - c * e * g;
    }
    /**
     * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
     * You can not invert with a determinant of zero. If you attempt this, the method produces
     * a zero matrix instead.
     *
     * @return {Matrix3} A reference to this matrix.
     */
    invert() {
      const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n12 = te[3], n22 = te[4], n32 = te[5], n13 = te[6], n23 = te[7], n33 = te[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
      if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const detInv = 1 / det;
      te[0] = t11 * detInv;
      te[1] = (n31 * n23 - n33 * n21) * detInv;
      te[2] = (n32 * n21 - n31 * n22) * detInv;
      te[3] = t12 * detInv;
      te[4] = (n33 * n11 - n31 * n13) * detInv;
      te[5] = (n31 * n12 - n32 * n11) * detInv;
      te[6] = t13 * detInv;
      te[7] = (n21 * n13 - n23 * n11) * detInv;
      te[8] = (n22 * n11 - n21 * n12) * detInv;
      return this;
    }
    /**
     * Transposes this matrix in place.
     *
     * @return {Matrix3} A reference to this matrix.
     */
    transpose() {
      let tmp;
      const m = this.elements;
      tmp = m[1];
      m[1] = m[3];
      m[3] = tmp;
      tmp = m[2];
      m[2] = m[6];
      m[6] = tmp;
      tmp = m[5];
      m[5] = m[7];
      m[7] = tmp;
      return this;
    }
    /**
     * Computes the normal matrix which is the inverse transpose of the upper
     * left 3x3 portion of the given 4x4 matrix.
     *
     * @param {Matrix4} matrix4 - The 4x4 matrix.
     * @return {Matrix3} A reference to this matrix.
     */
    getNormalMatrix(matrix4) {
      return this.setFromMatrix4(matrix4).invert().transpose();
    }
    /**
     * Transposes this matrix into the supplied array, and returns itself unchanged.
     *
     * @param {Array<number>} r - An array to store the transposed matrix elements.
     * @return {Matrix3} A reference to this matrix.
     */
    transposeIntoArray(r) {
      const m = this.elements;
      r[0] = m[0];
      r[1] = m[3];
      r[2] = m[6];
      r[3] = m[1];
      r[4] = m[4];
      r[5] = m[7];
      r[6] = m[2];
      r[7] = m[5];
      r[8] = m[8];
      return this;
    }
    /**
     * Sets the UV transform matrix from offset, repeat, rotation, and center.
     *
     * @param {number} tx - Offset x.
     * @param {number} ty - Offset y.
     * @param {number} sx - Repeat x.
     * @param {number} sy - Repeat y.
     * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
     * @param {number} cx - Center x of rotation.
     * @param {number} cy - Center y of rotation
     * @return {Matrix3} A reference to this matrix.
     */
    setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
      const c = Math.cos(rotation);
      const s = Math.sin(rotation);
      this.set(
        sx * c,
        sx * s,
        -sx * (c * cx + s * cy) + cx + tx,
        -sy * s,
        sy * c,
        -sy * (-s * cx + c * cy) + cy + ty,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Scales this matrix with the given scalar values.
     *
     * @param {number} sx - The amount to scale in the X axis.
     * @param {number} sy - The amount to scale in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    scale(sx, sy) {
      this.premultiply(_m3.makeScale(sx, sy));
      return this;
    }
    /**
     * Rotates this matrix by the given angle.
     *
     * @param {number} theta - The rotation in radians.
     * @return {Matrix3} A reference to this matrix.
     */
    rotate(theta) {
      this.premultiply(_m3.makeRotation(-theta));
      return this;
    }
    /**
     * Translates this matrix by the given scalar values.
     *
     * @param {number} tx - The amount to translate in the X axis.
     * @param {number} ty - The amount to translate in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    translate(tx, ty) {
      this.premultiply(_m3.makeTranslation(tx, ty));
      return this;
    }
    // for 2D Transforms
    /**
     * Sets this matrix as a 2D translation transform.
     *
     * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
     * @param {number} y - The amount to translate in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    makeTranslation(x2, y) {
      if (x2.isVector2) {
        this.set(
          1,
          0,
          x2.x,
          0,
          1,
          x2.y,
          0,
          0,
          1
        );
      } else {
        this.set(
          1,
          0,
          x2,
          0,
          1,
          y,
          0,
          0,
          1
        );
      }
      return this;
    }
    /**
     * Sets this matrix as a 2D rotational transformation.
     *
     * @param {number} theta - The rotation in radians.
     * @return {Matrix3} A reference to this matrix.
     */
    makeRotation(theta) {
      const c = Math.cos(theta);
      const s = Math.sin(theta);
      this.set(
        c,
        -s,
        0,
        s,
        c,
        0,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Sets this matrix as a 2D scale transform.
     *
     * @param {number} x - The amount to scale in the X axis.
     * @param {number} y - The amount to scale in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    makeScale(x2, y) {
      this.set(
        x2,
        0,
        0,
        0,
        y,
        0,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Returns \`true\` if this matrix is equal with the given one.
     *
     * @param {Matrix3} matrix - The matrix to test for equality.
     * @return {boolean} Whether this matrix is equal with the given one.
     */
    equals(matrix) {
      const te = this.elements;
      const me = matrix.elements;
      for (let i2 = 0; i2 < 9; i2++) {
        if (te[i2] !== me[i2]) return false;
      }
      return true;
    }
    /**
     * Sets the elements of the matrix from the given array.
     *
     * @param {Array<number>} array - The matrix elements in column-major order.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Matrix3} A reference to this matrix.
     */
    fromArray(array, offset = 0) {
      for (let i2 = 0; i2 < 9; i2++) {
        this.elements[i2] = array[i2 + offset];
      }
      return this;
    }
    /**
     * Writes the elements of this matrix to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The matrix elements in column-major order.
     */
    toArray(array = [], offset = 0) {
      const te = this.elements;
      array[offset] = te[0];
      array[offset + 1] = te[1];
      array[offset + 2] = te[2];
      array[offset + 3] = te[3];
      array[offset + 4] = te[4];
      array[offset + 5] = te[5];
      array[offset + 6] = te[6];
      array[offset + 7] = te[7];
      array[offset + 8] = te[8];
      return array;
    }
    /**
     * Returns a matrix with copied values from this instance.
     *
     * @return {Matrix3} A clone of this instance.
     */
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const _m3 = /* @__PURE__ */ new Matrix3();
  const _cache = {};
  function warnOnce(message) {
    if (message in _cache) return;
    _cache[message] = true;
    console.warn(message);
  }
  const LINEAR_REC709_TO_XYZ = /* @__PURE__ */ new Matrix3().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322
  );
  const XYZ_TO_LINEAR_REC709 = /* @__PURE__ */ new Matrix3().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715
  );
  function createColorManagement() {
    const ColorManagement2 = {
      enabled: true,
      workingColorSpace: LinearSRGBColorSpace,
      /**
       * Implementations of supported color spaces.
       *
       * Required:
       *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
       *	- whitePoint: reference white [ x y ]
       *	- transfer: transfer function (pre-defined)
       *	- toXYZ: Matrix3 RGB to XYZ transform
       *	- fromXYZ: Matrix3 XYZ to RGB transform
       *	- luminanceCoefficients: RGB luminance coefficients
       *
       * Optional:
       *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
       *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
       *
       * Reference:
       * - https://www.russellcottrell.com/photo/matrixCalculator.htm
       */
      spaces: {},
      convert: function(color, sourceColorSpace, targetColorSpace) {
        if (this.enabled === false || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
          return color;
        }
        if (this.spaces[sourceColorSpace].transfer === SRGBTransfer) {
          color.r = SRGBToLinear(color.r);
          color.g = SRGBToLinear(color.g);
          color.b = SRGBToLinear(color.b);
        }
        if (this.spaces[sourceColorSpace].primaries !== this.spaces[targetColorSpace].primaries) {
          color.applyMatrix3(this.spaces[sourceColorSpace].toXYZ);
          color.applyMatrix3(this.spaces[targetColorSpace].fromXYZ);
        }
        if (this.spaces[targetColorSpace].transfer === SRGBTransfer) {
          color.r = LinearToSRGB(color.r);
          color.g = LinearToSRGB(color.g);
          color.b = LinearToSRGB(color.b);
        }
        return color;
      },
      workingToColorSpace: function(color, targetColorSpace) {
        return this.convert(color, this.workingColorSpace, targetColorSpace);
      },
      colorSpaceToWorking: function(color, sourceColorSpace) {
        return this.convert(color, sourceColorSpace, this.workingColorSpace);
      },
      getPrimaries: function(colorSpace) {
        return this.spaces[colorSpace].primaries;
      },
      getTransfer: function(colorSpace) {
        if (colorSpace === NoColorSpace) return LinearTransfer;
        return this.spaces[colorSpace].transfer;
      },
      getLuminanceCoefficients: function(target, colorSpace = this.workingColorSpace) {
        return target.fromArray(this.spaces[colorSpace].luminanceCoefficients);
      },
      define: function(colorSpaces) {
        Object.assign(this.spaces, colorSpaces);
      },
      // Internal APIs
      _getMatrix: function(targetMatrix, sourceColorSpace, targetColorSpace) {
        return targetMatrix.copy(this.spaces[sourceColorSpace].toXYZ).multiply(this.spaces[targetColorSpace].fromXYZ);
      },
      _getDrawingBufferColorSpace: function(colorSpace) {
        return this.spaces[colorSpace].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function(colorSpace = this.workingColorSpace) {
        return this.spaces[colorSpace].workingColorSpaceConfig.unpackColorSpace;
      },
      // Deprecated
      fromWorkingColorSpace: function(color, targetColorSpace) {
        warnOnce("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().");
        return ColorManagement2.workingToColorSpace(color, targetColorSpace);
      },
      toWorkingColorSpace: function(color, sourceColorSpace) {
        warnOnce("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().");
        return ColorManagement2.colorSpaceToWorking(color, sourceColorSpace);
      }
    };
    const REC709_PRIMARIES = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06];
    const REC709_LUMINANCE_COEFFICIENTS = [0.2126, 0.7152, 0.0722];
    const D65 = [0.3127, 0.329];
    ColorManagement2.define({
      [LinearSRGBColorSpace]: {
        primaries: REC709_PRIMARIES,
        whitePoint: D65,
        transfer: LinearTransfer,
        toXYZ: LINEAR_REC709_TO_XYZ,
        fromXYZ: XYZ_TO_LINEAR_REC709,
        luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
        workingColorSpaceConfig: { unpackColorSpace: SRGBColorSpace },
        outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
      },
      [SRGBColorSpace]: {
        primaries: REC709_PRIMARIES,
        whitePoint: D65,
        transfer: SRGBTransfer,
        toXYZ: LINEAR_REC709_TO_XYZ,
        fromXYZ: XYZ_TO_LINEAR_REC709,
        luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
        outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
      }
    });
    return ColorManagement2;
  }
  const ColorManagement = /* @__PURE__ */ createColorManagement();
  function SRGBToLinear(c) {
    return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
  }
  function LinearToSRGB(c) {
    return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
  }
  class Box3 {
    /**
     * Constructs a new bounding box.
     *
     * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
     * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
     */
    constructor(min = new Vector3(Infinity, Infinity, Infinity), max2 = new Vector3(-Infinity, -Infinity, -Infinity)) {
      this.isBox3 = true;
      this.min = min;
      this.max = max2;
    }
    /**
     * Sets the lower and upper boundaries of this box.
     * Please note that this method only copies the values from the given objects.
     *
     * @param {Vector3} min - The lower boundary of the box.
     * @param {Vector3} max - The upper boundary of the box.
     * @return {Box3} A reference to this bounding box.
     */
    set(min, max2) {
      this.min.copy(min);
      this.max.copy(max2);
      return this;
    }
    /**
     * Sets the upper and lower bounds of this box so it encloses the position data
     * in the given array.
     *
     * @param {Array<number>} array - An array holding 3D position data.
     * @return {Box3} A reference to this bounding box.
     */
    setFromArray(array) {
      this.makeEmpty();
      for (let i2 = 0, il = array.length; i2 < il; i2 += 3) {
        this.expandByPoint(_vector$b.fromArray(array, i2));
      }
      return this;
    }
    /**
     * Sets the upper and lower bounds of this box so it encloses the position data
     * in the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
     * @return {Box3} A reference to this bounding box.
     */
    setFromBufferAttribute(attribute) {
      this.makeEmpty();
      for (let i2 = 0, il = attribute.count; i2 < il; i2++) {
        this.expandByPoint(_vector$b.fromBufferAttribute(attribute, i2));
      }
      return this;
    }
    /**
     * Sets the upper and lower bounds of this box so it encloses the position data
     * in the given array.
     *
     * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
     * @return {Box3} A reference to this bounding box.
     */
    setFromPoints(points) {
      this.makeEmpty();
      for (let i2 = 0, il = points.length; i2 < il; i2++) {
        this.expandByPoint(points[i2]);
      }
      return this;
    }
    /**
     * Centers this box on the given center vector and sets this box's width, height and
     * depth to the given size values.
     *
     * @param {Vector3} center - The center of the box.
     * @param {Vector3} size - The x, y and z dimensions of the box.
     * @return {Box3} A reference to this bounding box.
     */
    setFromCenterAndSize(center, size) {
      const halfSize = _vector$b.copy(size).multiplyScalar(0.5);
      this.min.copy(center).sub(halfSize);
      this.max.copy(center).add(halfSize);
      return this;
    }
    /**
     * Computes the world-axis-aligned bounding box for the given 3D object
     * (including its children), accounting for the object's, and children's,
     * world transforms. The function may result in a larger box than strictly necessary.
     *
     * @param {Object3D} object - The 3D object to compute the bounding box for.
     * @param {boolean} [precise=false] - If set to \`true\`, the method computes the smallest
     * world-axis-aligned bounding box at the expense of more computation.
     * @return {Box3} A reference to this bounding box.
     */
    setFromObject(object, precise = false) {
      this.makeEmpty();
      return this.expandByObject(object, precise);
    }
    /**
     * Returns a new box with copied values from this instance.
     *
     * @return {Box3} A clone of this instance.
     */
    clone() {
      return new this.constructor().copy(this);
    }
    /**
     * Copies the values of the given box to this instance.
     *
     * @param {Box3} box - The box to copy.
     * @return {Box3} A reference to this bounding box.
     */
    copy(box) {
      this.min.copy(box.min);
      this.max.copy(box.max);
      return this;
    }
    /**
     * Makes this box empty which means in encloses a zero space in 3D.
     *
     * @return {Box3} A reference to this bounding box.
     */
    makeEmpty() {
      this.min.x = this.min.y = this.min.z = Infinity;
      this.max.x = this.max.y = this.max.z = -Infinity;
      return this;
    }
    /**
     * Returns true if this box includes zero points within its bounds.
     * Note that a box with equal lower and upper bounds still includes one
     * point, the one both bounds share.
     *
     * @return {boolean} Whether this box is empty or not.
     */
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    /**
     * Returns the center point of this box.
     *
     * @param {Vector3} target - The target vector that is used to store the method's result.
     * @return {Vector3} The center point.
     */
    getCenter(target) {
      return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    /**
     * Returns the dimensions of this box.
     *
     * @param {Vector3} target - The target vector that is used to store the method's result.
     * @return {Vector3} The size.
     */
    getSize(target) {
      return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
    }
    /**
     * Expands the boundaries of this box to include the given point.
     *
     * @param {Vector3} point - The point that should be included by the bounding box.
     * @return {Box3} A reference to this bounding box.
     */
    expandByPoint(point) {
      this.min.min(point);
      this.max.max(point);
      return this;
    }
    /**
     * Expands this box equilaterally by the given vector. The width of this
     * box will be expanded by the x component of the vector in both
     * directions. The height of this box will be expanded by the y component of
     * the vector in both directions. The depth of this box will be
     * expanded by the z component of the vector in both directions.
     *
     * @param {Vector3} vector - The vector that should expand the bounding box.
     * @return {Box3} A reference to this bounding box.
     */
    expandByVector(vector) {
      this.min.sub(vector);
      this.max.add(vector);
      return this;
    }
    /**
     * Expands each dimension of the box by the given scalar. If negative, the
     * dimensions of the box will be contracted.
     *
     * @param {number} scalar - The scalar value that should expand the bounding box.
     * @return {Box3} A reference to this bounding box.
     */
    expandByScalar(scalar) {
      this.min.addScalar(-scalar);
      this.max.addScalar(scalar);
      return this;
    }
    /**
     * Expands the boundaries of this box to include the given 3D object and
     * its children, accounting for the object's, and children's, world
     * transforms. The function may result in a larger box than strictly
     * necessary (unless the precise parameter is set to true).
     *
     * @param {Object3D} object - The 3D object that should expand the bounding box.
     * @param {boolean} precise - If set to \`true\`, the method expands the bounding box
     * as little as necessary at the expense of more computation.
     * @return {Box3} A reference to this bounding box.
     */
    expandByObject(object, precise = false) {
      object.updateWorldMatrix(false, false);
      const geometry = object.geometry;
      if (geometry !== void 0) {
        const positionAttribute = geometry.getAttribute("position");
        if (precise === true && positionAttribute !== void 0 && object.isInstancedMesh !== true) {
          for (let i2 = 0, l = positionAttribute.count; i2 < l; i2++) {
            if (object.isMesh === true) {
              object.getVertexPosition(i2, _vector$b);
            } else {
              _vector$b.fromBufferAttribute(positionAttribute, i2);
            }
            _vector$b.applyMatrix4(object.matrixWorld);
            this.expandByPoint(_vector$b);
          }
        } else {
          if (object.boundingBox !== void 0) {
            if (object.boundingBox === null) {
              object.computeBoundingBox();
            }
            _box$4.copy(object.boundingBox);
          } else {
            if (geometry.boundingBox === null) {
              geometry.computeBoundingBox();
            }
            _box$4.copy(geometry.boundingBox);
          }
          _box$4.applyMatrix4(object.matrixWorld);
          this.union(_box$4);
        }
      }
      const children = object.children;
      for (let i2 = 0, l = children.length; i2 < l; i2++) {
        this.expandByObject(children[i2], precise);
      }
      return this;
    }
    /**
     * Returns \`true\` if the given point lies within or on the boundaries of this box.
     *
     * @param {Vector3} point - The point to test.
     * @return {boolean} Whether the bounding box contains the given point or not.
     */
    containsPoint(point) {
      return point.x >= this.min.x && point.x <= this.max.x && point.y >= this.min.y && point.y <= this.max.y && point.z >= this.min.z && point.z <= this.max.z;
    }
    /**
     * Returns \`true\` if this bounding box includes the entirety of the given bounding box.
     * If this box and the given one are identical, this function also returns \`true\`.
     *
     * @param {Box3} box - The bounding box to test.
     * @return {boolean} Whether the bounding box contains the given bounding box or not.
     */
    containsBox(box) {
      return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z;
    }
    /**
     * Returns a point as a proportion of this box's width, height and depth.
     *
     * @param {Vector3} point - A point in 3D space.
     * @param {Vector3} target - The target vector that is used to store the method's result.
     * @return {Vector3} A point as a proportion of this box's width, height and depth.
     */
    getParameter(point, target) {
      return target.set(
        (point.x - this.min.x) / (this.max.x - this.min.x),
        (point.y - this.min.y) / (this.max.y - this.min.y),
        (point.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    /**
     * Returns \`true\` if the given bounding box intersects with this bounding box.
     *
     * @param {Box3} box - The bounding box to test.
     * @return {boolean} Whether the given bounding box intersects with this bounding box.
     */
    intersectsBox(box) {
      return box.max.x >= this.min.x && box.min.x <= this.max.x && box.max.y >= this.min.y && box.min.y <= this.max.y && box.max.z >= this.min.z && box.min.z <= this.max.z;
    }
    /**
     * Returns \`true\` if the given bounding sphere intersects with this bounding box.
     *
     * @param {Sphere} sphere - The bounding sphere to test.
     * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
     */
    intersectsSphere(sphere) {
      this.clampPoint(sphere.center, _vector$b);
      return _vector$b.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
    }
    /**
     * Returns \`true\` if the given plane intersects with this bounding box.
     *
     * @param {Plane} plane - The plane to test.
     * @return {boolean} Whether the given plane intersects with this bounding box.
     */
    intersectsPlane(plane) {
      let min, max2;
      if (plane.normal.x > 0) {
        min = plane.normal.x * this.min.x;
        max2 = plane.normal.x * this.max.x;
      } else {
        min = plane.normal.x * this.max.x;
        max2 = plane.normal.x * this.min.x;
      }
      if (plane.normal.y > 0) {
        min += plane.normal.y * this.min.y;
        max2 += plane.normal.y * this.max.y;
      } else {
        min += plane.normal.y * this.max.y;
        max2 += plane.normal.y * this.min.y;
      }
      if (plane.normal.z > 0) {
        min += plane.normal.z * this.min.z;
        max2 += plane.normal.z * this.max.z;
      } else {
        min += plane.normal.z * this.max.z;
        max2 += plane.normal.z * this.min.z;
      }
      return min <= -plane.constant && max2 >= -plane.constant;
    }
    /**
     * Returns \`true\` if the given triangle intersects with this bounding box.
     *
     * @param {Triangle} triangle - The triangle to test.
     * @return {boolean} Whether the given triangle intersects with this bounding box.
     */
    intersectsTriangle(triangle) {
      if (this.isEmpty()) {
        return false;
      }
      this.getCenter(_center);
      _extents.subVectors(this.max, _center);
      _v0$2.subVectors(triangle.a, _center);
      _v1$7.subVectors(triangle.b, _center);
      _v2$4.subVectors(triangle.c, _center);
      _f0.subVectors(_v1$7, _v0$2);
      _f1.subVectors(_v2$4, _v1$7);
      _f2.subVectors(_v0$2, _v2$4);
      let axes = [
        0,
        -_f0.z,
        _f0.y,
        0,
        -_f1.z,
        _f1.y,
        0,
        -_f2.z,
        _f2.y,
        _f0.z,
        0,
        -_f0.x,
        _f1.z,
        0,
        -_f1.x,
        _f2.z,
        0,
        -_f2.x,
        -_f0.y,
        _f0.x,
        0,
        -_f1.y,
        _f1.x,
        0,
        -_f2.y,
        _f2.x,
        0
      ];
      if (!satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents)) {
        return false;
      }
      axes = [1, 0, 0, 0, 1, 0, 0, 0, 1];
      if (!satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents)) {
        return false;
      }
      _triangleNormal.crossVectors(_f0, _f1);
      axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
      return satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents);
    }
    /**
     * Clamps the given point within the bounds of this box.
     *
     * @param {Vector3} point - The point to clamp.
     * @param {Vector3} target - The target vector that is used to store the method's result.
     * @return {Vector3} The clamped point.
     */
    clampPoint(point, target) {
      return target.copy(point).clamp(this.min, this.max);
    }
    /**
     * Returns the euclidean distance from any edge of this box to the specified point. If
     * the given point lies inside of this box, the distance will be \`0\`.
     *
     * @param {Vector3} point - The point to compute the distance to.
     * @return {number} The euclidean distance.
     */
    distanceToPoint(point) {
      return this.clampPoint(point, _vector$b).distanceTo(point);
    }
    /**
     * Returns a bounding sphere that encloses this bounding box.
     *
     * @param {Sphere} target - The target sphere that is used to store the method's result.
     * @return {Sphere} The bounding sphere that encloses this bounding box.
     */
    getBoundingSphere(target) {
      if (this.isEmpty()) {
        target.makeEmpty();
      } else {
        this.getCenter(target.center);
        target.radius = this.getSize(_vector$b).length() * 0.5;
      }
      return target;
    }
    /**
     * Computes the intersection of this bounding box and the given one, setting the upper
     * bound of this box to the lesser of the two boxes' upper bounds and the
     * lower bound of this box to the greater of the two boxes' lower bounds. If
     * there's no overlap, makes this box empty.
     *
     * @param {Box3} box - The bounding box to intersect with.
     * @return {Box3} A reference to this bounding box.
     */
    intersect(box) {
      this.min.max(box.min);
      this.max.min(box.max);
      if (this.isEmpty()) this.makeEmpty();
      return this;
    }
    /**
     * Computes the union of this box and another and the given one, setting the upper
     * bound of this box to the greater of the two boxes' upper bounds and the
     * lower bound of this box to the lesser of the two boxes' lower bounds.
     *
     * @param {Box3} box - The bounding box that will be unioned with this instance.
     * @return {Box3} A reference to this bounding box.
     */
    union(box) {
      this.min.min(box.min);
      this.max.max(box.max);
      return this;
    }
    /**
     * Transforms this bounding box by the given 4x4 transformation matrix.
     *
     * @param {Matrix4} matrix - The transformation matrix.
     * @return {Box3} A reference to this bounding box.
     */
    applyMatrix4(matrix) {
      if (this.isEmpty()) return this;
      _points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix);
      _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix);
      _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix);
      _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix);
      _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix);
      _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix);
      _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix);
      _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix);
      this.setFromPoints(_points);
      return this;
    }
    /**
     * Adds the given offset to both the upper and lower bounds of this bounding box,
     * effectively moving it in 3D space.
     *
     * @param {Vector3} offset - The offset that should be used to translate the bounding box.
     * @return {Box3} A reference to this bounding box.
     */
    translate(offset) {
      this.min.add(offset);
      this.max.add(offset);
      return this;
    }
    /**
     * Returns \`true\` if this bounding box is equal with the given one.
     *
     * @param {Box3} box - The box to test for equality.
     * @return {boolean} Whether this bounding box is equal with the given one.
     */
    equals(box) {
      return box.min.equals(this.min) && box.max.equals(this.max);
    }
    /**
     * Returns a serialized structure of the bounding box.
     *
     * @return {Object} Serialized structure with fields representing the object state.
     */
    toJSON() {
      return {
        min: this.min.toArray(),
        max: this.max.toArray()
      };
    }
    /**
     * Returns a serialized structure of the bounding box.
     *
     * @param {Object} json - The serialized json to set the box from.
     * @return {Box3} A reference to this bounding box.
     */
    fromJSON(json) {
      this.min.fromArray(json.min);
      this.max.fromArray(json.max);
      return this;
    }
  }
  const _points = [
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3()
  ];
  const _vector$b = /* @__PURE__ */ new Vector3();
  const _box$4 = /* @__PURE__ */ new Box3();
  const _v0$2 = /* @__PURE__ */ new Vector3();
  const _v1$7 = /* @__PURE__ */ new Vector3();
  const _v2$4 = /* @__PURE__ */ new Vector3();
  const _f0 = /* @__PURE__ */ new Vector3();
  const _f1 = /* @__PURE__ */ new Vector3();
  const _f2 = /* @__PURE__ */ new Vector3();
  const _center = /* @__PURE__ */ new Vector3();
  const _extents = /* @__PURE__ */ new Vector3();
  const _triangleNormal = /* @__PURE__ */ new Vector3();
  const _testAxis = /* @__PURE__ */ new Vector3();
  function satForAxes(axes, v0, v1, v2, extents) {
    for (let i2 = 0, j = axes.length - 3; i2 <= j; i2 += 3) {
      _testAxis.fromArray(axes, i2);
      const r = extents.x * Math.abs(_testAxis.x) + extents.y * Math.abs(_testAxis.y) + extents.z * Math.abs(_testAxis.z);
      const p0 = v0.dot(_testAxis);
      const p1 = v1.dot(_testAxis);
      const p2 = v2.dot(_testAxis);
      if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
        return false;
      }
    }
    return true;
  }
  const _colorKeywords = {
    "aliceblue": 15792383,
    "antiquewhite": 16444375,
    "aqua": 65535,
    "aquamarine": 8388564,
    "azure": 15794175,
    "beige": 16119260,
    "bisque": 16770244,
    "black": 0,
    "blanchedalmond": 16772045,
    "blue": 255,
    "blueviolet": 9055202,
    "brown": 10824234,
    "burlywood": 14596231,
    "cadetblue": 6266528,
    "chartreuse": 8388352,
    "chocolate": 13789470,
    "coral": 16744272,
    "cornflowerblue": 6591981,
    "cornsilk": 16775388,
    "crimson": 14423100,
    "cyan": 65535,
    "darkblue": 139,
    "darkcyan": 35723,
    "darkgoldenrod": 12092939,
    "darkgray": 11119017,
    "darkgreen": 25600,
    "darkgrey": 11119017,
    "darkkhaki": 12433259,
    "darkmagenta": 9109643,
    "darkolivegreen": 5597999,
    "darkorange": 16747520,
    "darkorchid": 10040012,
    "darkred": 9109504,
    "darksalmon": 15308410,
    "darkseagreen": 9419919,
    "darkslateblue": 4734347,
    "darkslategray": 3100495,
    "darkslategrey": 3100495,
    "darkturquoise": 52945,
    "darkviolet": 9699539,
    "deeppink": 16716947,
    "deepskyblue": 49151,
    "dimgray": 6908265,
    "dimgrey": 6908265,
    "dodgerblue": 2003199,
    "firebrick": 11674146,
    "floralwhite": 16775920,
    "forestgreen": 2263842,
    "fuchsia": 16711935,
    "gainsboro": 14474460,
    "ghostwhite": 16316671,
    "gold": 16766720,
    "goldenrod": 14329120,
    "gray": 8421504,
    "green": 32768,
    "greenyellow": 11403055,
    "grey": 8421504,
    "honeydew": 15794160,
    "hotpink": 16738740,
    "indianred": 13458524,
    "indigo": 4915330,
    "ivory": 16777200,
    "khaki": 15787660,
    "lavender": 15132410,
    "lavenderblush": 16773365,
    "lawngreen": 8190976,
    "lemonchiffon": 16775885,
    "lightblue": 11393254,
    "lightcoral": 15761536,
    "lightcyan": 14745599,
    "lightgoldenrodyellow": 16448210,
    "lightgray": 13882323,
    "lightgreen": 9498256,
    "lightgrey": 13882323,
    "lightpink": 16758465,
    "lightsalmon": 16752762,
    "lightseagreen": 2142890,
    "lightskyblue": 8900346,
    "lightslategray": 7833753,
    "lightslategrey": 7833753,
    "lightsteelblue": 11584734,
    "lightyellow": 16777184,
    "lime": 65280,
    "limegreen": 3329330,
    "linen": 16445670,
    "magenta": 16711935,
    "maroon": 8388608,
    "mediumaquamarine": 6737322,
    "mediumblue": 205,
    "mediumorchid": 12211667,
    "mediumpurple": 9662683,
    "mediumseagreen": 3978097,
    "mediumslateblue": 8087790,
    "mediumspringgreen": 64154,
    "mediumturquoise": 4772300,
    "mediumvioletred": 13047173,
    "midnightblue": 1644912,
    "mintcream": 16121850,
    "mistyrose": 16770273,
    "moccasin": 16770229,
    "navajowhite": 16768685,
    "navy": 128,
    "oldlace": 16643558,
    "olive": 8421376,
    "olivedrab": 7048739,
    "orange": 16753920,
    "orangered": 16729344,
    "orchid": 14315734,
    "palegoldenrod": 15657130,
    "palegreen": 10025880,
    "paleturquoise": 11529966,
    "palevioletred": 14381203,
    "papayawhip": 16773077,
    "peachpuff": 16767673,
    "peru": 13468991,
    "pink": 16761035,
    "plum": 14524637,
    "powderblue": 11591910,
    "purple": 8388736,
    "rebeccapurple": 6697881,
    "red": 16711680,
    "rosybrown": 12357519,
    "royalblue": 4286945,
    "saddlebrown": 9127187,
    "salmon": 16416882,
    "sandybrown": 16032864,
    "seagreen": 3050327,
    "seashell": 16774638,
    "sienna": 10506797,
    "silver": 12632256,
    "skyblue": 8900331,
    "slateblue": 6970061,
    "slategray": 7372944,
    "slategrey": 7372944,
    "snow": 16775930,
    "springgreen": 65407,
    "steelblue": 4620980,
    "tan": 13808780,
    "teal": 32896,
    "thistle": 14204888,
    "tomato": 16737095,
    "turquoise": 4251856,
    "violet": 15631086,
    "wheat": 16113331,
    "white": 16777215,
    "whitesmoke": 16119285,
    "yellow": 16776960,
    "yellowgreen": 10145074
  };
  const _hslA = { h: 0, s: 0, l: 0 };
  const _hslB = { h: 0, s: 0, l: 0 };
  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
    return p;
  }
  class Color {
    /**
     * Constructs a new color.
     *
     * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
     * and that method is used throughout the rest of the documentation.
     *
     * @param {(number|string|Color)} [r] - The red component of the color. If \`g\` and \`b\` are
     * not provided, it can be hexadecimal triplet, a CSS-style string or another \`Color\` instance.
     * @param {number} [g] - The green component.
     * @param {number} [b] - The blue component.
     */
    constructor(r, g, b) {
      this.isColor = true;
      this.r = 1;
      this.g = 1;
      this.b = 1;
      return this.set(r, g, b);
    }
    /**
     * Sets the colors's components from the given values.
     *
     * @param {(number|string|Color)} [r] - The red component of the color. If \`g\` and \`b\` are
     * not provided, it can be hexadecimal triplet, a CSS-style string or another \`Color\` instance.
     * @param {number} [g] - The green component.
     * @param {number} [b] - The blue component.
     * @return {Color} A reference to this color.
     */
    set(r, g, b) {
      if (g === void 0 && b === void 0) {
        const value = r;
        if (value && value.isColor) {
          this.copy(value);
        } else if (typeof value === "number") {
          this.setHex(value);
        } else if (typeof value === "string") {
          this.setStyle(value);
        }
      } else {
        this.setRGB(r, g, b);
      }
      return this;
    }
    /**
     * Sets the colors's components to the given scalar value.
     *
     * @param {number} scalar - The scalar value.
     * @return {Color} A reference to this color.
     */
    setScalar(scalar) {
      this.r = scalar;
      this.g = scalar;
      this.b = scalar;
      return this;
    }
    /**
     * Sets this color from a hexadecimal value.
     *
     * @param {number} hex - The hexadecimal value.
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setHex(hex, colorSpace = SRGBColorSpace) {
      hex = Math.floor(hex);
      this.r = (hex >> 16 & 255) / 255;
      this.g = (hex >> 8 & 255) / 255;
      this.b = (hex & 255) / 255;
      ColorManagement.colorSpaceToWorking(this, colorSpace);
      return this;
    }
    /**
     * Sets this color from RGB values.
     *
     * @param {number} r - Red channel value between \`0.0\` and \`1.0\`.
     * @param {number} g - Green channel value between \`0.0\` and \`1.0\`.
     * @param {number} b - Blue channel value between \`0.0\` and \`1.0\`.
     * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setRGB(r, g, b, colorSpace = ColorManagement.workingColorSpace) {
      this.r = r;
      this.g = g;
      this.b = b;
      ColorManagement.colorSpaceToWorking(this, colorSpace);
      return this;
    }
    /**
     * Sets this color from RGB values.
     *
     * @param {number} h - Hue value between \`0.0\` and \`1.0\`.
     * @param {number} s - Saturation value between \`0.0\` and \`1.0\`.
     * @param {number} l - Lightness value between \`0.0\` and \`1.0\`.
     * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setHSL(h, s, l, colorSpace = ColorManagement.workingColorSpace) {
      h = euclideanModulo(h, 1);
      s = clamp(s, 0, 1);
      l = clamp(l, 0, 1);
      if (s === 0) {
        this.r = this.g = this.b = l;
      } else {
        const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
        const q = 2 * l - p;
        this.r = hue2rgb(q, p, h + 1 / 3);
        this.g = hue2rgb(q, p, h);
        this.b = hue2rgb(q, p, h - 1 / 3);
      }
      ColorManagement.colorSpaceToWorking(this, colorSpace);
      return this;
    }
    /**
     * Sets this color from a CSS-style string. For example, \`rgb(250, 0,0)\`,
     * \`rgb(100%, 0%, 0%)\`, \`hsl(0, 100%, 50%)\`, \`#ff0000\`, \`#f00\`, or \`red\` ( or
     * any [X11 color name]{@link https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart} -
     * all 140 color names are supported).
     *
     * @param {string} style - Color as a CSS-style string.
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setStyle(style, colorSpace = SRGBColorSpace) {
      function handleAlpha(string) {
        if (string === void 0) return;
        if (parseFloat(string) < 1) {
          console.warn("THREE.Color: Alpha component of " + style + " will be ignored.");
        }
      }
      let m;
      if (m = /^(\\w+)\\(([^\\)]*)\\)/.exec(style)) {
        let color;
        const name = m[1];
        const components = m[2];
        switch (name) {
          case "rgb":
          case "rgba":
            if (color = /^\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(components)) {
              handleAlpha(color[4]);
              return this.setRGB(
                Math.min(255, parseInt(color[1], 10)) / 255,
                Math.min(255, parseInt(color[2], 10)) / 255,
                Math.min(255, parseInt(color[3], 10)) / 255,
                colorSpace
              );
            }
            if (color = /^\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(components)) {
              handleAlpha(color[4]);
              return this.setRGB(
                Math.min(100, parseInt(color[1], 10)) / 100,
                Math.min(100, parseInt(color[2], 10)) / 100,
                Math.min(100, parseInt(color[3], 10)) / 100,
                colorSpace
              );
            }
            break;
          case "hsl":
          case "hsla":
            if (color = /^\\s*(\\d*\\.?\\d+)\\s*,\\s*(\\d*\\.?\\d+)\\%\\s*,\\s*(\\d*\\.?\\d+)\\%\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(components)) {
              handleAlpha(color[4]);
              return this.setHSL(
                parseFloat(color[1]) / 360,
                parseFloat(color[2]) / 100,
                parseFloat(color[3]) / 100,
                colorSpace
              );
            }
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + style);
        }
      } else if (m = /^\\#([A-Fa-f\\d]+)$/.exec(style)) {
        const hex = m[1];
        const size = hex.length;
        if (size === 3) {
          return this.setRGB(
            parseInt(hex.charAt(0), 16) / 15,
            parseInt(hex.charAt(1), 16) / 15,
            parseInt(hex.charAt(2), 16) / 15,
            colorSpace
          );
        } else if (size === 6) {
          return this.setHex(parseInt(hex, 16), colorSpace);
        } else {
          console.warn("THREE.Color: Invalid hex color " + style);
        }
      } else if (style && style.length > 0) {
        return this.setColorName(style, colorSpace);
      }
      return this;
    }
    /**
     * Sets this color from a color name. Faster than {@link Color#setStyle} if
     * you don't need the other CSS-style formats.
     *
     * For convenience, the list of names is exposed in \`Color.NAMES\` as a hash.
     * \`\`\`js
     * Color.NAMES.aliceblue // returns 0xF0F8FF
     * \`\`\`
     *
     * @param {string} style - The color name.
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setColorName(style, colorSpace = SRGBColorSpace) {
      const hex = _colorKeywords[style.toLowerCase()];
      if (hex !== void 0) {
        this.setHex(hex, colorSpace);
      } else {
        console.warn("THREE.Color: Unknown color " + style);
      }
      return this;
    }
    /**
     * Returns a new color with copied values from this instance.
     *
     * @return {Color} A clone of this instance.
     */
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    /**
     * Copies the values of the given color to this instance.
     *
     * @param {Color} color - The color to copy.
     * @return {Color} A reference to this color.
     */
    copy(color) {
      this.r = color.r;
      this.g = color.g;
      this.b = color.b;
      return this;
    }
    /**
     * Copies the given color into this color, and then converts this color from
     * \`SRGBColorSpace\` to \`LinearSRGBColorSpace\`.
     *
     * @param {Color} color - The color to copy/convert.
     * @return {Color} A reference to this color.
     */
    copySRGBToLinear(color) {
      this.r = SRGBToLinear(color.r);
      this.g = SRGBToLinear(color.g);
      this.b = SRGBToLinear(color.b);
      return this;
    }
    /**
     * Copies the given color into this color, and then converts this color from
     * \`LinearSRGBColorSpace\` to \`SRGBColorSpace\`.
     *
     * @param {Color} color - The color to copy/convert.
     * @return {Color} A reference to this color.
     */
    copyLinearToSRGB(color) {
      this.r = LinearToSRGB(color.r);
      this.g = LinearToSRGB(color.g);
      this.b = LinearToSRGB(color.b);
      return this;
    }
    /**
     * Converts this color from \`SRGBColorSpace\` to \`LinearSRGBColorSpace\`.
     *
     * @return {Color} A reference to this color.
     */
    convertSRGBToLinear() {
      this.copySRGBToLinear(this);
      return this;
    }
    /**
     * Converts this color from \`LinearSRGBColorSpace\` to \`SRGBColorSpace\`.
     *
     * @return {Color} A reference to this color.
     */
    convertLinearToSRGB() {
      this.copyLinearToSRGB(this);
      return this;
    }
    /**
     * Returns the hexadecimal value of this color.
     *
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {number} The hexadecimal value.
     */
    getHex(colorSpace = SRGBColorSpace) {
      ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
      return Math.round(clamp(_color.r * 255, 0, 255)) * 65536 + Math.round(clamp(_color.g * 255, 0, 255)) * 256 + Math.round(clamp(_color.b * 255, 0, 255));
    }
    /**
     * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
     *
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {string} The hexadecimal value as a string.
     */
    getHexString(colorSpace = SRGBColorSpace) {
      return ("000000" + this.getHex(colorSpace).toString(16)).slice(-6);
    }
    /**
     * Converts the colors RGB values into the HSL format and stores them into the
     * given target object.
     *
     * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
     * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
     * @return {{h:number,s:number,l:number}} The HSL representation of this color.
     */
    getHSL(target, colorSpace = ColorManagement.workingColorSpace) {
      ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
      const r = _color.r, g = _color.g, b = _color.b;
      const max2 = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let hue, saturation;
      const lightness = (min + max2) / 2;
      if (min === max2) {
        hue = 0;
        saturation = 0;
      } else {
        const delta = max2 - min;
        saturation = lightness <= 0.5 ? delta / (max2 + min) : delta / (2 - max2 - min);
        switch (max2) {
          case r:
            hue = (g - b) / delta + (g < b ? 6 : 0);
            break;
          case g:
            hue = (b - r) / delta + 2;
            break;
          case b:
            hue = (r - g) / delta + 4;
            break;
        }
        hue /= 6;
      }
      target.h = hue;
      target.s = saturation;
      target.l = lightness;
      return target;
    }
    /**
     * Returns the RGB values of this color and stores them into the given target object.
     *
     * @param {Color} target - The target color that is used to store the method's result.
     * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
     * @return {Color} The RGB representation of this color.
     */
    getRGB(target, colorSpace = ColorManagement.workingColorSpace) {
      ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
      target.r = _color.r;
      target.g = _color.g;
      target.b = _color.b;
      return target;
    }
    /**
     * Returns the value of this color as a CSS style string. Example: \`rgb(255,0,0)\`.
     *
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {string} The CSS representation of this color.
     */
    getStyle(colorSpace = SRGBColorSpace) {
      ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
      const r = _color.r, g = _color.g, b = _color.b;
      if (colorSpace !== SRGBColorSpace) {
        return \`color(\${colorSpace} \${r.toFixed(3)} \${g.toFixed(3)} \${b.toFixed(3)})\`;
      }
      return \`rgb(\${Math.round(r * 255)},\${Math.round(g * 255)},\${Math.round(b * 255)})\`;
    }
    /**
     * Adds the given HSL values to this color's values.
     * Internally, this converts the color's RGB values to HSL, adds HSL
     * and then converts the color back to RGB.
     *
     * @param {number} h - Hue value between \`0.0\` and \`1.0\`.
     * @param {number} s - Saturation value between \`0.0\` and \`1.0\`.
     * @param {number} l - Lightness value between \`0.0\` and \`1.0\`.
     * @return {Color} A reference to this color.
     */
    offsetHSL(h, s, l) {
      this.getHSL(_hslA);
      return this.setHSL(_hslA.h + h, _hslA.s + s, _hslA.l + l);
    }
    /**
     * Adds the RGB values of the given color to the RGB values of this color.
     *
     * @param {Color} color - The color to add.
     * @return {Color} A reference to this color.
     */
    add(color) {
      this.r += color.r;
      this.g += color.g;
      this.b += color.b;
      return this;
    }
    /**
     * Adds the RGB values of the given colors and stores the result in this instance.
     *
     * @param {Color} color1 - The first color.
     * @param {Color} color2 - The second color.
     * @return {Color} A reference to this color.
     */
    addColors(color1, color2) {
      this.r = color1.r + color2.r;
      this.g = color1.g + color2.g;
      this.b = color1.b + color2.b;
      return this;
    }
    /**
     * Adds the given scalar value to the RGB values of this color.
     *
     * @param {number} s - The scalar to add.
     * @return {Color} A reference to this color.
     */
    addScalar(s) {
      this.r += s;
      this.g += s;
      this.b += s;
      return this;
    }
    /**
     * Subtracts the RGB values of the given color from the RGB values of this color.
     *
     * @param {Color} color - The color to subtract.
     * @return {Color} A reference to this color.
     */
    sub(color) {
      this.r = Math.max(0, this.r - color.r);
      this.g = Math.max(0, this.g - color.g);
      this.b = Math.max(0, this.b - color.b);
      return this;
    }
    /**
     * Multiplies the RGB values of the given color with the RGB values of this color.
     *
     * @param {Color} color - The color to multiply.
     * @return {Color} A reference to this color.
     */
    multiply(color) {
      this.r *= color.r;
      this.g *= color.g;
      this.b *= color.b;
      return this;
    }
    /**
     * Multiplies the given scalar value with the RGB values of this color.
     *
     * @param {number} s - The scalar to multiply.
     * @return {Color} A reference to this color.
     */
    multiplyScalar(s) {
      this.r *= s;
      this.g *= s;
      this.b *= s;
      return this;
    }
    /**
     * Linearly interpolates this color's RGB values toward the RGB values of the
     * given color. The alpha argument can be thought of as the ratio between
     * the two colors, where \`0.0\` is this color and \`1.0\` is the first argument.
     *
     * @param {Color} color - The color to converge on.
     * @param {number} alpha - The interpolation factor in the closed interval \`[0,1]\`.
     * @return {Color} A reference to this color.
     */
    lerp(color, alpha) {
      this.r += (color.r - this.r) * alpha;
      this.g += (color.g - this.g) * alpha;
      this.b += (color.b - this.b) * alpha;
      return this;
    }
    /**
     * Linearly interpolates between the given colors and stores the result in this instance.
     * The alpha argument can be thought of as the ratio between the two colors, where \`0.0\`
     * is the first and \`1.0\` is the second color.
     *
     * @param {Color} color1 - The first color.
     * @param {Color} color2 - The second color.
     * @param {number} alpha - The interpolation factor in the closed interval \`[0,1]\`.
     * @return {Color} A reference to this color.
     */
    lerpColors(color1, color2, alpha) {
      this.r = color1.r + (color2.r - color1.r) * alpha;
      this.g = color1.g + (color2.g - color1.g) * alpha;
      this.b = color1.b + (color2.b - color1.b) * alpha;
      return this;
    }
    /**
     * Linearly interpolates this color's HSL values toward the HSL values of the
     * given color. It differs from {@link Color#lerp} by not interpolating straight
     * from one color to the other, but instead going through all the hues in between
     * those two colors. The alpha argument can be thought of as the ratio between
     * the two colors, where 0.0 is this color and 1.0 is the first argument.
     *
     * @param {Color} color - The color to converge on.
     * @param {number} alpha - The interpolation factor in the closed interval \`[0,1]\`.
     * @return {Color} A reference to this color.
     */
    lerpHSL(color, alpha) {
      this.getHSL(_hslA);
      color.getHSL(_hslB);
      const h = lerp(_hslA.h, _hslB.h, alpha);
      const s = lerp(_hslA.s, _hslB.s, alpha);
      const l = lerp(_hslA.l, _hslB.l, alpha);
      this.setHSL(h, s, l);
      return this;
    }
    /**
     * Sets the color's RGB components from the given 3D vector.
     *
     * @param {Vector3} v - The vector to set.
     * @return {Color} A reference to this color.
     */
    setFromVector3(v) {
      this.r = v.x;
      this.g = v.y;
      this.b = v.z;
      return this;
    }
    /**
     * Transforms this color with the given 3x3 matrix.
     *
     * @param {Matrix3} m - The matrix.
     * @return {Color} A reference to this color.
     */
    applyMatrix3(m) {
      const r = this.r, g = this.g, b = this.b;
      const e = m.elements;
      this.r = e[0] * r + e[3] * g + e[6] * b;
      this.g = e[1] * r + e[4] * g + e[7] * b;
      this.b = e[2] * r + e[5] * g + e[8] * b;
      return this;
    }
    /**
     * Returns \`true\` if this color is equal with the given one.
     *
     * @param {Color} c - The color to test for equality.
     * @return {boolean} Whether this bounding color is equal with the given one.
     */
    equals(c) {
      return c.r === this.r && c.g === this.g && c.b === this.b;
    }
    /**
     * Sets this color's RGB components from the given array.
     *
     * @param {Array<number>} array - An array holding the RGB values.
     * @param {number} [offset=0] - The offset into the array.
     * @return {Color} A reference to this color.
     */
    fromArray(array, offset = 0) {
      this.r = array[offset];
      this.g = array[offset + 1];
      this.b = array[offset + 2];
      return this;
    }
    /**
     * Writes the RGB components of this color to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the color components.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The color components.
     */
    toArray(array = [], offset = 0) {
      array[offset] = this.r;
      array[offset + 1] = this.g;
      array[offset + 2] = this.b;
      return array;
    }
    /**
     * Sets the components of this color from the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - The buffer attribute holding color data.
     * @param {number} index - The index into the attribute.
     * @return {Color} A reference to this color.
     */
    fromBufferAttribute(attribute, index) {
      this.r = attribute.getX(index);
      this.g = attribute.getY(index);
      this.b = attribute.getZ(index);
      return this;
    }
    /**
     * This methods defines the serialization result of this class. Returns the color
     * as a hexadecimal value.
     *
     * @return {number} The hexadecimal value.
     */
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r;
      yield this.g;
      yield this.b;
    }
  }
  const _color = /* @__PURE__ */ new Color();
  Color.NAMES = _colorKeywords;
  if (typeof __THREE_DEVTOOLS__ !== "undefined") {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
      revision: REVISION
    } }));
  }
  if (typeof window !== "undefined") {
    if (window.__THREE__) {
      console.warn("WARNING: Multiple instances of Three.js being imported.");
    } else {
      window.__THREE__ = REVISION;
    }
  }
  const LN_SCALE_MIN = -12;
  const LN_SCALE_MAX = 9;
  const LN_SCALE_ZERO = -30;
  const SCALE_ZERO = Math.exp(LN_SCALE_ZERO);
  const SPLAT_TEX_WIDTH_BITS = 11;
  const SPLAT_TEX_HEIGHT_BITS = 11;
  const SPLAT_TEX_WIDTH = 1 << SPLAT_TEX_WIDTH_BITS;
  const SPLAT_TEX_HEIGHT = 1 << SPLAT_TEX_HEIGHT_BITS;
  const SPLAT_TEX_MIN_HEIGHT = 1;
  function unindentLines(s) {
    var _a2;
    let seenNonEmpty = false;
    const lines = s.split("\\n").map((line) => {
      const trimmedLine = line.trimEnd();
      if (seenNonEmpty) {
        return trimmedLine;
      }
      if (trimmedLine.length > 0) {
        seenNonEmpty = true;
        return trimmedLine;
      }
      return null;
    }).filter((line) => line != null);
    while (lines.length > 0 && lines[lines.length - 1].length === 0) {
      lines.pop();
    }
    if (lines.length === 0) {
      return [];
    }
    const indent = (_a2 = lines[0].match(/^\\s*/)) == null ? void 0 : _a2[0];
    if (!indent) {
      return lines;
    }
    const regex = new RegExp(\`^\${indent}\`);
    return lines.map((line) => line.replace(regex, ""));
  }
  function unindent(s) {
    return unindentLines(s).join("\\n");
  }
  const f32buffer = new Float32Array(1);
  const u32buffer = new Uint32Array(f32buffer.buffer);
  const supportsFloat16Array = "Float16Array" in globalThis;
  const f16buffer = supportsFloat16Array ? new globalThis["Float16Array"](1) : null;
  const u16buffer = new Uint16Array(f16buffer == null ? void 0 : f16buffer.buffer);
  function normalize(vec) {
    const norm = Math.sqrt(vec.reduce((acc, v) => acc + v * v, 0));
    return vec.map((v) => v / norm);
  }
  const toHalf = supportsFloat16Array ? toHalfNative : toHalfJS;
  const fromHalf = supportsFloat16Array ? fromHalfNative : fromHalfJS;
  function toHalfNative(f) {
    f16buffer[0] = f;
    return u16buffer[0];
  }
  function toHalfJS(f) {
    f32buffer[0] = f;
    const bits2 = u32buffer[0];
    const sign = bits2 >> 31 & 1;
    const exp = bits2 >> 23 & 255;
    const frac = bits2 & 8388607;
    const halfSign = sign << 15;
    if (exp === 255) {
      if (frac !== 0) {
        return halfSign | 32767;
      }
      return halfSign | 31744;
    }
    const newExp = exp - 127 + 15;
    if (newExp >= 31) {
      return halfSign | 31744;
    }
    if (newExp <= 0) {
      if (newExp < -10) {
        return halfSign;
      }
      const subFrac = (frac | 8388608) >> 1 - newExp + 13;
      return halfSign | subFrac;
    }
    const halfFrac = frac >> 13;
    return halfSign | newExp << 10 | halfFrac;
  }
  function fromHalfNative(u) {
    u16buffer[0] = u;
    return f16buffer[0];
  }
  function fromHalfJS(h) {
    const sign = h >> 15 & 1;
    const exp = h >> 10 & 31;
    const frac = h & 1023;
    let f32bits;
    if (exp === 0) {
      if (frac === 0) {
        f32bits = sign << 31;
      } else {
        let mant = frac;
        let e = -14;
        while ((mant & 1024) === 0) {
          mant <<= 1;
          e--;
        }
        mant &= 1023;
        const newExp = e + 127;
        const newFrac = mant << 13;
        f32bits = sign << 31 | newExp << 23 | newFrac;
      }
    } else if (exp === 31) {
      if (frac === 0) {
        f32bits = sign << 31 | 2139095040;
      } else {
        f32bits = sign << 31 | 2143289344;
      }
    } else {
      const newExp = exp - 15 + 127;
      const newFrac = frac << 13;
      f32bits = sign << 31 | newExp << 23 | newFrac;
    }
    u32buffer[0] = f32bits;
    return f32buffer[0];
  }
  function floatToUint8(v) {
    return Math.max(0, Math.min(255, Math.round(v * 255)));
  }
  function getArrayBuffers(ctx) {
    const buffers = [];
    const seen = /* @__PURE__ */ new Set();
    function traverse(obj) {
      if (obj && typeof obj === "object" && !seen.has(obj)) {
        seen.add(obj);
        if (obj instanceof ArrayBuffer) {
          buffers.push(obj);
        } else if (ArrayBuffer.isView(obj)) {
          buffers.push(obj.buffer);
        } else if (Array.isArray(obj)) {
          obj.forEach(traverse);
        } else {
          Object.values(obj).forEach(traverse);
        }
      }
    }
    traverse(ctx);
    return buffers;
  }
  function setPackedSplat(packedSplats, index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b, encoding) {
    const rgbMin = (encoding == null ? void 0 : encoding.rgbMin) ?? 0;
    const rgbMax = (encoding == null ? void 0 : encoding.rgbMax) ?? 1;
    const rgbRange = rgbMax - rgbMin;
    const uR = floatToUint8((r - rgbMin) / rgbRange);
    const uG = floatToUint8((g - rgbMin) / rgbRange);
    const uB = floatToUint8((b - rgbMin) / rgbRange);
    const uA = floatToUint8(opacity);
    const uQuat = encodeQuatOctXy88R8(
      tempQuaternion.set(quatX, quatY, quatZ, quatW)
    );
    const uQuatX = uQuat & 255;
    const uQuatY = uQuat >>> 8 & 255;
    const uQuatZ = uQuat >>> 16 & 255;
    const lnScaleMin = (encoding == null ? void 0 : encoding.lnScaleMin) ?? LN_SCALE_MIN;
    const lnScaleMax = (encoding == null ? void 0 : encoding.lnScaleMax) ?? LN_SCALE_MAX;
    const lnScaleScale = 254 / (lnScaleMax - lnScaleMin);
    const uScaleX = scaleX < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleX) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uScaleY = scaleY < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleY) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uScaleZ = scaleZ < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleZ) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uCenterX = toHalf(x2);
    const uCenterY = toHalf(y);
    const uCenterZ = toHalf(z);
    const i4 = index * 4;
    packedSplats[i4] = uR | uG << 8 | uB << 16 | uA << 24;
    packedSplats[i4 + 1] = uCenterX | uCenterY << 16;
    packedSplats[i4 + 2] = uCenterZ | uQuatX << 16 | uQuatY << 24;
    packedSplats[i4 + 3] = uScaleX | uScaleY << 8 | uScaleZ << 16 | uQuatZ << 24;
  }
  function setPackedSplatCenter(packedSplats, index, x2, y, z) {
    const uCenterX = toHalf(x2);
    const uCenterY = toHalf(y);
    const uCenterZ = toHalf(z);
    const i4 = index * 4;
    packedSplats[i4 + 1] = uCenterX | uCenterY << 16;
    packedSplats[i4 + 2] = uCenterZ | packedSplats[i4 + 2] & 4294901760;
  }
  function setPackedSplatScales(packedSplats, index, scaleX, scaleY, scaleZ, encoding) {
    const lnScaleMin = (encoding == null ? void 0 : encoding.lnScaleMin) ?? LN_SCALE_MIN;
    const lnScaleMax = (encoding == null ? void 0 : encoding.lnScaleMax) ?? LN_SCALE_MAX;
    const lnScaleScale = 254 / (lnScaleMax - lnScaleMin);
    const uScaleX = scaleX < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleX) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uScaleY = scaleY < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleY) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uScaleZ = scaleZ < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleZ) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const i4 = index * 4;
    packedSplats[i4 + 3] = uScaleX | uScaleY << 8 | uScaleZ << 16 | packedSplats[i4 + 3] & 4278190080;
  }
  const tempQuaternion = new Quaternion();
  function setPackedSplatQuat(packedSplats, index, quatX, quatY, quatZ, quatW) {
    const uQuat = encodeQuatOctXy88R8(
      tempQuaternion.set(quatX, quatY, quatZ, quatW)
    );
    const uQuatX = uQuat & 255;
    const uQuatY = uQuat >>> 8 & 255;
    const uQuatZ = uQuat >>> 16 & 255;
    const i4 = index * 4;
    packedSplats[i4 + 2] = packedSplats[i4 + 2] & 65535 | uQuatX << 16 | uQuatY << 24;
    packedSplats[i4 + 3] = packedSplats[i4 + 3] & 16777215 | uQuatZ << 24;
  }
  function setPackedSplatRgba(packedSplats, index, r, g, b, a, encoding) {
    const rgbMin = (encoding == null ? void 0 : encoding.rgbMin) ?? 0;
    const rgbMax = (encoding == null ? void 0 : encoding.rgbMax) ?? 1;
    const rgbRange = rgbMax - rgbMin;
    const uR = floatToUint8((r - rgbMin) / rgbRange);
    const uG = floatToUint8((g - rgbMin) / rgbRange);
    const uB = floatToUint8((b - rgbMin) / rgbRange);
    const uA = floatToUint8(a);
    const i4 = index * 4;
    packedSplats[i4] = uR | uG << 8 | uB << 16 | uA << 24;
  }
  function setPackedSplatRgb(packedSplats, index, r, g, b, encoding) {
    const rgbMin = (encoding == null ? void 0 : encoding.rgbMin) ?? 0;
    const rgbMax = (encoding == null ? void 0 : encoding.rgbMax) ?? 1;
    const rgbRange = rgbMax - rgbMin;
    const uR = floatToUint8((r - rgbMin) / rgbRange);
    const uG = floatToUint8((g - rgbMin) / rgbRange);
    const uB = floatToUint8((b - rgbMin) / rgbRange);
    const i4 = index * 4;
    packedSplats[i4] = uR | uG << 8 | uB << 16 | packedSplats[i4] & 4278190080;
  }
  function setPackedSplatOpacity(packedSplats, index, opacity) {
    const uA = floatToUint8(opacity);
    const i4 = index * 4;
    packedSplats[i4] = packedSplats[i4] & 16777215 | uA << 24;
  }
  new Vector3();
  new Vector3();
  new Color();
  function getTextureSize(numSplats) {
    const width = SPLAT_TEX_WIDTH;
    const height = Math.max(
      SPLAT_TEX_MIN_HEIGHT,
      Math.min(SPLAT_TEX_HEIGHT, Math.ceil(numSplats / width))
    );
    const depth = Math.ceil(numSplats / (width * height));
    const maxSplats = width * height * depth;
    return { width, height, depth, maxSplats };
  }
  function computeMaxSplats(numSplats) {
    const width = SPLAT_TEX_WIDTH;
    const height = Math.max(
      SPLAT_TEX_MIN_HEIGHT,
      Math.min(SPLAT_TEX_HEIGHT, Math.ceil(numSplats / width))
    );
    const depth = Math.ceil(numSplats / (width * height));
    return width * height * depth;
  }
  unindent(\`
  precision highp float;

  in vec3 position;

  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
\`);
  const tempNormalizedQuaternion = new Quaternion();
  const tempAxis = new Vector3();
  function encodeQuatOctXy88R8(q) {
    const qnorm = tempNormalizedQuaternion.copy(q).normalize();
    if (qnorm.w < 0) {
      qnorm.set(-qnorm.x, -qnorm.y, -qnorm.z, -qnorm.w);
    }
    const theta = 2 * Math.acos(qnorm.w);
    const xyz_norm = Math.sqrt(
      qnorm.x * qnorm.x + qnorm.y * qnorm.y + qnorm.z * qnorm.z
    );
    const axis = xyz_norm < 1e-6 ? tempAxis.set(1, 0, 0) : tempAxis.set(qnorm.x, qnorm.y, qnorm.z).divideScalar(xyz_norm);
    const sum = Math.abs(axis.x) + Math.abs(axis.y) + Math.abs(axis.z);
    let p_x = axis.x / sum;
    let p_y = axis.y / sum;
    if (axis.z < 0) {
      const tmp = p_x;
      p_x = (1 - Math.abs(p_y)) * (p_x >= 0 ? 1 : -1);
      p_y = (1 - Math.abs(tmp)) * (p_y >= 0 ? 1 : -1);
    }
    const u_f = p_x * 0.5 + 0.5;
    const v_f = p_y * 0.5 + 0.5;
    const quantU = Math.round(u_f * 255);
    const quantV = Math.round(v_f * 255);
    const angleInt = Math.round(theta * (255 / Math.PI));
    return angleInt << 16 | quantV << 8 | quantU;
  }
  function packSint8Bytes(b0, b1, b22, b3) {
    const clampedB0 = Math.max(-127, Math.min(127, b0 * 127));
    const clampedB1 = Math.max(-127, Math.min(127, b1 * 127));
    const clampedB2 = Math.max(-127, Math.min(127, b22 * 127));
    const clampedB3 = Math.max(-127, Math.min(127, b3 * 127));
    return clampedB0 & 255 | (clampedB1 & 255) << 8 | (clampedB2 & 255) << 16 | (clampedB3 & 255) << 24;
  }
  function encodeSh1Rgb(sh1Array, index, sh1Rgb, encoding) {
    const sh1Min = (encoding == null ? void 0 : encoding.sh1Min) ?? -1;
    const sh1Max = (encoding == null ? void 0 : encoding.sh1Max) ?? 1;
    const sh1Mid = 0.5 * (sh1Min + sh1Max);
    const sh1Scale = 126 / (sh1Max - sh1Min);
    const base = index * 2;
    for (let i2 = 0; i2 < 9; ++i2) {
      const s = (sh1Rgb[i2] - sh1Mid) * sh1Scale;
      const value = Math.round(Math.max(-63, Math.min(63, s))) & 127;
      const bitStart = i2 * 7;
      const bitEnd = bitStart + 7;
      const wordStart = Math.floor(bitStart / 32);
      const bitOffset = bitStart - wordStart * 32;
      const firstWord = value << bitOffset & 4294967295;
      sh1Array[base + wordStart] |= firstWord;
      if (bitEnd > wordStart * 32 + 32) {
        const secondWord = value >>> 32 - bitOffset & 4294967295;
        sh1Array[base + wordStart + 1] |= secondWord;
      }
    }
  }
  function encodeSh2Rgb(sh2Array, index, sh2Rgb, encoding) {
    const sh2Min = (encoding == null ? void 0 : encoding.sh2Min) ?? -1;
    const sh2Max = (encoding == null ? void 0 : encoding.sh2Max) ?? 1;
    const sh2Mid = 0.5 * (sh2Min + sh2Max);
    const sh2Scale = 2 / (sh2Max - sh2Min);
    sh2Array[index * 4 + 0] = packSint8Bytes(
      (sh2Rgb[0] - sh2Mid) * sh2Scale,
      (sh2Rgb[1] - sh2Mid) * sh2Scale,
      (sh2Rgb[2] - sh2Mid) * sh2Scale,
      (sh2Rgb[3] - sh2Mid) * sh2Scale
    );
    sh2Array[index * 4 + 1] = packSint8Bytes(
      (sh2Rgb[4] - sh2Mid) * sh2Scale,
      (sh2Rgb[5] - sh2Mid) * sh2Scale,
      (sh2Rgb[6] - sh2Mid) * sh2Scale,
      (sh2Rgb[7] - sh2Mid) * sh2Scale
    );
    sh2Array[index * 4 + 2] = packSint8Bytes(
      (sh2Rgb[8] - sh2Mid) * sh2Scale,
      (sh2Rgb[9] - sh2Mid) * sh2Scale,
      (sh2Rgb[10] - sh2Mid) * sh2Scale,
      (sh2Rgb[11] - sh2Mid) * sh2Scale
    );
    sh2Array[index * 4 + 3] = packSint8Bytes(
      (sh2Rgb[12] - sh2Mid) * sh2Scale,
      (sh2Rgb[13] - sh2Mid) * sh2Scale,
      (sh2Rgb[14] - sh2Mid) * sh2Scale,
      0
    );
  }
  function encodeSh3Rgb(sh3Array, index, sh3Rgb, encoding) {
    const sh3Min = (encoding == null ? void 0 : encoding.sh3Min) ?? -1;
    const sh3Max = (encoding == null ? void 0 : encoding.sh3Max) ?? 1;
    const sh3Mid = 0.5 * (sh3Min + sh3Max);
    const sh3Scale = 62 / (sh3Max - sh3Min);
    const base = index * 4;
    for (let i2 = 0; i2 < 21; ++i2) {
      const s = (sh3Rgb[i2] - sh3Mid) * sh3Scale;
      const value = Math.round(Math.max(-31, Math.min(31, s))) & 63;
      const bitStart = i2 * 6;
      const bitEnd = bitStart + 6;
      const wordStart = Math.floor(bitStart / 32);
      const bitOffset = bitStart - wordStart * 32;
      const firstWord = value << bitOffset & 4294967295;
      sh3Array[base + wordStart] |= firstWord;
      if (bitEnd > wordStart * 32 + 32) {
        const secondWord = value >>> 32 - bitOffset & 4294967295;
        sh3Array[base + wordStart + 1] |= secondWord;
      }
    }
  }
  function decompressPartialGzip(fileBytes, numBytes) {
    const chunks = [];
    let totalBytes = 0;
    let result = null;
    const gunzip = new Gunzip((data, final) => {
      chunks.push(data);
      totalBytes += data.length;
      if (final || totalBytes >= numBytes) {
        const allBytes = new Uint8Array(totalBytes);
        let offset2 = 0;
        for (const chunk of chunks) {
          allBytes.set(chunk, offset2);
          offset2 += chunk.length;
        }
        result = allBytes.slice(0, numBytes);
      }
    });
    const CHUNK_SIZE = 1024;
    let offset = 0;
    while (result == null && offset < fileBytes.length) {
      const chunk = fileBytes.slice(offset, offset + CHUNK_SIZE);
      gunzip.push(chunk, false);
      offset += CHUNK_SIZE;
    }
    if (result == null) {
      gunzip.push(new Uint8Array(), true);
      if (result == null) {
        throw new Error("Failed to decompress partial gzip");
      }
    }
    return result;
  }
  class GunzipReader {
    constructor({
      fileBytes,
      chunkBytes = 64 * 1024
    }) {
      this.fileBytes = fileBytes;
      this.chunkBytes = chunkBytes;
      this.chunks = [];
      this.totalBytes = 0;
      const ds = new DecompressionStream("gzip");
      const decompressionStream = new Blob([fileBytes]).stream().pipeThrough(ds);
      this.reader = decompressionStream.getReader();
    }
    async read(numBytes) {
      while (this.totalBytes < numBytes) {
        const { value: chunk, done: readerDone } = await this.reader.read();
        if (readerDone) {
          break;
        }
        this.chunks.push(chunk);
        this.totalBytes += chunk.length;
      }
      if (this.totalBytes < numBytes) {
        throw new Error(
          \`Unexpected EOF: needed \${numBytes}, got \${this.totalBytes}\`
        );
      }
      const allBytes = new Uint8Array(this.totalBytes);
      let outOffset = 0;
      for (const chunk of this.chunks) {
        allBytes.set(chunk, outOffset);
        outOffset += chunk.length;
      }
      const result = allBytes.subarray(0, numBytes);
      this.chunks = [allBytes.subarray(numBytes)];
      this.totalBytes -= numBytes;
      return result;
    }
  }
  function decodeAntiSplat(fileBytes, initNumSplats, splatCallback) {
    const numSplats = Math.floor(fileBytes.length / 32);
    if (numSplats * 32 !== fileBytes.length) {
      throw new Error("Invalid .splat file size");
    }
    initNumSplats(numSplats);
    const f32 = new Float32Array(fileBytes.buffer);
    for (let i2 = 0; i2 < numSplats; ++i2) {
      const i322 = i2 * 32;
      const i8 = i2 * 8;
      const x2 = f32[i8 + 0];
      const y = f32[i8 + 1];
      const z = f32[i8 + 2];
      const scaleX = f32[i8 + 3];
      const scaleY = f32[i8 + 4];
      const scaleZ = f32[i8 + 5];
      const r = fileBytes[i322 + 24] / 255;
      const g = fileBytes[i322 + 25] / 255;
      const b = fileBytes[i322 + 26] / 255;
      const opacity = fileBytes[i322 + 27] / 255;
      const quatW = (fileBytes[i322 + 28] - 128) / 128;
      const quatX = (fileBytes[i322 + 29] - 128) / 128;
      const quatY = (fileBytes[i322 + 30] - 128) / 128;
      const quatZ = (fileBytes[i322 + 31] - 128) / 128;
      splatCallback(
        i2,
        x2,
        y,
        z,
        scaleX,
        scaleY,
        scaleZ,
        quatX,
        quatY,
        quatZ,
        quatW,
        opacity,
        r,
        g,
        b
      );
    }
  }
  function unpackAntiSplat(fileBytes, splatEncoding) {
    let numSplats = 0;
    let maxSplats = 0;
    let packedArray = new Uint32Array(0);
    decodeAntiSplat(
      fileBytes,
      (cbNumSplats) => {
        numSplats = cbNumSplats;
        maxSplats = computeMaxSplats(numSplats);
        packedArray = new Uint32Array(maxSplats * 4);
      },
      (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
        setPackedSplat(
          packedArray,
          index,
          x2,
          y,
          z,
          scaleX,
          scaleY,
          scaleZ,
          quatX,
          quatY,
          quatZ,
          quatW,
          opacity,
          r,
          g,
          b,
          splatEncoding
        );
      }
    );
    return { packedArray, numSplats };
  }
  const KSPLAT_COMPRESSION = {
    0: {
      bytesPerCenter: 12,
      bytesPerScale: 12,
      bytesPerRotation: 16,
      bytesPerColor: 4,
      bytesPerSphericalHarmonicsComponent: 4,
      scaleOffsetBytes: 12,
      rotationOffsetBytes: 24,
      colorOffsetBytes: 40,
      sphericalHarmonicsOffsetBytes: 44,
      scaleRange: 1
    },
    1: {
      bytesPerCenter: 6,
      bytesPerScale: 6,
      bytesPerRotation: 8,
      bytesPerColor: 4,
      bytesPerSphericalHarmonicsComponent: 2,
      scaleOffsetBytes: 6,
      rotationOffsetBytes: 12,
      colorOffsetBytes: 20,
      sphericalHarmonicsOffsetBytes: 24,
      scaleRange: 32767
    },
    2: {
      bytesPerCenter: 6,
      bytesPerScale: 6,
      bytesPerRotation: 8,
      bytesPerColor: 4,
      bytesPerSphericalHarmonicsComponent: 1,
      scaleOffsetBytes: 6,
      rotationOffsetBytes: 12,
      colorOffsetBytes: 20,
      sphericalHarmonicsOffsetBytes: 24,
      scaleRange: 32767
    }
  };
  const KSPLAT_SH_DEGREE_TO_COMPONENTS = {
    0: 0,
    1: 9,
    2: 24,
    3: 45
  };
  function decodeKsplat(fileBytes, initNumSplats, splatCallback, shCallback) {
    var _a2;
    const HEADER_BYTES = 4096;
    const SECTION_BYTES = 1024;
    let headerOffset = 0;
    const header = new DataView(fileBytes.buffer, headerOffset, HEADER_BYTES);
    headerOffset += HEADER_BYTES;
    const versionMajor = header.getUint8(0);
    const versionMinor = header.getUint8(1);
    if (versionMajor !== 0 || versionMinor < 1) {
      throw new Error(
        \`Unsupported .ksplat version: \${versionMajor}.\${versionMinor}\`
      );
    }
    const maxSectionCount = header.getUint32(4, true);
    header.getUint32(16, true);
    const compressionLevel = header.getUint16(20, true);
    if (compressionLevel < 0 || compressionLevel > 2) {
      throw new Error(\`Invalid .ksplat compression level: \${compressionLevel}\`);
    }
    const minSphericalHarmonicsCoeff = header.getFloat32(36, true) || -1.5;
    const maxSphericalHarmonicsCoeff = header.getFloat32(40, true) || 1.5;
    let sectionBase = HEADER_BYTES + maxSectionCount * SECTION_BYTES;
    for (let section = 0; section < maxSectionCount; ++section) {
      let getSh = function(splatOffset, component) {
        if (compressionLevel === 0) {
          return data.getFloat32(
            splatOffset + sphericalHarmonicsOffsetBytes + component * 4,
            true
          );
        }
        if (compressionLevel === 1) {
          return fromHalf(
            data.getUint16(
              splatOffset + sphericalHarmonicsOffsetBytes + component * 2,
              true
            )
          );
        }
        const t = data.getUint8(splatOffset + sphericalHarmonicsOffsetBytes + component) / 255;
        return minSphericalHarmonicsCoeff + t * (maxSphericalHarmonicsCoeff - minSphericalHarmonicsCoeff);
      };
      const section2 = new DataView(fileBytes.buffer, headerOffset, SECTION_BYTES);
      headerOffset += SECTION_BYTES;
      const sectionSplatCount = section2.getUint32(0, true);
      const sectionMaxSplatCount = section2.getUint32(4, true);
      const bucketSize = section2.getUint32(8, true);
      const bucketCount = section2.getUint32(12, true);
      const bucketBlockSize = section2.getFloat32(16, true);
      const bucketStorageSizeBytes = section2.getUint16(20, true);
      const compressionScaleRange = (section2.getUint32(24, true) || ((_a2 = KSPLAT_COMPRESSION[compressionLevel]) == null ? void 0 : _a2.scaleRange)) ?? 1;
      const fullBucketCount = section2.getUint32(32, true);
      const fullBucketSplats = fullBucketCount * bucketSize;
      const partiallyFilledBucketCount = section2.getUint32(36, true);
      const bucketsMetaDataSizeBytes = partiallyFilledBucketCount * 4;
      const bucketsStorageSizeBytes = bucketStorageSizeBytes * bucketCount + bucketsMetaDataSizeBytes;
      const sphericalHarmonicsDegree = section2.getUint16(40, true);
      const shComponents = KSPLAT_SH_DEGREE_TO_COMPONENTS[sphericalHarmonicsDegree];
      const {
        bytesPerCenter,
        bytesPerScale,
        bytesPerRotation,
        bytesPerColor,
        bytesPerSphericalHarmonicsComponent,
        scaleOffsetBytes,
        rotationOffsetBytes,
        colorOffsetBytes,
        sphericalHarmonicsOffsetBytes
      } = KSPLAT_COMPRESSION[compressionLevel];
      const bytesPerSplat = bytesPerCenter + bytesPerScale + bytesPerRotation + bytesPerColor + shComponents * bytesPerSphericalHarmonicsComponent;
      const splatDataStorageSizeBytes = bytesPerSplat * sectionMaxSplatCount;
      const storageSizeBytes = splatDataStorageSizeBytes + bucketsStorageSizeBytes;
      const sh1Index = [0, 3, 6, 1, 4, 7, 2, 5, 8];
      const sh2Index = [
        9,
        14,
        19,
        10,
        15,
        20,
        11,
        16,
        21,
        12,
        17,
        22,
        13,
        18,
        23
      ];
      const sh3Index = [
        24,
        31,
        38,
        25,
        32,
        39,
        26,
        33,
        40,
        27,
        34,
        41,
        28,
        35,
        42,
        29,
        36,
        43,
        30,
        37,
        44
      ];
      const sh1 = sphericalHarmonicsDegree >= 1 ? new Float32Array(3 * 3) : void 0;
      const sh2 = sphericalHarmonicsDegree >= 2 ? new Float32Array(5 * 3) : void 0;
      const sh3 = sphericalHarmonicsDegree >= 3 ? new Float32Array(7 * 3) : void 0;
      const compressionScaleFactor = bucketBlockSize / 2 / compressionScaleRange;
      const bucketsBase = sectionBase + bucketsMetaDataSizeBytes;
      const dataBase = sectionBase + bucketsStorageSizeBytes;
      const data = new DataView(
        fileBytes.buffer,
        dataBase,
        splatDataStorageSizeBytes
      );
      const bucketArray = new Float32Array(
        fileBytes.buffer,
        bucketsBase,
        bucketCount * 3
      );
      const partiallyFilledBucketLengths = new Uint32Array(
        fileBytes.buffer,
        sectionBase,
        partiallyFilledBucketCount
      );
      let partialBucketIndex = fullBucketCount;
      let partialBucketBase = fullBucketSplats;
      for (let i2 = 0; i2 < sectionSplatCount; ++i2) {
        const splatOffset = i2 * bytesPerSplat;
        let bucketIndex;
        if (i2 < fullBucketSplats) {
          bucketIndex = Math.floor(i2 / bucketSize);
        } else {
          const bucketLength = partiallyFilledBucketLengths[partialBucketIndex - fullBucketCount];
          if (i2 >= partialBucketBase + bucketLength) {
            partialBucketIndex += 1;
            partialBucketBase += bucketLength;
          }
          bucketIndex = partialBucketIndex;
        }
        const x2 = compressionLevel === 0 ? data.getFloat32(splatOffset + 0, true) : (data.getUint16(splatOffset + 0, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 0];
        const y = compressionLevel === 0 ? data.getFloat32(splatOffset + 4, true) : (data.getUint16(splatOffset + 2, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 1];
        const z = compressionLevel === 0 ? data.getFloat32(splatOffset + 8, true) : (data.getUint16(splatOffset + 4, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 2];
        const scaleX = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 0, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 0, true));
        const scaleY = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 4, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 2, true));
        const scaleZ = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 8, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 4, true));
        const quatW = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 0, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 0, true)
        );
        const quatX = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 4, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 2, true)
        );
        const quatY = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 8, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 4, true)
        );
        const quatZ = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 12, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 6, true)
        );
        const r = data.getUint8(splatOffset + colorOffsetBytes + 0) / 255;
        const g = data.getUint8(splatOffset + colorOffsetBytes + 1) / 255;
        const b = data.getUint8(splatOffset + colorOffsetBytes + 2) / 255;
        const opacity = data.getUint8(splatOffset + colorOffsetBytes + 3) / 255;
        splatCallback(
          i2,
          x2,
          y,
          z,
          scaleX,
          scaleY,
          scaleZ,
          quatX,
          quatY,
          quatZ,
          quatW,
          opacity,
          r,
          g,
          b
        );
        if (sphericalHarmonicsDegree >= 1 && sh1) {
          for (const [i22, key] of sh1Index.entries()) {
            sh1[i22] = getSh(splatOffset, key);
          }
          if (sh2) {
            for (const [i22, key] of sh2Index.entries()) {
              sh2[i22] = getSh(splatOffset, key);
            }
          }
          if (sh3) {
            for (const [i22, key] of sh3Index.entries()) {
              sh3[i22] = getSh(splatOffset, key);
            }
          }
          shCallback == null ? void 0 : shCallback(i2, sh1, sh2, sh3);
        }
      }
      sectionBase += storageSizeBytes;
    }
  }
  function unpackKsplat(fileBytes, splatEncoding) {
    var _a2;
    const HEADER_BYTES = 4096;
    const SECTION_BYTES = 1024;
    let headerOffset = 0;
    const header = new DataView(fileBytes.buffer, headerOffset, HEADER_BYTES);
    headerOffset += HEADER_BYTES;
    const versionMajor = header.getUint8(0);
    const versionMinor = header.getUint8(1);
    if (versionMajor !== 0 || versionMinor < 1) {
      throw new Error(
        \`Unsupported .ksplat version: \${versionMajor}.\${versionMinor}\`
      );
    }
    const maxSectionCount = header.getUint32(4, true);
    const splatCount = header.getUint32(16, true);
    const compressionLevel = header.getUint16(20, true);
    if (compressionLevel < 0 || compressionLevel > 2) {
      throw new Error(\`Invalid .ksplat compression level: \${compressionLevel}\`);
    }
    const minSphericalHarmonicsCoeff = header.getFloat32(36, true) || -1.5;
    const maxSphericalHarmonicsCoeff = header.getFloat32(40, true) || 1.5;
    const numSplats = splatCount;
    const maxSplats = computeMaxSplats(numSplats);
    const packedArray = new Uint32Array(maxSplats * 4);
    const extra = {};
    let sectionBase = HEADER_BYTES + maxSectionCount * SECTION_BYTES;
    for (let section = 0; section < maxSectionCount; ++section) {
      let getSh = function(splatOffset, component) {
        if (compressionLevel === 0) {
          return data.getFloat32(
            splatOffset + sphericalHarmonicsOffsetBytes + component * 4,
            true
          );
        }
        if (compressionLevel === 1) {
          return fromHalf(
            data.getUint16(
              splatOffset + sphericalHarmonicsOffsetBytes + component * 2,
              true
            )
          );
        }
        const t = data.getUint8(splatOffset + sphericalHarmonicsOffsetBytes + component) / 255;
        return minSphericalHarmonicsCoeff + t * (maxSphericalHarmonicsCoeff - minSphericalHarmonicsCoeff);
      };
      const section2 = new DataView(fileBytes.buffer, headerOffset, SECTION_BYTES);
      headerOffset += SECTION_BYTES;
      const sectionSplatCount = section2.getUint32(0, true);
      const sectionMaxSplatCount = section2.getUint32(4, true);
      const bucketSize = section2.getUint32(8, true);
      const bucketCount = section2.getUint32(12, true);
      const bucketBlockSize = section2.getFloat32(16, true);
      const bucketStorageSizeBytes = section2.getUint16(20, true);
      const compressionScaleRange = (section2.getUint32(24, true) || ((_a2 = KSPLAT_COMPRESSION[compressionLevel]) == null ? void 0 : _a2.scaleRange)) ?? 1;
      const fullBucketCount = section2.getUint32(32, true);
      const fullBucketSplats = fullBucketCount * bucketSize;
      const partiallyFilledBucketCount = section2.getUint32(36, true);
      const bucketsMetaDataSizeBytes = partiallyFilledBucketCount * 4;
      const bucketsStorageSizeBytes = bucketStorageSizeBytes * bucketCount + bucketsMetaDataSizeBytes;
      const sphericalHarmonicsDegree = section2.getUint16(40, true);
      const shComponents = KSPLAT_SH_DEGREE_TO_COMPONENTS[sphericalHarmonicsDegree];
      const {
        bytesPerCenter,
        bytesPerScale,
        bytesPerRotation,
        bytesPerColor,
        bytesPerSphericalHarmonicsComponent,
        scaleOffsetBytes,
        rotationOffsetBytes,
        colorOffsetBytes,
        sphericalHarmonicsOffsetBytes
      } = KSPLAT_COMPRESSION[compressionLevel];
      const bytesPerSplat = bytesPerCenter + bytesPerScale + bytesPerRotation + bytesPerColor + shComponents * bytesPerSphericalHarmonicsComponent;
      const splatDataStorageSizeBytes = bytesPerSplat * sectionMaxSplatCount;
      const storageSizeBytes = splatDataStorageSizeBytes + bucketsStorageSizeBytes;
      const sh1Index = [0, 3, 6, 1, 4, 7, 2, 5, 8];
      const sh2Index = [
        9,
        14,
        19,
        10,
        15,
        20,
        11,
        16,
        21,
        12,
        17,
        22,
        13,
        18,
        23
      ];
      const sh3Index = [
        24,
        31,
        38,
        25,
        32,
        39,
        26,
        33,
        40,
        27,
        34,
        41,
        28,
        35,
        42,
        29,
        36,
        43,
        30,
        37,
        44
      ];
      const sh1 = sphericalHarmonicsDegree >= 1 ? new Float32Array(3 * 3) : void 0;
      const sh2 = sphericalHarmonicsDegree >= 2 ? new Float32Array(5 * 3) : void 0;
      const sh3 = sphericalHarmonicsDegree >= 3 ? new Float32Array(7 * 3) : void 0;
      const compressionScaleFactor = bucketBlockSize / 2 / compressionScaleRange;
      const bucketsBase = sectionBase + bucketsMetaDataSizeBytes;
      const dataBase = sectionBase + bucketsStorageSizeBytes;
      const data = new DataView(
        fileBytes.buffer,
        dataBase,
        splatDataStorageSizeBytes
      );
      const bucketArray = new Float32Array(
        fileBytes.buffer,
        bucketsBase,
        bucketCount * 3
      );
      const partiallyFilledBucketLengths = new Uint32Array(
        fileBytes.buffer,
        sectionBase,
        partiallyFilledBucketCount
      );
      let partialBucketIndex = fullBucketCount;
      let partialBucketBase = fullBucketSplats;
      for (let i2 = 0; i2 < sectionSplatCount; ++i2) {
        const splatOffset = i2 * bytesPerSplat;
        let bucketIndex;
        if (i2 < fullBucketSplats) {
          bucketIndex = Math.floor(i2 / bucketSize);
        } else {
          const bucketLength = partiallyFilledBucketLengths[partialBucketIndex - fullBucketCount];
          if (i2 >= partialBucketBase + bucketLength) {
            partialBucketIndex += 1;
            partialBucketBase += bucketLength;
          }
          bucketIndex = partialBucketIndex;
        }
        const x2 = compressionLevel === 0 ? data.getFloat32(splatOffset + 0, true) : (data.getUint16(splatOffset + 0, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 0];
        const y = compressionLevel === 0 ? data.getFloat32(splatOffset + 4, true) : (data.getUint16(splatOffset + 2, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 1];
        const z = compressionLevel === 0 ? data.getFloat32(splatOffset + 8, true) : (data.getUint16(splatOffset + 4, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 2];
        const scaleX = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 0, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 0, true));
        const scaleY = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 4, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 2, true));
        const scaleZ = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 8, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 4, true));
        const quatW = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 0, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 0, true)
        );
        const quatX = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 4, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 2, true)
        );
        const quatY = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 8, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 4, true)
        );
        const quatZ = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 12, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 6, true)
        );
        const r = data.getUint8(splatOffset + colorOffsetBytes + 0) / 255;
        const g = data.getUint8(splatOffset + colorOffsetBytes + 1) / 255;
        const b = data.getUint8(splatOffset + colorOffsetBytes + 2) / 255;
        const opacity = data.getUint8(splatOffset + colorOffsetBytes + 3) / 255;
        setPackedSplat(
          packedArray,
          i2,
          x2,
          y,
          z,
          scaleX,
          scaleY,
          scaleZ,
          quatX,
          quatY,
          quatZ,
          quatW,
          opacity,
          r,
          g,
          b,
          splatEncoding
        );
        if (sphericalHarmonicsDegree >= 1) {
          if (sh1) {
            if (!extra.sh1) {
              extra.sh1 = new Uint32Array(numSplats * 2);
            }
            for (const [i22, key] of sh1Index.entries()) {
              sh1[i22] = getSh(splatOffset, key);
            }
            encodeSh1Rgb(extra.sh1, i2, sh1, splatEncoding);
          }
          if (sh2) {
            if (!extra.sh2) {
              extra.sh2 = new Uint32Array(numSplats * 4);
            }
            for (const [i22, key] of sh2Index.entries()) {
              sh2[i22] = getSh(splatOffset, key);
            }
            encodeSh2Rgb(extra.sh2, i2, sh2, splatEncoding);
          }
          if (sh3) {
            if (!extra.sh3) {
              extra.sh3 = new Uint32Array(numSplats * 4);
            }
            for (const [i22, key] of sh3Index.entries()) {
              sh3[i22] = getSh(splatOffset, key);
            }
            encodeSh3Rgb(extra.sh3, i2, sh3, splatEncoding);
          }
        }
      }
      sectionBase += storageSizeBytes;
    }
    return { packedArray, numSplats, extra };
  }
  const PLY_PROPERTY_TYPES = [
    "char",
    "uchar",
    "short",
    "ushort",
    "int",
    "uint",
    "float",
    "double"
  ];
  const _PlyReader = class _PlyReader {
    // Create a PlyReader from a Uint8Array/ArrayBuffer, no parsing done yet
    constructor({ fileBytes }) {
      this.header = "";
      this.littleEndian = true;
      this.elements = {};
      this.comments = [];
      this.data = null;
      this.numSplats = 0;
      this.fileBytes = fileBytes instanceof ArrayBuffer ? new Uint8Array(fileBytes) : fileBytes;
    }
    // Identify and parse the PLY text header (assumed to be <64KB in size).
    // this.elements will contain all the elements in the file, typically
    // "vertex" contains the Gsplat data.
    async parseHeader() {
      const bufferStream = new ReadableStream({
        start: (controller) => {
          controller.enqueue(this.fileBytes.slice(0, 65536));
          controller.close();
        }
      });
      const decoder = bufferStream.pipeThrough(new TextDecoderStream()).getReader();
      this.header = "";
      const headerTerminator = "end_header\\n";
      while (true) {
        const { value, done } = await decoder.read();
        if (done) {
          throw new Error("Failed to read header");
        }
        this.header += value;
        const endHeader = this.header.indexOf(headerTerminator);
        if (endHeader >= 0) {
          this.header = this.header.slice(0, endHeader + headerTerminator.length);
          break;
        }
      }
      const headerLen = new TextEncoder().encode(this.header).length;
      this.data = new DataView(this.fileBytes.buffer, headerLen);
      this.elements = {};
      let curElement = null;
      this.comments = [];
      this.header.trim().split("\\n").forEach((line, lineIndex) => {
        const trimmedLine = line.trim();
        if (lineIndex === 0) {
          if (trimmedLine !== "ply") {
            throw new Error("Invalid PLY header");
          }
          return;
        }
        if (trimmedLine.length === 0) {
          return;
        }
        const fields = trimmedLine.split(" ");
        switch (fields[0]) {
          case "format":
            if (fields[1] === "binary_little_endian") {
              this.littleEndian = true;
            } else if (fields[1] === "binary_big_endian") {
              this.littleEndian = false;
            } else {
              throw new Error(\`Unsupported PLY format: \${fields[1]}\`);
            }
            if (fields[2] !== "1.0") {
              throw new Error(\`Unsupported PLY version: \${fields[2]}\`);
            }
            break;
          case "end_header":
            break;
          case "comment":
            this.comments.push(trimmedLine.slice("comment ".length));
            break;
          case "element": {
            const name = fields[1];
            curElement = {
              name,
              count: Number.parseInt(fields[2]),
              properties: {}
            };
            this.elements[name] = curElement;
            break;
          }
          case "property":
            if (curElement == null) {
              throw new Error("Property must be inside an element");
            }
            if (fields[1] === "list") {
              curElement.properties[fields[4]] = {
                isList: true,
                type: fields[3],
                countType: fields[2]
              };
            } else {
              curElement.properties[fields[2]] = {
                isList: false,
                type: fields[1]
              };
            }
            break;
        }
      });
      if (this.elements.vertex) {
        this.numSplats = this.elements.vertex.count;
      }
    }
    parseData(elementCallback) {
      let offset = 0;
      const data = this.data;
      if (data == null) {
        throw new Error("No data to parse");
      }
      for (const elementName in this.elements) {
        const element = this.elements[elementName];
        const { count, properties } = element;
        const item = createEmptyItem(properties);
        const parseFn = createParseFn(properties, this.littleEndian);
        const callback = elementCallback(element) ?? (() => {
        });
        for (let index = 0; index < count; index++) {
          offset = parseFn(data, offset, item);
          callback(index, item);
        }
      }
    }
    // Parse all the Gsplat data in the PLY file in go, invoking the given
    // callbacks for each Gsplat.
    parseSplats(splatCallback, shCallback) {
      if (this.elements.vertex == null) {
        throw new Error("No vertex element found");
      }
      let isSuperSplat = false;
      const ssChunks = [];
      let numSh = 0;
      let sh1Props = [];
      let sh2Props = [];
      let sh3Props = [];
      let sh1 = void 0;
      let sh2 = void 0;
      let sh3 = void 0;
      function prepareSh() {
        const num_f_rest = NUM_SH_TO_NUM_F_REST[numSh];
        sh1Props = new Array(3).fill(null).flatMap((_, k) => [0, 1, 2].map((_2, d) => k + d * num_f_rest / 3));
        sh2Props = new Array(5).fill(null).flatMap(
          (_, k) => [0, 1, 2].map((_2, d) => 3 + k + d * num_f_rest / 3)
        );
        sh3Props = new Array(7).fill(null).flatMap(
          (_, k) => [0, 1, 2].map((_2, d) => 8 + k + d * num_f_rest / 3)
        );
        sh1 = numSh >= 1 ? new Float32Array(3 * 3) : void 0;
        sh2 = numSh >= 2 ? new Float32Array(5 * 3) : void 0;
        sh3 = numSh >= 3 ? new Float32Array(7 * 3) : void 0;
      }
      function ssShCallback(index, item) {
        if (!sh1) {
          throw new Error("Missing sh1");
        }
        const sh = item.f_rest;
        for (let i2 = 0; i2 < sh1Props.length; i2++) {
          sh1[i2] = sh[sh1Props[i2]] * 8 / 255 - 4;
        }
        if (sh2) {
          for (let i2 = 0; i2 < sh2Props.length; i2++) {
            sh2[i2] = sh[sh2Props[i2]] * 8 / 255 - 4;
          }
        }
        if (sh3) {
          for (let i2 = 0; i2 < sh3Props.length; i2++) {
            sh3[i2] = sh[sh3Props[i2]] * 8 / 255 - 4;
          }
        }
        shCallback == null ? void 0 : shCallback(index, sh1, sh2, sh3);
      }
      function initSuperSplat(element) {
        const {
          min_x,
          min_y,
          min_z,
          max_x,
          max_y,
          max_z,
          min_scale_x,
          min_scale_y,
          min_scale_z,
          max_scale_x,
          max_scale_y,
          max_scale_z
        } = element.properties;
        if (!min_x || !min_y || !min_z || !max_x || !max_y || !max_z || !min_scale_x || !min_scale_y || !min_scale_z || !max_scale_x || !max_scale_y || !max_scale_z) {
          throw new Error("Missing PLY chunk properties");
        }
        isSuperSplat = true;
        return (index, item) => {
          const {
            min_x: min_x2,
            min_y: min_y2,
            min_z: min_z2,
            max_x: max_x2,
            max_y: max_y2,
            max_z: max_z2,
            min_scale_x: min_scale_x2,
            min_scale_y: min_scale_y2,
            min_scale_z: min_scale_z2,
            max_scale_x: max_scale_x2,
            max_scale_y: max_scale_y2,
            max_scale_z: max_scale_z2,
            min_r,
            min_g,
            min_b,
            max_r,
            max_g,
            max_b
          } = item;
          ssChunks.push({
            min_x: min_x2,
            min_y: min_y2,
            min_z: min_z2,
            max_x: max_x2,
            max_y: max_y2,
            max_z: max_z2,
            min_scale_x: min_scale_x2,
            min_scale_y: min_scale_y2,
            min_scale_z: min_scale_z2,
            max_scale_x: max_scale_x2,
            max_scale_y: max_scale_y2,
            max_scale_z: max_scale_z2,
            min_r,
            min_g,
            min_b,
            max_r,
            max_g,
            max_b
          });
        };
      }
      function decodeSuperSplat(element) {
        if (shCallback && element.name === "sh") {
          numSh = getNumSh(element.properties);
          prepareSh();
          return ssShCallback;
        }
        if (element.name !== "vertex") {
          return null;
        }
        const { packed_position, packed_rotation, packed_scale, packed_color } = element.properties;
        if (!packed_position || !packed_rotation || !packed_scale || !packed_color) {
          throw new Error(
            "Missing PLY properties: packed_position, packed_rotation, packed_scale, packed_color"
          );
        }
        const SQRT2 = Math.sqrt(2);
        return (index, item) => {
          const chunk = ssChunks[index >>> 8];
          if (chunk == null) {
            throw new Error("Missing PLY chunk");
          }
          const {
            min_x,
            min_y,
            min_z,
            max_x,
            max_y,
            max_z,
            min_scale_x,
            min_scale_y,
            min_scale_z,
            max_scale_x,
            max_scale_y,
            max_scale_z,
            min_r,
            min_g,
            min_b,
            max_r,
            max_g,
            max_b
          } = chunk;
          const { packed_position: packed_position2, packed_rotation: packed_rotation2, packed_scale: packed_scale2, packed_color: packed_color2 } = item;
          const x2 = (packed_position2 >>> 21 & 2047) / 2047 * (max_x - min_x) + min_x;
          const y = (packed_position2 >>> 11 & 1023) / 1023 * (max_y - min_y) + min_y;
          const z = (packed_position2 & 2047) / 2047 * (max_z - min_z) + min_z;
          const r0 = ((packed_rotation2 >>> 20 & 1023) / 1023 - 0.5) * SQRT2;
          const r1 = ((packed_rotation2 >>> 10 & 1023) / 1023 - 0.5) * SQRT2;
          const r2 = ((packed_rotation2 & 1023) / 1023 - 0.5) * SQRT2;
          const rr = Math.sqrt(Math.max(0, 1 - r0 * r0 - r1 * r1 - r2 * r2));
          const rOrder = packed_rotation2 >>> 30;
          const quatX = rOrder === 0 ? r0 : rOrder === 1 ? rr : r1;
          const quatY = rOrder <= 1 ? r1 : rOrder === 2 ? rr : r2;
          const quatZ = rOrder <= 2 ? r2 : rr;
          const quatW = rOrder === 0 ? rr : r0;
          const scaleX = Math.exp(
            (packed_scale2 >>> 21 & 2047) / 2047 * (max_scale_x - min_scale_x) + min_scale_x
          );
          const scaleY = Math.exp(
            (packed_scale2 >>> 11 & 1023) / 1023 * (max_scale_y - min_scale_y) + min_scale_y
          );
          const scaleZ = Math.exp(
            (packed_scale2 & 2047) / 2047 * (max_scale_z - min_scale_z) + min_scale_z
          );
          const r = (packed_color2 >>> 24 & 255) / 255 * ((max_r ?? 1) - (min_r ?? 0)) + (min_r ?? 0);
          const g = (packed_color2 >>> 16 & 255) / 255 * ((max_g ?? 1) - (min_g ?? 0)) + (min_g ?? 0);
          const b = (packed_color2 >>> 8 & 255) / 255 * ((max_b ?? 1) - (min_b ?? 0)) + (min_b ?? 0);
          const opacity = (packed_color2 & 255) / 255;
          splatCallback(
            index,
            x2,
            y,
            z,
            scaleX,
            scaleY,
            scaleZ,
            quatX,
            quatY,
            quatZ,
            quatW,
            opacity,
            r,
            g,
            b
          );
        };
      }
      const elementCallback = (element) => {
        if (element.name === "chunk") {
          return initSuperSplat(element);
        }
        if (isSuperSplat) {
          return decodeSuperSplat(element);
        }
        if (element.name !== "vertex") {
          return null;
        }
        const {
          x: x2,
          y,
          z,
          scale_0,
          scale_1,
          scale_2,
          rot_0,
          rot_1,
          rot_2,
          rot_3,
          opacity,
          f_dc_0,
          f_dc_1,
          f_dc_2,
          red,
          green,
          blue,
          alpha
        } = element.properties;
        if (!x2 || !y || !z) {
          throw new Error("Missing PLY properties: x, y, z");
        }
        const hasScales = scale_0 && scale_1 && scale_2;
        const hasRots = rot_0 && rot_1 && rot_2 && rot_3;
        const alphaDiv = alpha != null ? FIELD_SCALE[alpha.type] : 1;
        const redDiv = red != null ? FIELD_SCALE[red.type] : 1;
        const greenDiv = green != null ? FIELD_SCALE[green.type] : 1;
        const blueDiv = blue != null ? FIELD_SCALE[blue.type] : 1;
        numSh = getNumSh(element.properties);
        prepareSh();
        return (index, item) => {
          const scaleX = hasScales ? Math.exp(item.scale_0) : _PlyReader.defaultPointScale;
          const scaleY = hasScales ? Math.exp(item.scale_1) : _PlyReader.defaultPointScale;
          const scaleZ = hasScales ? Math.exp(item.scale_2) : _PlyReader.defaultPointScale;
          const quatX = hasRots ? item.rot_1 : 0;
          const quatY = hasRots ? item.rot_2 : 0;
          const quatZ = hasRots ? item.rot_3 : 0;
          const quatW = hasRots ? item.rot_0 : 1;
          const op = opacity != null ? 1 / (1 + Math.exp(-item.opacity)) : alpha != null ? item.alpha / alphaDiv : 1;
          const r = f_dc_0 != null ? item.f_dc_0 * SH_C0$1 + 0.5 : red != null ? item.red / redDiv : 1;
          const g = f_dc_1 != null ? item.f_dc_1 * SH_C0$1 + 0.5 : green != null ? item.green / greenDiv : 1;
          const b = f_dc_2 != null ? item.f_dc_2 * SH_C0$1 + 0.5 : blue != null ? item.blue / blueDiv : 1;
          splatCallback(
            index,
            item.x,
            item.y,
            item.z,
            scaleX,
            scaleY,
            scaleZ,
            quatX,
            quatY,
            quatZ,
            quatW,
            op,
            r,
            g,
            b
          );
          if (shCallback && sh1) {
            const sh = item.f_rest;
            if (sh1) {
              for (let i2 = 0; i2 < sh1Props.length; i2++) {
                sh1[i2] = sh[sh1Props[i2]];
              }
            }
            if (sh2) {
              for (let i2 = 0; i2 < sh2Props.length; i2++) {
                sh2[i2] = sh[sh2Props[i2]];
              }
            }
            if (sh3) {
              for (let i2 = 0; i2 < sh3Props.length; i2++) {
                sh3[i2] = sh[sh3Props[i2]];
              }
            }
            shCallback(index, sh1, sh2, sh3);
          }
        };
      };
      this.parseData(elementCallback);
    }
    // Inject RGBA values into original PLY file, which can be used to modify
    // the color/opacity of the Gsplats and write out the modified PLY file.
    injectRgba(rgba) {
      let offset = 0;
      const data = this.data;
      if (data == null) {
        throw new Error("No parsed data");
      }
      if (rgba.length !== this.numSplats * 4) {
        throw new Error("Invalid RGBA array length");
      }
      for (const elementName in this.elements) {
        const element = this.elements[elementName];
        const { count, properties } = element;
        const parsers = [];
        let rgbaOffset = 0;
        const isVertex = elementName === "vertex";
        if (isVertex) {
          for (const name of ["opacity", "f_dc_0", "f_dc_1", "f_dc_2"]) {
            if (!properties[name] || properties[name].type !== "float") {
              throw new Error(\`Can't injectRgba due to property: \${name}\`);
            }
          }
        }
        for (const [propertyName, property] of Object.entries(properties)) {
          if (!property.isList) {
            if (isVertex) {
              if (propertyName === "f_dc_0" || propertyName === "f_dc_1" || propertyName === "f_dc_2") {
                const component = Number.parseInt(
                  propertyName.slice("f_dc_".length)
                );
                parsers.push(() => {
                  const value = (rgba[rgbaOffset + component] / 255 - 0.5) / SH_C0$1;
                  SET_FIELD[property.type](
                    data,
                    offset,
                    this.littleEndian,
                    value
                  );
                });
              } else if (propertyName === "opacity") {
                parsers.push(() => {
                  const value = Math.max(
                    -100,
                    Math.min(
                      100,
                      -Math.log(1 / (rgba[rgbaOffset + 3] / 255) - 1)
                    )
                  );
                  SET_FIELD[property.type](
                    data,
                    offset,
                    this.littleEndian,
                    value
                  );
                });
              }
            }
            parsers.push(() => {
              offset += FIELD_BYTES[property.type];
            });
          } else {
            parsers.push(() => {
              const length = PARSE_FIELD[property.countType](
                data,
                offset,
                this.littleEndian
              );
              offset += FIELD_BYTES[property.countType];
              offset += length * FIELD_BYTES[property.type];
            });
          }
        }
        for (let index = 0; index < count; index++) {
          for (const parser of parsers) {
            parser();
          }
          if (isVertex) {
            rgbaOffset += 4;
          }
        }
      }
    }
  };
  _PlyReader.defaultPointScale = 1e-3;
  let PlyReader = _PlyReader;
  const SH_C0$1 = 0.28209479177387814;
  const PARSE_FIELD = {
    char: (data, offset, littleEndian) => {
      return data.getInt8(offset);
    },
    uchar: (data, offset, littleEndian) => {
      return data.getUint8(offset);
    },
    short: (data, offset, littleEndian) => {
      return data.getInt16(offset, littleEndian);
    },
    ushort: (data, offset, littleEndian) => {
      return data.getUint16(offset, littleEndian);
    },
    int: (data, offset, littleEndian) => {
      return data.getInt32(offset, littleEndian);
    },
    uint: (data, offset, littleEndian) => {
      return data.getUint32(offset, littleEndian);
    },
    float: (data, offset, littleEndian) => {
      return data.getFloat32(offset, littleEndian);
    },
    double: (data, offset, littleEndian) => {
      return data.getFloat64(offset, littleEndian);
    }
  };
  const SET_FIELD = {
    char: (data, offset, littleEndian, value) => {
      data.setInt8(offset, value);
    },
    uchar: (data, offset, littleEndian, value) => {
      data.setUint8(offset, value);
    },
    short: (data, offset, littleEndian, value) => {
      data.setInt16(offset, value, littleEndian);
    },
    ushort: (data, offset, littleEndian, value) => {
      data.setUint16(offset, value, littleEndian);
    },
    int: (data, offset, littleEndian, value) => {
      data.setInt32(offset, value, littleEndian);
    },
    uint: (data, offset, littleEndian, value) => {
      data.setUint32(offset, value, littleEndian);
    },
    float: (data, offset, littleEndian, value) => {
      data.setFloat32(offset, value, littleEndian);
    },
    double: (data, offset, littleEndian, value) => {
      data.setFloat64(offset, value, littleEndian);
    }
  };
  const FIELD_BYTES = {
    char: 1,
    uchar: 1,
    short: 2,
    ushort: 2,
    int: 4,
    uint: 4,
    float: 4,
    double: 8
  };
  const FIELD_SCALE = {
    char: 127,
    uchar: 255,
    short: 32767,
    ushort: 65535,
    int: 2147483647,
    uint: 4294967295,
    float: 1,
    double: 1
  };
  const NUM_F_REST_TO_NUM_SH = {
    0: 0,
    9: 1,
    24: 2,
    45: 3
  };
  const NUM_SH_TO_NUM_F_REST = {
    0: 0,
    1: 9,
    2: 24,
    3: 45
  };
  const F_REST_REGEX = /^f_rest_([0-9]{1,2})$/;
  function createEmptyItem(properties) {
    const item = {};
    for (const [propertyName, property] of Object.entries(properties)) {
      if (F_REST_REGEX.test(propertyName)) {
        item.f_rest = new Array(getNumSh(properties));
      } else {
        item[propertyName] = property.isList ? [] : 0;
      }
    }
    return item;
  }
  function createParseFn(properties, littleEndian) {
    if (safeToCompile(properties)) {
      return createCompiledParserFn(properties, littleEndian);
    }
    return createDynamicParserFn(properties, littleEndian);
  }
  const UNSAFE_EVAL_ALLOWED = (() => {
    try {
      new Function("return 42;");
    } catch (e) {
      return false;
    }
    return true;
  })();
  const PROPERTY_NAME_REGEX = /^[a-zA-Z0-9_]+$/;
  function safeToCompile(properties) {
    if (!UNSAFE_EVAL_ALLOWED) {
      return false;
    }
    for (const [propertyName, property] of Object.entries(properties)) {
      if (!PROPERTY_NAME_REGEX.test(propertyName)) {
        return false;
      }
      if (property.isList && !PLY_PROPERTY_TYPES.includes(property.countType)) {
        return false;
      }
      if (!PLY_PROPERTY_TYPES.includes(property.type)) {
        return false;
      }
    }
    return true;
  }
  function createCompiledParserFn(properties, littleEndian) {
    const parserSrc = ["let list;"];
    for (const [propertyName, property] of Object.entries(properties)) {
      const fRestMatch = propertyName.match(F_REST_REGEX);
      if (fRestMatch) {
        const fRestIndex = +fRestMatch[1];
        parserSrc.push(
          /*js*/
          \`
        item.f_rest[\${fRestIndex}] = PARSE_FIELD['\${property.type}'](data, offset, \${littleEndian});
        offset += \${FIELD_BYTES[property.type]};
      \`
        );
      } else if (!property.isList) {
        parserSrc.push(
          /*js*/
          \`
        item['\${propertyName}'] = PARSE_FIELD['\${property.type}'](data, offset, \${littleEndian});
        offset += \${FIELD_BYTES[property.type]};
      \`
        );
      } else {
        parserSrc.push(
          /*js*/
          \`
        list = item['\${propertyName}'];
        list.length = PARSE_FIELD['\${property.countType}'](data, offset, \${littleEndian});
        offset += \${FIELD_BYTES[property.countType]};
        for (let i = 0; i < list.length; i++) {
          list[i] = PARSE_FIELD['\${property.type}'](data, offset, \${littleEndian});
          offset += \${FIELD_BYTES[property.type]};
        }
      \`
        );
      }
    }
    parserSrc.push("return offset;");
    const fn = new Function(
      "data",
      "offset",
      "item",
      "PARSE_FIELD",
      parserSrc.join("\\n")
    );
    return (data, offset, item) => fn(data, offset, item, PARSE_FIELD);
  }
  function createDynamicParserFn(properties, littleEndian) {
    const parsers = [];
    for (const [propertyName, property] of Object.entries(properties)) {
      const fRestMatch = propertyName.match(F_REST_REGEX);
      if (fRestMatch) {
        const fRestIndex = +fRestMatch[1];
        parsers.push(
          (data, offset, item) => {
            item.f_rest[fRestIndex] = PARSE_FIELD[property.type](
              data,
              offset,
              littleEndian
            );
            return offset + FIELD_BYTES[property.type];
          }
        );
      } else if (!property.isList) {
        parsers.push(
          (data, offset, item) => {
            item[propertyName] = PARSE_FIELD[property.type](
              data,
              offset,
              littleEndian
            );
            return offset + FIELD_BYTES[property.type];
          }
        );
      } else {
        parsers.push(
          (data, offset, item) => {
            const list = item[propertyName];
            list.length = PARSE_FIELD[property.countType](
              data,
              offset,
              littleEndian
            );
            let currentOffset = offset + FIELD_BYTES[property.countType];
            for (let i2 = 0; i2 < list.length; i2++) {
              list[i2] = PARSE_FIELD[property.type](
                data,
                currentOffset,
                littleEndian
              );
              currentOffset += FIELD_BYTES[property.type];
            }
            return currentOffset;
          }
        );
      }
    }
    return (data, offset, item) => {
      let currentOffset = offset;
      for (let parserIndex = 0; parserIndex < parsers.length; parserIndex++) {
        currentOffset = parsers[parserIndex](data, currentOffset, item);
      }
      return currentOffset;
    };
  }
  function getNumSh(properties) {
    let num_f_rest = 0;
    while (properties[\`f_rest_\${num_f_rest}\`]) {
      num_f_rest += 1;
    }
    const numSh = NUM_F_REST_TO_NUM_SH[num_f_rest];
    if (numSh == null) {
      throw new Error(\`Unsupported number of SH coefficients: \${num_f_rest}\`);
    }
    return numSh;
  }
  var SplatFileType = /* @__PURE__ */ ((SplatFileType2) => {
    SplatFileType2["PLY"] = "ply";
    SplatFileType2["SPZ"] = "spz";
    SplatFileType2["SPLAT"] = "splat";
    SplatFileType2["KSPLAT"] = "ksplat";
    SplatFileType2["PCSOGS"] = "pcsogs";
    SplatFileType2["PCSOGSZIP"] = "pcsogszip";
    return SplatFileType2;
  })(SplatFileType || {});
  function getSplatFileType(fileBytes) {
    const view = new DataView(fileBytes.buffer);
    if ((view.getUint32(0, true) & 16777215) === 7957616) {
      return "ply";
    }
    if ((view.getUint32(0, true) & 16777215) === 559903) {
      const header = decompressPartialGzip(fileBytes, 4);
      const gView = new DataView(header.buffer);
      if (gView.getUint32(0, true) === 1347635022) {
        return "spz";
      }
      return void 0;
    }
    if (view.getUint32(0, true) === 67324752) {
      if (tryPcSogsZip(fileBytes)) {
        return "pcsogszip";
      }
      return void 0;
    }
    return void 0;
  }
  function getFileExtension(pathOrUrl) {
    const noTrailing = pathOrUrl.split(/[?#]/, 1)[0];
    const lastSlash = Math.max(
      noTrailing.lastIndexOf("/"),
      noTrailing.lastIndexOf("\\\\")
    );
    const filename = noTrailing.slice(lastSlash + 1);
    const lastDot = filename.lastIndexOf(".");
    if (lastDot <= 0 || lastDot === filename.length - 1) {
      return "";
    }
    return filename.slice(lastDot + 1).toLowerCase();
  }
  function getSplatFileTypeFromPath(pathOrUrl) {
    const extension = getFileExtension(pathOrUrl);
    if (extension === "ply") {
      return "ply";
    }
    if (extension === "spz") {
      return "spz";
    }
    if (extension === "splat") {
      return "splat";
    }
    if (extension === "ksplat") {
      return "ksplat";
    }
    if (extension === "sog") {
      return "pcsogszip";
    }
    return void 0;
  }
  function tryPcSogs(input) {
    try {
      let text;
      if (typeof input === "string") {
        text = input;
      } else {
        const fileBytes = input instanceof ArrayBuffer ? new Uint8Array(input) : input;
        if (fileBytes.length > 65536) {
          return void 0;
        }
        text = new TextDecoder().decode(fileBytes);
      }
      const json = JSON.parse(text);
      if (!json || typeof json !== "object" || Array.isArray(json)) {
        return void 0;
      }
      const isVersion2 = json.version === 2;
      for (const key of ["means", "scales", "quats", "sh0"]) {
        if (!json[key] || typeof json[key] !== "object" || Array.isArray(json[key])) {
          return void 0;
        }
        if (isVersion2) {
          if (!json[key].files) {
            return void 0;
          }
          if ((key === "scales" || key === "sh0") && !json[key].codebook) {
            return void 0;
          }
          if (key === "means" && (!json[key].mins || !json[key].maxs)) {
            return void 0;
          }
        } else {
          if (!json[key].shape || !json[key].files) {
            return void 0;
          }
          if (key !== "quats" && (!json[key].mins || !json[key].maxs)) {
            return void 0;
          }
        }
      }
      return json;
    } catch {
      return void 0;
    }
  }
  function tryPcSogsZip(input) {
    try {
      const fileBytes = input instanceof ArrayBuffer ? new Uint8Array(input) : input;
      let metaFilename = null;
      const unzipped = unzipSync(fileBytes, {
        filter: ({ name }) => {
          const filename = name.split(/[\\\\/]/).pop();
          if (filename === "meta.json") {
            metaFilename = name;
            return true;
          }
          return false;
        }
      });
      if (!metaFilename) {
        return void 0;
      }
      const json = tryPcSogs(unzipped[metaFilename]);
      if (!json) {
        return void 0;
      }
      return { name: metaFilename, json };
    } catch {
      return void 0;
    }
  }
  class SplatData {
    constructor({ maxSplats = 1 } = {}) {
      this.numSplats = 0;
      this.maxSplats = getTextureSize(maxSplats).maxSplats;
      this.centers = new Float32Array(this.maxSplats * 3);
      this.scales = new Float32Array(this.maxSplats * 3);
      this.quaternions = new Float32Array(this.maxSplats * 4);
      this.opacities = new Float32Array(this.maxSplats);
      this.colors = new Float32Array(this.maxSplats * 3);
    }
    pushSplat() {
      const index = this.numSplats;
      this.ensureIndex(index);
      this.numSplats += 1;
      return index;
    }
    unpushSplat(index) {
      if (index === this.numSplats - 1) {
        this.numSplats -= 1;
      } else {
        throw new Error("Cannot unpush splat from non-last position");
      }
    }
    ensureCapacity(numSplats) {
      if (numSplats > this.maxSplats) {
        const targetSplats = Math.max(numSplats, this.maxSplats * 2);
        const newCenters = new Float32Array(targetSplats * 3);
        const newScales = new Float32Array(targetSplats * 3);
        const newQuaternions = new Float32Array(targetSplats * 4);
        const newOpacities = new Float32Array(targetSplats);
        const newColors = new Float32Array(targetSplats * 3);
        newCenters.set(this.centers);
        newScales.set(this.scales);
        newQuaternions.set(this.quaternions);
        newOpacities.set(this.opacities);
        newColors.set(this.colors);
        this.centers = newCenters;
        this.scales = newScales;
        this.quaternions = newQuaternions;
        this.opacities = newOpacities;
        this.colors = newColors;
        if (this.sh1) {
          const newSh1 = new Float32Array(targetSplats * 9);
          newSh1.set(this.sh1);
          this.sh1 = newSh1;
        }
        if (this.sh2) {
          const newSh2 = new Float32Array(targetSplats * 15);
          newSh2.set(this.sh2);
          this.sh2 = newSh2;
        }
        if (this.sh3) {
          const newSh3 = new Float32Array(targetSplats * 21);
          newSh3.set(this.sh3);
          this.sh3 = newSh3;
        }
        this.maxSplats = targetSplats;
      }
    }
    ensureIndex(index) {
      this.ensureCapacity(index + 1);
    }
    setCenter(index, x2, y, z) {
      this.centers[index * 3] = x2;
      this.centers[index * 3 + 1] = y;
      this.centers[index * 3 + 2] = z;
    }
    setScale(index, scaleX, scaleY, scaleZ) {
      this.scales[index * 3] = scaleX;
      this.scales[index * 3 + 1] = scaleY;
      this.scales[index * 3 + 2] = scaleZ;
    }
    setQuaternion(index, x2, y, z, w) {
      this.quaternions[index * 4] = x2;
      this.quaternions[index * 4 + 1] = y;
      this.quaternions[index * 4 + 2] = z;
      this.quaternions[index * 4 + 3] = w;
    }
    setOpacity(index, opacity) {
      this.opacities[index] = opacity;
    }
    setColor(index, r, g, b) {
      this.colors[index * 3] = r;
      this.colors[index * 3 + 1] = g;
      this.colors[index * 3 + 2] = b;
    }
    setSh1(index, sh1) {
      if (!this.sh1) {
        this.sh1 = new Float32Array(this.maxSplats * 9);
      }
      for (let j = 0; j < 9; ++j) {
        this.sh1[index * 9 + j] = sh1[j];
      }
    }
    setSh2(index, sh2) {
      if (!this.sh2) {
        this.sh2 = new Float32Array(this.maxSplats * 15);
      }
      for (let j = 0; j < 15; ++j) {
        this.sh2[index * 15 + j] = sh2[j];
      }
    }
    setSh3(index, sh3) {
      if (!this.sh3) {
        this.sh3 = new Float32Array(this.maxSplats * 21);
      }
      for (let j = 0; j < 21; ++j) {
        this.sh3[index * 21 + j] = sh3[j];
      }
    }
  }
  async function unpackPcSogs(json, extraFiles, splatEncoding) {
    const isVersion2 = "version" in json;
    if (!isVersion2 && json.quats.encoding !== "quaternion_packed") {
      throw new Error("Unsupported quaternion encoding");
    }
    const numSplats = isVersion2 ? json.count : json.means.shape[0];
    const maxSplats = computeMaxSplats(numSplats);
    const packedArray = new Uint32Array(maxSplats * 4);
    const extra = {};
    const meansPromise = Promise.all([
      decodeImageRgba(extraFiles[json.means.files[0]]),
      decodeImageRgba(extraFiles[json.means.files[1]])
    ]).then((means) => {
      for (let i2 = 0; i2 < numSplats; ++i2) {
        const i4 = i2 * 4;
        const fx = (means[0][i4 + 0] + (means[1][i4 + 0] << 8)) / 65535;
        const fy = (means[0][i4 + 1] + (means[1][i4 + 1] << 8)) / 65535;
        const fz = (means[0][i4 + 2] + (means[1][i4 + 2] << 8)) / 65535;
        let x2 = json.means.mins[0] + (json.means.maxs[0] - json.means.mins[0]) * fx;
        let y = json.means.mins[1] + (json.means.maxs[1] - json.means.mins[1]) * fy;
        let z = json.means.mins[2] + (json.means.maxs[2] - json.means.mins[2]) * fz;
        x2 = Math.sign(x2) * (Math.exp(Math.abs(x2)) - 1);
        y = Math.sign(y) * (Math.exp(Math.abs(y)) - 1);
        z = Math.sign(z) * (Math.exp(Math.abs(z)) - 1);
        setPackedSplatCenter(packedArray, i2, x2, y, z);
      }
    });
    const scalesPromise = decodeImageRgba(extraFiles[json.scales.files[0]]).then(
      (scales) => {
        let xLookup;
        let yLookup;
        let zLookup;
        if (isVersion2) {
          xLookup = yLookup = zLookup = json.scales.codebook.map((x2) => Math.exp(x2));
        } else {
          xLookup = new Array(256).fill(0).map(
            (_, i2) => json.scales.mins[0] + (json.scales.maxs[0] - json.scales.mins[0]) * (i2 / 255)
          ).map((x2) => Math.exp(x2));
          yLookup = new Array(256).fill(0).map(
            (_, i2) => json.scales.mins[1] + (json.scales.maxs[1] - json.scales.mins[1]) * (i2 / 255)
          ).map((x2) => Math.exp(x2));
          zLookup = new Array(256).fill(0).map(
            (_, i2) => json.scales.mins[2] + (json.scales.maxs[2] - json.scales.mins[2]) * (i2 / 255)
          ).map((x2) => Math.exp(x2));
        }
        for (let i2 = 0; i2 < numSplats; ++i2) {
          const i4 = i2 * 4;
          setPackedSplatScales(
            packedArray,
            i2,
            xLookup[scales[i4 + 0]],
            yLookup[scales[i4 + 1]],
            zLookup[scales[i4 + 2]],
            splatEncoding
          );
        }
      }
    );
    const quatsPromise = decodeImageRgba(extraFiles[json.quats.files[0]]).then(
      (quats) => {
        const SQRT2 = Math.sqrt(2);
        const lookup = new Array(256).fill(0).map((_, i2) => (i2 / 255 - 0.5) * SQRT2);
        for (let i2 = 0; i2 < numSplats; ++i2) {
          const i4 = i2 * 4;
          const r0 = lookup[quats[i4 + 0]];
          const r1 = lookup[quats[i4 + 1]];
          const r2 = lookup[quats[i4 + 2]];
          const rr = Math.sqrt(Math.max(0, 1 - r0 * r0 - r1 * r1 - r2 * r2));
          const rOrder = quats[i4 + 3] - 252;
          const quatX = rOrder === 0 ? r0 : rOrder === 1 ? rr : r1;
          const quatY = rOrder <= 1 ? r1 : rOrder === 2 ? rr : r2;
          const quatZ = rOrder <= 2 ? r2 : rr;
          const quatW = rOrder === 0 ? rr : r0;
          setPackedSplatQuat(packedArray, i2, quatX, quatY, quatZ, quatW);
        }
      }
    );
    const sh0Promise = decodeImageRgba(extraFiles[json.sh0.files[0]]).then(
      (sh0) => {
        const SH_C02 = 0.28209479177387814;
        let rLookup;
        let gLookup;
        let bLookup;
        let aLookup;
        if (isVersion2) {
          rLookup = gLookup = bLookup = json.sh0.codebook.map((x2) => SH_C02 * x2 + 0.5);
          aLookup = new Array(256).fill(0).map((_, i2) => i2 / 255);
        } else {
          rLookup = new Array(256).fill(0).map(
            (_, i2) => json.sh0.mins[0] + (json.sh0.maxs[0] - json.sh0.mins[0]) * (i2 / 255)
          ).map((x2) => SH_C02 * x2 + 0.5);
          gLookup = new Array(256).fill(0).map(
            (_, i2) => json.sh0.mins[1] + (json.sh0.maxs[1] - json.sh0.mins[1]) * (i2 / 255)
          ).map((x2) => SH_C02 * x2 + 0.5);
          bLookup = new Array(256).fill(0).map(
            (_, i2) => json.sh0.mins[2] + (json.sh0.maxs[2] - json.sh0.mins[2]) * (i2 / 255)
          ).map((x2) => SH_C02 * x2 + 0.5);
          aLookup = new Array(256).fill(0).map(
            (_, i2) => json.sh0.mins[3] + (json.sh0.maxs[3] - json.sh0.mins[3]) * (i2 / 255)
          ).map((x2) => 1 / (1 + Math.exp(-x2)));
        }
        for (let i2 = 0; i2 < numSplats; ++i2) {
          const i4 = i2 * 4;
          setPackedSplatRgba(
            packedArray,
            i2,
            rLookup[sh0[i4 + 0]],
            gLookup[sh0[i4 + 1]],
            bLookup[sh0[i4 + 2]],
            aLookup[sh0[i4 + 3]],
            splatEncoding
          );
        }
      }
    );
    const promises = [meansPromise, scalesPromise, quatsPromise, sh0Promise];
    if (json.shN) {
      const useSH3 = isVersion2 ? json.shN.bands >= 3 : json.shN.shape[1] >= 48 - 3;
      const useSH2 = isVersion2 ? json.shN.bands >= 2 : json.shN.shape[1] >= 27 - 3;
      const useSH1 = isVersion2 ? json.shN.bands >= 1 : json.shN.shape[1] >= 12 - 3;
      if (useSH1) extra.sh1 = new Uint32Array(numSplats * 2);
      if (useSH2) extra.sh2 = new Uint32Array(numSplats * 4);
      if (useSH3) extra.sh3 = new Uint32Array(numSplats * 4);
      const sh1 = new Float32Array(9);
      const sh2 = new Float32Array(15);
      const sh3 = new Float32Array(21);
      const shN = json.shN;
      const shNPromise = Promise.all([
        decodeImage(extraFiles[json.shN.files[0]]),
        decodeImage(extraFiles[json.shN.files[1]])
      ]).then(([centroids, labels]) => {
        const lookup = "codebook" in shN ? shN.codebook : new Array(256).fill(0).map((_, i2) => shN.mins + (shN.maxs - shN.mins) * (i2 / 255));
        for (let i2 = 0; i2 < numSplats; ++i2) {
          const i4 = i2 * 4;
          const label = labels.rgba[i4 + 0] + (labels.rgba[i4 + 1] << 8);
          const col = (label & 63) * 15;
          const row = label >>> 6;
          const offset = row * centroids.width + col;
          for (let d = 0; d < 3; ++d) {
            if (useSH1) {
              for (let k = 0; k < 3; ++k) {
                sh1[k * 3 + d] = lookup[centroids.rgba[(offset + k) * 4 + d]];
              }
            }
            if (useSH2) {
              for (let k = 0; k < 5; ++k) {
                sh2[k * 3 + d] = lookup[centroids.rgba[(offset + 3 + k) * 4 + d]];
              }
            }
            if (useSH3) {
              for (let k = 0; k < 7; ++k) {
                sh3[k * 3 + d] = lookup[centroids.rgba[(offset + 8 + k) * 4 + d]];
              }
            }
          }
          if (useSH1)
            encodeSh1Rgb(extra.sh1, i2, sh1, splatEncoding);
          if (useSH2)
            encodeSh2Rgb(extra.sh2, i2, sh2, splatEncoding);
          if (useSH3)
            encodeSh3Rgb(extra.sh3, i2, sh3, splatEncoding);
        }
      });
      promises.push(shNPromise);
    }
    await Promise.all(promises);
    return { packedArray, numSplats, extra };
  }
  let offscreenGlContext = null;
  async function decodeImage(fileBytes) {
    if (!offscreenGlContext) {
      const canvas = new OffscreenCanvas(1, 1);
      offscreenGlContext = canvas.getContext("webgl2");
      if (!offscreenGlContext) {
        throw new Error("Failed to create WebGL2 context");
      }
    }
    const imageBlob = new Blob([fileBytes]);
    const bitmap = await createImageBitmap(imageBlob, {
      premultiplyAlpha: "none"
    });
    const gl = offscreenGlContext;
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmap);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    const framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      texture,
      0
    );
    const data = new Uint8Array(bitmap.width * bitmap.height * 4);
    gl.readPixels(
      0,
      0,
      bitmap.width,
      bitmap.height,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      data
    );
    gl.deleteTexture(texture);
    gl.deleteFramebuffer(framebuffer);
    return { rgba: data, width: bitmap.width, height: bitmap.height };
  }
  async function decodeImageRgba(fileBytes) {
    const { rgba } = await decodeImage(fileBytes);
    return rgba;
  }
  async function unpackPcSogsZip(fileBytes, splatEncoding) {
    var _a2;
    const nameJson = tryPcSogsZip(fileBytes);
    if (!nameJson) {
      throw new Error("Invalid PC SOGS zip file");
    }
    const { name, json } = nameJson;
    const lastSlash = name.lastIndexOf("/");
    const lastBackslash = name.lastIndexOf("\\\\");
    const prefix = name.slice(0, Math.max(lastSlash, lastBackslash) + 1);
    const fileMap = /* @__PURE__ */ new Map();
    const refFiles = [
      ...json.means.files,
      ...json.scales.files,
      ...json.quats.files,
      ...json.sh0.files,
      ...((_a2 = json.shN) == null ? void 0 : _a2.files) ?? []
    ];
    for (const file of refFiles) {
      fileMap.set(prefix + file, file);
    }
    const unzipped = await new Promise(
      (resolve, reject) => {
        unzip(
          fileBytes,
          {
            filter: ({ name: name2 }) => {
              return fileMap.has(name2);
            }
          },
          (err2, files) => {
            if (err2) {
              reject(err2);
            } else {
              resolve(files);
            }
          }
        );
      }
    );
    const extraFiles = {};
    for (const [full, name2] of fileMap.entries()) {
      extraFiles[name2] = unzipped[full];
    }
    return await unpackPcSogs(json, extraFiles, splatEncoding);
  }
  class SpzReader {
    constructor({ fileBytes }) {
      this.version = -1;
      this.numSplats = 0;
      this.shDegree = 0;
      this.fractionalBits = 0;
      this.flags = 0;
      this.flagAntiAlias = false;
      this.reserved = 0;
      this.headerParsed = false;
      this.parsed = false;
      this.fileBytes = fileBytes instanceof ArrayBuffer ? new Uint8Array(fileBytes) : fileBytes;
      this.reader = new GunzipReader({ fileBytes: this.fileBytes });
    }
    async parseHeader() {
      if (this.headerParsed) {
        throw new Error("SPZ file header already parsed");
      }
      const header = new DataView((await this.reader.read(16)).buffer);
      if (header.getUint32(0, true) !== 1347635022) {
        throw new Error("Invalid SPZ file");
      }
      this.version = header.getUint32(4, true);
      if (this.version < 1 || this.version > 3) {
        throw new Error(\`Unsupported SPZ version: \${this.version}\`);
      }
      this.numSplats = header.getUint32(8, true);
      this.shDegree = header.getUint8(12);
      this.fractionalBits = header.getUint8(13);
      this.flags = header.getUint8(14);
      this.flagAntiAlias = (this.flags & 1) !== 0;
      this.reserved = header.getUint8(15);
      this.headerParsed = true;
      this.parsed = false;
    }
    async parseSplats(centerCallback, alphaCallback, rgbCallback, scalesCallback, quatCallback, shCallback) {
      if (!this.headerParsed) {
        throw new Error("SPZ file header must be parsed first");
      }
      if (this.parsed) {
        throw new Error("SPZ file already parsed");
      }
      this.parsed = true;
      if (this.version === 1) {
        const centerBytes = await this.reader.read(this.numSplats * 3 * 2);
        const centerUint16 = new Uint16Array(centerBytes.buffer);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 3;
          const x2 = fromHalf(centerUint16[i3]);
          const y = fromHalf(centerUint16[i3 + 1]);
          const z = fromHalf(centerUint16[i3 + 2]);
          centerCallback == null ? void 0 : centerCallback(i2, x2, y, z);
        }
      } else if (this.version === 2 || this.version === 3) {
        const fixed = 1 << this.fractionalBits;
        const centerBytes = await this.reader.read(this.numSplats * 3 * 3);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i9 = i2 * 9;
          const x2 = ((centerBytes[i9 + 2] << 24 | centerBytes[i9 + 1] << 16 | centerBytes[i9] << 8) >> 8) / fixed;
          const y = ((centerBytes[i9 + 5] << 24 | centerBytes[i9 + 4] << 16 | centerBytes[i9 + 3] << 8) >> 8) / fixed;
          const z = ((centerBytes[i9 + 8] << 24 | centerBytes[i9 + 7] << 16 | centerBytes[i9 + 6] << 8) >> 8) / fixed;
          centerCallback == null ? void 0 : centerCallback(i2, x2, y, z);
        }
      } else {
        throw new Error("Unreachable");
      }
      {
        const bytes = await this.reader.read(this.numSplats);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          alphaCallback == null ? void 0 : alphaCallback(i2, bytes[i2] / 255);
        }
      }
      {
        const rgbBytes = await this.reader.read(this.numSplats * 3);
        const scale = SH_C0 / 0.15;
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 3;
          const r = (rgbBytes[i3] / 255 - 0.5) * scale + 0.5;
          const g = (rgbBytes[i3 + 1] / 255 - 0.5) * scale + 0.5;
          const b = (rgbBytes[i3 + 2] / 255 - 0.5) * scale + 0.5;
          rgbCallback == null ? void 0 : rgbCallback(i2, r, g, b);
        }
      }
      {
        const scalesBytes = await this.reader.read(this.numSplats * 3);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 3;
          const scaleX = Math.exp(scalesBytes[i3] / 16 - 10);
          const scaleY = Math.exp(scalesBytes[i3 + 1] / 16 - 10);
          const scaleZ = Math.exp(scalesBytes[i3 + 2] / 16 - 10);
          scalesCallback == null ? void 0 : scalesCallback(i2, scaleX, scaleY, scaleZ);
        }
      }
      if (this.version === 3) {
        const maxValue = 1 / Math.sqrt(2);
        const quatBytes = await this.reader.read(this.numSplats * 4);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 4;
          const quaternion = [0, 0, 0, 0];
          const values = [
            quatBytes[i3],
            quatBytes[i3 + 1],
            quatBytes[i3 + 2],
            quatBytes[i3 + 3]
          ];
          const combinedValues = values[0] + (values[1] << 8) + (values[2] << 16) + (values[3] << 24);
          const valueMask = (1 << 9) - 1;
          const largestIndex = combinedValues >>> 30;
          let remainingValues = combinedValues;
          let sumSquares = 0;
          for (let i22 = 3; i22 >= 0; --i22) {
            if (i22 !== largestIndex) {
              const value = remainingValues & valueMask;
              const sign = remainingValues >>> 9 & 1;
              remainingValues = remainingValues >>> 10;
              quaternion[i22] = maxValue * (value / valueMask);
              quaternion[i22] = sign === 0 ? quaternion[i22] : -quaternion[i22];
              sumSquares += quaternion[i22] * quaternion[i22];
            }
          }
          const square = 1 - sumSquares;
          quaternion[largestIndex] = Math.sqrt(Math.max(square, 0));
          quatCallback == null ? void 0 : quatCallback(
            i2,
            quaternion[0],
            quaternion[1],
            quaternion[2],
            quaternion[3]
          );
        }
      } else {
        const quatBytes = await this.reader.read(this.numSplats * 3);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 3;
          const quatX = quatBytes[i3] / 127.5 - 1;
          const quatY = quatBytes[i3 + 1] / 127.5 - 1;
          const quatZ = quatBytes[i3 + 2] / 127.5 - 1;
          const quatW = Math.sqrt(
            Math.max(0, 1 - quatX * quatX - quatY * quatY - quatZ * quatZ)
          );
          quatCallback == null ? void 0 : quatCallback(i2, quatX, quatY, quatZ, quatW);
        }
      }
      if (shCallback && this.shDegree >= 1) {
        const sh1 = new Float32Array(3 * 3);
        const sh2 = this.shDegree >= 2 ? new Float32Array(5 * 3) : void 0;
        const sh3 = this.shDegree >= 3 ? new Float32Array(7 * 3) : void 0;
        const shBytes = await this.reader.read(
          this.numSplats * SH_DEGREE_TO_VECS[this.shDegree] * 3
        );
        let offset = 0;
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          for (let j = 0; j < 9; ++j) {
            sh1[j] = (shBytes[offset + j] - 128) / 128;
          }
          offset += 9;
          if (sh2) {
            for (let j = 0; j < 15; ++j) {
              sh2[j] = (shBytes[offset + j] - 128) / 128;
            }
            offset += 15;
          }
          if (sh3) {
            for (let j = 0; j < 21; ++j) {
              sh3[j] = (shBytes[offset + j] - 128) / 128;
            }
            offset += 21;
          }
          shCallback == null ? void 0 : shCallback(i2, sh1, sh2, sh3);
        }
      }
    }
  }
  const SH_DEGREE_TO_VECS = { 1: 3, 2: 8, 3: 15 };
  const SH_C0 = 0.28209479177387814;
  const SPZ_MAGIC = 1347635022;
  const SPZ_VERSION = 3;
  const FLAG_ANTIALIASED = 1;
  class SpzWriter {
    constructor({
      numSplats,
      shDegree,
      fractionalBits = 12,
      flagAntiAlias = true
    }) {
      this.clippedCount = 0;
      const splatSize = 9 + // Position
      1 + // Opacity
      3 + // Scale
      3 + // DC-rgb
      4 + // Rotation
      (shDegree >= 1 ? 9 : 0) + (shDegree >= 2 ? 15 : 0) + (shDegree >= 3 ? 21 : 0);
      const bufferSize = 16 + numSplats * splatSize;
      this.buffer = new ArrayBuffer(bufferSize);
      this.view = new DataView(this.buffer);
      this.view.setUint32(0, SPZ_MAGIC, true);
      this.view.setUint32(4, SPZ_VERSION, true);
      this.view.setUint32(8, numSplats, true);
      this.view.setUint8(12, shDegree);
      this.view.setUint8(13, fractionalBits);
      this.view.setUint8(14, flagAntiAlias ? FLAG_ANTIALIASED : 0);
      this.view.setUint8(15, 0);
      this.numSplats = numSplats;
      this.shDegree = shDegree;
      this.fractionalBits = fractionalBits;
      this.fraction = 1 << fractionalBits;
      this.flagAntiAlias = flagAntiAlias;
    }
    setCenter(index, x2, y, z) {
      const xRounded = Math.round(x2 * this.fraction);
      const xInt = Math.max(-8388607, Math.min(8388607, xRounded));
      const yRounded = Math.round(y * this.fraction);
      const yInt = Math.max(-8388607, Math.min(8388607, yRounded));
      const zRounded = Math.round(z * this.fraction);
      const zInt = Math.max(-8388607, Math.min(8388607, zRounded));
      const clipped = xRounded !== xInt || yRounded !== yInt || zRounded !== zInt;
      if (clipped) {
        this.clippedCount += 1;
      }
      const i9 = index * 9;
      const base = 16 + i9;
      this.view.setUint8(base, xInt & 255);
      this.view.setUint8(base + 1, xInt >> 8 & 255);
      this.view.setUint8(base + 2, xInt >> 16 & 255);
      this.view.setUint8(base + 3, yInt & 255);
      this.view.setUint8(base + 4, yInt >> 8 & 255);
      this.view.setUint8(base + 5, yInt >> 16 & 255);
      this.view.setUint8(base + 6, zInt & 255);
      this.view.setUint8(base + 7, zInt >> 8 & 255);
      this.view.setUint8(base + 8, zInt >> 16 & 255);
    }
    setAlpha(index, alpha) {
      const base = 16 + this.numSplats * 9 + index;
      this.view.setUint8(
        base,
        Math.max(0, Math.min(255, Math.round(alpha * 255)))
      );
    }
    static scaleRgb(r) {
      const v = ((r - 0.5) / (SH_C0 / 0.15) + 0.5) * 255;
      return Math.max(0, Math.min(255, Math.round(v)));
    }
    setRgb(index, r, g, b) {
      const base = 16 + this.numSplats * 10 + index * 3;
      this.view.setUint8(base, SpzWriter.scaleRgb(r));
      this.view.setUint8(base + 1, SpzWriter.scaleRgb(g));
      this.view.setUint8(base + 2, SpzWriter.scaleRgb(b));
    }
    setScale(index, scaleX, scaleY, scaleZ) {
      const base = 16 + this.numSplats * 13 + index * 3;
      this.view.setUint8(
        base,
        Math.max(0, Math.min(255, Math.round((Math.log(scaleX) + 10) * 16)))
      );
      this.view.setUint8(
        base + 1,
        Math.max(0, Math.min(255, Math.round((Math.log(scaleY) + 10) * 16)))
      );
      this.view.setUint8(
        base + 2,
        Math.max(0, Math.min(255, Math.round((Math.log(scaleZ) + 10) * 16)))
      );
    }
    setQuat(index, ...q) {
      const base = 16 + this.numSplats * 16 + index * 4;
      const quat = normalize(q);
      let iLargest = 0;
      for (let i2 = 1; i2 < 4; ++i2) {
        if (Math.abs(quat[i2]) > Math.abs(quat[iLargest])) {
          iLargest = i2;
        }
      }
      const negate = quat[iLargest] < 0 ? 1 : 0;
      let comp = iLargest;
      for (let i2 = 0; i2 < 4; ++i2) {
        if (i2 !== iLargest) {
          const negbit = (quat[i2] < 0 ? 1 : 0) ^ negate;
          const mag = Math.floor(
            ((1 << 9) - 1) * (Math.abs(quat[i2]) / Math.SQRT1_2) + 0.5
          );
          comp = comp << 10 | negbit << 9 | mag;
        }
      }
      this.view.setUint8(base, comp & 255);
      this.view.setUint8(base + 1, comp >> 8 & 255);
      this.view.setUint8(base + 2, comp >> 16 & 255);
      this.view.setUint8(base + 3, comp >>> 24 & 255);
    }
    static quantizeSh(sh, bits2) {
      const value = Math.round(sh * 128) + 128;
      const bucketSize = 1 << 8 - bits2;
      const quantized = Math.floor((value + bucketSize / 2) / bucketSize) * bucketSize;
      return Math.max(0, Math.min(255, quantized));
    }
    setSh(index, sh1, sh2, sh3) {
      const shVecs = SH_DEGREE_TO_VECS[this.shDegree] || 0;
      const base1 = 16 + this.numSplats * 20 + index * shVecs * 3;
      for (let j = 0; j < 9; ++j) {
        this.view.setUint8(base1 + j, SpzWriter.quantizeSh(sh1[j], 5));
      }
      if (sh2) {
        const base2 = base1 + 9;
        for (let j = 0; j < 15; ++j) {
          this.view.setUint8(base2 + j, SpzWriter.quantizeSh(sh2[j], 4));
        }
        if (sh3) {
          const base3 = base2 + 15;
          for (let j = 0; j < 21; ++j) {
            this.view.setUint8(base3 + j, SpzWriter.quantizeSh(sh3[j], 4));
          }
        }
      }
    }
    async finalize() {
      const input = new Uint8Array(this.buffer);
      const stream = new ReadableStream({
        async start(controller) {
          controller.enqueue(input);
          controller.close();
        }
      });
      const compressed = stream.pipeThrough(new CompressionStream("gzip"));
      const response = new Response(compressed);
      const buffer = await response.arrayBuffer();
      console.log(
        "Compressed",
        input.length,
        "bytes to",
        buffer.byteLength,
        "bytes"
      );
      return new Uint8Array(buffer);
    }
  }
  async function transcodeSpz(input) {
    var _a2, _b2, _c;
    const splats = new SplatData();
    const {
      inputs,
      clipXyz,
      maxSh,
      fractionalBits = 12,
      opacityThreshold
    } = input;
    for (const input2 of inputs) {
      let transformPos = function(pos) {
        pos.multiplyScalar(scale);
        pos.applyQuaternion(quaternion);
        pos.add(translate);
        return pos;
      }, transformScales = function(scales) {
        scales.multiplyScalar(scale);
        return scales;
      }, transformQuaternion = function(quat) {
        quat.premultiply(quaternion);
        return quat;
      }, withinClip = function(p) {
        return !clip || clip.containsPoint(p);
      }, withinOpacity = function(opacity) {
        return opacityThreshold !== void 0 ? opacity >= opacityThreshold : true;
      };
      const scale = ((_a2 = input2.transform) == null ? void 0 : _a2.scale) ?? 1;
      const quaternion = new Quaternion().fromArray(
        ((_b2 = input2.transform) == null ? void 0 : _b2.quaternion) ?? [0, 0, 0, 1]
      );
      const translate = new Vector3().fromArray(
        ((_c = input2.transform) == null ? void 0 : _c.translate) ?? [0, 0, 0]
      );
      const clip = clipXyz ? new Box3(
        new Vector3().fromArray(clipXyz.min),
        new Vector3().fromArray(clipXyz.max)
      ) : void 0;
      let fileType = input2.fileType;
      if (!fileType) {
        fileType = getSplatFileType(input2.fileBytes);
        if (!fileType && input2.pathOrUrl) {
          fileType = getSplatFileTypeFromPath(input2.pathOrUrl);
        }
      }
      switch (fileType) {
        case SplatFileType.PLY: {
          const ply = new PlyReader({ fileBytes: input2.fileBytes });
          await ply.parseHeader();
          let lastIndex = null;
          ply.parseSplats(
            (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
              const center = transformPos(new Vector3(x2, y, z));
              if (withinClip(center) && withinOpacity(opacity)) {
                lastIndex = splats.pushSplat();
                splats.setCenter(lastIndex, center.x, center.y, center.z);
                const scales = transformScales(
                  new Vector3(scaleX, scaleY, scaleZ)
                );
                splats.setScale(lastIndex, scales.x, scales.y, scales.z);
                const quaternion2 = transformQuaternion(
                  new Quaternion(quatX, quatY, quatZ, quatW)
                );
                splats.setQuaternion(
                  lastIndex,
                  quaternion2.x,
                  quaternion2.y,
                  quaternion2.z,
                  quaternion2.w
                );
                splats.setOpacity(lastIndex, opacity);
                splats.setColor(lastIndex, r, g, b);
              } else {
                lastIndex = null;
              }
            },
            (index, sh1, sh2, sh3) => {
              if (sh1 && lastIndex !== null) {
                splats.setSh1(lastIndex, sh1);
              }
              if (sh2 && lastIndex !== null) {
                splats.setSh2(lastIndex, sh2);
              }
              if (sh3 && lastIndex !== null) {
                splats.setSh3(lastIndex, sh3);
              }
            }
          );
          break;
        }
        case SplatFileType.SPZ: {
          const spz2 = new SpzReader({ fileBytes: input2.fileBytes });
          await spz2.parseHeader();
          const mapping = new Int32Array(spz2.numSplats);
          mapping.fill(-1);
          const centers = new Float32Array(spz2.numSplats * 3);
          const center = new Vector3();
          spz2.parseSplats(
            (index, x2, y, z) => {
              const center2 = transformPos(new Vector3(x2, y, z));
              centers[index * 3] = center2.x;
              centers[index * 3 + 1] = center2.y;
              centers[index * 3 + 2] = center2.z;
            },
            (index, alpha) => {
              center.fromArray(centers, index * 3);
              if (withinClip(center) && withinOpacity(alpha)) {
                mapping[index] = splats.pushSplat();
                splats.setCenter(mapping[index], center.x, center.y, center.z);
                splats.setOpacity(mapping[index], alpha);
              }
            },
            (index, r, g, b) => {
              if (mapping[index] >= 0) {
                splats.setColor(mapping[index], r, g, b);
              }
            },
            (index, scaleX, scaleY, scaleZ) => {
              if (mapping[index] >= 0) {
                const scales = transformScales(
                  new Vector3(scaleX, scaleY, scaleZ)
                );
                splats.setScale(mapping[index], scales.x, scales.y, scales.z);
              }
            },
            (index, quatX, quatY, quatZ, quatW) => {
              if (mapping[index] >= 0) {
                const quaternion2 = transformQuaternion(
                  new Quaternion(quatX, quatY, quatZ, quatW)
                );
                splats.setQuaternion(
                  mapping[index],
                  quaternion2.x,
                  quaternion2.y,
                  quaternion2.z,
                  quaternion2.w
                );
              }
            },
            (index, sh1, sh2, sh3) => {
              if (mapping[index] >= 0) {
                splats.setSh1(mapping[index], sh1);
                if (sh2) {
                  splats.setSh2(mapping[index], sh2);
                }
                if (sh3) {
                  splats.setSh3(mapping[index], sh3);
                }
              }
            }
          );
          break;
        }
        case SplatFileType.SPLAT:
          decodeAntiSplat(
            input2.fileBytes,
            (numSplats) => {
            },
            (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
              const center = transformPos(new Vector3(x2, y, z));
              if (withinClip(center) && withinOpacity(opacity)) {
                const index2 = splats.pushSplat();
                splats.setCenter(index2, center.x, center.y, center.z);
                const scales = transformScales(
                  new Vector3(scaleX, scaleY, scaleZ)
                );
                splats.setScale(index2, scales.x, scales.y, scales.z);
                const quaternion2 = transformQuaternion(
                  new Quaternion(quatX, quatY, quatZ, quatW)
                );
                splats.setQuaternion(
                  index2,
                  quaternion2.x,
                  quaternion2.y,
                  quaternion2.z,
                  quaternion2.w
                );
                splats.setOpacity(index2, opacity);
                splats.setColor(index2, r, g, b);
              }
            }
          );
          break;
        case SplatFileType.KSPLAT: {
          let lastIndex = null;
          decodeKsplat(
            input2.fileBytes,
            (numSplats) => {
            },
            (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
              const center = transformPos(new Vector3(x2, y, z));
              if (withinClip(center) && withinOpacity(opacity)) {
                lastIndex = splats.pushSplat();
                splats.setCenter(lastIndex, center.x, center.y, center.z);
                const scales = transformScales(
                  new Vector3(scaleX, scaleY, scaleZ)
                );
                splats.setScale(lastIndex, scales.x, scales.y, scales.z);
                const quaternion2 = transformQuaternion(
                  new Quaternion(quatX, quatY, quatZ, quatW)
                );
                splats.setQuaternion(
                  lastIndex,
                  quaternion2.x,
                  quaternion2.y,
                  quaternion2.z,
                  quaternion2.w
                );
                splats.setOpacity(lastIndex, opacity);
                splats.setColor(lastIndex, r, g, b);
              } else {
                lastIndex = null;
              }
            },
            (index, sh1, sh2, sh3) => {
              if (lastIndex !== null) {
                splats.setSh1(lastIndex, sh1);
                if (sh2) {
                  splats.setSh2(lastIndex, sh2);
                }
                if (sh3) {
                  splats.setSh3(lastIndex, sh3);
                }
              }
            }
          );
          break;
        }
        default:
          throw new Error(\`transcodeSpz not implemented for \${fileType}\`);
      }
    }
    const shDegree = Math.min(
      maxSh ?? 3,
      splats.sh3 ? 3 : splats.sh2 ? 2 : splats.sh1 ? 1 : 0
    );
    const spz = new SpzWriter({
      numSplats: splats.numSplats,
      shDegree,
      fractionalBits,
      flagAntiAlias: true
    });
    for (let i2 = 0; i2 < splats.numSplats; ++i2) {
      const i3 = i2 * 3;
      const i4 = i2 * 4;
      spz.setCenter(
        i2,
        splats.centers[i3],
        splats.centers[i3 + 1],
        splats.centers[i3 + 2]
      );
      spz.setScale(
        i2,
        splats.scales[i3],
        splats.scales[i3 + 1],
        splats.scales[i3 + 2]
      );
      spz.setQuat(
        i2,
        splats.quaternions[i4],
        splats.quaternions[i4 + 1],
        splats.quaternions[i4 + 2],
        splats.quaternions[i4 + 3]
      );
      spz.setAlpha(i2, splats.opacities[i2]);
      spz.setRgb(
        i2,
        splats.colors[i3],
        splats.colors[i3 + 1],
        splats.colors[i3 + 2]
      );
      if (splats.sh1 && shDegree >= 1) {
        spz.setSh(
          i2,
          splats.sh1.slice(i2 * 9, (i2 + 1) * 9),
          shDegree >= 2 && splats.sh2 ? splats.sh2.slice(i2 * 15, (i2 + 1) * 15) : void 0,
          shDegree >= 3 && splats.sh3 ? splats.sh3.slice(i2 * 21, (i2 + 1) * 21) : void 0
        );
      }
    }
    const spzBytes = await spz.finalize();
    return { fileBytes: spzBytes, clippedCount: spz.clippedCount };
  }
  async function onMessage(event) {
    const { name, args, id } = event.data;
    let result = void 0;
    let error = void 0;
    try {
      switch (name) {
        case "unpackPly": {
          const { packedArray, fileBytes, splatEncoding } = args;
          const decoded = await unpackPly({
            packedArray,
            fileBytes,
            splatEncoding
          });
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "decodeSpz": {
          const { fileBytes, splatEncoding } = args;
          const decoded = await unpackSpz(fileBytes, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "decodeAntiSplat": {
          const { fileBytes, splatEncoding } = args;
          const decoded = unpackAntiSplat(fileBytes, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray
          };
          break;
        }
        case "decodeKsplat": {
          const { fileBytes, splatEncoding } = args;
          const decoded = unpackKsplat(fileBytes, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "decodePcSogs": {
          const { fileBytes, extraFiles, splatEncoding } = args;
          const json = JSON.parse(
            new TextDecoder().decode(fileBytes)
          );
          const decoded = await unpackPcSogs(json, extraFiles, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "decodePcSogsZip": {
          const { fileBytes, splatEncoding } = args;
          const decoded = await unpackPcSogsZip(fileBytes, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "sortSplats": {
          const { totalSplats, readback, ordering } = args;
          result = {
            id,
            readback,
            ...sortSplats({ totalSplats, readback, ordering })
          };
          break;
        }
        case "sortDoubleSplats": {
          const { numSplats, readback, ordering } = args;
          {
            result = {
              id,
              readback,
              ordering,
              activeSplats: sort_splats(numSplats, readback, ordering)
            };
          }
          break;
        }
        case "sort32Splats": {
          const { numSplats, readback, ordering } = args;
          {
            result = {
              id,
              readback,
              ordering,
              activeSplats: sort32_splats(numSplats, readback, ordering)
            };
          }
          break;
        }
        case "transcodeSpz": {
          const input = args;
          const spzBytes = await transcodeSpz(input);
          result = {
            id,
            fileBytes: spzBytes,
            input
          };
          break;
        }
        default: {
          throw new Error(\`Unknown name: \${name}\`);
        }
      }
    } catch (e) {
      error = e;
      console.error(error);
    }
    self.postMessage(
      { id, result, error },
      { transfer: getArrayBuffers(result) }
    );
  }
  async function unpackPly({
    packedArray,
    fileBytes,
    splatEncoding
  }) {
    const ply = new PlyReader({ fileBytes });
    await ply.parseHeader();
    const numSplats = ply.numSplats;
    const extra = {};
    ply.parseSplats(
      (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
        setPackedSplat(
          packedArray,
          index,
          x2,
          y,
          z,
          scaleX,
          scaleY,
          scaleZ,
          quatX,
          quatY,
          quatZ,
          quatW,
          opacity,
          r,
          g,
          b,
          splatEncoding
        );
      },
      (index, sh1, sh2, sh3) => {
        if (sh1) {
          if (!extra.sh1) {
            extra.sh1 = new Uint32Array(numSplats * 2);
          }
          encodeSh1Rgb(extra.sh1, index, sh1, splatEncoding);
        }
        if (sh2) {
          if (!extra.sh2) {
            extra.sh2 = new Uint32Array(numSplats * 4);
          }
          encodeSh2Rgb(extra.sh2, index, sh2, splatEncoding);
        }
        if (sh3) {
          if (!extra.sh3) {
            extra.sh3 = new Uint32Array(numSplats * 4);
          }
          encodeSh3Rgb(extra.sh3, index, sh3, splatEncoding);
        }
      }
    );
    return { packedArray, numSplats, extra };
  }
  async function unpackSpz(fileBytes, splatEncoding) {
    const spz = new SpzReader({ fileBytes });
    await spz.parseHeader();
    const numSplats = spz.numSplats;
    const maxSplats = computeMaxSplats(numSplats);
    const packedArray = new Uint32Array(maxSplats * 4);
    const extra = {};
    await spz.parseSplats(
      (index, x2, y, z) => {
        setPackedSplatCenter(packedArray, index, x2, y, z);
      },
      (index, alpha) => {
        setPackedSplatOpacity(packedArray, index, alpha);
      },
      (index, r, g, b) => {
        setPackedSplatRgb(packedArray, index, r, g, b, splatEncoding);
      },
      (index, scaleX, scaleY, scaleZ) => {
        setPackedSplatScales(
          packedArray,
          index,
          scaleX,
          scaleY,
          scaleZ,
          splatEncoding
        );
      },
      (index, quatX, quatY, quatZ, quatW) => {
        setPackedSplatQuat(packedArray, index, quatX, quatY, quatZ, quatW);
      },
      (index, sh1, sh2, sh3) => {
        if (sh1) {
          if (!extra.sh1) {
            extra.sh1 = new Uint32Array(numSplats * 2);
          }
          encodeSh1Rgb(extra.sh1, index, sh1, splatEncoding);
        }
        if (sh2) {
          if (!extra.sh2) {
            extra.sh2 = new Uint32Array(numSplats * 4);
          }
          encodeSh2Rgb(extra.sh2, index, sh2, splatEncoding);
        }
        if (sh3) {
          if (!extra.sh3) {
            extra.sh3 = new Uint32Array(numSplats * 4);
          }
          encodeSh3Rgb(extra.sh3, index, sh3, splatEncoding);
        }
      }
    );
    return { packedArray, numSplats, extra };
  }
  const DEPTH_INFINITY_F16 = 31744;
  const DEPTH_SIZE_16 = DEPTH_INFINITY_F16 + 1;
  let depthArray16 = null;
  function sortSplats({
    totalSplats,
    readback,
    ordering
  }) {
    if (!depthArray16) {
      depthArray16 = new Uint32Array(DEPTH_SIZE_16);
    }
    depthArray16.fill(0);
    const readbackUint32 = readback.map((layer) => new Uint32Array(layer.buffer));
    const layerSize = readbackUint32[0].length;
    const numLayers = Math.ceil(totalSplats / layerSize);
    let layerBase = 0;
    for (let layer = 0; layer < numLayers; ++layer) {
      const readbackLayer = readbackUint32[layer];
      const layerSplats = Math.min(readbackLayer.length, totalSplats - layerBase);
      for (let i2 = 0; i2 < layerSplats; ++i2) {
        const pri = readbackLayer[i2] & 32767;
        if (pri < DEPTH_INFINITY_F16) {
          depthArray16[pri] += 1;
        }
      }
      layerBase += layerSplats;
    }
    let activeSplats = 0;
    for (let j = 0; j < DEPTH_SIZE_16; ++j) {
      const nextIndex = activeSplats + depthArray16[j];
      depthArray16[j] = activeSplats;
      activeSplats = nextIndex;
    }
    layerBase = 0;
    for (let layer = 0; layer < numLayers; ++layer) {
      const readbackLayer = readbackUint32[layer];
      const layerSplats = Math.min(readbackLayer.length, totalSplats - layerBase);
      for (let i2 = 0; i2 < layerSplats; ++i2) {
        const pri = readbackLayer[i2] & 32767;
        if (pri < DEPTH_INFINITY_F16) {
          ordering[depthArray16[pri]] = layerBase + i2;
          depthArray16[pri] += 1;
        }
      }
      layerBase += layerSplats;
    }
    if (depthArray16[DEPTH_SIZE_16 - 1] !== activeSplats) {
      throw new Error(
        \`Expected \${activeSplats} active splats but got \${depthArray16[DEPTH_SIZE_16 - 1]}\`
      );
    }
    return { activeSplats, ordering };
  }
  const messageBuffer = [];
  function bufferMessage(event) {
    messageBuffer.push(event);
  }
  async function initialize() {
    self.addEventListener("message", bufferMessage);
    await __wbg_init();
    self.removeEventListener("message", bufferMessage);
    self.addEventListener("message", onMessage);
    for (const event of messageBuffer) {
      onMessage(event);
    }
    messageBuffer.length = 0;
  }
  initialize().catch(console.error);
})();
//# sourceMappingURL=worker-CaMzlx2k.js.map
`,Pl=typeof self<"u"&&self.Blob&&new Blob([ih],{type:"text/javascript;charset=utf-8"});function uC(i){let t;try{if(t=Pl&&(self.URL||self.webkitURL).createObjectURL(Pl),!t)throw"";const e=new Worker(t,{name:i?.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(ih),{name:i?.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}class dC{constructor(){this.messages={},this.messageIdNext=0,this.worker=new uC,this.worker.onmessage=t=>this.onMessage(t)}makeMessageId(){return++this.messageIdNext}makeMessagePromiseId(){const t=this.makeMessageId(),e=new Promise((n,s)=>{this.messages[t]={resolve:n,reject:s}});return{id:t,promise:e}}onMessage(t){const{id:e,result:n,error:s}=t.data,r=this.messages[e];r&&(delete this.messages[e],s?r.reject(s):r.resolve(n))}async call(t,e){const{id:n,promise:s}=this.makeMessagePromiseId();return this.worker.postMessage({name:t,args:e,id:n},{transfer:KE(e)}),s}}let sh=4,Dr=0;const rh=[],ah=[];async function fC(){const i=rh.shift();if(i)return i;if(Dr<sh){const t=new dC;return Dr+=1,t}return new Promise(t=>{ah.push(t)})}function pC(i){if(Dr>sh){Dr-=1;return}const t=ah.shift();if(t){t(i);return}rh.push(i)}async function pi(i){const t=await fC();try{return await i(t)}finally{pC(t)}}class gC extends nA{constructor(t){super(t),this.fileLoader=new qu(t)}load(t,e,n,s){const r=this.manager.resolveURL((this.path??"")+(t??"")),a=new Headers(this.requestHeader),o=this.withCredentials?"include":"same-origin",l=new Request(r,{headers:a,credentials:o});let A=this.fileType;this.manager.itemStart(r),kl(l,n).then(async h=>{var c;const d=[new ProgressEvent("progress",{lengthComputable:!0,loaded:h.byteLength,total:h.byteLength})];function p(){if(n){const u=d.every(I=>I.lengthComputable||I.loaded===0&&I.total===0),y=d.reduce((I,b)=>I+b.loaded,0),x=d.reduce((I,b)=>I+b.total,0);n(new ProgressEvent("progress",{lengthComputable:u,loaded:y,total:x}))}}const g={},m=[],f=oh(h);if(A==="pcsogs"&&f===void 0)throw new Error("Invalid PC SOGS file");if(f!==void 0){A="pcsogs";for(const u of["means","scales","quats","sh0","shN"]){const y=f[u];if(y)for(const x of y.files){const I=new URL(x,r).toString(),b=d.length;d.push(new ProgressEvent("progress")),this.manager.itemStart(I);const S=new Request(I,{headers:a,credentials:o}),w=kl(S,R=>{d[b]=R,p()}).then(R=>{g[x]=R}).catch(R=>{throw this.manager.itemError(I),R}).finally(()=>{this.manager.itemEnd(I)});m.push(w)}}}if(await Promise.all(m),e){const u=((c=this.packedSplats)==null?void 0:c.splatEncoding)??Jr,y=await Ah({input:h,extraFiles:g,fileType:A,pathOrUrl:r,splatEncoding:u});this.packedSplats?(this.packedSplats.initialize(y),e(this.packedSplats)):e(new vi(y))}}).catch(h=>{this.manager.itemError(r),s?.(h)}).finally(()=>{this.manager.itemEnd(r)})}async loadAsync(t,e){return new Promise((n,s)=>{this.load(t,r=>{n(r)},e,s)})}parse(t){return new lA({packedSplats:t})}}async function kl(i,t){const e=await fetch(i);if(!e.ok)throw new Error(`${e.status} "${e.statusText}" fetching URL: ${i.url}`);if(!e.body)throw new Error(`Response body is null for URL: ${i.url}`);const n=e.body.getReader(),s=Number.parseInt(e.headers.get("Content-Length")||"0"),r=Number.isNaN(s)?0:s;let a=0;const o=[];for(;;){const{done:h,value:c}=await n.read();if(h)break;o.push(c),a+=c.length,t&&t(new ProgressEvent("progress",{lengthComputable:r!==0,loaded:a,total:r}))}const l=new Uint8Array(a);let A=0;for(const h of o)l.set(h,A),A+=h.length;return l.buffer}function mC(i){const t=new DataView(i.buffer);if((t.getUint32(0,!0)&16777215)===7957616)return"ply";if((t.getUint32(0,!0)&16777215)===559903){const e=uI(i,4);return new DataView(e.buffer).getUint32(0,!0)===1347635022?"spz":void 0}if(t.getUint32(0,!0)===67324752)return CC(i)?"pcsogszip":void 0}function EC(i){const t=i.split(/[?#]/,1)[0],e=Math.max(t.lastIndexOf("/"),t.lastIndexOf("\\")),n=t.slice(e+1),s=n.lastIndexOf(".");return s<=0||s===n.length-1?"":n.slice(s+1).toLowerCase()}function IC(i){const t=EC(i);if(t==="ply")return"ply";if(t==="spz")return"spz";if(t==="splat")return"splat";if(t==="ksplat")return"ksplat";if(t==="sog")return"pcsogszip"}function oh(i){try{let t;if(typeof i=="string")t=i;else{const s=i instanceof ArrayBuffer?new Uint8Array(i):i;if(s.length>65536)return;t=new TextDecoder().decode(s)}const e=JSON.parse(t);if(!e||typeof e!="object"||Array.isArray(e))return;const n=e.version===2;for(const s of["means","scales","quats","sh0"]){if(!e[s]||typeof e[s]!="object"||Array.isArray(e[s]))return;if(n){if(!e[s].files||(s==="scales"||s==="sh0")&&!e[s].codebook||s==="means"&&(!e[s].mins||!e[s].maxs))return}else if(!e[s].shape||!e[s].files||s!=="quats"&&(!e[s].mins||!e[s].maxs))return}return e}catch{return}}function CC(i){try{const t=i instanceof ArrayBuffer?new Uint8Array(i):i;let e=null;const n=EE(t,{filter:({name:r})=>r.split(/[\\/]/).pop()==="meta.json"?(e=r,!0):!1});if(!e)return;const s=oh(n[e]);return s?{name:e,json:s}:void 0}catch{return}}async function Ah({input:i,extraFiles:t,fileType:e,pathOrUrl:n,splatEncoding:s}){const r=i instanceof ArrayBuffer?new Uint8Array(i):i;let a=e;switch(e||(a=mC(r),!a&&n&&(a=IC(n))),a){case"ply":{const o=new nC({fileBytes:r});await o.parseHeader();const l=o.numSplats,A=sn(l).maxSplats,h={fileBytes:r,packedArray:new Uint32Array(A*4),splatEncoding:s};return await pi(async c=>{const{packedArray:d,numSplats:p,extra:g}=await c.call("unpackPly",h);return{packedArray:d,numSplats:p,extra:g}})}case"spz":return await pi(async o=>{const{packedArray:l,numSplats:A,extra:h}=await o.call("decodeSpz",{fileBytes:r,splatEncoding:s});return{packedArray:l,numSplats:A,extra:h}});case"splat":return await pi(async o=>{const{packedArray:l,numSplats:A}=await o.call("decodeAntiSplat",{fileBytes:r,splatEncoding:s});return{packedArray:l,numSplats:A}});case"ksplat":return await pi(async o=>{const{packedArray:l,numSplats:A,extra:h}=await o.call("decodeKsplat",{fileBytes:r,splatEncoding:s});return{packedArray:l,numSplats:A,extra:h}});case"pcsogs":return await pi(async o=>{const{packedArray:l,numSplats:A,extra:h}=await o.call("decodePcSogs",{fileBytes:r,extraFiles:t,splatEncoding:s});return{packedArray:l,numSplats:A,extra:h}});case"pcsogszip":return await pi(async o=>{const{packedArray:l,numSplats:A,extra:h}=await o.call("decodePcSogsZip",{fileBytes:r,splatEncoding:s});return{packedArray:l,numSplats:A,extra:h}});default:throw new Error(`Unknown splat file type: ${a}`)}}var xC=`precision highp float;
precision highp int;
precision highp sampler2D;
precision highp usampler2D;
precision highp isampler2D;
precision highp sampler2DArray;
precision highp usampler2DArray;
precision highp isampler2DArray;
precision highp sampler3D;
precision highp usampler3D;
precision highp isampler3D;

#include <splatDefines>

uniform uint targetLayer;
uniform int targetBase;
uniform int targetCount;

out uvec4 target;

{{ GLOBALS }}

void produceSplat(int index) {
    {{ STATEMENTS }}
}

void main() {
    int targetIndex = int(targetLayer << SPLAT_TEX_LAYER_BITS) + int(uint(gl_FragCoord.y) << SPLAT_TEX_WIDTH_BITS) + int(gl_FragCoord.x);
    int index = targetIndex - targetBase;

    if ((index >= 0) && (index < targetCount)) {
        produceSplat(index);
    } else {
        target = uvec4(0u, 0u, 0u, 0u);
    }
}`;const Jr={rgbMin:0,rgbMax:1,lnScaleMin:Yn,lnScaleMax:Vn,sh1Min:-1,sh1Max:1,sh2Min:-1,sh2Max:1,sh3Min:-1,sh3Max:1},Ns=class Qe{constructor(t={}){this.maxSplats=0,this.numSplats=0,this.packedArray=null,this.isInitialized=!1,this.target=null,this.source=null,this.needsUpdate=!0,this.extra={},this.dyno=new hA({packedSplats:this}),this.dynoRgbMinMaxLnScaleMinMax=new qr({key:"rgbMinMaxLnScaleMinMax",value:new Jt(0,1,Yn,Vn),update:e=>{var n,s,r,a;return e.set(((n=this.splatEncoding)==null?void 0:n.rgbMin)??0,((s=this.splatEncoding)==null?void 0:s.rgbMax)??1,((r=this.splatEncoding)==null?void 0:r.lnScaleMin)??Yn,((a=this.splatEncoding)==null?void 0:a.lnScaleMax)??Vn),e}}),this.dynoSh1MinMax=new La({key:"sh1MinMax",value:new wt(-1,1),update:e=>{var n,s;return e.set(((n=this.splatEncoding)==null?void 0:n.sh1Min)??-1,((s=this.splatEncoding)==null?void 0:s.sh1Max)??1),e}}),this.dynoSh2MinMax=new La({key:"sh2MinMax",value:new wt(-1,1),update:e=>{var n,s;return e.set(((n=this.splatEncoding)==null?void 0:n.sh2Min)??-1,((s=this.splatEncoding)==null?void 0:s.sh2Max)??1),e}}),this.dynoSh3MinMax=new La({key:"sh3MinMax",value:new wt(-1,1),update:e=>{var n,s;return e.set(((n=this.splatEncoding)==null?void 0:n.sh3Min)??-1,((s=this.splatEncoding)==null?void 0:s.sh3Max)??1),e}}),this.initialized=Promise.resolve(this),this.reinitialize(t)}reinitialize(t){this.isInitialized=!1,this.extra={},this.splatEncoding=t.splatEncoding,t.url||t.fileBytes||t.construct?this.initialized=this.asyncInitialize(t).then(()=>(this.isInitialized=!0,this)):(this.initialize(t),this.isInitialized=!0,this.initialized=Promise.resolve(this))}initialize(t){t.packedArray?(this.packedArray=t.packedArray,this.maxSplats=Math.floor(this.packedArray.length/4),this.maxSplats=Math.floor(this.maxSplats/ie)*ie,this.numSplats=Math.min(this.maxSplats,t.numSplats??Number.POSITIVE_INFINITY)):(this.maxSplats=t.maxSplats??0,this.numSplats=0),this.extra=t.extra??{}}async asyncInitialize(t){const{url:e,fileBytes:n,construct:s}=t;if(e){const r=new gC;r.packedSplats=this,await r.loadAsync(e)}else if(n){const r=await Ah({input:n,fileType:t.fileType,pathOrUrl:t.fileName??e,splatEncoding:t.splatEncoding??Jr});this.initialize(r)}if(s){const r=s(this);r instanceof Promise&&await r}}dispose(){this.target&&(this.target.dispose(),this.target=null),this.source&&(this.source.dispose(),this.source=null)}ensureSplats(t){const e=t<=this.maxSplats?this.maxSplats:Math.max(t,2*this.maxSplats),n=this.packedArray?this.packedArray.length/4:0;if(!this.packedArray||e>n){this.maxSplats=sn(e).maxSplats;const s=new Uint32Array(this.maxSplats*4);this.packedArray&&s.set(this.packedArray),this.packedArray=s}return this.packedArray}ensureSplatsSh(t,e){let n,s;if(t===0)return this.ensureSplats(e);if(t===1)n=2,s="sh1";else if(t===2)n=4,s="sh2";else if(t===3)n=4,s="sh3";else throw new Error(`Invalid level: ${t}`);let r=this.extra[s]?this.extra[s].length/n:0;const a=e<=r?r:Math.max(e,2*r);if(!this.extra[s]||a>r){r=sn(a).maxSplats;const o=new Uint32Array(r*n);this.extra[s]&&o.set(this.extra[s]),this.extra[s]=o}return this.extra[s]}getSplat(t){if(!this.packedArray||t>=this.numSplats)throw new Error("Invalid index");return Dl(this.packedArray,t,this.splatEncoding)}setSplat(t,e,n,s,r,a){const o=this.ensureSplats(t+1);Tl(o,t,e.x,e.y,e.z,n.x,n.y,n.z,s.x,s.y,s.z,s.w,r,a.r,a.g,a.b),this.numSplats=Math.max(this.numSplats,t+1)}pushSplat(t,e,n,s,r){const a=this.ensureSplats(this.numSplats+1);Tl(a,this.numSplats,t.x,t.y,t.z,e.x,e.y,e.z,n.x,n.y,n.z,n.w,s,r.r,r.g,r.b),++this.numSplats}forEachSplat(t){if(!(!this.packedArray||!this.numSplats))for(let e=0;e<this.numSplats;++e){const n=Dl(this.packedArray,e,this.splatEncoding);t(e,n.center,n.scales,n.quaternion,n.opacity,n.color)}}ensureGenerate(t){if(this.target&&(t??1)<=this.maxSplats)return!1;this.dispose();const e=sn(t??1),{width:n,height:s,depth:r}=e;return this.maxSplats=e.maxSplats,this.target=new rc(n,s,r,{depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,magFilter:be,minFilter:be}),this.target.texture.format=zn,this.target.texture.type=Ve,this.target.texture.internalFormat="RGBA32UI",this.target.scissorTest=!0,!0}generateMapping(t){let e=0;const n=t.map(s=>{const r=e,a=Math.ceil(s/ie)*ie;return e+=a,{base:r,count:s}});return{maxSplats:e,mapping:n}}getTexture(){return this.target?this.target.texture:this.source||this.packedArray?this.maybeUpdateSource():Qe.getEmpty()}maybeUpdateSource(){if(!this.packedArray)throw new Error("No packed splats");if(this.needsUpdate||!this.source){if(this.needsUpdate=!1,this.source){const{width:t,height:e,depth:n}=this.source.image;this.maxSplats!==t*e*n&&(this.source.dispose(),this.source=null)}if(this.source)this.packedArray.buffer!==this.source.image.data.buffer&&(this.source.image.data=new Uint8Array(this.packedArray.buffer));else{const{width:t,height:e,depth:n}=sn(this.maxSplats);this.source=new vn(this.packedArray,t,e,n),this.source.format=zn,this.source.type=Ve,this.source.internalFormat="RGBA32UI",this.source.needsUpdate=!0}this.source.needsUpdate=!0}return this.source}static getEmpty(){if(!Qe.emptySource){const{width:t,height:e,depth:n,maxSplats:s}=sn(1),r=new Uint32Array(s*4);Qe.emptySource=new vn(r,t,e,n),Qe.emptySource.format=zn,Qe.emptySource.type=Ve,Qe.emptySource.internalFormat="RGBA32UI",Qe.emptySource.needsUpdate=!0}return Qe.emptySource}prepareProgramMaterial(t){let e=Qe.generatorProgram.get(t);if(!e){const s=qn({index:"int"},{output:"uvec4"},({index:r})=>{t.inputs.index=r;const a=t.outputs.gsplat;return{output:HE(a,this.dynoRgbMinMaxLnScaleMinMax)}});Qe.programTemplate||(Qe.programTemplate=new Vc(xC)),e=new Yc({graph:s,inputs:{index:"index"},outputs:{output:"target"},template:Qe.programTemplate}),Object.assign(e.uniforms,{targetLayer:{value:0},targetBase:{value:0},targetCount:{value:0}}),Qe.generatorProgram.set(t,e)}const n=e.prepareMaterial();return Qe.fullScreenQuad.material=n,{program:e,material:n}}saveRenderState(t){return{xrEnabled:t.xr.enabled,autoClear:t.autoClear}}resetRenderState(t,e){t.setRenderTarget(null),t.xr.enabled=e.xrEnabled,t.autoClear=e.autoClear}generate({generator:t,base:e,count:n,renderer:s}){if(!this.target)throw new Error("Target must be initialized with ensureSplats");if(e+n>this.maxSplats)throw new Error("Base + count exceeds maxSplats");const{program:r,material:a}=this.prepareProgramMaterial(t);r.update();const o=this.saveRenderState(s),l=Math.ceil((e+n)/ie)*ie,A=ie*xi;for(a.uniforms.targetBase.value=e,a.uniforms.targetCount.value=n;e<l;){const h=Math.floor(e/A);a.uniforms.targetLayer.value=h;const c=h*A,d=Math.floor((e-c)/ie),p=Math.min(xi,Math.ceil((l-c)/ie));this.target.scissor.set(0,d,ie,p-d),s.setRenderTarget(this.target,h),s.xr.enabled=!1,s.autoClear=!1,Qe.fullScreenQuad.render(s),e+=ie*(p-d)}return this.resetRenderState(s,o),{nextBase:l}}};Ns.emptySource=null;Ns.programTemplate=null;Ns.generatorProgram=new Map;Ns.fullScreenQuad=new bc(new eA({visible:!1}));let vi=Ns;class hA extends gn{constructor({packedSplats:t}={}){super({key:"packedSplats",type:Vr,globals:()=>[rA],value:{texture:vi.getEmpty(),numSplats:0,rgbMinMaxLnScaleMinMax:new Jt(0,1,Yn,Vn)},update:e=>{var n,s,r,a,o,l,A,h,c,d;return e.texture=((n=this.packedSplats)==null?void 0:n.getTexture())??vi.getEmpty(),e.numSplats=((s=this.packedSplats)==null?void 0:s.numSplats)??0,e.rgbMinMaxLnScaleMinMax.set(((a=(r=this.packedSplats)==null?void 0:r.splatEncoding)==null?void 0:a.rgbMin)??0,((l=(o=this.packedSplats)==null?void 0:o.splatEncoding)==null?void 0:l.rgbMax)??1,((h=(A=this.packedSplats)==null?void 0:A.splatEncoding)==null?void 0:h.lnScaleMin)??Yn,((d=(c=this.packedSplats)==null?void 0:c.splatEncoding)==null?void 0:d.lnScaleMax)??Vn),e}}),this.packedSplats=t}}class Ho extends Wu{constructor(t,e){super(),this.ordering=t,this.setAttribute("position",new $e(yC,3)),this.setIndex(new $e(_C,1)),this._maxInstanceCount=t.length,this.instanceCount=e,this.attribute=new Uu(t,1,!1,1),this.attribute.setUsage(Au),this.setAttribute("splatIndex",this.attribute)}update(t,e){this.ordering=t,this.attribute.array=t,this.instanceCount=e,this.attribute.addUpdateRange(0,e),this.attribute.needsUpdate=!0}}const yC=new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),_C=new Uint16Array([0,1,2,0,2,3]),uA=class Es{constructor(t){if(this.lastTime=null,this.encodeLinear=!1,this.superXY=1,this.display=null,this.sorting=null,this.pending=null,this.sortingCheck=!1,this.readback16=new Uint16Array(0),this.readback32=new Uint32Array(0),this.spark=t.spark,this.camera=t.camera,this.viewToWorld=t.viewToWorld??new Xt,t.target){const{width:e,height:n,doubleBuffer:s}=t.target,r=Math.max(1,Math.min(4,t.target.superXY??1));if(this.superXY=r,e*r>8192||n*r>8192)throw new Error("Target size too large");this.target=new pn(e*r,n*r,{format:Be,type:We,colorSpace:ze}),s&&(this.back=new pn(e*r,n*r,{format:Be,type:We,colorSpace:ze})),this.encodeLinear=!0}this.onTextureUpdated=t.onTextureUpdated,this.sortRadial=t.sortRadial??!0,this.sortDistance=t.sortDistance,this.sortCoorient=t.sortCoorient,this.depthBias=t.depthBias,this.sort360=t.sort360,this.sort32=t.sort32,this.stochastic=t.stochastic??!1,this.orderingFreelist=new jE({allocate:e=>new Uint32Array(e),valid:(e,n)=>e.length===n}),this.autoUpdate=!1,this.setAutoUpdate(t.autoUpdate??!1)}dispose(){var t;this.setAutoUpdate(!1),this.target&&(this.target.dispose(),this.target=void 0),this.back&&(this.back.dispose(),this.back=void 0),this.display&&(this.spark.releaseAccumulator(this.display.accumulator),this.display.geometry.dispose(),this.display=null),(t=this.pending)!=null&&t.accumulator&&(this.spark.releaseAccumulator(this.pending.accumulator),this.pending=null)}setAutoUpdate(t){!this.autoUpdate&&t?this.spark.autoViewpoints.push(this):this.autoUpdate&&!t&&(this.spark.autoViewpoints=this.spark.autoViewpoints.filter(e=>e!==this)),this.autoUpdate=t}async prepare({scene:t,camera:e,viewToWorld:n,update:s,forceOrigin:r}){var a;for(n?this.viewToWorld=n:(this.camera=e??this.camera,this.camera&&(this.camera.updateMatrixWorld(),this.viewToWorld=this.camera.matrixWorld.clone()));s??!0;){const l=r?this.viewToWorld:void 0;if(this.spark.updateInternal({scene:t,originToWorld:l}))break;await new Promise(h=>setTimeout(h,10))}const o=this.spark.active;o!==((a=this.display)==null?void 0:a.accumulator)&&(this.spark.active.refCount+=1),await this.sortUpdate({accumulator:o,viewToWorld:this.viewToWorld})}renderTarget({scene:t,camera:e}){var n;const s=this.back??this.target;if(!s)throw new Error("Must initialize SparkViewpoint with target");if(e=e??this.camera,!e)throw new Error("Must provide camera");if(e instanceof Oe){const r=new Oe().copy(e,!1);r.aspect=s.width/s.height,r.updateProjectionMatrix(),e=r}this.viewToWorld=e.matrixWorld.clone();try{this.spark.renderer.setRenderTarget(s),this.spark.prepareViewpoint(this),this.spark.renderer.render(t,e)}finally{this.spark.prepareViewpoint(this.spark.defaultView),this.spark.renderer.setRenderTarget(null)}s!==this.target&&([this.target,this.back]=[this.back,this.target]),(n=this.onTextureUpdated)==null||n.call(this,s.texture)}async readTarget(){if(!this.target)throw new Error("Must initialize SparkViewpoint with target");const{width:t,height:e}=this.target,n=t*e*4;(!this.superPixels||this.superPixels.length<n)&&(this.superPixels=new Uint8Array(n)),await this.spark.renderer.readRenderTargetPixelsAsync(this.target,0,0,t,e,this.superPixels);const{superXY:s}=this;if(s===1)return this.superPixels;const r=t/s,a=e/s,o=r*a*4;(!this.pixels||this.pixels.length<o)&&(this.pixels=new Uint8Array(o));const{superPixels:l,pixels:A}=this,h=s*s;for(let c=0;c<a;c++){const d=c*r;for(let p=0;p<r;p++){const g=p*s;let m=0,f=0,u=0,y=0;for(let I=0;I<s;I++){const b=(c*s+I)*this.target.width;for(let S=0;S<s;S++){const w=(b+g+S)*4;m+=l[w],f+=l[w+1],u+=l[w+2],y+=l[w+3]}}const x=(d+p)*4;A[x]=m/h,A[x+1]=f/h,A[x+2]=u/h,A[x+3]=y/h}}return A}async prepareRenderPixels({scene:t,camera:e,viewToWorld:n,update:s,forceOrigin:r}){return await this.prepare({scene:t,camera:e,viewToWorld:n,update:s,forceOrigin:r}),this.renderTarget({scene:t,camera:e}),this.readTarget()}autoPoll({accumulator:t}){var e,n,s;this.camera&&(this.camera.updateMatrixWorld(),this.viewToWorld=this.camera.matrixWorld.clone());let r=!1,a=!1;if(!this.display)r=!0;else if(t){r=!0;const{mappingVersion:l}=this.display.accumulator;t.mappingVersion===l&&(t.refCount+=1,this.spark.releaseAccumulator(this.display.accumulator),this.display.accumulator=t,this.display.viewToWorld.copy(this.viewToWorld),a=!0,this.spark.viewpoint===this&&this.spark.prepareViewpoint(this))}const o=((e=this.sorting)==null?void 0:e.viewToWorld)??((n=this.display)==null?void 0:n.viewToWorld);o&&!Po({matrix1:this.viewToWorld,matrix2:o,maxDistance:this.sortDistance??.01,minCoorient:this.sortCoorient??this.sortRadial?.99:.999})&&(r=!0),r&&(t&&(t.refCount+=1),(s=this.pending)!=null&&s.accumulator&&this.spark.releaseAccumulator(this.pending.accumulator),this.pending={accumulator:t,viewToWorld:this.viewToWorld,displayed:a},this.driveSort())}async driveSort(){for(var t;;){if(this.sorting||!this.pending)return;const{viewToWorld:e,displayed:n}=this.pending;let s=this.pending.accumulator;if(s||(s=((t=this.display)==null?void 0:t.accumulator)??this.spark.active,s.refCount+=1),this.pending=null,!s)throw new Error("No accumulator to sort");this.sorting={viewToWorld:e},await this.sortUpdate({accumulator:s,viewToWorld:e,displayed:n}),this.sorting=null,this.spark.releaseAccumulator(s)}}async sortUpdate({accumulator:t,viewToWorld:e,displayed:n=!1}){if(this.sortingCheck)throw new Error("Only one sort at a time");this.sortingCheck=!0,t=t??this.spark.active;const{numSplats:s,maxSplats:r}=t.splats;let a=0,o=this.orderingFreelist.alloc(r);if(this.stochastic){a=s;for(let l=0;l<s;++l)o[l]=l}else if(s>0){const{reader:l,doubleSortReader:A,sort32Reader:h,dynoSortRadial:c,dynoOrigin:d,dynoDirection:p,dynoDepthBias:g,dynoSort360:m,dynoSplats:f}=Es.makeSorter(),u=this.sort32??!1;let y;if(u)this.readback32=l.ensureBuffer(r,this.readback32),y=this.readback32;else{const R=Math.ceil(r/2);this.readback16=l.ensureBuffer(R,this.readback16),y=this.readback16}const x=t.toWorld.clone().invert(),I=e.clone().premultiply(x);c.value=this.sort360?!0:this.sortRadial,d.value.set(0,0,0).applyMatrix4(I),p.value.set(0,0,-1).applyMatrix4(I).sub(d.value).normalize(),g.value=this.depthBias??1,m.value=this.sort360??!1,f.packedSplats=t.splats;const b=u?h:A,S=u?s:Math.ceil(s/2);await l.renderReadback({renderer:this.spark.renderer,reader:b,count:S,readback:y});const w=await pi(async R=>{const B=u?"sort32Splats":"sortDoubleSplats";return R.call(B,{maxSplats:r,numSplats:s,readback:y,ordering:o})});u?this.readback32=w.readback:this.readback16=w.readback,o=w.ordering,a=w.activeSplats}this.updateDisplay({accumulator:t,viewToWorld:e,ordering:o,activeSplats:a,displayed:n}),this.sortingCheck=!1}updateDisplay({accumulator:t,viewToWorld:e,ordering:n,activeSplats:s,displayed:r=!1}){if(!this.display)t.refCount+=1,this.display={accumulator:t,viewToWorld:e,geometry:new Ho(n,s)};else{!r&&t!==this.display.accumulator&&(t.refCount+=1,this.spark.releaseAccumulator(this.display.accumulator),this.display.accumulator=t),this.display.viewToWorld=e;const a=this.display.geometry.ordering;a.length===n.length?this.display.geometry.update(n,s):(this.display.geometry.dispose(),this.display.geometry=new Ho(n,s)),this.orderingFreelist.free(a)}this.spark.viewpoint===this&&this.spark.prepareViewpoint(this)}static makeSorter(){if(!Es.dynos){const t=new Ql({value:!0}),e=new Qr({value:new Q}),n=new Qr({value:new Q}),s=new Ms({value:1}),r=new Ql({value:!1}),a=new hA,o=new Wc,l=qn({index:"int"},{rgba8:"vec4"},({index:h})=>{if(!h)throw new Error("No index");const c={sortRadial:t,sortOrigin:e,sortDirection:n,sortDepthBias:s,sort360:r},d=ms(h,xs("int",2)),p=ys(a,d),g=za({gsplat:p,...c}),m=ys(a,Ei(d,xs("int",1))),f=za({gsplat:m,...c}),u=SI({vectorType:"vec2",x:g,y:f});return{rgba8:Fl(CI(u))}}),A=qn({index:"int"},{rgba8:"vec4"},({index:h})=>{if(!h)throw new Error("No index");const c={sortRadial:t,sortOrigin:e,sortDirection:n,sortDepthBias:s,sort360:r},d=ys(a,h),p=za({gsplat:d,...c});return{rgba8:Fl(II(p))}});Es.dynos={dynoSortRadial:t,dynoOrigin:e,dynoDirection:n,dynoDepthBias:s,dynoSort360:r,dynoSplats:a,reader:o,doubleSortReader:l,sort32Reader:A}}return Es.dynos}};uA.EMPTY_TEXTURE=new De;uA.dynos=null;let Gl=uA;const BC=Je(`
  float computeSort(Gsplat gsplat, bool sortRadial, vec3 sortOrigin, vec3 sortDirection, float sortDepthBias, bool sort360) {
    if (!isGsplatActive(gsplat.flags)) {
      return INFINITY;
    }

    vec3 center = gsplat.center - sortOrigin;
    float biasedDepth = dot(center, sortDirection) + sortDepthBias;
    if (!sort360 && (biasedDepth <= 0.0)) {
      return INFINITY;
    }

    return sortRadial ? length(center) : biasedDepth;
  }
`);function za({gsplat:i,sortRadial:t,sortOrigin:e,sortDirection:n,sortDepthBias:s,sort360:r}){return Or({inTypes:{gsplat:xe,sortRadial:"bool",sortOrigin:"vec3",sortDirection:"vec3",sortDepthBias:"float",sort360:"bool"},outTypes:{metric:"float"},globals:()=>[Mn,BC],inputs:{gsplat:i,sortRadial:t,sortOrigin:e,sortDirection:n,sortDepthBias:s,sort360:r},statements:({inputs:a,outputs:o})=>{const{gsplat:l,sortRadial:A,sortOrigin:h,sortDirection:c,sortDepthBias:d,sort360:p}=a;return wn(`
        ${o.metric} = computeSort(${l}, ${A}, ${h}, ${c}, ${d}, ${p});
      `)}}).outputs.metric}class Oa{constructor(){this.splats=new vi,this.toWorld=new Xt,this.mapping=[],this.refCount=0,this.splatsVersion=-1,this.mappingVersion=-1}ensureGenerate(t){this.splats.ensureGenerate(t)&&(this.mapping=[])}generateSplats({renderer:t,modifier:e,generators:n,forceUpdate:s,originToWorld:r}){const a=this.mapping.reduce((A,h)=>(A.set(h.node,h),A),new Map);let o=0,l=0;for(const{node:A,generator:h,version:c,base:d,count:p}of n){const g=a.get(A);if((s||h!==g?.generator||c!==g?.version||d!==g?.base||p!==g?.count)&&h&&p>0){const m=e.apply(h);try{this.splats.generate({generator:m,base:d,count:p,renderer:t})}catch(f){A.generator=void 0,A.generatorError=f}o+=1}l=Math.max(l,d+p)}return this.splats.numSplats=l,this.toWorld.copy(r),this.mapping=n,o!==0}hasCorrespondence(t){return this.mapping.length!==t.mapping.length?!1:this.mapping.every(({node:e,base:n,count:s},r)=>{const{node:a,base:o,count:l}=t.mapping[r];return e===a&&n===o&&s===l})}}var vC=`const float LN_SCALE_MIN = -12.0;
const float LN_SCALE_MAX = 9.0;

const uint SPLAT_TEX_WIDTH_BITS = 11u;
const uint SPLAT_TEX_HEIGHT_BITS = 11u;
const uint SPLAT_TEX_DEPTH_BITS = 11u;
const uint SPLAT_TEX_LAYER_BITS = SPLAT_TEX_WIDTH_BITS + SPLAT_TEX_HEIGHT_BITS;

const uint SPLAT_TEX_WIDTH = 1u << SPLAT_TEX_WIDTH_BITS;
const uint SPLAT_TEX_HEIGHT = 1u << SPLAT_TEX_HEIGHT_BITS;
const uint SPLAT_TEX_DEPTH = 1u << SPLAT_TEX_DEPTH_BITS;

const uint SPLAT_TEX_WIDTH_MASK = SPLAT_TEX_WIDTH - 1u;
const uint SPLAT_TEX_HEIGHT_MASK = SPLAT_TEX_HEIGHT - 1u;
const uint SPLAT_TEX_DEPTH_MASK = SPLAT_TEX_DEPTH - 1u;

const uint F16_INF = 0x7c00u;
const float PI = 3.1415926535897932384626433832795;

const float INFINITY = 1.0 / 0.0;
const float NEG_INFINITY = -INFINITY;

float sqr(float x) {
    return x * x;
}

float pow4(float x) {
    float x2 = x * x;
    return x2 * x2;
}

float pow8(float x) {
    float x4 = pow4(x);
    return x4 * x4;
}

vec3 srgbToLinear(vec3 rgb) {
    return pow(rgb, vec3(2.2));
}

vec3 linearToSrgb(vec3 rgb) {
    return pow(rgb, vec3(1.0 / 2.2));
}

uint encodeQuatOctXy88R8(vec4 q) {
    
    if (q.w < 0.0) {
        q = -q;
    }
    
    float theta = 2.0 * acos(q.w);
    float halfTheta = theta * 0.5;
    float s = sin(halfTheta);
    
    vec3 axis = (abs(s) < 1e-6) ? vec3(1.0, 0.0, 0.0) : q.xyz / s;
    
    
    
    float sum = abs(axis.x) + abs(axis.y) + abs(axis.z);
    vec2 p = vec2(axis.x, axis.y) / sum;
    
    if (axis.z < 0.0) {
        float oldPx = p.x;
        p.x = (1.0 - abs(p.y)) * (p.x >= 0.0 ? 1.0 : -1.0);
        p.y = (1.0 - abs(oldPx)) * (p.y >= 0.0 ? 1.0 : -1.0);
    }
    
    float u_f = p.x * 0.5 + 0.5;
    float v_f = p.y * 0.5 + 0.5;
    
    uint quantU = uint(clamp(round(u_f * 255.0), 0.0, 255.0));
    uint quantV = uint(clamp(round(v_f * 255.0), 0.0, 255.0));
    
    
    
    uint angleInt = uint(clamp(round((theta / 3.14159265359) * 255.0), 0.0, 255.0));
    
    
    return (angleInt << 16u) | (quantV << 8u) | quantU;
}

vec4 decodeQuatOctXy88R8(uint encoded) {
    
    uint quantU = encoded & uint(0xFFu);               
    uint quantV = (encoded >> 8u) & uint(0xFFu);         
    uint angleInt = encoded >> 16u;                      

    
    float u_f = float(quantU) / 255.0;
    float v_f = float(quantV) / 255.0;
    vec2 f = vec2(u_f * 2.0 - 1.0, v_f * 2.0 - 1.0);

    vec3 axis = vec3(f.xy, 1.0 - abs(f.x) - abs(f.y));
    float t = max(-axis.z, 0.0);
    axis.x += (axis.x >= 0.0) ? -t : t;
    axis.y += (axis.y >= 0.0) ? -t : t;
    axis = normalize(axis);
    
    
    float theta = (float(angleInt) / 255.0) * 3.14159265359;
    float halfTheta = theta * 0.5;
    float s = sin(halfTheta);
    float w = cos(halfTheta);
    
    return vec4(axis * s, w);
}

    

    

    

    

    

    

    

    

    

    

uvec4 packSplatEncoding(
    vec3 center, vec3 scales, vec4 quaternion, vec4 rgba, vec4 rgbMinMaxLnScaleMinMax
) {
    float rgbMin = rgbMinMaxLnScaleMinMax.x;
    float rgbMax = rgbMinMaxLnScaleMinMax.y;
    vec3 encRgb = (rgba.rgb - vec3(rgbMin)) / (rgbMax - rgbMin);
    uvec4 uRgba = uvec4(round(clamp(vec4(encRgb, rgba.a) * 255.0, 0.0, 255.0)));

    uint uQuat = encodeQuatOctXy88R8(quaternion);
    
    
    uvec3 uQuat3 = uvec3(uQuat & 0xffu, (uQuat >> 8u) & 0xffu, (uQuat >> 16u) & 0xffu);

    
    float lnScaleMin = rgbMinMaxLnScaleMinMax.z;
    float lnScaleMax = rgbMinMaxLnScaleMinMax.w;
    float lnScaleScale = 254.0 / (lnScaleMax - lnScaleMin);
    uvec3 uScales = uvec3(
        (scales.x == 0.0) ? 0u : uint(round(clamp((log(scales.x) - lnScaleMin) * lnScaleScale, 0.0, 254.0))) + 1u,
        (scales.y == 0.0) ? 0u : uint(round(clamp((log(scales.y) - lnScaleMin) * lnScaleScale, 0.0, 254.0))) + 1u,
        (scales.z == 0.0) ? 0u : uint(round(clamp((log(scales.z) - lnScaleMin) * lnScaleScale, 0.0, 254.0))) + 1u
    );

    
    uint word0 = uRgba.r | (uRgba.g << 8u) | (uRgba.b << 16u) | (uRgba.a << 24u);
    uint word1 = packHalf2x16(center.xy);
    uint word2 = packHalf2x16(vec2(center.z, 0.0)) | (uQuat3.x << 16u) | (uQuat3.y << 24u);
    uint word3 = uScales.x | (uScales.y << 8u) | (uScales.z << 16u) | (uQuat3.z << 24u);
    return uvec4(word0, word1, word2, word3);
}

uvec4 packSplat(vec3 center, vec3 scales, vec4 quaternion, vec4 rgba) {
    return packSplatEncoding(center, scales, quaternion, rgba, vec4(0.0, 1.0, LN_SCALE_MIN, LN_SCALE_MAX));
}

void unpackSplatEncoding(uvec4 packed, out vec3 center, out vec3 scales, out vec4 quaternion, out vec4 rgba, vec4 rgbMinMaxLnScaleMinMax) {
    uint word0 = packed.x, word1 = packed.y, word2 = packed.z, word3 = packed.w;

    uvec4 uRgba = uvec4(word0 & 0xffu, (word0 >> 8u) & 0xffu, (word0 >> 16u) & 0xffu, (word0 >> 24u) & 0xffu);
    float rgbMin = rgbMinMaxLnScaleMinMax.x;
    float rgbMax = rgbMinMaxLnScaleMinMax.y;
    rgba = (vec4(uRgba) / 255.0);
    rgba.rgb = rgba.rgb * (rgbMax - rgbMin) + rgbMin;

    center = vec4(
        unpackHalf2x16(word1),
        unpackHalf2x16(word2 & 0xffffu)
    ).xyz;

    uvec3 uScales = uvec3(word3 & 0xffu, (word3 >> 8u) & 0xffu, (word3 >> 16u) & 0xffu);
    float lnScaleMin = rgbMinMaxLnScaleMinMax.z;
    float lnScaleMax = rgbMinMaxLnScaleMinMax.w;
    float lnScaleScale = (lnScaleMax - lnScaleMin) / 254.0;
    scales = vec3(
        (uScales.x == 0u) ? 0.0 : exp(lnScaleMin + float(uScales.x - 1u) * lnScaleScale),
        (uScales.y == 0u) ? 0.0 : exp(lnScaleMin + float(uScales.y - 1u) * lnScaleScale),
        (uScales.z == 0u) ? 0.0 : exp(lnScaleMin + float(uScales.z - 1u) * lnScaleScale)
    );

    uint uQuat = ((word2 >> 16u) & 0xFFFFu) | ((word3 >> 8u) & 0xFF0000u);
    quaternion = decodeQuatOctXy88R8(uQuat);
    
    
}

void unpackSplat(uvec4 packed, out vec3 center, out vec3 scales, out vec4 quaternion, out vec4 rgba) {
    unpackSplatEncoding(packed, center, scales, quaternion, rgba, vec4(0.0, 1.0, LN_SCALE_MIN, LN_SCALE_MAX));
}

vec3 quatVec(vec4 q, vec3 v) {
    
    vec3 t = 2.0 * cross(q.xyz, v);
    return v + q.w * t + cross(q.xyz, t);
}

vec4 quatQuat(vec4 q1, vec4 q2) {
    return vec4(
        q1.w * q2.x + q1.x * q2.w + q1.y * q2.z - q1.z * q2.y,
        q1.w * q2.y - q1.x * q2.z + q1.y * q2.w + q1.z * q2.x,
        q1.w * q2.z + q1.x * q2.y - q1.y * q2.x + q1.z * q2.w,
        q1.w * q2.w - q1.x * q2.x - q1.y * q2.y - q1.z * q2.z
    );
}

mat3 scaleQuaternionToMatrix(vec3 s, vec4 q) {
    
    return mat3(
        s.x * (1.0 - 2.0 * (q.y * q.y + q.z * q.z)),
        s.x * (2.0 * (q.x * q.y + q.w * q.z)),
        s.x * (2.0 * (q.x * q.z - q.w * q.y)),
        s.y * (2.0 * (q.x * q.y - q.w * q.z)),
        s.y * (1.0 - 2.0 * (q.x * q.x + q.z * q.z)),
        s.y * (2.0 * (q.y * q.z + q.w * q.x)),
        s.z * (2.0 * (q.x * q.z + q.w * q.y)),
        s.z * (2.0 * (q.y * q.z - q.w * q.x)),
        s.z * (1.0 - 2.0 * (q.x * q.x + q.y * q.y))
    );
}

vec4 slerp(vec4 q1, vec4 q2, float t) {
    
    float cosHalfTheta = dot(q1, q2);

    
    if (abs(cosHalfTheta) >= 0.999) {
        return q1;
    }
    
    
    
    if (cosHalfTheta < 0.0) {
        q2 = -q2;
        cosHalfTheta = -cosHalfTheta;
    }

    
    float halfTheta = acos(cosHalfTheta);
    float sinHalfTheta = sqrt(1.0 - cosHalfTheta * cosHalfTheta);

    
    float ratioA = sin((1.0 - t) * halfTheta) / sinHalfTheta;
    float ratioB = sin(t * halfTheta) / sinHalfTheta;

    
    return q1 * ratioA + q2 * ratioB;
}

ivec3 splatTexCoord(int index) {
    uint x = uint(index) & SPLAT_TEX_WIDTH_MASK;
    uint y = (uint(index) >> SPLAT_TEX_WIDTH_BITS) & SPLAT_TEX_HEIGHT_MASK;
    uint z = uint(index) >> SPLAT_TEX_LAYER_BITS;
    return ivec3(x, y, z);
}`,SC=`precision highp float;
precision highp int;

#include <splatDefines>
#include <logdepthbuf_pars_fragment>

uniform float near;
uniform float far;
uniform bool encodeLinear;
uniform float time;
uniform bool debugFlag;
uniform float maxStdDev;
uniform float minAlpha;
uniform bool stochastic;
uniform bool disableFalloff;
uniform float falloff;

uniform bool splatTexEnable;
uniform sampler3D splatTexture;
uniform mat2 splatTexMul;
uniform vec2 splatTexAdd;
uniform float splatTexNear;
uniform float splatTexFar;
uniform float splatTexMid;

out vec4 fragColor;

in vec4 vRgba;
in vec2 vSplatUv;
in vec3 vNdc;
flat in uint vSplatIndex;

void main() {
    vec4 rgba = vRgba;

    float z = dot(vSplatUv, vSplatUv);
    if (!splatTexEnable) {
        if (z > (maxStdDev * maxStdDev)) {
            discard;
        }
    } else {
        vec2 uv = splatTexMul * vSplatUv + splatTexAdd;
        float ndcZ = vNdc.z;
        float depth = (2.0 * near * far) / (far + near - ndcZ * (far - near));
        float clampedFar = max(splatTexFar, splatTexNear);
        float clampedDepth = clamp(depth, splatTexNear, clampedFar);
        float logDepth = log2(clampedDepth + 1.0);
        float logNear = log2(splatTexNear + 1.0);
        float logFar = log2(clampedFar + 1.0);

        float texZ;
        if (splatTexMid > 0.0) {
            float clampedMid = clamp(splatTexMid, splatTexNear, clampedFar);
            float logMid = log2(clampedMid + 1.0);
            texZ = (clampedDepth <= clampedMid) ?
                (0.5 * ((logDepth - logNear) / (logMid - logNear))) :
                (0.5 * ((logDepth - logMid) / (logFar - logMid)) + 0.5);
        } else {
            texZ = (logDepth - logNear) / (logFar - logNear);
        }

        vec4 modulate = texture(splatTexture, vec3(uv, 1.0 - texZ));
        rgba *= modulate;
    }

    rgba.a *= mix(1.0, exp(-0.5 * z), falloff);

    if (rgba.a < minAlpha) {
        discard;
    }
    if (encodeLinear) {
        rgba.rgb = srgbToLinear(rgba.rgb);
    }

    if (stochastic) {
        const bool STEADY = false;
        uint uTime = STEADY ? 0u : floatBitsToUint(time);
        uvec2 coord = uvec2(gl_FragCoord.xy);
        uint state = uTime + 0x9e3779b9u * coord.x + 0x85ebca6bu * coord.y + 0xc2b2ae35u * uint(vSplatIndex);
        state = state * 747796405u + 2891336453u;
        uint hash = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
        hash = (hash >> 22u) ^ hash;
        float rand = float(hash) / 4294967296.0;
        if (rand < rgba.a) {
            fragColor = vec4(rgba.rgb, 1.0);
        } else {
            discard;
        }
    } else {
        #ifdef PREMULTIPLIED_ALPHA
            fragColor = vec4(rgba.rgb * rgba.a, rgba.a);
        #else
            fragColor = rgba;
        #endif
    }
    #include <logdepthbuf_fragment>
}`,bC=`precision highp float;
precision highp int;
precision highp usampler2DArray;

#include <splatDefines>
#include <logdepthbuf_pars_vertex>

attribute uint splatIndex;

out vec4 vRgba;
out vec2 vSplatUv;
out vec3 vNdc;
flat out uint vSplatIndex;

uniform vec2 renderSize;
uniform uint numSplats;
uniform vec4 renderToViewQuat;
uniform vec3 renderToViewPos;
uniform float maxStdDev;
uniform float minPixelRadius;
uniform float maxPixelRadius;
uniform float time;
uniform float deltaTime;
uniform bool debugFlag;
uniform float minAlpha;
uniform bool stochastic;
uniform bool enable2DGS;
uniform float blurAmount;
uniform float preBlurAmount;
uniform float focalDistance;
uniform float apertureAngle;
uniform float clipXY;
uniform float focalAdjustment;

uniform usampler2DArray packedSplats;
uniform vec4 rgbMinMaxLnScaleMinMax;

#ifdef USE_LOGDEPTHBUF
    bool isPerspectiveMatrix( mat4 m ) {
      return m[ 2 ][ 3 ] == - 1.0;
    }
#endif

void main() {
    
    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);

    if (uint(gl_InstanceID) >= numSplats) {
        return;
    }

    ivec3 texCoord;
    if (stochastic) {
        texCoord = ivec3(
            uint(gl_InstanceID) & SPLAT_TEX_WIDTH_MASK,
            (uint(gl_InstanceID) >> SPLAT_TEX_WIDTH_BITS) & SPLAT_TEX_HEIGHT_MASK,
            (uint(gl_InstanceID) >> SPLAT_TEX_LAYER_BITS)
        );
    } else {
        if (splatIndex == 0xffffffffu) {
            
            return;
        }
        texCoord = ivec3(
            splatIndex & SPLAT_TEX_WIDTH_MASK,
            (splatIndex >> SPLAT_TEX_WIDTH_BITS) & SPLAT_TEX_HEIGHT_MASK,
            splatIndex >> SPLAT_TEX_LAYER_BITS
        );
    }
    uvec4 packed = texelFetch(packedSplats, texCoord, 0);

    vec3 center, scales;
    vec4 quaternion, rgba;
    unpackSplatEncoding(packed, center, scales, quaternion, rgba, rgbMinMaxLnScaleMinMax);

    if (rgba.a < minAlpha) {
        return;
    }
    bvec3 zeroScales = equal(scales, vec3(0.0));
    if (all(zeroScales)) {
        return;
    }

    
    vec3 viewCenter = quatVec(renderToViewQuat, center) + renderToViewPos;

    
    if (viewCenter.z >= 0.0) {
        return;
    }

    
    vec4 clipCenter = projectionMatrix * vec4(viewCenter, 1.0);

    
    if (abs(clipCenter.z) >= clipCenter.w) {
        return;
    }

    
    float clip = clipXY * clipCenter.w;
    if (abs(clipCenter.x) > clip || abs(clipCenter.y) > clip) {
        return;
    }

    
    vSplatIndex = splatIndex;

    
    vec4 viewQuaternion = quatQuat(renderToViewQuat, quaternion);

    if (enable2DGS && any(zeroScales)) {
        vRgba = rgba;
        vSplatUv = position.xy * maxStdDev;

        vec3 offset;
        if (zeroScales.z) {
            offset = vec3(vSplatUv.xy * scales.xy, 0.0);
        } else if (zeroScales.y) {
            offset = vec3(vSplatUv.x * scales.x, 0.0, vSplatUv.y * scales.z);
        } else {
            offset = vec3(0.0, vSplatUv.xy * scales.yz);
        }

        vec3 viewPos = viewCenter + quatVec(viewQuaternion, offset);
        gl_Position = projectionMatrix * vec4(viewPos, 1.0);
        vNdc = gl_Position.xyz / gl_Position.w;
        return;
    }

    
    vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

    
    mat3 RS = scaleQuaternionToMatrix(scales, viewQuaternion);
    mat3 cov3D = RS * transpose(RS);

    
    vec2 scaledRenderSize = renderSize * focalAdjustment;
    vec2 focal = 0.5 * scaledRenderSize * vec2(projectionMatrix[0][0], projectionMatrix[1][1]);

    mat3 J;
    if(isOrthographic) {
        J = mat3(
            focal.x, 0.0, 0.0,
            0.0, focal.y, 0.0,
            0.0, 0.0, 0.0
        );
    } else {
        float invZ = 1.0 / viewCenter.z;
        vec2 J1 = focal * invZ;
        vec2 J2 = -(J1 * viewCenter.xy) * invZ;
        J = mat3(
            J1.x, 0.0, J2.x,
            0.0, J1.y, J2.y,
            0.0, 0.0, 0.0
        );
    }

    
    
    
    
    
    
    
    mat3 cov2D = transpose(J) * cov3D * J;
    float a = cov2D[0][0];
    float d = cov2D[1][1];
    float b = cov2D[0][1];

    
    a += preBlurAmount;
    d += preBlurAmount;

    float fullBlurAmount = blurAmount;
    if ((focalDistance > 0.0) && (apertureAngle > 0.0)) {
        float focusRadius = maxPixelRadius;
        if (viewCenter.z < 0.0) {
            float focusBlur = abs((-viewCenter.z - focalDistance) / viewCenter.z);
            float apertureRadius = focal.x * tan(0.5 * apertureAngle);
            focusRadius = focusBlur * apertureRadius;
        }
        fullBlurAmount = clamp(sqr(focusRadius), blurAmount, sqr(maxPixelRadius));
    }

    
    float detOrig = a * d - b * b;
    a += fullBlurAmount;
    d += fullBlurAmount;
    float det = a * d - b * b;

    
    float blurAdjust = sqrt(max(0.0, detOrig / det));
    rgba.a *= blurAdjust;
    if (rgba.a < minAlpha) {
        return;
    }

    
    float eigenAvg = 0.5 * (a + d);
    float eigenDelta = sqrt(max(0.0, eigenAvg * eigenAvg - det));
    float eigen1 = eigenAvg + eigenDelta;
    float eigen2 = eigenAvg - eigenDelta;

    vec2 eigenVec1 = normalize(vec2((abs(b) < 0.001) ? 1.0 : b, eigen1 - a));
    vec2 eigenVec2 = vec2(eigenVec1.y, -eigenVec1.x);

    float scale1 = min(maxPixelRadius, maxStdDev * sqrt(eigen1));
    float scale2 = min(maxPixelRadius, maxStdDev * sqrt(eigen2));
    if (scale1 < minPixelRadius && scale2 < minPixelRadius) {
        return;
    }

    
    vec2 pixelOffset = position.x * eigenVec1 * scale1 + position.y * eigenVec2 * scale2;
    vec2 ndcOffset = (2.0 / scaledRenderSize) * pixelOffset;
    vec3 ndc = vec3(ndcCenter.xy + ndcOffset, ndcCenter.z);

    vRgba = rgba;
    vSplatUv = position.xy * maxStdDev;
    vNdc = ndc;
    gl_Position = vec4(ndc.xy * clipCenter.w, clipCenter.zw);
    #include <logdepthbuf_vertex>
}`;let Ha=null;function wC(){return Ha||(kt.splatDefines=vC,Ha={splatVertex:bC,splatFragment:SC}),Ha}const zl=5,Xr=class Te extends He{constructor(t){const e=Te.makeUniforms(),n=wC(),s=t.premultipliedAlpha??!0,r=new rn({glslVersion:vr,vertexShader:n.splatVertex,fragmentShader:n.splatFragment,uniforms:e,premultipliedAlpha:s,transparent:!0,depthTest:!0,depthWrite:!1,side:Cn});super(Hl,r),this.splatTexture=null,this.autoViewpoints=[],this.rotateToAccumulator=new qr({value:new de}),this.translateToAccumulator=new Qr({value:new Q}),this.lastFrame=-1,this.lastUpdateTime=null,this.defaultCameras=[],this.lastStochastic=null,this.pendingUpdate={scene:null,originToWorld:new Xt,timeoutId:-1},this.envViewpoint=null,this.frustumCulled=!1,this.renderer=t.renderer,this.material=r,this.uniforms=e;const a=qn({gsplat:xe},{gsplat:xe},({gsplat:o})=>{if(!o)throw new Error("gsplat not defined");return o=Gc(o,{rotate:this.rotateToAccumulator,translate:this.translateToAccumulator}),{gsplat:o}});this.modifier=new qI(a),this.premultipliedAlpha=s,this.autoUpdate=t.autoUpdate??!0,this.preUpdate=t.preUpdate??!1,this.needsUpdate=!1,this.originDistance=t.originDistance??1,this.maxStdDev=t.maxStdDev??Math.sqrt(8),this.minPixelRadius=t.minPixelRadius??0,this.maxPixelRadius=t.maxPixelRadius??512,this.minAlpha=t.minAlpha??.5*(1/255),this.enable2DGS=t.enable2DGS??!1,this.preBlurAmount=t.preBlurAmount??0,this.blurAmount=t.blurAmount??.3,this.focalDistance=t.focalDistance??0,this.apertureAngle=t.apertureAngle??0,this.falloff=t.falloff??1,this.clipXY=t.clipXY??1.4,this.focalAdjustment=t.focalAdjustment??1,this.splatEncoding=t.splatEncoding??{...Jr},this.active=new Oa,this.active.refCount=1,this.accumulatorCount=1,this.freeAccumulators=[];for(let o=0;o<1;++o)this.freeAccumulators.push(new Oa),this.accumulatorCount+=1;this.defaultView=new Gl({...t.view,autoUpdate:!0,spark:this}),this.viewpoint=this.defaultView,this.prepareViewpoint(this.viewpoint),this.clock=t.clock?sI(t.clock):new Cc}static makeUniforms(){return{renderSize:{value:new wt},near:{value:.1},far:{value:1e3},numSplats:{value:0},renderToViewQuat:{value:new de},renderToViewPos:{value:new Q},maxStdDev:{value:1},minPixelRadius:{value:0},maxPixelRadius:{value:512},minAlpha:{value:.00196078431372549},stochastic:{value:!1},enable2DGS:{value:!1},preBlurAmount:{value:0},blurAmount:{value:.3},focalDistance:{value:0},apertureAngle:{value:0},falloff:{value:1},clipXY:{value:1.4},focalAdjustment:{value:1},splatTexEnable:{value:!1},splatTexture:{type:"t",value:Te.EMPTY_SPLAT_TEXTURE},splatTexMul:{value:new Gr},splatTexAdd:{value:new wt},splatTexNear:{value:.1},splatTexFar:{value:1e3},splatTexMid:{value:0},packedSplats:{type:"t",value:vi.getEmpty()},rgbMinMaxLnScaleMinMax:{value:new Jt},time:{value:0},deltaTime:{value:0},encodeLinear:{value:!1},debugFlag:{value:!1}}}canAllocAccumulator(){return this.freeAccumulators.length>0||this.accumulatorCount<zl}maybeAllocAccumulator(){let t=this.freeAccumulators.pop();if(t===void 0){if(this.accumulatorCount>=zl)return null;t=new Oa,this.accumulatorCount+=1}return t.refCount=1,t}releaseAccumulator(t){t.refCount-=1,t.refCount===0&&this.freeAccumulators.push(t)}newViewpoint(t){return new Gl({...t,spark:this})}onBeforeRender(t,e,n){var s,r;const a=this.time??this.clock.getElapsedTime(),o=a-(this.viewpoint.lastTime??a);this.viewpoint.lastTime=a;const l=t.info.render.frame,A=l!==this.lastFrame;this.lastFrame=l;const h=this.viewpoint;if(h===this.defaultView){if(A)if(!t.xr.isPresenting)this.defaultView.viewToWorld=n.matrixWorld.clone(),this.defaultCameras=[this.defaultView.viewToWorld];else{const m=t.xr.getCamera().cameras;this.defaultCameras=m.map(f=>f.matrixWorld),this.defaultView.viewToWorld=MC(this.defaultCameras)??new Xt}this.autoUpdate&&this.update({scene:e,viewToWorld:this.defaultView.viewToWorld})}if(A&&(this.material.premultipliedAlpha!==this.premultipliedAlpha&&(this.material.premultipliedAlpha=this.premultipliedAlpha,this.material.needsUpdate=!0),this.uniforms.time.value=a,this.uniforms.deltaTime.value=o,this.uniforms.debugFlag.value=performance.now()/1e3%2<1,h.display&&h.stochastic&&(this.geometry.instanceCount=this.uniforms.numSplats.value)),h.target)this.uniforms.renderSize.value.set(h.target.width,h.target.height);else{const m=t.getDrawingBufferSize(this.uniforms.renderSize.value);if(m.x===1&&m.y===1){const f=(s=t.xr.getSession())==null?void 0:s.renderState.baseLayer;f&&(m.x=f.framebufferWidth,m.y=f.framebufferHeight)}}const c=n;if(this.uniforms.near.value=c.near,this.uniforms.far.value=c.far,this.uniforms.encodeLinear.value=h.encodeLinear,this.uniforms.maxStdDev.value=this.maxStdDev,this.uniforms.minPixelRadius.value=this.minPixelRadius,this.uniforms.maxPixelRadius.value=this.maxPixelRadius,this.uniforms.minAlpha.value=this.minAlpha,this.uniforms.stochastic.value=h.stochastic,this.uniforms.enable2DGS.value=this.enable2DGS,this.uniforms.preBlurAmount.value=this.preBlurAmount,this.uniforms.blurAmount.value=this.blurAmount,this.uniforms.focalDistance.value=this.focalDistance,this.uniforms.apertureAngle.value=this.apertureAngle,this.uniforms.falloff.value=this.falloff,this.uniforms.clipXY.value=this.clipXY,this.uniforms.focalAdjustment.value=this.focalAdjustment,this.lastStochastic!==!h.stochastic&&(this.lastStochastic=!h.stochastic,this.material.transparent=!h.stochastic,this.material.depthWrite=h.stochastic,this.material.needsUpdate=!0),this.splatTexture){const{enable:m,texture:f,multiply:u,add:y,near:x,far:I,mid:b}=this.splatTexture;m&&f?(this.uniforms.splatTexEnable.value=!0,this.uniforms.splatTexture.value=f,u?this.uniforms.splatTexMul.value.fromArray(u.elements):this.uniforms.splatTexMul.value.set(.5/this.maxStdDev,0,0,.5/this.maxStdDev),this.uniforms.splatTexAdd.value.set(y?.x??.5,y?.y??.5),this.uniforms.splatTexNear.value=x??this.uniforms.near.value,this.uniforms.splatTexFar.value=I??this.uniforms.far.value,this.uniforms.splatTexMid.value=b??0):(this.uniforms.splatTexEnable.value=!1,this.uniforms.splatTexture.value=Te.EMPTY_SPLAT_TEXTURE)}else this.uniforms.splatTexEnable.value=!1,this.uniforms.splatTexture.value=Te.EMPTY_SPLAT_TEXTURE;const d=((r=h.display)==null?void 0:r.accumulator.toWorld)??new Xt,p=n.matrixWorld.clone().invert();d.clone().premultiply(p).decompose(this.uniforms.renderToViewPos.value,this.uniforms.renderToViewQuat.value,new Q)}prepareViewpoint(t){var e,n,s,r;if(this.viewpoint=t??this.viewpoint,this.viewpoint.display){const{accumulator:a,geometry:o}=this.viewpoint.display;this.uniforms.numSplats.value=a.splats.numSplats,this.uniforms.packedSplats.value=a.splats.getTexture(),this.uniforms.rgbMinMaxLnScaleMinMax.value.set(((e=a.splats.splatEncoding)==null?void 0:e.rgbMin)??0,((n=a.splats.splatEncoding)==null?void 0:n.rgbMax)??1,((s=a.splats.splatEncoding)==null?void 0:s.lnScaleMin)??Yn,((r=a.splats.splatEncoding)==null?void 0:r.lnScaleMax)??Vn),this.geometry=o,this.material.transparent=!this.viewpoint.stochastic,this.material.depthWrite=this.viewpoint.stochastic,this.material.needsUpdate=!0}else this.uniforms.numSplats.value=0,this.uniforms.packedSplats.value=vi.getEmpty(),this.geometry=Hl}update({scene:t,viewToWorld:e}){const n=this.matrixWorld;this.preUpdate?this.updateInternal({scene:t,originToWorld:n.clone(),viewToWorld:e}):(this.pendingUpdate.scene=t,this.pendingUpdate.originToWorld.copy(n),this.pendingUpdate.timeoutId===-1&&(this.pendingUpdate.timeoutId=setTimeout(()=>{const{scene:s,originToWorld:r}=this.pendingUpdate;this.pendingUpdate.scene=null,this.pendingUpdate.timeoutId=-1,this.updateInternal({scene:s,originToWorld:r,viewToWorld:e})&&this.renderer.getContext().flush()},1)))}updateInternal({scene:t,originToWorld:e,viewToWorld:n}){var s;if(!this.canAllocAccumulator())return!1;e||(e=this.active.toWorld),n=n??e.clone();const r=this.time??this.clock.getElapsedTime(),a=r-(this.lastUpdateTime??r);this.lastUpdateTime=r;const o=this.active.mapping.reduce((m,f)=>(m.set(f.node,f),m),new Map),{generators:l,visibleGenerators:A,globalEdits:h}=this.compileScene(t);for(const m of l)(s=m.frameUpdate)==null||s.call(m,{object:m,time:r,deltaTime:a,viewToWorld:n,globalEdits:h});const c=new Set(A.map(m=>m.uuid));for(const m of l){const f=o.get(m),y=m.generator&&c.has(m.uuid)?m.numSplats:0;(this.needsUpdate||m.generator!==f?.generator||y!==f?.count)&&m.updateVersion()}const d=!Po({matrix1:e,matrix2:this.active.toWorld,maxDistance:this.originDistance}),p=this.needsUpdate||d||l.length!==o.size||l.some(m=>{var f;return m.version!==((f=o.get(m))==null?void 0:f.version)});this.needsUpdate=!1;let g=null;if(p){if(g=this.maybeAllocAccumulator(),!g)throw new Error("Unreachable");const m=!Po({matrix1:e,matrix2:g.toWorld,maxDistance:1e-5,minCoorient:.99999}),u=A.map((w,R)=>{const B=o.get(w);return B?[w.version-B.version,B.base,w]:[Number.POSITIVE_INFINITY,w.version,w]}).sort((w,R)=>w[0]!==R[0]?w[0]-R[0]:w[1]-R[1]).map(([w,R,B])=>B),y=u.map(w=>w.numSplats),{maxSplats:x,mapping:I}=g.splats.generateMapping(y),b=u.map((w,R)=>{const{base:B,count:_}=I[R];return{node:w,generator:w.generator,version:w.version,base:B,count:_}});e.clone().invert().decompose(this.translateToAccumulator.value,this.rotateToAccumulator.value,new Q),g.ensureGenerate(x),g.splats.splatEncoding={...this.splatEncoding},g.generateSplats({renderer:this.renderer,modifier:this.modifier,generators:b,forceUpdate:m,originToWorld:e}),g.splatsVersion=this.active.splatsVersion+1;const S=g.hasCorrespondence(this.active);g.mappingVersion=this.active.mappingVersion+(S?0:1),this.releaseAccumulator(this.active),this.active=g,this.prepareViewpoint()}return setTimeout(()=>{for(const m of this.autoViewpoints)m.autoPoll({accumulator:g??void 0})},1),!0}compileScene(t){const e=[];t.traverse(r=>{r instanceof Go&&e.push(r)});const n=[];t.traverseVisible(r=>{r instanceof Go&&n.push(r)});const s=new Set;return t.traverseVisible(r=>{if(r instanceof Zc){let a=r.parent;for(;a!=null&&!(a instanceof lA);)a=a.parent;a==null&&s.add(r)}}),{generators:e,visibleGenerators:n,globalEdits:Array.from(s)}}async renderEnvMap({renderer:t,scene:e,worldCenter:n,size:s=256,near:r=.1,far:a=1e3,hideObjects:o=[],update:l=!1}){var A,h;if(this.envViewpoint||(this.envViewpoint=this.newViewpoint({sort360:!0})),!Te.cubeRender||Te.cubeRender.target.width!==s||Te.cubeRender.near!==r||Te.cubeRender.far!==a){Te.cubeRender&&Te.cubeRender.target.dispose();const m=new fc(s,{format:Be,generateMipmaps:!0,minFilter:jh}),f=new uc(r,a,m);Te.cubeRender={target:m,camera:f,near:r,far:a}}Te.pmrem||(Te.pmrem=new No(t??this.renderer));const c=new Xt().setPosition(n);await((A=this.envViewpoint)==null?void 0:A.prepare({scene:e,viewToWorld:c,update:l}));const{target:d,camera:p}=Te.cubeRender;p.position.copy(n);const g=new Map;for(const m of o)g.set(m,m.visible),m.visible=!1;this.prepareViewpoint(this.envViewpoint),p.update(t??this.renderer,e),this.prepareViewpoint(this.defaultView);for(const[m,f]of g.entries())m.visible=f;return(h=Te.pmrem)==null?void 0:h.fromCubemap(d.texture).texture}recurseSetEnvMap(t,e){t.traverse(n=>{if(n instanceof He)if(Array.isArray(n.material))for(const s of n.material)s instanceof JA&&(s.envMap=e);else n.material instanceof JA&&(n.material.envMap=e)})}getRgba({generator:t,rgba:e}){const n=this.active.mapping.find(({node:s})=>s===t);if(!n)throw new Error("Generator not found");return e=e??new kI,e.fromPackedSplats({packedSplats:this.active.splats,base:n.base,count:n.count,renderer:this.renderer}),e}async readRgba({generator:t,rgba:e}){return e=this.getRgba({generator:t,rgba:e}),e.read()}};Xr.cubeRender=null;Xr.pmrem=null;Xr.EMPTY_SPLAT_TEXTURE=new ac;let Ol=Xr;const Hl=new Ho(new Uint32Array(1),0);qn({packedSplats:Vr,index:"int"},{gsplat:xe},({packedSplats:i,index:t})=>{if(!i||!t)throw new Error("Invalid input");return{gsplat:ys(i,t)}});function MC(i){if(i.length===0)return null;const t=new Q,e=new de,n=new Q,s=[],r=[];for(const a of i)a.decompose(t,e,n),s.push(t),r.push(e);return new Xt().compose(aI(s),oI(r),new Q(1,1,1))}Je(`
  struct GsplatSkinning {
    int numSplats;
    int numBones;
    usampler2DArray skinTexture;
    sampler2D boneTexture;
  };
`);Je(`
  void applyGsplatSkinning(
    int numSplats, int numBones,
    usampler2DArray skinTexture, sampler2D boneTexture,
    int splatIndex, inout vec3 center, inout vec4 quaternion
  ) {
    if ((splatIndex < 0) || (splatIndex >= numSplats)) {
      return;
    }

    uvec4 skinData = texelFetch(skinTexture, splatTexCoord(splatIndex), 0);

    float weights[4];
    weights[0] = float(skinData.x & 0xffu) / 255.0;
    weights[1] = float(skinData.y & 0xffu) / 255.0;
    weights[2] = float(skinData.z & 0xffu) / 255.0;
    weights[3] = float(skinData.w & 0xffu) / 255.0;

    uint boneIndices[4];
    boneIndices[0] = (skinData.x >> 8u) & 0xffu;
    boneIndices[1] = (skinData.y >> 8u) & 0xffu;
    boneIndices[2] = (skinData.z >> 8u) & 0xffu;
    boneIndices[3] = (skinData.w >> 8u) & 0xffu;

    vec4 quat = vec4(0.0);
    vec4 dual = vec4(0.0);
    for (int i = 0; i < 4; i++) {
      if (weights[i] > 0.0) {
        int boneIndex = int(boneIndices[i]);
        vec4 boneQuat = vec4(0.0, 0.0, 0.0, 1.0);
        vec4 boneDual = vec4(0.0);
        if (boneIndex < numBones) {
          boneQuat = texelFetch(boneTexture, ivec2(2, boneIndex), 0);
          boneDual = texelFetch(boneTexture, ivec2(3, boneIndex), 0);
        }

        if ((i > 0) && (dot(quat, boneQuat) < 0.0)) {
          // Flip sign if next blend is pointing in the opposite direction
          boneQuat = -boneQuat;
          boneDual = -boneDual;
        }
        quat += weights[i] * boneQuat;
        dual += weights[i] * boneDual;
      }
    }

    // Normalize dual quaternion
    float norm = length(quat);
    quat /= norm;
    dual /= norm;
    vec3 translate = vec3(
      2.0 * (-dual.w * quat.x + dual.x * quat.w - dual.y * quat.z + dual.z * quat.y),
      2.0 * (-dual.w * quat.y + dual.x * quat.z + dual.y * quat.w - dual.z * quat.x),
      2.0 * (-dual.w * quat.z - dual.x * quat.y + dual.y * quat.x + dual.z * quat.w)
    );

    center = quatVec(quat, center) + translate;
    quaternion = quatQuat(quat, quaternion);
  }
`);new ri(new Q(-1,-1,-1),new Q(1,1,1)),new Q(-1,-3,1).normalize(),new zt(1,1,1),new zt(.5,.5,1),new Q(1,1,1);new ri(new Q(-2,-1,-2),new Q(2,5,2)),new Q(0,-1,0),new zt(1,1,1),new zt(.25,.25,.5),new Q(.1,1,.1);const lh=class Yo{static createButton(t,e={}){const n=navigator.xr;if(!n)return null;const s=n,r=document.createElement("button");t.xr.enabled=!0,t.xr.setReferenceSpaceType("local");function a(){let c=null;async function d(m){console.log("onSessionStarted"),m.addEventListener("end",p),await t.xr.setSession(m),r.textContent="EXIT VR",c=m}function p(){console.log("onSessionEnded"),c?.removeEventListener("end",p),r.textContent="ENTER VR",c=null}r.style.display="",r.style.cursor="pointer",r.style.left="calc(50% - 100px)",r.style.width="200px",r.style.height="100px",r.textContent="ENTER VR";const g={...e,optionalFeatures:[...e.optionalFeatures||[]]};r.onmouseenter=()=>{r.style.opacity="1.0"},r.onmouseleave=()=>{r.style.opacity="0.5"},r.onclick=()=>{c===null?(console.log("requesting session"),s.requestSession("immersive-vr",g).then(d)):(console.log("ending session"),c.end())}}function o(){r.style.display="none",r.style.cursor="auto",r.style.left="calc(50% - 75px)",r.style.width="150px",r.onmouseenter=null,r.onmouseleave=null,r.onclick=null}function l(){o(),r.textContent="VR NOT SUPPORTED"}function A(c){o(),console.warn("Exception when trying to call xr.isSessionSupported",c),r.textContent="VR NOT ALLOWED"}function h(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}return r.id="VRButton",r.style.display="none",h(r),s.isSessionSupported("immersive-vr").then(c=>{c?a():l(),c&&Yo.xrSessionIsGranted&&r.click()}).catch(A),r}static registerSessionGrantedListener(){const t=navigator.xr;if(!t)return null;const e=t;/WebXRViewer\//i.test(navigator.userAgent)||e.addEventListener("sessiongranted",()=>{Yo.xrSessionIsGranted=!0})}};lh.xrSessionIsGranted=!1;let QC=lh;QC.registerSessionGrantedListener();var ch=(i=>(i.w="wrist",i.t0="thumb-metacarpal",i.t1="thumb-phalanx-proximal",i.t2="thumb-phalanx-distal",i.t3="thumb-tip",i.i0="index-finger-metacarpal",i.i1="index-finger-phalanx-proximal",i.i2="index-finger-phalanx-intermediate",i.i3="index-finger-phalanx-distal",i.i4="index-finger-tip",i.m0="middle-finger-metacarpal",i.m1="middle-finger-phalanx-proximal",i.m2="middle-finger-phalanx-intermediate",i.m3="middle-finger-phalanx-distal",i.m4="middle-finger-tip",i.r0="ring-finger-metacarpal",i.r1="ring-finger-phalanx-proximal",i.r2="ring-finger-phalanx-intermediate",i.r3="ring-finger-phalanx-distal",i.r4="ring-finger-tip",i.p0="pinky-finger-metacarpal",i.p1="pinky-finger-phalanx-proximal",i.p2="pinky-finger-phalanx-intermediate",i.p3="pinky-finger-phalanx-distal",i.p4="pinky-finger-tip",i))(ch||{});const TC=Object.keys(ch);TC.length;new Q(0,0,-1),new Q(0,0,1),new Q(-1,0,0),new Q(1,0,0),new Q(0,1,0),new Q(0,-1,0);new Q(0,0,-1),new Q(0,0,1),new Q(-1,0,0),new Q(1,0,0),new Q(0,1,0),new Q(0,-1,0);new Q(0,0,1),new Q(0,0,-1);new Q(0,-1,0),new Q(0,1,0),new Q(-1,0,0),new Q(1,0,0);const oe=new Nm({antialias:!0});oe.setPixelRatio(Math.min(window.devicePixelRatio,1.5));oe.setSize(window.innerWidth,window.innerHeight);Object.assign(oe.domElement.style,{position:"fixed",inset:"0",touchAction:"none",display:"block"});document.body.appendChild(oe.domElement);const Fs=new Km;Fs.setSize(window.innerWidth,window.innerHeight);Object.assign(Fs.domElement.style,{position:"fixed",inset:"0",pointerEvents:"none"});document.body.appendChild(Fs.domElement);const dA=document.createElement("div");dA.style.cssText=`
  position:absolute; top:12px; right:12px; width:300px; max-height:80vh; overflow:auto;
  font: 13px system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color:#eaeaea; 
  background: rgba(20,20,20,0.7); border:1px solid #2a2a2a; border-radius:10px; padding:10px;
  backdrop-filter:saturate(120%) blur(6px); z-index:10;
`;dA.innerHTML=`
  <div style="display:flex; gap:8px; align-items:center; margin-bottom:6px;">
    <strong style="font-size:14px;">Annotations</strong>
    <button id="exportBtn" style="margin-left:auto;">Export</button>
    <button id="importBtn">Import</button>
    <input id="importFile" type="file" accept="application/json" style="display:none"/>
  </div>
  <div style="display:flex; gap:6px; margin-bottom:8px;">
    <input id="titleInput" placeholder="Title"/>
  </div>
  <div style="display:flex; gap:6px">
    <textarea id="bodyInput" placeholder="Description" rows="3"></textarea>
  </div>
  <div style="display:flex; gap:6px; margin-top:6px;">
    <button id="addAtCenterBtn">Add at center</button>
    <button id="addOnClickBtn">Add on click</button>
  </div>
  <div id="list" style="margin-top:10px; display:grid; gap:8px;"></div>
`;document.body.appendChild(dA);const hh=document.createElement("style");hh.textContent=`
  .label {
    pointer-events:auto;
    background:rgba(10,10,10,0.85);
    color:#f2f2f2;
    border:1px solid #2f2f2f;
    border-radius:8px;
    padding:6px 8px;
    max-width:220px;
    box-shadow:0 2px 10px rgba(0,0,0,0.35);
    transform:translateY(-6px);
    line-height:1.25;
  }
  .label .hdr { font-weight:600; margin-bottom:2px; }
  .label .desc { font-size:12px; opacity:0.9; white-space:pre-wrap; }
  .label .chip { font-size:10px; opacity:0.7; }
  button { background:#2a2a2a; color:#e2e2e2; border:1px solid #3a3a3a; border-radius:8px; padding:6px 8px; cursor:pointer; }
  button:hover { filter:brightness(1.1); }
  input, textarea { background:#111; color:#eaeaea; border:1px solid #2d2d2d; border-radius:8px; width:100%; }
`;document.head.appendChild(hh);const an=new Nu;an.background=new zt(1118481);const Re=new Oe(60,window.innerWidth/window.innerHeight,.01,1e3);Re.position.set(0,0,2);const mn=new Um(Re,oe.domElement);mn.enableDamping=!0;const DC="/assets/dormtest.ply",_r=new lA({url:DC});an.add(_r);mn.target.set(.1,0,-.35);Re.position.set(0,0,.6);Re.lookAt(mn.target);mn.update();const RC=new as(.02,.02,.02),NC=new tA({color:16711680}),fA=new He(RC,NC);fA.position.copy(mn.target);fA.visible=!0;an.add(fA);const pA="dormtest.ply",ii=[];function FC(i,t,e){const n=document.createElement("div");return n.className="label",n.innerHTML=`
    <div class="hdr">${i||"Untitled"}</div>
    <div class="desc">${t||""}</div>
    <div class="chip">#${e+1}</div>
  `,n}function gA(i,t,e){const n=ii.length,s=FC(t,e,n),r=new Xm(s);r.position.copy(i);const a=new on().setFromPoints([i.clone(),i.clone()]),o=new gc({color:16777215,depthTest:!1,transparent:!0,opacity:.9}),l=new Gu(a,o);l.renderOrder=999,an.add(r),an.add(l);const A={id:crypto.randomUUID(),world:i.toArray(),title:t||"",body:e||"",label:r,leader:l,created:Date.now(),updated:Date.now()};return ii.push(A),Rr(),A}function UC(i){const t=new Q().fromArray(i.world),e=t.clone().sub(Re.position).normalize(),n=new Q().crossVectors(e,Re.up).normalize(),s=new Q().crossVectors(n,e).normalize(),r=t.clone().add(n.multiplyScalar(.12)).add(s.multiplyScalar(.06));i.label.position.copy(r);const a=i.leader.geometry.attributes.position.array;a[0]=t.x,a[1]=t.y,a[2]=t.z,a[3]=r.x-.01,a[4]=r.y,a[5]=r.z,i.leader.geometry.attributes.position.needsUpdate=!0}function Rr(){const i=document.getElementById("list");i.innerHTML="",ii.forEach((t,e)=>{const n=document.createElement("div");n.style.display="flex",n.style.gap="6px",n.style.alignItems="center",n.innerHTML=`
      <div style="display:flex; flex-direction:column; gap:2px; max-width:200px;">
        <div style="font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.title||"Untitled"}</div>
        <div style="font-size:12px; opacity:0.8; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.body||""}</div>
      </div>
      <button data-act="fly">Fly</button>
      <button data-act="edit">Edit</button>
      <button data-act="del">Delete</button>
    `,n.querySelector('[data-act="fly"]').onclick=()=>{const s=new Q().fromArray(t.world);mn.target.copy(s),Re.position.copy(s.clone().add(new Q(0,0,.6))),mn.update()},n.querySelector('[data-act="edit"]').onclick=()=>{const s=prompt("Title",t.title)??t.title,r=prompt("Description",t.body)??t.body;t.title=s,t.body=r,t.updated=Date.now(),t.label.element.querySelector(".hdr").textContent=s||"Untitled",t.label.element.querySelector(".desc").textContent=r||"",Rr(),Nr()},n.querySelector('[data-act="del"]').onclick=()=>{an.remove(t.label),an.remove(t.leader),ii.splice(e,1),ii.forEach((s,r)=>{const a=s.label.element.querySelector(".chip");a&&(a.textContent=`#${r+1}`)}),Rr(),Nr()},i.appendChild(n)})}const LC=oe.capabilities.isWebGL2&&!!oe.extensions.get("EXT_color_buffer_float"),Vo=new pn(1,1,{type:_n,format:Be,depthBuffer:!0,stencilBuffer:!1});Vo.texture.name="pickTarget";const PC=new rn({name:"SplatPickMaterial",vertexShader:`
    uniform mat4 modelMatrix;
    uniform mat4 viewMatrix;
    uniform mat4 projectionMatrix;
    attribute vec3 position;
    varying vec3 vWorld;
    void main() {
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vWorld = wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
      // Note: This treats each splat as a point at its mean. Good match if means lie on the apparent surface.
    }
  `,fragmentShader:`
    precision highp float;
    varying vec3 vWorld;
    void main() {
      gl_FragColor = vec4(vWorld, 1.0);
    }
  `,blending:Gn,depthTest:!0,depthWrite:!0,transparent:!1});function kC(i,t){if(!LC)return null;const e=oe.domElement.getBoundingClientRect(),n=oe.getPixelRatio(),s=Math.floor((i-e.left)*n),r=Math.floor((e.bottom-t)*n),a=new wt;oe.getDrawingBufferSize(a);const o=oe.getClearColor(new zt).clone(),l=oe.getClearAlpha(),A=_r.material;_r.material=PC,Re.setViewOffset(a.x,a.y,s,r-1,1,1),oe.setRenderTarget(Vo),oe.setClearColor(0,0),oe.clear(!0,!0,!0),oe.render(an,Re);const h=new Float32Array(4);if(oe.readRenderTargetPixels(Vo,0,0,1,1,h),Re.clearViewOffset(),_r.material=A,oe.setRenderTarget(null),oe.setClearColor(o,l),h[3]===0)return null;const c=new Q(h[0],h[1],h[2]);return!Number.isFinite(c.x)||!Number.isFinite(c.y)||!Number.isFinite(c.z)?null:c}const Yl=new Xu,uh=new Pn(new Q(0,0,-1),0);let qo=!1;document.getElementById("addOnClickBtn").onclick=()=>{qo=!0;const i=new Q().subVectors(Re.position,mn.target).normalize();uh.setFromNormalAndCoplanarPoint(i,mn.target)};oe.domElement.addEventListener("click",i=>{if(!qo)return;let t=kC(i.clientX,i.clientY);if(!t){const e=new wt(i.clientX/oe.domElement.clientWidth*2-1,-(i.clientY/oe.domElement.clientHeight)*2+1);Yl.setFromCamera(e,Re),t=new Q,Yl.ray.intersectPlane(uh,t)||(t=null)}if(t){const e=document.getElementById("titleInput").value.trim(),n=document.getElementById("bodyInput").value.trim();gA(t,e,n),Nr()}qo=!1});document.getElementById("addAtCenterBtn").onclick=()=>{const i=document.getElementById("titleInput").value.trim(),t=document.getElementById("bodyInput").value.trim();gA(mn.target.clone(),i,t),Nr()};function Kr(){return`ann-${pA}`}function Nr(){const i={assetName:pA,version:1,annotations:ii.map(t=>({id:t.id,world:t.world,title:t.title,body:t.body,created:t.created,updated:t.updated}))};localStorage.setItem(Kr(),JSON.stringify(i))}function dh(){const i=localStorage.getItem(Kr());if(i)try{(JSON.parse(i).annotations||[]).forEach(e=>{const n=gA(new Q().fromArray(e.world),e.title,e.body);n.id=e.id,n.created=e.created,n.updated=e.updated}),Rr()}catch{}}dh();document.getElementById("exportBtn").onclick=()=>{const i=new Blob([localStorage.getItem(Kr())||"{}"],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=`${pA}.annotations.json`,t.click(),URL.revokeObjectURL(t.href)};document.getElementById("importBtn").onclick=()=>document.getElementById("importFile").click();document.getElementById("importFile").onchange=async i=>{const t=i.target.files?.[0];if(!t)return;const e=await t.text();localStorage.setItem(Kr(),e),ii.splice(0).forEach(n=>{an.remove(n.label),an.remove(n.leader)}),dh()};function GC(){Re.aspect=window.innerWidth/window.innerHeight,Re.updateProjectionMatrix(),oe.setSize(window.innerWidth,window.innerHeight),Fs.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",GC);oe.setAnimationLoop(()=>{ii.forEach(UC),mn.update(),oe.render(an,Re),Fs.render(an,Re)});
