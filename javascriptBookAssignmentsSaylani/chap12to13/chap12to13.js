        // var user_input = prompt('Enter The Thing You Want');
        // document.write(typeof user_input)
        // No.(1) 

        //  var input=prompt('Enter The Character Or Number');
        // if (input === "a"){
        //     document.write("String");
        // }
        // else{
        //     document.write("Number")
        // }

        // Question 2:

        // var a = +prompt("Enter the First Number")
        // var b = +prompt("Enter the Second Number")
        // if (a > b){
        //     document.write(a);
        // }
        // else if (a===b){
        //     document.write("Both Values Are Equal");
        // }
        // else{
        //     document.write(b);
        // }

        //Question 3:


        //  var a = +prompt("Enter the Number")
        
        // if (a < 0){
        //     document.write("The Value Is Negative");
        // }
        // else if (a>0){
        //     document.write("The Value Is Positive");
        // }
        // else{
        //     document.write('The Value Is Equal to Zero');
        // }

        //Question 4:
        //  var a = prompt("Enter the Number")
        
        // if (a < 0){
        //     document.write("The Value Is Negative");
        // }
        // else if (a>0){
        //     document.write("The Value Is Positive");
        // }
        // else{
        //     document.write('The Value Is Equal to Zero');
        // }


     // Question 4
//         var a = prompt("Enter the Character")
//         if (a.length>1){
//            alert("Enter the One Character Only");
// }
// if (a === "a"){
//     document.write("Vowel")
// }
// else if(a === "e"){
//     document.write("Vowel")

// }
// else if(a === "i"){
//     document.write("Vowel")

// }
// else if(a === "o"){
//     document.write("Vowel")

// }
// else if(a === "u"){
//     document.write("Vowel")

// }
// else{
//     document.write("False")
// }

//Question 5

// var correctpassword = "rajabakhtawar"
// var userpass = prompt("Enter Your Password")
// if (correctpassword === userpass){
//     alert("You have Entered The Correct Password")
// }
// else if(userpass === ""){
//     alert("Please Enter Password")
// }
// else{
//     alert("Incorrect Password")
// }

//Question 6 
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// alert(greeting)

// Question 7
var usertime = +prompt("Enter The Time In The 24 Hour Format")
if(usertime >=0000 && usertime < 1200){
    alert("Good Morning")
}
else if(usertime >=1200 && usertime < 1700){
    alert("Good Afternoon")
}
else if(usertime >=1700 && usertime < 2100){
    alert("Good Evening")
}
else if(usertime >=2100 && usertime <= 2359){
    alert("Good Night")
}