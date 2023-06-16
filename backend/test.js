import axios from 'axios';
import db from "./database.js";

// axios({
//     method: 'post',
//     url: 'http://localhost:8000/task',
//     data: {
//         description: 'Make rice'
//     }
//     })
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// axios({
//     method: 'get',
//     url: 'http://localhost:8000/tasks',
// })
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// axios({s
//     method: 'put',
//     url: 'http://localhost:8000/task/1',
//     data: {
//         isCompleted: true
//     }
// })
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


axios({
    method: 'delete',
    url: 'http://localhost:8000/task/1',
})
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
