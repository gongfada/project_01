"use strict";



const ColorRefTable = [
	['aliceblue','#f0f8ff'],
	['antiquewhite','#faebd7'],
	['aqua','#00ffff'],
	['aquamarine','#7fffd4'],
	['azure','#f0ffff'],
	['beige','#f5f5dc'],
	['bisque','#ffe4c4'],
	['black','#000000'],
	['blanchedalmond','#ffebcd'],
	['blue','#0000ff'],
	['blueviolet','#8a2be2'],
	['brown','#a52a2a'],
	['burlywood','#deb887'],
	['cadetblue','#5f9ea0'],
	['chartreuse','#7fff00'],
	['chocolate','#d2691e'],
	['coral','#ff7f50'],
	['cornflowerblue'],
	['cornsilk','#fff8dc'],
	['crimson','#dc143c'],
	['cyan','#00ffff'],
	['darkblue','#00008b'],
	['darkcyan','#008b8b'],
	['darkgoldenrod','#b8860b'],
	['darkgray','#a9a9a9'],
	['darkgreen','#006400'],
	['darkgrey','#a9a9a9'],
	['darkkhaki','#bdb76b'],
	['darkmagenta','#8b008b'],
	['darkolivegreen','#556b2f'],
	['darkorange','#ff8c00'],
	['darkorchid','#9932cc'],
	['darkred','#8b0000'],
	['darksalmon','#e9967a'],
	['darkseagreen','#8fbc8f'],
	['darkslateblue','#483d8b'],
	['darkslategray','#2f4f4f'],
	['darkslategrey','#2f4f4f'],
	['darkturquoise','#00ced1'],
	['darkviolet','#9400d3'],
	['deeppink','#ff1493'],
	['deepskyblue','#00bfff'],
	['dimgray','#696969'],
	['dimgrey','#696969'],
	['dodgerblue','#1e90ff'],
	['firebrick','#b22222'],
	['floralwhite','#fffaf0'],
	['forestgreen','#228b22'],
	['fuchsia','#ff00ff'],
	['gainsboro','#dcdcdc'],
	['ghostwhite','#f8f8ff'],
	['gold','#ffd700'],
	['goldenrod','#daa520'],
	['gray','#808080'],
	['green','#008000'],
	['greenyellow','#adff2f'],
	['grey','#808080'],
	['honeydew','#f0fff0'],
	['hotpink','#ff69b4'],
	['indianred','#cd5c5c'],
	['indigo','#4b0082'],
	['ivory','#fffff0'],
	['khaki','#f0e68c'],
	['lavender','#e6e6fa'],
	['lavenderblush','#fff0f5'],
	['lawngreen','#7cfc00'],
	['lemonchiffon','#fffacd'],
	['lightblue','#add8e6'],
	['lightcoral','#f08080'],
	['lightcyan','#e0ffff'],
	['lightgoldenrodyellow','#fafad2'],
	['lightgray','#d3d3d3'],
	['lightgreen','#90ee90'],
	['lightgrey','#d3d3d3'],
	['lightpink','#ffb6c1'],
	['lightsalmon','#ffa07a'],
	['lightseagreen','#20b2aa'],
	['lightskyblue','#87cefa'],
	['lightslategray','#778899'],
	['lightslategrey','#778899'],
	['lightsteelblue','#b0c4de'],
	['lightyellow','#ffffe0'],
	['lime','#00ff00'],
	['limegreen','#32cd32'],
	['linen','#faf0e6'],
	['magenta','#ff00ff'],
	['maroon','#800000'],
	['mediumaquamarine','#66cdaa'],
	['mediumblue','#0000cd'],
	['mediumorchid','#ba55d3'],
	['mediumpurple','#9370db'],
	['mediumseagreen','#3cb371'],
	['mediumslateblue','#7b68ee'],
	['mediumspringgreen','#00fa9a'],
	['mediumturquoise','#48d1cc'],
	['mediumvioletred','#c71585'],
	['midnightblue','#191970'],
	['mintcream','#f5fffa'],
	['mistyrose','#ffe4e1'],
	['moccasin','#ffe4b5'],
	['navajowhite','#ffdead'],
	['navy','#000080'],
	['oldlace','#fdf5e6'],
	['olive','#808000'],
	['olivedrab','#6b8e23'],
	['orange','#ffa500'],
	['orangered','#ff4500'],
	['orchid','#da70d6'],
	['palegoldenrod','#eee8aa'],
	['palegreen','#98fb98'],
	['paleturquoise','#afeeee'],
	['palevioletred','#db7093'],
	['papayawhip','#ffefd5'],
	['peachpuff','#ffdab9'],
	['peru','#cd853f'],
	['pink','#ffc0cb'],
	['plum','#dda0dd'],
	['powderblue','#b0e0e6'],
	['purple','#800080'],
	['red','#ff0000'],
	['rosybrown','#bc8f8f'],
	['royalblue','#4169e1'],
	['saddlebrown','#8b4513'],
	['salmon','#fa8072'],
	['sandybrown','#f4a460'],
	['seagreen','#2e8b57'],
	['seashell','#fff5ee'],
	['sienna','#a0522d'],
	['silver','#c0c0c0'],
	['skyblue','#87ceeb'],
	['slateblue','#6a5acd'],
	['slategray','#708090'],
	['slategrey','#708090'],
	['snow','#fffafa'],
	['springgreen','#00ff7f'],
	['steelblue','#4682b4'],
	['tan','#d2b48c'],
	['teal','#008080'],
	['thistle','#d8bfd8'],
	['tomato','#ff6347'],
	['turquoise','#40e0d0'],
	['violet','#ee82ee'],
	['wheat','#f5deb3'],
	['white','#ffffff'],
	['whitesmoke','#f5f5f5'],
	['yellow','#ffff00'],
	['yellowgreen','#9acd32']
],


UTILS = {

	get nowTime(){

		return performance ? performance.now() : Date.now();

	},
	
	isObject(obj){
		
		return obj !== null && typeof obj === "object" && Array.isArray(obj) === false;
		
	},
	
	isNumber(num){

		return typeof num === "number" && isNaN(num) === false;

	},

	//删除 string 两边空格
	removeSpaceSides(string){

		return string.replace(/(^\s*)|(\s*$)/g, "");

	},

	//返回 num 与 num1 之间的随机数
	random(num, num1){
		if(num < num1) return Math.random() * (num1 - num) + num;
		else if(num > num1) return Math.random() * (num - num1) + num1;
		else return num;
		
	},

	//generate UUID
	generateUUID: function (){
		const _lut = [];
	
		for ( let i = 0; i < 256; i ++ ) {
	
			_lut[ i ] = ( i < 16 ? '0' : '' ) + ( i ).toString( 16 );
	
		}
	
		return function (){
			const d0 = Math.random() * 0xffffffff | 0;
			const d1 = Math.random() * 0xffffffff | 0;
			const d2 = Math.random() * 0xffffffff | 0;
			const d3 = Math.random() * 0xffffffff | 0;
			const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
			_lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
			_lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
			_lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];
	
			return uuid.toLowerCase(); //toLowerCase() 这里展平连接的字符串以节省堆内存空间
		}
	
	}(),

}


/** Ajax

parameter:
	option = {
		url:		可选, 请求路径 , 默认 ''
		method:		可选, post 或 get请求， 默认 post
		data:		可选, 如果定义则在初始化时自动执行.send(data)方法
		asy:		可选, 是否异步执行, 默认 true
		success:	可选, 成功回调, 默认 null
		error:		可选, 失败回调, 默认 null
		change:		可选, 请求中回调, 默认 null
	}

attribute:
	xhr: XMLHttpRequest;

method:
	send(data, success): this;

demo:
	new Ajax({
		url: '/login',
		data: `email=${email}&password=${password}`,
		success: (data)=> console.log(JSON.parse(data)),
	});
	
*/
class Ajax{
	
	constructor(option = {}){
		this.url = option.url || "";
		this.method = option.method || "post";
		this.data = option.data || "";
		this.asy = typeof option.asy === "boolean" ? option.asy : true;
		this.success = option.success || null;
		this.error = option.error || null;
		this.change = option.change || null;

		//init XML
		this.xhr = new XMLHttpRequest();
		this.onreadystatechange = e => {

			if(e.target.readyState === 4 && e.target.status === 200){
				if(this.success !== null) this.success(e.target.responseText);
			}

			else if(this.change !== null) this.change(e);
			
		}

		this.xhr.onerror = e => {
			if(this.error !== null) this.error(e);
			else console.error("Ajax: "+e);
		}

		if(option.data) this.send();
	}

	send(data = "", success = null){
		if(data !== "") this.data = data;
		if(success !== null) this.success = success;

		if(this.method === "get"){
			this.xhr.open(this.method, this.url, this.asy);
			this.xhr.send();
			return this;
		}

		this.xhr.open(this.method, this.url, this.asy);
		this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		this.xhr.send(this.data);

		return this;
	}
	
}




/* Socket

demo:
	//ws.readyState === 1 //表示链接成功

	const ws = new WebSocket("ws://localhost:9090/ws");
    
	ws.onopen = function(e) {
		
	}
	
	ws.onclose = function(e) {
		
	}
	
	ws.onmessage = function(e) {
		
	}

*/
class Socket{


}



/* IndexedDB 本地数据库

parameter:
	name: String;				//需要打开的数据库名称(如果不存在则会新建一个) 必须
	done: Function(IndexedDB);	//链接数据库成功时的回调 默认 null
	version: Number; 			//数据库版本(高版本数据库将覆盖低版本的数据库) 默认 1 

attribute:
	database: IndexedDB;			//链接完成的数据库对象
	transaction: IDBTransaction;	//事务管理(读和写)
	objectStore: IDBObjectStore;	//当前的事务

method:
	set(data, key, callback)		//添加或更新
	get(key, callback)				//获取
	delete(key, callback)			//删除

	traverse(callback)				//遍历
	getAll(callback)				//获取全部
	clear(callback)					//清理所以数据
	close() 						//关闭数据库链接

readOnly:

static:
	indexedDB: Object;

demo:
	
	new IndexedDB('TEST', db => {

		conosle.log(db);

	});

*/
class IndexedDB{

	static indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

	constructor(name, done = null, version = 1){
		if(IndexedDB.indexedDB === undefined) return console.error("IndexedDB: 不支持IndexedDB");
		if(typeof name !== 'string') return console.warn('IndexedDB: 参数错误');

		//this.database = null;
		const request = IndexedDB.indexedDB.open(name, version);
		
		request.onupgradeneeded = (e)=>{ //数据库不存在 或 版本号不同时 触发
			const db = this.database || e.target.result;
			if(db.objectStoreNames.contains(name) === false) db.createObjectStore(name);
			
		}
		
		request.onsuccess = (e)=>{
			const db = e.target.result;

			//事务管理器
			const transaction = db.transaction(name, 'readwrite');

			//创建一个事务
			const objectStore = transaction.objectStore(name);

			Object.assign(this, {
				database: db,
				transaction: transaction,
				objectStore: objectStore,
			});

			if(typeof done === 'function') done(this);
		}
		
		request.onerror = (e)=>{
			console.error(e);
		}
		
	}

	close(){

		return this.database.close();

	}

	set(data, key = 0, callback = null){
		
		this.objectStore.put(data, key).onsuccess = callback;

	}
	
	get(key = 0, callback = null){

		this.objectStore.get(key).onsuccess = callback;
		
	}

	delete(key = 0, callback = null){

		this.objectStore.delete(key).onsuccess = callback;

	}
	
	getAll(callback = null){

		this.objectStore.getAll().onsuccess = callback;

	}
	
	clear(callback = null){
		
		this.objectStore.clear().onsuccess = callback;
		
	}

	traverse(callback = null){
		
		this.objectStore.openCursor().onsuccess = callback;

	}

}




/* TreeStruct 树结构基类

attribute:
	parent: TreeStruct;
	children: Array[TreeStruct];

method:
	add(v: TreeStruct): v; //v添加到自己的子集
	remove(v: TreeStruct): v; //删除v, 前提v必须是自己的子集
	export(): Array[Object]; //TreeStruct 转为 可导出的结构, 包括其所有的后代

	traverse(callback: Function): undefined;  //迭代自己的每一个后代, 包括自己
		callback(value: TreeStruct); //如返回 "continue" 则不在迭代其后代;

	traverseUp(callback): undefined; //向上遍历每一个父, 包括自己
		callback(value: TreeStruct); //如返回 "break" 立即停止遍历;

static:
	import(arr: Array[Object]): TreeStruct; //.export() 返回的 arr 转为 TreeStruct

*/
class TreeStruct{

	static import(arr){
		//json = JSON.parse(json);
		const len = arr.length;

		for(let k = 0, v; k < len; k++){
			v = Object.assign(new TreeStruct(), arr[k]);
			v.parent = arr[arr[k].parent] || null;
			if(v.parent !== null) v.parent.add(v);
			arr[k] = v;
		}

		return arr[0];
	}

	constructor(){
		this.parent = null;
		this.children = [];

	}

	add(v){
		v.parent = this;
		if(this.children.includes(v) === false) this.children.push(v);
		
		return v;
	}

	remove(v){
		const i = this.children.indexOf(v);
		if(i !== -1) this.children.splice(i, 1);
		v.parent = null;

		return v;
	}

	traverse(callback){
		if(callback(this) !== "continue"){
			for(let k = 0, v, len = this.children.length; k < len; k++){
				v = this.children[k];
				if(v.children.length !== 0) v.traverse(callback);
				else callback(v);
	
			}

		}

	}

	traverseUp(callback){
		var par = this.parent;

		while(par !== null){
			if(callback(par) === "break") return;
			par = par.parent;
			
		}

	}

	export(){
		const result = [], arr = [];
		var obj = null;

		this.traverse(v => {
			obj = Object.assign({}, v);
			obj.parent = arr.indexOf(v.parent);
			delete obj.children;
			result.push(obj);
			arr.push(v);

		});
		
		return result; //JSON.stringify(result);
	}

}

Object.defineProperties(TreeStruct.prototype, {
	
	isTreeStruct: {
		configurable: false,
		enumerable: false,
		writable: false,
		value: true,
	}

});




/* Box 矩形

parameter: 
	x = 0, y = 0, w = 0, h = 0;

attribute:
	x,y: Number; 位置
	w,h: Number; 大小

method:
	set(x, y, w, h): this;
	pos(x, y): this; //设置位置
	size(w, h): this; //设置大小
	setFromCircle(circle, inner: Bool): this;	
	toArray(array: Array, index: Integer): this;
	copy(box): this; 							//复制
	clone(): Box;  								//克隆
	center(box): this;							//设置位置在box居中
	distance(x, y): Number; 					//左上角原点 与 x,y 的直线距离
	isEmpty(): Boolean; 						//.w.h是否小于等于零
	maxX(): Number; 							//返回 max x(this.x+this.w);
	maxY(): Number; 							//返回 max y(this.y+this.h);
	expand(box): undefined; 					//扩容; 把box合并到this
	equals(box): Boolean; 						//this与box是否恒等
	intersectsBox(box): Boolean; 				//box与this是否相交(box在this内部也会返回true)
	containsPoint(x, y): Boolean; 				//x,y点是否在this内
	containsBox(box): Boolean;					//box是否在this内(只是相交返回fasle)
	computeOverflow(b: Box, r: Box): undefined;	//this相对b超出的部分赋值到r; r的size小于或等于0的话说明完全超出
	
*/
class Box{
	
	constructor(x = 0, y = 0, w = 0, h = 0){
		//this.set(x, y, w, h);
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;

	}
	
	set(x, y, w, h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		return this;
	}

	pos(x, y){
		this.x = x;
		this.y = y;
	
		return this;
	}
	
	size(w, h){
		this.w = w;
		this.h = h;
	
		return this;
	}

	setFromCircle(circle, inner = true){
		if(inner === true){
			this.x = Math.sin(-135 / 180 * Math.PI) * circle.r + circle.x;
			this.y = Math.cos(-135 / 180 * Math.PI) * circle.r + circle.y;
			this.w = this.h = Math.sin(135 / 180 * Math.PI) * circle.r + circle.x - this.x;

		}

		else{
			this.x = circle.x - circle.r;
			this.y = circle.y - circle.r;
			this.w = this.h = circle.r * 2;

		}

		return this;
	}

	toArray(array, index){
		array[index] = this.x;
		array[index+1] = this.y;
		array[index+2] = this.w;
		array[index+3] = this.h;

		return this;
	}

	copy(box){
		/* this.x = box.x;
		this.y = box.y;
		this.w = box.w;
		this.h = box.h; */
		return Object.assign(this, box); //this.set(box.x, box.y, box.w, box.h);
	}
	
	clone(){

		//return new this.constructor().copy(this);
		
		return Object.assign(new this.constructor(), this);
	}

	center(box){
		this.x = (box.w - this.w) / 2 + box.x;
		this.y = (box.h - this.h) / 2 + box.y;

		return this;
	}

	distance(x, y){
		
		return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
	}

	isEmpty(){

		return this.w <= 0 || this.h <= 0;
	}

	maxX(){

		return this.x + this.w;
	}

	maxY(){

		return this.y + this.h;
	}

	equals(box){

		return this.x === box.x && this.w === box.w && this.y === box.y && this.h === box.h;
	}

	expand(box){
		var v = Math.min(this.x, box.x);
		this.w = Math.max(this.x + this.w - v, box.x + box.w - v);
		this.x = v;

		v = Math.min(this.y, box.y);
		this.h = Math.max(this.y + this.h - v, box.y + box.h - v);
		this.y = v;

	}

	intersectsBox(box){

		return box.x + box.w < this.x || box.x > this.x + this.w || box.y + box.h < this.y || box.y > this.y + this.h ? false : true;
	}

	containsPoint(x, y){

		return x < this.x || x > this.x + this.w || y < this.y || y > this.y + this.h ? false : true;
	}

	containsBox(box){

		return this.x <= box.x && box.x + box.w <= this.x + this.w && this.y <= box.y && box.y + box.h <= this.y + this.h;
	}

	computeOverflow(p, r){
		r["copy"](this);
		
		if(this["x"] < p["x"]){
			r["x"] = p["x"];
			r["w"] -= p["x"] - this["x"];
		}

		if(this["y"] < p["y"]){
			r["y"] = p["y"];
			r["h"] -= p["y"] - this["y"];
		}

		var m = p["x"] + p["w"];
		if(r["x"] + r["w"] > m) r["w"] = m - r["x"];

		m = p["y"] + p["h"];
		if(r["y"] + r["h"] > m) r["h"] = m - r["y"];

	}
	
}

Object.defineProperties(Box.prototype, {

	isBox: {
		configurable: false,
		enumerable: false,
		writable: false,
		value: true,
	}

});




/* Circle 圆形
parameter:
attribute:
	x,y: Number; 中心点
	r: Number; 半径

method:
	set(x, y, r): this;
	pos(x, y): this;
	copy(circle: Circle): this;
	clone(): Circle;
	distance(x, y): Number;
	equals(circle: Circle): Bool;
	containsPoint(x, y): Bool; 
	intersectsCircle(circle: Circle): Bool;
	intersectsBox(box: Box): Bool;
	setFromBox(box, inner = true): this;

*/
class Circle{

	constructor(x = 0, y = 0, r = -1){
		//this.set(0, 0, -1);
		this.x = x;
		this.y = y;
		this.r = r;
	}

	set(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;

		return this;
	}

	setFromBox(box, inner = true){
		this.x = box.w / 2 + box.x;
		this.y = box.h / 2 + box.y;

		if(inner === true) this.r = Math.min(box.w, box.h) / 2;
		else this.r = Math.max(box.w, box.h) / 2;

		return this;
	}

	toArray(array, index){
		array[index] = this.x;
		array[index+1] = this.y;
		array[index+2] = this.r;
		
		return this;
	}

	pos(x, y){
		this.x = x;
		this.y = y;

		return this;
	}

	copy(circle){
		this.r = circle.r;
		this.x = circle.x;
		this.y = circle.y;

		return this;
	}

	clone(){

		return new this.constructor().copy(this);

	}

	distance(x, y){
		
		return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));

	}

	equals(circle){

		return circle.x === this.x && circle.y === this.y && circle.r === this.r;

	}

	containsPoint(x, y){

		return (Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2) <= Math.pow(this.r, 2));

	}

	intersectsCircle(circle){

		return (Math.pow(circle.x - this.x, 2) + Math.pow(circle.y - this.y, 2) <= Math.pow(circle.r + this.r, 2));

	}

	intersectsBox(box){
		
		return (Math.pow(Math.max(box.x, Math.min(box.x + box.w, this.x)) - this.x, 2) + Math.pow(Math.max(box.y, Math.min(box.y + box.h, this.y)) - this.y, 2) <= Math.pow(this.r, 2));
	
	}

}

Object.defineProperties(Circle.prototype, {

	isCircle: {
		configurable: false,
		enumerable: false,
		writable: false,
		value: true,
	}

});




/* RGBColor
parameter: 
	r, g, b

method:
	set(r, g, b: Number): this;			//rgb: 0 - 255; 第一个参数可以为 css color
	setFormHex(hex: Number): this; 		//
	setFormHSV(h, s, v: Number): this;	//h:0-360; s,v:0-100; 颜色, 明度, 暗度
	setFormString(str: String): Number;	//str: 英文|css color; 返回的是透明度 (如果为 rgba 则返回a; 否则总是返回1)

	copy(v: RGBColor): this;
	clone(): RGBColor;

	getHex(): Number;
	getHexString(): String;
	getHSV(result: Object{h, s, v}): result;	//result: 默认是一个新的Object
	getRGBA(alpha: Number): String; 			//alpha: 0 - 1; 默认 1
	getStyle() 									//.getRGBA()别名

	stringToColor(str: String): String; //str 转为 css color; 如果str不是color格式则返回 ""

*/
class RGBColor{

	constructor(r = 255, g = 255, b = 255){
		this.r = r;
		this.g = g;
		this.b = b;

	}

	copy(v){
		this.r = v.r;
		this.g = v.g;
		this.b = v.b;
		return this;
	}

	clone(){
		return new this.constructor().copy(this);
	}

	set(r, g, b){
		if(typeof r !== "string"){
			this.r = r || 255;
			this.g = g || 255;
			this.b = b || 255;
		}

		else this.setFormString(r);
		
		return this;
	}

	setFormHex(hex){
		hex = Math.floor( hex );

		this.r = hex >> 16 & 255;
		this.g = hex >> 8 & 255;
		this.b = hex & 255;
		return this;
	}

	setFormHSV(h, s, v){
		h = h >= 360 ? 0 : h;
		var s=s/100;
		var v=v/100;
		var h1=Math.floor(h/60) % 6;
		var f=h/60-h1;
		var p=v*(1-s);
		var q=v*(1-f*s);
		var t=v*(1-(1-f)*s);
		var r,g,b;
		switch(h1){
			case 0:
				r=v;
				g=t;
				b=p;
				break;
			case 1:
				r=q;
				g=v;
				b=p;
				break;
			case 2:
				r=p;
				g=v;
				b=t;
				break;
			case 3:
				r=p;
				g=q;
				b=v;
				break;
			case 4:
				r=t;
				g=p;
				b=v;
				break;
			case 5:
				r=v;
				g=p;
				b=q;
				break;
		}

		this.r = Math.round(r*255);
		this.g = Math.round(g*255);
		this.b = Math.round(b*255);
		return this;
	}

	setFormString(color){
		if(typeof color !== "string") return 1;
		var _color = this.stringToColor(color);
		
		if(_color[0] === "#"){
			const len = _color.length;
			if(len === 4){
				_color = _color.slice(1);
				this.setFormHex(parseInt("0x"+_color + "" + _color));
			}
			else if(len === 7) this.setFormHex(parseInt("0x"+_color.slice(1)));
			
		}

		else if(_color[0] === "r" && _color[1] === "g" && _color[2] === "b"){
			const arr = [];
			for(let k = 0, len = _color.length, v = "", is = false; k < len; k++){
				
				if(is === true){
					if(_color[k] === "," || _color[k] === ")"){
						arr.push(parseFloat(v));
						v = "";
					}
					else v += _color[k];
					
				}

				else if(_color[k] === "(") is = true;
				
			}

			this.set(arr[0], arr[1], arr[2]);
			return arr[3] === undefined ? 1 : arr[3];
		}
		
		return 1;
	}

	getHex(){

		return Math.max( 0, Math.min( 255, this.r ) ) << 16 ^ Math.max( 0, Math.min( 255, this.g ) ) << 8 ^ Math.max( 0, Math.min( 255, this.b ) ) << 0;

	}

	getHexString(){

		return '#' + ( '000000' + this.getHex().toString( 16 ) ).slice( - 6 );

	}

	getHSV(result){
		result = result || {}
		var r=this.r/255;
		var g=this.g/255;
		var b=this.b/255;
		var h,s,v;
		var min=Math.min(r,g,b);
		var max=v=Math.max(r,g,b);
		var l=(min+max)/2;
		var difference = max-min;
		
		if(max==min){
			h=0;
		}else{
			switch(max){
				case r: h=(g-b)/difference+(g < b ? 6 : 0);break;
				case g: h=2.0+(b-r)/difference;break;
				case b: h=4.0+(r-g)/difference;break;
			}
			h=Math.round(h*60);
		}
		if(max==0){
			s=0;
		}else{
			s=1-min/max;
		}
		s=Math.round(s*100);
		v=Math.round(v*100);
		result.h = h;
		result.s = s;
		result.v = v;
		return result;
	}

	getStyle(){
		return this.getRGBA(1);
	}

	getRGBA(alpha){
		alpha = typeof alpha === 'number' ? alpha : 1;
		return 'rgba('+this.r+','+this.g+','+this.b+','+alpha+')';
	}

	stringToColor(str){
		var _color = "";
		for(let k = 0, len = str.length; k < len; k++){
			if(str[k] === " ") continue;
			_color += str[k];
		}
		
		if(_color[0] === "#" || (_color[0] === "r" && _color[1] === "g" && _color[2] === "b")) return _color;
		else{
			for(let k = 0, len = ColorRefTable.length; k < len; k++){
				str = ColorRefTable[k];
				if(str[0] === _color) return str[1];
			}
		}

		return "";
	}

}

Object.defineProperties(RGBColor.prototype, {

	isRGBColor: {
		configurable: false,
		enumerable: false,
		writable: false,
		value: true,
	}

});




/* Timer 定时器 

parameter:
	func: Function; //定时器运行时的回调; 默认 null
	speed: Number; //延迟多少毫秒执行一次 func; 默认 3000;
	step: Integer; //执行多少次: 延迟speed毫秒执行一次 func; 默认 Infinity;
	isStart: bool; //初始化时是否自动启动一次计时器(前提是 func 已被定义); 默认 true

attribute:
	func, speed, step;	//这些属性可以随时更改;

	//只读属性
	readyState: String;	//定时器状态; 可能值: '', 'start', 'running', 'done'; ''表示定时器从未启动
	number: Number;		//运行的次数

method:
	start(func, speed): this;	//启动定时器 (如果定时器正在运行则什么都不会做)
	restart(): undefined;		//重启定时器
	stop(): undefined;			//停止定时器

demo:
	//每 3000 毫秒 打印一次 timer.number, 重复 Infinity 次;
	new Timer(timer => console.log(timer.number), 3000, Infinity);

*/
class Timer{

