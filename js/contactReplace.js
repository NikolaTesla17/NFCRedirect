var userAgent = navigator.userAgent || navigator.vendor || window.opera;
var correctLink = "contacts/contacts.vcf";

if (/windows phone/i.test(userAgent)) {
    console.log("windows phone!?!?!?!?!?");
}

if (/android/i.test(userAgent)) {
    correctLink = "contacts/contacts.csv";
}

// iOS detection from: http://stackoverflow.com/a/9039885/177710
if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    correctLink = "contacts/contacts.vcf";
}

document.getElementById('contactLink').setAttribute('href', correctLink);
