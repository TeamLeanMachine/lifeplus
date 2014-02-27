using UnityEngine;
using System.Collections;

public class JumpingJack : MonoBehaviour
{
	public GameObject jump;
	public GameObject stand;

	void Start()
	{

	}

	// Update is called once per frame
	void Update ()
	{
		if(Input.GetKey ("space"))
		{
			jump.SetActive(true);
			stand.SetActive(false);
		}
		else
		{
			jump.SetActive(false);
			stand.SetActive(true);
		}
	}
}
