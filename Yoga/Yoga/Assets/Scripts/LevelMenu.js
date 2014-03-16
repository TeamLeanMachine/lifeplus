#pragma strict

function Start () {

}

// Create Level Menu
function OnGUI() {

	var h1:double = (Screen.width*(0.20d));
    var w1:double = (Screen.height*(0.08d));

    //makes a GUI button at coordinates 10, 100, and a size of 200x40
    if(GUI.Button(Rect( (Screen.width/2 - (h1/2)), (Screen.height/2 + (w1/2) + (w1*0)) , h1, w1),"Level 1"))
    {
    	PlayerPrefs.SetInt("selectedLevel", 1);
       	//Loads a level
      	Application.LoadLevel("Yoga");
    }
    //makes a GUI button at coordinates 10, 100, and a size of 200x40
    if(GUI.Button(Rect( (Screen.width/2 - (h1/2)), (Screen.height/2 + (w1/2) + (w1*1)) , h1, w1),"Level 2"))
    {
    	PlayerPrefs.SetInt("selectedLevel", 2);
       	//Loads a level
      	Application.LoadLevel("Yoga");
    }
    //makes a GUI button at coordinates 10, 100, and a size of 200x40
    if(GUI.Button(Rect( (Screen.width/2 - (h1/2)), (Screen.height/2 + (w1/2) + (w1*2)) , h1, w1),"Level 3"))
    {
    	PlayerPrefs.SetInt("selectedLevel", 3);
       	//Loads a level
      	Application.LoadLevel("Yoga");
    }
    //makes a GUI button at coordinates 10, 100, and a size of 200x40
    if(GUI.Button(Rect( (Screen.width/2 - (h1/2)), (Screen.height/2 + (w1/2) + (w1*3)) , h1, w1),"Level 4"))
    {
    	PlayerPrefs.SetInt("selectedLevel", 4);
       	//Loads a level
      	Application.LoadLevel("Yoga");
    }
    //makes a GUI button at coordinates 10, 100, and a size of 200x40
    if(GUI.Button(Rect( (Screen.width/2 - (h1/2)), (Screen.height/2 + (w1/2) + (w1*4)) , h1, w1),"Level 5"))
    {
    	PlayerPrefs.SetInt("selectedLevel", 5);
       	//Loads a level
      	Application.LoadLevel("Yoga");
    }
}


function Update () {

}