//maak een functie genaamd myFibonacci() die een getal ontvangt en in een array de fibonacci sequence terug geeft
// het laatste getal in de sequence mag niet groter zijn dan 1000.
//de fibonacci sequence begint met 0 en eindigt met 987 [0 ,1 ,1 , 2, 3, ... , 610, 987]
//----------------------------------------------------------------------------------------------------------------------

function myFibonacci(number){
    let num1 = 0, num2 = 1, sum = 0;
    const fibArr = [];
    while(sum < number) {
        sum = num1;
        num1 = num1 + num2;
        num2 = sum;
        if(sum < number) {
            fibArr.push(sum);
        }
    }
    return fibArr;
}

//----------------------------------------------------------------------------------------------------------------------

module.exports = {
    myFibonacci: myFibonacci
};