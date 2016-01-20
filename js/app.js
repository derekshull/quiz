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
		"http://www.historicwashingtonstatepark.com/!userfiles/ABlock.jpg",
		"The patriarch of the first documented Jewish family to immigrate to the state of Arkansas.",
		"After a period as a businessman in Virginia, Block moved this familiy to where in search of new economic oppurtunities?",
		["South Arkansas", "East Georgia", "Northeast Arkansas", "California", "Southwest Arkansas"],
		"Southwest Arkansas",
		"http://www.historicwashingtonstatepark.com/!userfiles/ABlock.jpg",
		"Abraham Block was the patriarch of the first documented Jewish family to immigrate to the state of Arkansas. After a period as a businessman in Virginia, Block moved this familiy to southwest Arkansas in search of new economic oppurtunities."
	);
	
	leaders[1] = new Person(
		"David Ben Gurion",
		"1886-1973",
		"images/Ben-Gurion_1.jpg",
		"The first Prime Minister of Israel and widely hailed as the State's main founder.",
		"What was the name of the kibbutz where David Ben Gurion lived?",
		["Yotvata", "Sde Dov", "Sde Boker", "Sde Nahum", "Ein Shemer"],
		"Sde Boker",
		"images/Ben-Gurion_2.jpg",
		"Kibbutz Sde Boker was established on 15 May 1952. In 1953 Prime Minister David Ben-Gurion resigned from office and moved to the kibbutz. Although he returned to politics in 1955, he continued to live in the kibbutz until his death in 1973, when he was buried nearby at Midreshet Ben-Gurion aside his wife Paula Ben-Gurion. Ben-Gurion moved to the kibbutz due to his vision of cultivating the arid Negev desert and building up its surrounding towns such as Yeruham and Dimona. He believed that eventually the Negev would be home to many Jews who would move to Israel, and he felt that Sde-Boker was a trailblazer and example for what should follow."
	);

	leaders[2] = new Person(
		"Golda Meir", 
		"1898-1978", 
		"images/Golda_1.jpg",
		"Israel's first and only female prime-minister. Ben-Gurion used to call Meir \"the best man in the government\"; she was often portrayed as the \"strong-willed, straight-talking, grey-bunned grandmother of the Jewish people\".",
		"In which US city did Golda Meir grow up?",
		["Milwaukee, Wisconsin", "Los Angeles, California", "Queens, New York", "Chicago, Illinois", "Seattle, Washington"],
		"Milwaukee, Wisconsin",
		"images/Golda_2.gif",
		"Golda Meir was born in Kiev in 1898. Economic hardship forced her family to emigrate to the United States in 1906, where they settled in Milwaukee, Wisconsin. Golda’s mother ran a grocery store on Milwaukee's north side, where by age eight Golda had been put in charge of watching the store when her mother went to the market for supplies. Golda attended the Fourth Street Grade School (now Golda Meir School) from 1906 to 1912. A leader early on, she organized a fund raiser to pay for her classmates' textbooks. After forming the American Young Sisters Society, she rented a hall and scheduled a public meeting for the event. She went on to graduate as valedictorian of her class, despite not knowing English at the beginning of her schooling."
	);

	leaders[3] = new Person(
		"Chaim Weizmann",
		"1874-1952",
		"images/Weizmann_1.jpg",
		"Zionist leader and Israeli statesman who served as President of the Zionist Organization and later as the first President of Israel.",
		"In addition to being an accomplished statesman, Chaim Weizmann was also a renown researcher and professor of:",
		["Physics", "Philosophy", "History", "Chemistry", "Computer Science"],
		"Chemistry",
		"images/Weizmann_2.jpg",
		"One of the few who have achieved success in two disparate fields, chemist and statesman Chaim Weizmann was born in 1874, in the small town of Motol, Russia. In 1885 he migrated to Pinsk to attend a Russian high school, where he studied chemistry and devoted much of his spare time to Zionist activities. After university studies in Germany and Switzerland, he taught at the University of Geneva. During the two decades following World War I, politics replaced chemistry as Weizmann's main pursuit. However, he did pursue scientific research, alongside his political activities, until the end of his life. In his later years (and while president of Israel), he worked at the Weizmann Institute of Science in Rehovot, Israel, where he died on November 9, 1952. "
	);

	leaders[4] = new Person(
		"Menachem Begin",
		"1913-1992",
		"images/Begin_1.jpg",
		"Founder of the Likud party and the sixth Prime Minister of the State of Israel. Signed peace treaty with Egypt.",
		"With whom did Begin share a Nobel Peace prize in 1979?",
		["Jimmy Carter", "Margaret Thatcher", "Anwar Sadat", "Mahmoud Abbas ", "Yasser Arafat"],
		"Anwar Sadat",
		"images/Begin_2.jpg",
		"The Camp David Accords were signed by Egyptian President Anwar El Sadat and Israeli Prime Minister Menachem Begin on 17 September 1978, following thirteen days of secret negotiations at Camp David. The two framework agreements were signed at the White House, and were witnessed by United States President Jimmy Carter. The second of these frameworks (A Framework for the Conclusion of a Peace Treaty between Egypt and Israel) led directly to the 1979 Egypt-Israel Peace Treaty. Due to the agreement, Sadat and Begin received the shared 1978 Nobel Peace Prize."
	);

	leaders[5] = new Person(
		"Yitzhak Rabin",
		"1922-1995",
		"images/Rabin_1.jpg",
		"Fifth Prime Minister of Israel, serving two terms in office, 1974–77 and 1992 until his assassination in 1995. Brokered historic peace treaty with the PLO.",
		"Between 1968-1973 Rabin served as Israel’s ambassador to which country?",
		["Syria", "France", "Jordan", "USA", "Australia"],
		"USA",
		"images/Rabin_2.jpg",
		"Following his retirement from the IDF Rabin became ambassador to the United States beginning in 1968, serving for five years. In this period the US became the major weapon supplier of Israel and in particular he managed to get the embargo on the F-4 Phantom fighter jets lifted. During the 1973 Yom Kippur War he served in no official capacity and in the elections held at the end of 1973 he was elected to the Knesset as a member of the Alignment."
	);

	leaders[6] = new Person(
		"Ariel “Arik” Sharon",
		"1928-2014",
		"images/Sharon_1.jpg",
		"Israeli statesman, former Prime Minister and retired Major-General who served in the IDF for more than 25 years. In a controversial move, led Israel’s evacuation out of the Gaza Strip in 1995.",
		"What battle in the 1948 War of Independence was Ariel Sharon badly injured in?",
		["The Battles of Latrun", "Battle of the Beaufort", "Battle of Mount Hermon", "Operation Entebbe", "Operation Solomon"],
		"The Battles of Latrun",
		"images/Sharon_2.jpg",
		"The Battles of Latrun were a series of military engagements between the Israel Defense Forces and the Jordanian Arab Legion on the outskirts of Latrun between 25 May and 18 July 1948, during the 1948 Arab–Israeli War. Ariel Sharon, the future Prime Minister of Israel, a lieutenant at the time, headed a platoon of the 32nd Battalion and suffered serious injury to his stomach during the battle. Many years later, Sharon tells about the battle in Latrun: \"This battle affected me in many ways, but first and foremost it affected me in regards to the subject of wounded soldiers in battle, as it was inevitable to abandon the wounded soldiers.\" As commander of the Paratroops and Unit 101, Israel’s first true elite force, he made it an ironclad rule that the injured never be left in the field."
	);

	leaders[7] = new Person(
		"Shimon Peres",
		"Born 1923",
		"images/Peres_1.jpg",
		"Ninth President of Israel from 2007 to 2014. Served twice as the Prime Minister of Israel and twice as Interim Prime Minister, and was a member of 12 cabinets in a political career spanning over 66 years.",
		"Which governmental role did Shimon Peres not serve in?",
		["President", "Prime Minister", "Minister of Finance", "Minister of Defense", "Minister of Education"],
		"Minister of Education",
		"images/Peres_2.jpg",
		"Shimon Peres served as a Member of Knesset for 48 years, the longest term of service in the history of the Israeli Knesset. He served as Minister in 12 cabinets and served twice as Prime Minister (1984-1986, 1995-1996), Deputy Minister of Defense under Ben Gurion (1959-1965), Treasury Minister (1988-1990), Minister of Defense (1974-1977, 1995-1996), and Foreign Minister (1986-1988, 2001-2002). In 2007 Shimon Peres was elected to serve as the ninth President of the State of Israel."
	);

	leaders[8] = new Person(
		"Rabbi Ovadia Yosef",
		"1920-2013",
		"images/Ovadia_1.jpg",
		"Talmudic scholar, an authority on Jewish religious law, and the longtime spiritual leader of Israel's ultra-orthodox Shas party. Born in Iraq, he was the Sephardi Chief Rabbi of Israel from 1973 to 1983.",
		"Which saying did Rabbi Ovadia Yosef make frequent use of?",
		["\“Klieg, Klieg, Klieg-Du bist a Nar. You are smart, smart. smart – but you are not so smart!\”", "\“Restore past glory\”", "\“Infantry is the most, brother\” (קרבי זה הכי אחי)", "ֿֿֿ\“If I am not for myself who is for me? And being for my own self, what am 'I'? And if not now, when?ֿ\”", "\“There are no problems, only opportunities for growth.\”"],
		"\“Restore past glory\”",
		"images/Ovadia_2.jpg",
		"Yosef frequently made use of the slogan \"Restore past glory\" (להחזיר עטרה ליושנה) as a metaphor embodying both his social and halakhic agenda. On a social level, it is widely viewed as a call to pursue a political agenda that will restore the pride of the Mizrahi Jews in Israeli society, which historically suffered from discrimination and were generally of a lower socio-economic status than their Ashkenazi counterparts. From a halakhic perspective, the metaphor is more complex. It is widely agreed by Rabbis and secular researchers alike that the 'Crown' of the metaphor refers to the halakhic supremacy which Yosef attaches to the rulings of Rabbi Yosef Karo."
	);

	leaders[9] = new Person(
		"Shulamit Aloni",
		"1928-2014",
		"images/Aloni_1.jpg",
		"Longtime left-wing Israeli minister and Parliament member who was an early champion of civil liberties, challenger of religious hegemony and Israeli settlements in Palestinian territories.",
		"What was the name of the first political party that Aloni formed?",
		["Ratz", "Peace Now", "Meretz", "Kadima", "Yesh Gvul"],
		"Ratz",
		"images/Aloni_2.jpg",
		"Aloni joined the Mapai Party in 1959 and was first elected to Knesset in 1965. In 1973, she left the Labor Party and established Ratz (Citizens Right Movement), a political party advocating electoral reform, separation of religion and state, and a Basic Law protecting human rights. As Ratz leader, Aloni was elected to Knesset in 1973 and served continiously as head of Ratz until 1992. Before the 1992 elections, Aloni led Ratz into a coalition with Shinui and Mapam to form the new Meretz Party, which won 12 seats in the election."
	);

	leaders[10] = new Person(
		"Yitzhak Shamir",
		"1915-2012",
		"images/Shamir_1.jpg",
		"Underground leader, spymaster, parliamentarian and the seventh Prime Minister of the State of Israel - was born Yizhak Yzernitzky in Ruzinoy, Poland.",
		"Before the founding of the State of Israel, Shamir served as the principal director of operations of which underground paramilitary organization?",
		["The Lehi", "Irgun Zvai Leumi", "Haganah", "Nili", "The IRA"],
		"The Lehi",
		"images/Shamir_2.jpg",
		"Shamir served as Lehi's principal director of operations until 1946, when he was detained again by the British and exiled to a Britishrun prison camp in Eritrea. In 1947, he escaped from the camp as well, made his way to the neighboring French colony of Djibouti, and was later granted political asylum in France. Upon his return to Israel, Shamir took back his command of the Lehi, a position he would hold until the organization disbanded in 1949 after the formation of the Israel Defense Forces."
	);

	leaders[11] = new Person(
		"Moshe Dayan",
		"1915-1981",
		"images/Dayan_1.jpg",
		"Moshe Dayan was an Israeli military leader who later became a crusader for peace. He played a key role in four wars and helped negotiate the Israel-Egypt peace treaty.",
		"Dayan lost his left eye in battle with which country’s forces?",
		["Vichy France", "Nazi Germany", "Lebanese Hizbollah", "Palestinian Hamas", "The Jordanian Army"],
		"Vichy France",
		"images/Dayan_2.jpg",
		"On 7 June 1941, the night before the invasion of the Syria–Lebanon Campaign, Dayan's unit within a small Australian-Palmach-Arab reconnaissance task force crossed the border and secured two bridges over the Litani River. When they were not relieved as expected, at 04:00 on 8 June, the unit perceived that it was exposed to possible attack and — on its own initiative — assaulted a nearby Vichy police station, capturing it in a firefight. A few hours later, as Dayan was on the roof of the building using binoculars to scan enemy Vichy French positions on the other side of the river, they were struck by a French rifle bullet fired by a marksman from several hundred yards away, propelling metal and glass fragments into his left eye and causing it severe damage. Six hours passed before he could be evacuated, and he would have died if not for Bernard Dov Protter who took care of him until they were evacuated. Dayan lost the eye."
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

		for (var i = 0; i < 5; i++ ){
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
		if (counter < 5) {
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
	 			$(".feedback").text("You weren't paying any attention in Hebrew school, where you!?");
	 			break;
	 		case 20:
	 			$(".feedback").text("What would your bubby say!?");
	 			break;
	 		case 40:
	 			$(".feedback").text("You'll never find a nice Jewish husband / wife at this pace!");
	 			break;
			case 60:
	 			$(".feedback").text("So you weren't drunk the whole Birthright trip afterall!");
	 			break;
			case 80:
	 			$(".feedback").text("You bring us so much naches!");
	 			break;
	 		case 100:
	 			$(".feedback").text("You're a real chalutz! When are you making aliya?");
	 			break;
	 	}
	 	$("#endModal").modal({"show":"true"});
	 };
  
// END OF JAVASCRIPT
});
