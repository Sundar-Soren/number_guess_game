let inputNum = document.querySelector('#inputNum');
let choosenNum = document.querySelector('#choosenNum');
let hint = document.querySelector('#hint');
let submitBtn = document.querySelector('#submitBtn');


var randomNum = Math.floor((Math.random())*10);
console.log("random num:"+randomNum);

let nums = "";
submitBtn.addEventListener('click', function(){
    
    var inputNumByUser = inputNum.value;
    console.log("me:"+inputNumByUser);

    inputNum.value=''

    if(randomNum > inputNumByUser){
        hint.textContent="Choose High"
    }
    else if(randomNum < inputNumByUser){
        hint.textContent="Choose low"
    }

    else{
        hint.textContent="Currect"
    }
     
       nums = nums.toString() + inputNumByUser.toString()
      let finalNum = nums.split("");
       console.log(finalNum);
       choosenNum.textContent=`Previous Choose Number ${finalNum} `
    
})

