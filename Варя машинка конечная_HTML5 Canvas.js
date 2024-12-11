(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Варя машинка конечная_HTML5 Canvas_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"Варя машинка конечная_HTML5 Canvas_atlas_2", frames: [[0,0,1060,1597]]},
		{name:"Варя машинка конечная_HTML5 Canvas_atlas_3", frames: [[393,1347,98,98],[0,1347,391,188],[0,0,1201,1345]]}
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



(lib.КОЛЕСО = function() {
	this.initialize(ss["Варя машинка конечная_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.КОРПУСМАШИНЫ = function() {
	this.initialize(ss["Варя машинка конечная_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1643942840_10abrakadabrafunpfondorogadlyadetei11 = function() {
	this.initialize(ss["Варя машинка конечная_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.крыло = function() {
	this.initialize(ss["Варя машинка конечная_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.телобабочки = function() {
	this.initialize(ss["Варя машинка конечная_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.крыло();
	this.instance.setTransform(0,0,0.0329,0.0329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,39.6,44.3), null);


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
	this.instance = new lib.КОЛЕСО();
	this.instance.setTransform(0,0,1.1641,1.0767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,114.1,105.5), null);


(lib.крыло_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(19.8,22.2,1,1,0,0,0,19.8,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9171,x:19.75},0).wait(1).to({scaleX:0.8342},0).wait(1).to({scaleX:0.7513},0).wait(1).to({scaleX:0.6684,x:19.8},0).wait(1).to({scaleX:0.7039,x:19.75},0).wait(1).to({scaleX:0.7394},0).wait(1).to({scaleX:0.7749},0).wait(1).to({scaleX:0.8105},0).wait(1).to({scaleX:0.846},0).wait(1).to({scaleX:0.8815},0).wait(1).to({scaleX:0.9171},0).wait(1).to({scaleX:0.9526},0).wait(1).to({scaleX:0.9881},0).wait(1).to({scaleX:1.0237,x:19.8},0).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,0,40.5,44.3);


(lib.бабаочка = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.телобабочки();
	this.instance.setTransform(23.1,11.2,0.0234,0.0234,-5.9523);

	this.instance_1 = new lib.крыло_1();
	this.instance_1.setTransform(19.8,22.2,1,1,0,0,0,19.8,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.бабаочка, new cjs.Rectangle(0,0,51.6,48.4), null);


(lib.КОЛЕСО_ЛЕВОЕ = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol1();
	this.instance.setTransform(57.1,52.8,1,1,0,0,0,57.1,52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:57,rotation:6.6666,x:56.95},0).wait(1).to({rotation:13.3332,y:52.85},0).wait(1).to({rotation:19.9998,y:52.8},0).wait(1).to({rotation:26.6664,y:52.85},0).wait(1).to({rotation:33.3331,y:52.75},0).wait(1).to({rotation:39.9997,y:52.8},0).wait(1).to({rotation:46.6663},0).wait(1).to({rotation:53.3329,y:52.75},0).wait(1).to({rotation:59.9995},0).wait(1).to({rotation:69.9994,x:57,y:52.7},0).wait(1).to({rotation:79.9994,x:56.95,y:52.75},0).wait(1).to({rotation:89.9993,y:52.7},0).wait(1).to({rotation:99.9993,x:57},0).wait(1).to({rotation:109.9992,y:52.65},0).wait(1).to({rotation:119.9992},0).wait(1).to({rotation:129.9991},0).wait(1).to({rotation:139.9991,x:57.05},0).wait(1).to({rotation:149.999},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-24.9,155.2,155.4);


(lib.МАШИНКА = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.КОРПУСМАШИНЫ();
	this.instance.setTransform(0,0,1.1891,1.0792);

	this.instance_1 = new lib.КОЛЕСО_ЛЕВОЕ();
	this.instance_1.setTransform(346.5,183.8,1,1,0,0,0,57.1,52.8);

	this.instance_2 = new lib.КОЛЕСО_ЛЕВОЕ();
	this.instance_2.setTransform(50,131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.МАШИНКА, new cjs.Rectangle(0,0,465,236.5), null);


// stage content:
(lib.Варямашинкаконечная_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.бабаочка();
	this.instance.setTransform(262.8,106.2,1,1,0,0,0,25.8,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:25.6,x:274.15,y:107.65},0).wait(1).to({x:285.75,y:109.1},0).wait(1).to({x:297.35,y:110.55},0).wait(1).to({x:308.95,y:112.05},0).wait(1).to({x:320.55,y:113.5},0).wait(1).to({x:332.15,y:114.95},0).wait(1).to({x:343.75,y:116.45},0).wait(1).to({x:355.35,y:117.9},0).wait(1).to({x:366.95,y:119.35},0).wait(1).to({x:378.55,y:120.85},0).wait(1).to({x:390.15,y:122.3},0).wait(1).to({x:401.75,y:123.75},0).wait(1).to({x:413.35,y:125.2},0).wait(1).to({x:424.95,y:126.7},0).wait(1).to({x:436.55,y:128.15},0).wait(1).to({x:448.15,y:129.6},0).wait(1).to({x:459.75,y:131.1},0).wait(1).to({x:471.35,y:132.55},0).wait(1).to({x:482.95,y:134},0).wait(1).to({x:494.55,y:135.5},0).wait(1).to({x:506.15,y:136.95},0).wait(1).to({x:517.75,y:138.4},0).wait(1).to({x:529.35,y:139.9},0).wait(1).to({x:540.95,y:141.35},0).wait(1).to({x:552.55,y:142.8},0).wait(1).to({x:564.15,y:144.25},0).wait(1).to({x:575.75,y:145.75},0).wait(1).to({x:587.35,y:147.2},0).wait(1).to({x:598.95,y:148.65},0).wait(1).to({x:610.55,y:150.15},0).wait(1).to({x:622.15,y:151.6},0).wait(1).to({x:633.75,y:153.05},0).wait(1).to({x:645.35,y:154.55},0).wait(1).to({x:656.95,y:156},0).wait(1).to({x:668.55,y:157.45},0).wait(1).to({x:680.15,y:158.95},0).wait(1).to({x:691.75,y:160.4},0).wait(1).to({x:703.35,y:161.85},0).wait(1).to({x:714.95,y:163.3},0).wait(1).to({x:726.55,y:164.8},0).wait(1).to({x:738.15,y:166.25},0).wait(1).to({x:749.75,y:167.7},0).wait(1).to({x:761.35,y:169.2},0).wait(1).to({x:772.95,y:170.65},0).wait(1).to({x:784.55,y:172.1},0).wait(1).to({x:796.15,y:173.6},0).wait(1).to({x:807.75,y:175.05},0).wait(1).to({x:819.35,y:176.5},0).wait(1).to({x:830.95,y:178},0).wait(1));

	// Layer_7
	this.instance_1 = new lib.МАШИНКА();
	this.instance_1.setTransform(265.15,601.7,1,1,0,0,0,232.5,118.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:130.7,x:289.05,y:614.2},0).wait(1).to({x:312.95},0).wait(1).to({x:336.9},0).wait(1).to({x:360.8},0).wait(1).to({x:384.75},0).wait(1).to({x:408.65},0).wait(1).to({x:432.6},0).wait(1).to({x:456.5},0).wait(1).to({x:480.4},0).wait(1).to({x:504.35},0).wait(1).to({x:528.25},0).wait(1).to({x:552.2},0).wait(1).to({x:576.1},0).wait(1).to({x:600.05},0).wait(1).to({x:623.95},0).wait(1).to({x:647.85},0).wait(1).to({x:671.8},0).wait(1).to({x:695.7},0).wait(1).to({x:719.65},0).wait(1).to({x:743.55},0).wait(1).to({x:767.5},0).wait(1).to({x:791.4},0).wait(1).to({x:815.3},0).wait(1).to({x:839.25},0).wait(1).to({x:863.15},0).wait(1).to({x:887.1},0).wait(1).to({x:911},0).wait(1).to({x:934.95},0).wait(1).to({x:958.85},0).wait(1).to({x:982.75},0).wait(1).to({x:1006.7},0).wait(1).to({x:1030.6},0).wait(1).to({x:1054.55},0).wait(1).to({x:1078.45},0).wait(1).to({x:1102.4},0).wait(1).to({x:1126.3},0).wait(1).to({x:1150.2},0).wait(1).to({x:1174.15},0).wait(1).to({x:1198.05},0).wait(1).to({x:1222},0).wait(1).to({x:1245.9},0).wait(1).to({x:1269.85},0).wait(1).to({x:1293.75},0).wait(1).to({x:1317.65},0).wait(1).to({x:1341.6},0).wait(1).to({x:1365.5},0).wait(1).to({x:1389.45},0).wait(1).to({x:1413.35},0).wait(1).to({x:1437.3},0).wait(1));

	// Layer_6
	this.instance_2 = new lib.МАШИНКА();
	this.instance_2.setTransform(1105.25,487.05,0.6636,0.766,0,0,180,231.4,118.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:232.5,regY:130.7,scaleX:0.6595,scaleY:0.7613,x:1085.15,y:497},0).wait(1).to({scaleX:0.6554,scaleY:0.7565,x:1065.8,y:497.45},0).wait(1).to({scaleX:0.6512,scaleY:0.7518,x:1046.45,y:497.85},0).wait(1).to({scaleX:0.6471,scaleY:0.7471,x:1027.1,y:498.3},0).wait(1).to({scaleX:0.643,scaleY:0.7423,x:1007.75,y:498.7},0).wait(1).to({scaleX:0.6389,scaleY:0.7376,x:988.4,y:499.15},0).wait(1).to({scaleX:0.6348,scaleY:0.7329,x:969.05,y:499.55},0).wait(1).to({scaleX:0.6307,scaleY:0.7281,x:949.7,y:499.95},0).wait(1).to({scaleX:0.6266,scaleY:0.7234,x:930.35,y:500.4},0).wait(1).to({scaleX:0.6225,scaleY:0.7186,x:911,y:500.85},0).wait(1).to({scaleX:0.6184,scaleY:0.7139,x:891.65,y:501.25},0).wait(1).to({scaleX:0.6143,scaleY:0.7092,x:872.3,y:501.7},0).wait(1).to({scaleX:0.6102,scaleY:0.7044,x:853,y:502.05},0).wait(1).to({scaleX:0.6061,scaleY:0.6997,x:833.65,y:502.5},0).wait(1).to({scaleX:0.602,scaleY:0.695,x:814.3,y:502.95},0).wait(1).to({scaleX:0.5979,scaleY:0.6902,x:794.95,y:503.35},0).wait(1).to({scaleX:0.5938,scaleY:0.6855,x:775.6,y:503.8},0).wait(1).to({scaleX:0.5897,scaleY:0.6807,x:756.25,y:504.2},0).wait(1).to({scaleX:0.5856,scaleY:0.676,x:736.85,y:504.6},0).wait(1).to({scaleX:0.5815,scaleY:0.6713,x:717.5,y:505.05},0).wait(1).to({scaleX:0.5774,scaleY:0.6665,x:698.15,y:505.45},0).wait(1).to({scaleX:0.5733,scaleY:0.6618,x:678.8,y:505.9},0).wait(1).to({scaleX:0.5692,scaleY:0.6571,x:659.45,y:506.35},0).wait(1).to({scaleX:0.5651,scaleY:0.6523,x:640.15,y:506.75},0).wait(1).to({scaleX:0.561,scaleY:0.6476,x:620.8,y:507.15},0).wait(1).to({scaleX:0.5569,scaleY:0.6428,x:601.45,y:507.55},0).wait(1).to({scaleX:0.5528,scaleY:0.6381,x:582.1,y:508},0).wait(1).to({scaleX:0.5486,scaleY:0.6334,x:562.75,y:508.45},0).wait(1).to({scaleX:0.5445,scaleY:0.6286,x:543.4,y:508.85},0).wait(1).to({scaleX:0.5404,scaleY:0.6239,x:524.05,y:509.3},0).wait(1).to({scaleX:0.5363,scaleY:0.6192,x:504.7,y:509.65},0).wait(1).to({scaleX:0.5322,scaleY:0.6144,x:485.35,y:510.1},0).wait(1).to({scaleX:0.5281,scaleY:0.6097,x:466,y:510.55},0).wait(1).to({scaleX:0.524,scaleY:0.6049,x:446.65,y:510.95},0).wait(1).to({scaleX:0.5199,scaleY:0.6002,x:427.3,y:511.4},0).wait(1).to({scaleX:0.5158,scaleY:0.5955,x:407.95,y:511.85},0).wait(1).to({scaleX:0.5117,scaleY:0.5907,x:388.6,y:512.2},0).wait(1).to({scaleX:0.5076,scaleY:0.586,x:369.25,y:512.65},0).wait(1).to({scaleX:0.5035,scaleY:0.5813,x:349.9,y:513.05},0).wait(1).to({scaleX:0.4994,scaleY:0.5765,x:330.55,y:513.5},0).wait(1).to({scaleX:0.4953,scaleY:0.5718,x:311.2,y:513.95},0).wait(1).to({scaleX:0.4912,scaleY:0.567,x:291.85,y:514.35},0).wait(1).to({scaleX:0.4871,scaleY:0.5623,x:272.5,y:514.8},0).wait(1).to({scaleX:0.483,scaleY:0.5576,x:253.15,y:515.15},0).wait(1).to({scaleX:0.4789,scaleY:0.5528,x:233.8,y:515.6},0).wait(1).to({scaleX:0.4748,scaleY:0.5481,x:214.45,y:516.05},0).wait(1).to({scaleX:0.4707,scaleY:0.5434,x:195.1,y:516.45},0).wait(1).to({scaleX:0.4666,scaleY:0.5386,x:175.8,y:516.9},0).wait(1).to({scaleX:0.4625,scaleY:0.5339,x:156.45,y:517.35},0).wait(1));

	// КОРПУС_МАШИНЫ_png
	this.instance_3 = new lib.МАШИНКА();
	this.instance_3.setTransform(161.75,454.2,0.5019,0.5019,0,0,0,231.8,114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:232.5,regY:130.7,scaleY:0.5144,x:181.85,y:462.55},0).wait(1).to({scaleY:0.527,x:201.65,y:462.7},0).wait(1).to({scaleY:0.5395,x:221.45,y:462.9},0).wait(1).to({scaleY:0.552,x:241.25,y:463.15},0).wait(1).to({scaleY:0.5646,x:261.05,y:463.35},0).wait(1).to({scaleY:0.5771,x:280.85,y:463.55},0).wait(1).to({scaleY:0.5897,x:300.65,y:463.75},0).wait(1).to({scaleY:0.6022,x:320.4,y:463.95},0).wait(1).to({scaleY:0.6147,x:340.2,y:464.15},0).wait(1).to({scaleY:0.6273,x:360,y:464.4},0).wait(1).to({scaleY:0.6398,x:379.8,y:464.55},0).wait(1).to({scaleY:0.6523,x:399.6,y:464.75},0).wait(1).to({scaleY:0.6649,x:419.4,y:464.95},0).wait(1).to({scaleY:0.6774,x:439.2,y:465.2},0).wait(1).to({scaleY:0.6899,x:459,y:465.35},0).wait(1).to({scaleY:0.7025,x:478.75,y:465.55},0).wait(1).to({scaleY:0.715,x:498.55,y:465.8},0).wait(1).to({scaleY:0.7275,x:518.35,y:466},0).wait(1).to({scaleY:0.7401,x:538.15,y:466.2},0).wait(1).to({scaleY:0.7247,x:557.95,y:465.9},0).wait(1).to({scaleY:0.7093,x:577.75,y:465.7},0).wait(1).to({scaleY:0.694,x:597.55,y:465.45},0).wait(1).to({scaleY:0.6786,x:617.35,y:465.2},0).wait(1).to({scaleY:0.6633,x:637.1,y:464.95},0).wait(1).to({scaleY:0.6479,x:656.9,y:464.7},0).wait(1).to({scaleY:0.6325,x:676.7,y:464.4},0).wait(1).to({scaleY:0.6172,x:696.5,y:464.2},0).wait(1).to({scaleY:0.6018,x:716.3,y:463.95},0).wait(1).to({scaleY:0.5864,x:736.1,y:463.7},0).wait(1).to({scaleY:0.5711,x:755.9,y:463.45},0).wait(1).to({scaleY:0.5557,x:775.7,y:463.2},0).wait(1).to({scaleY:0.5404,x:795.5,y:462.9},0).wait(1).to({scaleY:0.525,x:815.25,y:462.7},0).wait(1).to({scaleY:0.5096,x:835.05,y:462.45},0).wait(1).to({scaleY:0.4943,x:854.85,y:462.2},0).wait(1).to({scaleY:0.4789,x:874.65,y:461.95},0).wait(1).to({scaleY:0.4636,x:894.45,y:461.7},0).wait(1).to({scaleY:0.4482,x:914.25,y:461.45},0).wait(1).to({scaleY:0.4328,x:934.05,y:461.2},0).wait(1).to({x:953.85},0).wait(1).to({x:973.6},0).wait(1).to({x:993.4},0).wait(1).to({x:1013.2},0).wait(1).to({x:1033},0).wait(1).to({x:1052.8},0).wait(1).to({x:1072.6},0).wait(1).to({x:1092.4},0).wait(1).to({x:1112.2},0).wait(1).to({x:1131.95},0).wait(1));

	// Layer_1
	this.instance_4 = new lib._1643942840_10abrakadabrafunpfondorogadlyadetei11();
	this.instance_4.setTransform(0,0,0.6687,0.6724);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1029.8,366.20000000000005);
// library properties:
lib.properties = {
	id: '8F179828E263014487740CB70C8B641E',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Варя машинка конечная_HTML5 Canvas_atlas_1.png", id:"Варя машинка конечная_HTML5 Canvas_atlas_1"},
		{src:"images/Варя машинка конечная_HTML5 Canvas_atlas_2.png", id:"Варя машинка конечная_HTML5 Canvas_atlas_2"},
		{src:"images/Варя машинка конечная_HTML5 Canvas_atlas_3.png", id:"Варя машинка конечная_HTML5 Canvas_atlas_3"}
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
an.compositions['8F179828E263014487740CB70C8B641E'] = {
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