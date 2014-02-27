using UnityEngine;
using System.Collections;

public class CouchControl : MonoBehaviour {

	public StatKeeper stats;
	private int lasttime;

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
			if((int)Time.time != lasttime)
//			if(Input.GetKeyDown ("space"))
			{
				lasttime = (int)Time.time;
				stats.energy++;
				stats.UpdateStats ();
			}
		}
	}
}