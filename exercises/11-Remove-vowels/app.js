
const rapid = (myString) => {
    let consonants = [];
    let vocales=[];
    for(let position in myString){
        if(['a','e','i','o','u'].includes(myString[position]) == false)
            consonants.push(myString[position])     
    }
    let Mayuzculas=consonants.join('');
    return Mayuzculas.toLocaleUpperCase();
    // return consonants.join('');
   
    
}

// From this line up Do not change code below
let str = "John";
console.log(rapid(str));