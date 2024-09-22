let overlay = document.getElementById('overlay');
let background = document.getElementById('background');

// Existing functionality for the actionButton
document.getElementById('actionButton').addEventListener('click', function () {
    document.querySelector('background').classList.add('blur');
    document.querySelector('.logo').classList.remove('visible');
    document.querySelector('.logo').classList.add('hidden');
    document.querySelector('.content').classList.add('visible');
    document.querySelector('.infomenu').classList.add('hidden');
    document.querySelector('.closemenu').classList.add('visible');
    overlay.classList.remove('hidden');
    overlay.classList.add('fade-in');
});

// New functionality for the closeButton
document.getElementById('closeButton').addEventListener('click', function () {
    document.querySelector('background').classList.remove('blur');
    document.querySelector('.logo').classList.add('visible');
    document.querySelector('.logo').classList.remove('hidden');
    document.querySelector('.content').classList.remove('visible');
    document.querySelector('.infomenu').classList.remove('hidden');
    document.querySelector('.closemenu').classList.remove('visible');
    overlay.classList.add('hidden');
    overlay.classList.remove('fade-in');
});