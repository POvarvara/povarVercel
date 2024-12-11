(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"задание 22_HTML5 Canvas_atlas_1", frames: [[0,0,784,800]]}
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



(lib.бабаочка = function() {
	this.initialize(ss["задание 22_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.обезьняка = function() {
	this.initialize(img.обезьняка);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5000,5000);


(lib.птичка = function() {
	this.initialize(img.птичка);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8000,7101);


(lib.фон = function() {
	this.initialize(img.фон);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,4436);// helper functions:

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


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.птичка();
	this.instance.setTransform(129.55,-88.25,0.0324,0.0249,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.5,-88.2,259.1,176.5);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.птичка();
	this.instance.setTransform(129.55,-88.25,0.0324,0.0249,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.5,-88.2,259.1,176.5);


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
	this.instance = new lib.обезьняка();
	this.instance.setTransform(0,0,0.0242,0.0242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,121.2,121.2), null);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.бабаочка();
	this.instance.setTransform(-69.3,-70.7,0.1768,0.1768);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.3,-70.7,138.7,141.5);


// stage content:
(lib.задание22_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// бабаочка
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(1157.4,431.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.424,scaleY:1.424,guide:{path:[1157.5,431.9,1157.5,431.9,1157.5,431.9,1119.7,411.9,1070,402.4,1031.2,395,977,392.8,960.2,392.2,949.7,392.6,934.7,393.1,922.7,395.8,908.2,399,892.2,406.6,879.9,412.5,863.8,422.6,844.3,434.8,818,453.6,788.2,475.4,773.2,486.1,757.6,497.3,747.9,503.1,733.6,511.7,720.8,516.2,708.3,520.6,691.9,522.8,681.9,524.2,662.4,525.5,637.5,527.3,624.8,526.9,603.9,526.2,588.3,520.7,577.6,516.9,564.1,508.9,548.8,499.3,541.1,494.6,510.5,475.9,475.9,464.4,428.8,448.9,393.1,455.4,364,460.7,336.8,481.1,313.2,498.8,292.7,526.5,281.8,541.4,280.9,542.5,273.9,551.3,267.3,556.6,260.9,561.7,251,566.5,249.7,567.2,238.6,572.1]}},49).wait(1));

	// обезьянка
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(1124.7,210,1,1,0,0,0,60.6,60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.0178,scaleY:1.0178,x:1118,y:184.8},0).wait(1).to({scaleX:1.0356,scaleY:1.0356,x:1107.75,y:160.75},0).wait(1).to({scaleX:1.0533,scaleY:1.0533,x:1093.95,y:138.65},0).wait(1).to({scaleX:1.0711,scaleY:1.0711,x:1076.9,y:118.85},0).wait(1).to({scaleX:1.0889,scaleY:1.0889,x:1057.3,y:101.65},0).wait(1).to({scaleX:1.1067,scaleY:1.1067,x:1035.65,y:87},0).wait(1).to({scaleX:1.1244,scaleY:1.1244,x:1012.65,y:74.75},0).wait(1).to({scaleX:1.1422,scaleY:1.1422,x:988.55,y:64.55},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:963.85,y:56.15},0).wait(1).to({scaleX:1.1778,scaleY:1.1778,x:938.65,y:49.3},0).wait(1).to({scaleX:1.1955,scaleY:1.1955,x:913.15,y:43.8},0).wait(1).to({scaleX:1.2133,scaleY:1.2133,x:887.4,y:39.45},0).wait(1).to({scaleX:1.2311,scaleY:1.2311,x:865.55,y:58.75},0).wait(1).to({scaleX:1.2489,scaleY:1.2489,x:843.25,y:77.45},0).wait(1).to({scaleX:1.2667,scaleY:1.2667,x:820.45,y:95.65},0).wait(1).to({scaleX:1.2844,scaleY:1.2844,x:797.1,y:113.1},0).wait(1).to({scaleX:1.3022,scaleY:1.3022,x:772.35,y:128.5},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:745.65,y:140.15},0).wait(1).to({scaleX:1.3378,scaleY:1.3378,x:718.35,y:150.45},0).wait(1).to({scaleX:1.3555,scaleY:1.3555,x:690.6,y:159.2},0).wait(1).to({scaleX:1.3733,scaleY:1.3733,x:661.9,y:164.35},0).wait(1).to({scaleX:1.3911,scaleY:1.3911,x:632.8,y:164.25},0).wait(1).to({scaleX:1.4089,scaleY:1.4089,x:603.75,y:162.5},0).wait(1).to({scaleX:1.4266,scaleY:1.4266,x:574.75,y:158.95},0).wait(1).to({scaleX:1.4444,scaleY:1.4444,x:546.6,y:151.9},0).wait(1).to({scaleX:1.4622,scaleY:1.4622,x:522.55,y:135.4},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:500.95,y:115.85},0).wait(1).to({scaleX:1.4977,scaleY:1.4977,x:481.2,y:94.4},0).wait(1).to({scaleX:1.5155,scaleY:1.5155,x:463.5,y:71.3},0).wait(1).to({scaleX:1.5333,scaleY:1.5333,x:448.05,y:46.55},0).wait(1).to({scaleX:1.5511,scaleY:1.5511,x:428.8,y:47.15},0).wait(1).to({scaleX:1.5689,scaleY:1.5689,x:404.6,y:63.45},0).wait(1).to({scaleX:1.5866,scaleY:1.5866,x:378.6,y:76.55},0).wait(1).to({scaleX:1.6044,scaleY:1.6044,x:350.85,y:85.2},0).wait(1).to({scaleX:1.6222,scaleY:1.6222,x:321.85,y:88.1},0).wait(1).to({scaleX:1.64,scaleY:1.64,x:293,y:84.6},0).wait(1).to({scaleX:1.6577,scaleY:1.6577,x:265.45,y:75.05},0).wait(1).to({scaleX:1.6755,scaleY:1.6755,x:240.1,y:60.75},0).wait(1).to({scaleX:1.6933,scaleY:1.6933,x:217.05,y:42.9},0).wait(1).to({scaleX:1.7111,scaleY:1.7111,x:196.1,y:22.6},0).wait(1).to({scaleX:1.7288,scaleY:1.7288,x:186.9,y:49},0).wait(1).to({scaleX:1.7466,scaleY:1.7466,x:177.75,y:75.45},0).wait(1).to({scaleX:1.7644,scaleY:1.7644,x:168.5,y:101.85},0).wait(1).to({scaleX:1.7822,scaleY:1.7822,x:159.35,y:128.3},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:150.15,y:154.75},0).wait(1).to({scaleX:1.8177,scaleY:1.8177,x:140.95,y:181.15},0).wait(1).to({scaleX:1.8355,scaleY:1.8355,x:131.75,y:207.6},0).wait(1).to({scaleX:1.8533,scaleY:1.8533,x:122.55,y:234},0).wait(1).to({scaleX:1.8711,scaleY:1.8711,x:113.4,y:260.45},0).wait(1));

	// птичка
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(162.5,186.25);

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(1076.5,581.25,1.3374,1.4413);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.instance_3}]},25).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.2193,scaleY:1.3227,rotation:44.9995,x:610.15,y:379.7},24).to({_off:true,scaleX:1.3374,scaleY:1.4413,rotation:0,x:1076.5,y:581.25},25).wait(1));

	// фон
	this.instance_4 = new lib.фон();
	this.instance_4.setTransform(0,-34,0.2175,0.1699);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,279,664.7,440.79999999999995);
// library properties:
lib.properties = {
	id: '7DE223F8E3C00749ABE5D9F54C1DDCA2',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/обезьняка_.png", id:"обезьняка"},
		{src:"images/птичка_.png", id:"птичка"},
		{src:"images/фон_.jpg", id:"фон"},
		{src:"images/задание 22_HTML5 Canvas_atlas_1.png", id:"задание 22_HTML5 Canvas_atlas_1"}
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
an.compositions['7DE223F8E3C00749ABE5D9F54C1DDCA2'] = {
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