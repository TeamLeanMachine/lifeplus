#pragma strict

var x: float;
var y: float;
var z: float;

var speed: double;
var initPos: Vector3;

var go:boolean;

function Start () {
	transform.position = Vector3(transform.position.x, transform.position.y, transform.position.z);
	print(transform.position.x + " " + transform.position.y + " " + transform.position.z);
	initPos = transform.position;
	go = false;
	gameObject.renderer.enabled = false;
	print("start");
}

function Update () {
	// print("name: " + gameObject.name + " GO: " + go);
	// if we reach here the user missed
	if (transform.position.y < -6) {
		if (go) {
			reset();
		}
		//transform.position = Vector3(x, y, z);
	} else {
		// transform.position += Vector3.down * speed * Time.deltaTime;
		if (go) {
			renderer.enabled = true;
			rigidbody2D.velocity = Vector3(0, (-1*speed), 0);
		}
	}
	// print(transform.position.y);
}

function begin() {
	go = true;
	print("go: " + go);
	print("beginn " + gameObject.name);
}

//hello hello
// we put the arrow back to its origin
// we 
function reset() {
	print("Arrow -> Destroy");
	//Destroy(gameObject);
	go = false;
	renderer.active = false;
}

function OnTriggerStay2D (other : Collider2D) {
	// print("TRIGGER STAYYY!!");
	// prints trigger stage when we hit stage
	// will be used to detect when it is the correct time to press
	if (other.gameObject.name == "A1_Left" || other.gameObject.name == "A2_Up" || other.gameObject.name == "A3_Down" || other.gameObject.name == "A4_Right") {
		print("Collided");
		if (other.gameObject.renderer.enabled) {
			print ("Note Caught, pos: " + other.gameObject.transform.position.y + " name: " + gameObject.name + " other name: " + other.gameObject.name);
			
			var stageInst : Stage;
			stageInst = GameObject.Find("Stage").GetComponent("Stage");
			stageInst.incrementScore();
			reset();
		}
	}	
}

function OnTriggerEnter2D(other:Collider2D){
	
}

function OnTriggerExit2D(other:Collider2D) {
	
	//print ("Trigger exit");
}

function setPosition(xx:float, yy:float, zz:float) {
	transform.position = Vector3(xx, yy, zz);
}


