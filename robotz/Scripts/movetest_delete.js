﻿$(function () {


    var canvas = document.getElementById('myCanvas'),
    context = canvas.getContext('2d'),
    paused = false,
    discs = [
      {
          x: 150,
          y: 250,
          lastX: 150,
          lastY: 250,
          velocityX: -3.2,
          velocityY: 3.5,
          radius: 25,
          innerColor: 'rgba(255,255,0,1)',
          middleColor: 'rgba(255,255,0,0.7)',
          outerColor: 'rgba(255,255,0,0.5)',
          strokeStyle: 'gray'
      },

      {
          x: 50,
          y: 150,
          lastX: 50,
          lastY: 150,
          velocityX: 2.2,
          velocityY: 2.5,
          radius: 25,
          innerColor: 'rgba(100,145,230,1.0)',
          middleColor: 'rgba(100,145,230,0.7)',
          outerColor: 'rgba(100,145,230,0.5)',
          strokeStyle: 'blue'
      },

      {
          x: 150,
          y: 75,
          lastX: 150,
          lastY: 75,
          velocityX: 1.2,
          velocityY: 1.5,
          radius: 25,
          innerColor: 'rgba(255,0,0,1.0)',
          middleColor: 'rgba(255,0,0,0.7)',
          outerColor: 'rgba(255,0,0,0.5)',
          strokeStyle: 'orange'
      },
    ],
   numDiscs = discs.length;
 

    // Functions.....................................................

    function drawBackground() {
        var STEP_Y = 12,
            i = context.canvas.height;

        context.strokeStyle = 'lightgray';
        context.lineWidth = 0.5;

        while (i > STEP_Y * 4) {
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(context.canvas.width, i);
            context.stroke();
            i -= STEP_Y;
        }

        context.save();

        context.strokeStyle = 'rgba(100,0,0,0.3)';
        context.lineWidth = 1;

        context.beginPath();

        context.moveTo(35, 0);
        context.lineTo(35, context.canvas.height);
        context.stroke();

        context.restore();
    }

    function update() {
        var disc = null;

        for (var i = 0; i < numDiscs; ++i) {
            disc = discs[i];

            if (disc.x + disc.velocityX + disc.radius > context.canvas.width ||
                disc.x + disc.velocityX - disc.radius < 0)
                disc.velocityX = -disc.velocityX;

            if (disc.y + disc.velocityY + disc.radius > context.canvas.height ||
                disc.y + disc.velocityY - disc.radius < 0)
                disc.velocityY = -disc.velocityY;

            disc.x += disc.velocityX;
            disc.y += disc.velocityY;
        }
    }

    function draw() {
       // var disc = discs[i];

        for (var i = 0; i < numDiscs; ++i) {
            disc = discs[i];

            gradient = context.createRadialGradient(disc.x, disc.y, 0,
                               disc.x, disc.y, disc.radius);

            gradient.addColorStop(0.3, disc.innerColor);
            gradient.addColorStop(0.5, disc.middleColor);
            gradient.addColorStop(1.0, disc.outerColor);

            context.save();
            context.beginPath();
            context.arc(disc.x, disc.y, disc.radius, 0, Math.PI * 2, false);
            context.fillStyle = gradient;
            context.strokeStyle = disc.strokeStyle;
            context.fill();
            context.stroke();
            context.restore();
        }
    }

    // Animation.....................................................

    function animate(time) {
        if (!paused) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawBackground();
            update();
            draw();
            console.log(time.valueOf());
            window.requestNextAnimationFrame(animate);
        }
    }

    // Initialization................................................

    context.font = '48px Helvetica';
 //   console.log(new Date().getTime());
    window.requestNextAnimationFrame(animate);

});