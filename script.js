// 'use strict';

// let pomodoro = document.querySelector('.pomodoro');
// let shortBreak = document.querySelector('.shortbreak');
// let longBreak = document.querySelector('.longbreak');
// let minute = document.querySelector('.minute');
// let second = document.querySelector('.second');
// let startBtn = document.querySelector('.start');

// let pomodoroNum = 25;
// let shortBreakNum = 5;
// let longBreakNum = 15;

// pomodoro.addEventListener('click', () => {
//     pomodoro.style.backgroundColor = "#0000004d";
//     minute.textContent = 25;
//     shortBreak.style.backgroundColor = "transparent";
//     longBreak.style.backgroundColor = "transparent";
// })

// shortBreak.addEventListener('click', () => {
//     shortBreak.style.backgroundColor = "#0000004d";
//     minute.textContent = 5;
//     pomodoro.style.backgroundColor = "transparent";
//     longBreak.style.backgroundColor = "transparent";
// })

// longBreak.addEventListener('click', () => {
//     longBreak.style.backgroundColor = "#0000004d";
//     minute.textContent = 15;
//     shortBreak.style.backgroundColor = "transparent";
//     pomodoro.style.backgroundColor = "transparent";
// })

// let startingMinute = Number(minute.textContent);
// let time = startingMinute * 60;

// startBtn.addEventListener('click', () => {
//     setInterval(updateCountdown, 1000);

//     function updateCountdown() {
//         let minuteNum = Math.floor(time / 60);
//         let secondNum = time % 60;

//         minute.textContent = minuteNum;
//         second.textContent = secondNum < 10 ? '0' + secondNum : secondNum;
//         time--;
//     }
// });