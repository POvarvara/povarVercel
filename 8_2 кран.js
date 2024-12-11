(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"8_2 кран_atlas_1", frames: [[0,537,826,270],[0,0,581,535]]}
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
	this.initialize(ss["8_2 кран_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["8_2 кран_atlas_1"]);
	this.gotoAndStop(1);
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AQ3AAQAAG/k8E8Qk8E7m/AAQm9AAk8k7Qk8k8AAm/QAAm9E8k9QE8k7G9AAQG/AAE8E7QE8E9AAG9g");
	this.shape.setTransform(0.0065,0.0513,0.7511,0.6585);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ar6L7Qk8k9AAm+QAAm+E8k8QE9k7G9gBQG+ABE9E7QE7E8AAG+QAAG+k7E9Qk9E7m+ABQm9gBk9k7g");
	this.shape_1.setTransform(0.0065,0.0513,0.7511,0.6585);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-82,-72,164,144.1), null);


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
	this.shape.graphics.f("#0066FF").s().p("AiIKCQhKibAmmlQAflgBonqIApCUQAxC3AmCqQB6IegjDSQgpD4hiAsQgTAIgTAAQhIAAhBiHg");
	this.shape.setTransform(18.6054,77.7421);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,37.2,155.5), null);


// stage content:
(lib._82кран = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://goo.su/mEFfCx");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34));

	// Layer_4
	this.movieClip_1 = new lib.Symbol2();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(503.2,287.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AiRCSQg8g9AAhVQAAhVA8g8QA8g8BVAAQBWAAA7A8QA9A8AABVQAABVg9A9Qg7A8hWAAQhVAAg8g8g");
	this.shape.setTransform(500.95,136.1,0.4649,0.4747,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.movieClip_1}]}).wait(34));

	// Layer_6
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(277.2,141.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34));

	// Layer_3
	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(306.6,246.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34));

	// Layer_12
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(348.4,381.35,1.7779,0.8765,0,0,0,18.6,77.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).wait(1).to({scaleX:1.6396,scaleY:0.8572,y:448.8},0).wait(1).to({scaleX:1.5014,scaleY:0.8379,y:516.3},0).wait(1).to({scaleX:1.3632,scaleY:0.8186,y:583.75},0).wait(1).to({scaleX:1.8169,scaleY:0.7993,x:348.6,y:732.9},0).wait(1).to({scaleX:2.2706,scaleY:0.78,x:348.8,y:882.05},0).wait(1).to({scaleX:8.9704,scaleY:0.7607,y:976.2},0).wait(1).to({scaleX:15.6702,scaleY:0.7414,y:1070.35},0).wait(1).to({scaleX:22.3699,scaleY:0.7221,x:348.85,y:1164.5},0).wait(1).to({scaleX:29.0697,scaleY:0.7028,x:348.35},0).wait(2));

	// Layer_11
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(339.65,409.3,1,1,0,0,0,18.6,77.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).wait(1).to({regY:77.7,scaleX:1.1556,scaleY:0.975,y:437.1},0).wait(1).to({scaleX:1.3112,scaleY:0.95,y:465},0).wait(1).to({scaleX:1.4667,scaleY:0.925,y:492.95},0).wait(1).to({scaleX:1.6223,scaleY:0.9,y:520.85},0).wait(1).to({scaleX:1.7779,scaleY:0.8751,x:339.6,y:548.75},0).wait(1).to({scaleX:1.9335,scaleY:0.8501,y:576.7},0).wait(1).to({scaleX:2.0891,scaleY:0.8251,x:338.05,y:636.1},0).wait(1).to({scaleX:2.2446,scaleY:0.8001,x:336.5,y:695.55},0).wait(1).to({scaleX:2.4002,scaleY:0.7751,x:335,y:755},0).wait(1).to({scaleX:2.5558,scaleY:0.7501,x:333.45,y:814.45},0).wait(1).to({scaleX:5.0316,scaleY:0.7251,x:333.5,y:861.15},0).wait(1).to({scaleX:7.5075,scaleY:0.7001,x:333.6,y:907.85},0).wait(1).to({scaleX:9.9833,scaleY:0.6751,x:333.65,y:954.6},0).wait(1).to({scaleX:12.4591,scaleY:0.6502,x:333.7,y:1001.3},0).wait(1).to({scaleX:14.935,scaleY:0.6252,x:333.8,y:1048.05},0).wait(1).to({scaleX:17.4108,scaleY:0.6002,x:333.85,y:1094.75},0).wait(1).to({scaleX:19.8867,scaleY:0.5752,x:334,y:1141.45},0).wait(1).to({scaleX:22.3625,scaleY:0.5502,y:1158.9},0).wait(1).to({scaleX:24.8383,scaleY:0.5252,y:1176.3},0).wait(1).to({scaleX:27.3142,scaleY:0.5002,y:1193.75},0).wait(1).to({scaleX:29.79,scaleY:0.4752,y:1211.25},0).wait(1).to({scaleX:25.3858,scaleY:1.2477,y:1207.2},0).wait(1));

	// капли
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(345.55,349.4,1,1,0,0,0,18.6,77.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:77.7,scaleX:1.2597,scaleY:1.0518,x:345.25,y:460.6},0).wait(1).to({scaleX:1.5194,scaleY:1.1037,x:344.95,y:571.85},0).wait(1).to({scaleX:1.7791,scaleY:1.1555,x:344.65,y:683.15},0).wait(1).to({scaleX:2.0387,scaleY:1.2073,x:344.35,y:794.4},0).wait(1).to({scaleX:2.2984,scaleY:1.2592,x:344.1,y:905.7},0).wait(1).to({scaleX:2.5581,scaleY:1.0598,x:343.8,y:1017},0).wait(1).to({scaleX:2.8178,scaleY:0.8604,x:343.5,y:1128.3},0).wait(1).to({scaleX:3.0775,scaleY:0.6611,x:343.25,y:1239.6},0).wait(1).to({scaleX:7.2924,scaleY:0.4617,x:343.05},0).wait(1).to({scaleX:11.5074,scaleY:0.2623,x:342.85,y:1239.65},0).wait(1).to({scaleX:15.7224,x:342.65},0).wait(1).to({scaleX:19.9374,x:342.5},0).wait(1).to({scaleX:24.1523,x:342.3},0).wait(1).to({scaleX:28.3673,x:342.1},0).wait(20));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(140.3,766.4,749.3,537.9);
// library properties:
lib.properties = {
	id: 'D06DD19749F8AC4BB8DDAE3D34DBCEEA',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/8_2 кран_atlas_1.png", id:"8_2 кран_atlas_1"}
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
an.compositions['D06DD19749F8AC4BB8DDAE3D34DBCEEA'] = {
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