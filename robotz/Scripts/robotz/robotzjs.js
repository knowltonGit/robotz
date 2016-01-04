var GameSquares = {};//create new object
var player1 = "Bob";
var player2 = "Tom";
var playerturn = "";
var movementpointsleft = 20;
var gameover = false;
var clickcount = 0;
var firstsquareid = "";
var secondsquareid = "";

InitGamePiece(0, 0, "powersource", "200", "Red", player1, false, true, false, 0, 0, false);
InitGamePiece(1, 0, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(2, 0, "medic", "100", "Red", player1, true, true, false, 0, 10, false);
InitGamePiece(3, 0, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(4, 0, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(5, 0, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(6, 0, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(7, 0, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(8, 0, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(9, 0, "wall", "0", "", "none", true, false, false, 0, 0, false);
InitGamePiece(0, 1, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(1, 1, "medic", "100", "Red", player1, true, true, false, 0, 10, false);
InitGamePiece(2, 1, "destroyer", "100", "Red", player1, true, true, true, 10, 0, false);
InitGamePiece(3, 1, "engineer", "100", "Red", player1,true, true, false, 0, 0, true);
InitGamePiece(4, 1, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(5, 1, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(6, 1, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(7, 1, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(8, 1, "wall", "0", "", "none", true, false, false, 0, 0, false);
InitGamePiece(9, 1, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(0, 2, "medic", "100", "Red", player1, true, true, false, 0, 10, false);
InitGamePiece(1, 2, "destroyer", "100", "Red", player1, true, true, true, 10, 0, false);
InitGamePiece(2, 2, "engineer", "100", "Red", player1, true, true, false, 0, 0, true);
InitGamePiece(3, 2, "destroyer", "100", "Red", player1, true, true, true, 10, 0, false);
InitGamePiece(4, 2, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(5, 2, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(6, 2, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(7, 2, "wall", "0", "", "none", true, false, false, 0, 0, false);
InitGamePiece(8, 2, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(9, 2, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(0, 3, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(1, 3, "engineer", "100", "Red", player1, true, true, false, 0, 0, true);
InitGamePiece(2, 3, "destroyer", "100", "Red", player1, true, true, true, 10, 0, false);
InitGamePiece(3, 3, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(4, 3, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(5, 3, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(6, 3, "wall", "0", "", "none", true, false, false, 0, 0, false);
InitGamePiece(7, 3, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(8, 3, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(9, 3, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(0, 4, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(1, 4, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(2, 4, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(3, 4, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(4, 4, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(5, 4, "wall", "0", "", "none", true, false, false, 0, 0, false);
InitGamePiece(6, 4, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(7, 4, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(8, 4, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(9, 4, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(0, 5, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(1, 5, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(2, 5, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(3, 5, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(4, 5, "wall", "0", "", "none", true, false, false, 0, 0, false);
InitGamePiece(5, 5, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(6, 5, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(7, 5, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(8, 5, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(9, 5, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(0, 6, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(1, 6, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(2, 6, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(3, 6, "wall", "0", "", "none", true, false, false, 0, 0, false);
InitGamePiece(4, 6, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(5, 6, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(6, 6, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(7, 6, "destroyer", "100", "Blue", player2, true, true, true, 10, 0, false);
InitGamePiece(8, 6, "engineer", "100", "Blue", player2, true, true, false, 0, 0, true);
InitGamePiece(9, 6, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(0, 7, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(1, 7, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(2, 7, "wall", "0", "", "none", true, false, false, 0, 0, false);
InitGamePiece(3, 7, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(4, 7, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(5, 7, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(6, 7, "destroyer", "100", "Blue", player2, true, true, true, 10, 0, false);
InitGamePiece(7, 7, "engineer", "100", "Blue", player2, true, true, false, 0, 0, true);
InitGamePiece(8, 7, "destroyer", "100", "Blue", player2, true, true, true, 10, 0, false);
InitGamePiece(9, 7, "medic", "100", "Blue", player2, true, true, false, 0, 10, false);
InitGamePiece(0, 8, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(1, 8, "wall", "0", "", "none", true, false, false, 0, 0, false);
InitGamePiece(2, 8, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(3, 8, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(4, 8, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(5, 8, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(6, 8, "engineer", "100", "Blue", player2, true, true, false, 0, 0, true);
InitGamePiece(7, 8, "destroyer", "100", "Blue", player2, true, true, true, 10, 0, false);
InitGamePiece(8, 8, "medic", "100", "Blue", player2, true, true, false, 0, 10, false);
InitGamePiece(9, 8, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(0, 9, "wall", "0", "", "none", true, false, false, 0, 0, false);
InitGamePiece(1, 9, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(2, 9, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(3, 9, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(4, 9, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(5, 9, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(6, 9, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(7, 9, "medic", "100", "Blue", player2, true, true, false, 0, 10, false);
InitGamePiece(8, 9, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(9, 9, "powersource", "200", "Blue", player2, false, false, false, 0, 0, false);

function InitGamePiece(x, y, kind, health, color, owner, moveable, canbedamaged, candamageotherpieces, damagedonetootherpiecesperattack, healingperturn, canpushwalls) {
    GameSquares["" + x + y + ""] = [kind,
        health, //health
        color, //color
        owner, //owner
        moveable, //moveable
        canbedamaged, //can be damaged
        candamageotherpieces, //can damage other pieces
        damagedonetootherpiecesperattack, //damage done to other pieces per attack
        healingperturn, //healing done to other pieces per turn
        canpushwalls // can push walls
    ];
}


$(document).ready(function () {

    genGameBoard();
 
   

    function genGameBoard() {
        var app = "";
        for (y = 0; y < 10; y++) {
            for (x = 0; x < 10; x++) {                
                var t = "images/" + GameSquares["" + x + y + ""][0] + GameSquares["" + x + y + ""][2] + ".png";
                app += "<div id='" + x + y + "' class='gamepiece'><canvas id='" + x + y + "' class='canvas' spritesrc='" + t + "' height='64px'></canvas></div>";               
            }
        }

        $("#gameboard").empty();
        $("#gameboard").append(app);

        console.log("done generating game board");
    }
    
    function init(canvas) {
        canvas.height = 64;
        canvas.width = 64;

        var stage = new createjs.Stage(canvas);

       

        var img = new Image();

        img.src = canvas.getAttributeNode("spritesrc").value
        img.onload = function (event) {

            var data = {
                framerate: 50,
                images: [img],
                frames: { width: 64, height: 64, regX: 16, regY: 16 },
                animations: {
                    'explode': [0, 9],
                }
            }

            var spritesheet = new createjs.SpriteSheet(data);
            var animation = new createjs.Sprite(spritesheet, 'explode');
            animation.x = 16;
            animation.y = 16;

            stage.addChild(animation);
           
            createjs.Ticker.addEventListener("tick", update);
            function update(event) {
                animation.x = 16;
                animation.y = 16;
                stage.update();             
            }
        }
    }

    function newinit() {
        canvasArr = document.getElementsByClassName("canvas");

        for (var a = 0; a < canvasArr.length; a++) {
            init(canvasArr[a]);
        }
    }

    newinit();

    $("#dostuff").on("click", function () {
        genGameBoard();
        newinit();
    });

    $(".gamepiece").on("click", function () {
        clickcount++;
        var cursq = $(this).context.id;

        if (clickcount == 1) {
            firstsquareid = $(this).context.id;
        }

        if (clickcount == 2) {
            secondsquareid = $(this).context.id;
            idcursquare.value = "from:  " + firstsquareid + " to:  " + secondsquareid;
            clickcount = 0;
        }


        
    });

    $(".gamepiece").on("mouseover", function () {
        //alert("mouseover");
        //idcursquare.value = $(this).context.id;

        //$(this).context.
        if (clickcount == 1) {
            $(this).css("background-color", "blue");
        }
        
    });
});


