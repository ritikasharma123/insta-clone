/*jQuery(function(){
        $("#submit").click(function(){
        $(".error").hide();
        var hasError = false;
        var passwordVal = $("#password").val();
        var checkVal = $("#password-check").val();
        if (passwordVal == '') {
            $("#password").after('<span class="error">Please enter a password.</span>');
            hasError = true;
        } else if (checkVal == '') {
            $("#password-check").after('<span class="error">Please re-enter your password.</span>');
            hasError = true;
        } else if (passwordVal != checkVal ) {
            $("#password-check").after('<span class="error">Passwords do not match.</span>');
            hasError = true;
        }
        if(hasError == true) {return false;}
    });
});
*/
// CODE HERE
//
$(document).ready(function(){
	$("form").attr('novalidate', 'novalidate'); //disables HTL5 validate Q from form
/*	$.get("https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json",
		function(data){
			  $( ".result" ).html( data );
			alert(data);
		});


		(make up UN & passwords)
*/
	function validate(){
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
	}

	$("#submit").click(function(){
		var hasError = false;
		var passwordValue = $("#password").val();
		var userNameValue = $("#username").val();

		if(passwordValue == '' && userNameValue == ''){
			$("#submit").on("click", function(){
				$(this).after('<div id="error2">The username you entered doesnt belong to an account. Please check your username and try again.</div>');
				$(this).off();
			});
			hasError = true;
		} else if (passwordValue == ''){
			$("#submit").on("click", function(){
				$(this).after('<div id="error1">Sorry, your password was incorrect. Please double-check your password.</div>');
				$(this).off();
			});
			hasError = true;
		} else if (userNameValue == ''){
			$("#submit").on("click", function(){
				$(this).after('<div id="error2">The username you entered doesnt belong to an account. Please check your username and try again.</div>');
			});
			hasError = true;
		}
	//	if(hasError == true){ return false;}
});
});
