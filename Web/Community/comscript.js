var database = [
	{
		username: "EVI",
		password: "123"
	},
	{
		username: "DAMI",
		password: "123"
	},
	{
		username: "NELI",
		password: "123"
	}
];
var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that"
	},
	{
			username: "Sujj",
			timeline: "Oh my gud"
	}
];

function isUserValid(username, password){
	for (var i=0; i < database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password ) {
			return true;	
		}
	}
	return false;
}



function signIn(username, password) {
		if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert ("Sorry, wrong username and password");
	}

}
	
	
var userNamePrompt = prompt("Wah\'s your username?");
var passwordPromt = prompt("Wh\'s your passwors?");

signIn(userNamePrompt, passwordPromt);

// 