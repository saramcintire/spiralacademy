/* 	Sara McIntire
	CIS 330
	Dr. Kovalchick
	Chapter 9 Assignment
	Date: 8/1/2021
	
	Filename: spiral3.js
	
*/

//define variables containing img src values
	var whcl = "images/whcl.png";
	var health = "images/health.png";
	var farming = "images/farming.png";
	var beauty = "images/beauty.png";
	var living = "images/living.png";
	var jobs = "images/jobs.png";
		
//This function decodes and parses the data from the query string that was automatically passed
//from the form on the specify options page when the submit button was clicked.  It then 
//assigns the name-value pairs from the parsed query string to the queryArray array and calls
//the createCookie function.

function parseQuery()
{	if (location.search)
	{	var queryData = decodeURIComponent(location.search);
		queryData = queryData.substring(1, queryData.length);
		while (queryData.indexOf("+") !==-1)
		{	queryData = queryData.replace("+", " ");
		}
		queryData = decodeURIComponent(queryData);
		queryArray = queryData.split("&");
	}
	createCookie();
}	

//This function adds all the name-value pairs in the queryArray array 
//to the document.cookie and calls the displayData() function.

function createCookie()
{	for (var i = 0; i < queryArray.length; i++)
	{	document.cookie = queryArray[i];
	}
	displayData();
}

//This function creates a formData variable and assigns the value of the document.cookie to it.
//It creates a formArray variable and a list variable that is assigned the value of the ul element 
//in the fieldset on the review selections page.  The cookie name-value pairs stored in the 
//formArray variable are then split and assigned to the formArray array.  The formArray element values 
//are then assigned to li elements that are created and appended to the list object to be 
//displayed on the page.

function displayData()
{	var formData = document.cookie;
	var formArray = [];
	var list = document.querySelector("fieldset ul");
	formArray = formData.split("; ");
	for (var i = 0; i < formArray.length; i++)
	{	var newItem = document.createElement("li");
		newItem.textContent = formArray[i];
		list.appendChild(newItem);
	}
}

//calls parseQuery() function whenever page is loaded or reloaded
window.addEventListener("load", parseQuery(), false);
