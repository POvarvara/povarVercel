(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"звук анимация 8_atlas_1", frames: [[0,0,1276,1280]]},
		{name:"звук анимация 8_atlas_2", frames: [[893,0,1024,1024],[0,0,891,1705]]},
		{name:"звук анимация 8_atlas_3", frames: [[0,0,1308,736]]}
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



(lib.ЗВЕЗДА = function() {
	this.initialize(ss["звук анимация 8_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.МАРС = function() {
	this.initialize(ss["звук анимация 8_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.РАКЕТА = function() {
	this.initialize(ss["звук анимация 8_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1674952499_bogatyrclubpzvezdnoenebodlyadeteifon58 = function() {
	this.initialize(ss["звук анимация 8_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.блеск = function() {
	this.initialize(img.блеск);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2629,2605);// helper functions:

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
	this.instance = new lib.РАКЕТА();
	this.instance.setTransform(108.4,0,0.1231,0.1231,0,-8.9604,171.0396);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,141.1,224.5), null);


// stage content:
(lib.звуканимация8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [1,48];
	// timeline functions:
	this.frame_1 = function() {
		playSound("ракета");
	}
	this.frame_48 = function() {
		playSound("блескк");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(47).call(this.frame_48).wait(35));

	// блеск
	this.instance = new lib.блеск();
	this.instance.setTransform(485,301,0.0277,0.0236);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({_off:false},0).wait(1).to({scaleX:0.0343,scaleY:0.0388,x:477,y:281},0).wait(3).to({scaleX:0.0908,scaleY:0.0899,x:402,y:215},0).wait(1).to({scaleX:0.1624,scaleY:0.1349,x:315,y:147},0).wait(7).to({scaleX:0.1919,scaleY:0.1536,x:276,y:123},0).wait(7).to({scaleX:0.1298,scaleY:0.109,x:358,y:181},0).wait(4).to({scaleX:0.1207,scaleY:0.1013,x:370,y:191},0).wait(5).to({scaleX:0.0282,scaleY:0.0514,x:492,y:256},0).wait(4));

	// ракета
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(1404.25,490.5,1.5266,1.367,-61.443,0,0,80.5,108.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:70.6,regY:112.2,scaleX:1.5095,scaleY:1.3506,rotation:0,skewX:-63.0222,skewY:-62.8719,x:1334.35,y:478.95},0).wait(1).to({scaleX:1.4923,scaleY:1.3342,skewX:-64.6017,skewY:-64.3011,x:1267.7,y:451.95},0).wait(1).to({scaleX:1.4751,scaleY:1.3178,skewX:-66.1812,skewY:-65.7303,x:1200.9,y:424.9},0).wait(1).to({scaleX:1.4579,scaleY:1.3013,skewX:-67.7607,skewY:-67.1595,x:1134.2,y:397.9},0).wait(1).to({scaleX:1.4408,scaleY:1.2849,skewX:-69.3402,skewY:-68.5887,x:1067.45,y:370.85},0).wait(1).to({scaleX:1.4236,scaleY:1.2685,skewX:-70.9197,skewY:-70.0179,x:1000.7,y:343.8},0).wait(1).to({scaleX:1.4064,scaleY:1.2521,skewX:-72.4992,skewY:-71.4472,x:933.95,y:316.7},0).wait(1).to({scaleX:1.3893,scaleY:1.2357,skewX:-74.0787,skewY:-72.8764,x:867.15,y:289.65},0).wait(1).to({scaleX:1.372,scaleY:1.2192,skewX:-75.6582,skewY:-74.3056,x:800.4,y:262.6},0).wait(1).to({scaleX:1.3549,scaleY:1.2028,skewX:-77.2377,skewY:-75.7348,x:733.55,y:235.5},0).wait(1).to({scaleX:1.3377,scaleY:1.1864,skewX:-79.1922,skewY:-77.539,x:691.05,y:211.2},0).wait(1).to({scaleX:1.3205,scaleY:1.1699,skewX:-81.1467,skewY:-79.3433,x:646.7,y:190.25},0).wait(1).to({scaleX:1.3034,scaleY:1.1535,skewX:-83.1012,skewY:-81.1475,x:600.3,y:172.35},0).wait(1).to({scaleX:1.2862,scaleY:1.1371,skewX:-85.0558,skewY:-82.9517,x:551.6,y:157.25},0).wait(1).to({scaleX:1.269,scaleY:1.1207,skewX:-87.0103,skewY:-84.756,x:500.4,y:144.9},0).wait(1).to({scaleX:1.2519,scaleY:1.1042,skewX:-88.9648,skewY:-86.5602,x:446.25,y:135.3},0).wait(1).to({scaleX:1.2347,scaleY:1.0878,skewX:-90.9193,skewY:-88.3644,x:388.8,y:128.3},0).wait(1).to({scaleX:1.2175,scaleY:1.0714,skewX:-92.8739,skewY:-90.1687,x:327.35,y:124.15},0).wait(1).to({scaleX:1.2003,scaleY:1.055,skewX:-101.9529,skewY:-99.0974,x:308.6,y:133},0).wait(1).to({scaleX:1.1831,scaleY:1.0385,skewX:-111.032,skewY:-108.0262,x:290.15,y:144.2},0).wait(1).to({scaleX:1.166,scaleY:1.0221,skewX:-120.1111,skewY:-116.955,x:273.25,y:157.45},0).wait(1).to({scaleX:1.1488,scaleY:1.0057,skewX:-129.1901,skewY:-125.8838,x:258.75,y:172},0).wait(1).to({scaleX:1.1316,scaleY:0.9892,skewX:-138.2692,skewY:-134.8126,x:247.1,y:186.9},0).wait(1).to({scaleX:1.1144,scaleY:0.9728,skewX:-141.3487,skewY:-137.7418,x:209.15,y:233.75},0).wait(1).to({scaleX:1.0973,scaleY:0.9564,skewX:-144.4282,skewY:-140.671,x:178.9,y:276.85},0).wait(1).to({scaleX:1.0801,scaleY:0.94,skewX:-147.5077,skewY:-143.6002,x:155.1,y:317.25},0).wait(1).to({scaleX:1.0629,scaleY:0.9235,skewX:-150.5872,skewY:-146.5293,x:137.4,y:355.4},0).wait(1).to({scaleX:1.0457,scaleY:0.9071,skewX:-153.6666,skewY:-149.4585,x:125.45,y:391.9},0).wait(1).to({scaleX:1.0286,scaleY:0.8907,skewX:-191.2451,skewY:-186.8867,x:118.65,y:420.95},0).wait(1).to({scaleX:1.0114,scaleY:0.8743,skewX:-228.8266,skewY:-224.3179,x:114.35,y:451},0).wait(1).to({scaleX:0.9942,scaleY:0.8579,skewX:-243.9059,skewY:-239.2469,x:124.15,y:540.15},0).wait(1).to({scaleX:0.9771,scaleY:0.8414,skewX:-258.9852,skewY:-254.1759,x:194.1,y:598.25},0).wait(1).to({scaleX:0.9599,scaleY:0.825,skewX:-274.0645,skewY:-269.1049,x:314.6,y:617.4},0).wait(1).to({scaleX:0.9427,scaleY:0.8086,skewX:-283.1437,skewY:-278.0339,x:425.3,y:627.65},0).wait(1).to({scaleX:0.9255,scaleY:0.7921,skewX:-292.223,skewY:-286.9629,x:526.95,y:627},0).wait(1).to({scaleX:0.9083,scaleY:0.7757,skewX:-301.3022,skewY:-295.8918,x:626.3,y:617.1},0).wait(1).to({scaleX:0.8912,scaleY:0.7593,skewX:-310.3815,skewY:-304.8208,x:728.35,y:597.4},0).wait(1).to({scaleX:0.874,scaleY:0.7429,skewX:-319.4607,skewY:-313.7497,x:839.8,y:564.7},0).wait(1).to({scaleX:0.8568,scaleY:0.7264,skewX:-325.5402,skewY:-319.6789,x:876.8,y:555.6},0).wait(1).to({scaleX:0.8397,scaleY:0.71,skewX:-331.6197,skewY:-325.6082,x:916.95,y:538.95},0).wait(1).to({scaleX:0.8225,scaleY:0.6936,skewX:-337.6992,skewY:-331.5374,x:958.55,y:514.45},0).wait(1).to({scaleX:0.8053,scaleY:0.6772,skewX:-343.7787,skewY:-337.4666,x:999.4,y:483.55},0).wait(1).to({scaleX:0.7881,scaleY:0.6608,skewX:-349.8582,skewY:-343.3958,x:1037.65,y:448.5},0).wait(1).to({scaleX:0.8083,scaleY:0.6298,skewX:-372.4375,skewY:-365.8248,x:1128.3,y:352.85},0).wait(1).to({scaleX:0.8284,scaleY:0.5988,skewX:-395.0168,skewY:-388.2538,x:1132.55,y:248.45},0).wait(1).to({scaleX:0.8485,scaleY:0.5678,skewX:-425.0962,skewY:-418.1829,x:1056.45,y:179},0).wait(1).to({scaleX:0.8686,scaleY:0.5369,skewX:-455.1755,skewY:-448.1119,x:953.75,y:171.85},0).wait(1).to({scaleX:0.7054,scaleY:0.4417,skewX:-470.2542,skewY:-463.0403,x:813.85,y:214.4},0).wait(1).to({scaleX:0.5422,scaleY:0.3465,skewX:-485.3329,skewY:-477.9687,x:611.95,y:326.25},0).wait(1).to({scaleX:0.379,scaleY:0.2513,skewX:-485.4124,skewY:-477.8979,x:561.7,y:338.05},0).wait(1).to({scaleX:0.2159,scaleY:0.1561,skewX:-485.4918,skewY:-477.8271,x:506.05,y:323.75},0).wait(1).to({scaleX:0.0527,scaleY:0.0609,skewX:-485.5713,skewY:-477.7563,x:514.45,y:327.1},0).wait(1).to({scaleX:0.1397,scaleY:0.1135,x:515,y:327.7},0).to({_off:true},1).wait(29));

	// звездв
	this.instance_2 = new lib.ЗВЕЗДА();
	this.instance_2.setTransform(123.9,91.45,0.0412,0.0412,7.4488);

	this.instance_3 = new lib.ЗВЕЗДА();
	this.instance_3.setTransform(141.35,498.95,0.0659,0.0659,45);

	this.instance_4 = new lib.ЗВЕЗДА();
	this.instance_4.setTransform(687,563,0.0659,0.0659);

	this.instance_5 = new lib.ЗВЕЗДА();
	this.instance_5.setTransform(971,136,0.0659,0.0659);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{rotation:0,x:971,y:136}},{t:this.instance_4,p:{rotation:0,x:687,y:563}},{t:this.instance_3,p:{rotation:45,x:141.35,y:498.95}},{t:this.instance_2,p:{rotation:7.4488,x:123.9,y:91.45}}]}).to({state:[{t:this.instance_5,p:{rotation:0,x:971,y:136}},{t:this.instance_4,p:{rotation:0,x:687,y:563}},{t:this.instance_3,p:{rotation:45,x:141.35,y:498.95}},{t:this.instance_2,p:{rotation:7.4488,x:123.9,y:91.45}}]},2).to({state:[{t:this.instance_5,p:{rotation:0,x:971,y:136}},{t:this.instance_4,p:{rotation:0,x:687,y:563}},{t:this.instance_3,p:{rotation:45,x:141.35,y:498.95}},{t:this.instance_2,p:{rotation:7.4488,x:123.9,y:91.45}}]},1).to({state:[{t:this.instance_5,p:{rotation:0,x:971,y:136}},{t:this.instance_4,p:{rotation:0,x:687,y:563}},{t:this.instance_3,p:{rotation:45,x:141.35,y:498.95}},{t:this.instance_2,p:{rotation:7.4488,x:123.9,y:91.45}}]},1).to({state:[{t:this.instance_5,p:{rotation:0,x:971,y:136}},{t:this.instance_4,p:{rotation:0,x:687,y:563}},{t:this.instance_3,p:{rotation:45,x:141.35,y:498.95}},{t:this.instance_2,p:{rotation:7.4488,x:123.9,y:91.45}}]},1).to({state:[{t:this.instance_5,p:{rotation:29.99,x:992.5,y:123.75}},{t:this.instance_4,p:{rotation:105.0015,x:762.65,y:572.5}},{t:this.instance_3,p:{rotation:0,x:108,y:513}},{t:this.instance_2,p:{rotation:7.4488,x:123.9,y:91.45}}]},1).to({state:[{t:this.instance_5,p:{rotation:29.99,x:992.5,y:123.75}},{t:this.instance_4,p:{rotation:105.0015,x:762.65,y:572.5}},{t:this.instance_3,p:{rotation:0,x:108,y:513}},{t:this.instance_2,p:{rotation:7.4488,x:123.9,y:91.45}}]},2).to({state:[{t:this.instance_5,p:{rotation:29.99,x:992.5,y:123.75}},{t:this.instance_4,p:{rotation:105.0015,x:762.65,y:572.5}},{t:this.instance_3,p:{rotation:0,x:108,y:513}},{t:this.instance_2,p:{rotation:7.4488,x:123.9,y:91.45}}]},2).to({state:[{t:this.instance_5,p:{rotation:0,x:971,y:136}},{t:this.instance_4,p:{rotation:0,x:687,y:563}},{t:this.instance_3,p:{rotation:59.9985,x:153.65,y:500.45}},{t:this.instance_2,p:{rotation:52.4508,x:145.75,y:85.55}}]},2).to({state:[{t:this.instance_5,p:{rotation:90,x:1038.5,y:136}},{t:this.instance_4,p:{rotation:90,x:755.5,y:563}},{t:this.instance_3,p:{rotation:0,x:108,y:513}},{t:this.instance_2,p:{rotation:52.4508,x:145.75,y:85.55}}]},6).to({state:[{t:this.instance_5,p:{rotation:90,x:1038.5,y:136}},{t:this.instance_4,p:{rotation:90,x:755.5,y:563}},{t:this.instance_3,p:{rotation:0,x:108,y:513}},{t:this.instance_2,p:{rotation:52.4508,x:145.75,y:85.55}}]},1).to({state:[{t:this.instance_5,p:{rotation:0,x:971,y:136}},{t:this.instance_4,p:{rotation:0,x:687,y:563}},{t:this.instance_3,p:{rotation:59.9985,x:153.65,y:500.45}},{t:this.instance_2,p:{rotation:127.456,x:171.2,y:111}}]},6).to({state:[{t:this.instance_5,p:{rotation:90,x:1038.5,y:136}},{t:this.instance_4,p:{rotation:90,x:755.5,y:563}},{t:this.instance_3,p:{rotation:0,x:108,y:513}},{t:this.instance_2,p:{rotation:127.456,x:171.2,y:111}}]},5).to({state:[{t:this.instance_5,p:{rotation:90,x:1038.5,y:136}},{t:this.instance_4,p:{rotation:90,x:755.5,y:563}},{t:this.instance_3,p:{rotation:0,x:108,y:513}},{t:this.instance_2,p:{rotation:127.456,x:171.2,y:111}}]},1).to({state:[{t:this.instance_5,p:{rotation:90,x:1038.5,y:136}},{t:this.instance_4,p:{rotation:90,x:755.5,y:563}},{t:this.instance_3,p:{rotation:0,x:108,y:513}},{t:this.instance_2,p:{rotation:127.456,x:171.2,y:111}}]},1).to({state:[{t:this.instance_5,p:{rotation:90,x:1038.5,y:136}},{t:this.instance_4,p:{rotation:90,x:755.5,y:563}},{t:this.instance_3,p:{rotation:74.9985,x:165.1,y:505.1}},{t:this.instance_2,p:{rotation:127.456,x:171.2,y:111}}]},3).to({state:[{t:this.instance_5,p:{rotation:90,x:1038.5,y:136}},{t:this.instance_4,p:{rotation:90,x:755.5,y:563}},{t:this.instance_3,p:{rotation:74.9985,x:165.1,y:505.1}},{t:this.instance_2,p:{rotation:127.456,x:171.2,y:111}}]},1).to({state:[{t:this.instance_5,p:{rotation:0,x:971,y:136}},{t:this.instance_4,p:{rotation:0,x:687,y:563}},{t:this.instance_3,p:{rotation:0,x:108,y:513}},{t:this.instance_2,p:{rotation:172.4587,x:165.4,y:132.85}}]},1).to({state:[{t:this.instance_5,p:{rotation:0,x:971,y:136}},{t:this.instance_4,p:{rotation:0,x:687,y:563}},{t:this.instance_3,p:{rotation:0,x:108,y:513}},{t:this.instance_2,p:{rotation:172.4587,x:165.4,y:132.85}}]},1).to({state:[{t:this.instance_5,p:{rotation:0,x:971,y:136}},{t:this.instance_4,p:{rotation:105.0015,x:762.65,y:572.5}},{t:this.instance_3,p:{rotation:0,x:108,y:513}},{t:this.instance_2,p:{rotation:172.4587,x:165.4,y:132.85}}]},4).to({state:[{t:this.instance_5,p:{rotation:90,x:1038.5,y:136}},{t:this.instance_4,p:{rotation:0,x:687,y:563}},{t:this.instance_3,p:{rotation:0,x:108,y:513}},{t:this.instance_2,p:{rotation:172.4587,x:165.4,y:132.85}}]},1).to({state:[{t:this.instance_5,p:{rotation:90,x:1038.5,y:136}},{t:this.instance_4,p:{rotation:0,x:687,y:563}},{t:this.instance_3,p:{rotation:0,x:108,y:513}},{t:this.instance_2,p:{rotation:172.4587,x:165.4,y:132.85}}]},1).to({state:[{t:this.instance_5,p:{rotation:90,x:1038.5,y:136}},{t:this.instance_4,p:{rotation:0,x:687,y:563}},{t:this.instance_3,p:{rotation:135,x:189,y:545.95}},{t:this.instance_2,p:{rotation:172.4587,x:165.4,y:132.85}}]},3).to({state:[{t:this.instance_5,p:{rotation:90,x:1038.5,y:136}},{t:this.instance_4,p:{rotation:0,x:687,y:563}},{t:this.instance_3,p:{rotation:135,x:189,y:545.95}},{t:this.instance_2,p:{rotation:172.4587,x:165.4,y:132.85}}]},1).to({state:[{t:this.instance_5,p:{rotation:45,x:1004.85,y:122.15}},{t:this.instance_4,p:{rotation:0,x:687,y:563}},{t:this.instance_3,p:{rotation:0,x:108,y:513}},{t:this.instance_2,p:{rotation:0,x:121,y:94}}]},34).wait(1));

	// марс
	this.instance_6 = new lib.МАРС();
	this.instance_6.setTransform(256,211,0.2363,0.2363);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(83));

	// фон
	this.instance_7 = new lib._1674952499_bogatyrclubpzvezdnoenebodlyadeteifon58();
	this.instance_7.setTransform(-28,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(83));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(612,344,975.4000000000001,376);
// library properties:
lib.properties = {
	id: '39D0F42549C6334F9379BC8F1F3B9861',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/блеск_.png", id:"блеск"},
		{src:"images/звук анимация 8_atlas_1.png", id:"звук анимация 8_atlas_1"},
		{src:"images/звук анимация 8_atlas_2.png", id:"звук анимация 8_atlas_2"},
		{src:"images/звук анимация 8_atlas_3.png", id:"звук анимация 8_atlas_3"},
		{src:"sounds/блескк_.mp3", id:"блескк"},
		{src:"sounds/ракета_.mp3", id:"ракета"}
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
an.compositions['39D0F42549C6334F9379BC8F1F3B9861'] = {
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