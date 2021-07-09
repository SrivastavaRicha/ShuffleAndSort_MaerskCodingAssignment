const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 const colors = [
     '#6F98A8',
     '#2B8EAD',
     '#2F454E',
     '#2B8EAD',
     '#2F454E',
     '#BFBFBF',
     '#BFBFBF',
     '#6F98A8',
     '#2F454E'
    ];

 const boxes = [
     document.getElementById('1'),
     document.getElementById('2'),
     document.getElementById('3'),
     document.getElementById('4'),
     document.getElementById('5'),
     document.getElementById('6'),
     document.getElementById('7'),
     document.getElementById('8'),
     document.getElementById('9')
 ];

const setValues = () => {
    for(let i=0; i<9; i++) {
        boxes[i].innerHTML = nums[i];
        boxes[i].style.backgroundColor = colors[nums[i] - 1];
        boxes[i].style.borderColor = colors[nums[i] - 1];
    }
}
 
const shuffle = () => {
   for (let i = 8; i > 0; i--) {
     const rand = Math.floor(Math.random() * (i + 1));
     [nums[i], nums[rand]] = [nums[rand], nums[i]];
   }
   setValues();
 }
 
const sort = () => {
   nums.sort();
   setValues();
 }

 window.onload = function () {
     setValues();
 }