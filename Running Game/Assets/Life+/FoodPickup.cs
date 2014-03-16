using UnityEngine;
using System.Collections;

public class FoodPickup : MonoBehaviour
{
	private bool landed = false;	
	public int calorie = 100;
	public bool healthy = true;
	public int engery = 10;
	public int value = 5; 

	private Score score;

	void Awake()
	{
		score = GameObject.Find("Score").GetComponent<Score>();
	}

	void OnTriggerEnter2D (Collider2D other)
	{
		// If the player enters the trigger zone...
		if(other.tag == "Player")
		{
			Grab();
			Destroy(transform.root.gameObject);
		}
		// Otherwise lands on the ground...
		else if(other.tag == "ground" && !landed)
		{
			// ... set the animator trigger parameter Land.
			transform.parent = null;
			gameObject.AddComponent<Rigidbody2D>();
			landed = true;		
		}
	}
	void Grab() 
	{
		score.score += value;
	}
}

