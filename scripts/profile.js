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

function submitAll() {
    const firstName = document.getElementById("profileName").value;
    const lastName = document.getElementById("profileLastName").value;
    const profileEmail = document.getElementById("profileEmail").value;
    const profileCountry = document.getElementById("profileCountry").value;

    localStorage.setItem("PROFILE", firstName);
    localStorage.setItem("PROFILE-LAST-NAME", lastName);
    localStorage.setItem("PROFILE-EMAIL", profileEmail);
    localStorage.setItem("PROFILE-COUNTRY", profileCountry);
}