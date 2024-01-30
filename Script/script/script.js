// 1. Составьте программу, которая присваивает переменной d значение 7, а затем выводит на экран: в первой строке - это значение, во второй – квадрат этого значения, в третьей – куб этого значения. Программа должна выводить на экран новое значение.
let d = 7;
console.log (d)
console.log(d**2)
console.log(d**3)
// 2.Составьте программу, которая принимает с клавиатуры два целых числа и, если первое больше второго, выводит на экран их сумму, если же наоборот – выводит на экран их произведение. В случае же, если числа одинаковы, программа выводит на экран сообщение "числа одинаковые".
let num1= Number(prompt('Inter first number'));
let num2= Number(prompt('Inter second number'));
if(num1>num2){
    console.log(num1+num2);
}
else if(num1<num2){
    console.log(num1*num2);
}
else{
    console.log('eti chislo odinakovie');
}

// 3.Составьте программу, которая принимает с клавиатуры целое число и, если оно положительное, выводит его куб.
let number=  Number(prompt('Inter an integer.'));
if (number>0){
console.log(number**3);
}
else if (number<0){
    console.log('This number is negativ.')
 }
// 4.Составьте программу, которая принимает с клавиатуры два числа: первое – количество учеников в классе, второе – количество стульев в кабинете.  Программа проверит соответствие между этими двумя значениями и выведет на экран соответствующую информацию.     ввод: 24, 28 ⇒ вывод: стульев хватает; ввод: 24, 22 ⇒ вывод: стульев не хватает.
let number1=  Number(prompt('Inter number of student.'));
let number2=  Number(prompt('Inter the number of chairs.')); 
if (number1<=number2){
console.log('there enough chairs.')
}
else if(number1>number2){
    console.log('there not enough chairs.')
}
// 5.Составьте программу, которая выводит на экран все однозначные положительные числа в возрастающем порядке. 
for(let i=1;i<=10;i++){
console.log (i)
}
// 6.Написать цикл, который выводит те числа из массива, которые больше или равны 15.
Array = [5,12,47,10,15,0,25,30];
for (let i = 0; i<Array.length; i++) {
    if (i >= 15) {
        console.log(i);
    }
}
// 7.Написать цикл, который выводит только нечетные числа массива 
Array = [5,12,47,10,15,0,25,30];
for (let i = 0; i<Array.length; i++) {
    if (i%2!==0) {
        console.log(i);
     }  
    }
// 8.Вывести только те значения массива, индекс которых кратен трем.
Array= [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
for (let i = 0; i<Array.length; i++) {
  if(i%3===0){
    console.log(i)
  } 
}
// 9.Найти сумму нечетных чисел и вывести в консоль. 
let sum=0;
for (let i = 0; i<=10; i++) {
      sum+=i;          
    }
    console.log(sum);
// 10.Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.
Array = [1,2,3,4,5,6,7,8,9,10];
let sum1=0;
for (let i = 0; i<Array.length; i++) {
    if (Array[i]%2!==0){
        sum1+=Array[i];
       }         
    }
    console.log(sum);
let sum2 =0;
for (let i = 0; i<=Array.length; i++) {
   if (Array[i]%2===0){
    sum2+=Array[i];
   }        
  }
  console.log(sum2);
