function countDigits(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (!isNaN(text[i]) && text[i] !== ' ') {
            count++;
        }
    }
    return count;
}

console.log(countDigits("Hello, my name is Bob. I am 25 years old. I am a student"));
console.log(countDigits("sdj234jf4a e1f3"));

// // 20-dars Asyncronus 
// count = 0;

// function countLetter(a, b) {
//     for (let i = 0; i < b.length; i++) {
//         if (b[i] === a) {
//             count++;
//         }
//     }
//     return count;
// }
// // let newWord = (countLetter("e", "Hello, my name is Bob. I am 25 years old. I am a student"));
// // console.log(newWord);
// let engeener = countLetter('e', "engineer");
// console.log(engeener);



// Async with Callback
// console.log("Jack Ma maslahatlari");
// list = [
//     'Be a good student',
//     "choose a good boss",
//     "start working on your own",
//     "Do things what you strong at",
//     "Make investment to youngs",
//     "Have a rest"
// ];

// function getJackMaAdvice(age, callback) {
//     if (typeof age != 'number') callback("please insert number", null);
//     else if (age <= 20) callback(null, list[0]);
//     else if (age > 20 && age <= 30) callback(null, list[1]);
//     else if (age > 30 && age <= 40) callback(null, list[2]);
//     else if (age > 40 && age <= 50) callback(null, list[3]);
//     else if (age > 50 && age <= 60) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             console.log("I am waiting for you");
//             callback(null, list[5]);
//         }, 1000);

//     }
// }
// console.log("Passed here 0");
// getJackMaAdvice(75, (err, data) => {
//     if (err) console.log(err);

//     else console.log(data);

// });
// console.log("passed here 1");


// async function getJackMaAdvice(age) {
//     if (typeof age != 'number') throw Error("please insert number");
//     else if (age <= 20) return list[0];
//     else if (age > 20 && age <= 30) return list[1];
//     else if (age > 30 && age <= 40) return list[2];
//     else if (age > 40 && age <= 50) return list[3];
//     else if (age > 50 && age <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("I am waiting for you");
//                 resolve(list[5]);
//             }, 5000);
//         })
//     }
// }
// console.log("Passed here 0");

// Then catch
// getJackMaAdvice("25").then(data => {
//     console.log("advice:", data);
// }).catch(err => {
//     console.log("Error:", err);

// })
// console.log("Passed here 1");

// async await
// async function run() {
//     let answer = await getJackMaAdvice(65);
//     console.log(answer);
//     answer = getJackMaAdvice(25);
//     console.log(answer);
//     answer = await getJackMaAdvice(35);
//     console.log(answer);
//     answer = await getJackMaAdvice(45);
//     console.log(answer);
//     answer = await getJackMaAdvice(55);
//     console.log(answer);
//     answer = await getJackMaAdvice(15);
//     console.log(answer)
// }
// run()

// 19-dars 1-masala
// console.log("Jack Ma maslahatlari");
// list = [
//     'Be a good student',
//     "choose a good boss",
//     "start working on your own",
//     "Do things what you strong at",
//     "Make investment to youngs",
//     "Have a rest"
// ];

// function getJackMaAdvice(age, callback) {
//     if (typeof age != 'number') callback("please insert number", null);
//     else if (age <= 20) callback(null, list[0]);
//     else if (age > 20 && age <= 30) callback(null, list[1]);
//     else if (age > 30 && age <= 40) callback(null, list[2]);
//     else if (age > 40 && age <= 50) callback(null, list[3]);
//     else if (age > 50 && age <= 60) callback(null, list[4]);
//     else {
//         setTimeout(() => {
//             console.log("I am waiting for you");
//             callback(null, list[5]);
//         }, 5000);

//     }
// }
// console.log("Passed here 0");

// getJackMaAdvice("55", (err, data) => {
//     if (err) console.log("Error:", err);
//     else console.log("Advice:", data);
// })

// console.log("Passed here 0");