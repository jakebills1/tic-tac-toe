// Model
let winner = null;

// Elements
boxes = {
    a1: document.querySelector(".a1"), 
    a2: document.querySelector(".a2"), 
    a3: document.querySelector(".a3"), 
    b1: document.querySelector(".a4"), 
    b2: document.querySelector(".a5"), 
    b3: document.querySelector(".a6"), 
    c1: document.querySelector(".a7"), 
    c2: document.querySelector(".a8"), 
    c3: document.querySelector(".a9"), 
};

const val = function(element) {
    value = element.innerText;
    return value;
};

val(boxes.a1);

const checkUserWinner = function() {
    switch("xxx") {
        case val(a1) + val(a2) + val(a3):
        case val(b1) + val(b2) + val(b3):
        case val(c1) + val(c2) + val(c3):
        case val(a1) + val(b2) + val(c3):
        case val(c1) + val(b2) + val(a3):
            winner = "user";
            node = document.createElement("h1");
            node.textContent = "User Wins!";
            document.body.appendChild(node);
        default: 
            console.log("No Winner");
    }
};

const checkCompWinner = function() {
    switch("ooo") {
        case val(a1) + val(a2) + val(a3):
        case val(b1) + val(b2) + val(b3):
        case val(c1) + val(c2) + val(c3):
        case val(a1) + val(b2) + val(c3):
        case val(c1) + val(b2) + val(a3):
            node = document.createElement("h1");
            node.textContent = "User Wins!";
            document.body.appendChild(node);
            break;
        default: 
            console.log("No Winner");
    }
};



boxes.forEach( function(box) {
    box.addEventListener("click", function() {
        if(!val(box)) {
            event.target.innerHTML = "x";
            debugger
            checkUserWinner();
            if(winner !== "user") {
                console.log("comp turn");
            }



        } else {
            alert("That box is taken");
        }
    });
});


// game loop to start the game
// get user input
// function for computer selection
// conditional to check if user/computer/won
// ^^^ or if no one wins
// Function to grab values