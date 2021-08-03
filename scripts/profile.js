window.addEventListener('load', () => {

    var pname = localStorage.getItem('PROFILE');
    document.getElementById('profile-name').innerHTML = pname;

    var plname = localStorage.getItem('PROFILE-LAST-NAME');
    document.getElementById('profile-last-name').innerHTML = plname;

    var pemail = localStorage.getItem('PROFILE-EMAIL');
    document.getElementById('profile-email').innerHTML = pemail;

    var pcountry = localStorage.getItem('PROFILE-COUNTRY');
    document.getElementById('profile-country').innerHTML = pcountry;

})

function profileNameSubmit() {

    var profileName = document.getElementById('profileName').value;
    localStorage.setItem("PROFILE", profileName);
}

function profileLastNameSubmit() {
    var x = document.getElementById('profileLastName').value;
    localStorage.setItem("PROFILE-LAST-NAME", x);
}

function profileEmailSubmit() {
    var x = document.getElementById('profileEmail').value;
    localStorage.setItem("PROFILE-EMAIL", x);
}

function profileCountrySubmit() {
    var x = document.getElementById('profileCountry').value;
    localStorage.setItem("PROFILE-COUNTRY", x);
}

function submitAll() {
    let firstName = document.getElementById("profileName").value;
    let lastName = document.getElementById("profileLastName").value;
    let profileEmail = document.getElementById("profileEmail").value;
    let profileCountry = document.getElementById("profileCountry").value;

    localStorage.setItem("PROFILE", firstName);
    localStorage.setItem("PROFILE-LAST-NAME", lastName);
    localStorage.setItem("PROFILE-EMAIL", profileEmail);
    localStorage.setItem("PROFILE-COUNTRY", profileCountry);
}