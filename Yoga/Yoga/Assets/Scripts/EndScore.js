#pragma strict

var state: GUIText;

function Start () {
	
	var percent = PlayerPrefs.GetInt("newScoreRating");
	state = GameObject.Find("State").GetComponent("GUIText");
	print("percent: " + percent);
	
	if (percent == 3) {
		state.text = "GREAT JOB!";
	} else if (percent == 2) {
		state.text = "Good Job";
	} else if (percent == 1) {
		state.text = "You Pass";
	} else if (percent == 0) {
		state.text = "Fail :(";
	}
	
}

function OnGUI() {

    //makes a GUI button at coordinates 10, 100, and a size of 200x40
    if(GUI.Button(Rect( (Screen.width/2 - 70), (Screen.height/2 + 40) , 100, 25 ),"Play Again?"))
    {
       //Loads a level
      Application.LoadLevel("YogaLevelMenu");
    }
}

function Update () {

}