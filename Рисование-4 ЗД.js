(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Рисование_4 ЗД_atlas_1", frames: [[569,188,158,221],[314,353,180,161],[0,0,567,351],[0,572,609,71],[0,353,312,217],[569,0,202,186]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Рисование_4 ЗД_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Рисование_4 ЗД_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Рисование_4 ЗД_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Рисование_4 ЗД_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Рисование_4 ЗД_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Рисование_4 ЗД_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.фон = function() {
	this.initialize(img.фон);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2724,1532);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006699").ss(1,1,1).p("ABUAAQAAALgZAHQgYAJgjAAQgiAAgZgJQgYgHAAgLQAAgKAYgIQAZgIAiAAQAjAAAYAIQAZAIAAAKg");
	this.shape.setTransform(26.1,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6ATQgZgIAAgLQAAgKAZgIQAYgIAiABQAjgBAYAIQAZAIAAAKQAAALgZAIQgYAHgjABQgigBgYgHg");
	this.shape_1.setTransform(26.1,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AijCkQhEhEAAhgQAAhfBEhEQBEhEBfAAQBgAABEBEQBDBEAABfQAABghDBEQhEBDhgAAQhfAAhEhDgAgdi6QgYAJAAAKQAAALAYAIQAYAIAjAAQAjAAAYgIQAYgIAAgLQAAgKgYgJQgYgHgjAAQgjAAgYAHg");
	this.shape_2.setTransform(23.15,23.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,46.3,46.3), null);


(lib.пчелка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// пчелка
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(3.95,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(0,13.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.пчелка, new cjs.Rectangle(0,0,90,110.5), null);


(lib.коровка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// корова
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,16.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(31.85,0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// тело
	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(46.05,46.6,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(39.35,199.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.коровка, new cjs.Rectangle(0,0.5,343.9,234.2), null);


(lib.мыщка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF66CC").s().p("AgsAtIgFgIQgNgPAAgWIAAAAQABgZARgSQATgTAZAAQAaAAASATQASASAAAZQAAAbgSASQgSARgaABQgZgBgTgRg");
	this.shape.setTransform(76.65,70.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjqAvIgDgDQgFgHAAgKIAAAAQAAgLAIgIQAIgIALAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgLAAgIgIgADEgHIgCgDQgGgHAAgKIAAAAQAAgLAIgIQAIgIAMAAQALAAAIAIQAIAIAAALQAAAMgIAIQgIAHgLAAQgMAAgIgHg");
	this.shape_1.setTransform(105.075,57.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AilDQQhVgCg7g8Qg9g8AAhWQAAhVA9g9QA9g9BWABIADAAIINBkIAAAAQgBAJAGAIIlkDEQgOAVgRASQg9A+hVAAIgDAAgAiXADQgRASgBAZIAAABQAAAWANAPIAFAIQATARAaABQAagBASgRQASgSAAgbQAAgagSgSQgSgSgaAAQgaAAgTASgAg5hGQgIAHAAAMIAAAAQAAAJAFAIIADACQAIAJAMAAQALAAAIgJQAIgHAAgMQAAgLgIgIQgIgJgLABQgMgBgIAJg");
	this.shape_2.setTransform(87.35,65.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(50));

	// Layer_13
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#006699").ss(1,1,1).p("AEmhQQgkAhg+A2QgoAjgfASQgGADgGADQhSAphVhCQhXhCg5gCQgkgBg7Ah");
	this.shape_3.setTransform(30.4,130.4355);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006699").s().p("AmPCpQgFgFAAgHQAAgHAFgGIgFgFID6j5IANANIjvDuIAFADQAGAGAAAHQAAAHgGAFQgFAFgHAAQgHAAgFgFgAF+iWQgEgEAAgGIABgCIkgAAIAAgLIEtAAQAFAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_4.setTransform(84.625,108.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(50));

	// Layer_12
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006699").s().p("AioC1QgIgCAAgEIAAlmIAQAAIAAFdIALgBQALAAAHADQAIADAAAEQAAAEgIACQgHADgLAAQgLAAgIgDgACGCsIgEgBIgCABIAAgCQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIAAgCIiLlCIAOgGICKE+IAKgEQALgCAIAAQAIABABAEQABAEgHAEQgGAFgLACQgJADgHAAIgDAAg");
	this.shape_5.setTransform(80.6563,144.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(50));

	// Layer_11
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006699").s().p("AiUC9Qg+hOAAhvQAAhuA+hPQA+hPBWAAQBXAAA9BPQA/BPgBBuQABBvg/BOQg9BPhXAAQhWAAg+hPg");
	this.shape_6.setTransform(77.25,107.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(50));

	// Layer_9
	this.instance = new lib.Symbol1();
	this.instance.setTransform(73.45,23.2,1,1,59.9996,0,0,23.2,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:23.1,rotation:56.8746,x:73.35,y:23.1},0).wait(1).to({rotation:53.7496,y:23.15},0).wait(1).to({rotation:50.6247,y:23.1},0).wait(1).to({rotation:47.4998,y:23.15},0).wait(1).to({rotation:44.3748,y:23.1},0).wait(1).to({rotation:41.2499,x:73.3,y:23.15},0).wait(1).to({rotation:38.125,x:73.35,y:23.1},0).wait(1).to({rotation:35},0).wait(1).to({rotation:31.8751,y:23.15},0).wait(1).to({rotation:28.7502},0).wait(1).to({rotation:25.6252,y:23.2},0).wait(1).to({rotation:22.5003,y:23.15},0).wait(1).to({rotation:19.3754},0).wait(1).to({rotation:16.2504,x:73.4},0).wait(1).to({rotation:13.1255,x:73.35},0).wait(1).to({rotation:10.0006},0).wait(1).to({rotation:6.8756,x:73.4},0).wait(1).to({rotation:3.7507,x:73.35},0).wait(1).to({rotation:0.6258},0).wait(1).to({rotation:-2.4992},0).wait(1).to({rotation:-5.6241},0).wait(1).to({rotation:-8.749},0).wait(1).to({rotation:-11.874},0).wait(1).to({rotation:-14.9989,y:23.1},0).wait(1).to({rotation:-13.1989,y:23.15},0).wait(1).to({rotation:-11.3989},0).wait(1).to({rotation:-9.5989},0).wait(1).to({rotation:-7.7989},0).wait(1).to({rotation:-5.9989,x:73.3,y:23.1},0).wait(1).to({rotation:-4.1989,x:73.35,y:23.15},0).wait(1).to({rotation:-2.3989},0).wait(1).to({rotation:-0.5989,y:23.1},0).wait(1).to({rotation:1.2011,y:23.2},0).wait(1).to({rotation:3.0011,y:23.15},0).wait(1).to({rotation:4.8011,x:73.3},0).wait(1).to({rotation:6.6011,x:73.35},0).wait(1).to({rotation:8.4012},0).wait(1).to({rotation:10.2012,y:23.2},0).wait(1).to({rotation:12.0012,y:23.15},0).wait(1).to({rotation:13.8012},0).wait(1).to({rotation:15.6012},0).wait(1).to({rotation:17.4012},0).wait(1).to({rotation:19.2012},0).wait(1).to({rotation:21.0012,x:73.3},0).wait(1).to({rotation:22.8012,x:73.35},0).wait(1).to({rotation:24.6012},0).wait(1).to({rotation:26.4012,x:73.4},0).wait(1).to({rotation:28.2012,x:73.35},0).wait(1).to({rotation:30.0012},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(33.1,44.75,1,1,0,0,0,23.2,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:23.1,regY:23.1,rotation:1.875,x:33,y:44.65},0).wait(1).to({rotation:3.75,y:44.6},0).wait(1).to({rotation:5.625},0).wait(1).to({rotation:7.4999},0).wait(1).to({rotation:9.3749},0).wait(1).to({rotation:11.2499},0).wait(1).to({rotation:13.1249},0).wait(1).to({rotation:14.9999,x:32.95},0).wait(1).to({rotation:16.8749,x:33},0).wait(1).to({rotation:18.7498,y:44.55},0).wait(1).to({rotation:20.6248,x:32.95,y:44.6},0).wait(1).to({rotation:22.4998,x:33,y:44.65},0).wait(1).to({rotation:24.3748},0).wait(1).to({rotation:26.2498,y:44.55},0).wait(1).to({rotation:28.1248,x:32.95,y:44.6},0).wait(1).to({rotation:29.9997,x:33},0).wait(1).to({rotation:31.8747},0).wait(1).to({rotation:33.7497},0).wait(1).to({rotation:35.6247,x:33.05},0).wait(1).to({rotation:37.4997},0).wait(1).to({rotation:39.3747,x:33},0).wait(1).to({rotation:41.2496},0).wait(1).to({rotation:43.1246},0).wait(1).to({rotation:44.9996,y:44.65},0).wait(1).to({rotation:48.872,x:33.05,y:44.6},0).wait(1).to({rotation:52.7444,y:44.65},0).wait(1).to({rotation:56.6168,x:33,y:44.6},0).wait(1).to({rotation:60.4893,x:33.05,y:44.65},0).wait(1).to({rotation:64.3617},0).wait(1).to({rotation:68.2341,y:44.6},0).wait(1).to({rotation:72.1065,y:44.65},0).wait(1).to({rotation:75.9789,x:33.1,y:44.6},0).wait(1).to({rotation:79.8513,x:33.05},0).wait(1).to({rotation:83.7238,x:33.1,y:44.65},0).wait(1).to({rotation:87.5962,x:33.05,y:44.6},0).wait(1).to({rotation:91.4686,y:44.65},0).wait(1).to({rotation:95.341,x:33.1},0).wait(1).to({rotation:99.2134},0).wait(1).to({rotation:103.0858,x:33.05,y:44.6},0).wait(1).to({rotation:106.9583,y:44.65},0).wait(1).to({rotation:110.8307,x:33.1},0).wait(1).to({rotation:114.7031},0).wait(1).to({rotation:118.5755},0).wait(1).to({rotation:122.4479},0).wait(1).to({rotation:126.3203},0).wait(1).to({rotation:130.1928,y:44.7},0).wait(1).to({rotation:134.0652},0).wait(1).to({rotation:137.9376,x:33.05},0).wait(1).to({rotation:141.81,x:33.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.4,129.4,171.1);


// stage content:
(lib.Рисование4ЗД = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// мыщка
	this.instance = new lib.мыщка();
	this.instance.setTransform(10.8,615.35,1,1,0,0,0,65,77.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:64.9,regY:76.5,rotation:-5.9998,x:105.25,y:603.9},0).wait(1).to({rotation:-11.9997,x:199.8,y:593.05},0).wait(1).to({rotation:-17.9995,x:294.35,y:582.2},0).wait(1).to({rotation:-23.9994,x:349.55,y:581.15},0).wait(1).to({rotation:-29.9992,x:404.75,y:580.15},0).wait(1).to({rotation:-26.666,x:460.1,y:579.05},0).wait(1).to({rotation:-23.3327,x:483.2,y:552.45},0).wait(1).to({rotation:-19.9995,x:506.35,y:525.8},0).wait(1).to({rotation:-16.6662,x:529.5,y:499.2},0).wait(1).to({rotation:-13.333,x:552.65,y:472.6},0).wait(1).to({rotation:-9.9997,x:575.8,y:446},0).wait(1).to({rotation:-6.6665,x:598.95,y:419.35},0).wait(1).to({rotation:-3.3332,x:622.1,y:392.7},0).wait(1).to({rotation:0,x:645.25,y:366.1},0).wait(1).to({rotation:22.4998,x:680.15,y:356.35},0).wait(1).to({rotation:44.9996,x:715.05,y:346.65},0).wait(1).to({rotation:36.4283,x:749.6,y:336.8},0).wait(1).to({rotation:27.8569,x:764.75,y:344.35},0).wait(1).to({rotation:19.2856,x:779.85,y:352},0).wait(1).to({rotation:10.7143,x:794.9,y:359.6},0).wait(1).to({rotation:2.143,x:810,y:367.3},0).wait(1).to({rotation:-6.4284,x:825.05,y:374.9},0).wait(1).to({rotation:-14.9997,x:840.15,y:382.6},0).wait(1).to({rotation:-12.9997,x:855.35,y:390.2},0).wait(1).to({rotation:-10.9998,x:870.5,y:397.85},0).wait(1).to({rotation:-8.9998,x:885.7,y:405.5},0).wait(1).to({rotation:-6.9999,x:900.85,y:413.15},0).wait(1).to({rotation:-4.9999,x:916.05,y:420.75},0).wait(1).to({rotation:-2.9999,x:931.25,y:428.4},0).wait(1).to({rotation:-1,x:946.5,y:436.05},0).wait(1).to({rotation:1,x:961.65,y:443.7},0).wait(1).to({rotation:2.9999,x:976.85,y:451.3},0).wait(1).to({rotation:4.9999,x:992.05,y:458.95},0).wait(1).to({rotation:6.9999,x:1007.25,y:466.6},0).wait(1).to({rotation:8.9998,x:1022.45,y:474.25},0).wait(1).to({rotation:10.9998,x:1037.6,y:481.9},0).wait(1).to({rotation:12.9997,x:1052.8,y:489.55},0).wait(1).to({rotation:14.9997,x:1068,y:497.2},0).wait(1).to({rotation:13.1247,x:1083.15,y:504.8},0).wait(1).to({rotation:11.2498,x:1098.3,y:512.45},0).wait(1).to({rotation:9.3748,x:1113.45,y:520.1},0).wait(1).to({rotation:7.4999,x:1128.55,y:527.7},0).wait(1).to({rotation:5.6249,x:1143.75,y:535.4},0).wait(1).to({rotation:3.7499,x:1158.85,y:543.05},0).wait(1).to({rotation:1.875,x:1174,y:550.6},0).wait(1).to({rotation:0,x:1189.15,y:558.3},0).wait(1).to({x:1204.35,y:565.95},0).wait(1).to({x:1219.5,y:573.6},0).wait(1).to({x:1234.7,y:581.25},0).wait(1));

	// коровка
	this.instance_1 = new lib.коровка();
	this.instance_1.setTransform(1285.05,555.1,1,1,0,0,0,171.9,117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:117.6,scaleX:1.0241,scaleY:1.0241,rotation:0.7496,x:1259.5,y:554.25},0).wait(1).to({scaleX:1.0483,scaleY:1.0483,rotation:1.4993,x:1233.95,y:553.35},0).wait(1).to({scaleX:1.0724,scaleY:1.0724,rotation:2.2489,x:1208.35,y:552.55},0).wait(1).to({scaleX:1.0966,scaleY:1.0966,rotation:2.9986,x:1182.75,y:551.8},0).wait(1).to({scaleX:1.1207,scaleY:1.1207,rotation:3.7482,x:1157.1,y:551.05},0).wait(1).to({scaleX:1.1448,scaleY:1.1448,rotation:4.4979,x:1131.45,y:550.45},0).wait(1).to({scaleX:1.169,scaleY:1.169,rotation:5.2475,x:1105.75,y:549.85},0).wait(1).to({scaleX:1.1931,scaleY:1.1931,rotation:5.9972,x:1080,y:549.35},0).wait(1).to({scaleX:1.2173,scaleY:1.2173,rotation:6.7468,x:1054.35,y:548.85},0).wait(1).to({scaleX:1.2044,scaleY:1.2044,rotation:5.7469,x:1028.55,y:548.4},0).wait(1).to({scaleX:1.1916,scaleY:1.1916,rotation:4.7469,x:1002.75,y:548.05},0).wait(1).to({scaleX:1.1787,scaleY:1.1787,rotation:3.747,x:977,y:547.75},0).wait(1).to({scaleX:1.1658,scaleY:1.1658,rotation:2.747,x:951.15,y:547.5},0).wait(1).to({scaleX:1.1529,scaleY:1.1529,rotation:1.7471,x:925.3,y:547.3},0).wait(1).to({scaleX:1.1401,scaleY:1.1401,rotation:0.7472,x:899.45,y:547.2},0).wait(1).to({scaleX:1.1272,scaleY:1.1272,rotation:-0.2528,x:873.55,y:547.1},0).wait(1).to({scaleX:1.1144,scaleY:1.1144,rotation:-1.2527,x:847.6},0).wait(1).to({scaleX:1.1015,scaleY:1.1015,rotation:-2.2527,x:821.7,y:547.15},0).wait(1).to({scaleX:1.0887,scaleY:1.0887,rotation:-3.2526,x:795.7,y:547.25},0).wait(1).to({scaleX:1.0758,scaleY:1.0758,rotation:-4.2526,x:769.7,y:547.4},0).wait(1).to({scaleX:1.0629,scaleY:1.0629,rotation:-5.2525,x:743.7,y:547.6},0).wait(1).to({scaleX:1.0501,scaleY:1.0501,rotation:-6.2524,x:717.65,y:547.9},0).wait(1).to({scaleX:1.0372,scaleY:1.0372,rotation:-7.2524,x:691.55,y:548.25},0).wait(1).to({scaleX:1.0244,scaleY:1.0244,rotation:-8.2523,x:665.45,y:548.65},0).wait(1).to({scaleX:1.0318,scaleY:1.0318,rotation:-7.5023,x:639.35,y:549.1},0).wait(1).to({scaleX:1.0393,scaleY:1.0393,rotation:-6.7523,x:613.15,y:549.6},0).wait(1).to({scaleX:1.0467,scaleY:1.0467,rotation:-6.0023,x:586.95,y:550.15},0).wait(1).to({scaleX:1.0542,scaleY:1.0542,rotation:-5.2523,x:560.75,y:550.75},0).wait(1).to({scaleX:1.0616,scaleY:1.0616,rotation:-4.5023,x:534.55,y:551.5},0).wait(1).to({scaleX:1.0691,scaleY:1.0691,rotation:-3.7523,x:508.3,y:552.2},0).wait(1).to({scaleX:1.0765,scaleY:1.0765,rotation:-3.0023,x:482,y:553},0).wait(1).to({scaleX:1.084,scaleY:1.084,rotation:-2.2523,x:455.65,y:553.85},0).wait(1).to({scaleX:1.0914,scaleY:1.0914,rotation:-1.5023,x:429.3,y:554.8},0).wait(1).to({scaleX:1.0989,scaleY:1.0989,rotation:-0.7523,x:402.95,y:555.7},0).wait(1).to({scaleX:1.1063,scaleY:1.1063,rotation:-0.0023,x:376.5,y:556.8},0).wait(1).to({scaleX:1.1138,scaleY:1.1138,rotation:0.7477,x:350.15,y:557.85},0).wait(1).to({scaleX:1.1212,scaleY:1.1212,rotation:1.4977,x:323.6,y:559},0).wait(1).to({scaleX:1.1287,scaleY:1.1287,rotation:2.2477,x:297.15,y:560.25},0).wait(1).to({scaleX:1.1361,scaleY:1.1361,rotation:2.9977,x:270.65,y:561.45},0).wait(1).to({scaleX:1.1436,scaleY:1.1436,rotation:3.7477,x:244.1,y:562.8},0).wait(1).to({scaleX:1.151,scaleY:1.151,rotation:4.4977,x:217.55,y:564.15},0).wait(1).to({scaleX:1.1585,scaleY:1.1585,rotation:5.2477,x:190.95,y:565.6},0).wait(1).to({scaleX:1.1659,scaleY:1.1659,rotation:5.9977,x:164.35,y:567.1},0).wait(1).to({scaleX:1.1734,scaleY:1.1734,rotation:6.7477,x:137.7,y:568.7},0).wait(1).to({x:111.05,y:570.3},0).wait(1).to({x:84.35,y:571.95},0).wait(1).to({x:57.6,y:573.7},0).wait(1).to({x:30.8,y:575.45},0).wait(1).to({x:4,y:577.3},0).wait(1));

	// пчелка
	this.instance_2 = new lib.пчелка();
	this.instance_2.setTransform(-33.05,323.3,1,1,0,0,0,68.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:68.5,regY:55.4,rotation:44.9994,x:214.65,y:302.3},9).to({regY:55.5,scaleX:0.9999,scaleY:0.9999,rotation:-26.2499,x:489.95,y:278.9},10).to({regX:68.7,rotation:36.2236,x:765.25,y:255.4},10).to({regX:68.8,rotation:49.9225,x:1013,y:234.25},9).to({regX:68.4,regY:55.3,scaleX:1,scaleY:1,rotation:0,x:1315.5,y:208.3},11).wait(1));

	// фон
	this.instance_3 = new lib.фон();
	this.instance_3.setTransform(0,-37,0.4815,0.4944);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(442.7,323,1014.3,414.4);
// library properties:
lib.properties = {
	id: 'A0E34F7F13E80040A88B04FDBA2F5922',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/фон1_.jpg", id:"фон"},
		{src:"images/Рисование_4 ЗД_atlas_1.png", id:"Рисование_4 ЗД_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A0E34F7F13E80040A88B04FDBA2F5922'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;