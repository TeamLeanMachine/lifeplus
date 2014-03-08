using UnityEngine;
using System.Collections;

public class PlayerPref : MonoBehaviour {


	// Use this for initialization
	void Start () {
		PlayerPrefs.SetInt ("Energy", 100);
		PlayerPrefs.SetInt ("Coints", 200);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
