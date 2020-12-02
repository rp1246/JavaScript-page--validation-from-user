function processForm(){

    // get data
    var student_name = document.getElementById("name").value;
    var e_mail = document.getElementById("email").value;
    var check_box = document.getElementById("agree");
    var current_gpa = document.getElementById("currentGPA").value;
    var current_credits = document.getElementById("currentCredits").value;
    var new_credits = document.getElementById("newCredits").value;
    var gpa_increase = document.getElementById("GPAincrease").value;

    // check data validation
    var error = 0;
    if (  /^[a-zA-Z ]{2,30}$/.test(student_name) ){
        document.getElementById("nameErr").innerHTML = '';
    }else{
        document.getElementById("nameErr").innerHTML = 'Format Error! Name should be non-empty and formed by English characters only.'
        error = 1;
    }
    if( /^.+[@].+$/.test(e_mail) ){
        document.getElementById("emailErr").innerHTML = '';
    }else{
        document.getElementById("emailErr").innerHTML = 'Email Format Error!';
        error = 1;
    }
    if ( check_box.checked ){
        document.getElementById("agreeErr").innerHTML = '';
    }else{
        document.getElementById("agreeErr").innerHTML = 'Plz agree the terms and conditions first!';
        error = 1;
    }
    if ( /^[0-9]+(.[0-9]+)?$/.test(current_gpa) ){
        document.getElementById("currentGPAErr").innerHTML = '';
    }else{
        document.getElementById("currentGPAErr").innerHTML = 'It must be a non-negative number!';
        error = 1;
    }
    if ( /^[0-9]+$/.test(current_credits) ){
        document.getElementById("currentCreditsErr").innerHTML = '';
    }else{
        document.getElementById("currentCreditsErr").innerHTML = 'It has to be non-negative integer!';
        error = 1;
    }
    if ( /^[0-9]+$/.test(new_credits) && (new_credits != 0) ){
        document.getElementById("newCreditsErr").innerHTML = '';
    }else{
        document.getElementById("newCreditsErr").innerHTML = 'It has to be non-negative integer!';
        error = 1;
    }
    if ( /^-?[0-9]+(.[0-9]+)?$/.test(gpa_increase) ){
        document.getElementById("GPAincreaseErr").innerHTML = '';
    }else{
        document.getElementById("GPAincreaseErr").innerHTML = 'Only real number is accepted!';
        error = 1;
    }

    // if there's no error, calculate GPA
    if (error == 1){
        document.getElementById("amount").innerHTML = "????";
        return;
    }
    var current_gpa_hour = current_gpa * current_credits;
    var desired_gpa = +current_gpa + +gpa_increase;
    var desired_gpa_hour = desired_gpa * ( +current_credits + +new_credits );
    var gpa_hours_increase = +desired_gpa_hour - +current_gpa_hour;
    var new_gpa = gpa_hours_increase / new_credits;
    document.getElementById("amount").innerHTML = parseFloat((new_gpa).toFixed(2)).toString();

}