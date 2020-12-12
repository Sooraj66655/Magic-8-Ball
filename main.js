/****************************************Enter Name Div********************************************/
function Future() {
	document.getElementById('clickbtn').disabled=true;
	var name = document.getElementById("name").value;
	if (name != '') {
		//document.getElementById("topDiv").style.display = "none";
		document.getElementById("mainWelcomeDiv").style.display = "block";
		document.getElementById("message").innerHTML = "Welome!" + "<br>" + name + " If You Want to Know About Your Precdictable Future Click On 8 Ball Button Below 👇";
	} else {
		alert("Please Enter Name..")
	}
}

/************************************Welcome Div Confirm Button**************************************/
function ConfirmBtn() {
	if (confirm("Do You Want to Go Ahead For Your Future Prediction!")) {
		document.getElementById("QuestionAnsDiv").style.display = "block";
		document.getElementById("mainWelcomeDiv").style.display = "none";
	} else {
		alert("You Did cancel....");
		document.getElementById("name").value = '';
		document.getElementById("cancel").style.display = "block";
		document.getElementById("mainWelcomeDiv").style.display = "none";
		document.getElementById("QuestionAnsDiv").style.display = "none";
	}
}


/****************************************Cancel Div 8 Ball Button************************************/
function ConfirmBtn2() {
	if (confirm("Do You Want to Go Ahead For Your Future Prediction!")) {
		alert("Please Enter Name And Go Ahead...")
		document.getElementById("cancel").style.display = "none";
	} else {
		document.getElementById("name").value = '';
		alert("You Did cancel....");

	}
}


/*****************************************Question 1 Prediction Answer**************************/
function marrigePredicated() {
	var first = document.getElementById("first").value;
	alert(first);
	var marrige = ["When You have Crossed 21 Years then You will become a Husband of a Girl..😝",
		"it will be late not at time Please wait..", "It's Not Predicatble By Me Sorry boss You Shuld Ask to Alexa..", "Never! You Will live Whole life Without marrige..",
		"My sources say no", "Signs point to yes", "It is certain", "Reply hazy try again"
	];
	marrige = marrige[Math.floor(Math.random() * marrige.length)];
	document.getElementById("marrige").innerHTML = marrige;

}


/*****************************************Question 2 Prediction Answer**************************/
function twinPredicated() {
	var twin = ["No, You have Always Single kid.", "Yes it may be Second time Child Birth of Your Wife..", "Sorry...it's Not possible to Predicated By Me", "My sources say no",
		"It is certain", "Reply hazy try again"
	];
	twin = twin[Math.floor(Math.random() * twin.length)];
	document.getElementById("twin").innerHTML = twin;
}


/*****************************************Question 3 Prediction Answer**************************/
function millionairePredicated() {
	var millionaire = ["Yes, As You do Struggle at this Time You will Become Soon...", "Reply hazy try again", "Yes, But It takes more time",
		"No, It is not Predited by me But if You Work Hard It possible..", "Yes but for it You Should invent large Ammount in Your Business.."
	];

	millionaire = millionaire[Math.floor(Math.random() * millionaire.length)];
	document.getElementById("millionaire").innerHTML = millionaire;
}


/*****************************************Question 4 Prediction Answer**************************/
function wifePredicated() {
	var wife = ["Only One time and Your Gf Will be Your Wife..", "Two Wife One will be Ghrwali and another one Bahr Wali...",
		"It's Not Certain till now", "It's Depend Upon You....", "More Than 2 But not in Persence of Any Wife You Have Only One Wife at a time"
	];
	wife = wife[Math.floor(Math.random() * wife.length)];
	document.getElementById("wife").innerHTML = wife;

}


/*****************************************Question 5 Prediction Answer**************************/
function livePredicated() {
	var live = ["In Usa With Your family", "In Saudia with the Work of Your Profession", "In Your Room in India",
		"It's Not Certain till now But It May Be in india.", "At Earth lol...."
	];
	live = live[Math.floor(Math.random() * live.length)];
	document.getElementById("live").innerHTML = live;

}


/*****************************************Question 6 Prediction Answer**************************/
function dreamPredicated() {
	var dream = ["Snake, and you Play with that and round off on your neck", "Your Ex- With Her Husband", "Your mother with You in Kitchen...",
		"You And Your Wife Tour on Manali in Dream..", "It's not Predited by me till now", "Your Favorite place where you want to go."
	];
	dream = dream[Math.floor(Math.random() * dream.length)];
	document.getElementById("dream").innerHTML = dream;
}


