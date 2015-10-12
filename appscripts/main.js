//http://speckyboy.com/demo/windmill-demo/index.html
require(
    [],
    function () {
        var difficulty = parseInt(prompt("Hello! Welcome to the Game! This is a very simple game. Click the 'Start' button when you are ready to start the game. Then find Nemo and click on it as many times as possible within 10 seconds! The more clicks you get, the higher your score! You can choose the difficulty level by entering any number between 1-10, 1 being easiest, 10 being most difficult"));
        if (difficulty != null) {
}
        
            
        console.log("yo, I'm alive!");

        //window.prompt("Input difficulty level.");

        var paper = new Raphael(document.getElementById("mySVGCanvas"));
        var pWidth = paper.canvas.offsetWidth;
        var pHeight = paper.canvas.offsetHeight;

        var sound = new Audio("resources/Background music.wav");
            sound.play();
            sound.loop = true;
            
        var bubbleSound = new Audio("resources/bubble.wav");
            bubbleSound.play();
            bubbleSound.loop = true;
            bubbleSound.timer = 10000;

        var counter = 0;
        var maxCount = 10; 
        var starttime;
        var totaltime;


        var startButton = paper.circle(300,200,40);
            startButton.attr({
                'fill': "lightgreen",
                'stroke': "black",
                'stroke-width': 3
            });

        var startText = paper.text(300,200, 'START');

       
        startButton.hide();
        startText.hide();

        //Adding a timer event to keep the game fixed at 10 seconds.
        //setTimeout(function(e){alert("You scored " + counter*10 + " points in 10 seconds.");}, 10000);
        //console.log("Start");


        var ready = function(){
            startButton.show();
            startText.show();
        }

        var start = function(){
            console.log("Game is starting.");
            startButton.hide();
            startText.hide();
            rect1.show();

            counter = 0;
            starttime = Date.now();
            console.log("time =" + starttime);

            moveSquare();

            gameTimer = setInterval(moveSquare, 3/difficulty*1000);
            setTimeout(endGame, 10000);


        }

        startButton.node.addEventListener('click', start);

        //-------------------------------------------------------------------------

        var rect1 = paper.rect(-100,-100,100,100); //top left corner //hiding the rectangle
        rect1.attr({
            'fill': "url('http://www.icon100.com/up/3486/96/10-clown-fish-fish-nemo.png')",
            'border': "none"
        });



        /*rect1.xrate=10;
        rect1.yrate=10;
        console.log("xrate is " + rect1.xrate +", and yrate is " + rect1.yrate);

        rect1.animate();
        */

        var randInt = function( m, n ){
            var range = n-m+1;
            var frand = Math.random()*range;
            return m + Math.floor(frand);
        }

        //Add a function to move the square around screen


        //How to make the square move by itself???
        var moveSquare = function(){
            var posX, posY;

                posX = randInt(0,5);
                posY = randInt(0,3);
                rect1.attr({
                    x: posX*100,
                    y: posY*100

                });

                console.log("Your score now is " + counter*10)

        }

        var addClick = function(){
            var dingSound = new Audio("resources/ding.wav");
            dingSound.play();
            counter++;
        };

        var endGame = function(){
            confirm("Your score is " + counter*10 + "!");
            ready();
            clearTimeout(gameTimer);
            rect1.hide();
            var difficulty = parseInt(prompt("Choose your difficulty level: 1 being easiest, 10 being most difficult"));
            if (difficulty != null) {}

        }
        
                
        rect1.node.addEventListener('click', addClick, function(){
            dingSound.play();
        });

        
        //1st argument is click, 2nd argument is score

        ready();

    });

     //var oldx = rect1.width - 50;
        //var oldy = rect1.height - 50;
        //var randNum = Math.floor(Math.random() * 500 + 1);

        //var newx = Math.floor(Math.random() * oldx);
        //var newy = Math.floor(Math.random() * oldy);

        //return [newx,newy];

         //if (rect1.ypos > pHeight -5) {rect1.yrate= -dot.yrate}
            //if (rect1.ypos < pHeight-5) {rect1.yrate= dot.yrate}
            //if (rect1.xpos > pWidth-5) {rect1.xrate= -dot.xrate}
            //if (rect1.xpos > pWidth-5) {rect1.xrate= dot.xrate}
            //if (rect1.xpos < 0) {dot.xrate= -rect1.xrate}
            //if (rect1.ypos < 0) {dot.yrate= -rect1.yrate}
