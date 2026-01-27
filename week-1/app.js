const Sale = require('./Sale.js');
const fs = require('fs');
const path = require('path');
const os = require('os');


const sale1 = new Sale(100, 2, 'Book', '2024-06-01', 'USD');
// console.log(`Total Sale Amount: ${sale1.getTotal()}`);

// fs.readFile("config.txt", (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }else {
//         console.log("File content:", data.toString());
//     }
// })


// fs.readFile("deploy.json", (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }else {
//         const deploy = JSON.parse(data);
//         console.log("Server Configuration:", deploy.server);
//     }   
// })

// let errorLog = `\n ${new Date().toISOString()} - Error: User tried to login multiple times`;

// fs.appendFile("error.log", errorLog, (err) => {
//     if (err) {
//         console.error("Error writing to file:", err);
//     } else {
//         console.log("Error log written successfully.");
//     }
// })

// // fs.unlink("error.log", (err) => {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log("error.log was deleted");
// //     }
// // })

const errorLogFile = path.join(__dirname, "logs", "error.txt");
console.log(errorLogFile)

let downloadFolder = path.join(__dirname, "downloads");
console.log(downloadFolder)


// fs.mkdir()


console.log(os.cpus())