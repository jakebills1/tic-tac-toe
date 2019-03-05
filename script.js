// Model
let winner = null;

// Elements
boxes = {
    a1: document.querySelector(".a1"), 
    a2: document.querySelector(".a2"), 
    a3: document.querySelector(".a3"), 
    b1: document.querySelector(".b1"), 
    b2: document.querySelector(".b2"), 
    b3: document.querySelector(".b3"), 
    c1: document.querySelector(".c1"), 
    c2: document.querySelector(".c2"), 
    c3: document.querySelector(".c3"), 
};

boxesArr = [
    document.querySelector(".a1"), 
    document.querySelector(".a2"), 
    document.querySelector(".a3"), 
    document.querySelector(".b1"), 
    document.querySelector(".b2"), 
    document.querySelector(".b3"), 
    document.querySelector(".c1"), 
    document.querySelector(".c2"), 
    document.querySelector(".c3"), 
];

const val = function(element) {
    value = element.innerText;
    return value;
};

val(boxes.a1);

const checkUserWinner = function() {
    switch("XXX") {
        case val(boxes.a1) + val(boxes.a2) + val(boxes.a3):
        case val(boxes.b1) + val(boxes.b2) + val(boxes.b3):
        case val(boxes.c1) + val(boxes.c2) + val(boxes.c3):
        case val(boxes.a1) + val(boxes.b2) + val(boxes.c3):
        case val(boxes.c1) + val(boxes.b2) + val(boxes.a3):
            winner = "user";
            node = document.createElement("h1");
            node.textContent = "User Wins!";
            document.body.appendChild(node);
        default: 
            console.log("No Winner");
    }
};

const checkCompWinner = function() {
    switch("OOO") {
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



 boxesArr.forEach( function(box) {
     console.log(box)
    box.addEventListener("click", function() {
        if(!val(box)) {
            event.target.innerHTML = "X";
            checkUserWinner();
            if(winner !== "user") {
                console.log("comp turn");
                let selectedBox;
                    boxItem = boxesArr[Math.floor(Math.random() * 10)];
                    box = val(boxItem)
                    if(box === "")
                    boxItem.innerHTML = "O";
                console.log(selectedBox);
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