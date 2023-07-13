function dollarsTorupees(){
    let dollars = document.getElementById('inp');
    let rupees = dollars.value * 74.5;
    document.getElementById('result').innerText = rupees;
}