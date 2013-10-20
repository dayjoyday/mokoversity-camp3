var gameModule = (function () {

	var timeoutvar,
	    counter = 0;

	var colors = ['#52D017','#FFE87C','#00bfff'],
        length = colors,length;


    function touchEvent() {
    	var x = evt.clientX,
    	    y = evt.clientY;

    	console.log("Clicked:" + x + "," + y);
    }

	function start() {
		document.getElementById('game');
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

            } else{
            	timeoutVar = setTimeout(start, 1000);
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