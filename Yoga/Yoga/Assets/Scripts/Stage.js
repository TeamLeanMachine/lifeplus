
#pragma strict

var score:int;
var level:String;
var note:char;
var size:int;
var counter:int;

var first:boolean;

var l:boolean;
var u:boolean;
var d:boolean;
var r:boolean;

var done: boolean;

var timer1:int;
var startTime:int;
var gt: boolean;

var gameT1:int;
var gameT1start:int;

var left:Arrow;
var up:Arrow;
var down:Arrow;
var right:Arrow;

var scre:GUIText;
var timr:GUIText;

var totalTime:int;
var percentComplete:double;

function Start () {
	score = 0;
	print("STARTED");
	//gameObject.renderer.enabled = false;
	
	generateLevel();
	
	first = true;
	timer1 = 0;
	startTime = 0;
	
	gameT1 = 0;
	gameT1start = 0;
	gt = true;
	
	counter = 0;
	note = level.ToCharArray()[counter];
	
	l = false;
	u = false;
	d = false;
	r = false;
	
	done = false;
	
	totalTime = level.Length * 1.3;
	
	scre = GameObject.Find("Score").GetComponent("GUIText");
	scre.text = "Score: 0";
	timr = GameObject.Find("Timer").GetComponent("GUIText");
	timr.text = "" + totalTime;
	
}

function Update () {
	
	// print("gameObject name: " + gameObject.name);
	if ( l ) {
		l = false;
		left.begin();
	}
	
	if ( u ) {
		u = false;
		up.begin();
	}
	
	if ( d ) {
		d  = false;
		down.begin();
	}
	
	if ( r ) {
		r = false;
		right.begin();
	}
	
	if ( counter < level.Length ){
		TimerStart();
	} else {
		print("done?");
	}
	
	print(counter);
	
	// end the game
	if ( done ) {
		print("ENDDED");
		// save here before loading the level
		saveLevel();
		
		// load the end of Yoga level
		Application.LoadLevel("End");
	}
	
	gameTimer();
}

function OnGUI()
{
 
    //makes a GUI button at coordinates 10, 100, and a size of 200x40
    if(GUI.Button(Rect( 1, Screen.height-25, 75, 25 ),"Restart"))
    {
       //Loads a level
      Application.LoadLevel("YogaLevelMenu");
    }
}

function incrementScore() {
	score++;
	print("Score: " + score);
	scre.text = ("Score: " + score);
}

function TimerStart(){
	if (first == true) {
		startTime = Time.time;
		//print("StartTime: " + startTime);
		first = false;	
	}
	timer1 = Time.time - startTime;
	//print("timer1: " + timer1);
	if (timer1 > 0){
		
		left = GameObject.Find("1Left").GetComponent("Arrow");
		up = GameObject.Find("2Up").GetComponent("Arrow");
		down = GameObject.Find("3Down").GetComponent("Arrow");
		right = GameObject.Find("4Right").GetComponent("Arrow");
		
		//Instantiate arrow here
		if (note == '1') {
			left = Instantiate(left);
			l = true;
			counter++;
			if (counter < level.Length) {
				note = level.ToCharArray()[counter];
			}
		} else if (note == '2') {
			up = Instantiate(up);
			u = true;
			counter++;
			if (counter < level.Length) {
				note = level.ToCharArray()[counter];
			}
		} else if (note == '3') {
			down = Instantiate(down);
			d = true;
			counter++;
			if (counter < level.Length) {
				note = level.ToCharArray()[counter];
			}
		} else if (note == '4') {
			right = Instantiate(right);
			r = true;
			counter++;
			if (counter < level.Length) {
				note = level.ToCharArray()[counter];
			}
		}
		first = true;
	}
}

function gameTimer() {
	if ( gt ) {
		gameT1start = Time.time;
		gt = false;
	}
	gameT1 = Time.time - gameT1start;
	if ( (totalTime - gameT1) <= 0 ) {
		done = true;
	} else {
		timr.text = "" + (totalTime - gameT1);
	}
}

function generateLevel() {
	var selectedLevel = PlayerPrefs.GetInt("selectedLevel");
	if ( selectedLevel == 1 ) {
		level = "1111122222333334444";
	} else if (selectedLevel == 2 ) {
		level = "1234123412341234123";
	} else if (selectedLevel == 3 ) {
		level = "3421322243231342313";
	} else if (selectedLevel == 4 ) {
		level = "1123432342123423344";
	} else if (selectedLevel == 5 ) {
		level = "1234232232333444111";
	}

}

// saves level informationa and calculates end game state
function saveLevel() {
	var rating:int;
	var totalPoss:double;
	var actual:double;

	totalPoss = level.Length * (1.0d);
	actual = score * (1.0d);
	
	percentComplete = actual/totalPoss;
	if ( percentComplete > .9 ) {
		rating = 3;
	} else if ( percentComplete > .75 ) {
		rating = 2;
	} else if ( percentComplete > .5 ) {
		rating = 1;
	} else {
		rating = 0;
	}
	PlayerPrefs.SetInt("newScoreRating", rating);
	PlayerPrefs.SetInt("newScore", score);
}