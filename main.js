//Output even numbers in the loop

for(let evenNumber = 2; evenNumber <= 10; evenNumber++){
  if(evenNumber % 2 == 0){
    alert(evenNumber);
  }
}

//Repeat until the input is correct
let greaterNumber;
do{
  greaterNumber = prompt('Enter number greater than 100', 0)
} while (greaterNumber <= 100 && greaterNumber != null) {

}
