//  storing the input value from prompt by converting it to number

let n = Number(prompt('enter your age'));

// function to check age

function ageCheck(age){
    if(age >= 18){
        console.log('You are eligible to vote');
    }else{
        console.log('You are not eligible to vote');
    }
}

// calling the function

ageCheck(n)


