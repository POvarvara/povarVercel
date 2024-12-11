(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"лунтик 6 зд_atlas_1", frames: [[1874,130,50,91],[1449,0,171,159],[1622,122,41,167],[1937,0,80,74],[1665,122,41,165],[1937,76,80,72],[1810,222,32,106],[1840,0,95,128],[1731,121,77,136],[1810,130,62,90],[1282,0,165,194],[1622,0,107,120],[1731,0,107,119],[0,0,1280,720]]}
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



(lib.головакузя = function() {
	this.initialize(ss["лунтик 6 зд_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.голова = function() {
	this.initialize(ss["лунтик 6 зд_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ногалевкузя = function() {
	this.initialize(ss["лунтик 6 зд_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ногалевая = function() {
	this.initialize(ss["лунтик 6 зд_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ногаправкузя = function() {
	this.initialize(ss["лунтик 6 зд_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ногаправая = function() {
	this.initialize(ss["лунтик 6 зд_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.рукалевкузя = function() {
	this.initialize(ss["лунтик 6 зд_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.рукалевая = function() {
	this.initialize(ss["лунтик 6 зд_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.рукаправая = function() {
	this.initialize(ss["лунтик 6 зд_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.телокузя = function() {
	this.initialize(ss["лунтик 6 зд_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.тело = function() {
	this.initialize(ss["лунтик 6 зд_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ухолевое = function() {
	this.initialize(ss["лунтик 6 зд_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ухоправое = function() {
	this.initialize(ss["лунтик 6 зд_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.фон = function() {
	this.initialize(ss["лунтик 6 зд_atlas_1"]);
	this.gotoAndStop(13);
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


(lib.Symbol43 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ногалевкузя();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(0,0,41,167), null);


(lib.ухоправое_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ухоправое();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ухоправое_1, new cjs.Rectangle(0,0,107,119), null);


(lib.ухолевое_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ухолевое();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ухолевое_1, new cjs.Rectangle(0,0,107,120), null);


(lib.тело_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.тело();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.тело_1, new cjs.Rectangle(0,0,165,194), null);


(lib.телокузя_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.телокузя();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.телокузя_1, new cjs.Rectangle(0,0,62,90), null);


(lib.рукаправая_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.рукаправая();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.рукаправая_1, new cjs.Rectangle(0,0,77,136), null);


(lib.рукалевая_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.рукалевая();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.рукалевая_1, new cjs.Rectangle(0,0,95,128), null);


(lib.рукалевкузя_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.рукалевкузя();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.рукалевкузя_1, new cjs.Rectangle(0,0,32,106), null);


(lib.ногаправая_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ногаправая();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ногаправая_1, new cjs.Rectangle(0,0,80,72), null);


(lib.ногаправкузя_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ногаправкузя();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ногаправкузя_1, new cjs.Rectangle(0,0,41,165), null);


(lib.ногалевая_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ногалевая();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ногалевая_1, new cjs.Rectangle(0,0,80,74), null);


(lib.голова_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.голова();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.голова_1, new cjs.Rectangle(0,0,171,159), null);


(lib.головакузя_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.головакузя();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.головакузя_1, new cjs.Rectangle(0,0,50,91), null);


// stage content:
(lib.лунтик6зд = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// лунтик
	this.ikNode_1 = new lib.тело_1();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(305.6,452.65,1,1,0,0,0,82.5,97);

	this.ikNode_2 = new lib.голова_1();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(308.6,307.15,1,1,0,0,0,85.5,79.5);

	this.ikNode_4 = new lib.ухоправое_1();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(404,291.95,1,1,0,0,0,38.9,81.3);

	this.ikNode_6 = new lib.ухолевое_1();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(217.3,293.25,1,1,0,0,0,73.2,78.6);

	this.ikNode_8 = new lib.ногаправая_1();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(346.8,559.85,1,1,0,0,0,26.7,27.2);

	this.ikNode_10 = new lib.ногалевая_1();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(251.1,567.65,1,1,0,0,0,40,37);

	this.ikNode_12 = new lib.рукалевая_1();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(219.85,431.65,1,1,0,0,0,53.7,45);

	this.ikNode_14 = new lib.рукаправая_1();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.setTransform(392.5,429.15,1,1,0,0,0,33.8,42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_14,p:{rotation:0,x:392.5,y:429.15,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:0,x:219.85,y:431.65,regX:53.7}},{t:this.ikNode_10,p:{rotation:0,x:251.1,y:567.65,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:0,x:346.8,y:559.85,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:0,x:217.3,y:293.25}},{t:this.ikNode_4,p:{regY:81.3,rotation:0,x:404,y:291.95,regX:38.9}},{t:this.ikNode_2,p:{rotation:0,x:308.6,y:307.15}},{t:this.ikNode_1,p:{x:305.6}}]}).to({state:[{t:this.ikNode_14,p:{rotation:-1.0396,x:388.2,y:427.55,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45.1,rotation:0.9915,x:216.3,y:430.3,regX:53.7}},{t:this.ikNode_10,p:{rotation:-0.556,x:248.35,y:568.1,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-0.591,x:344.05,y:559.3,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.7,rotation:0.807,x:213.7,y:292.05}},{t:this.ikNode_4,p:{regY:81.4,rotation:0.9224,x:400.4,y:293.6,regX:38.9}},{t:this.ikNode_2,p:{rotation:0.807,x:304.8,y:307.15}},{t:this.ikNode_1,p:{x:301.75}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-2.0795,x:384.05,y:425.8,regX:33.9,regY:42.4}},{t:this.ikNode_12,p:{regY:45,rotation:1.9832,x:212.9,y:428.65,regX:53.7}},{t:this.ikNode_10,p:{rotation:-1.1121,x:245.65,y:568.6,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-1.183,x:341.3,y:558.9,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.5,rotation:1.6141,x:210.15,y:290.55}},{t:this.ikNode_4,p:{regY:81.3,rotation:1.8441,x:396.9,y:295,regX:38.9}},{t:this.ikNode_2,p:{rotation:1.6141,x:301,y:307.1}},{t:this.ikNode_1,p:{x:297.95}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-3.1192,x:379.6,y:424.4,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:2.9756,x:209.5,y:427.25,regX:53.7}},{t:this.ikNode_10,p:{rotation:-1.6692,x:243.1,y:569.25,regX:40.1,regY:37.1}},{t:this.ikNode_8,p:{rotation:-1.775,x:338.6,y:558.4,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.7,rotation:2.4207,x:206.7,y:289.5}},{t:this.ikNode_4,p:{regY:81.3,rotation:2.7664,x:393.3,y:296.55,regX:38.9}},{t:this.ikNode_2,p:{rotation:2.4207,x:297.25,y:307.15}},{t:this.ikNode_1,p:{x:294.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-4.1599,x:375.25,y:422.85,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:3.9671,x:206.15,y:425.75,regX:53.7}},{t:this.ikNode_10,p:{rotation:-2.2256,x:240.3,y:569.6,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-2.3664,x:336,y:558.1,regX:26.8,regY:27.3}},{t:this.ikNode_6,p:{regY:78.6,rotation:3.2277,x:203.2,y:288.1}},{t:this.ikNode_4,p:{regY:81.3,rotation:3.6893,x:389.55,y:298.1,regX:38.8}},{t:this.ikNode_2,p:{rotation:3.2277,x:293.5,y:307.1}},{t:this.ikNode_1,p:{x:290.3}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-5.1994,x:370.85,y:421.3,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45.1,rotation:4.9589,x:202.8,y:424.45,regX:53.7}},{t:this.ikNode_10,p:{rotation:-2.7813,x:237.6,y:570.05,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-2.9581,x:333.1,y:557.45,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:4.0346,x:199.65,y:286.85}},{t:this.ikNode_4,p:{regY:81.3,rotation:4.6115,x:385.95,y:299.65,regX:38.8}},{t:this.ikNode_2,p:{rotation:4.0346,x:289.8,y:307.1}},{t:this.ikNode_1,p:{x:286.45}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-6.2398,x:366.45,y:419.8,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:5.9514,x:199.5,y:422.85,regX:53.7}},{t:this.ikNode_10,p:{rotation:-3.3381,x:234.95,y:570.55,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-3.55,x:330.4,y:557,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:4.8422,x:196.2,y:285.6}},{t:this.ikNode_4,p:{regY:81.3,rotation:5.534,x:382.3,y:301.2,regX:38.8}},{t:this.ikNode_2,p:{rotation:4.8422,x:286.05,y:307.1}},{t:this.ikNode_1,p:{x:282.65}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-7.2795,x:362.2,y:418.25,regX:33.9,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:6.9429,x:196.2,y:421.4,regX:53.7}},{t:this.ikNode_10,p:{rotation:-3.8944,x:232.25,y:571,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-4.1416,x:327.65,y:556.5,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:5.6491,x:192.8,y:284.3}},{t:this.ikNode_4,p:{regY:81.3,rotation:6.4561,x:378.75,y:302.75,regX:38.9}},{t:this.ikNode_2,p:{rotation:5.6491,x:282.25,y:307.1}},{t:this.ikNode_1,p:{x:278.85}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-8.3199,x:357.6,y:416.75,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:7.9349,x:192.95,y:419.95,regX:53.7}},{t:this.ikNode_10,p:{rotation:-4.451,x:229.6,y:571.45,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-4.7334,x:324.9,y:555.95,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:6.4561,x:189.35,y:283.1}},{t:this.ikNode_4,p:{regY:81.4,rotation:7.3791,x:375.1,y:304.45,regX:38.9}},{t:this.ikNode_2,p:{rotation:6.4561,x:278.5,y:307.15}},{t:this.ikNode_1,p:{x:275}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-9.3596,x:353.1,y:415.25,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:8.9274,x:189.65,y:418.55,regX:53.7}},{t:this.ikNode_10,p:{rotation:-5.0072,x:227.05,y:571.9,regX:40.1,regY:37}},{t:this.ikNode_8,p:{rotation:-5.325,x:322.25,y:555.45,regX:26.8,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:7.2627,x:185.95,y:281.8}},{t:this.ikNode_4,p:{regY:81.3,rotation:8.3013,x:371.35,y:305.85,regX:38.9}},{t:this.ikNode_2,p:{rotation:7.2627,x:274.75,y:307.1}},{t:this.ikNode_1,p:{x:271.2}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-10.3996,x:348.55,y:413.75,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:9.9191,x:186.45,y:417.15,regX:53.7}},{t:this.ikNode_10,p:{rotation:-5.5638,x:224.25,y:572.25,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-5.9162,x:319.35,y:554.9,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:8.07,x:182.55,y:280.55}},{t:this.ikNode_4,p:{regY:81.4,rotation:9.224,x:367.6,y:307.55,regX:38.9}},{t:this.ikNode_2,p:{rotation:8.07,x:271.05,y:307.1}},{t:this.ikNode_1,p:{x:267.35}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-11.4396,x:344.1,y:412.3,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:10.9111,x:183.4,y:415.8,regX:53.8}},{t:this.ikNode_10,p:{rotation:-6.1202,x:221.6,y:572.75,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-6.5081,x:316.75,y:554.3,regX:26.8,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:8.877,x:179.15,y:279.3}},{t:this.ikNode_4,p:{regY:81.3,rotation:10.1463,x:363.9,y:309,regX:38.9}},{t:this.ikNode_2,p:{rotation:8.877,x:267.25,y:307.15}},{t:this.ikNode_1,p:{x:263.55}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-12.4799,x:339.5,y:410.85,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45.1,rotation:11.903,x:180.1,y:414.45,regX:53.7}},{t:this.ikNode_10,p:{rotation:-6.677,x:219,y:573.15,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-7.0997,x:313.85,y:553.8,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:9.684,x:175.9,y:278.1}},{t:this.ikNode_4,p:{regY:81.3,rotation:11.0689,x:360.1,y:310.55,regX:38.9}},{t:this.ikNode_2,p:{rotation:9.684,x:263.55,y:307.15}},{t:this.ikNode_1,p:{x:259.7}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-13.5199,x:334.85,y:409.3,regX:33.8,regY:42.4}},{t:this.ikNode_12,p:{regY:45,rotation:12.8948,x:176.95,y:413,regX:53.7}},{t:this.ikNode_10,p:{rotation:-7.2328,x:216.3,y:573.5,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-7.6913,x:311.05,y:553.25,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.7,rotation:10.4912,x:172.5,y:277}},{t:this.ikNode_4,p:{regY:81.2,rotation:11.9906,x:356.3,y:312.05,regX:38.9}},{t:this.ikNode_2,p:{rotation:10.4912,x:259.75,y:307.1}},{t:this.ikNode_1,p:{x:255.9}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-14.5598,x:330.3,y:408,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:13.887,x:173.95,y:411.7,regX:53.8}},{t:this.ikNode_10,p:{rotation:-7.7892,x:213.65,y:573.9,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-8.2837,x:308.2,y:552.6,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.7,rotation:11.2988,x:169.25,y:275.7}},{t:this.ikNode_4,p:{regY:81.3,rotation:12.9136,x:352.4,y:313.65,regX:38.9}},{t:this.ikNode_2,p:{rotation:11.2988,x:256.05,y:307.15}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-13.6323,x:330.95,y:409.25,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45.1,rotation:12.5174,x:172.85,y:413.65,regX:53.7}},{t:this.ikNode_10,p:{rotation:-6.987,x:211.95,y:573.45,regX:40,regY:37.1}},{t:this.ikNode_8,p:{rotation:-7.3598,x:306.7,y:553.6,regX:26.7,regY:27.3}},{t:this.ikNode_6,p:{regY:78.6,rotation:10.0656,x:168.45,y:277.5}},{t:this.ikNode_4,p:{regY:81.2,rotation:11.6806,x:352.45,y:311.45,regX:38.9}},{t:this.ikNode_2,p:{rotation:10.0656,x:255.95,y:307.1}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-12.7047,x:331.6,y:410.4,regX:33.8,regY:42.4}},{t:this.ikNode_12,p:{regY:45,rotation:11.1481,x:171.95,y:415.45,regX:53.7}},{t:this.ikNode_10,p:{rotation:-6.1835,x:210.25,y:572.8,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-6.4368,x:305.05,y:554.4,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:8.8336,x:167.9,y:279.35}},{t:this.ikNode_4,p:{regY:81.3,rotation:10.4476,x:352.45,y:309.5,regX:38.9}},{t:this.ikNode_2,p:{rotation:8.8336,x:255.95,y:307.15}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-11.7778,x:332.35,y:411.8,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:9.779,x:170.95,y:417.35,regX:53.6}},{t:this.ikNode_10,p:{rotation:-5.3811,x:208.55,y:572.15,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-5.5138,x:303.35,y:555.2,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:7.6004,x:167.2,y:281.3}},{t:this.ikNode_4,p:{regY:81.3,rotation:9.2142,x:352.45,y:307.4,regX:38.9}},{t:this.ikNode_2,p:{rotation:7.6004,x:255.9,y:307.1}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-10.8497,x:333,y:413.15,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:8.4092,x:170.1,y:419.3,regX:53.6}},{t:this.ikNode_10,p:{rotation:-4.5782,x:206.9,y:571.55,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-4.5905,x:301.7,y:556,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.5,rotation:6.3682,x:166.65,y:283.05}},{t:this.ikNode_4,p:{regY:81.3,rotation:7.9816,x:352.25,y:305.3,regX:38.8}},{t:this.ikNode_2,p:{rotation:6.3682,x:255.8,y:307.15}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-9.9227,x:333.6,y:414.45,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:7.0399,x:169.5,y:421.3,regX:53.7}},{t:this.ikNode_10,p:{rotation:-3.7752,x:205.25,y:570.85,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-3.6666,x:300.05,y:556.8,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:5.1354,x:166.05,y:285.1}},{t:this.ikNode_4,p:{regY:81.3,rotation:6.7493,x:352.3,y:303.2,regX:38.9}},{t:this.ikNode_2,p:{rotation:5.1354,x:255.75,y:307.15}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-8.9956,x:334.35,y:415.75,regX:33.9,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:5.6701,x:168.8,y:423.3,regX:53.7}},{t:this.ikNode_10,p:{rotation:-2.973,x:203.55,y:570.2,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-2.7437,x:298.3,y:557.5,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:3.9032,x:165.6,y:287}},{t:this.ikNode_4,p:{regY:81.3,rotation:5.5156,x:352.1,y:301.15,regX:38.9}},{t:this.ikNode_2,p:{rotation:3.9032,x:255.7,y:307.05}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-8.0682,x:334.8,y:417.1,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:4.3002,x:168.2,y:425.25,regX:53.8}},{t:this.ikNode_10,p:{rotation:-2.1696,x:201.9,y:569.5,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:-1.8205,x:296.6,y:558.25,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:2.671,x:165.1,y:288.9}},{t:this.ikNode_4,p:{regY:81.2,rotation:4.2836,x:351.9,y:298.95,regX:38.9}},{t:this.ikNode_2,p:{rotation:2.671,x:255.6,y:307.1}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-7.1403,x:335.5,y:418.4,regX:33.9,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:2.9309,x:167.45,y:427.3,regX:53.7}},{t:this.ikNode_10,p:{rotation:-1.3666,x:200.45,y:568.8,regX:40.1,regY:37}},{t:this.ikNode_8,p:{rotation:-0.897,x:295.05,y:559,regX:26.8,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:1.4383,x:164.7,y:290.9}},{t:this.ikNode_4,p:{regY:81.3,rotation:3.05,x:351.6,y:297,regX:38.9}},{t:this.ikNode_2,p:{rotation:1.4383,x:255.55,y:307.05}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-6.2133,x:335.9,y:419.75,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:1.5616,x:166.85,y:429.3,regX:53.7}},{t:this.ikNode_10,p:{rotation:-0.5639,x:198.65,y:568,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:0.0254,x:293.2,y:559.65,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:0.2055,x:164.25,y:292.85}},{t:this.ikNode_4,p:{regY:81.3,rotation:1.817,x:351.3,y:294.95,regX:38.9}},{t:this.ikNode_2,p:{rotation:0.2055,x:255.5,y:307.1}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-5.2855,x:336.4,y:421.1,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:0.1923,x:166.35,y:431.35,regX:53.7}},{t:this.ikNode_10,p:{rotation:0.2378,x:197.05,y:567.3,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:0.9486,x:291.45,y:560.3,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:-1.0264,x:163.9,y:294.75}},{t:this.ikNode_4,p:{regY:81.3,rotation:0.5849,x:350.9,y:292.85,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0264,x:255.4,y:307}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-5.4242,x:336.35,y:420.85,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45.1,rotation:1.3719,x:166.75,y:429.7,regX:53.7}},{t:this.ikNode_10,p:{rotation:0.2378,x:197.05,y:567.3,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:0.9486,x:291.45,y:560.3,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:0.7195,x:164.3,y:292}},{t:this.ikNode_4,p:{regY:81.3,rotation:-1.629,x:350.35,y:289.2,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0256,x:255.4,y:307}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-5.5621,x:336.25,y:420.65,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:2.5511,x:167.25,y:427.85,regX:53.7}},{t:this.ikNode_10,p:{rotation:0.2378,x:197.05,y:567.3,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:0.9486,x:291.45,y:560.3,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:2.4653,x:164.8,y:289.3}},{t:this.ikNode_4,p:{regY:81.3,rotation:-3.8444,x:349.55,y:285.55,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0256,x:255.4,y:307}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-5.7009,x:336.2,y:420.5,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:3.7305,x:167.8,y:426.1,regX:53.7}},{t:this.ikNode_10,p:{rotation:0.2378,x:197.05,y:567.3,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:0.9486,x:291.45,y:560.3,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.7,rotation:4.2117,x:165.35,y:286.6}},{t:this.ikNode_4,p:{regY:81.3,rotation:-6.0587,x:348.7,y:281.95,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0256,x:255.4,y:307}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-5.8389,x:336.05,y:420.25,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:4.9107,x:168.35,y:424.35,regX:53.7}},{t:this.ikNode_10,p:{rotation:0.2369,x:197.05,y:567.3,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:0.9477,x:291.4,y:560.3,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:5.9576,x:166.05,y:283.7}},{t:this.ikNode_4,p:{regY:81.3,rotation:-8.274,x:347.6,y:278.3,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0256,x:255.4,y:307}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-5.9778,x:336.05,y:420.05,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:6.0902,x:169.05,y:422.6,regX:53.8}},{t:this.ikNode_10,p:{rotation:0.2369,x:197,y:567.3,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:0.9477,x:291.4,y:560.3,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:7.7037,x:166.8,y:281}},{t:this.ikNode_4,p:{regY:81.4,rotation:-10.4886,x:346.4,y:274.8,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0256,x:255.4,y:306.95}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-6.1158,x:335.95,y:419.85,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:7.2698,x:169.5,y:420.9,regX:53.7}},{t:this.ikNode_10,p:{rotation:0.2369,x:197,y:567.3,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:0.9477,x:291.4,y:560.3,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:9.45,x:167.6,y:278.3}},{t:this.ikNode_4,p:{regY:81.3,rotation:-12.7047,x:345.05,y:271.15,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0256,x:255.4,y:306.95}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-6.2539,x:335.9,y:419.6,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:8.4498,x:170.2,y:419.2,regX:53.7}},{t:this.ikNode_10,p:{rotation:0.2369,x:197,y:567.3,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:0.9477,x:291.4,y:560.3,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:11.1963,x:168.5,y:275.6}},{t:this.ikNode_4,p:{regY:81.3,rotation:-14.9188,x:343.6,y:267.7,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0256,x:255.4,y:306.95}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-6.3928,x:335.9,y:419.45,regX:33.9,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:9.629,x:170.85,y:417.5,regX:53.7}},{t:this.ikNode_10,p:{rotation:0.2369,x:197,y:567.3,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:0.9477,x:291.4,y:560.3,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:12.9425,x:169.55,y:272.95}},{t:this.ikNode_4,p:{regY:81.3,rotation:-17.1329,x:341.95,y:264.35,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0256,x:255.4,y:306.95}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-6.531,x:335.85,y:419.2,regX:33.9,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:10.8088,x:171.6,y:415.8,regX:53.7}},{t:this.ikNode_10,p:{rotation:0.2369,x:197,y:567.25,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:0.9477,x:291.4,y:560.3,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:14.6889,x:170.55,y:270.35}},{t:this.ikNode_4,p:{regY:81.3,rotation:-19.3479,x:340.3,y:261,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0256,x:255.35,y:306.95}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-6.6691,x:335.55,y:418.9,regX:33.8,regY:42.4}},{t:this.ikNode_12,p:{regY:45,rotation:11.9888,x:172.4,y:414.2,regX:53.7}},{t:this.ikNode_10,p:{rotation:0.2361,x:196.95,y:567.25,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:0.9477,x:291.35,y:560.25,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:16.4351,x:171.7,y:267.8}},{t:this.ikNode_4,p:{regY:81.3,rotation:-21.5631,x:338.5,y:257.8,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0256,x:255.35,y:306.9}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-6.1263,x:335.9,y:419.8,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:10.6388,x:171.6,y:416.15,regX:53.8}},{t:this.ikNode_10,p:{rotation:-0.2334,x:197.9,y:567.7,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:1.2302,x:290.8,y:560.45,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:14.7667,x:170.6,y:270.2}},{t:this.ikNode_4,p:{regY:81.3,rotation:-19.6056,x:340.1,y:260.65,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0247,x:255.35,y:306.9}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-5.5831,x:336.35,y:420.55,regX:33.9,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:9.2896,x:170.65,y:417.95,regX:53.7}},{t:this.ikNode_10,p:{rotation:-0.7038,x:198.85,y:568.1,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:1.5127,x:290.4,y:560.65,regX:26.8,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:13.0977,x:169.6,y:272.7}},{t:this.ikNode_4,p:{regY:81.2,rotation:-17.6478,x:341.5,y:263.45,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0247,x:255.35,y:306.9}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-5.0406,x:336.5,y:421.4,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:7.9393,x:170,y:419.9,regX:53.8}},{t:this.ikNode_10,p:{rotation:-1.1742,x:199.8,y:568.65,regX:40,regY:37.1}},{t:this.ikNode_8,p:{rotation:1.7952,x:289.75,y:560.95,regX:26.7,regY:27.3}},{t:this.ikNode_6,p:{regY:78.6,rotation:11.4298,x:168.65,y:275.2}},{t:this.ikNode_4,p:{regY:81.3,rotation:-15.6902,x:343.05,y:266.5,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0247,x:255.35,y:306.9}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-4.4975,x:336.95,y:422.15,regX:33.9,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:6.59,x:169.1,y:421.85,regX:53.7}},{t:this.ikNode_10,p:{rotation:-1.6447,x:200.75,y:569,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:2.0786,x:289.2,y:561,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:9.7611,x:167.7,y:277.75}},{t:this.ikNode_4,p:{regY:81.4,rotation:-13.733,x:344.35,y:269.6,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0247,x:255.35,y:306.9}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-3.9549,x:337.1,y:422.95,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:5.2407,x:168.5,y:423.8,regX:53.8}},{t:this.ikNode_10,p:{rotation:-2.1153,x:201.65,y:569.35,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:2.3612,x:288.8,y:561.2,regX:26.8,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:8.0929,x:166.95,y:280.3}},{t:this.ikNode_4,p:{regY:81.3,rotation:-11.7753,x:345.6,y:272.6,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0247,x:255.35,y:306.85}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-3.4117,x:337.5,y:423.75,regX:33.9,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:3.8909,x:167.85,y:425.85,regX:53.8}},{t:this.ikNode_10,p:{rotation:-2.5861,x:202.6,y:569.8,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:2.6438,x:288.1,y:561.35,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:6.4245,x:166.2,y:282.95}},{t:this.ikNode_4,p:{regY:81.3,rotation:-9.8179,x:346.7,y:275.7,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0247,x:255.35,y:306.85}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-2.8688,x:337.65,y:424.55,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:2.5415,x:167.15,y:427.85,regX:53.7}},{t:this.ikNode_10,p:{rotation:-3.057,x:203.55,y:570.15,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:2.9266,x:287.55,y:561.5,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:4.7554,x:165.55,y:285.55}},{t:this.ikNode_4,p:{regY:81.4,rotation:-7.8607,x:347.75,y:279.05,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0247,x:255.35,y:306.85}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-2.3262,x:337.9,y:425.35,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:1.1917,x:166.6,y:429.8,regX:53.7}},{t:this.ikNode_10,p:{rotation:-3.5273,x:204.55,y:570.7,regX:40,regY:37.1}},{t:this.ikNode_8,p:{rotation:3.2094,x:287.05,y:561.7,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:3.0876,x:164.9,y:288.2}},{t:this.ikNode_4,p:{regY:81.3,rotation:-5.903,x:348.6,y:282.05,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0247,x:255.35,y:306.85}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-1.7838,x:338.15,y:426.2,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45,rotation:-0.1574,x:166.05,y:431.8,regX:53.7}},{t:this.ikNode_10,p:{rotation:-3.9978,x:205.5,y:570.95,regX:40,regY:37}},{t:this.ikNode_8,p:{rotation:3.4922,x:286.45,y:561.9,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.5,rotation:1.4191,x:164.45,y:290.65}},{t:this.ikNode_4,p:{regY:81.3,rotation:-3.9452,x:349.4,y:285.2,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0247,x:255.35,y:306.85}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-1.2407,x:338.4,y:426.95,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45.1,rotation:-1.5065,x:165.7,y:433.95,regX:53.8}},{t:this.ikNode_10,p:{rotation:-4.4686,x:206.6,y:571.45,regX:40.1,regY:37.1}},{t:this.ikNode_8,p:{rotation:3.7744,x:285.9,y:562,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:-0.2483,x:164,y:293.4}},{t:this.ikNode_4,p:{regY:81.3,rotation:-1.9885,x:350.05,y:288.4,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.0247,x:255.3,y:306.8}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-1.2407,x:338.4,y:426.95,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45.1,rotation:-1.5065,x:165.7,y:433.9,regX:53.8}},{t:this.ikNode_10,p:{rotation:-4.4686,x:206.6,y:571.45,regX:40.1,regY:37.1}},{t:this.ikNode_8,p:{rotation:3.7744,x:285.9,y:562,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:3.8716,x:164.3,y:286.95}},{t:this.ikNode_4,p:{regY:81.3,rotation:-8.2598,x:346.7,y:278.35,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.3666,x:254.45,y:306.8}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-1.2407,x:338.4,y:426.9,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45.1,rotation:-1.5065,x:165.7,y:433.9,regX:53.8}},{t:this.ikNode_10,p:{rotation:-4.4686,x:206.6,y:571.4,regX:40.1,regY:37.1}},{t:this.ikNode_8,p:{rotation:3.7744,x:285.9,y:562,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.7,rotation:7.9922,x:165.1,y:280.6}},{t:this.ikNode_4,p:{regY:81.3,rotation:-14.5318,x:342.1,y:268.35,regX:38.9}},{t:this.ikNode_2,p:{rotation:-1.7086,x:253.55,y:306.75}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-1.2407,x:338.4,y:426.9,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45.1,rotation:-1.5065,x:165.7,y:433.9,regX:53.8}},{t:this.ikNode_10,p:{rotation:-4.4686,x:206.6,y:571.4,regX:40.1,regY:37.1}},{t:this.ikNode_8,p:{rotation:3.7744,x:285.85,y:562,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:12.1131,x:166.3,y:274.05}},{t:this.ikNode_4,p:{regY:81.3,rotation:-20.8036,x:336.25,y:258.7,regX:38.8}},{t:this.ikNode_2,p:{rotation:-2.0506,x:252.7,y:306.75}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-1.2407,x:338.35,y:426.9,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45.1,rotation:-1.5065,x:165.7,y:433.9,regX:53.8}},{t:this.ikNode_10,p:{rotation:-4.4686,x:206.6,y:571.4,regX:40.1,regY:37.1}},{t:this.ikNode_8,p:{rotation:3.7744,x:285.85,y:562,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.5,rotation:16.234,x:168.05,y:267.75}},{t:this.ikNode_4,p:{regY:81.3,rotation:-27.0753,x:329.7,y:249.75,regX:38.9}},{t:this.ikNode_2,p:{rotation:-2.3918,x:251.75,y:306.75}},{t:this.ikNode_1,p:{x:252.1}}]},1).to({state:[{t:this.ikNode_14,p:{rotation:-1.2407,x:338.35,y:426.85,regX:33.8,regY:42.5}},{t:this.ikNode_12,p:{regY:45.1,rotation:-1.5065,x:165.65,y:433.85,regX:53.8}},{t:this.ikNode_10,p:{rotation:-4.4686,x:206.55,y:571.35,regX:40.1,regY:37.1}},{t:this.ikNode_8,p:{rotation:3.7744,x:285.8,y:561.95,regX:26.7,regY:27.2}},{t:this.ikNode_6,p:{regY:78.6,rotation:20.3546,x:170.15,y:262.05}},{t:this.ikNode_4,p:{regY:81.3,rotation:-33.347,x:322.3,y:241.65,regX:38.9}},{t:this.ikNode_2,p:{rotation:-2.734,x:250.95,y:306.65}},{t:this.ikNode_1,p:{x:252.1}}]},1).wait(1));

	// Armature_99
	this.ikNode_63 = new lib.ногаправкузя_1();
	this.ikNode_63.name = "ikNode_63";
	this.ikNode_63.setTransform(731.95,434.7,0.9315,0.9998,0,0.0009,180,9.1,16.4);

	this.ikNode_61 = new lib.рукалевкузя_1();
	this.ikNode_61.name = "ikNode_61";
	this.ikNode_61.setTransform(740.7,379.15,0.9315,0.9997,0,-0.021,180,16.4,14.4);

	this.ikNode_59 = new lib.головакузя_1();
	this.ikNode_59.name = "ikNode_59";
	this.ikNode_59.setTransform(708.6,346.25,0.9315,0.9997,0,0.0192,180,26.6,68);

	this.ikNode_58 = new lib.телокузя_1();
	this.ikNode_58.name = "ikNode_58";
	this.ikNode_58.setTransform(713.7,394.95,0.9317,1,0,0,180,33.4,46.8);

	this.ikNode_65 = new lib.Symbol43();
	this.ikNode_65.name = "ikNode_65";
	this.ikNode_65.setTransform(699.5,446.55,1.0165,0.9996,0,0,180,17.5,39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_65,p:{scaleX:1.0165,skewX:0,skewY:180,x:699.5,y:446.55,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.4,x:713.7,y:394.95}},{t:this.ikNode_59,p:{regX:26.6,skewX:0.0192,skewY:180,x:708.6,y:346.25,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-0.021,skewY:180,x:740.7,y:379.15,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:0.0009,skewY:180,x:731.95,y:434.7,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]}).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:0.7399,skewY:-179.2602,x:697.95,y:446.2,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714.1,y:394.9}},{t:this.ikNode_59,p:{regX:26.7,skewX:0.202,skewY:-179.817,x:709.15,y:346.3,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-0.098,skewY:179.923,x:740.75,y:379.2,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-2.5981,skewY:177.402,x:732.4,y:434.8,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:1.4836,skewY:-178.5169,x:696,y:445.6,regX:17.6,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714.1,y:394.9}},{t:this.ikNode_59,p:{regX:26.6,skewX:0.3874,skewY:-179.6321,x:709.35,y:346.25,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-0.1775,skewY:179.8433,x:740.75,y:379.2,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-5.198,skewY:174.8006,x:732.35,y:434.8,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:2.2265,skewY:-177.7743,x:694.35,y:444.95,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714.05,y:394.9}},{t:this.ikNode_59,p:{regX:26.7,skewX:0.5737,skewY:-179.4453,x:709.4,y:346.2,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-0.258,skewY:179.7625,x:740.7,y:379.1,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-7.799,skewY:172.2015,x:732.1,y:434.75,regX:9.2,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:2.9689,skewY:-177.0311,x:692.7,y:444.35,regX:17.4,regY:40}},{t:this.ikNode_58,p:{regX:33.2,x:714.05,y:394.9}},{t:this.ikNode_59,p:{regX:26.6,skewX:0.7592,skewY:-179.2604,x:709.65,y:346.25,scaleY:0.9996,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-0.3376,skewY:179.6828,x:740.7,y:379.1,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-10.3996,skewY:169.5996,x:732.15,y:434.8,regX:9.2,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:3.7119,skewY:-176.2884,x:690.85,y:443.45,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.85}},{t:this.ikNode_59,p:{regX:26.6,skewX:0.9454,skewY:-179.0736,x:709.8,y:346.25,scaleY:0.9997,scaleX:0.9314,regY:68}},{t:this.ikNode_61,p:{skewX:-0.418,skewY:179.603,x:740.65,y:379.05,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-13.0003,skewY:166.9989,x:732.2,y:434.75,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:2.0777,skewY:-177.9223,x:661.45,y:444.1,regX:17.6,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:683.25,y:394.85}},{t:this.ikNode_59,p:{regX:26.6,skewX:1.1283,skewY:-178.8915,x:679.1,y:346.05,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-0.495,skewY:179.526,x:709.75,y:379,regY:14.5,regX:16.4}},{t:this.ikNode_63,p:{skewX:-9.3848,skewY:170.6144,x:699.4,y:435.55,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:0.4426,skewY:-179.557,x:632.25,y:444.7,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:652.45,y:394.85}},{t:this.ikNode_59,p:{regX:26.6,skewX:1.312,skewY:-178.7084,x:648.3,y:346.05,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-0.5728,skewY:179.4481,x:678.85,y:378.7,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-5.7699,skewY:174.2292,x:666.55,y:436.2,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-4.5485,skewY:175.4519,x:622.5,y:446.2,regX:17.6,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:638.25,y:394.85}},{t:this.ikNode_59,p:{regX:26.6,skewX:1.4931,skewY:-178.5272,x:634.35,y:346,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-0.648,skewY:179.373,x:664.65,y:378.7,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:3.4117,skewY:-176.59,x:646.15,y:437.8,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-9.5551,skewY:170.4443,x:642.25,y:447.45,regX:17.6,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:653.4,y:394.85}},{t:this.ikNode_59,p:{regX:26.6,skewX:1.682,skewY:-178.3385,x:649.5,y:346.15,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-0.7311,skewY:179.2895,x:679.95,y:378.7,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:12.6049,skewY:-167.3965,x:654.7,y:438.55,regX:9.1,scaleY:0.9997,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-7.8092,skewY:172.1904,x:616.55,y:446.95,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:628.95,y:394.9}},{t:this.ikNode_59,p:{regX:26.6,skewX:1.8667,skewY:-178.1534,x:625.4,y:346.05,scaleY:0.9996,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-0.8081,skewY:179.2125,x:655.4,y:378.65,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:0.056,skewY:-179.9446,x:640.35,y:436.9,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-6.0691,skewY:173.9305,x:571.05,y:446.6,regX:17.6,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:585,y:394.9}},{t:this.ikNode_59,p:{regX:26.6,skewX:2.0566,skewY:-177.9638,x:581.45,y:346.05,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-0.8921,skewY:179.129,x:611.4,y:378.6,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-12.4704,skewY:167.5301,x:605.8,y:433.2,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-5.9115,skewY:174.0881,x:635.65,y:446.65,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:649.5,y:394.85}},{t:this.ikNode_59,p:{regX:26.6,skewX:2.2438,skewY:-177.7768,x:646.25,y:346.05,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-0.9743,skewY:179.0473,x:675.9,y:378.6,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:2.5754,skewY:-177.4255,x:665.35,y:435.65,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-5.7534,skewY:174.2462,x:700.25,y:446.8,regX:17.5,regY:40}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:2.432,skewY:-177.589,x:710.95,y:346.05,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-1.0565,skewY:178.9656,x:740.4,y:378.7,regY:14.5,regX:16.4}},{t:this.ikNode_63,p:{skewX:17.6274,skewY:-162.3751,x:724.55,y:437.45,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-9.6704,skewY:170.3291,x:703.55,y:447.4,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:2.6176,skewY:-177.4029,x:711.05,y:346.05,scaleY:0.9996,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-1.1352,skewY:178.8868,x:740.35,y:378.5,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:17.1356,skewY:-162.8667,x:724.65,y:437.3,regX:9.2,scaleY:0.9997,scaleX:0.9314}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-13.5886,skewY:166.4117,x:706.85,y:447.95,regX:17.6,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.7,skewX:2.8033,skewY:-177.2178,x:711.1,y:346.1,scaleY:0.9996,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-1.2148,skewY:178.807,x:740.3,y:378.4,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:16.6449,skewY:-163.3563,x:724.95,y:437.25,regX:9.1,scaleY:0.9997,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-6.5971,skewY:173.4026,x:706.55,y:447.85,regX:17.4,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:2.9872,skewY:-177.0318,x:711.3,y:346,scaleY:0.9996,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-1.2944,skewY:178.7272,x:740.3,y:378.35,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:8.0905,skewY:-171.9114,x:724.55,y:437.35,regX:9.1,scaleY:0.9997,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:0.3892,skewY:-179.6103,x:705.8,y:447.95,regX:17.5,regY:40}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:3.1728,skewY:-176.8466,x:711.5,y:346.05,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-1.3749,skewY:178.6474,x:740.25,y:378.3,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-0.46,skewY:179.5401,x:724.3,y:437.35,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:7.3822,skewY:-172.6184,x:705.25,y:447.7,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.7,skewX:3.3585,skewY:-176.6604,x:711.5,y:345.95,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-1.4545,skewY:178.5676,x:740.2,y:378.35,regY:14.5,regX:16.4}},{t:this.ikNode_63,p:{skewX:-9.0128,skewY:170.9852,x:723.9,y:437.4,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0165,skewX:14.3729,skewY:-165.6266,x:704.65,y:447.75,regX:17.5,regY:40}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:3.5443,skewY:-176.4752,x:711.8,y:346.1,scaleY:0.9996,scaleX:0.9314,regY:68.1}},{t:this.ikNode_61,p:{skewX:-1.535,skewY:178.4869,x:740.2,y:378.2,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-17.5688,skewY:162.4303,x:723.5,y:437.5,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:1.3742,skewY:-178.6262,x:705.6,y:447.7,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:3.7301,skewY:-176.289,x:712,y:346,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-1.6146,skewY:178.407,x:740.15,y:378.2,regY:14.5,regX:16.4}},{t:this.ikNode_63,p:{skewX:-8.9535,skewY:171.044,x:723,y:437.6,regX:9.1,scaleY:0.9997,scaleX:0.9314}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-11.6195,skewY:168.3798,x:706.7,y:447.8,regX:17.4,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:3.9159,skewY:-176.1037,x:712.1,y:345.9,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-1.6942,skewY:178.3282,x:740.15,y:378.1,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-0.341,skewY:179.6583,x:722.4,y:437.75,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-24.6199,skewY:155.3806,x:707.5,y:447.95,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:4.1026,skewY:-175.9174,x:712.3,y:345.95,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-1.7738,skewY:178.2484,x:740.1,y:378,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:8.2691,skewY:-171.7322,x:721.9,y:437.9,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-13.6139,skewY:166.386,x:707.9,y:448.05,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:4.2885,skewY:-175.732,x:712.4,y:345.95,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-1.8535,skewY:178.1685,x:740.05,y:378,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:0.8491,skewY:-179.1515,x:722.3,y:437.75,regX:9.2,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-2.6064,skewY:177.3928,x:708.35,y:448.1,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:4.4745,skewY:-175.5456,x:712.55,y:345.95,scaleY:0.9996,scaleX:0.9314,regY:68}},{t:this.ikNode_61,p:{skewX:-1.934,skewY:178.0878,x:740.05,y:377.95,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-6.5651,skewY:173.4342,x:722.85,y:437.6,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:8.3942,skewY:-171.6059,x:708.75,y:448.2,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.7,skewX:4.6605,skewY:-175.3601,x:712.6,y:345.95,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-2.0136,skewY:178.0089,x:740,y:378.05,regY:14.5,regX:16.4}},{t:this.ikNode_63,p:{skewX:-13.9843,skewY:166.0143,x:723.35,y:437.45,regX:9.1,scaleY:0.9997,scaleX:0.9314}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:19.4008,skewY:-160.5989,x:709.1,y:448.2,regX:17.6,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:4.8465,skewY:-175.1737,x:712.85,y:345.95,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-2.0941,skewY:177.9282,x:739.95,y:377.9,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-21.4047,skewY:158.5949,x:723.8,y:437.4,regX:9.1,scaleY:0.9997,scaleX:0.9314}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:9.7565,skewY:-170.2428,x:709.4,y:448.3,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:5.0326,skewY:-174.9881,x:713,y:345.95,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-2.1746,skewY:177.8474,x:739.95,y:377.95,regY:14.5,regX:16.4}},{t:this.ikNode_63,p:{skewX:-15.7241,skewY:164.2753,x:723.9,y:437.45,regX:9.1,scaleY:0.9997,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:0.1128,skewY:-179.8865,x:709.55,y:448.25,regX:17.6,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:5.2187,skewY:-174.8015,x:713.15,y:345.9,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-2.2543,skewY:177.7675,x:739.9,y:377.85,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-10.0441,skewY:169.9544,x:723.95,y:437.4,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0165,skewX:-9.5249,skewY:170.475,x:710.05,y:448.25,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:5.4059,skewY:-174.6149,x:713.3,y:345.9,scaleY:0.9996,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-2.3348,skewY:177.6877,x:739.9,y:377.8,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-4.3652,skewY:175.6341,x:724,y:437.4,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-19.1685,skewY:160.8314,x:710.35,y:448.25,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:5.5913,skewY:-174.4282,x:713.5,y:345.9,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-2.4153,skewY:177.6069,x:739.85,y:377.9,regY:14.5,regX:16.4}},{t:this.ikNode_63,p:{skewX:1.3092,skewY:-178.6915,x:724.1,y:437.35,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-28.8116,skewY:151.1879,x:710.6,y:448.25,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:5.7766,skewY:-174.2423,x:713.6,y:345.95,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-2.4959,skewY:177.5261,x:739.85,y:377.75,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:6.9895,skewY:-173.0126,x:724.1,y:437.35,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-23.3093,skewY:156.6903,x:709.95,y:448.3,regX:17.5,regY:40}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:5.9631,skewY:-174.0555,x:713.75,y:345.9,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-2.5764,skewY:177.4462,x:739.85,y:377.85,regY:14.5,regX:16.4}},{t:this.ikNode_63,p:{skewX:3.7341,skewY:-176.2673,x:724.65,y:437.25,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-17.8062,skewY:162.1937,x:709.3,y:448.15,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.7,skewX:6.1496,skewY:-173.8695,x:713.8,y:345.95,scaleY:0.9996,scaleX:0.9314,regY:68}},{t:this.ikNode_61,p:{skewX:-2.6569,skewY:177.3654,x:739.8,y:377.7,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:0.4775,skewY:-179.5232,x:725.15,y:437.1,regX:9.2,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-12.3035,skewY:167.6961,x:708.6,y:448.1,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:6.336,skewY:-173.6826,x:714.05,y:345.85,scaleY:0.9997,scaleX:0.9314,regY:68}},{t:this.ikNode_61,p:{skewX:-2.7383,skewY:177.2838,x:739.8,y:377.75,regY:14.5,regX:16.4}},{t:this.ikNode_63,p:{skewX:-2.774,skewY:177.2263,x:725.85,y:436.95,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-6.8005,skewY:173.2001,x:707.95,y:448.05,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:6.5227,skewY:-173.4966,x:714.3,y:346,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-2.819,skewY:177.2038,x:739.75,y:377.65,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-6.0284,skewY:173.9707,x:726.35,y:436.7,regX:9.2,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:-1.2981,skewY:178.7019,x:707.3,y:447.95,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:6.7111,skewY:-173.3095,x:714.4,y:345.9,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-2.8995,skewY:177.123,x:739.8,y:377.6,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-9.2839,skewY:170.7161,x:726.95,y:436.55,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:4.2003,skewY:-175.7996,x:706.55,y:448.05,regX:17.5,regY:40}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:6.8969,skewY:-173.1233,x:714.6,y:346.1,scaleY:0.9997,scaleX:0.9315,regY:68.1}},{t:this.ikNode_61,p:{skewX:-2.9801,skewY:177.0423,x:739.75,y:377.7,regY:14.5,regX:16.4}},{t:this.ikNode_63,p:{skewX:-12.5412,skewY:167.458,x:727.55,y:436.4,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:9.7023,skewY:-170.2969,x:705.95,y:447.85,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.7,skewX:7.0837,skewY:-172.937,x:714.6,y:346,scaleY:0.9996,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-3.0606,skewY:176.9614,x:739.7,y:377.4,regY:14.3,regX:16.4}},{t:this.ikNode_63,p:{skewX:-15.7967,skewY:164.202,x:728.1,y:436.25,regX:9.1,scaleY:0.9997,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0165,skewX:15.206,skewY:-164.794,x:705.45,y:447.8,regX:17.4,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:714,y:394.8}},{t:this.ikNode_59,p:{regX:26.6,skewX:7.2706,skewY:-172.7497,x:714.9,y:346,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-3.1412,skewY:176.8805,x:739.7,y:377.5,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-19.0519,skewY:160.9474,x:728.65,y:436,regX:9.1,scaleY:0.9997,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:13.6852,skewY:-166.3153,x:681.55,y:449.5,regX:17.6,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:691.05,y:396.65}},{t:this.ikNode_59,p:{regX:26.6,skewX:7.4575,skewY:-172.5633,x:692.1,y:347.9,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-4.2419,skewY:175.7802,x:716.5,y:379.35,regY:14.4,regX:16.5}},{t:this.ikNode_63,p:{skewX:-17.1473,skewY:162.853,x:706,y:437.75,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:12.1638,skewY:-167.8358,x:658.05,y:451.35,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:668,y:398.5}},{t:this.ikNode_59,p:{regX:26.6,skewX:7.6445,skewY:-172.3758,x:669.2,y:349.7,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-5.3434,skewY:174.6791,x:693.55,y:381.15,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-15.2412,skewY:164.7583,x:683.25,y:439.55,regX:9.2,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:10.6433,skewY:-169.3567,x:634.45,y:453.15,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:644.95,y:400.4}},{t:this.ikNode_59,p:{regX:26.6,skewX:7.8317,skewY:-172.1891,x:646.35,y:351.7,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-6.4432,skewY:173.5772,x:670.4,y:382.95,regY:14.4,regX:16.5}},{t:this.ikNode_63,p:{skewX:-13.3361,skewY:166.6635,x:660.65,y:441.3,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:9.1225,skewY:-170.8776,x:611,y:455.05,regX:17.4,regY:40}},{t:this.ikNode_58,p:{regX:33.2,x:621.95,y:402.25}},{t:this.ikNode_59,p:{regX:26.7,skewX:8.0188,skewY:-172.0016,x:623.35,y:353.5,scaleY:0.9997,scaleX:0.9314,regY:68}},{t:this.ikNode_61,p:{skewX:-7.5447,skewY:172.4764,x:647.4,y:384.65,regY:14.3,regX:16.4}},{t:this.ikNode_63,p:{skewX:-11.43,skewY:168.5691,x:638,y:443,regX:9.1,scaleY:0.9997,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:7.6011,skewY:-172.3989,x:587.2,y:456.85,regX:17.6,regY:40}},{t:this.ikNode_58,p:{regX:33.2,x:598.9,y:404.15}},{t:this.ikNode_59,p:{regX:26.6,skewX:8.2053,skewY:-171.8148,x:600.65,y:355.45,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-8.6454,skewY:171.3757,x:624.25,y:386.6,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-9.524,skewY:170.4746,x:615.3,y:444.75,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:6.0806,skewY:-173.9192,x:563.75,y:458.45,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:575.85,y:406}},{t:this.ikNode_59,p:{regX:26.6,skewX:8.3918,skewY:-171.6281,x:577.8,y:357.35,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-9.7457,skewY:170.2747,x:601.2,y:388.55,regY:14.5,regX:16.4}},{t:this.ikNode_63,p:{skewX:-7.6191,skewY:172.3814,x:592.6,y:446.55,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:4.5599,skewY:-175.4407,x:540.15,y:460.25,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:552.85,y:407.9}},{t:this.ikNode_59,p:{regX:26.6,skewX:8.5795,skewY:-171.441,x:554.9,y:359.15,scaleY:0.9996,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-10.847,skewY:169.1742,x:578.2,y:390.4,regY:14.5,regX:16.4}},{t:this.ikNode_63,p:{skewX:-5.7128,skewY:174.2858,x:569.95,y:448.25,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:3.039,skewY:-176.9605,x:516.65,y:462,regX:17.4,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:529.8,y:409.75}},{t:this.ikNode_59,p:{regX:26.6,skewX:8.7651,skewY:-171.254,x:532,y:361.25,scaleY:0.9996,scaleX:0.9315,regY:68.1}},{t:this.ikNode_61,p:{skewX:-11.948,skewY:168.074,x:555.1,y:392.05,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:-3.8085,skewY:176.1922,x:547.3,y:450,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:1.5185,skewY:-178.4816,x:492.9,y:463.75,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:506.75,y:411.65}},{t:this.ikNode_59,p:{regX:26.7,skewX:8.9519,skewY:-171.0677,x:509.05,y:363,scaleY:0.9996,scaleX:0.9314,regY:68}},{t:this.ikNode_61,p:{skewX:-13.049,skewY:166.9722,x:532,y:393.8,regY:14.3,regX:16.4}},{t:this.ikNode_63,p:{skewX:-1.9032,skewY:178.0971,x:524.6,y:451.8,regX:9.1,scaleY:0.9998,scaleX:0.9315}}]},1).to({state:[{t:this.ikNode_65,p:{scaleX:1.0164,skewX:0,skewY:180,x:469.3,y:465.5,regX:17.5,regY:39.9}},{t:this.ikNode_58,p:{regX:33.2,x:483.7,y:413.5}},{t:this.ikNode_59,p:{regX:26.6,skewX:9.1395,skewY:-170.8796,x:486.3,y:364.9,scaleY:0.9997,scaleX:0.9315,regY:68}},{t:this.ikNode_61,p:{skewX:-14.1495,skewY:165.8716,x:508.9,y:395.7,regY:14.4,regX:16.4}},{t:this.ikNode_63,p:{skewX:0,skewY:180,x:501.9,y:453.5,regX:9.2,scaleY:0.9998,scaleX:0.9315}}]},1).wait(1));

	// Armature_103
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7DB42D").s().p("ABnCPIgMgEIgkgRIg1gfIg5gmIgKgJIghgfIAAAAQgngngVglIgFgJIgMgSQAOgFAIgIQARgTgMggIApARIAFADQAoAWArAoIAcAXIAPAMIApAkIBMBFIACADIAMAQIAMAUIAGAOIABAEQADAJgCAGIgDAGIgFAEIgLAEIgDABQgTAAgfgMg");
	this.shape.setTransform(659.0531,391.5537);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3D912").s().p("AAeBTQgegHgagVIgLgJQgjgdgOghIgBgCQgNgiARgSQAQgSAkAGQAgAGAfAXIgDgNQAAgRAFgBQAGgCAJAMIANAWIAFAMQAHASACAQQAHAKAEAOIACADQALAggQATQgIAIgPAFIgIAAQgKAAgNgCg");
	this.shape_1.setTransform(635.3172,373.9612);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18672E").s().p("AhyCkIgBgDIgGgPIgMgUIgMgQIgCgDIACgCQATgyApg3IANgQIAOgUQA6hMBAgpIAIgFQAggTAUgCIAWAYIACACQgCAWgTAjQgUAogeAmIgoA3Qg7BNg3AsIgGADIgeASQACgFgDgKg");
	this.shape_2.setTransform(687.975,387.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DB42D").s().p("ABnCPIgLgEIgkgRIg2gfIg4gmIgLgJIgggfIgBAAQgngngUglIgGgJIgMgSQAPgFAIgIQAQgTgLggIApARIAEADQApAWArAoIAbAXIAPAMIApAkIBNBFIACADIALAQIANAUIAGAOIABAEQABAJgBAGIgDAGIgFAEIgLAEIgDABQgTAAgfgMg");
	this.shape_3.setTransform(658.37,393.0037);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E3D912").s().p("AAeBTQgdgHgbgVIgLgJQgjgdgOghIgBgCQgNgiARgSQAQgSAkAGQAfAGAgAXIgDgNQAAgRAFgBQAGgCAJAMIANAWIAFAMQAGASACAQQAIAKAEAOIACADQALAggQATQgIAIgPAFIgJAAQgJAAgNgCg");
	this.shape_4.setTransform(634.6672,375.4112);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18672E").s().p("AhyCkIgBgDIgGgPIgMgUIgMgQIgCgDIABgCQAVgyAog3IAMgQIAPgUQA6hNBAgoIAIgEQAggUAUgCIAWAYIACABQgCAXgTAjQgUAngeAnIgpA3Qg7BNg2AsIgGADIgeASQABgFgCgKg");
	this.shape_5.setTransform(687.325,389.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7DB42D").s().p("ABnCPIgLgEIgkgRQgagNgcgSIg4gmIgLgJIgggfIgBAAQgngngVglIgFgJIgMgSQAOgFAJgIQAPgTgKggIApARIAEADQAoAWAsAoIAbAXIAPAMIApAkIBNBFIABADIAMAQIANAUIAFAOIACAEQABAJgBAGIgDAGIgFAEIgLAEIgDABQgTAAgfgMg");
	this.shape_6.setTransform(657.72,394.4537);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E3D912").s().p("AAeBTQgdgHgbgVIgLgJQgjgdgOghIgBgCQgMgiARgSQAPgSAlAGQAeAGAgAXIgCgNQgBgRAFgBQAGgCAKAMIAMAWIAFAMQAGASADAQQAHAKAEAOIACADQALAggQATQgJAIgNAFIgJAAQgKAAgNgCg");
	this.shape_7.setTransform(633.9972,376.8612);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18672E").s().p("AhyClIgBgEIgGgOIgMgVIgMgPIgCgEIABgCQAVgyAog3IAMgQIAPgUQA6hNBAgoIAIgEQAggUATgCIAXAYIACABQgDAXgSAkQgUAmgeAnQgUAbgVAcQg7BNg2AsIgHADIgdASQABgGgCgIg");
	this.shape_8.setTransform(686.675,390.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18672E").s().p("AhyClIgBgEIgGgOIgMgVIgMgPIgCgEIACgCQATgyApg3IANgQIAOgUQA6hNBAgoIAIgEQAggUAUgCIAWAXIACACQgCAXgTAkQgUAngeAmIgoA4Qg7BMg3AsIgGADIgeASQACgGgDgIg");
	this.shape_9.setTransform(685.975,391.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7DB42D").s().p("ABpCPIgMgFIgkgQIg2gfIg5glIgLgJIghgdIAAgBQgngmgZgoIgGgMIgIgVQAPgBAJgHQAUgPgFghIAhAVIAEADIBQA5IAcAXIAPAMIApAjIBOBEIACADIAMAQIAMATIAHAPIABAEQABAJAAAGIgEAGIgFAEIgKAEIgHAAQgSAAgcgKg");
	this.shape_10.setTransform(659.7063,395.6208);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E3D912").s().p("AANBXQgagNgXgaIgKgLQgcgkgHgiIAAgCQgGgkAUgOQAUgQAiAOQAdANAaAcIAAgNQADgRAGAAQAGAAAGANIAIAYIADANQACATAAAPQAEAMACAPIABAEQAEAhgTAPQgKAHgPABQgMAAgSgIg");
	this.shape_11.setTransform(637.6743,376.4358);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18672E").s().p("AhwClIgBgDIgGgPIgNgUIgMgQIgCgCIACgDQATgyAog4IAMgQIAOgTQA7hOA/goIAJgGQAfgTAUgBIAWAWIACADQgCAWgTAjQgTAngfAnIgnA4Qg6BNg3ArIgFAFIgeATQAAgHgBgJg");
	this.shape_12.setTransform(688.6,391.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7DB42D").s().p("ABqCNIgMgEIglgQIg2geIg5gkIgLgJIghgdIAAgBQgpglgbgrIgGgRIgEgVQAPABALgEQAWgLACgiIAYAYIADADQAjAeArAWIAcAWIAPAMIAqAjIBOBDIACADIAMAQIANATIAGAPIACADQABAJgBAGIgDAHIgFAEIgKAEIgIAAQgSAAgbgKg");
	this.shape_13.setTransform(662.445,395.4466);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E3D912").s().p("AAVBmQgLgDgQgLQgYgSgSgeIgGgNQgVgoAAgkIAAgCQACgkAXgKQAWgLAeAUQAbASATAiIAEgOQAFgPAGABQAGAAAEAPIACAZIAAAOQgBASgEAPQADANgCAPIABADQgDAigWALQgIADgLAAIgHAAg");
	this.shape_14.setTransform(642.6,374.9236);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18672E").s().p("AhuCmIgCgDIgGgPIgNgTIgMgQIgCgDIABgDQATgyAog5IAMgPIAOgUQA5hOBAgpIAIgFQAggUAUgBIAWAXIACACQgCAWgTAkQgTAngeAmIgnA4Qg5BOg2AsIgGAFIgeASQABgGgBgJg");
	this.shape_15.setTransform(691.225,390.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18672E").s().p("AhtCnIgBgEIgHgOIgNgUIgMgPIgCgDIABgCQASgyAog6IALgQIAOgUQA5hOBAgqIAIgFQAggUAUgBIAWAWIACACQgCAXgTAkQgTAngeAmIgmA5Qg4BOg2AsIgGAFIgdATQABgGgCgJg");
	this.shape_16.setTransform(658.675,391.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7DB42D").s().p("ABpCKIgLgEIglgPIg3geIg5gkIgLgJIgigcIAAgBQgpglgdguIgGgUIABgWQAOAFALgDQAYgGAJggIAOAYIADAEQAfAfAtAOIAcAWIAQAMIAqAiIBPBCIACADIAMAQIANATIAHAPIABADQACAJgBAGIgDAHIgFAEIgKAEIgFAAQgTAAgegJg");
	this.shape_17.setTransform(630.0813,396.434);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E3D912").s().p("AgFBoQgLgFgOgOQgUgXgLghIgEgOQgNgqAIgkIAAgCQAJgkAZgEQAXgHAaAaQAWAXANAlIAFgMQAJgOAGACQAGABAAAQIgCAZIgDAMIgMAhQAAANgEAOIgBAEQgJAggYAGIgIABQgIAAgIgDg");
	this.shape_18.setTransform(613.0939,374.9007);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E3D912").s().p("AggBnQgJgHgMgRQgPgagEgiIgBgPQgDgsAPgiIAAgBQAQgiAZAAQAYgBAUAeQARAbAFAoIAIgLQAMgNAFADQAFADgCAQIgHAXIgGAMQgJARgJANQgCANgIANIgBADQgPAegYABQgLAAgOgHg");
	this.shape_19.setTransform(583.5641,375.3965);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7DB42D").s().p("ABrCGIgNgEIgkgPIg3gdIg6gjIgLgJIgigcIAAgBQgpgjgfgyIgFgYIAFgWQAOAIAKAAQAagCAPgeIADAYIAEADQAaAhAxAGIAcAWIAQAMIArAiIBQBBIABACIANAQIANATIAGAPIACADIACAPIgEAHIgFAEIgKAEIgIABQgSAAgbgJg");
	this.shape_20.setTransform(597.6,397.5231);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18672E").s().p("AhrCoIgCgDIgGgPIgNgTIgNgQIgCgCIABgDQASgzAng5IALgQIAOgVQA3hPBBgqIAIgFQAggUAUgBIAWAXIACACQgCAWgTAkQgSAngeAmIgmA4Qg3BPg1AuIgGAFIgdATg");
	this.shape_21.setTransform(626.125,391.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E3D912").s().p("AgYBnQgLgGgLgQQgRgZgGgiIgCgPQgGgsANgiIAAgCQAOgiAZgBQAYgEAVAeQAUAaAHAnIAHgMQALgMAFACQAGADgCAPIgGAYIgEAMQgIASgJANQgCANgGANIgBAEQgOAfgYACIgCAAQgKAAgMgGg");
	this.shape_22.setTransform(570.6953,366.5627);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7DB42D").s().p("ABdCRIgLgFIgjgTIgzgiIg3gqIgKgKIgfggIAAAAQgkgpgZgxIgEgWIAEgWQAOAHALgBQAYgCAOgfIAJAZIADAEQAbAjAsARIAZAZIAPANIAmAmIBJBJIACADIAKARIAMAUIAFAPIABAEQABAJgCAGIgDAGIgGAEIgKADQgUAAghgOg");
	this.shape_23.setTransform(584.37,390.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18672E").s().p("Ah6CgIgBgEIgFgPIgLgVIgLgRIgCgCIACgDQAXgwArg1IANgQIAQgTQA9hJA/gmIAIgFQAhgSATgCIAWAYIACACQgCAWgUAjQgUAnggAnIgsA2Qg/BJg5AoIgGAEIgfARQABgGgBgJg");
	this.shape_24.setTransform(613.225,387.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E3D912").s().p("AgQBoQgLgGgNgPQgSgYgIghIgDgPQgIgsAKgiIAAgCQAMgjAZgDQAYgFAXAcQAVAZAJAmIAHgMQAKgMAFABQAGADgBAPIgEAZIgEAMQgGASgIANQgCAOgFANIgBAEQgLAfgZAFIgEAAQgJAAgLgFg");
	this.shape_25.setTransform(585.9493,363.0448);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7DB42D").s().p("ABPCbIgLgHIghgVIgvgpIgygvIgKgKIgagjIgBgBQgfgtgTgxIgCgTIACgWQAOAGAMgCQAYgEALggIAPAcIADAFQAaAkAnAbIAWAcIANAPIAiAoIBBBSIABADIAJASIAJAVIAEAQIAAADQAAAJgCAHIgEAGIgGADIgLABQgTgBgfgSg");
	this.shape_26.setTransform(599.175,387.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#18672E").s().p("AiICWIgBgEIgDgPIgJgWIgJgSIgCgCIACgDQAcgtAvgyIAOgOIASgRQBFhEA7ghIAIgEQAhgTAUAAIAVAXIACADQgEAXgUAiQgVAlgiAoQgXAagcAZQhGBDg8AiIgHAEIggANQACgGAAgJg");
	this.shape_27.setTransform(628.125,387.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#18672E").s().p("AiWCMIAAgEIgCgPIgHgXIgGgTIgBgDQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAhgrAygrIARgOIATgPQBJg8A4geIAJgGQAhgQAUgBIAVAZIACACQgFAWgVAiQgWAmgkAmQgYAagiAWQhLA9hAAbIgHADIghALQADgGAAgJg");
	this.shape_28.setTransform(634.35,387);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7DB42D").s().p("AA/CjIgKgIIgegZIgqgtIgug0IgIgMIgXgmIAAgBQgagwgMgwIgCgQIABgWQAPAFALgCQAYgGAKggIATAeIACAEQAbAmAfAmIAUAeIALAPIAdAtIA5BXIABADIAGATIAHAXIACAPIAAAEQAAAJgDAGIgFAFIgGADIgLABQgTgEgegVg");
	this.shape_29.setTransform(605.55,384.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E3D912").s().p("AgIBoQgLgFgOgOQgUgXgKgiIgEgOQgLgrAIgjIABgCQAKgkAYgEQAXgGAZAaQAWAYAMAlIAGgMQAJgOAGACQAGADAAAPIgDAZIgDAMQgFASgHAOQgBANgFAOIAAAEQgKAggYAGIgHABQgIAAgJgEg");
	this.shape_30.setTransform(592.9066,358.8604);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#18672E").s().p("AiaCHIgBgDIgBgQIgGgXIgHgTIAAgDQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAjgqA1gpIAQgNIAUgOQBNg6A1gdIAJgFQAigQATAAIAVAYIACADQgFAXgVAhQgWAmgnAmQgYAYgjAWQhOA5hAAZIgHADIgjAJQADgFACgKg");
	this.shape_31.setTransform(556.2,386.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7DB42D").s().p("ABCChIgJgHIgfgbIgogtIgsg1IgHgKIgXghIgBgBQgegugPgtIgDgQIgCgVQAPACALgDQAYgJAEghIAZAcIACAEQAeAjAiAlIAYAeIALASIAeAsIA2BaIAAADIAHATIAHAXIAAAQIABADQgCAKgCAFIgFAFIgGADIgMAAQgSgEgdgWg");
	this.shape_32.setTransform(526.65,383.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E3D912").s().p("AAJBoQgKgEgQgMQgXgVgOgfIgGgOQgRgpAEgkIAAgCQAFgkAYgIQAWgJAcAWQAaAVAQAkIAEgNQAIgPAFABQAGABADAPIAAAaIgBANQgDASgFAPQABANgDAOIAAAEQgFAhgXAJQgGACgIAAIgMgBg");
	this.shape_33.setTransform(511.7619,358.5357);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E3D912").s().p("AAbBlQgLgCgRgLQgYgRgTgdIgIgNQgWgmgBglIAAgCQAAgkAWgLQAWgMAfATQAbARAVAhIADgOQAFgPAGAAQAGAAAEAPIAEAZIAAAOQAAASgDAPQADANgBAPIAAAEQAAAhgWAMQgKAEgNAAIgDAAg");
	this.shape_34.setTransform(574.575,357.9702);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7DB42D").s().p("ABFCeIgJgIIgdgbIgnguIgsg1IgEgHIgZgdIAAgBQghgsgSgrIgFgOIgFgWQAPABALgEQAWgNABggIAcAZIAEADIBFBFQARAQALANIANATIAdAuQAfAzAVApIABADIAGATIAFAXIABAQIAAAEQgBAIgDAGIgGAFIgGACIgLAAQgTgFgcgWg");
	this.shape_35.setTransform(591.525,381.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#18672E").s().p("AifCDIAAgEIgBgQIgFgWIgGgUIgBgDIACgCQAigpA5gnIARgLIAUgOQBPg2A1gdIAIgEQAigRAUABIAUAZIABACQgEAWgWAiQgXAlgmAnQgaAXgkAVQhQA1hCAYIgHACIgiAHQADgFABgJg");
	this.shape_36.setTransform(621.825,384.9971);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7DB42D").s().p("AB2C3QgTgGgbgWIgKgIIgcgcIgmgvIgqg0QgEgHABABQgOgSgKgHIgBgBQgkgpgVgpIgFgMIgIgVQAOgBALgGQAUgOgEgiIAhAXIAEADQAlAcAnAjQAUARAKANQAHAHAIAOIAdAuQAeAzAUAqIAAADIAGAUIAFAXIAAAQIAAADQgCAJgDAGIgFAEIgHACg");
	this.shape_37.setTransform(656.55,380.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E3D912").s().p("AAKBXQgagNgWgbIgJgLQgbgkgGgkIAAgCQgFgkAVgOQATgOAiAOQAdANAZAeIABgOQADgPAGgBQAGAAAGAOIAHAYIACANQADATgCAPQAFAMABAPIABADQADAjgUAOQgKAFgPACQgMAAgSgJg");
	this.shape_38.setTransform(638.0219,357.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#18672E").s().p("AikB+IAAgEIAAgQIgEgXIgHgTIAAgDIACgCQAkgoA7gkIASgLQAJgHALgGQBRg0A0gbIAIgEQAigQAUABIATAZIACACQgFAWgWAhQgXAlgoAnQgaAXgnATQhRAyhDAVIgHACIgiAGQADgFABgJg");
	this.shape_39.setTransform(687.5,383.7242);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7DB42D").s().p("ABvC6QgSgHgbgXIgJgIIgcgdIgkgwIgqg1IgCgGQgOgRgLgKIAAAAQgjgrgUgsIgFgPIgDgXQAPADALgFQAWgKAEghIAYAZIAEAEQAgAhAmAfQATARAKANIAOAUIAcAwQAcA0ATAqIABADIAFAUIAEAWIABAQIgBAEQgBAJgEAFIgFAFIgGACg");
	this.shape_40.setTransform(656.275,379.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E3D912").s().p("AARBnQgMgDgPgMQgYgTgQgeIgGgNQgUgpACgkIAAgCQADgkAXgKQAWgKAdAVQAbATASAiIAEgNQAGgPAGABQAGABADAPIACAZIAAANQgCASgFAPQADAOgDAOIABAEQgEAhgWAKQgIADgJAAIgJAAg");
	this.shape_41.setTransform(640.5907,355.6308);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#18672E").s().p("AimB8IABgEIgBgQIgEgXIgFgTIgBgDIACgCQAlgnA8gkIARgKIAVgNQBRgyAzgbIAJgEQAigQAUABIATAZIACACQgFAXgWAhQgYAlgoAmQgaAXgnASQhTAxhDAUIgHABIgjAGQAEgFABgJg");
	this.shape_42.setTransform(686.875,384.0938);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7DB42D").s().p("ABpC7QgRgGgbgYIgJgJIgbgdIgkgxIgog2IgDgHQgNgSgLgKIAAAAQghgtgTgwIgDgSIABgWQAPAEALgBQAYgFAKghIAQAcIADAEQAcAjAlAbQASASAKANIANAVIAbAwQAbA0ASArIABADIAEAUIAFAXIgBAPIAAAEQgCAJgEAFIgFAFIgGACg");
	this.shape_43.setTransform(656,379.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E3D912").s().p("AgKBpQgLgFgNgPQgUgYgJghIgEgOQgLgsAJgjIABgCQAKgjAYgEQAYgFAYAaQAWAYAMAmIAGgNQAJgNAFACQAGABAAAQIgDAZIgDAMQgFASgIAOQAAAOgGAOIAAADQgKAhgYAFIgGAAQgJAAgKgDg");
	this.shape_44.setTransform(643.7975,354.1284);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#18672E").s().p("AioB6IAAgEIABgPIgEgXIgFgUIgBgDQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAlgmA8gjIARgKIAVgNQBTgwAygbIAJgEQAigPATAAIAUAaIACACQgFAWgXAhQgXAkgqAnQgaAWgoATQhTAvhDATIgIABIgiAFQADgFACgJg");
	this.shape_45.setTransform(686.25,384.4492);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7DB42D").s().p("ABkC7QgSgGgagZIgJgJIgageIgjgxIgng4IgDgHIgWgdIgBgBQgegugTg0IgBgVIAGgVQANAIAMAAQAZAAAPgeIAIAbIADAEQAWAnAoAWQAQATAKANIAMAVIAZAxIAsBfIAAADIAEAUIAEAXIgBAQIAAAEQgCAJgDAFIgGAEIgGACg");
	this.shape_46.setTransform(655.675,380.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E3D912").s().p("AgkBmQgJgHgLgRQgOgbgDgjIgBgOQgBgtAQggIABgCQAQghAZABQAXgBAUAfQARAdAEAnIAIgLQAMgLAFACQAEADgCAQIgIAXIgGAMQgJAQgKANQgDANgIAMIgCAEQgPAdgYAAQgMAAgNgIg");
	this.shape_47.setTransform(646.9632,353.1735);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#18672E").s().p("AiqB4IAAgEIABgQIgEgXIgEgUIAAgDIACgCQAmglA8giIARgKIAWgMICFhJIAJgEQAigQATABIATAaIACACQgFAWgXAhQgYAkgpAnQgbAWgoARQhUAuhEASIgHABIgiAFQADgFACgJg");
	this.shape_48.setTransform(685.675,384.822);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7DB42D").s().p("ABhDDQgSgHgZgaIgJgIIgZgfIgigzIglg4IgDgHQgMgUgJgKIAAgBQgegvgOgrIgDgNIgFgWQAPABALgEQAWgLABgiIAeAbIADAEQAgAiAhApQAQATAJANIAMAWIAYAxQAYA2AQArIAAADIAEAUIADAXIgBAQIgBAEQgCAJgEAFIgGAEIgGABg");
	this.shape_49.setTransform(653.775,377.575);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E3D912").s().p("AAYBlQgMgCgPgLQgZgSgSgdIgHgNQgWgoABgkIgBgCQABgkAXgLQAVgLAeATQAbASAWAhIACgNQAGgPAFAAQAHABADAPIAEAZIAAANQAAASgFAPQAEANgCAPIAAAEQgBAigWALQgJAEgMAAIgFgBg");
	this.shape_50.setTransform(638.6,352.6574);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#18672E").s().p("AiuBzIABgEIABgQIgDgXIgEgUIAAgDQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAogkA9gfIASgKIAWgLICFhFIAJgEQAigPAUABIASAaIACACQgFAWgXAhQgZAkgqAmQgbAVgpARQhWArhFAOIgHABIgjAEQAEgFACgJg");
	this.shape_51.setTransform(683.85,383.7684);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7DB42D").s().p("ABcDFQgRgIgZgbIgIgJIgZgfIgfg0Igkg5IgCgHQgLgUgKgLIAAAAQgdgwgGglIgCgEIgNgSQANgGAIgJQAPgTgOgfIAxATIAEADQAlAZAjA8QAQATAIAOIALAWIAXAyIAlBiIAAAEIADAUIACAXIgBAQIgBADQgCAJgFAFIgFAEIgHABg");
	this.shape_52.setTransform(652.025,375.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E3D912").s().p("AAkBUQgegFgcgTIgMgIQglgbgQgfIgBgCQgPghAPgTQAPgUAkADQAhAEAgAVIgEgNQgBgRAFgCQAGgCAKAMIAOAVIAGAMQAHASAEAOQAIAKAGAOIABADQAOAfgPATQgIAKgNAFQgIACgJAAIgPgBg");
	this.shape_53.setTransform(632.8379,354.1502);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#18672E").s().p("AiwBuIABgEIABgQIgCgXIgDgUIAAgDIACgCQApgjA/gcIASgJIAWgLQBXgoAugZIAJgEQAjgPATACIATAaIACACQgGAWgYAhQgYAjgsAnQgbAUgsAPQhXAohFAMIgHAAIgjADQAFgFACgJg");
	this.shape_54.setTransform(681.925,382.7132);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7DB42D").s().p("ABgDFQgSgIgZgaIgIgJIgZgfQgRgXgQgbIgkg5IgDgIIgVgeIgBgBQgdgugLgoIgDgJIgJgVQAPgBAJgIQAUgQgGggIAmAYIAEADQAjAfAhAxQAQATAJAOIALAVIAYAyQAYA2APArIAAAEIAEAUIACAXIgBAQIgBAEQgCAIgEAFIgGAFIgGABg");
	this.shape_55.setTransform(653.325,376.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E3D912").s().p("AAPBXQgagNgYgZIgKgLQgegjgHgiIgBgCQgGgjATgQQATgPAjAMQAdAMAbAcIAAgOQADgQAFgBQAGAAAHANIAJAYIADANQADATgBAOQAGAMACAPIABAEQAGAhgUAQQgJAHgPABQgMAAgTgGg");
	this.shape_56.setTransform(636.0143,353.2632);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#18672E").s().p("AivBxIABgEIABgQIgCgXIgEgUIAAgDIACgCQAogjA+gfIASgJIAWgLQBWgqAwgZIAJgEQAigPAUABIASAaIACACQgFAWgYAhQgYAkgrAmQgcAVgqAPQhWAqhFAOIgHABIgjADQAEgFACgJg");
	this.shape_57.setTransform(683.425,383.1682);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7DB42D").s().p("ABjDCQgTgIgZgZIgIgJIgageIgigyIgmg5IgCgHQgNgTgJgKIgBgBQgegtgPgtIgDgOIgEgWQAPACALgEQAWgLADghIAcAcIADADIBBBJQAQASAKAOIALAVIAZAyQAYA1ARAsIAAADIAEATIADAYIgBAQIAAADQgCAJgEAFIgGAEIgGACg");
	this.shape_58.setTransform(654.775,377.65);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E3D912").s().p("AATBmQgLgDgQgLQgYgSgRgfIgGgNQgUgnABglIAAgCQABgkAXgKQAWgLAeAVQAbATATAhIADgNQAGgPAGABQAGABAEAOIACAaIAAANQgCASgEAPQADANgCAPIAAAEQgDAhgWALQgIADgKAAIgIgBg");
	this.shape_59.setTransform(639.9726,352.5784);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#18672E").s().p("AitB0IAAgEIABgPIgCgYIgFgTIAAgEQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAmgkA+ggIASgJIAVgMICFhFIAJgEQAjgQATACIATAZIACADQgFAWgYAgQgYAkgqAnQgcAVgpAQQhVAshEAPIgIABIgiAEQAEgFACgJg");
	this.shape_60.setTransform(684.95,383.5934);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7DB42D").s().p("ABlC+QgSgGgagaIgJgIIgageIgjgyIgng3QgEgGABgBIgWgeIgBAAQgegugSgwIgDgSIACgXQAOAGAMgCQAYgEAKghIAQAcIADAEQAbAlAkAdQARASAKAOQAFAIAHANIAZAwQAaA1ARArIABADIAEAUIADAXIAAAQIgBAEQgBAJgEAFIgGAEIgGACg");
	this.shape_61.setTransform(656.275,378.825);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E3D912").s().p("AgNBoQgLgFgNgPQgTgYgJghIgDgOQgKgsAKgjIAAgCQALgjAZgEQAXgFAYAbQAWAZAKAmIAHgMQAKgOAFACQAFADAAAPIgDAZIgEAMQgGASgIAOQAAANgGAOIgBADQgKAhgYAEIgGABQgIAAgLgFg");
	this.shape_62.setTransform(644.8875,352.627);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#18672E").s().p("AirB3IAAgEIABgQIgDgXIgEgUIgBgDIACgCQAnglA8ghIASgKQAKgGALgGQBTguAygaIAJgEQAjgPATABIATAZIACADQgFAWgYAhQgYAkgpAmQgcAWgoARQhUAuhEAQIgHABIgiAFQADgFACgJg");
	this.shape_63.setTransform(686.4,384.0469);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#7DB42D").s().p("ABpC5QgSgGgbgYIgJgJIgbgeIgjgwIgog3QgEgGABgBQgNgSgKgJIAAgBQghgsgVgzIgCgVIAFgWQANAHAMAAQAZgBAOgeIAJAaIADAEQAZAlAoAVQASASAKANIANAVIAaAxQAbA0ASArIAAADIAFAUIAEAXIAAAPIgBAFQgCAIgDAFIgGAFIgGABg");
	this.shape_64.setTransform(655.475,379.35);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E3D912").s().p("AgeBnQgJgHgMgQQgPgagFgjIgCgOQgDgsAOgiIAAgCQAPghAZgBQAXgCAWAeQASAbAGAnIAHgLQAMgMAFADQAFADgCAPIgHAXIgFANQgIAQgKANQgCANgHAOIgCADQgOAegYACQgMAAgNgHg");
	this.shape_65.setTransform(645.6291,352.9688);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#18672E").s().p("AipB5IAAgEIAAgQIgDgXIgFgUIgBgDIACgCQAngmA7giIASgKIAVgMQBTgvAygbIAJgEQAjgPATABIATAZIADADQgHAWgWAhQgYAkgqAmQgaAWgnASQhUAuhEASIgHACIgjAFQAEgFACgJg");
	this.shape_66.setTransform(685.8,383.847);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#7DB42D").s().p("ABsC0QgSgHgbgXIgJgJIgbgcIglgwIgog2QgEgHABAAQgOgRgJgJIgBAAQgigrgYg1IgBgXIAIgWQAMAJAMABQAYACASgcIADAYIADAEQAVAlAtAOQATASALANIANAVIAcAwQAbA0ATAqIABADIAFAUIAEAXIAAAQIgBADQgBAKgDAFIgGAEIgGACg");
	this.shape_67.setTransform(654.7,379.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E3D912").s().p("AgUBuQgMgBgMgJQgJgIgJgRQgMgdgBgiIABgNQABguATgfIABgCQATggAYADQAYABARAhQAPAdAAAnIAJgKQANgKAFADQAFAEgEAOIgKAXIgHALQgKAQgLAMQgEAMgJAMIgCAEQgRAagWAAIgCAAg");
	this.shape_68.setTransform(646.2763,353.5408);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#18672E").s().p("AinB6IAAgDIAAgQIgEgXIgFgUIgBgDIADgCQAlgmA7gjIASgLIAVgMQBSgxAzgaIAJgFQAigPAUABIATAZIACADQgFAWgXAhQgYAkgpAmQgaAXgnASQhUAwhDATIgHABIgiAGQADgGACgJg");
	this.shape_69.setTransform(685.175,383.6492);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7DB42D").s().p("ABwCuQgSgGgbgXIgKgIIgcgdIgmgvIgpg1QgEgGACAAQgOgRgKgHIgBgBQgkgqgag2IAAgbIAKgTQAKAKANADQAYAEAVgZIgEAVIADAEQATAkAxAIQAVARALANQAGAIAIANIAdAwQAdAzATAqIABADIAFAUIAEAXIABAPIgBAEIgEAOIgFAFIgHACg");
	this.shape_70.setTransform(654,380.525);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E3D912").s().p("AgiBtQgMgDgKgKQgIgJgHgTQgJgdAFgjIACgNQAHgtAXgdIABgBQAXgdAXAGQAYAEANAjQAKAfgEAlIALgIQANgJAFAEQAEAFgGANIgMAWIgJAKQgMAPgMAKQgFAMgLALIgCADQgRAVgUAAIgIAAg");
	this.shape_71.setTransform(646.7214,354.3393);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#18672E").s().p("AimB8IABgEIgBgPIgEgXIgFgUIgBgDIACgCQAkgnA8gkIARgKIAVgNQBSgyA0gbIAIgEQAjgQATABIATAZIACADQgFAWgXAhQgYAlgoAlQgaAYgmASQhUAxhCAUIgHABIgiAGg");
	this.shape_72.setTransform(684.6,383.447);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#7DB42D").s().p("ABzCoQgSgFgcgXIgJgIIgdgcIgmgvIgrg0QgDgFACABQgPgSgKgGIgBAAQgmgogbg6QABgEAAgYIAMgSQAKAMALAEQAYAHAYgWIgKASIACAEQASAkA2ABQAVAQALAMQAHAIAJAOIAdAwQAeAxAUAqIABADIAFATIAFAXIABARIAAADQgCAJgDAGIgFAEIgGACg");
	this.shape_73.setTransform(653.275,381.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E3D912").s().p("AguBpQgKgEgKgMQgHgJgEgUQgFgeAJghIAEgOQANgrAZgaIACgBQAagaAWAJQAYAHAIAkQAHAggJAlIALgHQAPgHAEAFQAEAEgIANIgPAUIgKAKQgOANgNAIQgIAKgLAKIgCADQgSARgSAAQgGAAgGgCg");
	this.shape_74.setTransform(647.0388,355.3764);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#18672E").s().p("AijB+IAAgEIgBgQIgFgXIgGgTIgBgDIACgCQAlgoA6gkIASgLIAUgOQBRgzA0gbIAJgEQAjgQATABIATAZIACADQgEAWgYAhQgWAlgpAmQgaAWgmAUQhRAyhDAVIgHACIgiAGQADgFACgJg");
	this.shape_75.setTransform(684,383.247);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#7DB42D").s().p("ABICKIgJgHIgdgcIgoguIgsgzQgBgCAAgBQgBgBAAAAQAAgBAAAAQABAAAAAAQgPgQgKgFIgBAAQgngngcg7IABgeIAPgRQAIANAKAGQAXAKAbgTIgQAOIACADQAQAjA6gFQAXAQALAMQAHAHAKAOIAeAvQAeAyAWApIAAAEIAGATIAGAWIAAAQIAAAEQgBAJgDAGIgFAEIgHACIgLABQgSgFgcgXg");
	this.shape_76.setTransform(652.6,381.375);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E3D912").s().p("Ag4BkQgJgGgJgMQgFgLgCgUQgBgeANgfIAFgOQATgpAdgWIABgCQAdgVAWALQAWAKAEAlQACAggOAkIANgGQAQgFACAFQAEAFgKAMIgRASIgLAIQgPAMgPAGQgJAKgLAIIgDACQgSANgPAAQgJAAgIgEg");
	this.shape_77.setTransform(647.1812,356.6334);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#18672E").s().p("AiiCAIAAgEIAAgQIgGgXIgGgTIAAgDIACgCQAigpA7glIARgLIAVgOQBQg0A1gcIAJgEQAigPATAAIAUAZIACADQgFAWgXAhQgXAlgoAmQgaAXglAUQhQAzhDAWIgHACIgiAHQADgFABgJg");
	this.shape_78.setTransform(683.4,383.0492);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#7DB42D").s().p("ABLCIIgKgHIgegbIgngtIgtgzQgFgGAEACQgPgQgLgDIAAgBQgpglgeg9IADgfIARgPQAGANAKAIIAAAAQAJAGALAAIABAAIAAAAQAJAAALgEIgLAFIABADQANAhBBgLQAXAQALALQAHAHAKAPIAgAuQAfAxAWApIABADIAGAUIAGAWIABAQIAAAEQgBAJgDAFIgFAFIgGACIgMABQgSgFgcgWgAhbiHQgLAAgJgGIAAAAQATALAbgMIgFADQgLAEgJAAIAAAAIgBAAg");
	this.shape_79.setTransform(651.925,381.675);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E3D912").s().p("AhABeQgJgHgHgNQgDgMAAgUQADgeARgdIAHgNQAYgnAfgSIABgBQAggSAUAOQAVANgBAlQgCAhgSAhIANgEQAQgDACAFQADAGgLAKIgUAQIgLAHQgRAJgPAEQgKAJgMAHIgDACIgFACIAFgCIgKAEIAFgCQgNAFgMAAQgLAAgKgFg");
	this.shape_80.setTransform(647.179,358.0489);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#18672E").s().p("AifCBIAAgDIgCgQIgFgXIgHgTIgBgDIACgCQAigqA7gmIARgLIAVgOQBOg2A2gbIAJgFQAigPAUAAIATAZIACADQgFAWgWAhQgYAkgnAnQgZAXglAVQhQA0hCAXIgHACIgiAIQADgGACgJg");
	this.shape_81.setTransform(682.8,382.8242);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7DB42D").s().p("AB3CkQgSgFgcgWIgKgIIgdgbIgnguIgsgzQgEgFAEAAQgQgQgKgEIgBgBQgogmgeg5IAAgcIANgTQAJAMALAEQAYAHAYgWIgKARIACAEQASAiA3gDQAXARALALQAHAIAKAOIAfAvQAeAxAVAqIABADIAGATIAGAXIABAQIgBADQAAAJgEAGIgFAFIgGACg");
	this.shape_82.setTransform(653.025,381.175);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E3D912").s().p("AguBpQgLgDgJgMQgHgKgEgUQgFgeAIggIAEgOQANgsAagaIABgBQAbgaAWAJQAXAHAJAkQAHAggKAlIAMgHQAPgHADAFQAEAEgHANIgQAUIgJAKQgOANgOAIQgGALgMAKIgDACQgRARgSAAQgGAAgGgCg");
	this.shape_83.setTransform(646.302,355.8264);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#18672E").s().p("AiiCAIABgEIgBgQIgGgWIgGgUIgBgDIACgCQAjgpA7glIARgLIAVgOQBQg0A1gcIAJgEQAigPATAAIAUAZIACADQgFAWgXAhQgXAkgoAnQgaAXglAUQhQA0hDAVIgHACIgiAHQAEgFAAgJg");
	this.shape_84.setTransform(683.925,382.6492);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#7DB42D").s().p("AB2CsQgSgGgcgWIgJgIIgdgbIgngvIgqg0QgFgGAEABQgQgRgKgEIAAgBQgngogdg0IgDgYIAIgWQALAJAMABQAZACASgcIABAWIACAEQAYAjAwAGQAWARALAMQAHAIAJAOIAeAvQAeAyAVApIAAAEIAGAUIAFAWIABAQIgBADQgBAKgDAFIgGAFIgGACg");
	this.shape_85.setTransform(654.05,380);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E3D912").s().p("AgUBuQgMgBgMgJQgJgHgJgSQgMgcgBgjIABgNQABguASgfIABgCQAUgfAYACQAXABASAhQAPAdAAAnIAJgKQANgLAFAEQAFAEgEAOIgKAXIgHALQgJAQgMALQgEANgJAMIgBAEQgRAagWAAIgDAAg");
	this.shape_86.setTransform(644.6763,354.4446);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#18672E").s().p("AikB+IABgEIgBgQIgFgWIgGgUIAAgDIABgCQAkgpA8gkIARgKIAVgOQBPgzA2gbIAJgEQAigQAUABIATAZIABACQgEAXgYAhQgXAkgoAmQgaAXglATQhSAzhDAVIgHACIgiAGQADgFABgJg");
	this.shape_87.setTransform(685.05,382.4742);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#7DB42D").s().p("AB0CzQgSgGgcgXIgJgIIgdgcIglgvIgrg1QgDgGACABQgPgRgJgFIgBgBQgmgpgagvIgEgUIABgXQAPAGALgCQAYgFAKggIANAZIAEAEQAdAiAqARQAWARAKANQAGAHAKAOIAcAvQAeAzAUAqIAAADIAFAUIAFAXIABAQIAAADQgCAJgEAGIgEAEIgHACg");
	this.shape_88.setTransform(655.2,378.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E3D912").s().p("AgNBoQgKgGgOgOQgSgYgKghIgDgOQgKgsAJgjIABgCQAKgjAZgDQAYgGAYAbQAVAYALAmIAGgMQAKgNAFACQAGACAAAPIgEAZIgDAMIgOAgQAAANgGAOIgBAEQgJAggZAFIgFAAQgIAAgMgEg");
	this.shape_89.setTransform(642.3561,353.9136);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#18672E").s().p("AilB9IAAgEIgBgQIgEgXIgGgTIAAgEIACgCQAkgnA8gkIARgKIAVgNQBRgyA1gbIAIgFQAjgPATABIATAZIACACQgFAXgXAhQgYAkgoAmQgaAXgnATQhSAxhDAUIgHACIgiAGQADgGACgIg");
	this.shape_90.setTransform(686.175,382.297);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#7DB42D").s().p("AByC3QgSgGgbgXIgJgIIgcgdIglgvIgpg1QgFgHADABQgPgSgKgGIAAgBQgkgqgXgqIgFgQIgEgVQAPAAALgEQAWgLACghIAZAYIAEAEQAiAfAnAdQAUARALANQAGAIAIANIAdAwQAcAzATArIABADIAFATIAEAYIAAAQIAAADQgBAJgEAGIgFAEIgGACg");
	this.shape_91.setTransform(656.275,378.05);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E3D912").s().p("AAWBmQgMgDgPgLQgYgSgSgeIgHgNQgVgnABgkIAAgCQABglAXgKQAWgMAdAVQAbASAVAhIACgNQAGgPAGAAQAGABAEAPIADAZIAAANIgFAiQACANgBAOIAAAEQgCAhgWALQgJAEgMAAIgFAAg");
	this.shape_92.setTransform(639.8494,354.2126);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#18672E").s().p("AinB7IAAgEIAAgQIgFgXIgEgUIgBgDIACgCQAlgnA8gjIASgKIAVgNQBRgwA1gbIAIgEQAigQAUABIATAaIACACQgFAWgYAhQgYAkgoAnQgaAWgnASQhUAwhCAUIgIABIgiAGQADgGACgIg");
	this.shape_93.setTransform(687.3,382.122);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7DB42D").s().p("ABzC4QgSgHgbgWIgKgIIgbgdIglgwIgqg1QgFgGADABQgOgSgLgGIAAgBQglgpgVgqIgGgOIgFgVQAOAAALgGQAVgNgBghIAdAYIAEADQAjAeAoAgQAUARALAMQAGAIAJAOIAcAvQAdA0ASAqIABADIAFAUIAFAWIABAQIgBAFQgCAIgDAFIgFAFIgGACg");
	this.shape_94.setTransform(656.8,377.65);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E3D912").s().p("AAhBjQgMgCgSgJQgYgQgUgcIgIgMQgZgmgDgkIAAgCQgCgkAWgMQAVgOAgASQAcAPAXAgIABgNQAFgRAGABQAGAAAFAOIAFAZIABANIgCAiQAEANAAAPIAAADQABAhgVAOQgKAFgNAAIgCAAg");
	this.shape_95.setTransform(639.1938,354.5081);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#18672E").s().p("AimB8IAAgEIAAgQIgFgXIgFgUIgBgDIACgCQAlgnA8gjIARgLIAVgMQBSgyA0gbIAJgEQAigPAUABIATAZIACADQgFAWgXAhQgYAkgpAmQgaAXgnASQhTAxhDATIgHACIgiAGQADgGACgIg");
	this.shape_96.setTransform(687.825,381.647);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#7DB42D").s().p("AB0C4QgSgGgbgXIgJgIIgcgdIgmgvIgqg1QgEgGACAAQgOgRgKgHIgBAAQgkgpgVgpIgGgMIgHgVQAOgCALgGQAUgPgFghIAiAXIAEADQAlAcAmAjQAVARALANIAOAVIAdAvQAdA0ATAqIABADIAFATIAFAXIAAAQIAAAEQgBAJgEAFIgFAFIgGACg");
	this.shape_97.setTransform(657.325,377.275);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E3D912").s().p("AALBYQgagOgXgaIgJgMQgbgkgGgjIgBgCQgFgkAVgOQATgPAiAOQAdAOAaAdIAAgNQADgRAGAAQAGAAAGAOIAIAYIACANIABAiQAFAMABAPIABADQAEAhgUAPQgKAGgPACQgMgBgSgHg");
	this.shape_98.setTransform(638.7673,354.8871);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#18672E").s().p("AimB8IAAgEIAAgQIgEgXIgGgTIgBgDIACgCQAkgoA9gjIARgLIAVgNQBRgyA1gaIAJgFQAigPATABIATAZIACADQgFAWgXAhQgYAkgpAmQgaAXgmATQhSAxhDAUIgIABIghAGQADgFABgJg");
	this.shape_99.setTransform(688.4,381.1742);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7DB42D").s().p("AB1C3QgSgGgbgWIgKgIIgcgdIgmgvIgqg1QgEgGACABQgPgSgKgGIAAgBQgkgqgUgnIgGgKIgJgUQAPgDAJgHQATgQgHghIAkAVIAFACQAlAbAoAmQAVARAKANQAHAIAIANIAdAvQAdAzAUAqIAAAEIAGATIAFAXIAAAQIAAADQgCAJgDAGIgFAFIgGABg");
	this.shape_100.setTransform(657.875,376.925);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E3D912").s().p("AATBWQgcgLgYgYIgKgLQgfghgJgiIgBgCQgIgkATgQQASgQAkALQAdAKAcAcIAAgOQABgQAGgBQAGgBAIANIAJAYIADANQAEASABAPQAFAMADAOIABAEQAHAhgTAQQgJAHgPADIgDAAQgLAAgQgGg");
	this.shape_101.setTransform(638.4257,355.3367);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#18672E").s().p("AilB8IAAgDIAAgQIgFgXIgGgTIAAgEIACgCQAkgnA8gkIARgLIAUgNQBRgzA1gaIAJgEQAjgQATABIATAZIACADQgFAWgXAhQgYAlgpAlQgaAXgmATQhSAxhDAVIgGABIgiAHQACgGACgJg");
	this.shape_102.setTransform(688.95,380.722);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#7DB42D").s().p("AB2C2QgSgFgcgXIgJgIIgcgcIgngvIgqg1QgEgGACAAQgPgRgKgGIAAgBQglgpgSgnIgFgJIgMgTQAPgDAJgJQARgSgKgfIAoASIAFADQAmAZApApQAUARALAMIAPAWIAdAvQAdAzAUApIABAEIAFATIAFAXIABAQIAAADQgCAJgDAGIgFAFIgHABg");
	this.shape_103.setTransform(658.425,376.625);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E3D912").s().p("AAaBUQgcgIgbgWIgKgKQgigegMgiIgBgCQgMgiATgSQAQgSAkAIQAfAIAeAZIgCgOQAAgQAGgCQAGgBAJAMIALAXIAEANQAGASACAPQAHALADAOIACAEQAKAfgRASQgJAJgPADIgGAAQgLAAgOgDg");
	this.shape_104.setTransform(638.1241,355.8457);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#18672E").s().p("AikB9IAAgDIAAgQIgGgXIgFgTIgBgEQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAjgnA7glIASgLIAUgNQBRgzA1gbIAJgEQAigPAUABIATAZIACACQgFAXgXAhQgYAkgpAmQgZAWgmAUQhSAyhCAVIgHABIgjAHQAEgGABgJg");
	this.shape_105.setTransform(689.5,380.247);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#7DB42D").s().p("AB3C1QgTgFgcgXIgJgIIgcgbQgUgWgTgZIgrg1QgDgGACAAQgPgRgKgHIgBAAQgkgpgSgmIgEgHIgNgSQAOgFAIgJQAPgTgMgfIArAQIAFACQAoAYApArQAVASAKAMQAHAIAIANIAdAvQAeAzAUApIABAEIAFATIAFAXIABAQIAAADQgCAJgDAGIgFAFIgGABg");
	this.shape_106.setTransform(659.025,376.325);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E3D912").s().p("AAhBUQgdgGgcgUIgLgJQglgbgPggIgBgCQgOghAQgTQAPgUAlAFQAfAFAgAWIgDgOQgBgQAFgCQAGgCAKAMIAOAVIAFANQAHARADAQQAIAJAFAOIACAEQAMAfgPATQgIAJgOAFQgGABgIAAIgSgBg");
	this.shape_107.setTransform(637.915,356.2352);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#18672E").s().p("AijB+IAAgEIgBgQIgFgXIgFgTIgCgDIADgCQAjgpA7gkIARgLIAVgNQBQgzA2gcIAJgEQAigPAUABIATAZIACACQgGAXgWAhQgZAkgoAmQgZAXgmATQhRAzhDAVIgHACIgiAGQADgFACgJg");
	this.shape_108.setTransform(690.05,379.772);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E3D912").s().p("AApBUQgegDgdgSIgNgHQgngYgRggIgBgBQgSggAPgUQANgVAlACQAgACAiATIgFgNQgDgRAGgCQAFgCALALIAQAUIAGALQAJASAEAPQAJAKAGAMIACADQAPAegNAVQgIAJgNAGQgIADgNAAIgKAAg");
	this.shape_109.setTransform(637.7788,356.5295);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#7DB42D").s().p("ABJCYIgJgIIgdgbIgngvIgrg1QgDgGABABQgPgSgKgGIAAgBQgmgpgPgkIgEgGIgPgRQAOgHAIgJQANgVgPgdIAvANIAEACQAoAVAsAwQAUARALAMIAPAVIAdAvIAyBcIABADIAFATIAGAXIABAQIAAAEQgCAJgDAFIgFAFIgHACIgLAAQgTgGgbgWg");
	this.shape_110.setTransform(659.6,376.075);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#18672E").s().p("AijB/IAAgEIgBgQIgFgXIgFgTIgBgDIACgCQAjgpA7gkIARgLIAUgOQBQg0A3gbIAIgEQAjgQATABIATAaIACACQgFAWgXAhQgYAkgoAmQgaAYglATQhRAzhCAWIgHABIgiAHQADgFABgJg");
	this.shape_111.setTransform(690.625,379.297);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#7DB42D").s().p("AB6C0QgTgFgcgWIgJgIIgegbIgnguIgsg1QgFgFADABQgPgSgKgGIgBgBQgmgogWgpIgGgNIgGgWQAOAAALgGQAUgOgDghIAfAXIAEACIBMA9QAWAQALAMQAGAIAIANIAfAvIAzBbIABADIAGATIAGAXIABAPIAAAFQgCAJgDAFIgFAFIgGACg");
	this.shape_112.setTransform(657.95,378.35);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E3D912").s().p("AAIBYQgagPgVgbIgJgMQgagkgEgkIgBgCQgDgkAVgNQAUgOAhAPQAdAPAYAeIABgNQAEgRAFAAQAGAAAGAOIAHAZIABANQACATgCAPQAEAMABAPIAAAEQADAhgUAOQgLAGgOAAQgMAAgSgJg");
	this.shape_113.setTransform(639.3441,355.9928);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#18672E").s().p("AihCBIAAgEIgBgQIgFgXIgGgTIgBgDIACgCQAigpA6gmIARgLIAUgOQBQg1A2gcIAJgEQAjgQATABIATAZIACACQgFAXgXAhQgYAlgnAlQgaAYgkATQhQA1hCAXIgHACIgiAHQADgFABgJg");
	this.shape_114.setTransform(688.975,381.3242);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#7DB42D").s().p("ABLCVIgJgIIgegaIgoguIgtg0QgEgGACABQgPgRgKgGIgBAAQgmgogcgvIgEgVIABgWQAOAFAMgBQAYgGALgfIAMAZIADADQAdAhAsAQQAVARALAMQAGAHAKAOIAeAuIA1BZIABAEIAGATIAHAWIABAQIAAAEQgBAJgEAFIgEAGIgHACIgKAAQgUgEgcgWg");
	this.shape_115.setTransform(656.5,381.125);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E3D912").s().p("AgNBoQgKgFgOgPQgSgYgKghIgDgOQgKgrAKgjIAAgCQAKgjAZgEQAYgFAYAaQAVAZALAlIAGgMQAKgNAFACQAGACAAAPIgDAZIgEAMQgGASgIAOQAAANgGAOIAAAEQgLAfgYAGIgFAAQgJAAgLgEg");
	this.shape_116.setTransform(643.1644,356.5264);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#18672E").s().p("AifCDIAAgEIgBgQIgGgWIgGgTIgBgEIACgCQAigpA5gnIAQgMIAVgOQBOg3A3gcIAJgEQAigQAUABIATAZIACADQgFAWgWAhQgYAlgnAlQgaAYgjAUQhQA2hBAYIgHACIgiAIQAEgFAAgJg");
	this.shape_117.setTransform(687.325,383.3438);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#7DB42D").s().p("ABMCMIgKgHIgegaIgpgtIgtgzQgFgGADAAQgQgPgKgHIgBAAQgngngdg3IgCgbIALgTQALAKALADQAZAEAVgZIgFAUIACAEQAVAkA0ABQAVAQALAMQAHAIAJANIAfAuIA3BYIABAEIAGATIAHAWIABAQIAAADQAAAKgDAFIgGAFIgFADIgMAAQgTgEgcgWg");
	this.shape_118.setTransform(655,384.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E3D912").s().p("AgjBsQgLgDgLgKQgIgJgGgTQgIgdADgiIADgNQAHgtAXgdIABgBQAXgdAXAGQAZAEAMAjQAKAfgEAlIAKgHQAPgJAEAEQAEAEgGANIgNAWIgIAKQgMAPgNAKQgFALgLALIgCADQgRAWgUAAIgIgBg");
	this.shape_119.setTransform(646.8682,358.9816);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#18672E").s().p("AidCFIAAgEIgBgQIgHgWIgGgTIgBgDIACgDQAhgqA5goIAPgMIAVgOQBMg4A5gdIAJgEQAigQAUABIATAZIACACQgFAWgWAiQgYAkgnAmQgZAYgjAVQhNA3hCAZIgGADIgiAIQADgFAAgJg");
	this.shape_120.setTransform(685.7,385.3742);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#7DB42D").s().p("ABNCTIgKgHIgegaQgVgUgUgZIgtg0QgFgGADABQgPgRgLgFIAAgBQgngngdgvIgFgWIADgWQANAGAMgBQAZgEALggIALAZIADADQAdAhArAOQAWAQAMAMQAGAHAKANIAfAvIA2BYIABADIAHATIAGAXIABAQIABADQgCAJgCAGIgFAFIgGACIgMABQgSgEgdgWg");
	this.shape_121.setTransform(621.775,388.025);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#18672E").s().p("AidCEIAAgDIgCgQIgGgXIgGgTIgBgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAhgqA4goIARgMIAUgOQBNg4A4gcIAJgFQAigPAUAAIATAZIACADQgFAWgWAhQgYAkgnAmQgYAYgjAVQhPA3hBAZIgHACIgiAJQADgGABgJg");
	this.shape_122.setTransform(652.625,389.8242);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E3D912").s().p("AgRBoQgLgGgMgPQgSgYgJgiIgDgOQgIgsALgiIAAgCQAMgjAZgDQAYgFAXAcQAVAaAJAlIAHgLQAKgOAFADQAGACgBAPIgEAZIgEAMQgHASgIANQgBANgGAOIgBAEQgLAfgZAEIgEABQgJAAgLgFg");
	this.shape_123.setTransform(608.7592,363.4588);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E3D912").s().p("AAfBkQgMgCgRgKQgZgQgTgdIgIgMQgYgmgBgkIgBgCQgBglAWgLQAVgNAhASQAbAQAWAgIACgNQAFgQAFAAQAGAAAFAPIAFAZIABANQAAASgDAQQAEANgBAOIAAAEQAAAhgVANQgKAFgNAAIgCAAg");
	this.shape_124.setTransform(570.1953,369.5917);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#7DB42D").s().p("ABPCWIgKgHIgegaIgpgtIgtg0QgEgGACABQgPgQgLgGIAAgBQgngngagpIgGgPIgFgWQAPABAKgGQAVgMAAghIAbAXIAEADQAkAcApAaQAWAQALAMIAQAVIAfAuIA2BZIABADIAHATIAGAXIABAQIAAAEQAAAJgDAFIgGAFIgGACIgLABQgTgEgcgWg");
	this.shape_125.setTransform(588.475,392.125);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#18672E").s().p("AieCEIAAgEIgBgQIgGgWIgGgTIgCgDQABgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAggqA6goIAQgMQAJgHALgHQBNg4A5gcIAJgEQAhgQAVABIATAZIABACQgEAWgXAiQgYAkgnAmQgZAXgjAVQhPA3hBAZIgHACIghAJQADgGAAgJg");
	this.shape_126.setTransform(619.55,394.2992);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#7DB42D").s().p("ABPCWIgKgIIgdgaQgVgUgUgZIgtg0QgFgGADABQgPgRgLgFIAAAAQgngngVglIgFgJIgNgSQAOgFAIgIQAQgTgMggIAqAQIAEACQApAXAqAnQAXAQALAMQAHAHAJAOIAfAuIA2BZIABADIAGATIAGAXIACAPIAAAEQgBAJgDAGIgFAFIgGACIgMABQgSgFgdgVg");
	this.shape_127.setTransform(563.375,394.325);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E3D912").s().p("AAgBTQgegGgagUIgMgJQgjgdgPggIgBgBQgOgiARgTQAPgSAkAEQAgAGAfAWIgCgNQgCgQAGgCQAGgCAJAMIAOAWIAFAMQAHASACAPQAIAKAFAOIABADQAMAggPATQgIAIgOAFQgGABgHAAQgIAAgLgCg");
	this.shape_128.setTransform(541.7207,374.7049);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#18672E").s().p("AieCEIAAgEIgBgQIgGgWIgHgTIgBgEQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAigqA5gnIAQgMIAUgOQBOg4A4gcIAJgEQAigPAUAAIATAZIACADQgFAWgXAhQgYAkgmAmQgaAYgjAVQhPA2hBAZIgHACIgiAIQAEgFAAgJg");
	this.shape_129.setTransform(594.525,396.4992);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#7DB42D").s().p("ABRCVIgKgHIgegbIgqgsIgugzQgBgCAAgBQgBgBAAAAQAAgBAAAAQABAAAAABQgQgRgKgFIgBgBQgnglgbgpIgHgPIgGgVQAPAAALgGQAVgNgBghIAbAWIAFADQAkAcApAZQAXAPALANIARAUIAgAuIA3BYIAAADIAIATIAGAXIACAPIAAAEQgBAJgDAGIgFAFIgGACIgLABQgTgFgdgUg");
	this.shape_130.setTransform(542.4,387.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#18672E").s().p("AicCFIAAgEIgCgPIgGgXIgHgTIgBgDIACgCQAhgqA5gpIAPgMIAVgPQBMg4A6gdIAIgEQAigPATAAIAUAZIACADQgFAWgWAhQgYAkgmAmQgaAYgiAVQhNA4hCAaIgHACIghAJQADgGAAgJg");
	this.shape_131.setTransform(573.55,389.4742);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E3D912").s().p("AADBYQgYgQgUgcIgIgMQgZgmgCgkIgBgCQgBgkAVgMQAVgOAhASQAbAQAXAfIACgNQAEgQAGAAQAGAAAFAPIAFAZIABANQABASgDAPQAEANAAAPIAAAEQABAhgVANQgKAFgPAAQgMgBgSgKg");
	this.shape_132.setTransform(523.6974,365.531);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E3D912").s().p("AgMBoQgLgFgNgPQgTgXgKghIgDgPQgKgrAJgjIABgCQAKgjAYgEQAYgGAYAcQAWAYALAlIAGgMQAJgNAGACQAGACAAAPIgEAZIgDAMQgGASgHAOQgBANgFAOIgBAEQgKAggYAFIgGAAQgIAAgLgEg");
	this.shape_133.setTransform(508.0061,366.4386);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#7DB42D").s().p("ABRCRIgKgHIgegaIgrgsIgugyQgBgBgBgBQAAgBgBgBQAAAAABgBQAAAAABABQgRgQgKgFIAAAAQgpglgfgvIgGgVIABgWQAOAFAMgCQAZgEAJghIAMAYIAEAEQAdAgAuAKQAXAPALAMQAHAHAKAOIAgAtQAhAvAYAoIABADIAIATIAGAWIACAQIAAAEQgBAJgDAFIgEAGIgGACIgLABQgTgEgegUg");
	this.shape_134.setTransform(522.05,390.375);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#18672E").s().p("AiaCHIAAgEIgCgPIgGgXIgIgSIgBgEIACgCQAhgqA3gqIAQgMIAUgPQBLg7A6gcIAJgEQAigQAUABIATAZIACACQgFAWgWAiQgYAkgmAlQgYAYgiAWQhOA5hAAbIgHACIgiAKQADgGABgJg");
	this.shape_135.setTransform(553.05,391.4492);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#7DB42D").s().p("ABTCJIgLgHIgfgZIgqgrIgwgyQgBgBAAgBQgBgBAAAAQAAgBAAAAQAAAAABAAQgQgQgLgDIAAgBQgqgkghg0IgDgbIAJgVQALAKAMACQAYADAUgaIgEAUIACAEQAYAhA0gCQAXAPAMALQAHAHAKANIAhAtIA6BWIABADIAIATIAHAWIACAQIAAAEQAAAJgDAFIgFAGIgGACIgLABQgTgDgdgUg");
	this.shape_136.setTransform(500.025,391.175);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#E3D912").s().p("AgcBtQgMgCgLgKQgJgIgIgSQgJgdACgiIABgOQAFgtAUgeIABgCQAWgeAYAFQAXADAPAhQANAegCAoIAKgKQANgJAEADQAFAEgFAOIgLAWIgIALQgLAPgMALQgFAMgKAMIgCADQgRAYgVAAIgFgBg");
	this.shape_137.setTransform(490.5142,366.5795);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#18672E").s().p("AiYCJIAAgEIgDgQIgHgWIgHgTIgBgDIABgCQAhgsA2gqIARgMIASgQQBMg7A6gdIAJgEQAigQAUABIATAZIACACQgFAWgXAiQgWAkgmAlQgaAYggAXQhMA6hAAcIgHACIghAKQADgFAAgJg");
	this.shape_138.setTransform(530.95,391.1742);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#7DB42D").s().p("ABTCJIgKgHIgfgZIgrgrIgwgxQgBgCAAgBQgBgBAAgBQAAAAAAAAQAAAAABAAQgQgPgLgEIAAgBQgqgkghg0IgDgbIAJgUQAMAJALACQAZAEATgcIgEAVIADADQAWAjA1gEQAXAQAMALIASAVIAgAtIA6BVIABAEIAIASIAHAWIACAQIAAAEQAAAJgDAFIgFAGIgGADIgLAAQgTgDgdgUg");
	this.shape_139.setTransform(475.825,394.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E3D912").s().p("AgcBtQgLgCgMgJQgIgJgIgSQgLgdADgiIABgOQAFgtAVgeIABgBQAVgeAYAEQAYADAPAiQAMAegCAnIAKgJQANgKAEAEQAGAEgGANIgLAXIgIAKQgMAQgLAKQgFAMgKAMIgCADQgQAXgWAAIgFAAg");
	this.shape_140.setTransform(466.3385,370.2907);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#18672E").s().p("AiYCJIAAgEIgCgQIgIgWIgHgTIgBgDIACgCQAfgsA3gqIAQgMIATgQQBMg7A6gdIAJgEQAjgQATABIATAZIACACQgEAWgXAhQgXAlgmAlQgYAYgiAXQhMA6hAAcIgGACIgiAKQADgFAAgJg");
	this.shape_141.setTransform(506.75,394.9242);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#7DB42D").s().p("ABSCJIgKgHIgegZIgrgrIgvgxQgCgCAAgBQgBgBAAAAQAAgBAAAAQABAAABAAQgSgQgJgDIgBgBQgqgkghg0IgDgbIAJgUQALAJALACQAaAEATgbIgEAUIACAEQAYAiA0gDQAXAPAMALQAHAHAKAOIAhAsIA6BWIACADIAHATIAHAWIACAQIABAEQgBAJgDAGIgEAFIgHACIgLABQgSgDgfgUg");
	this.shape_142.setTransform(451.65,398.625);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#18672E").s().p("AiYCJIAAgEIgCgQIgHgWIgIgTIgBgDIACgCQAfgrA3gqIAQgNIAUgPQBLg7A6geIAJgEQAigQAUABIATAZIACACQgFAWgWAiQgXAlgmAkQgZAZggAWQhNA7hAAbIgHADIghAKQADgGAAgJg");
	this.shape_143.setTransform(482.575,398.6471);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E3D912").s().p("AgcBtQgLgCgMgJQgIgJgIgSQgKgdACgiIABgOQAGgtAUgeIABgCQAVgdAZAEQAXADAPAiQAMAegCAnIAKgKQANgJAFADQAEAEgFAOIgLAWIgIALQgLAPgMALQgFANgKALIgBADQgRAXgWAAIgFAAg");
	this.shape_144.setTransform(442.1464,374.0458);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7DB42D").s().p("ABTCJIgLgHIgfgZIgqgrIgwgyQgBgBgBgBQAAgBAAAAQAAgBAAAAQAAAAABAAQgQgQgLgDIAAgBQgqgkghg0IgDgbIAJgVQALAKAMACQAYADAUgaIgEAUIACAEQAYAhA0gCQAXAPAMALQAHAHAKANIAhAtIA6BWIABADIAIATIAHAWIACAQIAAAEQAAAJgDAFIgFAGIgGACIgLABQgTgDgdgUg");
	this.shape_145.setTransform(427.475,402.375);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#18672E").s().p("AiYCJIAAgEIgCgQIgIgWIgHgTIgBgDIABgCQAhgsA3gqIAQgMIATgQQBLg7A6gdIAJgEQAigQAUABIATAZIACACQgFAWgXAiQgXAkglAlQgaAYggAXQhLA6hBAcIgHACIghAKQACgFABgJg");
	this.shape_146.setTransform(458.4,402.3742);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{x:635.3172,y:373.9612}},{t:this.shape,p:{x:659.0531,y:391.5537}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_1,p:{x:633.3172,y:378.3112}},{t:this.shape,p:{x:657.0531,y:395.9037}}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_138},{t:this.shape_137,p:{x:490.5142,y:366.5795}},{t:this.shape_136}]},1).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_144},{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_137,p:{x:417.9642,y:377.7795}}]},1).wait(1));

	// фон
	this.instance = new lib.фон();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,640,360);
// library properties:
lib.properties = {
	id: '3CC6DED880440548AB5BC8BB82B78CCC',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/лунтик 6 зд_atlas_1.png", id:"лунтик 6 зд_atlas_1"}
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
an.compositions['3CC6DED880440548AB5BC8BB82B78CCC'] = {
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