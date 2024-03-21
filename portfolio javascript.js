function submission(){
    alert("Submitted successfully")
}
function validate_form() {
    var name = document.getElementById('s_name').value;
    var phone = document.getElementById('s_phone').value;
    var email = document.getElementById('s_email').value;
    var password = document.getElementById('s_pass').value;
    var confirm_password = document.getElementById('s_confirm').value;
    var country = document.getElementById('s_country').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var agree = document.querySelector('input[name="agree"]:checked');

    if (name === '' || phone === '' || email === '' || password === '' || confirm_password === '' ||
        country === '' || !gender || !agree) {
        alert('Kindly fill in the missing details');

    } else {
        if (name.length > 20) {
            alert('Name should be maximum 20 characters long.');
        } else {
            alert('Submitted successfully');
        }
    }
}

function change(){
    var paragraph = document.getElementById("change")
    paragraph.innerText = "This is amazing";
}

function concat(){
    var value_1 = document.getElementById("value_1").value
    var value_2 = document.getElementById("value_2").value
    if(value_1 === ''|| value_2 === ''){
        alert("Missing values")
    }else{
    alert(value_1 + value_2)
    }
}



