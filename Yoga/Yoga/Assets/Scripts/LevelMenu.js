#pragma strict

function Start () {

}

// Create Level Menu
function OnGUI() {

    //makes a GUI button at coordinates 10, 100, and a size of 200x40
    if(GUI.Button(Rect( (Screen.width/2 - 70), (Screen.height/2 + 10) , 100, 25 ),"Level 1"))
    {
    	PlayerPrefs.SetInt("selectedLevel", 1);
       	//Loads a level
      	Application.LoadLevel("Yoga");
    }
    //makes a GUI button at coordinates 10, 100, and a size of 200x40
    if(GUI.Button(Rect( (Screen.width/2 - 70), (Screen.height/2 + 35) , 100, 25 ),"Level 2"))
    {
    	PlayerPrefs.SetInt("selectedLevel", 2);
       	//Loads a level
      	Application.LoadLevel("Yoga");
    }
    //makes a GUI button at coordinates 10, 100, and a size of 200x40
    if(GUI.Button(Rect( (Screen.width/2 - 70), (Screen.height/2 + 60) , 100, 25 ),"Level 3"))
    {
    	PlayerPrefs.SetInt("selectedLevel", 3);
       	//Loads a level
      	Application.LoadLevel("Yoga");
    }
    //makes a GUI button at coordinates 10, 100, and a size of 200x40
    if(GUI.Button(Rect( (Screen.width/2 - 70), (Screen.height/2 + 85) , 100, 25 ),"Level 4"))
    {
    	PlayerPrefs.SetInt("selectedLevel", 4);
       	//Loads a level
      	Application.LoadLevel("Yoga");
    }
    //makes a GUI button at coordinates 10, 100, and a size of 200x40
    if(GUI.Button(Rect( (Screen.width/2 - 70), (Screen.height/2 + 110) , 100, 25 ),"Level 5"))
    {
    	PlayerPrefs.SetInt("selectedLevel", 5);
       	//Loads a level
      	Application.LoadLevel("Yoga");
    }
}


function Update () {

}