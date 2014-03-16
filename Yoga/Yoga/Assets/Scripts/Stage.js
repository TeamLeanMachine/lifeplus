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

var timer1:int;
var startTime:int;

var left:Arrow;
var up:Arrow;
var down:Arrow;
var right:Arrow;

var scre:GUIText;

function Start () {
	score = 0;
	print("STARTED");
	//gameObject.renderer.enabled = false;
	
	level = "111114444422222333331234123412341234432143214312432143124321";
	first = true;
	timer1 = 0;
	startTime = 0;
	
	counter = 0;
	note = level.ToCharArray()[counter];
	
	l = false;
	u = false;
	d = false;
	r = false;
	
	scre = GameObject.Find("Score").GetComponent("GUIText");
	scre.text = "Score: 0";
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
		
	} 
}

function OnGUI()
{
 
    //makes a GUI button at coordinates 10, 100, and a size of 200x40
    if(GUI.Button(Rect( 1, Screen.height-25, 75, 25 ),"Restart"))
    {
       //Loads a level
      Application.LoadLevel("Yoga");
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
	if (timer1 > 0.001){
		
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