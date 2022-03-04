/* 	Sara McIntire
	CIS 330
	Dr. Kovalchick
	Chapter 9 Assignment
	Date: 8/1/2021
	
	Filename: spiral.js
	
*/

//define variables containing img src values
	var whcl = "images/whcl.png";
	var health = "images/health.png";
	var farming = "images/farming.png";
	var beauty = "images/beauty.png";
	var living = "images/living.png";
	var jobs = "images/jobs.png";
		
//global variables containing arrays for tuition and fees costs for each type of student, 
//validity and error message variables and a queryArray variable to store the name-value pairs parsed 
//from the query string

	var intu = [1200, 100];
	var outtu = [1400, 120];
	var intertu = [1000, 80];
	var onfee = [0];
	var infee = [800, 80];
	var outfee = [1000, 100];
	var interfee = [1200, 120];
	var validity = true;
	var errorMess = document.getElementsByName("errorMessage");
	var queryArray = [];

//this function displays the tuition and fee costs in the tables  
function popTables()
//creates variables for tuition and fee costs using global array values 
{	var ftoct = intu[0];
	var ftocf = infee[0];
	var ftoc = intu[0] + infee[0];
	var ftont = intu[0];
	var ftonf = onfee[0];
	var fton = intu[0];
	var ptoct = intu[1];
	var ptocf = infee[1];
	var ptoc = intu[1] + infee[1];
	var ptont = intu[1];
	var ptonf = onfee[0];
	var pton = intu[1];
	var ftocot = outtu[0];
	var ftocof = outfee[0];
	var ftoco = outtu[0] + outfee[0];
	var ftolot = outtu[0];
	var ftolof = onfee[0];
	var ftolo = outtu[0];
	var ptocot = outtu[1];
	var ptocof = outfee[1];
	var ptoco = outtu[1] + outfee[1];
	var ptonot = outtu[1];
	var ptonof = onfee[0];
	var ptono = outtu[1];
	var ftocit = intertu[0];
	var ftocif = interfee[0];
	var ftoci = intertu[0] + interfee[0];
	var ftonit = intertu[0];
	var ftonif = onfee[0];
	var ftoni = intertu[0];
	var ptocit = intertu[1];
	var ptocif = interfee[1];
	var ptoci = intertu[1] + interfee[1];
	var ptonit = intertu[1];
	var ptonif = onfee[0];
	var ptoni = intertu[1];

//creates an single array with all the values to be displayed on tables	
	var poptable = [ftoct, ftocf, ftoc, ftont, ftonf, fton, ptoct, ptocf, ptoc, ptont, ptonf, 
	pton, ftocot, ftocof, ftoco, ftolot, ftolof, ftolo, ptocot, ptocof, ptoco, ptonot, ptonof, 
	ptono, ftocit, ftocif, ftoci, ftonit, ftonif, ftoni, ptocit, ptocif, ptoci, ptonit, ptonif, ptoni];

//creates a tableCosts array which will be assigned all the p elements in the table
	var tableCosts = document.getElementsByTagName("p");
	
//this for loop assigns all the "p" elements in the table to the tableCosts array, 
//then populates each "p" element in the array with the correct value from the poptable array	
	for (var i = 0; i < tableCosts.length-1; i++)
	{			
		tableCosts[i].textContent += " " + "$" + poptable[i];
	}		
}

//this function calculates tuition and fees for each kind of student 
//on the basis of the user input values, using 
//several nested if/else loops and global array values 
function calcTuitFees()
{	var numCredits = document.getElementById("creditsnum").value;
	var fTime = document.getElementById("ftime").checked;
	var pTime = document.getElementById("ptime").checked;
	var residency = document.getElementById("residency").selectedIndex;
	var oncampus = document.getElementById("oncampus").checked;
	var tuition = 0;
	var fees = 0;
	
//calculates tuition and fees for all types of full-time students 
	if (fTime === true)		
	{	if (numCredits > 18)
		{	if (residency === 0)
			{	tuition = intu[0] + (numCredits -18) * intu[1];			
				if (oncampus === true)
				{	fees = infee[0];
				}
				else
				{	fees = 0;
				}
			}
			else if (residency === 1 )
			{	tuition = outtu[0] + (numCredits - 18) * outtu[1];
				if (oncampus === true)
				{	fees = outfee[0];
				}
				else
				{	fees = 0;
				}
			}
			else if (residency === 2)
			{	tuition = intertu[0] + (numCredits - 18) * intertu[1];
				if (oncampus === true)
				{	fees = interfee[0];
				}
				else
				{	fees = 0;
				}
			}
		}
		else 
		{	if (residency === 0)
			{	tuition = intu[0];			
				if (oncampus === true)
				{	fees = infee[0];
				}
				else
				{	fees = 0;
				}
			}
			else if (residency === 1)
			{	tuition = outtu[0];
				if (oncampus === true)
				{	fees = outfee[0];
				}
				else
				{	fees = 0;
				}		
			}
			else if (residency === 2)
			{	tuition = intertu[0];
				if (oncampus === true)
				{	fees = interfee[0];
				}
				else
				{	fees = 0;
				}
			}
		}
	}
	
//calculates tuition and fees for all types of part-time students
	
	else if (pTime = true)
	{	if  (residency === 0)
		{	tuition = numCredits * intu[1];
			if (oncampus === true)
			{	fees = numCredits * infee[1];
			}
			else
			{	fees = 0;
			}	
		}
		else if (residency === 1)
		{	tuition = numCredits * outtu[1];
			if (oncampus === true)
			{	fees = numCredits * outfee[1];
			}
			else
			{	fees = 0;
			}	
		}
		
		else if (residency === 2)
		{	tuition = numCredits * intertu[1];
			if (oncampus === true)
			{	fees = numCredits * interfee[1];
			}
			else
			{	fees = 0;
			}
		}
	}	
//sends calculated tuition and fees as parameters to the calcTotal function
	calcTotal(tuition, fees);			
}

