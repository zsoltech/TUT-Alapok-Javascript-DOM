// 

const form = document.getElementById('user-form');

const h1 = document.getElementsByName('cimsor');
const classname = document.getElementsByClassName('item');


const ul = document.querySelector('.items');

ul.remove();

//ul.firstElementChild.remove();
ul.lastElementChild.textContent = 'megváltozott!!!';
ul.children[1].innerHTML = '<h1>hello</h1>';

const button = document.querySelector('#user-form input.button');

// button.style.background = 'green';
// button.style.color = 'red';

const newDiv = document.createElement('div');

newDiv.className = 'newDivClass';
newDiv.classList.add('newDivClass2');
newDiv.classList.remove('newDivClass2');
newDiv.id = 'newDivId';
newDiv.setAttribute('title', 'New Div Title');
newDiv.removeAttribute('title');

const ndText = document.createTextNode('Hello világ!!!!!!');
newDiv.appendChild(ndText);

const container = document.querySelector('body .container');

container.insertBefore(newDiv, form);

newDiv.style.color = '#ff0';

newDiv.remove();

// --- EVENTS

button.addEventListener('mouseup', eventRunner);
button.addEventListener('mousedown', eventRunner);
button.addEventListener('dblclick', eventRunner);
button.addEventListener('click', eventRunner);

function eventRunner(ev) {
    //ev.preventDefault();
    console.log(`ESEMÉNY: ${ev.type}`);
}

button.addEventListener('mouseover', (ev) => {
    
    //console.log(ev.target);
    ev.target.style.background = 'green';
});

button.addEventListener('mouseout', (ev) => {
    //console.log(ev.target);
    ev.target.style.background = 'red';
});

// button.addEventListener('mousemove', (ev) => {
//     console.log(ev.offsetX, ev.offsetY);
// });

button.addEventListener('click', (ev) => {
    //document.querySelector('#user-form').style.background = 'red';
    //document.querySelector('body').classList.add('bg-sotet');
});

const nameInput = document.querySelector('#name');
nameInput.addEventListener('keydown', (ev) => {
   // console.log(`ESEMÉNY: ${ev.type}`);
});

nameInput.addEventListener('keypress', (ev) => {    
    console.log(`ESEMÉNY: ${ev.type} ${ev.keyCode}`);
});

nameInput.addEventListener('focus', eventRunner);
nameInput.addEventListener('blur', eventRunner);

nameInput.addEventListener('cut', eventRunner);
nameInput.addEventListener('paste', (ev) => {
    //ev.preventDefault();
});

nameInput.addEventListener('input', eventRunner);

const select = document.querySelector('#user-form select');

select.addEventListener('change', (ev) => {
     console.log(ev.target.value);
});

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
});

//console.log(container);