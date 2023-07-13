//  storing the input value from prompt by converting it to number

let n = Number(prompt('enter a number'));

// function to print table

function printTable(num){
   for(let i = 1; i<=10 ; i++){
        console.log(num + ' ' + 'x' + ' ' + i +' ' + '=', num*i);
   }
}

// calling the function
printTable(n)