//This function accepts tuition and fees as parameters, adds them together to get the total cost,
//and then sends tuition, fees and total cost as parameters to the createCookie function.

function calcTotal(tuitionT, feesT)
{	var totalT = tuitionT + feesT;
	createCookie(tuitionT, feesT, totalT);
}

//This function assigns the decoded query string from the location.search for the specifyOptions page
//to the queryData variable, removes the beginning question mark, replaces the plus signs with spaces,
//decodes the queryData values again then splits them at the ampersands and assigns the name-value pairs
//to the queryArray array.  

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
}

//This function receives the calculated values for tuition, fees and total cost as parameter and assigns
//them as name-value pairs to the document.cookie.  It assigns all the name-value pairs stored in 
//queryArray to the document.cookie.  It uses an if/else statement to make sure the correct name-value 
//pair for the "oncampus" checkbox will be assigned to the document.cookie whether the "oncampus" checkbox 
//is checked or not.  It then submits the form on the specify options page, which opens the review selections page.

function createCookie(tuition, fees, total)
{	document.cookie = "Tuition=" + tuition;
	document.cookie = "Fees=" + fees;
	document.cookie = "Total=" + total;
	
	for (var i = 0; i < queryArray.length; i++)
	{	document.cookie = queryArray[i];
	}
	
	var oncampus = document.getElementById("oncampus").checked;
	if (oncampus === true)
	{	document.cookie = "on-campus=yes";
	} else 
	{	document.cookie = "on-campus=no";
	}
		
	document.getElementsByTagName("form")[0].submit();
}

//This function receives the submit event as a parameter and prevents the form from 
//submitting. Instead, it runs all the user input validation functions and if validity is 
//false, it displays error messages so the user can fix their input.  If validity is true, 
//it calls the calcTuitFees function.
 	
function validateForm(evt)
{	evt.preventDefault();
	validity = true;	
	validateTime();
	validateRes();	
	validateNumCredits();
	
	if (validity === true)
	{	document.getElementById("errorText").textContent = "";
		document.getElementById("errorText").style.display = "none";
		calcTuitFees();
	} else
	{	document.getElementById("errorText").textContent = "Please fix the indicated problems and then click Calculate Cost.";
		document.getElementById("errorText").style.display = "block"; scroll(0,0);
	}
}

//This function validates the full-time/part-time radio buttons, and if they are not checked, 
//it sets validity to false, displays an error message next to them and outlines them in red.

function validateTime()
{	var timeButtons = document.getElementsByName("full or part-time");
	var errorDiv = document.getElementById("errorMessageT");
	try 
	{	if (!timeButtons[0].checked && !timeButtons[1].checked)
		{	timeButtons[0].style.outline = "1px solid red";
			timeButtons[1].style.outline = "1px solid red";
			throw "Please select full-time or part-time.";
		}
		else
		{	timeButtons[0].style.outline = "";
			timeButtons[1].style.outline = "";
			errorDiv.style.display = "none";
		}
	}
		catch(msg)
	{	errorDiv.style.display = "block";
		errorDiv.textContent = msg;
		validity = false;
	}
}

//This function validates the residency select input element and if no choice has been 
//selected, it sets validity to false, displays an error message, 
// outlines the select element in red and changes the background to red.

