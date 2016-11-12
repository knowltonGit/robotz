

$(document).ready(function () {

    var clickcount = 0;
var GameSquares = {};//create new object
var player1 = "Bob";
var player2 = "Tom";
var playerturn = "Bob";
var movementpointsleft = 20;
var potentialMPSpend = 0;
var gameover = false;

var firstsquareid = "";
var secondsquareid = "";
var potentialsquareid = "";
var pieceundermouse = "";
var pieceselected = "";
var rowOfPieceSelected = -99;
var colOfPieceSelected = -99;
var rowOfSquarUnderMouse = -99;
var colOfSquarUnderMouse = -99;

var MAX_COL = 9;
var MAX_ROW = 9;
var MIN_COL = 0;
var MIN_ROW = 0;

var squareUnderMouse_N = "";
var squareUnderMouse_NE = "";
var squareUnderMouse_E = "";
var squareUnderMouse_SE = "";
var squareUnderMouse_S = "";
var squareUnderMouse_SW = "";
var squareUnderMouse_W = "";
var squareUnderMouse_NW = "";



InitGamePiece(0, 0, "powersource", "200", "Red", player1, false, true, false, 0, 0, false);
InitGamePiece(1, 0, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(2, 0, "medic", "100", "Red", player1, true, true, false, 0, 10, false);
InitGamePiece(3, 0, "empty", "0", "", "none", false, false, false, 0, 0, false);
InitGamePiece(4, 0, "empty", "0", "", "none", false, false, false, 0, 0, false);

debugmessage(GameSquares["00"]);
debugmessage(GameSquares["30"]);


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
InitGamePiece(9, 9, "powersource", "200", "Blue", player2, false, true, false, 0, 0, false);

function TempCoords(cur_x,cur_y,compassdir){
    squareUnderMouse_N = "";
    squareUnderMouse_NE = "";
    squareUnderMouse_E = "";
    squareUnderMouse_SE = "";
    squareUnderMouse_S = "";
    squareUnderMouse_SW = "";
    squareUnderMouse_W = "";
    squareUnderMouse_NW = "";
}

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


function GamePiecePowerSource(owner) {
    owner,
    health = 200
}

function GamePieceMedic(owner, health) {
    owner,
    health = 100
}



    genGameBoard();
 
    $("#dostuff").on("click", function () {
        genGameBoard();
        newinit();
    });

    $("#cleardebug").on("click", function () {
        $("#idcursquare").empty();
    });

    function debugmessage(mess){
        var curmess = $("#idcursquare").html();
        curmess = mess + "\r\n" + curmess;
        $("#idcursquare").empty();
        $("#idcursquare").html(curmess);
    }

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

   

    $(".gamepiece").on("click", function (e) {

        //e.preventDefault();

        clickcount++;
        debugmessage("click count:  " + clickcount);
        var cursq = $(this).context.id;

        if (clickcount == 1) {
            firstsquareid = $(this).context.id;
        }

        if (clickcount == 2) {
            secondsquareid = $(this).context.id;
            debugmessage("from:  " + firstsquareid + " to:  " + secondsquareid);
            clickcount = 0;
        }       
    });
      
    


    function FillCompassPoints(id) {

        var tempCol = id[0];
        var tempRow = id[1];
        
        $("#center").html("");
        $("#e").html("");
        $("#se").html("");
        $("#s").html("");
        $("#sw").html("");
        $("#w").html("");
        $("#nw").html("");
        $("#n").html("");
        $("#ne").html("");

        $("#n").css("background-color", "black");
        
        debugmessage("tempCol:  " + id[0]);
        debugmessage("tempRow:  " + id[1]);

        debugmessage("tCol:  " + parseInt(tempCol));
        debugmessage("tRow:  " + parseInt(tempRow));

        var squaretotheEAST = ((parseInt(tempCol) + 1) <= MAX_COL) ? (parseInt(tempCol) + 1) + "" + tempRow : "";
        var squaretotheWEST = ((parseInt(tempCol) - 1) >= MIN_COL) ? (parseInt(tempCol) - 1) + "" + tempRow : "";
        var squaretotheNORTH = ((parseInt(tempRow) - 1) >= MIN_ROW) ? "" + tempCol + "" + (parseInt(tempRow) - 1) : "";
        var squaretotheSOUTH = ((parseInt(tempRow) + 1) <= MAX_ROW) ? "" + tempCol + "" + (parseInt(tempRow) + 1) : "";

        var squaretotheNORTHEAST = ((parseInt(tempCol) + 1) <= MAX_COL && (parseInt(tempRow) - 1) >= MIN_ROW) ? (parseInt(tempCol) + 1) + "" + (parseInt(tempRow) - 1) : "";
        var squaretotheNORTHWEST = ((parseInt(tempCol) - 1) >= MIN_COL && (parseInt(tempRow) - 1) >= MIN_ROW) ? (parseInt(tempCol) - 1) + "" + (parseInt(tempRow) - 1) : "";
        var squaretotheSOUTHEAST = ((parseInt(tempCol) + 1) <= MAX_COL && (parseInt(tempRow) + 1) <= MAX_ROW) ? (parseInt(tempCol) + 1) + "" + (parseInt(tempRow) + 1) : "";
        var squaretotheSOUTHWEST = ((parseInt(tempCol) - 1) >= MIN_COL && (parseInt(tempRow) + 1) <= MAX_ROW) ? (parseInt(tempCol) - 1) + "" + (parseInt(tempRow) + 1) : "";
        
        var centerSquare = tempCol + "" + tempRow;

        var lessThanMaxCol = parseInt(tempCol) < MAX_COL;
        var lessThanOrEqualToMaxCol = parseInt(tempCol) <= MAX_COL;        
        var greaterThanMinCol = parseInt(tempCol) > MIN_COL;
        var greaterThanOrEqualToMinCol = parseInt(tempCol) >= MIN_COL;
      
        var lessThanMaxRow = parseInt(tempRow) < MAX_ROW;
        var lessThanOrEqualToMaxRow = parseInt(tempRow) <= MAX_ROW;
        var greaterThanMinRow = parseInt(tempRow) > MIN_ROW;
        var greaterThanOrEqualToMinRow = parseInt(tempRow) >= MIN_ROW

        var canSetN = greaterThanMinRow && lessThanOrEqualToMaxRow;
        var canSetS = greaterThanOrEqualToMinRow && lessThanMaxRow;
        var canSetE = greaterThanOrEqualToMinCol && lessThanMaxCol;
        var canSetW = greaterThanMinCol && lessThanOrEqualToMaxCol;
        var canSetSW = canSetS && canSetW;
        var canSetSE = canSetS && canSetE;
        var canSetNW = canSetN && canSetW;
        var canSetNE = canSetN && canSetE;
   
        var squareUnderMouse = GameSquares[id];
        $("#center").html(squareUnderMouse[0] + ":  " + centerSquare[0] + "," + centerSquare[1]);
        
        if (canSetSW) {
            //can set southwest     
            var squareUnderMouse_SW = GameSquares[squaretotheSOUTHWEST];
            var SWSquareInfo = squareUnderMouse_SW[0] + ":  " + squaretotheSOUTHWEST[0] + "," + squaretotheSOUTHWEST[1];
            $("#sw").html(SWSquareInfo);
        }

        if (canSetSE) {
            //can set southeast     
            var squareUnderMouse_SE = GameSquares[squaretotheSOUTHEAST];
            var SESquareInfo = squareUnderMouse_SE[0] + ":  " + squaretotheSOUTHEAST[0] + "," + squaretotheSOUTHEAST[1];
            $("#se").html(SESquareInfo);
        }

        if (canSetNW) {
            //can set northwest
            squareUnderMouse_NW = GameSquares[squaretotheNORTHWEST];
            $("#nw").html(squareUnderMouse_NW[0] + ":  " + squaretotheNORTHWEST[0] + "," + squaretotheNORTHWEST[1]);
        }

        if (canSetNE) {
            //can set northeast
            squareUnderMouse_NE = GameSquares[squaretotheNORTHEAST];
            $("#ne").html(squareUnderMouse_NE[0] + ":  " + squaretotheNORTHEAST[0] + "," + squaretotheNORTHEAST[1]);
        }

        if (canSetE) {
            //can set east
            squareUnderMouse_E = GameSquares[squaretotheEAST];
            $("#e").html(squareUnderMouse_E[0] + ":  " + squaretotheEAST[0] + "," + squaretotheEAST[1]);
        }

        if (canSetW) {
            //can set west
            squareUnderMouse_W = GameSquares[squaretotheWEST];
            $("#w").html(squareUnderMouse_W[0] + ":  " + squaretotheWEST[0] + "," + squaretotheWEST[1]);
        }

        if (canSetN) {
            //can set north
            $("#n").css("background-color", "white");
            squareUnderMouse_N = GameSquares[squaretotheNORTH];
            $("#n").html(squareUnderMouse_N[0] + ":  " + squaretotheNORTH[0] + "," + squaretotheNORTH[1]);
        }

        if (canSetS) {
            //can set south
            squareUnderMouse_S = GameSquares[squaretotheSOUTH];
            $("#s").html(squareUnderMouse_S[0] + ":  " + squaretotheSOUTH[0] + "," + squaretotheSOUTH[1]);
        }

        //var squareUnderMouse_N = "";
        //var squareUnderMouse_NE = "";
        //var squareUnderMouse_E = "";
        //var squareUnderMouse_SE = "";
        //var squareUnderMouse_S = "";
        //var squareUnderMouse_SW = "";
        //var squareUnderMouse_W = "";
        //var squareUnderMouse_NW = "";
    }

    $("div.gamepiece").mouseenter(function() {
       
        potentialsquareid = $(this).context.id;

        pieceundermouse = GameSquares[potentialsquareid][0];        
        
        debugmessage(pieceundermouse + ":  " + potentialsquareid);

        FillCompassPoints(potentialsquareid);


        if (clickcount == 1) {
            potentialsquareid = $(this).context.id;
            pieceundermouse = GameSquares[potentialsquareid][0];
            pieceselected = GameSquares[firstsquareid][0];
            rowOfPieceSelected = firstsquareid[1];
            colOfPieceSelected = firstsquareid[0];
            var tempplayer = GameSquares[firstsquareid][3];

            debugmessage("piece selected is " + pieceselected + ", owner:  " + tempplayer);


            //$(this).css("background-color", "blue");
            if (tempplayer == playerturn) {
                if (movementpointsleft > 0) {
                    if (firstsquareid != potentialsquareid) {

                        console.log(potentialsquareid);

                        if (potentialsquareid !== undefined) {
                            FillCompassPoints(potentialsquareid);
                        }

                        //squareUnderMouse_N

                        debugmessage(pieceundermouse + ":  " + potentialsquareid);
                        paintPathLine(firstsquareid, potentialsquareid);

                    }
                }
            }
            else {
                clickcount = 0;
            }
        }

        pieceundermouse = "--";
        potentialsquareid = "";
        pieceselected = "";
        rowOfPieceSelected = -99;
        colOfPieceSelected = -99;        
    });

    function paintPathLine(firstsquareid, potentialsquareid) {
        var fromCol = parseInt(firstsquareid[0]);
        var fromRow = parseInt(firstsquareid[1]);
        var toCol = parseInt(potentialsquareid[0]);
        var toRow = parseInt(potentialsquareid[1]);

        var tempfromCol = fromCol;
        var tempfromRow = fromRow;
        var temptoCol = toCol;
        var temptoRow = toRow;

        var color = "grey";

        var psid_IsNorth = toRow < fromRow;
        var psid_IsEast = toCol > fromCol;
        var psid_IsSouth = toRow > fromRow;
        var psid_IsWest = toCol < fromCol;
        var psid_IsNE = psid_IsNorth && psid_IsEast;
        var psid_IsSE = psid_IsSouth && psid_IsEast;
        var psid_IsSW = psid_IsSouth && psid_IsWest;
        var psid_IsNW = psid_IsNorth && psid_IsWest;

        console.log(psid_IsSouth);
        console.log(tempfromRow);
        console.log(temptoRow);

        debugmessage("paint fromRow:  " + fromRow);
        debugmessage("paint fromCol:  " + fromCol);
        debugmessage("paint toRow:  " + toRow);
        debugmessage("paint toCol:  " + toCol);

        debugmessage("psid is south:  " + psid_IsSouth);
        debugmessage("psid is north:  " + psid_IsNorth);
        debugmessage("psid is east:  " + psid_IsEast);
        debugmessage("psid is west:  " + psid_IsWest);
        debugmessage("psid is sw:  " + psid_IsSW);
        debugmessage("psid is se:  " + psid_IsSE);
        debugmessage("psid is nw:  " + psid_IsNW);
        debugmessage("psid is ne:  " + psid_IsNE);

        $(".gamepiece").css("background-color", "white");

        if (psid_IsSouth) {
            while (tempfromRow < temptoRow) {
                $("#" + "" + temptoCol + tempfromRow + "").css("background-color", color);
                debugmessage(temptoCol + tempfromRow + " == ");
                tempfromRow++;
            }
        }

        //if (tempfromCol <= toCol) {
        //    while (tempfromCol < temptoCol) {
        //        $("#" + "" + temptoCol + temptoRow + "").css("background-color", color);
        //        tempfromCol++;
        //    }
        //}

        //if (tempfromCol >= toCol) {
        //    while (tempfromCol > temptoCol) {
        //        $("#" + "" + temptoCol + temptoRow + "").css("background-color", color);
        //        temptoCol--;
        //    }
        //}

        //if (tempfromRow <= toRow) {
        //    while (tempfromRow < temptoRow) {
        //        $("#" + "" + temptoCol + temptoRow + "").css("background-color", color);
        //        tempfromRow++;
        //    }
        //}

        //if (tempfromRow >= toRow) {
        //    while (tempfromRow > temptoRow) {
        //        $("#" + "" + temptoCol + temptoRow + "").css("background-color", color);
        //        temptoRow++;
        //    }
        //}
    }

   
});