/*****************************************Question 7 Prediction Answer**************************/
function placePredicated() {
	var place = ["uttar Pradesh which in India..", "You Live in  Lucknow and Work in Cedcoss pvt ltd.", "In Japan Work In Tcs as Software Engineer..",
		"Afrika in Your Own house", "Not Predited til Now try Again", "it's depend on You Where you Want to live"
	];
	place = place[Math.floor(Math.random() * place.length)];
	document.getElementById("place").innerHTML = place;
}


/*****************************************Question 8 Prediction Answer**************************/
function relationshipPredicated() {
	var relationship = ["By the Mutual Understanding and Hormory in relationship and behaviour", "By The care of that person and love more",
		"it's can't be done By One Side Efforts", "You Should Touch With them many Time", "This can't be predicated by me it done by You with Your Behaviour and loved",
		"By the Help Them "
	];
	relationship = relationship[Math.floor(Math.random() * relationship.length)];
	document.getElementById("relationship").innerHTML = relationship;
}


/*****************************************Question 9 Prediction Answer**************************/
function kiddsPredicated() {
	var kidds = ["Yes As You have Your Zentic Behaviour Inherite in Your Child..", "We can't predicted utill your child in front of Me",
		"No................", "Lol! Be Born First...", "it not certain till now", "Yes if Your Child have Co-education..", "Reply hazy try again"
	];

	kidds = kidds[Math.floor(Math.random() * kidds.length)];
	document.getElementById("kidds").innerHTML = kidds;
}


/*****************************************Question 10 Prediction Answer**************************/
function diePredicated() {
	var die = ["At The age of 57 By the heart Attack", "At the age of 14 Years by the car Accident", "At the age of 97 Years by the Suger and blood Presure",
		"At the Age of 35 by the Shoot", "Not Predica at this time", "Age not Decided but By the burn in fire."
	];
	die = die[Math.floor(Math.random() * die.length)];
	document.getElementById("die").innerHTML = die;
}


/*****************************************Question 11 Prediction Answer**************************/
function bornSeasonPredicated() {
	var bornSeason = ["Summer....", "Winter....", "Spring....", "Prewinter....", "Mansoon/Rainy Season.."];
	bornSeason = bornSeason[Math.floor(Math.random() * bornSeason.length)];
	document.getElementById("bornSeason").innerHTML = bornSeason;
}


/*****************************************Question 12 Prediction Answer**************************/
function financePredicated() {
	var finance = ["it's As Simple You Should Earn more Money", "Join A Goverment job..", "You shuld Open A Gold Shop...",
		"You Can hard Work For Earning Money..", "it's Not Predicated by me You shuold  Decide..", "Try Agin later......."
	];
	finance = finance[Math.floor(Math.random() * finance.length)];
	document.getElementById("finance").innerHTML = finance;

}


/*****************************************Question 13 Prediction Answer**************************/
function jobTypePredicated() {
	var jobType = ["Software Engineer....", "Doctor......", "Arctech Engineer....", "Professor....", "Pilot...", "It's not predictable.."];
	jobType = jobType[Math.floor(Math.random() * jobType.length)];
	document.getElementById("jobType").innerHTML = jobType;
}


/*****************************************Question 14 Prediction Answer**************************/
function workingPeriodPredicated() {
	var workingPeriod = ["Four Years...", "Sixty Years.....", "Fifteen Years....", "Ten Years", "Not Predicted by Me..", "You will be Work until You Die.."];
	workingPeriod = workingPeriod[Math.floor(Math.random() * workingPeriod.length)];
	document.getElementById("workingPeriod").innerHTML = workingPeriod;
}


/*****************************************Question 15 Prediction Answer**************************/
function tourPredicated() {
	var tour = ["Yes It will bw Happended If You Plan Without Depending On Your Friends..", "No There are no chances to go this year", "Yes It will be happen and You Will Go with Your Family..",
		"Sorry... It's Can't predicated by me at this Time", "Yes But it's not Certain", "Noway..This time You Should not go Out of Counrty"
	];
	tour = tour[Math.floor(Math.random() * tour.length)];
	document.getElementById("tour").innerHTML = tour;
}


/*****************************************Question 16 Prediction Answer**************************/
function fourWheelerPredicated() {
	var fourWheeler = ["Yes You can Buy Scorpio at the end of this Year..", "No You can't Buy Scropio But Yes You can Buy Car", "No Chances This Year You Can't buy..",
		"Yes But You will be Needed to struggle for this", "Sorry it's can't Predictable by me This Time", "Yes May Be But not sure.."
	];
	fourWheeler = fourWheeler[Math.floor(Math.random() * fourWheeler.length)];
	document.getElementById("fourWheeler").innerHTML = fourWheeler;
}


/********************************************Cancel Butoon**************************************/
function cancel() {
	if (confirm("Are You Sure to Exit..?")) {
		window.close();
	} else {

	}
}


