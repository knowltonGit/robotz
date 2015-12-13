var movementPoints = 20;
var whoseTurn = 1;

var fromPieceID = "";
var fromPieceName = "";
var fromPieceColor = "";
var fromPieceOwnerName = "";
var fromPiecePlayerID = 0;
var fromPieceHealth = 0;
var fromPieceIsPlayerPiece = 0;

var toPieceID = "";
var toPieceName = "";
var toPieceColor = "";
var toPieceOwnerName = "";
var toPiecePlayerID = 0;
var toPieceHealth = 0;
var toPieceIsPlayerPiece = 0;

var tempPieceID = "";
var tempPieceName = "";
var tempPieceColor = "";
var tempPieceOwnerName = "";
var tempPiecePlayerID = 0;
var tempPieceHealth = 0;
var tempPieceIsPlayerPiece = 0;

var clickcount = 0;

$(document).ready(function () {
   

    function initGamePieces() {
        defineGamePiece("00", "ps", "blue", 200, 1, "Tom", 1);
        defineGamePiece("10", "empty", "", 0, 0, "", 0);
        defineGamePiece("20", "med", "blue", 100, 1, "", 1);
        defineGamePiece("30", "empty", "", 0, 0, "", 0);
        defineGamePiece("40", "empty", "", 0, 0, "", 0);
        defineGamePiece("50", "empty", "", 0, 0, "", 0);
        defineGamePiece("60", "empty", "", 0, 0, "", 0);
        defineGamePiece("70", "empty", "", 0, 0, "", 0);
        defineGamePiece("80", "empty", "", 0, 0, "", 0);
        defineGamePiece("90", "wall", "", 0, 0, "", 0);

        defineGamePiece("01", "empty", "", 0, 0, "", 0);
        defineGamePiece("11", "med", "blue", 100, 1, "Tom", 1);
        defineGamePiece("21", "dest", "blue", 100, 1, "Tom", 1);
        defineGamePiece("31", "eng", "blue", 100, 1, "Tom", 1);
        defineGamePiece("41", "empty", "", 0, 0, "", 0);
        defineGamePiece("51", "empty", "", 0, 0, "", 0);
        defineGamePiece("61", "empty", "", 0, 0, "", 0);
        defineGamePiece("71", "empty", "", 0, 0, "", 0);
        defineGamePiece("81", "wall", "", 0, 0, "", 0);
        defineGamePiece("91", "empty", "", 0, 0, "", 0);

        defineGamePiece("02", "med", "blue", 100, 1, "Tom", 0);
        defineGamePiece("12", "dest", "blue", 100, 1, "Tom", 1);
        defineGamePiece("22", "eng", "blue", 100, 1, "Tom", 1);
        defineGamePiece("32", "dest", "blue", 100, 1, "Tom", 1);
        defineGamePiece("42", "empty", "", 0, 0, "", 0);
        defineGamePiece("52", "empty", "", 0, 0, "", 0);
        defineGamePiece("62", "empty", "", 0, 0, "", 0);
        defineGamePiece("72", "wall", "", 0, 0, "", 0);
        defineGamePiece("82", "empty", "", 0, 0, "", 0);
        defineGamePiece("92", "empty", "", 0, 0, "", 0);

        defineGamePiece("03", "empty", "", 0, 0, "", 0);
        defineGamePiece("13", "eng", "blue", 100, 1, "Tom", 1);
        defineGamePiece("23", "dest", "blue", 100, 1, "Tom", 1);
        defineGamePiece("33", "empty", "", 0, 0, "", 0);
        defineGamePiece("43", "empty", "", 0, 0, "", 0);
        defineGamePiece("53", "empty", "", 0, 0, "", 0);
        defineGamePiece("63", "wall", "", 0, 0, "", 0);
        defineGamePiece("73", "empty", "", 0, 0, "", 0);
        defineGamePiece("83", "empty", "", 0, 0, "", 0);
        defineGamePiece("93", "empty", "", 0, 0, "", 0);

        defineGamePiece("04", "empty", "", 0, 0, "", 0);
        defineGamePiece("14", "empty", "", 0, 0, "", 0);
        defineGamePiece("24", "empty", "", 0, 0, "", 0);
        defineGamePiece("34", "empty", "", 0, 0, "", 0);
        defineGamePiece("44", "empty", "", 0, 0, "", 0);
        defineGamePiece("54", "wall", "", 0, 0, "", 0);
        defineGamePiece("64", "empty", "", 0, 0, "", 0);
        defineGamePiece("74", "empty", "", 0, 0, "", 0);
        defineGamePiece("84", "empty", "", 0, 0, "", 0);
        defineGamePiece("94", "empty", "", 0, 0, "", 0);

        defineGamePiece("05", "empty", "", 0, 0, "", 0);
        defineGamePiece("15", "empty", "", 0, 0, "", 0);
        defineGamePiece("25", "empty", "", 0, 0, "", 0);
        defineGamePiece("35", "empty", "", 0, 0, "", 0);
        defineGamePiece("45", "wall", "", 0, 0, "", 0);
        defineGamePiece("55", "empty", "", 0, 0, "", 0);
        defineGamePiece("65", "empty", "", 0, 0, "", 0);
        defineGamePiece("75", "empty", "", 0, 0, "", 0);
        defineGamePiece("85", "empty", "", 0, 0, "", 0);
        defineGamePiece("95", "empty", "", 0, 0, "", 0);

        defineGamePiece("06", "empty", "", 0, 0, "", 0);
        defineGamePiece("16", "empty", "", 0, 0, "", 0);
        defineGamePiece("26", "empty", "", 0, 0, "", 0);
        defineGamePiece("36", "wall", "", 0, 0, "", 0);
        defineGamePiece("46", "empty", "", 0, 0, "", 0);
        defineGamePiece("56", "empty", "", 0, 0, "", 0);
        defineGamePiece("66", "empty", "", 0, 0, "", 0);
        defineGamePiece("76", "dest", "red", 100, 2, "Bob", 1);
        defineGamePiece("86", "eng", "red", 100, 2, "Bob", 1);
        defineGamePiece("96", "empty", "", 0, 0, "", 0);

        defineGamePiece("07", "empty", "", 0, 0, "", 0);
        defineGamePiece("17", "empty", "", 0, 0, "", 0);
        defineGamePiece("27", "wall", "", 0, 0, "", 0);
        defineGamePiece("37", "empty", "", 0, 0, "", 0);
        defineGamePiece("47", "empty", "", 0, 0, "", 0);
        defineGamePiece("57", "empty", "", 0, 0, "", 0);
        defineGamePiece("67", "dest", "red", 100, 2, "Bob", 1);
        defineGamePiece("77", "eng", "red", 100, 2, "Bob", 1);
        defineGamePiece("87", "dest", "red", 100, 2, "Bob", 1);
        defineGamePiece("97", "med", "red", 100, 2, "Bob", 1);

        defineGamePiece("08", "empty", "", 0, 0, "", 0);
        defineGamePiece("18", "wall", "", 0, 0, "", 0);
        defineGamePiece("28", "empty", "", 0, 0, "", 0);
        defineGamePiece("38", "empty", "", 0, 0, "", 0);
        defineGamePiece("48", "empty", "", 0, 0, "", 0);
        defineGamePiece("58", "empty", "", 0, 0, "", 0);
        defineGamePiece("68", "eng", "red", 100, 2, "Bob", 1);
        defineGamePiece("78", "dest", "red", 100, 2, "Bob", 1);
        defineGamePiece("88", "med", "red", 100, 2, "Bob", 1);
        defineGamePiece("98", "empty", "", 0, 0, "", 0);

        defineGamePiece("09", "wall", "", 0, 0, "", 0);
        defineGamePiece("19", "empty", "", 0, 0, "", 0);
        defineGamePiece("29", "empty", "", 0, 0, "", 0);
        defineGamePiece("39", "empty", "", 0, 0, "", 0);
        defineGamePiece("49", "empty", "", 0, 0, "", 0);
        defineGamePiece("59", "empty", "", 0, 0, "", 0);
        defineGamePiece("69", "empty", "", 0, 0, "", 0);
        defineGamePiece("79", "med", "red", 100, 2, "Bob", 1);
        defineGamePiece("89", "empty", "", 0, 0, "", 0);
        defineGamePiece("99", "ps", "red", 200, 2, "Bob", 1);
    }
   

    function robotzhandlemouseenter(id) {
        $("#" + id).css("background-color", "red");
        
        tempPieceID = id;
        tempPieceName = localStorage.getItem(tempPieceID + "-piecename");
        tempPieceColor = localStorage.getItem(tempPieceID + "-Piececolor");
        tempPieceOwnerName = localStorage.getItem(tempPieceID + "-playername");
        tempPiecePlayerID = localStorage.getItem(tempPieceID + "-ownernumber");
        tempPieceHealth = localStorage.getItem(tempPieceID + "-health");
        tempPieceIsPlayerPiece = localStorage.getItem(tempPieceID + "-isplayerpiece");

        $("#status").html("id:  " + tempPieceID +
            "<br />piece name:  " + tempPieceName +
            "<br />Piece color:  " + tempPieceColor +
            "<br />owner id:  " + tempPieceOwnerName +
            "<br />player id:  " + tempPiecePlayerID +
            "<br />health:  " + tempPieceHealth +
            "<br />is player piece:  " + tempPieceIsPlayerPiece
            );
    }

    function robotzhandlemouseleave(id) {
        $("#" + id).css("background-color", "white");
    } 

    function SetFrom(id) {
        fromPieceID = id;
        fromPieceName = localStorage.getItem(fromPieceID + "-piecename");
        fromPieceColor = localStorage.getItem(fromPieceID + "-Piececolor");
        fromPieceOwnerName = localStorage.getItem(fromPieceID + "-playername");
        fromPiecePlayerID = localStorage.getItem(fromPieceID + "-ownernumber");
        fromPieceHealth = localStorage.getItem(fromPieceID + "-health");
        console.log("From piece:  " + fromPieceName);
    }

    function SetTo(id) {
        toPieceID = id;
        toPieceName = localStorage.getItem(toPieceID + "-piecename");
        toPieceColor = localStorage.getItem(toPieceID + "-Piececolor");
        toPieceOwnerName = localStorage.getItem(toPieceID + "-playername");
        toPiecePlayerID = localStorage.getItem(toPieceID + "-ownernumber");
        toPieceHealth = localStorage.getItem(toPieceID + "-health");
        console.log("To piece:  " + toPieceName);
    }

    function HandleGamePieceAction(destinationPiece) {
        if ($("#" + toPieceID).hasClass(destinationPiece)) {
            $("#" + toPieceID).removeClass(destinationPiece);
            $("#" + toPieceID).addClass(fromPieceName + fromPieceColor);

            defineGamePiece(toPieceID, fromPieceName, fromPieceColor, fromPieceHealth, fromPiecePlayerID, fromPieceOwnerName, 1);
            defineGamePiece(fromPieceID, toPieceName, toPieceColor, toPieceHealth, toPiecePlayerID, toPieceOwnerName, 0);

            $("#" + fromPieceID).removeClass(fromPieceName + fromPieceColor);
            $("#" + fromPieceID).addClass(destinationPiece);
        }
    }

    function MoveValid(fromPiece,toPiece) {
        var moveIsValid = 0;



        return moveIsValid;
    }


  

    

    function defineGamePiece(xycoords, piecename, Piececolor, health, ownernumber, playername, isplayerpiece){
        localStorage.setItem(xycoords + "-id", xycoords);  //refers to xy coords
        localStorage.setItem(xycoords + "-piecename", piecename);  //ps, dest, med, eng, wall or empty
        localStorage.setItem(xycoords + "-Piececolor", Piececolor);  //blue, red or none
        localStorage.setItem(xycoords + "-health", health);  //from 0 to 100 (200 only for powersource), 0 means death for p, dest, eng or med  
        localStorage.setItem(xycoords + "-ownernumber", ownernumber);  //1 or 2
        localStorage.setItem(xycoords + "-playername", playername);
        localStorage.setItem(xycoords + "-isplayerpiece", isplayerpiece);  //1 or 0        
    }

    function placeGamePiece(xycoords, classtoremove) {
        $("#" + xycoords).removeClass(classtoremove);
        $("#" + xycoords).addClass(localStorage.getItem(xycoords + "-piecename") + localStorage.getItem(xycoords + "-Piececolor"));
    }

    function generateGamePieces() {
        for (y = 0; y < 10; y++) {
            for (x = 0; x < 10; x++) {
                placeGamePiece("" + x + y + "", "empty");
            }
        }        
    }

    function callAJAX(sometext) {
        $.ajax({
            type: 'GET',
            url: 'Service1.svc/DoWork',
            data: { newtext: sometext },
            success: function (response) {
                //$('div').html($(response).text());
                console.log(response.d + " back at client");
                var a = Date.now();
                $("#anotherstatus").val(a + " " + response.d);
            },
            failure: function (response) {
                //$('div').html($(response).text());
                console.log(response.d + " ERROR");
            }
        });
    }

 


    $("#testclearboard").click(function () {
        generateEmptyGameBoard();
    });

    $("#testinitboard").click(function () {
        initGamePieces();
    });

    $("#testbuildboardfrommemory").click(function () {
        generateGamePieces();
    });

    $("#settempv").click(function () {
        localStorage.setItem("temp", $("#settempval").val());
    });

    $("#gettempv").click(function () {
        $("#gettempval").val(localStorage.getItem("temp"));
    });

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
        console.log("done sleeping");
    }
    // callAJAX("some sort of message");


    console.log("ready!");
  generateEmptyGameBoard();
  initGamePieces();
  generateGamePieces();


  $(".gamepiece").click(function () {
        clickcount++;
        console.log("count:  " + clickcount);
        if (clickcount == 1) {
            SetFrom($(this).context.id);           
        }

        if (clickcount == 2) {
            SetTo($(this).context.id);            

            if ($("#" + toPieceID).hasClass("empty")) {
                $("#" + toPieceID).removeClass("empty");
                $("#" + toPieceID).addClass(fromPieceName + fromPieceColor);

                defineGamePiece(toPieceID, fromPieceName, fromPieceColor, fromPieceHealth, fromPiecePlayerID, fromPieceOwnerName, fromPieceIsPlayerPiece);
                defineGamePiece(fromPieceID, toPieceName, toPieceColor, toPieceHealth, toPiecePlayerID, toPieceOwnerName, toPieceIsPlayerPiece);

                $("#" + fromPieceID).removeClass(fromPieceName + fromPieceColor);
                $("#" + fromPieceID).addClass("empty");
            }

            clickcount = 0;

            fromPieceID = "";
            fromPieceName = "";
            fromPieceColor = "";

            toPieceID = "";
            toPieceName = "";
            toPieceColor = "";
        }
  });

  $("#testanim").click(function () {
      console.log("testing anim");

      var timeoutID;

      $("#84").removeClass("empty").addClass("medred");
      timeoutID = window.setTimeout(hide84, 300);

      function hide84() {
          $("#84").removeClass("medred").addClass("empty");
          $("#74").removeClass("empty").addClass("medred");
          timeoutID = window.setTimeout(hide74, 100);
      }

      function hide74() {
          $("#74").removeClass("medred").addClass("empty");
          $("#64").removeClass("empty").addClass("medred");
          timeoutID = window.setTimeout(hide64, 100);
      }

      function hide64() {
          $("#64").removeClass("medred").addClass("empty");
          $("#54").removeClass("wall").addClass("medred");
      }

      console.log("done generating testing animation");
  });


  function generateEmptyGameBoard() {
      var app = "";
      for (y = 0; y < 10; y++) {
          for (x = 0; x < 10; x++) {
              app += "<div id='" + x + y + "' class='gamepiece empty'></div>";
          }
      }


      $("#gameboard").empty();
      $("#gameboard").append(app);

      console.log("done generating empty game board");
  }

 //var stage = new createjs.Stage("demoCanvas");

 //     var circle1 = new createjs.Shape();

 //     var circle2 = new createjs.Shape();

 // function init() {
     
 //     circle1.graphics.beginFill("red").drawCircle(0, 0, 50);
 //     circle1.x = 100;
 //     circle1.y = 100;

 //     circle1.on("click", function () {
 //         console.log("clicked circle 1");
 //     });

 //     circle2.graphics.beginFill("red").drawCircle(0, 0, 25);
 //     circle2.x = 150;
 //     circle2.y = 150;

 //     circle2.on("click", function () {
 //         console.log("clicked circle 2");
 //     });

 //     stage.addChild(circle1);
 //     stage.addChild(circle2);
 //     stage.update();
 // }

  //init();

  //createjs.Ticker.addEventListener("tick", handleTick);

  //function handleTick() {
  //    //Circle will move 10 units to the right.
  //    circle1.x += 10;

  //    circle2.x += 10;
  //    //Will cause the circle to wrap back
  //    if (circle1.x > stage.canvas.width) { circle1.x = 0; }

  //    if (circle2.x > stage.canvas.width) { circle2.x = 0; }

  //    stage.update();
  //}

  //function init() {
  //    var canvas = document.getElementById('demoCanvas')
  //    var stage = new createjs.Stage(canvas);

  //    canvas.width = window.innerWidth;

  //    img = new Image();
  //    img.src = 'http://static.guineashots.com/tutorials/easeljs/assets/bubbles.png';
  //    img.onload = function (event) {

  //        var data = {
  //            framerate: 10,
  //            images: [img],
  //            frames: { width: 64, height: 64, regX: 32, regY: 32 },
  //            animations: {
  //                'explode': [0, 10],
  //            }
  //        }

  //        var spritesheet = new createjs.SpriteSheet(data);
  //        var animation = new createjs.Sprite(spritesheet, 'explode');
  //        animation.x = canvas.width / 2;
  //        animation.y = canvas.height / 2;

  //        stage.addChild(animation);
  //        var i = 0;

  //        createjs.Ticker.addEventListener("tick", update);
  //        function update(event) {
             
  //                animation.x = 50 + i;
  //                animation.y = 40 + 1;
  //                stage.update();

  //                i++;

  //                if (i > 300) {
  //                    i = 0;
  //                }
  //        }
  //    }
  //}

    //init();




  function init() {
      var canvas = document.getElementById('demoCanvas')
      var stage = new createjs.Stage(canvas);

      canvas.width = window.innerWidth;

      img = new Image();
      img.src = 'http://static.guineashots.com/tutorials/easeljs/assets/bubbles.png';
      img.onload = function (event) {

          var data = {
              framerate: 10,
              images: [img],
              frames: { width: 64, height: 64, regX: 32, regY: 32 },
              animations: {
                  'explode': [0, 10],
              }
          }

          var spritesheet = new createjs.SpriteSheet(data);
          var animation = new createjs.Sprite(spritesheet, 'explode');
          animation.x = canvas.width / 2;
          animation.y = canvas.height / 2;

          stage.addChild(animation);
          var i = 0;

          createjs.Ticker.addEventListener("tick", update);
          function update(event) {

              animation.x = 50 + i;
              animation.y = 40 + 1;
              stage.update();

              i++;

              if (i > 300) {
                  i = 0;
              }
          }
      }
  }

  init();


});