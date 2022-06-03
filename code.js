// function myFunction() {
//     alert("Hello! My name is Cassidy !!");
//     }

// const btnDisplay = document.getElementById('btnMadeBy');

// btnDisplay.addEventListener('click', ()=>{
//     document.getElementById('paragraph').innerText = 'Hello ! My Name Is Cassidy'
// })


const btnDisplays= document.getElementById('btnDisplays');
btnDisplays.addEventListener('click', ()=>{
    var Name= document.getElementById('name').value;
    var Surname= document.getElementById('surname').value;
    var FullName= Name +' ' +Surname;
    document.getElementById('fullName').innerText= FullName;
});


// var i =0;
// approach 1
// function display() {
//     alert('hello my name is cassidy');
// }

//approach 2 (easier)
// btnDisplay.addEventListener('click', ()=>{
//     alert('Hello world!');
// })

// btnDisplay.addEventListener('click', display);


