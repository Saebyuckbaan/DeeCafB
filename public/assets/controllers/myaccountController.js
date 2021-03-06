Parse.initialize("WSw9tShiRqVNExj4V7QQ2uxZMGYrZpzqune2fn6i", "RnMNB3sfpKXXQz8j7XTjiruQ7xRl34jwmYvdv89P");

$(document).ready(function ( event ) {

	isUserSignedIn(event);
	appendUserName(event);
	appendPrefilled(event);

});

$("#formSubmit").click(submitForm);

function submitForm( event ) {
	//Call current user
	var currentUser = Parse.User.current();


	console.log(currentUser.get("password") );
	//Update information
	currentUser.set("email"    , $("#newEmail").val());
	currentUser.set("firstname", $("#newFirstname").val());
	currentUser.set("lastname" , $("#newLastname").val());
	currentUser.set("weight"   , $("#newWeight").val());

	currentUser.save(null, {
	  success: function(user) {
	    // Hooray! Let them use the app now.
	    bootbox.alert("Your information has been successfully changed!", function( )
	    {
			window.location.href = "./";
		});

	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    bootbox.alert("Error: " + error.code + " " + error.message);
	  }
	});
}

function isUserSignedIn ( event ) {

	var currentUser = Parse.User.current();

	if ( !currentUser ) {
	    // show the signup or login page
	    alert("You have to sign in first");
		window.location.href = "./sign_in";
	}
	else
	{
		//show name after user

	}

}

function appendPrefilled ( event )
{
	var currentUser = Parse.User.current();


	$("#newWeight").attr("value", currentUser.get("weight"));
	$("#newLastname").attr("value",currentUser.get("lastname") );
	$("#newFirstname").attr("value",currentUser.get("firstname") );
	$("#newEmail").attr("value",currentUser.get("email") );
}

function appendFirstName ( event )
{

	var currentUser = Parse.User.current();
	var firstname = currentUser.get("firstname");

	$("#firstname").append(firstname);
	$("#firstname").show();
}

function appendUserName ( event )
{

	var currentUser = Parse.User.current();
	var firstname = currentUser.get("username");

	$("#username").append(firstname);
	$("#username").show();
}
