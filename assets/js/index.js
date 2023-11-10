function formValidation(e){
    e.preventDefault();

    var username = document.getElementById("username")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var confpassword = document.getElementById("confpassword")
    var date = document.getElementById("date")
    var country = document.getElementById("country")
    var gender = document.getElementById("gender")
    var checkbox= document.getElementById("checkbox")

    var formValid = true;

    if(username.value.length < 6){
        formValid = false;
        alert("Username must be more than 6 characters")
    }
    else if(!email.value.endsWith("@gmail.com")){
        formValid = false;
        alert("must use @gmail")
    }
    else if(password.value.length == 0){
        formValid = false;
        alert("password must be inserted")
    }
    else if(password.value != confpassword.value){
        formValid = false;
        alert("password and confirm password is not correct")
    }
    else if(!gender.value){
        formValid = false;
        alert("please pick a gender")
    }
    else if(!country.value){
        formValid = false;
        alert("please pick a country")
    }
    else if(!date.value){
        formValid = false;
        alert("please pick your date of birth")
    }
    else if(!checkbox.checked){
        formValid = false;
        alert("checkbox must be checked")
    }

    if(formValid){
        document.getElementById("form").submit();
        alert("Successfully submitted.")
    }
}