function validateRes()
{	var res = document.getElementById("residency");
	var errorDiv = document.getElementById("errorMessageR");
	
	try
	{	if (res.selectedIndex === -1)
		{	res.style.outline = "1px solid red";
			res.style.background = "rgb(255,233,233)";
			throw "Please select your residency.";
		}
		else 
		{	res.style.outline = "";
			res.style.background = "#333";
			errorDiv.style.display = "none";
		}
	}
	catch(msg)
	{	errorDiv.style.display = "block";
		errorDiv.textContent = msg;
		validity = false;
	}
}

//This function validates whether the user has entered the number of credits 
//and whether the number of credits entered matches the user's 
//full-time/part-time selection, and if it does not, validity is set to false, an
//error message is displayed, the full-time/part-time radio buttons and the credits
//number input element are outlined in red and the credits number input element's 
//background is changed to red.

function validateNumCredits()
{	var ftpt = document.getElementsByName("full or part-time");
	var credits = document.getElementById("creditsnum");
	var timeButtons = document.getElementsByName("full or part-time");
	var errorDiv = document.getElementById("errorMessageC");
	try
	{	if (credits.value === "0")
		{	credits.style.outline = "1px solid red";
			credits.style.background = "rgb(255,233,233)";
			credits.style.color = "red";
			throw "Please enter your credits.";	
		}
	
		else if (ftpt[0].checked === true)
		{	if (credits.value > 0 && credits.value < 12)
			{	credits.style.outline = "1px solid red";
				credits.style.background = "rgb(255,233,233)";
				credits.style.color = "red";
				timeButtons[0].style.outline = "1px solid red";
				timeButtons[1].style.outline = "1px solid red";
				throw "Full-time is 12-18 credits.";
			}
			else 
			{	credits.style.outline = "";
				credits.style.background = "#333";
				credits.style.color = "white";
				timeButtons[0].style.outline = "";
				timeButtons[1].style.outline = "";
				errorDiv.style.display = "none";
			}
		}
		else if (ftpt[1].checked === true)
		{	if (credits.value > 11)
			{	credits.style.outline = "1px solid red";
				credits.style.background = "rgb(255,233,233)";
				credits.style.color = "red";
				timeButtons[0].style.outline = "1px solid red";
				timeButtons[1].style.outline = "1px solid red";
				throw "Part-time is 1-11 credits.";
			}
			else
			{	credits.style.outline = "";
				credits.style.background = "#333";
				credits.style.color = "white";
				timeButtons[0].style.outline = "";
				timeButtons[1].style.outline = "";
				errorDiv.style.display = "none";
			}
		}
	}
	catch(msg)
	{	errorDiv.style.display = "block";
		errorDiv.textContent = msg;
		validity = false;
	}
}

//This function removes all error messages and resets all error display changes and cost displays to 
//their default values whenever any input element other than the submit button is clicked.
function resetError()
{	document.getElementById("errorText").textContent = "";
	document.getElementById("errorText").style.display = "none";
	document.getElementById("ftime").style.outline = "";
	document.getElementById("ptime").style.outline = "";
	document.getElementById("residency").style.outline = "";
	document.getElementById("creditsnum").style.outline = "";
	document.getElementById("residency").style.background = "#333";
	document.getElementById("creditsnum").style.background = "#333";
	document.getElementById("creditsnum").style.color = "white";
	for (var i = 0; i < errorMess.length; i++)
	{	errorMess[i].textContent = "";
	}
	var costs = document.getElementsByName("cost");
	for (var i = 0; i < costs.length; i++)
	{	costs[i].textContent = "";
	}
}
	
//This function sets all form field values to default status and 
//calls the popTables, createEventListeners and parseQuery functions.
function resetForm() 
{	document.getElementById("creditsnum").value = 0;
	document.getElementById("residency").value = -1;
	document.getElementsByName("full or part-time").unchecked = true;
	document.getElementById("oncampus").unchecked = true;
		
	popTables();
	createEventListeners();
	parseQuery();
}

//This function creates event listeners that call the resetError function in 
//response to clicks on all user input elements besides the submit button,
//and creates an event listener for the submit button which calls the validateForm function. 
function createEventListeners() 
{	var form = document.getElementsByTagName("form")[0];
	form.addEventListener("submit", validateForm, false);
	document.getElementById("ftime").addEventListener("click", resetError, false);
	document.getElementById("ptime").addEventListener("click", resetError, false);
	document.getElementById("residency").addEventListener("click", resetError, false);
	document.getElementById("oncampus").addEventListener("click", resetError, false);
	document.getElementById("creditsnum").addEventListener("click", resetError, false);
	 
}

//calls the resetForm function whenever page is loaded or reloaded
window.addEventListener("load", resetForm(), false);


