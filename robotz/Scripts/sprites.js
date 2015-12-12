
this.POWER_CELLS_HEIGHT = 64;

this.powerCells = [
   { left: 1, top: 0, width: 64, height: this.POWER_CELLS_HEIGHT },
   { left: 64, top: 0, width: 64, height: this.POWER_CELLS_HEIGHT }

];


start: function () {
    this.createSprites();
    this.initializeImages();
    this.equipRunner();
    this.splashToast('Good Luck!');

    document.getElementById('instructions').style.opacity =
       snailBait.INSTRUCTIONS_OPACITY;
},

initializeImages: function () {
    var self = this;

    this.background.src = 'images/background_level_one_dark_red.png';
    this.spritesheet.src = 'images/spritesheet.png';

    this.background.onload = function (e) {
        self.startGame();
    };
},

startGame: function () {
    requestNextAnimationFrame(this.animate);
},

positionSprites: function (sprites, spriteData) {
    var sprite;

    for (var i = 0; i < sprites.length; ++i) {
        sprite = sprites[i];

        if (spriteData[i].platformIndex) {
            this.putSpriteOnPlatform(sprite,
               this.platforms[spriteData[i].platformIndex]);
        }
        else {
            sprite.top = spriteData[i].top;
            sprite.left = spriteData[i].left;
        }
    }
},

armSnails: function () {
    var snail,
        snailBombArtist = new SpriteSheetArtist(this.spritesheet, this.snailBombCells);

    for (var i = 0; i < this.snails.length; ++i) {
        snail = this.snails[i];
        snail.bomb = new Sprite('snail bomb',
                                 snailBombArtist,
                                 [this.snailBombMoveBehavior]);

        snail.bomb.width = snailBait.SNAIL_BOMB_CELLS_WIDTH;
        snail.bomb.height = snailBait.SNAIL_BOMB_CELLS_HEIGHT;

        snail.bomb.top = snail.top + snail.bomb.height / 2;
        snail.bomb.left = snail.left + snail.bomb.width / 2;
        snail.bomb.visible = false;

        snail.bomb.snail = snail;  // Snail bombs maintain a reference to their snail

        this.sprites.push(snail.bomb);
    }
},

addSpritesToSpriteArray: function () {
    for (var i = 0; i < this.platforms.length; ++i) {
        this.sprites.push(this.platforms[i]);
    }

    for (var i = 0; i < this.bats.length; ++i) {
        this.sprites.push(this.bats[i]);
    }

    for (var i = 0; i < this.bees.length; ++i) {
        this.sprites.push(this.bees[i]);
    }

    for (var i = 0; i < this.buttons.length; ++i) {
        this.sprites.push(this.buttons[i]);
    }

    for (var i = 0; i < this.coins.length; ++i) {
        this.sprites.push(this.coins[i]);
    }

    for (var i = 0; i < this.rubies.length; ++i) {
        this.sprites.push(this.rubies[i]);
    }

    for (var i = 0; i < this.sapphires.length; ++i) {
        this.sprites.push(this.sapphires[i]);
    }

    for (var i = 0; i < this.snails.length; ++i) {
        this.sprites.push(this.snails[i]);
    }
},

createPowerSprites: function () {
    var power_cell,
        powerCellArtist = new SpriteSheetArtist(this.spritesheet, this.powerCells);

    for (var i = 0; i < this.powerCell.length; ++i) {
        power_cell = new Sprite('power_cell', powerCellArtist);
        
        power_cell.width = 64;
        power_cell.height = this.POWER_CELLS_HEIGHT;

        this.powercellsarray.push(power_cell);
    }
},




// Sprite Artists............................................................

// Artists draw sprites with a draw(sprite, context) method. ImageArtists
// draw an image for their sprite.

var ImageArtist = function (imageUrl) {
   this.image = new Image;
   this.image.src = imageUrl;
};

ImageArtist.prototype = {
   image: undefined,

   drawSpriteImage: function (sprite, context) {
      context.drawImage(this.image, sprite.left, sprite.top);
   },
   
   draw: function (sprite, context) {
      this.drawSpriteImage(sprite, context);   
   }
};

SpriteSheetArtist = function (spritesheet, cells) {
   this.cells = cells;
   this.spritesheet = spritesheet;
   this.cellIndex = 0;
};

SpriteSheetArtist.prototype = {
   advance: function () {
      if (this.cellIndex == this.cells.length-1) {
         this.cellIndex = 0;
      }
      else {
         this.cellIndex++;
      }
   },
   
   draw: function (sprite, context) {
      var cell = this.cells[this.cellIndex];

      context.drawImage(this.spritesheet, cell.left, cell.top,
                                          cell.width, cell.height,
                                          sprite.left, sprite.top,
                                          cell.width, cell.height);
   }
};

// Sprite Animators...........................................................

var SpriteAnimator = function (cells, duration, callback) {
   this.cells = cells;
   this.duration = duration || 1000;
   this.callback = callback;
};

SpriteAnimator.prototype = {
   start: function (sprite, reappear) {
      var originalCells = sprite.artist.cells,
          originalIndex = sprite.artist.cellIndex,
          self = this;

      sprite.artist.cells = this.cells;
      sprite.artist.cellIndex = 0;
      
      setTimeout(function() {
         sprite.artist.cells = originalCells;
         sprite.artist.cellIndex = originalIndex;

         sprite.visible = reappear;

         if (self.callback) {
            self.callback(sprite, self);
         }
      }, self.duration); 
   },
};

// Sprites....................................................................

// Sprites have a type, an artist, and an array of behaviors. Sprites can
// be updated and drawn.
//
// A sprite's artist draws the sprite: draw(sprite, context)
// A sprite's behavior executes: execute(sprite, time, fps)

var Sprite = function (type, artist, behaviors) {
   this.type = type || '';
   this.artist = artist || undefined;
   this.behaviors = behaviors || [];

   this.left = 0;
   this.top = 0;
   this.width = 10;
   this.height = 10;
	this.velocityX = 0;
	this.velocityY = 0;
	this.opacity = 1.0;
   this.visible = true;

   return this;
};

Sprite.prototype = {
	draw: function (context) {
     context.save();
     context.globalAlpha = this.opacity;
      
     if (this.artist && this.visible) {
        this.artist.draw(this, context);
     }
     context.restore();
	},

   update: function (time, fps, context) {
      for (var i = 0; i < this.behaviors.length; ++i) {
         if (this.behaviors[i] === undefined) { // Modified while looping?
            return;
         }

         this.behaviors[i].execute(this, time, fps, context);
      }
   }
};
