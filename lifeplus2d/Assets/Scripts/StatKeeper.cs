using UnityEngine;
using System.Collections;

public class StatKeeper : MonoBehaviour {

	public int energy;
	public int strength;
	public int endurance;
	public int bodyfat;
	public int cholesterol;

	public GUIText statText;

	public void UpdateStats()
	{
		statText.text = "Body Statistics:\n\nEnergy: " + energy
						+ "\nStrength: " + strength
						+ "\nEndurance: " + endurance
						+ "\nBodyfat: " + bodyfat
						+ "\nCholesterol: " + cholesterol;
	}

	// Use this for initialization
	void Start () {
		UpdateStats ();
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	
}
