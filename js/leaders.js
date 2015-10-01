$(document).ready( function() {
	
	// CREATE ALL THE LEADERS OBJECTS

	function Person (name, dates, image, link, byline, question, answers, correct, picture, explanation) {
		this.name = name;
		this.dates = dates;
		this.image = image;
		this.link = link;
		this.byline = byline;
		this.question = question;
		this.answers = answers;
		this.correct = correct;
		this.picture = picture;
		this.explanation = explanation;
	}

	var leaders = new Array();
	leaders[0] = new Person(
		"Theodor Herzl", 
		"1860-1904",
		"images/Herzl_1.jpg",
		"The visionary behind modern Zionism and the reinstitution of a Jewish homeland.",
		"Herzl was witness to an important world event that influenced his thinking and was the impetus to his involvement in Zionism. What was this event?",
		["Russian Pogroms", "The Dreyfus Affair", "Electricity is invented", "Destruction of the 2nd Temple", "World War I"],
		"The Dreyfus Affair",
		"images/Herzl_2.jpg",
		"In 1894, Captain Alfred Dreyfus, a Jewish officer in the French army, was unjustly accused of treason, mainly because of the prevailing anti-Semitic atmosphere. Herzl witnessed mobs shouting “Death to the Jews” in France, the home of the French Revolution, and resolved that there was only one solution: the mass immigration of Jews to a land that they could call their own. Thus, the Dreyfus Case became one of the determinants in the genesis of Political Zionism."
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
		" With whom did Begin share a Nobel Peace prize in 1979?",
		["Jimmy Carter", "Margaret Thatcher", "Anwar Sadat", "Mahmoud Abbas ", "Yasser Arafat"],
		"Anwar Sadat",
		"images/Begin_2.jpg",
		"The Camp David Accords were signed by Egyptian President Anwar El Sadat and Israeli Prime Minister Menachem Begin on 17 September 1978, following thirteen days of secret negotiations at Camp David. The two framework agreements were signed at the White House, and were witnessed by United States President Jimmy Carter. The second of these frameworks (A Framework for the Conclusion of a Peace Treaty between Egypt and Israel) led directly to the 1979 Egypt-Israel Peace Treaty. Due to the agreement, Sadat and Begin received the shared 1978 Nobel Peace Prize."
	);

});