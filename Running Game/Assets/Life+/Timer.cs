using UnityEngine;
using System.Collections;

public class Timer : MonoBehaviour
{
	public float timeRemaining = 60f;
	private bool pauseEnabled = false;

	void Start()
	{
		InvokeRepeating ("decreaseTimeRemaining", 1.0f, 1.0f);
	}
	
	void Update()
	{
		if (timeRemaining == 0)
		{
			//End game here
			Time.timeScale = 0;
		}

		if(Input.GetKeyDown("escape")){
			
			//check if game is already paused       
			if(pauseEnabled == true){
				//unpause the game
				pauseEnabled = false;
				Time.timeScale = 1;         
			}
			
			//else if game isn't paused, then pause it
			else if(pauseEnabled == false){
				pauseEnabled = true;
				Time.timeScale = 0;
			}
		}
		
		guiText.text = "Time Left: " + timeRemaining;
		
	}
	
	void decreaseTimeRemaining()
	{
		timeRemaining --;
	}
}