	#restart = -1;
	#speed = 0;
	#isRun = false;
	#i = 0;
	#readyState = ''; //start|running
	//#paused = -1;

	get number(){
		return this.#i;
	}
	
	get readyState(){
		return this.#i >= this.step ? 'done' : this.#readyState;
	}

	/* get paused(){
		return this.#paused !== -1;
	}

	set paused(v){
		if(v === true){
			
			if(this.#i < this.step){
				if(this.#paused === -1) this.#paused = this.#i;
				this.stop();
			}

		}

		else if(this.#paused !== -1){
			this.restart();
			this.#i = this.#paused;
			this.#paused = -1;

		}

	} */

	constructor(func = null, speed = 3000, step = 1, isStart = true){
		this.func = func;
		this.speed = speed;
		this.step = step;
		//this.onDone = null;
	
		if(isStart === true && this.func !== null) this.restart();

	}

	copy(timer){
		this.func = timer.func;
		this.speed = timer.speed;
		this.step = timer.step;
		return this;
	}

	clone(){
		return new this.constructor().copy(this);
	}

	start(func, time){
		if(typeof func === 'function') this.func = func;
		if(UTILS.isNumber(time) === true) this.speed = time;
		this.restart();

		return this;
	}

	restart(){
		if(this.#isRun === false){
			setTimeout(this._loop, this.speed);
			this.#isRun = true;
			this.#restart = -1;
			this.#i = 0;
			this.#readyState = 'start';
			
		}

		else{
			this.#restart = Date.now();
			this.#speed = this.speed;

		}

	}

	stop(){
		if(this.#isRun === true){
			this.#restart = -1;
			this.#i = this.step;
		}

	}

