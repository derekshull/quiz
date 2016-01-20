$(document).ready( function() {

	var submission = "";
	var counter;
	var score;
	var rand;
	

	// SET COUNTER AT 1;
	var resetCounters = function() {
		counter = 1;
		$('.current').text(counter);
		score = 0;
		$('.score-num').text(score);
	}

	resetCounters();


	// INTRO SCREEN
	
	$('.intro-text a').on('click', function (event) {
		event.preventDefault();
		$('.intro').hide();
		$('.navbar').show();
		$('.main').show();
		$('footer').show();
	});


	// CREATE ALL THE LEADERS OBJECTS

	function Person (name, dates, image, byline, question, answers, correct, picture, explanation) {
		this.name = name;
		this.dates = dates;
		this.image = image;
		this.byline = byline;
		this.question = question;
		this.answers = answers;
		this.correct = correct;
		this.picture = picture;
		this.explanation = explanation;
	}

	var leaders = new Array();
	leaders[0] = new Person(
		"Abraham Block", 
		"1780?-1857",
		"http://www.encyclopediaofarkansas.net/media/gallery/photo/AbrahamBlock_t.jpg",
		"The patriarch of the first documented Jewish family to immigrate to the state of Arkansas.",
		"After a period as a businessman in Virginia, Block moved this familiy to where in search of new economic oppurtunities?",
		["South Arkansas", "East Georgia", "Northeast Arkansas", "California", "Southwest Arkansas"],
		"Southwest Arkansas",
		"http://www.historicwashingtonstatepark.com/!userfiles/ABlock.jpg",
		"Abraham Block was the patriarch of the first documented Jewish family to immigrate to the state of Arkansas. After a period as a businessman in Virginia, Block moved this familiy to southwest Arkansas in search of new economic oppurtunities."
	);
	
	leaders[1] = new Person(
		"Abraham Block", 
		"1780?-1857",
		"http://www.encyclopediaofarkansas.net/media/gallery/photo/AbrahamBlock_t.jpg",
		"The patriarch of the first documented Jewish family to immigrate to the state of Arkansas.",
		"After a period as a businessman in Virginia, Block moved this familiy to where in search of new economic oppurtunities?",
		["South Arkansas", "East Georgia", "Northeast Arkansas", "California", "Southwest Arkansas"],
		"Southwest Arkansas",
		"http://www.historicwashingtonstatepark.com/!userfiles/ABlock.jpg",
		"Abraham Block was the patriarch of the first documented Jewish family to immigrate to the state of Arkansas. After a period as a businessman in Virginia, Block moved this familiy to southwest Arkansas in search of new economic oppurtunities."
	);
	
	leaders[2] = new Person(
		"Abraham Block", 
		"1780?-1857",
		"http://www.encyclopediaofarkansas.net/media/gallery/photo/AbrahamBlock_t.jpg",
		"The patriarch of the first documented Jewish family to immigrate to the state of Arkansas.",
		"After a period as a businessman in Virginia, Block moved this familiy to where in search of new economic oppurtunities?",
		["South Arkansas", "East Georgia", "Northeast Arkansas", "California", "Southwest Arkansas"],
		"Southwest Arkansas",
		"http://www.historicwashingtonstatepark.com/!userfiles/ABlock.jpg",
		"Abraham Block was the patriarch of the first documented Jewish family to immigrate to the state of Arkansas. After a period as a businessman in Virginia, Block moved this familiy to southwest Arkansas in search of new economic oppurtunities."
	);
	
	


	// PICK A RANDOM NUMBER AND TAKE IT OUT OF THE LIST
	var values = [];

	var genValues = function() {
		for (var i = 0; i < leaders.length; i++ ){
		    values.push(i);
		};	
	};
	genValues();

	var chooseRand = function() {
		rand = values.splice(Math.random()*values.length,1)[0];
	};

	chooseRand();


	// NEW QUESTION - PLACE OBJECT INTO HTML
	var newQuestion = function() {
		$(".leaderimg").attr('src', leaders[rand].image);
		$(".leadername h1").text(leaders[rand].name);
		$(".dates").text(leaders[rand].dates);
		$(".leaderpic a").attr('href', leaders[rand].link);
		$(".byline").text(leaders[rand].byline);
		$(".thequestion").text(leaders[rand].question);

		// PLACE ANSWERS INTO HTML
		var answer_values = [];

		for (var i = 0; i < 3; i++ ){
		    answer_values.push(i);
		};

		$(".answer").each( function() {
			var rand2 = answer_values.splice(Math.random()*answer_values.length,1)[0];
			$(this).text(leaders[rand].answers[rand2]);
		});
	};
	newQuestion();


	// RESET ALL OPTIONS TO NON-SELECTED
	var resetOptions = function() {
		$('#options li').removeClass('selected').addClass('not-selected');
		submission = "";
	};


	// MOVE QUESTION COUNTER FORWARD ONE
	var counterInc = function() {
		counter += 1;
		$('.current').text(counter);
	};


	// WHEN USER CHOOSES AN ANSWER MARK IT & REMEMBER IT
	$('.answer').on('click', function () {
		$(this).parent().toggleClass('highlighted');
	});
	
	$('#options').on('click', 'li', function () {
	    if ($(this).hasClass('selected'))
	    {
	        $(this).removeClass('selected');
	        $('#options li').removeClass('not-selected');
	        submission = "";    
	    }
	    else
	    {
	        $('#options li').removeClass('selected').addClass('not-selected');
	        $(this).removeClass('not-selected').addClass('selected');
	        submission = $(this).find(".answer").text();
	    }
	});


	// ADD 20 POINTS TO SCORE IF CORRECT
	var addPoints = function() {
		score += 20;
		$('.score-num').text(score);
	};


	// SHOW MODAL
	var showAnswer = function() {
		$(".exp-pic").attr('src', leaders[rand].picture);
		$(".explain-text").text(leaders[rand].explanation);
		$("#ansModal").modal({"show":"true"});
	};


	// WHEN USER CLICKS SUBMIT CHECK IF ANSWER IS CORRECT
	$('.submit').on('click', function () {
		if (submission == "") {
			$("#plsSubmitModal").modal({"show":"true"});
		}
		else {
			if (submission == leaders[rand].correct) {
				$(".modal-title").text("Correct!");
				$(".modal-answer").text(leaders[rand].correct);
				$(".modal-score").show();
				showAnswer();
				addPoints();
			}
			else {
				$(".modal-title").text("Incorrect!");
				$(".modal-answer").text("The correct answer is " + leaders[rand].correct);
				$(".modal-score").hide();
				showAnswer();
			}
		}
		$(this).blur();
	});

	$('#ansModal').on('hidden.bs.modal', function () {
    	nextQuestion()
    });


	// NEXT QUESTION FUNCTION
	var nextQuestion = function() {
		if (counter < 3) {
			chooseRand();
			resetOptions();
			counterInc();
			newQuestion();
			$('html, body').animate({ scrollTop: 0 }, 300);
		}
		else {
			endGame();
		};
	};


	// RESET GAME FUNCTION
	var resetGame = function() {
		resetCounters();
		resetOptions();
		genValues();
		chooseRand();
		newQuestion();
	};


	// IF USER RESETS GAME
	$('.glyphicon').on('click', function() {
		$("#restartModal").modal({"show":"true"});
	});

	$('.restart').on('click', function() {
		resetGame();
		$("#restartModal").modal('hide');
	});


	// RESET ICON TOOLTIP
	 $(".glyphicon").tooltip({placement: 'bottom'});


	 // END OF GAME MODAL
	 var endGame = function() {
	 	$(".scoreTotal").text(score);
	 	var rightAnswers = score / 20;
	 	$(".ansCorrect").text(rightAnswers);
	 	$(".modal-title").text("Game Over");
	 	switch (score) {
	 		case 0:
	 			$(".feedback").text("You weren't paying any attention, where you!?");
	 			break;
	 		case 20:
	 			$(".feedback").text("Can't you do better than this!?");
	 			break;
	 		case 40:
	 			$(".feedback").text("You'll never be an interpreter at this rate!");
	 			break;
			case 60:
	 			$(".feedback").text("So you weren't daydreaming the whole trip afterall!");
	 			break;
			case 80:
	 			$(".feedback").text("Almost a perfect score!  Awesome!");
	 			break;
	 		case 100:
	 			$(".feedback").text("You're a real history buff!  100%!");
	 			break;
	 	}
	 	$("#endModal").modal({"show":"true"});
	 };
  
// END OF JAVASCRIPT
});
