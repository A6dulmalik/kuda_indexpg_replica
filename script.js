let nav = document.querySelector('.nav');
let bars = document.querySelector('.fa-bars');
let cancel = document.querySelector('.fa-xmark-large');
let flag = document.querySelector('#flag');
const navlinks = document.querySelector('.navlinks');
const signInButton = document.querySelector('.signInDiv button');
const signInParagraph = document.querySelector('.signInDiv p');

// Hamburger effect on mobile screen 

// Upon tapping the hamburger icon
bars.addEventListener('click', function(){
    bars.style.display = 'none';
    flag.style.display = 'none';
    cancel.style.display = 'block';
    navlinks.style.display = 'flex';
    signInButton.style.display = 'block';
    signInParagraph.style.display = 'block';
    nav.style.boxShadow = 'none'; // Remove the box shadow
    nav.style.position = 'fixed'; // Remove the box shadow
});

// Upon tapping on the cancel icon
cancel.addEventListener('click', function(){
    flag.style.display = 'block';
    bars.style.display = 'block';
    cancel.style.display = 'none';
    navlinks.style.display = 'none';
    signInButton.style.display = 'none';
    signInParagraph.style.display = 'none';
    nav.style.boxShadow = '12px 10px 5px rgba(0, 0, 0, 0.1)'; // Restore the original box shadow
    nav.style.position = 'fixed';

});