	_loop = () => {

		//重启计时器
		if(this.#restart !== -1){
			
			let gone = Date.now() - this.#restart;
			this.#restart = -1;
			
			if(gone >= this.#speed) gone = this.speed;
			else{
				if(this.#speed === this.speed) gone = this.#speed - gone;
				else gone = (this.#speed - gone) / this.#speed * this.speed;
			}
			
			setTimeout(this._loop, gone);
			
			this.#i = 1;
			if(this.func !== null) this.func(this);

		}

		//正在运行
		else if(this.#i < this.step){

			setTimeout(this._loop, this.speed);

			this.#i++;
			if(this.#readyState !== 'running') this.#readyState = 'running';
			if(this.func !== null) this.func(this);

		}

		//完成
		else this.#isRun = false;

	}

}




/* SeekPath A*寻路

parameter: 
	option: Object{
		angle, timeout, maxHeight, size, lenX, lenY
	}

	heights: Array[Number]

attribute:
	size: Number; 	//每个索引的大小
	lenX: Number; 	//最大长度x (设置此属性时, 你需要重新.initMap(heights); .range 会被重置)
	lenY: Number; 	//最大长度y (设置此属性时, 你需要重新.initMap(heights); .range 会被重置)

	range: Box;			//本次的搜索范围, 默认: 0,0,lenX,lenY
	angle: Number; 		//8四方向 或 16八方向 默认 16
	timeout: Number; 	//超时毫秒 默认 500
	maxHeight: Number; 	//相邻可走的最大高 默认 6

	//只读属性
	success: Bool;			//只读; 本次搜索是否成功找到终点; (如果为false说明.run()返回的是 距终点最近的路径; 超时也会被判定为false)
	path: Array[x, y, z];	//存放.run()返回的路径
	map: Map; 				//地图的缓存数据

method:
	initMap(heights: Array[Number]): undefiend; //初始化类时自动调用一次; heights:如果你的场景存在高请定义此参数
	run(x, y, x1, y1: Number): Array[x, y, z]; //参数索引坐标

demo:
	const sp = new SeekPath({
		angle: 16,
		timeout: 500,
		maxHeight: 6,
		size: 10,
		lenX: 1000,
		lenY: 1000,
	}),

	path = sp.run(0, 0, 1000, 1000);

	console.log(sp);

*/
class SeekPath{

	static _open = []
	static _dots = [] 
	static dots = []
	static _sort = function (a, b){return a["f"] - b["f"];}

	#map = null;
	#path = [];
	#success = true;
	#halfX = 50;
	#halfY = 50;

	#size = 10;
	#lenX = 10;
	#lenY = 10;

	constructor(option = {}, heights = null){
		this.angle = (option.angle === 8 || option.angle === 16) ? option.angle : 16; //8四方向 或 16八方向
		this.timeout = option.timeout || 500; //超时毫秒
		this.maxHeight = option.maxHeight || 6;
		this.range = new Box();
		this.size = option.size || 10;
		this.lenX = option.lenX || 10;
		this.lenY = option.lenY || 10;
		
		this.initMap(heights);

	}

	get map(){
		return this.#map;
	}

	get path(){
		return this.#path;
	}

	get success(){
		return this.#success;
	}

	get size(){
		return this.#size;
	}

	set size(v){
		this.#size = v;
		v = v / 2;
		this.#halfX = v * this.#lenX;
		this.#halfY = v * this.#lenY;
	}

	get lenX(){
		return this.#lenX;
	}

	set lenX(v){
		this.#lenX = v;
		v = this.#size / 2;
		this.#halfX = v * this.#lenX;
		this.#halfY = v * this.#lenY;
		this.range.x = 0;
		this.range.w = this.#lenX-1;
	}

	get lenY(){
		return this.#lenY;
	}

	set lenY(v){
		this.#lenY = v;
		v = this.#size / 2;
		this.#halfX = v * this.#lenX;
		this.#halfY = v * this.#lenY;
		this.range.y = 0;
		this.range.h = this.#lenY-1;
	}

	toScene(n, v){ //n = "x|y"
		//n = n === "y" ? "lenY" : "lenX";
		if(n === "y") return v * this.#size - this.#halfY;
		return v * this.#size - this.#halfX;
	
	}
	
	toIndex(n, v){
		//n = n === "y" ? "lenY" : "lenX";
		if(n === "y") return Math.round((this.#halfY + v) / this.#size);
		return Math.round((this.#halfX + v) / this.#size);

	}

	initMap(heights){
		heights = Array.isArray(heights) === true ? heights : null;
		
		const lenX = this.lenX, lenY = this.lenY;
		var getHeight = (ix, iy) => {
			if(heights === null) return 0;
			ix = heights[ix * lenY + iy];
			if(ix === undefined) return -99999999;
			return ix;
		},

		map = []//new Map();

		for(let x = 0, y, m; x < lenX; x++){
			m = []//new Map();
			for(y = 0; y < lenY; y++) m[y] = {x:x, y:y, height:getHeight(x, y),   g:0, h:0, f:0, p:null, id:""}//m.set(y, {x:x, y:y, height:getHeight(x, y),   g:0, h:0, f:0, p:null, id:""});
			map[x] = m;//map.set(x, m);
		}
		
		this.#map = map;
		this._id = -1;
		this._updateID();

		map = heights = getHeight = undefined;

	}

	setDots(x, y, a, r){ //获取周围的点 x,y, a:8|16, r:存放结果数组
		r.length = 0;
		const x_1 = x-1, x1 = x+1, y_1 = y-1, y1 = y+1;
		if(a === 16) r.push(x_1, y_1, x, y_1, x1, y_1, x_1, y, x1, y, x_1, y1, x, y1, x1, y1);
		else r.push(x, y_1, x, y1, x_1, y, x1, y);
	
	}

	_updateID(){
		this._id++;
		this._openID = "o_"+this._id;
		this._closeID = "c_"+this._id;
		
	}

	run(x, y, x1, y1){
		this.#path.length = 0;
		if(this.#map === null || this.range.containsPoint(x, y) === false) return this.#path;
		this._updateID();

		const _map = this.#map,
		_sort = SeekPath._sort,
		_open = SeekPath._open,
		_dots = SeekPath._dots, 
		dots = SeekPath.dots,
		time = Date.now();

		var _n = _map[x][y],//_map.get(x).get(y), 
		isDot = true, 
		suc = _n, 
		k, _k, _x, _y, mhd, g, h, f, _d;

		_n.g = 0;
		_n.h = _n.h = Math.abs(x1 - x) * 10 + Math.abs(y1 - y) * 10; 
		_n.f = _n.h;
		_n.p = null;
		_n.id = this._openID;
		_open.push(_n);
		
		while(_open.length !== 0){
			if(Date.now() - time > this.timeout) break;

			_open.sort(_sort);
			_n = _open.shift();
			if(_n.x === x1 && _n.y === y1){
				suc = _n;
				break;
			}
			
			if(suc.h > _n.h) suc = _n;
			_n.id = this._closeID;
			this.setDots(_n.x, _n.y, this.angle, _dots);
			
			for(k = 0; k < this.angle; k += 2){

				_x = _dots[k]; _y = _dots[k+1];
				if(this.range.containsPoint(_x, _y) === false) continue;

				_d = _map[_x][_y];//_map.get(_x).get(_y);
				if(_d.id === this._closeID) continue;

				mhd = Math["abs"](_n["x"] - _x) + Math["abs"](_n["y"] - _y);
				g = _n["g"] + (mhd === 1 ? 10 : 14);
				h = Math["abs"](x1 - _x) * 10 + Math["abs"](y1 - _y) * 10;
				f = g + h;
			
				if(_d.id !== this._openID){
					
					if(Math["abs"](_n.height - _d.height) < this.maxHeight){
						
						if(mhd !== 1 && this.angle === 16){
							
							this.setDots(_d.x, _d.y, 8, dots); //与 d 正对的4个点

							for(_k = 0; _k < 8; _k += 2){
								_x = dots[_k]; _y = dots[_k+1];
								if(this.range.containsPoint(_x, _y) === false) continue;

								if(Math["abs"](_n.x - _x) + Math["abs"](_n.y - _y) === 1){

									if(Math["abs"](_n.height - _map[_x][_y].height) >= this.maxHeight){
										isDot = false;
										break;
									}
									
								}

							}
							
						}

						if(isDot === true){
							_d.g = g;
							_d.h = h;
							_d.f = f;
							_d.p = _n;
							_d.id = this._openID;
							_open.push(_d);
							
						}

						else isDot = true;
						
					}

				}

				else if(g < _d.g){
					_d.g = g;
					_d.f = g + _d.h;
					_d.p = _n;
					
				}
	
			}
		
		}

		this.#success = suc === _n;

		while(suc !== null){
			this.#path.unshift(this.toScene("x", suc["x"]), suc["height"], this.toScene("y", suc["y"]));
			suc = suc["p"];
		}

		_open.length = _dots.length = dots.length = 0;
		
		return this.#path;
	}

}




/* RunningList (触发过程中可以安全的删除自己)
	如果触发过程中删除(回调函数中删除正在遍历的数组), 不仅 len 没有变(遍历前定义的len没有变, 真实的len随之减少), 而且还会漏掉一个key;

*/
class RunningList{

	static getProxy(runName){

		return new Proxy(new RunningList(runName), {

			get(tar, key){
				
			},

			set(tar, key, val){
				
			}
			
		});

	}

	constructor(runName = 'update'){
		this._running = false;
		this._list = [];
		this._delList = [];
		this._runName = runName;

	}

	get length(){
		return this._list.length;
	}

	push(...v){

		v.forEach(_v => this._list.push(_v));

	}

	splice(v){
		if(this._running === true) this._delList.push(v);

		else{
			const i = this._list.indexOf(v);
			if(i !== -1) this._list.splice(i, 1);
		}

	}

	update(){
		var k, len = this._list.length;

		this._running = true;
		if(this._runName !== ''){
			for(k = 0; k < len; k++) this._list[k][this._runName]();
		}
		else{
			for(k = 0; k < len; k++) this._list[k]();
		}
		this._running = false;

		len = this._delList.length;
		for(k = 0; k < len; k++) this.splice(this._delList[k]);
		this._delList.length = 0;
		
	}

}




/* TweenValue (从 原点 以规定的时间到达  终点)

parameter: origin, end, time, onUpdate, onEnd;

attribute:
	origin: Object; //原点(起点)
	end: Object; //终点
	time: Number; //origin 到 end 花费的时间
	onUpdate: Function; //更新回调; 一个回调参数 origin; 默认null;
	onEnd: Function; //结束回调; 没有回调参数; 默认null; (如果返回的是true将不从队列删除, 你可以在onEnd中更新.end不间断的继续补间)

method:
	reset(origin, end: Object): undefined; //更换 .origin, .end; 它会清除其它对象的缓存属性
	reverse(): undefined; //this.end 复制 this.origin 的原始值
	update(): undefined; //Tween 通过此方法统一更新 TweenValue

demo: 
	//init Tween:
	const tween = new Tween(),
	animate = function (){
		requestAnimationFrame(animate);
		tween.update();
	}

	//init TweenValue:
	const v1 = new Tween.Value({x:0, y:0}, {x:5, y:10}, 1000, v => console.log(v));
	
	animate();
	tween.start(v1);

*/
class TweenValue{

	constructor(origin = {}, end = {}, time = 500, onUpdate = null, onEnd = null, onStart = null){
		this.origin = origin;
		this.end = end;
		this.time = time;

		this.onUpdate = onUpdate;
		this.onEnd = onEnd;
		this.onStart = onStart;
		
		//以下属性不能直接设置
		this._r = null;
		this._t = 0;
		this._v = Object.create(null);

	}

	_start(){
		var v = "";
		for(v in this.origin) this._v[v] = this.origin[v];

		this._t = Date.now();
		//this.update();

	}

	reset(origin, end){
		this.origin = origin;
		this.end = end;
		this._v = Object.create(null);

	}

	reverse(){
		var n = "";
		for(n in this.origin) this.end[n] = this._v[n];

	}

	update(){
		if(this["_r"] !== null){

			var ted = Date["now"]() - this["_t"];
			
			if(ted >= this["time"]){
				
				for(ted in this["origin"]) this["origin"][ted] = this["end"][ted];
				if(this["onUpdate"] !== null) this["onUpdate"](this["origin"]);

				if(this["onEnd"] !== null){

					if(this["onEnd"](this) !== true){
						if(this["_r"] !== null) this["_r"]["stop"](this);
					}

					else this["_start"]();
					
				}

				else this["_r"]["stop"](this);

			}

			else{
				let n = "";
				ted = ted / this["time"];
				for(n in this["origin"]) this["origin"][n] = ted * (this["end"][n] - this["_v"][n]) + this["_v"][n];
				if(this["onUpdate"] !== null) this["onUpdate"](this["origin"]);

			}

		}

	}

}

Object.defineProperties(TweenValue.prototype, {

	isTweenValue: {
		configurable: false,
		enumerable: false,
		writable: false,
		value: true,
	}

});




/* TweenAlone (相对于 TweenValue 此类可以独立补间, 不需要 Tween)

demo:
	const v1 = new TweenAlone({x:0, y:0}, {x:5, y:10}, 1000, v => console.log(v)),
	animate = function (){
		requestAnimationFrame(animate);
		v1.update();
	}

	animate();
	v1.start();

*/
class TweenAlone extends TweenValue{

	constructor(origin, end, time, onUpdate, onEnd, onStart){
		super(origin, end, time, onUpdate, onEnd, onStart);
		
	}

	start(){
		if(this.onStart !== null) this.onStart();
		this._r = this;
		this._start();

	}

	stop(){
		this._r = null;
		
	}

}





/* Tween 动画补间 (TweenValue 的root, 可以管理多个TweenValue)

parameter:
attribute:
method:
	start(value: TweenValue): undefined;
	stop(value: TweenValue): undefined;

static:
	Value: TweenValue;

demo:
	//init Tween:
	const tween = new Tween(),
	animate = function (){
		requestAnimationFrame(animate);
		tween.update();
	}

	//init TweenValue:
	const v2 = new Tween.Value({x:0, y:0}, {x:5, y:10}, 1000, v => console.log(v), v => {
		v2.reverse(); //v2.end 复制起始值
		return true; //返回true表示不删除队列, 需要继续补间
	});
	
	animate();
	tween.start(v2);

*/
class Tween extends RunningList{

	static Value = TweenValue;

	constructor(){
		super();

	}

	start(value){
		if(value.onStart !== null) value.onStart();
		if(value._r === null) this.push(value);
		value._r = this;
		value._start(this);

	}

	stop(value){
		if(value._r !== null) this.splice(value);
		value._r = null;
		
	}

}




/* TweenTargetChange 朝着轴插值(有效的跟踪动态目标)
parameter:	
	v1 = {x: 0}, 
	v2 = {x: 100}, 
	distance = 1,		//每次移动的距离
	onUpdate = null,	//
	onEnd = null

attribute:
	v1: Object; 			//起点
	v2: Object; 			//终点
	onUpdate: Function;		//
	onEnd: Function; 		//

method:
	update(): undefined;						//一般在动画循环里执行此方法
	updateAxis(): undefined; 					//更新v1至v2的方向轴 (初始化时构造器自动调用一次)
	setDistance(distance: Number): undefined; 	//设置每次移动的距离 (初始化时构造器自动调用一次)

demo:
	const ttc = new TweenTargetChange({x:0, y:0}, {x:100, y:100}, 10),

	//计时器模拟动画循环函数, 每秒执行一次.update()
	timer = new Timer(() => {
		ttc.update();
		console.log('update: ', ttc.v1);

	}, 1000, Infinity);

	ttc.onEnd = v => {
		timer.stop();
		console.log('end: ', v);
	}

	timer.start();
	console.log(ttc);

*/
class TweenTargetChange{

	#distance = 1;
	#distancePow2 = 1;
	#axis = {};

	constructor(v1 = {x: 0}, v2 = {x: 100}, distance, onUpdate = null, onEnd = null){
		this.v1 = v1;
		this.v2 = v2;
		this.onUpdate = onUpdate;
		this.onEnd = onEnd;
	
		this.setDistance(distance);
		this.updateAxis();
	}

	setDistance(v = 1){
		this.#distance = v;
		this.#distancePow2 = Math.pow(v, 2);

	}

	updateAxis(){ //更新轴
		var n, v, len = 0;

		for(n in this.v1){
			v = this.v2[n] - this.v1[n];
			len += v * v;
			this.#axis[n] = v;

		}

		len = Math.sqrt(len);

		if(len !== 0){
			
			for(n in this.v1) this.#axis[n] *= 1 / len;

		}
		
	}

	update(){
		var n, len = 0;

		for(n in this.v1) len += Math.pow(this.v1[n] - this.v2[n], 2);

		if(len > this.#distancePow2){

			for(n in this.v1) this.v1[n] += this.#axis[n] * this.#distance;
			if(this.onUpdate !== null) this.onUpdate(this.v1);

		}

		else{
			for(n in this.v1) this.v1[n] = this.v2[n];
			if(this.onEnd !== null) this.onEnd(this.v1);
			
		}

	}

}




/* EventDispatcher (触发过程中可以安全的删除自己)

*/
class EventDispatcher{
	
	constructor(){
		this._eventsList = {};
		this.__eventsList = [];
		this.__trigger = "";

	}

	clearEvents(eventName){ //清除eventName列表, 如果 eventName 未定义清除所有事件
		if(this.__trigger === eventName) return console.warn("EventDispatcher: 清除事件失败");
		if(this._eventsList[eventName] !== undefined) this._eventsList[eventName].func.length = 0;

		else this._eventsList = {}

	}
	
	customEvents(eventName, eventParam){ //创建自定义事件 eventParam 可选 默认{}
		if(typeof eventName !== "string") return console.warn("EventDispatcher: 注册自定义事件失败");
		if(this._eventsList[eventName] !== undefined) return console.warn("EventDispatcher: "+eventName+",已存在");
		eventParam = eventParam || {}
		if(eventParam.type === undefined) eventParam.type = eventName;
		this._eventsList[eventName] = {func: [], param: eventParam}
	
	}

	getParam(eventName){
		return this._eventsList[eventName]["param"];
	}
	
	trigger(eventName, callback){ //触发
		//if(this._eventsList[eventName] === undefined) return;
		
		const obj = this._eventsList[eventName];
		var k, len = obj.func.length;

		if(len !== 0){
			if(typeof callback === "function") callback(obj["param"]); //更新参数(eventParam)

			//触发过程(如果触发过程中删除事件, 不仅 len 没有变, 而且还会漏掉一个key, 所以在触发过程中删除的事件要特殊处理)
			this.__trigger = eventName;
			for(k = 0; k < len; k++) obj["func"][k](obj["param"]);
			this.__trigger = "";
			//触发过程结束
			
			//删除在触发过程中要删除的事件
			len = this.__eventsList.length;
			for(k = 0; k < len; k++) this.deleteEvent(eventName, this.__eventsList[k]);
			this.__eventsList.length = 0;
	
		}

	}
	
	register(eventName, callback){ //注册
		const obj = this._eventsList[eventName];
		if(obj.func.includes(callback) === false) obj.func.push(callback);
		else console.warn("EventDispatcher: 回调函数重复");
	
	}
	
	deleteEvent(eventName, callback){ //删除
		if(this.__trigger === eventName) this.__eventsList.push(callback);
		
		else{
			const obj = this._eventsList[eventName], i = obj.func.indexOf(callback);
			if(i !== -1) obj.func.splice(i, 1);
		}
		
	}

}




/* 表示一个地图的矩形范围
scene, range

attribute:
	x,y: x,z;
	wh: lenX,lenY;

	height: h
	index: index;
	model: url;
	scene: "";

*/
class MapRange extends Box{

	constructor(x,y,w,h){
		super(x,y,w,h);
		this.height = 0;
		this.model = ""; //model的url(range/;  xxx.glb|tree/xxx.glb )
		this.scene = ""; //子集的 fileName
		this.index = 0;  //子集 .ranges 的索引
	}

	copy(v){
		Box.prototype.copy.call(this, v);
		this.height = v.height;
		this.index = v.index;
		this.model = v.model;
		this.scene = v.scene;
		return this;
	}

	clone(){
		
		return new this.constructor().copy(this);
	}

}




/* MapTreeStruct 地图树形结构

parameter: option;

attribute:
	option: {
		name, //地图名称(可视名称)
		fileName, //场景文件名(场景标识)
		fileType,

		maxHeight, //相邻格可走最大高
		size, //每格大小
		lenX, //场景最大长度
		lenZ,
		rangeX, //范围
		rangeZ, 
		ranges:[MapRange]
		
	}

method:
	add(v: MapTreeStruct): MapTreeStruct;
	remove(v: MapTreeStruct): MapTreeStruct;
	replace(a, b: MapTreeStruct): b; //把a的父和子移植到b; a必须是自己的子
	exportJSON(): json; //把 MapTreeStruct 转为 json

*/
class MapTreeStruct extends TreeStruct{

	constructor(option){
		super();
		option = option || {}
		this.parent = option.parent !== undefined ? option.parent : null;
		//this.children = [];
		this.fileType = option.fileType !== undefined ? option.fileType : ".glb";

		this.name = option.name !== undefined ? option.name : "";
		this.fileName = option.fileName !== undefined ? option.fileName : "";
		this.maxHeight = option.maxHeight !== undefined ? option.maxHeight : 1;
		this.size = option.size !== undefined ? option.size : 1;

		this.lenX = option.lenX !== undefined ? option.lenX : 10;
		this.lenZ = option.lenZ !== undefined ? option.lenZ : 10;
		this.rangeX = option.rangeX !== undefined ? option.rangeX : -1;
		this.rangeZ = option.rangeZ !== undefined ? option.rangeZ : -1;

		this.ranges = option.ranges !== undefined ? option.ranges : [];
		
		Object.defineProperties(this, {
			_wi: {
				configurable: true,
				enumerable: false,
				writable: true,
				value: 0,
			}
		
		});
		//option = undefined;
	}

	add(v){
		v.parent = this;
		v._wi = this._wi + 1;
		if(this.children.includes(v) === false) this.children.push(v);
		v.traverse(o => o._wi = o.parent._wi + 1);
		
		return v;
	}

	remove(v){
		const i = this.children.indexOf(v);
		if(i !== -1) this.children.splice(i, 1);
		v.parent = null;

		return v;
	}

	replace(a, b){ //把a的父和子移植到b; a必须是自己的子
		var i = this.children.indexOf(a);
		if(i === -1){
			i = this.children.length;
			this.add(a);
		}

		b.parent = this;
		b.children = a.children;
		this.children[i] = b;
		b._wi = a._wi;

		a.parent = null;
		a.children.length = 0;

		return b;
	}

	exportJSON(){
	
		return JSON.stringify(this.export());
	}

	static importJSON(json){
		json = JSON.parse(json);
		const len = json.length;

		for(let k = 0, v; k < len; k++){
			v = Object.assign(new MapTreeStruct(), json[k]);
			v.parent = json[json[k].parent];
			if(v.parent !== undefined) v.parent.add(v);
			else v.parent = null;
			for(let i = 0, c = v.ranges.length; i < c; i++) v.ranges[i] = new MapRange().copy(v.ranges[i]);
			json[k] = v;
		}

		return json[0];
	}

}




/* MapTreePath

attribute:
	path: [x, z]

*/
class MapTreePath extends TreeStruct{

	constructor(){
		super();
		this.path = [];

	}

	add(v){
		v.parent = this;
		if(this.children.includes(v) === false) this.children.push(v);
		
		return v;
	}

	remove(v){
		const i = this.children.indexOf(v);
		if(i !== -1) this.children.splice(i, 1);
		v.parent = null;

		return v;
	}

	exportJSON(){
	
		return JSON.stringify(this.export());
	}

	static importJSON(json){
		json = JSON.parse(json);
		const len = json.length;

		for(let k = 0, v; k < len; k++){
			v = Object.assign(new MapTreePath(), json[k]);
			v.parent = json[json[k].parent];
			if(v.parent !== undefined) v.parent.add(v);
			else v.parent = null;
			json[k] = v;
		}

		return json[0];
	}

}





/* CanvasAnimateEvent (触发过程中可以安全的删除自己)
遇到的坑: 
	1: canvas css属性缩放: 使用 .setScale(x, y); x,y: 大于1放大canvas, 小于1缩小canvas
	2: canvas 的某个父存在滚动条时需要: scrollElem.onscroll = () => CanvasAnimateRender.updateCanvas();

parameter:
	domElement: CanvasAnimateRender.domElement; //必须
	box: CanvasAnimateRender.domElementRect; //必须
	||或者第一个参数为 CanvasAnimateRender

	与.initEvent(domElement, box)参数一样

attribute:
	domElement //CanvasAnimateRender.domElement
	box: Box; //忽略box以外的ca, 通常为 CanvasAnimateRender.domElementRect 的引用

method:
	add(ca: CanvasAnimate, eventName: String, callback: Function): ca; //ca添加事件
	remove(ca: CanvasAnimate, eventName: String, callback: Function): ca; //ca删除事件
		eventName: 可能的值为 CanvasAnimateEvent.canvasEventsList 的属性名
		callback: 参数 event, ca
	
	clear(ca: CanvasAnimate, eventName: String): ca; //ca 必须; eventName 可选, 如果未定义则清空ca的所有事件;
	disposeEvent(eventName): this; //.initEvent(domElement, box)调用一次此方法
	initEvent(domElement, box): this; //每次更换 domElement, box 后应调用此方法; (CanvasAnimateEvent初始化时自动调用一次)
	setScale(x, y: Number): undefiend; //

event:
	(如果注册了 "out"|"over" 事件, 在弃用时(CanvasAnimateRender 不在使用): 
	必需要调用.disposeEvent(eventName)方法清理注册的dom事件, 
	因为这两个事件用的是 pointermove 而不是 onpointermove);

	CanvasAnimateEvent.canvasEventsList

demo:
	const car = new CanvasAnimateRender({width: 100, height: 100}),
	cae = new CanvasAnimateEvent(car),
	ca = car.add(new CanvasAnimate(image));

	//ca添加点击事件
	cae.add(ca, 'click', (event, target) => console.log(event, target));

	car.render();

*/
class CanvasAnimateEvent{

	static bind(obj, is){
		obj._eventList = {}

		if(is === true){
			let k, evns = CanvasAnimateEvent.canvasEventsList;
			for(k in evns) obj._eventList[k] = [];
		}
			
	}

	static canvasEventsList = {
		down: "onpointerdown",
		move: "onpointermove",
		up: "onpointerup",
		click: "onclick",
		wheel: "onmousewheel",
		out: "pointermove", //移出 
		over: "pointermove", //移入

	}
	
	constructor(domElement, box){
		this._box = new Box();
		this._scale = {x: 1, y: 1};
		this._running = "";
		this._delList = [];
		this.initEvent(domElement, box);
		CanvasAnimateEvent.bind(this);

	}

	setScale(x, y){
		this._scale.x = x || 1;
		this._scale.y = y || 1;

		if(this.domElement){
			this.domElement.style.width = this.domElement.width * this._scale.x + "px";
			this.domElement.style.height = this.domElement.height * this._scale.y + "px";
		}

	}

	initEvent(domElement, box){
		this.disposeEvent();

		if(CanvasAnimateRender.prototype.isPrototypeOf(domElement)){
			this.domElement = domElement.domElement;
			this.box = domElement.domElementRect;
		}

		else{
			this.domElement = domElement;
			this.box = box;
		}

		if(this._eventList !== undefined){
			for(let evn in this._eventList){
				if(this._eventList[evn] !== undefined) this._createEvent(evn);
			}

		}
		
		return this;
	}

	add(ca, eventName, callback){
		if(CanvasAnimateEvent.canvasEventsList[eventName] === undefined) return console.warn("CanvasAnimateEvent: 参数错误 "+ eventName);
		if(typeof callback !== "function") return console.warn("CanvasAnimateEvent: 事件添加失败,参数错误");
		
		this._add(ca, eventName);
		this._addCA(ca, eventName, callback);
		
		return ca;
	}
	
	remove(ca, eventName, callback){
		if(CanvasAnimateEvent.canvasEventsList[eventName] === undefined) return console.warn("CanvasAnimateEvent: 参数错误 "+ eventName);
		if(typeof callback !== "function") return console.warn("CanvasAnimateEvent: 事件添加失败,参数错误");
		if(this._running !== eventName){
			this._remove(ca, eventName);
			this._removeCA(ca, eventName, callback);
		}

		else this._delList.push(ca, eventName, callback);

		return ca;
	}

	disposeEvent(eventName){
		if(!this.domElement) return this;
		
		if(eventName === "over" || eventName === "out"){

			if(typeof this["_"+eventName] === "function"){
				this.domElement.removeEventListener(CanvasAnimateEvent.canvasEventsList[eventName], this["_"+eventName]);
				delete this["_"+eventName];
			}

		}

		else{

			if(typeof this["_over"] === "function"){
				this.domElement.removeEventListener(CanvasAnimateEvent.canvasEventsList["over"], this["_over"]);
				delete this["_over"];
			}

			if(typeof this["_out"] === "function"){
				this.domElement.removeEventListener(CanvasAnimateEvent.canvasEventsList["out"], this["_out"]);
				delete this["_out"];
			}

		}

		return this;
	}
	
	clear(ca, eventName){
		if(eventName === undefined){
			var k; for(k in this._eventList){
				this._remove(ca, k);
			}
			
			if(ca._eventList !== undefined) delete ca._eventList; //CanvasAnimateEvent.bind(ca, true);
			
		}

		else if(CanvasAnimateEvent.canvasEventsList[eventName] !== undefined){
			this._remove(ca, eventName);

			if(ca._eventList !== undefined) ca._eventList[eventName].length = 0;
			
		}

		return ca;
	}

	_addCA(ca, eventName, callback){
		if(ca._eventList === undefined) CanvasAnimateEvent.bind(ca);
		if(ca._eventList[eventName] === undefined) ca._eventList[eventName] = [];
		ca._eventList[eventName].push(callback);

	}

	_removeCA(ca, eventName, callback){
		if(ca._eventList !== undefined && ca._eventList[eventName] !== undefined){
			for(let k = 0, len = ca._eventList[eventName].length; k < len; k++){
				if(ca._eventList[eventName][k] === callback){
					ca._eventList[eventName].splice(k, 1);
					break;
				}
			}
		}

	}

	_add(ca, eventName){
		if(this._eventList[eventName] === undefined){
			this._eventList[eventName] = [];
			this._createEvent(eventName);

		}

		if(this._eventList[eventName].includes(ca) === false) this._eventList[eventName].push(ca);

	}

	_remove(ca, eventName){
		if(this._eventList[eventName] !== undefined){
			let key = this._eventList[eventName].indexOf(ca);
			if(key !== -1) this._eventList[eventName].splice(key, 1);
			if(key === 0){
				if(eventName == "over" || eventName === "out") this.disposeEvent(eventName);
				else this.domElement[CanvasAnimateEvent.canvasEventsList[eventName]] = null;
				delete this._eventList[eventName];
			}

		}

	}

	_createEvent(evn){
		var k, len, ca, arr, tar = null, oldTar = null, _run = null, _box = this._box, _scale = this._scale;

		const run = event => {
			len = this["_eventList"][evn].length;
			_box.set(this.box.x, this.box.y, this.box.w * _scale.x, this.box.h * _scale.y);
			
			if(len !== 0 && _box["containsPoint"](event["pageX"], event["pageY"]) === true){
				tar = null;
				for(k = 0; k < len; k++){
					ca = this["_eventList"][evn][k];
					_box.set(ca["box"]["x"] * _scale["x"], ca["box"]["y"] * _scale["y"], ca["box"]["w"] * _scale["x"], ca["box"]["h"] * _scale["y"]);
					
					if(ca["visible"] === true && _box["containsPoint"](event["pageX"] - this["box"]["x"], event["pageY"] - this["box"]["y"]) === true){
						
						if(tar === null || tar["index"] < ca["index"]) tar = ca;
						
					}
	
				}
				
				if(_run !== null) _run();
				if(tar !== null){
					this._running = evn;
					arr = tar["_eventList"][evn]; 
					len = arr.length;
					for(k = 0; k < len; k++) arr[k](event, tar);
					tar = null;

					len = this._delList.length;
					for(k = 0; k < len; k += 3){
						this._remove(this._delList[k], this._delList[k+1]);
						this._removeCA(this._delList[k], this._delList[k+1], this._delList[k+2]);
					}
					this._running = "";
					this._delList.length = 0;
				}

			}
			
		}

		if(evn == "over" || evn === "out"){
			this.domElement.addEventListener(CanvasAnimateEvent.canvasEventsList[evn], run);
			this["_"+evn] = run;
			if(evn === "over"){
				_run = ()=>{
					if(tar !== null){
						if(oldTar !== null){
							if(oldTar !== tar) oldTar = tar;
							else tar = null;
						}
						else oldTar = tar;
					}
					else if(oldTar !== null) oldTar = null;
	
				}

			}

			else{
				let _tar = null;
				_run = ()=>{
					if(tar !== null){
						if(oldTar !== null){
							if(oldTar !== tar){
								_tar = tar;
								tar = oldTar;
								oldTar = _tar;
							}
							else tar = null;
						}
						else{
							oldTar = tar;
							tar = null;
						}
					}
					else if(oldTar !== null){
						tar = oldTar;
						oldTar = null;
					}
	
				}

			}

			/* _run = ()=>{
				if(tar !== null){
					if(oldTar !== null){

						if(oldTar !== tar){
							if(evn === "over") oldTar = tar;
							else{
								let _tar = tar;
								tar = oldTar;
								oldTar = _tar;
							}
						}

						else tar = null;

					}

					else{
						oldTar = tar;
						if(evn === "out") tar = null;
						
					}
					
				}

				else{
					if(oldTar !== null){
						if(evn === "out") tar = oldTar;
						oldTar = null;
					}
					
				}

			} */
			
		}

		else this.domElement[CanvasAnimateEvent.canvasEventsList[evn]] = run;

	}

}




/* CanvasAnimateRender (渲染 CanvasAnimate)
注意:
	this.box = new Box(); 				//本类绘制时用这box检测 (ca的box是否与这个box相交, 如果相交才有可能绘制这个ca)
	this.domElementRect = new Box(); 	//CanvasAnimateEvent 用这个box检测 (鼠标的位置是否在这个box范围内, 如果在才有可能触发这个ca的事件)

parameter: 
	option = {
		canvas //默认新的canvas
		width, height //默认1
		className //canvas的 css 类名 默认 ""
		id //
	}

attribute:
	list: Array[CanvasAnimate]; //渲染队列
	box: Box; //canvas的位置和范围(.x.y是0; .w.h是canvas的宽高, 在渲染时检测ca的box是否与此box相交);
	context: CanvasContext;
	domElement: Canvas;

method:
	isDraw(ca): Bool; //ca是否满足绘制条件
	isCanvasImage(img: Object): Bool; //img是否是canvas可绘制的图片;
	add(ca): ca; //添加ca (添加多个: const len = this.list.length; this.list.push(caA, caB); this.initList(len))
	remove(ca): ca; //删除ca (删除多个: this.list.splice(i, len); this.initList(i));
	updateCanvas(): this; //更新canvas的box, canvas添加到dom树后才有效; (如果你没有用.pos(x, y)和.size(w, h, setElem)设置canvas的位置和宽高的话, 那么你需要调用一次此方法, 否则 事件错误 等异常)
	initList(index): this; //初始化ca列表; (如果你没有用.add(ca)添加 或 .remove(cd)删除 那么你需要调用一次此方法, 否则 删除错误, 事件错误 等异常)
	pos(x, y): this; //设置canvas的位置和this.box的位置
	size(w, h: Number, setElem: Bool): this; //设置this.box的宽高; setElem: 是否同时设置canvas的宽高; 默认true
	render(parentElem): this; //绘制一次画布, 并把画布添加到parentElem, parentElem 默认 body, 然后调用一次 this.updateCanvas() 方法;
	clear(): undefiend; //清除画布
	draw(): undefiend; //绘制画布
	redraw(): this; //清除并绘制画布; 一般在动画循环里面调用此方法
	clearTarget(ca): undefiend; //清除 ca; 适应静态视图
	drawTarget(ca): undefiend; //绘制 ca; 适应静态视图 
	computeOverlaps(ca)

	//以下方法即将弃用
	shear(ca, canvas, x, y): canvas; //this.canvas 的 ca 范围剪切到 canvas 的 x,y位置; ca默认this; canvas模型新的canvas; x, y默认0;
	getData(box)
	putData(data, x, y)

	//参数名:
	ca: CanvasAnimate; 包括它的子类
	box: Box;

demo:

	//更新ca.box(注意执行顺序, 这很重要):
	root.clearTarget(ca);
	ca.box.set(10, 50, 100, 100);
	root.drawTarget(ca);

	//显示:
	ca.visible = false;
	root.clearTarget(ca);

	ca.visible = true;
	root.drawTarget(ca);

	//或者定义一个空的ca:
	const emptyCA = new CanvasAnimate();
	ca.visible = true;
	emptyCA.box.copy(ca.box);
	root.drawTarget(ca);

以以上方法绘制ca的利与弊:
	利: 比.redraw()效率更高; .redraw()每次绘制全部可绘制的ca, 而此方法每次只绘制与ca.box重叠的ca数;
	弊: 如果目标ca的box覆盖了整个canvas那么像上面这样绘制反而会比.redraw()慢;

更多例子: class CanvasAnimateUI 使用此方法更新画布

*/
class CanvasAnimateRender{
	
	constructor(option = {}){
		this.list = [];
		this.box = new Box();
		this.domElementRect = new Box();
		this.context = CanvasAnimateRender.getContext(option.canvas, option.className, option.id);
		this.domElement = this.context.canvas;
		
		//init
		//this.size(option.width, option.height)
		if(option.width !== undefined) this.domElement.width = option.width;
		if(option.height !== undefined) this.domElement.height = option.height;
		
		this.box.size(this.domElement.width, this.domElement.height);
		this.domElementRect.size(this.box.w, this.box.h);

		//this.domElement.style.position = "absolute";
		//this.domElement.style.background = "rgb(127,127,127)";
		CanvasAnimateRender.setDefaultStyles(this.context);
		
	}

	isDraw(ca){

		return this.isCA(ca) === true && ca["visible"] === true && this.isCanvasImage(ca["image"]) === true && this["box"]["intersectsBox"](ca["box"]);

	}

	isCA(ca){
		
		return UTILS.isObject(ca) === true && ca.isCanvasAnimate === true;

	}

	isCanvasImage(img){ //OffscreenCanvas:ImageBitmap; CSSImageValue:

		if(UTILS.isObject(img) === false) return false;
		return ImageBitmap["prototype"]["isPrototypeOf"](img) === true || HTMLImageElement["prototype"]["isPrototypeOf"](img) === true || HTMLCanvasElement["prototype"]["isPrototypeOf"](img) === true  || CanvasRenderingContext2D["prototype"]["isPrototypeOf"](img) === true  || HTMLVideoElement["prototype"]["isPrototypeOf"](img) === true;
		
	}

	updateCanvas(){
		//this.box.size(this.domElement.width, this.domElement.height);
		const rect = this.domElement.getBoundingClientRect();
		if(rect.width !== 0) this.domElementRect.set(rect.x, rect.y, this.box.w, this.box.h);
		
		return this;
	}

	/* getData(box){ //返回 ImageData
		box = box || this.box;
		return this.context.getImageData(box.x, box.y, box.w, box.h);
	}

	putData(data, x, y){ // data: ImageData
		if(typeof x !== "number") x = 0;
		if(typeof y !== "number") y = 0;
		return this.context.putImageData(data, x, y);
	}

	shear(ca, canvas, x, y){
		const box = ca !== undefined ? ca.box : this.box;
		if(typeof x !== "number") x = 0;
		if(typeof y !== "number") y = 0;

		const context = CanvasAnimateRender.getContext(canvas);
		if(canvas === undefined){
			canvas = context.canvas;
			canvas.width = box.w;
			canvas.height = box.h;
		}

		if(box.w >= 1 && box.h >= 1) context.putImageData(this.getData(box), x, y);

		return canvas;
	} */

	pos(x, y){
		this.domElement.style.position = "absolute";
		this.domElement.style.left = x + "px";
		this.domElement.style.top = y + "px";

		//this.box.pos(0, 0);
		const rect = this.domElement.getBoundingClientRect();
		this.domElementRect.pos(rect.x, rect.y);

		return this;
	}

	size(w, h, setElem){
		//重置canvas的宽高时; 系统会自动将其恢复默认状态(其属性); 还会清理整个画布;

		if(typeof w !== "number" || w < 1) w = 1;
		if(typeof h !== "number" || h < 1) h = 1;
		//setElem = typeof setElem === "boolean" ? setElem : true;

		if(setElem !== false){
			this.domElement.width = w;
			this.domElement.height = h;
			CanvasAnimateRender.setDefaultStyles(this.context);
		}

		this.box.size(w, h);
		this.domElementRect.size(w, h);
		
		return this;
	}

	add(ca){
		if(this.list.includes(ca) === false){
			const len = this.list.length;
			
			if(this.list[ca.index] === undefined){
				ca.index = len;
				this.list.push(ca);

			}

			else{
				const arr = this.list.splice(ca.index);
				this.list.push(ca);
				for(let k = 0, c = arr.length; k < c; k++){
					this.list.push(arr[k]);
					arr[k].index++;
				}

			}

		}
		
		return ca;
	}

	remove(ca){
		var i = ca.index;

		if(this.list[i] !== ca) i = this.list.indexOf(ca);

		if(i !== -1){
			this.list.splice(i, 1);
			for(let k = i, len = this.list.length; k < len; k++) this.list[k].index -= 1;

		}

		return ca;
	}

	render(parentElem){
		parentElem = parentElem || document.body;
		parentElem.appendChild(this.domElement);
		this.updateCanvas();
		this.redraw();
		return this;
	}

	initList(i){
		if(i === undefined || i < 0) i = 0;
		for(let k = i, len = this.list.length; k < len; k++) this.list[k].index = k;
		return this;
	}

	clear(){

		this['context']['clearRect'](0, 0, this['box']['w'], this['box']['h']);

	}

	_draw(ca){
		if(ca["opacity"] === 1) this["context"]["drawImage"](ca["image"], ca["box"]["x"], ca["box"]["y"], ca["box"]["w"], ca["box"]["h"]);

		else if(ca["opacity"] > 0){
			this["context"]["globalAlpha"] = ca["opacity"];
			this["context"]["drawImage"](ca["image"], ca["box"]["x"], ca["box"]["y"], ca["box"]["w"], ca["box"]["h"]);
			this["context"]["globalAlpha"] = 1;
		}

	}

	draw(){
		const len = this["list"]["length"];
		for(let k = 0, ca; k < len; k++){
			ca = this["list"][k];
			if(this["isDraw"](ca) === true) this["_draw"](ca);
		}
		
	}

	_drawTarget(ca){
		const len = this["list"]["length"];
		this["context"]["clearRect"](ca["overlap"]["box"]["x"], ca["overlap"]["box"]["y"], ca["overlap"]["box"]["w"], ca["overlap"]["box"]["h"]);

		for(let k = 0; k < len; k++){
			ca = this["list"][k];
			if(ca["overlap"]["draw"] === true) this._draw(ca);
			
		}

	}

	computeOverlap(tar){
		//1 如果检索到与box相交的ca时, 合并其box执行以下步骤: 
		//2 检索 已检索过的 并且 没有相交的ca
		//3 如果存在相交的ca就合并box并继续第 2 步; 如果不存在继续第 1 步

		const _list = CanvasAnimateRender.emptyArrA, list = CanvasAnimateRender.emptyArrB, len = this.list.length, box = tar["overlap"]["box"]["copy"](tar["box"]);

		for(let k = 0, i = 0, c = 0, _c = 0, a = _list, b = list, loop = false; k < len; k++){
			tar = this["list"][k];
			
			if(this.isDraw(tar) === false){
				if(tar["overlap"]["draw"] !== false) tar["overlap"]["draw"] = false;
				continue;
			}

			if(box["intersectsBox"](tar["box"]) === true){
				if(tar["overlap"]["draw"] !== true) tar["overlap"]["draw"] = true;
				box["expand"](tar["box"]);
				loop = true;

				while(loop === true){
					b["length"] = 0;
					loop = false;
					c = _c;

					for(i = 0; i < c; i++){
						tar = a[i];

						if(box["intersectsBox"](tar["box"]) === true){
							if(tar["overlap"]["draw"] !== true) tar["overlap"]["draw"] = true;
							box["expand"](tar["box"]);
							loop = true; _c--;
						}

						else b.push(tar);
						
					}

					a = a === _list ? list : _list;
					b = b === _list ? list : _list;

				}
				
			}

			else{
				_c++;
				a["push"](tar);
				if(tar["overlap"]["draw"] !== false) tar["overlap"]["draw"] = false;
			}

		}
		
		_list.length = list.length = 0;

	}

	clearTarget(ca){
		this["computeOverlap"](ca);
		ca["overlap"]["draw"] = false;
		this["_drawTarget"](ca);
	
	}

	drawTarget(ca){
		this["computeOverlap"](ca);
		this["_drawTarget"](ca);

	}

	redraw(){
		this.clear();
		this.draw();

	}

	static emptyArrA = []
	static emptyArrB = []
	static paramCon = {alpha: true}

	static defaultStyles = {
		filter: "none",
		globalAlpha: 1,
		globalCompositeOperation: "source-over",
		imageSmoothingEnabled: true,
		miterLimit: 10,
		font: "12px SimSun, Songti SC",
		textAlign: "left",
		textBaseline: "top",
		lineCap: "butt",
		lineJoin: "miter",
		lineDashOffset: 0,
		lineWidth: 1,
		shadowColor: "rgba(0, 0, 0, 0)",
		shadowBlur: 0,
		shadowOffsetX: 0,
		shadowOffsetY: 0,
		fillStyle: "#000000",
		strokeStyle: "#ffffff",
	}

	static setDefaultStyles(context){
		let k = "", styles = CanvasAnimateRender.defaultStyles;
		for(k in styles){
			if(context[k] !== styles[k]) context[k] = styles[k];
		}

	}

	static getContext(canvas, className, id){
		canvas = canvas || document.createElement("canvas");
		const context = canvas.getContext("2d", CanvasAnimateRender.paramCon);

		if(typeof className === "string") canvas.className = className;
		if(typeof id === "string") canvas.setAttribute('id', id);
		
		return context;
	}

	static downloadImage(func){
		const input = document.createElement("input");
		input.type = "file";
		input.multiple = "multiple";
		input.accept = ".png, .jpg, .jpeg, .bmp, .gif";
	
		input.onchange = e => {
			if(e.target.files.length === 0) return;
			const fr = new FileReader();
			fr.onloadend = e1 => {
				const img = new Image();
				img.onload = () => func(img);
				img.src = e1.target.result;
			}

			fr.readAsDataURL(e.target.files[0]);
		}
		
		input.click();
	}

}




/* CanvasAnimateRenderScroll 内置了滚动条的 功能和视图

parameter:
	option: Object{
		scrollWidth: Number, //滚动条宽 
		scrollColor: String, //滚动条背景色
		cursorColor: String, //滚动条游标颜色
	}

attribute:
	onscroll: Function(pointer event, scroll type);	//用于监听scroll 默认 null

	//以下属性不建议修改
	eventDispatcher: CanvasAnimateEvent;
	scrollX: CanvasAnimateCustom;
	scrollY: CanvasAnimateCustom;
	cursorX: CanvasAnimateCustom;
	cursorY: CanvasAnimateCustom;

method:
	addEvent(ca, eventName, callback)
	removeEvent(ca, eventName, callback)
	getScrollLeft(): Number; //返回滚动轴左边的距离
	getScrollTop(): Number; //返回滚动轴上边的距离

	setScroll(type, v, offset): this;
		type: "top|left"; //滚动条的类型
		v: Number|CanvasAnimate;
		offset: Number; //偏移值; 默认: 0;
	
	setScrollWidth(v): this; 
		v: Number; //设置滚动条的宽; v不能小于1
	
demo:
	
	const cars = new CanvasAnimateRenderScroll({
		width: 300, 
		height: 300,
		scrollWidth: 10,
	}).pos(50, 50),

	cac = cars.add(new CanvasAnimateCustom()).size(150, 150).rect(4).fill("#fff").stroke("blue", 1).pos(40, 40),
	cac1 = cars.add(new CanvasAnimate(cac.image)).pos(40, 230),
	cac2 = cars.add(new CanvasAnimate(cac.image)).pos(40, 900),
	cac3 = cars.add(new CanvasAnimate(cac.image)).pos(900, 66);

	cars.domElement.style = `
		position: absolute;
		z-index: 999;
		top: 50px;
		left: 100px;
		background: #fff;
	`;
	
	//自定义 scroll style
	cars.scrollY.clear().rect().shadow("#ddd", 1, -1, 0).fill("#eee");

	cars.render();
	cars.addEvent(cac, "click", () => {
		cars.setScroll("top", cac1, -10).redraw();
		console.log(cars.getScrollTop()); //220
	});

*/
class CanvasAnimateRenderScroll extends CanvasAnimateRender{

	#maxX = 0;
	#maxY = 0;
	#scrollWidth = 10;
	#scrollColor = "#eee";
	#cursorColor = "#aaa";

	constructor(option = {}){
		super(option);

		if(typeof option.scrollWidth === "number") this.#scrollWidth = option.scrollWidth;
		if(option.scrollColor) this.#scrollColor = option.scrollColor;
		if(option.cursorColor) this.#cursorColor = option.cursorColor;

		this.eventDispatcher = new CanvasAnimateEvent(this);
		this.scrollX = new CanvasAnimateCustom();
		this.scrollY = new CanvasAnimateCustom();
		this.cursorX = this._bindScroll(new CanvasAnimateCustom());
		this.cursorY = this._bindScroll(new CanvasAnimateCustom());
		this.wheelCA = new CanvasAnimate();
		this.onscroll = null;
		
		this.cursorBoxX = this.cursorX.box.set(0, this.box.h - this.#scrollWidth, this.box.w - this.#scrollWidth, this.#scrollWidth);
		this.cursorBoxY = this.cursorY.box.set(this.box.w - this.#scrollWidth, 0, this.#scrollWidth, this.box.h - this.#scrollWidth);

		this.scrollX.size(this.cursorBoxX.w, this.cursorBoxX.h).rect().fill(this.#scrollColor).box.pos(0, this.cursorBoxX.y);
		this.scrollY.size(this.cursorBoxY.w, this.cursorBoxY.h).rect().fill(this.#scrollColor).box.pos(this.cursorBoxY.x, 0);

		//init scroll event
		this.scrollX.index = 
		this.scrollY.index = 99999;

		this.cursorX.index = 
		this.cursorY.index = Infinity;

		var dPos = 0;

		const setTop = (event, top) => {
			if(this.setScrollTop(top) === true){
				if(this.onscroll !== null) this.onscroll(event, "y");
				this.redraw();
			}

		},

		setLeft = (event, left) => {
			if(this.setScrollLeft(left) === true){
				if(this.onscroll !== null) this.onscroll(event, "x");
				this.redraw();
			}

		},
		
		onMoveTop = event => {
			setTop(event, event.pageY - this.domElementRect.y - dPos);

		},

		onMoveLeft = event => {
			setLeft(event, event.pageX - this.domElementRect.x - dPos);

		},

		onUpTop = event => {
			document.body.removeEventListener('pointermove', onMoveTop);
			document.body.removeEventListener('pointerup', onUpTop);

			this.domElement.removeEventListener('pointermove', onMoveTop);
			this.domElement.removeEventListener('pointerup', onUpTop);

			onMoveTop(event);

		},

		onUpLeft = event => {
			document.body.removeEventListener('pointermove', onMoveLeft);
			document.body.removeEventListener('pointerup', onUpLeft);

			this.domElement.removeEventListener('pointermove', onMoveLeft);
			this.domElement.removeEventListener('pointerup', onUpLeft);

			onMoveLeft(event);

		}

		this.eventDispatcher.add(this.cursorY, "down", event => {
			dPos = event.pageY - this.domElementRect.y - this.cursorBoxY.y;
			onUpTop(event);

			document.body.addEventListener("pointermove", onMoveTop);
			document.body.addEventListener("pointerup", onUpTop);

			this.domElement.addEventListener("pointermove", onMoveTop);
			this.domElement.addEventListener("pointerup", onUpTop);

		});

		this.eventDispatcher.add(this.cursorX, "down", event => {
			dPos = event.pageX - this.domElementRect.x - this.cursorBoxX.x;
			onUpLeft(event);

			document.body.addEventListener("pointermove", onMoveLeft);
			document.body.addEventListener("pointerup", onUpLeft);

			this.domElement.addEventListener("pointermove", onMoveLeft);
			this.domElement.addEventListener("pointerup", onUpLeft);

		});

		this.eventDispatcher.add(this.scrollY, "down", event => {
			dPos = this.cursorBoxY.h / 2;
			onUpTop(event);
			
		});

		this.eventDispatcher.add(this.scrollX, "down", event => {
			dPos = this.cursorBoxX.w / 2;
			onUpLeft(event);
			
		});

		this.wheelCA.box.copy(this.box);
		this.eventDispatcher.add(this.wheelCA, "wheel", event => {
			dPos = event.wheelDelta === 120 ? -1 : 1; //(0 - event.wheelDelta) * 0.1;
			if(this.#maxY > this.box.h && this.cursorY.visible === true) setTop(event, this.cursorBoxY.y + dPos * this.box.h / 10);
			else if(this.#maxX > this.box.w && this.cursorX.visible === true) setLeft(event, this.cursorBoxX.x + dPos * this.box.w / 10);
			
		});

	}

	size(w, h, setElem){
		super.size(w, h, setElem);
		this.setScrollWidth(this.#scrollWidth);
		this.wheelCA.box.copy(this.box);

		return this;
	}

	add(ca){
		this._bind(ca);
		return super.add(ca);
	}

	remove(ca){
		this._unBind(ca);
		return super.remove(ca);
	}

	initList(i){
		if(i === undefined || i < 0) i = 0;
		for(let k = i, len = this.list.length; k < len; k++) this._bind(this.list[k]);

		return super.initList(i);
	}

	draw(){
		super.draw();
		this._drawScroll();

	}

	_drawTarget(ca){
		super._drawTarget(ca);
		this._drawScroll();

	}


	//new method
	addEvent(ca, eventName, callback){

		return this.eventDispatcher.add(ca, eventName, callback);
		
	}

	removeEvent(ca, eventName, callback){

		return this.eventDispatcher.remove(ca, eventName, callback);

	}

	//获取scroll的场景位置
	getScrollLeft(){
		if(this.#maxX <= this.box.w) return 0;
		return this.cursorBoxX.x / (this.box.w - this.cursorBoxY.w) * this.#maxX;
	}

	getScrollTop(){
		if(this.#maxY <= this.box.h) return 0;
		return this.cursorBoxY.y / (this.box.h - this.cursorBoxX.h) * this.#maxY;
	}

	//通过场景位置(ca.left|ca.top)设置scroll
	setScroll(type, v, offset){ //type = "left" | "top"; v = ca | number
		if(UTILS.isNumber(offset)  === false) offset = 0;

		if(this.isCA(v) === true) v = v[type];

		else if(UTILS.isNumber(v) === false) return this;

		if(type === "top"){
			if(this.#maxY <= this.box.h) this.setScrollTop(0);
			else this.setScrollTop((v + offset) / this.#maxY * (this.box.h - this.cursorBoxX.h));
			
		}

		else if(type === "left"){
			if(this.#maxX <= this.box.w) this.setScrollLeft(0);
			else this.setScrollLeft((v + offset) / this.#maxX * (this.box.w - this.cursorBoxY.w));
			
		}

		return this;
	}

	setScrollWidth(v){
		this.#scrollWidth = 
		this.cursorBoxX.h = 
		this.cursorBoxY.w = v;

		this.cursorBoxX.y = this.box.h - this.cursorBoxX.h;
		this.cursorBoxY.x = this.box.w - this.cursorBoxY.w;

		this.scrollX.size(this.box.w - this.cursorBoxY.w, this.cursorBoxX.h).rect().fill(this.#scrollColor).box.pos(0, this.cursorBoxX.y);
		this.scrollY.size(this.cursorBoxY.w, this.box.h - this.cursorBoxX.h).rect().fill(this.#scrollColor).box.pos(this.cursorBoxY.x, 0);

		v = this.#maxX;
		this.#maxX = 0;
		this._updateMaxX(v);

		v = this.#maxY;
		this.#maxY = 0;
		this._updateMaxY(v);

		v = this.cursorBoxX.x;
		this.cursorBoxX.x = NaN;
		this.setScrollLeft(v);

		v = this.cursorBoxY.y;
		this.cursorBoxY.y = NaN;
		this.setScrollTop(v);

		return this;
	}


	//以下方法限内部使用

	//通过视口位置设置scroll
	setScrollLeft(x){
		if(x < 0) x = 0;
		else{
			let _x = this.box.w - this.cursorBoxX.w - this.cursorBoxY.w;
			if(x > _x) x = _x;
		}

		if(this.cursorBoxX.x !== x){
			this.cursorBoxX.x = x;
			x = this.getScrollLeft();
			for(let k = 0, len = this.list.length; k < len; k++) this.list[k]._upateScrollX(x);
			return true;
		}

	}

	setScrollTop(y){
		if(y < 0) y = 0;
		else{
			let _y = this.box.h - this.cursorBoxY.h - this.cursorBoxX.h;
			if(y > _y) y = _y;
		}
		
		if(this.cursorBoxY.y !== y){
			this.cursorBoxY.y = y;
			y = this.getScrollTop();
			for(let k = 0, len = this.list.length; k < len; k++) this.list[k]._upateScrollY(y);
			return true;
		}

	}

	_bind(ca){
		var _x = ca.box.x, _y = ca.box.y, _w = ca.box.w, _h = ca.box.h, 
		_left = ca.box.x, _top = ca.box.y;

		Object.defineProperties(ca.box, {
			x: {
				get: () => {return _x;},
				set: v => {
					_left = v;
					_x = v - this.getScrollLeft();
					this._updateMaxX(v + _w);
				}
			},
			
			y: {
				get: () => {return _y;},
				set: v => {
					_top = v;
					_y = v - this.getScrollTop();
					this._updateMaxY(v + _h);
				}
			},

			w: {
				get: () => {return _w;},
				set: v => {
					_w = v;
					this._updateMaxX(_left + v);
				}
			},
			
			h: {
				get: () => {return _h;},
				set: v => {
					_h = v;
					this._updateMaxY(_top + v);
				}
			},
		});

		Object.defineProperties(ca, {
			left: {
				get: function (){return _left;}
			},
			
			top: {
				get: function (){return _top;}
			},

			width: {
				get: function (){return _w;}
			},

			height: {
				get: function (){return _h;}
			},

			_upateScrollX: {
				value: scrollLeft => _x = _left - scrollLeft
			},

			_upateScrollY: {
				value: scrollTop => _y = _top - scrollTop
			},

		});

		this._updateMaxX(_left + _w);
		this._updateMaxY(_top + _h);
		ca = undefined;

	}

	_bindScroll(cursor){
		var _xw = 0, _xh = 0;
		Object.defineProperties(cursor.box, {
			w: {
				get: () => {return _xw;},
				set: v => {
					if(_xw === v) return;
					_xw = 
					cursor.image.width = v;
					cursor.rect().fill(this.#cursorColor);
					
				}
			},
			
			h: {
				get: () => {return _xh;},
				set: v => {
					if(_xh === v) return;
					_xh = 
					cursor.image.height = v;
					cursor.rect().fill(this.#cursorColor);

				}
			},
		});

		return cursor;
	}

	_unBind(ca){
		var v = ca.left;
		delete ca.box.x;
		ca.box.x = v;

		v = ca.top;
		delete ca.box.y;
		ca.box.y = v;

		v = ca.box.w;
		delete ca.box.w;
		ca.box.w = v;

		v = ca.box.h;
		delete ca.box.h;
		ca.box.h = v;

		delete ca._upateScrollX;
		delete ca._upateScrollY;

		//如果maxBox小于canvasBox则只重置maxBox
		if(this.#maxX <= this.box.w && this.#maxY <= this.box.h) return this._resetScroll();
		
		//当前的ca的box如果小于maxBox则不更新maxBox
		if(ca.width + ca.left < this.#maxX && ca.height + ca.top < this.#maxY) return;
		
		//更新maxBox
		this._resetScroll();
		for(let k = 0, len = this.list.length, _ca; k < len; k++){
			_ca = this.list[k];
			if(ca === _ca) continue;

			v = _ca.width + _ca.left;
			if(this.#maxX < v) this.#maxX = v;

			v = _ca.height + _ca.top;
			if(this.#maxY < v) this.#maxY = v;

		}

		//更新scrollBox
		v = this.box.w - this.cursorBoxY.w;
		if(this.box.w < this.#maxX) this.cursorBoxX.w = v / this.#maxX * v;
		else this.cursorBoxX.w = v;

		v = this.box.h - this.cursorBoxX.h;
		if(this.box.h < this.#maxY) this.cursorBoxY.h = v / this.#maxY * v;
		else this.cursorBoxY.h = v;

		this.setScrollLeft(this.cursorBoxX.x);
		this.setScrollTop(this.cursorBoxY.y);

	}

	_updateMaxX(mx){
		if(this.#maxX < mx){
			let w = this.box.w - this.cursorBoxY.w;
			if(this.box.w < mx) this.cursorBoxX.w = w / mx * w;
			else this.cursorBoxX.w = w;
			this.#maxX = mx;
			
		}

	}

	_updateMaxY(my){
		if(this.#maxY < my){
			let h = this.box.h - this.cursorBoxX.h;
			if(this.box.h < my) this.cursorBoxY.h = h / my * h;
			else this.cursorBoxY.h = h;
			this.#maxY = my;
			
		}
	}

	_resetScroll(){
		this.#maxX = 0;
		this.#maxY = 0;
		this.cursorBoxX.w = this.box.w - this.cursorBoxY.w;
		this.cursorBoxY.h = this.box.h - this.cursorBoxX.h;

	}

	_drawScroll(){
		if(super.isDraw(this.scrollX) === true) super._draw(this.scrollX);
		if(super.isDraw(this.scrollY) === true) super._draw(this.scrollY);
		if(super.isDraw(this.cursorX) === true) super._draw(this.cursorX);
		if(super.isDraw(this.cursorY) === true) super._draw(this.cursorY);

	}

}




/* CanvasAnimateOrdered 

*/
class CanvasAnimateOrdered extends CanvasAnimateRenderScroll{

	constructor(option = {}){
		super(option);

	}

}





/* CanvasAnimate 
parameter: 
	image

attribute:
	opacity: Float; //透明度; 值0至1之间; 默认1;
	visible: Boolean; //默认true; 完全隐藏(既不绘制视图, 也不触发绑定的事件)

	//以下属性不建议直接修改
	box: Box; //.x.y是CanvasAnimateRender画布中的位置; .w.h是 this.image 的宽高
	circle: Circle; //边界圆, 默认 null;
	image: CanvasImageData; //默认 null; this.setImage(img) 修改
	overlap: Object; //CanvasAnimateRender.computeOverlaps(ca) 方法更新
	index: Integer; //CanvasAnimateRender.index(ca) 修改

	//只读
	width, height, top, left: Number; 

method:
	scale(sx, sy: Number, isCenter: Bool): this;	//缩放
	sx, sy:		小于1缩放, 大于1放大, 等于1什么都不会做; 默认 1;
	isCenter:	缩放中心点是否居中; 默认 true;

	pos(x, y: Number): this;						//设置this.box的x,y (既root的画布中位置)
	load(src: String, func: Function): Image; 		//通过src加载图片完成后设置this.box .w.h
	setImage(img: ImageData): this; 				//设置this.image; this.box .w.h;
	computeCircle(): undefined; 					// 相对于.box计算.circle; 如果为null则创建一个新的 Circle

demo:
	const img = new CanvasAnimateCustom().start(150, 150).rect(5)
		.fill("#000000") //背景
		.text("value", "red", 18, "center", "center") //文字
		.stroke("#ffffff") //边框
		.image;
		
	const ca = root.add(new CanvasAnimate().pos(10, 10).setImage(img));
	//root.redraw();
	//root.drawTarget(ca); //如果root已经render过了使用此方法绘制单独的ca, 比root.redraw()快2-3倍
	root.render();

*/
class CanvasAnimate{

	constructor(image = null){
		this.opacity = 1;
		this.visible = true;
	
		//以下属性不建议直接修改
		this.box = new Box();
		this.circle = null;
		this.image = image;
		this.index = -1;
		this.overlap = {box: new Box(), draw: false}
		
		if(image !== null) this.box.size(image.width||0, image.height||0);

	}

	pos(x, y){
		this.box.x = x;
		this.box.y = y;
		return this;
	}

	load(src, func){
		var img = new Image();
		
		img.onload = () => {
			this.box.size(img.width, img.height);
			if(typeof func === "function") func(img);
			func = img = null;
		}

		img.src = src;
		this.image = img;
		return img;
	}

	setImage(img = null){
		if(img !== null) this.box.size(img.width, img.height);
		this.image = img;
		return this;
	}

	computeCircle(){
		if(this.circle === null) this.circle = new Circle();
		this.circle.setFromBox(this.box);
		return this;
	}

	get left(){return this.box.x;}
	get top(){return this.box.y;}
	get width(){return this.box.w;}
	get height(){return this.box.h;}

}

Object.defineProperties(CanvasAnimate.prototype, {

	isCanvasAnimate: {
		configurable: false,
		enumerable: false,
		writable: false,
		value: true,
	}

});




/* CanvasAnimateCustom (this.image总是是一个canvas; 可以使用原生api绘制这个canvas)

注意: 为了解决线模糊问题, 此类在绘制线时会做一些特殊处理: 线宽四舍五入, 线坐标点向上取整 (bug: 在用线拼凑形状时导致偏差)

parameter: 
	canvas: Canvas; //可选; 默认新的 Canvas

attribute: 
	image: Canvas;
	context: CanvasContext; 			//你可以在这个 context 中自由绘制
	_path: Object{t: String, v: Array} 	//当前定义的路径
	_rotate: Object{x,y,a}				//当前旋转

method:
	size(w, h): this;  								//设置画布宽高 (宽高变动时自动清除画布)
	clear(): this; 	 								//清除画布
	unRotate(reset: Bool): this;					//重置旋转; reset 重置旋转后是否将弧度设为零
	rotate(a, x, y, recover, updatePath): this; 	//a为弧度, 默认0; 以画布中x,y为中心点旋转定义的路径, 默认.box的中心点;
	shadow(color, blur, offsetX, offsetY): this;	//阴影
	shear(x, y, w, h, canvas, dx, dy): canvas; 		//把this.image的像素克隆到canvas上;
		x, y, dx, dy默认0; 
		w, h默认this.image 宽高; 
		canvas 默认新的canvas
	
	//定义路径
	line(x, y, x1, y1): this;					//定义线段路径
	path(arr: Array[x, y], close: Bool): this;	//定义连续的线路径
	rect(r, x, y, w, h): this; 					//参数都是可选的
	arc(r, s, e, t): this; 						//定义圆形路径; (自动调用一次.computeCircle())
		//r 圆半径 默认this.circle.r, 
		//s 起始弧度 默认0, 
		//e 结束弧度 默认2PI, 
		//t false顺时针, true逆时针 默认false

	//绘制路径
	fill(color, lineWidth): this;						//填充定义的路径
	stroke(color): this; 								//绘制定义的路径
	drawImage(img, x, y, w, h, x1, y1, w1, h1): this;	//img 剪裁 到this.iamge上, 除img以外其它参数都是可选的(如果未定义宽高则自动设置为: img的宽高)
	img(img, posX, posY): this;							//img 绘制 到this.iamge上, posX, posY根.text参数名类似
	text(value, color, size, posX, posY): this;			//填充文字(如果未定义宽高则自动设置为: 文字的宽高)
		value: String;
		color: Color;
		size: Number|String;
		posX: Number|"center|right";
		posY: Number|"center|bottom";

	//渐变
	linearGradient(x, y, x1, y1, colors, close): CanvasLinearGradient; 		//参数都是可选的(起始到结束点)
	radialGradient(x, y, r, x1, y1, r1, colors): CanvasRadialGradient;	//参数都是可选的(起始到结束点和半径, 自动调用一次.computeCircle())
	gradientColor(gradient, colors, close): this; 						//给渐变对象添加渐变颜色;
	gradientColorSymme(gradient, colors): this;							//长度为2: 0: colors[0] , 0.5: colors[1], 1: colors[0]; (如果长度为2除外的偶数则忽略最后一个颜色)
		gradient: CanvasLinearGradient | CanvasLinearGradient;
		colors: Array[CanvasColor];

demo:
	const root = new CanvasAnimateRender({width: 750, height: 650, className: ""}), 
	cac = root.add(new CanvasAnimateCustom())
	.size(300, 300).pos(100, 100) 						//image的宽高 和 root画布中的位置
	.rect()												//定义矩形路径
	.fill("#fff")										//填充定义的路径
	.text("TEST", "#ff0000", 25, "center", "center")	//填充文字
	.stroke("#000");									//绘制定义的路径

	//渐变
	const colors = ["rgba(0,255,0,0)", "green"],
	lg = cac.linearGradient(),						//创建线性渐变
	rg = cac.radialGradient(); 						//创建径向渐变
	//cac.gradientColor(lg, colors).fill(lg);		//填充线性渐变
	cac.gradientColorSymme(rg, colors).fill(rg);	//填充径向渐变

	//阴影 旋转
	cac.shadow("#666", 4).path([100, 100, 150, 150, 100, 200]).stroke("red");
	//cac.rotate(10*Math.PI/180, 150, 150, true).stroke("#ff0000");
	cac.rotate(20*Math.PI/180).stroke("#00ff00");
	cac.rotate(40*Math.PI/180).stroke("#0000ff");

	root.render(); 
	console.log(root, cac)


	//自动设置宽高
	const img = new CanvasAnimateCustom()
	.text("TEST", "#fff", 25, "center", "center")
	.rect().stroke().image;

	root.add(new CanvasAnimateCustom()).drawImage(img);
	root.redraw();

*/
class CanvasAnimateCustom extends CanvasAnimate{

	constructor(canvas){
		super();
		this._rotate = {a: 0, x: 0, y: 0}; //记录当前旋转弧度和中心点
		this._path = {t: "", v: [], d: true}; //记录外部定义的路径
		this.context = CanvasAnimateRender.getContext(canvas);
		this.image = this.context.canvas;
		
		if(this.image === canvas) this.size(this.image.width, this.image.height);

	}

	isEmpty(){
		return this.box.w < 1 || this.box.h < 1;
	}

	getData(x, y, w, h){

		return this.context.getImageData(x||0, y||0, w||this.box.w, h||this.box.h);
	}

	putData(data, x, y){
		this.context.putImageData(data, x||0, y||0);
		return this;
	}

	shear(x, y, w, h, canvas, dx, dy){
		if(typeof x !== "number") x = 0;
		if(typeof y !== "number") y = 0;
		if(typeof w !== "number") w = this.box.w;
		if(typeof h !== "number") h = this.box.h;
		if(typeof dx !== "number") dx = 0;
		if(typeof dy !== "number") dy = 0;
		
		const context = (canvas || document.createElement("canvas")).getContext("2d");
		if(context.canvas !== canvas){
			context.canvas.width = w;
			context.canvas.height = h;
		}

		if(this.isEmpty() === false) context.drawImage(this.image, x, y, w, h, dx, dy, w, h); //context.putImageData(this.context.getImageData(x, y, w, h), dx, dy);

		return context.canvas;
		
	}

	size(w, h){
		w = (typeof w === "number" && w >= 1) ? w : 1;
		h = (typeof h === "number" && h >= 1) ? h : 1;
		
		this.box.size(w, h);
		this.image.width = this.box.w;
		this.image.height = this.box.h;
		CanvasAnimateRender.setDefaultStyles(this.context);
		
		return this;
	}

	clear(x = 0, y = 0, w, h){
		this.context.clearRect(x, y, w || this.box.w, h || this.box.h);
		return this;
	}

	unRotate(setA){
		if(this._rotate.a !== 0){
			this.context.translate(this._rotate.x, this._rotate.y);
			this.context.rotate(-(this._rotate.a));
			this.context.translate(-(this._rotate.x), -(this._rotate.y));
			if(setA === true) this._rotate.a = 0;
		}

		return this;
	}

	rotate(a, x, y){
		a = typeof a === "number" ? a : 0;
		x = typeof x === "number" ? x : this.box.w/2;
		y = typeof y === "number" ? y : this.box.h/2;

		if(this._rotate.a !== a) this._rotate.a = a;
		if(this._rotate.x !== x) this._rotate.x = x;
		if(this._rotate.y !== y) this._rotate.y = y;

		if(this._rotate.a !== 0){
			this.context.translate(this._rotate.x, this._rotate.y);
			this.context.rotate(this._rotate.a);
			this.context.translate(-(this._rotate.x), -(this._rotate.y));
			//if(updatePath === true && this._path.t !== "") this[this._path.t]();
			
		}
		
		return this;
	}

	shadow(shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY){
		shadowColor = shadowColor || "rgba(0,0,0,0)";
		const con = this.context;
		if(con.shadowColor !== shadowColor) con.shadowColor = shadowColor;
		if(con.shadowBlur !== shadowBlur && typeof shadowBlur === "number") con.shadowBlur = shadowBlur;
		if(con.shadowOffsetX !== shadowOffsetX && typeof shadowOffsetX === "number") con.shadowOffsetX = shadowOffsetX;
		if(con.shadowOffsetY !== shadowOffsetY && typeof shadowOffsetY === "number") con.shadowOffsetY = shadowOffsetY;
		return this;
	}


	//渐变
	linearGradient(x, y, x1, y1, colors, close){
		const lg = this.context.createLinearGradient(x || 0, y || 0, x1 || this.box.w, y1 || 0);
		this.gradientColor(lg, colors, close);
		return lg;
	}

	radialGradient(x, y, r, x1, y1, r1, colors){
		this.computeCircle();
		const rg = this.context.createRadialGradient(x || this.circle.x, y || this.circle.y, r || this.circle.r/2, x1 || this.circle.x, y1 || this.circle.y, r1 || this.circle.r);
		this.gradientColor(rg, colors);
		return rg;
	}

	gradientColor(gradient, colors, close){
		if(Array.isArray(colors) === true){
			const len = colors.length;
			for(let k = 0; k < len; k++) gradient.addColorStop(k / len, colors[k]);
			if(close === true) gradient.addColorStop(1, colors[0]);
		}

		return this;
	}

	gradientColorSymme(gradient, colors){ //长度为2: 0: colors[0] , 0.5: colors[1], 1: colors[0]; (如果长度为2除外的偶数则忽略最后一个颜色)
		if(Array.isArray(colors) === true){
			const len = Math.round(colors.length/2), count = len * 2;
			
			for(let k = 0; k < len; k++){
				gradient.addColorStop(k / count, colors[k]);
			}

			for(let k = len, i = len; k >= 0; k--, i++){
				gradient.addColorStop(i / count, colors[k]);
			}
			
		}

		return this;
	}
	

	//定义路径
	line(x, y, x1, y1){ //定义线段路径
		this._path.t = "createLine";
		this._path.v.length = 0;
		this._path.v.push(x, y, x1, y1);
		this._path.d = false; //this.createLine();
		return this;
	}

	path(arr, close){ //定义连续线条路径
		this._path.t = "createPath";
		this._path.v.length = 0;
		this._path.v.push(arr, close);
		this._path.d = false; //this.createPath();
		return this;
	}

	rect(r, x, y, w, h){ //定义边框路径
		const s = this.context.lineWidth;
		r = r || s * 2;
		if(typeof x !== "number") x = 0;
		if(typeof y !== "number") y = 0;
		if(typeof w !== "number") w = this.box.w;
		if(typeof h !== "number") h = this.box.h;
		x += s / 2;
		y += s / 2;
		w -= s;
		h -= s;
		this._path.t = "createRect";
		this._path.v.length = 0;
		this._path.v.push(r, x, y, w, h);
		this._path.d = false; //this.createRect();

		return this;
	}

	arc(circle, s, e, t){ //定义圆形路径;
		circle = circle || this.circle;
		if(!circle) return this;
		//r = (typeof r === "number" && r) > 0 ? r : this.circle.r;
		s = typeof s === "number" ? s : 0;
		e = typeof e === "number" ? e : Math.PI * 2;
		t = typeof t === "boolean" ? t : false;
		this._path.t = "createArc";
		this._path.v.length = 0;
		this._path.v.push(circle, s, e, t);
		this._path.d = false; //this.createArc();
		
		return this;
	}


	//绘制路径
	stroke(color, lineWidth){ //绘制路径
		if(this._path.t === "" || this.isEmpty() === true) return;
		if(this.context.strokeStyle !== color && color) this.context.strokeStyle = color;
		if(this.context.lineWidth !== lineWidth && typeof lineWidth === "number") this.context.lineWidth = Math.round(lineWidth);
		if(this._path.d === false){
			this[this._path.t]();
			this._path.d = true;
		}
		this.context.stroke();
		
		return this;
	}

	fill(color){ //填充路径
		if(this._path.t === "" || this.isEmpty() === true) return;
		if(this.context.fillStyle !== color && color) this.context.fillStyle = color;
		if(this._path.d === false){
			this[this._path.t]();
			this._path.d = true;
		}
		this.context.fill();
		
		return this;
	}

	text(value, color, fontSize, posX, posY){ //填充文字
		const textBox = this.textWidth(value, fontSize), 
		height = Math.abs(textBox.fontBoundingBoxAscent) + Math.abs(textBox.fontBoundingBoxDescent);
		
		if(this.isEmpty() === true){
			const _font = this.context.font;
			this.size(textBox.width, height);
			if(this.isEmpty() === true) return this;
			this.context.font = _font;
		}
		
		if(typeof posX === "string"){
			if(textBox.width >= this.box.w) posX = 0;
			else{
				switch(posX){
					case "center":
					posX = (this.box.w - textBox.width) / 2;
					break;
					
					case "right":
					posX = this.box.w - textBox.width;
					break;

					default: posX = 0; break;
				}
			}
			
		}

		else posX = posX || 0;
		
		
		if(typeof posY === "string"){
			if(textBox.height >= this.box.h) posY = 0;
			else{
				switch(posY){
					case "center":
					posY = (this.box.h - height) / 2;
					break;
					
					case "bottom":
					posY = this.box.h - height;
					break;

					default: posY = 0; break;
				}
			}
			
		}

		else posY = posY || 0;
		
		if(this.context.fillStyle !== color && color) this.context.fillStyle = color;
		
		this.context.fillText(value, posX, posY);
		
		return this;
	}

	img(img, posX, posY, w, h){
		if(this.isEmpty() === true){
			this.size(img.width, img.height);
			if(this.isEmpty() === true){
				console.warn("CanvasAnimateCustom: 内容为空");
				return this;
			}
		}

		w = w || img.width;
		h = h || img.height;

		if(typeof posX === "string"){
			switch(posX){
				case "center":
				posX = (this.box.w - w) / 2;
				break;
				
				case "right":
				posX = this.box.w - w;
				break;
			}
		}

		else posX = posX || 0;
		
		if(typeof posY === "string"){
			switch(posY){
				case "center":
				posY = (this.box.h - h) / 2;
				break;
				
				case "bottom":
				posY = this.box.h - h;
				break;
			}
		}

		else posY = posY || 0;
		
		this.context.drawImage(img, posX, posY, w, h);

		return this;
	}

	drawImage(img, x, y, w, h, x1, y1, w1, h1){
		if(!img){
			console.warn("CanvasAnimateCustom: 参数错误");
			return this;
		}

		if(this.isEmpty() === true){
			this.size(img.width, img.height);
			if(this.isEmpty() === true){
				console.warn("CanvasAnimateCustom: 内容为空");
				return this;
			}
		}

		this.context.drawImage(img, x || 0, y || 0, w || img.width, h || img.height, x1 || 0, y1 || 0, w1 || this.box.w, h1 || this.box.h);

		return this;
	}

	drawTransparentBG(size, x, y, w, h){
		size = size || 5;
		x = x || 0;
		y = y || 0;
		w = w || this.box.w;
		h = h || this.box.h;

		const con = this.context, c1 = "rgb(255,255,255)", c2 = "rgb(127,127,127)", lenX = Math.ceil(w/size), lenY = Math.ceil(h/size);
		
		con.save();
		con.beginPath();
		con.rect(x, y, w, h);
		con.clip();

		for(let ix = 0, iy = 0; ix < lenX; ix++){

			for(iy = 0; iy < lenY; iy++){

				con.fillStyle = (ix + iy) % 2 === 0 ? c1 : c2;
				con.fillRect(ix * size + x, iy * size + y, size, size);
				
			}

		}

		con.restore();
		return this;
	}


	//以下方法限内部使用
	_linePath(x, y, x1, y1, isStart){
		if(this.context.lineWidth % 2 === 1){
			if(x !== x1 && y !== y1){
				x = Math.floor(x) + 0.5;
				x1 = Math.floor(x1) + 0.5;
				y = Math.floor(y) + 0.5;
				y1 = Math.floor(y1) + 0.5;
			}

			else{
				if(x === x1){
					x = Math.floor(x) + 0.5;
					x1 = Math.floor(x1) + 0.5;
				}
				else{
					x = Math.floor(x);
					x1 = Math.floor(x1);
				}

				if(y === y1){
					y = Math.floor(y) + 0.5;
					y1 = Math.floor(y1) + 0.5;
				}
				else{
					y = Math.floor(y);
					y1 = Math.floor(y1);
				}
				
			}
			
		}

		else{
			x = Math.floor(x);
			x1 = Math.floor(x1);
			y = Math.floor(y);
			y1 = Math.floor(y1);
		}

		if(isStart !== true) this.context.lineTo(x, y);
		else this.context.moveTo(x, y);
		this.context.lineTo(x1, y1);

	}

	createLine(){
		this.context.beginPath();
		this._linePath(this._path.v[0], this._path.v[1], this._path.v[2], this._path.v[3], true);
	}

	createPath(){
		const con = this.context, arr = this._path.v[0], len = arr.length;
		con.beginPath();

		this._linePath(arr[0], arr[1], arr[2], arr[3], true);

		for(let k = 4; k < len; k+=4){
			this._linePath(arr[k], arr[k+1], arr[k+2], arr[k+3]);
		}

		if(this._path.v[1] === true){
			//con.closePath();
			this._linePath(arr[len-2], arr[len-1], arr[0], arr[1]);

		}

	}

	createRect(){
		const con = this.context, r = Math.round(this._path.v[0]), x = this._path.v[1], y = this._path.v[2], w = this._path.v[3], h = this._path.v[4],
		_x = x + r, _y = y + r, mx = x + w, my = y + h, _mx = mx - r, _my = my - r;
		con.beginPath();
		
		//上
		con.moveTo(_x, y);
		con.lineTo(_mx, y);
		con.arcTo(mx, y, mx, _y, r);

		//右
		con.lineTo(mx, _y);
		con.lineTo(mx, _my);
		con.arcTo(mx, my, _x, my, r);

		//下
		con.lineTo(_x, my);
		con.lineTo(_mx, my);
		con.arcTo(x, my, x, _my, r);

		//左
		con.lineTo(x, _y);
		con.lineTo(x, _my);
		con.arcTo(x, y, _x, y, r);

	}

	createArc(){
		this.context.beginPath();
		this.context.arc(this._path.v[0].x, this._path.v[0].y, this._path.v[0].r, this._path.v[1], this._path.v[2], this._path.v[3]);
	}
	
	textWidth(text, font){
		if(typeof font === "number") this.context.font = font+"px SimSun, Songti SC";
		else if(font) this.context.font = font;
		
		const bounding = this.context.measureText(text);

		//兼容火狐 (暂时只用到这两个, 谷歌 和 火狐 获取的box属性名完全不一样)
		if(bounding.fontBoundingBoxAscent === undefined) bounding.fontBoundingBoxAscent = bounding.actualBoundingBoxAscent;
		if(bounding.fontBoundingBoxDescent === undefined) bounding.fontBoundingBoxDescent = bounding.actualBoundingBoxDescent;

		return bounding;
	}

	static getPathTriangle(w, h, result){
		if(Array.isArray(result) === false) result = [w/2, 0, w, h, 0, h];
		else result.push(w/2, 0, w, h, 0, h);
		return result;
	}

}




/* CanvasAnimateImages (可以一次存储多个图像, 然后快速在其之间切换)
parameter: 
	images: Array[CanvasImageData];

attribute:
	images: Array[CanvasImageData]; //this.setImage(img) || this.images.push(img, ...);

method:
	set(i: Integer): undefined; //设置当前image; i必须
	next(): undefined;
	loads(srcs: Array[String || Object{src}], onDone: Function(images, i, srcs), onUpdate: Function(images, i)): this; //通过给的src加载image; 加载完成后push到this.images; srcs 必须, 其它参数可选

*/
class CanvasAnimateImages extends CanvasAnimate{

	#i = -1;

	constructor(images = []){
		super();
		this.images = images;
	
	}

	get i(){
		return this.#i;
	}

	_set(img){
		if(img !== null) this.box.size(img.width, img.height);
		this.image = img;

	}

	set(i){
		this.#i = i;
		this._set(this.images[i] || null);
		
	}

	next(){
		const len = this.images.length - 1;
		if(len !== -1){
			if(this.#i < len) this.#i++;
			else this.#i = 0;
			
			this._set(this.images[this.#i]);

		}
		
	}

	setImage(img = null){
		if(img === null) return;
		if(this.#i === -1){
			this.#i = this.images.length;
			this._set(img);
		}

		this.images.push(img);
		return this;
	}

	loads(srcs, onDone, onUpdate){
		onUpdate = typeof onUpdate === "function" ? onUpdate : null;
		var i = 0, c = srcs.length, img = null, _i = this.images.length;

		const len = srcs.length, 
		func = ()=>{
			i++; if(onUpdate !== null) onUpdate(this.images, _i);
			if(i === c && typeof onDone === "function"){
				if(this.#i === -1) this.set(0);
				onDone(this.images, _i, srcs);
			}
			else _i++;
		}

		for(let k = 0, ty = ""; k < len; k++){
			ty = typeof srcs[k];
			if(ty === "string" || ty === "object"){
				ty = ty === "string" ? srcs[k] : srcs[k].src;
				if(ty !== "" && typeof ty === "string"){
					img = new Image();
					img.onload = func;
					this.images.push(img);
					img.src = ty;
				}
				else c--;
			}

		}

		return this;
	}

}




/* CanvasAnimateSprite (把精灵图缓存为多个图像, 然后快速在其之间切换)
parameter: 
attribute:
method:
	buffer(image: ImageData, data: Array[Box] || Object{w, h}): this; //把精灵图剪裁为canvas; 然后缓存到images队列;
	
*/
class CanvasAnimateSprite extends CanvasAnimateImages{

	constructor(images){
		super(images);

	}

	buffer(image, data){
		if(!image || !data) return console.warn("CanvasAnimateSprite: 参数错误, 缓存失败");
		
		const paramCon = CanvasAnimateRender.paramCon;
		if(Array.isArray(data) === true){
			const len = data.length;
			for(let k = 0, context, canvas, box; k < len; k++){
				box = data[k];
				if(box.w < 1 || box.h < 1) continue;

				canvas = document.createElement("canvas");
				canvas.width = box.w;
				canvas.height = box.h;
				context = canvas.getContext("2d", paramCon);
				
				context.drawImage(image, box.x, box.y, box.w, box.h, 0, 0, box.w, box.h);
				this.setImage(canvas);
				
			}
		}

		else{
			if(data.w < 1 || data.h < 1) return console.warn("CanvasAnimateSprite: box小于1");
			const mw = image.width, mh = image.height,
			lenX = Math.floor(mw / data.w),
			lenY = Math.floor(mh / data.h);

			for(let x = 0, y, context, canvas, _x; x < lenX; x++){
				_x = x * data.w;
				for(y = 0; y < lenY; y++){
					canvas = document.createElement("canvas");
					canvas.width = data.w;
					canvas.height = data.h;
					context = canvas.getContext("2d", paramCon);

					context.drawImage(image, _x, y * data.h, data.w, data.h, 0, 0, data.w, data.h);
					this.setImage(canvas);
				}
			
			}

		}
		
		return this;
	}

}




/* ColorTestViewer 颜色调试器

attribute:
	onchange: Function; //颜色改变回调; 默认null

	//以下属性不建议直接修改
	rgb: RGBColor; 		//rgb模式颜色
	hsv: Object{h,s,v};	//hsv模式颜色
	alpha: Number;		//透明度

method:
	update(): undefined;		//更新控件视图 (通常控件被唤出时调用此方法, 前提是在唤出前控件颜色发生了改变)
	setValue(r, g, b, a): this; //设置控件的颜色

demo:
	const ctv = new ColorTestViewer({width: 200})
	.setValue(0, 0, 255, 1).update(false)
	.pos(100, 100).render();

	ctv.onchange = v => console.log(v);

*/
class ColorTestViewer extends CanvasAnimateRender{

	get value(){
		return this.rgb.getRGBA(Math.floor(this.alpha * 1000) / 1000);
	}

	constructor(option = {}){
		super(option);

		this.rgb = new RGBColor(255);
		this.hsv = this.rgb.getHSV();
		this.alpha = 1;
		this.cae = null;
		this.onchange = null;

		this.viewSVColor = null;
		this.viewSVsv = null;
		this.viewSVCursor = null;

		this.viewHValueBG = null;
		this.viewHValue = null;
		this.viewHScroll = null;
		this.viewHCursor = null;

		this.viewAScroll = null;
		this.viewACursor = null;

		this.viewColorInfo = null;

		//默认样式
		if(option.canvas === undefined){
			const width = option.width || 200, height = option.height || (width * 0.8), margin = 2, 
			h5 = height * 0.5, h1 = height * 0.1, h3 = height * 0.3;

			this.size(width + margin * 2, height + margin * 5);

			this.initViewSVColor(width, h5);
			this.initViewHScroll(width, h1);
			this.initViewAScroll(width, h1);
			this.initViewHValue(h3, h3);
			this.initViewColorInfo(width - h3, h3);

			this.setViewSVPos(margin, margin);
			this.setViewHScrollPos(margin, h5 + margin * 2);
			this.setViewAScrollPos(margin, h5 + h1 + margin * 3);
			this.setViewHValuePos(margin, h5 + h1 * 2 + margin * 4);
			this.viewColorInfo.pos(this.viewHValue.box.maxX(), this.viewHValue.box.y);
			
			this.initList();
			this.initEvent();

		}
		
	}

	update(u){
		if(this.viewSVColor !== null){
			this.updateViewSVCursor();
			this.updateViewSVColor();
			this.updateViewHValue();
			this.updateViewHCursor();
			this.updateViewACursor();
			this.updateViewColorInfo();
			if(u === true) this.redraw();
		}

		return this;
	}

	setValue(r, g, b, a){
		this.rgb.r = r;
		this.rgb.g = g;
		this.rgb.b = b;
		this.alpha = a;
		this.rgb.getHSV(this.hsv);
		
		return this;
	}

	setValueString(color){
		if(typeof color !== "string") return this;
		var _color = this.getColor(color);
		
		if(_color[0] === "#"){
			const len = _color.length;
			if(len === 4){
				_color = _color.slice(1);
				this.rgb.setFormHex(parseInt("0x"+_color + "" + _color));
			}
			else if(len === 7) this.rgb.setFormHex(parseInt("0x"+_color.slice(1)));
			this.alpha = 1;
			this.rgb.getHSV(this.hsv);
			
		}

		else if(_color[0] === "r" && _color[1] === "g" && _color[2] === "b"){
			const arr = [];
			for(let k = 0, len = _color.length, v = "", is = false; k < len; k++){
				
				if(is === true){
					if(_color[k] === "," || _color[k] === ")"){
						arr.push(parseFloat(v));
						v = "";
					}
					else v += _color[k];
					
				}

				else if(_color[k] === "(") is = true;
				
			}

			this.setValue(arr[0], arr[1], arr[2], arr[3] === undefined ? 1 : arr[3]);
			
		}
		
		return this;
	}

	getColor(str){ //检测 str 是否是颜色类型(16进制, rgb, rgba, 英文); 如果是则返回去除掉空格后的字符串颜色(英文则返回对应16进制颜色)
		var _color = "";
		for(let k = 0, len = str.length; k < len; k++){
			if(str[k] === " ") continue;
			_color += str[k];
		}
		
		if(_color[0] === "#" || (_color[0] === "r" && _color[1] === "g" && _color[2] === "b")) return _color;
		else{
			for(let k = 0, len = ColorRefTable.length; k < len; k++){
				str = ColorRefTable[k];
				if(str[0] === _color) return str[1];
			}
		}

		return "";
	}

	exit(){
		if(this.cae){
			this.onUpSV();
			this.onUpH();
			this.onUpA();
		}

		if(this.domElement.parentElement) this.domElement.parentElement.removeChild(this.domElement);

	}


	//event
	initEvent(){
		
		const cae = new CanvasAnimateEvent(this);

		//SV
		const setSV = (pageX, pageY) => {
			pageX = (pageX - this.domElementRect.x - this.viewSVColor.box.x) / this.viewSVColor.box.w * 100;
			pageY = (1 - (pageY - this.domElementRect.y - this.viewSVColor.box.y) / this.viewSVColor.box.h) * 100;
			if(pageX < 0) pageX = 0;
			else if(pageX > 100) pageX = 100;
			if(pageY < 0) pageY = 0;
			else if(pageY > 100) pageY = 100;
			if(this.hsv.s !== pageX || this.hsv.v !== pageY){
				this.hsv.s = pageX;
				this.hsv.v = pageY;
				this.rgb.setFormHSV(this.hsv.h, this.hsv.s, this.hsv.v);
				if(typeof this.onchange === "function") this.onchange(this.value);
				this.updateViewHValue();
				this.updateViewColorInfo();
				this.updateViewSVCursor();
				this.redraw();
			}

		},

		onMoveSV = event => {
			setSV(event.pageX, event.pageY);
		},

		onUpSV = () => {
			document.body.removeEventListener("pointerup", onUpSV);
			document.body.removeEventListener("pointermove", onMoveSV);
			cae.remove(this.viewSVCursor, 'up', onUpSV);
			cae.remove(this.viewSVCursor, 'move', onMoveSV);
			
		},

		onDownSV = event => {
			setSV(event.pageX, event.pageY);
			cae.add(this.viewSVCursor, "up", onUpSV);
			cae.add(this.viewSVCursor, "move", onMoveSV);
			document.body.addEventListener("pointerup", onUpSV);
			document.body.addEventListener("pointermove", onMoveSV);
			
		}

		cae.add(this.viewSVColor, "down", onDownSV);
		cae.add(this.viewSVCursor, "down", onDownSV);
		this.onUpSV = onUpSV;


		//H
		const setH = (pageX) => {
			pageX = (pageX - this.domElementRect.x - this.viewHScroll.box.x) / this.viewHScroll.box.w * 360;
			if(pageX < 0) pageX = 0;
			else if(pageX > 360) pageX = 360;
			if(this.hsv.h !== pageX){
				this.hsv.h = pageX;
				this.rgb.setFormHSV(this.hsv.h, this.hsv.s, this.hsv.v);
				if(typeof this.onchange === "function") this.onchange(this.value);
				this.updateViewHValue();
				this.updateViewColorInfo();
				this.updateViewSVColor();
				this.updateViewHCursor();
				this.redraw();
			}

		},

		onMoveH = event => {
			setH(event.pageX);
		},

		onUpH = () => {
			document.body.removeEventListener("pointerup", onUpH);
			document.body.removeEventListener("pointermove", onMoveH);
			cae.remove(this.viewHCursor, 'up', onUpH);
			cae.remove(this.viewHCursor, 'move', onMoveH);

		},

		onDownH = event => {
			setH(event.pageX);
			cae.add(this.viewHCursor, "up", onUpH);
			cae.add(this.viewHCursor, "move", onMoveH);
			document.body.addEventListener("pointerup", onUpH);
			document.body.addEventListener("pointermove", onMoveH);

		}
		
		cae.add(this.viewHScroll, "down", onDownH);
		cae.add(this.viewHCursor, "down", onDownH);
		this.onUpH = onUpH;



		//A
		const setA = (pageX) => {
			pageX = (pageX - this.domElementRect.x - this.viewAScroll.box.x) / this.viewAScroll.box.w;
			if(pageX < 0) pageX = 0;
			else if(pageX > 1) pageX = 1;
			if(this.alpha !== pageX){
				this.alpha = pageX;
				if(typeof this.onchange === "function") this.onchange(this.value);
				this.updateViewColorInfo();
				this.updateViewHValue();
				this.updateViewACursor();
				this.redraw();
			}

		},

		onMoveA = event => {
			setA(event.pageX);
		},

		onUpA = () => {
			document.body.removeEventListener("pointerup", onUpA);
			document.body.removeEventListener("pointermove", onMoveA);
			cae.remove(this.viewACursor, 'up', onUpA);
			cae.remove(this.viewACursor, 'move', onMoveA);
			
		},

		onDownA = event => {
			setA(event.pageX);
			cae.add(this.viewACursor, "up", onUpA);
			cae.add(this.viewACursor, "move", onMoveA);
			document.body.addEventListener("pointerup", onUpA);
			document.body.addEventListener("pointermove", onMoveA);

		}

		cae.add(this.viewAScroll, "down", onDownA);
		cae.add(this.viewACursor, "down", onDownA);
		this.onUpA = onUpA;

		this.cae = cae;

	}


	//SV 明度 与 灰度
	updateViewSVCursor(){
		this.viewSVCursor.pos(this.hsv.s / 100 * this.viewSVColor.box.w + this.viewSVColor.box.x - this.viewSVCursor.circle.r, (1 - this.hsv.v / 100) * this.viewSVColor.box.h + this.viewSVColor.box.y - this.viewSVCursor.circle.r);
	}

	updateViewSVColor(){
		this.viewSVColor.clear().fill(ColorTestViewer.emptyColor.setFormHSV(this.hsv.h, 100, 100).getHexString());

	}

	setViewSVPos(x, y){
		this.viewSVColor.pos(x, y);
		this.viewSVsv.pos(x, y);
		this.updateViewSVCursor();
	}

	initViewSVColor(width, height){ //*3
		this.viewSVColor = new CanvasAnimateCustom().size(width, height).rect();

		this.viewSVsv = new CanvasAnimateCustom().size(width, height);
		const gradientS = this.viewSVsv.linearGradient(0, height, width, height, ColorTestViewer.colorS, true),
		gradientV = this.viewSVsv.linearGradient(width, height, width, 0, ColorTestViewer.colorV, true);
		this.viewSVsv.rect().fill(gradientS).fill(gradientV);

		this.viewSVCursor = new CanvasAnimateCustom().size(10, 10);
		this.viewSVCursor.computeCircle();
		this.viewSVCursor.arc().stroke("#fff");

		this.list.push(this.viewSVColor, this.viewSVsv, this.viewSVCursor);

		this.setViewSVPos(0, 0);
		this.updateViewSVColor();

	}


	//H 颜色
	updateViewHValue(){
		this.viewHValue.clear().fill(this.rgb.getRGBA(this.alpha));

	}

	setViewHValuePos(x, y){
		this.viewHValueBG.pos(x, y);
		this.viewHValue.pos(x, y);

	}

	initViewHValue(width, height){ //*2
		this.viewHValueBG = new CanvasAnimateCustom().size(width, height)
		.drawTransparentBG(5, 0, 0, width, height);

		this.viewHValue = new CanvasAnimateCustom().size(width, height)
		.rect();

		this.list.push(this.viewHValueBG, this.viewHValue);
		this.updateViewHValue();

	}

	updateViewHCursor(){
		this.viewHCursor.pos(this.hsv.h / 360 * this.viewHScroll.box.w + this.viewHScroll.box.x - this.viewHCursor.circle.r, this.viewHScroll.box.y);

	}

	setViewHScrollPos(x, y){
		this.viewHScroll.pos(x, y);
		this.updateViewHCursor();
	}

	initViewHScroll(width, height){ //*2
		this.viewHScroll = new CanvasAnimateCustom().size(width, height).rect();
		this.viewHScroll.fill(this.viewHScroll.linearGradient(0, height, width, height, ColorTestViewer.colorH, true));

		const size = Math.min(width, height);
		this.viewHCursor = new CanvasAnimateCustom().size(size, size);
		this.viewHCursor.computeCircle();
		this.viewHCursor.arc().stroke("#fff");
		
		this.list.push(this.viewHScroll, this.viewHCursor);
		this.setViewHScrollPos(0, 0);

	}


	//A 透明度
	updateViewACursor(){
		this.viewACursor.pos(this.alpha * this.viewAScroll.box.w + this.viewAScroll.box.x - this.viewACursor.circle.r, this.viewAScroll.box.y);

	}

	setViewAScrollPos(x, y){
		this.viewAScroll.pos(x, y);
		this.updateViewACursor();
	}

	initViewAScroll(width, height){ //*2
		this.viewAScroll = new CanvasAnimateCustom().size(width, height)
		.drawTransparentBG(5, 0, 0, width, height).rect();
		this.viewAScroll.fill(this.viewAScroll.linearGradient(0, height, width, height, ColorTestViewer.colorA));

		const size = Math.min(width, height);
		this.viewACursor = new CanvasAnimateCustom().size(size, size);
		this.viewACursor.computeCircle();
		this.viewACursor.arc().stroke("rgb(0,160,255)");

		this.list.push(this.viewAScroll, this.viewACursor);
		this.setViewAScrollPos(0, 0);

	}


	//color text
	updateViewColorInfo(){
		
		this.viewColorInfo.clear().text(this.value, "#000000", 12, "center", "center");

	}

	initViewColorInfo(width, height){ //*1
		this.viewColorInfo = new CanvasAnimateCustom().size(width, height);
		this.list.push(this.viewColorInfo);
		this.updateViewColorInfo();
	}



	static emptyColor = new RGBColor();

	static colorH = function (){ //颜色渐变
		const result = [], color = ColorTestViewer.emptyColor;
		for(let h = 0; h < 6; h++){
			color.setFormHSV(h/6*360, 100, 100);
			result.push(color.getHexString());
		}
		
		return result;
	}();

	static colorS = function (){ //饱和度的渐变
		const result = [];
		for(let s = 0; s < 100; s++) result.push('rgba(255,255,255,' + (1 - s / 100) + ")");
		return result;
	}();

	static colorV = function (){ //明度渐变
		const result = [];
		for(let s = 0; s < 100; s++) result.push('rgba(0,0,0,' + (1 - s / 100) + ")");
		return result;
	}();

	static colorA = function (){ //透明度渐变
		const result = [];
		for(let a = 0; a <= 10; a++) result.push('rgba(0,0,0,' + (a / 10) + ")");
		return result;
	}();

}




/* MenuView Tree Option Menu 树状选项菜单视图
注意: MenuView 在初始化时用时比较长;  MenuView一旦被实例化后 .visible, .views 除外的属性更新将无效, 因为它们已经被缓存为图像

parameter:
	names: Array[String], funcs, lcons, parentElem(所有后代引用父的.parentElem)
	或第一个参数 Array[Object]: [
		{
			name: String, //对应 .names 必须
			lcon: ImageData, //对应 .lcons; (MenuView.lconSize 是每个lcon的宽高) 可选
			func: Function //对应 .funcs; 可选
		}
		...
	]

attribute:
	parentElem: DomElement; //父容器 默认 null 既body (注意: 你如果要自定义此属性值, 只需要给root(最顶层且没有父的MenuView)传一次就够了,因为root的后代会自动引用自己上级的.parentElem)
	visible: Bool; 是否显示视图 默认 false (如果当前MenuView是root(没有父), 则需要手动更新, 事实上root的视图位置(.view.pos) 和 是否显示(.visible) 都需要自己手动更新)

	//以下属性只读; 内部自动定义
	top, left, widht, height: Number; //canvas的位置和宽高, 只读
	view: CanvasAnimateRender; //用于渲染 CanvasAnimate
	events: CanvasAnimateEvent; //CanvasAnimateRender 的事件管理器
	views: Array[funcs.callback.v]; //
	_eventTargets: Array[CanvasAnimateImages]; //.exit()方法用此属性清理事件
	parentElemRect: Box; //.parentElem的位置和宽高(root负责创建和更新此值, 其后代只是引用)
	names: Array[String]; //文本内容 默认[];
	lcons: Array[][CanvasImageData]; //自定义图标; 对应 names 索引 默认null;
	funcs: Array[Function]; //onclick事件回调; 对应 names 索引 默认null;
		callback: 
			v: Object{
				//以下属性是可选的 默认null
				background: CanvasAnimateImages, //背景, 最底部的cai 
				border: CanvasAnimateImages, //边框 顶部的cai
				lcon_def: CanvasAnimateImages, //系统默认的图标, 0: "✘", 1: "✔", 2: "●", 3: "◆", 4: "■", 5: "★"; (更换对钩✔图标: lcon_def.set(1), 参见: static/defaultLcon)
				lcon: CanvasAnimateImages, //自定义的图标 对应自定义的.lcons (注意: lcon_def 和 lcon 的位置是重叠的, lcon在lcon_def的上层)

				//以下属性总会被定义 必须
				name: CanvasAnimateImages, //如要获取对应的name值: target.names[key], 回调函数: .funcs[key] 图标: .lcons[key]
				child: CanvasAnimateImages, //右箭头图标 (如果 children[key] 未定义 则.visible = false, 所以可以动态添加,删除,设置,某项的后代)
				disable: Bool, //是否禁用; 默认 false
				key: Number, //对应 .names 的键值
				target: MenuView, //this
			},
			event: onpointerup Event
	
method:
	getViewByName(name): Object{funcs.callback.v}; //返回的对象 恒等于 回调返回的参数对象
	add(v: MenuView, k: Number): v; //把v添加到自己的子集; k对应.names的键, 如果未定义直接.push(v)
	exit(): undefined; //清理自己及自己所有后代的缓存和视图
	
	//内部自动调用以下方法:
	update(): undefined; //更新自己及自己第一层后代位置, .visible 设为true时自动调用一次; 如果更新自己及所有后代: this.traverse(this._update); (如果当前MenuView是root(没有父), 则需要手动更新位置: MenuView.view.pos(left:Number, top:Number));
	traverse(callback): undefined; //遍历自己及后代
		callback(v: MenuView, k: v在其父的键, p: v的父亲) //如果v存在则返回两个参数, 否则返回三个参数
	initView(names);
	clearNowView(k)
	importData();
	_setHiddenOrChild(k);
	_update(v, k, p);
	_traverse(callback, k);

static: 
	sign: String; //如果定义给后续创建的每个canvas对象添加一条属性(canvas[sign] = true); 默认 "" 既不添加
	parentElem: DomElement; //.parentElem 的备胎 默认 null;
	className: String; //css类名; 默认 ""
	lconSize: Number; //lcon 的宽高 默认 16
	textSize: Number; //全局的文字大小 默认12 (注意此值不能超过 lconSize)
	borderSize: Number; //如果小于等于0初始化时不创建border; 默认0
	textColor: Object; //默认 {down: "#0000ff", up: "#000000", disable: "#666666"};
	rowBorderColor: Object; //默认 {down: "#ffffff", up: "#000000", disable: "#666666"};
	rowBackgroundColor: Object; //如果为null则不创建背景; 默认 {down: "rgba(0,0,255,0.2)", up: "#ffffff", disable: "#333333"}
	rowPadding: Object; //每排的内边距 默认 {top: 2, right: 2, bottom: 2, left: 2}
	rowMargin: Object; //每排的外边距 默认 {top: 2, right: 2, bottom: 2, left: 2};
	defaultLcon: String; //是否为每排缓存默认的图标(lcon_def); 默认 "min" | "" | "max"; ["✘", "✔", "●", "◆", "■", "★"]; min 缓存0,1,2; ""不缓存; max缓存全部
	buttonType: Number; // -1鼠标左右键都可触发回调 | 0只能是左键 | 2只能是右键

	reset(): undefined; //重置上面所有静态属性的值(恢复其默认值, 所有静态属性只对后续创建的 MenuView 有效)
	
	_cac: CanvasAnimateCustom;
	nowView: MenuView;
	clearNowView(): undefined;

private:
	length: Number;
	visible: Bool;

demo:
	const func = v => {
		console.log(v);
		v.lcon_def.set(1); //"✔"图标
		//v.disable = true; //禁用
	},
	names = ["AAA", "BBB", "CCC", "DDDDDDDDD"],
	funcs = [func, null, func],
	lcons = null,

	root = new MenuView(names, null, funcs, lcons);

	//对应 root.names[2]: "CCC"
	root.add(new MenuView(names, null, funcs, lcons), 2);

	//对应 root.names[3]: "DDDDDDDDD"
	root.add(new MenuView(names, null, funcs, lcons), 3);

	root.view.pos(10, 10); //设置root的位置
	root.visible = true; //显示视图

	//
	const root = new MenuView([
		{name: "AAA", func: func},
		{name: "bbb", func: func},
		{name: "ccc", func: func},
		{name: "ddd", func: func},
		{name: "eee", func: func},
		{name: "test", func: func},
	]),

	// 添加到 root / name: test 的后代
	menuViewA = root.add(new MenuView([
		{name: "AAA", func: func},
		{name: "bbb", func: func},
		{name: "ccc", func: func},
		{name: "ddd", func: func},
	]), "test"|5);

	menuViewA.getViewByName("ddd").lcon_def.set(0|1|2); //外部修改样式

*/
class MenuView extends TreeStruct{

	static sign = "";
	static parentElem = null;
	static className = "";
	static textSize = 12;
	static lconSize = 16;
	static borderSize = 0; //如果小于或等于零不创建边框
	static textColor = {down: "#0000ff", up: "#000000", disable: "#666666"};
	static rowBorderColor = {down: "#ffffff", up: "#000000", disable: "#666666"};
	static rowBackgroundColor = {down: "rgba(0,0,255,0.2)", up: "#ffffff", disable: "#999999"}; //如果为null不创建背景
	static rowPadding = {top: 2, right: 2, bottom: 2, left: 2};
	static rowMargin = {top: 0, right: 0, bottom: 0, left: 0};
	static defaultLcon = "min";
	static buttonType = -1;

	static reset(){ //重置上面静态属性的值
		MenuView.sign = "";
		MenuView.parentElem = null;
		MenuView.className = "";
		MenuView.textSize = 12;
		MenuView.lconSize = 16;
		MenuView.borderSize = 0;

		MenuView.textColor.down = "#0000ff";
		MenuView.textColor.up = "#000000";
		MenuView.textColor.disable = "#666666";

		MenuView.rowBorderColor.down = "#ffffff";
		MenuView.rowBorderColor.up = "#000000";
		MenuView.rowBorderColor.disable = "#666666";

		MenuView.rowBackgroundColor.down = "rgba(0,0,255,0.2)";
		MenuView.rowBackgroundColor.up = "#ffffff";
		MenuView.rowBackgroundColor.disable = "#999999";

		MenuView.rowPadding.top = 2;
		MenuView.rowPadding.right = 2;
		MenuView.rowPadding.bottom = 2;
		MenuView.rowPadding.left = 2;

		MenuView.rowMargin.top = 0;
		MenuView.rowMargin.right = 0;
		MenuView.rowMargin.bottom = 0;
		MenuView.rowMargin.left = 0;

		MenuView.defaultLcon = "min";
		MenuView.buttonType = -1;
	
	}

	static _cac = new CanvasAnimateCustom();
	static nowView = null;
	static clearNowView(){
		if(MenuView.nowView === null) return;
		MenuView.nowView.traverseUp(v => v.visible = false);
		MenuView.nowView = null;

	}

	#length = 0;
	#visible = false;

	get top(){
		return this.view.domElementRect.y;
	}

	get left(){
		return this.view.domElementRect.x;
	}

	get width(){
		return this.view.box.w;
	}

	get height(){
		return this.view.box.h;
	}

	get visible(){
		return this.#visible;
	}

	set visible(v){
		if(v === true){
			this.update(); //更新自己及自己第一层后代位置 
			this.#visible = true;
			this.view.domElement.style.visibility = "visible";
		}

		else if(v === false){
			this.#visible = false;
			this.view.domElement.style.visibility = "hidden";

			//hidden root
			if(this.parent === null){
				this.traverse(v => {
					if(v && v.visible !== false) v.visible = false;
					
				});
		
			}

		}
		
	}

	constructor(names, funcs, lcons, parentElem){
		super();
		
		this.names = names || [];
		this.funcs = funcs || null;
		this.lcons = lcons || null;
		this.parentElem = parentElem || MenuView.parentElem || document.body;

		this.view = new CanvasAnimateRender({className: MenuView.className});
		this.events = new CanvasAnimateEvent(this.view);
		this.views = [];
		//this._eventTargets = [];
		this.parentElemRect = null;
		
		if(typeof names[0] !== "string") this.importData(names);
		this.initView(this.names);

	}

	_traverse(callback, key){
		if(callback(this, key) !== "continue"){
			for(let k = 0; k < this.#length; k++){
				if(this.children[k]) this.children[k].traverse(callback, k);
				else callback(null, k, this);
	
			}

		}

	}

	traverse(callback){
		this._traverse(callback, this.parent === null ? -1 : this.parent.children.indexOf(this));
	}

	getViewByName(name){
		const k = this.names.indexOf(name);
		if(k !== -1) return this.views[k];
	}

	add(v, k){

		v.parent = this;

		if(this.children.includes(v) === false){

			if(k === undefined) this.children.push(v);

			else{

				if(typeof k === "string") k = this.names.indexOf(k);

				if(this.children[k]) this.children[k].exit();
				
				this.children[k] = v;
				
			}

		}

		if(v.parentElem !== this.parentElem){
			v.parentElem = this.parentElem;
			v.parentElemRect = this.parentElemRect;
		}
		
		return v;
	}

	exit(){

		//清理 MenuView.nowView
		MenuView.clearNowView();

		this.traverse(v => {
			if(!v) return;

			//清理.view
			if(v.view.domElement.parentElement) v.view.domElement.parentElement.removeChild(v.view.domElement);

			//清理.events (over out 事件)
			v.events.disposeEvent();
			/* for(let k = 0, len = v._eventTargets.length; k < len; k++){
				v.events.clear(v._eventTargets[k], "over");
				v.events.clear(v._eventTargets[k], "out");
			} */
			
		});

		//从树结构中移出
		if(this.parent !== null) this.parent.remove(this);

		this.views.length = 0;

	}

	_update(v, k, p){
		
		//child hidden
		if(!v){
			const child = p.views[k].child;
			if(child.visible !== false){
				child.visible = false;
				p.view.redraw();
			}
			
			return;
		}

		if(v.parent === null) return;

		if(v.parent.parentElem !== v.parentElem) v.parentElem = v.parent.parentElem;
		if(v.parent.parentElemRect !== v.parentElemRect) v.parentElemRect = v.parent.parentElemRect;

		//child visible
		const child = v.parent.views[k].child;
		if(child.visible !== true){
			child.visible = true;
			v.parent.view.redraw();
		}
		
		//canvas position (bug: 不能直接 实时的引用 MenuView 的静态属性, 最好在初始化视图时缓存所需的静态属性)
		const x = v.parent.left + v.parent.width - MenuView.rowPadding.left - MenuView.rowMargin.left;
		if(x + v.view.box.w > v.parent.parentElemRect.x + v.parent.parentElemRect.width) v.view.pos(v.parent.left - v.width, (MenuView.rowPadding.top + MenuView.rowPadding.bottom + MenuView.lconSize) * k + MenuView.rowMargin.top * k + MenuView.rowMargin.top +  v.parent.top);
		else v.view.pos(x, (MenuView.rowPadding.top + MenuView.rowPadding.bottom + MenuView.lconSize) * k + MenuView.rowMargin.top * k + MenuView.rowMargin.top +  v.parent.top);

	}

	update(){ //更新自己第一层后代 (如果更新所有后代: this.traverse(this._update))
		if(this.parent === null){
			if(this.parentElemRect === null) this.parentElemRect = {x: 0, width: 0};
			const rect = this.parentElem.getBoundingClientRect();
			this.parentElemRect.x = rect.x;
			this.parentElemRect.width = rect.width;
		}

		else{
			if(this.parent.parentElem !== this.parentElem) this.parentElem = this.parent.parentElem;
			if(this.parent.parentElemRect !== this.parentElemRect) this.parentElemRect = this.parent.parentElemRect;
			this._update(this, this.parent.children.indexOf(this));
		}

		for(let k = 0; k < this.#length; k++) this._update(this.children[k], k, this);
		
	}

	_setHiddenOrChild(k){
		if(k !== -1 && this.parent !== null && this.parent.views[k]){
			const obj = this.parent.views[k];
			if(obj.disable === false){
				if(obj.child !== null) obj.child.set(1);
				if(obj.background !== null) obj.background.set(1);
				if(obj.border !== null) obj.border.set(1);
				obj.name.set(1);
				this.parent.view.redraw();
			}
			
		}

		if(this.#visible !== false) this.visible = false;

	}

	clearNowView(k){
		if(MenuView.nowView !== null && MenuView.nowView !== this && MenuView.nowView !== this.children[k]){

			if(MenuView.nowView.parent === this) MenuView.nowView._setHiddenOrChild(MenuView.nowView.parent === null ? -1 : MenuView.nowView.parent.children.indexOf(MenuView.nowView));

			else{

				let tar = null;

				MenuView.nowView.traverse((v, key) => {

					if(v){
						if(v !== this && v !== this.children[k]) v._setHiddenOrChild(key);
						else tar = v;
					}
					
				});
				
				if(tar === null){

					MenuView.nowView.traverseUp(v => {

						if(v !== this && v !== this.children[k]) v._setHiddenOrChild(v.parent === null ? -1 : v.parent.children.indexOf(v));
						else return "break";

					});

				}

			}
		
		}

	}

	importData(data){
		data = data || this.names;
		if(Array.isArray(data) === false) return console.warn("MenuView: 导入失败");
		this.names = [];

		for(let k = 0, len = data.length; k < len; k++){
			if(!data[k] || typeof data[k].name !== "string") return console.warn("MenuView: 导入失败");

			this.names.push(data[k].name);

			if(typeof data[k].func === "function"){
				if(this.funcs === null) this.funcs = [];
				this.funcs[k] = data[k].func;
			}

			if(data[k].lcon){
				if(this.lcons === null) this.lcons = [];
				this.lcons[k] = data[k].lcon;
			}

		}

	}

	initView(names){
		names = names || this.names;
		this.#length = names.length;
		if(Array.isArray(names) === false || this.#length === 0) return console.warn("MenuView: 初始化失败");
		
		const th = this, size = MenuView.textSize, lconSize = MenuView.lconSize, borSize = MenuView.borderSize, defaultLcon = MenuView.defaultLcon, buttonType = MenuView.buttonType;

		var _cac = MenuView._cac, _path = [1, 1, 1, lconSize-1, lconSize-1, lconSize/2],
		color = MenuView.textColor, bgColor = MenuView.rowBackgroundColor, 
		borColor = MenuView.rowBorderColor, padding = MenuView.rowPadding, margin = MenuView.rowMargin,
		maxTextWidth = 0, maxWidth = 0, maxHeight = 0;

		//set maxTextWidth
		for(let k = 0; k < this.#length; k++){
			_cac.box.set(0, 0, 0, 0);
			_cac.text(names[k], "", size);
			if(_cac.box.w > maxTextWidth) maxTextWidth = _cac.box.w;
		}

		//initView
		for(let k = 0; k < this.#length; k++){
			const _h = padding.top + padding.bottom + lconSize, //
			_y = _h * k + margin.top * k + margin.top,
			bgW = padding.left + padding.right + maxTextWidth + lconSize * 2 + 4;

			//background
			let bg = null;
			if(bgColor !== null){
				bg = new CanvasAnimateImages().pos(margin.left, _y);
				_cac.size(bgW, _h).rect();
				_cac.context.lineWidth = borSize || 1;
				bg.setImage(_cac.clear().fill(bgColor.disable).shear());
				bg.setImage(_cac.clear().fill(bgColor.up).shear());
				bg.setImage(_cac.clear().fill(bgColor.down).shear());

				bg.set(1);
				this.view.list.push(bg);
			}

			//defined lcons: "✘", "✔", "●", "◆", "■", "★"
			let lcon_def = null;
			if(defaultLcon !== ""){
				_cac.size(lconSize, lconSize);

				if(defaultLcon === "max") lcon_def = new CanvasAnimateImages([
					_cac.clear().text("✘", color.disable, size, "center", "center").shear(),
					_cac.clear().text("✔", color.down, size, "center", "center").shear(),
					_cac.clear().text("●", color.down, size, "center", "center").shear(),
					_cac.clear().text("◆", color.down, size, "center", "center").shear(),
					_cac.clear().text("■", color.down, size, "center", "center").shear(),
					_cac.clear().text("★", color.down, size, "center", "center").shear()
				]);
					
				else lcon_def = new CanvasAnimateImages([
					_cac.clear().text("✘", color.disable, size, "center", "center").shear(),
					_cac.clear().text("✔", color.down, size, "center", "center").shear(),
					_cac.clear().text("●", color.down, size, "center", "center").shear()
				]);

				lcon_def.pos(margin.left + padding.left, _y + padding.top);
				this.view.list.push(lcon_def);

			}

			//lcons
			let lcon = null;
			if(Array.isArray(this.lcons) === true && Array.isArray(this.lcons[k]) === true){
				lcon = new CanvasAnimateImages(this.lcons[k]).pos(margin.left + padding.left, _y + padding.top);
				lcon.set(0);
				this.view.list.push(lcon);

			}

			//names
			_cac.size(maxTextWidth, lconSize);
			const str = new CanvasAnimateImages([
				_cac.clear().text(names[k], color.disable, size, "", "center").shear(),
				_cac.clear().text(names[k], color.up, size, "", "center").shear(),
				_cac.clear().text(names[k], color.down, size, "", "center").shear(),
				
			]).pos(margin.left + padding.left + lconSize + 2, _y + padding.top);
			str.set(1);
			this.view.list.push(str);

			//child
			_cac.size(lconSize, lconSize).path(_path, true);
			const child = new CanvasAnimateImages([
				_cac.clear().stroke(color.disable, 1).shear(),
				_cac.clear().fill(color.up, 1).shear(),
				_cac.clear().stroke(color.down, 1).shear(),
				
			]).pos(str.box.x + maxTextWidth + 2, _y + padding.top);
			
			child.set(1);
			this.view.list.push(child);

			//border
			let bor = null;
			if(borSize > 0){
				bor = new CanvasAnimateImages().pos(margin.left, _y);
				_cac.size(bgW, _h).rect();
				bor.setImage(_cac.clear().stroke(borColor.disable, borSize).shear());
				bor.setImage(_cac.clear().stroke(borColor.up, borSize).shear());
				bor.setImage(_cac.clear().stroke(borColor.down, borSize).shear());
				bor.set(1);
				this.view.list.push(bor);
			}

			//views
			let _disable = false, i_lcon = -1, i_lcon_def = -1;
			this.views.push({
				background: bg,
				lcon_def: lcon_def,
				lcon: lcon,
				name: str,
				child: child,
				border: bor,
				key: k,
				target: this,
				get disable(){
					return _disable;
				},
				set disable(v){
					if(v === true){
						th.clearNowView(k);
						if(th.children[k]) th.children[k].visible = false;
						if(lcon_def !== null){
							i_lcon_def = lcon_def.i;
							lcon_def.set(0);
						}
						if(lcon !== null){
							i_lcon = lcon.i;
							lcon.set(-1);
						}
						if(bg !== null) bg.set(0);
						if(bor !== null) bor.set(0);
						str.set(0);
						child.set(0);
						_disable = true;
					}

					else if(v === false){
						if(lcon_def !== null) lcon_def.set(i_lcon_def);
						if(lcon !== null) lcon.set(i_lcon);
						if(bg !== null) bg.set(1);
						if(bor !== null) bor.set(1);
						str.set(1);
						child.set(1);
						_disable = false;
					}
					
				},
			});

			//maxWidth, maxHeight
			const mw = bgW + margin.left + margin.right;
			if(maxWidth < mw) maxWidth = mw;
			const mh = _y + _h + margin.bottom;
			if(maxHeight < mh) maxHeight = mh;

			//event
			const eventTarget = bor || bg || str;
			//this._eventTargets.push(eventTarget);

			if(Array.isArray(this.funcs) === true){
				let _isDown = false, pointerId = -1;
				this.events.add(eventTarget, "down", event => {
					if(_disable === true || (buttonType !== -1 && event.button !== buttonType)) return _isDown = false;
					
					if(!this.children[k]){
						if(bg !== null) bg.set(2);
						if(bor !== null) bor.set(2);
						this.view.redraw();
					}
					
					pointerId = event.pointerId;
					_isDown = true;
				});
	
				this.events.add(eventTarget, "up", event => {
					if(pointerId !== event.pointerId || _isDown === false || _disable === true || (buttonType !== -1 && event.button !== buttonType)) return;
					pointerId = -1;
					if(!this.children[k]){
						if(bg !== null) bg.set(1);
						if(bor !== null) bor.set(1);
					}
					
					if(typeof this.funcs[k] === "function") this.funcs[k](this.views[k], event);
					this.view.redraw();
				});

			}
		
			this.events.add(eventTarget, "over", () => {
				if(_disable === true) return;
				if(this.children[k]){
					if(bg !== null) bg.set(2);
					if(bor !== null) bor.set(2);
				}
				str.set(2);
				
				this.clearNowView(k);
				if(this.children[k] !== undefined){
					MenuView.nowView = this.children[k];
					MenuView.nowView.visible = true;
					child.set(2);
				}

				this.view.redraw();
			});

			this.events.add(eventTarget, "out", () => {
				if(_disable === true) return;

				if(this.children[k]){
					if(bg !== null) bg.set(1);
					if(bor !== null) bor.set(1);
				}
				str.set(1);
				this.view.redraw();
				
			});

		}
		
		//init this.view
		this.view.initList();
		this.view.size(maxWidth, maxHeight);
		this.view.domElement.style.backgroundColor = bgColor.up;
		this.view.domElement.style.position = "absolute";
		this.view.render(this.parentElem);
		this.visible = this.#visible;
		if(MenuView.sign !== ""){
			if(this.view.domElement[MenuView.sign] === undefined) this.view.domElement[MenuView.sign] = true;
			else console.warn("MenuView: 标记失败, 属性名重复 "+MenuView.sign);
		}
		
		_cac = color = bgColor = borColor = padding = margin = null;
		
	}

}




/* ImageViewer 图片查看器

parameter:
	option: {
		defaultEvent: Bool; //默认true
	};

attribute:
	image: CanvasImage;
	scale: Number; //小于1缩小, 大于1放大

method:
	center(): this; //图片在视口居中
	setViewportScale: this; //将图片按比例缩放至视口大小
	setScale(v): this; //设置.scale
	setImage(image): this; //设置.image
	drawImage(): this; //更新图像 (之后需要.redraw()更新画布)

demo:
	const imageViewer = new ImageViewer({
		width: this.width, 
		height: this.width, 
		className: 'shadow-convex',
	});

	imageViewer.domElement.style = `
		background-color: rgb(127,127,127);
		border-radius: 4px;
		z-index: 99999;
		position: absolute;
	`;

	imageViewer.pos(100, 100).setImage(image)
	.setViewportScale().center()
	.drawImage().render();

*/
class ImageViewer extends CanvasAnimateRender{

	//允许图片的最大宽高 (min 不能小于1)
	#min = 1;
	#max = 4096; 

	constructor(option){
		super(option);

		this.eventDispatcher = new CanvasAnimateEvent(this);
		this.target = this.add(new CanvasAnimateCustom()).size(this.box.w, this.box.h);

		this.image = null;
		this.scale = 1;
		
		this._rangeMin = 0;
		this._rangeMax = 0;
		this._box = new Box();
		this._oldWidth = this._box.w;

		if(option.defaultEvent === false) return this;

		//拖拽事件
		var tzX = 0, tzY = 0;
		const onMove = event => {
			this._box.pos(event.pageX - this.domElementRect.x - tzX, event.pageY - this.domElementRect.y - tzY);
			this.drawImage().redraw();

		},

		onUp = () => {
			document.body.removeEventListener("pointerup", onUp);
			document.body.removeEventListener("pointermove", onMove);

			this.eventDispatcher.remove(this.target, 'up', onUp);
			this.eventDispatcher.remove(this.target, 'move', onMove);
			
		}

		this.eventDispatcher.add(this.target, "down", event =>{
			onUp();

			if(this.image === null) return;

			tzX = event.offsetX - this._box.x;
			tzY = event.offsetY - this._box.y;
			
			this.eventDispatcher.add(this.target, 'up', onUp);
			this.eventDispatcher.add(this.target, 'move', onMove);
			
			document.body.addEventListener("pointerup", onUp);
			document.body.addEventListener("pointermove", onMove);

		});

		//缩放事件 (以鼠标为中心点缩放)
		this.eventDispatcher.add(this.target, "wheel", event =>{

			/* //const oldWidth = this._box.w;
			this.setScale(event.wheelDelta === 120 ? this.scale - this.scale * 0.5 : this.scale + this.scale * 0.5);

			const ratio = this._box.w / this._oldWidth,
			nx = event.offsetX - ((event.offsetX - this._box.x) * ratio + this._box.x) + this._box.x,
			ny = event.offsetY - ((event.offsetY - this._box.y) * ratio + this._box.y) + this._box.y;
			
			this._box.pos(nx, ny); */

			this.setScaleAt(event.wheelDelta === 120 ? this.scale - this.scale * 0.5 : this.scale + this.scale * 0.5, event.offsetX, event.offsetY).drawImage().redraw();

		});

		//旋转事件


		this._onUp = onUp;

	}

	exit(){
		this._onUp();
		if(this.domElement.parentElement) this.domElement.parentElement.removeChild(this.domElement);

	}
	
	size(w, h, setElem){
		super.size(w, h, setElem);
		this.target.size(this.box.w, this.box.h);

		return this;
	}
	
	center(){
		this._box.pos((this.box.w - this._box.w)/2, (this.box.h - this._box.h)/2);

		return this;
		
	}

	setViewportScale(){
		if(this.image === null) return this;
		const width = this.image.width, ratio = width / this.image.height;
		
		return this.setScale(ratio < 1 ? ratio * this.box.w / width : this.box.w / width);
	}

	setScaleAt(s, x, y){ //x, y 是相对于画布位置
		this._oldWidth = this._box.w;
		this.setScale(s);

		const ratio = this._box.w / this._oldWidth,
		nx = x - ((x - this._box.x) * ratio + this._box.x) + this._box.x,
		ny = y - ((y - this._box.y) * ratio + this._box.y) + this._box.y;
		
		this._box.pos(nx, ny);
		return this;
	}

	setScale(v){
		if(v === Infinity || isNaN(v) === true || typeof v !== "number") return this;
		this.scale = v < this._rangeMin ? this._rangeMin : v > this._rangeMax ? this._rangeMax : v;
		if(this.image !== null){
			this._box.size(this.image.width * this.scale, this.image.height * this.scale);
			//this._oldWidth = this._box.w;
		}
		return this;
	}

	setImage(image){

		if(this.isCanvasImage(image) === true){
			
			if(image.width > image.height){
				this._rangeMin = this.#min / image.width;
				this._rangeMax = this.#max / image.width;

			}

			else{
				this._rangeMin = this.#min / image.height;
				this._rangeMax = this.#max / image.height;

			}

			this.image = image;

		}

		else if(this.image !== null){

			this.image = null;
			this.target.clear();
			this.redraw();

		}

		return this;
	}

	drawImage(){

		if(this.image !== null) this.target.clear().context.drawImage(this.image, this._box.x, this._box.y, this._box.w, this._box.h);

		return this;
	}

}




/* CanvasAnimateUI UI控件
依赖:
	ImageViewer
	MenuView
	ColorTestViewer

注意:
	传入的 .target 和 .data: CanvasUI不污染其内容(既只读), 所以可以重复利用;
	一旦初始化完UI后(.initUI()) 修改.data属性对控件运行没任何影响;
	如果想修改 Euler 控件的 range.step 点input框输入: step: 0.01; (两边或冒号两边可以有空格)

支持的类型: 
	string	(文本控件)
	color	(颜色控件)
	number	(数值控件)
	boolean	(复选框控件)
	button	(按钮控件)
	object	(Vector2, Vector3, Euler, Color, RGBColor, CanvasImageData), //暂不支持: Vector4, Box

	//以下控件其属性值可以是任意类型
	select	(单选控件, 定义.selectList 显示声明)
	file	(导入控件, .type = json, image 显示声明)

	//特殊
	line	(分割线, .type = 'line'; .value = valueUrl|Array[valueUrl])

parameter(target, data, parentElem, option)
	target: Object;	//
	data: Array[
		{
			//必须:
			valueUrl: string, //路径,忽略所有的空格;
			例(.链接对象; []链接数组; 不可以混淆): 
			target = {name: 'name', arr:[10], obj: null}; 
			data = [
				{valueUrl: '.name'},
				{valueUrl: '.arr[0]'},
				{valueUrl: '.obj.name'} //此valueUrl视为 undefined (既忽略此条)
			]
			
			//可选:
			type: String; //可能的值: line, image, json, select
			title: String; //标题
			explain: String; //详细说明
			update: boolean //this.update() 是否可以更新此控件 (注意优先级高于 this.globalUpdate)
			disable: boolean //启用或禁用控件(可以通过.onChange 的参数.disable属性随时调整此控件的启用和禁用)
			onChange: Function(Object{ //控件使属性值改变时触发
				data:		Object,
				scope: 		CanvasAnimateUI,			//
				update: 	Function|Array[Function], 	//使此控件主动读一次value值,但不更新视图;（配合.redraw 把value传递至控件）
				redraw: 	Function,					//只绘制此控件; obj.target.value = 123; obj.update(); obj.redraw();
				disable: 	Boolean,					//启用或禁用此控件
				target: 	Object{value},				//target.object: 是valueUrl的上一层引用, 如果只有一层则等于 CanvasAnimateUI.target
				
			}), 

			range: object{min, max, step: Number}, //数字控件的范围 默认 this.defiendRange
			selectList: Array[Object{name:String, value:任意值}], //显示指定为select 或 type = select;
			value: valueUrl || Array[valueUrl], //type 为 line 时才有效; (只要其中某一个 valueUrl 指向的值不等于undefined 则渲染此line; 如果全都等于undefined 或 紧挨的上层也是线 将忽略此line)

		}
	]
	parentElem: DomElement;	//父容器 默认null
	option = {
		width, height,			//可视宽高
		eachHeight,				//每项的高 默认 30
		margin, 				//边距 默认 4
		titleColor, conColor,	//颜色 默认#000
		fontSize, 				//字体大小 默认 12 (建议不超过 .eachHeight)
		globalUpdate, 			// 默认 false
		onChanges,				// 默认 null
		defiendRange,			//默认 {min: -999999, max: 999999, step: 1};
		numberCursorSize		//数字控件的游标大小比例 值 0 - 1 之间; 默认 0.5
	}

attribute:
	target: Object; 			//默认null
	data: Array; 				//默认null
	onChanges: Function(Object); //默认null
	defiendRange: Object; 		//默认{min: -999999, max: 999999, step: 1};
	parent: DomElement;			//默认 body
	globalUpdate: Boolean;		//默认false; 如果为true则创建的所有控件都可以在.update() 里面更新; update:false的控件除外

method:
	style(style: String): this;			//添加css样式 (width, height, padding 属性会被覆盖, 可以通过构造器的参数设置这些值)
	pos(left, top: Number): this;		//设置位置(前提设定了css定位)
	render(parentElem): this;			//添加到dom树
	initUI(target, data): this;			//初始化控件
	update(redraw: Bool): undefined; 	//更新所有已定义为更新(data.update = true)的控件
	getView(data): Object; 				//根据所给的data获取 可操控的对象(假设 this.update() 可以更新此data代表的控件); 返回的对象恒等于 .onChange 的参数
	getData(valueUrl): Object; 			//获取data
	
demo:

	const splitLineOfNumber = {type: 'line', value: [".num", ".vector2", '.vector3']},

	selectList = [
		{name: "ZeroZeroZeroZeroZero", value: 0},
		{name: "OneOneOneOneOne", value: 1},
		{name: "TwoTwoTwoTwoTwo", value: 2},
		{name: "ThreeThreeThreeThreeThree", value: 3},
	],

	target = {
		str: "字符串String",
		checkbox: true,
		func: v=>console.log(v),
		select: 1,
		image: null,

		colorHEX: " # f0 0f0 f",
		colorRGB: "rgba(11, 22, 255, 1)",
		color: "  b l u e ",
		colorRGB: new RGBColor(),
		colorTHREE: new THREE.Color(),

		num: 0,
		vector2: new THREE.Vector2(30, 70),
		vector3: new THREE.Vector3(0, 30, 70),

	},

	data = [
		{
			title: "文本",
			valueUrl: ".str",
		},

		{
			title: "函数",
			valueUrl: ".func",
		},

		{
			title: "颜色",
			valueUrl: ".color",
		},

		{
			title: "复选框",
			valueUrl: ".checkbox",
		},

		{
			title: "单选",
			valueUrl: ".select",
			selectList: selectList,
		},

		//分割线 开始
		splitLineOfNumber,
		{
			title: "数字",
			explain: '游标的范围可在range范围内调整',
			valueUrl: ".num",
			range: {min: -10, max: 10, step: 0.1},
			update: true,
			onChange: v => console.log(v),
		},

		{
			title: "坐标2",
			valueUrl: ".vector2",
		},
		splitLineOfNumber,
		//分割线 结束

		{
			title: "图片",
			valueUrl: ".image",
			type: "image",
		},

	],

	cau = new CanvasAnimateUI(target, data, null, {
		width: 300, 
		height: 210,	//可视宽高
		eachHeight: 30,	//每项的高
		fontSize: 12, 	//字体大小
		defiendRange: {min: 0, max: 100, step: 1},
	})

	.style(`
		z-index: 9999;
		position: absolute;
		left: 200px;
		top: 190px;
		background: #fff;
	`)

	.initUI()
	.render();

	//test
	new Timer(()=>{
		const obj = cau.getView(cau.getData('.num'));
		obj.disable = true;
		obj.target.value = 0.5;
		obj.update();
		obj.redraw();
		console.log(obj);
	}, 5000).start();

*/
class CanvasAnimateUI extends CanvasAnimateRender{

	#i = 0;
	#h = 0;
	#isLine = false;

	get width(){
		return this.box.w;
	}

	get height(){
		return this.box.h;//return this.domElement.height;
	}

	get clientWidth(){
		return this.box.w;
	}

	get clientHeight(){
		return this._ch;
	}

	static emptyCAC = new CanvasAnimateCustom();
	static emptyTimerA = new Timer(null, 500, Infinity, false);
	static emptyFunc(){}
	static stopTimers(){
		CanvasAnimateUI.emptyTimerA.stop();
		CanvasAnimateUI.emptyTimerA.speed = 500;
	}

	constructor(target = null, data = null, parentElem = null, option = {}){
		super(option);
		
		this.target = target;
		this.data = data;
		this.globalUpdate = typeof option.globalUpdate === "boolean" ? option.globalUpdate : false;
		this.onChanges = option.onChanges || null;
		this.defiendRange = option.defiendRange || {min: -999999, max: 999999, step: 1};
		//this.readValueUrlType = option.readValueUrlType || "";
		
		this._margin = option.margin || 4;
		this._height = option.eachHeight || 30;
		this._titleColor = option.titleColor || "#000";
		this._conColor = option.conColor || "#000";
		this._titleWidth = this.width * 0.25;
		this._conWidth = this.width * 0.75;
		this._fontSIze = option.fontSize || 12;
		this._stringMaxCount = Math.floor(this._conWidth / this._fontSIze) * 2;
		this._funcTitleOut = ()=>this.domElement.title = "";
		this._numberInputWidth = 0;
		this._ch = this.box.h;
		
		//this._lines = [];
		this._menuViews = [];
		this._loopData = [];
		this._loopObject = [];
		this._globalCA = new CanvasAnimate();

		this.cae = new CanvasAnimateEvent(this);
		this.imageViewer = new ImageViewer({width: this.width, height: this.width, className: 'shadow-convex'});
		this.colorTestView = new ColorTestViewer({width: this._conWidth, className: 'shadow-convex'});
		this.parent = this._getParent();
		this._input = this._getInput();
		this._inputFunc = null;
		
		this._initImages(option.numberCursorSize);

		if(parentElem !== null) this.render(parentElem);
		
	}

	exit(){
		this.cae.disposeEvent(); //event
		for(let i = 0, c = this._menuViews.length; i < c; i++) this._menuViews[i].exit(); //this._menuViews
		this.imageViewer.exit(); //this.imageViewer
		this.colorTestView.exit(); //this.colorTestView
		if(this._input.parentElement) this._input.parentElement.removeChild(this._input); //this._input
		if(this.parent.parentElement) this.parent.parentElement.removeChild(this.parent); //this.parent

	}

	render(parentElem){
		if(!parentElem) parentElem = document.body;
		parentElem.appendChild(this.parent);
		super.updateCanvas();

		this.imageViewer.domElement.style = `
			background-color: rgb(127,127,127);
			border-radius: 4px;
			z-index: 99999;
			display: none;
			position: absolute;
		`;

		this.colorTestView.domElement.style = `
			background-color: #fff;
			border-radius: 4px;
			z-index: 99999;
			display: none;
			position: absolute;
		`;

		this.imageViewer.render();
		this.colorTestView.render();
		document.body.appendChild(this._input);

		return this;

	}

	initUI(target, data){
		this.imageViewer.domElement.style.display = 
		this.colorTestView.domElement.style.display = 
		this._input.style.display = "none";

		for(let i = 0, c = this._menuViews.length; i < c; i++) this._menuViews[i].exit();

		this.cae.disposeEvent();
		this.cae._eventList = {};
		this.#isLine = false;
		this.#h = this.#i = 
		this._menuViews.length = 
		this.list.length = 
		//this._lines.length = 
		this._loopData.length = 
		this._loopObject.length = 0;
		
		if(target && this.target !== target) this.target = target;
		if(data && this.data !== data) this.data = data;
		if(!this.target || !this.data) return this;
		this.updateCanvas();

		//create view
		for(let k = 0, len = this.data.length, data, y; k < len; k++){
			data = this.data[k]; 
			y = this._height * this.#i + this.#i * this._margin;
			if(this._initUI(data, y) !== true) continue;
			this.#h += this._height;
			this.#i++;
			this.#isLine = data.type === 'line';
			//nextMake = this._initMake(data, y, nextMake);

			/* //this._lines
			c = this._lines.length;
			for(i = 0; i < c; i++){
				ca = this._lines[i];
				k = ca._content.indexOf(data.valueUrl);
				if(k !== -1) ca._content[k+1] = true;
			} */

		}
		
		/* //this._lines 是否绘制
		for(let i = 0, c = this._lines.length, k, len, ca = null; i < c; i++){
			ca = this._lines[i];

			len = ca._content.length;
			for(k = 0; k < len; k += 2){
				if(ca._content[k+1] === true){
					ca = null;
					break;
				}
			}
			
			if(ca !== null){
				i = this.list.indexOf(ca);
				this.list.splice(i, 1);
				len = this.list.length;
				for(k = i; k < len; k++) this.list[k].box.y -= this._height;
			}

		} */

		//.domElement size
		var _h = this.#h + this.#i * this._margin;
		this.initList().size(this.clientWidth, _h < this.clientHeight ? this.clientHeight - this._margin*2 : _h).draw();

		//._globalCA event
		this._globalCA.box.set(0, 0, this.width, this.height);
		this.cae.add(this._globalCA, "down", ()=>{
			this._hiddenImageViewer();
			this._hiddenColorTestView();
		});
		this.cae.add(this._globalCA, "up", CanvasAnimateUI.stopTimers);
		
		return this;
	}

	update(redraw){
		if(this.parent.offsetWidth === 0) return;

		const c = this._loopObject.length;
		for(let i = 0, v; i < c; i++){
			v = this._loopObject[i];
			if(typeof v.update === "function") v.update();
			else if(Array.isArray(v.update) === true){
				for(let k = 0, len = v.update.length; k < len; k++) v.update[k]();
			}
		}

		if(redraw !== false) this.redraw();

	}

	style(style = ''){
		style += `
			width: ${this.clientWidth}px;
			height: ${this.clientHeight}px;
			padding: ${this._margin}px;
			overflow: hidden auto;
		`;

		this.parent.style = style;
		super.updateCanvas();
		
		return this;
	}

	pos(left, top){
		this.parent.style.left = left+"px";
		this.parent.style.top = top+"px";
		super.updateCanvas();
		return this;
	}

	getView(data){
		const i = this._loopData.indexOf(data);
		if(i !== -1) return this._loopObject[i];
		
	}

	getData(valueUrl){
		const len = this.data.length;
		for(let k = 0; k < len; k++){
			if(this.data[k].valueUrl === valueUrl) return this.data[k];
		}

	}


	//以下方法限内部使用
	_redrawTarget(y){ //只重绘目标(仅一列)
		CanvasAnimateUI.emptyCAC.box.set(0, y, this.width, this._height);
		this.drawTarget(CanvasAnimateUI.emptyCAC);

	}

	_bindHover(cai, y = 0, title = "", out = 0, over = 1){
		this.cae.add(cai, "out", ()=>{
			if(title !== "") this.domElement.title = "";
			this.domElement.style.cursor = "";
			cai.set(out);
			this._redrawTarget(y);
		});

		this.cae.add(cai, "over", ()=>{
			if(title !== "") this.domElement.title = title;
			this.domElement.style.cursor = "pointer";
			cai.set(over);
			this._redrawTarget(y);
		});

		cai.set(out);
		return cai;
	}

	_initMake(data, y, nextMake){

		if(typeof data.make === "object"){
			if(nextMake === false) this.list.push(new CanvasAnimate().setImage(this.img_line).pos(0, y - this.img_line.height/2));

			var r = false;
			if(Array.isArray(data.make) === true){
				const len = data.make.length;
				for(let k = 0; k < len; k++){
					y = this._height * this.#i + this.#i * this._margin;
					if(this._initUI(data.make[k], y) !== true) continue;
					if(r !== true) r = true;
					this.#h += this._height;
					this.#i++;
					
				}
				
			}

			else{
				y = this._height * this.#i + this.#i * this._margin;
				r = this._initUI(data.make, y);
				if(r === true){
					this.#h += this._height;
					this.#i++;
				}
			}

			if(r === true) this.list.push(new CanvasAnimate().setImage(this.img_line).pos(0, y + this._height - this.img_line.height/2));

			return r;
		}

		return false;
	}

	_initImages(numberCursorSize = 0.5){
		if(numberCursorSize > 1) numberCursorSize = 1;

		const cac =  CanvasAnimateUI.emptyCAC, mw = this._titleWidth + this._conWidth, f_2 = this._fontSIze / 2, 
		m_2 = this._margin/2, m2 = this._margin*2, _h8 = this._height*0.8, mar = (this._height -  this._fontSIze) / 2,
		gradient_line = cac.linearGradient(0, this._height, mw, this._height);

		//禁用背景图片
		this.img_dis = cac.size(mw, this._height).rect().fill("rgba(0,0,0,0.4)").shear();

		//解释说明图片
		this.img_explainA = cac.size(f_2 + m_2 * 2, f_2 + m_2 * 2).text("?", "#000", f_2 + m_2, "center", "center").computeCircle().arc(cac.circle).stroke("#000").shear();
		this.img_explainB = cac.clear().text("?", "#0000ff", f_2 + m_2, "center", "center").stroke("#0000ff").shear();

		//make 分割线图片
		cac.gradientColorSymme(gradient_line, ["rgba(0,0,0,0)", "rgba(0,0,0,0.5)"]);
		this.img_line = cac.size(mw, this._height).line(1, this._height/2, mw - 1, this._height/2).stroke(gradient_line, 1).shear();

		//冒号图片
		this.img_colon = cac.size(m2, this._height).rect().text(":", "", this._fontSIze, "center", "center").shear();

		//复选框图片
		this.img_checkboxA = cac.size(this._fontSIze + this._margin, this._fontSIze + this._margin).rect().fill("#fff").stroke(this._conColor, 1).shear();
		this.img_checkboxB = cac.text("✔", "#0000ff", this._fontSIze, "center", "center").shear();
		this.img_checkboxC = cac.clear().stroke("#0000ff", 1).shear();

		//颜色控件图片
		this.img_colorBG = cac.size(this._height, this._height).rect().drawTransparentBG().shear();
		this.img_colorA = cac.clear().stroke(this._conColor).shear();
		this.img_colorB = cac.clear().stroke("#0000ff").shear();

		//按钮图片
		this.img_buttonEditA = cac.clear().text("▤", "#000000", _h8, "center", "center").shear();
		this.img_buttonEditB = cac.clear().text("▤", "#0000ff", _h8, "center", "center").shear();

		cac.rotate(Math.PI/2);
		this.img_buttonEditC = cac.clear().text(">", "#000000", _h8, "center", "center").shear();
		this.img_buttonEditD = cac.clear().text(">", "#0000ff", _h8, "center", "center").shear();
		cac.unRotate(true);

		this.img_buttonResetA = cac.size(this._height, this._height).text("↻", "#000000", this._fontSIze, "center", "center").shear();
		this.img_buttonResetB = cac.clear().text("↻", "#0000ff", this._fontSIze, "center", "center").shear();

		cac.box.w = 0;
		cac.text("Button", "#000", this._fontSIze, "center", "center");
		cac.size(cac.box.w+m2, this._fontSIze+m2).rect().shadow("", 1, 1, 1);
		this.img_buttonA = cac.clear().shadow("#666").fill("#eee").shadow().text("Button", "#000", this._fontSIze, "center", "center").shear();
		this.img_buttonB = cac.clear().shadow("#666").fill("#fff").shadow().text("Button", "#0000ff", this._fontSIze, "center", "center").shear();
		this.img_buttonC = cac.clear().shadow("#666", 0, -1, -1).fill("#fff").shadow().text("Button", "#0000ff", this._fontSIze, "center", "center").shear();

		//数字控件图片
		this.img_numButSubA = cac.size(f_2, f_2).path([f_2 / 2, 0, f_2, f_2, 0, f_2], true).fill("#000").shear();
		this.img_numButSubB = cac.clear().fill("blue").shear();

		this.img_numButAddA = cac.clear().path([f_2 / 2, f_2, f_2, 0, 0, 0], true).fill("#000").shear();
		this.img_numButAddB = cac.clear().fill("blue").shear();

		cac.box.w = 0;
		this.img_numButSignA = cac.size(mar*numberCursorSize, mar*numberCursorSize).computeCircle().arc(cac.circle).fill("#000").shear();
		this.img_numButSignB = cac.clear().arc(cac.circle).fill("blue").shear();

		this._numberInputWidth = (this._conWidth - m2 - this._height) / 3 - f_2;
		this.img_numBoxA = cac.size(this._numberInputWidth, this._fontSIze+2).rect().shadow("#666", 1, 1, 1).stroke("#eee").shear();
		this.img_numBoxB = cac.clear().shadow().stroke("blue", 1).shear();

		cac.size(this._height, this._fontSIze).shadow("#666", 1, 1, 1).rect();
		this.img_buttonStepA = cac.stroke("#eee", 1).shear();
		this.img_buttonStepB = cac.clear().shadow().stroke("blue", 1).shear();

		//进度条图片
		this.img_progress = cac.size(this._conWidth - m2 - this._height, 2).line(0, 1, this._conWidth, 1).stroke("blue", 2).shear();

	}

	_isDrawByData(data){
		const v = this._getValueByUrl(data.valueUrl);

		if(v === undefined) return;
		
		switch(data.type){
			case "image":
			return true;

			case "select":
			return true;

			case "json":
			return true;
		}

		if(Array.isArray(data.selectList) === true) return true;
		
		const ty = typeof v;
		switch(ty){
			case "object":
			if(v === null || (v.isVector2 !== true && v.isVector3 !== true && v.isEuler !== true && v.isColor !== true && v.isRGBColor !== true && this.isCanvasImage(v) !== true)) return;
			break;

			case "string":
			break;

			case "number":
			break;

			case "boolean":
			break;
			
			case "function":
			break;

			default: return;
		}

		return true;
	}

	_initUI(data, y){

		if(data.type === 'line'){
			if(this.#isLine === true) return;
			return this.createLine(data, y);
		}

		const v = this._getValueByUrl(data.valueUrl);

		if(v === undefined) return;
		
		switch(data.type){
			case "image":
			this.createFileImage(data, y);
			return true;

			case "select":
			this.createSelect(data, v, y);
			return true;

			case "json":
			this.createFileJSON(data, y);
			return;

		}

		if(Array.isArray(data.selectList) === true){
			this.createSelect(data, v, y);
			return true;
		}
		
		const ty = typeof v;
	
		switch(ty){
			case "object":
			if(v === null) return;
			if(v.isVector2 === true) this.createNumbers(data, "Vector2", y);
			else if(v.isVector3 === true) this.createNumbers(data, "Vector3", y);
			else if(v.isEuler === true) this.createNumbers(data, "Euler", y);
			else if(v.isColor === true || v.isRGBColor === true) this.createColor(data, v, y);
			else if(this.isCanvasImage(v) === true) this.createFileImage(data, y);
			else return;
			break;

			case "string":
			const _v = this.colorTestView.getColor(v);
			if(_v !== "") this.createColor(data, _v, y);
			else this.createText(data, v, y);
			break;

			case "number":
			this.createNumbers(data, "number", y);
			break;

			case "boolean":
			this.createCheckbox(data, v, y);
			break;
			
			case "function":
			this.createFunc(data, y);
			break;

			default: return;
		}

		return true;
	}

	_string(str){
		if(str.length > this._stringMaxCount) return str.substr(0, this._stringMaxCount);
		return str;
	}

	_number(num, range){
		if(num < range.min) num = range.min;
		else if(num > range.max) num = range.max;
		
		return num;
	}

	_numToStr(num){
		return this._string(String(Math.floor(num * 1000) / 1000));
	}

	_getValueByUrl(valueUrl){
		try{

			return eval("this.target" + valueUrl);
			
		}

		catch(e){

			return;

		}

	}

	_getEventParam(data, y, target, disableCA){
		disableCA.visible = typeof data.disable === "boolean" ? data.disable : false;
		this.cae.add(disableCA, "click", CanvasAnimateUI.emptyFunc);
		this.cae.add(disableCA, "down", CanvasAnimateUI.emptyFunc);
		
		const result = {
			target: target,
			data: data,
			scope: this,
			redraw: ()=>this._redrawTarget(y),
			get disable(){
				return disableCA.visible;
			},
			set disable(v){
				if(typeof v === "boolean") disableCA.visible = v;

			},

		}

		if(data.update === true || (this.globalUpdate === true && data.update !== false)){
			this._loopData.push(data);
			this._loopObject.push(result);
		}

		return result;
	}

	_getParent(){
		const elem = document.createElement("div");//全局 parent
		//elem.className = "scroll-block-y shadow-convex";
		
		elem.style = `
			width: ${this.clientWidth}px;
			height: ${this.clientHeight}px;
			padding: ${this._margin}px;
			overflow: hidden auto;
		`;
		
		elem.appendChild(this.domElement);
		elem.onscroll = () => this.updateCanvas();

		return elem;
	}

	_getInput(){
		const elem = document.createElement("textarea");
		elem.style = `
			width: ${this._conWidth*0.9}px;
			height: ${this._conWidth*0.45}px;
			position: absolute;
			left: 0px;
			top: 0px;
			display: none;
			z-index: 99999;
			font-size:${this._fontSIze}px;
			padding: 2px;
		`;

		elem.onchange = e => this._hiddenInput(e.target.value);
		elem.onblur = () => elem.style.display = "none";
		//this.parent.appendChild(elem);
		
		return elem;
	}

	_getSelectIndex(list, value){
		for(let k = 0, len = list.length; k < len; k++){
			if(list[k].value === value) return k;
		}
		return -1;
	}

	_getValueUrl(valueUrl){
		var urls = [], str = "", tar = this.target;

		for(let k = 0, v, len = valueUrl.length; k < len; k++){
			v = valueUrl[k];
			if(v === " ") continue;
			
			if(v === '.' || v === '[' || v === ']'){
				if(str !== ""){
					urls.push(str);
					str = "";
				}
				
			}

			else str += v;

		}

		if(str !== "") urls.push(str);
		
		if(urls.length > 1){
			let _len = urls.length - 1;
			for(let k = 0; k < _len; k++) tar = tar[urls[k]];
			str = urls[_len];
		}

		else str = urls[0];
		
		urls = undefined;
		
		return {
			object: tar,
			name: str,
			get value(){
				return this.object[this.name];
			},
			set value(v){
				this.object[this.name] = v;
			},

		}
		
	}

	_showInput(y, func, value){
		this._input.style.display = "block";
		const rect = this._input.getBoundingClientRect();
		
		y += this._height+this.domElementRect.y;
		if(y + rect.height > window.innerHeight) y -= this._height + rect.height;
		this._input.style.top = y + "px";
		
		var x = this.domElementRect.x + this._titleWidth + this._conWidth - rect.width;
		if(x + rect.width > window.innerWidth) x -= x + rect.width - window.innerWidth + this._margin;
		this._input.style.left = x + "px";

		this._inputFunc = func;
		this._input.value = value;
		this._input.select();

	}

	_showColorTestView(y, func, value){
		this.colorTestView.onchange = func;
		this.colorTestView.setValueString(value).update(true);
		this.colorTestView.domElement.style.display = "block";

		y += this.domElementRect.y - this.colorTestView.box.h;
		if(y < 0) y += this.colorTestView.box.h + this._height;

		var x = this.domElementRect.x + this._titleWidth + this._conWidth - this.colorTestView.box.w;
		if(x + this.colorTestView.box.w > window.innerWidth) x -= x + this.colorTestView.box.w - window.innerWidth + this._margin;

		this.colorTestView.pos(x, y);
		
	}

	_showImageViewer(y, image){
		this.imageViewer.setImage(image)
		.setViewportScale()
		.center()
		.drawImage()
		.redraw();
		this.imageViewer.domElement.style.display = "block";

		y += this.domElementRect.y - this.imageViewer.box.h;
		if(y < 0) y += this.imageViewer.box.h + this._height;

		var x = this.domElementRect.x;
		if(x + this.imageViewer.box.w > window.innerWidth) x -= x + this.imageViewer.box.w - window.innerWidth + this._margin;
		
		this.imageViewer.pos(x, y);

	}

	_hiddenInput(value){
		this._input.style.display = "none";
		if(this._inputFunc !== null){
			this._inputFunc(value);
			
		}
	}

	_hiddenColorTestView(){
		if(this.colorTestView.onchange !== null){
			this.colorTestView.onchange = null;
			this.colorTestView.domElement.style.display = "none";
		}
	}

	_hiddenImageViewer(){
		this.imageViewer.setImage().clear();
		this.imageViewer.domElement.style.display = "none";

	}

	_onChanges(data, param){
		if(typeof data.onChange === "function") data.onChange(param);
		//else{
		//	if(type === "func") param.target.value.call(param.target.object, param); //eval('this.target'+data.valueUrl+'(param)'); //param.target.value(param);

		//}

		if(this.onChanges !== null) this.onChanges(param);
		
	}

	_createMenuView(list){
		MenuView.reset();
		const menuView = new MenuView(list);
		menuView.view.domElement.className = "shadow-convex";
		menuView.view.domElement.style.zIndex = "99999";
		this._menuViews.push(menuView);
		return menuView;
	}

	_cretaeTitle(textTitle, textExplain, y){ //标题
		if(typeof textTitle === "string"){
			//data.title
			const title = new CanvasAnimateCustom().size(this._titleWidth, this._height).text(textTitle, this._titleColor, this._fontSIze, 0, "center").pos(0, y);
			this.cae.add(title, "out", this._funcTitleOut);
			this.cae.add(title, "over", ()=>this.domElement.title = textTitle);
			this.list.push(title);

			//data.explain
			if(typeof textExplain === "string"){
				this.list.push(this._bindHover(new CanvasAnimateImages([this.img_explainA, this.img_explainB]), y, textExplain).pos(title.box.maxX() - this.img_explainA.width - 1, title.box.y + 1));
				
			}

			return title.box.maxX();
		}
		
		return this._titleWidth;
	}

	_createNumber(data, progress, param, x, y, target, name){
		var v;
		const bor = this._bindHover(new CanvasAnimateImages([this.img_numBoxA, this.img_numBoxB]), y).pos(x, y + (this._height - this.img_numBoxA.height)/2),
		con = new CanvasAnimateCustom().size(this._numberInputWidth, this._height).pos(x, y),
		but_sub = this._bindHover(new CanvasAnimateImages([this.img_numButSubA, this.img_numButSubB]), y).pos(bor.box.maxX(), y + (this._height - this.img_numButSubA.height * 2) / 2 - 1),
		but_add = this._bindHover(new CanvasAnimateImages([this.img_numButAddA, this.img_numButAddB]), y).pos(but_sub.box.x, but_sub.box.maxY() + 1),
		but_sign = new CanvasAnimateImages([this.img_numButSignA, this.img_numButSignB]).pos(this._numberInputWidth / 2 + bor.box.x - this.img_numButSignA.width/2, bor.box.y - this.img_numButSignA.height),
		
		setValue = (value, isUpdate) => {
			value = this._number(value, param);
			if(v !== value){
				target[name] = v = value;
				con.clear().text(this._numToStr(v), this._conColor, this._fontSIze, 2, "center");
				if(but_sign.i === 1) progress._updateCursor(v);

				if(isUpdate !== false){
					this._onChanges(data, param);
					param.redraw();
				}
				
				return true;
			}

		},

		toValue = ()=>{
			if(v !== target[name]){
				v = this._number(target[name], param);
				con.clear().text(this._numToStr(v), this._conColor, this._fontSIze, 2, "center");
				if(typeof progress._updateCursor === "function") progress._updateCursor(v);
			}
			
		},
		
		onInputHidden = value => {
			value = parseFloat(value);
			if(isNaN(value) === true) return;
			setValue(value);
			
		}
		
		//event
		this.cae.add(bor, "click", () => this._showInput(y, onInputHidden, v));
		this.cae.add(bor, "out", this._funcTitleOut);
		this.cae.add(bor, "over", ()=>this.domElement.title = v);
		this.cae.add(but_sign, "click", ()=>{
			but_sign.next();
			if(but_sign.i === 0) progress._updateCursorAtSign();
			else progress._updateCursor(v);
			param.redraw();
			
		});
		//this.cae.add(but_sign, "over", ()=>{
		//	progress._updateCursor(v);
		//	param.redraw();
		//});

		this.cae.add(but_sub, "up", CanvasAnimateUI.stopTimers);
		this.cae.add(but_add, "up", CanvasAnimateUI.stopTimers);
		const _setValueSub = ()=>{
			CanvasAnimateUI.emptyTimerA.speed = 150;
			setValue(v - (param.type !== 'Euler' ? param.step : param.__step));
		},
		_setValueAdd = ()=>{
			CanvasAnimateUI.emptyTimerA.speed = 150;
			setValue(v + (param.type !== 'Euler' ? param.step : param.__step));
		}
		this.cae.add(but_sub, "down", ()=>{
			_setValueSub();
			CanvasAnimateUI.emptyTimerA.start(_setValueSub, 500);
			
		});
		this.cae.add(but_add, "down", ()=>{
			_setValueAdd();
			CanvasAnimateUI.emptyTimerA.start(_setValueAdd, 500);

		});

		this.cae.add(but_sub, "out", this._funcTitleOut);
		this.cae.add(but_sub, "over", () => this.domElement.title = "min: "+param.min);

		this.cae.add(but_add, "out", this._funcTitleOut);
		this.cae.add(but_add, "over", () => this.domElement.title = "max: "+param.max);

		if(Array.isArray(param.update) === false) param.update = [];
		param.update.push(toValue);

		but_sign.set(0);
		this.list.push(con, bor, but_sub, but_add, but_sign);

		return {
			maxX: but_sub.box.maxX(),
			sign: but_sign,
			setValue: setValue,
			toValue: toValue,
		}
	}

	createLine(data, y){
		var is;

		if(typeof data.value === "string") is = this._getValueByUrl(data.value) !== undefined;

		else if(Array.isArray(data.value) === true){
			for(let k = 0, len = data.value.length; k < len; k++){
				if(this._getValueByUrl(data.value[k]) !== undefined){
					is = true;
					break;
				}
			}
		}

		if(is === true) this.list.push(new CanvasAnimate(this.img_line).pos(0, y));

		return is;
	}

	createText(data, v, y){
		const target = this._getValueUrl(data.valueUrl),
		titleWidth = this._cretaeTitle(data.title, data.explain, y),

		colon = new CanvasAnimate(this.img_colon).pos(titleWidth, y),
		con = new CanvasAnimateCustom().size(this._conWidth - colon.box.w - this._height, this._height).text(this._string(v), this._conColor, this._fontSIze, 0, "center").pos(colon.box.maxX(), y),
		but = this._bindHover(new CanvasAnimateImages([this.img_buttonEditA, this.img_buttonEditB]), y).pos(con.box.maxX(), y),
		disableCA = new CanvasAnimate(this.img_dis).pos(0, y),

		eventParam = this._getEventParam(data, y, target, disableCA),
		onInputHaidden = value => {
			target.value = v = value;
			con.clear().text(this._string(v), this._conColor, this._fontSIze, 0, "center");
			this._onChanges(data, eventParam);
			this._redrawTarget(y);
		}

		//event
		this.cae.add(con, "out", this._funcTitleOut);
		this.cae.add(con, "over", ()=>this.domElement.title = v);
		this.cae.add(but, "click", () => this._showInput(y, onInputHaidden, v));

		eventParam.update = ()=>{
			if(target.value !== v){
				v = target.value;
				con.clear().text(this._string(v), this._conColor, this._fontSIze, 0, "center");
			}
			
		}
		
		this.list.push(colon, con, but, disableCA);
		
	}

	createColor(data, v, y){
		const isObj = typeof v === "object";
		if(isObj === true) v = v.getStyle(); //兼容 class Color
		
		const target = this._getValueUrl(data.valueUrl),
		titleWidth = this._cretaeTitle(data.title, data.explain, y),
		colon = new CanvasAnimate(this.img_colon).pos(titleWidth, y),
		conA = new CanvasAnimateCustom().size(this._conWidth - colon.box.w - this._height * 2, this._height).text(v, this._conColor, this._fontSIze, 0, "center").pos(colon.box.maxX(), y),
		conBG = new CanvasAnimate(this.img_colorBG).pos(conA.box.maxX(), y),
		conB = new CanvasAnimateCustom().size(this._height, this._height).rect().shadow("#666", 2).fill(v).pos(conBG.box.x, y),
		conC = this._bindHover(new CanvasAnimateImages([this.img_colorA, this.img_colorB]), y).pos(conBG.box.x, y),
		but = this._bindHover(new CanvasAnimateImages([this.img_buttonEditA, this.img_buttonEditB]), y).pos(conB.box.maxX(), y), 
		disableCA = new CanvasAnimate(this.img_dis).pos(0, y),
		eventParam = this._getEventParam(data, y, target, disableCA),

		setValue = value => {
			value = this.colorTestView.getColor(value);
			
			if(value === "") return;
			v = value;
			if(isObj === false) target.value = v;
			else target.value.set(v);
			
			conA.clear().text(v, this._conColor, this._fontSIze, 0, "center");
			conB.clear().fill(v);
			this._onChanges(data, eventParam);
			this._redrawTarget(y);
		}

		//event
		this.cae.add(but, "click", () => this._showInput(y, setValue, v));
		this.cae.add(conC, "click", () => this._showColorTestView(y, setValue, v));
		
		this.cae.add(conA, "out", this._funcTitleOut);
		this.cae.add(conA, "over", ()=>this.domElement.title = v);
		
		eventParam.update = ()=>{
			if(target.value !== v){
				v = isObj === false ? target.value : target.value.getStyle();
				conA.clear().text(v, this._conColor, this._fontSIze, 0, "center");
				conB.clear().fill(v);
			}
			
		}

		this.list.push(colon, conA, conBG, conB, conC, but, disableCA);
	}

	createCheckbox(data, v, y){
		const target = this._getValueUrl(data.valueUrl),
		titleWidth = this._cretaeTitle(data.title, data.explain, y),
		colon = new CanvasAnimate(this.img_colon).pos(titleWidth, y),
		con = new CanvasAnimateImages([this.img_checkboxA, this.img_checkboxB]).pos(colon.box.maxX(), y + (this._height - this.img_checkboxA.height) / 2),
		con_hover = new CanvasAnimate(this.img_checkboxC).pos(con.box.x, con.box.y),
		disableCA = new CanvasAnimate(this.img_dis).pos(0, y),
		eventParam = this._getEventParam(data, y, target, disableCA);
		con.set(v === true ? 1 : 0);

		//event
		con_hover.visible = false;
		this.cae.add(con, "out", ()=>{
			this._funcTitleOut();
			con_hover.visible = false;
			this._redrawTarget(y);
		});

		this.cae.add(con, "over", ()=>{
			this.domElement.title = String(v);
			con_hover.visible = true;
			this._redrawTarget(y);
		});

		this.cae.add(con, "click", () => {
			con.next();
			v = con.i === 1 ? true : false;
			target.value = v;
			this._onChanges(data, eventParam);
			this._redrawTarget(y);
		});

		//update
		eventParam.update = ()=>{
			if(target.value !== v){
				v = target.value;
				con.set(v === true ? 1 : 0);
			}
			
		}
		
		this.list.push(colon, con, con_hover, disableCA);

	}

	createFunc(data, y){
		const titleWidth = this._cretaeTitle(data.title, data.explain, y),
		colon = new CanvasAnimate(this.img_colon).pos(titleWidth, y),
		con = new CanvasAnimate(this.img_buttonA).pos(colon.box.maxX(), y + (this._height - this.img_buttonA.height) / 2),
		con_hover = new CanvasAnimate(this.img_buttonB).pos(con.box.x, con.box.y),
		con_click = new CanvasAnimate(this.img_buttonC).pos(con.box.x, con.box.y),
		disableCA = new CanvasAnimate(this.img_dis).pos(0, y),

		target = this._getValueUrl(data.valueUrl),
		param = this._getEventParam(data, y, target, disableCA);

		con_click.visible = false;
		con_hover.visible = false;

		//event
		this.cae.add(con, "out", ()=>{
			this._funcTitleOut();
			con_hover.visible = false;
			this._redrawTarget(y);
		});

		this.cae.add(con, "over", ()=>{
			this.domElement.title = target.value.name;
			con_hover.visible = true;
			this._redrawTarget(y);
		});

		this.cae.add(con, "down", () => {
			con_hover.visible = false;
			con_click.visible = true;
			this._redrawTarget(y);
		});

		this.cae.add(con, "up", () => {
			con_click.visible = false;
			//this._onChanges(data, param, "func"); //执行回调1
			//param.target.value.call(param.target.object, param);  //执行回调2
			//eval('this.target'+data.valueUrl+'(param)'); //执行回调3
			//param.target.value(param);
			if(this.target){
				if(!data.eventFunc){
					eval('this.target'+data.valueUrl+'(param)');
					if(this.onChanges !== null) this.onChanges(param);
				}
				else this._onChanges(data, param);
			}
			this._redrawTarget(y);
		});

		param.update = CanvasAnimateUI.emptyFunc;

		this.list.push(colon, con, con_hover, con_click, disableCA);
		
	}

	createSelect(data, v, y){
		var k = this._getSelectIndex(data.selectList, v), menuParam = null;

		const target = this._getValueUrl(data.valueUrl), _list = [], list = data.selectList, 
		titleWidth = this._cretaeTitle(data.title, data.explain, y),
		colon = new CanvasAnimate(this.img_colon).pos(titleWidth, y),
		con = new CanvasAnimateCustom().size(this._conWidth - colon.box.w - this._height, this._height).text(k !== -1 ? this._string(list[k].name) : "undefined", this._conColor, this._fontSIze, 0, "center").pos(colon.box.maxX(), y),
		but = this._bindHover(new CanvasAnimateImages([this.img_buttonEditC, this.img_buttonEditD]), y).pos(con.box.maxX(), y),
		disableCA = new CanvasAnimate(this.img_dis).pos(0, y),
		eventParam = this._getEventParam(data, y, target, disableCA),

		func = value => {
			menuParam.lcon_def.set();
			menuParam.background.set();
			menuParam = value;
			menuParam.lcon_def.set(1);
			menuParam.background.set(2);

			v = list[value.key].value;
			target.value = v;
			con.clear().text(this._string(list[value.key].name), this._conColor, this._fontSIze, 0, "center");
			this._onChanges(data, eventParam);
			this._redrawTarget(y);
			value.target.visible = false;
			
		}

		for(let i = 0, len = list.length; i < len; i++) _list.push({name: list[i].name, func: func});
		this.cae.add(con, "out", this._funcTitleOut);
		this.cae.add(con, "over", ()=>this.domElement.title = v);
		
		eventParam.update = ()=>{
			if(target.value !== v){
				v = target.value;
				k = this._getSelectIndex(list, v);
				con.clear().text(k !== -1 ? this._string(list[k].name) : "undefined", this._conColor, this._fontSIze, 0, "center");
			}
			
		}

		//init menuView
		var menuView = null;
		this.cae.add(this._globalCA, "down", () => {
			if(menuView !== null && menuView.visible === true) menuView.visible = false;
		});

		this.cae.add(but, "click", () => {

			//这里减轻一下.initUI()的压力: 既在初始化时先不创建 menuView 控件;
			if(menuView === null){
				menuView = this._createMenuView(_list)
				if(k !== -1){
					menuParam = menuView.views[k];
					menuParam.lcon_def.set(1);
					menuParam.background.set(2);
					
				}
			}

			let top = y + this._height + this.domElementRect.y;
			if(top + menuView.height > window.innerHeight) top -= this._height + menuView.height;

			let left = this.domElementRect.x + this._titleWidth + this._conWidth - menuView.width;
			if(left + menuView.width > window.innerWidth) left -= left + menuView.width - window.innerWidth + this._margin;

			menuView.view.pos(left, top);
			menuView.visible = true;
			
		});


		this.list.push(colon, con, but, disableCA);
	}

	createNumber(data, y, param, progress, progressCursor){

		//param 特有属性 (min, max, step)
		param.min = (typeof data.range === "object" && typeof data.range.min === "number") ? data.range.min : this.defiendRange.min;
		param.max = (typeof data.range === "object" && typeof data.range.max === "number") ? data.range.max : this.defiendRange.max;
		var _step = (typeof data.range === "object" && typeof data.range.step === "number") ? data.range.step : this.defiendRange.step;
		if(param.type === "Euler"){
			param.__step = _step;
			_step = param.target.value.order;
		}
		Object.defineProperty(param, 'step', {
			get: () => {
				return _step;
			},

			set: v => {
				if(param.type === "Euler"){
					//如果想修改 Euler 控件的range.step: 'step: 0.01';
					let i = v.indexOf(':');
					if(i !== -1 && UTILS.removeSpaceSides(v.substr(0, i)) === 'step'){
						let step = parseFloat(v.substr(i+1));
						if(isNaN(step) === false) param.__step = step;
						
					}

					else{
						param.target.value.order = UTILS.removeSpaceSides(v).toUpperCase(); //去两边空格 并 转为大写字母
						stepVal.clear().text(param.target.value.order, this._conColor, this._fontSIze, "center", "center");
					}
					
				}

				else{
					v = parseFloat(v);
					if(isNaN(v) === true) return;
					_step = v;
					stepVal.clear().text(this._numToStr(v), this._conColor, this._fontSIze, "center", "center");
					
				}

			}

		});

		progress._min = param.min;
		progress._max = param.max;
		progress._width = progress.box.w;
		progress._updateCursor = value => {
			if(value < progress._min) value = progress._min;
			else if(value > progress._max) value = progress._max;
			progress.box.w = (value - progress._min) / (progress._max - progress._min) * progress._width;
			progressCursor.box.x = progress.box.maxX() - progressCursor.box.w/2;

		}

		const titleWidth = this._cretaeTitle(data.title, data.explain, y),
		colon = new CanvasAnimate(this.img_colon).pos(titleWidth, y),
		stepBor = this._bindHover(new CanvasAnimateImages([this.img_buttonStepA, this.img_buttonStepB]), y)
		.pos(colon.box.x + this._conWidth - this._height, y + (this._height - this.img_buttonStepA.height) / 2),
		stepVal = new CanvasAnimateCustom().size(stepBor.box.w, stepBor.box.h).pos(stepBor.box.x, stepBor.box.y),

		setStepVal = value => {
			param.step = value;
			param.redraw();
		}

		this.cae.add(stepBor, "click", () => this._showInput(y, setStepVal, param.type !== "Euler" ? param.step : param.target.value.order));

		this.list.push(colon, stepVal, stepBor);
		param.step = _step;
		
	}

	createNumbers(data, v, y){
		var isDownCursor = false;

		const disableCA = new CanvasAnimate(this.img_dis).pos(0, y),
		progress = new CanvasAnimate(this.img_progress).pos(this.img_colon.width + this._titleWidth, y + this._height - this.img_progress.height - 1),
		progressCursor = new CanvasAnimateImages([this.img_numButSignA, this.img_numButSignB]).pos(progress.box.x, progress.box.y - this.img_numButSignA.height / 2),

		//create number input
		target = this._getValueUrl(data.valueUrl), 
		param = this._getEventParam(data, y, target, disableCA),
		inputX = this._createNumber(data, progress, param, progress.box.x, y, v === "number" ? target.object : target.value, v === "number" ? target.name : "x"),
		inputY = (v === "Vector2" || v === "Vector3" || v === "Euler") ? this._createNumber(data, progress, param, inputX.maxX, y, target.value, "y") : null,
		inputZ = (v === "Vector3" || v === "Euler") ? this._createNumber(data, progress, param, inputY.maxX, y, target.value, "z") : null,

		//event
		onmove = event => {
			let is = false;
			v = (event.pageX - this.domElementRect.x - progress.box.x) / progress._width * (progress._max - progress._min) + progress._min;

			//setValue 本来就根据param.min.max限制值, 这里是根据 progress.min.max 限制值
			if(v < progress._min) v = progress._min;
			else if(v > progress._max) v = progress._max;

			if(inputX.sign.i === 1){
				if(inputX.setValue(v, false) === true && is !== true) is = true;
				
			}

			if(inputY !== null && inputY.sign.i === 1){
				if(inputY.setValue(v, false) === true && is !== true) is = true;

			}

			if(inputZ !== null && inputZ.sign.i === 1){
				if(inputZ.setValue(v, false) === true && is !== true) is = true;

			}

			if(is === true){
				this._onChanges(data, param);
				param.redraw();
			}

		},

		onup = ()=>{
			this.cae.remove(this._globalCA, "move", onmove);
			this.cae.remove(this._globalCA, "up", onup);
			this.cae.remove(progressCursor, "move", onmove);
			this.cae.remove(progressCursor, "up", onup);
			isDownCursor = false;
		};

		//bug: 划入时 点击游标会触发move事件(猜测: 可能是在down里面绑定事件带来的延迟)
		this.cae.add(progressCursor, "down", () => {
			if(param.disable === true) return;
			isDownCursor = true;
			//onmove(event);
			this.cae.add(this._globalCA, "move", onmove);
			this.cae.add(this._globalCA, "up", onup);
			this.cae.add(progressCursor, "move", onmove);
			this.cae.add(progressCursor, "up", onup);

		});

		this.cae.add(progressCursor, "out", ()=>{
			this.domElement.title = "";
			this.domElement.style.cursor = "";
			progressCursor.set(0);
			param.redraw();
		});

		this.cae.add(progressCursor, "over", ()=>{
			this.domElement.title = progress._min + " <-点进度条调整此范围-> " + progress._max;
			this.domElement.style.cursor = "pointer";
			progressCursor.set(1);
			param.redraw();
		});

		this.cae.add(progress, 'up', ()=>{
			if(isDownCursor !== false) return;
			this._showInput(y, v=>{
				let i = v.indexOf(',');
				if(i !== -1){
					let a = parseFloat(v.substr(0, i)), b = parseFloat(v.substr(i+1));
					if(isNaN(a) === false && isNaN(b) === false && a >= param.min && a < param.max && b > param.min && b <= param.max && a < b){
						progress._min = a;
						progress._max = b;
					}
					else{
						progress._min = param.min;
						progress._max = param.max;
					}

					progress._updateCursorAtSign();
					param.redraw();
				}
			}, progress._min+","+progress._max);
		});

		//param 特有属性 (type: "number" || "Vector2" || "Vector3" || "Euler")
		param.type = v;

		//create number scene
		this.createNumber(data, y, param, progress, progressCursor);

		//init
		progress._updateCursorAtSign = () => {
			if(inputZ !== null && inputZ.sign.i === 1) progress._updateCursor(target.value.z);
			else if(inputY !== null && inputY.sign.i === 1) progress._updateCursor(target.value.y);
			else if(inputX.sign.i === 1) progress._updateCursor(typeof target.value === "number" ? target.value : target.value.x);

		}
		
		progressCursor.set(0);
		inputX.sign.set(1);
		inputX.toValue(); //inputX.setValue(v === "number" ? target.value : target.value.x, false);
		if(inputY !== null) inputY.toValue(); //if(inputY !== null) inputY.setValue(target.value.y);
		if(inputZ !== null) inputZ.toValue(); //if(inputZ !== null) inputZ.setValue(target.value.z);
		this.list.push(progress, progressCursor, disableCA);
		
	}

	createFileImage(data, y){
		var imageInfo = "";
		const target = this._getValueUrl(data.valueUrl),
		titleWidth = this._cretaeTitle(data.title, data.explain, y),
		colon = new CanvasAnimate(this.img_colon).pos(titleWidth, y),
		conA = new CanvasAnimateCustom().size(this._conWidth - colon.box.w - this._height * 3, this._height).pos(colon.box.maxX(), y),
		butReset = this._bindHover(new CanvasAnimateImages([this.img_buttonResetA, this.img_buttonResetB]), y, "reset").pos(conA.box.maxX(), y),
		conBG = new CanvasAnimate(this.img_colorBG).pos(butReset.box.maxX(), y),
		conB = new CanvasAnimateCustom().size(this._height, this._height).pos(conBG.box.x, y),
		but = this._bindHover(new CanvasAnimateImages([this.img_buttonEditA, this.img_buttonEditB]), y).pos(conB.box.maxX(), y), 
		disableCA = new CanvasAnimate(this.img_dis).pos(0, y),
		eventParam = this._getEventParam(data, y, target, disableCA),
		
		setValue = value => {
			if(this.isCanvasImage(value) === true){
				let p = value.width / value.height, _w = 0, _h = 0;
				if(p < 1){
					_w = p * conB.box.w; 
					_h = conB.box.h;
				}
				else{
					_w = conB.box.w;
					_h = conB.box.w / p;
				}

				conB.clear().drawImage(value, 0, 0, value.width, value.height, (conB.box.w - _w) / 2, (conB.box.h - _h) / 2, _w, _h);

				imageInfo = value.width + " * " + value.height + " | " + this._numToStr(_w / value.width);
				conA.clear().text(imageInfo, this._conColor, this._fontSIze, 0, "center");

			}

			else{
				imageInfo = "";
				conA.clear();
				conB.clear();
				value = null;
			}
			
			if(target.value !== value){
				target.value = value;
				this._onChanges(data, eventParam);
			}

			this._redrawTarget(y);
		}

		//event
		this.cae.add(conB, "click", () => CanvasAnimateUI.downloadImage(setValue));
		this.cae.add(butReset, "click", setValue);
		this.cae.add(but, "click", () => this._showImageViewer(y, target.value));
		
		this.cae.add(conA, "out", this._funcTitleOut);
		this.cae.add(conA, "over", ()=>this.domElement.title = imageInfo);
		
		//update
		eventParam.update = ()=> setValue(target.value);

		//init
		if(this.isCanvasImage(target.value) === false && target.value !== null) target.value = null;
		setValue(target.value);
		this.list.push(colon, conA, butReset, conBG, conB, but, disableCA);
		
	}

	createFileJSON(data, y){
		console.log("CanvasAnimateUI: 暂不支持 type = json");
	}

}




/** ProgressView 进度条视图
parameter: 
	option = {
	
        bgColor: Color; //背景色
        scrollColor: Color; //滚动条颜色

        textBar: Bool; //进度条是否展示文本 默认true
        textColor: Color; //字体颜色(.textBar 为true才有效)
        textSize: Number; //字体大小(.textBar 为true才有效)

		borderSize
		borderRadius
		borderColor
	}

attribute:
method:
    set(p: Number, u: Bool): undefined; //设置进度条的进度 p: now / all, u: 是否更新视图 默认false;
	setWidth(v: Number, u: Bool): undefined; //
	exit(): undefined;

demo:

*/
class ProgressView extends CanvasAnimateRender{

    constructor(option = {}){
        super(option);
        if(option.borderSize === undefined) option.borderSize = 0;

        const width = this.domElement.width, height = this.domElement.height,
        cac = new CanvasAnimateCustom().size(width, height).rect(option.borderRadius).fill(option.bgColor),
        scroll = new CanvasAnimateCustom().size(width -  option.borderSize * 2, height - option.borderSize * 2).rect().fill(option.scrollColor).pos(option.borderSize, option.borderSize),
		border = new CanvasAnimateCustom().size(width, height).rect(option.borderRadius).stroke(option.borderColor, option.borderSize);
		
        this.list.push(cac, scroll, border);

        option.textBar = typeof option.textBar === "boolean" ? option.textBar : false;
        if(option.textBar === true){
            this._textSize = option.textSize || 12;
            this._textColor = option.textColor || "#000000";
            this._textBar = new CanvasAnimateCustom().size(width, height);
            this.list.push(this._textBar);
            
        }

        else this._textBar = null;
		
        this._scroll = scroll;
        this._width = width -  option.borderSize * 2;

        this.initList();
        this.set(0);
        
    }

    set(p, u){
        p = this._width * p;
        p = p < 1 ? 1 : p > this._width ? this._width : p;

		if(this._scroll.box.w !== p){
			this._scroll.box.w = p;
			if(this._textBar !== null){
				this._textBar.clear().text((p/this._width*100).toFixed(2) + "%", this._textColor, this._textSize, "center", "center");
			}
        	if(u === true) this.redraw();
		}
        
    }

	setWidth(v, u){
		this._scroll.box.w = v;
		if(this._textBar !== null){
			this._textBar.clear().text((v/this._width*100).toFixed(2) + "%", this._textColor, this._textSize, "center", "center");
		}
		if(u === true) this.redraw();

	}

	exit(){
		if(this.domElement.parentElement) this.domElement.parentElement.removeChild(this.domElement);
		
	}

}
