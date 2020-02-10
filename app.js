let colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'gold'];

let button = document.createElement('button');
let btnText = document.createTextNode('add square');
button.appendChild(btnText);
document.body.appendChild(button);

button.className = "btn btn-danger m-5";

let container = document.createElement('div');
document.body.appendChild(container);
container.className = 'd-flex flex-wrap';

button.addEventListener('click', function () {
    let square = document.createElement('div');
    let squareText = document.createTextNode(counter);
    container.appendChild(square);
    square.className = 'squares';
    



    square.addEventListener('mouseover', function () {
        square.appendChild(squareText)
    })
    square.addEventListener('mouseleave', function () {
        square.removeChild(squareText);
    })
     let i = 0; i < colors.length; i++
    square.addEventListener('click', function(){
        square.appendChild(colors[i]);
    })


    counter++

})

let counter = 1















