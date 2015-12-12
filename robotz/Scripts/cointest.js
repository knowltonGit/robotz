// Copyright 2013 William Malone (www.williammalone.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


$(function () {

    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
    // requestAnimationFrame polyfill by Erik MÃ¶ller. fixes from Paul Irish and Tino Zijdel
    // MIT license 

 
    var canvas;  
    canvas = document.getElementById("myCanvas");
    canvas.width = 640;
    canvas.height = 640;

    i1 = new Image();
    i1.addEventListener("load", gameLoop);
    i1.src = "images/spritesheet.png";
        
    i2 = new Image();
    i2.addEventListener("load", gameLoop);
    i2.src = "images/spritesheet2.png";
        
    // Create sprite sheet

    var powerSource1 = {
        pwImage : i1,
        numFrames : 4,
        ticks : 32,
        width : 256,
        height : 64};

    var powerSource2 = {
        pwImage : i2,
        numFrames : 4,
        ticks : 32,
        width : 256,
        height : 64};
       
    // Create sprite
    var all_sprites = [sprite({
        context: canvas.getContext("2d"),
        width: powerSource1.width,
        height: powerSource1.height,
        image: powerSource1.pwImage,
        numberOfFrames: powerSource1.numFrames,
        ticksPerFrame: powerSource1.ticks
    }),sprite({
        context: canvas.getContext("2d"),
        width: powerSource2.width,
        height: powerSource2.height,
        image: powerSource2.pwImage,
        numberOfFrames: powerSource2.numFrames,
        ticksPerFrame: powerSource2.ticks
    })];

    function gameLoop() {

        for (j = 0; j < 2000; j++)
        {
            for (k = 0; k < 1000; k++)
            { }
        }

        window.requestAnimationFrame(gameLoop);
        
        //for (i = 0; i < all_sprites.length; i++) {         

            
  
            
        //}

        for (m = 0; m < 1000; m++) {
            for (n = 0; n < 1000; n++)
            { }
        }

        all_sprites[0].context.clearRect(0, 0, 640, 640);

        for (i = 0; i < all_sprites.length; i++) {

            
           
            var xx = 50 + (i * 100);
            var yy = 300 + (i * 25);

           // all_sprites[i].render(xx, yy);

            for (k = 0; k < 25; k++) {
                all_sprites[i].update();
                all_sprites[i].render(xx + k, yy + k);

               
            //    all_sprites[i].context.clearRect(0, 0, 640, 640);

               
            }


        }


    }





  

    var GLOBAL_X = 100;
    var GLOBAL_Y = 100;
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];

    function sprite(options) {
        var that = {},
		frameIndex = 0,
		tickCount = 0,
		ticksPerFrame = options.ticksPerFrame || 0,
		numberOfFrames = options.numberOfFrames || 1;

        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;

        that.update = function () {
            tickCount += 1;

            if (tickCount > ticksPerFrame) {

                tickCount = 0;

                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };

        that.render = function (x, y) {
            // Clear the canvas
            //that.context.clearRect(0, 0, 640, 640);

             
            // Draw the animation
            that.context.drawImage(
                that.image,
                frameIndex * that.width / numberOfFrames,
                0,
                that.width / numberOfFrames,
                that.height,
                x,
                y,
                that.width / numberOfFrames,
                that.height);
        };

  //      console.log(frameIndex);

        return that;
    }

  

    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                                   || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }  

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };  

    //var point = new Array();
    //point[0] = { x: 50, y: 50 };
    //point[1] = { x: 100, y: 100 };
    //point[2] = { x: 150, y: 150 };   
});
