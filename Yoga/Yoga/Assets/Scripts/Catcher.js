#pragma strict

var startTime:double;
var timer1:double;
var texture1: GUITexture;
var pressed:boolean;
var first:boolean;
var initTime:int;
var minDist:float;
var id:int;

function Start () {
	gameObject.renderer.enabled = false;
	print("Start: " + gameObject.name);
	pressed = false;
	first = true;
	initTime = 0;
	minDist = 200;
	id = Random.value * 1000;
}

function Update () {
	//testing
	//print("Catcher gameObject.name: " + gameObject.name);
	
	// delta's to detect different touch motions
	var dx:float;
	var dy:float;
	var dd:float;
	dx = 0;
	dy = 0;
	dd = 0;
	
	// swipe codes:
	// 0 = not sufficent to be a swipe
	// 1 = left
	// 2 = down
	// 3 = up
	// 4 = right
	var dir:int;
	
	// react differently to differently placed catchers
	if ( Input.touchCount == 1 && !pressed) {
		// print("touch " + Input.GetTouch(0).deltaPosition.y);
		dd = Input.GetTouch(0).deltaPosition.sqrMagnitude;
		
		if ( dd >= minDist || dd <= (-1 * minDist)) {
		
			dx = Input.GetTouch(0).deltaPosition.x;
			dy = Input.GetTouch(0).deltaPosition.y;

			if (Mathf.Abs(dx) > Mathf.Abs(dy)) {	// left or right
				// left is negative
				// right is positive
				if (dx > 0) { // positive
					dir = 4;
					
				} else if (dx < 0) { // negative
					dir = 1;
					
				} else { // equal
					dir = 0;
					
				}
				
			} else if (Mathf.Abs(dx) < Mathf.Abs(dy)) { // up or down
				// up is positive
				// down is negative
				if (dy > 0) { // positive
					dir = 3;
					
				} else if (dy < 0) { // negative
					dir = 2;
					
				} else { // equal
					dir = 0;
					
				}
				
			} else { // they're equal
				dir = 0;
			}
			
			// where we activate the game object
			if ( gameObject.name == "A1_Left" && dir == 1 ) {
				print("minDist: " + minDist);
				print("right" + id + " " + gameObject.name);
				gameObject.renderer.enabled = true;
				pressed = true;
			} else if ( gameObject.name == "A2_Up" && dir == 3 ) {
				print("minDist: " + minDist);
				print("up" + id + " " + gameObject.name);
				gameObject.renderer.enabled = true;
				pressed = true;
			} else if ( gameObject.name == "A3_Down" && dir == 2 ) {
				print("minDist: " + minDist);
				print("down" + id + " " + gameObject.name);
				gameObject.renderer.enabled = true;
				pressed = true;
			} else if ( gameObject.name == "A4_Right" && dir == 4 ) {
				print("minDist: " + minDist);
				print("left" + id + " " + gameObject.name);
				gameObject.renderer.enabled = true;
				pressed = true;
			} 
			
		}
	}
	
	// this is for testing
	if (gameObject.name == "A1_Left" && Input.GetKeyDown(KeyCode.LeftArrow)) {
		print ("------ left arrow pressed");
		print(transform.position.x);
		gameObject.renderer.enabled = true;
		pressed = true;
	} else if (gameObject.name == "A3_Down" && Input.GetKeyDown(KeyCode.DownArrow)){
		print ("------- down arrow pressed");
		gameObject.renderer.enabled = true;
		pressed = true;
	} else if (gameObject.name == "A2_Up" && Input.GetKeyDown(KeyCode.UpArrow)){
		print ("-------- up arrow pressed");
		gameObject.renderer.enabled = true;
		pressed = true;
	} else if (gameObject.name == "A4_Right" && Input.GetKeyDown(KeyCode.RightArrow)){
		print ("-------- right arrow pressed");
		gameObject.renderer.enabled = true;
		pressed = true;
	}
	
	if (pressed) {
		TimerStart();
	}
}

function TimerStart(){
	if (first == true) {
		startTime = Time.time;
		//print("StartTime: " + startTime);
		first = false;	
	}
	timer1 = Time.time - startTime;
	//print("timer1: " + timer1);
	if (timer1 > 0.5){
		//print("Timer is over");
		gameObject.renderer.enabled = false;
		pressed = false;
		first = true;
	}
}