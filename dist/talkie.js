/*! talkie - v0.7.1 */!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Talkie=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){(function(global){"use strict";if(global._babelPolyfill){throw new Error("only one instance of babel/polyfill is allowed")}global._babelPolyfill=true;require("core-js/shim");require("regenerator-babel/runtime")}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"core-js/shim":2,"regenerator-babel/runtime":3}],2:[function(require,module,exports){!function(global,framework,undefined){"use strict";var OBJECT="Object",FUNCTION="Function",ARRAY="Array",STRING="String",NUMBER="Number",REGEXP="RegExp",DATE="Date",MAP="Map",SET="Set",WEAKMAP="WeakMap",WEAKSET="WeakSet",SYMBOL="Symbol",PROMISE="Promise",MATH="Math",ARGUMENTS="Arguments",PROTOTYPE="prototype",CONSTRUCTOR="constructor",TO_STRING="toString",TO_STRING_TAG=TO_STRING+"Tag",TO_LOCALE="toLocaleString",HAS_OWN="hasOwnProperty",FOR_EACH="forEach",ITERATOR="iterator",FF_ITERATOR="@@"+ITERATOR,PROCESS="process",CREATE_ELEMENT="createElement",Function=global[FUNCTION],Object=global[OBJECT],Array=global[ARRAY],String=global[STRING],Number=global[NUMBER],RegExp=global[REGEXP],Date=global[DATE],Map=global[MAP],Set=global[SET],WeakMap=global[WEAKMAP],WeakSet=global[WEAKSET],Symbol=global[SYMBOL],Math=global[MATH],TypeError=global.TypeError,RangeError=global.RangeError,setTimeout=global.setTimeout,setImmediate=global.setImmediate,clearImmediate=global.clearImmediate,parseInt=global.parseInt,isFinite=global.isFinite,process=global[PROCESS],nextTick=process&&process.nextTick,document=global.document,html=document&&document.documentElement,navigator=global.navigator,define=global.define,console=global.console||{},ArrayProto=Array[PROTOTYPE],ObjectProto=Object[PROTOTYPE],FunctionProto=Function[PROTOTYPE],Infinity=1/0,DOT=".";function isObject(it){return it!==null&&(typeof it=="object"||typeof it=="function")}function isFunction(it){return typeof it=="function"}var isNative=ctx(/./.test,/\[native code\]\s*\}\s*$/,1);var toString=ObjectProto[TO_STRING];function setToStringTag(it,tag,stat){if(it&&!has(it=stat?it:it[PROTOTYPE],SYMBOL_TAG))hidden(it,SYMBOL_TAG,tag)}function cof(it){return toString.call(it).slice(8,-1)}function classof(it){var O,T;return it==undefined?it===undefined?"Undefined":"Null":typeof(T=(O=Object(it))[SYMBOL_TAG])=="string"?T:cof(O)}var call=FunctionProto.call,apply=FunctionProto.apply,REFERENCE_GET;function part(){var fn=assertFunction(this),length=arguments.length,args=Array(length),i=0,_=path._,holder=false;while(length>i)if((args[i]=arguments[i++])===_)holder=true;return function(){var that=this,_length=arguments.length,i=0,j=0,_args;if(!holder&&!_length)return invoke(fn,args,that);_args=args.slice();if(holder)for(;length>i;i++)if(_args[i]===_)_args[i]=arguments[j++];while(_length>j)_args.push(arguments[j++]);return invoke(fn,_args,that)}}function ctx(fn,that,length){assertFunction(fn);if(~length&&that===undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}function invoke(fn,args,that){var un=that===undefined;switch(args.length|0){case 0:return un?fn():fn.call(that);case 1:return un?fn(args[0]):fn.call(that,args[0]);case 2:return un?fn(args[0],args[1]):fn.call(that,args[0],args[1]);case 3:return un?fn(args[0],args[1],args[2]):fn.call(that,args[0],args[1],args[2]);case 4:return un?fn(args[0],args[1],args[2],args[3]):fn.call(that,args[0],args[1],args[2],args[3]);case 5:return un?fn(args[0],args[1],args[2],args[3],args[4]):fn.call(that,args[0],args[1],args[2],args[3],args[4])}return fn.apply(that,args)}var create=Object.create,getPrototypeOf=Object.getPrototypeOf,setPrototypeOf=Object.setPrototypeOf,defineProperty=Object.defineProperty,defineProperties=Object.defineProperties,getOwnDescriptor=Object.getOwnPropertyDescriptor,getKeys=Object.keys,getNames=Object.getOwnPropertyNames,getSymbols=Object.getOwnPropertySymbols,isFrozen=Object.isFrozen,has=ctx(call,ObjectProto[HAS_OWN],2),ES5Object=Object,Dict;function toObject(it){return ES5Object(assertDefined(it))}function returnIt(it){return it}function returnThis(){return this}function get(object,key){if(has(object,key))return object[key]}function ownKeys(it){assertObject(it);return getSymbols?getNames(it).concat(getSymbols(it)):getNames(it)}var assign=Object.assign||function(target,source){var T=Object(assertDefined(target)),l=arguments.length,i=1;while(l>i){var S=ES5Object(arguments[i++]),keys=getKeys(S),length=keys.length,j=0,key;while(length>j)T[key=keys[j++]]=S[key]}return T};function keyOf(object,el){var O=toObject(object),keys=getKeys(O),length=keys.length,index=0,key;while(length>index)if(O[key=keys[index++]]===el)return key}function array(it){return String(it).split(",")}var push=ArrayProto.push,unshift=ArrayProto.unshift,slice=ArrayProto.slice,splice=ArrayProto.splice,indexOf=ArrayProto.indexOf,forEach=ArrayProto[FOR_EACH];function createArrayMethod(type){var isMap=type==1,isFilter=type==2,isSome=type==3,isEvery=type==4,isFindIndex=type==6,noholes=type==5||isFindIndex;return function(callbackfn){var O=Object(assertDefined(this)),that=arguments[1],self=ES5Object(O),f=ctx(callbackfn,that,3),length=toLength(self.length),index=0,result=isMap?Array(length):isFilter?[]:undefined,val,res;for(;length>index;index++)if(noholes||index in self){val=self[index];res=f(val,index,O);if(type){if(isMap)result[index]=res;else if(res)switch(type){case 3:return true;case 5:return val;case 6:return index;case 2:result.push(val)}else if(isEvery)return false}}return isFindIndex?-1:isSome||isEvery?isEvery:result}}function createArrayContains(isContains){return function(el){var O=toObject(this),length=toLength(O.length),index=toIndex(arguments[1],length);if(isContains&&el!=el){for(;length>index;index++)if(sameNaN(O[index]))return isContains||index}else for(;length>index;index++)if(isContains||index in O){if(O[index]===el)return isContains||index}return!isContains&&-1}}function generic(A,B){return typeof A=="function"?A:B}var MAX_SAFE_INTEGER=9007199254740991,pow=Math.pow,abs=Math.abs,ceil=Math.ceil,floor=Math.floor,max=Math.max,min=Math.min,random=Math.random,trunc=Math.trunc||function(it){return(it>0?floor:ceil)(it)};function sameNaN(number){return number!=number}function toInteger(it){return isNaN(it)?0:trunc(it)}function toLength(it){return it>0?min(toInteger(it),MAX_SAFE_INTEGER):0}function toIndex(index,length){var index=toInteger(index);return index<0?max(index+length,0):min(index,length)}function lz(num){return num>9?num:"0"+num}function createReplacer(regExp,replace,isStatic){var replacer=isObject(replace)?function(part){return replace[part]}:replace;return function(it){return String(isStatic?it:this).replace(regExp,replacer)}}function createPointAt(toString){return function(pos){var s=String(assertDefined(this)),i=toInteger(pos),l=s.length,a,b;if(i<0||i>=l)return toString?"":undefined;a=s.charCodeAt(i);return a<55296||a>56319||i+1===l||(b=s.charCodeAt(i+1))<56320||b>57343?toString?s.charAt(i):a:toString?s.slice(i,i+2):(a-55296<<10)+(b-56320)+65536}}var REDUCE_ERROR="Reduce of empty object with no initial value";function assert(condition,msg1,msg2){if(!condition)throw TypeError(msg2?msg1+msg2:msg1)}function assertDefined(it){if(it==undefined)throw TypeError("Function called on null or undefined");return it}function assertFunction(it){assert(isFunction(it),it," is not a function!");return it}function assertObject(it){assert(isObject(it),it," is not an object!");return it}function assertInstance(it,Constructor,name){assert(it instanceof Constructor,name,": use the 'new' operator!")}function descriptor(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value}}function simpleSet(object,key,value){object[key]=value;return object}function createDefiner(bitmap){return DESC?function(object,key,value){return defineProperty(object,key,descriptor(bitmap,value))}:simpleSet}function uid(key){return SYMBOL+"("+key+")_"+(++sid+random())[TO_STRING](36)}function getWellKnownSymbol(name,setter){return Symbol&&Symbol[name]||(setter?Symbol:safeSymbol)(SYMBOL+DOT+name)}var DESC=!!function(){try{return defineProperty({},"a",{get:function(){return 2}}).a==2}catch(e){}}(),sid=0,hidden=createDefiner(1),set=Symbol?simpleSet:hidden,safeSymbol=Symbol||uid;function assignHidden(target,src){for(var key in src)hidden(target,key,src[key]);return target}var SYMBOL_UNSCOPABLES=getWellKnownSymbol("unscopables"),ArrayUnscopables=ArrayProto[SYMBOL_UNSCOPABLES]||{},SYMBOL_TAG=getWellKnownSymbol(TO_STRING_TAG),SYMBOL_SPECIES=getWellKnownSymbol("species"),SYMBOL_ITERATOR;function setSpecies(C){if(DESC&&(framework||!isNative(C)))defineProperty(C,SYMBOL_SPECIES,{configurable:true,get:returnThis})}var NODE=cof(process)==PROCESS,core={},path=framework?global:core,old=global.core,exportGlobal,FORCED=1,GLOBAL=2,STATIC=4,PROTO=8,BIND=16,WRAP=32;function $define(type,name,source){var key,own,out,exp,isGlobal=type&GLOBAL,target=isGlobal?global:type&STATIC?global[name]:(global[name]||ObjectProto)[PROTOTYPE],exports=isGlobal?core:core[name]||(core[name]={});if(isGlobal)source=name;for(key in source){own=!(type&FORCED)&&target&&key in target&&(!isFunction(target[key])||isNative(target[key]));out=(own?target:source)[key];if(!framework&&isGlobal&&!isFunction(target[key]))exp=source[key];else if(type&BIND&&own)exp=ctx(out,global);else if(type&WRAP&&!framework&&target[key]==out){exp=function(param){return this instanceof out?new out(param):out(param)};exp[PROTOTYPE]=out[PROTOTYPE]}else exp=type&PROTO&&isFunction(out)?ctx(call,out):out;if(framework&&target&&!own){if(isGlobal)target[key]=out;else delete target[key]&&hidden(target,key,out)}if(exports[key]!=out)hidden(exports,key,exp)}}if(typeof module!="undefined"&&module.exports)module.exports=core;else if(isFunction(define)&&define.amd)define(function(){return core});else exportGlobal=true;if(exportGlobal||framework){core.noConflict=function(){global.core=old;return core};global.core=core}SYMBOL_ITERATOR=getWellKnownSymbol(ITERATOR);var ITER=safeSymbol("iter"),KEY=1,VALUE=2,Iterators={},IteratorPrototype={},BUGGY_ITERATORS="keys"in ArrayProto&&!("next"in[].keys());setIterator(IteratorPrototype,returnThis);function setIterator(O,value){hidden(O,SYMBOL_ITERATOR,value);FF_ITERATOR in ArrayProto&&hidden(O,FF_ITERATOR,value)}function createIterator(Constructor,NAME,next,proto){Constructor[PROTOTYPE]=create(proto||IteratorPrototype,{next:descriptor(1,next)});setToStringTag(Constructor,NAME+" Iterator")}function defineIterator(Constructor,NAME,value,DEFAULT){var proto=Constructor[PROTOTYPE],iter=get(proto,SYMBOL_ITERATOR)||get(proto,FF_ITERATOR)||DEFAULT&&get(proto,DEFAULT)||value;if(framework){setIterator(proto,iter);if(iter!==value){var iterProto=getPrototypeOf(iter.call(new Constructor));setToStringTag(iterProto,NAME+" Iterator",true);has(proto,FF_ITERATOR)&&setIterator(iterProto,returnThis)}}Iterators[NAME]=iter;Iterators[NAME+" Iterator"]=returnThis;return iter}function defineStdIterators(Base,NAME,Constructor,next,DEFAULT,IS_SET){function createIter(kind){return function(){return new Constructor(this,kind)}}createIterator(Constructor,NAME,next);var entries=createIter(KEY+VALUE),values=createIter(VALUE);if(DEFAULT==VALUE)values=defineIterator(Base,NAME,values,"values");else entries=defineIterator(Base,NAME,entries,"entries");if(DEFAULT){$define(PROTO+FORCED*BUGGY_ITERATORS,NAME,{entries:entries,keys:IS_SET?values:createIter(KEY),values:values})}}function iterResult(done,value){return{value:value,done:!!done}}function isIterable(it){var O=Object(it),Symbol=global[SYMBOL],hasExt=(Symbol&&Symbol[ITERATOR]||FF_ITERATOR)in O;return hasExt||SYMBOL_ITERATOR in O||has(Iterators,classof(O))}function getIterator(it){var Symbol=global[SYMBOL],ext=it[Symbol&&Symbol[ITERATOR]||FF_ITERATOR],getIter=ext||it[SYMBOL_ITERATOR]||Iterators[classof(it)];return assertObject(getIter.call(it))}function stepCall(fn,value,entries){return entries?invoke(fn,value):fn(value)}function checkDangerIterClosing(fn){var danger=true;var O={next:function(){throw 1},"return":function(){danger=false}};O[SYMBOL_ITERATOR]=returnThis;try{fn(O)}catch(e){}return danger}function closeIterator(iterator){var ret=iterator["return"];if(ret!==undefined)ret.call(iterator)}function safeIterClose(exec,iterator){try{exec(iterator)}catch(e){closeIterator(iterator);throw e}}function forOf(iterable,entries,fn,that){safeIterClose(function(iterator){var f=ctx(fn,that,entries?2:1),step;while(!(step=iterator.next()).done)if(stepCall(f,step.value,entries)===false){return closeIterator(iterator)}},getIterator(iterable))}!function(TAG,SymbolRegistry,AllSymbols,setter){if(!isNative(Symbol)){Symbol=function(description){assert(!(this instanceof Symbol),SYMBOL+" is not a "+CONSTRUCTOR);var tag=uid(description),sym=set(create(Symbol[PROTOTYPE]),TAG,tag);AllSymbols[tag]=sym;DESC&&setter&&defineProperty(ObjectProto,tag,{configurable:true,set:function(value){hidden(this,tag,value)}});return sym};hidden(Symbol[PROTOTYPE],TO_STRING,function(){return this[TAG]})}$define(GLOBAL+WRAP,{Symbol:Symbol});var symbolStatics={"for":function(key){return has(SymbolRegistry,key+="")?SymbolRegistry[key]:SymbolRegistry[key]=Symbol(key)},iterator:SYMBOL_ITERATOR||getWellKnownSymbol(ITERATOR),keyFor:part.call(keyOf,SymbolRegistry),species:SYMBOL_SPECIES,toStringTag:SYMBOL_TAG=getWellKnownSymbol(TO_STRING_TAG,true),unscopables:SYMBOL_UNSCOPABLES,pure:safeSymbol,set:set,useSetter:function(){setter=true},useSimple:function(){setter=false}};forEach.call(array("hasInstance,isConcatSpreadable,match,replace,search,split,toPrimitive"),function(it){symbolStatics[it]=getWellKnownSymbol(it)});$define(STATIC,SYMBOL,symbolStatics);setToStringTag(Symbol,SYMBOL);$define(STATIC+FORCED*!isNative(Symbol),OBJECT,{getOwnPropertyNames:function(it){var names=getNames(toObject(it)),result=[],key,i=0;while(names.length>i)has(AllSymbols,key=names[i++])||result.push(key);return result},getOwnPropertySymbols:function(it){var names=getNames(toObject(it)),result=[],key,i=0;while(names.length>i)has(AllSymbols,key=names[i++])&&result.push(AllSymbols[key]);return result}});setToStringTag(Math,MATH,true);setToStringTag(global.JSON,"JSON",true)}(safeSymbol("tag"),{},{},true);!function(){var objectStatic={assign:assign,is:function(x,y){return x===y?x!==0||1/x===1/y:x!=x&&y!=y}};"__proto__"in ObjectProto&&function(buggy,set){try{set=ctx(call,getOwnDescriptor(ObjectProto,"__proto__").set,2);set({},ArrayProto)}catch(e){buggy=true}objectStatic.setPrototypeOf=setPrototypeOf=setPrototypeOf||function(O,proto){assertObject(O);assert(proto===null||isObject(proto),proto,": can't set as prototype!");if(buggy)O.__proto__=proto;else set(O,proto);return O}}();$define(STATIC,OBJECT,objectStatic)}();!function(tmp){tmp[SYMBOL_TAG]=DOT;if(cof(tmp)!=DOT)hidden(ObjectProto,TO_STRING,function(){return"[object "+classof(this)+"]"})}({});!function(){function wrapObjectMethod(key,MODE){var fn=Object[key],exp=core[OBJECT][key],f=0,o={};if(!exp||isNative(exp)){o[key]=MODE==1?function(it){return isObject(it)?fn(it):it}:MODE==2?function(it){return isObject(it)?fn(it):true}:MODE==3?function(it){return isObject(it)?fn(it):false}:MODE==4?function(it,key){return fn(toObject(it),key)}:function(it){return fn(toObject(it))};try{fn(DOT)}catch(e){f=1}$define(STATIC+FORCED*f,OBJECT,o)}}wrapObjectMethod("freeze",1);wrapObjectMethod("seal",1);wrapObjectMethod("preventExtensions",1);wrapObjectMethod("isFrozen",2);wrapObjectMethod("isSealed",2);wrapObjectMethod("isExtensible",3);wrapObjectMethod("getOwnPropertyDescriptor",4);wrapObjectMethod("getPrototypeOf");wrapObjectMethod("keys");wrapObjectMethod("getOwnPropertyNames")}();!function(NAME){NAME in FunctionProto||DESC&&defineProperty(FunctionProto,NAME,{configurable:true,get:function(){var match=String(this).match(/^\s*function ([^ (]*)/),name=match?match[1]:"";has(this,NAME)||defineProperty(this,NAME,descriptor(5,name));return name},set:function(value){has(this,NAME)||defineProperty(this,NAME,descriptor(0,value))}})}("name");Number("0o1")&&Number("0b1")||function(_Number,NumberProto){function toNumber(it){if(isObject(it))it=toPrimitive(it);if(typeof it=="string"&&it.length>2&&it.charCodeAt(0)==48){var binary=false;switch(it.charCodeAt(1)){case 66:case 98:binary=true;case 79:case 111:return parseInt(it.slice(2),binary?2:8)}}return+it}function toPrimitive(it){var fn,val;if(isFunction(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val;if(isFunction(fn=it[TO_STRING])&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to number")}Number=function Number(it){return this instanceof Number?new _Number(toNumber(it)):toNumber(it)};forEach.call(DESC?getNames(_Number):array("MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY"),function(key){key in Number||defineProperty(Number,key,getOwnDescriptor(_Number,key))});Number[PROTOTYPE]=NumberProto;NumberProto[CONSTRUCTOR]=Number;hidden(global,NUMBER,Number)}(Number,Number[PROTOTYPE]);!function(isInteger){$define(STATIC,NUMBER,{EPSILON:pow(2,-52),isFinite:function(it){return typeof it=="number"&&isFinite(it)},isInteger:isInteger,isNaN:sameNaN,isSafeInteger:function(number){return isInteger(number)&&abs(number)<=MAX_SAFE_INTEGER},MAX_SAFE_INTEGER:MAX_SAFE_INTEGER,MIN_SAFE_INTEGER:-MAX_SAFE_INTEGER,parseFloat:parseFloat,parseInt:parseInt})}(Number.isInteger||function(it){return!isObject(it)&&isFinite(it)&&floor(it)===it});!function(){var E=Math.E,exp=Math.exp,log=Math.log,sqrt=Math.sqrt,sign=Math.sign||function(x){return(x=+x)==0||x!=x?x:x<0?-1:1};function asinh(x){return!isFinite(x=+x)||x==0?x:x<0?-asinh(-x):log(x+sqrt(x*x+1))}function expm1(x){return(x=+x)==0?x:x>-1e-6&&x<1e-6?x+x*x/2:exp(x)-1}$define(STATIC,MATH,{acosh:function(x){return(x=+x)<1?NaN:isFinite(x)?log(x/E+sqrt(x+1)*sqrt(x-1)/E)+1:x},asinh:asinh,atanh:function(x){return(x=+x)==0?x:log((1+x)/(1-x))/2},cbrt:function(x){return sign(x=+x)*pow(abs(x),1/3)},clz32:function(x){return(x>>>=0)?32-x[TO_STRING](2).length:32},cosh:function(x){return(exp(x=+x)+exp(-x))/2},expm1:expm1,fround:function(x){return new Float32Array([x])[0]},hypot:function(value1,value2){var sum=0,len1=arguments.length,len2=len1,args=Array(len1),larg=-Infinity,arg;while(len1--){arg=args[len1]=+arguments[len1];if(arg==Infinity||arg==-Infinity)return Infinity;if(arg>larg)larg=arg}larg=arg||1;while(len2--)sum+=pow(args[len2]/larg,2);return larg*sqrt(sum)},imul:function(x,y){var UInt16=65535,xn=+x,yn=+y,xl=UInt16&xn,yl=UInt16&yn;return 0|xl*yl+((UInt16&xn>>>16)*yl+xl*(UInt16&yn>>>16)<<16>>>0)},log1p:function(x){return(x=+x)>-1e-8&&x<1e-8?x-x*x/2:log(1+x)},log10:function(x){return log(x)/Math.LN10},log2:function(x){return log(x)/Math.LN2},sign:sign,sinh:function(x){return abs(x=+x)<1?(expm1(x)-expm1(-x))/2:(exp(x-1)-exp(-x-1))*(E/2)},tanh:function(x){var a=expm1(x=+x),b=expm1(-x);return a==Infinity?1:b==Infinity?-1:(a-b)/(exp(x)+exp(-x))},trunc:trunc})}();!function(fromCharCode){function assertNotRegExp(it){if(cof(it)==REGEXP)throw TypeError()}$define(STATIC,STRING,{fromCodePoint:function(x){var res=[],len=arguments.length,i=0,code;while(len>i){code=+arguments[i++];if(toIndex(code,1114111)!==code)throw RangeError(code+" is not a valid code point");res.push(code<65536?fromCharCode(code):fromCharCode(((code-=65536)>>10)+55296,code%1024+56320))}return res.join("")},raw:function(callSite){var raw=toObject(callSite.raw),len=toLength(raw.length),sln=arguments.length,res=[],i=0;while(len>i){res.push(String(raw[i++]));if(i<sln)res.push(String(arguments[i]))}return res.join("")}});$define(PROTO,STRING,{codePointAt:createPointAt(false),endsWith:function(searchString){assertNotRegExp(searchString);var that=String(assertDefined(this)),endPosition=arguments[1],len=toLength(that.length),end=endPosition===undefined?len:min(toLength(endPosition),len);searchString+="";return that.slice(end-searchString.length,end)===searchString},includes:function(searchString){assertNotRegExp(searchString);return!!~String(assertDefined(this)).indexOf(searchString,arguments[1])},repeat:function(count){var str=String(assertDefined(this)),res="",n=toInteger(count);if(0>n||n==Infinity)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(str+=str))if(n&1)res+=str;return res},startsWith:function(searchString){assertNotRegExp(searchString);var that=String(assertDefined(this)),index=toLength(min(arguments[1],that.length));searchString+="";return that.slice(index,index+searchString.length)===searchString}})}(String.fromCharCode);!function(){$define(STATIC+FORCED*checkDangerIterClosing(Array.from),ARRAY,{from:function(arrayLike){var O=Object(assertDefined(arrayLike)),mapfn=arguments[1],mapping=mapfn!==undefined,f=mapping?ctx(mapfn,arguments[2],2):undefined,index=0,length,result,step;if(isIterable(O)){result=new(generic(this,Array));safeIterClose(function(iterator){for(;!(step=iterator.next()).done;index++){result[index]=mapping?f(step.value,index):step.value}},getIterator(O))}else{result=new(generic(this,Array))(length=toLength(O.length));for(;length>index;index++){result[index]=mapping?f(O[index],index):O[index]}}result.length=index;return result}});$define(STATIC,ARRAY,{of:function(){var index=0,length=arguments.length,result=new(generic(this,Array))(length);while(length>index)result[index]=arguments[index++];result.length=length;return result}});setSpecies(Array)}();!function(){$define(PROTO,ARRAY,{copyWithin:function(target,start){var O=Object(assertDefined(this)),len=toLength(O.length),to=toIndex(target,len),from=toIndex(start,len),end=arguments[2],fin=end===undefined?len:toIndex(end,len),count=min(fin-from,len-to),inc=1;if(from<to&&to<from+count){inc=-1;from=from+count-1;to=to+count-1}while(count-->0){if(from in O)O[to]=O[from];else delete O[to];to+=inc;from+=inc}return O},fill:function(value){var O=Object(assertDefined(this)),length=toLength(O.length),index=toIndex(arguments[1],length),end=arguments[2],endPos=end===undefined?length:toIndex(end,length);while(endPos>index)O[index++]=value;return O},find:createArrayMethod(5),findIndex:createArrayMethod(6)});if(framework){forEach.call(array("find,findIndex,fill,copyWithin,entries,keys,values"),function(it){ArrayUnscopables[it]=true});SYMBOL_UNSCOPABLES in ArrayProto||hidden(ArrayProto,SYMBOL_UNSCOPABLES,ArrayUnscopables)}}();!function(at){defineStdIterators(Array,ARRAY,function(iterated,kind){set(this,ITER,{o:toObject(iterated),i:0,k:kind})},function(){var iter=this[ITER],O=iter.o,kind=iter.k,index=iter.i++;if(!O||index>=O.length){iter.o=undefined;return iterResult(1)}if(kind==KEY)return iterResult(0,index);if(kind==VALUE)return iterResult(0,O[index]);return iterResult(0,[index,O[index]])},VALUE);Iterators[ARGUMENTS]=Iterators[ARRAY];defineStdIterators(String,STRING,function(iterated){set(this,ITER,{o:String(iterated),i:0})},function(){var iter=this[ITER],O=iter.o,index=iter.i,point;if(index>=O.length)return iterResult(1);point=at.call(O,index);iter.i+=point.length;return iterResult(0,point)})}(createPointAt(true));DESC&&!function(RegExpProto,_RegExp){if(!function(){try{return RegExp(/a/g,"i")=="/a/i"}catch(e){}}()){RegExp=function RegExp(pattern,flags){return new _RegExp(cof(pattern)==REGEXP&&flags!==undefined?pattern.source:pattern,flags)};forEach.call(getNames(_RegExp),function(key){key in RegExp||defineProperty(RegExp,key,{configurable:true,get:function(){return _RegExp[key]},set:function(it){_RegExp[key]=it}})});RegExpProto[CONSTRUCTOR]=RegExp;RegExp[PROTOTYPE]=RegExpProto;hidden(global,REGEXP,RegExp)}if(/./g.flags!="g")defineProperty(RegExpProto,"flags",{configurable:true,get:createReplacer(/^.*\/(\w*)$/,"$1")});setSpecies(RegExp)}(RegExp[PROTOTYPE],RegExp);isFunction(setImmediate)&&isFunction(clearImmediate)||function(ONREADYSTATECHANGE){var postMessage=global.postMessage,addEventListener=global.addEventListener,MessageChannel=global.MessageChannel,counter=0,queue={},defer,channel,port;setImmediate=function(fn){var args=[],i=1;while(arguments.length>i)args.push(arguments[i++]);queue[++counter]=function(){invoke(isFunction(fn)?fn:Function(fn),args)};defer(counter);return counter};clearImmediate=function(id){delete queue[id]};function run(id){if(has(queue,id)){var fn=queue[id];delete queue[id];fn()}}function listner(event){run(event.data)}if(NODE){defer=function(id){nextTick(part.call(run,id))}}else if(addEventListener&&isFunction(postMessage)&&!global.importScripts){defer=function(id){postMessage(id,"*")};addEventListener("message",listner,false)}else if(isFunction(MessageChannel)){channel=new MessageChannel;port=channel.port2;channel.port1.onmessage=listner;defer=ctx(port.postMessage,port,1)}else if(document&&ONREADYSTATECHANGE in document[CREATE_ELEMENT]("script")){defer=function(id){html.appendChild(document[CREATE_ELEMENT]("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this);run(id)}}}else{defer=function(id){setTimeout(run,0,id)}}}("onreadystatechange");$define(GLOBAL+BIND,{setImmediate:setImmediate,clearImmediate:clearImmediate});!function(Promise,test){isFunction(Promise)&&isFunction(Promise.resolve)&&Promise.resolve(test=new Promise(function(){}))==test||function(asap,RECORD){function isThenable(it){var then;if(isObject(it))then=it.then;return isFunction(then)?then:false}function handledRejectionOrHasOnRejected(promise){var record=promise[RECORD],chain=record.c,i=0,react;if(record.h)return true;while(chain.length>i){react=chain[i++];if(react.fail||handledRejectionOrHasOnRejected(react.P))return true}}function notify(record,reject){var chain=record.c;if(reject||chain.length)asap(function(){var promise=record.p,value=record.v,ok=record.s==1,i=0;if(reject&&!handledRejectionOrHasOnRejected(promise)){setTimeout(function(){if(!handledRejectionOrHasOnRejected(promise)){if(NODE){if(!process.emit("unhandledRejection",value,promise)){}}else if(isFunction(console.error)){console.error("Unhandled promise rejection",value)}}},1e3)}else while(chain.length>i)!function(react){var cb=ok?react.ok:react.fail,ret,then;try{if(cb){if(!ok)record.h=true;ret=cb===true?value:cb(value);if(ret===react.P){react.rej(TypeError(PROMISE+"-chain cycle"))}else if(then=isThenable(ret)){then.call(ret,react.res,react.rej)}else react.res(ret)}else react.rej(value)}catch(err){react.rej(err)}}(chain[i++]);chain.length=0})}function resolve(value){var record=this,then,wrapper;if(record.d)return;record.d=true;record=record.r||record;try{if(then=isThenable(value)){wrapper={r:record,d:false};then.call(value,ctx(resolve,wrapper,1),ctx(reject,wrapper,1))}else{record.v=value;record.s=1;notify(record)}}catch(err){reject.call(wrapper||{r:record,d:false},err)}}function reject(value){var record=this;if(record.d)return;record.d=true;record=record.r||record;record.v=value;record.s=2;notify(record,true)}function getConstructor(C){var S=assertObject(C)[SYMBOL_SPECIES];return S!=undefined?S:C}Promise=function(executor){assertFunction(executor);assertInstance(this,Promise,PROMISE);var record={p:this,c:[],s:0,d:false,v:undefined,h:false};hidden(this,RECORD,record);try{executor(ctx(resolve,record,1),ctx(reject,record,1))}catch(err){reject.call(record,err)}};assignHidden(Promise[PROTOTYPE],{then:function(onFulfilled,onRejected){var S=assertObject(assertObject(this)[CONSTRUCTOR])[SYMBOL_SPECIES];var react={ok:isFunction(onFulfilled)?onFulfilled:true,fail:isFunction(onRejected)?onRejected:false},P=react.P=new(S!=undefined?S:Promise)(function(resolve,reject){react.res=assertFunction(resolve);react.rej=assertFunction(reject)}),record=this[RECORD];record.c.push(react);record.s&&notify(record);return P},"catch":function(onRejected){return this.then(undefined,onRejected)}});assignHidden(Promise,{all:function(iterable){var Promise=getConstructor(this),values=[];return new Promise(function(resolve,reject){forOf(iterable,false,push,values);var remaining=values.length,results=Array(remaining);if(remaining)forEach.call(values,function(promise,index){Promise.resolve(promise).then(function(value){results[index]=value;--remaining||resolve(results)},reject)});else resolve(results)})},race:function(iterable){var Promise=getConstructor(this);return new Promise(function(resolve,reject){forOf(iterable,false,function(promise){Promise.resolve(promise).then(resolve,reject)})})},reject:function(r){return new(getConstructor(this))(function(resolve,reject){reject(r)})},resolve:function(x){return isObject(x)&&RECORD in x&&getPrototypeOf(x)===this[PROTOTYPE]?x:new(getConstructor(this))(function(resolve,reject){resolve(x)})}})}(nextTick||setImmediate,safeSymbol("record"));setToStringTag(Promise,PROMISE);setSpecies(Promise);$define(GLOBAL+FORCED*!isNative(Promise),{Promise:Promise})}(global[PROMISE]);!function(){var UID=safeSymbol("uid"),O1=safeSymbol("O1"),WEAK=safeSymbol("weak"),LEAK=safeSymbol("leak"),LAST=safeSymbol("last"),FIRST=safeSymbol("first"),SIZE=DESC?safeSymbol("size"):"size",uid=0,tmp={};function getCollection(C,NAME,methods,commonMethods,isMap,isWeak){var ADDER=isMap?"set":"add",proto=C&&C[PROTOTYPE],O={};function initFromIterable(that,iterable){if(iterable!=undefined)forOf(iterable,isMap,that[ADDER],that);return that}function fixSVZ(key,chain){var method=proto[key];if(framework)proto[key]=function(a,b){var result=method.call(this,a===0?0:a,b);return chain?this:result}}if(!isNative(C)||!(isWeak||!BUGGY_ITERATORS&&has(proto,FOR_EACH)&&has(proto,"entries"))){C=isWeak?function(iterable){assertInstance(this,C,NAME);set(this,UID,uid++);initFromIterable(this,iterable)}:function(iterable){var that=this;assertInstance(that,C,NAME);set(that,O1,create(null));set(that,SIZE,0);set(that,LAST,undefined);set(that,FIRST,undefined);initFromIterable(that,iterable)};assignHidden(assignHidden(C[PROTOTYPE],methods),commonMethods);isWeak||!DESC||defineProperty(C[PROTOTYPE],"size",{get:function(){return assertDefined(this[SIZE])}})}else{var Native=C,inst=new C,chain=inst[ADDER](isWeak?{}:-0,1),buggyZero;if(checkDangerIterClosing(function(O){new C(O)})){C=function(iterable){assertInstance(this,C,NAME);return initFromIterable(new Native,iterable)};C[PROTOTYPE]=proto;if(framework)proto[CONSTRUCTOR]=C}isWeak||inst[FOR_EACH](function(val,key){buggyZero=1/key===-Infinity});if(buggyZero){fixSVZ("delete");fixSVZ("has");isMap&&fixSVZ("get")}if(buggyZero||chain!==inst)fixSVZ(ADDER,true)}setToStringTag(C,NAME);setSpecies(C);O[NAME]=C;$define(GLOBAL+WRAP+FORCED*!isNative(C),O);isWeak||defineStdIterators(C,NAME,function(iterated,kind){set(this,ITER,{o:iterated,k:kind})},function(){var iter=this[ITER],kind=iter.k,entry=iter.l;while(entry&&entry.r)entry=entry.p;if(!iter.o||!(iter.l=entry=entry?entry.n:iter.o[FIRST])){iter.o=undefined;return iterResult(1)}if(kind==KEY)return iterResult(0,entry.k);if(kind==VALUE)return iterResult(0,entry.v);return iterResult(0,[entry.k,entry.v])},isMap?KEY+VALUE:VALUE,!isMap);return C}function fastKey(it,create){if(!isObject(it))return(typeof it=="string"?"S":"P")+it;if(isFrozen(it))return"F";if(!has(it,UID)){if(!create)return"E";hidden(it,UID,++uid)}return"O"+it[UID]}function getEntry(that,key){var index=fastKey(key),entry;if(index!="F")return that[O1][index];for(entry=that[FIRST];entry;entry=entry.n){if(entry.k==key)return entry}}function def(that,key,value){var entry=getEntry(that,key),prev,index;if(entry)entry.v=value;else{that[LAST]=entry={i:index=fastKey(key,true),k:key,v:value,p:prev=that[LAST],n:undefined,r:false};if(!that[FIRST])that[FIRST]=entry;if(prev)prev.n=entry;that[SIZE]++;if(index!="F")that[O1][index]=entry}return that}var collectionMethods={clear:function(){for(var that=this,data=that[O1],entry=that[FIRST];entry;entry=entry.n){entry.r=true;
if(entry.p)entry.p=entry.p.n=undefined;delete data[entry.i]}that[FIRST]=that[LAST]=undefined;that[SIZE]=0},"delete":function(key){var that=this,entry=getEntry(that,key);if(entry){var next=entry.n,prev=entry.p;delete that[O1][entry.i];entry.r=true;if(prev)prev.n=next;if(next)next.p=prev;if(that[FIRST]==entry)that[FIRST]=next;if(that[LAST]==entry)that[LAST]=prev;that[SIZE]--}return!!entry},forEach:function(callbackfn){var f=ctx(callbackfn,arguments[1],3),entry;while(entry=entry?entry.n:this[FIRST]){f(entry.v,entry.k,this);while(entry&&entry.r)entry=entry.p}},has:function(key){return!!getEntry(this,key)}};Map=getCollection(Map,MAP,{get:function(key){var entry=getEntry(this,key);return entry&&entry.v},set:function(key,value){return def(this,key===0?0:key,value)}},collectionMethods,true);Set=getCollection(Set,SET,{add:function(value){return def(this,value=value===0?0:value,value)}},collectionMethods);function defWeak(that,key,value){if(isFrozen(assertObject(key)))leakStore(that).set(key,value);else{has(key,WEAK)||hidden(key,WEAK,{});key[WEAK][that[UID]]=value}return that}function leakStore(that){return that[LEAK]||hidden(that,LEAK,new Map)[LEAK]}var weakMethods={"delete":function(key){if(!isObject(key))return false;if(isFrozen(key))return leakStore(this)["delete"](key);return has(key,WEAK)&&has(key[WEAK],this[UID])&&delete key[WEAK][this[UID]]},has:function(key){if(!isObject(key))return false;if(isFrozen(key))return leakStore(this).has(key);return has(key,WEAK)&&has(key[WEAK],this[UID])}};WeakMap=getCollection(WeakMap,WEAKMAP,{get:function(key){if(isObject(key)){if(isFrozen(key))return leakStore(this).get(key);if(has(key,WEAK))return key[WEAK][this[UID]]}},set:function(key,value){return defWeak(this,key,value)}},weakMethods,true,true);if(framework&&(new WeakMap).set(Object.freeze(tmp),7).get(tmp)!=7){forEach.call(array("delete,has,get,set"),function(key){var method=WeakMap[PROTOTYPE][key];WeakMap[PROTOTYPE][key]=function(a,b){if(isObject(a)&&isFrozen(a)){var result=leakStore(this)[key](a,b);return key=="set"?this:result}return method.call(this,a,b)}})}WeakSet=getCollection(WeakSet,WEAKSET,{add:function(value){return defWeak(this,value,true)}},weakMethods,false,true)}();!function(){function Enumerate(iterated){var keys=[],key;for(key in iterated)keys.push(key);set(this,ITER,{o:iterated,a:keys,i:0})}createIterator(Enumerate,OBJECT,function(){var iter=this[ITER],keys=iter.a,key;do{if(iter.i>=keys.length)return iterResult(1)}while(!((key=keys[iter.i++])in iter.o));return iterResult(0,key)});function wrap(fn){return function(it){assertObject(it);try{return fn.apply(undefined,arguments),true}catch(e){return false}}}function reflectGet(target,propertyKey){var receiver=arguments.length<3?target:arguments[2],desc=getOwnDescriptor(assertObject(target),propertyKey),proto;if(desc)return has(desc,"value")?desc.value:desc.get===undefined?undefined:desc.get.call(receiver);return isObject(proto=getPrototypeOf(target))?reflectGet(proto,propertyKey,receiver):undefined}function reflectSet(target,propertyKey,V){var receiver=arguments.length<4?target:arguments[3],ownDesc=getOwnDescriptor(assertObject(target),propertyKey),existingDescriptor,proto;if(!ownDesc){if(isObject(proto=getPrototypeOf(target))){return reflectSet(proto,propertyKey,V,receiver)}ownDesc=descriptor(0)}if(has(ownDesc,"value")){if(ownDesc.writable===false||!isObject(receiver))return false;existingDescriptor=getOwnDescriptor(receiver,propertyKey)||descriptor(0);existingDescriptor.value=V;return defineProperty(receiver,propertyKey,existingDescriptor),true}return ownDesc.set===undefined?false:(ownDesc.set.call(receiver,V),true)}var isExtensible=Object.isExtensible||returnIt;var reflect={apply:ctx(call,apply,3),construct:function(target,argumentsList){var proto=assertFunction(arguments.length<3?target:arguments[2])[PROTOTYPE],instance=create(isObject(proto)?proto:ObjectProto),result=apply.call(target,instance,argumentsList);return isObject(result)?result:instance},defineProperty:wrap(defineProperty),deleteProperty:function(target,propertyKey){var desc=getOwnDescriptor(assertObject(target),propertyKey);return desc&&!desc.configurable?false:delete target[propertyKey]},enumerate:function(target){return new Enumerate(assertObject(target))},get:reflectGet,getOwnPropertyDescriptor:function(target,propertyKey){return getOwnDescriptor(assertObject(target),propertyKey)},getPrototypeOf:function(target){return getPrototypeOf(assertObject(target))},has:function(target,propertyKey){return propertyKey in target},isExtensible:function(target){return!!isExtensible(assertObject(target))},ownKeys:ownKeys,preventExtensions:wrap(Object.preventExtensions||returnIt),set:reflectSet};if(setPrototypeOf)reflect.setPrototypeOf=function(target,proto){return setPrototypeOf(assertObject(target),proto),true};$define(GLOBAL,{Reflect:{}});$define(STATIC,"Reflect",reflect)}();!function(){$define(PROTO,ARRAY,{includes:createArrayContains(true)});$define(PROTO,STRING,{at:createPointAt(true)});function createObjectToArray(isEntries){return function(object){var O=toObject(object),keys=getKeys(object),length=keys.length,i=0,result=Array(length),key;if(isEntries)while(length>i)result[i]=[key=keys[i++],O[key]];else while(length>i)result[i]=O[keys[i++]];return result}}$define(STATIC,OBJECT,{getOwnPropertyDescriptors:function(object){var O=toObject(object),result={};forEach.call(ownKeys(O),function(key){defineProperty(result,key,descriptor(0,getOwnDescriptor(O,key)))});return result},values:createObjectToArray(false),entries:createObjectToArray(true)});$define(STATIC,REGEXP,{escape:createReplacer(/([\\\-[\]{}()*+?.,^$|])/g,"\\$1",true)})}();!function(REFERENCE){REFERENCE_GET=getWellKnownSymbol(REFERENCE+"Get",true);var REFERENCE_SET=getWellKnownSymbol(REFERENCE+SET,true),REFERENCE_DELETE=getWellKnownSymbol(REFERENCE+"Delete",true);$define(STATIC,SYMBOL,{referenceGet:REFERENCE_GET,referenceSet:REFERENCE_SET,referenceDelete:REFERENCE_DELETE});hidden(FunctionProto,REFERENCE_GET,returnThis);function setMapMethods(Constructor){if(Constructor){var MapProto=Constructor[PROTOTYPE];hidden(MapProto,REFERENCE_GET,MapProto.get);hidden(MapProto,REFERENCE_SET,MapProto.set);hidden(MapProto,REFERENCE_DELETE,MapProto["delete"])}}setMapMethods(Map);setMapMethods(WeakMap)}("reference");!function(arrayStatics){function setArrayStatics(keys,length){forEach.call(array(keys),function(key){if(key in ArrayProto)arrayStatics[key]=ctx(call,ArrayProto[key],length)})}setArrayStatics("pop,reverse,shift,keys,values,entries",1);setArrayStatics("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3);setArrayStatics("join,slice,concat,push,splice,unshift,sort,lastIndexOf,"+"reduce,reduceRight,copyWithin,fill,turn");$define(STATIC,ARRAY,arrayStatics)}({});!function(NodeList){if(framework&&NodeList&&!(SYMBOL_ITERATOR in NodeList[PROTOTYPE])){hidden(NodeList[PROTOTYPE],SYMBOL_ITERATOR,Iterators[ARRAY])}Iterators.NodeList=Iterators[ARRAY]}(global.NodeList)}(typeof self!="undefined"&&self.Math===Math?self:Function("return this")(),true)},{}],3:[function(require,module,exports){(function(global){!function(global){"use strict";var hasOwn=Object.prototype.hasOwnProperty;var undefined;var iteratorSymbol=typeof Symbol==="function"&&Symbol.iterator||"@@iterator";var inModule=typeof module==="object";var runtime=global.regeneratorRuntime;if(runtime){if(inModule){module.exports=runtime}return}runtime=global.regeneratorRuntime=inModule?module.exports:{};function wrap(innerFn,outerFn,self,tryLocsList){return new Generator(innerFn,outerFn,self||null,tryLocsList||[])}runtime.wrap=wrap;function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";var ContinueSentinel={};function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype;GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunction.displayName="GeneratorFunction";runtime.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||(ctor.displayName||ctor.name)==="GeneratorFunction":false};runtime.mark=function(genFun){genFun.__proto__=GeneratorFunctionPrototype;genFun.prototype=Object.create(Gp);return genFun};runtime.async=function(innerFn,outerFn,self,tryLocsList){return new Promise(function(resolve,reject){var generator=wrap(innerFn,outerFn,self,tryLocsList);var callNext=step.bind(generator.next);var callThrow=step.bind(generator["throw"]);function step(arg){var record=tryCatch(this,null,arg);if(record.type==="throw"){reject(record.arg);return}var info=record.arg;if(info.done){resolve(info.value)}else{Promise.resolve(info.value).then(callNext,callThrow)}}callNext()})};function Generator(innerFn,outerFn,self,tryLocsList){var generator=outerFn?Object.create(outerFn.prototype):this;var context=new Context(tryLocsList);var state=GenStateSuspendedStart;function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running")}if(state===GenStateCompleted){return doneResult()}while(true){var delegate=context.delegate;if(delegate){var record=tryCatch(delegate.iterator[method],delegate.iterator,arg);if(record.type==="throw"){context.delegate=null;method="throw";arg=record.arg;continue}method="next";arg=undefined;var info=record.arg;if(info.done){context[delegate.resultName]=info.value;context.next=delegate.nextLoc}else{state=GenStateSuspendedYield;return info}context.delegate=null}if(method==="next"){if(state===GenStateSuspendedStart&&typeof arg!=="undefined"){throw new TypeError("attempt to send "+JSON.stringify(arg)+" to newborn generator")}if(state===GenStateSuspendedYield){context.sent=arg}else{delete context.sent}}else if(method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw arg}if(context.dispatchException(arg)){method="next";arg=undefined}}else if(method==="return"){context.abrupt("return",arg)}state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){state=context.done?GenStateCompleted:GenStateSuspendedYield;var info={value:record.arg,done:context.done};if(record.arg===ContinueSentinel){if(context.delegate&&method==="next"){arg=undefined}}else{return info}}else if(record.type==="throw"){state=GenStateCompleted;if(method==="next"){context.dispatchException(record.arg)}else{arg=record.arg}}}}generator.next=invoke.bind(generator,"next");generator["throw"]=invoke.bind(generator,"throw");generator["return"]=invoke.bind(generator,"return");return generator}Gp[iteratorSymbol]=function(){return this};Gp.toString=function(){return"[object Generator]"};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1]}if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3]}this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset()}runtime.keys=function(object){var keys=[];for(var key in object){keys.push(key)}keys.reverse();return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next}}next.done=true;return next}};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable)}if(typeof iterable.next==="function"){return iterable}if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next}}next.value=undefined;next.done=true;return next};return next.next=next}}return{next:doneResult}}runtime.values=values;function doneResult(){return{value:undefined,done:true}}Context.prototype={constructor:Context,reset:function(){this.prev=0;this.next=0;this.sent=undefined;this.done=false;this.delegate=null;this.tryEntries.forEach(resetTryEntry);for(var tempIndex=0,tempName;hasOwn.call(this,tempName="t"+tempIndex)||tempIndex<20;++tempIndex){this[tempName]=null}},stop:function(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg}return this.rval},dispatchException:function(exception){if(this.done){throw exception}var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;return!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){return handle("end")}if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true)}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc)}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true)}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc)}}else{throw new Error("try statement without catch or finally")}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<finallyEntry.finallyLoc){finallyEntry=null}var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.next=finallyEntry.finallyLoc}else{this.complete(record)}return ContinueSentinel},complete:function(record,afterLoc){if(record.type==="throw"){throw record.arg}if(record.type==="break"||record.type==="continue"){this.next=record.arg}else if(record.type==="return"){this.rval=record.arg;this.next="end"}else if(record.type==="normal"&&afterLoc){this.next=afterLoc}return ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){return this.complete(entry.completion,entry.afterLoc)}}},"catch":function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};return ContinueSentinel}}}(typeof global==="object"?global:typeof window==="object"?window:this)}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}]},{},[1]);
},{}],2:[function(require,module,exports){
(function() {
  var Bacon, BufferingSource, Bus, CompositeUnsubscribe, ConsumingSource, Desc, Dispatcher, End, Error, Event, EventStream, Exception, Initial, Next, None, Observable, Property, PropertyDispatcher, Some, Source, UpdateBarrier, _, addPropertyInitValueToStream, assert, assertArray, assertEventStream, assertFunction, assertNoArguments, assertObservable, assertString, cloneArray, constantToFunction, containsDuplicateDeps, convertArgsToFunction, describe, endEvent, eventIdCounter, eventMethods, findDeps, findHandlerMethods, flatMap_, former, idCounter, initialEvent, isArray, isFieldKey, isObservable, latter, liftCallback, makeFunction, makeFunctionArgs, makeFunction_, makeObservable, makeSpawner, nextEvent, nop, partiallyApplied, recursionDepth, ref, registerObs, spys, toCombinator, toEvent, toFieldExtractor, toFieldKey, toOption, toSimpleExtractor, valueAndEnd, withDescription, withMethodCallSupport,
    hasProp = {}.hasOwnProperty,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Bacon = {
    toString: function() {
      return "Bacon";
    }
  };

  Bacon.version = '0.7.53';

  Exception = (typeof global !== "undefined" && global !== null ? global : this).Error;

  nop = function() {};

  latter = function(_, x) {
    return x;
  };

  former = function(x, _) {
    return x;
  };

  cloneArray = function(xs) {
    return xs.slice(0);
  };

  assert = function(message, condition) {
    if (!condition) {
      throw new Exception(message);
    }
  };

  assertEventStream = function(event) {
    if (!(event instanceof EventStream)) {
      throw new Exception("not an EventStream : " + event);
    }
  };

  assertObservable = function(event) {
    if (!(event instanceof Observable)) {
      throw new Exception("not an Observable : " + event);
    }
  };

  assertFunction = function(f) {
    return assert("not a function : " + f, _.isFunction(f));
  };

  isArray = function(xs) {
    return xs instanceof Array;
  };

  isObservable = function(x) {
    return x instanceof Observable;
  };

  assertArray = function(xs) {
    if (!isArray(xs)) {
      throw new Exception("not an array : " + xs);
    }
  };

  assertNoArguments = function(args) {
    return assert("no arguments supported", args.length === 0);
  };

  assertString = function(x) {
    if (typeof x !== "string") {
      throw new Exception("not a string : " + x);
    }
  };

  _ = {
    indexOf: Array.prototype.indexOf ? function(xs, x) {
      return xs.indexOf(x);
    } : function(xs, x) {
      var i, j, len1, y;
      for (i = j = 0, len1 = xs.length; j < len1; i = ++j) {
        y = xs[i];
        if (x === y) {
          return i;
        }
      }
      return -1;
    },
    indexWhere: function(xs, f) {
      var i, j, len1, y;
      for (i = j = 0, len1 = xs.length; j < len1; i = ++j) {
        y = xs[i];
        if (f(y)) {
          return i;
        }
      }
      return -1;
    },
    head: function(xs) {
      return xs[0];
    },
    always: function(x) {
      return function() {
        return x;
      };
    },
    negate: function(f) {
      return function(x) {
        return !f(x);
      };
    },
    empty: function(xs) {
      return xs.length === 0;
    },
    tail: function(xs) {
      return xs.slice(1, xs.length);
    },
    filter: function(f, xs) {
      var filtered, j, len1, x;
      filtered = [];
      for (j = 0, len1 = xs.length; j < len1; j++) {
        x = xs[j];
        if (f(x)) {
          filtered.push(x);
        }
      }
      return filtered;
    },
    map: function(f, xs) {
      var j, len1, results, x;
      results = [];
      for (j = 0, len1 = xs.length; j < len1; j++) {
        x = xs[j];
        results.push(f(x));
      }
      return results;
    },
    each: function(xs, f) {
      var key, value;
      for (key in xs) {
        value = xs[key];
        f(key, value);
      }
      return void 0;
    },
    toArray: function(xs) {
      if (isArray(xs)) {
        return xs;
      } else {
        return [xs];
      }
    },
    contains: function(xs, x) {
      return _.indexOf(xs, x) !== -1;
    },
    id: function(x) {
      return x;
    },
    last: function(xs) {
      return xs[xs.length - 1];
    },
    all: function(xs, f) {
      var j, len1, x;
      if (f == null) {
        f = _.id;
      }
      for (j = 0, len1 = xs.length; j < len1; j++) {
        x = xs[j];
        if (!f(x)) {
          return false;
        }
      }
      return true;
    },
    any: function(xs, f) {
      var j, len1, x;
      if (f == null) {
        f = _.id;
      }
      for (j = 0, len1 = xs.length; j < len1; j++) {
        x = xs[j];
        if (f(x)) {
          return true;
        }
      }
      return false;
    },
    without: function(x, xs) {
      return _.filter((function(y) {
        return y !== x;
      }), xs);
    },
    remove: function(x, xs) {
      var i;
      i = _.indexOf(xs, x);
      if (i >= 0) {
        return xs.splice(i, 1);
      }
    },
    fold: function(xs, seed, f) {
      var j, len1, x;
      for (j = 0, len1 = xs.length; j < len1; j++) {
        x = xs[j];
        seed = f(seed, x);
      }
      return seed;
    },
    flatMap: function(f, xs) {
      return _.fold(xs, [], (function(ys, x) {
        return ys.concat(f(x));
      }));
    },
    cached: function(f) {
      var value;
      value = None;
      return function() {
        if (value === None) {
          value = f();
          f = void 0;
        }
        return value;
      };
    },
    isFunction: function(f) {
      return typeof f === "function";
    },
    toString: function(obj) {
      var ex, internals, key, value;
      try {
        recursionDepth++;
        if (obj == null) {
          return "undefined";
        } else if (_.isFunction(obj)) {
          return "function";
        } else if (isArray(obj)) {
          if (recursionDepth > 5) {
            return "[..]";
          }
          return "[" + _.map(_.toString, obj).toString() + "]";
        } else if (((obj != null ? obj.toString : void 0) != null) && obj.toString !== Object.prototype.toString) {
          return obj.toString();
        } else if (typeof obj === "object") {
          if (recursionDepth > 5) {
            return "{..}";
          }
          internals = (function() {
            var results;
            results = [];
            for (key in obj) {
              if (!hasProp.call(obj, key)) continue;
              value = (function() {
                try {
                  return obj[key];
                } catch (_error) {
                  ex = _error;
                  return ex;
                }
              })();
              results.push(_.toString(key) + ":" + _.toString(value));
            }
            return results;
          })();
          return "{" + internals + "}";
        } else {
          return obj;
        }
      } finally {
        recursionDepth--;
      }
    }
  };

  recursionDepth = 0;

  Bacon._ = _;

  UpdateBarrier = Bacon.UpdateBarrier = (function() {
    var afterTransaction, afters, aftersIndex, currentEventId, flush, flushDepsOf, flushWaiters, hasWaiters, inTransaction, rootEvent, waiterObs, waiters, whenDoneWith, wrappedSubscribe;
    rootEvent = void 0;
    waiterObs = [];
    waiters = {};
    afters = [];
    aftersIndex = 0;
    afterTransaction = function(f) {
      if (rootEvent) {
        return afters.push(f);
      } else {
        return f();
      }
    };
    whenDoneWith = function(obs, f) {
      var obsWaiters;
      if (rootEvent) {
        obsWaiters = waiters[obs.id];
        if (obsWaiters == null) {
          obsWaiters = waiters[obs.id] = [f];
          return waiterObs.push(obs);
        } else {
          return obsWaiters.push(f);
        }
      } else {
        return f();
      }
    };
    flush = function() {
      while (waiterObs.length > 0) {
        flushWaiters(0);
      }
      return void 0;
    };
    flushWaiters = function(index) {
      var f, j, len1, obs, obsId, obsWaiters;
      obs = waiterObs[index];
      obsId = obs.id;
      obsWaiters = waiters[obsId];
      waiterObs.splice(index, 1);
      delete waiters[obsId];
      flushDepsOf(obs);
      for (j = 0, len1 = obsWaiters.length; j < len1; j++) {
        f = obsWaiters[j];
        f();
      }
      return void 0;
    };
    flushDepsOf = function(obs) {
      var dep, deps, index, j, len1;
      deps = obs.internalDeps();
      for (j = 0, len1 = deps.length; j < len1; j++) {
        dep = deps[j];
        flushDepsOf(dep);
        if (waiters[dep.id]) {
          index = _.indexOf(waiterObs, dep);
          flushWaiters(index);
        }
      }
      return void 0;
    };
    inTransaction = function(event, context, f, args) {
      var after, result;
      if (rootEvent) {
        return f.apply(context, args);
      } else {
        rootEvent = event;
        try {
          result = f.apply(context, args);
          flush();
        } finally {
          rootEvent = void 0;
          while (aftersIndex < afters.length) {
            after = afters[aftersIndex];
            aftersIndex++;
            after();
          }
          aftersIndex = 0;
          afters = [];
        }
        return result;
      }
    };
    currentEventId = function() {
      if (rootEvent) {
        return rootEvent.id;
      } else {
        return void 0;
      }
    };
    wrappedSubscribe = function(obs, sink) {
      var doUnsub, shouldUnsub, unsub, unsubd;
      unsubd = false;
      shouldUnsub = false;
      doUnsub = function() {
        return shouldUnsub = true;
      };
      unsub = function() {
        unsubd = true;
        return doUnsub();
      };
      doUnsub = obs.dispatcher.subscribe(function(event) {
        return afterTransaction(function() {
          var reply;
          if (!unsubd) {
            reply = sink(event);
            if (reply === Bacon.noMore) {
              return unsub();
            }
          }
        });
      });
      if (shouldUnsub) {
        doUnsub();
      }
      return unsub;
    };
    hasWaiters = function() {
      return waiterObs.length > 0;
    };
    return {
      whenDoneWith: whenDoneWith,
      hasWaiters: hasWaiters,
      inTransaction: inTransaction,
      currentEventId: currentEventId,
      wrappedSubscribe: wrappedSubscribe,
      afterTransaction: afterTransaction
    };
  })();

  Source = (function() {
    function Source(obs1, sync, lazy1) {
      this.obs = obs1;
      this.sync = sync;
      this.lazy = lazy1 != null ? lazy1 : false;
      this.queue = [];
    }

    Source.prototype.subscribe = function(sink) {
      return this.obs.dispatcher.subscribe(sink);
    };

    Source.prototype.toString = function() {
      return this.obs.toString();
    };

    Source.prototype.markEnded = function() {
      return this.ended = true;
    };

    Source.prototype.consume = function() {
      if (this.lazy) {
        return {
          value: _.always(this.queue[0])
        };
      } else {
        return this.queue[0];
      }
    };

    Source.prototype.push = function(x) {
      return this.queue = [x];
    };

    Source.prototype.mayHave = function() {
      return true;
    };

    Source.prototype.hasAtLeast = function() {
      return this.queue.length;
    };

    Source.prototype.flatten = true;

    return Source;

  })();

  ConsumingSource = (function(superClass) {
    extend(ConsumingSource, superClass);

    function ConsumingSource() {
      return ConsumingSource.__super__.constructor.apply(this, arguments);
    }

    ConsumingSource.prototype.consume = function() {
      return this.queue.shift();
    };

    ConsumingSource.prototype.push = function(x) {
      return this.queue.push(x);
    };

    ConsumingSource.prototype.mayHave = function(c) {
      return !this.ended || this.queue.length >= c;
    };

    ConsumingSource.prototype.hasAtLeast = function(c) {
      return this.queue.length >= c;
    };

    ConsumingSource.prototype.flatten = false;

    return ConsumingSource;

  })(Source);

  BufferingSource = (function(superClass) {
    extend(BufferingSource, superClass);

    function BufferingSource(obs) {
      BufferingSource.__super__.constructor.call(this, obs, true);
    }

    BufferingSource.prototype.consume = function() {
      var values;
      values = this.queue;
      this.queue = [];
      return {
        value: function() {
          return values;
        }
      };
    };

    BufferingSource.prototype.push = function(x) {
      return this.queue.push(x.value());
    };

    BufferingSource.prototype.hasAtLeast = function() {
      return true;
    };

    return BufferingSource;

  })(Source);

  Source.isTrigger = function(s) {
    if (s instanceof Source) {
      return s.sync;
    } else {
      return s instanceof EventStream;
    }
  };

  Source.fromObservable = function(s) {
    if (s instanceof Source) {
      return s;
    } else if (s instanceof Property) {
      return new Source(s, false);
    } else {
      return new ConsumingSource(s, true);
    }
  };

  Desc = (function() {
    function Desc(context1, method1, args1) {
      this.context = context1;
      this.method = method1;
      this.args = args1;
      this.cached = void 0;
    }

    Desc.prototype.deps = function() {
      return this.cached || (this.cached = findDeps([this.context].concat(this.args)));
    };

    Desc.prototype.apply = function(obs) {
      obs.desc = this;
      return obs;
    };

    Desc.prototype.toString = function() {
      return _.toString(this.context) + "." + _.toString(this.method) + "(" + _.map(_.toString, this.args) + ")";
    };

    return Desc;

  })();

  describe = function() {
    var args, context, method;
    context = arguments[0], method = arguments[1], args = 3 <= arguments.length ? slice.call(arguments, 2) : [];
    if ((context || method) instanceof Desc) {
      return context || method;
    } else {
      return new Desc(context, method, args);
    }
  };

  withDescription = function() {
    var desc, j, obs;
    desc = 2 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 1) : (j = 0, []), obs = arguments[j++];
    return describe.apply(null, desc).apply(obs);
  };

  findDeps = function(x) {
    if (isArray(x)) {
      return _.flatMap(findDeps, x);
    } else if (isObservable(x)) {
      return [x];
    } else if (x instanceof Source) {
      return [x.obs];
    } else {
      return [];
    }
  };

  withMethodCallSupport = function(wrapped) {
    return function() {
      var args, context, f, methodName;
      f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (typeof f === "object" && args.length) {
        context = f;
        methodName = args[0];
        f = function() {
          return context[methodName].apply(context, arguments);
        };
        args = args.slice(1);
      }
      return wrapped.apply(null, [f].concat(slice.call(args)));
    };
  };

  makeFunctionArgs = function(args) {
    args = Array.prototype.slice.call(args);
    return makeFunction_.apply(null, args);
  };

  partiallyApplied = function(f, applied) {
    return function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return f.apply(null, applied.concat(args));
    };
  };

  toSimpleExtractor = function(args) {
    return function(key) {
      return function(value) {
        var fieldValue;
        if (value == null) {
          return void 0;
        } else {
          fieldValue = value[key];
          if (_.isFunction(fieldValue)) {
            return fieldValue.apply(value, args);
          } else {
            return fieldValue;
          }
        }
      };
    };
  };

  toFieldExtractor = function(f, args) {
    var partFuncs, parts;
    parts = f.slice(1).split(".");
    partFuncs = _.map(toSimpleExtractor(args), parts);
    return function(value) {
      var j, len1;
      for (j = 0, len1 = partFuncs.length; j < len1; j++) {
        f = partFuncs[j];
        value = f(value);
      }
      return value;
    };
  };

  isFieldKey = function(f) {
    return (typeof f === "string") && f.length > 1 && f.charAt(0) === ".";
  };

  makeFunction_ = withMethodCallSupport(function() {
    var args, f;
    f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if (_.isFunction(f)) {
      if (args.length) {
        return partiallyApplied(f, args);
      } else {
        return f;
      }
    } else if (isFieldKey(f)) {
      return toFieldExtractor(f, args);
    } else {
      return _.always(f);
    }
  });

  makeFunction = function(f, args) {
    return makeFunction_.apply(null, [f].concat(slice.call(args)));
  };

  convertArgsToFunction = function(obs, f, args, method) {
    var sampled;
    if (f instanceof Property) {
      sampled = f.sampledBy(obs, function(p, s) {
        return [p, s];
      });
      return method.call(sampled, function(arg) {
        var p, s;
        p = arg[0], s = arg[1];
        return p;
      }).map(function(arg) {
        var p, s;
        p = arg[0], s = arg[1];
        return s;
      });
    } else {
      f = makeFunction(f, args);
      return method.call(obs, f);
    }
  };

  toCombinator = function(f) {
    var key;
    if (_.isFunction(f)) {
      return f;
    } else if (isFieldKey(f)) {
      key = toFieldKey(f);
      return function(left, right) {
        return left[key](right);
      };
    } else {
      throw new Exception("not a function or a field key: " + f);
    }
  };

  toFieldKey = function(f) {
    return f.slice(1);
  };

  Some = (function() {
    function Some(value1) {
      this.value = value1;
    }

    Some.prototype.getOrElse = function() {
      return this.value;
    };

    Some.prototype.get = function() {
      return this.value;
    };

    Some.prototype.filter = function(f) {
      if (f(this.value)) {
        return new Some(this.value);
      } else {
        return None;
      }
    };

    Some.prototype.map = function(f) {
      return new Some(f(this.value));
    };

    Some.prototype.forEach = function(f) {
      return f(this.value);
    };

    Some.prototype.isDefined = true;

    Some.prototype.toArray = function() {
      return [this.value];
    };

    Some.prototype.inspect = function() {
      return "Some(" + this.value + ")";
    };

    Some.prototype.toString = function() {
      return this.inspect();
    };

    return Some;

  })();

  None = {
    getOrElse: function(value) {
      return value;
    },
    filter: function() {
      return None;
    },
    map: function() {
      return None;
    },
    forEach: function() {},
    isDefined: false,
    toArray: function() {
      return [];
    },
    inspect: function() {
      return "None";
    },
    toString: function() {
      return this.inspect();
    }
  };

  toOption = function(v) {
    if (v instanceof Some || v === None) {
      return v;
    } else {
      return new Some(v);
    }
  };

  Bacon.noMore = ["<no-more>"];

  Bacon.more = ["<more>"];

  eventIdCounter = 0;

  Event = (function() {
    function Event() {
      this.id = ++eventIdCounter;
    }

    Event.prototype.isEvent = function() {
      return true;
    };

    Event.prototype.isEnd = function() {
      return false;
    };

    Event.prototype.isInitial = function() {
      return false;
    };

    Event.prototype.isNext = function() {
      return false;
    };

    Event.prototype.isError = function() {
      return false;
    };

    Event.prototype.hasValue = function() {
      return false;
    };

    Event.prototype.filter = function() {
      return true;
    };

    Event.prototype.inspect = function() {
      return this.toString();
    };

    Event.prototype.log = function() {
      return this.toString();
    };

    return Event;

  })();

  Next = (function(superClass) {
    extend(Next, superClass);

    function Next(valueF, eager) {
      Next.__super__.constructor.call(this);
      if (!eager && _.isFunction(valueF) || valueF instanceof Next) {
        this.valueF = valueF;
        this.valueInternal = void 0;
      } else {
        this.valueF = void 0;
        this.valueInternal = valueF;
      }
    }

    Next.prototype.isNext = function() {
      return true;
    };

    Next.prototype.hasValue = function() {
      return true;
    };

    Next.prototype.value = function() {
      if (this.valueF instanceof Next) {
        this.valueInternal = this.valueF.value();
        this.valueF = void 0;
      } else if (this.valueF) {
        this.valueInternal = this.valueF();
        this.valueF = void 0;
      }
      return this.valueInternal;
    };

    Next.prototype.fmap = function(f) {
      var event, value;
      if (this.valueInternal) {
        value = this.valueInternal;
        return this.apply(function() {
          return f(value);
        });
      } else {
        event = this;
        return this.apply(function() {
          return f(event.value());
        });
      }
    };

    Next.prototype.apply = function(value) {
      return new Next(value);
    };

    Next.prototype.filter = function(f) {
      return f(this.value());
    };

    Next.prototype.toString = function() {
      return _.toString(this.value());
    };

    Next.prototype.log = function() {
      return this.value();
    };

    return Next;

  })(Event);

  Initial = (function(superClass) {
    extend(Initial, superClass);

    function Initial() {
      return Initial.__super__.constructor.apply(this, arguments);
    }

    Initial.prototype.isInitial = function() {
      return true;
    };

    Initial.prototype.isNext = function() {
      return false;
    };

    Initial.prototype.apply = function(value) {
      return new Initial(value);
    };

    Initial.prototype.toNext = function() {
      return new Next(this);
    };

    return Initial;

  })(Next);

  End = (function(superClass) {
    extend(End, superClass);

    function End() {
      return End.__super__.constructor.apply(this, arguments);
    }

    End.prototype.isEnd = function() {
      return true;
    };

    End.prototype.fmap = function() {
      return this;
    };

    End.prototype.apply = function() {
      return this;
    };

    End.prototype.toString = function() {
      return "<end>";
    };

    return End;

  })(Event);

  Error = (function(superClass) {
    extend(Error, superClass);

    function Error(error1) {
      this.error = error1;
    }

    Error.prototype.isError = function() {
      return true;
    };

    Error.prototype.fmap = function() {
      return this;
    };

    Error.prototype.apply = function() {
      return this;
    };

    Error.prototype.toString = function() {
      return "<error> " + _.toString(this.error);
    };

    return Error;

  })(Event);

  Bacon.Event = Event;

  Bacon.Initial = Initial;

  Bacon.Next = Next;

  Bacon.End = End;

  Bacon.Error = Error;

  initialEvent = function(value) {
    return new Initial(value, true);
  };

  nextEvent = function(value) {
    return new Next(value, true);
  };

  endEvent = function() {
    return new End();
  };

  toEvent = function(x) {
    if (x instanceof Event) {
      return x;
    } else {
      return nextEvent(x);
    }
  };

  idCounter = 0;

  registerObs = function() {};

  Observable = (function() {
    function Observable(desc) {
      this.id = ++idCounter;
      withDescription(desc, this);
      this.initialDesc = this.desc;
    }

    Observable.prototype.subscribe = function(sink) {
      return UpdateBarrier.wrappedSubscribe(this, sink);
    };

    Observable.prototype.subscribeInternal = function(sink) {
      return this.dispatcher.subscribe(sink);
    };

    Observable.prototype.onValue = function() {
      var f;
      f = makeFunctionArgs(arguments);
      return this.subscribe(function(event) {
        if (event.hasValue()) {
          return f(event.value());
        }
      });
    };

    Observable.prototype.onValues = function(f) {
      return this.onValue(function(args) {
        return f.apply(null, args);
      });
    };

    Observable.prototype.onError = function() {
      var f;
      f = makeFunctionArgs(arguments);
      return this.subscribe(function(event) {
        if (event.isError()) {
          return f(event.error);
        }
      });
    };

    Observable.prototype.onEnd = function() {
      var f;
      f = makeFunctionArgs(arguments);
      return this.subscribe(function(event) {
        if (event.isEnd()) {
          return f();
        }
      });
    };

    Observable.prototype.name = function(name) {
      this._name = name;
      return this;
    };

    Observable.prototype.withDescription = function() {
      return describe.apply(null, arguments).apply(this);
    };

    Observable.prototype.toString = function() {
      if (this._name) {
        return this._name;
      } else {
        return this.desc.toString();
      }
    };

    Observable.prototype.internalDeps = function() {
      return this.initialDesc.deps();
    };

    return Observable;

  })();

  Observable.prototype.assign = Observable.prototype.onValue;

  Observable.prototype.forEach = Observable.prototype.onValue;

  Observable.prototype.inspect = Observable.prototype.toString;

  Bacon.Observable = Observable;

  CompositeUnsubscribe = (function() {
    function CompositeUnsubscribe(ss) {
      var j, len1, s;
      if (ss == null) {
        ss = [];
      }
      this.unsubscribe = bind(this.unsubscribe, this);
      this.unsubscribed = false;
      this.subscriptions = [];
      this.starting = [];
      for (j = 0, len1 = ss.length; j < len1; j++) {
        s = ss[j];
        this.add(s);
      }
    }

    CompositeUnsubscribe.prototype.add = function(subscription) {
      var ended, unsub, unsubMe;
      if (this.unsubscribed) {
        return;
      }
      ended = false;
      unsub = nop;
      this.starting.push(subscription);
      unsubMe = (function(_this) {
        return function() {
          if (_this.unsubscribed) {
            return;
          }
          ended = true;
          _this.remove(unsub);
          return _.remove(subscription, _this.starting);
        };
      })(this);
      unsub = subscription(this.unsubscribe, unsubMe);
      if (!(this.unsubscribed || ended)) {
        this.subscriptions.push(unsub);
      } else {
        unsub();
      }
      _.remove(subscription, this.starting);
      return unsub;
    };

    CompositeUnsubscribe.prototype.remove = function(unsub) {
      if (this.unsubscribed) {
        return;
      }
      if ((_.remove(unsub, this.subscriptions)) !== void 0) {
        return unsub();
      }
    };

    CompositeUnsubscribe.prototype.unsubscribe = function() {
      var j, len1, ref, s;
      if (this.unsubscribed) {
        return;
      }
      this.unsubscribed = true;
      ref = this.subscriptions;
      for (j = 0, len1 = ref.length; j < len1; j++) {
        s = ref[j];
        s();
      }
      this.subscriptions = [];
      return this.starting = [];
    };

    CompositeUnsubscribe.prototype.count = function() {
      if (this.unsubscribed) {
        return 0;
      }
      return this.subscriptions.length + this.starting.length;
    };

    CompositeUnsubscribe.prototype.empty = function() {
      return this.count() === 0;
    };

    return CompositeUnsubscribe;

  })();

  Bacon.CompositeUnsubscribe = CompositeUnsubscribe;

  Dispatcher = (function() {
    function Dispatcher(_subscribe, _handleEvent) {
      this._subscribe = _subscribe;
      this._handleEvent = _handleEvent;
      this.subscribe = bind(this.subscribe, this);
      this.handleEvent = bind(this.handleEvent, this);
      this.subscriptions = [];
      this.queue = [];
      this.pushing = false;
      this.ended = false;
      this.prevError = void 0;
      this.unsubSrc = void 0;
    }

    Dispatcher.prototype.hasSubscribers = function() {
      return this.subscriptions.length > 0;
    };

    Dispatcher.prototype.removeSub = function(subscription) {
      return this.subscriptions = _.without(subscription, this.subscriptions);
    };

    Dispatcher.prototype.push = function(event) {
      if (event.isEnd()) {
        this.ended = true;
      }
      return UpdateBarrier.inTransaction(event, this, this.pushIt, [event]);
    };

    Dispatcher.prototype.pushToSubscriptions = function(event) {
      var e, j, len1, reply, sub, tmp;
      try {
        tmp = this.subscriptions;
        for (j = 0, len1 = tmp.length; j < len1; j++) {
          sub = tmp[j];
          reply = sub.sink(event);
          if (reply === Bacon.noMore || event.isEnd()) {
            this.removeSub(sub);
          }
        }
        return true;
      } catch (_error) {
        e = _error;
        this.pushing = false;
        this.queue = [];
        throw e;
      }
    };

    Dispatcher.prototype.pushIt = function(event) {
      if (!this.pushing) {
        if (event === this.prevError) {
          return;
        }
        if (event.isError()) {
          this.prevError = event;
        }
        this.pushing = true;
        this.pushToSubscriptions(event);
        this.pushing = false;
        while (this.queue.length) {
          event = this.queue.shift();
          this.push(event);
        }
        if (this.hasSubscribers()) {
          return Bacon.more;
        } else {
          this.unsubscribeFromSource();
          return Bacon.noMore;
        }
      } else {
        this.queue.push(event);
        return Bacon.more;
      }
    };

    Dispatcher.prototype.handleEvent = function(event) {
      if (this._handleEvent) {
        return this._handleEvent(event);
      } else {
        return this.push(event);
      }
    };

    Dispatcher.prototype.unsubscribeFromSource = function() {
      if (this.unsubSrc) {
        this.unsubSrc();
      }
      return this.unsubSrc = void 0;
    };

    Dispatcher.prototype.subscribe = function(sink) {
      var subscription;
      if (this.ended) {
        sink(endEvent());
        return nop;
      } else {
        assertFunction(sink);
        subscription = {
          sink: sink
        };
        this.subscriptions.push(subscription);
        if (this.subscriptions.length === 1) {
          this.unsubSrc = this._subscribe(this.handleEvent);
          assertFunction(this.unsubSrc);
        }
        return (function(_this) {
          return function() {
            _this.removeSub(subscription);
            if (!_this.hasSubscribers()) {
              return _this.unsubscribeFromSource();
            }
          };
        })(this);
      }
    };

    return Dispatcher;

  })();

  EventStream = (function(superClass) {
    extend(EventStream, superClass);

    function EventStream(desc, subscribe, handler) {
      if (_.isFunction(desc)) {
        handler = subscribe;
        subscribe = desc;
        desc = [];
      }
      EventStream.__super__.constructor.call(this, desc);
      assertFunction(subscribe);
      this.dispatcher = new Dispatcher(subscribe, handler);
      registerObs(this);
    }

    EventStream.prototype.toProperty = function(initValue_) {
      var disp, initValue;
      initValue = arguments.length === 0 ? None : toOption(function() {
        return initValue_;
      });
      disp = this.dispatcher;
      return new Property(describe(this, "toProperty", initValue_), function(sink) {
        var initSent, reply, sendInit, unsub;
        initSent = false;
        unsub = nop;
        reply = Bacon.more;
        sendInit = function() {
          if (!initSent) {
            return initValue.forEach(function(value) {
              initSent = true;
              reply = sink(new Initial(value));
              if (reply === Bacon.noMore) {
                unsub();
                return unsub = nop;
              }
            });
          }
        };
        unsub = disp.subscribe(function(event) {
          if (event.hasValue()) {
            if (initSent && event.isInitial()) {
              return Bacon.more;
            } else {
              if (!event.isInitial()) {
                sendInit();
              }
              initSent = true;
              initValue = new Some(event);
              return sink(event);
            }
          } else {
            if (event.isEnd()) {
              reply = sendInit();
            }
            if (reply !== Bacon.noMore) {
              return sink(event);
            }
          }
        });
        sendInit();
        return unsub;
      });
    };

    EventStream.prototype.toEventStream = function() {
      return this;
    };

    EventStream.prototype.withHandler = function(handler) {
      return new EventStream(describe(this, "withHandler", handler), this.dispatcher.subscribe, handler);
    };

    return EventStream;

  })(Observable);

  Bacon.EventStream = EventStream;

  Bacon.never = function() {
    return new EventStream(describe(Bacon, "never"), function(sink) {
      sink(endEvent());
      return nop;
    });
  };

  Bacon.when = function() {
    var f, i, index, ix, j, k, len, len1, len2, needsBarrier, pat, patSources, pats, patterns, ref, resultStream, s, sources, triggerFound, usage;
    if (arguments.length === 0) {
      return Bacon.never();
    }
    len = arguments.length;
    usage = "when: expecting arguments in the form (Observable+,function)+";
    assert(usage, len % 2 === 0);
    sources = [];
    pats = [];
    i = 0;
    patterns = [];
    while (i < len) {
      patterns[i] = arguments[i];
      patterns[i + 1] = arguments[i + 1];
      patSources = _.toArray(arguments[i]);
      f = constantToFunction(arguments[i + 1]);
      pat = {
        f: f,
        ixs: []
      };
      triggerFound = false;
      for (j = 0, len1 = patSources.length; j < len1; j++) {
        s = patSources[j];
        index = _.indexOf(sources, s);
        if (!triggerFound) {
          triggerFound = Source.isTrigger(s);
        }
        if (index < 0) {
          sources.push(s);
          index = sources.length - 1;
        }
        ref = pat.ixs;
        for (k = 0, len2 = ref.length; k < len2; k++) {
          ix = ref[k];
          if (ix.index === index) {
            ix.count++;
          }
        }
        pat.ixs.push({
          index: index,
          count: 1
        });
      }
      assert("At least one EventStream required", triggerFound || (!patSources.length));
      if (patSources.length > 0) {
        pats.push(pat);
      }
      i = i + 2;
    }
    if (!sources.length) {
      return Bacon.never();
    }
    sources = _.map(Source.fromObservable, sources);
    needsBarrier = (_.any(sources, function(s) {
      return s.flatten;
    })) && (containsDuplicateDeps(_.map((function(s) {
      return s.obs;
    }), sources)));
    return resultStream = new EventStream(describe.apply(null, [Bacon, "when"].concat(slice.call(patterns))), function(sink) {
      var cannotMatch, cannotSync, ends, match, nonFlattened, part, triggers;
      triggers = [];
      ends = false;
      match = function(p) {
        var l, len3, ref1;
        ref1 = p.ixs;
        for (l = 0, len3 = ref1.length; l < len3; l++) {
          i = ref1[l];
          if (!sources[i.index].hasAtLeast(i.count)) {
            return false;
          }
        }
        return true;
      };
      cannotSync = function(source) {
        return !source.sync || source.ended;
      };
      cannotMatch = function(p) {
        var l, len3, ref1;
        ref1 = p.ixs;
        for (l = 0, len3 = ref1.length; l < len3; l++) {
          i = ref1[l];
          if (!sources[i.index].mayHave(i.count)) {
            return true;
          }
        }
      };
      nonFlattened = function(trigger) {
        return !trigger.source.flatten;
      };
      part = function(source) {
        return function(unsubAll) {
          var flush, flushLater, flushWhileTriggers;
          flushLater = function() {
            return UpdateBarrier.whenDoneWith(resultStream, flush);
          };
          flushWhileTriggers = function() {
            var events, l, len3, p, reply, trigger;
            if (triggers.length > 0) {
              reply = Bacon.more;
              trigger = triggers.pop();
              for (l = 0, len3 = pats.length; l < len3; l++) {
                p = pats[l];
                if (match(p)) {
                  events = (function() {
                    var len4, m, ref1, results;
                    ref1 = p.ixs;
                    results = [];
                    for (m = 0, len4 = ref1.length; m < len4; m++) {
                      i = ref1[m];
                      results.push(sources[i.index].consume());
                    }
                    return results;
                  })();
                  reply = sink(trigger.e.apply(function() {
                    var event, values;
                    values = (function() {
                      var len4, m, results;
                      results = [];
                      for (m = 0, len4 = events.length; m < len4; m++) {
                        event = events[m];
                        results.push(event.value());
                      }
                      return results;
                    })();
                    return p.f.apply(p, values);
                  }));
                  if (triggers.length) {
                    triggers = _.filter(nonFlattened, triggers);
                  }
                  if (reply === Bacon.noMore) {
                    return reply;
                  } else {
                    return flushWhileTriggers();
                  }
                }
              }
            } else {
              return Bacon.more;
            }
          };
          flush = function() {
            var reply;
            reply = flushWhileTriggers();
            if (ends) {
              ends = false;
              if (_.all(sources, cannotSync) || _.all(pats, cannotMatch)) {
                reply = Bacon.noMore;
                sink(endEvent());
              }
            }
            if (reply === Bacon.noMore) {
              unsubAll();
            }
            return reply;
          };
          return source.subscribe(function(e) {
            var reply;
            if (e.isEnd()) {
              ends = true;
              source.markEnded();
              flushLater();
            } else if (e.isError()) {
              reply = sink(e);
            } else {
              source.push(e);
              if (source.sync) {
                triggers.push({
                  source: source,
                  e: e
                });
                if (needsBarrier || UpdateBarrier.hasWaiters()) {
                  flushLater();
                } else {
                  flush();
                }
              }
            }
            if (reply === Bacon.noMore) {
              unsubAll();
            }
            return reply || Bacon.more;
          });
        };
      };
      return new Bacon.CompositeUnsubscribe((function() {
        var l, len3, results;
        results = [];
        for (l = 0, len3 = sources.length; l < len3; l++) {
          s = sources[l];
          results.push(part(s));
        }
        return results;
      })()).unsubscribe;
    });
  };

  containsDuplicateDeps = function(observables, state) {
    var checkObservable;
    if (state == null) {
      state = [];
    }
    checkObservable = function(obs) {
      var deps;
      if (_.contains(state, obs)) {
        return true;
      } else {
        deps = obs.internalDeps();
        if (deps.length) {
          state.push(obs);
          return _.any(deps, checkObservable);
        } else {
          state.push(obs);
          return false;
        }
      }
    };
    return _.any(observables, checkObservable);
  };

  constantToFunction = function(f) {
    if (_.isFunction(f)) {
      return f;
    } else {
      return _.always(f);
    }
  };

  Bacon.groupSimultaneous = function() {
    var s, sources, streams;
    streams = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (streams.length === 1 && isArray(streams[0])) {
      streams = streams[0];
    }
    sources = (function() {
      var j, len1, results;
      results = [];
      for (j = 0, len1 = streams.length; j < len1; j++) {
        s = streams[j];
        results.push(new BufferingSource(s));
      }
      return results;
    })();
    return withDescription.apply(null, [Bacon, "groupSimultaneous"].concat(slice.call(streams), [Bacon.when(sources, (function() {
      var xs;
      xs = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return xs;
    }))]));
  };

  PropertyDispatcher = (function(superClass) {
    extend(PropertyDispatcher, superClass);

    function PropertyDispatcher(property1, subscribe, handleEvent) {
      this.property = property1;
      this.subscribe = bind(this.subscribe, this);
      PropertyDispatcher.__super__.constructor.call(this, subscribe, handleEvent);
      this.current = None;
      this.currentValueRootId = void 0;
      this.propertyEnded = false;
    }

    PropertyDispatcher.prototype.push = function(event) {
      if (event.isEnd()) {
        this.propertyEnded = true;
      }
      if (event.hasValue()) {
        this.current = new Some(event);
        this.currentValueRootId = UpdateBarrier.currentEventId();
      }
      return PropertyDispatcher.__super__.push.call(this, event);
    };

    PropertyDispatcher.prototype.maybeSubSource = function(sink, reply) {
      if (reply === Bacon.noMore) {
        return nop;
      } else if (this.propertyEnded) {
        sink(endEvent());
        return nop;
      } else {
        return Dispatcher.prototype.subscribe.call(this, sink);
      }
    };

    PropertyDispatcher.prototype.subscribe = function(sink) {
      var dispatchingId, initSent, reply, valId;
      initSent = false;
      reply = Bacon.more;
      if (this.current.isDefined && (this.hasSubscribers() || this.propertyEnded)) {
        dispatchingId = UpdateBarrier.currentEventId();
        valId = this.currentValueRootId;
        if (!this.propertyEnded && valId && dispatchingId && dispatchingId !== valId) {
          UpdateBarrier.whenDoneWith(this.property, (function(_this) {
            return function() {
              if (_this.currentValueRootId === valId) {
                return sink(initialEvent(_this.current.get().value()));
              }
            };
          })(this));
          return this.maybeSubSource(sink, reply);
        } else {
          UpdateBarrier.inTransaction(void 0, this, (function() {
            return reply = sink(initialEvent(this.current.get().value()));
          }), []);
          return this.maybeSubSource(sink, reply);
        }
      } else {
        return this.maybeSubSource(sink, reply);
      }
    };

    return PropertyDispatcher;

  })(Dispatcher);

  Property = (function(superClass) {
    extend(Property, superClass);

    function Property(desc, subscribe, handler) {
      if (_.isFunction(desc)) {
        handler = subscribe;
        subscribe = desc;
        desc = [];
      }
      Property.__super__.constructor.call(this, desc);
      assertFunction(subscribe);
      this.dispatcher = new PropertyDispatcher(this, subscribe, handler);
      registerObs(this);
    }

    Property.prototype.changes = function() {
      return new EventStream(describe(this, "changes"), (function(_this) {
        return function(sink) {
          return _this.dispatcher.subscribe(function(event) {
            if (!event.isInitial()) {
              return sink(event);
            }
          });
        };
      })(this));
    };

    Property.prototype.withHandler = function(handler) {
      return new Property(describe(this, "withHandler", handler), this.dispatcher.subscribe, handler);
    };

    Property.prototype.toProperty = function() {
      assertNoArguments(arguments);
      return this;
    };

    Property.prototype.toEventStream = function() {
      return new EventStream(describe(this, "toEventStream"), (function(_this) {
        return function(sink) {
          return _this.dispatcher.subscribe(function(event) {
            if (event.isInitial()) {
              event = event.toNext();
            }
            return sink(event);
          });
        };
      })(this));
    };

    return Property;

  })(Observable);

  Bacon.Property = Property;

  Bacon.constant = function(value) {
    return new Property(describe(Bacon, "constant", value), function(sink) {
      sink(initialEvent(value));
      sink(endEvent());
      return nop;
    });
  };

  Bacon.fromBinder = function(binder, eventTransformer) {
    if (eventTransformer == null) {
      eventTransformer = _.id;
    }
    return new EventStream(describe(Bacon, "fromBinder", binder, eventTransformer), function(sink) {
      var shouldUnbind, unbind, unbinder, unbound;
      unbound = false;
      shouldUnbind = false;
      unbind = function() {
        if (!unbound) {
          if (typeof unbinder !== "undefined" && unbinder !== null) {
            unbinder();
            return unbound = true;
          } else {
            return shouldUnbind = true;
          }
        }
      };
      unbinder = binder(function() {
        var args, event, j, len1, reply, value;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        value = eventTransformer.apply(this, args);
        if (!(isArray(value) && _.last(value) instanceof Event)) {
          value = [value];
        }
        reply = Bacon.more;
        for (j = 0, len1 = value.length; j < len1; j++) {
          event = value[j];
          reply = sink(event = toEvent(event));
          if (reply === Bacon.noMore || event.isEnd()) {
            unbind();
            return reply;
          }
        }
        return reply;
      });
      if (shouldUnbind) {
        unbind();
      }
      return unbind;
    });
  };

  eventMethods = [["addEventListener", "removeEventListener"], ["addListener", "removeListener"], ["on", "off"], ["bind", "unbind"]];

  findHandlerMethods = function(target) {
    var j, len1, methodPair, pair;
    for (j = 0, len1 = eventMethods.length; j < len1; j++) {
      pair = eventMethods[j];
      methodPair = [target[pair[0]], target[pair[1]]];
      if (methodPair[0] && methodPair[1]) {
        return methodPair;
      }
    }
    throw new Error("No suitable event methods in " + target);
  };

  Bacon.fromEventTarget = function(target, eventName, eventTransformer) {
    var ref, sub, unsub;
    ref = findHandlerMethods(target), sub = ref[0], unsub = ref[1];
    return withDescription(Bacon, "fromEvent", target, eventName, Bacon.fromBinder(function(handler) {
      sub.call(target, eventName, handler);
      return function() {
        return unsub.call(target, eventName, handler);
      };
    }, eventTransformer));
  };

  Bacon.fromEvent = Bacon.fromEventTarget;

  Bacon.Observable.prototype.map = function() {
    var args, p;
    p = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return convertArgsToFunction(this, p, args, function(f) {
      return withDescription(this, "map", f, this.withHandler(function(event) {
        return this.push(event.fmap(f));
      }));
    });
  };

  Bacon.combineAsArray = function() {
    var index, j, len1, s, sources, stream, streams;
    streams = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (streams.length === 1 && isArray(streams[0])) {
      streams = streams[0];
    }
    for (index = j = 0, len1 = streams.length; j < len1; index = ++j) {
      stream = streams[index];
      if (!(isObservable(stream))) {
        streams[index] = Bacon.constant(stream);
      }
    }
    if (streams.length) {
      sources = (function() {
        var k, len2, results;
        results = [];
        for (k = 0, len2 = streams.length; k < len2; k++) {
          s = streams[k];
          results.push(new Source(s, true));
        }
        return results;
      })();
      return withDescription.apply(null, [Bacon, "combineAsArray"].concat(slice.call(streams), [Bacon.when(sources, (function() {
        var xs;
        xs = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return xs;
      })).toProperty()]));
    } else {
      return Bacon.constant([]);
    }
  };

  Bacon.onValues = function() {
    var f, j, streams;
    streams = 2 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 1) : (j = 0, []), f = arguments[j++];
    return Bacon.combineAsArray(streams).onValues(f);
  };

  Bacon.combineWith = function() {
    var f, streams;
    f = arguments[0], streams = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return withDescription.apply(null, [Bacon, "combineWith", f].concat(slice.call(streams), [Bacon.combineAsArray(streams).map(function(values) {
      return f.apply(null, values);
    })]));
  };

  Bacon.combineTemplate = function(template) {
    var applyStreamValue, combinator, compile, compileTemplate, constantValue, current, funcs, mkContext, setValue, streams;
    funcs = [];
    streams = [];
    current = function(ctxStack) {
      return ctxStack[ctxStack.length - 1];
    };
    setValue = function(ctxStack, key, value) {
      return current(ctxStack)[key] = value;
    };
    applyStreamValue = function(key, index) {
      return function(ctxStack, values) {
        return setValue(ctxStack, key, values[index]);
      };
    };
    constantValue = function(key, value) {
      return function(ctxStack) {
        return setValue(ctxStack, key, value);
      };
    };
    mkContext = function(template) {
      if (isArray(template)) {
        return [];
      } else {
        return {};
      }
    };
    compile = function(key, value) {
      var popContext, pushContext;
      if (isObservable(value)) {
        streams.push(value);
        return funcs.push(applyStreamValue(key, streams.length - 1));
      } else if (value === Object(value) && typeof value !== "function" && !(value instanceof RegExp) && !(value instanceof Date)) {
        pushContext = function(key) {
          return function(ctxStack) {
            var newContext;
            newContext = mkContext(value);
            setValue(ctxStack, key, newContext);
            return ctxStack.push(newContext);
          };
        };
        popContext = function(ctxStack) {
          return ctxStack.pop();
        };
        funcs.push(pushContext(key));
        compileTemplate(value);
        return funcs.push(popContext);
      } else {
        return funcs.push(constantValue(key, value));
      }
    };
    compileTemplate = function(template) {
      return _.each(template, compile);
    };
    compileTemplate(template);
    combinator = function(values) {
      var ctxStack, f, j, len1, rootContext;
      rootContext = mkContext(template);
      ctxStack = [rootContext];
      for (j = 0, len1 = funcs.length; j < len1; j++) {
        f = funcs[j];
        f(ctxStack, values);
      }
      return rootContext;
    };
    return withDescription(Bacon, "combineTemplate", template, Bacon.combineAsArray(streams).map(combinator));
  };

  Bacon.Observable.prototype.combine = function(other, f) {
    var combinator;
    combinator = toCombinator(f);
    return withDescription(this, "combine", other, f, Bacon.combineAsArray(this, other).map(function(values) {
      return combinator(values[0], values[1]);
    }));
  };

  Bacon.Observable.prototype.decode = function(cases) {
    return withDescription(this, "decode", cases, this.combine(Bacon.combineTemplate(cases), function(key, values) {
      return values[key];
    }));
  };

  Bacon.Observable.prototype.withStateMachine = function(initState, f) {
    var state;
    state = initState;
    return withDescription(this, "withStateMachine", initState, f, this.withHandler(function(event) {
      var fromF, j, len1, newState, output, outputs, reply;
      fromF = f(state, event);
      newState = fromF[0], outputs = fromF[1];
      state = newState;
      reply = Bacon.more;
      for (j = 0, len1 = outputs.length; j < len1; j++) {
        output = outputs[j];
        reply = this.push(output);
        if (reply === Bacon.noMore) {
          return reply;
        }
      }
      return reply;
    }));
  };

  Bacon.Observable.prototype.skipDuplicates = function(isEqual) {
    if (isEqual == null) {
      isEqual = function(a, b) {
        return a === b;
      };
    }
    return withDescription(this, "skipDuplicates", this.withStateMachine(None, function(prev, event) {
      if (!event.hasValue()) {
        return [prev, [event]];
      } else if (event.isInitial() || prev === None || !isEqual(prev.get(), event.value())) {
        return [new Some(event.value()), [event]];
      } else {
        return [prev, []];
      }
    }));
  };

  Bacon.Observable.prototype.awaiting = function(other) {
    return withDescription(this, "awaiting", other, Bacon.groupSimultaneous(this, other).map(function(arg) {
      var myValues, otherValues;
      myValues = arg[0], otherValues = arg[1];
      return otherValues.length === 0;
    }).toProperty(false).skipDuplicates());
  };

  Bacon.Observable.prototype.not = function() {
    return withDescription(this, "not", this.map(function(x) {
      return !x;
    }));
  };

  Bacon.Property.prototype.and = function(other) {
    return withDescription(this, "and", other, this.combine(other, function(x, y) {
      return x && y;
    }));
  };

  Bacon.Property.prototype.or = function(other) {
    return withDescription(this, "or", other, this.combine(other, function(x, y) {
      return x || y;
    }));
  };

  Bacon.scheduler = {
    setTimeout: function(f, d) {
      return setTimeout(f, d);
    },
    setInterval: function(f, i) {
      return setInterval(f, i);
    },
    clearInterval: function(id) {
      return clearInterval(id);
    },
    clearTimeout: function(id) {
      return clearTimeout(id);
    },
    now: function() {
      return new Date().getTime();
    }
  };

  Bacon.EventStream.prototype.bufferWithTime = function(delay) {
    return withDescription(this, "bufferWithTime", delay, this.bufferWithTimeOrCount(delay, Number.MAX_VALUE));
  };

  Bacon.EventStream.prototype.bufferWithCount = function(count) {
    return withDescription(this, "bufferWithCount", count, this.bufferWithTimeOrCount(void 0, count));
  };

  Bacon.EventStream.prototype.bufferWithTimeOrCount = function(delay, count) {
    var flushOrSchedule;
    flushOrSchedule = function(buffer) {
      if (buffer.values.length === count) {
        return buffer.flush();
      } else if (delay !== void 0) {
        return buffer.schedule();
      }
    };
    return withDescription(this, "bufferWithTimeOrCount", delay, count, this.buffer(delay, flushOrSchedule, flushOrSchedule));
  };

  Bacon.EventStream.prototype.buffer = function(delay, onInput, onFlush) {
    var buffer, delayMs, reply;
    if (onInput == null) {
      onInput = nop;
    }
    if (onFlush == null) {
      onFlush = nop;
    }
    buffer = {
      scheduled: null,
      end: void 0,
      values: [],
      flush: function() {
        var reply;
        if (this.scheduled) {
          Bacon.scheduler.clearTimeout(this.scheduled);
          this.scheduled = null;
        }
        if (this.values.length > 0) {
          reply = this.push(nextEvent(this.values));
          this.values = [];
          if (this.end != null) {
            return this.push(this.end);
          } else if (reply !== Bacon.noMore) {
            return onFlush(this);
          }
        } else {
          if (this.end != null) {
            return this.push(this.end);
          }
        }
      },
      schedule: function() {
        if (!this.scheduled) {
          return this.scheduled = delay((function(_this) {
            return function() {
              return _this.flush();
            };
          })(this));
        }
      }
    };
    reply = Bacon.more;
    if (!_.isFunction(delay)) {
      delayMs = delay;
      delay = function(f) {
        return Bacon.scheduler.setTimeout(f, delayMs);
      };
    }
    return withDescription(this, "buffer", this.withHandler(function(event) {
      buffer.push = (function(_this) {
        return function(event) {
          return _this.push(event);
        };
      })(this);
      if (event.isError()) {
        reply = this.push(event);
      } else if (event.isEnd()) {
        buffer.end = event;
        if (!buffer.scheduled) {
          buffer.flush();
        }
      } else {
        buffer.values.push(event.value());
        onInput(buffer);
      }
      return reply;
    }));
  };

  Bacon.Observable.prototype.filter = function() {
    var args, f;
    f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return convertArgsToFunction(this, f, args, function(f) {
      return withDescription(this, "filter", f, this.withHandler(function(event) {
        if (event.filter(f)) {
          return this.push(event);
        } else {
          return Bacon.more;
        }
      }));
    });
  };

  Bacon.once = function(value) {
    return new EventStream(describe(Bacon, "once", value), function(sink) {
      sink(toEvent(value));
      sink(endEvent());
      return nop;
    });
  };

  Bacon.EventStream.prototype.concat = function(right) {
    var left;
    left = this;
    return new EventStream(describe(left, "concat", right), function(sink) {
      var unsubLeft, unsubRight;
      unsubRight = nop;
      unsubLeft = left.dispatcher.subscribe(function(e) {
        if (e.isEnd()) {
          return unsubRight = right.dispatcher.subscribe(sink);
        } else {
          return sink(e);
        }
      });
      return function() {
        unsubLeft();
        return unsubRight();
      };
    });
  };

  Bacon.Observable.prototype.flatMap = function() {
    return flatMap_(this, makeSpawner(arguments));
  };

  Bacon.Observable.prototype.flatMapFirst = function() {
    return flatMap_(this, makeSpawner(arguments), true);
  };

  flatMap_ = function(root, f, firstOnly, limit) {
    var childDeps, result, rootDep;
    rootDep = [root];
    childDeps = [];
    result = new EventStream(describe(root, "flatMap" + (firstOnly ? "First" : ""), f), function(sink) {
      var checkEnd, checkQueue, composite, queue, spawn;
      composite = new CompositeUnsubscribe();
      queue = [];
      spawn = function(event) {
        var child;
        child = makeObservable(f(event.value()));
        childDeps.push(child);
        return composite.add(function(unsubAll, unsubMe) {
          return child.dispatcher.subscribe(function(event) {
            var reply;
            if (event.isEnd()) {
              _.remove(child, childDeps);
              checkQueue();
              checkEnd(unsubMe);
              return Bacon.noMore;
            } else {
              if (event instanceof Initial) {
                event = event.toNext();
              }
              reply = sink(event);
              if (reply === Bacon.noMore) {
                unsubAll();
              }
              return reply;
            }
          });
        });
      };
      checkQueue = function() {
        var event;
        event = queue.shift();
        if (event) {
          return spawn(event);
        }
      };
      checkEnd = function(unsub) {
        unsub();
        if (composite.empty()) {
          return sink(endEvent());
        }
      };
      composite.add(function(__, unsubRoot) {
        return root.dispatcher.subscribe(function(event) {
          if (event.isEnd()) {
            return checkEnd(unsubRoot);
          } else if (event.isError()) {
            return sink(event);
          } else if (firstOnly && composite.count() > 1) {
            return Bacon.more;
          } else {
            if (composite.unsubscribed) {
              return Bacon.noMore;
            }
            if (limit && composite.count() > limit) {
              return queue.push(event);
            } else {
              return spawn(event);
            }
          }
        });
      });
      return composite.unsubscribe;
    });
    result.internalDeps = function() {
      if (childDeps.length) {
        return rootDep.concat(childDeps);
      } else {
        return rootDep;
      }
    };
    return result;
  };

  makeSpawner = function(args) {
    if (args.length === 1 && isObservable(args[0])) {
      return _.always(args[0]);
    } else {
      return makeFunctionArgs(args);
    }
  };

  makeObservable = function(x) {
    if (isObservable(x)) {
      return x;
    } else {
      return Bacon.once(x);
    }
  };

  Bacon.Observable.prototype.flatMapWithConcurrencyLimit = function() {
    var args, limit;
    limit = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return withDescription.apply(null, [this, "flatMapWithConcurrencyLimit", limit].concat(slice.call(args), [flatMap_(this, makeSpawner(args), false, limit)]));
  };

  Bacon.Observable.prototype.flatMapConcat = function() {
    return withDescription.apply(null, [this, "flatMapConcat"].concat(slice.call(arguments), [this.flatMapWithConcurrencyLimit.apply(this, [1].concat(slice.call(arguments)))]));
  };

  addPropertyInitValueToStream = function(property, stream) {
    var justInitValue;
    justInitValue = new EventStream(describe(property, "justInitValue"), function(sink) {
      var unsub, value;
      value = void 0;
      unsub = property.dispatcher.subscribe(function(event) {
        if (!event.isEnd()) {
          value = event;
        }
        return Bacon.noMore;
      });
      UpdateBarrier.whenDoneWith(justInitValue, function() {
        if (value != null) {
          sink(value);
        }
        return sink(endEvent());
      });
      return unsub;
    });
    return justInitValue.concat(stream).toProperty();
  };

  Bacon.Observable.prototype.mapEnd = function() {
    var f;
    f = makeFunctionArgs(arguments);
    return withDescription(this, "mapEnd", f, this.withHandler(function(event) {
      if (event.isEnd()) {
        this.push(nextEvent(f(event)));
        this.push(endEvent());
        return Bacon.noMore;
      } else {
        return this.push(event);
      }
    }));
  };

  Bacon.Observable.prototype.skipErrors = function() {
    return withDescription(this, "skipErrors", this.withHandler(function(event) {
      if (event.isError()) {
        return Bacon.more;
      } else {
        return this.push(event);
      }
    }));
  };

  Bacon.EventStream.prototype.takeUntil = function(stopper) {
    var endMarker;
    endMarker = {};
    return withDescription(this, "takeUntil", stopper, Bacon.groupSimultaneous(this.mapEnd(endMarker), stopper.skipErrors()).withHandler(function(event) {
      var data, j, len1, ref, reply, value;
      if (!event.hasValue()) {
        return this.push(event);
      } else {
        ref = event.value(), data = ref[0], stopper = ref[1];
        if (stopper.length) {
          return this.push(endEvent());
        } else {
          reply = Bacon.more;
          for (j = 0, len1 = data.length; j < len1; j++) {
            value = data[j];
            if (value === endMarker) {
              reply = this.push(endEvent());
            } else {
              reply = this.push(nextEvent(value));
            }
          }
          return reply;
        }
      }
    }));
  };

  Bacon.Property.prototype.takeUntil = function(stopper) {
    var changes;
    changes = this.changes().takeUntil(stopper);
    return withDescription(this, "takeUntil", stopper, addPropertyInitValueToStream(this, changes));
  };

  Bacon.Observable.prototype.flatMapLatest = function() {
    var f, stream;
    f = makeSpawner(arguments);
    stream = this.toEventStream();
    return withDescription(this, "flatMapLatest", f, stream.flatMap(function(value) {
      return makeObservable(f(value)).takeUntil(stream);
    }));
  };

  Bacon.fromPoll = function(delay, poll) {
    return withDescription(Bacon, "fromPoll", delay, poll, Bacon.fromBinder((function(handler) {
      var id;
      id = Bacon.scheduler.setInterval(handler, delay);
      return function() {
        return Bacon.scheduler.clearInterval(id);
      };
    }), poll));
  };

  Bacon.later = function(delay, value) {
    return withDescription(Bacon, "later", delay, value, Bacon.fromBinder(function(sink) {
      var id, sender;
      sender = function() {
        return sink([value, endEvent()]);
      };
      id = Bacon.scheduler.setTimeout(sender, delay);
      return function() {
        return Bacon.scheduler.clearTimeout(id);
      };
    }));
  };

  Bacon.sequentially = function(delay, values) {
    var index;
    index = 0;
    return withDescription(Bacon, "sequentially", delay, values, Bacon.fromPoll(delay, function() {
      var value;
      value = values[index++];
      if (index < values.length) {
        return value;
      } else if (index === values.length) {
        return [value, endEvent()];
      } else {
        return endEvent();
      }
    }));
  };

  Bacon.repeatedly = function(delay, values) {
    var index;
    index = 0;
    return withDescription(Bacon, "repeatedly", delay, values, Bacon.fromPoll(delay, function() {
      return values[index++ % values.length];
    }));
  };

  Bacon.interval = function(delay, value) {
    if (value == null) {
      value = {};
    }
    return withDescription(Bacon, "interval", delay, value, Bacon.fromPoll(delay, function() {
      return nextEvent(value);
    }));
  };

  Bacon.EventStream.prototype.delay = function(delay) {
    return withDescription(this, "delay", delay, this.flatMap(function(value) {
      return Bacon.later(delay, value);
    }));
  };

  Bacon.Property.prototype.delay = function(delay) {
    return this.delayChanges("delay", delay, function(changes) {
      return changes.delay(delay);
    });
  };

  Bacon.Property.prototype.delayChanges = function() {
    var desc, f, j;
    desc = 2 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 1) : (j = 0, []), f = arguments[j++];
    return withDescription.apply(null, [this].concat(slice.call(desc), [addPropertyInitValueToStream(this, f(this.changes()))]));
  };

  Bacon.Observable.prototype.bufferingThrottle = function(minimumInterval) {
    return withDescription(this, "bufferingThrottle", minimumInterval, this.flatMapConcat(function(x) {
      return Bacon.once(x).concat(Bacon.later(minimumInterval).filter(false));
    }));
  };

  Bacon.Property.prototype.bufferingThrottle = function() {
    return Bacon.Observable.prototype.bufferingThrottle.apply(this, arguments).toProperty();
  };

  Bus = (function(superClass) {
    extend(Bus, superClass);

    function Bus() {
      this.guardedSink = bind(this.guardedSink, this);
      this.subscribeAll = bind(this.subscribeAll, this);
      this.unsubAll = bind(this.unsubAll, this);
      this.sink = void 0;
      this.subscriptions = [];
      this.ended = false;
      Bus.__super__.constructor.call(this, describe(Bacon, "Bus"), this.subscribeAll);
    }

    Bus.prototype.unsubAll = function() {
      var j, len1, ref, sub;
      ref = this.subscriptions;
      for (j = 0, len1 = ref.length; j < len1; j++) {
        sub = ref[j];
        if (typeof sub.unsub === "function") {
          sub.unsub();
        }
      }
      return void 0;
    };

    Bus.prototype.subscribeAll = function(newSink) {
      var j, len1, ref, subscription;
      this.sink = newSink;
      ref = cloneArray(this.subscriptions);
      for (j = 0, len1 = ref.length; j < len1; j++) {
        subscription = ref[j];
        this.subscribeInput(subscription);
      }
      return this.unsubAll;
    };

    Bus.prototype.guardedSink = function(input) {
      return (function(_this) {
        return function(event) {
          if (event.isEnd()) {
            _this.unsubscribeInput(input);
            return Bacon.noMore;
          } else {
            return _this.sink(event);
          }
        };
      })(this);
    };

    Bus.prototype.subscribeInput = function(subscription) {
      return subscription.unsub = subscription.input.dispatcher.subscribe(this.guardedSink(subscription.input));
    };

    Bus.prototype.unsubscribeInput = function(input) {
      var i, j, len1, ref, sub;
      ref = this.subscriptions;
      for (i = j = 0, len1 = ref.length; j < len1; i = ++j) {
        sub = ref[i];
        if (sub.input === input) {
          if (typeof sub.unsub === "function") {
            sub.unsub();
          }
          this.subscriptions.splice(i, 1);
          return;
        }
      }
    };

    Bus.prototype.plug = function(input) {
      var sub;
      assertObservable(input);
      if (this.ended) {
        return;
      }
      sub = {
        input: input
      };
      this.subscriptions.push(sub);
      if ((this.sink != null)) {
        this.subscribeInput(sub);
      }
      return (function(_this) {
        return function() {
          return _this.unsubscribeInput(input);
        };
      })(this);
    };

    Bus.prototype.end = function() {
      this.ended = true;
      this.unsubAll();
      return typeof this.sink === "function" ? this.sink(endEvent()) : void 0;
    };

    Bus.prototype.push = function(value) {
      return typeof this.sink === "function" ? this.sink(nextEvent(value)) : void 0;
    };

    Bus.prototype.error = function(error) {
      return typeof this.sink === "function" ? this.sink(new Error(error)) : void 0;
    };

    return Bus;

  })(EventStream);

  Bacon.Bus = Bus;

  liftCallback = function(desc, wrapped) {
    return withMethodCallSupport(function() {
      var args, f, stream;
      f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      stream = partiallyApplied(wrapped, [
        function(values, callback) {
          return f.apply(null, slice.call(values).concat([callback]));
        }
      ]);
      return withDescription.apply(null, [Bacon, desc, f].concat(slice.call(args), [Bacon.combineAsArray(args).flatMap(stream)]));
    });
  };

  Bacon.fromCallback = liftCallback("fromCallback", function() {
    var args, f;
    f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return Bacon.fromBinder(function(handler) {
      makeFunction(f, args)(handler);
      return nop;
    }, (function(value) {
      return [value, endEvent()];
    }));
  });

  Bacon.fromNodeCallback = liftCallback("fromNodeCallback", function() {
    var args, f;
    f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return Bacon.fromBinder(function(handler) {
      makeFunction(f, args)(handler);
      return nop;
    }, function(error, value) {
      if (error) {
        return [new Error(error), endEvent()];
      }
      return [value, endEvent()];
    });
  });

  Bacon.EventStream.prototype.debounce = function(delay) {
    return withDescription(this, "debounce", delay, this.flatMapLatest(function(value) {
      return Bacon.later(delay, value);
    }));
  };

  Bacon.Property.prototype.debounce = function(delay) {
    return this.delayChanges("debounce", delay, function(changes) {
      return changes.debounce(delay);
    });
  };

  Bacon.EventStream.prototype.debounceImmediate = function(delay) {
    return withDescription(this, "debounceImmediate", delay, this.flatMapFirst(function(value) {
      return Bacon.once(value).concat(Bacon.later(delay).filter(false));
    }));
  };

  Bacon.Observable.prototype.scan = function(seed, f) {
    var acc, resultProperty, subscribe;
    f = toCombinator(f);
    acc = toOption(seed);
    subscribe = (function(_this) {
      return function(sink) {
        var initSent, reply, sendInit, unsub;
        initSent = false;
        unsub = nop;
        reply = Bacon.more;
        sendInit = function() {
          if (!initSent) {
            return acc.forEach(function(value) {
              initSent = true;
              reply = sink(new Initial(function() {
                return value;
              }));
              if (reply === Bacon.noMore) {
                unsub();
                return unsub = nop;
              }
            });
          }
        };
        unsub = _this.dispatcher.subscribe(function(event) {
          var next, prev;
          if (event.hasValue()) {
            if (initSent && event.isInitial()) {
              return Bacon.more;
            } else {
              if (!event.isInitial()) {
                sendInit();
              }
              initSent = true;
              prev = acc.getOrElse(void 0);
              next = f(prev, event.value());
              acc = new Some(next);
              return sink(event.apply(function() {
                return next;
              }));
            }
          } else {
            if (event.isEnd()) {
              reply = sendInit();
            }
            if (reply !== Bacon.noMore) {
              return sink(event);
            }
          }
        });
        UpdateBarrier.whenDoneWith(resultProperty, sendInit);
        return unsub;
      };
    })(this);
    return resultProperty = new Property(describe(this, "scan", seed, f), subscribe);
  };

  Bacon.Observable.prototype.diff = function(start, f) {
    f = toCombinator(f);
    return withDescription(this, "diff", start, f, this.scan([start], function(prevTuple, next) {
      return [next, f(prevTuple[0], next)];
    }).filter(function(tuple) {
      return tuple.length === 2;
    }).map(function(tuple) {
      return tuple[1];
    }));
  };

  Bacon.Observable.prototype.doAction = function() {
    var f;
    f = makeFunctionArgs(arguments);
    return withDescription(this, "doAction", f, this.withHandler(function(event) {
      if (event.hasValue()) {
        f(event.value());
      }
      return this.push(event);
    }));
  };

  Bacon.Observable.prototype.endOnError = function() {
    var args, f;
    f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if (f == null) {
      f = true;
    }
    return convertArgsToFunction(this, f, args, function(f) {
      return withDescription(this, "endOnError", this.withHandler(function(event) {
        if (event.isError() && f(event.error)) {
          this.push(event);
          return this.push(endEvent());
        } else {
          return this.push(event);
        }
      }));
    });
  };

  Observable.prototype.errors = function() {
    return withDescription(this, "errors", this.filter(function() {
      return false;
    }));
  };

  valueAndEnd = (function(value) {
    return [value, endEvent()];
  });

  Bacon.fromPromise = function(promise, abort) {
    return withDescription(Bacon, "fromPromise", promise, Bacon.fromBinder(function(handler) {
      var ref;
      if ((ref = promise.then(handler, function(e) {
        return handler(new Error(e));
      })) != null) {
        if (typeof ref.done === "function") {
          ref.done();
        }
      }
      return function() {
        if (abort) {
          return typeof promise.abort === "function" ? promise.abort() : void 0;
        }
      };
    }, valueAndEnd));
  };

  Bacon.Observable.prototype.mapError = function() {
    var f;
    f = makeFunctionArgs(arguments);
    return withDescription(this, "mapError", f, this.withHandler(function(event) {
      if (event.isError()) {
        return this.push(nextEvent(f(event.error)));
      } else {
        return this.push(event);
      }
    }));
  };

  Bacon.Observable.prototype.flatMapError = function(fn) {
    return withDescription(this, "flatMapError", fn, this.mapError(function(err) {
      return new Error(err);
    }).flatMap(function(x) {
      if (x instanceof Error) {
        return fn(x.error);
      } else {
        return Bacon.once(x);
      }
    }));
  };

  Bacon.EventStream.prototype.sampledBy = function(sampler, combinator) {
    return withDescription(this, "sampledBy", sampler, combinator, this.toProperty().sampledBy(sampler, combinator));
  };

  Bacon.Property.prototype.sampledBy = function(sampler, combinator) {
    var lazy, result, samplerSource, stream, thisSource;
    if (combinator != null) {
      combinator = toCombinator(combinator);
    } else {
      lazy = true;
      combinator = function(f) {
        return f.value();
      };
    }
    thisSource = new Source(this, false, lazy);
    samplerSource = new Source(sampler, true, lazy);
    stream = Bacon.when([thisSource, samplerSource], combinator);
    result = sampler instanceof Property ? stream.toProperty() : stream;
    return withDescription(this, "sampledBy", sampler, combinator, result);
  };

  Bacon.Property.prototype.sample = function(interval) {
    return withDescription(this, "sample", interval, this.sampledBy(Bacon.interval(interval, {})));
  };

  Bacon.Observable.prototype.map = function() {
    var args, p;
    p = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if (p instanceof Property) {
      return p.sampledBy(this, former);
    } else {
      return convertArgsToFunction(this, p, args, function(f) {
        return withDescription(this, "map", f, this.withHandler(function(event) {
          return this.push(event.fmap(f));
        }));
      });
    }
  };

  Bacon.Observable.prototype.fold = function(seed, f) {
    return withDescription(this, "fold", seed, f, this.scan(seed, f).sampledBy(this.filter(false).mapEnd().toProperty()));
  };

  Observable.prototype.reduce = Observable.prototype.fold;

  Bacon.EventStream.prototype.merge = function(right) {
    var left;
    assertEventStream(right);
    left = this;
    return withDescription(left, "merge", right, Bacon.mergeAll(this, right));
  };

  Bacon.mergeAll = function() {
    var streams;
    streams = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (isArray(streams[0])) {
      streams = streams[0];
    }
    if (streams.length) {
      return new EventStream(describe.apply(null, [Bacon, "mergeAll"].concat(slice.call(streams))), function(sink) {
        var ends, sinks, smartSink;
        ends = 0;
        smartSink = function(obs) {
          return function(unsubBoth) {
            return obs.dispatcher.subscribe(function(event) {
              var reply;
              if (event.isEnd()) {
                ends++;
                if (ends === streams.length) {
                  return sink(endEvent());
                } else {
                  return Bacon.more;
                }
              } else {
                reply = sink(event);
                if (reply === Bacon.noMore) {
                  unsubBoth();
                }
                return reply;
              }
            });
          };
        };
        sinks = _.map(smartSink, streams);
        return new Bacon.CompositeUnsubscribe(sinks).unsubscribe;
      });
    } else {
      return Bacon.never();
    }
  };

  Bacon.Observable.prototype.take = function(count) {
    if (count <= 0) {
      return Bacon.never();
    }
    return withDescription(this, "take", count, this.withHandler(function(event) {
      if (!event.hasValue()) {
        return this.push(event);
      } else {
        count--;
        if (count > 0) {
          return this.push(event);
        } else {
          if (count === 0) {
            this.push(event);
          }
          this.push(endEvent());
          return Bacon.noMore;
        }
      }
    }));
  };

  Bacon.fromArray = function(values) {
    var i;
    assertArray(values);
    if (!values.length) {
      return withDescription(Bacon, "fromArray", values, Bacon.never());
    } else {
      i = 0;
      return new EventStream(describe(Bacon, "fromArray", values), function(sink) {
        var push, reply, unsubd;
        unsubd = false;
        reply = Bacon.more;
        push = function() {
          var value;
          if ((reply !== Bacon.noMore) && !unsubd) {
            value = values[i++];
            reply = sink(toEvent(value));
            if (reply !== Bacon.noMore) {
              if (i === values.length) {
                return sink(endEvent());
              } else {
                return UpdateBarrier.afterTransaction(push);
              }
            }
          }
        };
        push();
        return function() {
          return unsubd = true;
        };
      });
    }
  };

  Bacon.EventStream.prototype.holdWhen = function(valve) {
    var putToHold, releaseHold, valve_;
    valve_ = valve.startWith(false);
    releaseHold = valve_.filter(function(x) {
      return !x;
    });
    putToHold = valve_.filter(_.id);
    return withDescription(this, "holdWhen", valve, this.filter(false).merge(valve_.flatMapConcat((function(_this) {
      return function(shouldHold) {
        if (!shouldHold) {
          return _this.takeUntil(putToHold);
        } else {
          return _this.scan([], (function(xs, x) {
            return xs.concat([x]);
          })).sampledBy(releaseHold).take(1).flatMap(Bacon.fromArray);
        }
      };
    })(this))));
  };

  Bacon.$ = {};

  Bacon.$.asEventStream = function(eventName, selector, eventTransformer) {
    var ref;
    if (_.isFunction(selector)) {
      ref = [selector, void 0], eventTransformer = ref[0], selector = ref[1];
    }
    return withDescription(this.selector || this, "asEventStream", eventName, Bacon.fromBinder((function(_this) {
      return function(handler) {
        _this.on(eventName, selector, handler);
        return function() {
          return _this.off(eventName, selector, handler);
        };
      };
    })(this), eventTransformer));
  };

  if ((ref = typeof jQuery !== "undefined" && jQuery !== null ? jQuery : typeof Zepto !== "undefined" && Zepto !== null ? Zepto : void 0) != null) {
    ref.fn.asEventStream = Bacon.$.asEventStream;
  }

  Bacon.Observable.prototype.log = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    this.subscribe(function(event) {
      return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log.apply(console, slice.call(args).concat([event.log()])) : void 0 : void 0;
    });
    return this;
  };

  Bacon.repeat = function(generator) {
    var index;
    index = 0;
    return Bacon.fromBinder(function(sink) {
      var flag, handleEvent, reply, subscribeNext, unsub;
      flag = false;
      reply = Bacon.more;
      unsub = function() {};
      handleEvent = function(event) {
        if (event.isEnd()) {
          if (!flag) {
            return flag = true;
          } else {
            return subscribeNext();
          }
        } else {
          return reply = sink(event);
        }
      };
      subscribeNext = function() {
        var next;
        flag = true;
        while (flag && reply !== Bacon.noMore) {
          next = generator(index++);
          flag = false;
          if (next) {
            unsub = next.subscribeInternal(handleEvent);
          } else {
            sink(endEvent());
          }
        }
        return flag = true;
      };
      subscribeNext();
      return function() {
        return unsub();
      };
    });
  };

  Bacon.retry = function(options) {
    var delay, error, finished, isRetryable, maxRetries, retries, source;
    if (!_.isFunction(options.source)) {
      throw new Exception("'source' option has to be a function");
    }
    source = options.source;
    retries = options.retries || 0;
    maxRetries = options.maxRetries || retries;
    delay = options.delay || function() {
      return 0;
    };
    isRetryable = options.isRetryable || function() {
      return true;
    };
    finished = false;
    error = null;
    return withDescription(Bacon, "retry", options, Bacon.repeat(function() {
      var context, pause, valueStream;
      if (finished) {
        return null;
      } else {
        valueStream = function() {
          return source().endOnError().withHandler(function(event) {
            if (event.isError()) {
              error = event;
              if (isRetryable(error.error) && retries > 0) {

              } else {
                finished = true;
                return this.push(event);
              }
            } else {
              if (event.hasValue()) {
                error = null;
                finished = true;
              }
              return this.push(event);
            }
          });
        };
        if (error) {
          context = {
            error: error.error,
            retriesDone: maxRetries - retries
          };
          pause = Bacon.later(delay(context)).filter(false);
          retries = retries - 1;
          return pause.concat(Bacon.once().flatMap(valueStream));
        } else {
          return valueStream();
        }
      }
    }));
  };

  Bacon.Observable.prototype.skip = function(count) {
    return withDescription(this, "skip", count, this.withHandler(function(event) {
      if (!event.hasValue()) {
        return this.push(event);
      } else if (count > 0) {
        count--;
        return Bacon.more;
      } else {
        return this.push(event);
      }
    }));
  };

  Bacon.EventStream.prototype.skipUntil = function(starter) {
    var started;
    started = starter.take(1).map(true).toProperty(false);
    return withDescription(this, "skipUntil", starter, this.filter(started));
  };

  Bacon.EventStream.prototype.skipWhile = function() {
    var args, f, ok;
    f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    ok = false;
    return convertArgsToFunction(this, f, args, function(f) {
      return withDescription(this, "skipWhile", f, this.withHandler(function(event) {
        if (ok || !event.hasValue() || !f(event.value())) {
          if (event.hasValue()) {
            ok = true;
          }
          return this.push(event);
        } else {
          return Bacon.more;
        }
      }));
    });
  };

  Bacon.Observable.prototype.slidingWindow = function(n, minValues) {
    if (minValues == null) {
      minValues = 0;
    }
    return withDescription(this, "slidingWindow", n, minValues, this.scan([], (function(window, value) {
      return window.concat([value]).slice(-n);
    })).filter((function(values) {
      return values.length >= minValues;
    })));
  };

  Bacon.spy = function(spy) {
    return spys.push(spy);
  };

  spys = [];

  registerObs = function(obs) {
    var j, len1, spy;
    if (spys.length) {
      if (!registerObs.running) {
        try {
          registerObs.running = true;
          for (j = 0, len1 = spys.length; j < len1; j++) {
            spy = spys[j];
            spy(obs);
          }
        } finally {
          delete registerObs.running;
        }
      }
    }
    return void 0;
  };

  Bacon.Property.prototype.startWith = function(seed) {
    return withDescription(this, "startWith", seed, this.scan(seed, function(prev, next) {
      return next;
    }));
  };

  Bacon.EventStream.prototype.startWith = function(seed) {
    return withDescription(this, "startWith", seed, Bacon.once(seed).concat(this));
  };

  Bacon.Observable.prototype.takeWhile = function() {
    var args, f;
    f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return convertArgsToFunction(this, f, args, function(f) {
      return withDescription(this, "takeWhile", f, this.withHandler(function(event) {
        if (event.filter(f)) {
          return this.push(event);
        } else {
          this.push(endEvent());
          return Bacon.noMore;
        }
      }));
    });
  };

  Bacon.update = function() {
    var i, initial, lateBindFirst, patterns;
    initial = arguments[0], patterns = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    lateBindFirst = function(f) {
      return function() {
        var args;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return function(i) {
          return f.apply(null, [i].concat(args));
        };
      };
    };
    i = patterns.length - 1;
    while (i > 0) {
      if (!(patterns[i] instanceof Function)) {
        patterns[i] = (function(x) {
          return function() {
            return x;
          };
        })(patterns[i]);
      }
      patterns[i] = lateBindFirst(patterns[i]);
      i = i - 2;
    }
    return withDescription.apply(null, [Bacon, "update", initial].concat(slice.call(patterns), [Bacon.when.apply(Bacon, patterns).scan(initial, (function(x, f) {
      return f(x);
    }))]));
  };

  Bacon.zipAsArray = function() {
    var streams;
    streams = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (isArray(streams[0])) {
      streams = streams[0];
    }
    return withDescription.apply(null, [Bacon, "zipAsArray"].concat(slice.call(streams), [Bacon.zipWith(streams, function() {
      var xs;
      xs = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return xs;
    })]));
  };

  Bacon.zipWith = function() {
    var f, ref1, streams;
    f = arguments[0], streams = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if (!_.isFunction(f)) {
      ref1 = [f, streams[0]], streams = ref1[0], f = ref1[1];
    }
    streams = _.map((function(s) {
      return s.toEventStream();
    }), streams);
    return withDescription.apply(null, [Bacon, "zipWith", f].concat(slice.call(streams), [Bacon.when(streams, f)]));
  };

  Bacon.Observable.prototype.zip = function(other, f) {
    if (f == null) {
      f = Array;
    }
    return withDescription(this, "zip", other, Bacon.zipWith([this, other], f));
  };

  

Bacon.Observable.prototype.first = function () {
  return withDescription(this, "first", this.take(1));
};

Bacon.Observable.prototype.last = function () {
  var lastEvent;

  return withDescription(this, "last", this.withHandler(function (event) {
    if (event.isEnd()) {
      if (lastEvent) {
        this.push(lastEvent);
      }
      this.push(endEvent());
      return Bacon.noMore;
    } else {
      lastEvent = event;
    }
  }));
};

Bacon.EventStream.prototype.throttle = function (delay) {
  return withDescription(this, "throttle", delay, this.bufferWithTime(delay).map(function (values) {
    return values[values.length - 1];
  }));
};

Bacon.Property.prototype.throttle = function (delay) {
  return this.delayChanges("throttle", delay, function (changes) {
    return changes.throttle(delay);
  });
};

Observable.prototype.firstToPromise = function (PromiseCtr) {
  var _this = this;

  if (typeof PromiseCtr !== "function") {
    if (typeof Promise === "function") {
      PromiseCtr = Promise;
    } else {
      throw new Exception("There isn't default Promise, use shim or parameter");
    }
  }

  return new PromiseCtr(function (resolve, reject) {
    return _this.subscribe(function (event) {
      if (event.hasValue()) {
        resolve(event.value());
      }
      if (event.isError()) {
        reject(event.error);
      }

      return Bacon.noMore;
    });
  });
};

Observable.prototype.toPromise = function (PromiseCtr) {
  return this.last().firstToPromise(PromiseCtr);
};

if ((typeof define !== "undefined" && define !== null) && (define.amd != null)) {
    define([], function() {
      return Bacon;
    });
    this.Bacon = Bacon;
  } else if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
    module.exports = Bacon;
    Bacon.Bacon = Bacon;
  } else {
    this.Bacon = Bacon;
  }

}).call(this);

},{}],3:[function(require,module,exports){
// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes



/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

exports = module.exports = function(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'windows': 91,
  'command': 91,
  'right click': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
}

// Helper aliases

var aliases = exports.aliases = {
  'shift': 16,
  'ctl': 17,
  'ctrl': 17,
  'control': 17,
  'alt': 18,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 33,
  'ins': 45,
  'del': 46,
  'cmd': 91
}


/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}

},{}],4:[function(require,module,exports){
(function (global){
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3]
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(this.smartypants(cap[0]));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/--/g, '\u2014')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
  return html.replace(/&([#\w]+);/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (typeof module !== 'undefined' && typeof exports === 'object') {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],5:[function(require,module,exports){
'use strict';

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

module.exports = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = Object.keys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

},{}],6:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Bacon = _interopRequire(require("baconjs"));

var util = _interopRequire(require("./util"));

var ATTR_BACKFACE = "backface";
var ATTR_FILTER = "backface-filter";

/**
 * @typedef {Object} BackfaceReturns
 * @property {Bacon.Bus} bgImageBus
 * @property {Bacon.Bus} bgFilterBus
 */

/**
 * backface
 *
 * @param {Element} target
 * @returns {BackfaceReturns}
 */

module.exports = function (target) {

  var bgImageBus = new Bacon.Bus();
  var bgFilterBus = new Bacon.Bus();

  // backface image
  bgImageBus.map(".getAttribute", ATTR_BACKFACE).map(function (src) {
    return src ? "url(" + src + ")" : "";
  }).onValue(util.styleAssignOf(target, "background-image"));

  // backface image css filter
  bgFilterBus.map(".getAttribute", ATTR_FILTER).onValue(util.styleAssignOf(target, util.stylePrefixDetect("filter")));

  Bacon.fromArray(util.toArray(document.querySelectorAll("[" + ATTR_BACKFACE + "]"))).map(".getAttribute", ATTR_BACKFACE).filter(function (v) {
    return !!v;
  }).onValue(util.preloadImg);

  return {
    bgImageBus: bgImageBus,
    bgFilterBus: bgFilterBus
  };
};

},{"./util":15,"baconjs":2}],7:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Bacon = _interopRequire(require("baconjs"));

var keycode = _interopRequire(require("keycode"));

var EVENT_KEYUP = Bacon.fromEventTarget(document, "keyup");
var EVENT_KEYDOWN = Bacon.fromEventTarget(document, "keydown");

/**
 * create EventStream from user input
 */
module.exports = {
  /**
   * @param {String|Number} charKey
   * @returns {EventStream}
   */
  key: function key(charKey) {
    var keyCode = typeof charKey === "string" ? keycode(charKey) : charKey;
    return EVENT_KEYUP.filter(keyCodeIs(keyCode));
  },

  /**
   * @param {String|Number} charKey
   * @returns {EventStream}
   */
  keydown: function keydown(charKey) {
    var keyCode = typeof charKey === "string" ? keycode(charKey) : charKey;
    return EVENT_KEYDOWN.filter(keyCodeIs(keyCode));
  },

  /**
   * @param {Element} el
   * @returns {EventStream}
   */
  click: function click(el) {
    return Bacon.fromEventTarget(el, "click");
  },

  /**
   * @param {Element} [el = document.body]
   * @returns {EventStream}
   */
  mousemove: function mousemove() {
    var el = arguments[0] === undefined ? document.body : arguments[0];

    return Bacon.fromEventTarget(el, "mousemove");
  },

  /**
   * @param {Element} el
   * @returns {EventStream}
   */
  touchstart: function touchstart(el) {
    return Bacon.fromEventTarget(el, "touchstart");
  },

  /**
   * @param {Element} el
   * @returns {EventStream}
   */
  touchend: function touchend(el) {
    return Bacon.fromEventTarget(el, "touchend");
  },

  /**
   * @param {Element} el
   * @returns {EventStream}
   */
  touchmove: function touchmove(el) {
    return Bacon.fromEventTarget(el, "touchmove");
  },

  /**
   * @param {Element} el
   * @param {Bacon.Bus} [stopBus = new Bacon.Bus()]
   * @returns {EventStream}
   */
  swipe: function swipe(el) {
    var stopBus = arguments[1] === undefined ? new Bacon.Bus() : arguments[1];

    var start = this.touchstart(el).doAction(".preventDefault");
    var move = this.touchmove(el).doAction(".preventDefault").throttle(100);
    var end = this.touchend(el).doAction(".preventDefault");

    stopBus.plug(end);

    return start.flatMap(function (initial) {
      var initialValue = {
        init: initial.changedTouches[0].clientX,
        curt: 0
      };
      return move.takeUntil(stopBus).scan(initialValue, function (acc, current) {
        acc.curt = current.changedTouches[0].clientX;
        return acc;
      }).skip(1);
    });
  },

  /**
   * @param {Element} [el = document.body]
   * @returns {EventStream}
   */
  swipeLeft: function swipeLeft() {
    var el = arguments[0] === undefined ? document.body : arguments[0];

    var stopBus = new Bacon.Bus();

    return this.swipe(el, stopBus).filter(function (moves) {
      var init = moves.init;
      var curt = moves.curt;

      var delta = curt - init;
      return delta < -10 && stopBus.push(true);
    });
  },

  /**
   * @param {Element} [el = document.body]
   * @returns {EventStream}
   */
  swipeRight: function swipeRight() {
    var el = arguments[0] === undefined ? document.body : arguments[0];

    var stopBus = new Bacon.Bus();

    return this.swipe(el, stopBus).filter(function (moves) {
      var init = moves.init;
      var curt = moves.curt;

      var delta = curt - init;
      return delta > 10 && stopBus.push(true);
    });
  },

  /**
   * @returns {EventStream}
   */
  resize: function resize() {
    return Bacon.fromEventTarget(window, "resize");
  },

  /**
   * @returns {EventStream}
   */
  hashchange: function hashchange() {
    return Bacon.fromEventTarget(window, "hashchange");
  }
};

/**
 * @param {Number} keyCode
 * @returns {Function}
 */
function keyCodeIs(keyCode) {
  return function (event) {
    return event.keyCode === keyCode;
  };
}

},{"baconjs":2,"keycode":3}],8:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Bacon = _interopRequire(require("baconjs"));

/**
 * full screen
 *
 * @param {Element} target
 * @returns void
 */

module.exports = function (target) {
  var bus = new Bacon.Bus();
  bus.onValue(toggleScreenOf(target));
  return bus;
};

/**
 * @param {Element} el
 * @returns {Function}
 */
function toggleScreenOf(el) {
  var request = undefined,
      exit = undefined;

  if (el.requestFullscreen) {
    request = "requestFullscreen";
  } else if (el.webkitRequestFullscreen) {
    request = "webkitRequestFullscreen";
  } else if (el.mozRequestFullScreen) {
    request = "mozRequestFullScreen";
  } else if (el.msRequestFullscreen) {
    request = "msRequestFullscreen";
  }

  if (document.exitFullscreen) {
    exit = "exitFullscreen";
  } else if (document.webkitExitFullscreen) {
    exit = "webkitExitFullscreen";
  } else if (document.mozCancelFullScreen) {
    exit = "mozCancelFullScreen";
  } else if (document.msExitFullscreen) {
    exit = "msExitFullscreen";
  }

  return function () {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      el[request]();
    } else {
      document[exit]();
    }
  };
}

},{"baconjs":2}],9:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

/**
 * if using a feature that requires a browser-polyfill
 * @see https://babeljs.io/docs/usage/polyfill/
 */
require("babel/browser-polyfill");
/**
 * Talkie.js
 */

var Bacon = _interopRequire(require("baconjs"));

var util = _interopRequire(require("./util"));

var control = _interopRequire(require("./control"));

var query = _interopRequire(require("./query"));

var $slide = _interopRequire(require("./slide"));

var $paging = _interopRequire(require("./paging"));

var $fullScreen = _interopRequire(require("./fullscreen"));

var $responsive = _interopRequire(require("./responsive"));

var $pointer = _interopRequire(require("./pointer"));

var $backface = _interopRequire(require("./backface"));

var IDENT_NEXT = "next";
var IDENT_PREV = "prev";
var IDENT_SCALER = "scaler";
var IDENT_CONTROL = "control";
var IDENT_PAGE = "page";
var IDENT_TOTAL = "total";
var IDENT_PROGRESS = "progress";
var IDENT_POINTER = "pointer";
var IDENT_BACKFACE = "backface";

var SELECTOR_MD = "[type=\"text/x-markdown\"]";

var ATTR_LAYOUT = "layout";
var ATTR_BODY_BG = "body-bg";
var ATTR_NO_TRANS = "no-transition";

var NORMAL_WIDTH = 1024;
var NORMAL_HEIGHT = 768;
var WIDE_WIDTH = 1366;
var WIDE_HEIGHT = 768;

/**
 * @typedef {Object} TalkieOptions
 * @property {Boolean} [api]
 * @property {Boolean} [wide]
 * @property {Boolean} [control]
 * @property {Boolean} [pointer]
 * @property {Boolean} [progress]
 * @property {Boolean} [backface]
 */

/**
 * @param {TalkieOptions} options
 */

module.exports = function () {
  var options = arguments[0] === undefined ? {} : arguments[0];

  return !options.api ? main(options) : {
    main: main,
    util: util,
    control: control,
    query: query,
    slide: $slide,
    paging: $paging,
    fullScreen: $fullScreen,
    responsive: $responsive,
    pointer: $pointer,
    backface: $backface,
    Bacon: Bacon
  };
};

/**
 * @param {TalkieOptions} _options
 */
function main() {
  var _options = arguments[0] === undefined ? {} : arguments[0];

  /**
   * apply default options
   * @type {*|Object}
   */
  var options = util.extend(util.defaults(_options, {
    api: false,
    wide: false,
    control: true,
    pointer: true,
    progress: true,
    backface: true,
    notransition: false
  }), query(location.search));

  /**
   * Init slide sizes
   */
  var width = options.wide ? WIDE_WIDTH : NORMAL_WIDTH;
  var height = options.wide ? WIDE_HEIGHT : NORMAL_HEIGHT;
  document.querySelector("head").insertAdjacentHTML("beforeend", "\n    <style>\n      [layout],\n      #" + IDENT_SCALER + " {\n        width: " + width + "px !important;\n        height: " + height + "px !important;\n      }\n    </style>");

  /**
   * Init slide sections
   */
  var mds = util.toArray(document.querySelectorAll(SELECTOR_MD));
  mds.forEach($slide.compileMarkdown);
  var slides = util.toArray(document.querySelectorAll("[" + ATTR_LAYOUT + "]"));
  var notes = slides.map($slide.extractNote);

  /**
   * Responsive scaling
   */
  document.body.insertAdjacentHTML("beforeend", "\n    <div id=\"" + IDENT_SCALER + "\"></div>\n  ");
  var scalerEl = util.getById(IDENT_SCALER);
  slides.forEach(function (el) {
    return scalerEl.appendChild(el);
  });

  var responsive = $responsive({
    width: width,
    height: height,
    target: scalerEl
  });
  responsive.scaleBus.plug(control.resize());

  /**
   * Paging control
   */
  var paging = $paging({
    startPage: util.getPageNumberFromHash() || 1,
    endPage: slides.length,
    slideElements: slides
  });

  paging.nextBus.plug(control.keydown("right").throttle(100));
  paging.prevBus.plug(control.keydown("left").throttle(100));

  paging.nextBus.plug(control.swipeLeft());
  paging.prevBus.plug(control.swipeRight());

  // sync location.hash
  paging.moveBus.plug(control.hashchange().map(util.getPageNumberFromHash));
  paging.currentEs.onValue(function (page) {
    page === 1 && !location.hash || (location.hash = page);
  });

  // sync body background attribute
  paging.changedEs.map(".getAttribute", ATTR_LAYOUT).onValue(util.attributeAssignOf(document.body, ATTR_BODY_BG));

  /**
   * Insert Ui Elements
   */
  if (options.notransition) {
    Bacon.once(1).onValue(util.attributeAssignOf(document.body, ATTR_NO_TRANS));
  }

  if (options.pointer) {
    document.body.insertAdjacentHTML("beforeend", "<div id=\"" + IDENT_POINTER + "\"></div>");

    var _$pointer = $pointer(util.getById(IDENT_POINTER));

    var coordBus = _$pointer.coordBus;
    var toggleBus = _$pointer.toggleBus;

    coordBus.plug(control.mousemove());
    toggleBus.plug(control.key("b"));
  }

  if (options.backface) {
    document.body.insertAdjacentHTML("beforeend", "<div id=\"" + IDENT_BACKFACE + "\"></div>");

    var _$backface = $backface(util.getById(IDENT_BACKFACE));

    var bgImageBus = _$backface.bgImageBus;
    var bgFilterBus = _$backface.bgFilterBus;

    bgImageBus.plug(paging.changedEs);
    bgFilterBus.plug(paging.changedEs);
  }

  if (options.control) {
    document.body.insertAdjacentHTML("beforeend", "\n      <div id=\"" + IDENT_CONTROL + "\">\n        <p><span id=\"" + IDENT_PREV + "\">◀</span>\n        Page <span id=\"" + IDENT_PAGE + "\">0</span> of <span id=\"" + IDENT_TOTAL + "\">0</span>\n        <span id=\"" + IDENT_NEXT + "\">▶</span></p>\n      </div>\n    ");

    var nextEl = util.getById(IDENT_NEXT);
    var prevEl = util.getById(IDENT_PREV);

    // next button
    paging.nextBus.plug(control.click(nextEl));

    // prev button
    paging.prevBus.plug(control.click(prevEl));

    // current page
    paging.currentEs.onValue(util.textAssignOf(util.getById(IDENT_PAGE)));

    // total of page
    Bacon.once(slides.length).onValue(util.textAssignOf(util.getById(IDENT_TOTAL)));
  }

  if (options.progress) {
    document.body.insertAdjacentHTML("beforeend", "<div id=\"" + IDENT_PROGRESS + "\"></div>");

    // progress bar
    paging.percentEs.onValue(util.styleAssignOf(util.getById(IDENT_PROGRESS), "width"));
  }

  /**
   * FullScreen
   */
  $fullScreen(document.body).plug(control.key("f"));

  /**
   * export some of control
   *
   * @typedef {Object} TalkieExport
   * @param {Object.<Function>} control
   * @param {Bacon.EventStream} changed
   * @param {Bacon.Bus} next
   * @param {Bacon.Bus} prev
   * @param {Bacon.Bus} jump
   * @param {Bacon.Property} ratio
   * @param {Array.<String>} notes
   */
  return {
    Bacon: Bacon,
    control: control,
    changed: paging.changedEs,
    next: paging.nextBus,
    prev: paging.prevBus,
    jump: paging.moveBus,
    ratio: responsive.currentRatio,
    notes: notes
  };
}

},{"./backface":6,"./control":7,"./fullscreen":8,"./paging":10,"./pointer":11,"./query":12,"./responsive":13,"./slide":14,"./util":15,"babel/browser-polyfill":1,"baconjs":2}],10:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Bacon = _interopRequire(require("baconjs"));

/**
 * @typedef {Object} PagingOptions
 * @property {Number} startPage
 * @property {Number} endPage
 * @property {Array<Element>} slideElements
 */

/**
 * @typedef {Object} PagingReturns
 * @property {Bacon.EventStream} currentEs
 * @property {Bacon.EventStream} startEs
 * @property {Bacon.EventStream} endEs
 * @property {Bacon.EventStream} changedEs
 * @property {Bacon.EventStream} percentEs
 * @property {Bacon.Bus} nextBus
 * @property {Bacon.Bus} prevBus
 * @property {Bacon.Bus} moveBus
 */

/**
 * paging control
 *
 * @param {PagingOptions} options
 * @returns {PagingReturns}
 */

module.exports = function (options) {

  var nextBus = new Bacon.Bus();
  var prevBus = new Bacon.Bus();
  var moveBus = new Bacon.Bus();

  var currentBus = new Bacon.Bus();
  var currentPage = currentBus.map(inRangeOf(1, options.endPage)).toProperty(options.startPage || 1).skipDuplicates();

  var nextEs = currentPage.sampledBy(nextBus).map(function (v) {
    return v + 1;
  });
  var prevEs = currentPage.sampledBy(prevBus).map(function (v) {
    return v - 1;
  });
  var moveEs = moveBus.map(function (v) {
    return v /*noop*/;
  });

  var percentString = currentPage.map(percentOf(options.endPage));
  var currentSlide = currentPage.map(function (i) {
    return options.slideElements[i - 1];
  });

  currentBus.plug(nextEs.merge(prevEs).merge(moveEs));

  currentSlide.onValue(function (current) {
    options.slideElements.forEach(toInvisible);
    current && toVisible(current);
  });

  return {
    currentEs: currentPage,
    startEs: currentPage.filter(function (v) {
      return v === 1;
    }),
    endEs: currentPage.filter(function (v) {
      return v === options.endPage;
    }),
    changedEs: currentSlide,
    percentEs: percentString,
    nextBus: nextBus,
    prevBus: prevBus,
    moveBus: moveBus
  };
};

/**
 * @param {Element} el
 */
function toInvisible(el) {
  el.removeAttribute("visible");
}

/**
 * @param {Element} el
 */
function toVisible(el) {
  el.setAttribute("visible", 1);
}

/**
 * @param {Number} min
 * @param {Number} max
 * @returns {Function}
 */
function inRangeOf(min, max) {
  return function (z) {
    return Math.min(max, Math.max(z, min));
  };
}

/**
 * @param {Number} max
 * @returns {Function}
 */
function percentOf(max) {
  return function (current) {
    return 100 / max * current + "%";
  };
}

},{"baconjs":2}],11:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Bacon = _interopRequire(require("baconjs"));

var util = _interopRequire(require("./util"));

/**
 * @typedef {Object} PointerReturns
 * @property {Bacon.Bus} coordBus
 * @property {Bacon.Bus} toggleBus
 */

/**
 * pointer mode
 *
 * @param {Element} target
 * @returns {PointerReturns}
 */

module.exports = function (target) {

  var coordBus = new Bacon.Bus();
  var toggleBus = new Bacon.Bus();

  var x = coordBus.map(function (e) {
    return e.x + "px";
  });
  var y = coordBus.map(function (e) {
    return e.y + "px";
  });

  x.onValue(util.styleAssignOf(target, "left"));
  y.onValue(util.styleAssignOf(target, "top"));

  toggleBus.scan(false, function (acc) {
    return !acc;
  }).map(function (bool) {
    return bool ? "visible" : "hidden";
  }).onValue(util.styleAssignOf(target, "visibility"));

  return {
    coordBus: coordBus,
    toggleBus: toggleBus
  };
};

},{"./util":15,"baconjs":2}],12:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var util = _interopRequire(require("./util"));

/**
 * query parameters
 */
module.exports = parseQuery;

/**
 * @param {String} query
 * @returns {Object}
 */
function parseQuery(query) {
  var ret = {};
  query.slice(1, -1).split("&").map(function (keyEqVal) {
    return keyEqVal.split("=");
  }).forEach(function (kv) {
    return ret[kv[0]] = util.getPrimitiveFromString(kv[1]);
  });
  return ret;
}

},{"./util":15}],13:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Bacon = _interopRequire(require("baconjs"));

var util = _interopRequire(require("./util"));

/**
 * @typedef {Object} RatioOptions
 * @property {Number} width
 * @property {Number} height
 * @property {Element} target
 */

/**
 * @typedef {Object} RatioReturns
 * @property {Bacon.Bus} scaleBus
 * @property {Bacon.Property} currentRatio
 */

/**
 * compute ratio
 *
 * @param {RatioOptions} options
 * @returns {RatioReturns}
 */

module.exports = function () {
  var options = arguments[0] === undefined ? {} : arguments[0];

  var bus = new Bacon.Bus();

  var hRatioFn = horizontalRatioOf(options.width);
  var vRatioFn = verticalRatioOf(options.height);

  var hRatio = bus.map(hRatioFn).toProperty(hRatioFn());
  var vRatio = bus.map(vRatioFn).toProperty(vRatioFn());

  var scale = util.compose(centeringOf(options.target), scalingOf(options.target));

  var currentRatio = Bacon.combineWith(Math.min, hRatio, vRatio).toProperty();

  currentRatio.onValue(scale);

  return {
    scaleBus: bus,
    currentRatio: currentRatio
  };
};

/**
 * @param {Number} width
 * @returns {Function}
 */
function horizontalRatioOf(width) {
  return function () {
    return window.innerWidth / width;
  };
}

/**
 * @param {Number} height
 * @returns {Function}
 */
function verticalRatioOf(height) {
  return function () {
    return window.innerHeight / height;
  };
}

/**
 * @param {Element} el
 * @returns {Function}
 */
function scalingOf(el) {
  var transform = util.stylePrefixDetect("transform");
  return function (ratio) {
    el.style[transform] = "scale(" + Math.abs(ratio) + ")";
  };
}

/**
 * @param {Element} el
 * @returns {Function}
 */
function centeringOf(el) {
  return function () {
    var rect = el.getBoundingClientRect();
    el.style.left = (window.innerWidth - rect.width) / 2;
    el.style.top = (window.innerHeight - rect.height) / 2;
  };
}

},{"./util":15,"baconjs":2}],14:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

var marked = _interopRequire(require("marked"));

var util = _interopRequire(require("./util"));

marked.setOptions({
  langPrefix: "hljs ",
  highlight: function highlight(code) {
    if (window.hljs == null) {
      console.log("highlight.js (`window.hljs`) is missing");
      return code;
    }
    return window.hljs.highlightAuto(code).value;
  }
});

/**
 * compile markdown
 *
 * @returns void
 */
module.exports = {
  compileMarkdown: compileMarkdown,
  extractNote: extractNote
};

/**
 * @param {Element} el
 * @returns {String}
 */
function extractNote(el) {
  var _el$innerHTML$split = el.innerHTML.split(/<hr\s?\/?>/);

  var _el$innerHTML$split2 = _slicedToArray(_el$innerHTML$split, 2);

  var content = _el$innerHTML$split2[0];
  var note = _el$innerHTML$split2[1];

  el.innerHTML = content;

  var container = document.createElement("div");
  container.innerHTML = note || "";
  return container.textContent || "";
}

/**
 * @param {Element} el
 * @returns {Element}
 */
function compileMarkdown(el) {
  var section = document.createElement("section");
  section.innerHTML = marked(el.innerHTML);
  util.toArray(el.attributes).filter(notTypeAttribute).forEach(copyAttributeTo(section));
  el.parentNode.replaceChild(section, el);
  return section;
}

/**
 * @param {Element} el
 * @returns {Function}
 */
function copyAttributeTo(el) {
  return function (attr) {
    el.setAttribute(attr.name, attr.value);
  };
}

/**
 * @param {AttributeNode} attr
 */
function notTypeAttribute(attr) {
  return attr.name !== "type";
}

},{"./util":15,"marked":4}],15:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assign = _interopRequire(require("object-assign"));

module.exports = {
  /**
   * @param {array} list
   * @returns {Array.<T>}
   */
  toArray: function toArray(list) {
    return Array.prototype.slice.call(list);
  },

  /**
   * @param {Object} orig
   * @param {Object} defaults
   * @returns {Object}
   */
  defaults: function defaults(orig, defs) {
    var ret = this.clone(orig);
    Object.keys(defs).forEach(function (k) {
      if (k in ret) {
        return;
      }
      ret[k] = defs[k];
    });
    return ret;
  },

  /**
   * shallow clone func
   *
   * @param {Object} orig
   * @returns {Object}
   */
  clone: function clone(orig) {
    var ret = {};
    Object.keys(orig).forEach(function (k) {
      return ret[k] = orig[k];
    });
    return ret;
  },

  /**
   * @param {Object} target
   * @param {Object} ...sources
   */
  extend: assign,

  /**
   * @param {function} fn...
   * @returns {Function}
   */
  compose: function compose() {
    // http://underscorejs.org/#compose
    var args = arguments;
    var start = args.length - 1;
    return function () {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) {
        result = args[i].call(this, result);
      }
      return result;
    };
  },
  /**
   * @param {string} ident
   * @returns {HTMLElement}
   */
  getById: function getById(ident) {
    return document.getElementById(ident);
  },

  /**
   * @param {Element} el
   */
  textAssignOf: function textAssignOf(el) {
    return function (text) {
      el.textContent = text;
    };
  },

  /**
   * @param {Element} el
   * @param {String} property
   */
  styleAssignOf: function styleAssignOf(el, property) {
    return function (value) {
      el.style[property] = value === "" ? null : value;
    };
  },

  /**
   * @param {Element} el
   * @param {String} attribute
   */
  attributeAssignOf: function attributeAssignOf(el, attribute) {
    return function (value) {
      if (value != null) {
        el.setAttribute(attribute, value);
      } else {
        el.removeAttribute(attribute);
      }
    };
  },

  /**
   * @param {String} src
   */
  preloadImg: function preloadImg(src) {
    var img = document.createElement("img");
    img.onload = function () {
      return img.parentNode.removeChild(img);
    };
    img.src = src;
    img.style.display = "none";
    document.body.appendChild(img);
  },

  /**
   * @returns {Number}
   */
  getPageNumberFromHash: function getPageNumberFromHash() {
    return parseInt(location.hash.replace("#", ""), 10) || 0;
  },

  /**
   * @returns {*}
   */
  getPrimitiveFromString: function getPrimitiveFromString(str) {
    var ret = str == null ? null : str + "";

    if (str === "true") {
      ret = true;
    } else if (str === "false") {
      ret = false;
    } else if (str == null) {
      ret = null;
    } else if (str.match(/^\d+$/)) {
      ret = parseInt(str, 10);
    }

    return ret;
  },

  /**
   * @param {String} property
   * @returns {String}
   */
  stylePrefixDetect: function stylePrefixDetect(property) {
    var validProperty = undefined;
    var styles = this.toArray(window.getComputedStyle(document.documentElement, ""));
    var includes = function (needle) {
      return styles.indexOf(needle) !== -1;
    };

    if (includes("-webkit-" + property)) {
      validProperty = "-webkit-" + property;
    } else if (includes("-moz-" + property)) {
      validProperty = "-moz-" + property;
    } else if (includes("-ms-" + property)) {
      validProperty = "-ms-" + property;
    } else if (includes(property)) {
      validProperty = property;
    }

    return validProperty;
  }
};

},{"object-assign":5}]},{},[9])(9)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWNvbmpzL2Rpc3QvQmFjb24uanMiLCJub2RlX21vZHVsZXMva2V5Y29kZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZWQvbGliL21hcmtlZC5qcyIsIm5vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiL1VzZXJzL2NhbmNlci93b3Jrcy9zbGlkZS9zbGlkZS1ub2RlLXNjcmFwaW5nL3NyYy9iYWNrZmFjZS5qcyIsIi9Vc2Vycy9jYW5jZXIvd29ya3Mvc2xpZGUvc2xpZGUtbm9kZS1zY3JhcGluZy9zcmMvY29udHJvbC5qcyIsIi9Vc2Vycy9jYW5jZXIvd29ya3Mvc2xpZGUvc2xpZGUtbm9kZS1zY3JhcGluZy9zcmMvZnVsbHNjcmVlbi5qcyIsIi9Vc2Vycy9jYW5jZXIvd29ya3Mvc2xpZGUvc2xpZGUtbm9kZS1zY3JhcGluZy9zcmMvaW5kZXguanMiLCIvVXNlcnMvY2FuY2VyL3dvcmtzL3NsaWRlL3NsaWRlLW5vZGUtc2NyYXBpbmcvc3JjL3BhZ2luZy5qcyIsIi9Vc2Vycy9jYW5jZXIvd29ya3Mvc2xpZGUvc2xpZGUtbm9kZS1zY3JhcGluZy9zcmMvcG9pbnRlci5qcyIsIi9Vc2Vycy9jYW5jZXIvd29ya3Mvc2xpZGUvc2xpZGUtbm9kZS1zY3JhcGluZy9zcmMvcXVlcnkuanMiLCIvVXNlcnMvY2FuY2VyL3dvcmtzL3NsaWRlL3NsaWRlLW5vZGUtc2NyYXBpbmcvc3JjL3Jlc3BvbnNpdmUuanMiLCIvVXNlcnMvY2FuY2VyL3dvcmtzL3NsaWRlL3NsaWRlLW5vZGUtc2NyYXBpbmcvc3JjL3NsaWRlLmpzIiwiL1VzZXJzL2NhbmNlci93b3Jrcy9zbGlkZS9zbGlkZS1ub2RlLXNjcmFwaW5nL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0dkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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MUIsU0FBRyxHQUFHLEtBQUssQ0FBQztLQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO0FBQ3RCLFNBQUcsR0FBRyxJQUFJLENBQUM7S0FDWixNQUFNLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUM3QixTQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxXQUFPLEdBQUcsQ0FBQztHQUNaOzs7Ozs7QUFNRCxtQkFBaUIsRUFBQSwyQkFBQyxRQUFRLEVBQUU7QUFDMUIsUUFBSSxhQUFhLFlBQUEsQ0FBQztBQUNsQixRQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakYsUUFBSSxRQUFRLEdBQUcsVUFBQyxNQUFNO2FBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FBQSxDQUFDOztBQUV6RCxRQUFJLFFBQVEsY0FBWSxRQUFRLENBQUcsRUFBRTtBQUNuQyxtQkFBYSxnQkFBYyxRQUFRLEFBQUUsQ0FBQztLQUN2QyxNQUFNLElBQUksUUFBUSxXQUFTLFFBQVEsQ0FBRyxFQUFFO0FBQ3ZDLG1CQUFhLGFBQVcsUUFBUSxBQUFFLENBQUM7S0FDcEMsTUFBTSxJQUFJLFFBQVEsVUFBUSxRQUFRLENBQUcsRUFBRTtBQUN0QyxtQkFBYSxZQUFVLFFBQVEsQUFBRSxDQUFDO0tBQ25DLE1BQU0sSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDN0IsbUJBQWEsR0FBRyxRQUFRLENBQUM7S0FDMUI7O0FBRUQsV0FBTyxhQUFhLENBQUM7R0FDdEI7Q0FDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7KGZ1bmN0aW9uKGdsb2JhbCl7XCJ1c2Ugc3RyaWN0XCI7aWYoZ2xvYmFsLl9iYWJlbFBvbHlmaWxsKXt0aHJvdyBuZXcgRXJyb3IoXCJvbmx5IG9uZSBpbnN0YW5jZSBvZiBiYWJlbC9wb2x5ZmlsbCBpcyBhbGxvd2VkXCIpfWdsb2JhbC5fYmFiZWxQb2x5ZmlsbD10cnVlO3JlcXVpcmUoXCJjb3JlLWpzL3NoaW1cIik7cmVxdWlyZShcInJlZ2VuZXJhdG9yLWJhYmVsL3J1bnRpbWVcIil9KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCI/Z2xvYmFsOnR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIj9zZWxmOnR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiP3dpbmRvdzp7fSl9LHtcImNvcmUtanMvc2hpbVwiOjIsXCJyZWdlbmVyYXRvci1iYWJlbC9ydW50aW1lXCI6M31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpeyFmdW5jdGlvbihnbG9iYWwsZnJhbWV3b3JrLHVuZGVmaW5lZCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIE9CSkVDVD1cIk9iamVjdFwiLEZVTkNUSU9OPVwiRnVuY3Rpb25cIixBUlJBWT1cIkFycmF5XCIsU1RSSU5HPVwiU3RyaW5nXCIsTlVNQkVSPVwiTnVtYmVyXCIsUkVHRVhQPVwiUmVnRXhwXCIsREFURT1cIkRhdGVcIixNQVA9XCJNYXBcIixTRVQ9XCJTZXRcIixXRUFLTUFQPVwiV2Vha01hcFwiLFdFQUtTRVQ9XCJXZWFrU2V0XCIsU1lNQk9MPVwiU3ltYm9sXCIsUFJPTUlTRT1cIlByb21pc2VcIixNQVRIPVwiTWF0aFwiLEFSR1VNRU5UUz1cIkFyZ3VtZW50c1wiLFBST1RPVFlQRT1cInByb3RvdHlwZVwiLENPTlNUUlVDVE9SPVwiY29uc3RydWN0b3JcIixUT19TVFJJTkc9XCJ0b1N0cmluZ1wiLFRPX1NUUklOR19UQUc9VE9fU1RSSU5HK1wiVGFnXCIsVE9fTE9DQUxFPVwidG9Mb2NhbGVTdHJpbmdcIixIQVNfT1dOPVwiaGFzT3duUHJvcGVydHlcIixGT1JfRUFDSD1cImZvckVhY2hcIixJVEVSQVRPUj1cIml0ZXJhdG9yXCIsRkZfSVRFUkFUT1I9XCJAQFwiK0lURVJBVE9SLFBST0NFU1M9XCJwcm9jZXNzXCIsQ1JFQVRFX0VMRU1FTlQ9XCJjcmVhdGVFbGVtZW50XCIsRnVuY3Rpb249Z2xvYmFsW0ZVTkNUSU9OXSxPYmplY3Q9Z2xvYmFsW09CSkVDVF0sQXJyYXk9Z2xvYmFsW0FSUkFZXSxTdHJpbmc9Z2xvYmFsW1NUUklOR10sTnVtYmVyPWdsb2JhbFtOVU1CRVJdLFJlZ0V4cD1nbG9iYWxbUkVHRVhQXSxEYXRlPWdsb2JhbFtEQVRFXSxNYXA9Z2xvYmFsW01BUF0sU2V0PWdsb2JhbFtTRVRdLFdlYWtNYXA9Z2xvYmFsW1dFQUtNQVBdLFdlYWtTZXQ9Z2xvYmFsW1dFQUtTRVRdLFN5bWJvbD1nbG9iYWxbU1lNQk9MXSxNYXRoPWdsb2JhbFtNQVRIXSxUeXBlRXJyb3I9Z2xvYmFsLlR5cGVFcnJvcixSYW5nZUVycm9yPWdsb2JhbC5SYW5nZUVycm9yLHNldFRpbWVvdXQ9Z2xvYmFsLnNldFRpbWVvdXQsc2V0SW1tZWRpYXRlPWdsb2JhbC5zZXRJbW1lZGlhdGUsY2xlYXJJbW1lZGlhdGU9Z2xvYmFsLmNsZWFySW1tZWRpYXRlLHBhcnNlSW50PWdsb2JhbC5wYXJzZUludCxpc0Zpbml0ZT1nbG9iYWwuaXNGaW5pdGUscHJvY2Vzcz1nbG9iYWxbUFJPQ0VTU10sbmV4dFRpY2s9cHJvY2VzcyYmcHJvY2Vzcy5uZXh0VGljayxkb2N1bWVudD1nbG9iYWwuZG9jdW1lbnQsaHRtbD1kb2N1bWVudCYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LG5hdmlnYXRvcj1nbG9iYWwubmF2aWdhdG9yLGRlZmluZT1nbG9iYWwuZGVmaW5lLGNvbnNvbGU9Z2xvYmFsLmNvbnNvbGV8fHt9LEFycmF5UHJvdG89QXJyYXlbUFJPVE9UWVBFXSxPYmplY3RQcm90bz1PYmplY3RbUFJPVE9UWVBFXSxGdW5jdGlvblByb3RvPUZ1bmN0aW9uW1BST1RPVFlQRV0sSW5maW5pdHk9MS8wLERPVD1cIi5cIjtmdW5jdGlvbiBpc09iamVjdChpdCl7cmV0dXJuIGl0IT09bnVsbCYmKHR5cGVvZiBpdD09XCJvYmplY3RcInx8dHlwZW9mIGl0PT1cImZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGlzRnVuY3Rpb24oaXQpe3JldHVybiB0eXBlb2YgaXQ9PVwiZnVuY3Rpb25cIn12YXIgaXNOYXRpdmU9Y3R4KC8uLy50ZXN0LC9cXFtuYXRpdmUgY29kZVxcXVxccypcXH1cXHMqJC8sMSk7dmFyIHRvU3RyaW5nPU9iamVjdFByb3RvW1RPX1NUUklOR107ZnVuY3Rpb24gc2V0VG9TdHJpbmdUYWcoaXQsdGFnLHN0YXQpe2lmKGl0JiYhaGFzKGl0PXN0YXQ/aXQ6aXRbUFJPVE9UWVBFXSxTWU1CT0xfVEFHKSloaWRkZW4oaXQsU1lNQk9MX1RBRyx0YWcpfWZ1bmN0aW9uIGNvZihpdCl7cmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsLTEpfWZ1bmN0aW9uIGNsYXNzb2YoaXQpe3ZhciBPLFQ7cmV0dXJuIGl0PT11bmRlZmluZWQ/aXQ9PT11bmRlZmluZWQ/XCJVbmRlZmluZWRcIjpcIk51bGxcIjp0eXBlb2YoVD0oTz1PYmplY3QoaXQpKVtTWU1CT0xfVEFHXSk9PVwic3RyaW5nXCI/VDpjb2YoTyl9dmFyIGNhbGw9RnVuY3Rpb25Qcm90by5jYWxsLGFwcGx5PUZ1bmN0aW9uUHJvdG8uYXBwbHksUkVGRVJFTkNFX0dFVDtmdW5jdGlvbiBwYXJ0KCl7dmFyIGZuPWFzc2VydEZ1bmN0aW9uKHRoaXMpLGxlbmd0aD1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9QXJyYXkobGVuZ3RoKSxpPTAsXz1wYXRoLl8saG9sZGVyPWZhbHNlO3doaWxlKGxlbmd0aD5pKWlmKChhcmdzW2ldPWFyZ3VtZW50c1tpKytdKT09PV8paG9sZGVyPXRydWU7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpcyxfbGVuZ3RoPWFyZ3VtZW50cy5sZW5ndGgsaT0wLGo9MCxfYXJncztpZighaG9sZGVyJiYhX2xlbmd0aClyZXR1cm4gaW52b2tlKGZuLGFyZ3MsdGhhdCk7X2FyZ3M9YXJncy5zbGljZSgpO2lmKGhvbGRlcilmb3IoO2xlbmd0aD5pO2krKylpZihfYXJnc1tpXT09PV8pX2FyZ3NbaV09YXJndW1lbnRzW2orK107d2hpbGUoX2xlbmd0aD5qKV9hcmdzLnB1c2goYXJndW1lbnRzW2orK10pO3JldHVybiBpbnZva2UoZm4sX2FyZ3MsdGhhdCl9fWZ1bmN0aW9uIGN0eChmbix0aGF0LGxlbmd0aCl7YXNzZXJ0RnVuY3Rpb24oZm4pO2lmKH5sZW5ndGgmJnRoYXQ9PT11bmRlZmluZWQpcmV0dXJuIGZuO3N3aXRjaChsZW5ndGgpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGZuLmNhbGwodGhhdCxhKX07Y2FzZSAyOnJldHVybiBmdW5jdGlvbihhLGIpe3JldHVybiBmbi5jYWxsKHRoYXQsYSxiKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZuLmNhbGwodGhhdCxhLGIsYyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBmbi5hcHBseSh0aGF0LGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGludm9rZShmbixhcmdzLHRoYXQpe3ZhciB1bj10aGF0PT09dW5kZWZpbmVkO3N3aXRjaChhcmdzLmxlbmd0aHwwKXtjYXNlIDA6cmV0dXJuIHVuP2ZuKCk6Zm4uY2FsbCh0aGF0KTtjYXNlIDE6cmV0dXJuIHVuP2ZuKGFyZ3NbMF0pOmZuLmNhbGwodGhhdCxhcmdzWzBdKTtjYXNlIDI6cmV0dXJuIHVuP2ZuKGFyZ3NbMF0sYXJnc1sxXSk6Zm4uY2FsbCh0aGF0LGFyZ3NbMF0sYXJnc1sxXSk7Y2FzZSAzOnJldHVybiB1bj9mbihhcmdzWzBdLGFyZ3NbMV0sYXJnc1syXSk6Zm4uY2FsbCh0aGF0LGFyZ3NbMF0sYXJnc1sxXSxhcmdzWzJdKTtjYXNlIDQ6cmV0dXJuIHVuP2ZuKGFyZ3NbMF0sYXJnc1sxXSxhcmdzWzJdLGFyZ3NbM10pOmZuLmNhbGwodGhhdCxhcmdzWzBdLGFyZ3NbMV0sYXJnc1syXSxhcmdzWzNdKTtjYXNlIDU6cmV0dXJuIHVuP2ZuKGFyZ3NbMF0sYXJnc1sxXSxhcmdzWzJdLGFyZ3NbM10sYXJnc1s0XSk6Zm4uY2FsbCh0aGF0LGFyZ3NbMF0sYXJnc1sxXSxhcmdzWzJdLGFyZ3NbM10sYXJnc1s0XSl9cmV0dXJuIGZuLmFwcGx5KHRoYXQsYXJncyl9dmFyIGNyZWF0ZT1PYmplY3QuY3JlYXRlLGdldFByb3RvdHlwZU9mPU9iamVjdC5nZXRQcm90b3R5cGVPZixzZXRQcm90b3R5cGVPZj1PYmplY3Quc2V0UHJvdG90eXBlT2YsZGVmaW5lUHJvcGVydHk9T2JqZWN0LmRlZmluZVByb3BlcnR5LGRlZmluZVByb3BlcnRpZXM9T2JqZWN0LmRlZmluZVByb3BlcnRpZXMsZ2V0T3duRGVzY3JpcHRvcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLGdldEtleXM9T2JqZWN0LmtleXMsZ2V0TmFtZXM9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsZ2V0U3ltYm9scz1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLGlzRnJvemVuPU9iamVjdC5pc0Zyb3plbixoYXM9Y3R4KGNhbGwsT2JqZWN0UHJvdG9bSEFTX09XTl0sMiksRVM1T2JqZWN0PU9iamVjdCxEaWN0O2Z1bmN0aW9uIHRvT2JqZWN0KGl0KXtyZXR1cm4gRVM1T2JqZWN0KGFzc2VydERlZmluZWQoaXQpKX1mdW5jdGlvbiByZXR1cm5JdChpdCl7cmV0dXJuIGl0fWZ1bmN0aW9uIHJldHVyblRoaXMoKXtyZXR1cm4gdGhpc31mdW5jdGlvbiBnZXQob2JqZWN0LGtleSl7aWYoaGFzKG9iamVjdCxrZXkpKXJldHVybiBvYmplY3Rba2V5XX1mdW5jdGlvbiBvd25LZXlzKGl0KXthc3NlcnRPYmplY3QoaXQpO3JldHVybiBnZXRTeW1ib2xzP2dldE5hbWVzKGl0KS5jb25jYXQoZ2V0U3ltYm9scyhpdCkpOmdldE5hbWVzKGl0KX12YXIgYXNzaWduPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHRhcmdldCxzb3VyY2Upe3ZhciBUPU9iamVjdChhc3NlcnREZWZpbmVkKHRhcmdldCkpLGw9YXJndW1lbnRzLmxlbmd0aCxpPTE7d2hpbGUobD5pKXt2YXIgUz1FUzVPYmplY3QoYXJndW1lbnRzW2krK10pLGtleXM9Z2V0S2V5cyhTKSxsZW5ndGg9a2V5cy5sZW5ndGgsaj0wLGtleTt3aGlsZShsZW5ndGg+ailUW2tleT1rZXlzW2orK11dPVNba2V5XX1yZXR1cm4gVH07ZnVuY3Rpb24ga2V5T2Yob2JqZWN0LGVsKXt2YXIgTz10b09iamVjdChvYmplY3QpLGtleXM9Z2V0S2V5cyhPKSxsZW5ndGg9a2V5cy5sZW5ndGgsaW5kZXg9MCxrZXk7d2hpbGUobGVuZ3RoPmluZGV4KWlmKE9ba2V5PWtleXNbaW5kZXgrK11dPT09ZWwpcmV0dXJuIGtleX1mdW5jdGlvbiBhcnJheShpdCl7cmV0dXJuIFN0cmluZyhpdCkuc3BsaXQoXCIsXCIpfXZhciBwdXNoPUFycmF5UHJvdG8ucHVzaCx1bnNoaWZ0PUFycmF5UHJvdG8udW5zaGlmdCxzbGljZT1BcnJheVByb3RvLnNsaWNlLHNwbGljZT1BcnJheVByb3RvLnNwbGljZSxpbmRleE9mPUFycmF5UHJvdG8uaW5kZXhPZixmb3JFYWNoPUFycmF5UHJvdG9bRk9SX0VBQ0hdO2Z1bmN0aW9uIGNyZWF0ZUFycmF5TWV0aG9kKHR5cGUpe3ZhciBpc01hcD10eXBlPT0xLGlzRmlsdGVyPXR5cGU9PTIsaXNTb21lPXR5cGU9PTMsaXNFdmVyeT10eXBlPT00LGlzRmluZEluZGV4PXR5cGU9PTYsbm9ob2xlcz10eXBlPT01fHxpc0ZpbmRJbmRleDtyZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2tmbil7dmFyIE89T2JqZWN0KGFzc2VydERlZmluZWQodGhpcykpLHRoYXQ9YXJndW1lbnRzWzFdLHNlbGY9RVM1T2JqZWN0KE8pLGY9Y3R4KGNhbGxiYWNrZm4sdGhhdCwzKSxsZW5ndGg9dG9MZW5ndGgoc2VsZi5sZW5ndGgpLGluZGV4PTAscmVzdWx0PWlzTWFwP0FycmF5KGxlbmd0aCk6aXNGaWx0ZXI/W106dW5kZWZpbmVkLHZhbCxyZXM7Zm9yKDtsZW5ndGg+aW5kZXg7aW5kZXgrKylpZihub2hvbGVzfHxpbmRleCBpbiBzZWxmKXt2YWw9c2VsZltpbmRleF07cmVzPWYodmFsLGluZGV4LE8pO2lmKHR5cGUpe2lmKGlzTWFwKXJlc3VsdFtpbmRleF09cmVzO2Vsc2UgaWYocmVzKXN3aXRjaCh0eXBlKXtjYXNlIDM6cmV0dXJuIHRydWU7Y2FzZSA1OnJldHVybiB2YWw7Y2FzZSA2OnJldHVybiBpbmRleDtjYXNlIDI6cmVzdWx0LnB1c2godmFsKX1lbHNlIGlmKGlzRXZlcnkpcmV0dXJuIGZhbHNlfX1yZXR1cm4gaXNGaW5kSW5kZXg/LTE6aXNTb21lfHxpc0V2ZXJ5P2lzRXZlcnk6cmVzdWx0fX1mdW5jdGlvbiBjcmVhdGVBcnJheUNvbnRhaW5zKGlzQ29udGFpbnMpe3JldHVybiBmdW5jdGlvbihlbCl7dmFyIE89dG9PYmplY3QodGhpcyksbGVuZ3RoPXRvTGVuZ3RoKE8ubGVuZ3RoKSxpbmRleD10b0luZGV4KGFyZ3VtZW50c1sxXSxsZW5ndGgpO2lmKGlzQ29udGFpbnMmJmVsIT1lbCl7Zm9yKDtsZW5ndGg+aW5kZXg7aW5kZXgrKylpZihzYW1lTmFOKE9baW5kZXhdKSlyZXR1cm4gaXNDb250YWluc3x8aW5kZXh9ZWxzZSBmb3IoO2xlbmd0aD5pbmRleDtpbmRleCsrKWlmKGlzQ29udGFpbnN8fGluZGV4IGluIE8pe2lmKE9baW5kZXhdPT09ZWwpcmV0dXJuIGlzQ29udGFpbnN8fGluZGV4fXJldHVybiFpc0NvbnRhaW5zJiYtMX19ZnVuY3Rpb24gZ2VuZXJpYyhBLEIpe3JldHVybiB0eXBlb2YgQT09XCJmdW5jdGlvblwiP0E6Qn12YXIgTUFYX1NBRkVfSU5URUdFUj05MDA3MTk5MjU0NzQwOTkxLHBvdz1NYXRoLnBvdyxhYnM9TWF0aC5hYnMsY2VpbD1NYXRoLmNlaWwsZmxvb3I9TWF0aC5mbG9vcixtYXg9TWF0aC5tYXgsbWluPU1hdGgubWluLHJhbmRvbT1NYXRoLnJhbmRvbSx0cnVuYz1NYXRoLnRydW5jfHxmdW5jdGlvbihpdCl7cmV0dXJuKGl0PjA/Zmxvb3I6Y2VpbCkoaXQpfTtmdW5jdGlvbiBzYW1lTmFOKG51bWJlcil7cmV0dXJuIG51bWJlciE9bnVtYmVyfWZ1bmN0aW9uIHRvSW50ZWdlcihpdCl7cmV0dXJuIGlzTmFOKGl0KT8wOnRydW5jKGl0KX1mdW5jdGlvbiB0b0xlbmd0aChpdCl7cmV0dXJuIGl0PjA/bWluKHRvSW50ZWdlcihpdCksTUFYX1NBRkVfSU5URUdFUik6MH1mdW5jdGlvbiB0b0luZGV4KGluZGV4LGxlbmd0aCl7dmFyIGluZGV4PXRvSW50ZWdlcihpbmRleCk7cmV0dXJuIGluZGV4PDA/bWF4KGluZGV4K2xlbmd0aCwwKTptaW4oaW5kZXgsbGVuZ3RoKX1mdW5jdGlvbiBseihudW0pe3JldHVybiBudW0+OT9udW06XCIwXCIrbnVtfWZ1bmN0aW9uIGNyZWF0ZVJlcGxhY2VyKHJlZ0V4cCxyZXBsYWNlLGlzU3RhdGljKXt2YXIgcmVwbGFjZXI9aXNPYmplY3QocmVwbGFjZSk/ZnVuY3Rpb24ocGFydCl7cmV0dXJuIHJlcGxhY2VbcGFydF19OnJlcGxhY2U7cmV0dXJuIGZ1bmN0aW9uKGl0KXtyZXR1cm4gU3RyaW5nKGlzU3RhdGljP2l0OnRoaXMpLnJlcGxhY2UocmVnRXhwLHJlcGxhY2VyKX19ZnVuY3Rpb24gY3JlYXRlUG9pbnRBdCh0b1N0cmluZyl7cmV0dXJuIGZ1bmN0aW9uKHBvcyl7dmFyIHM9U3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpLGk9dG9JbnRlZ2VyKHBvcyksbD1zLmxlbmd0aCxhLGI7aWYoaTwwfHxpPj1sKXJldHVybiB0b1N0cmluZz9cIlwiOnVuZGVmaW5lZDthPXMuY2hhckNvZGVBdChpKTtyZXR1cm4gYTw1NTI5Nnx8YT41NjMxOXx8aSsxPT09bHx8KGI9cy5jaGFyQ29kZUF0KGkrMSkpPDU2MzIwfHxiPjU3MzQzP3RvU3RyaW5nP3MuY2hhckF0KGkpOmE6dG9TdHJpbmc/cy5zbGljZShpLGkrMik6KGEtNTUyOTY8PDEwKSsoYi01NjMyMCkrNjU1MzZ9fXZhciBSRURVQ0VfRVJST1I9XCJSZWR1Y2Ugb2YgZW1wdHkgb2JqZWN0IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiO2Z1bmN0aW9uIGFzc2VydChjb25kaXRpb24sbXNnMSxtc2cyKXtpZighY29uZGl0aW9uKXRocm93IFR5cGVFcnJvcihtc2cyP21zZzErbXNnMjptc2cxKX1mdW5jdGlvbiBhc3NlcnREZWZpbmVkKGl0KXtpZihpdD09dW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZFwiKTtyZXR1cm4gaXR9ZnVuY3Rpb24gYXNzZXJ0RnVuY3Rpb24oaXQpe2Fzc2VydChpc0Z1bmN0aW9uKGl0KSxpdCxcIiBpcyBub3QgYSBmdW5jdGlvbiFcIik7cmV0dXJuIGl0fWZ1bmN0aW9uIGFzc2VydE9iamVjdChpdCl7YXNzZXJ0KGlzT2JqZWN0KGl0KSxpdCxcIiBpcyBub3QgYW4gb2JqZWN0IVwiKTtyZXR1cm4gaXR9ZnVuY3Rpb24gYXNzZXJ0SW5zdGFuY2UoaXQsQ29uc3RydWN0b3IsbmFtZSl7YXNzZXJ0KGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IsbmFtZSxcIjogdXNlIHRoZSAnbmV3JyBvcGVyYXRvciFcIil9ZnVuY3Rpb24gZGVzY3JpcHRvcihiaXRtYXAsdmFsdWUpe3JldHVybntlbnVtZXJhYmxlOiEoYml0bWFwJjEpLGNvbmZpZ3VyYWJsZTohKGJpdG1hcCYyKSx3cml0YWJsZTohKGJpdG1hcCY0KSx2YWx1ZTp2YWx1ZX19ZnVuY3Rpb24gc2ltcGxlU2V0KG9iamVjdCxrZXksdmFsdWUpe29iamVjdFtrZXldPXZhbHVlO3JldHVybiBvYmplY3R9ZnVuY3Rpb24gY3JlYXRlRGVmaW5lcihiaXRtYXApe3JldHVybiBERVNDP2Z1bmN0aW9uKG9iamVjdCxrZXksdmFsdWUpe3JldHVybiBkZWZpbmVQcm9wZXJ0eShvYmplY3Qsa2V5LGRlc2NyaXB0b3IoYml0bWFwLHZhbHVlKSl9OnNpbXBsZVNldH1mdW5jdGlvbiB1aWQoa2V5KXtyZXR1cm4gU1lNQk9MK1wiKFwiK2tleStcIilfXCIrKCsrc2lkK3JhbmRvbSgpKVtUT19TVFJJTkddKDM2KX1mdW5jdGlvbiBnZXRXZWxsS25vd25TeW1ib2wobmFtZSxzZXR0ZXIpe3JldHVybiBTeW1ib2wmJlN5bWJvbFtuYW1lXXx8KHNldHRlcj9TeW1ib2w6c2FmZVN5bWJvbCkoU1lNQk9MK0RPVCtuYW1lKX12YXIgREVTQz0hIWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDJ9fSkuYT09Mn1jYXRjaChlKXt9fSgpLHNpZD0wLGhpZGRlbj1jcmVhdGVEZWZpbmVyKDEpLHNldD1TeW1ib2w/c2ltcGxlU2V0OmhpZGRlbixzYWZlU3ltYm9sPVN5bWJvbHx8dWlkO2Z1bmN0aW9uIGFzc2lnbkhpZGRlbih0YXJnZXQsc3JjKXtmb3IodmFyIGtleSBpbiBzcmMpaGlkZGVuKHRhcmdldCxrZXksc3JjW2tleV0pO3JldHVybiB0YXJnZXR9dmFyIFNZTUJPTF9VTlNDT1BBQkxFUz1nZXRXZWxsS25vd25TeW1ib2woXCJ1bnNjb3BhYmxlc1wiKSxBcnJheVVuc2NvcGFibGVzPUFycmF5UHJvdG9bU1lNQk9MX1VOU0NPUEFCTEVTXXx8e30sU1lNQk9MX1RBRz1nZXRXZWxsS25vd25TeW1ib2woVE9fU1RSSU5HX1RBRyksU1lNQk9MX1NQRUNJRVM9Z2V0V2VsbEtub3duU3ltYm9sKFwic3BlY2llc1wiKSxTWU1CT0xfSVRFUkFUT1I7ZnVuY3Rpb24gc2V0U3BlY2llcyhDKXtpZihERVNDJiYoZnJhbWV3b3JrfHwhaXNOYXRpdmUoQykpKWRlZmluZVByb3BlcnR5KEMsU1lNQk9MX1NQRUNJRVMse2NvbmZpZ3VyYWJsZTp0cnVlLGdldDpyZXR1cm5UaGlzfSl9dmFyIE5PREU9Y29mKHByb2Nlc3MpPT1QUk9DRVNTLGNvcmU9e30scGF0aD1mcmFtZXdvcms/Z2xvYmFsOmNvcmUsb2xkPWdsb2JhbC5jb3JlLGV4cG9ydEdsb2JhbCxGT1JDRUQ9MSxHTE9CQUw9MixTVEFUSUM9NCxQUk9UTz04LEJJTkQ9MTYsV1JBUD0zMjtmdW5jdGlvbiAkZGVmaW5lKHR5cGUsbmFtZSxzb3VyY2Upe3ZhciBrZXksb3duLG91dCxleHAsaXNHbG9iYWw9dHlwZSZHTE9CQUwsdGFyZ2V0PWlzR2xvYmFsP2dsb2JhbDp0eXBlJlNUQVRJQz9nbG9iYWxbbmFtZV06KGdsb2JhbFtuYW1lXXx8T2JqZWN0UHJvdG8pW1BST1RPVFlQRV0sZXhwb3J0cz1pc0dsb2JhbD9jb3JlOmNvcmVbbmFtZV18fChjb3JlW25hbWVdPXt9KTtpZihpc0dsb2JhbClzb3VyY2U9bmFtZTtmb3Ioa2V5IGluIHNvdXJjZSl7b3duPSEodHlwZSZGT1JDRUQpJiZ0YXJnZXQmJmtleSBpbiB0YXJnZXQmJighaXNGdW5jdGlvbih0YXJnZXRba2V5XSl8fGlzTmF0aXZlKHRhcmdldFtrZXldKSk7b3V0PShvd24/dGFyZ2V0OnNvdXJjZSlba2V5XTtpZighZnJhbWV3b3JrJiZpc0dsb2JhbCYmIWlzRnVuY3Rpb24odGFyZ2V0W2tleV0pKWV4cD1zb3VyY2Vba2V5XTtlbHNlIGlmKHR5cGUmQklORCYmb3duKWV4cD1jdHgob3V0LGdsb2JhbCk7ZWxzZSBpZih0eXBlJldSQVAmJiFmcmFtZXdvcmsmJnRhcmdldFtrZXldPT1vdXQpe2V4cD1mdW5jdGlvbihwYXJhbSl7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBvdXQ/bmV3IG91dChwYXJhbSk6b3V0KHBhcmFtKX07ZXhwW1BST1RPVFlQRV09b3V0W1BST1RPVFlQRV19ZWxzZSBleHA9dHlwZSZQUk9UTyYmaXNGdW5jdGlvbihvdXQpP2N0eChjYWxsLG91dCk6b3V0O2lmKGZyYW1ld29yayYmdGFyZ2V0JiYhb3duKXtpZihpc0dsb2JhbCl0YXJnZXRba2V5XT1vdXQ7ZWxzZSBkZWxldGUgdGFyZ2V0W2tleV0mJmhpZGRlbih0YXJnZXQsa2V5LG91dCl9aWYoZXhwb3J0c1trZXldIT1vdXQpaGlkZGVuKGV4cG9ydHMsa2V5LGV4cCl9fWlmKHR5cGVvZiBtb2R1bGUhPVwidW5kZWZpbmVkXCImJm1vZHVsZS5leHBvcnRzKW1vZHVsZS5leHBvcnRzPWNvcmU7ZWxzZSBpZihpc0Z1bmN0aW9uKGRlZmluZSkmJmRlZmluZS5hbWQpZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGNvcmV9KTtlbHNlIGV4cG9ydEdsb2JhbD10cnVlO2lmKGV4cG9ydEdsb2JhbHx8ZnJhbWV3b3JrKXtjb3JlLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtnbG9iYWwuY29yZT1vbGQ7cmV0dXJuIGNvcmV9O2dsb2JhbC5jb3JlPWNvcmV9U1lNQk9MX0lURVJBVE9SPWdldFdlbGxLbm93blN5bWJvbChJVEVSQVRPUik7dmFyIElURVI9c2FmZVN5bWJvbChcIml0ZXJcIiksS0VZPTEsVkFMVUU9MixJdGVyYXRvcnM9e30sSXRlcmF0b3JQcm90b3R5cGU9e30sQlVHR1lfSVRFUkFUT1JTPVwia2V5c1wiaW4gQXJyYXlQcm90byYmIShcIm5leHRcImluW10ua2V5cygpKTtzZXRJdGVyYXRvcihJdGVyYXRvclByb3RvdHlwZSxyZXR1cm5UaGlzKTtmdW5jdGlvbiBzZXRJdGVyYXRvcihPLHZhbHVlKXtoaWRkZW4oTyxTWU1CT0xfSVRFUkFUT1IsdmFsdWUpO0ZGX0lURVJBVE9SIGluIEFycmF5UHJvdG8mJmhpZGRlbihPLEZGX0lURVJBVE9SLHZhbHVlKX1mdW5jdGlvbiBjcmVhdGVJdGVyYXRvcihDb25zdHJ1Y3RvcixOQU1FLG5leHQscHJvdG8pe0NvbnN0cnVjdG9yW1BST1RPVFlQRV09Y3JlYXRlKHByb3RvfHxJdGVyYXRvclByb3RvdHlwZSx7bmV4dDpkZXNjcmlwdG9yKDEsbmV4dCl9KTtzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvcixOQU1FK1wiIEl0ZXJhdG9yXCIpfWZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yKENvbnN0cnVjdG9yLE5BTUUsdmFsdWUsREVGQVVMVCl7dmFyIHByb3RvPUNvbnN0cnVjdG9yW1BST1RPVFlQRV0saXRlcj1nZXQocHJvdG8sU1lNQk9MX0lURVJBVE9SKXx8Z2V0KHByb3RvLEZGX0lURVJBVE9SKXx8REVGQVVMVCYmZ2V0KHByb3RvLERFRkFVTFQpfHx2YWx1ZTtpZihmcmFtZXdvcmspe3NldEl0ZXJhdG9yKHByb3RvLGl0ZXIpO2lmKGl0ZXIhPT12YWx1ZSl7dmFyIGl0ZXJQcm90bz1nZXRQcm90b3R5cGVPZihpdGVyLmNhbGwobmV3IENvbnN0cnVjdG9yKSk7c2V0VG9TdHJpbmdUYWcoaXRlclByb3RvLE5BTUUrXCIgSXRlcmF0b3JcIix0cnVlKTtoYXMocHJvdG8sRkZfSVRFUkFUT1IpJiZzZXRJdGVyYXRvcihpdGVyUHJvdG8scmV0dXJuVGhpcyl9fUl0ZXJhdG9yc1tOQU1FXT1pdGVyO0l0ZXJhdG9yc1tOQU1FK1wiIEl0ZXJhdG9yXCJdPXJldHVyblRoaXM7cmV0dXJuIGl0ZXJ9ZnVuY3Rpb24gZGVmaW5lU3RkSXRlcmF0b3JzKEJhc2UsTkFNRSxDb25zdHJ1Y3RvcixuZXh0LERFRkFVTFQsSVNfU0VUKXtmdW5jdGlvbiBjcmVhdGVJdGVyKGtpbmQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcyxraW5kKX19Y3JlYXRlSXRlcmF0b3IoQ29uc3RydWN0b3IsTkFNRSxuZXh0KTt2YXIgZW50cmllcz1jcmVhdGVJdGVyKEtFWStWQUxVRSksdmFsdWVzPWNyZWF0ZUl0ZXIoVkFMVUUpO2lmKERFRkFVTFQ9PVZBTFVFKXZhbHVlcz1kZWZpbmVJdGVyYXRvcihCYXNlLE5BTUUsdmFsdWVzLFwidmFsdWVzXCIpO2Vsc2UgZW50cmllcz1kZWZpbmVJdGVyYXRvcihCYXNlLE5BTUUsZW50cmllcyxcImVudHJpZXNcIik7aWYoREVGQVVMVCl7JGRlZmluZShQUk9UTytGT1JDRUQqQlVHR1lfSVRFUkFUT1JTLE5BTUUse2VudHJpZXM6ZW50cmllcyxrZXlzOklTX1NFVD92YWx1ZXM6Y3JlYXRlSXRlcihLRVkpLHZhbHVlczp2YWx1ZXN9KX19ZnVuY3Rpb24gaXRlclJlc3VsdChkb25lLHZhbHVlKXtyZXR1cm57dmFsdWU6dmFsdWUsZG9uZTohIWRvbmV9fWZ1bmN0aW9uIGlzSXRlcmFibGUoaXQpe3ZhciBPPU9iamVjdChpdCksU3ltYm9sPWdsb2JhbFtTWU1CT0xdLGhhc0V4dD0oU3ltYm9sJiZTeW1ib2xbSVRFUkFUT1JdfHxGRl9JVEVSQVRPUilpbiBPO3JldHVybiBoYXNFeHR8fFNZTUJPTF9JVEVSQVRPUiBpbiBPfHxoYXMoSXRlcmF0b3JzLGNsYXNzb2YoTykpfWZ1bmN0aW9uIGdldEl0ZXJhdG9yKGl0KXt2YXIgU3ltYm9sPWdsb2JhbFtTWU1CT0xdLGV4dD1pdFtTeW1ib2wmJlN5bWJvbFtJVEVSQVRPUl18fEZGX0lURVJBVE9SXSxnZXRJdGVyPWV4dHx8aXRbU1lNQk9MX0lURVJBVE9SXXx8SXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtyZXR1cm4gYXNzZXJ0T2JqZWN0KGdldEl0ZXIuY2FsbChpdCkpfWZ1bmN0aW9uIHN0ZXBDYWxsKGZuLHZhbHVlLGVudHJpZXMpe3JldHVybiBlbnRyaWVzP2ludm9rZShmbix2YWx1ZSk6Zm4odmFsdWUpfWZ1bmN0aW9uIGNoZWNrRGFuZ2VySXRlckNsb3NpbmcoZm4pe3ZhciBkYW5nZXI9dHJ1ZTt2YXIgTz17bmV4dDpmdW5jdGlvbigpe3Rocm93IDF9LFwicmV0dXJuXCI6ZnVuY3Rpb24oKXtkYW5nZXI9ZmFsc2V9fTtPW1NZTUJPTF9JVEVSQVRPUl09cmV0dXJuVGhpczt0cnl7Zm4oTyl9Y2F0Y2goZSl7fXJldHVybiBkYW5nZXJ9ZnVuY3Rpb24gY2xvc2VJdGVyYXRvcihpdGVyYXRvcil7dmFyIHJldD1pdGVyYXRvcltcInJldHVyblwiXTtpZihyZXQhPT11bmRlZmluZWQpcmV0LmNhbGwoaXRlcmF0b3IpfWZ1bmN0aW9uIHNhZmVJdGVyQ2xvc2UoZXhlYyxpdGVyYXRvcil7dHJ5e2V4ZWMoaXRlcmF0b3IpfWNhdGNoKGUpe2Nsb3NlSXRlcmF0b3IoaXRlcmF0b3IpO3Rocm93IGV9fWZ1bmN0aW9uIGZvck9mKGl0ZXJhYmxlLGVudHJpZXMsZm4sdGhhdCl7c2FmZUl0ZXJDbG9zZShmdW5jdGlvbihpdGVyYXRvcil7dmFyIGY9Y3R4KGZuLHRoYXQsZW50cmllcz8yOjEpLHN0ZXA7d2hpbGUoIShzdGVwPWl0ZXJhdG9yLm5leHQoKSkuZG9uZSlpZihzdGVwQ2FsbChmLHN0ZXAudmFsdWUsZW50cmllcyk9PT1mYWxzZSl7cmV0dXJuIGNsb3NlSXRlcmF0b3IoaXRlcmF0b3IpfX0sZ2V0SXRlcmF0b3IoaXRlcmFibGUpKX0hZnVuY3Rpb24oVEFHLFN5bWJvbFJlZ2lzdHJ5LEFsbFN5bWJvbHMsc2V0dGVyKXtpZighaXNOYXRpdmUoU3ltYm9sKSl7U3ltYm9sPWZ1bmN0aW9uKGRlc2NyaXB0aW9uKXthc3NlcnQoISh0aGlzIGluc3RhbmNlb2YgU3ltYm9sKSxTWU1CT0wrXCIgaXMgbm90IGEgXCIrQ09OU1RSVUNUT1IpO3ZhciB0YWc9dWlkKGRlc2NyaXB0aW9uKSxzeW09c2V0KGNyZWF0ZShTeW1ib2xbUFJPVE9UWVBFXSksVEFHLHRhZyk7QWxsU3ltYm9sc1t0YWddPXN5bTtERVNDJiZzZXR0ZXImJmRlZmluZVByb3BlcnR5KE9iamVjdFByb3RvLHRhZyx7Y29uZmlndXJhYmxlOnRydWUsc2V0OmZ1bmN0aW9uKHZhbHVlKXtoaWRkZW4odGhpcyx0YWcsdmFsdWUpfX0pO3JldHVybiBzeW19O2hpZGRlbihTeW1ib2xbUFJPVE9UWVBFXSxUT19TVFJJTkcsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tUQUddfSl9JGRlZmluZShHTE9CQUwrV1JBUCx7U3ltYm9sOlN5bWJvbH0pO3ZhciBzeW1ib2xTdGF0aWNzPXtcImZvclwiOmZ1bmN0aW9uKGtleSl7cmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSxrZXkrPVwiXCIpP1N5bWJvbFJlZ2lzdHJ5W2tleV06U3ltYm9sUmVnaXN0cnlba2V5XT1TeW1ib2woa2V5KX0saXRlcmF0b3I6U1lNQk9MX0lURVJBVE9SfHxnZXRXZWxsS25vd25TeW1ib2woSVRFUkFUT1IpLGtleUZvcjpwYXJ0LmNhbGwoa2V5T2YsU3ltYm9sUmVnaXN0cnkpLHNwZWNpZXM6U1lNQk9MX1NQRUNJRVMsdG9TdHJpbmdUYWc6U1lNQk9MX1RBRz1nZXRXZWxsS25vd25TeW1ib2woVE9fU1RSSU5HX1RBRyx0cnVlKSx1bnNjb3BhYmxlczpTWU1CT0xfVU5TQ09QQUJMRVMscHVyZTpzYWZlU3ltYm9sLHNldDpzZXQsdXNlU2V0dGVyOmZ1bmN0aW9uKCl7c2V0dGVyPXRydWV9LHVzZVNpbXBsZTpmdW5jdGlvbigpe3NldHRlcj1mYWxzZX19O2ZvckVhY2guY2FsbChhcnJheShcImhhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGxpdCx0b1ByaW1pdGl2ZVwiKSxmdW5jdGlvbihpdCl7c3ltYm9sU3RhdGljc1tpdF09Z2V0V2VsbEtub3duU3ltYm9sKGl0KX0pOyRkZWZpbmUoU1RBVElDLFNZTUJPTCxzeW1ib2xTdGF0aWNzKTtzZXRUb1N0cmluZ1RhZyhTeW1ib2wsU1lNQk9MKTskZGVmaW5lKFNUQVRJQytGT1JDRUQqIWlzTmF0aXZlKFN5bWJvbCksT0JKRUNULHtnZXRPd25Qcm9wZXJ0eU5hbWVzOmZ1bmN0aW9uKGl0KXt2YXIgbmFtZXM9Z2V0TmFtZXModG9PYmplY3QoaXQpKSxyZXN1bHQ9W10sa2V5LGk9MDt3aGlsZShuYW1lcy5sZW5ndGg+aSloYXMoQWxsU3ltYm9scyxrZXk9bmFtZXNbaSsrXSl8fHJlc3VsdC5wdXNoKGtleSk7cmV0dXJuIHJlc3VsdH0sZ2V0T3duUHJvcGVydHlTeW1ib2xzOmZ1bmN0aW9uKGl0KXt2YXIgbmFtZXM9Z2V0TmFtZXModG9PYmplY3QoaXQpKSxyZXN1bHQ9W10sa2V5LGk9MDt3aGlsZShuYW1lcy5sZW5ndGg+aSloYXMoQWxsU3ltYm9scyxrZXk9bmFtZXNbaSsrXSkmJnJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7cmV0dXJuIHJlc3VsdH19KTtzZXRUb1N0cmluZ1RhZyhNYXRoLE1BVEgsdHJ1ZSk7c2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sXCJKU09OXCIsdHJ1ZSl9KHNhZmVTeW1ib2woXCJ0YWdcIikse30se30sdHJ1ZSk7IWZ1bmN0aW9uKCl7dmFyIG9iamVjdFN0YXRpYz17YXNzaWduOmFzc2lnbixpczpmdW5jdGlvbih4LHkpe3JldHVybiB4PT09eT94IT09MHx8MS94PT09MS95OnghPXgmJnkhPXl9fTtcIl9fcHJvdG9fX1wiaW4gT2JqZWN0UHJvdG8mJmZ1bmN0aW9uKGJ1Z2d5LHNldCl7dHJ5e3NldD1jdHgoY2FsbCxnZXRPd25EZXNjcmlwdG9yKE9iamVjdFByb3RvLFwiX19wcm90b19fXCIpLnNldCwyKTtzZXQoe30sQXJyYXlQcm90byl9Y2F0Y2goZSl7YnVnZ3k9dHJ1ZX1vYmplY3RTdGF0aWMuc2V0UHJvdG90eXBlT2Y9c2V0UHJvdG90eXBlT2Y9c2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKE8scHJvdG8pe2Fzc2VydE9iamVjdChPKTthc3NlcnQocHJvdG89PT1udWxsfHxpc09iamVjdChwcm90bykscHJvdG8sXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO2lmKGJ1Z2d5KU8uX19wcm90b19fPXByb3RvO2Vsc2Ugc2V0KE8scHJvdG8pO3JldHVybiBPfX0oKTskZGVmaW5lKFNUQVRJQyxPQkpFQ1Qsb2JqZWN0U3RhdGljKX0oKTshZnVuY3Rpb24odG1wKXt0bXBbU1lNQk9MX1RBR109RE9UO2lmKGNvZih0bXApIT1ET1QpaGlkZGVuKE9iamVjdFByb3RvLFRPX1NUUklORyxmdW5jdGlvbigpe3JldHVyblwiW29iamVjdCBcIitjbGFzc29mKHRoaXMpK1wiXVwifSl9KHt9KTshZnVuY3Rpb24oKXtmdW5jdGlvbiB3cmFwT2JqZWN0TWV0aG9kKGtleSxNT0RFKXt2YXIgZm49T2JqZWN0W2tleV0sZXhwPWNvcmVbT0JKRUNUXVtrZXldLGY9MCxvPXt9O2lmKCFleHB8fGlzTmF0aXZlKGV4cCkpe29ba2V5XT1NT0RFPT0xP2Z1bmN0aW9uKGl0KXtyZXR1cm4gaXNPYmplY3QoaXQpP2ZuKGl0KTppdH06TU9ERT09Mj9mdW5jdGlvbihpdCl7cmV0dXJuIGlzT2JqZWN0KGl0KT9mbihpdCk6dHJ1ZX06TU9ERT09Mz9mdW5jdGlvbihpdCl7cmV0dXJuIGlzT2JqZWN0KGl0KT9mbihpdCk6ZmFsc2V9Ok1PREU9PTQ/ZnVuY3Rpb24oaXQsa2V5KXtyZXR1cm4gZm4odG9PYmplY3QoaXQpLGtleSl9OmZ1bmN0aW9uKGl0KXtyZXR1cm4gZm4odG9PYmplY3QoaXQpKX07dHJ5e2ZuKERPVCl9Y2F0Y2goZSl7Zj0xfSRkZWZpbmUoU1RBVElDK0ZPUkNFRCpmLE9CSkVDVCxvKX19d3JhcE9iamVjdE1ldGhvZChcImZyZWV6ZVwiLDEpO3dyYXBPYmplY3RNZXRob2QoXCJzZWFsXCIsMSk7d3JhcE9iamVjdE1ldGhvZChcInByZXZlbnRFeHRlbnNpb25zXCIsMSk7d3JhcE9iamVjdE1ldGhvZChcImlzRnJvemVuXCIsMik7d3JhcE9iamVjdE1ldGhvZChcImlzU2VhbGVkXCIsMik7d3JhcE9iamVjdE1ldGhvZChcImlzRXh0ZW5zaWJsZVwiLDMpO3dyYXBPYmplY3RNZXRob2QoXCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JcIiw0KTt3cmFwT2JqZWN0TWV0aG9kKFwiZ2V0UHJvdG90eXBlT2ZcIik7d3JhcE9iamVjdE1ldGhvZChcImtleXNcIik7d3JhcE9iamVjdE1ldGhvZChcImdldE93blByb3BlcnR5TmFtZXNcIil9KCk7IWZ1bmN0aW9uKE5BTUUpe05BTUUgaW4gRnVuY3Rpb25Qcm90b3x8REVTQyYmZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90byxOQU1FLHtjb25maWd1cmFibGU6dHJ1ZSxnZXQ6ZnVuY3Rpb24oKXt2YXIgbWF0Y2g9U3RyaW5nKHRoaXMpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLyksbmFtZT1tYXRjaD9tYXRjaFsxXTpcIlwiO2hhcyh0aGlzLE5BTUUpfHxkZWZpbmVQcm9wZXJ0eSh0aGlzLE5BTUUsZGVzY3JpcHRvcig1LG5hbWUpKTtyZXR1cm4gbmFtZX0sc2V0OmZ1bmN0aW9uKHZhbHVlKXtoYXModGhpcyxOQU1FKXx8ZGVmaW5lUHJvcGVydHkodGhpcyxOQU1FLGRlc2NyaXB0b3IoMCx2YWx1ZSkpfX0pfShcIm5hbWVcIik7TnVtYmVyKFwiMG8xXCIpJiZOdW1iZXIoXCIwYjFcIil8fGZ1bmN0aW9uKF9OdW1iZXIsTnVtYmVyUHJvdG8pe2Z1bmN0aW9uIHRvTnVtYmVyKGl0KXtpZihpc09iamVjdChpdCkpaXQ9dG9QcmltaXRpdmUoaXQpO2lmKHR5cGVvZiBpdD09XCJzdHJpbmdcIiYmaXQubGVuZ3RoPjImJml0LmNoYXJDb2RlQXQoMCk9PTQ4KXt2YXIgYmluYXJ5PWZhbHNlO3N3aXRjaChpdC5jaGFyQ29kZUF0KDEpKXtjYXNlIDY2OmNhc2UgOTg6YmluYXJ5PXRydWU7Y2FzZSA3OTpjYXNlIDExMTpyZXR1cm4gcGFyc2VJbnQoaXQuc2xpY2UoMiksYmluYXJ5PzI6OCl9fXJldHVybitpdH1mdW5jdGlvbiB0b1ByaW1pdGl2ZShpdCl7dmFyIGZuLHZhbDtpZihpc0Z1bmN0aW9uKGZuPWl0LnZhbHVlT2YpJiYhaXNPYmplY3QodmFsPWZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO2lmKGlzRnVuY3Rpb24oZm49aXRbVE9fU1RSSU5HXSkmJiFpc09iamVjdCh2YWw9Zm4uY2FsbChpdCkpKXJldHVybiB2YWw7dGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gbnVtYmVyXCIpfU51bWJlcj1mdW5jdGlvbiBOdW1iZXIoaXQpe3JldHVybiB0aGlzIGluc3RhbmNlb2YgTnVtYmVyP25ldyBfTnVtYmVyKHRvTnVtYmVyKGl0KSk6dG9OdW1iZXIoaXQpfTtmb3JFYWNoLmNhbGwoREVTQz9nZXROYW1lcyhfTnVtYmVyKTphcnJheShcIk1BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZXCIpLGZ1bmN0aW9uKGtleSl7a2V5IGluIE51bWJlcnx8ZGVmaW5lUHJvcGVydHkoTnVtYmVyLGtleSxnZXRPd25EZXNjcmlwdG9yKF9OdW1iZXIsa2V5KSl9KTtOdW1iZXJbUFJPVE9UWVBFXT1OdW1iZXJQcm90bztOdW1iZXJQcm90b1tDT05TVFJVQ1RPUl09TnVtYmVyO2hpZGRlbihnbG9iYWwsTlVNQkVSLE51bWJlcil9KE51bWJlcixOdW1iZXJbUFJPVE9UWVBFXSk7IWZ1bmN0aW9uKGlzSW50ZWdlcil7JGRlZmluZShTVEFUSUMsTlVNQkVSLHtFUFNJTE9OOnBvdygyLC01MiksaXNGaW5pdGU6ZnVuY3Rpb24oaXQpe3JldHVybiB0eXBlb2YgaXQ9PVwibnVtYmVyXCImJmlzRmluaXRlKGl0KX0saXNJbnRlZ2VyOmlzSW50ZWdlcixpc05hTjpzYW1lTmFOLGlzU2FmZUludGVnZXI6ZnVuY3Rpb24obnVtYmVyKXtyZXR1cm4gaXNJbnRlZ2VyKG51bWJlcikmJmFicyhudW1iZXIpPD1NQVhfU0FGRV9JTlRFR0VSfSxNQVhfU0FGRV9JTlRFR0VSOk1BWF9TQUZFX0lOVEVHRVIsTUlOX1NBRkVfSU5URUdFUjotTUFYX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0OnBhcnNlRmxvYXQscGFyc2VJbnQ6cGFyc2VJbnR9KX0oTnVtYmVyLmlzSW50ZWdlcnx8ZnVuY3Rpb24oaXQpe3JldHVybiFpc09iamVjdChpdCkmJmlzRmluaXRlKGl0KSYmZmxvb3IoaXQpPT09aXR9KTshZnVuY3Rpb24oKXt2YXIgRT1NYXRoLkUsZXhwPU1hdGguZXhwLGxvZz1NYXRoLmxvZyxzcXJ0PU1hdGguc3FydCxzaWduPU1hdGguc2lnbnx8ZnVuY3Rpb24oeCl7cmV0dXJuKHg9K3gpPT0wfHx4IT14P3g6eDwwPy0xOjF9O2Z1bmN0aW9uIGFzaW5oKHgpe3JldHVybiFpc0Zpbml0ZSh4PSt4KXx8eD09MD94Ong8MD8tYXNpbmgoLXgpOmxvZyh4K3NxcnQoeCp4KzEpKX1mdW5jdGlvbiBleHBtMSh4KXtyZXR1cm4oeD0reCk9PTA/eDp4Pi0xZS02JiZ4PDFlLTY/eCt4KngvMjpleHAoeCktMX0kZGVmaW5lKFNUQVRJQyxNQVRILHthY29zaDpmdW5jdGlvbih4KXtyZXR1cm4oeD0reCk8MT9OYU46aXNGaW5pdGUoeCk/bG9nKHgvRStzcXJ0KHgrMSkqc3FydCh4LTEpL0UpKzE6eH0sYXNpbmg6YXNpbmgsYXRhbmg6ZnVuY3Rpb24oeCl7cmV0dXJuKHg9K3gpPT0wP3g6bG9nKCgxK3gpLygxLXgpKS8yfSxjYnJ0OmZ1bmN0aW9uKHgpe3JldHVybiBzaWduKHg9K3gpKnBvdyhhYnMoeCksMS8zKX0sY2x6MzI6ZnVuY3Rpb24oeCl7cmV0dXJuKHg+Pj49MCk/MzIteFtUT19TVFJJTkddKDIpLmxlbmd0aDozMn0sY29zaDpmdW5jdGlvbih4KXtyZXR1cm4oZXhwKHg9K3gpK2V4cCgteCkpLzJ9LGV4cG0xOmV4cG0xLGZyb3VuZDpmdW5jdGlvbih4KXtyZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbeF0pWzBdfSxoeXBvdDpmdW5jdGlvbih2YWx1ZTEsdmFsdWUyKXt2YXIgc3VtPTAsbGVuMT1hcmd1bWVudHMubGVuZ3RoLGxlbjI9bGVuMSxhcmdzPUFycmF5KGxlbjEpLGxhcmc9LUluZmluaXR5LGFyZzt3aGlsZShsZW4xLS0pe2FyZz1hcmdzW2xlbjFdPSthcmd1bWVudHNbbGVuMV07aWYoYXJnPT1JbmZpbml0eXx8YXJnPT0tSW5maW5pdHkpcmV0dXJuIEluZmluaXR5O2lmKGFyZz5sYXJnKWxhcmc9YXJnfWxhcmc9YXJnfHwxO3doaWxlKGxlbjItLSlzdW0rPXBvdyhhcmdzW2xlbjJdL2xhcmcsMik7cmV0dXJuIGxhcmcqc3FydChzdW0pfSxpbXVsOmZ1bmN0aW9uKHgseSl7dmFyIFVJbnQxNj02NTUzNSx4bj0reCx5bj0reSx4bD1VSW50MTYmeG4seWw9VUludDE2JnluO3JldHVybiAwfHhsKnlsKygoVUludDE2JnhuPj4+MTYpKnlsK3hsKihVSW50MTYmeW4+Pj4xNik8PDE2Pj4+MCl9LGxvZzFwOmZ1bmN0aW9uKHgpe3JldHVybih4PSt4KT4tMWUtOCYmeDwxZS04P3gteCp4LzI6bG9nKDEreCl9LGxvZzEwOmZ1bmN0aW9uKHgpe3JldHVybiBsb2coeCkvTWF0aC5MTjEwfSxsb2cyOmZ1bmN0aW9uKHgpe3JldHVybiBsb2coeCkvTWF0aC5MTjJ9LHNpZ246c2lnbixzaW5oOmZ1bmN0aW9uKHgpe3JldHVybiBhYnMoeD0reCk8MT8oZXhwbTEoeCktZXhwbTEoLXgpKS8yOihleHAoeC0xKS1leHAoLXgtMSkpKihFLzIpfSx0YW5oOmZ1bmN0aW9uKHgpe3ZhciBhPWV4cG0xKHg9K3gpLGI9ZXhwbTEoLXgpO3JldHVybiBhPT1JbmZpbml0eT8xOmI9PUluZmluaXR5Py0xOihhLWIpLyhleHAoeCkrZXhwKC14KSl9LHRydW5jOnRydW5jfSl9KCk7IWZ1bmN0aW9uKGZyb21DaGFyQ29kZSl7ZnVuY3Rpb24gYXNzZXJ0Tm90UmVnRXhwKGl0KXtpZihjb2YoaXQpPT1SRUdFWFApdGhyb3cgVHlwZUVycm9yKCl9JGRlZmluZShTVEFUSUMsU1RSSU5HLHtmcm9tQ29kZVBvaW50OmZ1bmN0aW9uKHgpe3ZhciByZXM9W10sbGVuPWFyZ3VtZW50cy5sZW5ndGgsaT0wLGNvZGU7d2hpbGUobGVuPmkpe2NvZGU9K2FyZ3VtZW50c1tpKytdO2lmKHRvSW5kZXgoY29kZSwxMTE0MTExKSE9PWNvZGUpdGhyb3cgUmFuZ2VFcnJvcihjb2RlK1wiIGlzIG5vdCBhIHZhbGlkIGNvZGUgcG9pbnRcIik7cmVzLnB1c2goY29kZTw2NTUzNj9mcm9tQ2hhckNvZGUoY29kZSk6ZnJvbUNoYXJDb2RlKCgoY29kZS09NjU1MzYpPj4xMCkrNTUyOTYsY29kZSUxMDI0KzU2MzIwKSl9cmV0dXJuIHJlcy5qb2luKFwiXCIpfSxyYXc6ZnVuY3Rpb24oY2FsbFNpdGUpe3ZhciByYXc9dG9PYmplY3QoY2FsbFNpdGUucmF3KSxsZW49dG9MZW5ndGgocmF3Lmxlbmd0aCksc2xuPWFyZ3VtZW50cy5sZW5ndGgscmVzPVtdLGk9MDt3aGlsZShsZW4+aSl7cmVzLnB1c2goU3RyaW5nKHJhd1tpKytdKSk7aWYoaTxzbG4pcmVzLnB1c2goU3RyaW5nKGFyZ3VtZW50c1tpXSkpfXJldHVybiByZXMuam9pbihcIlwiKX19KTskZGVmaW5lKFBST1RPLFNUUklORyx7Y29kZVBvaW50QXQ6Y3JlYXRlUG9pbnRBdChmYWxzZSksZW5kc1dpdGg6ZnVuY3Rpb24oc2VhcmNoU3RyaW5nKXthc3NlcnROb3RSZWdFeHAoc2VhcmNoU3RyaW5nKTt2YXIgdGhhdD1TdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSksZW5kUG9zaXRpb249YXJndW1lbnRzWzFdLGxlbj10b0xlbmd0aCh0aGF0Lmxlbmd0aCksZW5kPWVuZFBvc2l0aW9uPT09dW5kZWZpbmVkP2xlbjptaW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLGxlbik7c2VhcmNoU3RyaW5nKz1cIlwiO3JldHVybiB0aGF0LnNsaWNlKGVuZC1zZWFyY2hTdHJpbmcubGVuZ3RoLGVuZCk9PT1zZWFyY2hTdHJpbmd9LGluY2x1ZGVzOmZ1bmN0aW9uKHNlYXJjaFN0cmluZyl7YXNzZXJ0Tm90UmVnRXhwKHNlYXJjaFN0cmluZyk7cmV0dXJuISF+U3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpLmluZGV4T2Yoc2VhcmNoU3RyaW5nLGFyZ3VtZW50c1sxXSl9LHJlcGVhdDpmdW5jdGlvbihjb3VudCl7dmFyIHN0cj1TdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSkscmVzPVwiXCIsbj10b0ludGVnZXIoY291bnQpO2lmKDA+bnx8bj09SW5maW5pdHkpdGhyb3cgUmFuZ2VFcnJvcihcIkNvdW50IGNhbid0IGJlIG5lZ2F0aXZlXCIpO2Zvcig7bj4wOyhuPj4+PTEpJiYoc3RyKz1zdHIpKWlmKG4mMSlyZXMrPXN0cjtyZXR1cm4gcmVzfSxzdGFydHNXaXRoOmZ1bmN0aW9uKHNlYXJjaFN0cmluZyl7YXNzZXJ0Tm90UmVnRXhwKHNlYXJjaFN0cmluZyk7dmFyIHRoYXQ9U3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpLGluZGV4PXRvTGVuZ3RoKG1pbihhcmd1bWVudHNbMV0sdGhhdC5sZW5ndGgpKTtzZWFyY2hTdHJpbmcrPVwiXCI7cmV0dXJuIHRoYXQuc2xpY2UoaW5kZXgsaW5kZXgrc2VhcmNoU3RyaW5nLmxlbmd0aCk9PT1zZWFyY2hTdHJpbmd9fSl9KFN0cmluZy5mcm9tQ2hhckNvZGUpOyFmdW5jdGlvbigpeyRkZWZpbmUoU1RBVElDK0ZPUkNFRCpjaGVja0Rhbmdlckl0ZXJDbG9zaW5nKEFycmF5LmZyb20pLEFSUkFZLHtmcm9tOmZ1bmN0aW9uKGFycmF5TGlrZSl7dmFyIE89T2JqZWN0KGFzc2VydERlZmluZWQoYXJyYXlMaWtlKSksbWFwZm49YXJndW1lbnRzWzFdLG1hcHBpbmc9bWFwZm4hPT11bmRlZmluZWQsZj1tYXBwaW5nP2N0eChtYXBmbixhcmd1bWVudHNbMl0sMik6dW5kZWZpbmVkLGluZGV4PTAsbGVuZ3RoLHJlc3VsdCxzdGVwO2lmKGlzSXRlcmFibGUoTykpe3Jlc3VsdD1uZXcoZ2VuZXJpYyh0aGlzLEFycmF5KSk7c2FmZUl0ZXJDbG9zZShmdW5jdGlvbihpdGVyYXRvcil7Zm9yKDshKHN0ZXA9aXRlcmF0b3IubmV4dCgpKS5kb25lO2luZGV4Kyspe3Jlc3VsdFtpbmRleF09bWFwcGluZz9mKHN0ZXAudmFsdWUsaW5kZXgpOnN0ZXAudmFsdWV9fSxnZXRJdGVyYXRvcihPKSl9ZWxzZXtyZXN1bHQ9bmV3KGdlbmVyaWModGhpcyxBcnJheSkpKGxlbmd0aD10b0xlbmd0aChPLmxlbmd0aCkpO2Zvcig7bGVuZ3RoPmluZGV4O2luZGV4Kyspe3Jlc3VsdFtpbmRleF09bWFwcGluZz9mKE9baW5kZXhdLGluZGV4KTpPW2luZGV4XX19cmVzdWx0Lmxlbmd0aD1pbmRleDtyZXR1cm4gcmVzdWx0fX0pOyRkZWZpbmUoU1RBVElDLEFSUkFZLHtvZjpmdW5jdGlvbigpe3ZhciBpbmRleD0wLGxlbmd0aD1hcmd1bWVudHMubGVuZ3RoLHJlc3VsdD1uZXcoZ2VuZXJpYyh0aGlzLEFycmF5KSkobGVuZ3RoKTt3aGlsZShsZW5ndGg+aW5kZXgpcmVzdWx0W2luZGV4XT1hcmd1bWVudHNbaW5kZXgrK107cmVzdWx0Lmxlbmd0aD1sZW5ndGg7cmV0dXJuIHJlc3VsdH19KTtzZXRTcGVjaWVzKEFycmF5KX0oKTshZnVuY3Rpb24oKXskZGVmaW5lKFBST1RPLEFSUkFZLHtjb3B5V2l0aGluOmZ1bmN0aW9uKHRhcmdldCxzdGFydCl7dmFyIE89T2JqZWN0KGFzc2VydERlZmluZWQodGhpcykpLGxlbj10b0xlbmd0aChPLmxlbmd0aCksdG89dG9JbmRleCh0YXJnZXQsbGVuKSxmcm9tPXRvSW5kZXgoc3RhcnQsbGVuKSxlbmQ9YXJndW1lbnRzWzJdLGZpbj1lbmQ9PT11bmRlZmluZWQ/bGVuOnRvSW5kZXgoZW5kLGxlbiksY291bnQ9bWluKGZpbi1mcm9tLGxlbi10byksaW5jPTE7aWYoZnJvbTx0byYmdG88ZnJvbStjb3VudCl7aW5jPS0xO2Zyb209ZnJvbStjb3VudC0xO3RvPXRvK2NvdW50LTF9d2hpbGUoY291bnQtLT4wKXtpZihmcm9tIGluIE8pT1t0b109T1tmcm9tXTtlbHNlIGRlbGV0ZSBPW3RvXTt0bys9aW5jO2Zyb20rPWluY31yZXR1cm4gT30sZmlsbDpmdW5jdGlvbih2YWx1ZSl7dmFyIE89T2JqZWN0KGFzc2VydERlZmluZWQodGhpcykpLGxlbmd0aD10b0xlbmd0aChPLmxlbmd0aCksaW5kZXg9dG9JbmRleChhcmd1bWVudHNbMV0sbGVuZ3RoKSxlbmQ9YXJndW1lbnRzWzJdLGVuZFBvcz1lbmQ9PT11bmRlZmluZWQ/bGVuZ3RoOnRvSW5kZXgoZW5kLGxlbmd0aCk7d2hpbGUoZW5kUG9zPmluZGV4KU9baW5kZXgrK109dmFsdWU7cmV0dXJuIE99LGZpbmQ6Y3JlYXRlQXJyYXlNZXRob2QoNSksZmluZEluZGV4OmNyZWF0ZUFycmF5TWV0aG9kKDYpfSk7aWYoZnJhbWV3b3JrKXtmb3JFYWNoLmNhbGwoYXJyYXkoXCJmaW5kLGZpbmRJbmRleCxmaWxsLGNvcHlXaXRoaW4sZW50cmllcyxrZXlzLHZhbHVlc1wiKSxmdW5jdGlvbihpdCl7QXJyYXlVbnNjb3BhYmxlc1tpdF09dHJ1ZX0pO1NZTUJPTF9VTlNDT1BBQkxFUyBpbiBBcnJheVByb3RvfHxoaWRkZW4oQXJyYXlQcm90byxTWU1CT0xfVU5TQ09QQUJMRVMsQXJyYXlVbnNjb3BhYmxlcyl9fSgpOyFmdW5jdGlvbihhdCl7ZGVmaW5lU3RkSXRlcmF0b3JzKEFycmF5LEFSUkFZLGZ1bmN0aW9uKGl0ZXJhdGVkLGtpbmQpe3NldCh0aGlzLElURVIse286dG9PYmplY3QoaXRlcmF0ZWQpLGk6MCxrOmtpbmR9KX0sZnVuY3Rpb24oKXt2YXIgaXRlcj10aGlzW0lURVJdLE89aXRlci5vLGtpbmQ9aXRlci5rLGluZGV4PWl0ZXIuaSsrO2lmKCFPfHxpbmRleD49Ty5sZW5ndGgpe2l0ZXIubz11bmRlZmluZWQ7cmV0dXJuIGl0ZXJSZXN1bHQoMSl9aWYoa2luZD09S0VZKXJldHVybiBpdGVyUmVzdWx0KDAsaW5kZXgpO2lmKGtpbmQ9PVZBTFVFKXJldHVybiBpdGVyUmVzdWx0KDAsT1tpbmRleF0pO3JldHVybiBpdGVyUmVzdWx0KDAsW2luZGV4LE9baW5kZXhdXSl9LFZBTFVFKTtJdGVyYXRvcnNbQVJHVU1FTlRTXT1JdGVyYXRvcnNbQVJSQVldO2RlZmluZVN0ZEl0ZXJhdG9ycyhTdHJpbmcsU1RSSU5HLGZ1bmN0aW9uKGl0ZXJhdGVkKXtzZXQodGhpcyxJVEVSLHtvOlN0cmluZyhpdGVyYXRlZCksaTowfSl9LGZ1bmN0aW9uKCl7dmFyIGl0ZXI9dGhpc1tJVEVSXSxPPWl0ZXIubyxpbmRleD1pdGVyLmkscG9pbnQ7aWYoaW5kZXg+PU8ubGVuZ3RoKXJldHVybiBpdGVyUmVzdWx0KDEpO3BvaW50PWF0LmNhbGwoTyxpbmRleCk7aXRlci5pKz1wb2ludC5sZW5ndGg7cmV0dXJuIGl0ZXJSZXN1bHQoMCxwb2ludCl9KX0oY3JlYXRlUG9pbnRBdCh0cnVlKSk7REVTQyYmIWZ1bmN0aW9uKFJlZ0V4cFByb3RvLF9SZWdFeHApe2lmKCFmdW5jdGlvbigpe3RyeXtyZXR1cm4gUmVnRXhwKC9hL2csXCJpXCIpPT1cIi9hL2lcIn1jYXRjaChlKXt9fSgpKXtSZWdFeHA9ZnVuY3Rpb24gUmVnRXhwKHBhdHRlcm4sZmxhZ3Mpe3JldHVybiBuZXcgX1JlZ0V4cChjb2YocGF0dGVybik9PVJFR0VYUCYmZmxhZ3MhPT11bmRlZmluZWQ/cGF0dGVybi5zb3VyY2U6cGF0dGVybixmbGFncyl9O2ZvckVhY2guY2FsbChnZXROYW1lcyhfUmVnRXhwKSxmdW5jdGlvbihrZXkpe2tleSBpbiBSZWdFeHB8fGRlZmluZVByb3BlcnR5KFJlZ0V4cCxrZXkse2NvbmZpZ3VyYWJsZTp0cnVlLGdldDpmdW5jdGlvbigpe3JldHVybiBfUmVnRXhwW2tleV19LHNldDpmdW5jdGlvbihpdCl7X1JlZ0V4cFtrZXldPWl0fX0pfSk7UmVnRXhwUHJvdG9bQ09OU1RSVUNUT1JdPVJlZ0V4cDtSZWdFeHBbUFJPVE9UWVBFXT1SZWdFeHBQcm90bztoaWRkZW4oZ2xvYmFsLFJFR0VYUCxSZWdFeHApfWlmKC8uL2cuZmxhZ3MhPVwiZ1wiKWRlZmluZVByb3BlcnR5KFJlZ0V4cFByb3RvLFwiZmxhZ3NcIix7Y29uZmlndXJhYmxlOnRydWUsZ2V0OmNyZWF0ZVJlcGxhY2VyKC9eLipcXC8oXFx3KikkLyxcIiQxXCIpfSk7c2V0U3BlY2llcyhSZWdFeHApfShSZWdFeHBbUFJPVE9UWVBFXSxSZWdFeHApO2lzRnVuY3Rpb24oc2V0SW1tZWRpYXRlKSYmaXNGdW5jdGlvbihjbGVhckltbWVkaWF0ZSl8fGZ1bmN0aW9uKE9OUkVBRFlTVEFURUNIQU5HRSl7dmFyIHBvc3RNZXNzYWdlPWdsb2JhbC5wb3N0TWVzc2FnZSxhZGRFdmVudExpc3RlbmVyPWdsb2JhbC5hZGRFdmVudExpc3RlbmVyLE1lc3NhZ2VDaGFubmVsPWdsb2JhbC5NZXNzYWdlQ2hhbm5lbCxjb3VudGVyPTAscXVldWU9e30sZGVmZXIsY2hhbm5lbCxwb3J0O3NldEltbWVkaWF0ZT1mdW5jdGlvbihmbil7dmFyIGFyZ3M9W10saT0xO3doaWxlKGFyZ3VtZW50cy5sZW5ndGg+aSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO3F1ZXVlWysrY291bnRlcl09ZnVuY3Rpb24oKXtpbnZva2UoaXNGdW5jdGlvbihmbik/Zm46RnVuY3Rpb24oZm4pLGFyZ3MpfTtkZWZlcihjb3VudGVyKTtyZXR1cm4gY291bnRlcn07Y2xlYXJJbW1lZGlhdGU9ZnVuY3Rpb24oaWQpe2RlbGV0ZSBxdWV1ZVtpZF19O2Z1bmN0aW9uIHJ1bihpZCl7aWYoaGFzKHF1ZXVlLGlkKSl7dmFyIGZuPXF1ZXVlW2lkXTtkZWxldGUgcXVldWVbaWRdO2ZuKCl9fWZ1bmN0aW9uIGxpc3RuZXIoZXZlbnQpe3J1bihldmVudC5kYXRhKX1pZihOT0RFKXtkZWZlcj1mdW5jdGlvbihpZCl7bmV4dFRpY2socGFydC5jYWxsKHJ1bixpZCkpfX1lbHNlIGlmKGFkZEV2ZW50TGlzdGVuZXImJmlzRnVuY3Rpb24ocG9zdE1lc3NhZ2UpJiYhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe2RlZmVyPWZ1bmN0aW9uKGlkKXtwb3N0TWVzc2FnZShpZCxcIipcIil9O2FkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbGlzdG5lcixmYWxzZSl9ZWxzZSBpZihpc0Z1bmN0aW9uKE1lc3NhZ2VDaGFubmVsKSl7Y2hhbm5lbD1uZXcgTWVzc2FnZUNoYW5uZWw7cG9ydD1jaGFubmVsLnBvcnQyO2NoYW5uZWwucG9ydDEub25tZXNzYWdlPWxpc3RuZXI7ZGVmZXI9Y3R4KHBvcnQucG9zdE1lc3NhZ2UscG9ydCwxKX1lbHNlIGlmKGRvY3VtZW50JiZPTlJFQURZU1RBVEVDSEFOR0UgaW4gZG9jdW1lbnRbQ1JFQVRFX0VMRU1FTlRdKFwic2NyaXB0XCIpKXtkZWZlcj1mdW5jdGlvbihpZCl7aHRtbC5hcHBlbmRDaGlsZChkb2N1bWVudFtDUkVBVEVfRUxFTUVOVF0oXCJzY3JpcHRcIikpW09OUkVBRFlTVEFURUNIQU5HRV09ZnVuY3Rpb24oKXtodG1sLnJlbW92ZUNoaWxkKHRoaXMpO3J1bihpZCl9fX1lbHNle2RlZmVyPWZ1bmN0aW9uKGlkKXtzZXRUaW1lb3V0KHJ1biwwLGlkKX19fShcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiKTskZGVmaW5lKEdMT0JBTCtCSU5ELHtzZXRJbW1lZGlhdGU6c2V0SW1tZWRpYXRlLGNsZWFySW1tZWRpYXRlOmNsZWFySW1tZWRpYXRlfSk7IWZ1bmN0aW9uKFByb21pc2UsdGVzdCl7aXNGdW5jdGlvbihQcm9taXNlKSYmaXNGdW5jdGlvbihQcm9taXNlLnJlc29sdmUpJiZQcm9taXNlLnJlc29sdmUodGVzdD1uZXcgUHJvbWlzZShmdW5jdGlvbigpe30pKT09dGVzdHx8ZnVuY3Rpb24oYXNhcCxSRUNPUkQpe2Z1bmN0aW9uIGlzVGhlbmFibGUoaXQpe3ZhciB0aGVuO2lmKGlzT2JqZWN0KGl0KSl0aGVuPWl0LnRoZW47cmV0dXJuIGlzRnVuY3Rpb24odGhlbik/dGhlbjpmYWxzZX1mdW5jdGlvbiBoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHByb21pc2Upe3ZhciByZWNvcmQ9cHJvbWlzZVtSRUNPUkRdLGNoYWluPXJlY29yZC5jLGk9MCxyZWFjdDtpZihyZWNvcmQuaClyZXR1cm4gdHJ1ZTt3aGlsZShjaGFpbi5sZW5ndGg+aSl7cmVhY3Q9Y2hhaW5baSsrXTtpZihyZWFjdC5mYWlsfHxoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHJlYWN0LlApKXJldHVybiB0cnVlfX1mdW5jdGlvbiBub3RpZnkocmVjb3JkLHJlamVjdCl7dmFyIGNoYWluPXJlY29yZC5jO2lmKHJlamVjdHx8Y2hhaW4ubGVuZ3RoKWFzYXAoZnVuY3Rpb24oKXt2YXIgcHJvbWlzZT1yZWNvcmQucCx2YWx1ZT1yZWNvcmQudixvaz1yZWNvcmQucz09MSxpPTA7aWYocmVqZWN0JiYhaGFuZGxlZFJlamVjdGlvbk9ySGFzT25SZWplY3RlZChwcm9taXNlKSl7c2V0VGltZW91dChmdW5jdGlvbigpe2lmKCFoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHByb21pc2UpKXtpZihOT0RFKXtpZighcHJvY2Vzcy5lbWl0KFwidW5oYW5kbGVkUmVqZWN0aW9uXCIsdmFsdWUscHJvbWlzZSkpe319ZWxzZSBpZihpc0Z1bmN0aW9uKGNvbnNvbGUuZXJyb3IpKXtjb25zb2xlLmVycm9yKFwiVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uXCIsdmFsdWUpfX19LDFlMyl9ZWxzZSB3aGlsZShjaGFpbi5sZW5ndGg+aSkhZnVuY3Rpb24ocmVhY3Qpe3ZhciBjYj1vaz9yZWFjdC5vazpyZWFjdC5mYWlsLHJldCx0aGVuO3RyeXtpZihjYil7aWYoIW9rKXJlY29yZC5oPXRydWU7cmV0PWNiPT09dHJ1ZT92YWx1ZTpjYih2YWx1ZSk7aWYocmV0PT09cmVhY3QuUCl7cmVhY3QucmVqKFR5cGVFcnJvcihQUk9NSVNFK1wiLWNoYWluIGN5Y2xlXCIpKX1lbHNlIGlmKHRoZW49aXNUaGVuYWJsZShyZXQpKXt0aGVuLmNhbGwocmV0LHJlYWN0LnJlcyxyZWFjdC5yZWopfWVsc2UgcmVhY3QucmVzKHJldCl9ZWxzZSByZWFjdC5yZWoodmFsdWUpfWNhdGNoKGVycil7cmVhY3QucmVqKGVycil9fShjaGFpbltpKytdKTtjaGFpbi5sZW5ndGg9MH0pfWZ1bmN0aW9uIHJlc29sdmUodmFsdWUpe3ZhciByZWNvcmQ9dGhpcyx0aGVuLHdyYXBwZXI7aWYocmVjb3JkLmQpcmV0dXJuO3JlY29yZC5kPXRydWU7cmVjb3JkPXJlY29yZC5yfHxyZWNvcmQ7dHJ5e2lmKHRoZW49aXNUaGVuYWJsZSh2YWx1ZSkpe3dyYXBwZXI9e3I6cmVjb3JkLGQ6ZmFsc2V9O3RoZW4uY2FsbCh2YWx1ZSxjdHgocmVzb2x2ZSx3cmFwcGVyLDEpLGN0eChyZWplY3Qsd3JhcHBlciwxKSl9ZWxzZXtyZWNvcmQudj12YWx1ZTtyZWNvcmQucz0xO25vdGlmeShyZWNvcmQpfX1jYXRjaChlcnIpe3JlamVjdC5jYWxsKHdyYXBwZXJ8fHtyOnJlY29yZCxkOmZhbHNlfSxlcnIpfX1mdW5jdGlvbiByZWplY3QodmFsdWUpe3ZhciByZWNvcmQ9dGhpcztpZihyZWNvcmQuZClyZXR1cm47cmVjb3JkLmQ9dHJ1ZTtyZWNvcmQ9cmVjb3JkLnJ8fHJlY29yZDtyZWNvcmQudj12YWx1ZTtyZWNvcmQucz0yO25vdGlmeShyZWNvcmQsdHJ1ZSl9ZnVuY3Rpb24gZ2V0Q29uc3RydWN0b3IoQyl7dmFyIFM9YXNzZXJ0T2JqZWN0KEMpW1NZTUJPTF9TUEVDSUVTXTtyZXR1cm4gUyE9dW5kZWZpbmVkP1M6Q31Qcm9taXNlPWZ1bmN0aW9uKGV4ZWN1dG9yKXthc3NlcnRGdW5jdGlvbihleGVjdXRvcik7YXNzZXJ0SW5zdGFuY2UodGhpcyxQcm9taXNlLFBST01JU0UpO3ZhciByZWNvcmQ9e3A6dGhpcyxjOltdLHM6MCxkOmZhbHNlLHY6dW5kZWZpbmVkLGg6ZmFsc2V9O2hpZGRlbih0aGlzLFJFQ09SRCxyZWNvcmQpO3RyeXtleGVjdXRvcihjdHgocmVzb2x2ZSxyZWNvcmQsMSksY3R4KHJlamVjdCxyZWNvcmQsMSkpfWNhdGNoKGVycil7cmVqZWN0LmNhbGwocmVjb3JkLGVycil9fTthc3NpZ25IaWRkZW4oUHJvbWlzZVtQUk9UT1RZUEVdLHt0aGVuOmZ1bmN0aW9uKG9uRnVsZmlsbGVkLG9uUmVqZWN0ZWQpe3ZhciBTPWFzc2VydE9iamVjdChhc3NlcnRPYmplY3QodGhpcylbQ09OU1RSVUNUT1JdKVtTWU1CT0xfU1BFQ0lFU107dmFyIHJlYWN0PXtvazppc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKT9vbkZ1bGZpbGxlZDp0cnVlLGZhaWw6aXNGdW5jdGlvbihvblJlamVjdGVkKT9vblJlamVjdGVkOmZhbHNlfSxQPXJlYWN0LlA9bmV3KFMhPXVuZGVmaW5lZD9TOlByb21pc2UpKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXtyZWFjdC5yZXM9YXNzZXJ0RnVuY3Rpb24ocmVzb2x2ZSk7cmVhY3QucmVqPWFzc2VydEZ1bmN0aW9uKHJlamVjdCl9KSxyZWNvcmQ9dGhpc1tSRUNPUkRdO3JlY29yZC5jLnB1c2gocmVhY3QpO3JlY29yZC5zJiZub3RpZnkocmVjb3JkKTtyZXR1cm4gUH0sXCJjYXRjaFwiOmZ1bmN0aW9uKG9uUmVqZWN0ZWQpe3JldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLG9uUmVqZWN0ZWQpfX0pO2Fzc2lnbkhpZGRlbihQcm9taXNlLHthbGw6ZnVuY3Rpb24oaXRlcmFibGUpe3ZhciBQcm9taXNlPWdldENvbnN0cnVjdG9yKHRoaXMpLHZhbHVlcz1bXTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe2Zvck9mKGl0ZXJhYmxlLGZhbHNlLHB1c2gsdmFsdWVzKTt2YXIgcmVtYWluaW5nPXZhbHVlcy5sZW5ndGgscmVzdWx0cz1BcnJheShyZW1haW5pbmcpO2lmKHJlbWFpbmluZylmb3JFYWNoLmNhbGwodmFsdWVzLGZ1bmN0aW9uKHByb21pc2UsaW5kZXgpe1Byb21pc2UucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtyZXN1bHRzW2luZGV4XT12YWx1ZTstLXJlbWFpbmluZ3x8cmVzb2x2ZShyZXN1bHRzKX0scmVqZWN0KX0pO2Vsc2UgcmVzb2x2ZShyZXN1bHRzKX0pfSxyYWNlOmZ1bmN0aW9uKGl0ZXJhYmxlKXt2YXIgUHJvbWlzZT1nZXRDb25zdHJ1Y3Rvcih0aGlzKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe2Zvck9mKGl0ZXJhYmxlLGZhbHNlLGZ1bmN0aW9uKHByb21pc2Upe1Byb21pc2UucmVzb2x2ZShwcm9taXNlKS50aGVuKHJlc29sdmUscmVqZWN0KX0pfSl9LHJlamVjdDpmdW5jdGlvbihyKXtyZXR1cm4gbmV3KGdldENvbnN0cnVjdG9yKHRoaXMpKShmdW5jdGlvbihyZXNvbHZlLHJlamVjdCl7cmVqZWN0KHIpfSl9LHJlc29sdmU6ZnVuY3Rpb24oeCl7cmV0dXJuIGlzT2JqZWN0KHgpJiZSRUNPUkQgaW4geCYmZ2V0UHJvdG90eXBlT2YoeCk9PT10aGlzW1BST1RPVFlQRV0/eDpuZXcoZ2V0Q29uc3RydWN0b3IodGhpcykpKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXtyZXNvbHZlKHgpfSl9fSl9KG5leHRUaWNrfHxzZXRJbW1lZGlhdGUsc2FmZVN5bWJvbChcInJlY29yZFwiKSk7c2V0VG9TdHJpbmdUYWcoUHJvbWlzZSxQUk9NSVNFKTtzZXRTcGVjaWVzKFByb21pc2UpOyRkZWZpbmUoR0xPQkFMK0ZPUkNFRCohaXNOYXRpdmUoUHJvbWlzZSkse1Byb21pc2U6UHJvbWlzZX0pfShnbG9iYWxbUFJPTUlTRV0pOyFmdW5jdGlvbigpe3ZhciBVSUQ9c2FmZVN5bWJvbChcInVpZFwiKSxPMT1zYWZlU3ltYm9sKFwiTzFcIiksV0VBSz1zYWZlU3ltYm9sKFwid2Vha1wiKSxMRUFLPXNhZmVTeW1ib2woXCJsZWFrXCIpLExBU1Q9c2FmZVN5bWJvbChcImxhc3RcIiksRklSU1Q9c2FmZVN5bWJvbChcImZpcnN0XCIpLFNJWkU9REVTQz9zYWZlU3ltYm9sKFwic2l6ZVwiKTpcInNpemVcIix1aWQ9MCx0bXA9e307ZnVuY3Rpb24gZ2V0Q29sbGVjdGlvbihDLE5BTUUsbWV0aG9kcyxjb21tb25NZXRob2RzLGlzTWFwLGlzV2Vhayl7dmFyIEFEREVSPWlzTWFwP1wic2V0XCI6XCJhZGRcIixwcm90bz1DJiZDW1BST1RPVFlQRV0sTz17fTtmdW5jdGlvbiBpbml0RnJvbUl0ZXJhYmxlKHRoYXQsaXRlcmFibGUpe2lmKGl0ZXJhYmxlIT11bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsaXNNYXAsdGhhdFtBRERFUl0sdGhhdCk7cmV0dXJuIHRoYXR9ZnVuY3Rpb24gZml4U1ZaKGtleSxjaGFpbil7dmFyIG1ldGhvZD1wcm90b1trZXldO2lmKGZyYW1ld29yaylwcm90b1trZXldPWZ1bmN0aW9uKGEsYil7dmFyIHJlc3VsdD1tZXRob2QuY2FsbCh0aGlzLGE9PT0wPzA6YSxiKTtyZXR1cm4gY2hhaW4/dGhpczpyZXN1bHR9fWlmKCFpc05hdGl2ZShDKXx8IShpc1dlYWt8fCFCVUdHWV9JVEVSQVRPUlMmJmhhcyhwcm90byxGT1JfRUFDSCkmJmhhcyhwcm90byxcImVudHJpZXNcIikpKXtDPWlzV2Vhaz9mdW5jdGlvbihpdGVyYWJsZSl7YXNzZXJ0SW5zdGFuY2UodGhpcyxDLE5BTUUpO3NldCh0aGlzLFVJRCx1aWQrKyk7aW5pdEZyb21JdGVyYWJsZSh0aGlzLGl0ZXJhYmxlKX06ZnVuY3Rpb24oaXRlcmFibGUpe3ZhciB0aGF0PXRoaXM7YXNzZXJ0SW5zdGFuY2UodGhhdCxDLE5BTUUpO3NldCh0aGF0LE8xLGNyZWF0ZShudWxsKSk7c2V0KHRoYXQsU0laRSwwKTtzZXQodGhhdCxMQVNULHVuZGVmaW5lZCk7c2V0KHRoYXQsRklSU1QsdW5kZWZpbmVkKTtpbml0RnJvbUl0ZXJhYmxlKHRoYXQsaXRlcmFibGUpfTthc3NpZ25IaWRkZW4oYXNzaWduSGlkZGVuKENbUFJPVE9UWVBFXSxtZXRob2RzKSxjb21tb25NZXRob2RzKTtpc1dlYWt8fCFERVNDfHxkZWZpbmVQcm9wZXJ0eShDW1BST1RPVFlQRV0sXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBhc3NlcnREZWZpbmVkKHRoaXNbU0laRV0pfX0pfWVsc2V7dmFyIE5hdGl2ZT1DLGluc3Q9bmV3IEMsY2hhaW49aW5zdFtBRERFUl0oaXNXZWFrP3t9Oi0wLDEpLGJ1Z2d5WmVybztpZihjaGVja0Rhbmdlckl0ZXJDbG9zaW5nKGZ1bmN0aW9uKE8pe25ldyBDKE8pfSkpe0M9ZnVuY3Rpb24oaXRlcmFibGUpe2Fzc2VydEluc3RhbmNlKHRoaXMsQyxOQU1FKTtyZXR1cm4gaW5pdEZyb21JdGVyYWJsZShuZXcgTmF0aXZlLGl0ZXJhYmxlKX07Q1tQUk9UT1RZUEVdPXByb3RvO2lmKGZyYW1ld29yaylwcm90b1tDT05TVFJVQ1RPUl09Q31pc1dlYWt8fGluc3RbRk9SX0VBQ0hdKGZ1bmN0aW9uKHZhbCxrZXkpe2J1Z2d5WmVybz0xL2tleT09PS1JbmZpbml0eX0pO2lmKGJ1Z2d5WmVybyl7Zml4U1ZaKFwiZGVsZXRlXCIpO2ZpeFNWWihcImhhc1wiKTtpc01hcCYmZml4U1ZaKFwiZ2V0XCIpfWlmKGJ1Z2d5WmVyb3x8Y2hhaW4hPT1pbnN0KWZpeFNWWihBRERFUix0cnVlKX1zZXRUb1N0cmluZ1RhZyhDLE5BTUUpO3NldFNwZWNpZXMoQyk7T1tOQU1FXT1DOyRkZWZpbmUoR0xPQkFMK1dSQVArRk9SQ0VEKiFpc05hdGl2ZShDKSxPKTtpc1dlYWt8fGRlZmluZVN0ZEl0ZXJhdG9ycyhDLE5BTUUsZnVuY3Rpb24oaXRlcmF0ZWQsa2luZCl7c2V0KHRoaXMsSVRFUix7bzppdGVyYXRlZCxrOmtpbmR9KX0sZnVuY3Rpb24oKXt2YXIgaXRlcj10aGlzW0lURVJdLGtpbmQ9aXRlci5rLGVudHJ5PWl0ZXIubDt3aGlsZShlbnRyeSYmZW50cnkucillbnRyeT1lbnRyeS5wO2lmKCFpdGVyLm98fCEoaXRlci5sPWVudHJ5PWVudHJ5P2VudHJ5Lm46aXRlci5vW0ZJUlNUXSkpe2l0ZXIubz11bmRlZmluZWQ7cmV0dXJuIGl0ZXJSZXN1bHQoMSl9aWYoa2luZD09S0VZKXJldHVybiBpdGVyUmVzdWx0KDAsZW50cnkuayk7aWYoa2luZD09VkFMVUUpcmV0dXJuIGl0ZXJSZXN1bHQoMCxlbnRyeS52KTtyZXR1cm4gaXRlclJlc3VsdCgwLFtlbnRyeS5rLGVudHJ5LnZdKX0saXNNYXA/S0VZK1ZBTFVFOlZBTFVFLCFpc01hcCk7cmV0dXJuIEN9ZnVuY3Rpb24gZmFzdEtleShpdCxjcmVhdGUpe2lmKCFpc09iamVjdChpdCkpcmV0dXJuKHR5cGVvZiBpdD09XCJzdHJpbmdcIj9cIlNcIjpcIlBcIikraXQ7aWYoaXNGcm96ZW4oaXQpKXJldHVyblwiRlwiO2lmKCFoYXMoaXQsVUlEKSl7aWYoIWNyZWF0ZSlyZXR1cm5cIkVcIjtoaWRkZW4oaXQsVUlELCsrdWlkKX1yZXR1cm5cIk9cIitpdFtVSURdfWZ1bmN0aW9uIGdldEVudHJ5KHRoYXQsa2V5KXt2YXIgaW5kZXg9ZmFzdEtleShrZXkpLGVudHJ5O2lmKGluZGV4IT1cIkZcIilyZXR1cm4gdGhhdFtPMV1baW5kZXhdO2ZvcihlbnRyeT10aGF0W0ZJUlNUXTtlbnRyeTtlbnRyeT1lbnRyeS5uKXtpZihlbnRyeS5rPT1rZXkpcmV0dXJuIGVudHJ5fX1mdW5jdGlvbiBkZWYodGhhdCxrZXksdmFsdWUpe3ZhciBlbnRyeT1nZXRFbnRyeSh0aGF0LGtleSkscHJldixpbmRleDtpZihlbnRyeSllbnRyeS52PXZhbHVlO2Vsc2V7dGhhdFtMQVNUXT1lbnRyeT17aTppbmRleD1mYXN0S2V5KGtleSx0cnVlKSxrOmtleSx2OnZhbHVlLHA6cHJldj10aGF0W0xBU1RdLG46dW5kZWZpbmVkLHI6ZmFsc2V9O2lmKCF0aGF0W0ZJUlNUXSl0aGF0W0ZJUlNUXT1lbnRyeTtpZihwcmV2KXByZXYubj1lbnRyeTt0aGF0W1NJWkVdKys7aWYoaW5kZXghPVwiRlwiKXRoYXRbTzFdW2luZGV4XT1lbnRyeX1yZXR1cm4gdGhhdH12YXIgY29sbGVjdGlvbk1ldGhvZHM9e2NsZWFyOmZ1bmN0aW9uKCl7Zm9yKHZhciB0aGF0PXRoaXMsZGF0YT10aGF0W08xXSxlbnRyeT10aGF0W0ZJUlNUXTtlbnRyeTtlbnRyeT1lbnRyeS5uKXtlbnRyeS5yPXRydWU7XG5pZihlbnRyeS5wKWVudHJ5LnA9ZW50cnkucC5uPXVuZGVmaW5lZDtkZWxldGUgZGF0YVtlbnRyeS5pXX10aGF0W0ZJUlNUXT10aGF0W0xBU1RdPXVuZGVmaW5lZDt0aGF0W1NJWkVdPTB9LFwiZGVsZXRlXCI6ZnVuY3Rpb24oa2V5KXt2YXIgdGhhdD10aGlzLGVudHJ5PWdldEVudHJ5KHRoYXQsa2V5KTtpZihlbnRyeSl7dmFyIG5leHQ9ZW50cnkubixwcmV2PWVudHJ5LnA7ZGVsZXRlIHRoYXRbTzFdW2VudHJ5LmldO2VudHJ5LnI9dHJ1ZTtpZihwcmV2KXByZXYubj1uZXh0O2lmKG5leHQpbmV4dC5wPXByZXY7aWYodGhhdFtGSVJTVF09PWVudHJ5KXRoYXRbRklSU1RdPW5leHQ7aWYodGhhdFtMQVNUXT09ZW50cnkpdGhhdFtMQVNUXT1wcmV2O3RoYXRbU0laRV0tLX1yZXR1cm4hIWVudHJ5fSxmb3JFYWNoOmZ1bmN0aW9uKGNhbGxiYWNrZm4pe3ZhciBmPWN0eChjYWxsYmFja2ZuLGFyZ3VtZW50c1sxXSwzKSxlbnRyeTt3aGlsZShlbnRyeT1lbnRyeT9lbnRyeS5uOnRoaXNbRklSU1RdKXtmKGVudHJ5LnYsZW50cnkuayx0aGlzKTt3aGlsZShlbnRyeSYmZW50cnkucillbnRyeT1lbnRyeS5wfX0saGFzOmZ1bmN0aW9uKGtleSl7cmV0dXJuISFnZXRFbnRyeSh0aGlzLGtleSl9fTtNYXA9Z2V0Q29sbGVjdGlvbihNYXAsTUFQLHtnZXQ6ZnVuY3Rpb24oa2V5KXt2YXIgZW50cnk9Z2V0RW50cnkodGhpcyxrZXkpO3JldHVybiBlbnRyeSYmZW50cnkudn0sc2V0OmZ1bmN0aW9uKGtleSx2YWx1ZSl7cmV0dXJuIGRlZih0aGlzLGtleT09PTA/MDprZXksdmFsdWUpfX0sY29sbGVjdGlvbk1ldGhvZHMsdHJ1ZSk7U2V0PWdldENvbGxlY3Rpb24oU2V0LFNFVCx7YWRkOmZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gZGVmKHRoaXMsdmFsdWU9dmFsdWU9PT0wPzA6dmFsdWUsdmFsdWUpfX0sY29sbGVjdGlvbk1ldGhvZHMpO2Z1bmN0aW9uIGRlZldlYWsodGhhdCxrZXksdmFsdWUpe2lmKGlzRnJvemVuKGFzc2VydE9iamVjdChrZXkpKSlsZWFrU3RvcmUodGhhdCkuc2V0KGtleSx2YWx1ZSk7ZWxzZXtoYXMoa2V5LFdFQUspfHxoaWRkZW4oa2V5LFdFQUsse30pO2tleVtXRUFLXVt0aGF0W1VJRF1dPXZhbHVlfXJldHVybiB0aGF0fWZ1bmN0aW9uIGxlYWtTdG9yZSh0aGF0KXtyZXR1cm4gdGhhdFtMRUFLXXx8aGlkZGVuKHRoYXQsTEVBSyxuZXcgTWFwKVtMRUFLXX12YXIgd2Vha01ldGhvZHM9e1wiZGVsZXRlXCI6ZnVuY3Rpb24oa2V5KXtpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7aWYoaXNGcm96ZW4oa2V5KSlyZXR1cm4gbGVha1N0b3JlKHRoaXMpW1wiZGVsZXRlXCJdKGtleSk7cmV0dXJuIGhhcyhrZXksV0VBSykmJmhhcyhrZXlbV0VBS10sdGhpc1tVSURdKSYmZGVsZXRlIGtleVtXRUFLXVt0aGlzW1VJRF1dfSxoYXM6ZnVuY3Rpb24oa2V5KXtpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7aWYoaXNGcm96ZW4oa2V5KSlyZXR1cm4gbGVha1N0b3JlKHRoaXMpLmhhcyhrZXkpO3JldHVybiBoYXMoa2V5LFdFQUspJiZoYXMoa2V5W1dFQUtdLHRoaXNbVUlEXSl9fTtXZWFrTWFwPWdldENvbGxlY3Rpb24oV2Vha01hcCxXRUFLTUFQLHtnZXQ6ZnVuY3Rpb24oa2V5KXtpZihpc09iamVjdChrZXkpKXtpZihpc0Zyb3plbihrZXkpKXJldHVybiBsZWFrU3RvcmUodGhpcykuZ2V0KGtleSk7aWYoaGFzKGtleSxXRUFLKSlyZXR1cm4ga2V5W1dFQUtdW3RoaXNbVUlEXV19fSxzZXQ6ZnVuY3Rpb24oa2V5LHZhbHVlKXtyZXR1cm4gZGVmV2Vhayh0aGlzLGtleSx2YWx1ZSl9fSx3ZWFrTWV0aG9kcyx0cnVlLHRydWUpO2lmKGZyYW1ld29yayYmKG5ldyBXZWFrTWFwKS5zZXQoT2JqZWN0LmZyZWV6ZSh0bXApLDcpLmdldCh0bXApIT03KXtmb3JFYWNoLmNhbGwoYXJyYXkoXCJkZWxldGUsaGFzLGdldCxzZXRcIiksZnVuY3Rpb24oa2V5KXt2YXIgbWV0aG9kPVdlYWtNYXBbUFJPVE9UWVBFXVtrZXldO1dlYWtNYXBbUFJPVE9UWVBFXVtrZXldPWZ1bmN0aW9uKGEsYil7aWYoaXNPYmplY3QoYSkmJmlzRnJvemVuKGEpKXt2YXIgcmVzdWx0PWxlYWtTdG9yZSh0aGlzKVtrZXldKGEsYik7cmV0dXJuIGtleT09XCJzZXRcIj90aGlzOnJlc3VsdH1yZXR1cm4gbWV0aG9kLmNhbGwodGhpcyxhLGIpfX0pfVdlYWtTZXQ9Z2V0Q29sbGVjdGlvbihXZWFrU2V0LFdFQUtTRVQse2FkZDpmdW5jdGlvbih2YWx1ZSl7cmV0dXJuIGRlZldlYWsodGhpcyx2YWx1ZSx0cnVlKX19LHdlYWtNZXRob2RzLGZhbHNlLHRydWUpfSgpOyFmdW5jdGlvbigpe2Z1bmN0aW9uIEVudW1lcmF0ZShpdGVyYXRlZCl7dmFyIGtleXM9W10sa2V5O2ZvcihrZXkgaW4gaXRlcmF0ZWQpa2V5cy5wdXNoKGtleSk7c2V0KHRoaXMsSVRFUix7bzppdGVyYXRlZCxhOmtleXMsaTowfSl9Y3JlYXRlSXRlcmF0b3IoRW51bWVyYXRlLE9CSkVDVCxmdW5jdGlvbigpe3ZhciBpdGVyPXRoaXNbSVRFUl0sa2V5cz1pdGVyLmEsa2V5O2Rve2lmKGl0ZXIuaT49a2V5cy5sZW5ndGgpcmV0dXJuIGl0ZXJSZXN1bHQoMSl9d2hpbGUoISgoa2V5PWtleXNbaXRlci5pKytdKWluIGl0ZXIubykpO3JldHVybiBpdGVyUmVzdWx0KDAsa2V5KX0pO2Z1bmN0aW9uIHdyYXAoZm4pe3JldHVybiBmdW5jdGlvbihpdCl7YXNzZXJ0T2JqZWN0KGl0KTt0cnl7cmV0dXJuIGZuLmFwcGx5KHVuZGVmaW5lZCxhcmd1bWVudHMpLHRydWV9Y2F0Y2goZSl7cmV0dXJuIGZhbHNlfX19ZnVuY3Rpb24gcmVmbGVjdEdldCh0YXJnZXQscHJvcGVydHlLZXkpe3ZhciByZWNlaXZlcj1hcmd1bWVudHMubGVuZ3RoPDM/dGFyZ2V0OmFyZ3VtZW50c1syXSxkZXNjPWdldE93bkRlc2NyaXB0b3IoYXNzZXJ0T2JqZWN0KHRhcmdldCkscHJvcGVydHlLZXkpLHByb3RvO2lmKGRlc2MpcmV0dXJuIGhhcyhkZXNjLFwidmFsdWVcIik/ZGVzYy52YWx1ZTpkZXNjLmdldD09PXVuZGVmaW5lZD91bmRlZmluZWQ6ZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7cmV0dXJuIGlzT2JqZWN0KHByb3RvPWdldFByb3RvdHlwZU9mKHRhcmdldCkpP3JlZmxlY3RHZXQocHJvdG8scHJvcGVydHlLZXkscmVjZWl2ZXIpOnVuZGVmaW5lZH1mdW5jdGlvbiByZWZsZWN0U2V0KHRhcmdldCxwcm9wZXJ0eUtleSxWKXt2YXIgcmVjZWl2ZXI9YXJndW1lbnRzLmxlbmd0aDw0P3RhcmdldDphcmd1bWVudHNbM10sb3duRGVzYz1nZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLHByb3BlcnR5S2V5KSxleGlzdGluZ0Rlc2NyaXB0b3IscHJvdG87aWYoIW93bkRlc2Mpe2lmKGlzT2JqZWN0KHByb3RvPWdldFByb3RvdHlwZU9mKHRhcmdldCkpKXtyZXR1cm4gcmVmbGVjdFNldChwcm90byxwcm9wZXJ0eUtleSxWLHJlY2VpdmVyKX1vd25EZXNjPWRlc2NyaXB0b3IoMCl9aWYoaGFzKG93bkRlc2MsXCJ2YWx1ZVwiKSl7aWYob3duRGVzYy53cml0YWJsZT09PWZhbHNlfHwhaXNPYmplY3QocmVjZWl2ZXIpKXJldHVybiBmYWxzZTtleGlzdGluZ0Rlc2NyaXB0b3I9Z2V0T3duRGVzY3JpcHRvcihyZWNlaXZlcixwcm9wZXJ0eUtleSl8fGRlc2NyaXB0b3IoMCk7ZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlPVY7cmV0dXJuIGRlZmluZVByb3BlcnR5KHJlY2VpdmVyLHByb3BlcnR5S2V5LGV4aXN0aW5nRGVzY3JpcHRvciksdHJ1ZX1yZXR1cm4gb3duRGVzYy5zZXQ9PT11bmRlZmluZWQ/ZmFsc2U6KG93bkRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsViksdHJ1ZSl9dmFyIGlzRXh0ZW5zaWJsZT1PYmplY3QuaXNFeHRlbnNpYmxlfHxyZXR1cm5JdDt2YXIgcmVmbGVjdD17YXBwbHk6Y3R4KGNhbGwsYXBwbHksMyksY29uc3RydWN0OmZ1bmN0aW9uKHRhcmdldCxhcmd1bWVudHNMaXN0KXt2YXIgcHJvdG89YXNzZXJ0RnVuY3Rpb24oYXJndW1lbnRzLmxlbmd0aDwzP3RhcmdldDphcmd1bWVudHNbMl0pW1BST1RPVFlQRV0saW5zdGFuY2U9Y3JlYXRlKGlzT2JqZWN0KHByb3RvKT9wcm90bzpPYmplY3RQcm90bykscmVzdWx0PWFwcGx5LmNhbGwodGFyZ2V0LGluc3RhbmNlLGFyZ3VtZW50c0xpc3QpO3JldHVybiBpc09iamVjdChyZXN1bHQpP3Jlc3VsdDppbnN0YW5jZX0sZGVmaW5lUHJvcGVydHk6d3JhcChkZWZpbmVQcm9wZXJ0eSksZGVsZXRlUHJvcGVydHk6ZnVuY3Rpb24odGFyZ2V0LHByb3BlcnR5S2V5KXt2YXIgZGVzYz1nZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLHByb3BlcnR5S2V5KTtyZXR1cm4gZGVzYyYmIWRlc2MuY29uZmlndXJhYmxlP2ZhbHNlOmRlbGV0ZSB0YXJnZXRbcHJvcGVydHlLZXldfSxlbnVtZXJhdGU6ZnVuY3Rpb24odGFyZ2V0KXtyZXR1cm4gbmV3IEVudW1lcmF0ZShhc3NlcnRPYmplY3QodGFyZ2V0KSl9LGdldDpyZWZsZWN0R2V0LGdldE93blByb3BlcnR5RGVzY3JpcHRvcjpmdW5jdGlvbih0YXJnZXQscHJvcGVydHlLZXkpe3JldHVybiBnZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLHByb3BlcnR5S2V5KX0sZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24odGFyZ2V0KXtyZXR1cm4gZ2V0UHJvdG90eXBlT2YoYXNzZXJ0T2JqZWN0KHRhcmdldCkpfSxoYXM6ZnVuY3Rpb24odGFyZ2V0LHByb3BlcnR5S2V5KXtyZXR1cm4gcHJvcGVydHlLZXkgaW4gdGFyZ2V0fSxpc0V4dGVuc2libGU6ZnVuY3Rpb24odGFyZ2V0KXtyZXR1cm4hIWlzRXh0ZW5zaWJsZShhc3NlcnRPYmplY3QodGFyZ2V0KSl9LG93bktleXM6b3duS2V5cyxwcmV2ZW50RXh0ZW5zaW9uczp3cmFwKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9uc3x8cmV0dXJuSXQpLHNldDpyZWZsZWN0U2V0fTtpZihzZXRQcm90b3R5cGVPZilyZWZsZWN0LnNldFByb3RvdHlwZU9mPWZ1bmN0aW9uKHRhcmdldCxwcm90byl7cmV0dXJuIHNldFByb3RvdHlwZU9mKGFzc2VydE9iamVjdCh0YXJnZXQpLHByb3RvKSx0cnVlfTskZGVmaW5lKEdMT0JBTCx7UmVmbGVjdDp7fX0pOyRkZWZpbmUoU1RBVElDLFwiUmVmbGVjdFwiLHJlZmxlY3QpfSgpOyFmdW5jdGlvbigpeyRkZWZpbmUoUFJPVE8sQVJSQVkse2luY2x1ZGVzOmNyZWF0ZUFycmF5Q29udGFpbnModHJ1ZSl9KTskZGVmaW5lKFBST1RPLFNUUklORyx7YXQ6Y3JlYXRlUG9pbnRBdCh0cnVlKX0pO2Z1bmN0aW9uIGNyZWF0ZU9iamVjdFRvQXJyYXkoaXNFbnRyaWVzKXtyZXR1cm4gZnVuY3Rpb24ob2JqZWN0KXt2YXIgTz10b09iamVjdChvYmplY3QpLGtleXM9Z2V0S2V5cyhvYmplY3QpLGxlbmd0aD1rZXlzLmxlbmd0aCxpPTAscmVzdWx0PUFycmF5KGxlbmd0aCksa2V5O2lmKGlzRW50cmllcyl3aGlsZShsZW5ndGg+aSlyZXN1bHRbaV09W2tleT1rZXlzW2krK10sT1trZXldXTtlbHNlIHdoaWxlKGxlbmd0aD5pKXJlc3VsdFtpXT1PW2tleXNbaSsrXV07cmV0dXJuIHJlc3VsdH19JGRlZmluZShTVEFUSUMsT0JKRUNULHtnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOmZ1bmN0aW9uKG9iamVjdCl7dmFyIE89dG9PYmplY3Qob2JqZWN0KSxyZXN1bHQ9e307Zm9yRWFjaC5jYWxsKG93bktleXMoTyksZnVuY3Rpb24oa2V5KXtkZWZpbmVQcm9wZXJ0eShyZXN1bHQsa2V5LGRlc2NyaXB0b3IoMCxnZXRPd25EZXNjcmlwdG9yKE8sa2V5KSkpfSk7cmV0dXJuIHJlc3VsdH0sdmFsdWVzOmNyZWF0ZU9iamVjdFRvQXJyYXkoZmFsc2UpLGVudHJpZXM6Y3JlYXRlT2JqZWN0VG9BcnJheSh0cnVlKX0pOyRkZWZpbmUoU1RBVElDLFJFR0VYUCx7ZXNjYXBlOmNyZWF0ZVJlcGxhY2VyKC8oW1xcXFxcXC1bXFxde30oKSorPy4sXiR8XSkvZyxcIlxcXFwkMVwiLHRydWUpfSl9KCk7IWZ1bmN0aW9uKFJFRkVSRU5DRSl7UkVGRVJFTkNFX0dFVD1nZXRXZWxsS25vd25TeW1ib2woUkVGRVJFTkNFK1wiR2V0XCIsdHJ1ZSk7dmFyIFJFRkVSRU5DRV9TRVQ9Z2V0V2VsbEtub3duU3ltYm9sKFJFRkVSRU5DRStTRVQsdHJ1ZSksUkVGRVJFTkNFX0RFTEVURT1nZXRXZWxsS25vd25TeW1ib2woUkVGRVJFTkNFK1wiRGVsZXRlXCIsdHJ1ZSk7JGRlZmluZShTVEFUSUMsU1lNQk9MLHtyZWZlcmVuY2VHZXQ6UkVGRVJFTkNFX0dFVCxyZWZlcmVuY2VTZXQ6UkVGRVJFTkNFX1NFVCxyZWZlcmVuY2VEZWxldGU6UkVGRVJFTkNFX0RFTEVURX0pO2hpZGRlbihGdW5jdGlvblByb3RvLFJFRkVSRU5DRV9HRVQscmV0dXJuVGhpcyk7ZnVuY3Rpb24gc2V0TWFwTWV0aG9kcyhDb25zdHJ1Y3Rvcil7aWYoQ29uc3RydWN0b3Ipe3ZhciBNYXBQcm90bz1Db25zdHJ1Y3RvcltQUk9UT1RZUEVdO2hpZGRlbihNYXBQcm90byxSRUZFUkVOQ0VfR0VULE1hcFByb3RvLmdldCk7aGlkZGVuKE1hcFByb3RvLFJFRkVSRU5DRV9TRVQsTWFwUHJvdG8uc2V0KTtoaWRkZW4oTWFwUHJvdG8sUkVGRVJFTkNFX0RFTEVURSxNYXBQcm90b1tcImRlbGV0ZVwiXSl9fXNldE1hcE1ldGhvZHMoTWFwKTtzZXRNYXBNZXRob2RzKFdlYWtNYXApfShcInJlZmVyZW5jZVwiKTshZnVuY3Rpb24oYXJyYXlTdGF0aWNzKXtmdW5jdGlvbiBzZXRBcnJheVN0YXRpY3Moa2V5cyxsZW5ndGgpe2ZvckVhY2guY2FsbChhcnJheShrZXlzKSxmdW5jdGlvbihrZXkpe2lmKGtleSBpbiBBcnJheVByb3RvKWFycmF5U3RhdGljc1trZXldPWN0eChjYWxsLEFycmF5UHJvdG9ba2V5XSxsZW5ndGgpfSl9c2V0QXJyYXlTdGF0aWNzKFwicG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllc1wiLDEpO3NldEFycmF5U3RhdGljcyhcImluZGV4T2YsZXZlcnksc29tZSxmb3JFYWNoLG1hcCxmaWx0ZXIsZmluZCxmaW5kSW5kZXgsaW5jbHVkZXNcIiwzKTtzZXRBcnJheVN0YXRpY3MoXCJqb2luLHNsaWNlLGNvbmNhdCxwdXNoLHNwbGljZSx1bnNoaWZ0LHNvcnQsbGFzdEluZGV4T2YsXCIrXCJyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsLHR1cm5cIik7JGRlZmluZShTVEFUSUMsQVJSQVksYXJyYXlTdGF0aWNzKX0oe30pOyFmdW5jdGlvbihOb2RlTGlzdCl7aWYoZnJhbWV3b3JrJiZOb2RlTGlzdCYmIShTWU1CT0xfSVRFUkFUT1IgaW4gTm9kZUxpc3RbUFJPVE9UWVBFXSkpe2hpZGRlbihOb2RlTGlzdFtQUk9UT1RZUEVdLFNZTUJPTF9JVEVSQVRPUixJdGVyYXRvcnNbQVJSQVldKX1JdGVyYXRvcnMuTm9kZUxpc3Q9SXRlcmF0b3JzW0FSUkFZXX0oZ2xvYmFsLk5vZGVMaXN0KX0odHlwZW9mIHNlbGYhPVwidW5kZWZpbmVkXCImJnNlbGYuTWF0aD09PU1hdGg/c2VsZjpGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksdHJ1ZSl9LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXsoZnVuY3Rpb24oZ2xvYmFsKXshZnVuY3Rpb24oZ2xvYmFsKXtcInVzZSBzdHJpY3RcIjt2YXIgaGFzT3duPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHVuZGVmaW5lZDt2YXIgaXRlcmF0b3JTeW1ib2w9dHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmU3ltYm9sLml0ZXJhdG9yfHxcIkBAaXRlcmF0b3JcIjt2YXIgaW5Nb2R1bGU9dHlwZW9mIG1vZHVsZT09PVwib2JqZWN0XCI7dmFyIHJ1bnRpbWU9Z2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtpZihydW50aW1lKXtpZihpbk1vZHVsZSl7bW9kdWxlLmV4cG9ydHM9cnVudGltZX1yZXR1cm59cnVudGltZT1nbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lPWluTW9kdWxlP21vZHVsZS5leHBvcnRzOnt9O2Z1bmN0aW9uIHdyYXAoaW5uZXJGbixvdXRlckZuLHNlbGYsdHJ5TG9jc0xpc3Qpe3JldHVybiBuZXcgR2VuZXJhdG9yKGlubmVyRm4sb3V0ZXJGbixzZWxmfHxudWxsLHRyeUxvY3NMaXN0fHxbXSl9cnVudGltZS53cmFwPXdyYXA7ZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sb2JqLGFyZyl7dHJ5e3JldHVybnt0eXBlOlwibm9ybWFsXCIsYXJnOmZuLmNhbGwob2JqLGFyZyl9fWNhdGNoKGVycil7cmV0dXJue3R5cGU6XCJ0aHJvd1wiLGFyZzplcnJ9fX12YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydD1cInN1c3BlbmRlZFN0YXJ0XCI7dmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQ9XCJzdXNwZW5kZWRZaWVsZFwiO3ZhciBHZW5TdGF0ZUV4ZWN1dGluZz1cImV4ZWN1dGluZ1wiO3ZhciBHZW5TdGF0ZUNvbXBsZXRlZD1cImNvbXBsZXRlZFwiO3ZhciBDb250aW51ZVNlbnRpbmVsPXt9O2Z1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCl7fWZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCl7fXZhciBHcD1HZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGU9R2VuZXJhdG9yLnByb3RvdHlwZTtHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGU9R3AuY29uc3RydWN0b3I9R2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7R2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3I9R2VuZXJhdG9yRnVuY3Rpb247R2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWU9XCJHZW5lcmF0b3JGdW5jdGlvblwiO3J1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbj1mdW5jdGlvbihnZW5GdW4pe3ZhciBjdG9yPXR5cGVvZiBnZW5GdW49PT1cImZ1bmN0aW9uXCImJmdlbkZ1bi5jb25zdHJ1Y3RvcjtyZXR1cm4gY3Rvcj9jdG9yPT09R2VuZXJhdG9yRnVuY3Rpb258fChjdG9yLmRpc3BsYXlOYW1lfHxjdG9yLm5hbWUpPT09XCJHZW5lcmF0b3JGdW5jdGlvblwiOmZhbHNlfTtydW50aW1lLm1hcms9ZnVuY3Rpb24oZ2VuRnVuKXtnZW5GdW4uX19wcm90b19fPUdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO2dlbkZ1bi5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShHcCk7cmV0dXJuIGdlbkZ1bn07cnVudGltZS5hc3luYz1mdW5jdGlvbihpbm5lckZuLG91dGVyRm4sc2VsZix0cnlMb2NzTGlzdCl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXt2YXIgZ2VuZXJhdG9yPXdyYXAoaW5uZXJGbixvdXRlckZuLHNlbGYsdHJ5TG9jc0xpc3QpO3ZhciBjYWxsTmV4dD1zdGVwLmJpbmQoZ2VuZXJhdG9yLm5leHQpO3ZhciBjYWxsVGhyb3c9c3RlcC5iaW5kKGdlbmVyYXRvcltcInRocm93XCJdKTtmdW5jdGlvbiBzdGVwKGFyZyl7dmFyIHJlY29yZD10cnlDYXRjaCh0aGlzLG51bGwsYXJnKTtpZihyZWNvcmQudHlwZT09PVwidGhyb3dcIil7cmVqZWN0KHJlY29yZC5hcmcpO3JldHVybn12YXIgaW5mbz1yZWNvcmQuYXJnO2lmKGluZm8uZG9uZSl7cmVzb2x2ZShpbmZvLnZhbHVlKX1lbHNle1Byb21pc2UucmVzb2x2ZShpbmZvLnZhbHVlKS50aGVuKGNhbGxOZXh0LGNhbGxUaHJvdyl9fWNhbGxOZXh0KCl9KX07ZnVuY3Rpb24gR2VuZXJhdG9yKGlubmVyRm4sb3V0ZXJGbixzZWxmLHRyeUxvY3NMaXN0KXt2YXIgZ2VuZXJhdG9yPW91dGVyRm4/T2JqZWN0LmNyZWF0ZShvdXRlckZuLnByb3RvdHlwZSk6dGhpczt2YXIgY29udGV4dD1uZXcgQ29udGV4dCh0cnlMb2NzTGlzdCk7dmFyIHN0YXRlPUdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7ZnVuY3Rpb24gaW52b2tlKG1ldGhvZCxhcmcpe2lmKHN0YXRlPT09R2VuU3RhdGVFeGVjdXRpbmcpe3Rocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIil9aWYoc3RhdGU9PT1HZW5TdGF0ZUNvbXBsZXRlZCl7cmV0dXJuIGRvbmVSZXN1bHQoKX13aGlsZSh0cnVlKXt2YXIgZGVsZWdhdGU9Y29udGV4dC5kZWxlZ2F0ZTtpZihkZWxlZ2F0ZSl7dmFyIHJlY29yZD10cnlDYXRjaChkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdLGRlbGVnYXRlLml0ZXJhdG9yLGFyZyk7aWYocmVjb3JkLnR5cGU9PT1cInRocm93XCIpe2NvbnRleHQuZGVsZWdhdGU9bnVsbDttZXRob2Q9XCJ0aHJvd1wiO2FyZz1yZWNvcmQuYXJnO2NvbnRpbnVlfW1ldGhvZD1cIm5leHRcIjthcmc9dW5kZWZpbmVkO3ZhciBpbmZvPXJlY29yZC5hcmc7aWYoaW5mby5kb25lKXtjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdPWluZm8udmFsdWU7Y29udGV4dC5uZXh0PWRlbGVnYXRlLm5leHRMb2N9ZWxzZXtzdGF0ZT1HZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO3JldHVybiBpbmZvfWNvbnRleHQuZGVsZWdhdGU9bnVsbH1pZihtZXRob2Q9PT1cIm5leHRcIil7aWYoc3RhdGU9PT1HZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0JiZ0eXBlb2YgYXJnIT09XCJ1bmRlZmluZWRcIil7dGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHQgdG8gc2VuZCBcIitKU09OLnN0cmluZ2lmeShhcmcpK1wiIHRvIG5ld2Jvcm4gZ2VuZXJhdG9yXCIpfWlmKHN0YXRlPT09R2VuU3RhdGVTdXNwZW5kZWRZaWVsZCl7Y29udGV4dC5zZW50PWFyZ31lbHNle2RlbGV0ZSBjb250ZXh0LnNlbnR9fWVsc2UgaWYobWV0aG9kPT09XCJ0aHJvd1wiKXtpZihzdGF0ZT09PUdlblN0YXRlU3VzcGVuZGVkU3RhcnQpe3N0YXRlPUdlblN0YXRlQ29tcGxldGVkO3Rocm93IGFyZ31pZihjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpe21ldGhvZD1cIm5leHRcIjthcmc9dW5kZWZpbmVkfX1lbHNlIGlmKG1ldGhvZD09PVwicmV0dXJuXCIpe2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsYXJnKX1zdGF0ZT1HZW5TdGF0ZUV4ZWN1dGluZzt2YXIgcmVjb3JkPXRyeUNhdGNoKGlubmVyRm4sc2VsZixjb250ZXh0KTtpZihyZWNvcmQudHlwZT09PVwibm9ybWFsXCIpe3N0YXRlPWNvbnRleHQuZG9uZT9HZW5TdGF0ZUNvbXBsZXRlZDpHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO3ZhciBpbmZvPXt2YWx1ZTpyZWNvcmQuYXJnLGRvbmU6Y29udGV4dC5kb25lfTtpZihyZWNvcmQuYXJnPT09Q29udGludWVTZW50aW5lbCl7aWYoY29udGV4dC5kZWxlZ2F0ZSYmbWV0aG9kPT09XCJuZXh0XCIpe2FyZz11bmRlZmluZWR9fWVsc2V7cmV0dXJuIGluZm99fWVsc2UgaWYocmVjb3JkLnR5cGU9PT1cInRocm93XCIpe3N0YXRlPUdlblN0YXRlQ29tcGxldGVkO2lmKG1ldGhvZD09PVwibmV4dFwiKXtjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKHJlY29yZC5hcmcpfWVsc2V7YXJnPXJlY29yZC5hcmd9fX19Z2VuZXJhdG9yLm5leHQ9aW52b2tlLmJpbmQoZ2VuZXJhdG9yLFwibmV4dFwiKTtnZW5lcmF0b3JbXCJ0aHJvd1wiXT1pbnZva2UuYmluZChnZW5lcmF0b3IsXCJ0aHJvd1wiKTtnZW5lcmF0b3JbXCJyZXR1cm5cIl09aW52b2tlLmJpbmQoZ2VuZXJhdG9yLFwicmV0dXJuXCIpO3JldHVybiBnZW5lcmF0b3J9R3BbaXRlcmF0b3JTeW1ib2xdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O0dwLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IEdlbmVyYXRvcl1cIn07ZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3Mpe3ZhciBlbnRyeT17dHJ5TG9jOmxvY3NbMF19O2lmKDEgaW4gbG9jcyl7ZW50cnkuY2F0Y2hMb2M9bG9jc1sxXX1pZigyIGluIGxvY3Mpe2VudHJ5LmZpbmFsbHlMb2M9bG9jc1syXTtlbnRyeS5hZnRlckxvYz1sb2NzWzNdfXRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KX1mdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KXt2YXIgcmVjb3JkPWVudHJ5LmNvbXBsZXRpb258fHt9O3JlY29yZC50eXBlPVwibm9ybWFsXCI7ZGVsZXRlIHJlY29yZC5hcmc7ZW50cnkuY29tcGxldGlvbj1yZWNvcmR9ZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCl7dGhpcy50cnlFbnRyaWVzPVt7dHJ5TG9jOlwicm9vdFwifV07dHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksdGhpcyk7dGhpcy5yZXNldCgpfXJ1bnRpbWUua2V5cz1mdW5jdGlvbihvYmplY3Qpe3ZhciBrZXlzPVtdO2Zvcih2YXIga2V5IGluIG9iamVjdCl7a2V5cy5wdXNoKGtleSl9a2V5cy5yZXZlcnNlKCk7cmV0dXJuIGZ1bmN0aW9uIG5leHQoKXt3aGlsZShrZXlzLmxlbmd0aCl7dmFyIGtleT1rZXlzLnBvcCgpO2lmKGtleSBpbiBvYmplY3Qpe25leHQudmFsdWU9a2V5O25leHQuZG9uZT1mYWxzZTtyZXR1cm4gbmV4dH19bmV4dC5kb25lPXRydWU7cmV0dXJuIG5leHR9fTtmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpe2lmKGl0ZXJhYmxlKXt2YXIgaXRlcmF0b3JNZXRob2Q9aXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO2lmKGl0ZXJhdG9yTWV0aG9kKXtyZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSl9aWYodHlwZW9mIGl0ZXJhYmxlLm5leHQ9PT1cImZ1bmN0aW9uXCIpe3JldHVybiBpdGVyYWJsZX1pZighaXNOYU4oaXRlcmFibGUubGVuZ3RoKSl7dmFyIGk9LTEsbmV4dD1mdW5jdGlvbiBuZXh0KCl7d2hpbGUoKytpPGl0ZXJhYmxlLmxlbmd0aCl7aWYoaGFzT3duLmNhbGwoaXRlcmFibGUsaSkpe25leHQudmFsdWU9aXRlcmFibGVbaV07bmV4dC5kb25lPWZhbHNlO3JldHVybiBuZXh0fX1uZXh0LnZhbHVlPXVuZGVmaW5lZDtuZXh0LmRvbmU9dHJ1ZTtyZXR1cm4gbmV4dH07cmV0dXJuIG5leHQubmV4dD1uZXh0fX1yZXR1cm57bmV4dDpkb25lUmVzdWx0fX1ydW50aW1lLnZhbHVlcz12YWx1ZXM7ZnVuY3Rpb24gZG9uZVJlc3VsdCgpe3JldHVybnt2YWx1ZTp1bmRlZmluZWQsZG9uZTp0cnVlfX1Db250ZXh0LnByb3RvdHlwZT17Y29uc3RydWN0b3I6Q29udGV4dCxyZXNldDpmdW5jdGlvbigpe3RoaXMucHJldj0wO3RoaXMubmV4dD0wO3RoaXMuc2VudD11bmRlZmluZWQ7dGhpcy5kb25lPWZhbHNlO3RoaXMuZGVsZWdhdGU9bnVsbDt0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtmb3IodmFyIHRlbXBJbmRleD0wLHRlbXBOYW1lO2hhc093bi5jYWxsKHRoaXMsdGVtcE5hbWU9XCJ0XCIrdGVtcEluZGV4KXx8dGVtcEluZGV4PDIwOysrdGVtcEluZGV4KXt0aGlzW3RlbXBOYW1lXT1udWxsfX0sc3RvcDpmdW5jdGlvbigpe3RoaXMuZG9uZT10cnVlO3ZhciByb290RW50cnk9dGhpcy50cnlFbnRyaWVzWzBdO3ZhciByb290UmVjb3JkPXJvb3RFbnRyeS5jb21wbGV0aW9uO2lmKHJvb3RSZWNvcmQudHlwZT09PVwidGhyb3dcIil7dGhyb3cgcm9vdFJlY29yZC5hcmd9cmV0dXJuIHRoaXMucnZhbH0sZGlzcGF0Y2hFeGNlcHRpb246ZnVuY3Rpb24oZXhjZXB0aW9uKXtpZih0aGlzLmRvbmUpe3Rocm93IGV4Y2VwdGlvbn12YXIgY29udGV4dD10aGlzO2Z1bmN0aW9uIGhhbmRsZShsb2MsY2F1Z2h0KXtyZWNvcmQudHlwZT1cInRocm93XCI7cmVjb3JkLmFyZz1leGNlcHRpb247Y29udGV4dC5uZXh0PWxvYztyZXR1cm4hIWNhdWdodH1mb3IodmFyIGk9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xO2k+PTA7LS1pKXt2YXIgZW50cnk9dGhpcy50cnlFbnRyaWVzW2ldO3ZhciByZWNvcmQ9ZW50cnkuY29tcGxldGlvbjtpZihlbnRyeS50cnlMb2M9PT1cInJvb3RcIil7cmV0dXJuIGhhbmRsZShcImVuZFwiKX1pZihlbnRyeS50cnlMb2M8PXRoaXMucHJldil7dmFyIGhhc0NhdGNoPWhhc093bi5jYWxsKGVudHJ5LFwiY2F0Y2hMb2NcIik7dmFyIGhhc0ZpbmFsbHk9aGFzT3duLmNhbGwoZW50cnksXCJmaW5hbGx5TG9jXCIpO2lmKGhhc0NhdGNoJiZoYXNGaW5hbGx5KXtpZih0aGlzLnByZXY8ZW50cnkuY2F0Y2hMb2Mpe3JldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsdHJ1ZSl9ZWxzZSBpZih0aGlzLnByZXY8ZW50cnkuZmluYWxseUxvYyl7cmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKX19ZWxzZSBpZihoYXNDYXRjaCl7aWYodGhpcy5wcmV2PGVudHJ5LmNhdGNoTG9jKXtyZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLHRydWUpfX1lbHNlIGlmKGhhc0ZpbmFsbHkpe2lmKHRoaXMucHJldjxlbnRyeS5maW5hbGx5TG9jKXtyZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpfX1lbHNle3Rocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpfX19fSxhYnJ1cHQ6ZnVuY3Rpb24odHlwZSxhcmcpe2Zvcih2YXIgaT10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7aT49MDstLWkpe3ZhciBlbnRyeT10aGlzLnRyeUVudHJpZXNbaV07aWYoZW50cnkudHJ5TG9jPD10aGlzLnByZXYmJmhhc093bi5jYWxsKGVudHJ5LFwiZmluYWxseUxvY1wiKSYmdGhpcy5wcmV2PGVudHJ5LmZpbmFsbHlMb2Mpe3ZhciBmaW5hbGx5RW50cnk9ZW50cnk7YnJlYWt9fWlmKGZpbmFsbHlFbnRyeSYmKHR5cGU9PT1cImJyZWFrXCJ8fHR5cGU9PT1cImNvbnRpbnVlXCIpJiZmaW5hbGx5RW50cnkudHJ5TG9jPD1hcmcmJmFyZzxmaW5hbGx5RW50cnkuZmluYWxseUxvYyl7ZmluYWxseUVudHJ5PW51bGx9dmFyIHJlY29yZD1maW5hbGx5RW50cnk/ZmluYWxseUVudHJ5LmNvbXBsZXRpb246e307cmVjb3JkLnR5cGU9dHlwZTtyZWNvcmQuYXJnPWFyZztpZihmaW5hbGx5RW50cnkpe3RoaXMubmV4dD1maW5hbGx5RW50cnkuZmluYWxseUxvY31lbHNle3RoaXMuY29tcGxldGUocmVjb3JkKX1yZXR1cm4gQ29udGludWVTZW50aW5lbH0sY29tcGxldGU6ZnVuY3Rpb24ocmVjb3JkLGFmdGVyTG9jKXtpZihyZWNvcmQudHlwZT09PVwidGhyb3dcIil7dGhyb3cgcmVjb3JkLmFyZ31pZihyZWNvcmQudHlwZT09PVwiYnJlYWtcInx8cmVjb3JkLnR5cGU9PT1cImNvbnRpbnVlXCIpe3RoaXMubmV4dD1yZWNvcmQuYXJnfWVsc2UgaWYocmVjb3JkLnR5cGU9PT1cInJldHVyblwiKXt0aGlzLnJ2YWw9cmVjb3JkLmFyZzt0aGlzLm5leHQ9XCJlbmRcIn1lbHNlIGlmKHJlY29yZC50eXBlPT09XCJub3JtYWxcIiYmYWZ0ZXJMb2Mpe3RoaXMubmV4dD1hZnRlckxvY31yZXR1cm4gQ29udGludWVTZW50aW5lbH0sZmluaXNoOmZ1bmN0aW9uKGZpbmFsbHlMb2Mpe2Zvcih2YXIgaT10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7aT49MDstLWkpe3ZhciBlbnRyeT10aGlzLnRyeUVudHJpZXNbaV07aWYoZW50cnkuZmluYWxseUxvYz09PWZpbmFsbHlMb2Mpe3JldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sZW50cnkuYWZ0ZXJMb2MpfX19LFwiY2F0Y2hcIjpmdW5jdGlvbih0cnlMb2Mpe2Zvcih2YXIgaT10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7aT49MDstLWkpe3ZhciBlbnRyeT10aGlzLnRyeUVudHJpZXNbaV07aWYoZW50cnkudHJ5TG9jPT09dHJ5TG9jKXt2YXIgcmVjb3JkPWVudHJ5LmNvbXBsZXRpb247aWYocmVjb3JkLnR5cGU9PT1cInRocm93XCIpe3ZhciB0aHJvd249cmVjb3JkLmFyZztyZXNldFRyeUVudHJ5KGVudHJ5KX1yZXR1cm4gdGhyb3dufX10aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIil9LGRlbGVnYXRlWWllbGQ6ZnVuY3Rpb24oaXRlcmFibGUscmVzdWx0TmFtZSxuZXh0TG9jKXt0aGlzLmRlbGVnYXRlPXtpdGVyYXRvcjp2YWx1ZXMoaXRlcmFibGUpLHJlc3VsdE5hbWU6cmVzdWx0TmFtZSxuZXh0TG9jOm5leHRMb2N9O3JldHVybiBDb250aW51ZVNlbnRpbmVsfX19KHR5cGVvZiBnbG9iYWw9PT1cIm9iamVjdFwiP2dsb2JhbDp0eXBlb2Ygd2luZG93PT09XCJvYmplY3RcIj93aW5kb3c6dGhpcyl9KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCI/Z2xvYmFsOnR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIj9zZWxmOnR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiP3dpbmRvdzp7fSl9LHt9XX0se30sWzFdKTsiLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBCYWNvbiwgQnVmZmVyaW5nU291cmNlLCBCdXMsIENvbXBvc2l0ZVVuc3Vic2NyaWJlLCBDb25zdW1pbmdTb3VyY2UsIERlc2MsIERpc3BhdGNoZXIsIEVuZCwgRXJyb3IsIEV2ZW50LCBFdmVudFN0cmVhbSwgRXhjZXB0aW9uLCBJbml0aWFsLCBOZXh0LCBOb25lLCBPYnNlcnZhYmxlLCBQcm9wZXJ0eSwgUHJvcGVydHlEaXNwYXRjaGVyLCBTb21lLCBTb3VyY2UsIFVwZGF0ZUJhcnJpZXIsIF8sIGFkZFByb3BlcnR5SW5pdFZhbHVlVG9TdHJlYW0sIGFzc2VydCwgYXNzZXJ0QXJyYXksIGFzc2VydEV2ZW50U3RyZWFtLCBhc3NlcnRGdW5jdGlvbiwgYXNzZXJ0Tm9Bcmd1bWVudHMsIGFzc2VydE9ic2VydmFibGUsIGFzc2VydFN0cmluZywgY2xvbmVBcnJheSwgY29uc3RhbnRUb0Z1bmN0aW9uLCBjb250YWluc0R1cGxpY2F0ZURlcHMsIGNvbnZlcnRBcmdzVG9GdW5jdGlvbiwgZGVzY3JpYmUsIGVuZEV2ZW50LCBldmVudElkQ291bnRlciwgZXZlbnRNZXRob2RzLCBmaW5kRGVwcywgZmluZEhhbmRsZXJNZXRob2RzLCBmbGF0TWFwXywgZm9ybWVyLCBpZENvdW50ZXIsIGluaXRpYWxFdmVudCwgaXNBcnJheSwgaXNGaWVsZEtleSwgaXNPYnNlcnZhYmxlLCBsYXR0ZXIsIGxpZnRDYWxsYmFjaywgbWFrZUZ1bmN0aW9uLCBtYWtlRnVuY3Rpb25BcmdzLCBtYWtlRnVuY3Rpb25fLCBtYWtlT2JzZXJ2YWJsZSwgbWFrZVNwYXduZXIsIG5leHRFdmVudCwgbm9wLCBwYXJ0aWFsbHlBcHBsaWVkLCByZWN1cnNpb25EZXB0aCwgcmVmLCByZWdpc3Rlck9icywgc3B5cywgdG9Db21iaW5hdG9yLCB0b0V2ZW50LCB0b0ZpZWxkRXh0cmFjdG9yLCB0b0ZpZWxkS2V5LCB0b09wdGlvbiwgdG9TaW1wbGVFeHRyYWN0b3IsIHZhbHVlQW5kRW5kLCB3aXRoRGVzY3JpcHRpb24sIHdpdGhNZXRob2RDYWxsU3VwcG9ydCxcbiAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICAgIHNsaWNlID0gW10uc2xpY2UsXG4gICAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbiAgQmFjb24gPSB7XG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFwiQmFjb25cIjtcbiAgICB9XG4gIH07XG5cbiAgQmFjb24udmVyc2lvbiA9ICcwLjcuNTMnO1xuXG4gIEV4Y2VwdGlvbiA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCAhPT0gbnVsbCA/IGdsb2JhbCA6IHRoaXMpLkVycm9yO1xuXG4gIG5vcCA9IGZ1bmN0aW9uKCkge307XG5cbiAgbGF0dGVyID0gZnVuY3Rpb24oXywgeCkge1xuICAgIHJldHVybiB4O1xuICB9O1xuXG4gIGZvcm1lciA9IGZ1bmN0aW9uKHgsIF8pIHtcbiAgICByZXR1cm4geDtcbiAgfTtcblxuICBjbG9uZUFycmF5ID0gZnVuY3Rpb24oeHMpIHtcbiAgICByZXR1cm4geHMuc2xpY2UoMCk7XG4gIH07XG5cbiAgYXNzZXJ0ID0gZnVuY3Rpb24obWVzc2FnZSwgY29uZGl0aW9uKSB7XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24obWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIGFzc2VydEV2ZW50U3RyZWFtID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIEV2ZW50U3RyZWFtKSkge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcIm5vdCBhbiBFdmVudFN0cmVhbSA6IFwiICsgZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBhc3NlcnRPYnNlcnZhYmxlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFwibm90IGFuIE9ic2VydmFibGUgOiBcIiArIGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgYXNzZXJ0RnVuY3Rpb24gPSBmdW5jdGlvbihmKSB7XG4gICAgcmV0dXJuIGFzc2VydChcIm5vdCBhIGZ1bmN0aW9uIDogXCIgKyBmLCBfLmlzRnVuY3Rpb24oZikpO1xuICB9O1xuXG4gIGlzQXJyYXkgPSBmdW5jdGlvbih4cykge1xuICAgIHJldHVybiB4cyBpbnN0YW5jZW9mIEFycmF5O1xuICB9O1xuXG4gIGlzT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geCBpbnN0YW5jZW9mIE9ic2VydmFibGU7XG4gIH07XG5cbiAgYXNzZXJ0QXJyYXkgPSBmdW5jdGlvbih4cykge1xuICAgIGlmICghaXNBcnJheSh4cykpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJub3QgYW4gYXJyYXkgOiBcIiArIHhzKTtcbiAgICB9XG4gIH07XG5cbiAgYXNzZXJ0Tm9Bcmd1bWVudHMgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgcmV0dXJuIGFzc2VydChcIm5vIGFyZ3VtZW50cyBzdXBwb3J0ZWRcIiwgYXJncy5sZW5ndGggPT09IDApO1xuICB9O1xuXG4gIGFzc2VydFN0cmluZyA9IGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAodHlwZW9mIHggIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJub3QgYSBzdHJpbmcgOiBcIiArIHgpO1xuICAgIH1cbiAgfTtcblxuICBfID0ge1xuICAgIGluZGV4T2Y6IEFycmF5LnByb3RvdHlwZS5pbmRleE9mID8gZnVuY3Rpb24oeHMsIHgpIHtcbiAgICAgIHJldHVybiB4cy5pbmRleE9mKHgpO1xuICAgIH0gOiBmdW5jdGlvbih4cywgeCkge1xuICAgICAgdmFyIGksIGosIGxlbjEsIHk7XG4gICAgICBmb3IgKGkgPSBqID0gMCwgbGVuMSA9IHhzLmxlbmd0aDsgaiA8IGxlbjE7IGkgPSArK2opIHtcbiAgICAgICAgeSA9IHhzW2ldO1xuICAgICAgICBpZiAoeCA9PT0geSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSxcbiAgICBpbmRleFdoZXJlOiBmdW5jdGlvbih4cywgZikge1xuICAgICAgdmFyIGksIGosIGxlbjEsIHk7XG4gICAgICBmb3IgKGkgPSBqID0gMCwgbGVuMSA9IHhzLmxlbmd0aDsgaiA8IGxlbjE7IGkgPSArK2opIHtcbiAgICAgICAgeSA9IHhzW2ldO1xuICAgICAgICBpZiAoZih5KSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSxcbiAgICBoZWFkOiBmdW5jdGlvbih4cykge1xuICAgICAgcmV0dXJuIHhzWzBdO1xuICAgIH0sXG4gICAgYWx3YXlzOiBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgICAgfTtcbiAgICB9LFxuICAgIG5lZ2F0ZTogZnVuY3Rpb24oZikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgcmV0dXJuICFmKHgpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGVtcHR5OiBmdW5jdGlvbih4cykge1xuICAgICAgcmV0dXJuIHhzLmxlbmd0aCA9PT0gMDtcbiAgICB9LFxuICAgIHRhaWw6IGZ1bmN0aW9uKHhzKSB7XG4gICAgICByZXR1cm4geHMuc2xpY2UoMSwgeHMubGVuZ3RoKTtcbiAgICB9LFxuICAgIGZpbHRlcjogZnVuY3Rpb24oZiwgeHMpIHtcbiAgICAgIHZhciBmaWx0ZXJlZCwgaiwgbGVuMSwgeDtcbiAgICAgIGZpbHRlcmVkID0gW107XG4gICAgICBmb3IgKGogPSAwLCBsZW4xID0geHMubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgIHggPSB4c1tqXTtcbiAgICAgICAgaWYgKGYoeCkpIHtcbiAgICAgICAgICBmaWx0ZXJlZC5wdXNoKHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsdGVyZWQ7XG4gICAgfSxcbiAgICBtYXA6IGZ1bmN0aW9uKGYsIHhzKSB7XG4gICAgICB2YXIgaiwgbGVuMSwgcmVzdWx0cywgeDtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSB4cy5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgeCA9IHhzW2pdO1xuICAgICAgICByZXN1bHRzLnB1c2goZih4KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9LFxuICAgIGVhY2g6IGZ1bmN0aW9uKHhzLCBmKSB7XG4gICAgICB2YXIga2V5LCB2YWx1ZTtcbiAgICAgIGZvciAoa2V5IGluIHhzKSB7XG4gICAgICAgIHZhbHVlID0geHNba2V5XTtcbiAgICAgICAgZihrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfSxcbiAgICB0b0FycmF5OiBmdW5jdGlvbih4cykge1xuICAgICAgaWYgKGlzQXJyYXkoeHMpKSB7XG4gICAgICAgIHJldHVybiB4cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbeHNdO1xuICAgICAgfVxuICAgIH0sXG4gICAgY29udGFpbnM6IGZ1bmN0aW9uKHhzLCB4KSB7XG4gICAgICByZXR1cm4gXy5pbmRleE9mKHhzLCB4KSAhPT0gLTE7XG4gICAgfSxcbiAgICBpZDogZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfSxcbiAgICBsYXN0OiBmdW5jdGlvbih4cykge1xuICAgICAgcmV0dXJuIHhzW3hzLmxlbmd0aCAtIDFdO1xuICAgIH0sXG4gICAgYWxsOiBmdW5jdGlvbih4cywgZikge1xuICAgICAgdmFyIGosIGxlbjEsIHg7XG4gICAgICBpZiAoZiA9PSBudWxsKSB7XG4gICAgICAgIGYgPSBfLmlkO1xuICAgICAgfVxuICAgICAgZm9yIChqID0gMCwgbGVuMSA9IHhzLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xuICAgICAgICB4ID0geHNbal07XG4gICAgICAgIGlmICghZih4KSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBhbnk6IGZ1bmN0aW9uKHhzLCBmKSB7XG4gICAgICB2YXIgaiwgbGVuMSwgeDtcbiAgICAgIGlmIChmID09IG51bGwpIHtcbiAgICAgICAgZiA9IF8uaWQ7XG4gICAgICB9XG4gICAgICBmb3IgKGogPSAwLCBsZW4xID0geHMubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgIHggPSB4c1tqXTtcbiAgICAgICAgaWYgKGYoeCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgd2l0aG91dDogZnVuY3Rpb24oeCwgeHMpIHtcbiAgICAgIHJldHVybiBfLmZpbHRlcigoZnVuY3Rpb24oeSkge1xuICAgICAgICByZXR1cm4geSAhPT0geDtcbiAgICAgIH0pLCB4cyk7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uKHgsIHhzKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGkgPSBfLmluZGV4T2YoeHMsIHgpO1xuICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICByZXR1cm4geHMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZm9sZDogZnVuY3Rpb24oeHMsIHNlZWQsIGYpIHtcbiAgICAgIHZhciBqLCBsZW4xLCB4O1xuICAgICAgZm9yIChqID0gMCwgbGVuMSA9IHhzLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xuICAgICAgICB4ID0geHNbal07XG4gICAgICAgIHNlZWQgPSBmKHNlZWQsIHgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlZWQ7XG4gICAgfSxcbiAgICBmbGF0TWFwOiBmdW5jdGlvbihmLCB4cykge1xuICAgICAgcmV0dXJuIF8uZm9sZCh4cywgW10sIChmdW5jdGlvbih5cywgeCkge1xuICAgICAgICByZXR1cm4geXMuY29uY2F0KGYoeCkpO1xuICAgICAgfSkpO1xuICAgIH0sXG4gICAgY2FjaGVkOiBmdW5jdGlvbihmKSB7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB2YWx1ZSA9IE5vbmU7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gTm9uZSkge1xuICAgICAgICAgIHZhbHVlID0gZigpO1xuICAgICAgICAgIGYgPSB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGlzRnVuY3Rpb246IGZ1bmN0aW9uKGYpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZiA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgdmFyIGV4LCBpbnRlcm5hbHMsIGtleSwgdmFsdWU7XG4gICAgICB0cnkge1xuICAgICAgICByZWN1cnNpb25EZXB0aCsrO1xuICAgICAgICBpZiAob2JqID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gXCJ1bmRlZmluZWRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChfLmlzRnVuY3Rpb24ob2JqKSkge1xuICAgICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgaWYgKHJlY3Vyc2lvbkRlcHRoID4gNSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiWy4uXVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gXCJbXCIgKyBfLm1hcChfLnRvU3RyaW5nLCBvYmopLnRvU3RyaW5nKCkgKyBcIl1cIjtcbiAgICAgICAgfSBlbHNlIGlmICgoKG9iaiAhPSBudWxsID8gb2JqLnRvU3RyaW5nIDogdm9pZCAwKSAhPSBudWxsKSAmJiBvYmoudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHtcbiAgICAgICAgICByZXR1cm4gb2JqLnRvU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlmIChyZWN1cnNpb25EZXB0aCA+IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBcInsuLn1cIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW50ZXJuYWxzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdHM7XG4gICAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwob2JqLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgdmFsdWUgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIGV4ID0gX2Vycm9yO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKF8udG9TdHJpbmcoa2V5KSArIFwiOlwiICsgXy50b1N0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgICByZXR1cm4gXCJ7XCIgKyBpbnRlcm5hbHMgKyBcIn1cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICByZWN1cnNpb25EZXB0aC0tO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZWN1cnNpb25EZXB0aCA9IDA7XG5cbiAgQmFjb24uXyA9IF87XG5cbiAgVXBkYXRlQmFycmllciA9IEJhY29uLlVwZGF0ZUJhcnJpZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFmdGVyVHJhbnNhY3Rpb24sIGFmdGVycywgYWZ0ZXJzSW5kZXgsIGN1cnJlbnRFdmVudElkLCBmbHVzaCwgZmx1c2hEZXBzT2YsIGZsdXNoV2FpdGVycywgaGFzV2FpdGVycywgaW5UcmFuc2FjdGlvbiwgcm9vdEV2ZW50LCB3YWl0ZXJPYnMsIHdhaXRlcnMsIHdoZW5Eb25lV2l0aCwgd3JhcHBlZFN1YnNjcmliZTtcbiAgICByb290RXZlbnQgPSB2b2lkIDA7XG4gICAgd2FpdGVyT2JzID0gW107XG4gICAgd2FpdGVycyA9IHt9O1xuICAgIGFmdGVycyA9IFtdO1xuICAgIGFmdGVyc0luZGV4ID0gMDtcbiAgICBhZnRlclRyYW5zYWN0aW9uID0gZnVuY3Rpb24oZikge1xuICAgICAgaWYgKHJvb3RFdmVudCkge1xuICAgICAgICByZXR1cm4gYWZ0ZXJzLnB1c2goZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZigpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hlbkRvbmVXaXRoID0gZnVuY3Rpb24ob2JzLCBmKSB7XG4gICAgICB2YXIgb2JzV2FpdGVycztcbiAgICAgIGlmIChyb290RXZlbnQpIHtcbiAgICAgICAgb2JzV2FpdGVycyA9IHdhaXRlcnNbb2JzLmlkXTtcbiAgICAgICAgaWYgKG9ic1dhaXRlcnMgPT0gbnVsbCkge1xuICAgICAgICAgIG9ic1dhaXRlcnMgPSB3YWl0ZXJzW29icy5pZF0gPSBbZl07XG4gICAgICAgICAgcmV0dXJuIHdhaXRlck9icy5wdXNoKG9icyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9ic1dhaXRlcnMucHVzaChmKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGYoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZsdXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICB3aGlsZSAod2FpdGVyT2JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZmx1c2hXYWl0ZXJzKDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9O1xuICAgIGZsdXNoV2FpdGVycyA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICB2YXIgZiwgaiwgbGVuMSwgb2JzLCBvYnNJZCwgb2JzV2FpdGVycztcbiAgICAgIG9icyA9IHdhaXRlck9ic1tpbmRleF07XG4gICAgICBvYnNJZCA9IG9icy5pZDtcbiAgICAgIG9ic1dhaXRlcnMgPSB3YWl0ZXJzW29ic0lkXTtcbiAgICAgIHdhaXRlck9icy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgZGVsZXRlIHdhaXRlcnNbb2JzSWRdO1xuICAgICAgZmx1c2hEZXBzT2Yob2JzKTtcbiAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSBvYnNXYWl0ZXJzLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xuICAgICAgICBmID0gb2JzV2FpdGVyc1tqXTtcbiAgICAgICAgZigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9O1xuICAgIGZsdXNoRGVwc09mID0gZnVuY3Rpb24ob2JzKSB7XG4gICAgICB2YXIgZGVwLCBkZXBzLCBpbmRleCwgaiwgbGVuMTtcbiAgICAgIGRlcHMgPSBvYnMuaW50ZXJuYWxEZXBzKCk7XG4gICAgICBmb3IgKGogPSAwLCBsZW4xID0gZGVwcy5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgZGVwID0gZGVwc1tqXTtcbiAgICAgICAgZmx1c2hEZXBzT2YoZGVwKTtcbiAgICAgICAgaWYgKHdhaXRlcnNbZGVwLmlkXSkge1xuICAgICAgICAgIGluZGV4ID0gXy5pbmRleE9mKHdhaXRlck9icywgZGVwKTtcbiAgICAgICAgICBmbHVzaFdhaXRlcnMoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH07XG4gICAgaW5UcmFuc2FjdGlvbiA9IGZ1bmN0aW9uKGV2ZW50LCBjb250ZXh0LCBmLCBhcmdzKSB7XG4gICAgICB2YXIgYWZ0ZXIsIHJlc3VsdDtcbiAgICAgIGlmIChyb290RXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGYuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290RXZlbnQgPSBldmVudDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQgPSBmLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgcm9vdEV2ZW50ID0gdm9pZCAwO1xuICAgICAgICAgIHdoaWxlIChhZnRlcnNJbmRleCA8IGFmdGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFmdGVyID0gYWZ0ZXJzW2FmdGVyc0luZGV4XTtcbiAgICAgICAgICAgIGFmdGVyc0luZGV4Kys7XG4gICAgICAgICAgICBhZnRlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhZnRlcnNJbmRleCA9IDA7XG4gICAgICAgICAgYWZ0ZXJzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9O1xuICAgIGN1cnJlbnRFdmVudElkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocm9vdEV2ZW50KSB7XG4gICAgICAgIHJldHVybiByb290RXZlbnQuaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgfVxuICAgIH07XG4gICAgd3JhcHBlZFN1YnNjcmliZSA9IGZ1bmN0aW9uKG9icywgc2luaykge1xuICAgICAgdmFyIGRvVW5zdWIsIHNob3VsZFVuc3ViLCB1bnN1YiwgdW5zdWJkO1xuICAgICAgdW5zdWJkID0gZmFsc2U7XG4gICAgICBzaG91bGRVbnN1YiA9IGZhbHNlO1xuICAgICAgZG9VbnN1YiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gc2hvdWxkVW5zdWIgPSB0cnVlO1xuICAgICAgfTtcbiAgICAgIHVuc3ViID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHVuc3ViZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBkb1Vuc3ViKCk7XG4gICAgICB9O1xuICAgICAgZG9VbnN1YiA9IG9icy5kaXNwYXRjaGVyLnN1YnNjcmliZShmdW5jdGlvbihldmVudCkge1xuICAgICAgICByZXR1cm4gYWZ0ZXJUcmFuc2FjdGlvbihmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgcmVwbHk7XG4gICAgICAgICAgaWYgKCF1bnN1YmQpIHtcbiAgICAgICAgICAgIHJlcGx5ID0gc2luayhldmVudCk7XG4gICAgICAgICAgICBpZiAocmVwbHkgPT09IEJhY29uLm5vTW9yZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdW5zdWIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBpZiAoc2hvdWxkVW5zdWIpIHtcbiAgICAgICAgZG9VbnN1YigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuc3ViO1xuICAgIH07XG4gICAgaGFzV2FpdGVycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHdhaXRlck9icy5sZW5ndGggPiAwO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIHdoZW5Eb25lV2l0aDogd2hlbkRvbmVXaXRoLFxuICAgICAgaGFzV2FpdGVyczogaGFzV2FpdGVycyxcbiAgICAgIGluVHJhbnNhY3Rpb246IGluVHJhbnNhY3Rpb24sXG4gICAgICBjdXJyZW50RXZlbnRJZDogY3VycmVudEV2ZW50SWQsXG4gICAgICB3cmFwcGVkU3Vic2NyaWJlOiB3cmFwcGVkU3Vic2NyaWJlLFxuICAgICAgYWZ0ZXJUcmFuc2FjdGlvbjogYWZ0ZXJUcmFuc2FjdGlvblxuICAgIH07XG4gIH0pKCk7XG5cbiAgU291cmNlID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFNvdXJjZShvYnMxLCBzeW5jLCBsYXp5MSkge1xuICAgICAgdGhpcy5vYnMgPSBvYnMxO1xuICAgICAgdGhpcy5zeW5jID0gc3luYztcbiAgICAgIHRoaXMubGF6eSA9IGxhenkxICE9IG51bGwgPyBsYXp5MSA6IGZhbHNlO1xuICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIH1cblxuICAgIFNvdXJjZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24oc2luaykge1xuICAgICAgcmV0dXJuIHRoaXMub2JzLmRpc3BhdGNoZXIuc3Vic2NyaWJlKHNpbmspO1xuICAgIH07XG5cbiAgICBTb3VyY2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5vYnMudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgU291cmNlLnByb3RvdHlwZS5tYXJrRW5kZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgU291cmNlLnByb3RvdHlwZS5jb25zdW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5sYXp5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IF8uYWx3YXlzKHRoaXMucXVldWVbMF0pXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWV1ZVswXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgU291cmNlLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHRoaXMucXVldWUgPSBbeF07XG4gICAgfTtcblxuICAgIFNvdXJjZS5wcm90b3R5cGUubWF5SGF2ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIFNvdXJjZS5wcm90b3R5cGUuaGFzQXRMZWFzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucXVldWUubGVuZ3RoO1xuICAgIH07XG5cbiAgICBTb3VyY2UucHJvdG90eXBlLmZsYXR0ZW4gPSB0cnVlO1xuXG4gICAgcmV0dXJuIFNvdXJjZTtcblxuICB9KSgpO1xuXG4gIENvbnN1bWluZ1NvdXJjZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKENvbnN1bWluZ1NvdXJjZSwgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBDb25zdW1pbmdTb3VyY2UoKSB7XG4gICAgICByZXR1cm4gQ29uc3VtaW5nU291cmNlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIENvbnN1bWluZ1NvdXJjZS5wcm90b3R5cGUuY29uc3VtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucXVldWUuc2hpZnQoKTtcbiAgICB9O1xuXG4gICAgQ29uc3VtaW5nU291cmNlLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHRoaXMucXVldWUucHVzaCh4KTtcbiAgICB9O1xuXG4gICAgQ29uc3VtaW5nU291cmNlLnByb3RvdHlwZS5tYXlIYXZlID0gZnVuY3Rpb24oYykge1xuICAgICAgcmV0dXJuICF0aGlzLmVuZGVkIHx8IHRoaXMucXVldWUubGVuZ3RoID49IGM7XG4gICAgfTtcblxuICAgIENvbnN1bWluZ1NvdXJjZS5wcm90b3R5cGUuaGFzQXRMZWFzdCA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgIHJldHVybiB0aGlzLnF1ZXVlLmxlbmd0aCA+PSBjO1xuICAgIH07XG5cbiAgICBDb25zdW1pbmdTb3VyY2UucHJvdG90eXBlLmZsYXR0ZW4gPSBmYWxzZTtcblxuICAgIHJldHVybiBDb25zdW1pbmdTb3VyY2U7XG5cbiAgfSkoU291cmNlKTtcblxuICBCdWZmZXJpbmdTb3VyY2UgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChCdWZmZXJpbmdTb3VyY2UsIHN1cGVyQ2xhc3MpO1xuXG4gICAgZnVuY3Rpb24gQnVmZmVyaW5nU291cmNlKG9icykge1xuICAgICAgQnVmZmVyaW5nU291cmNlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG9icywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgQnVmZmVyaW5nU291cmNlLnByb3RvdHlwZS5jb25zdW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmFsdWVzO1xuICAgICAgdmFsdWVzID0gdGhpcy5xdWV1ZTtcbiAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBCdWZmZXJpbmdTb3VyY2UucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdGhpcy5xdWV1ZS5wdXNoKHgudmFsdWUoKSk7XG4gICAgfTtcblxuICAgIEJ1ZmZlcmluZ1NvdXJjZS5wcm90b3R5cGUuaGFzQXRMZWFzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIHJldHVybiBCdWZmZXJpbmdTb3VyY2U7XG5cbiAgfSkoU291cmNlKTtcblxuICBTb3VyY2UuaXNUcmlnZ2VyID0gZnVuY3Rpb24ocykge1xuICAgIGlmIChzIGluc3RhbmNlb2YgU291cmNlKSB7XG4gICAgICByZXR1cm4gcy5zeW5jO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcyBpbnN0YW5jZW9mIEV2ZW50U3RyZWFtO1xuICAgIH1cbiAgfTtcblxuICBTb3VyY2UuZnJvbU9ic2VydmFibGUgPSBmdW5jdGlvbihzKSB7XG4gICAgaWYgKHMgaW5zdGFuY2VvZiBTb3VyY2UpIHtcbiAgICAgIHJldHVybiBzO1xuICAgIH0gZWxzZSBpZiAocyBpbnN0YW5jZW9mIFByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gbmV3IFNvdXJjZShzLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgQ29uc3VtaW5nU291cmNlKHMsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBEZXNjID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIERlc2MoY29udGV4dDEsIG1ldGhvZDEsIGFyZ3MxKSB7XG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0MTtcbiAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kMTtcbiAgICAgIHRoaXMuYXJncyA9IGFyZ3MxO1xuICAgICAgdGhpcy5jYWNoZWQgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgRGVzYy5wcm90b3R5cGUuZGVwcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkIHx8ICh0aGlzLmNhY2hlZCA9IGZpbmREZXBzKFt0aGlzLmNvbnRleHRdLmNvbmNhdCh0aGlzLmFyZ3MpKSk7XG4gICAgfTtcblxuICAgIERlc2MucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24ob2JzKSB7XG4gICAgICBvYnMuZGVzYyA9IHRoaXM7XG4gICAgICByZXR1cm4gb2JzO1xuICAgIH07XG5cbiAgICBEZXNjLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF8udG9TdHJpbmcodGhpcy5jb250ZXh0KSArIFwiLlwiICsgXy50b1N0cmluZyh0aGlzLm1ldGhvZCkgKyBcIihcIiArIF8ubWFwKF8udG9TdHJpbmcsIHRoaXMuYXJncykgKyBcIilcIjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERlc2M7XG5cbiAgfSkoKTtcblxuICBkZXNjcmliZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzLCBjb250ZXh0LCBtZXRob2Q7XG4gICAgY29udGV4dCA9IGFyZ3VtZW50c1swXSwgbWV0aG9kID0gYXJndW1lbnRzWzFdLCBhcmdzID0gMyA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogW107XG4gICAgaWYgKChjb250ZXh0IHx8IG1ldGhvZCkgaW5zdGFuY2VvZiBEZXNjKSB7XG4gICAgICByZXR1cm4gY29udGV4dCB8fCBtZXRob2Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGVzYyhjb250ZXh0LCBtZXRob2QsIGFyZ3MpO1xuICAgIH1cbiAgfTtcblxuICB3aXRoRGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGVzYywgaiwgb2JzO1xuICAgIGRlc2MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCwgaiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxKSA6IChqID0gMCwgW10pLCBvYnMgPSBhcmd1bWVudHNbaisrXTtcbiAgICByZXR1cm4gZGVzY3JpYmUuYXBwbHkobnVsbCwgZGVzYykuYXBwbHkob2JzKTtcbiAgfTtcblxuICBmaW5kRGVwcyA9IGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgcmV0dXJuIF8uZmxhdE1hcChmaW5kRGVwcywgeCk7XG4gICAgfSBlbHNlIGlmIChpc09ic2VydmFibGUoeCkpIHtcbiAgICAgIHJldHVybiBbeF07XG4gICAgfSBlbHNlIGlmICh4IGluc3RhbmNlb2YgU291cmNlKSB7XG4gICAgICByZXR1cm4gW3gub2JzXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfTtcblxuICB3aXRoTWV0aG9kQ2FsbFN1cHBvcnQgPSBmdW5jdGlvbih3cmFwcGVkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MsIGNvbnRleHQsIGYsIG1ldGhvZE5hbWU7XG4gICAgICBmID0gYXJndW1lbnRzWzBdLCBhcmdzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgICBpZiAodHlwZW9mIGYgPT09IFwib2JqZWN0XCIgJiYgYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY29udGV4dCA9IGY7XG4gICAgICAgIG1ldGhvZE5hbWUgPSBhcmdzWzBdO1xuICAgICAgICBmID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHRbbWV0aG9kTmFtZV0uYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgYXJncyA9IGFyZ3Muc2xpY2UoMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gd3JhcHBlZC5hcHBseShudWxsLCBbZl0uY29uY2F0KHNsaWNlLmNhbGwoYXJncykpKTtcbiAgICB9O1xuICB9O1xuXG4gIG1ha2VGdW5jdGlvbkFyZ3MgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpO1xuICAgIHJldHVybiBtYWtlRnVuY3Rpb25fLmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9O1xuXG4gIHBhcnRpYWxseUFwcGxpZWQgPSBmdW5jdGlvbihmLCBhcHBsaWVkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3M7XG4gICAgICBhcmdzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gICAgICByZXR1cm4gZi5hcHBseShudWxsLCBhcHBsaWVkLmNvbmNhdChhcmdzKSk7XG4gICAgfTtcbiAgfTtcblxuICB0b1NpbXBsZUV4dHJhY3RvciA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdmFyIGZpZWxkVmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZFZhbHVlID0gdmFsdWVba2V5XTtcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGZpZWxkVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGRWYWx1ZS5hcHBseSh2YWx1ZSwgYXJncyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICB9O1xuXG4gIHRvRmllbGRFeHRyYWN0b3IgPSBmdW5jdGlvbihmLCBhcmdzKSB7XG4gICAgdmFyIHBhcnRGdW5jcywgcGFydHM7XG4gICAgcGFydHMgPSBmLnNsaWNlKDEpLnNwbGl0KFwiLlwiKTtcbiAgICBwYXJ0RnVuY3MgPSBfLm1hcCh0b1NpbXBsZUV4dHJhY3RvcihhcmdzKSwgcGFydHMpO1xuICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGosIGxlbjE7XG4gICAgICBmb3IgKGogPSAwLCBsZW4xID0gcGFydEZ1bmNzLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xuICAgICAgICBmID0gcGFydEZ1bmNzW2pdO1xuICAgICAgICB2YWx1ZSA9IGYodmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gIH07XG5cbiAgaXNGaWVsZEtleSA9IGZ1bmN0aW9uKGYpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBmID09PSBcInN0cmluZ1wiKSAmJiBmLmxlbmd0aCA+IDEgJiYgZi5jaGFyQXQoMCkgPT09IFwiLlwiO1xuICB9O1xuXG4gIG1ha2VGdW5jdGlvbl8gPSB3aXRoTWV0aG9kQ2FsbFN1cHBvcnQoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MsIGY7XG4gICAgZiA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgIGlmIChfLmlzRnVuY3Rpb24oZikpIHtcbiAgICAgIGlmIChhcmdzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gcGFydGlhbGx5QXBwbGllZChmLCBhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNGaWVsZEtleShmKSkge1xuICAgICAgcmV0dXJuIHRvRmllbGRFeHRyYWN0b3IoZiwgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfLmFsd2F5cyhmKTtcbiAgICB9XG4gIH0pO1xuXG4gIG1ha2VGdW5jdGlvbiA9IGZ1bmN0aW9uKGYsIGFyZ3MpIHtcbiAgICByZXR1cm4gbWFrZUZ1bmN0aW9uXy5hcHBseShudWxsLCBbZl0uY29uY2F0KHNsaWNlLmNhbGwoYXJncykpKTtcbiAgfTtcblxuICBjb252ZXJ0QXJnc1RvRnVuY3Rpb24gPSBmdW5jdGlvbihvYnMsIGYsIGFyZ3MsIG1ldGhvZCkge1xuICAgIHZhciBzYW1wbGVkO1xuICAgIGlmIChmIGluc3RhbmNlb2YgUHJvcGVydHkpIHtcbiAgICAgIHNhbXBsZWQgPSBmLnNhbXBsZWRCeShvYnMsIGZ1bmN0aW9uKHAsIHMpIHtcbiAgICAgICAgcmV0dXJuIFtwLCBzXTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1ldGhvZC5jYWxsKHNhbXBsZWQsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICB2YXIgcCwgcztcbiAgICAgICAgcCA9IGFyZ1swXSwgcyA9IGFyZ1sxXTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICB9KS5tYXAoZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHZhciBwLCBzO1xuICAgICAgICBwID0gYXJnWzBdLCBzID0gYXJnWzFdO1xuICAgICAgICByZXR1cm4gcztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmID0gbWFrZUZ1bmN0aW9uKGYsIGFyZ3MpO1xuICAgICAgcmV0dXJuIG1ldGhvZC5jYWxsKG9icywgZik7XG4gICAgfVxuICB9O1xuXG4gIHRvQ29tYmluYXRvciA9IGZ1bmN0aW9uKGYpIHtcbiAgICB2YXIga2V5O1xuICAgIGlmIChfLmlzRnVuY3Rpb24oZikpIHtcbiAgICAgIHJldHVybiBmO1xuICAgIH0gZWxzZSBpZiAoaXNGaWVsZEtleShmKSkge1xuICAgICAga2V5ID0gdG9GaWVsZEtleShmKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICAgICAgICByZXR1cm4gbGVmdFtrZXldKHJpZ2h0KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJub3QgYSBmdW5jdGlvbiBvciBhIGZpZWxkIGtleTogXCIgKyBmKTtcbiAgICB9XG4gIH07XG5cbiAgdG9GaWVsZEtleSA9IGZ1bmN0aW9uKGYpIHtcbiAgICByZXR1cm4gZi5zbGljZSgxKTtcbiAgfTtcblxuICBTb21lID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFNvbWUodmFsdWUxKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWUxO1xuICAgIH1cblxuICAgIFNvbWUucHJvdG90eXBlLmdldE9yRWxzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfTtcblxuICAgIFNvbWUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfTtcblxuICAgIFNvbWUucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKGYpIHtcbiAgICAgIGlmIChmKHRoaXMudmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBuZXcgU29tZSh0aGlzLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBOb25lO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBTb21lLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbihmKSB7XG4gICAgICByZXR1cm4gbmV3IFNvbWUoZih0aGlzLnZhbHVlKSk7XG4gICAgfTtcblxuICAgIFNvbWUucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihmKSB7XG4gICAgICByZXR1cm4gZih0aGlzLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgU29tZS5wcm90b3R5cGUuaXNEZWZpbmVkID0gdHJ1ZTtcblxuICAgIFNvbWUucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBbdGhpcy52YWx1ZV07XG4gICAgfTtcblxuICAgIFNvbWUucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBcIlNvbWUoXCIgKyB0aGlzLnZhbHVlICsgXCIpXCI7XG4gICAgfTtcblxuICAgIFNvbWUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnNwZWN0KCk7XG4gICAgfTtcblxuICAgIHJldHVybiBTb21lO1xuXG4gIH0pKCk7XG5cbiAgTm9uZSA9IHtcbiAgICBnZXRPckVsc2U6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBmaWx0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE5vbmU7XG4gICAgfSxcbiAgICBtYXA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE5vbmU7XG4gICAgfSxcbiAgICBmb3JFYWNoOiBmdW5jdGlvbigpIHt9LFxuICAgIGlzRGVmaW5lZDogZmFsc2UsXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfSxcbiAgICBpbnNwZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBcIk5vbmVcIjtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3BlY3QoKTtcbiAgICB9XG4gIH07XG5cbiAgdG9PcHRpb24gPSBmdW5jdGlvbih2KSB7XG4gICAgaWYgKHYgaW5zdGFuY2VvZiBTb21lIHx8IHYgPT09IE5vbmUpIHtcbiAgICAgIHJldHVybiB2O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFNvbWUodik7XG4gICAgfVxuICB9O1xuXG4gIEJhY29uLm5vTW9yZSA9IFtcIjxuby1tb3JlPlwiXTtcblxuICBCYWNvbi5tb3JlID0gW1wiPG1vcmU+XCJdO1xuXG4gIGV2ZW50SWRDb3VudGVyID0gMDtcblxuICBFdmVudCA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBFdmVudCgpIHtcbiAgICAgIHRoaXMuaWQgPSArK2V2ZW50SWRDb3VudGVyO1xuICAgIH1cblxuICAgIEV2ZW50LnByb3RvdHlwZS5pc0V2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgRXZlbnQucHJvdG90eXBlLmlzRW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIEV2ZW50LnByb3RvdHlwZS5pc0luaXRpYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgRXZlbnQucHJvdG90eXBlLmlzTmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBFdmVudC5wcm90b3R5cGUuaXNFcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBFdmVudC5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgRXZlbnQucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIEV2ZW50LnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICBFdmVudC5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRXZlbnQ7XG5cbiAgfSkoKTtcblxuICBOZXh0ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQoTmV4dCwgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBOZXh0KHZhbHVlRiwgZWFnZXIpIHtcbiAgICAgIE5leHQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gICAgICBpZiAoIWVhZ2VyICYmIF8uaXNGdW5jdGlvbih2YWx1ZUYpIHx8IHZhbHVlRiBpbnN0YW5jZW9mIE5leHQpIHtcbiAgICAgICAgdGhpcy52YWx1ZUYgPSB2YWx1ZUY7XG4gICAgICAgIHRoaXMudmFsdWVJbnRlcm5hbCA9IHZvaWQgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWVGID0gdm9pZCAwO1xuICAgICAgICB0aGlzLnZhbHVlSW50ZXJuYWwgPSB2YWx1ZUY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTmV4dC5wcm90b3R5cGUuaXNOZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgTmV4dC5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBOZXh0LnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudmFsdWVGIGluc3RhbmNlb2YgTmV4dCkge1xuICAgICAgICB0aGlzLnZhbHVlSW50ZXJuYWwgPSB0aGlzLnZhbHVlRi52YWx1ZSgpO1xuICAgICAgICB0aGlzLnZhbHVlRiA9IHZvaWQgMDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy52YWx1ZUYpIHtcbiAgICAgICAgdGhpcy52YWx1ZUludGVybmFsID0gdGhpcy52YWx1ZUYoKTtcbiAgICAgICAgdGhpcy52YWx1ZUYgPSB2b2lkIDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZUludGVybmFsO1xuICAgIH07XG5cbiAgICBOZXh0LnByb3RvdHlwZS5mbWFwID0gZnVuY3Rpb24oZikge1xuICAgICAgdmFyIGV2ZW50LCB2YWx1ZTtcbiAgICAgIGlmICh0aGlzLnZhbHVlSW50ZXJuYWwpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlSW50ZXJuYWw7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBmKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudCA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBmKGV2ZW50LnZhbHVlKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTmV4dC5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgTmV4dC5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24oZikge1xuICAgICAgcmV0dXJuIGYodGhpcy52YWx1ZSgpKTtcbiAgICB9O1xuXG4gICAgTmV4dC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfLnRvU3RyaW5nKHRoaXMudmFsdWUoKSk7XG4gICAgfTtcblxuICAgIE5leHQucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE5leHQ7XG5cbiAgfSkoRXZlbnQpO1xuXG4gIEluaXRpYWwgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChJbml0aWFsLCBzdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIEluaXRpYWwoKSB7XG4gICAgICByZXR1cm4gSW5pdGlhbC5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBJbml0aWFsLnByb3RvdHlwZS5pc0luaXRpYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBJbml0aWFsLnByb3RvdHlwZS5pc05leHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgSW5pdGlhbC5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBJbml0aWFsKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgSW5pdGlhbC5wcm90b3R5cGUudG9OZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IE5leHQodGhpcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBJbml0aWFsO1xuXG4gIH0pKE5leHQpO1xuXG4gIEVuZCA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKEVuZCwgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBFbmQoKSB7XG4gICAgICByZXR1cm4gRW5kLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIEVuZC5wcm90b3R5cGUuaXNFbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBFbmQucHJvdG90eXBlLmZtYXAgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBFbmQucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgRW5kLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFwiPGVuZD5cIjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEVuZDtcblxuICB9KShFdmVudCk7XG5cbiAgRXJyb3IgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChFcnJvciwgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBFcnJvcihlcnJvcjEpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjE7XG4gICAgfVxuXG4gICAgRXJyb3IucHJvdG90eXBlLmlzRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBFcnJvci5wcm90b3R5cGUuZm1hcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEVycm9yLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEVycm9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFwiPGVycm9yPiBcIiArIF8udG9TdHJpbmcodGhpcy5lcnJvcik7XG4gICAgfTtcblxuICAgIHJldHVybiBFcnJvcjtcblxuICB9KShFdmVudCk7XG5cbiAgQmFjb24uRXZlbnQgPSBFdmVudDtcblxuICBCYWNvbi5Jbml0aWFsID0gSW5pdGlhbDtcblxuICBCYWNvbi5OZXh0ID0gTmV4dDtcblxuICBCYWNvbi5FbmQgPSBFbmQ7XG5cbiAgQmFjb24uRXJyb3IgPSBFcnJvcjtcblxuICBpbml0aWFsRXZlbnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgSW5pdGlhbCh2YWx1ZSwgdHJ1ZSk7XG4gIH07XG5cbiAgbmV4dEV2ZW50ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IE5leHQodmFsdWUsIHRydWUpO1xuICB9O1xuXG4gIGVuZEV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBFbmQoKTtcbiAgfTtcblxuICB0b0V2ZW50ID0gZnVuY3Rpb24oeCkge1xuICAgIGlmICh4IGluc3RhbmNlb2YgRXZlbnQpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV4dEV2ZW50KHgpO1xuICAgIH1cbiAgfTtcblxuICBpZENvdW50ZXIgPSAwO1xuXG4gIHJlZ2lzdGVyT2JzID0gZnVuY3Rpb24oKSB7fTtcblxuICBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGUoZGVzYykge1xuICAgICAgdGhpcy5pZCA9ICsraWRDb3VudGVyO1xuICAgICAgd2l0aERlc2NyaXB0aW9uKGRlc2MsIHRoaXMpO1xuICAgICAgdGhpcy5pbml0aWFsRGVzYyA9IHRoaXMuZGVzYztcbiAgICB9XG5cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbihzaW5rKSB7XG4gICAgICByZXR1cm4gVXBkYXRlQmFycmllci53cmFwcGVkU3Vic2NyaWJlKHRoaXMsIHNpbmspO1xuICAgIH07XG5cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVJbnRlcm5hbCA9IGZ1bmN0aW9uKHNpbmspIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoZXIuc3Vic2NyaWJlKHNpbmspO1xuICAgIH07XG5cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5vblZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZjtcbiAgICAgIGYgPSBtYWtlRnVuY3Rpb25BcmdzKGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50Lmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICByZXR1cm4gZihldmVudC52YWx1ZSgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIE9ic2VydmFibGUucHJvdG90eXBlLm9uVmFsdWVzID0gZnVuY3Rpb24oZikge1xuICAgICAgcmV0dXJuIHRoaXMub25WYWx1ZShmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgIHJldHVybiBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIE9ic2VydmFibGUucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBmO1xuICAgICAgZiA9IG1ha2VGdW5jdGlvbkFyZ3MoYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiB0aGlzLnN1YnNjcmliZShmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuaXNFcnJvcigpKSB7XG4gICAgICAgICAgcmV0dXJuIGYoZXZlbnQuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBmO1xuICAgICAgZiA9IG1ha2VGdW5jdGlvbkFyZ3MoYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiB0aGlzLnN1YnNjcmliZShmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuaXNFbmQoKSkge1xuICAgICAgICAgIHJldHVybiBmKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5uYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUud2l0aERlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZGVzY3JpYmUuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5hcHBseSh0aGlzKTtcbiAgICB9O1xuXG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLl9uYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzYy50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5pbnRlcm5hbERlcHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmluaXRpYWxEZXNjLmRlcHMoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGU7XG5cbiAgfSkoKTtcblxuICBPYnNlcnZhYmxlLnByb3RvdHlwZS5hc3NpZ24gPSBPYnNlcnZhYmxlLnByb3RvdHlwZS5vblZhbHVlO1xuXG4gIE9ic2VydmFibGUucHJvdG90eXBlLmZvckVhY2ggPSBPYnNlcnZhYmxlLnByb3RvdHlwZS5vblZhbHVlO1xuXG4gIE9ic2VydmFibGUucHJvdG90eXBlLmluc3BlY3QgPSBPYnNlcnZhYmxlLnByb3RvdHlwZS50b1N0cmluZztcblxuICBCYWNvbi5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZTtcblxuICBDb21wb3NpdGVVbnN1YnNjcmliZSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBDb21wb3NpdGVVbnN1YnNjcmliZShzcykge1xuICAgICAgdmFyIGosIGxlbjEsIHM7XG4gICAgICBpZiAoc3MgPT0gbnVsbCkge1xuICAgICAgICBzcyA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IGJpbmQodGhpcy51bnN1YnNjcmliZSwgdGhpcyk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gW107XG4gICAgICB0aGlzLnN0YXJ0aW5nID0gW107XG4gICAgICBmb3IgKGogPSAwLCBsZW4xID0gc3MubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgIHMgPSBzc1tqXTtcbiAgICAgICAgdGhpcy5hZGQocyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ29tcG9zaXRlVW5zdWJzY3JpYmUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgICAgdmFyIGVuZGVkLCB1bnN1YiwgdW5zdWJNZTtcbiAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbmRlZCA9IGZhbHNlO1xuICAgICAgdW5zdWIgPSBub3A7XG4gICAgICB0aGlzLnN0YXJ0aW5nLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICAgIHVuc3ViTWUgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChfdGhpcy51bnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZW5kZWQgPSB0cnVlO1xuICAgICAgICAgIF90aGlzLnJlbW92ZSh1bnN1Yik7XG4gICAgICAgICAgcmV0dXJuIF8ucmVtb3ZlKHN1YnNjcmlwdGlvbiwgX3RoaXMuc3RhcnRpbmcpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyk7XG4gICAgICB1bnN1YiA9IHN1YnNjcmlwdGlvbih0aGlzLnVuc3Vic2NyaWJlLCB1bnN1Yk1lKTtcbiAgICAgIGlmICghKHRoaXMudW5zdWJzY3JpYmVkIHx8IGVuZGVkKSkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh1bnN1Yik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bnN1YigpO1xuICAgICAgfVxuICAgICAgXy5yZW1vdmUoc3Vic2NyaXB0aW9uLCB0aGlzLnN0YXJ0aW5nKTtcbiAgICAgIHJldHVybiB1bnN1YjtcbiAgICB9O1xuXG4gICAgQ29tcG9zaXRlVW5zdWJzY3JpYmUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHVuc3ViKSB7XG4gICAgICBpZiAodGhpcy51bnN1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKChfLnJlbW92ZSh1bnN1YiwgdGhpcy5zdWJzY3JpcHRpb25zKSkgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gdW5zdWIoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29tcG9zaXRlVW5zdWJzY3JpYmUucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaiwgbGVuMSwgcmVmLCBzO1xuICAgICAgaWYgKHRoaXMudW5zdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudW5zdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgIHJlZiA9IHRoaXMuc3Vic2NyaXB0aW9ucztcbiAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgIHMgPSByZWZbal07XG4gICAgICAgIHMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgcmV0dXJuIHRoaXMuc3RhcnRpbmcgPSBbXTtcbiAgICB9O1xuXG4gICAgQ29tcG9zaXRlVW5zdWJzY3JpYmUucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy51bnN1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zdWJzY3JpcHRpb25zLmxlbmd0aCArIHRoaXMuc3RhcnRpbmcubGVuZ3RoO1xuICAgIH07XG5cbiAgICBDb21wb3NpdGVVbnN1YnNjcmliZS5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvdW50KCkgPT09IDA7XG4gICAgfTtcblxuICAgIHJldHVybiBDb21wb3NpdGVVbnN1YnNjcmliZTtcblxuICB9KSgpO1xuXG4gIEJhY29uLkNvbXBvc2l0ZVVuc3Vic2NyaWJlID0gQ29tcG9zaXRlVW5zdWJzY3JpYmU7XG5cbiAgRGlzcGF0Y2hlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBEaXNwYXRjaGVyKF9zdWJzY3JpYmUsIF9oYW5kbGVFdmVudCkge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlID0gX3N1YnNjcmliZTtcbiAgICAgIHRoaXMuX2hhbmRsZUV2ZW50ID0gX2hhbmRsZUV2ZW50O1xuICAgICAgdGhpcy5zdWJzY3JpYmUgPSBiaW5kKHRoaXMuc3Vic2NyaWJlLCB0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlRXZlbnQgPSBiaW5kKHRoaXMuaGFuZGxlRXZlbnQsIHRoaXMpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gW107XG4gICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICB0aGlzLnB1c2hpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucHJldkVycm9yID0gdm9pZCAwO1xuICAgICAgdGhpcy51bnN1YlNyYyA9IHZvaWQgMDtcbiAgICB9XG5cbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5oYXNTdWJzY3JpYmVycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3Vic2NyaXB0aW9ucy5sZW5ndGggPiAwO1xuICAgIH07XG5cbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLnN1YnNjcmlwdGlvbnMgPSBfLndpdGhvdXQoc3Vic2NyaXB0aW9uLCB0aGlzLnN1YnNjcmlwdGlvbnMpO1xuICAgIH07XG5cbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5pc0VuZCgpKSB7XG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFVwZGF0ZUJhcnJpZXIuaW5UcmFuc2FjdGlvbihldmVudCwgdGhpcywgdGhpcy5wdXNoSXQsIFtldmVudF0pO1xuICAgIH07XG5cbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5wdXNoVG9TdWJzY3JpcHRpb25zID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBlLCBqLCBsZW4xLCByZXBseSwgc3ViLCB0bXA7XG4gICAgICB0cnkge1xuICAgICAgICB0bXAgPSB0aGlzLnN1YnNjcmlwdGlvbnM7XG4gICAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSB0bXAubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgICAgc3ViID0gdG1wW2pdO1xuICAgICAgICAgIHJlcGx5ID0gc3ViLnNpbmsoZXZlbnQpO1xuICAgICAgICAgIGlmIChyZXBseSA9PT0gQmFjb24ubm9Nb3JlIHx8IGV2ZW50LmlzRW5kKCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU3ViKHN1Yik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgIGUgPSBfZXJyb3I7XG4gICAgICAgIHRoaXMucHVzaGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLnB1c2hJdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMucHVzaGluZykge1xuICAgICAgICBpZiAoZXZlbnQgPT09IHRoaXMucHJldkVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5pc0Vycm9yKCkpIHtcbiAgICAgICAgICB0aGlzLnByZXZFcnJvciA9IGV2ZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucHVzaFRvU3Vic2NyaXB0aW9ucyhldmVudCk7XG4gICAgICAgIHRoaXMucHVzaGluZyA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAodGhpcy5xdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICBldmVudCA9IHRoaXMucXVldWUuc2hpZnQoKTtcbiAgICAgICAgICB0aGlzLnB1c2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc1N1YnNjcmliZXJzKCkpIHtcbiAgICAgICAgICByZXR1cm4gQmFjb24ubW9yZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVNvdXJjZSgpO1xuICAgICAgICAgIHJldHVybiBCYWNvbi5ub01vcmU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucXVldWUucHVzaChldmVudCk7XG4gICAgICAgIHJldHVybiBCYWNvbi5tb3JlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnB1c2goZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS51bnN1YnNjcmliZUZyb21Tb3VyY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnVuc3ViU3JjKSB7XG4gICAgICAgIHRoaXMudW5zdWJTcmMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnVuc3ViU3JjID0gdm9pZCAwO1xuICAgIH07XG5cbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbihzaW5rKSB7XG4gICAgICB2YXIgc3Vic2NyaXB0aW9uO1xuICAgICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgICAgc2luayhlbmRFdmVudCgpKTtcbiAgICAgICAgcmV0dXJuIG5vcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFzc2VydEZ1bmN0aW9uKHNpbmspO1xuICAgICAgICBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgICAgc2luazogc2lua1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMudW5zdWJTcmMgPSB0aGlzLl9zdWJzY3JpYmUodGhpcy5oYW5kbGVFdmVudCk7XG4gICAgICAgICAgYXNzZXJ0RnVuY3Rpb24odGhpcy51bnN1YlNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLnJlbW92ZVN1YihzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5oYXNTdWJzY3JpYmVycygpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy51bnN1YnNjcmliZUZyb21Tb3VyY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIERpc3BhdGNoZXI7XG5cbiAgfSkoKTtcblxuICBFdmVudFN0cmVhbSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKEV2ZW50U3RyZWFtLCBzdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIEV2ZW50U3RyZWFtKGRlc2MsIHN1YnNjcmliZSwgaGFuZGxlcikge1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihkZXNjKSkge1xuICAgICAgICBoYW5kbGVyID0gc3Vic2NyaWJlO1xuICAgICAgICBzdWJzY3JpYmUgPSBkZXNjO1xuICAgICAgICBkZXNjID0gW107XG4gICAgICB9XG4gICAgICBFdmVudFN0cmVhbS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkZXNjKTtcbiAgICAgIGFzc2VydEZ1bmN0aW9uKHN1YnNjcmliZSk7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcihzdWJzY3JpYmUsIGhhbmRsZXIpO1xuICAgICAgcmVnaXN0ZXJPYnModGhpcyk7XG4gICAgfVxuXG4gICAgRXZlbnRTdHJlYW0ucHJvdG90eXBlLnRvUHJvcGVydHkgPSBmdW5jdGlvbihpbml0VmFsdWVfKSB7XG4gICAgICB2YXIgZGlzcCwgaW5pdFZhbHVlO1xuICAgICAgaW5pdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMCA/IE5vbmUgOiB0b09wdGlvbihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGluaXRWYWx1ZV87XG4gICAgICB9KTtcbiAgICAgIGRpc3AgPSB0aGlzLmRpc3BhdGNoZXI7XG4gICAgICByZXR1cm4gbmV3IFByb3BlcnR5KGRlc2NyaWJlKHRoaXMsIFwidG9Qcm9wZXJ0eVwiLCBpbml0VmFsdWVfKSwgZnVuY3Rpb24oc2luaykge1xuICAgICAgICB2YXIgaW5pdFNlbnQsIHJlcGx5LCBzZW5kSW5pdCwgdW5zdWI7XG4gICAgICAgIGluaXRTZW50ID0gZmFsc2U7XG4gICAgICAgIHVuc3ViID0gbm9wO1xuICAgICAgICByZXBseSA9IEJhY29uLm1vcmU7XG4gICAgICAgIHNlbmRJbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCFpbml0U2VudCkge1xuICAgICAgICAgICAgcmV0dXJuIGluaXRWYWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIGluaXRTZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmVwbHkgPSBzaW5rKG5ldyBJbml0aWFsKHZhbHVlKSk7XG4gICAgICAgICAgICAgIGlmIChyZXBseSA9PT0gQmFjb24ubm9Nb3JlKSB7XG4gICAgICAgICAgICAgICAgdW5zdWIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5zdWIgPSBub3A7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdW5zdWIgPSBkaXNwLnN1YnNjcmliZShmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIGlmIChldmVudC5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICBpZiAoaW5pdFNlbnQgJiYgZXZlbnQuaXNJbml0aWFsKCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIEJhY29uLm1vcmU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoIWV2ZW50LmlzSW5pdGlhbCgpKSB7XG4gICAgICAgICAgICAgICAgc2VuZEluaXQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbml0U2VudCA9IHRydWU7XG4gICAgICAgICAgICAgIGluaXRWYWx1ZSA9IG5ldyBTb21lKGV2ZW50KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHNpbmsoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuaXNFbmQoKSkge1xuICAgICAgICAgICAgICByZXBseSA9IHNlbmRJbml0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVwbHkgIT09IEJhY29uLm5vTW9yZSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2luayhldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2VuZEluaXQoKTtcbiAgICAgICAgcmV0dXJuIHVuc3ViO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIEV2ZW50U3RyZWFtLnByb3RvdHlwZS50b0V2ZW50U3RyZWFtID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgRXZlbnRTdHJlYW0ucHJvdG90eXBlLndpdGhIYW5kbGVyID0gZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgcmV0dXJuIG5ldyBFdmVudFN0cmVhbShkZXNjcmliZSh0aGlzLCBcIndpdGhIYW5kbGVyXCIsIGhhbmRsZXIpLCB0aGlzLmRpc3BhdGNoZXIuc3Vic2NyaWJlLCBoYW5kbGVyKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEV2ZW50U3RyZWFtO1xuXG4gIH0pKE9ic2VydmFibGUpO1xuXG4gIEJhY29uLkV2ZW50U3RyZWFtID0gRXZlbnRTdHJlYW07XG5cbiAgQmFjb24ubmV2ZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IEV2ZW50U3RyZWFtKGRlc2NyaWJlKEJhY29uLCBcIm5ldmVyXCIpLCBmdW5jdGlvbihzaW5rKSB7XG4gICAgICBzaW5rKGVuZEV2ZW50KCkpO1xuICAgICAgcmV0dXJuIG5vcDtcbiAgICB9KTtcbiAgfTtcblxuICBCYWNvbi53aGVuID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGYsIGksIGluZGV4LCBpeCwgaiwgaywgbGVuLCBsZW4xLCBsZW4yLCBuZWVkc0JhcnJpZXIsIHBhdCwgcGF0U291cmNlcywgcGF0cywgcGF0dGVybnMsIHJlZiwgcmVzdWx0U3RyZWFtLCBzLCBzb3VyY2VzLCB0cmlnZ2VyRm91bmQsIHVzYWdlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gQmFjb24ubmV2ZXIoKTtcbiAgICB9XG4gICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB1c2FnZSA9IFwid2hlbjogZXhwZWN0aW5nIGFyZ3VtZW50cyBpbiB0aGUgZm9ybSAoT2JzZXJ2YWJsZSssZnVuY3Rpb24pK1wiO1xuICAgIGFzc2VydCh1c2FnZSwgbGVuICUgMiA9PT0gMCk7XG4gICAgc291cmNlcyA9IFtdO1xuICAgIHBhdHMgPSBbXTtcbiAgICBpID0gMDtcbiAgICBwYXR0ZXJucyA9IFtdO1xuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBwYXR0ZXJuc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIHBhdHRlcm5zW2kgKyAxXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICBwYXRTb3VyY2VzID0gXy50b0FycmF5KGFyZ3VtZW50c1tpXSk7XG4gICAgICBmID0gY29uc3RhbnRUb0Z1bmN0aW9uKGFyZ3VtZW50c1tpICsgMV0pO1xuICAgICAgcGF0ID0ge1xuICAgICAgICBmOiBmLFxuICAgICAgICBpeHM6IFtdXG4gICAgICB9O1xuICAgICAgdHJpZ2dlckZvdW5kID0gZmFsc2U7XG4gICAgICBmb3IgKGogPSAwLCBsZW4xID0gcGF0U291cmNlcy5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgcyA9IHBhdFNvdXJjZXNbal07XG4gICAgICAgIGluZGV4ID0gXy5pbmRleE9mKHNvdXJjZXMsIHMpO1xuICAgICAgICBpZiAoIXRyaWdnZXJGb3VuZCkge1xuICAgICAgICAgIHRyaWdnZXJGb3VuZCA9IFNvdXJjZS5pc1RyaWdnZXIocyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgIHNvdXJjZXMucHVzaChzKTtcbiAgICAgICAgICBpbmRleCA9IHNvdXJjZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICByZWYgPSBwYXQuaXhzO1xuICAgICAgICBmb3IgKGsgPSAwLCBsZW4yID0gcmVmLmxlbmd0aDsgayA8IGxlbjI7IGsrKykge1xuICAgICAgICAgIGl4ID0gcmVmW2tdO1xuICAgICAgICAgIGlmIChpeC5pbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIGl4LmNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdC5peHMucHVzaCh7XG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGNvdW50OiAxXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYXNzZXJ0KFwiQXQgbGVhc3Qgb25lIEV2ZW50U3RyZWFtIHJlcXVpcmVkXCIsIHRyaWdnZXJGb3VuZCB8fCAoIXBhdFNvdXJjZXMubGVuZ3RoKSk7XG4gICAgICBpZiAocGF0U291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHBhdHMucHVzaChwYXQpO1xuICAgICAgfVxuICAgICAgaSA9IGkgKyAyO1xuICAgIH1cbiAgICBpZiAoIXNvdXJjZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gQmFjb24ubmV2ZXIoKTtcbiAgICB9XG4gICAgc291cmNlcyA9IF8ubWFwKFNvdXJjZS5mcm9tT2JzZXJ2YWJsZSwgc291cmNlcyk7XG4gICAgbmVlZHNCYXJyaWVyID0gKF8uYW55KHNvdXJjZXMsIGZ1bmN0aW9uKHMpIHtcbiAgICAgIHJldHVybiBzLmZsYXR0ZW47XG4gICAgfSkpICYmIChjb250YWluc0R1cGxpY2F0ZURlcHMoXy5tYXAoKGZ1bmN0aW9uKHMpIHtcbiAgICAgIHJldHVybiBzLm9icztcbiAgICB9KSwgc291cmNlcykpKTtcbiAgICByZXR1cm4gcmVzdWx0U3RyZWFtID0gbmV3IEV2ZW50U3RyZWFtKGRlc2NyaWJlLmFwcGx5KG51bGwsIFtCYWNvbiwgXCJ3aGVuXCJdLmNvbmNhdChzbGljZS5jYWxsKHBhdHRlcm5zKSkpLCBmdW5jdGlvbihzaW5rKSB7XG4gICAgICB2YXIgY2Fubm90TWF0Y2gsIGNhbm5vdFN5bmMsIGVuZHMsIG1hdGNoLCBub25GbGF0dGVuZWQsIHBhcnQsIHRyaWdnZXJzO1xuICAgICAgdHJpZ2dlcnMgPSBbXTtcbiAgICAgIGVuZHMgPSBmYWxzZTtcbiAgICAgIG1hdGNoID0gZnVuY3Rpb24ocCkge1xuICAgICAgICB2YXIgbCwgbGVuMywgcmVmMTtcbiAgICAgICAgcmVmMSA9IHAuaXhzO1xuICAgICAgICBmb3IgKGwgPSAwLCBsZW4zID0gcmVmMS5sZW5ndGg7IGwgPCBsZW4zOyBsKyspIHtcbiAgICAgICAgICBpID0gcmVmMVtsXTtcbiAgICAgICAgICBpZiAoIXNvdXJjZXNbaS5pbmRleF0uaGFzQXRMZWFzdChpLmNvdW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgICBjYW5ub3RTeW5jID0gZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgIHJldHVybiAhc291cmNlLnN5bmMgfHwgc291cmNlLmVuZGVkO1xuICAgICAgfTtcbiAgICAgIGNhbm5vdE1hdGNoID0gZnVuY3Rpb24ocCkge1xuICAgICAgICB2YXIgbCwgbGVuMywgcmVmMTtcbiAgICAgICAgcmVmMSA9IHAuaXhzO1xuICAgICAgICBmb3IgKGwgPSAwLCBsZW4zID0gcmVmMS5sZW5ndGg7IGwgPCBsZW4zOyBsKyspIHtcbiAgICAgICAgICBpID0gcmVmMVtsXTtcbiAgICAgICAgICBpZiAoIXNvdXJjZXNbaS5pbmRleF0ubWF5SGF2ZShpLmNvdW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgbm9uRmxhdHRlbmVkID0gZnVuY3Rpb24odHJpZ2dlcikge1xuICAgICAgICByZXR1cm4gIXRyaWdnZXIuc291cmNlLmZsYXR0ZW47XG4gICAgICB9O1xuICAgICAgcGFydCA9IGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odW5zdWJBbGwpIHtcbiAgICAgICAgICB2YXIgZmx1c2gsIGZsdXNoTGF0ZXIsIGZsdXNoV2hpbGVUcmlnZ2VycztcbiAgICAgICAgICBmbHVzaExhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gVXBkYXRlQmFycmllci53aGVuRG9uZVdpdGgocmVzdWx0U3RyZWFtLCBmbHVzaCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBmbHVzaFdoaWxlVHJpZ2dlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBldmVudHMsIGwsIGxlbjMsIHAsIHJlcGx5LCB0cmlnZ2VyO1xuICAgICAgICAgICAgaWYgKHRyaWdnZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgcmVwbHkgPSBCYWNvbi5tb3JlO1xuICAgICAgICAgICAgICB0cmlnZ2VyID0gdHJpZ2dlcnMucG9wKCk7XG4gICAgICAgICAgICAgIGZvciAobCA9IDAsIGxlbjMgPSBwYXRzLmxlbmd0aDsgbCA8IGxlbjM7IGwrKykge1xuICAgICAgICAgICAgICAgIHAgPSBwYXRzW2xdO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaChwKSkge1xuICAgICAgICAgICAgICAgICAgZXZlbnRzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuNCwgbSwgcmVmMSwgcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgcmVmMSA9IHAuaXhzO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IDAsIGxlbjQgPSByZWYxLmxlbmd0aDsgbSA8IGxlbjQ7IG0rKykge1xuICAgICAgICAgICAgICAgICAgICAgIGkgPSByZWYxW21dO1xuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChzb3VyY2VzW2kuaW5kZXhdLmNvbnN1bWUoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgcmVwbHkgPSBzaW5rKHRyaWdnZXIuZS5hcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50LCB2YWx1ZXM7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVuNCwgbSwgcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gMCwgbGVuNCA9IGV2ZW50cy5sZW5ndGg7IG0gPCBsZW40OyBtKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnRzW21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGV2ZW50LnZhbHVlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAuZi5hcHBseShwLCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgaWYgKHRyaWdnZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VycyA9IF8uZmlsdGVyKG5vbkZsYXR0ZW5lZCwgdHJpZ2dlcnMpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKHJlcGx5ID09PSBCYWNvbi5ub01vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5O1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZsdXNoV2hpbGVUcmlnZ2VycygpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIEJhY29uLm1vcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBmbHVzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJlcGx5O1xuICAgICAgICAgICAgcmVwbHkgPSBmbHVzaFdoaWxlVHJpZ2dlcnMoKTtcbiAgICAgICAgICAgIGlmIChlbmRzKSB7XG4gICAgICAgICAgICAgIGVuZHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKF8uYWxsKHNvdXJjZXMsIGNhbm5vdFN5bmMpIHx8IF8uYWxsKHBhdHMsIGNhbm5vdE1hdGNoKSkge1xuICAgICAgICAgICAgICAgIHJlcGx5ID0gQmFjb24ubm9Nb3JlO1xuICAgICAgICAgICAgICAgIHNpbmsoZW5kRXZlbnQoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXBseSA9PT0gQmFjb24ubm9Nb3JlKSB7XG4gICAgICAgICAgICAgIHVuc3ViQWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVwbHk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgcmVwbHk7XG4gICAgICAgICAgICBpZiAoZS5pc0VuZCgpKSB7XG4gICAgICAgICAgICAgIGVuZHMgPSB0cnVlO1xuICAgICAgICAgICAgICBzb3VyY2UubWFya0VuZGVkKCk7XG4gICAgICAgICAgICAgIGZsdXNoTGF0ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5pc0Vycm9yKCkpIHtcbiAgICAgICAgICAgICAgcmVwbHkgPSBzaW5rKGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc291cmNlLnB1c2goZSk7XG4gICAgICAgICAgICAgIGlmIChzb3VyY2Uuc3luYykge1xuICAgICAgICAgICAgICAgIHRyaWdnZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICAgICAgICBlOiBlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKG5lZWRzQmFycmllciB8fCBVcGRhdGVCYXJyaWVyLmhhc1dhaXRlcnMoKSkge1xuICAgICAgICAgICAgICAgICAgZmx1c2hMYXRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBmbHVzaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcGx5ID09PSBCYWNvbi5ub01vcmUpIHtcbiAgICAgICAgICAgICAgdW5zdWJBbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXBseSB8fCBCYWNvbi5tb3JlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIHJldHVybiBuZXcgQmFjb24uQ29tcG9zaXRlVW5zdWJzY3JpYmUoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbCwgbGVuMywgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGwgPSAwLCBsZW4zID0gc291cmNlcy5sZW5ndGg7IGwgPCBsZW4zOyBsKyspIHtcbiAgICAgICAgICBzID0gc291cmNlc1tsXTtcbiAgICAgICAgICByZXN1bHRzLnB1c2gocGFydChzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KSgpKS51bnN1YnNjcmliZTtcbiAgICB9KTtcbiAgfTtcblxuICBjb250YWluc0R1cGxpY2F0ZURlcHMgPSBmdW5jdGlvbihvYnNlcnZhYmxlcywgc3RhdGUpIHtcbiAgICB2YXIgY2hlY2tPYnNlcnZhYmxlO1xuICAgIGlmIChzdGF0ZSA9PSBudWxsKSB7XG4gICAgICBzdGF0ZSA9IFtdO1xuICAgIH1cbiAgICBjaGVja09ic2VydmFibGUgPSBmdW5jdGlvbihvYnMpIHtcbiAgICAgIHZhciBkZXBzO1xuICAgICAgaWYgKF8uY29udGFpbnMoc3RhdGUsIG9icykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXBzID0gb2JzLmludGVybmFsRGVwcygpO1xuICAgICAgICBpZiAoZGVwcy5sZW5ndGgpIHtcbiAgICAgICAgICBzdGF0ZS5wdXNoKG9icyk7XG4gICAgICAgICAgcmV0dXJuIF8uYW55KGRlcHMsIGNoZWNrT2JzZXJ2YWJsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUucHVzaChvYnMpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIF8uYW55KG9ic2VydmFibGVzLCBjaGVja09ic2VydmFibGUpO1xuICB9O1xuXG4gIGNvbnN0YW50VG9GdW5jdGlvbiA9IGZ1bmN0aW9uKGYpIHtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKGYpKSB7XG4gICAgICByZXR1cm4gZjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF8uYWx3YXlzKGYpO1xuICAgIH1cbiAgfTtcblxuICBCYWNvbi5ncm91cFNpbXVsdGFuZW91cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzLCBzb3VyY2VzLCBzdHJlYW1zO1xuICAgIHN0cmVhbXMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgICBpZiAoc3RyZWFtcy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShzdHJlYW1zWzBdKSkge1xuICAgICAgc3RyZWFtcyA9IHN0cmVhbXNbMF07XG4gICAgfVxuICAgIHNvdXJjZXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaiwgbGVuMSwgcmVzdWx0cztcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSBzdHJlYW1zLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xuICAgICAgICBzID0gc3RyZWFtc1tqXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKG5ldyBCdWZmZXJpbmdTb3VyY2UocykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSkoKTtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uLmFwcGx5KG51bGwsIFtCYWNvbiwgXCJncm91cFNpbXVsdGFuZW91c1wiXS5jb25jYXQoc2xpY2UuY2FsbChzdHJlYW1zKSwgW0JhY29uLndoZW4oc291cmNlcywgKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHhzO1xuICAgICAgeHMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgICAgIHJldHVybiB4cztcbiAgICB9KSldKSk7XG4gIH07XG5cbiAgUHJvcGVydHlEaXNwYXRjaGVyID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQoUHJvcGVydHlEaXNwYXRjaGVyLCBzdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIFByb3BlcnR5RGlzcGF0Y2hlcihwcm9wZXJ0eTEsIHN1YnNjcmliZSwgaGFuZGxlRXZlbnQpIHtcbiAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTE7XG4gICAgICB0aGlzLnN1YnNjcmliZSA9IGJpbmQodGhpcy5zdWJzY3JpYmUsIHRoaXMpO1xuICAgICAgUHJvcGVydHlEaXNwYXRjaGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHN1YnNjcmliZSwgaGFuZGxlRXZlbnQpO1xuICAgICAgdGhpcy5jdXJyZW50ID0gTm9uZTtcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlUm9vdElkID0gdm9pZCAwO1xuICAgICAgdGhpcy5wcm9wZXJ0eUVuZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgUHJvcGVydHlEaXNwYXRjaGVyLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5pc0VuZCgpKSB7XG4gICAgICAgIHRoaXMucHJvcGVydHlFbmRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuaGFzVmFsdWUoKSkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBuZXcgU29tZShldmVudCk7XG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlUm9vdElkID0gVXBkYXRlQmFycmllci5jdXJyZW50RXZlbnRJZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb3BlcnR5RGlzcGF0Y2hlci5fX3N1cGVyX18ucHVzaC5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgUHJvcGVydHlEaXNwYXRjaGVyLnByb3RvdHlwZS5tYXliZVN1YlNvdXJjZSA9IGZ1bmN0aW9uKHNpbmssIHJlcGx5KSB7XG4gICAgICBpZiAocmVwbHkgPT09IEJhY29uLm5vTW9yZSkge1xuICAgICAgICByZXR1cm4gbm9wO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BlcnR5RW5kZWQpIHtcbiAgICAgICAgc2luayhlbmRFdmVudCgpKTtcbiAgICAgICAgcmV0dXJuIG5vcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBEaXNwYXRjaGVyLnByb3RvdHlwZS5zdWJzY3JpYmUuY2FsbCh0aGlzLCBzaW5rKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgUHJvcGVydHlEaXNwYXRjaGVyLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbihzaW5rKSB7XG4gICAgICB2YXIgZGlzcGF0Y2hpbmdJZCwgaW5pdFNlbnQsIHJlcGx5LCB2YWxJZDtcbiAgICAgIGluaXRTZW50ID0gZmFsc2U7XG4gICAgICByZXBseSA9IEJhY29uLm1vcmU7XG4gICAgICBpZiAodGhpcy5jdXJyZW50LmlzRGVmaW5lZCAmJiAodGhpcy5oYXNTdWJzY3JpYmVycygpIHx8IHRoaXMucHJvcGVydHlFbmRlZCkpIHtcbiAgICAgICAgZGlzcGF0Y2hpbmdJZCA9IFVwZGF0ZUJhcnJpZXIuY3VycmVudEV2ZW50SWQoKTtcbiAgICAgICAgdmFsSWQgPSB0aGlzLmN1cnJlbnRWYWx1ZVJvb3RJZDtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BlcnR5RW5kZWQgJiYgdmFsSWQgJiYgZGlzcGF0Y2hpbmdJZCAmJiBkaXNwYXRjaGluZ0lkICE9PSB2YWxJZCkge1xuICAgICAgICAgIFVwZGF0ZUJhcnJpZXIud2hlbkRvbmVXaXRoKHRoaXMucHJvcGVydHksIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoX3RoaXMuY3VycmVudFZhbHVlUm9vdElkID09PSB2YWxJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaW5rKGluaXRpYWxFdmVudChfdGhpcy5jdXJyZW50LmdldCgpLnZhbHVlKCkpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSh0aGlzKSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWF5YmVTdWJTb3VyY2Uoc2luaywgcmVwbHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFVwZGF0ZUJhcnJpZXIuaW5UcmFuc2FjdGlvbih2b2lkIDAsIHRoaXMsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBseSA9IHNpbmsoaW5pdGlhbEV2ZW50KHRoaXMuY3VycmVudC5nZXQoKS52YWx1ZSgpKSk7XG4gICAgICAgICAgfSksIFtdKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tYXliZVN1YlNvdXJjZShzaW5rLCByZXBseSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1heWJlU3ViU291cmNlKHNpbmssIHJlcGx5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb3BlcnR5RGlzcGF0Y2hlcjtcblxuICB9KShEaXNwYXRjaGVyKTtcblxuICBQcm9wZXJ0eSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKFByb3BlcnR5LCBzdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIFByb3BlcnR5KGRlc2MsIHN1YnNjcmliZSwgaGFuZGxlcikge1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihkZXNjKSkge1xuICAgICAgICBoYW5kbGVyID0gc3Vic2NyaWJlO1xuICAgICAgICBzdWJzY3JpYmUgPSBkZXNjO1xuICAgICAgICBkZXNjID0gW107XG4gICAgICB9XG4gICAgICBQcm9wZXJ0eS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkZXNjKTtcbiAgICAgIGFzc2VydEZ1bmN0aW9uKHN1YnNjcmliZSk7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIgPSBuZXcgUHJvcGVydHlEaXNwYXRjaGVyKHRoaXMsIHN1YnNjcmliZSwgaGFuZGxlcik7XG4gICAgICByZWdpc3Rlck9icyh0aGlzKTtcbiAgICB9XG5cbiAgICBQcm9wZXJ0eS5wcm90b3R5cGUuY2hhbmdlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBFdmVudFN0cmVhbShkZXNjcmliZSh0aGlzLCBcImNoYW5nZXNcIiksIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oc2luaykge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5kaXNwYXRjaGVyLnN1YnNjcmliZShmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKCFldmVudC5pc0luaXRpYWwoKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2luayhldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfTtcblxuICAgIFByb3BlcnR5LnByb3RvdHlwZS53aXRoSGFuZGxlciA9IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvcGVydHkoZGVzY3JpYmUodGhpcywgXCJ3aXRoSGFuZGxlclwiLCBoYW5kbGVyKSwgdGhpcy5kaXNwYXRjaGVyLnN1YnNjcmliZSwgaGFuZGxlcik7XG4gICAgfTtcblxuICAgIFByb3BlcnR5LnByb3RvdHlwZS50b1Byb3BlcnR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICBhc3NlcnROb0FyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFByb3BlcnR5LnByb3RvdHlwZS50b0V2ZW50U3RyZWFtID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IEV2ZW50U3RyZWFtKGRlc2NyaWJlKHRoaXMsIFwidG9FdmVudFN0cmVhbVwiKSwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihzaW5rKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmRpc3BhdGNoZXIuc3Vic2NyaWJlKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuaXNJbml0aWFsKCkpIHtcbiAgICAgICAgICAgICAgZXZlbnQgPSBldmVudC50b05leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzaW5rKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb3BlcnR5O1xuXG4gIH0pKE9ic2VydmFibGUpO1xuXG4gIEJhY29uLlByb3BlcnR5ID0gUHJvcGVydHk7XG5cbiAgQmFjb24uY29uc3RhbnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgUHJvcGVydHkoZGVzY3JpYmUoQmFjb24sIFwiY29uc3RhbnRcIiwgdmFsdWUpLCBmdW5jdGlvbihzaW5rKSB7XG4gICAgICBzaW5rKGluaXRpYWxFdmVudCh2YWx1ZSkpO1xuICAgICAgc2luayhlbmRFdmVudCgpKTtcbiAgICAgIHJldHVybiBub3A7XG4gICAgfSk7XG4gIH07XG5cbiAgQmFjb24uZnJvbUJpbmRlciA9IGZ1bmN0aW9uKGJpbmRlciwgZXZlbnRUcmFuc2Zvcm1lcikge1xuICAgIGlmIChldmVudFRyYW5zZm9ybWVyID09IG51bGwpIHtcbiAgICAgIGV2ZW50VHJhbnNmb3JtZXIgPSBfLmlkO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEV2ZW50U3RyZWFtKGRlc2NyaWJlKEJhY29uLCBcImZyb21CaW5kZXJcIiwgYmluZGVyLCBldmVudFRyYW5zZm9ybWVyKSwgZnVuY3Rpb24oc2luaykge1xuICAgICAgdmFyIHNob3VsZFVuYmluZCwgdW5iaW5kLCB1bmJpbmRlciwgdW5ib3VuZDtcbiAgICAgIHVuYm91bmQgPSBmYWxzZTtcbiAgICAgIHNob3VsZFVuYmluZCA9IGZhbHNlO1xuICAgICAgdW5iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdW5ib3VuZCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdW5iaW5kZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgdW5iaW5kZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHVuYmluZGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gdW5ib3VuZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzaG91bGRVbmJpbmQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHVuYmluZGVyID0gYmluZGVyKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncywgZXZlbnQsIGosIGxlbjEsIHJlcGx5LCB2YWx1ZTtcbiAgICAgICAgYXJncyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICAgICAgICB2YWx1ZSA9IGV2ZW50VHJhbnNmb3JtZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIGlmICghKGlzQXJyYXkodmFsdWUpICYmIF8ubGFzdCh2YWx1ZSkgaW5zdGFuY2VvZiBFdmVudCkpIHtcbiAgICAgICAgICB2YWx1ZSA9IFt2YWx1ZV07XG4gICAgICAgIH1cbiAgICAgICAgcmVwbHkgPSBCYWNvbi5tb3JlO1xuICAgICAgICBmb3IgKGogPSAwLCBsZW4xID0gdmFsdWUubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgICAgZXZlbnQgPSB2YWx1ZVtqXTtcbiAgICAgICAgICByZXBseSA9IHNpbmsoZXZlbnQgPSB0b0V2ZW50KGV2ZW50KSk7XG4gICAgICAgICAgaWYgKHJlcGx5ID09PSBCYWNvbi5ub01vcmUgfHwgZXZlbnQuaXNFbmQoKSkge1xuICAgICAgICAgICAgdW5iaW5kKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVwbHk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXBseTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHNob3VsZFVuYmluZCkge1xuICAgICAgICB1bmJpbmQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmJpbmQ7XG4gICAgfSk7XG4gIH07XG5cbiAgZXZlbnRNZXRob2RzID0gW1tcImFkZEV2ZW50TGlzdGVuZXJcIiwgXCJyZW1vdmVFdmVudExpc3RlbmVyXCJdLCBbXCJhZGRMaXN0ZW5lclwiLCBcInJlbW92ZUxpc3RlbmVyXCJdLCBbXCJvblwiLCBcIm9mZlwiXSwgW1wiYmluZFwiLCBcInVuYmluZFwiXV07XG5cbiAgZmluZEhhbmRsZXJNZXRob2RzID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdmFyIGosIGxlbjEsIG1ldGhvZFBhaXIsIHBhaXI7XG4gICAgZm9yIChqID0gMCwgbGVuMSA9IGV2ZW50TWV0aG9kcy5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgIHBhaXIgPSBldmVudE1ldGhvZHNbal07XG4gICAgICBtZXRob2RQYWlyID0gW3RhcmdldFtwYWlyWzBdXSwgdGFyZ2V0W3BhaXJbMV1dXTtcbiAgICAgIGlmIChtZXRob2RQYWlyWzBdICYmIG1ldGhvZFBhaXJbMV0pIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZFBhaXI7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1aXRhYmxlIGV2ZW50IG1ldGhvZHMgaW4gXCIgKyB0YXJnZXQpO1xuICB9O1xuXG4gIEJhY29uLmZyb21FdmVudFRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwgZXZlbnROYW1lLCBldmVudFRyYW5zZm9ybWVyKSB7XG4gICAgdmFyIHJlZiwgc3ViLCB1bnN1YjtcbiAgICByZWYgPSBmaW5kSGFuZGxlck1ldGhvZHModGFyZ2V0KSwgc3ViID0gcmVmWzBdLCB1bnN1YiA9IHJlZlsxXTtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKEJhY29uLCBcImZyb21FdmVudFwiLCB0YXJnZXQsIGV2ZW50TmFtZSwgQmFjb24uZnJvbUJpbmRlcihmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICBzdWIuY2FsbCh0YXJnZXQsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB1bnN1Yi5jYWxsKHRhcmdldCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgIH07XG4gICAgfSwgZXZlbnRUcmFuc2Zvcm1lcikpO1xuICB9O1xuXG4gIEJhY29uLmZyb21FdmVudCA9IEJhY29uLmZyb21FdmVudFRhcmdldDtcblxuICBCYWNvbi5PYnNlcnZhYmxlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncywgcDtcbiAgICBwID0gYXJndW1lbnRzWzBdLCBhcmdzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgcmV0dXJuIGNvbnZlcnRBcmdzVG9GdW5jdGlvbih0aGlzLCBwLCBhcmdzLCBmdW5jdGlvbihmKSB7XG4gICAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwibWFwXCIsIGYsIHRoaXMud2l0aEhhbmRsZXIoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaChldmVudC5mbWFwKGYpKTtcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICBCYWNvbi5jb21iaW5lQXNBcnJheSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbmRleCwgaiwgbGVuMSwgcywgc291cmNlcywgc3RyZWFtLCBzdHJlYW1zO1xuICAgIHN0cmVhbXMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgICBpZiAoc3RyZWFtcy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShzdHJlYW1zWzBdKSkge1xuICAgICAgc3RyZWFtcyA9IHN0cmVhbXNbMF07XG4gICAgfVxuICAgIGZvciAoaW5kZXggPSBqID0gMCwgbGVuMSA9IHN0cmVhbXMubGVuZ3RoOyBqIDwgbGVuMTsgaW5kZXggPSArK2opIHtcbiAgICAgIHN0cmVhbSA9IHN0cmVhbXNbaW5kZXhdO1xuICAgICAgaWYgKCEoaXNPYnNlcnZhYmxlKHN0cmVhbSkpKSB7XG4gICAgICAgIHN0cmVhbXNbaW5kZXhdID0gQmFjb24uY29uc3RhbnQoc3RyZWFtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN0cmVhbXMubGVuZ3RoKSB7XG4gICAgICBzb3VyY2VzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaywgbGVuMiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGsgPSAwLCBsZW4yID0gc3RyZWFtcy5sZW5ndGg7IGsgPCBsZW4yOyBrKyspIHtcbiAgICAgICAgICBzID0gc3RyZWFtc1trXTtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobmV3IFNvdXJjZShzLCB0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KSgpO1xuICAgICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbi5hcHBseShudWxsLCBbQmFjb24sIFwiY29tYmluZUFzQXJyYXlcIl0uY29uY2F0KHNsaWNlLmNhbGwoc3RyZWFtcyksIFtCYWNvbi53aGVuKHNvdXJjZXMsIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHhzO1xuICAgICAgICB4cyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICAgICAgICByZXR1cm4geHM7XG4gICAgICB9KSkudG9Qcm9wZXJ0eSgpXSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQmFjb24uY29uc3RhbnQoW10pO1xuICAgIH1cbiAgfTtcblxuICBCYWNvbi5vblZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmLCBqLCBzdHJlYW1zO1xuICAgIHN0cmVhbXMgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCwgaiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxKSA6IChqID0gMCwgW10pLCBmID0gYXJndW1lbnRzW2orK107XG4gICAgcmV0dXJuIEJhY29uLmNvbWJpbmVBc0FycmF5KHN0cmVhbXMpLm9uVmFsdWVzKGYpO1xuICB9O1xuXG4gIEJhY29uLmNvbWJpbmVXaXRoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGYsIHN0cmVhbXM7XG4gICAgZiA9IGFyZ3VtZW50c1swXSwgc3RyZWFtcyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24uYXBwbHkobnVsbCwgW0JhY29uLCBcImNvbWJpbmVXaXRoXCIsIGZdLmNvbmNhdChzbGljZS5jYWxsKHN0cmVhbXMpLCBbQmFjb24uY29tYmluZUFzQXJyYXkoc3RyZWFtcykubWFwKGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgcmV0dXJuIGYuYXBwbHkobnVsbCwgdmFsdWVzKTtcbiAgICB9KV0pKTtcbiAgfTtcblxuICBCYWNvbi5jb21iaW5lVGVtcGxhdGUgPSBmdW5jdGlvbih0ZW1wbGF0ZSkge1xuICAgIHZhciBhcHBseVN0cmVhbVZhbHVlLCBjb21iaW5hdG9yLCBjb21waWxlLCBjb21waWxlVGVtcGxhdGUsIGNvbnN0YW50VmFsdWUsIGN1cnJlbnQsIGZ1bmNzLCBta0NvbnRleHQsIHNldFZhbHVlLCBzdHJlYW1zO1xuICAgIGZ1bmNzID0gW107XG4gICAgc3RyZWFtcyA9IFtdO1xuICAgIGN1cnJlbnQgPSBmdW5jdGlvbihjdHhTdGFjaykge1xuICAgICAgcmV0dXJuIGN0eFN0YWNrW2N0eFN0YWNrLmxlbmd0aCAtIDFdO1xuICAgIH07XG4gICAgc2V0VmFsdWUgPSBmdW5jdGlvbihjdHhTdGFjaywga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnQoY3R4U3RhY2spW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICAgIGFwcGx5U3RyZWFtVmFsdWUgPSBmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oY3R4U3RhY2ssIHZhbHVlcykge1xuICAgICAgICByZXR1cm4gc2V0VmFsdWUoY3R4U3RhY2ssIGtleSwgdmFsdWVzW2luZGV4XSk7XG4gICAgICB9O1xuICAgIH07XG4gICAgY29uc3RhbnRWYWx1ZSA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihjdHhTdGFjaykge1xuICAgICAgICByZXR1cm4gc2V0VmFsdWUoY3R4U3RhY2ssIGtleSwgdmFsdWUpO1xuICAgICAgfTtcbiAgICB9O1xuICAgIG1rQ29udGV4dCA9IGZ1bmN0aW9uKHRlbXBsYXRlKSB7XG4gICAgICBpZiAoaXNBcnJheSh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgIH07XG4gICAgY29tcGlsZSA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBwb3BDb250ZXh0LCBwdXNoQ29udGV4dDtcbiAgICAgIGlmIChpc09ic2VydmFibGUodmFsdWUpKSB7XG4gICAgICAgIHN0cmVhbXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBmdW5jcy5wdXNoKGFwcGx5U3RyZWFtVmFsdWUoa2V5LCBzdHJlYW1zLmxlbmd0aCAtIDEpKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IE9iamVjdCh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgIHB1c2hDb250ZXh0ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eFN0YWNrKSB7XG4gICAgICAgICAgICB2YXIgbmV3Q29udGV4dDtcbiAgICAgICAgICAgIG5ld0NvbnRleHQgPSBta0NvbnRleHQodmFsdWUpO1xuICAgICAgICAgICAgc2V0VmFsdWUoY3R4U3RhY2ssIGtleSwgbmV3Q29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gY3R4U3RhY2sucHVzaChuZXdDb250ZXh0KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBwb3BDb250ZXh0ID0gZnVuY3Rpb24oY3R4U3RhY2spIHtcbiAgICAgICAgICByZXR1cm4gY3R4U3RhY2sucG9wKCk7XG4gICAgICAgIH07XG4gICAgICAgIGZ1bmNzLnB1c2gocHVzaENvbnRleHQoa2V5KSk7XG4gICAgICAgIGNvbXBpbGVUZW1wbGF0ZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBmdW5jcy5wdXNoKHBvcENvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZ1bmNzLnB1c2goY29uc3RhbnRWYWx1ZShrZXksIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb21waWxlVGVtcGxhdGUgPSBmdW5jdGlvbih0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIF8uZWFjaCh0ZW1wbGF0ZSwgY29tcGlsZSk7XG4gICAgfTtcbiAgICBjb21waWxlVGVtcGxhdGUodGVtcGxhdGUpO1xuICAgIGNvbWJpbmF0b3IgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIHZhciBjdHhTdGFjaywgZiwgaiwgbGVuMSwgcm9vdENvbnRleHQ7XG4gICAgICByb290Q29udGV4dCA9IG1rQ29udGV4dCh0ZW1wbGF0ZSk7XG4gICAgICBjdHhTdGFjayA9IFtyb290Q29udGV4dF07XG4gICAgICBmb3IgKGogPSAwLCBsZW4xID0gZnVuY3MubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgIGYgPSBmdW5jc1tqXTtcbiAgICAgICAgZihjdHhTdGFjaywgdmFsdWVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByb290Q29udGV4dDtcbiAgICB9O1xuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24oQmFjb24sIFwiY29tYmluZVRlbXBsYXRlXCIsIHRlbXBsYXRlLCBCYWNvbi5jb21iaW5lQXNBcnJheShzdHJlYW1zKS5tYXAoY29tYmluYXRvcikpO1xuICB9O1xuXG4gIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLmNvbWJpbmUgPSBmdW5jdGlvbihvdGhlciwgZikge1xuICAgIHZhciBjb21iaW5hdG9yO1xuICAgIGNvbWJpbmF0b3IgPSB0b0NvbWJpbmF0b3IoZik7XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcImNvbWJpbmVcIiwgb3RoZXIsIGYsIEJhY29uLmNvbWJpbmVBc0FycmF5KHRoaXMsIG90aGVyKS5tYXAoZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICByZXR1cm4gY29tYmluYXRvcih2YWx1ZXNbMF0sIHZhbHVlc1sxXSk7XG4gICAgfSkpO1xuICB9O1xuXG4gIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKGNhc2VzKSB7XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcImRlY29kZVwiLCBjYXNlcywgdGhpcy5jb21iaW5lKEJhY29uLmNvbWJpbmVUZW1wbGF0ZShjYXNlcyksIGZ1bmN0aW9uKGtleSwgdmFsdWVzKSB7XG4gICAgICByZXR1cm4gdmFsdWVzW2tleV07XG4gICAgfSkpO1xuICB9O1xuXG4gIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLndpdGhTdGF0ZU1hY2hpbmUgPSBmdW5jdGlvbihpbml0U3RhdGUsIGYpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgc3RhdGUgPSBpbml0U3RhdGU7XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcIndpdGhTdGF0ZU1hY2hpbmVcIiwgaW5pdFN0YXRlLCBmLCB0aGlzLndpdGhIYW5kbGVyKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgZnJvbUYsIGosIGxlbjEsIG5ld1N0YXRlLCBvdXRwdXQsIG91dHB1dHMsIHJlcGx5O1xuICAgICAgZnJvbUYgPSBmKHN0YXRlLCBldmVudCk7XG4gICAgICBuZXdTdGF0ZSA9IGZyb21GWzBdLCBvdXRwdXRzID0gZnJvbUZbMV07XG4gICAgICBzdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgcmVwbHkgPSBCYWNvbi5tb3JlO1xuICAgICAgZm9yIChqID0gMCwgbGVuMSA9IG91dHB1dHMubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dHNbal07XG4gICAgICAgIHJlcGx5ID0gdGhpcy5wdXNoKG91dHB1dCk7XG4gICAgICAgIGlmIChyZXBseSA9PT0gQmFjb24ubm9Nb3JlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcGx5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVwbHk7XG4gICAgfSkpO1xuICB9O1xuXG4gIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLnNraXBEdXBsaWNhdGVzID0gZnVuY3Rpb24oaXNFcXVhbCkge1xuICAgIGlmIChpc0VxdWFsID09IG51bGwpIHtcbiAgICAgIGlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBhID09PSBiO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcInNraXBEdXBsaWNhdGVzXCIsIHRoaXMud2l0aFN0YXRlTWFjaGluZShOb25lLCBmdW5jdGlvbihwcmV2LCBldmVudCkge1xuICAgICAgaWYgKCFldmVudC5oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHJldHVybiBbcHJldiwgW2V2ZW50XV07XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmlzSW5pdGlhbCgpIHx8IHByZXYgPT09IE5vbmUgfHwgIWlzRXF1YWwocHJldi5nZXQoKSwgZXZlbnQudmFsdWUoKSkpIHtcbiAgICAgICAgcmV0dXJuIFtuZXcgU29tZShldmVudC52YWx1ZSgpKSwgW2V2ZW50XV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW3ByZXYsIFtdXTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH07XG5cbiAgQmFjb24uT2JzZXJ2YWJsZS5wcm90b3R5cGUuYXdhaXRpbmcgPSBmdW5jdGlvbihvdGhlcikge1xuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24odGhpcywgXCJhd2FpdGluZ1wiLCBvdGhlciwgQmFjb24uZ3JvdXBTaW11bHRhbmVvdXModGhpcywgb3RoZXIpLm1hcChmdW5jdGlvbihhcmcpIHtcbiAgICAgIHZhciBteVZhbHVlcywgb3RoZXJWYWx1ZXM7XG4gICAgICBteVZhbHVlcyA9IGFyZ1swXSwgb3RoZXJWYWx1ZXMgPSBhcmdbMV07XG4gICAgICByZXR1cm4gb3RoZXJWYWx1ZXMubGVuZ3RoID09PSAwO1xuICAgIH0pLnRvUHJvcGVydHkoZmFsc2UpLnNraXBEdXBsaWNhdGVzKCkpO1xuICB9O1xuXG4gIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLm5vdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24odGhpcywgXCJub3RcIiwgdGhpcy5tYXAoZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuICF4O1xuICAgIH0pKTtcbiAgfTtcblxuICBCYWNvbi5Qcm9wZXJ0eS5wcm90b3R5cGUuYW5kID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwiYW5kXCIsIG90aGVyLCB0aGlzLmNvbWJpbmUob3RoZXIsIGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIHJldHVybiB4ICYmIHk7XG4gICAgfSkpO1xuICB9O1xuXG4gIEJhY29uLlByb3BlcnR5LnByb3RvdHlwZS5vciA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcIm9yXCIsIG90aGVyLCB0aGlzLmNvbWJpbmUob3RoZXIsIGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIHJldHVybiB4IHx8IHk7XG4gICAgfSkpO1xuICB9O1xuXG4gIEJhY29uLnNjaGVkdWxlciA9IHtcbiAgICBzZXRUaW1lb3V0OiBmdW5jdGlvbihmLCBkKSB7XG4gICAgICByZXR1cm4gc2V0VGltZW91dChmLCBkKTtcbiAgICB9LFxuICAgIHNldEludGVydmFsOiBmdW5jdGlvbihmLCBpKSB7XG4gICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoZiwgaSk7XG4gICAgfSxcbiAgICBjbGVhckludGVydmFsOiBmdW5jdGlvbihpZCkge1xuICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgIH0sXG4gICAgY2xlYXJUaW1lb3V0OiBmdW5jdGlvbihpZCkge1xuICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG4gICAgfSxcbiAgICBub3c6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbiAgfTtcblxuICBCYWNvbi5FdmVudFN0cmVhbS5wcm90b3R5cGUuYnVmZmVyV2l0aFRpbWUgPSBmdW5jdGlvbihkZWxheSkge1xuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24odGhpcywgXCJidWZmZXJXaXRoVGltZVwiLCBkZWxheSwgdGhpcy5idWZmZXJXaXRoVGltZU9yQ291bnQoZGVsYXksIE51bWJlci5NQVhfVkFMVUUpKTtcbiAgfTtcblxuICBCYWNvbi5FdmVudFN0cmVhbS5wcm90b3R5cGUuYnVmZmVyV2l0aENvdW50ID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwiYnVmZmVyV2l0aENvdW50XCIsIGNvdW50LCB0aGlzLmJ1ZmZlcldpdGhUaW1lT3JDb3VudCh2b2lkIDAsIGNvdW50KSk7XG4gIH07XG5cbiAgQmFjb24uRXZlbnRTdHJlYW0ucHJvdG90eXBlLmJ1ZmZlcldpdGhUaW1lT3JDb3VudCA9IGZ1bmN0aW9uKGRlbGF5LCBjb3VudCkge1xuICAgIHZhciBmbHVzaE9yU2NoZWR1bGU7XG4gICAgZmx1c2hPclNjaGVkdWxlID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICBpZiAoYnVmZmVyLnZhbHVlcy5sZW5ndGggPT09IGNvdW50KSB7XG4gICAgICAgIHJldHVybiBidWZmZXIuZmx1c2goKTtcbiAgICAgIH0gZWxzZSBpZiAoZGVsYXkgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gYnVmZmVyLnNjaGVkdWxlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwiYnVmZmVyV2l0aFRpbWVPckNvdW50XCIsIGRlbGF5LCBjb3VudCwgdGhpcy5idWZmZXIoZGVsYXksIGZsdXNoT3JTY2hlZHVsZSwgZmx1c2hPclNjaGVkdWxlKSk7XG4gIH07XG5cbiAgQmFjb24uRXZlbnRTdHJlYW0ucHJvdG90eXBlLmJ1ZmZlciA9IGZ1bmN0aW9uKGRlbGF5LCBvbklucHV0LCBvbkZsdXNoKSB7XG4gICAgdmFyIGJ1ZmZlciwgZGVsYXlNcywgcmVwbHk7XG4gICAgaWYgKG9uSW5wdXQgPT0gbnVsbCkge1xuICAgICAgb25JbnB1dCA9IG5vcDtcbiAgICB9XG4gICAgaWYgKG9uRmx1c2ggPT0gbnVsbCkge1xuICAgICAgb25GbHVzaCA9IG5vcDtcbiAgICB9XG4gICAgYnVmZmVyID0ge1xuICAgICAgc2NoZWR1bGVkOiBudWxsLFxuICAgICAgZW5kOiB2b2lkIDAsXG4gICAgICB2YWx1ZXM6IFtdLFxuICAgICAgZmx1c2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVwbHk7XG4gICAgICAgIGlmICh0aGlzLnNjaGVkdWxlZCkge1xuICAgICAgICAgIEJhY29uLnNjaGVkdWxlci5jbGVhclRpbWVvdXQodGhpcy5zY2hlZHVsZWQpO1xuICAgICAgICAgIHRoaXMuc2NoZWR1bGVkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJlcGx5ID0gdGhpcy5wdXNoKG5leHRFdmVudCh0aGlzLnZhbHVlcykpO1xuICAgICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgICAgaWYgKHRoaXMuZW5kICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2godGhpcy5lbmQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVwbHkgIT09IEJhY29uLm5vTW9yZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9uRmx1c2godGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmVuZCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoKHRoaXMuZW5kKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzY2hlZHVsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5zY2hlZHVsZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZWQgPSBkZWxheSgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmZsdXNoKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgcmVwbHkgPSBCYWNvbi5tb3JlO1xuICAgIGlmICghXy5pc0Z1bmN0aW9uKGRlbGF5KSkge1xuICAgICAgZGVsYXlNcyA9IGRlbGF5O1xuICAgICAgZGVsYXkgPSBmdW5jdGlvbihmKSB7XG4gICAgICAgIHJldHVybiBCYWNvbi5zY2hlZHVsZXIuc2V0VGltZW91dChmLCBkZWxheU1zKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24odGhpcywgXCJidWZmZXJcIiwgdGhpcy53aXRoSGFuZGxlcihmdW5jdGlvbihldmVudCkge1xuICAgICAgYnVmZmVyLnB1c2ggPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnB1c2goZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyk7XG4gICAgICBpZiAoZXZlbnQuaXNFcnJvcigpKSB7XG4gICAgICAgIHJlcGx5ID0gdGhpcy5wdXNoKGV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuaXNFbmQoKSkge1xuICAgICAgICBidWZmZXIuZW5kID0gZXZlbnQ7XG4gICAgICAgIGlmICghYnVmZmVyLnNjaGVkdWxlZCkge1xuICAgICAgICAgIGJ1ZmZlci5mbHVzaCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidWZmZXIudmFsdWVzLnB1c2goZXZlbnQudmFsdWUoKSk7XG4gICAgICAgIG9uSW5wdXQoYnVmZmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXBseTtcbiAgICB9KSk7XG4gIH07XG5cbiAgQmFjb24uT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MsIGY7XG4gICAgZiA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgIHJldHVybiBjb252ZXJ0QXJnc1RvRnVuY3Rpb24odGhpcywgZiwgYXJncywgZnVuY3Rpb24oZikge1xuICAgICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcImZpbHRlclwiLCBmLCB0aGlzLndpdGhIYW5kbGVyKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5maWx0ZXIoZikpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoKGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gQmFjb24ubW9yZTtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIEJhY29uLm9uY2UgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgRXZlbnRTdHJlYW0oZGVzY3JpYmUoQmFjb24sIFwib25jZVwiLCB2YWx1ZSksIGZ1bmN0aW9uKHNpbmspIHtcbiAgICAgIHNpbmsodG9FdmVudCh2YWx1ZSkpO1xuICAgICAgc2luayhlbmRFdmVudCgpKTtcbiAgICAgIHJldHVybiBub3A7XG4gICAgfSk7XG4gIH07XG5cbiAgQmFjb24uRXZlbnRTdHJlYW0ucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uKHJpZ2h0KSB7XG4gICAgdmFyIGxlZnQ7XG4gICAgbGVmdCA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBFdmVudFN0cmVhbShkZXNjcmliZShsZWZ0LCBcImNvbmNhdFwiLCByaWdodCksIGZ1bmN0aW9uKHNpbmspIHtcbiAgICAgIHZhciB1bnN1YkxlZnQsIHVuc3ViUmlnaHQ7XG4gICAgICB1bnN1YlJpZ2h0ID0gbm9wO1xuICAgICAgdW5zdWJMZWZ0ID0gbGVmdC5kaXNwYXRjaGVyLnN1YnNjcmliZShmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLmlzRW5kKCkpIHtcbiAgICAgICAgICByZXR1cm4gdW5zdWJSaWdodCA9IHJpZ2h0LmRpc3BhdGNoZXIuc3Vic2NyaWJlKHNpbmspO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzaW5rKGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdW5zdWJMZWZ0KCk7XG4gICAgICAgIHJldHVybiB1bnN1YlJpZ2h0KCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLmZsYXRNYXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZmxhdE1hcF8odGhpcywgbWFrZVNwYXduZXIoYXJndW1lbnRzKSk7XG4gIH07XG5cbiAgQmFjb24uT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmxhdE1hcEZpcnN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZsYXRNYXBfKHRoaXMsIG1ha2VTcGF3bmVyKGFyZ3VtZW50cyksIHRydWUpO1xuICB9O1xuXG4gIGZsYXRNYXBfID0gZnVuY3Rpb24ocm9vdCwgZiwgZmlyc3RPbmx5LCBsaW1pdCkge1xuICAgIHZhciBjaGlsZERlcHMsIHJlc3VsdCwgcm9vdERlcDtcbiAgICByb290RGVwID0gW3Jvb3RdO1xuICAgIGNoaWxkRGVwcyA9IFtdO1xuICAgIHJlc3VsdCA9IG5ldyBFdmVudFN0cmVhbShkZXNjcmliZShyb290LCBcImZsYXRNYXBcIiArIChmaXJzdE9ubHkgPyBcIkZpcnN0XCIgOiBcIlwiKSwgZiksIGZ1bmN0aW9uKHNpbmspIHtcbiAgICAgIHZhciBjaGVja0VuZCwgY2hlY2tRdWV1ZSwgY29tcG9zaXRlLCBxdWV1ZSwgc3Bhd247XG4gICAgICBjb21wb3NpdGUgPSBuZXcgQ29tcG9zaXRlVW5zdWJzY3JpYmUoKTtcbiAgICAgIHF1ZXVlID0gW107XG4gICAgICBzcGF3biA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBjaGlsZDtcbiAgICAgICAgY2hpbGQgPSBtYWtlT2JzZXJ2YWJsZShmKGV2ZW50LnZhbHVlKCkpKTtcbiAgICAgICAgY2hpbGREZXBzLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlLmFkZChmdW5jdGlvbih1bnN1YkFsbCwgdW5zdWJNZSkge1xuICAgICAgICAgIHJldHVybiBjaGlsZC5kaXNwYXRjaGVyLnN1YnNjcmliZShmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIHJlcGx5O1xuICAgICAgICAgICAgaWYgKGV2ZW50LmlzRW5kKCkpIHtcbiAgICAgICAgICAgICAgXy5yZW1vdmUoY2hpbGQsIGNoaWxkRGVwcyk7XG4gICAgICAgICAgICAgIGNoZWNrUXVldWUoKTtcbiAgICAgICAgICAgICAgY2hlY2tFbmQodW5zdWJNZSk7XG4gICAgICAgICAgICAgIHJldHVybiBCYWNvbi5ub01vcmU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBJbml0aWFsKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudC50b05leHQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXBseSA9IHNpbmsoZXZlbnQpO1xuICAgICAgICAgICAgICBpZiAocmVwbHkgPT09IEJhY29uLm5vTW9yZSkge1xuICAgICAgICAgICAgICAgIHVuc3ViQWxsKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBjaGVja1F1ZXVlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBldmVudDtcbiAgICAgICAgZXZlbnQgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gc3Bhd24oZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY2hlY2tFbmQgPSBmdW5jdGlvbih1bnN1Yikge1xuICAgICAgICB1bnN1YigpO1xuICAgICAgICBpZiAoY29tcG9zaXRlLmVtcHR5KCkpIHtcbiAgICAgICAgICByZXR1cm4gc2luayhlbmRFdmVudCgpKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbXBvc2l0ZS5hZGQoZnVuY3Rpb24oX18sIHVuc3ViUm9vdCkge1xuICAgICAgICByZXR1cm4gcm9vdC5kaXNwYXRjaGVyLnN1YnNjcmliZShmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIGlmIChldmVudC5pc0VuZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tFbmQodW5zdWJSb290KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmlzRXJyb3IoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNpbmsoZXZlbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZmlyc3RPbmx5ICYmIGNvbXBvc2l0ZS5jb3VudCgpID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIEJhY29uLm1vcmU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb21wb3NpdGUudW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBCYWNvbi5ub01vcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGltaXQgJiYgY29tcG9zaXRlLmNvdW50KCkgPiBsaW1pdCkge1xuICAgICAgICAgICAgICByZXR1cm4gcXVldWUucHVzaChldmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gc3Bhd24oZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb21wb3NpdGUudW5zdWJzY3JpYmU7XG4gICAgfSk7XG4gICAgcmVzdWx0LmludGVybmFsRGVwcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGNoaWxkRGVwcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHJvb3REZXAuY29uY2F0KGNoaWxkRGVwcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcm9vdERlcDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgbWFrZVNwYXduZXIgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGlzT2JzZXJ2YWJsZShhcmdzWzBdKSkge1xuICAgICAgcmV0dXJuIF8uYWx3YXlzKGFyZ3NbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWFrZUZ1bmN0aW9uQXJncyhhcmdzKTtcbiAgICB9XG4gIH07XG5cbiAgbWFrZU9ic2VydmFibGUgPSBmdW5jdGlvbih4KSB7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZSh4KSkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBCYWNvbi5vbmNlKHgpO1xuICAgIH1cbiAgfTtcblxuICBCYWNvbi5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwV2l0aENvbmN1cnJlbmN5TGltaXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncywgbGltaXQ7XG4gICAgbGltaXQgPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uLmFwcGx5KG51bGwsIFt0aGlzLCBcImZsYXRNYXBXaXRoQ29uY3VycmVuY3lMaW1pdFwiLCBsaW1pdF0uY29uY2F0KHNsaWNlLmNhbGwoYXJncyksIFtmbGF0TWFwXyh0aGlzLCBtYWtlU3Bhd25lcihhcmdzKSwgZmFsc2UsIGxpbWl0KV0pKTtcbiAgfTtcblxuICBCYWNvbi5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwQ29uY2F0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbi5hcHBseShudWxsLCBbdGhpcywgXCJmbGF0TWFwQ29uY2F0XCJdLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cyksIFt0aGlzLmZsYXRNYXBXaXRoQ29uY3VycmVuY3lMaW1pdC5hcHBseSh0aGlzLCBbMV0uY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpXSkpO1xuICB9O1xuXG4gIGFkZFByb3BlcnR5SW5pdFZhbHVlVG9TdHJlYW0gPSBmdW5jdGlvbihwcm9wZXJ0eSwgc3RyZWFtKSB7XG4gICAgdmFyIGp1c3RJbml0VmFsdWU7XG4gICAganVzdEluaXRWYWx1ZSA9IG5ldyBFdmVudFN0cmVhbShkZXNjcmliZShwcm9wZXJ0eSwgXCJqdXN0SW5pdFZhbHVlXCIpLCBmdW5jdGlvbihzaW5rKSB7XG4gICAgICB2YXIgdW5zdWIsIHZhbHVlO1xuICAgICAgdmFsdWUgPSB2b2lkIDA7XG4gICAgICB1bnN1YiA9IHByb3BlcnR5LmRpc3BhdGNoZXIuc3Vic2NyaWJlKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQuaXNFbmQoKSkge1xuICAgICAgICAgIHZhbHVlID0gZXZlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJhY29uLm5vTW9yZTtcbiAgICAgIH0pO1xuICAgICAgVXBkYXRlQmFycmllci53aGVuRG9uZVdpdGgoanVzdEluaXRWYWx1ZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgc2luayh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpbmsoZW5kRXZlbnQoKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB1bnN1YjtcbiAgICB9KTtcbiAgICByZXR1cm4ganVzdEluaXRWYWx1ZS5jb25jYXQoc3RyZWFtKS50b1Byb3BlcnR5KCk7XG4gIH07XG5cbiAgQmFjb24uT2JzZXJ2YWJsZS5wcm90b3R5cGUubWFwRW5kID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGY7XG4gICAgZiA9IG1ha2VGdW5jdGlvbkFyZ3MoYXJndW1lbnRzKTtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwibWFwRW5kXCIsIGYsIHRoaXMud2l0aEhhbmRsZXIoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5pc0VuZCgpKSB7XG4gICAgICAgIHRoaXMucHVzaChuZXh0RXZlbnQoZihldmVudCkpKTtcbiAgICAgICAgdGhpcy5wdXNoKGVuZEV2ZW50KCkpO1xuICAgICAgICByZXR1cm4gQmFjb24ubm9Nb3JlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaChldmVudCk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9O1xuXG4gIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLnNraXBFcnJvcnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwic2tpcEVycm9yc1wiLCB0aGlzLndpdGhIYW5kbGVyKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuaXNFcnJvcigpKSB7XG4gICAgICAgIHJldHVybiBCYWNvbi5tb3JlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaChldmVudCk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9O1xuXG4gIEJhY29uLkV2ZW50U3RyZWFtLnByb3RvdHlwZS50YWtlVW50aWwgPSBmdW5jdGlvbihzdG9wcGVyKSB7XG4gICAgdmFyIGVuZE1hcmtlcjtcbiAgICBlbmRNYXJrZXIgPSB7fTtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwidGFrZVVudGlsXCIsIHN0b3BwZXIsIEJhY29uLmdyb3VwU2ltdWx0YW5lb3VzKHRoaXMubWFwRW5kKGVuZE1hcmtlciksIHN0b3BwZXIuc2tpcEVycm9ycygpKS53aXRoSGFuZGxlcihmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyIGRhdGEsIGosIGxlbjEsIHJlZiwgcmVwbHksIHZhbHVlO1xuICAgICAgaWYgKCFldmVudC5oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnB1c2goZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVmID0gZXZlbnQudmFsdWUoKSwgZGF0YSA9IHJlZlswXSwgc3RvcHBlciA9IHJlZlsxXTtcbiAgICAgICAgaWYgKHN0b3BwZXIubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHVzaChlbmRFdmVudCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXBseSA9IEJhY29uLm1vcmU7XG4gICAgICAgICAgZm9yIChqID0gMCwgbGVuMSA9IGRhdGEubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGRhdGFbal07XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IGVuZE1hcmtlcikge1xuICAgICAgICAgICAgICByZXBseSA9IHRoaXMucHVzaChlbmRFdmVudCgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlcGx5ID0gdGhpcy5wdXNoKG5leHRFdmVudCh2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVwbHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSk7XG4gIH07XG5cbiAgQmFjb24uUHJvcGVydHkucHJvdG90eXBlLnRha2VVbnRpbCA9IGZ1bmN0aW9uKHN0b3BwZXIpIHtcbiAgICB2YXIgY2hhbmdlcztcbiAgICBjaGFuZ2VzID0gdGhpcy5jaGFuZ2VzKCkudGFrZVVudGlsKHN0b3BwZXIpO1xuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24odGhpcywgXCJ0YWtlVW50aWxcIiwgc3RvcHBlciwgYWRkUHJvcGVydHlJbml0VmFsdWVUb1N0cmVhbSh0aGlzLCBjaGFuZ2VzKSk7XG4gIH07XG5cbiAgQmFjb24uT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmxhdE1hcExhdGVzdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmLCBzdHJlYW07XG4gICAgZiA9IG1ha2VTcGF3bmVyKGFyZ3VtZW50cyk7XG4gICAgc3RyZWFtID0gdGhpcy50b0V2ZW50U3RyZWFtKCk7XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcImZsYXRNYXBMYXRlc3RcIiwgZiwgc3RyZWFtLmZsYXRNYXAoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBtYWtlT2JzZXJ2YWJsZShmKHZhbHVlKSkudGFrZVVudGlsKHN0cmVhbSk7XG4gICAgfSkpO1xuICB9O1xuXG4gIEJhY29uLmZyb21Qb2xsID0gZnVuY3Rpb24oZGVsYXksIHBvbGwpIHtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKEJhY29uLCBcImZyb21Qb2xsXCIsIGRlbGF5LCBwb2xsLCBCYWNvbi5mcm9tQmluZGVyKChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICB2YXIgaWQ7XG4gICAgICBpZCA9IEJhY29uLnNjaGVkdWxlci5zZXRJbnRlcnZhbChoYW5kbGVyLCBkZWxheSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBCYWNvbi5zY2hlZHVsZXIuY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICB9O1xuICAgIH0pLCBwb2xsKSk7XG4gIH07XG5cbiAgQmFjb24ubGF0ZXIgPSBmdW5jdGlvbihkZWxheSwgdmFsdWUpIHtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKEJhY29uLCBcImxhdGVyXCIsIGRlbGF5LCB2YWx1ZSwgQmFjb24uZnJvbUJpbmRlcihmdW5jdGlvbihzaW5rKSB7XG4gICAgICB2YXIgaWQsIHNlbmRlcjtcbiAgICAgIHNlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gc2luayhbdmFsdWUsIGVuZEV2ZW50KCldKTtcbiAgICAgIH07XG4gICAgICBpZCA9IEJhY29uLnNjaGVkdWxlci5zZXRUaW1lb3V0KHNlbmRlciwgZGVsYXkpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gQmFjb24uc2NoZWR1bGVyLmNsZWFyVGltZW91dChpZCk7XG4gICAgICB9O1xuICAgIH0pKTtcbiAgfTtcblxuICBCYWNvbi5zZXF1ZW50aWFsbHkgPSBmdW5jdGlvbihkZWxheSwgdmFsdWVzKSB7XG4gICAgdmFyIGluZGV4O1xuICAgIGluZGV4ID0gMDtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKEJhY29uLCBcInNlcXVlbnRpYWxseVwiLCBkZWxheSwgdmFsdWVzLCBCYWNvbi5mcm9tUG9sbChkZWxheSwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB2YWx1ZSA9IHZhbHVlc1tpbmRleCsrXTtcbiAgICAgIGlmIChpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gW3ZhbHVlLCBlbmRFdmVudCgpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbmRFdmVudCgpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfTtcblxuICBCYWNvbi5yZXBlYXRlZGx5ID0gZnVuY3Rpb24oZGVsYXksIHZhbHVlcykge1xuICAgIHZhciBpbmRleDtcbiAgICBpbmRleCA9IDA7XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbihCYWNvbiwgXCJyZXBlYXRlZGx5XCIsIGRlbGF5LCB2YWx1ZXMsIEJhY29uLmZyb21Qb2xsKGRlbGF5LCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB2YWx1ZXNbaW5kZXgrKyAlIHZhbHVlcy5sZW5ndGhdO1xuICAgIH0pKTtcbiAgfTtcblxuICBCYWNvbi5pbnRlcnZhbCA9IGZ1bmN0aW9uKGRlbGF5LCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKEJhY29uLCBcImludGVydmFsXCIsIGRlbGF5LCB2YWx1ZSwgQmFjb24uZnJvbVBvbGwoZGVsYXksIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5leHRFdmVudCh2YWx1ZSk7XG4gICAgfSkpO1xuICB9O1xuXG4gIEJhY29uLkV2ZW50U3RyZWFtLnByb3RvdHlwZS5kZWxheSA9IGZ1bmN0aW9uKGRlbGF5KSB7XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcImRlbGF5XCIsIGRlbGF5LCB0aGlzLmZsYXRNYXAoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBCYWNvbi5sYXRlcihkZWxheSwgdmFsdWUpO1xuICAgIH0pKTtcbiAgfTtcblxuICBCYWNvbi5Qcm9wZXJ0eS5wcm90b3R5cGUuZGVsYXkgPSBmdW5jdGlvbihkZWxheSkge1xuICAgIHJldHVybiB0aGlzLmRlbGF5Q2hhbmdlcyhcImRlbGF5XCIsIGRlbGF5LCBmdW5jdGlvbihjaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gY2hhbmdlcy5kZWxheShkZWxheSk7XG4gICAgfSk7XG4gIH07XG5cbiAgQmFjb24uUHJvcGVydHkucHJvdG90eXBlLmRlbGF5Q2hhbmdlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkZXNjLCBmLCBqO1xuICAgIGRlc2MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCwgaiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxKSA6IChqID0gMCwgW10pLCBmID0gYXJndW1lbnRzW2orK107XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbi5hcHBseShudWxsLCBbdGhpc10uY29uY2F0KHNsaWNlLmNhbGwoZGVzYyksIFthZGRQcm9wZXJ0eUluaXRWYWx1ZVRvU3RyZWFtKHRoaXMsIGYodGhpcy5jaGFuZ2VzKCkpKV0pKTtcbiAgfTtcblxuICBCYWNvbi5PYnNlcnZhYmxlLnByb3RvdHlwZS5idWZmZXJpbmdUaHJvdHRsZSA9IGZ1bmN0aW9uKG1pbmltdW1JbnRlcnZhbCkge1xuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24odGhpcywgXCJidWZmZXJpbmdUaHJvdHRsZVwiLCBtaW5pbXVtSW50ZXJ2YWwsIHRoaXMuZmxhdE1hcENvbmNhdChmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gQmFjb24ub25jZSh4KS5jb25jYXQoQmFjb24ubGF0ZXIobWluaW11bUludGVydmFsKS5maWx0ZXIoZmFsc2UpKTtcbiAgICB9KSk7XG4gIH07XG5cbiAgQmFjb24uUHJvcGVydHkucHJvdG90eXBlLmJ1ZmZlcmluZ1Rocm90dGxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLmJ1ZmZlcmluZ1Rocm90dGxlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykudG9Qcm9wZXJ0eSgpO1xuICB9O1xuXG4gIEJ1cyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKEJ1cywgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBCdXMoKSB7XG4gICAgICB0aGlzLmd1YXJkZWRTaW5rID0gYmluZCh0aGlzLmd1YXJkZWRTaW5rLCB0aGlzKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlQWxsID0gYmluZCh0aGlzLnN1YnNjcmliZUFsbCwgdGhpcyk7XG4gICAgICB0aGlzLnVuc3ViQWxsID0gYmluZCh0aGlzLnVuc3ViQWxsLCB0aGlzKTtcbiAgICAgIHRoaXMuc2luayA9IHZvaWQgMDtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgQnVzLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRlc2NyaWJlKEJhY29uLCBcIkJ1c1wiKSwgdGhpcy5zdWJzY3JpYmVBbGwpO1xuICAgIH1cblxuICAgIEJ1cy5wcm90b3R5cGUudW5zdWJBbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBqLCBsZW4xLCByZWYsIHN1YjtcbiAgICAgIHJlZiA9IHRoaXMuc3Vic2NyaXB0aW9ucztcbiAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgIHN1YiA9IHJlZltqXTtcbiAgICAgICAgaWYgKHR5cGVvZiBzdWIudW5zdWIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHN1Yi51bnN1YigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH07XG5cbiAgICBCdXMucHJvdG90eXBlLnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uKG5ld1NpbmspIHtcbiAgICAgIHZhciBqLCBsZW4xLCByZWYsIHN1YnNjcmlwdGlvbjtcbiAgICAgIHRoaXMuc2luayA9IG5ld1Npbms7XG4gICAgICByZWYgPSBjbG9uZUFycmF5KHRoaXMuc3Vic2NyaXB0aW9ucyk7XG4gICAgICBmb3IgKGogPSAwLCBsZW4xID0gcmVmLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xuICAgICAgICBzdWJzY3JpcHRpb24gPSByZWZbal07XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlSW5wdXQoc3Vic2NyaXB0aW9uKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnVuc3ViQWxsO1xuICAgIH07XG5cbiAgICBCdXMucHJvdG90eXBlLmd1YXJkZWRTaW5rID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmlzRW5kKCkpIHtcbiAgICAgICAgICAgIF90aGlzLnVuc3Vic2NyaWJlSW5wdXQoaW5wdXQpO1xuICAgICAgICAgICAgcmV0dXJuIEJhY29uLm5vTW9yZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNpbmsoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpO1xuICAgIH07XG5cbiAgICBCdXMucHJvdG90eXBlLnN1YnNjcmliZUlucHV0ID0gZnVuY3Rpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnVuc3ViID0gc3Vic2NyaXB0aW9uLmlucHV0LmRpc3BhdGNoZXIuc3Vic2NyaWJlKHRoaXMuZ3VhcmRlZFNpbmsoc3Vic2NyaXB0aW9uLmlucHV0KSk7XG4gICAgfTtcblxuICAgIEJ1cy5wcm90b3R5cGUudW5zdWJzY3JpYmVJbnB1dCA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICB2YXIgaSwgaiwgbGVuMSwgcmVmLCBzdWI7XG4gICAgICByZWYgPSB0aGlzLnN1YnNjcmlwdGlvbnM7XG4gICAgICBmb3IgKGkgPSBqID0gMCwgbGVuMSA9IHJlZi5sZW5ndGg7IGogPCBsZW4xOyBpID0gKytqKSB7XG4gICAgICAgIHN1YiA9IHJlZltpXTtcbiAgICAgICAgaWYgKHN1Yi5pbnB1dCA9PT0gaW5wdXQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHN1Yi51bnN1YiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBzdWIudW5zdWIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQnVzLnByb3RvdHlwZS5wbHVnID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIHZhciBzdWI7XG4gICAgICBhc3NlcnRPYnNlcnZhYmxlKGlucHV0KTtcbiAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN1YiA9IHtcbiAgICAgICAgaW5wdXQ6IGlucHV0XG4gICAgICB9O1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc3ViKTtcbiAgICAgIGlmICgodGhpcy5zaW5rICE9IG51bGwpKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlSW5wdXQoc3ViKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy51bnN1YnNjcmliZUlucHV0KGlucHV0KTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpO1xuICAgIH07XG5cbiAgICBCdXMucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICB0aGlzLnVuc3ViQWxsKCk7XG4gICAgICByZXR1cm4gdHlwZW9mIHRoaXMuc2luayA9PT0gXCJmdW5jdGlvblwiID8gdGhpcy5zaW5rKGVuZEV2ZW50KCkpIDogdm9pZCAwO1xuICAgIH07XG5cbiAgICBCdXMucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLnNpbmsgPT09IFwiZnVuY3Rpb25cIiA/IHRoaXMuc2luayhuZXh0RXZlbnQodmFsdWUpKSA6IHZvaWQgMDtcbiAgICB9O1xuXG4gICAgQnVzLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRoaXMuc2luayA9PT0gXCJmdW5jdGlvblwiID8gdGhpcy5zaW5rKG5ldyBFcnJvcihlcnJvcikpIDogdm9pZCAwO1xuICAgIH07XG5cbiAgICByZXR1cm4gQnVzO1xuXG4gIH0pKEV2ZW50U3RyZWFtKTtcblxuICBCYWNvbi5CdXMgPSBCdXM7XG5cbiAgbGlmdENhbGxiYWNrID0gZnVuY3Rpb24oZGVzYywgd3JhcHBlZCkge1xuICAgIHJldHVybiB3aXRoTWV0aG9kQ2FsbFN1cHBvcnQoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncywgZiwgc3RyZWFtO1xuICAgICAgZiA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgICAgc3RyZWFtID0gcGFydGlhbGx5QXBwbGllZCh3cmFwcGVkLCBbXG4gICAgICAgIGZ1bmN0aW9uKHZhbHVlcywgY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gZi5hcHBseShudWxsLCBzbGljZS5jYWxsKHZhbHVlcykuY29uY2F0KFtjYWxsYmFja10pKTtcbiAgICAgICAgfVxuICAgICAgXSk7XG4gICAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uLmFwcGx5KG51bGwsIFtCYWNvbiwgZGVzYywgZl0uY29uY2F0KHNsaWNlLmNhbGwoYXJncyksIFtCYWNvbi5jb21iaW5lQXNBcnJheShhcmdzKS5mbGF0TWFwKHN0cmVhbSldKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgQmFjb24uZnJvbUNhbGxiYWNrID0gbGlmdENhbGxiYWNrKFwiZnJvbUNhbGxiYWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzLCBmO1xuICAgIGYgPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgICByZXR1cm4gQmFjb24uZnJvbUJpbmRlcihmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICBtYWtlRnVuY3Rpb24oZiwgYXJncykoaGFuZGxlcik7XG4gICAgICByZXR1cm4gbm9wO1xuICAgIH0sIChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIFt2YWx1ZSwgZW5kRXZlbnQoKV07XG4gICAgfSkpO1xuICB9KTtcblxuICBCYWNvbi5mcm9tTm9kZUNhbGxiYWNrID0gbGlmdENhbGxiYWNrKFwiZnJvbU5vZGVDYWxsYmFja1wiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncywgZjtcbiAgICBmID0gYXJndW1lbnRzWzBdLCBhcmdzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgcmV0dXJuIEJhY29uLmZyb21CaW5kZXIoZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgbWFrZUZ1bmN0aW9uKGYsIGFyZ3MpKGhhbmRsZXIpO1xuICAgICAgcmV0dXJuIG5vcDtcbiAgICB9LCBmdW5jdGlvbihlcnJvciwgdmFsdWUpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gW25ldyBFcnJvcihlcnJvciksIGVuZEV2ZW50KCldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFt2YWx1ZSwgZW5kRXZlbnQoKV07XG4gICAgfSk7XG4gIH0pO1xuXG4gIEJhY29uLkV2ZW50U3RyZWFtLnByb3RvdHlwZS5kZWJvdW5jZSA9IGZ1bmN0aW9uKGRlbGF5KSB7XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcImRlYm91bmNlXCIsIGRlbGF5LCB0aGlzLmZsYXRNYXBMYXRlc3QoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBCYWNvbi5sYXRlcihkZWxheSwgdmFsdWUpO1xuICAgIH0pKTtcbiAgfTtcblxuICBCYWNvbi5Qcm9wZXJ0eS5wcm90b3R5cGUuZGVib3VuY2UgPSBmdW5jdGlvbihkZWxheSkge1xuICAgIHJldHVybiB0aGlzLmRlbGF5Q2hhbmdlcyhcImRlYm91bmNlXCIsIGRlbGF5LCBmdW5jdGlvbihjaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gY2hhbmdlcy5kZWJvdW5jZShkZWxheSk7XG4gICAgfSk7XG4gIH07XG5cbiAgQmFjb24uRXZlbnRTdHJlYW0ucHJvdG90eXBlLmRlYm91bmNlSW1tZWRpYXRlID0gZnVuY3Rpb24oZGVsYXkpIHtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwiZGVib3VuY2VJbW1lZGlhdGVcIiwgZGVsYXksIHRoaXMuZmxhdE1hcEZpcnN0KGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gQmFjb24ub25jZSh2YWx1ZSkuY29uY2F0KEJhY29uLmxhdGVyKGRlbGF5KS5maWx0ZXIoZmFsc2UpKTtcbiAgICB9KSk7XG4gIH07XG5cbiAgQmFjb24uT2JzZXJ2YWJsZS5wcm90b3R5cGUuc2NhbiA9IGZ1bmN0aW9uKHNlZWQsIGYpIHtcbiAgICB2YXIgYWNjLCByZXN1bHRQcm9wZXJ0eSwgc3Vic2NyaWJlO1xuICAgIGYgPSB0b0NvbWJpbmF0b3IoZik7XG4gICAgYWNjID0gdG9PcHRpb24oc2VlZCk7XG4gICAgc3Vic2NyaWJlID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oc2luaykge1xuICAgICAgICB2YXIgaW5pdFNlbnQsIHJlcGx5LCBzZW5kSW5pdCwgdW5zdWI7XG4gICAgICAgIGluaXRTZW50ID0gZmFsc2U7XG4gICAgICAgIHVuc3ViID0gbm9wO1xuICAgICAgICByZXBseSA9IEJhY29uLm1vcmU7XG4gICAgICAgIHNlbmRJbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCFpbml0U2VudCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjYy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIGluaXRTZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmVwbHkgPSBzaW5rKG5ldyBJbml0aWFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICBpZiAocmVwbHkgPT09IEJhY29uLm5vTW9yZSkge1xuICAgICAgICAgICAgICAgIHVuc3ViKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuc3ViID0gbm9wO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHVuc3ViID0gX3RoaXMuZGlzcGF0Y2hlci5zdWJzY3JpYmUoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICB2YXIgbmV4dCwgcHJldjtcbiAgICAgICAgICBpZiAoZXZlbnQuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgaWYgKGluaXRTZW50ICYmIGV2ZW50LmlzSW5pdGlhbCgpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBCYWNvbi5tb3JlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKCFldmVudC5pc0luaXRpYWwoKSkge1xuICAgICAgICAgICAgICAgIHNlbmRJbml0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5pdFNlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICBwcmV2ID0gYWNjLmdldE9yRWxzZSh2b2lkIDApO1xuICAgICAgICAgICAgICBuZXh0ID0gZihwcmV2LCBldmVudC52YWx1ZSgpKTtcbiAgICAgICAgICAgICAgYWNjID0gbmV3IFNvbWUobmV4dCk7XG4gICAgICAgICAgICAgIHJldHVybiBzaW5rKGV2ZW50LmFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChldmVudC5pc0VuZCgpKSB7XG4gICAgICAgICAgICAgIHJlcGx5ID0gc2VuZEluaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXBseSAhPT0gQmFjb24ubm9Nb3JlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzaW5rKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBVcGRhdGVCYXJyaWVyLndoZW5Eb25lV2l0aChyZXN1bHRQcm9wZXJ0eSwgc2VuZEluaXQpO1xuICAgICAgICByZXR1cm4gdW5zdWI7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpO1xuICAgIHJldHVybiByZXN1bHRQcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShkZXNjcmliZSh0aGlzLCBcInNjYW5cIiwgc2VlZCwgZiksIHN1YnNjcmliZSk7XG4gIH07XG5cbiAgQmFjb24uT2JzZXJ2YWJsZS5wcm90b3R5cGUuZGlmZiA9IGZ1bmN0aW9uKHN0YXJ0LCBmKSB7XG4gICAgZiA9IHRvQ29tYmluYXRvcihmKTtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwiZGlmZlwiLCBzdGFydCwgZiwgdGhpcy5zY2FuKFtzdGFydF0sIGZ1bmN0aW9uKHByZXZUdXBsZSwgbmV4dCkge1xuICAgICAgcmV0dXJuIFtuZXh0LCBmKHByZXZUdXBsZVswXSwgbmV4dCldO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbih0dXBsZSkge1xuICAgICAgcmV0dXJuIHR1cGxlLmxlbmd0aCA9PT0gMjtcbiAgICB9KS5tYXAoZnVuY3Rpb24odHVwbGUpIHtcbiAgICAgIHJldHVybiB0dXBsZVsxXTtcbiAgICB9KSk7XG4gIH07XG5cbiAgQmFjb24uT2JzZXJ2YWJsZS5wcm90b3R5cGUuZG9BY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZjtcbiAgICBmID0gbWFrZUZ1bmN0aW9uQXJncyhhcmd1bWVudHMpO1xuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24odGhpcywgXCJkb0FjdGlvblwiLCBmLCB0aGlzLndpdGhIYW5kbGVyKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuaGFzVmFsdWUoKSkge1xuICAgICAgICBmKGV2ZW50LnZhbHVlKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucHVzaChldmVudCk7XG4gICAgfSkpO1xuICB9O1xuXG4gIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLmVuZE9uRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncywgZjtcbiAgICBmID0gYXJndW1lbnRzWzBdLCBhcmdzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgaWYgKGYgPT0gbnVsbCkge1xuICAgICAgZiA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjb252ZXJ0QXJnc1RvRnVuY3Rpb24odGhpcywgZiwgYXJncywgZnVuY3Rpb24oZikge1xuICAgICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcImVuZE9uRXJyb3JcIiwgdGhpcy53aXRoSGFuZGxlcihmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuaXNFcnJvcigpICYmIGYoZXZlbnQuZXJyb3IpKSB7XG4gICAgICAgICAgdGhpcy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoKGVuZEV2ZW50KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnB1c2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuZXJyb3JzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcImVycm9yc1wiLCB0aGlzLmZpbHRlcihmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSk7XG4gIH07XG5cbiAgdmFsdWVBbmRFbmQgPSAoZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gW3ZhbHVlLCBlbmRFdmVudCgpXTtcbiAgfSk7XG5cbiAgQmFjb24uZnJvbVByb21pc2UgPSBmdW5jdGlvbihwcm9taXNlLCBhYm9ydCkge1xuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24oQmFjb24sIFwiZnJvbVByb21pc2VcIiwgcHJvbWlzZSwgQmFjb24uZnJvbUJpbmRlcihmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICB2YXIgcmVmO1xuICAgICAgaWYgKChyZWYgPSBwcm9taXNlLnRoZW4oaGFuZGxlciwgZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gaGFuZGxlcihuZXcgRXJyb3IoZSkpO1xuICAgICAgfSkpICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZWYuZG9uZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmVmLmRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoYWJvcnQpIHtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIHByb21pc2UuYWJvcnQgPT09IFwiZnVuY3Rpb25cIiA/IHByb21pc2UuYWJvcnQoKSA6IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LCB2YWx1ZUFuZEVuZCkpO1xuICB9O1xuXG4gIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLm1hcEVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGY7XG4gICAgZiA9IG1ha2VGdW5jdGlvbkFyZ3MoYXJndW1lbnRzKTtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwibWFwRXJyb3JcIiwgZiwgdGhpcy53aXRoSGFuZGxlcihmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmlzRXJyb3IoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wdXNoKG5leHRFdmVudChmKGV2ZW50LmVycm9yKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaChldmVudCk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9O1xuXG4gIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLmZsYXRNYXBFcnJvciA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcImZsYXRNYXBFcnJvclwiLCBmbiwgdGhpcy5tYXBFcnJvcihmdW5jdGlvbihlcnIpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoZXJyKTtcbiAgICB9KS5mbGF0TWFwKGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICh4IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZuKHguZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEJhY29uLm9uY2UoeCk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9O1xuXG4gIEJhY29uLkV2ZW50U3RyZWFtLnByb3RvdHlwZS5zYW1wbGVkQnkgPSBmdW5jdGlvbihzYW1wbGVyLCBjb21iaW5hdG9yKSB7XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcInNhbXBsZWRCeVwiLCBzYW1wbGVyLCBjb21iaW5hdG9yLCB0aGlzLnRvUHJvcGVydHkoKS5zYW1wbGVkQnkoc2FtcGxlciwgY29tYmluYXRvcikpO1xuICB9O1xuXG4gIEJhY29uLlByb3BlcnR5LnByb3RvdHlwZS5zYW1wbGVkQnkgPSBmdW5jdGlvbihzYW1wbGVyLCBjb21iaW5hdG9yKSB7XG4gICAgdmFyIGxhenksIHJlc3VsdCwgc2FtcGxlclNvdXJjZSwgc3RyZWFtLCB0aGlzU291cmNlO1xuICAgIGlmIChjb21iaW5hdG9yICE9IG51bGwpIHtcbiAgICAgIGNvbWJpbmF0b3IgPSB0b0NvbWJpbmF0b3IoY29tYmluYXRvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhenkgPSB0cnVlO1xuICAgICAgY29tYmluYXRvciA9IGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgcmV0dXJuIGYudmFsdWUoKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXNTb3VyY2UgPSBuZXcgU291cmNlKHRoaXMsIGZhbHNlLCBsYXp5KTtcbiAgICBzYW1wbGVyU291cmNlID0gbmV3IFNvdXJjZShzYW1wbGVyLCB0cnVlLCBsYXp5KTtcbiAgICBzdHJlYW0gPSBCYWNvbi53aGVuKFt0aGlzU291cmNlLCBzYW1wbGVyU291cmNlXSwgY29tYmluYXRvcik7XG4gICAgcmVzdWx0ID0gc2FtcGxlciBpbnN0YW5jZW9mIFByb3BlcnR5ID8gc3RyZWFtLnRvUHJvcGVydHkoKSA6IHN0cmVhbTtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwic2FtcGxlZEJ5XCIsIHNhbXBsZXIsIGNvbWJpbmF0b3IsIHJlc3VsdCk7XG4gIH07XG5cbiAgQmFjb24uUHJvcGVydHkucHJvdG90eXBlLnNhbXBsZSA9IGZ1bmN0aW9uKGludGVydmFsKSB7XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcInNhbXBsZVwiLCBpbnRlcnZhbCwgdGhpcy5zYW1wbGVkQnkoQmFjb24uaW50ZXJ2YWwoaW50ZXJ2YWwsIHt9KSkpO1xuICB9O1xuXG4gIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzLCBwO1xuICAgIHAgPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgICBpZiAocCBpbnN0YW5jZW9mIFByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gcC5zYW1wbGVkQnkodGhpcywgZm9ybWVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnZlcnRBcmdzVG9GdW5jdGlvbih0aGlzLCBwLCBhcmdzLCBmdW5jdGlvbihmKSB7XG4gICAgICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24odGhpcywgXCJtYXBcIiwgZiwgdGhpcy53aXRoSGFuZGxlcihmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnB1c2goZXZlbnQuZm1hcChmKSk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBCYWNvbi5PYnNlcnZhYmxlLnByb3RvdHlwZS5mb2xkID0gZnVuY3Rpb24oc2VlZCwgZikge1xuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24odGhpcywgXCJmb2xkXCIsIHNlZWQsIGYsIHRoaXMuc2NhbihzZWVkLCBmKS5zYW1wbGVkQnkodGhpcy5maWx0ZXIoZmFsc2UpLm1hcEVuZCgpLnRvUHJvcGVydHkoKSkpO1xuICB9O1xuXG4gIE9ic2VydmFibGUucHJvdG90eXBlLnJlZHVjZSA9IE9ic2VydmFibGUucHJvdG90eXBlLmZvbGQ7XG5cbiAgQmFjb24uRXZlbnRTdHJlYW0ucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24ocmlnaHQpIHtcbiAgICB2YXIgbGVmdDtcbiAgICBhc3NlcnRFdmVudFN0cmVhbShyaWdodCk7XG4gICAgbGVmdCA9IHRoaXM7XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbihsZWZ0LCBcIm1lcmdlXCIsIHJpZ2h0LCBCYWNvbi5tZXJnZUFsbCh0aGlzLCByaWdodCkpO1xuICB9O1xuXG4gIEJhY29uLm1lcmdlQWxsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmVhbXM7XG4gICAgc3RyZWFtcyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICAgIGlmIChpc0FycmF5KHN0cmVhbXNbMF0pKSB7XG4gICAgICBzdHJlYW1zID0gc3RyZWFtc1swXTtcbiAgICB9XG4gICAgaWYgKHN0cmVhbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbmV3IEV2ZW50U3RyZWFtKGRlc2NyaWJlLmFwcGx5KG51bGwsIFtCYWNvbiwgXCJtZXJnZUFsbFwiXS5jb25jYXQoc2xpY2UuY2FsbChzdHJlYW1zKSkpLCBmdW5jdGlvbihzaW5rKSB7XG4gICAgICAgIHZhciBlbmRzLCBzaW5rcywgc21hcnRTaW5rO1xuICAgICAgICBlbmRzID0gMDtcbiAgICAgICAgc21hcnRTaW5rID0gZnVuY3Rpb24ob2JzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHVuc3ViQm90aCkge1xuICAgICAgICAgICAgcmV0dXJuIG9icy5kaXNwYXRjaGVyLnN1YnNjcmliZShmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICB2YXIgcmVwbHk7XG4gICAgICAgICAgICAgIGlmIChldmVudC5pc0VuZCgpKSB7XG4gICAgICAgICAgICAgICAgZW5kcysrO1xuICAgICAgICAgICAgICAgIGlmIChlbmRzID09PSBzdHJlYW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpbmsoZW5kRXZlbnQoKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBCYWNvbi5tb3JlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBseSA9IHNpbmsoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBseSA9PT0gQmFjb24ubm9Nb3JlKSB7XG4gICAgICAgICAgICAgICAgICB1bnN1YkJvdGgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBzaW5rcyA9IF8ubWFwKHNtYXJ0U2luaywgc3RyZWFtcyk7XG4gICAgICAgIHJldHVybiBuZXcgQmFjb24uQ29tcG9zaXRlVW5zdWJzY3JpYmUoc2lua3MpLnVuc3Vic2NyaWJlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBCYWNvbi5uZXZlcigpO1xuICAgIH1cbiAgfTtcblxuICBCYWNvbi5PYnNlcnZhYmxlLnByb3RvdHlwZS50YWtlID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICBpZiAoY291bnQgPD0gMCkge1xuICAgICAgcmV0dXJuIEJhY29uLm5ldmVyKCk7XG4gICAgfVxuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24odGhpcywgXCJ0YWtlXCIsIGNvdW50LCB0aGlzLndpdGhIYW5kbGVyKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoIWV2ZW50Lmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaChldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudC0tO1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHVzaChldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2goZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnB1c2goZW5kRXZlbnQoKSk7XG4gICAgICAgICAgcmV0dXJuIEJhY29uLm5vTW9yZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKTtcbiAgfTtcblxuICBCYWNvbi5mcm9tQXJyYXkgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICB2YXIgaTtcbiAgICBhc3NlcnRBcnJheSh2YWx1ZXMpO1xuICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbihCYWNvbiwgXCJmcm9tQXJyYXlcIiwgdmFsdWVzLCBCYWNvbi5uZXZlcigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaSA9IDA7XG4gICAgICByZXR1cm4gbmV3IEV2ZW50U3RyZWFtKGRlc2NyaWJlKEJhY29uLCBcImZyb21BcnJheVwiLCB2YWx1ZXMpLCBmdW5jdGlvbihzaW5rKSB7XG4gICAgICAgIHZhciBwdXNoLCByZXBseSwgdW5zdWJkO1xuICAgICAgICB1bnN1YmQgPSBmYWxzZTtcbiAgICAgICAgcmVwbHkgPSBCYWNvbi5tb3JlO1xuICAgICAgICBwdXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgIGlmICgocmVwbHkgIT09IEJhY29uLm5vTW9yZSkgJiYgIXVuc3ViZCkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZXNbaSsrXTtcbiAgICAgICAgICAgIHJlcGx5ID0gc2luayh0b0V2ZW50KHZhbHVlKSk7XG4gICAgICAgICAgICBpZiAocmVwbHkgIT09IEJhY29uLm5vTW9yZSkge1xuICAgICAgICAgICAgICBpZiAoaSA9PT0gdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaW5rKGVuZEV2ZW50KCkpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBVcGRhdGVCYXJyaWVyLmFmdGVyVHJhbnNhY3Rpb24ocHVzaCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHB1c2goKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB1bnN1YmQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIEJhY29uLkV2ZW50U3RyZWFtLnByb3RvdHlwZS5ob2xkV2hlbiA9IGZ1bmN0aW9uKHZhbHZlKSB7XG4gICAgdmFyIHB1dFRvSG9sZCwgcmVsZWFzZUhvbGQsIHZhbHZlXztcbiAgICB2YWx2ZV8gPSB2YWx2ZS5zdGFydFdpdGgoZmFsc2UpO1xuICAgIHJlbGVhc2VIb2xkID0gdmFsdmVfLmZpbHRlcihmdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gIXg7XG4gICAgfSk7XG4gICAgcHV0VG9Ib2xkID0gdmFsdmVfLmZpbHRlcihfLmlkKTtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwiaG9sZFdoZW5cIiwgdmFsdmUsIHRoaXMuZmlsdGVyKGZhbHNlKS5tZXJnZSh2YWx2ZV8uZmxhdE1hcENvbmNhdCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihzaG91bGRIb2xkKSB7XG4gICAgICAgIGlmICghc2hvdWxkSG9sZCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy50YWtlVW50aWwocHV0VG9Ib2xkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuc2NhbihbXSwgKGZ1bmN0aW9uKHhzLCB4KSB7XG4gICAgICAgICAgICByZXR1cm4geHMuY29uY2F0KFt4XSk7XG4gICAgICAgICAgfSkpLnNhbXBsZWRCeShyZWxlYXNlSG9sZCkudGFrZSgxKS5mbGF0TWFwKEJhY29uLmZyb21BcnJheSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcykpKSk7XG4gIH07XG5cbiAgQmFjb24uJCA9IHt9O1xuXG4gIEJhY29uLiQuYXNFdmVudFN0cmVhbSA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgc2VsZWN0b3IsIGV2ZW50VHJhbnNmb3JtZXIpIHtcbiAgICB2YXIgcmVmO1xuICAgIGlmIChfLmlzRnVuY3Rpb24oc2VsZWN0b3IpKSB7XG4gICAgICByZWYgPSBbc2VsZWN0b3IsIHZvaWQgMF0sIGV2ZW50VHJhbnNmb3JtZXIgPSByZWZbMF0sIHNlbGVjdG9yID0gcmVmWzFdO1xuICAgIH1cbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMuc2VsZWN0b3IgfHwgdGhpcywgXCJhc0V2ZW50U3RyZWFtXCIsIGV2ZW50TmFtZSwgQmFjb24uZnJvbUJpbmRlcigoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgIF90aGlzLm9uKGV2ZW50TmFtZSwgc2VsZWN0b3IsIGhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm9mZihldmVudE5hbWUsIHNlbGVjdG9yLCBoYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSkodGhpcyksIGV2ZW50VHJhbnNmb3JtZXIpKTtcbiAgfTtcblxuICBpZiAoKHJlZiA9IHR5cGVvZiBqUXVlcnkgIT09IFwidW5kZWZpbmVkXCIgJiYgalF1ZXJ5ICE9PSBudWxsID8galF1ZXJ5IDogdHlwZW9mIFplcHRvICE9PSBcInVuZGVmaW5lZFwiICYmIFplcHRvICE9PSBudWxsID8gWmVwdG8gOiB2b2lkIDApICE9IG51bGwpIHtcbiAgICByZWYuZm4uYXNFdmVudFN0cmVhbSA9IEJhY29uLiQuYXNFdmVudFN0cmVhbTtcbiAgfVxuXG4gIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzO1xuICAgIGFyZ3MgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgICB0aGlzLnN1YnNjcmliZShmdW5jdGlvbihldmVudCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUgIT09IG51bGwgPyB0eXBlb2YgY29uc29sZS5sb2cgPT09IFwiZnVuY3Rpb25cIiA/IGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIHNsaWNlLmNhbGwoYXJncykuY29uY2F0KFtldmVudC5sb2coKV0pKSA6IHZvaWQgMCA6IHZvaWQgMDtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBCYWNvbi5yZXBlYXQgPSBmdW5jdGlvbihnZW5lcmF0b3IpIHtcbiAgICB2YXIgaW5kZXg7XG4gICAgaW5kZXggPSAwO1xuICAgIHJldHVybiBCYWNvbi5mcm9tQmluZGVyKGZ1bmN0aW9uKHNpbmspIHtcbiAgICAgIHZhciBmbGFnLCBoYW5kbGVFdmVudCwgcmVwbHksIHN1YnNjcmliZU5leHQsIHVuc3ViO1xuICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgcmVwbHkgPSBCYWNvbi5tb3JlO1xuICAgICAgdW5zdWIgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgaGFuZGxlRXZlbnQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuaXNFbmQoKSkge1xuICAgICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgICAgcmV0dXJuIGZsYWcgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlTmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVwbHkgPSBzaW5rKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHN1YnNjcmliZU5leHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICB3aGlsZSAoZmxhZyAmJiByZXBseSAhPT0gQmFjb24ubm9Nb3JlKSB7XG4gICAgICAgICAgbmV4dCA9IGdlbmVyYXRvcihpbmRleCsrKTtcbiAgICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgIHVuc3ViID0gbmV4dC5zdWJzY3JpYmVJbnRlcm5hbChoYW5kbGVFdmVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpbmsoZW5kRXZlbnQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmbGFnID0gdHJ1ZTtcbiAgICAgIH07XG4gICAgICBzdWJzY3JpYmVOZXh0KCk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB1bnN1YigpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBCYWNvbi5yZXRyeSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVsYXksIGVycm9yLCBmaW5pc2hlZCwgaXNSZXRyeWFibGUsIG1heFJldHJpZXMsIHJldHJpZXMsIHNvdXJjZTtcbiAgICBpZiAoIV8uaXNGdW5jdGlvbihvcHRpb25zLnNvdXJjZSkpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCInc291cmNlJyBvcHRpb24gaGFzIHRvIGJlIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIHNvdXJjZSA9IG9wdGlvbnMuc291cmNlO1xuICAgIHJldHJpZXMgPSBvcHRpb25zLnJldHJpZXMgfHwgMDtcbiAgICBtYXhSZXRyaWVzID0gb3B0aW9ucy5tYXhSZXRyaWVzIHx8IHJldHJpZXM7XG4gICAgZGVsYXkgPSBvcHRpb25zLmRlbGF5IHx8IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgICBpc1JldHJ5YWJsZSA9IG9wdGlvbnMuaXNSZXRyeWFibGUgfHwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIGZpbmlzaGVkID0gZmFsc2U7XG4gICAgZXJyb3IgPSBudWxsO1xuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24oQmFjb24sIFwicmV0cnlcIiwgb3B0aW9ucywgQmFjb24ucmVwZWF0KGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvbnRleHQsIHBhdXNlLCB2YWx1ZVN0cmVhbTtcbiAgICAgIGlmIChmaW5pc2hlZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlU3RyZWFtID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHNvdXJjZSgpLmVuZE9uRXJyb3IoKS53aXRoSGFuZGxlcihmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmlzRXJyb3IoKSkge1xuICAgICAgICAgICAgICBlcnJvciA9IGV2ZW50O1xuICAgICAgICAgICAgICBpZiAoaXNSZXRyeWFibGUoZXJyb3IuZXJyb3IpICYmIHJldHJpZXMgPiAwKSB7XG5cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaChldmVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChldmVudC5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5lcnJvcixcbiAgICAgICAgICAgIHJldHJpZXNEb25lOiBtYXhSZXRyaWVzIC0gcmV0cmllc1xuICAgICAgICAgIH07XG4gICAgICAgICAgcGF1c2UgPSBCYWNvbi5sYXRlcihkZWxheShjb250ZXh0KSkuZmlsdGVyKGZhbHNlKTtcbiAgICAgICAgICByZXRyaWVzID0gcmV0cmllcyAtIDE7XG4gICAgICAgICAgcmV0dXJuIHBhdXNlLmNvbmNhdChCYWNvbi5vbmNlKCkuZmxhdE1hcCh2YWx1ZVN0cmVhbSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB2YWx1ZVN0cmVhbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpO1xuICB9O1xuXG4gIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLnNraXAgPSBmdW5jdGlvbihjb3VudCkge1xuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24odGhpcywgXCJza2lwXCIsIGNvdW50LCB0aGlzLndpdGhIYW5kbGVyKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoIWV2ZW50Lmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaChldmVudCk7XG4gICAgICB9IGVsc2UgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICBjb3VudC0tO1xuICAgICAgICByZXR1cm4gQmFjb24ubW9yZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnB1c2goZXZlbnQpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfTtcblxuICBCYWNvbi5FdmVudFN0cmVhbS5wcm90b3R5cGUuc2tpcFVudGlsID0gZnVuY3Rpb24oc3RhcnRlcikge1xuICAgIHZhciBzdGFydGVkO1xuICAgIHN0YXJ0ZWQgPSBzdGFydGVyLnRha2UoMSkubWFwKHRydWUpLnRvUHJvcGVydHkoZmFsc2UpO1xuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24odGhpcywgXCJza2lwVW50aWxcIiwgc3RhcnRlciwgdGhpcy5maWx0ZXIoc3RhcnRlZCkpO1xuICB9O1xuXG4gIEJhY29uLkV2ZW50U3RyZWFtLnByb3RvdHlwZS5za2lwV2hpbGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncywgZiwgb2s7XG4gICAgZiA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgIG9rID0gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnZlcnRBcmdzVG9GdW5jdGlvbih0aGlzLCBmLCBhcmdzLCBmdW5jdGlvbihmKSB7XG4gICAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwic2tpcFdoaWxlXCIsIGYsIHRoaXMud2l0aEhhbmRsZXIoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKG9rIHx8ICFldmVudC5oYXNWYWx1ZSgpIHx8ICFmKGV2ZW50LnZhbHVlKCkpKSB7XG4gICAgICAgICAgaWYgKGV2ZW50Lmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHVzaChldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIEJhY29uLm1vcmU7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICBCYWNvbi5PYnNlcnZhYmxlLnByb3RvdHlwZS5zbGlkaW5nV2luZG93ID0gZnVuY3Rpb24obiwgbWluVmFsdWVzKSB7XG4gICAgaWYgKG1pblZhbHVlcyA9PSBudWxsKSB7XG4gICAgICBtaW5WYWx1ZXMgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwic2xpZGluZ1dpbmRvd1wiLCBuLCBtaW5WYWx1ZXMsIHRoaXMuc2NhbihbXSwgKGZ1bmN0aW9uKHdpbmRvdywgdmFsdWUpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuY29uY2F0KFt2YWx1ZV0pLnNsaWNlKC1uKTtcbiAgICB9KSkuZmlsdGVyKChmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIHJldHVybiB2YWx1ZXMubGVuZ3RoID49IG1pblZhbHVlcztcbiAgICB9KSkpO1xuICB9O1xuXG4gIEJhY29uLnNweSA9IGZ1bmN0aW9uKHNweSkge1xuICAgIHJldHVybiBzcHlzLnB1c2goc3B5KTtcbiAgfTtcblxuICBzcHlzID0gW107XG5cbiAgcmVnaXN0ZXJPYnMgPSBmdW5jdGlvbihvYnMpIHtcbiAgICB2YXIgaiwgbGVuMSwgc3B5O1xuICAgIGlmIChzcHlzLmxlbmd0aCkge1xuICAgICAgaWYgKCFyZWdpc3Rlck9icy5ydW5uaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVnaXN0ZXJPYnMucnVubmluZyA9IHRydWU7XG4gICAgICAgICAgZm9yIChqID0gMCwgbGVuMSA9IHNweXMubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgICAgICBzcHkgPSBzcHlzW2pdO1xuICAgICAgICAgICAgc3B5KG9icyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGRlbGV0ZSByZWdpc3Rlck9icy5ydW5uaW5nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2b2lkIDA7XG4gIH07XG5cbiAgQmFjb24uUHJvcGVydHkucHJvdG90eXBlLnN0YXJ0V2l0aCA9IGZ1bmN0aW9uKHNlZWQpIHtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwic3RhcnRXaXRoXCIsIHNlZWQsIHRoaXMuc2NhbihzZWVkLCBmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9KSk7XG4gIH07XG5cbiAgQmFjb24uRXZlbnRTdHJlYW0ucHJvdG90eXBlLnN0YXJ0V2l0aCA9IGZ1bmN0aW9uKHNlZWQpIHtcbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwic3RhcnRXaXRoXCIsIHNlZWQsIEJhY29uLm9uY2Uoc2VlZCkuY29uY2F0KHRoaXMpKTtcbiAgfTtcblxuICBCYWNvbi5PYnNlcnZhYmxlLnByb3RvdHlwZS50YWtlV2hpbGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncywgZjtcbiAgICBmID0gYXJndW1lbnRzWzBdLCBhcmdzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgcmV0dXJuIGNvbnZlcnRBcmdzVG9GdW5jdGlvbih0aGlzLCBmLCBhcmdzLCBmdW5jdGlvbihmKSB7XG4gICAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwidGFrZVdoaWxlXCIsIGYsIHRoaXMud2l0aEhhbmRsZXIoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmZpbHRlcihmKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnB1c2goZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucHVzaChlbmRFdmVudCgpKTtcbiAgICAgICAgICByZXR1cm4gQmFjb24ubm9Nb3JlO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgQmFjb24udXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGksIGluaXRpYWwsIGxhdGVCaW5kRmlyc3QsIHBhdHRlcm5zO1xuICAgIGluaXRpYWwgPSBhcmd1bWVudHNbMF0sIHBhdHRlcm5zID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgbGF0ZUJpbmRGaXJzdCA9IGZ1bmN0aW9uKGYpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3M7XG4gICAgICAgIGFyZ3MgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICByZXR1cm4gZi5hcHBseShudWxsLCBbaV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfTtcbiAgICBpID0gcGF0dGVybnMubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgIGlmICghKHBhdHRlcm5zW2ldIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgICAgIHBhdHRlcm5zW2ldID0gKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICB9O1xuICAgICAgICB9KShwYXR0ZXJuc1tpXSk7XG4gICAgICB9XG4gICAgICBwYXR0ZXJuc1tpXSA9IGxhdGVCaW5kRmlyc3QocGF0dGVybnNbaV0pO1xuICAgICAgaSA9IGkgLSAyO1xuICAgIH1cbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uLmFwcGx5KG51bGwsIFtCYWNvbiwgXCJ1cGRhdGVcIiwgaW5pdGlhbF0uY29uY2F0KHNsaWNlLmNhbGwocGF0dGVybnMpLCBbQmFjb24ud2hlbi5hcHBseShCYWNvbiwgcGF0dGVybnMpLnNjYW4oaW5pdGlhbCwgKGZ1bmN0aW9uKHgsIGYpIHtcbiAgICAgIHJldHVybiBmKHgpO1xuICAgIH0pKV0pKTtcbiAgfTtcblxuICBCYWNvbi56aXBBc0FycmF5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmVhbXM7XG4gICAgc3RyZWFtcyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICAgIGlmIChpc0FycmF5KHN0cmVhbXNbMF0pKSB7XG4gICAgICBzdHJlYW1zID0gc3RyZWFtc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbi5hcHBseShudWxsLCBbQmFjb24sIFwiemlwQXNBcnJheVwiXS5jb25jYXQoc2xpY2UuY2FsbChzdHJlYW1zKSwgW0JhY29uLnppcFdpdGgoc3RyZWFtcywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeHM7XG4gICAgICB4cyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICAgICAgcmV0dXJuIHhzO1xuICAgIH0pXSkpO1xuICB9O1xuXG4gIEJhY29uLnppcFdpdGggPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZiwgcmVmMSwgc3RyZWFtcztcbiAgICBmID0gYXJndW1lbnRzWzBdLCBzdHJlYW1zID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgaWYgKCFfLmlzRnVuY3Rpb24oZikpIHtcbiAgICAgIHJlZjEgPSBbZiwgc3RyZWFtc1swXV0sIHN0cmVhbXMgPSByZWYxWzBdLCBmID0gcmVmMVsxXTtcbiAgICB9XG4gICAgc3RyZWFtcyA9IF8ubWFwKChmdW5jdGlvbihzKSB7XG4gICAgICByZXR1cm4gcy50b0V2ZW50U3RyZWFtKCk7XG4gICAgfSksIHN0cmVhbXMpO1xuICAgIHJldHVybiB3aXRoRGVzY3JpcHRpb24uYXBwbHkobnVsbCwgW0JhY29uLCBcInppcFdpdGhcIiwgZl0uY29uY2F0KHNsaWNlLmNhbGwoc3RyZWFtcyksIFtCYWNvbi53aGVuKHN0cmVhbXMsIGYpXSkpO1xuICB9O1xuXG4gIEJhY29uLk9ic2VydmFibGUucHJvdG90eXBlLnppcCA9IGZ1bmN0aW9uKG90aGVyLCBmKSB7XG4gICAgaWYgKGYgPT0gbnVsbCkge1xuICAgICAgZiA9IEFycmF5O1xuICAgIH1cbiAgICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwiemlwXCIsIG90aGVyLCBCYWNvbi56aXBXaXRoKFt0aGlzLCBvdGhlcl0sIGYpKTtcbiAgfTtcblxuICBcblxuQmFjb24uT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aXRoRGVzY3JpcHRpb24odGhpcywgXCJmaXJzdFwiLCB0aGlzLnRha2UoMSkpO1xufTtcblxuQmFjb24uT2JzZXJ2YWJsZS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxhc3RFdmVudDtcblxuICByZXR1cm4gd2l0aERlc2NyaXB0aW9uKHRoaXMsIFwibGFzdFwiLCB0aGlzLndpdGhIYW5kbGVyKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5pc0VuZCgpKSB7XG4gICAgICBpZiAobGFzdEV2ZW50KSB7XG4gICAgICAgIHRoaXMucHVzaChsYXN0RXZlbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5wdXNoKGVuZEV2ZW50KCkpO1xuICAgICAgcmV0dXJuIEJhY29uLm5vTW9yZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdEV2ZW50ID0gZXZlbnQ7XG4gICAgfVxuICB9KSk7XG59O1xuXG5CYWNvbi5FdmVudFN0cmVhbS5wcm90b3R5cGUudGhyb3R0bGUgPSBmdW5jdGlvbiAoZGVsYXkpIHtcbiAgcmV0dXJuIHdpdGhEZXNjcmlwdGlvbih0aGlzLCBcInRocm90dGxlXCIsIGRlbGF5LCB0aGlzLmJ1ZmZlcldpdGhUaW1lKGRlbGF5KS5tYXAoZnVuY3Rpb24gKHZhbHVlcykge1xuICAgIHJldHVybiB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdO1xuICB9KSk7XG59O1xuXG5CYWNvbi5Qcm9wZXJ0eS5wcm90b3R5cGUudGhyb3R0bGUgPSBmdW5jdGlvbiAoZGVsYXkpIHtcbiAgcmV0dXJuIHRoaXMuZGVsYXlDaGFuZ2VzKFwidGhyb3R0bGVcIiwgZGVsYXksIGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgcmV0dXJuIGNoYW5nZXMudGhyb3R0bGUoZGVsYXkpO1xuICB9KTtcbn07XG5cbk9ic2VydmFibGUucHJvdG90eXBlLmZpcnN0VG9Qcm9taXNlID0gZnVuY3Rpb24gKFByb21pc2VDdHIpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBpZiAodHlwZW9mIFByb21pc2VDdHIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBQcm9taXNlQ3RyID0gUHJvbWlzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcIlRoZXJlIGlzbid0IGRlZmF1bHQgUHJvbWlzZSwgdXNlIHNoaW0gb3IgcGFyYW1ldGVyXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZUN0cihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmV0dXJuIF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHJlc29sdmUoZXZlbnQudmFsdWUoKSk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuaXNFcnJvcigpKSB7XG4gICAgICAgIHJlamVjdChldmVudC5lcnJvcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBCYWNvbi5ub01vcmU7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUudG9Qcm9taXNlID0gZnVuY3Rpb24gKFByb21pc2VDdHIpIHtcbiAgcmV0dXJuIHRoaXMubGFzdCgpLmZpcnN0VG9Qcm9taXNlKFByb21pc2VDdHIpO1xufTtcblxuaWYgKCh0eXBlb2YgZGVmaW5lICE9PSBcInVuZGVmaW5lZFwiICYmIGRlZmluZSAhPT0gbnVsbCkgJiYgKGRlZmluZS5hbWQgIT0gbnVsbCkpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEJhY29uO1xuICAgIH0pO1xuICAgIHRoaXMuQmFjb24gPSBCYWNvbjtcbiAgfSBlbHNlIGlmICgodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUgIT09IG51bGwpICYmIChtb2R1bGUuZXhwb3J0cyAhPSBudWxsKSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gQmFjb247XG4gICAgQmFjb24uQmFjb24gPSBCYWNvbjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLkJhY29uID0gQmFjb247XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcbiIsIi8vIFNvdXJjZTogaHR0cDovL2pzZmlkZGxlLm5ldC92V3g4Vi9cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTYwMzE5NS9mdWxsLWxpc3Qtb2YtamF2YXNjcmlwdC1rZXljb2Rlc1xuXG5cblxuLyoqXG4gKiBDb25lbmllbmNlIG1ldGhvZCByZXR1cm5zIGNvcnJlc3BvbmRpbmcgdmFsdWUgZm9yIGdpdmVuIGtleU5hbWUgb3Iga2V5Q29kZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSBrZXlDb2RlIHtOdW1iZXJ9IG9yIGtleU5hbWUge1N0cmluZ31cbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZWFyY2hJbnB1dCkge1xuICAvLyBLZXlib2FyZCBFdmVudHNcbiAgaWYgKHNlYXJjaElucHV0ICYmICdvYmplY3QnID09PSB0eXBlb2Ygc2VhcmNoSW5wdXQpIHtcbiAgICB2YXIgaGFzS2V5Q29kZSA9IHNlYXJjaElucHV0LndoaWNoIHx8IHNlYXJjaElucHV0LmtleUNvZGUgfHwgc2VhcmNoSW5wdXQuY2hhckNvZGVcbiAgICBpZiAoaGFzS2V5Q29kZSkgc2VhcmNoSW5wdXQgPSBoYXNLZXlDb2RlXG4gIH1cblxuICAvLyBOdW1iZXJzXG4gIGlmICgnbnVtYmVyJyA9PT0gdHlwZW9mIHNlYXJjaElucHV0KSByZXR1cm4gbmFtZXNbc2VhcmNoSW5wdXRdXG5cbiAgLy8gRXZlcnl0aGluZyBlbHNlIChjYXN0IHRvIHN0cmluZylcbiAgdmFyIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hJbnB1dClcblxuICAvLyBjaGVjayBjb2Rlc1xuICB2YXIgZm91bmROYW1lZEtleSA9IGNvZGVzW3NlYXJjaC50b0xvd2VyQ2FzZSgpXVxuICBpZiAoZm91bmROYW1lZEtleSkgcmV0dXJuIGZvdW5kTmFtZWRLZXlcblxuICAvLyBjaGVjayBhbGlhc2VzXG4gIHZhciBmb3VuZE5hbWVkS2V5ID0gYWxpYXNlc1tzZWFyY2gudG9Mb3dlckNhc2UoKV1cbiAgaWYgKGZvdW5kTmFtZWRLZXkpIHJldHVybiBmb3VuZE5hbWVkS2V5XG5cbiAgLy8gd2VpcmQgY2hhcmFjdGVyP1xuICBpZiAoc2VhcmNoLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHNlYXJjaC5jaGFyQ29kZUF0KDApXG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIEdldCBieSBuYW1lXG4gKlxuICogICBleHBvcnRzLmNvZGVbJ2VudGVyJ10gLy8gPT4gMTNcbiAqL1xuXG52YXIgY29kZXMgPSBleHBvcnRzLmNvZGUgPSBleHBvcnRzLmNvZGVzID0ge1xuICAnYmFja3NwYWNlJzogOCxcbiAgJ3RhYic6IDksXG4gICdlbnRlcic6IDEzLFxuICAnc2hpZnQnOiAxNixcbiAgJ2N0cmwnOiAxNyxcbiAgJ2FsdCc6IDE4LFxuICAncGF1c2UvYnJlYWsnOiAxOSxcbiAgJ2NhcHMgbG9jayc6IDIwLFxuICAnZXNjJzogMjcsXG4gICdzcGFjZSc6IDMyLFxuICAncGFnZSB1cCc6IDMzLFxuICAncGFnZSBkb3duJzogMzQsXG4gICdlbmQnOiAzNSxcbiAgJ2hvbWUnOiAzNixcbiAgJ2xlZnQnOiAzNyxcbiAgJ3VwJzogMzgsXG4gICdyaWdodCc6IDM5LFxuICAnZG93bic6IDQwLFxuICAnaW5zZXJ0JzogNDUsXG4gICdkZWxldGUnOiA0NixcbiAgJ3dpbmRvd3MnOiA5MSxcbiAgJ2NvbW1hbmQnOiA5MSxcbiAgJ3JpZ2h0IGNsaWNrJzogOTMsXG4gICdudW1wYWQgKic6IDEwNixcbiAgJ251bXBhZCArJzogMTA3LFxuICAnbnVtcGFkIC0nOiAxMDksXG4gICdudW1wYWQgLic6IDExMCxcbiAgJ251bXBhZCAvJzogMTExLFxuICAnbnVtIGxvY2snOiAxNDQsXG4gICdzY3JvbGwgbG9jayc6IDE0NSxcbiAgJ215IGNvbXB1dGVyJzogMTgyLFxuICAnbXkgY2FsY3VsYXRvcic6IDE4MyxcbiAgJzsnOiAxODYsXG4gICc9JzogMTg3LFxuICAnLCc6IDE4OCxcbiAgJy0nOiAxODksXG4gICcuJzogMTkwLFxuICAnLyc6IDE5MSxcbiAgJ2AnOiAxOTIsXG4gICdbJzogMjE5LFxuICAnXFxcXCc6IDIyMCxcbiAgJ10nOiAyMjEsXG4gIFwiJ1wiOiAyMjIsXG4gICfih6cnOiAxNixcbiAgJ+KMpSc6IDE4LFxuICAn4oyDJzogMTcsXG4gICfijJgnOiA5MSxcbn1cblxuLy8gSGVscGVyIGFsaWFzZXNcblxudmFyIGFsaWFzZXMgPSBleHBvcnRzLmFsaWFzZXMgPSB7XG4gICdzaGlmdCc6IDE2LFxuICAnY3RsJzogMTcsXG4gICdjdHJsJzogMTcsXG4gICdjb250cm9sJzogMTcsXG4gICdhbHQnOiAxOCxcbiAgJ29wdGlvbic6IDE4LFxuICAncGF1c2UnOiAxOSxcbiAgJ2JyZWFrJzogMTksXG4gICdjYXBzJzogMjAsXG4gICdlc2NhcGUnOiAyNyxcbiAgJ3NwYyc6IDMyLFxuICAncGd1cCc6IDMzLFxuICAncGdkbic6IDMzLFxuICAnaW5zJzogNDUsXG4gICdkZWwnOiA0NixcbiAgJ2NtZCc6IDkxXG59XG5cblxuLyohXG4gKiBQcm9ncmFtYXRpY2FsbHkgYWRkIHRoZSBmb2xsb3dpbmdcbiAqL1xuXG4vLyBsb3dlciBjYXNlIGNoYXJzXG5mb3IgKGkgPSA5NzsgaSA8IDEyMzsgaSsrKSBjb2Rlc1tTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGkgLSAzMlxuXG4vLyBudW1iZXJzXG5mb3IgKHZhciBpID0gNDg7IGkgPCA1ODsgaSsrKSBjb2Rlc1tpIC0gNDhdID0gaVxuXG4vLyBmdW5jdGlvbiBrZXlzXG5mb3IgKGkgPSAxOyBpIDwgMTM7IGkrKykgY29kZXNbJ2YnK2ldID0gaSArIDExMVxuXG4vLyBudW1wYWQga2V5c1xuZm9yIChpID0gMDsgaSA8IDEwOyBpKyspIGNvZGVzWydudW1wYWQgJytpXSA9IGkgKyA5NlxuXG4vKipcbiAqIEdldCBieSBjb2RlXG4gKlxuICogICBleHBvcnRzLm5hbWVbMTNdIC8vID0+ICdFbnRlcidcbiAqL1xuXG52YXIgbmFtZXMgPSBleHBvcnRzLm5hbWVzID0gZXhwb3J0cy50aXRsZSA9IHt9IC8vIHRpdGxlIGZvciBiYWNrd2FyZCBjb21wYXRcblxuLy8gQ3JlYXRlIHJldmVyc2UgbWFwcGluZ1xuZm9yIChpIGluIGNvZGVzKSBuYW1lc1tjb2Rlc1tpXV0gPSBpXG5cbi8vIEFkZCBhbGlhc2VzXG5mb3IgKHZhciBhbGlhcyBpbiBhbGlhc2VzKSB7XG4gIGNvZGVzW2FsaWFzXSA9IGFsaWFzZXNbYWxpYXNdXG59XG4iLCIvKipcbiAqIG1hcmtlZCAtIGEgbWFya2Rvd24gcGFyc2VyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEtMjAxNCwgQ2hyaXN0b3BoZXIgSmVmZnJleS4gKE1JVCBMaWNlbnNlZClcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGpqL21hcmtlZFxuICovXG5cbjsoZnVuY3Rpb24oKSB7XG5cbi8qKlxuICogQmxvY2stTGV2ZWwgR3JhbW1hclxuICovXG5cbnZhciBibG9jayA9IHtcbiAgbmV3bGluZTogL15cXG4rLyxcbiAgY29kZTogL14oIHs0fVteXFxuXStcXG4qKSsvLFxuICBmZW5jZXM6IG5vb3AsXG4gIGhyOiAvXiggKlstKl9dKXszLH0gKig/Olxcbit8JCkvLFxuICBoZWFkaW5nOiAvXiAqKCN7MSw2fSkgKihbXlxcbl0rPykgKiMqICooPzpcXG4rfCQpLyxcbiAgbnB0YWJsZTogbm9vcCxcbiAgbGhlYWRpbmc6IC9eKFteXFxuXSspXFxuICooPXwtKXsyLH0gKig/Olxcbit8JCkvLFxuICBibG9ja3F1b3RlOiAvXiggKj5bXlxcbl0rKFxcbig/IWRlZilbXlxcbl0rKSpcXG4qKSsvLFxuICBsaXN0OiAvXiggKikoYnVsbCkgW1xcc1xcU10rPyg/OmhyfGRlZnxcXG57Mix9KD8hICkoPyFcXDFidWxsIClcXG4qfFxccyokKS8sXG4gIGh0bWw6IC9eICooPzpjb21tZW50ICooPzpcXG58XFxzKiQpfGNsb3NlZCAqKD86XFxuezIsfXxcXHMqJCl8Y2xvc2luZyAqKD86XFxuezIsfXxcXHMqJCkpLyxcbiAgZGVmOiAvXiAqXFxbKFteXFxdXSspXFxdOiAqPD8oW15cXHM+XSspPj8oPzogK1tcIihdKFteXFxuXSspW1wiKV0pPyAqKD86XFxuK3wkKS8sXG4gIHRhYmxlOiBub29wLFxuICBwYXJhZ3JhcGg6IC9eKCg/OlteXFxuXStcXG4/KD8haHJ8aGVhZGluZ3xsaGVhZGluZ3xibG9ja3F1b3RlfHRhZ3xkZWYpKSspXFxuKi8sXG4gIHRleHQ6IC9eW15cXG5dKy9cbn07XG5cbmJsb2NrLmJ1bGxldCA9IC8oPzpbKistXXxcXGQrXFwuKS87XG5ibG9jay5pdGVtID0gL14oICopKGJ1bGwpIFteXFxuXSooPzpcXG4oPyFcXDFidWxsIClbXlxcbl0qKSovO1xuYmxvY2suaXRlbSA9IHJlcGxhY2UoYmxvY2suaXRlbSwgJ2dtJylcbiAgKC9idWxsL2csIGJsb2NrLmJ1bGxldClcbiAgKCk7XG5cbmJsb2NrLmxpc3QgPSByZXBsYWNlKGJsb2NrLmxpc3QpXG4gICgvYnVsbC9nLCBibG9jay5idWxsZXQpXG4gICgnaHInLCAnXFxcXG4rKD89XFxcXDE/KD86Wy0qX10gKil7Myx9KD86XFxcXG4rfCQpKScpXG4gICgnZGVmJywgJ1xcXFxuKyg/PScgKyBibG9jay5kZWYuc291cmNlICsgJyknKVxuICAoKTtcblxuYmxvY2suYmxvY2txdW90ZSA9IHJlcGxhY2UoYmxvY2suYmxvY2txdW90ZSlcbiAgKCdkZWYnLCBibG9jay5kZWYpXG4gICgpO1xuXG5ibG9jay5fdGFnID0gJyg/ISg/OidcbiAgKyAnYXxlbXxzdHJvbmd8c21hbGx8c3xjaXRlfHF8ZGZufGFiYnJ8ZGF0YXx0aW1lfGNvZGUnXG4gICsgJ3x2YXJ8c2FtcHxrYmR8c3VifHN1cHxpfGJ8dXxtYXJrfHJ1Ynl8cnR8cnB8YmRpfGJkbydcbiAgKyAnfHNwYW58YnJ8d2JyfGluc3xkZWx8aW1nKVxcXFxiKVxcXFx3Kyg/ITovfFteXFxcXHdcXFxcc0BdKkApXFxcXGInO1xuXG5ibG9jay5odG1sID0gcmVwbGFjZShibG9jay5odG1sKVxuICAoJ2NvbW1lbnQnLCAvPCEtLVtcXHNcXFNdKj8tLT4vKVxuICAoJ2Nsb3NlZCcsIC88KHRhZylbXFxzXFxTXSs/PFxcL1xcMT4vKVxuICAoJ2Nsb3NpbmcnLCAvPHRhZyg/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXidcIj5dKSo/Pi8pXG4gICgvdGFnL2csIGJsb2NrLl90YWcpXG4gICgpO1xuXG5ibG9jay5wYXJhZ3JhcGggPSByZXBsYWNlKGJsb2NrLnBhcmFncmFwaClcbiAgKCdocicsIGJsb2NrLmhyKVxuICAoJ2hlYWRpbmcnLCBibG9jay5oZWFkaW5nKVxuICAoJ2xoZWFkaW5nJywgYmxvY2subGhlYWRpbmcpXG4gICgnYmxvY2txdW90ZScsIGJsb2NrLmJsb2NrcXVvdGUpXG4gICgndGFnJywgJzwnICsgYmxvY2suX3RhZylcbiAgKCdkZWYnLCBibG9jay5kZWYpXG4gICgpO1xuXG4vKipcbiAqIE5vcm1hbCBCbG9jayBHcmFtbWFyXG4gKi9cblxuYmxvY2subm9ybWFsID0gbWVyZ2Uoe30sIGJsb2NrKTtcblxuLyoqXG4gKiBHRk0gQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLmdmbSA9IG1lcmdlKHt9LCBibG9jay5ub3JtYWwsIHtcbiAgZmVuY2VzOiAvXiAqKGB7Myx9fH57Myx9KSAqKFxcUyspPyAqXFxuKFtcXHNcXFNdKz8pXFxzKlxcMSAqKD86XFxuK3wkKS8sXG4gIHBhcmFncmFwaDogL14vXG59KTtcblxuYmxvY2suZ2ZtLnBhcmFncmFwaCA9IHJlcGxhY2UoYmxvY2sucGFyYWdyYXBoKVxuICAoJyg/IScsICcoPyEnXG4gICAgKyBibG9jay5nZm0uZmVuY2VzLnNvdXJjZS5yZXBsYWNlKCdcXFxcMScsICdcXFxcMicpICsgJ3wnXG4gICAgKyBibG9jay5saXN0LnNvdXJjZS5yZXBsYWNlKCdcXFxcMScsICdcXFxcMycpICsgJ3wnKVxuICAoKTtcblxuLyoqXG4gKiBHRk0gKyBUYWJsZXMgQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLnRhYmxlcyA9IG1lcmdlKHt9LCBibG9jay5nZm0sIHtcbiAgbnB0YWJsZTogL14gKihcXFMuKlxcfC4qKVxcbiAqKFstOl0rICpcXHxbLXwgOl0qKVxcbigoPzouKlxcfC4qKD86XFxufCQpKSopXFxuKi8sXG4gIHRhYmxlOiAvXiAqXFx8KC4rKVxcbiAqXFx8KCAqWy06XStbLXwgOl0qKVxcbigoPzogKlxcfC4qKD86XFxufCQpKSopXFxuKi9cbn0pO1xuXG4vKipcbiAqIEJsb2NrIExleGVyXG4gKi9cblxuZnVuY3Rpb24gTGV4ZXIob3B0aW9ucykge1xuICB0aGlzLnRva2VucyA9IFtdO1xuICB0aGlzLnRva2Vucy5saW5rcyA9IHt9O1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbiAgdGhpcy5ydWxlcyA9IGJsb2NrLm5vcm1hbDtcblxuICBpZiAodGhpcy5vcHRpb25zLmdmbSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudGFibGVzKSB7XG4gICAgICB0aGlzLnJ1bGVzID0gYmxvY2sudGFibGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bGVzID0gYmxvY2suZ2ZtO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEV4cG9zZSBCbG9jayBSdWxlc1xuICovXG5cbkxleGVyLnJ1bGVzID0gYmxvY2s7XG5cbi8qKlxuICogU3RhdGljIExleCBNZXRob2RcbiAqL1xuXG5MZXhlci5sZXggPSBmdW5jdGlvbihzcmMsIG9wdGlvbnMpIHtcbiAgdmFyIGxleGVyID0gbmV3IExleGVyKG9wdGlvbnMpO1xuICByZXR1cm4gbGV4ZXIubGV4KHNyYyk7XG59O1xuXG4vKipcbiAqIFByZXByb2Nlc3NpbmdcbiAqL1xuXG5MZXhlci5wcm90b3R5cGUubGV4ID0gZnVuY3Rpb24oc3JjKSB7XG4gIHNyYyA9IHNyY1xuICAgIC5yZXBsYWNlKC9cXHJcXG58XFxyL2csICdcXG4nKVxuICAgIC5yZXBsYWNlKC9cXHQvZywgJyAgICAnKVxuICAgIC5yZXBsYWNlKC9cXHUwMGEwL2csICcgJylcbiAgICAucmVwbGFjZSgvXFx1MjQyNC9nLCAnXFxuJyk7XG5cbiAgcmV0dXJuIHRoaXMudG9rZW4oc3JjLCB0cnVlKTtcbn07XG5cbi8qKlxuICogTGV4aW5nXG4gKi9cblxuTGV4ZXIucHJvdG90eXBlLnRva2VuID0gZnVuY3Rpb24oc3JjLCB0b3AsIGJxKSB7XG4gIHZhciBzcmMgPSBzcmMucmVwbGFjZSgvXiArJC9nbSwgJycpXG4gICAgLCBuZXh0XG4gICAgLCBsb29zZVxuICAgICwgY2FwXG4gICAgLCBidWxsXG4gICAgLCBiXG4gICAgLCBpdGVtXG4gICAgLCBzcGFjZVxuICAgICwgaVxuICAgICwgbDtcblxuICB3aGlsZSAoc3JjKSB7XG4gICAgLy8gbmV3bGluZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLm5ld2xpbmUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgaWYgKGNhcFswXS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdzcGFjZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29kZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmNvZGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgY2FwID0gY2FwWzBdLnJlcGxhY2UoL14gezR9L2dtLCAnJyk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgICB0ZXh0OiAhdGhpcy5vcHRpb25zLnBlZGFudGljXG4gICAgICAgICAgPyBjYXAucmVwbGFjZSgvXFxuKyQvLCAnJylcbiAgICAgICAgICA6IGNhcFxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBmZW5jZXMgKGdmbSlcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5mZW5jZXMuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgbGFuZzogY2FwWzJdLFxuICAgICAgICB0ZXh0OiBjYXBbM11cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gaGVhZGluZ1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmhlYWRpbmcuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdoZWFkaW5nJyxcbiAgICAgICAgZGVwdGg6IGNhcFsxXS5sZW5ndGgsXG4gICAgICAgIHRleHQ6IGNhcFsyXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0YWJsZSBubyBsZWFkaW5nIHBpcGUgKGdmbSlcbiAgICBpZiAodG9wICYmIChjYXAgPSB0aGlzLnJ1bGVzLm5wdGFibGUuZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcblxuICAgICAgaXRlbSA9IHtcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgaGVhZGVyOiBjYXBbMV0ucmVwbGFjZSgvXiAqfCAqXFx8ICokL2csICcnKS5zcGxpdCgvICpcXHwgKi8pLFxuICAgICAgICBhbGlnbjogY2FwWzJdLnJlcGxhY2UoL14gKnxcXHwgKiQvZywgJycpLnNwbGl0KC8gKlxcfCAqLyksXG4gICAgICAgIGNlbGxzOiBjYXBbM10ucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJylcbiAgICAgIH07XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtLmFsaWduLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICgvXiAqLSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdyaWdodCc7XG4gICAgICAgIH0gZWxzZSBpZiAoL14gKjotKzogKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2NlbnRlcic7XG4gICAgICAgIH0gZWxzZSBpZiAoL14gKjotKyAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAnbGVmdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW0uY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbS5jZWxsc1tpXSA9IGl0ZW0uY2VsbHNbaV0uc3BsaXQoLyAqXFx8ICovKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b2tlbnMucHVzaChpdGVtKTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gbGhlYWRpbmdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5saGVhZGluZy5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgICAgICBkZXB0aDogY2FwWzJdID09PSAnPScgPyAxIDogMixcbiAgICAgICAgdGV4dDogY2FwWzFdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGhyXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaHIuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdocidcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gYmxvY2txdW90ZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrcXVvdGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2Jsb2NrcXVvdGVfc3RhcnQnXG4gICAgICB9KTtcblxuICAgICAgY2FwID0gY2FwWzBdLnJlcGxhY2UoL14gKj4gPy9nbSwgJycpO1xuXG4gICAgICAvLyBQYXNzIGB0b3BgIHRvIGtlZXAgdGhlIGN1cnJlbnRcbiAgICAgIC8vIFwidG9wbGV2ZWxcIiBzdGF0ZS4gVGhpcyBpcyBleGFjdGx5XG4gICAgICAvLyBob3cgbWFya2Rvd24ucGwgd29ya3MuXG4gICAgICB0aGlzLnRva2VuKGNhcCwgdG9wLCB0cnVlKTtcblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdibG9ja3F1b3RlX2VuZCdcbiAgICAgIH0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBsaXN0XG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubGlzdC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBidWxsID0gY2FwWzJdO1xuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpc3Rfc3RhcnQnLFxuICAgICAgICBvcmRlcmVkOiBidWxsLmxlbmd0aCA+IDFcbiAgICAgIH0pO1xuXG4gICAgICAvLyBHZXQgZWFjaCB0b3AtbGV2ZWwgaXRlbS5cbiAgICAgIGNhcCA9IGNhcFswXS5tYXRjaCh0aGlzLnJ1bGVzLml0ZW0pO1xuXG4gICAgICBuZXh0ID0gZmFsc2U7XG4gICAgICBsID0gY2FwLmxlbmd0aDtcbiAgICAgIGkgPSAwO1xuXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpdGVtID0gY2FwW2ldO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgbGlzdCBpdGVtJ3MgYnVsbGV0XG4gICAgICAgIC8vIHNvIGl0IGlzIHNlZW4gYXMgdGhlIG5leHQgdG9rZW4uXG4gICAgICAgIHNwYWNlID0gaXRlbS5sZW5ndGg7XG4gICAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoL14gKihbKistXXxcXGQrXFwuKSArLywgJycpO1xuXG4gICAgICAgIC8vIE91dGRlbnQgd2hhdGV2ZXIgdGhlXG4gICAgICAgIC8vIGxpc3QgaXRlbSBjb250YWlucy4gSGFja3kuXG4gICAgICAgIGlmICh+aXRlbS5pbmRleE9mKCdcXG4gJykpIHtcbiAgICAgICAgICBzcGFjZSAtPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgICBpdGVtID0gIXRoaXMub3B0aW9ucy5wZWRhbnRpY1xuICAgICAgICAgICAgPyBpdGVtLnJlcGxhY2UobmV3IFJlZ0V4cCgnXiB7MSwnICsgc3BhY2UgKyAnfScsICdnbScpLCAnJylcbiAgICAgICAgICAgIDogaXRlbS5yZXBsYWNlKC9eIHsxLDR9L2dtLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGUgbmV4dCBsaXN0IGl0ZW0gYmVsb25ncyBoZXJlLlxuICAgICAgICAvLyBCYWNrcGVkYWwgaWYgaXQgZG9lcyBub3QgYmVsb25nIGluIHRoaXMgbGlzdC5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zbWFydExpc3RzICYmIGkgIT09IGwgLSAxKSB7XG4gICAgICAgICAgYiA9IGJsb2NrLmJ1bGxldC5leGVjKGNhcFtpICsgMV0pWzBdO1xuICAgICAgICAgIGlmIChidWxsICE9PSBiICYmICEoYnVsbC5sZW5ndGggPiAxICYmIGIubGVuZ3RoID4gMSkpIHtcbiAgICAgICAgICAgIHNyYyA9IGNhcC5zbGljZShpICsgMSkuam9pbignXFxuJykgKyBzcmM7XG4gICAgICAgICAgICBpID0gbCAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgaXRlbSBpcyBsb29zZSBvciBub3QuXG4gICAgICAgIC8vIFVzZTogLyhefFxcbikoPyEgKVteXFxuXStcXG5cXG4oPyFcXHMqJCkvXG4gICAgICAgIC8vIGZvciBkaXNjb3VudCBiZWhhdmlvci5cbiAgICAgICAgbG9vc2UgPSBuZXh0IHx8IC9cXG5cXG4oPyFcXHMqJCkvLnRlc3QoaXRlbSk7XG4gICAgICAgIGlmIChpICE9PSBsIC0gMSkge1xuICAgICAgICAgIG5leHQgPSBpdGVtLmNoYXJBdChpdGVtLmxlbmd0aCAtIDEpID09PSAnXFxuJztcbiAgICAgICAgICBpZiAoIWxvb3NlKSBsb29zZSA9IG5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiBsb29zZVxuICAgICAgICAgICAgPyAnbG9vc2VfaXRlbV9zdGFydCdcbiAgICAgICAgICAgIDogJ2xpc3RfaXRlbV9zdGFydCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVjdXJzZS5cbiAgICAgICAgdGhpcy50b2tlbihpdGVtLCBmYWxzZSwgYnEpO1xuXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdsaXN0X2l0ZW1fZW5kJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaXN0X2VuZCdcbiAgICAgIH0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBodG1sXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaHRtbC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogdGhpcy5vcHRpb25zLnNhbml0aXplXG4gICAgICAgICAgPyAncGFyYWdyYXBoJ1xuICAgICAgICAgIDogJ2h0bWwnLFxuICAgICAgICBwcmU6IGNhcFsxXSA9PT0gJ3ByZScgfHwgY2FwWzFdID09PSAnc2NyaXB0JyB8fCBjYXBbMV0gPT09ICdzdHlsZScsXG4gICAgICAgIHRleHQ6IGNhcFswXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBkZWZcbiAgICBpZiAoKCFicSAmJiB0b3ApICYmIChjYXAgPSB0aGlzLnJ1bGVzLmRlZi5leGVjKHNyYykpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMubGlua3NbY2FwWzFdLnRvTG93ZXJDYXNlKCldID0ge1xuICAgICAgICBocmVmOiBjYXBbMl0sXG4gICAgICAgIHRpdGxlOiBjYXBbM11cbiAgICAgIH07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0YWJsZSAoZ2ZtKVxuICAgIGlmICh0b3AgJiYgKGNhcCA9IHRoaXMucnVsZXMudGFibGUuZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcblxuICAgICAgaXRlbSA9IHtcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgaGVhZGVyOiBjYXBbMV0ucmVwbGFjZSgvXiAqfCAqXFx8ICokL2csICcnKS5zcGxpdCgvICpcXHwgKi8pLFxuICAgICAgICBhbGlnbjogY2FwWzJdLnJlcGxhY2UoL14gKnxcXHwgKiQvZywgJycpLnNwbGl0KC8gKlxcfCAqLyksXG4gICAgICAgIGNlbGxzOiBjYXBbM10ucmVwbGFjZSgvKD86ICpcXHwgKik/XFxuJC8sICcnKS5zcGxpdCgnXFxuJylcbiAgICAgIH07XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtLmFsaWduLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICgvXiAqLSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdyaWdodCc7XG4gICAgICAgIH0gZWxzZSBpZiAoL14gKjotKzogKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2NlbnRlcic7XG4gICAgICAgIH0gZWxzZSBpZiAoL14gKjotKyAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAnbGVmdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW0uY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbS5jZWxsc1tpXSA9IGl0ZW0uY2VsbHNbaV1cbiAgICAgICAgICAucmVwbGFjZSgvXiAqXFx8ICp8ICpcXHwgKiQvZywgJycpXG4gICAgICAgICAgLnNwbGl0KC8gKlxcfCAqLyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG9rZW5zLnB1c2goaXRlbSk7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRvcC1sZXZlbCBwYXJhZ3JhcGhcbiAgICBpZiAodG9wICYmIChjYXAgPSB0aGlzLnJ1bGVzLnBhcmFncmFwaC5leGVjKHNyYykpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICB0ZXh0OiBjYXBbMV0uY2hhckF0KGNhcFsxXS5sZW5ndGggLSAxKSA9PT0gJ1xcbidcbiAgICAgICAgICA/IGNhcFsxXS5zbGljZSgwLCAtMSlcbiAgICAgICAgICA6IGNhcFsxXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0ZXh0XG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMudGV4dC5leGVjKHNyYykpIHtcbiAgICAgIC8vIFRvcC1sZXZlbCBzaG91bGQgbmV2ZXIgcmVhY2ggaGVyZS5cbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB0ZXh0OiBjYXBbMF1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHNyYykge1xuICAgICAgdGhyb3cgbmV3XG4gICAgICAgIEVycm9yKCdJbmZpbml0ZSBsb29wIG9uIGJ5dGU6ICcgKyBzcmMuY2hhckNvZGVBdCgwKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMudG9rZW5zO1xufTtcblxuLyoqXG4gKiBJbmxpbmUtTGV2ZWwgR3JhbW1hclxuICovXG5cbnZhciBpbmxpbmUgPSB7XG4gIGVzY2FwZTogL15cXFxcKFtcXFxcYCp7fVxcW1xcXSgpIytcXC0uIV8+XSkvLFxuICBhdXRvbGluazogL148KFteID5dKyhAfDpcXC8pW14gPl0rKT4vLFxuICB1cmw6IG5vb3AsXG4gIHRhZzogL148IS0tW1xcc1xcU10qPy0tPnxePFxcLz9cXHcrKD86XCJbXlwiXSpcInwnW14nXSonfFteJ1wiPl0pKj8+LyxcbiAgbGluazogL14hP1xcWyhpbnNpZGUpXFxdXFwoaHJlZlxcKS8sXG4gIHJlZmxpbms6IC9eIT9cXFsoaW5zaWRlKVxcXVxccypcXFsoW15cXF1dKilcXF0vLFxuICBub2xpbms6IC9eIT9cXFsoKD86XFxbW15cXF1dKlxcXXxbXlxcW1xcXV0pKilcXF0vLFxuICBzdHJvbmc6IC9eX18oW1xcc1xcU10rPylfXyg/IV8pfF5cXCpcXCooW1xcc1xcU10rPylcXCpcXCooPyFcXCopLyxcbiAgZW06IC9eXFxiXygoPzpfX3xbXFxzXFxTXSkrPylfXFxifF5cXCooKD86XFwqXFwqfFtcXHNcXFNdKSs/KVxcKig/IVxcKikvLFxuICBjb2RlOiAvXihgKylcXHMqKFtcXHNcXFNdKj9bXmBdKVxccypcXDEoPyFgKS8sXG4gIGJyOiAvXiB7Mix9XFxuKD8hXFxzKiQpLyxcbiAgZGVsOiBub29wLFxuICB0ZXh0OiAvXltcXHNcXFNdKz8oPz1bXFxcXDwhXFxbXypgXXwgezIsfVxcbnwkKS9cbn07XG5cbmlubGluZS5faW5zaWRlID0gLyg/OlxcW1teXFxdXSpcXF18W15cXFtcXF1dfFxcXSg/PVteXFxbXSpcXF0pKSovO1xuaW5saW5lLl9ocmVmID0gL1xccyo8PyhbXFxzXFxTXSo/KT4/KD86XFxzK1snXCJdKFtcXHNcXFNdKj8pWydcIl0pP1xccyovO1xuXG5pbmxpbmUubGluayA9IHJlcGxhY2UoaW5saW5lLmxpbmspXG4gICgnaW5zaWRlJywgaW5saW5lLl9pbnNpZGUpXG4gICgnaHJlZicsIGlubGluZS5faHJlZilcbiAgKCk7XG5cbmlubGluZS5yZWZsaW5rID0gcmVwbGFjZShpbmxpbmUucmVmbGluaylcbiAgKCdpbnNpZGUnLCBpbmxpbmUuX2luc2lkZSlcbiAgKCk7XG5cbi8qKlxuICogTm9ybWFsIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLm5vcm1hbCA9IG1lcmdlKHt9LCBpbmxpbmUpO1xuXG4vKipcbiAqIFBlZGFudGljIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLnBlZGFudGljID0gbWVyZ2Uoe30sIGlubGluZS5ub3JtYWwsIHtcbiAgc3Ryb25nOiAvXl9fKD89XFxTKShbXFxzXFxTXSo/XFxTKV9fKD8hXyl8XlxcKlxcKig/PVxcUykoW1xcc1xcU10qP1xcUylcXCpcXCooPyFcXCopLyxcbiAgZW06IC9eXyg/PVxcUykoW1xcc1xcU10qP1xcUylfKD8hXyl8XlxcKig/PVxcUykoW1xcc1xcU10qP1xcUylcXCooPyFcXCopL1xufSk7XG5cbi8qKlxuICogR0ZNIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLmdmbSA9IG1lcmdlKHt9LCBpbmxpbmUubm9ybWFsLCB7XG4gIGVzY2FwZTogcmVwbGFjZShpbmxpbmUuZXNjYXBlKSgnXSknLCAnfnxdKScpKCksXG4gIHVybDogL14oaHR0cHM/OlxcL1xcL1teXFxzPF0rW148Liw6O1wiJylcXF1cXHNdKS8sXG4gIGRlbDogL15+fig/PVxcUykoW1xcc1xcU10qP1xcUyl+fi8sXG4gIHRleHQ6IHJlcGxhY2UoaW5saW5lLnRleHQpXG4gICAgKCddfCcsICd+XXwnKVxuICAgICgnfCcsICd8aHR0cHM/Oi8vfCcpXG4gICAgKClcbn0pO1xuXG4vKipcbiAqIEdGTSArIExpbmUgQnJlYWtzIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLmJyZWFrcyA9IG1lcmdlKHt9LCBpbmxpbmUuZ2ZtLCB7XG4gIGJyOiByZXBsYWNlKGlubGluZS5icikoJ3syLH0nLCAnKicpKCksXG4gIHRleHQ6IHJlcGxhY2UoaW5saW5lLmdmbS50ZXh0KSgnezIsfScsICcqJykoKVxufSk7XG5cbi8qKlxuICogSW5saW5lIExleGVyICYgQ29tcGlsZXJcbiAqL1xuXG5mdW5jdGlvbiBJbmxpbmVMZXhlcihsaW5rcywgb3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbiAgdGhpcy5saW5rcyA9IGxpbmtzO1xuICB0aGlzLnJ1bGVzID0gaW5saW5lLm5vcm1hbDtcbiAgdGhpcy5yZW5kZXJlciA9IHRoaXMub3B0aW9ucy5yZW5kZXJlciB8fCBuZXcgUmVuZGVyZXI7XG4gIHRoaXMucmVuZGVyZXIub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICBpZiAoIXRoaXMubGlua3MpIHtcbiAgICB0aHJvdyBuZXdcbiAgICAgIEVycm9yKCdUb2tlbnMgYXJyYXkgcmVxdWlyZXMgYSBgbGlua3NgIHByb3BlcnR5LicpO1xuICB9XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5nZm0pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmJyZWFrcykge1xuICAgICAgdGhpcy5ydWxlcyA9IGlubGluZS5icmVha3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucnVsZXMgPSBpbmxpbmUuZ2ZtO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMucGVkYW50aWMpIHtcbiAgICB0aGlzLnJ1bGVzID0gaW5saW5lLnBlZGFudGljO1xuICB9XG59XG5cbi8qKlxuICogRXhwb3NlIElubGluZSBSdWxlc1xuICovXG5cbklubGluZUxleGVyLnJ1bGVzID0gaW5saW5lO1xuXG4vKipcbiAqIFN0YXRpYyBMZXhpbmcvQ29tcGlsaW5nIE1ldGhvZFxuICovXG5cbklubGluZUxleGVyLm91dHB1dCA9IGZ1bmN0aW9uKHNyYywgbGlua3MsIG9wdGlvbnMpIHtcbiAgdmFyIGlubGluZSA9IG5ldyBJbmxpbmVMZXhlcihsaW5rcywgb3B0aW9ucyk7XG4gIHJldHVybiBpbmxpbmUub3V0cHV0KHNyYyk7XG59O1xuXG4vKipcbiAqIExleGluZy9Db21waWxpbmdcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUub3V0cHV0ID0gZnVuY3Rpb24oc3JjKSB7XG4gIHZhciBvdXQgPSAnJ1xuICAgICwgbGlua1xuICAgICwgdGV4dFxuICAgICwgaHJlZlxuICAgICwgY2FwO1xuXG4gIHdoaWxlIChzcmMpIHtcbiAgICAvLyBlc2NhcGVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5lc2NhcGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IGNhcFsxXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGF1dG9saW5rXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuYXV0b2xpbmsuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgaWYgKGNhcFsyXSA9PT0gJ0AnKSB7XG4gICAgICAgIHRleHQgPSBjYXBbMV0uY2hhckF0KDYpID09PSAnOidcbiAgICAgICAgICA/IHRoaXMubWFuZ2xlKGNhcFsxXS5zdWJzdHJpbmcoNykpXG4gICAgICAgICAgOiB0aGlzLm1hbmdsZShjYXBbMV0pO1xuICAgICAgICBocmVmID0gdGhpcy5tYW5nbGUoJ21haWx0bzonKSArIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ID0gZXNjYXBlKGNhcFsxXSk7XG4gICAgICAgIGhyZWYgPSB0ZXh0O1xuICAgICAgfVxuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIubGluayhocmVmLCBudWxsLCB0ZXh0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHVybCAoZ2ZtKVxuICAgIGlmICghdGhpcy5pbkxpbmsgJiYgKGNhcCA9IHRoaXMucnVsZXMudXJsLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0ZXh0ID0gZXNjYXBlKGNhcFsxXSk7XG4gICAgICBocmVmID0gdGV4dDtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmxpbmsoaHJlZiwgbnVsbCwgdGV4dCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0YWdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy50YWcuZXhlYyhzcmMpKSB7XG4gICAgICBpZiAoIXRoaXMuaW5MaW5rICYmIC9ePGEgL2kudGVzdChjYXBbMF0pKSB7XG4gICAgICAgIHRoaXMuaW5MaW5rID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbkxpbmsgJiYgL148XFwvYT4vaS50ZXN0KGNhcFswXSkpIHtcbiAgICAgICAgdGhpcy5pbkxpbmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5vcHRpb25zLnNhbml0aXplXG4gICAgICAgID8gZXNjYXBlKGNhcFswXSlcbiAgICAgICAgOiBjYXBbMF07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBsaW5rXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubGluay5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLmluTGluayA9IHRydWU7XG4gICAgICBvdXQgKz0gdGhpcy5vdXRwdXRMaW5rKGNhcCwge1xuICAgICAgICBocmVmOiBjYXBbMl0sXG4gICAgICAgIHRpdGxlOiBjYXBbM11cbiAgICAgIH0pO1xuICAgICAgdGhpcy5pbkxpbmsgPSBmYWxzZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHJlZmxpbmssIG5vbGlua1xuICAgIGlmICgoY2FwID0gdGhpcy5ydWxlcy5yZWZsaW5rLmV4ZWMoc3JjKSlcbiAgICAgICAgfHwgKGNhcCA9IHRoaXMucnVsZXMubm9saW5rLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBsaW5rID0gKGNhcFsyXSB8fCBjYXBbMV0pLnJlcGxhY2UoL1xccysvZywgJyAnKTtcbiAgICAgIGxpbmsgPSB0aGlzLmxpbmtzW2xpbmsudG9Mb3dlckNhc2UoKV07XG4gICAgICBpZiAoIWxpbmsgfHwgIWxpbmsuaHJlZikge1xuICAgICAgICBvdXQgKz0gY2FwWzBdLmNoYXJBdCgwKTtcbiAgICAgICAgc3JjID0gY2FwWzBdLnN1YnN0cmluZygxKSArIHNyYztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB0aGlzLmluTGluayA9IHRydWU7XG4gICAgICBvdXQgKz0gdGhpcy5vdXRwdXRMaW5rKGNhcCwgbGluayk7XG4gICAgICB0aGlzLmluTGluayA9IGZhbHNlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gc3Ryb25nXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuc3Ryb25nLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLnN0cm9uZyh0aGlzLm91dHB1dChjYXBbMl0gfHwgY2FwWzFdKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBlbVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmVtLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmVtKHRoaXMub3V0cHV0KGNhcFsyXSB8fCBjYXBbMV0pKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGNvZGVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5jb2RlLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmNvZGVzcGFuKGVzY2FwZShjYXBbMl0sIHRydWUpKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGJyXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuYnIuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuYnIoKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGRlbCAoZ2ZtKVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmRlbC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5kZWwodGhpcy5vdXRwdXQoY2FwWzFdKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0ZXh0XG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMudGV4dC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gZXNjYXBlKHRoaXMuc21hcnR5cGFudHMoY2FwWzBdKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3JjKSB7XG4gICAgICB0aHJvdyBuZXdcbiAgICAgICAgRXJyb3IoJ0luZmluaXRlIGxvb3Agb24gYnl0ZTogJyArIHNyYy5jaGFyQ29kZUF0KDApKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBDb21waWxlIExpbmtcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUub3V0cHV0TGluayA9IGZ1bmN0aW9uKGNhcCwgbGluaykge1xuICB2YXIgaHJlZiA9IGVzY2FwZShsaW5rLmhyZWYpXG4gICAgLCB0aXRsZSA9IGxpbmsudGl0bGUgPyBlc2NhcGUobGluay50aXRsZSkgOiBudWxsO1xuXG4gIHJldHVybiBjYXBbMF0uY2hhckF0KDApICE9PSAnISdcbiAgICA/IHRoaXMucmVuZGVyZXIubGluayhocmVmLCB0aXRsZSwgdGhpcy5vdXRwdXQoY2FwWzFdKSlcbiAgICA6IHRoaXMucmVuZGVyZXIuaW1hZ2UoaHJlZiwgdGl0bGUsIGVzY2FwZShjYXBbMV0pKTtcbn07XG5cbi8qKlxuICogU21hcnR5cGFudHMgVHJhbnNmb3JtYXRpb25zXG4gKi9cblxuSW5saW5lTGV4ZXIucHJvdG90eXBlLnNtYXJ0eXBhbnRzID0gZnVuY3Rpb24odGV4dCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5zbWFydHlwYW50cykgcmV0dXJuIHRleHQ7XG4gIHJldHVybiB0ZXh0XG4gICAgLy8gZW0tZGFzaGVzXG4gICAgLnJlcGxhY2UoLy0tL2csICdcXHUyMDE0JylcbiAgICAvLyBvcGVuaW5nIHNpbmdsZXNcbiAgICAucmVwbGFjZSgvKF58Wy1cXHUyMDE0LyhcXFt7XCJcXHNdKScvZywgJyQxXFx1MjAxOCcpXG4gICAgLy8gY2xvc2luZyBzaW5nbGVzICYgYXBvc3Ryb3BoZXNcbiAgICAucmVwbGFjZSgvJy9nLCAnXFx1MjAxOScpXG4gICAgLy8gb3BlbmluZyBkb3VibGVzXG4gICAgLnJlcGxhY2UoLyhefFstXFx1MjAxNC8oXFxbe1xcdTIwMThcXHNdKVwiL2csICckMVxcdTIwMWMnKVxuICAgIC8vIGNsb3NpbmcgZG91Ymxlc1xuICAgIC5yZXBsYWNlKC9cIi9nLCAnXFx1MjAxZCcpXG4gICAgLy8gZWxsaXBzZXNcbiAgICAucmVwbGFjZSgvXFwuezN9L2csICdcXHUyMDI2Jyk7XG59O1xuXG4vKipcbiAqIE1hbmdsZSBMaW5rc1xuICovXG5cbklubGluZUxleGVyLnByb3RvdHlwZS5tYW5nbGUgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHZhciBvdXQgPSAnJ1xuICAgICwgbCA9IHRleHQubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgY2g7XG5cbiAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICBjaCA9IHRleHQuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgY2ggPSAneCcgKyBjaC50b1N0cmluZygxNik7XG4gICAgfVxuICAgIG91dCArPSAnJiMnICsgY2ggKyAnOyc7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBSZW5kZXJlclxuICovXG5cbmZ1bmN0aW9uIFJlbmRlcmVyKG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbn1cblxuUmVuZGVyZXIucHJvdG90eXBlLmNvZGUgPSBmdW5jdGlvbihjb2RlLCBsYW5nLCBlc2NhcGVkKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KSB7XG4gICAgdmFyIG91dCA9IHRoaXMub3B0aW9ucy5oaWdobGlnaHQoY29kZSwgbGFuZyk7XG4gICAgaWYgKG91dCAhPSBudWxsICYmIG91dCAhPT0gY29kZSkge1xuICAgICAgZXNjYXBlZCA9IHRydWU7XG4gICAgICBjb2RlID0gb3V0O1xuICAgIH1cbiAgfVxuXG4gIGlmICghbGFuZykge1xuICAgIHJldHVybiAnPHByZT48Y29kZT4nXG4gICAgICArIChlc2NhcGVkID8gY29kZSA6IGVzY2FwZShjb2RlLCB0cnVlKSlcbiAgICAgICsgJ1xcbjwvY29kZT48L3ByZT4nO1xuICB9XG5cbiAgcmV0dXJuICc8cHJlPjxjb2RlIGNsYXNzPVwiJ1xuICAgICsgdGhpcy5vcHRpb25zLmxhbmdQcmVmaXhcbiAgICArIGVzY2FwZShsYW5nLCB0cnVlKVxuICAgICsgJ1wiPidcbiAgICArIChlc2NhcGVkID8gY29kZSA6IGVzY2FwZShjb2RlLCB0cnVlKSlcbiAgICArICdcXG48L2NvZGU+PC9wcmU+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5ibG9ja3F1b3RlID0gZnVuY3Rpb24ocXVvdGUpIHtcbiAgcmV0dXJuICc8YmxvY2txdW90ZT5cXG4nICsgcXVvdGUgKyAnPC9ibG9ja3F1b3RlPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgcmV0dXJuIGh0bWw7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaGVhZGluZyA9IGZ1bmN0aW9uKHRleHQsIGxldmVsLCByYXcpIHtcbiAgcmV0dXJuICc8aCdcbiAgICArIGxldmVsXG4gICAgKyAnIGlkPVwiJ1xuICAgICsgdGhpcy5vcHRpb25zLmhlYWRlclByZWZpeFxuICAgICsgcmF3LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15cXHddKy9nLCAnLScpXG4gICAgKyAnXCI+J1xuICAgICsgdGV4dFxuICAgICsgJzwvaCdcbiAgICArIGxldmVsXG4gICAgKyAnPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaHIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub3B0aW9ucy54aHRtbCA/ICc8aHIvPlxcbicgOiAnPGhyPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uKGJvZHksIG9yZGVyZWQpIHtcbiAgdmFyIHR5cGUgPSBvcmRlcmVkID8gJ29sJyA6ICd1bCc7XG4gIHJldHVybiAnPCcgKyB0eXBlICsgJz5cXG4nICsgYm9keSArICc8LycgKyB0eXBlICsgJz5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmxpc3RpdGVtID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxsaT4nICsgdGV4dCArICc8L2xpPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUucGFyYWdyYXBoID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxwPicgKyB0ZXh0ICsgJzwvcD5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnRhYmxlID0gZnVuY3Rpb24oaGVhZGVyLCBib2R5KSB7XG4gIHJldHVybiAnPHRhYmxlPlxcbidcbiAgICArICc8dGhlYWQ+XFxuJ1xuICAgICsgaGVhZGVyXG4gICAgKyAnPC90aGVhZD5cXG4nXG4gICAgKyAnPHRib2R5PlxcbidcbiAgICArIGJvZHlcbiAgICArICc8L3Rib2R5PlxcbidcbiAgICArICc8L3RhYmxlPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUudGFibGVyb3cgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gIHJldHVybiAnPHRyPlxcbicgKyBjb250ZW50ICsgJzwvdHI+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS50YWJsZWNlbGwgPSBmdW5jdGlvbihjb250ZW50LCBmbGFncykge1xuICB2YXIgdHlwZSA9IGZsYWdzLmhlYWRlciA/ICd0aCcgOiAndGQnO1xuICB2YXIgdGFnID0gZmxhZ3MuYWxpZ25cbiAgICA/ICc8JyArIHR5cGUgKyAnIHN0eWxlPVwidGV4dC1hbGlnbjonICsgZmxhZ3MuYWxpZ24gKyAnXCI+J1xuICAgIDogJzwnICsgdHlwZSArICc+JztcbiAgcmV0dXJuIHRhZyArIGNvbnRlbnQgKyAnPC8nICsgdHlwZSArICc+XFxuJztcbn07XG5cbi8vIHNwYW4gbGV2ZWwgcmVuZGVyZXJcblJlbmRlcmVyLnByb3RvdHlwZS5zdHJvbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPHN0cm9uZz4nICsgdGV4dCArICc8L3N0cm9uZz4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmVtID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxlbT4nICsgdGV4dCArICc8L2VtPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuY29kZXNwYW4gPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPGNvZGU+JyArIHRleHQgKyAnPC9jb2RlPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuYnIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub3B0aW9ucy54aHRtbCA/ICc8YnIvPicgOiAnPGJyPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuZGVsID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxkZWw+JyArIHRleHQgKyAnPC9kZWw+Jztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24oaHJlZiwgdGl0bGUsIHRleHQpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5zYW5pdGl6ZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcHJvdCA9IGRlY29kZVVSSUNvbXBvbmVudCh1bmVzY2FwZShocmVmKSlcbiAgICAgICAgLnJlcGxhY2UoL1teXFx3Ol0vZywgJycpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKHByb3QuaW5kZXhPZignamF2YXNjcmlwdDonKSA9PT0gMCB8fCBwcm90LmluZGV4T2YoJ3Zic2NyaXB0OicpID09PSAwKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG4gIHZhciBvdXQgPSAnPGEgaHJlZj1cIicgKyBocmVmICsgJ1wiJztcbiAgaWYgKHRpdGxlKSB7XG4gICAgb3V0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICB9XG4gIG91dCArPSAnPicgKyB0ZXh0ICsgJzwvYT4nO1xuICByZXR1cm4gb3V0O1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmltYWdlID0gZnVuY3Rpb24oaHJlZiwgdGl0bGUsIHRleHQpIHtcbiAgdmFyIG91dCA9ICc8aW1nIHNyYz1cIicgKyBocmVmICsgJ1wiIGFsdD1cIicgKyB0ZXh0ICsgJ1wiJztcbiAgaWYgKHRpdGxlKSB7XG4gICAgb3V0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICB9XG4gIG91dCArPSB0aGlzLm9wdGlvbnMueGh0bWwgPyAnLz4nIDogJz4nO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBQYXJzaW5nICYgQ29tcGlsaW5nXG4gKi9cblxuZnVuY3Rpb24gUGFyc2VyKG9wdGlvbnMpIHtcbiAgdGhpcy50b2tlbnMgPSBbXTtcbiAgdGhpcy50b2tlbiA9IG51bGw7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgbWFya2VkLmRlZmF1bHRzO1xuICB0aGlzLm9wdGlvbnMucmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMucmVuZGVyZXIgfHwgbmV3IFJlbmRlcmVyO1xuICB0aGlzLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyO1xuICB0aGlzLnJlbmRlcmVyLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG59XG5cbi8qKlxuICogU3RhdGljIFBhcnNlIE1ldGhvZFxuICovXG5cblBhcnNlci5wYXJzZSA9IGZ1bmN0aW9uKHNyYywgb3B0aW9ucywgcmVuZGVyZXIpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIob3B0aW9ucywgcmVuZGVyZXIpO1xuICByZXR1cm4gcGFyc2VyLnBhcnNlKHNyYyk7XG59O1xuXG4vKipcbiAqIFBhcnNlIExvb3BcbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oc3JjKSB7XG4gIHRoaXMuaW5saW5lID0gbmV3IElubGluZUxleGVyKHNyYy5saW5rcywgdGhpcy5vcHRpb25zLCB0aGlzLnJlbmRlcmVyKTtcbiAgdGhpcy50b2tlbnMgPSBzcmMucmV2ZXJzZSgpO1xuXG4gIHZhciBvdXQgPSAnJztcbiAgd2hpbGUgKHRoaXMubmV4dCgpKSB7XG4gICAgb3V0ICs9IHRoaXMudG9rKCk7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBOZXh0IFRva2VuXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRva2VuID0gdGhpcy50b2tlbnMucG9wKCk7XG59O1xuXG4vKipcbiAqIFByZXZpZXcgTmV4dCBUb2tlblxuICovXG5cblBhcnNlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy50b2tlbnMubGVuZ3RoIC0gMV0gfHwgMDtcbn07XG5cbi8qKlxuICogUGFyc2UgVGV4dCBUb2tlbnNcbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYm9keSA9IHRoaXMudG9rZW4udGV4dDtcblxuICB3aGlsZSAodGhpcy5wZWVrKCkudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgYm9keSArPSAnXFxuJyArIHRoaXMubmV4dCgpLnRleHQ7XG4gIH1cblxuICByZXR1cm4gdGhpcy5pbmxpbmUub3V0cHV0KGJvZHkpO1xufTtcblxuLyoqXG4gKiBQYXJzZSBDdXJyZW50IFRva2VuXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS50b2sgPSBmdW5jdGlvbigpIHtcbiAgc3dpdGNoICh0aGlzLnRva2VuLnR5cGUpIHtcbiAgICBjYXNlICdzcGFjZSc6IHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY2FzZSAnaHInOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5ocigpO1xuICAgIH1cbiAgICBjYXNlICdoZWFkaW5nJzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuaGVhZGluZyhcbiAgICAgICAgdGhpcy5pbmxpbmUub3V0cHV0KHRoaXMudG9rZW4udGV4dCksXG4gICAgICAgIHRoaXMudG9rZW4uZGVwdGgsXG4gICAgICAgIHRoaXMudG9rZW4udGV4dCk7XG4gICAgfVxuICAgIGNhc2UgJ2NvZGUnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5jb2RlKHRoaXMudG9rZW4udGV4dCxcbiAgICAgICAgdGhpcy50b2tlbi5sYW5nLFxuICAgICAgICB0aGlzLnRva2VuLmVzY2FwZWQpO1xuICAgIH1cbiAgICBjYXNlICd0YWJsZSc6IHtcbiAgICAgIHZhciBoZWFkZXIgPSAnJ1xuICAgICAgICAsIGJvZHkgPSAnJ1xuICAgICAgICAsIGlcbiAgICAgICAgLCByb3dcbiAgICAgICAgLCBjZWxsXG4gICAgICAgICwgZmxhZ3NcbiAgICAgICAgLCBqO1xuXG4gICAgICAvLyBoZWFkZXJcbiAgICAgIGNlbGwgPSAnJztcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRva2VuLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBmbGFncyA9IHsgaGVhZGVyOiB0cnVlLCBhbGlnbjogdGhpcy50b2tlbi5hbGlnbltpXSB9O1xuICAgICAgICBjZWxsICs9IHRoaXMucmVuZGVyZXIudGFibGVjZWxsKFxuICAgICAgICAgIHRoaXMuaW5saW5lLm91dHB1dCh0aGlzLnRva2VuLmhlYWRlcltpXSksXG4gICAgICAgICAgeyBoZWFkZXI6IHRydWUsIGFsaWduOiB0aGlzLnRva2VuLmFsaWduW2ldIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGhlYWRlciArPSB0aGlzLnJlbmRlcmVyLnRhYmxlcm93KGNlbGwpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy50b2tlbi5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICByb3cgPSB0aGlzLnRva2VuLmNlbGxzW2ldO1xuXG4gICAgICAgIGNlbGwgPSAnJztcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNlbGwgKz0gdGhpcy5yZW5kZXJlci50YWJsZWNlbGwoXG4gICAgICAgICAgICB0aGlzLmlubGluZS5vdXRwdXQocm93W2pdKSxcbiAgICAgICAgICAgIHsgaGVhZGVyOiBmYWxzZSwgYWxpZ246IHRoaXMudG9rZW4uYWxpZ25bal0gfVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5ICs9IHRoaXMucmVuZGVyZXIudGFibGVyb3coY2VsbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci50YWJsZShoZWFkZXIsIGJvZHkpO1xuICAgIH1cbiAgICBjYXNlICdibG9ja3F1b3RlX3N0YXJ0Jzoge1xuICAgICAgdmFyIGJvZHkgPSAnJztcblxuICAgICAgd2hpbGUgKHRoaXMubmV4dCgpLnR5cGUgIT09ICdibG9ja3F1b3RlX2VuZCcpIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5ibG9ja3F1b3RlKGJvZHkpO1xuICAgIH1cbiAgICBjYXNlICdsaXN0X3N0YXJ0Jzoge1xuICAgICAgdmFyIGJvZHkgPSAnJ1xuICAgICAgICAsIG9yZGVyZWQgPSB0aGlzLnRva2VuLm9yZGVyZWQ7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnbGlzdF9lbmQnKSB7XG4gICAgICAgIGJvZHkgKz0gdGhpcy50b2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdChib2R5LCBvcmRlcmVkKTtcbiAgICB9XG4gICAgY2FzZSAnbGlzdF9pdGVtX3N0YXJ0Jzoge1xuICAgICAgdmFyIGJvZHkgPSAnJztcblxuICAgICAgd2hpbGUgKHRoaXMubmV4dCgpLnR5cGUgIT09ICdsaXN0X2l0ZW1fZW5kJykge1xuICAgICAgICBib2R5ICs9IHRoaXMudG9rZW4udHlwZSA9PT0gJ3RleHQnXG4gICAgICAgICAgPyB0aGlzLnBhcnNlVGV4dCgpXG4gICAgICAgICAgOiB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5saXN0aXRlbShib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnbG9vc2VfaXRlbV9zdGFydCc6IHtcbiAgICAgIHZhciBib2R5ID0gJyc7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnbGlzdF9pdGVtX2VuZCcpIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5saXN0aXRlbShib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnaHRtbCc6IHtcbiAgICAgIHZhciBodG1sID0gIXRoaXMudG9rZW4ucHJlICYmICF0aGlzLm9wdGlvbnMucGVkYW50aWNcbiAgICAgICAgPyB0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi50ZXh0KVxuICAgICAgICA6IHRoaXMudG9rZW4udGV4dDtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmh0bWwoaHRtbCk7XG4gICAgfVxuICAgIGNhc2UgJ3BhcmFncmFwaCc6IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBhcmFncmFwaCh0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi50ZXh0KSk7XG4gICAgfVxuICAgIGNhc2UgJ3RleHQnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wYXJhZ3JhcGgodGhpcy5wYXJzZVRleHQoKSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEhlbHBlcnNcbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoaHRtbCwgZW5jb2RlKSB7XG4gIHJldHVybiBodG1sXG4gICAgLnJlcGxhY2UoIWVuY29kZSA/IC8mKD8hIz9cXHcrOykvZyA6IC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyYjMzk7Jyk7XG59XG5cbmZ1bmN0aW9uIHVuZXNjYXBlKGh0bWwpIHtcbiAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJihbI1xcd10rKTsvZywgZnVuY3Rpb24oXywgbikge1xuICAgIG4gPSBuLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG4gPT09ICdjb2xvbicpIHJldHVybiAnOic7XG4gICAgaWYgKG4uY2hhckF0KDApID09PSAnIycpIHtcbiAgICAgIHJldHVybiBuLmNoYXJBdCgxKSA9PT0gJ3gnXG4gICAgICAgID8gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChuLnN1YnN0cmluZygyKSwgMTYpKVxuICAgICAgICA6IFN0cmluZy5mcm9tQ2hhckNvZGUoK24uc3Vic3RyaW5nKDEpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShyZWdleCwgb3B0KSB7XG4gIHJlZ2V4ID0gcmVnZXguc291cmNlO1xuICBvcHQgPSBvcHQgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbiBzZWxmKG5hbWUsIHZhbCkge1xuICAgIGlmICghbmFtZSkgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXgsIG9wdCk7XG4gICAgdmFsID0gdmFsLnNvdXJjZSB8fCB2YWw7XG4gICAgdmFsID0gdmFsLnJlcGxhY2UoLyhefFteXFxbXSlcXF4vZywgJyQxJyk7XG4gICAgcmVnZXggPSByZWdleC5yZXBsYWNlKG5hbWUsIHZhbCk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxubm9vcC5leGVjID0gbm9vcDtcblxuZnVuY3Rpb24gbWVyZ2Uob2JqKSB7XG4gIHZhciBpID0gMVxuICAgICwgdGFyZ2V0XG4gICAgLCBrZXk7XG5cbiAgZm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB0YXJnZXQgPSBhcmd1bWVudHNbaV07XG4gICAgZm9yIChrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSkge1xuICAgICAgICBvYmpba2V5XSA9IHRhcmdldFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cblxuLyoqXG4gKiBNYXJrZWRcbiAqL1xuXG5mdW5jdGlvbiBtYXJrZWQoc3JjLCBvcHQsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayB8fCB0eXBlb2Ygb3B0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sgPSBvcHQ7XG4gICAgICBvcHQgPSBudWxsO1xuICAgIH1cblxuICAgIG9wdCA9IG1lcmdlKHt9LCBtYXJrZWQuZGVmYXVsdHMsIG9wdCB8fCB7fSk7XG5cbiAgICB2YXIgaGlnaGxpZ2h0ID0gb3B0LmhpZ2hsaWdodFxuICAgICAgLCB0b2tlbnNcbiAgICAgICwgcGVuZGluZ1xuICAgICAgLCBpID0gMDtcblxuICAgIHRyeSB7XG4gICAgICB0b2tlbnMgPSBMZXhlci5sZXgoc3JjLCBvcHQpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGUpO1xuICAgIH1cblxuICAgIHBlbmRpbmcgPSB0b2tlbnMubGVuZ3RoO1xuXG4gICAgdmFyIGRvbmUgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgb3B0LmhpZ2hsaWdodCA9IGhpZ2hsaWdodDtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICB9XG5cbiAgICAgIHZhciBvdXQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIG91dCA9IFBhcnNlci5wYXJzZSh0b2tlbnMsIG9wdCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVyciA9IGU7XG4gICAgICB9XG5cbiAgICAgIG9wdC5oaWdobGlnaHQgPSBoaWdobGlnaHQ7XG5cbiAgICAgIHJldHVybiBlcnJcbiAgICAgICAgPyBjYWxsYmFjayhlcnIpXG4gICAgICAgIDogY2FsbGJhY2sobnVsbCwgb3V0KTtcbiAgICB9O1xuXG4gICAgaWYgKCFoaWdobGlnaHQgfHwgaGlnaGxpZ2h0Lmxlbmd0aCA8IDMpIHtcbiAgICAgIHJldHVybiBkb25lKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlIG9wdC5oaWdobGlnaHQ7XG5cbiAgICBpZiAoIXBlbmRpbmcpIHJldHVybiBkb25lKCk7XG5cbiAgICBmb3IgKDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIGlmICh0b2tlbi50eXBlICE9PSAnY29kZScpIHtcbiAgICAgICAgICByZXR1cm4gLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGlnaGxpZ2h0KHRva2VuLnRleHQsIHRva2VuLmxhbmcsIGZ1bmN0aW9uKGVyciwgY29kZSkge1xuICAgICAgICAgIGlmIChlcnIpIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgaWYgKGNvZGUgPT0gbnVsbCB8fCBjb2RlID09PSB0b2tlbi50ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9rZW4udGV4dCA9IGNvZGU7XG4gICAgICAgICAgdG9rZW4uZXNjYXBlZCA9IHRydWU7XG4gICAgICAgICAgLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSh0b2tlbnNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHQpIG9wdCA9IG1lcmdlKHt9LCBtYXJrZWQuZGVmYXVsdHMsIG9wdCk7XG4gICAgcmV0dXJuIFBhcnNlci5wYXJzZShMZXhlci5sZXgoc3JjLCBvcHQpLCBvcHQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZS5tZXNzYWdlICs9ICdcXG5QbGVhc2UgcmVwb3J0IHRoaXMgdG8gaHR0cHM6Ly9naXRodWIuY29tL2NoamovbWFya2VkLic7XG4gICAgaWYgKChvcHQgfHwgbWFya2VkLmRlZmF1bHRzKS5zaWxlbnQpIHtcbiAgICAgIHJldHVybiAnPHA+QW4gZXJyb3Igb2NjdXJlZDo8L3A+PHByZT4nXG4gICAgICAgICsgZXNjYXBlKGUubWVzc2FnZSArICcnLCB0cnVlKVxuICAgICAgICArICc8L3ByZT4nO1xuICAgIH1cbiAgICB0aHJvdyBlO1xuICB9XG59XG5cbi8qKlxuICogT3B0aW9uc1xuICovXG5cbm1hcmtlZC5vcHRpb25zID1cbm1hcmtlZC5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0KSB7XG4gIG1lcmdlKG1hcmtlZC5kZWZhdWx0cywgb3B0KTtcbiAgcmV0dXJuIG1hcmtlZDtcbn07XG5cbm1hcmtlZC5kZWZhdWx0cyA9IHtcbiAgZ2ZtOiB0cnVlLFxuICB0YWJsZXM6IHRydWUsXG4gIGJyZWFrczogZmFsc2UsXG4gIHBlZGFudGljOiBmYWxzZSxcbiAgc2FuaXRpemU6IGZhbHNlLFxuICBzbWFydExpc3RzOiBmYWxzZSxcbiAgc2lsZW50OiBmYWxzZSxcbiAgaGlnaGxpZ2h0OiBudWxsLFxuICBsYW5nUHJlZml4OiAnbGFuZy0nLFxuICBzbWFydHlwYW50czogZmFsc2UsXG4gIGhlYWRlclByZWZpeDogJycsXG4gIHJlbmRlcmVyOiBuZXcgUmVuZGVyZXIsXG4gIHhodG1sOiBmYWxzZVxufTtcblxuLyoqXG4gKiBFeHBvc2VcbiAqL1xuXG5tYXJrZWQuUGFyc2VyID0gUGFyc2VyO1xubWFya2VkLnBhcnNlciA9IFBhcnNlci5wYXJzZTtcblxubWFya2VkLlJlbmRlcmVyID0gUmVuZGVyZXI7XG5cbm1hcmtlZC5MZXhlciA9IExleGVyO1xubWFya2VkLmxleGVyID0gTGV4ZXIubGV4O1xuXG5tYXJrZWQuSW5saW5lTGV4ZXIgPSBJbmxpbmVMZXhlcjtcbm1hcmtlZC5pbmxpbmVMZXhlciA9IElubGluZUxleGVyLm91dHB1dDtcblxubWFya2VkLnBhcnNlID0gbWFya2VkO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gbWFya2VkO1xufSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gbWFya2VkOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMubWFya2VkID0gbWFya2VkO1xufVxuXG59KS5jYWxsKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpO1xufSgpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gVG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciBrZXlzO1xuXHR2YXIgdG8gPSBUb09iamVjdCh0YXJnZXQpO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IGFyZ3VtZW50c1tzXTtcblx0XHRrZXlzID0gT2JqZWN0LmtleXMoT2JqZWN0KGZyb20pKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dG9ba2V5c1tpXV0gPSBmcm9tW2tleXNbaV1dO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBCYWNvbiBmcm9tICdiYWNvbmpzJztcbmltcG9ydCB1dGlsICBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBBVFRSX0JBQ0tGQUNFICA9ICdiYWNrZmFjZSc7XG5jb25zdCBBVFRSX0ZJTFRFUiAgICA9ICdiYWNrZmFjZS1maWx0ZXInO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJhY2tmYWNlUmV0dXJuc1xuICogQHByb3BlcnR5IHtCYWNvbi5CdXN9IGJnSW1hZ2VCdXNcbiAqIEBwcm9wZXJ0eSB7QmFjb24uQnVzfSBiZ0ZpbHRlckJ1c1xuICovXG5cbi8qKlxuICogYmFja2ZhY2VcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICogQHJldHVybnMge0JhY2tmYWNlUmV0dXJuc31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odGFyZ2V0KSB7XG5cbiAgbGV0IGJnSW1hZ2VCdXMgPSBuZXcgQmFjb24uQnVzKCk7XG4gIGxldCBiZ0ZpbHRlckJ1cyA9IG5ldyBCYWNvbi5CdXMoKTtcblxuICAvLyBiYWNrZmFjZSBpbWFnZVxuICBiZ0ltYWdlQnVzXG4gICAgLm1hcCgnLmdldEF0dHJpYnV0ZScsIEFUVFJfQkFDS0ZBQ0UpXG4gICAgLm1hcCgoc3JjKSA9PiBzcmMgPyBgdXJsKCR7c3JjfSlgIDogJycpXG4gICAgLm9uVmFsdWUodXRpbC5zdHlsZUFzc2lnbk9mKHRhcmdldCwgJ2JhY2tncm91bmQtaW1hZ2UnKSk7XG5cbiAgLy8gYmFja2ZhY2UgaW1hZ2UgY3NzIGZpbHRlclxuICBiZ0ZpbHRlckJ1c1xuICAgIC5tYXAoJy5nZXRBdHRyaWJ1dGUnLCBBVFRSX0ZJTFRFUilcbiAgICAub25WYWx1ZSh1dGlsLnN0eWxlQXNzaWduT2YodGFyZ2V0LCB1dGlsLnN0eWxlUHJlZml4RGV0ZWN0KCdmaWx0ZXInKSkpO1xuXG4gIEJhY29uLmZyb21BcnJheSh1dGlsLnRvQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7QVRUUl9CQUNLRkFDRX1dYCkpKVxuICAgIC5tYXAoJy5nZXRBdHRyaWJ1dGUnLCBBVFRSX0JBQ0tGQUNFKVxuICAgIC5maWx0ZXIoKHYpID0+ICEhdilcbiAgICAub25WYWx1ZSh1dGlsLnByZWxvYWRJbWcpO1xuXG4gIHJldHVybiB7XG4gICAgYmdJbWFnZUJ1cyAgOiBiZ0ltYWdlQnVzLFxuICAgIGJnRmlsdGVyQnVzIDogYmdGaWx0ZXJCdXNcbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEJhY29uICAgZnJvbSAnYmFjb25qcyc7XG5pbXBvcnQga2V5Y29kZSBmcm9tICdrZXljb2RlJztcblxuY29uc3QgRVZFTlRfS0VZVVAgPSBCYWNvbi5mcm9tRXZlbnRUYXJnZXQoZG9jdW1lbnQsICdrZXl1cCcpO1xuY29uc3QgRVZFTlRfS0VZRE9XTiA9IEJhY29uLmZyb21FdmVudFRhcmdldChkb2N1bWVudCwgJ2tleWRvd24nKTtcblxuLyoqXG4gKiBjcmVhdGUgRXZlbnRTdHJlYW0gZnJvbSB1c2VyIGlucHV0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gY2hhcktleVxuICAgKiBAcmV0dXJucyB7RXZlbnRTdHJlYW19XG4gICAqL1xuICBrZXkoY2hhcktleSkge1xuICAgIGxldCBrZXlDb2RlID0gdHlwZW9mIGNoYXJLZXkgPT09ICdzdHJpbmcnID8ga2V5Y29kZShjaGFyS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhcktleTtcbiAgICByZXR1cm4gRVZFTlRfS0VZVVAuZmlsdGVyKGtleUNvZGVJcyhrZXlDb2RlKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gY2hhcktleVxuICAgKiBAcmV0dXJucyB7RXZlbnRTdHJlYW19XG4gICAqL1xuICBrZXlkb3duKGNoYXJLZXkpIHtcbiAgICBsZXQga2V5Q29kZSA9IHR5cGVvZiBjaGFyS2V5ID09PSAnc3RyaW5nJyA/IGtleWNvZGUoY2hhcktleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoYXJLZXk7XG4gICAgcmV0dXJuIEVWRU5UX0tFWURPV04uZmlsdGVyKGtleUNvZGVJcyhrZXlDb2RlKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge0V2ZW50U3RyZWFtfVxuICAgKi9cbiAgY2xpY2soZWwpIHtcbiAgICByZXR1cm4gQmFjb24uZnJvbUV2ZW50VGFyZ2V0KGVsLCAnY2xpY2snKTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBbZWwgPSBkb2N1bWVudC5ib2R5XVxuICAgKiBAcmV0dXJucyB7RXZlbnRTdHJlYW19XG4gICAqL1xuICBtb3VzZW1vdmUoZWwgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgcmV0dXJuIEJhY29uLmZyb21FdmVudFRhcmdldChlbCwgJ21vdXNlbW92ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtFdmVudFN0cmVhbX1cbiAgICovXG4gIHRvdWNoc3RhcnQoZWwpIHtcbiAgICByZXR1cm4gQmFjb24uZnJvbUV2ZW50VGFyZ2V0KGVsLCAndG91Y2hzdGFydCcpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtFdmVudFN0cmVhbX1cbiAgICovXG4gIHRvdWNoZW5kKGVsKSB7XG4gICAgcmV0dXJuIEJhY29uLmZyb21FdmVudFRhcmdldChlbCwgJ3RvdWNoZW5kJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge0V2ZW50U3RyZWFtfVxuICAgKi9cbiAgdG91Y2htb3ZlKGVsKSB7XG4gICAgcmV0dXJuIEJhY29uLmZyb21FdmVudFRhcmdldChlbCwgJ3RvdWNobW92ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7QmFjb24uQnVzfSBbc3RvcEJ1cyA9IG5ldyBCYWNvbi5CdXMoKV1cbiAgICogQHJldHVybnMge0V2ZW50U3RyZWFtfVxuICAgKi9cbiAgc3dpcGUoZWwsIHN0b3BCdXMgPSBuZXcgQmFjb24uQnVzKCkpIHtcbiAgICBsZXQgc3RhcnQgPSB0aGlzLnRvdWNoc3RhcnQoZWwpLmRvQWN0aW9uKCcucHJldmVudERlZmF1bHQnKTtcbiAgICBsZXQgbW92ZSAgPSB0aGlzLnRvdWNobW92ZShlbCkuZG9BY3Rpb24oJy5wcmV2ZW50RGVmYXVsdCcpLnRocm90dGxlKDEwMCk7XG4gICAgbGV0IGVuZCAgID0gdGhpcy50b3VjaGVuZChlbCkuZG9BY3Rpb24oJy5wcmV2ZW50RGVmYXVsdCcpO1xuXG4gICAgc3RvcEJ1cy5wbHVnKGVuZCk7XG5cbiAgICByZXR1cm4gc3RhcnQuZmxhdE1hcChmdW5jdGlvbihpbml0aWFsKSB7XG4gICAgICBsZXQgaW5pdGlhbFZhbHVlID0ge1xuICAgICAgICBpbml0IDogaW5pdGlhbC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICBjdXJ0IDogMFxuICAgICAgfTtcbiAgICAgIHJldHVybiBtb3ZlLnRha2VVbnRpbChzdG9wQnVzKS5zY2FuKGluaXRpYWxWYWx1ZSwgZnVuY3Rpb24oYWNjLCBjdXJyZW50KSB7XG4gICAgICAgIGFjYy5jdXJ0ID0gY3VycmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSkuc2tpcCgxKTtcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBbZWwgPSBkb2N1bWVudC5ib2R5XVxuICAgKiBAcmV0dXJucyB7RXZlbnRTdHJlYW19XG4gICAqL1xuICBzd2lwZUxlZnQoZWwgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgbGV0IHN0b3BCdXMgPSBuZXcgQmFjb24uQnVzKCk7XG5cbiAgICByZXR1cm4gdGhpcy5zd2lwZShlbCwgc3RvcEJ1cykuZmlsdGVyKChtb3ZlcykgPT4ge1xuICAgICAgbGV0IHtpbml0LCBjdXJ0fSA9IG1vdmVzO1xuICAgICAgbGV0IGRlbHRhID0gY3VydCAtIGluaXQ7XG4gICAgICByZXR1cm4gZGVsdGEgPCAtMTAgJiYgc3RvcEJ1cy5wdXNoKHRydWUpO1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IFtlbCA9IGRvY3VtZW50LmJvZHldXG4gICAqIEByZXR1cm5zIHtFdmVudFN0cmVhbX1cbiAgICovXG4gIHN3aXBlUmlnaHQoZWwgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgbGV0IHN0b3BCdXMgPSBuZXcgQmFjb24uQnVzKCk7XG5cbiAgICByZXR1cm4gdGhpcy5zd2lwZShlbCwgc3RvcEJ1cykuZmlsdGVyKChtb3ZlcykgPT4ge1xuICAgICAgbGV0IHtpbml0LCBjdXJ0fSA9IG1vdmVzO1xuICAgICAgbGV0IGRlbHRhID0gY3VydCAtIGluaXQ7XG4gICAgICByZXR1cm4gZGVsdGEgPiAxMCAmJiBzdG9wQnVzLnB1c2godHJ1ZSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtFdmVudFN0cmVhbX1cbiAgICovXG4gIHJlc2l6ZSgpIHtcbiAgICByZXR1cm4gQmFjb24uZnJvbUV2ZW50VGFyZ2V0KHdpbmRvdywgJ3Jlc2l6ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7RXZlbnRTdHJlYW19XG4gICAqL1xuICBoYXNoY2hhbmdlKCkge1xuICAgIHJldHVybiBCYWNvbi5mcm9tRXZlbnRUYXJnZXQod2luZG93LCAnaGFzaGNoYW5nZScpO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7TnVtYmVyfSBrZXlDb2RlXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGtleUNvZGVJcyhrZXlDb2RlKSB7XG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgIHJldHVybiBldmVudC5rZXlDb2RlID09PSBrZXlDb2RlO1xuICB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQmFjb24gICBmcm9tICdiYWNvbmpzJztcblxuLyoqXG4gKiBmdWxsIHNjcmVlblxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRhcmdldCkge1xuICBsZXQgYnVzID0gbmV3IEJhY29uLkJ1cygpO1xuICBidXMub25WYWx1ZSh0b2dnbGVTY3JlZW5PZih0YXJnZXQpKTtcbiAgcmV0dXJuIGJ1cztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHRvZ2dsZVNjcmVlbk9mKGVsKSB7XG4gIGxldCByZXF1ZXN0LCBleGl0O1xuXG4gIGlmIChlbC5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgIHJlcXVlc3QgPSAncmVxdWVzdEZ1bGxzY3JlZW4nO1xuICB9IGVsc2UgaWYgKGVsLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgcmVxdWVzdCA9ICd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbic7XG4gIH0gZWxzZSBpZiAoZWwubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICByZXF1ZXN0ID0gJ21velJlcXVlc3RGdWxsU2NyZWVuJztcbiAgfSBlbHNlIGlmIChlbC5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgcmVxdWVzdCA9ICdtc1JlcXVlc3RGdWxsc2NyZWVuJztcbiAgfVxuXG4gIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgIGV4aXQgPSAnZXhpdEZ1bGxzY3JlZW4nO1xuICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgZXhpdCA9ICd3ZWJraXRFeGl0RnVsbHNjcmVlbic7XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikge1xuICAgIGV4aXQgPSAnbW96Q2FuY2VsRnVsbFNjcmVlbic7XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbikge1xuICAgIGV4aXQgPSAnbXNFeGl0RnVsbHNjcmVlbic7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCAmJlxuICAgICAgIWRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50ICYmXG4gICAgICAhZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgJiZcbiAgICAgICFkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICBlbFtyZXF1ZXN0XSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudFtleGl0XSgpO1xuICAgIH1cbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBpZiB1c2luZyBhIGZlYXR1cmUgdGhhdCByZXF1aXJlcyBhIGJyb3dzZXItcG9seWZpbGxcbiAqIEBzZWUgaHR0cHM6Ly9iYWJlbGpzLmlvL2RvY3MvdXNhZ2UvcG9seWZpbGwvXG4gKi9cbnJlcXVpcmUoJ2JhYmVsL2Jyb3dzZXItcG9seWZpbGwnKTtcbi8qKlxuICogVGFsa2llLmpzXG4gKi9cbmltcG9ydCBCYWNvbiAgIGZyb20gJ2JhY29uanMnO1xuXG5pbXBvcnQgdXRpbCAgICBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IGNvbnRyb2wgZnJvbSAnLi9jb250cm9sJztcbmltcG9ydCBxdWVyeSAgIGZyb20gJy4vcXVlcnknO1xuXG5pbXBvcnQgJHNsaWRlICAgICAgZnJvbSAnLi9zbGlkZSc7XG5pbXBvcnQgJHBhZ2luZyAgICAgZnJvbSAnLi9wYWdpbmcnO1xuaW1wb3J0ICRmdWxsU2NyZWVuIGZyb20gJy4vZnVsbHNjcmVlbic7XG5pbXBvcnQgJHJlc3BvbnNpdmUgZnJvbSAnLi9yZXNwb25zaXZlJztcbmltcG9ydCAkcG9pbnRlciAgICBmcm9tICcuL3BvaW50ZXInO1xuaW1wb3J0ICRiYWNrZmFjZSAgIGZyb20gJy4vYmFja2ZhY2UnO1xuXG5jb25zdCBJREVOVF9ORVhUICAgICA9ICduZXh0JztcbmNvbnN0IElERU5UX1BSRVYgICAgID0gJ3ByZXYnO1xuY29uc3QgSURFTlRfU0NBTEVSICAgPSAnc2NhbGVyJztcbmNvbnN0IElERU5UX0NPTlRST0wgID0gJ2NvbnRyb2wnO1xuY29uc3QgSURFTlRfUEFHRSAgICAgPSAncGFnZSc7XG5jb25zdCBJREVOVF9UT1RBTCAgICA9ICd0b3RhbCc7XG5jb25zdCBJREVOVF9QUk9HUkVTUyA9ICdwcm9ncmVzcyc7XG5jb25zdCBJREVOVF9QT0lOVEVSICA9ICdwb2ludGVyJztcbmNvbnN0IElERU5UX0JBQ0tGQUNFID0gJ2JhY2tmYWNlJztcblxuY29uc3QgU0VMRUNUT1JfTUQgPSAnW3R5cGU9XCJ0ZXh0L3gtbWFya2Rvd25cIl0nO1xuXG5jb25zdCBBVFRSX0xBWU9VVCAgID0gJ2xheW91dCc7XG5jb25zdCBBVFRSX0JPRFlfQkcgID0gJ2JvZHktYmcnO1xuY29uc3QgQVRUUl9OT19UUkFOUyA9ICduby10cmFuc2l0aW9uJztcblxuY29uc3QgTk9STUFMX1dJRFRIICA9IDEwMjQ7XG5jb25zdCBOT1JNQUxfSEVJR0hUID0gNzY4O1xuY29uc3QgV0lERV9XSURUSCAgICA9IDEzNjY7XG5jb25zdCBXSURFX0hFSUdIVCAgID0gNzY4O1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRhbGtpZU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW2FwaV1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW3dpZGVdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IFtjb250cm9sXVxuICogQHByb3BlcnR5IHtCb29sZWFufSBbcG9pbnRlcl1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW3Byb2dyZXNzXVxuICogQHByb3BlcnR5IHtCb29sZWFufSBbYmFja2ZhY2VdXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge1RhbGtpZU9wdGlvbnN9IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiAhb3B0aW9ucy5hcGkgPyBtYWluKG9wdGlvbnMpIDoge1xuICAgIG1haW4gICAgICAgOiBtYWluLFxuICAgIHV0aWwgICAgICAgOiB1dGlsLFxuICAgIGNvbnRyb2wgICAgOiBjb250cm9sLFxuICAgIHF1ZXJ5ICAgICAgOiBxdWVyeSxcbiAgICBzbGlkZSAgICAgIDogJHNsaWRlLFxuICAgIHBhZ2luZyAgICAgOiAkcGFnaW5nLFxuICAgIGZ1bGxTY3JlZW4gOiAkZnVsbFNjcmVlbixcbiAgICByZXNwb25zaXZlIDogJHJlc3BvbnNpdmUsXG4gICAgcG9pbnRlciAgICA6ICRwb2ludGVyLFxuICAgIGJhY2tmYWNlICAgOiAkYmFja2ZhY2UsXG4gICAgQmFjb24gICAgICA6IEJhY29uXG4gIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtUYWxraWVPcHRpb25zfSBfb3B0aW9uc1xuICovXG5mdW5jdGlvbiBtYWluKF9vcHRpb25zID0ge30pIHtcblxuICAvKipcbiAgICogYXBwbHkgZGVmYXVsdCBvcHRpb25zXG4gICAqIEB0eXBlIHsqfE9iamVjdH1cbiAgICovXG4gIGxldCBvcHRpb25zID0gdXRpbC5leHRlbmQodXRpbC5kZWZhdWx0cyhfb3B0aW9ucywge1xuICAgIGFwaSAgICAgICAgICA6IGZhbHNlLFxuICAgIHdpZGUgICAgICAgICA6IGZhbHNlLFxuICAgIGNvbnRyb2wgICAgICA6IHRydWUsXG4gICAgcG9pbnRlciAgICAgIDogdHJ1ZSxcbiAgICBwcm9ncmVzcyAgICAgOiB0cnVlLFxuICAgIGJhY2tmYWNlICAgICA6IHRydWUsXG4gICAgbm90cmFuc2l0aW9uIDogZmFsc2VcbiAgfSksIHF1ZXJ5KGxvY2F0aW9uLnNlYXJjaCkpO1xuXG4gIC8qKlxuICAgKiBJbml0IHNsaWRlIHNpemVzXG4gICAqL1xuICBsZXQgd2lkdGggID0gb3B0aW9ucy53aWRlID8gV0lERV9XSURUSCA6IE5PUk1BTF9XSURUSDtcbiAgbGV0IGhlaWdodCA9IG9wdGlvbnMud2lkZSA/IFdJREVfSEVJR0hUIDogTk9STUFMX0hFSUdIVDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICAgIDxzdHlsZT5cbiAgICAgIFtsYXlvdXRdLFxuICAgICAgIyR7SURFTlRfU0NBTEVSfSB7XG4gICAgICAgIHdpZHRoOiAke3dpZHRofXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogJHtoZWlnaHR9cHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPmBcbiAgKTtcblxuICAvKipcbiAgICogSW5pdCBzbGlkZSBzZWN0aW9uc1xuICAgKi9cbiAgbGV0IG1kcyA9IHV0aWwudG9BcnJheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX01EKSk7XG4gIG1kcy5mb3JFYWNoKCRzbGlkZS5jb21waWxlTWFya2Rvd24pO1xuICBsZXQgc2xpZGVzID0gdXRpbC50b0FycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske0FUVFJfTEFZT1VUfV1gKSk7XG4gIGxldCBub3RlcyAgPSBzbGlkZXMubWFwKCRzbGlkZS5leHRyYWN0Tm90ZSk7XG5cbiAgLyoqXG4gICAqIFJlc3BvbnNpdmUgc2NhbGluZ1xuICAgKi9cbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICA8ZGl2IGlkPVwiJHtJREVOVF9TQ0FMRVJ9XCI+PC9kaXY+XG4gIGApO1xuICBsZXQgc2NhbGVyRWwgPSB1dGlsLmdldEJ5SWQoSURFTlRfU0NBTEVSKTtcbiAgc2xpZGVzLmZvckVhY2goKGVsKSA9PiBzY2FsZXJFbC5hcHBlbmRDaGlsZChlbCkpO1xuXG4gIGxldCByZXNwb25zaXZlID0gJHJlc3BvbnNpdmUoe1xuICAgIHdpZHRoICA6IHdpZHRoLFxuICAgIGhlaWdodCA6IGhlaWdodCxcbiAgICB0YXJnZXQgOiBzY2FsZXJFbFxuICB9KTtcbiAgcmVzcG9uc2l2ZS5zY2FsZUJ1cy5wbHVnKGNvbnRyb2wucmVzaXplKCkpO1xuXG4gIC8qKlxuICAgKiBQYWdpbmcgY29udHJvbFxuICAgKi9cbiAgbGV0IHBhZ2luZyA9ICRwYWdpbmcoe1xuICAgIHN0YXJ0UGFnZSAgICAgOiB1dGlsLmdldFBhZ2VOdW1iZXJGcm9tSGFzaCgpIHx8IDEsXG4gICAgZW5kUGFnZSAgICAgICA6IHNsaWRlcy5sZW5ndGgsXG4gICAgc2xpZGVFbGVtZW50cyA6IHNsaWRlc1xuICB9KTtcblxuICBwYWdpbmcubmV4dEJ1cy5wbHVnKGNvbnRyb2wua2V5ZG93bigncmlnaHQnKS50aHJvdHRsZSgxMDApKTtcbiAgcGFnaW5nLnByZXZCdXMucGx1Zyhjb250cm9sLmtleWRvd24oJ2xlZnQnKS50aHJvdHRsZSgxMDApKTtcblxuICBwYWdpbmcubmV4dEJ1cy5wbHVnKGNvbnRyb2wuc3dpcGVMZWZ0KCkpO1xuICBwYWdpbmcucHJldkJ1cy5wbHVnKGNvbnRyb2wuc3dpcGVSaWdodCgpKTtcblxuICAvLyBzeW5jIGxvY2F0aW9uLmhhc2hcbiAgcGFnaW5nLm1vdmVCdXMucGx1Zyhjb250cm9sLmhhc2hjaGFuZ2UoKS5tYXAodXRpbC5nZXRQYWdlTnVtYmVyRnJvbUhhc2gpKTtcbiAgcGFnaW5nLmN1cnJlbnRFcy5vblZhbHVlKChwYWdlKSA9PiB7XG4gICAgKHBhZ2UgPT09IDEgJiYgIWxvY2F0aW9uLmhhc2gpIHx8IChsb2NhdGlvbi5oYXNoID0gcGFnZSk7XG4gIH0pO1xuXG4gIC8vIHN5bmMgYm9keSBiYWNrZ3JvdW5kIGF0dHJpYnV0ZVxuICBwYWdpbmcuY2hhbmdlZEVzXG4gICAgLm1hcCgnLmdldEF0dHJpYnV0ZScsIEFUVFJfTEFZT1VUKVxuICAgIC5vblZhbHVlKHV0aWwuYXR0cmlidXRlQXNzaWduT2YoZG9jdW1lbnQuYm9keSwgQVRUUl9CT0RZX0JHKSk7XG5cbiAgLyoqXG4gICAqIEluc2VydCBVaSBFbGVtZW50c1xuICAgKi9cbiAgaWYgKG9wdGlvbnMubm90cmFuc2l0aW9uKSB7XG4gICAgQmFjb24ub25jZSgxKVxuICAgICAgLm9uVmFsdWUodXRpbC5hdHRyaWJ1dGVBc3NpZ25PZihkb2N1bWVudC5ib2R5LCBBVFRSX05PX1RSQU5TKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5wb2ludGVyKSB7XG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8ZGl2IGlkPVwiJHtJREVOVF9QT0lOVEVSfVwiPjwvZGl2PmApO1xuICAgIGxldCB7Y29vcmRCdXMsIHRvZ2dsZUJ1c30gPSAkcG9pbnRlcih1dGlsLmdldEJ5SWQoSURFTlRfUE9JTlRFUikpO1xuICAgIGNvb3JkQnVzLnBsdWcoY29udHJvbC5tb3VzZW1vdmUoKSk7XG4gICAgdG9nZ2xlQnVzLnBsdWcoY29udHJvbC5rZXkoJ2InKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5iYWNrZmFjZSkge1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGRpdiBpZD1cIiR7SURFTlRfQkFDS0ZBQ0V9XCI+PC9kaXY+YCk7XG4gICAgbGV0IHtiZ0ltYWdlQnVzLCBiZ0ZpbHRlckJ1c30gPSAkYmFja2ZhY2UodXRpbC5nZXRCeUlkKElERU5UX0JBQ0tGQUNFKSk7XG4gICAgYmdJbWFnZUJ1cy5wbHVnKHBhZ2luZy5jaGFuZ2VkRXMpO1xuICAgIGJnRmlsdGVyQnVzLnBsdWcocGFnaW5nLmNoYW5nZWRFcyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5jb250cm9sKSB7XG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICAgIDxkaXYgaWQ9XCIke0lERU5UX0NPTlRST0x9XCI+XG4gICAgICAgIDxwPjxzcGFuIGlkPVwiJHtJREVOVF9QUkVWfVwiPuKXgDwvc3Bhbj5cbiAgICAgICAgUGFnZSA8c3BhbiBpZD1cIiR7SURFTlRfUEFHRX1cIj4wPC9zcGFuPiBvZiA8c3BhbiBpZD1cIiR7SURFTlRfVE9UQUx9XCI+MDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gaWQ9XCIke0lERU5UX05FWFR9XCI+4pa2PC9zcGFuPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIGApO1xuXG4gICAgbGV0IG5leHRFbCA9IHV0aWwuZ2V0QnlJZChJREVOVF9ORVhUKTtcbiAgICBsZXQgcHJldkVsID0gdXRpbC5nZXRCeUlkKElERU5UX1BSRVYpO1xuXG4gICAgLy8gbmV4dCBidXR0b25cbiAgICBwYWdpbmcubmV4dEJ1cy5wbHVnKGNvbnRyb2wuY2xpY2sobmV4dEVsKSk7XG5cbiAgICAvLyBwcmV2IGJ1dHRvblxuICAgIHBhZ2luZy5wcmV2QnVzLnBsdWcoY29udHJvbC5jbGljayhwcmV2RWwpKTtcblxuICAgIC8vIGN1cnJlbnQgcGFnZVxuICAgIHBhZ2luZy5jdXJyZW50RXMub25WYWx1ZSh1dGlsLnRleHRBc3NpZ25PZih1dGlsLmdldEJ5SWQoSURFTlRfUEFHRSkpKTtcblxuICAgIC8vIHRvdGFsIG9mIHBhZ2VcbiAgICBCYWNvbi5vbmNlKHNsaWRlcy5sZW5ndGgpLm9uVmFsdWUodXRpbC50ZXh0QXNzaWduT2YodXRpbC5nZXRCeUlkKElERU5UX1RPVEFMKSkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMucHJvZ3Jlc3MpIHtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxkaXYgaWQ9XCIke0lERU5UX1BST0dSRVNTfVwiPjwvZGl2PmApO1xuXG4gICAgLy8gcHJvZ3Jlc3MgYmFyXG4gICAgcGFnaW5nLnBlcmNlbnRFcy5vblZhbHVlKHV0aWwuc3R5bGVBc3NpZ25PZih1dGlsLmdldEJ5SWQoSURFTlRfUFJPR1JFU1MpLCAnd2lkdGgnKSk7XG4gIH1cblxuICAvKipcbiAgICogRnVsbFNjcmVlblxuICAgKi9cbiAgJGZ1bGxTY3JlZW4oZG9jdW1lbnQuYm9keSkucGx1Zyhjb250cm9sLmtleSgnZicpKTtcblxuICAvKipcbiAgICogZXhwb3J0IHNvbWUgb2YgY29udHJvbFxuICAgKlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBUYWxraWVFeHBvcnRcbiAgICogQHBhcmFtIHtPYmplY3QuPEZ1bmN0aW9uPn0gY29udHJvbFxuICAgKiBAcGFyYW0ge0JhY29uLkV2ZW50U3RyZWFtfSBjaGFuZ2VkXG4gICAqIEBwYXJhbSB7QmFjb24uQnVzfSBuZXh0XG4gICAqIEBwYXJhbSB7QmFjb24uQnVzfSBwcmV2XG4gICAqIEBwYXJhbSB7QmFjb24uQnVzfSBqdW1wXG4gICAqIEBwYXJhbSB7QmFjb24uUHJvcGVydHl9IHJhdGlvXG4gICAqIEBwYXJhbSB7QXJyYXkuPFN0cmluZz59IG5vdGVzXG4gICAqL1xuICByZXR1cm4ge1xuICAgIEJhY29uICAgOiBCYWNvbixcbiAgICBjb250cm9sIDogY29udHJvbCxcbiAgICBjaGFuZ2VkIDogcGFnaW5nLmNoYW5nZWRFcyxcbiAgICBuZXh0ICAgIDogcGFnaW5nLm5leHRCdXMsXG4gICAgcHJldiAgICA6IHBhZ2luZy5wcmV2QnVzLFxuICAgIGp1bXAgICAgOiBwYWdpbmcubW92ZUJ1cyxcbiAgICByYXRpbyAgIDogcmVzcG9uc2l2ZS5jdXJyZW50UmF0aW8sXG4gICAgbm90ZXMgICA6IG5vdGVzXG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBCYWNvbiAgIGZyb20gJ2JhY29uanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBhZ2luZ09wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBzdGFydFBhZ2VcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBlbmRQYWdlXG4gKiBAcHJvcGVydHkge0FycmF5PEVsZW1lbnQ+fSBzbGlkZUVsZW1lbnRzXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQYWdpbmdSZXR1cm5zXG4gKiBAcHJvcGVydHkge0JhY29uLkV2ZW50U3RyZWFtfSBjdXJyZW50RXNcbiAqIEBwcm9wZXJ0eSB7QmFjb24uRXZlbnRTdHJlYW19IHN0YXJ0RXNcbiAqIEBwcm9wZXJ0eSB7QmFjb24uRXZlbnRTdHJlYW19IGVuZEVzXG4gKiBAcHJvcGVydHkge0JhY29uLkV2ZW50U3RyZWFtfSBjaGFuZ2VkRXNcbiAqIEBwcm9wZXJ0eSB7QmFjb24uRXZlbnRTdHJlYW19IHBlcmNlbnRFc1xuICogQHByb3BlcnR5IHtCYWNvbi5CdXN9IG5leHRCdXNcbiAqIEBwcm9wZXJ0eSB7QmFjb24uQnVzfSBwcmV2QnVzXG4gKiBAcHJvcGVydHkge0JhY29uLkJ1c30gbW92ZUJ1c1xuICovXG5cbi8qKlxuICogcGFnaW5nIGNvbnRyb2xcbiAqXG4gKiBAcGFyYW0ge1BhZ2luZ09wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtQYWdpbmdSZXR1cm5zfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgbGV0IG5leHRCdXMgPSBuZXcgQmFjb24uQnVzKCk7XG4gIGxldCBwcmV2QnVzID0gbmV3IEJhY29uLkJ1cygpO1xuICBsZXQgbW92ZUJ1cyA9IG5ldyBCYWNvbi5CdXMoKTtcblxuICBsZXQgY3VycmVudEJ1cyAgPSBuZXcgQmFjb24uQnVzKCk7XG4gIGxldCBjdXJyZW50UGFnZSA9IGN1cnJlbnRCdXNcbiAgICAubWFwKGluUmFuZ2VPZigxLCBvcHRpb25zLmVuZFBhZ2UpKVxuICAgIC50b1Byb3BlcnR5KG9wdGlvbnMuc3RhcnRQYWdlIHx8IDEpXG4gICAgLnNraXBEdXBsaWNhdGVzKCk7XG5cbiAgbGV0IG5leHRFcyA9IGN1cnJlbnRQYWdlLnNhbXBsZWRCeShuZXh0QnVzKS5tYXAoKHYpID0+IHYgKyAxKTtcbiAgbGV0IHByZXZFcyA9IGN1cnJlbnRQYWdlLnNhbXBsZWRCeShwcmV2QnVzKS5tYXAoKHYpID0+IHYgLSAxKTtcbiAgbGV0IG1vdmVFcyA9IG1vdmVCdXMubWFwKCh2KSA9PiB2IC8qbm9vcCovKTtcblxuICBsZXQgcGVyY2VudFN0cmluZyA9IGN1cnJlbnRQYWdlLm1hcChwZXJjZW50T2Yob3B0aW9ucy5lbmRQYWdlKSk7XG4gIGxldCBjdXJyZW50U2xpZGUgID0gY3VycmVudFBhZ2UubWFwKChpKSA9PiBvcHRpb25zLnNsaWRlRWxlbWVudHNbaSAtIDFdKTtcblxuICBjdXJyZW50QnVzLnBsdWcobmV4dEVzLm1lcmdlKHByZXZFcykubWVyZ2UobW92ZUVzKSk7XG5cbiAgY3VycmVudFNsaWRlLm9uVmFsdWUoZnVuY3Rpb24oY3VycmVudCkge1xuICAgIG9wdGlvbnMuc2xpZGVFbGVtZW50cy5mb3JFYWNoKHRvSW52aXNpYmxlKTtcbiAgICBjdXJyZW50ICYmIHRvVmlzaWJsZShjdXJyZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50RXMgOiBjdXJyZW50UGFnZSxcbiAgICBzdGFydEVzICAgOiBjdXJyZW50UGFnZS5maWx0ZXIoKHYpID0+IHYgPT09IDEpLFxuICAgIGVuZEVzICAgICA6IGN1cnJlbnRQYWdlLmZpbHRlcigodikgPT4gdiA9PT0gb3B0aW9ucy5lbmRQYWdlKSxcbiAgICBjaGFuZ2VkRXMgOiBjdXJyZW50U2xpZGUsXG4gICAgcGVyY2VudEVzIDogcGVyY2VudFN0cmluZyxcbiAgICBuZXh0QnVzICAgOiBuZXh0QnVzLFxuICAgIHByZXZCdXMgICA6IHByZXZCdXMsXG4gICAgbW92ZUJ1cyAgIDogbW92ZUJ1c1xuICB9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqL1xuZnVuY3Rpb24gdG9JbnZpc2libGUoZWwpIHtcbiAgZWwucmVtb3ZlQXR0cmlidXRlKCd2aXNpYmxlJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICovXG5mdW5jdGlvbiB0b1Zpc2libGUoZWwpIHtcbiAgZWwuc2V0QXR0cmlidXRlKCd2aXNpYmxlJywgMSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtIHtOdW1iZXJ9IG1heFxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBpblJhbmdlT2YobWluLCBtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHopIHtcbiAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heCh6LCBtaW4pKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4XG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHBlcmNlbnRPZihtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGN1cnJlbnQpIHtcbiAgICByZXR1cm4gKCgxMDAgLyBtYXgpICogY3VycmVudCkgKyAnJSc7XG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBCYWNvbiBmcm9tICdiYWNvbmpzJztcbmltcG9ydCB1dGlsICBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBvaW50ZXJSZXR1cm5zXG4gKiBAcHJvcGVydHkge0JhY29uLkJ1c30gY29vcmRCdXNcbiAqIEBwcm9wZXJ0eSB7QmFjb24uQnVzfSB0b2dnbGVCdXNcbiAqL1xuXG4vKipcbiAqIHBvaW50ZXIgbW9kZVxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKiBAcmV0dXJucyB7UG9pbnRlclJldHVybnN9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRhcmdldCkge1xuXG4gIGxldCBjb29yZEJ1cyAgPSBuZXcgQmFjb24uQnVzKCk7XG4gIGxldCB0b2dnbGVCdXMgPSBuZXcgQmFjb24uQnVzKCk7XG5cbiAgbGV0IHggPSBjb29yZEJ1cy5tYXAoKGUpID0+IGUueCArICdweCcpO1xuICBsZXQgeSA9IGNvb3JkQnVzLm1hcCgoZSkgPT4gZS55ICsgJ3B4Jyk7XG5cbiAgeC5vblZhbHVlKHV0aWwuc3R5bGVBc3NpZ25PZih0YXJnZXQsICdsZWZ0JykpO1xuICB5Lm9uVmFsdWUodXRpbC5zdHlsZUFzc2lnbk9mKHRhcmdldCwgJ3RvcCcpKTtcblxuICB0b2dnbGVCdXNcbiAgICAuc2NhbihmYWxzZSwgKGFjYykgPT4gIWFjYylcbiAgICAubWFwKChib29sKSA9PiBib29sID8gJ3Zpc2libGUnIDogJ2hpZGRlbicpXG4gICAgLm9uVmFsdWUodXRpbC5zdHlsZUFzc2lnbk9mKHRhcmdldCwgJ3Zpc2liaWxpdHknKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb29yZEJ1cyAgOiBjb29yZEJ1cyxcbiAgICB0b2dnbGVCdXMgOiB0b2dnbGVCdXNcbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBxdWVyeSBwYXJhbWV0ZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHBhcnNlUXVlcnk7XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5XG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwYXJzZVF1ZXJ5KHF1ZXJ5KSB7XG4gIGxldCByZXQgPSAge307XG4gIHF1ZXJ5XG4gICAgLnNsaWNlKDEsIC0xKVxuICAgIC5zcGxpdCgnJicpXG4gICAgLm1hcCgoa2V5RXFWYWwpID0+IGtleUVxVmFsLnNwbGl0KCc9JykpXG4gICAgLmZvckVhY2goKGt2KSA9PiByZXRba3ZbMF1dID0gdXRpbC5nZXRQcmltaXRpdmVGcm9tU3RyaW5nKGt2WzFdKSk7XG4gIHJldHVybiByZXQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBCYWNvbiBmcm9tICdiYWNvbmpzJztcbmltcG9ydCB1dGlsICBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJhdGlvT3B0aW9uc1xuICogQHByb3BlcnR5IHtOdW1iZXJ9IHdpZHRoXG4gKiBAcHJvcGVydHkge051bWJlcn0gaGVpZ2h0XG4gKiBAcHJvcGVydHkge0VsZW1lbnR9IHRhcmdldFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUmF0aW9SZXR1cm5zXG4gKiBAcHJvcGVydHkge0JhY29uLkJ1c30gc2NhbGVCdXNcbiAqIEBwcm9wZXJ0eSB7QmFjb24uUHJvcGVydHl9IGN1cnJlbnRSYXRpb1xuICovXG5cbi8qKlxuICogY29tcHV0ZSByYXRpb1xuICpcbiAqIEBwYXJhbSB7UmF0aW9PcHRpb25zfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7UmF0aW9SZXR1cm5zfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zID0ge30pIHtcblxuICBsZXQgYnVzID0gbmV3IEJhY29uLkJ1cygpO1xuXG4gIGxldCBoUmF0aW9GbiA9IGhvcml6b250YWxSYXRpb09mKG9wdGlvbnMud2lkdGgpO1xuICBsZXQgdlJhdGlvRm4gPSB2ZXJ0aWNhbFJhdGlvT2Yob3B0aW9ucy5oZWlnaHQpO1xuXG4gIGxldCBoUmF0aW8gPSBidXMubWFwKGhSYXRpb0ZuKS50b1Byb3BlcnR5KGhSYXRpb0ZuKCkpO1xuICBsZXQgdlJhdGlvID0gYnVzLm1hcCh2UmF0aW9GbikudG9Qcm9wZXJ0eSh2UmF0aW9GbigpKTtcblxuICBsZXQgc2NhbGUgPSB1dGlsLmNvbXBvc2UoY2VudGVyaW5nT2Yob3B0aW9ucy50YXJnZXQpLCBzY2FsaW5nT2Yob3B0aW9ucy50YXJnZXQpKTtcblxuICBsZXQgY3VycmVudFJhdGlvID0gQmFjb24uY29tYmluZVdpdGgoTWF0aC5taW4sIGhSYXRpbywgdlJhdGlvKS50b1Byb3BlcnR5KCk7XG5cbiAgY3VycmVudFJhdGlvLm9uVmFsdWUoc2NhbGUpO1xuXG4gIHJldHVybiB7XG4gICAgc2NhbGVCdXMgICAgIDogYnVzLFxuICAgIGN1cnJlbnRSYXRpbyA6IGN1cnJlbnRSYXRpb1xuICB9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBob3Jpem9udGFsUmF0aW9PZih3aWR0aCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIC8gd2lkdGg7XG4gIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiB2ZXJ0aWNhbFJhdGlvT2YoaGVpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IC8gaGVpZ2h0O1xuICB9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gc2NhbGluZ09mKGVsKSB7XG4gIGxldCB0cmFuc2Zvcm0gPSB1dGlsLnN0eWxlUHJlZml4RGV0ZWN0KCd0cmFuc2Zvcm0nKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHJhdGlvKSB7XG4gICAgZWwuc3R5bGVbdHJhbnNmb3JtXSA9IGBzY2FsZSgke01hdGguYWJzKHJhdGlvKX0pYDtcbiAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNlbnRlcmluZ09mKGVsKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGVsLnN0eWxlLmxlZnQgPSAod2luZG93LmlubmVyV2lkdGggLSByZWN0LndpZHRoKSAvIDI7XG4gICAgZWwuc3R5bGUudG9wICA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWN0LmhlaWdodCkgLyAyO1xuICB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5pbXBvcnQgdXRpbCAgIGZyb20gJy4vdXRpbCc7XG5cbm1hcmtlZC5zZXRPcHRpb25zKHtcbiAgbGFuZ1ByZWZpeCA6ICdobGpzICcsXG4gIGhpZ2hsaWdodCAgOiBmdW5jdGlvbihjb2RlKSB7XG4gICAgaWYgKHdpbmRvdy5obGpzID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdoaWdobGlnaHQuanMgKGB3aW5kb3cuaGxqc2ApIGlzIG1pc3NpbmcnKTtcbiAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cbiAgICByZXR1cm4gd2luZG93LmhsanMuaGlnaGxpZ2h0QXV0byhjb2RlKS52YWx1ZTtcbiAgfVxufSk7XG5cbi8qKlxuICogY29tcGlsZSBtYXJrZG93blxuICpcbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21waWxlTWFya2Rvd24gOiBjb21waWxlTWFya2Rvd24sXG4gIGV4dHJhY3ROb3RlICAgICA6IGV4dHJhY3ROb3RlXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3ROb3RlKGVsKSB7XG4gIGxldCBbY29udGVudCwgbm90ZV0gPSBlbC5pbm5lckhUTUwuc3BsaXQoLzxoclxccz9cXC8/Pi8pO1xuICBlbC5pbm5lckhUTUwgPSBjb250ZW50O1xuXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IG5vdGUgfHwgJyc7XG4gIHJldHVybiBjb250YWluZXIudGV4dENvbnRlbnQgfHwgJyc7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybnMge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVNYXJrZG93bihlbCkge1xuICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBtYXJrZWQoZWwuaW5uZXJIVE1MKTtcbiAgdXRpbC50b0FycmF5KGVsLmF0dHJpYnV0ZXMpLmZpbHRlcihub3RUeXBlQXR0cmlidXRlKS5mb3JFYWNoKGNvcHlBdHRyaWJ1dGVUbyhzZWN0aW9uKSk7XG4gIGVsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHNlY3Rpb24sIGVsKTtcbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjb3B5QXR0cmlidXRlVG8oZWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGF0dHIpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0F0dHJpYnV0ZU5vZGV9IGF0dHJcbiAqL1xuZnVuY3Rpb24gbm90VHlwZUF0dHJpYnV0ZShhdHRyKSB7XG4gIHJldHVybiBhdHRyLm5hbWUgIT09ICd0eXBlJztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogQHBhcmFtIHthcnJheX0gbGlzdFxuICAgKiBAcmV0dXJucyB7QXJyYXkuPFQ+fVxuICAgKi9cbiAgdG9BcnJheShsaXN0KSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3JpZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHNcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGRlZmF1bHRzKG9yaWcsIGRlZnMpIHtcbiAgICBsZXQgcmV0ID0gdGhpcy5jbG9uZShvcmlnKTtcbiAgICBPYmplY3Qua2V5cyhkZWZzKS5mb3JFYWNoKChrKT0+IHtcbiAgICAgIGlmIChrIGluIHJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXRba10gPSBkZWZzW2tdO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIHNoYWxsb3cgY2xvbmUgZnVuY1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3JpZ1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgY2xvbmUob3JpZykge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhvcmlnKS5mb3JFYWNoKChrKT0+IHJldFtrXSA9IG9yaWdba10pO1xuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAgICogQHBhcmFtIHtPYmplY3R9IC4uLnNvdXJjZXNcbiAgICovXG4gIGV4dGVuZCA6IGFzc2lnbixcblxuICAvKipcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4uLi5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgKi9cbiAgY29tcG9zZSgpIHtcbiAgICAvLyBodHRwOi8vdW5kZXJzY29yZWpzLm9yZy8jY29tcG9zZVxuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGxldCBzdGFydCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgaSA9IHN0YXJ0O1xuICAgICAgbGV0IHJlc3VsdCA9IGFyZ3Nbc3RhcnRdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHJlc3VsdCA9IGFyZ3NbaV0uY2FsbCh0aGlzLCByZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkZW50XG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGdldEJ5SWQoaWRlbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRlbnQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqL1xuICB0ZXh0QXNzaWduT2YoZWwpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odGV4dCkge1xuICAgICAgZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAqL1xuICBzdHlsZUFzc2lnbk9mKGVsLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgZWwuc3R5bGVbcHJvcGVydHldID0gdmFsdWUgPT09ICcnID8gbnVsbCA6IHZhbHVlO1xuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtTdHJpbmd9IGF0dHJpYnV0ZVxuICAgKi9cbiAgYXR0cmlidXRlQXNzaWduT2YoZWwsIGF0dHJpYnV0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNyY1xuICAgKi9cbiAgcHJlbG9hZEltZyhzcmMpIHtcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLm9ubG9hZCA9ICgpPT4gaW1nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaW1nKTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICAgIGltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgfSxcblxuICAvKipcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG4gIGdldFBhZ2VOdW1iZXJGcm9tSGFzaCgpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQobG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpLCAxMCkgfHwgMDtcbiAgfSxcblxuICAvKipcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBnZXRQcmltaXRpdmVGcm9tU3RyaW5nKHN0cikge1xuICAgIGxldCByZXQgPSAoc3RyID09IG51bGwpID8gbnVsbCA6IHN0ciArICcnO1xuXG4gICAgaWYgKHN0ciA9PT0gJ3RydWUnKSB7XG4gICAgICByZXQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc3RyID09PSAnZmFsc2UnKSB7XG4gICAgICByZXQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHN0ciA9PSBudWxsKSB7XG4gICAgICByZXQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoc3RyLm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0ID0gcGFyc2VJbnQoc3RyLCAxMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBzdHlsZVByZWZpeERldGVjdChwcm9wZXJ0eSkge1xuICAgIGxldCB2YWxpZFByb3BlcnR5O1xuICAgIGxldCBzdHlsZXMgPSB0aGlzLnRvQXJyYXkod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnJykpO1xuICAgIGxldCBpbmNsdWRlcyA9IChuZWVkbGUpID0+IHN0eWxlcy5pbmRleE9mKG5lZWRsZSkgIT09IC0xO1xuXG4gICAgaWYgKGluY2x1ZGVzKGAtd2Via2l0LSR7cHJvcGVydHl9YCkpIHtcbiAgICAgIHZhbGlkUHJvcGVydHkgPSBgLXdlYmtpdC0ke3Byb3BlcnR5fWA7XG4gICAgfSBlbHNlIGlmIChpbmNsdWRlcyhgLW1vei0ke3Byb3BlcnR5fWApKSB7XG4gICAgICB2YWxpZFByb3BlcnR5ID0gYC1tb3otJHtwcm9wZXJ0eX1gO1xuICAgIH0gZWxzZSBpZiAoaW5jbHVkZXMoYC1tcy0ke3Byb3BlcnR5fWApKSB7XG4gICAgICB2YWxpZFByb3BlcnR5ID0gYC1tcy0ke3Byb3BlcnR5fWA7XG4gICAgfSBlbHNlIGlmIChpbmNsdWRlcyhwcm9wZXJ0eSkpIHtcbiAgICAgIHZhbGlkUHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRQcm9wZXJ0eTtcbiAgfVxufTtcbiJdfQ==
