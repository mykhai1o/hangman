// const http = require("http");
// const { Response } = require("undici-types");

// http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Retrite content");
//     response.end();
// }).listen(8000);

// console.log("Server is running at port http://localhost:8000");


// http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write("<h1>Retrite content</h1>");
//     response.end();
// }).listen(8000);

// console.log("Server is running at port http://localhost:8000");



//____
// const os = require("os");
// const path = require("path");

// const userInfo = path.resolve(__filename);
// console.log(userInfo);

//----------------





//TASK 1
//___________________________________
// // include required modules here
// const os = require("os");
// const http = require("http");
// const path = require("path");
// // create server instance here
// const server = http.createServer((request, respond) => {
//     respond.writeHead(200, {"Content-Type": "text/html"});
//     respond.write(`
//         <h1>System information</h1>
//         <p>Current username: ${os.userInfo().username}</p>
//         <p>OS type: ${os.version()}</p>
//         <p>System work time: ${os.uptime()}</p>
//         <p>Current work directory: ${path.resolve(__dirname)}</p>
//         <p>Server file name: ${path.resolve(__filename)}</p>
//     `).listen(5000);
    
// });

// // start the server here
// // server.listen(5000);
// console.log("Server is running at port http://localhost:5000")
//___________________________________


//TASK 2 
//_______________________________

// const date = new Date();
// console.log(date.getHours())
// function getDay(d) {
//     switch (d){
//         case 0:
//             return "Sun";
//             break;  
//         case 1:
//             return "Mon";
//             break;
//         case 2:
//             return "Tue";
//             break;
//         case 3:
//             return "Wed";
//             break;
//         case 4:
//             return "Thu";
//             break;
//         case 5:
//             return "Fri";
//             break;
//         case 6:
//             return "Sat";
//     }
// }

// console.log(`${getDay(date.getDay())} ${date.getMonth()} ${date.getDate()} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getTimezoneOffset()}`);

// '${date.getHours()}:${date.getMinutes()}'
function getMessage() {
    const os = require("os");
    // const userName = os.userInfo().username;
    const date = new Date();
    if(5 <= date.getHours() && date.getHours < 12) {
        return `Good morning ${os.userInfo().username}`;
    } else if(12 <= date.getHours() && date.getHours() < 17) {
        return `Good afternoon ${os.userInfo().username}`;
    } else if(18 <= date.getHours() && date.getHours() < 23) {
        return `Good evening ${os.userInfo().username}`;
    } else if(23 <= date.getHours() && date.getHours() < 5) {
        return `Good night ${os.userInfo().username}`;
    } 
}

// console.log(`${getDay(date.getDay())} ${date.getMonth()} ${date.getDate()} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getTimezoneOffset()}`);


//___________________

const sum = function(array) {
    if(array.length === 0) {
        return 0;
    } else{
        return array[0] + sum(array.slice(1));
    }
};
sum([2,3])
