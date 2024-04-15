let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('#reset-btn');
let newGameBtn=document.querySelector('#new-btn');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('.msg');

let turnO=true;   //player x   playerO 

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


// boxes
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");

        if(turnO){                 // player o
            box.innerText="O";
            turnO=false; 

        }
        else{                    // player x
            box.innerText="X";
            turnO=true;
        }

        box.disabled=true;   // for again donot change

        checkWinner();

    });
});

// jab suru kare to khali jo jaye
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
// baki ke box nii chalenge
// baki ke box nii chalenge
const disableBoxes=()=>{
    for(let box of boxes){
        if (box.innerText === "") { // Sirf khali boxes ko disable karo
            box.disabled=true;
        }
    }
};

// jeet jane pr chalega
const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};


// box ko check karega
const checkWinner=()=>{
    for(let pattern of winPattern ) {

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){        //  for empty
            if(pos1Val === pos2Val && pos2Val === pos3Val){            // for same value
                console.log("winner",pos1Val)

                showWinner(pos1Val);
            }
        }
      
    }
  


};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

