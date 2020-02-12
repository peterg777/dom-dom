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
    square.id = counter;

    



    square.addEventListener('mouseover', function () {
        square.appendChild(squareText)
    })
    square.addEventListener('mouseleave', function () {
        square.removeChild(squareText);
    })

    square.addEventListener('click', function(){
        // this generates a random color for squares
        let randomIndex = Math.floor(Math.random() * colors.length);
        square.style.backgroundColor = colors[randomIndex];
        

        
        
    });
     
    square.addEventListener('dblclick', function () {
        //if the square dblclicked is even?
        if (square.id % 2 === 0) {
            //if there is no next sibling, alert us!
            if (condition) {
                alert('There is no square to delete!');
            //delete the next sibling
            } else {
                container.removeChild(square.nextSibling);
            }
        //if the square dblclicked is not even aka odd
        } else {

            //if there is no previous sibling, alert us!
            if (condition) {
             
            //delete the previous sibling
            } else {
                alert('There is no square to remove!');
            }
        }
    });


    counter++

})

let counter = 1















