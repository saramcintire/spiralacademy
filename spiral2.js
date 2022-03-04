/* 	Sara McIntire
	CIS 330
	Dr. Kovalchick
	Chapter 9 Assignment
	Date: 8/2/2021
	
	Filename: spiral2.js
	
*/

//define variables containing img src values
	var whcl = "images/whcl.png";
	var health = "images/health.png";
	var farming = "images/farming.png";
	var beauty = "images/beauty.png";
	var living = "images/living.png";
	var jobs = "images/jobs.png";
		
//define variables for current date object and querData variable to store
//query data string	
	var curDate = new Date();
	var querData;
		
//This function assigns the value of the current date stored in the Date object to the 
//"date" hidden input element on the spiralCost page, then assembles all the name-value pairs
//of input from the spiralCost page into a query string stored in the querData variable.  
//The function then opens the specifyOptions page and sends it the query string in the querData variable.
 
	function copyInfo()
	{	document.getElementById("date").value = curDate;
		querData = "?first name=" + document.getElementById("fname").value;
		querData += "&last name=" + document.getElementById("lname").value;
		querData += "&major=" + document.querySelector("#userData select").value;
		querData += "&date=" + document.getElementById("date").value;
		location.href = "specifyOptions.html" + querData;
	}

//creates event listener for the "options" button on the spiralCost page and calls the copyInfo function	
	document.getElementById("options").addEventListener("click", copyInfo, false);