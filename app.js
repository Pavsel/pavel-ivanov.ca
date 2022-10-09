const btn1 = document.querySelector('#open-case1');
const close1 = document.querySelector('#close1');
const popup1 = document.querySelector('#pc1');

btn1.addEventListener('click', function (event) {
    console.log('Button Clicked');

    popup1.classList.add('active');
    document.body.classList.add('scroll-stop');
});

close1.addEventListener('click', function (event) {
    console.log('Button Clicked');

    popup1.classList.remove('active');
    document.body.classList.remove('scroll-stop');

});

const btn2 = document.querySelector('#open-case2');
const close2 = document.querySelector('#close2');
const popup2 = document.querySelector('#pc2');


btn2.addEventListener('click', function (event) {
    console.log('Button Clicked');

    popup2.classList.add('active');
    document.body.classList.add('scroll-stop');
});

close2.addEventListener('click', function (event) {
    console.log('Button Clicked');

    popup2.classList.remove('active');
    document.body.classList.remove('scroll-stop');

});

window.addEventListener('load', (event) => {
    popup1.classList.remove('hidden');
    popup2.classList.remove('hidden');
});


