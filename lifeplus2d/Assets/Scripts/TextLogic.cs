using UnityEngine;
using System.Collections;

public class TextLogic : MonoBehaviour
{
	public GUIText jumpText;
	public GUIText timerText;

	private int jumps;
	private int timer;
	private float lastTime;

	// Use this for initialization
	void Start ()
	{
		jumps = 0;
		timer = 15;
		lastTime = Time.time;
		
		jumpText.text = "Jumps: " + jumps;
		timerText.text = "Timer: " + timer;
	}
	
	// Update is called once per frame
	void Update ()
	{
		if(Time.time > lastTime+1)
		{
			timer--;
			timerText.text = "Timer: " + timer;
			lastTime = Time.time;
		}
		if(Input.GetKeyDown ("space"))
		{
			jumps += 1;
			jumpText.text = "Jumps: " + jumps;
		}
		if(timer <= 0)
		{
			timerText.text = "Timer: EXPIRED";
			jumpText.text = "Jumps: DONE";
		}
	}
}
