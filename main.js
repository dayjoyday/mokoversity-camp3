var gameModule = (function () {

	var timeoutvar,
	    counter = 0,
	    ballX,
	    ballY,
	    ballR,
	    colors = ['#52D017','#FFE87C','#00bfff'],
        length = colors,length;

    function touchEvent(evt) {
    	var x = evt.clientX,
    	    y = evt.clientY,
    	    tmp = (ballX - x) * (ballX - x) + (ballY - y) * (ballY - y);

    	console.log("Clicked:" + x + "," + y);

    	if(tmp < ballR * ballR) {
    		console.log("Hit ! Your scores: " + scores);
    	}
    }

	function start() {

		document.getElementById("main").addEventListener("click", touchEvent,false);
		startGame();
    }

    function startGame() {
  	    var canvas = document.getElementById('game'),
	        ctx = canvas.getContext('2d'),

	        ballX = Math.floor(Math.random() * 600),
	        ballY = Math.floor(Math.random() * 450),
	        ballR = Math.floor(Math.random() * 80);

	        canvas.width = 640;
	        canvas.height = 480;

	        ctx.fillStyle = 'black';
	        ctx.beginPath();
	        ctx.arc( ballX, ballY, ballR, 0, Math.PI * 2, true);
	        ctx.fill();

            if(counter >= 10) {
             gameOver();
            } else{
            	timeoutVar = setTimeout(startGame, 2000);
            	counter = counter + 1;
            }
	    }
           function gameOver() {
            	console.log("Counter:" + counter);
        }

	    return {
	    	start: start
	    }

}) ();

gameModule.start();