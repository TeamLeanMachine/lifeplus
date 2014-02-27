using UnityEngine;
using System.Collections;

public class FrigeControl : MonoBehaviour {

	public StatKeeper stats;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnTriggerStay2D(Collider2D other) 
	{
		if (other.tag == "Boundary")
		{
			return;
		}
		if (other.tag == "Player")
		{
			if(Input.GetKeyDown ("space"))
			{
				stats.energy++;
				stats.bodyfat++;
				stats.cholesterol++;
				stats.UpdateStats ();
			}
		}
	}
}