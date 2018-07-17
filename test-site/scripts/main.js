var myimage = document.querySelector('img');

myimage.onclick = function() {
    var mysrc = myimage.getAttribute('src');
    if(mysrc === 'images/test-image.jpg') {
        myimage.setAttribute('src','images/test-image2.jpg');
    } else {
        myimage.setAttribute('src','images/test-image.jpg');
    }
}

var mybutton = document.querySelector('button');
var myheading = document.querySelector('h1');

function setusername() {
    var myname = prompt('please enter your name.');
    localStorage.setItem('name',myname);
    myheading.textContent = '继续努力吧，' + myname;
}

if(!localStorage.getItem('name')) {
    setusername();
} else {
    var storedname  = localStorage.getItem('name');
    myheading.textContent = '继续努力吧,' + storedname;
}

mybutton.onclick = function() {
    setusername();
}