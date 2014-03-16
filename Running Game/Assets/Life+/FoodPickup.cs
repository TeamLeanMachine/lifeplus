using UnityEngine;
using System.Collections;

public class FoodPickup : MonoBehaviour
{
	private bool landed = false;	
	public int calorie = 100;
	public bool healthy = true;
	public int engery = 10;
	public int value = 5; 

	void OnTriggerEnter2D (Collider2D other)
	{
		// If the player enters the trigger zone...
		if(other.tag == "Player")
		{
			// Destroy the crate.
			Destroy(transform.root.gameObject);
		}
		// Otherwise if the crate lands on the ground...
		else if(other.tag == "ground" && !landed)
		{
			// ... set the animator trigger parameter Land.
			//anim.SetTrigger("Land");
			transform.parent = null;
			gameObject.AddComponent<Rigidbody2D>();
			landed = true;		
		}
	}

	void updateGameStats()
	{

	}
}

