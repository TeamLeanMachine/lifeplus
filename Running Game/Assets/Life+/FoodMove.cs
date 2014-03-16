using UnityEngine;
using System.Collections;

public class FoodMove : MonoBehaviour
{
	private SpriteRenderer ren;
	public float moveSpeed = 8f;
	
	void Awake()
	{
		// Setting up the references.
		ren = transform.GetComponent<SpriteRenderer> ();
	}
	
	void FixedUpdate ()
	{	
		// Set the enemy's velocity to moveSpeed in the x direction.
		rigidbody2D.velocity = new Vector2(-1*(transform.localScale.x * moveSpeed), rigidbody2D.velocity.y);	
		if (!ren.isVisible) 
		{
			Destroy(transform.root.gameObject);
		}
	}
}

