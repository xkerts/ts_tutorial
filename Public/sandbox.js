"use strict";
// // //LESSON 1 - Compiling Typescript
// //   // const character = 'Kevin';
// //   // console.log(character);
// //   // const inputs = document.querySelectorAll('input');
// //   // inputs.forEach(input => {
// //   //   console.log(input);
// //   // });
// // //LESSON 2 - Type Basics
// //   // let character = 'Kevin';
// //   // let age = 27;
// //   // let isBlackBelt = false;
// //   // const circ = (diameter: number)=>{
// //   //   return Math.round(diameter * Math.PI);
// //   // }
// //   // console.log((circ(age)))
// // //LESSON 3 - Arrays and Objects
// //   // //Arrays
// //   //   let names = ['Kevin', 'Kerts'];
// //   //   names.push('Paz');
// //   //   let mixed = ['Kevin', 27, 'Paz', true];
// //   //   mixed.push(28);
// //   //   mixed[0] = 'Kerts';
// //   // //Objects
// //   //   let ninja = {
// //   //     name: 'Kevin',
// //   //     age: 27,
// //   //     belt: 'Black'
// //   //   }
// //   //   ninja.name = 'Kerts';
// //   //LESSON 4 - Explicit Types
// //     // Explicit Types
// //       let character:string;
// //       let age:number;
// //       let isLoggedIn:boolean;
// //       age = 27;
// //     // Arrays
// //       let ninjas:string [] = [];
// //       ninjas = ['Kevin', 'Kerts'];
// //     // Union Types
// //       let mixed:(string|number) [] = [];
// //       mixed.push(20);
// //       mixed.push('Kevin');
// //       // console.table(mixed);
// //       let uid: string|number;
// //       uid = 123;
// //       uid = '123';
// //     // Objects
// //       let ninjaOne: object;
// //       ninjaOne = {name: 'Kevin', age:25}
// //       let ninjaTwo: {
// //         name: string,
// //         age: number
// //       }
// // LESSON 5 - Dynamic Types
//   let nombre: any = 25;
//   nombre = true;
//   console.log(nombre);
//   nombre = 'Kevin'
//   console.log(nombre);
//   //Arrays
//   let mixed:any [] = [];
//   mixed.push(5);
//   mixed.push('Kevin');
//   mixed.push(true);
//   mixed.push('Ecuador');
//   console.table(mixed);
//   //Objects
//   let ninja: {name: any, age: any}
//   ninja = {name: 'Kevin', age: 25}
//   console.log(ninja);
//LESSON 8 - Functions
// let greet: Function;
// greet = () =>{
//     console.log("Hola Mundo!");
// }
// const suma = (a: number, b: number, c?: number)=>{
//     console.log((a*b) / (a));
// }
// suma(2,5);
// const resta = (a: number, b: number):number =>{
//     return a-b;
// }
// let result = resta(2,3);
// console.log(result);
//LESSON 9 - TYPE ALIASES
// type StringOrNum = string | number;
// type userObj = {name: string, uid: StringOrNum}
// const logDetails = (uid: string|number, item: string)=>{ //Not using Type Alias
//     console.log(`${item} has a uid of ${uid}`);
// }
// const greet = (user: {name: string, uid: StringOrNum})=>{ //using Type Alias
//     console.log(`${user.name} says hello`);
// }
// const greet2 = (user: userObj)=>{ //Using an Object Type Alias
//     console.log(`${user.name} says hello`);
// }
//LESSON 10 - Function Signatures
// //let greet: Function;
// //Example 1
//     let greet: (a: string, b: string)=>void;
//     greet = (name: string, message: string)=>{
//         console.log(`${name} says: ${message}`);
//     }
//     greet('Kevin','Chupalo');
// //Example 2
//     let calc: (a: number, b:number, c:string)=>number;
//     calc = (numOne: number, numTwo:number, operator:string)=>{
//         if(operator==='+'){
//             return numOne + numTwo
//         } else if(operator=='-'){
//             return numOne - numTwo
//         } else if(operator=='*'){
//             return numOne * numTwo
//         } else if(operator=='/'){
//             return numOne / numTwo
//         } else{
//             console.log("Operador invalido");
//             return 0;
//         }
//     }
//     console.log( calc(2,2,'/'));
// //Example 3
// let logIn: (obj: {name: string, id:number})=>void;
// logIn = (user: {name: string, id:number})=>{
//     console.log("Ingreso exisoto");
//     console.log(`${user.name} inicio sesion`);
// }
// let user = {
//     name: 'Kevin',
//     id: 12
// }
// logIn(user);
