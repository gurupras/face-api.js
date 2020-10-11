!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("crypto")):"function"==typeof define&&define.amd?define(["exports","crypto"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).faceapi=t.faceapi||{},t.crypto)}(this,(function(t,e){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(e);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class o{time(t){return a("time")}read(t){return a("read")}readSync(t){return a("readSync")}numDataIds(){return a("numDataIds")}disposeData(t){return a("disposeData")}write(t,e,n){return a("write")}move(t,e,n,r){return a("move")}memory(){return a("memory")}floatPrecision(){return a("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}batchMatMul(t,e,n,r){return a("batchMatMul")}fusedBatchMatMul({a:t,b:e,transposeA:n,transposeB:r,bias:o,activation:s,preluActivationWeights:i}){return a("fusedBatchMatMul")}slice(t,e,n){return a("slice")}stridedSlice(t,e,n,r){return a("stridedSlice")}unstack(t,e){return a("unstack")}reverse(t,e){return a("reverse")}concat(t,e){return a("concat")}neg(t){return a("neg")}add(t,e){return a("add")}addN(t){return a("addN")}subtract(t,e){return a("subtract")}multiply(t,e){return a("multiply")}realDivide(t,e){return a("realDivide")}floorDiv(t,e){return a("floorDiv")}sum(t,e){return a("sum")}prod(t,e){return a("prod")}unsortedSegmentSum(t,e,n){return a("unsortedSegmentSum")}argMin(t,e){return a("argMin")}argMax(t,e){return a("argMax")}equal(t,e){return a("equal")}notEqual(t,e){return a("notEqual")}less(t,e){return a("less")}lessEqual(t,e){return a("lessEqual")}greater(t,e){return a("greater")}greaterEqual(t,e){return a("greaterEqual")}logicalNot(t){return a("logicalNot")}logicalAnd(t,e){return a("logicalAnd")}logicalOr(t,e){return a("logicalOr")}where(t){return a("where")}select(t,e,n){return a("select")}topk(t,e,n){return a("topk")}min(t,e){return a("min")}minimum(t,e){return a("minimum")}mod(t,e){return a("mod")}max(t,e){return a("max")}maximum(t,e){return a("maximum")}all(t,e){return a("all")}any(t,e){return a("any")}squaredDifference(t,e){return a("squaredDifference")}ceil(t){return a("ceil")}floor(t){return a("floor")}round(t){return a("round")}sign(t){return a("sign")}isNaN(t){return a("isNaN")}isInf(t){return a("isInf")}isFinite(t){return a("isFinite")}pow(t,e){return a("pow")}exp(t){return a("exp")}expm1(t){return a("expm1")}softmax(t,e){return a("softmax")}log(t){return a("log")}log1p(t){return a("log1p")}sqrt(t){return a("sqrt")}rsqrt(t){return a("rsqrt")}square(t){return a("square")}reciprocal(t){return a("reciprocal")}relu(t){return a("relu")}relu6(t){return a("relu6")}prelu(t,e){return a("prelu")}elu(t){return a("elu")}eluDer(t,e){return a("eluDer")}selu(t){return a("selu")}int(t){return a("int")}clip(t,e,n){return a("clip")}abs(t){return a("abs")}complexAbs(t){return a("complexAbs")}sigmoid(t){return a("sigmoid")}softplus(t){return a("softplus")}sin(t){return a("sin")}cos(t){return a("cos")}tan(t){return a("tan")}asin(t){return a("asin")}acos(t){return a("acos")}atan(t){return a("atan")}atan2(t,e){return a("atan2")}sinh(t){return a("sinh")}cosh(t){return a("cosh")}tanh(t){return a("tanh")}asinh(t){return a("asinh")}acosh(t){return a("acosh")}atanh(t){return a("atanh")}erf(t){return a("erf")}step(t,e){return a("step")}fusedConv2d({input:t,filter:e,convInfo:n,bias:r,activation:o,preluActivationWeights:s}){return a("fusedConv2d")}conv2d(t,e,n){return a("conv2d")}conv2dDerInput(t,e,n){return a("conv2dDerInput")}conv2dDerFilter(t,e,n){return a("conv2dDerFilter")}fusedDepthwiseConv2D({input:t,filter:e,convInfo:n,bias:r,activation:o,preluActivationWeights:s}){return a("fusedDepthwiseConv2D")}depthwiseConv2D(t,e,n){return a("depthwiseConv2D")}depthwiseConv2DDerInput(t,e,n){return a("depthwiseConv2DDerInput")}depthwiseConv2DDerFilter(t,e,n){return a("depthwiseConv2DDerFilter")}conv3d(t,e,n){return a("conv3d")}conv3dDerInput(t,e,n){return a("conv3dDerInput")}conv3dDerFilter(t,e,n){return a("conv3dDerFilter")}maxPool(t,e){return a("maxPool")}maxPoolBackprop(t,e,n,r){return a("maxPoolBackprop")}avgPool(t,e){return a("avgPool")}avgPoolBackprop(t,e,n){return a("avgPoolBackprop")}avgPool3d(t,e){return a("avgPool3d")}avgPool3dBackprop(t,e,n){return a("avgPool3dBackprop")}maxPool3d(t,e){return a("maxPool3d")}maxPool3dBackprop(t,e,n,r){return a("maxPool3dBackprop")}reshape(t,e){return a("reshape")}cast(t,e){return a("cast")}tile(t,e){return a("tile")}pad(t,e,n){return a("pad")}transpose(t,e){return a("transpose")}gather(t,e,n){return a("gather")}gatherND(t,e){return a("gatherND")}scatterND(t,e,n){return a("scatterND")}batchToSpaceND(t,e,n){return a("batchToSpaceND")}spaceToBatchND(t,e,n){return a("spaceToBatchND")}resizeBilinear(t,e,n,r){return a("resizeBilinear")}resizeBilinearBackprop(t,e,n){return a("resizeBilinearBackprop")}resizeNearestNeighbor(t,e,n,r){return a("resizeNearestNeighbor")}resizeNearestNeighborBackprop(t,e,n){return a("resizeNearestNeighborBackprop")}batchNorm(t,e,n,r,o,s){return a("batchNorm")}localResponseNormalization4D(t,e,n,r,o){return a("localResponseNormalization4D")}LRNGrad(t,e,n,r,o,s,i){return a("LRNGrad")}multinomial(t,e,n,r){return a("multinomial")}oneHot(t,e,n,r){return a("oneHot")}cumsum(t,e,n,r){return a("cumsum")}nonMaxSuppression(t,e,n,r,o){return a("nonMaxSuppression")}fft(t){return a("fft")}ifft(t){return a("ifft")}complex(t,e){return a("complex")}real(t){return a("real")}imag(t){return a("imag")}cropAndResize(t,e,n,r,o,s){return a("cropAndResize")}depthToSpace(t,e,n){return a("depthToSpace")}split(t,e,n){return a("split")}sparseToDense(t,e,n,r){return a("sparseToDense")}diag(t){return a("diag")}fill(t,e,n){return a("fill")}onesLike(t){return a("onesLike")}zerosLike(t){return a("zerosLike")}linspace(t,e,n){return a("linspace")}dispose(){return a("dispose")}}function a(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const s="tfjsflags";class i{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}setPlatform(t,e){null!=this.platform&&console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`),this.platformName=t,this.platform=e}registerFlag(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},null!=this.urlFlags[t]){const e=this.urlFlags[t];console.warn(`Setting feature override from URL ${t}: ${e}.`),this.set(t,e)}}async getAsync(t){return t in this.flags||(this.flags[t]=await this.evaluateFlag(t)),this.flags[t]}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(e instanceof Promise)throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(null==this.flagRegistry[t])throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,null!=this.flagRegistry[t].setHook&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(null==this.flagRegistry[t])throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;const t=function(t){const e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,((t,...n)=>(function(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}(e,n[0],n[1]),n.join("=")))),e}(this.global.location.search);if(s in t){t.tfjsflags.split(",").forEach((t=>{const[e,n]=t.split(":");this.urlFlags[e]=function(t,e){if("true"===(e=e.toLowerCase())||"false"===e)return"true"===e;if(""+ +e===e)return+e;throw new Error(`Could not parse value flag value ${e} for flag ${t}.`)}(e,n)}))}}}function u(){return l}let c,l=null;function h(){if(null==c){let t;if("undefined"!=typeof window)t=window;else if("undefined"!=typeof global)t=global;else if("undefined"!=typeof process)t=process;else{if("undefined"==typeof self)throw new Error("Could not find a global object");t=self}c=t}return c}function p(t,e){const n=function(){const t=h();return null==t._tfGlobals&&(t._tfGlobals=new Map),t._tfGlobals}();if(n.has(t))return n.get(t);{const r=e();return n.set(t,r),n.get(t)}}const d="Abs",f="Acos",m="Acosh",g="Add",v="AddN",b="ArgMax",y="ArgMin",w="Asin",x="Asinh",k="Atan",_="Atanh",E="Atan2",S="AvgPool",D="AvgPoolBackprop",F="AvgPool3D",I="AvgPool3DBackprop",M="BatchMatMul",N="BatchToSpaceND",T="BroadcastTo",A="Cast",P="Ceil",$="ClipByValue",C="Complex",B="Concat",R="Conv2D",L="Conv2DBackpropFilter",O="Conv2DBackpropInput",z="Conv3D",W="Conv3DBackpropFilterV2",q="Conv3DBackpropInputV2",j="Cos",G="Cosh",K="Cumsum",H="CropAndResize",U="DepthToSpace",V="DepthwiseConv2dNative",J="DepthwiseConv2dNativeBackpropFilter",Y="DepthwiseConv2dNativeBackpropInput",X="Diag",Z="Dilation2D",Q="Dilation2DBackpropInput",tt="Dilation2DBackpropFilter",et="Div",nt="Elu",rt="EluGrad",ot="Erf",at="Equal",st="Exp",it="Expm1",ut="Fill",ct="FlipLeftRight",lt="Floor",ht="FloorDiv",pt="FusedBatchNorm",dt="GatherV2",ft="GatherNd",mt="Greater",gt="GreaterEqual",vt="Identity",bt="IFFT",yt="Imag",wt="IsFinite",xt="IsInf",kt="IsNan",_t="Less",Et="LessEqual",St="LinSpace",Dt="Log",Ft="Log1p",It="LogicalAnd",Mt="LogicalNot",Nt="LogicalOr",Tt="LogSoftmax",At="LRN",Pt="LRNBackprop",$t="Max",Ct="Maximum",Bt="MaxPool",Rt="MaxPoolBackprop",Lt="MaxPool3D",Ot="MaxPool3DBackprop",zt="MaxPoolWithArgmax",Wt="Min",qt="Minimum",jt="Mod",Gt="Multiply",Kt="Negate",Ht="NotEqual",Ut="NonMaxSuppressionV3",Vt="NonMaxSuppressionV4",Jt="NonMaxSuppressionV5",Yt="OnesLike",Xt="OneHot",Zt="PadV2",Qt="Pow",te="Prelu",ee="Prod",ne="Range",re="Real",oe="Reciprocal",ae="Relu",se="Reshape",ie="ResizeNearestNeighbor",ue="ResizeNearestNeighborGrad",ce="ResizeBilinear",le="ResizeBilinearGrad",he="Relu6",pe="Reverse",de="Round",fe="Rsqrt",me="ScatterNd",ge="SelectV2",ve="Selu",be="Slice",ye="Sin",we="Sinh",xe="Sign",ke="Sigmoid",_e="Softplus",Ee="Sqrt",Se="Sum",De="SpaceToBatchND",Fe="SplitV",Ie="Softmax",Me="SquaredDifference",Ne="Square",Te="Sub",Ae="SparseToDense",Pe="StridedSlice",$e="Tan",Ce="Tanh",Be="Tile",Re="TopK",Le="Transpose",Oe="Unique",ze="Unpack",We="UnsortedSegmentSum",qe="ZerosLike",je="Step",Ge="FromPixels",Ke="RotateWithOffset",He="_FusedMatMul",Ue="FusedConv2D",Ve="FusedDepthwiseConv2D",Je=p("kernelRegistry",(()=>new Map)),Ye=p("gradRegistry",(()=>new Map));function Xe(t,e){const n=nn(t,e);return Je.get(n)}function Ze(t){return Ye.get(t)}function Qe(t){const e=Je.entries(),n=[];for(;;){const{done:r,value:o}=e.next();if(r)break;const[a,s]=o,[i]=a.split("_");i===t&&n.push(s)}return n}function tn(t){const{kernelName:e,backendName:n}=t,r=nn(e,n);Je.has(r)&&console.warn(`The kernel '${e}' for backend '${n}' is already registered`),Je.set(r,t)}function en(t){const{kernelName:e}=t;Ye.has(e)&&u().getBool("DEBUG")&&console.warn(`Overriding the gradient for '${e}'`),Ye.set(e,t)}function nn(t,e){return`${e}_${t}`}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function rn(t){let e=t.length,n=0,r=0;for(;e>0;)r=Math.random()*e|0,e--,n=t[e],t[e]=t[r],t[r]=n}function on(t,e,n){return Math.max(t,Math.min(e,n))}function an(t,e){if(!t)throw new Error("string"==typeof e?e:e())}function sn(t,e,n=""){an(hn(t,e),(()=>n+` Shapes ${t} and ${e} must match`))}function un(t){an(null!=t,(()=>"The input to the tensor constructor must be a non-null value."))}function cn(t,e=[],n=!1){if(null==e&&(e=[]),Array.isArray(t)||kn(t)&&!n)for(let r=0;r<t.length;++r)cn(t[r],e,n);else e.push(t);return e}function ln(t){if(0===t.length)return 1;let e=t[0];for(let n=1;n<t.length;n++)e*=t[n];return e}function hn(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function pn(t){return t%1==0}function dn(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function fn(t,e){let n=1,r=-1;for(let e=0;e<t.length;++e)if(t[e]>=0)n*=t[e];else if(-1===t[e]){if(-1!==r)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${e}`);r=e}else if(t[e]<0)throw Error(`Shapes can not be < 0. Found ${t[e]} at dim ${e}`);if(-1===r){if(e>0&&e!==n)throw Error(`Size(${e}) must match the product of shape ${t}`);return t}if(0===n)throw Error(`Cannot infer the missing size in [${t}] when there are 0 elements`);if(e%n!=0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${n}`);const o=t.slice();return o[r]=e/n,o}function mn(t,e){const n=e.length;return an((t=null==t?e.map(((t,e)=>e)):[].concat(t)).every((t=>t>=-n&&t<n)),(()=>`All values in axis param must be in range [-${n}, ${n}) but got axis `+t)),an(t.every((t=>pn(t))),(()=>"All values in axis param must be integers but got axis "+t)),t.map((t=>t<0?n+t:t))}function gn(t,e){const n=[],r=[],o=null!=e&&Array.isArray(e)&&0===e.length,a=null==e||o?null:mn(e,t).sort();let s=0;for(let e=0;e<t.length;++e){if(null!=a){if(a[s]===e&&1!==t[e])throw new Error(`Can't squeeze axis ${e} since its dim '${t[e]}' is not 1`);(null==a[s]||a[s]>e)&&1===t[e]&&(n.push(t[e]),r.push(e)),a[s]<=e&&s++}1!==t[e]&&(n.push(t[e]),r.push(e))}return{newShape:n,keptDims:r}}function vn(t,e){let n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else{if("bool"!==t)throw new Error("Unknown data type "+t);n=new Uint8Array(e)}return n}function bn(t,e){let n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else if("bool"===t)n=new Uint8Array(e);else{if("string"!==t)throw new Error("Unknown data type "+t);n=new Array(e)}return n}function yn(t,e){for(let n=0;n<t.length;n++){const r=t[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${e} being uploaded contains ${r}.`)}}function wn(t){return"bool"===t||"complex64"===t||"float32"===t||"int32"===t||"string"===t}function xn(t,e){return"complex64"!==e&&(("float32"!==e||"complex64"===t)&&(("int32"!==e||"float32"===t||"complex64"===t)&&("bool"!==e||"bool"!==t)))}function kn(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array}function _n(t){if("float32"===t||"int32"===t)return 4;if("complex64"===t)return 8;if("bool"===t)return 1;throw new Error("Unknown dtype "+t)}function En(t){if(null==t)return 0;let e=0;return t.forEach((t=>e+=t.length)),e}function Sn(t){return"string"==typeof t||t instanceof String}function Dn(t){return"boolean"==typeof t}function Fn(t){return"number"==typeof t}function In(t){return Array.isArray(t)?In(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array?"int32":Fn(t)?"float32":Sn(t)?"string":Dn(t)?"bool":"float32"}function Mn(t){return!!(t&&t.constructor&&t.call&&t.apply)}function Nn(t,e){for(let n=e;n<t;++n)if(t%n==0)return n;return t}function Tn(t){const e=t.length;if(e<2)return[];const n=new Array(e-1);n[e-2]=t[e-1];for(let r=e-3;r>=0;--r)n[r]=n[r+1]*t[r+1];return n}function An(t,e){if("string"===e)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=cn(t)),u().getBool("DEBUG")&&yn(t,e),function(t,e){return t instanceof Float32Array&&"float32"===e||t instanceof Int32Array&&"int32"===e||t instanceof Uint8Array&&"bool"===e}(t,e))return t;if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e){const e=new Uint8Array(t.length);for(let n=0;n<e.length;++n)0!==Math.round(t[n])&&(e[n]=1);return e}throw new Error("Unknown data type "+e)}function Pn(t,e,n){const r=new Array;if(1===e.length){const o=e[0];for(let e=0;e<o;e++)r[e]=n[t+e]}else{const o=e[0],a=e.slice(1),s=a.reduce(((t,e)=>t*e));for(let e=0;e<o;e++)r[e]=Pn(t+e*s,a,n)}return r}function $n(t,e){if(0===t.length)return e[0];const n=t.reduce(((t,e)=>t*e));if(0===n)return[];if(n!==e.length)throw new Error(`[${t}] does not match the input size ${e.length}.`);return Pn(0,t,e)}function Cn(t,e){const n=Bn(t,e);for(let t=0;t<n.length;t++)n[t]=1;return n}function Bn(t,e){if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e)return new Uint8Array(t);throw new Error("Unknown data type "+e)}function Rn(){return u().platform.now()}function Ln(t){t.forEach((e=>{an(Number.isInteger(e)&&e>=0,(()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`))}))}function On(t,e="utf-8"){return e=e||"utf-8",u().platform.encode(t,e)}function zn(t,e="utf-8"){return e=e||"utf-8",u().platform.decode(t,e)}var Wn=Object.freeze({__proto__:null,shuffle:rn,clamp:on,nearestLargerEven:function(t){return t%2==0?t:t+1},sum:function(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e},randUniform:function(t,e){const n=Math.random();return e*n+(1-n)*t},distSquared:function(t,e){let n=0;for(let r=0;r<t.length;r++){const o=Number(t[r])-Number(e[r]);n+=o*o}return n},assert:an,assertShapesMatch:sn,assertNonNull:un,flatten:cn,sizeFromShape:ln,isScalarShape:function(t){return 0===t.length},arraysEqual:hn,isInt:pn,tanh:function(t){if(null!=Math.tanh)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return-1;{const e=Math.exp(2*t);return(e-1)/(e+1)}},sizeToSquarishShape:function(t){const e=Math.ceil(Math.sqrt(t));return[e,Math.ceil(t/e)]},createShuffledIndices:function(t){const e=new Uint32Array(t);for(let n=0;n<t;++n)e[n]=n;return rn(e),e},rightPad:dn,repeatedTry:function(t,e=(t=>0),n){return new Promise(((r,o)=>{let a=0;const s=()=>{if(t())return void r();a++;const i=e(a);null!=n&&a>=n?o():setTimeout(s,i)};s()}))},inferFromImplicitShape:fn,parseAxisParam:mn,squeezeShape:gn,getTypedArrayFromDType:vn,getArrayFromDType:bn,checkConversionForErrors:yn,isValidDtype:wn,hasEncodingLoss:xn,isTypedArray:kn,bytesPerElement:_n,bytesFromStringArray:En,isString:Sn,isBoolean:Dn,isNumber:Fn,inferDtype:In,isFunction:Mn,nearestDivisor:Nn,computeStrides:Tn,createScalarValue:function(t,e){return"string"===e?On(t):An([t],e)},toTypedArray:An,toNestedArray:$n,makeOnesTypedArray:Cn,makeZerosTypedArray:Bn,makeZerosNestedTypedArray:function(t,e){const n=t.reduce(((t,e)=>t*e),1);if(null==e||"float32"===e)return $n(t,new Float32Array(n));if("int32"===e)return $n(t,new Int32Array(n));if("bool"===e)return $n(t,new Uint8Array(n));throw new Error("Unknown data type "+e)},now:Rn,assertNonNegativeIntegerDimensions:Ln,fetch:function(t,e){return u().platform.fetch(t,e)},encodeString:On,decodeString:zn,locToIndex:function(t,e,n){if(0===e)return 0;if(1===e)return t[0];let r=t[t.length-1];for(let e=0;e<t.length-1;++e)r+=n[e]*t[e];return r},indexToLoc:function(t,e,n){if(0===e)return[];if(1===e)return[t];const r=new Array(e);for(let e=0;e<r.length-1;++e)r[e]=Math.floor(t/n[e]),t-=r[e]*n[e];return r[r.length-1]=t,r}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class qn{constructor(t,e){this.backendTimer=t,this.logger=e,null==e&&(this.logger=new Gn)}profileKernel(t,e,n){let r;const o=this.backendTimer.time((()=>{r=n()}));for(let e=0;e<r.length;e++){const n=r[e];n.data().then((e=>{jn(e,n.dtype,t)}))}return{kernelName:t,outputs:r,inputs:e,timeMs:o.then((t=>t.kernelMs)),extraInfo:o.then((t=>null!=t.getExtraProfileInfo?t.getExtraProfileInfo():""))}}logKernelProfile(t){const{kernelName:e,outputs:n,timeMs:r,inputs:o,extraInfo:a}=t;n.forEach((t=>{Promise.all([t.data(),r,a]).then((n=>{this.logger.logKernelProfile(e,t,n[0],n[1],o,n[2])}))}))}}function jn(t,e,n){if("float32"!==e)return!1;for(let e=0;e<t.length;e++){const r=t[e];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}class Gn{logKernelProfile(t,e,n,r,o,a){const s="number"==typeof r?dn(r+"ms",9):r.error,i=dn(t,25),u=e.rank,c=e.size,l=dn(e.shape.toString(),14);let h="";for(const t in o){const n=o[t];if(null!=n){const r=n.shape||e.shape,o=r.length;h+=`${t}: ${o}D ${o>0?r:""} `}}console.log(`%c${i}\t%c${s}\t%c${u}D ${l}\t%c${c}\t%c${h}\t%c${a}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Kn(t,e,n,r){const o=Tn(e),a=function(t,e,n,r){const o=ln(e),a=r[r.length-1],s=new Array(a).fill(0),i=e.length,u="complex64"===n?Jn(t):t;if(i>1)for(let t=0;t<o/a;t++){const e=t*a;for(let t=0;t<a;t++)s[t]=Math.max(s[t],Hn(u[e+t],0,n).length)}return s}(t,e,n,o),s=e.length,i=Vn(t,e,n,o,a),u=["Tensor"];return r&&(u.push("  dtype: "+n),u.push("  rank: "+s),u.push(`  shape: [${e}]`),u.push("  values:")),u.push(i.map((t=>"    "+t)).join("\n")),u.join("\n")}function Hn(t,e,n){let r;return r=Array.isArray(t)?parseFloat(t[0].toFixed(7))+" + "+parseFloat(t[1].toFixed(7))+"j":Sn(t)?`'${t}'`:"bool"===n?Un(t):parseFloat(t.toFixed(7)).toString(),dn(r,e)}function Un(t){return 0===t?"false":"true"}function Vn(t,e,n,r,o,a=!0){const s="complex64"===n?2:1,i=e[0],u=e.length;if(0===u){if("complex64"===n){return[Hn(Jn(t)[0],0,n)]}return"bool"===n?[Un(t[0])]:[t[0].toString()]}if(1===u){if(i>20){const e=3*s;let r=Array.from(t.slice(0,e)),a=Array.from(t.slice((i-3)*s,i*s));return"complex64"===n&&(r=Jn(r),a=Jn(a)),["["+r.map(((t,e)=>Hn(t,o[e],n))).join(", ")+", ..., "+a.map(((t,e)=>Hn(t,o[i-3+e],n))).join(", ")+"]"]}return["["+("complex64"===n?Jn(t):Array.from(t)).map(((t,e)=>Hn(t,o[e],n))).join(", ")+"]"]}const c=e.slice(1),l=r.slice(1),h=r[0]*s,p=[];if(i>20){for(let e=0;e<3;e++){const r=e*h,a=r+h;p.push(...Vn(t.slice(r,a),c,n,l,o,!1))}p.push("...");for(let e=i-3;e<i;e++){const r=e*h,a=r+h;p.push(...Vn(t.slice(r,a),c,n,l,o,e===i-1))}}else for(let e=0;e<i;e++){const r=e*h,a=r+h;p.push(...Vn(t.slice(r,a),c,n,l,o,e===i-1))}const d=2===u?",":"";p[0]="["+p[0]+d;for(let t=1;t<p.length-1;t++)p[t]=" "+p[t]+d;let f=",\n";for(let t=2;t<u;t++)f+="\n";return p[p.length-1]=" "+p[p.length-1]+"]"+(a?"":f),p}function Jn(t){const e=[];for(let n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class Yn{constructor(t,e,n){if(this.dtype=e,this.shape=t.slice(),this.size=ln(t),null!=n){const t=n.length;an(t===this.size,(()=>`Length of values '${t}' does not match the size inferred by the shape '${this.size}'.`))}if("complex64"===e)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||bn(e,this.size),this.strides=Tn(t)}set(t,...e){0===e.length&&(e=[0]),an(e.length===this.rank,(()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`));const n=this.locToIndex(e);this.values[n]=t}get(...t){0===t.length&&(t=[0]);let e=0;for(const n of t){if(n<0||n>=this.shape[e]){const e=`Requested out of range element at ${t}.   Buffer shape=`+this.shape;throw new Error(e)}e++}let n=t[t.length-1];for(let e=0;e<t.length-1;++e)n+=this.strides[e]*t[e];return this.values[n]}locToIndex(t){if(0===this.rank)return 0;if(1===this.rank)return t[0];let e=t[t.length-1];for(let n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e}indexToLoc(t){if(0===this.rank)return[];if(1===this.rank)return[t];const e=new Array(this.shape.length);for(let n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return Xn().makeTensor(this.values,this.shape,this.dtype)}}let Xn=null,Zn=null;class Qn{constructor(t,e,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=ln(t),this.strides=Tn(t),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Zn.buffer(this.shape,this.dtype,t)}bufferSync(){return Zn.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return $n(this.shape,t)}arraySync(){return $n(this.shape,this.dataSync())}async data(){this.throwIfDisposed();const t=Xn().read(this.dataId);if("string"===this.dtype){const e=await t;try{return e.map((t=>zn(t)))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataSync(){this.throwIfDisposed();const t=Xn().readSync(this.dataId);if("string"===this.dtype)try{return t.map((t=>zn(t)))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await Xn().read(this.dataId);return"string"===this.dtype?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(Xn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Zn.print(this,t)}clone(){return this.throwIfDisposed(),Zn.clone(this)}toString(t=!1){return Kn(this.dataSync(),this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Zn.cast(this,t)}variable(t=!0,e,n){return this.throwIfDisposed(),Xn().makeVariable(this,t,e,n)}}Object.defineProperty(Qn,Symbol.hasInstance,{value:t=>!!t&&null!=t.data&&null!=t.dataSync&&null!=t.throwIfDisposed});class tr extends Qn{constructor(t,e,n,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=e,this.name=n}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!hn(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Xn().disposeTensor(this),this.dataId=t.dataId,Xn().incRef(this,null)}dispose(){Xn().disposeVariable(this),this.isDisposedInternal=!0}}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
var er,nr,rr,or,ar;Object.defineProperty(tr,Symbol.hasInstance,{value:t=>t instanceof Qn&&null!=t.assign&&t.assign instanceof Function}),function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"}(er||(er={})),function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"}(nr||(nr={})),function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"}(rr||(rr={})),function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"}(or||(or={})),function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"}(ar||(ar={}));const sr={float32:or,int32:nr,bool:rr,complex64:ar};function ir(t,e){if("string"===t||"string"===e){if("string"===t&&"string"===e)return"string";throw new Error(`Can not upcast ${t} with ${e}`)}return sr[t][e]}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function ur(t,e){if(t.dtype===e.dtype)return[t,e];const n=ir(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function cr(t,e){an(t.dtype===e.dtype,(()=>`The dtypes of the first(${t.dtype}) and second(${e.dtype}) input must match`))}function lr(t){const e=[];return hr(t,e,new Set),e}function hr(t,e,n){if(null==t)return;if(t instanceof Qn)return void e.push(t);if(r=t,!Array.isArray(r)&&"object"!=typeof r)return;var r;const o=t;for(const t in o){const r=o[t];n.has(r)||(n.add(r),hr(r,e,n))}}var pr=Object.freeze({__proto__:null,makeTypesMatch:ur,assertTypesMatch:cr,isTensorInList:function(t,e){return e.some((e=>e.id===t.id))},getTensorsInContainer:lr});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class dr{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class fr{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new dr}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then((()=>{}));if(null!=this.backendInstance)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const n=t[e];if(await this.initializeBackend(n).success)return void await this.setBackend(n)}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry)){if(!(t in this.registryFactory))return null;{const{asyncInit:e}=this.initializeBackend(t);if(e)return null}}return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,n=1){return t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)}async setBackend(t){if(null==this.registryFactory[t])throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,null==this.registry[t]){this.backendInstance=null;const{success:e,asyncInit:n}=this.initializeBackend(t);if(!(n?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new qn(this.backendInstance),!0}setupRegisteredKernels(){Qe(this.backendName).forEach((t=>{null!=t.setupFunc&&t.setupFunc(this.backendInstance)}))}disposeRegisteredKernels(t){Qe(t).forEach((e=>{null!=e.disposeFunc&&e.disposeFunc(this.registry[t])}))}initializeBackend(t){const e=this.registryFactory[t];if(null==e)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const n=e.factory();if(!n||n instanceof o||"function"!=typeof n.then)return this.registry[t]=n,{success:!0,asyncInit:!1};{const e=++this.pendingBackendInitId,r=n.then((n=>!(e<this.pendingBackendInitId)&&(this.registry[t]=n,this.pendingBackendInit=null,!0))).catch((n=>(e<this.pendingBackendInitId||(this.pendingBackendInit=null,console.warn(`Initialization of backend ${t} failed`),console.warn(n.stack||n.message)),!1)));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}}catch(e){return console.warn(`Initialization of backend ${t} failed`),console.warn(e.stack||e.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority))}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const n=t[e],{success:r,asyncInit:o}=this.initializeBackend(n);if(o||r)return{name:n,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const n=this.state.tensorInfo.get(e),r=n.backend,o=this.readSync(e);r.disposeData(e),n.backend=t,t.move(e,o,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let n,r=null;if(null==e){if("function"!=typeof t)throw new Error("Please provide a function to tidy()");e=t}else{if("string"!=typeof t&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof e)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}return this.scopedRun((()=>this.startScope(r)),(()=>this.endScope(n)),(()=>(n=e(),n instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n)))}scopedRun(t,e,n){t();try{const t=n();return e(),t}catch(t){throw e(),t}}nextTensorId(){return fr.nextTensorId++}nextVariableId(){return fr.nextVariableId++}clone(t){const e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],(t=>({x:()=>{const e="float32",n={x:t},r={dtype:e};return gr.runKernelFunc((n=>n.cast(t,e)),n,null,A,r)}})),[],{}),e}runKernel(t,e,n,r,o){return this.runKernelFunc(null,e,null,t,n,r,o)}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,n){const r=this.backend.numDataIds();let o=0;n.forEach((t=>{o+="complex64"===t.dtype?3:1}));const a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=r-e-o-a;if(s>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${s} data ids) after running '${t}'`)}runKernelFunc(t,e,n,r,o,a,s){let i,u=[];const c=this.isTapeOn();null==r&&(r=null!=this.state.activeScope?this.state.activeScope.name:"");const l=this.state.numBytes,h=this.state.numTensors;let p;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);const d=Xe(r,this.backendName);let f,m;if(null!=d)p=()=>{const t=this.backend.numDataIds();f=d.kernelFunc({inputs:e,attrs:o,backend:this.backend});const n=Array.isArray(f)?f:[f];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(r,t,n);const i=n.map((({dataId:t,shape:e,dtype:n})=>this.makeTensorFromDataId(t,e,n)));if(c){let t=this.getTensorsForGradient(r,e,i);if(null==t){null==s&&(s=[]);const e=i.filter(((t,e)=>s[e]));t=(a||[]).slice().concat(e)}u=this.saveTensorsForBackwardMode(t)}return i};else{const e=t=>{c&&(u=t.map((t=>this.keep(this.clone(t)))))};p=()=>{const n=this.backend.numDataIds();f=this.tidy((()=>t(this.backend,e)));const o=Array.isArray(f)?f:[f];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(r,n,o),o}}return this.scopedRun((()=>this.state.kernelDepth++),(()=>this.state.kernelDepth--),(()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(m=this.profiler.profileKernel(r,e,(()=>p())),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(m),i=m.outputs):i=p()})),c&&this.addTapeNode(r,e,i,n,u,o),this.state.profiling&&this.state.activeProfile.kernels.push({name:r,bytesAdded:this.state.numBytes-l,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-h,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map((t=>null!=e[t]?e[t].shape:null)),outputShapes:i.map((t=>t.shape)),kernelTimeMs:m.timeMs,extraInfo:m.extraInfo}),Array.isArray(f)?i:i[0]}saveTensorsForBackwardMode(t){return t.map((t=>this.keep(this.clone(t))))}getTensorsForGradient(t,e,n){const r=Ze(t);if(null!=r){const t=r.inputsToSave||[],o=r.outputsToSave||[];let a;r.saveAllInputs?(an(Array.isArray(e),(()=>"saveAllInputs is true, expected inputs to be an array.")),a=Object.keys(e).map((t=>e[t]))):a=t.map((t=>e[t]));const s=n.filter(((t,e)=>o[e]));return a.concat(s)}return null}makeTensor(t,e,n,r){if(null==t)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;let o=t;"string"===n&&Sn(t[0])&&(o=t.map((t=>On(t))));const a=r.write(o,e,n),s=new Qn(e,n,a,this.nextTensorId());if(this.incRef(s,r),"string"===n){const t=this.state.tensorInfo.get(a),e=En(o);this.state.numBytes+=e-t.bytes,t.bytes=e}return s}makeTensorFromDataId(t,e,n,r){const o=new Qn(e,n=n||"float32",t,this.nextTensorId());return this.incRef(o,r),o}makeVariable(t,e=!0,n,r){n=n||this.nextVariableId().toString(),null!=r&&r!==t.dtype&&(t=t.cast(r));const o=new tr(t,e,n,this.nextTensorId());if(null!=this.state.registeredVariables[o.name])throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}incRef(t,e){const n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,"string"===t.dtype&&this.state.numStringTensors++,0===n){this.state.numDataBuffers++;let n=0;"complex64"!==t.dtype&&"string"!==t.dtype&&(n=t.size*_n(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:n,refCount:0}),this.state.numBytes+=n}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof tr||this.track(t)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;this.state.numTensors--,"string"===t.dtype&&this.state.numStringTensors--;const e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?("complex64"!==t.dtype&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),null!=this.state.registeredVariables[t.name]&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,null==t.reasons&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map((t=>t.totalBytesSnapshot))),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n;for(const t of this.state.activeProfile.kernels)t.kernelTimeMs=await t.kernelTimeMs,t.extraInfo=await t.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(t,e,n,r,o,a){const s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:o},i=Ze(t);null!=i&&(r=i.gradFunc),null!=r&&(s.gradient=t=>(t=t.map(((t,e)=>{if(null==t){const t=n[e],r=Bn(t.size,t.dtype);return this.makeTensor(r,t.shape,t.dtype)}return t})),r(t.length>1?t:t[0],o,a))),this.state.activeTape.push(s)}keep(t){return t.kept=!0,t}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=lr(t),n=new Set(e.map((t=>t.id)));for(let t=0;t<this.state.activeScope.track.length;t++){const e=this.state.activeScope.track[t];e.kept||n.has(e.id)||e.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach((t=>{t.kept||t.scopeId!==r.id||this.track(t)}))}gradients(t,e,n,r=!1){if(an(e.length>0,(()=>"gradients() received an empty list of xs.")),null!=n&&"float32"!==n.dtype)throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);const o=this.scopedRun((()=>this.startTape()),(()=>this.endTape()),(()=>this.tidy("forward",t)));an(o instanceof Qn,(()=>"The result y returned by f() must be a tensor."));const a=function(t,e,n){const r={},o={};for(let t=0;t<e.length;t++)r[e[t].id]=!0;for(let n=0;n<t.length;n++){const a=t[n],s=a.inputs;for(const t in s){const n=s[t];let i=!1;for(let t=0;t<e.length;t++)if(r[n.id]){a.outputs.forEach((t=>r[t.id]=!0)),i=!0,o[a.id]=!0;break}if(i)break}}const a={};a[n.id]=!0;const s={};for(let e=t.length-1;e>=0;e--){const n=t[e],r=n.inputs;for(let t=0;t<n.outputs.length;t++)if(a[n.outputs[t].id]){for(const t in r)a[r[t].id]=!0,s[n.id]=!0;break}}const i=[];for(let e=0;e<t.length;e++){const n=t[e];if(o[n.id]&&s[n.id]){const t={};for(const e in n.inputs){const o=n.inputs[e];r[o.id]&&(t[e]=o)}const e=Object.assign({},n);e.inputs=t,e.outputs=n.outputs,i.push(e)}}return i}(this.state.activeTape,e,o);if(!r&&0===a.length&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(()=>{const t={};t[o.id]=null==n?function(t){const e=Cn(ln(t),"float32");return gr.makeTensor(e,t,"float32")}(o.shape):n,function(t,e,n,r){for(let o=e.length-1;o>=0;o--){const a=e[o],s=[];if(a.outputs.forEach((e=>{const n=t[e.id];null!=n?s.push(n):s.push(null)})),null==a.gradient)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const i=a.gradient(s);for(const e in a.inputs){if(!(e in i))throw new Error(`Cannot backprop through input ${e}. Available gradients found: ${Object.keys(i)}.`);const o=n((()=>i[e]()));if("float32"!==o.dtype)throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${e} must have 'float32' dtype, but has '${o.dtype}'`);const s=a.inputs[e];if(!hn(o.shape,s.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${e}' has shape '${o.shape}', which does not match the shape of the input '${s.shape}'`);if(null==t[s.id])t[s.id]=o;else{const e=t[s.id];t[s.id]=r(e,o),e.dispose()}}}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */(t,a,(t=>this.tidy(t)),vr);const r=e.map((e=>t[e.id]));return 0===this.state.gradientDepth&&(this.state.activeTape.forEach((t=>{for(const e of t.saved)e.dispose()})),this.state.activeTape=null),{value:o,grads:r}}))}customGrad(t){return an(Mn(t),(()=>"The f passed in customGrad(f) must be a function.")),(...e)=>{let n;an(e.every((t=>t instanceof Qn)),(()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors"));const r={};return e.forEach(((t,e)=>{r[e]=t})),this.runKernelFunc(((r,o)=>(n=t(...e,o),an(n.value instanceof Qn,(()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor")),an(Mn(n.gradFunc),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.")),n.value)),r,((t,r)=>{const o=n.gradFunc(t,r),a=Array.isArray(o)?o:[o];an(a.length===e.length,(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).")),an(a.every((t=>t instanceof Qn)),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."));const s={};return a.forEach(((t,e)=>{s[e]=()=>t})),s}))}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}async time(t){const e=Rn(),n=await this.backend.time(t);return n.wallMs=Rn()-e,n}track(t){return null!=this.state.activeScope&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new dr;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function mr(){const t=h();if(null==t._tfengine){const e=new i(t);t._tfengine=new fr(e)}return function(t){l=t}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */(t._tfengine.ENV),Xn=()=>t._tfengine,t._tfengine}fr.nextTensorId=0,fr.nextVariableId=0;const gr=mr();function vr(t,e){const n={a:t,b:e};return gr.runKernelFunc(((n,r)=>{const o=n.add(t,e);return r([t,e]),o}),n,null,g)}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function br(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}var yr=Object.freeze({__proto__:null,isMobile:function(){if("undefined"!=typeof navigator&&null!=navigator){const t=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1},isBrowser:br});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const wr=u();
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function xr(t,e){let n=t;if(kn(t))return"string"===e?[]:[t.length];if(!Array.isArray(t))return[];const r=[];for(;Array.isArray(n)||kn(n)&&"string"!==e;)r.push(n.length),n=n[0];return Array.isArray(t)&&u().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&kr(t,r,[]),r}function kr(t,e,n){if(n=n||[],!Array.isArray(t)&&!kn(t))return void an(0===e.length,(()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`));an(e.length>0,(()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${t.length} elements`)),an(t.length===e[0],(()=>`Element arr[${n.join("][")}] should have ${e[0]} elements, but has ${t.length} elements`));const r=e.slice(1);for(let e=0;e<t.length;++e)kr(t[e],r,n.concat(e))}function _r(t,e,n,r){if(null!=t&&("numeric"!==t&&t!==e||"numeric"===t&&"string"===e))throw new Error(`Argument '${n}' passed to '${r}' must be ${t} tensor, but got ${e} tensor`)}function Er(t,e,n,r="numeric"){if(t instanceof Qn)return _r(r,t.dtype,e,n),t;let o=In(t);if("string"!==o&&["bool","int32","float32"].indexOf(r)>=0&&(o=r),_r(r,o,e,n),null==t||!kn(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t){const r=null==t?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}const a=xr(t,o);kn(t)||Array.isArray(t)||(t=[t]);const s="string"!==o?An(t,o):cn(t,[],!0);return gr.makeTensor(s,a,o)}function Sr(t,e,n,r="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${e} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return t.map(((t,r)=>Er(t,`${e}[${r}]`,n)),r)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */wr.registerFlag("DEBUG",(()=>!1),(t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),wr.registerFlag("IS_BROWSER",(()=>br())),wr.registerFlag("IS_NODE",(()=>"undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.node)),wr.registerFlag("IS_CHROME",(()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor))),wr.registerFlag("PROD",(()=>!1)),wr.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(()=>wr.getBool("DEBUG"))),wr.registerFlag("DEPRECATION_WARNINGS_ENABLED",(()=>!0)),wr.registerFlag("IS_TEST",(()=>!1));const Dr="__op";function Fr(t){const e=Object.keys(t);if(1!==e.length)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+e.length+" keys.");let n=e[0];const r=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n+=Dr;const o=(...t)=>{gr.startScope(n);try{const e=r(...t);return e instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),gr.endScope(e),e}catch(t){throw gr.endScope(null),t}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ir=Fr({complex_:function(t,e){const n=Er(t,"real","complex"),r=Er(e,"imag","complex");sn(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const o={real:n,imag:r};return gr.runKernelFunc((t=>t.complex(n,r)),o,null,C)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Mr(t,e,n,r){if(null==r&&(r=In(t)),"complex64"===r)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!kn(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=e){Ln(e);const t=ln(e),r=ln(n);an(t===r,(()=>`Based on the provided shape, [${e}], the tensor should have ${t} values but has ${r}`));for(let t=0;t<n.length;++t){const r=n[t],o=t!==n.length-1||r!==ln(e.slice(t));an(n[t]===e[t]||!o,(()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${e}). `))}}return kn(t)||Array.isArray(t)||(t=[t]),e=e||n,t="string"!==r?An(t,r):cn(t,[],!0),gr.makeTensor(t,e,r)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Nr(t,e,n){return Mr(t,e,xr(t,n),n)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Tr={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ar(t,e){const n={};let r,o=0;for(const a of e){const e=a.name,s=a.dtype,i=a.shape,u=ln(i);let c;if("quantization"in a){const n=a.quantization;if("uint8"===n.dtype||"uint16"===n.dtype){if(!("min"in n)||!("scale"in n))throw new Error(`Weight ${a.name} with quantization ${n.dtype} doesn't have corresponding metadata min and scale.`)}else{if("float16"!==n.dtype)throw new Error(`Weight ${a.name} has unknown quantization dtype ${n.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);if("float32"!==s)throw new Error(`Weight ${a.name} is quantized with ${n.dtype} which only supports weights of type float32 not ${s}.`)}const i=Tr[n.dtype],l=t.slice(o,o+u*i),h="uint8"===n.dtype?new Uint8Array(l):new Uint16Array(l);if("float32"===s)if("uint8"===n.dtype||"uint16"===n.dtype){c=new Float32Array(h.length);for(let t=0;t<h.length;t++){const e=h[t];c[t]=e*n.scale+n.min}}else{if("float16"!==n.dtype)throw new Error(`Unsupported quantization type ${n.dtype} for weight type float32.`);void 0===r&&(r=Or()),c=r(h)}else{if("int32"!==s)throw new Error(`Unsupported dtype in weight '${e}': ${s}`);if("uint8"!==n.dtype&&"uint16"!==n.dtype)throw new Error(`Unsupported quantization type ${n.dtype} for weight type int32.`);c=new Int32Array(h.length);for(let t=0;t<h.length;t++){const e=h[t];c[t]=Math.round(e*n.scale+n.min)}}o+=u*i}else if("string"===s){const e=ln(a.shape);c=[];for(let n=0;n<e;n++){const e=new Uint32Array(t.slice(o,o+4))[0];o+=4;const n=new Uint8Array(t.slice(o,o+e));c.push(n),o+=e}}else{const r=Tr[s],a=t.slice(o,o+u*r);if("float32"===s)c=new Float32Array(a);else if("int32"===s)c=new Int32Array(a);else if("bool"===s)c=new Uint8Array(a);else{if("complex64"!==s)throw new Error(`Unsupported dtype in weight '${e}': ${s}`);{c=new Float32Array(a);const t=new Float32Array(c.length/2),r=new Float32Array(c.length/2);for(let e=0;e<t.length;e++)t[e]=c[2*e],r[e]=c[2*e+1];const o=Nr(t,i,"float32"),s=Nr(r,i,"float32");n[e]=Ir(o,s)}}o+=u*r}"complex64"!==s&&(n[e]=Nr(c,i,s))}return n}function Pr(t){if(null===t)throw new Error("Invalid input value: "+JSON.stringify(t));let e=0;const n=[];t.forEach((t=>{if(e+=t.byteLength,n.push(t.byteLength===t.buffer.byteLength?t:new t.constructor(t)),!(t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+t.constructor.name)}));const r=new Uint8Array(e);let o=0;return n.forEach((t=>{r.set(new Uint8Array(t.buffer),o),o+=t.byteLength})),r.buffer}const $r="undefined"!=typeof Buffer&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function Cr(t){return $r?Buffer.byteLength(t):new Blob([t]).size}function Br(t){if(1===t.length)return t[0];let e=0;t.forEach((t=>{e+=t.byteLength}));const n=new Uint8Array(e);let r=0;return t.forEach((t=>{n.set(new Uint8Array(t),r),r+=t.byteLength})),n.buffer}function Rr(t){for(t=t.trim();t.endsWith("/");)t=t.slice(0,t.length-1);const e=t.split("/");return e[e.length-1]}function Lr(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==t.modelTopology?0:Cr(JSON.stringify(t.modelTopology)),weightSpecsBytes:null==t.weightSpecs?0:Cr(JSON.stringify(t.weightSpecs)),weightDataBytes:null==t.weightData?0:t.weightData.byteLength}}function Or(){const t=function(){const t=t=>{let e=t<<13,n=0;for(;0==(8388608&e);)n-=8388608,e<<=1;return e&=-8388609,n+=947912704,e|n},e=new Uint32Array(2048);e[0]=0;for(let n=1;n<1024;n++)e[n]=t(n);for(let t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}(),e=function(){const t=new Uint32Array(64);t[0]=0,t[31]=1199570944,t[32]=2147483648,t[63]=3347054592;for(let e=1;e<31;e++)t[e]=e<<23;for(let e=33;e<63;e++)t[e]=2147483648+(e-32<<23);return t}(),n=function(){const t=new Uint32Array(64);for(let e=0;e<64;e++)t[e]=1024;return t[0]=t[32]=0,t}();return r=>{const o=new ArrayBuffer(4*r.length),a=new Uint32Array(o);for(let o=0;o<r.length;o++){const s=r[o],i=t[n[s>>10]+(1023&s)]+e[s>>10];a[o]=i}return new Float32Array(o)}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class zr{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==zr.instance&&(zr.instance=new zr),zr.instance}static registerSaveRouter(t){zr.getInstance().saveRouters.push(t)}static registerLoadRouter(t){zr.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return zr.getHandlers(t,"save")}static getLoadHandlers(t,e){return zr.getHandlers(t,"load",e)}static getHandlers(t,e,n){const r=[];return("load"===e?zr.getInstance().loadRouters:zr.getInstance().saveRouters).forEach((e=>{const o=e(t,n);null!==o&&r.push(o)})),r}}const Wr="tensorflowjs",qr="models_store",jr="model_info_store";function Gr(){if(!u().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t="undefined"==typeof window?self:window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(null==e)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Kr(t){const e=t.result;e.createObjectStore(qr,{keyPath:"modelPath"}),e.createObjectStore(jr,{keyPath:"modelPath"})}class Hr{constructor(t){if(this.indexedDB=Gr(),null==t||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise(((t,n)=>{const r=this.indexedDB.open(Wr,1);r.onupgradeneeded=()=>Kr(r),r.onsuccess=()=>{const o=r.result;if(null==e){const e=o.transaction(qr,"readonly"),r=e.objectStore(qr).get(this.modelPath);r.onsuccess=()=>{if(null==r.result)return o.close(),n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));t(r.result.modelArtifacts)},r.onerror=t=>(o.close(),n(r.error)),e.oncomplete=()=>o.close()}else{const r=Lr(e),a=o.transaction(jr,"readwrite");let s=a.objectStore(jr);const i=s.put({modelPath:this.modelPath,modelArtifactsInfo:r});let u;i.onsuccess=()=>{u=o.transaction(qr,"readwrite");const i=u.objectStore(qr).put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:r});i.onsuccess=()=>t({modelArtifactsInfo:r}),i.onerror=t=>{s=a.objectStore(jr);const e=s.delete(this.modelPath);e.onsuccess=()=>(o.close(),n(i.error)),e.onerror=t=>(o.close(),n(i.error))}},i.onerror=t=>(o.close(),n(i.error)),a.oncomplete=()=>{null==u?o.close():u.oncomplete=()=>o.close()}}},r.onerror=t=>n(r.error)}))}}Hr.URL_SCHEME="indexeddb://";const Ur=t=>{return u().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Hr.URL_SCHEME)?(e=t.slice(Hr.URL_SCHEME.length),new Hr(e)):null;var e};zr.registerSaveRouter(Ur),zr.registerLoadRouter(Ur);class Vr{constructor(){this.indexedDB=Gr()}async listModels(){return new Promise(((t,e)=>{const n=this.indexedDB.open(Wr,1);n.onupgradeneeded=()=>Kr(n),n.onsuccess=()=>{const r=n.result,o=r.transaction(jr,"readonly"),a=o.objectStore(jr).getAll();a.onsuccess=()=>{const e={};for(const t of a.result)e[t.modelPath]=t.modelArtifactsInfo;t(e)},a.onerror=t=>(r.close(),e(a.error)),o.oncomplete=()=>r.close()},n.onerror=t=>e(n.error)}))}async removeModel(t){var e;return t=(e=t).startsWith(Hr.URL_SCHEME)?e.slice(Hr.URL_SCHEME.length):e,new Promise(((e,n)=>{const r=this.indexedDB.open(Wr,1);r.onupgradeneeded=()=>Kr(r),r.onsuccess=()=>{const o=r.result,a=o.transaction(jr,"readwrite"),s=a.objectStore(jr),i=s.get(t);let u;i.onsuccess=()=>{if(null==i.result)return o.close(),n(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const r=s.delete(t),a=()=>{u=o.transaction(qr,"readwrite");const r=u.objectStore(qr).delete(t);r.onsuccess=()=>e(i.result.modelArtifactsInfo),r.onerror=t=>n(i.error)};r.onsuccess=a,r.onerror=t=>(a(),o.close(),n(i.error))}},i.onerror=t=>(o.close(),n(i.error)),a.oncomplete=()=>{null==u?o.close():u.oncomplete=()=>o.close()}},r.onerror=t=>n(r.error)}))}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Jr="/",Yr="tensorflowjs_models",Xr="info",Zr="model_topology",Qr="weight_specs",to="weight_data",eo="model_metadata";function no(t){return{info:[Yr,t,Xr].join(Jr),topology:[Yr,t,Zr].join(Jr),weightSpecs:[Yr,t,Qr].join(Jr),weightData:[Yr,t,to].join(Jr),modelMetadata:[Yr,t,eo].join(Jr)}}function ro(t){const e=t.split(Jr);if(e.length<3)throw new Error("Invalid key format: "+t);return e.slice(1,e.length-1).join(Jr)}class oo{constructor(t){if(!u().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==t||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=no(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),r=Lr(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(t){if($r)return Buffer.from(t).toString("base64");const e=new Uint8Array(t);let n="";for(let t=0,r=e.length;t<r;t++)n+=String.fromCharCode(e[t]);return btoa(n)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),{modelArtifactsInfo:r}}catch(t){throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(null==t)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==t.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(null==n)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=n;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==r)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=r;const o=this.LS.getItem(this.keys.modelMetadata);if(null!=o){const t=JSON.parse(o);e.format=t.format,e.generatedBy=t.generatedBy,e.convertedBy=t.convertedBy,e.userDefinedMetadata=t.userDefinedMetadata}const a=this.LS.getItem(this.keys.weightData);if(null==a)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=function(t){if($r){const e=Buffer.from(t,"base64");return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}const e=atob(t),n=new Uint8Array(e.length);for(let t=0;t<e.length;++t)n.set([e.charCodeAt(t)],t);return n.buffer}(a),e}}oo.URL_SCHEME="localstorage://";const ao=t=>{return u().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(oo.URL_SCHEME)?(e=t.slice(oo.URL_SCHEME.length),new oo(e)):null;var e};zr.registerSaveRouter(ao),zr.registerLoadRouter(ao);class so{constructor(){an(u().getBool("IS_BROWSER"),(()=>"Current environment is not a web browser")),an("undefined"==typeof window||void 0!==window.localStorage,(()=>"Current browser does not appear to support localStorage")),this.LS=window.localStorage}async listModels(){const t={},e=Yr+Jr,n=Jr+Xr;for(let r=0;r<this.LS.length;++r){const o=this.LS.key(r);if(o.startsWith(e)&&o.endsWith(n)){t[ro(o)]=JSON.parse(this.LS.getItem(o))}}return t}async removeModel(t){var e;const n=no(t=(e=t).startsWith(oo.URL_SCHEME)?e.slice(oo.URL_SCHEME.length):e);if(null==this.LS.getItem(n.info))throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(n.info));return this.LS.removeItem(n.info),this.LS.removeItem(n.topology),this.LS.removeItem(n.weightSpecs),this.LS.removeItem(n.weightData),r}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const io="://";class uo{constructor(){this.managers={}}static getInstance(){return null==uo.instance&&(uo.instance=new uo),uo.instance}static registerManager(t,e){an(null!=t,(()=>"scheme must not be undefined or null.")),t.endsWith(io)&&(t=t.slice(0,t.indexOf(io))),an(t.length>0,(()=>"scheme must not be an empty string."));const n=uo.getInstance();an(null==n.managers[t],(()=>`A model store manager is already registered for scheme '${t}'.`)),n.managers[t]=e}static getManager(t){const e=this.getInstance().managers[t];if(null==e)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(this.getInstance().managers)}}function co(t){if(-1===t.indexOf(io))throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+uo.getSchemes().join(","));return{scheme:t.split(io)[0],path:t.split(io)[1]}}async function lo(t,e,n=!1){an(t!==e,(()=>`Old path and new path are the same: '${t}'`));const r=zr.getLoadHandlers(t);an(r.length>0,(()=>`Copying failed because no load handler is found for source URL ${t}.`)),an(r.length<2,(()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${t}.`));const o=r[0],a=zr.getSaveHandlers(e);an(a.length>0,(()=>`Copying failed because no save handler is found for destination URL ${e}.`)),an(a.length<2,(()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${e}.`));const s=a[0],i=co(t).scheme,u=co(t).path,c=i===co(t).scheme,l=await o.load();n&&c&&await uo.getManager(i).removeModel(u);const h=await s.save(l);return n&&!c&&await uo.getManager(i).removeModel(u),h.modelArtifactsInfo}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class ho{fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Browser's encoder only supports utf-8, but got "+e);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}}if(u().get("IS_BROWSER")){u().setPlatform("browser",new ho);try{uo.registerManager(oo.URL_SCHEME,new so)}catch(t){}try{uo.registerManager(Hr.URL_SCHEME,new Vr)}catch(t){}}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const po=()=>require("node-fetch");let fo;class mo{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return null!=u().global.fetch?u().global.fetch(t,e):(null==fo&&(fo=po()),fo(t,e))}now(){const t=process.hrtime();return 1e3*t[0]+t[1]/1e6}encode(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)}decode(t,e){return 0===t.length?"":new this.util.TextDecoder(e).decode(t)}}
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function go(t,e="float32",n){return e=e||"float32",Ln(t),new Yn(t,e,n)}
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */u().get("IS_NODE")&&u().setPlatform("node",new mo);const vo=Fr({cast_:function(t,e){const n=Er(t,"x","cast");if(!wn(e))throw new Error("Failed to cast to unknown dtype "+e);if("string"===e&&"string"!==n.dtype||"string"!==e&&"string"===n.dtype)throw new Error("Only strings can be casted to strings");const r={x:n},o={dtype:e};return gr.runKernelFunc((t=>t.cast(n,e)),r,null,A,o)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const bo=Fr({clone_:function(t){const e=Er(t,"x","clone",null),n={x:e};return gr.runKernelFunc((()=>gr.makeTensorFromDataId(e.dataId,e.shape,e.dtype)),n,null,vt)}});
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function yo(t,e=!1){console.log(t.toString(e))}
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */mr();Zn={buffer:go,cast:vo,clone:bo,print:yo};function wo(t){return new Promise((t=>setTimeout(t))).then(t)}class xo{constructor(t){if(!u().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(xo.URL_SCHEME)&&(t=t.slice(xo.URL_SCHEME.length)),null!=t&&0!==t.length||(t="model"),this.modelTopologyFileName=t+".json",this.weightDataFileName=t+".weights.bin"}async save(t){if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");const e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},o=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),a=null==this.jsonAnchor?document.createElement("a"):this.jsonAnchor;if(a.download=this.modelTopologyFileName,a.href=o,await wo((()=>a.dispatchEvent(new MouseEvent("click")))),null!=t.weightData){const t=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;t.download=this.weightDataFileName,t.href=e,await wo((()=>t.dispatchEvent(new MouseEvent("click"))))}return{modelArtifactsInfo:Lr(t)}}}}xo.URL_SCHEME="downloads://";class ko{constructor(t){if(null==t||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}async load(){const t=this.files[0],e=this.files.slice(1);return new Promise(((n,r)=>{const o=new FileReader;o.onload=o=>{const a=JSON.parse(o.target.result),s=a.modelTopology;if(null==s)return void r(new Error("modelTopology field is missing from file "+t.name));0===e.length&&n({modelTopology:s});const i=a.weightsManifest;if(null==i)return void r(new Error("weightManifest field is missing from file "+t.name));let u;try{u=this.checkManifestAndWeightFiles(i,e)}catch(t){return void r(t)}const c=[],l=[],h=[];i.forEach((t=>{t.paths.forEach((t=>{l.push(t),h.push(null)})),c.push(...t.weights)})),i.forEach((t=>{t.paths.forEach((t=>{const e=new FileReader;e.onload=e=>{const r=e.target.result,o=l.indexOf(t);h[o]=r,-1===h.indexOf(null)&&n({modelTopology:s,weightSpecs:c,weightData:Br(h),format:a.format,generatedBy:a.generatedBy,convertedBy:a.convertedBy,userDefinedMetadata:a.userDefinedMetadata})},e.onerror=e=>r(`Failed to weights data from file of path '${t}'.`),e.readAsArrayBuffer(u[t])}))}))},o.onerror=e=>r(`Failed to read model topology and weights manifest JSON from file '${t.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),o.readAsText(t)}))}checkManifestAndWeightFiles(t,e){const n=[],r=e.map((t=>Rr(t.name))),o={};for(const a of t)a.paths.forEach((t=>{const a=Rr(t);if(-1!==n.indexOf(a))throw new Error(`Duplicate file basename found in weights manifest: '${a}'`);if(n.push(a),-1===r.indexOf(a))throw new Error(`Weight file with basename '${a}' is not provided.`);o[t]=e[r.indexOf(a)]}));if(n.length!==e.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${e.length}).`);return o}}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function _o(t,e,n,r){!function(t){an(null!=t&&Array.isArray(t)&&t.length>0,(()=>"promises must be a none empty array"))}(t),function(t,e){an(t>=0&&t<=1,(()=>"Progress fraction must be in range [0, 1], but got startFraction "+t)),an(e>=0&&e<=1,(()=>"Progress fraction must be in range [0, 1], but got endFraction "+e)),an(e>=t,(()=>`startFraction must be no more than endFraction, but got startFraction ${t} and endFraction `+e))}(n=null==n?0:n,r=null==r?1:r);let o=0;return Promise.all(t.map((a=>(a.then((a=>{const s=n+ ++o/t.length*(r-n);return e(s),a})),a))))}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */async function Eo(t,e){null==e&&(e={});const n=null==e.fetchFunc?u().platform.fetch:e.fetchFunc,r=t.map((t=>n(t,e.requestInit,{isBinary:!0}))),o=(null==e.onProgress?await Promise.all(r):await _o(r,e.onProgress,0,.5)).map((t=>t.arrayBuffer()));return null==e.onProgress?await Promise.all(o):await _o(o,e.onProgress,.5,1)}async function So(t,e="",n,r){return Do((t=>Eo(t,{requestInit:r})))(t,e,n)}function Do(t){return async(e,n="",r)=>{const o=e.map((()=>!1)),a={},s=null!=r?r.map((()=>!1)):[],i=[];if(e.forEach(((t,e)=>{let n=0;t.weights.forEach((t=>{const u="quantization"in t?t.quantization.dtype:t.dtype,c=Tr[u]*ln(t.shape),l=()=>{o[e]=!0,null==a[e]&&(a[e]=[]),a[e].push({manifestEntry:t,groupOffset:n,sizeBytes:c})};null!=r?r.forEach(((e,n)=>{e===t.name&&(l(),s[n]=!0)})):l(),i.push(t.name),n+=c}))})),!s.every((t=>t))){const t=r.filter(((t,e)=>!s[e]));throw new Error("Could not find weights in manifest with names: "+t.join(", ")+". \nManifest JSON has weights with names: "+i.join(", ")+".")}const u=o.reduce(((t,e,n)=>(e&&t.push(n),t)),[]),c=[];u.forEach((t=>{e[t].paths.forEach((t=>{const e=n+(n.endsWith("/")?"":"/")+t;c.push(e)}))}));const l=await t(c),h={};let p=0;return u.forEach((t=>{const n=e[t].paths.length;let r=0;for(let t=0;t<n;t++)r+=l[p+t].byteLength;const o=new ArrayBuffer(r),s=new Uint8Array(o);let i=0;for(let t=0;t<n;t++){const e=new Uint8Array(l[p+t]);s.set(e,i),i+=e.byteLength}a[t].forEach((t=>{const e=Ar(o.slice(t.groupOffset,t.groupOffset+t.sizeBytes),[t.manifestEntry]);for(const t in e)h[t]=e[t]})),p+=n})),h}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */zr.registerSaveRouter((t=>u().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(xo.URL_SCHEME)?function(t="model"){return new xo(t)}(t.slice(xo.URL_SCHEME.length)):null));class Fo{constructor(t,e){if(this.DEFAULT_METHOD="POST",null==e&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,this.weightUrlConverter=e.weightUrlConverter,null!=e.fetchFunc?(an("function"==typeof e.fetchFunc,(()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)")),this.fetch=e.fetchFunc):this.fetch=u().platform.fetch,an(null!=t&&t.length>0,(()=>"URL path for http must not be null, undefined or empty.")),Array.isArray(t)&&an(2===t.length,(()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`)),this.path=t,null!=e.requestInit&&null!=e.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n};e.body.append("model.json",new Blob([JSON.stringify(r)],{type:"application/json"}),"model.json"),null!=t.weightData&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin");const o=await this.fetch(this.path,e);if(o.ok)return{modelArtifactsInfo:Lr(t),responses:[o]};throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+o.status+".")}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code `+t.status+". Please verify this URL points to the model JSON of the model to load.");let e;try{e=await t.json()}catch(t){let e=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?e+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":e+=" Please make sure the server is serving valid JSON for this request.",new Error(e)}const n=e.modelTopology,r=e.weightsManifest,o=e.generatedBy,a=e.convertedBy,s=e.format,i=e.userDefinedMetadata;if(null==n&&null==r)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);let u,c;if(null!=r){const t=await this.loadWeights(r);[u,c]=t}const l={modelTopology:n,weightSpecs:u,weightData:c,userDefinedMetadata:i,generatedBy:o,convertedBy:a,format:s},h=e.modelInitializer;return h&&(l.modelInitializer=h),l}async loadWeights(t){const e=Array.isArray(this.path)?this.path[1]:this.path,[n,r]=function(t){const e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),r=t.substring(0,e),o=n>e?t.substring(n):"";return[r+"/",o]}(e),o=this.weightPathPrefix||n,a=[];for(const e of t)a.push(...e.weights);const s=[],i=[];for(const e of t)for(const t of e.paths)null!=this.weightUrlConverter?i.push(this.weightUrlConverter(t)):s.push(o+t+r);this.weightUrlConverter&&s.push(...await Promise.all(i));return[a,Br(await Eo(s,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress}))]}}function Io(t){return null!=t.match(Fo.URL_SCHEME_REGEX)}Fo.URL_SCHEME_REGEX=/^https?:\/\//;const Mo=(t,e)=>{if("undefined"==typeof fetch&&(null==e||null==e.fetchFunc))return null;{let n=!0;if(n=Array.isArray(t)?t.every((t=>Io(t))):Io(t),n)return No(t,e)}return null};function No(t,e){return new Fo(t,e)}zr.registerSaveRouter(Mo),zr.registerLoadRouter(Mo);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class To{constructor(t){this.modelArtifacts=t}async load(){return this.modelArtifacts}}class Ao{constructor(t){this.saveHandler=t}async save(t){return this.saveHandler(t)}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
var Po=Object.freeze({__proto__:null,browserFiles:function(t){return new ko(t)},browserHTTPRequest:function(t,e){return No(t,e)},concatenateArrayBuffers:Br,decodeWeights:Ar,encodeWeights:async function(t,e){const n=[],r=[],o=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);for(let a=0;a<o.length;++a){const s=o[a],i=Array.isArray(t)?t[a].tensor:t[s];if("float32"!==i.dtype&&"int32"!==i.dtype&&"bool"!==i.dtype&&"string"!==i.dtype&&"complex64"!==i.dtype)throw new Error(`Unsupported dtype in weight '${s}': ${i.dtype}`);const u={name:s,shape:i.shape,dtype:i.dtype};if("string"===i.dtype){const t=new Promise((async t=>{const e=await i.bytes(),n=e.reduce(((t,e)=>t+e.length),0)+4*e.length,r=new Uint8Array(n);let o=0;for(let t=0;t<e.length;t++){const n=e[t],a=new Uint8Array(new Uint32Array([n.length]).buffer);r.set(a,o),o+=4,r.set(n,o),o+=n.length}t(r)}));r.push(t)}else r.push(i.data());null!=e&&(u.group=e),n.push(u)}return{data:Pr(await Promise.all(r)),specs:n}},fromMemory:function(t,e,n,r){if(1===arguments.length){return null!=t.modelTopology||null!=t.weightSpecs?new To(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new To({modelTopology:t}))}return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new To({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:r})},getLoadHandlers:(t,e)=>zr.getLoadHandlers(t,e)
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */,getModelArtifactsInfoForJSON:Lr,getSaveHandlers:t=>zr.getSaveHandlers(t),http:No,isHTTPScheme:Io,loadWeights:So,registerLoadRouter:t=>zr.registerLoadRouter(t),registerSaveRouter:t=>zr.registerSaveRouter(t),weightsLoaderFactory:Do,withSaveHandler:function(t){return new Ao(t)},copyModel:async function(t,e){return lo(t,e,!1)},listModels:async function(){const t=uo.getSchemes(),e={};for(const n of t){const t=await uo.getManager(n).listModels();for(const r in t){e[n+io+r]=t[r]}}return e},moveModel:async function(t,e){return lo(t,e,!0)},removeModel:async function(t){const e=co(t);return uo.getManager(e.scheme).removeModel(e.path)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const $o=Fr({reshape_:function(t,e){const n=Er(t,"x","reshape",null),r={x:n},o={shape:e};return gr.runKernelFunc(((t,r)=>(e=fn(e,n.size),an(n.size===ln(e),(()=>"new shape and old shape must have the same number of elements.")),r([n]),t.reshape(n,e))),r,null,se,o)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Co=Fr({matMul_:function(t,e,n=!1,r=!1){let o=Er(t,"a","matMul"),a=Er(e,"b","matMul");[o,a]=ur(o,a),an(o.rank>=2&&a.rank>=2&&o.rank===a.rank,(()=>`Error in matMul: inputs must have the same rank of at least 2, got ranks ${o.rank} and ${a.rank}.`));const s=n?o.shape[o.rank-2]:o.shape[o.rank-1],i=r?a.shape[a.rank-1]:a.shape[a.rank-2],u=n?o.shape[o.rank-1]:o.shape[o.rank-2],c=r?a.shape[a.rank-2]:a.shape[a.rank-1],l=o.shape.slice(0,-2),h=a.shape.slice(0,-2),p=ln(l),d=ln(h);an(hn(l,h),(()=>`Error in matMul: outer dimensions (${l}) and (${h}) of Tensors with shapes ${o.shape} and `+a.shape+" must match.")),an(s===i,(()=>`Error in matMul: inner shapes (${s}) and (${i}) of Tensors with shapes ${o.shape} and ${a.shape} and transposeA=${n} and transposeB=${r} must match.`));const f=o.shape.slice(0,-2).concat([u,c]),m=$o(o,n?[p,s,u]:[p,u,s]),g=$o(a,r?[d,c,i]:[d,i,c]),v={a:m,b:g},b={transposeA:n,transposeB:r},y=gr.runKernelFunc(((t,e)=>(e([m,g]),t.batchMatMul(m,g,n,r))),v,null,M,b);return $o(y,f)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Bo=Fr({oneHot_:function(t,e,n=1,r=0){if(e<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+e);const o=Er(t,"indices","oneHot","int32"),a=[...o.shape,e],s={indices:o},i={depth:e,onValue:n,offValue:r};return gr.runKernelFunc(((t,s)=>(s([o]),$o(t.oneHot($o(o,[o.size]),e,n,r),a))),s,null,Xt,i)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ro=Fr({transpose_:function(t,e){const n=Er(t,"x","transpose");if(null==e&&(e=n.shape.map(((t,e)=>e)).reverse()),an(n.rank===e.length,(()=>`Error in transpose: rank of input ${n.rank} must match length of perm ${e}.`)),e.forEach((t=>{an(t>=0&&t<n.rank,(()=>"All entries in 'perm' must be between 0 and "+(n.rank-1)+" but got "+e))})),n.rank<=1)return n.clone();const r={x:n},o={perm:e};return gr.runKernelFunc((t=>t.transpose(n,e)),r,null,Le,o)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Lo=Fr({confusionMatrix_:function(t,e,n){const r=Er(t,"labels","confusionMatrix"),o=Er(e,"predictions","confusionMatrix");an(null==n||n>0&&Number.isInteger(n),(()=>"If provided, numClasses must be a positive integer, but got "+n)),an(1===r.rank,(()=>"Expected the rank of labels to be 1, but got "+r.rank)),an(1===o.rank,(()=>"Expected the rank of predictions to be 1, but got "+o.rank)),an(r.shape[0]===o.shape[0],(()=>`Mismatch in the number of examples: ${r.shape[0]} vs. ${o.shape[0]}. Labels and predictions should have the same number of elements.`)),an(n>0&&Number.isInteger(n),(()=>"numClasses is required to be a positive integer, but got "+n));const a=Bo(vo(r,"int32"),n),s=Bo(vo(o,"int32"),n),i=Ro(a);return vo(Co(i,s),"int32")}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */var Oo=Object.freeze({__proto__:null,confusionMatrix:Lo});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function zo(t,e,n){if(un(t),null!=e&&3!==e.length)throw new Error("tensor3d() requires shape to have three numbers");const r=xr(t,n);if(3!==r.length&&1!==r.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Mr(t,e,r,n)}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */let Wo;async function qo(t,e){let n=Er(t,"img","toPixels");if(!(t instanceof Qn)){const t=n;n=vo(t,"int32"),t.dispose()}if(2!==n.rank&&3!==n.rank)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${n.rank}.`);const[r,o]=n.shape.slice(0,2),a=2===n.rank?1:n.shape[2];if(a>4||2===a)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+a);if("float32"!==n.dtype&&"int32"!==n.dtype)throw new Error(`Unsupported type for toPixels: ${n.dtype}. Please use float32 or int32 tensors.`);const s=await n.data(),i="float32"===n.dtype?255:1,u=new Uint8ClampedArray(o*r*4);for(let t=0;t<r*o;++t){const e=[0,0,0,255];for(let r=0;r<a;r++){const o=s[t*a+r];if("float32"===n.dtype){if(o<0||o>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${o}.`)}else if("int32"===n.dtype&&(o<0||o>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${o}.`);1===a?(e[0]=o*i,e[1]=o*i,e[2]=o*i):e[r]=o*i}const r=4*t;u[r+0]=Math.round(e[0]),u[r+1]=Math.round(e[1]),u[r+2]=Math.round(e[2]),u[r+3]=Math.round(e[3])}if(null!=e){e.width=o,e.height=r;const t=e.getContext("2d"),n=new ImageData(u,o,r);t.putImageData(n,0,0)}return n!==t&&n.dispose(),u}const jo=Fr({fromPixels_:function(t,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==t)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,o=!1,a=!1,s=!1;if(t.data instanceof Uint8Array)n=!0;else if("undefined"!=typeof ImageData&&t instanceof ImageData)r=!0;else if("undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement)o=!0;else if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement)a=!0;else{if(null==t.getContext)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+t.constructor.name);s=!0}if(o){const e=2;if(o&&t.readyState<e)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.")}if(null!=Xe(Ge,gr.backendName)){const n={pixels:t},r={numChannels:e};return gr.runKernel(Ge,n,r)}const[i,u]=o?[t.videoWidth,t.videoHeight]:[t.width,t.height];let c,l;if(s?c=t.getContext("2d").getImageData(0,0,i,u).data:r||n?c=t.data:(a||o)&&(null==Wo&&(Wo=document.createElement("canvas").getContext("2d")),Wo.canvas.width=i,Wo.canvas.height=u,Wo.drawImage(t,0,0,i,u),c=Wo.getImageData(0,0,i,u).data),4===e)l=new Int32Array(c);else{const t=i*u;l=new Int32Array(t*e);for(let n=0;n<t;n++)for(let t=0;t<e;++t)l[n*e+t]=c[4*n+t]}return zo(l,[u,i,e],"int32")}});var Go=Object.freeze({__proto__:null,toPixels:qo,fromPixels:jo});function Ko(t,e){if(t.rank<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if("int32"!==e.dtype)throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[e.rank-1]>t.rank)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[e.rank-1]} vs. ${t.rank}`);if(0===t.size)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${t.shape}.`);const n=e.shape,r=n[n.length-1];let o=1;for(let t=0;t<n.length-1;++t)o*=n[t];const a=t.shape,s=n.slice();s.pop();let i=1;for(let e=r;e<t.rank;++e)i*=a[e],s.push(a[e]);const u=[...Tn(t.shape).map((t=>t/i)),1].slice(0,r);return[s,o,i,u]}var Ho=Object.freeze({__proto__:null,prepareAndValidate:Ko});function Uo(t,e,n){const r=e.rank>1?e.shape[e.rank-1]:1,o=e.rank>1?e.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+n.shape+`, indices.shape: ${e.shape}, shape: ${t}`+`, sliceDim: ${r}, and batchDim: ${o}.`;if(n.rank<o)throw new Error(a+` update.rank < ${o}. `);if(t.length<r+(n.rank-o))throw new Error(a+" Output shape length < "+(r+(n.rank-o)));if(n.rank!==o+t.length-r)throw new Error(a+" update.rank != "+(o+t.length-r));for(let t=0;t<o;++t)if(n.shape[t]!==e.shape[t])throw new Error(a+` updates.shape[${t}] (${n.shape[t]}) != indices.shape[${t}] (${e.shape[t]}).`);for(let e=0;e<n.rank-o;++e)if(n.shape[e+o]!==t[e+r])throw new Error(a+` updates.shape[${e+o}] (${n.shape[e+o]}) != shape[${e+o}] (${t[e+o]})`)}function Vo(t,e,n){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if("int32"!==e.dtype)throw new Error("The dtype of 'indices' should be int32, but got dtype: "+e.dtype);if(n.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+n);if(0===n.length){if(0===e.size)throw new Error("Indices specified for empty output. indices shape: "+e.shape);if(0===t.size)throw new Error("Updates specified for empty output. updates shape: "+t.shape)}Uo(n,e,t)}function Jo(t,e,n){const r=e.shape.length,o=r>1?e.shape[r-1]:1,a=n.length;let s=1;for(let t=o;t<a;++t)s*=n[t];const i=o<1?1:o;return{sliceRank:o,numUpdates:ln(e.shape)/i,sliceSize:s,strides:[...Tn(n.slice(0,o)),1],outputSize:ln(n)}}var Yo=Object.freeze({__proto__:null,validateUpdateShape:Uo,validateInput:Vo,calculateShapes:Jo});
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Xo(t,e,n){const r=t.shape.length;an(r===e.length,(()=>`Error in slice${r}D: Length of begin ${e} must match the rank of the array (${r}).`)),an(r===n.length,(()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`));for(let o=0;o<r;++o)an(e[o]+n[o]<=t.shape[o],(()=>`Error in slice${r}D: begin[${o}] + size[${o}] (${e[o]+n[o]}) would overflow input.shape[${o}] (${t.shape[o]})`))}function Zo(t){const e=[];let n=0;for(;t>0;)1&t&&e.push(n),t/=2,n++;return e}function Qo(t,e,n){const r=[];for(let o=0;o<t.length;o++)r[o]=Math.ceil((e[o]-t[o])/n[o]);return r}function ta(t,e,n,r){const o=[...t];for(let t=o.length;t<r.length;t++)o.push(1);for(let t=0;t<n;t++)0===t?o[e]=1:(o.splice(e,0,1),o.pop());return o}function ea(t,e,n){return n<=t?n:n-(e-1)}function na(t,e){const n=[];for(let r=0;r<t;r++)n.push(e+r);return n}function ra(t,e,n,r,o,a,s,i,u){const c=t.length;let l=new Array(c),h=new Array(c),p=new Array(c);if(e.length&&n>0){const u=e[0],c=n+1;l=oa(s,u,c,r,t),h=aa(i,u,c,o,t),p=ta(a,u,c,t)}else for(let e=0;e<c;e++)l[e]=ia(s,r,a,t,e,u),h[e]=ua(i,o,a,t,e,u),p[e]=sa(a,e,u);return{begin:l,end:h,strides:p}}function oa(t,e,n,r,o){const a=[...o],s=na(n,e);for(let o=0;o<a.length;o++)if(s.indexOf(o)>-1)a[o]=0;else{const s=ea(e,n,o);let i=r[s];t&1<<s&&(i=0),a[o]=i}return a}function aa(t,e,n,r,o){const a=[...o],s=na(n,e);for(let o=0;o<a.length;o++)if(s.indexOf(o)>-1)a[o]=Number.MAX_SAFE_INTEGER;else{const s=ea(e,n,o);let i=r[s];t&1<<s&&(i=Number.MAX_SAFE_INTEGER),a[o]=i}for(let t=0;t<a.length;t++){const e=o[t];a[t]<0&&(a[t]+=e),a[t]=on(0,a[t],o[t])}return a}function sa(t,e,n){let r=t[e];return(n&1<<e||null==r)&&(r=1),r}function ia(t,e,n,r,o,a){let s=e[o];const i=n[o]||1;(t&1<<o||a&1<<o||null==s)&&(s=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);const u=r[o];return s<0&&(s+=u),s=on(0,s,u-1),s}function ua(t,e,n,r,o,a){let s=e[o];const i=n[o]||1;(t&1<<o||a&1<<o||null==s)&&(s=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);const u=r[o];return s<0&&(s+=u),s=i>0?on(0,s,u):on(-1,s,u-1),s}function ca(t,e,n){let r;const o=t.shape.length;let a;return r="number"==typeof e?[e,...new Array(o-1).fill(0)]:e.length<o?e.concat(new Array(o-e.length).fill(0)):e.slice(),r.forEach((t=>{an(-1!==t,(()=>"slice() does not support negative begin indexing."))})),a=null==n?new Array(o).fill(-1):"number"==typeof n?[n,...new Array(o-1).fill(-1)]:n.length<o?n.concat(new Array(o-n.length).fill(-1)):n,a=a.map(((e,n)=>e>=0?e:(an(-1===e,(()=>`Negative size values should be exactly -1 but got ${e} for the slice() size at index ${n}.`)),t.shape[n]-r[n]))),[r,a]}var la=Object.freeze({__proto__:null,assertParamsValid:Xo,maskToAxes:Zo,computeOutShape:Qo,stridesWithElidedDims:ta,getNormalizedAxes:ra,startIndicesWithElidedDims:oa,stopIndicesWithElidedDims:aa,stridesForAxis:sa,startForAxis:ia,stopForAxis:ua,isSliceContinous:function(t,e,n){let r=n.length;for(let t=0;t<n.length;t++)if(n[t]>1){r=t;break}for(let o=r+1;o<n.length;o++)if(e[o]>0||n[o]!==t[o])return!1;return!0},computeFlatOffset:function(t,e){let n=t.length>0?t[t.length-1]:1;for(let r=0;r<t.length-1;r++)n+=t[r]*e[r];return n},parseSliceParams:ca});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class ha{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}}class pa{constructor(){this.classNameMap={}}static getMap(){return null==pa.instance&&(pa.instance=new pa),pa.instance}static register(t){pa.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function da(t){an(null!=t.className,(()=>"Class being registered does not have the static className property defined.")),an("string"==typeof t.className,(()=>"className is required to be a string, but got type "+typeof t.className)),an(t.className.length>0,(()=>"Class being registered has an empty-string as its className, which is disallowed.")),pa.register(t)}var fa=Object.freeze({__proto__:null,Serializable:ha,SerializationMap:pa,registerClass:da});
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ma(){return 32===gr.backend.floatPrecision()?.001:.1}function ga(t,e,n){let r=!0;if((kn(t)||kn(e))&&(r=!1),kn(t)&&kn(e)&&(r=!0),r){const n=t.constructor.name,r=e.constructor.name;if(n!==r)throw new Error(`Arrays are of different type. Actual: ${n}. Expected: `+r)}if(Array.isArray(t)&&Array.isArray(e)){const n=xr(t),r=xr(e);if(!hn(n,r))throw new Error(`Arrays have different shapes. Actual: [${n}]. Expected: [${r}]`)}const o=kn(t)?t:cn(t),a=kn(e)?e:cn(e);if(o.length!==a.length)throw new Error(`Arrays have different lengths actual: ${o.length} vs expected: ${a.length}.\nActual:   ${o}.\nExpected: ${a}.`);for(let t=0;t<a.length;++t){const e=o[t],r=a[t];if(!n(e,r))throw new Error(`Arrays differ: actual[${t}] = ${e}, expected[${t}] = ${r}.\nActual:   ${o}.\nExpected: ${a}.`)}}function va(t,e,n){return!isFinite(t)&&!isFinite(e)||!(isNaN(t)||isNaN(e)||Math.abs(t-e)>n)}var ba=Object.freeze({__proto__:null,TEST_EPSILON_FLOAT16:.1,expectArraysClose:function(t,e,n){return null==n&&(n=ma()),ga(t,e,((t,e)=>va(t,e,n)))},testEpsilon:ma,expectPromiseToFail:function(t,e){t().then((()=>e.fail()),(()=>e()))},expectArraysEqual:function(t,e){const n="string"==typeof e||"number"==typeof e||"boolean"==typeof e?[e]:e;return Sn(t)||Sn(t[0])||Sn(e)||Sn(e[0])?ga(t,n,((t,e)=>t==e)):ga(t,e,((t,e)=>va(t,e,0)))},expectNumbersClose:function(t,e,n){if(null==n&&(n=ma()),!va(t,e,n))throw new Error(`Numbers differ: actual === ${t}, expected === ${e}`)},expectValuesInRange:function(t,e,n){for(let r=0;r<t.length;r++)if(t[r]<e||t[r]>n)throw new Error(`Value out of range:${t[r]} low: ${e}, high: ${n}`)},expectArrayBuffersEqual:function(t,e){expect(new Float32Array(t)).toEqual(new Float32Array(e))}});
/** @license See the LICENSE file. */function ya(t){u().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function wa(t,e){return gr.tidy(t,e)}function xa(t){lr(t).forEach((t=>t.dispose()))}function ka(t){return gr.keep(t)}const _a=Fr({add_:
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e){let n=Er(t,"a","add"),r=Er(e,"b","add");[n,r]=ur(n,r);const o={a:n,b:r};return gr.runKernelFunc(((t,e)=>{const o=t.add(n,r);return e([n,r]),o}),o,null,g)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ea=Fr({floorDiv_:function(t,e){let n=Er(t,"a","floorDiv"),r=Er(e,"b","floorDiv");[n,r]=ur(n,r);const o={a:n,b:r};return gr.runKernelFunc(((t,e)=>{const o=t.floorDiv(n,r);return e([n,r]),o}),o,null,ht)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Sa=Fr({div_:function(t,e){let n=Er(t,"a","div"),r=Er(e,"b","div");if([n,r]=ur(n,r),"int32"===n.dtype&&"int32"===r.dtype)return Ea(n,r);const o={a:n,b:r};return gr.runKernelFunc(((t,e)=>{const o=t.realDivide(n,r);return e([n,r]),o}),o,null,et,{})}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Da=Fr({mul_:function(t,e){let n=Er(t,"a","mul"),r=Er(e,"b","mul");[n,r]=ur(n,r);const o={a:n,b:r};return gr.runKernelFunc(((t,e)=>{const o=t.multiply(n,r);return e([n,r]),o}),o,null,Gt)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Fa=Fr({abs_:function(t){const e=Er(t,"x","abs"),n={x:e};return gr.runKernelFunc(((t,n)=>(n([e]),"complex64"===e.dtype?t.complexAbs(e):t.abs(e))),n,null,d)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ia=Fr({acos_:function(t){const e=Er(t,"x","acos"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.acos(e);return n([e]),r}),n,null,f)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ma=Fr({acosh_:function(t){const e=Er(t,"x","acosh"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.acosh(e);return n([e]),r}),n,null,m)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Na=Fr({addN_:function(t){an(Array.isArray(t),(()=>"The argument passed to tf.addN() must be a list of tensors")),an(t.length>=1,(()=>"Must pass at least one tensor to tf.addN(), but got "+t.length));const e=t.map(((t,e)=>Er(t,"tensors"+e,"addN"))),n=e[0];e.forEach((t=>{if(t.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")})),e.forEach((t=>{if(!hn(t.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")}));const r=e;return gr.runKernelFunc(((t,n)=>{const r=t.addN(e);return n(e),r}),r,null,v)}});
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ta(t,e){for(let n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return!1;return!0}function Aa(t,e,n){const r=t.length+e.length,o=[];let a=0,s=0;for(let i=0;i<r;i++)-1===n.indexOf(i)?o.push(t[a++]):o.push(e[s++]);return o}function Pa(t,e){const n=[],r=t.length;for(let o=0;o<r;o++)-1===e.indexOf(o)&&n.push(t[o]);return[n,e.map((e=>t[e]))]}function $a(t,e){return Aa(t,e.map((t=>1)),e)}function Ca(t,e){if(Ta(t,e))return null;const n=[];for(let r=0;r<e;++r)-1===t.indexOf(r)&&n.push(r);return t.forEach((t=>n.push(t))),n}function Ba(t){return t.map(((t,e)=>[e,t])).sort(((t,e)=>t[1]-e[1])).map((t=>t[0]))}function Ra(t,e){const n=[];for(let r=e-t;r<e;++r)n.push(r);return n}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const La=Fr({all_:function(t,e=null,n=!1){let r=Er(t,"x","all","bool");const o={x:r},a={axis:e,keepDims:n};return gr.runKernelFunc((t=>{const o=mn(e,r.shape);let a=o;const s=Ca(a,r.rank);null!=s&&(r=Ro(r,s),a=Ra(a.length,r.rank));const i=t.all(r,a);if(n){const t=$a(i.shape,o);return $o(i,t)}return i}),o,null,"All",a)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Oa=Fr({any_:function(t,e=null,n=!1){let r=Er(t,"x","any","bool");const o={x:r},a={axis:e,keepDims:n};return gr.runKernelFunc((t=>{const o=mn(e,r.shape);let a=o;const s=Ca(a,r.rank);null!=s&&(r=Ro(r,s),a=Ra(a.length,r.rank));const i=t.any(r,a);if(n){const t=$a(i.shape,o);return $o(i,t)}return i}),o,null,"Any",a)}});
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const za=Fr({argMax_:function(t,e=0){let n=Er(t,"x","argMax");const r={x:n},o={axis:e};return gr.runKernelFunc(((t,r)=>{r([n]);let o=mn(e,n.shape);const a=Ca(o,n.rank);return null!=a&&(n=Ro(n,a),o=Ra(o.length,n.rank)),t.argMax(n,o[0])}),r,null,b,o)}});
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Wa=Fr({argMin_:function(t,e=0){let n=Er(t,"x","argMin");const r={x:n},o={axis:e};return gr.runKernelFunc(((t,r)=>{r([n]),null==e&&(e=0);let o=mn(e,n.shape);const a=Ca(o,n.rank);return null!=a&&(n=Ro(n,a),o=Ra(o.length,n.rank)),t.argMin(n,o[0])}),r,null,y,o)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const qa=Fr({asin_:function(t){const e=Er(t,"x","asin"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.asin(e);return n([e]),r}),n,null,w)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ja=Fr({asinh_:function(t){const e=Er(t,"x","asinh"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.asinh(e);return n([e]),r}),n,null,x)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ga=Fr({atan_:function(t){const e=Er(t,"x","atan"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.atan(e);return n([e]),r}),n,null,k)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ka=Fr({atan2_:function(t,e){let n=Er(t,"a","atan2"),r=Er(e,"b","atan2");[n,r]=ur(n,r);const o={a:n,b:r};return gr.runKernelFunc(((t,e)=>{const o=t.atan2(n,r);return e([n,r]),o}),o,null,E)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ha=Fr({atanh_:function(t){const e=Er(t,"x","atanh"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.atanh(e);return n([e]),r}),n,null,_)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ua(t,e,n,r,o,a,s="channelsLast"){const[i,u]=Za(e);let c;if("channelsLast"===s)c=[i,u,t[3],t[3]];else{if("channelsFirst"!==s)throw new Error("Unknown dataFormat "+s);c=[i,u,t[1],t[1]]}return Ja(t,c,n,r,o,a,!1,s)}function Va(t,e,n,r,o,a,s="NDHWC"){const[i,u,c]=Qa(e);let l,h;if("NDHWC"===s)h="channelsLast",l=[i,u,c,t[4],t[4]];else{if("NCDHW"!==s)throw new Error("Unknown dataFormat "+s);h="channelsFirst",l=[i,u,c,t[1],t[1]]}return Ya(t,l,n,r,o,!1,h,a)}function Ja(t,e,n,r,o,a,s=!1,i="channelsLast"){let[u,c,l,h]=[-1,-1,-1,-1];if("channelsLast"===i)[u,c,l,h]=t;else{if("channelsFirst"!==i)throw new Error("Unknown dataFormat "+i);[u,h,c,l]=t}const[p,d,,f]=e,[m,g]=Za(n),[v,b]=Za(r),y=ts(p,v),w=ts(d,b),{padInfo:x,outHeight:k,outWidth:_}=function(t,e,n,r,o,a,s,i,u){let c,l,h;if("number"==typeof t){c={top:t,bottom:t,left:t,right:t,type:0===t?"VALID":"NUMBER"};const o=function(t,e,n,r,o){null==r&&(r=Xa(t,e,n));const a=t[0],s=t[1],i=es((a-e+2*r)/n+1,o);an(pn(i),(()=>`The output # of rows (${i}) must be an integer. Change the stride and/or zero pad parameters`));const u=es((s-e+2*r)/n+1,o);return an(pn(u),(()=>`The output # of columns (${u}) must be an integer. Change the stride and/or zero pad parameters`)),[i,u]}([e,n],a,r,t,i);l=o[0],h=o[1]}else if("same"===t){l=Math.ceil(e/r),h=Math.ceil(n/o);const t=Math.max(0,(l-1)*r+a-e),i=Math.max(0,(h-1)*o+s-n),u=Math.floor(t/2),p=t-u,d=Math.floor(i/2);c={top:u,bottom:p,left:d,right:i-d,type:"SAME"}}else if("valid"===t)c={top:0,bottom:0,left:0,right:0,type:"VALID"},l=Math.ceil((e-a+1)/r),h=Math.ceil((n-s+1)/o);else{if("object"!=typeof t)throw Error("Unknown padding parameter: "+t);{const p="channelsLast"===u?t[1][0]:t[2][0],d="channelsLast"===u?t[1][1]:t[2][1],f="channelsLast"===u?t[2][0]:t[3][0],m="channelsLast"===u?t[2][1]:t[3][1];c={top:p,bottom:d,left:f,right:m,type:0===p&&0===d&&0===f&&0===m?"VALID":"EXPLICIT"},l=es((e-a+p+d)/r+1,i),h=es((n-s+f+m)/o+1,i)}}return{padInfo:c,outHeight:l,outWidth:h}}(o,c,l,m,g,y,w,a,i),E=s?f*h:f;let S;return"channelsFirst"===i?S=[u,E,k,_]:"channelsLast"===i&&(S=[u,k,_,E]),{batchSize:u,dataFormat:i,inHeight:c,inWidth:l,inChannels:h,outHeight:k,outWidth:_,outChannels:E,padInfo:x,strideHeight:m,strideWidth:g,filterHeight:p,filterWidth:d,effectiveFilterHeight:y,effectiveFilterWidth:w,dilationHeight:v,dilationWidth:b,inShape:t,outShape:S,filterShape:e}}function Ya(t,e,n,r,o,a=!1,s="channelsLast",i){let[u,c,l,h,p]=[-1,-1,-1,-1,-1];if("channelsLast"===s)[u,c,l,h,p]=t;else{if("channelsFirst"!==s)throw new Error("Unknown dataFormat "+s);[u,p,c,l,h]=t}const[d,f,m,,g]=e,[v,b,y]=Qa(n),[w,x,k]=Qa(r),_=ts(d,w),E=ts(f,x),S=ts(m,k),{padInfo:D,outDepth:F,outHeight:I,outWidth:M}=function(t,e,n,r,o,a,s,i,u,c,l){let h,p,d,f;if("number"==typeof t){h={top:t,bottom:t,left:t,right:t,front:t,back:t,type:0===t?"VALID":"NUMBER"};const a=function(t,e,n,r,o,a){null==o&&(o=Xa(t,e,r));const s=t[0],i=t[1],u=t[2],c=es((s-e+2*o)/r+1,a);an(pn(c),(()=>`The output # of depths (${c}) must be an integer. Change the stride and/or zero pad parameters`));const l=es((i-e+2*o)/r+1,a);an(pn(l),(()=>`The output # of rows (${l}) must be an integer. Change the stride and/or zero pad parameters`));const h=es((u-e+2*o)/r+1,a);return an(pn(h),(()=>`The output # of columns (${h}) must be an integer. Change the stride and/or zero pad parameters`)),[c,l,h,n]}([e,n,r,1],i,1,o,t,l);p=a[0],d=a[1],f=a[2]}else if("same"===t){p=Math.ceil(e/o),d=Math.ceil(n/a),f=Math.ceil(r/s);const t=(p-1)*o+i-e,l=(d-1)*a+u-n,m=(f-1)*s+c-r,g=Math.floor(t/2),v=t-g,b=Math.floor(l/2),y=l-b,w=Math.floor(m/2);h={top:b,bottom:y,left:w,right:m-w,front:g,back:v,type:"SAME"}}else{if("valid"!==t)throw Error("Unknown padding parameter: "+t);h={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},p=Math.ceil((e-i+1)/o),d=Math.ceil((n-u+1)/a),f=Math.ceil((r-c+1)/s)}return{padInfo:h,outDepth:p,outHeight:d,outWidth:f}}(o,c,l,h,v,b,y,_,E,S,i),N=a?g*p:g;let T;return"channelsFirst"===s?T=[u,N,F,I,M]:"channelsLast"===s&&(T=[u,F,I,M,N]),{batchSize:u,dataFormat:s,inDepth:c,inHeight:l,inWidth:h,inChannels:p,outDepth:F,outHeight:I,outWidth:M,outChannels:N,padInfo:D,strideDepth:v,strideHeight:b,strideWidth:y,filterDepth:d,filterHeight:f,filterWidth:m,effectiveFilterDepth:_,effectiveFilterHeight:E,effectiveFilterWidth:S,dilationDepth:w,dilationHeight:x,dilationWidth:k,inShape:t,outShape:T,filterShape:e}}function Xa(t,e,n,r=1){const o=ts(e,r);return Math.floor((t[0]*(n-1)-n+o)/2)}function Za(t){return"number"==typeof t?[t,t,t]:2===t.length?[t[0],t[1],1]:t}function Qa(t){return"number"==typeof t?[t,t,t]:t}function ts(t,e){return e<=1?t:t+(t-1)*(e-1)}function es(t,e){if(!e)return t;switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error("Unknown roundingMode "+e)}}function ns(t){const[e,n,r]=Za(t);return 1===e&&1===n&&1===r}function rs(t,e){return ns(t)||ns(e)}function os(t){if("NHWC"===t)return"channelsLast";if("NCHW"===t)return"channelsFirst";throw new Error("Unknown dataFormat "+t)}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const as=Fr({avgPool_:function(t,e,n,r,o){const a=Er(t,"x","avgPool","float32");an(rs(n,1),(()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`));let s=a,i=!1;3===a.rank&&(i=!0,s=$o(a,[1,a.shape[0],a.shape[1],a.shape[2]])),an(4===s.rank,(()=>`Error in avgPool: x must be rank 4 but got rank ${s.rank}.`)),null!=o&&an(pn(r),(()=>`Error in avgPool: pad must be an integer when using, dimRoundingMode ${o} but got pad ${r}.`));const u={x:s},c={filterSize:e,strides:n,pad:r,dimRoundingMode:o};let l=gr.runKernelFunc(((t,a)=>{const i=Ua(s.shape,e,n,1,r,o);return a([s]),1===i.filterWidth&&1===i.filterHeight&&hn(i.inShape,i.outShape)?s.clone():t.avgPool(s,i)}),u,null,S,c);return l=vo(l,a.dtype),i?$o(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ss=Fr({avgPool3d_:function(t,e,n,r,o,a="NDHWC",s){null==s?s=[1,1,1]:ya("dilations is deprecated, this field will be gone in v3.0.0.");const i=Er(t,"x","avgPool3d","float32");let u=i,c=!1;4===i.rank&&(c=!0,u=$o(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),an(5===u.rank,(()=>`Error in avgPool3d: x must be rank 5 but got rank ${u.rank}.`)),an("NDHWC"===a,(()=>"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a)),an(rs(n,s),(()=>`Error in avgPool3d: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`)),null!=o&&an(pn(r),(()=>`Error in avgPool3d: pad must be an integer when using, dimRoundingMode ${o} but got pad ${r}.`));const l={x:u},h={filterSize:e,strides:n,pad:r,dimRoundingMode:o,dataFormat:a,dilations:s};let p=gr.runKernelFunc(((t,i)=>{null==s&&(s=[1,1,1]);const c=Va(u.shape,e,n,s,r,o,a);return i([u]),t.avgPool3d(u,c)}),l,null,F,h);return p=vo(p,u.dtype),c?$o(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}});
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function is(t,e){const n=t[0].length;t.forEach(((t,e)=>{an(t.length===n,(()=>`Error in concat${n}D: rank of tensors[${e}] must be the same as the rank of the rest (${n})`))})),an(e>=0&&e<n,(()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`));const r=t[0];t.forEach(((t,o)=>{for(let a=0;a<n;a++)an(a===e||t[a]===r[a],(()=>`Error in concat${n}D: Shape of tensors[${o}] (${t}) does not match the shape of the rest (${r}) along the non-concatenated axis ${o}.`))}))}function us(t,e){const n=t[0].slice();for(let r=1;r<t.length;r++)n[e]+=t[r][e];return n}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const cs=Fr({concat_:function(t,e=0){an(t.length>=1,(()=>"Pass at least one tensor to concat"));let n=Sr(t,"tensors","concat");"complex64"===n[0].dtype&&n.forEach((t=>{if("complex64"!==t.dtype)throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${t.dtype}. `)}));const r=n,o={axis:e};return gr.runKernelFunc(((t,r)=>{const o=mn(e,n[0].shape)[0],a=us(n.map((t=>t.shape)),o);if(0===ln(a))return Nr([],a);if(n=n.filter((t=>t.size>0)),1===n.length)return n[0];is(n.map((t=>t.shape)),o);const s=t.concat(n,o);return r(n),s}),r,null,B,o)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ls=Fr({sigmoid_:function(t){const e=Er(t,"x","sigmoid"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.sigmoid(e);return n([r]),r}),n,null,ke)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const hs=Fr({slice_:function(t,e,n){const r=Er(t,"x","slice");if(0===r.rank)throw new Error("Slicing scalar is not possible");const o={x:r},a={begin:e,size:n};return gr.runKernelFunc(((t,o)=>{const[a,s]=ca(r,e,n);return Xo(r,a,s),o([r]),t.slice(r,a,s)}),o,null,be,a)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ps=Fr({tanh_:function(t){const e=Er(t,"x","tanh"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.tanh(e);return n([r]),r}),n,null,Ce)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ds=Fr({basicLSTMCell_:function(t,e,n,r,o,a){const s=Er(t,"forgetBias","basicLSTMCell"),i=Er(e,"lstmKernel","basicLSTMCell"),u=Er(n,"lstmBias","basicLSTMCell"),c=Er(r,"data","basicLSTMCell"),l=Er(o,"c","basicLSTMCell"),h=Er(a,"h","basicLSTMCell"),p=cs([c,h],1),d=Co(p,i),f=_a(d,u),m=f.shape[0],g=f.shape[1]/4,v=[m,g],b=hs(f,[0,0],v),y=hs(f,[0,g],v),w=hs(f,[0,2*g],v),x=hs(f,[0,3*g],v),k=_a(Da(ls(b),ps(y)),Da(l,ls(_a(s,w))));return[k,Da(ps(k),ls(x))]}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const fs=Fr({batchToSpaceND_:function(t,e,n){const r=Er(t,"x","batchToSpaceND"),o=e.reduce(((t,e)=>t*e));an(r.rank>=1+e.length,(()=>`input rank is ${r.rank} but should be > than blockShape.length ${e.length}`)),an(n.length===e.length,(()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${e.length}`)),an(r.shape[0]%o==0,(()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${o}`));const a={x:r},s={blockShape:e,crops:n};return gr.runKernelFunc((t=>t.batchToSpaceND(r,e,n)),a,null,N,s)}});function ms(t){return null==t?null:0===t.rank?$o(t,[t.size]):1===t.rank?t:2===t.rank?$o(t,[1,1,t.shape[0],t.shape[1]]):3===t.rank?$o(t,[1,t.shape[0],t.shape[1],t.shape[2]]):t}const gs=Fr({batchNorm_:
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e,n,r,o,a){null==a&&(a=.001);const s=Er(t,"x","batchNorm"),i=Er(e,"mean","batchNorm"),u=Er(n,"variance","batchNorm");let c,l;null!=o&&(c=Er(o,"scale","batchNorm")),null!=r&&(l=Er(r,"offset","batchNorm")),an(i.rank===u.rank,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),an(null==l||i.rank===l.rank,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),an(null==c||i.rank===c.rank,(()=>"Batch normalization gradient requires mean and scale to have equal ranks."));const h=function(t){let e;return e=0===t.rank||1===t.rank?$o(t,[1,1,1,t.size]):2===t.rank?$o(t,[1,1,t.shape[0],t.shape[1]]):3===t.rank?$o(t,[1,t.shape[0],t.shape[1],t.shape[2]]):t,e}(s),p={x:h,scale:c,offset:l,mean:i,variance:u},d={varianceEpsilon:a},f=gr.runKernelFunc(((t,e)=>(e([h,i,u,c]),t.batchNorm(h,ms(i),ms(u),ms(l),ms(c),a))),p,null,pt,d);return $o(f,s.shape)}});const vs=Fr({batchNorm2d_:function(t,e,n,r,o,a){const s=Er(t,"x","batchNorm"),i=Er(e,"mean","batchNorm"),u=Er(n,"variance","batchNorm");let c,l;return null!=o&&(c=Er(o,"scale","batchNorm")),null!=r&&(l=Er(r,"offset","batchNorm")),an(2===s.rank,(()=>"Error in batchNorm2D: x must be rank 2 but got rank "+s.rank+".")),an(2===i.rank||1===i.rank,(()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`)),an(2===u.rank||1===u.rank,(()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`)),null!=c&&an(2===c.rank||1===c.rank,(()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`)),null!=l&&an(2===l.rank||1===l.rank,(()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${l.rank}.`)),gs(s,i,u,l,c,a)}});const bs=Fr({batchNorm3d_:function(t,e,n,r,o,a){const s=Er(t,"x","batchNorm"),i=Er(e,"mean","batchNorm"),u=Er(n,"variance","batchNorm");let c,l;return null!=o&&(c=Er(o,"scale","batchNorm")),null!=r&&(l=Er(r,"offset","batchNorm")),an(3===s.rank,(()=>"Error in batchNorm3D: x must be rank 3 but got rank "+s.rank+".")),an(3===i.rank||1===i.rank,(()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`)),an(3===u.rank||1===u.rank,(()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`)),null!=c&&an(3===c.rank||1===c.rank,(()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`)),null!=l&&an(3===l.rank||1===l.rank,(()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${l.rank}.`)),gs(s,i,u,l,c,a)}});const ys=Fr({batchNorm4d_:function(t,e,n,r,o,a){const s=Er(t,"x","batchNorm"),i=Er(e,"mean","batchNorm"),u=Er(n,"variance","batchNorm");let c,l;return null!=o&&(c=Er(o,"scale","batchNorm")),null!=r&&(l=Er(r,"offset","batchNorm")),an(4===s.rank,(()=>"Error in batchNorm4D: x must be rank 4 but got rank "+s.rank+".")),an(4===i.rank||1===i.rank,(()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`)),an(4===u.rank||1===u.rank,(()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`)),null!=c&&an(4===c.rank||1===c.rank,(()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`)),null!=l&&an(4===l.rank||1===l.rank,(()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${l.rank}.`)),gs(s,i,u,l,c,a)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ws=Fr({broadcastTo_:function(t,e){let n=Er(t,"broadcastTo","x");const r=n.shape;if(e.some((t=>!(t>0)||t%1!=0)))throw new Error(`broadcastTo(): Invalid broadcast shape [${e}].`);if(e.length<n.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${n.rank}.`);if(e.length>n.rank){const t=n.shape.slice();for(;t.length<e.length;)t.unshift(1);n=$o(n,t)}const o=n.shape,a=Array.from(e);for(let t=e.length-1;t>=0;t--)if(o[t]===e[t])a[t]=1;else if(1!==n.shape[t])throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${e}].`);if(0===a.map(((t,e)=>t>1?e:-1)).filter((t=>t>=0)).length)return bo(n);const s={x:n},i={shape:e,inputShape:o};return gr.runKernelFunc((t=>t.tile(n,a)),s,null,T,i)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const xs=Fr({ceil_:function(t){const e=Er(t,"x","ceil"),n={x:e};return gr.runKernelFunc((t=>t.ceil(e)),n,null,P)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ks=Fr({clipByValue_:function(t,e,n){const r=Er(t,"x","clipByValue");an(e<=n,(()=>`Error in clip: min (${e}) must be less than or equal to max (${n}).`));const o={x:r},a={clipValueMin:e,clipValueMax:n};return gr.runKernelFunc(((t,o)=>{const a=t.clip(r,e,n);return o([r]),a}),o,null,$,a)}});const _s=Fr({concat1d_:function(t){return cs(t,0)}});const Es=Fr({concat2d_:function(t,e){return cs(t,e)}});const Ss=Fr({concat3d_:function(t,e){return cs(t,e)}});const Ds=Fr({concat4d_:function(t,e){return cs(t,e)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Fs=Fr({conv2d_:function(t,e,n,r,o="NHWC",a=[1,1],s){const i=Er(t,"x","conv2d"),u=Er(e,"filter","conv2d");let c=i,l=!1;3===i.rank&&(l=!0,c=$o(i,[1,i.shape[0],i.shape[1],i.shape[2]])),an(4===c.rank,(()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`)),an(4===u.rank,(()=>"Error in conv2d: filter must be rank 4, but got rank "+u.rank+".")),null!=s&&an(pn(r),(()=>`Error in conv2d: pad must be an integer when using, dimRoundingMode ${s} but got pad ${r}.`));const h="NHWC"===o?c.shape[3]:c.shape[1];an(h===u.shape[2],(()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${u.shape[2]}.`)),an(rs(n,a),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`));const p={x:c,filter:u},d={strides:n,pad:r,dataFormat:o,dilations:a,dimRoundingMode:s},f=gr.runKernelFunc(((t,e)=>{const i=os(o),l=Ja(c.shape,u.shape,n,a,r,s,!1,i),h=t.conv2d(c,u,l);return e([c,u]),h}),p,null,R,d);return l?$o(f,[f.shape[1],f.shape[2],f.shape[3]]):f}});const Is=Fr({conv1d_:function(t,e,n,r,o="NWC",a=1,s){const i=Er(t,"x","conv1d"),u=Er(e,"filter","conv1d");let c=i,l=!1;2===i.rank&&(l=!0,c=$o(i,[1,i.shape[0],i.shape[1]])),an(3===c.rank,(()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`)),an(3===u.rank,(()=>"Error in conv1d: filter must be rank 3, but got rank "+u.rank+".")),null!=s&&an(pn(r),(()=>`Error in conv1d: pad must be an integer when using, dimRoundingMode ${s} but got pad ${r}.`)),an(c.shape[2]===u.shape[1],(()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${u.shape[1]}.`)),an(rs(n,a),(()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`)),an("NWC"===o,(()=>`Error in conv1d: got dataFormat of ${o} but only NWC is currently supported.`));const h=$o(u,[1,u.shape[0],u.shape[1],u.shape[2]]),p=$o(c,[c.shape[0],1,c.shape[1],c.shape[2]]),d=Fs(p,h,[1,n],r,"NHWC",[1,a],s);return $o(d,l?[d.shape[2],d.shape[3]]:[d.shape[0],d.shape[2],d.shape[3]])}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ms=Fr({conv2DBackpropInput_:function(t,e,n,r,o,a="NHWC",s){an(t.length===e.rank,(()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`));let i=t,u=e,c=!1;3===e.rank&&(c=!0,u=$o(e,[1,e.shape[0],e.shape[1],e.shape[2]]),i=[1,t[0],t[1],t[2]]),an(4===i.length,(()=>"Error in conv2dDerInput: inShape must be length 4, but got length "+i.length+".")),an(4===u.rank,(()=>"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank)),an(4===n.rank,(()=>"Error in conv2dDerInput: filter must be rank 4, but got rank "+n.rank));const l="NHWC"===a?i[3]:i[1],h="NHWC"===a?u.shape[3]:u.shape[1];an(l===n.shape[2],(()=>`Error in conv2dDerInput: depth of input (${l}) must match input depth for filter ${n.shape[2]}.`)),an(h===n.shape[3],(()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${n.shape[3]}.`)),null!=s&&an(pn(o),(()=>`Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode ${s} but got pad ${o}.`));const p={dy:u,filter:n},d={strides:r,pad:o,dataFormat:a,dimRoundingMode:s,inputShape:i},f=gr.runKernelFunc(((t,e)=>{const c=os(a),l=Ja(i,n.shape,r,1,o,s,!1,c),h=t.conv2dDerInput(u,n,l);return e([u,n]),h}),p,null,O,d);return c?$o(f,[f.shape[1],f.shape[2],f.shape[3]]):f}});const Ns=Fr({conv2dTranspose_:function(t,e,n,r,o,a){const s=Er(t,"x","conv2dTranspose"),i=Er(e,"filter","conv2dTranspose");return Ms(n,s,i,r,o,"NHWC",a)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ts=Fr({conv3d_:function(t,e,n,r,o="NDHWC",a=[1,1,1]){const s=Er(t,"x","conv3d"),i=Er(e,"filter","conv3d");let u=s,c=!1;4===s.rank&&(c=!0,u=$o(s,[1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]])),an(5===u.rank,(()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`)),an(5===i.rank,(()=>"Error in conv3d: filter must be rank 5, but got rank "+i.rank+".")),an(u.shape[4]===i.shape[3],(()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${i.shape[3]}.`)),an(rs(n,a),(()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`)),an("NDHWC"===o,(()=>`Error in conv3d: got dataFormat of ${o} but only NDHWC is currently supported.`));const l={x:u,filter:i},h={strides:n,pad:r,dataFormat:o,dilations:a},p=gr.runKernelFunc(((t,e)=>{const o=Ya(u.shape,i.shape,n,a,r),s=t.conv3d(u,i,o);return e([u,i]),s}),l,null,z,h);return c?$o(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const As=Fr({conv3DBackpropInput_:function(t,e,n,r,o){an(t.length===e.rank,(()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`));let a=t,s=e,i=!1;4===e.rank&&(i=!0,s=$o(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),a=[1,t[0],t[1],t[2],t[3]]);const u=a[4],c=s.shape[4];an(5===a.length,(()=>"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+".")),an(5===s.rank,(()=>"Error in conv3dDerInput: dy must be rank 5, but got rank "+s.rank)),an(5===n.rank,(()=>"Error in conv3dDerInput: filter must be rank 5, but got rank "+n.rank)),an(u===n.shape[3],(()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[3]}.`)),an(c===n.shape[4],(()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${n.shape[4]}.`));const l={dy:s},h={pad:o},p=gr.runKernelFunc((t=>{const e=Ya(a,n.shape,r,1,o);return t.conv3dDerInput(s,n,e)}),l,null,q,h);return i?$o(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}});const Ps=Fr({conv3dTranspose_:function(t,e,n,r,o){const a=Er(t,"x","conv3dTranspose"),s=Er(e,"filter","conv3dTranspose");return As(n,a,s,r,o)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const $s=Fr({cos_:function(t){const e=Er(t,"x","cos"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.cos(e);return n([e]),r}),n,null,j)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Cs=Fr({cosh_:function(t){const e=Er(t,"x","cosh"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.cosh(e);return n([e]),r}),n,null,G)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Bs=Fr({cumsum_:function(t,e=0,n=!1,r=!1){const o=Er(t,"x","cumsum"),a={x:o},s={axis:e,exclusive:n,reverse:r};return gr.runKernelFunc(((t,a)=>{const s=Ca([e],o.rank);let i=o;null!=s&&(i=Ro(o,s));const u=Ra(1,o.rank)[0];let c=t.cumsum(i,u,n,r);if(a([o]),null!=s){const t=Ba(s);c=Ro(c,t)}return c}),a,null,K,s)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Rs=Fr({depthToSpace_:function(t,e,n="NHWC"){const r=Er(t,"x","depthToSpace"),o="NHWC"===n?r.shape[1]:r.shape[2],a="NHWC"===n?r.shape[2]:r.shape[3],s="NHWC"===n?r.shape[3]:r.shape[1];an(o*e>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${o} and ${e}  for depthToSpace with input shape\n    ${r.shape}`)),an(a*e>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${a} and ${e} for depthToSpace with input shape\n        ${r.shape}`)),an(s%(e*e)==0,(()=>`Dimension size must be evenly divisible by ${e*e} but is ${s} for depthToSpace with input shape ${r.shape}`));const i={x:r},u={blockSize:e,dataFormat:n};return gr.runKernelFunc((t=>t.depthToSpace(r,e,n)),i,null,U,u)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ls=Fr({depthwiseConv2d_:function(t,e,n,r,o="NHWC",a=[1,1],s){const i=Er(t,"x","depthwiseConv2d"),u=Er(e,"filter","depthwiseConv2d");let c=i,l=!1;3===i.rank&&(l=!0,c=$o(i,[1,i.shape[0],i.shape[1],i.shape[2]])),an(4===c.rank,(()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`)),an(4===u.rank,(()=>"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+".")),an(c.shape[3]===u.shape[2],(()=>`Error in depthwiseConv2d: number of input channels (${c.shape[3]}) must match the inChannels dimension in filter ${u.shape[2]}.`)),null!=s&&an(pn(r),(()=>`Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode ${s} but got pad ${r}.`));const h={x:c,filter:u},p={strides:n,pad:r,dataFormat:o,dilations:a,dimRoundingMode:s},d=gr.runKernelFunc(((t,e)=>{null==a&&(a=[1,1]),an(rs(n,a),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`));const o=Ja(c.shape,u.shape,n,a,r,s,!0),i=t.depthwiseConv2D(c,u,o);return e([c,u]),i}),h,null,V,p);return l?$o(d,[d.shape[1],d.shape[2],d.shape[3]]):d}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Os=Fr({diag_:function(t){const e=Er(t,"x","diag"),n={x:e};return gr.runKernelFunc((n=>{const r=$o(e,[e.size]),o=n.diag(r),a=[...t.shape,...t.shape];return $o(o,a)}),n,null,X)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const zs=Fr({dilation2d_:function(t,e,n,r,o=[1,1],a="NHWC"){const s=Er(t,"x","dilation2d"),i=Er(e,"filter","dilation2d");an(3===s.rank||4===s.rank,(()=>"Error in dilation2d: input must be rank 3 or 4, but got rank "+s.rank+".")),an(3===i.rank,(()=>"Error in dilation2d: filter must be rank 3, but got rank "+i.rank+".")),an("NHWC"===a,(()=>"Error in dilation2d: Only NHWC is currently supported, but got dataFormat of "+a));let u=s,c=!1;3===s.rank&&(u=$o(s,[1,s.shape[0],s.shape[1],s.shape[2]]),c=!0);const l={x:u,filter:i},h={strides:n,pad:r,dilations:o},p=gr.runKernel(Z,l,h);return c?$o(p,[p.shape[1],p.shape[2],p.shape[3]]):p}});
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ws(t,e){const n=[];for(let r=0;r<e.length;r++){const o=t[t.length-r-1],a=e.length-r-1,s=e[a];(null==o||1===o&&s>1)&&n.unshift(a)}return n}function qs(t,e){const n=[],r=Math.max(t.length,e.length);for(let o=0;o<r;o++){let r=t[t.length-o-1];null==r&&(r=1);let a=e[e.length-o-1];if(null==a&&(a=1),1===r)n.unshift(a);else if(1===a)n.unshift(r);else{if(r!==a){throw Error(`Operands could not be broadcast together with shapes ${t} and ${e}.`)}n.unshift(r)}}return n}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const js=Fr({equal_:function(t,e){let n=Er(t,"a","equal"),r=Er(e,"b","equal");[n,r]=ur(n,r),qs(n.shape,r.shape);const o={a:n,b:r};return gr.runKernelFunc((t=>t.equal(n,r)),o,null,at)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Gs=Fr({where_:function(t,e,n){const r=Er(e,"a","where"),o=Er(n,"b","where"),a=Er(t,"condition","where","bool"),s=qs(r.shape,o.shape),i=ws(r,s),u=ws(o,s);1===a.rank&&an(a.shape[0]===r.shape[0],(()=>"The first dimension of `a` must match the size of `condition`.")),1!==a.rank&&sn(a.shape,u.shape,"Error in where: ");const c={condition:a,t:i,e:u};return gr.runKernelFunc(((t,e)=>{const n=t.select(a,i,u);return e([a]),n}),c,null,ge)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ks=Fr({zerosLike_:function(t){const e=Er(t,"x","zerosLike"),n={x:e};return gr.runKernelFunc((t=>t.zerosLike(e)),n,null,qe)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Hs=Fr({divNoNan_:function(t,e){let n=Er(t,"a","div"),r=Er(e,"b","div");[n,r]=ur(n,r);const o=Sa(n,r),a=Ks(o),s=js(r,a);return Gs(s,a,o)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Us=Fr({dot_:function(t,e){const n=Er(t,"t1","dot"),r=Er(e,"t2","dot");an(!(1!==n.rank&&2!==n.rank||1!==r.rank&&2!==r.rank),(()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`));const o=1===n.rank?n.size:n.shape[1],a=1===r.rank?r.size:r.shape[0];if(an(o===a,(()=>`Error in dot: inner dimensions of inputs must match, but got ${o} and ${a}.`)),1===n.rank&&1===r.rank){const t=$o(n,[1,-1]),e=$o(r,[-1,1]),o=Co(t,e);return $o(o,[])}if(1===n.rank&&2===r.rank){const t=$o(n,[1,-1]),e=$o(r,[r.shape[0],r.shape[1]]),o=Co(t,e);return $o(o,[o.size])}if(2===n.rank&&1===r.rank){const t=$o(r,[-1,1]),e=Co(n,t);return $o(e,[e.size])}{const t=$o(r,[r.shape[0],r.shape[1]]);return Co(n,t)}}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Vs=Fr({elu_:function(t){const e=Er(t,"x","elu"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.elu(e);return n([r]),r}),n,null,nt)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Js=Fr({erf_:function(t){let e=Er(t,"x","erf");an("int32"===e.dtype||"float32"===e.dtype,(()=>"Input dtype must be `int32` or `float32`.")),"int32"===e.dtype&&(e=vo(e,"float32"));const n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.erf(e);return n([e]),r}),n,null,ot)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ys=Fr({exp_:function(t){const e=Er(t,"x","exp"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.exp(e);return n([r]),r}),n,null,st)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Xs=Fr({expandDims_:function(t,e=0){const n=Er(t,"x","expandDims",null);an(e<=n.rank,(()=>"Axis must be <= rank of the tensor"));const r=n.shape.slice();return e<0&&(an(-(n.rank+1)<=e,(()=>`Axis must be in the interval [${-(n.rank+1)}, ${n.rank}]`)),e=n.rank+e+1),r.splice(e,0,1),$o(n,r)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Zs=Fr({expm1_:function(t){const e=Er(t,"x","expm1"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.expm1(e);return n([e]),r}),n,null,it)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Qs=Fr({tile_:function(t,e){const n=Er(t,"x","tile",null);an(n.rank===e.length,(()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${e}.`));const r=[n],o={x:n},a={reps:e};return gr.runKernelFunc(((t,r)=>{const o=t.tile(n,e);return r([n]),o}),o,null,Be,a,r)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ti=Fr({eye_:function(t,e,n,r="float32"){null==e&&(e=t);const o=go([t,e],r),a=t<=e?t:e;for(let t=0;t<a;++t)o.set(1,t,t);const s=$o(o.toTensor(),[t,e]);if(null==n)return s;if(1===n.length)return Qs(Xs(s,0),[n[0],1,1]);if(2===n.length)return Qs(Xs(Xs(s,0),0),[n[0],n[1],1,1]);if(3===n.length)return Qs(Xs(Xs(Xs(s,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ei(t,e,n){const r={shape:t,value:e,dtype:n};return gr.runKernelFunc((r=>r.fill(t,e,n)),{},null,ut,r)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ni=Fr({floor_:function(t){const e=Er(t,"x","floor"),n={x:e};return gr.runKernelFunc((t=>t.floor(e)),n,null,lt)}});
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ri(t,e,n){const r=t.shape[n],o=[];let a=1,s=1;for(let e=0;e<n;e++)o.push(t.shape[e]),a*=t.shape[e];for(let t=0;t<e.rank;t++)o.push(e.shape[t]);for(let e=n+1;e<t.rank;e++)o.push(t.shape[e]),s*=t.shape[e];return{batchSize:a,sliceSize:s,dimSize:r,outputShape:o}}var oi=Object.freeze({__proto__:null,segOpComputeOptimalWindowSize:
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e){let n,r=!1;for(t<=30?(n=t,r=!0):n=Nn(t,Math.floor(Math.sqrt(t)));!r;)n>e||n===t?r=!0:n=Nn(t,n+1);return n},computeOutShape:function(t,e,n){const r=[],o=t.length;for(let a=0;a<o;a++)a!==e?r.push(t[a]):r.push(n);return r},collectGatherOpShapeInfo:ri});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ai=Fr({gather_:function(t,e,n=0){const r=Er(t,"x","gather"),o=Er(e,"indices","gather","int32"),a={x:r,indices:o},s={axis:n};return gr.runKernelFunc(((t,e)=>{const a=mn(n,r.shape)[0],s=ri(r,o,a),i=t.gather(r,$o(o,[o.size]),a);return e([r,o]),$o(i,s.outputShape)}),a,null,dt,s)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const si=Fr({greater_:function(t,e){let n=Er(t,"a","greater"),r=Er(e,"b","greater");[n,r]=ur(n,r),qs(n.shape,r.shape);const o={a:n,b:r};return gr.runKernelFunc((t=>t.greater(n,r)),o,null,mt)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ii=Fr({greaterEqual_:function(t,e){let n=Er(t,"a","greaterEqual"),r=Er(e,"b","greaterEqual");[n,r]=ur(n,r),qs(n.shape,r.shape);const o={a:n,b:r};return gr.runKernelFunc(((t,e)=>{const o=t.greaterEqual(n,r);return e([n,r]),o}),o,null,gt)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ui=Fr({imag_:function(t){const e=Er(t,"input","imag"),n={input:e};return gr.runKernelFunc((t=>t.imag(e)),n,null,yt)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ci=Fr({isFinite_:function(t){const e=Er(t,"x","isFinite"),n={x:e};return gr.runKernelFunc((t=>t.isFinite(e)),n,null,wt)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const li=Fr({isInf_:function(t){const e=Er(t,"x","isInf"),n={x:e};return gr.runKernelFunc((t=>t.isInf(e)),n,null,xt)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const hi=Fr({isNaN_:function(t){const e=Er(t,"x","isNaN"),n={x:e};return gr.runKernelFunc((t=>t.isNaN(e)),n,null,kt)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const pi=Fr({maximum_:function(t,e){let n=Er(t,"a","maximum"),r=Er(e,"b","maximum");[n,r]=ur(n,r),"bool"===n.dtype&&(n=vo(n,"int32"),r=vo(r,"int32")),qs(n.shape,r.shape);const o={a:n,b:r};return gr.runKernelFunc(((t,e)=>{const o=t.maximum(n,r);return e([n,r]),o}),o,null,Ct)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function di(t,e){if((kn(t)&&"string"!==e||Array.isArray(t))&&"complex64"!==e)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===e&&kn(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Mr(t,[],[],e)}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const fi=Fr({leakyRelu_:function(t,e=.2){const n=Er(t,"x","leakyRelu");return pi(Da(di(e),n),n)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const mi=Fr({less_:function(t,e){let n=Er(t,"a","less"),r=Er(e,"b","less");[n,r]=ur(n,r),qs(n.shape,r.shape);const o={a:n,b:r};return gr.runKernelFunc((t=>t.less(n,r)),o,null,_t)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const gi=Fr({lessEqual_:function(t,e){let n=Er(t,"a","lessEqual"),r=Er(e,"b","lessEqual");[n,r]=ur(n,r),qs(n.shape,r.shape);const o={a:n,b:r};return gr.runKernelFunc(((t,e)=>{const o=t.lessEqual(n,r);return e([n,r]),o}),o,null,Et)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const vi=Fr({localResponseNormalization_:
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e=5,n=1,r=1,o=.5){const a=Er(t,"x","localResponseNormalization");an(4===a.rank||3===a.rank,(()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ${a.rank}.`)),an(pn(e),(()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`));let s=a,i=!1;3===a.rank&&(i=!0,s=$o(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const u={x:s},c={depthRadius:e,bias:n,alpha:r,beta:o},l=gr.runKernelFunc(((t,a)=>{const i=t.localResponseNormalization4D(s,e,n,r,o);return a([s,i]),i}),u,null,At,c);return i?$o(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const bi=Fr({log_:function(t){const e=Er(t,"x","log"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.log(e);return n([e]),r}),n,null,Dt)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const yi=Fr({log1p_:function(t){const e=Er(t,"x","log1p"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.log1p(e);return n([e]),r}),n,null,Ft)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function wi(t,e){an(Mn(t),(()=>"The f passed in variableGrads(f) must be a function")),an(null==e||Array.isArray(e)&&e.every((t=>t instanceof tr)),(()=>"The varList passed in variableGrads(f, varList) must be an array of variables"));const n=null!=e;if(!n){e=[];for(const t in gr.registeredVariables)e.push(gr.registeredVariables[t])}const r=n?e.filter((t=>!t.trainable)):null,o=e.length;an((e=e.filter((t=>t.trainable))).length>0,(()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`));const{value:a,grads:s}=gr.gradients(t,e,null,!0);an(s.some((t=>null!=t)),(()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().")),an(0===a.rank,(()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`));const i={};return e.forEach(((t,e)=>{null!=s[e]&&(i[t.name]=s[e])})),null!=r&&r.forEach((t=>i[t.name]=null)),{value:a,grads:i}}function xi(t){return gr.customGrad(t)}function ki(t){if(t.filter((t=>null==t)).length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const _i=Fr({neg_:function(t){const e=Er(t,"x","neg"),n={x:e};return gr.runKernelFunc((t=>t.neg(e)),n,null,Kt)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ei=Fr({softplus_:function(t){const e=Er(t,"x","softplus"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.softplus(e);return n([e]),r}),n,null,_e)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Si=Fr({logSigmoid_:function(t){const e=Er(t,"x","logSigmoid");return xi((t=>({value:_i(Ei(_i(t))),gradFunc:e=>Da(e,ls(_i(t)))})))(e)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Di=Fr({max_:function(t,e=null,n=!1){const r=Er(t,"x","max"),o={x:r},a={reductionIndices:e,keepDims:n};return gr.runKernelFunc(((t,o)=>{let a=mn(e,r.shape);const s=Ca(a,r.rank);let i=r;null!=s&&(i=Ro(r,s),a=Ra(a.length,i.rank));const u=t.max(i,a);null!=s&&i.dispose();let c=u;if(n){const t=$a(c.shape,mn(e,r.shape));c=$o(c,t),u.dispose()}return o([r,c]),c}),o,null,$t,a)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Fi=Fr({sub_:function(t,e){let n=Er(t,"a","sub"),r=Er(e,"b","sub");[n,r]=ur(n,r);const o={a:n,b:r};return gr.runKernelFunc(((t,e)=>{const o=t.subtract(n,r);return e([n,r]),o}),o,null,Te)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ii=Fr({sum_:function(t,e=null,n=!1){let r=Er(t,"x","sum");"bool"===r.dtype&&(r=vo(r,"int32"));const o={x:r},a={axis:e,keepDims:n};return gr.runKernelFunc(((t,o)=>{o([r]);const a=mn(e,r.shape),s=Ca(a,r.rank);let i=a,u=r;null!=s&&(u=Ro(r,s),i=Ra(i.length,r.rank));let c=t.sum(u,i);if(n){const t=$a(c.shape,a);c=$o(c,t)}return c}),o,null,Se,a)}});
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Mi=Fr({logSoftmax_:function(t,e=-1){const n=Er(t,"logits","logSoftmax");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${e}`);const r={logits:n},o={axis:e};return gr.runKernelFunc(((n,r)=>{const o=Di(t,e,!0),a=Fi(t,o),s=Fi(vo(a,"float32"),bi(Ii(Ys(a),e,!0)));return r([s]),s}),r,null,Tt,o)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ni=Fr({logSumExp_:function(t,e=null,n=!1){const r=Er(t,"x","logSumExp"),o=mn(e,r.shape),a=Di(r,o,!0),s=Fi(r,a),i=Ys(s),u=Ii(i,o),c=bi(u),l=_a($o(a,c.shape),c);if(n){const t=$a(l.shape,o);return $o(l,t)}return l}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ti=Fr({logicalAnd_:function(t,e){const n=Er(t,"a","logicalAnd","bool"),r=Er(e,"b","logicalAnd","bool");qs(n.shape,r.shape);const o={a:n,b:r};return gr.runKernelFunc((t=>t.logicalAnd(n,r)),o,null,It)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ai=Fr({logicalNot_:function(t){const e=Er(t,"x","logicalNot","bool"),n={x:e};return gr.runKernelFunc((t=>t.logicalNot(e)),n,null,Mt)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Pi=Fr({logicalOr_:function(t,e){const n=Er(t,"a","logicalOr","bool"),r=Er(e,"b","logicalOr","bool");qs(n.shape,r.shape);const o={a:n,b:r};return gr.runKernelFunc((t=>t.logicalOr(n,r)),o,null,Nt)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const $i=Fr({logicalXor_:function(t,e){const n=Er(t,"a","logicalXor","bool"),r=Er(e,"b","logicalXor","bool");return qs(n.shape,r.shape),Ti(Pi(t,e),Ai(Ti(t,e)))}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ci=Fr({maxPool_:function(t,e,n,r,o){const a=Er(t,"x","maxPool");let s=a,i=!1;3===a.rank&&(i=!0,s=$o(a,[1,a.shape[0],a.shape[1],a.shape[2]])),an(4===s.rank,(()=>`Error in maxPool: input must be rank 4 but got rank ${s.rank}.`)),an(rs(n,1),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`)),null!=o&&an(pn(r),(()=>`Error in maxPool: pad must be an integer when using, dimRoundingMode ${o} but got pad ${r}.`));const u={x:s},c={filterSize:e,strides:n,pad:r,dimRoundingMode:o},l=gr.runKernelFunc(((t,a)=>{const i=Ua(s.shape,e,n,1,r,o);let u;return u=1===i.filterWidth&&1===i.filterHeight&&hn(i.inShape,i.outShape)?s.clone():t.maxPool(s,i),a([s,u]),u}),u,null,Bt,c);return i?$o(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Bi=Fr({maxPool3d_:function(t,e=[1,1,1],n,r,o,a="NDHWC",s){null==s?s=[1,1,1]:ya("dilations is deprecated, this field will be gone in v3.0.0.");const i=Er(t,"x","maxPool3d");let u=i,c=!1;4===i.rank&&(c=!0,u=$o(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),an(5===u.rank,(()=>`Error in maxPool3d: x must be rank 5 but got rank ${u.rank}.`)),an("NDHWC"===a,(()=>"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a)),an(rs(n,s),(()=>`Error in maxPool3d: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`)),null!=o&&an(pn(r),(()=>`Error in maxPool3d: pad must be an integer when using, dimRoundingMode ${o} but got pad ${r}.`));const l={x:u},h={filterSize:e,strides:n,pad:r,dimRoundingMode:o,dataFormat:a,dilations:s},p=gr.runKernelFunc(((t,i)=>{null==s&&(s=[1,1,1]);const c=Va(u.shape,e,n,s,r,o,a),l=t.maxPool3d(u,c);return i([u,l]),l}),l,null,Lt,h);return c?$o(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ri=Fr({maxPoolWithArgmax_:function(t,e,n,r,o=!1){const a={x:Er(t,"x","maxPoolWithArgmax")},s={filterSize:e,strides:n,pad:r,includeBatchInIndex:o},i=gr.runKernel(zt,a,s);return{result:i[0],indexes:i[1]}}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Li(t,e="float32"){if("complex64"===e){const e=Li(t,"float32"),n=Li(t,"float32");return Ir(e,n)}const n=Bn(ln(t),e);return gr.makeTensor(n,t,e)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Oi(t,e="float32"){if("complex64"===e){const e=Oi(t,"float32"),n=Li(t,"float32");return Ir(e,n)}const n=Cn(ln(t),e);return gr.makeTensor(n,t,e)}
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const zi=Fr({mean_:function(t,e=null,n=!1){const r=Er(t,"x","mean"),o=mn(e,r.shape),a=ln(Pa(r.shape,o)[1]);return xi((t=>{const r=di(a),s=r.dtype===t.dtype?t:vo(t,r.dtype),i=Sa(s,r);return{value:Ii(i,e,n),gradFunc:e=>{const n=t.shape.slice();o.forEach((t=>{n[t]=1}));const r=$o(e,n);return Sa(Da(r,Oi(t.shape,"float32")),a)}}}))(r)}});const Wi=Fr({min_:function(t,e=null,n=!1){const r=Er(t,"x","min"),o={x:r},a={axis:e,keepDims:n};return gr.runKernelFunc(((t,o)=>{const a=mn(e,r.shape);let s=a;const i=Ca(s,r.rank);let u=r;null!=i&&(u=Ro(r,i),s=Ra(s.length,r.rank));const c=t.min(u,s);null!=i&&u.dispose();let l=c;if(n){const t=$a(l.shape,a);l=$o(c,t),c.dispose()}return o([r,l]),l}),o,null,Wt,a)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const qi=Fr({minimum_:function(t,e){let n=Er(t,"a","minimum"),r=Er(e,"b","minimum");[n,r]=ur(n,r),"bool"===n.dtype&&(n=vo(n,"int32"),r=vo(r,"int32")),qs(n.shape,r.shape);const o={a:n,b:r};return gr.runKernelFunc(((t,e)=>{const o=t.minimum(n,r);return e([n,r]),o}),o,null,qt)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ji=Fr({mod_:function(t,e){let n=Er(t,"a","mod"),r=Er(e,"b","mod");[n,r]=ur(n,r);const o={a:n,b:r};return gr.runKernelFunc(((t,e)=>{const o=t.mod(n,r);return e([n,r]),o}),o,null,jt)}});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Gi=Fr({square_:function(t){const e=Er(t,"x","square"),n=[e];return gr.runKernelFunc(((t,n)=>(n([e]),t.square(e))),{x:e},null,"Square",{},n,[])}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ki=Fr({moments_:function(t,e=null,n=!1){const r=mn(e,(t=Er(t,"x","moments")).shape),o=zi(t,r,n);let a=o.shape;n||(a=$a(o.shape,r));const s=Gi(Fi(vo(t,"float32"),$o(o,a)));return{mean:o,variance:zi(s,r,n)}}});const Hi=Fr({multiRNNCell_:function(t,e,n,r){const o=Er(e,"data","multiRNNCell"),a=Sr(n,"c","multiRNNCell"),s=Sr(r,"h","multiRNNCell");let i=o;const u=[];for(let e=0;e<t.length;e++){const n=t[e](i,a[e],s[e]);u.push(n[0]),u.push(n[1]),i=n[1]}const c=[],l=[];for(let t=0;t<u.length;t+=2)c.push(u[t]),l.push(u[t+1]);return[c,l]}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ui=Fr({multinomial_:function(t,e,n,r=!1){const o=Er(t,"logits","multinomial"),a=o.size,s=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(s>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+s);n=n||Math.random();const i=1===s?$o(o,[1,-1]):o,u=gr.runKernelFunc((t=>t.multinomial(i,r,e,n)),{logits2D:i});return 1===s?$o(u,[u.size]):u}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Vi=Fr({notEqual_:function(t,e){let n=Er(t,"a","notEqual"),r=Er(e,"b","notEqual");[n,r]=ur(n,r),qs(n.shape,r.shape);const o={a:n,b:r};return gr.runKernelFunc((t=>t.notEqual(n,r)),o,null,Ht)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ji=Fr({real_:function(t){const e=Er(t,"input","real"),n={input:e};return gr.runKernelFunc((t=>t.real(e)),n,null,re)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Yi=Fr({onesLike_:function(t){const e=Er(t,"x","onesLike"),n={x:e};return gr.runKernelFunc(((t,n)=>{if("complex64"===e.dtype){const t=Yi(Ji(e)),n=Ks(ui(e));return Ir(t,n)}return t.onesLike(e)}),n,null,Yt)}});const Xi=Fr({outerProduct_:function(t,e){const n=Er(t,"v1","outerProduct"),r=Er(e,"v2","outerProduct");an(1===n.rank&&1===r.rank,(()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`));const o=$o(n,[-1,1]),a=$o(r,[1,-1]);return Co(o,a)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Zi=Fr({pad_:function(t,e,n=0){const r=Er(t,"x","pad");if(0===r.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const o={paddings:e,constantValue:n},a={x:r};return gr.runKernelFunc(((t,o)=>(o([r]),t.pad(r,e,n))),a,null,Zt,o)}});const Qi=Fr({pad1d_:function(t,e,n=0){return an(2===e.length,(()=>"Invalid number of paddings. Must be length of 2.")),Zi(t,[e],n)}});const tu=Fr({pad2d_:function(t,e,n=0){return an(2===e.length&&2===e[0].length&&2===e[1].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),Zi(t,e,n)}});const eu=Fr({pad3d_:function(t,e,n=0){return an(3===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),Zi(t,e,n)}});const nu=Fr({pad4d_:function(t,e,n=0){return an(4===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length&&2===e[3].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),Zi(t,e,n)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ru=Fr({spaceToBatchND_:function(t,e,n){const r=Er(t,"x","spaceToBatchND");an(r.rank>=1+e.length,(()=>`input rank ${r.rank} should be > than [blockShape] ${e.length}`)),an(n.length===e.length,(()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${e.length}`)),an(r.shape.reduce(((t,r,o)=>o>0&&o<=e.length?t&&(r+n[o-1][0]+n[o-1][1])%e[o-1]==0:t),!0),(()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${e.toString()}`));const o={x:r},a={blockShape:e,paddings:n};return gr.runKernelFunc((t=>t.spaceToBatchND(r,e,n)),o,null,De,a)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ou=Fr({pool_:function(t,e,n,r,o,a){null==o&&(o=[1,1]),null==a&&(a=1),0===r&&(r="valid");const s=Er(t,"x","maxPool");let i=s,u=!1;3===s.rank&&(u=!0,i=$o(s,[1,s.shape[0],s.shape[1],s.shape[2]])),an(rs(a,o),(()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${o}'`));const c=Ua(i.shape,e,a,o,r),l=[c.dilationHeight,c.dilationWidth];let h;h="same"===r?function(t,e){const n=t.map(((t,n)=>t+(t-1)*(e[n]-1))).map((t=>t-1)),r=n.map((t=>Math.floor(t/2))),o=n.map(((t,e)=>t-r[e]));return n.map(((t,e)=>[r[e],o[e]]))}([c.filterHeight,c.filterWidth],l):[[0,0],[0,0]];const p=1===l[0]&&1===l[1],[d,f]=function(t,e,n){const r=n.map((t=>t[0])),o=n.map((t=>t[1])),a=t.concat(r,o),s=e.map(((t,e)=>(t-a[e]%t)%t)),i=o.map(((t,e)=>t+s[e])),u=e.map(((t,e)=>[r[e],i[e]])),c=e.map(((t,e)=>[0,s[e]]));return[u,c]}([c.inHeight,c.inWidth],l,h),m=p?r:"valid",g=p?i:ru(i,l,d),v=("avg"===n?()=>as(g,e,a,m):()=>Ci(g,e,a,m))(),b=p?v:fs(v,l,f);return u?$o(b,[b.shape[1],b.shape[2],b.shape[3]]):b}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const au=Fr({pow_:function(t,e){let n=Er(t,"base","pow"),r=Er(e,"exp","pow");[n,r]=ur(n,r);const o={a:n,b:r};return gr.runKernelFunc(((t,e)=>{const o=t.pow(n,r);return e([n,r,o]),o}),o,null,Qt)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const su=Fr({prelu_:function(t,e){const n=Er(t,"x","prelu"),r=Er(e,"alpha","prelu"),o={x:n,alpha:r};return gr.runKernelFunc(((t,e)=>{const o=t.prelu(n,r);return e([n,r]),o}),o,null,te)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const iu=Fr({prod_:function(t,e=null,n=!1){let r=Er(t,"x","prod");const o={x:r},a={axis:e,keepDims:n};return gr.runKernelFunc((t=>{"bool"===r.dtype&&(r=vo(r,"int32"));const o=mn(e,r.shape),a=Ca(o,r.rank);let s=o,i=r;null!=a&&(i=Ro(r,a),s=Ra(s.length,r.rank));let u=t.prod(i,s);if(n){const t=$a(u.shape,o);u=$o(u,t)}return u}),o,null,ee,a)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const uu=Fr({rand_:function(t,e,n){const r=ln(t);let o=null;if(null==n||"float32"===n)o=new Float32Array(r);else if("int32"===n)o=new Int32Array(r);else{if("bool"!==n)throw new Error("Unknown data type "+n);o=new Uint8Array(r)}for(let t=0;t<r;t++)o[t]=e();return gr.makeTensor(o,t,n)}});"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function cu(t,e){return t(e={exports:{}},e.exports),e.exports}var lu=cu((function(t){!function(t,e,n){function r(t){var e,n=this,r=(e=4022871197,function(t){t=t.toString();for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)});n.next=function(){var t=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=t-(n.c=0|t)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(t),n.s0<0&&(n.s0+=1),n.s1-=r(t),n.s1<0&&(n.s1+=1),n.s2-=r(t),n.s2<0&&(n.s2+=1),r=null}function o(t,e){return e.c=t.c,e.s0=t.s0,e.s1=t.s1,e.s2=t.s2,e}function a(t,e){var n=new r(t),a=e&&e.state,s=n.next;return s.int32=function(){return 4294967296*n.next()|0},s.double=function(){return s()+11102230246251565e-32*(2097152*s()|0)},s.quick=s,a&&("object"==typeof a&&o(a,n),s.state=function(){return o(n,{})}),s}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.alea=a}(0,t,!1)})),hu=cu((function(t){!function(t,e,n){function r(t){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var t=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^t^t>>>8},t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),e.next()}function o(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e}function a(t,e){var n=new r(t),a=e&&e.state,s=function(){return(n.next()>>>0)/4294967296};return s.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},s.int32=n.next,s.quick=s,a&&("object"==typeof a&&o(a,n),s.state=function(){return o(n,{})}),s}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.xor128=a}(0,t,!1)})),pu=cu((function(t){!function(t,e,n){function r(t){var e=this,n="";e.next=function(){var t=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^t^t<<1)|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),r==n.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function o(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e.v=t.v,e.d=t.d,e}function a(t,e){var n=new r(t),a=e&&e.state,s=function(){return(n.next()>>>0)/4294967296};return s.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},s.int32=n.next,s.quick=s,a&&("object"==typeof a&&o(a,n),s.state=function(){return o(n,{})}),s}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.xorwow=a}(0,t,!1)})),du=cu((function(t){!function(t,e,n){function r(t){var e=this;e.next=function(){var t,n,r=e.x,o=e.i;return t=r[o],n=(t^=t>>>7)^t<<24,n^=(t=r[o+1&7])^t>>>10,n^=(t=r[o+3&7])^t>>>3,n^=(t=r[o+4&7])^t<<7,t=r[o+7&7],n^=(t^=t<<13)^t<<9,r[o]=n,e.i=o+1&7,n},function(t,e){var n,r=[];if(e===(0|e))r[0]=e;else for(e=""+e,n=0;n<e.length;++n)r[7&n]=r[7&n]<<15^e.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],t.x=r,t.i=0,n=256;n>0;--n)t.next()}(e,t)}function o(t,e){return e.x=t.x.slice(),e.i=t.i,e}function a(t,e){null==t&&(t=+new Date);var n=new r(t),a=e&&e.state,s=function(){return(n.next()>>>0)/4294967296};return s.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},s.int32=n.next,s.quick=s,a&&(a.x&&o(a,n),s.state=function(){return o(n,{})}),s}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.xorshift7=a}(0,t,!1)})),fu=cu((function(t){!function(t,e,n){function r(t){var e=this;e.next=function(){var t,n,r=e.w,o=e.X,a=e.i;return e.w=r=r+1640531527|0,n=o[a+34&127],t=o[a=a+1&127],n^=n<<13,t^=t<<17,n^=n>>>15,t^=t>>>12,n=o[a]=n^t,e.i=a,n+(r^r>>>16)|0},function(t,e){var n,r,o,a,s,i=[],u=128;for(e===(0|e)?(r=e,e=null):(e+="\0",r=0,u=Math.max(u,e.length)),o=0,a=-32;a<u;++a)e&&(r^=e.charCodeAt((a+32)%e.length)),0===a&&(s=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(s=s+1640531527|0,o=0==(n=i[127&a]^=r+s)?o+1:0);for(o>=128&&(i[127&(e&&e.length||0)]=-1),o=127,a=512;a>0;--a)r=i[o+34&127],n=i[o=o+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,i[o]=r^n;t.w=s,t.X=i,t.i=o}(e,t)}function o(t,e){return e.i=t.i,e.w=t.w,e.X=t.X.slice(),e}function a(t,e){null==t&&(t=+new Date);var n=new r(t),a=e&&e.state,s=function(){return(n.next()>>>0)/4294967296};return s.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},s.int32=n.next,s.quick=s,a&&(a.X&&o(a,n),s.state=function(){return o(n,{})}),s}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.xor4096=a}(0,t,!1)})),mu=cu((function(t){!function(t,e,n){function r(t){var e=this,n="";e.next=function(){var t=e.b,n=e.c,r=e.d,o=e.a;return t=t<<25^t>>>7^n,n=n-r|0,r=r<<24^r>>>8^o,o=o-t|0,e.b=t=t<<20^t>>>12^n,e.c=n=n-r|0,e.d=r<<16^n>>>16^o,e.a=o-t|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,t===Math.floor(t)?(e.a=t/4294967296|0,e.b=0|t):n+=t;for(var r=0;r<n.length+20;r++)e.b^=0|n.charCodeAt(r),e.next()}function o(t,e){return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e}function a(t,e){var n=new r(t),a=e&&e.state,s=function(){return(n.next()>>>0)/4294967296};return s.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},s.int32=n.next,s.quick=s,a&&("object"==typeof a&&o(a,n),s.state=function(){return o(n,{})}),s}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.tychei=a}(0,t,!1)})),gu=cu((function(t){!function(e,n){var o,a=this,s=256,i=n.pow(s,6),u=n.pow(2,52),c=2*u,l=255;function h(t,r,l){var h=[],v=m(f((r=1==r?{entropy:!0}:r||{}).entropy?[t,g(e)]:null==t?function(){try{var t;return o&&(t=o.randomBytes)?t=t(s):(t=new Uint8Array(s),(a.crypto||a.msCrypto).getRandomValues(t)),g(t)}catch(t){var n=a.navigator,r=n&&n.plugins;return[+new Date,a,r,a.screen,g(e)]}}():t,3),h),b=new p(h),y=function(){for(var t=b.g(6),e=i,n=0;t<u;)t=(t+n)*s,e*=s,n=b.g(1);for(;t>=c;)t/=2,e/=2,n>>>=1;return(t+n)/e};return y.int32=function(){return 0|b.g(4)},y.quick=function(){return b.g(4)/4294967296},y.double=y,m(g(b.S),e),(r.pass||l||function(t,e,r,o){return o&&(o.S&&d(o,b),t.state=function(){return d(b,{})}),r?(n.random=t,e):t})(y,v,"global"in r?r.global:this==n,r.state)}function p(t){var e,n=t.length,r=this,o=0,a=r.i=r.j=0,i=r.S=[];for(n||(t=[n++]);o<s;)i[o]=o++;for(o=0;o<s;o++)i[o]=i[a=l&a+t[o%n]+(e=i[o])],i[a]=e;(r.g=function(t){for(var e,n=0,o=r.i,a=r.j,i=r.S;t--;)e=i[o=l&o+1],n=n*s+i[l&(i[o]=i[a=l&a+e])+(i[a]=e)];return r.i=o,r.j=a,n})(s)}function d(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function f(t,e){var n,r=[],o=typeof t;if(e&&"object"==o)for(n in t)try{r.push(f(t[n],e-1))}catch(t){}return r.length?r:"string"==o?t:t+"\0"}function m(t,e){for(var n,r=t+"",o=0;o<r.length;)e[l&o]=l&(n^=19*e[l&o])+r.charCodeAt(o++);return g(e)}function g(t){return String.fromCharCode.apply(0,t)}if(n.seedrandom=h,m(n.random(),e),t.exports){t.exports=h;try{o=r.default}catch(t){}}}([],Math)}));gu.alea=lu,gu.xor128=hu,gu.xorwow=pu,gu.xorshift7=du,gu.xor4096=fu,gu.tychei=mu;
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class vu{constructor(t,e,n,r,o){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);const a=o||Math.random();this.random=(void 0)(a.toString())}nextValue(){if(!isNaN(this.nextVal)){const t=this.nextVal;return this.nextVal=NaN,t}let t,e,n=!1;for(;!n;){let r,o,a;do{r=2*this.random()-1,o=2*this.random()-1,a=r*r+o*o}while(a>=1||0===a);const s=Math.sqrt(-2*Math.log(a)/a);t=this.mean+this.stdDev*r*s,e=this.mean+this.stdDev*o*s,this.truncated&&!this.isValidTruncated(t)||(n=!0)}return this.truncated&&!this.isValidTruncated(e)||(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return null==this.dtype||"float32"===this.dtype?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class bu{constructor(t,e,n,r){this.alpha=t,this.beta=1/e,this.dtype=n;const o=r||Math.random();this.randu=(void 0)(o.toString()),this.randn=new vu(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,e,n,r,o,a;for(;;){do{r=this.randn.nextValue(),a=1+this.c*r}while(a<=0);if(a*=a*a,t=r*r,e=1-.331*t*t,n=.5*t+this.d*(1-a+Math.log(a)),o=this.randu(),o<e||Math.log(o)<n)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)}convertValue(t){return"float32"===this.dtype?t:Math.round(t)}}class yu{constructor(t=0,e=1,n,r){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=t,this.range=e-t,this.dtype=n,null==r&&(r=Math.random()),"number"==typeof r&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=(void 0)(r)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const wu=Fr({randomGamma_:function(t,e,n=1,r="float32",o){if(null==n&&(n=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw new Error("Unsupported data type "+r);const a=new bu(e,n,r,o),s=go(t,r);for(let t=0;t<s.values.length;t++)s.values[t]=a.nextValue();return s.toTensor()}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const xu=Fr({randomNormal_:function(t,e=0,n=1,r,o){if(null!=r&&"bool"===r)throw new Error("Unsupported data type "+r);const a=new vu(e,n,r,!1,o),s=go(t,r);for(let t=0;t<s.values.length;t++)s.values[t]=a.nextValue();return s.toTensor()}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ku=Fr({randomUniform_:function(t,e=0,n=1,r="float32",o){const a=go(t,r),s=new yu(e,n,null,o);for(let t=0;t<a.values.length;t++)a.values[t]=s.nextValue();return a.toTensor()}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function _u(t,e){un(t);const n=xr(t,e);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Mr(t,null,n,e)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Eu(t,e,n=1,r="float32"){if(0===n)throw new Error("Cannot have a step of zero");const o={start:t,stop:e,step:n,dtype:r};return gr.runKernelFunc((()=>{if(t===e||t<e&&n<0||e<t&&n>1)return Li([0],r);const o=Bn(Math.abs(Math.ceil((e-t)/n)),r);e<t&&1===n&&(n=-1),o[0]=t;for(let t=1;t<o.length;t++)o[t]=o[t-1]+n;return _u(o,r)}),{},null,ne,o)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Su=Fr({reciprocal_:function(t){const e=Er(t,"x","reciprocal"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.reciprocal(e);return n([e]),r}),n,null,oe)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Du=Fr({relu_:function(t){const e=Er(t,"x","relu"),n={x:e};return gr.runKernelFunc(((t,n)=>(n([e]),"bool"===e.dtype?vo(e,"int32"):t.relu(e))),n,null,ae)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Fu=Fr({relu6_:function(t){const e=Er(t,"x","relu6"),n={x:e};return gr.runKernelFunc(((t,n)=>(n([e]),"bool"===e.dtype?vo(e,"int32"):t.relu6(e))),n,null,he)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Iu=Fr({reverse_:function(t,e){const n=Er(t,"x","reverse"),r={x:n},o={dims:e};return gr.runKernelFunc((t=>{const r=mn(e,n.shape);if(0===n.rank)return bo(n);const o=t.reverse(n,r);return $o(o,n.shape)}),r,null,pe,o)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Mu=Fr({reverse1d_:function(t){const e=Er(t,"x","reverse");return an(1===e.rank,(()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`)),Iu(e,0)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Nu=Fr({reverse2d_:function(t,e){const n=Er(t,"x","reverse");return an(2===n.rank,(()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`)),Iu(n,e)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Tu=Fr({reverse3d_:function(t,e){const n=Er(t,"x","reverse");return an(3===n.rank,(()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`)),Iu(n,e)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Au=Fr({reverse4d_:function(t,e){const n=Er(t,"x","reverse");return an(4===n.rank,(()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`)),Iu(n,e)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Pu=Fr({round_:function(t){const e=Er(t,"x","round"),n={x:e};return gr.runKernelFunc((t=>t.round(e)),n,null,de)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const $u=Fr({rsqrt_:function(t){const e=Er(t,"x","rsqrt"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.rsqrt(e);return n([e]),r}),n,null,fe)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Cu=Fr({selu_:function(t){const e=Er(t,"x","selu"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.selu(e);return n([e]),r}),n,null,ve)}});const Bu=Fr({separableConv2d_:function(t,e,n,r,o,a=[1,1],s="NHWC"){const i=Er(t,"x","separableConv2d"),u=Er(e,"depthwiseFilter","separableConv2d"),c=Er(n,"pointwiseFilter","separableConv2d");let l=i,h=!1;if(3===i.rank&&(h=!0,l=$o(i,[1,i.shape[0],i.shape[1],i.shape[2]])),"NCHW"===s)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");an(4===l.rank,(()=>`Error in separableConv2d: input must be rank 4, but got rank ${l.rank}.`)),an(4===u.rank,(()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`)),an(4===c.rank,(()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`)),an(1===c.shape[0],(()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`)),an(1===c.shape[1],(()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`));const p=u.shape[2],d=u.shape[3];an(c.shape[2]===p*d,(()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${p*d}, but got ${c.shape[2]}.`));const f=Ls(l,u,r,o,s,a),m=Fs(f,c,1,"valid",s);return h?$o(m,[m.shape[1],m.shape[2],m.shape[3]]):m}});
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ru=async function(t,e){const n=Er(t,"x","setdiff1d"),r=Er(e,"y","setdiff1d");an(n.dtype===r.dtype,(()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`)),an(1===n.rank,(()=>`x should be 1D tensor, but got x (${n.shape}).`)),an(1===r.rank,(()=>`y should be 1D tensor, but got y (${r.shape}).`));const o=await n.data(),a=await r.data(),s=new Set(a);let i=0;for(let t=0;t<o.length;t++)s.has(o[t])||i++;const u=new Yn([i],n.dtype),c=new Yn([i],"int32");for(let t=0,e=0;t<o.length;t++)s.has(o[t])||(u.values[e]=o[t],c.values[e]=t,e++);return[u.toTensor(),c.toTensor()]};
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Lu=Fr({sign_:function(t){const e=Er(t,"x","sign"),n={x:e};return gr.runKernelFunc((t=>t.sign(e)),n,null,xe)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ou=Fr({sin_:function(t){const e=Er(t,"x","sin"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.sin(e);return n([e]),r}),n,null,ye)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const zu=Fr({sinh_:function(t){const e=Er(t,"x","sinh"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.sinh(e);return n([e]),r}),n,null,we)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Wu=Fr({slice1d_:function(t,e,n){const r=Er(t,"x","slice1d");return an(1===r.rank,(()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`)),hs(r,[e],[n])}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const qu=Fr({slice2d_:function(t,e,n){const r=Er(t,"x","slice2d");return an(2===r.rank,(()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`)),hs(r,e,n)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ju=Fr({slice3d_:function(t,e,n){const r=Er(t,"x","slice3d");return an(3===r.rank,(()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`)),hs(r,e,n)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Gu=Fr({slice4d_:function(t,e,n){const r=Er(t,"x","slice4d");return an(4===r.rank,(()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`)),hs(r,e,n)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ku=Fr({softmax_:function(t,e=-1){const n=Er(t,"logits","softmax","float32");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${e}`);const r={logits:n},o={dim:e};return gr.runKernelFunc(((t,r)=>{const o=t.softmax(n,e);return r([o]),o}),r,null,Ie,o)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Hu=Fr({fft_:function(t){an("complex64"===t.dtype,(()=>`The dtype for tf.spectral.fft() must be complex64 but got ${t.dtype}.`));const e={input:t};return gr.runKernelFunc((e=>{const n=t.shape[t.shape.length-1],r=t.size/n,o=t.as2D(r,n);return e.fft(o).reshape(t.shape)}),e,null,"FFT")}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Uu=Fr({ifft_:function(t){an("complex64"===t.dtype,(()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${t.dtype}.`));const e={input:t};return gr.runKernelFunc((e=>{const n=t.shape[t.shape.length-1],r=t.size/n,o=$o(t,[r,n]),a=e.ifft(o);return $o(a,t.shape)}),e,null,bt)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Vu=Fr({irfft_:function(t){const e=t.shape[t.shape.length-1],n=t.size/e;let r;if(e<=2){const o=$o(t,[n,e]);r=Uu(o)}else{const o=[n,2*(e-1)],a=$o(Ji(t),[n,e]),s=$o(ui(t),[n,e]),i=Iu(hs(a,[0,1],[n,e-2]),1),u=Da(Iu(hs(s,[0,1],[n,e-2]),1),di(-1)),c=cs([a,i],1),l=cs([s,u],1),h=$o(Ir(c,l),[o[0],o[1]]);r=Uu(h)}if(r=Ji(r),3===t.rank&&0!==t.shape[0]){const e=r,n=t.shape[0];r=$o(r,[n,r.shape[0]/n,r.shape[1]]),e.dispose()}return r}});function Ju(t,e,n=0){let r=[];if("number"==typeof e)an(t.shape[n]%e==0,(()=>"Number of splits must evenly divide the axis.")),r=new Array(e).fill(t.shape[n]/e);else{an(e.reduce(((t,e)=>(-1===e&&(t+=1),t)),0)<=1,(()=>"There should be only one negative value in split array."));const o=e.indexOf(-1);if(-1!==o){const r=e.reduce(((t,e)=>e>0?t+e:t));e[o]=t.shape[n]-r}an(t.shape[n]===e.reduce(((t,e)=>t+e)),(()=>"The sum of sizes must match the size of the axis dimension.")),r=e}return r}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Yu=Fr({split_:function(t,e,n=0){const r=Er(t,"x","split"),o={x:r},a={numOrSizeSplits:e,axis:n};return gr.runKernelFunc(((t,o)=>{const a=mn(n,r.shape)[0],s=Ju(r,e,a);return t.split(r,s,a)}),o,null,Fe,a)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Xu=Fr({rfft_:function(t,e){an("float32"===t.dtype,(()=>"The dtype for rfft() must be real value but got "+t.dtype));let n=t.shape[t.shape.length-1];const r=t.size/n;let o;if(null!=e&&e<n){const r=t.shape.map((t=>0)),a=t.shape.map((t=>t));a[t.shape.length-1]=e,o=hs(t,r,a),n=e}else if(null!=e&&e>n){const r=t.shape.map((t=>t));r[t.shape.length-1]=e-n,o=cs([t,Li(r)],t.shape.length-1),n=e}else o=t;const a=Ks(o),s=$o(Ir(o,a),[r,n]),i=Hu(s),u=Math.floor(n/2)+1,c=Ji(i),l=ui(i),h=Yu(c,[u,n-u],c.shape.length-1),p=Yu(l,[u,n-u],l.shape.length-1),d=o.shape.slice();return d[o.shape.length-1]=u,$o(Ir(h[0],p[0]),d)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Zu=Fr({sqrt_:function(t){const e=Er(t,"x","sqrt"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.sqrt(e);return n([e]),r}),n,null,Ee)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Qu=Fr({squaredDifference_:function(t,e){let n=Er(t,"a","squaredDifference"),r=Er(e,"b","squaredDifference");[n,r]=ur(n,r),qs(n.shape,r.shape);const o={a:n,b:r};return gr.runKernelFunc(((t,e)=>{const o=t.squaredDifference(n,r);return e([n,r]),o}),o,null,Me,{})}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const tc=Fr({squeeze_:function(t,e){const n=Er(t,"x","squeeze");return $o(n,gn(n.shape,e).newShape)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ec=Fr({stack_:function(t,e=0){const n=Sr(t,"tensors","stack");if(an(n.length>=1,(()=>"Pass at least one tensor to tf.stack")),1===n.length)return Xs(n[0],e);const r=n[0].rank,o=n[0].shape,a=n[0].dtype;an(e<=r,(()=>"Axis must be <= rank of the tensor")),n.forEach((t=>{sn(o,t.shape,"All tensors passed to stack must have matching shapes"),an(a===t.dtype,(()=>"All tensors passed to stack must have matching dtypes"))}));const s=n.map((t=>Xs(t,e)));return cs(s,e)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const nc=Fr({step_:function(t,e=0){const n=Er(t,"x","step"),r={x:n},o={alpha:e};return gr.runKernelFunc((t=>t.step(n,e)),r,null,je,o)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const rc=Fr({stridedSlice_:function(t,e,n,r,o=0,a=0,s=0,i=0,u=0){let c=Er(t,"x","stridedSlice");const l={x:c},h={begin:e,end:n,strides:r,beginMask:o,endMask:a,ellipsisMask:s,newAxisMask:i,shrinkAxisMask:u};return gr.runKernelFunc((t=>{null==r&&(r=new Array(e.length));const l=Zo(s);if(l.length>1)throw new Error("Multiple ellipses in slice is not allowed.");if(0!==s&&0!==i)throw new Error("Using both ellipsisMask and newAxisMask is not yet supported.");if(0!==s&&0!==u)throw new Error("Using both ellipsisMask and shrinkAxisMask is not yet supported.");const h=c.rank-e.length,p=Zo(i),d=c.shape.slice();p.forEach((t=>{e[t]=0,n[t]=1,d.splice(t,0,1)})),c=$o(c,d);const{begin:f,end:m,strides:g}=ra(c.shape,l,h,e,n,r,o,a,s);e=f,n=m,r=g;const v=Zo(u);v.forEach((t=>{n[t]=e[t]+1,r[t]=1}));const b=Qo(e,n,r),y=b.filter(((t,e)=>-1===v.indexOf(e)));if(r.every((t=>1===t)))return $o(hs(c,e,b),y);const w=t.stridedSlice(c,e,n,r);return $o(w,y)}),l,null,Pe,h)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const oc=Fr({tan_:function(t){const e=Er(t,"x","tan"),n={x:e};return gr.runKernelFunc(((t,n)=>{const r=t.tan(e);return n([e]),r}),n,null,$e)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ac(t,e,n){if(un(t),null!=e&&2!==e.length)throw new Error("tensor2d() requires shape to have two numbers");const r=xr(t,n);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Mr(t,e,r,n)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function sc(t,e,n){if(un(t),null!=e&&4!==e.length)throw new Error("tensor4d() requires shape to have four numbers");const r=xr(t,n);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Mr(t,e,r,n)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ic=Fr({topk_:
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e=1,n=!0){const r=Er(t,"x","topk");if(0===r.rank)throw new Error("topk() expects the input to be of rank 1 or higher");const o=r.shape[r.shape.length-1];if(e>o)throw new Error(`'k' passed to topk() must be <= the last dimension (${o}) but got `+e);const a={x:r},s={k:e,sorted:n},[i,u]=gr.runKernelFunc((t=>t.topk(r,e,n)),a,null,Re,s);return{values:i,indices:u}}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const uc=Fr({truncatedNormal_:function(t,e=0,n=1,r,o){if(null!=r&&"bool"===r)throw new Error("Unsupported data type $ { dtype }");const a=new vu(e,n,r,!0,o),s=go(t,r);for(let t=0;t<s.values.length;t++)s.values[t]=a.nextValue();return s.toTensor()}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const cc=Fr({unique_:function(t,e=0){const n=Er(t,"x","unique",null);an(n.rank>0,(()=>"The input tensor must be at least 1D"));const r={x:n},o={axis:e},[a,s]=gr.runKernel(Oe,r,o);return{values:a,indices:s}}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const lc=Fr({unsortedSegmentSum_:function(t,e,n){const r=Er(t,"x","unsortedSegmentSum"),o=Er(e,"segmentIds","unsortedSegmentSum","int32");an(pn(n),(()=>"numSegments must be of dtype int"));const a={x:r,segmentIds:o},s={numSegments:n};return gr.runKernelFunc(((t,e)=>{const a=t.unsortedSegmentSum(r,o,n);return e([o]),a}),a,null,We,s)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const hc=Fr({unstack_:function(t,e=0){const n=Er(t,"x","unstack");an(e>=-n.shape.length&&e<n.shape.length,(()=>`Axis = ${e} is not in [-${n.shape.length}, ${n.shape.length})`)),e<0&&(e+=n.shape.length);const r={value:n},o={axis:e};return gr.runKernelFunc((t=>t.unstack(n,e)),r,null,ze,o)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function pc(t,e){const n=[];for(let t=0;t<e.length;t++)e[t]&&n.push(t);const r=go(t,"int32"),o=go([n.length,t.length],"int32");for(let e=0;e<n.length;e++){const a=r.indexToLoc(n[e]),s=e*t.length;o.values.set(a,s)}return o.toTensor()}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const dc=async function(t){const e=Er(t,"condition","whereAsync","bool"),n=await e.data(),r=pc(e.shape,n);return t!==e&&e.dispose(),r};
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const fc=async function(t,e,n){const r=Er(t,"tensor","boolMask"),o=Er(e,"mask","boolMask","bool"),a=null==n?0:n,s=o.rank,i=r.shape;an(s>0,(()=>"mask cannot be scalar")),sn(i.slice(a,a+s),o.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let t=a;t<a+s;t++)u*=i[t];const c=i.slice(0,a).concat([u],i.slice(a+s)),l=$o(r,c),h=$o(o,[-1]),p=await dc(h),d=tc(p,[1]),f=ai(l,d,a);return t!==r&&r.dispose(),e!==o&&o.dispose(),d.dispose(),l.dispose(),h.dispose(),p.dispose(),f};
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const mc=Fr({equalStrict_:function(t,e){ya("strict variants of ops have been deprecated and will be removed in future");const n=Er(t,"a","equalStrict"),r=Er(e,"b","equalStrict");return sn(n.shape,r.shape,"Error in equalStrict: "),js(n,r)}}),gc=Fr({greaterEqualStrict_:function(t,e){ya("strict variants of ops have been deprecated and will be removed in future");const n=Er(t,"a","greaterEqualStrict"),r=Er(e,"b","greaterEqualStrict");return sn(n.shape,r.shape,"Error in greaterEqualStrict: "),ii(n,r)}}),vc=Fr({greaterStrict_:function(t,e){ya("strict variants of ops have been deprecated and will be removed in future");const n=Er(t,"a","greaterStrict"),r=Er(e,"b","greaterStrict");return sn(n.shape,r.shape,"Error in greaterStrict: "),si(n,r)}}),bc=Fr({lessEqualStrict_:function(t,e){ya("strict variants of ops have been deprecated and will be removed in future");const n=Er(t,"a","lessEqualStrict"),r=Er(e,"b","lessEqualStrict");return sn(n.shape,r.shape,"Error in lessEqualStrict: "),gi(n,r)}}),yc=Fr({lessStrict_:function(t,e){ya("strict variants of ops have been deprecated and will be removed in future");const n=Er(t,"a","lessStrict"),r=Er(e,"b","lessStrict");return sn(n.shape,r.shape,"Error in lessStrict: "),mi(n,r)}}),wc=Fr({notEqualStrict_:function(t,e){ya("strict variants of ops have been deprecated and will be removed in future");const n=Er(t,"a","notEqualStrict"),r=Er(e,"b","notEqualStrict");return sn(n.shape,r.shape,"Error in notEqualStrict: "),Vi(n,r)}});const xc=Fr({addStrict_:
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e){ya("strict variants of ops have been deprecated and will be removed in future");const n=Er(t,"a","addStrict"),r=Er(e,"b","addStrict");return sn(n.shape,r.shape,"Error in addStrict: "),_a(n,r)}}),kc=Fr({divStrict_:function(t,e){ya("strict variants of ops have been deprecated and will be removed in future");const n=Er(t,"a","div"),r=Er(e,"b","div");return sn(n.shape,r.shape,"Error in divideStrict: "),Sa(n,r)}}),_c=Fr({maximumStrict_:function(t,e){ya("strict variants of ops have been deprecated and will be removed in future");const n=Er(t,"a","maximumStrict"),r=Er(e,"b","maximumStrict");return sn(n.shape,r.shape,"Error in maximumStrict: "),pi(n,r)}}),Ec=Fr({minimumStrict_:function(t,e){ya("strict variants of ops have been deprecated and will be removed in future");const n=Er(t,"a","minimumStrict"),r=Er(e,"b","minimumStrict");return sn(n.shape,r.shape,"Error in minimumStrict: "),qi(n,r)}}),Sc=Fr({modStrict_:function(t,e){ya("strict variants of ops have been deprecated and will be removed in future");const n=Er(t,"a","modStrict"),r=Er(e,"b","modStrict");return sn(n.shape,r.shape,"Error in modStrict: "),ji(n,r)}}),Dc=Fr({mulStrict_:function(t,e){ya("strict variants of ops have been deprecated and will be removed in future");const n=Er(t,"a","mul"),r=Er(e,"b","mul");return sn(n.shape,r.shape,"Error in multiplyStrict: "),Da(n,r)}}),Fc=Fr({powStrict_:function(t,e){return ya("strict variants of ops have been deprecated and will be removed in future"),sn(t.shape,e.shape,"Error in powStrict: "),au(t,e)}}),Ic=Fr({squaredDifferenceStrict_:function(t,e){ya("strict variants of ops have been deprecated and will be removed in future");const n=Er(t,"a","squaredDifferenceStrict"),r=Er(e,"b","squaredDifferenceStrict");return sn(n.shape,r.shape,"Error in squaredDifferenceStrict: "),Qu(n,r)}}),Mc=Fr({subStrict_:function(t,e){ya("strict variants of ops have been deprecated and will be removed in future");const n=Er(t,"a","subStrict"),r=Er(e,"b","subStrict");return sn(n.shape,r.shape,"Error in subStrict: "),Fi(n,r)}});function Nc(t,e,n=null){if(0===t.rank)return Fa(t);if(1!==t.rank&&null===n)return Nc($o(t,[-1]),e,n);if(1===t.rank||"number"==typeof n||Array.isArray(n)&&1===n.length){if(1===e)return Ii(Fa(t),n);if(e===1/0)return Di(Fa(t),n);if(e===-1/0)return Wi(Fa(t),n);if("euclidean"===e||2===e)return Zu(Ii(au(Fa(t),di(2,"int32")),n));throw new Error("Error in norm: invalid ord value: "+e)}if(Array.isArray(n)&&2===n.length){if(1===e)return Di(Ii(Fa(t),n[0]),n[1]-1);if(e===1/0)return Di(Ii(Fa(t),n[1]),n[0]);if(e===-1/0)return Wi(Ii(Fa(t),n[1]),n[0]);if("fro"===e||"euclidean"===e)return Zu(Ii(Gi(t),n));throw new Error("Error in norm: invalid ord value: "+e)}throw new Error("Error in norm: invalid axis: "+n)}const Tc=Fr({norm_:
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e="euclidean",n=null,r=!1){const o=Nc(t=Er(t,"x","norm"),e,n);let a=o.shape;if(r){const e=mn(n,t.shape);a=$a(o.shape,e)}return $o(o,a)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ac=Fr({movingAverage_:function(t,e,n,r,o=!0){const a=Er(t,"v","movingAverage"),s=Er(e,"x","movingAverage"),i=Er(n,"decay","movingAverage");cr(a,s),an(hn(a.shape,s.shape),(()=>"Shape mismatch in v and x"));const u=di(1),c=Fi(u,i);let l=Da(Fi(s,a),c);if(o){an(null!=r,(()=>"When using zeroDebias: true, step is required."));const t=Er(r,"step","movingAverage");l=Sa(l,Fi(u,au(i,t)))}return _a(a,l)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Pc=Fr({scatterND_:function(t,e,n){const r=Er(t,"indices","scatterND","int32"),o=Er(e,"updates","scatterND");Vo(o,r,n);const a={indices:r,updates:o},s={shape:n};return gr.runKernelFunc((t=>t.scatterND(r,o,n)),a,null,me,s)}});const $c=Fr({sparseToDense_:
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e,n,r=0){const o=Er(t,"sparseIndices","sparseToDense","int32"),a=Er(e,"sparseValues","sparseToDense"),s=Er(r,"defaultValue","sparseToDense",a.dtype);!function(t,e,n,r){if("int32"!==t.dtype)throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${t.shape}.`);const o=t.rank>0?t.shape[0]:1,a=t.rank>1?t.shape[1]:1;if(n.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${a}.`);const s=e.size;if(0!==e.rank&&(1!==e.rank||s!==o))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${o}]`);if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,n,s);const i={sparseIndices:o,sparseValues:a,defaultValue:s},u={outputShape:n};return gr.runKernelFunc((t=>t.sparseToDense(o,a,n,s)),i,null,Ae,u)}});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Cc=Fr({gatherND_:function(t,e){const n=Er(e,"indices","gatherND","int32"),r=Er(t,"x","gatherND"),o={params:r,indices:n};return gr.runKernelFunc((t=>t.gatherND(r,n)),o,null,ft)}});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Bc=Fr({dropout_:
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e,n,r){const o=Er(t,"x","dropout");if(an("float32"===o.dtype,(()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${o.dtype} tensor instead.`)),an(e>=0&&e<1,(()=>`rate must be a float in the range [0, 1), but got ${e}.`)),0===e)return t instanceof Qn?o.clone():o;const a=function(t,e){if(null==e)return t.shape.slice();if(hn(t.shape,e))return e;if(t.shape.length===e.length){const n=[];for(let r=0;r<t.shape.length;r++)null==e[r]&&null!=t.shape[r]?n.push(t.shape[r]):n.push(e[r]);return n}return e}(o,n),s=1-e,i=Sa(ni(_a(ku(a,0,1,"float32",r),s)),s);return Da(o,i)}});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Rc(t){return Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))}function Lc(t,e,n){const r=1-t%2,o=new Float32Array(t);for(let a=0;a<t;++a){const s=2*Math.PI*a/(t+r-1);o[a]=e-n*Math.cos(s)}return _u(o,"float32")}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Oc=async function(t,e,n=1){const r=Er(t,"predictions","inTopK"),o=Er(e,"targets","inTopK");an(r.rank>1,(()=>"inTopK() expects the predictions to be of rank 2 or higher, but got "+r.rank)),an(r.rank-1===o.rank,(()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${o.rank}`)),sn(r.shape.slice(0,r.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=r.shape[r.shape.length-1];an(n>0&&n<=a,(()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${n}`));const s=await r.data(),i=await o.data(),[u,c]=[s.length/a,a],l=vn("bool",u);for(let t=0;t<u;t++){const e=t*c,r=s.subarray(e,e+c),o=[];for(let t=0;t<r.length;t++)o.push({value:r[t],index:t});o.sort(((t,e)=>e.value-t.value)),l[t]=0;for(let e=0;e<n;e++)if(o[e].index===i[t]){l[t]=1;break}}return t!==r&&r.dispose(),e!==o&&o.dispose(),Nr(l,o.shape,"bool")};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const zc=Fr({conv2DBackpropFilter_:function(t,e,n,r,o,a="NHWC",s){let i=t;3===t.rank&&(i=$o(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let u=e;3===u.rank&&(u=$o(e,[1,e.shape[0],e.shape[1],e.shape[2]])),an(4===i.rank,(()=>"Error in conv2dDerFilter: input must be rank 4, but got shape "+i.shape+".")),an(4===u.rank,(()=>"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+".")),an(4===n.length,(()=>"Error in conv2dDerFilter: filterShape must be length 4, but got "+n+"."));const c="NHWC"===a?i.shape[3]:i.shape[1],l="NHWC"===a?u.shape[3]:u.shape[1];an(c===n[2],(()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${n[2]}.`)),an(l===n[3],(()=>`Error in conv2dDerFilter: depth of dy (${l}) must match output depth for filter (${n[3]}).`)),null!=s&&an(pn(o),(()=>`Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode ${s} but got pad ${o}.`));const h={x:i,dy:u},p={strides:r,pad:o,dataFormat:a,dimRoundingMode:s};return gr.runKernelFunc((t=>{const e=os(a),c=Ja(i.shape,n,r,1,o,s,!1,e);return t.conv2dDerFilter(i,u,c)}),h,null,L,p)}});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Wc(t,e,n){if(null==n||"linear"===n)return t;if("relu"===n)return Da(t,nc(e));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function qc(t,e){let n=e;const r=Ws(t.shape,e.shape);return r.length>0&&(n=Ii(n,r)),$o(n,t.shape)}function jc(t,e,n){if("linear"===e)return t;if("relu"===e)return Du(t);if("elu"===e)return Vs(t);if("relu6"===e)return Fu(t);if("prelu"===e)return su(t,n);throw new Error(`Unknown fused activation ${e}.`)}const Gc=(t,e)=>!(t>0)||"linear"===e;
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Kc=Fr({fusedConv2d_:function({x:t,filter:e,strides:n,pad:r,dataFormat:o="NHWC",dilations:a=[1,1],dimRoundingMode:s,bias:i,activation:u="linear",preluActivationWeights:c}){if(u=u||"linear",!1===Gc(gr.state.gradientDepth,u)){let l=Fs(t,e,n,r,o,a,s);return null!=i&&(l=_a(l,i)),jc(l,u,c)}const l=Er(t,"x","conv2d"),h=Er(e,"filter","conv2d");let p=l,d=!1;3===l.rank&&(d=!0,p=$o(l,[1,l.shape[0],l.shape[1],l.shape[2]])),an(4===p.rank,(()=>"Error in fused conv2d: input must be rank 4, but got rank "+p.rank+".")),an(4===h.rank,(()=>"Error in fused conv2d: filter must be rank 4, but got rank "+h.rank+".")),null!=s&&an(pn(r),(()=>`Error in fused conv2d: pad must be an integer when using, dimRoundingMode ${s} but got pad ${r}.`)),an(p.shape[3]===h.shape[2],(()=>`Error in conv2d: depth of input (${p.shape[3]}) must match input depth for filter ${h.shape[2]}.`)),an(rs(n,a),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`)),an("NHWC"===o,(()=>`Error in conv2d: got dataFormat of ${o} but only NHWC is currently supported.`));const f=Ja(p.shape,h.shape,n,a,r,s);let m,g;null!=i&&(m=Er(i,"bias","fused conv2d"),[m]=ur(m,l),qs(f.outShape,m.shape)),null!=c&&(g=Er(c,"prelu weights","fused conv2d"));const v=(t,e)=>{const[o,s,i,c]=e,l=Wc(t,i,u);an(ns(a),(()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`));const h=[Ms(s.shape,l,o,n,r),zc(s,l,o.shape,n,r)];if(null!=c){const t=qc(c,l);h.push(t)}return h},b=t=>t.fusedConv2d({input:p,filter:h,convInfo:f,bias:m,activation:u,preluActivationWeights:g}),y={x:p,filter:h,bias:m,preluActivationWeights:g},w={strides:n,pad:r,dataFormat:o,dilations:a,dimRoundingMode:s,activation:u};if(null==i){return xi(((t,e,n)=>{let r=gr.runKernelFunc(b,y,null,Ue,w);return n([e,t,r]),d&&(r=$o(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:v}}))(p,h)}return xi(((t,e,n,r)=>{let o=gr.runKernelFunc(b,y,null,Ue,w);return r([e,t,o,n]),d&&(o=$o(o,[o.shape[1],o.shape[2],o.shape[3]])),{value:o,gradFunc:v}}))(p,h,m)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Hc=Fr({depthwiseConv2dNativeBackpropFilter_:function(t,e,n,r){let o=t;3===t.rank&&(o=$o(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let a=e;3===a.rank&&(a=$o(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const s={x:o,dy:a};return gr.runKernelFunc((t=>t.depthwiseConv2DDerFilter(o,a,r)),s,null,J)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Uc=Fr({depthwiseConv2dNativeBackpropInput_:function(t,e,n,r){let o=e,a=!1;3===e.rank&&(a=!0,o=$o(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const s={dy:o},i=gr.runKernelFunc((t=>t.depthwiseConv2DDerInput(o,n,r)),s,null,Y);return a?$o(i,[i.shape[1],i.shape[2],i.shape[3]]):i}});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Vc=Fr({fusedDepthwiseConv2d_:function({x:t,filter:e,strides:n,pad:r,dataFormat:o="NHWC",dilations:a=[1,1],dimRoundingMode:s,bias:i,activation:u="linear",preluActivationWeights:c}){if(!1===Gc(gr.state.gradientDepth,u)){let l=Ls(t,e,n,r,o,a,s);return null!=i&&(l=_a(l,i)),jc(l,u,c)}const l=Er(t,"x","depthwiseConv2d"),h=Er(e,"filter","depthwiseConv2d");let p=l,d=!1;3===l.rank&&(d=!0,p=$o(l,[1,l.shape[0],l.shape[1],l.shape[2]])),an(4===p.rank,(()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${p.rank}.`)),an(4===h.rank,(()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${h.rank}.`)),an(p.shape[3]===h.shape[2],(()=>`Error in fused depthwiseConv2d: number of input channels (${p.shape[3]}) must match the inChannels dimension in filter ${h.shape[2]}.`)),null==a&&(a=[1,1]),an(rs(n,a),(()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`)),null!=s&&an(pn(r),(()=>`Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode ${s} but got pad ${r}.`));const f=Ja(p.shape,h.shape,n,a,r,s,!0);let m,g;null!=i&&(m=Er(i,"bias","fused conv2d"),[m]=ur(m,l),qs(f.outShape,m.shape)),null!=c&&(g=Er(c,"prelu weights","fused depthwiseConv2d"));const v=(t,e)=>{an(ns(a),(()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`));const[n,r,o,s]=e,i=Wc(t,o,u),c=Uc(r.shape,i,n,f),l=Hc(r,i,n.shape,f);if(null!=s){return[c,l,qc(m,i)]}return[c,l]},b=t=>t.fusedDepthwiseConv2D({input:p,filter:h,convInfo:f,bias:m,activation:u,preluActivationWeights:g}),y={x:p,filter:h,bias:m,preluActivationWeights:g},w={strides:n,pad:r,dataFormat:o,dilations:a,dimRoundingMode:s,activation:u};if(null==i){return xi(((t,e,n)=>{let r=gr.runKernelFunc(b,y,null,Ve,w);return n([e,t,r]),d&&(r=$o(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:v}}))(p,h)}return xi(((t,e,n,r)=>{let o=gr.runKernelFunc(b,y,null,Ve,w);return r([e,t,o,n]),d&&(o=$o(o,[o.shape[1],o.shape[2],o.shape[3]])),{value:o,gradFunc:v}}))(p,h,m)}});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Jc=Fr({fusedMatMul_:function({a:t,b:e,transposeA:n=!1,transposeB:r=!1,bias:o,activation:a="linear",preluActivationWeights:s}){if(!1===Gc(gr.state.gradientDepth,a)){let i=Co(t,e,n,r);return null!=o&&(i=_a(i,o)),jc(i,a,s)}let i=Er(t,"a","fused matMul"),u=Er(e,"b","fused matMul");[i,u]=ur(i,u);const c=n?i.shape[i.rank-2]:i.shape[i.rank-1],l=r?u.shape[u.rank-1]:u.shape[u.rank-2],h=n?i.shape[i.rank-1]:i.shape[i.rank-2],p=r?u.shape[u.rank-2]:u.shape[u.rank-1],d=i.shape.slice(0,-2),f=u.shape.slice(0,-2),m=ln(d),g=ln(f);an(i.rank>=2&&u.rank>=2&&i.rank===u.rank,(()=>`Error in fused matMul: inputs must have the same rank of at least 2, got ranks ${i.rank} and ${u.rank}.`)),an(hn(d,f),(()=>`Error in fused matMul: outer dimensions (${d}) and (${f}) of Tensors with shapes ${i.shape} and `+u.shape+" must match.")),an(c===l,(()=>`Error in fused matMul: inner shapes (${c}) and (${l}) of Tensors with shapes ${i.shape} and ${u.shape} and transposeA=${n} and transposeB=${r} must match.`));const v=i.shape.slice(0,-2).concat([h,p]),b=$o(i,n?[m,c,h]:[m,h,c]),y=$o(u,r?[g,p,l]:[g,l,p]);let w,x;null!=o&&(w=Er(o,"bias","fused matMul"),[w]=ur(w,i),qs(v,w.shape)),null!=s&&(x=Er(s,"prelu weights","fused matMul"));const k=(t,e)=>{const[s,i,u,c]=e,l=Wc($o(t,u.shape),u,a);let h,p;if(n||r?!n&&r?(h=Co(l,i,!1,!1),p=Co(l,s,!0,!1)):n&&!r?(h=Co(i,l,!1,!0),p=Co(s,l,!1,!1)):(h=Co(i,l,!0,!0),p=Co(l,s,!0,!0)):(h=Co(l,i,!1,!0),p=Co(s,l,!0,!1)),null!=o){return[h,p,qc(c,l)]}return[h,p]},_=t=>t.fusedBatchMatMul({a:b,b:y,transposeA:n,transposeB:r,bias:w,activation:a,preluActivationWeights:x}),E={a:b,b:y,bias:w,preluActivationWeights:x},S={transposeA:n,transposeB:r,activation:a};if(null==o){return xi(((t,e,n)=>{const r=gr.runKernelFunc(_,E,null,He,S);return n([t,e,r]),{value:$o(r,v),gradFunc:k}}))(b,y)}return xi(((t,e,n,r)=>{const o=gr.runKernelFunc(_,E,null,He,S);return r([t,e,o,n]),{value:$o(o,v),gradFunc:k}}))(b,y,w)}});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */var Yc=Object.freeze({__proto__:null,conv2d:Kc,depthwiseConv2d:Vc,matMul:Jc});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Xc=Fr({hammingWindow_:function(t){return Lc(t,.54,.46)}});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Zc=Fr({hannWindow_:function(t){return Lc(t,.5,.5)}});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Qc=Fr({frame_:function(t,e,n,r=!1,o=0){let a=0;const s=[];for(;a+e<=t.size;)s.push(hs(t,a,e)),a+=n;if(r)for(;a<t.size;){const r=a+e-t.size,i=cs([hs(t,a,e-r),ei([r],o)]);s.push(i),a+=n}return 0===s.length?ac([],[0,e]):$o(cs(s),[s.length,e])}});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const tl=Fr({stft_:function(t,e,n,r,o=Zc){null==r&&(r=Rc(e));const a=Qc(t,e,n),s=Da(a,o(e)),i=[];for(let t=0;t<a.shape[0];t++)i.push(Xu(hs(s,[t,0],[1,e]),r));return cs(i)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const el=Fr({cropAndResize_:function(t,e,n,r,o,a){const s=Er(t,"image","cropAndResize"),i=Er(e,"boxes","cropAndResize","float32"),u=Er(n,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;const c=i.shape[0];an(4===s.rank,(()=>`Error in cropAndResize: image must be rank 4,but got rank ${s.rank}.`)),an(2===i.rank&&4===i.shape[1],(()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${i.shape}.`)),an(1===u.rank&&u.shape[0]===c,(()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${i.shape}.`)),an(2===r.length,(()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`)),an(r[0]>=1&&r[1]>=1,(()=>"cropSize must be atleast [1,1], but was "+r)),an("bilinear"===o||"nearest"===o,(()=>"method must be bilinear or nearest, but was "+o));const l={image:s,boxes:i,boxInd:u},h={method:o,extrapolationValue:a,cropSize:r};return gr.runKernelFunc((t=>t.cropAndResize(s,i,u,r,o,a)),l,null,H,h)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const nl=Fr({flipLeftRight_:function(t){const e=Er(t,"image","flipLeftRight","float32");an(4===e.rank,(()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`));const n={image:e};return gr.runKernel(ct,n,{})}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const rl=Fr({rotateWithOffset_:function(t,e,n=0,r=.5){const o=Er(t,"image","rotateWithOffset","float32");an(4===o.rank,(()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`));const a={image:o},s={radians:e,fillValue:n,center:r};return gr.runKernel(Ke,a,s)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ol(t,e,n,r,o,a){null==r&&(r=.5),null==o&&(o=Number.NEGATIVE_INFINITY),null==a&&(a=0);const s=t.shape[0];return n=Math.min(n,s),an(0<=r&&r<=1,(()=>`iouThreshold must be in [0, 1], but was '${r}'`)),an(2===t.rank,(()=>`boxes must be a 2D tensor, but was of rank '${t.rank}'`)),an(4===t.shape[1],(()=>"boxes must have 4 columns, but 2nd dimension was "+t.shape[1])),an(1===e.rank,(()=>"scores must be a 1D tensor")),an(e.shape[0]===s,(()=>`scores has incompatible shape with boxes. Expected ${s}, but was `+e.shape[0])),an(0<=a&&a<=1,(()=>`softNmsSigma must be in [0, 1], but was '${a}'`)),{maxOutputSize:n,iouThreshold:r,scoreThreshold:o,softNmsSigma:a}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const al=Fr({nonMaxSuppression_:function(t,e,n,r=.5,o=Number.NEGATIVE_INFINITY){const a=Er(t,"boxes","nonMaxSuppression"),s=Er(e,"scores","nonMaxSuppression"),i=ol(a,s,n,r,o);n=i.maxOutputSize,r=i.iouThreshold,o=i.scoreThreshold;const u={maxOutputSize:n,iouThreshold:r,scoreThreshold:o};return gr.runKernelFunc((t=>t.nonMaxSuppression(a,s,n,r,o)),{boxes:a,scores:s},null,Ut,u)}});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function sl(t,e,n){const r=function(t,e,n){return function(t,e,n){let r=0,o=t.length,a=0,s=!1;for(;r<o;){a=r+(o-r>>>1);const i=n(e,t[a]);i>0?r=a+1:(o=a,s=!i)}return s?r:-r-1}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */(t,e,n||il)}(t,e,n),o=r<0?-(r+1):r;t.splice(o,0,e)}function il(t,e){return t>e?1:t<e?-1:0}function ul(t,e,n,r,o){return hl(t,e,n,r,o,0).selectedIndices}function cl(t,e,n,r,o,a){return hl(t,e,n,r,o,0,!1,a,!0)}function ll(t,e,n,r,o,a){return hl(t,e,n,r,o,a,!0)}function hl(t,e,n,r,o,a,s=!1,i=!1,u=!1){const c=[];for(let t=0;t<e.length;t++)e[t]>o&&c.push({score:e[t],boxIndex:t,suppressBeginIndex:0});c.sort(fl);const l=a>0?-.5/a:0,h=[],p=[];for(;h.length<n&&c.length>0;){const e=c.pop(),{score:n,boxIndex:a,suppressBeginIndex:s}=e;if(n<o)break;let i=!1;for(let n=h.length-1;n>=s;--n){const s=pl(t,a,h[n]);if(s>=r){i=!0;break}if(e.score=e.score*dl(r,l,s),e.score<=o)break}e.suppressBeginIndex=h.length,i||(e.score===n?(h.push(a),p.push(e.score)):e.score>o&&sl(c,e,fl))}const d=h.length,f=n-d;i&&f>0&&(h.push(...new Array(f).fill(0)),p.push(...new Array(f).fill(0)));const m={selectedIndices:_u(h,"int32")};return s&&(m.selectedScores=_u(p,"float32")),u&&(m.validOutputs=di(d,"int32")),m}function pl(t,e,n){const r=t.subarray(4*e,4*e+4),o=t.subarray(4*n,4*n+4),a=Math.min(r[0],r[2]),s=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),p=Math.max(o[1],o[3]),d=(i-a)*(u-s),f=(h-c)*(p-l);if(d<=0||f<=0)return 0;const m=Math.max(a,c),g=Math.max(s,l),v=Math.min(i,h),b=Math.min(u,p),y=Math.max(v-m,0)*Math.max(b-g,0);return y/(d+f-y)}function dl(t,e,n){const r=Math.exp(e*n*n);return n<=t?r:0}function fl(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ml=async function(t,e,n,r=.5,o=Number.NEGATIVE_INFINITY){const a=Er(t,"boxes","nonMaxSuppressionAsync"),s=Er(e,"scores","nonMaxSuppressionAsync"),i=ol(a,s,n,r,o);n=i.maxOutputSize,r=i.iouThreshold,o=i.scoreThreshold;const u=await Promise.all([a.data(),s.data()]),c=ul(u[0],u[1],n,r,o);return a!==t&&a.dispose(),s!==e&&s.dispose(),c};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const gl=Fr({nonMaxSuppressionWithScore_:function(t,e,n,r=.5,o=Number.NEGATIVE_INFINITY,a=0){const s=Er(t,"boxes","nonMaxSuppression"),i=Er(e,"scores","nonMaxSuppression"),u=ol(s,i,n,r,o,a),c={boxes:s,scores:i},l={maxOutputSize:n=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},h=gr.runKernel(Jt,c,l);return{selectedIndices:h[0],selectedScores:h[1]}}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const vl=async function(t,e,n,r=.5,o=Number.NEGATIVE_INFINITY,a=0){const s=Er(t,"boxes","nonMaxSuppressionAsync"),i=Er(e,"scores","nonMaxSuppressionAsync"),u=ol(s,i,n,r,o,a);n=u.maxOutputSize,r=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma;const c=await Promise.all([s.data(),i.data()]),l=ll(c[0],c[1],n,r,o,a);return s!==t&&s.dispose(),i!==e&&i.dispose(),l};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const bl=Fr({nonMaxSuppressionPadded_:function(t,e,n,r=.5,o=Number.NEGATIVE_INFINITY,a=!1){const s=Er(t,"boxes","nonMaxSuppression"),i=Er(e,"scores","nonMaxSuppression"),u=ol(s,i,n,r,o,null),c={boxes:s,scores:i},l={maxOutputSize:u.maxOutputSize,iouThreshold:u.iouThreshold,scoreThreshold:u.scoreThreshold,padToMaxOutputSize:a},h=gr.runKernel(Vt,c,l);return{selectedIndices:h[0],validOutputs:h[1]}}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const yl=async function(t,e,n,r=.5,o=Number.NEGATIVE_INFINITY,a=!1){const s=Er(t,"boxes","nonMaxSuppressionAsync"),i=Er(e,"scores","nonMaxSuppressionAsync"),u=ol(s,i,n,r,o,null),c=u.maxOutputSize,l=u.iouThreshold,h=u.scoreThreshold,[p,d]=await Promise.all([s.data(),i.data()]),f=cl(p,d,c,l,h,a);return s!==t&&s.dispose(),i!==e&&i.dispose(),f};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const wl=Fr({resizeBilinear_:function(t,e,n=!1){const r=Er(t,"images","resizeBilinear");an(3===r.rank||4===r.rank,(()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`)),an(2===e.length,(()=>"Error in resizeBilinear: new shape must 2D, but got shape "+e+"."));let o=r,a=!1;3===r.rank&&(a=!0,o=$o(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const[s,i]=e,u={images:o},c={alignCorners:n,size:e},l=gr.runKernelFunc(((t,e)=>(e([o]),t.resizeBilinear(o,s,i,n))),u,null,ce,c);return a?$o(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const xl=Fr({resizeNearestNeighbor_:function(t,e,n=!1){const r=Er(t,"images","resizeNearestNeighbor");an(3===r.rank||4===r.rank,(()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`)),an(2===e.length,(()=>"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+e+".")),an("float32"===r.dtype||"int32"===r.dtype,(()=>"`images` must have `int32` or `float32` as dtype"));let o=r,a=!1;3===r.rank&&(a=!0,o=$o(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const[s,i]=e,u={images:o},c={alignCorners:n,size:e},l=gr.runKernelFunc(((t,e)=>(e([o]),t.resizeNearestNeighbor(o,s,i,n))),u,null,ie,c);return a?$o(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const kl=Fr({bandPart_:function(t,e,n){an(e%1==0,(()=>`bandPart(): numLower must be an integer, got ${e}.`)),an(n%1==0,(()=>`bandPart(): numUpper must be an integer, got ${n}.`));const r=Er(t,"a","bandPart");an(r.rank>=2,(()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`));const o=r.shape,[a,s]=r.shape.slice(-2);if(!(e<=a))throw new Error(`bandPart(): numLower (${e}) must not be greater than the number of rows (${a}).`);if(!(n<=s))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${s}).`);e<0&&(e=a),n<0&&(n=s);const i=$o(Eu(0,a,1,"int32"),[-1,1]),u=Eu(0,s,1,"int32"),c=Fi(i,u),l=Ti(gi(c,di(+e,"int32")),ii(c,di(-n,"int32"))),h=Li([a,s],r.dtype);return $o(ec(hc($o(r,[-1,a,s])).map((t=>Gs(l,t,h)))),o)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const _l=Fr({gramSchmidt_:function(t){let e;if(Array.isArray(t)){e=!1,an(null!=t&&t.length>0,(()=>"Gram-Schmidt process: input must not be null, undefined, or empty"));const n=t[0].shape[0];for(let e=1;e<t.length;++e)an(t[e].shape[0]===n,(()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[e].shape[0]} vs. ${n})`))}else e=!0,t=Yu(t,t.shape[0],0).map((t=>tc(t,[0])));an(t.length<=t[0].shape[0],(()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`));const n=[],r=t;for(let e=0;e<t.length;++e)n.push(gr.tidy((()=>{let t=r[e];if(e>0)for(let r=0;r<e;++r){const e=Da(Ii(Da(n[r],t)),n[r]);t=Fi(t,e)}return Sa(t,Tc(t,"euclidean"))})));return e?ec(n,0):n}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function El(t,e=!1){return gr.tidy((()=>{an(2===t.shape.length,(()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`));const n=t.shape[0],r=t.shape[1];let o=ti(n),a=bo(t);const s=ac([[1]],[1,1]);let i=bo(s);const u=n>=r?r:n;for(let t=0;t<u;++t){const e=a,u=i,c=o;[i,a,o]=gr.tidy((()=>{const e=hs(a,[t,t],[n-t,1]),u=Tc(e),c=hs(a,[t,t],[1,1]),l=Gs(si(c,0),ac([[-1]]),ac([[1]])),h=Fi(c,Da(l,u)),p=Sa(e,h);i=1===p.shape[0]?bo(s):cs([s,hs(p,[1,0],[p.shape[0]-1,p.shape[1]])],0);const d=_i(Sa(Co(l,h),u)),f=hs(a,[t,0],[n-t,r]),m=Da(d,i),g=Ro(i);if(0===t)a=Fi(f,Co(m,Co(g,f)));else{const e=Fi(f,Co(m,Co(g,f)));a=cs([hs(a,[0,0],[t,r]),e],0)}const v=Ro(m),b=hs(o,[0,t],[n,o.shape[1]-t]);if(0===t)o=Fi(b,Co(Co(b,i),v));else{const e=Fi(b,Co(Co(b,i),v));o=cs([hs(o,[0,0],[n,t]),e],1)}return[i,a,o]})),xa([e,u,c])}return!e&&n>r&&(o=hs(o,[0,0],[n,r]),a=hs(a,[0,0],[r,r])),[o,a]}))}const Sl=Fr({qr_:function(t,e=!1){if(an(t.rank>=2,(()=>"qr() requires input tensor to have a rank >= 2, but got rank "+t.rank)),2===t.rank)return El(t,e);{const n=t.shape.slice(0,t.shape.length-2).reduce(((t,e)=>t*e)),r=hc($o(t,[n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),o=[],a=[];r.forEach((t=>{const[n,r]=El(t,e);o.push(n),a.push(r)}));return[$o(ec(o,0),t.shape),$o(ec(a,0),t.shape)]}}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */var Dl;!function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"}(Dl||(Dl={}));const Fl=Fr({computeWeightedLoss_:function(t,e,n=Dl.SUM_BY_NONZERO_WEIGHTS){const r=Er(t,"losses","computeWeightedLoss");let o=null;null!=e&&(o=Er(e,"weights","computeWeightedLoss"));const a=null==o?r:Da(r,o);if(n===Dl.NONE)return a;if(n===Dl.SUM)return Ii(a);if(n===Dl.MEAN){if(null==o)return zi(a);{const t=r.size/o.size,e=Sa(Ii(a),Ii(o));return t>1?Sa(e,di(t)):e}}if(n===Dl.SUM_BY_NONZERO_WEIGHTS){if(null==o)return Sa(Ii(a),di(r.size));{const t=Da(o,Oi(r.shape)),e=vo(Ii(Vi(t,di(0))),"float32");return Sa(Ii(a),e)}}throw Error("Unknown reduction: "+n)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Il=Fr({absoluteDifference_:function(t,e,n,r=Dl.SUM_BY_NONZERO_WEIGHTS){const o=Er(t,"labels","absoluteDifference"),a=Er(e,"predictions","absoluteDifference");let s=null;null!=n&&(s=Er(n,"weights","absoluteDifference")),sn(o.shape,a.shape,"Error in absoluteDifference: ");const i=Fa(Fi(o,a));return Fl(i,s,r)}});const Ml=Fr({cosineDistance_:function(t,e,n,r,o=Dl.SUM_BY_NONZERO_WEIGHTS){const a=Er(t,"labels","cosineDistance"),s=Er(e,"predictions","cosineDistance");let i=null;null!=r&&(i=Er(r,"weights","cosineDistance")),sn(a.shape,s.shape,"Error in cosineDistance: ");const u=di(1),c=Fi(u,Ii(Da(a,s),n,!0));return Fl(c,i,o)}});const Nl=Fr({hingeLoss_:function(t,e,n,r=Dl.SUM_BY_NONZERO_WEIGHTS){let o=Er(t,"labels","hingeLoss");const a=Er(e,"predictions","hingeLoss");let s=null;null!=n&&(s=Er(n,"weights","hingeLoss")),sn(o.shape,a.shape,"Error in hingeLoss: ");const i=di(1);o=Fi(Da(di(2),o),i);const u=Du(Fi(i,Da(o,a)));return Fl(u,s,r)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Tl=Fr({huberLoss_:function(t,e,n,r=1,o=Dl.SUM_BY_NONZERO_WEIGHTS){const a=Er(t,"labels","huberLoss"),s=Er(e,"predictions","huberLoss");let i=null;null!=n&&(i=Er(n,"weights","huberLoss")),sn(a.shape,s.shape,"Error in huberLoss: ");const u=di(r),c=Fa(Fi(s,a)),l=qi(c,u),h=Fi(c,l),p=_a(Da(di(.5),Gi(l)),Da(u,h));return Fl(p,i,o)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Al=Fr({logLoss_:function(t,e,n,r=1e-7,o=Dl.SUM_BY_NONZERO_WEIGHTS){const a=Er(t,"labels","logLoss"),s=Er(e,"predictions","logLoss");let i=null;null!=n&&(i=Er(n,"weights","logLoss")),sn(a.shape,s.shape,"Error in logLoss: ");const u=di(1),c=di(r),l=_i(Da(a,bi(_a(s,c)))),h=Da(Fi(u,a),bi(_a(Fi(u,s),c))),p=Fi(l,h);return Fl(p,i,o)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Pl=Fr({meanSquaredError_:function(t,e,n,r=Dl.SUM_BY_NONZERO_WEIGHTS){const o=Er(t,"labels","meanSquaredError"),a=Er(e,"predictions","meanSquaredError");let s=null;null!=n&&(s=Er(n,"weights","meanSquaredError")),sn(o.shape,a.shape,"Error in meanSquaredError: ");const i=Qu(o,a);return Fl(i,s,r)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const $l=Fr({sigmoidCrossEntropy_:function(t,e,n,r=0,o=Dl.SUM_BY_NONZERO_WEIGHTS){let a=Er(t,"multiClassLabels","sigmoidCrossEntropy");const s=Er(e,"logits","sigmoidCrossEntropy");let i=null;if(null!=n&&(i=Er(n,"weights","sigmoidCrossEntropy")),sn(a.shape,s.shape,"Error in sigmoidCrossEntropy: "),r>0){const t=di(r),e=di(1),n=di(.5);a=_a(Da(a,Fi(e,t)),Da(n,t))}const u=function(t,e){const n=Er(t,"labels","sigmoidCrossEntropyWithLogits"),r=Er(e,"logits","sigmoidCrossEntropyWithLogits");sn(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const o=Du(r),a=Da(r,n),s=yi(Ys(_i(Fa(r))));return _a(Fi(o,a),s)}(a,s);return Fl(u,i,o)}});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Cl=Fr({softmaxCrossEntropy_:function(t,e,n,r=0,o=Dl.SUM_BY_NONZERO_WEIGHTS){let a=Er(t,"onehotLabels","softmaxCrossEntropy");const s=Er(e,"logits","softmaxCrossEntropy");let i=null;if(null!=n&&(i=Er(n,"weights","softmaxCrossEntropy")),sn(a.shape,s.shape,"Error in softmaxCrossEntropy: "),r>0){const t=di(r),e=di(1),n=di(a.shape[1]);a=_a(Da(a,Fi(e,t)),Sa(t,n))}const u=function(t,e,n=-1){if(-1===n&&(n=e.rank-1),n!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was `+n);return xi(((t,e,r)=>{const o=Ni(e,[n],!0),a=Fi(vo(e,"float32"),o);r([t,a]);const s=_i(Da(a,t));return{value:Ii(s,[n]),gradFunc:(t,e)=>{const[r,o]=e,a=$a(t.shape,[n]);return[Da($o(t,a),Fi(vo(r,"float32"),Ys(o))),Da($o(t,a),Fi(Ys(o),vo(r,"float32")))]}}}))(t,e)}(a,s);return Fl(u,i,o)}}),Bl={fft:Hu,ifft:Uu,rfft:Xu,irfft:Vu},Rl={hammingWindow:Xc,hannWindow:Zc,frame:Qc,stft:tl},Ll={flipLeftRight:nl,resizeNearestNeighbor:xl,resizeBilinear:wl,rotateWithOffset:rl,cropAndResize:el,nonMaxSuppression:al,nonMaxSuppressionAsync:ml,nonMaxSuppressionWithScore:gl,nonMaxSuppressionWithScoreAsync:vl,nonMaxSuppressionPadded:bl,nonMaxSuppressionPaddedAsync:yl},Ol={bandPart:kl,gramSchmidt:_l,qr:Sl},zl={absoluteDifference:Il,computeWeightedLoss:Fl,cosineDistance:Ml,hingeLoss:Nl,huberLoss:Tl,logLoss:Al,meanSquaredError:Pl,sigmoidCrossEntropy:$l,softmaxCrossEntropy:Cl};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class Wl extends ha{minimize(t,e=!1,n){const{value:r,grads:o}=this.computeGradients(t,n);if(null!=n){const t=n.map((t=>({name:t.name,tensor:o[t.name]})));this.applyGradients(t)}else this.applyGradients(o);return xa(o),e?r:(r.dispose(),null)}get iterations(){return null==this.iterations_&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return wi(t,e)}dispose(){null!=this.iterations_&&xa(this.iterations_)}async saveIterations(){return null==this.iterations_&&(this.iterations_=0),{name:"iter",tensor:di(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Wl,Symbol.hasInstance,{value:t=>null!=t.minimize&&null!=t.computeGradients&&null!=t.applyGradients});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class ql extends Wl{constructor(t,e,n=null){super(),this.learningRate=t,this.rho=e,this.epsilon=n,this.accumulatedGrads=[],this.accumulatedUpdates=[],null==n&&(this.epsilon=gr.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map((t=>t.name)):Object.keys(t)).forEach(((e,n)=>{const r=gr.registeredVariables[e];null==this.accumulatedGrads[n]&&(this.accumulatedGrads[n]={originalName:e+"/accum_grad",variable:wa((()=>Ks(r).variable(false)))}),null==this.accumulatedUpdates[n]&&(this.accumulatedUpdates[n]={originalName:e+"/accum_var",variable:wa((()=>Ks(r).variable(false)))});const o=Array.isArray(t)?t[n].tensor:t[e];if(null==o)return;const a=this.accumulatedGrads[n].variable,s=this.accumulatedUpdates[n].variable;wa((()=>{const t=_a(Da(a,this.rho),Da(Gi(o),1-this.rho)),e=Da(Sa(Zu(_a(s,this.epsilon)),Zu(_a(a,this.epsilon))),o),n=_a(Da(s,this.rho),Da(Gi(e),1-this.rho));a.assign(t),s.assign(n);const i=_a(Da(e,-this.learningRate),r);r.assign(i)}))})),this.incrementIterations()}dispose(){null!=this.accumulatedUpdates&&(xa(this.accumulatedGrads.map((t=>t.variable))),xa(this.accumulatedUpdates.map((t=>t.variable))))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){const e=(t=await this.extractIterations(t)).length/2;this.accumulatedGrads=t.slice(0,e).map((t=>({originalName:t.name,variable:t.tensor.variable(false)}))),this.accumulatedUpdates=t.slice(e,2*e).map((t=>({originalName:t.name,variable:t.tensor.variable(false)})))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}}ql.className="Adadelta",da(ql);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class jl extends Wl{constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map((t=>t.name)):Object.keys(t)).forEach(((e,n)=>{const r=gr.registeredVariables[e];if(null==this.accumulatedGrads[n]){const t=!1;this.accumulatedGrads[n]={originalName:e+"/accumulator",variable:wa((()=>ei(r.shape,this.initialAccumulatorValue).variable(t)))}}const o=Array.isArray(t)?t[n].tensor:t[e];if(null==o)return;const a=this.accumulatedGrads[n].variable;wa((()=>{const t=_a(a,Gi(o));a.assign(t);const e=_a(Da(Sa(o,Zu(_a(t,gr.backend.epsilon()))),-this.learningRate),r);r.assign(e)}))})),this.incrementIterations()}dispose(){null!=this.accumulatedGrads&&xa(this.accumulatedGrads.map((t=>t.variable)))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){t=await this.extractIterations(t);this.accumulatedGrads=t.map((t=>({originalName:t.name,variable:t.tensor.variable(false)})))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}}jl.className="Adagrad",da(jl);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class Gl extends Wl{constructor(t,e,n,r=null){super(),this.learningRate=t,this.beta1=e,this.beta2=n,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],wa((()=>{this.accBeta1=di(e).variable(),this.accBeta2=di(n).variable()})),null==r&&(this.epsilon=gr.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);wa((()=>{const n=Fi(1,this.accBeta1),r=Fi(1,this.accBeta2);e.forEach(((e,o)=>{const a=gr.registeredVariables[e];null==this.accumulatedFirstMoment[o]&&(this.accumulatedFirstMoment[o]={originalName:e+"/m",variable:wa((()=>Ks(a).variable(false)))}),null==this.accumulatedSecondMoment[o]&&(this.accumulatedSecondMoment[o]={originalName:e+"/v",variable:wa((()=>Ks(a).variable(false)))});const s=Array.isArray(t)?t[o].tensor:t[e];if(null==s)return;const i=this.accumulatedFirstMoment[o].variable,u=this.accumulatedSecondMoment[o].variable,c=_a(Da(i,this.beta1),Da(s,1-this.beta1)),l=_a(Da(u,this.beta2),Da(Gi(s),1-this.beta2)),h=Sa(c,n),p=Sa(l,r);i.assign(c),u.assign(l);const d=_a(Da(Sa(h,_a(Zu(p),this.epsilon)),-this.learningRate),a);a.assign(d)})),this.accBeta1.assign(Da(this.accBeta1,this.beta1)),this.accBeta2.assign(Da(this.accBeta2,this.beta2))})),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&xa(this.accumulatedFirstMoment.map((t=>t.variable))),null!=this.accumulatedSecondMoment&&xa(this.accumulatedSecondMoment.map((t=>t.variable)))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){t=await this.extractIterations(t),wa((()=>{this.accBeta1.assign(au(this.beta1,this.iterations_+1)),this.accBeta2.assign(au(this.beta2,this.iterations_+1))}));const e=t.length/2;this.accumulatedFirstMoment=t.slice(0,e).map((t=>({originalName:t.name,variable:t.tensor.variable(false)}))),this.accumulatedSecondMoment=t.slice(e,2*e).map((t=>({originalName:t.name,variable:t.tensor.variable(false)})))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}}Gl.className="Adam",da(Gl);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class Kl extends Wl{constructor(t,e,n,r=null,o=0){super(),this.learningRate=t,this.beta1=e,this.beta2=n,this.epsilon=r,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],wa((()=>{this.iteration=di(0).variable(),this.accBeta1=di(e).variable()})),null==r&&(this.epsilon=gr.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);wa((()=>{const n=Fi(1,this.accBeta1),r=Sa(-this.learningRate,_a(Da(this.iteration,this.decay),1));e.forEach(((e,o)=>{const a=gr.registeredVariables[e];null==this.accumulatedFirstMoment[o]&&(this.accumulatedFirstMoment[o]={originalName:e+"/m",variable:Ks(a).variable(false)}),null==this.accumulatedWeightedInfNorm[o]&&(this.accumulatedWeightedInfNorm[o]={originalName:e+"/v",variable:Ks(a).variable(false)});const s=Array.isArray(t)?t[o].tensor:t[e];if(null==s)return;const i=this.accumulatedFirstMoment[o].variable,u=this.accumulatedWeightedInfNorm[o].variable,c=_a(Da(i,this.beta1),Da(s,1-this.beta1)),l=Da(u,this.beta2),h=Fa(s),p=pi(l,h);i.assign(c),u.assign(p);const d=_a(Da(Sa(r,n),Sa(c,_a(p,this.epsilon))),a);a.assign(d)})),this.iteration.assign(_a(this.iteration,1)),this.accBeta1.assign(Da(this.accBeta1,this.beta1))})),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&xa(this.accumulatedFirstMoment.map((t=>t.variable))),null!=this.accumulatedWeightedInfNorm&&xa(this.accumulatedWeightedInfNorm.map((t=>t.variable)))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}}Kl.className="Adamax",da(Kl);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class Hl extends Wl{constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map((t=>t.name)):Object.keys(t)).forEach(((e,n)=>{const r=Array.isArray(t)?t[n].tensor:t[e];if(null==r)return;const o=gr.registeredVariables[e];wa((()=>{const t=_a(Da(this.c,r),o);o.assign(t)}))})),this.incrementIterations()}setLearningRate(t){this.learningRate=t,null!=this.c&&this.c.dispose(),this.c=ka(di(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(0!==(t=await this.extractIterations(t)).length)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}}Hl.className="SGD",da(Hl);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class Ul extends Hl{constructor(t,e,n=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=n,this.accumulations=[],this.m=di(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map((t=>t.name)):Object.keys(t)).forEach(((e,n)=>{const r=gr.registeredVariables[e];if(null==this.accumulations[n]){const t=!1;this.accumulations[n]={originalName:e+"/momentum",variable:wa((()=>Ks(r).variable(t)))}}const o=this.accumulations[n].variable,a=Array.isArray(t)?t[n].tensor:t[e];null!=a&&wa((()=>{let t;const e=_a(Da(this.m,o),a);t=this.useNesterov?_a(Da(this.c,_a(a,Da(e,this.m))),r):_a(Da(this.c,e),r),o.assign(e),r.assign(t)}))})),this.incrementIterations()}dispose(){this.m.dispose(),null!=this.accumulations&&xa(this.accumulations.map((t=>t.variable)))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){t=await this.extractIterations(t);this.accumulations=t.map((t=>({originalName:t.name,variable:t.tensor.variable(false)})))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}}Ul.className="Momentum",da(Ul);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class Vl extends Wl{constructor(t,e=.9,n=0,r=null,o=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=n,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,null==r&&(this.epsilon=gr.backend.epsilon()),null==t)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map((t=>t.name)):Object.keys(t)).forEach(((e,n)=>{const r=gr.registeredVariables[e],o=!1;null==this.accumulatedMeanSquares[n]&&(this.accumulatedMeanSquares[n]={originalName:e+"/rms",variable:wa((()=>Ks(r).variable(o)))}),null==this.accumulatedMoments[n]&&(this.accumulatedMoments[n]={originalName:e+"/momentum",variable:wa((()=>Ks(r).variable(o)))}),null==this.accumulatedMeanGrads[n]&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:e+"/mg",variable:wa((()=>Ks(r).variable(o)))});const a=Array.isArray(t)?t[n].tensor:t[e];if(null==a)return;const s=this.accumulatedMeanSquares[n].variable,i=this.accumulatedMoments[n].variable;wa((()=>{const t=_a(Da(s,this.decay),Da(Gi(a),1-this.decay));if(this.centered){const e=this.accumulatedMeanGrads[n].variable,o=_a(Da(e,this.decay),Da(a,1-this.decay)),u=Sa(Da(a,this.learningRate),Zu(Fi(t,_a(Gi(o),this.epsilon)))),c=_a(Da(i,this.momentum),u);s.assign(t),e.assign(o),i.assign(c);const l=Fi(r,c);r.assign(l)}else{const t=_a(Da(s,this.decay),Da(Gi(a),1-this.decay)),e=_a(Da(i,this.momentum),Sa(Da(a,this.learningRate),Zu(_a(t,this.epsilon))));s.assign(t),i.assign(e);const n=Fi(r,e);r.assign(n)}}))})),this.incrementIterations()}dispose(){null!=this.accumulatedMeanSquares&&xa(this.accumulatedMeanSquares.map((t=>t.variable))),null!=this.accumulatedMeanGrads&&this.centered&&xa(this.accumulatedMeanGrads.map((t=>t.variable))),null!=this.accumulatedMoments&&xa(this.accumulatedMoments.map((t=>t.variable)))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){t=await this.extractIterations(t);const e=this.centered?t.length/3:t.length/2,n=!1;this.accumulatedMeanSquares=t.slice(0,e).map((t=>({originalName:t.name,variable:t.tensor.variable(n)}))),this.accumulatedMoments=t.slice(e,2*e).map((t=>({originalName:t.name,variable:t.tensor.variable(n)}))),this.centered&&(this.accumulatedMeanGrads=t.slice(2*e,3*e).map((t=>({originalName:t.name,variable:t.tensor.variable(n)}))))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}}Vl.className="RMSProp",da(Vl);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class Jl{static sgd(t){return new Hl(t)}static momentum(t,e,n=!1){return new Ul(t,e,n)}static rmsprop(t,e=.9,n=0,r=null,o=!1){return new Vl(t,e,n,r,o)}static adam(t=.001,e=.9,n=.999,r=null){return new Gl(t,e,n,r)}static adadelta(t=.001,e=.95,n=null){return new ql(t,e,n)}static adamax(t=.002,e=.9,n=.999,r=null,o=0){return new Kl(t,e,n,r,o)}static adagrad(t,e=.1){return new jl(t,e)}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Yl={sgd:Jl.sgd,momentum:Jl.momentum,adadelta:Jl.adadelta,adagrad:Jl.adagrad,rmsprop:Jl.rmsprop,adamax:Jl.adamax,adam:Jl.adam},Xl="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setImmediate?setImmediate:t=>t();
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
const Zl=1.7580993408473768,Ql=1.0507009873554805;var th=Object.freeze({__proto__:null,slice_util:la,segment_util:oi,castTensor:
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e,n){if("complex64"===e){if("complex64"===t.dtype)return t.clone();const e=Li(t.shape),r=vo(t,"float32"),o=n.complex(r,e);return e.dispose(),r.dispose(),o}if(!xn(t.dtype,e))return gr.makeTensorFromDataId(t.dataId,t.shape,e);if("complex64"===t.dtype){const r=n.real(t),o=vo(r,e);return r.dispose(),o}if("int32"===e)return n.int(t);if("bool"===e){const e=di(0,t.dtype),r=n.notEqual(t,e);return e.dispose(),r}throw new Error(`Error in Cast: failed to cast ${t.dtype} to ${e}`)},reshapeTensor:function(t,e){return gr.makeTensorFromDataId(t.dataId,e,t.dtype)},linspaceImpl:function(t,e,n){const r=(e-t)/(n-1),o=Bn(n,"float32");o[0]=t;for(let t=1;t<o.length;t++)o[t]=o[t-1]+r;return _u(o,"float32")},upcastType:ir,axesAreInnerMostDims:Ta,combineLocations:Aa,computeOutAndReduceShapes:Pa,expandShapeToKeepDim:$a,assertAxesAreInnerMostDims:function(t,e,n){an(Ta(e,n),(()=>t+" supports only inner-most axes for now. "+`Got axes ${e} and rank-${n} input.`))},getAxesPermutation:Ca,getUndoAxesPermutation:Ba,getInnerMostAxes:Ra,getBroadcastDims:function(t,e){const n=t.length,r=[];for(let o=0;o<n;o++){const a=n-1-o,s=t[a]||1;(e[e.length-1-o]||1)>1&&1===s&&r.unshift(a)}return r},getReductionAxes:Ws,assertAndGetBroadcastShape:qs,assertParamsConsistent:is,computeOutShape:us,computeDilation2DInfo:function(t,e,n,r,o="NHWC",a){return Ja(t,[...e,t[3]],n,a,r,null,null,os(o))},computePool2DInfo:Ua,computePool3DInfo:Va,computeConv2DInfo:Ja,computeConv3DInfo:Ya,computeDefaultPad:Xa,tupleValuesAreOne:ns,eitherStridesOrDilationsAreOne:rs,convertConv2DDataFormat:os,getFusedDyActivation:Wc,getFusedBiasGradient:qc,applyActivation:jc,shouldFuse:Gc,PARALLELIZE_THRESHOLD:30,computeOptimalWindowSize:function(t){return t<=30?t:Nn(t,Math.floor(Math.sqrt(t)))},getImageCenter:
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e,n){return[n*("number"==typeof t?t:t[0]),e*("number"==typeof t?t:t[1])]}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */,getReshaped:function(t,e,n,r=!0){let o=[];if(r)o=o.concat(e.slice(0)),o.push(t[0]/n),o=o.concat(t.slice(1));else{o=o.concat(t[0]);const n=e.length;for(let r=0;r<n;++r)o=o.concat([t[r+1]/e[r],e[r]]);o=o.concat(t.slice(n+1))}return o},getPermuted:function(t,e,n=!0){const r=[];if(n){r.push(e);for(let n=e+1;n<t;++n)n<=2*e?(r.push(n),r.push(n-(e+1))):r.push(n)}else{const n=[],o=[];for(let r=1;r<t;++r)r>=2*e+1||r%2==1?o.push(r):n.push(r);r.push(...n),r.push(0),r.push(...o)}return r},getReshapedPermuted:function(t,e,n,r=!0){const o=[];r?o.push(t[0]/n):o.push(t[0]*n);for(let n=1;n<t.length;++n)n<=e.length?r?o.push(e[n-1]*t[n]):o.push(t[n]/e[n-1]):o.push(t[n]);return o},getSliceBeginCoords:function(t,e){const n=[0];for(let r=0;r<e;++r)n.push(t[r][0]);return n},getSliceSize:function(t,e,n){const r=t.slice(0,1);for(let o=0;o<n;++o)r.push(t[o+1]-e[o][0]-e[o][1]);return r},prepareAndValidate:Ko,validateUpdateShape:Uo,validateInput:Vo,calculateShapes:Jo,SELU_SCALEALPHA:Zl,SELU_SCALE:Ql,ERF_P:.3275911,ERF_A1:.254829592,ERF_A2:-.284496736,ERF_A3:1.421413741,ERF_A4:-1.453152027,ERF_A5:1.061405429,warn:
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(...t){u().getBool("IS_TEST")||console.warn(...t)},log:function(...t){u().getBool("IS_TEST")||console.log(...t)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */,mergeRealAndImagArrays:function(t,e){if(t.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${t.length}, imag: ${e.length}.`);const n=new Float32Array(2*t.length);for(let r=0;r<n.length;r+=2)n[r]=t[r/2],n[r+1]=e[r/2];return n},splitRealAndImagArrays:function(t){const e=new Float32Array(t.length/2),n=new Float32Array(t.length/2);for(let r=0;r<t.length;r+=2)e[r/2]=t[r],n[r/2]=t[r+1];return{real:e,imag:n}},complexWithEvenIndex:function(t){const e=Math.ceil(t.length/4),n=new Float32Array(e),r=new Float32Array(e);for(let e=0;e<t.length;e+=4)n[Math.floor(e/4)]=t[e],r[Math.floor(e/4)]=t[e+1];return{real:n,imag:r}},complexWithOddIndex:function(t){const e=Math.floor(t.length/4),n=new Float32Array(e),r=new Float32Array(e);for(let e=2;e<t.length;e+=4)n[Math.floor(e/4)]=t[e],r[Math.floor(e/4)]=t[e+1];return{real:n,imag:r}},getComplexWithIndex:function(t,e){return{real:t[2*e],imag:t[2*e+1]}},assignToTypedArray:function(t,e,n,r){t[2*r]=e,t[2*r+1]=n},exponents:function(t,e){const n=new Float32Array(t/2),r=new Float32Array(t/2);for(let o=0;o<Math.ceil(t/2);o++){const a=(e?2:-2)*Math.PI*(o/t);n[o]=Math.cos(a),r[o]=Math.sin(a)}return{real:n,imag:r}},exponent:function(t,e,n){const r=(n?2:-2)*Math.PI*(t/e);return{real:Math.cos(r),imag:Math.sin(r)}},prepareSplitSize:Ju});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
var eh=Object.freeze({__proto__:null,nonMaxSuppressionV3Impl:ul,nonMaxSuppressionV4Impl:cl,nonMaxSuppressionV5Impl:ll,split:function(t,e,n){const r=new Array(t.rank).fill(0),o=t.shape.slice();return e.map((e=>{const a=[...o];a[n]=e;const s=hs(t,r,a);return r[n]+=e,s}))}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */,tile:function(t,e){const n=new Array(t.rank);for(let r=0;r<n.length;r++)n[r]=t.shape[r]*e[r];const r=go(n,t.dtype);for(let e=0;e<r.values.length;++e){const n=r.indexToLoc(e),o=new Array(t.rank);for(let e=0;e<o.length;e++)o[e]=n[e]%t.shape[e];const a=t.locToIndex(o);r.values[e]=t.values[a]}return r.toTensor()}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */,topkImpl:function(t,e,n,r,o){const a=e[e.length-1],[s,i]=[t.length/a,a],u=vn(n,s*r),c=vn("int32",s*r);for(let e=0;e<s;e++){const n=e*i,o=t.subarray(n,n+i),a=[];for(let t=0;t<o.length;t++)a.push({value:o[t],index:t});a.sort(((t,e)=>e.value-t.value));const s=e*r,l=u.subarray(s,s+r),h=c.subarray(s,s+r);for(let t=0;t<r;t++)l[t]=a[t].value,h[t]=a[t].index}const l=e.slice();return l[l.length-1]=r,[Nr(u,l,n),Nr(c,l,"int32")]},whereImpl:pc});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const nh={kernelName:d,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Da(t,nc(vo(n,"float32"),-1))}}},rh={kernelName:f,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=Gi(vo(n,"float32")),r=Zu(Fi(di(1),e));return _i(Sa(t,r))}}}},oh={kernelName:m,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=Zu(Fi(Gi(vo(n,"float32")),1));return Sa(t,e)}}}},ah={kernelName:g,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,o=qs(n.shape,r.shape);return{a:()=>{let e=t;const r=Ws(n.shape,o);return r.length>0&&(e=Ii(e,r)),$o(e,n.shape)},b:()=>{let e=t;const n=Ws(r.shape,o);return n.length>0&&(e=Ii(e,n)),$o(e,r.shape)}}}},sh={kernelName:v,saveAllInputs:!0,gradFunc:(t,e)=>{const n={};return e.forEach(((e,r)=>{n[r]=()=>t.clone()})),n}},ih={kernelName:b,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Ks(n)}}},uh={kernelName:y,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Ks(n)}}},ch={kernelName:w,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Sa(t,Zu(Fi(di(1),Gi(vo(n,"float32")))))}}},lh={kernelName:x,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=Zu(_a(di(1),Gi(vo(n,"float32"))));return Sa(t,e)}}}},hh={kernelName:E,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,o=qs(n.shape,r.shape);return{a:()=>{const e=_a(Gi(n),Gi(r));let a=Da(t,Sa(r,e));const s=Ws(n.shape,o);return s.length>0&&(a=Ii(a,s)),$o(a,n.shape)},b:()=>{const e=_a(Gi(n),Gi(r));let a=_i(Da(t,Sa(n,e)));const s=Ws(r.shape,o);return s.length>0&&(a=Ii(a,s)),$o(a,r.shape)}}}},ph={kernelName:k,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Sa(t,_a(Gi(vo(n,"float32")),1))}}},dh={kernelName:_,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Sa(t,Fi(di(1),Gi(vo(n,"float32"))))}}};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const fh=Fr({avgPool3dBackprop_:
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e,n,r,o=[1,1,1],a,s){const i=Er(t,"dy","avgPool3dBackprop"),u=Er(e,"input","avgPool3dBackprop");let c=i,l=u,h=!1;4===u.rank&&(h=!0,c=$o(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),l=$o(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),an(5===c.rank,(()=>"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+c.rank+".")),an(5===l.rank,(()=>"Error in avgPool3dBackprop: input must be rank 5 but got rank "+l.rank+".")),an(rs(r,o),(()=>`Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides ${r} and dilations '${o}'`)),null!=s&&an(pn(a),(()=>`Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode ${s} but got pad ${a}.`));const p={dy:c,input:l},d={filterSize:n,strides:r,dilations:o,pad:a,dimRoundingMode:s},f=gr.runKernelFunc((t=>{const e=Va(l.shape,n,r,o,a,s);return t.avgPool3dBackprop(c,l,e)}),p,null,I,d);return h?$o(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}}),mh={kernelName:F,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{filterSize:o,strides:a,dilations:s,pad:i,dimRoundingMode:u}=n,c=null==s?[1,1,1]:s;return{x:()=>fh(t,r,o,a,c,i,u)}}};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const gh=Fr({avgPoolBackprop_:
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e,n,r,o){const a=Er(t,"dy","avgPoolBackprop"),s=Er(e,"input","avgPoolBackprop");an(s.rank===a.rank,(()=>`Rank of input (${s.rank}) does not match rank of dy (${a.rank})`));let i=s,u=a,c=!1;3===s.rank&&(c=!0,i=$o(s,[1,s.shape[0],s.shape[1],s.shape[2]]),u=$o(a,[1,a.shape[0],a.shape[1],a.shape[2]])),an(4===u.rank,(()=>"Error in avgPoolBackprop: dy must be rank 4 but got rank "+u.rank+".")),an(4===i.rank,(()=>"Error in avgPoolBackprop: input must be rank 4 but got rank "+i.rank+"."));const l={dy:u,input:i},h={filterSize:n,strides:r,pad:o},p=gr.runKernelFunc((t=>{const e=Ua(i.shape,n,r,1,o);return t.avgPoolBackprop(u,i,e)}),l,null,D,h);return c?$o(p,[p.shape[1],p.shape[2],p.shape[3]]):p}}),vh={kernelName:S,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{filterSize:o,strides:a,pad:s}=n;return{x:()=>gh(t,r,o,a,s)}}},bh={kernelName:M,inputsToSave:["a","b"],gradFunc:(t,e,n)=>{const[r,o]=e,{transposeA:a,transposeB:s}=n;return a||s?!a&&s?{a:()=>Co(t,o,!1,!1),b:()=>Co(t,r,!0,!1)}:a&&!s?{a:()=>Co(o,t,!1,!0),b:()=>Co(r,t,!1,!1)}:{a:()=>Co(o,t,!0,!0),b:()=>Co(t,r,!0,!0)}:{a:()=>Co(t,o,!1,!0),b:()=>Co(r,t,!0,!1)}}},yh={kernelName:N,gradFunc:(t,e,n)=>{const{blockShape:r,crops:o}=n;return{x:()=>ru(t,r,o)}}},wh={kernelName:T,gradFunc:(t,e,n)=>{const r=n,o=r.inputShape,a=r.shape,s=Array.from(a);for(let t=o.length-1;t>=0;t--)if(o[t]===a[t])s[t]=1;else if(1!==o[t])throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${a}].`);const i=[];for(let t=0;t<s.length;t++)s[t]>1&&i.push(t);return{x:()=>Ii(t,i,!0)}}},xh={kernelName:A,gradFunc:t=>({x:()=>t.clone()})},kh={kernelName:P,gradFunc:t=>({x:()=>Ks(t)})},_h={kernelName:$,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{clipValueMin:o,clipValueMax:a}=n;return{x:()=>Gs(Ti(ii(r,o),gi(r,a)),t,Ks(t))}}},Eh={kernelName:B,saveAllInputs:!0,gradFunc:(t,e,n)=>{const r=e.map((t=>t.shape)),{axis:o}=n,a=mn(o,e[0].shape)[0],s=r.map((t=>t[a]));return Yu(t,s,a).map((t=>()=>t))}},Sh={kernelName:R,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const[r,o]=e,{dilations:a,strides:s,pad:i,dataFormat:u}=n;return an(ns(a),(()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`)),{x:()=>Ms(r.shape,t,o,s,i,u),filter:()=>zc(r,t,o.shape,s,i,u)}}},Dh={kernelName:O,inputsToSave:["dy","filter"],gradFunc:(t,e,n)=>{const[r,o]=e,{strides:a,pad:s,dataFormat:i,dimRoundingMode:u}=n;return{dy:()=>Fs(t,o,a,s,i,1,u),filter:()=>zc(t,r,o.shape,a,s,i,u)}}};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Fh=Fr({conv3DBackpropFilter_:
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e,n,r,o){let a=t;4===t.rank&&(a=$o(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]));let s=e;4===s.rank&&(s=$o(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]])),an(5===a.rank,(()=>"Error in conv3dDerFilter: input must be rank 5, but got shape "+a.shape+".")),an(5===s.rank,(()=>"Error in conv3dDerFilter: dy must be rank 5, but got shape "+s.shape+".")),an(5===n.length,(()=>"Error in conv3dDerFilter: filterShape must be length 5, but got "+n+".")),an(a.shape[4]===n[3],(()=>`Error in conv3dDerFilter: depth of input ${a.shape[4]}) must match input depth in filter (${n[3]}.`)),an(s.shape[4]===n[4],(()=>`Error in conv3dDerFilter: depth of dy (${s.shape[4]}) must match output depth for filter (${n[4]}).`));const i={x:a,y:s},u={strides:r,pad:o};return gr.runKernelFunc((t=>{const e=Ya(a.shape,n,r,1,o);return t.conv3dDerFilter(a,s,e)}),i,null,W,u)}}),Ih={kernelName:z,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const{dilations:r,strides:o,pad:a}=n;an(ns(r),(()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`));const[s,i]=e;return{x:()=>As(s.shape,t,i,o,a),filter:()=>Fh(s,t,i.shape,o,a)}}},Mh={kernelName:j,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Da(_i(Ou(vo(n,"float32"))),t)}}},Nh={kernelName:G,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Da(zu(vo(n,"float32")),t)}}},Th={kernelName:K,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{axis:o,exclusive:a,reverse:s}=n;return{x:()=>{const e=Ca([o],r.rank);let n=Bs(t,o,a,!s);return null!=e&&(n=Ro(n,e)),n}}}},Ah={kernelName:V,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const{dilations:r,strides:o,pad:a,dimRoundingMode:s}=n,i=null==r?[1,1]:r;an(ns(i),(()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${i}'`));const[u,c]=e;an(4===u.rank,(()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${u.rank}.`)),an(4===c.rank,(()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${c.rank}.`)),an(u.shape[3]===c.shape[2],(()=>`Error in gradient of depthwiseConv2d: number of input channels (${u.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`)),an(rs(o,i),(()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${o} and dilations '${i}'.`)),null!=s&&an(pn(a),(()=>`Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode ${s} but got pad ${a}.`));const l=Ja(u.shape,c.shape,o,i,a,s,!0);return{x:()=>Uc(u.shape,t,c,l),filter:()=>Hc(u,t,c.shape,l)}}},Ph={kernelName:Z,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const[r,o]=e,a={x:r,filter:o,dy:t},s={x:r,filter:o,dy:t};return{x:()=>gr.runKernel(Q,a,n),filter:()=>gr.runKernel(tt,s,n)}}},$h={kernelName:et,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,o=qs(n.shape,r.shape);return{a:()=>{const e=Sa(t,vo(r,"float32")),a=Ws(n.shape,o);return a.length>0?$o(Ii(e,a),n.shape):e},b:()=>{let e=Da(t,vo(n,"float32"));const a=Ws(r.shape,o);a.length>0&&(e=$o(Ii(e,a),r.shape));const s=Gi(r);return _i(Sa(e,vo(s,"float32")))}}}},Ch={kernelName:nt,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e,r=e=>e.eluDer(t,n),o={dy:t,y:n};return{x:()=>gr.runKernelFunc(r,o,null,rt)}}},Bh={kernelName:ot,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e,r=Da(Ys(_i(Gi(n))),2/Math.sqrt(Math.PI));return{x:()=>Da(t,r)}}},Rh={kernelName:st,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Da(t,n)}}},Lh={kernelName:it,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Da(t,Ys(n))}}},Oh={kernelName:lt,gradFunc:t=>({x:()=>Ks(t)})},zh={kernelName:ht,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,o=qs(n.shape,r.shape);return{a:()=>{const e=Sa(t,vo(r,"float32")),a=Ws(n.shape,o);return a.length>0?$o(Ii(e,a),n.shape):e},b:()=>{let e=Da(t,vo(n,"float32"));const a=Ws(r.shape,o);a.length>0&&(e=$o(Ii(e,a),r.shape));const s=Gi(r);return _i(Sa(e,vo(s,"float32")))}}}},Wh={kernelName:pt,inputsToSave:["x","mean","variance","scale"],gradFunc:(t,e,n)=>{const{varianceEpsilon:r}=n,[o,a,s,i]=e,u=null==i?di(1):i,c=Ws(a.shape,o.shape),l=[];if(1===a.rank){for(let t=0;t<o.shape.length-1;++t)l.push(o.shape[t]);l.push(1)}const h=Fi(o,a),p=Da(t,u),d=$u(_a(s,di(r))),f=Da(Da(Da(d,d),d),di(-.5));return{x:()=>1===a.rank?$o(Da(Da(t,Qs($o(d,[1,1,1,a.shape[0]]),l)),u),o.shape):$o(Da(Da(t,d),u),o.shape),mean:()=>{let t=Da(Da(d,di(-1)),p);return 1===a.rank&&(t=Ii(t,c)),$o(t,a.shape)},variance:()=>{let t=Da(Da(f,h),p);return 1===a.rank&&(t=Ii(t,c)),$o(t,a.shape)},scale:()=>{const e=Da(h,d);let n=Da(t,e);return 1===a.rank&&(n=Ii(n,c)),$o(n,a.shape)},offset:()=>{let e=t;return 1===a.rank&&(e=Ii(e,c)),$o(e,a.shape)}}}},qh={kernelName:dt,inputsToSave:["x","indices"],gradFunc:(t,e,n)=>{const[r,o]=e,{axis:a}=n,s=mn(a,r.shape)[0];return{x:()=>{const e=r.shape,n=o.size,i=e.slice(0,s),u=i.length,c=e.slice(a,e.length).slice(1),l=c.length,h=jh(0,u),p=jh(u+1,u+1+l),d=Gh([i,[n],c]),f=$o(t,d),m=$o(o,[n]),g=Gh([[u],h,p]),v=Ro(f,g);let b=lc(v,m,r.shape[s]);const y=Ba(g);return b=Ro(b,y),b},indices:()=>o}}};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function jh(t,e){const n=[];for(let r=t;r<e;++r)n.push(r);return n}function Gh(t){const e=[];for(let n=0;n<t.length;++n)for(let r=0;r<t[n].length;++r)e.push(t[n][r]);return e}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Kh={kernelName:gt,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e;return{a:()=>Ks(n),b:()=>Ks(r)}}},Hh={kernelName:vt,gradFunc:t=>({x:()=>vo(t,"float32")})},Uh={kernelName:wt,gradFunc:t=>({x:()=>Ks(t)})},Vh={kernelName:xt,gradFunc:t=>({x:()=>Ks(t)})},Jh={kernelName:kt,gradFunc:t=>({x:()=>Ks(t)})},Yh={kernelName:Ft,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Sa(t,_a(n,1))}}},Xh={kernelName:Dt,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Sa(t,vo(n,"float32"))}}},Zh={kernelName:Tt,inputsToSave:[],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r]=e,{axis:o}=n;return{logits:()=>{const e=Ys(r);return Fi(t,Da(Ii(t,o,!0),e))}}}};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Qh=Fr({localResponseNormalizationBackprop_:
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e,n,r=5,o=1,a=1,s=.5){const i={x:t,y:e,dy:n},u={depthRadius:r,bias:o,alpha:a,beta:s};return gr.runKernelFunc((i=>i.LRNGrad(n,t,e,r,o,a,s)),i,null,Pt,u)}}),tp={kernelName:At,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r,o]=e,{depthRadius:a,bias:s,alpha:i,beta:u}=n;return{x:()=>Qh(r,o,t,a,s,i,u)}}};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function ep(t,e,n,r,o){return e.rank<n.rank&&(e=$o(e,$a(e.shape,r))),t.rank<n.rank&&(t=$o(t,$a(t.shape,r))),{x:()=>{const r=Da(t,vo(js(n,e),t.dtype));return null==o?r:Ro(r,o)}}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const np={kernelName:$t,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const r=n,{reductionIndices:o}=r,[a,s]=e,i=mn(o,a.shape),u=Ca(i,a.rank),c=ep(t,s,a,i,u);return{x:()=>{let t=c.x();return null!=u&&(t=Ro(t)),t}}}},rp={kernelName:Ct,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e;return{a:()=>Da(t,vo(ii(n,r),"float32")),b:()=>Da(t,vo(mi(n,r),"float32"))}}};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const op=Fr({maxPool3dBackprop_:
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e,n,r,o,a=[1,1,1],s,i){const u=Er(t,"dy","maxPool3dBackprop"),c=Er(e,"input","maxPool3dBackprop"),l=Er(n,"output","maxPool3dBackprop");let h=u,p=c,d=l,f=!1;4===c.rank&&(f=!0,h=$o(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]]),p=$o(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]]),d=$o(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),an(5===h.rank,(()=>"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+h.rank+".")),an(5===p.rank,(()=>"Error in maxPool3dBackprop: input must be rank 5 but got rank "+p.rank+".")),an(5===d.rank,(()=>"Error in maxPool3dBackprop: output must be rank 5 but got rank "+d.rank+".")),an(rs(o,a),(()=>`Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides ${o} and dilations '${a}'`)),null!=i&&an(pn(s),(()=>`Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode ${i} but got pad ${s}.`));const m={dy:h,input:p,output:d},g={filterSize:r,strides:o,dilations:a,pad:s,dimRoundingMode:i},v=gr.runKernelFunc((t=>{const e=Va(p.shape,r,o,a,s,i);return t.maxPool3dBackprop(h,p,d,e)}),m,null,Ot,g);return f?$o(v,[v.shape[1],v.shape[2],v.shape[3],v.shape[4]]):v}}),ap={kernelName:Lt,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r,o]=e,{filterSize:a,strides:s,dilations:i,pad:u,dimRoundingMode:c}=n,l=null==i?[1,1,1]:i;return{x:()=>op(t,r,o,a,s,l,u,c)}}};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const sp=Fr({maxPoolBackprop_:
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(t,e,n,r,o,a,s){const i=Er(t,"dy","maxPoolBackprop"),u=Er(e,"input","maxPoolBackprop"),c=Er(n,"output","maxPoolBackprop");an(u.rank===i.rank,(()=>`Rank of input (${u.rank}) does not match rank of dy (${i.rank})`)),an(4===i.rank,(()=>"Error in maxPoolBackprop: dy must be rank 4 but got rank "+i.rank+".")),an(4===u.rank,(()=>"Error in maxPoolBackprop: input must be rank 4 but got rank "+u.rank+".")),null!=s&&an(pn(a),(()=>`Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode ${s} but got pad ${a}.`));const l={dy:i,input:u,output:c},h={filterSize:r,strides:o,pad:a,dimRoundingMode:s};return gr.runKernelFunc((t=>{const e=Ua(u.shape,r,o,1,a,s);return t.maxPoolBackprop(i,u,c,e)}),l,null,Rt,h)}}),ip={kernelName:Zt,inputsToSave:["x"],gradFunc:(t,e,n)=>{const r=e[0],{paddings:o}=n,a=o.map((t=>t[0]));return{x:()=>hs(t,a,r.shape)}}},up={kernelName:De,gradFunc:(t,e,n)=>{const{blockShape:r,paddings:o}=n;return{x:()=>fs(t,r,o)}}},cp={kernelName:Fe,gradFunc:(t,e,n)=>{const{axis:r}=n;return{x:()=>cs(t,r)}}};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
const lp=[nh,rh,oh,ah,sh,ih,uh,ch,lh,hh,ph,dh,mh,vh,bh,yh,wh,xh,kh,_h,Eh,Dh,Sh,Ih,Mh,Nh,Th,Ah,Ph,$h,Ch,Bh,Rh,Lh,zh,Oh,Wh,qh,Kh,Hh,Uh,Vh,Jh,Yh,Xh,Zh,tp,np,np,rp,ap,{kernelName:Bt,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r,o]=e,{filterSize:a,strides:s,pad:i}=n;return{x:()=>sp(t,r,o,a,s,i)}}},{kernelName:Wt,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const r=n,{axis:o}=r,[a,s]=e,i=mn(o,a.shape),u=Ca(i,a.rank),c=ep(t,s,a,i,u);return{x:()=>{let t=c.x();return null!=u&&(t=Ro(t)),t}}}},{kernelName:qt,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e;return{a:()=>Da(t,vo(gi(n,r),"float32")),b:()=>Da(t,vo(si(n,r),"float32"))}}},{kernelName:jt,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,o=qs(n.shape,r.shape);return{a:()=>{const e=Ws(n.shape,o);return e.length>0?$o(Ii(t,e),n.shape):t},b:()=>{const e=Da(t,_i(ni(Sa(n,r)))),a=Ws(r.shape,o);return a.length>0?$o(Ii(e,a),r.shape):e}}}},{kernelName:Gt,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,o=qs(n.shape,r.shape);return{a:()=>{const e=Da(t,vo(r,"float32")),a=Ws(n.shape,o);return a.length>0?$o(Ii(e,a),n.shape):e},b:()=>{const e=Da(t,vo(n,"float32")),a=Ws(r.shape,o);return a.length>0?$o(Ii(e,a),r.shape):e}}}},{kernelName:Kt,gradFunc:t=>({x:()=>_i(t)})},{kernelName:Xt,inputsToSave:["indices"],gradFunc:(t,e)=>{const n=e[0];return{indices:()=>Li(n.shape,"float32")}}},{kernelName:Yt,gradFunc:t=>({x:()=>Ks(t)})},ip,ip,{kernelName:Qt,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(t,e)=>{const[n,r,o]=e,a=n,s=r,i=qs(a.shape,s.shape);return{a:()=>{const e=vo(s,"float32");let n=Da(t,Da(e,au(a,Fi(e,di(1)))));const r=Ws(a.shape,i);return r.length>0&&(n=Ii(n,r)),$o(n,a.shape)},b:()=>{const e=si(a,0),n=Gs(e,bi(a),Ks(a));let r=Da(t,Da(o,n));const u=Ws(s.shape,i);return u.length>0&&(r=Ii(r,u)),$o(r,s.shape)}}}},{kernelName:te,inputsToSave:["x","alpha"],gradFunc:(t,e)=>{const[n,r]=e,o=si(n,0);return{x:()=>Gs(o,t,Da(t,r)),alpha:()=>{let e=Gs(o,Ks(t),Da(t,n));const a=Ws(r.shape,t.shape);return a.length>0&&(e=Ii(e,a)),$o(e,r.shape)}}}},{kernelName:oe,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Sa(t,_i(Gi(n)))}}},{kernelName:he,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e,r=Da(gi(n,6),nc(n));return{x:()=>Da(t,vo(r,"float32"))}}},{kernelName:ae,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Da(t,vo(nc(n),"float32"))}}},{kernelName:se,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>$o(t,n.shape)}}},{kernelName:ce,inputsToSave:["images"],gradFunc:(t,e,n)=>{const[r]=e,o=e=>{const{alignCorners:o}=n;return e.resizeBilinearBackprop(t,r,o)},a={images:r};return{images:()=>gr.runKernelFunc(o,a,null,le,n)}}},{kernelName:ie,inputsToSave:["images"],gradFunc:(t,e,n)=>{const[r]=e,o=e=>{const{alignCorners:o}=n;return e.resizeNearestNeighborBackprop(t,r,o)},a={images:r};return{images:()=>gr.runKernelFunc(o,a,null,ue,n)}}},{kernelName:pe,gradFunc:(t,e,n)=>{const{dims:r}=n,o=mn(r,t.shape);return{x:()=>Iu(t,o)}}},{kernelName:de,gradFunc:t=>({x:()=>Ks(t)})},{kernelName:fe,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>_i(Sa(t,Da(au(n,1.5),2)))}}},{kernelName:ge,inputsToSave:["condition"],gradFunc:(t,e)=>{const[n]=e;return{condition:()=>vo(Ks(n),"float32"),t:()=>Da(t,vo(n,t.dtype)),e:()=>Da(t,vo(Ai(n),t.dtype))}}},{kernelName:ve,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=si(n,di(0)),r=di(Zl),o=di(Ql),a=Da(t,o),s=Da(Da(t,r),Ys(vo(n,"float32")));return Gs(e,a,s)}}}},{kernelName:ke,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Da(t,Da(n,Fi(di(1),n)))}}},{kernelName:xe,gradFunc:t=>({x:()=>Ks(t)})},{kernelName:ye,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Da($s(vo(n,"float32")),t)}}},{kernelName:we,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Da(Cs(vo(n,"float32")),t)}}},{kernelName:be,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{begin:o,size:a}=n,s=r.shape,[i,u]=ca(r,o,a),c=[];for(let e=0;e<t.rank;e++)c.push([i[e],s[e]-i[e]-u[e]]);return{x:()=>Zi(t,c)}}},{kernelName:Ie,outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r]=e,{dim:o}=n,a=Da(t,r);return{logits:()=>Fi(a,Da(Ii(a,[o],true),r))}}},{kernelName:_e,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Da(t,ls(n))}}},up,up,cp,cp,{kernelName:Ee,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Sa(t,Da(Zu(vo(n,"float32")),2))}}},{kernelName:Me,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,o=di(2);return{a:()=>Da(t,Da(o,Fi(n,r))),b:()=>Da(t,Da(o,Fi(r,n)))}}},{kernelName:Ne,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Da(t,Da(vo(n,"float32"),2))}}},{kernelName:je,gradFunc:t=>({x:()=>Ks(t)})},{kernelName:Te,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,o=qs(n.shape,r.shape);return{a:()=>{let e=t;const r=Ws(n.shape,o);return r.length>0&&(e=Ii(e,r)),$o(e,n.shape)},b:()=>{let e=t;const n=Ws(r.shape,o);return n.length>0&&(e=Ii(e,n)),$o(_i(e),r.shape)}}}},{kernelName:Se,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,o=r.shape.slice(),{axis:a}=n;mn(a,r.shape).forEach((t=>{o[t]=1}));const s=$o(t,o),i=Da(s,Oi(r.shape,"float32"));return{x:()=>i}}},{kernelName:$e,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Sa(t,Gi($s(n)))}}},{kernelName:Ce,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Da(Fi(di(1),Gi(n)),t)}}},{kernelName:Be,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{reps:o}=n;return{x:()=>{let e=Ks(r);if(1===r.rank)for(let n=0;n<o[0];++n)e=_a(e,hs(t,[n*r.shape[0]],[r.shape[0]]));else if(2===r.rank)for(let n=0;n<o[0];++n)for(let a=0;a<o[1];++a)e=_a(e,hs(t,[n*r.shape[0],a*r.shape[1]],[r.shape[0],r.shape[1]]));else if(3===r.rank)for(let n=0;n<o[0];++n)for(let a=0;a<o[1];++a)for(let s=0;s<o[2];++s)e=_a(e,hs(t,[n*r.shape[0],a*r.shape[1],s*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else{if(4!==r.rank)throw new Error("Gradient for tile operation is not implemented for rank-"+r.rank+" tensors yet.");for(let n=0;n<o[0];++n)for(let a=0;a<o[1];++a)for(let s=0;s<o[2];++s)for(let i=0;i<o[3];++i)e=_a(e,hs(t,[n*r.shape[0],a*r.shape[1],s*r.shape[2],i*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]))}return e}}}},{kernelName:Le,gradFunc:(t,e,n)=>{const r=n,{perm:o}=r,a=Ba(o);return{x:()=>Ro(t,a)}}},{kernelName:ze,gradFunc:(t,e,n)=>{const r=n,{axis:o}=r;return{value:()=>ec(t,o)}}},{kernelName:We,inputsToSave:["segmentIds"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>function(t,e){const n=pi(e,Ks(e)),r=ai(t,n);let o=ii(e,di(0,"int32"));const a=r.rank-o.rank;for(let t=0;t<a;++t)o=Xs(o,t+1);o=Ti(o,Oi(r.shape,"bool"));const s=Ks(r);return Gs(o,r,s)}(t,n)}}},{kernelName:qe,gradFunc:t=>({x:()=>Ks(t)})}];
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */for(const t of lp)en(t);
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */Qn.prototype.abs=function(){return this.throwIfDisposed(),Fa(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.acos=function(){return this.throwIfDisposed(),Ia(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.acosh=function(){return this.throwIfDisposed(),Ma(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.addStrict=function(t){return this.throwIfDisposed(),xc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.add=function(t){return this.throwIfDisposed(),_a(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.all=function(t,e){return this.throwIfDisposed(),La(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.any=function(t,e){return this.throwIfDisposed(),Oa(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.argMax=function(t){return this.throwIfDisposed(),za(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.argMin=function(t){return this.throwIfDisposed(),Wa(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.asScalar=function(){return this.throwIfDisposed(),an(1===this.size,(()=>"The array must have only 1 element.")),$o(this,[])},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.asType=function(t){return this.throwIfDisposed(),vo(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.as1D=function(){return this.throwIfDisposed(),$o(this,[this.size])},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.as2D=function(t,e){return this.throwIfDisposed(),$o(this,[t,e])},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),$o(this,[t,e,n])},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.as4D=function(t,e,n,r){return this.throwIfDisposed(),$o(this,[t,e,n,r])},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.as5D=function(t,e,n,r,o){return this.throwIfDisposed(),$o(this,[t,e,n,r,o])},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.asin=function(){return this.throwIfDisposed(),qa(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.asinh=function(){return this.throwIfDisposed(),ja(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.atan=function(){return this.throwIfDisposed(),Ga(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.atan2=function(t){return this.throwIfDisposed(),Ka(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.atanh=function(){return this.throwIfDisposed(),Ha(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.avgPool=function(t,e,n,r){return this.throwIfDisposed(),as(this,t,e,n,r)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),fs(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.batchNorm=function(t,e,n,r,o){return this.throwIfDisposed(),gs(this,t,e,n,r,o)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.broadcastTo=function(t){return this.throwIfDisposed(),ws(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.cast=function(t){return this.throwIfDisposed(),vo(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.ceil=function(){return this.throwIfDisposed(),xs(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),ks(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.concat=function(t,e){return this.throwIfDisposed(),t instanceof Qn&&(t=[t]),cs([this,...t],e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.conv1d=function(t,e,n,r,o,a){return this.throwIfDisposed(),Is(this,t,e,n,r,o,a)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.conv2dTranspose=function(t,e,n,r,o){return this.throwIfDisposed(),Ns(this,t,e,n,r,o)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.conv2d=function(t,e,n,r,o,a){return this.throwIfDisposed(),Fs(this,t,e,n,r,o,a)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.cos=function(){return this.throwIfDisposed(),$s(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.cosh=function(){return this.throwIfDisposed(),Cs(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.cumsum=function(t,e,n){return this.throwIfDisposed(),Bs(this,t,e,n)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),Rs(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.depthwiseConv2D=function(t,e,n,r,o,a){return ya("depthwiseConv2D is deprecated, use depthwiseConv2d instead"),this.throwIfDisposed(),Ls(this,t,e,n,r,o,a)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.depthwiseConv2d=function(t,e,n,r,o,a){return this.throwIfDisposed(),Ls(this,t,e,n,r,o,a)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.dilation2d=function(t,e,n,r,o){return this.throwIfDisposed(),zs(this,t,e,n,r,o)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.divNoNan=function(t){return this.throwIfDisposed(),Hs(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.divStrict=function(t){return this.throwIfDisposed(),kc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.div=function(t){return this.throwIfDisposed(),Sa(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.dot=function(t){return this.throwIfDisposed(),Us(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.elu=function(){return this.throwIfDisposed(),Vs(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.equalStrict=function(t){return this.throwIfDisposed(),mc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.equal=function(t){return this.throwIfDisposed(),js(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.erf=function(){return this.throwIfDisposed(),Js(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.exp=function(){return this.throwIfDisposed(),Ys(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.expandDims=function(t){return this.throwIfDisposed(),Xs(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.expm1=function(){return this.throwIfDisposed(),Zs(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.fft=function(){return this.throwIfDisposed(),Hu(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.flatten=function(){return this.throwIfDisposed(),$o(this,[this.size])},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.floor=function(){return this.throwIfDisposed(),ni(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.floorDiv=function(t){return this.throwIfDisposed(),Ea(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.gather=function(t,e){return this.throwIfDisposed(),ai(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),gc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.greaterEqual=function(t){return this.throwIfDisposed(),ii(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.greaterStrict=function(t){return this.throwIfDisposed(),vc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.greater=function(t){return this.throwIfDisposed(),si(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.ifft=function(){return this.throwIfDisposed(),Uu(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.irfft=function(){return this.throwIfDisposed(),Vu(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.isFinite=function(){return this.throwIfDisposed(),ci(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.isInf=function(){return this.throwIfDisposed(),li(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.isNaN=function(){return this.throwIfDisposed(),hi(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.leakyRelu=function(t){return this.throwIfDisposed(),fi(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),bc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.lessEqual=function(t){return this.throwIfDisposed(),gi(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.lessStrict=function(t){return this.throwIfDisposed(),yc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.less=function(t){return this.throwIfDisposed(),mi(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.localResponseNormalization=function(t,e,n,r){return this.throwIfDisposed(),vi(this,t,e,n,r)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.logSigmoid=function(){return this.throwIfDisposed(),Si(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.logSoftmax=function(t){return this.throwIfDisposed(),Mi(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.logSumExp=function(t,e){return this.throwIfDisposed(),Ni(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.log=function(){return this.throwIfDisposed(),bi(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.log1p=function(){return this.throwIfDisposed(),yi(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.logicalAnd=function(t){return this.throwIfDisposed(),Ti(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.logicalNot=function(){return this.throwIfDisposed(),Ai(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.logicalOr=function(t){return this.throwIfDisposed(),Pi(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.logicalXor=function(t){return this.throwIfDisposed(),$i(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.matMul=function(t,e,n){return this.throwIfDisposed(),Co(this,t,e,n)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.maxPool=function(t,e,n,r){return this.throwIfDisposed(),Ci(this,t,e,n,r)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.max=function(t,e){return this.throwIfDisposed(),Di(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.maximumStrict=function(t){return this.throwIfDisposed(),_c(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.maximum=function(t){return this.throwIfDisposed(),pi(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.mean=function(t,e){return this.throwIfDisposed(),zi(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.min=function(t,e){return this.throwIfDisposed(),Wi(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.minimumStrict=function(t){return this.throwIfDisposed(),Ec(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.minimum=function(t){return this.throwIfDisposed(),qi(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.modStrict=function(t){return this.throwIfDisposed(),Sc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.mod=function(t){return this.throwIfDisposed(),ji(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.mulStrict=function(t){return this.throwIfDisposed(),Dc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.mul=function(t){return this.throwIfDisposed(),Da(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.neg=function(){return this.throwIfDisposed(),_i(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.norm=function(t,e,n){return this.throwIfDisposed(),Tc(this,t,e,n)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),wc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.notEqual=function(t){return this.throwIfDisposed(),Vi(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.oneHot=function(t,e=1,n=0){return this.throwIfDisposed(),Bo(this,t,e,n)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.onesLike=function(){return this.throwIfDisposed(),Yi(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.pad=function(t,e){return this.throwIfDisposed(),Zi(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.pool=function(t,e,n,r,o){return this.throwIfDisposed(),ou(this,t,e,n,r,o)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.powStrict=function(t){return this.throwIfDisposed(),Fc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.pow=function(t){return this.throwIfDisposed(),au(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.prelu=function(t){return this.throwIfDisposed(),su(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.prod=function(t,e){return this.throwIfDisposed(),iu(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.reciprocal=function(){return this.throwIfDisposed(),Su(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.relu=function(){return this.throwIfDisposed(),Du(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.relu6=function(){return this.throwIfDisposed(),Fu(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.reshapeAs=function(t){return this.throwIfDisposed(),$o(this,t.shape)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.reshape=function(t){return this.throwIfDisposed(),$o(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.resizeBilinear=function(t,e){return this.throwIfDisposed(),wl(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.resizeNearestNeighbor=function(t,e){return this.throwIfDisposed(),xl(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.reverse=function(t){return this.throwIfDisposed(),Iu(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.rfft=function(){return this.throwIfDisposed(),Xu(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.round=function(){return this.throwIfDisposed(),Pu(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.rsqrt=function(){return this.throwIfDisposed(),$u(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.selu=function(){return this.throwIfDisposed(),Cu(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.separableConv2d=function(t,e,n,r,o,a){return this.throwIfDisposed(),Bu(this,t,e,n,r,o,a)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.sigmoid=function(){return this.throwIfDisposed(),ls(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.sign=function(){return this.throwIfDisposed(),Lu(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.sin=function(){return this.throwIfDisposed(),Ou(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.sinh=function(){return this.throwIfDisposed(),zu(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.slice=function(t,e){return this.throwIfDisposed(),hs(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.softmax=function(t){return this.throwIfDisposed(),Ku(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.softplus=function(){return this.throwIfDisposed(),Ei(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),ru(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.split=function(t,e){return this.throwIfDisposed(),Yu(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.sqrt=function(){return this.throwIfDisposed(),Zu(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.square=function(){return this.throwIfDisposed(),Gi(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.squaredDifference=function(t){return this.throwIfDisposed(),Qu(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),Ic(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.squeeze=function(t){return this.throwIfDisposed(),tc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.stack=function(t,e){this.throwIfDisposed();const n=t instanceof Qn?[this,t]:[this,...t];return ec(n,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.step=function(t){return this.throwIfDisposed(),nc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.stridedSlice=function(t,e,n,r,o,a,s,i){return this.throwIfDisposed(),rc(this,t,e,n,r,o,a,s,i)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.subStrict=function(t){return this.throwIfDisposed(),Mc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.sub=function(t){return this.throwIfDisposed(),Fi(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.sum=function(t,e){return this.throwIfDisposed(),Ii(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.tan=function(){return this.throwIfDisposed(),oc(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.tanh=function(){return this.throwIfDisposed(),ps(this)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.tile=function(t){return this.throwIfDisposed(),Qs(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.toBool=function(){return this.throwIfDisposed(),vo(this,"bool")},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.toFloat=function(){return this.throwIfDisposed(),vo(this,"float32")},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.toInt=function(){return this.throwIfDisposed(),vo(this,"int32")},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.topk=function(t,e){return this.throwIfDisposed(),ic(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.transpose=function(t){return this.throwIfDisposed(),Ro(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.unique=function(t){return this.throwIfDisposed(),cc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),lc(this,t,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.unstack=function(t){return this.throwIfDisposed(),hc(this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.where=function(t,e){return this.throwIfDisposed(),Gs(t,this,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
Qn.prototype.zerosLike=function(){return this.throwIfDisposed(),Ks(this)};
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
var hp=Object.freeze({__proto__:null,AdadeltaOptimizer:ql,AdagradOptimizer:jl,AdamOptimizer:Gl,AdamaxOptimizer:Kl,MomentumOptimizer:Ul,Optimizer:Wl,RMSPropOptimizer:Vl,SGDOptimizer:Hl,Tensor:Qn,TensorBuffer:Yn,Variable:tr,get Rank(){return er},sumOutType:function(t){return ir(t,"int32")},upcastType:ir,get Reduction(){return Dl},customGrad:xi,grad:function(t){return an(Mn(t),(()=>"The f passed in grad(f) must be a function")),(e,n)=>{const r=Er(e,"x","tf.grad",null),o=null!=n?Er(n,"dy","tf.grad"):null;return gr.tidy((()=>{const{value:e,grads:n}=gr.gradients((()=>t(r)),[r],o);return null!=o&&sn(e.shape,o.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),ki(n),n[0]}))}},grads:function(t){return an(Mn(t),(()=>"The f passed in grads(f) must be a function")),(e,n)=>{an(Array.isArray(e),(()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"));const r=Sr(e,"args","tf.grads",null),o=null!=n?Er(n,"dy","tf.grads"):null;return gr.tidy((()=>{const{value:e,grads:n}=gr.gradients((()=>t(...r)),r,o);return null!=o&&sn(e.shape,o.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),ki(n),n}))}},valueAndGrad:function(t){return an(Mn(t),(()=>"The f passed in valueAndGrad(f) must be a function")),(e,n)=>{an(e instanceof Qn,(()=>"The x passed in valueAndGrad(f)(x) must be a tensor")),an(null==n||n instanceof Qn,(()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor"));const{grads:r,value:o}=gr.gradients((()=>t(e)),[e],n);return ki(r),{grad:r[0],value:o}}},valueAndGrads:function(t){return an(Mn(t),(()=>"The f passed in valueAndGrads(f) must be a function")),(e,n)=>{an(Array.isArray(e)&&e.every((t=>t instanceof Qn)),(()=>"The args passed in valueAndGrads(f)(args) must be array of tensors")),an(null==n||n instanceof Qn,(()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor"));const r=gr.gradients((()=>t(...e)),e,n);return null!=n&&sn(r.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),ki(r.grads),r}},variableGrads:wi,Environment:i,env:u,get ENV(){return l},nextFrame:function(){return new Promise((t=>Xl((()=>t()))))},KernelBackend:o,DataStorage:class{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}},abs:Fa,acos:Ia,acosh:Ma,add:_a,addN:Na,all:La,any:Oa,argMax:za,argMin:Wa,asin:qa,asinh:ja,atan:Ga,atan2:Ka,atanh:Ha,avgPool:as,avgPool3d:ss,basicLSTMCell:ds,batchToSpaceND:fs,batchNorm:gs,batchNorm2d:vs,batchNorm3d:bs,batchNorm4d:ys,broadcastTo:ws,buffer:go,cast:vo,ceil:xs,clipByValue:ks,clone:bo,complex:Ir,concat:cs,concat1d:_s,concat2d:Es,concat3d:Ss,concat4d:Ds,conv1d:Is,conv2d:Fs,conv2dTranspose:Ns,conv3d:Ts,conv3dTranspose:Ps,cos:$s,cosh:Cs,cumsum:Bs,depthToSpace:Rs,depthwiseConv2d:Ls,diag:Os,dilation2d:zs,div:Sa,divNoNan:Hs,dot:Us,elu:Vs,equal:js,erf:Js,exp:Ys,expandDims:Xs,expm1:Zs,eye:ti,fill:ei,floor:ni,floorDiv:Ea,gather:ai,greater:si,greaterEqual:ii,imag:ui,isFinite:ci,isInf:li,isNaN:hi,leakyRelu:fi,less:mi,lessEqual:gi,linspace:function(t,e,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:t,stop:e,num:n};return gr.runKernelFunc((r=>r.linspace(t,e,n)),{},null,St,r)},localResponseNormalization:vi,log:bi,log1p:yi,logSigmoid:Si,logSoftmax:Mi,logSumExp:Ni,logicalAnd:Ti,logicalNot:Ai,logicalOr:Pi,logicalXor:$i,matMul:Co,max:Di,maxPool:Ci,maxPool3d:Bi,maxPoolWithArgmax:Ri,maximum:pi,mean:zi,min:Wi,minimum:qi,mod:ji,moments:Ki,mul:Da,multiRNNCell:Hi,multinomial:Ui,neg:_i,notEqual:Vi,oneHot:Bo,ones:Oi,onesLike:Yi,outerProduct:Xi,pad:Zi,pad1d:Qi,pad2d:tu,pad3d:eu,pad4d:nu,pool:ou,pow:au,prelu:su,print:yo,prod:iu,rand:uu,randomGamma:wu,randomNormal:xu,randomUniform:ku,range:Eu,real:Ji,reciprocal:Su,relu:Du,relu6:Fu,reshape:$o,reverse:Iu,reverse1d:Mu,reverse2d:Nu,reverse3d:Tu,reverse4d:Au,round:Pu,rsqrt:$u,scalar:di,selu:Cu,separableConv2d:Bu,setdiff1dAsync:Ru,sigmoid:ls,sign:Lu,sin:Ou,sinh:zu,slice:hs,slice1d:Wu,slice2d:qu,slice3d:ju,slice4d:Gu,softmax:Ku,softplus:Ei,spaceToBatchND:ru,fft:Hu,ifft:Uu,irfft:Vu,rfft:Xu,split:Yu,sqrt:Zu,square:Gi,squaredDifference:Qu,squeeze:tc,stack:ec,step:nc,stridedSlice:rc,sub:Fi,sum:Ii,tan:oc,tanh:ps,tensor:Nr,tensor1d:_u,tensor2d:ac,tensor3d:zo,tensor4d:sc,tensor5d:function(t,e,n){if(un(t),null!=e&&5!==e.length)throw new Error("tensor5d() requires shape to have five numbers");const r=xr(t,n);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Mr(t,e,r,n)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */,tensor6d:function(t,e,n){if(un(t),null!=e&&6!==e.length)throw new Error("tensor6d() requires shape to have six numbers");const r=xr(t,n);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return Mr(t,e=e||r,r,n)},tile:Qs,topk:ic,truncatedNormal:uc,unique:cc,unsortedSegmentSum:lc,unstack:hc,variable:function(t,e=!0,n,r){return gr.makeVariable(t,e,n,r)},where:Gs,whereAsync:dc,zeros:Li,zerosLike:Ks,op:Fr,OP_SCOPE_SUFFIX:Dr,booleanMaskAsync:fc,equalStrict:mc,greaterEqualStrict:gc,greaterStrict:vc,lessEqualStrict:bc,lessStrict:yc,notEqualStrict:wc,addStrict:xc,divStrict:kc,maximumStrict:_c,minimumStrict:Ec,modStrict:Sc,mulStrict:Dc,powStrict:Fc,squaredDifferenceStrict:Ic,subStrict:Mc,transpose:Ro,norm:Tc,movingAverage:Ac,scatterND:Pc,sparseToDense:$c,gatherND:Cc,dropout:Bc,enclosingPowerOfTwo:Rc,cosineWindow:Lc,inTopKAsync:Oc,image:Ll,linalg:Ol,losses:zl,spectral:Bl,fused:Yc,signal:Rl,train:Yl,enableProdMode:
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function(){u().set("PROD",!0)},enableDebugMode:function(){u().set("DEBUG",!0)},disableDeprecationWarnings:function(){u().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")},deprecationWarn:ya,disposeVariables:function(){gr.disposeVariables()},engine:function(){return gr},memory:function(){return gr.memory()},profile:function(t){return gr.profile(t)},tidy:wa,dispose:xa,keep:ka,time:function(t){return gr.time(t)},setBackend:function(t){return gr.setBackend(t)},ready:function(){return gr.ready()},getBackend:function(){return gr.backendName},removeBackend:function(t){gr.removeBackend(t)},findBackend:function(t){return gr.findBackend(t)},findBackendFactory:function(t){return gr.findBackendFactory(t)},registerBackend:function(t,e,n=1){return gr.registerBackend(t,e,n)},backend:function(){return gr.backend},setPlatform:function(t,e){u().setPlatform(t,e)},getKernel:Xe,getGradient:Ze,getKernelsForBackend:Qe,registerKernel:tn,registerGradient:en,unregisterKernel:function(t,e){const n=nn(t,e);if(!Je.has(n))throw new Error(`The kernel '${t}' for backend '${e}' is not registered`);Je.delete(n)},unregisterGradient:function(t){if(!Ye.has(t))throw new Error(`The gradient '${t}' for backend is not registered`);Ye.delete(t)},copyRegisteredKernels:function(t,e){Qe(t).forEach((t=>{tn(Object.assign({},t,{backendName:e}))}))},Abs:d,Acos:f,Acosh:m,Add:g,AddN:v,All:"All",Any:"Any",ArgMax:b,ArgMin:y,Asin:w,Asinh:x,Atan:k,Atanh:_,Atan2:E,AvgPool:S,AvgPoolBackprop:D,AvgPool3D:F,AvgPool3DBackprop:I,BatchMatMul:M,BatchToSpaceND:N,BroadcastTo:T,Cast:A,Ceil:P,ClipByValue:$,Complex:C,Concat:B,Conv2D:R,Conv2DBackpropFilter:L,Conv2DBackpropInput:O,Conv3D:z,Conv3DBackpropFilterV2:W,Conv3DBackpropInputV2:q,Cos:j,Cosh:G,Cumsum:K,CropAndResize:H,DepthToSpace:U,DepthwiseConv2dNative:V,DepthwiseConv2dNativeBackpropFilter:J,DepthwiseConv2dNativeBackpropInput:Y,Diag:X,Dilation2D:Z,Dilation2DBackpropInput:Q,Dilation2DBackpropFilter:tt,Div:et,Elu:nt,EluGrad:rt,Erf:ot,Equal:at,Exp:st,Expm1:it,FFT:"FFT",Fill:ut,FlipLeftRight:ct,Floor:lt,FloorDiv:ht,FusedBatchNorm:pt,GatherV2:dt,GatherNd:ft,Greater:mt,GreaterEqual:gt,Identity:vt,IFFT:bt,Imag:yt,IsFinite:wt,IsInf:xt,IsNan:kt,Less:_t,LessEqual:Et,LinSpace:St,Log:Dt,Log1p:Ft,LogicalAnd:It,LogicalNot:Mt,LogicalOr:Nt,LogSoftmax:Tt,LRN:At,LRNBackprop:Pt,Max:$t,Maximum:Ct,MaxPool:Bt,MaxPoolBackprop:Rt,MaxPool3D:Lt,MaxPool3DBackprop:Ot,MaxPoolWithArgmax:zt,Mean:"Mean",Min:Wt,Minimum:qt,Mod:jt,Multiply:Gt,Negate:Kt,NotEqual:Ht,NonMaxSuppressionV3:Ut,NonMaxSuppressionV4:Vt,NonMaxSuppressionV5:Jt,OnesLike:Yt,OneHot:Xt,PadV2:Zt,Pool:"Pool",Pow:Qt,Prelu:te,Prod:ee,Range:ne,Real:re,Reciprocal:oe,Relu:ae,Reshape:se,ResizeNearestNeighbor:ie,ResizeNearestNeighborGrad:ue,ResizeBilinear:ce,ResizeBilinearGrad:le,Relu6:he,Reverse:pe,Round:de,Rsqrt:fe,ScatterNd:me,SelectV2:ge,Selu:ve,Slice:be,Sin:ye,Sinh:we,Sign:xe,Sigmoid:ke,Softplus:_e,Sqrt:Ee,Sum:Se,SpaceToBatchND:De,SplitV:Fe,Softmax:Ie,SquaredDifference:Me,Square:Ne,Sub:Te,SparseToDense:Ae,StridedSlice:Pe,Tan:$e,Tanh:Ce,Tile:Be,TopK:Re,Transpose:Le,Unique:Oe,Unpack:ze,UnsortedSegmentSum:We,ZerosLike:qe,Step:je,FromPixels:Ge,RotateWithOffset:Ke,_FusedMatMul:He,FusedConv2D:Ue,FusedDepthwiseConv2D:Ve,version_core:"2.6.0",browser:Go,io:Po,math:Oo,serialization:fa,test_util:ba,util:Wn,backend_util:th,tensor_util:pr,slice_util:la,gather_util:Ho,scatter_util:Yo,device_util:yr,kernel_impls:eh});function pp(t,e,n){if(void 0===n&&(n=!1),t.beginPath(),e.slice(1).forEach((function(n,r){var o=n.x,a=n.y,s=e[r];t.moveTo(s.x,s.y),t.lineTo(o,a)})),n){var r=e[e.length-1],o=e[0];if(!r||!o)return;t.moveTo(r.x,r.y),t.lineTo(o.x,o.y)}t.stroke()}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */var dp=function(t,e){return(dp=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function fp(t,e){function n(){this.constructor=t}dp(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var mp=function(){return(mp=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function gp(t,e,n,r){return new(n||(n=Promise))((function(o,a){function s(t){try{u(r.next(t))}catch(t){a(t)}}function i(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,i)}u((r=r.apply(t,e||[])).next())}))}function vp(t,e){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}function bp(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var a=arguments[e],s=0,i=a.length;s<i;s++,o++)r[o]=a[s];return r}var yp=function(){function t(t,e){if(!Tp(t)||!Tp(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(t.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),t.prototype.reverse=function(){return new t(1/this.width,1/this.height)},t}();function wp(t,e){return t instanceof Qn&&t.shape.length===e}function xp(t){return wp(t,2)}function kp(t){return wp(t,3)}function _p(t){return wp(t,4)}function Ep(t){return t%1!=0}function Sp(t){return t%2==0}function Dp(t,e){void 0===e&&(e=2);var n=Math.pow(10,e);return Math.floor(t*n)/n}function Fp(t){return t&&t.width&&t.height}function Ip(t,e){var n=t.width,r=t.height,o=e/Math.max(r,n);return new yp(Math.round(n*o),Math.round(r*o))}function Mp(t){return t.reduce((function(t,e){return t.add(e)}),new $p(0,0)).div(new $p(t.length,t.length))}function Np(t,e,n){return Array(t).fill(0).map((function(t,r){return e+r*n}))}function Tp(t){return!!t&&t!==1/0&&t!==-1/0&&!isNaN(t)||0===t}function Ap(t){return Tp(t)&&0<=t&&t<=1}var Pp=Object.freeze({__proto__:null,isTensor:wp,isTensor1D:function(t){return wp(t,1)},isTensor2D:xp,isTensor3D:kp,isTensor4D:_p,isFloat:Ep,isEven:Sp,round:Dp,isDimensions:Fp,computeReshapedDimensions:Ip,getCenterPoint:Mp,range:Np,isValidNumber:Tp,isValidProbablitiy:Ap}),$p=function(){function t(t,e){this._x=t,this._y=e}return Object.defineProperty(t.prototype,"x",{get:function(){return this._x},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y},enumerable:!1,configurable:!0}),t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y)},t.prototype.sub=function(e){return new t(this.x-e.x,this.y-e.y)},t.prototype.mul=function(e){return new t(this.x*e.x,this.y*e.y)},t.prototype.div=function(e){return new t(this.x/e.x,this.y/e.y)},t.prototype.abs=function(){return new t(Math.abs(this.x),Math.abs(this.y))},t.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},t.prototype.floor=function(){return new t(Math.floor(this.x),Math.floor(this.y))},t}(),Cp=function(){function t(e,n){void 0===n&&(n=!0);var r=e||{},o=[r.left,r.top,r.right,r.bottom].every(Tp),a=[r.x,r.y,r.width,r.height].every(Tp);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(r));var s=a?[r.x,r.y,r.width,r.height]:[r.left,r.top,r.right-r.left,r.bottom-r.top],i=s[0],u=s[1],c=s[2],l=s[3];t.assertIsValidBox({x:i,y:u,width:c,height:l},"Box.constructor",n),this._x=i,this._y=u,this._width=c,this._height=l}return t.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(Tp)},t.assertIsValidBox=function(e,n,r){if(void 0===r&&(r=!1),!t.isRect(e))throw new Error(n+" - invalid box: "+JSON.stringify(e)+", expected object with properties x, y, width, height");if(!r&&(e.width<0||e.height<0))throw new Error(n+" - width ("+e.width+") and height ("+e.height+") must be positive numbers")},Object.defineProperty(t.prototype,"x",{get:function(){return this._x},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"left",{get:function(){return this.x},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"top",{get:function(){return this.y},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"right",{get:function(){return this.x+this.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"area",{get:function(){return this.width*this.height},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"topLeft",{get:function(){return new $p(this.left,this.top)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"topRight",{get:function(){return new $p(this.right,this.top)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bottomLeft",{get:function(){return new $p(this.left,this.bottom)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bottomRight",{get:function(){return new $p(this.right,this.bottom)},enumerable:!1,configurable:!0}),t.prototype.round=function(){var e=[this.x,this.y,this.width,this.height].map((function(t){return Math.round(t)}));return new t({x:e[0],y:e[1],width:e[2],height:e[3]})},t.prototype.floor=function(){var e=[this.x,this.y,this.width,this.height].map((function(t){return Math.floor(t)}));return new t({x:e[0],y:e[1],width:e[2],height:e[3]})},t.prototype.toSquare=function(){var e=this,n=e.x,r=e.y,o=e.width,a=e.height,s=Math.abs(o-a);return o<a&&(n-=s/2,o+=s),a<o&&(r-=s/2,a+=s),new t({x:n,y:r,width:o,height:a})},t.prototype.rescale=function(e){var n=Fp(e)?e.width:e,r=Fp(e)?e.height:e;return new t({x:this.x*n,y:this.y*r,width:this.width*n,height:this.height*r})},t.prototype.pad=function(e,n){var r=[this.x-e/2,this.y-n/2,this.width+e,this.height+n];return new t({x:r[0],y:r[1],width:r[2],height:r[3]})},t.prototype.clipAtImageBorders=function(e,n){var r=this,o=r.x,a=r.y,s=r.right,i=r.bottom,u=Math.max(o,0),c=Math.max(a,0),l=s-u,h=i-c;return new t({x:u,y:c,width:Math.min(l,e-u),height:Math.min(h,n-c)}).floor()},t.prototype.shift=function(e,n){var r=this.width,o=this.height;return new t({x:this.x+e,y:this.y+n,width:r,height:o})},t.prototype.padAtBorders=function(t,e){var n=this.width+1,r=this.height+1,o=n,a=r,s=this.left,i=this.top,u=this.right,c=this.bottom;return u>e&&(o=-u+e+n,u=e),c>t&&(a=-c+t+r,c=t),s<1&&(a=2-s,s=1),i<1&&(a=2-i,i=1),{dy:1,edy:a,dx:1,edx:o,y:i,ey:c,x:s,ex:u,w:n,h:r}},t.prototype.calibrate=function(e){return new t({left:this.left+e.left*this.width,top:this.top+e.top*this.height,right:this.right+e.right*this.width,bottom:this.bottom+e.bottom*this.height}).toSquare().round()},t}(),Bp=function(t){function e(e,n,r,o,a){return void 0===a&&(a=!1),t.call(this,{left:e,top:n,right:r,bottom:o},a)||this}return fp(e,t),e}(Cp),Rp=function(){function t(t,e,n,r,o){this._imageDims=new yp(o.width,o.height),this._score=t,this._classScore=e,this._className=n,this._box=new Cp(r).rescale(this._imageDims)}return Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"className",{get:function(){return this._className},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"box",{get:function(){return this._box},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"relativeBox",{get:function(){return new Cp(this._box).rescale(this.imageDims.reverse())},enumerable:!1,configurable:!0}),t.prototype.forSize=function(e,n){return new t(this.score,this.classScore,this.className,this.relativeBox,{width:e,height:n})},t}(),Lp=function(t){function e(e,n,r){return t.call(this,e,e,"",n,r)||this}return fp(e,t),e.prototype.forSize=function(n,r){var o=t.prototype.forSize.call(this,n,r);return new e(o.score,o.relativeBox,o.imageDims)},e}(Rp);function Op(t,e,n){void 0===n&&(n=!0);var r=Math.max(0,Math.min(t.right,e.right)-Math.max(t.left,e.left))*Math.max(0,Math.min(t.bottom,e.bottom)-Math.max(t.top,e.top));return n?r/(t.area+e.area-r):r/Math.min(t.area,e.area)}function zp(t){var e=t.map((function(t){return t.x})),n=t.map((function(t){return t.y})),r=e.reduce((function(t,e){return e<t?e:t}),1/0),o=n.reduce((function(t,e){return e<t?e:t}),1/0),a=e.reduce((function(t,e){return t<e?e:t}),0),s=n.reduce((function(t,e){return t<e?e:t}),0);return new Bp(r,o,a,s)}function Wp(t,e,n,r){void 0===r&&(r=!0);for(var o=e.map((function(t,e){return{score:t,boxIndex:e}})).sort((function(t,e){return t.score-e.score})).map((function(t){return t.boxIndex})),a=[],s=function(){var e=o.pop();a.push(e);for(var s=o,i=[],u=0;u<s.length;u++){var c=s[u],l=t[e],h=t[c];i.push(Op(l,h,r))}o=o.filter((function(t,e){return i[e]<=n}))};o.length>0;)s();return a}function qp(t,e){return wa((function(){var n=e[0],r=e[1],o=e[2],a=ei(bp(t.shape.slice(0,3),[1]),n),s=ei(bp(t.shape.slice(0,3),[1]),r),i=ei(bp(t.shape.slice(0,3),[1]),o),u=cs([a,s,i],3);return Fi(t,u)}))}function jp(t,e){return void 0===e&&(e=!1),wa((function(){var n=t.shape.slice(1),r=n[0],o=n[1];if(r===o)return t;var a=Math.abs(r-o),s=Math.round(a*(e?.5:1)),i=r>o?2:1,u=function(e){var n=t.shape.slice();return n[i]=e,ei(n,0)},c=u(s),l=a-c.shape[i],h=[e&&l?u(l):null,t,c].filter((function(t){return!!t})).map((function(t){return t.toFloat()}));return cs(h,i)}))}function Gp(t){return 1/(1+Math.exp(-t))}var Kp,Hp=function(t){function e(e,n,r,o,a){return void 0===a&&(a=!1),t.call(this,{x:e,y:n,width:r,height:o},a)||this}return fp(e,t),e}(Cp),Up=function(){function t(t,e,n){void 0===n&&(n=new $p(0,0));var r=e.width,o=e.height;this._imgDims=new yp(r,o),this._shift=n,this._positions=t.map((function(t){return t.mul(new $p(r,o)).add(n)}))}return Object.defineProperty(t.prototype,"shift",{get:function(){return new $p(this._shift.x,this._shift.y)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"positions",{get:function(){return this._positions},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map((function(e){return e.sub(t._shift).div(new $p(t.imageWidth,t.imageHeight))}))},enumerable:!1,configurable:!0}),t.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},t.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new $p(t,e))},t.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},t.prototype.align=function(t,e){if(void 0===e&&(e={}),t){var n=t instanceof Lp?t.box.floor():new Cp(t);return this.shiftBy(n.x,n.y).align(null,e)}var r=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),o=r.useDlibAlignment,a=r.minBoxPadding;return o?this.alignDlib():this.alignMinBbox(a)},t.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],n=t[1],r=t[2],o=function(t){return r.sub(t).magnitude()},a=(o(e)+o(n))/2,s=Math.floor(a/.45),i=Mp(t),u=Math.floor(Math.max(0,i.x-.5*s)),c=Math.floor(Math.max(0,i.y-.43*s));return new Hp(u,c,Math.min(s,this.imageWidth+u),Math.min(s,this.imageHeight+c))},t.prototype.alignMinBbox=function(t){var e=zp(this.positions);return e.pad(e.width*t,e.height*t)},t.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},t}(),Vp=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.getRefPointsForAlignment=function(){var t=this.positions;return[t[0],t[1],Mp([t[3],t[4]])]},e}(Up),Jp=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.getJawOutline=function(){return this.positions.slice(0,17)},e.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},e.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},e.prototype.getNose=function(){return this.positions.slice(27,36)},e.prototype.getLeftEye=function(){return this.positions.slice(36,42)},e.prototype.getRightEye=function(){return this.positions.slice(42,48)},e.prototype.getMouth=function(){return this.positions.slice(48,68)},e.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Mp)},e}(Up),Yp=function(){function t(t,e){this._label=t,this._distance=e}return Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"distance",{get:function(){return this._distance},enumerable:!1,configurable:!0}),t.prototype.toString=function(t){return void 0===t&&(t=!0),this.label+(t?" ("+Dp(this.distance)+")":"")},t}(),Xp=function(t){function e(e,n){var r=t.call(this,e)||this;return r._label=n,r}return fp(e,t),e.assertIsValidLabeledBox=function(t,e){if(Cp.assertIsValidBox(t,e),!Tp(t.label))throw new Error(e+" - expected property label ("+t.label+") to be a number")},Object.defineProperty(e.prototype,"label",{get:function(){return this._label},enumerable:!1,configurable:!0}),e}(Cp),Zp=function(){function t(t,e){if("string"!=typeof t)throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some((function(t){return!(t instanceof Float32Array)})))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!1,configurable:!0}),t.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map((function(t){return Array.from(t)}))}},t.fromJSON=function(e){var n=e.descriptors.map((function(t){return new Float32Array(t)}));return new t(e.label,n)},t}(),Qp=function(t){function e(e,n,r,o){var a=t.call(this,e,n)||this;return a._score=r,a._classScore=o,a}return fp(e,t),e.assertIsValidPredictedBox=function(t,e){if(Xp.assertIsValidLabeledBox(t,e),!Ap(t.score)||!Ap(t.classScore))throw new Error(e+" - expected properties score ("+t.score+") and ("+t.classScore+") to be a number between [0, 1]")},Object.defineProperty(e.prototype,"score",{get:function(){return this._score},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"classScore",{get:function(){return this._classScore},enumerable:!1,configurable:!0}),e}(Xp);function td(t){return t.detection instanceof Lp}function ed(t,e){var n={detection:e};return Object.assign({},t,n)}function nd(){var t=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D:CanvasRenderingContext2D,Image:HTMLImageElement,ImageData:ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:t,readFile:function(){throw new Error("readFile - filesystem not available for browser environment")}}}function rd(t){var e="";if(!t)try{t=require("fs")}catch(t){e=t.toString()}return{readFile:t?function(e){return new Promise((function(n,r){t.readFile(e,(function(t,e){return t?r(t):n(e)}))}))}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+e)}}}function od(){var t=global.Canvas||global.HTMLCanvasElement,e=global.Image||global.HTMLImageElement,n=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},r=rd();return mp({Canvas:t||function(){},CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){},Image:e||function(){},ImageData:global.ImageData||function(){},Video:global.HTMLVideoElement||function(){},createCanvasElement:function(){if(t)return new t;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},createImageElement:function(){if(e)return new e;throw new Error("createImageElement - missing Image implementation for nodejs environment")},fetch:n},r)}function ad(){return"object"==typeof window&&"undefined"!=typeof document&&"undefined"!=typeof HTMLImageElement&&"undefined"!=typeof HTMLCanvasElement&&"undefined"!=typeof HTMLVideoElement&&"undefined"!=typeof ImageData&&"undefined"!=typeof CanvasRenderingContext2D}function sd(){return"object"==typeof global&&"function"==typeof require&&"undefined"!=typeof module&&"undefined"!=typeof process&&!!process.version}function id(t){Kp=t}function ud(){return ad()?id(nd()):sd()?id(od()):void 0}var cd,ld={getEnv:function(){if(!Kp)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Kp},setEnv:id,initialize:ud,createBrowserEnv:nd,createFileSystem:rd,createNodejsEnv:od,monkeyPatch:function(t){if(Kp||ud(),!Kp)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var e=t.Canvas,n=void 0===e?Kp.Canvas:e,r=t.Image,o=void 0===r?Kp.Image:r;Kp.Canvas=n,Kp.Image=o,Kp.createCanvasElement=t.createCanvasElement||function(){return new n},Kp.createImageElement=t.createImageElement||function(){return new o},Kp.ImageData=t.ImageData||Kp.ImageData,Kp.Video=t.Video||Kp.Video,Kp.fetch=t.fetch||Kp.fetch,Kp.readFile=t.readFile||Kp.readFile},isBrowser:ad,isNodejs:sd};function hd(t){return ld.isNodejs()||"string"!=typeof t?t:document.getElementById(t)}function pd(t){var e=ld.getEnv(),n=e.Canvas;if(t instanceof e.CanvasRenderingContext2D)return t;var r=hd(t);if(!(r instanceof n))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var o=r.getContext("2d");if(!o)throw new Error("resolveContext2d - canvas 2d context is null");return o}ud(),function(t){t.TOP_LEFT="TOP_LEFT",t.TOP_RIGHT="TOP_RIGHT",t.BOTTOM_LEFT="BOTTOM_LEFT",t.BOTTOM_RIGHT="BOTTOM_RIGHT"}(cd||(cd={}));var dd=function(t){void 0===t&&(t={});var e=t.anchorPosition,n=t.backgroundColor,r=t.fontColor,o=t.fontSize,a=t.fontStyle,s=t.padding;this.anchorPosition=e||cd.TOP_LEFT,this.backgroundColor=n||"rgba(0, 0, 0, 0.5)",this.fontColor=r||"rgba(255, 255, 255, 1)",this.fontSize=o||14,this.fontStyle=a||"Georgia",this.padding=s||4},fd=function(){function t(e,n,r){void 0===r&&(r={}),this.text="string"==typeof e?[e]:e instanceof t?e.text:e,this.anchor=n,this.options=new dd(r)}return t.prototype.measureWidth=function(t){var e=this.options.padding;return this.text.map((function(e){return t.measureText(e).width})).reduce((function(t,e){return t<e?e:t}),0)+2*e},t.prototype.measureHeight=function(){var t=this.options,e=t.fontSize,n=t.padding;return this.text.length*e+2*n},t.prototype.getUpperLeft=function(t,e){var n=this.options.anchorPosition,r=n===cd.BOTTOM_RIGHT||n===cd.TOP_RIGHT,o=n===cd.BOTTOM_LEFT||n===cd.BOTTOM_RIGHT,a=this.measureWidth(t),s=this.measureHeight(),i=r?this.anchor.x-a:this.anchor.x,u=o?this.anchor.y-s:this.anchor.y;if(e){var c=e.width,l=e.height;return{x:Math.max(Math.min(i,c-a),0),y:Math.max(Math.min(u,l-s),0)}}return{x:i,y:u}},t.prototype.draw=function(t){var e=hd(t),n=pd(e),r=this.options,o=r.backgroundColor,a=r.fontColor,s=r.fontSize,i=r.fontStyle,u=r.padding;n.font=s+"px "+i;var c=this.measureWidth(n),l=this.measureHeight();n.fillStyle=o;var h=this.getUpperLeft(n,e);n.fillRect(h.x,h.y,c,l),n.fillStyle=a,this.text.forEach((function(t,e){var r=u+h.x,o=u+h.y+(e+1)*s;n.fillText(t,r,o)}))},t}(),md=function(t){void 0===t&&(t={});var e=t.boxColor,n=t.lineWidth,r=t.label,o=t.drawLabelOptions;this.boxColor=e||"rgba(0, 0, 255, 1)",this.lineWidth=n||2,this.label=r;var a={anchorPosition:cd.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new dd(Object.assign({},a,o))},gd=function(){function t(t,e){void 0===e&&(e={}),this.box=new Cp(t),this.options=new md(e)}return t.prototype.draw=function(t){var e=pd(t),n=this.options,r=n.boxColor,o=n.lineWidth,a=this.box,s=a.x,i=a.y,u=a.width,c=a.height;e.strokeStyle=r,e.lineWidth=o,e.strokeRect(s,i,u,c);var l=this.options.label;l&&new fd([l],{x:s-o/2,y:i},this.options.drawLabelOptions).draw(t)},t}();function vd(t){var e=ld.getEnv(),n=e.Image,r=e.Video;return t instanceof n&&t.complete||t instanceof r&&t.readyState>=3}function bd(t){return new Promise((function(e,n){if(t instanceof ld.getEnv().Canvas||vd(t))return e();function r(t){t.currentTarget&&(t.currentTarget.removeEventListener("load",r),t.currentTarget.removeEventListener("error",o),e(t))}function o(t){t.currentTarget&&(t.currentTarget.removeEventListener("load",r),t.currentTarget.removeEventListener("error",o),n(t))}t.addEventListener("load",r),t.addEventListener("error",o)}))}function yd(t){return new Promise((function(e,n){if(!(t instanceof Blob))return n("bufferToImage - expected buf to be of type: Blob");var r=new FileReader;r.onload=function(){if("string"!=typeof r.result)return n("bufferToImage - expected reader.result to be a string, in onload");var t=ld.getEnv().createImageElement();t.onload=function(){return e(t)},t.onerror=n,t.src=r.result},r.onerror=n,r.readAsDataURL(t)}))}function wd(t){var e=ld.getEnv(),n=e.Image,r=e.Video;return t instanceof n?new yp(t.naturalWidth,t.naturalHeight):t instanceof r?new yp(t.videoWidth,t.videoHeight):new yp(t.width,t.height)}function xd(t){var e=t.width,n=t.height,r=(0,ld.getEnv().createCanvasElement)();return r.width=e,r.height=n,r}function kd(t,e){var n=ld.getEnv().ImageData;if(!(t instanceof n||vd(t)))throw new Error("createCanvasFromMedia - media has not finished loading yet");var r=e||wd(t),o=r.width,a=r.height,s=xd({width:o,height:a});return t instanceof n?pd(s).putImageData(t,0,0):pd(s).drawImage(t,0,0,o,a),s}function _d(t,e){return gp(this,void 0,void 0,(function(){var n,r,o,a,s,i;return vp(this,(function(u){switch(u.label){case 0:return n=e||ld.getEnv().createCanvasElement(),r=t.shape.slice(_p(t)?1:0),o=r[0],a=r[1],s=r[2],[4,qo(i=wa((function(){return t.as3D(o,a,s).toInt()})),n)];case 1:return u.sent(),i.dispose(),[2,n]}}))}))}function Ed(t){var e=ld.getEnv(),n=e.Image,r=e.Canvas,o=e.Video;return t instanceof n||t instanceof r||t instanceof o}function Sd(t,e,n){void 0===n&&(n=!1);var r=ld.getEnv(),o=r.Image,a=r.Canvas;if(!(t instanceof o||t instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var s=wd(t),i=e/Math.max(s.height,s.width),u=i*s.width,c=i*s.height,l=xd({width:e,height:e}),h=t instanceof a?t:kd(t),p=Math.abs(u-c)/2,d=n&&u<c?p:0,f=n&&c<u?p:0;return pd(l).drawImage(h,d,f,u,c),l}var Dd=function(){function t(t,e){var n=this;if(void 0===e&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach((function(t,e){if(kp(t))return n._imageTensors[e]=t,void(n._inputDimensions[e]=t.shape);if(_p(t)){var r=t.shape[0];if(1!==r)throw new Error("NetInput - tf.Tensor4D with batchSize "+r+" passed, but not supported in input array");return n._imageTensors[e]=t,void(n._inputDimensions[e]=t.shape.slice(1))}var o=t instanceof ld.getEnv().Canvas?t:kd(t);n._canvases[e]=o,n._inputDimensions[e]=[o.height,o.width,3]}))}return Object.defineProperty(t.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"canvases",{get:function(){return this._canvases},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"reshapedInputDimensions",{get:function(){var t=this;return Np(this.batchSize,0,1).map((function(e,n){return t.getReshapedInputDimensions(n)}))},enumerable:!1,configurable:!0}),t.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},t.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},t.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},t.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},t.prototype.getReshapedInputDimensions=function(t){if("number"!=typeof this.inputSize)throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");return Ip({width:this.getInputWidth(t),height:this.getInputHeight(t)},this.inputSize)},t.prototype.toBatchTensor=function(t,e){var n=this;return void 0===e&&(e=!0),this._inputSize=t,wa((function(){var r=Np(n.batchSize,0,1).map((function(r){var o=n.getInput(r);if(o instanceof Qn){var a=_p(o)?o:o.expandDims();return(a=jp(a,e)).shape[1]===t&&a.shape[2]===t||(a=Ll.resizeBilinear(a,[t,t])),a.as3D(t,t,3)}if(o instanceof ld.getEnv().Canvas)return jo(Sd(o,t,e));throw new Error("toBatchTensor - at batchIdx "+r+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+o)}));return ec(r.map((function(t){return t.toFloat()}))).as4D(n.batchSize,t,t,3)}))},t}();function Fd(t){return gp(this,void 0,void 0,(function(){var e,n,r;return vp(this,(function(o){switch(o.label){case 0:if(t instanceof Dd)return[2,t];if(!(e=Array.isArray(t)?t:[t]).length)throw new Error("toNetInput - empty array passed as input");return n=function(e){return Array.isArray(t)?" at input index "+e+":":""},(r=e.map(hd)).forEach((function(t,r){if(!Ed(t)&&!kp(t)&&!_p(t)){if("string"==typeof e[r])throw new Error("toNetInput -"+n(r)+" string passed, but could not resolve HTMLElement for element id "+e[r]);throw new Error("toNetInput -"+n(r)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id")}if(_p(t)){var o=t.shape[0];if(1!==o)throw new Error("toNetInput -"+n(r)+" tf.Tensor4D with batchSize "+o+" passed, but not supported in input array")}})),[4,Promise.all(r.map((function(t){return Ed(t)&&bd(t)})))];case 1:return o.sent(),[2,new Dd(r,Array.isArray(t))]}}))}))}function Id(t,e){return gp(this,void 0,void 0,(function(){var n,r,o,a,s,i;return vp(this,(function(u){switch(u.label){case 0:return n=ld.getEnv().Canvas,r=t,t instanceof n?[3,5]:[4,Fd(t)];case 1:if((o=u.sent()).batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return(a=o.getInput(0))instanceof n?(s=a,[3,4]):[3,2];case 2:return[4,_d(a)];case 3:s=u.sent(),u.label=4;case 4:r=s,u.label=5;case 5:return i=pd(r),[2,e.map((function(t){return t instanceof Lp?t.forSize(r.width,r.height).box.floor():t})).map((function(t){return t.clipAtImageBorders(r.width,r.height)})).map((function(t){var e=t.x,n=t.y,r=t.width,o=t.height,a=xd({width:r,height:o});return pd(a).putImageData(i.getImageData(e,n,r,o),0,0),a}))]}}))}))}function Md(t,e){return gp(this,void 0,void 0,(function(){return vp(this,(function(n){if(!kp(t)&&!_p(t))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(_p(t)&&t.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,wa((function(){var n=t.shape.slice(_p(t)?1:0),r=n[0],o=n[1],a=n[2];return e.map((function(t){return t instanceof Lp?t.forSize(o,r).box:t})).map((function(t){return t.clipAtImageBorders(o,r)})).map((function(e){var n=e.x,s=e.y,i=e.width,u=e.height;return ju(t.as3D(r,o,a),[s,n,0],[u,i,a])}))}))]}))}))}function Nd(t,e){return gp(this,void 0,void 0,(function(){var n;return vp(this,(function(r){switch(r.label){case 0:return[4,(0,ld.getEnv().fetch)(t,e)];case 1:if(!((n=r.sent()).status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}}))}))}function Td(t){return gp(this,void 0,void 0,(function(){return vp(this,(function(e){switch(e.label){case 0:return[4,Nd(t)];case 1:return[2,e.sent().json()]}}))}))}function Ad(t,e){var n=e+"-weights_manifest.json";if(!t)return{modelBaseUri:"",manifestUri:n};if("/"===t)return{modelBaseUri:"/",manifestUri:"/"+n};var r=t.startsWith("http://")?"http://":t.startsWith("https://")?"https://":"",o=(t=t.replace(r,"")).split("/").filter((function(t){return t})),a=t.endsWith(".json")?o[o.length-1]:n,s=r+(t.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return{modelBaseUri:s=t.startsWith("/")?"/"+s:s,manifestUri:"/"===s?"/"+a:s+"/"+a}}function Pd(t,e){return gp(this,void 0,void 0,(function(){var n,r,o;return vp(this,(function(a){switch(a.label){case 0:return n=Ad(t,e),r=n.manifestUri,o=n.modelBaseUri,[4,Td(r)];case 1:return[2,So(a.sent(),o)]}}))}))}var $d=function(){function t(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(t.prototype,"params",{get:function(){return this._params},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!1,configurable:!0}),t.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t);return e.obj[e.objProp]},t.prototype.reassignParamFromPath=function(t,e){var n=this.traversePropertyPath(t),r=n.obj,o=n.objProp;r[o].dispose(),r[o]=e},t.prototype.getParamList=function(){var t=this;return this._paramMappings.map((function(e){var n=e.paramPath;return{path:n,tensor:t.getParamFromPath(n)}}))},t.prototype.getTrainableParams=function(){return this.getParamList().filter((function(t){return t.tensor instanceof tr}))},t.prototype.getFrozenParams=function(){return this.getParamList().filter((function(t){return!(t.tensor instanceof tr)}))},t.prototype.variable=function(){var t=this;this.getFrozenParams().forEach((function(e){var n=e.path,r=e.tensor;t.reassignParamFromPath(n,r.variable())}))},t.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach((function(e){var n=e.path,r=e.tensor,o=Nr(r.dataSync());r.dispose(),t.reassignParamFromPath(n,o)}))},t.prototype.dispose=function(t){void 0===t&&(t=!0),this.getParamList().forEach((function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()})),this._params=void 0},t.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map((function(t){var e=t.tensor;return Array.from(e.dataSync())})).reduce((function(t,e){return t.concat(e)})))},t.prototype.load=function(t){return gp(this,void 0,void 0,(function(){return vp(this,(function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}}))}))},t.prototype.loadFromUri=function(t){return gp(this,void 0,void 0,(function(){var e;return vp(this,(function(n){switch(n.label){case 0:if(t&&"string"!=typeof t)throw new Error(this._name+".loadFromUri - expected model uri");return[4,Pd(t,this.getDefaultModelName())];case 1:return e=n.sent(),this.loadFromWeightMap(e),[2]}}))}))},t.prototype.loadFromDisk=function(t){return gp(this,void 0,void 0,(function(){var e,n,r,o,a,s,i,u,c;return vp(this,(function(l){switch(l.label){case 0:if(t&&"string"!=typeof t)throw new Error(this._name+".loadFromDisk - expected model file path");return e=ld.getEnv().readFile,n=Ad(t,this.getDefaultModelName()),r=n.manifestUri,o=n.modelBaseUri,a=Do((function(t){return Promise.all(t.map((function(t){return e(t).then((function(t){return t.buffer}))})))})),u=(i=JSON).parse,[4,e(r)];case 1:return s=u.apply(i,[l.sent().toString()]),[4,a(s,o)];case 2:return c=l.sent(),this.loadFromWeightMap(c),[2]}}))}))},t.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),n=e.paramMappings,r=e.params;this._paramMappings=n,this._params=r},t.prototype.extractWeights=function(t){var e=this.extractParams(t),n=e.paramMappings,r=e.params;this._paramMappings=n,this._params=r},t.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce((function(e,n){if(!e.nextObj.hasOwnProperty(n))throw new Error("traversePropertyPath - object does not have property "+n+", for path "+t);return{obj:e.nextObj,objProp:n,nextObj:e.nextObj[n]}}),{nextObj:this.params}),n=e.obj,r=e.objProp;if(!(n&&r&&n[r]instanceof Qn))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:n,objProp:r}},t}();function Cd(t,e,n){return wa((function(){var r=Bu(t,e.depthwise_filter,e.pointwise_filter,n,"same");return r=_a(r,e.bias)}))}function Bd(t,e,n){return void 0===n&&(n=!1),wa((function(){var r=Du(n?_a(Fs(t,e.conv0.filters,[2,2],"same"),e.conv0.bias):Cd(t,e.conv0,[2,2])),o=Cd(r,e.conv1,[1,1]),a=Cd(Du(_a(r,o)),e.conv2,[1,1]);return Du(_a(r,_a(o,a)))}))}function Rd(t,e,n,r){return void 0===n&&(n=!1),void 0===r&&(r=!0),wa((function(){var o=Du(n?_a(Fs(t,e.conv0.filters,r?[2,2]:[1,1],"same"),e.conv0.bias):Cd(t,e.conv0,r?[2,2]:[1,1])),a=Cd(o,e.conv1,[1,1]),s=Cd(Du(_a(o,a)),e.conv2,[1,1]),i=Cd(Du(_a(o,_a(a,s))),e.conv3,[1,1]);return Du(_a(o,_a(a,_a(s,i))))}))}function Ld(t,e,n,r){return void 0===n&&(n="same"),void 0===r&&(r=!1),wa((function(){var o=_a(Fs(t,e.filters,[1,1],n),e.bias);return r?Du(o):o}))}function Od(t,e){Object.keys(t).forEach((function(n){e.some((function(t){return t.originalPath===n}))||t[n].dispose()}))}function zd(t,e){return function(n,r,o,a){var s=sc(t(n*r*o*o),[o,o,n,r]),i=_u(t(r));return e.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:s,bias:i}}}function Wd(t,e){return function(n,r,o){var a=ac(t(n*r),[n,r]),s=_u(t(r));return e.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:s}}}var qd=function(t,e,n){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=n};function jd(t,e){return function(n,r,o){var a=sc(t(9*n),[3,3,n,1]),s=sc(t(n*r),[1,1,n,r]),i=_u(t(r));return e.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new qd(a,s,i)}}function Gd(t){return function(e){var n=t(e+"/depthwise_filter",4),r=t(e+"/pointwise_filter",4),o=t(e+"/bias",1);return new qd(n,r,o)}}function Kd(t,e){return function(n,r,o){var a=t[n];if(!wp(a,r))throw new Error("expected weightMap["+n+"] to be a Tensor"+r+"D, instead have "+a);return e.push({originalPath:n,paramPath:o||n}),a}}function Hd(t){var e=t;return{extractWeights:function(t){var n=e.slice(0,t);return e=e.slice(t),n},getRemainingWeights:function(){return e}}}function Ud(t,e){var n=zd(t,e),r=jd(t,e);function o(t,e,o,a){return void 0===a&&(a=!1),{conv0:a?n(t,e,3,o+"/conv0"):r(t,e,o+"/conv0"),conv1:r(e,e,o+"/conv1"),conv2:r(e,e,o+"/conv2")}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:function(t,e,n,a){void 0===a&&(a=!1);var s=o(t,e,n,a);return{conv0:s.conv0,conv1:s.conv1,conv2:s.conv2,conv3:r(e,e,n+"/conv3")}}}}function Vd(t){return function(e){return{filters:t(e+"/filters",4),bias:t(e+"/bias",1)}}}function Jd(t,e){var n=Kd(t,e),r=Vd(n),o=Gd(n);return{extractDenseBlock3Params:function(t,e){return void 0===e&&(e=!1),{conv0:e?r(t+"/conv0"):o(t+"/conv0"),conv1:o(t+"/conv1"),conv2:o(t+"/conv2")}},extractDenseBlock4Params:function(t,e){return void 0===e&&(e=!1),{conv0:e?r(t+"/conv0"):o(t+"/conv0"),conv1:o(t+"/conv1"),conv2:o(t+"/conv2"),conv3:o(t+"/conv3")}}}}var Yd=function(t){function e(){return t.call(this,"FaceFeatureExtractor")||this}return fp(e,t),e.prototype.forwardInput=function(t){var e=this.params;if(!e)throw new Error("FaceFeatureExtractor - load model before inference");return wa((function(){var n=Rd(qp(t.toBatchTensor(112,!0),[122.782,117.001,104.298]).div(di(255)),e.dense0,!0);return n=Rd(n,e.dense1),n=Rd(n,e.dense2),n=Rd(n,e.dense3),n=as(n,[7,7],[2,2],"valid")}))},e.prototype.forward=function(t){return gp(this,void 0,void 0,(function(){var e;return vp(this,(function(n){switch(n.label){case 0:return e=this.forwardInput,[4,Fd(t)];case 1:return[2,e.apply(this,[n.sent()])]}}))}))},e.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},e.prototype.extractParamsFromWeigthMap=function(t){return function(t){var e=[],n=Jd(t,e).extractDenseBlock4Params,r={dense0:n("dense0",!0),dense1:n("dense1"),dense2:n("dense2"),dense3:n("dense3")};return Od(t,e),{params:r,paramMappings:e}}(t)},e.prototype.extractParams=function(t){return function(t){var e=[],n=Hd(t),r=n.extractWeights,o=n.getRemainingWeights,a=Ud(r,e).extractDenseBlock4Params,s=a(3,32,"dense0",!0),i=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(0!==o().length)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:e,params:{dense0:s,dense1:i,dense2:u,dense3:c}}}(t)},e}($d);function Xd(t,e){return wa((function(){return _a(Co(t,e.weights),e.bias)}))}function Zd(t){var e={},n={};return Object.keys(t).forEach((function(r){(r.startsWith("fc")?n:e)[r]=t[r]})),{featureExtractorMap:e,classifierMap:n}}var Qd=function(t){function e(e,n){var r=t.call(this,e)||this;return r._faceFeatureExtractor=n,r}return fp(e,t),Object.defineProperty(e.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!1,configurable:!0}),e.prototype.runNet=function(t){var e=this,n=this.params;if(!n)throw new Error(this._name+" - load model before inference");return wa((function(){var r=t instanceof Dd?e.faceFeatureExtractor.forwardInput(t):t;return Xd(r.as2D(r.shape[0],-1),n.fc)}))},e.prototype.dispose=function(e){void 0===e&&(e=!0),this.faceFeatureExtractor.dispose(e),t.prototype.dispose.call(this,e)},e.prototype.loadClassifierParams=function(t){var e=this.extractClassifierParams(t),n=e.params,r=e.paramMappings;this._params=n,this._paramMappings=r},e.prototype.extractClassifierParams=function(t){return function(t,e,n){var r=[],o=Hd(t),a=o.extractWeights,s=o.getRemainingWeights,i=Wd(a,r)(e,n,"fc");if(0!==s().length)throw new Error("weights remaing after extract: "+s().length);return{paramMappings:r,params:{fc:i}}}(t,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},e.prototype.extractParamsFromWeigthMap=function(t){var e=Zd(t),n=e.featureExtractorMap,r=e.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(n),function(t){var e,n=[],r=Kd(t,n),o={fc:(e="fc",{weights:r(e+"/weights",2),bias:r(e+"/bias",1)})};return Od(t,n),{params:o,paramMappings:n}}(r)},e.prototype.extractParams=function(t){var e=this.getClassifierChannelsIn(),n=this.getClassifierChannelsOut(),r=n*e+n,o=t.slice(0,t.length-r),a=t.slice(t.length-r);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},e}($d),tf=["neutral","happy","sad","angry","fearful","disgusted","surprised"],ef=function(){function t(t){var e=this;if(7!==t.length)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);tf.forEach((function(n,r){e[n]=t[r]}))}return t.prototype.asSortedArray=function(){var t=this;return tf.map((function(e){return{expression:e,probability:t[e]}})).sort((function(t,e){return e.probability-t.probability}))},t}(),nf=function(t){function e(e){return void 0===e&&(e=new Yd),t.call(this,"FaceExpressionNet",e)||this}return fp(e,t),e.prototype.forwardInput=function(t){var e=this;return wa((function(){return Ku(e.runNet(t))}))},e.prototype.forward=function(t){return gp(this,void 0,void 0,(function(){var e;return vp(this,(function(n){switch(n.label){case 0:return e=this.forwardInput,[4,Fd(t)];case 1:return[2,e.apply(this,[n.sent()])]}}))}))},e.prototype.predictExpressions=function(t){return gp(this,void 0,void 0,(function(){var e,n,r,o,a=this;return vp(this,(function(s){switch(s.label){case 0:return[4,Fd(t)];case 1:return e=s.sent(),[4,this.forwardInput(e)];case 2:return n=s.sent(),[4,Promise.all(hc(n).map((function(t){return gp(a,void 0,void 0,(function(){var e;return vp(this,(function(n){switch(n.label){case 0:return[4,t.data()];case 1:return e=n.sent(),t.dispose(),[2,e]}}))}))})))];case 3:return r=s.sent(),n.dispose(),o=r.map((function(t){return new ef(t)})),[2,e.isBatchInput?o:o[0]]}}))}))},e.prototype.getDefaultModelName=function(){return"face_expression_model"},e.prototype.getClassifierChannelsIn=function(){return 256},e.prototype.getClassifierChannelsOut=function(){return 7},e}(Qd);function rf(t){return t.expressions instanceof ef}function of(t,e){var n={expressions:e};return Object.assign({},t,n)}function af(t){return td(t)&&t.landmarks instanceof Up&&t.unshiftedLandmarks instanceof Up&&t.alignedRect instanceof Lp}function sf(t,e){var n=t.detection.box,r=e.shiftBy(n.x,n.y),o=r.align(),a=t.detection.imageDims,s={landmarks:r,unshiftedLandmarks:e,alignedRect:new Lp(t.detection.score,o.rescale(a.reverse()),a)};return Object.assign({},t,s)}var uf=function(t){void 0===t&&(t={});var e=t.drawLines,n=void 0===e||e,r=t.drawPoints,o=void 0===r||r,a=t.lineWidth,s=t.lineColor,i=t.pointSize,u=t.pointColor;this.drawLines=n,this.drawPoints=o,this.lineWidth=a||1,this.pointSize=i||2,this.lineColor=s||"rgba(0, 255, 255, 1)",this.pointColor=u||"rgba(255, 0, 255, 1)"},cf=function(){function t(t,e){void 0===e&&(e={}),this.faceLandmarks=t,this.options=new uf(e)}return t.prototype.draw=function(t){var e=pd(t),n=this.options,r=n.drawLines,o=n.drawPoints,a=n.lineWidth,s=n.lineColor,i=n.pointSize,u=n.pointColor;if(r&&this.faceLandmarks instanceof Jp&&(e.strokeStyle=s,e.lineWidth=a,pp(e,this.faceLandmarks.getJawOutline()),pp(e,this.faceLandmarks.getLeftEyeBrow()),pp(e,this.faceLandmarks.getRightEyeBrow()),pp(e,this.faceLandmarks.getNose()),pp(e,this.faceLandmarks.getLeftEye(),!0),pp(e,this.faceLandmarks.getRightEye(),!0),pp(e,this.faceLandmarks.getMouth(),!0)),o){e.strokeStyle=u,e.fillStyle=u;this.faceLandmarks.positions.forEach((function(t){e.beginPath(),e.arc(t.x,t.y,i,0,2*Math.PI),e.fill()}))}},t}();var lf=Object.freeze({__proto__:null,drawContour:pp,drawDetections:function(t,e){(Array.isArray(e)?e:[e]).forEach((function(e){var n=e instanceof Lp?e.score:td(e)?e.detection.score:void 0,r=e instanceof Lp?e.box:td(e)?e.detection.box:new Cp(e),o=n?""+Dp(n):void 0;new gd(r,{label:o}).draw(t)}))},drawFaceExpressions:function(t,e,n,r){void 0===n&&(n=.1),(Array.isArray(e)?e:[e]).forEach((function(e){var o=e instanceof ef?e:rf(e)?e.expressions:void 0;if(!o)throw new Error("drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof");var a=o.asSortedArray().filter((function(t){return t.probability>n})),s=td(e)?e.detection.box.bottomLeft:r||new $p(0,0);new fd(a.map((function(t){return t.expression+" ("+Dp(t.probability)+")"})),s).draw(t)}))},DrawBoxOptions:md,DrawBox:gd,DrawFaceLandmarksOptions:uf,DrawFaceLandmarks:cf,drawFaceLandmarks:function(t,e){(Array.isArray(e)?e:[e]).forEach((function(e){var n=e instanceof Up?e:af(e)?e.landmarks:void 0;if(!n)throw new Error("drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof");new cf(n).draw(t)}))},get AnchorPosition(){return cd},DrawTextFieldOptions:dd,DrawTextField:fd});function hf(t,e){var n=[],r=Hd(t),o=r.extractWeights,a=r.getRemainingWeights,s=function(t,e){var n=zd(t,e),r=jd(t,e);return{extractConvParams:n,extractSeparableConvParams:r,extractReductionBlockParams:function(t,e,o){return{separable_conv0:r(t,e,o+"/separable_conv0"),separable_conv1:r(e,e,o+"/separable_conv1"),expansion_conv:n(t,e,1,o+"/expansion_conv")}},extractMainBlockParams:function(t,e){return{separable_conv0:r(t,t,e+"/separable_conv0"),separable_conv1:r(t,t,e+"/separable_conv1"),separable_conv2:r(t,t,e+"/separable_conv2")}}}}(o,n),i=s.extractConvParams,u=s.extractSeparableConvParams,c=s.extractReductionBlockParams,l=s.extractMainBlockParams,h={conv_in:i(3,32,3,"entry_flow/conv_in"),reduction_block_0:c(32,64,"entry_flow/reduction_block_0"),reduction_block_1:c(64,128,"entry_flow/reduction_block_1")},p={};Np(e,0,1).forEach((function(t){p["main_block_"+t]=l(128,"middle_flow/main_block_"+t)}));var d={reduction_block:c(128,256,"exit_flow/reduction_block"),separable_conv:u(256,512,"exit_flow/separable_conv")};if(0!==a().length)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:n,params:{entry_flow:h,middle_flow:p,exit_flow:d}}}function pf(t,e){var n=[],r=function(t,e){var n=Kd(t,e),r=Vd(n),o=Gd(n);return{extractConvParams:r,extractSeparableConvParams:o,extractReductionBlockParams:function(t){return{separable_conv0:o(t+"/separable_conv0"),separable_conv1:o(t+"/separable_conv1"),expansion_conv:r(t+"/expansion_conv")}},extractMainBlockParams:function(t){return{separable_conv0:o(t+"/separable_conv0"),separable_conv1:o(t+"/separable_conv1"),separable_conv2:o(t+"/separable_conv2")}}}}(t,n),o=r.extractConvParams,a=r.extractSeparableConvParams,s=r.extractReductionBlockParams,i=r.extractMainBlockParams,u={conv_in:o("entry_flow/conv_in"),reduction_block_0:s("entry_flow/reduction_block_0"),reduction_block_1:s("entry_flow/reduction_block_1")},c={};Np(e,0,1).forEach((function(t){c["main_block_"+t]=i("middle_flow/main_block_"+t)}));var l={reduction_block:s("exit_flow/reduction_block"),separable_conv:a("exit_flow/separable_conv")};return Od(t,n),{params:{entry_flow:u,middle_flow:c,exit_flow:l},paramMappings:n}}function df(t,e,n){return _a(Fs(t,e.filters,n,"same"),e.bias)}function ff(t,e,n){void 0===n&&(n=!0);var r=n?Du(t):t;return r=Cd(r,e.separable_conv0,[1,1]),r=Cd(Du(r),e.separable_conv1,[1,1]),r=Ci(r,[3,3],[2,2],"same"),r=_a(r,df(t,e.expansion_conv,[2,2]))}var mf,gf=function(t){function e(e){var n=t.call(this,"TinyXception")||this;return n._numMainBlocks=e,n}return fp(e,t),e.prototype.forwardInput=function(t){var e=this,n=this.params;if(!n)throw new Error("TinyXception - load model before inference");return wa((function(){var r=qp(t.toBatchTensor(112,!0),[122.782,117.001,104.298]).div(di(256)),o=Du(df(r,n.entry_flow.conv_in,[2,2]));return o=ff(o,n.entry_flow.reduction_block_0,!1),o=ff(o,n.entry_flow.reduction_block_1),Np(e._numMainBlocks,0,1).forEach((function(t){o=function(t,e){var n=Cd(Du(t),e.separable_conv0,[1,1]);return n=Cd(Du(n),e.separable_conv1,[1,1]),n=Cd(Du(n),e.separable_conv2,[1,1]),_a(n,t)}(o,n.middle_flow["main_block_"+t])})),o=ff(o,n.exit_flow.reduction_block),o=Du(Cd(o,n.exit_flow.separable_conv,[1,1]))}))},e.prototype.forward=function(t){return gp(this,void 0,void 0,(function(){var e;return vp(this,(function(n){switch(n.label){case 0:return e=this.forwardInput,[4,Fd(t)];case 1:return[2,e.apply(this,[n.sent()])]}}))}))},e.prototype.getDefaultModelName=function(){return"tiny_xception_model"},e.prototype.extractParamsFromWeigthMap=function(t){return pf(t,this._numMainBlocks)},e.prototype.extractParams=function(t){return hf(t,this._numMainBlocks)},e}($d);(mf=t.Gender||(t.Gender={})).FEMALE="female",mf.MALE="male";var vf=function(e){function n(t){void 0===t&&(t=new gf(2));var n=e.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=t,n}return fp(n,e),Object.defineProperty(n.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!1,configurable:!0}),n.prototype.runNet=function(t){var e=this,n=this.params;if(!n)throw new Error(this._name+" - load model before inference");return wa((function(){var r=t instanceof Dd?e.faceFeatureExtractor.forwardInput(t):t,o=as(r,[7,7],[2,2],"valid").as2D(r.shape[0],-1);return{age:Xd(o,n.fc.age).as1D(),gender:Xd(o,n.fc.gender)}}))},n.prototype.forwardInput=function(t){var e=this;return wa((function(){var n=e.runNet(t),r=n.age,o=n.gender;return{age:r,gender:Ku(o)}}))},n.prototype.forward=function(t){return gp(this,void 0,void 0,(function(){var e;return vp(this,(function(n){switch(n.label){case 0:return e=this.forwardInput,[4,Fd(t)];case 1:return[2,e.apply(this,[n.sent()])]}}))}))},n.prototype.predictAgeAndGender=function(e){return gp(this,void 0,void 0,(function(){var n,r,o,a,s,i,u=this;return vp(this,(function(c){switch(c.label){case 0:return[4,Fd(e)];case 1:return n=c.sent(),[4,this.forwardInput(n)];case 2:return r=c.sent(),o=hc(r.age),a=hc(r.gender),s=o.map((function(t,e){return{ageTensor:t,genderTensor:a[e]}})),[4,Promise.all(s.map((function(e){var n=e.ageTensor,r=e.genderTensor;return gp(u,void 0,void 0,(function(){var e,o,a,s,i;return vp(this,(function(u){switch(u.label){case 0:return[4,n.data()];case 1:return e=u.sent()[0],[4,r.data()];case 2:return o=u.sent()[0],s=(a=o>.5)?t.Gender.MALE:t.Gender.FEMALE,i=a?o:1-o,n.dispose(),r.dispose(),[2,{age:e,gender:s,genderProbability:i}]}}))}))})))];case 3:return i=c.sent(),r.age.dispose(),r.gender.dispose(),[2,n.isBatchInput?i:i[0]]}}))}))},n.prototype.getDefaultModelName=function(){return"age_gender_model"},n.prototype.dispose=function(t){void 0===t&&(t=!0),this.faceFeatureExtractor.dispose(t),e.prototype.dispose.call(this,t)},n.prototype.loadClassifierParams=function(t){var e=this.extractClassifierParams(t),n=e.params,r=e.paramMappings;this._params=n,this._paramMappings=r},n.prototype.extractClassifierParams=function(t){return function(t){var e=[],n=Hd(t),r=n.extractWeights,o=n.getRemainingWeights,a=Wd(r,e),s=a(512,1,"fc/age"),i=a(512,2,"fc/gender");if(0!==o().length)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:e,params:{fc:{age:s,gender:i}}}}(t)},n.prototype.extractParamsFromWeigthMap=function(t){var e=Zd(t),n=e.featureExtractorMap,r=e.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(n),function(t){var e=[],n=Kd(t,e);function r(t){return{weights:n(t+"/weights",2),bias:n(t+"/bias",1)}}var o={fc:{age:r("fc/age"),gender:r("fc/gender")}};return Od(t,e),{params:o,paramMappings:e}}(r)},n.prototype.extractParams=function(t){var e=t.slice(0,t.length-1539),n=t.slice(t.length-1539);return this.faceFeatureExtractor.extractWeights(e),this.extractClassifierParams(n)},n}($d),bf=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.postProcess=function(t,e,n){var r=n.map((function(t){var n=t.width,r=t.height,o=e/Math.max(r,n);return{width:n*o,height:r*o}})),o=r.length;return wa((function(){var n=function(t,e){return ec([ei([68],t),ei([68],e)],1).as2D(1,136).as1D()},a=function(t,e){var n=r[t],o=n.width,a=n.height;return e(o,a)?Math.abs(o-a)/2:0};return t.mul(ei([o,136],e)).sub(ec(Array.from(Array(o),(function(t,e){return n(function(t){return a(t,(function(t,e){return t<e}))}(e),function(t){return a(t,(function(t,e){return e<t}))}(e))})))).div(ec(Array.from(Array(o),(function(t,e){return n(r[e].width,r[e].height)}))))}))},e.prototype.forwardInput=function(t){var e=this;return wa((function(){var n=e.runNet(t);return e.postProcess(n,t.inputSize,t.inputDimensions.map((function(t){return{height:t[0],width:t[1]}})))}))},e.prototype.forward=function(t){return gp(this,void 0,void 0,(function(){var e;return vp(this,(function(n){switch(n.label){case 0:return e=this.forwardInput,[4,Fd(t)];case 1:return[2,e.apply(this,[n.sent()])]}}))}))},e.prototype.detectLandmarks=function(t){return gp(this,void 0,void 0,(function(){var e,n,r,o=this;return vp(this,(function(a){switch(a.label){case 0:return[4,Fd(t)];case 1:return e=a.sent(),n=wa((function(){return hc(o.forwardInput(e))})),[4,Promise.all(n.map((function(t,n){return gp(o,void 0,void 0,(function(){var r,o,a,s,i;return vp(this,(function(u){switch(u.label){case 0:return a=(o=Array).from,[4,t.data()];case 1:return r=a.apply(o,[u.sent()]),s=r.filter((function(t,e){return Sp(e)})),i=r.filter((function(t,e){return!Sp(e)})),[2,new Jp(Array(68).fill(0).map((function(t,e){return new $p(s[e],i[e])})),{height:e.getInputHeight(n),width:e.getInputWidth(n)})]}}))}))})))];case 2:return r=a.sent(),n.forEach((function(t){return t.dispose()})),[2,e.isBatchInput?r:r[0]]}}))}))},e.prototype.getClassifierChannelsOut=function(){return 136},e}(Qd),yf=function(t){function e(e){return void 0===e&&(e=new Yd),t.call(this,"FaceLandmark68Net",e)||this}return fp(e,t),e.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},e.prototype.getClassifierChannelsIn=function(){return 256},e}(bf);var wf=function(t){function e(){return t.call(this,"TinyFaceFeatureExtractor")||this}return fp(e,t),e.prototype.forwardInput=function(t){var e=this.params;if(!e)throw new Error("TinyFaceFeatureExtractor - load model before inference");return wa((function(){var n=Bd(qp(t.toBatchTensor(112,!0),[122.782,117.001,104.298]).div(di(255)),e.dense0,!0);return n=Bd(n,e.dense1),n=Bd(n,e.dense2),n=as(n,[14,14],[2,2],"valid")}))},e.prototype.forward=function(t){return gp(this,void 0,void 0,(function(){var e;return vp(this,(function(n){switch(n.label){case 0:return e=this.forwardInput,[4,Fd(t)];case 1:return[2,e.apply(this,[n.sent()])]}}))}))},e.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},e.prototype.extractParamsFromWeigthMap=function(t){return function(t){var e=[],n=Jd(t,e).extractDenseBlock3Params,r={dense0:n("dense0",!0),dense1:n("dense1"),dense2:n("dense2")};return Od(t,e),{params:r,paramMappings:e}}(t)},e.prototype.extractParams=function(t){return function(t){var e=[],n=Hd(t),r=n.extractWeights,o=n.getRemainingWeights,a=Ud(r,e).extractDenseBlock3Params,s=a(3,32,"dense0",!0),i=a(32,64,"dense1"),u=a(64,128,"dense2");if(0!==o().length)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:e,params:{dense0:s,dense1:i,dense2:u}}}(t)},e}($d),xf=function(t){function e(e){return void 0===e&&(e=new wf),t.call(this,"FaceLandmark68TinyNet",e)||this}return fp(e,t),e.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},e.prototype.getClassifierChannelsIn=function(){return 128},e}(bf),kf=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e}(yf);function _f(t,e,n,r,o){void 0===o&&(o="same");var a=e.conv,s=a.filters,i=a.bias,u=Fs(t,s,n,o);return u=function(t,e){return _a(Da(t,e.weights),e.biases)}(u=_a(u,i),e.scale),r?Du(u):u}function Ef(t,e){return _f(t,e,[1,1],!1)}function Sf(t,e){return _f(t,e,[2,2],!0,"valid")}function Df(t,e){function n(n,r,o,a){var s=function(e,n,r){var o=t(e),a=o.length/(n*r*r);if(Ep(a))throw new Error("depth has to be an integer: "+a+", weights.length: "+o.length+", numFilters: "+n+", filterSize: "+r);return wa((function(){return Ro(sc(o,[n,a,r,r]),[2,3,1,0])}))}(n,r,o),i=_u(t(r));return e.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:s,bias:i}}function r(r,o,a,s){return{conv:n(r,o,a,s+"/conv"),scale:function(n,r){var o=_u(t(n)),a=_u(t(n));return e.push({paramPath:r+"/weights"},{paramPath:r+"/biases"}),{weights:o,biases:a}}(o,s+"/scale")}}return{extractConvLayerParams:r,extractResidualLayerParams:function(t,e,n,o,a){return void 0===a&&(a=!1),{conv1:r((a?.5:1)*t,e,n,o+"/conv1"),conv2:r(t,e,n,o+"/conv2")}}}}function Ff(t,e){var n=Kd(t,e);function r(t){return{conv:{filters:n(t+"/conv/filters",4),bias:n(t+"/conv/bias",1)},scale:function(t){return{weights:n(t+"/scale/weights",1),biases:n(t+"/scale/biases",1)}}(t)}}return{extractConvLayerParams:r,extractResidualLayerParams:function(t){return{conv1:r(t+"/conv1"),conv2:r(t+"/conv2")}}}}function If(t,e){var n=function(t,e){return _f(t,e,[1,1],!0)}(t,e.conv1);return n=Ef(n,e.conv2),n=_a(n,t),n=Du(n)}function Mf(t,e){var n=Sf(t,e.conv1);n=Ef(n,e.conv2);var r=as(t,2,2,"valid"),o=Li(r.shape),a=r.shape[3]!==n.shape[3];if(r.shape[1]!==n.shape[1]||r.shape[2]!==n.shape[2]){var s=bp(n.shape);s[1]=1;var i=Li(s),u=bp((n=cs([n,i],1)).shape);u[2]=1;var c=Li(u);n=cs([n,c],2)}return r=a?cs([r,o],3):r,n=_a(r,n),n=Du(n)}var Nf=function(t){function e(){return t.call(this,"FaceRecognitionNet")||this}return fp(e,t),e.prototype.forwardInput=function(t){var e=this.params;if(!e)throw new Error("FaceRecognitionNet - load model before inference");return wa((function(){var n=Sf(qp(t.toBatchTensor(150,!0).toFloat(),[122.782,117.001,104.298]).div(di(256)),e.conv32_down);n=If(n=Ci(n,3,2,"valid"),e.conv32_1),n=If(n,e.conv32_2),n=If(n,e.conv32_3),n=If(n=Mf(n,e.conv64_down),e.conv64_1),n=If(n,e.conv64_2),n=If(n,e.conv64_3),n=If(n=Mf(n,e.conv128_down),e.conv128_1),n=If(n,e.conv128_2),n=If(n=Mf(n,e.conv256_down),e.conv256_1);var r=(n=Mf(n=If(n,e.conv256_2),e.conv256_down_out)).mean([1,2]);return Co(r,e.fc)}))},e.prototype.forward=function(t){return gp(this,void 0,void 0,(function(){var e;return vp(this,(function(n){switch(n.label){case 0:return e=this.forwardInput,[4,Fd(t)];case 1:return[2,e.apply(this,[n.sent()])]}}))}))},e.prototype.computeFaceDescriptor=function(t){return gp(this,void 0,void 0,(function(){var e,n,r,o=this;return vp(this,(function(a){switch(a.label){case 0:return[4,Fd(t)];case 1:return e=a.sent(),n=wa((function(){return hc(o.forwardInput(e))})),[4,Promise.all(n.map((function(t){return t.data()})))];case 2:return r=a.sent(),n.forEach((function(t){return t.dispose()})),[2,e.isBatchInput?r:r[0]]}}))}))},e.prototype.getDefaultModelName=function(){return"face_recognition_model"},e.prototype.extractParamsFromWeigthMap=function(t){return function(t){var e=[],n=Ff(t,e),r=n.extractConvLayerParams,o=n.extractResidualLayerParams,a=r("conv32_down"),s=o("conv32_1"),i=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),h=o("conv64_2"),p=o("conv64_3"),d=o("conv128_down"),f=o("conv128_1"),m=o("conv128_2"),g=o("conv256_down"),v=o("conv256_1"),b=o("conv256_2"),y=o("conv256_down_out"),w=t.fc;if(e.push({originalPath:"fc",paramPath:"fc"}),!xp(w))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+w);var x={conv32_down:a,conv32_1:s,conv32_2:i,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:h,conv64_3:p,conv128_down:d,conv128_1:f,conv128_2:m,conv256_down:g,conv256_1:v,conv256_2:b,conv256_down_out:y,fc:w};return Od(t,e),{params:x,paramMappings:e}}(t)},e.prototype.extractParams=function(t){return function(t){var e=Hd(t),n=e.extractWeights,r=e.getRemainingWeights,o=[],a=Df(n,o),s=a.extractConvLayerParams,i=a.extractResidualLayerParams,u=s(4704,32,7,"conv32_down"),c=i(9216,32,3,"conv32_1"),l=i(9216,32,3,"conv32_2"),h=i(9216,32,3,"conv32_3"),p=i(36864,64,3,"conv64_down",!0),d=i(36864,64,3,"conv64_1"),f=i(36864,64,3,"conv64_2"),m=i(36864,64,3,"conv64_3"),g=i(147456,128,3,"conv128_down",!0),v=i(147456,128,3,"conv128_1"),b=i(147456,128,3,"conv128_2"),y=i(589824,256,3,"conv256_down",!0),w=i(589824,256,3,"conv256_1"),x=i(589824,256,3,"conv256_2"),k=i(589824,256,3,"conv256_down_out"),_=wa((function(){return Ro(ac(n(32768),[128,256]),[1,0])}));if(o.push({paramPath:"fc"}),0!==r().length)throw new Error("weights remaing after extract: "+r().length);return{params:{conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:h,conv64_down:p,conv64_1:d,conv64_2:f,conv64_3:m,conv128_down:g,conv128_1:v,conv128_2:b,conv256_down:y,conv256_1:w,conv256_2:x,conv256_down_out:k,fc:_},paramMappings:o}}(t)},e}($d);function Tf(t,e){var n={descriptor:e};return Object.assign({},t,n)}function Af(t,e){var n={age:e};return Object.assign({},t,n)}function Pf(t,e,n){var r={gender:e,genderProbability:n};return Object.assign({},t,r)}var $f=function(){function t(t){var e=void 0===t?{}:t,n=e.minFaceSize,r=e.scaleFactor,o=e.maxNumScales,a=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=r||.709,this._maxNumScales=o||10,this._scoreThresholds=a||[.6,.7,.7],this._scaleSteps=s,"number"!=typeof this._minFaceSize||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if("number"!=typeof this._scaleFactor||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if("number"!=typeof this._maxNumScales||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||3!==this._scoreThresholds.length||this._scoreThresholds.some((function(t){return"number"!=typeof t})))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some((function(t){return"number"!=typeof t}))))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(t.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!1,configurable:!0}),t}();function Cf(t,e){function n(n,r,o,a,s){var i=sc(t(n*r*o*o),[o,o,n,r]),u=_u(t(r));return e.push({paramPath:a+"/filters"},{paramPath:a+"/"+(s?"batch_norm_offset":"bias")}),{filters:i,bias:u}}function r(t,e,r,o){var a=n(t,e,r,o,!0);return{filters:a.filters,batch_norm_offset:a.bias}}function o(n,o,a){return{depthwise_conv:function(n,r){var o=sc(t(9*n),[3,3,n,1]),a=_u(t(n)),s=_u(t(n)),i=_u(t(n)),u=_u(t(n));return e.push({paramPath:r+"/filters"},{paramPath:r+"/batch_norm_scale"},{paramPath:r+"/batch_norm_offset"},{paramPath:r+"/batch_norm_mean"},{paramPath:r+"/batch_norm_variance"}),{filters:o,batch_norm_scale:a,batch_norm_offset:s,batch_norm_mean:i,batch_norm_variance:u}}(n,a+"/depthwise_conv"),pointwise_conv:r(n,o,1,a+"/pointwise_conv")}}return{extractMobilenetV1Params:function(){return{conv_0:r(3,32,3,"mobilenetv1/conv_0"),conv_1:o(32,64,"mobilenetv1/conv_1"),conv_2:o(64,128,"mobilenetv1/conv_2"),conv_3:o(128,128,"mobilenetv1/conv_3"),conv_4:o(128,256,"mobilenetv1/conv_4"),conv_5:o(256,256,"mobilenetv1/conv_5"),conv_6:o(256,512,"mobilenetv1/conv_6"),conv_7:o(512,512,"mobilenetv1/conv_7"),conv_8:o(512,512,"mobilenetv1/conv_8"),conv_9:o(512,512,"mobilenetv1/conv_9"),conv_10:o(512,512,"mobilenetv1/conv_10"),conv_11:o(512,512,"mobilenetv1/conv_11"),conv_12:o(512,1024,"mobilenetv1/conv_12"),conv_13:o(1024,1024,"mobilenetv1/conv_13")}},extractPredictionLayerParams:function(){return{conv_0:r(1024,256,1,"prediction_layer/conv_0"),conv_1:r(256,512,3,"prediction_layer/conv_1"),conv_2:r(512,128,1,"prediction_layer/conv_2"),conv_3:r(128,256,3,"prediction_layer/conv_3"),conv_4:r(256,128,1,"prediction_layer/conv_4"),conv_5:r(128,256,3,"prediction_layer/conv_5"),conv_6:r(256,64,1,"prediction_layer/conv_6"),conv_7:r(64,128,3,"prediction_layer/conv_7"),box_predictor_0:{box_encoding_predictor:n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),class_predictor:n(512,9,1,"prediction_layer/box_predictor_0/class_predictor")},box_predictor_1:{box_encoding_predictor:n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),class_predictor:n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor")},box_predictor_2:{box_encoding_predictor:n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),class_predictor:n(512,18,1,"prediction_layer/box_predictor_2/class_predictor")},box_predictor_3:{box_encoding_predictor:n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),class_predictor:n(256,18,1,"prediction_layer/box_predictor_3/class_predictor")},box_predictor_4:{box_encoding_predictor:n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),class_predictor:n(256,18,1,"prediction_layer/box_predictor_4/class_predictor")},box_predictor_5:{box_encoding_predictor:n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),class_predictor:n(128,18,1,"prediction_layer/box_predictor_5/class_predictor")}}}}}function Bf(t){var e=[],n=function(t,e){var n=Kd(t,e);function r(t,e,r){return{filters:n(t+"/Conv2d_"+e+"_pointwise/weights",4,r+"/filters"),batch_norm_offset:n(t+"/Conv2d_"+e+"_pointwise/convolution_bn_offset",1,r+"/batch_norm_offset")}}function o(t){var e="mobilenetv1/conv_"+t,o="MobilenetV1/Conv2d_"+t+"_depthwise",a=e+"/depthwise_conv",s=e+"/pointwise_conv";return{depthwise_conv:{filters:n(o+"/depthwise_weights",4,a+"/filters"),batch_norm_scale:n(o+"/BatchNorm/gamma",1,a+"/batch_norm_scale"),batch_norm_offset:n(o+"/BatchNorm/beta",1,a+"/batch_norm_offset"),batch_norm_mean:n(o+"/BatchNorm/moving_mean",1,a+"/batch_norm_mean"),batch_norm_variance:n(o+"/BatchNorm/moving_variance",1,a+"/batch_norm_variance")},pointwise_conv:r("MobilenetV1",t,s)}}function a(t,e){return{filters:n(t+"/weights",4,e+"/filters"),bias:n(t+"/biases",1,e+"/bias")}}function s(t){return{box_encoding_predictor:a("Prediction/BoxPredictor_"+t+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+t+"/box_encoding_predictor"),class_predictor:a("Prediction/BoxPredictor_"+t+"/ClassPredictor","prediction_layer/box_predictor_"+t+"/class_predictor")}}return{extractMobilenetV1Params:function(){return{conv_0:r("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}},extractPredictionLayerParams:function(){return{conv_0:r("Prediction",0,"prediction_layer/conv_0"),conv_1:r("Prediction",1,"prediction_layer/conv_1"),conv_2:r("Prediction",2,"prediction_layer/conv_2"),conv_3:r("Prediction",3,"prediction_layer/conv_3"),conv_4:r("Prediction",4,"prediction_layer/conv_4"),conv_5:r("Prediction",5,"prediction_layer/conv_5"),conv_6:r("Prediction",6,"prediction_layer/conv_6"),conv_7:r("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}}}(t,e),r=n.extractMobilenetV1Params,o=n.extractPredictionLayerParams,a=t["Output/extra_dim"];if(e.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!kp(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var s={mobilenetv1:r(),prediction_layer:o(),output_layer:{extra_dim:a}};return Od(t,e),{params:s,paramMappings:e}}function Rf(t,e,n){return wa((function(){var r=Fs(t,e.filters,n,"same");return r=_a(r,e.batch_norm_offset),ks(r,0,6)}))}function Lf(t,e){return wa((function(){var n=null,r=Rf(t,e.conv_0,[2,2]);if([e.conv_1,e.conv_2,e.conv_3,e.conv_4,e.conv_5,e.conv_6,e.conv_7,e.conv_8,e.conv_9,e.conv_10,e.conv_11,e.conv_12,e.conv_13].forEach((function(t,e){var o=e+1,a=function(t){return[2,4,6,12].some((function(e){return e===t}))?[2,2]:[1,1]}(o);r=Rf(r=function(t,e,n){return wa((function(){var r=Ls(t,e.filters,n,"same");return r=gs(r,e.batch_norm_mean,e.batch_norm_variance,e.batch_norm_offset,e.batch_norm_scale,.0010000000474974513),ks(r,0,6)}))}(r,t.depthwise_conv,a),t.pointwise_conv,[1,1]),11===o&&(n=r)})),null===n)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:r,conv11:n}}))}function Of(t,e,n){var r=t.arraySync(),o=Math.min(r[e][0],r[e][2]),a=Math.min(r[e][1],r[e][3]),s=Math.max(r[e][0],r[e][2]),i=Math.max(r[e][1],r[e][3]),u=Math.min(r[n][0],r[n][2]),c=Math.min(r[n][1],r[n][3]),l=Math.max(r[n][0],r[n][2]),h=Math.max(r[n][1],r[n][3]),p=(s-o)*(i-a),d=(l-u)*(h-c);if(p<=0||d<=0)return 0;var f=Math.max(o,u),m=Math.max(a,c),g=Math.min(s,l),v=Math.min(i,h),b=Math.max(g-f,0)*Math.max(v-m,0);return b/(p+d-b)}function zf(t,e){var n=function(t){var e=hc(Ro(t,[1,0])),n=[Fi(e[2],e[0]),Fi(e[3],e[1])];return{sizes:n,centers:[_a(e[0],Sa(n[0],di(2))),_a(e[1],Sa(n[1],di(2)))]}}(t),r=n.sizes,o=n.centers,a=hc(Ro(e,[1,0])),s=Sa(Da(Ys(Sa(a[2],di(5))),r[0]),di(2)),i=_a(Da(Sa(a[0],di(10)),r[0]),o[0]),u=Sa(Da(Ys(Sa(a[3],di(5))),r[1]),di(2)),c=_a(Da(Sa(a[1],di(10)),r[1]),o[1]);return Ro(ec([Fi(i,s),Fi(c,u),_a(i,s),_a(c,u)]),[1,0])}function Wf(t,e){return wa((function(){var n=t.shape[0];return{boxPredictionEncoding:$o(Ld(t,e.box_encoding_predictor),[n,-1,1,4]),classPrediction:$o(Ld(t,e.class_predictor),[n,-1,3])}}))}var qf=function(){function t(t){var e=void 0===t?{}:t,n=e.minConfidence,r=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=r||100,"number"!=typeof this._minConfidence||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if("number"!=typeof this._maxResults)throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(t.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!1,configurable:!0}),t}(),jf=function(t){function e(){return t.call(this,"SsdMobilenetv1")||this}return fp(e,t),e.prototype.forwardInput=function(t){var e=this.params;if(!e)throw new Error("SsdMobilenetv1 - load model before inference");return wa((function(){var n=t.toBatchTensor(512,!1).toFloat(),r=Lf(Fi(Da(n,di(.007843137718737125)),di(1)),e.mobilenetv1),o=function(t,e,n){return wa((function(){var r=Rf(t,n.conv_0,[1,1]),o=Rf(r,n.conv_1,[2,2]),a=Rf(o,n.conv_2,[1,1]),s=Rf(a,n.conv_3,[2,2]),i=Rf(s,n.conv_4,[1,1]),u=Rf(i,n.conv_5,[2,2]),c=Rf(u,n.conv_6,[1,1]),l=Rf(c,n.conv_7,[2,2]),h=Wf(e,n.box_predictor_0),p=Wf(t,n.box_predictor_1),d=Wf(o,n.box_predictor_2),f=Wf(s,n.box_predictor_3),m=Wf(u,n.box_predictor_4),g=Wf(l,n.box_predictor_5);return{boxPredictions:cs([h.boxPredictionEncoding,p.boxPredictionEncoding,d.boxPredictionEncoding,f.boxPredictionEncoding,m.boxPredictionEncoding,g.boxPredictionEncoding],1),classPredictions:cs([h.classPrediction,p.classPrediction,d.classPrediction,f.classPrediction,m.classPrediction,g.classPrediction],1)}}))}(r.out,r.conv11,e.prediction_layer);return function(t,e,n){return wa((function(){var r=t.shape[0],o=zf($o(Qs(n.extra_dim,[r,1,1]),[-1,4]),$o(t,[-1,4]));o=$o(o,[r,o.shape[0]/r,4]);var a=ls(hs(e,[0,0,1],[-1,-1,-1])),s=hs(a,[0,0,0],[-1,-1,1]);return s=$o(s,[r,s.shape[1]]),{boxes:hc(o),scores:hc(s)}}))}(o.boxPredictions,o.classPredictions,e.output_layer)}))},e.prototype.forward=function(t){return gp(this,void 0,void 0,(function(){var e;return vp(this,(function(n){switch(n.label){case 0:return e=this.forwardInput,[4,Fd(t)];case 1:return[2,e.apply(this,[n.sent()])]}}))}))},e.prototype.locateFaces=function(t,e){return void 0===e&&(e={}),gp(this,void 0,void 0,(function(){var n,r,o,a,s,i,u,c,l,h,p,d,f,m,g,v,b,y,w,x;return vp(this,(function(k){switch(k.label){case 0:return n=new qf(e),r=n.maxResults,o=n.minConfidence,[4,Fd(t)];case 1:for(a=k.sent(),s=this.forwardInput(a),i=s.boxes,u=s.scores,c=i[0],l=u[0],h=1;h<i.length;h++)i[h].dispose(),u[h].dispose();return f=(d=Array).from,[4,l.data()];case 2:return p=f.apply(d,[k.sent()]),.5,m=function(t,e,n,r,o){var a=t.shape[0],s=Math.min(n,a),i=e.map((function(t,e){return{score:t,boxIndex:e}})).filter((function(t){return t.score>o})).sort((function(t,e){return e.score-t.score})),u=[];return i.forEach((function(e){if(!(u.length>=s)){for(var n=e.score,a=u.length-1;a>=0;--a){var i=Of(t,e.boxIndex,u[a]);if(0!==i&&(e.score*=i<=r?1:0,e.score<=o))break}n===e.score&&u.push(e.boxIndex)}})),u}(c,p,r,.5,o),g=a.getReshapedInputDimensions(0),v=a.inputSize,b=v/g.width,y=v/g.height,w=c.arraySync(),x=m.map((function(t){var e=[Math.max(0,w[t][0]),Math.min(1,w[t][2])].map((function(t){return t*y})),n=e[0],r=e[1],o=[Math.max(0,w[t][1]),Math.min(1,w[t][3])].map((function(t){return t*b})),s=o[0],i=o[1];return new Lp(p[t],new Hp(s,n,i-s,r-n),{height:a.getInputHeight(0),width:a.getInputWidth(0)})})),c.dispose(),l.dispose(),[2,x]}}))}))},e.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},e.prototype.extractParamsFromWeigthMap=function(t){return Bf(t)},e.prototype.extractParams=function(t){return function(t){var e=[],n=Hd(t),r=n.extractWeights,o=n.getRemainingWeights,a=Cf(r,e),s=a.extractMobilenetV1Params,i=a.extractPredictionLayerParams,u=s(),c=i(),l={extra_dim:zo(r(20472),[1,5118,4])};if(e.push({paramPath:"output_layer/extra_dim"}),0!==o().length)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:l},paramMappings:e}}(t)},e}($d);function Gf(t){var e=new jf;return e.extractWeights(t),e}var Kf,Hf=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e}(jf),Uf=[new $p(.738768,.874946),new $p(2.42204,2.65704),new $p(4.30971,7.04493),new $p(10.246,4.59428),new $p(12.6868,11.8741)],Vf=[new $p(1.603231,2.094468),new $p(6.041143,7.080126),new $p(2.882459,3.518061),new $p(4.266906,5.178857),new $p(9.041765,10.66308)],Jf=[117.001,114.697,97.404],Yf=function(t){return"number"==typeof t};function Xf(t){if(!t)throw new Error("invalid config: "+t);if("boolean"!=typeof t.withSeparableConvs)throw new Error("config.withSeparableConvs has to be a boolean, have: "+t.withSeparableConvs);if(!Yf(t.iouThreshold)||t.iouThreshold<0||t.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+t.iouThreshold);if(!Array.isArray(t.classes)||!t.classes.length||!t.classes.every((function(t){return"string"==typeof t})))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(t.classes));if(!Array.isArray(t.anchors)||!t.anchors.length||!t.anchors.map((function(t){return t||{}})).every((function(t){return Yf(t.x)&&Yf(t.y)})))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(t.anchors));if(t.meanRgb&&(!Array.isArray(t.meanRgb)||3!==t.meanRgb.length||!t.meanRgb.every(Yf)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(t.meanRgb))}function Zf(t){return wa((function(){var e=Da(t,di(.10000000149011612));return _a(Du(Fi(t,e)),e)}))}function Qf(t,e){return wa((function(){var n=Zi(t,[[0,0],[1,1],[1,1],[0,0]]);return n=Fs(n,e.conv.filters,[1,1],"valid"),n=Fi(n,e.bn.sub),n=Da(n,e.bn.truediv),Zf(n=_a(n,e.conv.bias))}))}function tm(t,e){return wa((function(){var n=Zi(t,[[0,0],[1,1],[1,1],[0,0]]);return n=Bu(n,e.depthwise_filter,e.pointwise_filter,[1,1],"valid"),Zf(n=_a(n,e.bias))}))}function em(t,e){var n=zd(t,e);var r=jd(t,e);return{extractConvParams:n,extractConvWithBatchNormParams:function(r,o,a){return{conv:n(r,o,3,a+"/conv"),bn:function(n,r){var o=_u(t(n)),a=_u(t(n));return e.push({paramPath:r+"/sub"},{paramPath:r+"/truediv"}),{sub:o,truediv:a}}(o,a+"/bn")}},extractSeparableConvParams:r}}function nm(t,e){var n=Kd(t,e);function r(t){return{filters:n(t+"/filters",4),bias:n(t+"/bias",1)}}return{extractConvParams:r,extractConvWithBatchNormParams:function(t){return{conv:r(t+"/conv"),bn:function(t){return{sub:n(t+"/sub",1),truediv:n(t+"/truediv",1)}}(t+"/bn")}},extractSeparableConvParams:Gd(n)}}(Kf=t.TinyYolov2SizeType||(t.TinyYolov2SizeType={}))[Kf.XS=224]="XS",Kf[Kf.SM=320]="SM",Kf[Kf.MD=416]="MD",Kf[Kf.LG=608]="LG";var rm=function(){function t(t){var e=void 0===t?{}:t,n=e.inputSize,r=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=r||.5,"number"!=typeof this._inputSize||this._inputSize%32!=0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if("number"!=typeof this._scoreThreshold||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(t.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!1,configurable:!0}),t}(),om=function(t){function e(e){var n=t.call(this,"TinyYolov2")||this;return Xf(e),n._config=e,n}return fp(e,t),Object.defineProperty(e.prototype,"config",{get:function(){return this._config},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!1,configurable:!0}),e.prototype.runTinyYolov2=function(t,e){var n=Qf(t,e.conv0);return n=Qf(n=Ci(n,[2,2],[2,2],"same"),e.conv1),n=Qf(n=Ci(n,[2,2],[2,2],"same"),e.conv2),n=Qf(n=Ci(n,[2,2],[2,2],"same"),e.conv3),n=Qf(n=Ci(n,[2,2],[2,2],"same"),e.conv4),n=Qf(n=Ci(n,[2,2],[2,2],"same"),e.conv5),n=Qf(n=Ci(n,[2,2],[1,1],"same"),e.conv6),Ld(n=Qf(n,e.conv7),e.conv8,"valid",!1)},e.prototype.runMobilenet=function(t,e){var n=this.config.isFirstLayerConv2d?Zf(Ld(t,e.conv0,"valid",!1)):tm(t,e.conv0);return n=tm(n=Ci(n,[2,2],[2,2],"same"),e.conv1),n=tm(n=Ci(n,[2,2],[2,2],"same"),e.conv2),n=tm(n=Ci(n,[2,2],[2,2],"same"),e.conv3),n=tm(n=Ci(n,[2,2],[2,2],"same"),e.conv4),n=tm(n=Ci(n,[2,2],[2,2],"same"),e.conv5),n=Ci(n,[2,2],[1,1],"same"),n=e.conv6?tm(n,e.conv6):n,Ld(n=e.conv7?tm(n,e.conv7):n,e.conv8,"valid",!1)},e.prototype.forwardInput=function(t,e){var n=this,r=this.params;if(!r)throw new Error("TinyYolov2 - load model before inference");return wa((function(){var o=t.toBatchTensor(e,!1).toFloat();return o=(o=n.config.meanRgb?qp(o,n.config.meanRgb):o).div(di(256)),n.config.withSeparableConvs?n.runMobilenet(o,r):n.runTinyYolov2(o,r)}))},e.prototype.forward=function(t,e){return gp(this,void 0,void 0,(function(){var n;return vp(this,(function(r){switch(r.label){case 0:return n=this.forwardInput,[4,Fd(t)];case 1:return[4,n.apply(this,[r.sent(),e])];case 2:return[2,r.sent()]}}))}))},e.prototype.detect=function(t,e){return void 0===e&&(e={}),gp(this,void 0,void 0,(function(){var n,r,o,a,s,i,u,c,l,h,p,d,f,m=this;return vp(this,(function(g){switch(g.label){case 0:return n=new rm(e),r=n.inputSize,o=n.scoreThreshold,[4,Fd(t)];case 1:return a=g.sent(),[4,this.forwardInput(a,r)];case 2:return s=g.sent(),i=wa((function(){return hc(s)[0].expandDims()})),u={width:a.getInputWidth(0),height:a.getInputHeight(0)},[4,this.extractBoxes(i,a.getReshapedInputDimensions(0),o)];case 3:return c=g.sent(),s.dispose(),i.dispose(),l=c.map((function(t){return t.box})),h=c.map((function(t){return t.score})),p=c.map((function(t){return t.classScore})),d=c.map((function(t){return m.config.classes[t.label]})),f=Wp(l.map((function(t){return t.rescale(r)})),h,this.config.iouThreshold,!0),[2,f.map((function(t){return new Rp(h[t],p[t],d[t],l[t],u)}))]}}))}))},e.prototype.getDefaultModelName=function(){return""},e.prototype.extractParamsFromWeigthMap=function(t){return function(t,e){var n,r=[],o=nm(t,r),a=o.extractConvParams,s=o.extractConvWithBatchNormParams,i=o.extractSeparableConvParams;if(e.withSeparableConvs){var u=e.filterSizes&&e.filterSizes.length||9;n={conv0:e.isFirstLayerConv2d?a("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:a("conv8")}}else n={conv0:s("conv0"),conv1:s("conv1"),conv2:s("conv2"),conv3:s("conv3"),conv4:s("conv4"),conv5:s("conv5"),conv6:s("conv6"),conv7:s("conv7"),conv8:a("conv8")};return Od(t,r),{params:n,paramMappings:r}}(t,this.config)},e.prototype.extractParams=function(t){var n=this.config.filterSizes||e.DEFAULT_FILTER_SIZES,r=n?n.length:void 0;if(7!==r&&8!==r&&9!==r)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+r+" filterSizes in config");return function(t,e,n,r){var o,a=Hd(t),s=a.extractWeights,i=a.getRemainingWeights,u=[],c=em(s,u),l=c.extractConvParams,h=c.extractConvWithBatchNormParams,p=c.extractSeparableConvParams;if(e.withSeparableConvs){var d=r[0],f=r[1],m=r[2],g=r[3],v=r[4],b=r[5],y=r[6],w=r[7],x=r[8];o={conv0:e.isFirstLayerConv2d?l(d,f,3,"conv0"):p(d,f,"conv0"),conv1:p(f,m,"conv1"),conv2:p(m,g,"conv2"),conv3:p(g,v,"conv3"),conv4:p(v,b,"conv4"),conv5:p(b,y,"conv5"),conv6:w?p(y,w,"conv6"):void 0,conv7:x?p(w,x,"conv7"):void 0,conv8:l(x||w||y,5*n,1,"conv8")}}else d=r[0],f=r[1],m=r[2],g=r[3],v=r[4],b=r[5],y=r[6],w=r[7],x=r[8],o={conv0:h(d,f,"conv0"),conv1:h(f,m,"conv1"),conv2:h(m,g,"conv2"),conv3:h(g,v,"conv3"),conv4:h(v,b,"conv4"),conv5:h(b,y,"conv5"),conv6:h(y,w,"conv6"),conv7:h(w,x,"conv7"),conv8:l(x,5*n,1,"conv8")};if(0!==i().length)throw new Error("weights remaing after extract: "+i().length);return{params:o,paramMappings:u}}(t,this.config,this.boxEncodingSize,n)},e.prototype.extractBoxes=function(t,e,n){return gp(this,void 0,void 0,(function(){var r,o,a,s,i,u,c,l,h,p,d,f,m,g,v,b,y,w,x,k,_,E,S,D,F,I,M,N,T,A=this;return vp(this,(function(P){switch(P.label){case 0:return r=e.width,o=e.height,a=Math.max(r,o),s=a/r,i=a/o,u=t.shape[1],c=this.config.anchors.length,l=wa((function(){var e=t.reshape([u,u,c,A.boxEncodingSize]);return[e.slice([0,0,0,0],[u,u,c,4]),e.slice([0,0,0,4],[u,u,c,1]),A.withClassScores?Ku(e.slice([0,0,0,5],[u,u,c,A.config.classes.length]),3):di(0)]})),h=l[0],p=l[1],d=l[2],f=[],[4,p.array()];case 1:return m=P.sent(),[4,h.array()];case 2:g=P.sent(),v=0,P.label=3;case 3:if(!(v<u))return[3,12];b=0,P.label=4;case 4:if(!(b<u))return[3,11];y=0,P.label=5;case 5:return y<c?(w=Gp(m[v][b][y][0]),!n||w>n?(x=(b+Gp(g[v][b][y][0]))/u*s,k=(v+Gp(g[v][b][y][1]))/u*i,_=Math.exp(g[v][b][y][2])*this.config.anchors[y].x/u*s,E=Math.exp(g[v][b][y][3])*this.config.anchors[y].y/u*i,S=x-_/2,D=k-E/2,F={row:v,col:b,anchor:y},this.withClassScores?[4,this.extractPredictedClass(d,F)]:[3,7]):[3,9]):[3,10];case 6:return T=P.sent(),[3,8];case 7:T={classScore:1,label:0},P.label=8;case 8:M=(I=T).classScore,N=I.label,f.push(mp({box:new Bp(S,D,S+_,D+E),score:w,classScore:w*M,label:N},F)),P.label=9;case 9:return y++,[3,5];case 10:return b++,[3,4];case 11:return v++,[3,3];case 12:return h.dispose(),p.dispose(),d.dispose(),[2,f]}}))}))},e.prototype.extractPredictedClass=function(t,e){return gp(this,void 0,void 0,(function(){var n,r,o,a;return vp(this,(function(s){switch(s.label){case 0:return n=e.row,r=e.col,o=e.anchor,[4,t.array()];case 1:return a=s.sent(),[2,Array(this.config.classes.length).fill(0).map((function(t,e){return a[n][r][o][e]})).map((function(t,e){return{classScore:t,label:e}})).reduce((function(t,e){return t.classScore>e.classScore?t:e}))]}}))}))},e.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],e}($d),am=function(t){function e(e){void 0===e&&(e=!0);var n=Object.assign({},{withSeparableConvs:e,iouThreshold:.4,classes:["face"]},e?{anchors:Vf,meanRgb:Jf}:{anchors:Uf,withClassScores:!0});return t.call(this,n)||this}return fp(e,t),Object.defineProperty(e.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!1,configurable:!0}),e.prototype.locateFaces=function(t,e){return gp(this,void 0,void 0,(function(){return vp(this,(function(n){switch(n.label){case 0:return[4,this.detect(t,e)];case 1:return[2,n.sent().map((function(t){return new Lp(t.score,t.relativeBox,{width:t.imageWidth,height:t.imageHeight})}))]}}))}))},e.prototype.getDefaultModelName=function(){return this.withSeparableConvs?"tiny_yolov2_separable_conv_model":"tiny_yolov2_model"},e.prototype.extractParamsFromWeigthMap=function(e){return t.prototype.extractParamsFromWeigthMap.call(this,e)},e}(om);var sm=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return fp(e,t),e}(rm),im=function(){function t(){}return t.prototype.then=function(t){return gp(this,void 0,void 0,(function(){var e;return vp(this,(function(n){switch(n.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[n.sent()])]}}))}))},t.prototype.run=function(){return gp(this,void 0,void 0,(function(){return vp(this,(function(t){throw new Error("ComposableTask - run is not implemented")}))}))},t}();function um(t,e,n,r,o){return void 0===o&&(o=function(t){return t.alignedRect}),gp(this,void 0,void 0,(function(){var a,s,i,u,c;return vp(this,(function(l){switch(l.label){case 0:return a=t.map((function(t){return af(t)?o(t):t.detection})),(i=r)?[3,5]:e instanceof Qn?[4,Md(e,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,Id(e,a)];case 3:u=l.sent(),l.label=4;case 4:i=u,l.label=5;case 5:return[4,n(s=i)];case 6:return c=l.sent(),s.forEach((function(t){return t instanceof Qn&&t.dispose()})),[2,c]}}))}))}function cm(t,e,n,r,o){return gp(this,void 0,void 0,(function(){var a=this;return vp(this,(function(s){return[2,um([t],e,(function(t){return gp(a,void 0,void 0,(function(){return vp(this,(function(e){return[2,n(t[0])]}))}))}),r,o)]}))}))}function lm(t){var e=Hd(t),n=e.extractWeights,r=e.getRemainingWeights,o=[],a=function(t,e){var n=zd(t,e),r=Wd(t,e);function o(n,r){var o=_u(t(n));return e.push({paramPath:r}),o}function a(t,e,r){return void 0===r&&(r=!1),{conv1:n(t[0],t[1],3,e+"/conv1"),prelu1_alpha:o(t[1],e+"/prelu1_alpha"),conv2:n(t[1],t[2],3,e+"/conv2"),prelu2_alpha:o(t[2],e+"/prelu2_alpha"),conv3:n(t[2],t[3],r?2:3,e+"/conv3"),prelu3_alpha:o(t[3],e+"/prelu3_alpha")}}return{extractPNetParams:function(){var t=a([3,10,16,32],"pnet"),e=n(32,2,1,"pnet/conv4_1"),r=n(32,4,1,"pnet/conv4_2");return mp(mp({},t),{conv4_1:e,conv4_2:r})},extractRNetParams:function(){var t=a([3,28,48,64],"rnet",!0),e=r(576,128,"rnet/fc1"),n=o(128,"rnet/prelu4_alpha"),s=r(128,2,"rnet/fc2_1"),i=r(128,4,"rnet/fc2_2");return mp(mp({},t),{fc1:e,prelu4_alpha:n,fc2_1:s,fc2_2:i})},extractONetParams:function(){var t=a([3,32,64,64],"onet"),e=n(64,128,2,"onet/conv4"),s=o(128,"onet/prelu4_alpha"),i=r(1152,256,"onet/fc1"),u=o(256,"onet/prelu5_alpha"),c=r(256,2,"onet/fc2_1"),l=r(256,4,"onet/fc2_2"),h=r(256,10,"onet/fc2_3");return mp(mp({},t),{conv4:e,prelu4_alpha:s,fc1:i,prelu5_alpha:u,fc2_1:c,fc2_2:l,fc2_3:h})}}}(n,o),s=a.extractPNetParams,i=a.extractRNetParams,u=a.extractONetParams,c=s(),l=i(),h=u();if(0!==r().length)throw new Error("weights remaing after extract: "+r().length);return{params:{pnet:c,rnet:l,onet:h},paramMappings:o}}function hm(t){var e=[],n=function(t,e){var n=Kd(t,e);function r(t){return{filters:n(t+"/weights",4,t+"/filters"),bias:n(t+"/bias",1)}}function o(t){return{weights:n(t+"/weights",2),bias:n(t+"/bias",1)}}function a(t){return n(t,1)}function s(t){return{conv1:r(t+"/conv1"),prelu1_alpha:a(t+"/prelu1_alpha"),conv2:r(t+"/conv2"),prelu2_alpha:a(t+"/prelu2_alpha"),conv3:r(t+"/conv3"),prelu3_alpha:a(t+"/prelu3_alpha")}}return{extractPNetParams:function(){var t=s("pnet"),e=r("pnet/conv4_1"),n=r("pnet/conv4_2");return mp(mp({},t),{conv4_1:e,conv4_2:n})},extractRNetParams:function(){var t=s("rnet"),e=o("rnet/fc1"),n=a("rnet/prelu4_alpha"),r=o("rnet/fc2_1"),i=o("rnet/fc2_2");return mp(mp({},t),{fc1:e,prelu4_alpha:n,fc2_1:r,fc2_2:i})},extractONetParams:function(){var t=s("onet"),e=r("onet/conv4"),n=a("onet/prelu4_alpha"),i=o("onet/fc1"),u=a("onet/prelu5_alpha"),c=o("onet/fc2_1"),l=o("onet/fc2_2"),h=o("onet/fc2_3");return mp(mp({},t),{conv4:e,prelu4_alpha:n,fc1:i,prelu5_alpha:u,fc2_1:c,fc2_2:l,fc2_3:h})}}}(t,e),r=n.extractPNetParams,o=n.extractRNetParams,a=n.extractONetParams,s=r(),i=o(),u=a();return Od(t,e),{params:{pnet:s,rnet:i,onet:u},paramMappings:e}}function pm(t,e){var n=e[0],r=e[1];return{height:Math.floor(n*t),width:Math.floor(r*t)}}var dm=function(t){function e(e,n,r,o){return t.call(this,{left:e,top:n,right:r,bottom:o},!0)||this}return fp(e,t),e}(Cp);function fm(t){return wa((function(){return Da(Fi(t,di(127.5)),di(.0078125))}))}function mm(t,e){return wa((function(){return _a(Du(t),Da(e,_i(Du(_i(t)))))}))}function gm(t,e,n){return void 0===n&&(n=!1),wa((function(){var r=Ld(t,e.conv1,"valid");return r=mm(r,e.prelu1_alpha),r=mm(r=Ld(r=Ci(r,n?[2,2]:[3,3],[2,2],"same"),e.conv2,"valid"),e.prelu2_alpha),r=mm(r=Ld(r=n?r:Ci(r,[3,3],[2,2],"valid"),e.conv3,"valid"),e.prelu3_alpha)}))}function vm(t,e,n,r,o){o.stage1=[];var a=e.map((function(e){return wa((function(){var n={scale:e},o=function(t,e){return wa((function(){var n=pm(e,t.shape.slice(1)),r=n.height,o=n.width,a=fm(Ll.resizeBilinear(t,[r,o]));return Ro(a,[0,2,1,3])}))}(t,e),a=Date.now(),s=function(t,e){return wa((function(){var n=gm(t,e,!0),r=Ld(n,e.conv4_1,"valid"),o=Xs(Di(r,3),3);return{prob:Ku(Fi(r,o),3),regions:Ld(n,e.conv4_2,"valid")}}))}(o,r),i=s.prob,u=s.regions;return n.pnet=Date.now()-a,{scoresTensor:hc(hc(i,3)[1])[0],regionsTensor:hc(u)[0],scale:e,statsForScale:n}}))})).map((function(t){var e=t.scoresTensor,r=t.regionsTensor,a=t.scale,s=t.statsForScale,i=function(t,e,n,r){for(var o=[],a=t.arraySync(),s=0;s<t.shape[0];s++)for(var i=0;i<t.shape[1];i++)a[s][i]>=r&&o.push(new $p(i,s));return o.map((function(t){var r=new Bp(Math.round((2*t.y+1)/n),Math.round((2*t.x+1)/n),Math.round((2*t.y+12)/n),Math.round((2*t.x+12)/n)),o=a[t.y][t.x],s=e.arraySync();return{cell:r,score:o,region:new dm(s[t.y][t.x][0],s[t.y][t.x][1],s[t.y][t.x][2],s[t.y][t.x][3])}}))}(e,r,a,n);if(e.dispose(),r.dispose(),!i.length)return o.stage1.push(s),[];var u=Date.now(),c=Wp(i.map((function(t){return t.cell})),i.map((function(t){return t.score})),.5);return s.nms=Date.now()-u,s.numBoxes=c.length,o.stage1.push(s),c.map((function(t){return i[t]}))})).reduce((function(t,e){return t.concat(e)}),[]),s=[],i=[];if(a.length>0){var u=Date.now(),c=Wp(a.map((function(t){return t.cell})),a.map((function(t){return t.score})),.7);o.stage1_nms=Date.now()-u,i=c.map((function(t){return a[t].score})),s=c.map((function(t){return a[t]})).map((function(t){var e=t.cell,n=t.region;return new Bp(e.left+n.left*e.width,e.top+n.top*e.height,e.right+n.right*e.width,e.bottom+n.bottom*e.height).toSquare().round()}))}return{boxes:s,scores:i}}function bm(t,e,n){var r=n.width,o=n.height;return gp(this,void 0,void 0,(function(){var n,a,s,i=this;return vp(this,(function(u){switch(u.label){case 0:return n=pd(t),[4,Promise.all(e.map((function(e){return gp(i,void 0,void 0,(function(){var r,o,a,s,i,u,c,l;return vp(this,(function(h){return r=e.padAtBorders(t.height,t.width),o=r.y,a=r.ey,s=r.x,i=r.ex,u=s-1,c=o-1,l=n.getImageData(u,c,i-u,a-c),[2,ld.isNodejs()?kd(l):createImageBitmap(l)]}))}))})))];case 1:return a=u.sent(),s=[],a.forEach((function(t){var e=pd(xd({width:r,height:o}));e.drawImage(t,0,0,r,o);for(var n=e.getImageData(0,0,r,o).data,a=[],i=0;i<n.length;i+=4)a.push(n[i+2]),a.push(n[i+1]),a.push(n[i]);s.push(a)})),[2,s.map((function(t){return wa((function(){return fm(Ro(sc(t,[1,r,o,3]),[0,2,1,3]).toFloat())}))}))]}}))}))}function ym(t,e,n,r,o){return gp(this,void 0,void 0,(function(){var a,s,i,u,c,l,h,p,d,f,m,g,v,b;return vp(this,(function(y){switch(y.label){case 0:return a=Date.now(),[4,bm(t,e,{width:24,height:24})];case 1:return s=y.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),i=s.map((function(t){var e=function(t,e){return wa((function(){var n=gm(t,e),r=mm(Xd($o(n,[n.shape[0],e.fc1.weights.shape[0]]),e.fc1),e.prelu4_alpha),o=Xd(r,e.fc2_1),a=Xs(Di(o,1),1),s=Ku(Fi(o,a),1),i=Xd(r,e.fc2_2);return{scores:hc(s,1)[1],regions:i}}))}(t,r);return t.dispose(),e})),o.stage2_rnet=Date.now()-a,u=i.length>1?cs(i.map((function(t){return t.scores}))):i[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[y.sent()]),u.dispose(),p=c.map((function(t,e){return{score:t,idx:e}})).filter((function(t){return t.score>n})).map((function(t){return t.idx})),d=p.map((function(t){return e[t]})),f=p.map((function(t){return c[t]})),m=[],g=[],d.length>0&&(a=Date.now(),v=Wp(d,f,.7),o.stage2_nms=Date.now()-a,b=v.map((function(t){var e=i[p[t]].regions.arraySync();return new dm(e[0][0],e[0][1],e[0][2],e[0][3])})),g=v.map((function(t){return f[t]})),m=v.map((function(t,e){return d[t].calibrate(b[e])}))),i.forEach((function(t){t.regions.dispose(),t.scores.dispose()})),[2,{boxes:m,scores:g}]}}))}))}function wm(t,e,n,r,o){return gp(this,void 0,void 0,(function(){var a,s,i,u,c,l,h,p,d,f,m,g,v,b,y;return vp(this,(function(w){switch(w.label){case 0:return a=Date.now(),[4,bm(t,e,{width:48,height:48})];case 1:return s=w.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),i=s.map((function(t){var e=function(t,e){return wa((function(){var n=gm(t,e);n=mm(n=Ld(n=Ci(n,[2,2],[2,2],"same"),e.conv4,"valid"),e.prelu4_alpha);var r=mm(Xd($o(n,[n.shape[0],e.fc1.weights.shape[0]]),e.fc1),e.prelu5_alpha),o=Xd(r,e.fc2_1),a=Xs(Di(o,1),1),s=Ku(Fi(o,a),1),i=Xd(r,e.fc2_2),u=Xd(r,e.fc2_3);return{scores:hc(s,1)[1],regions:i,points:u}}))}(t,r);return t.dispose(),e})),o.stage3_onet=Date.now()-a,u=i.length>1?cs(i.map((function(t){return t.scores}))):i[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[w.sent()]),u.dispose(),p=c.map((function(t,e){return{score:t,idx:e}})).filter((function(t){return t.score>n})).map((function(t){return t.idx})),d=p.map((function(t){var e=i[t].regions.arraySync();return new dm(e[0][0],e[0][1],e[0][2],e[0][3])})),f=p.map((function(t,n){return e[t].calibrate(d[n])})),m=p.map((function(t){return c[t]})),g=[],v=[],b=[],f.length>0&&(a=Date.now(),y=Wp(f,m,.7,!1),o.stage3_nms=Date.now()-a,g=y.map((function(t){return f[t]})),v=y.map((function(t){return m[t]})),b=y.map((function(t,e){return Array(5).fill(0).map((function(n,r){var o=i[t].points.arraySync();return new $p(o[0][r]*(g[e].width+1)+g[e].left,o[0][r+5]*(g[e].height+1)+g[e].top)}))}))),i.forEach((function(t){t.regions.dispose(),t.scores.dispose(),t.points.dispose()})),[2,{boxes:g,scores:v,points:b}]}}))}))}var xm=function(t){function e(){return t.call(this,"Mtcnn")||this}return fp(e,t),e.prototype.load=function(e){return gp(this,void 0,void 0,(function(){return vp(this,(function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,t.prototype.load.call(this,e)]}))}))},e.prototype.loadFromDisk=function(e){return gp(this,void 0,void 0,(function(){return vp(this,(function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,t.prototype.loadFromDisk.call(this,e)]}))}))},e.prototype.forwardInput=function(t,e){return void 0===e&&(e={}),gp(this,void 0,void 0,(function(){var n,r,o,a,s,i,u,c,l,h,p,d,f,m,g,v,b,y,w,x,k;return vp(this,(function(_){switch(_.label){case 0:if(!(n=this.params))throw new Error("Mtcnn - load model before inference");if(!(r=t.canvases[0]))throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return o={},a=Date.now(),s=wa((function(){return function(t){return wa((function(){return ec(hc(t,3).reverse(),3)}))}(Xs(jo(r)).toFloat())})),i=function(t){return s.dispose(),o.total=Date.now()-a,t},u=s.shape.slice(1),c=u[0],l=u[1],h=new $f(e),p=h.minFaceSize,d=h.scaleFactor,f=h.maxNumScales,m=h.scoreThresholds,g=h.scaleSteps,v=(g||function(t,e,n){for(var r=n[0],o=n[1],a=12/t,s=[],i=Math.min(r,o)*a,u=0;i>=12;)s.push(a*Math.pow(e,u)),i*=e,u+=1;return s}(p,d,[c,l])).filter((function(t){var e=pm(t,[c,l]);return Math.min(e.width,e.height)>12})).slice(0,f),o.scales=v,o.pyramid=v.map((function(t){return pm(t,[c,l])})),b=Date.now(),[4,vm(s,v,m[0],n.pnet,o)];case 1:return y=_.sent(),o.total_stage1=Date.now()-b,y.boxes.length?(o.stage2_numInputBoxes=y.boxes.length,b=Date.now(),[4,ym(r,y.boxes,m[1],n.rnet,o)]):[2,i({results:[],stats:o})];case 2:return w=_.sent(),o.total_stage2=Date.now()-b,w.boxes.length?(o.stage3_numInputBoxes=w.boxes.length,b=Date.now(),[4,wm(r,w.boxes,m[2],n.onet,o)]):[2,i({results:[],stats:o})];case 3:return x=_.sent(),o.total_stage3=Date.now()-b,k=x.boxes.map((function(t,e){return sf(ed({},new Lp(x.scores[e],new Hp(t.left/l,t.top/c,t.width/l,t.height/c),{height:c,width:l})),new Vp(x.points[e].map((function(e){return e.sub(new $p(t.left,t.top)).div(new $p(t.width,t.height))})),{width:t.width,height:t.height}))})),[2,i({results:k,stats:o})]}}))}))},e.prototype.forward=function(t,e){return void 0===e&&(e={}),gp(this,void 0,void 0,(function(){var n;return vp(this,(function(r){switch(r.label){case 0:return n=this.forwardInput,[4,Fd(t)];case 1:return[4,n.apply(this,[r.sent(),e])];case 2:return[2,r.sent().results]}}))}))},e.prototype.forwardWithStats=function(t,e){return void 0===e&&(e={}),gp(this,void 0,void 0,(function(){var n;return vp(this,(function(r){switch(r.label){case 0:return n=this.forwardInput,[4,Fd(t)];case 1:return[2,n.apply(this,[r.sent(),e])]}}))}))},e.prototype.getDefaultModelName=function(){return"mtcnn_model"},e.prototype.extractParamsFromWeigthMap=function(t){return hm(t)},e.prototype.extractParams=function(t){return lm(t)},e}($d),km=[new $p(1.603231,2.094468),new $p(6.041143,7.080126),new $p(2.882459,3.518061),new $p(4.266906,5.178857),new $p(9.041765,10.66308)],_m=[117.001,114.697,97.404],Em=function(t){function e(){var e={withSeparableConvs:!0,iouThreshold:.4,classes:["face"],anchors:km,meanRgb:_m,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return t.call(this,e)||this}return fp(e,t),Object.defineProperty(e.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!1,configurable:!0}),e.prototype.locateFaces=function(t,e){return gp(this,void 0,void 0,(function(){return vp(this,(function(n){switch(n.label){case 0:return[4,this.detect(t,e)];case 1:return[2,n.sent().map((function(t){return new Lp(t.score,t.relativeBox,{width:t.imageWidth,height:t.imageHeight})}))]}}))}))},e.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},e.prototype.extractParamsFromWeigthMap=function(e){return t.prototype.extractParamsFromWeigthMap.call(this,e)},e}(om),Sm={ssdMobilenetv1:new jf,tinyFaceDetector:new Em,tinyYolov2:new am,mtcnn:new xm,faceLandmark68Net:new yf,faceLandmark68TinyNet:new xf,faceRecognitionNet:new Nf,faceExpressionNet:new nf,ageGenderNet:new vf},Dm=function(t,e){return Sm.ssdMobilenetv1.locateFaces(t,e)},Fm=function(t){return Sm.faceLandmark68Net.detectLandmarks(t)},Im=function(t){return Sm.ssdMobilenetv1.load(t)},Mm=Im,Nm=Dm,Tm=Fm,Am=function(t){function e(e,n,r){var o=t.call(this)||this;return o.parentTask=e,o.input=n,o.extractedFaces=r,o}return fp(e,t),e}(im),Pm=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.run=function(){return gp(this,void 0,void 0,(function(){var t,e,n=this;return vp(this,(function(r){switch(r.label){case 0:return[4,this.parentTask];case 1:return[4,um(t=r.sent(),this.input,(function(t){return gp(n,void 0,void 0,(function(){return vp(this,(function(e){switch(e.label){case 0:return[4,Promise.all(t.map((function(t){return Sm.faceExpressionNet.predictExpressions(t)})))];case 1:return[2,e.sent()]}}))}))}),this.extractedFaces)];case 2:return e=r.sent(),[2,t.map((function(t,n){return of(t,e[n])}))]}}))}))},e.prototype.withAgeAndGender=function(){return new Lm(this,this.input)},e}(Am),$m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.run=function(){return gp(this,void 0,void 0,(function(){var t,e;return vp(this,(function(n){switch(n.label){case 0:return[4,this.parentTask];case 1:return(t=n.sent())?[4,cm(t,this.input,(function(t){return Sm.faceExpressionNet.predictExpressions(t)}),this.extractedFaces)]:[2];case 2:return e=n.sent(),[2,of(t,e)]}}))}))},e.prototype.withAgeAndGender=function(){return new Om(this,this.input)},e}(Am),Cm=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.withAgeAndGender=function(){return new zm(this,this.input)},e.prototype.withFaceDescriptors=function(){return new jm(this,this.input)},e}(Pm),Bm=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.withAgeAndGender=function(){return new Wm(this,this.input)},e.prototype.withFaceDescriptor=function(){return new Gm(this,this.input)},e}($m),Rm=function(t){function e(e,n,r){var o=t.call(this)||this;return o.parentTask=e,o.input=n,o.extractedFaces=r,o}return fp(e,t),e}(im),Lm=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.run=function(){return gp(this,void 0,void 0,(function(){var t,e,n=this;return vp(this,(function(r){switch(r.label){case 0:return[4,this.parentTask];case 1:return[4,um(t=r.sent(),this.input,(function(t){return gp(n,void 0,void 0,(function(){return vp(this,(function(e){switch(e.label){case 0:return[4,Promise.all(t.map((function(t){return Sm.ageGenderNet.predictAgeAndGender(t)})))];case 1:return[2,e.sent()]}}))}))}),this.extractedFaces)];case 2:return e=r.sent(),[2,t.map((function(t,n){var r=e[n],o=r.age;return Af(Pf(t,r.gender,r.genderProbability),o)}))]}}))}))},e.prototype.withFaceExpressions=function(){return new Pm(this,this.input)},e}(Rm),Om=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.run=function(){return gp(this,void 0,void 0,(function(){var t,e,n,r,o;return vp(this,(function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return(t=a.sent())?[4,cm(t,this.input,(function(t){return Sm.ageGenderNet.predictAgeAndGender(t)}),this.extractedFaces)]:[2];case 2:return e=a.sent(),n=e.age,r=e.gender,o=e.genderProbability,[2,Af(Pf(t,r,o),n)]}}))}))},e.prototype.withFaceExpressions=function(){return new $m(this,this.input)},e}(Rm),zm=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.withFaceExpressions=function(){return new Cm(this,this.input)},e.prototype.withFaceDescriptors=function(){return new jm(this,this.input)},e}(Lm),Wm=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.withFaceExpressions=function(){return new Bm(this,this.input)},e.prototype.withFaceDescriptor=function(){return new Gm(this,this.input)},e}(Om),qm=function(t){function e(e,n){var r=t.call(this)||this;return r.parentTask=e,r.input=n,r}return fp(e,t),e}(im),jm=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.run=function(){return gp(this,void 0,void 0,(function(){var t;return vp(this,(function(e){switch(e.label){case 0:return[4,this.parentTask];case 1:return[4,um(t=e.sent(),this.input,(function(t){return Promise.all(t.map((function(t){return Sm.faceRecognitionNet.computeFaceDescriptor(t)})))}),null,(function(t){return t.landmarks.align(null,{useDlibAlignment:!0})}))];case 2:return[2,e.sent().map((function(e,n){return Tf(t[n],e)}))]}}))}))},e.prototype.withFaceExpressions=function(){return new Cm(this,this.input)},e.prototype.withAgeAndGender=function(){return new zm(this,this.input)},e}(qm),Gm=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.run=function(){return gp(this,void 0,void 0,(function(){var t,e;return vp(this,(function(n){switch(n.label){case 0:return[4,this.parentTask];case 1:return(t=n.sent())?[4,cm(t,this.input,(function(t){return Sm.faceRecognitionNet.computeFaceDescriptor(t)}),null,(function(t){return t.landmarks.align(null,{useDlibAlignment:!0})}))]:[2];case 2:return e=n.sent(),[2,Tf(t,e)]}}))}))},e.prototype.withFaceExpressions=function(){return new Bm(this,this.input)},e.prototype.withAgeAndGender=function(){return new Wm(this,this.input)},e}(qm),Km=function(t){function e(e,n,r){var o=t.call(this)||this;return o.parentTask=e,o.input=n,o.useTinyLandmarkNet=r,o}return fp(e,t),Object.defineProperty(e.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?Sm.faceLandmark68TinyNet:Sm.faceLandmark68Net},enumerable:!1,configurable:!0}),e}(im),Hm=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.run=function(){return gp(this,void 0,void 0,(function(){var t,e,n,r,o,a=this;return vp(this,(function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return t=s.sent(),e=t.map((function(t){return t.detection})),this.input instanceof Qn?[4,Md(this.input,e)]:[3,3];case 2:return r=s.sent(),[3,5];case 3:return[4,Id(this.input,e)];case 4:r=s.sent(),s.label=5;case 5:return n=r,[4,Promise.all(n.map((function(t){return a.landmarkNet.detectLandmarks(t)})))];case 6:return o=s.sent(),n.forEach((function(t){return t instanceof Qn&&t.dispose()})),[2,t.map((function(t,e){return sf(t,o[e])}))]}}))}))},e.prototype.withFaceExpressions=function(){return new Cm(this,this.input)},e.prototype.withAgeAndGender=function(){return new zm(this,this.input)},e.prototype.withFaceDescriptors=function(){return new jm(this,this.input)},e}(Km),Um=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.run=function(){return gp(this,void 0,void 0,(function(){var t,e,n,r,o;return vp(this,(function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return(t=a.sent())?(e=t.detection,this.input instanceof Qn?[4,Md(this.input,[e])]:[3,3]):[2];case 2:return r=a.sent(),[3,5];case 3:return[4,Id(this.input,[e])];case 4:r=a.sent(),a.label=5;case 5:return n=r,[4,this.landmarkNet.detectLandmarks(n[0])];case 6:return o=a.sent(),n.forEach((function(t){return t instanceof Qn&&t.dispose()})),[2,sf(t,o)]}}))}))},e.prototype.withFaceExpressions=function(){return new Bm(this,this.input)},e.prototype.withAgeAndGender=function(){return new Wm(this,this.input)},e.prototype.withFaceDescriptor=function(){return new Gm(this,this.input)},e}(Km),Vm=function(t){function e(e,n){void 0===n&&(n=new qf);var r=t.call(this)||this;return r.input=e,r.options=n,r}return fp(e,t),e}(im),Jm=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.run=function(){return gp(this,void 0,void 0,(function(){var t,e,n,r;return vp(this,(function(o){switch(o.label){case 0:return e=(t=this).input,(n=t.options)instanceof $f?[4,Sm.mtcnn.forward(e,n)]:[3,2];case 1:return[2,o.sent().map((function(t){return t.detection}))];case 2:if(!(r=n instanceof sm?function(t){return Sm.tinyFaceDetector.locateFaces(t,n)}:n instanceof qf?function(t){return Sm.ssdMobilenetv1.locateFaces(t,n)}:n instanceof rm?function(t){return Sm.tinyYolov2.locateFaces(t,n)}:null))throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,r(e)]}}))}))},e.prototype.runAndExtendWithFaceDetections=function(){var t=this;return new Promise((function(e){return gp(t,void 0,void 0,(function(){var t;return vp(this,(function(n){switch(n.label){case 0:return[4,this.run()];case 1:return t=n.sent(),[2,e(t.map((function(t){return ed({},t)})))]}}))}))}))},e.prototype.withFaceLandmarks=function(t){return void 0===t&&(t=!1),new Hm(this.runAndExtendWithFaceDetections(),this.input,t)},e.prototype.withFaceExpressions=function(){return new Pm(this.runAndExtendWithFaceDetections(),this.input)},e.prototype.withAgeAndGender=function(){return new Lm(this.runAndExtendWithFaceDetections(),this.input)},e}(Vm),Ym=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return fp(e,t),e.prototype.run=function(){return gp(this,void 0,void 0,(function(){var t,e;return vp(this,(function(n){switch(n.label){case 0:return[4,new Jm(this.input,this.options)];case 1:return t=n.sent(),e=t[0],t.forEach((function(t){t.score>e.score&&(e=t)})),[2,e]}}))}))},e.prototype.runAndExtendWithFaceDetection=function(){var t=this;return new Promise((function(e){return gp(t,void 0,void 0,(function(){var t;return vp(this,(function(n){switch(n.label){case 0:return[4,this.run()];case 1:return t=n.sent(),[2,e(t?ed({},t):void 0)]}}))}))}))},e.prototype.withFaceLandmarks=function(t){return void 0===t&&(t=!1),new Um(this.runAndExtendWithFaceDetection(),this.input,t)},e.prototype.withFaceExpressions=function(){return new $m(this.runAndExtendWithFaceDetection(),this.input)},e.prototype.withAgeAndGender=function(){return new Om(this.runAndExtendWithFaceDetection(),this.input)},e}(Vm);function Xm(t,e){return void 0===e&&(e=new qf),new Jm(t,e)}function Zm(t,e){return gp(this,void 0,void 0,(function(){return vp(this,(function(n){switch(n.label){case 0:return console.warn("allFacesSsdMobilenetv1 is deprecated and will be removed soon, use the high level api instead"),[4,Xm(t,new qf(e?{minConfidence:e}:{})).withFaceLandmarks().withFaceDescriptors()];case 1:return[2,n.sent()]}}))}))}var Qm=Zm;function tg(t,e){if(t.length!==e.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var n=Array.from(t),r=Array.from(e);return Math.sqrt(n.map((function(t,e){return t-r[e]})).reduce((function(t,e){return t+Math.pow(e,2)}),0))}var eg=function(){function t(t,e){void 0===e&&(e=.6),this._distanceThreshold=e;var n=Array.isArray(t)?t:[t];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var r=1,o=function(){return"person "+r++};this._labeledDescriptors=n.map((function(t){if(t instanceof Zp)return t;if(t instanceof Float32Array)return new Zp(o(),[t]);if(t.descriptor&&t.descriptor instanceof Float32Array)return new Zp(o(),[t.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")}))}return Object.defineProperty(t.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!1,configurable:!0}),t.prototype.computeMeanDistance=function(t,e){return e.map((function(e){return tg(e,t)})).reduce((function(t,e){return t+e}),0)/(e.length||1)},t.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map((function(n){var r=n.descriptors,o=n.label;return new Yp(o,e.computeMeanDistance(t,r))})).reduce((function(t,e){return t.distance<e.distance?t:e}))},t.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new Yp("unknown",e.distance)},t.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map((function(t){return t.toJSON()}))}},t.fromJSON=function(e){return new t(e.labeledDescriptors.map((function(t){return Zp.fromJSON(t)})),e.distanceThreshold)},t}();t.AgeGenderNet=vf,t.BoundingBox=Bp,t.Box=Cp,t.ComposableTask=im,t.ComputeAllFaceDescriptorsTask=jm,t.ComputeFaceDescriptorsTaskBase=qm,t.ComputeSingleFaceDescriptorTask=Gm,t.DetectAllFaceLandmarksTask=Hm,t.DetectAllFacesTask=Jm,t.DetectFaceLandmarksTaskBase=Km,t.DetectFacesTaskBase=Vm,t.DetectSingleFaceLandmarksTask=Um,t.DetectSingleFaceTask=Ym,t.Dimensions=yp,t.FACE_EXPRESSION_LABELS=tf,t.FaceDetection=Lp,t.FaceDetectionNet=Hf,t.FaceExpressionNet=nf,t.FaceExpressions=ef,t.FaceLandmark68Net=yf,t.FaceLandmark68TinyNet=xf,t.FaceLandmarkNet=kf,t.FaceLandmarks=Up,t.FaceLandmarks5=Vp,t.FaceLandmarks68=Jp,t.FaceMatch=Yp,t.FaceMatcher=eg,t.FaceRecognitionNet=Nf,t.LabeledBox=Xp,t.LabeledFaceDescriptors=Zp,t.Mtcnn=xm,t.MtcnnOptions=$f,t.NetInput=Dd,t.NeuralNetwork=$d,t.ObjectDetection=Rp,t.Point=$p,t.PredictedBox=Qp,t.Rect=Hp,t.SsdMobilenetv1=jf,t.SsdMobilenetv1Options=qf,t.TinyFaceDetector=Em,t.TinyFaceDetectorOptions=sm,t.TinyYolov2=am,t.TinyYolov2Options=rm,t.allFaces=Qm,t.allFacesMtcnn=function(t,e){return void 0===e&&(e={}),gp(this,void 0,void 0,(function(){return vp(this,(function(n){switch(n.label){case 0:return console.warn("allFacesMtcnn is deprecated and will be removed soon, use the high level api instead"),[4,Xm(t,new $f(e)).withFaceLandmarks().withFaceDescriptors()];case 1:return[2,n.sent()]}}))}))},t.allFacesSsdMobilenetv1=Zm,t.allFacesTinyYolov2=function(t,e){return void 0===e&&(e={}),gp(this,void 0,void 0,(function(){return vp(this,(function(n){switch(n.label){case 0:return console.warn("allFacesTinyYolov2 is deprecated and will be removed soon, use the high level api instead"),[4,Xm(t,new rm(e)).withFaceLandmarks().withFaceDescriptors()];case 1:return[2,n.sent()]}}))}))},t.awaitMediaLoaded=bd,t.bufferToImage=yd,t.computeFaceDescriptor=function(t){return Sm.faceRecognitionNet.computeFaceDescriptor(t)},t.createCanvas=xd,t.createCanvasFromMedia=kd,t.createFaceDetectionNet=function(t){return Gf(t)},t.createFaceRecognitionNet=function(t){var e=new Nf;return e.extractWeights(t),e},t.createMtcnn=function(t){var e=new xm;return e.extractWeights(t),e},t.createSsdMobilenetv1=Gf,t.createTinyFaceDetector=function(t){var e=new Em;return e.extractWeights(t),e},t.createTinyYolov2=function(t,e){void 0===e&&(e=!0);var n=new am(e);return n.extractWeights(t),n},t.detectAllFaces=Xm,t.detectFaceLandmarks=Fm,t.detectFaceLandmarksTiny=function(t){return Sm.faceLandmark68TinyNet.detectLandmarks(t)},t.detectLandmarks=Tm,t.detectSingleFace=function(t,e){return void 0===e&&(e=new qf),new Ym(t,e)},t.draw=lf,t.env=ld,t.euclideanDistance=tg,t.extendWithAge=Af,t.extendWithFaceDescriptor=Tf,t.extendWithFaceDetection=ed,t.extendWithFaceExpressions=of,t.extendWithFaceLandmarks=sf,t.extendWithGender=Pf,t.extractFaceTensors=Md,t.extractFaces=Id,t.fetchImage=function(t){return gp(this,void 0,void 0,(function(){var e,n;return vp(this,(function(r){switch(r.label){case 0:return[4,Nd(t)];case 1:return[4,(e=r.sent()).blob()];case 2:if(!(n=r.sent()).type.startsWith("image/"))throw new Error("fetchImage - expected blob type to be of type image/*, instead have: "+n.type+", for url: "+e.url);return[2,yd(n)]}}))}))},t.fetchJson=Td,t.fetchNetWeights=function(t){return gp(this,void 0,void 0,(function(){var e;return vp(this,(function(n){switch(n.label){case 0:return e=Float32Array.bind,[4,Nd(t)];case 1:return[4,n.sent().arrayBuffer()];case 2:return[2,new(e.apply(Float32Array,[void 0,n.sent()]))]}}))}))},t.fetchOrThrow=Nd,t.getContext2dOrThrow=pd,t.getMediaDimensions=wd,t.imageTensorToCanvas=_d,t.imageToSquare=Sd,t.inverseSigmoid=function(t){return Math.log(t/(1-t))},t.iou=Op,t.isMediaElement=Ed,t.isMediaLoaded=vd,t.isWithAge=function(t){return"number"==typeof t.age},t.isWithFaceDetection=td,t.isWithFaceExpressions=rf,t.isWithFaceLandmarks=af,t.isWithGender=function(e){return(e.gender===t.Gender.MALE||e.gender===t.Gender.FEMALE)&&Ap(e.genderProbability)},t.loadAgeGenderModel=function(t){return Sm.ageGenderNet.load(t)},t.loadFaceDetectionModel=Mm,t.loadFaceExpressionModel=function(t){return Sm.faceExpressionNet.load(t)},t.loadFaceLandmarkModel=function(t){return Sm.faceLandmark68Net.load(t)},t.loadFaceLandmarkTinyModel=function(t){return Sm.faceLandmark68TinyNet.load(t)},t.loadFaceRecognitionModel=function(t){return Sm.faceRecognitionNet.load(t)},t.loadMtcnnModel=function(t){return Sm.mtcnn.load(t)},t.loadSsdMobilenetv1Model=Im,t.loadTinyFaceDetectorModel=function(t){return Sm.tinyFaceDetector.load(t)},t.loadTinyYolov2Model=function(t){return Sm.tinyYolov2.load(t)},t.loadWeightMap=Pd,t.locateFaces=Nm,t.matchDimensions=function(t,e,n){void 0===n&&(n=!1);var r=n?wd(e):e,o=r.width,a=r.height;return t.width=o,t.height=a,{width:o,height:a}},t.minBbox=zp,t.mtcnn=function(t,e){return Sm.mtcnn.forward(t,e)},t.nets=Sm,t.nonMaxSuppression=Wp,t.normalize=qp,t.padToSquare=jp,t.predictAgeAndGender=function(t){return Sm.ageGenderNet.predictAgeAndGender(t)},t.recognizeFaceExpressions=function(t){return Sm.faceExpressionNet.predictExpressions(t)},t.resizeResults=function t(e,n){var r=new yp(n.width,n.height),o=r.width,a=r.height;if(o<=0||a<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:o,height:a}));if(Array.isArray(e))return e.map((function(e){return t(e,{width:o,height:a})}));if(af(e)){var s=e.detection.forSize(o,a),i=e.unshiftedLandmarks.forSize(s.box.width,s.box.height);return sf(ed(e,s),i)}return td(e)?ed(e,e.detection.forSize(o,a)):e instanceof Up||e instanceof Lp?e.forSize(o,a):e},t.resolveInput=hd,t.shuffleArray=function(t){for(var e=t.slice(),n=e.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),o=e[n];e[n]=e[r],e[r]=o}return e},t.sigmoid=Gp,t.ssdMobilenetv1=Dm,t.tf=hp,t.tinyFaceDetector=function(t,e){return Sm.tinyFaceDetector.locateFaces(t,e)},t.tinyYolov2=function(t,e){return Sm.tinyYolov2.locateFaces(t,e)},t.toNetInput=Fd,t.utils=Pp,t.validateConfig=Xf,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=face-api.js.map
